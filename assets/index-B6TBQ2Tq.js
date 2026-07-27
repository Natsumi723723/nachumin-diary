const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DarelogRoom-yiPnpc1K.js","./TalkRoom-Bio4rGfb.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Gu={exports:{}},Ni={},Ju={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),bf=Symbol.for("react.portal"),Sf=Symbol.for("react.fragment"),jf=Symbol.for("react.strict_mode"),Nf=Symbol.for("react.profiler"),Cf=Symbol.for("react.provider"),Ef=Symbol.for("react.context"),zf=Symbol.for("react.forward_ref"),_f=Symbol.for("react.suspense"),Df=Symbol.for("react.memo"),Tf=Symbol.for("react.lazy"),Ca=Symbol.iterator;function Lf(e){return e===null||typeof e!="object"?null:(e=Ca&&e[Ca]||e["@@iterator"],typeof e=="function"?e:null)}var Zu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qu=Object.assign,ec={};function hr(e,t,n){this.props=e,this.context=t,this.refs=ec,this.updater=n||Zu}hr.prototype.isReactComponent={};hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tc(){}tc.prototype=hr.prototype;function Ts(e,t,n){this.props=e,this.context=t,this.refs=ec,this.updater=n||Zu}var Ls=Ts.prototype=new tc;Ls.constructor=Ts;qu(Ls,hr.prototype);Ls.isPureReactComponent=!0;var Ea=Array.isArray,nc=Object.prototype.hasOwnProperty,Ps={current:null},rc={key:!0,ref:!0,__self:!0,__source:!0};function oc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)nc.call(t,r)&&!rc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:so,type:e,key:i,ref:l,props:o,_owner:Ps.current}}function Pf(e,t){return{$$typeof:so,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ms(e){return typeof e=="object"&&e!==null&&e.$$typeof===so}function Mf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var za=/\/+/g;function nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mf(""+e.key):t.toString(36)}function Io(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case so:case bf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+nl(l,0):r,Ea(o)?(n="",e!=null&&(n=e.replace(za,"$&/")+"/"),Io(o,t,n,"",function(c){return c})):o!=null&&(Ms(o)&&(o=Pf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(za,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Ea(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+nl(i,s);l+=Io(i,t,n,a,o)}else if(a=Lf(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+nl(i,s++),l+=Io(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function yo(e,t,n){if(e==null)return e;var r=[],o=0;return Io(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Of(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},$o={transition:null},Rf={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:$o,ReactCurrentOwner:Ps};function ic(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:yo,forEach:function(e,t,n){yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yo(e,function(){t++}),t},toArray:function(e){return yo(e,function(t){return t})||[]},only:function(e){if(!Ms(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=hr;H.Fragment=Sf;H.Profiler=Nf;H.PureComponent=Ts;H.StrictMode=jf;H.Suspense=_f;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rf;H.act=ic;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ps.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)nc.call(t,a)&&!rc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:so,type:e.type,key:o,ref:i,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:Ef,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cf,_context:e},e.Consumer=e};H.createElement=oc;H.createFactory=function(e){var t=oc.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:zf,render:e}};H.isValidElement=Ms;H.lazy=function(e){return{$$typeof:Tf,_payload:{_status:-1,_result:e},_init:Of}};H.memo=function(e,t){return{$$typeof:Df,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=$o.transition;$o.transition={};try{e()}finally{$o.transition=t}};H.unstable_act=ic;H.useCallback=function(e,t){return Ie.current.useCallback(e,t)};H.useContext=function(e){return Ie.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ie.current.useEffect(e,t)};H.useId=function(){return Ie.current.useId()};H.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ie.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};H.useRef=function(e){return Ie.current.useRef(e)};H.useState=function(e){return Ie.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ie.current.useTransition()};H.version="18.3.1";Ju.exports=H;var z=Ju.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var If=z,$f=Symbol.for("react.element"),Af=Symbol.for("react.fragment"),Ff=Object.prototype.hasOwnProperty,Bf=If.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uf={key:!0,ref:!0,__self:!0,__source:!0};function lc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ff.call(t,r)&&!Uf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:$f,type:e,key:i,ref:l,props:o,_owner:Bf.current}}Ni.Fragment=Af;Ni.jsx=lc;Ni.jsxs=lc;Gu.exports=Ni;var u=Gu.exports,sc={exports:{}},Ze={},ac={exports:{}},uc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,B){var U=O.length;O.push(B);e:for(;0<U;){var Z=U-1>>>1,te=O[Z];if(0<o(te,B))O[Z]=B,O[U]=te,U=Z;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var B=O[0],U=O.pop();if(U!==B){O[0]=U;e:for(var Z=0,te=O.length,ue=te>>>1;Z<ue;){var J=2*(Z+1)-1,Ne=O[J],we=J+1,Et=O[we];if(0>o(Ne,U))we<te&&0>o(Et,Ne)?(O[Z]=Et,O[we]=U,Z=we):(O[Z]=Ne,O[J]=U,Z=J);else if(we<te&&0>o(Et,U))O[Z]=Et,O[we]=U,Z=we;else break e}}return B}function o(O,B){var U=O.sortIndex-B.sortIndex;return U!==0?U:O.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],m=1,g=null,d=3,v=!1,b=!1,S=!1,P=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(O){for(var B=n(c);B!==null;){if(B.callback===null)r(c);else if(B.startTime<=O)r(c),B.sortIndex=B.expirationTime,t(a,B);else break;B=n(c)}}function w(O){if(S=!1,p(O),!b)if(n(a)!==null)b=!0,tt(j);else{var B=n(c);B!==null&&ct(w,B.startTime-O)}}function j(O,B){b=!1,S&&(S=!1,h(T),T=-1),v=!0;var U=d;try{for(p(B),g=n(a);g!==null&&(!(g.expirationTime>B)||O&&!W());){var Z=g.callback;if(typeof Z=="function"){g.callback=null,d=g.priorityLevel;var te=Z(g.expirationTime<=B);B=e.unstable_now(),typeof te=="function"?g.callback=te:g===n(a)&&r(a),p(B)}else r(a);g=n(a)}if(g!==null)var ue=!0;else{var J=n(c);J!==null&&ct(w,J.startTime-B),ue=!1}return ue}finally{g=null,d=U,v=!1}}var D=!1,L=null,T=-1,F=5,M=-1;function W(){return!(e.unstable_now()-M<F)}function de(){if(L!==null){var O=e.unstable_now();M=O;var B=!0;try{B=L(!0,O)}finally{B?et():(D=!1,L=null)}}else D=!1}var et;if(typeof f=="function")et=function(){f(de)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,cn=ut.port2;ut.port1.onmessage=de,et=function(){cn.postMessage(null)}}else et=function(){P(de,0)};function tt(O){L=O,D||(D=!0,et())}function ct(O,B){T=P(function(){O(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){b||v||(b=!0,tt(j))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(O){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var U=d;d=B;try{return O()}finally{d=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=d;d=O;try{return B()}finally{d=U}},e.unstable_scheduleCallback=function(O,B,U){var Z=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Z+U:Z):U=Z,O){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=U+te,O={id:m++,callback:B,priorityLevel:O,startTime:U,expirationTime:te,sortIndex:-1},U>Z?(O.sortIndex=U,t(c,O),n(a)===null&&O===n(c)&&(S?(h(T),T=-1):S=!0,ct(w,U-Z))):(O.sortIndex=te,t(a,O),b||v||(b=!0,tt(j))),O},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(O){var B=d;return function(){var U=d;d=B;try{return O.apply(this,arguments)}finally{d=U}}}})(uc);ac.exports=uc;var Kf=ac.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf=z,Je=Kf;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cc=new Set,Kr={};function Ln(e,t){sr(e,t),sr(e+"Capture",t)}function sr(e,t){for(Kr[e]=t,e=0;e<t.length;e++)cc.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ml=Object.prototype.hasOwnProperty,Wf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_a={},Da={};function Vf(e){return Ml.call(Da,e)?!0:Ml.call(_a,e)?!1:Wf.test(e)?Da[e]=!0:(_a[e]=!0,!1)}function Qf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yf(e,t,n,r){if(t===null||typeof t>"u"||Qf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Os=/[\-:]([a-z])/g;function Rs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Os,Rs);je[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Os,Rs);je[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Os,Rs);je[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Is(e,t,n,r){var o=je.hasOwnProperty(t)?je[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yf(t,n,o,r)&&(n=null),r||o===null?Vf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),$s=Symbol.for("react.strict_mode"),Ol=Symbol.for("react.profiler"),dc=Symbol.for("react.provider"),fc=Symbol.for("react.context"),As=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),Il=Symbol.for("react.suspense_list"),Fs=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),pc=Symbol.for("react.offscreen"),Ta=Symbol.iterator;function wr(e){return e===null||typeof e!="object"?null:(e=Ta&&e[Ta]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,rl;function _r(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var ol=!1;function il(e,t){if(!e||ol)return"";ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_r(e):""}function Xf(e){switch(e.tag){case 5:return _r(e.type);case 16:return _r("Lazy");case 13:return _r("Suspense");case 19:return _r("SuspenseList");case 0:case 2:case 15:return e=il(e.type,!1),e;case 11:return e=il(e.type.render,!1),e;case 1:return e=il(e.type,!0),e;default:return""}}function $l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Kn:return"Portal";case Ol:return"Profiler";case $s:return"StrictMode";case Rl:return"Suspense";case Il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fc:return(e.displayName||"Context")+".Consumer";case dc:return(e._context.displayName||"Context")+".Provider";case As:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fs:return t=e.displayName||null,t!==null?t:$l(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return $l(e(t))}catch{}}return null}function Gf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $l(t);case 8:return t===$s?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jf(e){var t=hc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wo(e){e._valueTracker||(e._valueTracker=Jf(e))}function mc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Al(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function La(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gc(e,t){t=t.checked,t!=null&&Is(e,"checked",t,!1)}function Fl(e,t){gc(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bl(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bl(e,t,n){(t!=="number"||Go(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dr=Array.isArray;function tr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ma(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Dr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function xc(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Oa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ko,vc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ko.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zf=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){Zf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function wc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function kc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=wc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var qf=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hl(e,t){if(t){if(qf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vl=null;function Bs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ql=null,nr=null,rr=null;function Ra(e){if(e=co(e)){if(typeof Ql!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Di(t),Ql(e.stateNode,e.type,t))}}function bc(e){nr?rr?rr.push(e):rr=[e]:nr=e}function Sc(){if(nr){var e=nr,t=rr;if(rr=nr=null,Ra(e),t)for(e=0;e<t.length;e++)Ra(t[e])}}function jc(e,t){return e(t)}function Nc(){}var ll=!1;function Cc(e,t,n){if(ll)return e(t,n);ll=!0;try{return jc(e,t,n)}finally{ll=!1,(nr!==null||rr!==null)&&(Nc(),Sc())}}function Wr(e,t){var n=e.stateNode;if(n===null)return null;var r=Di(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Yl=!1;if(Rt)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Yl=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Yl=!1}function ep(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Or=!1,Jo=null,Zo=!1,Xl=null,tp={onError:function(e){Or=!0,Jo=e}};function np(e,t,n,r,o,i,l,s,a){Or=!1,Jo=null,ep.apply(tp,arguments)}function rp(e,t,n,r,o,i,l,s,a){if(np.apply(this,arguments),Or){if(Or){var c=Jo;Or=!1,Jo=null}else throw Error(E(198));Zo||(Zo=!0,Xl=c)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ec(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ia(e){if(Pn(e)!==e)throw Error(E(188))}function op(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ia(o),e;if(i===r)return Ia(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function zc(e){return e=op(e),e!==null?_c(e):null}function _c(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_c(e);if(t!==null)return t;e=e.sibling}return null}var Dc=Je.unstable_scheduleCallback,$a=Je.unstable_cancelCallback,ip=Je.unstable_shouldYield,lp=Je.unstable_requestPaint,pe=Je.unstable_now,sp=Je.unstable_getCurrentPriorityLevel,Us=Je.unstable_ImmediatePriority,Tc=Je.unstable_UserBlockingPriority,qo=Je.unstable_NormalPriority,ap=Je.unstable_LowPriority,Lc=Je.unstable_IdlePriority,Ci=null,Nt=null;function up(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Ci,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:fp,cp=Math.log,dp=Math.LN2;function fp(e){return e>>>=0,e===0?32:31-(cp(e)/dp|0)|0}var bo=64,So=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ei(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Tr(s):(i&=l,i!==0&&(r=Tr(i)))}else l=n&~o,l!==0?r=Tr(l):i!==0&&(r=Tr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),o=1<<n,r|=e[n],t&=~o;return r}function pp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-gt(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=pp(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Gl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pc(){var e=bo;return bo<<=1,!(bo&4194240)&&(bo=64),e}function sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ao(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function mp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-gt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ks(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function Mc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Oc,Hs,Rc,Ic,$c,Jl=!1,jo=[],Gt=null,Jt=null,Zt=null,Vr=new Map,Qr=new Map,Vt=[],gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Aa(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function br(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=co(t),t!==null&&Hs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function xp(e,t,n,r,o){switch(t){case"focusin":return Gt=br(Gt,e,t,n,r,o),!0;case"dragenter":return Jt=br(Jt,e,t,n,r,o),!0;case"mouseover":return Zt=br(Zt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Vr.set(i,br(Vr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Qr.set(i,br(Qr.get(i)||null,e,t,n,r,o)),!0}return!1}function Ac(e){var t=vn(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ec(n),t!==null){e.blockedOn=t,$c(e.priority,function(){Rc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vl=r,n.target.dispatchEvent(r),Vl=null}else return t=co(n),t!==null&&Hs(t),e.blockedOn=n,!1;t.shift()}return!0}function Fa(e,t,n){Ao(e)&&n.delete(t)}function yp(){Jl=!1,Gt!==null&&Ao(Gt)&&(Gt=null),Jt!==null&&Ao(Jt)&&(Jt=null),Zt!==null&&Ao(Zt)&&(Zt=null),Vr.forEach(Fa),Qr.forEach(Fa)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Jl||(Jl=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,yp)))}function Yr(e){function t(o){return Sr(o,e)}if(0<jo.length){Sr(jo[0],e);for(var n=1;n<jo.length;n++){var r=jo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&Sr(Gt,e),Jt!==null&&Sr(Jt,e),Zt!==null&&Sr(Zt,e),Vr.forEach(t),Qr.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)Ac(n),n.blockedOn===null&&Vt.shift()}var or=Ft.ReactCurrentBatchConfig,ti=!0;function vp(e,t,n,r){var o=G,i=or.transition;or.transition=null;try{G=1,Ws(e,t,n,r)}finally{G=o,or.transition=i}}function wp(e,t,n,r){var o=G,i=or.transition;or.transition=null;try{G=4,Ws(e,t,n,r)}finally{G=o,or.transition=i}}function Ws(e,t,n,r){if(ti){var o=Zl(e,t,n,r);if(o===null)xl(e,t,r,ni,n),Aa(e,r);else if(xp(o,e,t,n,r))r.stopPropagation();else if(Aa(e,r),t&4&&-1<gp.indexOf(e)){for(;o!==null;){var i=co(o);if(i!==null&&Oc(i),i=Zl(e,t,n,r),i===null&&xl(e,t,r,ni,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else xl(e,t,r,null,n)}}var ni=null;function Zl(e,t,n,r){if(ni=null,e=Bs(r),e=vn(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ec(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ni=e,null}function Fc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sp()){case Us:return 1;case Tc:return 4;case qo:case ap:return 16;case Lc:return 536870912;default:return 16}default:return 16}}var Yt=null,Vs=null,Fo=null;function Bc(){if(Fo)return Fo;var e,t=Vs,n=t.length,r,o="value"in Yt?Yt.value:Yt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Fo=o.slice(e,1<r?1-r:void 0)}function Bo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function No(){return!0}function Ba(){return!1}function qe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?No:Ba,this.isPropagationStopped=Ba,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=qe(mr),uo=ae({},mr,{view:0,detail:0}),kp=qe(uo),al,ul,jr,Ei=ae({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(al=e.screenX-jr.screenX,ul=e.screenY-jr.screenY):ul=al=0,jr=e),al)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),Ua=qe(Ei),bp=ae({},Ei,{dataTransfer:0}),Sp=qe(bp),jp=ae({},uo,{relatedTarget:0}),cl=qe(jp),Np=ae({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Cp=qe(Np),Ep=ae({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zp=qe(Ep),_p=ae({},mr,{data:0}),Ka=qe(_p),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lp[e])?!!t[e]:!1}function Ys(){return Pp}var Mp=ae({},uo,{key:function(e){if(e.key){var t=Dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ys,charCode:function(e){return e.type==="keypress"?Bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Op=qe(Mp),Rp=ae({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ha=qe(Rp),Ip=ae({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ys}),$p=qe(Ip),Ap=ae({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fp=qe(Ap),Bp=ae({},Ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Up=qe(Bp),Kp=[9,13,27,32],Xs=Rt&&"CompositionEvent"in window,Rr=null;Rt&&"documentMode"in document&&(Rr=document.documentMode);var Hp=Rt&&"TextEvent"in window&&!Rr,Uc=Rt&&(!Xs||Rr&&8<Rr&&11>=Rr),Wa=" ",Va=!1;function Kc(e,t){switch(e){case"keyup":return Kp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function Wp(e,t){switch(e){case"compositionend":return Hc(t);case"keypress":return t.which!==32?null:(Va=!0,Wa);case"textInput":return e=t.data,e===Wa&&Va?null:e;default:return null}}function Vp(e,t){if(Wn)return e==="compositionend"||!Xs&&Kc(e,t)?(e=Bc(),Fo=Vs=Yt=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uc&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function Wc(e,t,n,r){bc(r),t=ri(t,"onChange"),0<t.length&&(n=new Qs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ir=null,Xr=null;function Yp(e){nd(e,0)}function zi(e){var t=Yn(e);if(mc(t))return e}function Xp(e,t){if(e==="change")return t}var Vc=!1;if(Rt){var dl;if(Rt){var fl="oninput"in document;if(!fl){var Ya=document.createElement("div");Ya.setAttribute("oninput","return;"),fl=typeof Ya.oninput=="function"}dl=fl}else dl=!1;Vc=dl&&(!document.documentMode||9<document.documentMode)}function Xa(){Ir&&(Ir.detachEvent("onpropertychange",Qc),Xr=Ir=null)}function Qc(e){if(e.propertyName==="value"&&zi(Xr)){var t=[];Wc(t,Xr,e,Bs(e)),Cc(Yp,t)}}function Gp(e,t,n){e==="focusin"?(Xa(),Ir=t,Xr=n,Ir.attachEvent("onpropertychange",Qc)):e==="focusout"&&Xa()}function Jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zi(Xr)}function Zp(e,t){if(e==="click")return zi(t)}function qp(e,t){if(e==="input"||e==="change")return zi(t)}function eh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:eh;function Gr(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ml.call(t,o)||!yt(e[o],t[o]))return!1}return!0}function Ga(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ja(e,t){var n=Ga(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ga(n)}}function Yc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xc(){for(var e=window,t=Go();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Go(e.document)}return t}function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function th(e){var t=Xc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yc(n.ownerDocument.documentElement,n)){if(r!==null&&Gs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ja(n,i);var l=Ja(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nh=Rt&&"documentMode"in document&&11>=document.documentMode,Vn=null,ql=null,$r=null,es=!1;function Za(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;es||Vn==null||Vn!==Go(r)||(r=Vn,"selectionStart"in r&&Gs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&Gr($r,r)||($r=r,r=ri(ql,"onSelect"),0<r.length&&(t=new Qs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function Co(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},pl={},Gc={};Rt&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function _i(e){if(pl[e])return pl[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gc)return pl[e]=t[n];return e}var Jc=_i("animationend"),Zc=_i("animationiteration"),qc=_i("animationstart"),ed=_i("transitionend"),td=new Map,qa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){td.set(e,t),Ln(t,[e])}for(var hl=0;hl<qa.length;hl++){var ml=qa[hl],rh=ml.toLowerCase(),oh=ml[0].toUpperCase()+ml.slice(1);sn(rh,"on"+oh)}sn(Jc,"onAnimationEnd");sn(Zc,"onAnimationIteration");sn(qc,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(ed,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ih=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function eu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rp(r,t,void 0,e),e.currentTarget=null}function nd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;eu(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;eu(o,s,c),i=a}}}if(Zo)throw e=Xl,Zo=!1,Xl=null,e}function re(e,t){var n=t[is];n===void 0&&(n=t[is]=new Set);var r=e+"__bubble";n.has(r)||(rd(t,e,2,!1),n.add(r))}function gl(e,t,n){var r=0;t&&(r|=4),rd(n,e,r,t)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[Eo]){e[Eo]=!0,cc.forEach(function(n){n!=="selectionchange"&&(ih.has(n)||gl(n,!1,e),gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Eo]||(t[Eo]=!0,gl("selectionchange",!1,t))}}function rd(e,t,n,r){switch(Fc(t)){case 1:var o=vp;break;case 4:o=wp;break;default:o=Ws}n=o.bind(null,t,n,e),o=void 0,!Yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function xl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=vn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Cc(function(){var c=i,m=Bs(n),g=[];e:{var d=td.get(e);if(d!==void 0){var v=Qs,b=e;switch(e){case"keypress":if(Bo(n)===0)break e;case"keydown":case"keyup":v=Op;break;case"focusin":b="focus",v=cl;break;case"focusout":b="blur",v=cl;break;case"beforeblur":case"afterblur":v=cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ua;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Sp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=$p;break;case Jc:case Zc:case qc:v=Cp;break;case ed:v=Fp;break;case"scroll":v=kp;break;case"wheel":v=Up;break;case"copy":case"cut":case"paste":v=zp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ha}var S=(t&4)!==0,P=!S&&e==="scroll",h=S?d!==null?d+"Capture":null:d;S=[];for(var f=c,p;f!==null;){p=f;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,h!==null&&(w=Wr(f,h),w!=null&&S.push(Zr(f,w,p)))),P)break;f=f.return}0<S.length&&(d=new v(d,b,null,n,m),g.push({event:d,listeners:S}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",d&&n!==Vl&&(b=n.relatedTarget||n.fromElement)&&(vn(b)||b[It]))break e;if((v||d)&&(d=m.window===m?m:(d=m.ownerDocument)?d.defaultView||d.parentWindow:window,v?(b=n.relatedTarget||n.toElement,v=c,b=b?vn(b):null,b!==null&&(P=Pn(b),b!==P||b.tag!==5&&b.tag!==6)&&(b=null)):(v=null,b=c),v!==b)){if(S=Ua,w="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(S=Ha,w="onPointerLeave",h="onPointerEnter",f="pointer"),P=v==null?d:Yn(v),p=b==null?d:Yn(b),d=new S(w,f+"leave",v,n,m),d.target=P,d.relatedTarget=p,w=null,vn(m)===c&&(S=new S(h,f+"enter",b,n,m),S.target=p,S.relatedTarget=P,w=S),P=w,v&&b)t:{for(S=v,h=b,f=0,p=S;p;p=Un(p))f++;for(p=0,w=h;w;w=Un(w))p++;for(;0<f-p;)S=Un(S),f--;for(;0<p-f;)h=Un(h),p--;for(;f--;){if(S===h||h!==null&&S===h.alternate)break t;S=Un(S),h=Un(h)}S=null}else S=null;v!==null&&tu(g,d,v,S,!1),b!==null&&P!==null&&tu(g,P,b,S,!0)}}e:{if(d=c?Yn(c):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var j=Xp;else if(Qa(d))if(Vc)j=qp;else{j=Jp;var D=Gp}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(j=Zp);if(j&&(j=j(e,c))){Wc(g,j,n,m);break e}D&&D(e,d,c),e==="focusout"&&(D=d._wrapperState)&&D.controlled&&d.type==="number"&&Bl(d,"number",d.value)}switch(D=c?Yn(c):window,e){case"focusin":(Qa(D)||D.contentEditable==="true")&&(Vn=D,ql=c,$r=null);break;case"focusout":$r=ql=Vn=null;break;case"mousedown":es=!0;break;case"contextmenu":case"mouseup":case"dragend":es=!1,Za(g,n,m);break;case"selectionchange":if(nh)break;case"keydown":case"keyup":Za(g,n,m)}var L;if(Xs)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Wn?Kc(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Uc&&n.locale!=="ko"&&(Wn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Wn&&(L=Bc()):(Yt=m,Vs="value"in Yt?Yt.value:Yt.textContent,Wn=!0)),D=ri(c,T),0<D.length&&(T=new Ka(T,e,null,n,m),g.push({event:T,listeners:D}),L?T.data=L:(L=Hc(n),L!==null&&(T.data=L)))),(L=Hp?Wp(e,n):Vp(e,n))&&(c=ri(c,"onBeforeInput"),0<c.length&&(m=new Ka("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:c}),m.data=L))}nd(g,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ri(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Wr(e,n),i!=null&&r.unshift(Zr(e,i,o)),i=Wr(e,t),i!=null&&r.push(Zr(e,i,o))),e=e.return}return r}function Un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=Wr(n,i),a!=null&&l.unshift(Zr(n,a,s))):o||(a=Wr(n,i),a!=null&&l.push(Zr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var lh=/\r\n?/g,sh=/\u0000|\uFFFD/g;function nu(e){return(typeof e=="string"?e:""+e).replace(lh,`
`).replace(sh,"")}function zo(e,t,n){if(t=nu(t),nu(e)!==t&&n)throw Error(E(425))}function oi(){}var ts=null,ns=null;function rs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var os=typeof setTimeout=="function"?setTimeout:void 0,ah=typeof clearTimeout=="function"?clearTimeout:void 0,ru=typeof Promise=="function"?Promise:void 0,uh=typeof queueMicrotask=="function"?queueMicrotask:typeof ru<"u"?function(e){return ru.resolve(null).then(e).catch(ch)}:os;function ch(e){setTimeout(function(){throw e})}function yl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ou(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gr=Math.random().toString(36).slice(2),jt="__reactFiber$"+gr,qr="__reactProps$"+gr,It="__reactContainer$"+gr,is="__reactEvents$"+gr,dh="__reactListeners$"+gr,fh="__reactHandles$"+gr;function vn(e){var t=e[jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[It]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ou(e);e!==null;){if(n=e[jt])return n;e=ou(e)}return t}e=n,n=e.parentNode}return null}function co(e){return e=e[jt]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Di(e){return e[qr]||null}var ls=[],Xn=-1;function an(e){return{current:e}}function oe(e){0>Xn||(e.current=ls[Xn],ls[Xn]=null,Xn--)}function ee(e,t){Xn++,ls[Xn]=e.current,e.current=t}var ln={},Te=an(ln),He=an(!1),En=ln;function ar(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function We(e){return e=e.childContextTypes,e!=null}function ii(){oe(He),oe(Te)}function iu(e,t,n){if(Te.current!==ln)throw Error(E(168));ee(Te,t),ee(He,n)}function od(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,Gf(e)||"Unknown",o));return ae({},n,r)}function li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,En=Te.current,ee(Te,e),ee(He,He.current),!0}function lu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=od(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,oe(He),oe(Te),ee(Te,e)):oe(He),ee(He,n)}var Dt=null,Ti=!1,vl=!1;function id(e){Dt===null?Dt=[e]:Dt.push(e)}function ph(e){Ti=!0,id(e)}function un(){if(!vl&&Dt!==null){vl=!0;var e=0,t=G;try{var n=Dt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,Ti=!1}catch(o){throw Dt!==null&&(Dt=Dt.slice(e+1)),Dc(Us,un),o}finally{G=t,vl=!1}}return null}var Gn=[],Jn=0,si=null,ai=0,rt=[],ot=0,zn=null,Lt=1,Pt="";function xn(e,t){Gn[Jn++]=ai,Gn[Jn++]=si,si=e,ai=t}function ld(e,t,n){rt[ot++]=Lt,rt[ot++]=Pt,rt[ot++]=zn,zn=e;var r=Lt;e=Pt;var o=32-gt(r)-1;r&=~(1<<o),n+=1;var i=32-gt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Lt=1<<32-gt(t)+o|n<<o|r,Pt=i+e}else Lt=1<<i|n<<o|r,Pt=e}function Js(e){e.return!==null&&(xn(e,1),ld(e,1,0))}function Zs(e){for(;e===si;)si=Gn[--Jn],Gn[Jn]=null,ai=Gn[--Jn],Gn[Jn]=null;for(;e===zn;)zn=rt[--ot],rt[ot]=null,Pt=rt[--ot],rt[ot]=null,Lt=rt[--ot],rt[ot]=null}var Ge=null,Xe=null,ie=!1,mt=null;function sd(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function su(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,Xe=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zn!==null?{id:Lt,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,Xe=null,!0):!1;default:return!1}}function ss(e){return(e.mode&1)!==0&&(e.flags&128)===0}function as(e){if(ie){var t=Xe;if(t){var n=t;if(!su(e,t)){if(ss(e))throw Error(E(418));t=qt(n.nextSibling);var r=Ge;t&&su(e,t)?sd(r,n):(e.flags=e.flags&-4097|2,ie=!1,Ge=e)}}else{if(ss(e))throw Error(E(418));e.flags=e.flags&-4097|2,ie=!1,Ge=e}}}function au(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function _o(e){if(e!==Ge)return!1;if(!ie)return au(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!rs(e.type,e.memoizedProps)),t&&(t=Xe)){if(ss(e))throw ad(),Error(E(418));for(;t;)sd(e,t),t=qt(t.nextSibling)}if(au(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Ge?qt(e.stateNode.nextSibling):null;return!0}function ad(){for(var e=Xe;e;)e=qt(e.nextSibling)}function ur(){Xe=Ge=null,ie=!1}function qs(e){mt===null?mt=[e]:mt.push(e)}var hh=Ft.ReactCurrentBatchConfig;function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Do(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uu(e){var t=e._init;return t(e._payload)}function ud(e){function t(h,f){if(e){var p=h.deletions;p===null?(h.deletions=[f],h.flags|=16):p.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function o(h,f){return h=rn(h,f),h.index=0,h.sibling=null,h}function i(h,f,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<f?(h.flags|=2,f):p):(h.flags|=2,f)):(h.flags|=1048576,f)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,p,w){return f===null||f.tag!==6?(f=Cl(p,h.mode,w),f.return=h,f):(f=o(f,p),f.return=h,f)}function a(h,f,p,w){var j=p.type;return j===Hn?m(h,f,p.props.children,w,p.key):f!==null&&(f.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ht&&uu(j)===f.type)?(w=o(f,p.props),w.ref=Nr(h,f,p),w.return=h,w):(w=Yo(p.type,p.key,p.props,null,h.mode,w),w.ref=Nr(h,f,p),w.return=h,w)}function c(h,f,p,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=El(p,h.mode,w),f.return=h,f):(f=o(f,p.children||[]),f.return=h,f)}function m(h,f,p,w,j){return f===null||f.tag!==7?(f=Sn(p,h.mode,w,j),f.return=h,f):(f=o(f,p),f.return=h,f)}function g(h,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Cl(""+f,h.mode,p),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vo:return p=Yo(f.type,f.key,f.props,null,h.mode,p),p.ref=Nr(h,null,f),p.return=h,p;case Kn:return f=El(f,h.mode,p),f.return=h,f;case Ht:var w=f._init;return g(h,w(f._payload),p)}if(Dr(f)||wr(f))return f=Sn(f,h.mode,p,null),f.return=h,f;Do(h,f)}return null}function d(h,f,p,w){var j=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:s(h,f,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vo:return p.key===j?a(h,f,p,w):null;case Kn:return p.key===j?c(h,f,p,w):null;case Ht:return j=p._init,d(h,f,j(p._payload),w)}if(Dr(p)||wr(p))return j!==null?null:m(h,f,p,w,null);Do(h,p)}return null}function v(h,f,p,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(p)||null,s(f,h,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case vo:return h=h.get(w.key===null?p:w.key)||null,a(f,h,w,j);case Kn:return h=h.get(w.key===null?p:w.key)||null,c(f,h,w,j);case Ht:var D=w._init;return v(h,f,p,D(w._payload),j)}if(Dr(w)||wr(w))return h=h.get(p)||null,m(f,h,w,j,null);Do(f,w)}return null}function b(h,f,p,w){for(var j=null,D=null,L=f,T=f=0,F=null;L!==null&&T<p.length;T++){L.index>T?(F=L,L=null):F=L.sibling;var M=d(h,L,p[T],w);if(M===null){L===null&&(L=F);break}e&&L&&M.alternate===null&&t(h,L),f=i(M,f,T),D===null?j=M:D.sibling=M,D=M,L=F}if(T===p.length)return n(h,L),ie&&xn(h,T),j;if(L===null){for(;T<p.length;T++)L=g(h,p[T],w),L!==null&&(f=i(L,f,T),D===null?j=L:D.sibling=L,D=L);return ie&&xn(h,T),j}for(L=r(h,L);T<p.length;T++)F=v(L,h,T,p[T],w),F!==null&&(e&&F.alternate!==null&&L.delete(F.key===null?T:F.key),f=i(F,f,T),D===null?j=F:D.sibling=F,D=F);return e&&L.forEach(function(W){return t(h,W)}),ie&&xn(h,T),j}function S(h,f,p,w){var j=wr(p);if(typeof j!="function")throw Error(E(150));if(p=j.call(p),p==null)throw Error(E(151));for(var D=j=null,L=f,T=f=0,F=null,M=p.next();L!==null&&!M.done;T++,M=p.next()){L.index>T?(F=L,L=null):F=L.sibling;var W=d(h,L,M.value,w);if(W===null){L===null&&(L=F);break}e&&L&&W.alternate===null&&t(h,L),f=i(W,f,T),D===null?j=W:D.sibling=W,D=W,L=F}if(M.done)return n(h,L),ie&&xn(h,T),j;if(L===null){for(;!M.done;T++,M=p.next())M=g(h,M.value,w),M!==null&&(f=i(M,f,T),D===null?j=M:D.sibling=M,D=M);return ie&&xn(h,T),j}for(L=r(h,L);!M.done;T++,M=p.next())M=v(L,h,T,M.value,w),M!==null&&(e&&M.alternate!==null&&L.delete(M.key===null?T:M.key),f=i(M,f,T),D===null?j=M:D.sibling=M,D=M);return e&&L.forEach(function(de){return t(h,de)}),ie&&xn(h,T),j}function P(h,f,p,w){if(typeof p=="object"&&p!==null&&p.type===Hn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case vo:e:{for(var j=p.key,D=f;D!==null;){if(D.key===j){if(j=p.type,j===Hn){if(D.tag===7){n(h,D.sibling),f=o(D,p.props.children),f.return=h,h=f;break e}}else if(D.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ht&&uu(j)===D.type){n(h,D.sibling),f=o(D,p.props),f.ref=Nr(h,D,p),f.return=h,h=f;break e}n(h,D);break}else t(h,D);D=D.sibling}p.type===Hn?(f=Sn(p.props.children,h.mode,w,p.key),f.return=h,h=f):(w=Yo(p.type,p.key,p.props,null,h.mode,w),w.ref=Nr(h,f,p),w.return=h,h=w)}return l(h);case Kn:e:{for(D=p.key;f!==null;){if(f.key===D)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(h,f.sibling),f=o(f,p.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=El(p,h.mode,w),f.return=h,h=f}return l(h);case Ht:return D=p._init,P(h,f,D(p._payload),w)}if(Dr(p))return b(h,f,p,w);if(wr(p))return S(h,f,p,w);Do(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(h,f.sibling),f=o(f,p),f.return=h,h=f):(n(h,f),f=Cl(p,h.mode,w),f.return=h,h=f),l(h)):n(h,f)}return P}var cr=ud(!0),cd=ud(!1),ui=an(null),ci=null,Zn=null,ea=null;function ta(){ea=Zn=ci=null}function na(e){var t=ui.current;oe(ui),e._currentValue=t}function us(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ir(e,t){ci=e,ea=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ue=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(ea!==e)if(e={context:e,memoizedValue:t,next:null},Zn===null){if(ci===null)throw Error(E(308));Zn=e,ci.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return t}var wn=null;function ra(e){wn===null?wn=[e]:wn.push(e)}function dd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ra(t)):(n.next=o.next,o.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,$t(e,n)}return o=r.interleaved,o===null?(t.next=t,ra(r)):(t.next=o.next,o.next=t),r.interleaved=t,$t(e,n)}function Uo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ks(e,n)}}function cu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function di(e,t,n,r){var o=e.updateQueue;Wt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=a))}if(i!==null){var g=o.baseState;l=0,m=c=a=null,s=i;do{var d=s.lane,v=s.eventTime;if((r&d)===d){m!==null&&(m=m.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,S=s;switch(d=t,v=n,S.tag){case 1:if(b=S.payload,typeof b=="function"){g=b.call(v,g,d);break e}g=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=S.payload,d=typeof b=="function"?b.call(v,g,d):b,d==null)break e;g=ae({},g,d);break e;case 2:Wt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=o.effects,d===null?o.effects=[s]:d.push(s))}else v={eventTime:v,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=v,a=g):m=m.next=v,l|=d;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;d=s,s=d.next,d.next=null,o.lastBaseUpdate=d,o.shared.pending=null}}while(!0);if(m===null&&(a=g),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Dn|=l,e.lanes=l,e.memoizedState=g}}function du(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var fo={},Ct=an(fo),eo=an(fo),to=an(fo);function kn(e){if(e===fo)throw Error(E(174));return e}function ia(e,t){switch(ee(to,t),ee(eo,e),ee(Ct,fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}oe(Ct),ee(Ct,t)}function dr(){oe(Ct),oe(eo),oe(to)}function pd(e){kn(to.current);var t=kn(Ct.current),n=Kl(t,e.type);t!==n&&(ee(eo,e),ee(Ct,n))}function la(e){eo.current===e&&(oe(Ct),oe(eo))}var le=an(0);function fi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wl=[];function sa(){for(var e=0;e<wl.length;e++)wl[e]._workInProgressVersionPrimary=null;wl.length=0}var Ko=Ft.ReactCurrentDispatcher,kl=Ft.ReactCurrentBatchConfig,_n=0,se=null,me=null,ye=null,pi=!1,Ar=!1,no=0,mh=0;function Ee(){throw Error(E(321))}function aa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function ua(e,t,n,r,o,i){if(_n=i,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ko.current=e===null||e.memoizedState===null?vh:wh,e=n(r,o),Ar){i=0;do{if(Ar=!1,no=0,25<=i)throw Error(E(301));i+=1,ye=me=null,t.updateQueue=null,Ko.current=kh,e=n(r,o)}while(Ar)}if(Ko.current=hi,t=me!==null&&me.next!==null,_n=0,ye=me=se=null,pi=!1,t)throw Error(E(300));return e}function ca(){var e=no!==0;return no=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?se.memoizedState=ye=e:ye=ye.next=e,ye}function at(){if(me===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ye===null?se.memoizedState:ye.next;if(t!==null)ye=t,me=e;else{if(e===null)throw Error(E(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ye===null?se.memoizedState=ye=e:ye=ye.next=e}return ye}function ro(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=at(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=me,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var m=c.lane;if((_n&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=g,l=r):a=a.next=g,se.lanes|=m,Dn|=m}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,yt(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,se.lanes|=i,Dn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sl(e){var t=at(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);yt(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function hd(){}function md(e,t){var n=se,r=at(),o=t(),i=!yt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ue=!0),r=r.queue,da(yd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,oo(9,xd.bind(null,n,r,o,t),void 0,null),ve===null)throw Error(E(349));_n&30||gd(n,t,o)}return o}function gd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xd(e,t,n,r){t.value=n,t.getSnapshot=r,vd(t)&&wd(e)}function yd(e,t,n){return n(function(){vd(t)&&wd(e)})}function vd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function wd(e){var t=$t(e,1);t!==null&&xt(t,e,1,-1)}function fu(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=yh.bind(null,se,e),[t.memoizedState,e]}function oo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kd(){return at().memoizedState}function Ho(e,t,n,r){var o=St();se.flags|=e,o.memoizedState=oo(1|t,n,void 0,r===void 0?null:r)}function Li(e,t,n,r){var o=at();r=r===void 0?null:r;var i=void 0;if(me!==null){var l=me.memoizedState;if(i=l.destroy,r!==null&&aa(r,l.deps)){o.memoizedState=oo(t,n,i,r);return}}se.flags|=e,o.memoizedState=oo(1|t,n,i,r)}function pu(e,t){return Ho(8390656,8,e,t)}function da(e,t){return Li(2048,8,e,t)}function bd(e,t){return Li(4,2,e,t)}function Sd(e,t){return Li(4,4,e,t)}function jd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nd(e,t,n){return n=n!=null?n.concat([e]):null,Li(4,4,jd.bind(null,t,e),n)}function fa(){}function Cd(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&aa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ed(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&aa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zd(e,t,n){return _n&21?(yt(n,t)||(n=Pc(),se.lanes|=n,Dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n)}function gh(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=kl.transition;kl.transition={};try{e(!1),t()}finally{G=n,kl.transition=r}}function _d(){return at().memoizedState}function xh(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dd(e))Td(t,n);else if(n=dd(e,t,n,r),n!==null){var o=Re();xt(n,e,r,o),Ld(n,t,r)}}function yh(e,t,n){var r=nn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dd(e))Td(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,yt(s,l)){var a=t.interleaved;a===null?(o.next=o,ra(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=dd(e,t,o,r),n!==null&&(o=Re(),xt(n,e,r,o),Ld(n,t,r))}}function Dd(e){var t=e.alternate;return e===se||t!==null&&t===se}function Td(e,t){Ar=pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ld(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ks(e,n)}}var hi={readContext:st,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},vh={readContext:st,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:pu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4194308,4,jd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ho(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xh.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:fu,useDebugValue:fa,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=fu(!1),t=e[0];return e=gh.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,o=St();if(ie){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ve===null)throw Error(E(349));_n&30||gd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,pu(yd.bind(null,r,i,e),[e]),r.flags|=2048,oo(9,xd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=St(),t=ve.identifierPrefix;if(ie){var n=Pt,r=Lt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wh={readContext:st,useCallback:Cd,useContext:st,useEffect:da,useImperativeHandle:Nd,useInsertionEffect:bd,useLayoutEffect:Sd,useMemo:Ed,useReducer:bl,useRef:kd,useState:function(){return bl(ro)},useDebugValue:fa,useDeferredValue:function(e){var t=at();return zd(t,me.memoizedState,e)},useTransition:function(){var e=bl(ro)[0],t=at().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:md,useId:_d,unstable_isNewReconciler:!1},kh={readContext:st,useCallback:Cd,useContext:st,useEffect:da,useImperativeHandle:Nd,useInsertionEffect:bd,useLayoutEffect:Sd,useMemo:Ed,useReducer:Sl,useRef:kd,useState:function(){return Sl(ro)},useDebugValue:fa,useDeferredValue:function(e){var t=at();return me===null?t.memoizedState=e:zd(t,me.memoizedState,e)},useTransition:function(){var e=Sl(ro)[0],t=at().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:md,useId:_d,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function cs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pi={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),o=nn(e),i=Ot(r,o);i.payload=t,n!=null&&(i.callback=n),t=en(e,i,o),t!==null&&(xt(t,e,o,r),Uo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),o=nn(e),i=Ot(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=en(e,i,o),t!==null&&(xt(t,e,o,r),Uo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=nn(e),o=Ot(n,r);o.tag=2,t!=null&&(o.callback=t),t=en(e,o,r),t!==null&&(xt(t,e,r,n),Uo(t,e,r))}};function hu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(o,i):!0}function Pd(e,t,n){var r=!1,o=ln,i=t.contextType;return typeof i=="object"&&i!==null?i=st(i):(o=We(t)?En:Te.current,r=t.contextTypes,i=(r=r!=null)?ar(e,o):ln),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function mu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pi.enqueueReplaceState(t,t.state,null)}function ds(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},oa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=st(i):(i=We(t)?En:Te.current,o.context=ar(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(cs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Pi.enqueueReplaceState(o,o.state,null),di(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,t){try{var n="",r=t;do n+=Xf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bh=typeof WeakMap=="function"?WeakMap:Map;function Md(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gi||(gi=!0,bs=r),fs(e,t)},n}function Od(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){fs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){fs(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Rh.bind(null,e,t,n),t.then(e,e))}function xu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var Sh=Ft.ReactCurrentOwner,Ue=!1;function Me(e,t,n,r){t.child=e===null?cd(t,null,n,r):cr(t,e.child,n,r)}function vu(e,t,n,r,o){n=n.render;var i=t.ref;return ir(t,o),r=ua(e,t,n,r,i,o),n=ca(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,At(e,t,o)):(ie&&n&&Js(t),t.flags|=1,Me(e,t,r,o),t.child)}function wu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!wa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Rd(e,t,i,r,o)):(e=Yo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(l,r)&&e.ref===t.ref)return At(e,t,o)}return t.flags|=1,e=rn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Rd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Gr(i,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ue=!0);else return t.lanes=e.lanes,At(e,t,o)}return ps(e,t,n,r,o)}function Id(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(er,Qe),Qe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(er,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ee(er,Qe),Qe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ee(er,Qe),Qe|=r;return Me(e,t,o,n),t.child}function $d(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ps(e,t,n,r,o){var i=We(n)?En:Te.current;return i=ar(t,i),ir(t,o),n=ua(e,t,n,r,i,o),r=ca(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,At(e,t,o)):(ie&&r&&Js(t),t.flags|=1,Me(e,t,n,o),t.child)}function ku(e,t,n,r,o){if(We(n)){var i=!0;li(t)}else i=!1;if(ir(t,o),t.stateNode===null)Wo(e,t),Pd(t,n,r),ds(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=st(c):(c=We(n)?En:Te.current,c=ar(t,c));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&mu(t,l,r,c),Wt=!1;var d=t.memoizedState;l.state=d,di(t,r,l,o),a=t.memoizedState,s!==r||d!==a||He.current||Wt?(typeof m=="function"&&(cs(t,n,m,r),a=t.memoizedState),(s=Wt||hu(t,n,s,r,d,a,c))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,fd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:pt(t.type,s),l.props=c,g=t.pendingProps,d=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=st(a):(a=We(n)?En:Te.current,a=ar(t,a));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||d!==a)&&mu(t,l,r,a),Wt=!1,d=t.memoizedState,l.state=d,di(t,r,l,o);var b=t.memoizedState;s!==g||d!==b||He.current||Wt?(typeof v=="function"&&(cs(t,n,v,r),b=t.memoizedState),(c=Wt||hu(t,n,c,r,d,b,a)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return hs(e,t,n,r,i,o)}function hs(e,t,n,r,o,i){$d(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&lu(t,n,!1),At(e,t,i);r=t.stateNode,Sh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=cr(t,e.child,null,i),t.child=cr(t,null,s,i)):Me(e,t,s,i),t.memoizedState=r.state,o&&lu(t,n,!0),t.child}function Ad(e){var t=e.stateNode;t.pendingContext?iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&iu(e,t.context,!1),ia(e,t.containerInfo)}function bu(e,t,n,r,o){return ur(),qs(o),t.flags|=256,Me(e,t,n,r),t.child}var ms={dehydrated:null,treeContext:null,retryLane:0};function gs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fd(e,t,n){var r=t.pendingProps,o=le.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ee(le,o&1),e===null)return as(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ri(l,r,0,null),e=Sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=gs(n),t.memoizedState=ms,e):pa(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return jh(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=rn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=rn(s,i):(i=Sn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?gs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ms,r}return i=e.child,e=i.sibling,r=rn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pa(e,t){return t=Ri({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function To(e,t,n,r){return r!==null&&qs(r),cr(t,e.child,null,n),e=pa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=jl(Error(E(422))),To(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ri({mode:"visible",children:r.children},o,0,null),i=Sn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&cr(t,e.child,null,l),t.child.memoizedState=gs(l),t.memoizedState=ms,i);if(!(t.mode&1))return To(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(E(419)),r=jl(i,r,void 0),To(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ue||s){if(r=ve,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,$t(e,o),xt(r,e,o,-1))}return va(),r=jl(Error(E(421))),To(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ih.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Xe=qt(o.nextSibling),Ge=t,ie=!0,mt=null,e!==null&&(rt[ot++]=Lt,rt[ot++]=Pt,rt[ot++]=zn,Lt=e.id,Pt=e.overflow,zn=t),t=pa(t,r.children),t.flags|=4096,t)}function Su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),us(e.return,t,n)}function Nl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Bd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Me(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,n,t);else if(e.tag===19)Su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(le,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&fi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Nl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&fi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Nl(t,!0,n,null,i);break;case"together":Nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nh(e,t,n){switch(t.tag){case 3:Ad(t),ur();break;case 5:pd(t);break;case 1:We(t.type)&&li(t);break;case 4:ia(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ee(ui,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?Fd(e,t,n):(ee(le,le.current&1),e=At(e,t,n),e!==null?e.sibling:null);ee(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ee(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Id(e,t,n)}return At(e,t,n)}var Ud,xs,Kd,Hd;Ud=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xs=function(){};Kd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,kn(Ct.current);var i=null;switch(n){case"input":o=Al(e,o),r=Al(e,r),i=[];break;case"select":o=ae({},o,{value:void 0}),r=ae({},r,{value:void 0}),i=[];break;case"textarea":o=Ul(e,o),r=Ul(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oi)}Hl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Kr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&re("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Hd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ch(e,t,n){var r=t.pendingProps;switch(Zs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return We(t.type)&&ii(),ze(t),null;case 3:return r=t.stateNode,dr(),oe(He),oe(Te),sa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_o(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mt!==null&&(Ns(mt),mt=null))),xs(e,t),ze(t),null;case 5:la(t);var o=kn(to.current);if(n=t.type,e!==null&&t.stateNode!=null)Kd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ze(t),null}if(e=kn(Ct.current),_o(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[jt]=t,r[qr]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<Lr.length;o++)re(Lr[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":La(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":Ma(r,i),re("invalid",r)}Hl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,s,e),o=["children",""+s]):Kr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&re("scroll",r)}switch(n){case"input":wo(r),Pa(r,i,!0);break;case"textarea":wo(r),Oa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=oi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[jt]=t,e[qr]=r,Ud(e,t,!1,!1),t.stateNode=e;e:{switch(l=Wl(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Lr.length;o++)re(Lr[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":La(e,r),o=Al(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ae({},r,{value:void 0}),re("invalid",e);break;case"textarea":Ma(e,r),o=Ul(e,r),re("invalid",e);break;default:o=r}Hl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?kc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&vc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Hr(e,a):typeof a=="number"&&Hr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Kr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&re("scroll",e):a!=null&&Is(e,i,a,l))}switch(n){case"input":wo(e),Pa(e,r,!1);break;case"textarea":wo(e),Oa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tr(e,!!r.multiple,i,!1):r.defaultValue!=null&&tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=oi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)Hd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=kn(to.current),kn(Ct.current),_o(t)){if(r=t.stateNode,n=t.memoizedProps,r[jt]=t,(i=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:zo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=t,t.stateNode=r}return ze(t),null;case 13:if(oe(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Xe!==null&&t.mode&1&&!(t.flags&128))ad(),ur(),t.flags|=98560,i=!1;else if(i=_o(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[jt]=t}else ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),i=!1}else mt!==null&&(Ns(mt),mt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?ge===0&&(ge=3):va())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return dr(),xs(e,t),e===null&&Jr(t.stateNode.containerInfo),ze(t),null;case 10:return na(t.type._context),ze(t),null;case 17:return We(t.type)&&ii(),ze(t),null;case 19:if(oe(le),i=t.memoizedState,i===null)return ze(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Cr(i,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=fi(e),l!==null){for(t.flags|=128,Cr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(le,le.current&1|2),t.child}e=e.sibling}i.tail!==null&&pe()>pr&&(t.flags|=128,r=!0,Cr(i,!1),t.lanes=4194304)}else{if(!r)if(e=fi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ie)return ze(t),null}else 2*pe()-i.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Cr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=pe(),t.sibling=null,n=le.current,ee(le,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return ya(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Eh(e,t){switch(Zs(t),t.tag){case 1:return We(t.type)&&ii(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),oe(He),oe(Te),sa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return la(t),null;case 13:if(oe(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(le),null;case 4:return dr(),null;case 10:return na(t.type._context),null;case 22:case 23:return ya(),null;case 24:return null;default:return null}}var Lo=!1,_e=!1,zh=typeof WeakSet=="function"?WeakSet:Set,$=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function ys(e,t,n){try{n()}catch(r){ce(e,t,r)}}var ju=!1;function _h(e,t){if(ts=ti,e=Xc(),Gs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,m=0,g=e,d=null;t:for(;;){for(var v;g!==n||o!==0&&g.nodeType!==3||(s=l+o),g!==i||r!==0&&g.nodeType!==3||(a=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(v=g.firstChild)!==null;)d=g,g=v;for(;;){if(g===e)break t;if(d===n&&++c===o&&(s=l),d===i&&++m===r&&(a=l),(v=g.nextSibling)!==null)break;g=d,d=g.parentNode}g=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ns={focusedElem:e,selectionRange:n},ti=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var S=b.memoizedProps,P=b.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?S:pt(t.type,S),P);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){ce(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return b=ju,ju=!1,b}function Fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ys(t,n,i)}o=o.next}while(o!==r)}}function Mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wd(e){var t=e.alternate;t!==null&&(e.alternate=null,Wd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[qr],delete t[is],delete t[dh],delete t[fh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vd(e){return e.tag===5||e.tag===3||e.tag===4}function Nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oi));else if(r!==4&&(e=e.child,e!==null))for(ws(e,t,n),e=e.sibling;e!==null;)ws(e,t,n),e=e.sibling}function ks(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}var be=null,ht=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Qd(e,t,n),n=n.sibling}function Qd(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Ci,n)}catch{}switch(n.tag){case 5:_e||qn(n,t);case 6:var r=be,o=ht;be=null,Kt(e,t,n),be=r,ht=o,be!==null&&(ht?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(ht?(e=be,n=n.stateNode,e.nodeType===8?yl(e.parentNode,n):e.nodeType===1&&yl(e,n),Yr(e)):yl(be,n.stateNode));break;case 4:r=be,o=ht,be=n.stateNode.containerInfo,ht=!0,Kt(e,t,n),be=r,ht=o;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ys(n,t,l),o=o.next}while(o!==r)}Kt(e,t,n);break;case 1:if(!_e&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ce(n,t,s)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Kt(e,t,n),_e=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function Cu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zh),t.forEach(function(r){var o=$h.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,ht=!1;break e;case 3:be=s.stateNode.containerInfo,ht=!0;break e;case 4:be=s.stateNode.containerInfo,ht=!0;break e}s=s.return}if(be===null)throw Error(E(160));Qd(i,l,o),be=null,ht=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){ce(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yd(t,e),t=t.sibling}function Yd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),bt(e),r&4){try{Fr(3,e,e.return),Mi(3,e)}catch(S){ce(e,e.return,S)}try{Fr(5,e,e.return)}catch(S){ce(e,e.return,S)}}break;case 1:ft(t,e),bt(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(ft(t,e),bt(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var o=e.stateNode;try{Hr(o,"")}catch(S){ce(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&gc(o,i),Wl(s,l);var c=Wl(s,i);for(l=0;l<a.length;l+=2){var m=a[l],g=a[l+1];m==="style"?kc(o,g):m==="dangerouslySetInnerHTML"?vc(o,g):m==="children"?Hr(o,g):Is(o,m,g,c)}switch(s){case"input":Fl(o,i);break;case"textarea":xc(o,i);break;case"select":var d=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?tr(o,!!i.multiple,v,!1):d!==!!i.multiple&&(i.defaultValue!=null?tr(o,!!i.multiple,i.defaultValue,!0):tr(o,!!i.multiple,i.multiple?[]:"",!1))}o[qr]=i}catch(S){ce(e,e.return,S)}}break;case 6:if(ft(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){ce(e,e.return,S)}}break;case 3:if(ft(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(S){ce(e,e.return,S)}break;case 4:ft(t,e),bt(e);break;case 13:ft(t,e),bt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ga=pe())),r&4&&Cu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(c=_e)||m,ft(t,e),_e=c):ft(t,e),bt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for($=e,m=e.child;m!==null;){for(g=$=m;$!==null;){switch(d=$,v=d.child,d.tag){case 0:case 11:case 14:case 15:Fr(4,d,d.return);break;case 1:qn(d,d.return);var b=d.stateNode;if(typeof b.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(S){ce(r,n,S)}}break;case 5:qn(d,d.return);break;case 22:if(d.memoizedState!==null){zu(g);continue}}v!==null?(v.return=d,$=v):zu(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{o=g.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,a=g.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=wc("display",l))}catch(S){ce(e,e.return,S)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(S){ce(e,e.return,S)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:ft(t,e),bt(e),r&4&&Cu(e);break;case 21:break;default:ft(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vd(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Hr(o,""),r.flags&=-33);var i=Nu(e);ks(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Nu(e);ws(e,s,l);break;default:throw Error(E(161))}}catch(a){ce(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dh(e,t,n){$=e,Xd(e)}function Xd(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Lo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||_e;s=Lo;var c=_e;if(Lo=l,(_e=a)&&!c)for($=o;$!==null;)l=$,a=l.child,l.tag===22&&l.memoizedState!==null?_u(o):a!==null?(a.return=l,$=a):_u(o);for(;i!==null;)$=i,Xd(i),i=i.sibling;$=o,Lo=s,_e=c}Eu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):Eu(e)}}function Eu(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||Mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&du(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}du(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Yr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}_e||t.flags&512&&vs(t)}catch(d){ce(t,t.return,d)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function zu(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function _u(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mi(4,t)}catch(a){ce(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ce(t,o,a)}}var i=t.return;try{vs(t)}catch(a){ce(t,i,a)}break;case 5:var l=t.return;try{vs(t)}catch(a){ce(t,l,a)}}}catch(a){ce(t,t.return,a)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var Th=Math.ceil,mi=Ft.ReactCurrentDispatcher,ha=Ft.ReactCurrentOwner,lt=Ft.ReactCurrentBatchConfig,Y=0,ve=null,he=null,Se=0,Qe=0,er=an(0),ge=0,io=null,Dn=0,Oi=0,ma=0,Br=null,Be=null,ga=0,pr=1/0,_t=null,gi=!1,bs=null,tn=null,Po=!1,Xt=null,xi=0,Ur=0,Ss=null,Vo=-1,Qo=0;function Re(){return Y&6?pe():Vo!==-1?Vo:Vo=pe()}function nn(e){return e.mode&1?Y&2&&Se!==0?Se&-Se:hh.transition!==null?(Qo===0&&(Qo=Pc()),Qo):(e=G,e!==0||(e=window.event,e=e===void 0?16:Fc(e.type)),e):1}function xt(e,t,n,r){if(50<Ur)throw Ur=0,Ss=null,Error(E(185));ao(e,n,r),(!(Y&2)||e!==ve)&&(e===ve&&(!(Y&2)&&(Oi|=n),ge===4&&Qt(e,Se)),Ve(e,r),n===1&&Y===0&&!(t.mode&1)&&(pr=pe()+500,Ti&&un()))}function Ve(e,t){var n=e.callbackNode;hp(e,t);var r=ei(e,e===ve?Se:0);if(r===0)n!==null&&$a(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$a(n),t===1)e.tag===0?ph(Du.bind(null,e)):id(Du.bind(null,e)),uh(function(){!(Y&6)&&un()}),n=null;else{switch(Mc(r)){case 1:n=Us;break;case 4:n=Tc;break;case 16:n=qo;break;case 536870912:n=Lc;break;default:n=qo}n=rf(n,Gd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gd(e,t){if(Vo=-1,Qo=0,Y&6)throw Error(E(327));var n=e.callbackNode;if(lr()&&e.callbackNode!==n)return null;var r=ei(e,e===ve?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=yi(e,r);else{t=r;var o=Y;Y|=2;var i=Zd();(ve!==e||Se!==t)&&(_t=null,pr=pe()+500,bn(e,t));do try{Mh();break}catch(s){Jd(e,s)}while(!0);ta(),mi.current=i,Y=o,he!==null?t=0:(ve=null,Se=0,t=ge)}if(t!==0){if(t===2&&(o=Gl(e),o!==0&&(r=o,t=js(e,o))),t===1)throw n=io,bn(e,0),Qt(e,r),Ve(e,pe()),n;if(t===6)Qt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Lh(o)&&(t=yi(e,r),t===2&&(i=Gl(e),i!==0&&(r=i,t=js(e,i))),t===1))throw n=io,bn(e,0),Qt(e,r),Ve(e,pe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:yn(e,Be,_t);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=ga+500-pe(),10<t)){if(ei(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=os(yn.bind(null,e,Be,_t),t);break}yn(e,Be,_t);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-gt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Th(r/1960))-r,10<r){e.timeoutHandle=os(yn.bind(null,e,Be,_t),r);break}yn(e,Be,_t);break;case 5:yn(e,Be,_t);break;default:throw Error(E(329))}}}return Ve(e,pe()),e.callbackNode===n?Gd.bind(null,e):null}function js(e,t){var n=Br;return e.current.memoizedState.isDehydrated&&(bn(e,t).flags|=256),e=yi(e,t),e!==2&&(t=Be,Be=n,t!==null&&Ns(t)),e}function Ns(e){Be===null?Be=e:Be.push.apply(Be,e)}function Lh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!yt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~ma,t&=~Oi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function Du(e){if(Y&6)throw Error(E(327));lr();var t=ei(e,0);if(!(t&1))return Ve(e,pe()),null;var n=yi(e,t);if(e.tag!==0&&n===2){var r=Gl(e);r!==0&&(t=r,n=js(e,r))}if(n===1)throw n=io,bn(e,0),Qt(e,t),Ve(e,pe()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,Be,_t),Ve(e,pe()),null}function xa(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(pr=pe()+500,Ti&&un())}}function Tn(e){Xt!==null&&Xt.tag===0&&!(Y&6)&&lr();var t=Y;Y|=1;var n=lt.transition,r=G;try{if(lt.transition=null,G=1,e)return e()}finally{G=r,lt.transition=n,Y=t,!(Y&6)&&un()}}function ya(){Qe=er.current,oe(er)}function bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ah(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(Zs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ii();break;case 3:dr(),oe(He),oe(Te),sa();break;case 5:la(r);break;case 4:dr();break;case 13:oe(le);break;case 19:oe(le);break;case 10:na(r.type._context);break;case 22:case 23:ya()}n=n.return}if(ve=e,he=e=rn(e.current,null),Se=Qe=t,ge=0,io=null,ma=Oi=Dn=0,Be=Br=null,wn!==null){for(t=0;t<wn.length;t++)if(n=wn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}wn=null}return e}function Jd(e,t){do{var n=he;try{if(ta(),Ko.current=hi,pi){for(var r=se.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}pi=!1}if(_n=0,ye=me=se=null,Ar=!1,no=0,ha.current=null,n===null||n.return===null){ge=1,io=t,he=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=Se,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=s,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var d=m.alternate;d?(m.updateQueue=d.updateQueue,m.memoizedState=d.memoizedState,m.lanes=d.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=xu(l);if(v!==null){v.flags&=-257,yu(v,l,s,i,t),v.mode&1&&gu(i,c,t),t=v,a=c;var b=t.updateQueue;if(b===null){var S=new Set;S.add(a),t.updateQueue=S}else b.add(a);break e}else{if(!(t&1)){gu(i,c,t),va();break e}a=Error(E(426))}}else if(ie&&s.mode&1){var P=xu(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),yu(P,l,s,i,t),qs(fr(a,s));break e}}i=a=fr(a,s),ge!==4&&(ge=2),Br===null?Br=[i]:Br.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Md(i,a,t);cu(i,h);break e;case 1:s=a;var f=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(tn===null||!tn.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Od(i,s,t);cu(i,w);break e}}i=i.return}while(i!==null)}ef(n)}catch(j){t=j,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function Zd(){var e=mi.current;return mi.current=hi,e===null?hi:e}function va(){(ge===0||ge===3||ge===2)&&(ge=4),ve===null||!(Dn&268435455)&&!(Oi&268435455)||Qt(ve,Se)}function yi(e,t){var n=Y;Y|=2;var r=Zd();(ve!==e||Se!==t)&&(_t=null,bn(e,t));do try{Ph();break}catch(o){Jd(e,o)}while(!0);if(ta(),Y=n,mi.current=r,he!==null)throw Error(E(261));return ve=null,Se=0,ge}function Ph(){for(;he!==null;)qd(he)}function Mh(){for(;he!==null&&!ip();)qd(he)}function qd(e){var t=nf(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?ef(e):he=t,ha.current=null}function ef(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Eh(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,he=null;return}}else if(n=Ch(n,t,Qe),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ge===0&&(ge=5)}function yn(e,t,n){var r=G,o=lt.transition;try{lt.transition=null,G=1,Oh(e,t,n,r)}finally{lt.transition=o,G=r}return null}function Oh(e,t,n,r){do lr();while(Xt!==null);if(Y&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(mp(e,i),e===ve&&(he=ve=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Po||(Po=!0,rf(qo,function(){return lr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=lt.transition,lt.transition=null;var l=G;G=1;var s=Y;Y|=4,ha.current=null,_h(e,n),Yd(n,e),th(ns),ti=!!ts,ns=ts=null,e.current=n,Dh(n),lp(),Y=s,G=l,lt.transition=i}else e.current=n;if(Po&&(Po=!1,Xt=e,xi=o),i=e.pendingLanes,i===0&&(tn=null),up(n.stateNode),Ve(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(gi)throw gi=!1,e=bs,bs=null,e;return xi&1&&e.tag!==0&&lr(),i=e.pendingLanes,i&1?e===Ss?Ur++:(Ur=0,Ss=e):Ur=0,un(),null}function lr(){if(Xt!==null){var e=Mc(xi),t=lt.transition,n=G;try{if(lt.transition=null,G=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,xi=0,Y&6)throw Error(E(331));var o=Y;for(Y|=4,$=e.current;$!==null;){var i=$,l=i.child;if($.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for($=c;$!==null;){var m=$;switch(m.tag){case 0:case 11:case 15:Fr(8,m,i)}var g=m.child;if(g!==null)g.return=m,$=g;else for(;$!==null;){m=$;var d=m.sibling,v=m.return;if(Wd(m),m===c){$=null;break}if(d!==null){d.return=v,$=d;break}$=v}}}var b=i.alternate;if(b!==null){var S=b.child;if(S!==null){b.child=null;do{var P=S.sibling;S.sibling=null,S=P}while(S!==null)}}$=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,$=l;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Fr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,$=h;break e}$=i.return}}var f=e.current;for($=f;$!==null;){l=$;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,$=p;else e:for(l=f;$!==null;){if(s=$,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Mi(9,s)}}catch(j){ce(s,s.return,j)}if(s===l){$=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,$=w;break e}$=s.return}}if(Y=o,un(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Ci,e)}catch{}r=!0}return r}finally{G=n,lt.transition=t}}return!1}function Tu(e,t,n){t=fr(n,t),t=Md(e,t,1),e=en(e,t,1),t=Re(),e!==null&&(ao(e,1,t),Ve(e,t))}function ce(e,t,n){if(e.tag===3)Tu(e,e,n);else for(;t!==null;){if(t.tag===3){Tu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=fr(n,e),e=Od(t,e,1),t=en(t,e,1),e=Re(),t!==null&&(ao(t,1,e),Ve(t,e));break}}t=t.return}}function Rh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(Se&n)===n&&(ge===4||ge===3&&(Se&130023424)===Se&&500>pe()-ga?bn(e,0):ma|=n),Ve(e,t)}function tf(e,t){t===0&&(e.mode&1?(t=So,So<<=1,!(So&130023424)&&(So=4194304)):t=1);var n=Re();e=$t(e,t),e!==null&&(ao(e,t,n),Ve(e,n))}function Ih(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tf(e,n)}function $h(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),tf(e,n)}var nf;nf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Ue=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ue=!1,Nh(e,t,n);Ue=!!(e.flags&131072)}else Ue=!1,ie&&t.flags&1048576&&ld(t,ai,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wo(e,t),e=t.pendingProps;var o=ar(t,Te.current);ir(t,n),o=ua(null,t,r,e,o,n);var i=ca();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(i=!0,li(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,oa(t),o.updater=Pi,t.stateNode=o,o._reactInternals=t,ds(t,r,e,n),t=hs(null,t,r,!0,i,n)):(t.tag=0,ie&&i&&Js(t),Me(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Fh(r),e=pt(r,e),o){case 0:t=ps(null,t,r,e,n);break e;case 1:t=ku(null,t,r,e,n);break e;case 11:t=vu(null,t,r,e,n);break e;case 14:t=wu(null,t,r,pt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),ps(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),ku(e,t,r,o,n);case 3:e:{if(Ad(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,fd(e,t),di(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=fr(Error(E(423)),t),t=bu(e,t,r,n,o);break e}else if(r!==o){o=fr(Error(E(424)),t),t=bu(e,t,r,n,o);break e}else for(Xe=qt(t.stateNode.containerInfo.firstChild),Ge=t,ie=!0,mt=null,n=cd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===o){t=At(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return pd(t),e===null&&as(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,rs(r,o)?l=null:i!==null&&rs(r,i)&&(t.flags|=32),$d(e,t),Me(e,t,l,n),t.child;case 6:return e===null&&as(t),null;case 13:return Fd(e,t,n);case 4:return ia(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),vu(e,t,r,o,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ee(ui,r._currentValue),r._currentValue=l,i!==null)if(yt(i.value,l)){if(i.children===o.children&&!He.current){t=At(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ot(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),us(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(E(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),us(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Me(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ir(t,n),o=st(o),r=r(o),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,o=pt(r,t.pendingProps),o=pt(r.type,o),wu(e,t,r,o,n);case 15:return Rd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),Wo(e,t),t.tag=1,We(r)?(e=!0,li(t)):e=!1,ir(t,n),Pd(t,r,o),ds(t,r,o,n),hs(null,t,r,!0,e,n);case 19:return Bd(e,t,n);case 22:return Id(e,t,n)}throw Error(E(156,t.tag))};function rf(e,t){return Dc(e,t)}function Ah(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new Ah(e,t,n,r)}function wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fh(e){if(typeof e=="function")return wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===As)return 11;if(e===Fs)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")wa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Hn:return Sn(n.children,o,i,t);case $s:l=8,o|=8;break;case Ol:return e=it(12,n,t,o|2),e.elementType=Ol,e.lanes=i,e;case Rl:return e=it(13,n,t,o),e.elementType=Rl,e.lanes=i,e;case Il:return e=it(19,n,t,o),e.elementType=Il,e.lanes=i,e;case pc:return Ri(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dc:l=10;break e;case fc:l=9;break e;case As:l=11;break e;case Fs:l=14;break e;case Ht:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=it(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Sn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function Ri(e,t,n,r){return e=it(22,e,r,t),e.elementType=pc,e.lanes=n,e.stateNode={isHidden:!1},e}function Cl(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function El(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sl(0),this.expirationTimes=sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ka(e,t,n,r,o,i,l,s,a){return e=new Bh(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=it(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oa(i),e}function Uh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function of(e){if(!e)return ln;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(We(n))return od(e,n,t)}return t}function lf(e,t,n,r,o,i,l,s,a){return e=ka(n,r,!0,e,o,i,l,s,a),e.context=of(null),n=e.current,r=Re(),o=nn(n),i=Ot(r,o),i.callback=t??null,en(n,i,o),e.current.lanes=o,ao(e,o,r),Ve(e,r),e}function Ii(e,t,n,r){var o=t.current,i=Re(),l=nn(o);return n=of(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(o,t,l),e!==null&&(xt(e,o,l,i),Uo(e,o,l)),l}function vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ba(e,t){Lu(e,t),(e=e.alternate)&&Lu(e,t)}function Kh(){return null}var sf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sa(e){this._internalRoot=e}$i.prototype.render=Sa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ii(e,t,null,null)};$i.prototype.unmount=Sa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){Ii(null,e,null,null)}),t[It]=null}};function $i(e){this._internalRoot=e}$i.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ic();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&Ac(e)}};function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pu(){}function Hh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=vi(l);i.call(c)}}var l=lf(t,r,e,0,null,!1,!1,"",Pu);return e._reactRootContainer=l,e[It]=l.current,Jr(e.nodeType===8?e.parentNode:e),Tn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=vi(a);s.call(c)}}var a=ka(e,0,!1,null,null,!1,!1,"",Pu);return e._reactRootContainer=a,e[It]=a.current,Jr(e.nodeType===8?e.parentNode:e),Tn(function(){Ii(t,a,n,r)}),a}function Fi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=vi(l);s.call(a)}}Ii(t,l,e,o)}else l=Hh(n,t,e,o,r);return vi(l)}Oc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tr(t.pendingLanes);n!==0&&(Ks(t,n|1),Ve(t,pe()),!(Y&6)&&(pr=pe()+500,un()))}break;case 13:Tn(function(){var r=$t(e,1);if(r!==null){var o=Re();xt(r,e,1,o)}}),ba(e,1)}};Hs=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Re();xt(t,e,134217728,n)}ba(e,134217728)}};Rc=function(e){if(e.tag===13){var t=nn(e),n=$t(e,t);if(n!==null){var r=Re();xt(n,e,t,r)}ba(e,t)}};Ic=function(){return G};$c=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Ql=function(e,t,n){switch(t){case"input":if(Fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Di(r);if(!o)throw Error(E(90));mc(r),Fl(r,o)}}}break;case"textarea":xc(e,n);break;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}};jc=xa;Nc=Tn;var Wh={usingClientEntryPoint:!1,Events:[co,Yn,Di,bc,Sc,xa]},Er={findFiberByHostInstance:vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vh={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zc(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||Kh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{Ci=Mo.inject(Vh),Nt=Mo}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wh;Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ja(t))throw Error(E(200));return Uh(e,t,null,n)};Ze.createRoot=function(e,t){if(!ja(e))throw Error(E(299));var n=!1,r="",o=sf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ka(e,1,!1,null,null,n,!1,r,o),e[It]=t.current,Jr(e.nodeType===8?e.parentNode:e),new Sa(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=zc(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return Tn(e)};Ze.hydrate=function(e,t,n){if(!Ai(t))throw Error(E(200));return Fi(null,e,t,!0,n)};Ze.hydrateRoot=function(e,t,n){if(!ja(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=sf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=lf(t,null,e,1,n??null,o,!1,i,l),e[It]=t.current,Jr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new $i(t)};Ze.render=function(e,t,n){if(!Ai(t))throw Error(E(200));return Fi(null,e,t,!1,n)};Ze.unmountComponentAtNode=function(e){if(!Ai(e))throw Error(E(40));return e._reactRootContainer?(Tn(function(){Fi(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1};Ze.unstable_batchedUpdates=xa;Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ai(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Fi(e,t,n,!1,r)};Ze.version="18.3.1-next-f1338f8080-20240426";function af(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(af)}catch(e){console.error(e)}}af(),sc.exports=Ze;var Qh=sc.exports,uf,Mu=Qh;uf=Mu.createRoot,Mu.hydrateRoot;const Yh="modulepreload",Xh=function(e,t){return new URL(e,t).href},Ou={},po=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(c=>{if(c=Xh(c,r),c in Ou)return;Ou[c]=!0;const m=c.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(!!r)for(let b=l.length-1;b>=0;b--){const S=l[b];if(S.href===c&&(!m||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${g}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":Yh,m||(v.as="script"),v.crossOrigin="",v.href=c,a&&v.setAttribute("nonce",a),document.head.appendChild(v),m)return new Promise((b,S)=>{v.addEventListener("load",b),v.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})};function Gh(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:l}=e;let s,a;const c=async(g=!0)=>{await a};async function m(){if("serviceWorker"in navigator){if(s=await po(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:g}},[],import.meta.url).then(({Workbox:g})=>new g("./sw.js",{scope:"./",type:"classic"})).catch(g=>{l==null||l(g)}),!s)return;s.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),s.addEventListener("installed",g=>{g.isUpdate||r==null||r()}),s.register({immediate:t}).then(g=>{i?i("./sw.js",g):o==null||o(g)}).catch(g=>{l==null||l(g)})}}return a=m(),c}const Cs=(e,t)=>t.some(n=>e instanceof n);let Ru,Iu;function Jh(){return Ru||(Ru=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zh(){return Iu||(Iu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Es=new WeakMap,zl=new WeakMap,Bi=new WeakMap;function qh(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",l)},i=()=>{n(jn(e.result)),o()},l=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",l)});return Bi.set(t,e),t}function em(e){if(Es.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",l),e.removeEventListener("abort",l)},i=()=>{n(),o()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",l),e.addEventListener("abort",l)});Es.set(e,t)}let zs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Es.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function cf(e){zs=e(zs)}function tm(e){return Zh().includes(e)?function(...t){return e.apply(_s(this),t),jn(this.request)}:function(...t){return jn(e.apply(_s(this),t))}}function nm(e){return typeof e=="function"?tm(e):(e instanceof IDBTransaction&&em(e),Cs(e,Jh())?new Proxy(e,zs):e)}function jn(e){if(e instanceof IDBRequest)return qh(e);if(zl.has(e))return zl.get(e);const t=nm(e);return t!==e&&(zl.set(e,t),Bi.set(t,e)),t}const _s=e=>Bi.get(e);function rm(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const l=indexedDB.open(e,t),s=jn(l);return r&&l.addEventListener("upgradeneeded",a=>{r(jn(l.result),a.oldVersion,a.newVersion,jn(l.transaction),a)}),n&&l.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),s.then(a=>{i&&a.addEventListener("close",()=>i()),o&&a.addEventListener("versionchange",c=>o(c.oldVersion,c.newVersion,c))}).catch(()=>{}),s}const om=["get","getKey","getAll","getAllKeys","count"],im=["put","add","delete","clear"],_l=new Map;function $u(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(_l.get(t))return _l.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=im.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||om.includes(n)))return;const i=async function(l,...s){const a=this.transaction(l,o?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(s.shift())),(await Promise.all([c[n](...s),o&&a.done]))[0]};return _l.set(t,i),i}cf(e=>({...e,get:(t,n,r)=>$u(t,n)||e.get(t,n,r),has:(t,n)=>!!$u(t,n)||e.has(t,n)}));const lm=["continue","continuePrimaryKey","advance"],Au={},Ds=new WeakMap,df=new WeakMap,sm={get(e,t){if(!lm.includes(t))return e[t];let n=Au[t];return n||(n=Au[t]=function(...r){Ds.set(this,df.get(this)[t](...r))}),n}};async function*am(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const n=new Proxy(t,sm);for(df.set(n,t),Bi.set(n,_s(t));t;)yield n,t=await(Ds.get(n)||t.continue()),Ds.delete(n)}function Fu(e,t){return t===Symbol.asyncIterator&&Cs(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&Cs(e,[IDBIndex,IDBObjectStore])}cf(e=>({...e,get(t,n,r){return Fu(t,n)?am:e.get(t,n,r)},has(t,n){return Fu(t,n)||e.has(t,n)}}));const um="nachumin-diary",cm=1,wi="kv",dm="line-diary-entries-v1",Mt="rooms-v1",Oe=e=>`room-data-v1:${e}`,fm=e=>`trash-v1:${e}:${Date.now()}`,Xo="declaration-v1",lo="marks-v1",pm=["・","❤︎","🩷","💛","🩵","💜","✨","✔︎"],Nn=e=>`donelog-v1:${e}`,Cn=e=>`habits-v1:${e}`,ki=e=>`habitlog-v1:${e}`,bi=e=>`habitseed-v1:${e}`,Dl="backup-v1",ke="diary-main",ff=rm(um,cm,{upgrade(e){e.objectStoreNames.contains(wi)||e.createObjectStore(wi)}});async function Q(e){return(await ff).get(wi,e)}async function X(e,t){return(await ff).put(wi,t,e)}async function hm(){try{navigator.storage&&navigator.storage.persist&&await navigator.storage.persist()}catch{}}async function mm(){const e=await Q(Mt);if(e)return e;let t=await Q(dm);if(typeof t=="string")try{t=JSON.parse(t)}catch{t=null}const n=t&&typeof t=="object"?t:{};await X(Oe(ke),n);const r=Object.keys(n).sort(),o=r[r.length-1],i=[{id:ke,type:"diary",name:"日記",emoji:"💗",createdAt:Date.now(),lastAt:o?Date.now():0,preview:o?n[o].text.split(`
`)[0].slice(0,40):""}];return await X(Mt,i),i}const gm=5,xm=gm*60*60*1e3,pf=()=>new Date(Date.now()-xm),De=e=>String(e).padStart(2,"0"),Tt=e=>`${e.getFullYear()}-${De(e.getMonth()+1)}-${De(e.getDate())}`,fe=e=>e.split("-").join("/"),Ke=e=>{const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},Bu=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ym=["S","M","T","W","T","F","S"],Oo=(e,t,n)=>1+(8-new Date(e,t-1,1).getDay())%7+(n-1)*7,vm=e=>Math.floor(20.8431+.242194*(e-1980)-Math.floor((e-1980)/4)),wm=e=>Math.floor(23.2488+.242194*(e-1980)-Math.floor((e-1980)/4)),Tl={};function km(e){if(Tl[e])return Tl[e];const t={},n=(r,o,i)=>{t[`${e}-${De(r)}-${De(o)}`]=i};n(1,1,"元日"),n(1,Oo(e,1,2),"成人の日"),n(2,11,"建国記念の日"),n(2,23,"天皇誕生日"),n(3,vm(e),"春分の日"),n(4,29,"昭和の日"),n(5,3,"憲法記念日"),n(5,4,"みどりの日"),n(5,5,"こどもの日"),n(7,Oo(e,7,3),"海の日"),n(8,11,"山の日"),n(9,Oo(e,9,3),"敬老の日"),n(9,wm(e),"秋分の日"),n(10,Oo(e,10,2),"スポーツの日"),n(11,3,"文化の日"),n(11,23,"勤労感謝の日");for(const r of Object.keys(t)){const o=Ke(r),i=new Date(o);i.setDate(i.getDate()+1);const l=new Date(o);l.setDate(l.getDate()+2),t[Tt(l)]&&!t[Tt(i)]&&i.getDay()!==0&&(t[Tt(i)]="国民の休日")}for(const r of Object.keys({...t})){if(Ke(r).getDay()!==0)continue;const o=Ke(r);do o.setDate(o.getDate()+1);while(t[Tt(o)]);t[Tt(o)]="振替休日"}return Tl[e]=t,t}const bm=e=>!!km(Number(e.slice(0,4)))[e],Si=e=>{if(bm(e))return"sun";const t=Ke(e).getDay();return t===0?"sun":t===6?"sat":""},Jm=e=>"¥"+Math.round(Number(e)||0).toLocaleString("ja-JP"),Zm=e=>e.slice(0,7),qm=(e,t)=>{const[n,r]=e.split("-");return(t&&Number(n)===t?"":`${n}年`)+`${Number(r)}月`},Ye=()=>Tt(pf()),Uu=()=>{const e=pf();return e.setDate(e.getDate()-1),Tt(e)},hf=()=>{const e=new Date;return`${e.getHours()}:${De(e.getMinutes())}`},mf=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Sm=e=>String(e||"").replace(/[\/\\:*?"<>| -]/g,"_").replace(/\s+/g," ").trim()||"room";async function Ku(e){try{return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.top="0",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}const Pe=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36),jm=e=>Object.keys(e).sort().map(t=>`🩷${fe(t)}🩷 ${e[t].time}
${e[t].text}`).join(`

──────────

`),Nm=e=>{const t={},n=e.split(/\n*─{3,}\n*/);for(const r of n){const o=r.trim();if(!o)continue;const i=o.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(\d{1,2}:\d{2})?\s*\n?([\s\S]*)$/u);if(!i)continue;const l=`${i[1]}-${De(Number(i[2]))}-${De(Number(i[3]))}`,s=i[5].trim();s&&(t[l]={text:s,time:i[4]||"0:00"})}return t},eg=(e,t)=>{const n=[];let r="";for(const o of e)o.dateKey!==r&&(r=o.dateKey,n.length&&n.push(""),n.push(`🩷${fe(r)}🩷`)),n.push(`${o.time?o.time+" ":""}${t(o.memberId)}「${o.text}」`);return n.join(`
`)},tg=e=>{const t=[];let n=Ye(),r=null;const o=()=>{if(!r)return;let i=r.lines.join(`
`).trim();i.endsWith("」")&&(i=i.slice(0,-1)),i&&t.push({dateKey:r.dateKey,name:r.name,time:r.time,text:i}),r=null};for(const i of e.split(`
`)){const l=i.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(l){o(),n=`${l[1]}-${De(Number(l[2]))}-${De(Number(l[3]))}`;continue}if(r)r.lines.push(i);else{const a=i.match(/^(?:(\d{1,2}:\d{2})\s+)?(.+?)「([\s\S]*)$/u);if(!a)continue;r={dateKey:n,name:a[2].trim(),time:a[1]||"",lines:[a[3]]}}const s=r.lines[r.lines.length-1].trimEnd();s.endsWith("」")&&(r.lines[r.lines.length-1]=s,o())}return o(),t},Cm=[{key:"morning",label:"朝",emoji:"🌅"},{key:"noon",label:"昼",emoji:"☀️"},{key:"night",label:"夜",emoji:"🌙"}],ng=()=>{const e=new Date().getHours();return e>=5&&e<11?"morning":e>=11&&e<17?"noon":"night"},rg=(e,t)=>{var i;const n=l=>{var s;return((s=t.find(a=>a.id===l))==null?void 0:s.name)||"？"},r={};for(const l of e)(r[i=l.dateKey]||(r[i]={morning:[],noon:[],night:[]}))[l.slot].push(l);const o=[];for(const l of Object.keys(r).sort()){const s=[];for(const a of Cm){const c=r[l][a.key];if(!c.length)continue;const m=c.map(g=>n(g.memberId)+(g.memo&&g.memo.trim()?`(${g.memo.trim()})`:"")).join("・");s.push(`${a.emoji}${a.label}:${m}`)}s.length&&o.push(`🩷${fe(l)}🩷 ${s.join(" / ")}`)}return o.join(`
`)},og=e=>{const t=[],n=r=>r.includes("朝")?"morning":r.includes("昼")?"noon":r.includes("夜")?"night":null;for(const r of e.split(`
`)){const o=r.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(.*)$/u);if(!o)continue;const i=`${o[1]}-${De(Number(o[2]))}-${De(Number(o[3]))}`,l=o[4];if(l.trim())for(const s of l.split("/")){const a=s.indexOf(":"),c=s.indexOf("："),m=a===-1?c:c===-1?a:Math.min(a,c);if(m===-1)continue;const g=n(s.slice(0,m));if(!g)continue;const d=s.slice(m+1);for(const v of d.split("・")){const b=v.trim().match(/^(.+?)(?:[(（]([\s\S]*)[)）])?$/u);if(!b)continue;const S=b[1].trim();S&&t.push({dateKey:i,slot:g,name:S,memo:(b[2]||"").trim()})}}}return t},ig=e=>{var n;const t={};for(const r of e)(t[n=r.dateKey]||(t[n]={morning:[],noon:[],night:[]}))[r.slot].push(r);return t},lg=(e,t)=>{let n=t;for(const l of e)l.dateKey<n&&(n=l.dateKey);Ke(t);const r=Ke(t);r.setDate(r.getDate()-34);const o=Ke(n)<r?Ke(n):r,i=[];for(let l=new Date(o);Tt(l)<=t;l.setDate(l.getDate()+1))i.push(Tt(l));return i},sg=e=>{const t=[];for(const n of String(e||"").split(`
`)){let r=n.trim();r&&(/^🩷?\s*\d{4}[/-]\d{1,2}[/-]\d{1,2}\s*🩷?\s*$/u.test(r)||(r=r.replace(/^[★☆☐☑✓□■●○・\-*+•‣▪️\s]+/u,"").trim(),r&&t.push(r)))}return t},ag=e=>{const t=[];let n=Ye();for(const r of e.split(`
`)){const o=r.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(o){n=`${o[1]}-${De(Number(o[2]))}-${De(Number(o[3]))}`;continue}const i=r.match(/^\s*(★\s*)?([☑☐✓])\s+(.+)$/u);if(!i)continue;const l=!!i[1],s=i[2]==="☑"||i[2]==="✓",a=i[3].trim();a&&t.push({dateKey:n,text:a,done:s,important:l})}return t},gf="🩷 できたこと",Em=e=>{const t=(e||"").split(`
`),n=t.indexOf(gf);if(n===-1)return{text:e||"",items:[]};const r=[];let o=n+1;for(;o<t.length&&t[o].startsWith("☑ ");){const s=t[o].match(/^☑ (.*?)(?: \((\d{1,2}:\d{2})\))?$/u);s&&r.push({text:s[1],time:s[2]||""}),o++}let i=n;return i-1>=0&&t[i-1]===""&&(i-=1),t.splice(i,o-i),{text:t.join(`
`).replace(/\n{3,}/g,`

`).replace(/\s+$/,""),items:r}},ji="🎬 今日のコマ: ",zm=e=>(e||"").split(`
`).filter(t=>!t.startsWith(ji)).join(`
`).replace(/^\n+/,""),_m=(e,t)=>{const n=zm(e).trim(),r=ji+t;return n?`${r}

${n}`:r},Dm={morning:"🌅",noon:"☀️",night:"🌙"},Ro="nachumin-diary-backup.json";function Tm(e){if(!e||typeof e!="object"||Array.isArray(e))return"バックアップの形式が読めませんでした 🥺";if(e.app!=="nachumin-diary")return"これは Nachumin Lifelog のバックアップファイルではないみたい 🥺";if(!Array.isArray(e.rooms))return"ルームの情報が入っていません。ファイルが壊れているかも 🥺";if(e.rooms.some(t=>!t||typeof t!="object"||!t.id||!t.type))return"ルームの形式が壊れています 🥺";if(e.data!=null&&(typeof e.data!="object"||Array.isArray(e.data)))return"ルームの中身の形式が壊れています 🥺";for(const t of["doneLogs","habits","habitLogs","habitSeeds"])if(e[t]!=null&&(typeof e[t]!="object"||Array.isArray(e[t])))return`${t} の形式が壊れています 🥺`;return null}function Lm(e){const t={rooms:(e.rooms||[]).length,items:0},n=r=>r==="talk"?"messages":r==="todo"?"todos":r==="darelog"?"records":r==="expense"?"expenses":null;for(const r of e.rooms||[]){const o=e.data?e.data[r.id]:void 0;if(!o)continue;const i=n(r.type);t.items+=i?(o[i]||[]).length:Object.keys(o).length}return t}function Ll(e,t){var i;if(e.type==="talk"){const l=t&&t.messages||[],s=l[l.length-1];return{previewName:s?(c=>{var m;return((m=(e.members||[]).find(g=>g.id===c))==null?void 0:m.name)||""})(s.memberId):"",preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="todo"){const l=t&&t.todos||[],s=l[l.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?`${s.done?"☑":"☐"} ${s.text.split(`
`)[0]}`.slice(0,40):"",todoOpen:l.filter(a=>!a.done).length,lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="darelog"){const l=t&&t.records||[],s=l[l.length-1],a=c=>{var m;return((m=(e.members||[]).find(g=>g.id===c))==null?void 0:m.name)||""};return{preview:s?`${Dm[s.slot]||""} ${a(s.memberId)}`.trim():"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="expense"){const l=t&&t.expenses||[],s=l[l.length-1];return{preview:s?`${(c=>{var m;return((m=(e.categories||[]).find(g=>g.id===c))==null?void 0:m.name)||""})(s.categoryId)} ¥${(s.amount||0).toLocaleString("ja-JP")}`:"",lastAt:e.lastAt||(s?Date.now():0)}}const n=t&&typeof t=="object"?t:{},r=Object.keys(n).sort(),o=r[r.length-1];return{preview:typeof((i=n[o])==null?void 0:i.text)=="string"?n[o].text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(o?Date.now():0)}}async function Hu(){const e=await Q(Mt)||[],t={};for(const a of e){const c=await Q(Oe(a.id));c!==void 0&&(t[a.id]=c)}const n=await Q(Xo)||null,r={},o={},i={},l={};for(const a of e){const c=await Q(Nn(a.id));c&&Object.keys(c).length&&(r[a.id]=c);const m=await Q(Cn(a.id));Array.isArray(m)&&m.length&&(o[a.id]=m);const g=await Q(ki(a.id));g&&Object.keys(g).length&&(i[a.id]=g),await Q(bi(a.id))&&(l[a.id]=!0)}const s=await Q(lo)||null;return{app:"nachumin-diary",version:1,exportedAt:new Date().toISOString(),rooms:e,data:t,declaration:n,doneLogs:r,habits:o,habitLogs:i,habitSeeds:l,marks:s}}const Pm=e=>e.map((t,n)=>[t,n]).sort((t,n)=>t[0].dateKey<n[0].dateKey?-1:t[0].dateKey>n[0].dateKey?1:t[1]-n[1]).map(([t])=>t);async function Mm(e){var s;if(!e||e.app!=="nachumin-diary"||!Array.isArray(e.rooms))throw new Error("invalid-backup");const t=await Q(Mt)||[],n=new Map(t.map(a=>[a.id,{...a}]));let r=0,o=0;for(const a of e.rooms){const c=e.data?e.data[a.id]:void 0,m=a.type==="talk"?"messages":a.type==="todo"?"todos":a.type==="darelog"?"records":a.type==="expense"?"expenses":null,g=v=>m==="messages"?`${v.dateKey} ${v.memberId} ${v.text}`:m==="todos"?`${v.dateKey} ${v.text}`:m==="records"?`${v.dateKey} ${v.slot} ${v.memberId}`:v.id;if(!n.has(a.id)){c!==void 0&&await X(Oe(a.id),c),n.set(a.id,{...a,...Ll(a,c)}),r+=1,m?o+=((s=c==null?void 0:c[m])==null?void 0:s.length)||0:o+=c?Object.keys(c).length:0;continue}const d=n.get(a.id);if(m){const b=(await Q(Oe(a.id))||{})[m]||[],S=new Set(b.map(g));let P=b.slice();for(const p of(c==null?void 0:c[m])||[])S.has(g(p))||(S.add(g(p)),P.push(p),o+=1);m==="messages"&&(P=Pm(P));const h={[m]:P};await X(Oe(a.id),h);let f={...d};if(a.type==="talk"||a.type==="darelog"){const p=d.members||[],w=new Set(p.map(j=>j.id));f.members=p.concat((a.members||[]).filter(j=>!w.has(j.id)))}n.set(a.id,{...f,...Ll(f,h)})}else{const b={...await Q(Oe(a.id))||{}};for(const S of Object.keys(c||{}))b[S]||(b[S]=c[S],o+=1);await X(Oe(a.id),b),n.set(a.id,{...d,...Ll(d,b)})}}if(e.doneLogs)for(const[a,c]of Object.entries(e.doneLogs)){const m=Nn(a),d={...await Q(m)||{}};for(const[v,b]of Object.entries(c)){const S=(d[v]||[]).slice();for(const P of b)S.some(h=>h.text===P.text&&h.time===P.time)||S.push(P);d[v]=S}await X(m,d)}const i={};if(e.habits)for(const[a,c]of Object.entries(e.habits)){if(!Array.isArray(c))continue;const m=await Q(Cn(a));if(m===void 0){await X(Cn(a),c);continue}const g=Array.isArray(m)?m:[],d=new Set(g.map(P=>P.id)),v=new Map(g.filter(P=>(P.name||"").trim()).map(P=>[P.name.trim(),P.id])),b=g.slice(),S={};for(const P of c){if(!P||!P.id)continue;if(d.has(P.id)){S[P.id]=P.id;continue}const h=(P.name||"").trim(),f=h?v.get(h):null;if(f){S[P.id]=f;continue}b.push(P),d.add(P.id),h&&v.set(h,P.id),S[P.id]=P.id}b.length!==g.length&&await X(Cn(a),b),i[a]=S}if(e.habitSeeds)for(const a of Object.keys(e.habitSeeds))e.habitSeeds[a]&&await X(bi(a),!0);if(e.habitLogs)for(const[a,c]of Object.entries(e.habitLogs)){const m=i[a]||{},g=ki(a),v={...await Q(g)||{}};for(const[b,S]of Object.entries(c)){const P=(S||[]).map(h=>m[h]||h);v[b]=[...new Set([...v[b]||[],...P])]}await X(g,v)}if(Array.isArray(e.marks)&&e.marks.length){const a=await Q(lo);(!Array.isArray(a)||!a.length)&&await X(lo,e.marks)}const l=[...n.values()];return await X(Mt,l),{addedRooms:r,addedItems:o,rooms:l}}const gn="M12 20.5s-7.5-5-7.5-10a4.2 4.2 0 0 1 7.5-2.6A4.2 4.2 0 0 1 19.5 10.5c0 5-7.5 10-7.5 10z",Om=`<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>
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
<path d='${gn}' transform='translate(96 60) scale(1.6)'/>
<path d='${gn}' transform='translate(24 96) scale(0.9) rotate(-12 12 12)'/>
<path d='${gn}' transform='translate(190 60) scale(0.8) rotate(14 12 12)'/>
<path d='${gn}' transform='translate(130 150) scale(1.1) rotate(-8 12 12)'/>
<path d='${gn}' transform='translate(30 208) scale(0.8) rotate(10 12 12)'/>
</g>
<g fill='#f8b1d6'>
<path d='${gn}' transform='translate(100 64) scale(1.1) '/>
<path d='${gn}' transform='translate(133 153) scale(0.7)'/>
</g>
</svg>`,Pl=`url("data:image/svg+xml,${encodeURIComponent(Om)}")`,ug=["#ffffff","#fff5fa","#ffd9ec","#ffc4e1","#ff9fd0","#e0629f","#d4f0ff","#c9f5f2","#d9ffe3","#e8dcff","#f0f0f0","#2b2430"],cg=["#9C27B0","#E91E63","#FFEB3B","#2196F3","#4CAF50","#FF9800","#F44336","#00BCD4","#3F51B5","#8BC34A","#FF4081","#009688"],xf=["#ff6fb2","#c58cff","#6fb8ff","#5fd6b0","#ffcf5f","#ff9d6f","#7ed957","#ff8fa8"],Pr=xf[0],Wu=e=>{const t=e||Pr;return{background:`linear-gradient(163deg, #ffffff 0%, #fff6fb 40%, ${t}2e 100%)`,boxShadow:`0 6px 13px ${t}42, 0 2px 0 ${t}66, inset 0 1.5px 0 #ffffff`,borderColor:`${t}55`}},dg=[{key:"auto",label:"自動",value:null},{key:"white",label:"白",value:"#ffffff"},{key:"black",label:"黒",value:"#222028"},{key:"pink",label:"ピンク",value:"#ff2d87"}],Rm=e=>{const t=String(e).replace("#","");if(t.length<6)return"#4a3140";const n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),o=parseInt(t.slice(4,6),16);return .299*n+.587*r+.114*o<140?"#fff5fa":"#4a3140"},fg=e=>e&&e.textColor?e.textColor:Rm(e&&e.color),Vu=`
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
  .ig-cell.dragging { opacity: .96; }
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
`;function yf(e,t,n){if(!e)return;const r=e.selectionStart??e.value.length,o=e.selectionEnd??e.value.length,i=e.value.slice(0,r)+t+e.value.slice(o);n(i),requestAnimationFrame(()=>{try{e.focus();const l=r+t.length;e.setSelectionRange(l,l)}catch{}})}function vf({marks:e,onInsert:t,onEdit:n}){return u.jsxs("div",{className:"markbar",children:[e.map((r,o)=>u.jsx("button",{className:"markchip",onMouseDown:i=>i.preventDefault(),onClick:()=>t(r),children:r},o)),u.jsx("button",{className:"markchip mark-edit",onMouseDown:r=>r.preventDefault(),onClick:n,"aria-label":"マークを編集",children:"⚙︎"})]})}function wf(e=!0){const[t,n]=z.useState(0);return z.useEffect(()=>{if(!e||!window.visualViewport){n(0);return}const r=window.visualViewport,o=()=>n(Math.max(0,window.innerHeight-r.height-r.offsetTop));return o(),r.addEventListener("resize",o),r.addEventListener("scroll",o),()=>{r.removeEventListener("resize",o),r.removeEventListener("scroll",o)}},[e]),t}function Im({initial:e,appendNewline:t,marks:n,onEditMarks:r,onSave:o,onCancel:i,onDelete:l,placeholder:s,bottomToolbar:a}){const[c,m]=z.useState(t?e?e+`
`:"":e||""),g=wf(!!a),d=z.useRef(null),v=()=>{const h=d.current;h&&(h.style.height="auto",h.style.height=Math.min(h.scrollHeight,Math.round(window.innerHeight*.42))+"px")};z.useEffect(()=>{const h=d.current;if(!h)return;h.focus(),v();const f=h.value.length;h.setSelectionRange(f,f),h.scrollTop=h.scrollHeight},[]);const b=h=>yf(d.current,h+" ",f=>{m(f),requestAnimationFrame(v)}),S=n?u.jsx(vf,{marks:n,onInsert:b,onEdit:r}):null,P=u.jsxs("div",{className:"inline-btns",children:[l&&u.jsx("button",{className:"ie-del",onClick:l,children:"削除"}),u.jsx("button",{className:"ie-cancel",onClick:i,children:"キャンセル"}),u.jsx("button",{className:"ie-save",onClick:()=>o(c),"aria-label":"保存",children:"💌"})]});return u.jsxs("div",{className:"inline-edit",onClick:h=>h.stopPropagation(),children:[!a&&S,u.jsx("textarea",{ref:d,className:"inline-ta",value:c,placeholder:s,onChange:h=>{m(h.target.value),v()}}),a?u.jsxs("div",{className:"edit-toolbar",style:{bottom:g},onClick:h=>h.stopPropagation(),children:[S,P]}):P]})}function $m(e,t=500){const n=z.useRef({}),r=l=>{if(typeof e!="function"||l.touches&&l.touches.length!==1)return;const s=l.touches?l.touches[0]:l;n.current.x=s.clientX,n.current.y=s.clientY,n.current.fired=!1,clearTimeout(n.current.timer),n.current.timer=setTimeout(()=>{n.current.fired=!0;try{navigator.vibrate&&navigator.vibrate(15)}catch{}e({x:n.current.x,y:n.current.y})},t)},o=l=>{const s=l.touches?l.touches[0]:l;(Math.abs(s.clientX-n.current.x)>10||Math.abs(s.clientY-n.current.y)>10)&&clearTimeout(n.current.timer)},i=()=>clearTimeout(n.current.timer);return{onTouchStart:r,onTouchMove:o,onTouchEnd:i,onTouchCancel:i,onContextMenu:l=>{typeof e=="function"&&(l.preventDefault(),e({x:l.clientX,y:l.clientY}))},onClickCapture:l=>{n.current.fired&&(l.stopPropagation(),l.preventDefault(),n.current.fired=!1)}}}function Qu({onLongPress:e,longPressMs:t,children:n,...r}){const o=$m(e,t);return u.jsx("div",{...r,...o,children:n})}function Am({x:e,y:t,onCopy:n,onEdit:r,onDelete:o,onClose:i,top:l,extra:s}){const m=z.useRef(null),[g,d]=z.useState(null);return z.useLayoutEffect(()=>{const v=m.current;if(!v)return;const b=v.offsetHeight,S=window.innerWidth,P=window.innerHeight,h=Math.max(8,Math.min(e-168/2,S-168-8));let f=t+8;f+b>P-8&&(f=t-8-b),f<8&&(f=Math.max(8,P-b-8)),d({left:h,top:f})},[e,t,l,s,r,o]),u.jsx("div",{className:"ctx-overlay",onClick:i,onContextMenu:v=>v.preventDefault(),children:u.jsxs("div",{ref:m,className:"ctx-menu",style:{left:g?g.left:Math.max(8,Math.min(e-168/2,window.innerWidth-168-8)),top:g?g.top:t+8,width:168,maxHeight:`calc(100vh - ${8*2}px)`,overflowY:"auto",visibility:g?"visible":"hidden"},onClick:v=>v.stopPropagation(),children:[(l||[]).map((v,b)=>u.jsx("button",{className:"ctx-item ctx-top",onClick:v.onClick,children:v.label},b)),u.jsx("button",{className:"ctx-item",onClick:n,children:"📋 コピー"}),r&&u.jsx("button",{className:"ctx-item",onClick:r,children:"✏️ 編集"}),(s||[]).map((v,b)=>u.jsx("button",{className:"ctx-item",onClick:v.onClick,children:v.label},b)),o&&u.jsx("button",{className:"ctx-item ctx-del",onClick:o,children:"🗑 削除"})]})})}function kf({message:e,confirmLabel:t="削除する",onConfirm:n,onCancel:r}){return u.jsx("div",{className:"overlay confirm-over",onClick:r,children:u.jsxs("div",{className:"panel confirm-panel",onClick:o=>o.stopPropagation(),children:[u.jsx("div",{className:"confirm-msg",children:e}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-close",onClick:r,children:"キャンセル"}),u.jsx("button",{className:"p-del arm",onClick:n,children:t})]})]})})}function Fm({habits:e,habitAch:t,onToggle:n,onClose:r,onManage:o}){const i=Ye(),[l,s]=z.useState(i.slice(0,7)),[a,c]=l.split("-").map(Number),m=new Date(a,c,0).getDate(),g=i.slice(0,7),d=z.useMemo(()=>{const p=[];for(let w=1;w<=m;w++){const j=`${a}-${De(c)}-${De(w)}`;p.push({d:w,key:j,dow:new Date(a,c-1,w).getDay(),isToday:j===i,future:j>i})}return p},[a,c,m,i]),v=p=>{const w=new Date(a,c-1+p,1);s(`${w.getFullYear()}-${De(w.getMonth()+1)}`)},b=(p,w)=>p.freq==="weekly"?(p.days||[]).includes(w):!0,S=p=>{let w=0,j=0;for(const D of d)b(p,D.dow)&&(D.future||(j+=1),(t[D.key]||[]).includes(p.id)&&(w+=1));return{done:w,total:j}},P=e.filter(p=>p.freq!=="weekly"),h=e.filter(p=>p.freq==="weekly"),f=p=>{const{done:w,total:j}=S(p),D=j?w/j:0,L=w===0?0:D>=.8?3:D>=.5?2:D>=.25?1:0;return u.jsxs("div",{className:"hv-row",children:[u.jsxs("div",{className:"hv-name",children:[u.jsx("span",{className:"hv-emoji",children:p.emoji||"🩷"}),u.jsx("span",{className:"hv-nm",children:p.name})]}),u.jsx("div",{className:"hv-cells",children:d.map(T=>{const F=b(p,T.dow),M=(t[T.key]||[]).includes(p.id);return u.jsx("button",{className:"hv-cell"+(M?" on":"")+(F?"":" off")+(T.isToday?" today":"")+(T.future?" future":""),disabled:!F||T.future,"aria-label":`${c}月${T.d}日 ${p.name}${M?" 達成ずみ":""}`,"aria-pressed":M,onClick:()=>n(T.key,p.id),children:M?"♥":""},T.key)})}),u.jsxs("div",{className:"hv-count lv"+L,children:[u.jsx("span",{className:"hv-n",children:w}),u.jsxs("span",{className:"hv-d",children:["/",j]})]})]},p.id)};return u.jsxs("div",{className:"hv-screen",children:[u.jsxs("div",{className:"hd",children:[u.jsx("button",{className:"back-btn","aria-label":"とじる",onClick:r,children:"‹"}),u.jsxs("div",{style:{minWidth:0},children:[u.jsx("div",{className:"hd-title",children:"🎯 習慣ビュー"}),u.jsx("div",{className:"hd-sub",children:"スタンプで振り返る"})]}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"習慣を編集",onClick:o,children:"⚙︎"})]}),u.jsxs("div",{className:"hv-monthbar",children:[u.jsx("button",{className:"hv-mbtn","aria-label":"前の月",onClick:()=>v(-1),children:"‹"}),u.jsxs("div",{className:"hv-month",children:[a,"年",c,"月"]}),u.jsx("button",{className:"hv-mbtn","aria-label":"次の月",onClick:()=>v(1),children:"›"}),l!==g&&u.jsx("button",{className:"hv-now",onClick:()=>s(g),children:"今月"})]}),e.length===0?u.jsxs("div",{className:"empty",children:["まだ習慣がありません。",`
`,"右上の⚙︎から追加してね💗"]}):u.jsx("div",{className:"hv-scroll",children:u.jsxs("div",{className:"hv-table",children:[u.jsxs("div",{className:"hv-row hv-head",children:[u.jsx("div",{className:"hv-name hv-corner",children:"習慣"}),u.jsx("div",{className:"hv-cells",children:d.map(p=>u.jsxs("div",{className:"hv-dcell"+(p.isToday?" today":"")+(Si(p.key)?" "+Si(p.key):""),children:[u.jsx("span",{className:"hv-dnum",children:p.d}),u.jsx("span",{className:"hv-dow",children:ym[p.dow]})]},p.key))}),u.jsx("div",{className:"hv-count hv-corner",children:"今月"})]}),P.map(f),h.length>0&&u.jsx("div",{className:"hv-seprow",children:u.jsx("span",{className:"hv-seplabel",children:"毎週の習慣"})}),h.map(f)]})})]})}const zr="🎬",Bm=[1,2,3,4,5,6,0];function Um({room:e,onBack:t,onMeta:n,initialQuery:r,showToast:o,pinned:i,syncSignal:l,marks:s,onEditMarks:a}){const[c,m]=z.useState({}),[g,d]=z.useState({}),[v,b]=z.useState([]),[S,P]=z.useState({}),[h,f]=z.useState(!1),[p,w]=z.useState(null),[j,D]=z.useState(Ye()),[L,T]=z.useState(""),[F,M]=z.useState(!!r),[W,de]=z.useState(r||""),[et,ut]=z.useState(!1),[cn,tt]=z.useState(!1),[ct,O]=z.useState(""),[B,U]=z.useState(!1),[Z,te]=z.useState(!1),[ue,J]=z.useState(null),[Ne,we]=z.useState(null),[Et,nt]=z.useState(!1),[dn,Ui]=z.useState(120),Ae=z.useRef(null),Bt=z.useRef(null),Mn=z.useRef(null),Ut=z.useRef(null),q=wf(!p);z.useEffect(()=>{(async()=>{try{let x=await Q(Oe(e.id));x=typeof x=="string"?JSON.parse(x):x||{};const k=await Q(Nn(e.id))||{};let N=!1;const _={},A={...k};for(const[xe,K]of Object.entries(x))if(K&&typeof K.text=="string"&&K.text.includes(gf)){const{text:dt,items:Bn}=Em(K.text);if(_[xe]={...K,text:dt},Bn.length){const Le=(A[xe]||[]).slice();for(const tl of Bn)Le.some(Na=>Na.text===tl.text&&Na.time===tl.time)||Le.push(tl);A[xe]=Le}N=!0}else _[xe]=K;N&&(await X(Oe(e.id),_),await X(Nn(e.id),A)),m(_),d(A);let V=await Q(Cn(e.id));const ne=V===void 0;ne&&(V=[{id:Pe(),name:"note投稿",emoji:"📝"},{id:Pe(),name:"キャラ投稿",emoji:"🎨"}]);let Ce=ne;V=V.map(xe=>xe.freq&&xe.days?xe:(Ce=!0,{...xe,freq:xe.freq||"daily",days:xe.days||[]})),await Q(bi(e.id))||(await X(bi(e.id),!0),V.some(xe=>xe.name==="週報を書く")||(V=[...V,{id:Pe(),name:"週報を書く",emoji:"📋",freq:"weekly",days:[0]}],Ce=!0)),Ce&&await X(Cn(e.id),V),b(Array.isArray(V)?V:[]),P(await Q(ki(e.id))||{})}catch{}finally{f(!0)}})()},[e.id]),z.useEffect(()=>{l&&(async()=>{const x=await Q(Oe(e.id));x&&m(typeof x=="string"?JSON.parse(x):x),d(await Q(Nn(e.id))||{})})()},[l]),z.useEffect(()=>{if(!Ut.current||typeof ResizeObserver>"u")return;const x=new ResizeObserver(()=>Ut.current&&Ui(Ut.current.offsetHeight));return x.observe(Ut.current),()=>x.disconnect()},[p,F]);const fn=async x=>{m(x);try{await X(Oe(e.id),x);const k=Object.keys(x).sort(),N=k[k.length-1];n({preview:N?x[N].text.split(`
`)[0].slice(0,40):"",lastAt:Date.now()})}catch{o("保存に失敗しました。ストレージを確認してね")}};z.useEffect(()=>{!W&&!p&&Ae.current&&(Ae.current.scrollTop=Ae.current.scrollHeight)},[h,W,p]),z.useEffect(()=>{var k;if(!p)return;const x=(k=Ae.current)==null?void 0:k.querySelector(".editing-now");x&&setTimeout(()=>x.scrollIntoView({block:"start",behavior:"smooth"}),60)},[p]);const Ki=()=>{const x=L.trim();if(!x)return;const k=c[j];fn({...c,[j]:k?{...k,text:k.text+`

`+x}:{text:x,time:hf()}}),T(""),Bt.current&&(Bt.current.style.height="auto"),setTimeout(()=>{var _;const N=(_=Ae.current)==null?void 0:_.querySelector(`[data-date="${j}"]`);N?N.scrollIntoView({block:"end",behavior:"smooth"}):Ae.current&&(Ae.current.scrollTop=Ae.current.scrollHeight)},50)},Hi=x=>{T(x.target.value);const k=x.target;k.style.height="auto",k.style.height=Math.min(k.scrollHeight,140)+"px"},xr=x=>yf(Bt.current,x+" ",k=>{T(k),requestAnimationFrame(()=>{const N=Bt.current;N&&(N.style.height="auto",N.style.height=Math.min(N.scrollHeight,140)+"px")})}),vt=x=>{w(x),de(""),M(!1)},Wi=(x,k)=>{const N=k.trim();if(!N){w(null);return}fn({...c,[x]:{...c[x],text:N}}),w(null)},ho=x=>{const k={...c};delete k[x],fn(k),w(null)},[On,pn]=z.useState(null),Rn=x=>pn({message:`🩷${fe(x)}🩷 の日記を削除しますか？`,onConfirm:()=>{ho(x),pn(null)}}),In=(x,k)=>{const N=S[x]||[],_=N.includes(k)?N.filter(V=>V!==k):[...N,k],A={...S};_.length?A[x]=_:delete A[x],P(A),X(ki(e.id),A).catch(()=>o("保存に失敗しました"))},hn=x=>{b(x),X(Cn(e.id),x).catch(()=>o("保存に失敗しました"))},Vi=()=>hn([...v,{id:Pe(),name:"",emoji:"🩷",freq:"daily",days:[]}]),mn=(x,k)=>hn(v.map(N=>N.id===x?{...N,...k}:N)),mo=(x,k)=>{if(k==="weekly"){const N=v.find(_=>_.id===x);mn(x,{freq:k,days:N&&N.days&&N.days.length?N.days:[Ke(Ye()).getDay()]})}else mn(x,{freq:"daily"})},Qi=(x,k)=>{const N=v.find(A=>A.id===x),_=(N.days||[]).includes(k)?N.days.filter(A=>A!==k):[...N.days||[],k];mn(x,{days:_})},go=(x,k)=>{const N=x+k;if(N<0||N>=v.length)return;const _=[...v];[_[x],_[N]]=[_[N],_[x]],hn(_)},Yi=x=>{const k=v.find(_=>_.id===x),N=Object.values(S).filter(_=>(_||[]).includes(x)).length;pn({message:`習慣「${((k==null?void 0:k.emoji)||"")+((k==null?void 0:k.name)||"")}」を削除しますか？`+(N?`
これまでの達成 ${N}日分 の記録も消えます。`:""),onConfirm:()=>{hn(v.filter(_=>_.id!==x)),pn(null)}})},$n=()=>{const x=v.filter(k=>k.name.trim()||k.emoji&&k.emoji.trim());x.length!==v.length&&hn(x),U(!1)},An=()=>jm(c),yr=async()=>{try{await navigator.clipboard.writeText(An()),nt(!0)}catch{try{Mn.current.focus(),Mn.current.select(),document.execCommand("copy"),nt(!0)}catch{o("コピーできませんでした。全選択して手動でコピーしてね")}}setTimeout(()=>nt(!1),2e3)},Xi=()=>{try{const x=new Blob([An()],{type:"text/plain;charset=utf-8"}),k=URL.createObjectURL(x),N=document.createElement("a");N.href=k,N.download=`nachumin-diary-${Sm(e.name)}.txt`,document.body.appendChild(N),N.click(),N.remove(),setTimeout(()=>URL.revokeObjectURL(k),3e3)}catch{o("ダウンロードできない環境みたい。コピーを使ってね")}},Fn=()=>{const x=Nm(ct),k=Object.keys(x);if(k.length===0){o("読み込める日記が見つかりませんでした 🥺");return}let N=0,_=0;const A={...c};for(const V of k)A[V]?_+=1:(A[V]=x[V],N+=1);fn(A),tt(!1),O(""),o(`${N}件の日記を復元したよ💗`+(_?`（${_}件はもうあるのでスキップ）`:""))},zt=x=>W?x.split(new RegExp(`(${mf(W)})`,"gi")).map((N,_)=>N.toLowerCase()===W.toLowerCase()?u.jsx("mark",{className:"hl",children:N},_):N):x,wt=z.useMemo(()=>{var V;const x=(s||[]).filter(Boolean),k=[...x,zr],N=[...x].sort((ne,Ce)=>Ce.length-ne.length),_={},A={};for(const ne of k)_[ne]=0,A[ne]=[];for(const ne of Object.keys(c).sort().reverse()){const Ce=(((V=c[ne])==null?void 0:V.text)||"").split(`
`).reverse();for(const Fe of Ce){if(!Fe.trim())continue;const xe=Fe.trim();if(xe.startsWith(ji)){const Le=xe.slice(ji.length).trim();Le&&(A[zr].push({dateKey:ne,text:Le}),_[zr]+=1);continue}let K=Fe.trim();const dt=[];let Bn=!0;for(;Bn;){Bn=!1;for(const Le of N)if(K.startsWith(Le)){dt.includes(Le)||dt.push(Le),K=K.slice(Le.length).trimStart(),Bn=!0;break}}if(!(!dt.length||!K))for(const Le of dt)A[Le]&&(A[Le].push({dateKey:ne,text:K}),_[Le]+=1)}}return{counts:_,byMark:A}},[c,s]),vr=[...(s||[]).filter(Boolean),zr],Gi=()=>{we(vr.find(x=>wt.counts[x]>0)||vr[0]||null)},Ji=x=>{we(null),de(""),M(!1),setTimeout(()=>{var N;const k=(N=Ae.current)==null?void 0:N.querySelector(`[data-date="${x}"]`);k&&k.scrollIntoView({block:"center",behavior:"smooth"})},90)},Zi=async()=>{const x=wt.byMark[Ne]||[];if(!x.length)return;const k=[];let N="";for(const A of x)A.dateKey!==N&&(N=A.dateKey,k.length&&k.push(""),k.push(`🩷${fe(N)}🩷`)),k.push(A.text);const _=await Ku(k.join(`
`));o(_?"コピーしました🩷":"コピーできませんでした。手動でコピーしてね")},qi=x=>{const k=["🩷 できたこと"];for(const A of g[x]||[])k.push(`☑ ${A.text}${A.time?` (${A.time})`:""}`);const N=S[x]||[],_=v.filter(A=>N.includes(A.id)).map(A=>`${A.emoji||""}${A.name}`);return _.length&&k.push("習慣: "+_.join(" ")),k.join(`
`)},el=async x=>{const k=await Ku(x);o(k?"コピーしました🩷":"コピーできませんでした。手動でコピーしてね"),J(null)},xo=W.toLowerCase(),kt=Ye(),y=new Set([...Object.keys(c),...Object.keys(g),...Object.keys(S)]);v.length&&y.add(kt);let C=[...y].sort();W&&(C=C.filter(x=>{const k=c[x]&&(c[x].text+fe(x)).toLowerCase().includes(xo),N=(g[x]||[]).some(_=>_.text.toLowerCase().includes(xo));return k||N}));const R=fe(j).slice(5),I=(x,k)=>u.jsx("button",{className:"chip"+(j===k?" chip-on":""),onClick:()=>D(k),children:x},x);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"hd",children:[u.jsx("button",{className:"back-btn","aria-label":"もどる",onClick:t,children:"‹"}),u.jsx("span",{style:{fontSize:20},children:e.emoji}),u.jsxs("div",{children:[u.jsx("div",{className:"hd-title",children:e.name}),u.jsx("div",{className:"hd-sub",children:"Nachumin Lifelog"})]}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"マークで集める",onClick:Gi,children:"🔖"}),u.jsx("button",{className:"icon-btn","aria-label":"習慣",onClick:()=>U(!0),children:"🎯"}),u.jsx("button",{className:"icon-btn","aria-label":"テキスト書き出し",onClick:()=>ut(!0),children:"📤"}),u.jsx("button",{className:"icon-btn","aria-label":"テキストから復元",onClick:()=>tt(!0),children:"📥"}),u.jsx("button",{className:"icon-btn","aria-label":"検索",onClick:()=>{M(!F),de("")},children:F?"✕":"🔍"})]}),i,F&&u.jsx("div",{className:"search-row",children:u.jsx("input",{autoFocus:!0,placeholder:"日記を検索（ことば・日付）",value:W,onChange:x=>de(x.target.value)})}),u.jsxs("div",{className:"chat",ref:Ae,style:{paddingBottom:p?210:dn+12},children:[h&&C.length===0&&u.jsx("div",{className:"empty",children:W?"みつかりませんでした 🥺":`まだ日記がありません。
下から今日のことを書いてみよう💗`}),C.map(x=>{const k=p===x,N=!!c[x],_=g[x]||[],A=x===kt,V=S[x]||[],ne=Ke(x).getDay(),Ce=v.filter(K=>K.freq==="weekly"?(K.days||[]).includes(ne):!0),Fe=Ce.length>0&&(A||N||V.length>0),xe=_.length>0||Fe;return u.jsxs(z.Fragment,{children:[N&&u.jsxs("div",{className:"row","data-date":x,children:[u.jsx("div",{className:"time",children:c[x].time}),u.jsxs(Qu,{className:"bubble"+(k?" editing-now":""),onClick:k?void 0:()=>vt(x),onLongPress:k?void 0:K=>J({type:"diary",k:x,x:K.x,y:K.y}),role:"button",tabIndex:0,onKeyDown:K=>!k&&K.key==="Enter"&&vt(x),children:[u.jsx("span",{className:"spark",children:"✨"}),u.jsxs("div",{className:"d-head",children:["🩷",u.jsxs("span",{className:"lnk"+(Si(x)?" wd-"+Si(x):""),children:[fe(x)," ",Bu[Ke(x).getDay()]]}),"🩷"]}),k?u.jsx(Im,{initial:c[x].text,appendNewline:!0,marks:s,onEditMarks:a,bottomToolbar:!0,onSave:K=>Wi(x,K),onCancel:()=>w(null),onDelete:()=>Rn(x),placeholder:"内容を書きなおしてね"}):u.jsx("div",{className:"body",children:zt(c[x].text)})]})]}),xe&&u.jsx("div",{className:"done-row",style:N?void 0:{marginTop:0},children:u.jsxs(Qu,{className:"done-bubble",onLongPress:K=>J({type:"done",k:x,x:K.x,y:K.y}),children:[u.jsxs("div",{className:"done-head",children:[u.jsx("span",{children:"🩷 できたこと"}),Fe&&u.jsx("button",{className:"hv-open","aria-label":"習慣ビューをひらく",onClick:K=>{K.stopPropagation(),te(!0)},children:"🎯 習慣ビュー"})]}),_.map((K,dt)=>u.jsxs("div",{className:"done-line",children:["☑ ",zt(K.text),K.time?u.jsxs("span",{className:"done-time",children:[" (",K.time,")"]}):null]},dt)),Fe&&u.jsx("div",{className:"habits-row"+(_.length?" has-sep":""),children:Ce.map(K=>{const dt=V.includes(K.id);return u.jsxs("button",{className:"habit-chip"+(dt?" on":""),onClick:()=>In(x,K.id),children:[K.emoji?K.emoji+" ":"",K.name,dt?" 🩷":""]},K.id)})})]})})]},x)})]}),!p&&u.jsxs("div",{className:"bar bar-fixed",ref:Ut,style:{bottom:q},children:[u.jsxs("div",{className:"chips",children:[I("今日",kt),I("昨日",Uu()),u.jsxs("button",{className:"chip chip-date",children:["📅 ",j===kt||j===Uu()?"日付をえらぶ":R,u.jsx("input",{type:"date",value:j,onChange:x=>x.target.value&&D(x.target.value)})]}),c[j]&&u.jsx("span",{className:"exists-note",children:"この日はもうあるので追記されます"})]}),s&&s.length>0&&u.jsx(vf,{marks:s,onInsert:xr,onEdit:a}),u.jsxs("div",{className:"in-row",children:[u.jsx("textarea",{ref:Bt,className:"ta",rows:1,placeholder:j===kt?"今日あったことを書く…":`${R} に追記…`,value:L,onChange:Hi}),u.jsx("button",{className:"send","aria-label":"送信",disabled:!L.trim(),onClick:Ki,children:"↑"})]})]}),ue&&u.jsx(Am,{x:ue.x,y:ue.y,onClose:()=>J(null),onCopy:()=>{var x;return el(`🩷${fe(ue.k)}🩷
`+(ue.type==="diary"?((x=c[ue.k])==null?void 0:x.text)||"":qi(ue.k)))},onEdit:ue.type==="diary"?()=>{J(null),vt(ue.k)}:void 0,onDelete:ue.type==="diary"?()=>{J(null),Rn(ue.k)}:void 0}),On&&u.jsx(kf,{message:On.message,onConfirm:On.onConfirm,onCancel:()=>pn(null)}),Ne!==null&&u.jsxs("div",{className:"mv-screen",children:[u.jsxs("div",{className:"hd",children:[u.jsx("button",{className:"back-btn","aria-label":"とじる",onClick:()=>we(null),children:"‹"}),u.jsxs("div",{style:{minWidth:0},children:[u.jsx("div",{className:"hd-title",children:"🔖 マークで集める"}),u.jsxs("div",{className:"hd-sub",children:[(wt.byMark[Ne]||[]).length,"件 ・ 全期間"]})]}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"ぜんぶコピー",onClick:Zi,children:"📋"})]}),u.jsx("div",{className:"mv-marks",children:vr.map(x=>u.jsxs("button",{className:"mv-chip"+(Ne===x?" on":""),onClick:()=>we(x),children:[u.jsx("span",{className:"mv-chip-m",children:x}),u.jsx("span",{className:"mv-chip-n",children:wt.counts[x]||0})]},x))}),u.jsx("div",{className:"mv-list",children:(wt.byMark[Ne]||[]).length===0?u.jsx("div",{className:"empty",children:Ne===zr?`今日のコマはまだありません。
上のピンク留めバーから書くと集まります💗`:`「${Ne||""}」が行頭に付いた行はまだありません。
日記の入力欄でマークを押して書くと集まります💗`}):(wt.byMark[Ne]||[]).map((x,k)=>u.jsxs("button",{className:"mv-row",onClick:()=>Ji(x.dateKey),children:[u.jsx("span",{className:"mv-date",children:fe(x.dateKey).slice(5)}),u.jsx("span",{className:"mv-text",children:x.text})]},k))})]}),Z&&u.jsx(Fm,{habits:v,habitAch:S,onToggle:In,onClose:()=>te(!1),onManage:()=>U(!0)}),B&&u.jsx("div",{className:"overlay habit-over",onClick:$n,children:u.jsxs("div",{className:"panel",onClick:x=>x.stopPropagation(),children:[u.jsx("h3",{children:"🎯 習慣"}),u.jsx("p",{className:"panel-note",children:"毎日くり返すこと。日記の「できたこと」からワンタップで記録できます。"}),v.map((x,k)=>u.jsxs("div",{className:"mem-row",style:{flexWrap:"wrap"},children:[u.jsx("input",{className:"f-input",style:{width:54,textAlign:"center",flex:"0 0 auto"},maxLength:4,placeholder:"🩷",value:x.emoji||"",onChange:N=>mn(x.id,{emoji:N.target.value})}),u.jsx("input",{className:"f-input",style:{flex:1,minWidth:0},placeholder:"習慣の名前",value:x.name,onChange:N=>mn(x.id,{name:N.target.value})}),u.jsx("button",{className:"mem-btn",disabled:k===0,onClick:()=>go(k,-1),"aria-label":"上へ",children:"↑"}),u.jsx("button",{className:"mem-btn",disabled:k===v.length-1,onClick:()=>go(k,1),"aria-label":"下へ",children:"↓"}),u.jsx("button",{className:"mem-btn",onClick:()=>Yi(x.id),"aria-label":"削除",children:"🗑"}),u.jsxs("div",{className:"seg",style:{flexBasis:"100%",marginTop:4},children:[u.jsx("button",{className:x.freq!=="weekly"?"on":"",onClick:()=>mo(x.id,"daily"),children:"毎日"}),u.jsx("button",{className:x.freq==="weekly"?"on":"",onClick:()=>mo(x.id,"weekly"),children:"毎週"})]}),x.freq==="weekly"&&u.jsx("div",{className:"dow-row",children:Bm.map(N=>u.jsx("button",{className:"dow-chip"+((x.days||[]).includes(N)?" on":""),onClick:()=>Qi(x.id,N),children:Bu[N]},N))})]},x.id)),v.length===0&&u.jsx("p",{className:"panel-note",children:"まだ習慣がありません。追加してね💗"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:Vi,children:"＋ 習慣を追加"}),u.jsx("button",{className:"p-close",onClick:$n,children:"閉じる"})]})]})}),et&&u.jsx("div",{className:"overlay",onClick:()=>ut(!1),children:u.jsxs("div",{className:"panel",onClick:x=>x.stopPropagation(),children:[u.jsx("h3",{children:"📤 日記をテキストで書き出し"}),u.jsx("textarea",{ref:Mn,readOnly:!0,value:An()}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:yr,children:Et?"コピーしたよ💗":"ぜんぶコピー"}),u.jsx("button",{className:"p-dl",onClick:Xi,children:".txtでDL"}),u.jsx("button",{className:"p-close",onClick:()=>ut(!1),children:"閉じる"})]})]})}),cn&&u.jsx("div",{className:"overlay",onClick:()=>tt(!1),children:u.jsxs("div",{className:"panel",onClick:x=>x.stopPropagation(),children:[u.jsx("h3",{children:"📥 テキストから復元"}),u.jsx("textarea",{placeholder:`エクスポートした .txt の内容をここに貼り付けてね

🩷2026/07/17🩷 9:30
今日あったこと…`,value:ct,onChange:x=>O(x.target.value)}),u.jsx("p",{className:"panel-note",children:"※ すでにある日付の日記は上書きせずスキップされます"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",disabled:!ct.trim(),onClick:Fn,children:"読み込む"}),u.jsx("button",{className:"p-close",onClick:()=>{tt(!1),O("")},children:"閉じる"})]})]})})]})}function Km({items:e,keyOf:t,onReorder:n,renderItem:r,onLongPress:o,longPress:i=320,footer:l}){const[s,a]=z.useState(null),[c,m]=z.useState(null),g=z.useRef(null),d=z.useRef({});d.current.items=e,d.current.keyOf=t,d.current.onReorder=n,d.current.onLongPress=o;const v=s||e,b=w=>{var j;return(j=g.current)==null?void 0:j.querySelector(`[data-dk="${CSS.escape(String(w))}"]`)},S=()=>{const w=g.current;if(!w||d.current.dragKey==null)return;const j=b(d.current.dragKey);if(!j)return;const D=w.getBoundingClientRect(),L=D.left+j.offsetLeft,T=D.top+j.offsetTop,F=d.current.pointerX-d.current.grabX-L,M=d.current.pointerY-d.current.grabY-T;j.style.transform=`translate(${F}px, ${M}px) scale(1.08)`},P=w=>{const j=b(w);if(!j)return;const D=j.getBoundingClientRect();d.current.dragKey=w,d.current.grabX=d.current.pointerX-D.left,d.current.grabY=d.current.pointerY-D.top,d.current.pickupX=d.current.pointerX,d.current.pickupY=d.current.pointerY,d.current.moved=!1,d.current.order=d.current.items.slice(),j.style.zIndex="10",a(d.current.order),m(w);try{navigator.vibrate&&navigator.vibrate(12)}catch{}requestAnimationFrame(S)},h=()=>{const w=g.current;if(!w||d.current.dragKey==null)return;const j=[...w.querySelectorAll("[data-dk]")];let D=0,L=1/0;for(let M=0;M<j.length;M++){const W=j[M].getBoundingClientRect(),de=W.left+W.width/2,et=W.top+W.height/2,ut=(d.current.pointerX-de)**2+(d.current.pointerY-et)**2;ut<L&&(L=ut,D=M)}const T=d.current.order,F=T.findIndex(M=>d.current.keyOf(M)===d.current.dragKey);if(F!==-1&&F!==D){const[M]=T.splice(F,1);T.splice(D,0,M),a(T.slice())}requestAnimationFrame(S)},f=()=>{if(clearTimeout(d.current.timer),d.current.dragKey!=null){const w=b(d.current.dragKey);if(w&&(w.style.transform="",w.style.zIndex=""),d.current.moved)d.current.onReorder(d.current.order.slice());else if(d.current.onLongPress){const j=d.current.items.find(D=>d.current.keyOf(D)===d.current.dragKey);d.current.onLongPress({item:j,x:d.current.pointerX,y:d.current.pointerY})}d.current.suppress=Date.now()+450}d.current.dragKey=null,m(null),a(null)};z.useEffect(()=>{const w=g.current;if(!w)return;const j=F=>{if(F.touches.length!==1)return;const M=F.target.closest("[data-dk]");if(!M||!w.contains(M))return;const W=F.touches[0];d.current.startX=W.clientX,d.current.startY=W.clientY,d.current.pointerX=W.clientX,d.current.pointerY=W.clientY,d.current.moved=!1;const de=M.getAttribute("data-dk");clearTimeout(d.current.timer),d.current.timer=setTimeout(()=>{d.current.moved||P(de)},i)},D=F=>{const M=F.touches[0];if(d.current.pointerX=M.clientX,d.current.pointerY=M.clientY,d.current.dragKey==null){(Math.abs(M.clientX-d.current.startX)>12||Math.abs(M.clientY-d.current.startY)>12)&&(d.current.moved=!0,clearTimeout(d.current.timer));return}(Math.abs(M.clientX-d.current.pickupX)>8||Math.abs(M.clientY-d.current.pickupY)>8)&&(d.current.moved=!0),F.preventDefault(),h()},L=()=>{clearTimeout(d.current.timer),d.current.dragKey!=null&&f()},T=F=>F.preventDefault();return w.addEventListener("touchstart",j,{passive:!0}),w.addEventListener("touchmove",D,{passive:!1}),w.addEventListener("touchend",L,{passive:!0}),w.addEventListener("touchcancel",L,{passive:!0}),w.addEventListener("contextmenu",T),()=>{w.removeEventListener("touchstart",j),w.removeEventListener("touchmove",D),w.removeEventListener("touchend",L),w.removeEventListener("touchcancel",L),w.removeEventListener("contextmenu",T)}},[i]);const p=w=>{d.current.suppress&&Date.now()<d.current.suppress&&(w.stopPropagation(),w.preventDefault(),d.current.suppress=0)};return u.jsxs("div",{ref:g,className:"ig-grid",onClickCapture:p,children:[v.map(w=>{const j=t(w);return u.jsx("div",{"data-dk":j,className:"ig-cell"+(c===j?" dragging":""),children:r(w)},j)}),l]})}function Hm({onBack:e,children:t}){const[n,r]=z.useState(0),[o,i]=z.useState(!1),l=z.useRef(null),s=z.useRef(!1),a=d=>{if(d.touches.length!==1||document.querySelector(".overlay"))return;const v=d.touches[0];v.clientX>28||(l.current={x:v.clientX,y:v.clientY},s.current=!1)},c=d=>{if(!l.current)return;const v=d.touches[0],b=v.clientX-l.current.x,S=v.clientY-l.current.y;if(!s.current){if(Math.abs(b)<8&&Math.abs(S)<8)return;if(Math.abs(S)>Math.abs(b)){l.current=null;return}s.current=!0,i(!1)}r(Math.max(0,b))},m=()=>{if(!l.current)return;const d=Math.min(110,window.innerWidth*.3);i(!0),s.current&&n>d?(r(window.innerWidth),setTimeout(e,190)):r(0),l.current=null,s.current=!1},g=n>0?{transform:`translateX(${n}px)`,transition:o?"transform .19s ease-out":"none",boxShadow:"-10px 0 26px rgba(120,50,90,.18)"}:void 0;return u.jsx("div",{className:"swipe-wrap",style:g,onTouchStart:a,onTouchMove:c,onTouchEnd:m,children:t})}const Wm=z.lazy(()=>po(()=>import("./TalkRoom-Bio4rGfb.js"),[],import.meta.url)),Vm=z.lazy(()=>po(()=>import("./TodoRoom-DwRs6sWp.js"),[],import.meta.url)),Qm=z.lazy(()=>po(()=>import("./DarelogRoom-yiPnpc1K.js"),__vite__mapDeps([0,1]),import.meta.url)),Ym=z.lazy(()=>po(()=>import("./ExpenseRoom-BdzfDgFR.js"),[],import.meta.url)),Xm=["💗","🩷","💛","🩵","💜","🤍","🖤","🌸","🌷","🎀","🌟","✨","⭐️","👑","🫶","🐰","🐻","🐱","🦄","🌙","🌊","🌿","🍓","🍒","🧸","📖","💬","✅","🌗","💰"];function Gm(){const[e,t]=z.useState(null),[n,r]=z.useState({screen:"home"}),[o,i]=z.useState(!1),[l,s]=z.useState(""),[a,c]=z.useState(null),[m,g]=z.useState(null),[d,v]=z.useState(!1),[b,S]=z.useState(null),[P,h]=z.useState(""),[f,p]=z.useState(null),[w,j]=z.useState(""),[D,L]=z.useState(0),[T,F]=z.useState(null),M=z.useRef(null),W=z.useRef(0),[de,et]=z.useState(pm),[ut,cn]=z.useState(!1),[tt,ct]=z.useState(""),[O,B]=z.useState(!1),[U,Z]=z.useState(""),[te,ue]=z.useState(""),[J,Ne]=z.useState(null),[we,Et]=z.useState(!1),[nt,dn]=z.useState(null),[Ui,Ae]=z.useState(!1),[Bt,Mn]=z.useState(""),Ut=z.useRef(null),q=(y,C=3e3)=>{Mn(y),clearTimeout(Ut.current),Ut.current=setTimeout(()=>Mn(""),C)};z.useEffect(()=>{(async()=>{try{const y=await mm();y.some(x=>x.id===ke)&&r({screen:"room",roomId:ke}),t(y);const[C,R,I]=await Promise.all([Q(Xo),Q(lo),Q(Dl)]);C&&C.dateKey===Ye()&&h(C.text),Array.isArray(R)&&R.length&&et(R),Ne(I||{})}catch{q("データの読み込みに失敗しました"),t([])}})()},[]),z.useEffect(()=>{if(n.screen!=="home")return;let y=!0;return(async()=>{try{let C=await Q(Oe(ke));C=typeof C=="string"?JSON.parse(C):C||{};const R=C[Ye()];if(!y)return;R&&typeof R.text=="string"&&R.text.trim()?F({written:!0,preview:R.text.split(`
`)[0].slice(0,34)}):F({written:!1})}catch{y&&F({written:!1})}})(),()=>{y=!1}},[n.screen,D]),z.useEffect(()=>{n.screen==="home"&&M.current&&(M.current.scrollTop=W.current)},[n.screen]);const fn=y=>{t(C=>{let R=C;return C.find(I=>I.id===ke)||(R=[...C,{id:ke,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),R=R.map(I=>I.id===ke?{...I,...y!=null?{preview:y}:{},lastAt:Date.now()}:I),X(Mt,R),R}),L(C=>C+1)},Ki=async({text:y,time:C,dateKey:R})=>{try{const I=Nn(ke),x=await Q(I)||{},k=(x[R]||[]).slice();k.some(N=>N.text===y&&N.time===C)||k.push({text:y,time:C}),await X(I,{...x,[R]:k}),fn(`🩷 できたこと ☑ ${y}`.slice(0,40))}catch{q("できたことの記録に失敗しました")}},Hi=async({text:y,time:C,dateKey:R})=>{try{const I=Nn(ke),x=await Q(I)||{},k=(x[R]||[]).filter(_=>!(_.text===y&&_.time===C)),N={...x};k.length?N[R]=k:delete N[R],await X(I,N),fn(null)}catch{}},xr=y=>{t(y),X(Mt,y).catch(()=>q("保存に失敗しました"))},vt=(y,C)=>{t(R=>{const I=R.map(x=>x.id===y?{...x,...C}:x);return X(Mt,I).catch(()=>q("保存に失敗しました")),I})},Wi=async y=>{const C=y.trim();if(!C)return;const R=Ye();try{await X(Xo,{dateKey:R,text:C}),h(C);const I=Oe(ke);let x=await Q(I);x=x&&typeof x=="object"?x:{};const k=x[R],N=_m(k?k.text:"",C);x={...x,[R]:{text:N,time:k?k.time:hf()}},await X(I,x);const _=Object.keys(x).sort(),A=_[_.length-1],V=x[A].text.split(`
`)[0].slice(0,40);t(ne=>{let Ce=ne;return ne.find(Fe=>Fe.id===ke)||(Ce=[...ne,{id:ke,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),Ce=Ce.map(Fe=>Fe.id===ke?{...Fe,preview:V,lastAt:Date.now()}:Fe),X(Mt,Ce),Ce}),L(ne=>ne+1),q("今日のコマをピン留めしたよ🩷")}catch{q("宣言の保存に失敗しました")}},ho=y=>{et(y),X(lo,y).catch(()=>q("マークの保存に失敗しました"))},On=()=>{const y=tt.trim();if(y){if(de.includes(y)){ct("");return}ho([...de,y]),ct("")}},pn=y=>ho(de.filter(C=>C!==y));z.useEffect(()=>{!o||!e||(async()=>{const y={};for(const C of e)y[C.id]=await Q(Oe(C.id));c(y)})()},[o,e]);const Rn=e||[],In=z.useMemo(()=>{if(!l||!a||!e)return null;const y=l.toLowerCase(),C=[];for(const R of Rn){const I=a[R.id],x=[];if(R.type==="diary"){const k=I&&typeof I=="object"?I:{};for(const N of Object.keys(k).sort())(k[N].text+fe(N)).toLowerCase().includes(y)&&x.push({snippet:k[N].text.split(`
`)[0],date:fe(N)})}else if(R.type==="todo"){const k=I&&Array.isArray(I.todos)?I.todos:[];for(const N of k)(N.text+fe(N.dateKey)).toLowerCase().includes(y)&&x.push({snippet:`${N.done?"☑":"☐"} ${N.text.split(`
`)[0]}`,date:fe(N.dateKey)})}else if(R.type==="darelog"){const k=I&&Array.isArray(I.records)?I.records:[],N=_=>{var A,V;return((V=(A=R.members)==null?void 0:A.find(ne=>ne.id===_))==null?void 0:V.name)||""};for(const _ of k){const A=N(_.memberId);(A+(_.memo||"")+fe(_.dateKey)).toLowerCase().includes(y)&&x.push({snippet:`${A}${_.memo?`: ${_.memo}`:""}`,date:fe(_.dateKey)})}}else if(R.type==="expense"){const k=I&&Array.isArray(I.expenses)?I.expenses:[],N=_=>{var A,V;return((V=(A=R.categories)==null?void 0:A.find(ne=>ne.id===_))==null?void 0:V.name)||""};for(const _ of k)(N(_.categoryId)+(_.memo||"")+String(_.amount)+fe(_.dateKey)).toLowerCase().includes(y)&&x.push({snippet:`${N(_.categoryId)} ¥${_.amount}${_.memo?" "+_.memo:""}`,date:fe(_.dateKey)})}else{const k=I&&Array.isArray(I.messages)?I.messages:[],N=_=>{var A,V;return((V=(A=R.members)==null?void 0:A.find(ne=>ne.id===_))==null?void 0:V.name)||""};for(const _ of k)((_.text+fe(_.dateKey)).toLowerCase().includes(y)||N(_.memberId).toLowerCase().includes(y))&&x.push({snippet:`${N(_.memberId)||"？"}: ${_.text.split(`
`)[0]}`,date:fe(_.dateKey)})}x.length===0&&R.name.toLowerCase().includes(y)&&x.push({snippet:R.preview||"",date:""}),x.length&&C.push({room:R,hits:x})}return C},[l,a,Rn,e]),hn=y=>l?y.split(new RegExp(`(${mf(l)})`,"gi")).map((R,I)=>R.toLowerCase()===l.toLowerCase()?u.jsx("mark",{className:"hl",children:R},I):R):y,Vi=()=>{const y=m.name.trim();if(!y){q("ルーム名を入れてね");return}const C={diary:"💗",todo:"✅",darelog:"🌗",expense:"💰",talk:"🩷"}[m.type]||"🩷",R=m.type==="darelog"?[{id:Pe(),name:"ヒカルくん",color:"#d4f0ff",icon:{type:"emoji",value:"🌊"},side:"left"},{id:Pe(),name:"柊くん",color:"#d9ffe3",icon:{type:"emoji",value:"🌿"},side:"left"},{id:Pe(),name:"ひかりちゃん",color:"#ffd9ec",icon:{type:"emoji",value:"🌸"},side:"right"}]:[],I=m.type==="expense"?[{id:Pe(),name:"AI費用",emoji:"🤖",color:"#2196F3"},{id:Pe(),name:"ピンクグッズ",emoji:"🎀",color:"#E91E63"},{id:Pe(),name:"ネイル",emoji:"💅",color:"#9C27B0"},{id:Pe(),name:"旅費交通費",emoji:"🚃",color:"#00A5B5",transit:!0}]:void 0,x={id:Pe(),type:m.type,name:y,emoji:m.emoji.trim()||C,theme:m.theme||Pr,members:R,createdAt:Date.now(),lastAt:0,preview:"",...m.type==="todo"?{shopping:!!m.shopping}:{},...I?{categories:I,subscriptions:[],subsPosted:{},transitSeeded:!0,stations:[],fares:[],defaultFromId:null,roundTripDefault:!1,incomeSeeded:!0,incomeCategories:[{id:Pe(),name:"売上",emoji:"💰",color:"#2E9E5B"},{id:Pe(),name:"返金",emoji:"↩️",color:"#3BA7A0"},{id:Pe(),name:"その他",emoji:"✨",color:"#7FB800"}]}:{}};xr([...e,x]),g(null),r({screen:"room",roomId:x.id})},mn=()=>{const y=m.name.trim();if(!y){q("ルーム名を入れてね");return}vt(m.roomId,{name:y,emoji:m.emoji.trim()||"💗",theme:m.theme||Pr,...m.type==="todo"?{shopping:!!m.shopping}:{}}),g(null)},mo=y=>{g({mode:"edit",roomId:y.id,name:y.name,emoji:y.emoji,type:y.type,shopping:!!y.shopping,theme:y.theme||Pr}),v(!1)},Qi=async y=>{try{const C=await Q(Oe(y));C&&await X(fm(y),C),xr(e.filter(R=>R.id!==y)),g(null),S(null),q("ルームを削除しました")}catch{q("削除に失敗しました")}},go=()=>{const y=e.find(C=>C.id===m.roomId);S({message:`ルーム「${(y==null?void 0:y.name)||""}」を削除しますか？
中の記録もすべて消えます。`,onConfirm:()=>Qi(m.roomId)})},Yi=async()=>{ue(""),Ae(!1);try{const y=await Hu();Z(JSON.stringify(y,null,2))}catch{Z("")}B(!0)},$n=async()=>{const y={...J||{},lastDateKey:Ye(),lastAt:Date.now()};Ne(y);try{await X(Dl,y)}catch{}},An=y=>{const C=new Blob([y],{type:"application/json;charset=utf-8"}),R=URL.createObjectURL(C),I=document.createElement("a");I.href=R,I.download=Ro,document.body.appendChild(I),I.click(),I.remove(),setTimeout(()=>URL.revokeObjectURL(R),3e3)},yr=async()=>{if(!we){Et(!0);try{let y;try{y=JSON.stringify(await Hu(),null,2)}catch{q("バックアップの作成に失敗しました 🥺");return}try{const C=new File([y],Ro,{type:"application/json"});if(navigator.canShare&&navigator.canShare({files:[C]})){await navigator.share({files:[C],title:Ro}),await $n(),q("バックアップを保存したよ💗 同じファイルに置き換えできたかな？");return}}catch(C){if(C&&(C.name==="AbortError"||C.name==="NotAllowedError"))return}try{An(y),await $n(),q("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{q("保存できない環境みたい。コピーを使ってね")}}finally{Et(!1)}}},Xi=()=>{try{An(U),$n(),q("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{q("保存できない環境みたい。コピーを使ってね")}},Fn=Ye(),zt=(()=>{if(!(J!=null&&J.lastDateKey))return null;const y=Ke(Fn)-Ke(J.lastDateKey);return Math.max(0,Math.round(y/864e5))})(),wt=zt===null||zt>=7,vr=!!J&&J.lastDateKey!==Fn&&J.dismissedDateKey!==Fn,Gi=async()=>{const y={...J||{},dismissedDateKey:Fn};Ne(y);try{await X(Dl,y)}catch{}},Ji=async()=>{try{await navigator.clipboard.writeText(U),Ae(!0),setTimeout(()=>Ae(!1),2e3)}catch{q("コピーできませんでした。全選択して手動でコピーしてね")}},Zi=y=>{var I;const C=(I=y.target.files)==null?void 0:I[0];if(!C)return;const R=new FileReader;R.onload=()=>ue(String(R.result||"")),R.onerror=()=>q("ファイルを読めませんでした"),R.readAsText(C),y.target.value=""},qi=()=>{let y;try{y=JSON.parse(te)}catch{q("JSONとして読めませんでした。ファイルが壊れているかも 🥺",4e3);return}const C=Tm(y);if(C){q(C,4500);return}dn({obj:y,counts:Lm(y),exportedAt:y.exportedAt||"",version:y.version})},el=async()=>{const y=nt==null?void 0:nt.obj;if(y)try{const C=await Mm(y);t(C.rooms),y.declaration&&y.declaration.dateKey===Ye()&&!P&&(await X(Xo,y.declaration),h(y.declaration.text)),L(R=>R+1),dn(null),B(!1),ue(""),q(`復元完了💗 ${C.addedRooms}ルーム / ${C.addedItems}件を追加`)}catch{dn(null),q("復元中にエラーが出ました。ファイルが壊れているかも 🥺",4e3)}};if(!e)return u.jsx("div",{className:"app",children:u.jsx("style",{children:Vu})});const xo=u.jsxs("div",{className:"pin",onClick:()=>{j(P),p(P?"view":"edit")},role:"button",children:[u.jsx("span",{className:"pin-ic",children:P?"📌":"🩷"}),P?u.jsx("span",{className:"pin-txt",children:P}):u.jsx("span",{className:"pin-ph",children:"今日のコマをえらぶ🩷"})]});let kt;if(n.screen==="room"){const y=e.find(C=>C.id===n.roomId);if(!y)kt=null,setTimeout(()=>r({screen:"home"}),0);else{const C={room:y,onBack:()=>r({screen:"home"}),onMeta:I=>vt(y.id,I),initialQuery:n.q,showToast:q,pinned:xo},R=y.type==="diary"?u.jsx(Um,{...C,syncSignal:D,marks:de,onEditMarks:()=>cn(!0)},y.id):y.type==="todo"?u.jsx(Vm,{...C,onTodoComplete:Ki,onTodoUncomplete:Hi,onRoomChange:I=>vt(y.id,I)},y.id):y.type==="darelog"?u.jsx(Qm,{...C,onRoomChange:I=>vt(y.id,I)},y.id):y.type==="expense"?u.jsx(Ym,{...C,onRoomChange:I=>vt(y.id,I)},y.id):u.jsx(Wm,{...C,onRoomChange:I=>vt(y.id,I)},y.id);kt=u.jsx(Hm,{onBack:()=>r({screen:"home"}),children:u.jsx(z.Suspense,{fallback:u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"hd hd-loading"}),u.jsx("div",{className:"chat"})]}),children:R})},y.id)}}else kt=u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"hd hd-home",children:[u.jsx("div",{className:"app-brand",children:u.jsx("div",{className:"app-title",children:"💖Nachumin Lifelog💖"})}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"バックアップ",onClick:Yi,children:"💾"}),u.jsx("button",{className:"icon-btn","aria-label":"新しいルーム",onClick:()=>g({mode:"new",name:"",emoji:"",type:"talk"}),children:"➕"}),u.jsx("button",{className:"icon-btn","aria-label":"ぜんぶ検索",onClick:()=>{i(!o),s("")},children:o?"✕":"🔍"})]}),vr&&u.jsxs("div",{className:"bk-banner"+(wt?" stale":""),children:[u.jsxs("button",{className:"bk-main",onClick:yr,disabled:we,children:[u.jsx("span",{className:"bk-ttl",children:"💾 今日のバックアップ🩷"}),u.jsx("span",{className:"bk-sub",children:zt===null?"まだ一度も保存していません":wt?`最後の保存から ${zt}日 たっています`:"タップで1ファイルに書き出し"})]}),u.jsx("button",{className:"bk-x","aria-label":"閉じる",onClick:Gi,children:"✕"})]}),o&&u.jsx("div",{className:"search-row",children:u.jsx("input",{autoFocus:!0,placeholder:"ぜんぶのルームから検索（ことば・話者・日付）",value:l,onChange:y=>s(y.target.value)})}),In?u.jsx("div",{className:"rooms",children:In.length===0?u.jsx("div",{className:"empty",children:"みつかりませんでした 🥺"}):In.map(({room:y,hits:C})=>u.jsxs("div",{className:"room-row",onClick:()=>r({screen:"room",roomId:y.id,q:l}),children:[u.jsx("div",{className:"r-ic",children:y.emoji}),u.jsxs("div",{className:"r-main",children:[u.jsx("div",{className:"r-name",children:y.name}),u.jsx("div",{className:"r-prev",children:hn(C[0].snippet)})]}),u.jsxs("div",{className:"r-side",children:[u.jsxs("span",{className:"r-badge",children:[C.length,"件"]}),C[0].date&&u.jsx("span",{className:"r-date",children:C[0].date})]})]},y.id))}):u.jsx("div",{className:"home-scroll",ref:M,onScroll:y=>{W.current=y.target.scrollTop},children:(()=>{const y=e.find(k=>k.id===ke),C=Rn.filter(k=>k.id!==ke),R=Ke(Ye()),I=T?T.written?T.preview:`${R.getMonth()+1}/${R.getDate()}・きょうの分はまだ`:"…",x=k=>{const N=[...k];xr(e.map(_=>_.id===ke?_:N.shift()))};return u.jsxs(u.Fragment,{children:[y&&u.jsxs("button",{className:"diary-card",onClick:()=>r({screen:"room",roomId:y.id}),children:[u.jsx("span",{className:"dc-ic",children:y.emoji}),u.jsxs("span",{className:"dc-main",children:[u.jsx("span",{className:"dc-name",children:"DIARY"}),u.jsx("span",{className:"dc-sub",children:I})]}),u.jsx("span",{className:"dc-arw",children:"›"})]}),u.jsx(Km,{items:C,keyOf:k=>k.id,onReorder:x,onLongPress:({item:k})=>{k&&mo(k)},footer:u.jsx("div",{className:"ig-cell ig-add",children:u.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>g({mode:"new",name:"",emoji:"",type:"talk"}),onKeyDown:k=>k.key==="Enter"&&g({mode:"new",name:"",emoji:"",type:"talk"}),children:[u.jsx("span",{className:"ig-btn",children:"＋"}),u.jsx("span",{className:"ig-name",children:"つくる"})]})}),renderItem:k=>{const N=k.type==="todo"&&k.todoOpen>0?k.todoOpen:null;return u.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>r({screen:"room",roomId:k.id}),onKeyDown:_=>_.key==="Enter"&&r({screen:"room",roomId:k.id}),children:[u.jsxs("span",{className:"ig-btn",style:Wu(k.theme),children:[k.emoji,N!=null&&u.jsx("span",{className:"ig-badge",children:N>99?"99+":N})]}),u.jsx("span",{className:"ig-name",children:k.name})]})}})]})})()})]});return u.jsxs("div",{className:"app",children:[u.jsx("style",{children:Vu}),kt,m&&u.jsx("div",{className:"overlay",onClick:()=>{g(null),v(!1)},children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:m.mode==="new"?"➕ 新しいルーム":"⚙️ ルーム設定"}),u.jsx("div",{className:"f-label",children:"ルーム名"}),u.jsx("input",{className:"f-input",autoFocus:m.mode==="new",placeholder:"ハートるんず",value:m.name,onChange:y=>g(C=>({...C,name:y.target.value}))}),u.jsx("div",{className:"f-label",children:"アイコン（タップで選ぶ）"}),u.jsx("div",{className:"emoji-picks",children:Xm.map(y=>u.jsx("button",{className:"emoji-pick"+(m.emoji===y?" on":""),onClick:()=>g(C=>({...C,emoji:y})),children:y},y))}),u.jsx("input",{className:"f-input",style:{width:130,textAlign:"center",marginTop:4},maxLength:8,placeholder:"または自由入力",value:m.emoji,onChange:y=>g(C=>({...C,emoji:y.target.value}))}),u.jsx("div",{className:"f-label",children:"テーマカラー"}),u.jsx("div",{className:"theme-swatches",children:xf.map(y=>{const C=(m.theme||Pr)===y;return u.jsx("button",{className:"theme-sw"+(C?" on":""),style:Wu(y),"aria-label":y,onClick:()=>g(R=>({...R,theme:y}))},y)})}),u.jsxs("div",{className:"f-label",children:["タイプ",m.mode==="edit"?"（変更できません）":""]}),u.jsxs("div",{className:"type-row",children:[u.jsxs("button",{className:"type-chip"+(m.type==="diary"?" on":""),disabled:m.mode==="edit",onClick:()=>g(y=>({...y,type:"diary"})),children:["📖 日記",u.jsx("small",{children:"1日=1吹き出し"})]}),u.jsxs("button",{className:"type-chip"+(m.type==="talk"?" on":""),disabled:m.mode==="edit",onClick:()=>g(y=>({...y,type:"talk"})),children:["💬 トーク",u.jsx("small",{children:"話者ごと"})]}),u.jsxs("button",{className:"type-chip"+(m.type==="todo"?" on":""),disabled:m.mode==="edit",onClick:()=>g(y=>({...y,type:"todo"})),children:["✅ TODO",u.jsx("small",{children:"やること"})]}),u.jsxs("button",{className:"type-chip"+(m.type==="darelog"?" on":""),disabled:m.mode==="edit",onClick:()=>g(y=>({...y,type:"darelog"})),children:["🌗 だれログ",u.jsx("small",{children:"朝昼夜の記録"})]}),u.jsxs("button",{className:"type-chip"+(m.type==="expense"?" on":""),disabled:m.mode==="edit",onClick:()=>g(y=>({...y,type:"expense"})),children:["💰 経費",u.jsx("small",{children:"支出を記録"})]})]}),m.type==="todo"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"f-label",children:"用途"}),u.jsxs("button",{className:"shop-toggle"+(m.shopping?" on":""),onClick:()=>g(y=>({...y,shopping:!y.shopping})),children:[u.jsx("span",{className:"shop-box",children:m.shopping?"✓":""}),"🛒 買い物リストとして使う（よく買うものクイック追加）"]})]}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:m.mode==="new"?Vi:mn,children:m.mode==="new"?"つくる":"保存"}),m.mode==="edit"&&u.jsx("button",{className:"p-del",onClick:go,children:"削除"}),u.jsx("button",{className:"p-close",onClick:()=>{g(null),v(!1)},children:"閉じる"})]})]})}),O&&u.jsx("div",{className:"overlay",onClick:()=>B(!1),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"💾 まるごとバックアップ"}),u.jsx("p",{className:"panel-note",children:"全ルーム・全データ（日記 / TODO / だれログ / 経費 / 習慣 / 各種設定）を まるごと1ファイルに保存します。端末が変わっても元どおり復元できます。"}),u.jsxs("div",{className:"bk-last"+(wt?" stale":""),children:[u.jsx("span",{className:"bk-last-l",children:"最後にバックアップした日"}),u.jsx("span",{className:"bk-last-v",children:J!=null&&J.lastDateKey?`${fe(J.lastDateKey)}${zt===0?"（今日）":`（${zt}日前）`}`:"まだありません"})]}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:yr,disabled:we,children:"💾 1タップで書き出し"}),u.jsx("button",{className:"p-dl",onClick:Xi,children:"ダウンロード"}),u.jsx("button",{className:"p-dl",onClick:Ji,children:Ui?"コピーしたよ💗":"コピー"})]}),u.jsxs("p",{className:"panel-note",children:["ファイル名は毎回 ",u.jsx("b",{children:Ro})," で固定。iPhoneの共有シートから 「ファイルに保存」を選ぶと、前のファイルを置き換えて上書きできます。"]}),u.jsx("div",{className:"f-label",style:{marginTop:6},children:"復元する（バックアップから読み込み）"}),u.jsx("p",{className:"panel-note",children:"既存のデータは消さず、足りない分だけ追加します（安全マージ）"}),u.jsxs("label",{className:"upload-btn",style:{alignSelf:"flex-start"},children:["📂 バックアップファイルを選ぶ",u.jsx("input",{type:"file",accept:".json,application/json,text/plain",onChange:Zi})]}),u.jsx("textarea",{placeholder:"または、コピーしたバックアップをここに貼り付け",value:te,onChange:y=>ue(y.target.value),style:{minHeight:120}}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",disabled:!te.trim(),onClick:qi,children:"復元する"}),u.jsx("button",{className:"p-close",onClick:()=>{B(!1),ue("")},children:"閉じる"})]})]})}),nt&&u.jsx("div",{className:"overlay bk-ask-over",onClick:()=>dn(null),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"⚠️ 復元まえの確認"}),u.jsxs("div",{className:"bk-ask-box",children:[u.jsxs("div",{className:"bk-ask-row",children:[u.jsx("span",{children:"ルーム"}),u.jsx("b",{children:nt.counts.rooms})]}),u.jsxs("div",{className:"bk-ask-row",children:[u.jsx("span",{children:"記録の件数"}),u.jsx("b",{children:nt.counts.items})]}),nt.exportedAt&&u.jsxs("div",{className:"bk-ask-row",children:[u.jsx("span",{children:"書き出し日時"}),u.jsx("b",{children:new Date(nt.exportedAt).toLocaleString("ja-JP")})]})]}),u.jsxs("p",{className:"panel-note",children:["今のデータは消えません（足りない分を追加する安全マージ）。 それでも念のため、",u.jsx("b",{children:"先に今のデータをバックアップ"}),"しておくのがおすすめです💗"]}),u.jsx("button",{className:"bk-first",onClick:yr,disabled:we,children:"💾 先に今のデータをバックアップする"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:el,children:"この内容で復元する"}),u.jsx("button",{className:"p-close",onClick:()=>dn(null),children:"キャンセル"})]})]})}),f&&u.jsx("div",{className:"overlay",onClick:()=>p(null),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"🩷 今日のコマ"}),f==="view"?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"decl-full",children:P}),u.jsx("p",{className:"panel-note",children:"その日1日だけピン留め。日記にも記録されています🎬"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:()=>{j(P),p("edit")},children:"書きなおす"}),u.jsx("button",{className:"p-close",onClick:()=>p(null),children:"閉じる"})]})]}):u.jsxs(u.Fragment,{children:[u.jsx("textarea",{autoFocus:!0,style:{minHeight:120},placeholder:"今日は愛全開の私でいる！",value:w,onChange:y=>j(y.target.value)}),u.jsx("p",{className:"panel-note",children:"その日1日だけ表示。決定すると今日の日記の先頭に🎬として残ります"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",disabled:!w.trim(),onClick:()=>{Wi(w),p(null)},children:"決定"}),u.jsx("button",{className:"p-close",onClick:()=>p(null),children:"閉じる"})]})]})]})}),ut&&u.jsx("div",{className:"overlay",onClick:()=>cn(!1),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"⚙︎ 箇条書きマーク"}),u.jsx("p",{className:"panel-note",children:"日記の入力欄に出るマーク。タップで削除、下から追加できます。"}),u.jsxs("div",{className:"mark-manage",children:[de.map(y=>u.jsxs("span",{className:"mark-item",children:[y,u.jsx("button",{onClick:()=>pn(y),"aria-label":"削除",children:"✕"})]},y)),de.length===0&&u.jsx("p",{className:"panel-note",children:"マークがありません。追加してね"})]}),u.jsxs("div",{className:"in-row",style:{marginTop:4},children:[u.jsx("input",{className:"f-input",maxLength:4,placeholder:"記号や絵文字（例: ❤︎）",value:tt,onChange:y=>ct(y.target.value),onKeyDown:y=>y.key==="Enter"&&On()}),u.jsx("button",{className:"p-copy",style:{flex:"0 0 auto",padding:"8px 16px",borderRadius:999},disabled:!tt.trim(),onClick:On,children:"追加"})]}),u.jsx("div",{className:"panel-btns",children:u.jsx("button",{className:"p-close",onClick:()=>cn(!1),children:"閉じる"})})]})}),b&&u.jsx(kf,{message:b.message,onConfirm:b.onConfirm,onCancel:()=>S(null)}),Bt&&u.jsx("div",{className:"toast",children:Bt})]})}let Yu=!1,Xu=!!(navigator.serviceWorker&&navigator.serviceWorker.controller);navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!Xu){Xu=!0;return}Yu||(Yu=!0,window.location.reload())});Gh({immediate:!0,onRegisteredSW(e,t){t&&(t.update(),setInterval(()=>t.update(),60*60*1e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&t.update()}))}});hm();uf(document.getElementById("root")).render(u.jsx(z.StrictMode,{children:u.jsx(Gm,{})}));export{tg as A,Zm as B,Am as C,qm as D,Jm as E,Uu as F,Im as I,cg as M,Qu as P,Cm as S,dg as T,Bu as W,Oe as a,fe as b,Ku as c,Si as d,kf as e,Ye as f,Q as g,ag as h,mf as i,u as j,Ke as k,X as l,fg as m,hf as n,ng as o,sg as p,ig as q,z as r,Sm as s,Rm as t,Pe as u,lg as v,rg as w,og as x,ug as y,eg as z};
