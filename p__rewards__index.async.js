"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[887],{80593:function(e,l,i){i.d(l,{Z:function(){return x}});var a=i(81788),n=i(45464),s=i(93236),t=Object.defineProperty,r=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,o=(e,l,i)=>l in e?t(e,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[l]=i;const u=e=>s.createElement("svg",((e,l)=>{for(var i in l||(l={}))c.call(l,i)&&o(e,i,l[i]);if(r)for(var i of r(l))d.call(l,i)&&o(e,i,l[i]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),s.createElement("rect",{width:32,height:32,rx:16,fill:"#232538"}),s.createElement("path",{d:"m12 12 4 4m0 0 4-4m-4 4-4 4m4-4 4 4",stroke:"#9597B5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));var m=i(62086),x=function(e){var l=e.visible,i=e.title,t=e.width,r=e.onClose,c=e.children,d=e.className;return(0,m.jsx)(a.u,{appear:!0,show:l,as:s.Fragment,children:(0,m.jsxs)(n.V,{open:l,onClose:r,className:"dialog",children:[(0,m.jsx)(a.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,m.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25 opacity-100"})}),(0,m.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,m.jsx)("div",{className:"panel-container flex min-h-full items-center justify-center p-4 text-center",children:(0,m.jsx)(a.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,m.jsxs)(n.V.Panel,{className:"dialog-panel transform overflow-hidden shadow-xl transition-all ".concat(null!=d?d:""),style:{width:t},children:[i&&(0,m.jsxs)(n.V.Title,{className:"dialog-title",children:[(0,m.jsxs)("span",{children:[i," "]}),(0,m.jsx)(u,{onClick:function(){r()}})]}),c]})})})})]})})}},58522:function(e,l,i){i.d(l,{y:function(){return d}});var a=i(86378),n=i.n(a),s=i(93236),t=i(63338),r=i(62086),c=function(e){var l=e.defaultValue,i=void 0===l?"-":l,a=e.value,n=e.defaultValueIncludeSuffix,c=void 0!==n&&n,d=e.displayDecimals,o=void 0===d?2:d,u=e.label,m=void 0===u?"":u,x=e.thousandSeparator,f=void 0===x||x,h=e.prefix,v=void 0===h?"":h,j=e.suffix,p=void 0===j?"":j,g=(0,s.useMemo)((function(){return null==a?c?"".concat(v||"").concat(i).concat(p||""):i:(0,t.dp)(a,o).display({thousandSeparator:f,prefix:v,suffix:p})}),[a,i,o,f,v,p]);return(0,r.jsxs)(r.Fragment,{children:[m,g]})},d=function(e){var l=e.separator,i=void 0===l?"/":l,a=e.values;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,n()({},a[0]||{})),i,(0,r.jsx)(c,n()({},a[1]||{}))]})};l.Z=c},65146:function(e,l,i){i.d(l,{P:function(){return n},m:function(){return a}});var a=function(e){if(!e)return"";var l,i=new Date(1e3*e);if(!((l=i)instanceof Date)||isNaN(+l))return"";var a=(null==i?void 0:i.getMonth())+1;return(a=(null==i?void 0:i.getMonth())>9?""+a:"0"+a)+"/"+((null==i?void 0:i.getDate())>9?null==i?void 0:i.getDate():"0"+(null==i?void 0:i.getDate()))+" "+((null==i?void 0:i.getHours())>9?null==i?void 0:i.getHours():"0"+(null==i?void 0:i.getHours()))+":"+((null==i?void 0:i.getMinutes())>9?null==i?void 0:i.getMinutes():"0"+(null==i?void 0:i.getMinutes()))},n="-"},31885:function(e,l,i){var a=i(71609);l.Z=function(){var e=(0,a.YB)();return{t:function(l){return"string"==typeof l?e.formatMessage({id:l}):e.formatMessage(l)}}}},95782:function(e,l,i){i.r(l),i.d(l,{default:function(){return R}});var a=i(93236),n=i(2260),s="description___fdR5Q",t="rewards___Fi41_",r="header___jUxaC",c="title___BUw5W",d="subTitle___kgUk_",o="secondTitle___PrMHa",u="content___yFQIn",m=i(86378),x=i.n(m),f=i(30577),h=i.n(f),v=i(71609),j=i(97810),p=i(64052),g=i(93548),N=i(81009),y=i(34770),_=i(91039),b=i(90589),I=i(51466),M=i(1463),w=i(80593),C=i(58522),Z=i(4051),D=i(72639),S=i(65146),P=i(31885),T=i(26423),E=i(63338),L={helper:"helper___KjA13",fieldName:"fieldName___HVKEK",fieldValue:"fieldValue___jdTxK",alignRight:"alignRight___m_Llq",btn:"btn___PTIy7",primary:"primary___uKEgt"},V=i(62086),k=function(e){var l=e.account,i=e.onClose,s=e.isBuy,t=e.vault,r=(0,a.useState)(""),c=h()(r,2),d=c[0],o=c[1],u=(0,a.useState)(""),m=h()(u,2),x=m[0],f=m[1],N=(0,a.useState)(!1),_=h()(N,2),b=_[0],I=_[1],w=(0,j.Ge)(),Z=w.chainId,S=w.active,P=M.I.useContainer(),k=P.setPendingTxns,z=P.setWalletVisible,A=(0,a.useState)(!0),R=h()(A,2),B=R[0],G=R[1],F=!s;(0,a.useEffect)((function(){if(B)return x?void y.a.changeReceive(t,s,x,(function(e){o(String(e))})):void o("");d?y.a.changePay(t,s,d,(function(e){f(String(e))})):f("")}),[B,x,d,s,t]),(0,a.useEffect)((function(){o(""),f("")}),[s]);var U,H=function(){if(!S)return[(0,V.jsx)(v._H,{id:"Connect wallet"}),!1];if(!d||0==+d)return[(0,V.jsx)(v._H,{id:"Enter an amount"}),!0];if(!x||0==+x)return[(0,V.jsx)(v._H,{id:"Enter an amount"}),!0];var e=(0,E.Q6)(d);return s&&e.gt((0,E.Q6)(t.yourBlance))?[(0,V.jsx)(v._H,{id:"Insufficient USDC balance"}),!0]:!s&&e.gt((0,E.Q6)(t.yourStake))?[(0,V.jsx)(v._H,{id:"Insufficient DLP balance"}),!0]:b?[s?"Buying...":"Selling...",!0]:[s?"Buy DLP":"Sell DLP",!1]}(),O=h()(H,2),W=O[0],Q=O[1],Y=(0,a.useMemo)((function(){return s?(0,E.dp)(null==t?void 0:t.yourBlance,D.C1).display({prefix:"",suffix:" USDC"}):(0,E.dp)(null==t?void 0:t.yourStake,D.i$).display({prefix:"",suffix:" DLP"})}),[s,t]),$=(0,a.useMemo)((function(){return s?(0,E.dp)(null==t?void 0:t.yourStake,D.i$).display({prefix:"",suffix:" DLP"}):(0,E.dp)(null==t?void 0:t.yourBlance,D.C1).display({prefix:"",suffix:" USDC"})}),[s,t]);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(T.gp,{symbol:F?"DLP":"USDC",onClickMaxBtn:function(){G(!1),o(F?(0,E.dp)(t.yourStake,D.i$).value:(0,E.dp)(t.yourBlance,D.C1).value)},decimals:F?D.i$:D.C1,value:d,onChange:function(e){G(!1),o(e)}}),(0,V.jsxs)(p.Z,{className:L.helper,children:[(0,V.jsxs)(g.Z,{span:12,className:L.fields,children:[(0,V.jsx)("span",{className:L.fieldName,children:"Price"}),(0,V.jsx)("span",{className:L.fieldValue,children:(0,V.jsx)(C.Z,{value:null==t?void 0:t.DLPPrice,displayDecimals:D.C1,suffix:" USDC"})})]}),(0,V.jsxs)(g.Z,{span:12,className:"".concat(L.fields," ").concat(L.alignRight),children:[(0,V.jsx)("span",{className:L.fieldName,children:s?"Balance:":"Available: "}),(0,V.jsx)("span",{className:L.fieldValue,children:Y})]})]}),(0,V.jsx)(T.mU,{decimals:s?D.i$:D.C1,symbol:F?"USDC":"DLP",onChange:function(e){G(!0),f(e)},value:x}),(0,V.jsxs)(p.Z,{className:L.helper,children:[(0,V.jsxs)(g.Z,{span:12,className:L.fields,children:[(0,V.jsx)("span",{className:L.fieldName,children:"Fees:"}),(0,V.jsx)("span",{className:L.fieldValue,children:(U=s?null==t?void 0:t.buyFeeRate:null==t?void 0:t.sellFeeRate,(0,E.dp)((0,E.Q6)(U).multipliedBy(100)).display({prefix:"",suffix:"%"}))})]}),(0,V.jsxs)(g.Z,{span:12,className:"".concat(L.fields," ").concat(L.alignRight),children:[(0,V.jsx)("span",{className:L.fieldName,children:s?"Available:":"Balance: "}),(0,V.jsx)("span",{className:L.fieldValue,children:$})]})]}),(0,V.jsx)(n.Z,{className:L.btn,size:"large",disabled:Q,onClick:function(){S?l&&!b&&(I(!0),y.a.confirmSwap(k,Z,t,Number(d),s,Number(x),l).then((function(e){i()})).finally((function(){I(!1)}))):z(!0)},children:W})]})},z={title:"title___e6dkE",logo:"logo___ZOcqx",item:"item___yF8HB",btn:"btn___TyFG2",primary:"primary___a4ylv",head:"head___nbI7q",icon:"icon___XNmn5",fieldValue:"fieldValue___nCXxw",total:"total___CWQYd",fieldName:"fieldName___hRfaq",top:"top___x6BuA",footer:"footer___imJSY",left:"left___DgKWI",right:"right___vSRt5",dialog:"dialog___erlYn",tab:"tab___AHinT",active:"active___XiEpE",tabPanels:"tabPanels___OPQPx",activeTab:"activeTab___YpixB",alignRight:"alignRight___mHUrT",cell:"cell___OYSrt",yourRewards:"yourRewards___y0Tit",xsmt20:"xsmt20___o1LaP"},A=function(){var e=(0,a.useState)(!1),l=h()(e,2),i=l[0],s=l[1],t=(0,a.useState)("buy"),r=h()(t,2),c=r[0],d=r[1],o=M.I.useContainer().setWalletVisible,u=(0,j.Ge)(),m=u.library,f=u.account,T=u.chainId,E=u.active,L=(0,P.Z)().t,A=(0,N.ZP)([f,T],(function(){return y.a.getVault(m,f,T||Z.rC)}),{refreshInterval:2400}),R=A.data,B=A.mutate;function G(){s(!0)}var F=function(e){d(e);var l=!1;"buy"==e&&(l=!0),B(x()(x()({},R),{},{isBuy:l}))};function U(e){return e?" ".concat(e):""}return(0,V.jsxs)("div",{className:z.dLPVault,children:[(0,V.jsxs)("div",{className:z.title,children:[(0,V.jsx)(I.r,{className:z.logo}),(0,V.jsx)("span",{children:L("DLP Vault")})]}),(0,V.jsxs)(p.Z,{gutter:24,children:[(0,V.jsx)(g.Z,{xs:24,sm:24,md:24,lg:12,xl:12,children:(0,V.jsxs)("div",{className:z.item,children:[(0,V.jsxs)("div",{className:z.top,children:[(0,V.jsxs)("div",{className:z.head,children:[(0,V.jsx)("div",{className:z.text,children:L("DLP Vault")}),(0,V.jsx)("img",{src:_.Z,className:z.icon})]}),(0,V.jsxs)(p.Z,{className:z.content,children:[(0,V.jsx)(g.Z,{xs:24,md:24,lg:10,className:z.cell,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("div",{className:z.fieldValue,title:(null==R?void 0:R.totalSupply)||S.P,children:(0,V.jsx)("div",{className:z.total,children:(0,V.jsx)(C.Z,{displayDecimals:D.i$,value:null==R?void 0:R.totalSupply,suffix:U(null==R?void 0:R.supplySymbol)})})}),(0,V.jsx)("div",{className:z.fieldName,children:L("Total Supply")})]})}),(0,V.jsx)(g.Z,{xs:24,md:24,lg:9,className:z.cell,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("div",{className:z.fieldValue,title:(null==R?void 0:R.totalAssets)||S.P,children:(0,V.jsx)("div",{className:z.total,children:(0,V.jsx)(C.Z,{value:null==R?void 0:R.totalAssets,displayDecimals:D.C1,suffix:U(null==R?void 0:R.assetSymbol)})})}),(0,V.jsx)("div",{className:z.fieldName,children:L("DLP Vault balance")})]})}),(0,V.jsxs)(g.Z,{lg:5,xs:24,md:24,className:"".concat(z.cell," ").concat(z.alignRight),children:[(0,V.jsx)("div",{className:z.fieldValue,children:(0,V.jsx)(C.Z,{value:null==R?void 0:R.APR,suffix:"%"})}),(0,V.jsx)("div",{className:z.fieldName,children:L("DLP Vault APR")})]})]})]}),(0,V.jsxs)(p.Z,{className:z.footer,children:[(0,V.jsx)(g.Z,{span:12,className:z.left,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("div",{className:z.fieldValue,children:(0,V.jsx)(C.Z,{value:null==R?void 0:R.DLPPrice,suffix:U(null==R?void 0:R.assetSymbol),displayDecimals:D.C1})}),(0,V.jsx)("div",{className:z.fieldName,children:L("Price")})]})}),(0,V.jsx)(g.Z,{span:12,className:z.right,children:f&&E?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(n.Z,{className:z.btn,type:"primary",size:"middle",onClick:function(){d("buy"),G()},children:(0,V.jsx)(v._H,{id:"Buy"})}),(0,V.jsx)(n.Z,{className:z.btn,type:"c30",size:"middle",style:{marginLeft:12},onClick:function(){d("sell"),G()},children:(0,V.jsx)(v._H,{id:"Sell"})})]}):(0,V.jsx)(n.Z,{className:z.btn,type:"primary",size:"middle",onClick:function(){return o(!0)},children:(0,V.jsx)(v._H,{id:"ConnectWallet"})})})]})]})}),(0,V.jsx)(g.Z,{xs:24,sm:24,md:24,lg:12,xl:12,children:(0,V.jsxs)("div",{className:"".concat(z.item," ").concat(z.yourRewards),children:[(0,V.jsxs)("div",{className:z.top,children:[(0,V.jsxs)("div",{className:z.head,children:[(0,V.jsx)("div",{className:z.text,children:L("Your Rewards")}),(0,V.jsx)("img",{src:b.Z,className:z.icon})]}),(0,V.jsxs)(p.Z,{className:z.content,children:[(0,V.jsx)(g.Z,{lg:12,xs:24,className:z.cell,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("div",{className:z.fieldValue,children:(0,V.jsx)(C.Z,{value:null==R?void 0:R.yourStake,displayDecimals:D.i$,suffix:U(null==R?void 0:R.supplySymbol)})}),(0,V.jsx)("div",{className:z.fieldName,children:L("Your stake")})]})}),(0,V.jsx)(g.Z,{lg:12,xs:24,className:"".concat(z.cell," ").concat(z.alignRight),children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("div",{className:"".concat(z.fieldValue," ").concat(z.xsmt20),children:(0,V.jsx)(C.Z,{value:null==R?void 0:R.rewarded,suffix:" USDC",displayDecimals:D.C1})}),(0,V.jsx)("div",{className:z.fieldName,children:L("rewarded")})]})})]})]}),(0,V.jsxs)(p.Z,{className:z.footer,children:[(0,V.jsx)(g.Z,{lg:10,xs:24,className:z.left,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("div",{className:z.fieldValue,children:(0,V.jsx)(C.Z,{value:null==R?void 0:R.pendingRewards,suffix:" USDC",displayDecimals:D.C1})}),(0,V.jsx)("div",{className:z.fieldName,children:L("Pending rewards")})]})}),(0,V.jsx)(g.Z,{lg:14,xs:24,className:z.right,children:f&&E?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(n.Z,{type:"c30",onClick:function(){var e;null==R||null===(e=R.vaultRouter)||void 0===e||e.calimLPReward()},className:z.btn,children:L("Harvest USDC")}),(0,V.jsx)(n.Z,{className:z.btn,style:{marginLeft:12},type:"c30",href:"#",children:L("Get Insurance")})]}):(0,V.jsx)(n.Z,{className:z.btn,type:"c30",size:"middle",onClick:function(){return o(!0)},children:(0,V.jsx)(v._H,{id:"ConnectWallet"})})})]})]})})]}),(0,V.jsxs)(w.Z,{title:"Buy / Sell DLP",visible:i,className:z.dialog,onClose:function(){s(!1)},children:[(0,V.jsxs)(p.Z,{className:z.tab,children:[(0,V.jsx)(v.OL,{to:"#",onClick:function(){return F("buy")},className:function(){return"buy"===c?z.active:void 0},children:L("Buy")}),(0,V.jsx)(v.OL,{to:"#",onClick:function(){return F("sell")},className:function(){return"sell"===c?z.active:void 0},children:L("Sell")})]}),(0,V.jsx)("div",{className:z.tabPanels,children:(0,V.jsx)(k,{onClose:function(){return s(!1)},isBuy:"buy"===c,vault:R,account:f})})]})]})},R=function(){return(0,V.jsxs)("div",{className:t,children:[(0,V.jsxs)("div",{className:r,children:[(0,V.jsx)("div",{className:c,children:"Rewards"}),(0,V.jsx)("div",{className:d,children:"Stake USDC and earn rewards from fees generated on the DEI."})]}),(0,V.jsx)(A,{}),(0,V.jsxs)("div",{className:s,children:[(0,V.jsx)("div",{className:o,children:"How do DEI rewards work?"}),(0,V.jsxs)("p",{className:u,children:["The DLP Vault is the counter party to all trades on DEI.",(0,V.jsx)("br",{})," DEI Vault accrues 70% of the platform's generated fees. DEI Foundation accrues 30% of the platform's generated fees."]}),(0,V.jsx)(n.Z,{type:"border",href:"#",children:"Learn More"})]})]})}},26423:function(e,l,i){i.d(l,{gp:function(){return u},tV:function(){return o},mU:function(){return m},ZP:function(){return x}});var a=i(86378),n=i.n(a),s=i(84875),t=i.n(s),r={input:"input___FmRXa",wrapper:"wrapper___FSDBG",var:"var___VCDiS",flex:"flex___gOhnV",max:"max___hao26"},c=i(62086),d=function(e){var l=e.label,i=e.symbolVar,a=e.children,n=e.disabled,s=e.className,d=e.decimals,o=void 0===d?18:d,u=e.onChange,m=e.value,x=e.max,f=function(e){if(u){var l=new RegExp("^\\D*(\\d*(?:\\.\\d{0,".concat(o,"})?).*$"),"g"),i=e.replace(l,"$1");x&&+i>+x&&(i=x),u(i)}};return(0,c.jsxs)("div",{className:t()(r.input,s),children:[l&&(0,c.jsx)("div",{className:r.label,children:l}),(0,c.jsxs)("div",{className:r.wrapper,children:[(0,c.jsx)("input",{type:"text",value:m,disabled:n,onChange:function(e){f(e.target.value)},placeholder:"0.0"}),i?(0,c.jsx)("div",{className:r.var,children:i}):a]})]})},o=function(e){return(0,c.jsx)(d,n()(n()({label:"Price"},e),{},{children:(0,c.jsx)("div",{className:r.var,children:"USD"})}))},u=function(e){var l=e.onClickMaxBtn,i=e.symbol;return(0,c.jsx)(d,n()(n()({label:"Pay"},e),{},{children:(0,c.jsxs)("div",{className:r.flex,children:[(0,c.jsx)("div",{className:r.max,onClick:l,children:"MAX"}),(0,c.jsx)("div",{className:r.var,children:null!=i?i:"USDC"})]})}))},m=function(e){return(0,c.jsx)(d,n()(n()({label:"Receive"},e),{},{children:(0,c.jsx)("div",{className:r.flex,children:(0,c.jsx)("div",{className:r.var,children:e.symbol})})}))},x=d},51466:function(e,l,i){i.d(l,{r:function(){return d}});var a=i(93236),n=Object.defineProperty,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,c=(e,l,i)=>l in e?n(e,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[l]=i;const d=e=>a.createElement("svg",((e,l)=>{for(var i in l||(l={}))t.call(l,i)&&c(e,i,l[i]);if(s)for(var i of s(l))r.call(l,i)&&c(e,i,l[i]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("rect",{width:32,height:32,rx:16,fill:"url(#rewards_logo_svg__a)"}),a.createElement("rect",{width:32,height:32,rx:16,fill:"url(#rewards_logo_svg__b)"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.594 18.438a7.031 7.031 0 0 1-7.032 7.03V23.36a4.922 4.922 0 1 0-4.921-4.922H6.53a7.031 7.031 0 1 1 14.063 0Z",fill:"#fff"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.035 19.703a10.515 10.515 0 0 1-3.014 6.192l-1.541-1.541a8.345 8.345 0 0 0 2.355-4.65h2.2Zm.075-1.222v-.087.087ZM12.298 7.966a10.516 10.516 0 0 0-6.193 3.014l1.542 1.541a8.344 8.344 0 0 1 4.65-2.356v-2.2ZM24.114 18.438c0-5.825-4.722-10.547-10.547-10.547h-.005v2.18h.005a8.367 8.367 0 0 1 8.367 8.367h2.18Z",fill:"#fff"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.563 4.375c7.766 0 14.062 6.296 14.062 14.063h-2.11c0-6.602-5.351-11.954-11.953-11.954V4.375Z",fill:"#fff"}),a.createElement("defs",null,a.createElement("linearGradient",{id:"rewards_logo_svg__a",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#3CEAAA"}),a.createElement("stop",{offset:.771,stopColor:"#5C72FF"})),a.createElement("linearGradient",{id:"rewards_logo_svg__b",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#3CEAAA"}),a.createElement("stop",{offset:.771,stopColor:"#5C72FF"}))));l.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9InVybCgjYSkiLz48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSIxNiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNTk0IDE4LjQzOGE3LjAzMSA3LjAzMSAwIDAgMS03LjAzMiA3LjAzVjIzLjM2YTQuOTIyIDQuOTIyIDAgMSAwLTQuOTIxLTQuOTIySDYuNTNhNy4wMzEgNy4wMzEgMCAxIDEgMTQuMDYzIDBaIiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4wMzUgMTkuNzAzYTEwLjUxNSAxMC41MTUgMCAwIDEtMy4wMTQgNi4xOTJsLTEuNTQxLTEuNTQxYTguMzQ1IDguMzQ1IDAgMCAwIDIuMzU1LTQuNjVoMi4yWm0uMDc1LTEuMjIydi0uMDg3LjA4N1pNMTIuMjk4IDcuOTY2YTEwLjUxNiAxMC41MTYgMCAwIDAtNi4xOTMgMy4wMTRsMS41NDIgMS41NDFhOC4zNDQgOC4zNDQgMCAwIDEgNC42NS0yLjM1NnYtMi4yWk0yNC4xMTQgMTguNDM4YzAtNS44MjUtNC43MjItMTAuNTQ3LTEwLjU0Ny0xMC41NDdoLS4wMDV2Mi4xOGguMDA1YTguMzY3IDguMzY3IDAgMCAxIDguMzY3IDguMzY3aDIuMThaIiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy41NjMgNC4zNzVjNy43NjYgMCAxNC4wNjIgNi4yOTYgMTQuMDYyIDE0LjA2M2gtMi4xMWMwLTYuNjAyLTUuMzUxLTExLjk1NC0xMS45NTMtMTEuOTU0VjQuMzc1WiIgZmlsbD0iI2ZmZiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAiIHkxPSIwIiB4Mj0iMzkuMTcyIiB5Mj0iMTAuODYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjM0NFQUFBIi8+PHN0b3Agb2Zmc2V0PSIuNzcxIiBzdG9wLWNvbG9yPSIjNUM3MkZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIwIiB5MT0iMCIgeDI9IjM5LjE3MiIgeTI9IjEwLjg2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzNDRUFBQSIvPjxzdG9wIG9mZnNldD0iLjc3MSIgc3RvcC1jb2xvcj0iIzVDNzJGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="},45192:function(e,l,i){var a=i(93236),n=i(37909);l.Z=()=>{const[e,l]=a.useState(!1);return a.useEffect((()=>{l((0,n.fk)())}),[]),e}},96911:function(e,l,i){i.d(l,{Z:function(){return t},c:function(){return s}});var a=i(93236),n=i(66732);const s=["xxl","xl","lg","md","sm","xs"];function t(){const[,e]=(0,n.dQ)(),l=(e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}))((e=>{const l=e,i=[].concat(s).reverse();return i.forEach(((e,a)=>{const n=e.toUpperCase(),s=`screen${n}Min`,t=`screen${n}`;if(!(l[s]<=l[t]))throw new Error(`${s}<=${t} fails : !(${l[s]}<=${l[t]})`);if(a<i.length-1){const e=`screen${n}Max`;if(!(l[t]<=l[e]))throw new Error(`${t}<=${e} fails : !(${l[t]}<=${l[e]})`);const s=`screen${i[a+1].toUpperCase()}Min`;if(!(l[e]<=l[s]))throw new Error(`${e}<=${s} fails : !(${l[e]}<=${l[s]})`)}})),e})(e));return a.useMemo((()=>{const e=new Map;let i=-1,a={};return{matchHandlers:{},dispatch(l){return a=l,e.forEach((e=>e(a))),e.size>=1},subscribe(l){return e.size||this.register(),i+=1,e.set(i,l),l(a),i},unsubscribe(l){e.delete(l),e.size||this.unregister()},unregister(){Object.keys(l).forEach((e=>{const i=l[e],a=this.matchHandlers[i];null==a||a.mql.removeListener(null==a?void 0:a.listener)})),e.clear()},register(){Object.keys(l).forEach((e=>{const i=l[e],n=l=>{let{matches:i}=l;this.dispatch(Object.assign(Object.assign({},a),{[e]:i}))},s=window.matchMedia(i);s.addListener(n),this.matchHandlers[i]={mql:s,listener:n},n(s)}))},responsiveMap:l}}),[e])}},37909:function(e,l,i){i.d(l,{fk:function(){return t},jD:function(){return n}});var a=i(67428);const n=()=>(0,a.Z)()&&window.document.documentElement;let s;const t=()=>{if(!n())return!1;if(void 0!==s)return s;const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),s=1===e.scrollHeight,document.body.removeChild(e),s}}}]);