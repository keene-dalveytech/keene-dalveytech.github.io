"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40],{65146:function(e,t,n){n.d(t,{PW:function(){return u},mr:function(){return s},xP:function(){return r},zg:function(){return l}});var a=n(1232),i=n(34804),s=function(e){if(!e)return"";var t,n=new Date(1e3*e);if(!((t=n)instanceof Date)||isNaN(+t))return"";var a=(null==n?void 0:n.getMonth())+1;return(a=(null==n?void 0:n.getMonth())>9?""+a:"0"+a)+"/"+((null==n?void 0:n.getDate())>9?null==n?void 0:n.getDate():"0"+(null==n?void 0:n.getDate()))+" "+((null==n?void 0:n.getHours())>9?null==n?void 0:n.getHours():"0"+(null==n?void 0:n.getHours()))+":"+((null==n?void 0:n.getMinutes())>9?null==n?void 0:n.getMinutes():"0"+(null==n?void 0:n.getMinutes()))},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"-";return!isNaN(+e)&&isFinite(+e)&&e?n+new a.O(e).toFixed(t,1)+i:s},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;if(!e)return"-";var a=(0,i._b)(e);return(0,i.dN)(a,t,n)},u="-"},24976:function(e,t,n){n.r(t),n.d(t,{default:function(){return xe}});var a=n(86378),i=n.n(a),s=n(97810),r=n(93236),l=n(8403),u=n(23878),d=n(58357),p=n.n(d),o=n(71977),y=n.n(o),c=n(61145),m=function(){var e=y()(p()().mark((function e(t){var n,a,s,r,l;return p()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},a='query MyQuery {\n    users(where: {id: "'.concat(t.toLowerCase(),'"}) {\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n      totalProfitCount\n    }\n  }'),e.next=4,(0,c.Dw)(c.Jx,a);case 4:return s=e.sent,r=s.users,l=i()(i()({},null==r?void 0:r[0]),n),e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=y()(p()().mark((function e(t){var n,a,s,r;return p()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n='query MyQuery {\n    users(where: {id: "'.concat(t.toLowerCase(),'"}){\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n    }\n  }'),a={},e.next=4,(0,c.Dw)(c.Jx,n);case 4:return s=e.sent,r=s.users,console.log("---users---",r),e.abrupt("return",i()(i()({},null==r?void 0:r[0]),a));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=n(34804),v=n(14557),b=n.n(v),T=n(39712),x=n.n(T),g=n(64698),h=n.n(g),M=n(62898),j=n.n(M),I=JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_fundFee","type":"address"},{"internalType":"address","name":"_openFee","type":"address"},{"internalType":"address","name":"_closeFee","type":"address"},{"internalType":"address","name":"_execFee","type":"address"},{"internalType":"address","name":"_liquidate","type":"address"},{"internalType":"address","name":"_feeStore","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATE_FEE_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"closeFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"}],"name":"cumulativeFundingRates","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"execFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeStore","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_mkt","type":"address"},{"internalType":"address","name":"_user","type":"address"}],"name":"getAccountFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"}],"name":"getCloseFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"getCloseRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"getCollateralFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"getExecFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_size","type":"uint256"},{"internalType":"bool","name":"_isExec","type":"bool"},{"internalType":"bool","name":"_isOpen","type":"bool"}],"name":"getFees","outputs":[{"internalType":"int256","name":"_totoalFees","type":"int256"},{"internalType":"int256","name":"_execFee","type":"int256"},{"internalType":"int256","name":"_fundFee","type":"int256"},{"internalType":"int256","name":"_tradeFee","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"getFundingFee","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"getFundingRate","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"getLiquidateFee","outputs":[{"internalType":"uint256","name":"lf","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_size","type":"uint256"}],"name":"getLiquidateFees","outputs":[{"internalType":"int256","name":"_totoalFees","type":"int256"},{"internalType":"int256","name":"_execFee","type":"int256"},{"internalType":"int256","name":"_fundFee","type":"int256"},{"internalType":"int256","name":"_tradeFee","type":"int256"},{"internalType":"int256","name":"_liqFee","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_size","type":"uint256"}],"name":"getLiquidateFees2","outputs":[{"components":[{"internalType":"int256","name":"_totoalFees","type":"int256"},{"internalType":"int256","name":"_execFee","type":"int256"},{"internalType":"int256","name":"_fundFee","type":"int256"},{"internalType":"int256","name":"_tradeFee","type":"int256"},{"internalType":"int256","name":"_liqFee","type":"int256"}],"internalType":"struct IFeeRouter.FeeOuts","name":"outs","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"}],"name":"getOpenFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"getOpenRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrecision","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidateFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"positionBook","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fee","type":"address"}],"name":"setCloseFeeAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_market","type":"address[]"},{"internalType":"int256[]","name":"_rates","type":"int256[]"}],"name":"setCloseFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fee","type":"address"}],"name":"setExecFeeAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_market","type":"address[]"},{"internalType":"int256[]","name":"_rates","type":"int256[]"}],"name":"setExecFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_store","type":"address"}],"name":"setFeeStore","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fee","type":"address"}],"name":"setFundFeeAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fee","type":"address"}],"name":"setLiquidateAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_market","type":"address[]"},{"internalType":"int256[]","name":"_rates","type":"int256[]"}],"name":"setLiquidateFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fee","type":"address"}],"name":"setOpenFeeAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_market","type":"address[]"},{"internalType":"int256[]","name":"_rates","type":"int256[]"}],"name":"setOpenFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_book","type":"address"}],"name":"setPositionBook","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"int256","name":"_openFee","type":"int256"},{"internalType":"int256","name":"_closeFee","type":"int256"},{"internalType":"int256","name":"_fundFee","type":"int256"},{"internalType":"int256","name":"_liquidateFee","type":"int256"},{"internalType":"int256","name":"_execFee","type":"int256"}],"name":"updateAccountFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"}],"name":"updateCumulativeFundingRate","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),N=function(e){h()(a,e);var t,n=j()(a);function a(e,t){return b()(this,a),n.call(this,e,t,I.Mt)}return x()(a,[{key:"getClassName",value:function(){return"FeeRouter"}},{key:"getAccountFees",value:(t=y()(p()().mark((function e(t,n){var a;return p()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getAccountFees",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})}]),a}(n(59493).k),w=function(){var e=y()(p()().mark((function e(t,n,a,i){var s,r,l;return p()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new N(t,n),e.next=3,s.getAccountFees(a,i);case 3:return r=e.sent,l=null==r?void 0:r.reduce((function(e,t){var n;return e=null===(n=e)||void 0===n?void 0:n.add(t)}),(0,_._b)(0)),e.abrupt("return",null==l?void 0:l.toString());case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,i){return e.apply(this,arguments)}}(),F=n(52149),Z="more___v_xdE",A=n(64052),k=n(93548),D=n(71609),C=n(81856),z=n(2260),L=n(40947),P=n(65146),R={item:"item___FRv2D",btn:"btn___fp2oa",primary:"primary___h3mfF",head:"head___J_JkM",content:"content___EqeXD",cell:"cell___NTsu9",fieldValue:"fieldValue___cZGhB",fieldName:"fieldName___weocJ",footer:"footer___Ir88b",icon:"icon___qyyhH",fee:"fee___t82Et",fundFeeInfo:"fundFeeInfo___KmcYB"},E=n(62086),O=function(){return(0,E.jsxs)("div",{className:R.fundFeeInfo,children:[(0,E.jsxs)("b",{children:[(0,E.jsx)(D._H,{id:"Fund"}),(0,E.jsx)(D._H,{id:"Fee"})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)(D._H,{id:"fundFeeInfoP1"}),(0,E.jsx)("br",{}),(0,E.jsx)(D._H,{id:"fundFeeInfoP2"})]})]})},V=function(e){var t=e.tradingData;return(0,E.jsxs)(A.Z,{className:R.tradingInfo,gutter:24,children:[(0,E.jsx)(k.Z,{xs:24,lg:12,children:(0,E.jsxs)("div",{className:R.item,children:[(0,E.jsx)("div",{className:R.head,children:"Trading Data"}),(0,E.jsxs)(A.Z,{className:R.content,children:[(0,E.jsxs)(k.Z,{span:8,className:R.cell,children:[(0,E.jsx)("div",{className:R.fieldValue,children:null!=t&&t.totalVolume?"$".concat((0,P.zg)(null==t?void 0:t.totalVolume)):"-"}),(0,E.jsx)("div",{className:R.fieldName,children:"Total volume"})]}),(0,E.jsxs)(k.Z,{span:8,className:R.cell,children:[(0,E.jsx)("div",{className:R.fieldValue,children:null!=t&&t.feesPaid?"$".concat((0,P.zg)(null==t?void 0:t.feesPaid)):"-"}),(0,E.jsx)("div",{className:R.fieldName,children:"Fees Paid"})]}),(0,E.jsxs)(k.Z,{span:8,className:R.cell,children:[(0,E.jsx)("div",{className:R.fieldValue,children:null!=t&&t.realizedPnl?"$".concat((0,P.zg)(null==t?void 0:t.realizedPnl)):"-"}),(0,E.jsx)("div",{className:R.fieldName,children:"PNL"})]})]}),(0,E.jsx)(z.Z,{className:R.footer,href:"/trade",children:"Trade"})]})}),(0,E.jsx)(k.Z,{xs:24,lg:12,children:(0,E.jsxs)("div",{className:R.item,children:[(0,E.jsx)("div",{className:R.head,children:"Trading Fees"}),(0,E.jsxs)(A.Z,{className:R.content,children:[(0,E.jsxs)(k.Z,{span:12,className:R.cell,children:[(0,E.jsx)("div",{className:R.fieldValue,children:"0.1000%"}),(0,E.jsx)("div",{className:R.fieldName,children:"Open/Close Fee"})]}),(0,E.jsxs)(k.Z,{span:10,offset:2,className:R.cell,children:[(0,E.jsx)("div",{className:R.fieldValue,children:"0.0020% / 1h"}),(0,E.jsx)(L.Z,{placement:"topLeft",overlay:(0,E.jsx)(O,{}),children:(0,E.jsxs)("div",{className:"".concat(R.fieldName," ").concat(R.fee),children:["Funding Fee ",(0,E.jsx)(C.r,{className:R.icon})]})})]})]}),(0,E.jsx)(z.Z,{className:R.footer,type:"c20",href:"#",children:"Read More"})]})})]})},S=n(93498),G=n.n(S),W=n(1232),B=n(54944),Q=n.n(B),Y=Object.defineProperty,H=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,q=(e,t,n)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const X=e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))J.call(t,n)&&q(e,n,t[n]);if(H)for(var n of H(t))U.call(t,n)&&q(e,n,t[n]);return e})({width:24,height:25,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M17.25 9h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.75v-7A1.75 1.75 0 0 0 17.25 9Z",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M15.5 9V7.25a1.75 1.75 0 0 0-1.75-1.75h-7A1.75 1.75 0 0 0 5 7.25v7A1.75 1.75 0 0 0 6.75 16H8.5",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));var K=n(51466),$=n(1463),ee=n(38147),te=n(4051),ne=n(76078),ae=n(70855),ie=n(38663),se=n(36798),re="content___oCbRs",le="mainText___omv2g",ue="pnlContainer____9bQB",de="pnl___A7Mzd",pe="winRate____2WVz",oe="prices___xdV4Q",ye="priceContainer___ioeHG",ce="priceTitle___RSAFh",me="priceValue___s4toj",fe=function(e){var t=e.userInfo;return(0,E.jsxs)("div",{className:re,children:[(0,E.jsxs)("span",{className:le,children:["I made ",(0,E.jsx)("b",{children:t.trades})," trades on DEI Come on with me!"]}),(0,E.jsxs)("div",{className:ue,children:[(0,E.jsx)("span",{className:de,children:(0,E.jsx)(D._H,{id:"Winrate"})}),(0,E.jsx)("span",{className:pe,children:(null!=t&&t.winRate?(0,W.O)(null==t?void 0:t.winRate).multipliedBy(100).toFixed(2,1):"-")+"%"})]}),(0,E.jsx)("div",{className:oe,children:[{titleId:"profit",value:(0,P.zg)(null==t?void 0:t.avgProfit)+"%"},{titleId:"loss",value:(0,P.zg)(null==t?void 0:t.avgLoss)+"%"}].map((function(e){return(0,E.jsxs)("div",{className:ye,children:[(0,E.jsxs)("span",{className:ce,children:[(0,E.jsx)(D._H,{id:"Average"})," ",(0,E.jsx)(D._H,{id:e.titleId})]}),(0,E.jsx)("span",{className:me,children:e.value})]},e.titleId)}))})]})},_e={walletInfo:"walletInfo___GORBE",avatar:"avatar___SFBQR",copy:"copy___lquiD",left:"left___J1Auj",right:"right___cW8mN",address:"address___WNk72",cells:"cells___ZDMOm",cell:"cell___Cu_Tk",fieldValue:"fieldValue___YJIFV",fieldName:"fieldName___E9D3z",btn:"btn___UEE1S",shareBtn:"shareBtn___KsWSb",primary:"primary___CrgyC",h5Address:"h5Address___F2MEi"},ve=function(e){var t=e.displayAccount,n=e.account;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("span",{children:null!=t?t:"-"}),(0,E.jsx)(Q(),{text:null!=n?n:"",onCopy:function(){ne.U.success("Address copied to your clipboard")},children:(0,E.jsx)(X,{className:_e.copy})})]})},be=function(e){var t,n=e.userInfo,a=$.I.useContainer().setWalletVisible,i=(0,s.Ge)(),l=i.deactivate,u=i.account,d=(0,ie.E)(te.p4).provider,p=(0,r.useCallback)((function(){(0,se.VK)(),(0,se.hL)(),l()}),[l]);var o=(0,r.useMemo)((function(){return u&&u.length>13?"".concat(u.slice(0,5),"...").concat(u.slice(u.length-4)):u}),[u]),y=[{name:"Trades",value:null!==(t=null==n?void 0:n.trades)&&void 0!==t?t:"-"},{name:"Winrate",value:(null!=n&&n.winRate?(0,W.O)(null==n?void 0:n.winRate).multipliedBy(100).toFixed(2,1):"-")+"%"},{name:"Average profit",value:(0,P.zg)(null==n?void 0:n.avgProfit)+"%",xsValue:10},{name:"Average loss",value:(0,P.zg)(null==n?void 0:n.avgLoss)+"%"}];return(0,E.jsxs)(A.Z,{className:_e.walletInfo,children:[(0,E.jsx)(k.Z,{xs:24,md:12,className:_e.left,children:(0,E.jsxs)(A.Z,{style:{width:"100%"},children:[(0,E.jsx)(k.Z,{flex:"100px",style:{height:80},children:u?(0,E.jsx)(G(),{size:80,address:null!=u?u:"",provider:d}):(0,E.jsx)("img",{className:_e.avatar,src:K.Z})}),(0,E.jsx)(k.Z,{className:_e.h5Address,children:(0,E.jsx)(ve,{displayAccount:o,account:u})}),(0,E.jsxs)(k.Z,{className:_e.details,flex:"auto",children:[(0,E.jsx)(A.Z,{className:_e.address,children:(0,E.jsx)(ve,{displayAccount:o,account:u})}),(0,E.jsx)(A.Z,{className:_e.cells,children:y.map((function(e,t){return(0,E.jsxs)(k.Z,{className:_e.cell,lg:6,xs:e.xsValue||7,children:[(0,E.jsx)("span",{className:_e.fieldValue,children:e.value}),(0,E.jsx)("span",{className:_e.fieldName,children:e.name})]},t)}))})]})]})}),(0,E.jsxs)(k.Z,{xs:24,md:8,className:_e.right,children:[u&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(ee.T,{title:"Share",downloadName:"Dei.io_share",content:(0,E.jsx)(ee.v,{children:(0,E.jsx)(fe,{userInfo:n})}),children:(0,E.jsx)(z.Z,{className:"".concat(_e.shareBtn),children:(0,E.jsx)(D._H,{id:"Share"})})}),(0,E.jsx)(z.Z,{className:_e.btn,href:"#",type:"c30",onClick:function(){return p(),localStorage.removeItem(ae.Cs),void localStorage.removeItem(ae.Wr)},children:(0,E.jsx)(D._H,{id:"Disconnect"})})]}),!u&&(0,E.jsx)(z.Z,{className:_e.btn,href:"#",onClick:function(){return a(!0)},children:"Connect Wallet"})]})]})},Te=function(){var e=(0,s.Ge)(),t=e.account,n=e.library,a=e.chainId,d=(0,l.sJ)(F.bI),p=(0,u.ZP)(t,(function(e){return m(t||"")})).data,o=(0,u.ZP)([t],(function(){return f(t||"")})).data,y=(0,u.ZP)("getAccountFees",(function(){return w(n,a,t,null==d?void 0:d.address)})).data,c=(0,r.useMemo)((function(){return y?i()(i()({},o),{},{feesPaid:y}):o}),[y,o]);return(0,E.jsxs)("div",{className:Z,children:[(0,E.jsx)(be,{userInfo:p}),(0,E.jsx)(V,{tradingData:c})]})},xe=function(){return(0,E.jsx)(l.Wh,{children:(0,E.jsx)(Te,{})})}},51466:function(e,t,n){n.d(t,{r:function(){return d}});var a=n(93236),i=Object.defineProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const d=e=>a.createElement("svg",((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&u(e,n,t[n]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("rect",{width:32,height:32,rx:16,fill:"url(#rewards_logo_svg__a)"}),a.createElement("rect",{width:32,height:32,rx:16,fill:"url(#rewards_logo_svg__b)"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.594 18.438a7.031 7.031 0 0 1-7.032 7.03V23.36a4.922 4.922 0 1 0-4.921-4.922H6.53a7.031 7.031 0 1 1 14.063 0Z",fill:"#fff"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.035 19.703a10.515 10.515 0 0 1-3.014 6.192l-1.541-1.541a8.345 8.345 0 0 0 2.355-4.65h2.2Zm.075-1.222v-.087.087ZM12.298 7.966a10.516 10.516 0 0 0-6.193 3.014l1.542 1.541a8.344 8.344 0 0 1 4.65-2.356v-2.2ZM24.114 18.438c0-5.825-4.722-10.547-10.547-10.547h-.005v2.18h.005a8.367 8.367 0 0 1 8.367 8.367h2.18Z",fill:"#fff"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.563 4.375c7.766 0 14.062 6.296 14.062 14.063h-2.11c0-6.602-5.351-11.954-11.953-11.954V4.375Z",fill:"#fff"}),a.createElement("defs",null,a.createElement("linearGradient",{id:"rewards_logo_svg__a",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#3CEAAA"}),a.createElement("stop",{offset:.771,stopColor:"#5C72FF"})),a.createElement("linearGradient",{id:"rewards_logo_svg__b",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#3CEAAA"}),a.createElement("stop",{offset:.771,stopColor:"#5C72FF"}))));t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9InVybCgjYSkiLz48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSIxNiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNTk0IDE4LjQzOGE3LjAzMSA3LjAzMSAwIDAgMS03LjAzMiA3LjAzVjIzLjM2YTQuOTIyIDQuOTIyIDAgMSAwLTQuOTIxLTQuOTIySDYuNTNhNy4wMzEgNy4wMzEgMCAxIDEgMTQuMDYzIDBaIiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4wMzUgMTkuNzAzYTEwLjUxNSAxMC41MTUgMCAwIDEtMy4wMTQgNi4xOTJsLTEuNTQxLTEuNTQxYTguMzQ1IDguMzQ1IDAgMCAwIDIuMzU1LTQuNjVoMi4yWm0uMDc1LTEuMjIydi0uMDg3LjA4N1pNMTIuMjk4IDcuOTY2YTEwLjUxNiAxMC41MTYgMCAwIDAtNi4xOTMgMy4wMTRsMS41NDIgMS41NDFhOC4zNDQgOC4zNDQgMCAwIDEgNC42NS0yLjM1NnYtMi4yWk0yNC4xMTQgMTguNDM4YzAtNS44MjUtNC43MjItMTAuNTQ3LTEwLjU0Ny0xMC41NDdoLS4wMDV2Mi4xOGguMDA1YTguMzY3IDguMzY3IDAgMCAxIDguMzY3IDguMzY3aDIuMThaIiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy41NjMgNC4zNzVjNy43NjYgMCAxNC4wNjIgNi4yOTYgMTQuMDYyIDE0LjA2M2gtMi4xMWMwLTYuNjAyLTUuMzUxLTExLjk1NC0xMS45NTMtMTEuOTU0VjQuMzc1WiIgZmlsbD0iI2ZmZiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAiIHkxPSIwIiB4Mj0iMzkuMTcyIiB5Mj0iMTAuODYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjM0NFQUFBIi8+PHN0b3Agb2Zmc2V0PSIuNzcxIiBzdG9wLWNvbG9yPSIjNUM3MkZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIwIiB5MT0iMCIgeDI9IjM5LjE3MiIgeTI9IjEwLjg2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzNDRUFBQSIvPjxzdG9wIG9mZnNldD0iLjc3MSIgc3RvcC1jb2xvcj0iIzVDNzJGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="},93548:function(e,t,n){var a=n(64895);t.Z=a.Z},64052:function(e,t,n){var a=n(82850);t.Z=a.Z}}]);