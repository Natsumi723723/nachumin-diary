const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DarelogRoom-DkfsETOT.js","./TalkRoom-OVMmNxeh.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Zu={exports:{}},Ti={},qu={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),jf=Symbol.for("react.portal"),Nf=Symbol.for("react.fragment"),Cf=Symbol.for("react.strict_mode"),Ef=Symbol.for("react.profiler"),zf=Symbol.for("react.provider"),_f=Symbol.for("react.context"),Df=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),Lf=Symbol.for("react.memo"),Pf=Symbol.for("react.lazy"),_a=Symbol.iterator;function Mf(e){return e===null||typeof e!="object"?null:(e=_a&&e[_a]||e["@@iterator"],typeof e=="function"?e:null)}var ec={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tc=Object.assign,nc={};function ur(e,t,n){this.props=e,this.context=t,this.refs=nc,this.updater=n||ec}ur.prototype.isReactComponent={};ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rc(){}rc.prototype=ur.prototype;function Ms(e,t,n){this.props=e,this.context=t,this.refs=nc,this.updater=n||ec}var Os=Ms.prototype=new rc;Os.constructor=Ms;tc(Os,ur.prototype);Os.isPureReactComponent=!0;var Da=Array.isArray,oc=Object.prototype.hasOwnProperty,Rs={current:null},ic={key:!0,ref:!0,__self:!0,__source:!0};function lc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)oc.call(t,r)&&!ic.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:so,type:e,key:i,ref:l,props:o,_owner:Rs.current}}function Of(e,t){return{$$typeof:so,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $s(e){return typeof e=="object"&&e!==null&&e.$$typeof===so}function Rf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ta=/\/+/g;function rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rf(""+e.key):t.toString(36)}function Ko(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case so:case jf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+rl(l,0):r,Da(o)?(n="",e!=null&&(n=e.replace(Ta,"$&/")+"/"),Ko(o,t,n,"",function(c){return c})):o!=null&&($s(o)&&(o=Of(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ta,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Da(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+rl(i,s);l+=Ko(i,t,n,a,o)}else if(a=Mf(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+rl(i,s++),l+=Ko(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function jo(e,t,n){if(e==null)return e;var r=[],o=0;return Ko(e,r,"","",function(i){return t.call(n,i,o++)}),r}function $f(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Ho={transition:null},If={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Ho,ReactCurrentOwner:Rs};function sc(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:jo,forEach:function(e,t,n){jo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jo(e,function(){t++}),t},toArray:function(e){return jo(e,function(t){return t})||[]},only:function(e){if(!$s(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=ur;H.Fragment=Nf;H.Profiler=Ef;H.PureComponent=Ms;H.StrictMode=Cf;H.Suspense=Tf;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If;H.act=sc;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Rs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)oc.call(t,a)&&!ic.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:so,type:e.type,key:o,ref:i,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:_f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zf,_context:e},e.Consumer=e};H.createElement=lc;H.createFactory=function(e){var t=lc.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Df,render:e}};H.isValidElement=$s;H.lazy=function(e){return{$$typeof:Pf,_payload:{_status:-1,_result:e},_init:$f}};H.memo=function(e,t){return{$$typeof:Lf,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Ho.transition;Ho.transition={};try{e()}finally{Ho.transition=t}};H.unstable_act=sc;H.useCallback=function(e,t){return Fe.current.useCallback(e,t)};H.useContext=function(e){return Fe.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};H.useEffect=function(e,t){return Fe.current.useEffect(e,t)};H.useId=function(){return Fe.current.useId()};H.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Fe.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};H.useRef=function(e){return Fe.current.useRef(e)};H.useState=function(e){return Fe.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Fe.current.useTransition()};H.version="18.3.1";qu.exports=H;var z=qu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af=z,Ff=Symbol.for("react.element"),Bf=Symbol.for("react.fragment"),Uf=Object.prototype.hasOwnProperty,Kf=Af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hf={key:!0,ref:!0,__self:!0,__source:!0};function ac(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Uf.call(t,r)&&!Hf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Ff,type:e,key:i,ref:l,props:o,_owner:Kf.current}}Ti.Fragment=Bf;Ti.jsx=ac;Ti.jsxs=ac;Zu.exports=Ti;var u=Zu.exports,uc={exports:{}},qe={},cc={exports:{}},dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,B){var K=R.length;R.push(B);e:for(;0<K;){var G=K-1>>>1,ie=R[G];if(0<o(ie,B))R[G]=B,R[K]=ie,K=G;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var B=R[0],K=R.pop();if(K!==B){R[0]=K;e:for(var G=0,ie=R.length,me=ie>>>1;G<me;){var ke=2*(G+1)-1,be=R[ke],Z=ke+1,xt=R[Z];if(0>o(be,K))Z<ie&&0>o(xt,be)?(R[G]=xt,R[Z]=K,G=Z):(R[G]=be,R[ke]=K,G=ke);else if(Z<ie&&0>o(xt,K))R[G]=xt,R[Z]=K,G=Z;else break e}}return B}function o(R,B){var K=R.sortIndex-B.sortIndex;return K!==0?K:R.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],m=1,x=null,f=3,w=!1,b=!1,j=!1,P=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(R){for(var B=n(c);B!==null;){if(B.callback===null)r(c);else if(B.startTime<=R)r(c),B.sortIndex=B.expirationTime,t(a,B);else break;B=n(c)}}function k(R){if(j=!1,h(R),!b)if(n(a)!==null)b=!0,tt(N);else{var B=n(c);B!==null&&Ue(k,B.startTime-R)}}function N(R,B){b=!1,j&&(j=!1,g(L),L=-1),w=!0;var K=f;try{for(h(B),x=n(a);x!==null&&(!(x.expirationTime>B)||R&&!W());){var G=x.callback;if(typeof G=="function"){x.callback=null,f=x.priorityLevel;var ie=G(x.expirationTime<=B);B=e.unstable_now(),typeof ie=="function"?x.callback=ie:x===n(a)&&r(a),h(B)}else r(a);x=n(a)}if(x!==null)var me=!0;else{var ke=n(c);ke!==null&&Ue(k,ke.startTime-B),me=!1}return me}finally{x=null,f=K,w=!1}}var D=!1,M=null,L=-1,F=5,I=-1;function W(){return!(e.unstable_now()-I<F)}function fe(){if(M!==null){var R=e.unstable_now();I=R;var B=!0;try{B=M(!0,R)}finally{B?he():(D=!1,M=null)}}else D=!1}var he;if(typeof p=="function")he=function(){p(fe)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,Ft=we.port2;we.port1.onmessage=fe,he=function(){Ft.postMessage(null)}}else he=function(){P(fe,0)};function tt(R){M=R,D||(D=!0,he())}function Ue(R,B){L=P(function(){R(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){b||w||(b=!0,tt(N))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var K=f;f=B;try{return R()}finally{f=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var K=f;f=R;try{return B()}finally{f=K}},e.unstable_scheduleCallback=function(R,B,K){var G=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?G+K:G):K=G,R){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=K+ie,R={id:m++,callback:B,priorityLevel:R,startTime:K,expirationTime:ie,sortIndex:-1},K>G?(R.sortIndex=K,t(c,R),n(a)===null&&R===n(c)&&(j?(g(L),L=-1):j=!0,Ue(k,K-G))):(R.sortIndex=ie,t(a,R),b||w||(b=!0,tt(N))),R},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(R){var B=f;return function(){var K=f;f=B;try{return R.apply(this,arguments)}finally{f=K}}}})(dc);cc.exports=dc;var Wf=cc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf=z,Ze=Wf;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fc=new Set,Kr={};function Pn(e,t){nr(e,t),nr(e+"Capture",t)}function nr(e,t){for(Kr[e]=t,e=0;e<t.length;e++)fc.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ol=Object.prototype.hasOwnProperty,Qf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,La={},Pa={};function Yf(e){return Ol.call(Pa,e)?!0:Ol.call(La,e)?!1:Qf.test(e)?Pa[e]=!0:(La[e]=!0,!1)}function Xf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gf(e,t,n,r){if(t===null||typeof t>"u"||Xf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Be(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Is=/[\-:]([a-z])/g;function As(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Is,As);Ee[t]=new Be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Is,As);Ee[t]=new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Is,As);Ee[t]=new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fs(e,t,n,r){var o=Ee.hasOwnProperty(t)?Ee[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gf(t,n,o,r)&&(n=null),r||o===null?Yf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=Vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,No=Symbol.for("react.element"),In=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),Bs=Symbol.for("react.strict_mode"),Rl=Symbol.for("react.profiler"),pc=Symbol.for("react.provider"),hc=Symbol.for("react.context"),Us=Symbol.for("react.forward_ref"),$l=Symbol.for("react.suspense"),Il=Symbol.for("react.suspense_list"),Ks=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),mc=Symbol.for("react.offscreen"),Ma=Symbol.iterator;function wr(e){return e===null||typeof e!="object"?null:(e=Ma&&e[Ma]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,ol;function _r(e){if(ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ol=t&&t[1]||""}return`
`+ol+e}var il=!1;function ll(e,t){if(!e||il)return"";il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_r(e):""}function Jf(e){switch(e.tag){case 5:return _r(e.type);case 16:return _r("Lazy");case 13:return _r("Suspense");case 19:return _r("SuspenseList");case 0:case 2:case 15:return e=ll(e.type,!1),e;case 11:return e=ll(e.type.render,!1),e;case 1:return e=ll(e.type,!0),e;default:return""}}function Al(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case In:return"Portal";case Rl:return"Profiler";case Bs:return"StrictMode";case $l:return"Suspense";case Il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hc:return(e.displayName||"Context")+".Consumer";case pc:return(e._context.displayName||"Context")+".Provider";case Us:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ks:return t=e.displayName||null,t!==null?t:Al(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return Al(e(t))}catch{}}return null}function Zf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Al(t);case 8:return t===Bs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qf(e){var t=gc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Co(e){e._valueTracker||(e._valueTracker=qf(e))}function xc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fl(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Oa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yc(e,t){t=t.checked,t!=null&&Fs(e,"checked",t,!1)}function Bl(e,t){yc(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ul(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ul(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ra(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ul(e,t,n){(t!=="number"||ni(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dr=Array.isArray;function Gn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Kl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $a(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Dr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function vc(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ia(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Eo,kc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ep=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){ep.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function bc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function Sc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=bc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var tp=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wl(e,t){if(t){if(tp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ql=null;function Hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yl=null,Jn=null,Zn=null;function Aa(e){if(e=co(e)){if(typeof Yl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Ri(t),Yl(e.stateNode,e.type,t))}}function jc(e){Jn?Zn?Zn.push(e):Zn=[e]:Jn=e}function Nc(){if(Jn){var e=Jn,t=Zn;if(Zn=Jn=null,Aa(e),t)for(e=0;e<t.length;e++)Aa(t[e])}}function Cc(e,t){return e(t)}function Ec(){}var sl=!1;function zc(e,t,n){if(sl)return e(t,n);sl=!0;try{return Cc(e,t,n)}finally{sl=!1,(Jn!==null||Zn!==null)&&(Ec(),Nc())}}function Wr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ri(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Xl=!1;if(Ot)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Xl=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Xl=!1}function np(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Or=!1,ri=null,oi=!1,Gl=null,rp={onError:function(e){Or=!0,ri=e}};function op(e,t,n,r,o,i,l,s,a){Or=!1,ri=null,np.apply(rp,arguments)}function ip(e,t,n,r,o,i,l,s,a){if(op.apply(this,arguments),Or){if(Or){var c=ri;Or=!1,ri=null}else throw Error(_(198));oi||(oi=!0,Gl=c)}}function Mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fa(e){if(Mn(e)!==e)throw Error(_(188))}function lp(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Fa(o),e;if(i===r)return Fa(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Dc(e){return e=lp(e),e!==null?Tc(e):null}function Tc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tc(e);if(t!==null)return t;e=e.sibling}return null}var Lc=Ze.unstable_scheduleCallback,Ba=Ze.unstable_cancelCallback,sp=Ze.unstable_shouldYield,ap=Ze.unstable_requestPaint,de=Ze.unstable_now,up=Ze.unstable_getCurrentPriorityLevel,Ws=Ze.unstable_ImmediatePriority,Pc=Ze.unstable_UserBlockingPriority,ii=Ze.unstable_NormalPriority,cp=Ze.unstable_LowPriority,Mc=Ze.unstable_IdlePriority,Li=null,jt=null;function dp(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Li,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:hp,fp=Math.log,pp=Math.LN2;function hp(e){return e>>>=0,e===0?32:31-(fp(e)/pp|0)|0}var zo=64,_o=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function li(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Tr(s):(i&=l,i!==0&&(r=Tr(i)))}else l=n&~o,l!==0?r=Tr(l):i!==0&&(r=Tr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),o=1<<n,r|=e[n],t&=~o;return r}function mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ht(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=mp(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Oc(){var e=zo;return zo<<=1,!(zo&4194240)&&(zo=64),e}function al(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ao(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function xp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ht(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Vs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var X=0;function Rc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $c,Qs,Ic,Ac,Fc,Zl=!1,Do=[],Gt=null,Jt=null,Zt=null,Vr=new Map,Qr=new Map,Vt=[],yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ua(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function br(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=co(t),t!==null&&Qs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function vp(e,t,n,r,o){switch(t){case"focusin":return Gt=br(Gt,e,t,n,r,o),!0;case"dragenter":return Jt=br(Jt,e,t,n,r,o),!0;case"mouseover":return Zt=br(Zt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Vr.set(i,br(Vr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Qr.set(i,br(Qr.get(i)||null,e,t,n,r,o)),!0}return!1}function Bc(e){var t=wn(e.target);if(t!==null){var n=Mn(t);if(n!==null){if(t=n.tag,t===13){if(t=_c(n),t!==null){e.blockedOn=t,Fc(e.priority,function(){Ic(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ql=r,n.target.dispatchEvent(r),Ql=null}else return t=co(n),t!==null&&Qs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ka(e,t,n){Wo(e)&&n.delete(t)}function wp(){Zl=!1,Gt!==null&&Wo(Gt)&&(Gt=null),Jt!==null&&Wo(Jt)&&(Jt=null),Zt!==null&&Wo(Zt)&&(Zt=null),Vr.forEach(Ka),Qr.forEach(Ka)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,wp)))}function Yr(e){function t(o){return Sr(o,e)}if(0<Do.length){Sr(Do[0],e);for(var n=1;n<Do.length;n++){var r=Do[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&Sr(Gt,e),Jt!==null&&Sr(Jt,e),Zt!==null&&Sr(Zt,e),Vr.forEach(t),Qr.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)Bc(n),n.blockedOn===null&&Vt.shift()}var qn=At.ReactCurrentBatchConfig,si=!0;function kp(e,t,n,r){var o=X,i=qn.transition;qn.transition=null;try{X=1,Ys(e,t,n,r)}finally{X=o,qn.transition=i}}function bp(e,t,n,r){var o=X,i=qn.transition;qn.transition=null;try{X=4,Ys(e,t,n,r)}finally{X=o,qn.transition=i}}function Ys(e,t,n,r){if(si){var o=ql(e,t,n,r);if(o===null)yl(e,t,r,ai,n),Ua(e,r);else if(vp(o,e,t,n,r))r.stopPropagation();else if(Ua(e,r),t&4&&-1<yp.indexOf(e)){for(;o!==null;){var i=co(o);if(i!==null&&$c(i),i=ql(e,t,n,r),i===null&&yl(e,t,r,ai,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else yl(e,t,r,null,n)}}var ai=null;function ql(e,t,n,r){if(ai=null,e=Hs(r),e=wn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ai=e,null}function Uc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(up()){case Ws:return 1;case Pc:return 4;case ii:case cp:return 16;case Mc:return 536870912;default:return 16}default:return 16}}var Yt=null,Xs=null,Vo=null;function Kc(){if(Vo)return Vo;var e,t=Xs,n=t.length,r,o="value"in Yt?Yt.value:Yt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Vo=o.slice(e,1<r?1-r:void 0)}function Qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function To(){return!0}function Ha(){return!1}function et(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?To:Ha,this.isPropagationStopped=Ha,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),t}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gs=et(cr),uo=ue({},cr,{view:0,detail:0}),Sp=et(uo),ul,cl,jr,Pi=ue({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(ul=e.screenX-jr.screenX,cl=e.screenY-jr.screenY):cl=ul=0,jr=e),ul)},movementY:function(e){return"movementY"in e?e.movementY:cl}}),Wa=et(Pi),jp=ue({},Pi,{dataTransfer:0}),Np=et(jp),Cp=ue({},uo,{relatedTarget:0}),dl=et(Cp),Ep=ue({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),zp=et(Ep),_p=ue({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dp=et(_p),Tp=ue({},cr,{data:0}),Va=et(Tp),Lp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Op(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mp[e])?!!t[e]:!1}function Js(){return Op}var Rp=ue({},uo,{key:function(e){if(e.key){var t=Lp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Js,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$p=et(Rp),Ip=ue({},Pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qa=et(Ip),Ap=ue({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Js}),Fp=et(Ap),Bp=ue({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Up=et(Bp),Kp=ue({},Pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hp=et(Kp),Wp=[9,13,27,32],Zs=Ot&&"CompositionEvent"in window,Rr=null;Ot&&"documentMode"in document&&(Rr=document.documentMode);var Vp=Ot&&"TextEvent"in window&&!Rr,Hc=Ot&&(!Zs||Rr&&8<Rr&&11>=Rr),Ya=" ",Xa=!1;function Wc(e,t){switch(e){case"keyup":return Wp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function Qp(e,t){switch(e){case"compositionend":return Vc(t);case"keypress":return t.which!==32?null:(Xa=!0,Ya);case"textInput":return e=t.data,e===Ya&&Xa?null:e;default:return null}}function Yp(e,t){if(Fn)return e==="compositionend"||!Zs&&Wc(e,t)?(e=Kc(),Vo=Xs=Yt=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hc&&t.locale!=="ko"?null:t.data;default:return null}}var Xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xp[e.type]:t==="textarea"}function Qc(e,t,n,r){jc(r),t=ui(t,"onChange"),0<t.length&&(n=new Gs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $r=null,Xr=null;function Gp(e){od(e,0)}function Mi(e){var t=Kn(e);if(xc(t))return e}function Jp(e,t){if(e==="change")return t}var Yc=!1;if(Ot){var fl;if(Ot){var pl="oninput"in document;if(!pl){var Ja=document.createElement("div");Ja.setAttribute("oninput","return;"),pl=typeof Ja.oninput=="function"}fl=pl}else fl=!1;Yc=fl&&(!document.documentMode||9<document.documentMode)}function Za(){$r&&($r.detachEvent("onpropertychange",Xc),Xr=$r=null)}function Xc(e){if(e.propertyName==="value"&&Mi(Xr)){var t=[];Qc(t,Xr,e,Hs(e)),zc(Gp,t)}}function Zp(e,t,n){e==="focusin"?(Za(),$r=t,Xr=n,$r.attachEvent("onpropertychange",Xc)):e==="focusout"&&Za()}function qp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mi(Xr)}function eh(e,t){if(e==="click")return Mi(t)}function th(e,t){if(e==="input"||e==="change")return Mi(t)}function nh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:nh;function Gr(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ol.call(t,o)||!gt(e[o],t[o]))return!1}return!0}function qa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eu(e,t){var n=qa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qa(n)}}function Gc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jc(){for(var e=window,t=ni();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ni(e.document)}return t}function qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rh(e){var t=Jc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gc(n.ownerDocument.documentElement,n)){if(r!==null&&qs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=eu(n,i);var l=eu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var oh=Ot&&"documentMode"in document&&11>=document.documentMode,Bn=null,es=null,Ir=null,ts=!1;function tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ts||Bn==null||Bn!==ni(r)||(r=Bn,"selectionStart"in r&&qs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Gr(Ir,r)||(Ir=r,r=ui(es,"onSelect"),0<r.length&&(t=new Gs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bn)))}function Lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Un={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},hl={},Zc={};Ot&&(Zc=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function Oi(e){if(hl[e])return hl[e];if(!Un[e])return e;var t=Un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zc)return hl[e]=t[n];return e}var qc=Oi("animationend"),ed=Oi("animationiteration"),td=Oi("animationstart"),nd=Oi("transitionend"),rd=new Map,nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){rd.set(e,t),Pn(t,[e])}for(var ml=0;ml<nu.length;ml++){var gl=nu[ml],ih=gl.toLowerCase(),lh=gl[0].toUpperCase()+gl.slice(1);sn(ih,"on"+lh)}sn(qc,"onAnimationEnd");sn(ed,"onAnimationIteration");sn(td,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(nd,"onTransitionEnd");nr("onMouseEnter",["mouseout","mouseover"]);nr("onMouseLeave",["mouseout","mouseover"]);nr("onPointerEnter",["pointerout","pointerover"]);nr("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ip(r,t,void 0,e),e.currentTarget=null}function od(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;ru(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;ru(o,s,c),i=a}}}if(oi)throw e=Gl,oi=!1,Gl=null,e}function re(e,t){var n=t[ls];n===void 0&&(n=t[ls]=new Set);var r=e+"__bubble";n.has(r)||(id(t,e,2,!1),n.add(r))}function xl(e,t,n){var r=0;t&&(r|=4),id(n,e,r,t)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[Po]){e[Po]=!0,fc.forEach(function(n){n!=="selectionchange"&&(sh.has(n)||xl(n,!1,e),xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Po]||(t[Po]=!0,xl("selectionchange",!1,t))}}function id(e,t,n,r){switch(Uc(t)){case 1:var o=kp;break;case 4:o=bp;break;default:o=Ys}n=o.bind(null,t,n,e),o=void 0,!Xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function yl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=wn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}zc(function(){var c=i,m=Hs(n),x=[];e:{var f=rd.get(e);if(f!==void 0){var w=Gs,b=e;switch(e){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":w=$p;break;case"focusin":b="focus",w=dl;break;case"focusout":b="blur",w=dl;break;case"beforeblur":case"afterblur":w=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Wa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Fp;break;case qc:case ed:case td:w=zp;break;case nd:w=Up;break;case"scroll":w=Sp;break;case"wheel":w=Hp;break;case"copy":case"cut":case"paste":w=Dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Qa}var j=(t&4)!==0,P=!j&&e==="scroll",g=j?f!==null?f+"Capture":null:f;j=[];for(var p=c,h;p!==null;){h=p;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,g!==null&&(k=Wr(p,g),k!=null&&j.push(Zr(p,k,h)))),P)break;p=p.return}0<j.length&&(f=new w(f,b,null,n,m),x.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",f&&n!==Ql&&(b=n.relatedTarget||n.fromElement)&&(wn(b)||b[Rt]))break e;if((w||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,w?(b=n.relatedTarget||n.toElement,w=c,b=b?wn(b):null,b!==null&&(P=Mn(b),b!==P||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=c),w!==b)){if(j=Wa,k="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(j=Qa,k="onPointerLeave",g="onPointerEnter",p="pointer"),P=w==null?f:Kn(w),h=b==null?f:Kn(b),f=new j(k,p+"leave",w,n,m),f.target=P,f.relatedTarget=h,k=null,wn(m)===c&&(j=new j(g,p+"enter",b,n,m),j.target=h,j.relatedTarget=P,k=j),P=k,w&&b)t:{for(j=w,g=b,p=0,h=j;h;h=$n(h))p++;for(h=0,k=g;k;k=$n(k))h++;for(;0<p-h;)j=$n(j),p--;for(;0<h-p;)g=$n(g),h--;for(;p--;){if(j===g||g!==null&&j===g.alternate)break t;j=$n(j),g=$n(g)}j=null}else j=null;w!==null&&ou(x,f,w,j,!1),b!==null&&P!==null&&ou(x,P,b,j,!0)}}e:{if(f=c?Kn(c):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var N=Jp;else if(Ga(f))if(Yc)N=th;else{N=qp;var D=Zp}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=eh);if(N&&(N=N(e,c))){Qc(x,N,n,m);break e}D&&D(e,f,c),e==="focusout"&&(D=f._wrapperState)&&D.controlled&&f.type==="number"&&Ul(f,"number",f.value)}switch(D=c?Kn(c):window,e){case"focusin":(Ga(D)||D.contentEditable==="true")&&(Bn=D,es=c,Ir=null);break;case"focusout":Ir=es=Bn=null;break;case"mousedown":ts=!0;break;case"contextmenu":case"mouseup":case"dragend":ts=!1,tu(x,n,m);break;case"selectionchange":if(oh)break;case"keydown":case"keyup":tu(x,n,m)}var M;if(Zs)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Fn?Wc(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Hc&&n.locale!=="ko"&&(Fn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Fn&&(M=Kc()):(Yt=m,Xs="value"in Yt?Yt.value:Yt.textContent,Fn=!0)),D=ui(c,L),0<D.length&&(L=new Va(L,e,null,n,m),x.push({event:L,listeners:D}),M?L.data=M:(M=Vc(n),M!==null&&(L.data=M)))),(M=Vp?Qp(e,n):Yp(e,n))&&(c=ui(c,"onBeforeInput"),0<c.length&&(m=new Va("onBeforeInput","beforeinput",null,n,m),x.push({event:m,listeners:c}),m.data=M))}od(x,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ui(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Wr(e,n),i!=null&&r.unshift(Zr(e,i,o)),i=Wr(e,t),i!=null&&r.push(Zr(e,i,o))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ou(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=Wr(n,i),a!=null&&l.unshift(Zr(n,a,s))):o||(a=Wr(n,i),a!=null&&l.push(Zr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var ah=/\r\n?/g,uh=/\u0000|\uFFFD/g;function iu(e){return(typeof e=="string"?e:""+e).replace(ah,`
`).replace(uh,"")}function Mo(e,t,n){if(t=iu(t),iu(e)!==t&&n)throw Error(_(425))}function ci(){}var ns=null,rs=null;function os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var is=typeof setTimeout=="function"?setTimeout:void 0,ch=typeof clearTimeout=="function"?clearTimeout:void 0,lu=typeof Promise=="function"?Promise:void 0,dh=typeof queueMicrotask=="function"?queueMicrotask:typeof lu<"u"?function(e){return lu.resolve(null).then(e).catch(fh)}:is;function fh(e){setTimeout(function(){throw e})}function vl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),St="__reactFiber$"+dr,qr="__reactProps$"+dr,Rt="__reactContainer$"+dr,ls="__reactEvents$"+dr,ph="__reactListeners$"+dr,hh="__reactHandles$"+dr;function wn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=su(e);e!==null;){if(n=e[St])return n;e=su(e)}return t}e=n,n=e.parentNode}return null}function co(e){return e=e[St]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Ri(e){return e[qr]||null}var ss=[],Hn=-1;function an(e){return{current:e}}function oe(e){0>Hn||(e.current=ss[Hn],ss[Hn]=null,Hn--)}function te(e,t){Hn++,ss[Hn]=e.current,e.current=t}var ln={},Me=an(ln),We=an(!1),zn=ln;function rr(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function di(){oe(We),oe(Me)}function au(e,t,n){if(Me.current!==ln)throw Error(_(168));te(Me,t),te(We,n)}function ld(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,Zf(e)||"Unknown",o));return ue({},n,r)}function fi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,zn=Me.current,te(Me,e),te(We,We.current),!0}function uu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=ld(e,t,zn),r.__reactInternalMemoizedMergedChildContext=e,oe(We),oe(Me),te(Me,e)):oe(We),te(We,n)}var _t=null,$i=!1,wl=!1;function sd(e){_t===null?_t=[e]:_t.push(e)}function mh(e){$i=!0,sd(e)}function un(){if(!wl&&_t!==null){wl=!0;var e=0,t=X;try{var n=_t;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,$i=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),Lc(Ws,un),o}finally{X=t,wl=!1}}return null}var Wn=[],Vn=0,pi=null,hi=0,nt=[],rt=0,_n=null,Tt=1,Lt="";function yn(e,t){Wn[Vn++]=hi,Wn[Vn++]=pi,pi=e,hi=t}function ad(e,t,n){nt[rt++]=Tt,nt[rt++]=Lt,nt[rt++]=_n,_n=e;var r=Tt;e=Lt;var o=32-ht(r)-1;r&=~(1<<o),n+=1;var i=32-ht(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Tt=1<<32-ht(t)+o|n<<o|r,Lt=i+e}else Tt=1<<i|n<<o|r,Lt=e}function ea(e){e.return!==null&&(yn(e,1),ad(e,1,0))}function ta(e){for(;e===pi;)pi=Wn[--Vn],Wn[Vn]=null,hi=Wn[--Vn],Wn[Vn]=null;for(;e===_n;)_n=nt[--rt],nt[rt]=null,Lt=nt[--rt],nt[rt]=null,Tt=nt[--rt],nt[rt]=null}var Je=null,Ge=null,le=!1,pt=null;function ud(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Ge=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:Tt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,Ge=null,!0):!1;default:return!1}}function as(e){return(e.mode&1)!==0&&(e.flags&128)===0}function us(e){if(le){var t=Ge;if(t){var n=t;if(!cu(e,t)){if(as(e))throw Error(_(418));t=qt(n.nextSibling);var r=Je;t&&cu(e,t)?ud(r,n):(e.flags=e.flags&-4097|2,le=!1,Je=e)}}else{if(as(e))throw Error(_(418));e.flags=e.flags&-4097|2,le=!1,Je=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function Oo(e){if(e!==Je)return!1;if(!le)return du(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!os(e.type,e.memoizedProps)),t&&(t=Ge)){if(as(e))throw cd(),Error(_(418));for(;t;)ud(e,t),t=qt(t.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Je?qt(e.stateNode.nextSibling):null;return!0}function cd(){for(var e=Ge;e;)e=qt(e.nextSibling)}function or(){Ge=Je=null,le=!1}function na(e){pt===null?pt=[e]:pt.push(e)}var gh=At.ReactCurrentBatchConfig;function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Ro(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fu(e){var t=e._init;return t(e._payload)}function dd(e){function t(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function o(g,p){return g=rn(g,p),g.index=0,g.sibling=null,g}function i(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,h,k){return p===null||p.tag!==6?(p=El(h,g.mode,k),p.return=g,p):(p=o(p,h),p.return=g,p)}function a(g,p,h,k){var N=h.type;return N===An?m(g,p,h.props.children,k,h.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ht&&fu(N)===p.type)?(k=o(p,h.props),k.ref=Nr(g,p,h),k.return=g,k):(k=ei(h.type,h.key,h.props,null,g.mode,k),k.ref=Nr(g,p,h),k.return=g,k)}function c(g,p,h,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=zl(h,g.mode,k),p.return=g,p):(p=o(p,h.children||[]),p.return=g,p)}function m(g,p,h,k,N){return p===null||p.tag!==7?(p=jn(h,g.mode,k,N),p.return=g,p):(p=o(p,h),p.return=g,p)}function x(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=El(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case No:return h=ei(p.type,p.key,p.props,null,g.mode,h),h.ref=Nr(g,null,p),h.return=g,h;case In:return p=zl(p,g.mode,h),p.return=g,p;case Ht:var k=p._init;return x(g,k(p._payload),h)}if(Dr(p)||wr(p))return p=jn(p,g.mode,h,null),p.return=g,p;Ro(g,p)}return null}function f(g,p,h,k){var N=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return N!==null?null:s(g,p,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case No:return h.key===N?a(g,p,h,k):null;case In:return h.key===N?c(g,p,h,k):null;case Ht:return N=h._init,f(g,p,N(h._payload),k)}if(Dr(h)||wr(h))return N!==null?null:m(g,p,h,k,null);Ro(g,h)}return null}function w(g,p,h,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(h)||null,s(p,g,""+k,N);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case No:return g=g.get(k.key===null?h:k.key)||null,a(p,g,k,N);case In:return g=g.get(k.key===null?h:k.key)||null,c(p,g,k,N);case Ht:var D=k._init;return w(g,p,h,D(k._payload),N)}if(Dr(k)||wr(k))return g=g.get(h)||null,m(p,g,k,N,null);Ro(p,k)}return null}function b(g,p,h,k){for(var N=null,D=null,M=p,L=p=0,F=null;M!==null&&L<h.length;L++){M.index>L?(F=M,M=null):F=M.sibling;var I=f(g,M,h[L],k);if(I===null){M===null&&(M=F);break}e&&M&&I.alternate===null&&t(g,M),p=i(I,p,L),D===null?N=I:D.sibling=I,D=I,M=F}if(L===h.length)return n(g,M),le&&yn(g,L),N;if(M===null){for(;L<h.length;L++)M=x(g,h[L],k),M!==null&&(p=i(M,p,L),D===null?N=M:D.sibling=M,D=M);return le&&yn(g,L),N}for(M=r(g,M);L<h.length;L++)F=w(M,g,L,h[L],k),F!==null&&(e&&F.alternate!==null&&M.delete(F.key===null?L:F.key),p=i(F,p,L),D===null?N=F:D.sibling=F,D=F);return e&&M.forEach(function(W){return t(g,W)}),le&&yn(g,L),N}function j(g,p,h,k){var N=wr(h);if(typeof N!="function")throw Error(_(150));if(h=N.call(h),h==null)throw Error(_(151));for(var D=N=null,M=p,L=p=0,F=null,I=h.next();M!==null&&!I.done;L++,I=h.next()){M.index>L?(F=M,M=null):F=M.sibling;var W=f(g,M,I.value,k);if(W===null){M===null&&(M=F);break}e&&M&&W.alternate===null&&t(g,M),p=i(W,p,L),D===null?N=W:D.sibling=W,D=W,M=F}if(I.done)return n(g,M),le&&yn(g,L),N;if(M===null){for(;!I.done;L++,I=h.next())I=x(g,I.value,k),I!==null&&(p=i(I,p,L),D===null?N=I:D.sibling=I,D=I);return le&&yn(g,L),N}for(M=r(g,M);!I.done;L++,I=h.next())I=w(M,g,L,I.value,k),I!==null&&(e&&I.alternate!==null&&M.delete(I.key===null?L:I.key),p=i(I,p,L),D===null?N=I:D.sibling=I,D=I);return e&&M.forEach(function(fe){return t(g,fe)}),le&&yn(g,L),N}function P(g,p,h,k){if(typeof h=="object"&&h!==null&&h.type===An&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case No:e:{for(var N=h.key,D=p;D!==null;){if(D.key===N){if(N=h.type,N===An){if(D.tag===7){n(g,D.sibling),p=o(D,h.props.children),p.return=g,g=p;break e}}else if(D.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ht&&fu(N)===D.type){n(g,D.sibling),p=o(D,h.props),p.ref=Nr(g,D,h),p.return=g,g=p;break e}n(g,D);break}else t(g,D);D=D.sibling}h.type===An?(p=jn(h.props.children,g.mode,k,h.key),p.return=g,g=p):(k=ei(h.type,h.key,h.props,null,g.mode,k),k.ref=Nr(g,p,h),k.return=g,g=k)}return l(g);case In:e:{for(D=h.key;p!==null;){if(p.key===D)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(g,p.sibling),p=o(p,h.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=zl(h,g.mode,k),p.return=g,g=p}return l(g);case Ht:return D=h._init,P(g,p,D(h._payload),k)}if(Dr(h))return b(g,p,h,k);if(wr(h))return j(g,p,h,k);Ro(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(g,p.sibling),p=o(p,h),p.return=g,g=p):(n(g,p),p=El(h,g.mode,k),p.return=g,g=p),l(g)):n(g,p)}return P}var ir=dd(!0),fd=dd(!1),mi=an(null),gi=null,Qn=null,ra=null;function oa(){ra=Qn=gi=null}function ia(e){var t=mi.current;oe(mi),e._currentValue=t}function cs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function er(e,t){gi=e,ra=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(ra!==e)if(e={context:e,memoizedValue:t,next:null},Qn===null){if(gi===null)throw Error(_(308));Qn=e,gi.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return t}var kn=null;function la(e){kn===null?kn=[e]:kn.push(e)}function pd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,la(t)):(n.next=o.next,o.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function sa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,$t(e,n)}return o=r.interleaved,o===null?(t.next=t,la(r)):(t.next=o.next,o.next=t),r.interleaved=t,$t(e,n)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vs(e,n)}}function pu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xi(e,t,n,r){var o=e.updateQueue;Wt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=a))}if(i!==null){var x=o.baseState;l=0,m=c=a=null,s=i;do{var f=s.lane,w=s.eventTime;if((r&f)===f){m!==null&&(m=m.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,j=s;switch(f=t,w=n,j.tag){case 1:if(b=j.payload,typeof b=="function"){x=b.call(w,x,f);break e}x=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=j.payload,f=typeof b=="function"?b.call(w,x,f):b,f==null)break e;x=ue({},x,f);break e;case 2:Wt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else w={eventTime:w,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=w,a=x):m=m.next=w,l|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(m===null&&(a=x),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Tn|=l,e.lanes=l,e.memoizedState=x}}function hu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var fo={},Nt=an(fo),eo=an(fo),to=an(fo);function bn(e){if(e===fo)throw Error(_(174));return e}function aa(e,t){switch(te(to,t),te(eo,e),te(Nt,fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hl(t,e)}oe(Nt),te(Nt,t)}function lr(){oe(Nt),oe(eo),oe(to)}function md(e){bn(to.current);var t=bn(Nt.current),n=Hl(t,e.type);t!==n&&(te(eo,e),te(Nt,n))}function ua(e){eo.current===e&&(oe(Nt),oe(eo))}var se=an(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kl=[];function ca(){for(var e=0;e<kl.length;e++)kl[e]._workInProgressVersionPrimary=null;kl.length=0}var Xo=At.ReactCurrentDispatcher,bl=At.ReactCurrentBatchConfig,Dn=0,ae=null,ye=null,Se=null,vi=!1,Ar=!1,no=0,xh=0;function _e(){throw Error(_(321))}function da(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function fa(e,t,n,r,o,i){if(Dn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xo.current=e===null||e.memoizedState===null?kh:bh,e=n(r,o),Ar){i=0;do{if(Ar=!1,no=0,25<=i)throw Error(_(301));i+=1,Se=ye=null,t.updateQueue=null,Xo.current=Sh,e=n(r,o)}while(Ar)}if(Xo.current=wi,t=ye!==null&&ye.next!==null,Dn=0,Se=ye=ae=null,vi=!1,t)throw Error(_(300));return e}function pa(){var e=no!==0;return no=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ae.memoizedState=Se=e:Se=Se.next=e,Se}function st(){if(ye===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Se===null?ae.memoizedState:Se.next;if(t!==null)Se=t,ye=e;else{if(e===null)throw Error(_(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Se===null?ae.memoizedState=Se=e:Se=Se.next=e}return Se}function ro(e,t){return typeof t=="function"?t(e):t}function Sl(e){var t=st(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ye,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var m=c.lane;if((Dn&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var x={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=x,l=r):a=a.next=x,ae.lanes|=m,Tn|=m}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,gt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,Tn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function jl(e){var t=st(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);gt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function gd(){}function xd(e,t){var n=ae,r=st(),o=t(),i=!gt(r.memoizedState,o);if(i&&(r.memoizedState=o,He=!0),r=r.queue,ha(wd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,oo(9,vd.bind(null,n,r,o,t),void 0,null),je===null)throw Error(_(349));Dn&30||yd(n,t,o)}return o}function yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vd(e,t,n,r){t.value=n,t.getSnapshot=r,kd(t)&&bd(e)}function wd(e,t,n){return n(function(){kd(t)&&bd(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function bd(e){var t=$t(e,1);t!==null&&mt(t,e,1,-1)}function mu(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=wh.bind(null,ae,e),[t.memoizedState,e]}function oo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sd(){return st().memoizedState}function Go(e,t,n,r){var o=bt();ae.flags|=e,o.memoizedState=oo(1|t,n,void 0,r===void 0?null:r)}function Ii(e,t,n,r){var o=st();r=r===void 0?null:r;var i=void 0;if(ye!==null){var l=ye.memoizedState;if(i=l.destroy,r!==null&&da(r,l.deps)){o.memoizedState=oo(t,n,i,r);return}}ae.flags|=e,o.memoizedState=oo(1|t,n,i,r)}function gu(e,t){return Go(8390656,8,e,t)}function ha(e,t){return Ii(2048,8,e,t)}function jd(e,t){return Ii(4,2,e,t)}function Nd(e,t){return Ii(4,4,e,t)}function Cd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ed(e,t,n){return n=n!=null?n.concat([e]):null,Ii(4,4,Cd.bind(null,t,e),n)}function ma(){}function zd(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&da(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _d(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&da(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dd(e,t,n){return Dn&21?(gt(n,t)||(n=Oc(),ae.lanes|=n,Tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function yh(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=bl.transition;bl.transition={};try{e(!1),t()}finally{X=n,bl.transition=r}}function Td(){return st().memoizedState}function vh(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ld(e))Pd(t,n);else if(n=pd(e,t,n,r),n!==null){var o=Ae();mt(n,e,r,o),Md(n,t,r)}}function wh(e,t,n){var r=nn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ld(e))Pd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,gt(s,l)){var a=t.interleaved;a===null?(o.next=o,la(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=pd(e,t,o,r),n!==null&&(o=Ae(),mt(n,e,r,o),Md(n,t,r))}}function Ld(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Pd(e,t){Ar=vi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Md(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vs(e,n)}}var wi={readContext:lt,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},kh={readContext:lt,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:gu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Go(4194308,4,Cd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Go(4194308,4,e,t)},useInsertionEffect:function(e,t){return Go(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vh.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:mu,useDebugValue:ma,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=mu(!1),t=e[0];return e=yh.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,o=bt();if(le){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),je===null)throw Error(_(349));Dn&30||yd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,gu(wd.bind(null,r,i,e),[e]),r.flags|=2048,oo(9,vd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=bt(),t=je.identifierPrefix;if(le){var n=Lt,r=Tt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bh={readContext:lt,useCallback:zd,useContext:lt,useEffect:ha,useImperativeHandle:Ed,useInsertionEffect:jd,useLayoutEffect:Nd,useMemo:_d,useReducer:Sl,useRef:Sd,useState:function(){return Sl(ro)},useDebugValue:ma,useDeferredValue:function(e){var t=st();return Dd(t,ye.memoizedState,e)},useTransition:function(){var e=Sl(ro)[0],t=st().memoizedState;return[e,t]},useMutableSource:gd,useSyncExternalStore:xd,useId:Td,unstable_isNewReconciler:!1},Sh={readContext:lt,useCallback:zd,useContext:lt,useEffect:ha,useImperativeHandle:Ed,useInsertionEffect:jd,useLayoutEffect:Nd,useMemo:_d,useReducer:jl,useRef:Sd,useState:function(){return jl(ro)},useDebugValue:ma,useDeferredValue:function(e){var t=st();return ye===null?t.memoizedState=e:Dd(t,ye.memoizedState,e)},useTransition:function(){var e=jl(ro)[0],t=st().memoizedState;return[e,t]},useMutableSource:gd,useSyncExternalStore:xd,useId:Td,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ds(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ai={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=nn(e),i=Mt(r,o);i.payload=t,n!=null&&(i.callback=n),t=en(e,i,o),t!==null&&(mt(t,e,o,r),Yo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=nn(e),i=Mt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=en(e,i,o),t!==null&&(mt(t,e,o,r),Yo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=nn(e),o=Mt(n,r);o.tag=2,t!=null&&(o.callback=t),t=en(e,o,r),t!==null&&(mt(t,e,r,n),Yo(t,e,r))}};function xu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(o,i):!0}function Od(e,t,n){var r=!1,o=ln,i=t.contextType;return typeof i=="object"&&i!==null?i=lt(i):(o=Ve(t)?zn:Me.current,r=t.contextTypes,i=(r=r!=null)?rr(e,o):ln),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ai,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function yu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ai.enqueueReplaceState(t,t.state,null)}function fs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},sa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=lt(i):(i=Ve(t)?zn:Me.current,o.context=rr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ds(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ai.enqueueReplaceState(o,o.state,null),xi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t){try{var n="",r=t;do n+=Jf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Nl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ps(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jh=typeof WeakMap=="function"?WeakMap:Map;function Rd(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bi||(bi=!0,Ss=r),ps(e,t)},n}function $d(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ps(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ps(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ih.bind(null,e,t,n),t.then(e,e))}function wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ku(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var Nh=At.ReactCurrentOwner,He=!1;function $e(e,t,n,r){t.child=e===null?fd(t,null,n,r):ir(t,e.child,n,r)}function bu(e,t,n,r,o){n=n.render;var i=t.ref;return er(t,o),r=fa(e,t,n,r,i,o),n=pa(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,It(e,t,o)):(le&&n&&ea(t),t.flags|=1,$e(e,t,r,o),t.child)}function Su(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Sa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Id(e,t,i,r,o)):(e=ei(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(l,r)&&e.ref===t.ref)return It(e,t,o)}return t.flags|=1,e=rn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Id(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Gr(i,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,It(e,t,o)}return hs(e,t,n,r,o)}function Ad(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Xn,Ye),Ye|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Xn,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(Xn,Ye),Ye|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,te(Xn,Ye),Ye|=r;return $e(e,t,o,n),t.child}function Fd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hs(e,t,n,r,o){var i=Ve(n)?zn:Me.current;return i=rr(t,i),er(t,o),n=fa(e,t,n,r,i,o),r=pa(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,It(e,t,o)):(le&&r&&ea(t),t.flags|=1,$e(e,t,n,o),t.child)}function ju(e,t,n,r,o){if(Ve(n)){var i=!0;fi(t)}else i=!1;if(er(t,o),t.stateNode===null)Jo(e,t),Od(t,n,r),fs(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=lt(c):(c=Ve(n)?zn:Me.current,c=rr(t,c));var m=n.getDerivedStateFromProps,x=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&yu(t,l,r,c),Wt=!1;var f=t.memoizedState;l.state=f,xi(t,r,l,o),a=t.memoizedState,s!==r||f!==a||We.current||Wt?(typeof m=="function"&&(ds(t,n,m,r),a=t.memoizedState),(s=Wt||xu(t,n,s,r,f,a,c))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,hd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:dt(t.type,s),l.props=c,x=t.pendingProps,f=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=lt(a):(a=Ve(n)?zn:Me.current,a=rr(t,a));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==x||f!==a)&&yu(t,l,r,a),Wt=!1,f=t.memoizedState,l.state=f,xi(t,r,l,o);var b=t.memoizedState;s!==x||f!==b||We.current||Wt?(typeof w=="function"&&(ds(t,n,w,r),b=t.memoizedState),(c=Wt||xu(t,n,c,r,f,b,a)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ms(e,t,n,r,i,o)}function ms(e,t,n,r,o,i){Fd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&uu(t,n,!1),It(e,t,i);r=t.stateNode,Nh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ir(t,e.child,null,i),t.child=ir(t,null,s,i)):$e(e,t,s,i),t.memoizedState=r.state,o&&uu(t,n,!0),t.child}function Bd(e){var t=e.stateNode;t.pendingContext?au(e,t.pendingContext,t.pendingContext!==t.context):t.context&&au(e,t.context,!1),aa(e,t.containerInfo)}function Nu(e,t,n,r,o){return or(),na(o),t.flags|=256,$e(e,t,n,r),t.child}var gs={dehydrated:null,treeContext:null,retryLane:0};function xs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ud(e,t,n){var r=t.pendingProps,o=se.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),te(se,o&1),e===null)return us(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ui(l,r,0,null),e=jn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=xs(n),t.memoizedState=gs,e):ga(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Ch(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=rn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=rn(s,i):(i=jn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?xs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=gs,r}return i=e.child,e=i.sibling,r=rn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ga(e,t){return t=Ui({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $o(e,t,n,r){return r!==null&&na(r),ir(t,e.child,null,n),e=ga(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ch(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Nl(Error(_(422))),$o(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ui({mode:"visible",children:r.children},o,0,null),i=jn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ir(t,e.child,null,l),t.child.memoizedState=xs(l),t.memoizedState=gs,i);if(!(t.mode&1))return $o(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=Nl(i,r,void 0),$o(e,t,l,r)}if(s=(l&e.childLanes)!==0,He||s){if(r=je,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,$t(e,o),mt(r,e,o,-1))}return ba(),r=Nl(Error(_(421))),$o(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ah.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ge=qt(o.nextSibling),Je=t,le=!0,pt=null,e!==null&&(nt[rt++]=Tt,nt[rt++]=Lt,nt[rt++]=_n,Tt=e.id,Lt=e.overflow,_n=t),t=ga(t,r.children),t.flags|=4096,t)}function Cu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cs(e.return,t,n)}function Cl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Kd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if($e(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cu(e,n,t);else if(e.tag===19)Cu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(se,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&yi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Cl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&yi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Cl(t,!0,n,null,i);break;case"together":Cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Eh(e,t,n){switch(t.tag){case 3:Bd(t),or();break;case 5:md(t);break;case 1:Ve(t.type)&&fi(t);break;case 4:aa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;te(mi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?Ud(e,t,n):(te(se,se.current&1),e=It(e,t,n),e!==null?e.sibling:null);te(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Ad(e,t,n)}return It(e,t,n)}var Hd,ys,Wd,Vd;Hd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ys=function(){};Wd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,bn(Nt.current);var i=null;switch(n){case"input":o=Fl(e,o),r=Fl(e,r),i=[];break;case"select":o=ue({},o,{value:void 0}),r=ue({},r,{value:void 0}),i=[];break;case"textarea":o=Kl(e,o),r=Kl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ci)}Wl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Kr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&re("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Vd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zh(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return Ve(t.type)&&di(),De(t),null;case 3:return r=t.stateNode,lr(),oe(We),oe(Me),ca(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(Cs(pt),pt=null))),ys(e,t),De(t),null;case 5:ua(t);var o=bn(to.current);if(n=t.type,e!==null&&t.stateNode!=null)Wd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return De(t),null}if(e=bn(Nt.current),Oo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[St]=t,r[qr]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<Lr.length;o++)re(Lr[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Oa(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":$a(r,i),re("invalid",r)}Wl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Mo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Mo(r.textContent,s,e),o=["children",""+s]):Kr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&re("scroll",r)}switch(n){case"input":Co(r),Ra(r,i,!0);break;case"textarea":Co(r),Ia(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ci)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[St]=t,e[qr]=r,Hd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Vl(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Lr.length;o++)re(Lr[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":Oa(e,r),o=Fl(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ue({},r,{value:void 0}),re("invalid",e);break;case"textarea":$a(e,r),o=Kl(e,r),re("invalid",e);break;default:o=r}Wl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Sc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&kc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Hr(e,a):typeof a=="number"&&Hr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Kr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&re("scroll",e):a!=null&&Fs(e,i,a,l))}switch(n){case"input":Co(e),Ra(e,r,!1);break;case"textarea":Co(e),Ia(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Gn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ci)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return De(t),null;case 6:if(e&&t.stateNode!=null)Vd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=bn(to.current),bn(Nt.current),Oo(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(i=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:Mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return De(t),null;case 13:if(oe(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Ge!==null&&t.mode&1&&!(t.flags&128))cd(),or(),t.flags|=98560,i=!1;else if(i=Oo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[St]=t}else or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else pt!==null&&(Cs(pt),pt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ve===0&&(ve=3):ba())),t.updateQueue!==null&&(t.flags|=4),De(t),null);case 4:return lr(),ys(e,t),e===null&&Jr(t.stateNode.containerInfo),De(t),null;case 10:return ia(t.type._context),De(t),null;case 17:return Ve(t.type)&&di(),De(t),null;case 19:if(oe(se),i=t.memoizedState,i===null)return De(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Cr(i,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=yi(e),l!==null){for(t.flags|=128,Cr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&de()>ar&&(t.flags|=128,r=!0,Cr(i,!1),t.lanes=4194304)}else{if(!r)if(e=yi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!le)return De(t),null}else 2*de()-i.renderingStartTime>ar&&n!==1073741824&&(t.flags|=128,r=!0,Cr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=de(),t.sibling=null,n=se.current,te(se,r?n&1|2:n&1),t):(De(t),null);case 22:case 23:return ka(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function _h(e,t){switch(ta(t),t.tag){case 1:return Ve(t.type)&&di(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lr(),oe(We),oe(Me),ca(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ua(t),null;case 13:if(oe(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(se),null;case 4:return lr(),null;case 10:return ia(t.type._context),null;case 22:case 23:return ka(),null;case 24:return null;default:return null}}var Io=!1,Te=!1,Dh=typeof WeakSet=="function"?WeakSet:Set,$=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function vs(e,t,n){try{n()}catch(r){ce(e,t,r)}}var Eu=!1;function Th(e,t){if(ns=si,e=Jc(),qs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,m=0,x=e,f=null;t:for(;;){for(var w;x!==n||o!==0&&x.nodeType!==3||(s=l+o),x!==i||r!==0&&x.nodeType!==3||(a=l+r),x.nodeType===3&&(l+=x.nodeValue.length),(w=x.firstChild)!==null;)f=x,x=w;for(;;){if(x===e)break t;if(f===n&&++c===o&&(s=l),f===i&&++m===r&&(a=l),(w=x.nextSibling)!==null)break;x=f,f=x.parentNode}x=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(rs={focusedElem:e,selectionRange:n},si=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var j=b.memoizedProps,P=b.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?j:dt(t.type,j),P);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(k){ce(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return b=Eu,Eu=!1,b}function Fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&vs(t,n,i)}o=o.next}while(o!==r)}}function Fi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ws(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qd(e){var t=e.alternate;t!==null&&(e.alternate=null,Qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[qr],delete t[ls],delete t[ph],delete t[hh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yd(e){return e.tag===5||e.tag===3||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ks(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ci));else if(r!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}function bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bs(e,t,n),e=e.sibling;e!==null;)bs(e,t,n),e=e.sibling}var Ne=null,ft=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Xd(e,t,n),n=n.sibling}function Xd(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Li,n)}catch{}switch(n.tag){case 5:Te||Yn(n,t);case 6:var r=Ne,o=ft;Ne=null,Kt(e,t,n),Ne=r,ft=o,Ne!==null&&(ft?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(ft?(e=Ne,n=n.stateNode,e.nodeType===8?vl(e.parentNode,n):e.nodeType===1&&vl(e,n),Yr(e)):vl(Ne,n.stateNode));break;case 4:r=Ne,o=ft,Ne=n.stateNode.containerInfo,ft=!0,Kt(e,t,n),Ne=r,ft=o;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&vs(n,t,l),o=o.next}while(o!==r)}Kt(e,t,n);break;case 1:if(!Te&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ce(n,t,s)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Kt(e,t,n),Te=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function _u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dh),t.forEach(function(r){var o=Fh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Ne=s.stateNode,ft=!1;break e;case 3:Ne=s.stateNode.containerInfo,ft=!0;break e;case 4:Ne=s.stateNode.containerInfo,ft=!0;break e}s=s.return}if(Ne===null)throw Error(_(160));Xd(i,l,o),Ne=null,ft=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){ce(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gd(t,e),t=t.sibling}function Gd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),kt(e),r&4){try{Fr(3,e,e.return),Fi(3,e)}catch(j){ce(e,e.return,j)}try{Fr(5,e,e.return)}catch(j){ce(e,e.return,j)}}break;case 1:ct(t,e),kt(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(ct(t,e),kt(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var o=e.stateNode;try{Hr(o,"")}catch(j){ce(e,e.return,j)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&yc(o,i),Vl(s,l);var c=Vl(s,i);for(l=0;l<a.length;l+=2){var m=a[l],x=a[l+1];m==="style"?Sc(o,x):m==="dangerouslySetInnerHTML"?kc(o,x):m==="children"?Hr(o,x):Fs(o,m,x,c)}switch(s){case"input":Bl(o,i);break;case"textarea":vc(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Gn(o,!!i.multiple,w,!1):f!==!!i.multiple&&(i.defaultValue!=null?Gn(o,!!i.multiple,i.defaultValue,!0):Gn(o,!!i.multiple,i.multiple?[]:"",!1))}o[qr]=i}catch(j){ce(e,e.return,j)}}break;case 6:if(ct(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(j){ce(e,e.return,j)}}break;case 3:if(ct(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(j){ce(e,e.return,j)}break;case 4:ct(t,e),kt(e);break;case 13:ct(t,e),kt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(va=de())),r&4&&_u(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(c=Te)||m,ct(t,e),Te=c):ct(t,e),kt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for($=e,m=e.child;m!==null;){for(x=$=m;$!==null;){switch(f=$,w=f.child,f.tag){case 0:case 11:case 14:case 15:Fr(4,f,f.return);break;case 1:Yn(f,f.return);var b=f.stateNode;if(typeof b.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(j){ce(r,n,j)}}break;case 5:Yn(f,f.return);break;case 22:if(f.memoizedState!==null){Tu(x);continue}}w!==null?(w.return=f,$=w):Tu(x)}m=m.sibling}e:for(m=null,x=e;;){if(x.tag===5){if(m===null){m=x;try{o=x.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=x.stateNode,a=x.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=bc("display",l))}catch(j){ce(e,e.return,j)}}}else if(x.tag===6){if(m===null)try{x.stateNode.nodeValue=c?"":x.memoizedProps}catch(j){ce(e,e.return,j)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;m===x&&(m=null),x=x.return}m===x&&(m=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:ct(t,e),kt(e),r&4&&_u(e);break;case 21:break;default:ct(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yd(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Hr(o,""),r.flags&=-33);var i=zu(e);bs(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=zu(e);ks(e,s,l);break;default:throw Error(_(161))}}catch(a){ce(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lh(e,t,n){$=e,Jd(e)}function Jd(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Io;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Te;s=Io;var c=Te;if(Io=l,(Te=a)&&!c)for($=o;$!==null;)l=$,a=l.child,l.tag===22&&l.memoizedState!==null?Lu(o):a!==null?(a.return=l,$=a):Lu(o);for(;i!==null;)$=i,Jd(i),i=i.sibling;$=o,Io=s,Te=c}Du(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):Du(e)}}function Du(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||Fi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&hu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var x=m.dehydrated;x!==null&&Yr(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Te||t.flags&512&&ws(t)}catch(f){ce(t,t.return,f)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Tu(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Lu(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fi(4,t)}catch(a){ce(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ce(t,o,a)}}var i=t.return;try{ws(t)}catch(a){ce(t,i,a)}break;case 5:var l=t.return;try{ws(t)}catch(a){ce(t,l,a)}}}catch(a){ce(t,t.return,a)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var Ph=Math.ceil,ki=At.ReactCurrentDispatcher,xa=At.ReactCurrentOwner,it=At.ReactCurrentBatchConfig,Y=0,je=null,pe=null,Ce=0,Ye=0,Xn=an(0),ve=0,io=null,Tn=0,Bi=0,ya=0,Br=null,Ke=null,va=0,ar=1/0,zt=null,bi=!1,Ss=null,tn=null,Ao=!1,Xt=null,Si=0,Ur=0,js=null,Zo=-1,qo=0;function Ae(){return Y&6?de():Zo!==-1?Zo:Zo=de()}function nn(e){return e.mode&1?Y&2&&Ce!==0?Ce&-Ce:gh.transition!==null?(qo===0&&(qo=Oc()),qo):(e=X,e!==0||(e=window.event,e=e===void 0?16:Uc(e.type)),e):1}function mt(e,t,n,r){if(50<Ur)throw Ur=0,js=null,Error(_(185));ao(e,n,r),(!(Y&2)||e!==je)&&(e===je&&(!(Y&2)&&(Bi|=n),ve===4&&Qt(e,Ce)),Qe(e,r),n===1&&Y===0&&!(t.mode&1)&&(ar=de()+500,$i&&un()))}function Qe(e,t){var n=e.callbackNode;gp(e,t);var r=li(e,e===je?Ce:0);if(r===0)n!==null&&Ba(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ba(n),t===1)e.tag===0?mh(Pu.bind(null,e)):sd(Pu.bind(null,e)),dh(function(){!(Y&6)&&un()}),n=null;else{switch(Rc(r)){case 1:n=Ws;break;case 4:n=Pc;break;case 16:n=ii;break;case 536870912:n=Mc;break;default:n=ii}n=lf(n,Zd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zd(e,t){if(Zo=-1,qo=0,Y&6)throw Error(_(327));var n=e.callbackNode;if(tr()&&e.callbackNode!==n)return null;var r=li(e,e===je?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ji(e,r);else{t=r;var o=Y;Y|=2;var i=ef();(je!==e||Ce!==t)&&(zt=null,ar=de()+500,Sn(e,t));do try{Rh();break}catch(s){qd(e,s)}while(!0);oa(),ki.current=i,Y=o,pe!==null?t=0:(je=null,Ce=0,t=ve)}if(t!==0){if(t===2&&(o=Jl(e),o!==0&&(r=o,t=Ns(e,o))),t===1)throw n=io,Sn(e,0),Qt(e,r),Qe(e,de()),n;if(t===6)Qt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Mh(o)&&(t=ji(e,r),t===2&&(i=Jl(e),i!==0&&(r=i,t=Ns(e,i))),t===1))throw n=io,Sn(e,0),Qt(e,r),Qe(e,de()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:vn(e,Ke,zt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=va+500-de(),10<t)){if(li(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=is(vn.bind(null,e,Ke,zt),t);break}vn(e,Ke,zt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ht(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ph(r/1960))-r,10<r){e.timeoutHandle=is(vn.bind(null,e,Ke,zt),r);break}vn(e,Ke,zt);break;case 5:vn(e,Ke,zt);break;default:throw Error(_(329))}}}return Qe(e,de()),e.callbackNode===n?Zd.bind(null,e):null}function Ns(e,t){var n=Br;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=ji(e,t),e!==2&&(t=Ke,Ke=n,t!==null&&Cs(t)),e}function Cs(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function Mh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!gt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~ya,t&=~Bi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function Pu(e){if(Y&6)throw Error(_(327));tr();var t=li(e,0);if(!(t&1))return Qe(e,de()),null;var n=ji(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=Ns(e,r))}if(n===1)throw n=io,Sn(e,0),Qt(e,t),Qe(e,de()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,Ke,zt),Qe(e,de()),null}function wa(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(ar=de()+500,$i&&un())}}function Ln(e){Xt!==null&&Xt.tag===0&&!(Y&6)&&tr();var t=Y;Y|=1;var n=it.transition,r=X;try{if(it.transition=null,X=1,e)return e()}finally{X=r,it.transition=n,Y=t,!(Y&6)&&un()}}function ka(){Ye=Xn.current,oe(Xn)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ch(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&di();break;case 3:lr(),oe(We),oe(Me),ca();break;case 5:ua(r);break;case 4:lr();break;case 13:oe(se);break;case 19:oe(se);break;case 10:ia(r.type._context);break;case 22:case 23:ka()}n=n.return}if(je=e,pe=e=rn(e.current,null),Ce=Ye=t,ve=0,io=null,ya=Bi=Tn=0,Ke=Br=null,kn!==null){for(t=0;t<kn.length;t++)if(n=kn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}kn=null}return e}function qd(e,t){do{var n=pe;try{if(oa(),Xo.current=wi,vi){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}vi=!1}if(Dn=0,Se=ye=ae=null,Ar=!1,no=0,xa.current=null,n===null||n.return===null){ve=1,io=t,pe=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=Ce,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=s,x=m.tag;if(!(m.mode&1)&&(x===0||x===11||x===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=wu(l);if(w!==null){w.flags&=-257,ku(w,l,s,i,t),w.mode&1&&vu(i,c,t),t=w,a=c;var b=t.updateQueue;if(b===null){var j=new Set;j.add(a),t.updateQueue=j}else b.add(a);break e}else{if(!(t&1)){vu(i,c,t),ba();break e}a=Error(_(426))}}else if(le&&s.mode&1){var P=wu(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),ku(P,l,s,i,t),na(sr(a,s));break e}}i=a=sr(a,s),ve!==4&&(ve=2),Br===null?Br=[i]:Br.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Rd(i,a,t);pu(i,g);break e;case 1:s=a;var p=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(tn===null||!tn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=$d(i,s,t);pu(i,k);break e}}i=i.return}while(i!==null)}nf(n)}catch(N){t=N,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function ef(){var e=ki.current;return ki.current=wi,e===null?wi:e}function ba(){(ve===0||ve===3||ve===2)&&(ve=4),je===null||!(Tn&268435455)&&!(Bi&268435455)||Qt(je,Ce)}function ji(e,t){var n=Y;Y|=2;var r=ef();(je!==e||Ce!==t)&&(zt=null,Sn(e,t));do try{Oh();break}catch(o){qd(e,o)}while(!0);if(oa(),Y=n,ki.current=r,pe!==null)throw Error(_(261));return je=null,Ce=0,ve}function Oh(){for(;pe!==null;)tf(pe)}function Rh(){for(;pe!==null&&!sp();)tf(pe)}function tf(e){var t=of(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?nf(e):pe=t,xa.current=null}function nf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_h(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,pe=null;return}}else if(n=zh(n,t,Ye),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ve===0&&(ve=5)}function vn(e,t,n){var r=X,o=it.transition;try{it.transition=null,X=1,$h(e,t,n,r)}finally{it.transition=o,X=r}return null}function $h(e,t,n,r){do tr();while(Xt!==null);if(Y&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(xp(e,i),e===je&&(pe=je=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ao||(Ao=!0,lf(ii,function(){return tr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=it.transition,it.transition=null;var l=X;X=1;var s=Y;Y|=4,xa.current=null,Th(e,n),Gd(n,e),rh(rs),si=!!ns,rs=ns=null,e.current=n,Lh(n),ap(),Y=s,X=l,it.transition=i}else e.current=n;if(Ao&&(Ao=!1,Xt=e,Si=o),i=e.pendingLanes,i===0&&(tn=null),dp(n.stateNode),Qe(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(bi)throw bi=!1,e=Ss,Ss=null,e;return Si&1&&e.tag!==0&&tr(),i=e.pendingLanes,i&1?e===js?Ur++:(Ur=0,js=e):Ur=0,un(),null}function tr(){if(Xt!==null){var e=Rc(Si),t=it.transition,n=X;try{if(it.transition=null,X=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,Si=0,Y&6)throw Error(_(331));var o=Y;for(Y|=4,$=e.current;$!==null;){var i=$,l=i.child;if($.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for($=c;$!==null;){var m=$;switch(m.tag){case 0:case 11:case 15:Fr(8,m,i)}var x=m.child;if(x!==null)x.return=m,$=x;else for(;$!==null;){m=$;var f=m.sibling,w=m.return;if(Qd(m),m===c){$=null;break}if(f!==null){f.return=w,$=f;break}$=w}}}var b=i.alternate;if(b!==null){var j=b.child;if(j!==null){b.child=null;do{var P=j.sibling;j.sibling=null,j=P}while(j!==null)}}$=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,$=l;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Fr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,$=g;break e}$=i.return}}var p=e.current;for($=p;$!==null;){l=$;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,$=h;else e:for(l=p;$!==null;){if(s=$,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Fi(9,s)}}catch(N){ce(s,s.return,N)}if(s===l){$=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,$=k;break e}$=s.return}}if(Y=o,un(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Li,e)}catch{}r=!0}return r}finally{X=n,it.transition=t}}return!1}function Mu(e,t,n){t=sr(n,t),t=Rd(e,t,1),e=en(e,t,1),t=Ae(),e!==null&&(ao(e,1,t),Qe(e,t))}function ce(e,t,n){if(e.tag===3)Mu(e,e,n);else for(;t!==null;){if(t.tag===3){Mu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=sr(n,e),e=$d(t,e,1),t=en(t,e,1),e=Ae(),t!==null&&(ao(t,1,e),Qe(t,e));break}}t=t.return}}function Ih(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Ce&n)===n&&(ve===4||ve===3&&(Ce&130023424)===Ce&&500>de()-va?Sn(e,0):ya|=n),Qe(e,t)}function rf(e,t){t===0&&(e.mode&1?(t=_o,_o<<=1,!(_o&130023424)&&(_o=4194304)):t=1);var n=Ae();e=$t(e,t),e!==null&&(ao(e,t,n),Qe(e,n))}function Ah(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rf(e,n)}function Fh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),rf(e,n)}var of;of=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,Eh(e,t,n);He=!!(e.flags&131072)}else He=!1,le&&t.flags&1048576&&ad(t,hi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Jo(e,t),e=t.pendingProps;var o=rr(t,Me.current);er(t,n),o=fa(null,t,r,e,o,n);var i=pa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(i=!0,fi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,sa(t),o.updater=Ai,t.stateNode=o,o._reactInternals=t,fs(t,r,e,n),t=ms(null,t,r,!0,i,n)):(t.tag=0,le&&i&&ea(t),$e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Jo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Uh(r),e=dt(r,e),o){case 0:t=hs(null,t,r,e,n);break e;case 1:t=ju(null,t,r,e,n);break e;case 11:t=bu(null,t,r,e,n);break e;case 14:t=Su(null,t,r,dt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),hs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),ju(e,t,r,o,n);case 3:e:{if(Bd(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,hd(e,t),xi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=sr(Error(_(423)),t),t=Nu(e,t,r,n,o);break e}else if(r!==o){o=sr(Error(_(424)),t),t=Nu(e,t,r,n,o);break e}else for(Ge=qt(t.stateNode.containerInfo.firstChild),Je=t,le=!0,pt=null,n=fd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(or(),r===o){t=It(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return md(t),e===null&&us(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,os(r,o)?l=null:i!==null&&os(r,i)&&(t.flags|=32),Fd(e,t),$e(e,t,l,n),t.child;case 6:return e===null&&us(t),null;case 13:return Ud(e,t,n);case 4:return aa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),bu(e,t,r,o,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,te(mi,r._currentValue),r._currentValue=l,i!==null)if(gt(i.value,l)){if(i.children===o.children&&!We.current){t=It(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Mt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),cs(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),cs(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}$e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,er(t,n),o=lt(o),r=r(o),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,o=dt(r,t.pendingProps),o=dt(r.type,o),Su(e,t,r,o,n);case 15:return Id(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Jo(e,t),t.tag=1,Ve(r)?(e=!0,fi(t)):e=!1,er(t,n),Od(t,r,o),fs(t,r,o,n),ms(null,t,r,!0,e,n);case 19:return Kd(e,t,n);case 22:return Ad(e,t,n)}throw Error(_(156,t.tag))};function lf(e,t){return Lc(e,t)}function Bh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new Bh(e,t,n,r)}function Sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uh(e){if(typeof e=="function")return Sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Us)return 11;if(e===Ks)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ei(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Sa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case An:return jn(n.children,o,i,t);case Bs:l=8,o|=8;break;case Rl:return e=ot(12,n,t,o|2),e.elementType=Rl,e.lanes=i,e;case $l:return e=ot(13,n,t,o),e.elementType=$l,e.lanes=i,e;case Il:return e=ot(19,n,t,o),e.elementType=Il,e.lanes=i,e;case mc:return Ui(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pc:l=10;break e;case hc:l=9;break e;case Us:l=11;break e;case Ks:l=14;break e;case Ht:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=ot(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function jn(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function Ui(e,t,n,r){return e=ot(22,e,r,t),e.elementType=mc,e.lanes=n,e.stateNode={isHidden:!1},e}function El(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function zl(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=al(0),this.expirationTimes=al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=al(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ja(e,t,n,r,o,i,l,s,a){return e=new Kh(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ot(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sa(i),e}function Hh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sf(e){if(!e)return ln;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ve(n))return ld(e,n,t)}return t}function af(e,t,n,r,o,i,l,s,a){return e=ja(n,r,!0,e,o,i,l,s,a),e.context=sf(null),n=e.current,r=Ae(),o=nn(n),i=Mt(r,o),i.callback=t??null,en(n,i,o),e.current.lanes=o,ao(e,o,r),Qe(e,r),e}function Ki(e,t,n,r){var o=t.current,i=Ae(),l=nn(o);return n=sf(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(o,t,l),e!==null&&(mt(e,o,l,i),Yo(e,o,l)),l}function Ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Na(e,t){Ou(e,t),(e=e.alternate)&&Ou(e,t)}function Wh(){return null}var uf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ca(e){this._internalRoot=e}Hi.prototype.render=Ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Ki(e,t,null,null)};Hi.prototype.unmount=Ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){Ki(null,e,null,null)}),t[Rt]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ac();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&Bc(e)}};function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ru(){}function Vh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ni(l);i.call(c)}}var l=af(t,r,e,0,null,!1,!1,"",Ru);return e._reactRootContainer=l,e[Rt]=l.current,Jr(e.nodeType===8?e.parentNode:e),Ln(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Ni(a);s.call(c)}}var a=ja(e,0,!1,null,null,!1,!1,"",Ru);return e._reactRootContainer=a,e[Rt]=a.current,Jr(e.nodeType===8?e.parentNode:e),Ln(function(){Ki(t,a,n,r)}),a}function Vi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Ni(l);s.call(a)}}Ki(t,l,e,o)}else l=Vh(n,t,e,o,r);return Ni(l)}$c=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tr(t.pendingLanes);n!==0&&(Vs(t,n|1),Qe(t,de()),!(Y&6)&&(ar=de()+500,un()))}break;case 13:Ln(function(){var r=$t(e,1);if(r!==null){var o=Ae();mt(r,e,1,o)}}),Na(e,1)}};Qs=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Ae();mt(t,e,134217728,n)}Na(e,134217728)}};Ic=function(e){if(e.tag===13){var t=nn(e),n=$t(e,t);if(n!==null){var r=Ae();mt(n,e,t,r)}Na(e,t)}};Ac=function(){return X};Fc=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Yl=function(e,t,n){switch(t){case"input":if(Bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ri(r);if(!o)throw Error(_(90));xc(r),Bl(r,o)}}}break;case"textarea":vc(e,n);break;case"select":t=n.value,t!=null&&Gn(e,!!n.multiple,t,!1)}};Cc=wa;Ec=Ln;var Qh={usingClientEntryPoint:!1,Events:[co,Kn,Ri,jc,Nc,wa]},Er={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yh={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dc(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||Wh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{Li=Fo.inject(Yh),jt=Fo}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qh;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ea(t))throw Error(_(200));return Hh(e,t,null,n)};qe.createRoot=function(e,t){if(!Ea(e))throw Error(_(299));var n=!1,r="",o=uf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ja(e,1,!1,null,null,n,!1,r,o),e[Rt]=t.current,Jr(e.nodeType===8?e.parentNode:e),new Ca(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Dc(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return Ln(e)};qe.hydrate=function(e,t,n){if(!Wi(t))throw Error(_(200));return Vi(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!Ea(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=uf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=af(t,null,e,1,n??null,o,!1,i,l),e[Rt]=t.current,Jr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Hi(t)};qe.render=function(e,t,n){if(!Wi(t))throw Error(_(200));return Vi(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!Wi(e))throw Error(_(40));return e._reactRootContainer?(Ln(function(){Vi(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};qe.unstable_batchedUpdates=wa;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wi(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Vi(e,t,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function cf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cf)}catch(e){console.error(e)}}cf(),uc.exports=qe;var Xh=uc.exports,df,$u=Xh;df=$u.createRoot,$u.hydrateRoot;const Gh="modulepreload",Jh=function(e,t){return new URL(e,t).href},Iu={},po=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(c=>{if(c=Jh(c,r),c in Iu)return;Iu[c]=!0;const m=c.endsWith(".css"),x=m?'[rel="stylesheet"]':"";if(!!r)for(let b=l.length-1;b>=0;b--){const j=l[b];if(j.href===c&&(!m||j.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${x}`))return;const w=document.createElement("link");if(w.rel=m?"stylesheet":Gh,m||(w.as="script"),w.crossOrigin="",w.href=c,a&&w.setAttribute("nonce",a),document.head.appendChild(w),m)return new Promise((b,j)=>{w.addEventListener("load",b),w.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})};function Zh(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:l}=e;let s,a;const c=async(x=!0)=>{await a};async function m(){if("serviceWorker"in navigator){if(s=await po(async()=>{const{Workbox:x}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:x}},[],import.meta.url).then(({Workbox:x})=>new x("./sw.js",{scope:"./",type:"classic"})).catch(x=>{l==null||l(x)}),!s)return;s.addEventListener("activated",x=>{(x.isUpdate||x.isExternal)&&window.location.reload()}),s.addEventListener("installed",x=>{x.isUpdate||r==null||r()}),s.register({immediate:t}).then(x=>{i?i("./sw.js",x):o==null||o(x)}).catch(x=>{l==null||l(x)})}}return a=m(),c}const Es=(e,t)=>t.some(n=>e instanceof n);let Au,Fu;function qh(){return Au||(Au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function em(){return Fu||(Fu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zs=new WeakMap,_l=new WeakMap,Qi=new WeakMap;function tm(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",l)},i=()=>{n(Nn(e.result)),o()},l=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",l)});return Qi.set(t,e),t}function nm(e){if(zs.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",l),e.removeEventListener("abort",l)},i=()=>{n(),o()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",l),e.addEventListener("abort",l)});zs.set(e,t)}let _s={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return zs.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ff(e){_s=e(_s)}function rm(e){return em().includes(e)?function(...t){return e.apply(Ds(this),t),Nn(this.request)}:function(...t){return Nn(e.apply(Ds(this),t))}}function om(e){return typeof e=="function"?rm(e):(e instanceof IDBTransaction&&nm(e),Es(e,qh())?new Proxy(e,_s):e)}function Nn(e){if(e instanceof IDBRequest)return tm(e);if(_l.has(e))return _l.get(e);const t=om(e);return t!==e&&(_l.set(e,t),Qi.set(t,e)),t}const Ds=e=>Qi.get(e);function im(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const l=indexedDB.open(e,t),s=Nn(l);return r&&l.addEventListener("upgradeneeded",a=>{r(Nn(l.result),a.oldVersion,a.newVersion,Nn(l.transaction),a)}),n&&l.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),s.then(a=>{i&&a.addEventListener("close",()=>i()),o&&a.addEventListener("versionchange",c=>o(c.oldVersion,c.newVersion,c))}).catch(()=>{}),s}const lm=["get","getKey","getAll","getAllKeys","count"],sm=["put","add","delete","clear"],Dl=new Map;function Bu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Dl.get(t))return Dl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=sm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||lm.includes(n)))return;const i=async function(l,...s){const a=this.transaction(l,o?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(s.shift())),(await Promise.all([c[n](...s),o&&a.done]))[0]};return Dl.set(t,i),i}ff(e=>({...e,get:(t,n,r)=>Bu(t,n)||e.get(t,n,r),has:(t,n)=>!!Bu(t,n)||e.has(t,n)}));const am=["continue","continuePrimaryKey","advance"],Uu={},Ts=new WeakMap,pf=new WeakMap,um={get(e,t){if(!am.includes(t))return e[t];let n=Uu[t];return n||(n=Uu[t]=function(...r){Ts.set(this,pf.get(this)[t](...r))}),n}};async function*cm(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const n=new Proxy(t,um);for(pf.set(n,t),Qi.set(n,Ds(t));t;)yield n,t=await(Ts.get(n)||t.continue()),Ts.delete(n)}function Ku(e,t){return t===Symbol.asyncIterator&&Es(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&Es(e,[IDBIndex,IDBObjectStore])}ff(e=>({...e,get(t,n,r){return Ku(t,n)?cm:e.get(t,n,r)},has(t,n){return Ku(t,n)||e.has(t,n)}}));const dm="nachumin-diary",fm=1,Ci="kv",pm="line-diary-entries-v1",Pt="rooms-v1",Le=e=>`room-data-v1:${e}`,hm=e=>`trash-v1:${e}:${Date.now()}`,ti="declaration-v1",lo="marks-v1",mm=["・","❤︎","🩷","💛","🩵","💜","✨","✔︎"],Cn=e=>`donelog-v1:${e}`,En=e=>`habits-v1:${e}`,Ei=e=>`habitlog-v1:${e}`,zi=e=>`habitseed-v1:${e}`,Tl="backup-v1",ge="diary-main",hf=im(dm,fm,{upgrade(e){e.objectStoreNames.contains(Ci)||e.createObjectStore(Ci)}});async function V(e){return(await hf).get(Ci,e)}async function Q(e,t){return(await hf).put(Ci,t,e)}async function gm(){try{navigator.storage&&navigator.storage.persist&&await navigator.storage.persist()}catch{}}async function xm(){const e=await V(Pt);if(e)return e;let t=await V(pm);if(typeof t=="string")try{t=JSON.parse(t)}catch{t=null}const n=t&&typeof t=="object"?t:{};await Q(Le(ge),n);const r=Object.keys(n).sort(),o=r[r.length-1],i=[{id:ge,type:"diary",name:"日記",emoji:"💗",createdAt:Date.now(),lastAt:o?Date.now():0,preview:o?n[o].text.split(`
`)[0].slice(0,40):""}];return await Q(Pt,i),i}const ym=5,vm=ym*60*60*1e3,mf=()=>new Date(Date.now()-vm),Pe=e=>String(e).padStart(2,"0"),Dt=e=>`${e.getFullYear()}-${Pe(e.getMonth()+1)}-${Pe(e.getDate())}`,xe=e=>e.split("-").join("/"),Ie=e=>{const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},Ls=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wm=["S","M","T","W","T","F","S"],Ps=e=>`${xe(e)} ${Ls[Ie(e).getDay()]}`,Bo=(e,t,n)=>1+(8-new Date(e,t-1,1).getDay())%7+(n-1)*7,km=e=>Math.floor(20.8431+.242194*(e-1980)-Math.floor((e-1980)/4)),bm=e=>Math.floor(23.2488+.242194*(e-1980)-Math.floor((e-1980)/4)),Ll={};function Sm(e){if(Ll[e])return Ll[e];const t={},n=(r,o,i)=>{t[`${e}-${Pe(r)}-${Pe(o)}`]=i};n(1,1,"元日"),n(1,Bo(e,1,2),"成人の日"),n(2,11,"建国記念の日"),n(2,23,"天皇誕生日"),n(3,km(e),"春分の日"),n(4,29,"昭和の日"),n(5,3,"憲法記念日"),n(5,4,"みどりの日"),n(5,5,"こどもの日"),n(7,Bo(e,7,3),"海の日"),n(8,11,"山の日"),n(9,Bo(e,9,3),"敬老の日"),n(9,bm(e),"秋分の日"),n(10,Bo(e,10,2),"スポーツの日"),n(11,3,"文化の日"),n(11,23,"勤労感謝の日");for(const r of Object.keys(t)){const o=Ie(r),i=new Date(o);i.setDate(i.getDate()+1);const l=new Date(o);l.setDate(l.getDate()+2),t[Dt(l)]&&!t[Dt(i)]&&i.getDay()!==0&&(t[Dt(i)]="国民の休日")}for(const r of Object.keys({...t})){if(Ie(r).getDay()!==0)continue;const o=Ie(r);do o.setDate(o.getDate()+1);while(t[Dt(o)]);t[Dt(o)]="振替休日"}return Ll[e]=t,t}const jm=e=>!!Sm(Number(e.slice(0,4)))[e],_i=e=>{if(jm(e))return"sun";const t=Ie(e).getDay();return t===0?"sun":t===6?"sat":""},qm=e=>"¥"+Math.round(Number(e)||0).toLocaleString("ja-JP"),eg=e=>e.slice(0,7),tg=(e,t)=>{const[n,r]=e.split("-");return(t&&Number(n)===t?"":`${n}年`)+`${Number(r)}月`},Xe=()=>Dt(mf()),Hu=()=>{const e=mf();return e.setDate(e.getDate()-1),Dt(e)},gf=()=>{const e=new Date;return`${e.getHours()}:${Pe(e.getMinutes())}`},xf=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Nm=e=>String(e||"").replace(/[\/\\:*?"<>| -]/g,"_").replace(/\s+/g," ").trim()||"room";async function Wu(e){try{return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.top="0",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}const Re=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36),Cm=e=>Object.keys(e).sort().map(t=>`🩷${Ps(t)}🩷 ${e[t].time}
${e[t].text}`).join(`

──────────

`),Em=e=>{const t={},n=e.split(/\n*─{3,}\n*/);for(const r of n){const o=r.trim();if(!o)continue;const i=o.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*(?:[（(]?(?:[A-Za-z]{3}|[日月火水木金土])[)）]?)?\s*🩷?\s*(\d{1,2}:\d{2})?\s*\n?([\s\S]*)$/u);if(!i)continue;const l=`${i[1]}-${Pe(Number(i[2]))}-${Pe(Number(i[3]))}`,s=i[5].trim();s&&(t[l]={text:s,time:i[4]||"0:00"})}return t},ng=(e,t)=>{const n=[];let r="";for(const o of e)o.dateKey!==r&&(r=o.dateKey,n.length&&n.push(""),n.push(`🩷${xe(r)}🩷`)),n.push(`${o.time?o.time+" ":""}${t(o.memberId)}「${o.text}」`);return n.join(`
`)},rg=e=>{const t=[];let n=Xe(),r=null;const o=()=>{if(!r)return;let i=r.lines.join(`
`).trim();i.endsWith("」")&&(i=i.slice(0,-1)),i&&t.push({dateKey:r.dateKey,name:r.name,time:r.time,text:i}),r=null};for(const i of e.split(`
`)){const l=i.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(l){o(),n=`${l[1]}-${Pe(Number(l[2]))}-${Pe(Number(l[3]))}`;continue}if(r)r.lines.push(i);else{const a=i.match(/^(?:(\d{1,2}:\d{2})\s+)?(.+?)「([\s\S]*)$/u);if(!a)continue;r={dateKey:n,name:a[2].trim(),time:a[1]||"",lines:[a[3]]}}const s=r.lines[r.lines.length-1].trimEnd();s.endsWith("」")&&(r.lines[r.lines.length-1]=s,o())}return o(),t},zm=[{key:"morning",label:"朝",emoji:"🌅"},{key:"noon",label:"昼",emoji:"☀️"},{key:"night",label:"夜",emoji:"🌙"}],og=()=>{const e=new Date().getHours();return e>=5&&e<11?"morning":e>=11&&e<17?"noon":"night"},ig=(e,t)=>{var i;const n=l=>{var s;return((s=t.find(a=>a.id===l))==null?void 0:s.name)||"？"},r={};for(const l of e)(r[i=l.dateKey]||(r[i]={morning:[],noon:[],night:[]}))[l.slot].push(l);const o=[];for(const l of Object.keys(r).sort()){const s=[];for(const a of zm){const c=r[l][a.key];if(!c.length)continue;const m=c.map(x=>n(x.memberId)+(x.memo&&x.memo.trim()?`(${x.memo.trim()})`:"")).join("・");s.push(`${a.emoji}${a.label}:${m}`)}s.length&&o.push(`🩷${xe(l)}🩷 ${s.join(" / ")}`)}return o.join(`
`)},lg=e=>{const t=[],n=r=>r.includes("朝")?"morning":r.includes("昼")?"noon":r.includes("夜")?"night":null;for(const r of e.split(`
`)){const o=r.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(.*)$/u);if(!o)continue;const i=`${o[1]}-${Pe(Number(o[2]))}-${Pe(Number(o[3]))}`,l=o[4];if(l.trim())for(const s of l.split("/")){const a=s.indexOf(":"),c=s.indexOf("："),m=a===-1?c:c===-1?a:Math.min(a,c);if(m===-1)continue;const x=n(s.slice(0,m));if(!x)continue;const f=s.slice(m+1);for(const w of f.split("・")){const b=w.trim().match(/^(.+?)(?:[(（]([\s\S]*)[)）])?$/u);if(!b)continue;const j=b[1].trim();j&&t.push({dateKey:i,slot:x,name:j,memo:(b[2]||"").trim()})}}}return t},sg=e=>{var n;const t={};for(const r of e)(t[n=r.dateKey]||(t[n]={morning:[],noon:[],night:[]}))[r.slot].push(r);return t},ag=(e,t)=>{let n=t;for(const l of e)l.dateKey<n&&(n=l.dateKey);Ie(t);const r=Ie(t);r.setDate(r.getDate()-34);const o=Ie(n)<r?Ie(n):r,i=[];for(let l=new Date(o);Dt(l)<=t;l.setDate(l.getDate()+1))i.push(Dt(l));return i},ug=e=>{const t=[];for(const n of String(e||"").split(`
`)){let r=n.trim();r&&(/^🩷?\s*\d{4}[/-]\d{1,2}[/-]\d{1,2}\s*🩷?\s*$/u.test(r)||(r=r.replace(/^[★☆☐☑✓□■●○・\-*+•‣▪️\s]+/u,"").trim(),r&&t.push(r)))}return t},cg=e=>{const t=[];let n=Xe();for(const r of e.split(`
`)){const o=r.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(o){n=`${o[1]}-${Pe(Number(o[2]))}-${Pe(Number(o[3]))}`;continue}const i=r.match(/^\s*(★\s*)?([☑☐✓])\s+(.+)$/u);if(!i)continue;const l=!!i[1],s=i[2]==="☑"||i[2]==="✓",a=i[3].trim();a&&t.push({dateKey:n,text:a,done:s,important:l})}return t},yf="🩷 できたこと",_m=e=>{const t=(e||"").split(`
`),n=t.indexOf(yf);if(n===-1)return{text:e||"",items:[]};const r=[];let o=n+1;for(;o<t.length&&t[o].startsWith("☑ ");){const s=t[o].match(/^☑ (.*?)(?: \((\d{1,2}:\d{2})\))?$/u);s&&r.push({text:s[1],time:s[2]||""}),o++}let i=n;return i-1>=0&&t[i-1]===""&&(i-=1),t.splice(i,o-i),{text:t.join(`
`).replace(/\n{3,}/g,`

`).replace(/\s+$/,""),items:r}},Di="🎬 今日のコマ: ",Dm=e=>(e||"").split(`
`).filter(t=>!t.startsWith(Di)).join(`
`).replace(/^\n+/,""),Tm=(e,t)=>{const n=Dm(e).trim(),r=Di+t;return n?`${r}

${n}`:r},Lm={morning:"🌅",noon:"☀️",night:"🌙"},Uo="nachumin-diary-backup.json";function Pm(e){if(!e||typeof e!="object"||Array.isArray(e))return"バックアップの形式が読めませんでした 🥺";if(e.app!=="nachumin-diary")return"これは Nachumin Lifelog のバックアップファイルではないみたい 🥺";if(!Array.isArray(e.rooms))return"ルームの情報が入っていません。ファイルが壊れているかも 🥺";if(e.rooms.some(t=>!t||typeof t!="object"||!t.id||!t.type))return"ルームの形式が壊れています 🥺";if(e.data!=null&&(typeof e.data!="object"||Array.isArray(e.data)))return"ルームの中身の形式が壊れています 🥺";for(const t of["doneLogs","habits","habitLogs","habitSeeds"])if(e[t]!=null&&(typeof e[t]!="object"||Array.isArray(e[t])))return`${t} の形式が壊れています 🥺`;return null}function Mm(e){const t={rooms:(e.rooms||[]).length,items:0},n=r=>r==="talk"?"messages":r==="todo"?"todos":r==="darelog"?"records":r==="expense"?"expenses":null;for(const r of e.rooms||[]){const o=e.data?e.data[r.id]:void 0;if(!o)continue;const i=n(r.type);t.items+=i?(o[i]||[]).length:Object.keys(o).length}return t}function Pl(e,t){var i;if(e.type==="talk"){const l=t&&t.messages||[],s=l[l.length-1];return{previewName:s?(c=>{var m;return((m=(e.members||[]).find(x=>x.id===c))==null?void 0:m.name)||""})(s.memberId):"",preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="todo"){const l=t&&t.todos||[],s=l[l.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?`${s.done?"☑":"☐"} ${s.text.split(`
`)[0]}`.slice(0,40):"",todoOpen:l.filter(a=>!a.done&&!a.deferred).length,lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="darelog"){const l=t&&t.records||[],s=l[l.length-1],a=c=>{var m;return((m=(e.members||[]).find(x=>x.id===c))==null?void 0:m.name)||""};return{preview:s?`${Lm[s.slot]||""} ${a(s.memberId)}`.trim():"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="expense"){const l=t&&t.expenses||[],s=l[l.length-1];return{preview:s?`${(c=>{var m;return((m=(e.categories||[]).find(x=>x.id===c))==null?void 0:m.name)||""})(s.categoryId)} ¥${(s.amount||0).toLocaleString("ja-JP")}`:"",lastAt:e.lastAt||(s?Date.now():0)}}const n=t&&typeof t=="object"?t:{},r=Object.keys(n).sort(),o=r[r.length-1];return{preview:typeof((i=n[o])==null?void 0:i.text)=="string"?n[o].text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(o?Date.now():0)}}async function Vu(){const e=await V(Pt)||[],t={};for(const a of e){const c=await V(Le(a.id));c!==void 0&&(t[a.id]=c)}const n=await V(ti)||null,r={},o={},i={},l={};for(const a of e){const c=await V(Cn(a.id));c&&Object.keys(c).length&&(r[a.id]=c);const m=await V(En(a.id));Array.isArray(m)&&m.length&&(o[a.id]=m);const x=await V(Ei(a.id));x&&Object.keys(x).length&&(i[a.id]=x),await V(zi(a.id))&&(l[a.id]=!0)}const s=await V(lo)||null;return{app:"nachumin-diary",version:1,exportedAt:new Date().toISOString(),rooms:e,data:t,declaration:n,doneLogs:r,habits:o,habitLogs:i,habitSeeds:l,marks:s}}const Om=e=>e.map((t,n)=>[t,n]).sort((t,n)=>t[0].dateKey<n[0].dateKey?-1:t[0].dateKey>n[0].dateKey?1:t[1]-n[1]).map(([t])=>t);async function Rm(e){var s;if(!e||e.app!=="nachumin-diary"||!Array.isArray(e.rooms))throw new Error("invalid-backup");const t=await V(Pt)||[],n=new Map(t.map(a=>[a.id,{...a}]));let r=0,o=0;for(const a of e.rooms){const c=e.data?e.data[a.id]:void 0,m=a.type==="talk"?"messages":a.type==="todo"?"todos":a.type==="darelog"?"records":a.type==="expense"?"expenses":null,x=w=>m==="messages"?`${w.dateKey} ${w.memberId} ${w.text}`:m==="todos"?`${w.dateKey} ${w.text}`:m==="records"?`${w.dateKey} ${w.slot} ${w.memberId}`:w.id;if(!n.has(a.id)){c!==void 0&&await Q(Le(a.id),c),n.set(a.id,{...a,...Pl(a,c)}),r+=1,m?o+=((s=c==null?void 0:c[m])==null?void 0:s.length)||0:o+=c?Object.keys(c).length:0;continue}const f=n.get(a.id);if(m){const b=(await V(Le(a.id))||{})[m]||[],j=new Set(b.map(x));let P=b.slice();for(const h of(c==null?void 0:c[m])||[])j.has(x(h))||(j.add(x(h)),P.push(h),o+=1);m==="messages"&&(P=Om(P));const g={[m]:P};await Q(Le(a.id),g);let p={...f};if(a.type==="talk"||a.type==="darelog"){const h=f.members||[],k=new Set(h.map(N=>N.id));p.members=h.concat((a.members||[]).filter(N=>!k.has(N.id)))}n.set(a.id,{...p,...Pl(p,g)})}else{const b={...await V(Le(a.id))||{}};for(const j of Object.keys(c||{}))b[j]||(b[j]=c[j],o+=1);await Q(Le(a.id),b),n.set(a.id,{...f,...Pl(f,b)})}}if(e.doneLogs)for(const[a,c]of Object.entries(e.doneLogs)){const m=Cn(a),f={...await V(m)||{}};for(const[w,b]of Object.entries(c)){const j=(f[w]||[]).slice();for(const P of b)j.some(g=>g.text===P.text&&g.time===P.time)||j.push(P);f[w]=j}await Q(m,f)}const i={};if(e.habits)for(const[a,c]of Object.entries(e.habits)){if(!Array.isArray(c))continue;const m=await V(En(a));if(m===void 0){await Q(En(a),c);continue}const x=Array.isArray(m)?m:[],f=new Set(x.map(P=>P.id)),w=new Map(x.filter(P=>(P.name||"").trim()).map(P=>[P.name.trim(),P.id])),b=x.slice(),j={};for(const P of c){if(!P||!P.id)continue;if(f.has(P.id)){j[P.id]=P.id;continue}const g=(P.name||"").trim(),p=g?w.get(g):null;if(p){j[P.id]=p;continue}b.push(P),f.add(P.id),g&&w.set(g,P.id),j[P.id]=P.id}b.length!==x.length&&await Q(En(a),b),i[a]=j}if(e.habitSeeds)for(const a of Object.keys(e.habitSeeds))e.habitSeeds[a]&&await Q(zi(a),!0);if(e.habitLogs)for(const[a,c]of Object.entries(e.habitLogs)){const m=i[a]||{},x=Ei(a),w={...await V(x)||{}};for(const[b,j]of Object.entries(c)){const P=(j||[]).map(g=>m[g]||g);w[b]=[...new Set([...w[b]||[],...P])]}await Q(x,w)}if(Array.isArray(e.marks)&&e.marks.length){const a=await V(lo);(!Array.isArray(a)||!a.length)&&await Q(lo,e.marks)}const l=[...n.values()];return await Q(Pt,l),{addedRooms:r,addedItems:o,rooms:l}}const xn="M12 20.5s-7.5-5-7.5-10a4.2 4.2 0 0 1 7.5-2.6A4.2 4.2 0 0 1 19.5 10.5c0 5-7.5 10-7.5 10z",$m=`<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>
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
<path d='${xn}' transform='translate(96 60) scale(1.6)'/>
<path d='${xn}' transform='translate(24 96) scale(0.9) rotate(-12 12 12)'/>
<path d='${xn}' transform='translate(190 60) scale(0.8) rotate(14 12 12)'/>
<path d='${xn}' transform='translate(130 150) scale(1.1) rotate(-8 12 12)'/>
<path d='${xn}' transform='translate(30 208) scale(0.8) rotate(10 12 12)'/>
</g>
<g fill='#f8b1d6'>
<path d='${xn}' transform='translate(100 64) scale(1.1) '/>
<path d='${xn}' transform='translate(133 153) scale(0.7)'/>
</g>
</svg>`,Ml=`url("data:image/svg+xml,${encodeURIComponent($m)}")`,dg=["#ffffff","#fff5fa","#ffd9ec","#ffc4e1","#ff9fd0","#e0629f","#d4f0ff","#c9f5f2","#d9ffe3","#e8dcff","#f0f0f0","#2b2430"],fg=["#9C27B0","#E91E63","#FFEB3B","#2196F3","#4CAF50","#FF9800","#F44336","#00BCD4","#3F51B5","#8BC34A","#FF4081","#009688"],vf=["#ff6fb2","#c58cff","#6fb8ff","#5fd6b0","#ffcf5f","#ff9d6f","#7ed957","#ff8fa8"],Pr=vf[0],Qu=e=>{const t=e||Pr;return{background:`linear-gradient(163deg, #ffffff 0%, #fff6fb 40%, ${t}2e 100%)`,boxShadow:`0 6px 13px ${t}42, 0 2px 0 ${t}66, inset 0 1.5px 0 #ffffff`,borderColor:`${t}55`}},pg=[{key:"auto",label:"自動",value:null},{key:"white",label:"白",value:"#ffffff"},{key:"black",label:"黒",value:"#222028"},{key:"pink",label:"ピンク",value:"#ff2d87"}],Im=e=>{const t=String(e).replace("#","");if(t.length<6)return"#4a3140";const n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),o=parseInt(t.slice(4,6),16);return .299*n+.587*r+.114*o<140?"#fff5fa":"#4a3140"},hg=e=>e&&e.textColor?e.textColor:Im(e&&e.color),Yu=`
  * { box-sizing: border-box; }
  .app {
    height: 100vh; height: 100dvh;
    display: flex; flex-direction: column;
    font-family: "Hiragino Maru Gothic ProN", "Hiragino Kaku Gothic ProN",
      "Yu Gothic", sans-serif;
    background: ${Ml} #f6bedd; background-size: 240px 240px;
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
  .todo-text { white-space: pre-wrap; font-size: 14.5px; line-height: 1.6; }
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
    background: ${Ml} #f6bedd; background-size: 240px 240px;
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
    background: ${Ml} #f6bedd; background-size: 240px 240px;
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
`;function wf(e,t,n){if(!e)return;const r=e.selectionStart??e.value.length,o=e.selectionEnd??e.value.length,i=e.value.slice(0,r)+t+e.value.slice(o);n(i),requestAnimationFrame(()=>{try{e.focus();const l=r+t.length;e.setSelectionRange(l,l)}catch{}})}function kf({marks:e,onInsert:t,onEdit:n}){return u.jsxs("div",{className:"markbar",children:[e.map((r,o)=>u.jsx("button",{className:"markchip",onMouseDown:i=>i.preventDefault(),onClick:()=>t(r),children:r},o)),u.jsx("button",{className:"markchip mark-edit",onMouseDown:r=>r.preventDefault(),onClick:n,"aria-label":"マークを編集",children:"⚙︎"})]})}function bf(e=!0){const[t,n]=z.useState(0);return z.useEffect(()=>{if(!e||!window.visualViewport){n(0);return}const r=window.visualViewport,o=()=>n(Math.max(0,window.innerHeight-r.height-r.offsetTop));return o(),r.addEventListener("resize",o),r.addEventListener("scroll",o),()=>{r.removeEventListener("resize",o),r.removeEventListener("scroll",o)}},[e]),t}function Am({initial:e,appendNewline:t,marks:n,onEditMarks:r,onSave:o,onCancel:i,onDelete:l,placeholder:s,bottomToolbar:a}){const[c,m]=z.useState(t?e?e+`
`:"":e||""),x=bf(!!a),f=z.useRef(null),w=()=>{const g=f.current;g&&(g.style.height="auto",g.style.height=Math.min(g.scrollHeight,Math.round(window.innerHeight*.42))+"px")};z.useEffect(()=>{const g=f.current;if(!g)return;g.focus(),w();const p=g.value.length;g.setSelectionRange(p,p),g.scrollTop=g.scrollHeight},[]);const b=g=>wf(f.current,g+" ",p=>{m(p),requestAnimationFrame(w)}),j=n?u.jsx(kf,{marks:n,onInsert:b,onEdit:r}):null,P=u.jsxs("div",{className:"inline-btns",children:[l&&u.jsx("button",{className:"ie-del",onClick:l,children:"削除"}),u.jsx("button",{className:"ie-cancel",onClick:i,children:"キャンセル"}),u.jsx("button",{className:"ie-save",onClick:()=>o(c),"aria-label":"保存",children:"💌"})]});return u.jsxs("div",{className:"inline-edit",onClick:g=>g.stopPropagation(),children:[!a&&j,u.jsx("textarea",{ref:f,className:"inline-ta",value:c,placeholder:s,onChange:g=>{m(g.target.value),w()}}),a?u.jsxs("div",{className:"edit-toolbar",style:{bottom:x},onClick:g=>g.stopPropagation(),children:[j,P]}):P]})}function Fm(e,t=500){const n=z.useRef({}),r=l=>{if(typeof e!="function"||l.touches&&l.touches.length!==1)return;const s=l.touches?l.touches[0]:l;n.current.x=s.clientX,n.current.y=s.clientY,n.current.fired=!1,clearTimeout(n.current.timer),n.current.timer=setTimeout(()=>{n.current.fired=!0;try{navigator.vibrate&&navigator.vibrate(15)}catch{}e({x:n.current.x,y:n.current.y})},t)},o=l=>{const s=l.touches?l.touches[0]:l;(Math.abs(s.clientX-n.current.x)>10||Math.abs(s.clientY-n.current.y)>10)&&clearTimeout(n.current.timer)},i=()=>clearTimeout(n.current.timer);return{onTouchStart:r,onTouchMove:o,onTouchEnd:i,onTouchCancel:i,onContextMenu:l=>{typeof e=="function"&&(l.preventDefault(),e({x:l.clientX,y:l.clientY}))},onClickCapture:l=>{n.current.fired&&(l.stopPropagation(),l.preventDefault(),n.current.fired=!1)}}}function Xu({onLongPress:e,longPressMs:t,children:n,...r}){const o=Fm(e,t);return u.jsx("div",{...r,...o,children:n})}function Bm({x:e,y:t,onCopy:n,onEdit:r,onDelete:o,onClose:i,top:l,extra:s}){const m=z.useRef(null),[x,f]=z.useState(null);return z.useLayoutEffect(()=>{const w=m.current;if(!w)return;const b=w.offsetHeight,j=window.innerWidth,P=window.innerHeight,g=Math.max(8,Math.min(e-168/2,j-168-8));let p=t+8;p+b>P-8&&(p=t-8-b),p<8&&(p=Math.max(8,P-b-8)),f({left:g,top:p})},[e,t,l,s,r,o]),u.jsx("div",{className:"ctx-overlay",onClick:i,onContextMenu:w=>w.preventDefault(),children:u.jsxs("div",{ref:m,className:"ctx-menu",style:{left:x?x.left:Math.max(8,Math.min(e-168/2,window.innerWidth-168-8)),top:x?x.top:t+8,width:168,maxHeight:`calc(100vh - ${8*2}px)`,overflowY:"auto",visibility:x?"visible":"hidden"},onClick:w=>w.stopPropagation(),children:[(l||[]).map((w,b)=>u.jsx("button",{className:"ctx-item ctx-top",onClick:w.onClick,children:w.label},b)),u.jsx("button",{className:"ctx-item",onClick:n,children:"📋 コピー"}),r&&u.jsx("button",{className:"ctx-item",onClick:r,children:"✏️ 編集"}),(s||[]).map((w,b)=>u.jsx("button",{className:"ctx-item",onClick:w.onClick,children:w.label},b)),o&&u.jsx("button",{className:"ctx-item ctx-del",onClick:o,children:"🗑 削除"})]})})}function Sf({message:e,confirmLabel:t="削除する",onConfirm:n,onCancel:r}){return u.jsx("div",{className:"overlay confirm-over",onClick:r,children:u.jsxs("div",{className:"panel confirm-panel",onClick:o=>o.stopPropagation(),children:[u.jsx("div",{className:"confirm-msg",children:e}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-close",onClick:r,children:"キャンセル"}),u.jsx("button",{className:"p-del arm",onClick:n,children:t})]})]})})}function Um({habits:e,habitAch:t,onToggle:n,onClose:r,onManage:o}){const i=Xe(),[l,s]=z.useState(i.slice(0,7)),[a,c]=l.split("-").map(Number),m=new Date(a,c,0).getDate(),x=i.slice(0,7),f=z.useMemo(()=>{const h=[];for(let k=1;k<=m;k++){const N=`${a}-${Pe(c)}-${Pe(k)}`;h.push({d:k,key:N,dow:new Date(a,c-1,k).getDay(),isToday:N===i,future:N>i})}return h},[a,c,m,i]),w=h=>{const k=new Date(a,c-1+h,1);s(`${k.getFullYear()}-${Pe(k.getMonth()+1)}`)},b=(h,k)=>h.freq==="weekly"?(h.days||[]).includes(k):!0,j=h=>{let k=0,N=0;for(const D of f)b(h,D.dow)&&(D.future||(N+=1),(t[D.key]||[]).includes(h.id)&&(k+=1));return{done:k,total:N}},P=e.filter(h=>h.freq!=="weekly"),g=e.filter(h=>h.freq==="weekly"),p=h=>{const{done:k,total:N}=j(h),D=N?k/N:0,M=k===0?0:D>=.8?3:D>=.5?2:D>=.25?1:0;return u.jsxs("div",{className:"hv-row",children:[u.jsxs("div",{className:"hv-name",children:[u.jsx("span",{className:"hv-emoji",children:h.emoji||"🩷"}),u.jsx("span",{className:"hv-nm",children:h.name})]}),u.jsx("div",{className:"hv-cells",children:f.map(L=>{const F=b(h,L.dow),I=(t[L.key]||[]).includes(h.id);return u.jsx("button",{className:"hv-cell"+(I?" on":"")+(F?"":" off")+(L.isToday?" today":"")+(L.future?" future":""),disabled:!F||L.future,"aria-label":`${c}月${L.d}日 ${h.name}${I?" 達成ずみ":""}`,"aria-pressed":I,onClick:()=>n(L.key,h.id),children:I?"♥":""},L.key)})}),u.jsxs("div",{className:"hv-count lv"+M,children:[u.jsx("span",{className:"hv-n",children:k}),u.jsxs("span",{className:"hv-d",children:["/",N]})]})]},h.id)};return u.jsxs("div",{className:"hv-screen",children:[u.jsxs("div",{className:"hd",children:[u.jsx("button",{className:"back-btn","aria-label":"とじる",onClick:r,children:"‹"}),u.jsxs("div",{style:{minWidth:0},children:[u.jsx("div",{className:"hd-title",children:"🎯 習慣ビュー"}),u.jsx("div",{className:"hd-sub",children:"スタンプで振り返る"})]}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"習慣を編集",onClick:o,children:"⚙︎"})]}),u.jsxs("div",{className:"hv-monthbar",children:[u.jsx("button",{className:"hv-mbtn","aria-label":"前の月",onClick:()=>w(-1),children:"‹"}),u.jsxs("div",{className:"hv-month",children:[a,"年",c,"月"]}),u.jsx("button",{className:"hv-mbtn","aria-label":"次の月",onClick:()=>w(1),children:"›"}),l!==x&&u.jsx("button",{className:"hv-now",onClick:()=>s(x),children:"今月"})]}),e.length===0?u.jsxs("div",{className:"empty",children:["まだ習慣がありません。",`
`,"右上の⚙︎から追加してね💗"]}):u.jsx("div",{className:"hv-scroll",children:u.jsxs("div",{className:"hv-table",children:[u.jsxs("div",{className:"hv-row hv-head",children:[u.jsx("div",{className:"hv-name hv-corner",children:"習慣"}),u.jsx("div",{className:"hv-cells",children:f.map(h=>u.jsxs("div",{className:"hv-dcell"+(h.isToday?" today":"")+(_i(h.key)?" "+_i(h.key):""),children:[u.jsx("span",{className:"hv-dnum",children:h.d}),u.jsx("span",{className:"hv-dow",children:wm[h.dow]})]},h.key))}),u.jsx("div",{className:"hv-count hv-corner",children:"今月"})]}),P.map(p),g.length>0&&u.jsx("div",{className:"hv-seprow",children:u.jsx("span",{className:"hv-seplabel",children:"毎週の習慣"})}),g.map(p)]})})]})}const zr="🎬",Km=[1,2,3,4,5,6,0];function Hm({room:e,onBack:t,onMeta:n,initialQuery:r,showToast:o,pinned:i,syncSignal:l,marks:s,onEditMarks:a}){const[c,m]=z.useState({}),[x,f]=z.useState({}),[w,b]=z.useState([]),[j,P]=z.useState({}),[g,p]=z.useState(!1),[h,k]=z.useState(null),[N,D]=z.useState(Xe()),[M,L]=z.useState(""),[F,I]=z.useState(!!r),[W,fe]=z.useState(r||""),[he,we]=z.useState(!1),[Ft,tt]=z.useState(!1),[Ue,R]=z.useState(""),[B,K]=z.useState(!1),[G,ie]=z.useState(!1),[me,ke]=z.useState(null),[be,Z]=z.useState(null),[xt,Bt]=z.useState(!1),[ho,yt]=z.useState(120),ze=z.useRef(null),cn=z.useRef(null),dn=z.useRef(null),Ut=z.useRef(null),mo=bf(!h);z.useEffect(()=>{(async()=>{try{let d=await V(Le(e.id));d=typeof d=="string"?JSON.parse(d):d||{};const v=await V(Cn(e.id))||{};let S=!1;const T={},C={...v};for(const[ee,A]of Object.entries(d))if(A&&typeof A.text=="string"&&A.text.includes(yf)){const{text:ut,items:Rn}=_m(A.text);if(T[ee]={...A,text:ut},Rn.length){const Oe=(C[ee]||[]).slice();for(const nl of Rn)Oe.some(za=>za.text===nl.text&&za.time===nl.time)||Oe.push(nl);C[ee]=Oe}S=!0}else T[ee]=A;S&&(await Q(Le(e.id),T),await Q(Cn(e.id),C)),m(T),f(C);let O=await V(En(e.id));const U=O===void 0;U&&(O=[{id:Re(),name:"note投稿",emoji:"📝"},{id:Re(),name:"キャラ投稿",emoji:"🎨"}]);let J=U;O=O.map(ee=>ee.freq&&ee.days?ee:(J=!0,{...ee,freq:ee.freq||"daily",days:ee.days||[]})),await V(zi(e.id))||(await Q(zi(e.id),!0),O.some(ee=>ee.name==="週報を書く")||(O=[...O,{id:Re(),name:"週報を書く",emoji:"📋",freq:"weekly",days:[0]}],J=!0)),J&&await Q(En(e.id),O),b(Array.isArray(O)?O:[]),P(await V(Ei(e.id))||{})}catch{}finally{p(!0)}})()},[e.id]),z.useEffect(()=>{l&&(async()=>{const d=await V(Le(e.id));d&&m(typeof d=="string"?JSON.parse(d):d),f(await V(Cn(e.id))||{})})()},[l]),z.useEffect(()=>{if(!Ut.current||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>Ut.current&&yt(Ut.current.offsetHeight));return d.observe(Ut.current),()=>d.disconnect()},[h,F]);const fn=async d=>{m(d);try{await Q(Le(e.id),d);const v=Object.keys(d).sort(),S=v[v.length-1];n({preview:S?d[S].text.split(`
`)[0].slice(0,40):"",lastAt:Date.now()})}catch{o("保存に失敗しました。ストレージを確認してね")}};z.useEffect(()=>{!W&&!h&&ze.current&&(ze.current.scrollTop=ze.current.scrollHeight)},[g,W,h]),z.useEffect(()=>{var v;if(!h)return;const d=(v=ze.current)==null?void 0:v.querySelector(".editing-now");d&&setTimeout(()=>d.scrollIntoView({block:"start",behavior:"smooth"}),60)},[h]);const q=()=>{const d=M.trim();if(!d)return;const v=c[N];fn({...c,[N]:v?{...v,text:v.text+`

`+d}:{text:d,time:gf()}}),L(""),cn.current&&(cn.current.style.height="auto"),setTimeout(()=>{var T;const S=(T=ze.current)==null?void 0:T.querySelector(`[data-date="${N}"]`);S?S.scrollIntoView({block:"end",behavior:"smooth"}):ze.current&&(ze.current.scrollTop=ze.current.scrollHeight)},50)},go=d=>{L(d.target.value);const v=d.target;v.style.height="auto",v.style.height=Math.min(v.scrollHeight,140)+"px"},Yi=d=>wf(cn.current,d+" ",v=>{L(v),requestAnimationFrame(()=>{const S=cn.current;S&&(S.style.height="auto",S.style.height=Math.min(S.scrollHeight,140)+"px")})}),fr=d=>{k(d),fe(""),I(!1)},pr=(d,v)=>{const S=v.trim();if(!S){k(null);return}fn({...c,[d]:{...c[d],text:S}}),k(null)},vt=d=>{const v={...c};delete v[d],fn(v),k(null)},[hr,pn]=z.useState(null),mr=d=>pn({message:`🩷${xe(d)}🩷 の日記を削除しますか？`,onConfirm:()=>{vt(d),pn(null)}}),gr=(d,v)=>{const S=j[d]||[],T=S.includes(v)?S.filter(O=>O!==v):[...S,v],C={...j};T.length?C[d]=T:delete C[d],P(C),Q(Ei(e.id),C).catch(()=>o("保存に失敗しました"))},hn=d=>{b(d),Q(En(e.id),d).catch(()=>o("保存に失敗しました"))},On=()=>hn([...w,{id:Re(),name:"",emoji:"🩷",freq:"daily",days:[]}]),Ct=(d,v)=>hn(w.map(S=>S.id===d?{...S,...v}:S)),xo=(d,v)=>{if(v==="weekly"){const S=w.find(T=>T.id===d);Ct(d,{freq:v,days:S&&S.days&&S.days.length?S.days:[Ie(Xe()).getDay()]})}else Ct(d,{freq:"daily"})},Xi=(d,v)=>{const S=w.find(C=>C.id===d),T=(S.days||[]).includes(v)?S.days.filter(C=>C!==v):[...S.days||[],v];Ct(d,{days:T})},yo=(d,v)=>{const S=d+v;if(S<0||S>=w.length)return;const T=[...w];[T[d],T[S]]=[T[S],T[d]],hn(T)},Gi=d=>{const v=w.find(T=>T.id===d),S=Object.values(j).filter(T=>(T||[]).includes(d)).length;pn({message:`習慣「${((v==null?void 0:v.emoji)||"")+((v==null?void 0:v.name)||"")}」を削除しますか？`+(S?`
これまでの達成 ${S}日分 の記録も消えます。`:""),onConfirm:()=>{hn(w.filter(T=>T.id!==d)),pn(null)}})},vo=()=>{const d=w.filter(v=>v.name.trim()||v.emoji&&v.emoji.trim());d.length!==w.length&&hn(d),K(!1)},xr=()=>Cm(c),Ji=async()=>{try{await navigator.clipboard.writeText(xr()),Bt(!0)}catch{try{dn.current.focus(),dn.current.select(),document.execCommand("copy"),Bt(!0)}catch{o("コピーできませんでした。全選択して手動でコピーしてね")}}setTimeout(()=>Bt(!1),2e3)},yr=()=>{try{const d=new Blob([xr()],{type:"text/plain;charset=utf-8"}),v=URL.createObjectURL(d),S=document.createElement("a");S.href=v,S.download=`nachumin-diary-${Nm(e.name)}.txt`,document.body.appendChild(S),S.click(),S.remove(),setTimeout(()=>URL.revokeObjectURL(v),3e3)}catch{o("ダウンロードできない環境みたい。コピーを使ってね")}},wo=()=>{const d=Em(Ue),v=Object.keys(d);if(v.length===0){o("読み込める日記が見つかりませんでした 🥺");return}let S=0,T=0;const C={...c};for(const O of v)C[O]?T+=1:(C[O]=d[O],S+=1);fn(C),tt(!1),R(""),o(`${S}件の日記を復元したよ💗`+(T?`（${T}件はもうあるのでスキップ）`:""))},mn=d=>W?d.split(new RegExp(`(${xf(W)})`,"gi")).map((S,T)=>S.toLowerCase()===W.toLowerCase()?u.jsx("mark",{className:"hl",children:S},T):S):d,ko=d=>{if(!d)return d;const v=[],S=/https?:\/\/[^\s　-〿぀-ヿ一-鿿＀-￯]+/g;let T=0,C=0,O;for(;O=S.exec(d);){let U=O[0];const J=(U.match(/[.,;:、。）)\]】」』"'！？!?]+$/)||[""])[0];J&&(U=U.slice(0,U.length-J.length)),U&&(O.index>T&&v.push(u.jsx(z.Fragment,{children:mn(d.slice(T,O.index))},C++)),v.push(u.jsx("a",{className:"body-link",href:U,target:"_blank",rel:"noopener noreferrer",onClick:ne=>ne.stopPropagation(),children:U},C++)),T=O.index+U.length)}return v.length?(T<d.length&&v.push(u.jsx(z.Fragment,{children:mn(d.slice(T))},C++)),v):mn(d)},at=z.useMemo(()=>{var O;const d=(s||[]).filter(Boolean),v=[...d,zr],S=[...d].sort((U,J)=>J.length-U.length),T={},C={};for(const U of v)T[U]=0,C[U]=[];for(const U of Object.keys(c).sort().reverse()){const J=(((O=c[U])==null?void 0:O.text)||"").split(`
`).reverse();for(const ne of J){if(!ne.trim())continue;const ee=ne.trim();if(ee.startsWith(Di)){const Oe=ee.slice(Di.length).trim();Oe&&(C[zr].push({dateKey:U,text:Oe}),T[zr]+=1);continue}let A=ne.trim();const ut=[];let Rn=!0;for(;Rn;){Rn=!1;for(const Oe of S)if(A.startsWith(Oe)){ut.includes(Oe)||ut.push(Oe),A=A.slice(Oe.length).trimStart(),Rn=!0;break}}if(!(!ut.length||!A))for(const Oe of ut)C[Oe]&&(C[Oe].push({dateKey:U,text:A}),T[Oe]+=1)}}return{counts:T,byMark:C}},[c,s]),wt=[...(s||[]).filter(Boolean),zr],vr=()=>{Z(wt.find(d=>at.counts[d]>0)||wt[0]||null)},Zi=d=>{Z(null),fe(""),I(!1),setTimeout(()=>{var S;const v=(S=ze.current)==null?void 0:S.querySelector(`[data-date="${d}"]`);v&&v.scrollIntoView({block:"center",behavior:"smooth"})},90)},qi=async()=>{const d=at.byMark[be]||[];if(!d.length)return;const v=[];let S="";for(const C of d)C.dateKey!==S&&(S=C.dateKey,v.length&&v.push(""),v.push(`🩷${Ps(S)}🩷`)),v.push(C.text);const T=await Wu(v.join(`
`));o(T?"コピーしました🩷":"コピーできませんでした。手動でコピーしてね")},el=d=>{const v=["🩷 できたこと"];for(const C of x[d]||[])v.push(`☑ ${C.text}${C.time?` (${C.time})`:""}`);const S=j[d]||[],T=w.filter(C=>S.includes(C.id)).map(C=>`${C.emoji||""}${C.name}`);return T.length&&v.push("習慣: "+T.join(" ")),v.join(`
`)},tl=async d=>{const v=await Wu(d);o(v?"コピーしました🩷":"コピーできませんでした。手動でコピーしてね"),ke(null)},bo=W.toLowerCase(),gn=Xe(),So=new Set([...Object.keys(c),...Object.keys(x),...Object.keys(j)]);w.length&&So.add(gn);let Et=[...So].sort();W&&(Et=Et.filter(d=>{const v=c[d]&&(c[d].text+xe(d)).toLowerCase().includes(bo),S=(x[d]||[]).some(T=>T.text.toLowerCase().includes(bo));return v||S}));const y=xe(N).slice(5),E=(d,v)=>u.jsx("button",{className:"chip"+(N===v?" chip-on":""),onClick:()=>D(v),children:d},d);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"hd",children:[u.jsx("button",{className:"back-btn","aria-label":"もどる",onClick:t,children:"‹"}),u.jsx("span",{style:{fontSize:20},children:e.emoji}),u.jsxs("div",{children:[u.jsx("div",{className:"hd-title",children:e.name}),u.jsx("div",{className:"hd-sub",children:"Nachumin Lifelog"})]}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"マークで集める",onClick:vr,children:"🔖"}),u.jsx("button",{className:"icon-btn","aria-label":"習慣",onClick:()=>K(!0),children:"🎯"}),u.jsx("button",{className:"icon-btn","aria-label":"テキスト書き出し",onClick:()=>we(!0),children:"📤"}),u.jsx("button",{className:"icon-btn","aria-label":"テキストから復元",onClick:()=>tt(!0),children:"📥"}),u.jsx("button",{className:"icon-btn","aria-label":"検索",onClick:()=>{I(!F),fe("")},children:F?"✕":"🔍"})]}),i,F&&u.jsx("div",{className:"search-row",children:u.jsx("input",{autoFocus:!0,placeholder:"日記を検索（ことば・日付）",value:W,onChange:d=>fe(d.target.value)})}),u.jsxs("div",{className:"chat",ref:ze,style:{paddingBottom:h?210:ho+12},children:[g&&Et.length===0&&u.jsx("div",{className:"empty",children:W?"みつかりませんでした 🥺":`まだ日記がありません。
下から今日のことを書いてみよう💗`}),Et.map(d=>{const v=h===d,S=!!c[d],T=x[d]||[],C=d===gn,O=j[d]||[],U=Ie(d).getDay(),J=w.filter(A=>A.freq==="weekly"?(A.days||[]).includes(U):!0),ne=J.length>0&&(C||S||O.length>0),ee=T.length>0||ne;return u.jsxs(z.Fragment,{children:[S&&u.jsxs("div",{className:"row","data-date":d,children:[u.jsx("div",{className:"time",children:c[d].time}),u.jsxs(Xu,{className:"bubble"+(v?" editing-now":""),onClick:v?void 0:()=>fr(d),onLongPress:v?void 0:A=>ke({type:"diary",k:d,x:A.x,y:A.y}),role:"button",tabIndex:0,onKeyDown:A=>!v&&A.key==="Enter"&&fr(d),children:[u.jsx("span",{className:"spark",children:"✨"}),u.jsxs("div",{className:"d-head",children:["🩷",u.jsxs("span",{className:"lnk"+(_i(d)?" wd-"+_i(d):""),children:[xe(d)," ",Ls[Ie(d).getDay()]]}),"🩷"]}),v?u.jsx(Am,{initial:c[d].text,appendNewline:!0,marks:s,onEditMarks:a,bottomToolbar:!0,onSave:A=>pr(d,A),onCancel:()=>k(null),onDelete:()=>mr(d),placeholder:"内容を書きなおしてね"}):u.jsx("div",{className:"body",children:ko(c[d].text)})]})]}),ee&&u.jsx("div",{className:"done-row",style:S?void 0:{marginTop:0},children:u.jsxs(Xu,{className:"done-bubble",onLongPress:A=>ke({type:"done",k:d,x:A.x,y:A.y}),children:[u.jsxs("div",{className:"done-head",children:[u.jsx("span",{children:"🩷 できたこと"}),ne&&u.jsx("button",{className:"hv-open","aria-label":"習慣ビューをひらく",onClick:A=>{A.stopPropagation(),ie(!0)},children:"🎯 習慣ビュー"})]}),T.map((A,ut)=>u.jsxs("div",{className:"done-line",children:["☑ ",ko(A.text),A.time?u.jsxs("span",{className:"done-time",children:[" (",A.time,")"]}):null]},ut)),ne&&u.jsx("div",{className:"habits-row"+(T.length?" has-sep":""),children:J.map(A=>{const ut=O.includes(A.id);return u.jsxs("button",{className:"habit-chip"+(ut?" on":""),onClick:()=>gr(d,A.id),children:[A.emoji?A.emoji+" ":"",A.name,ut?" 🩷":""]},A.id)})})]})})]},d)})]}),!h&&u.jsxs("div",{className:"bar bar-fixed",ref:Ut,style:{bottom:mo},children:[u.jsxs("div",{className:"chips",children:[E("今日",gn),E("昨日",Hu()),u.jsxs("button",{className:"chip chip-date",children:["📅 ",N===gn||N===Hu()?"日付をえらぶ":y,u.jsx("input",{type:"date",value:N,onChange:d=>d.target.value&&D(d.target.value)})]}),c[N]&&u.jsx("span",{className:"exists-note",children:"この日はもうあるので追記されます"})]}),s&&s.length>0&&u.jsx(kf,{marks:s,onInsert:Yi,onEdit:a}),u.jsxs("div",{className:"in-row",children:[u.jsx("textarea",{ref:cn,className:"ta",rows:1,placeholder:N===gn?"今日あったことを書く…":`${y} に追記…`,value:M,onChange:go}),u.jsx("button",{className:"send","aria-label":"送信",disabled:!M.trim(),onClick:q,children:"↑"})]})]}),me&&u.jsx(Bm,{x:me.x,y:me.y,onClose:()=>ke(null),onCopy:()=>{var d;return tl(`🩷${Ps(me.k)}🩷
`+(me.type==="diary"?((d=c[me.k])==null?void 0:d.text)||"":el(me.k)))},onEdit:me.type==="diary"?()=>{ke(null),fr(me.k)}:void 0,onDelete:me.type==="diary"?()=>{ke(null),mr(me.k)}:void 0}),hr&&u.jsx(Sf,{message:hr.message,onConfirm:hr.onConfirm,onCancel:()=>pn(null)}),be!==null&&u.jsxs("div",{className:"mv-screen",children:[u.jsxs("div",{className:"hd",children:[u.jsx("button",{className:"back-btn","aria-label":"とじる",onClick:()=>Z(null),children:"‹"}),u.jsxs("div",{style:{minWidth:0},children:[u.jsx("div",{className:"hd-title",children:"🔖 マークで集める"}),u.jsxs("div",{className:"hd-sub",children:[(at.byMark[be]||[]).length,"件 ・ 全期間"]})]}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"ぜんぶコピー",onClick:qi,children:"📋"})]}),u.jsx("div",{className:"mv-marks",children:wt.map(d=>u.jsxs("button",{className:"mv-chip"+(be===d?" on":""),onClick:()=>Z(d),children:[u.jsx("span",{className:"mv-chip-m",children:d}),u.jsx("span",{className:"mv-chip-n",children:at.counts[d]||0})]},d))}),u.jsx("div",{className:"mv-list",children:(at.byMark[be]||[]).length===0?u.jsx("div",{className:"empty",children:be===zr?`今日のコマはまだありません。
上のピンク留めバーから書くと集まります💗`:`「${be||""}」が行頭に付いた行はまだありません。
日記の入力欄でマークを押して書くと集まります💗`}):(at.byMark[be]||[]).map((d,v)=>u.jsxs("button",{className:"mv-row",onClick:()=>Zi(d.dateKey),children:[u.jsx("span",{className:"mv-date",children:xe(d.dateKey).slice(5)}),u.jsx("span",{className:"mv-text",children:d.text})]},v))})]}),G&&u.jsx(Um,{habits:w,habitAch:j,onToggle:gr,onClose:()=>ie(!1),onManage:()=>K(!0)}),B&&u.jsx("div",{className:"overlay habit-over",onClick:vo,children:u.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[u.jsx("h3",{children:"🎯 習慣"}),u.jsx("p",{className:"panel-note",children:"毎日くり返すこと。日記の「できたこと」からワンタップで記録できます。"}),w.map((d,v)=>u.jsxs("div",{className:"mem-row",style:{flexWrap:"wrap"},children:[u.jsx("input",{className:"f-input",style:{width:54,textAlign:"center",flex:"0 0 auto"},maxLength:4,placeholder:"🩷",value:d.emoji||"",onChange:S=>Ct(d.id,{emoji:S.target.value})}),u.jsx("input",{className:"f-input",style:{flex:1,minWidth:0},placeholder:"習慣の名前",value:d.name,onChange:S=>Ct(d.id,{name:S.target.value})}),u.jsx("button",{className:"mem-btn",disabled:v===0,onClick:()=>yo(v,-1),"aria-label":"上へ",children:"↑"}),u.jsx("button",{className:"mem-btn",disabled:v===w.length-1,onClick:()=>yo(v,1),"aria-label":"下へ",children:"↓"}),u.jsx("button",{className:"mem-btn",onClick:()=>Gi(d.id),"aria-label":"削除",children:"🗑"}),u.jsxs("div",{className:"seg",style:{flexBasis:"100%",marginTop:4},children:[u.jsx("button",{className:d.freq!=="weekly"?"on":"",onClick:()=>xo(d.id,"daily"),children:"毎日"}),u.jsx("button",{className:d.freq==="weekly"?"on":"",onClick:()=>xo(d.id,"weekly"),children:"毎週"})]}),d.freq==="weekly"&&u.jsx("div",{className:"dow-row",children:Km.map(S=>u.jsx("button",{className:"dow-chip"+((d.days||[]).includes(S)?" on":""),onClick:()=>Xi(d.id,S),children:Ls[S]},S))})]},d.id)),w.length===0&&u.jsx("p",{className:"panel-note",children:"まだ習慣がありません。追加してね💗"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:On,children:"＋ 習慣を追加"}),u.jsx("button",{className:"p-close",onClick:vo,children:"閉じる"})]})]})}),he&&u.jsx("div",{className:"overlay",onClick:()=>we(!1),children:u.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[u.jsx("h3",{children:"📤 日記をテキストで書き出し"}),u.jsx("textarea",{ref:dn,readOnly:!0,value:xr()}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:Ji,children:xt?"コピーしたよ💗":"ぜんぶコピー"}),u.jsx("button",{className:"p-dl",onClick:yr,children:".txtでDL"}),u.jsx("button",{className:"p-close",onClick:()=>we(!1),children:"閉じる"})]})]})}),Ft&&u.jsx("div",{className:"overlay",onClick:()=>tt(!1),children:u.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[u.jsx("h3",{children:"📥 テキストから復元"}),u.jsx("textarea",{placeholder:`エクスポートした .txt の内容をここに貼り付けてね

🩷2026/07/17🩷 9:30
今日あったこと…`,value:Ue,onChange:d=>R(d.target.value)}),u.jsx("p",{className:"panel-note",children:"※ すでにある日付の日記は上書きせずスキップされます"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",disabled:!Ue.trim(),onClick:wo,children:"読み込む"}),u.jsx("button",{className:"p-close",onClick:()=>{tt(!1),R("")},children:"閉じる"})]})]})})]})}function Wm({items:e,keyOf:t,onReorder:n,renderItem:r,onLongPress:o,longPress:i=320,footer:l}){const[s,a]=z.useState(null),[c,m]=z.useState(null),x=z.useRef(null),f=z.useRef({});f.current.items=e,f.current.keyOf=t,f.current.onReorder=n,f.current.onLongPress=o;const w=s||e,b=k=>{var N;return(N=x.current)==null?void 0:N.querySelector(`[data-dk="${CSS.escape(String(k))}"]`)},j=()=>{const k=x.current;if(!k||f.current.dragKey==null)return;const N=b(f.current.dragKey);if(!N)return;const D=k.getBoundingClientRect(),M=D.left+N.offsetLeft,L=D.top+N.offsetTop,F=f.current.pointerX-f.current.grabX-M,I=f.current.pointerY-f.current.grabY-L;N.style.transform=`translate(${F}px, ${I}px) scale(1.08)`},P=k=>{const N=b(k);if(!N)return;const D=N.getBoundingClientRect();f.current.dragKey=k,f.current.grabX=f.current.pointerX-D.left,f.current.grabY=f.current.pointerY-D.top,f.current.pickupX=f.current.pointerX,f.current.pickupY=f.current.pointerY,f.current.moved=!1,f.current.order=f.current.items.slice(),N.style.zIndex="10",a(f.current.order),m(k);try{navigator.vibrate&&navigator.vibrate(12)}catch{}requestAnimationFrame(j)},g=()=>{const k=x.current;if(!k||f.current.dragKey==null)return;const N=k.getBoundingClientRect(),D=f.current.pointerX-N.left,M=f.current.pointerY-N.top,L=[...k.querySelectorAll("[data-dk]")];let F=0,I=1/0;for(let he=0;he<L.length;he++){const we=L[he],Ft=we.offsetLeft+we.offsetWidth/2,tt=we.offsetTop+we.offsetHeight/2,Ue=(D-Ft)**2+(M-tt)**2;Ue<I&&(I=Ue,F=he)}const W=f.current.order,fe=W.findIndex(he=>f.current.keyOf(he)===f.current.dragKey);if(fe!==-1&&fe!==F){const[he]=W.splice(fe,1);W.splice(F,0,he),a(W.slice())}requestAnimationFrame(j)},p=()=>{if(clearTimeout(f.current.timer),f.current.dragKey!=null){const k=b(f.current.dragKey);if(k&&(k.style.transform="",k.style.zIndex=""),f.current.moved)f.current.onReorder(f.current.order.slice());else if(f.current.onLongPress){const N=f.current.items.find(D=>f.current.keyOf(D)===f.current.dragKey);f.current.onLongPress({item:N,x:f.current.pointerX,y:f.current.pointerY})}f.current.suppress=Date.now()+450}f.current.dragKey=null,m(null),a(null)};z.useEffect(()=>{const k=x.current;if(!k)return;const N=F=>{if(F.touches.length!==1)return;const I=F.target.closest("[data-dk]");if(!I||!k.contains(I))return;const W=F.touches[0];f.current.startX=W.clientX,f.current.startY=W.clientY,f.current.pointerX=W.clientX,f.current.pointerY=W.clientY,f.current.moved=!1;const fe=I.getAttribute("data-dk");clearTimeout(f.current.timer),f.current.timer=setTimeout(()=>{f.current.moved||P(fe)},i)},D=F=>{const I=F.touches[0];if(f.current.pointerX=I.clientX,f.current.pointerY=I.clientY,f.current.dragKey==null){(Math.abs(I.clientX-f.current.startX)>12||Math.abs(I.clientY-f.current.startY)>12)&&(f.current.moved=!0,clearTimeout(f.current.timer));return}(Math.abs(I.clientX-f.current.pickupX)>8||Math.abs(I.clientY-f.current.pickupY)>8)&&(f.current.moved=!0),F.preventDefault(),g()},M=()=>{clearTimeout(f.current.timer),f.current.dragKey!=null&&p()},L=F=>F.preventDefault();return k.addEventListener("touchstart",N,{passive:!0}),k.addEventListener("touchmove",D,{passive:!1}),k.addEventListener("touchend",M,{passive:!0}),k.addEventListener("touchcancel",M,{passive:!0}),k.addEventListener("contextmenu",L),()=>{k.removeEventListener("touchstart",N),k.removeEventListener("touchmove",D),k.removeEventListener("touchend",M),k.removeEventListener("touchcancel",M),k.removeEventListener("contextmenu",L)}},[i]);const h=k=>{f.current.suppress&&Date.now()<f.current.suppress&&(k.stopPropagation(),k.preventDefault(),f.current.suppress=0)};return u.jsxs("div",{ref:x,className:"ig-grid",onClickCapture:h,children:[w.map(k=>{const N=t(k);return u.jsx("div",{"data-dk":N,className:"ig-cell"+(c===N?" dragging":""),children:r(k)},N)}),l]})}function Vm({onBack:e,children:t}){const[n,r]=z.useState(0),[o,i]=z.useState(!1),l=z.useRef(null),s=z.useRef(!1),a=f=>{if(f.touches.length!==1||document.querySelector(".overlay"))return;const w=f.touches[0];w.clientX>28||(l.current={x:w.clientX,y:w.clientY},s.current=!1)},c=f=>{if(!l.current)return;const w=f.touches[0],b=w.clientX-l.current.x,j=w.clientY-l.current.y;if(!s.current){if(Math.abs(b)<8&&Math.abs(j)<8)return;if(Math.abs(j)>Math.abs(b)){l.current=null;return}s.current=!0,i(!1)}r(Math.max(0,b))},m=()=>{if(!l.current)return;const f=Math.min(110,window.innerWidth*.3);i(!0),s.current&&n>f?(r(window.innerWidth),setTimeout(e,190)):r(0),l.current=null,s.current=!1},x=n>0?{transform:`translateX(${n}px)`,transition:o?"transform .19s ease-out":"none",boxShadow:"-10px 0 26px rgba(120,50,90,.18)"}:void 0;return u.jsx("div",{className:"swipe-wrap",style:x,onTouchStart:a,onTouchMove:c,onTouchEnd:m,children:t})}const Qm=z.lazy(()=>po(()=>import("./TalkRoom-OVMmNxeh.js"),[],import.meta.url)),Ym=z.lazy(()=>po(()=>import("./TodoRoom-BOLg-dYB.js"),[],import.meta.url)),Xm=z.lazy(()=>po(()=>import("./DarelogRoom-DkfsETOT.js"),__vite__mapDeps([0,1]),import.meta.url)),Gm=z.lazy(()=>po(()=>import("./ExpenseRoom-CjNsB-uR.js"),[],import.meta.url)),Jm=["💗","🩷","💛","🩵","💜","🤍","🖤","🌸","🌷","🎀","🌟","✨","⭐️","👑","🫶","🐰","🐻","🐱","🦄","🌙","🌊","🌿","🍓","🍒","🧸","📖","💬","✅","🌗","💰"];function Zm(){const[e,t]=z.useState(null),[n,r]=z.useState({screen:"home"}),[o,i]=z.useState(!1),[l,s]=z.useState(""),[a,c]=z.useState(null),[m,x]=z.useState(null),[f,w]=z.useState(!1),[b,j]=z.useState(null),[P,g]=z.useState(""),[p,h]=z.useState(null),[k,N]=z.useState(""),[D,M]=z.useState(0),[L,F]=z.useState(null),[I,W]=z.useState(!1),fe=z.useRef(null),he=z.useRef(0),[we,Ft]=z.useState(mm),[tt,Ue]=z.useState(!1),[R,B]=z.useState(""),[K,G]=z.useState(!1),[ie,me]=z.useState(""),[ke,be]=z.useState(""),[Z,xt]=z.useState(null),[Bt,ho]=z.useState(!1),[yt,ze]=z.useState(null),[cn,dn]=z.useState(!1),[Ut,mo]=z.useState(""),fn=z.useRef(null),q=(y,E=3e3)=>{mo(y),clearTimeout(fn.current),fn.current=setTimeout(()=>mo(""),E)};z.useEffect(()=>{(async()=>{try{const y=await xm();y.some(S=>S.id===ge)&&r({screen:"room",roomId:ge}),t(y);const[E,d,v]=await Promise.all([V(ti),V(lo),V(Tl)]);E&&E.dateKey===Xe()&&g(E.text),Array.isArray(d)&&d.length&&Ft(d),xt(v||{})}catch{q("データの読み込みに失敗しました"),t([])}})()},[]),z.useEffect(()=>{if(n.screen!=="home")return;let y=!0;return(async()=>{try{let E=await V(Le(ge));E=typeof E=="string"?JSON.parse(E):E||{};const d=E[Xe()];if(!y)return;d&&typeof d.text=="string"&&d.text.trim()?F({written:!0,preview:d.text.split(`
`)[0].slice(0,34)}):F({written:!1})}catch{y&&F({written:!1})}})(),()=>{y=!1}},[n.screen,D]),z.useEffect(()=>{n.screen==="home"&&fe.current&&(fe.current.scrollTop=he.current)},[n.screen]);const go=y=>{t(E=>{let d=E;return E.find(v=>v.id===ge)||(d=[...E,{id:ge,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),d=d.map(v=>v.id===ge?{...v,...y!=null?{preview:y}:{},lastAt:Date.now()}:v),Q(Pt,d),d}),M(E=>E+1)},Yi=async({text:y,time:E,dateKey:d})=>{try{const v=Cn(ge),S=await V(v)||{},T=(S[d]||[]).slice();T.some(C=>C.text===y&&C.time===E)||T.push({text:y,time:E}),await Q(v,{...S,[d]:T}),go(`🩷 できたこと ☑ ${y}`.slice(0,40))}catch{q("できたことの記録に失敗しました")}},fr=async({text:y,time:E,dateKey:d})=>{try{const v=Cn(ge),S=await V(v)||{},T=(S[d]||[]).filter(O=>!(O.text===y&&O.time===E)),C={...S};T.length?C[d]=T:delete C[d],await Q(v,C),go(null)}catch{}},pr=y=>{t(y),Q(Pt,y).catch(()=>q("保存に失敗しました"))},vt=(y,E)=>{t(d=>{const v=d.map(S=>S.id===y?{...S,...E}:S);return Q(Pt,v).catch(()=>q("保存に失敗しました")),v})},hr=async(y,E,d)=>{try{const v=(e||[]).find(A=>A.id===E);if(!v)return{ok:!1};const S=Le(E),T=await V(S)||{},C=Array.isArray(T.todos)?T.todos:[],O=(d||"").trim(),U=O?(v.places||[]).find(A=>(A.name||"").trim()===O):null,J={...y,placeId:U?U.id:null},ne=[...C,J];await Q(S,{...T,todos:ne});const ee=ne.filter(A=>!A.done&&!A.deferred).length;return vt(E,{preview:`${J.done?"☑":"☐"} ${(J.text||"").split(`
`)[0]}`.slice(0,40),todoOpen:ee,lastAt:Date.now()}),{ok:!0,placeDropped:!!O&&!U,placeKept:!!U}}catch{return{ok:!1}}},pn=async y=>{const E=y.trim();if(!E)return;const d=Xe();try{await Q(ti,{dateKey:d,text:E}),g(E);const v=Le(ge);let S=await V(v);S=S&&typeof S=="object"?S:{};const T=S[d],C=Tm(T?T.text:"",E);S={...S,[d]:{text:C,time:T?T.time:gf()}},await Q(v,S);const O=Object.keys(S).sort(),U=O[O.length-1],J=S[U].text.split(`
`)[0].slice(0,40);t(ne=>{let ee=ne;return ne.find(A=>A.id===ge)||(ee=[...ne,{id:ge,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),ee=ee.map(A=>A.id===ge?{...A,preview:J,lastAt:Date.now()}:A),Q(Pt,ee),ee}),M(ne=>ne+1),q("今日のコマをピン留めしたよ🩷")}catch{q("宣言の保存に失敗しました")}},mr=y=>{Ft(y),Q(lo,y).catch(()=>q("マークの保存に失敗しました"))},gr=()=>{const y=R.trim();if(y){if(we.includes(y)){B("");return}mr([...we,y]),B("")}},hn=y=>mr(we.filter(E=>E!==y));z.useEffect(()=>{!o||!e||(async()=>{const y={};for(const E of e)y[E.id]=await V(Le(E.id));c(y)})()},[o,e]);const On=e||[],Ct=z.useMemo(()=>{if(!l||!a||!e)return null;const y=l.toLowerCase(),E=[];for(const d of On){const v=a[d.id],S=[];if(d.type==="diary"){const T=v&&typeof v=="object"?v:{};for(const C of Object.keys(T).sort())(T[C].text+xe(C)).toLowerCase().includes(y)&&S.push({snippet:T[C].text.split(`
`)[0],date:xe(C)})}else if(d.type==="todo"){const T=v&&Array.isArray(v.todos)?v.todos:[];for(const C of T)(C.text+xe(C.dateKey)).toLowerCase().includes(y)&&S.push({snippet:`${C.done?"☑":"☐"} ${C.text.split(`
`)[0]}`,date:xe(C.dateKey)})}else if(d.type==="darelog"){const T=v&&Array.isArray(v.records)?v.records:[],C=O=>{var U,J;return((J=(U=d.members)==null?void 0:U.find(ne=>ne.id===O))==null?void 0:J.name)||""};for(const O of T){const U=C(O.memberId);(U+(O.memo||"")+xe(O.dateKey)).toLowerCase().includes(y)&&S.push({snippet:`${U}${O.memo?`: ${O.memo}`:""}`,date:xe(O.dateKey)})}}else if(d.type==="expense"){const T=v&&Array.isArray(v.expenses)?v.expenses:[],C=O=>{var U,J;return((J=(U=d.categories)==null?void 0:U.find(ne=>ne.id===O))==null?void 0:J.name)||""};for(const O of T)(C(O.categoryId)+(O.memo||"")+String(O.amount)+xe(O.dateKey)).toLowerCase().includes(y)&&S.push({snippet:`${C(O.categoryId)} ¥${O.amount}${O.memo?" "+O.memo:""}`,date:xe(O.dateKey)})}else{const T=v&&Array.isArray(v.messages)?v.messages:[],C=O=>{var U,J;return((J=(U=d.members)==null?void 0:U.find(ne=>ne.id===O))==null?void 0:J.name)||""};for(const O of T)((O.text+xe(O.dateKey)).toLowerCase().includes(y)||C(O.memberId).toLowerCase().includes(y))&&S.push({snippet:`${C(O.memberId)||"？"}: ${O.text.split(`
`)[0]}`,date:xe(O.dateKey)})}S.length===0&&d.name.toLowerCase().includes(y)&&S.push({snippet:d.preview||"",date:""}),S.length&&E.push({room:d,hits:S})}return E},[l,a,On,e]),xo=y=>l?y.split(new RegExp(`(${xf(l)})`,"gi")).map((d,v)=>d.toLowerCase()===l.toLowerCase()?u.jsx("mark",{className:"hl",children:d},v):d):y,Xi=()=>{const y=m.name.trim();if(!y){q("ルーム名を入れてね");return}const E={diary:"💗",todo:"✅",darelog:"🌗",expense:"💰",talk:"🩷"}[m.type]||"🩷",d=m.type==="darelog"?[{id:Re(),name:"ヒカルくん",color:"#d4f0ff",icon:{type:"emoji",value:"🌊"},side:"left"},{id:Re(),name:"柊くん",color:"#d9ffe3",icon:{type:"emoji",value:"🌿"},side:"left"},{id:Re(),name:"ひかりちゃん",color:"#ffd9ec",icon:{type:"emoji",value:"🌸"},side:"right"}]:[],v=m.type==="expense"?[{id:Re(),name:"AI費用",emoji:"🤖",color:"#2196F3"},{id:Re(),name:"ピンクグッズ",emoji:"🎀",color:"#E91E63"},{id:Re(),name:"ネイル",emoji:"💅",color:"#9C27B0"},{id:Re(),name:"旅費交通費",emoji:"🚃",color:"#00A5B5",transit:!0}]:void 0,S={id:Re(),type:m.type,name:y,emoji:m.emoji.trim()||E,theme:m.theme||Pr,members:d,createdAt:Date.now(),lastAt:0,preview:"",...m.type==="todo"?{shopping:!!m.shopping}:{},...v?{categories:v,subscriptions:[],subsPosted:{},transitSeeded:!0,stations:[],fares:[],defaultFromId:null,roundTripDefault:!1,incomeSeeded:!0,incomeCategories:[{id:Re(),name:"売上",emoji:"💰",color:"#2E9E5B"},{id:Re(),name:"返金",emoji:"↩️",color:"#3BA7A0"},{id:Re(),name:"その他",emoji:"✨",color:"#7FB800"}]}:{}};pr([...e,S]),x(null),r({screen:"room",roomId:S.id})},yo=()=>{const y=m.name.trim();if(!y){q("ルーム名を入れてね");return}vt(m.roomId,{name:y,emoji:m.emoji.trim()||"💗",theme:m.theme||Pr,hidden:!!m.hidden,...m.type==="todo"?{shopping:!!m.shopping}:{}}),x(null)},Gi=y=>{x({mode:"edit",roomId:y.id,name:y.name,emoji:y.emoji,type:y.type,shopping:!!y.shopping,theme:y.theme||Pr,hidden:!!y.hidden}),w(!1)},vo=async y=>{try{const E=await V(Le(y));E&&await Q(hm(y),E),pr(e.filter(d=>d.id!==y)),x(null),j(null),q("ルームを削除しました")}catch{q("削除に失敗しました")}},xr=()=>{const y=e.find(E=>E.id===m.roomId);j({message:`ルーム「${(y==null?void 0:y.name)||""}」を削除しますか？
中の記録もすべて消えます。`,onConfirm:()=>vo(m.roomId)})},Ji=async()=>{be(""),dn(!1);try{const y=await Vu();me(JSON.stringify(y,null,2))}catch{me("")}G(!0)},yr=async()=>{const y={...Z||{},lastDateKey:Xe(),lastAt:Date.now()};xt(y);try{await Q(Tl,y)}catch{}},wo=y=>{const E=new Blob([y],{type:"application/json;charset=utf-8"}),d=URL.createObjectURL(E),v=document.createElement("a");v.href=d,v.download=Uo,document.body.appendChild(v),v.click(),v.remove(),setTimeout(()=>URL.revokeObjectURL(d),3e3)},mn=async()=>{if(!Bt){ho(!0);try{let y;try{y=JSON.stringify(await Vu(),null,2)}catch{q("バックアップの作成に失敗しました 🥺");return}try{const E=new File([y],Uo,{type:"application/json"});if(navigator.canShare&&navigator.canShare({files:[E]})){await navigator.share({files:[E],title:Uo}),await yr(),q("バックアップを保存したよ💗 同じファイルに置き換えできたかな？");return}}catch(E){if(E&&(E.name==="AbortError"||E.name==="NotAllowedError"))return}try{wo(y),await yr(),q("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{q("保存できない環境みたい。コピーを使ってね")}}finally{ho(!1)}}},ko=()=>{try{wo(ie),yr(),q("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{q("保存できない環境みたい。コピーを使ってね")}},at=Xe(),wt=(()=>{if(!(Z!=null&&Z.lastDateKey))return null;const y=Ie(at)-Ie(Z.lastDateKey);return Math.max(0,Math.round(y/864e5))})(),vr=wt===null||wt>=7,Zi=!!Z&&Z.lastDateKey!==at&&Z.dismissedDateKey!==at,qi=async()=>{const y={...Z||{},dismissedDateKey:at};xt(y);try{await Q(Tl,y)}catch{}},el=async()=>{try{await navigator.clipboard.writeText(ie),dn(!0),setTimeout(()=>dn(!1),2e3)}catch{q("コピーできませんでした。全選択して手動でコピーしてね")}},tl=y=>{var v;const E=(v=y.target.files)==null?void 0:v[0];if(!E)return;const d=new FileReader;d.onload=()=>be(String(d.result||"")),d.onerror=()=>q("ファイルを読めませんでした"),d.readAsText(E),y.target.value=""},bo=()=>{let y;try{y=JSON.parse(ke)}catch{q("JSONとして読めませんでした。ファイルが壊れているかも 🥺",4e3);return}const E=Pm(y);if(E){q(E,4500);return}ze({obj:y,counts:Mm(y),exportedAt:y.exportedAt||"",version:y.version})},gn=async()=>{const y=yt==null?void 0:yt.obj;if(y)try{const E=await Rm(y);t(E.rooms),y.declaration&&y.declaration.dateKey===Xe()&&!P&&(await Q(ti,y.declaration),g(y.declaration.text)),M(d=>d+1),ze(null),G(!1),be(""),q(`復元完了💗 ${E.addedRooms}ルーム / ${E.addedItems}件を追加`)}catch{ze(null),q("復元中にエラーが出ました。ファイルが壊れているかも 🥺",4e3)}};if(!e)return u.jsx("div",{className:"app",children:u.jsx("style",{children:Yu})});const So=u.jsxs("div",{className:"pin",onClick:()=>{N(P),h(P?"view":"edit")},role:"button",children:[u.jsx("span",{className:"pin-ic",children:P?"📌":"🩷"}),P?u.jsx("span",{className:"pin-txt",children:P}):u.jsx("span",{className:"pin-ph",children:"今日のコマをえらぶ🩷"})]});let Et;if(n.screen==="room"){const y=e.find(E=>E.id===n.roomId);if(!y)Et=null,setTimeout(()=>r({screen:"home"}),0);else{const E={room:y,onBack:()=>r({screen:"home"}),onMeta:v=>vt(y.id,v),initialQuery:n.q,showToast:q,pinned:So},d=y.type==="diary"?u.jsx(Hm,{...E,syncSignal:D,marks:we,onEditMarks:()=>Ue(!0)},y.id):y.type==="todo"?u.jsx(Ym,{...E,onTodoComplete:Yi,onTodoUncomplete:fr,onRoomChange:v=>vt(y.id,v),todoRooms:e.filter(v=>v.type==="todo"&&v.id!==y.id),onMoveTodo:hr},y.id):y.type==="darelog"?u.jsx(Xm,{...E,onRoomChange:v=>vt(y.id,v)},y.id):y.type==="expense"?u.jsx(Gm,{...E,onRoomChange:v=>vt(y.id,v)},y.id):u.jsx(Qm,{...E,onRoomChange:v=>vt(y.id,v)},y.id);Et=u.jsx(Vm,{onBack:()=>r({screen:"home"}),children:u.jsx(z.Suspense,{fallback:u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"hd hd-loading"}),u.jsx("div",{className:"chat"})]}),children:d})},y.id)}}else Et=u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"hd hd-home",children:[u.jsx("div",{className:"app-brand",children:u.jsx("div",{className:"app-title",children:"💖Nachumin Lifelog💖"})}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"バックアップ",onClick:Ji,children:"💾"}),u.jsx("button",{className:"icon-btn","aria-label":"新しいルーム",onClick:()=>x({mode:"new",name:"",emoji:"",type:"talk"}),children:"➕"}),u.jsx("button",{className:"icon-btn","aria-label":"ぜんぶ検索",onClick:()=>{i(!o),s("")},children:o?"✕":"🔍"})]}),Zi&&u.jsxs("div",{className:"bk-banner"+(vr?" stale":""),children:[u.jsxs("button",{className:"bk-main",onClick:mn,disabled:Bt,children:[u.jsx("span",{className:"bk-ttl",children:"💾 今日のバックアップ🩷"}),u.jsx("span",{className:"bk-sub",children:wt===null?"まだ一度も保存していません":vr?`最後の保存から ${wt}日 たっています`:"タップで1ファイルに書き出し"})]}),u.jsx("button",{className:"bk-x","aria-label":"閉じる",onClick:qi,children:"✕"})]}),o&&u.jsx("div",{className:"search-row",children:u.jsx("input",{autoFocus:!0,placeholder:"ぜんぶのルームから検索（ことば・話者・日付）",value:l,onChange:y=>s(y.target.value)})}),Ct?u.jsx("div",{className:"rooms",children:Ct.length===0?u.jsx("div",{className:"empty",children:"みつかりませんでした 🥺"}):Ct.map(({room:y,hits:E})=>u.jsxs("div",{className:"room-row",onClick:()=>r({screen:"room",roomId:y.id,q:l}),children:[u.jsx("div",{className:"r-ic",children:y.emoji}),u.jsxs("div",{className:"r-main",children:[u.jsx("div",{className:"r-name",children:y.name}),u.jsx("div",{className:"r-prev",children:xo(E[0].snippet)})]}),u.jsxs("div",{className:"r-side",children:[u.jsxs("span",{className:"r-badge",children:[E.length,"件"]}),E[0].date&&u.jsx("span",{className:"r-date",children:E[0].date})]})]},y.id))}):u.jsx("div",{className:"home-scroll",ref:fe,onScroll:y=>{he.current=y.target.scrollTop},children:(()=>{const y=e.find(C=>C.id===ge),E=On.filter(C=>C.id!==ge&&!C.hidden),d=On.filter(C=>C.id!==ge&&C.hidden),v=Ie(Xe()),S=L?L.written?L.preview:`${v.getMonth()+1}/${v.getDate()}・きょうの分はまだ`:"…",T=C=>{const O=[...C];pr(e.map(U=>U.id===ge||U.hidden?U:O.shift()))};return u.jsxs(u.Fragment,{children:[y&&u.jsxs("button",{className:"diary-card",onClick:()=>r({screen:"room",roomId:y.id}),children:[u.jsx("span",{className:"dc-ic",children:y.emoji}),u.jsxs("span",{className:"dc-main",children:[u.jsx("span",{className:"dc-name",children:"DIARY"}),u.jsx("span",{className:"dc-sub",children:S})]}),u.jsx("span",{className:"dc-arw",children:"›"})]}),u.jsx(Wm,{items:E,keyOf:C=>C.id,onReorder:T,onLongPress:({item:C})=>{C&&Gi(C)},footer:u.jsx("div",{className:"ig-cell ig-add",children:u.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>x({mode:"new",name:"",emoji:"",type:"talk"}),onKeyDown:C=>C.key==="Enter"&&x({mode:"new",name:"",emoji:"",type:"talk"}),children:[u.jsx("span",{className:"ig-btn",children:"＋"}),u.jsx("span",{className:"ig-name",children:"つくる"})]})}),renderItem:C=>{const O=C.type==="todo"&&C.todoOpen>0?C.todoOpen:null;return u.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>r({screen:"room",roomId:C.id}),onKeyDown:U=>U.key==="Enter"&&r({screen:"room",roomId:C.id}),children:[u.jsxs("span",{className:"ig-btn",style:Qu(C.theme),children:[C.emoji,O!=null&&u.jsx("span",{className:"ig-badge",children:O>99?"99+":O})]}),u.jsx("span",{className:"ig-name",children:C.name})]})}}),d.length>0&&u.jsx("button",{className:"hidden-entry",onClick:()=>W(!0),children:"🙈 非表示のルーム"}),I&&u.jsx("div",{className:"overlay",onClick:()=>W(!1),children:u.jsxs("div",{className:"panel",onClick:C=>C.stopPropagation(),children:[u.jsx("h3",{children:"🙈 非表示のルーム"}),u.jsx("p",{className:"panel-note",children:"一覧に出していないルームです。中の記録は消えていません。「戻す」でまた表示できます。"}),u.jsx("div",{className:"move-list",children:d.map(C=>u.jsxs("div",{className:"move-item as-row",children:[u.jsx("span",{className:"move-ic",children:C.emoji}),u.jsx("span",{className:"move-name",children:C.name}),u.jsx("button",{className:"unhide-btn",onClick:()=>vt(C.id,{hidden:!1}),children:"戻す"})]},C.id))}),u.jsx("div",{className:"panel-btns",children:u.jsx("button",{className:"p-close",onClick:()=>W(!1),children:"閉じる"})})]})})]})})()})]});return u.jsxs("div",{className:"app",children:[u.jsx("style",{children:Yu}),Et,m&&u.jsx("div",{className:"overlay",onClick:()=>{x(null),w(!1)},children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:m.mode==="new"?"➕ 新しいルーム":"⚙️ ルーム設定"}),u.jsx("div",{className:"f-label",children:"ルーム名"}),u.jsx("input",{className:"f-input",autoFocus:m.mode==="new",placeholder:"ハートるんず",value:m.name,onChange:y=>x(E=>({...E,name:y.target.value}))}),u.jsx("div",{className:"f-label",children:"アイコン（タップで選ぶ）"}),u.jsx("div",{className:"emoji-picks",children:Jm.map(y=>u.jsx("button",{className:"emoji-pick"+(m.emoji===y?" on":""),onClick:()=>x(E=>({...E,emoji:y})),children:y},y))}),u.jsx("input",{className:"f-input",style:{width:130,textAlign:"center",marginTop:4},maxLength:8,placeholder:"または自由入力",value:m.emoji,onChange:y=>x(E=>({...E,emoji:y.target.value}))}),u.jsx("div",{className:"f-label",children:"テーマカラー"}),u.jsx("div",{className:"theme-swatches",children:vf.map(y=>{const E=(m.theme||Pr)===y;return u.jsx("button",{className:"theme-sw"+(E?" on":""),style:Qu(y),"aria-label":y,onClick:()=>x(d=>({...d,theme:y}))},y)})}),u.jsxs("div",{className:"f-label",children:["タイプ",m.mode==="edit"?"（変更できません）":""]}),u.jsxs("div",{className:"type-row",children:[u.jsxs("button",{className:"type-chip"+(m.type==="diary"?" on":""),disabled:m.mode==="edit",onClick:()=>x(y=>({...y,type:"diary"})),children:["📖 日記",u.jsx("small",{children:"1日=1吹き出し"})]}),u.jsxs("button",{className:"type-chip"+(m.type==="talk"?" on":""),disabled:m.mode==="edit",onClick:()=>x(y=>({...y,type:"talk"})),children:["💬 トーク",u.jsx("small",{children:"話者ごと"})]}),u.jsxs("button",{className:"type-chip"+(m.type==="todo"?" on":""),disabled:m.mode==="edit",onClick:()=>x(y=>({...y,type:"todo"})),children:["✅ TODO",u.jsx("small",{children:"やること"})]}),u.jsxs("button",{className:"type-chip"+(m.type==="darelog"?" on":""),disabled:m.mode==="edit",onClick:()=>x(y=>({...y,type:"darelog"})),children:["🌗 だれログ",u.jsx("small",{children:"朝昼夜の記録"})]}),u.jsxs("button",{className:"type-chip"+(m.type==="expense"?" on":""),disabled:m.mode==="edit",onClick:()=>x(y=>({...y,type:"expense"})),children:["💰 経費",u.jsx("small",{children:"支出を記録"})]})]}),m.mode==="edit"&&m.roomId!==ge&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"f-label",children:"一覧での表示"}),u.jsxs("button",{className:"shop-toggle"+(m.hidden?" on":""),onClick:()=>x(y=>({...y,hidden:!y.hidden})),children:[u.jsx("span",{className:"shop-box",children:m.hidden?"✓":""}),"🙈 一覧に表示しない（記録は消えません）"]})]}),m.type==="todo"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"f-label",children:"用途"}),u.jsxs("button",{className:"shop-toggle"+(m.shopping?" on":""),onClick:()=>x(y=>({...y,shopping:!y.shopping})),children:[u.jsx("span",{className:"shop-box",children:m.shopping?"✓":""}),"🛒 買い物リストとして使う（よく買うものクイック追加）"]})]}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:m.mode==="new"?Xi:yo,children:m.mode==="new"?"つくる":"保存"}),m.mode==="edit"&&u.jsx("button",{className:"p-del",onClick:xr,children:"削除"}),u.jsx("button",{className:"p-close",onClick:()=>{x(null),w(!1)},children:"閉じる"})]})]})}),K&&u.jsx("div",{className:"overlay",onClick:()=>G(!1),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"💾 まるごとバックアップ"}),u.jsx("p",{className:"panel-note",children:"全ルーム・全データ（日記 / TODO / だれログ / 経費 / 習慣 / 各種設定）を まるごと1ファイルに保存します。端末が変わっても元どおり復元できます。"}),u.jsxs("div",{className:"bk-last"+(vr?" stale":""),children:[u.jsx("span",{className:"bk-last-l",children:"最後にバックアップした日"}),u.jsx("span",{className:"bk-last-v",children:Z!=null&&Z.lastDateKey?`${xe(Z.lastDateKey)}${wt===0?"（今日）":`（${wt}日前）`}`:"まだありません"})]}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:mn,disabled:Bt,children:"💾 1タップで書き出し"}),u.jsx("button",{className:"p-dl",onClick:ko,children:"ダウンロード"}),u.jsx("button",{className:"p-dl",onClick:el,children:cn?"コピーしたよ💗":"コピー"})]}),u.jsxs("p",{className:"panel-note",children:["ファイル名は毎回 ",u.jsx("b",{children:Uo})," で固定。iPhoneの共有シートから 「ファイルに保存」を選ぶと、前のファイルを置き換えて上書きできます。"]}),u.jsx("div",{className:"f-label",style:{marginTop:6},children:"復元する（バックアップから読み込み）"}),u.jsx("p",{className:"panel-note",children:"既存のデータは消さず、足りない分だけ追加します（安全マージ）"}),u.jsxs("label",{className:"upload-btn",style:{alignSelf:"flex-start"},children:["📂 バックアップファイルを選ぶ",u.jsx("input",{type:"file",accept:".json,application/json,text/plain",onChange:tl})]}),u.jsx("textarea",{placeholder:"または、コピーしたバックアップをここに貼り付け",value:ke,onChange:y=>be(y.target.value),style:{minHeight:120}}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",disabled:!ke.trim(),onClick:bo,children:"復元する"}),u.jsx("button",{className:"p-close",onClick:()=>{G(!1),be("")},children:"閉じる"})]})]})}),yt&&u.jsx("div",{className:"overlay bk-ask-over",onClick:()=>ze(null),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"⚠️ 復元まえの確認"}),u.jsxs("div",{className:"bk-ask-box",children:[u.jsxs("div",{className:"bk-ask-row",children:[u.jsx("span",{children:"ルーム"}),u.jsx("b",{children:yt.counts.rooms})]}),u.jsxs("div",{className:"bk-ask-row",children:[u.jsx("span",{children:"記録の件数"}),u.jsx("b",{children:yt.counts.items})]}),yt.exportedAt&&u.jsxs("div",{className:"bk-ask-row",children:[u.jsx("span",{children:"書き出し日時"}),u.jsx("b",{children:new Date(yt.exportedAt).toLocaleString("ja-JP")})]})]}),u.jsxs("p",{className:"panel-note",children:["今のデータは消えません（足りない分を追加する安全マージ）。 それでも念のため、",u.jsx("b",{children:"先に今のデータをバックアップ"}),"しておくのがおすすめです💗"]}),u.jsx("button",{className:"bk-first",onClick:mn,disabled:Bt,children:"💾 先に今のデータをバックアップする"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:gn,children:"この内容で復元する"}),u.jsx("button",{className:"p-close",onClick:()=>ze(null),children:"キャンセル"})]})]})}),p&&u.jsx("div",{className:"overlay",onClick:()=>h(null),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"🩷 今日のコマ"}),p==="view"?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"decl-full",children:P}),u.jsx("p",{className:"panel-note",children:"その日1日だけピン留め。日記にも記録されています🎬"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:()=>{N(P),h("edit")},children:"書きなおす"}),u.jsx("button",{className:"p-close",onClick:()=>h(null),children:"閉じる"})]})]}):u.jsxs(u.Fragment,{children:[u.jsx("textarea",{autoFocus:!0,style:{minHeight:120},placeholder:"今日は愛全開の私でいる！",value:k,onChange:y=>N(y.target.value)}),u.jsx("p",{className:"panel-note",children:"その日1日だけ表示。決定すると今日の日記の先頭に🎬として残ります"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",disabled:!k.trim(),onClick:()=>{pn(k),h(null)},children:"決定"}),u.jsx("button",{className:"p-close",onClick:()=>h(null),children:"閉じる"})]})]})]})}),tt&&u.jsx("div",{className:"overlay",onClick:()=>Ue(!1),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"⚙︎ 箇条書きマーク"}),u.jsx("p",{className:"panel-note",children:"日記の入力欄に出るマーク。タップで削除、下から追加できます。"}),u.jsxs("div",{className:"mark-manage",children:[we.map(y=>u.jsxs("span",{className:"mark-item",children:[y,u.jsx("button",{onClick:()=>hn(y),"aria-label":"削除",children:"✕"})]},y)),we.length===0&&u.jsx("p",{className:"panel-note",children:"マークがありません。追加してね"})]}),u.jsxs("div",{className:"in-row",style:{marginTop:4},children:[u.jsx("input",{className:"f-input",maxLength:4,placeholder:"記号や絵文字（例: ❤︎）",value:R,onChange:y=>B(y.target.value),onKeyDown:y=>y.key==="Enter"&&gr()}),u.jsx("button",{className:"p-copy",style:{flex:"0 0 auto",padding:"8px 16px",borderRadius:999},disabled:!R.trim(),onClick:gr,children:"追加"})]}),u.jsx("div",{className:"panel-btns",children:u.jsx("button",{className:"p-close",onClick:()=>Ue(!1),children:"閉じる"})})]})}),b&&u.jsx(Sf,{message:b.message,onConfirm:b.onConfirm,onCancel:()=>j(null)}),Ut&&u.jsx("div",{className:"toast",children:Ut})]})}let Gu=!1,Ju=!!(navigator.serviceWorker&&navigator.serviceWorker.controller);navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!Ju){Ju=!0;return}Gu||(Gu=!0,window.location.reload())});Zh({immediate:!0,onRegisteredSW(e,t){t&&(t.update(),setInterval(()=>t.update(),60*60*1e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&t.update()}))}});gm();df(document.getElementById("root")).render(u.jsx(z.StrictMode,{children:u.jsx(Zm,{})}));export{rg as A,eg as B,Bm as C,tg as D,qm as E,Hu as F,Am as I,fg as M,Xu as P,zm as S,pg as T,Ls as W,Le as a,xe as b,Wu as c,_i as d,Sf as e,Xe as f,V as g,cg as h,xf as i,u as j,Ie as k,Q as l,hg as m,gf as n,og as o,ug as p,sg as q,z as r,Nm as s,Im as t,Re as u,ag as v,ig as w,lg as x,dg as y,ng as z};
