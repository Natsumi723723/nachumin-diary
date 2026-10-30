const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DiaryRoom-DRmjoMlm.js","./InlineEdit-4Djc6aAD.js","./TodoRoom-BJ63R9BA.js","./DarelogRoom-Bc7uqESF.js","./TalkRoom-CC1PnBTR.js","./AlbumRoom-BTQO62j7.js","./imageUtil-ts7kJX-E.js","./WordsRoom-Bxfp_PRy.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Zc={exports:{}},mi={},qc={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),Ff=Symbol.for("react.portal"),Bf=Symbol.for("react.fragment"),Kf=Symbol.for("react.strict_mode"),Uf=Symbol.for("react.profiler"),Wf=Symbol.for("react.provider"),Vf=Symbol.for("react.context"),Hf=Symbol.for("react.forward_ref"),Yf=Symbol.for("react.suspense"),Qf=Symbol.for("react.memo"),Xf=Symbol.for("react.lazy"),Ss=Symbol.iterator;function Gf(e){return e===null||typeof e!="object"?null:(e=Ss&&e[Ss]||e["@@iterator"],typeof e=="function"?e:null)}var eu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tu=Object.assign,nu={};function or(e,t,n){this.props=e,this.context=t,this.refs=nu,this.updater=n||eu}or.prototype.isReactComponent={};or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ru(){}ru.prototype=or.prototype;function Na(e,t,n){this.props=e,this.context=t,this.refs=nu,this.updater=n||eu}var Ca=Na.prototype=new ru;Ca.constructor=Na;tu(Ca,or.prototype);Ca.isPureReactComponent=!0;var zs=Array.isArray,ou=Object.prototype.hasOwnProperty,_a={current:null},iu={key:!0,ref:!0,__self:!0,__source:!0};function lu(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ou.call(t,r)&&!iu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),g=0;g<a;g++)s[g]=arguments[g+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Xr,type:e,key:i,ref:l,props:o,_owner:_a.current}}function Jf(e,t){return{$$typeof:Xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Da(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function Zf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var js=/\/+/g;function Bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zf(""+e.key):t.toString(36)}function _o(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Xr:case Ff:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Bi(l,0):r,zs(o)?(n="",e!=null&&(n=e.replace(js,"$&/")+"/"),_o(o,t,n,"",function(g){return g})):o!=null&&(Da(o)&&(o=Jf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(js,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",zs(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Bi(i,a);l+=_o(i,t,n,s,o)}else if(s=Gf(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Bi(i,a++),l+=_o(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function co(e,t,n){if(e==null)return e;var r=[],o=0;return _o(e,r,"","",function(i){return t.call(n,i,o++)}),r}function qf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},Do={transition:null},ep={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Do,ReactCurrentOwner:_a};function au(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:co,forEach:function(e,t,n){co(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return co(e,function(){t++}),t},toArray:function(e){return co(e,function(t){return t})||[]},only:function(e){if(!Da(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=or;H.Fragment=Bf;H.Profiler=Uf;H.PureComponent=Na;H.StrictMode=Kf;H.Suspense=Yf;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ep;H.act=au;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=_a.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)ou.call(t,s)&&!iu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var g=0;g<s;g++)a[g]=arguments[g+2];r.children=a}return{$$typeof:Xr,type:e.type,key:o,ref:i,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:Vf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wf,_context:e},e.Consumer=e};H.createElement=lu;H.createFactory=function(e){var t=lu.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Hf,render:e}};H.isValidElement=Da;H.lazy=function(e){return{$$typeof:Xf,_payload:{_status:-1,_result:e},_init:qf}};H.memo=function(e,t){return{$$typeof:Qf,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Do.transition;Do.transition={};try{e()}finally{Do.transition=t}};H.unstable_act=au;H.useCallback=function(e,t){return $e.current.useCallback(e,t)};H.useContext=function(e){return $e.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};H.useEffect=function(e,t){return $e.current.useEffect(e,t)};H.useId=function(){return $e.current.useId()};H.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return $e.current.useMemo(e,t)};H.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};H.useRef=function(e){return $e.current.useRef(e)};H.useState=function(e){return $e.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return $e.current.useTransition()};H.version="18.3.1";qc.exports=H;var E=qc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp=E,np=Symbol.for("react.element"),rp=Symbol.for("react.fragment"),op=Object.prototype.hasOwnProperty,ip=tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lp={key:!0,ref:!0,__self:!0,__source:!0};function su(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)op.call(t,r)&&!lp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:np,type:e,key:i,ref:l,props:o,_owner:ip.current}}mi.Fragment=rp;mi.jsx=su;mi.jsxs=su;Zc.exports=mi;var c=Zc.exports,cu={exports:{}},nt={},uu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,F){var B=R.length;R.push(F);e:for(;0<B;){var Q=B-1>>>1,te=R[Q];if(0<o(te,F))R[Q]=F,R[B]=te,B=Q;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var F=R[0],B=R.pop();if(B!==F){R[0]=B;e:for(var Q=0,te=R.length,Te=te>>>1;Q<Te;){var Fe=2*(Q+1)-1,It=R[Fe],xe=Fe+1,Xe=R[xe];if(0>o(It,B))xe<te&&0>o(Xe,It)?(R[Q]=Xe,R[xe]=B,Q=xe):(R[Q]=It,R[Fe]=B,Q=Fe);else if(xe<te&&0>o(Xe,B))R[Q]=Xe,R[xe]=B,Q=xe;else break e}}return F}function o(R,F){var B=R.sortIndex-F.sortIndex;return B!==0?B:R.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],g=[],u=1,h=null,p=3,y=!1,v=!1,b=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(R){for(var F=n(g);F!==null;){if(F.callback===null)r(g);else if(F.startTime<=R)r(g),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(g)}}function w(R){if(b=!1,x(R),!v)if(n(s)!==null)v=!0,fe(z);else{var F=n(g);F!==null&&Le(w,F.startTime-R)}}function z(R,F){v=!1,b&&(b=!1,m(T),T=-1),y=!0;var B=p;try{for(x(F),h=n(s);h!==null&&(!(h.expirationTime>F)||R&&!J());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,p=h.priorityLevel;var te=Q(h.expirationTime<=F);F=e.unstable_now(),typeof te=="function"?h.callback=te:h===n(s)&&r(s),x(F)}else r(s);h=n(s)}if(h!==null)var Te=!0;else{var Fe=n(g);Fe!==null&&Le(w,Fe.startTime-F),Te=!1}return Te}finally{h=null,p=B,y=!1}}var _=!1,L=null,T=-1,W=5,A=-1;function J(){return!(e.unstable_now()-A<W)}function Pe(){if(L!==null){var R=e.unstable_now();A=R;var F=!0;try{F=L(!0,R)}finally{F?de():(_=!1,L=null)}}else _=!1}var de;if(typeof f=="function")de=function(){f(Pe)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,Nt=je.port2;je.port1.onmessage=Pe,de=function(){Nt.postMessage(null)}}else de=function(){P(Pe,0)};function fe(R){L=R,_||(_=!0,de())}function Le(R,F){T=P(function(){R(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,fe(z))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var B=p;p=F;try{return R()}finally{p=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,F){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var B=p;p=R;try{return F()}finally{p=B}},e.unstable_scheduleCallback=function(R,F,B){var Q=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Q+B:Q):B=Q,R){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=B+te,R={id:u++,callback:F,priorityLevel:R,startTime:B,expirationTime:te,sortIndex:-1},B>Q?(R.sortIndex=B,t(g,R),n(s)===null&&R===n(g)&&(b?(m(T),T=-1):b=!0,Le(w,B-Q))):(R.sortIndex=te,t(s,R),v||y||(v=!0,fe(z))),R},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(R){var F=p;return function(){var B=p;p=F;try{return R.apply(this,arguments)}finally{p=B}}}})(du);uu.exports=du;var ap=uu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp=E,et=ap;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fu=new Set,Dr={};function Nn(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(Dr[e]=t,e=0;e<t.length;e++)fu.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),El=Object.prototype.hasOwnProperty,cp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Es={},Ns={};function up(e){return El.call(Ns,e)?!0:El.call(Es,e)?!1:cp.test(e)?Ns[e]=!0:(Es[e]=!0,!1)}function dp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fp(e,t,n,r){if(t===null||typeof t>"u"||dp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pa=/[\-:]([a-z])/g;function La(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pa,La);ze[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pa,La);ze[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pa,La);ze[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ta(e,t,n,r){var o=ze.hasOwnProperty(t)?ze[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fp(t,n,o,r)&&(n=null),r||o===null?up(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $t=sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),Ra=Symbol.for("react.strict_mode"),Nl=Symbol.for("react.profiler"),pu=Symbol.for("react.provider"),hu=Symbol.for("react.context"),Oa=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),_l=Symbol.for("react.suspense_list"),Ma=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),gu=Symbol.for("react.offscreen"),Cs=Symbol.iterator;function sr(e){return e===null||typeof e!="object"?null:(e=Cs&&e[Cs]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,Ki;function mr(e){if(Ki===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ki=t&&t[1]||""}return`
`+Ki+e}var Ui=!1;function Wi(e,t){if(!e||Ui)return"";Ui=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var o=g.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Ui=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mr(e):""}function pp(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=Wi(e.type,!1),e;case 11:return e=Wi(e.type.render,!1),e;case 1:return e=Wi(e.type,!0),e;default:return""}}function Dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rn:return"Fragment";case Tn:return"Portal";case Nl:return"Profiler";case Ra:return"StrictMode";case Cl:return"Suspense";case _l:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hu:return(e.displayName||"Context")+".Consumer";case pu:return(e._context.displayName||"Context")+".Provider";case Oa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ma:return t=e.displayName||null,t!==null?t:Dl(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return Dl(e(t))}catch{}}return null}function hp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dl(t);case 8:return t===Ra?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gp(e){var t=mu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fo(e){e._valueTracker||(e._valueTracker=gp(e))}function xu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pl(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _s(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yu(e,t){t=t.checked,t!=null&&Ta(e,"checked",t,!1)}function Ll(e,t){yu(e,t);var n=tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tl(e,t.type,tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ds(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tl(e,t,n){(t!=="number"||Wo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xr=Array.isArray;function Vn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ps(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(xr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tn(n)}}function wu(e,t){var n=tn(t.value),r=tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ls(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var po,bu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mp=["Webkit","ms","Moz","O"];Object.keys(br).forEach(function(e){mp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),br[t]=br[e]})});function ku(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||br.hasOwnProperty(e)&&br[e]?(""+t).trim():t+"px"}function Su(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ku(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var xp=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ml(e,t){if(t){if(xp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Al(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $l=null;function Aa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Il=null,Hn=null,Yn=null;function Ts(e){if(e=Zr(e)){if(typeof Il!="function")throw Error(j(280));var t=e.stateNode;t&&(t=bi(t),Il(e.stateNode,e.type,t))}}function zu(e){Hn?Yn?Yn.push(e):Yn=[e]:Hn=e}function ju(){if(Hn){var e=Hn,t=Yn;if(Yn=Hn=null,Ts(e),t)for(e=0;e<t.length;e++)Ts(t[e])}}function Eu(e,t){return e(t)}function Nu(){}var Vi=!1;function Cu(e,t,n){if(Vi)return e(t,n);Vi=!0;try{return Eu(e,t,n)}finally{Vi=!1,(Hn!==null||Yn!==null)&&(Nu(),ju())}}function Lr(e,t){var n=e.stateNode;if(n===null)return null;var r=bi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Fl=!1;if(Rt)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{Fl=!1}function yp(e,t,n,r,o,i,l,a,s){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(u){this.onError(u)}}var kr=!1,Vo=null,Ho=!1,Bl=null,wp={onError:function(e){kr=!0,Vo=e}};function vp(e,t,n,r,o,i,l,a,s){kr=!1,Vo=null,yp.apply(wp,arguments)}function bp(e,t,n,r,o,i,l,a,s){if(vp.apply(this,arguments),kr){if(kr){var g=Vo;kr=!1,Vo=null}else throw Error(j(198));Ho||(Ho=!0,Bl=g)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rs(e){if(Cn(e)!==e)throw Error(j(188))}function kp(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Rs(o),e;if(i===r)return Rs(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Du(e){return e=kp(e),e!==null?Pu(e):null}function Pu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pu(e);if(t!==null)return t;e=e.sibling}return null}var Lu=et.unstable_scheduleCallback,Os=et.unstable_cancelCallback,Sp=et.unstable_shouldYield,zp=et.unstable_requestPaint,ue=et.unstable_now,jp=et.unstable_getCurrentPriorityLevel,$a=et.unstable_ImmediatePriority,Tu=et.unstable_UserBlockingPriority,Yo=et.unstable_NormalPriority,Ep=et.unstable_LowPriority,Ru=et.unstable_IdlePriority,xi=null,jt=null;function Np(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(xi,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Dp,Cp=Math.log,_p=Math.LN2;function Dp(e){return e>>>=0,e===0?32:31-(Cp(e)/_p|0)|0}var ho=64,go=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=yr(a):(i&=l,i!==0&&(r=yr(i)))}else l=n&~o,l!==0?r=yr(l):i!==0&&(r=yr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),o=1<<n,r|=e[n],t&=~o;return r}function Pp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-xt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Pp(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ou(){var e=ho;return ho<<=1,!(ho&4194240)&&(ho=64),e}function Hi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Tp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ia(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var X=0;function Mu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Au,Fa,$u,Iu,Fu,Ul=!1,mo=[],Yt=null,Qt=null,Xt=null,Tr=new Map,Rr=new Map,Ut=[],Rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ms(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Tr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function ur(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Zr(t),t!==null&&Fa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Op(e,t,n,r,o){switch(t){case"focusin":return Yt=ur(Yt,e,t,n,r,o),!0;case"dragenter":return Qt=ur(Qt,e,t,n,r,o),!0;case"mouseover":return Xt=ur(Xt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Tr.set(i,ur(Tr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Rr.set(i,ur(Rr.get(i)||null,e,t,n,r,o)),!0}return!1}function Bu(e){var t=mn(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=_u(n),t!==null){e.blockedOn=t,Fu(e.priority,function(){$u(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$l=r,n.target.dispatchEvent(r),$l=null}else return t=Zr(n),t!==null&&Fa(t),e.blockedOn=n,!1;t.shift()}return!0}function As(e,t,n){Po(e)&&n.delete(t)}function Mp(){Ul=!1,Yt!==null&&Po(Yt)&&(Yt=null),Qt!==null&&Po(Qt)&&(Qt=null),Xt!==null&&Po(Xt)&&(Xt=null),Tr.forEach(As),Rr.forEach(As)}function dr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ul||(Ul=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,Mp)))}function Or(e){function t(o){return dr(o,e)}if(0<mo.length){dr(mo[0],e);for(var n=1;n<mo.length;n++){var r=mo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yt!==null&&dr(Yt,e),Qt!==null&&dr(Qt,e),Xt!==null&&dr(Xt,e),Tr.forEach(t),Rr.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)Bu(n),n.blockedOn===null&&Ut.shift()}var Qn=$t.ReactCurrentBatchConfig,Xo=!0;function Ap(e,t,n,r){var o=X,i=Qn.transition;Qn.transition=null;try{X=1,Ba(e,t,n,r)}finally{X=o,Qn.transition=i}}function $p(e,t,n,r){var o=X,i=Qn.transition;Qn.transition=null;try{X=4,Ba(e,t,n,r)}finally{X=o,Qn.transition=i}}function Ba(e,t,n,r){if(Xo){var o=Wl(e,t,n,r);if(o===null)nl(e,t,r,Go,n),Ms(e,r);else if(Op(o,e,t,n,r))r.stopPropagation();else if(Ms(e,r),t&4&&-1<Rp.indexOf(e)){for(;o!==null;){var i=Zr(o);if(i!==null&&Au(i),i=Wl(e,t,n,r),i===null&&nl(e,t,r,Go,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else nl(e,t,r,null,n)}}var Go=null;function Wl(e,t,n,r){if(Go=null,e=Aa(r),e=mn(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_u(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Go=e,null}function Ku(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jp()){case $a:return 1;case Tu:return 4;case Yo:case Ep:return 16;case Ru:return 536870912;default:return 16}default:return 16}}var Vt=null,Ka=null,Lo=null;function Uu(){if(Lo)return Lo;var e,t=Ka,n=t.length,r,o="value"in Vt?Vt.value:Vt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Lo=o.slice(e,1<r?1-r:void 0)}function To(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xo(){return!0}function $s(){return!1}function rt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xo:$s,this.isPropagationStopped=$s,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),t}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ua=rt(ir),Jr=ae({},ir,{view:0,detail:0}),Ip=rt(Jr),Yi,Qi,fr,yi=ae({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(Yi=e.screenX-fr.screenX,Qi=e.screenY-fr.screenY):Qi=Yi=0,fr=e),Yi)},movementY:function(e){return"movementY"in e?e.movementY:Qi}}),Is=rt(yi),Fp=ae({},yi,{dataTransfer:0}),Bp=rt(Fp),Kp=ae({},Jr,{relatedTarget:0}),Xi=rt(Kp),Up=ae({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),Wp=rt(Up),Vp=ae({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hp=rt(Vp),Yp=ae({},ir,{data:0}),Fs=rt(Yp),Qp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gp[e])?!!t[e]:!1}function Wa(){return Jp}var Zp=ae({},Jr,{key:function(e){if(e.key){var t=Qp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=To(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wa,charCode:function(e){return e.type==="keypress"?To(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?To(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qp=rt(Zp),eh=ae({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bs=rt(eh),th=ae({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wa}),nh=rt(th),rh=ae({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),oh=rt(rh),ih=ae({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lh=rt(ih),ah=[9,13,27,32],Va=Rt&&"CompositionEvent"in window,Sr=null;Rt&&"documentMode"in document&&(Sr=document.documentMode);var sh=Rt&&"TextEvent"in window&&!Sr,Wu=Rt&&(!Va||Sr&&8<Sr&&11>=Sr),Ks=" ",Us=!1;function Vu(e,t){switch(e){case"keyup":return ah.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function ch(e,t){switch(e){case"compositionend":return Hu(t);case"keypress":return t.which!==32?null:(Us=!0,Ks);case"textInput":return e=t.data,e===Ks&&Us?null:e;default:return null}}function uh(e,t){if(On)return e==="compositionend"||!Va&&Vu(e,t)?(e=Uu(),Lo=Ka=Vt=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wu&&t.locale!=="ko"?null:t.data;default:return null}}var dh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dh[e.type]:t==="textarea"}function Yu(e,t,n,r){zu(r),t=Jo(t,"onChange"),0<t.length&&(n=new Ua("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zr=null,Mr=null;function fh(e){od(e,0)}function wi(e){var t=$n(e);if(xu(t))return e}function ph(e,t){if(e==="change")return t}var Qu=!1;if(Rt){var Gi;if(Rt){var Ji="oninput"in document;if(!Ji){var Vs=document.createElement("div");Vs.setAttribute("oninput","return;"),Ji=typeof Vs.oninput=="function"}Gi=Ji}else Gi=!1;Qu=Gi&&(!document.documentMode||9<document.documentMode)}function Hs(){zr&&(zr.detachEvent("onpropertychange",Xu),Mr=zr=null)}function Xu(e){if(e.propertyName==="value"&&wi(Mr)){var t=[];Yu(t,Mr,e,Aa(e)),Cu(fh,t)}}function hh(e,t,n){e==="focusin"?(Hs(),zr=t,Mr=n,zr.attachEvent("onpropertychange",Xu)):e==="focusout"&&Hs()}function gh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wi(Mr)}function mh(e,t){if(e==="click")return wi(t)}function xh(e,t){if(e==="input"||e==="change")return wi(t)}function yh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:yh;function Ar(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!El.call(t,o)||!wt(e[o],t[o]))return!1}return!0}function Ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qs(e,t){var n=Ys(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ys(n)}}function Gu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ju(){for(var e=window,t=Wo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wo(e.document)}return t}function Ha(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wh(e){var t=Ju(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gu(n.ownerDocument.documentElement,n)){if(r!==null&&Ha(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Qs(n,i);var l=Qs(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vh=Rt&&"documentMode"in document&&11>=document.documentMode,Mn=null,Vl=null,jr=null,Hl=!1;function Xs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hl||Mn==null||Mn!==Wo(r)||(r=Mn,"selectionStart"in r&&Ha(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Ar(jr,r)||(jr=r,r=Jo(Vl,"onSelect"),0<r.length&&(t=new Ua("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function yo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var An={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},Zi={},Zu={};Rt&&(Zu=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function vi(e){if(Zi[e])return Zi[e];if(!An[e])return e;var t=An[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zu)return Zi[e]=t[n];return e}var qu=vi("animationend"),ed=vi("animationiteration"),td=vi("animationstart"),nd=vi("transitionend"),rd=new Map,Gs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){rd.set(e,t),Nn(t,[e])}for(var qi=0;qi<Gs.length;qi++){var el=Gs[qi],bh=el.toLowerCase(),kh=el[0].toUpperCase()+el.slice(1);rn(bh,"on"+kh)}rn(qu,"onAnimationEnd");rn(ed,"onAnimationIteration");rn(td,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(nd,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sh=new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));function Js(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bp(r,t,void 0,e),e.currentTarget=null}function od(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,g=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Js(o,a,g),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,g=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Js(o,a,g),i=s}}}if(Ho)throw e=Bl,Ho=!1,Bl=null,e}function q(e,t){var n=t[Jl];n===void 0&&(n=t[Jl]=new Set);var r=e+"__bubble";n.has(r)||(id(t,e,2,!1),n.add(r))}function tl(e,t,n){var r=0;t&&(r|=4),id(n,e,r,t)}var wo="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[wo]){e[wo]=!0,fu.forEach(function(n){n!=="selectionchange"&&(Sh.has(n)||tl(n,!1,e),tl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wo]||(t[wo]=!0,tl("selectionchange",!1,t))}}function id(e,t,n,r){switch(Ku(t)){case 1:var o=Ap;break;case 4:o=$p;break;default:o=Ba}n=o.bind(null,t,n,e),o=void 0,!Fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function nl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=mn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Cu(function(){var g=i,u=Aa(n),h=[];e:{var p=rd.get(e);if(p!==void 0){var y=Ua,v=e;switch(e){case"keypress":if(To(n)===0)break e;case"keydown":case"keyup":y=qp;break;case"focusin":v="focus",y=Xi;break;case"focusout":v="blur",y=Xi;break;case"beforeblur":case"afterblur":y=Xi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Bp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=nh;break;case qu:case ed:case td:y=Wp;break;case nd:y=oh;break;case"scroll":y=Ip;break;case"wheel":y=lh;break;case"copy":case"cut":case"paste":y=Hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Bs}var b=(t&4)!==0,P=!b&&e==="scroll",m=b?p!==null?p+"Capture":null:p;b=[];for(var f=g,x;f!==null;){x=f;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,m!==null&&(w=Lr(f,m),w!=null&&b.push(Ir(f,w,x)))),P)break;f=f.return}0<b.length&&(p=new y(p,v,null,n,u),h.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==$l&&(v=n.relatedTarget||n.fromElement)&&(mn(v)||v[Ot]))break e;if((y||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=g,v=v?mn(v):null,v!==null&&(P=Cn(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=g),y!==v)){if(b=Is,w="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(b=Bs,w="onPointerLeave",m="onPointerEnter",f="pointer"),P=y==null?p:$n(y),x=v==null?p:$n(v),p=new b(w,f+"leave",y,n,u),p.target=P,p.relatedTarget=x,w=null,mn(u)===g&&(b=new b(m,f+"enter",v,n,u),b.target=x,b.relatedTarget=P,w=b),P=w,y&&v)t:{for(b=y,m=v,f=0,x=b;x;x=Ln(x))f++;for(x=0,w=m;w;w=Ln(w))x++;for(;0<f-x;)b=Ln(b),f--;for(;0<x-f;)m=Ln(m),x--;for(;f--;){if(b===m||m!==null&&b===m.alternate)break t;b=Ln(b),m=Ln(m)}b=null}else b=null;y!==null&&Zs(h,p,y,b,!1),v!==null&&P!==null&&Zs(h,P,v,b,!0)}}e:{if(p=g?$n(g):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var z=ph;else if(Ws(p))if(Qu)z=xh;else{z=gh;var _=hh}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(z=mh);if(z&&(z=z(e,g))){Yu(h,z,n,u);break e}_&&_(e,p,g),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&Tl(p,"number",p.value)}switch(_=g?$n(g):window,e){case"focusin":(Ws(_)||_.contentEditable==="true")&&(Mn=_,Vl=g,jr=null);break;case"focusout":jr=Vl=Mn=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,Xs(h,n,u);break;case"selectionchange":if(vh)break;case"keydown":case"keyup":Xs(h,n,u)}var L;if(Va)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else On?Vu(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Wu&&n.locale!=="ko"&&(On||T!=="onCompositionStart"?T==="onCompositionEnd"&&On&&(L=Uu()):(Vt=u,Ka="value"in Vt?Vt.value:Vt.textContent,On=!0)),_=Jo(g,T),0<_.length&&(T=new Fs(T,e,null,n,u),h.push({event:T,listeners:_}),L?T.data=L:(L=Hu(n),L!==null&&(T.data=L)))),(L=sh?ch(e,n):uh(e,n))&&(g=Jo(g,"onBeforeInput"),0<g.length&&(u=new Fs("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:g}),u.data=L))}od(h,t)})}function Ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Lr(e,n),i!=null&&r.unshift(Ir(e,i,o)),i=Lr(e,t),i!=null&&r.push(Ir(e,i,o))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,g=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&g!==null&&(a=g,o?(s=Lr(n,i),s!=null&&l.unshift(Ir(n,s,a))):o||(s=Lr(n,i),s!=null&&l.push(Ir(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var zh=/\r\n?/g,jh=/\u0000|\uFFFD/g;function qs(e){return(typeof e=="string"?e:""+e).replace(zh,`
`).replace(jh,"")}function vo(e,t,n){if(t=qs(t),qs(e)!==t&&n)throw Error(j(425))}function Zo(){}var Yl=null,Ql=null;function Xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gl=typeof setTimeout=="function"?setTimeout:void 0,Eh=typeof clearTimeout=="function"?clearTimeout:void 0,ec=typeof Promise=="function"?Promise:void 0,Nh=typeof queueMicrotask=="function"?queueMicrotask:typeof ec<"u"?function(e){return ec.resolve(null).then(e).catch(Ch)}:Gl;function Ch(e){setTimeout(function(){throw e})}function rl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Or(t)}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),zt="__reactFiber$"+lr,Fr="__reactProps$"+lr,Ot="__reactContainer$"+lr,Jl="__reactEvents$"+lr,_h="__reactListeners$"+lr,Dh="__reactHandles$"+lr;function mn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tc(e);e!==null;){if(n=e[zt])return n;e=tc(e)}return t}e=n,n=e.parentNode}return null}function Zr(e){return e=e[zt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function bi(e){return e[Fr]||null}var Zl=[],In=-1;function on(e){return{current:e}}function ee(e){0>In||(e.current=Zl[In],Zl[In]=null,In--)}function Z(e,t){In++,Zl[In]=e.current,e.current=t}var nn={},De=on(nn),He=on(!1),kn=nn;function Zn(e,t){var n=e.type.contextTypes;if(!n)return nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ye(e){return e=e.childContextTypes,e!=null}function qo(){ee(He),ee(De)}function nc(e,t,n){if(De.current!==nn)throw Error(j(168));Z(De,t),Z(He,n)}function ld(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,hp(e)||"Unknown",o));return ae({},n,r)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,kn=De.current,Z(De,e),Z(He,He.current),!0}function rc(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=ld(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,ee(He),ee(De),Z(De,e)):ee(He),Z(He,n)}var Dt=null,ki=!1,ol=!1;function ad(e){Dt===null?Dt=[e]:Dt.push(e)}function Ph(e){ki=!0,ad(e)}function ln(){if(!ol&&Dt!==null){ol=!0;var e=0,t=X;try{var n=Dt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,ki=!1}catch(o){throw Dt!==null&&(Dt=Dt.slice(e+1)),Lu($a,ln),o}finally{X=t,ol=!1}}return null}var Fn=[],Bn=0,ti=null,ni=0,it=[],lt=0,Sn=null,Pt=1,Lt="";function hn(e,t){Fn[Bn++]=ni,Fn[Bn++]=ti,ti=e,ni=t}function sd(e,t,n){it[lt++]=Pt,it[lt++]=Lt,it[lt++]=Sn,Sn=e;var r=Pt;e=Lt;var o=32-xt(r)-1;r&=~(1<<o),n+=1;var i=32-xt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Pt=1<<32-xt(t)+o|n<<o|r,Lt=i+e}else Pt=1<<i|n<<o|r,Lt=e}function Ya(e){e.return!==null&&(hn(e,1),sd(e,1,0))}function Qa(e){for(;e===ti;)ti=Fn[--Bn],Fn[Bn]=null,ni=Fn[--Bn],Fn[Bn]=null;for(;e===Sn;)Sn=it[--lt],it[lt]=null,Lt=it[--lt],it[lt]=null,Pt=it[--lt],it[lt]=null}var qe=null,Ze=null,oe=!1,gt=null;function cd(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function oc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ze=Gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sn!==null?{id:Pt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ze=null,!0):!1;default:return!1}}function ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ea(e){if(oe){var t=Ze;if(t){var n=t;if(!oc(e,t)){if(ql(e))throw Error(j(418));t=Gt(n.nextSibling);var r=qe;t&&oc(e,t)?cd(r,n):(e.flags=e.flags&-4097|2,oe=!1,qe=e)}}else{if(ql(e))throw Error(j(418));e.flags=e.flags&-4097|2,oe=!1,qe=e}}}function ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function bo(e){if(e!==qe)return!1;if(!oe)return ic(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xl(e.type,e.memoizedProps)),t&&(t=Ze)){if(ql(e))throw ud(),Error(j(418));for(;t;)cd(e,t),t=Gt(t.nextSibling)}if(ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=Gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=qe?Gt(e.stateNode.nextSibling):null;return!0}function ud(){for(var e=Ze;e;)e=Gt(e.nextSibling)}function qn(){Ze=qe=null,oe=!1}function Xa(e){gt===null?gt=[e]:gt.push(e)}var Lh=$t.ReactCurrentBatchConfig;function pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function ko(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lc(e){var t=e._init;return t(e._payload)}function dd(e){function t(m,f){if(e){var x=m.deletions;x===null?(m.deletions=[f],m.flags|=16):x.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function o(m,f){return m=en(m,f),m.index=0,m.sibling=null,m}function i(m,f,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<f?(m.flags|=2,f):x):(m.flags|=2,f)):(m.flags|=1048576,f)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,x,w){return f===null||f.tag!==6?(f=dl(x,m.mode,w),f.return=m,f):(f=o(f,x),f.return=m,f)}function s(m,f,x,w){var z=x.type;return z===Rn?u(m,f,x.props.children,w,x.key):f!==null&&(f.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Bt&&lc(z)===f.type)?(w=o(f,x.props),w.ref=pr(m,f,x),w.return=m,w):(w=Fo(x.type,x.key,x.props,null,m.mode,w),w.ref=pr(m,f,x),w.return=m,w)}function g(m,f,x,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=fl(x,m.mode,w),f.return=m,f):(f=o(f,x.children||[]),f.return=m,f)}function u(m,f,x,w,z){return f===null||f.tag!==7?(f=vn(x,m.mode,w,z),f.return=m,f):(f=o(f,x),f.return=m,f)}function h(m,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=dl(""+f,m.mode,x),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case uo:return x=Fo(f.type,f.key,f.props,null,m.mode,x),x.ref=pr(m,null,f),x.return=m,x;case Tn:return f=fl(f,m.mode,x),f.return=m,f;case Bt:var w=f._init;return h(m,w(f._payload),x)}if(xr(f)||sr(f))return f=vn(f,m.mode,x,null),f.return=m,f;ko(m,f)}return null}function p(m,f,x,w){var z=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return z!==null?null:a(m,f,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case uo:return x.key===z?s(m,f,x,w):null;case Tn:return x.key===z?g(m,f,x,w):null;case Bt:return z=x._init,p(m,f,z(x._payload),w)}if(xr(x)||sr(x))return z!==null?null:u(m,f,x,w,null);ko(m,x)}return null}function y(m,f,x,w,z){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(x)||null,a(f,m,""+w,z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case uo:return m=m.get(w.key===null?x:w.key)||null,s(f,m,w,z);case Tn:return m=m.get(w.key===null?x:w.key)||null,g(f,m,w,z);case Bt:var _=w._init;return y(m,f,x,_(w._payload),z)}if(xr(w)||sr(w))return m=m.get(x)||null,u(f,m,w,z,null);ko(f,w)}return null}function v(m,f,x,w){for(var z=null,_=null,L=f,T=f=0,W=null;L!==null&&T<x.length;T++){L.index>T?(W=L,L=null):W=L.sibling;var A=p(m,L,x[T],w);if(A===null){L===null&&(L=W);break}e&&L&&A.alternate===null&&t(m,L),f=i(A,f,T),_===null?z=A:_.sibling=A,_=A,L=W}if(T===x.length)return n(m,L),oe&&hn(m,T),z;if(L===null){for(;T<x.length;T++)L=h(m,x[T],w),L!==null&&(f=i(L,f,T),_===null?z=L:_.sibling=L,_=L);return oe&&hn(m,T),z}for(L=r(m,L);T<x.length;T++)W=y(L,m,T,x[T],w),W!==null&&(e&&W.alternate!==null&&L.delete(W.key===null?T:W.key),f=i(W,f,T),_===null?z=W:_.sibling=W,_=W);return e&&L.forEach(function(J){return t(m,J)}),oe&&hn(m,T),z}function b(m,f,x,w){var z=sr(x);if(typeof z!="function")throw Error(j(150));if(x=z.call(x),x==null)throw Error(j(151));for(var _=z=null,L=f,T=f=0,W=null,A=x.next();L!==null&&!A.done;T++,A=x.next()){L.index>T?(W=L,L=null):W=L.sibling;var J=p(m,L,A.value,w);if(J===null){L===null&&(L=W);break}e&&L&&J.alternate===null&&t(m,L),f=i(J,f,T),_===null?z=J:_.sibling=J,_=J,L=W}if(A.done)return n(m,L),oe&&hn(m,T),z;if(L===null){for(;!A.done;T++,A=x.next())A=h(m,A.value,w),A!==null&&(f=i(A,f,T),_===null?z=A:_.sibling=A,_=A);return oe&&hn(m,T),z}for(L=r(m,L);!A.done;T++,A=x.next())A=y(L,m,T,A.value,w),A!==null&&(e&&A.alternate!==null&&L.delete(A.key===null?T:A.key),f=i(A,f,T),_===null?z=A:_.sibling=A,_=A);return e&&L.forEach(function(Pe){return t(m,Pe)}),oe&&hn(m,T),z}function P(m,f,x,w){if(typeof x=="object"&&x!==null&&x.type===Rn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case uo:e:{for(var z=x.key,_=f;_!==null;){if(_.key===z){if(z=x.type,z===Rn){if(_.tag===7){n(m,_.sibling),f=o(_,x.props.children),f.return=m,m=f;break e}}else if(_.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Bt&&lc(z)===_.type){n(m,_.sibling),f=o(_,x.props),f.ref=pr(m,_,x),f.return=m,m=f;break e}n(m,_);break}else t(m,_);_=_.sibling}x.type===Rn?(f=vn(x.props.children,m.mode,w,x.key),f.return=m,m=f):(w=Fo(x.type,x.key,x.props,null,m.mode,w),w.ref=pr(m,f,x),w.return=m,m=w)}return l(m);case Tn:e:{for(_=x.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){n(m,f.sibling),f=o(f,x.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=fl(x,m.mode,w),f.return=m,m=f}return l(m);case Bt:return _=x._init,P(m,f,_(x._payload),w)}if(xr(x))return v(m,f,x,w);if(sr(x))return b(m,f,x,w);ko(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(n(m,f.sibling),f=o(f,x),f.return=m,m=f):(n(m,f),f=dl(x,m.mode,w),f.return=m,m=f),l(m)):n(m,f)}return P}var er=dd(!0),fd=dd(!1),ri=on(null),oi=null,Kn=null,Ga=null;function Ja(){Ga=Kn=oi=null}function Za(e){var t=ri.current;ee(ri),e._currentValue=t}function ta(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){oi=e,Ga=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(Ga!==e)if(e={context:e,memoizedValue:t,next:null},Kn===null){if(oi===null)throw Error(j(308));Kn=e,oi.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return t}var xn=null;function qa(e){xn===null?xn=[e]:xn.push(e)}function pd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,qa(t)):(n.next=o.next,o.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function es(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Mt(e,n)}return o=r.interleaved,o===null?(t.next=t,qa(r)):(t.next=o.next,o.next=t),r.interleaved=t,Mt(e,n)}function Ro(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ia(e,n)}}function ac(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ii(e,t,n,r){var o=e.updateQueue;Kt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,g=s.next;s.next=null,l===null?i=g:l.next=g,l=s;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==l&&(a===null?u.firstBaseUpdate=g:a.next=g,u.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,u=g=s=null,a=i;do{var p=a.lane,y=a.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,b=a;switch(p=t,y=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){h=v.call(y,h,p);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,p=typeof v=="function"?v.call(y,h,p):v,p==null)break e;h=ae({},h,p);break e;case 2:Kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(g=u=y,s=h):u=u.next=y,l|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(u===null&&(s=h),o.baseState=s,o.firstBaseUpdate=g,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);jn|=l,e.lanes=l,e.memoizedState=h}}function sc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var qr={},Et=on(qr),Br=on(qr),Kr=on(qr);function yn(e){if(e===qr)throw Error(j(174));return e}function ts(e,t){switch(Z(Kr,t),Z(Br,e),Z(Et,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ol(t,e)}ee(Et),Z(Et,t)}function tr(){ee(Et),ee(Br),ee(Kr)}function gd(e){yn(Kr.current);var t=yn(Et.current),n=Ol(t,e.type);t!==n&&(Z(Br,e),Z(Et,n))}function ns(e){Br.current===e&&(ee(Et),ee(Br))}var ie=on(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function rs(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var Oo=$t.ReactCurrentDispatcher,ll=$t.ReactCurrentBatchConfig,zn=0,le=null,ge=null,ye=null,ai=!1,Er=!1,Ur=0,Th=0;function Ne(){throw Error(j(321))}function os(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function is(e,t,n,r,o,i){if(zn=i,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oo.current=e===null||e.memoizedState===null?Ah:$h,e=n(r,o),Er){i=0;do{if(Er=!1,Ur=0,25<=i)throw Error(j(301));i+=1,ye=ge=null,t.updateQueue=null,Oo.current=Ih,e=n(r,o)}while(Er)}if(Oo.current=si,t=ge!==null&&ge.next!==null,zn=0,ye=ge=le=null,ai=!1,t)throw Error(j(300));return e}function ls(){var e=Ur!==0;return Ur=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?le.memoizedState=ye=e:ye=ye.next=e,ye}function ut(){if(ge===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=ye===null?le.memoizedState:ye.next;if(t!==null)ye=t,ge=e;else{if(e===null)throw Error(j(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ye===null?le.memoizedState=ye=e:ye=ye.next=e}return ye}function Wr(e,t){return typeof t=="function"?t(e):t}function al(e){var t=ut(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ge,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,g=i;do{var u=g.lane;if((zn&u)===u)s!==null&&(s=s.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var h={lane:u,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,le.lanes|=u,jn|=u}g=g.next}while(g!==null&&g!==i);s===null?l=r:s.next=a,wt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,le.lanes|=i,jn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sl(e){var t=ut(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);wt(i,t.memoizedState)||(Ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function md(){}function xd(e,t){var n=le,r=ut(),o=t(),i=!wt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ve=!0),r=r.queue,as(vd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Vr(9,wd.bind(null,n,r,o,t),void 0,null),we===null)throw Error(j(349));zn&30||yd(n,t,o)}return o}function yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wd(e,t,n,r){t.value=n,t.getSnapshot=r,bd(t)&&kd(e)}function vd(e,t,n){return n(function(){bd(t)&&kd(e)})}function bd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function kd(e){var t=Mt(e,1);t!==null&&yt(t,e,1,-1)}function cc(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},t.queue=e,e=e.dispatch=Mh.bind(null,le,e),[t.memoizedState,e]}function Vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sd(){return ut().memoizedState}function Mo(e,t,n,r){var o=St();le.flags|=e,o.memoizedState=Vr(1|t,n,void 0,r===void 0?null:r)}function Si(e,t,n,r){var o=ut();r=r===void 0?null:r;var i=void 0;if(ge!==null){var l=ge.memoizedState;if(i=l.destroy,r!==null&&os(r,l.deps)){o.memoizedState=Vr(t,n,i,r);return}}le.flags|=e,o.memoizedState=Vr(1|t,n,i,r)}function uc(e,t){return Mo(8390656,8,e,t)}function as(e,t){return Si(2048,8,e,t)}function zd(e,t){return Si(4,2,e,t)}function jd(e,t){return Si(4,4,e,t)}function Ed(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nd(e,t,n){return n=n!=null?n.concat([e]):null,Si(4,4,Ed.bind(null,t,e),n)}function ss(){}function Cd(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&os(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _d(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&os(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dd(e,t,n){return zn&21?(wt(n,t)||(n=Ou(),le.lanes|=n,jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function Rh(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),t()}finally{X=n,ll.transition=r}}function Pd(){return ut().memoizedState}function Oh(e,t,n){var r=qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ld(e))Td(t,n);else if(n=pd(e,t,n,r),n!==null){var o=Ae();yt(n,e,r,o),Rd(n,t,r)}}function Mh(e,t,n){var r=qt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ld(e))Td(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,wt(a,l)){var s=t.interleaved;s===null?(o.next=o,qa(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=pd(e,t,o,r),n!==null&&(o=Ae(),yt(n,e,r,o),Rd(n,t,r))}}function Ld(e){var t=e.alternate;return e===le||t!==null&&t===le}function Td(e,t){Er=ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ia(e,n)}}var si={readContext:ct,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},Ah={readContext:ct,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:uc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4194308,4,Ed.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mo(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Oh.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:cc,useDebugValue:ss,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=cc(!1),t=e[0];return e=Rh.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,o=St();if(oe){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),we===null)throw Error(j(349));zn&30||yd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,uc(vd.bind(null,r,i,e),[e]),r.flags|=2048,Vr(9,wd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=St(),t=we.identifierPrefix;if(oe){var n=Lt,r=Pt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Th++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$h={readContext:ct,useCallback:Cd,useContext:ct,useEffect:as,useImperativeHandle:Nd,useInsertionEffect:zd,useLayoutEffect:jd,useMemo:_d,useReducer:al,useRef:Sd,useState:function(){return al(Wr)},useDebugValue:ss,useDeferredValue:function(e){var t=ut();return Dd(t,ge.memoizedState,e)},useTransition:function(){var e=al(Wr)[0],t=ut().memoizedState;return[e,t]},useMutableSource:md,useSyncExternalStore:xd,useId:Pd,unstable_isNewReconciler:!1},Ih={readContext:ct,useCallback:Cd,useContext:ct,useEffect:as,useImperativeHandle:Nd,useInsertionEffect:zd,useLayoutEffect:jd,useMemo:_d,useReducer:sl,useRef:Sd,useState:function(){return sl(Wr)},useDebugValue:ss,useDeferredValue:function(e){var t=ut();return ge===null?t.memoizedState=e:Dd(t,ge.memoizedState,e)},useTransition:function(){var e=sl(Wr)[0],t=ut().memoizedState;return[e,t]},useMutableSource:md,useSyncExternalStore:xd,useId:Pd,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function na(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zi={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=qt(e),i=Tt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,o),t!==null&&(yt(t,e,o,r),Ro(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=qt(e),i=Tt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,o),t!==null&&(yt(t,e,o,r),Ro(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=qt(e),o=Tt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Jt(e,o,r),t!==null&&(yt(t,e,r,n),Ro(t,e,r))}};function dc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(o,i):!0}function Od(e,t,n){var r=!1,o=nn,i=t.contextType;return typeof i=="object"&&i!==null?i=ct(i):(o=Ye(t)?kn:De.current,r=t.contextTypes,i=(r=r!=null)?Zn(e,o):nn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function fc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zi.enqueueReplaceState(t,t.state,null)}function ra(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},es(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ct(i):(i=Ye(t)?kn:De.current,o.context=Zn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(na(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&zi.enqueueReplaceState(o,o.state,null),ii(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,t){try{var n="",r=t;do n+=pp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Fh=typeof WeakMap=="function"?WeakMap:Map;function Md(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ui||(ui=!0,ha=r),oa(e,t)},n}function Ad(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){oa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){oa(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function pc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=eg.bind(null,e,t,n),t.then(e,e))}function hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e)}var Bh=$t.ReactCurrentOwner,Ve=!1;function Oe(e,t,n,r){t.child=e===null?fd(t,null,n,r):er(t,e.child,n,r)}function mc(e,t,n,r,o){n=n.render;var i=t.ref;return Xn(t,o),r=is(e,t,n,r,i,o),n=ls(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,At(e,t,o)):(oe&&n&&Ya(t),t.flags|=1,Oe(e,t,r,o),t.child)}function xc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ms(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,$d(e,t,i,r,o)):(e=Fo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ar,n(l,r)&&e.ref===t.ref)return At(e,t,o)}return t.flags|=1,e=en(i,r),e.ref=t.ref,e.return=t,t.child=e}function $d(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ar(i,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,At(e,t,o)}return ia(e,t,n,r,o)}function Id(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Wn,Je),Je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Wn,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Z(Wn,Je),Je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Z(Wn,Je),Je|=r;return Oe(e,t,o,n),t.child}function Fd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ia(e,t,n,r,o){var i=Ye(n)?kn:De.current;return i=Zn(t,i),Xn(t,o),n=is(e,t,n,r,i,o),r=ls(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,At(e,t,o)):(oe&&r&&Ya(t),t.flags|=1,Oe(e,t,n,o),t.child)}function yc(e,t,n,r,o){if(Ye(n)){var i=!0;ei(t)}else i=!1;if(Xn(t,o),t.stateNode===null)Ao(e,t),Od(t,n,r),ra(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,g=n.contextType;typeof g=="object"&&g!==null?g=ct(g):(g=Ye(n)?kn:De.current,g=Zn(t,g));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==g)&&fc(t,l,r,g),Kt=!1;var p=t.memoizedState;l.state=p,ii(t,r,l,o),s=t.memoizedState,a!==r||p!==s||He.current||Kt?(typeof u=="function"&&(na(t,n,u,r),s=t.memoizedState),(a=Kt||dc(t,n,a,r,p,s,g))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=g,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,hd(e,t),a=t.memoizedProps,g=t.type===t.elementType?a:pt(t.type,a),l.props=g,h=t.pendingProps,p=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=ct(s):(s=Ye(n)?kn:De.current,s=Zn(t,s));var y=n.getDerivedStateFromProps;(u=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||p!==s)&&fc(t,l,r,s),Kt=!1,p=t.memoizedState,l.state=p,ii(t,r,l,o);var v=t.memoizedState;a!==h||p!==v||He.current||Kt?(typeof y=="function"&&(na(t,n,y,r),v=t.memoizedState),(g=Kt||dc(t,n,g,r,p,v,s)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=s,r=g):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return la(e,t,n,r,i,o)}function la(e,t,n,r,o,i){Fd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&rc(t,n,!1),At(e,t,i);r=t.stateNode,Bh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=er(t,e.child,null,i),t.child=er(t,null,a,i)):Oe(e,t,a,i),t.memoizedState=r.state,o&&rc(t,n,!0),t.child}function Bd(e){var t=e.stateNode;t.pendingContext?nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nc(e,t.context,!1),ts(e,t.containerInfo)}function wc(e,t,n,r,o){return qn(),Xa(o),t.flags|=256,Oe(e,t,n,r),t.child}var aa={dehydrated:null,treeContext:null,retryLane:0};function sa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kd(e,t,n){var r=t.pendingProps,o=ie.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Z(ie,o&1),e===null)return ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ni(l,r,0,null),e=vn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=sa(n),t.memoizedState=aa,e):cs(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Kh(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=en(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=en(a,i):(i=vn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?sa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=aa,r}return i=e.child,e=i.sibling,r=en(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cs(e,t){return t=Ni({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function So(e,t,n,r){return r!==null&&Xa(r),er(t,e.child,null,n),e=cs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=cl(Error(j(422))),So(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ni({mode:"visible",children:r.children},o,0,null),i=vn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&er(t,e.child,null,l),t.child.memoizedState=sa(l),t.memoizedState=aa,i);if(!(t.mode&1))return So(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(j(419)),r=cl(i,r,void 0),So(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ve||a){if(r=we,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Mt(e,o),yt(r,e,o,-1))}return gs(),r=cl(Error(j(421))),So(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=tg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ze=Gt(o.nextSibling),qe=t,oe=!0,gt=null,e!==null&&(it[lt++]=Pt,it[lt++]=Lt,it[lt++]=Sn,Pt=e.id,Lt=e.overflow,Sn=t),t=cs(t,r.children),t.flags|=4096,t)}function vc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ta(e.return,t,n)}function ul(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ud(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Oe(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vc(e,n,t);else if(e.tag===19)vc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(ie,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&li(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ul(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&li(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ul(t,!0,n,null,i);break;case"together":ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ao(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Uh(e,t,n){switch(t.tag){case 3:Bd(t),qn();break;case 5:gd(t);break;case 1:Ye(t.type)&&ei(t);break;case 4:ts(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Z(ri,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?Kd(e,t,n):(Z(ie,ie.current&1),e=At(e,t,n),e!==null?e.sibling:null);Z(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ud(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Id(e,t,n)}return At(e,t,n)}var Wd,ca,Vd,Hd;Wd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ca=function(){};Vd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,yn(Et.current);var i=null;switch(n){case"input":o=Pl(e,o),r=Pl(e,r),i=[];break;case"select":o=ae({},o,{value:void 0}),r=ae({},r,{value:void 0}),i=[];break;case"textarea":o=Rl(e,o),r=Rl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zo)}Ml(n,r);var l;n=null;for(g in o)if(!r.hasOwnProperty(g)&&o.hasOwnProperty(g)&&o[g]!=null)if(g==="style"){var a=o[g];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Dr.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in r){var s=r[g];if(a=o!=null?o[g]:void 0,r.hasOwnProperty(g)&&s!==a&&(s!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(g,n)),n=s;else g==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(g,s)):g==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(g,""+s):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(Dr.hasOwnProperty(g)?(s!=null&&g==="onScroll"&&q("scroll",e),i||a===s||(i=[])):(i=i||[]).push(g,s))}n&&(i=i||[]).push("style",n);var g=i;(t.updateQueue=g)&&(t.flags|=4)}};Hd=function(e,t,n,r){n!==r&&(t.flags|=4)};function hr(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wh(e,t,n){var r=t.pendingProps;switch(Qa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ye(t.type)&&qo(),Ce(t),null;case 3:return r=t.stateNode,tr(),ee(He),ee(De),rs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(xa(gt),gt=null))),ca(e,t),Ce(t),null;case 5:ns(t);var o=yn(Kr.current);if(n=t.type,e!==null&&t.stateNode!=null)Vd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Ce(t),null}if(e=yn(Et.current),bo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[zt]=t,r[Fr]=i,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<wr.length;o++)q(wr[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":_s(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":Ps(r,i),q("invalid",r)}Ml(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&vo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&vo(r.textContent,a,e),o=["children",""+a]):Dr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&q("scroll",r)}switch(n){case"input":fo(r),Ds(r,i,!0);break;case"textarea":fo(r),Ls(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[zt]=t,e[Fr]=r,Wd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Al(n,r),n){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<wr.length;o++)q(wr[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":_s(e,r),o=Pl(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ae({},r,{value:void 0}),q("invalid",e);break;case"textarea":Ps(e,r),o=Rl(e,r),q("invalid",e);break;default:o=r}Ml(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Su(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&bu(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Pr(e,s):typeof s=="number"&&Pr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Dr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&q("scroll",e):s!=null&&Ta(e,i,s,l))}switch(n){case"input":fo(e),Ds(e,r,!1);break;case"textarea":fo(e),Ls(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Vn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)Hd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=yn(Kr.current),yn(Et.current),bo(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(i=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:vo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return Ce(t),null;case 13:if(ee(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ze!==null&&t.mode&1&&!(t.flags&128))ud(),qn(),t.flags|=98560,i=!1;else if(i=bo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[zt]=t}else qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else gt!==null&&(xa(gt),gt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?me===0&&(me=3):gs())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return tr(),ca(e,t),e===null&&$r(t.stateNode.containerInfo),Ce(t),null;case 10:return Za(t.type._context),Ce(t),null;case 17:return Ye(t.type)&&qo(),Ce(t),null;case 19:if(ee(ie),i=t.memoizedState,i===null)return Ce(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)hr(i,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=li(e),l!==null){for(t.flags|=128,hr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(ie,ie.current&1|2),t.child}e=e.sibling}i.tail!==null&&ue()>rr&&(t.flags|=128,r=!0,hr(i,!1),t.lanes=4194304)}else{if(!r)if(e=li(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!oe)return Ce(t),null}else 2*ue()-i.renderingStartTime>rr&&n!==1073741824&&(t.flags|=128,r=!0,hr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ue(),t.sibling=null,n=ie.current,Z(ie,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return hs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Vh(e,t){switch(Qa(t),t.tag){case 1:return Ye(t.type)&&qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),ee(He),ee(De),rs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ns(t),null;case 13:if(ee(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(ie),null;case 4:return tr(),null;case 10:return Za(t.type._context),null;case 22:case 23:return hs(),null;case 24:return null;default:return null}}var zo=!1,_e=!1,Hh=typeof WeakSet=="function"?WeakSet:Set,M=null;function Un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function ua(e,t,n){try{n()}catch(r){ce(e,t,r)}}var bc=!1;function Yh(e,t){if(Yl=Xo,e=Ju(),Ha(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,g=0,u=0,h=e,p=null;t:for(;;){for(var y;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===e)break t;if(p===n&&++g===o&&(a=l),p===i&&++u===r&&(s=l),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ql={focusedElem:e,selectionRange:n},Xo=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,P=v.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:pt(t.type,b),P);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){ce(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return v=bc,bc=!1,v}function Nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ua(t,n,i)}o=o.next}while(o!==r)}}function ji(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function da(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yd(e){var t=e.alternate;t!==null&&(e.alternate=null,Yd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Fr],delete t[Jl],delete t[_h],delete t[Dh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qd(e){return e.tag===5||e.tag===3||e.tag===4}function kc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zo));else if(r!==4&&(e=e.child,e!==null))for(fa(e,t,n),e=e.sibling;e!==null;)fa(e,t,n),e=e.sibling}function pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(pa(e,t,n),e=e.sibling;e!==null;)pa(e,t,n),e=e.sibling}var be=null,ht=!1;function Ft(e,t,n){for(n=n.child;n!==null;)Xd(e,t,n),n=n.sibling}function Xd(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(xi,n)}catch{}switch(n.tag){case 5:_e||Un(n,t);case 6:var r=be,o=ht;be=null,Ft(e,t,n),be=r,ht=o,be!==null&&(ht?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(ht?(e=be,n=n.stateNode,e.nodeType===8?rl(e.parentNode,n):e.nodeType===1&&rl(e,n),Or(e)):rl(be,n.stateNode));break;case 4:r=be,o=ht,be=n.stateNode.containerInfo,ht=!0,Ft(e,t,n),be=r,ht=o;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ua(n,t,l),o=o.next}while(o!==r)}Ft(e,t,n);break;case 1:if(!_e&&(Un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,t,a)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Ft(e,t,n),_e=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function Sc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hh),t.forEach(function(r){var o=ng.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:be=a.stateNode,ht=!1;break e;case 3:be=a.stateNode.containerInfo,ht=!0;break e;case 4:be=a.stateNode.containerInfo,ht=!0;break e}a=a.return}if(be===null)throw Error(j(160));Xd(i,l,o),be=null,ht=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(g){ce(o,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gd(t,e),t=t.sibling}function Gd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),kt(e),r&4){try{Nr(3,e,e.return),ji(3,e)}catch(b){ce(e,e.return,b)}try{Nr(5,e,e.return)}catch(b){ce(e,e.return,b)}}break;case 1:ft(t,e),kt(e),r&512&&n!==null&&Un(n,n.return);break;case 5:if(ft(t,e),kt(e),r&512&&n!==null&&Un(n,n.return),e.flags&32){var o=e.stateNode;try{Pr(o,"")}catch(b){ce(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&yu(o,i),Al(a,l);var g=Al(a,i);for(l=0;l<s.length;l+=2){var u=s[l],h=s[l+1];u==="style"?Su(o,h):u==="dangerouslySetInnerHTML"?bu(o,h):u==="children"?Pr(o,h):Ta(o,u,h,g)}switch(a){case"input":Ll(o,i);break;case"textarea":wu(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Vn(o,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?Vn(o,!!i.multiple,i.defaultValue,!0):Vn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Fr]=i}catch(b){ce(e,e.return,b)}}break;case 6:if(ft(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){ce(e,e.return,b)}}break;case 3:if(ft(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(b){ce(e,e.return,b)}break;case 4:ft(t,e),kt(e);break;case 13:ft(t,e),kt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(fs=ue())),r&4&&Sc(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(g=_e)||u,ft(t,e),_e=g):ft(t,e),kt(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!u&&e.mode&1)for(M=e,u=e.child;u!==null;){for(h=M=u;M!==null;){switch(p=M,y=p.child,p.tag){case 0:case 11:case 14:case 15:Nr(4,p,p.return);break;case 1:Un(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){ce(r,n,b)}}break;case 5:Un(p,p.return);break;case 22:if(p.memoizedState!==null){jc(h);continue}}y!==null?(y.return=p,M=y):jc(h)}u=u.sibling}e:for(u=null,h=e;;){if(h.tag===5){if(u===null){u=h;try{o=h.stateNode,g?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ku("display",l))}catch(b){ce(e,e.return,b)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=g?"":h.memoizedProps}catch(b){ce(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ft(t,e),kt(e),r&4&&Sc(e);break;case 21:break;default:ft(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qd(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Pr(o,""),r.flags&=-33);var i=kc(e);pa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=kc(e);fa(e,a,l);break;default:throw Error(j(161))}}catch(s){ce(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qh(e,t,n){M=e,Jd(e)}function Jd(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||zo;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||_e;a=zo;var g=_e;if(zo=l,(_e=s)&&!g)for(M=o;M!==null;)l=M,s=l.child,l.tag===22&&l.memoizedState!==null?Ec(o):s!==null?(s.return=l,M=s):Ec(o);for(;i!==null;)M=i,Jd(i),i=i.sibling;M=o,zo=a,_e=g}zc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,M=i):zc(e)}}function zc(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||ji(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&sc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var u=g.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Or(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}_e||t.flags&512&&da(t)}catch(p){ce(t,t.return,p)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function jc(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Ec(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ji(4,t)}catch(s){ce(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ce(t,o,s)}}var i=t.return;try{da(t)}catch(s){ce(t,i,s)}break;case 5:var l=t.return;try{da(t)}catch(s){ce(t,l,s)}}}catch(s){ce(t,t.return,s)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var Xh=Math.ceil,ci=$t.ReactCurrentDispatcher,us=$t.ReactCurrentOwner,st=$t.ReactCurrentBatchConfig,Y=0,we=null,he=null,Se=0,Je=0,Wn=on(0),me=0,Hr=null,jn=0,Ei=0,ds=0,Cr=null,We=null,fs=0,rr=1/0,_t=null,ui=!1,ha=null,Zt=null,jo=!1,Ht=null,di=0,_r=0,ga=null,$o=-1,Io=0;function Ae(){return Y&6?ue():$o!==-1?$o:$o=ue()}function qt(e){return e.mode&1?Y&2&&Se!==0?Se&-Se:Lh.transition!==null?(Io===0&&(Io=Ou()),Io):(e=X,e!==0||(e=window.event,e=e===void 0?16:Ku(e.type)),e):1}function yt(e,t,n,r){if(50<_r)throw _r=0,ga=null,Error(j(185));Gr(e,n,r),(!(Y&2)||e!==we)&&(e===we&&(!(Y&2)&&(Ei|=n),me===4&&Wt(e,Se)),Qe(e,r),n===1&&Y===0&&!(t.mode&1)&&(rr=ue()+500,ki&&ln()))}function Qe(e,t){var n=e.callbackNode;Lp(e,t);var r=Qo(e,e===we?Se:0);if(r===0)n!==null&&Os(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Os(n),t===1)e.tag===0?Ph(Nc.bind(null,e)):ad(Nc.bind(null,e)),Nh(function(){!(Y&6)&&ln()}),n=null;else{switch(Mu(r)){case 1:n=$a;break;case 4:n=Tu;break;case 16:n=Yo;break;case 536870912:n=Ru;break;default:n=Yo}n=lf(n,Zd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zd(e,t){if($o=-1,Io=0,Y&6)throw Error(j(327));var n=e.callbackNode;if(Gn()&&e.callbackNode!==n)return null;var r=Qo(e,e===we?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fi(e,r);else{t=r;var o=Y;Y|=2;var i=ef();(we!==e||Se!==t)&&(_t=null,rr=ue()+500,wn(e,t));do try{Zh();break}catch(a){qd(e,a)}while(!0);Ja(),ci.current=i,Y=o,he!==null?t=0:(we=null,Se=0,t=me)}if(t!==0){if(t===2&&(o=Kl(e),o!==0&&(r=o,t=ma(e,o))),t===1)throw n=Hr,wn(e,0),Wt(e,r),Qe(e,ue()),n;if(t===6)Wt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Gh(o)&&(t=fi(e,r),t===2&&(i=Kl(e),i!==0&&(r=i,t=ma(e,i))),t===1))throw n=Hr,wn(e,0),Wt(e,r),Qe(e,ue()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:gn(e,We,_t);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=fs+500-ue(),10<t)){if(Qo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Gl(gn.bind(null,e,We,_t),t);break}gn(e,We,_t);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-xt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xh(r/1960))-r,10<r){e.timeoutHandle=Gl(gn.bind(null,e,We,_t),r);break}gn(e,We,_t);break;case 5:gn(e,We,_t);break;default:throw Error(j(329))}}}return Qe(e,ue()),e.callbackNode===n?Zd.bind(null,e):null}function ma(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=fi(e,t),e!==2&&(t=We,We=n,t!==null&&xa(t)),e}function xa(e){We===null?We=e:We.push.apply(We,e)}function Gh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!wt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~ds,t&=~Ei,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function Nc(e){if(Y&6)throw Error(j(327));Gn();var t=Qo(e,0);if(!(t&1))return Qe(e,ue()),null;var n=fi(e,t);if(e.tag!==0&&n===2){var r=Kl(e);r!==0&&(t=r,n=ma(e,r))}if(n===1)throw n=Hr,wn(e,0),Wt(e,t),Qe(e,ue()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,We,_t),Qe(e,ue()),null}function ps(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(rr=ue()+500,ki&&ln())}}function En(e){Ht!==null&&Ht.tag===0&&!(Y&6)&&Gn();var t=Y;Y|=1;var n=st.transition,r=X;try{if(st.transition=null,X=1,e)return e()}finally{X=r,st.transition=n,Y=t,!(Y&6)&&ln()}}function hs(){Je=Wn.current,ee(Wn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Eh(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(Qa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qo();break;case 3:tr(),ee(He),ee(De),rs();break;case 5:ns(r);break;case 4:tr();break;case 13:ee(ie);break;case 19:ee(ie);break;case 10:Za(r.type._context);break;case 22:case 23:hs()}n=n.return}if(we=e,he=e=en(e.current,null),Se=Je=t,me=0,Hr=null,ds=Ei=jn=0,We=Cr=null,xn!==null){for(t=0;t<xn.length;t++)if(n=xn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}xn=null}return e}function qd(e,t){do{var n=he;try{if(Ja(),Oo.current=si,ai){for(var r=le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ai=!1}if(zn=0,ye=ge=le=null,Er=!1,Ur=0,us.current=null,n===null||n.return===null){me=1,Hr=t,he=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=Se,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var g=s,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=hc(l);if(y!==null){y.flags&=-257,gc(y,l,a,i,t),y.mode&1&&pc(i,g,t),t=y,s=g;var v=t.updateQueue;if(v===null){var b=new Set;b.add(s),t.updateQueue=b}else v.add(s);break e}else{if(!(t&1)){pc(i,g,t),gs();break e}s=Error(j(426))}}else if(oe&&a.mode&1){var P=hc(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),gc(P,l,a,i,t),Xa(nr(s,a));break e}}i=s=nr(s,a),me!==4&&(me=2),Cr===null?Cr=[i]:Cr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Md(i,s,t);ac(i,m);break e;case 1:a=s;var f=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Zt===null||!Zt.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Ad(i,a,t);ac(i,w);break e}}i=i.return}while(i!==null)}nf(n)}catch(z){t=z,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function ef(){var e=ci.current;return ci.current=si,e===null?si:e}function gs(){(me===0||me===3||me===2)&&(me=4),we===null||!(jn&268435455)&&!(Ei&268435455)||Wt(we,Se)}function fi(e,t){var n=Y;Y|=2;var r=ef();(we!==e||Se!==t)&&(_t=null,wn(e,t));do try{Jh();break}catch(o){qd(e,o)}while(!0);if(Ja(),Y=n,ci.current=r,he!==null)throw Error(j(261));return we=null,Se=0,me}function Jh(){for(;he!==null;)tf(he)}function Zh(){for(;he!==null&&!Sp();)tf(he)}function tf(e){var t=of(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?nf(e):he=t,us.current=null}function nf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vh(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,he=null;return}}else if(n=Wh(n,t,Je),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);me===0&&(me=5)}function gn(e,t,n){var r=X,o=st.transition;try{st.transition=null,X=1,qh(e,t,n,r)}finally{st.transition=o,X=r}return null}function qh(e,t,n,r){do Gn();while(Ht!==null);if(Y&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Tp(e,i),e===we&&(he=we=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jo||(jo=!0,lf(Yo,function(){return Gn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=st.transition,st.transition=null;var l=X;X=1;var a=Y;Y|=4,us.current=null,Yh(e,n),Gd(n,e),wh(Ql),Xo=!!Yl,Ql=Yl=null,e.current=n,Qh(n),zp(),Y=a,X=l,st.transition=i}else e.current=n;if(jo&&(jo=!1,Ht=e,di=o),i=e.pendingLanes,i===0&&(Zt=null),Np(n.stateNode),Qe(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ui)throw ui=!1,e=ha,ha=null,e;return di&1&&e.tag!==0&&Gn(),i=e.pendingLanes,i&1?e===ga?_r++:(_r=0,ga=e):_r=0,ln(),null}function Gn(){if(Ht!==null){var e=Mu(di),t=st.transition,n=X;try{if(st.transition=null,X=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,di=0,Y&6)throw Error(j(331));var o=Y;for(Y|=4,M=e.current;M!==null;){var i=M,l=i.child;if(M.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var g=a[s];for(M=g;M!==null;){var u=M;switch(u.tag){case 0:case 11:case 15:Nr(8,u,i)}var h=u.child;if(h!==null)h.return=u,M=h;else for(;M!==null;){u=M;var p=u.sibling,y=u.return;if(Yd(u),u===g){M=null;break}if(p!==null){p.return=y,M=p;break}M=y}}}var v=i.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var P=b.sibling;b.sibling=null,b=P}while(b!==null)}}M=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,M=l;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Nr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,M=m;break e}M=i.return}}var f=e.current;for(M=f;M!==null;){l=M;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,M=x;else e:for(l=f;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ji(9,a)}}catch(z){ce(a,a.return,z)}if(a===l){M=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,M=w;break e}M=a.return}}if(Y=o,ln(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(xi,e)}catch{}r=!0}return r}finally{X=n,st.transition=t}}return!1}function Cc(e,t,n){t=nr(n,t),t=Md(e,t,1),e=Jt(e,t,1),t=Ae(),e!==null&&(Gr(e,1,t),Qe(e,t))}function ce(e,t,n){if(e.tag===3)Cc(e,e,n);else for(;t!==null;){if(t.tag===3){Cc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=nr(n,e),e=Ad(t,e,1),t=Jt(t,e,1),e=Ae(),t!==null&&(Gr(t,1,e),Qe(t,e));break}}t=t.return}}function eg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(Se&n)===n&&(me===4||me===3&&(Se&130023424)===Se&&500>ue()-fs?wn(e,0):ds|=n),Qe(e,t)}function rf(e,t){t===0&&(e.mode&1?(t=go,go<<=1,!(go&130023424)&&(go=4194304)):t=1);var n=Ae();e=Mt(e,t),e!==null&&(Gr(e,t,n),Qe(e,n))}function tg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rf(e,n)}function ng(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),rf(e,n)}var of;of=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,Uh(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,oe&&t.flags&1048576&&sd(t,ni,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ao(e,t),e=t.pendingProps;var o=Zn(t,De.current);Xn(t,n),o=is(null,t,r,e,o,n);var i=ls();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(i=!0,ei(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,es(t),o.updater=zi,t.stateNode=o,o._reactInternals=t,ra(t,r,e,n),t=la(null,t,r,!0,i,n)):(t.tag=0,oe&&i&&Ya(t),Oe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ao(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=og(r),e=pt(r,e),o){case 0:t=ia(null,t,r,e,n);break e;case 1:t=yc(null,t,r,e,n);break e;case 11:t=mc(null,t,r,e,n);break e;case 14:t=xc(null,t,r,pt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),ia(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),yc(e,t,r,o,n);case 3:e:{if(Bd(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,hd(e,t),ii(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=nr(Error(j(423)),t),t=wc(e,t,r,n,o);break e}else if(r!==o){o=nr(Error(j(424)),t),t=wc(e,t,r,n,o);break e}else for(Ze=Gt(t.stateNode.containerInfo.firstChild),qe=t,oe=!0,gt=null,n=fd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qn(),r===o){t=At(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return gd(t),e===null&&ea(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Xl(r,o)?l=null:i!==null&&Xl(r,i)&&(t.flags|=32),Fd(e,t),Oe(e,t,l,n),t.child;case 6:return e===null&&ea(t),null;case 13:return Kd(e,t,n);case 4:return ts(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=er(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),mc(e,t,r,o,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Z(ri,r._currentValue),r._currentValue=l,i!==null)if(wt(i.value,l)){if(i.children===o.children&&!He.current){t=At(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Tt(-1,n&-n),s.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var u=g.pending;u===null?s.next=s:(s.next=u.next,u.next=s),g.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ta(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(j(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ta(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Oe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Xn(t,n),o=ct(o),r=r(o),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,o=pt(r,t.pendingProps),o=pt(r.type,o),xc(e,t,r,o,n);case 15:return $d(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),Ao(e,t),t.tag=1,Ye(r)?(e=!0,ei(t)):e=!1,Xn(t,n),Od(t,r,o),ra(t,r,o,n),la(null,t,r,!0,e,n);case 19:return Ud(e,t,n);case 22:return Id(e,t,n)}throw Error(j(156,t.tag))};function lf(e,t){return Lu(e,t)}function rg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new rg(e,t,n,r)}function ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function og(e){if(typeof e=="function")return ms(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Oa)return 11;if(e===Ma)return 14}return 2}function en(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ms(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Rn:return vn(n.children,o,i,t);case Ra:l=8,o|=8;break;case Nl:return e=at(12,n,t,o|2),e.elementType=Nl,e.lanes=i,e;case Cl:return e=at(13,n,t,o),e.elementType=Cl,e.lanes=i,e;case _l:return e=at(19,n,t,o),e.elementType=_l,e.lanes=i,e;case gu:return Ni(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pu:l=10;break e;case hu:l=9;break e;case Oa:l=11;break e;case Ma:l=14;break e;case Bt:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=at(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function vn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Ni(e,t,n,r){return e=at(22,e,r,t),e.elementType=gu,e.lanes=n,e.stateNode={isHidden:!1},e}function dl(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function fl(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ig(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function xs(e,t,n,r,o,i,l,a,s){return e=new ig(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=at(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},es(i),e}function lg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function af(e){if(!e)return nn;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ye(n))return ld(e,n,t)}return t}function sf(e,t,n,r,o,i,l,a,s){return e=xs(n,r,!0,e,o,i,l,a,s),e.context=af(null),n=e.current,r=Ae(),o=qt(n),i=Tt(r,o),i.callback=t??null,Jt(n,i,o),e.current.lanes=o,Gr(e,o,r),Qe(e,r),e}function Ci(e,t,n,r){var o=t.current,i=Ae(),l=qt(o);return n=af(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(o,t,l),e!==null&&(yt(e,o,l,i),Ro(e,o,l)),l}function pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ys(e,t){_c(e,t),(e=e.alternate)&&_c(e,t)}function ag(){return null}var cf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ws(e){this._internalRoot=e}_i.prototype.render=ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Ci(e,t,null,null)};_i.prototype.unmount=ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;En(function(){Ci(null,e,null,null)}),t[Ot]=null}};function _i(e){this._internalRoot=e}_i.prototype.unstable_scheduleHydration=function(e){if(e){var t=Iu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&Bu(e)}};function vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dc(){}function sg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var g=pi(l);i.call(g)}}var l=sf(t,r,e,0,null,!1,!1,"",Dc);return e._reactRootContainer=l,e[Ot]=l.current,$r(e.nodeType===8?e.parentNode:e),En(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var g=pi(s);a.call(g)}}var s=xs(e,0,!1,null,null,!1,!1,"",Dc);return e._reactRootContainer=s,e[Ot]=s.current,$r(e.nodeType===8?e.parentNode:e),En(function(){Ci(t,s,n,r)}),s}function Pi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=pi(l);a.call(s)}}Ci(t,l,e,o)}else l=sg(n,t,e,o,r);return pi(l)}Au=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yr(t.pendingLanes);n!==0&&(Ia(t,n|1),Qe(t,ue()),!(Y&6)&&(rr=ue()+500,ln()))}break;case 13:En(function(){var r=Mt(e,1);if(r!==null){var o=Ae();yt(r,e,1,o)}}),ys(e,1)}};Fa=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=Ae();yt(t,e,134217728,n)}ys(e,134217728)}};$u=function(e){if(e.tag===13){var t=qt(e),n=Mt(e,t);if(n!==null){var r=Ae();yt(n,e,t,r)}ys(e,t)}};Iu=function(){return X};Fu=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Il=function(e,t,n){switch(t){case"input":if(Ll(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=bi(r);if(!o)throw Error(j(90));xu(r),Ll(r,o)}}}break;case"textarea":wu(e,n);break;case"select":t=n.value,t!=null&&Vn(e,!!n.multiple,t,!1)}};Eu=ps;Nu=En;var cg={usingClientEntryPoint:!1,Events:[Zr,$n,bi,zu,ju,ps]},gr={findFiberByHostInstance:mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ug={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Du(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||ag,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{xi=Eo.inject(ug),jt=Eo}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cg;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vs(t))throw Error(j(200));return lg(e,t,null,n)};nt.createRoot=function(e,t){if(!vs(e))throw Error(j(299));var n=!1,r="",o=cf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=xs(e,1,!1,null,null,n,!1,r,o),e[Ot]=t.current,$r(e.nodeType===8?e.parentNode:e),new ws(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Du(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return En(e)};nt.hydrate=function(e,t,n){if(!Di(t))throw Error(j(200));return Pi(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!vs(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=cf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=sf(t,null,e,1,n??null,o,!1,i,l),e[Ot]=t.current,$r(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new _i(t)};nt.render=function(e,t,n){if(!Di(t))throw Error(j(200));return Pi(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!Di(e))throw Error(j(40));return e._reactRootContainer?(En(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};nt.unstable_batchedUpdates=ps;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Di(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Pi(e,t,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function uf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uf)}catch(e){console.error(e)}}uf(),cu.exports=nt;var dg=cu.exports,df,Pc=dg;df=Pc.createRoot,Pc.hydrateRoot;const fg="modulepreload",pg=function(e,t){return new URL(e,t).href},Lc={},vt=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(g=>{if(g=pg(g,r),g in Lc)return;Lc[g]=!0;const u=g.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!r)for(let v=l.length-1;v>=0;v--){const b=l[v];if(b.href===g&&(!u||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${h}`))return;const y=document.createElement("link");if(y.rel=u?"stylesheet":fg,u||(y.as="script"),y.crossOrigin="",y.href=g,s&&y.setAttribute("nonce",s),document.head.appendChild(y),u)return new Promise((v,b)=>{y.addEventListener("load",v),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${g}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};function hg(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:l}=e;let a,s;const g=async(h=!0)=>{await s};async function u(){if("serviceWorker"in navigator){if(a=await vt(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:h}},[],import.meta.url).then(({Workbox:h})=>new h("./sw.js",{scope:"./",type:"classic"})).catch(h=>{l==null||l(h)}),!a)return;a.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),a.addEventListener("installed",h=>{h.isUpdate||r==null||r()}),a.register({immediate:t}).then(h=>{i?i("./sw.js",h):o==null||o(h)}).catch(h=>{l==null||l(h)})}}return s=u(),g}const ya=(e,t)=>t.some(n=>e instanceof n);let Tc,Rc;function gg(){return Tc||(Tc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mg(){return Rc||(Rc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wa=new WeakMap,pl=new WeakMap,Li=new WeakMap;function xg(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",l)},i=()=>{n(bn(e.result)),o()},l=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",l)});return Li.set(t,e),t}function yg(e){if(wa.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",l),e.removeEventListener("abort",l)},i=()=>{n(),o()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",l),e.addEventListener("abort",l)});wa.set(e,t)}let va={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return wa.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ff(e){va=e(va)}function wg(e){return mg().includes(e)?function(...t){return e.apply(ba(this),t),bn(this.request)}:function(...t){return bn(e.apply(ba(this),t))}}function vg(e){return typeof e=="function"?wg(e):(e instanceof IDBTransaction&&yg(e),ya(e,gg())?new Proxy(e,va):e)}function bn(e){if(e instanceof IDBRequest)return xg(e);if(pl.has(e))return pl.get(e);const t=vg(e);return t!==e&&(pl.set(e,t),Li.set(t,e)),t}const ba=e=>Li.get(e);function bg(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const l=indexedDB.open(e,t),a=bn(l);return r&&l.addEventListener("upgradeneeded",s=>{r(bn(l.result),s.oldVersion,s.newVersion,bn(l.transaction),s)}),n&&l.addEventListener("blocked",s=>n(s.oldVersion,s.newVersion,s)),a.then(s=>{i&&s.addEventListener("close",()=>i()),o&&s.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),a}const kg=["get","getKey","getAll","getAllKeys","count"],Sg=["put","add","delete","clear"],hl=new Map;function Oc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(hl.get(t))return hl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Sg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||kg.includes(n)))return;const i=async function(l,...a){const s=this.transaction(l,o?"readwrite":"readonly");let g=s.store;return r&&(g=g.index(a.shift())),(await Promise.all([g[n](...a),o&&s.done]))[0]};return hl.set(t,i),i}ff(e=>({...e,get:(t,n,r)=>Oc(t,n)||e.get(t,n,r),has:(t,n)=>!!Oc(t,n)||e.has(t,n)}));const zg=["continue","continuePrimaryKey","advance"],Mc={},ka=new WeakMap,pf=new WeakMap,jg={get(e,t){if(!zg.includes(t))return e[t];let n=Mc[t];return n||(n=Mc[t]=function(...r){ka.set(this,pf.get(this)[t](...r))}),n}};async function*Eg(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const n=new Proxy(t,jg);for(pf.set(n,t),Li.set(n,ba(t));t;)yield n,t=await(ka.get(n)||t.continue()),ka.delete(n)}function Ac(e,t){return t===Symbol.asyncIterator&&ya(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&ya(e,[IDBIndex,IDBObjectStore])}ff(e=>({...e,get(t,n,r){return Ac(t,n)?Eg:e.get(t,n,r)},has(t,n){return Ac(t,n)||e.has(t,n)}}));const Ng="nachumin-diary",Cg=1,Yr="kv",_g="line-diary-entries-v1",Re="rooms-v1",Me=e=>`room-data-v1:${e}`,Dg=e=>`trash-v1:${e}:${Date.now()}`,Bo="declaration-v1",Qr="marks-v1",Pg=["・","❤︎","🩷","💛","🩵","💜","✨","✔︎"],hi=e=>`donelog-v1:${e}`,Ko=e=>`habits-v1:${e}`,hf=e=>`habitlog-v1:${e}`,gf=e=>`habitseed-v1:${e}`,Sa=e=>`period-v1:${e}`,Uo=e=>`symptoms-v1:${e}`,mf=e=>`symptomlog-v1:${e}`,xf=e=>`symptomseed-v1:${e}`,za=e=>`futurescript-v1:${e}`,Lm=(e,t)=>`albumfull-v1:${e}:${t}`,Tm=(e,t)=>`albumthumb-v1:${e}:${t}`,gl="albumseed-v1",Lg="album-main",ml="smartseed-v1",Tg="smart-main",xl="wordsseed-v1",Rg="words-main",yl="praiseseed-v1",Og="praise-main",wl="nowseed-v1",Mg="now-main",vl="futureseed-v1",Ag="future-main",$c="startroom-v1",bl="backup-v1",pe="diary-main",bs=bg(Ng,Cg,{upgrade(e){e.objectStoreNames.contains(Yr)||e.createObjectStore(Yr)}});async function U(e){return(await bs).get(Yr,e)}async function I(e,t){return(await bs).put(Yr,t,e)}async function Rm(e){return(await bs).delete(Yr,e)}async function Om(){try{if(navigator.storage&&navigator.storage.estimate)return await navigator.storage.estimate()}catch{}return null}async function $g(){try{navigator.storage&&navigator.storage.persist&&await navigator.storage.persist()}catch{}}async function Ig(){const e=await U(Re);if(e)return e;let t=await U(_g);if(typeof t=="string")try{t=JSON.parse(t)}catch{t=null}const n=t&&typeof t=="object"?t:{};await I(Me(pe),n);const r=Object.keys(n).sort(),o=r[r.length-1],i=[{id:pe,type:"diary",name:"日記",emoji:"💗",createdAt:Date.now(),lastAt:o?Date.now():0,preview:o?n[o].text.split(`
`)[0].slice(0,40):""}];return await I(Re,i),i}const Fg=5,Bg=Fg*60*60*1e3,yf=()=>new Date(Date.now()-Bg),tt=e=>String(e).padStart(2,"0"),mt=e=>`${e.getFullYear()}-${tt(e.getMonth()+1)}-${tt(e.getDate())}`,se=e=>e.split("-").join("/"),ke=e=>{const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},wf=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Mm=["S","M","T","W","T","F","S"],Kg=e=>`${se(e)} ${wf[ke(e).getDay()]}`,No=(e,t,n)=>1+(8-new Date(e,t-1,1).getDay())%7+(n-1)*7,Ug=e=>Math.floor(20.8431+.242194*(e-1980)-Math.floor((e-1980)/4)),Wg=e=>Math.floor(23.2488+.242194*(e-1980)-Math.floor((e-1980)/4)),kl={};function Vg(e){if(kl[e])return kl[e];const t={},n=(r,o,i)=>{t[`${e}-${tt(r)}-${tt(o)}`]=i};n(1,1,"元日"),n(1,No(e,1,2),"成人の日"),n(2,11,"建国記念の日"),n(2,23,"天皇誕生日"),n(3,Ug(e),"春分の日"),n(4,29,"昭和の日"),n(5,3,"憲法記念日"),n(5,4,"みどりの日"),n(5,5,"こどもの日"),n(7,No(e,7,3),"海の日"),n(8,11,"山の日"),n(9,No(e,9,3),"敬老の日"),n(9,Wg(e),"秋分の日"),n(10,No(e,10,2),"スポーツの日"),n(11,3,"文化の日"),n(11,23,"勤労感謝の日");for(const r of Object.keys(t)){const o=ke(r),i=new Date(o);i.setDate(i.getDate()+1);const l=new Date(o);l.setDate(l.getDate()+2),t[mt(l)]&&!t[mt(i)]&&i.getDay()!==0&&(t[mt(i)]="国民の休日")}for(const r of Object.keys({...t})){if(ke(r).getDay()!==0)continue;const o=ke(r);do o.setDate(o.getDate()+1);while(t[mt(o)]);t[mt(o)]="振替休日"}return kl[e]=t,t}const Hg=e=>!!Vg(Number(e.slice(0,4)))[e],Yg=e=>{if(Hg(e))return"sun";const t=ke(e).getDay();return t===0?"sun":t===6?"sat":""},Am=e=>"¥"+Math.round(Number(e)||0).toLocaleString("ja-JP"),$m=e=>e.slice(0,7),Im=(e,t)=>{const[n,r]=e.split("-");return(t&&Number(n)===t?"":`${n}年`)+`${Number(r)}月`},Ue=()=>mt(yf()),Ic=()=>{const e=yf();return e.setDate(e.getDate()-1),mt(e)},vf=()=>{const e=new Date;return`${e.getHours()}:${tt(e.getMinutes())}`},Qg=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Fm=e=>String(e||"").replace(/[\/\\:*?"<>| -]/g,"_").replace(/\s+/g," ").trim()||"room";async function Fc(e){try{return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.top="0",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}const Ge=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36),Bm=e=>Object.keys(e).sort().map(t=>`🩷${Kg(t)}🩷 ${e[t].time}
${e[t].text}`).join(`

──────────

`),Km=e=>{const t={},n=e.split(/\n*─{3,}\n*/);for(const r of n){const o=r.trim();if(!o)continue;const i=o.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*(?:[（(]?(?:[A-Za-z]{3}|[日月火水木金土])[)）]?)?\s*🩷?\s*(\d{1,2}:\d{2})?\s*\n?([\s\S]*)$/u);if(!i)continue;const l=`${i[1]}-${tt(Number(i[2]))}-${tt(Number(i[3]))}`,a=i[5].trim();a&&(t[l]={text:a,time:i[4]||"0:00"})}return t},Um=(e,t)=>{const n=[];let r="";for(const o of e)o.dateKey!==r&&(r=o.dateKey,n.length&&n.push(""),n.push(`🩷${se(r)}🩷`)),n.push(`${o.time?o.time+" ":""}${t(o.memberId)}「${o.text}」`);return n.join(`
`)},Wm=e=>{const t=[];let n=Ue(),r=null;const o=()=>{if(!r)return;let i=r.lines.join(`
`).trim();i.endsWith("」")&&(i=i.slice(0,-1)),i&&t.push({dateKey:r.dateKey,name:r.name,time:r.time,text:i}),r=null};for(const i of e.split(`
`)){const l=i.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(l){o(),n=`${l[1]}-${tt(Number(l[2]))}-${tt(Number(l[3]))}`;continue}if(r)r.lines.push(i);else{const s=i.match(/^(?:(\d{1,2}:\d{2})\s+)?(.+?)「([\s\S]*)$/u);if(!s)continue;r={dateKey:n,name:s[2].trim(),time:s[1]||"",lines:[s[3]]}}const a=r.lines[r.lines.length-1].trimEnd();a.endsWith("」")&&(r.lines[r.lines.length-1]=a,o())}return o(),t},Xg=[{key:"morning",label:"朝",emoji:"🌅"},{key:"noon",label:"昼",emoji:"☀️"},{key:"night",label:"夜",emoji:"🌙"}],Vm=()=>{const e=new Date().getHours();return e>=5&&e<11?"morning":e>=11&&e<17?"noon":"night"},Hm=(e,t)=>{var i;const n=l=>{var a;return((a=t.find(s=>s.id===l))==null?void 0:a.name)||"？"},r={};for(const l of e)(r[i=l.dateKey]||(r[i]={morning:[],noon:[],night:[]}))[l.slot].push(l);const o=[];for(const l of Object.keys(r).sort()){const a=[];for(const s of Xg){const g=r[l][s.key];if(!g.length)continue;const u=g.map(h=>n(h.memberId)+(h.memo&&h.memo.trim()?`(${h.memo.trim()})`:"")).join("・");a.push(`${s.emoji}${s.label}:${u}`)}a.length&&o.push(`🩷${se(l)}🩷 ${a.join(" / ")}`)}return o.join(`
`)},Ym=e=>{const t=[],n=r=>r.includes("朝")?"morning":r.includes("昼")?"noon":r.includes("夜")?"night":null;for(const r of e.split(`
`)){const o=r.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(.*)$/u);if(!o)continue;const i=`${o[1]}-${tt(Number(o[2]))}-${tt(Number(o[3]))}`,l=o[4];if(l.trim())for(const a of l.split("/")){const s=a.indexOf(":"),g=a.indexOf("："),u=s===-1?g:g===-1?s:Math.min(s,g);if(u===-1)continue;const h=n(a.slice(0,u));if(!h)continue;const p=a.slice(u+1);for(const y of p.split("・")){const v=y.trim().match(/^(.+?)(?:[(（]([\s\S]*)[)）])?$/u);if(!v)continue;const b=v[1].trim();b&&t.push({dateKey:i,slot:h,name:b,memo:(v[2]||"").trim()})}}}return t},Qm=e=>{var n;const t={};for(const r of e)(t[n=r.dateKey]||(t[n]={morning:[],noon:[],night:[]}))[r.slot].push(r);return t},Xm=(e,t)=>{let n=t;for(const l of e)l.dateKey<n&&(n=l.dateKey);ke(t);const r=ke(t);r.setDate(r.getDate()-34);const o=ke(n)<r?ke(n):r,i=[];for(let l=new Date(o);mt(l)<=t;l.setDate(l.getDate()+1))i.push(mt(l));return i},Gm=e=>{const t=[];for(const n of String(e||"").split(`
`)){let r=n.trim();r&&(/^🩷?\s*\d{4}[/-]\d{1,2}[/-]\d{1,2}\s*🩷?\s*$/u.test(r)||(r=r.replace(/^[★☆☐☑✓□■●○・\-*+•‣▪️\s]+/u,"").trim(),r&&t.push(r)))}return t},Jm=e=>{const t=[];let n=Ue();for(const r of e.split(`
`)){const o=r.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(o){n=`${o[1]}-${tt(Number(o[2]))}-${tt(Number(o[3]))}`;continue}const i=r.match(/^\s*(★\s*)?([☑☐✓])\s+(.+)$/u);if(!i)continue;const l=!!i[1],a=i[2]==="☑"||i[2]==="✓",s=i[3].trim();s&&t.push({dateKey:n,text:s,done:a,important:l})}return t},Gg="🩷 できたこと",Zm=e=>{const t=(e||"").split(`
`),n=t.indexOf(Gg);if(n===-1)return{text:e||"",items:[]};const r=[];let o=n+1;for(;o<t.length&&t[o].startsWith("☑ ");){const a=t[o].match(/^☑ (.*?)(?: \((\d{1,2}:\d{2})\))?$/u);a&&r.push({text:a[1],time:a[2]||""}),o++}let i=n;return i-1>=0&&t[i-1]===""&&(i-=1),t.splice(i,o-i),{text:t.join(`
`).replace(/\n{3,}/g,`

`).replace(/\s+$/,""),items:r}},bf="🎬 今日のコマ: ",Jg=e=>(e||"").split(`
`).filter(t=>!t.startsWith(bf)).join(`
`).replace(/^\n+/,""),Zg=(e,t)=>{const n=Jg(e).trim(),r=bf+t;return n?`${r}

${n}`:r},gi=(e,t)=>{const n=ke(e);return n.setDate(n.getDate()+t),mt(n)},ja=(e,t)=>Math.round((ke(t)-ke(e))/864e5),Bc=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(String(e||""));if(!t)return 99999;const n=Number(t[1]);return(n<5?n+24:n)*60+Number(t[2])},qm=(e,t)=>{const n=ke(e),r=n.getDate();n.setDate(1),n.setMonth(n.getMonth()+t);const o=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return n.setDate(Math.min(r,o)),mt(n)},ex=e=>{if(e<12)return`${e}ヶ月後`;const t=Math.floor(e/12),n=e%12;return n===0?`${t}年後`:n===6?`${t}年半後`:`${t}年${n}ヶ月後`},tx=e=>{const t=[...new Set(e||[])].sort();if(!t.length)return[];const n=[];for(const o of t){const i=n[n.length-1];i&&gi(i.end,1)===o?i.end=o:n.push({start:o,end:o})}return n.map((o,i)=>({start:o.start,end:o.end,length:ja(o.start,o.end)+1,cycle:i<n.length-1?ja(o.start,n[i+1].start):null,ongoing:i===n.length-1})).reverse()},nx=(e,t,n=3)=>{const r=e.filter(s=>s.cycle!=null).map(s=>s.cycle);if(!r.length||!e.length)return null;const o=r.slice(0,n),i=Math.round(o.reduce((s,g)=>s+g,0)/o.length),l=e[0].start,a=gi(l,i);return{next:a,avg:i,daysLeft:ja(t,a),min:Math.min(...r),max:Math.max(...r),count:r.length}},qg={morning:"🌅",noon:"☀️",night:"🌙"},Sl="nachumin-diary-backup.json";function em(e){if(!e||typeof e!="object"||Array.isArray(e))return"バックアップの形式が読めませんでした 🥺";if(e.app!=="nachumin-diary")return"これは Nachumin Lifelog のバックアップファイルではないみたい 🥺";if(!Array.isArray(e.rooms))return"ルームの情報が入っていません。ファイルが壊れているかも 🥺";if(e.rooms.some(t=>!t||typeof t!="object"||!t.id||!t.type))return"ルームの形式が壊れています 🥺";if(e.data!=null&&(typeof e.data!="object"||Array.isArray(e.data)))return"ルームの中身の形式が壊れています 🥺";for(const t of["doneLogs","habits","habitLogs","habitSeeds","periods","symptoms","symptomLogs","symptomSeeds","futureScripts"])if(e[t]!=null&&(typeof e[t]!="object"||Array.isArray(e[t])))return`${t} の形式が壊れています 🥺`;return null}function tm(e){const t={rooms:(e.rooms||[]).length,items:0},n=r=>r==="talk"?"messages":r==="todo"?"todos":r==="darelog"?"records":r==="expense"?"expenses":r==="challenge"?"challenges":r==="future"?"opened":r==="now"?"posts":r==="album"?"pages":r==="smart"?"items":r==="words"||r==="praise"?"words":null;for(const r of e.rooms||[]){const o=e.data?e.data[r.id]:void 0;if(!o)continue;const i=n(r.type);t.items+=i?(o[i]||[]).length:Object.keys(o).length}return t}function zl(e,t){var i,l;if(e.type==="talk"){const a=t&&t.messages||[],s=a[a.length-1];return{previewName:s?(u=>{var h;return((h=(e.members||[]).find(p=>p.id===u))==null?void 0:h.name)||""})(s.memberId):"",preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="todo"){const a=t&&t.todos||[],s=a[a.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?`${s.done?"☑":"☐"} ${s.text.split(`
`)[0]}`.slice(0,40):"",todoOpen:a.filter(g=>!g.done&&!g.deferred).length,lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="darelog"){const a=t&&t.records||[],s=a[a.length-1],g=u=>{var h;return((h=(e.members||[]).find(p=>p.id===u))==null?void 0:h.name)||""};return{preview:s?`${qg[s.slot]||""} ${g(s.memberId)}`.trim():"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="challenge"){const a=t&&t.challenges||[],s=[...a].sort((g,u)=>{var h,p;return(((h=u.records)==null?void 0:h.length)||0)-(((p=g.records)==null?void 0:p.length)||0)})[0];return{preview:s?`${s.emoji||"🏁"} ${s.name} ${((i=s.records)==null?void 0:i.length)||0}/${s.target}`:"",lastAt:e.lastAt||(a.length?Date.now():0)}}if(e.type==="expense"){const a=t&&t.expenses||[],s=a[a.length-1];return{preview:s?`${(u=>{var h;return((h=(e.categories||[]).find(p=>p.id===u))==null?void 0:h.name)||""})(s.categoryId)} ¥${(s.amount||0).toLocaleString("ja-JP")}`:"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="album"){const a=t&&t.pages||[];return{preview:a.length?`${a.length}枚`:"",lastAt:e.lastAt||0}}if(e.type==="smart"){const s=[...t&&t.items||[]].sort((g,u)=>(g.at||0)-(u.at||0)).pop();return{preview:s?`${s.score?s.score+"点 ":""}${s.text}`.slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="words"||e.type==="praise"){const s=[...t&&t.words||[]].sort((g,u)=>(g.at||0)-(u.at||0)).pop();return{preview:s?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="now"){const s=[...t&&t.posts||[]].sort((g,u)=>(g.at||0)-(u.at||0)).pop();return{preview:s&&typeof s.text=="string"?`${s.time} ${s.text.split(`
`)[0]}`.slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="future"){const a=t&&t.opened||[],s=a[a.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}const n=t&&typeof t=="object"?t:{},r=Object.keys(n).sort(),o=r[r.length-1];return{preview:typeof((l=n[o])==null?void 0:l.text)=="string"?n[o].text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(o?Date.now():0)}}async function Kc(){const e=await U(Re)||[],t={};for(const y of e){const v=await U(Me(y.id));v!==void 0&&(t[y.id]=v)}const n=await U(Bo)||null,r={},o={},i={},l={},a={},s={},g={},u={},h={};for(const y of e){const v=await U(hi(y.id));v&&Object.keys(v).length&&(r[y.id]=v);const b=await U(Ko(y.id));Array.isArray(b)&&b.length&&(o[y.id]=b);const P=await U(hf(y.id));P&&Object.keys(P).length&&(i[y.id]=P),await U(gf(y.id))&&(l[y.id]=!0);const m=await U(Sa(y.id));Array.isArray(m==null?void 0:m.days)&&m.days.length&&(a[y.id]=m.days);const f=await U(Uo(y.id));Array.isArray(f)&&f.length&&(s[y.id]=f);const x=await U(mf(y.id));x&&Object.keys(x).length&&(g[y.id]=x),await U(xf(y.id))&&(u[y.id]=!0);const w=await U(za(y.id));Array.isArray(w)&&w.length&&(h[y.id]=w)}const p=await U(Qr)||null;return{app:"nachumin-diary",version:1,exportedAt:new Date().toISOString(),rooms:e,data:t,declaration:n,doneLogs:r,habits:o,habitLogs:i,habitSeeds:l,periods:a,symptoms:s,symptomLogs:g,symptomSeeds:u,futureScripts:h,marks:p}}const nm=e=>e.map((t,n)=>[t,n]).sort((t,n)=>t[0].dateKey<n[0].dateKey?-1:t[0].dateKey>n[0].dateKey?1:t[1]-n[1]).map(([t])=>t);async function rm(e){var s,g;if(!e||e.app!=="nachumin-diary"||!Array.isArray(e.rooms))throw new Error("invalid-backup");const t=await U(Re)||[],n=new Map(t.map(u=>[u.id,{...u}]));let r=0,o=0;for(const u of e.rooms){const h=e.data?e.data[u.id]:void 0,p=u.type==="talk"?"messages":u.type==="todo"?"todos":u.type==="darelog"?"records":u.type==="expense"?"expenses":u.type==="challenge"?"challenges":u.type==="future"?"opened":u.type==="now"?"posts":u.type==="album"?"pages":u.type==="smart"?"items":u.type==="words"||u.type==="praise"?"words":null,y=b=>p==="messages"?`${b.dateKey} ${b.memberId} ${b.text}`:p==="todos"?`${b.dateKey} ${b.text}`:p==="records"?`${b.dateKey} ${b.slot} ${b.memberId}`:b.id;if(!n.has(u.id)){h!==void 0&&await I(Me(u.id),h),n.set(u.id,{...u,...zl(u,h)}),r+=1,p?o+=((s=h==null?void 0:h[p])==null?void 0:s.length)||0:o+=h?Object.keys(h).length:0;continue}const v=n.get(u.id);if(p){const b=await U(Me(u.id))||{},P=b[p]||[],m=new Set(P.map(y));let f=P.slice();for(const z of(h==null?void 0:h[p])||[])m.has(y(z))||(m.add(y(z)),f.push(z),o+=1);p==="messages"&&(f=nm(f));const x={...b,[p]:f};for(const z of Object.keys(h||{}))z!==p&&x[z]===void 0&&(x[z]=h[z]);await I(Me(u.id),x);let w={...v};if(u.type==="talk"||u.type==="darelog"){const z=v.members||[],_=new Set(z.map(L=>L.id));w.members=z.concat((u.members||[]).filter(L=>!_.has(L.id)))}n.set(u.id,{...w,...zl(w,x)})}else{const P={...await U(Me(u.id))||{}};for(const m of Object.keys(h||{}))P[m]||(P[m]=h[m],o+=1);await I(Me(u.id),P),n.set(u.id,{...v,...zl(v,P)})}}if(e.doneLogs)for(const[u,h]of Object.entries(e.doneLogs)){const p=hi(u),v={...await U(p)||{}};for(const[b,P]of Object.entries(h)){const m=(v[b]||[]).slice();for(const f of P)m.some(x=>x.text===f.text&&x.time===f.time)||m.push(f);v[b]=m}await I(p,v)}const i={};if(e.habits)for(const[u,h]of Object.entries(e.habits)){if(!Array.isArray(h))continue;const p=await U(Ko(u));if(p===void 0){await I(Ko(u),h);continue}const y=Array.isArray(p)?p:[],v=new Set(y.map(f=>f.id)),b=new Map(y.filter(f=>(f.name||"").trim()).map(f=>[f.name.trim(),f.id])),P=y.slice(),m={};for(const f of h){if(!f||!f.id)continue;if(v.has(f.id)){m[f.id]=f.id;continue}const x=(f.name||"").trim(),w=x?b.get(x):null;if(w){m[f.id]=w;continue}P.push(f),v.add(f.id),x&&b.set(x,f.id),m[f.id]=f.id}P.length!==y.length&&await I(Ko(u),P),i[u]=m}if(e.habitSeeds)for(const u of Object.keys(e.habitSeeds))e.habitSeeds[u]&&await I(gf(u),!0);if(e.periods)for(const[u,h]of Object.entries(e.periods)){if(!Array.isArray(h))continue;const p=((g=await U(Sa(u)))==null?void 0:g.days)||[];await I(Sa(u),{days:[...new Set([...p,...h])].sort()})}const l={};if(e.symptoms)for(const[u,h]of Object.entries(e.symptoms)){if(!Array.isArray(h))continue;const p=await U(Uo(u));if(p===void 0){await I(Uo(u),h);continue}const y=Array.isArray(p)?p:[],v=new Set(y.map(f=>f.id)),b=new Map(y.filter(f=>(f.name||"").trim()).map(f=>[f.name.trim(),f.id])),P=y.slice(),m={};for(const f of h){if(!f||!f.id)continue;if(v.has(f.id)){m[f.id]=f.id;continue}const x=(f.name||"").trim(),w=x?b.get(x):null;if(w){m[f.id]=w;continue}P.push(f),v.add(f.id),x&&b.set(x,f.id),m[f.id]=f.id}P.length!==y.length&&await I(Uo(u),P),l[u]=m}if(e.symptomSeeds)for(const u of Object.keys(e.symptomSeeds))e.symptomSeeds[u]&&await I(xf(u),!0);if(e.futureScripts)for(const[u,h]of Object.entries(e.futureScripts)){if(!Array.isArray(h)||!h.length)continue;const p=await U(za(u))||[],y=new Set(p.map(b=>b.id)),v=h.filter(b=>b&&b.id&&!y.has(b.id));v.length&&(await I(za(u),[...p,...v]),o+=v.length)}if(e.symptomLogs)for(const[u,h]of Object.entries(e.symptomLogs)){const p=mf(u),v={...await U(p)||{}},b=l[u]||{};for(const[P,m]of Object.entries(h)){const f=(m||[]).map(x=>b[x]||x);v[P]=[...new Set([...v[P]||[],...f])]}await I(p,v)}if(e.habitLogs)for(const[u,h]of Object.entries(e.habitLogs)){const p=i[u]||{},y=hf(u),b={...await U(y)||{}};for(const[P,m]of Object.entries(h)){const f=(m||[]).map(x=>p[x]||x);b[P]=[...new Set([...b[P]||[],...f])]}await I(y,b)}if(Array.isArray(e.marks)&&e.marks.length){const u=await U(Qr);(!Array.isArray(u)||!u.length)&&await I(Qr,e.marks)}const a=[...n.values()];return await I(Re,a),{addedRooms:r,addedItems:o,rooms:a}}const pn="M12 20.5s-7.5-5-7.5-10a4.2 4.2 0 0 1 7.5-2.6A4.2 4.2 0 0 1 19.5 10.5c0 5-7.5 10-7.5 10z",om=`<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>
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
</svg>`,Co=`url("data:image/svg+xml,${encodeURIComponent(om)}")`,rx=["#ffffff","#fff5fa","#ffd9ec","#ffc4e1","#ff9fd0","#e0629f","#d4f0ff","#c9f5f2","#d9ffe3","#e8dcff","#f0f0f0","#2b2430"],ox=["#9C27B0","#E91E63","#FFEB3B","#2196F3","#4CAF50","#FF9800","#F44336","#00BCD4","#3F51B5","#8BC34A","#FF4081","#009688"],Ea=["#ff6fb2","#c58cff","#6fb8ff","#5fd6b0","#ffcf5f","#ff9d6f","#7ed957","#ff8fa8"],vr=Ea[0],Uc=e=>{const t=e||vr;return{background:`linear-gradient(163deg, #ffffff 0%, #fff6fb 40%, ${t}2e 100%)`,boxShadow:`0 6px 13px ${t}42, 0 2px 0 ${t}66, inset 0 1.5px 0 #ffffff`,borderColor:`${t}55`}},ix=[{key:"auto",label:"自動",value:null},{key:"white",label:"白",value:"#ffffff"},{key:"black",label:"黒",value:"#222028"},{key:"pink",label:"ピンク",value:"#ff2d87"}],im=e=>{const t=String(e).replace("#","");if(t.length<6)return"#4a3140";const n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),o=parseInt(t.slice(4,6),16);return .299*n+.587*r+.114*o<140?"#fff5fa":"#4a3140"},lx=e=>e&&e.textColor?e.textColor:im(e&&e.color),Wc=`
  * { box-sizing: border-box; }
  .app {
    height: 100vh; height: 100dvh;
    display: flex; flex-direction: column;
    font-family: "Hiragino Maru Gothic ProN", "Hiragino Kaku Gothic ProN",
      "Yu Gothic", sans-serif;
    background: ${Co} #f6bedd; background-size: 240px 240px;
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
  /* ---------- ✨ なうのふりかえり ---------- */
  .rf-panel { max-height: 86vh; display: flex; flex-direction: column; }
  .rf-make {
    display: flex; flex-direction: column; align-items: center; gap: 3px; width: 100%;
    padding: 13px 0; border-radius: 18px; border: none; cursor: pointer; color: #fff;
    font-size: 17px; font-weight: 900;
    background: linear-gradient(120deg,#ff1493,#ff00aa 55%,#c33bff);
    box-shadow: 0 0 0 2px #fff, 0 0 18px rgba(255,0,170,.55);
  }
  .rf-make small { font-size: 11.5px; font-weight: 800; opacity: .9; }
  .rf-make:disabled { flex-direction: row; justify-content: center; gap: 8px; opacity: .85; cursor: default; }
  .rf-note { font-size: 11px; color: #a4517f; text-align: center; margin: 7px 0 10px; }
  .rf-list { flex: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; }
  .rf-card {
    background: #fff; border: 2px solid #ffc2e0; border-radius: 16px; padding: 10px 12px;
    box-shadow: 0 4px 14px rgba(255,20,147,.14);
  }
  .rf-range {
    display: inline-flex; align-items: baseline; gap: 6px; margin-bottom: 6px;
    padding: 3px 11px; border-radius: 999px; color: #fff; font-size: 13px; font-weight: 900;
    background: linear-gradient(120deg,#ff1493,#c33bff);
  }
  .rf-range small { font-size: 10.5px; opacity: .85; }
  .rf-text { font-size: 14px; line-height: 1.7; color: #3d1f33; white-space: pre-wrap; overflow-wrap: anywhere; }
  .rf-acts { display: flex; justify-content: flex-end; gap: 12px; margin-top: 6px; }
  .rf-acts button {
    background: none; border: none; color: #d6317f; font-size: 12px; font-weight: 800;
    text-decoration: underline; cursor: pointer; padding: 4px 2px;
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
    background: ${Co} #f6bedd; background-size: 240px 240px;
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
    background: ${Co} #f6bedd; background-size: 240px 240px;
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
    background: ${Co} #f6bedd; background-size: 240px 240px;
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
`;function lm(e,t=500){const n=E.useRef({}),r=l=>{if(typeof e!="function"||l.touches&&l.touches.length!==1)return;const a=l.touches?l.touches[0]:l;n.current.x=a.clientX,n.current.y=a.clientY,n.current.fired=!1,clearTimeout(n.current.timer),n.current.timer=setTimeout(()=>{n.current.fired=!0;try{navigator.vibrate&&navigator.vibrate(15)}catch{}e({x:n.current.x,y:n.current.y})},t)},o=l=>{const a=l.touches?l.touches[0]:l;(Math.abs(a.clientX-n.current.x)>10||Math.abs(a.clientY-n.current.y)>10)&&clearTimeout(n.current.timer)},i=()=>clearTimeout(n.current.timer);return{onTouchStart:r,onTouchMove:o,onTouchEnd:i,onTouchCancel:i,onContextMenu:l=>{typeof e=="function"&&(l.preventDefault(),e({x:l.clientX,y:l.clientY}))},onClickCapture:l=>{n.current.fired&&(l.stopPropagation(),l.preventDefault(),n.current.fired=!1)}}}function Vc({onLongPress:e,longPressMs:t,children:n,...r}){const o=lm(e,t);return c.jsx("div",{...r,...o,children:n})}function am({x:e,y:t,onCopy:n,onEdit:r,onDelete:o,onClose:i,top:l,extra:a}){const u=E.useRef(null),[h,p]=E.useState(null);return E.useLayoutEffect(()=>{const y=u.current;if(!y)return;const v=y.offsetHeight,b=window.innerWidth,P=window.innerHeight,m=Math.max(8,Math.min(e-168/2,b-168-8));let f=t+8;f+v>P-8&&(f=t-8-v),f<8&&(f=Math.max(8,P-v-8)),p({left:m,top:f})},[e,t,l,a,r,o]),c.jsx("div",{className:"ctx-overlay",onClick:i,onContextMenu:y=>y.preventDefault(),children:c.jsxs("div",{ref:u,className:"ctx-menu",style:{left:h?h.left:Math.max(8,Math.min(e-168/2,window.innerWidth-168-8)),top:h?h.top:t+8,width:168,maxHeight:`calc(100vh - ${8*2}px)`,overflowY:"auto",visibility:h?"visible":"hidden"},onClick:y=>y.stopPropagation(),children:[(l||[]).map((y,v)=>c.jsx("button",{className:"ctx-item ctx-top",onClick:y.onClick,children:y.label},v)),c.jsx("button",{className:"ctx-item",onClick:n,children:"📋 コピー"}),r&&c.jsx("button",{className:"ctx-item",onClick:r,children:"✏️ 編集"}),(a||[]).map((y,v)=>c.jsx("button",{className:"ctx-item",onClick:y.onClick,children:y.label},v)),o&&c.jsx("button",{className:"ctx-item ctx-del",onClick:o,children:"🗑 削除"})]})})}function kf({message:e,confirmLabel:t="削除する",onConfirm:n,onCancel:r}){return c.jsx("div",{className:"overlay confirm-over",onClick:r,children:c.jsxs("div",{className:"panel confirm-panel",onClick:o=>o.stopPropagation(),children:[c.jsx("div",{className:"confirm-msg",children:e}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-close",onClick:r,children:"キャンセル"}),c.jsx("button",{className:"p-del arm",onClick:n,children:t})]})]})})}function sm(e=!0){const[t,n]=E.useState(0);return E.useEffect(()=>{if(!e||!window.visualViewport){n(0);return}const r=window.visualViewport,o=()=>n(Math.max(0,window.innerHeight-r.height-r.offsetTop));return o(),r.addEventListener("resize",o),r.addEventListener("scroll",o),()=>{r.removeEventListener("resize",o),r.removeEventListener("scroll",o)}},[e]),t}const Hc=/https?:\/\/[^\s　-〿぀-ヿ一-鿿＀-￯]+/g,cm=/[.,;:、。）)\]】」』"'！？!?]+$/;function Yc(e,t=n=>n){if(!e)return e;const n=[];let r=0,o=0,i;for(Hc.lastIndex=0;i=Hc.exec(e);){let l=i[0];const a=(l.match(cm)||[""])[0];a&&(l=l.slice(0,l.length-a.length)),l&&(i.index>r&&n.push(c.jsx(E.Fragment,{children:t(e.slice(r,i.index))},o++)),n.push(c.jsx("a",{className:"body-link",href:l,target:"_blank",rel:"noopener noreferrer",onClick:s=>s.stopPropagation(),children:l},o++)),r=i.index+l.length)}return n.length?(r<e.length&&n.push(c.jsx(E.Fragment,{children:t(e.slice(r))},o++)),n):t(e)}function um({wrong:e,onSubmit:t,onCancel:n}){const[r,o]=E.useState("");return c.jsx("div",{className:"overlay",onClick:n,children:c.jsxs("div",{className:"panel",onClick:i=>i.stopPropagation(),children:[c.jsx("h3",{children:"🔑 合言葉"}),c.jsxs("div",{className:"wd-bell-note",children:[e?"合言葉がちがうみたい。もう一度入れてね。":"AIを使う機能の合言葉を入れてね。",c.jsx("br",{}),"このスマホに覚えるので、入れるのは最初の1回だけ。"]}),c.jsx("input",{className:"f-input",type:"password",autoFocus:!0,autoComplete:"off",value:r,onChange:i=>o(i.target.value)}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",disabled:!r.trim(),onClick:()=>t(r.trim()),children:"OK"}),c.jsx("button",{className:"p-close",onClick:n,children:"もどる"})]})]})})}const dm=location.hostname==="localhost"?"http://localhost:8788/api/":"https://lifelog-push.pages.dev/api/",Sf="readpass-v1",fm=()=>U(Sf).catch(()=>null),jl=e=>I(Sf,e||null);async function pm(e,t,n){let r;try{r=await fetch(dm+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...t,pass:n})})}catch{throw new Error("net")}const o=await r.json().catch(()=>({}));if(r.status===401)throw new Error("pass");if(r.status===429)throw new Error("limit");if(!r.ok)throw new Error(o.error||"ai");return o}async function hm(e,t,n){let r=await fm();for(let o=0;o<3;o++){if(!r&&(r=await n(o>0),!r))throw new Error("cancel");try{const i=await pm(e,t,r);return await jl(r),i}catch(i){if(i.message!=="pass")throw i.message!=="net"&&await jl(r),i;await jl(null),r=null}}throw new Error("pass")}const Qc=150,Xc=(e,t)=>Bc(e.time)-Bc(t.time)||(e.at||0)-(t.at||0),gm=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(e||"");return t?`${t[1].padStart(2,"0")}:${t[2]}`:""},mm=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(e||"");return t?`${Number(t[1])}:${t[2]}`:""};function xm({room:e,onBack:t,onMeta:n,showToast:r,pinned:o,onOpenDiary:i}){const[l,a]=E.useState([]),[s,g]=E.useState(!1),[u,h]=E.useState(""),[p,y]=E.useState(()=>Ic()),[v,b]=E.useState(null),[P,m]=E.useState(null),[f,x]=E.useState(null),[w,z]=E.useState(null),[_,L]=E.useState(76),[T,W]=E.useState(e.nowView==="gallery"?"gallery":"time"),[A,J]=E.useState(Number(e.nowCols)===3?3:2),[Pe,de]=E.useState(Qc),[je,Nt]=E.useState([]),[fe,Le]=E.useState(null),[R,F]=E.useState(null),B=E.useRef(null),Q=E.useRef(null),te=E.useRef(null),Te=E.useRef({}),Fe=E.useRef([]),It=sm(!P&&!fe),xe=Ue();E.useEffect(()=>{(async()=>{try{const S=await U(Me(e.id));if(S&&typeof S=="object"){const{posts:O,...ne}=S;Te.current=ne,Array.isArray(ne.reports)&&Nt(ne.reports),Array.isArray(O)&&(Fe.current=O,a(O))}}catch{}finally{g(!0)}})()},[e.id]),E.useEffect(()=>{if(!Q.current||typeof ResizeObserver>"u")return;const S=new ResizeObserver(()=>Q.current&&L(Q.current.offsetHeight));return S.observe(Q.current),()=>S.disconnect()},[P]);const Xe=S=>{const O=B.current;O&&O.scrollTo({top:O.scrollHeight,behavior:S?"smooth":"auto"})};E.useEffect(()=>{s&&T==="time"&&Xe(!1)},[s,T]);const ve=async S=>{Fe.current=S,a(S);try{await I(Me(e.id),{...Te.current,posts:S});const O=[...S].sort((ne,dt)=>(ne.at||0)-(dt.at||0)).pop();n({preview:O?`${O.time} ${O.text.split(`
`)[0]}`.slice(0,40):"",lastAt:Date.now()})}catch{r("保存に失敗しました。ストレージを確認してね")}},_n=async S=>{Te.current={...Te.current,reports:S},Nt(S);try{await I(Me(e.id),{...Te.current,posts:Fe.current})}catch{r("保存に失敗しました。ストレージを確認してね")}},Ct=gi(Ue(),-6),an=l.filter(S=>S.dateKey>=Ct&&S.dateKey<=Ue()).sort((S,O)=>S.dateKey<O.dateKey?-1:S.dateKey>O.dateKey?1:Xc(S,O)),bt=S=>new Promise(O=>F({wrong:S,resolve:O})),sn=async()=>{if(!an.length){r("この7日のなうがまだないよ");return}Le({busy:!0});const S=Ue();try{const O=await hm("reflect",{from:Ct,to:S,posts:an.map(ne=>({dateKey:ne.dateKey,time:ne.time,text:ne.text}))},bt);if(!O.text)throw new Error("ai");await _n([{id:Ge(),from:Ct,to:S,count:an.length,text:O.text,at:Date.now()},...je])}catch(O){O.message!=="cancel"&&r({limit:"今日のふりかえりは上限に達しました",net:"つながりませんでした。電波を確認してね",pass:"合言葉が合いませんでした"}[O.message]||"ふりかえりを作れませんでした")}Le({busy:!1})},Ti=S=>{x({message:`${se(S.from).slice(5)}〜${se(S.to).slice(5)} のふりかえりを削除しますか？`,onConfirm:()=>{_n(je.filter(O=>O.id!==S.id)),x(null)}})},Dn=()=>{const S=u.trim();if(!S)return;const O={id:Ge(),dateKey:Ue(),time:vf(),text:S,at:Date.now()};ve([...l,O]),h(""),te.current&&(te.current.style.height="auto"),z(O.id),setTimeout(()=>z(null),900),T==="time"&&requestAnimationFrame(()=>Xe(!0))},eo=S=>{S.key==="Enter"&&!S.shiftKey&&!S.nativeEvent.isComposing&&S.keyCode!==229&&(S.preventDefault(),Dn())},to=S=>{h(S.target.value);const O=S.target;O.style.height="auto",O.style.height=Math.min(O.scrollHeight,120)+"px"},no=()=>{const S=P.text.trim(),O=mm(P.time);if(!S){r("なにしてたか書いてね");return}if(!O){r("時刻を入れてね");return}ve(l.map(ne=>ne.id===P.id?{...ne,text:S,time:O}:ne)),m(null)},G=S=>{const O=l.find(dt=>dt.id===S);if(!O)return;const ne=O.text.length>20?O.text.slice(0,20)+"…":O.text;x({message:`${O.time}「${ne}」を削除しますか？`,onConfirm:()=>{ve(l.filter(dt=>dt.id!==S)),x(null),m(null)}})},cn={};for(const S of l)(cn[S.dateKey]=cn[S.dateKey]||[]).push(S);const ro=Object.keys(cn).sort(),ar=ro.filter(S=>S>=p);ar.includes(xe)||ar.push(xe);const oo=ro.filter(S=>S<p).length,Ri=(cn[xe]||[]).length,Oi=S=>{const O=`${se(S).slice(5)} ${wf[ke(S).getDay()]}`;return S===xe?`今日 ${O}`:S===Ic()?`昨日 ${O}`:O},io=S=>{W(S),n({nowView:S})},Mi=S=>{J(S),n({nowCols:S})},un=[...l].sort((S,O)=>S.dateKey<O.dateKey?1:S.dateKey>O.dateKey?-1:(O.at||0)-(S.at||0)),dn=un.slice(0,Pe),Ee=v&&l.find(S=>S.id===v.id);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"hd",children:[c.jsx("button",{className:"back-btn","aria-label":"もどる",onClick:t,children:"‹"}),c.jsx("span",{style:{fontSize:20},children:e.emoji}),c.jsxs("div",{style:{minWidth:0},children:[c.jsx("div",{className:"hd-title",children:e.name}),c.jsx("div",{className:"hd-sub",children:s?`今日 ${Ri}件`:"Nachumin Lifelog"})]}),c.jsx("button",{className:"now-view","aria-label":"ふりかえり",onClick:()=>Le({busy:!1}),style:{marginLeft:"auto"},children:"✨"}),c.jsx("button",{className:"now-view"+(T==="gallery"?" on":""),"aria-label":T==="gallery"?"時系列で見る":"ギャラリーで見る",onClick:()=>io(T==="gallery"?"time":"gallery"),children:T==="gallery"?"🕐":"▦"}),i&&c.jsxs("button",{className:"now-to-diary",onClick:i,"aria-label":"日記をひらく",style:{marginLeft:0},children:[c.jsx("span",{className:"now-to-diary-ic",children:"💗"}),"日記",c.jsx("span",{className:"now-to-diary-arw",children:"›"})]})]}),o,T==="gallery"?c.jsxs("div",{className:"now-gal-scroll",style:{paddingBottom:_+12},children:[c.jsxs("div",{className:"now-gal-bar",children:[c.jsxs("span",{className:"now-gal-n",children:[un.length,"件"]}),c.jsx("div",{className:"now-gal-cols",children:[2,3].map(S=>c.jsxs("button",{className:"now-gal-col"+(A===S?" on":""),"aria-label":`${S}列にする`,onClick:()=>Mi(S),children:[S,"列"]},S))})]}),s&&un.length===0&&c.jsx("div",{className:"now-empty",children:"下からつぶやいてね🕐"}),c.jsx("div",{className:"now-gal cols-"+A,children:dn.map(S=>c.jsx(Vc,{className:"now-card"+(w===S.id?" pop":""),onLongPress:O=>b({id:S.id,x:O.x,y:O.y}),children:Yc(S.text)},S.id))}),un.length>dn.length&&c.jsxs("button",{className:"now-more",onClick:()=>de(S=>S+Qc),children:["↓ もっと見る（あと",un.length-dn.length,"件）"]})]}):c.jsxs("div",{className:"chat now-scroll",ref:B,style:{paddingBottom:_+12},children:[oo>0&&c.jsxs("button",{className:"now-more",onClick:()=>y(S=>gi(S,-7)),children:["↑ 前の日を見る（あと",oo,"日ぶん）"]}),ar.map(S=>{const O=(cn[S]||[]).slice().sort(Xc);return c.jsxs(E.Fragment,{children:[c.jsxs("div",{className:"now-day"+(S===xe?" today":""),children:[c.jsx("span",{className:"now-day-l "+Yg(S),children:Oi(S)}),O.length>0&&c.jsx("span",{className:"now-day-n",children:O.length})]}),O.length===0&&S===xe&&c.jsx("div",{className:"now-empty",children:"下からつぶやいてね🕐 時刻は自動でつくよ"}),c.jsx("div",{className:"now-tl",children:O.map(ne=>c.jsxs(Vc,{className:"now-post"+(w===ne.id?" pop":""),onLongPress:dt=>b({id:ne.id,x:dt.x,y:dt.y}),children:[c.jsx("span",{className:"now-time",children:ne.time}),c.jsx("span",{className:"now-dot","aria-hidden":"true"}),c.jsx("span",{className:"now-text",children:Yc(ne.text)})]},ne.id))})]},S)})]}),!P&&!fe&&c.jsx("div",{className:"bar bar-fixed now-bar",ref:Q,style:{bottom:It},children:c.jsxs("div",{className:"in-row",children:[c.jsx("textarea",{ref:te,className:"ta",rows:1,placeholder:"いまなにしてる？",enterKeyHint:"send",value:u,onChange:to,onKeyDown:eo}),c.jsx("button",{className:"send","aria-label":"つぶやく",disabled:!u.trim(),onClick:Dn,children:"↑"})]})}),v&&Ee&&c.jsx(am,{x:v.x,y:v.y,onClose:()=>b(null),onCopy:async()=>{const S=await Fc(`${Ee.time} ${Ee.text}`);r(S?"コピーしました🩷":"コピーできませんでした"),b(null)},onEdit:()=>{m({id:Ee.id,text:Ee.text,time:gm(Ee.time)}),b(null)},onDelete:()=>{const S=Ee.id;b(null),G(S)}}),P&&c.jsx("div",{className:"overlay",onClick:()=>m(null),children:c.jsxs("div",{className:"panel",onClick:S=>S.stopPropagation(),children:[c.jsx("h3",{children:"🕐 なうを直す"}),c.jsx("div",{className:"f-label",children:"時刻（あとから書いたときは直してね）"}),c.jsx("input",{className:"f-input",type:"time",style:{width:140},value:P.time,onChange:S=>m(O=>({...O,time:S.target.value}))}),c.jsx("div",{className:"f-label",children:"なにしてた"}),c.jsx("textarea",{autoFocus:!0,style:{minHeight:80},value:P.text,onChange:S=>m(O=>({...O,text:S.target.value}))}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:no,children:"保存"}),c.jsx("button",{className:"p-del",onClick:()=>G(P.id),children:"削除"}),c.jsx("button",{className:"p-close",onClick:()=>m(null),children:"もどる"})]})]})}),fe&&c.jsx("div",{className:"overlay",onClick:()=>!fe.busy&&Le(null),children:c.jsxs("div",{className:"panel rf-panel",onClick:S=>S.stopPropagation(),children:[c.jsx("h3",{children:"✨ なうのふりかえり"}),c.jsx("button",{className:"rf-make",disabled:fe.busy,onClick:sn,children:fe.busy?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"wd-cam-spin"})," ふりかえり中…"]}):c.jsxs(c.Fragment,{children:["💗 この7日をふりかえる",c.jsxs("small",{children:[se(Ct).slice(5),"〜今日・",an.length,"件"]})]})}),c.jsx("div",{className:"rf-note",children:"押したときだけ、この7日のなうをAIに送ってまとめます（保存はされません）"}),c.jsxs("div",{className:"rf-list",children:[je.length===0&&c.jsx("div",{className:"now-empty",children:"まだふりかえりはありません"}),je.map(S=>c.jsxs("div",{className:"rf-card",children:[c.jsxs("div",{className:"rf-range",children:[se(S.from).slice(5),"〜",se(S.to).slice(5),c.jsxs("small",{children:[S.count,"件"]})]}),c.jsx("div",{className:"rf-text",children:S.text}),c.jsxs("div",{className:"rf-acts",children:[c.jsx("button",{onClick:async()=>{const O=await Fc(S.text);r(O?"コピーしました🩷":"コピーできませんでした")},children:"コピー"}),c.jsx("button",{onClick:()=>Ti(S),children:"削除"})]})]},S.id))]}),c.jsx("div",{className:"panel-btns",children:c.jsx("button",{className:"p-close",disabled:fe.busy,onClick:()=>Le(null),children:"もどる"})})]})}),R&&c.jsx(um,{wrong:R.wrong,onSubmit:S=>{R.resolve(S),F(null)},onCancel:()=>{R.resolve(null),F(null)}}),f&&c.jsx(kf,{message:f.message,onConfirm:f.onConfirm,onCancel:()=>x(null)})]})}function ym({items:e,keyOf:t,onReorder:n,renderItem:r,onLongPress:o,longPress:i=320,footer:l}){const[a,s]=E.useState(null),[g,u]=E.useState(null),h=E.useRef(null),p=E.useRef({});p.current.items=e,p.current.keyOf=t,p.current.onReorder=n,p.current.onLongPress=o;const y=a||e,v=w=>{var z;return(z=h.current)==null?void 0:z.querySelector(`[data-dk="${CSS.escape(String(w))}"]`)},b=()=>{const w=h.current;if(!w||p.current.dragKey==null)return;const z=v(p.current.dragKey);if(!z)return;const _=w.getBoundingClientRect(),L=_.left+z.offsetLeft,T=_.top+z.offsetTop,W=p.current.pointerX-p.current.grabX-L,A=p.current.pointerY-p.current.grabY-T;z.style.transform=`translate(${W}px, ${A}px) scale(1.08)`},P=w=>{const z=v(w);if(!z)return;const _=z.getBoundingClientRect();p.current.dragKey=w,p.current.grabX=p.current.pointerX-_.left,p.current.grabY=p.current.pointerY-_.top,p.current.pickupX=p.current.pointerX,p.current.pickupY=p.current.pointerY,p.current.moved=!1,p.current.order=p.current.items.slice(),z.style.zIndex="10",s(p.current.order),u(w);try{navigator.vibrate&&navigator.vibrate(12)}catch{}requestAnimationFrame(b)},m=()=>{const w=h.current;if(!w||p.current.dragKey==null)return;const z=w.getBoundingClientRect(),_=p.current.pointerX-z.left,L=p.current.pointerY-z.top,T=[...w.querySelectorAll("[data-dk]")];let W=0,A=1/0;for(let de=0;de<T.length;de++){const je=T[de],Nt=je.offsetLeft+je.offsetWidth/2,fe=je.offsetTop+je.offsetHeight/2,Le=(_-Nt)**2+(L-fe)**2;Le<A&&(A=Le,W=de)}const J=p.current.order,Pe=J.findIndex(de=>p.current.keyOf(de)===p.current.dragKey);if(Pe!==-1&&Pe!==W){const[de]=J.splice(Pe,1);J.splice(W,0,de),s(J.slice())}requestAnimationFrame(b)},f=()=>{if(clearTimeout(p.current.timer),p.current.dragKey!=null){const w=v(p.current.dragKey);if(w&&(w.style.transform="",w.style.zIndex=""),p.current.moved)p.current.onReorder(p.current.order.slice());else if(p.current.onLongPress){const z=p.current.items.find(_=>p.current.keyOf(_)===p.current.dragKey);p.current.onLongPress({item:z,x:p.current.pointerX,y:p.current.pointerY})}p.current.suppress=Date.now()+450}p.current.dragKey=null,u(null),s(null)};E.useEffect(()=>{const w=h.current;if(!w)return;const z=W=>{if(W.touches.length!==1)return;const A=W.target.closest("[data-dk]");if(!A||!w.contains(A))return;const J=W.touches[0];p.current.startX=J.clientX,p.current.startY=J.clientY,p.current.pointerX=J.clientX,p.current.pointerY=J.clientY,p.current.moved=!1;const Pe=A.getAttribute("data-dk");clearTimeout(p.current.timer),p.current.timer=setTimeout(()=>{p.current.moved||P(Pe)},i)},_=W=>{const A=W.touches[0];if(p.current.pointerX=A.clientX,p.current.pointerY=A.clientY,p.current.dragKey==null){(Math.abs(A.clientX-p.current.startX)>12||Math.abs(A.clientY-p.current.startY)>12)&&(p.current.moved=!0,clearTimeout(p.current.timer));return}(Math.abs(A.clientX-p.current.pickupX)>8||Math.abs(A.clientY-p.current.pickupY)>8)&&(p.current.moved=!0),W.preventDefault(),m()},L=()=>{clearTimeout(p.current.timer),p.current.dragKey!=null&&f()},T=W=>W.preventDefault();return w.addEventListener("touchstart",z,{passive:!0}),w.addEventListener("touchmove",_,{passive:!1}),w.addEventListener("touchend",L,{passive:!0}),w.addEventListener("touchcancel",L,{passive:!0}),w.addEventListener("contextmenu",T),()=>{w.removeEventListener("touchstart",z),w.removeEventListener("touchmove",_),w.removeEventListener("touchend",L),w.removeEventListener("touchcancel",L),w.removeEventListener("contextmenu",T)}},[i]);const x=w=>{p.current.suppress&&Date.now()<p.current.suppress&&(w.stopPropagation(),w.preventDefault(),p.current.suppress=0)};return c.jsxs("div",{ref:h,className:"ig-grid",onClickCapture:x,children:[y.map(w=>{const z=t(w);return c.jsx("div",{"data-dk":z,className:"ig-cell"+(g===z?" dragging":""),children:r(w)},z)}),l]})}function wm({onBack:e,children:t}){const[n,r]=E.useState(0),[o,i]=E.useState(!1),l=E.useRef(null),a=E.useRef(!1),s=p=>{if(p.touches.length!==1||document.querySelector(".overlay"))return;const y=p.touches[0];y.clientX>28||(l.current={x:y.clientX,y:y.clientY},a.current=!1)},g=p=>{if(!l.current)return;const y=p.touches[0],v=y.clientX-l.current.x,b=y.clientY-l.current.y;if(!a.current){if(Math.abs(v)<8&&Math.abs(b)<8)return;if(Math.abs(b)>Math.abs(v)){l.current=null;return}a.current=!0,i(!1)}r(Math.max(0,v))},u=()=>{if(!l.current)return;const p=Math.min(110,window.innerWidth*.3);i(!0),a.current&&n>p?(r(window.innerWidth),setTimeout(e,190)):r(0),l.current=null,a.current=!1},h=n>0?{transform:`translateX(${n}px)`,transition:o?"transform .19s ease-out":"none",boxShadow:"-10px 0 26px rgba(120,50,90,.18)"}:void 0;return c.jsx("div",{className:"swipe-wrap",style:h,onTouchStart:s,onTouchMove:g,onTouchEnd:u,children:t})}const vm=E.lazy(()=>vt(()=>import("./DiaryRoom-DRmjoMlm.js"),__vite__mapDeps([0,1]),import.meta.url)),bm=E.lazy(()=>vt(()=>import("./TalkRoom-CC1PnBTR.js"),[],import.meta.url)),km=E.lazy(()=>vt(()=>import("./TodoRoom-BJ63R9BA.js"),__vite__mapDeps([2,1]),import.meta.url)),Sm=E.lazy(()=>vt(()=>import("./DarelogRoom-Bc7uqESF.js"),__vite__mapDeps([3,4]),import.meta.url)),zm=E.lazy(()=>vt(()=>import("./ExpenseRoom-BuTn8-F1.js"),[],import.meta.url)),jm=E.lazy(()=>vt(()=>import("./ChallengeRoom-BmZ3EHhw.js"),[],import.meta.url)),Em=E.lazy(()=>vt(()=>import("./FutureRoom-CdjkZFfR.js"),[],import.meta.url)),Nm=E.lazy(()=>vt(()=>import("./AlbumRoom-BTQO62j7.js"),__vite__mapDeps([5,6]),import.meta.url)),Cm=E.lazy(()=>vt(()=>import("./SmartRoom-DqVj9cGI.js"),[],import.meta.url)),_m=E.lazy(()=>vt(()=>import("./WordsRoom-Bxfp_PRy.js"),__vite__mapDeps([7,6]),import.meta.url)),Dm=["💗","🩷","💛","🩵","💜","🤍","🖤","🌸","🌷","🎀","🌟","✨","⭐️","👑","🫶","🐰","🐻","🐱","🦄","🌙","🌊","🌿","🍓","🍒","🧸","📖","💬","✅","🌗","💰"];function Pm(){const[e,t]=E.useState(null),[n,r]=E.useState({screen:"home"}),[o,i]=E.useState(!1),[l,a]=E.useState(""),[s,g]=E.useState(null),[u,h]=E.useState(null),[p,y]=E.useState(!1),[v,b]=E.useState(null),[P,m]=E.useState(""),[f,x]=E.useState(null),[w,z]=E.useState(""),[_,L]=E.useState(null),[T,W]=E.useState(0),[A,J]=E.useState(null),[Pe,de]=E.useState(!1),je=E.useRef(null),Nt=E.useRef(0),[fe,Le]=E.useState(Pg),[R,F]=E.useState(!1),[B,Q]=E.useState(""),[te,Te]=E.useState(!1),[Fe,It]=E.useState(""),[xe,Xe]=E.useState(""),[ve,_n]=E.useState(null),[Ct,an]=E.useState(!1),[bt,sn]=E.useState(null),[Ti,Dn]=E.useState(!1),[eo,to]=E.useState(""),no=E.useRef(null),G=(d,k=3e3)=>{to(d),clearTimeout(no.current),no.current=setTimeout(()=>to(""),k)},cn=async d=>{try{if(await U(vl))return d;if(d.some(C=>C.type==="future"))return await I(vl,!0),d;const k=[...d,{id:Ag,type:"future",name:"未来日記",emoji:"🔮",theme:Ea[3]||void 0,createdAt:Date.now(),lastAt:0,preview:""}];return await I(Re,k),await I(vl,!0),k}catch{return d}},ro=async d=>{try{if(await U(gl))return d;if(d.some(C=>C.type==="album"))return await I(gl,!0),d;const k=[...d,{id:Lg,type:"album",name:"絵日記",emoji:"📔",createdAt:Date.now(),lastAt:0,preview:""}];return await I(Re,k),await I(gl,!0),k}catch{return d}},ar=async d=>{try{if(await U(ml))return d;if(d.some(C=>C.type==="smart"))return await I(ml,!0),d;const k=[...d,{id:Tg,type:"smart",name:"スマートノート",emoji:"📝",createdAt:Date.now(),lastAt:0,preview:""}];return await I(Re,k),await I(ml,!0),k}catch{return d}},oo=async d=>{try{if(await U(xl))return d;if(d.some(C=>C.type==="words"))return await I(xl,!0),d;const k=[...d,{id:Rg,type:"words",name:"名言",emoji:"💎",createdAt:Date.now(),lastAt:0,preview:""}];return await I(Re,k),await I(xl,!0),k}catch{return d}},Ri=async d=>{try{if(await U(yl))return d;if(d.some(C=>C.type==="praise"))return await I(yl,!0),d;const k=[...d,{id:Og,type:"praise",name:"褒め褒め",emoji:"👑",createdAt:Date.now(),lastAt:0,preview:""}];return await I(Re,k),await I(yl,!0),k}catch{return d}},Oi=async d=>{try{if(await U(wl))return d;if(d.some(C=>C.type==="now"))return await I(wl,!0),d;const k=[{id:Mg,type:"now",name:"なう",emoji:"🕐",createdAt:Date.now(),lastAt:0,preview:""},...d];return await I(Re,k),await I(wl,!0),k}catch{return d}};E.useEffect(()=>{(async()=>{try{const d=await Oi(await Ri(await oo(await ar(await ro(await cn(await Ig())))))),k=await U($c);k&&L(k);const C=new URLSearchParams(location.search).get("open"),N=C&&d.find($=>$.id===C)||k&&d.find($=>$.id===k)||d.find($=>$.type==="now"&&!$.hidden)||d.find($=>$.id===pe);N&&r({screen:"room",roomId:N.id}),t(d);const[K,V,D]=await Promise.all([U(Bo),U(Qr),U(bl)]);K&&K.dateKey===Ue()&&m(K.text),Array.isArray(V)&&V.length&&Le(V),_n(D||{})}catch{G("データの読み込みに失敗しました"),t([])}})()},[]),E.useEffect(()=>{if(n.screen!=="home")return;let d=!0;return(async()=>{try{let k=await U(Me(pe));k=typeof k=="string"?JSON.parse(k):k||{};const C=k[Ue()];if(!d)return;C&&typeof C.text=="string"&&C.text.trim()?J({written:!0,preview:C.text.split(`
`)[0].slice(0,34)}):J({written:!1})}catch{d&&J({written:!1})}})(),()=>{d=!1}},[n.screen,T]),E.useEffect(()=>{n.screen==="home"&&je.current&&(je.current.scrollTop=Nt.current)},[n.screen]);const io=d=>{t(k=>{let C=k;return k.find(N=>N.id===pe)||(C=[...k,{id:pe,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),C=C.map(N=>N.id===pe?{...N,...d!=null?{preview:d}:{},lastAt:Date.now()}:N),I(Re,C),C}),W(k=>k+1)},Mi=async({text:d,time:k,dateKey:C})=>{try{const N=hi(pe),K=await U(N)||{},V=(K[C]||[]).slice();V.some(D=>D.text===d&&D.time===k)||V.push({text:d,time:k}),await I(N,{...K,[C]:V}),io(`🩷 できたこと ☑ ${d}`.slice(0,40))}catch{G("できたことの記録に失敗しました")}},un=async({text:d,time:k,dateKey:C})=>{try{const N=hi(pe),K=await U(N)||{},V=(K[C]||[]).filter($=>!($.text===d&&$.time===k)),D={...K};V.length?D[C]=V:delete D[C],await I(N,D),io(null)}catch{}},dn=d=>{t(d),I(Re,d).catch(()=>G("保存に失敗しました"))},Ee=(d,k)=>{t(C=>{const N=C.map(K=>K.id===d?{...K,...k}:K);return I(Re,N).catch(()=>G("保存に失敗しました")),N})},S=async(d,k,C)=>{try{const N=(e||[]).find(ot=>ot.id===k);if(!N)return{ok:!1};const K=Me(k),V=await U(K)||{},D=Array.isArray(V.todos)?V.todos:[],$=(C||"").trim(),re=$?(N.places||[]).find(ot=>(ot.name||"").trim()===$):null,Be={...d,placeId:re?re.id:null},Ke=[...D,Be];await I(K,{...V,todos:Ke});const fn=Ke.filter(ot=>!ot.done&&!ot.deferred).length;return Ee(k,{preview:`${Be.done?"☑":"☐"} ${(Be.text||"").split(`
`)[0]}`.slice(0,40),todoOpen:fn,lastAt:Date.now()}),{ok:!0,placeDropped:!!$&&!re,placeKept:!!re}}catch{return{ok:!1}}},O=async d=>{const k=d.trim();if(!k)return;const C=Ue();try{await I(Bo,{dateKey:C,text:k}),m(k);const N=Me(pe);let K=await U(N);K=K&&typeof K=="object"?K:{};const V=K[C],D=Zg(V?V.text:"",k);K={...K,[C]:{text:D,time:V?V.time:vf()}},await I(N,K);const $=Object.keys(K).sort(),re=$[$.length-1],Be=K[re].text.split(`
`)[0].slice(0,40);t(Ke=>{let fn=Ke;return Ke.find(ot=>ot.id===pe)||(fn=[...Ke,{id:pe,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),fn=fn.map(ot=>ot.id===pe?{...ot,preview:Be,lastAt:Date.now()}:ot),I(Re,fn),fn}),W(Ke=>Ke+1),G("今日のコマをピン留めしたよ🩷")}catch{G("宣言の保存に失敗しました")}},ne=d=>{Le(d),I(Qr,d).catch(()=>G("マークの保存に失敗しました"))},dt=()=>{const d=B.trim();if(d){if(fe.includes(d)){Q("");return}ne([...fe,d]),Q("")}},zf=d=>ne(fe.filter(k=>k!==d));E.useEffect(()=>{!o||!e||(async()=>{const d={};for(const k of e)d[k.id]=await U(Me(k.id));g(d)})()},[o,e]);const lo=e||[],Ai=E.useMemo(()=>{if(!l||!s||!e)return null;const d=l.toLowerCase(),k=[];for(const C of lo){const N=s[C.id],K=[];if(C.type==="diary"){const V=N&&typeof N=="object"?N:{};for(const D of Object.keys(V).sort())(V[D].text+se(D)).toLowerCase().includes(d)&&K.push({snippet:V[D].text.split(`
`)[0],date:se(D)})}else if(C.type==="todo"){const V=N&&Array.isArray(N.todos)?N.todos:[];for(const D of V)(D.text+se(D.dateKey)).toLowerCase().includes(d)&&K.push({snippet:`${D.done?"☑":"☐"} ${D.text.split(`
`)[0]}`,date:se(D.dateKey)})}else if(C.type==="darelog"){const V=N&&Array.isArray(N.records)?N.records:[],D=$=>{var re,Be;return((Be=(re=C.members)==null?void 0:re.find(Ke=>Ke.id===$))==null?void 0:Be.name)||""};for(const $ of C.members||[])($.memberMemo||"").toLowerCase().includes(d)&&K.push({snippet:`${$.name}: ${$.memberMemo}`,date:"メンバーメモ"});for(const $ of V){const re=D($.memberId);(re+($.memo||"")+se($.dateKey)).toLowerCase().includes(d)&&K.push({snippet:`${re}${$.memo?`: ${$.memo}`:""}`,date:se($.dateKey)})}}else if(C.type==="expense"){const V=N&&Array.isArray(N.expenses)?N.expenses:[],D=$=>{var re,Be;return((Be=(re=C.categories)==null?void 0:re.find(Ke=>Ke.id===$))==null?void 0:Be.name)||""};for(const $ of V)(D($.categoryId)+($.memo||"")+String($.amount)+se($.dateKey)).toLowerCase().includes(d)&&K.push({snippet:`${D($.categoryId)} ¥${$.amount}${$.memo?" "+$.memo:""}`,date:se($.dateKey)})}else if(C.type==="words"||C.type==="praise"){const V=N&&Array.isArray(N.words)?N.words:[];for(const D of V)(D.text+" "+(D.from||"")).toLowerCase().includes(d)&&K.push({snippet:D.from?`${D.text} — ${D.from}`:D.text,date:""})}else if(C.type==="smart"){const V=N&&Array.isArray(N.items)?N.items:[];for(const D of V)(D.text+se(D.dateKey)).toLowerCase().includes(d)&&K.push({snippet:`${D.score?D.score+"点 ":""}${D.text}`,date:se(D.dateKey)})}else{const V=N&&Array.isArray(N.messages)?N.messages:[],D=$=>{var re,Be;return((Be=(re=C.members)==null?void 0:re.find(Ke=>Ke.id===$))==null?void 0:Be.name)||""};for(const $ of V)(($.text+se($.dateKey)).toLowerCase().includes(d)||D($.memberId).toLowerCase().includes(d))&&K.push({snippet:`${D($.memberId)||"？"}: ${$.text.split(`
`)[0]}`,date:se($.dateKey)})}K.length===0&&C.name.toLowerCase().includes(d)&&K.push({snippet:C.preview||"",date:""}),K.length&&k.push({room:C,hits:K})}return k},[l,s,lo,e]),jf=d=>l?d.split(new RegExp(`(${Qg(l)})`,"gi")).map((C,N)=>C.toLowerCase()===l.toLowerCase()?c.jsx("mark",{className:"hl",children:C},N):C):d,Ef=()=>{const d=u.name.trim();if(!d){G("ルーム名を入れてね");return}const k={diary:"💗",todo:"✅",darelog:"🌗",expense:"💰",challenge:"🏁",smart:"📝",words:"💎",praise:"👑",talk:"🩷"}[u.type]||"🩷",C=u.type==="darelog"?[{id:Ge(),name:"ブルー",color:"#d4f0ff",icon:{type:"emoji",value:"🌊"},side:"left"},{id:Ge(),name:"グリーン",color:"#d9ffe3",icon:{type:"emoji",value:"🌿"},side:"left"},{id:Ge(),name:"ピンク",color:"#ffd9ec",icon:{type:"emoji",value:"🌸"},side:"right"}]:[],N=u.type==="expense"?[{id:Ge(),name:"AI費用",emoji:"🤖",color:"#2196F3"},{id:Ge(),name:"ピンクグッズ",emoji:"🎀",color:"#E91E63"},{id:Ge(),name:"ネイル",emoji:"💅",color:"#9C27B0"},{id:Ge(),name:"旅費交通費",emoji:"🚃",color:"#00A5B5",transit:!0}]:void 0,K={id:Ge(),type:u.type,name:d,emoji:u.emoji.trim()||k,theme:u.theme||vr,members:C,createdAt:Date.now(),lastAt:0,preview:"",...u.type==="todo"?{shopping:!!u.shopping,numbering:!!u.numbering,noDiary:!!u.noDiary}:{},...N?{categories:N,subscriptions:[],subsPosted:{},transitSeeded:!0,stations:[],fares:[],defaultFromId:null,roundTripDefault:!1,incomeSeeded:!0,incomeCategories:[{id:Ge(),name:"売上",emoji:"💰",color:"#2E9E5B"},{id:Ge(),name:"返金",emoji:"↩️",color:"#3BA7A0"},{id:Ge(),name:"その他",emoji:"✨",color:"#7FB800"}]}:{}};dn([...e,K]),h(null),r({screen:"room",roomId:K.id})},Nf=()=>{const d=u.name.trim();if(!d){G("ルーム名を入れてね");return}Ee(u.roomId,{name:d,emoji:u.emoji.trim()||"💗",theme:u.theme||vr,hidden:!!u.hidden,...u.type==="todo"?{shopping:!!u.shopping,numbering:!!u.numbering,noDiary:!!u.noDiary}:{}});const k=u.start?u.roomId:_===u.roomId?null:_;k!==_&&(L(k),I($c,k).catch(()=>G("起動ルームの保存に失敗しました"))),h(null)},Cf=d=>{h({mode:"edit",roomId:d.id,name:d.name,emoji:d.emoji,type:d.type,shopping:!!d.shopping,numbering:!!d.numbering,noDiary:!!d.noDiary,theme:d.theme||vr,hidden:!!d.hidden,start:_===d.id}),y(!1)},_f=async d=>{try{const k=await U(Me(d));k&&await I(Dg(d),k),dn(e.filter(C=>C.id!==d)),h(null),b(null),G("ルームを削除しました")}catch{G("削除に失敗しました")}},Df=()=>{const d=e.find(k=>k.id===u.roomId);b({message:`ルーム「${(d==null?void 0:d.name)||""}」を削除しますか？
中の記録もすべて消えます。`,onConfirm:()=>_f(u.roomId)})},Pf=async()=>{Xe(""),Dn(!1);try{const d=await Kc();It(JSON.stringify(d,null,2))}catch{It("")}Te(!0)},$i=async()=>{const d={...ve||{},lastDateKey:Ue(),lastAt:Date.now()};_n(d);try{await I(bl,d)}catch{}},ks=d=>{const k=new Blob([d],{type:"application/json;charset=utf-8"}),C=URL.createObjectURL(k),N=document.createElement("a");N.href=C,N.download=Sl,document.body.appendChild(N),N.click(),N.remove(),setTimeout(()=>URL.revokeObjectURL(C),3e3)},Ii=async()=>{if(!Ct){an(!0);try{let d;try{d=JSON.stringify(await Kc(),null,2)}catch{G("バックアップの作成に失敗しました 🥺");return}try{const k=new File([d],Sl,{type:"application/json"});if(navigator.canShare&&navigator.canShare({files:[k]})){await navigator.share({files:[k]}),await $i(),G("バックアップを保存したよ💗");return}}catch(k){if(k&&(k.name==="AbortError"||k.name==="NotAllowedError"))return}try{ks(d),await $i(),G("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{G("保存できない環境みたい。コピーを使ってね")}}finally{an(!1)}}},Lf=()=>{try{ks(Fe),$i(),G("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{G("保存できない環境みたい。コピーを使ってね")}},ao=Ue(),Pn=(()=>{if(!(ve!=null&&ve.lastDateKey))return null;const d=ke(ao)-ke(ve.lastDateKey);return Math.max(0,Math.round(d/864e5))})(),Fi=Pn===null||Pn>=7,Tf=!!ve&&ve.lastDateKey!==ao&&ve.dismissedDateKey!==ao,Rf=async()=>{const d={...ve||{},dismissedDateKey:ao};_n(d);try{await I(bl,d)}catch{}},Of=async()=>{try{await navigator.clipboard.writeText(Fe),Dn(!0),setTimeout(()=>Dn(!1),2e3)}catch{G("コピーできませんでした。全選択して手動でコピーしてね")}},Mf=d=>{var N;const k=(N=d.target.files)==null?void 0:N[0];if(!k)return;const C=new FileReader;C.onload=()=>Xe(String(C.result||"")),C.onerror=()=>G("ファイルを読めませんでした"),C.readAsText(k),d.target.value=""},Af=()=>{let d;try{d=JSON.parse(xe)}catch{G("JSONとして読めませんでした。ファイルが壊れているかも 🥺",4e3);return}const k=em(d);if(k){G(k,4500);return}sn({obj:d,counts:tm(d),exportedAt:d.exportedAt||"",version:d.version})},$f=async()=>{const d=bt==null?void 0:bt.obj;if(d)try{const k=await rm(d);t(k.rooms),d.declaration&&d.declaration.dateKey===Ue()&&!P&&(await I(Bo,d.declaration),m(d.declaration.text)),W(C=>C+1),sn(null),Te(!1),Xe(""),G(`復元完了💗 ${k.addedRooms}ルーム / ${k.addedItems}件を追加`)}catch{sn(null),G("復元中にエラーが出ました。ファイルが壊れているかも 🥺",4e3)}};if(!e)return c.jsx("div",{className:"app",children:c.jsx("style",{children:Wc})});const If=c.jsxs("div",{className:"pin",onClick:()=>{z(P),x(P?"view":"edit")},role:"button",children:[c.jsx("span",{className:"pin-ic",children:P?"📌":"🩷"}),P?c.jsx("span",{className:"pin-txt",children:P}):c.jsx("span",{className:"pin-ph",children:"今日のコマをえらぶ🩷"})]});let so;if(n.screen==="room"){const d=e.find(k=>k.id===n.roomId);if(!d)so=null,setTimeout(()=>r({screen:"home"}),0);else{const k={room:d,onBack:()=>r({screen:"home"}),onMeta:N=>Ee(d.id,N),initialQuery:n.q,showToast:G,pinned:If},C=d.type==="diary"?c.jsx(vm,{...k,syncSignal:T,marks:fe,onEditMarks:()=>F(!0),nowRoomIds:e.filter(N=>N.type==="now").map(N=>N.id)},d.id):d.type==="now"?c.jsx(xm,{...k,onOpenDiary:e.some(N=>N.id===pe)?()=>r({screen:"room",roomId:pe}):void 0},d.id):d.type==="todo"?c.jsx(km,{...k,onTodoComplete:Mi,onTodoUncomplete:un,onRoomChange:N=>Ee(d.id,N),todoRooms:e.filter(N=>N.type==="todo"&&N.id!==d.id),onMoveTodo:S},d.id):d.type==="darelog"?c.jsx(Sm,{...k,onRoomChange:N=>Ee(d.id,N)},d.id):d.type==="expense"?c.jsx(zm,{...k,onRoomChange:N=>Ee(d.id,N)},d.id):d.type==="challenge"?c.jsx(jm,{...k},d.id):d.type==="future"?c.jsx(Em,{...k},d.id):d.type==="album"?c.jsx(Nm,{...k},d.id):d.type==="smart"?c.jsx(Cm,{...k},d.id):d.type==="words"||d.type==="praise"?c.jsx(_m,{...k},d.id):c.jsx(bm,{...k,onRoomChange:N=>Ee(d.id,N)},d.id);so=c.jsx(wm,{onBack:()=>r({screen:"home"}),children:c.jsx(E.Suspense,{fallback:c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"hd hd-loading"}),c.jsx("div",{className:"chat"})]}),children:C})},d.id)}}else so=c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"hd hd-home",children:[c.jsx("div",{className:"app-brand",children:c.jsx("div",{className:"app-title",children:"💖Nachumin Lifelog💖"})}),c.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"バックアップ",onClick:Pf,children:"💾"}),c.jsx("button",{className:"icon-btn","aria-label":"新しいルーム",onClick:()=>h({mode:"new",name:"",emoji:"",type:"talk"}),children:"➕"}),c.jsx("button",{className:"icon-btn","aria-label":"ぜんぶ検索",onClick:()=>{i(!o),a("")},children:o?"✕":"🔍"})]}),Tf&&c.jsxs("div",{className:"bk-banner"+(Fi?" stale":""),children:[c.jsxs("button",{className:"bk-main",onClick:Ii,disabled:Ct,children:[c.jsx("span",{className:"bk-ttl",children:"💾 今日のバックアップ🩷"}),c.jsx("span",{className:"bk-sub",children:Pn===null?"まだ一度も保存していません":Fi?`最後の保存から ${Pn}日 たっています`:"タップで1ファイルに書き出し"})]}),c.jsx("button",{className:"bk-x","aria-label":"閉じる",onClick:Rf,children:"✕"})]}),o&&c.jsx("div",{className:"search-row",children:c.jsx("input",{autoFocus:!0,placeholder:"ぜんぶのルームから検索（ことば・話者・日付）",value:l,onChange:d=>a(d.target.value)})}),Ai?c.jsx("div",{className:"rooms",children:Ai.length===0?c.jsx("div",{className:"empty",children:"みつかりませんでした 🥺"}):Ai.map(({room:d,hits:k})=>c.jsxs("div",{className:"room-row",onClick:()=>r({screen:"room",roomId:d.id,q:l}),children:[c.jsx("div",{className:"r-ic",children:d.emoji}),c.jsxs("div",{className:"r-main",children:[c.jsx("div",{className:"r-name",children:d.name}),c.jsx("div",{className:"r-prev",children:jf(k[0].snippet)})]}),c.jsxs("div",{className:"r-side",children:[c.jsxs("span",{className:"r-badge",children:[k.length,"件"]}),k[0].date&&c.jsx("span",{className:"r-date",children:k[0].date})]})]},d.id))}):c.jsx("div",{className:"home-scroll",ref:je,onScroll:d=>{Nt.current=d.target.scrollTop},children:(()=>{const d=e.find(D=>D.id===pe),k=lo.filter(D=>D.id!==pe&&!D.hidden),C=lo.filter(D=>D.id!==pe&&D.hidden),N=ke(Ue()),K=A?A.written?A.preview:`${N.getMonth()+1}/${N.getDate()}・きょうの分はまだ`:"…",V=D=>{const $=[...D];dn(e.map(re=>re.id===pe||re.hidden?re:$.shift()))};return c.jsxs(c.Fragment,{children:[d&&c.jsxs("button",{className:"diary-card",onClick:()=>r({screen:"room",roomId:d.id}),children:[c.jsx("span",{className:"dc-ic",children:d.emoji}),c.jsxs("span",{className:"dc-main",children:[c.jsx("span",{className:"dc-name",children:"DIARY"}),c.jsx("span",{className:"dc-sub",children:K})]}),c.jsx("span",{className:"dc-arw",children:"›"})]}),c.jsx(ym,{items:k,keyOf:D=>D.id,onReorder:V,onLongPress:({item:D})=>{D&&Cf(D)},footer:c.jsx("div",{className:"ig-cell ig-add",children:c.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>h({mode:"new",name:"",emoji:"",type:"talk"}),onKeyDown:D=>D.key==="Enter"&&h({mode:"new",name:"",emoji:"",type:"talk"}),children:[c.jsx("span",{className:"ig-btn",children:"＋"}),c.jsx("span",{className:"ig-name",children:"つくる"})]})}),renderItem:D=>{const $=D.type==="todo"&&D.todoOpen>0?D.todoOpen:null;return c.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>r({screen:"room",roomId:D.id}),onKeyDown:re=>re.key==="Enter"&&r({screen:"room",roomId:D.id}),children:[c.jsxs("span",{className:"ig-btn",style:Uc(D.theme),children:[D.emoji,$!=null&&c.jsx("span",{className:"ig-badge",children:$>99?"99+":$})]}),c.jsx("span",{className:"ig-name",children:D.name})]})}}),C.length>0&&c.jsx("button",{className:"hidden-entry",onClick:()=>de(!0),children:"🙈 非表示のルーム"}),Pe&&c.jsx("div",{className:"overlay",onClick:()=>de(!1),children:c.jsxs("div",{className:"panel",onClick:D=>D.stopPropagation(),children:[c.jsx("h3",{children:"🙈 非表示のルーム"}),c.jsx("p",{className:"panel-note",children:"一覧に出していないルームです。中の記録は消えていません。「戻す」でまた表示できます。"}),c.jsx("div",{className:"move-list",children:C.map(D=>c.jsxs("div",{className:"move-item as-row",children:[c.jsx("span",{className:"move-ic",children:D.emoji}),c.jsx("span",{className:"move-name",children:D.name}),c.jsx("button",{className:"unhide-btn",onClick:()=>Ee(D.id,{hidden:!1}),children:"戻す"})]},D.id))}),c.jsx("div",{className:"panel-btns",children:c.jsx("button",{className:"p-close",onClick:()=>de(!1),children:"閉じる"})})]})})]})})()})]});return c.jsxs("div",{className:"app",children:[c.jsx("style",{children:Wc}),so,u&&c.jsx("div",{className:"overlay",onClick:()=>{h(null),y(!1)},children:c.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[c.jsx("h3",{children:u.mode==="new"?"➕ 新しいルーム":"⚙️ ルーム設定"}),c.jsx("div",{className:"f-label",children:"ルーム名"}),c.jsx("input",{className:"f-input",autoFocus:u.mode==="new",placeholder:"ハートるんず",value:u.name,onChange:d=>h(k=>({...k,name:d.target.value}))}),c.jsx("div",{className:"f-label",children:"アイコン（タップで選ぶ）"}),c.jsx("div",{className:"emoji-picks",children:Dm.map(d=>c.jsx("button",{className:"emoji-pick"+(u.emoji===d?" on":""),onClick:()=>h(k=>({...k,emoji:d})),children:d},d))}),c.jsx("input",{className:"f-input",style:{width:130,textAlign:"center",marginTop:4},maxLength:8,placeholder:"または自由入力",value:u.emoji,onChange:d=>h(k=>({...k,emoji:d.target.value}))}),c.jsx("div",{className:"f-label",children:"テーマカラー"}),c.jsx("div",{className:"theme-swatches",children:Ea.map(d=>{const k=(u.theme||vr)===d;return c.jsx("button",{className:"theme-sw"+(k?" on":""),style:Uc(d),"aria-label":d,onClick:()=>h(C=>({...C,theme:d}))},d)})}),c.jsxs("div",{className:"f-label",children:["タイプ",u.mode==="edit"?"（変更できません）":""]}),c.jsxs("div",{className:"type-row",children:[c.jsxs("button",{className:"type-chip"+(u.type==="diary"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"diary"})),children:["📖 日記",c.jsx("small",{children:"1日=1吹き出し"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="talk"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"talk"})),children:["💬 トーク",c.jsx("small",{children:"話者ごと"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="todo"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"todo"})),children:["✅ TODO",c.jsx("small",{children:"やること"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="darelog"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"darelog"})),children:["🌗 だれログ",c.jsx("small",{children:"朝昼夜の記録"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="expense"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"expense"})),children:["💰 経費",c.jsx("small",{children:"支出を記録"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="challenge"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"challenge"})),children:["🏁 チャレンジ",c.jsx("small",{children:"100個の目標"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="future"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"future"})),children:["🔮 未来日記",c.jsx("small",{children:"1日1篇とどく"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="now"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"now"})),children:["🕐 なう",c.jsx("small",{children:"いまを一言"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="album"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"album"})),children:["📔 絵日記",c.jsx("small",{children:"書いた日記の画像"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="smart"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"smart"})),children:["📝 スマートノート",c.jsx("small",{children:"やったこと5個に点数"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="words"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"words"})),children:["💎 名言",c.jsx("small",{children:"響いた言葉を一覧で"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="praise"?" on":""),disabled:u.mode==="edit",onClick:()=>h(d=>({...d,type:"praise"})),children:["👑 褒め褒め",c.jsx("small",{children:"褒められた言葉を一覧で"})]})]}),u.mode==="edit"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"アプリを開いたとき"}),c.jsxs("button",{className:"shop-toggle"+(u.start?" on":""),onClick:()=>h(d=>({...d,start:!d.start})),children:[c.jsx("span",{className:"shop-box",children:u.start?"✓":""}),"🚀 開いたらこのルームを出す"]})]}),u.mode==="edit"&&u.roomId!==pe&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"一覧での表示"}),c.jsxs("button",{className:"shop-toggle"+(u.hidden?" on":""),onClick:()=>h(d=>({...d,hidden:!d.hidden})),children:[c.jsx("span",{className:"shop-box",children:u.hidden?"✓":""}),"🙈 一覧に表示しない（記録は消えません）"]})]}),u.type==="todo"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"用途"}),c.jsxs("button",{className:"shop-toggle"+(u.shopping?" on":""),onClick:()=>h(d=>({...d,shopping:!d.shopping})),children:[c.jsx("span",{className:"shop-box",children:u.shopping?"✓":""}),"🛒 買い物リストとして使う（よく買うものクイック追加）"]}),c.jsxs("button",{className:"shop-toggle"+(u.numbering?" on":""),onClick:()=>h(d=>({...d,numbering:!d.numbering})),children:[c.jsx("span",{className:"shop-box",children:u.numbering?"✓":""}),"🔢 日ごとに番号をつける（1,2,3…／日付が変わると1から）"]}),c.jsxs("button",{className:"shop-toggle"+(u.noDiary?" on":""),onClick:()=>h(d=>({...d,noDiary:!d.noDiary})),children:[c.jsx("span",{className:"shop-box",children:u.noDiary?"✓":""}),"📓 完了しても日記の「できたこと」に入れない"]})]}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:u.mode==="new"?Ef:Nf,children:u.mode==="new"?"つくる":"保存"}),u.mode==="edit"&&c.jsx("button",{className:"p-del",onClick:Df,children:"削除"}),c.jsx("button",{className:"p-close",onClick:()=>{h(null),y(!1)},children:"閉じる"})]})]})}),te&&c.jsx("div",{className:"overlay",onClick:()=>Te(!1),children:c.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[c.jsx("h3",{children:"💾 まるごとバックアップ"}),c.jsx("p",{className:"panel-note",children:"全ルーム・全データ（日記 / TODO / だれログ / 経費 / 習慣 / 各種設定）を まるごと1ファイルに保存します。端末が変わっても元どおり復元できます。"}),e.some(d=>d.type==="album")&&c.jsxs("p",{className:"panel-note bk-warn",children:["📔 絵日記の",c.jsx("b",{children:"画像だけは入りません"}),"（数百MBになってしまうため）。 元の画像は写真アプリに残しておいてね。日付の記録は入ります。"]}),c.jsxs("div",{className:"bk-last"+(Fi?" stale":""),children:[c.jsx("span",{className:"bk-last-l",children:"最後にバックアップした日"}),c.jsx("span",{className:"bk-last-v",children:ve!=null&&ve.lastDateKey?`${se(ve.lastDateKey)}${Pn===0?"（今日）":`（${Pn}日前）`}`:"まだありません"})]}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:Ii,disabled:Ct,children:"💾 1タップで書き出し"}),c.jsx("button",{className:"p-dl",onClick:Lf,children:"ダウンロード"}),c.jsx("button",{className:"p-dl",onClick:Of,children:Ti?"コピーしたよ💗":"コピー"})]}),c.jsxs("p",{className:"panel-note",children:["ファイル名は毎回 ",c.jsx("b",{children:Sl})," で固定です。ただし 「ファイルに保存」は同じ名前があると ",c.jsx("b",{children:"iOS が勝手に番号を付けて"})," 別ファイルにします。 毎回きっちり上書きしたいときは、共有シートで 「ファイルに保存」ではなく ",c.jsx("b",{children:"ショートカット"}),"（上書き保存する用に作ったもの）を選んでね。"]}),c.jsx("div",{className:"f-label",style:{marginTop:6},children:"復元する（バックアップから読み込み）"}),c.jsx("p",{className:"panel-note",children:"既存のデータは消さず、足りない分だけ追加します（安全マージ）"}),c.jsxs("label",{className:"upload-btn",style:{alignSelf:"flex-start"},children:["📂 バックアップファイルを選ぶ",c.jsx("input",{type:"file",accept:".json,application/json,text/plain",onChange:Mf})]}),c.jsx("textarea",{placeholder:"または、コピーしたバックアップをここに貼り付け",value:xe,onChange:d=>Xe(d.target.value),style:{minHeight:120}}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",disabled:!xe.trim(),onClick:Af,children:"復元する"}),c.jsx("button",{className:"p-close",onClick:()=>{Te(!1),Xe("")},children:"閉じる"})]})]})}),bt&&c.jsx("div",{className:"overlay bk-ask-over",onClick:()=>sn(null),children:c.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[c.jsx("h3",{children:"⚠️ 復元まえの確認"}),c.jsxs("div",{className:"bk-ask-box",children:[c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"ルーム"}),c.jsx("b",{children:bt.counts.rooms})]}),c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"記録の件数"}),c.jsx("b",{children:bt.counts.items})]}),bt.exportedAt&&c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"書き出し日時"}),c.jsx("b",{children:new Date(bt.exportedAt).toLocaleString("ja-JP")})]})]}),c.jsxs("p",{className:"panel-note",children:["今のデータは消えません（足りない分を追加する安全マージ）。 それでも念のため、",c.jsx("b",{children:"先に今のデータをバックアップ"}),"しておくのがおすすめです💗"]}),c.jsx("button",{className:"bk-first",onClick:Ii,disabled:Ct,children:"💾 先に今のデータをバックアップする"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:$f,children:"この内容で復元する"}),c.jsx("button",{className:"p-close",onClick:()=>sn(null),children:"キャンセル"})]})]})}),f&&c.jsx("div",{className:"overlay",onClick:()=>x(null),children:c.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[c.jsx("h3",{children:"🩷 今日のコマ"}),f==="view"?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"decl-full",children:P}),c.jsx("p",{className:"panel-note",children:"その日1日だけピン留め。日記にも記録されています🎬"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:()=>{z(P),x("edit")},children:"書きなおす"}),c.jsx("button",{className:"p-close",onClick:()=>x(null),children:"閉じる"})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("textarea",{autoFocus:!0,style:{minHeight:120},placeholder:"今日は愛全開の私でいる！",value:w,onChange:d=>z(d.target.value)}),c.jsx("p",{className:"panel-note",children:"その日1日だけ表示。決定すると今日の日記の先頭に🎬として残ります"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",disabled:!w.trim(),onClick:()=>{O(w),x(null)},children:"決定"}),c.jsx("button",{className:"p-close",onClick:()=>x(null),children:"閉じる"})]})]})]})}),R&&c.jsx("div",{className:"overlay",onClick:()=>F(!1),children:c.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[c.jsx("h3",{children:"⚙︎ 箇条書きマーク"}),c.jsx("p",{className:"panel-note",children:"日記の入力欄に出るマーク。タップで削除、下から追加できます。"}),c.jsxs("div",{className:"mark-manage",children:[fe.map(d=>c.jsxs("span",{className:"mark-item",children:[d,c.jsx("button",{onClick:()=>zf(d),"aria-label":"削除",children:"✕"})]},d)),fe.length===0&&c.jsx("p",{className:"panel-note",children:"マークがありません。追加してね"})]}),c.jsxs("div",{className:"in-row",style:{marginTop:4},children:[c.jsx("input",{className:"f-input",maxLength:4,placeholder:"記号や絵文字（例: ❤︎）",value:B,onChange:d=>Q(d.target.value),onKeyDown:d=>d.key==="Enter"&&dt()}),c.jsx("button",{className:"p-copy",style:{flex:"0 0 auto",padding:"8px 16px",borderRadius:999},disabled:!B.trim(),onClick:dt,children:"追加"})]}),c.jsx("div",{className:"panel-btns",children:c.jsx("button",{className:"p-close",onClick:()=>F(!1),children:"閉じる"})})]})}),v&&c.jsx(kf,{message:v.message,onConfirm:v.onConfirm,onCancel:()=>b(null)}),eo&&c.jsx("div",{className:"toast",children:eo})]})}let Gc=!1,Jc=!!(navigator.serviceWorker&&navigator.serviceWorker.controller);navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!Jc){Jc=!0;return}Gc||(Gc=!0,window.location.reload())});hg({immediate:!0,onRegisteredSW(e,t){t&&(t.update(),setInterval(()=>t.update(),60*60*1e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&t.update()}))}});$g();df(document.getElementById("root")).render(c.jsx(E.StrictMode,{children:c.jsx(Pm,{})}));export{Ym as $,mt as A,wf as B,Ic as C,Gg as D,am as E,Kg as F,kf as G,vf as H,Bm as I,Fm as J,Km as K,Yc as L,ox as M,Fc as N,Qg as O,Vc as P,im as Q,Gm as R,Jm as S,lx as T,ix as U,Vm as V,Mm as W,Qm as X,Xm as Y,Xg as Z,Hm as _,nx as a,rx as a0,Um as a1,Wm as a2,$m as a3,Im as a4,Am as a5,vr as a6,Ea as a7,za as a8,ex as a9,qm as aa,Om as ab,Lm as ac,Tm as ad,Rm as ae,hm as af,um as ag,tx as b,ja as c,Yg as d,gi as e,Me as f,U as g,hi as h,Zm as i,c as j,se as k,Ko as l,Ge as m,gf as n,hf as o,tt as p,Uo as q,E as r,I as s,Ue as t,sm as u,Sa as v,mf as w,Bc as x,bf as y,ke as z};
