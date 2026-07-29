const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DarelogRoom-B5mAMoXs.js","./TalkRoom-CDzNGXlY.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Ju={exports:{}},ji={},Zu={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=Symbol.for("react.element"),Sf=Symbol.for("react.portal"),jf=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),Cf=Symbol.for("react.profiler"),Ef=Symbol.for("react.provider"),zf=Symbol.for("react.context"),_f=Symbol.for("react.forward_ref"),Df=Symbol.for("react.suspense"),Tf=Symbol.for("react.memo"),Lf=Symbol.for("react.lazy"),za=Symbol.iterator;function Pf(e){return e===null||typeof e!="object"?null:(e=za&&e[za]||e["@@iterator"],typeof e=="function"?e:null)}var qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ec=Object.assign,tc={};function fr(e,t,n){this.props=e,this.context=t,this.refs=tc,this.updater=n||qu}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nc(){}nc.prototype=fr.prototype;function Ps(e,t,n){this.props=e,this.context=t,this.refs=tc,this.updater=n||qu}var Ms=Ps.prototype=new nc;Ms.constructor=Ps;ec(Ms,fr.prototype);Ms.isPureReactComponent=!0;var _a=Array.isArray,rc=Object.prototype.hasOwnProperty,Os={current:null},oc={key:!0,ref:!0,__self:!0,__source:!0};function ic(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)rc.call(t,r)&&!oc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:oo,type:e,key:i,ref:l,props:o,_owner:Os.current}}function Mf(e,t){return{$$typeof:oo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===oo}function Of(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Da=/\/+/g;function nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Of(""+e.key):t.toString(36)}function Ro(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case oo:case Sf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+nl(l,0):r,_a(o)?(n="",e!=null&&(n=e.replace(Da,"$&/")+"/"),Ro(o,t,n,"",function(c){return c})):o!=null&&(Rs(o)&&(o=Mf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Da,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",_a(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+nl(i,s);l+=Ro(i,t,n,a,o)}else if(a=Pf(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+nl(i,s++),l+=Ro(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function xo(e,t,n){if(e==null)return e;var r=[],o=0;return Ro(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Rf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},$o={transition:null},$f={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:$o,ReactCurrentOwner:Os};function lc(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:xo,forEach:function(e,t,n){xo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xo(e,function(){t++}),t},toArray:function(e){return xo(e,function(t){return t})||[]},only:function(e){if(!Rs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=fr;H.Fragment=jf;H.Profiler=Cf;H.PureComponent=Ps;H.StrictMode=Nf;H.Suspense=Df;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$f;H.act=lc;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ec({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Os.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)rc.call(t,a)&&!oc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:oo,type:e.type,key:o,ref:i,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:zf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ef,_context:e},e.Consumer=e};H.createElement=ic;H.createFactory=function(e){var t=ic.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:_f,render:e}};H.isValidElement=Rs;H.lazy=function(e){return{$$typeof:Lf,_payload:{_status:-1,_result:e},_init:Rf}};H.memo=function(e,t){return{$$typeof:Tf,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=$o.transition;$o.transition={};try{e()}finally{$o.transition=t}};H.unstable_act=lc;H.useCallback=function(e,t){return Ae.current.useCallback(e,t)};H.useContext=function(e){return Ae.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ae.current.useEffect(e,t)};H.useId=function(){return Ae.current.useId()};H.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ae.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};H.useRef=function(e){return Ae.current.useRef(e)};H.useState=function(e){return Ae.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ae.current.useTransition()};H.version="18.3.1";Zu.exports=H;var z=Zu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var If=z,Af=Symbol.for("react.element"),Ff=Symbol.for("react.fragment"),Bf=Object.prototype.hasOwnProperty,Uf=If.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kf={key:!0,ref:!0,__self:!0,__source:!0};function sc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Bf.call(t,r)&&!Kf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Af,type:e,key:i,ref:l,props:o,_owner:Uf.current}}ji.Fragment=Ff;ji.jsx=sc;ji.jsxs=sc;Ju.exports=ji;var u=Ju.exports,ac={exports:{}},nt={},uc={exports:{}},cc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,F){var B=O.length;O.push(F);e:for(;0<B;){var q=B-1>>>1,ne=O[q];if(0<o(ne,F))O[q]=F,O[B]=ne,B=q;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var F=O[0],B=O.pop();if(B!==F){O[0]=B;e:for(var q=0,ne=O.length,de=ne>>>1;q<de;){var J=2*(q+1)-1,Ce=O[J],ke=J+1,Ct=O[ke];if(0>o(Ce,B))ke<ne&&0>o(Ct,Ce)?(O[q]=Ct,O[ke]=B,q=ke):(O[q]=Ce,O[J]=B,q=J);else if(ke<ne&&0>o(Ct,B))O[q]=Ct,O[ke]=B,q=ke;else break e}}return F}function o(O,F){var B=O.sortIndex-F.sortIndex;return B!==0?B:O.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],g=1,x=null,f=3,v=!1,S=!1,j=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(O){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=O)r(c),F.sortIndex=F.expirationTime,t(a,F);else break;F=n(c)}}function w(O){if(j=!1,h(O),!S)if(n(a)!==null)S=!0,Be(N);else{var F=n(c);F!==null&&Ue(w,F.startTime-O)}}function N(O,F){S=!1,j&&(j=!1,m(L),L=-1),v=!0;var B=f;try{for(h(F),x=n(a);x!==null&&(!(x.expirationTime>F)||O&&!W());){var q=x.callback;if(typeof q=="function"){x.callback=null,f=x.priorityLevel;var ne=q(x.expirationTime<=F);F=e.unstable_now(),typeof ne=="function"?x.callback=ne:x===n(a)&&r(a),h(F)}else r(a);x=n(a)}if(x!==null)var de=!0;else{var J=n(c);J!==null&&Ue(w,J.startTime-F),de=!1}return de}finally{x=null,f=B,v=!1}}var _=!1,M=null,L=-1,A=5,I=-1;function W(){return!(e.unstable_now()-I<A)}function se(){if(M!==null){var O=e.unstable_now();I=O;var F=!0;try{F=M(!0,O)}finally{F?me():(_=!1,M=null)}}else _=!1}var me;if(typeof p=="function")me=function(){p(se)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,Nt=Xe.port2;Xe.port1.onmessage=se,me=function(){Nt.postMessage(null)}}else me=function(){P(se,0)};function Be(O){M=O,_||(_=!0,me())}function Ue(O,F){L=P(function(){O(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){S||v||(S=!0,Be(N))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var B=f;f=F;try{return O()}finally{f=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var B=f;f=O;try{return F()}finally{f=B}},e.unstable_scheduleCallback=function(O,F,B){var q=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?q+B:q):B=q,O){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=B+ne,O={id:g++,callback:F,priorityLevel:O,startTime:B,expirationTime:ne,sortIndex:-1},B>q?(O.sortIndex=B,t(c,O),n(a)===null&&O===n(c)&&(j?(m(L),L=-1):j=!0,Ue(w,B-q))):(O.sortIndex=ne,t(a,O),S||v||(S=!0,Be(N))),O},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(O){var F=f;return function(){var B=f;f=F;try{return O.apply(this,arguments)}finally{f=B}}}})(cc);uc.exports=cc;var Hf=uc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf=z,tt=Hf;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dc=new Set,Fr={};function Mn(e,t){ir(e,t),ir(e+"Capture",t)}function ir(e,t){for(Fr[e]=t,e=0;e<t.length;e++)dc.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ml=Object.prototype.hasOwnProperty,Vf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ta={},La={};function Qf(e){return Ml.call(La,e)?!0:Ml.call(Ta,e)?!1:Vf.test(e)?La[e]=!0:(Ta[e]=!0,!1)}function Yf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xf(e,t,n,r){if(t===null||typeof t>"u"||Yf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var $s=/[\-:]([a-z])/g;function Is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($s,Is);Ne[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($s,Is);Ne[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($s,Is);Ne[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function As(e,t,n,r){var o=Ne.hasOwnProperty(t)?Ne[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xf(t,n,o,r)&&(n=null),r||o===null?Qf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=Wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yo=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),Fs=Symbol.for("react.strict_mode"),Ol=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),pc=Symbol.for("react.context"),Bs=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),$l=Symbol.for("react.suspense_list"),Us=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),hc=Symbol.for("react.offscreen"),Pa=Symbol.iterator;function xr(e){return e===null||typeof e!="object"?null:(e=Pa&&e[Pa]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,rl;function Cr(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var ol=!1;function il(e,t){if(!e||ol)return"";ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cr(e):""}function Gf(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=il(e.type,!1),e;case 11:return e=il(e.type.render,!1),e;case 1:return e=il(e.type,!0),e;default:return""}}function Il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case Bn:return"Portal";case Ol:return"Profiler";case Fs:return"StrictMode";case Rl:return"Suspense";case $l:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pc:return(e.displayName||"Context")+".Consumer";case fc:return(e._context.displayName||"Context")+".Provider";case Bs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Us:return t=e.displayName||null,t!==null?t:Il(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return Il(e(t))}catch{}}return null}function Jf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Il(t);case 8:return t===Fs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zf(e){var t=mc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vo(e){e._valueTracker||(e._valueTracker=Zf(e))}function gc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Al(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ma(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xc(e,t){t=t.checked,t!=null&&As(e,"checked",t,!1)}function Fl(e,t){xc(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bl(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bl(e,t,n){(t!=="number"||Xo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Er=Array.isArray;function qn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ra(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Er(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function yc(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $a(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wo,wc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wo=wo||document.createElement("div"),wo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qf=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(e){qf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tr[t]=Tr[e]})});function kc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tr.hasOwnProperty(e)&&Tr[e]?(""+t).trim():t+"px"}function bc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=kc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var ep=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hl(e,t){if(t){if(ep[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vl=null;function Ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ql=null,er=null,tr=null;function Ia(e){if(e=so(e)){if(typeof Ql!="function")throw Error(E(280));var t=e.stateNode;t&&(t=_i(t),Ql(e.stateNode,e.type,t))}}function Sc(e){er?tr?tr.push(e):tr=[e]:er=e}function jc(){if(er){var e=er,t=tr;if(tr=er=null,Ia(e),t)for(e=0;e<t.length;e++)Ia(t[e])}}function Nc(e,t){return e(t)}function Cc(){}var ll=!1;function Ec(e,t,n){if(ll)return e(t,n);ll=!0;try{return Nc(e,t,n)}finally{ll=!1,(er!==null||tr!==null)&&(Cc(),jc())}}function Ur(e,t){var n=e.stateNode;if(n===null)return null;var r=_i(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Yl=!1;if(Ot)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){Yl=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{Yl=!1}function tp(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Lr=!1,Go=null,Jo=!1,Xl=null,np={onError:function(e){Lr=!0,Go=e}};function rp(e,t,n,r,o,i,l,s,a){Lr=!1,Go=null,tp.apply(np,arguments)}function op(e,t,n,r,o,i,l,s,a){if(rp.apply(this,arguments),Lr){if(Lr){var c=Go;Lr=!1,Go=null}else throw Error(E(198));Jo||(Jo=!0,Xl=c)}}function On(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Aa(e){if(On(e)!==e)throw Error(E(188))}function ip(e){var t=e.alternate;if(!t){if(t=On(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Aa(o),e;if(i===r)return Aa(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function _c(e){return e=ip(e),e!==null?Dc(e):null}function Dc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Dc(e);if(t!==null)return t;e=e.sibling}return null}var Tc=tt.unstable_scheduleCallback,Fa=tt.unstable_cancelCallback,lp=tt.unstable_shouldYield,sp=tt.unstable_requestPaint,pe=tt.unstable_now,ap=tt.unstable_getCurrentPriorityLevel,Hs=tt.unstable_ImmediatePriority,Lc=tt.unstable_UserBlockingPriority,Zo=tt.unstable_NormalPriority,up=tt.unstable_LowPriority,Pc=tt.unstable_IdlePriority,Ni=null,St=null;function cp(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Ni,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:pp,dp=Math.log,fp=Math.LN2;function pp(e){return e>>>=0,e===0?32:31-(dp(e)/fp|0)|0}var ko=64,bo=4194304;function zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=zr(s):(i&=l,i!==0&&(r=zr(i)))}else l=n&~o,l!==0?r=zr(l):i!==0&&(r=zr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),o=1<<n,r|=e[n],t&=~o;return r}function hp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-xt(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=hp(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Gl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mc(){var e=ko;return ko<<=1,!(ko&4194240)&&(ko=64),e}function sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function io(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function gp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ws(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function Oc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rc,Vs,$c,Ic,Ac,Jl=!1,So=[],Gt=null,Jt=null,Zt=null,Kr=new Map,Hr=new Map,Vt=[],xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ba(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(t.pointerId)}}function vr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=so(t),t!==null&&Vs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function yp(e,t,n,r,o){switch(t){case"focusin":return Gt=vr(Gt,e,t,n,r,o),!0;case"dragenter":return Jt=vr(Jt,e,t,n,r,o),!0;case"mouseover":return Zt=vr(Zt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Kr.set(i,vr(Kr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Hr.set(i,vr(Hr.get(i)||null,e,t,n,r,o)),!0}return!1}function Fc(e){var t=kn(e.target);if(t!==null){var n=On(t);if(n!==null){if(t=n.tag,t===13){if(t=zc(n),t!==null){e.blockedOn=t,Ac(e.priority,function(){$c(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Io(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vl=r,n.target.dispatchEvent(r),Vl=null}else return t=so(n),t!==null&&Vs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ua(e,t,n){Io(e)&&n.delete(t)}function vp(){Jl=!1,Gt!==null&&Io(Gt)&&(Gt=null),Jt!==null&&Io(Jt)&&(Jt=null),Zt!==null&&Io(Zt)&&(Zt=null),Kr.forEach(Ua),Hr.forEach(Ua)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,Jl||(Jl=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,vp)))}function Wr(e){function t(o){return wr(o,e)}if(0<So.length){wr(So[0],e);for(var n=1;n<So.length;n++){var r=So[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&wr(Gt,e),Jt!==null&&wr(Jt,e),Zt!==null&&wr(Zt,e),Kr.forEach(t),Hr.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)Fc(n),n.blockedOn===null&&Vt.shift()}var nr=At.ReactCurrentBatchConfig,ei=!0;function wp(e,t,n,r){var o=G,i=nr.transition;nr.transition=null;try{G=1,Qs(e,t,n,r)}finally{G=o,nr.transition=i}}function kp(e,t,n,r){var o=G,i=nr.transition;nr.transition=null;try{G=4,Qs(e,t,n,r)}finally{G=o,nr.transition=i}}function Qs(e,t,n,r){if(ei){var o=Zl(e,t,n,r);if(o===null)xl(e,t,r,ti,n),Ba(e,r);else if(yp(o,e,t,n,r))r.stopPropagation();else if(Ba(e,r),t&4&&-1<xp.indexOf(e)){for(;o!==null;){var i=so(o);if(i!==null&&Rc(i),i=Zl(e,t,n,r),i===null&&xl(e,t,r,ti,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else xl(e,t,r,null,n)}}var ti=null;function Zl(e,t,n,r){if(ti=null,e=Ks(r),e=kn(e),e!==null)if(t=On(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ti=e,null}function Bc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ap()){case Hs:return 1;case Lc:return 4;case Zo:case up:return 16;case Pc:return 536870912;default:return 16}default:return 16}}var Yt=null,Ys=null,Ao=null;function Uc(){if(Ao)return Ao;var e,t=Ys,n=t.length,r,o="value"in Yt?Yt.value:Yt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Ao=o.slice(e,1<r?1-r:void 0)}function Fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function Ka(){return!1}function rt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?jo:Ka,this.isPropagationStopped=Ka,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=rt(pr),lo=ce({},pr,{view:0,detail:0}),bp=rt(lo),al,ul,kr,Ci=ce({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(al=e.screenX-kr.screenX,ul=e.screenY-kr.screenY):ul=al=0,kr=e),al)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),Ha=rt(Ci),Sp=ce({},Ci,{dataTransfer:0}),jp=rt(Sp),Np=ce({},lo,{relatedTarget:0}),cl=rt(Np),Cp=ce({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ep=rt(Cp),zp=ce({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_p=rt(zp),Dp=ce({},pr,{data:0}),Wa=rt(Dp),Tp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pp[e])?!!t[e]:!1}function Gs(){return Mp}var Op=ce({},lo,{key:function(e){if(e.key){var t=Tp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gs,charCode:function(e){return e.type==="keypress"?Fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rp=rt(Op),$p=ce({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Va=rt($p),Ip=ce({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gs}),Ap=rt(Ip),Fp=ce({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bp=rt(Fp),Up=ce({},Ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kp=rt(Up),Hp=[9,13,27,32],Js=Ot&&"CompositionEvent"in window,Pr=null;Ot&&"documentMode"in document&&(Pr=document.documentMode);var Wp=Ot&&"TextEvent"in window&&!Pr,Kc=Ot&&(!Js||Pr&&8<Pr&&11>=Pr),Qa=" ",Ya=!1;function Hc(e,t){switch(e){case"keyup":return Hp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function Vp(e,t){switch(e){case"compositionend":return Wc(t);case"keypress":return t.which!==32?null:(Ya=!0,Qa);case"textInput":return e=t.data,e===Qa&&Ya?null:e;default:return null}}function Qp(e,t){if(Kn)return e==="compositionend"||!Js&&Hc(e,t)?(e=Uc(),Ao=Ys=Yt=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kc&&t.locale!=="ko"?null:t.data;default:return null}}var Yp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yp[e.type]:t==="textarea"}function Vc(e,t,n,r){Sc(r),t=ni(t,"onChange"),0<t.length&&(n=new Xs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mr=null,Vr=null;function Xp(e){rd(e,0)}function Ei(e){var t=Vn(e);if(gc(t))return e}function Gp(e,t){if(e==="change")return t}var Qc=!1;if(Ot){var dl;if(Ot){var fl="oninput"in document;if(!fl){var Ga=document.createElement("div");Ga.setAttribute("oninput","return;"),fl=typeof Ga.oninput=="function"}dl=fl}else dl=!1;Qc=dl&&(!document.documentMode||9<document.documentMode)}function Ja(){Mr&&(Mr.detachEvent("onpropertychange",Yc),Vr=Mr=null)}function Yc(e){if(e.propertyName==="value"&&Ei(Vr)){var t=[];Vc(t,Vr,e,Ks(e)),Ec(Xp,t)}}function Jp(e,t,n){e==="focusin"?(Ja(),Mr=t,Vr=n,Mr.attachEvent("onpropertychange",Yc)):e==="focusout"&&Ja()}function Zp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(Vr)}function qp(e,t){if(e==="click")return Ei(t)}function eh(e,t){if(e==="input"||e==="change")return Ei(t)}function th(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:th;function Qr(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ml.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function Za(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qa(e,t){var n=Za(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Za(n)}}function Xc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gc(){for(var e=window,t=Xo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xo(e.document)}return t}function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nh(e){var t=Gc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xc(n.ownerDocument.documentElement,n)){if(r!==null&&Zs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=qa(n,i);var l=qa(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rh=Ot&&"documentMode"in document&&11>=document.documentMode,Hn=null,ql=null,Or=null,es=!1;function eu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;es||Hn==null||Hn!==Xo(r)||(r=Hn,"selectionStart"in r&&Zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&Qr(Or,r)||(Or=r,r=ni(ql,"onSelect"),0<r.length&&(t=new Xs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hn)))}function No(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:No("Animation","AnimationEnd"),animationiteration:No("Animation","AnimationIteration"),animationstart:No("Animation","AnimationStart"),transitionend:No("Transition","TransitionEnd")},pl={},Jc={};Ot&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function zi(e){if(pl[e])return pl[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jc)return pl[e]=t[n];return e}var Zc=zi("animationend"),qc=zi("animationiteration"),ed=zi("animationstart"),td=zi("transitionend"),nd=new Map,tu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){nd.set(e,t),Mn(t,[e])}for(var hl=0;hl<tu.length;hl++){var ml=tu[hl],oh=ml.toLowerCase(),ih=ml[0].toUpperCase()+ml.slice(1);sn(oh,"on"+ih)}sn(Zc,"onAnimationEnd");sn(qc,"onAnimationIteration");sn(ed,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(td,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lh=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function nu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,op(r,t,void 0,e),e.currentTarget=null}function rd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;nu(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;nu(o,s,c),i=a}}}if(Jo)throw e=Xl,Jo=!1,Xl=null,e}function oe(e,t){var n=t[is];n===void 0&&(n=t[is]=new Set);var r=e+"__bubble";n.has(r)||(od(t,e,2,!1),n.add(r))}function gl(e,t,n){var r=0;t&&(r|=4),od(n,e,r,t)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Yr(e){if(!e[Co]){e[Co]=!0,dc.forEach(function(n){n!=="selectionchange"&&(lh.has(n)||gl(n,!1,e),gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Co]||(t[Co]=!0,gl("selectionchange",!1,t))}}function od(e,t,n,r){switch(Bc(t)){case 1:var o=wp;break;case 4:o=kp;break;default:o=Qs}n=o.bind(null,t,n,e),o=void 0,!Yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function xl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=kn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Ec(function(){var c=i,g=Ks(n),x=[];e:{var f=nd.get(e);if(f!==void 0){var v=Xs,S=e;switch(e){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":v=Rp;break;case"focusin":S="focus",v=cl;break;case"focusout":S="blur",v=cl;break;case"beforeblur":case"afterblur":v=cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ha;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=jp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ap;break;case Zc:case qc:case ed:v=Ep;break;case td:v=Bp;break;case"scroll":v=bp;break;case"wheel":v=Kp;break;case"copy":case"cut":case"paste":v=_p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Va}var j=(t&4)!==0,P=!j&&e==="scroll",m=j?f!==null?f+"Capture":null:f;j=[];for(var p=c,h;p!==null;){h=p;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,m!==null&&(w=Ur(p,m),w!=null&&j.push(Xr(p,w,h)))),P)break;p=p.return}0<j.length&&(f=new v(f,S,null,n,g),x.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==Vl&&(S=n.relatedTarget||n.fromElement)&&(kn(S)||S[Rt]))break e;if((v||f)&&(f=g.window===g?g:(f=g.ownerDocument)?f.defaultView||f.parentWindow:window,v?(S=n.relatedTarget||n.toElement,v=c,S=S?kn(S):null,S!==null&&(P=On(S),S!==P||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=c),v!==S)){if(j=Ha,w="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(j=Va,w="onPointerLeave",m="onPointerEnter",p="pointer"),P=v==null?f:Vn(v),h=S==null?f:Vn(S),f=new j(w,p+"leave",v,n,g),f.target=P,f.relatedTarget=h,w=null,kn(g)===c&&(j=new j(m,p+"enter",S,n,g),j.target=h,j.relatedTarget=P,w=j),P=w,v&&S)t:{for(j=v,m=S,p=0,h=j;h;h=Fn(h))p++;for(h=0,w=m;w;w=Fn(w))h++;for(;0<p-h;)j=Fn(j),p--;for(;0<h-p;)m=Fn(m),h--;for(;p--;){if(j===m||m!==null&&j===m.alternate)break t;j=Fn(j),m=Fn(m)}j=null}else j=null;v!==null&&ru(x,f,v,j,!1),S!==null&&P!==null&&ru(x,P,S,j,!0)}}e:{if(f=c?Vn(c):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var N=Gp;else if(Xa(f))if(Qc)N=eh;else{N=Zp;var _=Jp}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=qp);if(N&&(N=N(e,c))){Vc(x,N,n,g);break e}_&&_(e,f,c),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&Bl(f,"number",f.value)}switch(_=c?Vn(c):window,e){case"focusin":(Xa(_)||_.contentEditable==="true")&&(Hn=_,ql=c,Or=null);break;case"focusout":Or=ql=Hn=null;break;case"mousedown":es=!0;break;case"contextmenu":case"mouseup":case"dragend":es=!1,eu(x,n,g);break;case"selectionchange":if(rh)break;case"keydown":case"keyup":eu(x,n,g)}var M;if(Js)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Kn?Hc(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Kc&&n.locale!=="ko"&&(Kn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Kn&&(M=Uc()):(Yt=g,Ys="value"in Yt?Yt.value:Yt.textContent,Kn=!0)),_=ni(c,L),0<_.length&&(L=new Wa(L,e,null,n,g),x.push({event:L,listeners:_}),M?L.data=M:(M=Wc(n),M!==null&&(L.data=M)))),(M=Wp?Vp(e,n):Qp(e,n))&&(c=ni(c,"onBeforeInput"),0<c.length&&(g=new Wa("onBeforeInput","beforeinput",null,n,g),x.push({event:g,listeners:c}),g.data=M))}rd(x,t)})}function Xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ni(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ur(e,n),i!=null&&r.unshift(Xr(e,i,o)),i=Ur(e,t),i!=null&&r.push(Xr(e,i,o))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ru(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=Ur(n,i),a!=null&&l.unshift(Xr(n,a,s))):o||(a=Ur(n,i),a!=null&&l.push(Xr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var sh=/\r\n?/g,ah=/\u0000|\uFFFD/g;function ou(e){return(typeof e=="string"?e:""+e).replace(sh,`
`).replace(ah,"")}function Eo(e,t,n){if(t=ou(t),ou(e)!==t&&n)throw Error(E(425))}function ri(){}var ts=null,ns=null;function rs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var os=typeof setTimeout=="function"?setTimeout:void 0,uh=typeof clearTimeout=="function"?clearTimeout:void 0,iu=typeof Promise=="function"?Promise:void 0,ch=typeof queueMicrotask=="function"?queueMicrotask:typeof iu<"u"?function(e){return iu.resolve(null).then(e).catch(dh)}:os;function dh(e){setTimeout(function(){throw e})}function yl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Wr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hr=Math.random().toString(36).slice(2),bt="__reactFiber$"+hr,Gr="__reactProps$"+hr,Rt="__reactContainer$"+hr,is="__reactEvents$"+hr,fh="__reactListeners$"+hr,ph="__reactHandles$"+hr;function kn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lu(e);e!==null;){if(n=e[bt])return n;e=lu(e)}return t}e=n,n=e.parentNode}return null}function so(e){return e=e[bt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function _i(e){return e[Gr]||null}var ls=[],Qn=-1;function an(e){return{current:e}}function ie(e){0>Qn||(e.current=ls[Qn],ls[Qn]=null,Qn--)}function te(e,t){Qn++,ls[Qn]=e.current,e.current=t}var ln={},Pe=an(ln),Ve=an(!1),_n=ln;function lr(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Qe(e){return e=e.childContextTypes,e!=null}function oi(){ie(Ve),ie(Pe)}function su(e,t,n){if(Pe.current!==ln)throw Error(E(168));te(Pe,t),te(Ve,n)}function id(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,Jf(e)||"Unknown",o));return ce({},n,r)}function ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,_n=Pe.current,te(Pe,e),te(Ve,Ve.current),!0}function au(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=id(e,t,_n),r.__reactInternalMemoizedMergedChildContext=e,ie(Ve),ie(Pe),te(Pe,e)):ie(Ve),te(Ve,n)}var _t=null,Di=!1,vl=!1;function ld(e){_t===null?_t=[e]:_t.push(e)}function hh(e){Di=!0,ld(e)}function un(){if(!vl&&_t!==null){vl=!0;var e=0,t=G;try{var n=_t;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Di=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),Tc(Hs,un),o}finally{G=t,vl=!1}}return null}var Yn=[],Xn=0,li=null,si=0,it=[],lt=0,Dn=null,Tt=1,Lt="";function vn(e,t){Yn[Xn++]=si,Yn[Xn++]=li,li=e,si=t}function sd(e,t,n){it[lt++]=Tt,it[lt++]=Lt,it[lt++]=Dn,Dn=e;var r=Tt;e=Lt;var o=32-xt(r)-1;r&=~(1<<o),n+=1;var i=32-xt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Tt=1<<32-xt(t)+o|n<<o|r,Lt=i+e}else Tt=1<<i|n<<o|r,Lt=e}function qs(e){e.return!==null&&(vn(e,1),sd(e,1,0))}function ea(e){for(;e===li;)li=Yn[--Xn],Yn[Xn]=null,si=Yn[--Xn],Yn[Xn]=null;for(;e===Dn;)Dn=it[--lt],it[lt]=null,Lt=it[--lt],it[lt]=null,Tt=it[--lt],it[lt]=null}var et=null,qe=null,le=!1,gt=null;function ad(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,qe=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dn!==null?{id:Tt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,qe=null,!0):!1;default:return!1}}function ss(e){return(e.mode&1)!==0&&(e.flags&128)===0}function as(e){if(le){var t=qe;if(t){var n=t;if(!uu(e,t)){if(ss(e))throw Error(E(418));t=qt(n.nextSibling);var r=et;t&&uu(e,t)?ad(r,n):(e.flags=e.flags&-4097|2,le=!1,et=e)}}else{if(ss(e))throw Error(E(418));e.flags=e.flags&-4097|2,le=!1,et=e}}}function cu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function zo(e){if(e!==et)return!1;if(!le)return cu(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!rs(e.type,e.memoizedProps)),t&&(t=qe)){if(ss(e))throw ud(),Error(E(418));for(;t;)ad(e,t),t=qt(t.nextSibling)}if(cu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=et?qt(e.stateNode.nextSibling):null;return!0}function ud(){for(var e=qe;e;)e=qt(e.nextSibling)}function sr(){qe=et=null,le=!1}function ta(e){gt===null?gt=[e]:gt.push(e)}var mh=At.ReactCurrentBatchConfig;function br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function _o(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function du(e){var t=e._init;return t(e._payload)}function cd(e){function t(m,p){if(e){var h=m.deletions;h===null?(m.deletions=[p],m.flags|=16):h.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=rn(m,p),m.index=0,m.sibling=null,m}function i(m,p,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<p?(m.flags|=2,p):h):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,p,h,w){return p===null||p.tag!==6?(p=Cl(h,m.mode,w),p.return=m,p):(p=o(p,h),p.return=m,p)}function a(m,p,h,w){var N=h.type;return N===Un?g(m,p,h.props.children,w,h.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ht&&du(N)===p.type)?(w=o(p,h.props),w.ref=br(m,p,h),w.return=m,w):(w=Qo(h.type,h.key,h.props,null,m.mode,w),w.ref=br(m,p,h),w.return=m,w)}function c(m,p,h,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=El(h,m.mode,w),p.return=m,p):(p=o(p,h.children||[]),p.return=m,p)}function g(m,p,h,w,N){return p===null||p.tag!==7?(p=Nn(h,m.mode,w,N),p.return=m,p):(p=o(p,h),p.return=m,p)}function x(m,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Cl(""+p,m.mode,h),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yo:return h=Qo(p.type,p.key,p.props,null,m.mode,h),h.ref=br(m,null,p),h.return=m,h;case Bn:return p=El(p,m.mode,h),p.return=m,p;case Ht:var w=p._init;return x(m,w(p._payload),h)}if(Er(p)||xr(p))return p=Nn(p,m.mode,h,null),p.return=m,p;_o(m,p)}return null}function f(m,p,h,w){var N=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return N!==null?null:s(m,p,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case yo:return h.key===N?a(m,p,h,w):null;case Bn:return h.key===N?c(m,p,h,w):null;case Ht:return N=h._init,f(m,p,N(h._payload),w)}if(Er(h)||xr(h))return N!==null?null:g(m,p,h,w,null);_o(m,h)}return null}function v(m,p,h,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(h)||null,s(p,m,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case yo:return m=m.get(w.key===null?h:w.key)||null,a(p,m,w,N);case Bn:return m=m.get(w.key===null?h:w.key)||null,c(p,m,w,N);case Ht:var _=w._init;return v(m,p,h,_(w._payload),N)}if(Er(w)||xr(w))return m=m.get(h)||null,g(p,m,w,N,null);_o(p,w)}return null}function S(m,p,h,w){for(var N=null,_=null,M=p,L=p=0,A=null;M!==null&&L<h.length;L++){M.index>L?(A=M,M=null):A=M.sibling;var I=f(m,M,h[L],w);if(I===null){M===null&&(M=A);break}e&&M&&I.alternate===null&&t(m,M),p=i(I,p,L),_===null?N=I:_.sibling=I,_=I,M=A}if(L===h.length)return n(m,M),le&&vn(m,L),N;if(M===null){for(;L<h.length;L++)M=x(m,h[L],w),M!==null&&(p=i(M,p,L),_===null?N=M:_.sibling=M,_=M);return le&&vn(m,L),N}for(M=r(m,M);L<h.length;L++)A=v(M,m,L,h[L],w),A!==null&&(e&&A.alternate!==null&&M.delete(A.key===null?L:A.key),p=i(A,p,L),_===null?N=A:_.sibling=A,_=A);return e&&M.forEach(function(W){return t(m,W)}),le&&vn(m,L),N}function j(m,p,h,w){var N=xr(h);if(typeof N!="function")throw Error(E(150));if(h=N.call(h),h==null)throw Error(E(151));for(var _=N=null,M=p,L=p=0,A=null,I=h.next();M!==null&&!I.done;L++,I=h.next()){M.index>L?(A=M,M=null):A=M.sibling;var W=f(m,M,I.value,w);if(W===null){M===null&&(M=A);break}e&&M&&W.alternate===null&&t(m,M),p=i(W,p,L),_===null?N=W:_.sibling=W,_=W,M=A}if(I.done)return n(m,M),le&&vn(m,L),N;if(M===null){for(;!I.done;L++,I=h.next())I=x(m,I.value,w),I!==null&&(p=i(I,p,L),_===null?N=I:_.sibling=I,_=I);return le&&vn(m,L),N}for(M=r(m,M);!I.done;L++,I=h.next())I=v(M,m,L,I.value,w),I!==null&&(e&&I.alternate!==null&&M.delete(I.key===null?L:I.key),p=i(I,p,L),_===null?N=I:_.sibling=I,_=I);return e&&M.forEach(function(se){return t(m,se)}),le&&vn(m,L),N}function P(m,p,h,w){if(typeof h=="object"&&h!==null&&h.type===Un&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case yo:e:{for(var N=h.key,_=p;_!==null;){if(_.key===N){if(N=h.type,N===Un){if(_.tag===7){n(m,_.sibling),p=o(_,h.props.children),p.return=m,m=p;break e}}else if(_.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ht&&du(N)===_.type){n(m,_.sibling),p=o(_,h.props),p.ref=br(m,_,h),p.return=m,m=p;break e}n(m,_);break}else t(m,_);_=_.sibling}h.type===Un?(p=Nn(h.props.children,m.mode,w,h.key),p.return=m,m=p):(w=Qo(h.type,h.key,h.props,null,m.mode,w),w.ref=br(m,p,h),w.return=m,m=w)}return l(m);case Bn:e:{for(_=h.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(m,p.sibling),p=o(p,h.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=El(h,m.mode,w),p.return=m,m=p}return l(m);case Ht:return _=h._init,P(m,p,_(h._payload),w)}if(Er(h))return S(m,p,h,w);if(xr(h))return j(m,p,h,w);_o(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,h),p.return=m,m=p):(n(m,p),p=Cl(h,m.mode,w),p.return=m,m=p),l(m)):n(m,p)}return P}var ar=cd(!0),dd=cd(!1),ai=an(null),ui=null,Gn=null,na=null;function ra(){na=Gn=ui=null}function oa(e){var t=ai.current;ie(ai),e._currentValue=t}function us(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rr(e,t){ui=e,na=Gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(na!==e)if(e={context:e,memoizedValue:t,next:null},Gn===null){if(ui===null)throw Error(E(308));Gn=e,ui.dependencies={lanes:0,firstContext:e}}else Gn=Gn.next=e;return t}var bn=null;function ia(e){bn===null?bn=[e]:bn.push(e)}function fd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ia(t)):(n.next=o.next,o.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function la(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,$t(e,n)}return o=r.interleaved,o===null?(t.next=t,ia(r)):(t.next=o.next,o.next=t),r.interleaved=t,$t(e,n)}function Bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ws(e,n)}}function fu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ci(e,t,n,r){var o=e.updateQueue;Wt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=a))}if(i!==null){var x=o.baseState;l=0,g=c=a=null,s=i;do{var f=s.lane,v=s.eventTime;if((r&f)===f){g!==null&&(g=g.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,j=s;switch(f=t,v=n,j.tag){case 1:if(S=j.payload,typeof S=="function"){x=S.call(v,x,f);break e}x=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=j.payload,f=typeof S=="function"?S.call(v,x,f):S,f==null)break e;x=ce({},x,f);break e;case 2:Wt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else v={eventTime:v,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=v,a=x):g=g.next=v,l|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(g===null&&(a=x),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Ln|=l,e.lanes=l,e.memoizedState=x}}function pu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var ao={},jt=an(ao),Jr=an(ao),Zr=an(ao);function Sn(e){if(e===ao)throw Error(E(174));return e}function sa(e,t){switch(te(Zr,t),te(Jr,e),te(jt,ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}ie(jt),te(jt,t)}function ur(){ie(jt),ie(Jr),ie(Zr)}function hd(e){Sn(Zr.current);var t=Sn(jt.current),n=Kl(t,e.type);t!==n&&(te(Jr,e),te(jt,n))}function aa(e){Jr.current===e&&(ie(jt),ie(Jr))}var ae=an(0);function di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wl=[];function ua(){for(var e=0;e<wl.length;e++)wl[e]._workInProgressVersionPrimary=null;wl.length=0}var Uo=At.ReactCurrentDispatcher,kl=At.ReactCurrentBatchConfig,Tn=0,ue=null,xe=null,ve=null,fi=!1,Rr=!1,qr=0,gh=0;function ze(){throw Error(E(321))}function ca(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function da(e,t,n,r,o,i){if(Tn=i,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Uo.current=e===null||e.memoizedState===null?wh:kh,e=n(r,o),Rr){i=0;do{if(Rr=!1,qr=0,25<=i)throw Error(E(301));i+=1,ve=xe=null,t.updateQueue=null,Uo.current=bh,e=n(r,o)}while(Rr)}if(Uo.current=pi,t=xe!==null&&xe.next!==null,Tn=0,ve=xe=ue=null,fi=!1,t)throw Error(E(300));return e}function fa(){var e=qr!==0;return qr=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ue.memoizedState=ve=e:ve=ve.next=e,ve}function ct(){if(xe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=ve===null?ue.memoizedState:ve.next;if(t!==null)ve=t,xe=e;else{if(e===null)throw Error(E(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},ve===null?ue.memoizedState=ve=e:ve=ve.next=e}return ve}function eo(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=ct(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=xe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var g=c.lane;if((Tn&g)===g)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var x={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=x,l=r):a=a.next=x,ue.lanes|=g,Ln|=g}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,vt(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ue.lanes|=i,Ln|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sl(e){var t=ct(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);vt(i,t.memoizedState)||(We=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function md(){}function gd(e,t){var n=ue,r=ct(),o=t(),i=!vt(r.memoizedState,o);if(i&&(r.memoizedState=o,We=!0),r=r.queue,pa(vd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,to(9,yd.bind(null,n,r,o,t),void 0,null),we===null)throw Error(E(349));Tn&30||xd(n,t,o)}return o}function xd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yd(e,t,n,r){t.value=n,t.getSnapshot=r,wd(t)&&kd(e)}function vd(e,t,n){return n(function(){wd(t)&&kd(e)})}function wd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function kd(e){var t=$t(e,1);t!==null&&yt(t,e,1,-1)}function hu(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:e},t.queue=e,e=e.dispatch=vh.bind(null,ue,e),[t.memoizedState,e]}function to(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bd(){return ct().memoizedState}function Ko(e,t,n,r){var o=kt();ue.flags|=e,o.memoizedState=to(1|t,n,void 0,r===void 0?null:r)}function Ti(e,t,n,r){var o=ct();r=r===void 0?null:r;var i=void 0;if(xe!==null){var l=xe.memoizedState;if(i=l.destroy,r!==null&&ca(r,l.deps)){o.memoizedState=to(t,n,i,r);return}}ue.flags|=e,o.memoizedState=to(1|t,n,i,r)}function mu(e,t){return Ko(8390656,8,e,t)}function pa(e,t){return Ti(2048,8,e,t)}function Sd(e,t){return Ti(4,2,e,t)}function jd(e,t){return Ti(4,4,e,t)}function Nd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cd(e,t,n){return n=n!=null?n.concat([e]):null,Ti(4,4,Nd.bind(null,t,e),n)}function ha(){}function Ed(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ca(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zd(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ca(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _d(e,t,n){return Tn&21?(vt(n,t)||(n=Mc(),ue.lanes|=n,Ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function xh(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=kl.transition;kl.transition={};try{e(!1),t()}finally{G=n,kl.transition=r}}function Dd(){return ct().memoizedState}function yh(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Td(e))Ld(t,n);else if(n=fd(e,t,n,r),n!==null){var o=Ie();yt(n,e,r,o),Pd(n,t,r)}}function vh(e,t,n){var r=nn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Td(e))Ld(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,vt(s,l)){var a=t.interleaved;a===null?(o.next=o,ia(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=fd(e,t,o,r),n!==null&&(o=Ie(),yt(n,e,r,o),Pd(n,t,r))}}function Td(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Ld(e,t){Rr=fi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ws(e,n)}}var pi={readContext:ut,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},wh={readContext:ut,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:mu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ko(4194308,4,Nd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ko(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yh.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:hu,useDebugValue:ha,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=hu(!1),t=e[0];return e=xh.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,o=kt();if(le){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),we===null)throw Error(E(349));Tn&30||xd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,mu(vd.bind(null,r,i,e),[e]),r.flags|=2048,to(9,yd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=kt(),t=we.identifierPrefix;if(le){var n=Lt,r=Tt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kh={readContext:ut,useCallback:Ed,useContext:ut,useEffect:pa,useImperativeHandle:Cd,useInsertionEffect:Sd,useLayoutEffect:jd,useMemo:zd,useReducer:bl,useRef:bd,useState:function(){return bl(eo)},useDebugValue:ha,useDeferredValue:function(e){var t=ct();return _d(t,xe.memoizedState,e)},useTransition:function(){var e=bl(eo)[0],t=ct().memoizedState;return[e,t]},useMutableSource:md,useSyncExternalStore:gd,useId:Dd,unstable_isNewReconciler:!1},bh={readContext:ut,useCallback:Ed,useContext:ut,useEffect:pa,useImperativeHandle:Cd,useInsertionEffect:Sd,useLayoutEffect:jd,useMemo:zd,useReducer:Sl,useRef:bd,useState:function(){return Sl(eo)},useDebugValue:ha,useDeferredValue:function(e){var t=ct();return xe===null?t.memoizedState=e:_d(t,xe.memoizedState,e)},useTransition:function(){var e=Sl(eo)[0],t=ct().memoizedState;return[e,t]},useMutableSource:md,useSyncExternalStore:gd,useId:Dd,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function cs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Li={isMounted:function(e){return(e=e._reactInternals)?On(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=nn(e),i=Mt(r,o);i.payload=t,n!=null&&(i.callback=n),t=en(e,i,o),t!==null&&(yt(t,e,o,r),Bo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=nn(e),i=Mt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=en(e,i,o),t!==null&&(yt(t,e,o,r),Bo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=nn(e),o=Mt(n,r);o.tag=2,t!=null&&(o.callback=t),t=en(e,o,r),t!==null&&(yt(t,e,r,n),Bo(t,e,r))}};function gu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Qr(n,r)||!Qr(o,i):!0}function Md(e,t,n){var r=!1,o=ln,i=t.contextType;return typeof i=="object"&&i!==null?i=ut(i):(o=Qe(t)?_n:Pe.current,r=t.contextTypes,i=(r=r!=null)?lr(e,o):ln),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Li,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function xu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Li.enqueueReplaceState(t,t.state,null)}function ds(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},la(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ut(i):(i=Qe(t)?_n:Pe.current,o.context=lr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(cs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Li.enqueueReplaceState(o,o.state,null),ci(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,t){try{var n="",r=t;do n+=Gf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sh=typeof WeakMap=="function"?WeakMap:Map;function Od(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mi||(mi=!0,bs=r),fs(e,t)},n}function Rd(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){fs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){fs(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=$h.bind(null,e,t,n),t.then(e,e))}function vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var jh=At.ReactCurrentOwner,We=!1;function Re(e,t,n,r){t.child=e===null?dd(t,null,n,r):ar(t,e.child,n,r)}function ku(e,t,n,r,o){n=n.render;var i=t.ref;return rr(t,o),r=da(e,t,n,r,i,o),n=fa(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,It(e,t,o)):(le&&n&&qs(t),t.flags|=1,Re(e,t,r,o),t.child)}function bu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ba(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,$d(e,t,i,r,o)):(e=Qo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Qr,n(l,r)&&e.ref===t.ref)return It(e,t,o)}return t.flags|=1,e=rn(i,r),e.ref=t.ref,e.return=t,t.child=e}function $d(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Qr(i,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,It(e,t,o)}return ps(e,t,n,r,o)}function Id(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Zn,Je),Je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Zn,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(Zn,Je),Je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,te(Zn,Je),Je|=r;return Re(e,t,o,n),t.child}function Ad(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ps(e,t,n,r,o){var i=Qe(n)?_n:Pe.current;return i=lr(t,i),rr(t,o),n=da(e,t,n,r,i,o),r=fa(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,It(e,t,o)):(le&&r&&qs(t),t.flags|=1,Re(e,t,n,o),t.child)}function Su(e,t,n,r,o){if(Qe(n)){var i=!0;ii(t)}else i=!1;if(rr(t,o),t.stateNode===null)Ho(e,t),Md(t,n,r),ds(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=ut(c):(c=Qe(n)?_n:Pe.current,c=lr(t,c));var g=n.getDerivedStateFromProps,x=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&xu(t,l,r,c),Wt=!1;var f=t.memoizedState;l.state=f,ci(t,r,l,o),a=t.memoizedState,s!==r||f!==a||Ve.current||Wt?(typeof g=="function"&&(cs(t,n,g,r),a=t.memoizedState),(s=Wt||gu(t,n,s,r,f,a,c))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,pd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ht(t.type,s),l.props=c,x=t.pendingProps,f=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=ut(a):(a=Qe(n)?_n:Pe.current,a=lr(t,a));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==x||f!==a)&&xu(t,l,r,a),Wt=!1,f=t.memoizedState,l.state=f,ci(t,r,l,o);var S=t.memoizedState;s!==x||f!==S||Ve.current||Wt?(typeof v=="function"&&(cs(t,n,v,r),S=t.memoizedState),(c=Wt||gu(t,n,c,r,f,S,a)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return hs(e,t,n,r,i,o)}function hs(e,t,n,r,o,i){Ad(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&au(t,n,!1),It(e,t,i);r=t.stateNode,jh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ar(t,e.child,null,i),t.child=ar(t,null,s,i)):Re(e,t,s,i),t.memoizedState=r.state,o&&au(t,n,!0),t.child}function Fd(e){var t=e.stateNode;t.pendingContext?su(e,t.pendingContext,t.pendingContext!==t.context):t.context&&su(e,t.context,!1),sa(e,t.containerInfo)}function ju(e,t,n,r,o){return sr(),ta(o),t.flags|=256,Re(e,t,n,r),t.child}var ms={dehydrated:null,treeContext:null,retryLane:0};function gs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bd(e,t,n){var r=t.pendingProps,o=ae.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),te(ae,o&1),e===null)return as(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Oi(l,r,0,null),e=Nn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=gs(n),t.memoizedState=ms,e):ma(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Nh(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=rn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=rn(s,i):(i=Nn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?gs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ms,r}return i=e.child,e=i.sibling,r=rn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ma(e,t){return t=Oi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Do(e,t,n,r){return r!==null&&ta(r),ar(t,e.child,null,n),e=ma(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=jl(Error(E(422))),Do(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Oi({mode:"visible",children:r.children},o,0,null),i=Nn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ar(t,e.child,null,l),t.child.memoizedState=gs(l),t.memoizedState=ms,i);if(!(t.mode&1))return Do(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(E(419)),r=jl(i,r,void 0),Do(e,t,l,r)}if(s=(l&e.childLanes)!==0,We||s){if(r=we,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,$t(e,o),yt(r,e,o,-1))}return ka(),r=jl(Error(E(421))),Do(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ih.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,qe=qt(o.nextSibling),et=t,le=!0,gt=null,e!==null&&(it[lt++]=Tt,it[lt++]=Lt,it[lt++]=Dn,Tt=e.id,Lt=e.overflow,Dn=t),t=ma(t,r.children),t.flags|=4096,t)}function Nu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),us(e.return,t,n)}function Nl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ud(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Re(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nu(e,n,t);else if(e.tag===19)Nu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ae,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&di(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Nl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&di(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Nl(t,!0,n,null,i);break;case"together":Nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ch(e,t,n){switch(t.tag){case 3:Fd(t),sr();break;case 5:hd(t);break;case 1:Qe(t.type)&&ii(t);break;case 4:sa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;te(ai,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?Bd(e,t,n):(te(ae,ae.current&1),e=It(e,t,n),e!==null?e.sibling:null);te(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ud(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,Id(e,t,n)}return It(e,t,n)}var Kd,xs,Hd,Wd;Kd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xs=function(){};Hd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Sn(jt.current);var i=null;switch(n){case"input":o=Al(e,o),r=Al(e,r),i=[];break;case"select":o=ce({},o,{value:void 0}),r=ce({},r,{value:void 0}),i=[];break;case"textarea":o=Ul(e,o),r=Ul(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ri)}Hl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&oe("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Wd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sr(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Eh(e,t,n){var r=t.pendingProps;switch(ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Qe(t.type)&&oi(),_e(t),null;case 3:return r=t.stateNode,ur(),ie(Ve),ie(Pe),ua(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(Ns(gt),gt=null))),xs(e,t),_e(t),null;case 5:aa(t);var o=Sn(Zr.current);if(n=t.type,e!==null&&t.stateNode!=null)Hd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return _e(t),null}if(e=Sn(jt.current),zo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[bt]=t,r[Gr]=i,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(o=0;o<_r.length;o++)oe(_r[o],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Ma(r,i),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},oe("invalid",r);break;case"textarea":Ra(r,i),oe("invalid",r)}Hl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Eo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Eo(r.textContent,s,e),o=["children",""+s]):Fr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&oe("scroll",r)}switch(n){case"input":vo(r),Oa(r,i,!0);break;case"textarea":vo(r),$a(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ri)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[bt]=t,e[Gr]=r,Kd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Wl(n,r),n){case"dialog":oe("cancel",e),oe("close",e),o=r;break;case"iframe":case"object":case"embed":oe("load",e),o=r;break;case"video":case"audio":for(o=0;o<_r.length;o++)oe(_r[o],e);o=r;break;case"source":oe("error",e),o=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),o=r;break;case"details":oe("toggle",e),o=r;break;case"input":Ma(e,r),o=Al(e,r),oe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ce({},r,{value:void 0}),oe("invalid",e);break;case"textarea":Ra(e,r),o=Ul(e,r),oe("invalid",e);break;default:o=r}Hl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?bc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&wc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Br(e,a):typeof a=="number"&&Br(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Fr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&oe("scroll",e):a!=null&&As(e,i,a,l))}switch(n){case"input":vo(e),Oa(e,r,!1);break;case"textarea":vo(e),$a(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ri)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)Wd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Sn(Zr.current),Sn(jt.current),zo(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(i=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:Eo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Eo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return _e(t),null;case 13:if(ie(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&qe!==null&&t.mode&1&&!(t.flags&128))ud(),sr(),t.flags|=98560,i=!1;else if(i=zo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[bt]=t}else sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else gt!==null&&(Ns(gt),gt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?ye===0&&(ye=3):ka())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return ur(),xs(e,t),e===null&&Yr(t.stateNode.containerInfo),_e(t),null;case 10:return oa(t.type._context),_e(t),null;case 17:return Qe(t.type)&&oi(),_e(t),null;case 19:if(ie(ae),i=t.memoizedState,i===null)return _e(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Sr(i,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=di(e),l!==null){for(t.flags|=128,Sr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ae,ae.current&1|2),t.child}e=e.sibling}i.tail!==null&&pe()>dr&&(t.flags|=128,r=!0,Sr(i,!1),t.lanes=4194304)}else{if(!r)if(e=di(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!le)return _e(t),null}else 2*pe()-i.renderingStartTime>dr&&n!==1073741824&&(t.flags|=128,r=!0,Sr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=pe(),t.sibling=null,n=ae.current,te(ae,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return wa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function zh(e,t){switch(ea(t),t.tag){case 1:return Qe(t.type)&&oi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),ie(Ve),ie(Pe),ua(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return aa(t),null;case 13:if(ie(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ae),null;case 4:return ur(),null;case 10:return oa(t.type._context),null;case 22:case 23:return wa(),null;case 24:return null;default:return null}}var To=!1,De=!1,_h=typeof WeakSet=="function"?WeakSet:Set,$=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function ys(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Cu=!1;function Dh(e,t){if(ts=ei,e=Gc(),Zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,g=0,x=e,f=null;t:for(;;){for(var v;x!==n||o!==0&&x.nodeType!==3||(s=l+o),x!==i||r!==0&&x.nodeType!==3||(a=l+r),x.nodeType===3&&(l+=x.nodeValue.length),(v=x.firstChild)!==null;)f=x,x=v;for(;;){if(x===e)break t;if(f===n&&++c===o&&(s=l),f===i&&++g===r&&(a=l),(v=x.nextSibling)!==null)break;x=f,f=x.parentNode}x=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ns={focusedElem:e,selectionRange:n},ei=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var j=S.memoizedProps,P=S.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?j:ht(t.type,j),P);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){fe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return S=Cu,Cu=!1,S}function $r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ys(t,n,i)}o=o.next}while(o!==r)}}function Pi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vd(e){var t=e.alternate;t!==null&&(e.alternate=null,Vd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[Gr],delete t[is],delete t[fh],delete t[ph])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qd(e){return e.tag===5||e.tag===3||e.tag===4}function Eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ri));else if(r!==4&&(e=e.child,e!==null))for(ws(e,t,n),e=e.sibling;e!==null;)ws(e,t,n),e=e.sibling}function ks(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}var Se=null,mt=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Yd(e,t,n),n=n.sibling}function Yd(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Ni,n)}catch{}switch(n.tag){case 5:De||Jn(n,t);case 6:var r=Se,o=mt;Se=null,Kt(e,t,n),Se=r,mt=o,Se!==null&&(mt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(mt?(e=Se,n=n.stateNode,e.nodeType===8?yl(e.parentNode,n):e.nodeType===1&&yl(e,n),Wr(e)):yl(Se,n.stateNode));break;case 4:r=Se,o=mt,Se=n.stateNode.containerInfo,mt=!0,Kt(e,t,n),Se=r,mt=o;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ys(n,t,l),o=o.next}while(o!==r)}Kt(e,t,n);break;case 1:if(!De&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){fe(n,t,s)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Kt(e,t,n),De=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _h),t.forEach(function(r){var o=Ah.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Se=s.stateNode,mt=!1;break e;case 3:Se=s.stateNode.containerInfo,mt=!0;break e;case 4:Se=s.stateNode.containerInfo,mt=!0;break e}s=s.return}if(Se===null)throw Error(E(160));Yd(i,l,o),Se=null,mt=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){fe(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xd(t,e),t=t.sibling}function Xd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),wt(e),r&4){try{$r(3,e,e.return),Pi(3,e)}catch(j){fe(e,e.return,j)}try{$r(5,e,e.return)}catch(j){fe(e,e.return,j)}}break;case 1:pt(t,e),wt(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(pt(t,e),wt(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var o=e.stateNode;try{Br(o,"")}catch(j){fe(e,e.return,j)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&xc(o,i),Wl(s,l);var c=Wl(s,i);for(l=0;l<a.length;l+=2){var g=a[l],x=a[l+1];g==="style"?bc(o,x):g==="dangerouslySetInnerHTML"?wc(o,x):g==="children"?Br(o,x):As(o,g,x,c)}switch(s){case"input":Fl(o,i);break;case"textarea":yc(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?qn(o,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?qn(o,!!i.multiple,i.defaultValue,!0):qn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Gr]=i}catch(j){fe(e,e.return,j)}}break;case 6:if(pt(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(j){fe(e,e.return,j)}}break;case 3:if(pt(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wr(t.containerInfo)}catch(j){fe(e,e.return,j)}break;case 4:pt(t,e),wt(e);break;case 13:pt(t,e),wt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ya=pe())),r&4&&zu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(De=(c=De)||g,pt(t,e),De=c):pt(t,e),wt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for($=e,g=e.child;g!==null;){for(x=$=g;$!==null;){switch(f=$,v=f.child,f.tag){case 0:case 11:case 14:case 15:$r(4,f,f.return);break;case 1:Jn(f,f.return);var S=f.stateNode;if(typeof S.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(j){fe(r,n,j)}}break;case 5:Jn(f,f.return);break;case 22:if(f.memoizedState!==null){Du(x);continue}}v!==null?(v.return=f,$=v):Du(x)}g=g.sibling}e:for(g=null,x=e;;){if(x.tag===5){if(g===null){g=x;try{o=x.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=x.stateNode,a=x.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=kc("display",l))}catch(j){fe(e,e.return,j)}}}else if(x.tag===6){if(g===null)try{x.stateNode.nodeValue=c?"":x.memoizedProps}catch(j){fe(e,e.return,j)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;g===x&&(g=null),x=x.return}g===x&&(g=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:pt(t,e),wt(e),r&4&&zu(e);break;case 21:break;default:pt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qd(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Br(o,""),r.flags&=-33);var i=Eu(e);ks(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Eu(e);ws(e,s,l);break;default:throw Error(E(161))}}catch(a){fe(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Th(e,t,n){$=e,Gd(e)}function Gd(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||To;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||De;s=To;var c=De;if(To=l,(De=a)&&!c)for($=o;$!==null;)l=$,a=l.child,l.tag===22&&l.memoizedState!==null?Tu(o):a!==null?(a.return=l,$=a):Tu(o);for(;i!==null;)$=i,Gd(i),i=i.sibling;$=o,To=s,De=c}_u(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):_u(e)}}function _u(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||Pi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&pu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var x=g.dehydrated;x!==null&&Wr(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}De||t.flags&512&&vs(t)}catch(f){fe(t,t.return,f)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Du(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Tu(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pi(4,t)}catch(a){fe(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){fe(t,o,a)}}var i=t.return;try{vs(t)}catch(a){fe(t,i,a)}break;case 5:var l=t.return;try{vs(t)}catch(a){fe(t,l,a)}}}catch(a){fe(t,t.return,a)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var Lh=Math.ceil,hi=At.ReactCurrentDispatcher,ga=At.ReactCurrentOwner,at=At.ReactCurrentBatchConfig,Y=0,we=null,he=null,je=0,Je=0,Zn=an(0),ye=0,no=null,Ln=0,Mi=0,xa=0,Ir=null,He=null,ya=0,dr=1/0,zt=null,mi=!1,bs=null,tn=null,Lo=!1,Xt=null,gi=0,Ar=0,Ss=null,Wo=-1,Vo=0;function Ie(){return Y&6?pe():Wo!==-1?Wo:Wo=pe()}function nn(e){return e.mode&1?Y&2&&je!==0?je&-je:mh.transition!==null?(Vo===0&&(Vo=Mc()),Vo):(e=G,e!==0||(e=window.event,e=e===void 0?16:Bc(e.type)),e):1}function yt(e,t,n,r){if(50<Ar)throw Ar=0,Ss=null,Error(E(185));io(e,n,r),(!(Y&2)||e!==we)&&(e===we&&(!(Y&2)&&(Mi|=n),ye===4&&Qt(e,je)),Ye(e,r),n===1&&Y===0&&!(t.mode&1)&&(dr=pe()+500,Di&&un()))}function Ye(e,t){var n=e.callbackNode;mp(e,t);var r=qo(e,e===we?je:0);if(r===0)n!==null&&Fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fa(n),t===1)e.tag===0?hh(Lu.bind(null,e)):ld(Lu.bind(null,e)),ch(function(){!(Y&6)&&un()}),n=null;else{switch(Oc(r)){case 1:n=Hs;break;case 4:n=Lc;break;case 16:n=Zo;break;case 536870912:n=Pc;break;default:n=Zo}n=of(n,Jd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jd(e,t){if(Wo=-1,Vo=0,Y&6)throw Error(E(327));var n=e.callbackNode;if(or()&&e.callbackNode!==n)return null;var r=qo(e,e===we?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xi(e,r);else{t=r;var o=Y;Y|=2;var i=qd();(we!==e||je!==t)&&(zt=null,dr=pe()+500,jn(e,t));do try{Oh();break}catch(s){Zd(e,s)}while(!0);ra(),hi.current=i,Y=o,he!==null?t=0:(we=null,je=0,t=ye)}if(t!==0){if(t===2&&(o=Gl(e),o!==0&&(r=o,t=js(e,o))),t===1)throw n=no,jn(e,0),Qt(e,r),Ye(e,pe()),n;if(t===6)Qt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Ph(o)&&(t=xi(e,r),t===2&&(i=Gl(e),i!==0&&(r=i,t=js(e,i))),t===1))throw n=no,jn(e,0),Qt(e,r),Ye(e,pe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:wn(e,He,zt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=ya+500-pe(),10<t)){if(qo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=os(wn.bind(null,e,He,zt),t);break}wn(e,He,zt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-xt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lh(r/1960))-r,10<r){e.timeoutHandle=os(wn.bind(null,e,He,zt),r);break}wn(e,He,zt);break;case 5:wn(e,He,zt);break;default:throw Error(E(329))}}}return Ye(e,pe()),e.callbackNode===n?Jd.bind(null,e):null}function js(e,t){var n=Ir;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=xi(e,t),e!==2&&(t=He,He=n,t!==null&&Ns(t)),e}function Ns(e){He===null?He=e:He.push.apply(He,e)}function Ph(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!vt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~xa,t&=~Mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function Lu(e){if(Y&6)throw Error(E(327));or();var t=qo(e,0);if(!(t&1))return Ye(e,pe()),null;var n=xi(e,t);if(e.tag!==0&&n===2){var r=Gl(e);r!==0&&(t=r,n=js(e,r))}if(n===1)throw n=no,jn(e,0),Qt(e,t),Ye(e,pe()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,He,zt),Ye(e,pe()),null}function va(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(dr=pe()+500,Di&&un())}}function Pn(e){Xt!==null&&Xt.tag===0&&!(Y&6)&&or();var t=Y;Y|=1;var n=at.transition,r=G;try{if(at.transition=null,G=1,e)return e()}finally{G=r,at.transition=n,Y=t,!(Y&6)&&un()}}function wa(){Je=Zn.current,ie(Zn)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,uh(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(ea(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oi();break;case 3:ur(),ie(Ve),ie(Pe),ua();break;case 5:aa(r);break;case 4:ur();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:oa(r.type._context);break;case 22:case 23:wa()}n=n.return}if(we=e,he=e=rn(e.current,null),je=Je=t,ye=0,no=null,xa=Mi=Ln=0,He=Ir=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}bn=null}return e}function Zd(e,t){do{var n=he;try{if(ra(),Uo.current=pi,fi){for(var r=ue.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}fi=!1}if(Tn=0,ve=xe=ue=null,Rr=!1,qr=0,ga.current=null,n===null||n.return===null){ye=1,no=t,he=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=je,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,g=s,x=g.tag;if(!(g.mode&1)&&(x===0||x===11||x===15)){var f=g.alternate;f?(g.updateQueue=f.updateQueue,g.memoizedState=f.memoizedState,g.lanes=f.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=vu(l);if(v!==null){v.flags&=-257,wu(v,l,s,i,t),v.mode&1&&yu(i,c,t),t=v,a=c;var S=t.updateQueue;if(S===null){var j=new Set;j.add(a),t.updateQueue=j}else S.add(a);break e}else{if(!(t&1)){yu(i,c,t),ka();break e}a=Error(E(426))}}else if(le&&s.mode&1){var P=vu(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),wu(P,l,s,i,t),ta(cr(a,s));break e}}i=a=cr(a,s),ye!==4&&(ye=2),Ir===null?Ir=[i]:Ir.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Od(i,a,t);fu(i,m);break e;case 1:s=a;var p=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(tn===null||!tn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Rd(i,s,t);fu(i,w);break e}}i=i.return}while(i!==null)}tf(n)}catch(N){t=N,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function qd(){var e=hi.current;return hi.current=pi,e===null?pi:e}function ka(){(ye===0||ye===3||ye===2)&&(ye=4),we===null||!(Ln&268435455)&&!(Mi&268435455)||Qt(we,je)}function xi(e,t){var n=Y;Y|=2;var r=qd();(we!==e||je!==t)&&(zt=null,jn(e,t));do try{Mh();break}catch(o){Zd(e,o)}while(!0);if(ra(),Y=n,hi.current=r,he!==null)throw Error(E(261));return we=null,je=0,ye}function Mh(){for(;he!==null;)ef(he)}function Oh(){for(;he!==null&&!lp();)ef(he)}function ef(e){var t=rf(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?tf(e):he=t,ga.current=null}function tf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zh(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,he=null;return}}else if(n=Eh(n,t,Je),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ye===0&&(ye=5)}function wn(e,t,n){var r=G,o=at.transition;try{at.transition=null,G=1,Rh(e,t,n,r)}finally{at.transition=o,G=r}return null}function Rh(e,t,n,r){do or();while(Xt!==null);if(Y&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(gp(e,i),e===we&&(he=we=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lo||(Lo=!0,of(Zo,function(){return or(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=at.transition,at.transition=null;var l=G;G=1;var s=Y;Y|=4,ga.current=null,Dh(e,n),Xd(n,e),nh(ns),ei=!!ts,ns=ts=null,e.current=n,Th(n),sp(),Y=s,G=l,at.transition=i}else e.current=n;if(Lo&&(Lo=!1,Xt=e,gi=o),i=e.pendingLanes,i===0&&(tn=null),cp(n.stateNode),Ye(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(mi)throw mi=!1,e=bs,bs=null,e;return gi&1&&e.tag!==0&&or(),i=e.pendingLanes,i&1?e===Ss?Ar++:(Ar=0,Ss=e):Ar=0,un(),null}function or(){if(Xt!==null){var e=Oc(gi),t=at.transition,n=G;try{if(at.transition=null,G=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,gi=0,Y&6)throw Error(E(331));var o=Y;for(Y|=4,$=e.current;$!==null;){var i=$,l=i.child;if($.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for($=c;$!==null;){var g=$;switch(g.tag){case 0:case 11:case 15:$r(8,g,i)}var x=g.child;if(x!==null)x.return=g,$=x;else for(;$!==null;){g=$;var f=g.sibling,v=g.return;if(Vd(g),g===c){$=null;break}if(f!==null){f.return=v,$=f;break}$=v}}}var S=i.alternate;if(S!==null){var j=S.child;if(j!==null){S.child=null;do{var P=j.sibling;j.sibling=null,j=P}while(j!==null)}}$=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,$=l;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:$r(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,$=m;break e}$=i.return}}var p=e.current;for($=p;$!==null;){l=$;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,$=h;else e:for(l=p;$!==null;){if(s=$,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Pi(9,s)}}catch(N){fe(s,s.return,N)}if(s===l){$=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,$=w;break e}$=s.return}}if(Y=o,un(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Ni,e)}catch{}r=!0}return r}finally{G=n,at.transition=t}}return!1}function Pu(e,t,n){t=cr(n,t),t=Od(e,t,1),e=en(e,t,1),t=Ie(),e!==null&&(io(e,1,t),Ye(e,t))}function fe(e,t,n){if(e.tag===3)Pu(e,e,n);else for(;t!==null;){if(t.tag===3){Pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=cr(n,e),e=Rd(t,e,1),t=en(t,e,1),e=Ie(),t!==null&&(io(t,1,e),Ye(t,e));break}}t=t.return}}function $h(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(je&n)===n&&(ye===4||ye===3&&(je&130023424)===je&&500>pe()-ya?jn(e,0):xa|=n),Ye(e,t)}function nf(e,t){t===0&&(e.mode&1?(t=bo,bo<<=1,!(bo&130023424)&&(bo=4194304)):t=1);var n=Ie();e=$t(e,t),e!==null&&(io(e,t,n),Ye(e,n))}function Ih(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nf(e,n)}function Ah(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),nf(e,n)}var rf;rf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,Ch(e,t,n);We=!!(e.flags&131072)}else We=!1,le&&t.flags&1048576&&sd(t,si,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ho(e,t),e=t.pendingProps;var o=lr(t,Pe.current);rr(t,n),o=da(null,t,r,e,o,n);var i=fa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(i=!0,ii(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,la(t),o.updater=Li,t.stateNode=o,o._reactInternals=t,ds(t,r,e,n),t=hs(null,t,r,!0,i,n)):(t.tag=0,le&&i&&qs(t),Re(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ho(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Bh(r),e=ht(r,e),o){case 0:t=ps(null,t,r,e,n);break e;case 1:t=Su(null,t,r,e,n);break e;case 11:t=ku(null,t,r,e,n);break e;case 14:t=bu(null,t,r,ht(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),ps(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),Su(e,t,r,o,n);case 3:e:{if(Fd(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,pd(e,t),ci(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=cr(Error(E(423)),t),t=ju(e,t,r,n,o);break e}else if(r!==o){o=cr(Error(E(424)),t),t=ju(e,t,r,n,o);break e}else for(qe=qt(t.stateNode.containerInfo.firstChild),et=t,le=!0,gt=null,n=dd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===o){t=It(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return hd(t),e===null&&as(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,rs(r,o)?l=null:i!==null&&rs(r,i)&&(t.flags|=32),Ad(e,t),Re(e,t,l,n),t.child;case 6:return e===null&&as(t),null;case 13:return Bd(e,t,n);case 4:return sa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ar(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),ku(e,t,r,o,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,te(ai,r._currentValue),r._currentValue=l,i!==null)if(vt(i.value,l)){if(i.children===o.children&&!Ve.current){t=It(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Mt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?a.next=a:(a.next=g.next,g.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),us(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(E(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),us(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Re(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,rr(t,n),o=ut(o),r=r(o),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,o=ht(r,t.pendingProps),o=ht(r.type,o),bu(e,t,r,o,n);case 15:return $d(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),Ho(e,t),t.tag=1,Qe(r)?(e=!0,ii(t)):e=!1,rr(t,n),Md(t,r,o),ds(t,r,o,n),hs(null,t,r,!0,e,n);case 19:return Ud(e,t,n);case 22:return Id(e,t,n)}throw Error(E(156,t.tag))};function of(e,t){return Tc(e,t)}function Fh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new Fh(e,t,n,r)}function ba(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bh(e){if(typeof e=="function")return ba(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bs)return 11;if(e===Us)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ba(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Un:return Nn(n.children,o,i,t);case Fs:l=8,o|=8;break;case Ol:return e=st(12,n,t,o|2),e.elementType=Ol,e.lanes=i,e;case Rl:return e=st(13,n,t,o),e.elementType=Rl,e.lanes=i,e;case $l:return e=st(19,n,t,o),e.elementType=$l,e.lanes=i,e;case hc:return Oi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fc:l=10;break e;case pc:l=9;break e;case Bs:l=11;break e;case Us:l=14;break e;case Ht:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=st(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Nn(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function Oi(e,t,n,r){return e=st(22,e,r,t),e.elementType=hc,e.lanes=n,e.stateNode={isHidden:!1},e}function Cl(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function El(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sl(0),this.expirationTimes=sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Sa(e,t,n,r,o,i,l,s,a){return e=new Uh(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=st(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},la(i),e}function Kh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lf(e){if(!e)return ln;e=e._reactInternals;e:{if(On(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Qe(n))return id(e,n,t)}return t}function sf(e,t,n,r,o,i,l,s,a){return e=Sa(n,r,!0,e,o,i,l,s,a),e.context=lf(null),n=e.current,r=Ie(),o=nn(n),i=Mt(r,o),i.callback=t??null,en(n,i,o),e.current.lanes=o,io(e,o,r),Ye(e,r),e}function Ri(e,t,n,r){var o=t.current,i=Ie(),l=nn(o);return n=lf(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(o,t,l),e!==null&&(yt(e,o,l,i),Bo(e,o,l)),l}function yi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ja(e,t){Mu(e,t),(e=e.alternate)&&Mu(e,t)}function Hh(){return null}var af=typeof reportError=="function"?reportError:function(e){console.error(e)};function Na(e){this._internalRoot=e}$i.prototype.render=Na.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ri(e,t,null,null)};$i.prototype.unmount=Na.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){Ri(null,e,null,null)}),t[Rt]=null}};function $i(e){this._internalRoot=e}$i.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ic();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&Fc(e)}};function Ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ou(){}function Wh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=yi(l);i.call(c)}}var l=sf(t,r,e,0,null,!1,!1,"",Ou);return e._reactRootContainer=l,e[Rt]=l.current,Yr(e.nodeType===8?e.parentNode:e),Pn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=yi(a);s.call(c)}}var a=Sa(e,0,!1,null,null,!1,!1,"",Ou);return e._reactRootContainer=a,e[Rt]=a.current,Yr(e.nodeType===8?e.parentNode:e),Pn(function(){Ri(t,a,n,r)}),a}function Ai(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=yi(l);s.call(a)}}Ri(t,l,e,o)}else l=Wh(n,t,e,o,r);return yi(l)}Rc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zr(t.pendingLanes);n!==0&&(Ws(t,n|1),Ye(t,pe()),!(Y&6)&&(dr=pe()+500,un()))}break;case 13:Pn(function(){var r=$t(e,1);if(r!==null){var o=Ie();yt(r,e,1,o)}}),ja(e,1)}};Vs=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Ie();yt(t,e,134217728,n)}ja(e,134217728)}};$c=function(e){if(e.tag===13){var t=nn(e),n=$t(e,t);if(n!==null){var r=Ie();yt(n,e,t,r)}ja(e,t)}};Ic=function(){return G};Ac=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Ql=function(e,t,n){switch(t){case"input":if(Fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=_i(r);if(!o)throw Error(E(90));gc(r),Fl(r,o)}}}break;case"textarea":yc(e,n);break;case"select":t=n.value,t!=null&&qn(e,!!n.multiple,t,!1)}};Nc=va;Cc=Pn;var Vh={usingClientEntryPoint:!1,Events:[so,Vn,_i,Sc,jc,va]},jr={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qh={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_c(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Hh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{Ni=Po.inject(Qh),St=Po}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vh;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ca(t))throw Error(E(200));return Kh(e,t,null,n)};nt.createRoot=function(e,t){if(!Ca(e))throw Error(E(299));var n=!1,r="",o=af;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Sa(e,1,!1,null,null,n,!1,r,o),e[Rt]=t.current,Yr(e.nodeType===8?e.parentNode:e),new Na(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=_c(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return Pn(e)};nt.hydrate=function(e,t,n){if(!Ii(t))throw Error(E(200));return Ai(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!Ca(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=af;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=sf(t,null,e,1,n??null,o,!1,i,l),e[Rt]=t.current,Yr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new $i(t)};nt.render=function(e,t,n){if(!Ii(t))throw Error(E(200));return Ai(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!Ii(e))throw Error(E(40));return e._reactRootContainer?(Pn(function(){Ai(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};nt.unstable_batchedUpdates=va;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ii(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ai(e,t,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function uf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uf)}catch(e){console.error(e)}}uf(),ac.exports=nt;var Yh=ac.exports,cf,Ru=Yh;cf=Ru.createRoot,Ru.hydrateRoot;const Xh="modulepreload",Gh=function(e,t){return new URL(e,t).href},$u={},uo=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(c=>{if(c=Gh(c,r),c in $u)return;$u[c]=!0;const g=c.endsWith(".css"),x=g?'[rel="stylesheet"]':"";if(!!r)for(let S=l.length-1;S>=0;S--){const j=l[S];if(j.href===c&&(!g||j.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${x}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":Xh,g||(v.as="script"),v.crossOrigin="",v.href=c,a&&v.setAttribute("nonce",a),document.head.appendChild(v),g)return new Promise((S,j)=>{v.addEventListener("load",S),v.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})};function Jh(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:l}=e;let s,a;const c=async(x=!0)=>{await a};async function g(){if("serviceWorker"in navigator){if(s=await uo(async()=>{const{Workbox:x}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:x}},[],import.meta.url).then(({Workbox:x})=>new x("./sw.js",{scope:"./",type:"classic"})).catch(x=>{l==null||l(x)}),!s)return;s.addEventListener("activated",x=>{(x.isUpdate||x.isExternal)&&window.location.reload()}),s.addEventListener("installed",x=>{x.isUpdate||r==null||r()}),s.register({immediate:t}).then(x=>{i?i("./sw.js",x):o==null||o(x)}).catch(x=>{l==null||l(x)})}}return a=g(),c}const Cs=(e,t)=>t.some(n=>e instanceof n);let Iu,Au;function Zh(){return Iu||(Iu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qh(){return Au||(Au=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Es=new WeakMap,zl=new WeakMap,Fi=new WeakMap;function em(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",l)},i=()=>{n(Cn(e.result)),o()},l=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",l)});return Fi.set(t,e),t}function tm(e){if(Es.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",l),e.removeEventListener("abort",l)},i=()=>{n(),o()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",l),e.addEventListener("abort",l)});Es.set(e,t)}let zs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Es.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function df(e){zs=e(zs)}function nm(e){return qh().includes(e)?function(...t){return e.apply(_s(this),t),Cn(this.request)}:function(...t){return Cn(e.apply(_s(this),t))}}function rm(e){return typeof e=="function"?nm(e):(e instanceof IDBTransaction&&tm(e),Cs(e,Zh())?new Proxy(e,zs):e)}function Cn(e){if(e instanceof IDBRequest)return em(e);if(zl.has(e))return zl.get(e);const t=rm(e);return t!==e&&(zl.set(e,t),Fi.set(t,e)),t}const _s=e=>Fi.get(e);function om(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const l=indexedDB.open(e,t),s=Cn(l);return r&&l.addEventListener("upgradeneeded",a=>{r(Cn(l.result),a.oldVersion,a.newVersion,Cn(l.transaction),a)}),n&&l.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),s.then(a=>{i&&a.addEventListener("close",()=>i()),o&&a.addEventListener("versionchange",c=>o(c.oldVersion,c.newVersion,c))}).catch(()=>{}),s}const im=["get","getKey","getAll","getAllKeys","count"],lm=["put","add","delete","clear"],_l=new Map;function Fu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(_l.get(t))return _l.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=lm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||im.includes(n)))return;const i=async function(l,...s){const a=this.transaction(l,o?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(s.shift())),(await Promise.all([c[n](...s),o&&a.done]))[0]};return _l.set(t,i),i}df(e=>({...e,get:(t,n,r)=>Fu(t,n)||e.get(t,n,r),has:(t,n)=>!!Fu(t,n)||e.has(t,n)}));const sm=["continue","continuePrimaryKey","advance"],Bu={},Ds=new WeakMap,ff=new WeakMap,am={get(e,t){if(!sm.includes(t))return e[t];let n=Bu[t];return n||(n=Bu[t]=function(...r){Ds.set(this,ff.get(this)[t](...r))}),n}};async function*um(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const n=new Proxy(t,am);for(ff.set(n,t),Fi.set(n,_s(t));t;)yield n,t=await(Ds.get(n)||t.continue()),Ds.delete(n)}function Uu(e,t){return t===Symbol.asyncIterator&&Cs(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&Cs(e,[IDBIndex,IDBObjectStore])}df(e=>({...e,get(t,n,r){return Uu(t,n)?um:e.get(t,n,r)},has(t,n){return Uu(t,n)||e.has(t,n)}}));const cm="nachumin-diary",dm=1,vi="kv",fm="line-diary-entries-v1",Pt="rooms-v1",Te=e=>`room-data-v1:${e}`,pm=e=>`trash-v1:${e}:${Date.now()}`,Yo="declaration-v1",ro="marks-v1",hm=["・","❤︎","🩷","💛","🩵","💜","✨","✔︎"],En=e=>`donelog-v1:${e}`,zn=e=>`habits-v1:${e}`,wi=e=>`habitlog-v1:${e}`,ki=e=>`habitseed-v1:${e}`,Dl="backup-v1",be="diary-main",pf=om(cm,dm,{upgrade(e){e.objectStoreNames.contains(vi)||e.createObjectStore(vi)}});async function V(e){return(await pf).get(vi,e)}async function Q(e,t){return(await pf).put(vi,t,e)}async function mm(){try{navigator.storage&&navigator.storage.persist&&await navigator.storage.persist()}catch{}}async function gm(){const e=await V(Pt);if(e)return e;let t=await V(fm);if(typeof t=="string")try{t=JSON.parse(t)}catch{t=null}const n=t&&typeof t=="object"?t:{};await Q(Te(be),n);const r=Object.keys(n).sort(),o=r[r.length-1],i=[{id:be,type:"diary",name:"日記",emoji:"💗",createdAt:Date.now(),lastAt:o?Date.now():0,preview:o?n[o].text.split(`
`)[0].slice(0,40):""}];return await Q(Pt,i),i}const xm=5,ym=xm*60*60*1e3,hf=()=>new Date(Date.now()-ym),Le=e=>String(e).padStart(2,"0"),Dt=e=>`${e.getFullYear()}-${Le(e.getMonth()+1)}-${Le(e.getDate())}`,ge=e=>e.split("-").join("/"),$e=e=>{const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},Ts=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],vm=["S","M","T","W","T","F","S"],Ls=e=>`${ge(e)} ${Ts[$e(e).getDay()]}`,Mo=(e,t,n)=>1+(8-new Date(e,t-1,1).getDay())%7+(n-1)*7,wm=e=>Math.floor(20.8431+.242194*(e-1980)-Math.floor((e-1980)/4)),km=e=>Math.floor(23.2488+.242194*(e-1980)-Math.floor((e-1980)/4)),Tl={};function bm(e){if(Tl[e])return Tl[e];const t={},n=(r,o,i)=>{t[`${e}-${Le(r)}-${Le(o)}`]=i};n(1,1,"元日"),n(1,Mo(e,1,2),"成人の日"),n(2,11,"建国記念の日"),n(2,23,"天皇誕生日"),n(3,wm(e),"春分の日"),n(4,29,"昭和の日"),n(5,3,"憲法記念日"),n(5,4,"みどりの日"),n(5,5,"こどもの日"),n(7,Mo(e,7,3),"海の日"),n(8,11,"山の日"),n(9,Mo(e,9,3),"敬老の日"),n(9,km(e),"秋分の日"),n(10,Mo(e,10,2),"スポーツの日"),n(11,3,"文化の日"),n(11,23,"勤労感謝の日");for(const r of Object.keys(t)){const o=$e(r),i=new Date(o);i.setDate(i.getDate()+1);const l=new Date(o);l.setDate(l.getDate()+2),t[Dt(l)]&&!t[Dt(i)]&&i.getDay()!==0&&(t[Dt(i)]="国民の休日")}for(const r of Object.keys({...t})){if($e(r).getDay()!==0)continue;const o=$e(r);do o.setDate(o.getDate()+1);while(t[Dt(o)]);t[Dt(o)]="振替休日"}return Tl[e]=t,t}const Sm=e=>!!bm(Number(e.slice(0,4)))[e],bi=e=>{if(Sm(e))return"sun";const t=$e(e).getDay();return t===0?"sun":t===6?"sat":""},Zm=e=>"¥"+Math.round(Number(e)||0).toLocaleString("ja-JP"),qm=e=>e.slice(0,7),eg=(e,t)=>{const[n,r]=e.split("-");return(t&&Number(n)===t?"":`${n}年`)+`${Number(r)}月`},Ze=()=>Dt(hf()),Ku=()=>{const e=hf();return e.setDate(e.getDate()-1),Dt(e)},mf=()=>{const e=new Date;return`${e.getHours()}:${Le(e.getMinutes())}`},gf=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),jm=e=>String(e||"").replace(/[\/\\:*?"<>| -]/g,"_").replace(/\s+/g," ").trim()||"room";async function Hu(e){try{return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.top="0",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}const Oe=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36),Nm=e=>Object.keys(e).sort().map(t=>`🩷${Ls(t)}🩷 ${e[t].time}
${e[t].text}`).join(`

──────────

`),Cm=e=>{const t={},n=e.split(/\n*─{3,}\n*/);for(const r of n){const o=r.trim();if(!o)continue;const i=o.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*(?:[（(]?(?:[A-Za-z]{3}|[日月火水木金土])[)）]?)?\s*🩷?\s*(\d{1,2}:\d{2})?\s*\n?([\s\S]*)$/u);if(!i)continue;const l=`${i[1]}-${Le(Number(i[2]))}-${Le(Number(i[3]))}`,s=i[5].trim();s&&(t[l]={text:s,time:i[4]||"0:00"})}return t},tg=(e,t)=>{const n=[];let r="";for(const o of e)o.dateKey!==r&&(r=o.dateKey,n.length&&n.push(""),n.push(`🩷${ge(r)}🩷`)),n.push(`${o.time?o.time+" ":""}${t(o.memberId)}「${o.text}」`);return n.join(`
`)},ng=e=>{const t=[];let n=Ze(),r=null;const o=()=>{if(!r)return;let i=r.lines.join(`
`).trim();i.endsWith("」")&&(i=i.slice(0,-1)),i&&t.push({dateKey:r.dateKey,name:r.name,time:r.time,text:i}),r=null};for(const i of e.split(`
`)){const l=i.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(l){o(),n=`${l[1]}-${Le(Number(l[2]))}-${Le(Number(l[3]))}`;continue}if(r)r.lines.push(i);else{const a=i.match(/^(?:(\d{1,2}:\d{2})\s+)?(.+?)「([\s\S]*)$/u);if(!a)continue;r={dateKey:n,name:a[2].trim(),time:a[1]||"",lines:[a[3]]}}const s=r.lines[r.lines.length-1].trimEnd();s.endsWith("」")&&(r.lines[r.lines.length-1]=s,o())}return o(),t},Em=[{key:"morning",label:"朝",emoji:"🌅"},{key:"noon",label:"昼",emoji:"☀️"},{key:"night",label:"夜",emoji:"🌙"}],rg=()=>{const e=new Date().getHours();return e>=5&&e<11?"morning":e>=11&&e<17?"noon":"night"},og=(e,t)=>{var i;const n=l=>{var s;return((s=t.find(a=>a.id===l))==null?void 0:s.name)||"？"},r={};for(const l of e)(r[i=l.dateKey]||(r[i]={morning:[],noon:[],night:[]}))[l.slot].push(l);const o=[];for(const l of Object.keys(r).sort()){const s=[];for(const a of Em){const c=r[l][a.key];if(!c.length)continue;const g=c.map(x=>n(x.memberId)+(x.memo&&x.memo.trim()?`(${x.memo.trim()})`:"")).join("・");s.push(`${a.emoji}${a.label}:${g}`)}s.length&&o.push(`🩷${ge(l)}🩷 ${s.join(" / ")}`)}return o.join(`
`)},ig=e=>{const t=[],n=r=>r.includes("朝")?"morning":r.includes("昼")?"noon":r.includes("夜")?"night":null;for(const r of e.split(`
`)){const o=r.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(.*)$/u);if(!o)continue;const i=`${o[1]}-${Le(Number(o[2]))}-${Le(Number(o[3]))}`,l=o[4];if(l.trim())for(const s of l.split("/")){const a=s.indexOf(":"),c=s.indexOf("："),g=a===-1?c:c===-1?a:Math.min(a,c);if(g===-1)continue;const x=n(s.slice(0,g));if(!x)continue;const f=s.slice(g+1);for(const v of f.split("・")){const S=v.trim().match(/^(.+?)(?:[(（]([\s\S]*)[)）])?$/u);if(!S)continue;const j=S[1].trim();j&&t.push({dateKey:i,slot:x,name:j,memo:(S[2]||"").trim()})}}}return t},lg=e=>{var n;const t={};for(const r of e)(t[n=r.dateKey]||(t[n]={morning:[],noon:[],night:[]}))[r.slot].push(r);return t},sg=(e,t)=>{let n=t;for(const l of e)l.dateKey<n&&(n=l.dateKey);$e(t);const r=$e(t);r.setDate(r.getDate()-34);const o=$e(n)<r?$e(n):r,i=[];for(let l=new Date(o);Dt(l)<=t;l.setDate(l.getDate()+1))i.push(Dt(l));return i},ag=e=>{const t=[];for(const n of String(e||"").split(`
`)){let r=n.trim();r&&(/^🩷?\s*\d{4}[/-]\d{1,2}[/-]\d{1,2}\s*🩷?\s*$/u.test(r)||(r=r.replace(/^[★☆☐☑✓□■●○・\-*+•‣▪️\s]+/u,"").trim(),r&&t.push(r)))}return t},ug=e=>{const t=[];let n=Ze();for(const r of e.split(`
`)){const o=r.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(o){n=`${o[1]}-${Le(Number(o[2]))}-${Le(Number(o[3]))}`;continue}const i=r.match(/^\s*(★\s*)?([☑☐✓])\s+(.+)$/u);if(!i)continue;const l=!!i[1],s=i[2]==="☑"||i[2]==="✓",a=i[3].trim();a&&t.push({dateKey:n,text:a,done:s,important:l})}return t},xf="🩷 できたこと",zm=e=>{const t=(e||"").split(`
`),n=t.indexOf(xf);if(n===-1)return{text:e||"",items:[]};const r=[];let o=n+1;for(;o<t.length&&t[o].startsWith("☑ ");){const s=t[o].match(/^☑ (.*?)(?: \((\d{1,2}:\d{2})\))?$/u);s&&r.push({text:s[1],time:s[2]||""}),o++}let i=n;return i-1>=0&&t[i-1]===""&&(i-=1),t.splice(i,o-i),{text:t.join(`
`).replace(/\n{3,}/g,`

`).replace(/\s+$/,""),items:r}},Si="🎬 今日のコマ: ",_m=e=>(e||"").split(`
`).filter(t=>!t.startsWith(Si)).join(`
`).replace(/^\n+/,""),Dm=(e,t)=>{const n=_m(e).trim(),r=Si+t;return n?`${r}

${n}`:r},Tm={morning:"🌅",noon:"☀️",night:"🌙"},Oo="nachumin-diary-backup.json";function Lm(e){if(!e||typeof e!="object"||Array.isArray(e))return"バックアップの形式が読めませんでした 🥺";if(e.app!=="nachumin-diary")return"これは Nachumin Lifelog のバックアップファイルではないみたい 🥺";if(!Array.isArray(e.rooms))return"ルームの情報が入っていません。ファイルが壊れているかも 🥺";if(e.rooms.some(t=>!t||typeof t!="object"||!t.id||!t.type))return"ルームの形式が壊れています 🥺";if(e.data!=null&&(typeof e.data!="object"||Array.isArray(e.data)))return"ルームの中身の形式が壊れています 🥺";for(const t of["doneLogs","habits","habitLogs","habitSeeds"])if(e[t]!=null&&(typeof e[t]!="object"||Array.isArray(e[t])))return`${t} の形式が壊れています 🥺`;return null}function Pm(e){const t={rooms:(e.rooms||[]).length,items:0},n=r=>r==="talk"?"messages":r==="todo"?"todos":r==="darelog"?"records":r==="expense"?"expenses":null;for(const r of e.rooms||[]){const o=e.data?e.data[r.id]:void 0;if(!o)continue;const i=n(r.type);t.items+=i?(o[i]||[]).length:Object.keys(o).length}return t}function Ll(e,t){var i;if(e.type==="talk"){const l=t&&t.messages||[],s=l[l.length-1];return{previewName:s?(c=>{var g;return((g=(e.members||[]).find(x=>x.id===c))==null?void 0:g.name)||""})(s.memberId):"",preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="todo"){const l=t&&t.todos||[],s=l[l.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?`${s.done?"☑":"☐"} ${s.text.split(`
`)[0]}`.slice(0,40):"",todoOpen:l.filter(a=>!a.done).length,lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="darelog"){const l=t&&t.records||[],s=l[l.length-1],a=c=>{var g;return((g=(e.members||[]).find(x=>x.id===c))==null?void 0:g.name)||""};return{preview:s?`${Tm[s.slot]||""} ${a(s.memberId)}`.trim():"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="expense"){const l=t&&t.expenses||[],s=l[l.length-1];return{preview:s?`${(c=>{var g;return((g=(e.categories||[]).find(x=>x.id===c))==null?void 0:g.name)||""})(s.categoryId)} ¥${(s.amount||0).toLocaleString("ja-JP")}`:"",lastAt:e.lastAt||(s?Date.now():0)}}const n=t&&typeof t=="object"?t:{},r=Object.keys(n).sort(),o=r[r.length-1];return{preview:typeof((i=n[o])==null?void 0:i.text)=="string"?n[o].text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(o?Date.now():0)}}async function Wu(){const e=await V(Pt)||[],t={};for(const a of e){const c=await V(Te(a.id));c!==void 0&&(t[a.id]=c)}const n=await V(Yo)||null,r={},o={},i={},l={};for(const a of e){const c=await V(En(a.id));c&&Object.keys(c).length&&(r[a.id]=c);const g=await V(zn(a.id));Array.isArray(g)&&g.length&&(o[a.id]=g);const x=await V(wi(a.id));x&&Object.keys(x).length&&(i[a.id]=x),await V(ki(a.id))&&(l[a.id]=!0)}const s=await V(ro)||null;return{app:"nachumin-diary",version:1,exportedAt:new Date().toISOString(),rooms:e,data:t,declaration:n,doneLogs:r,habits:o,habitLogs:i,habitSeeds:l,marks:s}}const Mm=e=>e.map((t,n)=>[t,n]).sort((t,n)=>t[0].dateKey<n[0].dateKey?-1:t[0].dateKey>n[0].dateKey?1:t[1]-n[1]).map(([t])=>t);async function Om(e){var s;if(!e||e.app!=="nachumin-diary"||!Array.isArray(e.rooms))throw new Error("invalid-backup");const t=await V(Pt)||[],n=new Map(t.map(a=>[a.id,{...a}]));let r=0,o=0;for(const a of e.rooms){const c=e.data?e.data[a.id]:void 0,g=a.type==="talk"?"messages":a.type==="todo"?"todos":a.type==="darelog"?"records":a.type==="expense"?"expenses":null,x=v=>g==="messages"?`${v.dateKey} ${v.memberId} ${v.text}`:g==="todos"?`${v.dateKey} ${v.text}`:g==="records"?`${v.dateKey} ${v.slot} ${v.memberId}`:v.id;if(!n.has(a.id)){c!==void 0&&await Q(Te(a.id),c),n.set(a.id,{...a,...Ll(a,c)}),r+=1,g?o+=((s=c==null?void 0:c[g])==null?void 0:s.length)||0:o+=c?Object.keys(c).length:0;continue}const f=n.get(a.id);if(g){const S=(await V(Te(a.id))||{})[g]||[],j=new Set(S.map(x));let P=S.slice();for(const h of(c==null?void 0:c[g])||[])j.has(x(h))||(j.add(x(h)),P.push(h),o+=1);g==="messages"&&(P=Mm(P));const m={[g]:P};await Q(Te(a.id),m);let p={...f};if(a.type==="talk"||a.type==="darelog"){const h=f.members||[],w=new Set(h.map(N=>N.id));p.members=h.concat((a.members||[]).filter(N=>!w.has(N.id)))}n.set(a.id,{...p,...Ll(p,m)})}else{const S={...await V(Te(a.id))||{}};for(const j of Object.keys(c||{}))S[j]||(S[j]=c[j],o+=1);await Q(Te(a.id),S),n.set(a.id,{...f,...Ll(f,S)})}}if(e.doneLogs)for(const[a,c]of Object.entries(e.doneLogs)){const g=En(a),f={...await V(g)||{}};for(const[v,S]of Object.entries(c)){const j=(f[v]||[]).slice();for(const P of S)j.some(m=>m.text===P.text&&m.time===P.time)||j.push(P);f[v]=j}await Q(g,f)}const i={};if(e.habits)for(const[a,c]of Object.entries(e.habits)){if(!Array.isArray(c))continue;const g=await V(zn(a));if(g===void 0){await Q(zn(a),c);continue}const x=Array.isArray(g)?g:[],f=new Set(x.map(P=>P.id)),v=new Map(x.filter(P=>(P.name||"").trim()).map(P=>[P.name.trim(),P.id])),S=x.slice(),j={};for(const P of c){if(!P||!P.id)continue;if(f.has(P.id)){j[P.id]=P.id;continue}const m=(P.name||"").trim(),p=m?v.get(m):null;if(p){j[P.id]=p;continue}S.push(P),f.add(P.id),m&&v.set(m,P.id),j[P.id]=P.id}S.length!==x.length&&await Q(zn(a),S),i[a]=j}if(e.habitSeeds)for(const a of Object.keys(e.habitSeeds))e.habitSeeds[a]&&await Q(ki(a),!0);if(e.habitLogs)for(const[a,c]of Object.entries(e.habitLogs)){const g=i[a]||{},x=wi(a),v={...await V(x)||{}};for(const[S,j]of Object.entries(c)){const P=(j||[]).map(m=>g[m]||m);v[S]=[...new Set([...v[S]||[],...P])]}await Q(x,v)}if(Array.isArray(e.marks)&&e.marks.length){const a=await V(ro);(!Array.isArray(a)||!a.length)&&await Q(ro,e.marks)}const l=[...n.values()];return await Q(Pt,l),{addedRooms:r,addedItems:o,rooms:l}}const yn="M12 20.5s-7.5-5-7.5-10a4.2 4.2 0 0 1 7.5-2.6A4.2 4.2 0 0 1 19.5 10.5c0 5-7.5 10-7.5 10z",Rm=`<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>
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
<path d='${yn}' transform='translate(96 60) scale(1.6)'/>
<path d='${yn}' transform='translate(24 96) scale(0.9) rotate(-12 12 12)'/>
<path d='${yn}' transform='translate(190 60) scale(0.8) rotate(14 12 12)'/>
<path d='${yn}' transform='translate(130 150) scale(1.1) rotate(-8 12 12)'/>
<path d='${yn}' transform='translate(30 208) scale(0.8) rotate(10 12 12)'/>
</g>
<g fill='#f8b1d6'>
<path d='${yn}' transform='translate(100 64) scale(1.1) '/>
<path d='${yn}' transform='translate(133 153) scale(0.7)'/>
</g>
</svg>`,Pl=`url("data:image/svg+xml,${encodeURIComponent(Rm)}")`,cg=["#ffffff","#fff5fa","#ffd9ec","#ffc4e1","#ff9fd0","#e0629f","#d4f0ff","#c9f5f2","#d9ffe3","#e8dcff","#f0f0f0","#2b2430"],dg=["#9C27B0","#E91E63","#FFEB3B","#2196F3","#4CAF50","#FF9800","#F44336","#00BCD4","#3F51B5","#8BC34A","#FF4081","#009688"],yf=["#ff6fb2","#c58cff","#6fb8ff","#5fd6b0","#ffcf5f","#ff9d6f","#7ed957","#ff8fa8"],Dr=yf[0],Vu=e=>{const t=e||Dr;return{background:`linear-gradient(163deg, #ffffff 0%, #fff6fb 40%, ${t}2e 100%)`,boxShadow:`0 6px 13px ${t}42, 0 2px 0 ${t}66, inset 0 1.5px 0 #ffffff`,borderColor:`${t}55`}},fg=[{key:"auto",label:"自動",value:null},{key:"white",label:"白",value:"#ffffff"},{key:"black",label:"黒",value:"#222028"},{key:"pink",label:"ピンク",value:"#ff2d87"}],$m=e=>{const t=String(e).replace("#","");if(t.length<6)return"#4a3140";const n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),o=parseInt(t.slice(4,6),16);return .299*n+.587*r+.114*o<140?"#fff5fa":"#4a3140"},pg=e=>e&&e.textColor?e.textColor:$m(e&&e.color),Qu=`
  * { box-sizing: border-box; }
  .app {
    height: 100vh; height: 100dvh;
    display: flex; flex-direction: column;
    font-family: "Hiragino Maru Gothic ProN", "Hiragino Kaku Gothic ProN",
      "Yu Gothic", sans-serif;
    background: ${Pl} #f6bedd; background-size: 240px 240px;
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
    background: ${Pl} #f6bedd; background-size: 240px 240px;
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
    background: ${Pl} #f6bedd; background-size: 240px 240px;
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
`;function vf(e,t,n){if(!e)return;const r=e.selectionStart??e.value.length,o=e.selectionEnd??e.value.length,i=e.value.slice(0,r)+t+e.value.slice(o);n(i),requestAnimationFrame(()=>{try{e.focus();const l=r+t.length;e.setSelectionRange(l,l)}catch{}})}function wf({marks:e,onInsert:t,onEdit:n}){return u.jsxs("div",{className:"markbar",children:[e.map((r,o)=>u.jsx("button",{className:"markchip",onMouseDown:i=>i.preventDefault(),onClick:()=>t(r),children:r},o)),u.jsx("button",{className:"markchip mark-edit",onMouseDown:r=>r.preventDefault(),onClick:n,"aria-label":"マークを編集",children:"⚙︎"})]})}function kf(e=!0){const[t,n]=z.useState(0);return z.useEffect(()=>{if(!e||!window.visualViewport){n(0);return}const r=window.visualViewport,o=()=>n(Math.max(0,window.innerHeight-r.height-r.offsetTop));return o(),r.addEventListener("resize",o),r.addEventListener("scroll",o),()=>{r.removeEventListener("resize",o),r.removeEventListener("scroll",o)}},[e]),t}function Im({initial:e,appendNewline:t,marks:n,onEditMarks:r,onSave:o,onCancel:i,onDelete:l,placeholder:s,bottomToolbar:a}){const[c,g]=z.useState(t?e?e+`
`:"":e||""),x=kf(!!a),f=z.useRef(null),v=()=>{const m=f.current;m&&(m.style.height="auto",m.style.height=Math.min(m.scrollHeight,Math.round(window.innerHeight*.42))+"px")};z.useEffect(()=>{const m=f.current;if(!m)return;m.focus(),v();const p=m.value.length;m.setSelectionRange(p,p),m.scrollTop=m.scrollHeight},[]);const S=m=>vf(f.current,m+" ",p=>{g(p),requestAnimationFrame(v)}),j=n?u.jsx(wf,{marks:n,onInsert:S,onEdit:r}):null,P=u.jsxs("div",{className:"inline-btns",children:[l&&u.jsx("button",{className:"ie-del",onClick:l,children:"削除"}),u.jsx("button",{className:"ie-cancel",onClick:i,children:"キャンセル"}),u.jsx("button",{className:"ie-save",onClick:()=>o(c),"aria-label":"保存",children:"💌"})]});return u.jsxs("div",{className:"inline-edit",onClick:m=>m.stopPropagation(),children:[!a&&j,u.jsx("textarea",{ref:f,className:"inline-ta",value:c,placeholder:s,onChange:m=>{g(m.target.value),v()}}),a?u.jsxs("div",{className:"edit-toolbar",style:{bottom:x},onClick:m=>m.stopPropagation(),children:[j,P]}):P]})}function Am(e,t=500){const n=z.useRef({}),r=l=>{if(typeof e!="function"||l.touches&&l.touches.length!==1)return;const s=l.touches?l.touches[0]:l;n.current.x=s.clientX,n.current.y=s.clientY,n.current.fired=!1,clearTimeout(n.current.timer),n.current.timer=setTimeout(()=>{n.current.fired=!0;try{navigator.vibrate&&navigator.vibrate(15)}catch{}e({x:n.current.x,y:n.current.y})},t)},o=l=>{const s=l.touches?l.touches[0]:l;(Math.abs(s.clientX-n.current.x)>10||Math.abs(s.clientY-n.current.y)>10)&&clearTimeout(n.current.timer)},i=()=>clearTimeout(n.current.timer);return{onTouchStart:r,onTouchMove:o,onTouchEnd:i,onTouchCancel:i,onContextMenu:l=>{typeof e=="function"&&(l.preventDefault(),e({x:l.clientX,y:l.clientY}))},onClickCapture:l=>{n.current.fired&&(l.stopPropagation(),l.preventDefault(),n.current.fired=!1)}}}function Yu({onLongPress:e,longPressMs:t,children:n,...r}){const o=Am(e,t);return u.jsx("div",{...r,...o,children:n})}function Fm({x:e,y:t,onCopy:n,onEdit:r,onDelete:o,onClose:i,top:l,extra:s}){const g=z.useRef(null),[x,f]=z.useState(null);return z.useLayoutEffect(()=>{const v=g.current;if(!v)return;const S=v.offsetHeight,j=window.innerWidth,P=window.innerHeight,m=Math.max(8,Math.min(e-168/2,j-168-8));let p=t+8;p+S>P-8&&(p=t-8-S),p<8&&(p=Math.max(8,P-S-8)),f({left:m,top:p})},[e,t,l,s,r,o]),u.jsx("div",{className:"ctx-overlay",onClick:i,onContextMenu:v=>v.preventDefault(),children:u.jsxs("div",{ref:g,className:"ctx-menu",style:{left:x?x.left:Math.max(8,Math.min(e-168/2,window.innerWidth-168-8)),top:x?x.top:t+8,width:168,maxHeight:`calc(100vh - ${8*2}px)`,overflowY:"auto",visibility:x?"visible":"hidden"},onClick:v=>v.stopPropagation(),children:[(l||[]).map((v,S)=>u.jsx("button",{className:"ctx-item ctx-top",onClick:v.onClick,children:v.label},S)),u.jsx("button",{className:"ctx-item",onClick:n,children:"📋 コピー"}),r&&u.jsx("button",{className:"ctx-item",onClick:r,children:"✏️ 編集"}),(s||[]).map((v,S)=>u.jsx("button",{className:"ctx-item",onClick:v.onClick,children:v.label},S)),o&&u.jsx("button",{className:"ctx-item ctx-del",onClick:o,children:"🗑 削除"})]})})}function bf({message:e,confirmLabel:t="削除する",onConfirm:n,onCancel:r}){return u.jsx("div",{className:"overlay confirm-over",onClick:r,children:u.jsxs("div",{className:"panel confirm-panel",onClick:o=>o.stopPropagation(),children:[u.jsx("div",{className:"confirm-msg",children:e}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-close",onClick:r,children:"キャンセル"}),u.jsx("button",{className:"p-del arm",onClick:n,children:t})]})]})})}function Bm({habits:e,habitAch:t,onToggle:n,onClose:r,onManage:o}){const i=Ze(),[l,s]=z.useState(i.slice(0,7)),[a,c]=l.split("-").map(Number),g=new Date(a,c,0).getDate(),x=i.slice(0,7),f=z.useMemo(()=>{const h=[];for(let w=1;w<=g;w++){const N=`${a}-${Le(c)}-${Le(w)}`;h.push({d:w,key:N,dow:new Date(a,c-1,w).getDay(),isToday:N===i,future:N>i})}return h},[a,c,g,i]),v=h=>{const w=new Date(a,c-1+h,1);s(`${w.getFullYear()}-${Le(w.getMonth()+1)}`)},S=(h,w)=>h.freq==="weekly"?(h.days||[]).includes(w):!0,j=h=>{let w=0,N=0;for(const _ of f)S(h,_.dow)&&(_.future||(N+=1),(t[_.key]||[]).includes(h.id)&&(w+=1));return{done:w,total:N}},P=e.filter(h=>h.freq!=="weekly"),m=e.filter(h=>h.freq==="weekly"),p=h=>{const{done:w,total:N}=j(h),_=N?w/N:0,M=w===0?0:_>=.8?3:_>=.5?2:_>=.25?1:0;return u.jsxs("div",{className:"hv-row",children:[u.jsxs("div",{className:"hv-name",children:[u.jsx("span",{className:"hv-emoji",children:h.emoji||"🩷"}),u.jsx("span",{className:"hv-nm",children:h.name})]}),u.jsx("div",{className:"hv-cells",children:f.map(L=>{const A=S(h,L.dow),I=(t[L.key]||[]).includes(h.id);return u.jsx("button",{className:"hv-cell"+(I?" on":"")+(A?"":" off")+(L.isToday?" today":"")+(L.future?" future":""),disabled:!A||L.future,"aria-label":`${c}月${L.d}日 ${h.name}${I?" 達成ずみ":""}`,"aria-pressed":I,onClick:()=>n(L.key,h.id),children:I?"♥":""},L.key)})}),u.jsxs("div",{className:"hv-count lv"+M,children:[u.jsx("span",{className:"hv-n",children:w}),u.jsxs("span",{className:"hv-d",children:["/",N]})]})]},h.id)};return u.jsxs("div",{className:"hv-screen",children:[u.jsxs("div",{className:"hd",children:[u.jsx("button",{className:"back-btn","aria-label":"とじる",onClick:r,children:"‹"}),u.jsxs("div",{style:{minWidth:0},children:[u.jsx("div",{className:"hd-title",children:"🎯 習慣ビュー"}),u.jsx("div",{className:"hd-sub",children:"スタンプで振り返る"})]}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"習慣を編集",onClick:o,children:"⚙︎"})]}),u.jsxs("div",{className:"hv-monthbar",children:[u.jsx("button",{className:"hv-mbtn","aria-label":"前の月",onClick:()=>v(-1),children:"‹"}),u.jsxs("div",{className:"hv-month",children:[a,"年",c,"月"]}),u.jsx("button",{className:"hv-mbtn","aria-label":"次の月",onClick:()=>v(1),children:"›"}),l!==x&&u.jsx("button",{className:"hv-now",onClick:()=>s(x),children:"今月"})]}),e.length===0?u.jsxs("div",{className:"empty",children:["まだ習慣がありません。",`
`,"右上の⚙︎から追加してね💗"]}):u.jsx("div",{className:"hv-scroll",children:u.jsxs("div",{className:"hv-table",children:[u.jsxs("div",{className:"hv-row hv-head",children:[u.jsx("div",{className:"hv-name hv-corner",children:"習慣"}),u.jsx("div",{className:"hv-cells",children:f.map(h=>u.jsxs("div",{className:"hv-dcell"+(h.isToday?" today":"")+(bi(h.key)?" "+bi(h.key):""),children:[u.jsx("span",{className:"hv-dnum",children:h.d}),u.jsx("span",{className:"hv-dow",children:vm[h.dow]})]},h.key))}),u.jsx("div",{className:"hv-count hv-corner",children:"今月"})]}),P.map(p),m.length>0&&u.jsx("div",{className:"hv-seprow",children:u.jsx("span",{className:"hv-seplabel",children:"毎週の習慣"})}),m.map(p)]})})]})}const Nr="🎬",Um=[1,2,3,4,5,6,0];function Km({room:e,onBack:t,onMeta:n,initialQuery:r,showToast:o,pinned:i,syncSignal:l,marks:s,onEditMarks:a}){const[c,g]=z.useState({}),[x,f]=z.useState({}),[v,S]=z.useState([]),[j,P]=z.useState({}),[m,p]=z.useState(!1),[h,w]=z.useState(null),[N,_]=z.useState(Ze()),[M,L]=z.useState(""),[A,I]=z.useState(!!r),[W,se]=z.useState(r||""),[me,Xe]=z.useState(!1),[Nt,Be]=z.useState(!1),[Ue,O]=z.useState(""),[F,B]=z.useState(!1),[q,ne]=z.useState(!1),[de,J]=z.useState(null),[Ce,ke]=z.useState(null),[Ct,ot]=z.useState(!1),[cn,Bi]=z.useState(120),Ke=z.useRef(null),Ft=z.useRef(null),Rn=z.useRef(null),Bt=z.useRef(null),ee=kf(!h);z.useEffect(()=>{(async()=>{try{let d=await V(Te(e.id));d=typeof d=="string"?JSON.parse(d):d||{};const k=await V(En(e.id))||{};let b=!1;const D={},T={...k};for(const[X,K]of Object.entries(d))if(K&&typeof K.text=="string"&&K.text.includes(xf)){const{text:ft,items:An}=zm(K.text);if(D[X]={...K,text:ft},An.length){const Me=(T[X]||[]).slice();for(const tl of An)Me.some(Ea=>Ea.text===tl.text&&Ea.time===tl.time)||Me.push(tl);T[X]=Me}b=!0}else D[X]=K;b&&(await Q(Te(e.id),D),await Q(En(e.id),T)),g(D),f(T);let U=await V(zn(e.id));const Z=U===void 0;Z&&(U=[{id:Oe(),name:"note投稿",emoji:"📝"},{id:Oe(),name:"キャラ投稿",emoji:"🎨"}]);let re=Z;U=U.map(X=>X.freq&&X.days?X:(re=!0,{...X,freq:X.freq||"daily",days:X.days||[]})),await V(ki(e.id))||(await Q(ki(e.id),!0),U.some(X=>X.name==="週報を書く")||(U=[...U,{id:Oe(),name:"週報を書く",emoji:"📋",freq:"weekly",days:[0]}],re=!0)),re&&await Q(zn(e.id),U),S(Array.isArray(U)?U:[]),P(await V(wi(e.id))||{})}catch{}finally{p(!0)}})()},[e.id]),z.useEffect(()=>{l&&(async()=>{const d=await V(Te(e.id));d&&g(typeof d=="string"?JSON.parse(d):d),f(await V(En(e.id))||{})})()},[l]),z.useEffect(()=>{if(!Bt.current||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>Bt.current&&Bi(Bt.current.offsetHeight));return d.observe(Bt.current),()=>d.disconnect()},[h,A]);const dn=async d=>{g(d);try{await Q(Te(e.id),d);const k=Object.keys(d).sort(),b=k[k.length-1];n({preview:b?d[b].text.split(`
`)[0].slice(0,40):"",lastAt:Date.now()})}catch{o("保存に失敗しました。ストレージを確認してね")}};z.useEffect(()=>{!W&&!h&&Ke.current&&(Ke.current.scrollTop=Ke.current.scrollHeight)},[m,W,h]),z.useEffect(()=>{var k;if(!h)return;const d=(k=Ke.current)==null?void 0:k.querySelector(".editing-now");d&&setTimeout(()=>d.scrollIntoView({block:"start",behavior:"smooth"}),60)},[h]);const Ui=()=>{const d=M.trim();if(!d)return;const k=c[N];dn({...c,[N]:k?{...k,text:k.text+`

`+d}:{text:d,time:mf()}}),L(""),Ft.current&&(Ft.current.style.height="auto"),setTimeout(()=>{var D;const b=(D=Ke.current)==null?void 0:D.querySelector(`[data-date="${N}"]`);b?b.scrollIntoView({block:"end",behavior:"smooth"}):Ke.current&&(Ke.current.scrollTop=Ke.current.scrollHeight)},50)},Ki=d=>{L(d.target.value);const k=d.target;k.style.height="auto",k.style.height=Math.min(k.scrollHeight,140)+"px"},mr=d=>vf(Ft.current,d+" ",k=>{L(k),requestAnimationFrame(()=>{const b=Ft.current;b&&(b.style.height="auto",b.style.height=Math.min(b.scrollHeight,140)+"px")})}),dt=d=>{w(d),se(""),I(!1)},Hi=(d,k)=>{const b=k.trim();if(!b){w(null);return}dn({...c,[d]:{...c[d],text:b}}),w(null)},Wi=d=>{const k={...c};delete k[d],dn(k),w(null)},[$n,Ut]=z.useState(null),co=d=>Ut({message:`🩷${ge(d)}🩷 の日記を削除しますか？`,onConfirm:()=>{Wi(d),Ut(null)}}),In=(d,k)=>{const b=j[d]||[],D=b.includes(k)?b.filter(U=>U!==k):[...b,k],T={...j};D.length?T[d]=D:delete T[d],P(T),Q(wi(e.id),T).catch(()=>o("保存に失敗しました"))},Et=d=>{S(d),Q(zn(e.id),d).catch(()=>o("保存に失敗しました"))},Vi=()=>Et([...v,{id:Oe(),name:"",emoji:"🩷",freq:"daily",days:[]}]),fn=(d,k)=>Et(v.map(b=>b.id===d?{...b,...k}:b)),fo=(d,k)=>{if(k==="weekly"){const b=v.find(D=>D.id===d);fn(d,{freq:k,days:b&&b.days&&b.days.length?b.days:[$e(Ze()).getDay()]})}else fn(d,{freq:"daily"})},Qi=(d,k)=>{const b=v.find(T=>T.id===d),D=(b.days||[]).includes(k)?b.days.filter(T=>T!==k):[...b.days||[],k];fn(d,{days:D})},po=(d,k)=>{const b=d+k;if(b<0||b>=v.length)return;const D=[...v];[D[d],D[b]]=[D[b],D[d]],Et(D)},Yi=d=>{const k=v.find(D=>D.id===d),b=Object.values(j).filter(D=>(D||[]).includes(d)).length;Ut({message:`習慣「${((k==null?void 0:k.emoji)||"")+((k==null?void 0:k.name)||"")}」を削除しますか？`+(b?`
これまでの達成 ${b}日分 の記録も消えます。`:""),onConfirm:()=>{Et(v.filter(D=>D.id!==d)),Ut(null)}})},ho=()=>{const d=v.filter(k=>k.name.trim()||k.emoji&&k.emoji.trim());d.length!==v.length&&Et(d),B(!1)},pn=()=>Nm(c),mo=async()=>{try{await navigator.clipboard.writeText(pn()),ot(!0)}catch{try{Rn.current.focus(),Rn.current.select(),document.execCommand("copy"),ot(!0)}catch{o("コピーできませんでした。全選択して手動でコピーしてね")}}setTimeout(()=>ot(!1),2e3)},gr=()=>{try{const d=new Blob([pn()],{type:"text/plain;charset=utf-8"}),k=URL.createObjectURL(d),b=document.createElement("a");b.href=k,b.download=`nachumin-diary-${jm(e.name)}.txt`,document.body.appendChild(b),b.click(),b.remove(),setTimeout(()=>URL.revokeObjectURL(k),3e3)}catch{o("ダウンロードできない環境みたい。コピーを使ってね")}},Xi=()=>{const d=Cm(Ue),k=Object.keys(d);if(k.length===0){o("読み込める日記が見つかりませんでした 🥺");return}let b=0,D=0;const T={...c};for(const U of k)T[U]?D+=1:(T[U]=d[U],b+=1);dn(T),Be(!1),O(""),o(`${b}件の日記を復元したよ💗`+(D?`（${D}件はもうあるのでスキップ）`:""))},hn=d=>W?d.split(new RegExp(`(${gf(W)})`,"gi")).map((b,D)=>b.toLowerCase()===W.toLowerCase()?u.jsx("mark",{className:"hl",children:b},D):b):d,Ge=z.useMemo(()=>{var U;const d=(s||[]).filter(Boolean),k=[...d,Nr],b=[...d].sort((Z,re)=>re.length-Z.length),D={},T={};for(const Z of k)D[Z]=0,T[Z]=[];for(const Z of Object.keys(c).sort().reverse()){const re=(((U=c[Z])==null?void 0:U.text)||"").split(`
`).reverse();for(const Ee of re){if(!Ee.trim())continue;const X=Ee.trim();if(X.startsWith(Si)){const Me=X.slice(Si.length).trim();Me&&(T[Nr].push({dateKey:Z,text:Me}),D[Nr]+=1);continue}let K=Ee.trim();const ft=[];let An=!0;for(;An;){An=!1;for(const Me of b)if(K.startsWith(Me)){ft.includes(Me)||ft.push(Me),K=K.slice(Me.length).trimStart(),An=!0;break}}if(!(!ft.length||!K))for(const Me of ft)T[Me]&&(T[Me].push({dateKey:Z,text:K}),D[Me]+=1)}}return{counts:D,byMark:T}},[c,s]),mn=[...(s||[]).filter(Boolean),Nr],Gi=()=>{ke(mn.find(d=>Ge.counts[d]>0)||mn[0]||null)},Ji=d=>{ke(null),se(""),I(!1),setTimeout(()=>{var b;const k=(b=Ke.current)==null?void 0:b.querySelector(`[data-date="${d}"]`);k&&k.scrollIntoView({block:"center",behavior:"smooth"})},90)},Zi=async()=>{const d=Ge.byMark[Ce]||[];if(!d.length)return;const k=[];let b="";for(const T of d)T.dateKey!==b&&(b=T.dateKey,k.length&&k.push(""),k.push(`🩷${Ls(b)}🩷`)),k.push(T.text);const D=await Hu(k.join(`
`));o(D?"コピーしました🩷":"コピーできませんでした。手動でコピーしてね")},qi=d=>{const k=["🩷 できたこと"];for(const T of x[d]||[])k.push(`☑ ${T.text}${T.time?` (${T.time})`:""}`);const b=j[d]||[],D=v.filter(T=>b.includes(T.id)).map(T=>`${T.emoji||""}${T.name}`);return D.length&&k.push("習慣: "+D.join(" ")),k.join(`
`)},el=async d=>{const k=await Hu(d);o(k?"コピーしました🩷":"コピーできませんでした。手動でコピーしてね"),J(null)},go=W.toLowerCase(),gn=Ze(),xn=new Set([...Object.keys(c),...Object.keys(x),...Object.keys(j)]);v.length&&xn.add(gn);let y=[...xn].sort();W&&(y=y.filter(d=>{const k=c[d]&&(c[d].text+ge(d)).toLowerCase().includes(go),b=(x[d]||[]).some(D=>D.text.toLowerCase().includes(go));return k||b}));const C=ge(N).slice(5),R=(d,k)=>u.jsx("button",{className:"chip"+(N===k?" chip-on":""),onClick:()=>_(k),children:d},d);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"hd",children:[u.jsx("button",{className:"back-btn","aria-label":"もどる",onClick:t,children:"‹"}),u.jsx("span",{style:{fontSize:20},children:e.emoji}),u.jsxs("div",{children:[u.jsx("div",{className:"hd-title",children:e.name}),u.jsx("div",{className:"hd-sub",children:"Nachumin Lifelog"})]}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"マークで集める",onClick:Gi,children:"🔖"}),u.jsx("button",{className:"icon-btn","aria-label":"習慣",onClick:()=>B(!0),children:"🎯"}),u.jsx("button",{className:"icon-btn","aria-label":"テキスト書き出し",onClick:()=>Xe(!0),children:"📤"}),u.jsx("button",{className:"icon-btn","aria-label":"テキストから復元",onClick:()=>Be(!0),children:"📥"}),u.jsx("button",{className:"icon-btn","aria-label":"検索",onClick:()=>{I(!A),se("")},children:A?"✕":"🔍"})]}),i,A&&u.jsx("div",{className:"search-row",children:u.jsx("input",{autoFocus:!0,placeholder:"日記を検索（ことば・日付）",value:W,onChange:d=>se(d.target.value)})}),u.jsxs("div",{className:"chat",ref:Ke,style:{paddingBottom:h?210:cn+12},children:[m&&y.length===0&&u.jsx("div",{className:"empty",children:W?"みつかりませんでした 🥺":`まだ日記がありません。
下から今日のことを書いてみよう💗`}),y.map(d=>{const k=h===d,b=!!c[d],D=x[d]||[],T=d===gn,U=j[d]||[],Z=$e(d).getDay(),re=v.filter(K=>K.freq==="weekly"?(K.days||[]).includes(Z):!0),Ee=re.length>0&&(T||b||U.length>0),X=D.length>0||Ee;return u.jsxs(z.Fragment,{children:[b&&u.jsxs("div",{className:"row","data-date":d,children:[u.jsx("div",{className:"time",children:c[d].time}),u.jsxs(Yu,{className:"bubble"+(k?" editing-now":""),onClick:k?void 0:()=>dt(d),onLongPress:k?void 0:K=>J({type:"diary",k:d,x:K.x,y:K.y}),role:"button",tabIndex:0,onKeyDown:K=>!k&&K.key==="Enter"&&dt(d),children:[u.jsx("span",{className:"spark",children:"✨"}),u.jsxs("div",{className:"d-head",children:["🩷",u.jsxs("span",{className:"lnk"+(bi(d)?" wd-"+bi(d):""),children:[ge(d)," ",Ts[$e(d).getDay()]]}),"🩷"]}),k?u.jsx(Im,{initial:c[d].text,appendNewline:!0,marks:s,onEditMarks:a,bottomToolbar:!0,onSave:K=>Hi(d,K),onCancel:()=>w(null),onDelete:()=>co(d),placeholder:"内容を書きなおしてね"}):u.jsx("div",{className:"body",children:hn(c[d].text)})]})]}),X&&u.jsx("div",{className:"done-row",style:b?void 0:{marginTop:0},children:u.jsxs(Yu,{className:"done-bubble",onLongPress:K=>J({type:"done",k:d,x:K.x,y:K.y}),children:[u.jsxs("div",{className:"done-head",children:[u.jsx("span",{children:"🩷 できたこと"}),Ee&&u.jsx("button",{className:"hv-open","aria-label":"習慣ビューをひらく",onClick:K=>{K.stopPropagation(),ne(!0)},children:"🎯 習慣ビュー"})]}),D.map((K,ft)=>u.jsxs("div",{className:"done-line",children:["☑ ",hn(K.text),K.time?u.jsxs("span",{className:"done-time",children:[" (",K.time,")"]}):null]},ft)),Ee&&u.jsx("div",{className:"habits-row"+(D.length?" has-sep":""),children:re.map(K=>{const ft=U.includes(K.id);return u.jsxs("button",{className:"habit-chip"+(ft?" on":""),onClick:()=>In(d,K.id),children:[K.emoji?K.emoji+" ":"",K.name,ft?" 🩷":""]},K.id)})})]})})]},d)})]}),!h&&u.jsxs("div",{className:"bar bar-fixed",ref:Bt,style:{bottom:ee},children:[u.jsxs("div",{className:"chips",children:[R("今日",gn),R("昨日",Ku()),u.jsxs("button",{className:"chip chip-date",children:["📅 ",N===gn||N===Ku()?"日付をえらぶ":C,u.jsx("input",{type:"date",value:N,onChange:d=>d.target.value&&_(d.target.value)})]}),c[N]&&u.jsx("span",{className:"exists-note",children:"この日はもうあるので追記されます"})]}),s&&s.length>0&&u.jsx(wf,{marks:s,onInsert:mr,onEdit:a}),u.jsxs("div",{className:"in-row",children:[u.jsx("textarea",{ref:Ft,className:"ta",rows:1,placeholder:N===gn?"今日あったことを書く…":`${C} に追記…`,value:M,onChange:Ki}),u.jsx("button",{className:"send","aria-label":"送信",disabled:!M.trim(),onClick:Ui,children:"↑"})]})]}),de&&u.jsx(Fm,{x:de.x,y:de.y,onClose:()=>J(null),onCopy:()=>{var d;return el(`🩷${Ls(de.k)}🩷
`+(de.type==="diary"?((d=c[de.k])==null?void 0:d.text)||"":qi(de.k)))},onEdit:de.type==="diary"?()=>{J(null),dt(de.k)}:void 0,onDelete:de.type==="diary"?()=>{J(null),co(de.k)}:void 0}),$n&&u.jsx(bf,{message:$n.message,onConfirm:$n.onConfirm,onCancel:()=>Ut(null)}),Ce!==null&&u.jsxs("div",{className:"mv-screen",children:[u.jsxs("div",{className:"hd",children:[u.jsx("button",{className:"back-btn","aria-label":"とじる",onClick:()=>ke(null),children:"‹"}),u.jsxs("div",{style:{minWidth:0},children:[u.jsx("div",{className:"hd-title",children:"🔖 マークで集める"}),u.jsxs("div",{className:"hd-sub",children:[(Ge.byMark[Ce]||[]).length,"件 ・ 全期間"]})]}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"ぜんぶコピー",onClick:Zi,children:"📋"})]}),u.jsx("div",{className:"mv-marks",children:mn.map(d=>u.jsxs("button",{className:"mv-chip"+(Ce===d?" on":""),onClick:()=>ke(d),children:[u.jsx("span",{className:"mv-chip-m",children:d}),u.jsx("span",{className:"mv-chip-n",children:Ge.counts[d]||0})]},d))}),u.jsx("div",{className:"mv-list",children:(Ge.byMark[Ce]||[]).length===0?u.jsx("div",{className:"empty",children:Ce===Nr?`今日のコマはまだありません。
上のピンク留めバーから書くと集まります💗`:`「${Ce||""}」が行頭に付いた行はまだありません。
日記の入力欄でマークを押して書くと集まります💗`}):(Ge.byMark[Ce]||[]).map((d,k)=>u.jsxs("button",{className:"mv-row",onClick:()=>Ji(d.dateKey),children:[u.jsx("span",{className:"mv-date",children:ge(d.dateKey).slice(5)}),u.jsx("span",{className:"mv-text",children:d.text})]},k))})]}),q&&u.jsx(Bm,{habits:v,habitAch:j,onToggle:In,onClose:()=>ne(!1),onManage:()=>B(!0)}),F&&u.jsx("div",{className:"overlay habit-over",onClick:ho,children:u.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[u.jsx("h3",{children:"🎯 習慣"}),u.jsx("p",{className:"panel-note",children:"毎日くり返すこと。日記の「できたこと」からワンタップで記録できます。"}),v.map((d,k)=>u.jsxs("div",{className:"mem-row",style:{flexWrap:"wrap"},children:[u.jsx("input",{className:"f-input",style:{width:54,textAlign:"center",flex:"0 0 auto"},maxLength:4,placeholder:"🩷",value:d.emoji||"",onChange:b=>fn(d.id,{emoji:b.target.value})}),u.jsx("input",{className:"f-input",style:{flex:1,minWidth:0},placeholder:"習慣の名前",value:d.name,onChange:b=>fn(d.id,{name:b.target.value})}),u.jsx("button",{className:"mem-btn",disabled:k===0,onClick:()=>po(k,-1),"aria-label":"上へ",children:"↑"}),u.jsx("button",{className:"mem-btn",disabled:k===v.length-1,onClick:()=>po(k,1),"aria-label":"下へ",children:"↓"}),u.jsx("button",{className:"mem-btn",onClick:()=>Yi(d.id),"aria-label":"削除",children:"🗑"}),u.jsxs("div",{className:"seg",style:{flexBasis:"100%",marginTop:4},children:[u.jsx("button",{className:d.freq!=="weekly"?"on":"",onClick:()=>fo(d.id,"daily"),children:"毎日"}),u.jsx("button",{className:d.freq==="weekly"?"on":"",onClick:()=>fo(d.id,"weekly"),children:"毎週"})]}),d.freq==="weekly"&&u.jsx("div",{className:"dow-row",children:Um.map(b=>u.jsx("button",{className:"dow-chip"+((d.days||[]).includes(b)?" on":""),onClick:()=>Qi(d.id,b),children:Ts[b]},b))})]},d.id)),v.length===0&&u.jsx("p",{className:"panel-note",children:"まだ習慣がありません。追加してね💗"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:Vi,children:"＋ 習慣を追加"}),u.jsx("button",{className:"p-close",onClick:ho,children:"閉じる"})]})]})}),me&&u.jsx("div",{className:"overlay",onClick:()=>Xe(!1),children:u.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[u.jsx("h3",{children:"📤 日記をテキストで書き出し"}),u.jsx("textarea",{ref:Rn,readOnly:!0,value:pn()}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:mo,children:Ct?"コピーしたよ💗":"ぜんぶコピー"}),u.jsx("button",{className:"p-dl",onClick:gr,children:".txtでDL"}),u.jsx("button",{className:"p-close",onClick:()=>Xe(!1),children:"閉じる"})]})]})}),Nt&&u.jsx("div",{className:"overlay",onClick:()=>Be(!1),children:u.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[u.jsx("h3",{children:"📥 テキストから復元"}),u.jsx("textarea",{placeholder:`エクスポートした .txt の内容をここに貼り付けてね

🩷2026/07/17🩷 9:30
今日あったこと…`,value:Ue,onChange:d=>O(d.target.value)}),u.jsx("p",{className:"panel-note",children:"※ すでにある日付の日記は上書きせずスキップされます"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",disabled:!Ue.trim(),onClick:Xi,children:"読み込む"}),u.jsx("button",{className:"p-close",onClick:()=>{Be(!1),O("")},children:"閉じる"})]})]})})]})}function Hm({items:e,keyOf:t,onReorder:n,renderItem:r,onLongPress:o,longPress:i=320,footer:l}){const[s,a]=z.useState(null),[c,g]=z.useState(null),x=z.useRef(null),f=z.useRef({});f.current.items=e,f.current.keyOf=t,f.current.onReorder=n,f.current.onLongPress=o;const v=s||e,S=w=>{var N;return(N=x.current)==null?void 0:N.querySelector(`[data-dk="${CSS.escape(String(w))}"]`)},j=()=>{const w=x.current;if(!w||f.current.dragKey==null)return;const N=S(f.current.dragKey);if(!N)return;const _=w.getBoundingClientRect(),M=_.left+N.offsetLeft,L=_.top+N.offsetTop,A=f.current.pointerX-f.current.grabX-M,I=f.current.pointerY-f.current.grabY-L;N.style.transform=`translate(${A}px, ${I}px) scale(1.08)`},P=w=>{const N=S(w);if(!N)return;const _=N.getBoundingClientRect();f.current.dragKey=w,f.current.grabX=f.current.pointerX-_.left,f.current.grabY=f.current.pointerY-_.top,f.current.pickupX=f.current.pointerX,f.current.pickupY=f.current.pointerY,f.current.moved=!1,f.current.order=f.current.items.slice(),N.style.zIndex="10",a(f.current.order),g(w);try{navigator.vibrate&&navigator.vibrate(12)}catch{}requestAnimationFrame(j)},m=()=>{const w=x.current;if(!w||f.current.dragKey==null)return;const N=w.getBoundingClientRect(),_=f.current.pointerX-N.left,M=f.current.pointerY-N.top,L=[...w.querySelectorAll("[data-dk]")];let A=0,I=1/0;for(let me=0;me<L.length;me++){const Xe=L[me],Nt=Xe.offsetLeft+Xe.offsetWidth/2,Be=Xe.offsetTop+Xe.offsetHeight/2,Ue=(_-Nt)**2+(M-Be)**2;Ue<I&&(I=Ue,A=me)}const W=f.current.order,se=W.findIndex(me=>f.current.keyOf(me)===f.current.dragKey);if(se!==-1&&se!==A){const[me]=W.splice(se,1);W.splice(A,0,me),a(W.slice())}requestAnimationFrame(j)},p=()=>{if(clearTimeout(f.current.timer),f.current.dragKey!=null){const w=S(f.current.dragKey);if(w&&(w.style.transform="",w.style.zIndex=""),f.current.moved)f.current.onReorder(f.current.order.slice());else if(f.current.onLongPress){const N=f.current.items.find(_=>f.current.keyOf(_)===f.current.dragKey);f.current.onLongPress({item:N,x:f.current.pointerX,y:f.current.pointerY})}f.current.suppress=Date.now()+450}f.current.dragKey=null,g(null),a(null)};z.useEffect(()=>{const w=x.current;if(!w)return;const N=A=>{if(A.touches.length!==1)return;const I=A.target.closest("[data-dk]");if(!I||!w.contains(I))return;const W=A.touches[0];f.current.startX=W.clientX,f.current.startY=W.clientY,f.current.pointerX=W.clientX,f.current.pointerY=W.clientY,f.current.moved=!1;const se=I.getAttribute("data-dk");clearTimeout(f.current.timer),f.current.timer=setTimeout(()=>{f.current.moved||P(se)},i)},_=A=>{const I=A.touches[0];if(f.current.pointerX=I.clientX,f.current.pointerY=I.clientY,f.current.dragKey==null){(Math.abs(I.clientX-f.current.startX)>12||Math.abs(I.clientY-f.current.startY)>12)&&(f.current.moved=!0,clearTimeout(f.current.timer));return}(Math.abs(I.clientX-f.current.pickupX)>8||Math.abs(I.clientY-f.current.pickupY)>8)&&(f.current.moved=!0),A.preventDefault(),m()},M=()=>{clearTimeout(f.current.timer),f.current.dragKey!=null&&p()},L=A=>A.preventDefault();return w.addEventListener("touchstart",N,{passive:!0}),w.addEventListener("touchmove",_,{passive:!1}),w.addEventListener("touchend",M,{passive:!0}),w.addEventListener("touchcancel",M,{passive:!0}),w.addEventListener("contextmenu",L),()=>{w.removeEventListener("touchstart",N),w.removeEventListener("touchmove",_),w.removeEventListener("touchend",M),w.removeEventListener("touchcancel",M),w.removeEventListener("contextmenu",L)}},[i]);const h=w=>{f.current.suppress&&Date.now()<f.current.suppress&&(w.stopPropagation(),w.preventDefault(),f.current.suppress=0)};return u.jsxs("div",{ref:x,className:"ig-grid",onClickCapture:h,children:[v.map(w=>{const N=t(w);return u.jsx("div",{"data-dk":N,className:"ig-cell"+(c===N?" dragging":""),children:r(w)},N)}),l]})}function Wm({onBack:e,children:t}){const[n,r]=z.useState(0),[o,i]=z.useState(!1),l=z.useRef(null),s=z.useRef(!1),a=f=>{if(f.touches.length!==1||document.querySelector(".overlay"))return;const v=f.touches[0];v.clientX>28||(l.current={x:v.clientX,y:v.clientY},s.current=!1)},c=f=>{if(!l.current)return;const v=f.touches[0],S=v.clientX-l.current.x,j=v.clientY-l.current.y;if(!s.current){if(Math.abs(S)<8&&Math.abs(j)<8)return;if(Math.abs(j)>Math.abs(S)){l.current=null;return}s.current=!0,i(!1)}r(Math.max(0,S))},g=()=>{if(!l.current)return;const f=Math.min(110,window.innerWidth*.3);i(!0),s.current&&n>f?(r(window.innerWidth),setTimeout(e,190)):r(0),l.current=null,s.current=!1},x=n>0?{transform:`translateX(${n}px)`,transition:o?"transform .19s ease-out":"none",boxShadow:"-10px 0 26px rgba(120,50,90,.18)"}:void 0;return u.jsx("div",{className:"swipe-wrap",style:x,onTouchStart:a,onTouchMove:c,onTouchEnd:g,children:t})}const Vm=z.lazy(()=>uo(()=>import("./TalkRoom-CDzNGXlY.js"),[],import.meta.url)),Qm=z.lazy(()=>uo(()=>import("./TodoRoom-CjqpnzFR.js"),[],import.meta.url)),Ym=z.lazy(()=>uo(()=>import("./DarelogRoom-B5mAMoXs.js"),__vite__mapDeps([0,1]),import.meta.url)),Xm=z.lazy(()=>uo(()=>import("./ExpenseRoom-CJX62cTh.js"),[],import.meta.url)),Gm=["💗","🩷","💛","🩵","💜","🤍","🖤","🌸","🌷","🎀","🌟","✨","⭐️","👑","🫶","🐰","🐻","🐱","🦄","🌙","🌊","🌿","🍓","🍒","🧸","📖","💬","✅","🌗","💰"];function Jm(){const[e,t]=z.useState(null),[n,r]=z.useState({screen:"home"}),[o,i]=z.useState(!1),[l,s]=z.useState(""),[a,c]=z.useState(null),[g,x]=z.useState(null),[f,v]=z.useState(!1),[S,j]=z.useState(null),[P,m]=z.useState(""),[p,h]=z.useState(null),[w,N]=z.useState(""),[_,M]=z.useState(0),[L,A]=z.useState(null),I=z.useRef(null),W=z.useRef(0),[se,me]=z.useState(hm),[Xe,Nt]=z.useState(!1),[Be,Ue]=z.useState(""),[O,F]=z.useState(!1),[B,q]=z.useState(""),[ne,de]=z.useState(""),[J,Ce]=z.useState(null),[ke,Ct]=z.useState(!1),[ot,cn]=z.useState(null),[Bi,Ke]=z.useState(!1),[Ft,Rn]=z.useState(""),Bt=z.useRef(null),ee=(y,C=3e3)=>{Rn(y),clearTimeout(Bt.current),Bt.current=setTimeout(()=>Rn(""),C)};z.useEffect(()=>{(async()=>{try{const y=await gm();y.some(k=>k.id===be)&&r({screen:"room",roomId:be}),t(y);const[C,R,d]=await Promise.all([V(Yo),V(ro),V(Dl)]);C&&C.dateKey===Ze()&&m(C.text),Array.isArray(R)&&R.length&&me(R),Ce(d||{})}catch{ee("データの読み込みに失敗しました"),t([])}})()},[]),z.useEffect(()=>{if(n.screen!=="home")return;let y=!0;return(async()=>{try{let C=await V(Te(be));C=typeof C=="string"?JSON.parse(C):C||{};const R=C[Ze()];if(!y)return;R&&typeof R.text=="string"&&R.text.trim()?A({written:!0,preview:R.text.split(`
`)[0].slice(0,34)}):A({written:!1})}catch{y&&A({written:!1})}})(),()=>{y=!1}},[n.screen,_]),z.useEffect(()=>{n.screen==="home"&&I.current&&(I.current.scrollTop=W.current)},[n.screen]);const dn=y=>{t(C=>{let R=C;return C.find(d=>d.id===be)||(R=[...C,{id:be,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),R=R.map(d=>d.id===be?{...d,...y!=null?{preview:y}:{},lastAt:Date.now()}:d),Q(Pt,R),R}),M(C=>C+1)},Ui=async({text:y,time:C,dateKey:R})=>{try{const d=En(be),k=await V(d)||{},b=(k[R]||[]).slice();b.some(D=>D.text===y&&D.time===C)||b.push({text:y,time:C}),await Q(d,{...k,[R]:b}),dn(`🩷 できたこと ☑ ${y}`.slice(0,40))}catch{ee("できたことの記録に失敗しました")}},Ki=async({text:y,time:C,dateKey:R})=>{try{const d=En(be),k=await V(d)||{},b=(k[R]||[]).filter(T=>!(T.text===y&&T.time===C)),D={...k};b.length?D[R]=b:delete D[R],await Q(d,D),dn(null)}catch{}},mr=y=>{t(y),Q(Pt,y).catch(()=>ee("保存に失敗しました"))},dt=(y,C)=>{t(R=>{const d=R.map(k=>k.id===y?{...k,...C}:k);return Q(Pt,d).catch(()=>ee("保存に失敗しました")),d})},Hi=async(y,C,R)=>{try{const d=(e||[]).find(X=>X.id===C);if(!d)return{ok:!1};const k=Te(C),b=await V(k)||{},D=Array.isArray(b.todos)?b.todos:[],T=(R||"").trim(),U=T?(d.places||[]).find(X=>(X.name||"").trim()===T):null,Z={...y,placeId:U?U.id:null},re=[...D,Z];await Q(k,{...b,todos:re});const Ee=re.filter(X=>!X.done&&!X.deferred).length;return dt(C,{preview:`${Z.done?"☑":"☐"} ${(Z.text||"").split(`
`)[0]}`.slice(0,40),todoOpen:Ee,lastAt:Date.now()}),{ok:!0,placeDropped:!!T&&!U,placeKept:!!U}}catch{return{ok:!1}}},Wi=async y=>{const C=y.trim();if(!C)return;const R=Ze();try{await Q(Yo,{dateKey:R,text:C}),m(C);const d=Te(be);let k=await V(d);k=k&&typeof k=="object"?k:{};const b=k[R],D=Dm(b?b.text:"",C);k={...k,[R]:{text:D,time:b?b.time:mf()}},await Q(d,k);const T=Object.keys(k).sort(),U=T[T.length-1],Z=k[U].text.split(`
`)[0].slice(0,40);t(re=>{let Ee=re;return re.find(X=>X.id===be)||(Ee=[...re,{id:be,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),Ee=Ee.map(X=>X.id===be?{...X,preview:Z,lastAt:Date.now()}:X),Q(Pt,Ee),Ee}),M(re=>re+1),ee("今日のコマをピン留めしたよ🩷")}catch{ee("宣言の保存に失敗しました")}},$n=y=>{me(y),Q(ro,y).catch(()=>ee("マークの保存に失敗しました"))},Ut=()=>{const y=Be.trim();if(y){if(se.includes(y)){Ue("");return}$n([...se,y]),Ue("")}},co=y=>$n(se.filter(C=>C!==y));z.useEffect(()=>{!o||!e||(async()=>{const y={};for(const C of e)y[C.id]=await V(Te(C.id));c(y)})()},[o,e]);const In=e||[],Et=z.useMemo(()=>{if(!l||!a||!e)return null;const y=l.toLowerCase(),C=[];for(const R of In){const d=a[R.id],k=[];if(R.type==="diary"){const b=d&&typeof d=="object"?d:{};for(const D of Object.keys(b).sort())(b[D].text+ge(D)).toLowerCase().includes(y)&&k.push({snippet:b[D].text.split(`
`)[0],date:ge(D)})}else if(R.type==="todo"){const b=d&&Array.isArray(d.todos)?d.todos:[];for(const D of b)(D.text+ge(D.dateKey)).toLowerCase().includes(y)&&k.push({snippet:`${D.done?"☑":"☐"} ${D.text.split(`
`)[0]}`,date:ge(D.dateKey)})}else if(R.type==="darelog"){const b=d&&Array.isArray(d.records)?d.records:[],D=T=>{var U,Z;return((Z=(U=R.members)==null?void 0:U.find(re=>re.id===T))==null?void 0:Z.name)||""};for(const T of b){const U=D(T.memberId);(U+(T.memo||"")+ge(T.dateKey)).toLowerCase().includes(y)&&k.push({snippet:`${U}${T.memo?`: ${T.memo}`:""}`,date:ge(T.dateKey)})}}else if(R.type==="expense"){const b=d&&Array.isArray(d.expenses)?d.expenses:[],D=T=>{var U,Z;return((Z=(U=R.categories)==null?void 0:U.find(re=>re.id===T))==null?void 0:Z.name)||""};for(const T of b)(D(T.categoryId)+(T.memo||"")+String(T.amount)+ge(T.dateKey)).toLowerCase().includes(y)&&k.push({snippet:`${D(T.categoryId)} ¥${T.amount}${T.memo?" "+T.memo:""}`,date:ge(T.dateKey)})}else{const b=d&&Array.isArray(d.messages)?d.messages:[],D=T=>{var U,Z;return((Z=(U=R.members)==null?void 0:U.find(re=>re.id===T))==null?void 0:Z.name)||""};for(const T of b)((T.text+ge(T.dateKey)).toLowerCase().includes(y)||D(T.memberId).toLowerCase().includes(y))&&k.push({snippet:`${D(T.memberId)||"？"}: ${T.text.split(`
`)[0]}`,date:ge(T.dateKey)})}k.length===0&&R.name.toLowerCase().includes(y)&&k.push({snippet:R.preview||"",date:""}),k.length&&C.push({room:R,hits:k})}return C},[l,a,In,e]),Vi=y=>l?y.split(new RegExp(`(${gf(l)})`,"gi")).map((R,d)=>R.toLowerCase()===l.toLowerCase()?u.jsx("mark",{className:"hl",children:R},d):R):y,fn=()=>{const y=g.name.trim();if(!y){ee("ルーム名を入れてね");return}const C={diary:"💗",todo:"✅",darelog:"🌗",expense:"💰",talk:"🩷"}[g.type]||"🩷",R=g.type==="darelog"?[{id:Oe(),name:"ヒカルくん",color:"#d4f0ff",icon:{type:"emoji",value:"🌊"},side:"left"},{id:Oe(),name:"柊くん",color:"#d9ffe3",icon:{type:"emoji",value:"🌿"},side:"left"},{id:Oe(),name:"ひかりちゃん",color:"#ffd9ec",icon:{type:"emoji",value:"🌸"},side:"right"}]:[],d=g.type==="expense"?[{id:Oe(),name:"AI費用",emoji:"🤖",color:"#2196F3"},{id:Oe(),name:"ピンクグッズ",emoji:"🎀",color:"#E91E63"},{id:Oe(),name:"ネイル",emoji:"💅",color:"#9C27B0"},{id:Oe(),name:"旅費交通費",emoji:"🚃",color:"#00A5B5",transit:!0}]:void 0,k={id:Oe(),type:g.type,name:y,emoji:g.emoji.trim()||C,theme:g.theme||Dr,members:R,createdAt:Date.now(),lastAt:0,preview:"",...g.type==="todo"?{shopping:!!g.shopping}:{},...d?{categories:d,subscriptions:[],subsPosted:{},transitSeeded:!0,stations:[],fares:[],defaultFromId:null,roundTripDefault:!1,incomeSeeded:!0,incomeCategories:[{id:Oe(),name:"売上",emoji:"💰",color:"#2E9E5B"},{id:Oe(),name:"返金",emoji:"↩️",color:"#3BA7A0"},{id:Oe(),name:"その他",emoji:"✨",color:"#7FB800"}]}:{}};mr([...e,k]),x(null),r({screen:"room",roomId:k.id})},fo=()=>{const y=g.name.trim();if(!y){ee("ルーム名を入れてね");return}dt(g.roomId,{name:y,emoji:g.emoji.trim()||"💗",theme:g.theme||Dr,...g.type==="todo"?{shopping:!!g.shopping}:{}}),x(null)},Qi=y=>{x({mode:"edit",roomId:y.id,name:y.name,emoji:y.emoji,type:y.type,shopping:!!y.shopping,theme:y.theme||Dr}),v(!1)},po=async y=>{try{const C=await V(Te(y));C&&await Q(pm(y),C),mr(e.filter(R=>R.id!==y)),x(null),j(null),ee("ルームを削除しました")}catch{ee("削除に失敗しました")}},Yi=()=>{const y=e.find(C=>C.id===g.roomId);j({message:`ルーム「${(y==null?void 0:y.name)||""}」を削除しますか？
中の記録もすべて消えます。`,onConfirm:()=>po(g.roomId)})},ho=async()=>{de(""),Ke(!1);try{const y=await Wu();q(JSON.stringify(y,null,2))}catch{q("")}F(!0)},pn=async()=>{const y={...J||{},lastDateKey:Ze(),lastAt:Date.now()};Ce(y);try{await Q(Dl,y)}catch{}},mo=y=>{const C=new Blob([y],{type:"application/json;charset=utf-8"}),R=URL.createObjectURL(C),d=document.createElement("a");d.href=R,d.download=Oo,document.body.appendChild(d),d.click(),d.remove(),setTimeout(()=>URL.revokeObjectURL(R),3e3)},gr=async()=>{if(!ke){Ct(!0);try{let y;try{y=JSON.stringify(await Wu(),null,2)}catch{ee("バックアップの作成に失敗しました 🥺");return}try{const C=new File([y],Oo,{type:"application/json"});if(navigator.canShare&&navigator.canShare({files:[C]})){await navigator.share({files:[C],title:Oo}),await pn(),ee("バックアップを保存したよ💗 同じファイルに置き換えできたかな？");return}}catch(C){if(C&&(C.name==="AbortError"||C.name==="NotAllowedError"))return}try{mo(y),await pn(),ee("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{ee("保存できない環境みたい。コピーを使ってね")}}finally{Ct(!1)}}},Xi=()=>{try{mo(B),pn(),ee("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{ee("保存できない環境みたい。コピーを使ってね")}},hn=Ze(),Ge=(()=>{if(!(J!=null&&J.lastDateKey))return null;const y=$e(hn)-$e(J.lastDateKey);return Math.max(0,Math.round(y/864e5))})(),mn=Ge===null||Ge>=7,Gi=!!J&&J.lastDateKey!==hn&&J.dismissedDateKey!==hn,Ji=async()=>{const y={...J||{},dismissedDateKey:hn};Ce(y);try{await Q(Dl,y)}catch{}},Zi=async()=>{try{await navigator.clipboard.writeText(B),Ke(!0),setTimeout(()=>Ke(!1),2e3)}catch{ee("コピーできませんでした。全選択して手動でコピーしてね")}},qi=y=>{var d;const C=(d=y.target.files)==null?void 0:d[0];if(!C)return;const R=new FileReader;R.onload=()=>de(String(R.result||"")),R.onerror=()=>ee("ファイルを読めませんでした"),R.readAsText(C),y.target.value=""},el=()=>{let y;try{y=JSON.parse(ne)}catch{ee("JSONとして読めませんでした。ファイルが壊れているかも 🥺",4e3);return}const C=Lm(y);if(C){ee(C,4500);return}cn({obj:y,counts:Pm(y),exportedAt:y.exportedAt||"",version:y.version})},go=async()=>{const y=ot==null?void 0:ot.obj;if(y)try{const C=await Om(y);t(C.rooms),y.declaration&&y.declaration.dateKey===Ze()&&!P&&(await Q(Yo,y.declaration),m(y.declaration.text)),M(R=>R+1),cn(null),F(!1),de(""),ee(`復元完了💗 ${C.addedRooms}ルーム / ${C.addedItems}件を追加`)}catch{cn(null),ee("復元中にエラーが出ました。ファイルが壊れているかも 🥺",4e3)}};if(!e)return u.jsx("div",{className:"app",children:u.jsx("style",{children:Qu})});const gn=u.jsxs("div",{className:"pin",onClick:()=>{N(P),h(P?"view":"edit")},role:"button",children:[u.jsx("span",{className:"pin-ic",children:P?"📌":"🩷"}),P?u.jsx("span",{className:"pin-txt",children:P}):u.jsx("span",{className:"pin-ph",children:"今日のコマをえらぶ🩷"})]});let xn;if(n.screen==="room"){const y=e.find(C=>C.id===n.roomId);if(!y)xn=null,setTimeout(()=>r({screen:"home"}),0);else{const C={room:y,onBack:()=>r({screen:"home"}),onMeta:d=>dt(y.id,d),initialQuery:n.q,showToast:ee,pinned:gn},R=y.type==="diary"?u.jsx(Km,{...C,syncSignal:_,marks:se,onEditMarks:()=>Nt(!0)},y.id):y.type==="todo"?u.jsx(Qm,{...C,onTodoComplete:Ui,onTodoUncomplete:Ki,onRoomChange:d=>dt(y.id,d),todoRooms:e.filter(d=>d.type==="todo"&&d.id!==y.id),onMoveTodo:Hi},y.id):y.type==="darelog"?u.jsx(Ym,{...C,onRoomChange:d=>dt(y.id,d)},y.id):y.type==="expense"?u.jsx(Xm,{...C,onRoomChange:d=>dt(y.id,d)},y.id):u.jsx(Vm,{...C,onRoomChange:d=>dt(y.id,d)},y.id);xn=u.jsx(Wm,{onBack:()=>r({screen:"home"}),children:u.jsx(z.Suspense,{fallback:u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"hd hd-loading"}),u.jsx("div",{className:"chat"})]}),children:R})},y.id)}}else xn=u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"hd hd-home",children:[u.jsx("div",{className:"app-brand",children:u.jsx("div",{className:"app-title",children:"💖Nachumin Lifelog💖"})}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"バックアップ",onClick:ho,children:"💾"}),u.jsx("button",{className:"icon-btn","aria-label":"新しいルーム",onClick:()=>x({mode:"new",name:"",emoji:"",type:"talk"}),children:"➕"}),u.jsx("button",{className:"icon-btn","aria-label":"ぜんぶ検索",onClick:()=>{i(!o),s("")},children:o?"✕":"🔍"})]}),Gi&&u.jsxs("div",{className:"bk-banner"+(mn?" stale":""),children:[u.jsxs("button",{className:"bk-main",onClick:gr,disabled:ke,children:[u.jsx("span",{className:"bk-ttl",children:"💾 今日のバックアップ🩷"}),u.jsx("span",{className:"bk-sub",children:Ge===null?"まだ一度も保存していません":mn?`最後の保存から ${Ge}日 たっています`:"タップで1ファイルに書き出し"})]}),u.jsx("button",{className:"bk-x","aria-label":"閉じる",onClick:Ji,children:"✕"})]}),o&&u.jsx("div",{className:"search-row",children:u.jsx("input",{autoFocus:!0,placeholder:"ぜんぶのルームから検索（ことば・話者・日付）",value:l,onChange:y=>s(y.target.value)})}),Et?u.jsx("div",{className:"rooms",children:Et.length===0?u.jsx("div",{className:"empty",children:"みつかりませんでした 🥺"}):Et.map(({room:y,hits:C})=>u.jsxs("div",{className:"room-row",onClick:()=>r({screen:"room",roomId:y.id,q:l}),children:[u.jsx("div",{className:"r-ic",children:y.emoji}),u.jsxs("div",{className:"r-main",children:[u.jsx("div",{className:"r-name",children:y.name}),u.jsx("div",{className:"r-prev",children:Vi(C[0].snippet)})]}),u.jsxs("div",{className:"r-side",children:[u.jsxs("span",{className:"r-badge",children:[C.length,"件"]}),C[0].date&&u.jsx("span",{className:"r-date",children:C[0].date})]})]},y.id))}):u.jsx("div",{className:"home-scroll",ref:I,onScroll:y=>{W.current=y.target.scrollTop},children:(()=>{const y=e.find(b=>b.id===be),C=In.filter(b=>b.id!==be),R=$e(Ze()),d=L?L.written?L.preview:`${R.getMonth()+1}/${R.getDate()}・きょうの分はまだ`:"…",k=b=>{const D=[...b];mr(e.map(T=>T.id===be?T:D.shift()))};return u.jsxs(u.Fragment,{children:[y&&u.jsxs("button",{className:"diary-card",onClick:()=>r({screen:"room",roomId:y.id}),children:[u.jsx("span",{className:"dc-ic",children:y.emoji}),u.jsxs("span",{className:"dc-main",children:[u.jsx("span",{className:"dc-name",children:"DIARY"}),u.jsx("span",{className:"dc-sub",children:d})]}),u.jsx("span",{className:"dc-arw",children:"›"})]}),u.jsx(Hm,{items:C,keyOf:b=>b.id,onReorder:k,onLongPress:({item:b})=>{b&&Qi(b)},footer:u.jsx("div",{className:"ig-cell ig-add",children:u.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>x({mode:"new",name:"",emoji:"",type:"talk"}),onKeyDown:b=>b.key==="Enter"&&x({mode:"new",name:"",emoji:"",type:"talk"}),children:[u.jsx("span",{className:"ig-btn",children:"＋"}),u.jsx("span",{className:"ig-name",children:"つくる"})]})}),renderItem:b=>{const D=b.type==="todo"&&b.todoOpen>0?b.todoOpen:null;return u.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>r({screen:"room",roomId:b.id}),onKeyDown:T=>T.key==="Enter"&&r({screen:"room",roomId:b.id}),children:[u.jsxs("span",{className:"ig-btn",style:Vu(b.theme),children:[b.emoji,D!=null&&u.jsx("span",{className:"ig-badge",children:D>99?"99+":D})]}),u.jsx("span",{className:"ig-name",children:b.name})]})}})]})})()})]});return u.jsxs("div",{className:"app",children:[u.jsx("style",{children:Qu}),xn,g&&u.jsx("div",{className:"overlay",onClick:()=>{x(null),v(!1)},children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:g.mode==="new"?"➕ 新しいルーム":"⚙️ ルーム設定"}),u.jsx("div",{className:"f-label",children:"ルーム名"}),u.jsx("input",{className:"f-input",autoFocus:g.mode==="new",placeholder:"ハートるんず",value:g.name,onChange:y=>x(C=>({...C,name:y.target.value}))}),u.jsx("div",{className:"f-label",children:"アイコン（タップで選ぶ）"}),u.jsx("div",{className:"emoji-picks",children:Gm.map(y=>u.jsx("button",{className:"emoji-pick"+(g.emoji===y?" on":""),onClick:()=>x(C=>({...C,emoji:y})),children:y},y))}),u.jsx("input",{className:"f-input",style:{width:130,textAlign:"center",marginTop:4},maxLength:8,placeholder:"または自由入力",value:g.emoji,onChange:y=>x(C=>({...C,emoji:y.target.value}))}),u.jsx("div",{className:"f-label",children:"テーマカラー"}),u.jsx("div",{className:"theme-swatches",children:yf.map(y=>{const C=(g.theme||Dr)===y;return u.jsx("button",{className:"theme-sw"+(C?" on":""),style:Vu(y),"aria-label":y,onClick:()=>x(R=>({...R,theme:y}))},y)})}),u.jsxs("div",{className:"f-label",children:["タイプ",g.mode==="edit"?"（変更できません）":""]}),u.jsxs("div",{className:"type-row",children:[u.jsxs("button",{className:"type-chip"+(g.type==="diary"?" on":""),disabled:g.mode==="edit",onClick:()=>x(y=>({...y,type:"diary"})),children:["📖 日記",u.jsx("small",{children:"1日=1吹き出し"})]}),u.jsxs("button",{className:"type-chip"+(g.type==="talk"?" on":""),disabled:g.mode==="edit",onClick:()=>x(y=>({...y,type:"talk"})),children:["💬 トーク",u.jsx("small",{children:"話者ごと"})]}),u.jsxs("button",{className:"type-chip"+(g.type==="todo"?" on":""),disabled:g.mode==="edit",onClick:()=>x(y=>({...y,type:"todo"})),children:["✅ TODO",u.jsx("small",{children:"やること"})]}),u.jsxs("button",{className:"type-chip"+(g.type==="darelog"?" on":""),disabled:g.mode==="edit",onClick:()=>x(y=>({...y,type:"darelog"})),children:["🌗 だれログ",u.jsx("small",{children:"朝昼夜の記録"})]}),u.jsxs("button",{className:"type-chip"+(g.type==="expense"?" on":""),disabled:g.mode==="edit",onClick:()=>x(y=>({...y,type:"expense"})),children:["💰 経費",u.jsx("small",{children:"支出を記録"})]})]}),g.type==="todo"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"f-label",children:"用途"}),u.jsxs("button",{className:"shop-toggle"+(g.shopping?" on":""),onClick:()=>x(y=>({...y,shopping:!y.shopping})),children:[u.jsx("span",{className:"shop-box",children:g.shopping?"✓":""}),"🛒 買い物リストとして使う（よく買うものクイック追加）"]})]}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:g.mode==="new"?fn:fo,children:g.mode==="new"?"つくる":"保存"}),g.mode==="edit"&&u.jsx("button",{className:"p-del",onClick:Yi,children:"削除"}),u.jsx("button",{className:"p-close",onClick:()=>{x(null),v(!1)},children:"閉じる"})]})]})}),O&&u.jsx("div",{className:"overlay",onClick:()=>F(!1),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"💾 まるごとバックアップ"}),u.jsx("p",{className:"panel-note",children:"全ルーム・全データ（日記 / TODO / だれログ / 経費 / 習慣 / 各種設定）を まるごと1ファイルに保存します。端末が変わっても元どおり復元できます。"}),u.jsxs("div",{className:"bk-last"+(mn?" stale":""),children:[u.jsx("span",{className:"bk-last-l",children:"最後にバックアップした日"}),u.jsx("span",{className:"bk-last-v",children:J!=null&&J.lastDateKey?`${ge(J.lastDateKey)}${Ge===0?"（今日）":`（${Ge}日前）`}`:"まだありません"})]}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:gr,disabled:ke,children:"💾 1タップで書き出し"}),u.jsx("button",{className:"p-dl",onClick:Xi,children:"ダウンロード"}),u.jsx("button",{className:"p-dl",onClick:Zi,children:Bi?"コピーしたよ💗":"コピー"})]}),u.jsxs("p",{className:"panel-note",children:["ファイル名は毎回 ",u.jsx("b",{children:Oo})," で固定。iPhoneの共有シートから 「ファイルに保存」を選ぶと、前のファイルを置き換えて上書きできます。"]}),u.jsx("div",{className:"f-label",style:{marginTop:6},children:"復元する（バックアップから読み込み）"}),u.jsx("p",{className:"panel-note",children:"既存のデータは消さず、足りない分だけ追加します（安全マージ）"}),u.jsxs("label",{className:"upload-btn",style:{alignSelf:"flex-start"},children:["📂 バックアップファイルを選ぶ",u.jsx("input",{type:"file",accept:".json,application/json,text/plain",onChange:qi})]}),u.jsx("textarea",{placeholder:"または、コピーしたバックアップをここに貼り付け",value:ne,onChange:y=>de(y.target.value),style:{minHeight:120}}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",disabled:!ne.trim(),onClick:el,children:"復元する"}),u.jsx("button",{className:"p-close",onClick:()=>{F(!1),de("")},children:"閉じる"})]})]})}),ot&&u.jsx("div",{className:"overlay bk-ask-over",onClick:()=>cn(null),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"⚠️ 復元まえの確認"}),u.jsxs("div",{className:"bk-ask-box",children:[u.jsxs("div",{className:"bk-ask-row",children:[u.jsx("span",{children:"ルーム"}),u.jsx("b",{children:ot.counts.rooms})]}),u.jsxs("div",{className:"bk-ask-row",children:[u.jsx("span",{children:"記録の件数"}),u.jsx("b",{children:ot.counts.items})]}),ot.exportedAt&&u.jsxs("div",{className:"bk-ask-row",children:[u.jsx("span",{children:"書き出し日時"}),u.jsx("b",{children:new Date(ot.exportedAt).toLocaleString("ja-JP")})]})]}),u.jsxs("p",{className:"panel-note",children:["今のデータは消えません（足りない分を追加する安全マージ）。 それでも念のため、",u.jsx("b",{children:"先に今のデータをバックアップ"}),"しておくのがおすすめです💗"]}),u.jsx("button",{className:"bk-first",onClick:gr,disabled:ke,children:"💾 先に今のデータをバックアップする"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:go,children:"この内容で復元する"}),u.jsx("button",{className:"p-close",onClick:()=>cn(null),children:"キャンセル"})]})]})}),p&&u.jsx("div",{className:"overlay",onClick:()=>h(null),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"🩷 今日のコマ"}),p==="view"?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"decl-full",children:P}),u.jsx("p",{className:"panel-note",children:"その日1日だけピン留め。日記にも記録されています🎬"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:()=>{N(P),h("edit")},children:"書きなおす"}),u.jsx("button",{className:"p-close",onClick:()=>h(null),children:"閉じる"})]})]}):u.jsxs(u.Fragment,{children:[u.jsx("textarea",{autoFocus:!0,style:{minHeight:120},placeholder:"今日は愛全開の私でいる！",value:w,onChange:y=>N(y.target.value)}),u.jsx("p",{className:"panel-note",children:"その日1日だけ表示。決定すると今日の日記の先頭に🎬として残ります"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",disabled:!w.trim(),onClick:()=>{Wi(w),h(null)},children:"決定"}),u.jsx("button",{className:"p-close",onClick:()=>h(null),children:"閉じる"})]})]})]})}),Xe&&u.jsx("div",{className:"overlay",onClick:()=>Nt(!1),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"⚙︎ 箇条書きマーク"}),u.jsx("p",{className:"panel-note",children:"日記の入力欄に出るマーク。タップで削除、下から追加できます。"}),u.jsxs("div",{className:"mark-manage",children:[se.map(y=>u.jsxs("span",{className:"mark-item",children:[y,u.jsx("button",{onClick:()=>co(y),"aria-label":"削除",children:"✕"})]},y)),se.length===0&&u.jsx("p",{className:"panel-note",children:"マークがありません。追加してね"})]}),u.jsxs("div",{className:"in-row",style:{marginTop:4},children:[u.jsx("input",{className:"f-input",maxLength:4,placeholder:"記号や絵文字（例: ❤︎）",value:Be,onChange:y=>Ue(y.target.value),onKeyDown:y=>y.key==="Enter"&&Ut()}),u.jsx("button",{className:"p-copy",style:{flex:"0 0 auto",padding:"8px 16px",borderRadius:999},disabled:!Be.trim(),onClick:Ut,children:"追加"})]}),u.jsx("div",{className:"panel-btns",children:u.jsx("button",{className:"p-close",onClick:()=>Nt(!1),children:"閉じる"})})]})}),S&&u.jsx(bf,{message:S.message,onConfirm:S.onConfirm,onCancel:()=>j(null)}),Ft&&u.jsx("div",{className:"toast",children:Ft})]})}let Xu=!1,Gu=!!(navigator.serviceWorker&&navigator.serviceWorker.controller);navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!Gu){Gu=!0;return}Xu||(Xu=!0,window.location.reload())});Jh({immediate:!0,onRegisteredSW(e,t){t&&(t.update(),setInterval(()=>t.update(),60*60*1e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&t.update()}))}});mm();cf(document.getElementById("root")).render(u.jsx(z.StrictMode,{children:u.jsx(Jm,{})}));export{ng as A,qm as B,Fm as C,eg as D,Zm as E,Ku as F,Im as I,dg as M,Yu as P,Em as S,fg as T,Ts as W,Te as a,ge as b,Hu as c,bi as d,bf as e,Ze as f,V as g,ug as h,gf as i,u as j,$e as k,Q as l,pg as m,mf as n,rg as o,ag as p,lg as q,z as r,jm as s,$m as t,Oe as u,sg as v,og as w,ig as x,cg as y,tg as z};
