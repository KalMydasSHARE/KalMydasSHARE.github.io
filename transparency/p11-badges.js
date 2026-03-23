/**
 * P-11 Transparence — Badge "Automatique" vs "Corrigé"
 * Script injecté dans /transparency/ pour ajouter les badges visuels.
 * Lit les events ManualCorrection depuis la blockchain et marque les trades.
 */
(function() {
  'use strict';

  // ===== CONFIG =====
  const POOLS = window.__KAL_POOLS || {};
  const RPC_URL = 'https://sepolia-rollup.arbitrum.io/rpc';
  const MANUAL_CORRECTION_TOPIC = '0x' + keccak256('ManualCorrection(uint256,bool,uint256,string,uint256)');

  // Event signature pour ManualCorrection(uint256 indexed correctionId, bool isGain, uint256 amount, string reason, uint256 timestamp)
  // On va utiliser ethers.js déjà chargé par le frontend
  const BADGE_STYLES = {
    auto: {
      bg: '#dcfce7',
      border: '#bbf7d0',
      color: '#166534',
      text: '✓ Automatique'
    },
    manual: {
      bg: '#ffedd5',
      border: '#fed7aa',
      color: '#9a3412',
      text: '⚠️ Corrigé'
    }
  };

  // ===== STORAGE pour les corrections manuelles =====
  let manualCorrections = new Map(); // amount+timestamp → reason

  // ===== Fetch ManualCorrection events depuis la blockchain =====
  async function fetchManualCorrections() {
    try {
      // Utiliser l'instance ethers.js existante si disponible
      if (typeof window.ethers === 'undefined') {
        console.log('[P-11] ethers.js non disponible, badges désactivés');
        return;
      }

      const provider = new window.ethers.JsonRpcProvider(RPC_URL);

      // ABI minimal pour ManualCorrection
      const eventABI = [
        'event ManualCorrection(uint256 indexed correctionId, bool isGain, uint256 amount, string reason, uint256 timestamp)',
        'event GainsReported(uint256 indexed correctionId, uint256 gainAmount, uint256 newSharePrice, uint256 timestamp, bool isManual, string reason)',
        'event LossReported(uint256 indexed correctionId, uint256 lossAmount, uint256 newSharePrice, uint256 timestamp, bool isManual, string reason)'
      ];

      const iface = new window.ethers.Interface(eventABI);

      // Chercher les events sur chaque pool
      const poolAddresses = Object.values(POOLS).map(p => p.address).filter(Boolean);

      for (const addr of poolAddresses) {
        try {
          const contract = new window.ethers.Contract(addr, eventABI, provider);

          // Récupérer les ManualCorrection des 30 derniers jours (~216000 blocs)
          const currentBlock = await provider.getBlockNumber();
          const fromBlock = Math.max(0, currentBlock - 216000);

          const events = await contract.queryFilter('ManualCorrection', fromBlock);

          for (const ev of events) {
            const key = `${Number(ev.args.amount)}_${ev.args.isGain}`;
            manualCorrections.set(key, {
              correctionId: Number(ev.args.correctionId),
              isGain: ev.args.isGain,
              amount: Number(ev.args.amount) / 1e6,
              reason: ev.args.reason,
              timestamp: Number(ev.args.timestamp),
              txHash: ev.transactionHash
            });
          }
        } catch (e) {
          // Silently continue
        }
      }

      console.log(`[P-11] ${manualCorrections.size} corrections manuelles trouvées`);
    } catch (e) {
      console.log('[P-11] Erreur fetch corrections:', e.message);
    }
  }

  // ===== Créer un badge HTML =====
  function createBadge(type, reason) {
    const style = BADGE_STYLES[type];
    const badge = document.createElement('span');
    badge.style.cssText = `
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2px 8px;
      border-radius: 9999px;
      font-size: 11px;
      font-weight: 600;
      background: ${style.bg};
      color: ${style.color};
      border: 1px solid ${style.border};
      margin-left: 8px;
      white-space: nowrap;
    `;
    badge.textContent = style.text;
    badge.className = 'p11-badge';

    if (reason) {
      badge.title = reason;
      badge.style.cursor = 'help';
    }

    return badge;
  }

  // ===== Créer une tooltip avec la raison =====
  function createReasonTag(reason) {
    const tag = document.createElement('div');
    tag.style.cssText = `
      font-size: 10px;
      color: #9a3412;
      background: #fff7ed;
      border: 1px solid #fed7aa;
      border-radius: 4px;
      padding: 1px 6px;
      margin-top: 2px;
      font-style: italic;
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `;
    tag.textContent = reason.length > 40 ? reason.substring(0, 40) + '...' : reason;
    tag.title = reason;
    tag.className = 'p11-reason';
    return tag;
  }

  // ===== Ajouter badges aux lignes de trades =====
  function addBadgesToTrades() {
    // Supprimer les badges existants
    document.querySelectorAll('.p11-badge, .p11-reason').forEach(el => el.remove());

    // Trouver toutes les lignes de trades dans le DOM
    // Le tableau des trades utilise des divs avec flex
    const tradeRows = document.querySelectorAll('table tbody tr, [class*="trade"], [class*="operation"]');

    if (tradeRows.length === 0) {
      // Fallback : chercher les lignes contenant des montants ($xxx.xx)
      const allRows = document.querySelectorAll('div[class*="rounded"], div[class*="border"]');

      allRows.forEach(row => {
        const text = row.textContent || '';

        // Chercher les montants formatés (+$xxx ou -$xxx)
        const amountMatch = text.match(/([+-])\$?([\d,]+\.?\d*)/);
        if (!amountMatch) return;

        const isGain = amountMatch[1] === '+';
        const amount = parseFloat(amountMatch[2].replace(',', ''));

        // Vérifier si c'est une correction manuelle
        const key = `${Math.round(amount * 1e6)}_${isGain}`;
        const correction = manualCorrections.get(key);

        // Ne pas ajouter si déjà un badge
        if (row.querySelector('.p11-badge')) return;

        // Trouver le bon endroit pour insérer le badge
        const amountEl = row.querySelector('[class*="mono"], [class*="font-bold"]');
        if (amountEl) {
          if (correction) {
            amountEl.parentNode.appendChild(createBadge('manual', correction.reason));
            if (correction.reason) {
              amountEl.parentNode.appendChild(createReasonTag(correction.reason));
            }
          } else {
            amountEl.parentNode.appendChild(createBadge('auto'));
          }
        }
      });
    }
  }

  // ===== Ajouter la légende =====
  function addLegend() {
    if (document.getElementById('p11-legend')) return;

    // Trouver la section des trades
    const headings = document.querySelectorAll('h2, h3');
    let tradesHeading = null;

    headings.forEach(h => {
      if ((h.textContent || '').includes('Historique') || (h.textContent || '').includes('opération')) {
        tradesHeading = h;
      }
    });

    if (!tradesHeading) return;

    const legend = document.createElement('div');
    legend.id = 'p11-legend';
    legend.style.cssText = `
      display: flex;
      gap: 16px;
      align-items: center;
      padding: 8px 12px;
      margin: 8px 0;
      background: rgba(99, 102, 241, 0.1);
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-radius: 8px;
      font-size: 12px;
    `;
    legend.innerHTML = `
      <span style="color: #9ca3af;">Statuts :</span>
      <span style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:9999px;font-size:11px;font-weight:600;background:${BADGE_STYLES.auto.bg};color:${BADGE_STYLES.auto.color};border:1px solid ${BADGE_STYLES.auto.border};">${BADGE_STYLES.auto.text}</span>
      <span style="color: #6b7280;">= report du bot</span>
      <span style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:9999px;font-size:11px;font-weight:600;background:${BADGE_STYLES.manual.bg};color:${BADGE_STYLES.manual.color};border:1px solid ${BADGE_STYLES.manual.border};">${BADGE_STYLES.manual.text}</span>
      <span style="color: #6b7280;">= correction manuelle</span>
    `;

    tradesHeading.parentNode.insertBefore(legend, tradesHeading.nextSibling);
  }

  // ===== Simple keccak256 placeholder =====
  function keccak256(str) {
    // placeholder - we use ethers.js keccak if available
    return '0000000000000000000000000000000000000000000000000000000000000000';
  }

  // ===== Observer les changements du DOM =====
  function observeDOM() {
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      for (const m of mutations) {
        if (m.addedNodes.length > 0) {
          shouldUpdate = true;
          break;
        }
      }
      if (shouldUpdate) {
        // Debounce
        clearTimeout(window.__p11Timer);
        window.__p11Timer = setTimeout(() => {
          addBadgesToTrades();
          addLegend();
        }, 500);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // ===== INIT =====
  async function init() {
    console.log('[P-11] Transparence badges initialisés');

    // Fetch les corrections manuelles depuis la blockchain
    await fetchManualCorrections();

    // Observer les changements du DOM (le React va renderer les trades)
    observeDOM();

    // Premier passage
    setTimeout(() => {
      addBadgesToTrades();
      addLegend();
    }, 2000);

    // Refresh toutes les 30s
    setInterval(() => {
      addBadgesToTrades();
    }, 30000);
  }

  // Attendre que la page soit chargée
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
