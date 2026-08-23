const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DarelogRoom-DB2EacAQ.js","./TalkRoom-CU6sh8mQ.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Eu={exports:{}},rl={},zu={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Do=Symbol.for("react.element"),ep=Symbol.for("react.portal"),tp=Symbol.for("react.fragment"),np=Symbol.for("react.strict_mode"),rp=Symbol.for("react.profiler"),op=Symbol.for("react.provider"),ip=Symbol.for("react.context"),lp=Symbol.for("react.forward_ref"),sp=Symbol.for("react.suspense"),ap=Symbol.for("react.memo"),cp=Symbol.for("react.lazy"),nc=Symbol.iterator;function up(e){return e===null||typeof e!="object"?null:(e=nc&&e[nc]||e["@@iterator"],typeof e=="function"?e:null)}var _u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Du=Object.assign,Lu={};function _r(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||_u}_r.prototype.isReactComponent={};_r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tu(){}Tu.prototype=_r.prototype;function ra(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||_u}var oa=ra.prototype=new Tu;oa.constructor=ra;Du(oa,_r.prototype);oa.isPureReactComponent=!0;var rc=Array.isArray,Pu=Object.prototype.hasOwnProperty,ia={current:null},Mu={key:!0,ref:!0,__self:!0,__source:!0};function Ou(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Pu.call(t,r)&&!Mu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),h=0;h<a;h++)c[h]=arguments[h+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Do,type:e,key:i,ref:l,props:o,_owner:ia.current}}function dp(e,t){return{$$typeof:Do,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function la(e){return typeof e=="object"&&e!==null&&e.$$typeof===Do}function fp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var oc=/\/+/g;function Cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fp(""+e.key):t.toString(36)}function hi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Do:case ep:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Cl(l,0):r,rc(o)?(n="",e!=null&&(n=e.replace(oc,"$&/")+"/"),hi(o,t,n,"",function(h){return h})):o!=null&&(la(o)&&(o=dp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(oc,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",rc(e))for(var a=0;a<e.length;a++){i=e[a];var c=r+Cl(i,a);l+=hi(i,t,n,c,o)}else if(c=up(e),typeof c=="function")for(e=c.call(e),a=0;!(i=e.next()).done;)i=i.value,c=r+Cl(i,a++),l+=hi(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Yo(e,t,n){if(e==null)return e;var r=[],o=0;return hi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function pp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},mi={transition:null},hp={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:mi,ReactCurrentOwner:ia};function Ru(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:Yo,forEach:function(e,t,n){Yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yo(e,function(){t++}),t},toArray:function(e){return Yo(e,function(t){return t})||[]},only:function(e){if(!la(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=_r;X.Fragment=tp;X.Profiler=rp;X.PureComponent=ra;X.StrictMode=np;X.Suspense=sp;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hp;X.act=Ru;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Du({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ia.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Pu.call(t,c)&&!Mu.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var h=0;h<c;h++)a[h]=arguments[h+2];r.children=a}return{$$typeof:Do,type:e.type,key:o,ref:i,props:r,_owner:l}};X.createContext=function(e){return e={$$typeof:ip,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:op,_context:e},e.Consumer=e};X.createElement=Ou;X.createFactory=function(e){var t=Ou.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:lp,render:e}};X.isValidElement=la;X.lazy=function(e){return{$$typeof:cp,_payload:{_status:-1,_result:e},_init:pp}};X.memo=function(e,t){return{$$typeof:ap,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=mi.transition;mi.transition={};try{e()}finally{mi.transition=t}};X.unstable_act=Ru;X.useCallback=function(e,t){return Ye.current.useCallback(e,t)};X.useContext=function(e){return Ye.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};X.useEffect=function(e,t){return Ye.current.useEffect(e,t)};X.useId=function(){return Ye.current.useId()};X.useImperativeHandle=function(e,t,n){return Ye.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Ye.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Ye.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Ye.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Ye.current.useReducer(e,t,n)};X.useRef=function(e){return Ye.current.useRef(e)};X.useState=function(e){return Ye.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Ye.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Ye.current.useTransition()};X.version="18.3.1";zu.exports=X;var C=zu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp=C,gp=Symbol.for("react.element"),xp=Symbol.for("react.fragment"),yp=Object.prototype.hasOwnProperty,vp=mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wp={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)yp.call(t,r)&&!wp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:gp,type:e,key:i,ref:l,props:o,_owner:vp.current}}rl.Fragment=xp;rl.jsx=$u;rl.jsxs=$u;Eu.exports=rl;var s=Eu.exports,Iu={exports:{}},ht={},Au={exports:{}},Fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,H){var V=M.length;M.push(H);e:for(;0<V;){var ee=V-1>>>1,ae=M[ee];if(0<o(ae,H))M[ee]=H,M[V]=ae,V=ee;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var H=M[0],V=M.pop();if(V!==H){M[0]=V;e:for(var ee=0,ae=M.length,st=ae>>>1;ee<st;){var Je=2*(ee+1)-1,ie=M[Je],ce=Je+1,Ue=M[ce];if(0>o(ie,V))ce<ae&&0>o(Ue,ie)?(M[ee]=Ue,M[ce]=V,ee=ce):(M[ee]=ie,M[Je]=V,ee=Je);else if(ce<ae&&0>o(Ue,V))M[ee]=Ue,M[ce]=V,ee=ce;else break e}}return H}function o(M,H){var V=M.sortIndex-H.sortIndex;return V!==0?V:M.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var c=[],h=[],p=1,m=null,f=3,w=!1,b=!1,k=!1,L=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(M){for(var H=n(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=M)r(h),H.sortIndex=H.expirationTime,t(c,H);else break;H=n(h)}}function v(M){if(k=!1,u(M),!b)if(n(c)!==null)b=!0,gt(j);else{var H=n(h);H!==null&&Ge(v,H.startTime-M)}}function j(M,H){b=!1,k&&(k=!1,g(T),T=-1),w=!0;var V=f;try{for(u(H),m=n(c);m!==null&&(!(m.expirationTime>H)||M&&!G());){var ee=m.callback;if(typeof ee=="function"){m.callback=null,f=m.priorityLevel;var ae=ee(m.expirationTime<=H);H=e.unstable_now(),typeof ae=="function"?m.callback=ae:m===n(c)&&r(c),u(H)}else r(c);m=n(c)}if(m!==null)var st=!0;else{var Je=n(h);Je!==null&&Ge(v,Je.startTime-H),st=!1}return st}finally{m=null,f=V,w=!1}}var z=!1,D=null,T=-1,F=5,A=-1;function G(){return!(e.unstable_now()-A<F)}function ye(){if(D!==null){var M=e.unstable_now();A=M;var H=!0;try{H=D(!0,M)}finally{H?we():(z=!1,D=null)}}else z=!1}var we;if(typeof d=="function")we=function(){d(ye)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,on=Ne.port2;Ne.port1.onmessage=ye,we=function(){on.postMessage(null)}}else we=function(){L(ye,0)};function gt(M){D=M,z||(z=!0,we())}function Ge(M,H){T=L(function(){M(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){b||w||(b=!0,gt(j))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(M){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var V=f;f=H;try{return M()}finally{f=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,H){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var V=f;f=M;try{return H()}finally{f=V}},e.unstable_scheduleCallback=function(M,H,V){var ee=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ee+V:ee):V=ee,M){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=V+ae,M={id:p++,callback:H,priorityLevel:M,startTime:V,expirationTime:ae,sortIndex:-1},V>ee?(M.sortIndex=V,t(h,M),n(c)===null&&M===n(h)&&(k?(g(T),T=-1):k=!0,Ge(v,V-ee))):(M.sortIndex=ae,t(c,M),b||w||(b=!0,gt(j))),M},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(M){var H=f;return function(){var V=f;f=H;try{return M.apply(this,arguments)}finally{f=V}}}})(Fu);Au.exports=Fu;var kp=Au.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp=C,pt=kp;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bu=new Set,uo={};function Gn(e,t){br(e,t),br(e+"Capture",t)}function br(e,t){for(uo[e]=t,e=0;e<t.length;e++)Bu.add(t[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),os=Object.prototype.hasOwnProperty,jp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ic={},lc={};function Sp(e){return os.call(lc,e)?!0:os.call(ic,e)?!1:jp.test(e)?lc[e]=!0:(ic[e]=!0,!1)}function Np(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cp(e,t,n,r){if(t===null||typeof t>"u"||Np(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var sa=/[\-:]([a-z])/g;function aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sa,aa);Le[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sa,aa);Le[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sa,aa);Le[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ca(e,t,n,r){var o=Le.hasOwnProperty(t)?Le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cp(t,n,o,r)&&(n=null),r||o===null?Sp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xo=Symbol.for("react.element"),rr=Symbol.for("react.portal"),or=Symbol.for("react.fragment"),ua=Symbol.for("react.strict_mode"),is=Symbol.for("react.profiler"),Uu=Symbol.for("react.provider"),Hu=Symbol.for("react.context"),da=Symbol.for("react.forward_ref"),ls=Symbol.for("react.suspense"),ss=Symbol.for("react.suspense_list"),fa=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Ku=Symbol.for("react.offscreen"),sc=Symbol.iterator;function Fr(e){return e===null||typeof e!="object"?null:(e=sc&&e[sc]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,El;function Xr(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var zl=!1;function _l(e,t){if(!e||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var o=h.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var c=`
`+o[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=a);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xr(e):""}function Ep(e){switch(e.tag){case 5:return Xr(e.type);case 16:return Xr("Lazy");case 13:return Xr("Suspense");case 19:return Xr("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function as(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case or:return"Fragment";case rr:return"Portal";case is:return"Profiler";case ua:return"StrictMode";case ls:return"Suspense";case ss:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hu:return(e.displayName||"Context")+".Consumer";case Uu:return(e._context.displayName||"Context")+".Provider";case da:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fa:return t=e.displayName||null,t!==null?t:as(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return as(e(t))}catch{}}return null}function zp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return as(t);case 8:return t===ua?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _p(e){var t=Wu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Go(e){e._valueTracker||(e._valueTracker=_p(e))}function Vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cs(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ac(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qu(e,t){t=t.checked,t!=null&&ca(e,"checked",t,!1)}function us(e,t){Qu(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ds(e,t.type,n):t.hasOwnProperty("defaultValue")&&ds(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ds(e,t,n){(t!=="number"||Ei(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gr=Array.isArray;function mr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function fs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Gr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function Yu(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ps(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jo,Gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Jo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dp=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(e){Dp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),eo[t]=eo[e]})});function Ju(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||eo.hasOwnProperty(e)&&eo[e]?(""+t).trim():t+"px"}function Zu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ju(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Lp=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hs(e,t){if(t){if(Lp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function ms(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gs=null;function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xs=null,gr=null,xr=null;function fc(e){if(e=Po(e)){if(typeof xs!="function")throw Error(_(280));var t=e.stateNode;t&&(t=al(t),xs(e.stateNode,e.type,t))}}function qu(e){gr?xr?xr.push(e):xr=[e]:gr=e}function ed(){if(gr){var e=gr,t=xr;if(xr=gr=null,fc(e),t)for(e=0;e<t.length;e++)fc(t[e])}}function td(e,t){return e(t)}function nd(){}var Dl=!1;function rd(e,t,n){if(Dl)return e(t,n);Dl=!0;try{return td(e,t,n)}finally{Dl=!1,(gr!==null||xr!==null)&&(nd(),ed())}}function po(e,t){var n=e.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ys=!1;if(qt)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){ys=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{ys=!1}function Tp(e,t,n,r,o,i,l,a,c){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(p){this.onError(p)}}var to=!1,zi=null,_i=!1,vs=null,Pp={onError:function(e){to=!0,zi=e}};function Mp(e,t,n,r,o,i,l,a,c){to=!1,zi=null,Tp.apply(Pp,arguments)}function Op(e,t,n,r,o,i,l,a,c){if(Mp.apply(this,arguments),to){if(to){var h=zi;to=!1,zi=null}else throw Error(_(198));_i||(_i=!0,vs=h)}}function Jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function od(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pc(e){if(Jn(e)!==e)throw Error(_(188))}function Rp(e){var t=e.alternate;if(!t){if(t=Jn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return pc(o),e;if(i===r)return pc(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function id(e){return e=Rp(e),e!==null?ld(e):null}function ld(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ld(e);if(t!==null)return t;e=e.sibling}return null}var sd=pt.unstable_scheduleCallback,hc=pt.unstable_cancelCallback,$p=pt.unstable_shouldYield,Ip=pt.unstable_requestPaint,xe=pt.unstable_now,Ap=pt.unstable_getCurrentPriorityLevel,ha=pt.unstable_ImmediatePriority,ad=pt.unstable_UserBlockingPriority,Di=pt.unstable_NormalPriority,Fp=pt.unstable_LowPriority,cd=pt.unstable_IdlePriority,ol=null,At=null;function Bp(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Kp,Up=Math.log,Hp=Math.LN2;function Kp(e){return e>>>=0,e===0?32:31-(Up(e)/Hp|0)|0}var Zo=64,qo=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Li(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Jr(a):(i&=l,i!==0&&(r=Jr(i)))}else l=n&~o,l!==0?r=Jr(l):i!==0&&(r=Jr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),o=1<<n,r|=e[n],t&=~o;return r}function Wp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Tt(i),a=1<<l,c=o[l];c===-1?(!(a&n)||a&r)&&(o[l]=Wp(a,t)):c<=t&&(e.expiredLanes|=a),i&=~a}}function ws(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ud(){var e=Zo;return Zo<<=1,!(Zo&4194240)&&(Zo=64),e}function Ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Lo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function Qp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Tt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ma(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var q=0;function dd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fd,ga,pd,hd,md,ks=!1,ei=[],hn=null,mn=null,gn=null,ho=new Map,mo=new Map,un=[],Yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mc(e,t){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":ho.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(t.pointerId)}}function Ur(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Po(t),t!==null&&ga(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Xp(e,t,n,r,o){switch(t){case"focusin":return hn=Ur(hn,e,t,n,r,o),!0;case"dragenter":return mn=Ur(mn,e,t,n,r,o),!0;case"mouseover":return gn=Ur(gn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ho.set(i,Ur(ho.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,mo.set(i,Ur(mo.get(i)||null,e,t,n,r,o)),!0}return!1}function gd(e){var t=Rn(e.target);if(t!==null){var n=Jn(t);if(n!==null){if(t=n.tag,t===13){if(t=od(n),t!==null){e.blockedOn=t,md(e.priority,function(){pd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gs=r,n.target.dispatchEvent(r),gs=null}else return t=Po(n),t!==null&&ga(t),e.blockedOn=n,!1;t.shift()}return!0}function gc(e,t,n){gi(e)&&n.delete(t)}function Gp(){ks=!1,hn!==null&&gi(hn)&&(hn=null),mn!==null&&gi(mn)&&(mn=null),gn!==null&&gi(gn)&&(gn=null),ho.forEach(gc),mo.forEach(gc)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,ks||(ks=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,Gp)))}function go(e){function t(o){return Hr(o,e)}if(0<ei.length){Hr(ei[0],e);for(var n=1;n<ei.length;n++){var r=ei[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&Hr(hn,e),mn!==null&&Hr(mn,e),gn!==null&&Hr(gn,e),ho.forEach(t),mo.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)gd(n),n.blockedOn===null&&un.shift()}var yr=rn.ReactCurrentBatchConfig,Ti=!0;function Jp(e,t,n,r){var o=q,i=yr.transition;yr.transition=null;try{q=1,xa(e,t,n,r)}finally{q=o,yr.transition=i}}function Zp(e,t,n,r){var o=q,i=yr.transition;yr.transition=null;try{q=4,xa(e,t,n,r)}finally{q=o,yr.transition=i}}function xa(e,t,n,r){if(Ti){var o=bs(e,t,n,r);if(o===null)Bl(e,t,r,Pi,n),mc(e,r);else if(Xp(o,e,t,n,r))r.stopPropagation();else if(mc(e,r),t&4&&-1<Yp.indexOf(e)){for(;o!==null;){var i=Po(o);if(i!==null&&fd(i),i=bs(e,t,n,r),i===null&&Bl(e,t,r,Pi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Bl(e,t,r,null,n)}}var Pi=null;function bs(e,t,n,r){if(Pi=null,e=pa(r),e=Rn(e),e!==null)if(t=Jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=od(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pi=e,null}function xd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ap()){case ha:return 1;case ad:return 4;case Di:case Fp:return 16;case cd:return 536870912;default:return 16}default:return 16}}var fn=null,ya=null,xi=null;function yd(){if(xi)return xi;var e,t=ya,n=t.length,r,o="value"in fn?fn.value:fn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return xi=o.slice(e,1<r?1-r:void 0)}function yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function xc(){return!1}function mt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ti:xc,this.isPropagationStopped=xc,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),t}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},va=mt(Dr),To=he({},Dr,{view:0,detail:0}),qp=mt(To),Tl,Pl,Kr,il=he({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(Tl=e.screenX-Kr.screenX,Pl=e.screenY-Kr.screenY):Pl=Tl=0,Kr=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),yc=mt(il),eh=he({},il,{dataTransfer:0}),th=mt(eh),nh=he({},To,{relatedTarget:0}),Ml=mt(nh),rh=he({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),oh=mt(rh),ih=he({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lh=mt(ih),sh=he({},Dr,{data:0}),vc=mt(sh),ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uh[e])?!!t[e]:!1}function wa(){return dh}var fh=he({},To,{key:function(e){if(e.key){var t=ah[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ch[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wa,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ph=mt(fh),hh=he({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=mt(hh),mh=he({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wa}),gh=mt(mh),xh=he({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),yh=mt(xh),vh=he({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wh=mt(vh),kh=[9,13,27,32],ka=qt&&"CompositionEvent"in window,no=null;qt&&"documentMode"in document&&(no=document.documentMode);var bh=qt&&"TextEvent"in window&&!no,vd=qt&&(!ka||no&&8<no&&11>=no),kc=" ",bc=!1;function wd(e,t){switch(e){case"keyup":return kh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function jh(e,t){switch(e){case"compositionend":return kd(t);case"keypress":return t.which!==32?null:(bc=!0,kc);case"textInput":return e=t.data,e===kc&&bc?null:e;default:return null}}function Sh(e,t){if(ir)return e==="compositionend"||!ka&&wd(e,t)?(e=yd(),xi=ya=fn=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vd&&t.locale!=="ko"?null:t.data;default:return null}}var Nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nh[e.type]:t==="textarea"}function bd(e,t,n,r){qu(r),t=Mi(t,"onChange"),0<t.length&&(n=new va("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ro=null,xo=null;function Ch(e){Pd(e,0)}function ll(e){var t=ar(e);if(Vu(t))return e}function Eh(e,t){if(e==="change")return t}var jd=!1;if(qt){var Ol;if(qt){var Rl="oninput"in document;if(!Rl){var Sc=document.createElement("div");Sc.setAttribute("oninput","return;"),Rl=typeof Sc.oninput=="function"}Ol=Rl}else Ol=!1;jd=Ol&&(!document.documentMode||9<document.documentMode)}function Nc(){ro&&(ro.detachEvent("onpropertychange",Sd),xo=ro=null)}function Sd(e){if(e.propertyName==="value"&&ll(xo)){var t=[];bd(t,xo,e,pa(e)),rd(Ch,t)}}function zh(e,t,n){e==="focusin"?(Nc(),ro=t,xo=n,ro.attachEvent("onpropertychange",Sd)):e==="focusout"&&Nc()}function _h(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(xo)}function Dh(e,t){if(e==="click")return ll(t)}function Lh(e,t){if(e==="input"||e==="change")return ll(t)}function Th(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:Th;function yo(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!os.call(t,o)||!Mt(e[o],t[o]))return!1}return!0}function Cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ec(e,t){var n=Cc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cc(n)}}function Nd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cd(){for(var e=window,t=Ei();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ei(e.document)}return t}function ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ph(e){var t=Cd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nd(n.ownerDocument.documentElement,n)){if(r!==null&&ba(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ec(n,i);var l=Ec(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mh=qt&&"documentMode"in document&&11>=document.documentMode,lr=null,js=null,oo=null,Ss=!1;function zc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ss||lr==null||lr!==Ei(r)||(r=lr,"selectionStart"in r&&ba(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oo&&yo(oo,r)||(oo=r,r=Mi(js,"onSelect"),0<r.length&&(t=new va("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lr)))}function ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:ni("Animation","AnimationEnd"),animationiteration:ni("Animation","AnimationIteration"),animationstart:ni("Animation","AnimationStart"),transitionend:ni("Transition","TransitionEnd")},$l={},Ed={};qt&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function sl(e){if($l[e])return $l[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ed)return $l[e]=t[n];return e}var zd=sl("animationend"),_d=sl("animationiteration"),Dd=sl("animationstart"),Ld=sl("transitionend"),Td=new Map,_c="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){Td.set(e,t),Gn(t,[e])}for(var Il=0;Il<_c.length;Il++){var Al=_c[Il],Oh=Al.toLowerCase(),Rh=Al[0].toUpperCase()+Al.slice(1);Sn(Oh,"on"+Rh)}Sn(zd,"onAnimationEnd");Sn(_d,"onAnimationIteration");Sn(Dd,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Ld,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$h=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function Dc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Op(r,t,void 0,e),e.currentTarget=null}function Pd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,h=a.currentTarget;if(a=a.listener,c!==i&&o.isPropagationStopped())break e;Dc(o,a,h),i=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,h=a.currentTarget,a=a.listener,c!==i&&o.isPropagationStopped())break e;Dc(o,a,h),i=c}}}if(_i)throw e=vs,_i=!1,vs=null,e}function le(e,t){var n=t[_s];n===void 0&&(n=t[_s]=new Set);var r=e+"__bubble";n.has(r)||(Md(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),Md(n,e,r,t)}var ri="_reactListening"+Math.random().toString(36).slice(2);function vo(e){if(!e[ri]){e[ri]=!0,Bu.forEach(function(n){n!=="selectionchange"&&($h.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ri]||(t[ri]=!0,Fl("selectionchange",!1,t))}}function Md(e,t,n,r){switch(xd(t)){case 1:var o=Jp;break;case 4:o=Zp;break;default:o=xa}n=o.bind(null,t,n,e),o=void 0,!ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Bl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Rn(a),l===null)return;if(c=l.tag,c===5||c===6){r=i=l;continue e}a=a.parentNode}}r=r.return}rd(function(){var h=i,p=pa(n),m=[];e:{var f=Td.get(e);if(f!==void 0){var w=va,b=e;switch(e){case"keypress":if(yi(n)===0)break e;case"keydown":case"keyup":w=ph;break;case"focusin":b="focus",w=Ml;break;case"focusout":b="blur",w=Ml;break;case"beforeblur":case"afterblur":w=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=gh;break;case zd:case _d:case Dd:w=oh;break;case Ld:w=yh;break;case"scroll":w=qp;break;case"wheel":w=wh;break;case"copy":case"cut":case"paste":w=lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=wc}var k=(t&4)!==0,L=!k&&e==="scroll",g=k?f!==null?f+"Capture":null:f;k=[];for(var d=h,u;d!==null;){u=d;var v=u.stateNode;if(u.tag===5&&v!==null&&(u=v,g!==null&&(v=po(d,g),v!=null&&k.push(wo(d,v,u)))),L)break;d=d.return}0<k.length&&(f=new w(f,b,null,n,p),m.push({event:f,listeners:k}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",f&&n!==gs&&(b=n.relatedTarget||n.fromElement)&&(Rn(b)||b[en]))break e;if((w||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,w?(b=n.relatedTarget||n.toElement,w=h,b=b?Rn(b):null,b!==null&&(L=Jn(b),b!==L||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=h),w!==b)){if(k=yc,v="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=wc,v="onPointerLeave",g="onPointerEnter",d="pointer"),L=w==null?f:ar(w),u=b==null?f:ar(b),f=new k(v,d+"leave",w,n,p),f.target=L,f.relatedTarget=u,v=null,Rn(p)===h&&(k=new k(g,d+"enter",b,n,p),k.target=u,k.relatedTarget=L,v=k),L=v,w&&b)t:{for(k=w,g=b,d=0,u=k;u;u=nr(u))d++;for(u=0,v=g;v;v=nr(v))u++;for(;0<d-u;)k=nr(k),d--;for(;0<u-d;)g=nr(g),u--;for(;d--;){if(k===g||g!==null&&k===g.alternate)break t;k=nr(k),g=nr(g)}k=null}else k=null;w!==null&&Lc(m,f,w,k,!1),b!==null&&L!==null&&Lc(m,L,b,k,!0)}}e:{if(f=h?ar(h):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var j=Eh;else if(jc(f))if(jd)j=Lh;else{j=_h;var z=zh}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=Dh);if(j&&(j=j(e,h))){bd(m,j,n,p);break e}z&&z(e,f,h),e==="focusout"&&(z=f._wrapperState)&&z.controlled&&f.type==="number"&&ds(f,"number",f.value)}switch(z=h?ar(h):window,e){case"focusin":(jc(z)||z.contentEditable==="true")&&(lr=z,js=h,oo=null);break;case"focusout":oo=js=lr=null;break;case"mousedown":Ss=!0;break;case"contextmenu":case"mouseup":case"dragend":Ss=!1,zc(m,n,p);break;case"selectionchange":if(Mh)break;case"keydown":case"keyup":zc(m,n,p)}var D;if(ka)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ir?wd(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(vd&&n.locale!=="ko"&&(ir||T!=="onCompositionStart"?T==="onCompositionEnd"&&ir&&(D=yd()):(fn=p,ya="value"in fn?fn.value:fn.textContent,ir=!0)),z=Mi(h,T),0<z.length&&(T=new vc(T,e,null,n,p),m.push({event:T,listeners:z}),D?T.data=D:(D=kd(n),D!==null&&(T.data=D)))),(D=bh?jh(e,n):Sh(e,n))&&(h=Mi(h,"onBeforeInput"),0<h.length&&(p=new vc("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=D))}Pd(m,t)})}function wo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=po(e,n),i!=null&&r.unshift(wo(e,i,o)),i=po(e,t),i!=null&&r.push(wo(e,i,o))),e=e.return}return r}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,c=a.alternate,h=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&h!==null&&(a=h,o?(c=po(n,i),c!=null&&l.unshift(wo(n,c,a))):o||(c=po(n,i),c!=null&&l.push(wo(n,c,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Ih=/\r\n?/g,Ah=/\u0000|\uFFFD/g;function Tc(e){return(typeof e=="string"?e:""+e).replace(Ih,`
`).replace(Ah,"")}function oi(e,t,n){if(t=Tc(t),Tc(e)!==t&&n)throw Error(_(425))}function Oi(){}var Ns=null,Cs=null;function Es(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zs=typeof setTimeout=="function"?setTimeout:void 0,Fh=typeof clearTimeout=="function"?clearTimeout:void 0,Pc=typeof Promise=="function"?Promise:void 0,Bh=typeof queueMicrotask=="function"?queueMicrotask:typeof Pc<"u"?function(e){return Pc.resolve(null).then(e).catch(Uh)}:zs;function Uh(e){setTimeout(function(){throw e})}function Ul(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),go(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);go(t)}function xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Mc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),It="__reactFiber$"+Lr,ko="__reactProps$"+Lr,en="__reactContainer$"+Lr,_s="__reactEvents$"+Lr,Hh="__reactListeners$"+Lr,Kh="__reactHandles$"+Lr;function Rn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mc(e);e!==null;){if(n=e[It])return n;e=Mc(e)}return t}e=n,n=e.parentNode}return null}function Po(e){return e=e[It]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function al(e){return e[ko]||null}var Ds=[],cr=-1;function Nn(e){return{current:e}}function se(e){0>cr||(e.current=Ds[cr],Ds[cr]=null,cr--)}function oe(e,t){cr++,Ds[cr]=e.current,e.current=t}var jn={},Be=Nn(jn),ot=Nn(!1),Wn=jn;function jr(e,t){var n=e.type.contextTypes;if(!n)return jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function it(e){return e=e.childContextTypes,e!=null}function Ri(){se(ot),se(Be)}function Oc(e,t,n){if(Be.current!==jn)throw Error(_(168));oe(Be,t),oe(ot,n)}function Od(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,zp(e)||"Unknown",o));return he({},n,r)}function $i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,Wn=Be.current,oe(Be,e),oe(ot,ot.current),!0}function Rc(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Od(e,t,Wn),r.__reactInternalMemoizedMergedChildContext=e,se(ot),se(Be),oe(Be,e)):se(ot),oe(ot,n)}var Yt=null,cl=!1,Hl=!1;function Rd(e){Yt===null?Yt=[e]:Yt.push(e)}function Wh(e){cl=!0,Rd(e)}function Cn(){if(!Hl&&Yt!==null){Hl=!0;var e=0,t=q;try{var n=Yt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Yt=null,cl=!1}catch(o){throw Yt!==null&&(Yt=Yt.slice(e+1)),sd(ha,Cn),o}finally{q=t,Hl=!1}}return null}var ur=[],dr=0,Ii=null,Ai=0,vt=[],wt=0,Vn=null,Xt=1,Gt="";function Mn(e,t){ur[dr++]=Ai,ur[dr++]=Ii,Ii=e,Ai=t}function $d(e,t,n){vt[wt++]=Xt,vt[wt++]=Gt,vt[wt++]=Vn,Vn=e;var r=Xt;e=Gt;var o=32-Tt(r)-1;r&=~(1<<o),n+=1;var i=32-Tt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Xt=1<<32-Tt(t)+o|n<<o|r,Gt=i+e}else Xt=1<<i|n<<o|r,Gt=e}function ja(e){e.return!==null&&(Mn(e,1),$d(e,1,0))}function Sa(e){for(;e===Ii;)Ii=ur[--dr],ur[dr]=null,Ai=ur[--dr],ur[dr]=null;for(;e===Vn;)Vn=vt[--wt],vt[wt]=null,Gt=vt[--wt],vt[wt]=null,Xt=vt[--wt],vt[wt]=null}var ft=null,dt=null,de=!1,Lt=null;function Id(e,t){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $c(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,dt=xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vn!==null?{id:Xt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ft=e,dt=null,!0):!1;default:return!1}}function Ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ts(e){if(de){var t=dt;if(t){var n=t;if(!$c(e,t)){if(Ls(e))throw Error(_(418));t=xn(n.nextSibling);var r=ft;t&&$c(e,t)?Id(r,n):(e.flags=e.flags&-4097|2,de=!1,ft=e)}}else{if(Ls(e))throw Error(_(418));e.flags=e.flags&-4097|2,de=!1,ft=e}}}function Ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function ii(e){if(e!==ft)return!1;if(!de)return Ic(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Es(e.type,e.memoizedProps)),t&&(t=dt)){if(Ls(e))throw Ad(),Error(_(418));for(;t;)Id(e,t),t=xn(t.nextSibling)}if(Ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ft?xn(e.stateNode.nextSibling):null;return!0}function Ad(){for(var e=dt;e;)e=xn(e.nextSibling)}function Sr(){dt=ft=null,de=!1}function Na(e){Lt===null?Lt=[e]:Lt.push(e)}var Vh=rn.ReactCurrentBatchConfig;function Wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function li(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ac(e){var t=e._init;return t(e._payload)}function Fd(e){function t(g,d){if(e){var u=g.deletions;u===null?(g.deletions=[d],g.flags|=16):u.push(d)}}function n(g,d){if(!e)return null;for(;d!==null;)t(g,d),d=d.sibling;return null}function r(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function o(g,d){return g=kn(g,d),g.index=0,g.sibling=null,g}function i(g,d,u){return g.index=u,e?(u=g.alternate,u!==null?(u=u.index,u<d?(g.flags|=2,d):u):(g.flags|=2,d)):(g.flags|=1048576,d)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,d,u,v){return d===null||d.tag!==6?(d=Gl(u,g.mode,v),d.return=g,d):(d=o(d,u),d.return=g,d)}function c(g,d,u,v){var j=u.type;return j===or?p(g,d,u.props.children,v,u.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===an&&Ac(j)===d.type)?(v=o(d,u.props),v.ref=Wr(g,d,u),v.return=g,v):(v=Ni(u.type,u.key,u.props,null,g.mode,v),v.ref=Wr(g,d,u),v.return=g,v)}function h(g,d,u,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==u.containerInfo||d.stateNode.implementation!==u.implementation?(d=Jl(u,g.mode,v),d.return=g,d):(d=o(d,u.children||[]),d.return=g,d)}function p(g,d,u,v,j){return d===null||d.tag!==7?(d=Fn(u,g.mode,v,j),d.return=g,d):(d=o(d,u),d.return=g,d)}function m(g,d,u){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Gl(""+d,g.mode,u),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Xo:return u=Ni(d.type,d.key,d.props,null,g.mode,u),u.ref=Wr(g,null,d),u.return=g,u;case rr:return d=Jl(d,g.mode,u),d.return=g,d;case an:var v=d._init;return m(g,v(d._payload),u)}if(Gr(d)||Fr(d))return d=Fn(d,g.mode,u,null),d.return=g,d;li(g,d)}return null}function f(g,d,u,v){var j=d!==null?d.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return j!==null?null:a(g,d,""+u,v);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Xo:return u.key===j?c(g,d,u,v):null;case rr:return u.key===j?h(g,d,u,v):null;case an:return j=u._init,f(g,d,j(u._payload),v)}if(Gr(u)||Fr(u))return j!==null?null:p(g,d,u,v,null);li(g,u)}return null}function w(g,d,u,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return g=g.get(u)||null,a(d,g,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xo:return g=g.get(v.key===null?u:v.key)||null,c(d,g,v,j);case rr:return g=g.get(v.key===null?u:v.key)||null,h(d,g,v,j);case an:var z=v._init;return w(g,d,u,z(v._payload),j)}if(Gr(v)||Fr(v))return g=g.get(u)||null,p(d,g,v,j,null);li(d,v)}return null}function b(g,d,u,v){for(var j=null,z=null,D=d,T=d=0,F=null;D!==null&&T<u.length;T++){D.index>T?(F=D,D=null):F=D.sibling;var A=f(g,D,u[T],v);if(A===null){D===null&&(D=F);break}e&&D&&A.alternate===null&&t(g,D),d=i(A,d,T),z===null?j=A:z.sibling=A,z=A,D=F}if(T===u.length)return n(g,D),de&&Mn(g,T),j;if(D===null){for(;T<u.length;T++)D=m(g,u[T],v),D!==null&&(d=i(D,d,T),z===null?j=D:z.sibling=D,z=D);return de&&Mn(g,T),j}for(D=r(g,D);T<u.length;T++)F=w(D,g,T,u[T],v),F!==null&&(e&&F.alternate!==null&&D.delete(F.key===null?T:F.key),d=i(F,d,T),z===null?j=F:z.sibling=F,z=F);return e&&D.forEach(function(G){return t(g,G)}),de&&Mn(g,T),j}function k(g,d,u,v){var j=Fr(u);if(typeof j!="function")throw Error(_(150));if(u=j.call(u),u==null)throw Error(_(151));for(var z=j=null,D=d,T=d=0,F=null,A=u.next();D!==null&&!A.done;T++,A=u.next()){D.index>T?(F=D,D=null):F=D.sibling;var G=f(g,D,A.value,v);if(G===null){D===null&&(D=F);break}e&&D&&G.alternate===null&&t(g,D),d=i(G,d,T),z===null?j=G:z.sibling=G,z=G,D=F}if(A.done)return n(g,D),de&&Mn(g,T),j;if(D===null){for(;!A.done;T++,A=u.next())A=m(g,A.value,v),A!==null&&(d=i(A,d,T),z===null?j=A:z.sibling=A,z=A);return de&&Mn(g,T),j}for(D=r(g,D);!A.done;T++,A=u.next())A=w(D,g,T,A.value,v),A!==null&&(e&&A.alternate!==null&&D.delete(A.key===null?T:A.key),d=i(A,d,T),z===null?j=A:z.sibling=A,z=A);return e&&D.forEach(function(ye){return t(g,ye)}),de&&Mn(g,T),j}function L(g,d,u,v){if(typeof u=="object"&&u!==null&&u.type===or&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Xo:e:{for(var j=u.key,z=d;z!==null;){if(z.key===j){if(j=u.type,j===or){if(z.tag===7){n(g,z.sibling),d=o(z,u.props.children),d.return=g,g=d;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===an&&Ac(j)===z.type){n(g,z.sibling),d=o(z,u.props),d.ref=Wr(g,z,u),d.return=g,g=d;break e}n(g,z);break}else t(g,z);z=z.sibling}u.type===or?(d=Fn(u.props.children,g.mode,v,u.key),d.return=g,g=d):(v=Ni(u.type,u.key,u.props,null,g.mode,v),v.ref=Wr(g,d,u),v.return=g,g=v)}return l(g);case rr:e:{for(z=u.key;d!==null;){if(d.key===z)if(d.tag===4&&d.stateNode.containerInfo===u.containerInfo&&d.stateNode.implementation===u.implementation){n(g,d.sibling),d=o(d,u.children||[]),d.return=g,g=d;break e}else{n(g,d);break}else t(g,d);d=d.sibling}d=Jl(u,g.mode,v),d.return=g,g=d}return l(g);case an:return z=u._init,L(g,d,z(u._payload),v)}if(Gr(u))return b(g,d,u,v);if(Fr(u))return k(g,d,u,v);li(g,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,d!==null&&d.tag===6?(n(g,d.sibling),d=o(d,u),d.return=g,g=d):(n(g,d),d=Gl(u,g.mode,v),d.return=g,g=d),l(g)):n(g,d)}return L}var Nr=Fd(!0),Bd=Fd(!1),Fi=Nn(null),Bi=null,fr=null,Ca=null;function Ea(){Ca=fr=Bi=null}function za(e){var t=Fi.current;se(Fi),e._currentValue=t}function Ps(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vr(e,t){Bi=e,Ca=fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},fr===null){if(Bi===null)throw Error(_(308));fr=e,Bi.dependencies={lanes:0,firstContext:e}}else fr=fr.next=e;return t}var $n=null;function _a(e){$n===null?$n=[e]:$n.push(e)}function Ud(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,_a(t)):(n.next=o.next,o.next=n),t.interleaved=n,tn(e,r)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function Da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,tn(e,n)}return o=r.interleaved,o===null?(t.next=t,_a(r)):(t.next=o.next,o.next=t),r.interleaved=t,tn(e,n)}function vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ma(e,n)}}function Fc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ui(e,t,n,r){var o=e.updateQueue;cn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,h=c.next;c.next=null,l===null?i=h:l.next=h,l=c;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=h:a.next=h,p.lastBaseUpdate=c))}if(i!==null){var m=o.baseState;l=0,p=h=c=null,a=i;do{var f=a.lane,w=a.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,k=a;switch(f=t,w=n,k.tag){case 1:if(b=k.payload,typeof b=="function"){m=b.call(w,m,f);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=k.payload,f=typeof b=="function"?b.call(w,m,f):b,f==null)break e;m=he({},m,f);break e;case 2:cn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else w={eventTime:w,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(h=p=w,c=m):p=p.next=w,l|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(p===null&&(c=m),o.baseState=c,o.firstBaseUpdate=h,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Yn|=l,e.lanes=l,e.memoizedState=m}}function Bc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var Mo={},Ft=Nn(Mo),bo=Nn(Mo),jo=Nn(Mo);function In(e){if(e===Mo)throw Error(_(174));return e}function La(e,t){switch(oe(jo,t),oe(bo,e),oe(Ft,Mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ps(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ps(t,e)}se(Ft),oe(Ft,t)}function Cr(){se(Ft),se(bo),se(jo)}function Kd(e){In(jo.current);var t=In(Ft.current),n=ps(t,e.type);t!==n&&(oe(bo,e),oe(Ft,n))}function Ta(e){bo.current===e&&(se(Ft),se(bo))}var fe=Nn(0);function Hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kl=[];function Pa(){for(var e=0;e<Kl.length;e++)Kl[e]._workInProgressVersionPrimary=null;Kl.length=0}var wi=rn.ReactCurrentDispatcher,Wl=rn.ReactCurrentBatchConfig,Qn=0,pe=null,be=null,Ee=null,Ki=!1,io=!1,So=0,Qh=0;function Re(){throw Error(_(321))}function Ma(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function Oa(e,t,n,r,o,i){if(Qn=i,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wi.current=e===null||e.memoizedState===null?Jh:Zh,e=n(r,o),io){i=0;do{if(io=!1,So=0,25<=i)throw Error(_(301));i+=1,Ee=be=null,t.updateQueue=null,wi.current=qh,e=n(r,o)}while(io)}if(wi.current=Wi,t=be!==null&&be.next!==null,Qn=0,Ee=be=pe=null,Ki=!1,t)throw Error(_(300));return e}function Ra(){var e=So!==0;return So=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?pe.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function Nt(){if(be===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Ee===null?pe.memoizedState:Ee.next;if(t!==null)Ee=t,be=e;else{if(e===null)throw Error(_(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ee===null?pe.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function No(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=Nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=be,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,c=null,h=i;do{var p=h.lane;if((Qn&p)===p)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(a=c=m,l=r):c=c.next=m,pe.lanes|=p,Yn|=p}h=h.next}while(h!==null&&h!==i);c===null?l=r:c.next=a,Mt(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,pe.lanes|=i,Yn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=Nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Mt(i,t.memoizedState)||(rt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Wd(){}function Vd(e,t){var n=pe,r=Nt(),o=t(),i=!Mt(r.memoizedState,o);if(i&&(r.memoizedState=o,rt=!0),r=r.queue,$a(Xd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Co(9,Yd.bind(null,n,r,o,t),void 0,null),ze===null)throw Error(_(349));Qn&30||Qd(n,t,o)}return o}function Qd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yd(e,t,n,r){t.value=n,t.getSnapshot=r,Gd(t)&&Jd(e)}function Xd(e,t,n){return n(function(){Gd(t)&&Jd(e)})}function Gd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function Jd(e){var t=tn(e,1);t!==null&&Pt(t,e,1,-1)}function Uc(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t.queue=e,e=e.dispatch=Gh.bind(null,pe,e),[t.memoizedState,e]}function Co(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zd(){return Nt().memoizedState}function ki(e,t,n,r){var o=$t();pe.flags|=e,o.memoizedState=Co(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var o=Nt();r=r===void 0?null:r;var i=void 0;if(be!==null){var l=be.memoizedState;if(i=l.destroy,r!==null&&Ma(r,l.deps)){o.memoizedState=Co(t,n,i,r);return}}pe.flags|=e,o.memoizedState=Co(1|t,n,i,r)}function Hc(e,t){return ki(8390656,8,e,t)}function $a(e,t){return ul(2048,8,e,t)}function qd(e,t){return ul(4,2,e,t)}function ef(e,t){return ul(4,4,e,t)}function tf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nf(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,tf.bind(null,t,e),n)}function Ia(){}function rf(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function of(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lf(e,t,n){return Qn&21?(Mt(n,t)||(n=ud(),pe.lanes|=n,Yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n)}function Yh(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Wl.transition;Wl.transition={};try{e(!1),t()}finally{q=n,Wl.transition=r}}function sf(){return Nt().memoizedState}function Xh(e,t,n){var r=wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},af(e))cf(t,n);else if(n=Ud(e,t,n,r),n!==null){var o=Qe();Pt(n,e,r,o),uf(n,t,r)}}function Gh(e,t,n){var r=wn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(af(e))cf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Mt(a,l)){var c=t.interleaved;c===null?(o.next=o,_a(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Ud(e,t,o,r),n!==null&&(o=Qe(),Pt(n,e,r,o),uf(n,t,r))}}function af(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function cf(e,t){io=Ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ma(e,n)}}var Wi={readContext:St,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Jh={readContext:St,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:Hc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ki(4194308,4,tf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return ki(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xh.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Uc,useDebugValue:Ia,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Uc(!1),t=e[0];return e=Yh.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,o=$t();if(de){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ze===null)throw Error(_(349));Qn&30||Qd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Hc(Xd.bind(null,r,i,e),[e]),r.flags|=2048,Co(9,Yd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=$t(),t=ze.identifierPrefix;if(de){var n=Gt,r=Xt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=So++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zh={readContext:St,useCallback:rf,useContext:St,useEffect:$a,useImperativeHandle:nf,useInsertionEffect:qd,useLayoutEffect:ef,useMemo:of,useReducer:Vl,useRef:Zd,useState:function(){return Vl(No)},useDebugValue:Ia,useDeferredValue:function(e){var t=Nt();return lf(t,be.memoizedState,e)},useTransition:function(){var e=Vl(No)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:Wd,useSyncExternalStore:Vd,useId:sf,unstable_isNewReconciler:!1},qh={readContext:St,useCallback:rf,useContext:St,useEffect:$a,useImperativeHandle:nf,useInsertionEffect:qd,useLayoutEffect:ef,useMemo:of,useReducer:Ql,useRef:Zd,useState:function(){return Ql(No)},useDebugValue:Ia,useDeferredValue:function(e){var t=Nt();return be===null?t.memoizedState=e:lf(t,be.memoizedState,e)},useTransition:function(){var e=Ql(No)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:Wd,useSyncExternalStore:Vd,useId:sf,unstable_isNewReconciler:!1};function _t(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ms(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=wn(e),i=Zt(r,o);i.payload=t,n!=null&&(i.callback=n),t=yn(e,i,o),t!==null&&(Pt(t,e,o,r),vi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=wn(e),i=Zt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=yn(e,i,o),t!==null&&(Pt(t,e,o,r),vi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=wn(e),o=Zt(n,r);o.tag=2,t!=null&&(o.callback=t),t=yn(e,o,r),t!==null&&(Pt(t,e,r,n),vi(t,e,r))}};function Kc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!yo(n,r)||!yo(o,i):!0}function df(e,t,n){var r=!1,o=jn,i=t.contextType;return typeof i=="object"&&i!==null?i=St(i):(o=it(t)?Wn:Be.current,r=t.contextTypes,i=(r=r!=null)?jr(e,o):jn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Wc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function Os(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Da(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=St(i):(i=it(t)?Wn:Be.current,o.context=jr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ms(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&dl.enqueueReplaceState(o,o.state,null),Ui(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Er(e,t){try{var n="",r=t;do n+=Ep(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var em=typeof WeakMap=="function"?WeakMap:Map;function ff(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qi||(Qi=!0,Vs=r),Rs(e,t)},n}function pf(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Rs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Rs(e,t),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Vc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new em;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=hm.bind(null,e,t,n),t.then(e,e))}function Qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,yn(n,t,1))),n.lanes|=1),e)}var tm=rn.ReactCurrentOwner,rt=!1;function Ve(e,t,n,r){t.child=e===null?Bd(t,null,n,r):Nr(t,e.child,n,r)}function Xc(e,t,n,r,o){n=n.render;var i=t.ref;return vr(t,o),r=Oa(e,t,n,r,i,o),n=Ra(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,nn(e,t,o)):(de&&n&&ja(t),t.flags|=1,Ve(e,t,r,o),t.child)}function Gc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Va(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,hf(e,t,i,r,o)):(e=Ni(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(l,r)&&e.ref===t.ref)return nn(e,t,o)}return t.flags|=1,e=kn(i,r),e.ref=t.ref,e.return=t,t.child=e}function hf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(yo(i,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,nn(e,t,o)}return $s(e,t,n,r,o)}function mf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(hr,ut),ut|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(hr,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,oe(hr,ut),ut|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,oe(hr,ut),ut|=r;return Ve(e,t,o,n),t.child}function gf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $s(e,t,n,r,o){var i=it(n)?Wn:Be.current;return i=jr(t,i),vr(t,o),n=Oa(e,t,n,r,i,o),r=Ra(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,nn(e,t,o)):(de&&r&&ja(t),t.flags|=1,Ve(e,t,n,o),t.child)}function Jc(e,t,n,r,o){if(it(n)){var i=!0;$i(t)}else i=!1;if(vr(t,o),t.stateNode===null)bi(e,t),df(t,n,r),Os(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var c=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=St(h):(h=it(n)?Wn:Be.current,h=jr(t,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==h)&&Wc(t,l,r,h),cn=!1;var f=t.memoizedState;l.state=f,Ui(t,r,l,o),c=t.memoizedState,a!==r||f!==c||ot.current||cn?(typeof p=="function"&&(Ms(t,n,p,r),c=t.memoizedState),(a=cn||Kc(t,n,a,r,f,c,h))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=h,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Hd(e,t),a=t.memoizedProps,h=t.type===t.elementType?a:_t(t.type,a),l.props=h,m=t.pendingProps,f=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=St(c):(c=it(n)?Wn:Be.current,c=jr(t,c));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||f!==c)&&Wc(t,l,r,c),cn=!1,f=t.memoizedState,l.state=f,Ui(t,r,l,o);var b=t.memoizedState;a!==m||f!==b||ot.current||cn?(typeof w=="function"&&(Ms(t,n,w,r),b=t.memoizedState),(h=cn||Kc(t,n,h,r,f,b,c)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=c,r=h):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Is(e,t,n,r,i,o)}function Is(e,t,n,r,o,i){gf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Rc(t,n,!1),nn(e,t,i);r=t.stateNode,tm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Nr(t,e.child,null,i),t.child=Nr(t,null,a,i)):Ve(e,t,a,i),t.memoizedState=r.state,o&&Rc(t,n,!0),t.child}function xf(e){var t=e.stateNode;t.pendingContext?Oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oc(e,t.context,!1),La(e,t.containerInfo)}function Zc(e,t,n,r,o){return Sr(),Na(o),t.flags|=256,Ve(e,t,n,r),t.child}var As={dehydrated:null,treeContext:null,retryLane:0};function Fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function yf(e,t,n){var r=t.pendingProps,o=fe.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),oe(fe,o&1),e===null)return Ts(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=hl(l,r,0,null),e=Fn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fs(n),t.memoizedState=As,e):Aa(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return nm(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=kn(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=kn(a,i):(i=Fn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Fs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=As,r}return i=e.child,e=i.sibling,r=kn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Aa(e,t){return t=hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function si(e,t,n,r){return r!==null&&Na(r),Nr(t,e.child,null,n),e=Aa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Yl(Error(_(422))),si(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=hl({mode:"visible",children:r.children},o,0,null),i=Fn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Nr(t,e.child,null,l),t.child.memoizedState=Fs(l),t.memoizedState=As,i);if(!(t.mode&1))return si(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(_(419)),r=Yl(i,r,void 0),si(e,t,l,r)}if(a=(l&e.childLanes)!==0,rt||a){if(r=ze,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,tn(e,o),Pt(r,e,o,-1))}return Wa(),r=Yl(Error(_(421))),si(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=mm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,dt=xn(o.nextSibling),ft=t,de=!0,Lt=null,e!==null&&(vt[wt++]=Xt,vt[wt++]=Gt,vt[wt++]=Vn,Xt=e.id,Gt=e.overflow,Vn=t),t=Aa(t,r.children),t.flags|=4096,t)}function qc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ps(e.return,t,n)}function Xl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function vf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ve(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qc(e,n,t);else if(e.tag===19)qc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(fe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Hi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Xl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Hi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Xl(t,!0,n,null,i);break;case"together":Xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rm(e,t,n){switch(t.tag){case 3:xf(t),Sr();break;case 5:Kd(t);break;case 1:it(t.type)&&$i(t);break;case 4:La(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;oe(Fi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?yf(e,t,n):(oe(fe,fe.current&1),e=nn(e,t,n),e!==null?e.sibling:null);oe(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),oe(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,mf(e,t,n)}return nn(e,t,n)}var wf,Bs,kf,bf;wf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bs=function(){};kf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,In(Ft.current);var i=null;switch(n){case"input":o=cs(e,o),r=cs(e,r),i=[];break;case"select":o=he({},o,{value:void 0}),r=he({},r,{value:void 0}),i=[];break;case"textarea":o=fs(e,o),r=fs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oi)}hs(n,r);var l;n=null;for(h in o)if(!r.hasOwnProperty(h)&&o.hasOwnProperty(h)&&o[h]!=null)if(h==="style"){var a=o[h];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(uo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var c=r[h];if(a=o!=null?o[h]:void 0,r.hasOwnProperty(h)&&c!==a&&(c!=null||a!=null))if(h==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(i||(i=[]),i.push(h,n)),n=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(uo.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&le("scroll",e),i||a===c||(i=[])):(i=i||[]).push(h,c))}n&&(i=i||[]).push("style",n);var h=i;(t.updateQueue=h)&&(t.flags|=4)}};bf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vr(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function om(e,t,n){var r=t.pendingProps;switch(Sa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return it(t.type)&&Ri(),$e(t),null;case 3:return r=t.stateNode,Cr(),se(ot),se(Be),Pa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ii(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lt!==null&&(Xs(Lt),Lt=null))),Bs(e,t),$e(t),null;case 5:Ta(t);var o=In(jo.current);if(n=t.type,e!==null&&t.stateNode!=null)kf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return $e(t),null}if(e=In(Ft.current),ii(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[It]=t,r[ko]=i,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(o=0;o<Zr.length;o++)le(Zr[o],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":ac(r,i),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},le("invalid",r);break;case"textarea":uc(r,i),le("invalid",r)}hs(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&oi(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&oi(r.textContent,a,e),o=["children",""+a]):uo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&le("scroll",r)}switch(n){case"input":Go(r),cc(r,i,!0);break;case"textarea":Go(r),dc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Oi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[It]=t,e[ko]=r,wf(e,t,!1,!1),t.stateNode=e;e:{switch(l=ms(n,r),n){case"dialog":le("cancel",e),le("close",e),o=r;break;case"iframe":case"object":case"embed":le("load",e),o=r;break;case"video":case"audio":for(o=0;o<Zr.length;o++)le(Zr[o],e);o=r;break;case"source":le("error",e),o=r;break;case"img":case"image":case"link":le("error",e),le("load",e),o=r;break;case"details":le("toggle",e),o=r;break;case"input":ac(e,r),o=cs(e,r),le("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=he({},r,{value:void 0}),le("invalid",e);break;case"textarea":uc(e,r),o=fs(e,r),le("invalid",e);break;default:o=r}hs(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?Zu(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Gu(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&fo(e,c):typeof c=="number"&&fo(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(uo.hasOwnProperty(i)?c!=null&&i==="onScroll"&&le("scroll",e):c!=null&&ca(e,i,c,l))}switch(n){case"input":Go(e),cc(e,r,!1);break;case"textarea":Go(e),dc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?mr(e,!!r.multiple,i,!1):r.defaultValue!=null&&mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Oi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)bf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=In(jo.current),In(Ft.current),ii(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(i=r.nodeValue!==n)&&(e=ft,e!==null))switch(e.tag){case 3:oi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return $e(t),null;case 13:if(se(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&dt!==null&&t.mode&1&&!(t.flags&128))Ad(),Sr(),t.flags|=98560,i=!1;else if(i=ii(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[It]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),i=!1}else Lt!==null&&(Xs(Lt),Lt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?je===0&&(je=3):Wa())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return Cr(),Bs(e,t),e===null&&vo(t.stateNode.containerInfo),$e(t),null;case 10:return za(t.type._context),$e(t),null;case 17:return it(t.type)&&Ri(),$e(t),null;case 19:if(se(fe),i=t.memoizedState,i===null)return $e(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Vr(i,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Hi(e),l!==null){for(t.flags|=128,Vr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(fe,fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&xe()>zr&&(t.flags|=128,r=!0,Vr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Hi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!de)return $e(t),null}else 2*xe()-i.renderingStartTime>zr&&n!==1073741824&&(t.flags|=128,r=!0,Vr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=xe(),t.sibling=null,n=fe.current,oe(fe,r?n&1|2:n&1),t):($e(t),null);case 22:case 23:return Ka(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ut&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function im(e,t){switch(Sa(t),t.tag){case 1:return it(t.type)&&Ri(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cr(),se(ot),se(Be),Pa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ta(t),null;case 13:if(se(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(fe),null;case 4:return Cr(),null;case 10:return za(t.type._context),null;case 22:case 23:return Ka(),null;case 24:return null;default:return null}}var ai=!1,Ie=!1,lm=typeof WeakSet=="function"?WeakSet:Set,$=null;function pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function Us(e,t,n){try{n()}catch(r){me(e,t,r)}}var eu=!1;function sm(e,t){if(Ns=Ti,e=Cd(),ba(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,c=-1,h=0,p=0,m=e,f=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(a=l+o),m!==i||r!==0&&m.nodeType!==3||(c=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)f=m,m=w;for(;;){if(m===e)break t;if(f===n&&++h===o&&(a=l),f===i&&++p===r&&(c=l),(w=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=w}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cs={focusedElem:e,selectionRange:n},Ti=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var k=b.memoizedProps,L=b.memoizedState,g=t.stateNode,d=g.getSnapshotBeforeUpdate(t.elementType===t.type?k:_t(t.type,k),L);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var u=t.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){me(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return b=eu,eu=!1,b}function lo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Us(t,n,i)}o=o.next}while(o!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function jf(e){var t=e.alternate;t!==null&&(e.alternate=null,jf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[ko],delete t[_s],delete t[Hh],delete t[Kh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sf(e){return e.tag===5||e.tag===3||e.tag===4}function tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ks(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oi));else if(r!==4&&(e=e.child,e!==null))for(Ks(e,t,n),e=e.sibling;e!==null;)Ks(e,t,n),e=e.sibling}function Ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ws(e,t,n),e=e.sibling;e!==null;)Ws(e,t,n),e=e.sibling}var _e=null,Dt=!1;function sn(e,t,n){for(n=n.child;n!==null;)Nf(e,t,n),n=n.sibling}function Nf(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:Ie||pr(n,t);case 6:var r=_e,o=Dt;_e=null,sn(e,t,n),_e=r,Dt=o,_e!==null&&(Dt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(Dt?(e=_e,n=n.stateNode,e.nodeType===8?Ul(e.parentNode,n):e.nodeType===1&&Ul(e,n),go(e)):Ul(_e,n.stateNode));break;case 4:r=_e,o=Dt,_e=n.stateNode.containerInfo,Dt=!0,sn(e,t,n),_e=r,Dt=o;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Us(n,t,l),o=o.next}while(o!==r)}sn(e,t,n);break;case 1:if(!Ie&&(pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,t,a)}sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,sn(e,t,n),Ie=r):sn(e,t,n);break;default:sn(e,t,n)}}function nu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lm),t.forEach(function(r){var o=gm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function zt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:_e=a.stateNode,Dt=!1;break e;case 3:_e=a.stateNode.containerInfo,Dt=!0;break e;case 4:_e=a.stateNode.containerInfo,Dt=!0;break e}a=a.return}if(_e===null)throw Error(_(160));Nf(i,l,o),_e=null,Dt=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(h){me(o,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cf(t,e),t=t.sibling}function Cf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),Rt(e),r&4){try{lo(3,e,e.return),fl(3,e)}catch(k){me(e,e.return,k)}try{lo(5,e,e.return)}catch(k){me(e,e.return,k)}}break;case 1:zt(t,e),Rt(e),r&512&&n!==null&&pr(n,n.return);break;case 5:if(zt(t,e),Rt(e),r&512&&n!==null&&pr(n,n.return),e.flags&32){var o=e.stateNode;try{fo(o,"")}catch(k){me(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Qu(o,i),ms(a,l);var h=ms(a,i);for(l=0;l<c.length;l+=2){var p=c[l],m=c[l+1];p==="style"?Zu(o,m):p==="dangerouslySetInnerHTML"?Gu(o,m):p==="children"?fo(o,m):ca(o,p,m,h)}switch(a){case"input":us(o,i);break;case"textarea":Yu(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?mr(o,!!i.multiple,w,!1):f!==!!i.multiple&&(i.defaultValue!=null?mr(o,!!i.multiple,i.defaultValue,!0):mr(o,!!i.multiple,i.multiple?[]:"",!1))}o[ko]=i}catch(k){me(e,e.return,k)}}break;case 6:if(zt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){me(e,e.return,k)}}break;case 3:if(zt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(t.containerInfo)}catch(k){me(e,e.return,k)}break;case 4:zt(t,e),Rt(e);break;case 13:zt(t,e),Rt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ua=xe())),r&4&&nu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(h=Ie)||p,zt(t,e),Ie=h):zt(t,e),Rt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!p&&e.mode&1)for($=e,p=e.child;p!==null;){for(m=$=p;$!==null;){switch(f=$,w=f.child,f.tag){case 0:case 11:case 14:case 15:lo(4,f,f.return);break;case 1:pr(f,f.return);var b=f.stateNode;if(typeof b.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(k){me(r,n,k)}}break;case 5:pr(f,f.return);break;case 22:if(f.memoizedState!==null){ou(m);continue}}w!==null?(w.return=f,$=w):ou(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,h?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,c=m.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Ju("display",l))}catch(k){me(e,e.return,k)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(k){me(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:zt(t,e),Rt(e),r&4&&nu(e);break;case 21:break;default:zt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sf(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(fo(o,""),r.flags&=-33);var i=tu(e);Ws(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=tu(e);Ks(e,a,l);break;default:throw Error(_(161))}}catch(c){me(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function am(e,t,n){$=e,Ef(e)}function Ef(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||ai;if(!l){var a=o.alternate,c=a!==null&&a.memoizedState!==null||Ie;a=ai;var h=Ie;if(ai=l,(Ie=c)&&!h)for($=o;$!==null;)l=$,c=l.child,l.tag===22&&l.memoizedState!==null?iu(o):c!==null?(c.return=l,$=c):iu(o);for(;i!==null;)$=i,Ef(i),i=i.sibling;$=o,ai=a,Ie=h}ru(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):ru(e)}}function ru(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:_t(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Bc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&go(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ie||t.flags&512&&Hs(t)}catch(f){me(t,t.return,f)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function ou(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function iu(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(c){me(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){me(t,o,c)}}var i=t.return;try{Hs(t)}catch(c){me(t,i,c)}break;case 5:var l=t.return;try{Hs(t)}catch(c){me(t,l,c)}}}catch(c){me(t,t.return,c)}if(t===e){$=null;break}var a=t.sibling;if(a!==null){a.return=t.return,$=a;break}$=t.return}}var cm=Math.ceil,Vi=rn.ReactCurrentDispatcher,Fa=rn.ReactCurrentOwner,jt=rn.ReactCurrentBatchConfig,J=0,ze=null,ve=null,De=0,ut=0,hr=Nn(0),je=0,Eo=null,Yn=0,pl=0,Ba=0,so=null,nt=null,Ua=0,zr=1/0,Qt=null,Qi=!1,Vs=null,vn=null,ci=!1,pn=null,Yi=0,ao=0,Qs=null,ji=-1,Si=0;function Qe(){return J&6?xe():ji!==-1?ji:ji=xe()}function wn(e){return e.mode&1?J&2&&De!==0?De&-De:Vh.transition!==null?(Si===0&&(Si=ud()),Si):(e=q,e!==0||(e=window.event,e=e===void 0?16:xd(e.type)),e):1}function Pt(e,t,n,r){if(50<ao)throw ao=0,Qs=null,Error(_(185));Lo(e,n,r),(!(J&2)||e!==ze)&&(e===ze&&(!(J&2)&&(pl|=n),je===4&&dn(e,De)),lt(e,r),n===1&&J===0&&!(t.mode&1)&&(zr=xe()+500,cl&&Cn()))}function lt(e,t){var n=e.callbackNode;Vp(e,t);var r=Li(e,e===ze?De:0);if(r===0)n!==null&&hc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hc(n),t===1)e.tag===0?Wh(lu.bind(null,e)):Rd(lu.bind(null,e)),Bh(function(){!(J&6)&&Cn()}),n=null;else{switch(dd(r)){case 1:n=ha;break;case 4:n=ad;break;case 16:n=Di;break;case 536870912:n=cd;break;default:n=Di}n=Of(n,zf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zf(e,t){if(ji=-1,Si=0,J&6)throw Error(_(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=Li(e,e===ze?De:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xi(e,r);else{t=r;var o=J;J|=2;var i=Df();(ze!==e||De!==t)&&(Qt=null,zr=xe()+500,An(e,t));do try{fm();break}catch(a){_f(e,a)}while(!0);Ea(),Vi.current=i,J=o,ve!==null?t=0:(ze=null,De=0,t=je)}if(t!==0){if(t===2&&(o=ws(e),o!==0&&(r=o,t=Ys(e,o))),t===1)throw n=Eo,An(e,0),dn(e,r),lt(e,xe()),n;if(t===6)dn(e,r);else{if(o=e.current.alternate,!(r&30)&&!um(o)&&(t=Xi(e,r),t===2&&(i=ws(e),i!==0&&(r=i,t=Ys(e,i))),t===1))throw n=Eo,An(e,0),dn(e,r),lt(e,xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:On(e,nt,Qt);break;case 3:if(dn(e,r),(r&130023424)===r&&(t=Ua+500-xe(),10<t)){if(Li(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=zs(On.bind(null,e,nt,Qt),t);break}On(e,nt,Qt);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Tt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cm(r/1960))-r,10<r){e.timeoutHandle=zs(On.bind(null,e,nt,Qt),r);break}On(e,nt,Qt);break;case 5:On(e,nt,Qt);break;default:throw Error(_(329))}}}return lt(e,xe()),e.callbackNode===n?zf.bind(null,e):null}function Ys(e,t){var n=so;return e.current.memoizedState.isDehydrated&&(An(e,t).flags|=256),e=Xi(e,t),e!==2&&(t=nt,nt=n,t!==null&&Xs(t)),e}function Xs(e){nt===null?nt=e:nt.push.apply(nt,e)}function um(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Mt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dn(e,t){for(t&=~Ba,t&=~pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function lu(e){if(J&6)throw Error(_(327));wr();var t=Li(e,0);if(!(t&1))return lt(e,xe()),null;var n=Xi(e,t);if(e.tag!==0&&n===2){var r=ws(e);r!==0&&(t=r,n=Ys(e,r))}if(n===1)throw n=Eo,An(e,0),dn(e,t),lt(e,xe()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,nt,Qt),lt(e,xe()),null}function Ha(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(zr=xe()+500,cl&&Cn())}}function Xn(e){pn!==null&&pn.tag===0&&!(J&6)&&wr();var t=J;J|=1;var n=jt.transition,r=q;try{if(jt.transition=null,q=1,e)return e()}finally{q=r,jt.transition=n,J=t,!(J&6)&&Cn()}}function Ka(){ut=hr.current,se(hr)}function An(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fh(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(Sa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ri();break;case 3:Cr(),se(ot),se(Be),Pa();break;case 5:Ta(r);break;case 4:Cr();break;case 13:se(fe);break;case 19:se(fe);break;case 10:za(r.type._context);break;case 22:case 23:Ka()}n=n.return}if(ze=e,ve=e=kn(e.current,null),De=ut=t,je=0,Eo=null,Ba=pl=Yn=0,nt=so=null,$n!==null){for(t=0;t<$n.length;t++)if(n=$n[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}$n=null}return e}function _f(e,t){do{var n=ve;try{if(Ea(),wi.current=Wi,Ki){for(var r=pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ki=!1}if(Qn=0,Ee=be=pe=null,io=!1,So=0,Fa.current=null,n===null||n.return===null){je=1,Eo=t,ve=null;break}e:{var i=e,l=n.return,a=n,c=t;if(t=De,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,p=a,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=Qc(l);if(w!==null){w.flags&=-257,Yc(w,l,a,i,t),w.mode&1&&Vc(i,h,t),t=w,c=h;var b=t.updateQueue;if(b===null){var k=new Set;k.add(c),t.updateQueue=k}else b.add(c);break e}else{if(!(t&1)){Vc(i,h,t),Wa();break e}c=Error(_(426))}}else if(de&&a.mode&1){var L=Qc(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Yc(L,l,a,i,t),Na(Er(c,a));break e}}i=c=Er(c,a),je!==4&&(je=2),so===null?so=[i]:so.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=ff(i,c,t);Fc(i,g);break e;case 1:a=c;var d=i.type,u=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(vn===null||!vn.has(u)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=pf(i,a,t);Fc(i,v);break e}}i=i.return}while(i!==null)}Tf(n)}catch(j){t=j,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function Df(){var e=Vi.current;return Vi.current=Wi,e===null?Wi:e}function Wa(){(je===0||je===3||je===2)&&(je=4),ze===null||!(Yn&268435455)&&!(pl&268435455)||dn(ze,De)}function Xi(e,t){var n=J;J|=2;var r=Df();(ze!==e||De!==t)&&(Qt=null,An(e,t));do try{dm();break}catch(o){_f(e,o)}while(!0);if(Ea(),J=n,Vi.current=r,ve!==null)throw Error(_(261));return ze=null,De=0,je}function dm(){for(;ve!==null;)Lf(ve)}function fm(){for(;ve!==null&&!$p();)Lf(ve)}function Lf(e){var t=Mf(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?Tf(e):ve=t,Fa.current=null}function Tf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=im(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,ve=null;return}}else if(n=om(n,t,ut),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);je===0&&(je=5)}function On(e,t,n){var r=q,o=jt.transition;try{jt.transition=null,q=1,pm(e,t,n,r)}finally{jt.transition=o,q=r}return null}function pm(e,t,n,r){do wr();while(pn!==null);if(J&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Qp(e,i),e===ze&&(ve=ze=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ci||(ci=!0,Of(Di,function(){return wr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=jt.transition,jt.transition=null;var l=q;q=1;var a=J;J|=4,Fa.current=null,sm(e,n),Cf(n,e),Ph(Cs),Ti=!!Ns,Cs=Ns=null,e.current=n,am(n),Ip(),J=a,q=l,jt.transition=i}else e.current=n;if(ci&&(ci=!1,pn=e,Yi=o),i=e.pendingLanes,i===0&&(vn=null),Bp(n.stateNode),lt(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Qi)throw Qi=!1,e=Vs,Vs=null,e;return Yi&1&&e.tag!==0&&wr(),i=e.pendingLanes,i&1?e===Qs?ao++:(ao=0,Qs=e):ao=0,Cn(),null}function wr(){if(pn!==null){var e=dd(Yi),t=jt.transition,n=q;try{if(jt.transition=null,q=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,Yi=0,J&6)throw Error(_(331));var o=J;for(J|=4,$=e.current;$!==null;){var i=$,l=i.child;if($.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var h=a[c];for($=h;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:lo(8,p,i)}var m=p.child;if(m!==null)m.return=p,$=m;else for(;$!==null;){p=$;var f=p.sibling,w=p.return;if(jf(p),p===h){$=null;break}if(f!==null){f.return=w,$=f;break}$=w}}}var b=i.alternate;if(b!==null){var k=b.child;if(k!==null){b.child=null;do{var L=k.sibling;k.sibling=null,k=L}while(k!==null)}}$=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,$=l;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:lo(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,$=g;break e}$=i.return}}var d=e.current;for($=d;$!==null;){l=$;var u=l.child;if(l.subtreeFlags&2064&&u!==null)u.return=l,$=u;else e:for(l=d;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fl(9,a)}}catch(j){me(a,a.return,j)}if(a===l){$=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,$=v;break e}$=a.return}}if(J=o,Cn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(ol,e)}catch{}r=!0}return r}finally{q=n,jt.transition=t}}return!1}function su(e,t,n){t=Er(n,t),t=ff(e,t,1),e=yn(e,t,1),t=Qe(),e!==null&&(Lo(e,1,t),lt(e,t))}function me(e,t,n){if(e.tag===3)su(e,e,n);else for(;t!==null;){if(t.tag===3){su(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=Er(n,e),e=pf(t,e,1),t=yn(t,e,1),e=Qe(),t!==null&&(Lo(t,1,e),lt(t,e));break}}t=t.return}}function hm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(De&n)===n&&(je===4||je===3&&(De&130023424)===De&&500>xe()-Ua?An(e,0):Ba|=n),lt(e,t)}function Pf(e,t){t===0&&(e.mode&1?(t=qo,qo<<=1,!(qo&130023424)&&(qo=4194304)):t=1);var n=Qe();e=tn(e,t),e!==null&&(Lo(e,t,n),lt(e,n))}function mm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pf(e,n)}function gm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Pf(e,n)}var Mf;Mf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return rt=!1,rm(e,t,n);rt=!!(e.flags&131072)}else rt=!1,de&&t.flags&1048576&&$d(t,Ai,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bi(e,t),e=t.pendingProps;var o=jr(t,Be.current);vr(t,n),o=Oa(null,t,r,e,o,n);var i=Ra();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(i=!0,$i(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Da(t),o.updater=dl,t.stateNode=o,o._reactInternals=t,Os(t,r,e,n),t=Is(null,t,r,!0,i,n)):(t.tag=0,de&&i&&ja(t),Ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=ym(r),e=_t(r,e),o){case 0:t=$s(null,t,r,e,n);break e;case 1:t=Jc(null,t,r,e,n);break e;case 11:t=Xc(null,t,r,e,n);break e;case 14:t=Gc(null,t,r,_t(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),$s(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),Jc(e,t,r,o,n);case 3:e:{if(xf(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Hd(e,t),Ui(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Er(Error(_(423)),t),t=Zc(e,t,r,n,o);break e}else if(r!==o){o=Er(Error(_(424)),t),t=Zc(e,t,r,n,o);break e}else for(dt=xn(t.stateNode.containerInfo.firstChild),ft=t,de=!0,Lt=null,n=Bd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===o){t=nn(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return Kd(t),e===null&&Ts(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Es(r,o)?l=null:i!==null&&Es(r,i)&&(t.flags|=32),gf(e,t),Ve(e,t,l,n),t.child;case 6:return e===null&&Ts(t),null;case 13:return yf(e,t,n);case 4:return La(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nr(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),Xc(e,t,r,o,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,oe(Fi,r._currentValue),r._currentValue=l,i!==null)if(Mt(i.value,l)){if(i.children===o.children&&!ot.current){t=nn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Zt(-1,n&-n),c.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?c.next=c:(c.next=p.next,p.next=c),h.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ps(i.return,n,t),a.lanes|=n;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ps(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,vr(t,n),o=St(o),r=r(o),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,o=_t(r,t.pendingProps),o=_t(r.type,o),Gc(e,t,r,o,n);case 15:return hf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),bi(e,t),t.tag=1,it(r)?(e=!0,$i(t)):e=!1,vr(t,n),df(t,r,o),Os(t,r,o,n),Is(null,t,r,!0,e,n);case 19:return vf(e,t,n);case 22:return mf(e,t,n)}throw Error(_(156,t.tag))};function Of(e,t){return sd(e,t)}function xm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,n,r){return new xm(e,t,n,r)}function Va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ym(e){if(typeof e=="function")return Va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===da)return 11;if(e===fa)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ni(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Va(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case or:return Fn(n.children,o,i,t);case ua:l=8,o|=8;break;case is:return e=bt(12,n,t,o|2),e.elementType=is,e.lanes=i,e;case ls:return e=bt(13,n,t,o),e.elementType=ls,e.lanes=i,e;case ss:return e=bt(19,n,t,o),e.elementType=ss,e.lanes=i,e;case Ku:return hl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uu:l=10;break e;case Hu:l=9;break e;case da:l=11;break e;case fa:l=14;break e;case an:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=bt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Fn(e,t,n,r){return e=bt(7,e,r,t),e.lanes=n,e}function hl(e,t,n,r){return e=bt(22,e,r,t),e.elementType=Ku,e.lanes=n,e.stateNode={isHidden:!1},e}function Gl(e,t,n){return e=bt(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qa(e,t,n,r,o,i,l,a,c){return e=new vm(e,t,n,a,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=bt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Da(i),e}function wm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rf(e){if(!e)return jn;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(it(n))return Od(e,n,t)}return t}function $f(e,t,n,r,o,i,l,a,c){return e=Qa(n,r,!0,e,o,i,l,a,c),e.context=Rf(null),n=e.current,r=Qe(),o=wn(n),i=Zt(r,o),i.callback=t??null,yn(n,i,o),e.current.lanes=o,Lo(e,o,r),lt(e,r),e}function ml(e,t,n,r){var o=t.current,i=Qe(),l=wn(o);return n=Rf(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yn(o,t,l),e!==null&&(Pt(e,o,l,i),vi(e,o,l)),l}function Gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function au(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ya(e,t){au(e,t),(e=e.alternate)&&au(e,t)}function km(){return null}var If=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xa(e){this._internalRoot=e}gl.prototype.render=Xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));ml(e,t,null,null)};gl.prototype.unmount=Xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xn(function(){ml(null,e,null,null)}),t[en]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=hd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&gd(e)}};function Ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cu(){}function bm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var h=Gi(l);i.call(h)}}var l=$f(t,r,e,0,null,!1,!1,"",cu);return e._reactRootContainer=l,e[en]=l.current,vo(e.nodeType===8?e.parentNode:e),Xn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var h=Gi(c);a.call(h)}}var c=Qa(e,0,!1,null,null,!1,!1,"",cu);return e._reactRootContainer=c,e[en]=c.current,vo(e.nodeType===8?e.parentNode:e),Xn(function(){ml(t,c,n,r)}),c}function yl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var c=Gi(l);a.call(c)}}ml(t,l,e,o)}else l=bm(n,t,e,o,r);return Gi(l)}fd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jr(t.pendingLanes);n!==0&&(ma(t,n|1),lt(t,xe()),!(J&6)&&(zr=xe()+500,Cn()))}break;case 13:Xn(function(){var r=tn(e,1);if(r!==null){var o=Qe();Pt(r,e,1,o)}}),Ya(e,1)}};ga=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=Qe();Pt(t,e,134217728,n)}Ya(e,134217728)}};pd=function(e){if(e.tag===13){var t=wn(e),n=tn(e,t);if(n!==null){var r=Qe();Pt(n,e,t,r)}Ya(e,t)}};hd=function(){return q};md=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};xs=function(e,t,n){switch(t){case"input":if(us(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=al(r);if(!o)throw Error(_(90));Vu(r),us(r,o)}}}break;case"textarea":Yu(e,n);break;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}};td=Ha;nd=Xn;var jm={usingClientEntryPoint:!1,Events:[Po,ar,al,qu,ed,Ha]},Qr={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sm={bundleType:Qr.bundleType,version:Qr.version,rendererPackageName:Qr.rendererPackageName,rendererConfig:Qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=id(e),e===null?null:e.stateNode},findFiberByHostInstance:Qr.findFiberByHostInstance||km,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ui.isDisabled&&ui.supportsFiber)try{ol=ui.inject(Sm),At=ui}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jm;ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ga(t))throw Error(_(200));return wm(e,t,null,n)};ht.createRoot=function(e,t){if(!Ga(e))throw Error(_(299));var n=!1,r="",o=If;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qa(e,1,!1,null,null,n,!1,r,o),e[en]=t.current,vo(e.nodeType===8?e.parentNode:e),new Xa(t)};ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=id(t),e=e===null?null:e.stateNode,e};ht.flushSync=function(e){return Xn(e)};ht.hydrate=function(e,t,n){if(!xl(t))throw Error(_(200));return yl(null,e,t,!0,n)};ht.hydrateRoot=function(e,t,n){if(!Ga(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=If;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=$f(t,null,e,1,n??null,o,!1,i,l),e[en]=t.current,vo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new gl(t)};ht.render=function(e,t,n){if(!xl(t))throw Error(_(200));return yl(null,e,t,!1,n)};ht.unmountComponentAtNode=function(e){if(!xl(e))throw Error(_(40));return e._reactRootContainer?(Xn(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};ht.unstable_batchedUpdates=Ha;ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xl(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return yl(e,t,n,!1,r)};ht.version="18.3.1-next-f1338f8080-20240426";function Af(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af)}catch(e){console.error(e)}}Af(),Iu.exports=ht;var Nm=Iu.exports,Ff,uu=Nm;Ff=uu.createRoot,uu.hydrateRoot;const Cm="modulepreload",Em=function(e,t){return new URL(e,t).href},du={},Tr=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(h=>{if(h=Em(h,r),h in du)return;du[h]=!0;const p=h.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(!!r)for(let b=l.length-1;b>=0;b--){const k=l[b];if(k.href===h&&(!p||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${m}`))return;const w=document.createElement("link");if(w.rel=p?"stylesheet":Cm,p||(w.as="script"),w.crossOrigin="",w.href=h,c&&w.setAttribute("nonce",c),document.head.appendChild(w),p)return new Promise((b,k)=>{w.addEventListener("load",b),w.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};function zm(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:l}=e;let a,c;const h=async(m=!0)=>{await c};async function p(){if("serviceWorker"in navigator){if(a=await Tr(async()=>{const{Workbox:m}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:m}},[],import.meta.url).then(({Workbox:m})=>new m("./sw.js",{scope:"./",type:"classic"})).catch(m=>{l==null||l(m)}),!a)return;a.addEventListener("activated",m=>{(m.isUpdate||m.isExternal)&&window.location.reload()}),a.addEventListener("installed",m=>{m.isUpdate||r==null||r()}),a.register({immediate:t}).then(m=>{i?i("./sw.js",m):o==null||o(m)}).catch(m=>{l==null||l(m)})}}return c=p(),h}const Gs=(e,t)=>t.some(n=>e instanceof n);let fu,pu;function _m(){return fu||(fu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dm(){return pu||(pu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Js=new WeakMap,Zl=new WeakMap,vl=new WeakMap;function Lm(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",l)},i=()=>{n(Bn(e.result)),o()},l=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",l)});return vl.set(t,e),t}function Tm(e){if(Js.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",l),e.removeEventListener("abort",l)},i=()=>{n(),o()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",l),e.addEventListener("abort",l)});Js.set(e,t)}let Zs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Js.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Bf(e){Zs=e(Zs)}function Pm(e){return Dm().includes(e)?function(...t){return e.apply(qs(this),t),Bn(this.request)}:function(...t){return Bn(e.apply(qs(this),t))}}function Mm(e){return typeof e=="function"?Pm(e):(e instanceof IDBTransaction&&Tm(e),Gs(e,_m())?new Proxy(e,Zs):e)}function Bn(e){if(e instanceof IDBRequest)return Lm(e);if(Zl.has(e))return Zl.get(e);const t=Mm(e);return t!==e&&(Zl.set(e,t),vl.set(t,e)),t}const qs=e=>vl.get(e);function Om(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const l=indexedDB.open(e,t),a=Bn(l);return r&&l.addEventListener("upgradeneeded",c=>{r(Bn(l.result),c.oldVersion,c.newVersion,Bn(l.transaction),c)}),n&&l.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),o&&c.addEventListener("versionchange",h=>o(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const Rm=["get","getKey","getAll","getAllKeys","count"],$m=["put","add","delete","clear"],ql=new Map;function hu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ql.get(t))return ql.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=$m.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Rm.includes(n)))return;const i=async function(l,...a){const c=this.transaction(l,o?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),o&&c.done]))[0]};return ql.set(t,i),i}Bf(e=>({...e,get:(t,n,r)=>hu(t,n)||e.get(t,n,r),has:(t,n)=>!!hu(t,n)||e.has(t,n)}));const Im=["continue","continuePrimaryKey","advance"],mu={},ea=new WeakMap,Uf=new WeakMap,Am={get(e,t){if(!Im.includes(t))return e[t];let n=mu[t];return n||(n=mu[t]=function(...r){ea.set(this,Uf.get(this)[t](...r))}),n}};async function*Fm(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const n=new Proxy(t,Am);for(Uf.set(n,t),vl.set(n,qs(t));t;)yield n,t=await(ea.get(n)||t.continue()),ea.delete(n)}function gu(e,t){return t===Symbol.asyncIterator&&Gs(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&Gs(e,[IDBIndex,IDBObjectStore])}Bf(e=>({...e,get(t,n,r){return gu(t,n)?Fm:e.get(t,n,r)},has(t,n){return gu(t,n)||e.has(t,n)}}));const Bm="nachumin-diary",Um=1,Ji="kv",Hm="line-diary-entries-v1",Jt="rooms-v1",Ae=e=>`room-data-v1:${e}`,Km=e=>`trash-v1:${e}:${Date.now()}`,Ci="declaration-v1",zo="marks-v1",Wm=["・","❤︎","🩷","💛","🩵","💜","✨","✔︎"],Un=e=>`donelog-v1:${e}`,Hn=e=>`habits-v1:${e}`,Zi=e=>`habitlog-v1:${e}`,qi=e=>`habitseed-v1:${e}`,_o=e=>`period-v1:${e}`,Kn=e=>`symptoms-v1:${e}`,co=e=>`symptomlog-v1:${e}`,el=e=>`symptomseed-v1:${e}`,es="backup-v1",ke="diary-main",Hf=Om(Bm,Um,{upgrade(e){e.objectStoreNames.contains(Ji)||e.createObjectStore(Ji)}});async function W(e){return(await Hf).get(Ji,e)}async function Q(e,t){return(await Hf).put(Ji,t,e)}async function Vm(){try{navigator.storage&&navigator.storage.persist&&await navigator.storage.persist()}catch{}}async function Qm(){const e=await W(Jt);if(e)return e;let t=await W(Hm);if(typeof t=="string")try{t=JSON.parse(t)}catch{t=null}const n=t&&typeof t=="object"?t:{};await Q(Ae(ke),n);const r=Object.keys(n).sort(),o=r[r.length-1],i=[{id:ke,type:"diary",name:"日記",emoji:"💗",createdAt:Date.now(),lastAt:o?Date.now():0,preview:o?n[o].text.split(`
`)[0].slice(0,40):""}];return await Q(Jt,i),i}const Ym=5,Xm=Ym*60*60*1e3,Kf=()=>new Date(Date.now()-Xm),Fe=e=>String(e).padStart(2,"0"),kt=e=>`${e.getFullYear()}-${Fe(e.getMonth()+1)}-${Fe(e.getDate())}`,ue=e=>e.split("-").join("/"),Se=e=>{const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},ta=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Gm=["S","M","T","W","T","F","S"],na=e=>`${ue(e)} ${ta[Se(e).getDay()]}`,di=(e,t,n)=>1+(8-new Date(e,t-1,1).getDay())%7+(n-1)*7,Jm=e=>Math.floor(20.8431+.242194*(e-1980)-Math.floor((e-1980)/4)),Zm=e=>Math.floor(23.2488+.242194*(e-1980)-Math.floor((e-1980)/4)),ts={};function qm(e){if(ts[e])return ts[e];const t={},n=(r,o,i)=>{t[`${e}-${Fe(r)}-${Fe(o)}`]=i};n(1,1,"元日"),n(1,di(e,1,2),"成人の日"),n(2,11,"建国記念の日"),n(2,23,"天皇誕生日"),n(3,Jm(e),"春分の日"),n(4,29,"昭和の日"),n(5,3,"憲法記念日"),n(5,4,"みどりの日"),n(5,5,"こどもの日"),n(7,di(e,7,3),"海の日"),n(8,11,"山の日"),n(9,di(e,9,3),"敬老の日"),n(9,Zm(e),"秋分の日"),n(10,di(e,10,2),"スポーツの日"),n(11,3,"文化の日"),n(11,23,"勤労感謝の日");for(const r of Object.keys(t)){const o=Se(r),i=new Date(o);i.setDate(i.getDate()+1);const l=new Date(o);l.setDate(l.getDate()+2),t[kt(l)]&&!t[kt(i)]&&i.getDay()!==0&&(t[kt(i)]="国民の休日")}for(const r of Object.keys({...t})){if(Se(r).getDay()!==0)continue;const o=Se(r);do o.setDate(o.getDate()+1);while(t[kt(o)]);t[kt(o)]="振替休日"}return ts[e]=t,t}const eg=e=>!!qm(Number(e.slice(0,4)))[e],tl=e=>{if(eg(e))return"sun";const t=Se(e).getDay();return t===0?"sun":t===6?"sat":""},Og=e=>"¥"+Math.round(Number(e)||0).toLocaleString("ja-JP"),Rg=e=>e.slice(0,7),$g=(e,t)=>{const[n,r]=e.split("-");return(t&&Number(n)===t?"":`${n}年`)+`${Number(r)}月`},tt=()=>kt(Kf()),xu=()=>{const e=Kf();return e.setDate(e.getDate()-1),kt(e)},Wf=()=>{const e=new Date;return`${e.getHours()}:${Fe(e.getMinutes())}`},Vf=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),tg=e=>String(e||"").replace(/[\/\\:*?"<>| -]/g,"_").replace(/\s+/g," ").trim()||"room";async function yu(e){try{return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.top="0",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}const Ce=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36),ng=e=>Object.keys(e).sort().map(t=>`🩷${na(t)}🩷 ${e[t].time}
${e[t].text}`).join(`

──────────

`),rg=e=>{const t={},n=e.split(/\n*─{3,}\n*/);for(const r of n){const o=r.trim();if(!o)continue;const i=o.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*(?:[（(]?(?:[A-Za-z]{3}|[日月火水木金土])[)）]?)?\s*🩷?\s*(\d{1,2}:\d{2})?\s*\n?([\s\S]*)$/u);if(!i)continue;const l=`${i[1]}-${Fe(Number(i[2]))}-${Fe(Number(i[3]))}`,a=i[5].trim();a&&(t[l]={text:a,time:i[4]||"0:00"})}return t},Ig=(e,t)=>{const n=[];let r="";for(const o of e)o.dateKey!==r&&(r=o.dateKey,n.length&&n.push(""),n.push(`🩷${ue(r)}🩷`)),n.push(`${o.time?o.time+" ":""}${t(o.memberId)}「${o.text}」`);return n.join(`
`)},Ag=e=>{const t=[];let n=tt(),r=null;const o=()=>{if(!r)return;let i=r.lines.join(`
`).trim();i.endsWith("」")&&(i=i.slice(0,-1)),i&&t.push({dateKey:r.dateKey,name:r.name,time:r.time,text:i}),r=null};for(const i of e.split(`
`)){const l=i.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(l){o(),n=`${l[1]}-${Fe(Number(l[2]))}-${Fe(Number(l[3]))}`;continue}if(r)r.lines.push(i);else{const c=i.match(/^(?:(\d{1,2}:\d{2})\s+)?(.+?)「([\s\S]*)$/u);if(!c)continue;r={dateKey:n,name:c[2].trim(),time:c[1]||"",lines:[c[3]]}}const a=r.lines[r.lines.length-1].trimEnd();a.endsWith("」")&&(r.lines[r.lines.length-1]=a,o())}return o(),t},og=[{key:"morning",label:"朝",emoji:"🌅"},{key:"noon",label:"昼",emoji:"☀️"},{key:"night",label:"夜",emoji:"🌙"}],Fg=()=>{const e=new Date().getHours();return e>=5&&e<11?"morning":e>=11&&e<17?"noon":"night"},Bg=(e,t)=>{var i;const n=l=>{var a;return((a=t.find(c=>c.id===l))==null?void 0:a.name)||"？"},r={};for(const l of e)(r[i=l.dateKey]||(r[i]={morning:[],noon:[],night:[]}))[l.slot].push(l);const o=[];for(const l of Object.keys(r).sort()){const a=[];for(const c of og){const h=r[l][c.key];if(!h.length)continue;const p=h.map(m=>n(m.memberId)+(m.memo&&m.memo.trim()?`(${m.memo.trim()})`:"")).join("・");a.push(`${c.emoji}${c.label}:${p}`)}a.length&&o.push(`🩷${ue(l)}🩷 ${a.join(" / ")}`)}return o.join(`
`)},Ug=e=>{const t=[],n=r=>r.includes("朝")?"morning":r.includes("昼")?"noon":r.includes("夜")?"night":null;for(const r of e.split(`
`)){const o=r.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(.*)$/u);if(!o)continue;const i=`${o[1]}-${Fe(Number(o[2]))}-${Fe(Number(o[3]))}`,l=o[4];if(l.trim())for(const a of l.split("/")){const c=a.indexOf(":"),h=a.indexOf("："),p=c===-1?h:h===-1?c:Math.min(c,h);if(p===-1)continue;const m=n(a.slice(0,p));if(!m)continue;const f=a.slice(p+1);for(const w of f.split("・")){const b=w.trim().match(/^(.+?)(?:[(（]([\s\S]*)[)）])?$/u);if(!b)continue;const k=b[1].trim();k&&t.push({dateKey:i,slot:m,name:k,memo:(b[2]||"").trim()})}}}return t},Hg=e=>{var n;const t={};for(const r of e)(t[n=r.dateKey]||(t[n]={morning:[],noon:[],night:[]}))[r.slot].push(r);return t},Kg=(e,t)=>{let n=t;for(const l of e)l.dateKey<n&&(n=l.dateKey);Se(t);const r=Se(t);r.setDate(r.getDate()-34);const o=Se(n)<r?Se(n):r,i=[];for(let l=new Date(o);kt(l)<=t;l.setDate(l.getDate()+1))i.push(kt(l));return i},Wg=e=>{const t=[];for(const n of String(e||"").split(`
`)){let r=n.trim();r&&(/^🩷?\s*\d{4}[/-]\d{1,2}[/-]\d{1,2}\s*🩷?\s*$/u.test(r)||(r=r.replace(/^[★☆☐☑✓□■●○・\-*+•‣▪️\s]+/u,"").trim(),r&&t.push(r)))}return t},Vg=e=>{const t=[];let n=tt();for(const r of e.split(`
`)){const o=r.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(o){n=`${o[1]}-${Fe(Number(o[2]))}-${Fe(Number(o[3]))}`;continue}const i=r.match(/^\s*(★\s*)?([☑☐✓])\s+(.+)$/u);if(!i)continue;const l=!!i[1],a=i[2]==="☑"||i[2]==="✓",c=i[3].trim();c&&t.push({dateKey:n,text:c,done:a,important:l})}return t},Qf="🩷 できたこと",ig=e=>{const t=(e||"").split(`
`),n=t.indexOf(Qf);if(n===-1)return{text:e||"",items:[]};const r=[];let o=n+1;for(;o<t.length&&t[o].startsWith("☑ ");){const a=t[o].match(/^☑ (.*?)(?: \((\d{1,2}:\d{2})\))?$/u);a&&r.push({text:a[1],time:a[2]||""}),o++}let i=n;return i-1>=0&&t[i-1]===""&&(i-=1),t.splice(i,o-i),{text:t.join(`
`).replace(/\n{3,}/g,`

`).replace(/\s+$/,""),items:r}},nl="🎬 今日のコマ: ",lg=e=>(e||"").split(`
`).filter(t=>!t.startsWith(nl)).join(`
`).replace(/^\n+/,""),sg=(e,t)=>{const n=lg(e).trim(),r=nl+t;return n?`${r}

${n}`:r},Ja=(e,t)=>{const n=Se(e);return n.setDate(n.getDate()+t),kt(n)},kr=(e,t)=>Math.round((Se(t)-Se(e))/864e5),ag=e=>{const t=[...new Set(e||[])].sort();if(!t.length)return[];const n=[];for(const o of t){const i=n[n.length-1];i&&Ja(i.end,1)===o?i.end=o:n.push({start:o,end:o})}return n.map((o,i)=>({start:o.start,end:o.end,length:kr(o.start,o.end)+1,cycle:i<n.length-1?kr(o.start,n[i+1].start):null,ongoing:i===n.length-1})).reverse()},cg=(e,t,n=3)=>{const r=e.filter(c=>c.cycle!=null).map(c=>c.cycle);if(!r.length||!e.length)return null;const o=r.slice(0,n),i=Math.round(o.reduce((c,h)=>c+h,0)/o.length),l=e[0].start,a=Ja(l,i);return{next:a,avg:i,daysLeft:kr(t,a),min:Math.min(...r),max:Math.max(...r),count:r.length}},ug={morning:"🌅",noon:"☀️",night:"🌙"},fi="nachumin-diary-backup.json";function dg(e){if(!e||typeof e!="object"||Array.isArray(e))return"バックアップの形式が読めませんでした 🥺";if(e.app!=="nachumin-diary")return"これは Nachumin Lifelog のバックアップファイルではないみたい 🥺";if(!Array.isArray(e.rooms))return"ルームの情報が入っていません。ファイルが壊れているかも 🥺";if(e.rooms.some(t=>!t||typeof t!="object"||!t.id||!t.type))return"ルームの形式が壊れています 🥺";if(e.data!=null&&(typeof e.data!="object"||Array.isArray(e.data)))return"ルームの中身の形式が壊れています 🥺";for(const t of["doneLogs","habits","habitLogs","habitSeeds","periods","symptoms","symptomLogs","symptomSeeds"])if(e[t]!=null&&(typeof e[t]!="object"||Array.isArray(e[t])))return`${t} の形式が壊れています 🥺`;return null}function fg(e){const t={rooms:(e.rooms||[]).length,items:0},n=r=>r==="talk"?"messages":r==="todo"?"todos":r==="darelog"?"records":r==="expense"?"expenses":r==="challenge"?"challenges":null;for(const r of e.rooms||[]){const o=e.data?e.data[r.id]:void 0;if(!o)continue;const i=n(r.type);t.items+=i?(o[i]||[]).length:Object.keys(o).length}return t}function ns(e,t){var i,l;if(e.type==="talk"){const a=t&&t.messages||[],c=a[a.length-1];return{previewName:c?(p=>{var m;return((m=(e.members||[]).find(f=>f.id===p))==null?void 0:m.name)||""})(c.memberId):"",preview:typeof(c==null?void 0:c.text)=="string"?c.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(c?Date.now():0)}}if(e.type==="todo"){const a=t&&t.todos||[],c=a[a.length-1];return{preview:typeof(c==null?void 0:c.text)=="string"?`${c.done?"☑":"☐"} ${c.text.split(`
`)[0]}`.slice(0,40):"",todoOpen:a.filter(h=>!h.done&&!h.deferred).length,lastAt:e.lastAt||(c?Date.now():0)}}if(e.type==="darelog"){const a=t&&t.records||[],c=a[a.length-1],h=p=>{var m;return((m=(e.members||[]).find(f=>f.id===p))==null?void 0:m.name)||""};return{preview:c?`${ug[c.slot]||""} ${h(c.memberId)}`.trim():"",lastAt:e.lastAt||(c?Date.now():0)}}if(e.type==="challenge"){const a=t&&t.challenges||[],c=[...a].sort((h,p)=>{var m,f;return(((m=p.records)==null?void 0:m.length)||0)-(((f=h.records)==null?void 0:f.length)||0)})[0];return{preview:c?`${c.emoji||"🏁"} ${c.name} ${((i=c.records)==null?void 0:i.length)||0}/${c.target}`:"",lastAt:e.lastAt||(a.length?Date.now():0)}}if(e.type==="expense"){const a=t&&t.expenses||[],c=a[a.length-1];return{preview:c?`${(p=>{var m;return((m=(e.categories||[]).find(f=>f.id===p))==null?void 0:m.name)||""})(c.categoryId)} ¥${(c.amount||0).toLocaleString("ja-JP")}`:"",lastAt:e.lastAt||(c?Date.now():0)}}const n=t&&typeof t=="object"?t:{},r=Object.keys(n).sort(),o=r[r.length-1];return{preview:typeof((l=n[o])==null?void 0:l.text)=="string"?n[o].text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(o?Date.now():0)}}async function vu(){const e=await W(Jt)||[],t={};for(const f of e){const w=await W(Ae(f.id));w!==void 0&&(t[f.id]=w)}const n=await W(Ci)||null,r={},o={},i={},l={},a={},c={},h={},p={};for(const f of e){const w=await W(Un(f.id));w&&Object.keys(w).length&&(r[f.id]=w);const b=await W(Hn(f.id));Array.isArray(b)&&b.length&&(o[f.id]=b);const k=await W(Zi(f.id));k&&Object.keys(k).length&&(i[f.id]=k),await W(qi(f.id))&&(l[f.id]=!0);const L=await W(_o(f.id));Array.isArray(L==null?void 0:L.days)&&L.days.length&&(a[f.id]=L.days);const g=await W(Kn(f.id));Array.isArray(g)&&g.length&&(c[f.id]=g);const d=await W(co(f.id));d&&Object.keys(d).length&&(h[f.id]=d),await W(el(f.id))&&(p[f.id]=!0)}const m=await W(zo)||null;return{app:"nachumin-diary",version:1,exportedAt:new Date().toISOString(),rooms:e,data:t,declaration:n,doneLogs:r,habits:o,habitLogs:i,habitSeeds:l,periods:a,symptoms:c,symptomLogs:h,symptomSeeds:p,marks:m}}const pg=e=>e.map((t,n)=>[t,n]).sort((t,n)=>t[0].dateKey<n[0].dateKey?-1:t[0].dateKey>n[0].dateKey?1:t[1]-n[1]).map(([t])=>t);async function hg(e){var c,h;if(!e||e.app!=="nachumin-diary"||!Array.isArray(e.rooms))throw new Error("invalid-backup");const t=await W(Jt)||[],n=new Map(t.map(p=>[p.id,{...p}]));let r=0,o=0;for(const p of e.rooms){const m=e.data?e.data[p.id]:void 0,f=p.type==="talk"?"messages":p.type==="todo"?"todos":p.type==="darelog"?"records":p.type==="expense"?"expenses":p.type==="challenge"?"challenges":null,w=k=>f==="messages"?`${k.dateKey} ${k.memberId} ${k.text}`:f==="todos"?`${k.dateKey} ${k.text}`:f==="records"?`${k.dateKey} ${k.slot} ${k.memberId}`:k.id;if(!n.has(p.id)){m!==void 0&&await Q(Ae(p.id),m),n.set(p.id,{...p,...ns(p,m)}),r+=1,f?o+=((c=m==null?void 0:m[f])==null?void 0:c.length)||0:o+=m?Object.keys(m).length:0;continue}const b=n.get(p.id);if(f){const L=(await W(Ae(p.id))||{})[f]||[],g=new Set(L.map(w));let d=L.slice();for(const j of(m==null?void 0:m[f])||[])g.has(w(j))||(g.add(w(j)),d.push(j),o+=1);f==="messages"&&(d=pg(d));const u={[f]:d};await Q(Ae(p.id),u);let v={...b};if(p.type==="talk"||p.type==="darelog"){const j=b.members||[],z=new Set(j.map(D=>D.id));v.members=j.concat((p.members||[]).filter(D=>!z.has(D.id)))}n.set(p.id,{...v,...ns(v,u)})}else{const L={...await W(Ae(p.id))||{}};for(const g of Object.keys(m||{}))L[g]||(L[g]=m[g],o+=1);await Q(Ae(p.id),L),n.set(p.id,{...b,...ns(b,L)})}}if(e.doneLogs)for(const[p,m]of Object.entries(e.doneLogs)){const f=Un(p),b={...await W(f)||{}};for(const[k,L]of Object.entries(m)){const g=(b[k]||[]).slice();for(const d of L)g.some(u=>u.text===d.text&&u.time===d.time)||g.push(d);b[k]=g}await Q(f,b)}const i={};if(e.habits)for(const[p,m]of Object.entries(e.habits)){if(!Array.isArray(m))continue;const f=await W(Hn(p));if(f===void 0){await Q(Hn(p),m);continue}const w=Array.isArray(f)?f:[],b=new Set(w.map(d=>d.id)),k=new Map(w.filter(d=>(d.name||"").trim()).map(d=>[d.name.trim(),d.id])),L=w.slice(),g={};for(const d of m){if(!d||!d.id)continue;if(b.has(d.id)){g[d.id]=d.id;continue}const u=(d.name||"").trim(),v=u?k.get(u):null;if(v){g[d.id]=v;continue}L.push(d),b.add(d.id),u&&k.set(u,d.id),g[d.id]=d.id}L.length!==w.length&&await Q(Hn(p),L),i[p]=g}if(e.habitSeeds)for(const p of Object.keys(e.habitSeeds))e.habitSeeds[p]&&await Q(qi(p),!0);if(e.periods)for(const[p,m]of Object.entries(e.periods)){if(!Array.isArray(m))continue;const f=((h=await W(_o(p)))==null?void 0:h.days)||[];await Q(_o(p),{days:[...new Set([...f,...m])].sort()})}const l={};if(e.symptoms)for(const[p,m]of Object.entries(e.symptoms)){if(!Array.isArray(m))continue;const f=await W(Kn(p));if(f===void 0){await Q(Kn(p),m);continue}const w=Array.isArray(f)?f:[],b=new Set(w.map(d=>d.id)),k=new Map(w.filter(d=>(d.name||"").trim()).map(d=>[d.name.trim(),d.id])),L=w.slice(),g={};for(const d of m){if(!d||!d.id)continue;if(b.has(d.id)){g[d.id]=d.id;continue}const u=(d.name||"").trim(),v=u?k.get(u):null;if(v){g[d.id]=v;continue}L.push(d),b.add(d.id),u&&k.set(u,d.id),g[d.id]=d.id}L.length!==w.length&&await Q(Kn(p),L),l[p]=g}if(e.symptomSeeds)for(const p of Object.keys(e.symptomSeeds))e.symptomSeeds[p]&&await Q(el(p),!0);if(e.symptomLogs)for(const[p,m]of Object.entries(e.symptomLogs)){const f=co(p),b={...await W(f)||{}},k=l[p]||{};for(const[L,g]of Object.entries(m)){const d=(g||[]).map(u=>k[u]||u);b[L]=[...new Set([...b[L]||[],...d])]}await Q(f,b)}if(e.habitLogs)for(const[p,m]of Object.entries(e.habitLogs)){const f=i[p]||{},w=Zi(p),k={...await W(w)||{}};for(const[L,g]of Object.entries(m)){const d=(g||[]).map(u=>f[u]||u);k[L]=[...new Set([...k[L]||[],...d])]}await Q(w,k)}if(Array.isArray(e.marks)&&e.marks.length){const p=await W(zo);(!Array.isArray(p)||!p.length)&&await Q(zo,e.marks)}const a=[...n.values()];return await Q(Jt,a),{addedRooms:r,addedItems:o,rooms:a}}const Pn="M12 20.5s-7.5-5-7.5-10a4.2 4.2 0 0 1 7.5-2.6A4.2 4.2 0 0 1 19.5 10.5c0 5-7.5 10-7.5 10z",mg=`<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>
<rect width='240' height='240' fill='#f6bedd'/>
<g fill='#f0a3cd'>
<ellipse cx='30' cy='40' rx='26' ry='16' transform='rotate(-18 30 40)'/>
<ellipse cx='160' cy='20' rx='30' ry='17' transform='rotate(12 160 20)'/>
<ellipse cx='210' cy='120' rx='24' ry='15' transform='rotate(-25 210 120)'/>
<ellipse cx='70' cy='170' rx='28' ry='16' transform='rotate(20 70 170)'/>
<ellipse cx='180' cy='210' rx='26' ry='15' transform='rotate(-10 180 210)'/>
</g>
<g fill='none' stroke='#e989bf' stroke-width='4' stroke-linecap='round'>
<path d='M14 36 a18 11 -18 0 1 32 -6'/>
<path d='M148 14 a20 12 12 0 1 34 8'/>
<path d='M60 162 a19 11 20 0 1 33 5'/>
</g>
<g fill='#fde6f3'>
<path d='${Pn}' transform='translate(96 60) scale(1.6)'/>
<path d='${Pn}' transform='translate(24 96) scale(0.9) rotate(-12 12 12)'/>
<path d='${Pn}' transform='translate(190 60) scale(0.8) rotate(14 12 12)'/>
<path d='${Pn}' transform='translate(130 150) scale(1.1) rotate(-8 12 12)'/>
<path d='${Pn}' transform='translate(30 208) scale(0.8) rotate(10 12 12)'/>
</g>
<g fill='#f8b1d6'>
<path d='${Pn}' transform='translate(100 64) scale(1.1) '/>
<path d='${Pn}' transform='translate(133 153) scale(0.7)'/>
</g>
</svg>`,pi=`url("data:image/svg+xml,${encodeURIComponent(mg)}")`,Qg=["#ffffff","#fff5fa","#ffd9ec","#ffc4e1","#ff9fd0","#e0629f","#d4f0ff","#c9f5f2","#d9ffe3","#e8dcff","#f0f0f0","#2b2430"],rs=["#9C27B0","#E91E63","#FFEB3B","#2196F3","#4CAF50","#FF9800","#F44336","#00BCD4","#3F51B5","#8BC34A","#FF4081","#009688"],Yf=["#ff6fb2","#c58cff","#6fb8ff","#5fd6b0","#ffcf5f","#ff9d6f","#7ed957","#ff8fa8"],qr=Yf[0],wu=e=>{const t=e||qr;return{background:`linear-gradient(163deg, #ffffff 0%, #fff6fb 40%, ${t}2e 100%)`,boxShadow:`0 6px 13px ${t}42, 0 2px 0 ${t}66, inset 0 1.5px 0 #ffffff`,borderColor:`${t}55`}},Yg=[{key:"auto",label:"自動",value:null},{key:"white",label:"白",value:"#ffffff"},{key:"black",label:"黒",value:"#222028"},{key:"pink",label:"ピンク",value:"#ff2d87"}],gg=e=>{const t=String(e).replace("#","");if(t.length<6)return"#4a3140";const n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),o=parseInt(t.slice(4,6),16);return .299*n+.587*r+.114*o<140?"#fff5fa":"#4a3140"},Xg=e=>e&&e.textColor?e.textColor:gg(e&&e.color),ku=`
  * { box-sizing: border-box; }
  .app {
    height: 100vh; height: 100dvh;
    display: flex; flex-direction: column;
    font-family: "Hiragino Maru Gothic ProN", "Hiragino Kaku Gothic ProN",
      "Yu Gothic", sans-serif;
    background: ${pi} #f6bedd; background-size: 240px 240px;
    color: #4a3140;
  }
  /* スワイプで戻る用ラッパー（ルーム全体を包む縦フレックス） */
  .swipe-wrap {
    flex: 1; min-height: 0; display: flex; flex-direction: column;
    will-change: transform;
  }
  /* header */
  .hd {
    display: flex; align-items: center; gap: 8px;
    padding: calc(10px + env(safe-area-inset-top)) 14px 10px;
    background: rgba(255, 240, 249, 0.92);
    backdrop-filter: blur(6px);
    border-bottom: 1px solid #f3b9d9;
    flex-shrink: 0;
  }
  .hd-title { font-weight: 700; font-size: 16px; letter-spacing: .04em; }
  /* 遅延読み込み中のヘッダー枠（一瞬だけ表示・レイアウトずれ防止） */
  .hd-loading { min-height: calc(48px + env(safe-area-inset-top)); }
  /* ホームのブランドヘッダー（ピンクギラギラ） */
  .hd-home {
    position: relative; overflow: hidden;
    background:
      linear-gradient(135deg, #ffe3f4 0%, #ffcdea 38%, #ffe7f6 62%, #ffd6ef 100%);
    border-bottom: 2px solid #ff8ecb;
    box-shadow: 0 3px 14px rgba(255,20,147,.22);
  }
  /* ラメの走り */
  .hd-home::after {
    content: ""; position: absolute; inset: 0; pointer-events: none;
    background: linear-gradient(105deg,
      transparent 35%, rgba(255,255,255,.85) 47%, rgba(255,214,240,.5) 52%, transparent 62%);
    background-size: 260% 100%;
    animation: brandshine 5.5s ease-in-out infinite;
  }
  @keyframes brandshine { 0% { background-position: 180% 0; } 60%,100% { background-position: -80% 0; } }
  .app-brand { min-width: 0; position: relative; z-index: 1; }
  .app-title {
    font-size: clamp(15px, 4.9vw, 21px); font-weight: 900; line-height: 1.15;
    letter-spacing: .01em; white-space: nowrap;
    background: linear-gradient(92deg, #FF1493 0%, #FF00AA 26%, #ff7ad0 46%,
      #FF00AA 66%, #FF1493 100%);
    background-size: 300% 100%;
    -webkit-background-clip: text; background-clip: text;
    -webkit-text-fill-color: transparent; color: transparent;
    filter: drop-shadow(0 1px 2px rgba(255,20,147,.5)) drop-shadow(0 0 10px rgba(255,0,170,.28));
    animation: brandflow 7s linear infinite;
  }
  @keyframes brandflow { to { background-position: 300% 0; } }
  .app-sub {
    font-size: 9.5px; font-weight: 800; letter-spacing: .14em; margin-top: 2px;
    color: #d5348a; text-shadow: 0 1px 0 rgba(255,255,255,.75);
  }
  .hd-home .icon-btn {
    position: relative; z-index: 1;
    background: rgba(255,255,255,.85); color: #e0148c;
    box-shadow: 0 1px 4px rgba(255,20,147,.28);
  }
  @media (prefers-reduced-motion: reduce) {
    .hd-home::after, .app-title { animation: none; }
  }
  .hd-sub { font-size: 11px; color: #b06992; margin-left: 2px; }
  .icon-btn {
    border: none; background: #ffd9ec; color: #c2478f;
    width: 34px; height: 34px; border-radius: 50%; font-size: 16px;
    cursor: pointer; flex-shrink: 0;
  }
  .icon-btn:active { transform: scale(.94); }
  .back-btn {
    border: none; background: transparent; color: #c2478f;
    font-size: 22px; font-weight: 700; cursor: pointer; padding: 0 4px;
    flex-shrink: 0;
  }
  /* 今日の宣言（ピン留めバー） */
  .pin {
    display: flex; align-items: center; gap: 8px; flex-shrink: 0;
    padding: 7px 14px; cursor: pointer;
    background: linear-gradient(90deg, #ffe0f1, #ffd0ea);
    border-bottom: 1px solid #f3b9d9;
    box-shadow: inset 0 -1px 0 rgba(255,255,255,.4);
    -webkit-tap-highlight-color: transparent;
  }
  .pin:active { filter: brightness(.98); }
  .pin-ic { font-size: 15px; flex-shrink: 0; }
  .pin-txt, .pin-ph {
    flex: 1; min-width: 0;
    font-size: 12.5px; font-weight: 700; color: #a4356f;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .pin-ph { color: #c47aa2; font-weight: 600; }
  .decl-full {
    white-space: pre-wrap; font-size: 15px; line-height: 1.7;
    color: #4a3140; background: #fff; border: 1.5px solid #f0a6cf;
    border-radius: 12px; padding: 12px 14px;
  }
  /* 長押しコンテキストメニュー */
  .bubble, .mb, .todo-bubble, .done-bubble {
    -webkit-touch-callout: none;
    -webkit-user-select: none; user-select: none;
  }
  .inline-ta, .ta, .f-input, input, textarea, select {
    -webkit-user-select: text; user-select: text;
  }
  .ctx-overlay { position: fixed; inset: 0; z-index: 40; }
  .ctx-menu {
    position: fixed; background: #fff5fa; border: 1.5px solid #f0a6cf;
    border-radius: 14px; box-shadow: 0 8px 24px rgba(120,50,90,.32);
    padding: 5px; display: flex; flex-direction: column; gap: 2px;
    animation: ctxpop .13s ease-out;
  }
  @keyframes ctxpop { from { transform: scale(.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  .ctx-item {
    border: none; background: transparent; color: #4a3140;
    border-radius: 10px; padding: 11px 14px; font-size: 14px; font-weight: 700;
    cursor: pointer; text-align: left; white-space: nowrap;
  }
  .ctx-item:active { background: #ffe4f1; }
  .ctx-del { color: #d5356f; }
  .ctx-del.arm { background: #e23d7c; color: #fff; }
  /* 削除確認ダイアログ（メニューより前面） */
  .overlay.confirm-over { z-index: 60; }
  .confirm-panel { max-width: 340px; gap: 14px; text-align: center; }
  .confirm-msg { font-size: 14.5px; font-weight: 700; color: #4a3140; line-height: 1.6; white-space: pre-wrap; padding: 6px 4px 0; }
  /* modal */
  .overlay {
    position: fixed; inset: 0; background: rgba(74,49,64,.45);
    display: flex; align-items: center; justify-content: center;
    z-index: 20; padding: 18px;
  }
  .panel {
    background: #fff5fa; border-radius: 18px; width: 100%; max-width: 520px;
    max-height: 85vh; max-height: 85dvh; display: flex; flex-direction: column;
    padding: 16px; gap: 10px; overflow-y: auto;
  }
  .panel h3 { margin: 0; font-size: 15px; color: #a4356f; }
  .panel textarea {
    flex: 1; min-height: 200px; border: 1.5px solid #f0a6cf;
    border-radius: 12px; padding: 10px; font-size: 12.5px; line-height: 1.6;
    background: #fff; color: #4a3140; resize: none; outline: none;
    font-family: inherit;
  }
  .panel-note { font-size: 11px; color: #b06992; margin: 0; }
  .panel-btns { display: flex; gap: 8px; }
  .panel-btns button {
    flex: 1; border: none; border-radius: 999px; padding: 10px 0;
    font-size: 13px; font-weight: 700; cursor: pointer;
  }
  .p-copy { background: #e0629f; color: #fff; }
  .p-copy:disabled { background: #f0b3d2; cursor: default; }
  .p-dl { background: #ffd9ec; color: #a4356f; }
  .p-close { background: #fff; color: #a4356f; border: 1.5px solid #f0a6cf !important; }
  .p-del { background: #ff7ab1; color: #fff; }
  .p-del.arm { background: #e23d7c; }
  .f-label { font-size: 12px; font-weight: 700; color: #a4356f; margin-bottom: -4px; }
  .f-input {
    border: 1.5px solid #f0a6cf; border-radius: 12px; padding: 9px 12px;
    font-size: 14px; outline: none; background: #fff; color: #4a3140;
    font-family: inherit; width: 100%;
  }
  .f-input:focus { border-color: #e0629f; }
  .emoji-picks {
    display: flex; flex-wrap: wrap; gap: 6px;
    max-height: 140px; overflow-y: auto; padding: 2px;
  }
  .emoji-pick {
    border: 1.5px solid #f0a6cf; background: #fff; border-radius: 10px;
    width: 40px; height: 40px; font-size: 21px; cursor: pointer; padding: 0;
    line-height: 1; flex-shrink: 0; color: #2b2430;
  }
  .emoji-pick.on { background: #ffe4f1; border-color: #e0629f; transform: scale(1.06); }
  .emoji-pick:active { transform: scale(.94); }
  .type-row { display: flex; gap: 8px; flex-wrap: wrap; }
  .type-chip {
    flex: 1 1 44%; border: 1.5px solid #f0a6cf; background: #fff; color: #b04a86;
    border-radius: 14px; padding: 10px 8px; font-size: 12.5px; font-weight: 700;
    cursor: pointer; text-align: center; line-height: 1.5;
  }
  .type-chip small { display: block; font-weight: 400; font-size: 10.5px; color: #b06992; }
  .type-chip.on { background: #e0629f; border-color: #e0629f; color: #fff; }
  .type-chip.on small { color: #ffe4f1; }
  .type-chip:disabled { opacity: .55; cursor: default; }
  /* search */
  .search-row {
    padding: 8px 12px; background: rgba(255,240,249,.92);
    border-bottom: 1px solid #f3b9d9; flex-shrink: 0;
  }
  .search-row input {
    width: 100%; border: 1.5px solid #f0a6cf; border-radius: 999px;
    padding: 8px 14px; font-size: 14px; outline: none; background: #fff;
    color: #4a3140;
  }
  .search-row input:focus { border-color: #e0629f; }
  /* ===== ホーム: アイコングリッド ===== */
  .home-scroll { flex: 1; overflow-y: auto; padding: 12px 14px calc(24px + env(safe-area-inset-bottom)); }
  /* 日記の大きな横長カード */
  .diary-card {
    width: 100%; display: flex; align-items: center; gap: 14px;
    border: 2px solid rgba(255,255,255,.9); border-radius: 24px; cursor: pointer;
    padding: 15px 18px; margin-bottom: 16px; text-align: left;
    background: linear-gradient(120deg, #fff2fb 0%, #ffe0f2 55%, #ffd0ef 100%);
    box-shadow: 0 10px 22px rgba(255,80,170,.32), inset 0 2px 0 #fff;
    -webkit-tap-highlight-color: transparent; transition: transform .12s ease;
  }
  .diary-card:active { transform: translateY(2px) scale(.99); }
  .dc-ic {
    width: 60px; height: 60px; border-radius: 19px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center; font-size: 35px;
    background: linear-gradient(160deg,#ffffff 0%,#ffe3f2 60%,#ffc4e6 100%);
    box-shadow: 0 4px 10px rgba(255,80,170,.4), inset 0 1.5px 0 #fff;
  }
  .dc-main { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
  /* DIARY 英字ワードマーク: 極太・レタースペース・ピンク→パープルのグラデ */
  .dc-name {
    font-family: "Avenir Next", "Helvetica Neue", "Segoe UI", system-ui, sans-serif;
    font-weight: 900; font-size: 25px; line-height: 1; letter-spacing: .14em;
    background: linear-gradient(92deg, #ff2e97 0%, #ff5fb0 45%, #b45cff 100%);
    -webkit-background-clip: text; background-clip: text; color: transparent;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 1px 1px rgba(255,80,160,.28));
  }
  .dc-sub {
    font-size: 12.5px; color: #b0567f; font-weight: 700;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .dc-arw { font-size: 22px; color: #ff7ec0; font-weight: 900; flex-shrink: 0; }
  /* 3列グリッド */
  .ig-grid {
    position: relative;
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px 10px;
  }
  .ig-cell {
    touch-action: pan-y;
    -webkit-touch-callout: none; -webkit-user-select: none; user-select: none;
  }
  /* ドラッグ中のセル: z-indexを効かせるため positioned にする（他のアイコンより前面へ） */
  .ig-cell.dragging { opacity: .96; position: relative; will-change: transform; }
  .ig-tile {
    width: 100%; border: none; background: transparent; cursor: pointer;
    display: flex; flex-direction: column; align-items: center; gap: 6px;
    -webkit-tap-highlight-color: transparent; padding: 0;
    -webkit-touch-callout: none; -webkit-user-select: none; user-select: none;
  }
  .ig-btn {
    position: relative; width: 100%; aspect-ratio: 1 / 1; max-width: 78px;
    border-radius: 22px; border: 1.5px solid #ffffff;
    display: flex; align-items: center; justify-content: center; font-size: 34px;
    transition: transform .12s ease;
  }
  .ig-tile:active .ig-btn { transform: translateY(3px) scale(.94); }
  .ig-cell.dragging .ig-btn { transform: scale(1.02); }
  .ig-name {
    font-size: 11.5px; font-weight: 700; color: #7d3a63; line-height: 1.25;
    text-align: center; max-width: 100%;
    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
    overflow: hidden; word-break: break-word;
  }
  .ig-badge {
    position: absolute; top: -6px; right: -6px; min-width: 20px; height: 20px;
    box-sizing: border-box; padding: 0 5px;
    background: linear-gradient(180deg,#ff5fb0,#ff1478); color: #fff;
    font-size: 11px; font-weight: 800; border-radius: 999px;
    display: flex; align-items: center; justify-content: center;
    border: 2px solid #fff; box-shadow: 0 2px 5px rgba(255,20,120,.45);
  }
  .ig-add .ig-btn {
    background: rgba(255,255,255,.55) !important; border: 2px dashed #f0a6cf !important;
    box-shadow: none !important; color: #d5006a; font-size: 30px;
  }
  @media (prefers-reduced-motion: reduce) {
    .ig-btn, .diary-card { transition: none !important; }
    .ig-tile:active .ig-btn, .diary-card:active { transform: none !important; }
  }
  /* テーマカラーのスウォッチ（ルーム設定） */
  .theme-swatches { display: flex; flex-wrap: wrap; gap: 8px; }
  .theme-sw {
    width: 34px; height: 34px; border-radius: 12px; cursor: pointer;
    border: 2px solid #fff; box-shadow: 0 2px 5px rgba(180,90,140,.3);
  }
  .theme-sw.on { outline: 2.5px solid #4a3140; outline-offset: 1px; }

  /* room list (home・検索結果で使用) */
  .rooms { flex: 1; overflow-y: auto; padding: 6px 0 20px; }
  .room-row {
    display: flex; gap: 10px; align-items: center; padding: 10px 14px;
    background: rgba(255,245,250,.86); border-bottom: 1px solid #f8d7e9;
    cursor: pointer; -webkit-tap-highlight-color: transparent;
  }
  .room-row:active { background: #ffe4f1; }
  .r-ic {
    width: 48px; height: 48px; border-radius: 50%; background: #ffd9ec;
    display: flex; align-items: center; justify-content: center;
    font-size: 26px; flex-shrink: 0;
    box-shadow: 0 1px 2px rgba(180,90,140,.25);
  }
  .r-main { flex: 1; min-width: 0; }
  .r-name { font-weight: 700; font-size: 14.5px; display: flex; align-items: center; gap: 6px; }
  .r-type {
    font-size: 9.5px; font-weight: 700; color: #b06992;
    background: #ffe0f1; border-radius: 6px; padding: 1px 6px; flex-shrink: 0;
  }
  .r-prev {
    font-size: 12px; color: #a4517f;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .r-side { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; flex-shrink: 0; }
  .r-date { font-size: 10.5px; color: #b06992; }
  .r-more {
    border: none; background: transparent; color: #c2478f; font-size: 16px;
    cursor: pointer; padding: 2px 6px;
  }
  .r-badge {
    background: #e0629f; color: #fff; font-size: 10.5px;
    border-radius: 999px; padding: 2px 8px; font-weight: 700;
  }
  /* ドラッグ並び替え */
  .drag-row { touch-action: pan-y; }
  .drag-row.dragging {
    position: relative; z-index: 20; opacity: .97;
    box-shadow: 0 8px 20px rgba(120,50,90,.35);
    border-radius: 14px;
  }
  .drag-row.dragging .room-row { background: #ffe4f1; }
  /* できたこと専用吹き出し（日記本文より小さめ・色味ちがい） */
  .done-row { display: flex; justify-content: flex-end; margin: -8px 0 16px; }
  .done-bubble {
    position: relative; max-width: 82%;
    background: #f3e9ff; border: 1.5px solid #e3d2f7; border-radius: 15px;
    padding: 9px 13px; box-shadow: 0 1px 2px rgba(140,110,180,.2);
  }
  .done-bubble::after {
    content: ""; position: absolute; top: 10px; right: -6px;
    width: 13px; height: 13px; background: #f3e9ff;
    border-right: 1.5px solid #e3d2f7; border-top: 1.5px solid #e3d2f7;
    transform: rotate(35deg) skewX(-8deg);
  }
  .done-head {
    font-weight: 700; font-size: 12.5px; color: #8659c4; margin-bottom: 4px;
    display: flex; align-items: center; gap: 8px;
  }
  .done-line { font-size: 12.5px; line-height: 1.7; color: #5b4570; white-space: pre-wrap; }
  .done-time { color: #a08bc0; font-size: 11px; }
  /* chat area (shared) */
  .chat { flex: 1; overflow-y: auto; padding: 16px 12px 20px; }
  .empty {
    text-align: center; color: #a4517f; font-size: 13px;
    background: rgba(255,245,250,.85); border-radius: 14px;
    padding: 14px; margin: 40px 24px; white-space: pre-wrap;
  }
  .hl { background: #e0629f; color: #fff; border-radius: 3px; padding: 0 2px; }
  /* diary bubbles */
  .row { display: flex; justify-content: flex-end; align-items: flex-end;
    gap: 6px; margin-bottom: 16px; }
  .time { font-size: 10px; color: #7d5570; margin-bottom: 4px; flex-shrink: 0; }
  .bubble {
    position: relative; flex: 1; min-width: 0;
    background: #fff5fa; border-radius: 18px; padding: 12px 14px;
    box-shadow: 0 1px 2px rgba(180, 90, 140, .18);
    cursor: pointer; -webkit-tap-highlight-color: transparent;
  }
  .bubble::after {
    content: ""; position: absolute; top: 10px; right: -6px;
    width: 14px; height: 14px; background: #fff5fa;
    clip-path: polygon(0 0, 100% 30%, 20% 100%);
  }
  .bubble .spark {
    position: absolute; top: -9px; right: -4px; font-size: 14px;
    pointer-events: none;
  }
  .bubble.editing-now { outline: 2px solid #e0629f; }
  .d-head { font-weight: 700; margin-bottom: 8px; font-size: 15px; }
  .d-head .lnk { color: #2f6fd6; text-decoration: underline; }
  /* 曜日・祝日の色分け（日/祝=ピンク, 土=青） */
  .wd-sat { color: #2f7fc4; }
  .wd-sun { color: #ff1478; }
  .d-head .lnk.wd-sat { color: #2f7fc4; }
  .d-head .lnk.wd-sun { color: #ff1478; }
  /* TODO完了ピル・だれログの日付は、既存の色指定より詳細度を上げて上書き */
  .date-pill span.wd-sat { color: #2f7fc4; }
  .date-pill span.wd-sun { color: #ff1478; }
  .dl-datecol.wd-sat .dl-md, .dl-datecol.wd-sat .dl-wd { color: #2f7fc4; }
  .dl-datecol.wd-sun .dl-md, .dl-datecol.wd-sun .dl-wd { color: #ff1478; }
  .body { white-space: pre-wrap; font-size: 14.5px; line-height: 1.75; }
  /* 本文中のURLリンク（長いURLでも吹き出しからはみ出さないよう折り返す） */
  .body-link {
    color: #d5006a; text-decoration: underline; text-underline-offset: 2px;
    font-weight: 700; word-break: break-all;
  }
  .body-link:active { opacity: .6; }
  /* talk bubbles */
  .date-pill { text-align: center; margin: 14px 0 10px; }
  .date-pill span {
    background: rgba(255,245,250,.9); color: #a4517f; font-size: 11px;
    font-weight: 700; padding: 4px 14px; border-radius: 999px;
    box-shadow: 0 1px 2px rgba(180,90,140,.15);
  }
  .mrow { display: flex; margin-bottom: 10px; align-items: flex-end; gap: 6px; }
  .mrow.right { justify-content: flex-end; }
  .mic { align-self: flex-start; }
  .mcol { max-width: 76%; display: flex; flex-direction: column; }
  .mcol.right { align-items: flex-end; }
  .mname { font-size: 10.5px; color: #7d5570; margin: 0 6px 2px; }
  .mb {
    position: relative; border-radius: 16px; padding: 8px 12px;
    box-shadow: 0 1px 2px rgba(180,90,140,.18); white-space: pre-wrap;
    font-size: 14px; line-height: 1.6; cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .mb.editing-now { outline: 2px solid #e0629f; }
  .mb.l::after {
    content: ""; position: absolute; top: 8px; left: -5px;
    width: 12px; height: 12px; background: inherit;
    clip-path: polygon(100% 0, 0 30%, 80% 100%);
  }
  .mb.r::after {
    content: ""; position: absolute; top: 8px; right: -5px;
    width: 12px; height: 12px; background: inherit;
    clip-path: polygon(0 0, 100% 30%, 20% 100%);
  }
  .mtime { font-size: 9.5px; color: #7d5570; flex-shrink: 0; margin-bottom: 2px; }
  /* クリップボード取り込みの確認リスト */
  .clip-list { display: flex; flex-direction: column; gap: 6px; max-height: 46vh; overflow-y: auto; }
  .clip-item {
    display: flex; align-items: flex-start; gap: 8px; text-align: left;
    border: 1.5px solid #f0a6cf; background: #fff; border-radius: 12px;
    padding: 10px 12px; cursor: pointer; font-size: 13.5px; line-height: 1.5;
    color: #b79cab;
  }
  .clip-item.on { background: #fff5fa; color: #4a3140; border-color: #e0629f; }
  .clip-check {
    width: 20px; height: 20px; border-radius: 6px; flex-shrink: 0;
    border: 2px solid #e0629f; color: #fff; font-weight: 900; font-size: 12px;
    display: flex; align-items: center; justify-content: center; margin-top: 1px;
  }
  .clip-item.on .clip-check { background: #e0629f; }
  .clip-text { flex: 1; min-width: 0; word-break: break-word; }
  /* TODO: タブ */
  .tabs {
    display: flex; gap: 6px; padding: 8px 12px; flex-shrink: 0;
    background: rgba(255,240,249,.85); border-bottom: 1px solid #f3b9d9;
  }
  .tab {
    border: 1.5px solid #f0a6cf; background: #fff; color: #b04a86;
    border-radius: 999px; padding: 5px 16px; font-size: 12.5px;
    font-weight: 700; cursor: pointer;
  }
  .tab.on { background: #e0629f; border-color: #e0629f; color: #fff; }
  .tab-imp { border-color: #ff2e88; color: #d5006a; }
  .tab-imp.on { background: #ff1478; border-color: #ff1478; color: #fff; }
  /* 重要TODO: 反転色＋縁取り（未完了のうちだけ目立たせる） */
  .todo-bubble.important {
    background: #ff1478; color: #fff;
    box-shadow: 0 2px 10px rgba(255,20,120,.45);
  }
  .todo-bubble.important .todo-text { color: #fff; }
  .todo-bubble.important::after { background: #ff1478; }
  .todo-bubble.important .hl { background: #fff; color: #b5005c; }
  .todo-star { font-size: 13px; margin-right: 4px; }
  /* 場所タグ（吹き出し内） */
  .todo-place {
    display: inline-block; margin-left: 8px; vertical-align: middle;
    font-size: 10.5px; font-weight: 800; border-radius: 7px; padding: 2px 7px;
    cursor: pointer; white-space: nowrap;
  }
  .todo-place.on-imp { background: #fff; color: #b5005c; }
  /* 場所フィルタ（やること上部） */
  .place-filter {
    display: flex; gap: 6px; overflow-x: auto; flex-shrink: 0;
    padding: 7px 12px; background: rgba(255,240,249,.7);
    border-bottom: 1px solid #f3b9d9;
  }
  .pf-chip {
    flex-shrink: 0; border: 1.5px solid #f0a6cf; background: #fff; color: #4a3140;
    border-radius: 999px; padding: 5px 12px; font-size: 12.5px; font-weight: 700;
    cursor: pointer; min-height: 34px;
  }
  .pf-chip.on { background: #e0629f; border-color: #e0629f; color: #fff; }
  /* 場所セレクト（入力欄の上） */
  /* ルーム設定: 買い物リスト切替トグル */
  .shop-toggle {
    display: flex; align-items: center; gap: 8px; width: 100%; cursor: pointer;
    border: 1.5px dashed #f0a6cf; background: #fff8fc; color: #b04a86;
    border-radius: 12px; padding: 10px 12px; font-size: 12.5px; font-weight: 700;
    text-align: left; -webkit-tap-highlight-color: transparent;
  }
  .shop-toggle.on { border-style: solid; border-color: #ff1478; background: #ffeef7; color: #d5006a; }
  .shop-box {
    width: 20px; height: 20px; flex-shrink: 0; border-radius: 6px;
    border: 1.5px solid #f0a6cf; background: #fff; color: #fff;
    display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 900;
  }
  .shop-toggle.on .shop-box { background: #ff1478; border-color: #ff1478; }

  /* 🙈 非表示ルーム */
  .hidden-entry {
    display: block; margin: 18px auto 4px; cursor: pointer;
    border: 1.5px dashed #e9a8cc; background: rgba(255,255,255,.55);
    color: #b04a86; border-radius: 999px; padding: 8px 16px;
    font-size: 12px; font-weight: 800;
    -webkit-tap-highlight-color: transparent;
  }
  .hidden-entry:active { transform: scale(.97); }
  .move-item.as-row { cursor: default; }
  .move-item.as-row:active { background: #fff5fa; transform: none; }
  .unhide-btn {
    flex-shrink: 0; cursor: pointer; border: none;
    background: linear-gradient(90deg,#ff5fb0,#ff1478); color: #fff;
    border-radius: 999px; padding: 6px 14px; font-size: 12px; font-weight: 800;
    box-shadow: 0 2px 6px rgba(255,20,120,.35);
  }
  .unhide-btn:active { transform: scale(.95); }

  /* 📦 TODOのルーム間移動: 移動先ピッカー */
  .move-list { display: flex; flex-direction: column; gap: 7px; }
  .move-item {
    display: flex; align-items: center; gap: 10px; width: 100%; cursor: pointer;
    border: 1.5px solid #f0a6cf; background: #fff5fa; color: #4a3140;
    border-radius: 14px; padding: 11px 13px; text-align: left;
    -webkit-tap-highlight-color: transparent;
  }
  .move-item:active { background: #ffe4f1; transform: scale(.99); }
  .move-item:disabled { opacity: .5; }
  .move-ic { font-size: 22px; flex-shrink: 0; }
  .move-name {
    flex: 1; min-width: 0; font-size: 14px; font-weight: 700;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .move-arw { color: #ff7ec0; font-weight: 900; font-size: 17px; flex-shrink: 0; }

  /* 🛒 よく買うもの（日用品クイック追加） */
  .staple-bar { display: flex; padding: 0 0 6px; }
  .staple-toggle {
    border: 1.5px solid #f0a6cf; background: #fff; color: #b04a86;
    border-radius: 999px; padding: 6px 14px; font-size: 12.5px; font-weight: 800;
    cursor: pointer; -webkit-tap-highlight-color: transparent;
  }
  .staple-toggle.on { background: linear-gradient(90deg,#ff5fb0,#ff1478); border-color: #ff1478; color: #fff; }
  .staple-toggle:active { transform: scale(.96); }
  .staple-quick { display: flex; flex-wrap: wrap; gap: 6px; padding: 2px 0 8px; }
  .staple-empty { font-size: 12px; color: #a4517f; font-weight: 700; align-self: center; }
  .staple-chip {
    flex-shrink: 0; border: 1.5px solid #f0a6cf; background: #fff5fa; color: #b04a86;
    border-radius: 999px; padding: 7px 13px; font-size: 13px; font-weight: 700;
    cursor: pointer; min-height: 36px; -webkit-tap-highlight-color: transparent;
  }
  .staple-chip:active { transform: scale(.94); }
  .staple-chip.staple-edit { border-style: dashed; color: #c2478f; }
  .staple-chip.flash { animation: staple-flash .65s ease-out; }
  @keyframes staple-flash {
    0% { background: #ff1478; color: #fff; box-shadow: 0 0 0 0 rgba(255,20,120,.6); transform: scale(1.06); }
    100% { background: #fff5fa; color: #b04a86; box-shadow: 0 0 0 10px rgba(255,20,120,0); transform: scale(1); }
  }
  .place-select { display: flex; gap: 6px; overflow-x: auto; padding: 2px 0 7px; }
  .ps-chip {
    flex-shrink: 0; border: 1.5px solid #f0a6cf; background: #fff; color: #4a3140;
    border-radius: 999px; padding: 6px 13px; font-size: 12.5px; font-weight: 700;
    cursor: pointer; min-height: 36px;
  }
  .ps-chip.on { box-shadow: 0 0 0 2px #4a3140 inset; }
  .ps-chip:disabled { opacity: .5; }
  .ps-edit { border-style: dashed; color: #c2478f; }
  /* 長押しメニューの先頭項目 */
  .ctx-top { color: #d5006a; }
  /* 入力欄の重要トグル */
  .imp-toggle {
    width: 42px; height: 42px; border-radius: 50%; flex-shrink: 0;
    border: 2px solid #f0a6cf; background: #fff; font-size: 18px; cursor: pointer;
    padding: 0; filter: grayscale(1) opacity(.55);
  }
  .imp-toggle.on {
    background: #ff1478; border-color: #b5005c; filter: none;
    box-shadow: 0 2px 6px rgba(255,20,120,.5);
  }
  .imp-toggle:active { transform: scale(.92); }
  .ta.ta-important {
    background: #ff1478; color: #fff; border-color: #b5005c;
  }
  .ta.ta-important::placeholder { color: rgba(255,255,255,.85); }
  /* TODO: 行 */
  .todo-row { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 11px; }
  /* 完了アクション: チェックが入る→ポップ→スッと右へ退場（もたつかない） */
  .todo-row.completing { animation: todo-complete .46s ease forwards; }
  .todo-row.completing .todo-check { animation: check-pop .32s cubic-bezier(.3,1.7,.5,1); }
  @keyframes todo-complete {
    0% { opacity: 1; transform: none; }
    22% { transform: scale(1.03); }
    100% { opacity: 0; transform: scale(.92) translateX(26px); }
  }
  @keyframes check-pop {
    0% { transform: scale(.6); }
    55% { transform: scale(1.28); }
    100% { transform: scale(1); }
  }
  .todo-check {
    width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0;
    border: 2px solid #e0629f; background: #fff; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; color: #fff; margin-top: 3px;
    -webkit-tap-highlight-color: transparent; padding: 0;
  }
  .todo-check.on { background: #e0629f; }
  .todo-check.on::after { content: "✓"; font-weight: 900; }
  .todo-check:active { transform: scale(.9); }
  .todo-bubble {
    position: relative; flex: 1; min-width: 0; max-width: 82%;
    background: #fff5fa; border-radius: 16px; padding: 10px 13px;
    box-shadow: 0 1px 2px rgba(180,90,140,.18); cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .todo-bubble::after {
    content: ""; position: absolute; top: 9px; left: -5px;
    width: 12px; height: 12px; background: #fff5fa;
    clip-path: polygon(100% 0, 0 30%, 80% 100%);
  }
  .todo-bubble.editing-now { outline: 2px solid #e0629f; }
  /* 長いURLなど切れ目のない文字列でも吹き出しからはみ出さないよう折り返す */
  .todo-text { white-space: pre-wrap; font-size: 14.5px; line-height: 1.6; overflow-wrap: anywhere; }
  .todo-text.done { text-decoration: line-through; color: #b79cab; }
  .todo-text.deferred-text { color: #9a8b95; }
  .todo-bubble.deferred { background: #f5eef2; opacity: .9; }
  .todo-bubble.deferred::after { background: #f5eef2; }
  .todo-undefer {
    width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0;
    border: 1.5px solid #d9b8cd; background: #fff; color: #c0508f;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; font-weight: 800; cursor: pointer; margin-top: 3px;
    -webkit-tap-highlight-color: transparent; padding: 0;
  }
  .todo-undefer:active { transform: scale(.9); }
  .todo-react {
    position: absolute; top: -10px; right: -6px; font-size: 16px;
    pointer-events: none; transform-origin: center;
    animation: todopop .38s cubic-bezier(.3,1.6,.5,1);
    filter: drop-shadow(0 1px 1px rgba(200,60,130,.35));
  }
  @keyframes todopop {
    0% { transform: scale(0) rotate(-20deg); opacity: 0; }
    60% { transform: scale(1.35) rotate(8deg); opacity: 1; }
    100% { transform: scale(1) rotate(0); opacity: 1; }
  }
  .todo-time { font-size: 9.5px; color: #7d5570; margin-top: 6px; flex-shrink: 0; }
  /* だれログ: 表 */
  .dl-scroll { flex: 1; overflow-y: auto; padding: 6px 10px 24px; }
  .dl-table { width: 100%; border-collapse: separate; border-spacing: 4px; }
  .dl-slothead {
    position: sticky; top: 0; z-index: 2;
    background: rgba(255,240,249,.96); color: #a4356f;
    font-size: 12px; font-weight: 700; padding: 4px 0; border-radius: 10px;
    line-height: 1.25; text-align: center; width: 27%;
  }
  .dl-datecol {
    width: 19%; text-align: center; vertical-align: middle;
    background: rgba(255,245,250,.7); border-radius: 10px; padding: 2px;
  }
  thead .dl-datecol { position: sticky; top: 0; z-index: 2; background: rgba(255,240,249,.96); }
  .dl-md { display: block; font-size: 13px; font-weight: 700; color: #a4356f; }
  .dl-wd { display: block; font-size: 10px; color: #b06992; }
  .dl-todayrow .dl-datecol {
    background: #ffd9ec; box-shadow: 0 0 0 1.5px #e0629f inset;
  }
  .dl-cell {
    min-height: 44px; vertical-align: top;
    background: rgba(255,255,255,.55); border-radius: 12px; padding: 4px;
    cursor: pointer; -webkit-tap-highlight-color: transparent;
  }
  /* 記録なし: 文字を置かず、点線だけでタップできることを示す */
  .dl-cell.empty { background: rgba(255,255,255,.28); border: 1.5px dashed rgba(233,168,204,.55); }
  .dl-cell.today.empty { background: transparent; border: 1.5px dashed #e9a8cc; }
  .dl-cell.current { box-shadow: 0 0 0 2px #f7a8d3 inset; background: #fff0f8; }
  /* 記録（名前ラベル＋その下にメモ）を縦に並べる */
  .dl-recs { display: flex; flex-direction: column; gap: 5px; align-items: stretch; }
  .dl-rec {
    border: none; background: transparent; padding: 0; cursor: pointer;
    text-align: left; display: block; width: 100%;
    -webkit-tap-highlight-color: transparent;
  }
  .dl-rec:active { transform: scale(.97); }
  .dl-name {
    display: block; border-radius: 8px; padding: 3px 7px;
    font-size: 11px; font-weight: 700; line-height: 1.35;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .dl-memo {
    display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;
    overflow: hidden; margin: 2px 2px 0; font-size: 10.5px; line-height: 1.45;
    color: #4a3140; word-break: break-word;
  }
  .dl-addhere {
    border: 1.5px dashed #e9a8cc; background: #fff; color: #c2478f;
    border-radius: 999px; padding: 9px 0; font-size: 12.5px; font-weight: 700;
    cursor: pointer; width: 100%; margin-top: 2px;
  }
  .dl-picker { display: flex; flex-wrap: wrap; gap: 8px; }
  .dl-pick {
    position: relative; display: flex; align-items: center; gap: 6px;
    border: 2px solid #f0a6cf; background: #fff; border-radius: 999px;
    padding: 4px 12px 4px 4px; cursor: pointer;
  }
  .dl-pick.on { background: #ffe4f1; }
  .dl-pick-name { font-size: 13px; font-weight: 700; color: #a4356f; }
  .dl-pick-check { color: #e0629f; font-weight: 900; font-size: 13px; }
  /* edit banner */
  .banner {
    display: flex; align-items: center; gap: 8px;
    background: #ffe4f1; border-top: 1px solid #f3b9d9;
    padding: 7px 12px; font-size: 12.5px; color: #a4356f; flex-shrink: 0;
    flex-wrap: wrap;
  }
  .banner b { font-weight: 700; }
  .banner button {
    border: none; border-radius: 999px; padding: 5px 12px;
    font-size: 12px; cursor: pointer; font-weight: 600;
  }
  .b-cancel { background: #fff; color: #a4356f; margin-left: auto; }
  .b-del { background: #ff7ab1; color: #fff; }
  .b-del.arm { background: #e23d7c; }
  /* 🔖 マークで集める（全画面ビュー） */
  .mv-screen {
    position: fixed; inset: 0; z-index: 30;
    display: flex; flex-direction: column;
    background: ${pi} #f6bedd; background-size: 240px 240px;
  }

  /* ===== 💾 まるごとバックアップ ===== */
  .bk-banner {
    flex-shrink: 0; display: flex; align-items: stretch; gap: 6px;
    margin: 8px 12px 0; padding: 3px;
    background: rgba(255,245,250,.95); border: 1.5px solid #f3b9d9;
    border-radius: 15px; box-shadow: 0 2px 8px rgba(180,90,140,.14);
  }
  .bk-banner.stale {
    border-color: #ff1478; border-width: 2px;
    background: linear-gradient(100deg,#fff0f7,#ffe2f0);
    box-shadow: 0 3px 14px rgba(255,20,120,.32);
  }
  .bk-main {
    flex: 1; min-width: 0; text-align: left; cursor: pointer;
    border: none; background: transparent; padding: 8px 10px;
    display: flex; flex-direction: column; gap: 2px;
    -webkit-tap-highlight-color: transparent;
  }
  .bk-main:active { transform: scale(.99); }
  .bk-main:disabled { opacity: .55; }
  .bk-ttl { font-size: 13px; font-weight: 800; color: #b04a86; }
  .bk-banner.stale .bk-ttl { color: #d5006a; }
  .bk-sub { font-size: 10.5px; font-weight: 700; color: #a4517f; }
  .bk-banner.stale .bk-sub { color: #ff1478; }
  .bk-x {
    flex: 0 0 30px; border: none; background: transparent; cursor: pointer;
    color: #c98cb0; font-size: 14px; font-weight: 900; border-radius: 12px;
    -webkit-tap-highlight-color: transparent;
  }
  .bk-last {
    display: flex; align-items: center; justify-content: space-between; gap: 8px;
    background: #fff5fa; border: 1.5px solid #f3b9d9; border-radius: 12px;
    padding: 9px 12px; margin-bottom: 4px;
  }
  .bk-last.stale { border-color: #ff1478; background: #ffeef7; }
  .bk-last-l { font-size: 11.5px; font-weight: 700; color: #a4517f; }
  .bk-last-v { font-size: 12.5px; font-weight: 900; color: #b5005c; }
  .bk-last.stale .bk-last-v { color: #ff1478; }
  .overlay.bk-ask-over { z-index: 55; }
  .bk-ask-box {
    background: #fff5fa; border: 1.5px solid #f3b9d9;
    border-radius: 12px; padding: 8px 12px; margin-bottom: 4px;
  }
  .bk-ask-row {
    display: flex; align-items: center; justify-content: space-between;
    font-size: 12.5px; color: #7d3a63; padding: 4px 0;
  }
  .bk-ask-row b { font-size: 14px; font-weight: 900; color: #d5006a; }
  .bk-first {
    width: 100%; cursor: pointer; margin-bottom: 4px;
    border: 2px solid #ff1478; background: #fff; color: #d5006a;
    border-radius: 999px; padding: 10px 14px; font-size: 13px; font-weight: 800;
    -webkit-tap-highlight-color: transparent;
  }
  .bk-first:active { transform: scale(.98); }
  .bk-first:disabled { opacity: .55; }

  /* ===== 🚃 旅費交通費 ===== */
  .overlay.station-over { z-index: 45; }
  .exp-route { display: flex; align-items: center; gap: 6px; margin-top: 3px; }
  .exp-rt {
    font-size: 11.5px; font-weight: 700; color: #0d7f8c;
    background: #e2f7fa; border-radius: 999px; padding: 2px 9px;
  }
  .exp-rt-arw { color: #ff1478; font-weight: 900; margin: 0 3px; }
  .exp-rt-badge {
    font-size: 10px; font-weight: 800; color: #fff;
    background: linear-gradient(90deg,#ff5fb0,#ff1478);
    border-radius: 999px; padding: 2px 8px;
    box-shadow: 0 1px 4px rgba(255,20,120,.35);
  }
  .tr-gear {
    float: right; border: none; background: #ffe4f3; color: #d5006a;
    border-radius: 50%; width: 26px; height: 26px; font-size: 13px;
    cursor: pointer; padding: 0;
  }
  .tr-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 2px; }
  .tr-chip {
    border: 1.5px solid #8fd6de; background: #fff; color: #0d7f8c;
    border-radius: 999px; padding: 7px 13px; font-size: 13px;
    font-weight: 700; cursor: pointer; flex-shrink: 0;
    -webkit-tap-highlight-color: transparent;
  }
  .tr-chip.on {
    background: linear-gradient(90deg,#00c4d6,#00a5b5); border-color: #00a5b5;
    color: #fff; box-shadow: 0 2px 8px rgba(0,165,181,.4);
  }
  .tr-chip:active { transform: scale(.94); }
  .tr-chip-add { border-style: dashed; border-color: #f0a6cf; color: #d5006a; }
  .tr-newst { width: 118px; flex: 0 0 auto; padding: 6px 10px; font-size: 13px; }
  .tr-hist {
    border: 1.5px solid #f0a6cf; background: #fff5fa; color: #b04a86;
    border-radius: 999px; padding: 7px 13px; font-size: 12.5px;
    font-weight: 800; cursor: pointer; flex-shrink: 0;
    -webkit-tap-highlight-color: transparent;
  }
  .tr-hist.on {
    background: linear-gradient(90deg,#ff5fb0,#ff1478); border-color: #ff1478;
    color: #fff; box-shadow: 0 2px 8px rgba(255,20,120,.4);
  }
  .tr-hist.on .exp-rt-arw { color: #fff; }
  .tr-row { display: flex; align-items: center; gap: 10px; margin-top: 10px; }
  .tr-round {
    border: 2px solid #f0a6cf; background: #fff; color: #b04a86;
    border-radius: 999px; padding: 8px 18px; font-size: 14px;
    font-weight: 900; cursor: pointer; flex-shrink: 0;
    -webkit-tap-highlight-color: transparent;
  }
  .tr-round.on {
    background: linear-gradient(90deg,#ff5fb0,#ff1478); border-color: #ff1478;
    color: #fff; box-shadow: 0 3px 10px rgba(255,20,120,.45);
  }
  .tr-round:active { transform: scale(.95); }
  .tr-fare-hint { font-size: 11.5px; font-weight: 700; color: #a4517f; }
  .tr-savefare {
    display: flex; align-items: center; gap: 8px; width: 100%;
    margin-top: 10px; cursor: pointer; text-align: left;
    border: 1.5px dashed #f0a6cf; background: #fff8fc; color: #b04a86;
    border-radius: 12px; padding: 9px 12px; font-size: 12.5px; font-weight: 700;
  }
  .tr-savefare.on { border-style: solid; border-color: #ff1478; background: #ffeef7; color: #d5006a; }
  .tr-savebox {
    width: 18px; height: 18px; flex-shrink: 0; border-radius: 5px;
    border: 1.5px solid #f0a6cf; background: #fff; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 900;
  }
  .tr-savefare.on .tr-savebox { background: #ff1478; border-color: #ff1478; }
  .tr-def {
    width: 30px; height: 30px; flex-shrink: 0; padding: 0; cursor: pointer;
    border: 1.5px solid #f0a6cf; background: #fff; color: #ff1478;
    border-radius: 50%; font-size: 15px; line-height: 1;
  }
  .tr-def.on { background: #ff1478; border-color: #ff1478; color: #fff; }
  .tr-sel { flex: 1; min-width: 0; padding: 7px 8px; }
  .sum-route { font-size: 12.5px; font-weight: 700; color: #0d7f8c; }
  .sum-n { font-size: 10.5px; color: #a4517f; margin-left: 6px; font-weight: 700; }

  /* ===== 🏁 チャレンジ ===== */
  .ch-scroll { flex: 1; overflow-y: auto; padding: 12px 14px calc(24px + env(safe-area-inset-bottom)); }
  .ch-card {
    --ch: #ff6fb2;
    background: linear-gradient(160deg,#ffffff 0%,#fff6fb 45%,color-mix(in srgb, var(--ch) 22%, #fff) 100%);
    border: 2px solid #fff; border-radius: 22px; padding: 14px 16px 12px;
    margin-bottom: 14px;
    box-shadow: 0 8px 20px color-mix(in srgb, var(--ch) 38%, transparent), inset 0 2px 0 #fff;
  }
  .ch-card.done { border-color: var(--ch); }
  .ch-card.celebrate { animation: ch-pop .9s cubic-bezier(.3,1.5,.5,1); }
  @keyframes ch-pop {
    0% { transform: scale(1); }
    25% { transform: scale(1.035) rotate(-.6deg); }
    55% { transform: scale(.995) rotate(.4deg); }
    100% { transform: scale(1) rotate(0); }
  }
  .ch-head { display: flex; align-items: center; gap: 8px; cursor: pointer; -webkit-tap-highlight-color: transparent; }
  .ch-emoji { font-size: 24px; flex-shrink: 0; }
  .ch-name {
    flex: 1; min-width: 0; font-size: 15.5px; font-weight: 900; color: #7d3a63;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .ch-gear {
    flex-shrink: 0; border: none; background: rgba(255,255,255,.75); color: #b04a86;
    width: 28px; height: 28px; border-radius: 50%; font-size: 13px; cursor: pointer; padding: 0;
  }
  /* 大きい数字 */
  .ch-numrow { display: flex; align-items: baseline; gap: 7px; margin: 6px 0 6px; }
  .ch-num {
    font-family: "Avenir Next", "Helvetica Neue", system-ui, sans-serif;
    font-size: 46px; font-weight: 900; line-height: 1; letter-spacing: -.02em;
    background: linear-gradient(92deg, var(--ch), #ff2e97 90%);
    -webkit-background-clip: text; background-clip: text;
    color: transparent; -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 2px 3px color-mix(in srgb, var(--ch) 45%, transparent));
  }
  .ch-of { font-size: 15px; font-weight: 800; color: #b0567f; }
  .ch-pct { margin-left: auto; font-size: 13px; font-weight: 900; color: var(--ch); }
  /* ゲージ */
  .ch-bar {
    height: 12px; border-radius: 999px; background: rgba(255,255,255,.8);
    box-shadow: inset 0 1px 3px rgba(180,90,140,.25); overflow: hidden; margin-bottom: 10px;
  }
  .ch-bar-in {
    display: block; height: 100%; border-radius: 999px;
    background: linear-gradient(90deg, color-mix(in srgb, var(--ch) 70%, #fff), var(--ch) 60%, #ff1478);
    box-shadow: 0 0 10px color-mix(in srgb, var(--ch) 60%, transparent);
    transition: width .45s cubic-bezier(.25,1.4,.5,1);
  }
  /* 100マス */
  .ch-grid { display: grid; gap: 3px; margin-bottom: 10px; }
  .ch-cell {
    aspect-ratio: 1 / 1; border-radius: 4px;
    background: rgba(255,255,255,.7); box-shadow: inset 0 0 0 1px rgba(224,98,159,.18);
    /* まだのマスには番号を入れて「次が何個目か」が分かるように */
    display: flex; align-items: center; justify-content: center;
    font-size: clamp(7px, 2.1vw, 10px); font-weight: 800; color: #d3a2c1;
    line-height: 1; letter-spacing: -.02em;
  }
  .ch-cell.on {
    background: linear-gradient(160deg, color-mix(in srgb, var(--ch) 75%, #fff), var(--ch));
    box-shadow: 0 1px 3px color-mix(in srgb, var(--ch) 55%, transparent);
  }
  .ch-cell.latest { animation: ch-fill .5s cubic-bezier(.3,1.6,.5,1); }
  @keyframes ch-fill {
    0% { transform: scale(0); opacity: .2; }
    60% { transform: scale(1.45); opacity: 1; }
    100% { transform: scale(1); }
  }
  .ch-note-s { font-size: 10.5px; color: #a4517f; margin: -4px 0 8px; }
  .ch-forecast {
    font-size: 12px; font-weight: 800; color: #a4517f;
    background: rgba(255,255,255,.6); border-radius: 10px;
    padding: 7px 10px; margin-bottom: 9px; line-height: 1.5;
  }
  .ch-forecast b { color: #d5006a; font-size: 13.5px; }
  .ch-fc-sub { font-weight: 700; color: #b0567f; }
  .ch-foot { display: flex; align-items: center; gap: 10px; }
  .ch-left { flex: 1; min-width: 0; font-size: 12.5px; font-weight: 800; color: #a4517f; }
  .ch-pace { font-weight: 700; color: #b0567f; }
  .ch-plus {
    flex-shrink: 0; border: none; cursor: pointer;
    background: linear-gradient(90deg, var(--ch), #ff1478); color: #fff;
    border-radius: 999px; padding: 10px 22px; font-size: 15px; font-weight: 900;
    box-shadow: 0 4px 12px color-mix(in srgb, var(--ch) 55%, transparent);
    -webkit-tap-highlight-color: transparent;
  }
  .ch-plus:active { transform: translateY(2px) scale(.96); }
  /* 記録一覧 */
  .ch-reclist { display: flex; flex-direction: column; gap: 5px; max-height: 46vh; overflow-y: auto; }
  .ch-rec {
    display: flex; align-items: center; gap: 8px;
    background: #fff5fa; border: 1.5px solid #f3b9d9; border-radius: 12px; padding: 8px 10px;
  }
  .ch-rec-n {
    flex-shrink: 0; min-width: 26px; text-align: center;
    font-size: 12px; font-weight: 900; color: #d5006a;
  }
  .ch-rec-main {
    flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: flex-start;
    border: none; background: transparent; cursor: pointer; text-align: left; padding: 0;
    -webkit-tap-highlight-color: transparent;
  }
  .ch-rec-main:active { opacity: .6; }
  .overlay.ch-memo-over { z-index: 50; }
  .ch-rec-d { font-size: 10.5px; font-weight: 700; color: #a4517f; }
  .ch-rec-m { font-size: 13px; color: #4a3140; word-break: break-word; }
  .ch-rec-m.nomemo { color: #c98cb0; font-weight: 700; }
  .ch-tg-l { font-size: 12.5px; font-weight: 800; color: #a4517f; flex-shrink: 0; }
  @media (prefers-reduced-motion: reduce) {
    .ch-card.celebrate, .ch-cell.latest { animation: none !important; }
    .ch-bar-in { transition: none !important; }
  }

  /* ===== 🌡️ 体調ビュー ===== */
  .hl-screen {
    position: fixed; inset: 0; z-index: 30;
    display: flex; flex-direction: column;
    background: ${pi} #f6bedd; background-size: 240px 240px;
  }
  .hl-scroll { flex: 1; overflow-y: auto; padding: 12px 14px calc(24px + env(safe-area-inset-bottom)); }
  /* 次回予測カード */
  .hl-pred {
    background: linear-gradient(120deg,#fff2fb,#ffe0f2 60%,#ffd0ef);
    border: 2px solid rgba(255,255,255,.9); border-radius: 20px;
    padding: 14px 16px; margin-bottom: 12px;
    box-shadow: 0 8px 18px rgba(255,80,170,.26), inset 0 2px 0 #fff;
  }
  .hl-pred.soon { border-color: #ff1478; box-shadow: 0 8px 20px rgba(255,20,120,.4), inset 0 2px 0 #fff; }
  .hl-pred-l { font-size: 11.5px; font-weight: 800; color: #b0567f; letter-spacing: .04em; }
  .hl-pred-d {
    font-size: 26px; font-weight: 900; color: #d5006a; line-height: 1.2;
    display: flex; align-items: baseline; gap: 10px; margin: 2px 0 3px;
  }
  .hl-pred-in { font-size: 13px; font-weight: 800; color: #ff1478; }
  .hl-pred-sub { font-size: 11.5px; font-weight: 700; color: #a4517f; }
  /* 今日の記録チップ */
  .hl-today { display: flex; flex-wrap: wrap; gap: 7px; }
  .hl-chip {
    border: 1.5px solid #f0a6cf; background: #fff; color: #b04a86;
    border-radius: 999px; padding: 8px 14px; font-size: 13px; font-weight: 800;
    cursor: pointer; -webkit-tap-highlight-color: transparent;
  }
  .hl-chip:active { transform: scale(.95); }
  .hl-chip.hl-period { border-color: #ff4d6d; color: #e11d48; }
  .hl-chip.hl-period.on { background: #e11d48; border-color: #e11d48; color: #fff; }
  .hl-chip.hl-add { border-style: dashed; color: #c2478f; }
  .hl-seg { margin-bottom: 4px; }
  /* 周期チャート */
  .hl-chartwrap { overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 4px; }
  .hl-chart { width: max-content; min-width: 100%; }
  .hl-row { display: flex; align-items: stretch; }
  .hl-rowlabel {
    position: sticky; left: 0; z-index: 3;
    flex: 0 0 62px; width: 62px; box-sizing: border-box;
    display: flex; flex-direction: column; justify-content: center;
    padding: 0 5px; min-height: 26px;
    background: #fff2f9; border-right: 1.5px solid #f3b9d9; border-bottom: 1px solid #fadcec;
  }
  .hl-rl-date { font-size: 10.5px; font-weight: 800; color: #b5005c; line-height: 1.2; }
  .hl-rl-len { font-size: 9px; font-weight: 700; color: #a4517f; }
  .hl-cells { display: flex; gap: 1px; padding: 2px 4px; --hcw: 15px; }
  .hl-cell {
    width: var(--hcw); height: 22px; flex-shrink: 0; border-radius: 4px;
    border: 1px solid #f0c4de; background: rgba(255,255,255,.55);
    display: flex; align-items: center; justify-content: center; gap: 1px;
    flex-wrap: wrap; align-content: center; padding: 1px; box-sizing: border-box;
  }
  .hl-cell.blank { border-color: transparent; background: transparent; }
  .hl-cell.period { background: linear-gradient(160deg,#ff8fa3,#e11d48); border-color: #e11d48; }
  .hl-cell.today { border-color: #4a3140; border-width: 2px; }
  .hl-cell.future { opacity: .4; }
  .hl-dot { width: 5px; height: 5px; border-radius: 50%; display: inline-block; }
  /* 日付ヘッダー */
  .hl-head { position: sticky; top: 0; z-index: 4; }
  .hl-head .hl-rowlabel { z-index: 5; background: #ffe4f3; font-size: 10px; font-weight: 800; color: #b5005c; }
  .hl-head .hl-cells { background: rgba(255,228,243,.96); }
  .hl-dcell {
    width: var(--hcw); flex-shrink: 0; text-align: center;
    font-size: 8.5px; font-weight: 800; color: #9a5b83; padding: 3px 0;
  }
  /* 凡例 */
  .hl-legend { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px; }
  .hl-lg { display: flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 700; color: #7d3a63; }
  .hl-lg-box { width: 12px; height: 12px; border-radius: 3px; display: inline-block; }
  .hl-lg-box.period { background: linear-gradient(160deg,#ff8fa3,#e11d48); }
  .hl-hist-len { font-size: 10.5px; color: #a4517f; margin-left: 4px; }
  /* 日記の中の体調チップ */
  .hl-daily .done-bubble { background: #fff2f7; }
  .habit-chip.hl-p-chip { border-color: #ff4d6d; color: #e11d48; }
  .habit-chip.hl-p-chip.on { background: #e11d48; border-color: #e11d48; color: #fff; }

  /* ===== 🎯 習慣ビュー（月間スタンプ表） ===== */
  .overlay.habit-over { z-index: 50; }
  .hv-open {
    margin-left: auto; flex-shrink: 0; cursor: pointer;
    border: none; border-radius: 999px; padding: 3px 9px;
    background: linear-gradient(90deg,#ff5fb0,#ff1478); color: #fff;
    font-size: 10.5px; font-weight: 800; letter-spacing: .02em;
    box-shadow: 0 2px 6px rgba(255,20,120,.32);
    -webkit-tap-highlight-color: transparent;
  }
  .hv-open:active { transform: scale(.94); }
  .hv-screen {
    position: fixed; inset: 0; z-index: 30;
    display: flex; flex-direction: column;
    background: ${pi} #f6bedd; background-size: 240px 240px;
  }
  .hv-monthbar {
    flex-shrink: 0; display: flex; align-items: center; gap: 10px;
    padding: 8px 12px; background: rgba(255,240,249,.94);
    border-bottom: 1px solid #f3b9d9;
  }
  .hv-mbtn {
    width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0;
    border: 1.5px solid #f0a6cf; background: #fff; color: #d5006a;
    font-size: 18px; font-weight: 900; line-height: 1; cursor: pointer;
    -webkit-tap-highlight-color: transparent; padding: 0;
  }
  .hv-mbtn:active { transform: scale(.9); }
  .hv-month {
    font-size: 17px; font-weight: 900; color: #b5005c;
    letter-spacing: .02em; min-width: 108px; text-align: center;
  }
  .hv-now {
    margin-left: auto; flex-shrink: 0; cursor: pointer;
    border: 1.5px solid #ff1478; background: #fff; color: #d5006a;
    border-radius: 999px; padding: 4px 12px; font-size: 11.5px; font-weight: 800;
  }
  .hv-scroll { flex: 1; overflow: auto; padding: 0 0 24px; -webkit-overflow-scrolling: touch; }
  .hv-table { width: max-content; min-width: 100%; }
  .hv-row { display: flex; align-items: stretch; }

  /* 習慣名の列（左に固定） */
  .hv-name {
    position: sticky; left: 0; z-index: 3;
    flex: 0 0 60px; width: 60px; box-sizing: border-box;
    display: flex; align-items: center; gap: 2px;
    padding: 0 4px; min-height: 32px;
    background: #fff2f9; border-right: 1.5px solid #f3b9d9;
    border-bottom: 1px solid #fadcec;
  }
  .hv-emoji { font-size: 12px; flex-shrink: 0; }
  .hv-nm {
    font-size: 10.5px; font-weight: 700; color: #7d3a63;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }

  /* 日付セルの並び。画面幅に1ヶ月が収まるならぴったり、狭ければ13pxで下げ止まり→横スクロール */
  .hv-cells {
    display: flex; gap: 1px; padding: 2px 4px;
    --cw: clamp(13px, calc((100vw - 116px) / 31 - 1px), 22px);
  }
  .hv-cell {
    width: var(--cw); height: 28px; flex-shrink: 0; padding: 0;
    border-radius: 5px; cursor: pointer;
    border: 1px solid #f0c4de; background: rgba(255,255,255,.55);
    color: #fff; font-size: 10px; line-height: 1;
    display: flex; align-items: center; justify-content: center;
    -webkit-tap-highlight-color: transparent;
  }
  .hv-cell.on {
    background: linear-gradient(160deg,#ff5fb0,#ff1478);
    border-color: #ff1478;
    box-shadow: 0 1px 5px rgba(255,20,120,.5);
  }
  .hv-cell.off {
    background: rgba(190,175,185,.22); border-color: rgba(170,150,165,.28);
    cursor: default;
  }
  .hv-cell.future { opacity: .38; cursor: default; }
  .hv-cell.today { border-color: #8a0044; border-width: 2px; }
  .hv-cell:not(:disabled):active { transform: scale(.86); }

  /* 日付ヘッダー */
  .hv-head { position: sticky; top: 0; z-index: 4; }
  .hv-head .hv-name, .hv-head .hv-count { z-index: 5; background: #ffe4f3; }
  .hv-head .hv-cells { background: rgba(255,228,243,.96); }
  .hv-dcell {
    width: var(--cw); flex-shrink: 0; border-radius: 5px;
    display: flex; flex-direction: column; align-items: center; gap: 1px;
    padding: 3px 0; color: #9a5b83;
  }
  .hv-dnum { font-size: 10px; font-weight: 800; line-height: 1; }
  .hv-dow { font-size: 8px; line-height: 1; opacity: .85; }
  .hv-dcell.sat { color: #2f7fc4; }
  .hv-dcell.sun { color: #ff1478; }
  .hv-dcell.today {
    background: #ff1478; color: #fff;
    box-shadow: 0 2px 7px rgba(255,20,120,.5);
  }
  .hv-corner {
    font-size: 10px; font-weight: 800; color: #b5005c;
    justify-content: center; text-align: center;
  }

  /* 達成回数（右に固定・数字を主役に） */
  .hv-count {
    position: sticky; right: 0; z-index: 3;
    flex: 0 0 46px; width: 46px; box-sizing: border-box;
    display: flex; align-items: baseline; justify-content: center; gap: 1px;
    padding: 0 4px; background: #fff2f9;
    border-left: 1.5px solid #f3b9d9; border-bottom: 1px solid #fadcec;
  }
  .hv-n { font-size: 21px; font-weight: 900; line-height: 1.1; letter-spacing: -.01em; }
  .hv-d { font-size: 10px; font-weight: 700; color: #c69ab4; }
  .hv-count.lv0 .hv-n { color: #d9aec6; }
  .hv-count.lv1 .hv-n { color: #ff7ec0; }
  .hv-count.lv2 .hv-n { color: #ff1478; }
  .hv-count.lv3 .hv-n {
    color: #d5006a; text-shadow: 0 0 10px rgba(255,20,120,.55);
  }
  .hv-count.lv3 { background: linear-gradient(180deg,#fff2f9,#ffe0f0); }

  /* 毎日 / 毎週 の区切り */
  .hv-seprow {
    height: 24px; border-top: 2px dashed #ef6bb0;
    margin-top: 8px; display: flex; align-items: center;
  }
  .hv-seplabel {
    position: sticky; left: 6px; display: inline-block;
    background: #ff1478; color: #fff; border-radius: 999px;
    padding: 3px 10px; font-size: 10px; font-weight: 800;
    box-shadow: 0 2px 6px rgba(255,20,120,.35);
  }
  .mv-marks {
    display: flex; gap: 6px; overflow-x: auto; flex-shrink: 0;
    padding: 8px 12px; background: rgba(255,240,249,.92);
    border-bottom: 1px solid #f3b9d9;
  }
  .mv-chip {
    display: flex; align-items: center; gap: 5px; flex-shrink: 0;
    border: 1.5px solid #f0a6cf; background: #fff; border-radius: 999px;
    padding: 6px 12px; cursor: pointer; min-height: 38px;
    color: #2b2430; /* 未指定だとiOSがボタン既定色(青)を当てるので明示 */
  }
  .mv-chip.on { background: #e0629f; border-color: #e0629f; }
  .mv-chip-m { font-size: 16px; line-height: 1; color: #2b2430; }
  .mv-chip-n { font-size: 11.5px; font-weight: 800; color: #b04a86; }
  .mv-chip.on .mv-chip-n { color: #fff; }
  .mv-list { flex: 1; overflow-y: auto; padding: 10px 12px 24px; }
  .mv-row {
    display: flex; align-items: flex-start; gap: 10px; width: 100%;
    text-align: left; border: none; cursor: pointer;
    background: rgba(255,245,250,.92); border-radius: 14px;
    padding: 11px 13px; margin-bottom: 7px;
    box-shadow: 0 1px 2px rgba(180,90,140,.14);
    -webkit-tap-highlight-color: transparent;
  }
  .mv-row:active { background: #ffe4f1; }
  .mv-date {
    flex-shrink: 0; font-size: 11px; font-weight: 800; color: #c2478f;
    background: #ffe4f1; border-radius: 7px; padding: 3px 7px; margin-top: 1px;
  }
  .mv-text {
    flex: 1; min-width: 0; font-size: 14px; line-height: 1.65;
    color: #4a3140; white-space: pre-wrap; word-break: break-word;
  }
  /* マークバー（箇条書きマークのワンタップ挿入） */
  .markbar {
    display: flex; gap: 5px; align-items: center; overflow-x: auto;
    padding: 2px 0 6px;
  }
  .markchip {
    flex-shrink: 0; border: 1.5px solid #f0a6cf; background: #fff;
    color: #4a3140; border-radius: 10px; min-width: 34px; height: 32px;
    font-size: 16px; cursor: pointer; padding: 0 8px; line-height: 1;
  }
  .markchip:active { transform: scale(.92); }
  .markchip.mark-edit { color: #c2478f; font-size: 14px; border-style: dashed; }
  .mark-manage { display: flex; flex-wrap: wrap; gap: 8px; }
  .mark-item {
    display: inline-flex; align-items: center; gap: 4px;
    border: 1.5px solid #f0a6cf; background: #fff; border-radius: 10px;
    padding: 4px 6px 4px 10px; font-size: 18px; color: #2b2430;
  }
  .mark-item button {
    border: none; background: #ffd9ec; color: #c2478f; border-radius: 6px;
    width: 20px; height: 20px; font-size: 12px; cursor: pointer; line-height: 1;
  }
  /* 吹き出し内インライン編集 */
  .inline-edit { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
  .inline-ta {
    width: 100%; max-width: 100%; border: 1.5px solid #e0629f; border-radius: 12px;
    padding: 8px 10px; font-size: 14.5px; line-height: 1.7;
    background: #fff; color: #4a3140; resize: none; outline: none;
    font-family: inherit; min-height: 60px;
  }
  .inline-edit .markbar { max-width: 100%; }
  /* 削除=左端 / キャンセル・保存=右 / 保存=右下の💌ボタン */
  .inline-btns { display: flex; align-items: center; gap: 8px; }
  .ie-del {
    border: none; border-radius: 999px; padding: 6px 14px; font-size: 12.5px;
    font-weight: 700; cursor: pointer; background: #ff7ab1; color: #fff;
  }
  .ie-del.arm { background: #e23d7c; }
  .ie-cancel {
    margin-left: auto; border-radius: 999px; padding: 6px 14px; font-size: 12.5px;
    font-weight: 700; cursor: pointer; background: #fff; color: #a4356f;
    border: 1.5px solid #f0a6cf;
  }
  .ie-save {
    border: none; width: 46px; height: 36px; border-radius: 999px;
    background: #e0629f; color: #fff; font-size: 19px; cursor: pointer;
    box-shadow: 0 2px 5px rgba(200,60,130,.35); flex-shrink: 0; padding: 0;
  }
  .ie-save:active { transform: scale(.93); }
  /* 編集ツールバー（キーボード直上に固定） */
  .edit-toolbar {
    position: fixed; left: 0; right: 0; z-index: 30;
    background: rgba(255,240,249,.98); border-top: 1px solid #f3b9d9;
    padding: 7px 10px calc(7px + env(safe-area-inset-bottom));
    box-shadow: 0 -3px 14px rgba(180,90,140,.18);
    display: flex; flex-direction: column; gap: 6px;
  }
  .edit-toolbar .markbar { margin: 0; padding: 0; }
  .edit-toolbar .markchip {
    min-width: 44px; height: 44px; font-size: 19px; border-radius: 12px;
  }
  .edit-toolbar .inline-btns { gap: 8px; }
  .edit-toolbar .ie-del,
  .edit-toolbar .ie-cancel { height: 44px; padding: 0 16px; font-size: 13.5px; }
  .edit-toolbar .ie-save { width: 60px; height: 44px; font-size: 22px; }
  /* ＋ フローティングボタン（日記を書く） */
  .fab {
    position: fixed; right: 16px;
    bottom: calc(20px + env(safe-area-inset-bottom));
    width: 58px; height: 58px; border-radius: 50%; border: none;
    background: #e0629f; color: #fff; font-size: 30px; font-weight: 300;
    box-shadow: 0 5px 16px rgba(200,60,130,.5); cursor: pointer; z-index: 12;
    display: flex; align-items: center; justify-content: center; line-height: 1;
  }
  .fab:active { transform: scale(.92); }
  .date-opts { display: flex; flex-direction: column; gap: 8px; }
  .date-opt {
    border: 1.5px solid #f0a6cf; background: #fff; color: #a4356f;
    border-radius: 14px; padding: 15px; font-size: 15px; font-weight: 700;
    cursor: pointer; text-align: center; position: relative; overflow: hidden;
  }
  .date-opt:active { background: #ffe4f1; }
  .date-cal input {
    position: absolute; inset: 0; opacity: 0; width: 100%; cursor: pointer;
  }
  /* 経費型 */
  .exp-summary {
    display: flex; align-items: center; gap: 8px; flex-shrink: 0;
    width: 100%; border: none; cursor: pointer; text-align: left;
    background: rgba(255,240,249,.92); border-bottom: 1px solid #f3b9d9;
    padding: 9px 14px; color: #a4356f;
  }
  .exp-summary-label { font-size: 12.5px; font-weight: 700; }
  .exp-summary-amt { font-size: 18px; font-weight: 800; letter-spacing: .02em; }
  .exp-summary-income { font-size: 13.5px; font-weight: 800; color: #1e9e5b; }
  .exp-summary-arrow { margin-left: auto; font-size: 12px; color: #c2478f; font-weight: 700; }
  .exp-banner {
    flex-shrink: 0; background: #fff0f8; border-bottom: 1px solid #f3b9d9;
    padding: 10px 12px; display: flex; flex-direction: column; gap: 6px;
  }
  .exp-banner-head { font-size: 13px; font-weight: 700; color: #a4356f; }
  .exp-banner-row { display: flex; align-items: center; gap: 6px; }
  .exp-check {
    width: 22px; height: 22px; border-radius: 6px; border: 2px solid #e0629f;
    background: #fff; flex-shrink: 0; cursor: pointer; padding: 0;
  }
  .exp-check.on { background: #e0629f; }
  .exp-check.on::after { content: "✓"; color: #fff; font-weight: 900; font-size: 13px; }
  .exp-banner-name { flex: 1; font-size: 13px; font-weight: 700; color: #4a3140; min-width: 0;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .exp-banner-amt { width: 90px; flex: 0 0 auto; }
  .exp-banner-btns { display: flex; gap: 8px; margin-top: 2px; }
  .exp-banner-btns button { flex: 1; border: none; border-radius: 999px; padding: 8px 0;
    font-size: 12.5px; font-weight: 700; cursor: pointer; }
  .exp-yen { color: #a4356f; font-weight: 700; }
  /* 表 */
  .exp-table { flex: 1; overflow-y: auto; padding: 8px 10px 16px; }
  .exp-divider { text-align: center; margin: 12px 0 8px; color: #a4517f;
    font-size: 12px; font-weight: 700; }
  .exp-row {
    background: rgba(255,255,255,.7); border-radius: 12px; padding: 8px 12px;
    margin-bottom: 6px; cursor: pointer; -webkit-tap-highlight-color: transparent;
    box-shadow: 0 1px 2px rgba(180,90,140,.12);
  }
  .exp-row:active { background: #ffe4f1; }
  /* 収入の行: 緑の左アクセント＋ほんのり緑背景 */
  .exp-row.income { background: rgba(230,250,238,.85); box-shadow: inset 3px 0 0 #2E9E5B, 0 1px 2px rgba(90,170,120,.16); }
  .exp-row.income:active { background: #d6f3e2; }
  .exp-main { display: flex; align-items: center; gap: 8px; }
  .exp-date { font-size: 12px; color: #7d5570; flex-shrink: 0; width: 38px; }
  .exp-cat {
    font-size: 12px; font-weight: 700; border-radius: 8px; padding: 2px 8px;
    max-width: 46%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .exp-amt { margin-left: auto; font-size: 15px; font-weight: 800; color: #4a3140; flex-shrink: 0; }
  .exp-amt.income { color: #1e9e5b; }
  .exp-div-inc { color: #1e9e5b; }
  .exp-memo { font-size: 11.5px; color: #a4517f; margin: 3px 0 0 46px; white-space: pre-wrap; }
  /* 下部カテゴリチップ */
  .exp-cat-chips { flex-wrap: nowrap; }
  .exp-chip {
    border: none; border-radius: 999px; padding: 8px 14px; font-size: 13px;
    font-weight: 700; cursor: pointer; flex-shrink: 0;
    box-shadow: 0 1px 3px rgba(180,90,140,.2);
  }
  .exp-chip:active { transform: scale(.95); }
  .exp-chip-add { background: #fff !important; color: #c2478f !important;
    border: 1.5px dashed #e9a8cc; box-shadow: none; }
  .exp-chip-income { background: linear-gradient(90deg,#34c17a,#1e9e5b) !important; color: #fff !important; }
  .exp-chip.sel { box-shadow: 0 0 0 2px #4a3140 inset; }
  /* 金額入力 */
  .exp-amt-field { display: flex; align-items: center; gap: 6px;
    border: 1.5px solid #e0629f; border-radius: 12px; padding: 6px 12px; background: #fff; }
  .exp-amt-field.income { border-color: #2E9E5B; }
  .exp-amt-field.income .exp-yen-big { color: #1e9e5b; }
  /* 支出/収入 切替（収入タブは緑） */
  .exp-kind-seg button.on.income { background: #1e9e5b; border-color: #1e9e5b; color: #fff; }
  .exp-yen-big { font-size: 24px; font-weight: 800; color: #a4356f; }
  .exp-amt-input { flex: 1; border: none; outline: none; font-size: 26px; font-weight: 800;
    color: #4a3140; background: transparent; text-align: right; width: 100%; }
  /* 集計 */
  .sum-list { display: flex; flex-direction: column; gap: 2px; }
  .sum-row { display: flex; align-items: center; justify-content: space-between; gap: 8px;
    padding: 7px 4px; border-bottom: 1px dashed #f3b9d9; font-size: 13px; color: #4a3140; }
  .sum-amt { font-weight: 800; color: #a4356f; flex-shrink: 0; }
  .sum-inc { color: #1e9e5b; }
  .sum-neg { color: #d5356f; }
  .sum-net { border-top: 1.5px solid #f0a6cf; padding-top: 8px; margin-top: 2px; }
  .sum-grand { border-bottom: none; font-size: 14.5px; font-weight: 800;
    background: #ffe4f1; border-radius: 10px; padding: 10px 12px; margin-top: 6px; }
  /* 習慣チップ（できたこと吹き出し内） */
  .habits-row { display: flex; flex-wrap: wrap; gap: 6px; }
  .habits-row.has-sep { margin-top: 8px; padding-top: 8px; border-top: 1px dashed #e3d2f7; }
  .habit-chip {
    border: 1.5px solid #cdb6ea; background: #fff; color: #8659c4;
    border-radius: 999px; padding: 5px 11px; font-size: 12px; font-weight: 700;
    cursor: pointer; -webkit-tap-highlight-color: transparent;
  }
  .habit-chip.on { background: #e0629f; border-color: #e0629f; color: #fff; }
  /* 繰り越し（指定曜日にDONEにしなかった週次習慣）: 破線で「持ち越し中」を示す */
  .habit-chip.carry { border-style: dashed; border-color: #ef6bb0; color: #d5006a; background: #fff6fb; }
  .habit-chip.carry.on { border-style: solid; background: #e0629f; border-color: #e0629f; color: #fff; }
  .dow-row { display: flex; gap: 5px; flex-basis: 100%; margin-top: 5px; }
  .dow-chip {
    flex: 1; border: 1.5px solid #f0a6cf; background: #fff; color: #b04a86;
    border-radius: 8px; padding: 6px 0; font-size: 12.5px; font-weight: 700; cursor: pointer;
  }
  .dow-chip.on { background: #e0629f; border-color: #e0629f; color: #fff; }
  .habit-chip:active { transform: scale(.95); }
  /* 固定入力バー（キーボード直上に追従） */
  .bar-fixed { position: fixed; left: 0; right: 0; z-index: 20; }
  /* input bar */
  .bar {
    background: rgba(255,240,249,.96); border-top: 1px solid #f3b9d9;
    padding: 8px 10px calc(10px + env(safe-area-inset-bottom));
    flex-shrink: 0;
  }
  .undo-bar {
    flex-shrink: 0; display: flex; align-items: center; gap: 10px;
    justify-content: space-between;
    margin: 0 10px 8px; padding: 9px 12px;
    background: linear-gradient(90deg,#ff5fb0,#ff1478);
    border-radius: 14px; box-shadow: 0 6px 18px rgba(255,20,120,.35);
    animation: undo-in .22s ease-out;
  }
  .undo-msg { color: #fff; font-weight: 800; font-size: 13.5px; }
  .undo-btn {
    flex-shrink: 0; border: none; cursor: pointer;
    background: #fff; color: #d5006a; font-weight: 800; font-size: 13px;
    border-radius: 999px; padding: 7px 15px;
  }
  @keyframes undo-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
  .chips { display: flex; gap: 6px; margin-bottom: 7px; align-items: center;
    overflow-x: auto; }
  .chip {
    border: 1.5px solid #f0a6cf; background: #fff; color: #b04a86;
    border-radius: 999px; padding: 5px 13px; font-size: 12.5px;
    font-weight: 600; cursor: pointer; flex-shrink: 0;
  }
  .chip-on { background: #e0629f; border-color: #e0629f; color: #fff; }
  .chip:disabled { opacity: .45; cursor: default; }
  .chip-date { position: relative; overflow: hidden; }
  .chip-date input {
    position: absolute; inset: 0; opacity: 0; width: 100%; cursor: pointer;
  }
  .exists-note { font-size: 10.5px; color: #b06992; margin-left: 2px; flex-shrink: 0; }
  /* speaker chips */
  .spk-row { display: flex; gap: 6px; margin-bottom: 7px; align-items: center;
    overflow-x: auto; padding: 2px 0; }
  .spk {
    border: 2px solid #f0a6cf; background: #fff; border-radius: 999px;
    padding: 2px; display: flex; align-items: center; gap: 5px;
    cursor: pointer; flex-shrink: 0;
  }
  .spk.on { border-color: #e0629f; background: #ffe4f1; padding-right: 10px; }
  .spk-name { font-size: 12px; font-weight: 700; color: #a4356f; }
  .in-row { display: flex; gap: 8px; align-items: flex-end; }
  .ta {
    flex: 1; border: 1.5px solid #f0a6cf; border-radius: 18px;
    padding: 9px 14px; font-size: 15px; line-height: 1.5;
    resize: none; outline: none; background: #fff; color: #4a3140;
    font-family: inherit; max-height: 140px;
  }
  .ta:focus { border-color: #e0629f; }
  .send {
    width: 42px; height: 42px; border-radius: 50%; border: none;
    background: #e0629f; color: #fff; font-size: 18px; cursor: pointer;
    flex-shrink: 0; box-shadow: 0 2px 5px rgba(200,60,130,.35);
  }
  .send:disabled { background: #f0b3d2; box-shadow: none; }
  .send:active:not(:disabled) { transform: scale(.93); }
  /* member editor */
  .mem-row {
    display: flex; align-items: center; gap: 8px;
    background: #fff; border: 1.5px solid #f0a6cf; border-radius: 14px;
    padding: 8px 10px;
  }
  .mem-name { flex: 1; font-size: 13.5px; font-weight: 700; min-width: 0;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .mem-side { font-size: 10.5px; color: #b06992; flex-shrink: 0; }
  .mem-dot { width: 16px; height: 16px; border-radius: 50%;
    border: 1px solid #e9a8cc; flex-shrink: 0; }
  .mem-btn {
    border: none; background: #ffd9ec; color: #c2478f; border-radius: 8px;
    width: 28px; height: 28px; font-size: 13px; cursor: pointer; flex-shrink: 0;
  }
  .mem-btn:disabled { opacity: .35; }
  .mem-preview {
    align-self: flex-start; border-radius: 10px; padding: 6px 16px;
    font-size: 15px; font-weight: 700; min-width: 80px; text-align: center;
    box-shadow: 0 1px 3px rgba(120,50,90,.2);
  }
  .swatches { display: flex; flex-wrap: wrap; gap: 8px; }
  .swatch {
    width: 30px; height: 30px; border-radius: 50%; cursor: pointer;
    border: 2px solid #e9a8cc;
  }
  .swatch.on { border: 3px solid #e0629f; transform: scale(1.12); }
  .seg { display: flex; gap: 8px; }
  .seg button {
    flex: 1; border: 1.5px solid #f0a6cf; background: #fff; color: #b04a86;
    border-radius: 999px; padding: 8px 0; font-size: 13px; font-weight: 700;
    cursor: pointer;
  }
  .seg button.on { background: #e0629f; border-color: #e0629f; color: #fff; }
  .icon-preview { display: flex; align-items: center; gap: 10px; }
  .upload-btn {
    border: 1.5px solid #f0a6cf; background: #fff; color: #b04a86;
    border-radius: 999px; padding: 7px 14px; font-size: 12.5px;
    font-weight: 700; cursor: pointer; position: relative; overflow: hidden;
  }
  .upload-btn input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
  /* toast */
  .toast {
    position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%);
    background: #4a3140; color: #fff; font-size: 12.5px;
    padding: 8px 16px; border-radius: 999px; z-index: 30;
    max-width: 88vw;
  }
  @media (prefers-reduced-motion: reduce) {
    * { transition: none !important; }
    .todo-react, .todo-row.completing, .todo-row.completing .todo-check { animation: none !important; }
    .todo-row.completing { opacity: .5; }
  }
`;function Xf(e,t,n){if(!e)return;const r=e.selectionStart??e.value.length,o=e.selectionEnd??e.value.length,i=e.value.slice(0,r)+t+e.value.slice(o);n(i),requestAnimationFrame(()=>{try{e.focus();const l=r+t.length;e.setSelectionRange(l,l)}catch{}})}function Gf({marks:e,onInsert:t,onEdit:n}){return s.jsxs("div",{className:"markbar",children:[e.map((r,o)=>s.jsx("button",{className:"markchip",onMouseDown:i=>i.preventDefault(),onClick:()=>t(r),children:r},o)),s.jsx("button",{className:"markchip mark-edit",onMouseDown:r=>r.preventDefault(),onClick:n,"aria-label":"マークを編集",children:"⚙︎"})]})}function Jf(e=!0){const[t,n]=C.useState(0);return C.useEffect(()=>{if(!e||!window.visualViewport){n(0);return}const r=window.visualViewport,o=()=>n(Math.max(0,window.innerHeight-r.height-r.offsetTop));return o(),r.addEventListener("resize",o),r.addEventListener("scroll",o),()=>{r.removeEventListener("resize",o),r.removeEventListener("scroll",o)}},[e]),t}function xg({initial:e,appendNewline:t,marks:n,onEditMarks:r,onSave:o,onCancel:i,onDelete:l,placeholder:a,bottomToolbar:c}){const[h,p]=C.useState(t?e?e+`
`:"":e||""),m=Jf(!!c),f=C.useRef(null),w=()=>{const g=f.current;g&&(g.style.height="auto",g.style.height=Math.min(g.scrollHeight,Math.round(window.innerHeight*.42))+"px")};C.useEffect(()=>{const g=f.current;if(!g)return;g.focus(),w();const d=g.value.length;g.setSelectionRange(d,d),g.scrollTop=g.scrollHeight},[]);const b=g=>Xf(f.current,g+" ",d=>{p(d),requestAnimationFrame(w)}),k=n?s.jsx(Gf,{marks:n,onInsert:b,onEdit:r}):null,L=s.jsxs("div",{className:"inline-btns",children:[l&&s.jsx("button",{className:"ie-del",onClick:l,children:"削除"}),s.jsx("button",{className:"ie-cancel",onClick:i,children:"キャンセル"}),s.jsx("button",{className:"ie-save",onClick:()=>o(h),"aria-label":"保存",children:"💌"})]});return s.jsxs("div",{className:"inline-edit",onClick:g=>g.stopPropagation(),children:[!c&&k,s.jsx("textarea",{ref:f,className:"inline-ta",value:h,placeholder:a,onChange:g=>{p(g.target.value),w()}}),c?s.jsxs("div",{className:"edit-toolbar",style:{bottom:m},onClick:g=>g.stopPropagation(),children:[k,L]}):L]})}function yg(e,t=500){const n=C.useRef({}),r=l=>{if(typeof e!="function"||l.touches&&l.touches.length!==1)return;const a=l.touches?l.touches[0]:l;n.current.x=a.clientX,n.current.y=a.clientY,n.current.fired=!1,clearTimeout(n.current.timer),n.current.timer=setTimeout(()=>{n.current.fired=!0;try{navigator.vibrate&&navigator.vibrate(15)}catch{}e({x:n.current.x,y:n.current.y})},t)},o=l=>{const a=l.touches?l.touches[0]:l;(Math.abs(a.clientX-n.current.x)>10||Math.abs(a.clientY-n.current.y)>10)&&clearTimeout(n.current.timer)},i=()=>clearTimeout(n.current.timer);return{onTouchStart:r,onTouchMove:o,onTouchEnd:i,onTouchCancel:i,onContextMenu:l=>{typeof e=="function"&&(l.preventDefault(),e({x:l.clientX,y:l.clientY}))},onClickCapture:l=>{n.current.fired&&(l.stopPropagation(),l.preventDefault(),n.current.fired=!1)}}}function bu({onLongPress:e,longPressMs:t,children:n,...r}){const o=yg(e,t);return s.jsx("div",{...r,...o,children:n})}function vg({x:e,y:t,onCopy:n,onEdit:r,onDelete:o,onClose:i,top:l,extra:a}){const p=C.useRef(null),[m,f]=C.useState(null);return C.useLayoutEffect(()=>{const w=p.current;if(!w)return;const b=w.offsetHeight,k=window.innerWidth,L=window.innerHeight,g=Math.max(8,Math.min(e-168/2,k-168-8));let d=t+8;d+b>L-8&&(d=t-8-b),d<8&&(d=Math.max(8,L-b-8)),f({left:g,top:d})},[e,t,l,a,r,o]),s.jsx("div",{className:"ctx-overlay",onClick:i,onContextMenu:w=>w.preventDefault(),children:s.jsxs("div",{ref:p,className:"ctx-menu",style:{left:m?m.left:Math.max(8,Math.min(e-168/2,window.innerWidth-168-8)),top:m?m.top:t+8,width:168,maxHeight:`calc(100vh - ${8*2}px)`,overflowY:"auto",visibility:m?"visible":"hidden"},onClick:w=>w.stopPropagation(),children:[(l||[]).map((w,b)=>s.jsx("button",{className:"ctx-item ctx-top",onClick:w.onClick,children:w.label},b)),s.jsx("button",{className:"ctx-item",onClick:n,children:"📋 コピー"}),r&&s.jsx("button",{className:"ctx-item",onClick:r,children:"✏️ 編集"}),(a||[]).map((w,b)=>s.jsx("button",{className:"ctx-item",onClick:w.onClick,children:w.label},b)),o&&s.jsx("button",{className:"ctx-item ctx-del",onClick:o,children:"🗑 削除"})]})})}function Zf({message:e,confirmLabel:t="削除する",onConfirm:n,onCancel:r}){return s.jsx("div",{className:"overlay confirm-over",onClick:r,children:s.jsxs("div",{className:"panel confirm-panel",onClick:o=>o.stopPropagation(),children:[s.jsx("div",{className:"confirm-msg",children:e}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-close",onClick:r,children:"キャンセル"}),s.jsx("button",{className:"p-del arm",onClick:n,children:t})]})]})})}function wg({habits:e,habitAch:t,onToggle:n,onClose:r,onManage:o}){const i=tt(),[l,a]=C.useState(i.slice(0,7)),[c,h]=l.split("-").map(Number),p=new Date(c,h,0).getDate(),m=i.slice(0,7),f=C.useMemo(()=>{const u=[];for(let v=1;v<=p;v++){const j=`${c}-${Fe(h)}-${Fe(v)}`;u.push({d:v,key:j,dow:new Date(c,h-1,v).getDay(),isToday:j===i,future:j>i})}return u},[c,h,p,i]),w=u=>{const v=new Date(c,h-1+u,1);a(`${v.getFullYear()}-${Fe(v.getMonth()+1)}`)},b=(u,v)=>u.freq==="weekly"?(u.days||[]).includes(v):!0,k=u=>{let v=0,j=0;for(const z of f)b(u,z.dow)&&!z.future&&(j+=1),(t[z.key]||[]).includes(u.id)&&(v+=1);return{done:v,total:j}},L=e.filter(u=>u.freq!=="weekly"),g=e.filter(u=>u.freq==="weekly"),d=u=>{const{done:v,total:j}=k(u),z=j?v/j:0,D=v===0?0:z>=.8?3:z>=.5?2:z>=.25?1:0;return s.jsxs("div",{className:"hv-row",children:[s.jsxs("div",{className:"hv-name",children:[s.jsx("span",{className:"hv-emoji",children:u.emoji||"🩷"}),s.jsx("span",{className:"hv-nm",children:u.name})]}),s.jsx("div",{className:"hv-cells",children:f.map(T=>{const F=b(u,T.dow),A=(t[T.key]||[]).includes(u.id);return s.jsx("button",{className:"hv-cell"+(A?" on":"")+(F||A?"":" off")+(T.isToday?" today":"")+(T.future?" future":""),disabled:!F&&!A||T.future,"aria-label":`${h}月${T.d}日 ${u.name}${A?" 達成ずみ":""}`,"aria-pressed":A,onClick:()=>n(T.key,u.id),children:A?"♥":""},T.key)})}),s.jsxs("div",{className:"hv-count lv"+D,children:[s.jsx("span",{className:"hv-n",children:v}),s.jsxs("span",{className:"hv-d",children:["/",j]})]})]},u.id)};return s.jsxs("div",{className:"hv-screen",children:[s.jsxs("div",{className:"hd",children:[s.jsx("button",{className:"back-btn","aria-label":"とじる",onClick:r,children:"‹"}),s.jsxs("div",{style:{minWidth:0},children:[s.jsx("div",{className:"hd-title",children:"🎯 習慣ビュー"}),s.jsx("div",{className:"hd-sub",children:"スタンプで振り返る"})]}),s.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"習慣を編集",onClick:o,children:"⚙︎"})]}),s.jsxs("div",{className:"hv-monthbar",children:[s.jsx("button",{className:"hv-mbtn","aria-label":"前の月",onClick:()=>w(-1),children:"‹"}),s.jsxs("div",{className:"hv-month",children:[c,"年",h,"月"]}),s.jsx("button",{className:"hv-mbtn","aria-label":"次の月",onClick:()=>w(1),children:"›"}),l!==m&&s.jsx("button",{className:"hv-now",onClick:()=>a(m),children:"今月"})]}),e.length===0?s.jsxs("div",{className:"empty",children:["まだ習慣がありません。",`
`,"右上の⚙︎から追加してね💗"]}):s.jsx("div",{className:"hv-scroll",children:s.jsxs("div",{className:"hv-table",children:[s.jsxs("div",{className:"hv-row hv-head",children:[s.jsx("div",{className:"hv-name hv-corner",children:"習慣"}),s.jsx("div",{className:"hv-cells",children:f.map(u=>s.jsxs("div",{className:"hv-dcell"+(u.isToday?" today":"")+(tl(u.key)?" "+tl(u.key):""),children:[s.jsx("span",{className:"hv-dnum",children:u.d}),s.jsx("span",{className:"hv-dow",children:Gm[u.dow]})]},u.key))}),s.jsx("div",{className:"hv-count hv-corner",children:"今月"})]}),L.map(d),g.length>0&&s.jsx("div",{className:"hv-seprow",children:s.jsx("span",{className:"hv-seplabel",children:"毎週の習慣"})}),g.map(d)]})})]})}const ju=40;function kg({periodDays:e,symptoms:t,symptomLog:n,onTogglePeriod:r,onToggleSymptom:o,onClose:i,onManage:l}){const a=tt(),[c,h]=C.useState("before"),p=C.useMemo(()=>ag(e),[e]),m=C.useMemo(()=>cg(p,a),[p,a]),f=u=>t.find(v=>v.id===u),w=n[a]||[],b=u=>e.includes(u),k=C.useMemo(()=>p.map(u=>{let v;u.cycle!=null?v=u.cycle:c==="before"&&m?v=Math.max(kr(u.start,m.next),kr(u.start,a)+1):v=kr(u.start,a)+1,v=Math.min(Math.max(v,1),ju);const j=[];for(let z=0;z<v;z++)j.push(Ja(u.start,z));return{...u,days:j}}),[p,c,m,a]),L=Math.min(ju,Math.max(1,...k.map(u=>u.days.length))),g=[];for(let u=0;u<L;u++)g.push(String(c==="start"?u+1:-(L-u)));const d=u=>{const v=new Array(L).fill(null);if(c==="start")u.days.slice(0,L).forEach((j,z)=>{v[z]=j});else{const j=u.days.slice(-L);j.forEach((z,D)=>{v[L-j.length+D]=z})}return v};return s.jsxs("div",{className:"hl-screen",children:[s.jsxs("div",{className:"hd",children:[s.jsx("button",{className:"back-btn","aria-label":"とじる",onClick:i,children:"‹"}),s.jsxs("div",{style:{minWidth:0},children:[s.jsx("div",{className:"hd-title",children:"🌡️ 体調"}),s.jsx("div",{className:"hd-sub",children:"生理周期と体調のクセを見る"})]}),s.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"項目の設定",onClick:l,children:"⚙︎"})]}),s.jsxs("div",{className:"hl-scroll",children:[s.jsx("div",{className:"hl-pred"+(m&&m.daysLeft<=3?" soon":""),children:m?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"hl-pred-l",children:"次の生理（予測）"}),s.jsxs("div",{className:"hl-pred-d",children:[ue(m.next).slice(5),s.jsx("span",{className:"hl-pred-in",children:m.daysLeft>0?`あと${m.daysLeft}日`:m.daysLeft===0?"今日かも":`${-m.daysLeft}日すぎ`})]}),s.jsxs("div",{className:"hl-pred-sub",children:["平均 ",m.avg,"日周期",m.count>1?`（${m.min}〜${m.max}日 / ${m.count}回分）`:`（${m.count}回分）`]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"hl-pred-l",children:"次の生理（予測）"}),s.jsx("div",{className:"hl-pred-d",children:"まだ出せません"}),s.jsx("div",{className:"hl-pred-sub",children:"生理を2回ぶん記録すると予測できます🩷"})]})}),s.jsx("div",{className:"f-label",children:"今日の記録"}),s.jsxs("div",{className:"hl-today",children:[s.jsxs("button",{className:"hl-chip hl-period"+(b(a)?" on":""),onClick:()=>r(a),children:["🩸 生理",b(a)?" ✓":""]}),t.map(u=>{const v=w.includes(u.id);return s.jsxs("button",{className:"hl-chip"+(v?" on":""),style:v?{background:u.color,borderColor:u.color,color:"#fff"}:{borderColor:u.color,color:u.color},onClick:()=>o(a,u.id),children:[u.emoji?u.emoji+" ":"",u.name,v?" ✓":""]},u.id)}),t.length===0&&s.jsx("button",{className:"hl-chip hl-add",onClick:l,children:"＋ 体調の項目を作る"})]}),s.jsx("div",{className:"f-label",style:{marginTop:10},children:"周期ごとの記録"}),s.jsxs("div",{className:"seg hl-seg",children:[s.jsx("button",{className:c==="start"?"on":"",onClick:()=>h("start"),children:"生理開始から"}),s.jsx("button",{className:c==="before"?"on":"",onClick:()=>h("before"),children:"次の生理まで"})]}),s.jsx("p",{className:"panel-note",children:c==="before"?"右端が「次の生理の前日」。縦に見ると、生理の何日前に出やすいかが分かります。":"左端が「生理1日目」。縦に見ると、周期のどのあたりで出やすいかが分かります。"}),k.length===0?s.jsxs("div",{className:"empty",children:["まだ生理の記録がありません。",`
`,"上の「🩸 生理」から記録してね💗"]}):s.jsx("div",{className:"hl-chartwrap",children:s.jsxs("div",{className:"hl-chart",children:[s.jsxs("div",{className:"hl-row hl-head",children:[s.jsx("div",{className:"hl-rowlabel",children:"周期"}),s.jsx("div",{className:"hl-cells",children:g.map((u,v)=>s.jsx("div",{className:"hl-dcell",children:u},v))})]}),k.map(u=>s.jsxs("div",{className:"hl-row",children:[s.jsxs("div",{className:"hl-rowlabel",children:[s.jsx("span",{className:"hl-rl-date",children:ue(u.start).slice(5)}),s.jsx("span",{className:"hl-rl-len",children:u.cycle!=null?`${u.cycle}日`:"進行中"})]}),s.jsx("div",{className:"hl-cells",children:d(u).map((v,j)=>{if(!v)return s.jsx("div",{className:"hl-cell blank"},j);const z=b(v),D=(n[v]||[]).map(f).filter(Boolean),T=v>a;return s.jsx("div",{className:"hl-cell"+(z?" period":"")+(v===a?" today":"")+(T?" future":""),title:`${ue(v)}${z?" 生理":""}${D.length?" "+D.map(F=>F.name).join("・"):""}`,children:D.slice(0,3).map(F=>s.jsx("span",{className:"hl-dot",style:{background:F.color}},F.id))},j)})})]},u.start))]})}),(t.length>0||k.length>0)&&s.jsxs("div",{className:"hl-legend",children:[s.jsxs("span",{className:"hl-lg",children:[s.jsx("span",{className:"hl-lg-box period"}),"生理"]}),t.map(u=>s.jsxs("span",{className:"hl-lg",children:[s.jsx("span",{className:"hl-dot",style:{background:u.color}}),u.name]},u.id))]}),k.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"f-label",style:{marginTop:12},children:"これまでの記録"}),s.jsx("div",{className:"sum-list",children:k.map(u=>s.jsxs("div",{className:"sum-row",children:[s.jsxs("span",{children:[ue(u.start).slice(5),u.length>1?`〜${ue(u.end).slice(5)}`:"",s.jsxs("span",{className:"hl-hist-len",children:["（",u.length,"日間）"]})]}),s.jsx("span",{className:"sum-amt",children:u.cycle!=null?`周期 ${u.cycle}日`:"進行中"})]},u.start))})]})]})]})}const Su=/https?:\/\/[^\s　-〿぀-ヿ一-鿿＀-￯]+/g,bg=/[.,;:、。）)\]】」』"'！？!?]+$/;function jg(e,t=n=>n){if(!e)return e;const n=[];let r=0,o=0,i;for(Su.lastIndex=0;i=Su.exec(e);){let l=i[0];const a=(l.match(bg)||[""])[0];a&&(l=l.slice(0,l.length-a.length)),l&&(i.index>r&&n.push(s.jsx(C.Fragment,{children:t(e.slice(r,i.index))},o++)),n.push(s.jsx("a",{className:"body-link",href:l,target:"_blank",rel:"noopener noreferrer",onClick:c=>c.stopPropagation(),children:l},o++)),r=i.index+l.length)}return n.length?(r<e.length&&n.push(s.jsx(C.Fragment,{children:t(e.slice(r))},o++)),n):t(e)}const Yr="🎬",Sg=[1,2,3,4,5,6,0];function Ng({room:e,onBack:t,onMeta:n,initialQuery:r,showToast:o,pinned:i,syncSignal:l,marks:a,onEditMarks:c}){const[h,p]=C.useState({}),[m,f]=C.useState({}),[w,b]=C.useState([]),[k,L]=C.useState({}),[g,d]=C.useState(!1),[u,v]=C.useState(null),[j,z]=C.useState(tt()),[D,T]=C.useState(""),[F,A]=C.useState(!!r),[G,ye]=C.useState(r||""),[we,Ne]=C.useState(!1),[on,gt]=C.useState(!1),[Ge,M]=C.useState(""),[H,V]=C.useState(!1),[ee,ae]=C.useState(!1),[st,Je]=C.useState([]),[ie,ce]=C.useState([]),[Ue,ln]=C.useState({}),[Oo,xt]=C.useState(!1),[En,Ro]=C.useState(!1),[He,Bt]=C.useState(null),[Ct,zn]=C.useState(null),[ne,Zn]=C.useState(!1),[wl,kl]=C.useState(120),Ze=C.useRef(null),qe=C.useRef(null),Pr=C.useRef(null),_n=C.useRef(null),$o=Jf(!u);C.useEffect(()=>{(async()=>{try{let x=await W(Ae(e.id));x=typeof x=="string"?JSON.parse(x):x||{};const S=await W(Un(e.id))||{};let N=!1;const R={},U={...S};for(const[ge,Ke]of Object.entries(x))if(Ke&&typeof Ke.text=="string"&&Ke.text.includes(Qf)){const{text:We,items:K}=ig(Ke.text);if(R[ge]={...Ke,text:We},K.length){const Oe=(U[ge]||[]).slice();for(const Ot of K)Oe.some(Et=>Et.text===Ot.text&&Et.time===Ot.time)||Oe.push(Ot);U[ge]=Oe}N=!0}else R[ge]=Ke;N&&(await Q(Ae(e.id),R),await Q(Un(e.id),U)),p(R),f(U);let re=await W(Hn(e.id));const Me=re===void 0;Me&&(re=[{id:Ce(),name:"note投稿",emoji:"📝"},{id:Ce(),name:"キャラ投稿",emoji:"🎨"}]);let at=Me;re=re.map(ge=>ge.freq&&ge.days?ge:(at=!0,{...ge,freq:ge.freq||"daily",days:ge.days||[]})),await W(qi(e.id))||(await Q(qi(e.id),!0),re.some(ge=>ge.name==="週報を書く")||(re=[...re,{id:Ce(),name:"週報を書く",emoji:"📋",freq:"weekly",days:[0]}],at=!0)),at&&await Q(Hn(e.id),re),b(Array.isArray(re)?re:[]),L(await W(Zi(e.id))||{});let ct=await W(Kn(e.id));await W(el(e.id))||(await Q(el(e.id),!0),(!Array.isArray(ct)||!ct.length)&&(ct=[{id:Ce(),name:"眠気",emoji:"😴",color:"#8b6ff0"},{id:Ce(),name:"不正出血",emoji:"💧",color:"#e0629f"}],await Q(Kn(e.id),ct))),ce(Array.isArray(ct)?ct:[]);const yt=await W(_o(e.id));Je(Array.isArray(yt==null?void 0:yt.days)?yt.days:[]),ln(await W(co(e.id))||{})}catch{}finally{d(!0)}})()},[e.id]),C.useEffect(()=>{l&&(async()=>{const x=await W(Ae(e.id));x&&p(typeof x=="string"?JSON.parse(x):x),f(await W(Un(e.id))||{})})()},[l]),C.useEffect(()=>{if(!_n.current||typeof ResizeObserver>"u")return;const x=new ResizeObserver(()=>_n.current&&kl(_n.current.offsetHeight));return x.observe(_n.current),()=>x.disconnect()},[u,F]);const Dn=async x=>{p(x);try{await Q(Ae(e.id),x);const S=Object.keys(x).sort(),N=S[S.length-1];n({preview:N?x[N].text.split(`
`)[0].slice(0,40):"",lastAt:Date.now()})}catch{o("保存に失敗しました。ストレージを確認してね")}};C.useEffect(()=>{!G&&!u&&Ze.current&&(Ze.current.scrollTop=Ze.current.scrollHeight)},[g,G,u]),C.useEffect(()=>{var S;if(!u)return;const x=(S=Ze.current)==null?void 0:S.querySelector(".editing-now");x&&setTimeout(()=>x.scrollIntoView({block:"start",behavior:"smooth"}),60)},[u]);const bl=()=>{const x=D.trim();if(!x)return;const S=h[j];Dn({...h,[j]:S?{...S,text:S.text+`

`+x}:{text:x,time:Wf()}}),T(""),qe.current&&(qe.current.style.height="auto"),setTimeout(()=>{var R;const N=(R=Ze.current)==null?void 0:R.querySelector(`[data-date="${j}"]`);N?N.scrollIntoView({block:"end",behavior:"smooth"}):Ze.current&&(Ze.current.scrollTop=Ze.current.scrollHeight)},50)},qn=x=>{T(x.target.value);const S=x.target;S.style.height="auto",S.style.height=Math.min(S.scrollHeight,140)+"px"},Mr=x=>Xf(qe.current,x+" ",S=>{T(S),requestAnimationFrame(()=>{const N=qe.current;N&&(N.style.height="auto",N.style.height=Math.min(N.scrollHeight,140)+"px")})}),Or=x=>{v(x),ye(""),A(!1)},jl=(x,S)=>{const N=S.trim();if(!N){v(null);return}Dn({...h,[x]:{...h[x],text:N}}),v(null)},Sl=x=>{const S={...h};delete S[x],Dn(S),v(null)},[Rr,Ut]=C.useState(null),Io=x=>Ut({message:`🩷${ue(x)}🩷 の日記を削除しますか？`,onConfirm:()=>{Sl(x),Ut(null)}}),Ao=(x,S)=>{const N=k[x]||[],R=N.includes(S)?N.filter(re=>re!==S):[...N,S],U={...k};R.length?U[x]=R:delete U[x],L(U),Q(Zi(e.id),U).catch(()=>o("保存に失敗しました"))},Ht=x=>{b(x),Q(Hn(e.id),x).catch(()=>o("保存に失敗しました"))},Fo=()=>Ht([...w,{id:Ce(),name:"",emoji:"🩷",freq:"daily",days:[]}]),Kt=(x,S)=>Ht(w.map(N=>N.id===x?{...N,...S}:N)),Bo=(x,S)=>{if(S==="weekly"){const N=w.find(R=>R.id===x);Kt(x,{freq:S,days:N&&N.days&&N.days.length?N.days:[Se(tt()).getDay()]})}else Kt(x,{freq:"daily"})},er=(x,S)=>{const N=w.find(U=>U.id===x),R=(N.days||[]).includes(S)?N.days.filter(U=>U!==S):[...N.days||[],S];Kt(x,{days:R})},Wt=(x,S)=>{const N=x+S;if(N<0||N>=w.length)return;const R=[...w];[R[x],R[N]]=[R[N],R[x]],Ht(R)},$r=x=>{const S=w.find(R=>R.id===x),N=Object.values(k).filter(R=>(R||[]).includes(x)).length;Ut({message:`習慣「${((S==null?void 0:S.emoji)||"")+((S==null?void 0:S.name)||"")}」を削除しますか？`+(N?`
これまでの達成 ${N}日分 の記録も消えます。`:""),onConfirm:()=>{Ht(w.filter(R=>R.id!==x)),Ut(null)}})},Uo=()=>{const x=w.filter(S=>S.name.trim()||S.emoji&&S.emoji.trim());x.length!==w.length&&Ht(x),V(!1)},Ho=x=>{const N=st.includes(x)?st.filter(R=>R!==x):[...st,x].sort();Je(N),Q(_o(e.id),{days:N}).catch(()=>o("保存に失敗しました"))},Ko=(x,S)=>{const N=Ue[x]||[],R=N.includes(S)?N.filter(re=>re!==S):[...N,S],U={...Ue};R.length?U[x]=R:delete U[x],ln(U),Q(co(e.id),U).catch(()=>o("保存に失敗しました"))},Ln=x=>{ce(x),Q(Kn(e.id),x).catch(()=>o("保存に失敗しました"))},Nl=()=>Ln([...ie,{id:Ce(),name:"",emoji:"",color:rs[ie.length%rs.length]}]),Ir=(x,S)=>Ln(ie.map(N=>N.id===x?{...N,...S}:N)),Wo=(x,S)=>{const N=x+S;if(N<0||N>=ie.length)return;const R=[...ie];[R[x],R[N]]=[R[N],R[x]],Ln(R)},tr=x=>{const S=ie.find(R=>R.id===x),N=Object.values(Ue).filter(R=>(R||[]).includes(x)).length;Ut({message:`体調の項目「${(S==null?void 0:S.name)||""}」を削除しますか？`+(N?`
これまでの記録 ${N}日分 も消えます。`:""),onConfirm:()=>{Ln(ie.filter(U=>U.id!==x));const R={};for(const[U,re]of Object.entries(Ue)){const Me=(re||[]).filter(at=>at!==x);Me.length&&(R[U]=Me)}ln(R),Q(co(e.id),R).catch(()=>o("保存に失敗しました")),Ut(null)}})},y=()=>{const x=ie.filter(S=>S.name.trim());x.length!==ie.length&&Ln(x),Ro(!1)},E=()=>ng(h),O=async()=>{try{await navigator.clipboard.writeText(E()),Zn(!0)}catch{try{Pr.current.focus(),Pr.current.select(),document.execCommand("copy"),Zn(!0)}catch{o("コピーできませんでした。全選択して手動でコピーしてね")}}setTimeout(()=>Zn(!1),2e3)},P=()=>{try{const x=new Blob([E()],{type:"text/plain;charset=utf-8"}),S=URL.createObjectURL(x),N=document.createElement("a");N.href=S,N.download=`nachumin-diary-${tg(e.name)}.txt`,document.body.appendChild(N),N.click(),N.remove(),setTimeout(()=>URL.revokeObjectURL(S),3e3)}catch{o("ダウンロードできない環境みたい。コピーを使ってね")}},Y=()=>{const x=rg(Ge),S=Object.keys(x);if(S.length===0){o("読み込める日記が見つかりませんでした 🥺");return}let N=0,R=0;const U={...h};for(const re of S)U[re]?R+=1:(U[re]=x[re],N+=1);Dn(U),gt(!1),M(""),o(`${N}件の日記を復元したよ💗`+(R?`（${R}件はもうあるのでスキップ）`:""))},Z=x=>G?x.split(new RegExp(`(${Vf(G)})`,"gi")).map((N,R)=>N.toLowerCase()===G.toLowerCase()?s.jsx("mark",{className:"hl",children:N},R):N):x,I=x=>jg(x,Z),B=C.useMemo(()=>{var re;const x=(a||[]).filter(Boolean),S=[...x,Yr],N=[...x].sort((Me,at)=>at.length-Me.length),R={},U={};for(const Me of S)R[Me]=0,U[Me]=[];for(const Me of Object.keys(h).sort().reverse()){const at=(((re=h[Me])==null?void 0:re.text)||"").split(`
`).reverse();for(const Tn of at){if(!Tn.trim())continue;const ct=Tn.trim();if(ct.startsWith(nl)){const We=ct.slice(nl.length).trim();We&&(U[Yr].push({dateKey:Me,text:We}),R[Yr]+=1);continue}let yt=Tn.trim();const ge=[];let Ke=!0;for(;Ke;){Ke=!1;for(const We of N)if(yt.startsWith(We)){ge.includes(We)||ge.push(We),yt=yt.slice(We.length).trimStart(),Ke=!0;break}}if(!(!ge.length||!yt))for(const We of ge)U[We]&&(U[We].push({dateKey:Me,text:yt}),R[We]+=1)}}return{counts:R,byMark:U}},[h,a]),te=[...(a||[]).filter(Boolean),Yr],Te=()=>{zn(te.find(x=>B.counts[x]>0)||te[0]||null)},Pe=x=>{zn(null),ye(""),A(!1),setTimeout(()=>{var N;const S=(N=Ze.current)==null?void 0:N.querySelector(`[data-date="${x}"]`);S&&S.scrollIntoView({block:"center",behavior:"smooth"})},90)},Vt=async()=>{const x=B.byMark[Ct]||[];if(!x.length)return;const S=[];let N="";for(const U of x)U.dateKey!==N&&(N=U.dateKey,S.length&&S.push(""),S.push(`🩷${na(N)}🩷`)),S.push(U.text);const R=await yu(S.join(`
`));o(R?"コピーしました🩷":"コピーできませんでした。手動でコピーしてね")},et=x=>{const S=["🩷 できたこと"];for(const U of m[x]||[])S.push(`☑ ${U.text}${U.time?` (${U.time})`:""}`);const N=k[x]||[],R=w.filter(U=>N.includes(U.id)).map(U=>`${U.emoji||""}${U.name}`);return R.length&&S.push("習慣: "+R.join(" ")),S.join(`
`)},qf=async x=>{const S=await yu(x);o(S?"コピーしました🩷":"コピーできませんでした。手動でコピーしてね"),Bt(null)},Za=G.toLowerCase(),Ar=tt(),qa=new Set([...Object.keys(h),...Object.keys(m),...Object.keys(k)]);w.length&&qa.add(Ar);let Vo=[...qa].sort();G&&(Vo=Vo.filter(x=>{const S=h[x]&&(h[x].text+ue(x)).toLowerCase().includes(Za),N=(m[x]||[]).some(R=>R.text.toLowerCase().includes(Za));return S||N}));const ec=ue(j).slice(5),tc=(x,S)=>s.jsx("button",{className:"chip"+(j===S?" chip-on":""),onClick:()=>z(S),children:x},x);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"hd",children:[s.jsx("button",{className:"back-btn","aria-label":"もどる",onClick:t,children:"‹"}),s.jsx("span",{style:{fontSize:20},children:e.emoji}),s.jsxs("div",{children:[s.jsx("div",{className:"hd-title",children:e.name}),s.jsx("div",{className:"hd-sub",children:"Nachumin Lifelog"})]}),s.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"マークで集める",onClick:Te,children:"🔖"}),s.jsx("button",{className:"icon-btn","aria-label":"習慣",onClick:()=>V(!0),children:"🎯"}),s.jsx("button",{className:"icon-btn","aria-label":"体調",onClick:()=>xt(!0),children:"🌡️"}),s.jsx("button",{className:"icon-btn","aria-label":"テキスト書き出し",onClick:()=>Ne(!0),children:"📤"}),s.jsx("button",{className:"icon-btn","aria-label":"テキストから復元",onClick:()=>gt(!0),children:"📥"}),s.jsx("button",{className:"icon-btn","aria-label":"検索",onClick:()=>{A(!F),ye("")},children:F?"✕":"🔍"})]}),i,F&&s.jsx("div",{className:"search-row",children:s.jsx("input",{autoFocus:!0,placeholder:"日記を検索（ことば・日付）",value:G,onChange:x=>ye(x.target.value)})}),s.jsxs("div",{className:"chat",ref:Ze,style:{paddingBottom:u?210:wl+12},children:[g&&Vo.length===0&&s.jsx("div",{className:"empty",children:G?"みつかりませんでした 🥺":`まだ日記がありません。
下から今日のことを書いてみよう💗`}),Vo.map(x=>{const S=u===x,N=!!h[x],R=m[x]||[],U=x===Ar,re=k[x]||[],Me=Se(x).getDay(),at=new Set,Tn=w.filter(K=>{if(K.freq!=="weekly")return!0;const Oe=K.days||[];if(!Oe.length)return!1;if(Oe.includes(Me))return!0;if((k[x]||[]).includes(K.id))return at.add(K.id),!0;let Ot=null;for(let Et=1;Et<=6;Et++){const Qo=Se(x);if(Qo.setDate(Qo.getDate()-Et),Oe.includes(Qo.getDay())){Ot=Qo;break}}if(!Ot)return!1;for(const Et=new Date(Ot);kt(Et)<x;Et.setDate(Et.getDate()+1))if((k[kt(Et)]||[]).includes(K.id))return!1;return at.add(K.id),!0}),ct=Tn.length>0&&(U||N||re.length>0),yt=R.length>0||ct,ge=Ue[x]||[],Ke=st.includes(x),We=(ie.length>0||Ke)&&(U||Ke||ge.length>0);return s.jsxs(C.Fragment,{children:[N&&s.jsxs("div",{className:"row","data-date":x,children:[s.jsx("div",{className:"time",children:h[x].time}),s.jsxs(bu,{className:"bubble"+(S?" editing-now":""),onClick:S?void 0:()=>Or(x),onLongPress:S?void 0:K=>Bt({type:"diary",k:x,x:K.x,y:K.y}),role:"button",tabIndex:0,onKeyDown:K=>!S&&K.key==="Enter"&&Or(x),children:[s.jsx("span",{className:"spark",children:"✨"}),s.jsxs("div",{className:"d-head",children:["🩷",s.jsxs("span",{className:"lnk"+(tl(x)?" wd-"+tl(x):""),children:[ue(x)," ",ta[Se(x).getDay()]]}),"🩷"]}),S?s.jsx(xg,{initial:h[x].text,appendNewline:!0,marks:a,onEditMarks:c,bottomToolbar:!0,onSave:K=>jl(x,K),onCancel:()=>v(null),onDelete:()=>Io(x),placeholder:"内容を書きなおしてね"}):s.jsx("div",{className:"body",children:I(h[x].text)})]})]}),yt&&s.jsx("div",{className:"done-row",style:N?void 0:{marginTop:0},children:s.jsxs(bu,{className:"done-bubble",onLongPress:K=>Bt({type:"done",k:x,x:K.x,y:K.y}),children:[s.jsxs("div",{className:"done-head",children:[s.jsx("span",{children:"🩷 できたこと"}),ct&&s.jsx("button",{className:"hv-open","aria-label":"習慣ビューをひらく",onClick:K=>{K.stopPropagation(),ae(!0)},children:"🎯 習慣ビュー"})]}),R.map((K,Oe)=>s.jsxs("div",{className:"done-line",children:["☑ ",I(K.text),K.time?s.jsxs("span",{className:"done-time",children:[" (",K.time,")"]}):null]},Oe)),ct&&s.jsx("div",{className:"habits-row"+(R.length?" has-sep":""),children:Tn.map(K=>{const Oe=re.includes(K.id),Ot=at.has(K.id);return s.jsxs("button",{className:"habit-chip"+(Oe?" on":"")+(Ot?" carry":""),onClick:()=>Ao(x,K.id),children:[Ot?"⏳ ":"",K.emoji?K.emoji+" ":"",K.name,Oe?" 🩷":""]},K.id)})})]})}),We&&s.jsx("div",{className:"done-row hl-daily",children:s.jsxs("div",{className:"done-bubble",children:[s.jsxs("div",{className:"done-head",children:[s.jsx("span",{children:"🌡️ 体調"}),s.jsx("button",{className:"hv-open","aria-label":"体調ビューをひらく",onClick:K=>{K.stopPropagation(),xt(!0)},children:"🩸 体調ビュー"})]}),s.jsxs("div",{className:"habits-row",children:[s.jsxs("button",{className:"habit-chip hl-p-chip"+(Ke?" on":""),onClick:()=>Ho(x),children:["🩸 生理",Ke?" 🩷":""]}),ie.map(K=>{const Oe=ge.includes(K.id);return s.jsxs("button",{className:"habit-chip"+(Oe?" on":""),style:Oe?{background:K.color,borderColor:K.color,color:"#fff"}:{borderColor:K.color,color:K.color},onClick:()=>Ko(x,K.id),children:[K.emoji?K.emoji+" ":"",K.name,Oe?" 🩷":""]},K.id)})]})]})})]},x)})]}),!u&&s.jsxs("div",{className:"bar bar-fixed",ref:_n,style:{bottom:$o},children:[s.jsxs("div",{className:"chips",children:[tc("今日",Ar),tc("昨日",xu()),s.jsxs("button",{className:"chip chip-date",children:["📅 ",j===Ar||j===xu()?"日付をえらぶ":ec,s.jsx("input",{type:"date",value:j,onChange:x=>x.target.value&&z(x.target.value)})]}),h[j]&&s.jsx("span",{className:"exists-note",children:"この日はもうあるので追記されます"})]}),a&&a.length>0&&s.jsx(Gf,{marks:a,onInsert:Mr,onEdit:c}),s.jsxs("div",{className:"in-row",children:[s.jsx("textarea",{ref:qe,className:"ta",rows:1,placeholder:j===Ar?"今日あったことを書く…":`${ec} に追記…`,value:D,onChange:qn}),s.jsx("button",{className:"send","aria-label":"送信",disabled:!D.trim(),onClick:bl,children:"↑"})]})]}),He&&s.jsx(vg,{x:He.x,y:He.y,onClose:()=>Bt(null),onCopy:()=>{var x;return qf(`🩷${na(He.k)}🩷
`+(He.type==="diary"?((x=h[He.k])==null?void 0:x.text)||"":et(He.k)))},onEdit:He.type==="diary"?()=>{Bt(null),Or(He.k)}:void 0,onDelete:He.type==="diary"?()=>{Bt(null),Io(He.k)}:void 0}),Rr&&s.jsx(Zf,{message:Rr.message,onConfirm:Rr.onConfirm,onCancel:()=>Ut(null)}),Ct!==null&&s.jsxs("div",{className:"mv-screen",children:[s.jsxs("div",{className:"hd",children:[s.jsx("button",{className:"back-btn","aria-label":"とじる",onClick:()=>zn(null),children:"‹"}),s.jsxs("div",{style:{minWidth:0},children:[s.jsx("div",{className:"hd-title",children:"🔖 マークで集める"}),s.jsxs("div",{className:"hd-sub",children:[(B.byMark[Ct]||[]).length,"件 ・ 全期間"]})]}),s.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"ぜんぶコピー",onClick:Vt,children:"📋"})]}),s.jsx("div",{className:"mv-marks",children:te.map(x=>s.jsxs("button",{className:"mv-chip"+(Ct===x?" on":""),onClick:()=>zn(x),children:[s.jsx("span",{className:"mv-chip-m",children:x}),s.jsx("span",{className:"mv-chip-n",children:B.counts[x]||0})]},x))}),s.jsx("div",{className:"mv-list",children:(B.byMark[Ct]||[]).length===0?s.jsx("div",{className:"empty",children:Ct===Yr?`今日のコマはまだありません。
上のピンク留めバーから書くと集まります💗`:`「${Ct||""}」が行頭に付いた行はまだありません。
日記の入力欄でマークを押して書くと集まります💗`}):(B.byMark[Ct]||[]).map((x,S)=>s.jsxs("button",{className:"mv-row",onClick:()=>Pe(x.dateKey),children:[s.jsx("span",{className:"mv-date",children:ue(x.dateKey).slice(5)}),s.jsx("span",{className:"mv-text",children:x.text})]},S))})]}),Oo&&s.jsx(kg,{periodDays:st,symptoms:ie,symptomLog:Ue,onTogglePeriod:Ho,onToggleSymptom:Ko,onClose:()=>xt(!1),onManage:()=>Ro(!0)}),ee&&s.jsx(wg,{habits:w,habitAch:k,onToggle:Ao,onClose:()=>ae(!1),onManage:()=>V(!0)}),En&&s.jsx("div",{className:"overlay habit-over",onClick:y,children:s.jsxs("div",{className:"panel",onClick:x=>x.stopPropagation(),children:[s.jsx("h3",{children:"🌡️ 体調の項目"}),s.jsx("p",{className:"panel-note",children:"記録したい体調を自由に追加できます（眠気・頭痛・むくみ など）。"}),ie.map((x,S)=>s.jsxs("div",{className:"mem-row",style:{flexWrap:"wrap"},children:[s.jsx("input",{className:"f-input",style:{width:54,textAlign:"center",flex:"0 0 auto"},maxLength:4,placeholder:"😴",value:x.emoji||"",onChange:N=>Ir(x.id,{emoji:N.target.value})}),s.jsx("input",{className:"f-input",style:{flex:1,minWidth:0},placeholder:"体調の名前",value:x.name,onChange:N=>Ir(x.id,{name:N.target.value})}),s.jsx("button",{className:"mem-btn",disabled:S===0,onClick:()=>Wo(S,-1),"aria-label":"上へ",children:"↑"}),s.jsx("button",{className:"mem-btn",disabled:S===ie.length-1,onClick:()=>Wo(S,1),"aria-label":"下へ",children:"↓"}),s.jsx("button",{className:"mem-btn",onClick:()=>tr(x.id),"aria-label":"削除",children:"🗑"}),s.jsx("div",{className:"swatches",style:{flexBasis:"100%",marginTop:4},children:rs.map(N=>s.jsx("button",{className:"swatch"+(x.color===N?" on":""),style:{background:N},onClick:()=>Ir(x.id,{color:N}),"aria-label":N},N))})]},x.id)),ie.length===0&&s.jsx("p",{className:"panel-note",children:"まだ項目がありません。追加してね💗"}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",onClick:Nl,children:"＋ 項目を追加"}),s.jsx("button",{className:"p-close",onClick:y,children:"閉じる"})]})]})}),H&&s.jsx("div",{className:"overlay habit-over",onClick:Uo,children:s.jsxs("div",{className:"panel",onClick:x=>x.stopPropagation(),children:[s.jsx("h3",{children:"🎯 習慣"}),s.jsx("p",{className:"panel-note",children:"毎日くり返すこと。日記の「できたこと」からワンタップで記録できます。"}),w.map((x,S)=>s.jsxs("div",{className:"mem-row",style:{flexWrap:"wrap"},children:[s.jsx("input",{className:"f-input",style:{width:54,textAlign:"center",flex:"0 0 auto"},maxLength:4,placeholder:"🩷",value:x.emoji||"",onChange:N=>Kt(x.id,{emoji:N.target.value})}),s.jsx("input",{className:"f-input",style:{flex:1,minWidth:0},placeholder:"習慣の名前",value:x.name,onChange:N=>Kt(x.id,{name:N.target.value})}),s.jsx("button",{className:"mem-btn",disabled:S===0,onClick:()=>Wt(S,-1),"aria-label":"上へ",children:"↑"}),s.jsx("button",{className:"mem-btn",disabled:S===w.length-1,onClick:()=>Wt(S,1),"aria-label":"下へ",children:"↓"}),s.jsx("button",{className:"mem-btn",onClick:()=>$r(x.id),"aria-label":"削除",children:"🗑"}),s.jsxs("div",{className:"seg",style:{flexBasis:"100%",marginTop:4},children:[s.jsx("button",{className:x.freq!=="weekly"?"on":"",onClick:()=>Bo(x.id,"daily"),children:"毎日"}),s.jsx("button",{className:x.freq==="weekly"?"on":"",onClick:()=>Bo(x.id,"weekly"),children:"毎週"})]}),x.freq==="weekly"&&s.jsx("div",{className:"dow-row",children:Sg.map(N=>s.jsx("button",{className:"dow-chip"+((x.days||[]).includes(N)?" on":""),onClick:()=>er(x.id,N),children:ta[N]},N))})]},x.id)),w.length===0&&s.jsx("p",{className:"panel-note",children:"まだ習慣がありません。追加してね💗"}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",onClick:Fo,children:"＋ 習慣を追加"}),s.jsx("button",{className:"p-close",onClick:Uo,children:"閉じる"})]})]})}),we&&s.jsx("div",{className:"overlay",onClick:()=>Ne(!1),children:s.jsxs("div",{className:"panel",onClick:x=>x.stopPropagation(),children:[s.jsx("h3",{children:"📤 日記をテキストで書き出し"}),s.jsx("textarea",{ref:Pr,readOnly:!0,value:E()}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",onClick:O,children:ne?"コピーしたよ💗":"ぜんぶコピー"}),s.jsx("button",{className:"p-dl",onClick:P,children:".txtでDL"}),s.jsx("button",{className:"p-close",onClick:()=>Ne(!1),children:"閉じる"})]})]})}),on&&s.jsx("div",{className:"overlay",onClick:()=>gt(!1),children:s.jsxs("div",{className:"panel",onClick:x=>x.stopPropagation(),children:[s.jsx("h3",{children:"📥 テキストから復元"}),s.jsx("textarea",{placeholder:`エクスポートした .txt の内容をここに貼り付けてね

🩷2026/07/17🩷 9:30
今日あったこと…`,value:Ge,onChange:x=>M(x.target.value)}),s.jsx("p",{className:"panel-note",children:"※ すでにある日付の日記は上書きせずスキップされます"}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",disabled:!Ge.trim(),onClick:Y,children:"読み込む"}),s.jsx("button",{className:"p-close",onClick:()=>{gt(!1),M("")},children:"閉じる"})]})]})})]})}function Cg({items:e,keyOf:t,onReorder:n,renderItem:r,onLongPress:o,longPress:i=320,footer:l}){const[a,c]=C.useState(null),[h,p]=C.useState(null),m=C.useRef(null),f=C.useRef({});f.current.items=e,f.current.keyOf=t,f.current.onReorder=n,f.current.onLongPress=o;const w=a||e,b=v=>{var j;return(j=m.current)==null?void 0:j.querySelector(`[data-dk="${CSS.escape(String(v))}"]`)},k=()=>{const v=m.current;if(!v||f.current.dragKey==null)return;const j=b(f.current.dragKey);if(!j)return;const z=v.getBoundingClientRect(),D=z.left+j.offsetLeft,T=z.top+j.offsetTop,F=f.current.pointerX-f.current.grabX-D,A=f.current.pointerY-f.current.grabY-T;j.style.transform=`translate(${F}px, ${A}px) scale(1.08)`},L=v=>{const j=b(v);if(!j)return;const z=j.getBoundingClientRect();f.current.dragKey=v,f.current.grabX=f.current.pointerX-z.left,f.current.grabY=f.current.pointerY-z.top,f.current.pickupX=f.current.pointerX,f.current.pickupY=f.current.pointerY,f.current.moved=!1,f.current.order=f.current.items.slice(),j.style.zIndex="10",c(f.current.order),p(v);try{navigator.vibrate&&navigator.vibrate(12)}catch{}requestAnimationFrame(k)},g=()=>{const v=m.current;if(!v||f.current.dragKey==null)return;const j=v.getBoundingClientRect(),z=f.current.pointerX-j.left,D=f.current.pointerY-j.top,T=[...v.querySelectorAll("[data-dk]")];let F=0,A=1/0;for(let we=0;we<T.length;we++){const Ne=T[we],on=Ne.offsetLeft+Ne.offsetWidth/2,gt=Ne.offsetTop+Ne.offsetHeight/2,Ge=(z-on)**2+(D-gt)**2;Ge<A&&(A=Ge,F=we)}const G=f.current.order,ye=G.findIndex(we=>f.current.keyOf(we)===f.current.dragKey);if(ye!==-1&&ye!==F){const[we]=G.splice(ye,1);G.splice(F,0,we),c(G.slice())}requestAnimationFrame(k)},d=()=>{if(clearTimeout(f.current.timer),f.current.dragKey!=null){const v=b(f.current.dragKey);if(v&&(v.style.transform="",v.style.zIndex=""),f.current.moved)f.current.onReorder(f.current.order.slice());else if(f.current.onLongPress){const j=f.current.items.find(z=>f.current.keyOf(z)===f.current.dragKey);f.current.onLongPress({item:j,x:f.current.pointerX,y:f.current.pointerY})}f.current.suppress=Date.now()+450}f.current.dragKey=null,p(null),c(null)};C.useEffect(()=>{const v=m.current;if(!v)return;const j=F=>{if(F.touches.length!==1)return;const A=F.target.closest("[data-dk]");if(!A||!v.contains(A))return;const G=F.touches[0];f.current.startX=G.clientX,f.current.startY=G.clientY,f.current.pointerX=G.clientX,f.current.pointerY=G.clientY,f.current.moved=!1;const ye=A.getAttribute("data-dk");clearTimeout(f.current.timer),f.current.timer=setTimeout(()=>{f.current.moved||L(ye)},i)},z=F=>{const A=F.touches[0];if(f.current.pointerX=A.clientX,f.current.pointerY=A.clientY,f.current.dragKey==null){(Math.abs(A.clientX-f.current.startX)>12||Math.abs(A.clientY-f.current.startY)>12)&&(f.current.moved=!0,clearTimeout(f.current.timer));return}(Math.abs(A.clientX-f.current.pickupX)>8||Math.abs(A.clientY-f.current.pickupY)>8)&&(f.current.moved=!0),F.preventDefault(),g()},D=()=>{clearTimeout(f.current.timer),f.current.dragKey!=null&&d()},T=F=>F.preventDefault();return v.addEventListener("touchstart",j,{passive:!0}),v.addEventListener("touchmove",z,{passive:!1}),v.addEventListener("touchend",D,{passive:!0}),v.addEventListener("touchcancel",D,{passive:!0}),v.addEventListener("contextmenu",T),()=>{v.removeEventListener("touchstart",j),v.removeEventListener("touchmove",z),v.removeEventListener("touchend",D),v.removeEventListener("touchcancel",D),v.removeEventListener("contextmenu",T)}},[i]);const u=v=>{f.current.suppress&&Date.now()<f.current.suppress&&(v.stopPropagation(),v.preventDefault(),f.current.suppress=0)};return s.jsxs("div",{ref:m,className:"ig-grid",onClickCapture:u,children:[w.map(v=>{const j=t(v);return s.jsx("div",{"data-dk":j,className:"ig-cell"+(h===j?" dragging":""),children:r(v)},j)}),l]})}function Eg({onBack:e,children:t}){const[n,r]=C.useState(0),[o,i]=C.useState(!1),l=C.useRef(null),a=C.useRef(!1),c=f=>{if(f.touches.length!==1||document.querySelector(".overlay"))return;const w=f.touches[0];w.clientX>28||(l.current={x:w.clientX,y:w.clientY},a.current=!1)},h=f=>{if(!l.current)return;const w=f.touches[0],b=w.clientX-l.current.x,k=w.clientY-l.current.y;if(!a.current){if(Math.abs(b)<8&&Math.abs(k)<8)return;if(Math.abs(k)>Math.abs(b)){l.current=null;return}a.current=!0,i(!1)}r(Math.max(0,b))},p=()=>{if(!l.current)return;const f=Math.min(110,window.innerWidth*.3);i(!0),a.current&&n>f?(r(window.innerWidth),setTimeout(e,190)):r(0),l.current=null,a.current=!1},m=n>0?{transform:`translateX(${n}px)`,transition:o?"transform .19s ease-out":"none",boxShadow:"-10px 0 26px rgba(120,50,90,.18)"}:void 0;return s.jsx("div",{className:"swipe-wrap",style:m,onTouchStart:c,onTouchMove:h,onTouchEnd:p,children:t})}const zg=C.lazy(()=>Tr(()=>import("./TalkRoom-CU6sh8mQ.js"),[],import.meta.url)),_g=C.lazy(()=>Tr(()=>import("./TodoRoom-BQl9jfos.js"),[],import.meta.url)),Dg=C.lazy(()=>Tr(()=>import("./DarelogRoom-DB2EacAQ.js"),__vite__mapDeps([0,1]),import.meta.url)),Lg=C.lazy(()=>Tr(()=>import("./ExpenseRoom-DB4-K4Jh.js"),[],import.meta.url)),Tg=C.lazy(()=>Tr(()=>import("./ChallengeRoom-DBrbRDSY.js"),[],import.meta.url)),Pg=["💗","🩷","💛","🩵","💜","🤍","🖤","🌸","🌷","🎀","🌟","✨","⭐️","👑","🫶","🐰","🐻","🐱","🦄","🌙","🌊","🌿","🍓","🍒","🧸","📖","💬","✅","🌗","💰"];function Mg(){const[e,t]=C.useState(null),[n,r]=C.useState({screen:"home"}),[o,i]=C.useState(!1),[l,a]=C.useState(""),[c,h]=C.useState(null),[p,m]=C.useState(null),[f,w]=C.useState(!1),[b,k]=C.useState(null),[L,g]=C.useState(""),[d,u]=C.useState(null),[v,j]=C.useState(""),[z,D]=C.useState(0),[T,F]=C.useState(null),[A,G]=C.useState(!1),ye=C.useRef(null),we=C.useRef(0),[Ne,on]=C.useState(Wm),[gt,Ge]=C.useState(!1),[M,H]=C.useState(""),[V,ee]=C.useState(!1),[ae,st]=C.useState(""),[Je,ie]=C.useState(""),[ce,Ue]=C.useState(null),[ln,Oo]=C.useState(!1),[xt,En]=C.useState(null),[Ro,He]=C.useState(!1),[Bt,Ct]=C.useState(""),zn=C.useRef(null),ne=(y,E=3e3)=>{Ct(y),clearTimeout(zn.current),zn.current=setTimeout(()=>Ct(""),E)};C.useEffect(()=>{(async()=>{try{const y=await Qm();y.some(Y=>Y.id===ke)&&r({screen:"room",roomId:ke}),t(y);const[E,O,P]=await Promise.all([W(Ci),W(zo),W(es)]);E&&E.dateKey===tt()&&g(E.text),Array.isArray(O)&&O.length&&on(O),Ue(P||{})}catch{ne("データの読み込みに失敗しました"),t([])}})()},[]),C.useEffect(()=>{if(n.screen!=="home")return;let y=!0;return(async()=>{try{let E=await W(Ae(ke));E=typeof E=="string"?JSON.parse(E):E||{};const O=E[tt()];if(!y)return;O&&typeof O.text=="string"&&O.text.trim()?F({written:!0,preview:O.text.split(`
`)[0].slice(0,34)}):F({written:!1})}catch{y&&F({written:!1})}})(),()=>{y=!1}},[n.screen,z]),C.useEffect(()=>{n.screen==="home"&&ye.current&&(ye.current.scrollTop=we.current)},[n.screen]);const Zn=y=>{t(E=>{let O=E;return E.find(P=>P.id===ke)||(O=[...E,{id:ke,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),O=O.map(P=>P.id===ke?{...P,...y!=null?{preview:y}:{},lastAt:Date.now()}:P),Q(Jt,O),O}),D(E=>E+1)},wl=async({text:y,time:E,dateKey:O})=>{try{const P=Un(ke),Y=await W(P)||{},Z=(Y[O]||[]).slice();Z.some(I=>I.text===y&&I.time===E)||Z.push({text:y,time:E}),await Q(P,{...Y,[O]:Z}),Zn(`🩷 できたこと ☑ ${y}`.slice(0,40))}catch{ne("できたことの記録に失敗しました")}},kl=async({text:y,time:E,dateKey:O})=>{try{const P=Un(ke),Y=await W(P)||{},Z=(Y[O]||[]).filter(B=>!(B.text===y&&B.time===E)),I={...Y};Z.length?I[O]=Z:delete I[O],await Q(P,I),Zn(null)}catch{}},Ze=y=>{t(y),Q(Jt,y).catch(()=>ne("保存に失敗しました"))},qe=(y,E)=>{t(O=>{const P=O.map(Y=>Y.id===y?{...Y,...E}:Y);return Q(Jt,P).catch(()=>ne("保存に失敗しました")),P})},Pr=async(y,E,O)=>{try{const P=(e||[]).find(et=>et.id===E);if(!P)return{ok:!1};const Y=Ae(E),Z=await W(Y)||{},I=Array.isArray(Z.todos)?Z.todos:[],B=(O||"").trim(),te=B?(P.places||[]).find(et=>(et.name||"").trim()===B):null,Te={...y,placeId:te?te.id:null},Pe=[...I,Te];await Q(Y,{...Z,todos:Pe});const Vt=Pe.filter(et=>!et.done&&!et.deferred).length;return qe(E,{preview:`${Te.done?"☑":"☐"} ${(Te.text||"").split(`
`)[0]}`.slice(0,40),todoOpen:Vt,lastAt:Date.now()}),{ok:!0,placeDropped:!!B&&!te,placeKept:!!te}}catch{return{ok:!1}}},_n=async y=>{const E=y.trim();if(!E)return;const O=tt();try{await Q(Ci,{dateKey:O,text:E}),g(E);const P=Ae(ke);let Y=await W(P);Y=Y&&typeof Y=="object"?Y:{};const Z=Y[O],I=sg(Z?Z.text:"",E);Y={...Y,[O]:{text:I,time:Z?Z.time:Wf()}},await Q(P,Y);const B=Object.keys(Y).sort(),te=B[B.length-1],Te=Y[te].text.split(`
`)[0].slice(0,40);t(Pe=>{let Vt=Pe;return Pe.find(et=>et.id===ke)||(Vt=[...Pe,{id:ke,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),Vt=Vt.map(et=>et.id===ke?{...et,preview:Te,lastAt:Date.now()}:et),Q(Jt,Vt),Vt}),D(Pe=>Pe+1),ne("今日のコマをピン留めしたよ🩷")}catch{ne("宣言の保存に失敗しました")}},$o=y=>{on(y),Q(zo,y).catch(()=>ne("マークの保存に失敗しました"))},Dn=()=>{const y=M.trim();if(y){if(Ne.includes(y)){H("");return}$o([...Ne,y]),H("")}},bl=y=>$o(Ne.filter(E=>E!==y));C.useEffect(()=>{!o||!e||(async()=>{const y={};for(const E of e)y[E.id]=await W(Ae(E.id));h(y)})()},[o,e]);const qn=e||[],Mr=C.useMemo(()=>{if(!l||!c||!e)return null;const y=l.toLowerCase(),E=[];for(const O of qn){const P=c[O.id],Y=[];if(O.type==="diary"){const Z=P&&typeof P=="object"?P:{};for(const I of Object.keys(Z).sort())(Z[I].text+ue(I)).toLowerCase().includes(y)&&Y.push({snippet:Z[I].text.split(`
`)[0],date:ue(I)})}else if(O.type==="todo"){const Z=P&&Array.isArray(P.todos)?P.todos:[];for(const I of Z)(I.text+ue(I.dateKey)).toLowerCase().includes(y)&&Y.push({snippet:`${I.done?"☑":"☐"} ${I.text.split(`
`)[0]}`,date:ue(I.dateKey)})}else if(O.type==="darelog"){const Z=P&&Array.isArray(P.records)?P.records:[],I=B=>{var te,Te;return((Te=(te=O.members)==null?void 0:te.find(Pe=>Pe.id===B))==null?void 0:Te.name)||""};for(const B of Z){const te=I(B.memberId);(te+(B.memo||"")+ue(B.dateKey)).toLowerCase().includes(y)&&Y.push({snippet:`${te}${B.memo?`: ${B.memo}`:""}`,date:ue(B.dateKey)})}}else if(O.type==="expense"){const Z=P&&Array.isArray(P.expenses)?P.expenses:[],I=B=>{var te,Te;return((Te=(te=O.categories)==null?void 0:te.find(Pe=>Pe.id===B))==null?void 0:Te.name)||""};for(const B of Z)(I(B.categoryId)+(B.memo||"")+String(B.amount)+ue(B.dateKey)).toLowerCase().includes(y)&&Y.push({snippet:`${I(B.categoryId)} ¥${B.amount}${B.memo?" "+B.memo:""}`,date:ue(B.dateKey)})}else{const Z=P&&Array.isArray(P.messages)?P.messages:[],I=B=>{var te,Te;return((Te=(te=O.members)==null?void 0:te.find(Pe=>Pe.id===B))==null?void 0:Te.name)||""};for(const B of Z)((B.text+ue(B.dateKey)).toLowerCase().includes(y)||I(B.memberId).toLowerCase().includes(y))&&Y.push({snippet:`${I(B.memberId)||"？"}: ${B.text.split(`
`)[0]}`,date:ue(B.dateKey)})}Y.length===0&&O.name.toLowerCase().includes(y)&&Y.push({snippet:O.preview||"",date:""}),Y.length&&E.push({room:O,hits:Y})}return E},[l,c,qn,e]),Or=y=>l?y.split(new RegExp(`(${Vf(l)})`,"gi")).map((O,P)=>O.toLowerCase()===l.toLowerCase()?s.jsx("mark",{className:"hl",children:O},P):O):y,jl=()=>{const y=p.name.trim();if(!y){ne("ルーム名を入れてね");return}const E={diary:"💗",todo:"✅",darelog:"🌗",expense:"💰",challenge:"🏁",talk:"🩷"}[p.type]||"🩷",O=p.type==="darelog"?[{id:Ce(),name:"ブルー",color:"#d4f0ff",icon:{type:"emoji",value:"🌊"},side:"left"},{id:Ce(),name:"グリーン",color:"#d9ffe3",icon:{type:"emoji",value:"🌿"},side:"left"},{id:Ce(),name:"ピンク",color:"#ffd9ec",icon:{type:"emoji",value:"🌸"},side:"right"}]:[],P=p.type==="expense"?[{id:Ce(),name:"AI費用",emoji:"🤖",color:"#2196F3"},{id:Ce(),name:"ピンクグッズ",emoji:"🎀",color:"#E91E63"},{id:Ce(),name:"ネイル",emoji:"💅",color:"#9C27B0"},{id:Ce(),name:"旅費交通費",emoji:"🚃",color:"#00A5B5",transit:!0}]:void 0,Y={id:Ce(),type:p.type,name:y,emoji:p.emoji.trim()||E,theme:p.theme||qr,members:O,createdAt:Date.now(),lastAt:0,preview:"",...p.type==="todo"?{shopping:!!p.shopping}:{},...P?{categories:P,subscriptions:[],subsPosted:{},transitSeeded:!0,stations:[],fares:[],defaultFromId:null,roundTripDefault:!1,incomeSeeded:!0,incomeCategories:[{id:Ce(),name:"売上",emoji:"💰",color:"#2E9E5B"},{id:Ce(),name:"返金",emoji:"↩️",color:"#3BA7A0"},{id:Ce(),name:"その他",emoji:"✨",color:"#7FB800"}]}:{}};Ze([...e,Y]),m(null),r({screen:"room",roomId:Y.id})},Sl=()=>{const y=p.name.trim();if(!y){ne("ルーム名を入れてね");return}qe(p.roomId,{name:y,emoji:p.emoji.trim()||"💗",theme:p.theme||qr,hidden:!!p.hidden,...p.type==="todo"?{shopping:!!p.shopping}:{}}),m(null)},Rr=y=>{m({mode:"edit",roomId:y.id,name:y.name,emoji:y.emoji,type:y.type,shopping:!!y.shopping,theme:y.theme||qr,hidden:!!y.hidden}),w(!1)},Ut=async y=>{try{const E=await W(Ae(y));E&&await Q(Km(y),E),Ze(e.filter(O=>O.id!==y)),m(null),k(null),ne("ルームを削除しました")}catch{ne("削除に失敗しました")}},Io=()=>{const y=e.find(E=>E.id===p.roomId);k({message:`ルーム「${(y==null?void 0:y.name)||""}」を削除しますか？
中の記録もすべて消えます。`,onConfirm:()=>Ut(p.roomId)})},Ao=async()=>{ie(""),He(!1);try{const y=await vu();st(JSON.stringify(y,null,2))}catch{st("")}ee(!0)},Ht=async()=>{const y={...ce||{},lastDateKey:tt(),lastAt:Date.now()};Ue(y);try{await Q(es,y)}catch{}},Fo=y=>{const E=new Blob([y],{type:"application/json;charset=utf-8"}),O=URL.createObjectURL(E),P=document.createElement("a");P.href=O,P.download=fi,document.body.appendChild(P),P.click(),P.remove(),setTimeout(()=>URL.revokeObjectURL(O),3e3)},Kt=async()=>{if(!ln){Oo(!0);try{let y;try{y=JSON.stringify(await vu(),null,2)}catch{ne("バックアップの作成に失敗しました 🥺");return}try{const E=new File([y],fi,{type:"application/json"});if(navigator.canShare&&navigator.canShare({files:[E]})){await navigator.share({files:[E],title:fi}),await Ht(),ne("バックアップを保存したよ💗 同じファイルに置き換えできたかな？");return}}catch(E){if(E&&(E.name==="AbortError"||E.name==="NotAllowedError"))return}try{Fo(y),await Ht(),ne("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{ne("保存できない環境みたい。コピーを使ってね")}}finally{Oo(!1)}}},Bo=()=>{try{Fo(ae),Ht(),ne("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{ne("保存できない環境みたい。コピーを使ってね")}},er=tt(),Wt=(()=>{if(!(ce!=null&&ce.lastDateKey))return null;const y=Se(er)-Se(ce.lastDateKey);return Math.max(0,Math.round(y/864e5))})(),$r=Wt===null||Wt>=7,Uo=!!ce&&ce.lastDateKey!==er&&ce.dismissedDateKey!==er,Ho=async()=>{const y={...ce||{},dismissedDateKey:er};Ue(y);try{await Q(es,y)}catch{}},Ko=async()=>{try{await navigator.clipboard.writeText(ae),He(!0),setTimeout(()=>He(!1),2e3)}catch{ne("コピーできませんでした。全選択して手動でコピーしてね")}},Ln=y=>{var P;const E=(P=y.target.files)==null?void 0:P[0];if(!E)return;const O=new FileReader;O.onload=()=>ie(String(O.result||"")),O.onerror=()=>ne("ファイルを読めませんでした"),O.readAsText(E),y.target.value=""},Nl=()=>{let y;try{y=JSON.parse(Je)}catch{ne("JSONとして読めませんでした。ファイルが壊れているかも 🥺",4e3);return}const E=dg(y);if(E){ne(E,4500);return}En({obj:y,counts:fg(y),exportedAt:y.exportedAt||"",version:y.version})},Ir=async()=>{const y=xt==null?void 0:xt.obj;if(y)try{const E=await hg(y);t(E.rooms),y.declaration&&y.declaration.dateKey===tt()&&!L&&(await Q(Ci,y.declaration),g(y.declaration.text)),D(O=>O+1),En(null),ee(!1),ie(""),ne(`復元完了💗 ${E.addedRooms}ルーム / ${E.addedItems}件を追加`)}catch{En(null),ne("復元中にエラーが出ました。ファイルが壊れているかも 🥺",4e3)}};if(!e)return s.jsx("div",{className:"app",children:s.jsx("style",{children:ku})});const Wo=s.jsxs("div",{className:"pin",onClick:()=>{j(L),u(L?"view":"edit")},role:"button",children:[s.jsx("span",{className:"pin-ic",children:L?"📌":"🩷"}),L?s.jsx("span",{className:"pin-txt",children:L}):s.jsx("span",{className:"pin-ph",children:"今日のコマをえらぶ🩷"})]});let tr;if(n.screen==="room"){const y=e.find(E=>E.id===n.roomId);if(!y)tr=null,setTimeout(()=>r({screen:"home"}),0);else{const E={room:y,onBack:()=>r({screen:"home"}),onMeta:P=>qe(y.id,P),initialQuery:n.q,showToast:ne,pinned:Wo},O=y.type==="diary"?s.jsx(Ng,{...E,syncSignal:z,marks:Ne,onEditMarks:()=>Ge(!0)},y.id):y.type==="todo"?s.jsx(_g,{...E,onTodoComplete:wl,onTodoUncomplete:kl,onRoomChange:P=>qe(y.id,P),todoRooms:e.filter(P=>P.type==="todo"&&P.id!==y.id),onMoveTodo:Pr},y.id):y.type==="darelog"?s.jsx(Dg,{...E,onRoomChange:P=>qe(y.id,P)},y.id):y.type==="expense"?s.jsx(Lg,{...E,onRoomChange:P=>qe(y.id,P)},y.id):y.type==="challenge"?s.jsx(Tg,{...E},y.id):s.jsx(zg,{...E,onRoomChange:P=>qe(y.id,P)},y.id);tr=s.jsx(Eg,{onBack:()=>r({screen:"home"}),children:s.jsx(C.Suspense,{fallback:s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"hd hd-loading"}),s.jsx("div",{className:"chat"})]}),children:O})},y.id)}}else tr=s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"hd hd-home",children:[s.jsx("div",{className:"app-brand",children:s.jsx("div",{className:"app-title",children:"💖Nachumin Lifelog💖"})}),s.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"バックアップ",onClick:Ao,children:"💾"}),s.jsx("button",{className:"icon-btn","aria-label":"新しいルーム",onClick:()=>m({mode:"new",name:"",emoji:"",type:"talk"}),children:"➕"}),s.jsx("button",{className:"icon-btn","aria-label":"ぜんぶ検索",onClick:()=>{i(!o),a("")},children:o?"✕":"🔍"})]}),Uo&&s.jsxs("div",{className:"bk-banner"+($r?" stale":""),children:[s.jsxs("button",{className:"bk-main",onClick:Kt,disabled:ln,children:[s.jsx("span",{className:"bk-ttl",children:"💾 今日のバックアップ🩷"}),s.jsx("span",{className:"bk-sub",children:Wt===null?"まだ一度も保存していません":$r?`最後の保存から ${Wt}日 たっています`:"タップで1ファイルに書き出し"})]}),s.jsx("button",{className:"bk-x","aria-label":"閉じる",onClick:Ho,children:"✕"})]}),o&&s.jsx("div",{className:"search-row",children:s.jsx("input",{autoFocus:!0,placeholder:"ぜんぶのルームから検索（ことば・話者・日付）",value:l,onChange:y=>a(y.target.value)})}),Mr?s.jsx("div",{className:"rooms",children:Mr.length===0?s.jsx("div",{className:"empty",children:"みつかりませんでした 🥺"}):Mr.map(({room:y,hits:E})=>s.jsxs("div",{className:"room-row",onClick:()=>r({screen:"room",roomId:y.id,q:l}),children:[s.jsx("div",{className:"r-ic",children:y.emoji}),s.jsxs("div",{className:"r-main",children:[s.jsx("div",{className:"r-name",children:y.name}),s.jsx("div",{className:"r-prev",children:Or(E[0].snippet)})]}),s.jsxs("div",{className:"r-side",children:[s.jsxs("span",{className:"r-badge",children:[E.length,"件"]}),E[0].date&&s.jsx("span",{className:"r-date",children:E[0].date})]})]},y.id))}):s.jsx("div",{className:"home-scroll",ref:ye,onScroll:y=>{we.current=y.target.scrollTop},children:(()=>{const y=e.find(I=>I.id===ke),E=qn.filter(I=>I.id!==ke&&!I.hidden),O=qn.filter(I=>I.id!==ke&&I.hidden),P=Se(tt()),Y=T?T.written?T.preview:`${P.getMonth()+1}/${P.getDate()}・きょうの分はまだ`:"…",Z=I=>{const B=[...I];Ze(e.map(te=>te.id===ke||te.hidden?te:B.shift()))};return s.jsxs(s.Fragment,{children:[y&&s.jsxs("button",{className:"diary-card",onClick:()=>r({screen:"room",roomId:y.id}),children:[s.jsx("span",{className:"dc-ic",children:y.emoji}),s.jsxs("span",{className:"dc-main",children:[s.jsx("span",{className:"dc-name",children:"DIARY"}),s.jsx("span",{className:"dc-sub",children:Y})]}),s.jsx("span",{className:"dc-arw",children:"›"})]}),s.jsx(Cg,{items:E,keyOf:I=>I.id,onReorder:Z,onLongPress:({item:I})=>{I&&Rr(I)},footer:s.jsx("div",{className:"ig-cell ig-add",children:s.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>m({mode:"new",name:"",emoji:"",type:"talk"}),onKeyDown:I=>I.key==="Enter"&&m({mode:"new",name:"",emoji:"",type:"talk"}),children:[s.jsx("span",{className:"ig-btn",children:"＋"}),s.jsx("span",{className:"ig-name",children:"つくる"})]})}),renderItem:I=>{const B=I.type==="todo"&&I.todoOpen>0?I.todoOpen:null;return s.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>r({screen:"room",roomId:I.id}),onKeyDown:te=>te.key==="Enter"&&r({screen:"room",roomId:I.id}),children:[s.jsxs("span",{className:"ig-btn",style:wu(I.theme),children:[I.emoji,B!=null&&s.jsx("span",{className:"ig-badge",children:B>99?"99+":B})]}),s.jsx("span",{className:"ig-name",children:I.name})]})}}),O.length>0&&s.jsx("button",{className:"hidden-entry",onClick:()=>G(!0),children:"🙈 非表示のルーム"}),A&&s.jsx("div",{className:"overlay",onClick:()=>G(!1),children:s.jsxs("div",{className:"panel",onClick:I=>I.stopPropagation(),children:[s.jsx("h3",{children:"🙈 非表示のルーム"}),s.jsx("p",{className:"panel-note",children:"一覧に出していないルームです。中の記録は消えていません。「戻す」でまた表示できます。"}),s.jsx("div",{className:"move-list",children:O.map(I=>s.jsxs("div",{className:"move-item as-row",children:[s.jsx("span",{className:"move-ic",children:I.emoji}),s.jsx("span",{className:"move-name",children:I.name}),s.jsx("button",{className:"unhide-btn",onClick:()=>qe(I.id,{hidden:!1}),children:"戻す"})]},I.id))}),s.jsx("div",{className:"panel-btns",children:s.jsx("button",{className:"p-close",onClick:()=>G(!1),children:"閉じる"})})]})})]})})()})]});return s.jsxs("div",{className:"app",children:[s.jsx("style",{children:ku}),tr,p&&s.jsx("div",{className:"overlay",onClick:()=>{m(null),w(!1)},children:s.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[s.jsx("h3",{children:p.mode==="new"?"➕ 新しいルーム":"⚙️ ルーム設定"}),s.jsx("div",{className:"f-label",children:"ルーム名"}),s.jsx("input",{className:"f-input",autoFocus:p.mode==="new",placeholder:"ハートるんず",value:p.name,onChange:y=>m(E=>({...E,name:y.target.value}))}),s.jsx("div",{className:"f-label",children:"アイコン（タップで選ぶ）"}),s.jsx("div",{className:"emoji-picks",children:Pg.map(y=>s.jsx("button",{className:"emoji-pick"+(p.emoji===y?" on":""),onClick:()=>m(E=>({...E,emoji:y})),children:y},y))}),s.jsx("input",{className:"f-input",style:{width:130,textAlign:"center",marginTop:4},maxLength:8,placeholder:"または自由入力",value:p.emoji,onChange:y=>m(E=>({...E,emoji:y.target.value}))}),s.jsx("div",{className:"f-label",children:"テーマカラー"}),s.jsx("div",{className:"theme-swatches",children:Yf.map(y=>{const E=(p.theme||qr)===y;return s.jsx("button",{className:"theme-sw"+(E?" on":""),style:wu(y),"aria-label":y,onClick:()=>m(O=>({...O,theme:y}))},y)})}),s.jsxs("div",{className:"f-label",children:["タイプ",p.mode==="edit"?"（変更できません）":""]}),s.jsxs("div",{className:"type-row",children:[s.jsxs("button",{className:"type-chip"+(p.type==="diary"?" on":""),disabled:p.mode==="edit",onClick:()=>m(y=>({...y,type:"diary"})),children:["📖 日記",s.jsx("small",{children:"1日=1吹き出し"})]}),s.jsxs("button",{className:"type-chip"+(p.type==="talk"?" on":""),disabled:p.mode==="edit",onClick:()=>m(y=>({...y,type:"talk"})),children:["💬 トーク",s.jsx("small",{children:"話者ごと"})]}),s.jsxs("button",{className:"type-chip"+(p.type==="todo"?" on":""),disabled:p.mode==="edit",onClick:()=>m(y=>({...y,type:"todo"})),children:["✅ TODO",s.jsx("small",{children:"やること"})]}),s.jsxs("button",{className:"type-chip"+(p.type==="darelog"?" on":""),disabled:p.mode==="edit",onClick:()=>m(y=>({...y,type:"darelog"})),children:["🌗 だれログ",s.jsx("small",{children:"朝昼夜の記録"})]}),s.jsxs("button",{className:"type-chip"+(p.type==="expense"?" on":""),disabled:p.mode==="edit",onClick:()=>m(y=>({...y,type:"expense"})),children:["💰 経費",s.jsx("small",{children:"支出を記録"})]}),s.jsxs("button",{className:"type-chip"+(p.type==="challenge"?" on":""),disabled:p.mode==="edit",onClick:()=>m(y=>({...y,type:"challenge"})),children:["🏁 チャレンジ",s.jsx("small",{children:"100個の目標"})]})]}),p.mode==="edit"&&p.roomId!==ke&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"f-label",children:"一覧での表示"}),s.jsxs("button",{className:"shop-toggle"+(p.hidden?" on":""),onClick:()=>m(y=>({...y,hidden:!y.hidden})),children:[s.jsx("span",{className:"shop-box",children:p.hidden?"✓":""}),"🙈 一覧に表示しない（記録は消えません）"]})]}),p.type==="todo"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"f-label",children:"用途"}),s.jsxs("button",{className:"shop-toggle"+(p.shopping?" on":""),onClick:()=>m(y=>({...y,shopping:!y.shopping})),children:[s.jsx("span",{className:"shop-box",children:p.shopping?"✓":""}),"🛒 買い物リストとして使う（よく買うものクイック追加）"]})]}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",onClick:p.mode==="new"?jl:Sl,children:p.mode==="new"?"つくる":"保存"}),p.mode==="edit"&&s.jsx("button",{className:"p-del",onClick:Io,children:"削除"}),s.jsx("button",{className:"p-close",onClick:()=>{m(null),w(!1)},children:"閉じる"})]})]})}),V&&s.jsx("div",{className:"overlay",onClick:()=>ee(!1),children:s.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[s.jsx("h3",{children:"💾 まるごとバックアップ"}),s.jsx("p",{className:"panel-note",children:"全ルーム・全データ（日記 / TODO / だれログ / 経費 / 習慣 / 各種設定）を まるごと1ファイルに保存します。端末が変わっても元どおり復元できます。"}),s.jsxs("div",{className:"bk-last"+($r?" stale":""),children:[s.jsx("span",{className:"bk-last-l",children:"最後にバックアップした日"}),s.jsx("span",{className:"bk-last-v",children:ce!=null&&ce.lastDateKey?`${ue(ce.lastDateKey)}${Wt===0?"（今日）":`（${Wt}日前）`}`:"まだありません"})]}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",onClick:Kt,disabled:ln,children:"💾 1タップで書き出し"}),s.jsx("button",{className:"p-dl",onClick:Bo,children:"ダウンロード"}),s.jsx("button",{className:"p-dl",onClick:Ko,children:Ro?"コピーしたよ💗":"コピー"})]}),s.jsxs("p",{className:"panel-note",children:["ファイル名は毎回 ",s.jsx("b",{children:fi})," で固定。iPhoneの共有シートから 「ファイルに保存」を選ぶと、前のファイルを置き換えて上書きできます。"]}),s.jsx("div",{className:"f-label",style:{marginTop:6},children:"復元する（バックアップから読み込み）"}),s.jsx("p",{className:"panel-note",children:"既存のデータは消さず、足りない分だけ追加します（安全マージ）"}),s.jsxs("label",{className:"upload-btn",style:{alignSelf:"flex-start"},children:["📂 バックアップファイルを選ぶ",s.jsx("input",{type:"file",accept:".json,application/json,text/plain",onChange:Ln})]}),s.jsx("textarea",{placeholder:"または、コピーしたバックアップをここに貼り付け",value:Je,onChange:y=>ie(y.target.value),style:{minHeight:120}}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",disabled:!Je.trim(),onClick:Nl,children:"復元する"}),s.jsx("button",{className:"p-close",onClick:()=>{ee(!1),ie("")},children:"閉じる"})]})]})}),xt&&s.jsx("div",{className:"overlay bk-ask-over",onClick:()=>En(null),children:s.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[s.jsx("h3",{children:"⚠️ 復元まえの確認"}),s.jsxs("div",{className:"bk-ask-box",children:[s.jsxs("div",{className:"bk-ask-row",children:[s.jsx("span",{children:"ルーム"}),s.jsx("b",{children:xt.counts.rooms})]}),s.jsxs("div",{className:"bk-ask-row",children:[s.jsx("span",{children:"記録の件数"}),s.jsx("b",{children:xt.counts.items})]}),xt.exportedAt&&s.jsxs("div",{className:"bk-ask-row",children:[s.jsx("span",{children:"書き出し日時"}),s.jsx("b",{children:new Date(xt.exportedAt).toLocaleString("ja-JP")})]})]}),s.jsxs("p",{className:"panel-note",children:["今のデータは消えません（足りない分を追加する安全マージ）。 それでも念のため、",s.jsx("b",{children:"先に今のデータをバックアップ"}),"しておくのがおすすめです💗"]}),s.jsx("button",{className:"bk-first",onClick:Kt,disabled:ln,children:"💾 先に今のデータをバックアップする"}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",onClick:Ir,children:"この内容で復元する"}),s.jsx("button",{className:"p-close",onClick:()=>En(null),children:"キャンセル"})]})]})}),d&&s.jsx("div",{className:"overlay",onClick:()=>u(null),children:s.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[s.jsx("h3",{children:"🩷 今日のコマ"}),d==="view"?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"decl-full",children:L}),s.jsx("p",{className:"panel-note",children:"その日1日だけピン留め。日記にも記録されています🎬"}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",onClick:()=>{j(L),u("edit")},children:"書きなおす"}),s.jsx("button",{className:"p-close",onClick:()=>u(null),children:"閉じる"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("textarea",{autoFocus:!0,style:{minHeight:120},placeholder:"今日は愛全開の私でいる！",value:v,onChange:y=>j(y.target.value)}),s.jsx("p",{className:"panel-note",children:"その日1日だけ表示。決定すると今日の日記の先頭に🎬として残ります"}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",disabled:!v.trim(),onClick:()=>{_n(v),u(null)},children:"決定"}),s.jsx("button",{className:"p-close",onClick:()=>u(null),children:"閉じる"})]})]})]})}),gt&&s.jsx("div",{className:"overlay",onClick:()=>Ge(!1),children:s.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[s.jsx("h3",{children:"⚙︎ 箇条書きマーク"}),s.jsx("p",{className:"panel-note",children:"日記の入力欄に出るマーク。タップで削除、下から追加できます。"}),s.jsxs("div",{className:"mark-manage",children:[Ne.map(y=>s.jsxs("span",{className:"mark-item",children:[y,s.jsx("button",{onClick:()=>bl(y),"aria-label":"削除",children:"✕"})]},y)),Ne.length===0&&s.jsx("p",{className:"panel-note",children:"マークがありません。追加してね"})]}),s.jsxs("div",{className:"in-row",style:{marginTop:4},children:[s.jsx("input",{className:"f-input",maxLength:4,placeholder:"記号や絵文字（例: ❤︎）",value:M,onChange:y=>H(y.target.value),onKeyDown:y=>y.key==="Enter"&&Dn()}),s.jsx("button",{className:"p-copy",style:{flex:"0 0 auto",padding:"8px 16px",borderRadius:999},disabled:!M.trim(),onClick:Dn,children:"追加"})]}),s.jsx("div",{className:"panel-btns",children:s.jsx("button",{className:"p-close",onClick:()=>Ge(!1),children:"閉じる"})})]})}),b&&s.jsx(Zf,{message:b.message,onConfirm:b.onConfirm,onCancel:()=>k(null)}),Bt&&s.jsx("div",{className:"toast",children:Bt})]})}let Nu=!1,Cu=!!(navigator.serviceWorker&&navigator.serviceWorker.controller);navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!Cu){Cu=!0;return}Nu||(Nu=!0,window.location.reload())});zm({immediate:!0,onRegisteredSW(e,t){t&&(t.update(),setInterval(()=>t.update(),60*60*1e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&t.update()}))}});Vm();Ff(document.getElementById("root")).render(s.jsx(C.StrictMode,{children:s.jsx(Mg,{})}));export{Ig as A,Ag as B,vg as C,Rg as D,$g as E,Og as F,xu as G,qr as H,xg as I,kr as J,Ja as K,rs as M,bu as P,Yf as R,og as S,Yg as T,ta as W,Ae as a,ue as b,yu as c,tl as d,Zf as e,tt as f,W as g,Vg as h,Vf as i,s as j,Se as k,jg as l,Q as m,Wf as n,Xg as o,Wg as p,Fg as q,C as r,tg as s,gg as t,Ce as u,Hg as v,Kg as w,Bg as x,Ug as y,Qg as z};
