"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6585],{79205:function(e,r,n){n.d(r,{Z:function(){return u}});var t=n(2265);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,n)=>n?n.toUpperCase():r.toLowerCase()),a=e=>{let r=i(e);return r.charAt(0).toUpperCase()+r.slice(1)},l=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.filter((e,r,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===r).join(" ").trim()},c=e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let d=(0,t.forwardRef)((e,r)=>{let{color:n="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:d="",children:u,iconNode:f,...g}=e;return(0,t.createElement)("svg",{ref:r,...s,width:o,height:o,stroke:n,strokeWidth:a?24*Number(i)/Number(o):i,className:l("lucide",d),...!u&&!c(g)&&{"aria-hidden":"true"},...g},[...f.map(e=>{let[r,n]=e;return(0,t.createElement)(r,n)}),...Array.isArray(u)?u:[u]])}),u=(e,r)=>{let n=(0,t.forwardRef)((n,i)=>{let{className:c,...s}=n;return(0,t.createElement)(d,{ref:i,iconNode:r,className:l("lucide-".concat(o(a(e))),"lucide-".concat(e),c),...s})});return n.displayName=a(e),n}},30401:function(e,r,n){n.d(r,{Z:function(){return t}});let t=(0,n(79205).Z)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},78867:function(e,r,n){n.d(r,{Z:function(){return t}});let t=(0,n(79205).Z)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},3848:function(e,r,n){n.d(r,{Cr:function(){return a},LH:function(){return l},R1:function(){return i}});var t=n(71282),o=n(39502);function i(e){return e?`${e.slice(0,5)}…${e.slice(-4)}`:""}function a({wei:e,precision:r=3}){return parseFloat((0,t.d)(e)).toFixed(r).replace(/0+$/,"").replace(/\.$/,"")}function l({amount:e,decimals:r}){return(0,o.b)(BigInt(e),r)}},34520:function(e,r,n){n.d(r,{A:function(){return d}});var t=n(57437),o=n(30401),i=n(78867),a=n(2265),l=n(1801),c=n(3781),s=n(51830);let d=({address:e,showCopyIcon:r,url:n,className:l})=>{let[d,p]=(0,a.useState)(!1);function h(r){r.stopPropagation(),navigator.clipboard.writeText(e).then(()=>p(!0)).catch(console.error)}return(0,a.useEffect)(()=>{if(d){let e=setTimeout(()=>p(!1),3e3);return()=>clearTimeout(e)}},[d]),(0,t.jsxs)(u,n?{children:[(0,t.jsx)(g,{title:e,className:l,href:`${n}/address/${e}`,target:"_blank",children:(0,c.D)(e)}),r&&(0,t.jsx)(s.S,{onClick:h,size:"sm",style:{gap:"0.375rem"},children:(0,t.jsxs)(t.Fragment,d?{children:["Copied",(0,t.jsx)(o.Z,{size:16})]}:{children:["Copy",(0,t.jsx)(i.Z,{size:16})]})})]}:{children:[(0,t.jsx)(f,{title:e,className:l,children:(0,c.D)(e)}),r&&(0,t.jsx)(s.S,{onClick:h,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:(0,t.jsxs)(t.Fragment,d?{children:["Copied",(0,t.jsx)(o.Z,{size:14})]}:{children:["Copy",(0,t.jsx)(i.Z,{size:14})]})})]})},u=l.zo.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,f=l.zo.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,g=l.zo.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`},70547:function(e,r,n){n.d(r,{E:function(){return o}});var t=n(1801);let o=t.zo.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`},51713:function(e,r,n){n.d(r,{t:function(){return a}});var t=n(57437),o=n(87759),i=n(51830);function a({title:e}){let{currentScreen:r,navigateBack:n,navigate:a,data:l,setModalData:c}=(0,o.a)();return(0,t.jsx)(i.M,{title:e,backFn:"ManualTransferScreen"===r?n:r===l?.funding?.methodScreen?l.funding.comingFromSendTransactionScreen?()=>a("SendTransactionScreen"):void 0:l?.funding?.methodScreen?()=>{let e=l.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),c({funding:e,solanaFundingData:l?.solanaFundingData}),a(e.methodScreen)}:void 0})}},71588:function(e,r,n){n.d(r,{I:function(){return l}});var t=n(57437),o=n(2265);let i=o.forwardRef(function(e,r){let{title:n,titleId:t,...i}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},i),n?o.createElement("title",{id:t},n):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))});var a=n(1801);let l=({children:e,theme:r})=>(0,t.jsxs)(c,{$theme:r,children:[(0,t.jsx)(i,{width:"20px",height:"20px",color:"var(--privy-color-icon-muted)",strokeWidth:1.5,style:{flexShrink:0}}),(0,t.jsx)(s,{$theme:r,children:e})]}),c=a.zo.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-background-2);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`,s=a.zo.div`
  color: ${e=>"dark"===e.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  flex: 1;
  text-align: left;

  /* text-sm/font-regular */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`},28642:function(e,r,n){n.d(r,{L:function(){return o}});var t=n(1801);let o=t.zo.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
`},60683:function(e,r,n){n.d(r,{B:function(){return o},C:function(){return l},F:function(){return s},H:function(){return a},R:function(){return g},S:function(){return u},a:function(){return d},b:function(){return f},c:function(){return c},d:function(){return p},e:function(){return i}});var t=n(1801);let o=t.zo.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,i=t.zo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,a=t.zo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,l=(0,t.zo)(i)`
  padding: 20px 0;
`,c=(0,t.zo)(i)`
  gap: 16px;
`,s=t.zo.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,d=t.zo.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;t.zo.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let u=t.zo.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  background: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  && h4 {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
    text-decoration: underline;
    font-weight: medium;
  }
  && p {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
  }
`,f=t.zo.div`
  height: 16px;
`,g=t.zo.div`
  height: 12px;
`;t.zo.div`
  position: relative;
`;let p=t.zo.div`
  height: ${e=>e.height??"12"}px;
`;t.zo.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},6585:function(e,r,n){n.r(r),n.d(r,{ManualTransferScreen:function(){return $},default:function(){return $}});var t=n(57437),o=n(2265),i=n(39502),a=n(3848),l=n(51830),c=n(60683),s=n(23663),d=n(51713),u=n(71588),f=n(71471),g=n(41270),p=n(96298),h=n(54990),m=n(3781),x=n(71554),v=n(87759),y=n(90329),C=n(63993),b=n(80625),w=n(51156),z=n(57104),S=n(78528),j=n(60164),k=n(25892);n(35819),n(29155),n(97048),n(1470),n(64131),n(84250);let $={component:()=>{let{wallets:e}=(0,C.u)(),{connectors:r}=(0,x.u)(),n=r.filter(m.v).flatMap(e=>e.wallets),{data:$,setModalData:T,navigate:D,lastScreen:M}=(0,v.a)(),{rpcConfig:A,appId:E,createAnalyticsEvent:B,closePrivyModal:L}=(0,x.u)(),N=(0,h.u)(),[P,U]=(0,o.useState)(void 0),[I,Z]=(0,o.useState)(!1),H=$?.funding,{reloadBalance:O}=(0,y.u)({rpcConfig:A,appId:E,address:"ethereum"===H.chainType?H.address:void 0,chain:"ethereum"===H.chainType?H.chain:void 0}),R="solana"===H.chainType,W=R?H.isUSDC?"USDC":"SOL":H.erc20Address?H.erc20ContractInfo?.symbol:H.chain.nativeCurrency.symbol,V=R?n.find(({address:e})=>e===H.address):e.find(({address:e})=>(0,m.D)(e)===(0,m.D)(H.address));if(!H)return T({errorModalData:{error:Error("Couldn't find funding config"),previousScreen:M||"FundingMethodSelectionScreen"},funding:$?.funding,solanaFundingData:$?.solanaFundingData,sendTransaction:$?.sendTransaction}),D("ErrorScreen"),(0,t.jsx)(t.Fragment,{});(0,o.useEffect)(()=>{let e=R?async function(){if("solana"!==H.chainType)return;let e=N.solanaRpcs[H.chain];e?(H.isUSDC?async function({rpc:e,address:r,mintAddress:n}){let t=await e.getTokenAccountsByOwner(r,{mint:n},{encoding:"jsonParsed",commitment:"confirmed"}).send(),o=t.value[0]?.account;return o?BigInt(o.data.parsed.info.tokenAmount.amount):0n}({rpc:e.rpc,address:H.address,mintAddress:(0,S.g)(H.chain)}):(0,w.x)({rpc:e.rpc,address:H.address})).then(e=>{let r=BigInt(e);P&&r>P&&(Z(!0),B({eventName:b.O,payload:{provider:"manual",status:"success",chainType:"solana",address:V?.address,value:H.isUSDC?(0,i.b)(r-P,6):(0,i.b)(r-P,9),token:H.isUSDC?"USDC":"SOL"}})),U(r)}):console.warn("Unable to load solana rpc, skipping balance")}:async function(){"ethereum"===H.chainType&&(async()=>{if(!H.erc20Address)return await O()??BigInt(0);{let{balance:e}=await (0,k.g)({chain:H.chain,address:H.address,erc20Address:H.erc20Address,rpcConfig:A,appId:E});return e}})().then(e=>{P&&e>P&&(Z(!0),B({eventName:b.O,payload:{provider:"manual",status:"success",chainType:"ethereum",address:V?.address,chainId:H.chain.id,value:(0,i.b)(e-P,H.erc20ContractInfo?.decimals??18),token:H.erc20ContractInfo?.symbol??H.erc20Address??"ETH"}})),U(e)}).catch(()=>U(void 0))},r=setInterval(e,2e3);return e(),()=>clearInterval(r)},[P]);let q=(0,o.useMemo)(()=>null==P?"":H.isUSDC?(0,a.LH)({amount:P,decimals:6}):R?(0,j.g)(P,3,!0,!0):null!=H.erc20ContractInfo?.decimals?(0,a.LH)({amount:P,decimals:H.erc20ContractInfo.decimals}):(0,a.Cr)({wei:P}),[P,R,H]),G="ethereum"===H.chainType?H.chain.name:(0,z.g)(H.chain),J=(0,o.useMemo)(()=>""===H.uiConfig?.receiveFundsTitle?null:(0,t.jsx)(g.T,{children:H.uiConfig?.receiveFundsTitle??`Receive ${H.amount} ${W??""}`.trim()}),[H.uiConfig?.receiveFundsTitle,H.amount,W]),_=(0,o.useMemo)(()=>""===H.uiConfig?.receiveFundsSubtitle?null:(0,t.jsx)(f.S,{children:H.uiConfig?.receiveFundsSubtitle??`Scan this code or copy your wallet address to receive funds on ${G}.`}),[H.uiConfig?.receiveFundsSubtitle,G]),Q="solana"===H.chainType&&H.isUSDC&&(0,S.g)(H.chain)?`?spl-token=${(0,S.g)(H.chain)}`:"";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.t,{}),J,_,(0,t.jsxs)(c.F,{style:{gap:"1rem",margin:J||_?"1rem 0":"0"},children:[(0,t.jsx)(s.Q,{url:`${H.chainType}:${H.address}${Q}`,size:200,squareLogoElement:F}),(0,t.jsxs)(u.I,{theme:N.appearance.palette.colorScheme,children:["Make sure to send funds on ",G,"."]}),(0,t.jsx)(p.W,{title:"Your wallet",errMsg:void 0,showCopyButton:!0,balance:`${q} ${W}`,address:H.address}),I&&(0,t.jsx)(l.P,{onClick:()=>L({shouldCallAuthOnSuccess:!1,isSuccess:!0}),children:"Continue"})]}),(0,t.jsx)(l.B,{})]})}},F=({...e})=>(0,t.jsx)(w.z,{color:"black",...e})},23663:function(e,r,n){n.d(r,{Q:function(){return v}});var t=n(57437),o=n(35819),i=n(2265),a=n(1801),l=n(54990),c=n(3781);let s=()=>(0,t.jsx)("svg",{width:"200",height:"200",viewBox:"-77 -77 200 200",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"28px",width:"28px"},children:(0,t.jsx)("rect",{width:"50",height:"50",fill:"black",rx:10,ry:10})}),d=(e,r,n,t,o)=>{for(let i=r;i<r+t;i++)for(let r=n;r<n+o;r++){let n=e?.[r];n&&n[i]&&(n[i]=0)}return e},u=(e,r)=>{let n=o.create(e,{errorCorrectionLevel:r}).modules,t=(0,c.a3)(Array.from(n.data),n.size);return t=d(t,0,0,7,7),t=d(t,t.length-7,0,7,7),d(t,0,t.length-7,7,7)},f=({x:e,y:r,cellSize:n,bgColor:o,fgColor:i})=>(0,t.jsx)(t.Fragment,{children:[0,1,2].map(a=>(0,t.jsx)("circle",{r:n*(7-2*a)/2,cx:e+7*n/2,cy:r+7*n/2,fill:a%2!=0?o:i},`finder-${e}-${r}-${a}`))}),g=({cellSize:e,matrixSize:r,bgColor:n,fgColor:o})=>(0,t.jsx)(t.Fragment,{children:[[0,0],[(r-7)*e,0],[0,(r-7)*e]].map(([r,i])=>(0,t.jsx)(f,{x:r,y:i,cellSize:e,bgColor:n,fgColor:o},`finder-${r}-${i}`))}),p=({matrix:e,cellSize:r,color:n})=>(0,t.jsx)(t.Fragment,{children:e.map((e,o)=>e.map((e,a)=>e?(0,t.jsx)("rect",{height:r-.4,width:r-.4,x:o*r+.1*r,y:a*r+.1*r,rx:.5*r,ry:.5*r,fill:n},`cell-${o}-${a}`):(0,t.jsx)(i.Fragment,{},`circle-${o}-${a}`)))}),h=({cellSize:e,matrixSize:r,element:n,sizePercentage:o,bgColor:i})=>{if(!n)return(0,t.jsx)(t.Fragment,{});let a=r*(o||.14),l=Math.floor(r/2-a/2),c=Math.floor(r/2+a/2);(c-l)%2!=r%2&&(c+=1);let s=(c-l)*e,d=s-.2*s,u=l*e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("rect",{x:l*e,y:l*e,width:s,height:s,fill:i}),(0,t.jsx)(n,{x:u+.1*s,y:u+.1*s,height:d,width:d})]})},m=e=>{let r=e.outputSize,n=u(e.url,e.errorCorrectionLevel),o=r/n.length,i=(0,c.a2)(2*o,{min:.025*r,max:.036*r});return(0,t.jsxs)("svg",{height:e.outputSize,width:e.outputSize,viewBox:`0 0 ${e.outputSize} ${e.outputSize}`,style:{height:"100%",width:"100%",padding:`${i}px`},children:[(0,t.jsx)(p,{matrix:n,cellSize:o,color:e.fgColor}),(0,t.jsx)(g,{cellSize:o,matrixSize:n.length,fgColor:e.fgColor,bgColor:e.bgColor}),(0,t.jsx)(h,{cellSize:o,element:e.logo?.element,bgColor:e.bgColor,matrixSize:n.length})]})},x=a.zo.div.attrs({className:"ph-no-capture"})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${e=>`${e.$size}px`};
  width: ${e=>`${e.$size}px`};
  margin: auto;
  background-color: ${e=>e.$bgColor};

  && {
    border-width: 2px;
    border-color: ${e=>e.$borderColor};
    border-radius: var(--privy-border-radius-md);
  }
`,v=e=>{let{appearance:r}=(0,l.u)(),n=e.bgColor||"#FFFFFF",o=e.fgColor||"#000000",i=e.size||160,a="dark"===r.palette.colorScheme?n:o;return(0,t.jsx)(x,{$size:i,$bgColor:n,$fgColor:o,$borderColor:a,children:(0,t.jsx)(m,{url:e.url,logo:{element:e.squareLogoElement??s},outputSize:i,bgColor:n,fgColor:o,errorCorrectionLevel:e.errorCorrectionLevel||"Q"})})}},71471:function(e,r,n){n.d(r,{S:function(){return o}});var t=n(1801);let o=t.zo.span`
  margin-top: 4px;
  color: var(--privy-color-foreground);
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */

  && a {
    color: var(--privy-color-accent);
  }
`},41270:function(e,r,n){n.d(r,{T:function(){return o}});var t=n(1801);let o=t.zo.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`},96298:function(e,r,n){n.d(r,{W:function(){return C}});var t=n(57437),o=n(30401),i=n(78867),a=n(2265),l=n(1801),c=n(51830),s=n(70547),d=n(28642),u=n(34520),f=n(41618);let g=(0,l.zo)(f.B)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,p=l.zo.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,h=l.zo.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,m=l.zo.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,x=(0,l.zo)(d.L)`
  text-align: left;
  margin-bottom: 0.5rem;
`,v=(0,l.zo)(s.E)`
  margin-top: 0.25rem;
`,y=(0,l.zo)(c.S)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`,C=({errMsg:e,balance:r,address:n,className:l,title:c,showCopyButton:s=!1})=>{let[d,f]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(d){let e=setTimeout(()=>f(!1),3e3);return()=>clearTimeout(e)}},[d]),(0,t.jsxs)("div",{children:[c&&(0,t.jsx)(x,{children:c}),(0,t.jsx)(g,{className:l,$state:e?"error":void 0,children:(0,t.jsxs)(p,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(u.A,{address:n,showCopyIcon:!1}),void 0!==r&&(0,t.jsx)(m,{children:r})]}),s&&(0,t.jsx)(y,{onClick:function(e){e.stopPropagation(),navigator.clipboard.writeText(n).then(()=>f(!0)).catch(console.error)},size:"sm",children:(0,t.jsxs)(t.Fragment,d?{children:["Copied",(0,t.jsx)(o.Z,{size:14})]}:{children:["Copy",(0,t.jsx)(i.Z,{size:14})]})})]})}),e&&(0,t.jsx)(v,{children:e})]})}},80625:function(e,r,n){n.d(r,{O:function(){return t}});let t="sdk_fiat_on_ramp_completed_with_status"},57104:function(e,r,n){n.d(r,{g:function(){return t}});function t(e){switch(e){case"solana:mainnet":return"Solana";case"solana:devnet":return"Devnet";case"solana:testnet":return"Testnet"}}},25892:function(e,r,n){n.d(r,{g:function(){return a}});var t=n(70751),o=n(79516),i=n(96821);let a=async({chain:e,address:r,appId:n,rpcConfig:a,erc20Address:c})=>{let s=(0,t.v)({chain:e,transport:(0,o.d)((0,i.a)(e,a,n))});return{balance:await s.readContract({address:c,abi:l,functionName:"balanceOf",args:[r]}).catch(()=>0n),chain:e}},l=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]},36672:function(e,r,n){n.d(r,{A:function(){return l},D:function(){return d},J:function(){return s},L:function(){return t},R:function(){return c},S:function(){return o},T:function(){return i},a:function(){return a},g:function(){return u}});let t=1e9,o="11111111111111111111111111111111",i="TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",a="TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",l="ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",c=["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C","CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"],s=["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"],d={"solana:mainnet":{EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:{symbol:"USDC",decimals:6,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:{symbol:"USDT",decimals:6,address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:devnet":{"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU":{symbol:"USDC",decimals:6,address:"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"},EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS:{symbol:"USDT",decimals:6,address:"EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:testnet":{}};function u(e,r){let n=parseFloat(e.toString())/t,o=f.format(r*n);return"$0.00"===o?"<$0.01":o}let f=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2})},78528:function(e,r,n){n.d(r,{g:function(){return o}});var t=n(36672);function o(e){let[r]=Object.entries(t.D[e]).find(([e,r])=>"USDC"===r.symbol)??[];return r}},41618:function(e,r,n){n.d(r,{B:function(){return i},a:function(){return o}});var t=n(1801);let o=(0,t.iv)`
  && {
    border-width: 1px;
    padding: 0.5rem 1rem;
  }

  width: 100%;
  text-align: left;
  border: solid 1px var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${e=>"error"===e.$state?"\n        border-color: var(--privy-color-error);\n        background: var(--privy-color-error-bg);\n      ":""}
`,i=t.zo.div`
  ${o}
`},60164:function(e,r,n){n.d(r,{a:function(){return i},g:function(){return o}});var t=n(36672);function o(e,r=6,n=!1,t=!1){let o=(parseFloat(e.toString())/1e9).toFixed(r).replace(/0+$/,"").replace(/\.$/,""),i=t?"":" SOL";return n?`${o}${i}`:`${"0"===o?"<0.001":o}${i}`}function i({amount:e,fee:r,tokenPrice:n,isUsdc:i}){let a=BigInt(Math.floor(parseFloat(e)*10**(i?6:9))),l=i?a:a+r;return{fundingAmountInBaseUnit:a,fundingAmountInUsd:n?(0,t.g)(a,n):void 0,totalPriceInUsd:n?(0,t.g)(l,n):void 0,totalPriceInNativeCurrency:o(l),feePriceInNativeCurrency:o(r),feePriceInUsd:n?(0,t.g)(r,n):void 0}}},90329:function(e,r,n){n.d(r,{u:function(){return c}});var t=n(2265),o=n(70751),i=n(79516),a=n(96821),l=n(71554);function c({rpcConfig:e,appId:r,address:n,chain:c}){let{chains:s}=(0,l.u)(),[d,u]=(0,t.useState)(0n),[f,g]=(0,t.useState)(!1),p=(0,t.useMemo)(()=>{let n=c||s[0];if(n)return(0,o.v)({chain:c,transport:(0,i.d)((0,a.a)(n,e,r))})},[c,e,r]),h=(0,t.useCallback)(async()=>{if(!n||!p)return;g(!0);let e=await p.getBalance({address:n}).catch(console.error);return e?(u(e),g(!1),e):void 0},[p,n,u]);return(0,t.useEffect)(()=>{h().catch(console.error)},[]),{balance:d,isLoading:f,reloadBalance:h}}}}]);