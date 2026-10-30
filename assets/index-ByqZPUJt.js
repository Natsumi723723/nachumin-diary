const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DiaryRoom-D1tTAbg0.js","./InlineEdit-195Ie9fa.js","./TodoRoom-BpqJ9jP9.js","./DarelogRoom-BBHdKELg.js","./TalkRoom-CsaRkc0I.js","./AlbumRoom-CP0i7rBR.js","./imageUtil-ts7kJX-E.js","./WordsRoom-VkXvAbbB.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var tu={exports:{}},mi={},nu={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr=Symbol.for("react.element"),Kf=Symbol.for("react.portal"),Uf=Symbol.for("react.fragment"),Wf=Symbol.for("react.strict_mode"),Vf=Symbol.for("react.profiler"),Hf=Symbol.for("react.provider"),Yf=Symbol.for("react.context"),Qf=Symbol.for("react.forward_ref"),Xf=Symbol.for("react.suspense"),Gf=Symbol.for("react.memo"),Jf=Symbol.for("react.lazy"),js=Symbol.iterator;function Zf(e){return e===null||typeof e!="object"?null:(e=js&&e[js]||e["@@iterator"],typeof e=="function"?e:null)}var ru={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ou=Object.assign,iu={};function rr(e,t,n){this.props=e,this.context=t,this.refs=iu,this.updater=n||ru}rr.prototype.isReactComponent={};rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lu(){}lu.prototype=rr.prototype;function _a(e,t,n){this.props=e,this.context=t,this.refs=iu,this.updater=n||ru}var Da=_a.prototype=new lu;Da.constructor=_a;ou(Da,rr.prototype);Da.isPureReactComponent=!0;var Es=Array.isArray,au=Object.prototype.hasOwnProperty,La={current:null},su={key:!0,ref:!0,__self:!0,__source:!0};function cu(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)au.call(t,r)&&!su.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),g=0;g<a;g++)s[g]=arguments[g+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Gr,type:e,key:i,ref:l,props:o,_owner:La.current}}function qf(e,t){return{$$typeof:Gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gr}function ep(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ns=/\/+/g;function Ki(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ep(""+e.key):t.toString(36)}function Do(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Gr:case Kf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ki(l,0):r,Es(o)?(n="",e!=null&&(n=e.replace(Ns,"$&/")+"/"),Do(o,t,n,"",function(g){return g})):o!=null&&(Pa(o)&&(o=qf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ns,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Es(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Ki(i,a);l+=Do(i,t,n,s,o)}else if(s=Zf(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Ki(i,a++),l+=Do(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function uo(e,t,n){if(e==null)return e;var r=[],o=0;return Do(e,r,"","",function(i){return t.call(n,i,o++)}),r}function tp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},Lo={transition:null},np={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Lo,ReactCurrentOwner:La};function uu(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:uo,forEach:function(e,t,n){uo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return uo(e,function(){t++}),t},toArray:function(e){return uo(e,function(t){return t})||[]},only:function(e){if(!Pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=rr;H.Fragment=Uf;H.Profiler=Vf;H.PureComponent=_a;H.StrictMode=Wf;H.Suspense=Xf;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=np;H.act=uu;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ou({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=La.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)au.call(t,s)&&!su.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var g=0;g<s;g++)a[g]=arguments[g+2];r.children=a}return{$$typeof:Gr,type:e.type,key:o,ref:i,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:Yf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hf,_context:e},e.Consumer=e};H.createElement=cu;H.createFactory=function(e){var t=cu.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Qf,render:e}};H.isValidElement=Pa;H.lazy=function(e){return{$$typeof:Jf,_payload:{_status:-1,_result:e},_init:tp}};H.memo=function(e,t){return{$$typeof:Gf,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Lo.transition;Lo.transition={};try{e()}finally{Lo.transition=t}};H.unstable_act=uu;H.useCallback=function(e,t){return $e.current.useCallback(e,t)};H.useContext=function(e){return $e.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};H.useEffect=function(e,t){return $e.current.useEffect(e,t)};H.useId=function(){return $e.current.useId()};H.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return $e.current.useMemo(e,t)};H.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};H.useRef=function(e){return $e.current.useRef(e)};H.useState=function(e){return $e.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return $e.current.useTransition()};H.version="18.3.1";nu.exports=H;var E=nu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp=E,op=Symbol.for("react.element"),ip=Symbol.for("react.fragment"),lp=Object.prototype.hasOwnProperty,ap=rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sp={key:!0,ref:!0,__self:!0,__source:!0};function du(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)lp.call(t,r)&&!sp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:op,type:e,key:i,ref:l,props:o,_owner:ap.current}}mi.Fragment=ip;mi.jsx=du;mi.jsxs=du;tu.exports=mi;var c=tu.exports,fu={exports:{}},nt={},pu={exports:{}},hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,F){var B=O.length;O.push(F);e:for(;0<B;){var Q=B-1>>>1,re=O[Q];if(0<o(re,F))O[Q]=F,O[B]=re,B=Q;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var F=O[0],B=O.pop();if(B!==F){O[0]=B;e:for(var Q=0,re=O.length,Te=re>>>1;Q<Te;){var Fe=2*(Q+1)-1,Kt=O[Fe],we=Fe+1,Xe=O[we];if(0>o(Kt,B))we<re&&0>o(Xe,Kt)?(O[Q]=Xe,O[we]=B,Q=we):(O[Q]=Kt,O[Fe]=B,Q=Fe);else if(we<re&&0>o(Xe,B))O[Q]=Xe,O[we]=B,Q=we;else break e}}return F}function o(O,F){var B=O.sortIndex-F.sortIndex;return B!==0?B:O.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],g=[],u=1,h=null,p=3,y=!1,v=!1,b=!1,L=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var F=n(g);F!==null;){if(F.callback===null)r(g);else if(F.startTime<=O)r(g),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(g)}}function w(O){if(b=!1,m(O),!v)if(n(s)!==null)v=!0,ne(z);else{var F=n(g);F!==null&&ye(w,F.startTime-O)}}function z(O,F){v=!1,b&&(b=!1,x(T),T=-1),y=!0;var B=p;try{for(m(F),h=n(s);h!==null&&(!(h.expirationTime>F)||O&&!J());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,p=h.priorityLevel;var re=Q(h.expirationTime<=F);F=e.unstable_now(),typeof re=="function"?h.callback=re:h===n(s)&&r(s),m(F)}else r(s);h=n(s)}if(h!==null)var Te=!0;else{var Fe=n(g);Fe!==null&&ye(w,Fe.startTime-F),Te=!1}return Te}finally{h=null,p=B,y=!1}}var _=!1,P=null,T=-1,W=5,A=-1;function J(){return!(e.unstable_now()-A<W)}function Pe(){if(P!==null){var O=e.unstable_now();A=O;var F=!0;try{F=P(!0,O)}finally{F?de():(_=!1,P=null)}}else _=!1}var de;if(typeof f=="function")de=function(){f(Pe)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Ct=me.port2;me.port1.onmessage=Pe,de=function(){Ct.postMessage(null)}}else de=function(){L(Pe,0)};function ne(O){P=O,_||(_=!0,de())}function ye(O,F){T=L(function(){O(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,ne(z))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var B=p;p=F;try{return O()}finally{p=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var B=p;p=O;try{return F()}finally{p=B}},e.unstable_scheduleCallback=function(O,F,B){var Q=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Q+B:Q):B=Q,O){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=B+re,O={id:u++,callback:F,priorityLevel:O,startTime:B,expirationTime:re,sortIndex:-1},B>Q?(O.sortIndex=B,t(g,O),n(s)===null&&O===n(g)&&(b?(x(T),T=-1):b=!0,ye(w,B-Q))):(O.sortIndex=re,t(s,O),v||y||(v=!0,ne(z))),O},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(O){var F=p;return function(){var B=p;p=F;try{return O.apply(this,arguments)}finally{p=B}}}})(hu);pu.exports=hu;var cp=pu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up=E,et=cp;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gu=new Set,Lr={};function Nn(e,t){Gn(e,t),Gn(e+"Capture",t)}function Gn(e,t){for(Lr[e]=t,e=0;e<t.length;e++)gu.add(t[e])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cl=Object.prototype.hasOwnProperty,dp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cs={},_s={};function fp(e){return Cl.call(_s,e)?!0:Cl.call(Cs,e)?!1:dp.test(e)?_s[e]=!0:(Cs[e]=!0,!1)}function pp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hp(e,t,n,r){if(t===null||typeof t>"u"||pp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ta=/[\-:]([a-z])/g;function Ra(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ta,Ra);Ne[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ta,Ra);Ne[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ta,Ra);Ne[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function Oa(e,t,n,r){var o=Ne.hasOwnProperty(t)?Ne[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hp(t,n,o,r)&&(n=null),r||o===null?fp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fo=Symbol.for("react.element"),Pn=Symbol.for("react.portal"),Tn=Symbol.for("react.fragment"),Ma=Symbol.for("react.strict_mode"),_l=Symbol.for("react.profiler"),xu=Symbol.for("react.provider"),mu=Symbol.for("react.context"),Aa=Symbol.for("react.forward_ref"),Dl=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),$a=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),yu=Symbol.for("react.offscreen"),Ds=Symbol.iterator;function cr(e){return e===null||typeof e!="object"?null:(e=Ds&&e[Ds]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,Ui;function mr(e){if(Ui===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ui=t&&t[1]||""}return`
`+Ui+e}var Wi=!1;function Vi(e,t){if(!e||Wi)return"";Wi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var o=g.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Wi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mr(e):""}function gp(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=Vi(e.type,!1),e;case 11:return e=Vi(e.type.render,!1),e;case 1:return e=Vi(e.type,!0),e;default:return""}}function Pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tn:return"Fragment";case Pn:return"Portal";case _l:return"Profiler";case Ma:return"StrictMode";case Dl:return"Suspense";case Ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mu:return(e.displayName||"Context")+".Consumer";case xu:return(e._context.displayName||"Context")+".Provider";case Aa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $a:return t=e.displayName||null,t!==null?t:Pl(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return Pl(e(t))}catch{}}return null}function xp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pl(t);case 8:return t===Ma?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mp(e){var t=wu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function po(e){e._valueTracker||(e._valueTracker=mp(e))}function vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tl(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ls(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bu(e,t){t=t.checked,t!=null&&Oa(e,"checked",t,!1)}function Rl(e,t){bu(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ol(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ol(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ps(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ol(e,t,n){(t!=="number"||Vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yr=Array.isArray;function Wn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ts(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(yr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function ku(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Rs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Su(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Su(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ho,zu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yp=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){yp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function ju(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function Eu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ju(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var wp=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $l(e,t){if(t){if(wp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fl=null;function Ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,Vn=null,Hn=null;function Os(e){if(e=qr(e)){if(typeof Bl!="function")throw Error(j(280));var t=e.stateNode;t&&(t=ki(t),Bl(e.stateNode,e.type,t))}}function Nu(e){Vn?Hn?Hn.push(e):Hn=[e]:Vn=e}function Cu(){if(Vn){var e=Vn,t=Hn;if(Hn=Vn=null,Os(e),t)for(e=0;e<t.length;e++)Os(t[e])}}function _u(e,t){return e(t)}function Du(){}var Hi=!1;function Lu(e,t,n){if(Hi)return e(t,n);Hi=!0;try{return _u(e,t,n)}finally{Hi=!1,(Vn!==null||Hn!==null)&&(Du(),Cu())}}function Tr(e,t){var n=e.stateNode;if(n===null)return null;var r=ki(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Kl=!1;if(At)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{Kl=!1}function vp(e,t,n,r,o,i,l,a,s){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(u){this.onError(u)}}var Sr=!1,Ho=null,Yo=!1,Ul=null,bp={onError:function(e){Sr=!0,Ho=e}};function kp(e,t,n,r,o,i,l,a,s){Sr=!1,Ho=null,vp.apply(bp,arguments)}function Sp(e,t,n,r,o,i,l,a,s){if(kp.apply(this,arguments),Sr){if(Sr){var g=Ho;Sr=!1,Ho=null}else throw Error(j(198));Yo||(Yo=!0,Ul=g)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ms(e){if(Cn(e)!==e)throw Error(j(188))}function zp(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ms(o),e;if(i===r)return Ms(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Tu(e){return e=zp(e),e!==null?Ru(e):null}function Ru(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ru(e);if(t!==null)return t;e=e.sibling}return null}var Ou=et.unstable_scheduleCallback,As=et.unstable_cancelCallback,jp=et.unstable_shouldYield,Ep=et.unstable_requestPaint,ue=et.unstable_now,Np=et.unstable_getCurrentPriorityLevel,Fa=et.unstable_ImmediatePriority,Mu=et.unstable_UserBlockingPriority,Qo=et.unstable_NormalPriority,Cp=et.unstable_LowPriority,Au=et.unstable_IdlePriority,yi=null,Et=null;function _p(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(yi,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Pp,Dp=Math.log,Lp=Math.LN2;function Pp(e){return e>>>=0,e===0?32:31-(Dp(e)/Lp|0)|0}var go=64,xo=4194304;function wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=wr(a):(i&=l,i!==0&&(r=wr(i)))}else l=n&~o,l!==0?r=wr(l):i!==0&&(r=wr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),o=1<<n,r|=e[n],t&=~o;return r}function Tp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-yt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Tp(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $u(){var e=go;return go<<=1,!(go&4194240)&&(go=64),e}function Yi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function Op(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-yt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ba(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function Iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fu,Ka,Bu,Ku,Uu,Vl=!1,mo=[],Gt=null,Jt=null,Zt=null,Rr=new Map,Or=new Map,Ht=[],Mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $s(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function dr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=qr(t),t!==null&&Ka(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ap(e,t,n,r,o){switch(t){case"focusin":return Gt=dr(Gt,e,t,n,r,o),!0;case"dragenter":return Jt=dr(Jt,e,t,n,r,o),!0;case"mouseover":return Zt=dr(Zt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Rr.set(i,dr(Rr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Or.set(i,dr(Or.get(i)||null,e,t,n,r,o)),!0}return!1}function Wu(e){var t=xn(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Pu(n),t!==null){e.blockedOn=t,Uu(e.priority,function(){Bu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fl=r,n.target.dispatchEvent(r),Fl=null}else return t=qr(n),t!==null&&Ka(t),e.blockedOn=n,!1;t.shift()}return!0}function Is(e,t,n){Po(e)&&n.delete(t)}function $p(){Vl=!1,Gt!==null&&Po(Gt)&&(Gt=null),Jt!==null&&Po(Jt)&&(Jt=null),Zt!==null&&Po(Zt)&&(Zt=null),Rr.forEach(Is),Or.forEach(Is)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Vl||(Vl=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,$p)))}function Mr(e){function t(o){return fr(o,e)}if(0<mo.length){fr(mo[0],e);for(var n=1;n<mo.length;n++){var r=mo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&fr(Gt,e),Jt!==null&&fr(Jt,e),Zt!==null&&fr(Zt,e),Rr.forEach(t),Or.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)Wu(n),n.blockedOn===null&&Ht.shift()}var Yn=Bt.ReactCurrentBatchConfig,Go=!0;function Ip(e,t,n,r){var o=G,i=Yn.transition;Yn.transition=null;try{G=1,Ua(e,t,n,r)}finally{G=o,Yn.transition=i}}function Fp(e,t,n,r){var o=G,i=Yn.transition;Yn.transition=null;try{G=4,Ua(e,t,n,r)}finally{G=o,Yn.transition=i}}function Ua(e,t,n,r){if(Go){var o=Hl(e,t,n,r);if(o===null)rl(e,t,r,Jo,n),$s(e,r);else if(Ap(o,e,t,n,r))r.stopPropagation();else if($s(e,r),t&4&&-1<Mp.indexOf(e)){for(;o!==null;){var i=qr(o);if(i!==null&&Fu(i),i=Hl(e,t,n,r),i===null&&rl(e,t,r,Jo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else rl(e,t,r,null,n)}}var Jo=null;function Hl(e,t,n,r){if(Jo=null,e=Ia(r),e=xn(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jo=e,null}function Vu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Np()){case Fa:return 1;case Mu:return 4;case Qo:case Cp:return 16;case Au:return 536870912;default:return 16}default:return 16}}var Qt=null,Wa=null,To=null;function Hu(){if(To)return To;var e,t=Wa,n=t.length,r,o="value"in Qt?Qt.value:Qt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return To=o.slice(e,1<r?1-r:void 0)}function Ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yo(){return!0}function Fs(){return!1}function rt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?yo:Fs,this.isPropagationStopped=Fs,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Va=rt(or),Zr=se({},or,{view:0,detail:0}),Bp=rt(Zr),Qi,Xi,pr,wi=se({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ha,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(Qi=e.screenX-pr.screenX,Xi=e.screenY-pr.screenY):Xi=Qi=0,pr=e),Qi)},movementY:function(e){return"movementY"in e?e.movementY:Xi}}),Bs=rt(wi),Kp=se({},wi,{dataTransfer:0}),Up=rt(Kp),Wp=se({},Zr,{relatedTarget:0}),Gi=rt(Wp),Vp=se({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),Hp=rt(Vp),Yp=se({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qp=rt(Yp),Xp=se({},or,{data:0}),Ks=rt(Xp),Gp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zp[e])?!!t[e]:!1}function Ha(){return qp}var eh=se({},Zr,{key:function(e){if(e.key){var t=Gp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ha,charCode:function(e){return e.type==="keypress"?Ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),th=rt(eh),nh=se({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Us=rt(nh),rh=se({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ha}),oh=rt(rh),ih=se({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=rt(ih),ah=se({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sh=rt(ah),ch=[9,13,27,32],Ya=At&&"CompositionEvent"in window,zr=null;At&&"documentMode"in document&&(zr=document.documentMode);var uh=At&&"TextEvent"in window&&!zr,Yu=At&&(!Ya||zr&&8<zr&&11>=zr),Ws=" ",Vs=!1;function Qu(e,t){switch(e){case"keyup":return ch.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function dh(e,t){switch(e){case"compositionend":return Xu(t);case"keypress":return t.which!==32?null:(Vs=!0,Ws);case"textInput":return e=t.data,e===Ws&&Vs?null:e;default:return null}}function fh(e,t){if(Rn)return e==="compositionend"||!Ya&&Qu(e,t)?(e=Hu(),To=Wa=Qt=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yu&&t.locale!=="ko"?null:t.data;default:return null}}var ph={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ph[e.type]:t==="textarea"}function Gu(e,t,n,r){Nu(r),t=Zo(t,"onChange"),0<t.length&&(n=new Va("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jr=null,Ar=null;function hh(e){ad(e,0)}function vi(e){var t=An(e);if(vu(t))return e}function gh(e,t){if(e==="change")return t}var Ju=!1;if(At){var Ji;if(At){var Zi="oninput"in document;if(!Zi){var Ys=document.createElement("div");Ys.setAttribute("oninput","return;"),Zi=typeof Ys.oninput=="function"}Ji=Zi}else Ji=!1;Ju=Ji&&(!document.documentMode||9<document.documentMode)}function Qs(){jr&&(jr.detachEvent("onpropertychange",Zu),Ar=jr=null)}function Zu(e){if(e.propertyName==="value"&&vi(Ar)){var t=[];Gu(t,Ar,e,Ia(e)),Lu(hh,t)}}function xh(e,t,n){e==="focusin"?(Qs(),jr=t,Ar=n,jr.attachEvent("onpropertychange",Zu)):e==="focusout"&&Qs()}function mh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi(Ar)}function yh(e,t){if(e==="click")return vi(t)}function wh(e,t){if(e==="input"||e==="change")return vi(t)}function vh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:vh;function $r(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Cl.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function Xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gs(e,t){var n=Xs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xs(n)}}function qu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ed(){for(var e=window,t=Vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vo(e.document)}return t}function Qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bh(e){var t=ed(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qu(n.ownerDocument.documentElement,n)){if(r!==null&&Qa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Gs(n,i);var l=Gs(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kh=At&&"documentMode"in document&&11>=document.documentMode,On=null,Yl=null,Er=null,Ql=!1;function Js(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ql||On==null||On!==Vo(r)||(r=On,"selectionStart"in r&&Qa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&$r(Er,r)||(Er=r,r=Zo(Yl,"onSelect"),0<r.length&&(t=new Va("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=On)))}function wo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},qi={},td={};At&&(td=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function bi(e){if(qi[e])return qi[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in td)return qi[e]=t[n];return e}var nd=bi("animationend"),rd=bi("animationiteration"),od=bi("animationstart"),id=bi("transitionend"),ld=new Map,Zs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function an(e,t){ld.set(e,t),Nn(t,[e])}for(var el=0;el<Zs.length;el++){var tl=Zs[el],Sh=tl.toLowerCase(),zh=tl[0].toUpperCase()+tl.slice(1);an(Sh,"on"+zh)}an(nd,"onAnimationEnd");an(rd,"onAnimationIteration");an(od,"onAnimationStart");an("dblclick","onDoubleClick");an("focusin","onFocus");an("focusout","onBlur");an(id,"onTransitionEnd");Gn("onMouseEnter",["mouseout","mouseover"]);Gn("onMouseLeave",["mouseout","mouseover"]);Gn("onPointerEnter",["pointerout","pointerover"]);Gn("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jh=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function qs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Sp(r,t,void 0,e),e.currentTarget=null}function ad(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,g=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;qs(o,a,g),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,g=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;qs(o,a,g),i=s}}}if(Yo)throw e=Ul,Yo=!1,Ul=null,e}function ee(e,t){var n=t[ql];n===void 0&&(n=t[ql]=new Set);var r=e+"__bubble";n.has(r)||(sd(t,e,2,!1),n.add(r))}function nl(e,t,n){var r=0;t&&(r|=4),sd(n,e,r,t)}var vo="_reactListening"+Math.random().toString(36).slice(2);function Ir(e){if(!e[vo]){e[vo]=!0,gu.forEach(function(n){n!=="selectionchange"&&(jh.has(n)||nl(n,!1,e),nl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vo]||(t[vo]=!0,nl("selectionchange",!1,t))}}function sd(e,t,n,r){switch(Vu(t)){case 1:var o=Ip;break;case 4:o=Fp;break;default:o=Ua}n=o.bind(null,t,n,e),o=void 0,!Kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function rl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=xn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Lu(function(){var g=i,u=Ia(n),h=[];e:{var p=ld.get(e);if(p!==void 0){var y=Va,v=e;switch(e){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":y=th;break;case"focusin":v="focus",y=Gi;break;case"focusout":v="blur",y=Gi;break;case"beforeblur":case"afterblur":y=Gi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Up;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=oh;break;case nd:case rd:case od:y=Hp;break;case id:y=lh;break;case"scroll":y=Bp;break;case"wheel":y=sh;break;case"copy":case"cut":case"paste":y=Qp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Us}var b=(t&4)!==0,L=!b&&e==="scroll",x=b?p!==null?p+"Capture":null:p;b=[];for(var f=g,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,x!==null&&(w=Tr(f,x),w!=null&&b.push(Fr(f,w,m)))),L)break;f=f.return}0<b.length&&(p=new y(p,v,null,n,u),h.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==Fl&&(v=n.relatedTarget||n.fromElement)&&(xn(v)||v[$t]))break e;if((y||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=g,v=v?xn(v):null,v!==null&&(L=Cn(v),v!==L||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=g),y!==v)){if(b=Bs,w="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(b=Us,w="onPointerLeave",x="onPointerEnter",f="pointer"),L=y==null?p:An(y),m=v==null?p:An(v),p=new b(w,f+"leave",y,n,u),p.target=L,p.relatedTarget=m,w=null,xn(u)===g&&(b=new b(x,f+"enter",v,n,u),b.target=m,b.relatedTarget=L,w=b),L=w,y&&v)t:{for(b=y,x=v,f=0,m=b;m;m=Ln(m))f++;for(m=0,w=x;w;w=Ln(w))m++;for(;0<f-m;)b=Ln(b),f--;for(;0<m-f;)x=Ln(x),m--;for(;f--;){if(b===x||x!==null&&b===x.alternate)break t;b=Ln(b),x=Ln(x)}b=null}else b=null;y!==null&&ec(h,p,y,b,!1),v!==null&&L!==null&&ec(h,L,v,b,!0)}}e:{if(p=g?An(g):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var z=gh;else if(Hs(p))if(Ju)z=wh;else{z=mh;var _=xh}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(z=yh);if(z&&(z=z(e,g))){Gu(h,z,n,u);break e}_&&_(e,p,g),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&Ol(p,"number",p.value)}switch(_=g?An(g):window,e){case"focusin":(Hs(_)||_.contentEditable==="true")&&(On=_,Yl=g,Er=null);break;case"focusout":Er=Yl=On=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,Js(h,n,u);break;case"selectionchange":if(kh)break;case"keydown":case"keyup":Js(h,n,u)}var P;if(Ya)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Rn?Qu(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Yu&&n.locale!=="ko"&&(Rn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Rn&&(P=Hu()):(Qt=u,Wa="value"in Qt?Qt.value:Qt.textContent,Rn=!0)),_=Zo(g,T),0<_.length&&(T=new Ks(T,e,null,n,u),h.push({event:T,listeners:_}),P?T.data=P:(P=Xu(n),P!==null&&(T.data=P)))),(P=uh?dh(e,n):fh(e,n))&&(g=Zo(g,"onBeforeInput"),0<g.length&&(u=new Ks("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:g}),u.data=P))}ad(h,t)})}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Tr(e,n),i!=null&&r.unshift(Fr(e,i,o)),i=Tr(e,t),i!=null&&r.push(Fr(e,i,o))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ec(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,g=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&g!==null&&(a=g,o?(s=Tr(n,i),s!=null&&l.unshift(Fr(n,s,a))):o||(s=Tr(n,i),s!=null&&l.push(Fr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Eh=/\r\n?/g,Nh=/\u0000|\uFFFD/g;function tc(e){return(typeof e=="string"?e:""+e).replace(Eh,`
`).replace(Nh,"")}function bo(e,t,n){if(t=tc(t),tc(e)!==t&&n)throw Error(j(425))}function qo(){}var Xl=null,Gl=null;function Jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,Ch=typeof clearTimeout=="function"?clearTimeout:void 0,nc=typeof Promise=="function"?Promise:void 0,_h=typeof queueMicrotask=="function"?queueMicrotask:typeof nc<"u"?function(e){return nc.resolve(null).then(e).catch(Dh)}:Zl;function Dh(e){setTimeout(function(){throw e})}function ol(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Mr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ir=Math.random().toString(36).slice(2),jt="__reactFiber$"+ir,Br="__reactProps$"+ir,$t="__reactContainer$"+ir,ql="__reactEvents$"+ir,Lh="__reactListeners$"+ir,Ph="__reactHandles$"+ir;function xn(e){var t=e[jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rc(e);e!==null;){if(n=e[jt])return n;e=rc(e)}return t}e=n,n=e.parentNode}return null}function qr(e){return e=e[jt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function ki(e){return e[Br]||null}var ea=[],$n=-1;function sn(e){return{current:e}}function te(e){0>$n||(e.current=ea[$n],ea[$n]=null,$n--)}function q(e,t){$n++,ea[$n]=e.current,e.current=t}var ln={},Le=sn(ln),He=sn(!1),kn=ln;function Jn(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ye(e){return e=e.childContextTypes,e!=null}function ei(){te(He),te(Le)}function oc(e,t,n){if(Le.current!==ln)throw Error(j(168));q(Le,t),q(He,n)}function cd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,xp(e)||"Unknown",o));return se({},n,r)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,kn=Le.current,q(Le,e),q(He,He.current),!0}function ic(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=cd(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,te(He),te(Le),q(Le,e)):te(He),q(He,n)}var Tt=null,Si=!1,il=!1;function ud(e){Tt===null?Tt=[e]:Tt.push(e)}function Th(e){Si=!0,ud(e)}function cn(){if(!il&&Tt!==null){il=!0;var e=0,t=G;try{var n=Tt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,Si=!1}catch(o){throw Tt!==null&&(Tt=Tt.slice(e+1)),Ou(Fa,cn),o}finally{G=t,il=!1}}return null}var In=[],Fn=0,ni=null,ri=0,at=[],st=0,Sn=null,Rt=1,Ot="";function hn(e,t){In[Fn++]=ri,In[Fn++]=ni,ni=e,ri=t}function dd(e,t,n){at[st++]=Rt,at[st++]=Ot,at[st++]=Sn,Sn=e;var r=Rt;e=Ot;var o=32-yt(r)-1;r&=~(1<<o),n+=1;var i=32-yt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Rt=1<<32-yt(t)+o|n<<o|r,Ot=i+e}else Rt=1<<i|n<<o|r,Ot=e}function Xa(e){e.return!==null&&(hn(e,1),dd(e,1,0))}function Ga(e){for(;e===ni;)ni=In[--Fn],In[Fn]=null,ri=In[--Fn],In[Fn]=null;for(;e===Sn;)Sn=at[--st],at[st]=null,Ot=at[--st],at[st]=null,Rt=at[--st],at[st]=null}var qe=null,Ze=null,ie=!1,xt=null;function fd(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ze=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sn!==null?{id:Rt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ze=null,!0):!1;default:return!1}}function ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function na(e){if(ie){var t=Ze;if(t){var n=t;if(!lc(e,t)){if(ta(e))throw Error(j(418));t=qt(n.nextSibling);var r=qe;t&&lc(e,t)?fd(r,n):(e.flags=e.flags&-4097|2,ie=!1,qe=e)}}else{if(ta(e))throw Error(j(418));e.flags=e.flags&-4097|2,ie=!1,qe=e}}}function ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function ko(e){if(e!==qe)return!1;if(!ie)return ac(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jl(e.type,e.memoizedProps)),t&&(t=Ze)){if(ta(e))throw pd(),Error(j(418));for(;t;)fd(e,t),t=qt(t.nextSibling)}if(ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=qe?qt(e.stateNode.nextSibling):null;return!0}function pd(){for(var e=Ze;e;)e=qt(e.nextSibling)}function Zn(){Ze=qe=null,ie=!1}function Ja(e){xt===null?xt=[e]:xt.push(e)}var Rh=Bt.ReactCurrentBatchConfig;function hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function So(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sc(e){var t=e._init;return t(e._payload)}function hd(e){function t(x,f){if(e){var m=x.deletions;m===null?(x.deletions=[f],x.flags|=16):m.push(f)}}function n(x,f){if(!e)return null;for(;f!==null;)t(x,f),f=f.sibling;return null}function r(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function o(x,f){return x=rn(x,f),x.index=0,x.sibling=null,x}function i(x,f,m){return x.index=m,e?(m=x.alternate,m!==null?(m=m.index,m<f?(x.flags|=2,f):m):(x.flags|=2,f)):(x.flags|=1048576,f)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function a(x,f,m,w){return f===null||f.tag!==6?(f=fl(m,x.mode,w),f.return=x,f):(f=o(f,m),f.return=x,f)}function s(x,f,m,w){var z=m.type;return z===Tn?u(x,f,m.props.children,w,m.key):f!==null&&(f.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Wt&&sc(z)===f.type)?(w=o(f,m.props),w.ref=hr(x,f,m),w.return=x,w):(w=Bo(m.type,m.key,m.props,null,x.mode,w),w.ref=hr(x,f,m),w.return=x,w)}function g(x,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=pl(m,x.mode,w),f.return=x,f):(f=o(f,m.children||[]),f.return=x,f)}function u(x,f,m,w,z){return f===null||f.tag!==7?(f=vn(m,x.mode,w,z),f.return=x,f):(f=o(f,m),f.return=x,f)}function h(x,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=fl(""+f,x.mode,m),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case fo:return m=Bo(f.type,f.key,f.props,null,x.mode,m),m.ref=hr(x,null,f),m.return=x,m;case Pn:return f=pl(f,x.mode,m),f.return=x,f;case Wt:var w=f._init;return h(x,w(f._payload),m)}if(yr(f)||cr(f))return f=vn(f,x.mode,m,null),f.return=x,f;So(x,f)}return null}function p(x,f,m,w){var z=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return z!==null?null:a(x,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fo:return m.key===z?s(x,f,m,w):null;case Pn:return m.key===z?g(x,f,m,w):null;case Wt:return z=m._init,p(x,f,z(m._payload),w)}if(yr(m)||cr(m))return z!==null?null:u(x,f,m,w,null);So(x,m)}return null}function y(x,f,m,w,z){if(typeof w=="string"&&w!==""||typeof w=="number")return x=x.get(m)||null,a(f,x,""+w,z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fo:return x=x.get(w.key===null?m:w.key)||null,s(f,x,w,z);case Pn:return x=x.get(w.key===null?m:w.key)||null,g(f,x,w,z);case Wt:var _=w._init;return y(x,f,m,_(w._payload),z)}if(yr(w)||cr(w))return x=x.get(m)||null,u(f,x,w,z,null);So(f,w)}return null}function v(x,f,m,w){for(var z=null,_=null,P=f,T=f=0,W=null;P!==null&&T<m.length;T++){P.index>T?(W=P,P=null):W=P.sibling;var A=p(x,P,m[T],w);if(A===null){P===null&&(P=W);break}e&&P&&A.alternate===null&&t(x,P),f=i(A,f,T),_===null?z=A:_.sibling=A,_=A,P=W}if(T===m.length)return n(x,P),ie&&hn(x,T),z;if(P===null){for(;T<m.length;T++)P=h(x,m[T],w),P!==null&&(f=i(P,f,T),_===null?z=P:_.sibling=P,_=P);return ie&&hn(x,T),z}for(P=r(x,P);T<m.length;T++)W=y(P,x,T,m[T],w),W!==null&&(e&&W.alternate!==null&&P.delete(W.key===null?T:W.key),f=i(W,f,T),_===null?z=W:_.sibling=W,_=W);return e&&P.forEach(function(J){return t(x,J)}),ie&&hn(x,T),z}function b(x,f,m,w){var z=cr(m);if(typeof z!="function")throw Error(j(150));if(m=z.call(m),m==null)throw Error(j(151));for(var _=z=null,P=f,T=f=0,W=null,A=m.next();P!==null&&!A.done;T++,A=m.next()){P.index>T?(W=P,P=null):W=P.sibling;var J=p(x,P,A.value,w);if(J===null){P===null&&(P=W);break}e&&P&&J.alternate===null&&t(x,P),f=i(J,f,T),_===null?z=J:_.sibling=J,_=J,P=W}if(A.done)return n(x,P),ie&&hn(x,T),z;if(P===null){for(;!A.done;T++,A=m.next())A=h(x,A.value,w),A!==null&&(f=i(A,f,T),_===null?z=A:_.sibling=A,_=A);return ie&&hn(x,T),z}for(P=r(x,P);!A.done;T++,A=m.next())A=y(P,x,T,A.value,w),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?T:A.key),f=i(A,f,T),_===null?z=A:_.sibling=A,_=A);return e&&P.forEach(function(Pe){return t(x,Pe)}),ie&&hn(x,T),z}function L(x,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Tn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case fo:e:{for(var z=m.key,_=f;_!==null;){if(_.key===z){if(z=m.type,z===Tn){if(_.tag===7){n(x,_.sibling),f=o(_,m.props.children),f.return=x,x=f;break e}}else if(_.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Wt&&sc(z)===_.type){n(x,_.sibling),f=o(_,m.props),f.ref=hr(x,_,m),f.return=x,x=f;break e}n(x,_);break}else t(x,_);_=_.sibling}m.type===Tn?(f=vn(m.props.children,x.mode,w,m.key),f.return=x,x=f):(w=Bo(m.type,m.key,m.props,null,x.mode,w),w.ref=hr(x,f,m),w.return=x,x=w)}return l(x);case Pn:e:{for(_=m.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(x,f.sibling),f=o(f,m.children||[]),f.return=x,x=f;break e}else{n(x,f);break}else t(x,f);f=f.sibling}f=pl(m,x.mode,w),f.return=x,x=f}return l(x);case Wt:return _=m._init,L(x,f,_(m._payload),w)}if(yr(m))return v(x,f,m,w);if(cr(m))return b(x,f,m,w);So(x,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(x,f.sibling),f=o(f,m),f.return=x,x=f):(n(x,f),f=fl(m,x.mode,w),f.return=x,x=f),l(x)):n(x,f)}return L}var qn=hd(!0),gd=hd(!1),oi=sn(null),ii=null,Bn=null,Za=null;function qa(){Za=Bn=ii=null}function es(e){var t=oi.current;te(oi),e._currentValue=t}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qn(e,t){ii=e,Za=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(Za!==e)if(e={context:e,memoizedValue:t,next:null},Bn===null){if(ii===null)throw Error(j(308));Bn=e,ii.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return t}var mn=null;function ts(e){mn===null?mn=[e]:mn.push(e)}function xd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ts(t)):(n.next=o.next,o.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function md(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,It(e,n)}return o=r.interleaved,o===null?(t.next=t,ts(r)):(t.next=o.next,o.next=t),r.interleaved=t,It(e,n)}function Oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ba(e,n)}}function cc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function li(e,t,n,r){var o=e.updateQueue;Vt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,g=s.next;s.next=null,l===null?i=g:l.next=g,l=s;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==l&&(a===null?u.firstBaseUpdate=g:a.next=g,u.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,u=g=s=null,a=i;do{var p=a.lane,y=a.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,b=a;switch(p=t,y=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){h=v.call(y,h,p);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,p=typeof v=="function"?v.call(y,h,p):v,p==null)break e;h=se({},h,p);break e;case 2:Vt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(g=u=y,s=h):u=u.next=y,l|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(u===null&&(s=h),o.baseState=s,o.firstBaseUpdate=g,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);jn|=l,e.lanes=l,e.memoizedState=h}}function uc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var eo={},Nt=sn(eo),Kr=sn(eo),Ur=sn(eo);function yn(e){if(e===eo)throw Error(j(174));return e}function rs(e,t){switch(q(Ur,t),q(Kr,e),q(Nt,eo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Al(t,e)}te(Nt),q(Nt,t)}function er(){te(Nt),te(Kr),te(Ur)}function yd(e){yn(Ur.current);var t=yn(Nt.current),n=Al(t,e.type);t!==n&&(q(Kr,e),q(Nt,n))}function os(e){Kr.current===e&&(te(Nt),te(Kr))}var le=sn(0);function ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ll=[];function is(){for(var e=0;e<ll.length;e++)ll[e]._workInProgressVersionPrimary=null;ll.length=0}var Mo=Bt.ReactCurrentDispatcher,al=Bt.ReactCurrentBatchConfig,zn=0,ae=null,ge=null,ve=null,si=!1,Nr=!1,Wr=0,Oh=0;function Ce(){throw Error(j(321))}function ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function as(e,t,n,r,o,i){if(zn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mo.current=e===null||e.memoizedState===null?Ih:Fh,e=n(r,o),Nr){i=0;do{if(Nr=!1,Wr=0,25<=i)throw Error(j(301));i+=1,ve=ge=null,t.updateQueue=null,Mo.current=Bh,e=n(r,o)}while(Nr)}if(Mo.current=ci,t=ge!==null&&ge.next!==null,zn=0,ve=ge=ae=null,si=!1,t)throw Error(j(300));return e}function ss(){var e=Wr!==0;return Wr=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ae.memoizedState=ve=e:ve=ve.next=e,ve}function ft(){if(ge===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=ve===null?ae.memoizedState:ve.next;if(t!==null)ve=t,ge=e;else{if(e===null)throw Error(j(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ve===null?ae.memoizedState=ve=e:ve=ve.next=e}return ve}function Vr(e,t){return typeof t=="function"?t(e):t}function sl(e){var t=ft(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ge,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,g=i;do{var u=g.lane;if((zn&u)===u)s!==null&&(s=s.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var h={lane:u,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,ae.lanes|=u,jn|=u}g=g.next}while(g!==null&&g!==i);s===null?l=r:s.next=a,vt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,jn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cl(e){var t=ft(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);vt(i,t.memoizedState)||(Ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function wd(){}function vd(e,t){var n=ae,r=ft(),o=t(),i=!vt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ve=!0),r=r.queue,cs(Sd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Hr(9,kd.bind(null,n,r,o,t),void 0,null),be===null)throw Error(j(349));zn&30||bd(n,t,o)}return o}function bd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kd(e,t,n,r){t.value=n,t.getSnapshot=r,zd(t)&&jd(e)}function Sd(e,t,n){return n(function(){zd(t)&&jd(e)})}function zd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function jd(e){var t=It(e,1);t!==null&&wt(t,e,1,-1)}function dc(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:e},t.queue=e,e=e.dispatch=$h.bind(null,ae,e),[t.memoizedState,e]}function Hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ed(){return ft().memoizedState}function Ao(e,t,n,r){var o=zt();ae.flags|=e,o.memoizedState=Hr(1|t,n,void 0,r===void 0?null:r)}function zi(e,t,n,r){var o=ft();r=r===void 0?null:r;var i=void 0;if(ge!==null){var l=ge.memoizedState;if(i=l.destroy,r!==null&&ls(r,l.deps)){o.memoizedState=Hr(t,n,i,r);return}}ae.flags|=e,o.memoizedState=Hr(1|t,n,i,r)}function fc(e,t){return Ao(8390656,8,e,t)}function cs(e,t){return zi(2048,8,e,t)}function Nd(e,t){return zi(4,2,e,t)}function Cd(e,t){return zi(4,4,e,t)}function _d(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dd(e,t,n){return n=n!=null?n.concat([e]):null,zi(4,4,_d.bind(null,t,e),n)}function us(){}function Ld(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pd(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Td(e,t,n){return zn&21?(vt(n,t)||(n=$u(),ae.lanes|=n,jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function Mh(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=al.transition;al.transition={};try{e(!1),t()}finally{G=n,al.transition=r}}function Rd(){return ft().memoizedState}function Ah(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Od(e))Md(t,n);else if(n=xd(e,t,n,r),n!==null){var o=Ae();wt(n,e,r,o),Ad(n,t,r)}}function $h(e,t,n){var r=nn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Od(e))Md(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,vt(a,l)){var s=t.interleaved;s===null?(o.next=o,ts(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=xd(e,t,o,r),n!==null&&(o=Ae(),wt(n,e,r,o),Ad(n,t,r))}}function Od(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Md(e,t){Nr=si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ad(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ba(e,n)}}var ci={readContext:dt,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},Ih={readContext:dt,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:fc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4194308,4,_d.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ao(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ah.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:dc,useDebugValue:us,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=dc(!1),t=e[0];return e=Mh.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,o=zt();if(ie){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),be===null)throw Error(j(349));zn&30||bd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,fc(Sd.bind(null,r,i,e),[e]),r.flags|=2048,Hr(9,kd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=zt(),t=be.identifierPrefix;if(ie){var n=Ot,r=Rt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Oh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fh={readContext:dt,useCallback:Ld,useContext:dt,useEffect:cs,useImperativeHandle:Dd,useInsertionEffect:Nd,useLayoutEffect:Cd,useMemo:Pd,useReducer:sl,useRef:Ed,useState:function(){return sl(Vr)},useDebugValue:us,useDeferredValue:function(e){var t=ft();return Td(t,ge.memoizedState,e)},useTransition:function(){var e=sl(Vr)[0],t=ft().memoizedState;return[e,t]},useMutableSource:wd,useSyncExternalStore:vd,useId:Rd,unstable_isNewReconciler:!1},Bh={readContext:dt,useCallback:Ld,useContext:dt,useEffect:cs,useImperativeHandle:Dd,useInsertionEffect:Nd,useLayoutEffect:Cd,useMemo:Pd,useReducer:cl,useRef:Ed,useState:function(){return cl(Vr)},useDebugValue:us,useDeferredValue:function(e){var t=ft();return ge===null?t.memoizedState=e:Td(t,ge.memoizedState,e)},useTransition:function(){var e=cl(Vr)[0],t=ft().memoizedState;return[e,t]},useMutableSource:wd,useSyncExternalStore:vd,useId:Rd,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function oa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ji={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=nn(e),i=Mt(r,o);i.payload=t,n!=null&&(i.callback=n),t=en(e,i,o),t!==null&&(wt(t,e,o,r),Oo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=nn(e),i=Mt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=en(e,i,o),t!==null&&(wt(t,e,o,r),Oo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=nn(e),o=Mt(n,r);o.tag=2,t!=null&&(o.callback=t),t=en(e,o,r),t!==null&&(wt(t,e,r,n),Oo(t,e,r))}};function pc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(o,i):!0}function $d(e,t,n){var r=!1,o=ln,i=t.contextType;return typeof i=="object"&&i!==null?i=dt(i):(o=Ye(t)?kn:Le.current,r=t.contextTypes,i=(r=r!=null)?Jn(e,o):ln),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ji,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function hc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ji.enqueueReplaceState(t,t.state,null)}function ia(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ns(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=dt(i):(i=Ye(t)?kn:Le.current,o.context=Jn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(oa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ji.enqueueReplaceState(o,o.state,null),li(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t){try{var n="",r=t;do n+=gp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function la(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kh=typeof WeakMap=="function"?WeakMap:Map;function Id(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){di||(di=!0,xa=r),la(e,t)},n}function Fd(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){la(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){la(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function gc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ng.bind(null,e,t,n),t.then(e,e))}function xc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var Uh=Bt.ReactCurrentOwner,Ve=!1;function Oe(e,t,n,r){t.child=e===null?gd(t,null,n,r):qn(t,e.child,n,r)}function yc(e,t,n,r,o){n=n.render;var i=t.ref;return Qn(t,o),r=as(e,t,n,r,i,o),n=ss(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(ie&&n&&Xa(t),t.flags|=1,Oe(e,t,r,o),t.child)}function wc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ys(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Bd(e,t,i,r,o)):(e=Bo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(l,r)&&e.ref===t.ref)return Ft(e,t,o)}return t.flags|=1,e=rn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Bd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if($r(i,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Ft(e,t,o)}return aa(e,t,n,r,o)}function Kd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Un,Je),Je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(Un,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,q(Un,Je),Je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,q(Un,Je),Je|=r;return Oe(e,t,o,n),t.child}function Ud(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function aa(e,t,n,r,o){var i=Ye(n)?kn:Le.current;return i=Jn(t,i),Qn(t,o),n=as(e,t,n,r,i,o),r=ss(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(ie&&r&&Xa(t),t.flags|=1,Oe(e,t,n,o),t.child)}function vc(e,t,n,r,o){if(Ye(n)){var i=!0;ti(t)}else i=!1;if(Qn(t,o),t.stateNode===null)$o(e,t),$d(t,n,r),ia(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,g=n.contextType;typeof g=="object"&&g!==null?g=dt(g):(g=Ye(n)?kn:Le.current,g=Jn(t,g));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==g)&&hc(t,l,r,g),Vt=!1;var p=t.memoizedState;l.state=p,li(t,r,l,o),s=t.memoizedState,a!==r||p!==s||He.current||Vt?(typeof u=="function"&&(oa(t,n,u,r),s=t.memoizedState),(a=Vt||pc(t,n,a,r,p,s,g))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=g,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,md(e,t),a=t.memoizedProps,g=t.type===t.elementType?a:ht(t.type,a),l.props=g,h=t.pendingProps,p=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=dt(s):(s=Ye(n)?kn:Le.current,s=Jn(t,s));var y=n.getDerivedStateFromProps;(u=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||p!==s)&&hc(t,l,r,s),Vt=!1,p=t.memoizedState,l.state=p,li(t,r,l,o);var v=t.memoizedState;a!==h||p!==v||He.current||Vt?(typeof y=="function"&&(oa(t,n,y,r),v=t.memoizedState),(g=Vt||pc(t,n,g,r,p,v,s)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=s,r=g):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return sa(e,t,n,r,i,o)}function sa(e,t,n,r,o,i){Ud(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ic(t,n,!1),Ft(e,t,i);r=t.stateNode,Uh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=qn(t,e.child,null,i),t.child=qn(t,null,a,i)):Oe(e,t,a,i),t.memoizedState=r.state,o&&ic(t,n,!0),t.child}function Wd(e){var t=e.stateNode;t.pendingContext?oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oc(e,t.context,!1),rs(e,t.containerInfo)}function bc(e,t,n,r,o){return Zn(),Ja(o),t.flags|=256,Oe(e,t,n,r),t.child}var ca={dehydrated:null,treeContext:null,retryLane:0};function ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vd(e,t,n){var r=t.pendingProps,o=le.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),q(le,o&1),e===null)return na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ci(l,r,0,null),e=vn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ua(n),t.memoizedState=ca,e):ds(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Wh(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=rn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=rn(a,i):(i=vn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ua(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ca,r}return i=e.child,e=i.sibling,r=rn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ds(e,t){return t=Ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zo(e,t,n,r){return r!==null&&Ja(r),qn(t,e.child,null,n),e=ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ul(Error(j(422))),zo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ci({mode:"visible",children:r.children},o,0,null),i=vn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&qn(t,e.child,null,l),t.child.memoizedState=ua(l),t.memoizedState=ca,i);if(!(t.mode&1))return zo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(j(419)),r=ul(i,r,void 0),zo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ve||a){if(r=be,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,It(e,o),wt(r,e,o,-1))}return ms(),r=ul(Error(j(421))),zo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=rg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ze=qt(o.nextSibling),qe=t,ie=!0,xt=null,e!==null&&(at[st++]=Rt,at[st++]=Ot,at[st++]=Sn,Rt=e.id,Ot=e.overflow,Sn=t),t=ds(t,r.children),t.flags|=4096,t)}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function dl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Hd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Oe(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(le,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ai(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),dl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ai(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}dl(t,!0,n,null,i);break;case"together":dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $o(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vh(e,t,n){switch(t.tag){case 3:Wd(t),Zn();break;case 5:yd(t);break;case 1:Ye(t.type)&&ti(t);break;case 4:rs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;q(oi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?Vd(e,t,n):(q(le,le.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);q(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Kd(e,t,n)}return Ft(e,t,n)}var Yd,da,Qd,Xd;Yd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};da=function(){};Qd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,yn(Nt.current);var i=null;switch(n){case"input":o=Tl(e,o),r=Tl(e,r),i=[];break;case"select":o=se({},o,{value:void 0}),r=se({},r,{value:void 0}),i=[];break;case"textarea":o=Ml(e,o),r=Ml(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qo)}$l(n,r);var l;n=null;for(g in o)if(!r.hasOwnProperty(g)&&o.hasOwnProperty(g)&&o[g]!=null)if(g==="style"){var a=o[g];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Lr.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in r){var s=r[g];if(a=o!=null?o[g]:void 0,r.hasOwnProperty(g)&&s!==a&&(s!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(g,n)),n=s;else g==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(g,s)):g==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(g,""+s):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(Lr.hasOwnProperty(g)?(s!=null&&g==="onScroll"&&ee("scroll",e),i||a===s||(i=[])):(i=i||[]).push(g,s))}n&&(i=i||[]).push("style",n);var g=i;(t.updateQueue=g)&&(t.flags|=4)}};Xd=function(e,t,n,r){n!==r&&(t.flags|=4)};function gr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hh(e,t,n){var r=t.pendingProps;switch(Ga(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Ye(t.type)&&ei(),_e(t),null;case 3:return r=t.stateNode,er(),te(He),te(Le),is(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ko(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(wa(xt),xt=null))),da(e,t),_e(t),null;case 5:os(t);var o=yn(Ur.current);if(n=t.type,e!==null&&t.stateNode!=null)Qd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return _e(t),null}if(e=yn(Nt.current),ko(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[jt]=t,r[Br]=i,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(o=0;o<vr.length;o++)ee(vr[o],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Ls(r,i),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ee("invalid",r);break;case"textarea":Ts(r,i),ee("invalid",r)}$l(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&bo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&bo(r.textContent,a,e),o=["children",""+a]):Lr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ee("scroll",r)}switch(n){case"input":po(r),Ps(r,i,!0);break;case"textarea":po(r),Rs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=qo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Su(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[jt]=t,e[Br]=r,Yd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Il(n,r),n){case"dialog":ee("cancel",e),ee("close",e),o=r;break;case"iframe":case"object":case"embed":ee("load",e),o=r;break;case"video":case"audio":for(o=0;o<vr.length;o++)ee(vr[o],e);o=r;break;case"source":ee("error",e),o=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),o=r;break;case"details":ee("toggle",e),o=r;break;case"input":Ls(e,r),o=Tl(e,r),ee("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=se({},r,{value:void 0}),ee("invalid",e);break;case"textarea":Ts(e,r),o=Ml(e,r),ee("invalid",e);break;default:o=r}$l(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Eu(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&zu(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Pr(e,s):typeof s=="number"&&Pr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Lr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ee("scroll",e):s!=null&&Oa(e,i,s,l))}switch(n){case"input":po(e),Ps(e,r,!1);break;case"textarea":po(e),Rs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Wn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)Xd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=yn(Ur.current),yn(Nt.current),ko(t)){if(r=t.stateNode,n=t.memoizedProps,r[jt]=t,(i=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=t,t.stateNode=r}return _e(t),null;case 13:if(te(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ze!==null&&t.mode&1&&!(t.flags&128))pd(),Zn(),t.flags|=98560,i=!1;else if(i=ko(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[jt]=t}else Zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else xt!==null&&(wa(xt),xt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?xe===0&&(xe=3):ms())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return er(),da(e,t),e===null&&Ir(t.stateNode.containerInfo),_e(t),null;case 10:return es(t.type._context),_e(t),null;case 17:return Ye(t.type)&&ei(),_e(t),null;case 19:if(te(le),i=t.memoizedState,i===null)return _e(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)gr(i,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ai(e),l!==null){for(t.flags|=128,gr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(le,le.current&1|2),t.child}e=e.sibling}i.tail!==null&&ue()>nr&&(t.flags|=128,r=!0,gr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ai(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ie)return _e(t),null}else 2*ue()-i.renderingStartTime>nr&&n!==1073741824&&(t.flags|=128,r=!0,gr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ue(),t.sibling=null,n=le.current,q(le,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return xs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Yh(e,t){switch(Ga(t),t.tag){case 1:return Ye(t.type)&&ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),te(He),te(Le),is(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return os(t),null;case 13:if(te(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(le),null;case 4:return er(),null;case 10:return es(t.type._context),null;case 22:case 23:return xs(),null;case 24:return null;default:return null}}var jo=!1,De=!1,Qh=typeof WeakSet=="function"?WeakSet:Set,M=null;function Kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function fa(e,t,n){try{n()}catch(r){ce(e,t,r)}}var Sc=!1;function Xh(e,t){if(Xl=Go,e=ed(),Qa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,g=0,u=0,h=e,p=null;t:for(;;){for(var y;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===e)break t;if(p===n&&++g===o&&(a=l),p===i&&++u===r&&(s=l),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gl={focusedElem:e,selectionRange:n},Go=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,L=v.memoizedState,x=t.stateNode,f=x.getSnapshotBeforeUpdate(t.elementType===t.type?b:ht(t.type,b),L);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){ce(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return v=Sc,Sc=!1,v}function Cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&fa(t,n,i)}o=o.next}while(o!==r)}}function Ei(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gd(e){var t=e.alternate;t!==null&&(e.alternate=null,Gd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[Br],delete t[ql],delete t[Lh],delete t[Ph])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jd(e){return e.tag===5||e.tag===3||e.tag===4}function zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qo));else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}function ga(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ga(e,t,n),e=e.sibling;e!==null;)ga(e,t,n),e=e.sibling}var ze=null,gt=!1;function Ut(e,t,n){for(n=n.child;n!==null;)Zd(e,t,n),n=n.sibling}function Zd(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(yi,n)}catch{}switch(n.tag){case 5:De||Kn(n,t);case 6:var r=ze,o=gt;ze=null,Ut(e,t,n),ze=r,gt=o,ze!==null&&(gt?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(gt?(e=ze,n=n.stateNode,e.nodeType===8?ol(e.parentNode,n):e.nodeType===1&&ol(e,n),Mr(e)):ol(ze,n.stateNode));break;case 4:r=ze,o=gt,ze=n.stateNode.containerInfo,gt=!0,Ut(e,t,n),ze=r,gt=o;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&fa(n,t,l),o=o.next}while(o!==r)}Ut(e,t,n);break;case 1:if(!De&&(Kn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,t,a)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Ut(e,t,n),De=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qh),t.forEach(function(r){var o=og.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ze=a.stateNode,gt=!1;break e;case 3:ze=a.stateNode.containerInfo,gt=!0;break e;case 4:ze=a.stateNode.containerInfo,gt=!0;break e}a=a.return}if(ze===null)throw Error(j(160));Zd(i,l,o),ze=null,gt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(g){ce(o,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qd(t,e),t=t.sibling}function qd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),St(e),r&4){try{Cr(3,e,e.return),Ei(3,e)}catch(b){ce(e,e.return,b)}try{Cr(5,e,e.return)}catch(b){ce(e,e.return,b)}}break;case 1:pt(t,e),St(e),r&512&&n!==null&&Kn(n,n.return);break;case 5:if(pt(t,e),St(e),r&512&&n!==null&&Kn(n,n.return),e.flags&32){var o=e.stateNode;try{Pr(o,"")}catch(b){ce(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&bu(o,i),Il(a,l);var g=Il(a,i);for(l=0;l<s.length;l+=2){var u=s[l],h=s[l+1];u==="style"?Eu(o,h):u==="dangerouslySetInnerHTML"?zu(o,h):u==="children"?Pr(o,h):Oa(o,u,h,g)}switch(a){case"input":Rl(o,i);break;case"textarea":ku(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Wn(o,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?Wn(o,!!i.multiple,i.defaultValue,!0):Wn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Br]=i}catch(b){ce(e,e.return,b)}}break;case 6:if(pt(t,e),St(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){ce(e,e.return,b)}}break;case 3:if(pt(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(b){ce(e,e.return,b)}break;case 4:pt(t,e),St(e);break;case 13:pt(t,e),St(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(hs=ue())),r&4&&jc(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(De=(g=De)||u,pt(t,e),De=g):pt(t,e),St(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!u&&e.mode&1)for(M=e,u=e.child;u!==null;){for(h=M=u;M!==null;){switch(p=M,y=p.child,p.tag){case 0:case 11:case 14:case 15:Cr(4,p,p.return);break;case 1:Kn(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){ce(r,n,b)}}break;case 5:Kn(p,p.return);break;case 22:if(p.memoizedState!==null){Nc(h);continue}}y!==null?(y.return=p,M=y):Nc(h)}u=u.sibling}e:for(u=null,h=e;;){if(h.tag===5){if(u===null){u=h;try{o=h.stateNode,g?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ju("display",l))}catch(b){ce(e,e.return,b)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=g?"":h.memoizedProps}catch(b){ce(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pt(t,e),St(e),r&4&&jc(e);break;case 21:break;default:pt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jd(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Pr(o,""),r.flags&=-33);var i=zc(e);ga(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=zc(e);ha(e,a,l);break;default:throw Error(j(161))}}catch(s){ce(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gh(e,t,n){M=e,ef(e)}function ef(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||jo;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||De;a=jo;var g=De;if(jo=l,(De=s)&&!g)for(M=o;M!==null;)l=M,s=l.child,l.tag===22&&l.memoizedState!==null?Cc(o):s!==null?(s.return=l,M=s):Cc(o);for(;i!==null;)M=i,ef(i),i=i.sibling;M=o,jo=a,De=g}Ec(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,M=i):Ec(e)}}function Ec(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||Ei(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&uc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var u=g.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Mr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}De||t.flags&512&&pa(t)}catch(p){ce(t,t.return,p)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Nc(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Cc(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ei(4,t)}catch(s){ce(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ce(t,o,s)}}var i=t.return;try{pa(t)}catch(s){ce(t,i,s)}break;case 5:var l=t.return;try{pa(t)}catch(s){ce(t,l,s)}}}catch(s){ce(t,t.return,s)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var Jh=Math.ceil,ui=Bt.ReactCurrentDispatcher,fs=Bt.ReactCurrentOwner,ut=Bt.ReactCurrentBatchConfig,Y=0,be=null,he=null,Ee=0,Je=0,Un=sn(0),xe=0,Yr=null,jn=0,Ni=0,ps=0,_r=null,We=null,hs=0,nr=1/0,Pt=null,di=!1,xa=null,tn=null,Eo=!1,Xt=null,fi=0,Dr=0,ma=null,Io=-1,Fo=0;function Ae(){return Y&6?ue():Io!==-1?Io:Io=ue()}function nn(e){return e.mode&1?Y&2&&Ee!==0?Ee&-Ee:Rh.transition!==null?(Fo===0&&(Fo=$u()),Fo):(e=G,e!==0||(e=window.event,e=e===void 0?16:Vu(e.type)),e):1}function wt(e,t,n,r){if(50<Dr)throw Dr=0,ma=null,Error(j(185));Jr(e,n,r),(!(Y&2)||e!==be)&&(e===be&&(!(Y&2)&&(Ni|=n),xe===4&&Yt(e,Ee)),Qe(e,r),n===1&&Y===0&&!(t.mode&1)&&(nr=ue()+500,Si&&cn()))}function Qe(e,t){var n=e.callbackNode;Rp(e,t);var r=Xo(e,e===be?Ee:0);if(r===0)n!==null&&As(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&As(n),t===1)e.tag===0?Th(_c.bind(null,e)):ud(_c.bind(null,e)),_h(function(){!(Y&6)&&cn()}),n=null;else{switch(Iu(r)){case 1:n=Fa;break;case 4:n=Mu;break;case 16:n=Qo;break;case 536870912:n=Au;break;default:n=Qo}n=cf(n,tf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tf(e,t){if(Io=-1,Fo=0,Y&6)throw Error(j(327));var n=e.callbackNode;if(Xn()&&e.callbackNode!==n)return null;var r=Xo(e,e===be?Ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pi(e,r);else{t=r;var o=Y;Y|=2;var i=rf();(be!==e||Ee!==t)&&(Pt=null,nr=ue()+500,wn(e,t));do try{eg();break}catch(a){nf(e,a)}while(!0);qa(),ui.current=i,Y=o,he!==null?t=0:(be=null,Ee=0,t=xe)}if(t!==0){if(t===2&&(o=Wl(e),o!==0&&(r=o,t=ya(e,o))),t===1)throw n=Yr,wn(e,0),Yt(e,r),Qe(e,ue()),n;if(t===6)Yt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Zh(o)&&(t=pi(e,r),t===2&&(i=Wl(e),i!==0&&(r=i,t=ya(e,i))),t===1))throw n=Yr,wn(e,0),Yt(e,r),Qe(e,ue()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:gn(e,We,Pt);break;case 3:if(Yt(e,r),(r&130023424)===r&&(t=hs+500-ue(),10<t)){if(Xo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Zl(gn.bind(null,e,We,Pt),t);break}gn(e,We,Pt);break;case 4:if(Yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-yt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jh(r/1960))-r,10<r){e.timeoutHandle=Zl(gn.bind(null,e,We,Pt),r);break}gn(e,We,Pt);break;case 5:gn(e,We,Pt);break;default:throw Error(j(329))}}}return Qe(e,ue()),e.callbackNode===n?tf.bind(null,e):null}function ya(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=pi(e,t),e!==2&&(t=We,We=n,t!==null&&wa(t)),e}function wa(e){We===null?We=e:We.push.apply(We,e)}function Zh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!vt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yt(e,t){for(t&=~ps,t&=~Ni,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function _c(e){if(Y&6)throw Error(j(327));Xn();var t=Xo(e,0);if(!(t&1))return Qe(e,ue()),null;var n=pi(e,t);if(e.tag!==0&&n===2){var r=Wl(e);r!==0&&(t=r,n=ya(e,r))}if(n===1)throw n=Yr,wn(e,0),Yt(e,t),Qe(e,ue()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,We,Pt),Qe(e,ue()),null}function gs(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(nr=ue()+500,Si&&cn())}}function En(e){Xt!==null&&Xt.tag===0&&!(Y&6)&&Xn();var t=Y;Y|=1;var n=ut.transition,r=G;try{if(ut.transition=null,G=1,e)return e()}finally{G=r,ut.transition=n,Y=t,!(Y&6)&&cn()}}function xs(){Je=Un.current,te(Un)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ch(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(Ga(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ei();break;case 3:er(),te(He),te(Le),is();break;case 5:os(r);break;case 4:er();break;case 13:te(le);break;case 19:te(le);break;case 10:es(r.type._context);break;case 22:case 23:xs()}n=n.return}if(be=e,he=e=rn(e.current,null),Ee=Je=t,xe=0,Yr=null,ps=Ni=jn=0,We=_r=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}mn=null}return e}function nf(e,t){do{var n=he;try{if(qa(),Mo.current=ci,si){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}si=!1}if(zn=0,ve=ge=ae=null,Nr=!1,Wr=0,fs.current=null,n===null||n.return===null){xe=1,Yr=t,he=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=Ee,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var g=s,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=xc(l);if(y!==null){y.flags&=-257,mc(y,l,a,i,t),y.mode&1&&gc(i,g,t),t=y,s=g;var v=t.updateQueue;if(v===null){var b=new Set;b.add(s),t.updateQueue=b}else v.add(s);break e}else{if(!(t&1)){gc(i,g,t),ms();break e}s=Error(j(426))}}else if(ie&&a.mode&1){var L=xc(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),mc(L,l,a,i,t),Ja(tr(s,a));break e}}i=s=tr(s,a),xe!==4&&(xe=2),_r===null?_r=[i]:_r.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var x=Id(i,s,t);cc(i,x);break e;case 1:a=s;var f=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(tn===null||!tn.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Fd(i,a,t);cc(i,w);break e}}i=i.return}while(i!==null)}lf(n)}catch(z){t=z,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function rf(){var e=ui.current;return ui.current=ci,e===null?ci:e}function ms(){(xe===0||xe===3||xe===2)&&(xe=4),be===null||!(jn&268435455)&&!(Ni&268435455)||Yt(be,Ee)}function pi(e,t){var n=Y;Y|=2;var r=rf();(be!==e||Ee!==t)&&(Pt=null,wn(e,t));do try{qh();break}catch(o){nf(e,o)}while(!0);if(qa(),Y=n,ui.current=r,he!==null)throw Error(j(261));return be=null,Ee=0,xe}function qh(){for(;he!==null;)of(he)}function eg(){for(;he!==null&&!jp();)of(he)}function of(e){var t=sf(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?lf(e):he=t,fs.current=null}function lf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Yh(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,he=null;return}}else if(n=Hh(n,t,Je),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);xe===0&&(xe=5)}function gn(e,t,n){var r=G,o=ut.transition;try{ut.transition=null,G=1,tg(e,t,n,r)}finally{ut.transition=o,G=r}return null}function tg(e,t,n,r){do Xn();while(Xt!==null);if(Y&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Op(e,i),e===be&&(he=be=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Eo||(Eo=!0,cf(Qo,function(){return Xn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ut.transition,ut.transition=null;var l=G;G=1;var a=Y;Y|=4,fs.current=null,Xh(e,n),qd(n,e),bh(Gl),Go=!!Xl,Gl=Xl=null,e.current=n,Gh(n),Ep(),Y=a,G=l,ut.transition=i}else e.current=n;if(Eo&&(Eo=!1,Xt=e,fi=o),i=e.pendingLanes,i===0&&(tn=null),_p(n.stateNode),Qe(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(di)throw di=!1,e=xa,xa=null,e;return fi&1&&e.tag!==0&&Xn(),i=e.pendingLanes,i&1?e===ma?Dr++:(Dr=0,ma=e):Dr=0,cn(),null}function Xn(){if(Xt!==null){var e=Iu(fi),t=ut.transition,n=G;try{if(ut.transition=null,G=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,fi=0,Y&6)throw Error(j(331));var o=Y;for(Y|=4,M=e.current;M!==null;){var i=M,l=i.child;if(M.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var g=a[s];for(M=g;M!==null;){var u=M;switch(u.tag){case 0:case 11:case 15:Cr(8,u,i)}var h=u.child;if(h!==null)h.return=u,M=h;else for(;M!==null;){u=M;var p=u.sibling,y=u.return;if(Gd(u),u===g){M=null;break}if(p!==null){p.return=y,M=p;break}M=y}}}var v=i.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var L=b.sibling;b.sibling=null,b=L}while(b!==null)}}M=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,M=l;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Cr(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,M=x;break e}M=i.return}}var f=e.current;for(M=f;M!==null;){l=M;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,M=m;else e:for(l=f;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ei(9,a)}}catch(z){ce(a,a.return,z)}if(a===l){M=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,M=w;break e}M=a.return}}if(Y=o,cn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(yi,e)}catch{}r=!0}return r}finally{G=n,ut.transition=t}}return!1}function Dc(e,t,n){t=tr(n,t),t=Id(e,t,1),e=en(e,t,1),t=Ae(),e!==null&&(Jr(e,1,t),Qe(e,t))}function ce(e,t,n){if(e.tag===3)Dc(e,e,n);else for(;t!==null;){if(t.tag===3){Dc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=tr(n,e),e=Fd(t,e,1),t=en(t,e,1),e=Ae(),t!==null&&(Jr(t,1,e),Qe(t,e));break}}t=t.return}}function ng(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Ee&n)===n&&(xe===4||xe===3&&(Ee&130023424)===Ee&&500>ue()-hs?wn(e,0):ps|=n),Qe(e,t)}function af(e,t){t===0&&(e.mode&1?(t=xo,xo<<=1,!(xo&130023424)&&(xo=4194304)):t=1);var n=Ae();e=It(e,t),e!==null&&(Jr(e,t,n),Qe(e,n))}function rg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),af(e,n)}function og(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),af(e,n)}var sf;sf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,Vh(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ie&&t.flags&1048576&&dd(t,ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$o(e,t),e=t.pendingProps;var o=Jn(t,Le.current);Qn(t,n),o=as(null,t,r,e,o,n);var i=ss();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(i=!0,ti(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ns(t),o.updater=ji,t.stateNode=o,o._reactInternals=t,ia(t,r,e,n),t=sa(null,t,r,!0,i,n)):(t.tag=0,ie&&i&&Xa(t),Oe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch($o(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=lg(r),e=ht(r,e),o){case 0:t=aa(null,t,r,e,n);break e;case 1:t=vc(null,t,r,e,n);break e;case 11:t=yc(null,t,r,e,n);break e;case 14:t=wc(null,t,r,ht(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),aa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),vc(e,t,r,o,n);case 3:e:{if(Wd(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,md(e,t),li(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=tr(Error(j(423)),t),t=bc(e,t,r,n,o);break e}else if(r!==o){o=tr(Error(j(424)),t),t=bc(e,t,r,n,o);break e}else for(Ze=qt(t.stateNode.containerInfo.firstChild),qe=t,ie=!0,xt=null,n=gd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===o){t=Ft(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return yd(t),e===null&&na(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Jl(r,o)?l=null:i!==null&&Jl(r,i)&&(t.flags|=32),Ud(e,t),Oe(e,t,l,n),t.child;case 6:return e===null&&na(t),null;case 13:return Vd(e,t,n);case 4:return rs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qn(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),yc(e,t,r,o,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,q(oi,r._currentValue),r._currentValue=l,i!==null)if(vt(i.value,l)){if(i.children===o.children&&!He.current){t=Ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Mt(-1,n&-n),s.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var u=g.pending;u===null?s.next=s:(s.next=u.next,u.next=s),g.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ra(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(j(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ra(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Oe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Qn(t,n),o=dt(o),r=r(o),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,o=ht(r,t.pendingProps),o=ht(r.type,o),wc(e,t,r,o,n);case 15:return Bd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),$o(e,t),t.tag=1,Ye(r)?(e=!0,ti(t)):e=!1,Qn(t,n),$d(t,r,o),ia(t,r,o,n),sa(null,t,r,!0,e,n);case 19:return Hd(e,t,n);case 22:return Kd(e,t,n)}throw Error(j(156,t.tag))};function cf(e,t){return Ou(e,t)}function ig(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new ig(e,t,n,r)}function ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lg(e){if(typeof e=="function")return ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Aa)return 11;if(e===$a)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ys(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Tn:return vn(n.children,o,i,t);case Ma:l=8,o|=8;break;case _l:return e=ct(12,n,t,o|2),e.elementType=_l,e.lanes=i,e;case Dl:return e=ct(13,n,t,o),e.elementType=Dl,e.lanes=i,e;case Ll:return e=ct(19,n,t,o),e.elementType=Ll,e.lanes=i,e;case yu:return Ci(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xu:l=10;break e;case mu:l=9;break e;case Aa:l=11;break e;case $a:l=14;break e;case Wt:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=ct(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function vn(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function Ci(e,t,n,r){return e=ct(22,e,r,t),e.elementType=yu,e.lanes=n,e.stateNode={isHidden:!1},e}function fl(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function pl(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ag(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yi(0),this.expirationTimes=Yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ws(e,t,n,r,o,i,l,a,s){return e=new ag(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ct(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ns(i),e}function sg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uf(e){if(!e)return ln;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ye(n))return cd(e,n,t)}return t}function df(e,t,n,r,o,i,l,a,s){return e=ws(n,r,!0,e,o,i,l,a,s),e.context=uf(null),n=e.current,r=Ae(),o=nn(n),i=Mt(r,o),i.callback=t??null,en(n,i,o),e.current.lanes=o,Jr(e,o,r),Qe(e,r),e}function _i(e,t,n,r){var o=t.current,i=Ae(),l=nn(o);return n=uf(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(o,t,l),e!==null&&(wt(e,o,l,i),Oo(e,o,l)),l}function hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vs(e,t){Lc(e,t),(e=e.alternate)&&Lc(e,t)}function cg(){return null}var ff=typeof reportError=="function"?reportError:function(e){console.error(e)};function bs(e){this._internalRoot=e}Di.prototype.render=bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));_i(e,t,null,null)};Di.prototype.unmount=bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;En(function(){_i(null,e,null,null)}),t[$t]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ku();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&Wu(e)}};function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pc(){}function ug(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var g=hi(l);i.call(g)}}var l=df(t,r,e,0,null,!1,!1,"",Pc);return e._reactRootContainer=l,e[$t]=l.current,Ir(e.nodeType===8?e.parentNode:e),En(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var g=hi(s);a.call(g)}}var s=ws(e,0,!1,null,null,!1,!1,"",Pc);return e._reactRootContainer=s,e[$t]=s.current,Ir(e.nodeType===8?e.parentNode:e),En(function(){_i(t,s,n,r)}),s}function Pi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=hi(l);a.call(s)}}_i(t,l,e,o)}else l=ug(n,t,e,o,r);return hi(l)}Fu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wr(t.pendingLanes);n!==0&&(Ba(t,n|1),Qe(t,ue()),!(Y&6)&&(nr=ue()+500,cn()))}break;case 13:En(function(){var r=It(e,1);if(r!==null){var o=Ae();wt(r,e,1,o)}}),vs(e,1)}};Ka=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=Ae();wt(t,e,134217728,n)}vs(e,134217728)}};Bu=function(e){if(e.tag===13){var t=nn(e),n=It(e,t);if(n!==null){var r=Ae();wt(n,e,t,r)}vs(e,t)}};Ku=function(){return G};Uu=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Bl=function(e,t,n){switch(t){case"input":if(Rl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ki(r);if(!o)throw Error(j(90));vu(r),Rl(r,o)}}}break;case"textarea":ku(e,n);break;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}};_u=gs;Du=En;var dg={usingClientEntryPoint:!1,Events:[qr,An,ki,Nu,Cu,gs]},xr={findFiberByHostInstance:xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fg={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tu(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||cg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{yi=No.inject(fg),Et=No}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dg;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ks(t))throw Error(j(200));return sg(e,t,null,n)};nt.createRoot=function(e,t){if(!ks(e))throw Error(j(299));var n=!1,r="",o=ff;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ws(e,1,!1,null,null,n,!1,r,o),e[$t]=t.current,Ir(e.nodeType===8?e.parentNode:e),new bs(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Tu(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return En(e)};nt.hydrate=function(e,t,n){if(!Li(t))throw Error(j(200));return Pi(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!ks(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=ff;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=df(t,null,e,1,n??null,o,!1,i,l),e[$t]=t.current,Ir(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Di(t)};nt.render=function(e,t,n){if(!Li(t))throw Error(j(200));return Pi(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!Li(e))throw Error(j(40));return e._reactRootContainer?(En(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};nt.unstable_batchedUpdates=gs;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Li(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Pi(e,t,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function pf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pf)}catch(e){console.error(e)}}pf(),fu.exports=nt;var pg=fu.exports,hf,Tc=pg;hf=Tc.createRoot,Tc.hydrateRoot;const hg="modulepreload",gg=function(e,t){return new URL(e,t).href},Rc={},bt=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(g=>{if(g=gg(g,r),g in Rc)return;Rc[g]=!0;const u=g.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!r)for(let v=l.length-1;v>=0;v--){const b=l[v];if(b.href===g&&(!u||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${h}`))return;const y=document.createElement("link");if(y.rel=u?"stylesheet":hg,u||(y.as="script"),y.crossOrigin="",y.href=g,s&&y.setAttribute("nonce",s),document.head.appendChild(y),u)return new Promise((v,b)=>{y.addEventListener("load",v),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${g}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};function xg(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:l}=e;let a,s;const g=async(h=!0)=>{await s};async function u(){if("serviceWorker"in navigator){if(a=await bt(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:h}},[],import.meta.url).then(({Workbox:h})=>new h("./sw.js",{scope:"./",type:"classic"})).catch(h=>{l==null||l(h)}),!a)return;a.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),a.addEventListener("installed",h=>{h.isUpdate||r==null||r()}),a.register({immediate:t}).then(h=>{i?i("./sw.js",h):o==null||o(h)}).catch(h=>{l==null||l(h)})}}return s=u(),g}const va=(e,t)=>t.some(n=>e instanceof n);let Oc,Mc;function mg(){return Oc||(Oc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yg(){return Mc||(Mc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ba=new WeakMap,hl=new WeakMap,Ti=new WeakMap;function wg(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",l)},i=()=>{n(bn(e.result)),o()},l=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",l)});return Ti.set(t,e),t}function vg(e){if(ba.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",l),e.removeEventListener("abort",l)},i=()=>{n(),o()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",l),e.addEventListener("abort",l)});ba.set(e,t)}let ka={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ba.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function gf(e){ka=e(ka)}function bg(e){return yg().includes(e)?function(...t){return e.apply(Sa(this),t),bn(this.request)}:function(...t){return bn(e.apply(Sa(this),t))}}function kg(e){return typeof e=="function"?bg(e):(e instanceof IDBTransaction&&vg(e),va(e,mg())?new Proxy(e,ka):e)}function bn(e){if(e instanceof IDBRequest)return wg(e);if(hl.has(e))return hl.get(e);const t=kg(e);return t!==e&&(hl.set(e,t),Ti.set(t,e)),t}const Sa=e=>Ti.get(e);function Sg(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const l=indexedDB.open(e,t),a=bn(l);return r&&l.addEventListener("upgradeneeded",s=>{r(bn(l.result),s.oldVersion,s.newVersion,bn(l.transaction),s)}),n&&l.addEventListener("blocked",s=>n(s.oldVersion,s.newVersion,s)),a.then(s=>{i&&s.addEventListener("close",()=>i()),o&&s.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),a}const zg=["get","getKey","getAll","getAllKeys","count"],jg=["put","add","delete","clear"],gl=new Map;function Ac(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(gl.get(t))return gl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=jg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||zg.includes(n)))return;const i=async function(l,...a){const s=this.transaction(l,o?"readwrite":"readonly");let g=s.store;return r&&(g=g.index(a.shift())),(await Promise.all([g[n](...a),o&&s.done]))[0]};return gl.set(t,i),i}gf(e=>({...e,get:(t,n,r)=>Ac(t,n)||e.get(t,n,r),has:(t,n)=>!!Ac(t,n)||e.has(t,n)}));const Eg=["continue","continuePrimaryKey","advance"],$c={},za=new WeakMap,xf=new WeakMap,Ng={get(e,t){if(!Eg.includes(t))return e[t];let n=$c[t];return n||(n=$c[t]=function(...r){za.set(this,xf.get(this)[t](...r))}),n}};async function*Cg(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const n=new Proxy(t,Ng);for(xf.set(n,t),Ti.set(n,Sa(t));t;)yield n,t=await(za.get(n)||t.continue()),za.delete(n)}function Ic(e,t){return t===Symbol.asyncIterator&&va(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&va(e,[IDBIndex,IDBObjectStore])}gf(e=>({...e,get(t,n,r){return Ic(t,n)?Cg:e.get(t,n,r)},has(t,n){return Ic(t,n)||e.has(t,n)}}));const _g="nachumin-diary",Dg=1,Qr="kv",Lg="line-diary-entries-v1",Re="rooms-v1",Me=e=>`room-data-v1:${e}`,Pg=e=>`trash-v1:${e}:${Date.now()}`,Ko="declaration-v1",Xr="marks-v1",Tg=["・","❤︎","🩷","💛","🩵","💜","✨","✔︎"],gi=e=>`donelog-v1:${e}`,Uo=e=>`habits-v1:${e}`,mf=e=>`habitlog-v1:${e}`,yf=e=>`habitseed-v1:${e}`,ja=e=>`period-v1:${e}`,Wo=e=>`symptoms-v1:${e}`,wf=e=>`symptomlog-v1:${e}`,vf=e=>`symptomseed-v1:${e}`,Ea=e=>`futurescript-v1:${e}`,Ox=(e,t)=>`albumfull-v1:${e}:${t}`,Mx=(e,t)=>`albumthumb-v1:${e}:${t}`,xl="albumseed-v1",Rg="album-main",ml="smartseed-v1",Og="smart-main",yl="wordsseed-v1",Mg="words-main",wl="praiseseed-v1",Ag="praise-main",vl="nowseed-v1",$g="now-main",bl="futureseed-v1",Ig="future-main",Fc="startroom-v1",kl="backup-v1",fe="diary-main",Ss=Sg(_g,Dg,{upgrade(e){e.objectStoreNames.contains(Qr)||e.createObjectStore(Qr)}});async function U(e){return(await Ss).get(Qr,e)}async function I(e,t){return(await Ss).put(Qr,t,e)}async function Ax(e){return(await Ss).delete(Qr,e)}async function $x(){try{if(navigator.storage&&navigator.storage.estimate)return await navigator.storage.estimate()}catch{}return null}async function Fg(){try{navigator.storage&&navigator.storage.persist&&await navigator.storage.persist()}catch{}}async function Bg(){const e=await U(Re);if(e)return e;let t=await U(Lg);if(typeof t=="string")try{t=JSON.parse(t)}catch{t=null}const n=t&&typeof t=="object"?t:{};await I(Me(fe),n);const r=Object.keys(n).sort(),o=r[r.length-1],i=[{id:fe,type:"diary",name:"日記",emoji:"💗",createdAt:Date.now(),lastAt:o?Date.now():0,preview:o?n[o].text.split(`
`)[0].slice(0,40):""}];return await I(Re,i),i}const Kg=5,Ug=Kg*60*60*1e3,bf=()=>new Date(Date.now()-Ug),tt=e=>String(e).padStart(2,"0"),mt=e=>`${e.getFullYear()}-${tt(e.getMonth()+1)}-${tt(e.getDate())}`,pe=e=>e.split("-").join("/"),je=e=>{const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},kf=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Ix=["S","M","T","W","T","F","S"],Wg=e=>`${pe(e)} ${kf[je(e).getDay()]}`,Co=(e,t,n)=>1+(8-new Date(e,t-1,1).getDay())%7+(n-1)*7,Vg=e=>Math.floor(20.8431+.242194*(e-1980)-Math.floor((e-1980)/4)),Hg=e=>Math.floor(23.2488+.242194*(e-1980)-Math.floor((e-1980)/4)),Sl={};function Yg(e){if(Sl[e])return Sl[e];const t={},n=(r,o,i)=>{t[`${e}-${tt(r)}-${tt(o)}`]=i};n(1,1,"元日"),n(1,Co(e,1,2),"成人の日"),n(2,11,"建国記念の日"),n(2,23,"天皇誕生日"),n(3,Vg(e),"春分の日"),n(4,29,"昭和の日"),n(5,3,"憲法記念日"),n(5,4,"みどりの日"),n(5,5,"こどもの日"),n(7,Co(e,7,3),"海の日"),n(8,11,"山の日"),n(9,Co(e,9,3),"敬老の日"),n(9,Hg(e),"秋分の日"),n(10,Co(e,10,2),"スポーツの日"),n(11,3,"文化の日"),n(11,23,"勤労感謝の日");for(const r of Object.keys(t)){const o=je(r),i=new Date(o);i.setDate(i.getDate()+1);const l=new Date(o);l.setDate(l.getDate()+2),t[mt(l)]&&!t[mt(i)]&&i.getDay()!==0&&(t[mt(i)]="国民の休日")}for(const r of Object.keys({...t})){if(je(r).getDay()!==0)continue;const o=je(r);do o.setDate(o.getDate()+1);while(t[mt(o)]);t[mt(o)]="振替休日"}return Sl[e]=t,t}const Qg=e=>!!Yg(Number(e.slice(0,4)))[e],Xg=e=>{if(Qg(e))return"sun";const t=je(e).getDay();return t===0?"sun":t===6?"sat":""},Fx=e=>"¥"+Math.round(Number(e)||0).toLocaleString("ja-JP"),Bx=e=>e.slice(0,7),Kx=(e,t)=>{const[n,r]=e.split("-");return(t&&Number(n)===t?"":`${n}年`)+`${Number(r)}月`},Ue=()=>mt(bf()),Bc=()=>{const e=bf();return e.setDate(e.getDate()-1),mt(e)},Sf=()=>{const e=new Date;return`${e.getHours()}:${tt(e.getMinutes())}`},Gg=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Ux=e=>String(e||"").replace(/[\/\\:*?"<>| -]/g,"_").replace(/\s+/g," ").trim()||"room";async function Kc(e){try{return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.top="0",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}const Ge=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36),Wx=e=>Object.keys(e).sort().map(t=>`🩷${Wg(t)}🩷 ${e[t].time}
${e[t].text}`).join(`

──────────

`),Vx=e=>{const t={},n=e.split(/\n*─{3,}\n*/);for(const r of n){const o=r.trim();if(!o)continue;const i=o.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*(?:[（(]?(?:[A-Za-z]{3}|[日月火水木金土])[)）]?)?\s*🩷?\s*(\d{1,2}:\d{2})?\s*\n?([\s\S]*)$/u);if(!i)continue;const l=`${i[1]}-${tt(Number(i[2]))}-${tt(Number(i[3]))}`,a=i[5].trim();a&&(t[l]={text:a,time:i[4]||"0:00"})}return t},Hx=(e,t)=>{const n=[];let r="";for(const o of e)o.dateKey!==r&&(r=o.dateKey,n.length&&n.push(""),n.push(`🩷${pe(r)}🩷`)),n.push(`${o.time?o.time+" ":""}${t(o.memberId)}「${o.text}」`);return n.join(`
`)},Yx=e=>{const t=[];let n=Ue(),r=null;const o=()=>{if(!r)return;let i=r.lines.join(`
`).trim();i.endsWith("」")&&(i=i.slice(0,-1)),i&&t.push({dateKey:r.dateKey,name:r.name,time:r.time,text:i}),r=null};for(const i of e.split(`
`)){const l=i.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(l){o(),n=`${l[1]}-${tt(Number(l[2]))}-${tt(Number(l[3]))}`;continue}if(r)r.lines.push(i);else{const s=i.match(/^(?:(\d{1,2}:\d{2})\s+)?(.+?)「([\s\S]*)$/u);if(!s)continue;r={dateKey:n,name:s[2].trim(),time:s[1]||"",lines:[s[3]]}}const a=r.lines[r.lines.length-1].trimEnd();a.endsWith("」")&&(r.lines[r.lines.length-1]=a,o())}return o(),t},Jg=[{key:"morning",label:"朝",emoji:"🌅"},{key:"noon",label:"昼",emoji:"☀️"},{key:"night",label:"夜",emoji:"🌙"}],Qx=()=>{const e=new Date().getHours();return e>=5&&e<11?"morning":e>=11&&e<17?"noon":"night"},Xx=(e,t)=>{var i;const n=l=>{var a;return((a=t.find(s=>s.id===l))==null?void 0:a.name)||"？"},r={};for(const l of e)(r[i=l.dateKey]||(r[i]={morning:[],noon:[],night:[]}))[l.slot].push(l);const o=[];for(const l of Object.keys(r).sort()){const a=[];for(const s of Jg){const g=r[l][s.key];if(!g.length)continue;const u=g.map(h=>n(h.memberId)+(h.memo&&h.memo.trim()?`(${h.memo.trim()})`:"")).join("・");a.push(`${s.emoji}${s.label}:${u}`)}a.length&&o.push(`🩷${pe(l)}🩷 ${a.join(" / ")}`)}return o.join(`
`)},Gx=e=>{const t=[],n=r=>r.includes("朝")?"morning":r.includes("昼")?"noon":r.includes("夜")?"night":null;for(const r of e.split(`
`)){const o=r.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(.*)$/u);if(!o)continue;const i=`${o[1]}-${tt(Number(o[2]))}-${tt(Number(o[3]))}`,l=o[4];if(l.trim())for(const a of l.split("/")){const s=a.indexOf(":"),g=a.indexOf("："),u=s===-1?g:g===-1?s:Math.min(s,g);if(u===-1)continue;const h=n(a.slice(0,u));if(!h)continue;const p=a.slice(u+1);for(const y of p.split("・")){const v=y.trim().match(/^(.+?)(?:[(（]([\s\S]*)[)）])?$/u);if(!v)continue;const b=v[1].trim();b&&t.push({dateKey:i,slot:h,name:b,memo:(v[2]||"").trim()})}}}return t},Jx=e=>{var n;const t={};for(const r of e)(t[n=r.dateKey]||(t[n]={morning:[],noon:[],night:[]}))[r.slot].push(r);return t},Zx=(e,t)=>{let n=t;for(const l of e)l.dateKey<n&&(n=l.dateKey);je(t);const r=je(t);r.setDate(r.getDate()-34);const o=je(n)<r?je(n):r,i=[];for(let l=new Date(o);mt(l)<=t;l.setDate(l.getDate()+1))i.push(mt(l));return i},qx=e=>{const t=[];for(const n of String(e||"").split(`
`)){let r=n.trim();r&&(/^🩷?\s*\d{4}[/-]\d{1,2}[/-]\d{1,2}\s*🩷?\s*$/u.test(r)||(r=r.replace(/^[★☆☐☑✓□■●○・\-*+•‣▪️\s]+/u,"").trim(),r&&t.push(r)))}return t},em=e=>{const t=[];let n=Ue();for(const r of e.split(`
`)){const o=r.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(o){n=`${o[1]}-${tt(Number(o[2]))}-${tt(Number(o[3]))}`;continue}const i=r.match(/^\s*(★\s*)?([☑☐✓])\s+(.+)$/u);if(!i)continue;const l=!!i[1],a=i[2]==="☑"||i[2]==="✓",s=i[3].trim();s&&t.push({dateKey:n,text:s,done:a,important:l})}return t},Zg="🩷 できたこと",tm=e=>{const t=(e||"").split(`
`),n=t.indexOf(Zg);if(n===-1)return{text:e||"",items:[]};const r=[];let o=n+1;for(;o<t.length&&t[o].startsWith("☑ ");){const a=t[o].match(/^☑ (.*?)(?: \((\d{1,2}:\d{2})\))?$/u);a&&r.push({text:a[1],time:a[2]||""}),o++}let i=n;return i-1>=0&&t[i-1]===""&&(i-=1),t.splice(i,o-i),{text:t.join(`
`).replace(/\n{3,}/g,`

`).replace(/\s+$/,""),items:r}},zf="🎬 今日のコマ: ",qg=e=>(e||"").split(`
`).filter(t=>!t.startsWith(zf)).join(`
`).replace(/^\n+/,""),ex=(e,t)=>{const n=qg(e).trim(),r=zf+t;return n?`${r}

${n}`:r},xi=(e,t)=>{const n=je(e);return n.setDate(n.getDate()+t),mt(n)},Na=(e,t)=>Math.round((je(t)-je(e))/864e5),Uc=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(String(e||""));if(!t)return 99999;const n=Number(t[1]);return(n<5?n+24:n)*60+Number(t[2])},nm=(e,t)=>{const n=je(e),r=n.getDate();n.setDate(1),n.setMonth(n.getMonth()+t);const o=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return n.setDate(Math.min(r,o)),mt(n)},rm=e=>{if(e<12)return`${e}ヶ月後`;const t=Math.floor(e/12),n=e%12;return n===0?`${t}年後`:n===6?`${t}年半後`:`${t}年${n}ヶ月後`},om=e=>{const t=[...new Set(e||[])].sort();if(!t.length)return[];const n=[];for(const o of t){const i=n[n.length-1];i&&xi(i.end,1)===o?i.end=o:n.push({start:o,end:o})}return n.map((o,i)=>({start:o.start,end:o.end,length:Na(o.start,o.end)+1,cycle:i<n.length-1?Na(o.start,n[i+1].start):null,ongoing:i===n.length-1})).reverse()},im=(e,t,n=3)=>{const r=e.filter(s=>s.cycle!=null).map(s=>s.cycle);if(!r.length||!e.length)return null;const o=r.slice(0,n),i=Math.round(o.reduce((s,g)=>s+g,0)/o.length),l=e[0].start,a=xi(l,i);return{next:a,avg:i,daysLeft:Na(t,a),min:Math.min(...r),max:Math.max(...r),count:r.length}},tx={morning:"🌅",noon:"☀️",night:"🌙"},zl="nachumin-diary-backup.json";function nx(e){if(!e||typeof e!="object"||Array.isArray(e))return"バックアップの形式が読めませんでした 🥺";if(e.app!=="nachumin-diary")return"これは Nachumin Lifelog のバックアップファイルではないみたい 🥺";if(!Array.isArray(e.rooms))return"ルームの情報が入っていません。ファイルが壊れているかも 🥺";if(e.rooms.some(t=>!t||typeof t!="object"||!t.id||!t.type))return"ルームの形式が壊れています 🥺";if(e.data!=null&&(typeof e.data!="object"||Array.isArray(e.data)))return"ルームの中身の形式が壊れています 🥺";for(const t of["doneLogs","habits","habitLogs","habitSeeds","periods","symptoms","symptomLogs","symptomSeeds","futureScripts"])if(e[t]!=null&&(typeof e[t]!="object"||Array.isArray(e[t])))return`${t} の形式が壊れています 🥺`;return null}function rx(e){const t={rooms:(e.rooms||[]).length,items:0},n=r=>r==="talk"?"messages":r==="todo"?"todos":r==="darelog"?"records":r==="expense"?"expenses":r==="challenge"?"challenges":r==="future"?"opened":r==="now"?"posts":r==="album"?"pages":r==="smart"?"items":r==="words"||r==="praise"?"words":null;for(const r of e.rooms||[]){const o=e.data?e.data[r.id]:void 0;if(!o)continue;const i=n(r.type);t.items+=i?(o[i]||[]).length:Object.keys(o).length}return t}function jl(e,t){var i,l;if(e.type==="talk"){const a=t&&t.messages||[],s=a[a.length-1];return{previewName:s?(u=>{var h;return((h=(e.members||[]).find(p=>p.id===u))==null?void 0:h.name)||""})(s.memberId):"",preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="todo"){const a=t&&t.todos||[],s=a[a.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?`${s.done?"☑":"☐"} ${s.text.split(`
`)[0]}`.slice(0,40):"",todoOpen:a.filter(g=>!g.done&&!g.deferred).length,lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="darelog"){const a=t&&t.records||[],s=a[a.length-1],g=u=>{var h;return((h=(e.members||[]).find(p=>p.id===u))==null?void 0:h.name)||""};return{preview:s?`${tx[s.slot]||""} ${g(s.memberId)}`.trim():"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="challenge"){const a=t&&t.challenges||[],s=[...a].sort((g,u)=>{var h,p;return(((h=u.records)==null?void 0:h.length)||0)-(((p=g.records)==null?void 0:p.length)||0)})[0];return{preview:s?`${s.emoji||"🏁"} ${s.name} ${((i=s.records)==null?void 0:i.length)||0}/${s.target}`:"",lastAt:e.lastAt||(a.length?Date.now():0)}}if(e.type==="expense"){const a=t&&t.expenses||[],s=a[a.length-1];return{preview:s?`${(u=>{var h;return((h=(e.categories||[]).find(p=>p.id===u))==null?void 0:h.name)||""})(s.categoryId)} ¥${(s.amount||0).toLocaleString("ja-JP")}`:"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="album"){const a=t&&t.pages||[];return{preview:a.length?`${a.length}枚`:"",lastAt:e.lastAt||0}}if(e.type==="smart"){const s=[...t&&t.items||[]].sort((g,u)=>(g.at||0)-(u.at||0)).pop();return{preview:s?`${s.score?s.score+"点 ":""}${s.text}`.slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="words"||e.type==="praise"){const s=[...t&&t.words||[]].sort((g,u)=>(g.at||0)-(u.at||0)).pop();return{preview:s?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="now"){const s=[...t&&t.posts||[]].sort((g,u)=>(g.at||0)-(u.at||0)).pop();return{preview:s&&typeof s.text=="string"?`${s.time} ${s.text.split(`
`)[0]}`.slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="future"){const a=t&&t.opened||[],s=a[a.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}const n=t&&typeof t=="object"?t:{},r=Object.keys(n).sort(),o=r[r.length-1];return{preview:typeof((l=n[o])==null?void 0:l.text)=="string"?n[o].text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(o?Date.now():0)}}async function Wc(){const e=await U(Re)||[],t={};for(const y of e){const v=await U(Me(y.id));v!==void 0&&(t[y.id]=v)}const n=await U(Ko)||null,r={},o={},i={},l={},a={},s={},g={},u={},h={};for(const y of e){const v=await U(gi(y.id));v&&Object.keys(v).length&&(r[y.id]=v);const b=await U(Uo(y.id));Array.isArray(b)&&b.length&&(o[y.id]=b);const L=await U(mf(y.id));L&&Object.keys(L).length&&(i[y.id]=L),await U(yf(y.id))&&(l[y.id]=!0);const x=await U(ja(y.id));Array.isArray(x==null?void 0:x.days)&&x.days.length&&(a[y.id]=x.days);const f=await U(Wo(y.id));Array.isArray(f)&&f.length&&(s[y.id]=f);const m=await U(wf(y.id));m&&Object.keys(m).length&&(g[y.id]=m),await U(vf(y.id))&&(u[y.id]=!0);const w=await U(Ea(y.id));Array.isArray(w)&&w.length&&(h[y.id]=w)}const p=await U(Xr)||null;return{app:"nachumin-diary",version:1,exportedAt:new Date().toISOString(),rooms:e,data:t,declaration:n,doneLogs:r,habits:o,habitLogs:i,habitSeeds:l,periods:a,symptoms:s,symptomLogs:g,symptomSeeds:u,futureScripts:h,marks:p}}const ox=e=>e.map((t,n)=>[t,n]).sort((t,n)=>t[0].dateKey<n[0].dateKey?-1:t[0].dateKey>n[0].dateKey?1:t[1]-n[1]).map(([t])=>t);async function ix(e){var s,g;if(!e||e.app!=="nachumin-diary"||!Array.isArray(e.rooms))throw new Error("invalid-backup");const t=await U(Re)||[],n=new Map(t.map(u=>[u.id,{...u}]));let r=0,o=0;for(const u of e.rooms){const h=e.data?e.data[u.id]:void 0,p=u.type==="talk"?"messages":u.type==="todo"?"todos":u.type==="darelog"?"records":u.type==="expense"?"expenses":u.type==="challenge"?"challenges":u.type==="future"?"opened":u.type==="now"?"posts":u.type==="album"?"pages":u.type==="smart"?"items":u.type==="words"||u.type==="praise"?"words":null,y=b=>p==="messages"?`${b.dateKey} ${b.memberId} ${b.text}`:p==="todos"?`${b.dateKey} ${b.text}`:p==="records"?`${b.dateKey} ${b.slot} ${b.memberId}`:b.id;if(!n.has(u.id)){h!==void 0&&await I(Me(u.id),h),n.set(u.id,{...u,...jl(u,h)}),r+=1,p?o+=((s=h==null?void 0:h[p])==null?void 0:s.length)||0:o+=h?Object.keys(h).length:0;continue}const v=n.get(u.id);if(p){const b=await U(Me(u.id))||{},L=b[p]||[],x=new Set(L.map(y));let f=L.slice();for(const z of(h==null?void 0:h[p])||[])x.has(y(z))||(x.add(y(z)),f.push(z),o+=1);p==="messages"&&(f=ox(f));const m={...b,[p]:f};for(const z of Object.keys(h||{}))z!==p&&m[z]===void 0&&(m[z]=h[z]);await I(Me(u.id),m);let w={...v};if(u.type==="talk"||u.type==="darelog"){const z=v.members||[],_=new Set(z.map(P=>P.id));w.members=z.concat((u.members||[]).filter(P=>!_.has(P.id)))}n.set(u.id,{...w,...jl(w,m)})}else{const L={...await U(Me(u.id))||{}};for(const x of Object.keys(h||{}))L[x]||(L[x]=h[x],o+=1);await I(Me(u.id),L),n.set(u.id,{...v,...jl(v,L)})}}if(e.doneLogs)for(const[u,h]of Object.entries(e.doneLogs)){const p=gi(u),v={...await U(p)||{}};for(const[b,L]of Object.entries(h)){const x=(v[b]||[]).slice();for(const f of L)x.some(m=>m.text===f.text&&m.time===f.time)||x.push(f);v[b]=x}await I(p,v)}const i={};if(e.habits)for(const[u,h]of Object.entries(e.habits)){if(!Array.isArray(h))continue;const p=await U(Uo(u));if(p===void 0){await I(Uo(u),h);continue}const y=Array.isArray(p)?p:[],v=new Set(y.map(f=>f.id)),b=new Map(y.filter(f=>(f.name||"").trim()).map(f=>[f.name.trim(),f.id])),L=y.slice(),x={};for(const f of h){if(!f||!f.id)continue;if(v.has(f.id)){x[f.id]=f.id;continue}const m=(f.name||"").trim(),w=m?b.get(m):null;if(w){x[f.id]=w;continue}L.push(f),v.add(f.id),m&&b.set(m,f.id),x[f.id]=f.id}L.length!==y.length&&await I(Uo(u),L),i[u]=x}if(e.habitSeeds)for(const u of Object.keys(e.habitSeeds))e.habitSeeds[u]&&await I(yf(u),!0);if(e.periods)for(const[u,h]of Object.entries(e.periods)){if(!Array.isArray(h))continue;const p=((g=await U(ja(u)))==null?void 0:g.days)||[];await I(ja(u),{days:[...new Set([...p,...h])].sort()})}const l={};if(e.symptoms)for(const[u,h]of Object.entries(e.symptoms)){if(!Array.isArray(h))continue;const p=await U(Wo(u));if(p===void 0){await I(Wo(u),h);continue}const y=Array.isArray(p)?p:[],v=new Set(y.map(f=>f.id)),b=new Map(y.filter(f=>(f.name||"").trim()).map(f=>[f.name.trim(),f.id])),L=y.slice(),x={};for(const f of h){if(!f||!f.id)continue;if(v.has(f.id)){x[f.id]=f.id;continue}const m=(f.name||"").trim(),w=m?b.get(m):null;if(w){x[f.id]=w;continue}L.push(f),v.add(f.id),m&&b.set(m,f.id),x[f.id]=f.id}L.length!==y.length&&await I(Wo(u),L),l[u]=x}if(e.symptomSeeds)for(const u of Object.keys(e.symptomSeeds))e.symptomSeeds[u]&&await I(vf(u),!0);if(e.futureScripts)for(const[u,h]of Object.entries(e.futureScripts)){if(!Array.isArray(h)||!h.length)continue;const p=await U(Ea(u))||[],y=new Set(p.map(b=>b.id)),v=h.filter(b=>b&&b.id&&!y.has(b.id));v.length&&(await I(Ea(u),[...p,...v]),o+=v.length)}if(e.symptomLogs)for(const[u,h]of Object.entries(e.symptomLogs)){const p=wf(u),v={...await U(p)||{}},b=l[u]||{};for(const[L,x]of Object.entries(h)){const f=(x||[]).map(m=>b[m]||m);v[L]=[...new Set([...v[L]||[],...f])]}await I(p,v)}if(e.habitLogs)for(const[u,h]of Object.entries(e.habitLogs)){const p=i[u]||{},y=mf(u),b={...await U(y)||{}};for(const[L,x]of Object.entries(h)){const f=(x||[]).map(m=>p[m]||m);b[L]=[...new Set([...b[L]||[],...f])]}await I(y,b)}if(Array.isArray(e.marks)&&e.marks.length){const u=await U(Xr);(!Array.isArray(u)||!u.length)&&await I(Xr,e.marks)}const a=[...n.values()];return await I(Re,a),{addedRooms:r,addedItems:o,rooms:a}}const pn="M12 20.5s-7.5-5-7.5-10a4.2 4.2 0 0 1 7.5-2.6A4.2 4.2 0 0 1 19.5 10.5c0 5-7.5 10-7.5 10z",lx=`<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>
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
<path d='${pn}' transform='translate(96 60) scale(1.6)'/>
<path d='${pn}' transform='translate(24 96) scale(0.9) rotate(-12 12 12)'/>
<path d='${pn}' transform='translate(190 60) scale(0.8) rotate(14 12 12)'/>
<path d='${pn}' transform='translate(130 150) scale(1.1) rotate(-8 12 12)'/>
<path d='${pn}' transform='translate(30 208) scale(0.8) rotate(10 12 12)'/>
</g>
<g fill='#f8b1d6'>
<path d='${pn}' transform='translate(100 64) scale(1.1) '/>
<path d='${pn}' transform='translate(133 153) scale(0.7)'/>
</g>
</svg>`,_o=`url("data:image/svg+xml,${encodeURIComponent(lx)}")`,lm=["#ffffff","#fff5fa","#ffd9ec","#ffc4e1","#ff9fd0","#e0629f","#d4f0ff","#c9f5f2","#d9ffe3","#e8dcff","#f0f0f0","#2b2430"],am=["#9C27B0","#E91E63","#FFEB3B","#2196F3","#4CAF50","#FF9800","#F44336","#00BCD4","#3F51B5","#8BC34A","#FF4081","#009688"],Ca=["#ff6fb2","#c58cff","#6fb8ff","#5fd6b0","#ffcf5f","#ff9d6f","#7ed957","#ff8fa8"],br=Ca[0],Vc=e=>{const t=e||br;return{background:`linear-gradient(163deg, #ffffff 0%, #fff6fb 40%, ${t}2e 100%)`,boxShadow:`0 6px 13px ${t}42, 0 2px 0 ${t}66, inset 0 1.5px 0 #ffffff`,borderColor:`${t}55`}},sm=[{key:"auto",label:"自動",value:null},{key:"white",label:"白",value:"#ffffff"},{key:"black",label:"黒",value:"#222028"},{key:"pink",label:"ピンク",value:"#ff2d87"}],ax=e=>{const t=String(e).replace("#","");if(t.length<6)return"#4a3140";const n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),o=parseInt(t.slice(4,6),16);return .299*n+.587*r+.114*o<140?"#fff5fa":"#4a3140"},cm=e=>e&&e.textColor?e.textColor:ax(e&&e.color),Hc=`
  * { box-sizing: border-box; }
  .app {
    height: 100vh; height: 100dvh;
    display: flex; flex-direction: column;
    font-family: "Hiragino Maru Gothic ProN", "Hiragino Kaku Gothic ProN",
      "Yu Gothic", sans-serif;
    background: ${_o} #f6bedd; background-size: 240px 240px;
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
  /* ---------- ✨ なうのふりかえり（全画面で読む） ---------- */
  .rf-screen {
    position: fixed; inset: 0; z-index: 40; display: flex; flex-direction: column;
    background: linear-gradient(180deg,#fff0f8 0%,#ffe3f2 100%);
  }
  .rf-scroll {
    flex: 1; overflow-y: auto; padding: 12px 14px calc(28px + env(safe-area-inset-bottom));
    display: flex; flex-direction: column; gap: 12px;
  }
  .rf-make {
    display: flex; flex-direction: column; align-items: center; gap: 3px; width: 100%;
    padding: 15px 0; border-radius: 20px; border: none; cursor: pointer; color: #fff;
    font-size: 18px; font-weight: 900;
    background: linear-gradient(120deg,#ff1493,#ff00aa 55%,#c33bff);
    box-shadow: 0 0 0 2px #fff, 0 0 20px rgba(255,0,170,.55);
  }
  .rf-make small { font-size: 12px; font-weight: 800; opacity: .9; }
  .rf-make:disabled { flex-direction: row; justify-content: center; gap: 8px; opacity: .9; cursor: default; font-size: 15px; }
  .rf-note { font-size: 11.5px; color: #a4517f; text-align: center; margin-top: -4px; }
  .rf-tile {
    display: grid; grid-template-columns: 1fr auto; gap: 6px 8px; align-items: center; text-align: left;
    background: #fff; border: 2px solid #ffc2e0; border-radius: 18px; padding: 12px 14px; cursor: pointer;
    box-shadow: 0 4px 14px rgba(255,20,147,.14); -webkit-tap-highlight-color: transparent;
  }
  .rf-tile .rf-range { grid-column: 1; justify-self: start; }
  .rf-tile-lead {
    grid-column: 1; font-size: 14.5px; line-height: 1.6; font-weight: 700; color: #3d1f33;
    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
  }
  .rf-tile-arw { grid-column: 2; grid-row: 1 / span 2; font-size: 26px; font-weight: 900; color: #ff1493; }
  .rf-range {
    display: inline-flex; align-items: baseline; gap: 6px;
    padding: 3px 12px; border-radius: 999px; color: #fff; font-size: 13px; font-weight: 900;
    background: linear-gradient(120deg,#ff1493,#c33bff);
  }
  .rf-range small { font-size: 10.5px; opacity: .85; }
  .rf-sec {
    background: #fff; border: 2px solid #ffd1e8; border-radius: 20px; padding: 14px 16px;
    box-shadow: 0 4px 14px rgba(255,20,147,.12);
  }
  .rf-sec.lead {
    border: none; color: #fff;
    background: linear-gradient(135deg,#ff1493 0%,#ff00aa 50%,#b42cf0 100%);
    box-shadow: 0 0 0 2px #fff, 0 6px 22px rgba(255,0,170,.45);
  }
  .rf-head { margin: 0 0 8px; font-size: 16px; font-weight: 900; color: #e0157f; letter-spacing: .02em; }
  .rf-sec.lead .rf-head { color: #fff; }
  .rf-p { margin: 0 0 6px; font-size: 15px; line-height: 1.9; color: #3d1f33; overflow-wrap: anywhere; }
  .rf-sec.lead .rf-p { color: #fff; font-size: 16.5px; font-weight: 800; line-height: 1.8; }
  .rf-li {
    position: relative; padding-left: 16px; margin: 0 0 6px;
    font-size: 15px; line-height: 1.85; color: #3d1f33; overflow-wrap: anywhere;
  }
  .rf-li::before {
    content: ""; position: absolute; left: 2px; top: .75em; width: 7px; height: 7px; border-radius: 50%;
    background: #ff1493; box-shadow: 0 0 6px rgba(255,20,147,.7);
  }
  .rf-sec.lead .rf-li { color: #fff; }
  .rf-sec.lead .rf-li::before { background: #fff; }
  .rf-acts { display: flex; justify-content: center; gap: 24px; margin-top: 4px; }
  .rf-acts button {
    background: none; border: none; color: #d6317f; font-size: 13px; font-weight: 800;
    text-decoration: underline; cursor: pointer; padding: 6px 4px;
  }
  /* ---------- 💎 名言 ---------- */
  .wd-count {
    margin-left: auto; flex-shrink: 0; display: flex; align-items: baseline; gap: 3px;
    padding: 5px 12px; border-radius: 999px; color: #fff;
    background: linear-gradient(120deg,#ff1493,#ff00aa 55%,#c33bff);
    box-shadow: 0 0 0 2px #fff, 0 0 14px rgba(255,0,170,.55);
    font-variant-numeric: tabular-nums;
  }
  .wd-count b { font-size: 18px; font-weight: 900; line-height: 1; }
  .wd-count span { font-size: 11px; font-weight: 800; opacity: .85; }
  .wd-scroll { flex: 1; overflow-y: auto; padding: 8px 10px 0; }
  .wd-grid { column-gap: 7px; }
  .wd-grid.cols-1 { column-count: 1; }
  .wd-grid.cols-1 .wd-card { padding: 12px 14px 12px 19px; border-radius: 18px; }
  .wd-grid.cols-1 .wd-text { font-size: 17px; line-height: 1.55; }
  .wd-grid.cols-1 .wd-from { font-size: 12px; }
  .wd-grid.cols-2 { column-count: 2; }
  .wd-grid.cols-3 { column-count: 3; }
  .wd-card {
    position: relative; overflow: hidden;
    break-inside: avoid; -webkit-column-break-inside: avoid; page-break-inside: avoid;
    display: block; margin: 0 0 7px;
    background: #fff; border: 2px solid #ffc2e0; border-radius: 16px;
    padding: 10px 10px 10px 15px;
    box-shadow: 0 5px 16px rgba(255,20,147,.16);
    -webkit-touch-callout: none; -webkit-user-select: none; user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  .wd-card::before {
    content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 5px;
    background: linear-gradient(180deg,#ff1493,#ff00aa 50%,#c33bff);
    box-shadow: 0 0 10px rgba(255,0,170,.7);
  }
  .wd-text {
    font-size: 15px; line-height: 1.5; font-weight: 900; color: #3d1f33;
    white-space: pre-wrap; overflow-wrap: anywhere; letter-spacing: .01em;
  }
  .wd-from { margin-top: 4px; text-align: right; font-size: 11px; font-weight: 800; color: #d6317f; overflow-wrap: anywhere; }
  .wd-grid.cols-3 .wd-card { padding: 8px 7px 8px 11px; border-radius: 12px; border-width: 1.5px; }
  .wd-grid.cols-3 .wd-card::before { width: 4px; }
  .wd-grid.cols-3 .wd-text { font-size: 12.5px; line-height: 1.45; }
  .wd-grid.cols-3 .wd-from { font-size: 10px; }
  .wd-card.pop { animation: now-pop .8s cubic-bezier(.3,1.5,.5,1); }
  .wd-count { margin-left: 0; }
  .wd-bell-note { font-size: 13px; line-height: 1.7; color: #6b4a5e; margin: 4px 0 14px; }
  .wd-bell-toggle {
    display: block; width: 100%; padding: 14px 0; border-radius: 999px; cursor: pointer;
    border: 2.5px solid #ff1493; background: #fff; color: #ff1493;
    font-size: 18px; font-weight: 900; margin-bottom: 12px;
  }
  .wd-bell-toggle.on {
    border-color: transparent; color: #fff;
    background: linear-gradient(120deg,#ff1493,#ff00aa 55%,#c33bff);
    box-shadow: 0 0 0 2px #fff, 0 0 18px rgba(255,0,170,.6);
  }
  .wd-cam {
    flex-shrink: 0; width: 42px; height: 42px; border-radius: 50%; cursor: pointer;
    border: 2px solid #ff1493; background: #fff; font-size: 19px; line-height: 1;
    display: grid; place-items: center; box-shadow: 0 0 10px rgba(255,20,147,.3);
    -webkit-tap-highlight-color: transparent;
  }
  .wd-cam:disabled { cursor: default; }
  .wd-cam-spin {
    width: 18px; height: 18px; border-radius: 50%;
    border: 3px solid #ffc2e0; border-top-color: #ff1493; animation: wd-spin .8s linear infinite;
  }
  @keyframes wd-spin { to { transform: rotate(360deg); } }
  .wd-from-in {
    display: block; width: 100%; box-sizing: border-box; margin-bottom: 7px;
    border: 1.5px solid #ffc2e0; border-radius: 999px; background: #fff;
    padding: 7px 14px; font-size: 16px; font-weight: 700; color: #4a3140; outline: none;
  }
  .wd-from-in::placeholder { color: #e7a9c8; }
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
    /* タブが増えても詰まらないように横スクロール（スクロールバーは出さない） */
    overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch;
  }
  .tabs::-webkit-scrollbar { display: none; }
  .tab {
    border: 1.5px solid #f0a6cf; background: #fff; color: #b04a86;
    border-radius: 999px; padding: 5px 14px; font-size: 12.5px;
    font-weight: 700; cursor: pointer; flex-shrink: 0; white-space: nowrap;
  }
  .date-pill-n {
    margin-left: 7px; font-size: 10.5px; font-weight: 800; color: #fff;
    background: #e0629f; border-radius: 999px; padding: 1px 7px;
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
  .shop-toggle.on .shop-box, .ex-pick.on .shop-box { background: #ff1478; border-color: #ff1478; }

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
    background: ${_o} #f6bedd; background-size: 240px 240px;
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

  /* 入力欄の「次は何番」 */
  .in-no {
    flex-shrink: 0; align-self: center;
    min-width: 30px; text-align: center;
    font-size: 14px; font-weight: 900; color: #fff;
    background: linear-gradient(135deg,#ff1493,#c33bff);
    border-radius: 10px; padding: 6px 8px;
    font-variant-numeric: tabular-nums;
    box-shadow: 0 3px 10px rgba(255,20,147,.35);
  }

  /* ネタ帳用の日ごと通し番号 */
  .todo-no {
    flex-shrink: 0; align-self: flex-start; margin-right: 7px; margin-top: 1px;
    min-width: 22px; text-align: center;
    font-size: 11.5px; font-weight: 900; color: #fff;
    background: linear-gradient(135deg,#ff1493,#c33bff);
    border-radius: 7px; padding: 2px 6px;
    font-variant-numeric: tabular-nums;
  }
  .todo-bubble.important .todo-no { background: #fff; color: #ff1478; }

  /* ===== 📔 絵日記 ===== */
  .ab-add { position: relative; overflow: hidden; }
  .ab-add input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
  .ab-scroll { flex: 1; overflow-y: auto; padding: 10px 12px calc(24px + env(safe-area-inset-bottom)); }
  .ab-datebar { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 10px; }
  .ab-datebar-l { font-size: 11.5px; font-weight: 800; color: #a4517f; }
  .ab-datechip { position: relative; }
  .ab-today {
    background: none; border: none; cursor: pointer;
    font-size: 11px; color: #c58fb0; text-decoration: underline; padding: 2px 4px;
  }
  .ab-busy {
    text-align: center; font-size: 12.5px; font-weight: 800; color: #d6317f;
    background: #fff; border: 1.5px solid #ffc2e0; border-radius: 999px;
    padding: 7px 14px; margin: 0 auto 10px; width: fit-content;
  }
  .ab-month { margin-bottom: 16px; }
  .ab-month-head {
    position: sticky; top: 0; z-index: 2;
    display: flex; align-items: center; gap: 8px;
    margin: 0 -12px 8px; padding: 7px 16px;
    background: linear-gradient(90deg, rgba(255,240,249,.96), rgba(255,228,244,.96));
    backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
    border-bottom: 1.5px solid #ffd1e8;
  }
  .ab-month-l {
    font-size: 14px; font-weight: 900; color: #fff; padding: 3px 12px; border-radius: 999px;
    background: linear-gradient(120deg,#ff1493,#ff45b0 55%,#c33bff);
    box-shadow: 0 3px 10px rgba(255,20,147,.35);
  }
  .ab-month-n {
    margin-left: auto; font-size: 11px; font-weight: 800; color: #d6317f;
    background: #fff; border: 1.5px solid #ffc2e0; border-radius: 999px; padding: 1px 9px;
  }
  .ab-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
  .ab-cell { cursor: pointer; -webkit-tap-highlight-color: transparent; }
  .ab-cell-in {
    position: relative; display: block; width: 100%; aspect-ratio: 1 / 1;
    border-radius: 14px; overflow: hidden; background: #ffeaf6;
    border: 2px solid #fff; box-shadow: 0 4px 12px rgba(255,20,147,.18);
  }
  .ab-cell-in img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .ab-ph { display: block; width: 100%; height: 100%; background: linear-gradient(135deg,#ffeaf6,#ffd9ee); }
  .ab-missing {
    display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;
    font-size: 10.5px; font-weight: 800; color: #c58fb0; text-align: center; line-height: 1.5;
  }
  .ab-cell-d {
    position: absolute; left: 5px; bottom: 5px;
    font-size: 11px; font-weight: 900; color: #fff;
    background: rgba(255,20,147,.85); border-radius: 8px; padding: 1px 7px;
    text-shadow: 0 1px 2px rgba(120,0,80,.4);
  }
  .ab-cell-d.sat { background: rgba(47,127,214,.85); }
  .ab-more {
    display: block; margin: 4px auto 12px; background: #fff; cursor: pointer;
    border: 1.5px solid #ffc2e0; color: #d6317f; border-radius: 999px;
    padding: 8px 18px; font-size: 12.5px; font-weight: 800;
  }
  .ab-note {
    text-align: center; margin-top: 4px; line-height: 1.75;
    background: rgba(255,255,255,.75); border-radius: 12px; padding: 8px 12px;
  }
  .bk-warn { background: #fff0f6; border: 1.5px solid #ffb3d4; border-radius: 12px; padding: 8px 11px; }
  /* 全画面ビュー */
  .ab-viewer {
    /* 確認ダイアログ(60)より下、長押しメニュー(40)より上。
       上に出すと全画面ビューから削除したとき確認が裏に隠れて押せなくなる */
    position: fixed; inset: 0; z-index: 50; display: flex; flex-direction: column;
    background: rgba(32,8,24,.96);
  }
  .ab-v-bar {
    display: flex; align-items: center; gap: 10px;
    padding: calc(10px + env(safe-area-inset-top)) 14px 10px;
  }
  .ab-v-x, .ab-v-del {
    background: rgba(255,255,255,.14); border: none; cursor: pointer; color: #fff;
    width: 36px; height: 36px; border-radius: 50%; font-size: 16px; flex-shrink: 0;
  }
  .ab-v-date { font-size: 13.5px; font-weight: 900; color: #ff8ec9; }
  .ab-v-date.sun { color: #ff6fae; }
  .ab-v-date.sat { color: #7fc0ff; }
  .ab-v-n { font-size: 11.5px; color: rgba(255,255,255,.6); font-weight: 700; }
  .ab-v-cal {
    margin-left: auto; position: relative; overflow: hidden; cursor: pointer;
    background: rgba(255,255,255,.14); color: #fff;
    width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center; font-size: 15px;
  }
  .ab-v-cal input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
  .ab-v-main { flex: 1; position: relative; display: flex; align-items: center; justify-content: center; padding: 0 8px 16px; min-height: 0; }
  .ab-v-img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 10px; }
  .ab-v-load, .ab-v-missing { color: rgba(255,255,255,.7); font-size: 13px; white-space: pre-wrap; text-align: center; line-height: 1.8; }
  .ab-v-nav {
    position: absolute; top: 50%; transform: translateY(-50%);
    background: rgba(255,255,255,.16); border: none; cursor: pointer; color: #fff;
    width: 40px; height: 56px; border-radius: 12px; font-size: 26px; line-height: 1;
  }
  .ab-v-nav.prev { left: 6px; }
  .ab-v-nav.next { right: 6px; }

  /* 書き出しパネルの「含めるもの」 */
  .ex-picks { display: flex; gap: 7px; flex-wrap: wrap; }
  .ex-pick {
    display: inline-flex; align-items: center; gap: 6px; cursor: pointer;
    background: #fff; border: 1.5px solid #ffc2e0; border-radius: 999px;
    padding: 7px 13px 7px 9px; font-size: 12.5px; font-weight: 800; color: #a4517f;
    -webkit-tap-highlight-color: transparent;
  }
  .ex-pick.on { border-color: #ff1478; color: #ff1478; background: #fff2f8; }
  .ex-pick .shop-box { width: 17px; height: 17px; border-radius: 5px; font-size: 11px; }
  .ex-pick-n {
    font-size: 11px; font-weight: 800; color: #fff; background: #e9b8d4;
    border-radius: 999px; padding: 1px 7px; margin-left: 2px;
  }
  .ex-pick.on .ex-pick-n { background: #ff1478; }

  /* ===== 🕐 なう（ひとりツイッター） ===== */
  .now-scroll { padding-top: 6px; }
  .now-to-diary {
    margin-left: auto; flex-shrink: 0;
    display: inline-flex; align-items: center; gap: 4px;
    padding: 9px 14px 9px 12px; border: none; border-radius: 999px; cursor: pointer;
    font-size: 14px; font-weight: 900; color: #fff; letter-spacing: .02em;
    background: linear-gradient(120deg, #ff1493 0%, #ff45b0 50%, #c33bff 100%);
    box-shadow: 0 4px 14px rgba(255,20,147,.45), inset 0 1px 0 rgba(255,255,255,.5);
    -webkit-tap-highlight-color: transparent;
  }
  .now-to-diary:active { transform: scale(.95); }
  .now-to-diary-ic { font-size: 15px; }
  .now-to-diary-arw { font-size: 17px; line-height: 1; margin-left: 2px; }
  .now-more {
    display: block; margin: 4px auto 12px; background: #fff; cursor: pointer;
    border: 1.5px solid #ffc2e0; color: #d6317f; border-radius: 999px;
    padding: 7px 16px; font-size: 12px; font-weight: 800;
  }
  /* 日付見出しはスクロールしても上に貼りつく（いまどの日を見ているか分かるように） */
  .now-day {
    position: sticky; top: 0; z-index: 2;
    display: flex; align-items: center; gap: 8px;
    margin: 6px -12px 8px; padding: 7px 16px;
    background: linear-gradient(90deg, rgba(255,240,249,.96), rgba(255,228,244,.96));
    backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
    border-bottom: 1.5px solid #ffd1e8;
  }
  .now-day-l { font-size: 12.5px; font-weight: 800; color: #a4517f; letter-spacing: .02em; }
  .now-day-l.sun { color: #ff3d8b; }
  .now-day-l.sat { color: #2f7fd6; }
  .now-day.today .now-day-l {
    color: #fff; padding: 3px 11px; border-radius: 999px;
    background: linear-gradient(120deg,#ff1493,#ff45b0 55%,#c33bff);
    box-shadow: 0 3px 10px rgba(255,20,147,.35);
  }
  .now-day-n {
    margin-left: auto; font-size: 11px; font-weight: 800; color: #d6317f;
    background: #fff; border: 1.5px solid #ffc2e0; border-radius: 999px; padding: 1px 9px;
  }
  .now-empty { text-align: center; color: #a4517f; font-size: 12.5px; font-weight: 700; padding: 18px 0 8px; }
  /* 縦のタイムライン: 時刻 ｜ 光る点と線 ｜ ひとこと */
  .now-tl { position: relative; padding: 2px 0 8px; }
  .now-tl::before {
    content: ""; position: absolute; left: 78px; top: 8px; bottom: 10px; width: 3px; border-radius: 3px;
    background: linear-gradient(180deg, #ff9fd0, #ff1493 50%, #c33bff);
    opacity: .55;
  }
  .now-post {
    position: relative; display: grid; grid-template-columns: 68px 22px 1fr; align-items: start;
    column-gap: 0; margin: 0 0 8px; cursor: default;
    -webkit-touch-callout: none; -webkit-user-select: none; user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  /* 時刻は大きく太く、不透明のピンク→パープルの札に白抜き（背景の柄に埋もれないように） */
  .now-time {
    justify-self: end; margin-top: 5px;
    padding: 3px 8px 2px; border-radius: 10px;
    font-size: 17px; line-height: 1.2; font-weight: 900; color: #fff;
    font-variant-numeric: tabular-nums; letter-spacing: -.01em;
    background: linear-gradient(135deg, #ff1493 0%, #ff2fa0 45%, #b42cf0 100%);
    box-shadow: 0 3px 10px rgba(255,20,147,.40), inset 0 1px 0 rgba(255,255,255,.45);
    text-shadow: 0 1px 1px rgba(120,0,80,.25);
  }
  .now-dot {
    justify-self: center; margin-top: 13px; width: 12px; height: 12px; border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #fff 0 18%, #ff45b0 45%, #ff1493 100%);
    box-shadow: 0 0 0 3px #fff, 0 0 10px rgba(255,20,147,.75);
  }
  .now-text {
    background: #fff; border: 1.5px solid #ffd6ec; border-radius: 16px;
    padding: 8px 12px; font-size: 14.5px; line-height: 1.6; color: #4a3140;
    white-space: pre-wrap; overflow-wrap: anywhere;
    box-shadow: 0 4px 12px rgba(255,20,147,.12);
  }
  .now-text a { color: #d6317f; font-weight: 700; }
  .now-post.pop .now-text { animation: now-pop .8s cubic-bezier(.3,1.5,.5,1); }
  .now-post.pop .now-dot { animation: now-glow .9s ease-out; }
  @keyframes now-pop {
    0% { transform: translateY(8px) scale(.94); opacity: 0; }
    60% { transform: translateY(0) scale(1.02); opacity: 1; }
    100% { transform: scale(1); }
  }
  @keyframes now-glow {
    0% { box-shadow: 0 0 0 3px #fff, 0 0 0 rgba(255,20,147,0); }
    40% { box-shadow: 0 0 0 3px #fff, 0 0 22px 6px rgba(255,20,147,.9); }
    100% { box-shadow: 0 0 0 3px #fff, 0 0 10px rgba(255,20,147,.75); }
  }
  /* ギャラリー: 書いた文字だけを敷き詰める。日付・時刻は出さない */
  .now-view {
    flex-shrink: 0; width: 38px; height: 38px; border-radius: 50%;
    border: 1.5px solid #ffc2e0; background: #fff; color: #d6317f;
    font-size: 16px; cursor: pointer; -webkit-tap-highlight-color: transparent;
  }
  .now-view.on { background: linear-gradient(120deg,#ff1493,#c33bff); border-color: transparent; color: #fff; }
  .now-gal-scroll { flex: 1; overflow-y: auto; padding: 8px 10px 0; }
  .now-gal-bar { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
  .now-gal-n { font-size: 11.5px; font-weight: 800; color: #a4517f; }
  .now-gal-cols { margin-left: auto; display: flex; gap: 5px; }
  .now-gal-col {
    border: 1.5px solid #f0a6cf; background: #fff; color: #b04a86;
    border-radius: 999px; padding: 4px 11px; font-size: 11.5px; font-weight: 800; cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .now-gal-col.on { background: #ff1478; border-color: #ff1478; color: #fff; }
  /* 段組みにすると、高さがばらばらでも上から詰まる */
  .now-gal { column-gap: 7px; }
  .now-gal.cols-2 { column-count: 2; }
  .now-gal.cols-3 { column-count: 3; }
  .now-card {
    break-inside: avoid; -webkit-column-break-inside: avoid; page-break-inside: avoid;
    display: block; margin: 0 0 7px;
    background: #fff; border: 1.5px solid #ffd6ec; border-radius: 14px;
    padding: 9px 11px; box-shadow: 0 3px 10px rgba(255,20,147,.14);
    font-size: 13px; line-height: 1.6; color: #4a3140;
    /* 省略しない: 書いた文字は全部出す */
    white-space: pre-wrap; overflow-wrap: anywhere;
    -webkit-touch-callout: none; -webkit-user-select: none; user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  .now-gal.cols-3 .now-card { font-size: 11.5px; line-height: 1.55; padding: 7px 9px; border-radius: 12px; }
  .now-card a { color: #d6317f; font-weight: 700; }
  .now-card.pop { animation: now-pop .8s cubic-bezier(.3,1.5,.5,1); }

  /* 日記ルームに出る「🕐 なう」 */
  .now-daily .done-bubble { background: #fff4fa; border-color: #ffc9e4; }
  .now-daily .done-bubble::after { background: #fff4fa; border-color: #ffc9e4; }
  /* 日記の「＋ できたこと / ＋ 体調」: 記録が無い日はこれだけ出す */
  .dx-row { gap: 6px; margin: -6px 0 14px; }
  .dx-pill {
    background: rgba(255,255,255,.7); cursor: pointer;
    border: 1.5px dashed #e3b9d8; color: #a4517f;
    border-radius: 999px; padding: 5px 12px;
    font-size: 11.5px; font-weight: 800;
    -webkit-tap-highlight-color: transparent;
  }
  .dx-pill:active { background: #fff; border-color: #ff8ec9; }

  .now-d-date {
    font-size: 11.5px; font-weight: 900; color: #fff; letter-spacing: .02em;
    background: linear-gradient(120deg,#ff1493,#c33bff);
    border-radius: 999px; padding: 2px 9px;
  }
  .now-d-date.wd-sun { background: linear-gradient(120deg,#ff3d8b,#ff7ab5); }
  .now-d-date.wd-sat { background: linear-gradient(120deg,#2f7fd6,#5fa8ef); }
  .now-d-n { font-size: 11px; font-weight: 800; color: #d6317f; margin-left: auto; }
  .now-d-list { display: flex; flex-direction: column; gap: 2px; margin-top: 2px; }
  .now-d-line { display: flex; align-items: baseline; gap: 9px; font-size: 12.5px; line-height: 1.65; color: #5b4570; }
  .now-d-time {
    flex-shrink: 0; min-width: 44px; text-align: right;
    font-size: 15px; font-weight: 900; color: #c8108a; font-variant-numeric: tabular-nums; letter-spacing: -.01em;
  }
  .now-d-text { white-space: pre-wrap; overflow-wrap: anywhere; min-width: 0; }

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
    background: ${_o} #f6bedd; background-size: 240px 240px;
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
  .done-head .hv-open { margin-left: auto; }
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
    background: ${_o} #f6bedd; background-size: 240px 240px;
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
  /* ---------- 📝 スマートノート ---------- */
  .sn-scroll { flex: 1; overflow-y: auto; padding: 10px 12px calc(28px + env(safe-area-inset-bottom)); }
  .sn-s1 { --sc: #7b61ff; } .sn-s2 { --sc: #b03cff; } .sn-s3 { --sc: #ff45b0; }
  .sn-s4 { --sc: #ff00aa; } .sn-s5 { --sc: #ff1493; } .sn-s0 { --sc: #e3b8d2; }
  .sn-card {
    background: #fff; border-radius: 20px; padding: 10px 10px 4px;
    border: 2px solid #ffc2e0; box-shadow: 0 6px 18px rgba(255,20,147,.16);
  }
  .sn-dayrow { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
  .sn-day {
    position: relative; overflow: hidden; cursor: pointer;
    font-size: 15px; font-weight: 900; color: #fff; padding: 5px 14px; border-radius: 999px;
    background: linear-gradient(120deg,#ff1493,#ff45b0 55%,#c33bff);
    box-shadow: 0 3px 10px rgba(255,20,147,.35);
  }
  .sn-day input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
  .sn-arrow {
    width: 32px; height: 32px; border-radius: 50%; border: 1.5px solid #ffc2e0;
    background: #fff; color: #ff1493; font-size: 20px; font-weight: 900; line-height: 1; cursor: pointer;
  }
  .sn-arrow:disabled { opacity: .3; cursor: default; }
  .sn-back-today {
    margin-left: auto; background: none; border: none; color: #d6317f;
    font-size: 12px; font-weight: 800; text-decoration: underline; cursor: pointer;
  }
  .sn-slot {
    display: grid; grid-template-columns: 22px 1fr; gap: 4px 6px; align-items: center;
    padding: 8px 2px; border-top: 1.5px dashed #ffd1e8;
  }
  .sn-no { font-size: 14px; font-weight: 900; color: #ff1493; text-align: center; }
  .sn-in {
    min-width: 0; border: none; outline: none; background: transparent;
    font-size: 16px; font-weight: 700; color: #4a3140; padding: 4px 2px;
  }
  .sn-in::placeholder { color: #e7a9c8; font-weight: 600; }
  .sn-scores { grid-column: 2; display: flex; gap: 6px; }
  .sn-sc {
    flex: 1; height: 32px; max-width: 52px; border-radius: 10px; cursor: pointer;
    border: 2px solid var(--sc); background: #fff; color: var(--sc);
    font-size: 15px; font-weight: 900;
  }
  .sn-sc.on {
    background: var(--sc); color: #fff;
    box-shadow: 0 0 0 2px #fff, 0 0 12px var(--sc);
  }
  .sn-tabs { display: flex; gap: 8px; margin: 18px 0 10px; }
  .sn-tab {
    flex: 1; padding: 9px 0; border-radius: 999px; cursor: pointer;
    border: 2px solid #ff1493; background: #fff; color: #ff1493; font-size: 14px; font-weight: 900;
  }
  .sn-tab.on {
    color: #fff; background: linear-gradient(120deg,#ff1493,#ff00aa 60%,#c33bff);
    box-shadow: 0 4px 14px rgba(255,20,147,.4);
  }
  .sn-filters { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; margin-bottom: 10px; }
  .sn-f {
    display: inline-flex; align-items: baseline; gap: 4px; padding: 5px 11px; border-radius: 999px;
    border: 2px solid var(--sc); background: #fff; color: var(--sc);
    font-size: 13px; font-weight: 900; cursor: pointer;
  }
  .sn-f small { font-size: 10.5px; font-weight: 800; opacity: .75; }
  .sn-f.on { background: var(--sc); color: #fff; box-shadow: 0 0 12px var(--sc); }
  .sn-fclear {
    background: none; border: none; color: #c58fb0; font-size: 12px;
    text-decoration: underline; cursor: pointer;
  }
  .sn-mhead { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 8px; }
  .sn-mlabel { font-size: 20px; font-weight: 900; color: #ff1493; letter-spacing: .04em; }
  .sn-cal { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
  .sn-dow { text-align: center; font-size: 11px; font-weight: 900; color: #c058a0; }
  .sn-cell {
    position: relative; min-height: 84px; min-width: 0; cursor: pointer;
    display: flex; flex-direction: column; align-items: stretch; gap: 2px; padding: 3px 2px 4px;
    border-radius: 10px; border: 1.5px solid #ffd1e8; background: #fff;
  }
  .sn-cell.has { border-color: #ff9fd0; background: #fff4fa; }
  .sn-cell.today .sn-dn { color: #fff; background: #ff1493; border-radius: 999px; padding: 0 6px; }
  .sn-cell.sel { border: 2.5px solid #ff1493; box-shadow: 0 0 10px rgba(255,20,147,.45); }
  .sn-cell.dim { opacity: .3; }
  .sn-dn { align-self: center; font-size: 12px; font-weight: 900; color: #a4517f; }
  .sn-ct {
    flex: 1; font-size: 9.5px; line-height: 1.25; font-weight: 800; color: var(--sc);
    text-align: left; overflow-wrap: anywhere; word-break: break-all;
    display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
  }
  .sn-ct.sn-s1, .sn-ct.sn-s2 { color: #6a3fd6; }
  .sn-pips { display: flex; flex-wrap: wrap; justify-content: center; gap: 2px; margin-top: auto; }
  .sn-pip { width: 6px; height: 6px; border-radius: 50%; background: var(--sc); box-shadow: 0 0 4px var(--sc); }
  .sn-list { display: flex; flex-direction: column; gap: 6px; margin-top: 12px; }
  .sn-group { display: flex; flex-direction: column; gap: 5px; margin-bottom: 8px; }
  .sn-gday {
    align-self: flex-start; background: none; border: none; cursor: pointer; padding: 2px 4px;
    font-size: 13px; font-weight: 900; color: #d6317f;
  }
  .sn-li {
    display: flex; align-items: center; gap: 10px; text-align: left; cursor: pointer;
    background: #fff; border: 1.5px solid #ffd1e8; border-radius: 14px; padding: 8px 10px;
  }
  .sn-badge {
    flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%;
    display: grid; place-items: center; color: #fff; font-size: 14px; font-weight: 900;
    background: var(--sc); box-shadow: 0 0 8px var(--sc);
  }
  .sn-lt { flex: 1; min-width: 0; font-size: 14px; font-weight: 700; color: #4a3140; overflow-wrap: anywhere; }
  .sn-ld { flex-shrink: 0; font-size: 11px; font-weight: 800; color: #c58fb0; }
  .sn-none { text-align: center; font-size: 13px; color: #c58fb0; padding: 18px 0; }
  .sn-more {
    margin: 4px auto 0; background: #fff; border: 1.5px solid #ffc2e0; border-radius: 999px;
    color: #d6317f; font-size: 12.5px; font-weight: 800; padding: 7px 16px; cursor: pointer;
  }
  @media (prefers-reduced-motion: reduce) {
    * { transition: none !important; }
    .todo-react, .todo-row.completing, .todo-row.completing .todo-check { animation: none !important; }
    .todo-row.completing { opacity: .5; }
  }
`;function sx(e,t=500){const n=E.useRef({}),r=l=>{if(typeof e!="function"||l.touches&&l.touches.length!==1)return;const a=l.touches?l.touches[0]:l;n.current.x=a.clientX,n.current.y=a.clientY,n.current.fired=!1,clearTimeout(n.current.timer),n.current.timer=setTimeout(()=>{n.current.fired=!0;try{navigator.vibrate&&navigator.vibrate(15)}catch{}e({x:n.current.x,y:n.current.y})},t)},o=l=>{const a=l.touches?l.touches[0]:l;(Math.abs(a.clientX-n.current.x)>10||Math.abs(a.clientY-n.current.y)>10)&&clearTimeout(n.current.timer)},i=()=>clearTimeout(n.current.timer);return{onTouchStart:r,onTouchMove:o,onTouchEnd:i,onTouchCancel:i,onContextMenu:l=>{typeof e=="function"&&(l.preventDefault(),e({x:l.clientX,y:l.clientY}))},onClickCapture:l=>{n.current.fired&&(l.stopPropagation(),l.preventDefault(),n.current.fired=!1)}}}function Yc({onLongPress:e,longPressMs:t,children:n,...r}){const o=sx(e,t);return c.jsx("div",{...r,...o,children:n})}function cx({x:e,y:t,onCopy:n,onEdit:r,onDelete:o,onClose:i,top:l,extra:a}){const u=E.useRef(null),[h,p]=E.useState(null);return E.useLayoutEffect(()=>{const y=u.current;if(!y)return;const v=y.offsetHeight,b=window.innerWidth,L=window.innerHeight,x=Math.max(8,Math.min(e-168/2,b-168-8));let f=t+8;f+v>L-8&&(f=t-8-v),f<8&&(f=Math.max(8,L-v-8)),p({left:x,top:f})},[e,t,l,a,r,o]),c.jsx("div",{className:"ctx-overlay",onClick:i,onContextMenu:y=>y.preventDefault(),children:c.jsxs("div",{ref:u,className:"ctx-menu",style:{left:h?h.left:Math.max(8,Math.min(e-168/2,window.innerWidth-168-8)),top:h?h.top:t+8,width:168,maxHeight:`calc(100vh - ${8*2}px)`,overflowY:"auto",visibility:h?"visible":"hidden"},onClick:y=>y.stopPropagation(),children:[(l||[]).map((y,v)=>c.jsx("button",{className:"ctx-item ctx-top",onClick:y.onClick,children:y.label},v)),c.jsx("button",{className:"ctx-item",onClick:n,children:"📋 コピー"}),r&&c.jsx("button",{className:"ctx-item",onClick:r,children:"✏️ 編集"}),(a||[]).map((y,v)=>c.jsx("button",{className:"ctx-item",onClick:y.onClick,children:y.label},v)),o&&c.jsx("button",{className:"ctx-item ctx-del",onClick:o,children:"🗑 削除"})]})})}function jf({message:e,confirmLabel:t="削除する",onConfirm:n,onCancel:r}){return c.jsx("div",{className:"overlay confirm-over",onClick:r,children:c.jsxs("div",{className:"panel confirm-panel",onClick:o=>o.stopPropagation(),children:[c.jsx("div",{className:"confirm-msg",children:e}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-close",onClick:r,children:"キャンセル"}),c.jsx("button",{className:"p-del arm",onClick:n,children:t})]})]})})}function ux(e=!0){const[t,n]=E.useState(0);return E.useEffect(()=>{if(!e||!window.visualViewport){n(0);return}const r=window.visualViewport,o=()=>n(Math.max(0,window.innerHeight-r.height-r.offsetTop));return o(),r.addEventListener("resize",o),r.addEventListener("scroll",o),()=>{r.removeEventListener("resize",o),r.removeEventListener("scroll",o)}},[e]),t}const Qc=/https?:\/\/[^\s　-〿぀-ヿ一-鿿＀-￯]+/g,dx=/[.,;:、。）)\]】」』"'！？!?]+$/;function Xc(e,t=n=>n){if(!e)return e;const n=[];let r=0,o=0,i;for(Qc.lastIndex=0;i=Qc.exec(e);){let l=i[0];const a=(l.match(dx)||[""])[0];a&&(l=l.slice(0,l.length-a.length)),l&&(i.index>r&&n.push(c.jsx(E.Fragment,{children:t(e.slice(r,i.index))},o++)),n.push(c.jsx("a",{className:"body-link",href:l,target:"_blank",rel:"noopener noreferrer",onClick:s=>s.stopPropagation(),children:l},o++)),r=i.index+l.length)}return n.length?(r<e.length&&n.push(c.jsx(E.Fragment,{children:t(e.slice(r))},o++)),n):t(e)}function fx({wrong:e,onSubmit:t,onCancel:n}){const[r,o]=E.useState("");return c.jsx("div",{className:"overlay",onClick:n,children:c.jsxs("div",{className:"panel",onClick:i=>i.stopPropagation(),children:[c.jsx("h3",{children:"🔑 合言葉"}),c.jsxs("div",{className:"wd-bell-note",children:[e?"合言葉がちがうみたい。もう一度入れてね。":"AIを使う機能の合言葉を入れてね。",c.jsx("br",{}),"このスマホに覚えるので、入れるのは最初の1回だけ。"]}),c.jsx("input",{className:"f-input",type:"password",autoFocus:!0,autoComplete:"off",value:r,onChange:i=>o(i.target.value)}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",disabled:!r.trim(),onClick:()=>t(r.trim()),children:"OK"}),c.jsx("button",{className:"p-close",onClick:n,children:"もどる"})]})]})})}const px=location.hostname==="localhost"?"http://localhost:8788/api/":"https://lifelog-push.pages.dev/api/",Ef="readpass-v1",hx=()=>U(Ef).catch(()=>null),El=e=>I(Ef,e||null);async function gx(e,t,n){let r;try{r=await fetch(px+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...t,pass:n})})}catch{throw new Error("net")}const o=await r.json().catch(()=>({}));if(r.status===401)throw new Error("pass");if(r.status===429)throw new Error("limit");if(!r.ok)throw new Error(o.error||"ai");return o}async function xx(e,t,n){let r=await hx();for(let o=0;o<3;o++){if(!r&&(r=await n(o>0),!r))throw new Error("cancel");try{const i=await gx(e,t,r);return await El(r),i}catch(i){if(i.message!=="pass")throw i.message!=="net"&&await El(r),i;await El(null),r=null}}throw new Error("pass")}const Gc=150,Jc=(e,t)=>Uc(e.time)-Uc(t.time)||(e.at||0)-(t.at||0),mx=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(e||"");return t?`${t[1].padStart(2,"0")}:${t[2]}`:""},yx=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(e||"");return t?`${Number(t[1])}:${t[2]}`:""},wx=/^(💗|🕐|🔁|✨|🌙|🚀)\s*(.+)$/u;function Zc(e){const t=[];let n=null;for(const r of String(e||"").split(`
`)){const o=r.replace(/^#+\s*/,"").replace(/\*\*/g,"").trim();if(!o)continue;if(wx.exec(o)&&o.length<=24){n={head:o,lines:[]},t.push(n);continue}n||(n={head:"",lines:[]},t.push(n));const l=/^([-・•]|\d+[.)])\s*/.exec(o);n.lines.push(l?{bullet:!0,text:o.slice(l[0].length)}:{text:o})}return t}const Nl=e=>`${pe(e.from).slice(5)}〜${pe(e.to).slice(5)}`;function vx({room:e,onBack:t,onMeta:n,showToast:r,pinned:o,onOpenDiary:i}){const[l,a]=E.useState([]),[s,g]=E.useState(!1),[u,h]=E.useState(""),[p,y]=E.useState(()=>Bc()),[v,b]=E.useState(null),[L,x]=E.useState(null),[f,m]=E.useState(null),[w,z]=E.useState(null),[_,P]=E.useState(76),[T,W]=E.useState(e.nowView==="gallery"?"gallery":"time"),[A,J]=E.useState(Number(e.nowCols)===3?3:2),[Pe,de]=E.useState(Gc),[me,Ct]=E.useState([]),[ne,ye]=E.useState(null),[O,F]=E.useState(null),B=E.useRef(null),Q=E.useRef(null),re=E.useRef(null),Te=E.useRef({}),Fe=E.useRef([]),Kt=ux(!L&&!ne),we=Ue();E.useEffect(()=>{(async()=>{try{const S=await U(Me(e.id));if(S&&typeof S=="object"){const{posts:R,...X}=S;Te.current=X,Array.isArray(X.reports)&&Ct(X.reports),Array.isArray(R)&&(Fe.current=R,a(R))}}catch{}finally{g(!0)}})()},[e.id]),E.useEffect(()=>{if(!Q.current||typeof ResizeObserver>"u")return;const S=new ResizeObserver(()=>Q.current&&P(Q.current.offsetHeight));return S.observe(Q.current),()=>S.disconnect()},[L]);const Xe=S=>{const R=B.current;R&&R.scrollTo({top:R.scrollHeight,behavior:S?"smooth":"auto"})};E.useEffect(()=>{s&&T==="time"&&Xe(!1)},[s,T]);const ke=async S=>{Fe.current=S,a(S);try{await I(Me(e.id),{...Te.current,posts:S});const R=[...S].sort((X,Se)=>(X.at||0)-(Se.at||0)).pop();n({preview:R?`${R.time} ${R.text.split(`
`)[0]}`.slice(0,40):"",lastAt:Date.now()})}catch{r("保存に失敗しました。ストレージを確認してね")}},_n=async S=>{Te.current={...Te.current,reports:S},Ct(S);try{await I(Me(e.id),{...Te.current,posts:Fe.current})}catch{r("保存に失敗しました。ストレージを確認してね")}},_t=xi(Ue(),-6),un=l.filter(S=>S.dateKey>=_t&&S.dateKey<=Ue()).sort((S,R)=>S.dateKey<R.dateKey?-1:S.dateKey>R.dateKey?1:Jc(S,R)),kt=S=>new Promise(R=>F({wrong:S,resolve:R})),ot=ne!=null&&ne.openId?me.find(S=>S.id===ne.openId):null,Ri=async()=>{if(!un.length){r("この7日のなうがまだないよ");return}ye({busy:!0});const S=Ue();try{const R=await xx("reflect",{from:_t,to:S,posts:un.map(Se=>({dateKey:Se.dateKey,time:Se.time,text:Se.text}))},kt);if(!R.text)throw new Error("ai");const X=Ge();await _n([{id:X,from:_t,to:S,count:un.length,text:R.text,at:Date.now()},...me]),ye({busy:!1,openId:X});return}catch(R){R.message!=="cancel"&&r({limit:"今日のふりかえりは上限に達しました",net:"つながりませんでした。電波を確認してね",pass:"合言葉が合いませんでした"}[R.message]||"ふりかえりを作れませんでした")}ye({busy:!1})},lr=S=>{m({message:`${Nl(S)} のふりかえりを削除しますか？`,onConfirm:()=>{_n(me.filter(R=>R.id!==S.id)),m(null),ye({busy:!1})}})},ar=()=>{const S=u.trim();if(!S)return;const R={id:Ge(),dateKey:Ue(),time:Sf(),text:S,at:Date.now()};ke([...l,R]),h(""),re.current&&(re.current.style.height="auto"),z(R.id),setTimeout(()=>z(null),900),T==="time"&&requestAnimationFrame(()=>Xe(!0))},to=S=>{S.key==="Enter"&&!S.shiftKey&&!S.nativeEvent.isComposing&&S.keyCode!==229&&(S.preventDefault(),ar())},no=S=>{h(S.target.value);const R=S.target;R.style.height="auto",R.style.height=Math.min(R.scrollHeight,120)+"px"},Z=()=>{const S=L.text.trim(),R=yx(L.time);if(!S){r("なにしてたか書いてね");return}if(!R){r("時刻を入れてね");return}ke(l.map(X=>X.id===L.id?{...X,text:S,time:R}:X)),x(null)},ro=S=>{const R=l.find(Se=>Se.id===S);if(!R)return;const X=R.text.length>20?R.text.slice(0,20)+"…":R.text;m({message:`${R.time}「${X}」を削除しますか？`,onConfirm:()=>{ke(l.filter(Se=>Se.id!==S)),m(null),x(null)}})},dn={};for(const S of l)(dn[S.dateKey]=dn[S.dateKey]||[]).push(S);const oo=Object.keys(dn).sort(),sr=oo.filter(S=>S>=p);sr.includes(we)||sr.push(we);const io=oo.filter(S=>S<p).length,Oi=(dn[we]||[]).length,lo=S=>{const R=`${pe(S).slice(5)} ${kf[je(S).getDay()]}`;return S===we?`今日 ${R}`:S===Bc()?`昨日 ${R}`:R},Mi=S=>{W(S),n({nowView:S})},Ai=S=>{J(S),n({nowCols:S})},Dt=[...l].sort((S,R)=>S.dateKey<R.dateKey?1:S.dateKey>R.dateKey?-1:(R.at||0)-(S.at||0)),it=Dt.slice(0,Pe),Lt=v&&l.find(S=>S.id===v.id);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"hd",children:[c.jsx("button",{className:"back-btn","aria-label":"もどる",onClick:t,children:"‹"}),c.jsx("span",{style:{fontSize:20},children:e.emoji}),c.jsxs("div",{style:{minWidth:0},children:[c.jsx("div",{className:"hd-title",children:e.name}),c.jsx("div",{className:"hd-sub",children:s?`今日 ${Oi}件`:"Nachumin Lifelog"})]}),c.jsx("button",{className:"now-view","aria-label":"ふりかえり",onClick:()=>ye({busy:!1}),style:{marginLeft:"auto"},children:"✨"}),c.jsx("button",{className:"now-view"+(T==="gallery"?" on":""),"aria-label":T==="gallery"?"時系列で見る":"ギャラリーで見る",onClick:()=>Mi(T==="gallery"?"time":"gallery"),children:T==="gallery"?"🕐":"▦"}),i&&c.jsxs("button",{className:"now-to-diary",onClick:i,"aria-label":"日記をひらく",style:{marginLeft:0},children:[c.jsx("span",{className:"now-to-diary-ic",children:"💗"}),"日記",c.jsx("span",{className:"now-to-diary-arw",children:"›"})]})]}),o,T==="gallery"?c.jsxs("div",{className:"now-gal-scroll",style:{paddingBottom:_+12},children:[c.jsxs("div",{className:"now-gal-bar",children:[c.jsxs("span",{className:"now-gal-n",children:[Dt.length,"件"]}),c.jsx("div",{className:"now-gal-cols",children:[2,3].map(S=>c.jsxs("button",{className:"now-gal-col"+(A===S?" on":""),"aria-label":`${S}列にする`,onClick:()=>Ai(S),children:[S,"列"]},S))})]}),s&&Dt.length===0&&c.jsx("div",{className:"now-empty",children:"下からつぶやいてね🕐"}),c.jsx("div",{className:"now-gal cols-"+A,children:it.map(S=>c.jsx(Yc,{className:"now-card"+(w===S.id?" pop":""),onLongPress:R=>b({id:S.id,x:R.x,y:R.y}),children:Xc(S.text)},S.id))}),Dt.length>it.length&&c.jsxs("button",{className:"now-more",onClick:()=>de(S=>S+Gc),children:["↓ もっと見る（あと",Dt.length-it.length,"件）"]})]}):c.jsxs("div",{className:"chat now-scroll",ref:B,style:{paddingBottom:_+12},children:[io>0&&c.jsxs("button",{className:"now-more",onClick:()=>y(S=>xi(S,-7)),children:["↑ 前の日を見る（あと",io,"日ぶん）"]}),sr.map(S=>{const R=(dn[S]||[]).slice().sort(Jc);return c.jsxs(E.Fragment,{children:[c.jsxs("div",{className:"now-day"+(S===we?" today":""),children:[c.jsx("span",{className:"now-day-l "+Xg(S),children:lo(S)}),R.length>0&&c.jsx("span",{className:"now-day-n",children:R.length})]}),R.length===0&&S===we&&c.jsx("div",{className:"now-empty",children:"下からつぶやいてね🕐 時刻は自動でつくよ"}),c.jsx("div",{className:"now-tl",children:R.map(X=>c.jsxs(Yc,{className:"now-post"+(w===X.id?" pop":""),onLongPress:Se=>b({id:X.id,x:Se.x,y:Se.y}),children:[c.jsx("span",{className:"now-time",children:X.time}),c.jsx("span",{className:"now-dot","aria-hidden":"true"}),c.jsx("span",{className:"now-text",children:Xc(X.text)})]},X.id))})]},S)})]}),!L&&!ne&&c.jsx("div",{className:"bar bar-fixed now-bar",ref:Q,style:{bottom:Kt},children:c.jsxs("div",{className:"in-row",children:[c.jsx("textarea",{ref:re,className:"ta",rows:1,placeholder:"いまなにしてる？",enterKeyHint:"send",value:u,onChange:no,onKeyDown:to}),c.jsx("button",{className:"send","aria-label":"つぶやく",disabled:!u.trim(),onClick:ar,children:"↑"})]})}),v&&Lt&&c.jsx(cx,{x:v.x,y:v.y,onClose:()=>b(null),onCopy:async()=>{const S=await Kc(`${Lt.time} ${Lt.text}`);r(S?"コピーしました🩷":"コピーできませんでした"),b(null)},onEdit:()=>{x({id:Lt.id,text:Lt.text,time:mx(Lt.time)}),b(null)},onDelete:()=>{const S=Lt.id;b(null),ro(S)}}),L&&c.jsx("div",{className:"overlay",onClick:()=>x(null),children:c.jsxs("div",{className:"panel",onClick:S=>S.stopPropagation(),children:[c.jsx("h3",{children:"🕐 なうを直す"}),c.jsx("div",{className:"f-label",children:"時刻（あとから書いたときは直してね）"}),c.jsx("input",{className:"f-input",type:"time",style:{width:140},value:L.time,onChange:S=>x(R=>({...R,time:S.target.value}))}),c.jsx("div",{className:"f-label",children:"なにしてた"}),c.jsx("textarea",{autoFocus:!0,style:{minHeight:80},value:L.text,onChange:S=>x(R=>({...R,text:S.target.value}))}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:Z,children:"保存"}),c.jsx("button",{className:"p-del",onClick:()=>ro(L.id),children:"削除"}),c.jsx("button",{className:"p-close",onClick:()=>x(null),children:"もどる"})]})]})}),ne&&c.jsxs("div",{className:"rf-screen",children:[c.jsxs("div",{className:"hd",children:[c.jsx("button",{className:"back-btn","aria-label":"もどる",disabled:ne.busy,onClick:()=>ne.openId?ye({busy:!1}):ye(null),children:"‹"}),c.jsx("span",{style:{fontSize:20},children:"✨"}),c.jsxs("div",{style:{minWidth:0},children:[c.jsx("div",{className:"hd-title",children:"なうのふりかえり"}),c.jsx("div",{className:"hd-sub",children:ot?Nl(ot):`${me.length}件たまってる`})]})]}),ot?c.jsxs("div",{className:"rf-scroll",children:[Zc(ot.text).map((S,R)=>c.jsxs("section",{className:"rf-sec"+(R===0?" lead":""),children:[S.head&&c.jsx("h4",{className:"rf-head",children:S.head}),S.lines.map((X,Se)=>X.bullet?c.jsx("div",{className:"rf-li",children:X.text},Se):c.jsx("p",{className:"rf-p",children:X.text},Se))]},R)),c.jsxs("div",{className:"rf-acts",children:[c.jsx("button",{onClick:async()=>{const S=await Kc(ot.text);r(S?"コピーしました🩷":"コピーできませんでした")},children:"コピー"}),c.jsx("button",{onClick:()=>lr(ot),children:"削除"})]})]}):c.jsxs("div",{className:"rf-scroll",children:[c.jsx("button",{className:"rf-make",disabled:ne.busy,onClick:Ri,children:ne.busy?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"wd-cam-spin"})," ふりかえり中…（30秒くらい）"]}):c.jsxs(c.Fragment,{children:["💗 この7日をふりかえる",c.jsxs("small",{children:[pe(_t).slice(5),"〜今日・",un.length,"件"]})]})}),c.jsx("div",{className:"rf-note",children:"できたふりかえりはこのスマホに保存されて、下からいつでも見返せます"}),me.length===0&&c.jsx("div",{className:"now-empty",children:"まだふりかえりはありません"}),me.map(S=>{var R,X;return c.jsxs("button",{className:"rf-tile",onClick:()=>ye({busy:!1,openId:S.id}),children:[c.jsxs("span",{className:"rf-range",children:[Nl(S),c.jsxs("small",{children:[S.count,"件"]})]}),c.jsx("span",{className:"rf-tile-lead",children:((X=(R=Zc(S.text)[0])==null?void 0:R.lines[0])==null?void 0:X.text)||""}),c.jsx("span",{className:"rf-tile-arw",children:"›"})]},S.id)})]})]}),O&&c.jsx(fx,{wrong:O.wrong,onSubmit:S=>{O.resolve(S),F(null)},onCancel:()=>{O.resolve(null),F(null)}}),f&&c.jsx(jf,{message:f.message,onConfirm:f.onConfirm,onCancel:()=>m(null)})]})}function bx({items:e,keyOf:t,onReorder:n,renderItem:r,onLongPress:o,longPress:i=320,footer:l}){const[a,s]=E.useState(null),[g,u]=E.useState(null),h=E.useRef(null),p=E.useRef({});p.current.items=e,p.current.keyOf=t,p.current.onReorder=n,p.current.onLongPress=o;const y=a||e,v=w=>{var z;return(z=h.current)==null?void 0:z.querySelector(`[data-dk="${CSS.escape(String(w))}"]`)},b=()=>{const w=h.current;if(!w||p.current.dragKey==null)return;const z=v(p.current.dragKey);if(!z)return;const _=w.getBoundingClientRect(),P=_.left+z.offsetLeft,T=_.top+z.offsetTop,W=p.current.pointerX-p.current.grabX-P,A=p.current.pointerY-p.current.grabY-T;z.style.transform=`translate(${W}px, ${A}px) scale(1.08)`},L=w=>{const z=v(w);if(!z)return;const _=z.getBoundingClientRect();p.current.dragKey=w,p.current.grabX=p.current.pointerX-_.left,p.current.grabY=p.current.pointerY-_.top,p.current.pickupX=p.current.pointerX,p.current.pickupY=p.current.pointerY,p.current.moved=!1,p.current.order=p.current.items.slice(),z.style.zIndex="10",s(p.current.order),u(w);try{navigator.vibrate&&navigator.vibrate(12)}catch{}requestAnimationFrame(b)},x=()=>{const w=h.current;if(!w||p.current.dragKey==null)return;const z=w.getBoundingClientRect(),_=p.current.pointerX-z.left,P=p.current.pointerY-z.top,T=[...w.querySelectorAll("[data-dk]")];let W=0,A=1/0;for(let de=0;de<T.length;de++){const me=T[de],Ct=me.offsetLeft+me.offsetWidth/2,ne=me.offsetTop+me.offsetHeight/2,ye=(_-Ct)**2+(P-ne)**2;ye<A&&(A=ye,W=de)}const J=p.current.order,Pe=J.findIndex(de=>p.current.keyOf(de)===p.current.dragKey);if(Pe!==-1&&Pe!==W){const[de]=J.splice(Pe,1);J.splice(W,0,de),s(J.slice())}requestAnimationFrame(b)},f=()=>{if(clearTimeout(p.current.timer),p.current.dragKey!=null){const w=v(p.current.dragKey);if(w&&(w.style.transform="",w.style.zIndex=""),p.current.moved)p.current.onReorder(p.current.order.slice());else if(p.current.onLongPress){const z=p.current.items.find(_=>p.current.keyOf(_)===p.current.dragKey);p.current.onLongPress({item:z,x:p.current.pointerX,y:p.current.pointerY})}p.current.suppress=Date.now()+450}p.current.dragKey=null,u(null),s(null)};E.useEffect(()=>{const w=h.current;if(!w)return;const z=W=>{if(W.touches.length!==1)return;const A=W.target.closest("[data-dk]");if(!A||!w.contains(A))return;const J=W.touches[0];p.current.startX=J.clientX,p.current.startY=J.clientY,p.current.pointerX=J.clientX,p.current.pointerY=J.clientY,p.current.moved=!1;const Pe=A.getAttribute("data-dk");clearTimeout(p.current.timer),p.current.timer=setTimeout(()=>{p.current.moved||L(Pe)},i)},_=W=>{const A=W.touches[0];if(p.current.pointerX=A.clientX,p.current.pointerY=A.clientY,p.current.dragKey==null){(Math.abs(A.clientX-p.current.startX)>12||Math.abs(A.clientY-p.current.startY)>12)&&(p.current.moved=!0,clearTimeout(p.current.timer));return}(Math.abs(A.clientX-p.current.pickupX)>8||Math.abs(A.clientY-p.current.pickupY)>8)&&(p.current.moved=!0),W.preventDefault(),x()},P=()=>{clearTimeout(p.current.timer),p.current.dragKey!=null&&f()},T=W=>W.preventDefault();return w.addEventListener("touchstart",z,{passive:!0}),w.addEventListener("touchmove",_,{passive:!1}),w.addEventListener("touchend",P,{passive:!0}),w.addEventListener("touchcancel",P,{passive:!0}),w.addEventListener("contextmenu",T),()=>{w.removeEventListener("touchstart",z),w.removeEventListener("touchmove",_),w.removeEventListener("touchend",P),w.removeEventListener("touchcancel",P),w.removeEventListener("contextmenu",T)}},[i]);const m=w=>{p.current.suppress&&Date.now()<p.current.suppress&&(w.stopPropagation(),w.preventDefault(),p.current.suppress=0)};return c.jsxs("div",{ref:h,className:"ig-grid",onClickCapture:m,children:[y.map(w=>{const z=t(w);return c.jsx("div",{"data-dk":z,className:"ig-cell"+(g===z?" dragging":""),children:r(w)},z)}),l]})}function kx({onBack:e,children:t}){const[n,r]=E.useState(0),[o,i]=E.useState(!1),l=E.useRef(null),a=E.useRef(!1),s=p=>{if(p.touches.length!==1||document.querySelector(".overlay"))return;const y=p.touches[0];y.clientX>28||(l.current={x:y.clientX,y:y.clientY},a.current=!1)},g=p=>{if(!l.current)return;const y=p.touches[0],v=y.clientX-l.current.x,b=y.clientY-l.current.y;if(!a.current){if(Math.abs(v)<8&&Math.abs(b)<8)return;if(Math.abs(b)>Math.abs(v)){l.current=null;return}a.current=!0,i(!1)}r(Math.max(0,v))},u=()=>{if(!l.current)return;const p=Math.min(110,window.innerWidth*.3);i(!0),a.current&&n>p?(r(window.innerWidth),setTimeout(e,190)):r(0),l.current=null,a.current=!1},h=n>0?{transform:`translateX(${n}px)`,transition:o?"transform .19s ease-out":"none",boxShadow:"-10px 0 26px rgba(120,50,90,.18)"}:void 0;return c.jsx("div",{className:"swipe-wrap",style:h,onTouchStart:s,onTouchMove:g,onTouchEnd:u,children:t})}const Sx=E.lazy(()=>bt(()=>import("./DiaryRoom-D1tTAbg0.js"),__vite__mapDeps([0,1]),import.meta.url)),zx=E.lazy(()=>bt(()=>import("./TalkRoom-CsaRkc0I.js"),[],import.meta.url)),jx=E.lazy(()=>bt(()=>import("./TodoRoom-BpqJ9jP9.js"),__vite__mapDeps([2,1]),import.meta.url)),Ex=E.lazy(()=>bt(()=>import("./DarelogRoom-BBHdKELg.js"),__vite__mapDeps([3,4]),import.meta.url)),Nx=E.lazy(()=>bt(()=>import("./ExpenseRoom-IrPetMNT.js"),[],import.meta.url)),Cx=E.lazy(()=>bt(()=>import("./ChallengeRoom-Cj7-25p4.js"),[],import.meta.url)),_x=E.lazy(()=>bt(()=>import("./FutureRoom-DoyQuLLE.js"),[],import.meta.url)),Dx=E.lazy(()=>bt(()=>import("./AlbumRoom-CP0i7rBR.js"),__vite__mapDeps([5,6]),import.meta.url)),Lx=E.lazy(()=>bt(()=>import("./SmartRoom-B7QborSy.js"),[],import.meta.url)),Px=E.lazy(()=>bt(()=>import("./WordsRoom-VkXvAbbB.js"),__vite__mapDeps([7,6]),import.meta.url)),Tx=["💗","🩷","💛","🩵","💜","🤍","🖤","🌸","🌷","🎀","🌟","✨","⭐️","👑","🫶","🐰","🐻","🐱","🦄","🌙","🌊","🌿","🍓","🍒","🧸","📖","💬","✅","🌗","💰"];function Rx(){const[e,t]=E.useState(null),[n,r]=E.useState({screen:"home"}),[o,i]=E.useState(!1),[l,a]=E.useState(""),[s,g]=E.useState(null),[u,h]=E.useState(null),[p,y]=E.useState(!1),[v,b]=E.useState(null),[L,x]=E.useState(""),[f,m]=E.useState(null),[w,z]=E.useState(""),[_,P]=E.useState(null),[T,W]=E.useState(0),[A,J]=E.useState(null),[Pe,de]=E.useState(!1),me=E.useRef(null),Ct=E.useRef(0),[ne,ye]=E.useState(Tg),[O,F]=E.useState(!1),[B,Q]=E.useState(""),[re,Te]=E.useState(!1),[Fe,Kt]=E.useState(""),[we,Xe]=E.useState(""),[ke,_n]=E.useState(null),[_t,un]=E.useState(!1),[kt,ot]=E.useState(null),[Ri,lr]=E.useState(!1),[ar,to]=E.useState(""),no=E.useRef(null),Z=(d,k=3e3)=>{to(d),clearTimeout(no.current),no.current=setTimeout(()=>to(""),k)},ro=async d=>{try{if(await U(bl))return d;if(d.some(C=>C.type==="future"))return await I(bl,!0),d;const k=[...d,{id:Ig,type:"future",name:"未来日記",emoji:"🔮",theme:Ca[3]||void 0,createdAt:Date.now(),lastAt:0,preview:""}];return await I(Re,k),await I(bl,!0),k}catch{return d}},dn=async d=>{try{if(await U(xl))return d;if(d.some(C=>C.type==="album"))return await I(xl,!0),d;const k=[...d,{id:Rg,type:"album",name:"絵日記",emoji:"📔",createdAt:Date.now(),lastAt:0,preview:""}];return await I(Re,k),await I(xl,!0),k}catch{return d}},oo=async d=>{try{if(await U(ml))return d;if(d.some(C=>C.type==="smart"))return await I(ml,!0),d;const k=[...d,{id:Og,type:"smart",name:"スマートノート",emoji:"📝",createdAt:Date.now(),lastAt:0,preview:""}];return await I(Re,k),await I(ml,!0),k}catch{return d}},sr=async d=>{try{if(await U(yl))return d;if(d.some(C=>C.type==="words"))return await I(yl,!0),d;const k=[...d,{id:Mg,type:"words",name:"名言",emoji:"💎",createdAt:Date.now(),lastAt:0,preview:""}];return await I(Re,k),await I(yl,!0),k}catch{return d}},io=async d=>{try{if(await U(wl))return d;if(d.some(C=>C.type==="praise"))return await I(wl,!0),d;const k=[...d,{id:Ag,type:"praise",name:"褒め褒め",emoji:"👑",createdAt:Date.now(),lastAt:0,preview:""}];return await I(Re,k),await I(wl,!0),k}catch{return d}},Oi=async d=>{try{if(await U(vl))return d;if(d.some(C=>C.type==="now"))return await I(vl,!0),d;const k=[{id:$g,type:"now",name:"なう",emoji:"🕐",createdAt:Date.now(),lastAt:0,preview:""},...d];return await I(Re,k),await I(vl,!0),k}catch{return d}};E.useEffect(()=>{(async()=>{try{const d=await Oi(await io(await sr(await oo(await dn(await ro(await Bg())))))),k=await U(Fc);k&&P(k);const C=new URLSearchParams(location.search).get("open"),N=C&&d.find($=>$.id===C)||k&&d.find($=>$.id===k)||d.find($=>$.type==="now"&&!$.hidden)||d.find($=>$.id===fe);N&&r({screen:"room",roomId:N.id}),t(d);const[K,V,D]=await Promise.all([U(Ko),U(Xr),U(kl)]);K&&K.dateKey===Ue()&&x(K.text),Array.isArray(V)&&V.length&&ye(V),_n(D||{})}catch{Z("データの読み込みに失敗しました"),t([])}})()},[]),E.useEffect(()=>{if(n.screen!=="home")return;let d=!0;return(async()=>{try{let k=await U(Me(fe));k=typeof k=="string"?JSON.parse(k):k||{};const C=k[Ue()];if(!d)return;C&&typeof C.text=="string"&&C.text.trim()?J({written:!0,preview:C.text.split(`
`)[0].slice(0,34)}):J({written:!1})}catch{d&&J({written:!1})}})(),()=>{d=!1}},[n.screen,T]),E.useEffect(()=>{n.screen==="home"&&me.current&&(me.current.scrollTop=Ct.current)},[n.screen]);const lo=d=>{t(k=>{let C=k;return k.find(N=>N.id===fe)||(C=[...k,{id:fe,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),C=C.map(N=>N.id===fe?{...N,...d!=null?{preview:d}:{},lastAt:Date.now()}:N),I(Re,C),C}),W(k=>k+1)},Mi=async({text:d,time:k,dateKey:C})=>{try{const N=gi(fe),K=await U(N)||{},V=(K[C]||[]).slice();V.some(D=>D.text===d&&D.time===k)||V.push({text:d,time:k}),await I(N,{...K,[C]:V}),lo(`🩷 できたこと ☑ ${d}`.slice(0,40))}catch{Z("できたことの記録に失敗しました")}},Ai=async({text:d,time:k,dateKey:C})=>{try{const N=gi(fe),K=await U(N)||{},V=(K[C]||[]).filter($=>!($.text===d&&$.time===k)),D={...K};V.length?D[C]=V:delete D[C],await I(N,D),lo(null)}catch{}},Dt=d=>{t(d),I(Re,d).catch(()=>Z("保存に失敗しました"))},it=(d,k)=>{t(C=>{const N=C.map(K=>K.id===d?{...K,...k}:K);return I(Re,N).catch(()=>Z("保存に失敗しました")),N})},Lt=async(d,k,C)=>{try{const N=(e||[]).find(lt=>lt.id===k);if(!N)return{ok:!1};const K=Me(k),V=await U(K)||{},D=Array.isArray(V.todos)?V.todos:[],$=(C||"").trim(),oe=$?(N.places||[]).find(lt=>(lt.name||"").trim()===$):null,Be={...d,placeId:oe?oe.id:null},Ke=[...D,Be];await I(K,{...V,todos:Ke});const fn=Ke.filter(lt=>!lt.done&&!lt.deferred).length;return it(k,{preview:`${Be.done?"☑":"☐"} ${(Be.text||"").split(`
`)[0]}`.slice(0,40),todoOpen:fn,lastAt:Date.now()}),{ok:!0,placeDropped:!!$&&!oe,placeKept:!!oe}}catch{return{ok:!1}}},S=async d=>{const k=d.trim();if(!k)return;const C=Ue();try{await I(Ko,{dateKey:C,text:k}),x(k);const N=Me(fe);let K=await U(N);K=K&&typeof K=="object"?K:{};const V=K[C],D=ex(V?V.text:"",k);K={...K,[C]:{text:D,time:V?V.time:Sf()}},await I(N,K);const $=Object.keys(K).sort(),oe=$[$.length-1],Be=K[oe].text.split(`
`)[0].slice(0,40);t(Ke=>{let fn=Ke;return Ke.find(lt=>lt.id===fe)||(fn=[...Ke,{id:fe,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),fn=fn.map(lt=>lt.id===fe?{...lt,preview:Be,lastAt:Date.now()}:lt),I(Re,fn),fn}),W(Ke=>Ke+1),Z("今日のコマをピン留めしたよ🩷")}catch{Z("宣言の保存に失敗しました")}},R=d=>{ye(d),I(Xr,d).catch(()=>Z("マークの保存に失敗しました"))},X=()=>{const d=B.trim();if(d){if(ne.includes(d)){Q("");return}R([...ne,d]),Q("")}},Se=d=>R(ne.filter(k=>k!==d));E.useEffect(()=>{!o||!e||(async()=>{const d={};for(const k of e)d[k.id]=await U(Me(k.id));g(d)})()},[o,e]);const ao=e||[],$i=E.useMemo(()=>{if(!l||!s||!e)return null;const d=l.toLowerCase(),k=[];for(const C of ao){const N=s[C.id],K=[];if(C.type==="diary"){const V=N&&typeof N=="object"?N:{};for(const D of Object.keys(V).sort())(V[D].text+pe(D)).toLowerCase().includes(d)&&K.push({snippet:V[D].text.split(`
`)[0],date:pe(D)})}else if(C.type==="todo"){const V=N&&Array.isArray(N.todos)?N.todos:[];for(const D of V)(D.text+pe(D.dateKey)).toLowerCase().includes(d)&&K.push({snippet:`${D.done?"☑":"☐"} ${D.text.split(`
`)[0]}`,date:pe(D.dateKey)})}else if(C.type==="darelog"){const V=N&&Array.isArray(N.records)?N.records:[],D=$=>{var oe,Be;return((Be=(oe=C.members)==null?void 0:oe.find(Ke=>Ke.id===$))==null?void 0:Be.name)||""};for(const $ of C.members||[])($.memberMemo||"").toLowerCase().includes(d)&&K.push({snippet:`${$.name}: ${$.memberMemo}`,date:"メンバーメモ"});for(const $ of V){const oe=D($.memberId);(oe+($.memo||"")+pe($.dateKey)).toLowerCase().includes(d)&&K.push({snippet:`${oe}${$.memo?`: ${$.memo}`:""}`,date:pe($.dateKey)})}}else if(C.type==="expense"){const V=N&&Array.isArray(N.expenses)?N.expenses:[],D=$=>{var oe,Be;return((Be=(oe=C.categories)==null?void 0:oe.find(Ke=>Ke.id===$))==null?void 0:Be.name)||""};for(const $ of V)(D($.categoryId)+($.memo||"")+String($.amount)+pe($.dateKey)).toLowerCase().includes(d)&&K.push({snippet:`${D($.categoryId)} ¥${$.amount}${$.memo?" "+$.memo:""}`,date:pe($.dateKey)})}else if(C.type==="words"||C.type==="praise"){const V=N&&Array.isArray(N.words)?N.words:[];for(const D of V)(D.text+" "+(D.from||"")).toLowerCase().includes(d)&&K.push({snippet:D.from?`${D.text} — ${D.from}`:D.text,date:""})}else if(C.type==="smart"){const V=N&&Array.isArray(N.items)?N.items:[];for(const D of V)(D.text+pe(D.dateKey)).toLowerCase().includes(d)&&K.push({snippet:`${D.score?D.score+"点 ":""}${D.text}`,date:pe(D.dateKey)})}else{const V=N&&Array.isArray(N.messages)?N.messages:[],D=$=>{var oe,Be;return((Be=(oe=C.members)==null?void 0:oe.find(Ke=>Ke.id===$))==null?void 0:Be.name)||""};for(const $ of V)(($.text+pe($.dateKey)).toLowerCase().includes(d)||D($.memberId).toLowerCase().includes(d))&&K.push({snippet:`${D($.memberId)||"？"}: ${$.text.split(`
`)[0]}`,date:pe($.dateKey)})}K.length===0&&C.name.toLowerCase().includes(d)&&K.push({snippet:C.preview||"",date:""}),K.length&&k.push({room:C,hits:K})}return k},[l,s,ao,e]),Nf=d=>l?d.split(new RegExp(`(${Gg(l)})`,"gi")).map((C,N)=>C.toLowerCase()===l.toLowerCase()?c.jsx("mark",{className:"hl",children:C},N):C):d,Cf=()=>{const d=u.name.trim();if(!d){Z("ルーム名を入れてね");return}const k={diary:"💗",todo:"✅",darelog:"🌗",expense:"💰",challenge:"🏁",smart:"📝",words:"💎",praise:"👑",talk:"🩷"}[u.type]||"🩷",C=u.type==="darelog"?[{id:Ge(),name:"ブルー",color:"#d4f0ff",icon:{type:"emoji",value:"🌊"},side:"left"},{id:Ge(),name:"グリーン",color:"#d9ffe3",icon:{type:"emoji",value:"🌿"},side:"left"},{id:Ge(),name:"ピンク",color:"#ffd9ec",icon:{type:"emoji",value:"🌸"},side:"right"}]:[],N=u.type==="expense"?[{id:Ge(),name:"AI費用",emoji:"🤖",color:"#2196F3"},{id:Ge(),name:"ピンクグッズ",emoji:"🎀",color:"#E91E63"},{id:Ge(),name:"ネイル",emoji:"💅",color:"#9C27B0"},{id:Ge(),name:"旅費交通費",emoji:"🚃",color:"#00A5B5",transit:!0}]:void 0,K={id:Ge(),type:u.type,name:d,emoji:u.emoji.trim()||k,theme:u.theme||br,members:C,createdAt:Date.now(),lastAt:0,preview:"",...u.type==="todo"?{shopping:!!u.shopping,numbering:!!u.numbering,noDiary:!!u.noDiary}:{},...N?{categories:N,subscriptions:[],subsPosted:{},transitSeeded:!0,stations:[],fares:[],defaultFromId:null,roundTripDefault:!1,incomeSeeded:!0,incomeCategories:[{id:Ge(),name:"売上",emoji:"💰",color:"#2E9E5B"},{id:Ge(),name:"返金",emoji:"↩️",color:"#3BA7A0"},{id:Ge(),name:"その他",emoji:"✨",color:"#7FB800"}]}:{}};Dt([...e,K]),h(null),r({screen:"room",roomId:K.id})},_f=()=>{const d=u.name.trim();if(!d){Z("ルーム名を入れてね");return}it(u.roomId,{name:d,emoji:u.emoji.trim()||"💗",theme:u.theme||br,hidden:!!u.hidden,...u.type==="todo"?{shopping:!!u.shopping,numbering:!!u.numbering,noDiary:!!u.noDiary}:{}});const k=u.start?u.roomId:_===u.roomId?null:_;k!==_&&(P(k),I(Fc,k).catch(()=>Z("起動ルームの保存に失敗しました"))),h(null)},Df=d=>{h({mode:"edit",roomId:d.id,name:d.name,emoji:d.emoji,type:d.type,shopping:!!d.shopping,numbering:!!d.numbering,noDiary:!!d.noDiary,theme:d.theme||br,hidden:!!d.hidden,start:_===d.id}),y(!1)},Lf=async d=>{try{const k=await U(Me(d));k&&await I(Pg(d),k),Dt(e.filter(C=>C.id!==d)),h(null),b(null),Z("ルームを削除しました")}catch{Z("削除に失敗しました")}},Pf=()=>{const d=e.find(k=>k.id===u.roomId);b({message:`ルーム「${(d==null?void 0:d.name)||""}」を削除しますか？
中の記録もすべて消えます。`,onConfirm:()=>Lf(u.roomId)})},Tf=async()=>{Xe(""),lr(!1);try{const d=await Wc();Kt(JSON.stringify(d,null,2))}catch{Kt("")}Te(!0)},Ii=async()=>{const d={...ke||{},lastDateKey:Ue(),lastAt:Date.now()};_n(d);try{await I(kl,d)}catch{}},zs=d=>{const k=new Blob([d],{type:"application/json;charset=utf-8"}),C=URL.createObjectURL(k),N=document.createElement("a");N.href=C,N.download=zl,document.body.appendChild(N),N.click(),N.remove(),setTimeout(()=>URL.revokeObjectURL(C),3e3)},Fi=async()=>{if(!_t){un(!0);try{let d;try{d=JSON.stringify(await Wc(),null,2)}catch{Z("バックアップの作成に失敗しました 🥺");return}try{const k=new File([d],zl,{type:"application/json"});if(navigator.canShare&&navigator.canShare({files:[k]})){await navigator.share({files:[k]}),await Ii(),Z("バックアップを保存したよ💗");return}}catch(k){if(k&&(k.name==="AbortError"||k.name==="NotAllowedError"))return}try{zs(d),await Ii(),Z("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{Z("保存できない環境みたい。コピーを使ってね")}}finally{un(!1)}}},Rf=()=>{try{zs(Fe),Ii(),Z("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{Z("保存できない環境みたい。コピーを使ってね")}},so=Ue(),Dn=(()=>{if(!(ke!=null&&ke.lastDateKey))return null;const d=je(so)-je(ke.lastDateKey);return Math.max(0,Math.round(d/864e5))})(),Bi=Dn===null||Dn>=7,Of=!!ke&&ke.lastDateKey!==so&&ke.dismissedDateKey!==so,Mf=async()=>{const d={...ke||{},dismissedDateKey:so};_n(d);try{await I(kl,d)}catch{}},Af=async()=>{try{await navigator.clipboard.writeText(Fe),lr(!0),setTimeout(()=>lr(!1),2e3)}catch{Z("コピーできませんでした。全選択して手動でコピーしてね")}},$f=d=>{var N;const k=(N=d.target.files)==null?void 0:N[0];if(!k)return;const C=new FileReader;C.onload=()=>Xe(String(C.result||"")),C.onerror=()=>Z("ファイルを読めませんでした"),C.readAsText(k),d.target.value=""},If=()=>{let d;try{d=JSON.parse(we)}catch{Z("JSONとして読めませんでした。ファイルが壊れているかも 🥺",4e3);return}const k=nx(d);if(k){Z(k,4500);return}ot({obj:d,counts:rx(d),exportedAt:d.exportedAt||"",version:d.version})},Ff=async()=>{const d=kt==null?void 0:kt.obj;if(d)try{const k=await ix(d);t(k.rooms),d.declaration&&d.declaration.dateKey===Ue()&&!L&&(await I(Ko,d.declaration),x(d.declaration.text)),W(C=>C+1),ot(null),Te(!1),Xe(""),Z(`復元完了💗 ${k.addedRooms}ルーム / ${k.addedItems}件を追加`)}catch{ot(null),Z("復元中にエラーが出ました。ファイルが壊れているかも 🥺",4e3)}};if(!e)return c.jsx("div",{className:"app",children:c.jsx("style",{children:Hc})});const Bf=c.jsxs("div",{className:"pin",onClick:()=>{z(L),m(L?"view":"edit")},role:"button",children:[c.jsx("span",{className:"pin-ic",children:L?"📌":"🩷"}),L?c.jsx("span",{className:"pin-txt",children:L}):c.jsx("span",{className:"pin-ph",children:"今日のコマをえらぶ🩷"})]});let co;if(n.screen==="room"){const d=e.find(k=>k.id===n.roomId);if(!d)co=null,setTimeout(()=>r({screen:"home"}),0);else{const k={room:d,onBack:()=>r({screen:"home"}),onMeta:N=>it(d.id,N),initialQuery:n.q,showToast:Z,pinned:Bf},C=d.type==="diary"?c.jsx(Sx,{...k,syncSignal:T,marks:ne,onEditMarks:()=>F(!0),nowRoomIds:e.filter(N=>N.type==="now").map(N=>N.id)},d.id):d.type==="now"?c.jsx(vx,{...k,onOpenDiary:e.some(N=>N.id===fe)?()=>r({screen:"room",roomId:fe}):void 0},d.id):d.type==="todo"?c.jsx(jx,{...k,onTodoComplete:Mi,onTodoUncomplete:Ai,onRoomChange:N=>it(d.id,N),todoRooms:e.filter(N=>N.type==="todo"&&N.id!==d.id),onMoveTodo:Lt},d.id):d.type==="darelog"?c.jsx(Ex,{...k,onRoomChange:N=>it(d.id,N)},d.id):d.type==="expense"?c.jsx(Nx,{...k,onRoomChange:N=>it(d.id,N)},d.id):d.type==="challenge"?c.jsx(Cx,{...k},d.id):d.type==="future"?c.jsx(_x,{...k},d.id):d.type==="album"?c.jsx(Dx,{...k},d.id):d.type==="smart"?c.jsx(Lx,{...k},d.id):d.type==="words"||d.type==="praise"?c.jsx(Px,{...k},d.id):c.jsx(zx,{...k,onRoomChange:N=>it(d.id,N)},d.id);co=c.jsx(kx,{onBack:()=>r({screen:"home"}),children:c.jsx(E.Suspense,{fallback:c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"hd hd-loading"}),c.jsx("div",{className:"chat"})]}),children:C})},d.id)}}else co=c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"hd hd-home",children:[c.jsx("div",{className:"app-brand",children:c.jsx("div",{className:"app-title",children:"💖Nachumin Lifelog💖"})}),c.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"バックアップ",onClick:Tf,children:"💾"}),c.jsx("button",{className:"icon-btn","aria-label":"新しいルーム",onClick:()=>h({mode:"new",name:"",emoji:"",type:"talk"}),children:"➕"}),c.jsx("button",{className:"icon-btn","aria-label":"ぜんぶ検索",onClick:()=>{i(!o),a("")},children:o?"✕":"🔍"})]}),Of&&c.jsxs("div",{className:"bk-banner"+(Bi?" stale":""),children:[c.jsxs("button",{className:"bk-main",onClick:Fi,disabled:_t,children:[c.jsx("span",{className:"bk-ttl",children:"💾 今日のバックアップ🩷"}),c.jsx("span",{className:"bk-sub",children:Dn===null?"まだ一度も保存していません":Bi?`最後の保存から ${Dn}日 たっています`:"タップで1ファイルに書き出し"})]}),c.jsx("button",{className:"bk-x","aria-label":"閉じる",onClick:Mf,children:"✕"})]}),o&&c.jsx("div",{className:"search-row",children:c.jsx("input",{autoFocus:!0,placeholder:"ぜんぶのルームから検索（ことば・話者・日付）",value:l,onChange:d=>a(d.target.value)})}),$i?c.jsx("div",{className:"rooms",children:$i.length===0?c.jsx("div",{className:"empty",children:"みつかりませんでした 🥺"}):$i.map(({room:d,hits:k})=>c.jsxs("div",{className:"room-row",onClick:()=>r({screen:"room",roomId:d.id,q:l}),children:[c.jsx("div",{className:"r-ic",children:d.emoji}),c.jsxs("div",{className:"r-main",children:[c.jsx("div",{className:"r-name",children:d.name}),c.jsx("div",{className:"r-prev",children:Nf(k[0].snippet)})]}),c.jsxs("div",{className:"r-side",children:[c.jsxs("span",{className:"r-badge",children:[k.length,"件"]}),k[0].date&&c.jsx("span",{className:"r-date",children:k[0].date})]})]},d.id))}):c.jsx("div",{className:"home-scroll",ref:me,onScroll:d=>{Ct.current=d.target.scrollTop},children:(()=>{const d=e.find(D=>D.id===fe),k=ao.filter(D=>D.id!==fe&&!D.hidden),C=ao.filter(D=>D.id!==fe&&D.hidden),N=je(Ue()),K=A?A.written?A.preview:`${N.getMonth()+1}/${N.getDate()}・きょうの分はまだ`:"…",V=D=>{const $=[...D];Dt(e.map(oe=>oe.id===fe||oe.hidden?oe:$.shift()))};return c.jsxs(c.Fragment,{children:[d&&c.jsxs("button",{className:"diary-card",onClick:()=>r({screen:"room",roomId:d.id}),children:[c.jsx("span",{className:"dc-ic",children:d.emoji}),c.jsxs("span",{className:"dc-main",children:[c.jsx("span",{className:"dc-name",children:"DIARY"}),c.jsx("span",{className:"dc-sub",children:K})]}),c.jsx("span",{className:"dc-arw",children:"›"})]}),c.jsx(bx,{items:k,keyOf:D=>D.id,onReorder:V,onLongPress:({item:D})=>{D&&Df(D)},footer:c.jsx("div",{className:"ig-cell ig-add",children:c.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>h({mode:"new",name:"",emoji:"",type:"talk"}),onKeyDown:D=>D.key==="Enter"&&h({mode:"new",name:"",emoji:"",type:"talk"}),children:[c.jsx("span",{className:"ig-btn",children:"＋"}),c.jsx("span",{className:"ig-name",children:"つくる"})]})}),renderItem:D=>{const $=D.type==="todo"&&D.todoOpen>0?D.todoOpen:null;return c.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>r({screen:"room",roomId:D.id}),onKeyDown:oe=>oe.key==="Enter"&&r({screen:"room",roomId:D.id}),children:[c.jsxs("span",{className:"ig-btn",style:Vc(D.theme),children:[D.emoji,$!=null&&c.jsx("span",{className:"ig-badge",children:$>99?"99+":$})]}),c.jsx("span",{className:"ig-name",children:D.name})]})}}),C.length>0&&c.jsx("button",{className:"hidden-entry",onClick:()=>de(!0),children:"🙈 非表示のルーム"}),Pe&&c.jsx("div",{className:"overlay",onClick:()=>de(!1),children:c.jsxs("div",{className:"panel",onClick:D=>D.stopPropagation(),children:[c.jsx("h3",{children:"🙈 非表示のルーム"}),c.jsx("p",{className:"panel-note",children:"一覧に出していないルームです。中の記録は消えていません。「戻す」でまた表示できます。"}),c.jsx("div",{className:"move-list",children:C.map(D=>c.jsxs("div",{className:"move-item as-row",children:[c.jsx("span",{className:"move-ic",children:D.emoji}),c.jsx("span",{className:"move-name",children:D.name}),c.jsx("button",{className:"unhide-btn",onClick:()=>it(D.id,{hidden:!1}),children:"戻す"})]},D.id))}),c.jsx("div",{className:"panel-btns",children:c.jsx("button",{className:"p-close",onClick:()=>de(!1),children:"閉じる"})})]})})]})})()})]});return c.jsxs("div",{className:"app",children:[c.jsx("style",{children:Hc}),co,u&&c.jsx("div",{className:"overlay",onClick:()=>{h(null),y(!1)},children:c.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[c.jsx("h3",{children:u.mode==="new"?"➕ 新しいルーム":"⚙️ ルーム設定"}),c.jsx("div",{className:"f-label",children:"ルーム名"}),c.jsx("input",{className:"f-input",autoFocus:u.mode==="new",placeholder:"ハートるんず",value:u.name,onChange:d=>h(k=>({...k,name:d.target.value}))}),c.jsx("div",{className:"f-label",children:"アイコン（タップで選ぶ）"}),c.jsx("div",{className:"emoji-picks",children:Tx.map(d=>c.jsx("button",{className:"emoji-pick"+(u.emoji===d?" on":""),onClick:()=>h(k=>({...k,emoji:d})),children:d},d))}),c.jsx("input",{className:"f-input",style:{width:130,textAlign:"center",marginTop:4},maxLength:8,placeholder:"または自由入力",value:u.emoji,onChange:d=>h(k=>({...k,emoji:d.target.value}))}),c.jsx("div",{className:"f-label",children:"テーマカラー"}),c.jsx("div",{className:"theme-swatches",children:Ca.map(d=>{const k=(u.theme||br)===d;return c.jsx("button",{className:"theme-sw"+(k?" on":""),style:Vc(d),"aria-label":d,onClick:()=>h(C=>({...C,theme:d}))},d)})}),c.jsxs("div",{className:"f-label",children:["タイプ",u.mode==="edit"?"（変更できません）":""]}),c.jsxs("div",{className:"type-row",children:[c.jsxs("button",{className:"type-chip"+(u.type==="diary"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"diary"})),children:["📖 日記",c.jsx("small",{children:"1日=1吹き出し"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="talk"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"talk"})),children:["💬 トーク",c.jsx("small",{children:"話者ごと"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="todo"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"todo"})),children:["✅ TODO",c.jsx("small",{children:"やること"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="darelog"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"darelog"})),children:["🌗 だれログ",c.jsx("small",{children:"朝昼夜の記録"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="expense"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"expense"})),children:["💰 経費",c.jsx("small",{children:"支出を記録"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="challenge"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"challenge"})),children:["🏁 チャレンジ",c.jsx("small",{children:"100個の目標"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="future"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"future"})),children:["🔮 未来日記",c.jsx("small",{children:"1日1篇とどく"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="now"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"now"})),children:["🕐 なう",c.jsx("small",{children:"いまを一言"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="album"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"album"})),children:["📔 絵日記",c.jsx("small",{children:"書いた日記の画像"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="smart"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"smart"})),children:["📝 スマートノート",c.jsx("small",{children:"やったこと5個に点数"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="words"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"words"})),children:["💎 名言",c.jsx("small",{children:"響いた言葉を一覧で"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="praise"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"praise"})),children:["👑 褒め褒め",c.jsx("small",{children:"褒められた言葉を一覧で"})]})]}),u.mode==="edit"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"アプリを開いたとき"}),c.jsxs("button",{className:"shop-toggle"+(u.start?" on":""),onClick:()=>h(d=>({...d,start:!d.start})),children:[c.jsx("span",{className:"shop-box",children:u.start?"✓":""}),"🚀 開いたらこのルームを出す"]})]}),u.mode==="edit"&&u.roomId!==fe&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"一覧での表示"}),c.jsxs("button",{className:"shop-toggle"+(u.hidden?" on":""),onClick:()=>h(d=>({...d,hidden:!d.hidden})),children:[c.jsx("span",{className:"shop-box",children:u.hidden?"✓":""}),"🙈 一覧に表示しない（記録は消えません）"]})]}),u.type==="todo"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"用途"}),c.jsxs("button",{className:"shop-toggle"+(u.shopping?" on":""),onClick:()=>h(d=>({...d,shopping:!d.shopping})),children:[c.jsx("span",{className:"shop-box",children:u.shopping?"✓":""}),"🛒 買い物リストとして使う（よく買うものクイック追加）"]}),c.jsxs("button",{className:"shop-toggle"+(u.numbering?" on":""),onClick:()=>h(d=>({...d,numbering:!d.numbering})),children:[c.jsx("span",{className:"shop-box",children:u.numbering?"✓":""}),"🔢 日ごとに番号をつける（1,2,3…／日付が変わると1から）"]}),c.jsxs("button",{className:"shop-toggle"+(u.noDiary?" on":""),onClick:()=>h(d=>({...d,noDiary:!d.noDiary})),children:[c.jsx("span",{className:"shop-box",children:u.noDiary?"✓":""}),"📓 完了しても日記の「できたこと」に入れない"]})]}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:u.mode==="new"?Cf:_f,children:u.mode==="new"?"つくる":"保存"}),u.mode==="edit"&&c.jsx("button",{className:"p-del",onClick:Pf,children:"削除"}),c.jsx("button",{className:"p-close",onClick:()=>{h(null),y(!1)},children:"閉じる"})]})]})}),re&&c.jsx("div",{className:"overlay",onClick:()=>Te(!1),children:c.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[c.jsx("h3",{children:"💾 まるごとバックアップ"}),c.jsx("p",{className:"panel-note",children:"全ルーム・全データ（日記 / TODO / だれログ / 経費 / 習慣 / 各種設定）を まるごと1ファイルに保存します。端末が変わっても元どおり復元できます。"}),e.some(d=>d.type==="album")&&c.jsxs("p",{className:"panel-note bk-warn",children:["📔 絵日記の",c.jsx("b",{children:"画像だけは入りません"}),"（数百MBになってしまうため）。 元の画像は写真アプリに残しておいてね。日付の記録は入ります。"]}),c.jsxs("div",{className:"bk-last"+(Bi?" stale":""),children:[c.jsx("span",{className:"bk-last-l",children:"最後にバックアップした日"}),c.jsx("span",{className:"bk-last-v",children:ke!=null&&ke.lastDateKey?`${pe(ke.lastDateKey)}${Dn===0?"（今日）":`（${Dn}日前）`}`:"まだありません"})]}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:Fi,disabled:_t,children:"💾 1タップで書き出し"}),c.jsx("button",{className:"p-dl",onClick:Rf,children:"ダウンロード"}),c.jsx("button",{className:"p-dl",onClick:Af,children:Ri?"コピーしたよ💗":"コピー"})]}),c.jsxs("p",{className:"panel-note",children:["ファイル名は毎回 ",c.jsx("b",{children:zl})," で固定です。ただし 「ファイルに保存」は同じ名前があると ",c.jsx("b",{children:"iOS が勝手に番号を付けて"})," 別ファイルにします。 毎回きっちり上書きしたいときは、共有シートで 「ファイルに保存」ではなく ",c.jsx("b",{children:"ショートカット"}),"（上書き保存する用に作ったもの）を選んでね。"]}),c.jsx("div",{className:"f-label",style:{marginTop:6},children:"復元する（バックアップから読み込み）"}),c.jsx("p",{className:"panel-note",children:"既存のデータは消さず、足りない分だけ追加します（安全マージ）"}),c.jsxs("label",{className:"upload-btn",style:{alignSelf:"flex-start"},children:["📂 バックアップファイルを選ぶ",c.jsx("input",{type:"file",accept:".json,application/json,text/plain",onChange:$f})]}),c.jsx("textarea",{placeholder:"または、コピーしたバックアップをここに貼り付け",value:we,onChange:d=>Xe(d.target.value),style:{minHeight:120}}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",disabled:!we.trim(),onClick:If,children:"復元する"}),c.jsx("button",{className:"p-close",onClick:()=>{Te(!1),Xe("")},children:"閉じる"})]})]})}),kt&&c.jsx("div",{className:"overlay bk-ask-over",onClick:()=>ot(null),children:c.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[c.jsx("h3",{children:"⚠️ 復元まえの確認"}),c.jsxs("div",{className:"bk-ask-box",children:[c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"ルーム"}),c.jsx("b",{children:kt.counts.rooms})]}),c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"記録の件数"}),c.jsx("b",{children:kt.counts.items})]}),kt.exportedAt&&c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"書き出し日時"}),c.jsx("b",{children:new Date(kt.exportedAt).toLocaleString("ja-JP")})]})]}),c.jsxs("p",{className:"panel-note",children:["今のデータは消えません（足りない分を追加する安全マージ）。 それでも念のため、",c.jsx("b",{children:"先に今のデータをバックアップ"}),"しておくのがおすすめです💗"]}),c.jsx("button",{className:"bk-first",onClick:Fi,disabled:_t,children:"💾 先に今のデータをバックアップする"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:Ff,children:"この内容で復元する"}),c.jsx("button",{className:"p-close",onClick:()=>ot(null),children:"キャンセル"})]})]})}),f&&c.jsx("div",{className:"overlay",onClick:()=>m(null),children:c.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[c.jsx("h3",{children:"🩷 今日のコマ"}),f==="view"?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"decl-full",children:L}),c.jsx("p",{className:"panel-note",children:"その日1日だけピン留め。日記にも記録されています🎬"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:()=>{z(L),m("edit")},children:"書きなおす"}),c.jsx("button",{className:"p-close",onClick:()=>m(null),children:"閉じる"})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("textarea",{autoFocus:!0,style:{minHeight:120},placeholder:"今日は愛全開の私でいる！",value:w,onChange:d=>z(d.target.value)}),c.jsx("p",{className:"panel-note",children:"その日1日だけ表示。決定すると今日の日記の先頭に🎬として残ります"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",disabled:!w.trim(),onClick:()=>{S(w),m(null)},children:"決定"}),c.jsx("button",{className:"p-close",onClick:()=>m(null),children:"閉じる"})]})]})]})}),O&&c.jsx("div",{className:"overlay",onClick:()=>F(!1),children:c.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[c.jsx("h3",{children:"⚙︎ 箇条書きマーク"}),c.jsx("p",{className:"panel-note",children:"日記の入力欄に出るマーク。タップで削除、下から追加できます。"}),c.jsxs("div",{className:"mark-manage",children:[ne.map(d=>c.jsxs("span",{className:"mark-item",children:[d,c.jsx("button",{onClick:()=>Se(d),"aria-label":"削除",children:"✕"})]},d)),ne.length===0&&c.jsx("p",{className:"panel-note",children:"マークがありません。追加してね"})]}),c.jsxs("div",{className:"in-row",style:{marginTop:4},children:[c.jsx("input",{className:"f-input",maxLength:4,placeholder:"記号や絵文字（例: ❤︎）",value:B,onChange:d=>Q(d.target.value),onKeyDown:d=>d.key==="Enter"&&X()}),c.jsx("button",{className:"p-copy",style:{flex:"0 0 auto",padding:"8px 16px",borderRadius:999},disabled:!B.trim(),onClick:X,children:"追加"})]}),c.jsx("div",{className:"panel-btns",children:c.jsx("button",{className:"p-close",onClick:()=>F(!1),children:"閉じる"})})]})}),v&&c.jsx(jf,{message:v.message,onConfirm:v.onConfirm,onCancel:()=>b(null)}),ar&&c.jsx("div",{className:"toast",children:ar})]})}let qc=!1,eu=!!(navigator.serviceWorker&&navigator.serviceWorker.controller);navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!eu){eu=!0;return}qc||(qc=!0,window.location.reload())});xg({immediate:!0,onRegisteredSW(e,t){t&&(t.update(),setInterval(()=>t.update(),60*60*1e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&t.update()}))}});Fg();hf(document.getElementById("root")).render(c.jsx(E.StrictMode,{children:c.jsx(Rx,{})}));export{Gx as $,mt as A,kf as B,Bc as C,Zg as D,cx as E,Wg as F,jf as G,Sf as H,Wx as I,Ux as J,Vx as K,Xc as L,am as M,Kc as N,Gg as O,Yc as P,ax as Q,qx as R,em as S,cm as T,sm as U,Qx as V,Ix as W,Jx as X,Zx as Y,Jg as Z,Xx as _,im as a,lm as a0,Hx as a1,Yx as a2,Bx as a3,Kx as a4,Fx as a5,br as a6,Ca as a7,Ea as a8,rm as a9,nm as aa,$x as ab,Ox as ac,Mx as ad,Ax as ae,xx as af,fx as ag,om as b,Na as c,Xg as d,xi as e,Me as f,U as g,gi as h,tm as i,c as j,pe as k,Uo as l,Ge as m,yf as n,mf as o,tt as p,Wo as q,E as r,I as s,Ue as t,ux as u,ja as v,wf as w,Uc as x,zf as y,je as z};
