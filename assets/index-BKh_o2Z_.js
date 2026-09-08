const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DarelogRoom-CtpdVk95.js","./TalkRoom-CcCvF0XO.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Lu={exports:{}},rl={},Tu={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),op=Symbol.for("react.portal"),ip=Symbol.for("react.fragment"),lp=Symbol.for("react.strict_mode"),sp=Symbol.for("react.profiler"),ap=Symbol.for("react.provider"),cp=Symbol.for("react.context"),up=Symbol.for("react.forward_ref"),dp=Symbol.for("react.suspense"),fp=Symbol.for("react.memo"),pp=Symbol.for("react.lazy"),lc=Symbol.iterator;function hp(e){return e===null||typeof e!="object"?null:(e=lc&&e[lc]||e["@@iterator"],typeof e=="function"?e:null)}var Pu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mu=Object.assign,Ou={};function Pr(e,t,n){this.props=e,this.context=t,this.refs=Ou,this.updater=n||Pu}Pr.prototype.isReactComponent={};Pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ru(){}Ru.prototype=Pr.prototype;function aa(e,t,n){this.props=e,this.context=t,this.refs=Ou,this.updater=n||Pu}var ca=aa.prototype=new Ru;ca.constructor=aa;Mu(ca,Pr.prototype);ca.isPureReactComponent=!0;var sc=Array.isArray,$u=Object.prototype.hasOwnProperty,ua={current:null},Iu={key:!0,ref:!0,__self:!0,__source:!0};function Au(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)$u.call(t,r)&&!Iu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),m=0;m<a;m++)c[m]=arguments[m+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Po,type:e,key:i,ref:l,props:o,_owner:ua.current}}function mp(e,t){return{$$typeof:Po,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function da(e){return typeof e=="object"&&e!==null&&e.$$typeof===Po}function gp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ac=/\/+/g;function El(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gp(""+e.key):t.toString(36)}function hi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Po:case op:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+El(l,0):r,sc(o)?(n="",e!=null&&(n=e.replace(ac,"$&/")+"/"),hi(o,t,n,"",function(m){return m})):o!=null&&(da(o)&&(o=mp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ac,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",sc(e))for(var a=0;a<e.length;a++){i=e[a];var c=r+El(i,a);l+=hi(i,t,n,c,o)}else if(c=hp(e),typeof c=="function")for(e=c.call(e),a=0;!(i=e.next()).done;)i=i.value,c=r+El(i,a++),l+=hi(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Xo(e,t,n){if(e==null)return e;var r=[],o=0;return hi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function xp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},mi={transition:null},yp={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:mi,ReactCurrentOwner:ua};function Fu(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:Xo,forEach:function(e,t,n){Xo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xo(e,function(){t++}),t},toArray:function(e){return Xo(e,function(t){return t})||[]},only:function(e){if(!da(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Pr;X.Fragment=ip;X.Profiler=sp;X.PureComponent=aa;X.StrictMode=lp;X.Suspense=dp;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yp;X.act=Fu;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ua.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)$u.call(t,c)&&!Iu.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var m=0;m<c;m++)a[m]=arguments[m+2];r.children=a}return{$$typeof:Po,type:e.type,key:o,ref:i,props:r,_owner:l}};X.createContext=function(e){return e={$$typeof:cp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ap,_context:e},e.Consumer=e};X.createElement=Au;X.createFactory=function(e){var t=Au.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:up,render:e}};X.isValidElement=da;X.lazy=function(e){return{$$typeof:pp,_payload:{_status:-1,_result:e},_init:xp}};X.memo=function(e,t){return{$$typeof:fp,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=mi.transition;mi.transition={};try{e()}finally{mi.transition=t}};X.unstable_act=Fu;X.useCallback=function(e,t){return Xe.current.useCallback(e,t)};X.useContext=function(e){return Xe.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};X.useEffect=function(e,t){return Xe.current.useEffect(e,t)};X.useId=function(){return Xe.current.useId()};X.useImperativeHandle=function(e,t,n){return Xe.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Xe.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Xe.current.useReducer(e,t,n)};X.useRef=function(e){return Xe.current.useRef(e)};X.useState=function(e){return Xe.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Xe.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Xe.current.useTransition()};X.version="18.3.1";Tu.exports=X;var E=Tu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp=E,wp=Symbol.for("react.element"),kp=Symbol.for("react.fragment"),bp=Object.prototype.hasOwnProperty,Sp=vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jp={key:!0,ref:!0,__self:!0,__source:!0};function Bu(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)bp.call(t,r)&&!jp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:wp,type:e,key:i,ref:l,props:o,_owner:Sp.current}}rl.Fragment=kp;rl.jsx=Bu;rl.jsxs=Bu;Lu.exports=rl;var s=Lu.exports,Uu={exports:{}},pt={},Hu={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,W){var Y=O.length;O.push(W);e:for(;0<Y;){var ne=Y-1>>>1,ce=O[ne];if(0<o(ce,W))O[ne]=W,O[Y]=ce,Y=ne;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var W=O[0],Y=O.pop();if(Y!==W){O[0]=Y;e:for(var ne=0,ce=O.length,Pe=ce>>>1;ne<Pe;){var Ze=2*(ne+1)-1,ie=O[Ze],ue=Ze+1,He=O[ue];if(0>o(ie,Y))ue<ce&&0>o(He,ie)?(O[ne]=He,O[ue]=Y,ne=ue):(O[ne]=ie,O[Ze]=Y,ne=Ze);else if(ue<ce&&0>o(He,Y))O[ne]=He,O[ue]=Y,ne=ue;else break e}}return W}function o(O,W){var Y=O.sortIndex-W.sortIndex;return Y!==0?Y:O.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var c=[],m=[],f=1,h=null,p=3,w=!1,b=!1,k=!1,L=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(O){for(var W=n(m);W!==null;){if(W.callback===null)r(m);else if(W.startTime<=O)r(m),W.sortIndex=W.expirationTime,t(c,W);else break;W=n(m)}}function v(O){if(k=!1,u(O),!b)if(n(c)!==null)b=!0,mt(S);else{var W=n(m);W!==null&&Je(v,W.startTime-O)}}function S(O,W){b=!1,k&&(k=!1,g(T),T=-1),w=!0;var Y=p;try{for(u(W),h=n(c);h!==null&&(!(h.expirationTime>W)||O&&!G());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,p=h.priorityLevel;var ce=ne(h.expirationTime<=W);W=e.unstable_now(),typeof ce=="function"?h.callback=ce:h===n(c)&&r(c),u(W)}else r(c);h=n(c)}if(h!==null)var Pe=!0;else{var Ze=n(m);Ze!==null&&Je(v,Ze.startTime-W),Pe=!1}return Pe}finally{h=null,p=Y,w=!1}}var z=!1,D=null,T=-1,F=5,I=-1;function G(){return!(e.unstable_now()-I<F)}function ye(){if(D!==null){var O=e.unstable_now();I=O;var W=!0;try{W=D(!0,O)}finally{W?ke():(z=!1,D=null)}}else z=!1}var ke;if(typeof d=="function")ke=function(){d(ye)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,nn=Ne.port2;Ne.port1.onmessage=ye,ke=function(){nn.postMessage(null)}}else ke=function(){L(ye,0)};function mt(O){D=O,z||(z=!0,ke())}function Je(O,W){T=L(function(){O(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){b||w||(b=!0,mt(S))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(p){case 1:case 2:case 3:var W=3;break;default:W=p}var Y=p;p=W;try{return O()}finally{p=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,W){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=p;p=O;try{return W()}finally{p=Y}},e.unstable_scheduleCallback=function(O,W,Y){var ne=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ne+Y:ne):Y=ne,O){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=Y+ce,O={id:f++,callback:W,priorityLevel:O,startTime:Y,expirationTime:ce,sortIndex:-1},Y>ne?(O.sortIndex=Y,t(m,O),n(c)===null&&O===n(m)&&(k?(g(T),T=-1):k=!0,Je(v,Y-ne))):(O.sortIndex=ce,t(c,O),b||w||(b=!0,mt(S))),O},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(O){var W=p;return function(){var Y=p;p=W;try{return O.apply(this,arguments)}finally{p=Y}}}})(Ku);Hu.exports=Ku;var Np=Hu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp=E,ft=Np;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wu=new Set,po={};function er(e,t){Cr(e,t),Cr(e+"Capture",t)}function Cr(e,t){for(po[e]=t,e=0;e<t.length;e++)Wu.add(t[e])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ss=Object.prototype.hasOwnProperty,Ep=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cc={},uc={};function zp(e){return ss.call(uc,e)?!0:ss.call(cc,e)?!1:Ep.test(e)?uc[e]=!0:(cc[e]=!0,!1)}function _p(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dp(e,t,n,r){if(t===null||typeof t>"u"||_p(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var fa=/[\-:]([a-z])/g;function pa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fa,pa);Te[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fa,pa);Te[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fa,pa);Te[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function ha(e,t,n,r){var o=Te.hasOwnProperty(t)?Te[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dp(t,n,o,r)&&(n=null),r||o===null?zp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tn=Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Go=Symbol.for("react.element"),sr=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),ma=Symbol.for("react.strict_mode"),as=Symbol.for("react.profiler"),Vu=Symbol.for("react.provider"),Yu=Symbol.for("react.context"),ga=Symbol.for("react.forward_ref"),cs=Symbol.for("react.suspense"),us=Symbol.for("react.suspense_list"),xa=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Qu=Symbol.for("react.offscreen"),dc=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=dc&&e[dc]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,zl;function Jr(e){if(zl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zl=t&&t[1]||""}return`
`+zl+e}var _l=!1;function Dl(e,t){if(!e||_l)return"";_l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var o=m.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var c=`
`+o[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=a);break}}}finally{_l=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jr(e):""}function Lp(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=Dl(e.type,!1),e;case 11:return e=Dl(e.type.render,!1),e;case 1:return e=Dl(e.type,!0),e;default:return""}}function ds(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ar:return"Fragment";case sr:return"Portal";case as:return"Profiler";case ma:return"StrictMode";case cs:return"Suspense";case us:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yu:return(e.displayName||"Context")+".Consumer";case Vu:return(e._context.displayName||"Context")+".Provider";case ga:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xa:return t=e.displayName||null,t!==null?t:ds(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return ds(e(t))}catch{}}return null}function Tp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ds(t);case 8:return t===ma?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pp(e){var t=Xu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jo(e){e._valueTracker||(e._valueTracker=Pp(e))}function Gu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Xu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fs(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ju(e,t){t=t.checked,t!=null&&ha(e,"checked",t,!1)}function ps(e,t){Ju(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hs(e,t.type,n):t.hasOwnProperty("defaultValue")&&hs(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hs(e,t,n){(t!=="number"||Ei(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zr=Array.isArray;function vr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ms(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Zr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function Zu(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zo,ed=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ho(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mp=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(e){Mp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),no[t]=no[e]})});function td(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||no.hasOwnProperty(e)&&no[e]?(""+t).trim():t+"px"}function nd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=td(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Op=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xs(e,t){if(t){if(Op[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function ys(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vs=null;function ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,wr=null,kr=null;function gc(e){if(e=Ro(e)){if(typeof ws!="function")throw Error(_(280));var t=e.stateNode;t&&(t=al(t),ws(e.stateNode,e.type,t))}}function rd(e){wr?kr?kr.push(e):kr=[e]:wr=e}function od(){if(wr){var e=wr,t=kr;if(kr=wr=null,gc(e),t)for(e=0;e<t.length;e++)gc(t[e])}}function id(e,t){return e(t)}function ld(){}var Ll=!1;function sd(e,t,n){if(Ll)return e(t,n);Ll=!0;try{return id(e,t,n)}finally{Ll=!1,(wr!==null||kr!==null)&&(ld(),od())}}function mo(e,t){var n=e.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ks=!1;if(Jt)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){ks=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{ks=!1}function Rp(e,t,n,r,o,i,l,a,c){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(f){this.onError(f)}}var ro=!1,zi=null,_i=!1,bs=null,$p={onError:function(e){ro=!0,zi=e}};function Ip(e,t,n,r,o,i,l,a,c){ro=!1,zi=null,Rp.apply($p,arguments)}function Ap(e,t,n,r,o,i,l,a,c){if(Ip.apply(this,arguments),ro){if(ro){var m=zi;ro=!1,zi=null}else throw Error(_(198));_i||(_i=!0,bs=m)}}function tr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ad(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xc(e){if(tr(e)!==e)throw Error(_(188))}function Fp(e){var t=e.alternate;if(!t){if(t=tr(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return xc(o),e;if(i===r)return xc(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function cd(e){return e=Fp(e),e!==null?ud(e):null}function ud(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ud(e);if(t!==null)return t;e=e.sibling}return null}var dd=ft.unstable_scheduleCallback,yc=ft.unstable_cancelCallback,Bp=ft.unstable_shouldYield,Up=ft.unstable_requestPaint,xe=ft.unstable_now,Hp=ft.unstable_getCurrentPriorityLevel,va=ft.unstable_ImmediatePriority,fd=ft.unstable_UserBlockingPriority,Di=ft.unstable_NormalPriority,Kp=ft.unstable_LowPriority,pd=ft.unstable_IdlePriority,ol=null,Ft=null;function Wp(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Qp,Vp=Math.log,Yp=Math.LN2;function Qp(e){return e>>>=0,e===0?32:31-(Vp(e)/Yp|0)|0}var qo=64,ei=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Li(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=qr(a):(i&=l,i!==0&&(r=qr(i)))}else l=n&~o,l!==0?r=qr(l):i!==0&&(r=qr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),o=1<<n,r|=e[n],t&=~o;return r}function Xp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Tt(i),a=1<<l,c=o[l];c===-1?(!(a&n)||a&r)&&(o[l]=Xp(a,t)):c<=t&&(e.expiredLanes|=a),i&=~a}}function Ss(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hd(){var e=qo;return qo<<=1,!(qo&4194240)&&(qo=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function Jp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Tt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function wa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function md(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gd,ka,xd,yd,vd,js=!1,ti=[],hn=null,mn=null,gn=null,go=new Map,xo=new Map,un=[],Zp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vc(e,t){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(t.pointerId)}}function Kr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ro(t),t!==null&&ka(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function qp(e,t,n,r,o){switch(t){case"focusin":return hn=Kr(hn,e,t,n,r,o),!0;case"dragenter":return mn=Kr(mn,e,t,n,r,o),!0;case"mouseover":return gn=Kr(gn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return go.set(i,Kr(go.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,xo.set(i,Kr(xo.get(i)||null,e,t,n,r,o)),!0}return!1}function wd(e){var t=Fn(e.target);if(t!==null){var n=tr(t);if(n!==null){if(t=n.tag,t===13){if(t=ad(n),t!==null){e.blockedOn=t,vd(e.priority,function(){xd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ns(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vs=r,n.target.dispatchEvent(r),vs=null}else return t=Ro(n),t!==null&&ka(t),e.blockedOn=n,!1;t.shift()}return!0}function wc(e,t,n){gi(e)&&n.delete(t)}function eh(){js=!1,hn!==null&&gi(hn)&&(hn=null),mn!==null&&gi(mn)&&(mn=null),gn!==null&&gi(gn)&&(gn=null),go.forEach(wc),xo.forEach(wc)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,js||(js=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,eh)))}function yo(e){function t(o){return Wr(o,e)}if(0<ti.length){Wr(ti[0],e);for(var n=1;n<ti.length;n++){var r=ti[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&Wr(hn,e),mn!==null&&Wr(mn,e),gn!==null&&Wr(gn,e),go.forEach(t),xo.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)wd(n),n.blockedOn===null&&un.shift()}var br=tn.ReactCurrentBatchConfig,Ti=!0;function th(e,t,n,r){var o=te,i=br.transition;br.transition=null;try{te=1,ba(e,t,n,r)}finally{te=o,br.transition=i}}function nh(e,t,n,r){var o=te,i=br.transition;br.transition=null;try{te=4,ba(e,t,n,r)}finally{te=o,br.transition=i}}function ba(e,t,n,r){if(Ti){var o=Ns(e,t,n,r);if(o===null)Ul(e,t,r,Pi,n),vc(e,r);else if(qp(o,e,t,n,r))r.stopPropagation();else if(vc(e,r),t&4&&-1<Zp.indexOf(e)){for(;o!==null;){var i=Ro(o);if(i!==null&&gd(i),i=Ns(e,t,n,r),i===null&&Ul(e,t,r,Pi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var Pi=null;function Ns(e,t,n,r){if(Pi=null,e=ya(r),e=Fn(e),e!==null)if(t=tr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ad(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pi=e,null}function kd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hp()){case va:return 1;case fd:return 4;case Di:case Kp:return 16;case pd:return 536870912;default:return 16}default:return 16}}var fn=null,Sa=null,xi=null;function bd(){if(xi)return xi;var e,t=Sa,n=t.length,r,o="value"in fn?fn.value:fn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return xi=o.slice(e,1<r?1-r:void 0)}function yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function kc(){return!1}function ht(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ni:kc,this.isPropagationStopped=kc,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ja=ht(Mr),Oo=he({},Mr,{view:0,detail:0}),rh=ht(Oo),Pl,Ml,Vr,il=he({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Pl=e.screenX-Vr.screenX,Ml=e.screenY-Vr.screenY):Ml=Pl=0,Vr=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:Ml}}),bc=ht(il),oh=he({},il,{dataTransfer:0}),ih=ht(oh),lh=he({},Oo,{relatedTarget:0}),Ol=ht(lh),sh=he({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),ah=ht(sh),ch=he({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uh=ht(ch),dh=he({},Mr,{data:0}),Sc=ht(dh),fh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ph={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hh[e])?!!t[e]:!1}function Na(){return mh}var gh=he({},Oo,{key:function(e){if(e.key){var t=fh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ph[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Na,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xh=ht(gh),yh=he({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jc=ht(yh),vh=he({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Na}),wh=ht(vh),kh=he({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bh=ht(kh),Sh=he({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jh=ht(Sh),Nh=[9,13,27,32],Ca=Jt&&"CompositionEvent"in window,oo=null;Jt&&"documentMode"in document&&(oo=document.documentMode);var Ch=Jt&&"TextEvent"in window&&!oo,Sd=Jt&&(!Ca||oo&&8<oo&&11>=oo),Nc=" ",Cc=!1;function jd(e,t){switch(e){case"keyup":return Nh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function Eh(e,t){switch(e){case"compositionend":return Nd(t);case"keypress":return t.which!==32?null:(Cc=!0,Nc);case"textInput":return e=t.data,e===Nc&&Cc?null:e;default:return null}}function zh(e,t){if(cr)return e==="compositionend"||!Ca&&jd(e,t)?(e=bd(),xi=Sa=fn=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sd&&t.locale!=="ko"?null:t.data;default:return null}}var _h={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_h[e.type]:t==="textarea"}function Cd(e,t,n,r){rd(r),t=Mi(t,"onChange"),0<t.length&&(n=new ja("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var io=null,vo=null;function Dh(e){$d(e,0)}function ll(e){var t=fr(e);if(Gu(t))return e}function Lh(e,t){if(e==="change")return t}var Ed=!1;if(Jt){var Rl;if(Jt){var $l="oninput"in document;if(!$l){var zc=document.createElement("div");zc.setAttribute("oninput","return;"),$l=typeof zc.oninput=="function"}Rl=$l}else Rl=!1;Ed=Rl&&(!document.documentMode||9<document.documentMode)}function _c(){io&&(io.detachEvent("onpropertychange",zd),vo=io=null)}function zd(e){if(e.propertyName==="value"&&ll(vo)){var t=[];Cd(t,vo,e,ya(e)),sd(Dh,t)}}function Th(e,t,n){e==="focusin"?(_c(),io=t,vo=n,io.attachEvent("onpropertychange",zd)):e==="focusout"&&_c()}function Ph(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(vo)}function Mh(e,t){if(e==="click")return ll(t)}function Oh(e,t){if(e==="input"||e==="change")return ll(t)}function Rh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:Rh;function wo(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ss.call(t,o)||!Mt(e[o],t[o]))return!1}return!0}function Dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lc(e,t){var n=Dc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dc(n)}}function _d(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_d(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dd(){for(var e=window,t=Ei();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ei(e.document)}return t}function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $h(e){var t=Dd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_d(n.ownerDocument.documentElement,n)){if(r!==null&&Ea(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Lc(n,i);var l=Lc(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ih=Jt&&"documentMode"in document&&11>=document.documentMode,ur=null,Cs=null,lo=null,Es=!1;function Tc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Es||ur==null||ur!==Ei(r)||(r=ur,"selectionStart"in r&&Ea(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&wo(lo,r)||(lo=r,r=Mi(Cs,"onSelect"),0<r.length&&(t=new ja("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ur)))}function ri(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dr={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionend:ri("Transition","TransitionEnd")},Il={},Ld={};Jt&&(Ld=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function sl(e){if(Il[e])return Il[e];if(!dr[e])return e;var t=dr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ld)return Il[e]=t[n];return e}var Td=sl("animationend"),Pd=sl("animationiteration"),Md=sl("animationstart"),Od=sl("transitionend"),Rd=new Map,Pc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){Rd.set(e,t),er(t,[e])}for(var Al=0;Al<Pc.length;Al++){var Fl=Pc[Al],Ah=Fl.toLowerCase(),Fh=Fl[0].toUpperCase()+Fl.slice(1);jn(Ah,"on"+Fh)}jn(Td,"onAnimationEnd");jn(Pd,"onAnimationIteration");jn(Md,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(Od,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bh=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function Mc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ap(r,t,void 0,e),e.currentTarget=null}function $d(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,m=a.currentTarget;if(a=a.listener,c!==i&&o.isPropagationStopped())break e;Mc(o,a,m),i=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,m=a.currentTarget,a=a.listener,c!==i&&o.isPropagationStopped())break e;Mc(o,a,m),i=c}}}if(_i)throw e=bs,_i=!1,bs=null,e}function le(e,t){var n=t[Ts];n===void 0&&(n=t[Ts]=new Set);var r=e+"__bubble";n.has(r)||(Id(t,e,2,!1),n.add(r))}function Bl(e,t,n){var r=0;t&&(r|=4),Id(n,e,r,t)}var oi="_reactListening"+Math.random().toString(36).slice(2);function ko(e){if(!e[oi]){e[oi]=!0,Wu.forEach(function(n){n!=="selectionchange"&&(Bh.has(n)||Bl(n,!1,e),Bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oi]||(t[oi]=!0,Bl("selectionchange",!1,t))}}function Id(e,t,n,r){switch(kd(t)){case 1:var o=th;break;case 4:o=nh;break;default:o=ba}n=o.bind(null,t,n,e),o=void 0,!ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Fn(a),l===null)return;if(c=l.tag,c===5||c===6){r=i=l;continue e}a=a.parentNode}}r=r.return}sd(function(){var m=i,f=ya(n),h=[];e:{var p=Rd.get(e);if(p!==void 0){var w=ja,b=e;switch(e){case"keypress":if(yi(n)===0)break e;case"keydown":case"keyup":w=xh;break;case"focusin":b="focus",w=Ol;break;case"focusout":b="blur",w=Ol;break;case"beforeblur":case"afterblur":w=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=wh;break;case Td:case Pd:case Md:w=ah;break;case Od:w=bh;break;case"scroll":w=rh;break;case"wheel":w=jh;break;case"copy":case"cut":case"paste":w=uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=jc}var k=(t&4)!==0,L=!k&&e==="scroll",g=k?p!==null?p+"Capture":null:p;k=[];for(var d=m,u;d!==null;){u=d;var v=u.stateNode;if(u.tag===5&&v!==null&&(u=v,g!==null&&(v=mo(d,g),v!=null&&k.push(bo(d,v,u)))),L)break;d=d.return}0<k.length&&(p=new w(p,b,null,n,f),h.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==vs&&(b=n.relatedTarget||n.fromElement)&&(Fn(b)||b[Zt]))break e;if((w||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,w?(b=n.relatedTarget||n.toElement,w=m,b=b?Fn(b):null,b!==null&&(L=tr(b),b!==L||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=m),w!==b)){if(k=bc,v="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=jc,v="onPointerLeave",g="onPointerEnter",d="pointer"),L=w==null?p:fr(w),u=b==null?p:fr(b),p=new k(v,d+"leave",w,n,f),p.target=L,p.relatedTarget=u,v=null,Fn(f)===m&&(k=new k(g,d+"enter",b,n,f),k.target=u,k.relatedTarget=L,v=k),L=v,w&&b)t:{for(k=w,g=b,d=0,u=k;u;u=lr(u))d++;for(u=0,v=g;v;v=lr(v))u++;for(;0<d-u;)k=lr(k),d--;for(;0<u-d;)g=lr(g),u--;for(;d--;){if(k===g||g!==null&&k===g.alternate)break t;k=lr(k),g=lr(g)}k=null}else k=null;w!==null&&Oc(h,p,w,k,!1),b!==null&&L!==null&&Oc(h,L,b,k,!0)}}e:{if(p=m?fr(m):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var S=Lh;else if(Ec(p))if(Ed)S=Oh;else{S=Ph;var z=Th}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Mh);if(S&&(S=S(e,m))){Cd(h,S,n,f);break e}z&&z(e,p,m),e==="focusout"&&(z=p._wrapperState)&&z.controlled&&p.type==="number"&&hs(p,"number",p.value)}switch(z=m?fr(m):window,e){case"focusin":(Ec(z)||z.contentEditable==="true")&&(ur=z,Cs=m,lo=null);break;case"focusout":lo=Cs=ur=null;break;case"mousedown":Es=!0;break;case"contextmenu":case"mouseup":case"dragend":Es=!1,Tc(h,n,f);break;case"selectionchange":if(Ih)break;case"keydown":case"keyup":Tc(h,n,f)}var D;if(Ca)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else cr?jd(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Sd&&n.locale!=="ko"&&(cr||T!=="onCompositionStart"?T==="onCompositionEnd"&&cr&&(D=bd()):(fn=f,Sa="value"in fn?fn.value:fn.textContent,cr=!0)),z=Mi(m,T),0<z.length&&(T=new Sc(T,e,null,n,f),h.push({event:T,listeners:z}),D?T.data=D:(D=Nd(n),D!==null&&(T.data=D)))),(D=Ch?Eh(e,n):zh(e,n))&&(m=Mi(m,"onBeforeInput"),0<m.length&&(f=new Sc("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:m}),f.data=D))}$d(h,t)})}function bo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=mo(e,n),i!=null&&r.unshift(bo(e,i,o)),i=mo(e,t),i!=null&&r.push(bo(e,i,o))),e=e.return}return r}function lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,c=a.alternate,m=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&m!==null&&(a=m,o?(c=mo(n,i),c!=null&&l.unshift(bo(n,c,a))):o||(c=mo(n,i),c!=null&&l.push(bo(n,c,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Uh=/\r\n?/g,Hh=/\u0000|\uFFFD/g;function Rc(e){return(typeof e=="string"?e:""+e).replace(Uh,`
`).replace(Hh,"")}function ii(e,t,n){if(t=Rc(t),Rc(e)!==t&&n)throw Error(_(425))}function Oi(){}var zs=null,_s=null;function Ds(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ls=typeof setTimeout=="function"?setTimeout:void 0,Kh=typeof clearTimeout=="function"?clearTimeout:void 0,$c=typeof Promise=="function"?Promise:void 0,Wh=typeof queueMicrotask=="function"?queueMicrotask:typeof $c<"u"?function(e){return $c.resolve(null).then(e).catch(Vh)}:Ls;function Vh(e){setTimeout(function(){throw e})}function Hl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),yo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);yo(t)}function xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Or=Math.random().toString(36).slice(2),It="__reactFiber$"+Or,So="__reactProps$"+Or,Zt="__reactContainer$"+Or,Ts="__reactEvents$"+Or,Yh="__reactListeners$"+Or,Qh="__reactHandles$"+Or;function Fn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ic(e);e!==null;){if(n=e[It])return n;e=Ic(e)}return t}e=n,n=e.parentNode}return null}function Ro(e){return e=e[It]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function al(e){return e[So]||null}var Ps=[],pr=-1;function Nn(e){return{current:e}}function ae(e){0>pr||(e.current=Ps[pr],Ps[pr]=null,pr--)}function oe(e,t){pr++,Ps[pr]=e.current,e.current=t}var Sn={},Ue=Nn(Sn),rt=Nn(!1),Xn=Sn;function Er(e,t){var n=e.type.contextTypes;if(!n)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ot(e){return e=e.childContextTypes,e!=null}function Ri(){ae(rt),ae(Ue)}function Ac(e,t,n){if(Ue.current!==Sn)throw Error(_(168));oe(Ue,t),oe(rt,n)}function Ad(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,Tp(e)||"Unknown",o));return he({},n,r)}function $i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,Xn=Ue.current,oe(Ue,e),oe(rt,rt.current),!0}function Fc(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Ad(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,ae(rt),ae(Ue),oe(Ue,e)):ae(rt),oe(rt,n)}var Yt=null,cl=!1,Kl=!1;function Fd(e){Yt===null?Yt=[e]:Yt.push(e)}function Xh(e){cl=!0,Fd(e)}function Cn(){if(!Kl&&Yt!==null){Kl=!0;var e=0,t=te;try{var n=Yt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Yt=null,cl=!1}catch(o){throw Yt!==null&&(Yt=Yt.slice(e+1)),dd(va,Cn),o}finally{te=t,Kl=!1}}return null}var hr=[],mr=0,Ii=null,Ai=0,wt=[],kt=0,Gn=null,Qt=1,Xt="";function In(e,t){hr[mr++]=Ai,hr[mr++]=Ii,Ii=e,Ai=t}function Bd(e,t,n){wt[kt++]=Qt,wt[kt++]=Xt,wt[kt++]=Gn,Gn=e;var r=Qt;e=Xt;var o=32-Tt(r)-1;r&=~(1<<o),n+=1;var i=32-Tt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Qt=1<<32-Tt(t)+o|n<<o|r,Xt=i+e}else Qt=1<<i|n<<o|r,Xt=e}function za(e){e.return!==null&&(In(e,1),Bd(e,1,0))}function _a(e){for(;e===Ii;)Ii=hr[--mr],hr[mr]=null,Ai=hr[--mr],hr[mr]=null;for(;e===Gn;)Gn=wt[--kt],wt[kt]=null,Xt=wt[--kt],wt[kt]=null,Qt=wt[--kt],wt[kt]=null}var dt=null,ut=null,de=!1,Lt=null;function Ud(e,t){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ut=xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gn!==null?{id:Qt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,ut=null,!0):!1;default:return!1}}function Ms(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Os(e){if(de){var t=ut;if(t){var n=t;if(!Bc(e,t)){if(Ms(e))throw Error(_(418));t=xn(n.nextSibling);var r=dt;t&&Bc(e,t)?Ud(r,n):(e.flags=e.flags&-4097|2,de=!1,dt=e)}}else{if(Ms(e))throw Error(_(418));e.flags=e.flags&-4097|2,de=!1,dt=e}}}function Uc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function li(e){if(e!==dt)return!1;if(!de)return Uc(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ds(e.type,e.memoizedProps)),t&&(t=ut)){if(Ms(e))throw Hd(),Error(_(418));for(;t;)Ud(e,t),t=xn(t.nextSibling)}if(Uc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=dt?xn(e.stateNode.nextSibling):null;return!0}function Hd(){for(var e=ut;e;)e=xn(e.nextSibling)}function zr(){ut=dt=null,de=!1}function Da(e){Lt===null?Lt=[e]:Lt.push(e)}var Gh=tn.ReactCurrentBatchConfig;function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function si(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hc(e){var t=e._init;return t(e._payload)}function Kd(e){function t(g,d){if(e){var u=g.deletions;u===null?(g.deletions=[d],g.flags|=16):u.push(d)}}function n(g,d){if(!e)return null;for(;d!==null;)t(g,d),d=d.sibling;return null}function r(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function o(g,d){return g=kn(g,d),g.index=0,g.sibling=null,g}function i(g,d,u){return g.index=u,e?(u=g.alternate,u!==null?(u=u.index,u<d?(g.flags|=2,d):u):(g.flags|=2,d)):(g.flags|=1048576,d)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,d,u,v){return d===null||d.tag!==6?(d=Jl(u,g.mode,v),d.return=g,d):(d=o(d,u),d.return=g,d)}function c(g,d,u,v){var S=u.type;return S===ar?f(g,d,u.props.children,v,u.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&Hc(S)===d.type)?(v=o(d,u.props),v.ref=Yr(g,d,u),v.return=g,v):(v=Ni(u.type,u.key,u.props,null,g.mode,v),v.ref=Yr(g,d,u),v.return=g,v)}function m(g,d,u,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==u.containerInfo||d.stateNode.implementation!==u.implementation?(d=Zl(u,g.mode,v),d.return=g,d):(d=o(d,u.children||[]),d.return=g,d)}function f(g,d,u,v,S){return d===null||d.tag!==7?(d=Kn(u,g.mode,v,S),d.return=g,d):(d=o(d,u),d.return=g,d)}function h(g,d,u){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Jl(""+d,g.mode,u),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Go:return u=Ni(d.type,d.key,d.props,null,g.mode,u),u.ref=Yr(g,null,d),u.return=g,u;case sr:return d=Zl(d,g.mode,u),d.return=g,d;case an:var v=d._init;return h(g,v(d._payload),u)}if(Zr(d)||Ur(d))return d=Kn(d,g.mode,u,null),d.return=g,d;si(g,d)}return null}function p(g,d,u,v){var S=d!==null?d.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return S!==null?null:a(g,d,""+u,v);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Go:return u.key===S?c(g,d,u,v):null;case sr:return u.key===S?m(g,d,u,v):null;case an:return S=u._init,p(g,d,S(u._payload),v)}if(Zr(u)||Ur(u))return S!==null?null:f(g,d,u,v,null);si(g,u)}return null}function w(g,d,u,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return g=g.get(u)||null,a(d,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Go:return g=g.get(v.key===null?u:v.key)||null,c(d,g,v,S);case sr:return g=g.get(v.key===null?u:v.key)||null,m(d,g,v,S);case an:var z=v._init;return w(g,d,u,z(v._payload),S)}if(Zr(v)||Ur(v))return g=g.get(u)||null,f(d,g,v,S,null);si(d,v)}return null}function b(g,d,u,v){for(var S=null,z=null,D=d,T=d=0,F=null;D!==null&&T<u.length;T++){D.index>T?(F=D,D=null):F=D.sibling;var I=p(g,D,u[T],v);if(I===null){D===null&&(D=F);break}e&&D&&I.alternate===null&&t(g,D),d=i(I,d,T),z===null?S=I:z.sibling=I,z=I,D=F}if(T===u.length)return n(g,D),de&&In(g,T),S;if(D===null){for(;T<u.length;T++)D=h(g,u[T],v),D!==null&&(d=i(D,d,T),z===null?S=D:z.sibling=D,z=D);return de&&In(g,T),S}for(D=r(g,D);T<u.length;T++)F=w(D,g,T,u[T],v),F!==null&&(e&&F.alternate!==null&&D.delete(F.key===null?T:F.key),d=i(F,d,T),z===null?S=F:z.sibling=F,z=F);return e&&D.forEach(function(G){return t(g,G)}),de&&In(g,T),S}function k(g,d,u,v){var S=Ur(u);if(typeof S!="function")throw Error(_(150));if(u=S.call(u),u==null)throw Error(_(151));for(var z=S=null,D=d,T=d=0,F=null,I=u.next();D!==null&&!I.done;T++,I=u.next()){D.index>T?(F=D,D=null):F=D.sibling;var G=p(g,D,I.value,v);if(G===null){D===null&&(D=F);break}e&&D&&G.alternate===null&&t(g,D),d=i(G,d,T),z===null?S=G:z.sibling=G,z=G,D=F}if(I.done)return n(g,D),de&&In(g,T),S;if(D===null){for(;!I.done;T++,I=u.next())I=h(g,I.value,v),I!==null&&(d=i(I,d,T),z===null?S=I:z.sibling=I,z=I);return de&&In(g,T),S}for(D=r(g,D);!I.done;T++,I=u.next())I=w(D,g,T,I.value,v),I!==null&&(e&&I.alternate!==null&&D.delete(I.key===null?T:I.key),d=i(I,d,T),z===null?S=I:z.sibling=I,z=I);return e&&D.forEach(function(ye){return t(g,ye)}),de&&In(g,T),S}function L(g,d,u,v){if(typeof u=="object"&&u!==null&&u.type===ar&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Go:e:{for(var S=u.key,z=d;z!==null;){if(z.key===S){if(S=u.type,S===ar){if(z.tag===7){n(g,z.sibling),d=o(z,u.props.children),d.return=g,g=d;break e}}else if(z.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&Hc(S)===z.type){n(g,z.sibling),d=o(z,u.props),d.ref=Yr(g,z,u),d.return=g,g=d;break e}n(g,z);break}else t(g,z);z=z.sibling}u.type===ar?(d=Kn(u.props.children,g.mode,v,u.key),d.return=g,g=d):(v=Ni(u.type,u.key,u.props,null,g.mode,v),v.ref=Yr(g,d,u),v.return=g,g=v)}return l(g);case sr:e:{for(z=u.key;d!==null;){if(d.key===z)if(d.tag===4&&d.stateNode.containerInfo===u.containerInfo&&d.stateNode.implementation===u.implementation){n(g,d.sibling),d=o(d,u.children||[]),d.return=g,g=d;break e}else{n(g,d);break}else t(g,d);d=d.sibling}d=Zl(u,g.mode,v),d.return=g,g=d}return l(g);case an:return z=u._init,L(g,d,z(u._payload),v)}if(Zr(u))return b(g,d,u,v);if(Ur(u))return k(g,d,u,v);si(g,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,d!==null&&d.tag===6?(n(g,d.sibling),d=o(d,u),d.return=g,g=d):(n(g,d),d=Jl(u,g.mode,v),d.return=g,g=d),l(g)):n(g,d)}return L}var _r=Kd(!0),Wd=Kd(!1),Fi=Nn(null),Bi=null,gr=null,La=null;function Ta(){La=gr=Bi=null}function Pa(e){var t=Fi.current;ae(Fi),e._currentValue=t}function Rs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sr(e,t){Bi=e,La=gr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(La!==e)if(e={context:e,memoizedValue:t,next:null},gr===null){if(Bi===null)throw Error(_(308));gr=e,Bi.dependencies={lanes:0,firstContext:e}}else gr=gr.next=e;return t}var Bn=null;function Ma(e){Bn===null?Bn=[e]:Bn.push(e)}function Vd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ma(t)):(n.next=o.next,o.next=n),t.interleaved=n,qt(e,r)}function qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function Oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,qt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ma(r)):(t.next=o.next,o.next=t),r.interleaved=t,qt(e,n)}function vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wa(e,n)}}function Kc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ui(e,t,n,r){var o=e.updateQueue;cn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,m=c.next;c.next=null,l===null?i=m:l.next=m,l=c;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=m:a.next=m,f.lastBaseUpdate=c))}if(i!==null){var h=o.baseState;l=0,f=m=c=null,a=i;do{var p=a.lane,w=a.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,k=a;switch(p=t,w=n,k.tag){case 1:if(b=k.payload,typeof b=="function"){h=b.call(w,h,p);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=k.payload,p=typeof b=="function"?b.call(w,h,p):b,p==null)break e;h=he({},h,p);break e;case 2:cn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else w={eventTime:w,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(m=f=w,c=h):f=f.next=w,l|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(f===null&&(c=h),o.baseState=c,o.firstBaseUpdate=m,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Zn|=l,e.lanes=l,e.memoizedState=h}}function Wc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var $o={},Bt=Nn($o),jo=Nn($o),No=Nn($o);function Un(e){if(e===$o)throw Error(_(174));return e}function Ra(e,t){switch(oe(No,t),oe(jo,e),oe(Bt,$o),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gs(t,e)}ae(Bt),oe(Bt,t)}function Dr(){ae(Bt),ae(jo),ae(No)}function Qd(e){Un(No.current);var t=Un(Bt.current),n=gs(t,e.type);t!==n&&(oe(jo,e),oe(Bt,n))}function $a(e){jo.current===e&&(ae(Bt),ae(jo))}var fe=Nn(0);function Hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wl=[];function Ia(){for(var e=0;e<Wl.length;e++)Wl[e]._workInProgressVersionPrimary=null;Wl.length=0}var wi=tn.ReactCurrentDispatcher,Vl=tn.ReactCurrentBatchConfig,Jn=0,pe=null,Se=null,ze=null,Ki=!1,so=!1,Co=0,Jh=0;function $e(){throw Error(_(321))}function Aa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function Fa(e,t,n,r,o,i){if(Jn=i,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wi.current=e===null||e.memoizedState===null?tm:nm,e=n(r,o),so){i=0;do{if(so=!1,Co=0,25<=i)throw Error(_(301));i+=1,ze=Se=null,t.updateQueue=null,wi.current=rm,e=n(r,o)}while(so)}if(wi.current=Wi,t=Se!==null&&Se.next!==null,Jn=0,ze=Se=pe=null,Ki=!1,t)throw Error(_(300));return e}function Ba(){var e=Co!==0;return Co=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?pe.memoizedState=ze=e:ze=ze.next=e,ze}function Nt(){if(Se===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=ze===null?pe.memoizedState:ze.next;if(t!==null)ze=t,Se=e;else{if(e===null)throw Error(_(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},ze===null?pe.memoizedState=ze=e:ze=ze.next=e}return ze}function Eo(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=Nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=Se,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,c=null,m=i;do{var f=m.lane;if((Jn&f)===f)c!==null&&(c=c.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var h={lane:f,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};c===null?(a=c=h,l=r):c=c.next=h,pe.lanes|=f,Zn|=f}m=m.next}while(m!==null&&m!==i);c===null?l=r:c.next=a,Mt(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,pe.lanes|=i,Zn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=Nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Mt(i,t.memoizedState)||(nt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Xd(){}function Gd(e,t){var n=pe,r=Nt(),o=t(),i=!Mt(r.memoizedState,o);if(i&&(r.memoizedState=o,nt=!0),r=r.queue,Ua(qd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,zo(9,Zd.bind(null,n,r,o,t),void 0,null),_e===null)throw Error(_(349));Jn&30||Jd(n,t,o)}return o}function Jd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zd(e,t,n,r){t.value=n,t.getSnapshot=r,ef(t)&&tf(e)}function qd(e,t,n){return n(function(){ef(t)&&tf(e)})}function ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function tf(e){var t=qt(e,1);t!==null&&Pt(t,e,1,-1)}function Vc(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:e},t.queue=e,e=e.dispatch=em.bind(null,pe,e),[t.memoizedState,e]}function zo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nf(){return Nt().memoizedState}function ki(e,t,n,r){var o=$t();pe.flags|=e,o.memoizedState=zo(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var o=Nt();r=r===void 0?null:r;var i=void 0;if(Se!==null){var l=Se.memoizedState;if(i=l.destroy,r!==null&&Aa(r,l.deps)){o.memoizedState=zo(t,n,i,r);return}}pe.flags|=e,o.memoizedState=zo(1|t,n,i,r)}function Yc(e,t){return ki(8390656,8,e,t)}function Ua(e,t){return ul(2048,8,e,t)}function rf(e,t){return ul(4,2,e,t)}function of(e,t){return ul(4,4,e,t)}function lf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sf(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,lf.bind(null,t,e),n)}function Ha(){}function af(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Aa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cf(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Aa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uf(e,t,n){return Jn&21?(Mt(n,t)||(n=hd(),pe.lanes|=n,Zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function Zh(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{te=n,Vl.transition=r}}function df(){return Nt().memoizedState}function qh(e,t,n){var r=wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ff(e))pf(t,n);else if(n=Vd(e,t,n,r),n!==null){var o=Qe();Pt(n,e,r,o),hf(n,t,r)}}function em(e,t,n){var r=wn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ff(e))pf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Mt(a,l)){var c=t.interleaved;c===null?(o.next=o,Ma(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Vd(e,t,o,r),n!==null&&(o=Qe(),Pt(n,e,r,o),hf(n,t,r))}}function ff(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function pf(e,t){so=Ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wa(e,n)}}var Wi={readContext:jt,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},tm={readContext:jt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:Yc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ki(4194308,4,lf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return ki(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qh.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Vc,useDebugValue:Ha,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Vc(!1),t=e[0];return e=Zh.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,o=$t();if(de){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),_e===null)throw Error(_(349));Jn&30||Jd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Yc(qd.bind(null,r,i,e),[e]),r.flags|=2048,zo(9,Zd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=$t(),t=_e.identifierPrefix;if(de){var n=Xt,r=Qt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Co++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nm={readContext:jt,useCallback:af,useContext:jt,useEffect:Ua,useImperativeHandle:sf,useInsertionEffect:rf,useLayoutEffect:of,useMemo:cf,useReducer:Yl,useRef:nf,useState:function(){return Yl(Eo)},useDebugValue:Ha,useDeferredValue:function(e){var t=Nt();return uf(t,Se.memoizedState,e)},useTransition:function(){var e=Yl(Eo)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:Xd,useSyncExternalStore:Gd,useId:df,unstable_isNewReconciler:!1},rm={readContext:jt,useCallback:af,useContext:jt,useEffect:Ua,useImperativeHandle:sf,useInsertionEffect:rf,useLayoutEffect:of,useMemo:cf,useReducer:Ql,useRef:nf,useState:function(){return Ql(Eo)},useDebugValue:Ha,useDeferredValue:function(e){var t=Nt();return Se===null?t.memoizedState=e:uf(t,Se.memoizedState,e)},useTransition:function(){var e=Ql(Eo)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:Xd,useSyncExternalStore:Gd,useId:df,unstable_isNewReconciler:!1};function _t(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $s(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?tr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=wn(e),i=Gt(r,o);i.payload=t,n!=null&&(i.callback=n),t=yn(e,i,o),t!==null&&(Pt(t,e,o,r),vi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=wn(e),i=Gt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=yn(e,i,o),t!==null&&(Pt(t,e,o,r),vi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=wn(e),o=Gt(n,r);o.tag=2,t!=null&&(o.callback=t),t=yn(e,o,r),t!==null&&(Pt(t,e,r,n),vi(t,e,r))}};function Qc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!wo(n,r)||!wo(o,i):!0}function mf(e,t,n){var r=!1,o=Sn,i=t.contextType;return typeof i=="object"&&i!==null?i=jt(i):(o=ot(t)?Xn:Ue.current,r=t.contextTypes,i=(r=r!=null)?Er(e,o):Sn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Xc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function Is(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Oa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=jt(i):(i=ot(t)?Xn:Ue.current,o.context=Er(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&($s(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&dl.enqueueReplaceState(o,o.state,null),Ui(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Lr(e,t){try{var n="",r=t;do n+=Lp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Xl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function As(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var om=typeof WeakMap=="function"?WeakMap:Map;function gf(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yi||(Yi=!0,Xs=r),As(e,t)},n}function xf(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){As(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){As(e,t),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Gc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new om;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ym.bind(null,e,t,n),t.then(e,e))}function Jc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,yn(n,t,1))),n.lanes|=1),e)}var im=tn.ReactCurrentOwner,nt=!1;function Ye(e,t,n,r){t.child=e===null?Wd(t,null,n,r):_r(t,e.child,n,r)}function qc(e,t,n,r,o){n=n.render;var i=t.ref;return Sr(t,o),r=Fa(e,t,n,r,i,o),n=Ba(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,en(e,t,o)):(de&&n&&za(t),t.flags|=1,Ye(e,t,r,o),t.child)}function eu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ja(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,yf(e,t,i,r,o)):(e=Ni(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(l,r)&&e.ref===t.ref)return en(e,t,o)}return t.flags|=1,e=kn(i,r),e.ref=t.ref,e.return=t,t.child=e}function yf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(wo(i,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,en(e,t,o)}return Fs(e,t,n,r,o)}function vf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(yr,at),at|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(yr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,oe(yr,at),at|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,oe(yr,at),at|=r;return Ye(e,t,o,n),t.child}function wf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fs(e,t,n,r,o){var i=ot(n)?Xn:Ue.current;return i=Er(t,i),Sr(t,o),n=Fa(e,t,n,r,i,o),r=Ba(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,en(e,t,o)):(de&&r&&za(t),t.flags|=1,Ye(e,t,n,o),t.child)}function tu(e,t,n,r,o){if(ot(n)){var i=!0;$i(t)}else i=!1;if(Sr(t,o),t.stateNode===null)bi(e,t),mf(t,n,r),Is(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var c=l.context,m=n.contextType;typeof m=="object"&&m!==null?m=jt(m):(m=ot(n)?Xn:Ue.current,m=Er(t,m));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==m)&&Xc(t,l,r,m),cn=!1;var p=t.memoizedState;l.state=p,Ui(t,r,l,o),c=t.memoizedState,a!==r||p!==c||rt.current||cn?(typeof f=="function"&&($s(t,n,f,r),c=t.memoizedState),(a=cn||Qc(t,n,a,r,p,c,m))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=m,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Yd(e,t),a=t.memoizedProps,m=t.type===t.elementType?a:_t(t.type,a),l.props=m,h=t.pendingProps,p=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=jt(c):(c=ot(n)?Xn:Ue.current,c=Er(t,c));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||p!==c)&&Xc(t,l,r,c),cn=!1,p=t.memoizedState,l.state=p,Ui(t,r,l,o);var b=t.memoizedState;a!==h||p!==b||rt.current||cn?(typeof w=="function"&&($s(t,n,w,r),b=t.memoizedState),(m=cn||Qc(t,n,m,r,p,b,c)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=c,r=m):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Bs(e,t,n,r,i,o)}function Bs(e,t,n,r,o,i){wf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Fc(t,n,!1),en(e,t,i);r=t.stateNode,im.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=_r(t,e.child,null,i),t.child=_r(t,null,a,i)):Ye(e,t,a,i),t.memoizedState=r.state,o&&Fc(t,n,!0),t.child}function kf(e){var t=e.stateNode;t.pendingContext?Ac(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ac(e,t.context,!1),Ra(e,t.containerInfo)}function nu(e,t,n,r,o){return zr(),Da(o),t.flags|=256,Ye(e,t,n,r),t.child}var Us={dehydrated:null,treeContext:null,retryLane:0};function Hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function bf(e,t,n){var r=t.pendingProps,o=fe.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),oe(fe,o&1),e===null)return Os(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=hl(l,r,0,null),e=Kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Hs(n),t.memoizedState=Us,e):Ka(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return lm(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=kn(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=kn(a,i):(i=Kn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Hs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Us,r}return i=e.child,e=i.sibling,r=kn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ka(e,t){return t=hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ai(e,t,n,r){return r!==null&&Da(r),_r(t,e.child,null,n),e=Ka(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Xl(Error(_(422))),ai(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=hl({mode:"visible",children:r.children},o,0,null),i=Kn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&_r(t,e.child,null,l),t.child.memoizedState=Hs(l),t.memoizedState=Us,i);if(!(t.mode&1))return ai(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(_(419)),r=Xl(i,r,void 0),ai(e,t,l,r)}if(a=(l&e.childLanes)!==0,nt||a){if(r=_e,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,qt(e,o),Pt(r,e,o,-1))}return Ga(),r=Xl(Error(_(421))),ai(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=vm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ut=xn(o.nextSibling),dt=t,de=!0,Lt=null,e!==null&&(wt[kt++]=Qt,wt[kt++]=Xt,wt[kt++]=Gn,Qt=e.id,Xt=e.overflow,Gn=t),t=Ka(t,r.children),t.flags|=4096,t)}function ru(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Rs(e.return,t,n)}function Gl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Sf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ye(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ru(e,n,t);else if(e.tag===19)ru(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(fe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Hi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Gl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Hi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Gl(t,!0,n,null,i);break;case"together":Gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sm(e,t,n){switch(t.tag){case 3:kf(t),zr();break;case 5:Qd(t);break;case 1:ot(t.type)&&$i(t);break;case 4:Ra(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;oe(Fi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?bf(e,t,n):(oe(fe,fe.current&1),e=en(e,t,n),e!==null?e.sibling:null);oe(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),oe(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,vf(e,t,n)}return en(e,t,n)}var jf,Ks,Nf,Cf;jf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ks=function(){};Nf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Un(Bt.current);var i=null;switch(n){case"input":o=fs(e,o),r=fs(e,r),i=[];break;case"select":o=he({},o,{value:void 0}),r=he({},r,{value:void 0}),i=[];break;case"textarea":o=ms(e,o),r=ms(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oi)}xs(n,r);var l;n=null;for(m in o)if(!r.hasOwnProperty(m)&&o.hasOwnProperty(m)&&o[m]!=null)if(m==="style"){var a=o[m];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(po.hasOwnProperty(m)?i||(i=[]):(i=i||[]).push(m,null));for(m in r){var c=r[m];if(a=o!=null?o[m]:void 0,r.hasOwnProperty(m)&&c!==a&&(c!=null||a!=null))if(m==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(i||(i=[]),i.push(m,n)),n=c;else m==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(m,c)):m==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(m,""+c):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(po.hasOwnProperty(m)?(c!=null&&m==="onScroll"&&le("scroll",e),i||a===c||(i=[])):(i=i||[]).push(m,c))}n&&(i=i||[]).push("style",n);var m=i;(t.updateQueue=m)&&(t.flags|=4)}};Cf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qr(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function am(e,t,n){var r=t.pendingProps;switch(_a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return ot(t.type)&&Ri(),Ie(t),null;case 3:return r=t.stateNode,Dr(),ae(rt),ae(Ue),Ia(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(li(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lt!==null&&(Zs(Lt),Lt=null))),Ks(e,t),Ie(t),null;case 5:$a(t);var o=Un(No.current);if(n=t.type,e!==null&&t.stateNode!=null)Nf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ie(t),null}if(e=Un(Bt.current),li(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[It]=t,r[So]=i,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(o=0;o<eo.length;o++)le(eo[o],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":fc(r,i),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},le("invalid",r);break;case"textarea":hc(r,i),le("invalid",r)}xs(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ii(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ii(r.textContent,a,e),o=["children",""+a]):po.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&le("scroll",r)}switch(n){case"input":Jo(r),pc(r,i,!0);break;case"textarea":Jo(r),mc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Oi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[It]=t,e[So]=r,jf(e,t,!1,!1),t.stateNode=e;e:{switch(l=ys(n,r),n){case"dialog":le("cancel",e),le("close",e),o=r;break;case"iframe":case"object":case"embed":le("load",e),o=r;break;case"video":case"audio":for(o=0;o<eo.length;o++)le(eo[o],e);o=r;break;case"source":le("error",e),o=r;break;case"img":case"image":case"link":le("error",e),le("load",e),o=r;break;case"details":le("toggle",e),o=r;break;case"input":fc(e,r),o=fs(e,r),le("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=he({},r,{value:void 0}),le("invalid",e);break;case"textarea":hc(e,r),o=ms(e,r),le("invalid",e);break;default:o=r}xs(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?nd(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ed(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ho(e,c):typeof c=="number"&&ho(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(po.hasOwnProperty(i)?c!=null&&i==="onScroll"&&le("scroll",e):c!=null&&ha(e,i,c,l))}switch(n){case"input":Jo(e),pc(e,r,!1);break;case"textarea":Jo(e),mc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?vr(e,!!r.multiple,i,!1):r.defaultValue!=null&&vr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Oi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)Cf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Un(No.current),Un(Bt.current),li(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(i=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ii(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Ie(t),null;case 13:if(ae(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&ut!==null&&t.mode&1&&!(t.flags&128))Hd(),zr(),t.flags|=98560,i=!1;else if(i=li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[It]=t}else zr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),i=!1}else Lt!==null&&(Zs(Lt),Lt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?je===0&&(je=3):Ga())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Dr(),Ks(e,t),e===null&&ko(t.stateNode.containerInfo),Ie(t),null;case 10:return Pa(t.type._context),Ie(t),null;case 17:return ot(t.type)&&Ri(),Ie(t),null;case 19:if(ae(fe),i=t.memoizedState,i===null)return Ie(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Qr(i,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Hi(e),l!==null){for(t.flags|=128,Qr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(fe,fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&xe()>Tr&&(t.flags|=128,r=!0,Qr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Hi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!de)return Ie(t),null}else 2*xe()-i.renderingStartTime>Tr&&n!==1073741824&&(t.flags|=128,r=!0,Qr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=xe(),t.sibling=null,n=fe.current,oe(fe,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return Xa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?at&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function cm(e,t){switch(_a(t),t.tag){case 1:return ot(t.type)&&Ri(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dr(),ae(rt),ae(Ue),Ia(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $a(t),null;case 13:if(ae(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(fe),null;case 4:return Dr(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return Xa(),null;case 24:return null;default:return null}}var ci=!1,Ae=!1,um=typeof WeakSet=="function"?WeakSet:Set,$=null;function xr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function Ws(e,t,n){try{n()}catch(r){me(e,t,r)}}var ou=!1;function dm(e,t){if(zs=Ti,e=Dd(),Ea(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,c=-1,m=0,f=0,h=e,p=null;t:for(;;){for(var w;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(c=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(w=h.firstChild)!==null;)p=h,h=w;for(;;){if(h===e)break t;if(p===n&&++m===o&&(a=l),p===i&&++f===r&&(c=l),(w=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=w}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(_s={focusedElem:e,selectionRange:n},Ti=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var k=b.memoizedProps,L=b.memoizedState,g=t.stateNode,d=g.getSnapshotBeforeUpdate(t.elementType===t.type?k:_t(t.type,k),L);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var u=t.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){me(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return b=ou,ou=!1,b}function ao(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ws(t,n,i)}o=o.next}while(o!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ef(e){var t=e.alternate;t!==null&&(e.alternate=null,Ef(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[So],delete t[Ts],delete t[Yh],delete t[Qh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zf(e){return e.tag===5||e.tag===3||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oi));else if(r!==4&&(e=e.child,e!==null))for(Ys(e,t,n),e=e.sibling;e!==null;)Ys(e,t,n),e=e.sibling}function Qs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qs(e,t,n),e=e.sibling;e!==null;)Qs(e,t,n),e=e.sibling}var De=null,Dt=!1;function sn(e,t,n){for(n=n.child;n!==null;)_f(e,t,n),n=n.sibling}function _f(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:Ae||xr(n,t);case 6:var r=De,o=Dt;De=null,sn(e,t,n),De=r,Dt=o,De!==null&&(Dt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(Dt?(e=De,n=n.stateNode,e.nodeType===8?Hl(e.parentNode,n):e.nodeType===1&&Hl(e,n),yo(e)):Hl(De,n.stateNode));break;case 4:r=De,o=Dt,De=n.stateNode.containerInfo,Dt=!0,sn(e,t,n),De=r,Dt=o;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ws(n,t,l),o=o.next}while(o!==r)}sn(e,t,n);break;case 1:if(!Ae&&(xr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,t,a)}sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,sn(e,t,n),Ae=r):sn(e,t,n);break;default:sn(e,t,n)}}function lu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new um),t.forEach(function(r){var o=wm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function zt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:De=a.stateNode,Dt=!1;break e;case 3:De=a.stateNode.containerInfo,Dt=!0;break e;case 4:De=a.stateNode.containerInfo,Dt=!0;break e}a=a.return}if(De===null)throw Error(_(160));_f(i,l,o),De=null,Dt=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(m){me(o,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Df(t,e),t=t.sibling}function Df(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),Rt(e),r&4){try{ao(3,e,e.return),fl(3,e)}catch(k){me(e,e.return,k)}try{ao(5,e,e.return)}catch(k){me(e,e.return,k)}}break;case 1:zt(t,e),Rt(e),r&512&&n!==null&&xr(n,n.return);break;case 5:if(zt(t,e),Rt(e),r&512&&n!==null&&xr(n,n.return),e.flags&32){var o=e.stateNode;try{ho(o,"")}catch(k){me(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ju(o,i),ys(a,l);var m=ys(a,i);for(l=0;l<c.length;l+=2){var f=c[l],h=c[l+1];f==="style"?nd(o,h):f==="dangerouslySetInnerHTML"?ed(o,h):f==="children"?ho(o,h):ha(o,f,h,m)}switch(a){case"input":ps(o,i);break;case"textarea":Zu(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?vr(o,!!i.multiple,w,!1):p!==!!i.multiple&&(i.defaultValue!=null?vr(o,!!i.multiple,i.defaultValue,!0):vr(o,!!i.multiple,i.multiple?[]:"",!1))}o[So]=i}catch(k){me(e,e.return,k)}}break;case 6:if(zt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){me(e,e.return,k)}}break;case 3:if(zt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(t.containerInfo)}catch(k){me(e,e.return,k)}break;case 4:zt(t,e),Rt(e);break;case 13:zt(t,e),Rt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ya=xe())),r&4&&lu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(m=Ae)||f,zt(t,e),Ae=m):zt(t,e),Rt(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!f&&e.mode&1)for($=e,f=e.child;f!==null;){for(h=$=f;$!==null;){switch(p=$,w=p.child,p.tag){case 0:case 11:case 14:case 15:ao(4,p,p.return);break;case 1:xr(p,p.return);var b=p.stateNode;if(typeof b.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(k){me(r,n,k)}}break;case 5:xr(p,p.return);break;case 22:if(p.memoizedState!==null){au(h);continue}}w!==null?(w.return=p,$=w):au(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{o=h.stateNode,m?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=td("display",l))}catch(k){me(e,e.return,k)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=m?"":h.memoizedProps}catch(k){me(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:zt(t,e),Rt(e),r&4&&lu(e);break;case 21:break;default:zt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zf(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ho(o,""),r.flags&=-33);var i=iu(e);Qs(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=iu(e);Ys(e,a,l);break;default:throw Error(_(161))}}catch(c){me(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fm(e,t,n){$=e,Lf(e)}function Lf(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||ci;if(!l){var a=o.alternate,c=a!==null&&a.memoizedState!==null||Ae;a=ci;var m=Ae;if(ci=l,(Ae=c)&&!m)for($=o;$!==null;)l=$,c=l.child,l.tag===22&&l.memoizedState!==null?cu(o):c!==null?(c.return=l,$=c):cu(o);for(;i!==null;)$=i,Lf(i),i=i.sibling;$=o,ci=a,Ae=m}su(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):su(e)}}function su(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ae||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:_t(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Wc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var f=m.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&yo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ae||t.flags&512&&Vs(t)}catch(p){me(t,t.return,p)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function au(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function cu(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(c){me(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){me(t,o,c)}}var i=t.return;try{Vs(t)}catch(c){me(t,i,c)}break;case 5:var l=t.return;try{Vs(t)}catch(c){me(t,l,c)}}}catch(c){me(t,t.return,c)}if(t===e){$=null;break}var a=t.sibling;if(a!==null){a.return=t.return,$=a;break}$=t.return}}var pm=Math.ceil,Vi=tn.ReactCurrentDispatcher,Wa=tn.ReactCurrentOwner,St=tn.ReactCurrentBatchConfig,J=0,_e=null,ve=null,Le=0,at=0,yr=Nn(0),je=0,_o=null,Zn=0,pl=0,Va=0,co=null,tt=null,Ya=0,Tr=1/0,Vt=null,Yi=!1,Xs=null,vn=null,ui=!1,pn=null,Qi=0,uo=0,Gs=null,Si=-1,ji=0;function Qe(){return J&6?xe():Si!==-1?Si:Si=xe()}function wn(e){return e.mode&1?J&2&&Le!==0?Le&-Le:Gh.transition!==null?(ji===0&&(ji=hd()),ji):(e=te,e!==0||(e=window.event,e=e===void 0?16:kd(e.type)),e):1}function Pt(e,t,n,r){if(50<uo)throw uo=0,Gs=null,Error(_(185));Mo(e,n,r),(!(J&2)||e!==_e)&&(e===_e&&(!(J&2)&&(pl|=n),je===4&&dn(e,Le)),it(e,r),n===1&&J===0&&!(t.mode&1)&&(Tr=xe()+500,cl&&Cn()))}function it(e,t){var n=e.callbackNode;Gp(e,t);var r=Li(e,e===_e?Le:0);if(r===0)n!==null&&yc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yc(n),t===1)e.tag===0?Xh(uu.bind(null,e)):Fd(uu.bind(null,e)),Wh(function(){!(J&6)&&Cn()}),n=null;else{switch(md(r)){case 1:n=va;break;case 4:n=fd;break;case 16:n=Di;break;case 536870912:n=pd;break;default:n=Di}n=Af(n,Tf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tf(e,t){if(Si=-1,ji=0,J&6)throw Error(_(327));var n=e.callbackNode;if(jr()&&e.callbackNode!==n)return null;var r=Li(e,e===_e?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xi(e,r);else{t=r;var o=J;J|=2;var i=Mf();(_e!==e||Le!==t)&&(Vt=null,Tr=xe()+500,Hn(e,t));do try{gm();break}catch(a){Pf(e,a)}while(!0);Ta(),Vi.current=i,J=o,ve!==null?t=0:(_e=null,Le=0,t=je)}if(t!==0){if(t===2&&(o=Ss(e),o!==0&&(r=o,t=Js(e,o))),t===1)throw n=_o,Hn(e,0),dn(e,r),it(e,xe()),n;if(t===6)dn(e,r);else{if(o=e.current.alternate,!(r&30)&&!hm(o)&&(t=Xi(e,r),t===2&&(i=Ss(e),i!==0&&(r=i,t=Js(e,i))),t===1))throw n=_o,Hn(e,0),dn(e,r),it(e,xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:An(e,tt,Vt);break;case 3:if(dn(e,r),(r&130023424)===r&&(t=Ya+500-xe(),10<t)){if(Li(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ls(An.bind(null,e,tt,Vt),t);break}An(e,tt,Vt);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Tt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pm(r/1960))-r,10<r){e.timeoutHandle=Ls(An.bind(null,e,tt,Vt),r);break}An(e,tt,Vt);break;case 5:An(e,tt,Vt);break;default:throw Error(_(329))}}}return it(e,xe()),e.callbackNode===n?Tf.bind(null,e):null}function Js(e,t){var n=co;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=Xi(e,t),e!==2&&(t=tt,tt=n,t!==null&&Zs(t)),e}function Zs(e){tt===null?tt=e:tt.push.apply(tt,e)}function hm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Mt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dn(e,t){for(t&=~Va,t&=~pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if(J&6)throw Error(_(327));jr();var t=Li(e,0);if(!(t&1))return it(e,xe()),null;var n=Xi(e,t);if(e.tag!==0&&n===2){var r=Ss(e);r!==0&&(t=r,n=Js(e,r))}if(n===1)throw n=_o,Hn(e,0),dn(e,t),it(e,xe()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,tt,Vt),it(e,xe()),null}function Qa(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Tr=xe()+500,cl&&Cn())}}function qn(e){pn!==null&&pn.tag===0&&!(J&6)&&jr();var t=J;J|=1;var n=St.transition,r=te;try{if(St.transition=null,te=1,e)return e()}finally{te=r,St.transition=n,J=t,!(J&6)&&Cn()}}function Xa(){at=yr.current,ae(yr)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kh(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(_a(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ri();break;case 3:Dr(),ae(rt),ae(Ue),Ia();break;case 5:$a(r);break;case 4:Dr();break;case 13:ae(fe);break;case 19:ae(fe);break;case 10:Pa(r.type._context);break;case 22:case 23:Xa()}n=n.return}if(_e=e,ve=e=kn(e.current,null),Le=at=t,je=0,_o=null,Va=pl=Zn=0,tt=co=null,Bn!==null){for(t=0;t<Bn.length;t++)if(n=Bn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Bn=null}return e}function Pf(e,t){do{var n=ve;try{if(Ta(),wi.current=Wi,Ki){for(var r=pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ki=!1}if(Jn=0,ze=Se=pe=null,so=!1,Co=0,Wa.current=null,n===null||n.return===null){je=1,_o=t,ve=null;break}e:{var i=e,l=n.return,a=n,c=t;if(t=Le,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var m=c,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=Jc(l);if(w!==null){w.flags&=-257,Zc(w,l,a,i,t),w.mode&1&&Gc(i,m,t),t=w,c=m;var b=t.updateQueue;if(b===null){var k=new Set;k.add(c),t.updateQueue=k}else b.add(c);break e}else{if(!(t&1)){Gc(i,m,t),Ga();break e}c=Error(_(426))}}else if(de&&a.mode&1){var L=Jc(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Zc(L,l,a,i,t),Da(Lr(c,a));break e}}i=c=Lr(c,a),je!==4&&(je=2),co===null?co=[i]:co.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=gf(i,c,t);Kc(i,g);break e;case 1:a=c;var d=i.type,u=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(vn===null||!vn.has(u)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=xf(i,a,t);Kc(i,v);break e}}i=i.return}while(i!==null)}Rf(n)}catch(S){t=S,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function Mf(){var e=Vi.current;return Vi.current=Wi,e===null?Wi:e}function Ga(){(je===0||je===3||je===2)&&(je=4),_e===null||!(Zn&268435455)&&!(pl&268435455)||dn(_e,Le)}function Xi(e,t){var n=J;J|=2;var r=Mf();(_e!==e||Le!==t)&&(Vt=null,Hn(e,t));do try{mm();break}catch(o){Pf(e,o)}while(!0);if(Ta(),J=n,Vi.current=r,ve!==null)throw Error(_(261));return _e=null,Le=0,je}function mm(){for(;ve!==null;)Of(ve)}function gm(){for(;ve!==null&&!Bp();)Of(ve)}function Of(e){var t=If(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?Rf(e):ve=t,Wa.current=null}function Rf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cm(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,ve=null;return}}else if(n=am(n,t,at),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);je===0&&(je=5)}function An(e,t,n){var r=te,o=St.transition;try{St.transition=null,te=1,xm(e,t,n,r)}finally{St.transition=o,te=r}return null}function xm(e,t,n,r){do jr();while(pn!==null);if(J&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Jp(e,i),e===_e&&(ve=_e=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ui||(ui=!0,Af(Di,function(){return jr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=St.transition,St.transition=null;var l=te;te=1;var a=J;J|=4,Wa.current=null,dm(e,n),Df(n,e),$h(_s),Ti=!!zs,_s=zs=null,e.current=n,fm(n),Up(),J=a,te=l,St.transition=i}else e.current=n;if(ui&&(ui=!1,pn=e,Qi=o),i=e.pendingLanes,i===0&&(vn=null),Wp(n.stateNode),it(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Yi)throw Yi=!1,e=Xs,Xs=null,e;return Qi&1&&e.tag!==0&&jr(),i=e.pendingLanes,i&1?e===Gs?uo++:(uo=0,Gs=e):uo=0,Cn(),null}function jr(){if(pn!==null){var e=md(Qi),t=St.transition,n=te;try{if(St.transition=null,te=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,Qi=0,J&6)throw Error(_(331));var o=J;for(J|=4,$=e.current;$!==null;){var i=$,l=i.child;if($.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var m=a[c];for($=m;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:ao(8,f,i)}var h=f.child;if(h!==null)h.return=f,$=h;else for(;$!==null;){f=$;var p=f.sibling,w=f.return;if(Ef(f),f===m){$=null;break}if(p!==null){p.return=w,$=p;break}$=w}}}var b=i.alternate;if(b!==null){var k=b.child;if(k!==null){b.child=null;do{var L=k.sibling;k.sibling=null,k=L}while(k!==null)}}$=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,$=l;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ao(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,$=g;break e}$=i.return}}var d=e.current;for($=d;$!==null;){l=$;var u=l.child;if(l.subtreeFlags&2064&&u!==null)u.return=l,$=u;else e:for(l=d;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fl(9,a)}}catch(S){me(a,a.return,S)}if(a===l){$=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,$=v;break e}$=a.return}}if(J=o,Cn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(ol,e)}catch{}r=!0}return r}finally{te=n,St.transition=t}}return!1}function du(e,t,n){t=Lr(n,t),t=gf(e,t,1),e=yn(e,t,1),t=Qe(),e!==null&&(Mo(e,1,t),it(e,t))}function me(e,t,n){if(e.tag===3)du(e,e,n);else for(;t!==null;){if(t.tag===3){du(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=Lr(n,e),e=xf(t,e,1),t=yn(t,e,1),e=Qe(),t!==null&&(Mo(t,1,e),it(t,e));break}}t=t.return}}function ym(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(Le&n)===n&&(je===4||je===3&&(Le&130023424)===Le&&500>xe()-Ya?Hn(e,0):Va|=n),it(e,t)}function $f(e,t){t===0&&(e.mode&1?(t=ei,ei<<=1,!(ei&130023424)&&(ei=4194304)):t=1);var n=Qe();e=qt(e,t),e!==null&&(Mo(e,t,n),it(e,n))}function vm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$f(e,n)}function wm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),$f(e,n)}var If;If=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,sm(e,t,n);nt=!!(e.flags&131072)}else nt=!1,de&&t.flags&1048576&&Bd(t,Ai,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bi(e,t),e=t.pendingProps;var o=Er(t,Ue.current);Sr(t,n),o=Fa(null,t,r,e,o,n);var i=Ba();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(i=!0,$i(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Oa(t),o.updater=dl,t.stateNode=o,o._reactInternals=t,Is(t,r,e,n),t=Bs(null,t,r,!0,i,n)):(t.tag=0,de&&i&&za(t),Ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=bm(r),e=_t(r,e),o){case 0:t=Fs(null,t,r,e,n);break e;case 1:t=tu(null,t,r,e,n);break e;case 11:t=qc(null,t,r,e,n);break e;case 14:t=eu(null,t,r,_t(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),Fs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),tu(e,t,r,o,n);case 3:e:{if(kf(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Yd(e,t),Ui(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Lr(Error(_(423)),t),t=nu(e,t,r,n,o);break e}else if(r!==o){o=Lr(Error(_(424)),t),t=nu(e,t,r,n,o);break e}else for(ut=xn(t.stateNode.containerInfo.firstChild),dt=t,de=!0,Lt=null,n=Wd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zr(),r===o){t=en(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return Qd(t),e===null&&Os(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ds(r,o)?l=null:i!==null&&Ds(r,i)&&(t.flags|=32),wf(e,t),Ye(e,t,l,n),t.child;case 6:return e===null&&Os(t),null;case 13:return bf(e,t,n);case 4:return Ra(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_r(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),qc(e,t,r,o,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,oe(Fi,r._currentValue),r._currentValue=l,i!==null)if(Mt(i.value,l)){if(i.children===o.children&&!rt.current){t=en(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Gt(-1,n&-n),c.tag=2;var m=i.updateQueue;if(m!==null){m=m.shared;var f=m.pending;f===null?c.next=c:(c.next=f.next,f.next=c),m.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Rs(i.return,n,t),a.lanes|=n;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Rs(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Sr(t,n),o=jt(o),r=r(o),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,o=_t(r,t.pendingProps),o=_t(r.type,o),eu(e,t,r,o,n);case 15:return yf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),bi(e,t),t.tag=1,ot(r)?(e=!0,$i(t)):e=!1,Sr(t,n),mf(t,r,o),Is(t,r,o,n),Bs(null,t,r,!0,e,n);case 19:return Sf(e,t,n);case 22:return vf(e,t,n)}throw Error(_(156,t.tag))};function Af(e,t){return dd(e,t)}function km(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,n,r){return new km(e,t,n,r)}function Ja(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bm(e){if(typeof e=="function")return Ja(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ga)return 11;if(e===xa)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ni(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ja(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ar:return Kn(n.children,o,i,t);case ma:l=8,o|=8;break;case as:return e=bt(12,n,t,o|2),e.elementType=as,e.lanes=i,e;case cs:return e=bt(13,n,t,o),e.elementType=cs,e.lanes=i,e;case us:return e=bt(19,n,t,o),e.elementType=us,e.lanes=i,e;case Qu:return hl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vu:l=10;break e;case Yu:l=9;break e;case ga:l=11;break e;case xa:l=14;break e;case an:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=bt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Kn(e,t,n,r){return e=bt(7,e,r,t),e.lanes=n,e}function hl(e,t,n,r){return e=bt(22,e,r,t),e.elementType=Qu,e.lanes=n,e.stateNode={isHidden:!1},e}function Jl(e,t,n){return e=bt(6,e,null,t),e.lanes=n,e}function Zl(e,t,n){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Za(e,t,n,r,o,i,l,a,c){return e=new Sm(e,t,n,a,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=bt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oa(i),e}function jm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ff(e){if(!e)return Sn;e=e._reactInternals;e:{if(tr(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(ot(n))return Ad(e,n,t)}return t}function Bf(e,t,n,r,o,i,l,a,c){return e=Za(n,r,!0,e,o,i,l,a,c),e.context=Ff(null),n=e.current,r=Qe(),o=wn(n),i=Gt(r,o),i.callback=t??null,yn(n,i,o),e.current.lanes=o,Mo(e,o,r),it(e,r),e}function ml(e,t,n,r){var o=t.current,i=Qe(),l=wn(o);return n=Ff(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yn(o,t,l),e!==null&&(Pt(e,o,l,i),vi(e,o,l)),l}function Gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qa(e,t){fu(e,t),(e=e.alternate)&&fu(e,t)}function Nm(){return null}var Uf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ec(e){this._internalRoot=e}gl.prototype.render=ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));ml(e,t,null,null)};gl.prototype.unmount=ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qn(function(){ml(null,e,null,null)}),t[Zt]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=yd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&wd(e)}};function tc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pu(){}function Cm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var m=Gi(l);i.call(m)}}var l=Bf(t,r,e,0,null,!1,!1,"",pu);return e._reactRootContainer=l,e[Zt]=l.current,ko(e.nodeType===8?e.parentNode:e),qn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var m=Gi(c);a.call(m)}}var c=Za(e,0,!1,null,null,!1,!1,"",pu);return e._reactRootContainer=c,e[Zt]=c.current,ko(e.nodeType===8?e.parentNode:e),qn(function(){ml(t,c,n,r)}),c}function yl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var c=Gi(l);a.call(c)}}ml(t,l,e,o)}else l=Cm(n,t,e,o,r);return Gi(l)}gd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qr(t.pendingLanes);n!==0&&(wa(t,n|1),it(t,xe()),!(J&6)&&(Tr=xe()+500,Cn()))}break;case 13:qn(function(){var r=qt(e,1);if(r!==null){var o=Qe();Pt(r,e,1,o)}}),qa(e,1)}};ka=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var n=Qe();Pt(t,e,134217728,n)}qa(e,134217728)}};xd=function(e){if(e.tag===13){var t=wn(e),n=qt(e,t);if(n!==null){var r=Qe();Pt(n,e,t,r)}qa(e,t)}};yd=function(){return te};vd=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};ws=function(e,t,n){switch(t){case"input":if(ps(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=al(r);if(!o)throw Error(_(90));Gu(r),ps(r,o)}}}break;case"textarea":Zu(e,n);break;case"select":t=n.value,t!=null&&vr(e,!!n.multiple,t,!1)}};id=Qa;ld=qn;var Em={usingClientEntryPoint:!1,Events:[Ro,fr,al,rd,od,Qa]},Xr={findFiberByHostInstance:Fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zm={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cd(e),e===null?null:e.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||Nm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!di.isDisabled&&di.supportsFiber)try{ol=di.inject(zm),Ft=di}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Em;pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tc(t))throw Error(_(200));return jm(e,t,null,n)};pt.createRoot=function(e,t){if(!tc(e))throw Error(_(299));var n=!1,r="",o=Uf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Za(e,1,!1,null,null,n,!1,r,o),e[Zt]=t.current,ko(e.nodeType===8?e.parentNode:e),new ec(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=cd(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return qn(e)};pt.hydrate=function(e,t,n){if(!xl(t))throw Error(_(200));return yl(null,e,t,!0,n)};pt.hydrateRoot=function(e,t,n){if(!tc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Uf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Bf(t,null,e,1,n??null,o,!1,i,l),e[Zt]=t.current,ko(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new gl(t)};pt.render=function(e,t,n){if(!xl(t))throw Error(_(200));return yl(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!xl(e))throw Error(_(40));return e._reactRootContainer?(qn(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1};pt.unstable_batchedUpdates=Qa;pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xl(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return yl(e,t,n,!1,r)};pt.version="18.3.1-next-f1338f8080-20240426";function Hf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hf)}catch(e){console.error(e)}}Hf(),Uu.exports=pt;var _m=Uu.exports,Kf,hu=_m;Kf=hu.createRoot,hu.hydrateRoot;const Dm="modulepreload",Lm=function(e,t){return new URL(e,t).href},mu={},nr=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(m=>{if(m=Lm(m,r),m in mu)return;mu[m]=!0;const f=m.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!r)for(let b=l.length-1;b>=0;b--){const k=l[b];if(k.href===m&&(!f||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${h}`))return;const w=document.createElement("link");if(w.rel=f?"stylesheet":Dm,f||(w.as="script"),w.crossOrigin="",w.href=m,c&&w.setAttribute("nonce",c),document.head.appendChild(w),f)return new Promise((b,k)=>{w.addEventListener("load",b),w.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${m}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};function Tm(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:l}=e;let a,c;const m=async(h=!0)=>{await c};async function f(){if("serviceWorker"in navigator){if(a=await nr(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:h}},[],import.meta.url).then(({Workbox:h})=>new h("./sw.js",{scope:"./",type:"classic"})).catch(h=>{l==null||l(h)}),!a)return;a.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),a.addEventListener("installed",h=>{h.isUpdate||r==null||r()}),a.register({immediate:t}).then(h=>{i?i("./sw.js",h):o==null||o(h)}).catch(h=>{l==null||l(h)})}}return c=f(),m}const qs=(e,t)=>t.some(n=>e instanceof n);let gu,xu;function Pm(){return gu||(gu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mm(){return xu||(xu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ea=new WeakMap,ql=new WeakMap,vl=new WeakMap;function Om(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",l)},i=()=>{n(Wn(e.result)),o()},l=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",l)});return vl.set(t,e),t}function Rm(e){if(ea.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",l),e.removeEventListener("abort",l)},i=()=>{n(),o()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",l),e.addEventListener("abort",l)});ea.set(e,t)}let ta={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ea.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Wf(e){ta=e(ta)}function $m(e){return Mm().includes(e)?function(...t){return e.apply(na(this),t),Wn(this.request)}:function(...t){return Wn(e.apply(na(this),t))}}function Im(e){return typeof e=="function"?$m(e):(e instanceof IDBTransaction&&Rm(e),qs(e,Pm())?new Proxy(e,ta):e)}function Wn(e){if(e instanceof IDBRequest)return Om(e);if(ql.has(e))return ql.get(e);const t=Im(e);return t!==e&&(ql.set(e,t),vl.set(t,e)),t}const na=e=>vl.get(e);function Am(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const l=indexedDB.open(e,t),a=Wn(l);return r&&l.addEventListener("upgradeneeded",c=>{r(Wn(l.result),c.oldVersion,c.newVersion,Wn(l.transaction),c)}),n&&l.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),o&&c.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),a}const Fm=["get","getKey","getAll","getAllKeys","count"],Bm=["put","add","delete","clear"],es=new Map;function yu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(es.get(t))return es.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Bm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Fm.includes(n)))return;const i=async function(l,...a){const c=this.transaction(l,o?"readwrite":"readonly");let m=c.store;return r&&(m=m.index(a.shift())),(await Promise.all([m[n](...a),o&&c.done]))[0]};return es.set(t,i),i}Wf(e=>({...e,get:(t,n,r)=>yu(t,n)||e.get(t,n,r),has:(t,n)=>!!yu(t,n)||e.has(t,n)}));const Um=["continue","continuePrimaryKey","advance"],vu={},ra=new WeakMap,Vf=new WeakMap,Hm={get(e,t){if(!Um.includes(t))return e[t];let n=vu[t];return n||(n=vu[t]=function(...r){ra.set(this,Vf.get(this)[t](...r))}),n}};async function*Km(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const n=new Proxy(t,Hm);for(Vf.set(n,t),vl.set(n,na(t));t;)yield n,t=await(ra.get(n)||t.continue()),ra.delete(n)}function wu(e,t){return t===Symbol.asyncIterator&&qs(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&qs(e,[IDBIndex,IDBObjectStore])}Wf(e=>({...e,get(t,n,r){return wu(t,n)?Km:e.get(t,n,r)},has(t,n){return wu(t,n)||e.has(t,n)}}));const Wm="nachumin-diary",Vm=1,Ji="kv",Ym="line-diary-entries-v1",At="rooms-v1",Fe=e=>`room-data-v1:${e}`,Qm=e=>`trash-v1:${e}:${Date.now()}`,Ci="declaration-v1",Do="marks-v1",Xm=["・","❤︎","🩷","💛","🩵","💜","✨","✔︎"],Vn=e=>`donelog-v1:${e}`,Yn=e=>`habits-v1:${e}`,Zi=e=>`habitlog-v1:${e}`,qi=e=>`habitseed-v1:${e}`,Lo=e=>`period-v1:${e}`,Qn=e=>`symptoms-v1:${e}`,fo=e=>`symptomlog-v1:${e}`,el=e=>`symptomseed-v1:${e}`,oa=e=>`futurescript-v1:${e}`,ts="futureseed-v1",Gm="future-main",ns="backup-v1",be="diary-main",Yf=Am(Wm,Vm,{upgrade(e){e.objectStoreNames.contains(Ji)||e.createObjectStore(Ji)}});async function K(e){return(await Yf).get(Ji,e)}async function H(e,t){return(await Yf).put(Ji,t,e)}async function Jm(){try{navigator.storage&&navigator.storage.persist&&await navigator.storage.persist()}catch{}}async function Zm(){const e=await K(At);if(e)return e;let t=await K(Ym);if(typeof t=="string")try{t=JSON.parse(t)}catch{t=null}const n=t&&typeof t=="object"?t:{};await H(Fe(be),n);const r=Object.keys(n).sort(),o=r[r.length-1],i=[{id:be,type:"diary",name:"日記",emoji:"💗",createdAt:Date.now(),lastAt:o?Date.now():0,preview:o?n[o].text.split(`
`)[0].slice(0,40):""}];return await H(At,i),i}const qm=5,eg=qm*60*60*1e3,Qf=()=>new Date(Date.now()-eg),Be=e=>String(e).padStart(2,"0"),ct=e=>`${e.getFullYear()}-${Be(e.getMonth()+1)}-${Be(e.getDate())}`,se=e=>e.split("-").join("/"),we=e=>{const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},ia=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],tg=["S","M","T","W","T","F","S"],la=e=>`${se(e)} ${ia[we(e).getDay()]}`,fi=(e,t,n)=>1+(8-new Date(e,t-1,1).getDay())%7+(n-1)*7,ng=e=>Math.floor(20.8431+.242194*(e-1980)-Math.floor((e-1980)/4)),rg=e=>Math.floor(23.2488+.242194*(e-1980)-Math.floor((e-1980)/4)),rs={};function og(e){if(rs[e])return rs[e];const t={},n=(r,o,i)=>{t[`${e}-${Be(r)}-${Be(o)}`]=i};n(1,1,"元日"),n(1,fi(e,1,2),"成人の日"),n(2,11,"建国記念の日"),n(2,23,"天皇誕生日"),n(3,ng(e),"春分の日"),n(4,29,"昭和の日"),n(5,3,"憲法記念日"),n(5,4,"みどりの日"),n(5,5,"こどもの日"),n(7,fi(e,7,3),"海の日"),n(8,11,"山の日"),n(9,fi(e,9,3),"敬老の日"),n(9,rg(e),"秋分の日"),n(10,fi(e,10,2),"スポーツの日"),n(11,3,"文化の日"),n(11,23,"勤労感謝の日");for(const r of Object.keys(t)){const o=we(r),i=new Date(o);i.setDate(i.getDate()+1);const l=new Date(o);l.setDate(l.getDate()+2),t[ct(l)]&&!t[ct(i)]&&i.getDay()!==0&&(t[ct(i)]="国民の休日")}for(const r of Object.keys({...t})){if(we(r).getDay()!==0)continue;const o=we(r);do o.setDate(o.getDate()+1);while(t[ct(o)]);t[ct(o)]="振替休日"}return rs[e]=t,t}const ig=e=>!!og(Number(e.slice(0,4)))[e],tl=e=>{if(ig(e))return"sun";const t=we(e).getDay();return t===0?"sun":t===6?"sat":""},Bg=e=>"¥"+Math.round(Number(e)||0).toLocaleString("ja-JP"),Ug=e=>e.slice(0,7),Hg=(e,t)=>{const[n,r]=e.split("-");return(t&&Number(n)===t?"":`${n}年`)+`${Number(r)}月`},et=()=>ct(Qf()),ku=()=>{const e=Qf();return e.setDate(e.getDate()-1),ct(e)},Xf=()=>{const e=new Date;return`${e.getHours()}:${Be(e.getMinutes())}`},Gf=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),lg=e=>String(e||"").replace(/[\/\\:*?"<>| -]/g,"_").replace(/\s+/g," ").trim()||"room";async function bu(e){try{return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.top="0",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}const Ee=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36),sg=e=>Object.keys(e).sort().map(t=>`🩷${la(t)}🩷 ${e[t].time}
${e[t].text}`).join(`

──────────

`),ag=e=>{const t={},n=e.split(/\n*─{3,}\n*/);for(const r of n){const o=r.trim();if(!o)continue;const i=o.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*(?:[（(]?(?:[A-Za-z]{3}|[日月火水木金土])[)）]?)?\s*🩷?\s*(\d{1,2}:\d{2})?\s*\n?([\s\S]*)$/u);if(!i)continue;const l=`${i[1]}-${Be(Number(i[2]))}-${Be(Number(i[3]))}`,a=i[5].trim();a&&(t[l]={text:a,time:i[4]||"0:00"})}return t},Kg=(e,t)=>{const n=[];let r="";for(const o of e)o.dateKey!==r&&(r=o.dateKey,n.length&&n.push(""),n.push(`🩷${se(r)}🩷`)),n.push(`${o.time?o.time+" ":""}${t(o.memberId)}「${o.text}」`);return n.join(`
`)},Wg=e=>{const t=[];let n=et(),r=null;const o=()=>{if(!r)return;let i=r.lines.join(`
`).trim();i.endsWith("」")&&(i=i.slice(0,-1)),i&&t.push({dateKey:r.dateKey,name:r.name,time:r.time,text:i}),r=null};for(const i of e.split(`
`)){const l=i.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(l){o(),n=`${l[1]}-${Be(Number(l[2]))}-${Be(Number(l[3]))}`;continue}if(r)r.lines.push(i);else{const c=i.match(/^(?:(\d{1,2}:\d{2})\s+)?(.+?)「([\s\S]*)$/u);if(!c)continue;r={dateKey:n,name:c[2].trim(),time:c[1]||"",lines:[c[3]]}}const a=r.lines[r.lines.length-1].trimEnd();a.endsWith("」")&&(r.lines[r.lines.length-1]=a,o())}return o(),t},cg=[{key:"morning",label:"朝",emoji:"🌅"},{key:"noon",label:"昼",emoji:"☀️"},{key:"night",label:"夜",emoji:"🌙"}],Vg=()=>{const e=new Date().getHours();return e>=5&&e<11?"morning":e>=11&&e<17?"noon":"night"},Yg=(e,t)=>{var i;const n=l=>{var a;return((a=t.find(c=>c.id===l))==null?void 0:a.name)||"？"},r={};for(const l of e)(r[i=l.dateKey]||(r[i]={morning:[],noon:[],night:[]}))[l.slot].push(l);const o=[];for(const l of Object.keys(r).sort()){const a=[];for(const c of cg){const m=r[l][c.key];if(!m.length)continue;const f=m.map(h=>n(h.memberId)+(h.memo&&h.memo.trim()?`(${h.memo.trim()})`:"")).join("・");a.push(`${c.emoji}${c.label}:${f}`)}a.length&&o.push(`🩷${se(l)}🩷 ${a.join(" / ")}`)}return o.join(`
`)},Qg=e=>{const t=[],n=r=>r.includes("朝")?"morning":r.includes("昼")?"noon":r.includes("夜")?"night":null;for(const r of e.split(`
`)){const o=r.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(.*)$/u);if(!o)continue;const i=`${o[1]}-${Be(Number(o[2]))}-${Be(Number(o[3]))}`,l=o[4];if(l.trim())for(const a of l.split("/")){const c=a.indexOf(":"),m=a.indexOf("："),f=c===-1?m:m===-1?c:Math.min(c,m);if(f===-1)continue;const h=n(a.slice(0,f));if(!h)continue;const p=a.slice(f+1);for(const w of p.split("・")){const b=w.trim().match(/^(.+?)(?:[(（]([\s\S]*)[)）])?$/u);if(!b)continue;const k=b[1].trim();k&&t.push({dateKey:i,slot:h,name:k,memo:(b[2]||"").trim()})}}}return t},Xg=e=>{var n;const t={};for(const r of e)(t[n=r.dateKey]||(t[n]={morning:[],noon:[],night:[]}))[r.slot].push(r);return t},Gg=(e,t)=>{let n=t;for(const l of e)l.dateKey<n&&(n=l.dateKey);we(t);const r=we(t);r.setDate(r.getDate()-34);const o=we(n)<r?we(n):r,i=[];for(let l=new Date(o);ct(l)<=t;l.setDate(l.getDate()+1))i.push(ct(l));return i},Jg=e=>{const t=[];for(const n of String(e||"").split(`
`)){let r=n.trim();r&&(/^🩷?\s*\d{4}[/-]\d{1,2}[/-]\d{1,2}\s*🩷?\s*$/u.test(r)||(r=r.replace(/^[★☆☐☑✓□■●○・\-*+•‣▪️\s]+/u,"").trim(),r&&t.push(r)))}return t},Zg=e=>{const t=[];let n=et();for(const r of e.split(`
`)){const o=r.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(o){n=`${o[1]}-${Be(Number(o[2]))}-${Be(Number(o[3]))}`;continue}const i=r.match(/^\s*(★\s*)?([☑☐✓])\s+(.+)$/u);if(!i)continue;const l=!!i[1],a=i[2]==="☑"||i[2]==="✓",c=i[3].trim();c&&t.push({dateKey:n,text:c,done:a,important:l})}return t},Jf="🩷 できたこと",ug=e=>{const t=(e||"").split(`
`),n=t.indexOf(Jf);if(n===-1)return{text:e||"",items:[]};const r=[];let o=n+1;for(;o<t.length&&t[o].startsWith("☑ ");){const a=t[o].match(/^☑ (.*?)(?: \((\d{1,2}:\d{2})\))?$/u);a&&r.push({text:a[1],time:a[2]||""}),o++}let i=n;return i-1>=0&&t[i-1]===""&&(i-=1),t.splice(i,o-i),{text:t.join(`
`).replace(/\n{3,}/g,`

`).replace(/\s+$/,""),items:r}},nl="🎬 今日のコマ: ",dg=e=>(e||"").split(`
`).filter(t=>!t.startsWith(nl)).join(`
`).replace(/^\n+/,""),fg=(e,t)=>{const n=dg(e).trim(),r=nl+t;return n?`${r}

${n}`:r},To=(e,t)=>{const n=we(e);return n.setDate(n.getDate()+t),ct(n)},Nr=(e,t)=>Math.round((we(t)-we(e))/864e5),qg=(e,t)=>{const n=we(e),r=n.getDate();n.setDate(1),n.setMonth(n.getMonth()+t);const o=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return n.setDate(Math.min(r,o)),ct(n)},ex=e=>{if(e<12)return`${e}ヶ月後`;const t=Math.floor(e/12),n=e%12;return n===0?`${t}年後`:n===6?`${t}年半後`:`${t}年${n}ヶ月後`},pg=e=>{const t=[...new Set(e||[])].sort();if(!t.length)return[];const n=[];for(const o of t){const i=n[n.length-1];i&&To(i.end,1)===o?i.end=o:n.push({start:o,end:o})}return n.map((o,i)=>({start:o.start,end:o.end,length:Nr(o.start,o.end)+1,cycle:i<n.length-1?Nr(o.start,n[i+1].start):null,ongoing:i===n.length-1})).reverse()},hg=(e,t,n=3)=>{const r=e.filter(c=>c.cycle!=null).map(c=>c.cycle);if(!r.length||!e.length)return null;const o=r.slice(0,n),i=Math.round(o.reduce((c,m)=>c+m,0)/o.length),l=e[0].start,a=To(l,i);return{next:a,avg:i,daysLeft:Nr(t,a),min:Math.min(...r),max:Math.max(...r),count:r.length}},mg={morning:"🌅",noon:"☀️",night:"🌙"},os="nachumin-diary-backup.json";function gg(e){if(!e||typeof e!="object"||Array.isArray(e))return"バックアップの形式が読めませんでした 🥺";if(e.app!=="nachumin-diary")return"これは Nachumin Lifelog のバックアップファイルではないみたい 🥺";if(!Array.isArray(e.rooms))return"ルームの情報が入っていません。ファイルが壊れているかも 🥺";if(e.rooms.some(t=>!t||typeof t!="object"||!t.id||!t.type))return"ルームの形式が壊れています 🥺";if(e.data!=null&&(typeof e.data!="object"||Array.isArray(e.data)))return"ルームの中身の形式が壊れています 🥺";for(const t of["doneLogs","habits","habitLogs","habitSeeds","periods","symptoms","symptomLogs","symptomSeeds","futureScripts"])if(e[t]!=null&&(typeof e[t]!="object"||Array.isArray(e[t])))return`${t} の形式が壊れています 🥺`;return null}function xg(e){const t={rooms:(e.rooms||[]).length,items:0},n=r=>r==="talk"?"messages":r==="todo"?"todos":r==="darelog"?"records":r==="expense"?"expenses":r==="challenge"?"challenges":r==="future"?"opened":null;for(const r of e.rooms||[]){const o=e.data?e.data[r.id]:void 0;if(!o)continue;const i=n(r.type);t.items+=i?(o[i]||[]).length:Object.keys(o).length}return t}function is(e,t){var i,l;if(e.type==="talk"){const a=t&&t.messages||[],c=a[a.length-1];return{previewName:c?(f=>{var h;return((h=(e.members||[]).find(p=>p.id===f))==null?void 0:h.name)||""})(c.memberId):"",preview:typeof(c==null?void 0:c.text)=="string"?c.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(c?Date.now():0)}}if(e.type==="todo"){const a=t&&t.todos||[],c=a[a.length-1];return{preview:typeof(c==null?void 0:c.text)=="string"?`${c.done?"☑":"☐"} ${c.text.split(`
`)[0]}`.slice(0,40):"",todoOpen:a.filter(m=>!m.done&&!m.deferred).length,lastAt:e.lastAt||(c?Date.now():0)}}if(e.type==="darelog"){const a=t&&t.records||[],c=a[a.length-1],m=f=>{var h;return((h=(e.members||[]).find(p=>p.id===f))==null?void 0:h.name)||""};return{preview:c?`${mg[c.slot]||""} ${m(c.memberId)}`.trim():"",lastAt:e.lastAt||(c?Date.now():0)}}if(e.type==="challenge"){const a=t&&t.challenges||[],c=[...a].sort((m,f)=>{var h,p;return(((h=f.records)==null?void 0:h.length)||0)-(((p=m.records)==null?void 0:p.length)||0)})[0];return{preview:c?`${c.emoji||"🏁"} ${c.name} ${((i=c.records)==null?void 0:i.length)||0}/${c.target}`:"",lastAt:e.lastAt||(a.length?Date.now():0)}}if(e.type==="expense"){const a=t&&t.expenses||[],c=a[a.length-1];return{preview:c?`${(f=>{var h;return((h=(e.categories||[]).find(p=>p.id===f))==null?void 0:h.name)||""})(c.categoryId)} ¥${(c.amount||0).toLocaleString("ja-JP")}`:"",lastAt:e.lastAt||(c?Date.now():0)}}if(e.type==="future"){const a=t&&t.opened||[],c=a[a.length-1];return{preview:typeof(c==null?void 0:c.text)=="string"?c.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(c?Date.now():0)}}const n=t&&typeof t=="object"?t:{},r=Object.keys(n).sort(),o=r[r.length-1];return{preview:typeof((l=n[o])==null?void 0:l.text)=="string"?n[o].text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(o?Date.now():0)}}async function Su(){const e=await K(At)||[],t={};for(const w of e){const b=await K(Fe(w.id));b!==void 0&&(t[w.id]=b)}const n=await K(Ci)||null,r={},o={},i={},l={},a={},c={},m={},f={},h={};for(const w of e){const b=await K(Vn(w.id));b&&Object.keys(b).length&&(r[w.id]=b);const k=await K(Yn(w.id));Array.isArray(k)&&k.length&&(o[w.id]=k);const L=await K(Zi(w.id));L&&Object.keys(L).length&&(i[w.id]=L),await K(qi(w.id))&&(l[w.id]=!0);const g=await K(Lo(w.id));Array.isArray(g==null?void 0:g.days)&&g.days.length&&(a[w.id]=g.days);const d=await K(Qn(w.id));Array.isArray(d)&&d.length&&(c[w.id]=d);const u=await K(fo(w.id));u&&Object.keys(u).length&&(m[w.id]=u),await K(el(w.id))&&(f[w.id]=!0);const v=await K(oa(w.id));Array.isArray(v)&&v.length&&(h[w.id]=v)}const p=await K(Do)||null;return{app:"nachumin-diary",version:1,exportedAt:new Date().toISOString(),rooms:e,data:t,declaration:n,doneLogs:r,habits:o,habitLogs:i,habitSeeds:l,periods:a,symptoms:c,symptomLogs:m,symptomSeeds:f,futureScripts:h,marks:p}}const yg=e=>e.map((t,n)=>[t,n]).sort((t,n)=>t[0].dateKey<n[0].dateKey?-1:t[0].dateKey>n[0].dateKey?1:t[1]-n[1]).map(([t])=>t);async function vg(e){var c,m;if(!e||e.app!=="nachumin-diary"||!Array.isArray(e.rooms))throw new Error("invalid-backup");const t=await K(At)||[],n=new Map(t.map(f=>[f.id,{...f}]));let r=0,o=0;for(const f of e.rooms){const h=e.data?e.data[f.id]:void 0,p=f.type==="talk"?"messages":f.type==="todo"?"todos":f.type==="darelog"?"records":f.type==="expense"?"expenses":f.type==="challenge"?"challenges":f.type==="future"?"opened":null,w=k=>p==="messages"?`${k.dateKey} ${k.memberId} ${k.text}`:p==="todos"?`${k.dateKey} ${k.text}`:p==="records"?`${k.dateKey} ${k.slot} ${k.memberId}`:k.id;if(!n.has(f.id)){h!==void 0&&await H(Fe(f.id),h),n.set(f.id,{...f,...is(f,h)}),r+=1,p?o+=((c=h==null?void 0:h[p])==null?void 0:c.length)||0:o+=h?Object.keys(h).length:0;continue}const b=n.get(f.id);if(p){const k=await K(Fe(f.id))||{},L=k[p]||[],g=new Set(L.map(w));let d=L.slice();for(const S of(h==null?void 0:h[p])||[])g.has(w(S))||(g.add(w(S)),d.push(S),o+=1);p==="messages"&&(d=yg(d));const u={...k,[p]:d};for(const S of Object.keys(h||{}))S!==p&&u[S]===void 0&&(u[S]=h[S]);await H(Fe(f.id),u);let v={...b};if(f.type==="talk"||f.type==="darelog"){const S=b.members||[],z=new Set(S.map(D=>D.id));v.members=S.concat((f.members||[]).filter(D=>!z.has(D.id)))}n.set(f.id,{...v,...is(v,u)})}else{const L={...await K(Fe(f.id))||{}};for(const g of Object.keys(h||{}))L[g]||(L[g]=h[g],o+=1);await H(Fe(f.id),L),n.set(f.id,{...b,...is(b,L)})}}if(e.doneLogs)for(const[f,h]of Object.entries(e.doneLogs)){const p=Vn(f),b={...await K(p)||{}};for(const[k,L]of Object.entries(h)){const g=(b[k]||[]).slice();for(const d of L)g.some(u=>u.text===d.text&&u.time===d.time)||g.push(d);b[k]=g}await H(p,b)}const i={};if(e.habits)for(const[f,h]of Object.entries(e.habits)){if(!Array.isArray(h))continue;const p=await K(Yn(f));if(p===void 0){await H(Yn(f),h);continue}const w=Array.isArray(p)?p:[],b=new Set(w.map(d=>d.id)),k=new Map(w.filter(d=>(d.name||"").trim()).map(d=>[d.name.trim(),d.id])),L=w.slice(),g={};for(const d of h){if(!d||!d.id)continue;if(b.has(d.id)){g[d.id]=d.id;continue}const u=(d.name||"").trim(),v=u?k.get(u):null;if(v){g[d.id]=v;continue}L.push(d),b.add(d.id),u&&k.set(u,d.id),g[d.id]=d.id}L.length!==w.length&&await H(Yn(f),L),i[f]=g}if(e.habitSeeds)for(const f of Object.keys(e.habitSeeds))e.habitSeeds[f]&&await H(qi(f),!0);if(e.periods)for(const[f,h]of Object.entries(e.periods)){if(!Array.isArray(h))continue;const p=((m=await K(Lo(f)))==null?void 0:m.days)||[];await H(Lo(f),{days:[...new Set([...p,...h])].sort()})}const l={};if(e.symptoms)for(const[f,h]of Object.entries(e.symptoms)){if(!Array.isArray(h))continue;const p=await K(Qn(f));if(p===void 0){await H(Qn(f),h);continue}const w=Array.isArray(p)?p:[],b=new Set(w.map(d=>d.id)),k=new Map(w.filter(d=>(d.name||"").trim()).map(d=>[d.name.trim(),d.id])),L=w.slice(),g={};for(const d of h){if(!d||!d.id)continue;if(b.has(d.id)){g[d.id]=d.id;continue}const u=(d.name||"").trim(),v=u?k.get(u):null;if(v){g[d.id]=v;continue}L.push(d),b.add(d.id),u&&k.set(u,d.id),g[d.id]=d.id}L.length!==w.length&&await H(Qn(f),L),l[f]=g}if(e.symptomSeeds)for(const f of Object.keys(e.symptomSeeds))e.symptomSeeds[f]&&await H(el(f),!0);if(e.futureScripts)for(const[f,h]of Object.entries(e.futureScripts)){if(!Array.isArray(h)||!h.length)continue;const p=await K(oa(f))||[],w=new Set(p.map(k=>k.id)),b=h.filter(k=>k&&k.id&&!w.has(k.id));b.length&&(await H(oa(f),[...p,...b]),o+=b.length)}if(e.symptomLogs)for(const[f,h]of Object.entries(e.symptomLogs)){const p=fo(f),b={...await K(p)||{}},k=l[f]||{};for(const[L,g]of Object.entries(h)){const d=(g||[]).map(u=>k[u]||u);b[L]=[...new Set([...b[L]||[],...d])]}await H(p,b)}if(e.habitLogs)for(const[f,h]of Object.entries(e.habitLogs)){const p=i[f]||{},w=Zi(f),k={...await K(w)||{}};for(const[L,g]of Object.entries(h)){const d=(g||[]).map(u=>p[u]||u);k[L]=[...new Set([...k[L]||[],...d])]}await H(w,k)}if(Array.isArray(e.marks)&&e.marks.length){const f=await K(Do);(!Array.isArray(f)||!f.length)&&await H(Do,e.marks)}const a=[...n.values()];return await H(At,a),{addedRooms:r,addedItems:o,rooms:a}}const $n="M12 20.5s-7.5-5-7.5-10a4.2 4.2 0 0 1 7.5-2.6A4.2 4.2 0 0 1 19.5 10.5c0 5-7.5 10-7.5 10z",wg=`<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>
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
<path d='${$n}' transform='translate(96 60) scale(1.6)'/>
<path d='${$n}' transform='translate(24 96) scale(0.9) rotate(-12 12 12)'/>
<path d='${$n}' transform='translate(190 60) scale(0.8) rotate(14 12 12)'/>
<path d='${$n}' transform='translate(130 150) scale(1.1) rotate(-8 12 12)'/>
<path d='${$n}' transform='translate(30 208) scale(0.8) rotate(10 12 12)'/>
</g>
<g fill='#f8b1d6'>
<path d='${$n}' transform='translate(100 64) scale(1.1) '/>
<path d='${$n}' transform='translate(133 153) scale(0.7)'/>
</g>
</svg>`,pi=`url("data:image/svg+xml,${encodeURIComponent(wg)}")`,tx=["#ffffff","#fff5fa","#ffd9ec","#ffc4e1","#ff9fd0","#e0629f","#d4f0ff","#c9f5f2","#d9ffe3","#e8dcff","#f0f0f0","#2b2430"],ls=["#9C27B0","#E91E63","#FFEB3B","#2196F3","#4CAF50","#FF9800","#F44336","#00BCD4","#3F51B5","#8BC34A","#FF4081","#009688"],sa=["#ff6fb2","#c58cff","#6fb8ff","#5fd6b0","#ffcf5f","#ff9d6f","#7ed957","#ff8fa8"],to=sa[0],ju=e=>{const t=e||to;return{background:`linear-gradient(163deg, #ffffff 0%, #fff6fb 40%, ${t}2e 100%)`,boxShadow:`0 6px 13px ${t}42, 0 2px 0 ${t}66, inset 0 1.5px 0 #ffffff`,borderColor:`${t}55`}},nx=[{key:"auto",label:"自動",value:null},{key:"white",label:"白",value:"#ffffff"},{key:"black",label:"黒",value:"#222028"},{key:"pink",label:"ピンク",value:"#ff2d87"}],kg=e=>{const t=String(e).replace("#","");if(t.length<6)return"#4a3140";const n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),o=parseInt(t.slice(4,6),16);return .299*n+.587*r+.114*o<140?"#fff5fa":"#4a3140"},rx=e=>e&&e.textColor?e.textColor:kg(e&&e.color),Nu=`
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

  /* ===== 🔮 未来日記 ===== */
  .fut-scroll { flex: 1; overflow-y: auto; padding: 14px 14px calc(28px + env(safe-area-inset-bottom)); }
  .fut-intro {
    white-space: pre-wrap; text-align: center; color: #a4517f;
    font-size: 13.5px; line-height: 1.9; font-weight: 700;
    padding: 26px 10px 10px;
  }
  .fut-card {
    position: relative;
    background: linear-gradient(155deg,#fff 0%,#fff4fb 40%,#ffe9f7 100%);
    border: 2px solid #fff; border-radius: 22px;
    padding: 13px 16px 10px; margin-bottom: 14px;
    box-shadow: 0 8px 22px rgba(255,20,147,.20), inset 0 2px 0 #fff;
  }
  .fut-card.fave { box-shadow: 0 8px 24px rgba(255,20,147,.38), inset 0 2px 0 #fff; border-color: #ffd6ec; }
  .fut-card.opening { animation: fut-in .9s cubic-bezier(.25,1.4,.5,1); }
  @keyframes fut-in {
    0% { opacity: 0; transform: translateY(14px) scale(.96); }
    60% { opacity: 1; transform: translateY(0) scale(1.02); }
    100% { transform: scale(1); }
  }
  .fut-top { display: flex; align-items: center; gap: 8px; margin-bottom: 7px; }
  .fut-date { font-size: 12.5px; font-weight: 800; color: #d6317f; letter-spacing: .02em; }
  .fut-date.sun { color: #ff3d8b; }
  .fut-date.sat { color: #2f7fd6; }
  .fut-ahead {
    font-size: 10.5px; font-weight: 800; color: #fff;
    background: linear-gradient(120deg,#ff1493,#c33bff);
    border-radius: 999px; padding: 3px 9px; letter-spacing: .02em;
  }
  .fut-heart {
    margin-left: auto; background: none; border: none; cursor: pointer;
    font-size: 17px; line-height: 1; padding: 2px 2px; color: #e59ec4;
    -webkit-tap-highlight-color: transparent;
  }
  .fut-heart.on { color: #ff1493; }
  .fut-text {
    white-space: pre-wrap; overflow-wrap: anywhere;
    font-size: 14px; line-height: 1.95; color: #4a3140;
  }
  .fut-got { margin-top: 8px; font-size: 10px; color: #c58fb0; text-align: right; }
  .fut-foot { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 6px 0 4px; }
  .fut-open {
    display: flex; align-items: center; justify-content: center; gap: 9px;
    width: 100%; max-width: 340px; padding: 17px 18px;
    background: linear-gradient(120deg,#ff1493 0%,#ff45b0 45%,#c33bff 100%);
    color: #fff; border: none; border-radius: 22px; cursor: pointer;
    font-size: 15.5px; font-weight: 800; letter-spacing: .03em;
    box-shadow: 0 10px 26px rgba(255,20,147,.45), inset 0 2px 0 rgba(255,255,255,.5);
    -webkit-tap-highlight-color: transparent;
  }
  .fut-open:active { transform: scale(.975); }
  .fut-open-ic { font-size: 21px; }
  .fut-msg {
    white-space: pre-wrap; text-align: center; color: #a4517f;
    font-size: 12.5px; line-height: 1.85; font-weight: 700; padding: 8px 0;
  }
  .fut-subs { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; justify-content: center; }
  .fut-reset {
    background: none; border: none; cursor: pointer;
    font-size: 11px; color: #c58fb0; text-decoration: underline; padding: 4px 8px;
  }
  .fut-draft { font-size: 10.5px; color: #c58fb0; text-align: center; }
  .fut-fmt {
    background: #fff2f9; border: 1.5px dashed #ffbfe0; border-radius: 12px;
    padding: 9px 11px; margin: 0; font-size: 11px; line-height: 1.7;
    color: #a4517f; white-space: pre-wrap; overflow-x: auto;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
  .fut-err {
    background: #fff0f4; border: 1.5px solid #ffb3c8; border-radius: 12px;
    padding: 8px 11px; font-size: 11.5px; line-height: 1.7; color: #c22a5c;
  }

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
    border: none; padding: 0; cursor: pointer; -webkit-tap-highlight-color: transparent;
  }
  .ch-cell.on:active { transform: scale(.88); }
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
  .ch-dl-row { margin-top: 5px; padding-top: 5px; border-top: 1px dashed #f0a6cf; }
  .ch-ok {
    display: inline-block; margin-left: 6px; background: #1e9e5b; color: #fff;
    border-radius: 999px; padding: 2px 8px; font-size: 10.5px; font-weight: 800;
  }
  .ch-ng {
    display: inline-block; margin-left: 6px; background: #ff1478; color: #fff;
    border-radius: 999px; padding: 2px 8px; font-size: 10.5px; font-weight: 800;
  }
  .ch-dl-edit { display: flex; gap: 6px; align-items: center; }
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
  .hl-cell { cursor: pointer; -webkit-tap-highlight-color: transparent; }
  .hl-cell:active { transform: scale(.85); }
  .hl-cell.blank { border-color: transparent; background: transparent; cursor: default; }
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
  .mem-copy { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
  .mem-name { font-size: 13.5px; font-weight: 700; min-width: 0;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .mem-note { font-size: 10.5px; line-height: 1.35; color: #a4517f; min-width: 0;
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
`;function Zf(e,t,n){if(!e)return;const r=e.selectionStart??e.value.length,o=e.selectionEnd??e.value.length,i=e.value.slice(0,r)+t+e.value.slice(o);n(i),requestAnimationFrame(()=>{try{e.focus();const l=r+t.length;e.setSelectionRange(l,l)}catch{}})}function qf({marks:e,onInsert:t,onEdit:n}){return s.jsxs("div",{className:"markbar",children:[e.map((r,o)=>s.jsx("button",{className:"markchip",onMouseDown:i=>i.preventDefault(),onClick:()=>t(r),children:r},o)),s.jsx("button",{className:"markchip mark-edit",onMouseDown:r=>r.preventDefault(),onClick:n,"aria-label":"マークを編集",children:"⚙︎"})]})}function ep(e=!0){const[t,n]=E.useState(0);return E.useEffect(()=>{if(!e||!window.visualViewport){n(0);return}const r=window.visualViewport,o=()=>n(Math.max(0,window.innerHeight-r.height-r.offsetTop));return o(),r.addEventListener("resize",o),r.addEventListener("scroll",o),()=>{r.removeEventListener("resize",o),r.removeEventListener("scroll",o)}},[e]),t}function bg({initial:e,appendNewline:t,marks:n,onEditMarks:r,onSave:o,onCancel:i,onDelete:l,placeholder:a,bottomToolbar:c}){const[m,f]=E.useState(t?e?e+`
`:"":e||""),h=ep(!!c),p=E.useRef(null),w=()=>{const g=p.current;g&&(g.style.height="auto",g.style.height=Math.min(g.scrollHeight,Math.round(window.innerHeight*.42))+"px")};E.useEffect(()=>{const g=p.current;if(!g)return;g.focus(),w();const d=g.value.length;g.setSelectionRange(d,d),g.scrollTop=g.scrollHeight},[]);const b=g=>Zf(p.current,g+" ",d=>{f(d),requestAnimationFrame(w)}),k=n?s.jsx(qf,{marks:n,onInsert:b,onEdit:r}):null,L=s.jsxs("div",{className:"inline-btns",children:[l&&s.jsx("button",{className:"ie-del",onClick:l,children:"削除"}),s.jsx("button",{className:"ie-cancel",onClick:i,children:"キャンセル"}),s.jsx("button",{className:"ie-save",onClick:()=>o(m),"aria-label":"保存",children:"💌"})]});return s.jsxs("div",{className:"inline-edit",onClick:g=>g.stopPropagation(),children:[!c&&k,s.jsx("textarea",{ref:p,className:"inline-ta",value:m,placeholder:a,onChange:g=>{f(g.target.value),w()}}),c?s.jsxs("div",{className:"edit-toolbar",style:{bottom:h},onClick:g=>g.stopPropagation(),children:[k,L]}):L]})}function Sg(e,t=500){const n=E.useRef({}),r=l=>{if(typeof e!="function"||l.touches&&l.touches.length!==1)return;const a=l.touches?l.touches[0]:l;n.current.x=a.clientX,n.current.y=a.clientY,n.current.fired=!1,clearTimeout(n.current.timer),n.current.timer=setTimeout(()=>{n.current.fired=!0;try{navigator.vibrate&&navigator.vibrate(15)}catch{}e({x:n.current.x,y:n.current.y})},t)},o=l=>{const a=l.touches?l.touches[0]:l;(Math.abs(a.clientX-n.current.x)>10||Math.abs(a.clientY-n.current.y)>10)&&clearTimeout(n.current.timer)},i=()=>clearTimeout(n.current.timer);return{onTouchStart:r,onTouchMove:o,onTouchEnd:i,onTouchCancel:i,onContextMenu:l=>{typeof e=="function"&&(l.preventDefault(),e({x:l.clientX,y:l.clientY}))},onClickCapture:l=>{n.current.fired&&(l.stopPropagation(),l.preventDefault(),n.current.fired=!1)}}}function Cu({onLongPress:e,longPressMs:t,children:n,...r}){const o=Sg(e,t);return s.jsx("div",{...r,...o,children:n})}function jg({x:e,y:t,onCopy:n,onEdit:r,onDelete:o,onClose:i,top:l,extra:a}){const f=E.useRef(null),[h,p]=E.useState(null);return E.useLayoutEffect(()=>{const w=f.current;if(!w)return;const b=w.offsetHeight,k=window.innerWidth,L=window.innerHeight,g=Math.max(8,Math.min(e-168/2,k-168-8));let d=t+8;d+b>L-8&&(d=t-8-b),d<8&&(d=Math.max(8,L-b-8)),p({left:g,top:d})},[e,t,l,a,r,o]),s.jsx("div",{className:"ctx-overlay",onClick:i,onContextMenu:w=>w.preventDefault(),children:s.jsxs("div",{ref:f,className:"ctx-menu",style:{left:h?h.left:Math.max(8,Math.min(e-168/2,window.innerWidth-168-8)),top:h?h.top:t+8,width:168,maxHeight:`calc(100vh - ${8*2}px)`,overflowY:"auto",visibility:h?"visible":"hidden"},onClick:w=>w.stopPropagation(),children:[(l||[]).map((w,b)=>s.jsx("button",{className:"ctx-item ctx-top",onClick:w.onClick,children:w.label},b)),s.jsx("button",{className:"ctx-item",onClick:n,children:"📋 コピー"}),r&&s.jsx("button",{className:"ctx-item",onClick:r,children:"✏️ 編集"}),(a||[]).map((w,b)=>s.jsx("button",{className:"ctx-item",onClick:w.onClick,children:w.label},b)),o&&s.jsx("button",{className:"ctx-item ctx-del",onClick:o,children:"🗑 削除"})]})})}function tp({message:e,confirmLabel:t="削除する",onConfirm:n,onCancel:r}){return s.jsx("div",{className:"overlay confirm-over",onClick:r,children:s.jsxs("div",{className:"panel confirm-panel",onClick:o=>o.stopPropagation(),children:[s.jsx("div",{className:"confirm-msg",children:e}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-close",onClick:r,children:"キャンセル"}),s.jsx("button",{className:"p-del arm",onClick:n,children:t})]})]})})}function Ng({habits:e,habitAch:t,onToggle:n,onClose:r,onManage:o}){const i=et(),[l,a]=E.useState(i.slice(0,7)),[c,m]=l.split("-").map(Number),f=new Date(c,m,0).getDate(),h=i.slice(0,7),p=E.useMemo(()=>{const u=[];for(let v=1;v<=f;v++){const S=`${c}-${Be(m)}-${Be(v)}`;u.push({d:v,key:S,dow:new Date(c,m-1,v).getDay(),isToday:S===i,future:S>i})}return u},[c,m,f,i]),w=u=>{const v=new Date(c,m-1+u,1);a(`${v.getFullYear()}-${Be(v.getMonth()+1)}`)},b=(u,v)=>u.freq==="weekly"?(u.days||[]).includes(v):!0,k=u=>{let v=0,S=0;for(const z of p)b(u,z.dow)&&!z.future&&(S+=1),(t[z.key]||[]).includes(u.id)&&(v+=1);return{done:v,total:S}},L=e.filter(u=>u.freq!=="weekly"),g=e.filter(u=>u.freq==="weekly"),d=u=>{const{done:v,total:S}=k(u),z=S?v/S:0,D=v===0?0:z>=.8?3:z>=.5?2:z>=.25?1:0;return s.jsxs("div",{className:"hv-row",children:[s.jsxs("div",{className:"hv-name",children:[s.jsx("span",{className:"hv-emoji",children:u.emoji||"🩷"}),s.jsx("span",{className:"hv-nm",children:u.name})]}),s.jsx("div",{className:"hv-cells",children:p.map(T=>{const F=b(u,T.dow),I=(t[T.key]||[]).includes(u.id);return s.jsx("button",{className:"hv-cell"+(I?" on":"")+(F||I?"":" off")+(T.isToday?" today":"")+(T.future?" future":""),disabled:!F&&!I||T.future,"aria-label":`${m}月${T.d}日 ${u.name}${I?" 達成ずみ":""}`,"aria-pressed":I,onClick:()=>n(T.key,u.id),children:I?"♥":""},T.key)})}),s.jsxs("div",{className:"hv-count lv"+D,children:[s.jsx("span",{className:"hv-n",children:v}),s.jsxs("span",{className:"hv-d",children:["/",S]})]})]},u.id)};return s.jsxs("div",{className:"hv-screen",children:[s.jsxs("div",{className:"hd",children:[s.jsx("button",{className:"back-btn","aria-label":"とじる",onClick:r,children:"‹"}),s.jsxs("div",{style:{minWidth:0},children:[s.jsx("div",{className:"hd-title",children:"🎯 習慣ビュー"}),s.jsx("div",{className:"hd-sub",children:"スタンプで振り返る"})]}),s.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"習慣を編集",onClick:o,children:"⚙︎"})]}),s.jsxs("div",{className:"hv-monthbar",children:[s.jsx("button",{className:"hv-mbtn","aria-label":"前の月",onClick:()=>w(-1),children:"‹"}),s.jsxs("div",{className:"hv-month",children:[c,"年",m,"月"]}),s.jsx("button",{className:"hv-mbtn","aria-label":"次の月",onClick:()=>w(1),children:"›"}),l!==h&&s.jsx("button",{className:"hv-now",onClick:()=>a(h),children:"今月"})]}),e.length===0?s.jsxs("div",{className:"empty",children:["まだ習慣がありません。",`
`,"右上の⚙︎から追加してね💗"]}):s.jsx("div",{className:"hv-scroll",children:s.jsxs("div",{className:"hv-table",children:[s.jsxs("div",{className:"hv-row hv-head",children:[s.jsx("div",{className:"hv-name hv-corner",children:"習慣"}),s.jsx("div",{className:"hv-cells",children:p.map(u=>s.jsxs("div",{className:"hv-dcell"+(u.isToday?" today":"")+(tl(u.key)?" "+tl(u.key):""),children:[s.jsx("span",{className:"hv-dnum",children:u.d}),s.jsx("span",{className:"hv-dow",children:tg[u.dow]})]},u.key))}),s.jsx("div",{className:"hv-count hv-corner",children:"今月"})]}),L.map(d),g.length>0&&s.jsx("div",{className:"hv-seprow",children:s.jsx("span",{className:"hv-seplabel",children:"毎週の習慣"})}),g.map(d)]})})]})}const Eu=40;function Cg({periodDays:e,symptoms:t,symptomLog:n,onTogglePeriod:r,onToggleSymptom:o,onClose:i,onManage:l}){const a=et(),[c,m]=E.useState("before"),f=E.useMemo(()=>pg(e),[e]),h=E.useMemo(()=>hg(f,a),[f,a]),p=u=>t.find(v=>v.id===u),w=n[a]||[],b=u=>e.includes(u),k=E.useMemo(()=>f.map(u=>{let v;const S=Math.max(Nr(u.start,a)+1,Nr(u.start,u.end)+1)+3;u.cycle!=null?v=u.cycle:c==="before"&&h?v=Math.max(Nr(u.start,h.next),S):v=S,v=Math.min(Math.max(v,1),Eu);const z=[];for(let D=0;D<v;D++)z.push(To(u.start,D));return{...u,days:z}}),[f,c,h,a]),L=Math.min(Eu,Math.max(1,...k.map(u=>u.days.length))),g=[];for(let u=0;u<L;u++)g.push(String(c==="start"?u+1:-(L-u)));const d=u=>{const v=new Array(L).fill(null);if(c==="start")u.days.slice(0,L).forEach((S,z)=>{v[z]=S});else{const S=u.days.slice(-L);S.forEach((z,D)=>{v[L-S.length+D]=z})}return v};return s.jsxs("div",{className:"hl-screen",children:[s.jsxs("div",{className:"hd",children:[s.jsx("button",{className:"back-btn","aria-label":"とじる",onClick:i,children:"‹"}),s.jsxs("div",{style:{minWidth:0},children:[s.jsx("div",{className:"hd-title",children:"🌡️ 体調"}),s.jsx("div",{className:"hd-sub",children:"生理周期と体調のクセを見る"})]}),s.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"項目の設定",onClick:l,children:"⚙︎"})]}),s.jsxs("div",{className:"hl-scroll",children:[s.jsx("div",{className:"hl-pred"+(h&&h.daysLeft<=3?" soon":""),children:h?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"hl-pred-l",children:"次の生理（予測）"}),s.jsxs("div",{className:"hl-pred-d",children:[se(h.next).slice(5),s.jsx("span",{className:"hl-pred-in",children:h.daysLeft>0?`あと${h.daysLeft}日`:h.daysLeft===0?"今日かも":`${-h.daysLeft}日すぎ`})]}),s.jsxs("div",{className:"hl-pred-sub",children:["平均 ",h.avg,"日周期",h.count>1?`（${h.min}〜${h.max}日 / ${h.count}回分）`:`（${h.count}回分）`]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"hl-pred-l",children:"次の生理（予測）"}),s.jsx("div",{className:"hl-pred-d",children:"まだ出せません"}),s.jsx("div",{className:"hl-pred-sub",children:"生理を2回ぶん記録すると予測できます🩷"})]})}),s.jsx("div",{className:"f-label",children:"今日の記録"}),s.jsxs("div",{className:"hl-today",children:[s.jsxs("button",{className:"hl-chip hl-period"+(b(a)?" on":""),onClick:()=>r(a),children:["🩸 生理",b(a)?" ✓":""]}),t.map(u=>{const v=w.includes(u.id);return s.jsxs("button",{className:"hl-chip"+(v?" on":""),style:v?{background:u.color,borderColor:u.color,color:"#fff"}:{borderColor:u.color,color:u.color},onClick:()=>o(a,u.id),children:[u.emoji?u.emoji+" ":"",u.name,v?" ✓":""]},u.id)}),t.length===0&&s.jsx("button",{className:"hl-chip hl-add",onClick:l,children:"＋ 体調の項目を作る"})]}),s.jsx("div",{className:"f-label",style:{marginTop:10},children:"周期ごとの記録"}),s.jsxs("div",{className:"seg hl-seg",children:[s.jsx("button",{className:c==="start"?"on":"",onClick:()=>m("start"),children:"生理開始から"}),s.jsx("button",{className:c==="before"?"on":"",onClick:()=>m("before"),children:"次の生理まで"})]}),s.jsxs("p",{className:"panel-note",children:["マスをタップすると生理のオン/オフを切り替えられます。"," ",c==="before"?"右端が「次の生理の前日」。縦に見ると、生理の何日前に出やすいかが分かります。":"左端が「生理1日目」。縦に見ると、周期のどのあたりで出やすいかが分かります。"]}),k.length===0?s.jsxs("div",{className:"empty",children:["まだ生理の記録がありません。",`
`,"上の「🩸 生理」から記録してね💗"]}):s.jsx("div",{className:"hl-chartwrap",children:s.jsxs("div",{className:"hl-chart",children:[s.jsxs("div",{className:"hl-row hl-head",children:[s.jsx("div",{className:"hl-rowlabel",children:"周期"}),s.jsx("div",{className:"hl-cells",children:g.map((u,v)=>s.jsx("div",{className:"hl-dcell",children:u},v))})]}),k.map(u=>s.jsxs("div",{className:"hl-row",children:[s.jsxs("div",{className:"hl-rowlabel",children:[s.jsx("span",{className:"hl-rl-date",children:se(u.start).slice(5)}),s.jsx("span",{className:"hl-rl-len",children:u.cycle!=null?`${u.cycle}日`:"進行中"})]}),s.jsx("div",{className:"hl-cells",children:d(u).map((v,S)=>{if(!v)return s.jsx("div",{className:"hl-cell blank"},S);const z=b(v),D=(n[v]||[]).map(p).filter(Boolean),T=v>a;return s.jsx("button",{className:"hl-cell"+(z?" period":"")+(v===a?" today":"")+(T?" future":""),title:`${se(v)}${z?" 生理":""}${D.length?" "+D.map(F=>F.name).join("・"):""}`,"aria-label":`${se(v)} の生理を切り替え`,onClick:()=>r(v),children:D.slice(0,3).map(F=>s.jsx("span",{className:"hl-dot",style:{background:F.color}},F.id))},S)})})]},u.start))]})}),(t.length>0||k.length>0)&&s.jsxs("div",{className:"hl-legend",children:[s.jsxs("span",{className:"hl-lg",children:[s.jsx("span",{className:"hl-lg-box period"}),"生理"]}),t.map(u=>s.jsxs("span",{className:"hl-lg",children:[s.jsx("span",{className:"hl-dot",style:{background:u.color}}),u.name]},u.id))]}),k.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"f-label",style:{marginTop:12},children:"これまでの記録"}),s.jsx("div",{className:"sum-list",children:k.map(u=>s.jsxs("div",{className:"sum-row",children:[s.jsxs("span",{children:[se(u.start).slice(5),u.length>1?`〜${se(u.end).slice(5)}`:"",s.jsxs("span",{className:"hl-hist-len",children:["（",u.length,"日間）"]})]}),s.jsx("span",{className:"sum-amt",children:u.cycle!=null?`周期 ${u.cycle}日`:"進行中"})]},u.start))})]})]})]})}const zu=/https?:\/\/[^\s　-〿぀-ヿ一-鿿＀-￯]+/g,Eg=/[.,;:、。）)\]】」』"'！？!?]+$/;function zg(e,t=n=>n){if(!e)return e;const n=[];let r=0,o=0,i;for(zu.lastIndex=0;i=zu.exec(e);){let l=i[0];const a=(l.match(Eg)||[""])[0];a&&(l=l.slice(0,l.length-a.length)),l&&(i.index>r&&n.push(s.jsx(E.Fragment,{children:t(e.slice(r,i.index))},o++)),n.push(s.jsx("a",{className:"body-link",href:l,target:"_blank",rel:"noopener noreferrer",onClick:c=>c.stopPropagation(),children:l},o++)),r=i.index+l.length)}return n.length?(r<e.length&&n.push(s.jsx(E.Fragment,{children:t(e.slice(r))},o++)),n):t(e)}const Gr="🎬",_g=[1,2,3,4,5,6,0];function Dg({room:e,onBack:t,onMeta:n,initialQuery:r,showToast:o,pinned:i,syncSignal:l,marks:a,onEditMarks:c}){const[m,f]=E.useState({}),[h,p]=E.useState({}),[w,b]=E.useState([]),[k,L]=E.useState({}),[g,d]=E.useState(!1),[u,v]=E.useState(null),[S,z]=E.useState(et()),[D,T]=E.useState(""),[F,I]=E.useState(!!r),[G,ye]=E.useState(r||""),[ke,Ne]=E.useState(!1),[nn,mt]=E.useState(!1),[Je,O]=E.useState(""),[W,Y]=E.useState(!1),[ne,ce]=E.useState(!1),[Pe,Ze]=E.useState([]),[ie,ue]=E.useState([]),[He,rn]=E.useState({}),[Io,gt]=E.useState(!1),[En,Ao]=E.useState(!1),[Ke,Ut]=E.useState(null),[Ct,zn]=E.useState(null),[re,Rr]=E.useState(!1),[Fo,wl]=E.useState(120),xt=E.useRef(null),Ht=E.useRef(null),yt=E.useRef(null),_n=E.useRef(null),kl=ep(!u);E.useEffect(()=>{(async()=>{try{let x=await K(Fe(e.id));x=typeof x=="string"?JSON.parse(x):x||{};const j=await K(Vn(e.id))||{};let N=!1;const R={},U={...j};for(const[ge,We]of Object.entries(x))if(We&&typeof We.text=="string"&&We.text.includes(Jf)){const{text:Ve,items:V}=ug(We.text);if(R[ge]={...We,text:Ve},V.length){const Re=(U[ge]||[]).slice();for(const Ot of V)Re.some(Et=>Et.text===Ot.text&&Et.time===Ot.time)||Re.push(Ot);U[ge]=Re}N=!0}else R[ge]=We;N&&(await H(Fe(e.id),R),await H(Vn(e.id),U)),f(R),p(U);let Z=await K(Yn(e.id));const Oe=Z===void 0;Oe&&(Z=[{id:Ee(),name:"note投稿",emoji:"📝"},{id:Ee(),name:"キャラ投稿",emoji:"🎨"}]);let lt=Oe;Z=Z.map(ge=>ge.freq&&ge.days?ge:(lt=!0,{...ge,freq:ge.freq||"daily",days:ge.days||[]})),await K(qi(e.id))||(await H(qi(e.id),!0),Z.some(ge=>ge.name==="週報を書く")||(Z=[...Z,{id:Ee(),name:"週報を書く",emoji:"📋",freq:"weekly",days:[0]}],lt=!0)),lt&&await H(Yn(e.id),Z),b(Array.isArray(Z)?Z:[]),L(await K(Zi(e.id))||{});let st=await K(Qn(e.id));await K(el(e.id))||(await H(el(e.id),!0),(!Array.isArray(st)||!st.length)&&(st=[{id:Ee(),name:"眠気",emoji:"😴",color:"#8b6ff0"},{id:Ee(),name:"不正出血",emoji:"💧",color:"#e0629f"}],await H(Qn(e.id),st))),ue(Array.isArray(st)?st:[]);const vt=await K(Lo(e.id));Ze(Array.isArray(vt==null?void 0:vt.days)?vt.days:[]),rn(await K(fo(e.id))||{})}catch{}finally{d(!0)}})()},[e.id]),E.useEffect(()=>{l&&(async()=>{const x=await K(Fe(e.id));x&&f(typeof x=="string"?JSON.parse(x):x),p(await K(Vn(e.id))||{})})()},[l]),E.useEffect(()=>{if(!_n.current||typeof ResizeObserver>"u")return;const x=new ResizeObserver(()=>_n.current&&wl(_n.current.offsetHeight));return x.observe(_n.current),()=>x.disconnect()},[u,F]);const Dn=async x=>{f(x);try{await H(Fe(e.id),x);const j=Object.keys(x).sort(),N=j[j.length-1];n({preview:N?x[N].text.split(`
`)[0].slice(0,40):"",lastAt:Date.now()})}catch{o("保存に失敗しました。ストレージを確認してね")}};E.useEffect(()=>{!G&&!u&&xt.current&&(xt.current.scrollTop=xt.current.scrollHeight)},[g,G,u]),E.useEffect(()=>{var j;if(!u)return;const x=(j=xt.current)==null?void 0:j.querySelector(".editing-now");x&&setTimeout(()=>x.scrollIntoView({block:"start",behavior:"smooth"}),60)},[u]);const Bo=()=>{const x=D.trim();if(!x)return;const j=m[S];Dn({...m,[S]:j?{...j,text:j.text+`

`+x}:{text:x,time:Xf()}}),T(""),Ht.current&&(Ht.current.style.height="auto"),setTimeout(()=>{var R;const N=(R=xt.current)==null?void 0:R.querySelector(`[data-date="${S}"]`);N?N.scrollIntoView({block:"end",behavior:"smooth"}):xt.current&&(xt.current.scrollTop=xt.current.scrollHeight)},50)},bl=x=>{T(x.target.value);const j=x.target;j.style.height="auto",j.style.height=Math.min(j.scrollHeight,140)+"px"},rr=x=>Zf(Ht.current,x+" ",j=>{T(j),requestAnimationFrame(()=>{const N=Ht.current;N&&(N.style.height="auto",N.style.height=Math.min(N.scrollHeight,140)+"px")})}),Ln=x=>{v(x),ye(""),I(!1)},Sl=(x,j)=>{const N=j.trim();if(!N){v(null);return}Dn({...m,[x]:{...m[x],text:N}}),v(null)},jl=x=>{const j={...m};delete j[x],Dn(j),v(null)},[$r,Kt]=E.useState(null),Uo=x=>Kt({message:`🩷${se(x)}🩷 の日記を削除しますか？`,onConfirm:()=>{jl(x),Kt(null)}}),Ho=(x,j)=>{const N=k[x]||[],R=N.includes(j)?N.filter(Z=>Z!==j):[...N,j],U={...k};R.length?U[x]=R:delete U[x],L(U),H(Zi(e.id),U).catch(()=>o("保存に失敗しました"))},Tn=x=>{b(x),H(Yn(e.id),x).catch(()=>o("保存に失敗しました"))},Ir=()=>Tn([...w,{id:Ee(),name:"",emoji:"🩷",freq:"daily",days:[]}]),on=(x,j)=>Tn(w.map(N=>N.id===x?{...N,...j}:N)),or=(x,j)=>{if(j==="weekly"){const N=w.find(R=>R.id===x);on(x,{freq:j,days:N&&N.days&&N.days.length?N.days:[we(et()).getDay()]})}else on(x,{freq:"daily"})},Nl=(x,j)=>{const N=w.find(U=>U.id===x),R=(N.days||[]).includes(j)?N.days.filter(U=>U!==j):[...N.days||[],j];on(x,{days:R})},Pn=(x,j)=>{const N=x+j;if(N<0||N>=w.length)return;const R=[...w];[R[x],R[N]]=[R[N],R[x]],Tn(R)},ln=x=>{const j=w.find(R=>R.id===x),N=Object.values(k).filter(R=>(R||[]).includes(x)).length;Kt({message:`習慣「${((j==null?void 0:j.emoji)||"")+((j==null?void 0:j.name)||"")}」を削除しますか？`+(N?`
これまでの達成 ${N}日分 の記録も消えます。`:""),onConfirm:()=>{Tn(w.filter(R=>R.id!==x)),Kt(null)}})},ir=()=>{const x=w.filter(j=>j.name.trim()||j.emoji&&j.emoji.trim());x.length!==w.length&&Tn(x),Y(!1)},Ko=7,Ar=x=>{Ze(x),H(Lo(e.id),{days:x}).catch(()=>o("保存に失敗しました"))},Wo=x=>{if(Pe.includes(x)){Ar(Pe.filter(Z=>Z!==x));return}if(!!Pe.includes(To(x,-1))){Ar([...Pe,x].sort());return}const N=[];for(let Z=0;Z<Ko;Z++)N.push(To(x,Z));const R=[...new Set([...Pe,...N])].sort(),U=R.length-Pe.length;Ar(R),U>1&&o(`${Ko}日ぶんチェックしたよ🩷 いらない日は外してね`,4e3)},Vo=(x,j)=>{const N=He[x]||[],R=N.includes(j)?N.filter(Z=>Z!==j):[...N,j],U={...He};R.length?U[x]=R:delete U[x],rn(U),H(fo(e.id),U).catch(()=>o("保存に失敗しました"))},Mn=x=>{ue(x),H(Qn(e.id),x).catch(()=>o("保存に失敗しました"))},Cl=()=>Mn([...ie,{id:Ee(),name:"",emoji:"",color:ls[ie.length%ls.length]}]),Fr=(x,j)=>Mn(ie.map(N=>N.id===x?{...N,...j}:N)),On=(x,j)=>{const N=x+j;if(N<0||N>=ie.length)return;const R=[...ie];[R[x],R[N]]=[R[N],R[x]],Mn(R)},y=x=>{const j=ie.find(R=>R.id===x),N=Object.values(He).filter(R=>(R||[]).includes(x)).length;Kt({message:`体調の項目「${(j==null?void 0:j.name)||""}」を削除しますか？`+(N?`
これまでの記録 ${N}日分 も消えます。`:""),onConfirm:()=>{Mn(ie.filter(U=>U.id!==x));const R={};for(const[U,Z]of Object.entries(He)){const Oe=(Z||[]).filter(lt=>lt!==x);Oe.length&&(R[U]=Oe)}rn(R),H(fo(e.id),R).catch(()=>o("保存に失敗しました")),Kt(null)}})},C=()=>{const x=ie.filter(j=>j.name.trim());x.length!==ie.length&&Mn(x),Ao(!1)},P=()=>sg(m),M=async()=>{try{await navigator.clipboard.writeText(P()),Rr(!0)}catch{try{yt.current.focus(),yt.current.select(),document.execCommand("copy"),Rr(!0)}catch{o("コピーできませんでした。全選択して手動でコピーしてね")}}setTimeout(()=>Rr(!1),2e3)},Q=()=>{try{const x=new Blob([P()],{type:"text/plain;charset=utf-8"}),j=URL.createObjectURL(x),N=document.createElement("a");N.href=j,N.download=`nachumin-diary-${lg(e.name)}.txt`,document.body.appendChild(N),N.click(),N.remove(),setTimeout(()=>URL.revokeObjectURL(j),3e3)}catch{o("ダウンロードできない環境みたい。コピーを使ってね")}},q=()=>{const x=ag(Je),j=Object.keys(x);if(j.length===0){o("読み込める日記が見つかりませんでした 🥺");return}let N=0,R=0;const U={...m};for(const Z of j)U[Z]?R+=1:(U[Z]=x[Z],N+=1);Dn(U),mt(!1),O(""),o(`${N}件の日記を復元したよ💗`+(R?`（${R}件はもうあるのでスキップ）`:""))},A=x=>G?x.split(new RegExp(`(${Gf(G)})`,"gi")).map((N,R)=>N.toLowerCase()===G.toLowerCase()?s.jsx("mark",{className:"hl",children:N},R):N):x,B=x=>zg(x,A),ee=E.useMemo(()=>{var Z;const x=(a||[]).filter(Boolean),j=[...x,Gr],N=[...x].sort((Oe,lt)=>lt.length-Oe.length),R={},U={};for(const Oe of j)R[Oe]=0,U[Oe]=[];for(const Oe of Object.keys(m).sort().reverse()){const lt=(((Z=m[Oe])==null?void 0:Z.text)||"").split(`
`).reverse();for(const Rn of lt){if(!Rn.trim())continue;const st=Rn.trim();if(st.startsWith(nl)){const Ve=st.slice(nl.length).trim();Ve&&(U[Gr].push({dateKey:Oe,text:Ve}),R[Gr]+=1);continue}let vt=Rn.trim();const ge=[];let We=!0;for(;We;){We=!1;for(const Ve of N)if(vt.startsWith(Ve)){ge.includes(Ve)||ge.push(Ve),vt=vt.slice(Ve.length).trimStart(),We=!0;break}}if(!(!ge.length||!vt))for(const Ve of ge)U[Ve]&&(U[Ve].push({dateKey:Oe,text:vt}),R[Ve]+=1)}}return{counts:R,byMark:U}},[m,a]),Ce=[...(a||[]).filter(Boolean),Gr],Me=()=>{zn(Ce.find(x=>ee.counts[x]>0)||Ce[0]||null)},Wt=x=>{zn(null),ye(""),I(!1),setTimeout(()=>{var N;const j=(N=xt.current)==null?void 0:N.querySelector(`[data-date="${x}"]`);j&&j.scrollIntoView({block:"center",behavior:"smooth"})},90)},qe=async()=>{const x=ee.byMark[Ct]||[];if(!x.length)return;const j=[];let N="";for(const U of x)U.dateKey!==N&&(N=U.dateKey,j.length&&j.push(""),j.push(`🩷${la(N)}🩷`)),j.push(U.text);const R=await bu(j.join(`
`));o(R?"コピーしました🩷":"コピーできませんでした。手動でコピーしてね")},np=x=>{const j=["🩷 できたこと"];for(const U of h[x]||[])j.push(`☑ ${U.text}${U.time?` (${U.time})`:""}`);const N=k[x]||[],R=w.filter(U=>N.includes(U.id)).map(U=>`${U.emoji||""}${U.name}`);return R.length&&j.push("習慣: "+R.join(" ")),j.join(`
`)},rp=async x=>{const j=await bu(x);o(j?"コピーしました🩷":"コピーできませんでした。手動でコピーしてね"),Ut(null)},nc=G.toLowerCase(),Br=et(),rc=new Set([...Object.keys(m),...Object.keys(h),...Object.keys(k)]);w.length&&rc.add(Br);let Yo=[...rc].sort();G&&(Yo=Yo.filter(x=>{const j=m[x]&&(m[x].text+se(x)).toLowerCase().includes(nc),N=(h[x]||[]).some(R=>R.text.toLowerCase().includes(nc));return j||N}));const oc=se(S).slice(5),ic=(x,j)=>s.jsx("button",{className:"chip"+(S===j?" chip-on":""),onClick:()=>z(j),children:x},x);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"hd",children:[s.jsx("button",{className:"back-btn","aria-label":"もどる",onClick:t,children:"‹"}),s.jsx("span",{style:{fontSize:20},children:e.emoji}),s.jsxs("div",{children:[s.jsx("div",{className:"hd-title",children:e.name}),s.jsx("div",{className:"hd-sub",children:"Nachumin Lifelog"})]}),s.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"マークで集める",onClick:Me,children:"🔖"}),s.jsx("button",{className:"icon-btn","aria-label":"習慣",onClick:()=>Y(!0),children:"🎯"}),s.jsx("button",{className:"icon-btn","aria-label":"体調",onClick:()=>gt(!0),children:"🌡️"}),s.jsx("button",{className:"icon-btn","aria-label":"テキスト書き出し",onClick:()=>Ne(!0),children:"📤"}),s.jsx("button",{className:"icon-btn","aria-label":"テキストから復元",onClick:()=>mt(!0),children:"📥"}),s.jsx("button",{className:"icon-btn","aria-label":"検索",onClick:()=>{I(!F),ye("")},children:F?"✕":"🔍"})]}),i,F&&s.jsx("div",{className:"search-row",children:s.jsx("input",{autoFocus:!0,placeholder:"日記を検索（ことば・日付）",value:G,onChange:x=>ye(x.target.value)})}),s.jsxs("div",{className:"chat",ref:xt,style:{paddingBottom:u?210:Fo+12},children:[g&&Yo.length===0&&s.jsx("div",{className:"empty",children:G?"みつかりませんでした 🥺":`まだ日記がありません。
下から今日のことを書いてみよう💗`}),Yo.map(x=>{const j=u===x,N=!!m[x],R=h[x]||[],U=x===Br,Z=k[x]||[],Oe=we(x).getDay(),lt=new Set,Rn=w.filter(V=>{if(V.freq!=="weekly")return!0;const Re=V.days||[];if(!Re.length)return!1;if(Re.includes(Oe))return!0;if((k[x]||[]).includes(V.id))return lt.add(V.id),!0;let Ot=null;for(let Et=1;Et<=6;Et++){const Qo=we(x);if(Qo.setDate(Qo.getDate()-Et),Re.includes(Qo.getDay())){Ot=Qo;break}}if(!Ot)return!1;for(const Et=new Date(Ot);ct(Et)<x;Et.setDate(Et.getDate()+1))if((k[ct(Et)]||[]).includes(V.id))return!1;return lt.add(V.id),!0}),st=Rn.length>0&&(U||N||Z.length>0),vt=R.length>0||st,ge=He[x]||[],We=Pe.includes(x),Ve=(ie.length>0||We)&&(U||We||ge.length>0);return s.jsxs(E.Fragment,{children:[N&&s.jsxs("div",{className:"row","data-date":x,children:[s.jsx("div",{className:"time",children:m[x].time}),s.jsxs(Cu,{className:"bubble"+(j?" editing-now":""),onClick:j?void 0:()=>Ln(x),onLongPress:j?void 0:V=>Ut({type:"diary",k:x,x:V.x,y:V.y}),role:"button",tabIndex:0,onKeyDown:V=>!j&&V.key==="Enter"&&Ln(x),children:[s.jsx("span",{className:"spark",children:"✨"}),s.jsxs("div",{className:"d-head",children:["🩷",s.jsxs("span",{className:"lnk"+(tl(x)?" wd-"+tl(x):""),children:[se(x)," ",ia[we(x).getDay()]]}),"🩷"]}),j?s.jsx(bg,{initial:m[x].text,appendNewline:!0,marks:a,onEditMarks:c,bottomToolbar:!0,onSave:V=>Sl(x,V),onCancel:()=>v(null),onDelete:()=>Uo(x),placeholder:"内容を書きなおしてね"}):s.jsx("div",{className:"body",children:B(m[x].text)})]})]}),vt&&s.jsx("div",{className:"done-row",style:N?void 0:{marginTop:0},children:s.jsxs(Cu,{className:"done-bubble",onLongPress:V=>Ut({type:"done",k:x,x:V.x,y:V.y}),children:[s.jsxs("div",{className:"done-head",children:[s.jsx("span",{children:"🩷 できたこと"}),st&&s.jsx("button",{className:"hv-open","aria-label":"習慣ビューをひらく",onClick:V=>{V.stopPropagation(),ce(!0)},children:"🎯 習慣ビュー"})]}),R.map((V,Re)=>s.jsxs("div",{className:"done-line",children:["☑ ",B(V.text),V.time?s.jsxs("span",{className:"done-time",children:[" (",V.time,")"]}):null]},Re)),st&&s.jsx("div",{className:"habits-row"+(R.length?" has-sep":""),children:Rn.map(V=>{const Re=Z.includes(V.id),Ot=lt.has(V.id);return s.jsxs("button",{className:"habit-chip"+(Re?" on":"")+(Ot?" carry":""),onClick:()=>Ho(x,V.id),children:[Ot?"⏳ ":"",V.emoji?V.emoji+" ":"",V.name,Re?" 🩷":""]},V.id)})})]})}),Ve&&s.jsx("div",{className:"done-row hl-daily",children:s.jsxs("div",{className:"done-bubble",children:[s.jsxs("div",{className:"done-head",children:[s.jsx("span",{children:"🌡️ 体調"}),s.jsx("button",{className:"hv-open","aria-label":"体調ビューをひらく",onClick:V=>{V.stopPropagation(),gt(!0)},children:"🩸 体調ビュー"})]}),s.jsxs("div",{className:"habits-row",children:[s.jsxs("button",{className:"habit-chip hl-p-chip"+(We?" on":""),onClick:()=>Wo(x),children:["🩸 生理",We?" 🩷":""]}),ie.map(V=>{const Re=ge.includes(V.id);return s.jsxs("button",{className:"habit-chip"+(Re?" on":""),style:Re?{background:V.color,borderColor:V.color,color:"#fff"}:{borderColor:V.color,color:V.color},onClick:()=>Vo(x,V.id),children:[V.emoji?V.emoji+" ":"",V.name,Re?" 🩷":""]},V.id)})]})]})})]},x)})]}),!u&&s.jsxs("div",{className:"bar bar-fixed",ref:_n,style:{bottom:kl},children:[s.jsxs("div",{className:"chips",children:[ic("今日",Br),ic("昨日",ku()),s.jsxs("button",{className:"chip chip-date",children:["📅 ",S===Br||S===ku()?"日付をえらぶ":oc,s.jsx("input",{type:"date",value:S,onChange:x=>x.target.value&&z(x.target.value)})]}),m[S]&&s.jsx("span",{className:"exists-note",children:"この日はもうあるので追記されます"})]}),a&&a.length>0&&s.jsx(qf,{marks:a,onInsert:rr,onEdit:c}),s.jsxs("div",{className:"in-row",children:[s.jsx("textarea",{ref:Ht,className:"ta",rows:1,placeholder:S===Br?"今日あったことを書く…":`${oc} に追記…`,value:D,onChange:bl}),s.jsx("button",{className:"send","aria-label":"送信",disabled:!D.trim(),onClick:Bo,children:"↑"})]})]}),Ke&&s.jsx(jg,{x:Ke.x,y:Ke.y,onClose:()=>Ut(null),onCopy:()=>{var x;return rp(`🩷${la(Ke.k)}🩷
`+(Ke.type==="diary"?((x=m[Ke.k])==null?void 0:x.text)||"":np(Ke.k)))},onEdit:Ke.type==="diary"?()=>{Ut(null),Ln(Ke.k)}:void 0,onDelete:Ke.type==="diary"?()=>{Ut(null),Uo(Ke.k)}:void 0}),$r&&s.jsx(tp,{message:$r.message,onConfirm:$r.onConfirm,onCancel:()=>Kt(null)}),Ct!==null&&s.jsxs("div",{className:"mv-screen",children:[s.jsxs("div",{className:"hd",children:[s.jsx("button",{className:"back-btn","aria-label":"とじる",onClick:()=>zn(null),children:"‹"}),s.jsxs("div",{style:{minWidth:0},children:[s.jsx("div",{className:"hd-title",children:"🔖 マークで集める"}),s.jsxs("div",{className:"hd-sub",children:[(ee.byMark[Ct]||[]).length,"件 ・ 全期間"]})]}),s.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"ぜんぶコピー",onClick:qe,children:"📋"})]}),s.jsx("div",{className:"mv-marks",children:Ce.map(x=>s.jsxs("button",{className:"mv-chip"+(Ct===x?" on":""),onClick:()=>zn(x),children:[s.jsx("span",{className:"mv-chip-m",children:x}),s.jsx("span",{className:"mv-chip-n",children:ee.counts[x]||0})]},x))}),s.jsx("div",{className:"mv-list",children:(ee.byMark[Ct]||[]).length===0?s.jsx("div",{className:"empty",children:Ct===Gr?`今日のコマはまだありません。
上のピンク留めバーから書くと集まります💗`:`「${Ct||""}」が行頭に付いた行はまだありません。
日記の入力欄でマークを押して書くと集まります💗`}):(ee.byMark[Ct]||[]).map((x,j)=>s.jsxs("button",{className:"mv-row",onClick:()=>Wt(x.dateKey),children:[s.jsx("span",{className:"mv-date",children:se(x.dateKey).slice(5)}),s.jsx("span",{className:"mv-text",children:x.text})]},j))})]}),Io&&s.jsx(Cg,{periodDays:Pe,symptoms:ie,symptomLog:He,onTogglePeriod:Wo,onToggleSymptom:Vo,onClose:()=>gt(!1),onManage:()=>Ao(!0)}),ne&&s.jsx(Ng,{habits:w,habitAch:k,onToggle:Ho,onClose:()=>ce(!1),onManage:()=>Y(!0)}),En&&s.jsx("div",{className:"overlay habit-over",onClick:C,children:s.jsxs("div",{className:"panel",onClick:x=>x.stopPropagation(),children:[s.jsx("h3",{children:"🌡️ 体調の項目"}),s.jsx("p",{className:"panel-note",children:"記録したい体調を自由に追加できます（眠気・頭痛・むくみ など）。"}),ie.map((x,j)=>s.jsxs("div",{className:"mem-row",style:{flexWrap:"wrap"},children:[s.jsx("input",{className:"f-input",style:{width:54,textAlign:"center",flex:"0 0 auto"},maxLength:4,placeholder:"😴",value:x.emoji||"",onChange:N=>Fr(x.id,{emoji:N.target.value})}),s.jsx("input",{className:"f-input",style:{flex:1,minWidth:0},placeholder:"体調の名前",value:x.name,onChange:N=>Fr(x.id,{name:N.target.value})}),s.jsx("button",{className:"mem-btn",disabled:j===0,onClick:()=>On(j,-1),"aria-label":"上へ",children:"↑"}),s.jsx("button",{className:"mem-btn",disabled:j===ie.length-1,onClick:()=>On(j,1),"aria-label":"下へ",children:"↓"}),s.jsx("button",{className:"mem-btn",onClick:()=>y(x.id),"aria-label":"削除",children:"🗑"}),s.jsx("div",{className:"swatches",style:{flexBasis:"100%",marginTop:4},children:ls.map(N=>s.jsx("button",{className:"swatch"+(x.color===N?" on":""),style:{background:N},onClick:()=>Fr(x.id,{color:N}),"aria-label":N},N))})]},x.id)),ie.length===0&&s.jsx("p",{className:"panel-note",children:"まだ項目がありません。追加してね💗"}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",onClick:Cl,children:"＋ 項目を追加"}),s.jsx("button",{className:"p-close",onClick:C,children:"閉じる"})]})]})}),W&&s.jsx("div",{className:"overlay habit-over",onClick:ir,children:s.jsxs("div",{className:"panel",onClick:x=>x.stopPropagation(),children:[s.jsx("h3",{children:"🎯 習慣"}),s.jsx("p",{className:"panel-note",children:"毎日くり返すこと。日記の「できたこと」からワンタップで記録できます。"}),w.map((x,j)=>s.jsxs("div",{className:"mem-row",style:{flexWrap:"wrap"},children:[s.jsx("input",{className:"f-input",style:{width:54,textAlign:"center",flex:"0 0 auto"},maxLength:4,placeholder:"🩷",value:x.emoji||"",onChange:N=>on(x.id,{emoji:N.target.value})}),s.jsx("input",{className:"f-input",style:{flex:1,minWidth:0},placeholder:"習慣の名前",value:x.name,onChange:N=>on(x.id,{name:N.target.value})}),s.jsx("button",{className:"mem-btn",disabled:j===0,onClick:()=>Pn(j,-1),"aria-label":"上へ",children:"↑"}),s.jsx("button",{className:"mem-btn",disabled:j===w.length-1,onClick:()=>Pn(j,1),"aria-label":"下へ",children:"↓"}),s.jsx("button",{className:"mem-btn",onClick:()=>ln(x.id),"aria-label":"削除",children:"🗑"}),s.jsxs("div",{className:"seg",style:{flexBasis:"100%",marginTop:4},children:[s.jsx("button",{className:x.freq!=="weekly"?"on":"",onClick:()=>or(x.id,"daily"),children:"毎日"}),s.jsx("button",{className:x.freq==="weekly"?"on":"",onClick:()=>or(x.id,"weekly"),children:"毎週"})]}),x.freq==="weekly"&&s.jsx("div",{className:"dow-row",children:_g.map(N=>s.jsx("button",{className:"dow-chip"+((x.days||[]).includes(N)?" on":""),onClick:()=>Nl(x.id,N),children:ia[N]},N))})]},x.id)),w.length===0&&s.jsx("p",{className:"panel-note",children:"まだ習慣がありません。追加してね💗"}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",onClick:Ir,children:"＋ 習慣を追加"}),s.jsx("button",{className:"p-close",onClick:ir,children:"閉じる"})]})]})}),ke&&s.jsx("div",{className:"overlay",onClick:()=>Ne(!1),children:s.jsxs("div",{className:"panel",onClick:x=>x.stopPropagation(),children:[s.jsx("h3",{children:"📤 日記をテキストで書き出し"}),s.jsx("textarea",{ref:yt,readOnly:!0,value:P()}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",onClick:M,children:re?"コピーしたよ💗":"ぜんぶコピー"}),s.jsx("button",{className:"p-dl",onClick:Q,children:".txtでDL"}),s.jsx("button",{className:"p-close",onClick:()=>Ne(!1),children:"閉じる"})]})]})}),nn&&s.jsx("div",{className:"overlay",onClick:()=>mt(!1),children:s.jsxs("div",{className:"panel",onClick:x=>x.stopPropagation(),children:[s.jsx("h3",{children:"📥 テキストから復元"}),s.jsx("textarea",{placeholder:`エクスポートした .txt の内容をここに貼り付けてね

🩷2026/07/17🩷 9:30
今日あったこと…`,value:Je,onChange:x=>O(x.target.value)}),s.jsx("p",{className:"panel-note",children:"※ すでにある日付の日記は上書きせずスキップされます"}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",disabled:!Je.trim(),onClick:q,children:"読み込む"}),s.jsx("button",{className:"p-close",onClick:()=>{mt(!1),O("")},children:"閉じる"})]})]})})]})}function Lg({items:e,keyOf:t,onReorder:n,renderItem:r,onLongPress:o,longPress:i=320,footer:l}){const[a,c]=E.useState(null),[m,f]=E.useState(null),h=E.useRef(null),p=E.useRef({});p.current.items=e,p.current.keyOf=t,p.current.onReorder=n,p.current.onLongPress=o;const w=a||e,b=v=>{var S;return(S=h.current)==null?void 0:S.querySelector(`[data-dk="${CSS.escape(String(v))}"]`)},k=()=>{const v=h.current;if(!v||p.current.dragKey==null)return;const S=b(p.current.dragKey);if(!S)return;const z=v.getBoundingClientRect(),D=z.left+S.offsetLeft,T=z.top+S.offsetTop,F=p.current.pointerX-p.current.grabX-D,I=p.current.pointerY-p.current.grabY-T;S.style.transform=`translate(${F}px, ${I}px) scale(1.08)`},L=v=>{const S=b(v);if(!S)return;const z=S.getBoundingClientRect();p.current.dragKey=v,p.current.grabX=p.current.pointerX-z.left,p.current.grabY=p.current.pointerY-z.top,p.current.pickupX=p.current.pointerX,p.current.pickupY=p.current.pointerY,p.current.moved=!1,p.current.order=p.current.items.slice(),S.style.zIndex="10",c(p.current.order),f(v);try{navigator.vibrate&&navigator.vibrate(12)}catch{}requestAnimationFrame(k)},g=()=>{const v=h.current;if(!v||p.current.dragKey==null)return;const S=v.getBoundingClientRect(),z=p.current.pointerX-S.left,D=p.current.pointerY-S.top,T=[...v.querySelectorAll("[data-dk]")];let F=0,I=1/0;for(let ke=0;ke<T.length;ke++){const Ne=T[ke],nn=Ne.offsetLeft+Ne.offsetWidth/2,mt=Ne.offsetTop+Ne.offsetHeight/2,Je=(z-nn)**2+(D-mt)**2;Je<I&&(I=Je,F=ke)}const G=p.current.order,ye=G.findIndex(ke=>p.current.keyOf(ke)===p.current.dragKey);if(ye!==-1&&ye!==F){const[ke]=G.splice(ye,1);G.splice(F,0,ke),c(G.slice())}requestAnimationFrame(k)},d=()=>{if(clearTimeout(p.current.timer),p.current.dragKey!=null){const v=b(p.current.dragKey);if(v&&(v.style.transform="",v.style.zIndex=""),p.current.moved)p.current.onReorder(p.current.order.slice());else if(p.current.onLongPress){const S=p.current.items.find(z=>p.current.keyOf(z)===p.current.dragKey);p.current.onLongPress({item:S,x:p.current.pointerX,y:p.current.pointerY})}p.current.suppress=Date.now()+450}p.current.dragKey=null,f(null),c(null)};E.useEffect(()=>{const v=h.current;if(!v)return;const S=F=>{if(F.touches.length!==1)return;const I=F.target.closest("[data-dk]");if(!I||!v.contains(I))return;const G=F.touches[0];p.current.startX=G.clientX,p.current.startY=G.clientY,p.current.pointerX=G.clientX,p.current.pointerY=G.clientY,p.current.moved=!1;const ye=I.getAttribute("data-dk");clearTimeout(p.current.timer),p.current.timer=setTimeout(()=>{p.current.moved||L(ye)},i)},z=F=>{const I=F.touches[0];if(p.current.pointerX=I.clientX,p.current.pointerY=I.clientY,p.current.dragKey==null){(Math.abs(I.clientX-p.current.startX)>12||Math.abs(I.clientY-p.current.startY)>12)&&(p.current.moved=!0,clearTimeout(p.current.timer));return}(Math.abs(I.clientX-p.current.pickupX)>8||Math.abs(I.clientY-p.current.pickupY)>8)&&(p.current.moved=!0),F.preventDefault(),g()},D=()=>{clearTimeout(p.current.timer),p.current.dragKey!=null&&d()},T=F=>F.preventDefault();return v.addEventListener("touchstart",S,{passive:!0}),v.addEventListener("touchmove",z,{passive:!1}),v.addEventListener("touchend",D,{passive:!0}),v.addEventListener("touchcancel",D,{passive:!0}),v.addEventListener("contextmenu",T),()=>{v.removeEventListener("touchstart",S),v.removeEventListener("touchmove",z),v.removeEventListener("touchend",D),v.removeEventListener("touchcancel",D),v.removeEventListener("contextmenu",T)}},[i]);const u=v=>{p.current.suppress&&Date.now()<p.current.suppress&&(v.stopPropagation(),v.preventDefault(),p.current.suppress=0)};return s.jsxs("div",{ref:h,className:"ig-grid",onClickCapture:u,children:[w.map(v=>{const S=t(v);return s.jsx("div",{"data-dk":S,className:"ig-cell"+(m===S?" dragging":""),children:r(v)},S)}),l]})}function Tg({onBack:e,children:t}){const[n,r]=E.useState(0),[o,i]=E.useState(!1),l=E.useRef(null),a=E.useRef(!1),c=p=>{if(p.touches.length!==1||document.querySelector(".overlay"))return;const w=p.touches[0];w.clientX>28||(l.current={x:w.clientX,y:w.clientY},a.current=!1)},m=p=>{if(!l.current)return;const w=p.touches[0],b=w.clientX-l.current.x,k=w.clientY-l.current.y;if(!a.current){if(Math.abs(b)<8&&Math.abs(k)<8)return;if(Math.abs(k)>Math.abs(b)){l.current=null;return}a.current=!0,i(!1)}r(Math.max(0,b))},f=()=>{if(!l.current)return;const p=Math.min(110,window.innerWidth*.3);i(!0),a.current&&n>p?(r(window.innerWidth),setTimeout(e,190)):r(0),l.current=null,a.current=!1},h=n>0?{transform:`translateX(${n}px)`,transition:o?"transform .19s ease-out":"none",boxShadow:"-10px 0 26px rgba(120,50,90,.18)"}:void 0;return s.jsx("div",{className:"swipe-wrap",style:h,onTouchStart:c,onTouchMove:m,onTouchEnd:f,children:t})}const Pg=E.lazy(()=>nr(()=>import("./TalkRoom-CcCvF0XO.js"),[],import.meta.url)),Mg=E.lazy(()=>nr(()=>import("./TodoRoom-vnrOaFLm.js"),[],import.meta.url)),Og=E.lazy(()=>nr(()=>import("./DarelogRoom-CtpdVk95.js"),__vite__mapDeps([0,1]),import.meta.url)),Rg=E.lazy(()=>nr(()=>import("./ExpenseRoom-Z618r7YK.js"),[],import.meta.url)),$g=E.lazy(()=>nr(()=>import("./ChallengeRoom-CevqOuiO.js"),[],import.meta.url)),Ig=E.lazy(()=>nr(()=>import("./FutureRoom-DFMGm52P.js"),[],import.meta.url)),Ag=["💗","🩷","💛","🩵","💜","🤍","🖤","🌸","🌷","🎀","🌟","✨","⭐️","👑","🫶","🐰","🐻","🐱","🦄","🌙","🌊","🌿","🍓","🍒","🧸","📖","💬","✅","🌗","💰"];function Fg(){const[e,t]=E.useState(null),[n,r]=E.useState({screen:"home"}),[o,i]=E.useState(!1),[l,a]=E.useState(""),[c,m]=E.useState(null),[f,h]=E.useState(null),[p,w]=E.useState(!1),[b,k]=E.useState(null),[L,g]=E.useState(""),[d,u]=E.useState(null),[v,S]=E.useState(""),[z,D]=E.useState(0),[T,F]=E.useState(null),[I,G]=E.useState(!1),ye=E.useRef(null),ke=E.useRef(0),[Ne,nn]=E.useState(Xm),[mt,Je]=E.useState(!1),[O,W]=E.useState(""),[Y,ne]=E.useState(!1),[ce,Pe]=E.useState(""),[Ze,ie]=E.useState(""),[ue,He]=E.useState(null),[rn,Io]=E.useState(!1),[gt,En]=E.useState(null),[Ao,Ke]=E.useState(!1),[Ut,Ct]=E.useState(""),zn=E.useRef(null),re=(y,C=3e3)=>{Ct(y),clearTimeout(zn.current),zn.current=setTimeout(()=>Ct(""),C)},Rr=async y=>{try{if(await K(ts))return y;if(y.some(P=>P.type==="future"))return await H(ts,!0),y;const C=[...y,{id:Gm,type:"future",name:"未来日記",emoji:"🔮",theme:sa[3]||void 0,createdAt:Date.now(),lastAt:0,preview:""}];return await H(At,C),await H(ts,!0),C}catch{return y}};E.useEffect(()=>{(async()=>{try{const y=await Rr(await Zm());y.some(Q=>Q.id===be)&&r({screen:"room",roomId:be}),t(y);const[C,P,M]=await Promise.all([K(Ci),K(Do),K(ns)]);C&&C.dateKey===et()&&g(C.text),Array.isArray(P)&&P.length&&nn(P),He(M||{})}catch{re("データの読み込みに失敗しました"),t([])}})()},[]),E.useEffect(()=>{if(n.screen!=="home")return;let y=!0;return(async()=>{try{let C=await K(Fe(be));C=typeof C=="string"?JSON.parse(C):C||{};const P=C[et()];if(!y)return;P&&typeof P.text=="string"&&P.text.trim()?F({written:!0,preview:P.text.split(`
`)[0].slice(0,34)}):F({written:!1})}catch{y&&F({written:!1})}})(),()=>{y=!1}},[n.screen,z]),E.useEffect(()=>{n.screen==="home"&&ye.current&&(ye.current.scrollTop=ke.current)},[n.screen]);const Fo=y=>{t(C=>{let P=C;return C.find(M=>M.id===be)||(P=[...C,{id:be,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),P=P.map(M=>M.id===be?{...M,...y!=null?{preview:y}:{},lastAt:Date.now()}:M),H(At,P),P}),D(C=>C+1)},wl=async({text:y,time:C,dateKey:P})=>{try{const M=Vn(be),Q=await K(M)||{},q=(Q[P]||[]).slice();q.some(A=>A.text===y&&A.time===C)||q.push({text:y,time:C}),await H(M,{...Q,[P]:q}),Fo(`🩷 できたこと ☑ ${y}`.slice(0,40))}catch{re("できたことの記録に失敗しました")}},xt=async({text:y,time:C,dateKey:P})=>{try{const M=Vn(be),Q=await K(M)||{},q=(Q[P]||[]).filter(B=>!(B.text===y&&B.time===C)),A={...Q};q.length?A[P]=q:delete A[P],await H(M,A),Fo(null)}catch{}},Ht=y=>{t(y),H(At,y).catch(()=>re("保存に失敗しました"))},yt=(y,C)=>{t(P=>{const M=P.map(Q=>Q.id===y?{...Q,...C}:Q);return H(At,M).catch(()=>re("保存に失敗しました")),M})},_n=async(y,C,P)=>{try{const M=(e||[]).find(qe=>qe.id===C);if(!M)return{ok:!1};const Q=Fe(C),q=await K(Q)||{},A=Array.isArray(q.todos)?q.todos:[],B=(P||"").trim(),ee=B?(M.places||[]).find(qe=>(qe.name||"").trim()===B):null,Ce={...y,placeId:ee?ee.id:null},Me=[...A,Ce];await H(Q,{...q,todos:Me});const Wt=Me.filter(qe=>!qe.done&&!qe.deferred).length;return yt(C,{preview:`${Ce.done?"☑":"☐"} ${(Ce.text||"").split(`
`)[0]}`.slice(0,40),todoOpen:Wt,lastAt:Date.now()}),{ok:!0,placeDropped:!!B&&!ee,placeKept:!!ee}}catch{return{ok:!1}}},kl=async y=>{const C=y.trim();if(!C)return;const P=et();try{await H(Ci,{dateKey:P,text:C}),g(C);const M=Fe(be);let Q=await K(M);Q=Q&&typeof Q=="object"?Q:{};const q=Q[P],A=fg(q?q.text:"",C);Q={...Q,[P]:{text:A,time:q?q.time:Xf()}},await H(M,Q);const B=Object.keys(Q).sort(),ee=B[B.length-1],Ce=Q[ee].text.split(`
`)[0].slice(0,40);t(Me=>{let Wt=Me;return Me.find(qe=>qe.id===be)||(Wt=[...Me,{id:be,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),Wt=Wt.map(qe=>qe.id===be?{...qe,preview:Ce,lastAt:Date.now()}:qe),H(At,Wt),Wt}),D(Me=>Me+1),re("今日のコマをピン留めしたよ🩷")}catch{re("宣言の保存に失敗しました")}},Dn=y=>{nn(y),H(Do,y).catch(()=>re("マークの保存に失敗しました"))},Bo=()=>{const y=O.trim();if(y){if(Ne.includes(y)){W("");return}Dn([...Ne,y]),W("")}},bl=y=>Dn(Ne.filter(C=>C!==y));E.useEffect(()=>{!o||!e||(async()=>{const y={};for(const C of e)y[C.id]=await K(Fe(C.id));m(y)})()},[o,e]);const rr=e||[],Ln=E.useMemo(()=>{if(!l||!c||!e)return null;const y=l.toLowerCase(),C=[];for(const P of rr){const M=c[P.id],Q=[];if(P.type==="diary"){const q=M&&typeof M=="object"?M:{};for(const A of Object.keys(q).sort())(q[A].text+se(A)).toLowerCase().includes(y)&&Q.push({snippet:q[A].text.split(`
`)[0],date:se(A)})}else if(P.type==="todo"){const q=M&&Array.isArray(M.todos)?M.todos:[];for(const A of q)(A.text+se(A.dateKey)).toLowerCase().includes(y)&&Q.push({snippet:`${A.done?"☑":"☐"} ${A.text.split(`
`)[0]}`,date:se(A.dateKey)})}else if(P.type==="darelog"){const q=M&&Array.isArray(M.records)?M.records:[],A=B=>{var ee,Ce;return((Ce=(ee=P.members)==null?void 0:ee.find(Me=>Me.id===B))==null?void 0:Ce.name)||""};for(const B of P.members||[])(B.memberMemo||"").toLowerCase().includes(y)&&Q.push({snippet:`${B.name}: ${B.memberMemo}`,date:"メンバーメモ"});for(const B of q){const ee=A(B.memberId);(ee+(B.memo||"")+se(B.dateKey)).toLowerCase().includes(y)&&Q.push({snippet:`${ee}${B.memo?`: ${B.memo}`:""}`,date:se(B.dateKey)})}}else if(P.type==="expense"){const q=M&&Array.isArray(M.expenses)?M.expenses:[],A=B=>{var ee,Ce;return((Ce=(ee=P.categories)==null?void 0:ee.find(Me=>Me.id===B))==null?void 0:Ce.name)||""};for(const B of q)(A(B.categoryId)+(B.memo||"")+String(B.amount)+se(B.dateKey)).toLowerCase().includes(y)&&Q.push({snippet:`${A(B.categoryId)} ¥${B.amount}${B.memo?" "+B.memo:""}`,date:se(B.dateKey)})}else{const q=M&&Array.isArray(M.messages)?M.messages:[],A=B=>{var ee,Ce;return((Ce=(ee=P.members)==null?void 0:ee.find(Me=>Me.id===B))==null?void 0:Ce.name)||""};for(const B of q)((B.text+se(B.dateKey)).toLowerCase().includes(y)||A(B.memberId).toLowerCase().includes(y))&&Q.push({snippet:`${A(B.memberId)||"？"}: ${B.text.split(`
`)[0]}`,date:se(B.dateKey)})}Q.length===0&&P.name.toLowerCase().includes(y)&&Q.push({snippet:P.preview||"",date:""}),Q.length&&C.push({room:P,hits:Q})}return C},[l,c,rr,e]),Sl=y=>l?y.split(new RegExp(`(${Gf(l)})`,"gi")).map((P,M)=>P.toLowerCase()===l.toLowerCase()?s.jsx("mark",{className:"hl",children:P},M):P):y,jl=()=>{const y=f.name.trim();if(!y){re("ルーム名を入れてね");return}const C={diary:"💗",todo:"✅",darelog:"🌗",expense:"💰",challenge:"🏁",talk:"🩷"}[f.type]||"🩷",P=f.type==="darelog"?[{id:Ee(),name:"ブルー",color:"#d4f0ff",icon:{type:"emoji",value:"🌊"},side:"left"},{id:Ee(),name:"グリーン",color:"#d9ffe3",icon:{type:"emoji",value:"🌿"},side:"left"},{id:Ee(),name:"ピンク",color:"#ffd9ec",icon:{type:"emoji",value:"🌸"},side:"right"}]:[],M=f.type==="expense"?[{id:Ee(),name:"AI費用",emoji:"🤖",color:"#2196F3"},{id:Ee(),name:"ピンクグッズ",emoji:"🎀",color:"#E91E63"},{id:Ee(),name:"ネイル",emoji:"💅",color:"#9C27B0"},{id:Ee(),name:"旅費交通費",emoji:"🚃",color:"#00A5B5",transit:!0}]:void 0,Q={id:Ee(),type:f.type,name:y,emoji:f.emoji.trim()||C,theme:f.theme||to,members:P,createdAt:Date.now(),lastAt:0,preview:"",...f.type==="todo"?{shopping:!!f.shopping}:{},...M?{categories:M,subscriptions:[],subsPosted:{},transitSeeded:!0,stations:[],fares:[],defaultFromId:null,roundTripDefault:!1,incomeSeeded:!0,incomeCategories:[{id:Ee(),name:"売上",emoji:"💰",color:"#2E9E5B"},{id:Ee(),name:"返金",emoji:"↩️",color:"#3BA7A0"},{id:Ee(),name:"その他",emoji:"✨",color:"#7FB800"}]}:{}};Ht([...e,Q]),h(null),r({screen:"room",roomId:Q.id})},$r=()=>{const y=f.name.trim();if(!y){re("ルーム名を入れてね");return}yt(f.roomId,{name:y,emoji:f.emoji.trim()||"💗",theme:f.theme||to,hidden:!!f.hidden,...f.type==="todo"?{shopping:!!f.shopping}:{}}),h(null)},Kt=y=>{h({mode:"edit",roomId:y.id,name:y.name,emoji:y.emoji,type:y.type,shopping:!!y.shopping,theme:y.theme||to,hidden:!!y.hidden}),w(!1)},Uo=async y=>{try{const C=await K(Fe(y));C&&await H(Qm(y),C),Ht(e.filter(P=>P.id!==y)),h(null),k(null),re("ルームを削除しました")}catch{re("削除に失敗しました")}},Ho=()=>{const y=e.find(C=>C.id===f.roomId);k({message:`ルーム「${(y==null?void 0:y.name)||""}」を削除しますか？
中の記録もすべて消えます。`,onConfirm:()=>Uo(f.roomId)})},Tn=async()=>{ie(""),Ke(!1);try{const y=await Su();Pe(JSON.stringify(y,null,2))}catch{Pe("")}ne(!0)},Ir=async()=>{const y={...ue||{},lastDateKey:et(),lastAt:Date.now()};He(y);try{await H(ns,y)}catch{}},on=y=>{const C=new Blob([y],{type:"application/json;charset=utf-8"}),P=URL.createObjectURL(C),M=document.createElement("a");M.href=P,M.download=os,document.body.appendChild(M),M.click(),M.remove(),setTimeout(()=>URL.revokeObjectURL(P),3e3)},or=async()=>{if(!rn){Io(!0);try{let y;try{y=JSON.stringify(await Su(),null,2)}catch{re("バックアップの作成に失敗しました 🥺");return}try{const C=new File([y],os,{type:"application/json"});if(navigator.canShare&&navigator.canShare({files:[C]})){await navigator.share({files:[C]}),await Ir(),re("バックアップを保存したよ💗");return}}catch(C){if(C&&(C.name==="AbortError"||C.name==="NotAllowedError"))return}try{on(y),await Ir(),re("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{re("保存できない環境みたい。コピーを使ってね")}}finally{Io(!1)}}},Nl=()=>{try{on(ce),Ir(),re("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{re("保存できない環境みたい。コピーを使ってね")}},Pn=et(),ln=(()=>{if(!(ue!=null&&ue.lastDateKey))return null;const y=we(Pn)-we(ue.lastDateKey);return Math.max(0,Math.round(y/864e5))})(),ir=ln===null||ln>=7,Ko=!!ue&&ue.lastDateKey!==Pn&&ue.dismissedDateKey!==Pn,Ar=async()=>{const y={...ue||{},dismissedDateKey:Pn};He(y);try{await H(ns,y)}catch{}},Wo=async()=>{try{await navigator.clipboard.writeText(ce),Ke(!0),setTimeout(()=>Ke(!1),2e3)}catch{re("コピーできませんでした。全選択して手動でコピーしてね")}},Vo=y=>{var M;const C=(M=y.target.files)==null?void 0:M[0];if(!C)return;const P=new FileReader;P.onload=()=>ie(String(P.result||"")),P.onerror=()=>re("ファイルを読めませんでした"),P.readAsText(C),y.target.value=""},Mn=()=>{let y;try{y=JSON.parse(Ze)}catch{re("JSONとして読めませんでした。ファイルが壊れているかも 🥺",4e3);return}const C=gg(y);if(C){re(C,4500);return}En({obj:y,counts:xg(y),exportedAt:y.exportedAt||"",version:y.version})},Cl=async()=>{const y=gt==null?void 0:gt.obj;if(y)try{const C=await vg(y);t(C.rooms),y.declaration&&y.declaration.dateKey===et()&&!L&&(await H(Ci,y.declaration),g(y.declaration.text)),D(P=>P+1),En(null),ne(!1),ie(""),re(`復元完了💗 ${C.addedRooms}ルーム / ${C.addedItems}件を追加`)}catch{En(null),re("復元中にエラーが出ました。ファイルが壊れているかも 🥺",4e3)}};if(!e)return s.jsx("div",{className:"app",children:s.jsx("style",{children:Nu})});const Fr=s.jsxs("div",{className:"pin",onClick:()=>{S(L),u(L?"view":"edit")},role:"button",children:[s.jsx("span",{className:"pin-ic",children:L?"📌":"🩷"}),L?s.jsx("span",{className:"pin-txt",children:L}):s.jsx("span",{className:"pin-ph",children:"今日のコマをえらぶ🩷"})]});let On;if(n.screen==="room"){const y=e.find(C=>C.id===n.roomId);if(!y)On=null,setTimeout(()=>r({screen:"home"}),0);else{const C={room:y,onBack:()=>r({screen:"home"}),onMeta:M=>yt(y.id,M),initialQuery:n.q,showToast:re,pinned:Fr},P=y.type==="diary"?s.jsx(Dg,{...C,syncSignal:z,marks:Ne,onEditMarks:()=>Je(!0)},y.id):y.type==="todo"?s.jsx(Mg,{...C,onTodoComplete:wl,onTodoUncomplete:xt,onRoomChange:M=>yt(y.id,M),todoRooms:e.filter(M=>M.type==="todo"&&M.id!==y.id),onMoveTodo:_n},y.id):y.type==="darelog"?s.jsx(Og,{...C,onRoomChange:M=>yt(y.id,M)},y.id):y.type==="expense"?s.jsx(Rg,{...C,onRoomChange:M=>yt(y.id,M)},y.id):y.type==="challenge"?s.jsx($g,{...C},y.id):y.type==="future"?s.jsx(Ig,{...C},y.id):s.jsx(Pg,{...C,onRoomChange:M=>yt(y.id,M)},y.id);On=s.jsx(Tg,{onBack:()=>r({screen:"home"}),children:s.jsx(E.Suspense,{fallback:s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"hd hd-loading"}),s.jsx("div",{className:"chat"})]}),children:P})},y.id)}}else On=s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"hd hd-home",children:[s.jsx("div",{className:"app-brand",children:s.jsx("div",{className:"app-title",children:"💖Nachumin Lifelog💖"})}),s.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"バックアップ",onClick:Tn,children:"💾"}),s.jsx("button",{className:"icon-btn","aria-label":"新しいルーム",onClick:()=>h({mode:"new",name:"",emoji:"",type:"talk"}),children:"➕"}),s.jsx("button",{className:"icon-btn","aria-label":"ぜんぶ検索",onClick:()=>{i(!o),a("")},children:o?"✕":"🔍"})]}),Ko&&s.jsxs("div",{className:"bk-banner"+(ir?" stale":""),children:[s.jsxs("button",{className:"bk-main",onClick:or,disabled:rn,children:[s.jsx("span",{className:"bk-ttl",children:"💾 今日のバックアップ🩷"}),s.jsx("span",{className:"bk-sub",children:ln===null?"まだ一度も保存していません":ir?`最後の保存から ${ln}日 たっています`:"タップで1ファイルに書き出し"})]}),s.jsx("button",{className:"bk-x","aria-label":"閉じる",onClick:Ar,children:"✕"})]}),o&&s.jsx("div",{className:"search-row",children:s.jsx("input",{autoFocus:!0,placeholder:"ぜんぶのルームから検索（ことば・話者・日付）",value:l,onChange:y=>a(y.target.value)})}),Ln?s.jsx("div",{className:"rooms",children:Ln.length===0?s.jsx("div",{className:"empty",children:"みつかりませんでした 🥺"}):Ln.map(({room:y,hits:C})=>s.jsxs("div",{className:"room-row",onClick:()=>r({screen:"room",roomId:y.id,q:l}),children:[s.jsx("div",{className:"r-ic",children:y.emoji}),s.jsxs("div",{className:"r-main",children:[s.jsx("div",{className:"r-name",children:y.name}),s.jsx("div",{className:"r-prev",children:Sl(C[0].snippet)})]}),s.jsxs("div",{className:"r-side",children:[s.jsxs("span",{className:"r-badge",children:[C.length,"件"]}),C[0].date&&s.jsx("span",{className:"r-date",children:C[0].date})]})]},y.id))}):s.jsx("div",{className:"home-scroll",ref:ye,onScroll:y=>{ke.current=y.target.scrollTop},children:(()=>{const y=e.find(A=>A.id===be),C=rr.filter(A=>A.id!==be&&!A.hidden),P=rr.filter(A=>A.id!==be&&A.hidden),M=we(et()),Q=T?T.written?T.preview:`${M.getMonth()+1}/${M.getDate()}・きょうの分はまだ`:"…",q=A=>{const B=[...A];Ht(e.map(ee=>ee.id===be||ee.hidden?ee:B.shift()))};return s.jsxs(s.Fragment,{children:[y&&s.jsxs("button",{className:"diary-card",onClick:()=>r({screen:"room",roomId:y.id}),children:[s.jsx("span",{className:"dc-ic",children:y.emoji}),s.jsxs("span",{className:"dc-main",children:[s.jsx("span",{className:"dc-name",children:"DIARY"}),s.jsx("span",{className:"dc-sub",children:Q})]}),s.jsx("span",{className:"dc-arw",children:"›"})]}),s.jsx(Lg,{items:C,keyOf:A=>A.id,onReorder:q,onLongPress:({item:A})=>{A&&Kt(A)},footer:s.jsx("div",{className:"ig-cell ig-add",children:s.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>h({mode:"new",name:"",emoji:"",type:"talk"}),onKeyDown:A=>A.key==="Enter"&&h({mode:"new",name:"",emoji:"",type:"talk"}),children:[s.jsx("span",{className:"ig-btn",children:"＋"}),s.jsx("span",{className:"ig-name",children:"つくる"})]})}),renderItem:A=>{const B=A.type==="todo"&&A.todoOpen>0?A.todoOpen:null;return s.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>r({screen:"room",roomId:A.id}),onKeyDown:ee=>ee.key==="Enter"&&r({screen:"room",roomId:A.id}),children:[s.jsxs("span",{className:"ig-btn",style:ju(A.theme),children:[A.emoji,B!=null&&s.jsx("span",{className:"ig-badge",children:B>99?"99+":B})]}),s.jsx("span",{className:"ig-name",children:A.name})]})}}),P.length>0&&s.jsx("button",{className:"hidden-entry",onClick:()=>G(!0),children:"🙈 非表示のルーム"}),I&&s.jsx("div",{className:"overlay",onClick:()=>G(!1),children:s.jsxs("div",{className:"panel",onClick:A=>A.stopPropagation(),children:[s.jsx("h3",{children:"🙈 非表示のルーム"}),s.jsx("p",{className:"panel-note",children:"一覧に出していないルームです。中の記録は消えていません。「戻す」でまた表示できます。"}),s.jsx("div",{className:"move-list",children:P.map(A=>s.jsxs("div",{className:"move-item as-row",children:[s.jsx("span",{className:"move-ic",children:A.emoji}),s.jsx("span",{className:"move-name",children:A.name}),s.jsx("button",{className:"unhide-btn",onClick:()=>yt(A.id,{hidden:!1}),children:"戻す"})]},A.id))}),s.jsx("div",{className:"panel-btns",children:s.jsx("button",{className:"p-close",onClick:()=>G(!1),children:"閉じる"})})]})})]})})()})]});return s.jsxs("div",{className:"app",children:[s.jsx("style",{children:Nu}),On,f&&s.jsx("div",{className:"overlay",onClick:()=>{h(null),w(!1)},children:s.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[s.jsx("h3",{children:f.mode==="new"?"➕ 新しいルーム":"⚙️ ルーム設定"}),s.jsx("div",{className:"f-label",children:"ルーム名"}),s.jsx("input",{className:"f-input",autoFocus:f.mode==="new",placeholder:"ハートるんず",value:f.name,onChange:y=>h(C=>({...C,name:y.target.value}))}),s.jsx("div",{className:"f-label",children:"アイコン（タップで選ぶ）"}),s.jsx("div",{className:"emoji-picks",children:Ag.map(y=>s.jsx("button",{className:"emoji-pick"+(f.emoji===y?" on":""),onClick:()=>h(C=>({...C,emoji:y})),children:y},y))}),s.jsx("input",{className:"f-input",style:{width:130,textAlign:"center",marginTop:4},maxLength:8,placeholder:"または自由入力",value:f.emoji,onChange:y=>h(C=>({...C,emoji:y.target.value}))}),s.jsx("div",{className:"f-label",children:"テーマカラー"}),s.jsx("div",{className:"theme-swatches",children:sa.map(y=>{const C=(f.theme||to)===y;return s.jsx("button",{className:"theme-sw"+(C?" on":""),style:ju(y),"aria-label":y,onClick:()=>h(P=>({...P,theme:y}))},y)})}),s.jsxs("div",{className:"f-label",children:["タイプ",f.mode==="edit"?"（変更できません）":""]}),s.jsxs("div",{className:"type-row",children:[s.jsxs("button",{className:"type-chip"+(f.type==="diary"?" on":""),disabled:f.mode==="edit",onClick:()=>h(y=>({...y,type:"diary"})),children:["📖 日記",s.jsx("small",{children:"1日=1吹き出し"})]}),s.jsxs("button",{className:"type-chip"+(f.type==="talk"?" on":""),disabled:f.mode==="edit",onClick:()=>h(y=>({...y,type:"talk"})),children:["💬 トーク",s.jsx("small",{children:"話者ごと"})]}),s.jsxs("button",{className:"type-chip"+(f.type==="todo"?" on":""),disabled:f.mode==="edit",onClick:()=>h(y=>({...y,type:"todo"})),children:["✅ TODO",s.jsx("small",{children:"やること"})]}),s.jsxs("button",{className:"type-chip"+(f.type==="darelog"?" on":""),disabled:f.mode==="edit",onClick:()=>h(y=>({...y,type:"darelog"})),children:["🌗 だれログ",s.jsx("small",{children:"朝昼夜の記録"})]}),s.jsxs("button",{className:"type-chip"+(f.type==="expense"?" on":""),disabled:f.mode==="edit",onClick:()=>h(y=>({...y,type:"expense"})),children:["💰 経費",s.jsx("small",{children:"支出を記録"})]}),s.jsxs("button",{className:"type-chip"+(f.type==="challenge"?" on":""),disabled:f.mode==="edit",onClick:()=>h(y=>({...y,type:"challenge"})),children:["🏁 チャレンジ",s.jsx("small",{children:"100個の目標"})]}),s.jsxs("button",{className:"type-chip"+(f.type==="future"?" on":""),disabled:f.mode==="edit",onClick:()=>h(y=>({...y,type:"future"})),children:["🔮 未来日記",s.jsx("small",{children:"1日1篇とどく"})]})]}),f.mode==="edit"&&f.roomId!==be&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"f-label",children:"一覧での表示"}),s.jsxs("button",{className:"shop-toggle"+(f.hidden?" on":""),onClick:()=>h(y=>({...y,hidden:!y.hidden})),children:[s.jsx("span",{className:"shop-box",children:f.hidden?"✓":""}),"🙈 一覧に表示しない（記録は消えません）"]})]}),f.type==="todo"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"f-label",children:"用途"}),s.jsxs("button",{className:"shop-toggle"+(f.shopping?" on":""),onClick:()=>h(y=>({...y,shopping:!y.shopping})),children:[s.jsx("span",{className:"shop-box",children:f.shopping?"✓":""}),"🛒 買い物リストとして使う（よく買うものクイック追加）"]})]}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",onClick:f.mode==="new"?jl:$r,children:f.mode==="new"?"つくる":"保存"}),f.mode==="edit"&&s.jsx("button",{className:"p-del",onClick:Ho,children:"削除"}),s.jsx("button",{className:"p-close",onClick:()=>{h(null),w(!1)},children:"閉じる"})]})]})}),Y&&s.jsx("div",{className:"overlay",onClick:()=>ne(!1),children:s.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[s.jsx("h3",{children:"💾 まるごとバックアップ"}),s.jsx("p",{className:"panel-note",children:"全ルーム・全データ（日記 / TODO / だれログ / 経費 / 習慣 / 各種設定）を まるごと1ファイルに保存します。端末が変わっても元どおり復元できます。"}),s.jsxs("div",{className:"bk-last"+(ir?" stale":""),children:[s.jsx("span",{className:"bk-last-l",children:"最後にバックアップした日"}),s.jsx("span",{className:"bk-last-v",children:ue!=null&&ue.lastDateKey?`${se(ue.lastDateKey)}${ln===0?"（今日）":`（${ln}日前）`}`:"まだありません"})]}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",onClick:or,disabled:rn,children:"💾 1タップで書き出し"}),s.jsx("button",{className:"p-dl",onClick:Nl,children:"ダウンロード"}),s.jsx("button",{className:"p-dl",onClick:Wo,children:Ao?"コピーしたよ💗":"コピー"})]}),s.jsxs("p",{className:"panel-note",children:["ファイル名は毎回 ",s.jsx("b",{children:os})," で固定です。ただし 「ファイルに保存」は同じ名前があると ",s.jsx("b",{children:"iOS が勝手に番号を付けて"})," 別ファイルにします。 毎回きっちり上書きしたいときは、共有シートで 「ファイルに保存」ではなく ",s.jsx("b",{children:"ショートカット"}),"（上書き保存する用に作ったもの）を選んでね。"]}),s.jsx("div",{className:"f-label",style:{marginTop:6},children:"復元する（バックアップから読み込み）"}),s.jsx("p",{className:"panel-note",children:"既存のデータは消さず、足りない分だけ追加します（安全マージ）"}),s.jsxs("label",{className:"upload-btn",style:{alignSelf:"flex-start"},children:["📂 バックアップファイルを選ぶ",s.jsx("input",{type:"file",accept:".json,application/json,text/plain",onChange:Vo})]}),s.jsx("textarea",{placeholder:"または、コピーしたバックアップをここに貼り付け",value:Ze,onChange:y=>ie(y.target.value),style:{minHeight:120}}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",disabled:!Ze.trim(),onClick:Mn,children:"復元する"}),s.jsx("button",{className:"p-close",onClick:()=>{ne(!1),ie("")},children:"閉じる"})]})]})}),gt&&s.jsx("div",{className:"overlay bk-ask-over",onClick:()=>En(null),children:s.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[s.jsx("h3",{children:"⚠️ 復元まえの確認"}),s.jsxs("div",{className:"bk-ask-box",children:[s.jsxs("div",{className:"bk-ask-row",children:[s.jsx("span",{children:"ルーム"}),s.jsx("b",{children:gt.counts.rooms})]}),s.jsxs("div",{className:"bk-ask-row",children:[s.jsx("span",{children:"記録の件数"}),s.jsx("b",{children:gt.counts.items})]}),gt.exportedAt&&s.jsxs("div",{className:"bk-ask-row",children:[s.jsx("span",{children:"書き出し日時"}),s.jsx("b",{children:new Date(gt.exportedAt).toLocaleString("ja-JP")})]})]}),s.jsxs("p",{className:"panel-note",children:["今のデータは消えません（足りない分を追加する安全マージ）。 それでも念のため、",s.jsx("b",{children:"先に今のデータをバックアップ"}),"しておくのがおすすめです💗"]}),s.jsx("button",{className:"bk-first",onClick:or,disabled:rn,children:"💾 先に今のデータをバックアップする"}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",onClick:Cl,children:"この内容で復元する"}),s.jsx("button",{className:"p-close",onClick:()=>En(null),children:"キャンセル"})]})]})}),d&&s.jsx("div",{className:"overlay",onClick:()=>u(null),children:s.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[s.jsx("h3",{children:"🩷 今日のコマ"}),d==="view"?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"decl-full",children:L}),s.jsx("p",{className:"panel-note",children:"その日1日だけピン留め。日記にも記録されています🎬"}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",onClick:()=>{S(L),u("edit")},children:"書きなおす"}),s.jsx("button",{className:"p-close",onClick:()=>u(null),children:"閉じる"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("textarea",{autoFocus:!0,style:{minHeight:120},placeholder:"今日は愛全開の私でいる！",value:v,onChange:y=>S(y.target.value)}),s.jsx("p",{className:"panel-note",children:"その日1日だけ表示。決定すると今日の日記の先頭に🎬として残ります"}),s.jsxs("div",{className:"panel-btns",children:[s.jsx("button",{className:"p-copy",disabled:!v.trim(),onClick:()=>{kl(v),u(null)},children:"決定"}),s.jsx("button",{className:"p-close",onClick:()=>u(null),children:"閉じる"})]})]})]})}),mt&&s.jsx("div",{className:"overlay",onClick:()=>Je(!1),children:s.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[s.jsx("h3",{children:"⚙︎ 箇条書きマーク"}),s.jsx("p",{className:"panel-note",children:"日記の入力欄に出るマーク。タップで削除、下から追加できます。"}),s.jsxs("div",{className:"mark-manage",children:[Ne.map(y=>s.jsxs("span",{className:"mark-item",children:[y,s.jsx("button",{onClick:()=>bl(y),"aria-label":"削除",children:"✕"})]},y)),Ne.length===0&&s.jsx("p",{className:"panel-note",children:"マークがありません。追加してね"})]}),s.jsxs("div",{className:"in-row",style:{marginTop:4},children:[s.jsx("input",{className:"f-input",maxLength:4,placeholder:"記号や絵文字（例: ❤︎）",value:O,onChange:y=>W(y.target.value),onKeyDown:y=>y.key==="Enter"&&Bo()}),s.jsx("button",{className:"p-copy",style:{flex:"0 0 auto",padding:"8px 16px",borderRadius:999},disabled:!O.trim(),onClick:Bo,children:"追加"})]}),s.jsx("div",{className:"panel-btns",children:s.jsx("button",{className:"p-close",onClick:()=>Je(!1),children:"閉じる"})})]})}),b&&s.jsx(tp,{message:b.message,onConfirm:b.onConfirm,onCancel:()=>k(null)}),Ut&&s.jsx("div",{className:"toast",children:Ut})]})}let _u=!1,Du=!!(navigator.serviceWorker&&navigator.serviceWorker.controller);navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!Du){Du=!0;return}_u||(_u=!0,window.location.reload())});Tm({immediate:!0,onRegisteredSW(e,t){t&&(t.update(),setInterval(()=>t.update(),60*60*1e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&t.update()}))}});Jm();Kf(document.getElementById("root")).render(s.jsx(E.StrictMode,{children:s.jsx(Fg,{})}));export{Kg as A,Wg as B,jg as C,Ug as D,Hg as E,Bg as F,ku as G,to as H,bg as I,Nr as J,To as K,oa as L,ls as M,ex as N,qg as O,Cu as P,sa as R,cg as S,nx as T,ia as W,Fe as a,se as b,bu as c,tl as d,tp as e,et as f,K as g,Zg as h,Gf as i,s as j,we as k,zg as l,H as m,Xf as n,rx as o,Jg as p,Vg as q,E as r,lg as s,kg as t,Ee as u,Xg as v,Gg as w,Yg as x,Qg as y,tx as z};
