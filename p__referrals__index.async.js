"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[202],{84923:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(93236),n=r(2260),s=r(97016),i="pagination___qS7Hi",l="button___th9PV",c=r(62086);function d(e){var t=e.data,r=e.pageIndex,d=e.setPageIndex,o=e._data,u=(0,a.useMemo)((function(){return r===Math.ceil((null==o?void 0:o.length)/s.I)}),[r,o]);return(0,c.jsxs)("div",{className:i,children:[r>s.Q&&(0,c.jsx)(n.Z,{className:l,type:"c20",onClick:function(){d(r-1)},children:(0,c.jsx)("div",{children:"Prev"})}),t&&t.length>=s.I&&!u&&(0,c.jsx)(n.Z,{className:l,type:"c20",onClick:function(){d(r+1)},children:(0,c.jsx)("div",{children:"Next"})})]})}},45183:function(e,t,r){r.d(t,{g:function(){return a},k:function(){return n}});var a="https://blex.io/api/share",n="https://twitter.com/intent/tweet"},63338:function(e,t,r){r.d(t,{Q6:function(){return l},dp:function(){return c}});var a=r(39657),n=r(1232),s=r(34804),i=r(97364);function l(e){return e instanceof a.O$?(0,n.Z)((0,s.dN)(e,18,2)):(0,n.Z)("..."===e?0:e)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-";if(null==e||isNaN(Number(e)))return{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.defaultDisplay)||"-"},number:l(0),value:r};var a=l(e),n=a.toFixed(t,1);return(0,i.R$)().showFullDecimals&&(n=a.toString()),{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.thousandSeparator,r=void 0===t||t,s=e.prefix,i=void 0===s?"$":s,l=e.suffix,c=void 0===l?"":l,o=r?d(n):n,u=i||"";return a.lt(0)&&i&&(u="-".concat(u),o=o.slice(1)),"".concat(u).concat(o).concat(c||"")},number:a,value:0==+n?"0":n}}function d(e){return e?e.replace(/\d+/,(function(e){return e.replace(/(\d)(?=(\d{3})+$)/g,(function(e){return e+","}))})):""}},69033:function(e,t,r){r.d(t,{x:function(){return i}});var a=r(97810),n=r(4051),s=r(70855);function i(){var e=(0,a.Ge)().chainId;if(!e){var t=localStorage.getItem(s.HC);t&&((e=parseInt(t))||localStorage.removeItem(s.HC))}return e&&n.FQ.includes(e)||(e=n.rC),{chainId:e}}},61145:function(e,t,r){r.d(t,{Dw:function(){return v},Jx:function(){return p},eI:function(){return x},x7:function(){return m}});var a,n=r(58357),s=r.n(n),i=r(71977),l=r.n(i),c=r(24047),d=r.n(c),o=r(27841),u=r(68085),f=r(4051);function x(e){return new o.f({uri:e,cache:new u.h})}var p="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",h=(a={},d()(a,f.Qz,p),d()(a,f.bx,p),a),m=function(e){return h[e]||p},v=function(){var e=l()(s()().mark((function e(t,r){var a,n;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:r}),mode:"cors"}).catch((function(e){console.log("err",e)}));case 2:return a=e.sent,e.next=5,null==a?void 0:a.json();case 5:return n=e.sent,e.abrupt("return",(null==n?void 0:n.data)||{});case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},65146:function(e,t,r){r.d(t,{P:function(){return n},m:function(){return a}});var a=function(e){if(!e)return"";var t,r=new Date(1e3*e);if(!((t=r)instanceof Date)||isNaN(+t))return"";var a=(null==r?void 0:r.getMonth())+1;return(a=(null==r?void 0:r.getMonth())>9?""+a:"0"+a)+"/"+((null==r?void 0:r.getDate())>9?null==r?void 0:r.getDate():"0"+(null==r?void 0:r.getDate()))+" "+((null==r?void 0:r.getHours())>9?null==r?void 0:r.getHours():"0"+(null==r?void 0:r.getHours()))+":"+((null==r?void 0:r.getMinutes())>9?null==r?void 0:r.getMinutes():"0"+(null==r?void 0:r.getMinutes()))},n="-"},35053:function(e,t,r){r.r(t),r.d(t,{default:function(){return ot}});var a,n=r(97810),s=r(50941),i=r(93236),l=r(71609),c=r(30577),d=r.n(c),o=r(86378),u=r.n(o),f=r(14661),x=r.n(f),p=r(62125),h=r(81009),m=r(81913),v=r(4051),j=r(34804),_=r(61145),g={referralsSummaries:[{tradedVolume:"12345678901234567890",totalTradersReferred:18,totalRebates:"98765432109876543210",lastUpdateAt:1648429200}],referralsDetails:[{referralCode:"ABC123",tradedVolume:"98765432109876543210",tradersReferred:19,totalRebates:"12345678901234567890"}],referralsHistory:[{tradeTime:1648429200,amount:"98765432109876543210",txHash:"0x1234567890abcdef"},{tradeTime:1648411200,amount:"12345678901234567890",txHash:"0xabcdef1234567890"},{tradeTime:1648411200,amount:"12345678901234567890",txHash:"0xabcdef1234567890"}]},b=(0,p.Ps)(a||(a=x()(["\n  query MyQuery($account: String!, $role: String, $referreeId: String) {\n    referralsSummaries(orderDirection: desc, where: { account: $account }) {\n      tradedVolume\n      totalTradersReferred\n      totalRebates\n      lastUpdateAt\n    }\n    referralsDetails(orderBy: timestamp, orderDirection: asc, where: { account: $account }) {\n      referralCode\n      tradedVolume\n      tradersReferred\n      totalRebates\n    }\n    referralsHistories(orderBy: tradeTime, orderDirection: desc, where: { id: $account }) {\n      tradeTime\n      amount\n      txHash\n    }\n    referralsSummary(id: $role) {\n      totalRebates\n      tradedVolume\n      totalTradersReferred\n    }\n    traderSummary: referralsSummary(id: $referreeId) {\n      totalRebates\n      tradedVolume\n      totalTradersReferred\n    }\n  }\n"]))),y=function(e){if(e)return u()(u()({},e),{},{tradedVolume:(0,j.tP)(null==e?void 0:e.tradedVolume,18)})};function w(){var e=(0,i.useState)(0),t=d()(e,2),r=t[0],a=t[1],s=(0,n.Ge)(),l=s.chainId,c=s.account,o=(0,_.eI)((0,_.x7)(l||v.rC)),f=(0,h.ZP)(["useReferralsData",c,r],(function(){return o.query({query:b,variables:{account:(c||"").toLowerCase(),role:"".concat(null==c?void 0:c.toLowerCase(),":referrer"),referreeId:"".concat(null==c?void 0:c.toLowerCase(),":referree")}}).then((function(e){var t;if(e.data){var r=null===(t=e.data.referralsDetails)||void 0===t?void 0:t.map((function(e){return u()(u()({},y(e)),{},{referralCode:(0,m.oE)(e.referralCode)})})),a=r.reduce((function(e,t){return e+t.tradersReferred}),0)||0;return{referralsSummaries:y(u()(u()({},e.data.referralsSummary),{},{totalTradersReferred:a}))||{},referralsDetails:r,referralsHistory:g.referralsHistory,traderHistory:g.referralsHistory,traderSummary:y(u()({},e.data.traderSummary))||{}}}})).catch(console.warn).finally((function(){}))}),{refreshInterval:5e3});return{data:f.data,loading:f.isLoading,reloadKey:r,setReloadKey:a}}var N=r(2260),M=r(24047),T=r.n(M),C=r(59277),I=r(84875),D=r.n(I),A="tabList___cNbRg",R="tabItem___eHmqz",H="selected___uh3dt",S="panel___afQe_",E=r(62086),k=function(e){var t=e.tabs,r=e.panels,a=(0,i.useState)(0),n=d()(a,2),s=n[0],l=n[1];return(0,E.jsxs)(C.O.Group,{defaultIndex:s,onChange:function(e){l(e)},children:[(0,E.jsx)(C.O.List,{className:A,children:t.map((function(e){return(0,E.jsx)(C.O,{className:function(e){var t=e.selected;return D()(R,T()({},H,t))},children:e.label})}))}),(0,E.jsx)(C.O.Panels,{children:r.map((function(e){return(0,E.jsx)(C.O.Panel,{children:(0,E.jsx)("div",{className:S,children:e.children})})}))})]})},L="description___mvEu0",O="referrals___qI_wF",Z="header___lWEr8",P="title___Jub24",V="subTitle___TUoIY",U="secondTitle___UzCd8",z="content___IKnhY",Q="wrapper___RkALK",F="loadingContainer___MRc0t",G=r(58357),$=r.n(G),B=r(71977),W=r.n(B),Y=r(68202),q=r(1463),J=r(69033),K=r(40883);function X(e,t){var r=(0,i.useState)(e),a=d()(r,2),n=a[0],s=a[1];return(0,i.useEffect)((function(){var r=setTimeout((function(){s(e)}),t);return function(){clearTimeout(r)}}),[e,t]),n}var ee=r(33249);function te(e){return e===ee.d}function re(e,t,r){return ae.apply(this,arguments)}function ae(){return(ae=W()($()().mark((function e(t,r,a){var n,s;return $()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,m.Do)(t),e.next=3,a.getCodeOwners([n]);case 3:return s=e.sent,e.abrupt("return",!te(s[0]));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ne=/^\w+$/,se=function(e,t,r){var a=(0,i.useState)(!1),n=d()(a,2),s=n[0],l=n[1],c=(0,i.useState)(!1),o=d()(c,2),u=o[0],f=o[1];return(0,i.useEffect)((function(){var a=!1;function n(){return(n=W()($()().mark((function n(){var s;return $()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==e&&ne.test(e)&&null!==r){n.next=4;break}return l(!1),f(!1),n.abrupt("return");case 4:return l(!0),n.next=7,re(e,t,r);case 7:s=n.sent,a||(f(s),l(!1));case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){a=!0}}),[e,t]),[s,u]},ie=r(23867),le="text___JJFXW",ce="title___5l59y",de="subTitle___hjMwQ",oe="btn___oMxX1",ue="input___kLskp",fe="editInput___rA2Zu",xe="editText___rTdx_",pe="redTip___ttsVC",he=function(e){var t,r=e.type,a=void 0===r?"add":r,s=e.code,c=e.successCb,o=q.I.useContainer().setWalletVisible,u=(0,n.Ge)().account,f=(0,J.x)().chainId,x=(0,ie.Z)(),p=(0,i.useState)(""),h=d()(p,2),v=h[0],j=h[1],_=X(v,300),g="edit"===a,b=se(_,f,x),y=d()(b,2),w=y[0],M=y[1],C=(0,i.useState)(!1),I=d()(C,2),A=I[0],R=I[1],H={"referrals.title":"Enter referral code","referrals.subTitle":"Please input a referral code to benefit from fee discounts.","referrals.btnText":"Submit","referrals.editBtnText":"Save Changes","referrals.successMsg":"Referral code updated!","referrals.failMsg":g?"Referral code updated failed.":"Adding referral code failed."},S=(0,i.useMemo)((function(){return _.length>20}),[_]);function k(){return(k=W()($()().mark((function e(){var t,r;return $()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=3;break}return o(!0),e.abrupt("return");case 3:if(null!==x){e.next=5;break}return e.abrupt("return");case 5:return R(!0),e.prev=6,e.next=9,x.setTraderReferralCodeByUser((0,m.Do)(v));case 9:return t=e.sent,e.next=12,t.wait();case 12:1===e.sent.status&&(K.U.success((0,E.jsx)(l._H,{id:"referrals.successMsg",defaultMessage:H["referrals.successMsg"]})),j(""),c()),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(6),r=(0,E.jsx)(l._H,{id:"referrals.failMsg",defaultMessage:H["referrals.failMsg"]}),K.U.error(r),console.error(e.t0);case 21:return e.prev=21,R(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[6,16,21,24]])})))).apply(this,arguments)}return(0,E.jsxs)("div",{children:[!g&&(0,E.jsxs)("div",{className:le,children:[(0,E.jsx)("div",{className:ce,children:(0,E.jsx)(l._H,{id:"referrals.title",defaultMessage:H["referrals.title"]})}),(0,E.jsx)("div",{className:de,children:S?(0,E.jsxs)("span",{className:pe,children:[(0,E.jsx)(l._H,{id:"referrals.codeLenTip"})," "]}):(0,E.jsx)(l._H,{id:"referrals.subTitle",defaultMessage:H["referrals.subTitle"]})})]}),(0,E.jsx)(Y.Z,{className:D()((t={},T()(t,ue,!g),T()(t,fe,g),t)),placeholder:"Enter referral code",value:v,onChange:function(e){return j(e.target.value)}}),g&&(0,E.jsx)("div",{className:xe,children:(0,E.jsx)("div",{className:de,children:S?(0,E.jsxs)("span",{className:pe,children:[(0,E.jsx)(l._H,{id:"referrals.codeLenTip"})," "]}):(0,E.jsx)(l._H,{id:"referrals.subTitle",defaultMessage:H["referrals.subTitle"]})})}),(0,E.jsx)(N.Z,{className:oe,size:"large",disabled:!(!u||""!==v&&!A&&!w&&M&&v!==s&&!S),onClick:function(){return k.apply(this,arguments)},children:(0,E.jsx)(l._H,{id:u?"edit"===a&&v===s?"Same as current active code":A?"Submitting...":""===v?"Enter referral code":w?"Checking code...":M?"Submit":"Referral code does not exist":"ConnectWallet"})})]})},me=r(22677),ve="wrapper___jm9XU",je="text___mGjcc",_e="title___l7sJ_",ge="subTitle___K1pDN",be="btn___EblL2",ye="input___m3tbU",we="modalForm___HfJiB",Ne="redTip___eUu93",Me=function(e){var t=e.isModal,r=void 0!==t&&t,a=e.successCb,s=q.I.useContainer().setWalletVisible,c=(0,n.Ge)(),o=c.account,u=c.library,f=c.active,x=(0,i.useState)(""),p=d()(x,2),h=p[0],v=p[1],j=(0,J.x)().chainId,_=(0,ie.Z)(),g=X(h,300),b=se(g,j,_),y=d()(b,2),w=y[0],M=y[1],T=(0,i.useState)(!1),C=d()(T,2),I=C[0],D=C[1];function A(){return o?I?"Creating...":""===h?"Enter a code":w?"Checking code...":M?"Code already taken":"Create":"Connect wallet"}var R=(0,i.useMemo)((function(){return g.length>20}),[g]);function H(){return!!f&&!!(""===h||I||w||M||R)}var S=function(){var e=W()($()().mark((function e(){var t,r,n;return $()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D(!0),f){e.next=4;break}return s(!0),e.abrupt("return");case 4:if(h){e.next=6;break}return e.abrupt("return");case 6:return t=(0,m.Do)(h),r=new me.G(u,j),e.prev=8,e.next=11,r.registerCode(t);case 11:return n=e.sent,e.next=14,n.wait();case 14:1===e.sent.status&&(K.U.success("Referral code added!"),a()),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(8),"Create code failed.",K.U.error("Create code failed."),console.error(e.t0);case 23:return e.prev=23,D(!1),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[8,18,23,26]])})));return function(){return e.apply(this,arguments)}}();return r?(0,E.jsxs)("div",{className:we,children:[(0,E.jsx)(Y.Z,{className:ye,value:h,placeholder:"Enter a code",onChange:function(e){v(e.target.value)}}),(0,E.jsx)("div",{className:je,children:R?(0,E.jsxs)("span",{className:Ne,children:[(0,E.jsx)(l._H,{id:"referrals.codeLenTip"})," "]}):(0,E.jsx)(l._H,{id:"referrals.looksLike"})}),(0,E.jsx)(N.Z,{className:be,disabled:H(),onClick:S,children:(0,E.jsx)(l._H,{id:A()})})]}):(0,E.jsxs)("div",{className:ve,children:[(0,E.jsxs)("div",{className:je,children:[(0,E.jsx)("div",{className:_e,children:"Generate Referral Code"}),(0,E.jsx)("div",{className:ge,children:R?(0,E.jsxs)("span",{className:Ne,children:[(0,E.jsx)(l._H,{id:"referrals.codeLenTip"})," "]}):(0,E.jsx)(l._H,{id:"referrals.looksLike"})})]}),(0,E.jsx)(Y.Z,{className:ye,placeholder:"Enter a code",value:h,onChange:function(e){return v(e.target.value)}}),(0,E.jsx)(N.Z,{className:be,disabled:H(),onClick:S,children:(0,E.jsx)(l._H,{id:A()})})]})},Te=r(80593),Ce=r(63338),Ie=r(87802),De=r(54944),Ae=r.n(De),Re=r(97016),He=r(63934),Se=r(65682),Ee=r(94972),ke="default___pVKee",Le="icon___k3cAT",Oe=function(e){var t=e.text;return(0,E.jsx)("div",{className:ke,children:(0,E.jsxs)("div",{className:Le,children:[(0,E.jsx)(Ee.r,{}),(0,E.jsx)("div",{children:"string"==typeof t?(0,E.jsx)(l._H,{id:t}):t})]})})},Ze=r(84923),Pe=r(45183),Ve="table___HcDLr",Ue="tableWrapper___vzD8o",ze="tableTitle___LLqB4",Qe="referralCode___lsJAw",Fe=function(e){var t=e.data,r=e.openMdl,a=(0,l.YB)(),n="https://dalveytech.github.io/depx-view-build",s=a.formatMessage({id:"referrals.ttwitterText"}),c=(0,i.useState)(Re.Q),o=d()(c,2),u=o[0],f=o[1],x=[{title:(0,E.jsx)(l._H,{id:"referrals.referralCode",defaultMessage:"REFERRAL CODE"}),width:"20%",dataIndex:"referralCode",render:function(e){var t="".concat(n,"/#/trade?ref=").concat(e);return(0,E.jsxs)("div",{className:Qe,children:[(0,E.jsx)("span",{children:e}),(0,E.jsx)(Ae(),{text:t,onCopy:function(){K.U.success("Referral link copied to your clipboard")},children:(0,E.jsx)(He.r,{})}),(0,E.jsx)(Se.r,{onClick:function(t){return function(e,t){e.preventDefault();var r="".concat(n,"/#/trade?ref=").concat(t),a="".concat(Pe.k,"?text=").concat(s,"&url=").concat(encodeURIComponent(r));window.open(a,"_blank")}(t,e)}})]})}},{title:(0,E.jsx)(l._H,{id:"referrals.tradedVolume",defaultMessage:"TOTAL VOLUME"}),width:"20%",dataIndex:"tradedVolume",render:function(e){return(0,Ce.dp)(e,2).display()}},{title:(0,E.jsx)(l._H,{id:"referrals.tradersReferred",defaultMessage:"TRADERS REFERRED"}),width:"30%",dataIndex:"tradersReferred"},{title:(0,E.jsx)(l._H,{id:"referrals.totalRebates",defaultMessage:"TOTAL REBATES"}),width:"30%",dataIndex:"totalRebates",render:function(e){return(0,Ce.dp)(e,0).display({prefix:""})}}];return(0,E.jsxs)("div",{className:Ue,children:[(0,E.jsxs)("div",{className:ze,children:[(0,E.jsx)("div",{children:(0,E.jsx)(l._H,{id:"referrals",defaultMessage:"Referral Codes"})}),(0,E.jsx)("span",{onClick:r,children:"+ Create"})]}),(0,E.jsx)(Ie.ZP,{emptyText:"",className:Ve,columns:x,data:t}),!t.length&&(0,E.jsx)(Oe,{text:(0,E.jsx)(l._H,{id:"referrals.noCodes",defaultMessage:"No referral codes yet."})}),t.length?(0,E.jsx)(Ze.Z,{data:t,pageIndex:u,setPageIndex:f,_data:t}):(0,E.jsx)(E.Fragment,{})]})},Ge=r(65146),$e="table___uTK_k",Be="tableWrapper___zm2jx",We="tableTitle___LYLxw",Ye="href___CDzVy",qe=function(e){var t=e.data,r=(0,i.useState)(Re.Q),a=d()(r,2),n=a[0],s=a[1],c=(0,J.x)().chainId,o=[{title:(0,E.jsx)(l._H,{id:"referrals.table.date",defaultMessage:"DATE"}),width:"20%",dataIndex:"tradeTime",render:function(e){return(0,Ge.m)(e)}},{title:(0,E.jsx)(l._H,{id:"referrals.table.amount",defaultMessage:"AMOUNT"}),width:"20%",dataIndex:"amount",render:function(e){return(0,Ce.dp)(e,2).display()}},{title:(0,E.jsx)(l._H,{id:"referrals.table.transaction",defaultMessage:"TRANSACTION"}),width:"60%",dataIndex:"txHash",render:function(e){return(0,E.jsx)("a",{className:Ye,href:(0,v.jY)(c)+"tx/"+e,target:"_blank",rel:"noopener noreferrer",children:(0,E.jsx)("span",{children:e})})}}];return(0,E.jsxs)("div",{className:Be,children:[(0,E.jsx)("div",{className:We,children:(0,E.jsx)(l._H,{id:"referrals.table.title",defaultMessage:"Rewards Distribution History"})}),(0,E.jsx)(Ie.ZP,{emptyText:"",className:$e,columns:o,data:t}),t&&!t.length&&(0,E.jsx)(Oe,{text:"No rewards distribution history yet."}),t&&t.length?(0,E.jsx)(Ze.Z,{data:t,pageIndex:n,setPageIndex:s,_data:t}):(0,E.jsx)(E.Fragment,{})]})},Je="statInfo___ndwXM",Ke="title___RzQgC",Xe="amount___N0iJf",et="desc___Tdo6V",tt=function(e){var t=e.title,r=e.desc,a=e.amount,n=e.text;return(0,E.jsxs)("div",{className:Je,children:[(0,E.jsx)("div",{className:Ke,children:"string"==typeof t?(0,E.jsx)(l._H,{id:t}):t}),a?(0,E.jsxs)("div",{className:Xe,children:["".concat(a)," "]}):(0,E.jsx)(E.Fragment,{}),n?(0,E.jsxs)("div",{className:Xe,children:[n," "]}):(0,E.jsx)(E.Fragment,{}),(0,E.jsxs)("div",{className:et,children:["string"==typeof r?(0,E.jsx)(l._H,{id:r}):r," "]})]})},rt={list:"list___lZ21x",mdl:"mdl___PUyWV"},at=r(71909),nt=r(81856),st={overlay:"overlay___XNM6b",text:"text___VqU3j",questionIcon:"questionIcon___dFiP1"},it=function(e){var t=e.text,r=e.tipTitle,a=e.tipText,n=e.tipPlace,s=void 0===n?"top":n;return(0,E.jsxs)("div",{className:st.text,children:[(0,E.jsx)(l._H,{id:t}),(0,E.jsx)(at.Z,{placement:s,overlayStyle:{minWidth:320},overlay:(0,E.jsx)("div",{className:st.overlay,children:(0,E.jsxs)("div",{className:st.label,children:[(0,E.jsx)("span",{className:st.title,children:(0,E.jsx)(l._H,{id:r})}),(0,E.jsx)("div",{children:(0,E.jsx)(l._H,{id:a})})]})}),children:(0,E.jsx)("div",{className:st.questionIcon,children:(0,E.jsx)(nt.r,{})})})]})},lt=function(e){var t=e.data,r=e.successCb,a=(0,i.useState)(!1),n=d()(a,2),s=n[0],l=n[1],c=t.referralsSummaries,o=t.referralsDetails,u=t.referralsHistory,f=void 0===u?[]:u;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("div",{className:rt.list,children:[s&&(0,E.jsx)(Te.Z,{className:rt.mdl,visible:s,onClose:function(){return l(!1)},title:"Generate Referral Code",children:(0,E.jsx)(Me,{isModal:!0,successCb:function(){r(),l(!1)}})}),(0,E.jsx)(tt,{title:(0,E.jsx)(it,{text:"Total Trading Volume",tipText:"Volume traded by this account with an active referral code.",tipTitle:"Total Trading Volume",tipPlace:"top"}),amount:(0,Ce.dp)(null==c?void 0:c.tradedVolume,2).display(),desc:"+$0.00 in the last week"}),(0,E.jsx)(tt,{title:(0,E.jsx)(it,{text:"Total Traders Referred",tipTitle:"Total Traders Referred",tipText:"Rebates earned by this account as a trader.",tipPlace:"top"}),text:c.totalTradersReferred||"-",desc:"+$0.00 in the last week"}),(0,E.jsx)(tt,{title:(0,E.jsx)(it,{text:"Total Rebates",tipTitle:"Total Rebates",tipText:"Rebates earned by this account as a trader.",tipPlace:"top"}),amount:c.totalRebates||"-",desc:"Tier 1 (5% rebate)"})]}),(0,E.jsx)(Fe,{data:o,openMdl:function(){return l(!0)}}),!!f.length&&(0,E.jsx)(qe,{data:f})]})},ct=r(13341),dt=function(e){var t=e.code,r=e.data,a=e.successCb,n=(0,i.useState)(!1),s=d()(n,2),l=s[0],c=s[1],o=r.traderHistory,u=void 0===o?[]:o,f=r.traderSummary,x=function(){return c(!0)};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("div",{className:rt.list,children:[l&&(0,E.jsx)(Te.Z,{className:rt.mdl,visible:l,onClose:function(){return c(!1)},title:"Edit Referral Code",children:(0,E.jsx)("div",{className:rt.wrapper,children:(0,E.jsx)(he,{btnText:"Edit Refferal code",type:"edit",successCb:function(){a(),c(!1)},code:t})})}),(0,E.jsx)(tt,{title:(0,E.jsx)(it,{text:"Total Trading Volume",tipText:"Volume traded by this account with an active referral code.",tipTitle:"Total Trading Volume",tipPlace:"top"}),amount:(0,Ce.dp)(null==f?void 0:f.tradedVolume,2).display(),desc:"+$0.00 in the last week"}),(0,E.jsx)(tt,{title:(0,E.jsx)(it,{text:"Total Rebates",tipTitle:"Total Rebates",tipText:"Rebates earned by this account as a trader.",tipPlace:"top"}),text:(null==f?void 0:f.totalRebates)||"-",desc:"+$0.00 in the last week"}),(0,E.jsx)(tt,{title:"Active Referral Code",text:function(e){return(0,E.jsxs)("div",{className:rt.codeEditor,children:[e,(0,E.jsx)(ct.$iz,{style:{cursor:"pointer"},size:"16",onClick:x})]})}(t),desc:(0,E.jsx)(it,{text:"Tier 1 (5% discount)",tipText:"You will receive a 5% discount on your opening and closing fees, this discount will be airdropped to your account every Wednesday.",tipTitle:"Tier 1",tipPlace:"top"})})]}),(0,E.jsx)(qe,{data:u})]})},ot=function(){var e,t=(0,n.Ge)(),r=t.chainId,a=t.account,c=(0,m.eI)(r,a),d=c.userHasReferrerCode,o=(c.userReferrerCode,c.userReferrerCodeString),u=w(),f=u.data,x=u.loading,p=u.reloadKey,h=u.setReloadKey,v=function(){setTimeout((function(){return h(p+1)}),3e3)},j=[{children:(0,i.useMemo)((function(){return x?(0,E.jsx)("div",{className:F,children:(0,E.jsx)(s.Z,{})}):d&&a?(0,E.jsx)(dt,{code:o,data:f||{},successCb:v},o):(0,E.jsx)("div",{className:Q,children:(0,E.jsx)(he,{btnText:"Enter Referral code",type:"add",successCb:v})})}),[d,x,f,a,p])},{children:(0,i.useMemo)((function(){var e;return x?(0,E.jsx)("div",{className:F,children:(0,E.jsx)(s.Z,{})}):null!=f&&null!==(e=f.referralsDetails)&&void 0!==e&&e.length&&a?(0,E.jsx)(lt,{data:f,successCb:v},p):(0,E.jsx)(Me,{successCb:v})}),[f,null==f||null===(e=f.referralsDetails)||void 0===e?void 0:e.length,a,p,x])}];return(0,E.jsxs)("div",{className:O,children:[(0,E.jsxs)("div",{className:Z,children:[(0,E.jsx)("div",{className:P,children:(0,E.jsx)(l._H,{id:"Referrals"})}),(0,E.jsx)("div",{className:V,children:(0,E.jsx)(l._H,{id:"ReferralsSubTitle"})})]}),(0,E.jsx)(k,{tabs:[{label:"Traders"},{label:"Referrals"}],panels:j}),(0,E.jsxs)("div",{className:L,children:[(0,E.jsx)("div",{className:U,children:(0,E.jsx)(l._H,{id:"referrals.question"})}),(0,E.jsxs)("p",{className:z,children:[(0,E.jsx)(l._H,{id:"referrals.answer1"}),(0,E.jsx)("br",{}),(0,E.jsx)(l._H,{id:"referrals.answer2"})]}),(0,E.jsx)(N.Z,{type:"border",href:"#",children:(0,E.jsx)(l._H,{id:"learnMore"})})]})]})}},97016:function(e,t,r){r.d(t,{I:function(){return a},Q:function(){return n}});var a=20,n=1},63934:function(e,t,r){r.d(t,{r:function(){return d}});var a=r(93236),n=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const d=e=>a.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M17.25 8.5h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.25v-7a1.75 1.75 0 0 0-1.75-1.75Z",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M15.5 8.5V6.75A1.75 1.75 0 0 0 13.75 5h-7A1.75 1.75 0 0 0 5 6.75v7a1.75 1.75 0 0 0 1.75 1.75H8.5",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))},94972:function(e,t,r){r.d(t,{r:function(){return d}});var a=r(93236),n=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const d=e=>a.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e})({width:80,height:80,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{opacity:.12,fillRule:"evenodd",clipRule:"evenodd",d:"M66.668 46.667c0-18.41-14.924-33.334-33.333-33.334v5c15.648 0 28.333 12.686 28.333 28.334h5Zm-8.324 0c0-13.808-11.193-25-25-25h-.01v5.166h.012c10.954 0 19.833 8.88 19.833 19.834h5.165Zm-7.332 17.677a24.926 24.926 0 0 0 7.144-14.677H52.94a19.78 19.78 0 0 1-5.583 11.023l3.654 3.654ZM15.656 28.99a24.927 24.927 0 0 1 14.678-7.144v5.213a19.78 19.78 0 0 0-11.025 5.584l-3.653-3.653Zm17.679 34.344C42.539 63.333 50 55.871 50 46.667 50.002 37.462 42.54 30 33.335 30c-9.205 0-16.667 7.462-16.667 16.667h5C21.668 40.223 26.891 35 33.335 35 39.778 35 45 40.223 45 46.667c0 6.443-5.223 11.666-11.666 11.666v5Z",fill:"url(#default_svg__a)"}),a.createElement("rect",{x:1,y:1,width:78,height:78,rx:39,stroke:"url(#default_svg__b)",strokeOpacity:.12,strokeWidth:2}),a.createElement("defs",null,a.createElement("linearGradient",{id:"default_svg__a",x1:15.656,y1:13.333,x2:78.101,y2:30.645,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#3CEAAA"}),a.createElement("stop",{offset:.771,stopColor:"#5C72FF"})),a.createElement("linearGradient",{id:"default_svg__b",x1:0,y1:0,x2:97.93,y2:27.149,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#3CEAAA"}),a.createElement("stop",{offset:.771,stopColor:"#5C72FF"}))))},81856:function(e,t,r){r.d(t,{r:function(){return d}});var a=r(93236),n=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const d=e=>a.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e})({width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.7-9V4.6H7.3V6h1.4Zm0 6V7.467H7.3V12h1.4Z",fill:"#797B96"}))},65682:function(e,t,r){r.d(t,{r:function(){return d}});var a=r(93236),n=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const d=e=>a.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M20.625 7.064a7.087 7.087 0 0 1-2.032.557 3.548 3.548 0 0 0 1.556-1.959 7.065 7.065 0 0 1-2.248.859 3.54 3.54 0 0 0-6.03 3.229A10.05 10.05 0 0 1 4.576 6.05a3.537 3.537 0 0 0-.06 3.45 3.54 3.54 0 0 0 1.156 1.276 3.53 3.53 0 0 1-1.603-.443v.045a3.54 3.54 0 0 0 2.839 3.47 3.566 3.566 0 0 1-1.599.062 3.54 3.54 0 0 0 3.306 2.457 7.102 7.102 0 0 1-5.24 1.466 10.01 10.01 0 0 0 5.424 1.59c6.511 0 10.07-5.393 10.07-10.07 0-.151-.003-.305-.01-.457.692-.5 1.29-1.12 1.764-1.83l.002-.003Z",fill:"#9597B5"}));t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjYyNSA3LjA2NGE3LjA4NyA3LjA4NyAwIDAgMS0yLjAzMi41NTcgMy41NDggMy41NDggMCAwIDAgMS41NTYtMS45NTkgNy4wNjUgNy4wNjUgMCAwIDEtMi4yNDguODU5IDMuNTQgMy41NCAwIDAgMC02LjAzIDMuMjI5QTEwLjA1IDEwLjA1IDAgMCAxIDQuNTc2IDYuMDVhMy41MzcgMy41MzcgMCAwIDAtLjA2IDMuNDUgMy41NCAzLjU0IDAgMCAwIDEuMTU2IDEuMjc2IDMuNTMgMy41MyAwIDAgMS0xLjYwMy0uNDQzdi4wNDVhMy41NCAzLjU0IDAgMCAwIDIuODM5IDMuNDcgMy41NjYgMy41NjYgMCAwIDEtMS41OTkuMDYyIDMuNTQgMy41NCAwIDAgMCAzLjMwNiAyLjQ1NyA3LjEwMiA3LjEwMiAwIDAgMS01LjI0IDEuNDY2IDEwLjAxIDEwLjAxIDAgMCAwIDUuNDI0IDEuNTljNi41MTEgMCAxMC4wNy01LjM5MyAxMC4wNy0xMC4wNyAwLS4xNTEtLjAwMy0uMzA1LS4wMS0uNDU3LjY5Mi0uNSAxLjI5LTEuMTIgMS43NjQtMS44M2wuMDAyLS4wMDNaIiBmaWxsPSIjOTU5N0I1Ii8+PC9zdmc+"}}]);