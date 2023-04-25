"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[119],{1234:function(e,t,n){n.d(t,{d:function(){return p},f:function(){return d}});var r=n(93236),o=n(68504),u=n(86512),i=n(28816),l=n(93733),a=n(86036);let s=(0,r.createContext)(null);function c(){let e=(0,r.useContext)(s);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,c),e}return e}function d(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=(0,a.z)((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),o=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(s.Provider,{value:o},e.children)}),[t])]}let f=(0,u.yV)((function(e,t){let n=(0,o.M)(),{id:r=`headlessui-description-${n}`,...a}=e,s=c(),d=(0,l.T)(t);(0,i.e)((()=>s.register(r)),[r,s.register]);let f={ref:d,...s.props,id:r};return(0,u.sY)({ourProps:f,theirProps:a,slot:s.slot||{},defaultTag:"p",name:s.name||"Description"})})),p=Object.assign(f,{})},45464:function(e,t,n){n.d(t,{V:function(){return Te}});var r=n(93236),o=n.t(r,2),u=n(43232),i=n(86512),l=n(93733),a=n(58378),s=n(73178),c=n(68504),d=n(51750),f=n(21242),p=n(30009),m=n(86036),v=n(46197);var h=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(h||{});function g(){let e=(0,r.useRef)(0);return function(e,t,n){let o=(0,v.E)(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}("keydown",(t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)}),!0),e}var E=n(67505),b=n(79337);function w(e,t,n,o){let u=(0,v.E)(n);(0,r.useEffect)((()=>{function n(e){u.current(e)}return(e=null!=e?e:window).addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}),[e,t,o])}var y=n(48558);function T(e,t){let n=(0,r.useRef)([]),o=(0,m.z)(e);(0,r.useEffect)((()=>{let e=[...n.current];for(let[r,u]of t.entries())if(n.current[r]!==u){let r=o(t,e);return n.current=t,r}}),[o,...t])}var O=n(55694);var S=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(S||{});let P=(0,i.yV)((function(e,t){let n=(0,r.useRef)(null),o=(0,l.T)(n,t),{initialFocus:a,containers:s,features:c=30,...v}=e;(0,d.H)()||(c=1);let S=(0,b.i)(n);!function({ownerDocument:e},t){let n=(0,r.useRef)(null);w(null==e?void 0:e.defaultView,"focusout",(e=>{t&&(n.current||(n.current=e.target))}),!0),T((()=>{t||((null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&(0,p.C5)(n.current),n.current=null)}),[t]);let o=(0,r.useRef)(!1);(0,r.useEffect)((()=>(o.current=!1,()=>{o.current=!0,(0,y.Y)((()=>{o.current&&((0,p.C5)(n.current),n.current=null)}))})),[])}({ownerDocument:S},Boolean(16&c));let P=function({ownerDocument:e,container:t,initialFocus:n},o){let u=(0,r.useRef)(null),i=(0,E.t)();return T((()=>{if(!o)return;let r=t.current;r&&(0,y.Y)((()=>{if(!i.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t)return void(u.current=t)}else if(r.contains(t))return void(u.current=t);null!=n&&n.current?(0,p.C5)(n.current):(0,p.jA)(r,p.TO.First)===p.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),u.current=null==e?void 0:e.activeElement}))}),[o]),u}({ownerDocument:S,container:n,initialFocus:a},Boolean(2&c));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let u=(0,E.t)();w(null==e?void 0:e.defaultView,"focus",(e=>{if(!o||!u.current)return;let i=new Set(null==n?void 0:n.current);i.add(t);let l=r.current;if(!l)return;let a=e.target;a&&a instanceof HTMLElement?C(i,a)?(r.current=a,(0,p.C5)(a)):(e.preventDefault(),e.stopPropagation(),(0,p.C5)(l)):(0,p.C5)(r.current)}),!0)}({ownerDocument:S,container:n,containers:s,previousActiveElement:P},Boolean(8&c));let F=g(),A=(0,m.z)((e=>{let t=n.current;t&&(0,u.E)(F.current,{[h.Forwards]:()=>{(0,p.jA)(t,p.TO.First,{skipElements:[e.relatedTarget]})},[h.Backwards]:()=>{(0,p.jA)(t,p.TO.Last,{skipElements:[e.relatedTarget]})}})})),R=(0,O.G)(),L=(0,r.useRef)(!1),M={ref:o,onKeyDown(e){"Tab"==e.key&&(L.current=!0,R.requestAnimationFrame((()=>{L.current=!1})))},onBlur(e){let t=new Set(null==s?void 0:s.current);t.add(n);let r=e.relatedTarget;r instanceof HTMLElement&&"true"!==r.dataset.headlessuiFocusGuard&&(C(t,r)||(L.current?(0,p.jA)(n.current,(0,u.E)(F.current,{[h.Forwards]:()=>p.TO.Next,[h.Backwards]:()=>p.TO.Previous})|p.TO.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&(0,p.C5)(e.target)))}};return r.createElement(r.Fragment,null,Boolean(4&c)&&r.createElement(f._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:A,features:f.A.Focusable}),(0,i.sY)({ourProps:M,theirProps:v,defaultTag:"div",name:"FocusTrap"}),Boolean(4&c)&&r.createElement(f._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:A,features:f.A.Focusable}))})),F=Object.assign(P,{features:S});function C(e,t){var n;for(let r of e)if(null!=(n=r.current)&&n.contains(t))return!0;return!1}var A=n(19103),R=n(28816);let L=(0,r.createContext)(!1);function M(){return(0,r.useContext)(L)}function k(e){return r.createElement(L.Provider,{value:e.force},e.children)}var N=n(28735);let x=r.Fragment;let D=r.Fragment,H=(0,r.createContext)(null);let j=(0,i.yV)((function(e,t){let n=e,o=(0,r.useRef)(null),u=(0,l.T)((0,l.h)((e=>{o.current=e})),t),a=(0,b.i)(o),s=function(e){let t=M(),n=(0,r.useContext)(H),o=(0,b.i)(e),[u,i]=(0,r.useState)((()=>{if(!t&&null!==n||N.O.isServer)return null;let e=null==o?void 0:o.getElementById("headlessui-portal-root");if(e)return e;if(null===o)return null;let r=o.createElement("div");return r.setAttribute("id","headlessui-portal-root"),o.body.appendChild(r)}));return(0,r.useEffect)((()=>{null!==u&&(null!=o&&o.body.contains(u)||null==o||o.body.appendChild(u))}),[u,o]),(0,r.useEffect)((()=>{t||null!==n&&i(n.current)}),[n,i,t]),u}(o),[c]=(0,r.useState)((()=>{var e;return N.O.isServer?null:null!=(e=null==a?void 0:a.createElement("div"))?e:null})),f=(0,d.H)(),p=(0,r.useRef)(!1);return(0,R.e)((()=>{if(p.current=!1,s&&c)return s.contains(c)||(c.setAttribute("data-headlessui-portal",""),s.appendChild(c)),()=>{p.current=!0,(0,y.Y)((()=>{var e;p.current&&(!s||!c||(c instanceof Node&&s.contains(c)&&s.removeChild(c),s.childNodes.length<=0&&(null==(e=s.parentElement)||e.removeChild(s))))}))}}),[s,c]),f&&s&&c?(0,A.createPortal)((0,i.sY)({ourProps:{ref:u},theirProps:n,defaultTag:x,name:"Portal"}),c):null})),I=(0,i.yV)((function(e,t){let{target:n,...o}=e,u={ref:(0,l.T)(t)};return r.createElement(H.Provider,{value:n},(0,i.sY)({ourProps:u,theirProps:o,defaultTag:D,name:"Popover.Group"}))})),Y=Object.assign(j,{Group:I});var V=n(1234),B=n(34205);let z=(0,r.createContext)((()=>{}));z.displayName="StackContext";var U=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(U||{});function $({children:e,onUpdate:t,type:n,element:o,enabled:u}){let i=(0,r.useContext)(z),l=(0,m.z)(((...e)=>{null==t||t(...e),i(...e)}));return(0,R.e)((()=>{let e=void 0===u||!0===u;return e&&l(0,n,o),()=>{e&&l(1,n,o)}}),[l,n,o,u]),r.createElement(z.Provider,{value:l},e)}var _=n(14488);const W="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:q,useEffect:Z,useLayoutEffect:G,useDebugValue:J}=o;function K(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!W(n,e)}catch{return!0}}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;const X=(e=>e.useSyncExternalStore)(o);var Q=n(42764);function ee(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=(null!=(n=t.defaultView)?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,u=e-o;n.style(r,"paddingRight",`${u}px`)}}}function te(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ne(){if(!te())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function o(e){return r.containers.flatMap((e=>e())).some((t=>t.contains(e)))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let u=null;n.addEventListener(t,"click",(e=>{if(e.target instanceof HTMLElement)try{let n=e.target.closest("a");if(!n)return;let{hash:r}=new URL(n.href),i=t.querySelector(r);i&&!o(i)&&(u=i)}catch{}}),!0),n.addEventListener(t,"touchmove",(e=>{e.target instanceof HTMLElement&&!o(e.target)&&e.preventDefault()}),{passive:!1}),n.add((()=>{window.scrollTo(0,window.pageYOffset+e),u&&u.isConnected&&(u.scrollIntoView({block:"nearest"}),u=null)}))}}}function re(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let oe=function(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(e){return r.add(e),()=>r.delete(e)},dispatch(e,...o){let u=t[e].call(n,...o);u&&(n=u,r.forEach((e=>e())))}}}((()=>new Map),{PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:(0,Q.k)(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:re(n)},o=[ne(),ee(),{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];o.forEach((({before:e})=>null==e?void 0:e(r))),o.forEach((({after:e})=>null==e?void 0:e(r)))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});function ue(e,t,n){let r=function(e){return X(e.subscribe,e.getSnapshot,e.getSnapshot)}(oe),o=e?r.get(e):void 0,u=!!o&&o.count>0;return(0,R.e)((()=>{if(e&&t)return oe.dispatch("PUSH",e,n),()=>oe.dispatch("POP",e,n)}),[t,e]),u}oe.subscribe((()=>{let e=oe.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&oe.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&oe.dispatch("TEARDOWN",n)}}));let ie=new Map,le=new Map;function ae(e,t=!0){(0,R.e)((()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let o=null!=(n=le.get(r))?n:0;return le.set(r,o+1),0!==o||(ie.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=le.get(r))?e:1;if(1===t?le.delete(r):le.set(r,t-1),1!==t)return;let n=ie.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,ie.delete(r))}}),[e,t])}var se,ce=((se=ce||{})[se.Open=0]="Open",se[se.Closed=1]="Closed",se),de=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(de||{});let fe={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},pe=(0,r.createContext)(null);function me(e){let t=(0,r.useContext)(pe);if(null===t){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,me),t}return t}function ve(e,t){return(0,u.E)(t.type,fe,e,t)}pe.displayName="DialogContext";let he=i.AN.RenderStrategy|i.AN.Static;let ge=(0,i.yV)((function(e,t){let n=(0,c.M)(),{id:o=`headlessui-dialog-${n}`,open:s,onClose:p,initialFocus:v,__demoMode:h=!1,...g}=e,[E,y]=(0,r.useState)(0),T=(0,B.oJ)();void 0===s&&null!==T&&(s=(T&B.ZM.Open)===B.ZM.Open);let O=(0,r.useRef)(new Set),S=(0,r.useRef)(null),P=(0,l.T)(S,t),C=(0,r.useRef)(null),A=(0,b.i)(S),R=e.hasOwnProperty("open")||null!==T,L=e.hasOwnProperty("onClose");if(!R&&!L)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!R)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!L)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof s)throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s}`);if("function"!=typeof p)throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${p}`);let M=s?0:1,[N,x]=(0,r.useReducer)(ve,{titleId:null,descriptionId:null,panelRef:(0,r.createRef)()}),D=(0,m.z)((()=>p(!1))),H=(0,m.z)((e=>x({type:0,id:e}))),j=!!(0,d.H)()&&(!h&&0===M),I=E>1,z=null!==(0,r.useContext)(pe),W=I?"parent":"leaf",q=null!==T&&(T&B.ZM.Closing)===B.ZM.Closing,Z=!z&&!q&&j,G=(0,r.useCallback)((()=>{var e,t;return null!=(t=Array.from(null!=(e=null==A?void 0:A.querySelectorAll("body > *"))?e:[]).find((e=>"headlessui-portal-root"!==e.id&&(e.contains(C.current)&&e instanceof HTMLElement))))?t:null}),[C]);ae(G,Z);let J=!!I||j,K=(0,r.useCallback)((()=>{var e,t;return null!=(t=Array.from(null!=(e=null==A?void 0:A.querySelectorAll("[data-headlessui-portal]"))?e:[]).find((e=>e.contains(C.current)&&e instanceof HTMLElement)))?t:null}),[C]);ae(K,J);let X=(0,m.z)((()=>{var e,t;return[...Array.from(null!=(e=null==A?void 0:A.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))?e:[]).filter((e=>!(e===document.body||e===document.head||!(e instanceof HTMLElement)||e.contains(C.current)||N.panelRef.current&&e.contains(N.panelRef.current)))),null!=(t=N.panelRef.current)?t:S.current]})),Q=!(!j||I);(0,_.O)((()=>X()),D,Q);let ee=!(I||0!==M);w(null==A?void 0:A.defaultView,"keydown",(e=>{ee&&(e.defaultPrevented||e.key===a.R.Escape&&(e.preventDefault(),e.stopPropagation(),D()))})),function(e,t,n=(()=>[document.body])){ue(e,t,(e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}}))}(A,!(q||0!==M||z),X),(0,r.useEffect)((()=>{if(0!==M||!S.current)return;let e=new ResizeObserver((e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&D()}}));return e.observe(S.current),()=>e.disconnect()}),[M,S,D]);let[te,ne]=(0,V.f)(),re=(0,r.useMemo)((()=>[{dialogState:M,close:D,setTitleId:H},N]),[M,N,D,H]),oe=(0,r.useMemo)((()=>({open:0===M})),[M]),ie={ref:P,id:o,role:"dialog","aria-modal":0===M||void 0,"aria-labelledby":N.titleId,"aria-describedby":te};return r.createElement($,{type:"Dialog",enabled:0===M,element:S,onUpdate:(0,m.z)(((e,t,n)=>{"Dialog"===t&&(0,u.E)(e,{[U.Add](){O.current.add(n),y((e=>e+1))},[U.Remove](){O.current.add(n),y((e=>e-1))}})}))},r.createElement(k,{force:!0},r.createElement(Y,null,r.createElement(pe.Provider,{value:re},r.createElement(Y.Group,{target:S},r.createElement(k,{force:!1},r.createElement(ne,{slot:oe,name:"Dialog.Description"},r.createElement(F,{initialFocus:v,containers:O,features:j?(0,u.E)(W,{parent:F.features.RestoreFocus,leaf:F.features.All&~F.features.FocusLock}):F.features.None},(0,i.sY)({ourProps:ie,theirProps:g,slot:oe,defaultTag:"div",features:he,visible:0===M,name:"Dialog"})))))))),r.createElement(f._,{features:f.A.Hidden,ref:C}))})),Ee=(0,i.yV)((function(e,t){let n=(0,c.M)(),{id:o=`headlessui-dialog-backdrop-${n}`,...u}=e,[{dialogState:a},s]=me("Dialog.Backdrop"),d=(0,l.T)(t);(0,r.useEffect)((()=>{if(null===s.panelRef.current)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")}),[s.panelRef]);let f=(0,r.useMemo)((()=>({open:0===a})),[a]);return r.createElement(k,{force:!0},r.createElement(Y,null,(0,i.sY)({ourProps:{ref:d,id:o,"aria-hidden":!0},theirProps:u,slot:f,defaultTag:"div",name:"Dialog.Backdrop"})))})),be=(0,i.yV)((function(e,t){let n=(0,c.M)(),{id:o=`headlessui-dialog-panel-${n}`,...u}=e,[{dialogState:a},s]=me("Dialog.Panel"),d=(0,l.T)(t,s.panelRef),f=(0,r.useMemo)((()=>({open:0===a})),[a]),p=(0,m.z)((e=>{e.stopPropagation()}));return(0,i.sY)({ourProps:{ref:d,id:o,onClick:p},theirProps:u,slot:f,defaultTag:"div",name:"Dialog.Panel"})})),we=(0,i.yV)((function(e,t){let n=(0,c.M)(),{id:o=`headlessui-dialog-overlay-${n}`,...u}=e,[{dialogState:a,close:d}]=me("Dialog.Overlay"),f=(0,l.T)(t),p=(0,m.z)((e=>{if(e.target===e.currentTarget){if((0,s.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),d()}})),v=(0,r.useMemo)((()=>({open:0===a})),[a]);return(0,i.sY)({ourProps:{ref:f,id:o,"aria-hidden":!0,onClick:p},theirProps:u,slot:v,defaultTag:"div",name:"Dialog.Overlay"})})),ye=(0,i.yV)((function(e,t){let n=(0,c.M)(),{id:o=`headlessui-dialog-title-${n}`,...u}=e,[{dialogState:a,setTitleId:s}]=me("Dialog.Title"),d=(0,l.T)(t);(0,r.useEffect)((()=>(s(o),()=>s(null))),[o,s]);let f=(0,r.useMemo)((()=>({open:0===a})),[a]);return(0,i.sY)({ourProps:{ref:d,id:o},theirProps:u,slot:f,defaultTag:"h2",name:"Dialog.Title"})})),Te=Object.assign(ge,{Backdrop:Ee,Panel:be,Overlay:we,Title:ye,Description:V.d})},58378:function(e,t,n){n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},81788:function(e,t,n){n.d(t,{u:function(){return D}});var r=n(93236),o=n(86512),u=n(34205),i=n(43232),l=n(67505),a=n(28816),s=n(46197),c=n(51750),d=n(93733);var f=n(42764);function p(e,...t){e&&t.length>0&&e.classList.add(...t)}function m(e,...t){e&&t.length>0&&e.classList.remove(...t)}function v(e,t,n,r){let o=n?"enter":"leave",u=(0,f.k)(),l=void 0!==r?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(r):()=>{};"enter"===o&&(e.removeAttribute("hidden"),e.style.display="");let a=(0,i.E)(o,{enter:()=>t.enter,leave:()=>t.leave}),s=(0,i.E)(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=(0,i.E)(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return m(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),p(e,...a,...c),u.nextFrame((()=>{m(e,...c),p(e,...s),function(e,t){let n=(0,f.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[u,i]=[r,o].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t}));if(u+i!==0){let r=n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),r())}))}else t();n.add((()=>t())),n.dispose}(e,(()=>(m(e,...a),p(e,...t.entered),l())))})),u.dispose}var h=n(55694);function g({container:e,direction:t,classes:n,onStart:r,onStop:o}){let u=(0,l.t)(),i=(0,h.G)(),c=(0,s.E)(t);(0,a.e)((()=>{let t=(0,f.k)();i.add(t.dispose);let l=e.current;if(l&&"idle"!==c.current&&u.current)return t.dispose(),r.current(c.current),t.add(v(l,n.current,"enter"===c.current,(()=>{t.dispose(),o.current(c.current)}))),t.dispose}),[t])}var E=n(86036),b=n(63308),w=n(28735);function y(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let T=(0,r.createContext)(null);T.displayName="TransitionContext";var O,S=((O=S||{}).Visible="visible",O.Hidden="hidden",O);let P=(0,r.createContext)(null);function F(e){return"children"in e?F(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function C(e,t){let n=(0,s.E)(e),u=(0,r.useRef)([]),a=(0,l.t)(),c=(0,h.G)(),d=(0,E.z)(((e,t=o.l4.Hidden)=>{let r=u.current.findIndex((({el:t})=>t===e));-1!==r&&((0,i.E)(t,{[o.l4.Unmount](){u.current.splice(r,1)},[o.l4.Hidden](){u.current[r].state="hidden"}}),c.microTask((()=>{var e;!F(u)&&a.current&&(null==(e=n.current)||e.call(n))})))})),f=(0,E.z)((e=>{let t=u.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):u.current.push({el:e,state:"visible"}),()=>d(e,o.l4.Unmount)})),p=(0,r.useRef)([]),m=(0,r.useRef)(Promise.resolve()),v=(0,r.useRef)({enter:[],leave:[],idle:[]}),g=(0,E.z)(((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((([t])=>t!==e))),null==t||t.chains.current[n].push([e,new Promise((e=>{p.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((e=>{Promise.all(v.current[n].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===n?m.current=m.current.then((()=>null==t?void 0:t.wait.current)).then((()=>r(n))):r(n)})),b=(0,E.z)(((e,t,n)=>{Promise.all(v.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=p.current.shift())||e()})).then((()=>n(t)))}));return(0,r.useMemo)((()=>({children:u,register:f,unregister:d,onStart:g,onStop:b,wait:m,chains:v})),[f,d,u,g,b,v,m])}function A(){}P.displayName="NestingContext";let R=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function L(e){var t;let n={};for(let r of R)n[r]=null!=(t=e[r])?t:A;return n}let M=o.AN.RenderStrategy;let k=(0,o.yV)((function(e,t){let{show:n,appear:i=!1,unmount:l,...s}=e,f=(0,r.useRef)(null),p=(0,d.T)(f,t);(0,c.H)();let m=(0,u.oJ)();if(void 0===n&&null!==m&&(n=(m&u.ZM.Open)===u.ZM.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,h]=(0,r.useState)(n?"visible":"hidden"),g=C((()=>{h("hidden")})),[E,b]=(0,r.useState)(!0),w=(0,r.useRef)([n]);(0,a.e)((()=>{!1!==E&&w.current[w.current.length-1]!==n&&(w.current.push(n),b(!1))}),[w,n]);let y=(0,r.useMemo)((()=>({show:n,appear:i,initial:E})),[n,i,E]);(0,r.useEffect)((()=>{if(n)h("visible");else if(F(g)){let e=f.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")}),[n,g]);let O={unmount:l};return r.createElement(P.Provider,{value:g},r.createElement(T.Provider,{value:y},(0,o.sY)({ourProps:{...O,as:r.Fragment,children:r.createElement(N,{ref:p,...O,...s})},theirProps:{},defaultTag:r.Fragment,features:M,visible:"visible"===v,name:"Transition"})))})),N=(0,o.yV)((function(e,t){let{beforeEnter:n,afterEnter:l,beforeLeave:a,afterLeave:f,enter:p,enterFrom:m,enterTo:v,entered:h,leave:O,leaveFrom:S,leaveTo:A,...R}=e,k=(0,r.useRef)(null),N=(0,d.T)(k,t),x=R.unmount?o.l4.Unmount:o.l4.Hidden,{show:D,appear:H,initial:j}=function(){let e=(0,r.useContext)(T);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[I,Y]=(0,r.useState)(D?"visible":"hidden"),V=function(){let e=(0,r.useContext)(P);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:B,unregister:z}=V,U=(0,r.useRef)(null);(0,r.useEffect)((()=>B(k)),[B,k]),(0,r.useEffect)((()=>{if(x===o.l4.Hidden&&k.current)return D&&"visible"!==I?void Y("visible"):(0,i.E)(I,{hidden:()=>z(k),visible:()=>B(k)})}),[I,k,B,z,D,x]);let $=(0,s.E)({enter:y(p),enterFrom:y(m),enterTo:y(v),entered:y(h),leave:y(O),leaveFrom:y(S),leaveTo:y(A)}),_=function(e){let t=(0,r.useRef)(L(e));return(0,r.useEffect)((()=>{t.current=L(e)}),[e]),t}({beforeEnter:n,afterEnter:l,beforeLeave:a,afterLeave:f}),W=(0,c.H)();(0,r.useEffect)((()=>{if(W&&"visible"===I&&null===k.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[k,I,W]);let q=j&&!H,Z=!W||q||U.current===D?"idle":D?"enter":"leave",G=function(e=0){let[t,n]=(0,r.useState)(e),o=(0,r.useCallback)((e=>n((t=>t|e))),[t]),u=(0,r.useCallback)((e=>Boolean(t&e)),[t]),i=(0,r.useCallback)((e=>n((t=>t&~e))),[n]),l=(0,r.useCallback)((e=>n((t=>t^e))),[n]);return{flags:t,addFlag:o,hasFlag:u,removeFlag:i,toggleFlag:l}}(0),J=(0,E.z)((e=>(0,i.E)(e,{enter:()=>{G.addFlag(u.ZM.Opening),_.current.beforeEnter()},leave:()=>{G.addFlag(u.ZM.Closing),_.current.beforeLeave()},idle:()=>{}}))),K=(0,E.z)((e=>(0,i.E)(e,{enter:()=>{G.removeFlag(u.ZM.Opening),_.current.afterEnter()},leave:()=>{G.removeFlag(u.ZM.Closing),_.current.afterLeave()},idle:()=>{}}))),X=C((()=>{Y("hidden"),z(k)}),V);g({container:k,classes:$,direction:Z,onStart:(0,s.E)((e=>{X.onStart(k,e,J)})),onStop:(0,s.E)((e=>{X.onStop(k,e,K),"leave"===e&&!F(X)&&(Y("hidden"),z(k))}))}),(0,r.useEffect)((()=>{q&&(x===o.l4.Hidden?U.current=null:U.current=D)}),[D,q,I]);let Q=R,ee={ref:N};return H&&D&&w.O.isServer&&(Q={...Q,className:(0,b.A)(R.className,...$.current.enter,...$.current.enterFrom)}),r.createElement(P.Provider,{value:X},r.createElement(u.up,{value:(0,i.E)(I,{visible:u.ZM.Open,hidden:u.ZM.Closed})|G.flags},(0,o.sY)({ourProps:ee,theirProps:Q,defaultTag:"div",features:M,visible:"visible"===I,name:"Transition.Child"})))})),x=(0,o.yV)((function(e,t){let n=null!==(0,r.useContext)(T),o=null!==(0,u.oJ)();return r.createElement(r.Fragment,null,!n&&o?r.createElement(k,{ref:t,...e}):r.createElement(N,{ref:t,...e}))})),D=Object.assign(k,{Child:x,Root:k})},55694:function(e,t,n){n.d(t,{G:function(){return u}});var r=n(93236),o=n(42764);function u(){let[e]=(0,r.useState)(o.k);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}},86036:function(e,t,n){n.d(t,{z:function(){return u}});var r=n(93236),o=n(46197);let u=function(e){let t=(0,o.E)(e);return r.useCallback(((...e)=>t.current(...e)),[t])}},68504:function(e,t,n){n.d(t,{M:function(){return a}});var r,o=n(93236),u=n(28816),i=n(51750),l=n(28735);let a=null!=(r=o.useId)?r:function(){let e=(0,i.H)(),[t,n]=o.useState(e?()=>l.O.nextId():null);return(0,u.e)((()=>{null===t&&n(l.O.nextId())}),[t]),null!=t?""+t:void 0}},67505:function(e,t,n){n.d(t,{t:function(){return u}});var r=n(93236),o=n(28816);function u(){let e=(0,r.useRef)(!1);return(0,o.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},28816:function(e,t,n){n.d(t,{e:function(){return u}});var r=n(93236),o=n(28735);let u=(e,t)=>{o.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},46197:function(e,t,n){n.d(t,{E:function(){return u}});var r=n(93236),o=n(28816);function u(e){let t=(0,r.useRef)(e);return(0,o.e)((()=>{t.current=e}),[e]),t}},14488:function(e,t,n){n.d(t,{O:function(){return l}});var r=n(93236),o=n(30009),u=n(46197);function i(e,t,n){let o=(0,u.E)(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}function l(e,t,n=!0){let u=(0,r.useRef)(!1);function l(n,r){if(!u.current||n.defaultPrevented)return;let i=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),l=r(n);if(null!==l&&l.getRootNode().contains(l)){for(let e of i){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(l)||n.composed&&n.composedPath().includes(t))return}return!(0,o.sP)(l,o.tJ.Loose)&&-1!==l.tabIndex&&n.preventDefault(),t(n,l)}}(0,r.useEffect)((()=>{requestAnimationFrame((()=>{u.current=n}))}),[n]);let a=(0,r.useRef)(null);i("mousedown",(e=>{var t,n;u.current&&(a.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),i("click",(e=>{a.current&&(l(e,(()=>a.current)),a.current=null)}),!0),i("blur",(e=>l(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}},79337:function(e,t,n){n.d(t,{i:function(){return u}});var r=n(93236),o=n(80686);function u(...e){return(0,r.useMemo)((()=>(0,o.r)(...e)),[...e])}},51750:function(e,t,n){n.d(t,{H:function(){return u}});var r=n(93236),o=n(28735);function u(){let[e,t]=(0,r.useState)(o.O.isHandoffComplete);return e&&!1===o.O.isHandoffComplete&&t(!1),(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>o.O.handoff()),[]),e}},93733:function(e,t,n){n.d(t,{T:function(){return l},h:function(){return i}});var r=n(93236),o=n(86036);let u=Symbol();function i(e,t=!0){return Object.assign(e,{[u]:t})}function l(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,o.z)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[u])))?void 0:n}},21242:function(e,t,n){n.d(t,{A:function(){return u},_:function(){return i}});var r=n(86512);var o,u=((o=u||{})[o.None=1]="None",o[o.Focusable=2]="Focusable",o[o.Hidden=4]="Hidden",o);let i=(0,r.yV)((function(e,t){let{features:n=1,...o}=e,u={ref:t,"aria-hidden":2==(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}};return(0,r.sY)({ourProps:u,theirProps:o,slot:{},defaultTag:"div",name:"Hidden"})}))},34205:function(e,t,n){n.d(t,{ZM:function(){return i},oJ:function(){return l},up:function(){return a}});var r=n(93236);let o=(0,r.createContext)(null);o.displayName="OpenClosedContext";var u,i=((u=i||{})[u.Open=1]="Open",u[u.Closed=2]="Closed",u[u.Closing=4]="Closing",u[u.Opening=8]="Opening",u);function l(){return(0,r.useContext)(o)}function a({value:e,children:t}){return r.createElement(o.Provider,{value:e},t)}},73178:function(e,t,n){function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},63308:function(e,t,n){function r(...e){return e.filter(Boolean).join(" ")}n.d(t,{A:function(){return r}})},42764:function(e,t,n){n.d(t,{k:function(){return o}});var r=n(48558);function o(){let e=[],t={addEventListener(e,n,r,o){return e.addEventListener(n,r,o),t.add((()=>e.removeEventListener(n,r,o)))},requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame(...e){return t.requestAnimationFrame((()=>t.requestAnimationFrame(...e)))},setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return(0,r.Y)((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},add(t){return e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[t]=e.splice(n,1);t()}}},dispose(){for(let t of e.splice(0))t()},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:r})}))}};return t}},28735:function(e,t,n){n.d(t,{O:function(){return u}});var r=Object.defineProperty,o=(e,t,n)=>(((e,t,n)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let u=new class{constructor(){o(this,"current",this.detect()),o(this,"handoffState","pending"),o(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},30009:function(e,t,n){n.d(t,{C5:function(){return g},EO:function(){return w},TO:function(){return c},fE:function(){return d},jA:function(){return y},sP:function(){return v},tJ:function(){return m},wI:function(){return h},z2:function(){return b}});var r=n(42764),o=n(43232),u=n(80686);let i=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var l,a,s,c=((s=c||{})[s.First=1]="First",s[s.Previous=2]="Previous",s[s.Next=4]="Next",s[s.Last=8]="Last",s[s.WrapAround=16]="WrapAround",s[s.NoScroll=32]="NoScroll",s),d=((a=d||{})[a.Error=0]="Error",a[a.Overflow=1]="Overflow",a[a.Success=2]="Success",a[a.Underflow=3]="Underflow",a),f=((l=f||{})[l.Previous=-1]="Previous",l[l.Next=1]="Next",l);function p(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(i)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var m=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(m||{});function v(e,t=0){var n;return e!==(null==(n=(0,u.r)(e))?void 0:n.body)&&(0,o.E)(t,{0(){return e.matches(i)},1(){let t=e;for(;null!==t;){if(t.matches(i))return!0;t=t.parentElement}return!1}})}function h(e){let t=(0,u.r)(e);(0,r.k)().nextFrame((()=>{t&&!v(t.activeElement,0)&&g(e)}))}function g(e){null==e||e.focus({preventScroll:!0})}let E=["textarea","input"].join(",");function b(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let u=r.compareDocumentPosition(o);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function w(e,t){return y(p(),t,{relativeTo:e})}function y(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?b(e):e:p(e);o.length>0&&i.length>1&&(i=i.filter((e=>!o.includes(e)))),r=null!=r?r:u.activeElement;let l,a=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,i.indexOf(r))-1;if(4&t)return Math.max(0,i.indexOf(r))+1;if(8&t)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=32&t?{preventScroll:!0}:{},d=0,f=i.length;do{if(d>=f||d+f<=0)return 0;let e=s+d;if(16&t)e=(e+f)%f;else{if(e<0)return 3;if(e>=f)return 1}l=i[e],null==l||l.focus(c),d+=a}while(l!==u.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,E))&&n}(l)&&l.select(),l.hasAttribute("tabindex")||l.setAttribute("tabindex","0"),2}},43232:function(e,t,n){function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:function(){return r}})},48558:function(e,t,n){function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}n.d(t,{Y:function(){return r}})},80686:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(28735);function o(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},86512:function(e,t,n){n.d(t,{AN:function(){return a},l4:function(){return s},oA:function(){return m},sY:function(){return c},yV:function(){return p}});var r,o,u=n(93236),i=n(63308),l=n(43232),a=((o=a||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),s=((r=s||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:u=!0,name:i}){let a=f(t,e);if(u)return d(a,n,r,i);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=a;if(e)return d(t,n,r,i)}if(1&s){let{unmount:e=!0,...t}=a;return(0,l.E)(e?0:1,{0(){return null},1(){return d({...t,hidden:!0,style:{display:"none"}},n,r,i)}})}return d(a,n,r,i)}function d(e,t={},n,r){var o;let{as:l=n,children:a,refName:s="ref",...c}=v(e,["unmount","static"]),d=void 0!==e.ref?{[s]:e.ref}:{},p="function"==typeof a?a(t):a;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(t));let h={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(h["data-headlessui-state"]=n.join(" "))}if(l===u.Fragment&&Object.keys(m(c)).length>0){if(!(0,u.isValidElement)(p)||Array.isArray(p)&&p.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=(0,i.A)(null==(o=p.props)?void 0:o.className,c.className),t=e?{className:e}:{};return(0,u.cloneElement)(p,Object.assign({},f(p.props,m(v(c,["ref"]))),h,d,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(p.ref,d.ref),t))}return(0,u.createElement)(l,Object.assign({},v(c,["ref"]),l!==u.Fragment&&d,l!==u.Fragment&&h),p)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let e in n)Object.assign(t,{[e](t,...r){let o=n[e];for(let e of o){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;e(t,...r)}}});return t}function p(e){var t;return Object.assign((0,u.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function m(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function v(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}}]);