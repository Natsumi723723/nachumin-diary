const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DiaryRoom-CR4IFjJK.js","./InlineEdit-CXTghB2P.js","./TodoRoom-BaCXY4uw.js","./DarelogRoom-Da1Xhqew.js","./TalkRoom-DggnKTLL.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Ic={exports:{}},li={},Ac={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vr=Symbol.for("react.element"),Tf=Symbol.for("react.portal"),Pf=Symbol.for("react.fragment"),Rf=Symbol.for("react.strict_mode"),Of=Symbol.for("react.profiler"),Mf=Symbol.for("react.provider"),$f=Symbol.for("react.context"),If=Symbol.for("react.forward_ref"),Af=Symbol.for("react.suspense"),Ff=Symbol.for("react.memo"),Bf=Symbol.for("react.lazy"),ds=Symbol.iterator;function Uf(e){return e===null||typeof e!="object"?null:(e=ds&&e[ds]||e["@@iterator"],typeof e=="function"?e:null)}var Fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bc=Object.assign,Uc={};function tr(e,t,n){this.props=e,this.context=t,this.refs=Uc,this.updater=n||Fc}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kc(){}Kc.prototype=tr.prototype;function da(e,t,n){this.props=e,this.context=t,this.refs=Uc,this.updater=n||Fc}var fa=da.prototype=new Kc;fa.constructor=da;Bc(fa,tr.prototype);fa.isPureReactComponent=!0;var fs=Array.isArray,Wc=Object.prototype.hasOwnProperty,pa={current:null},Vc={key:!0,ref:!0,__self:!0,__source:!0};function Hc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Wc.call(t,r)&&!Vc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),g=0;g<a;g++)s[g]=arguments[g+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Vr,type:e,key:i,ref:l,props:o,_owner:pa.current}}function Kf(e,t){return{$$typeof:Vr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ha(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vr}function Wf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ps=/\/+/g;function Ci(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wf(""+e.key):t.toString(36)}function vo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Vr:case Tf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ci(l,0):r,fs(o)?(n="",e!=null&&(n=e.replace(ps,"$&/")+"/"),vo(o,t,n,"",function(g){return g})):o!=null&&(ha(o)&&(o=Kf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ps,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",fs(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Ci(i,a);l+=vo(i,t,n,s,o)}else if(s=Uf(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Ci(i,a++),l+=vo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function eo(e,t,n){if(e==null)return e;var r=[],o=0;return vo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Vf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},bo={transition:null},Hf={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:bo,ReactCurrentOwner:pa};function Yc(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:eo,forEach:function(e,t,n){eo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return eo(e,function(){t++}),t},toArray:function(e){return eo(e,function(t){return t})||[]},only:function(e){if(!ha(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=tr;H.Fragment=Pf;H.Profiler=Of;H.PureComponent=da;H.StrictMode=Rf;H.Suspense=Af;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hf;H.act=Yc;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=pa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Wc.call(t,s)&&!Vc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var g=0;g<s;g++)a[g]=arguments[g+2];r.children=a}return{$$typeof:Vr,type:e.type,key:o,ref:i,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:$f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mf,_context:e},e.Consumer=e};H.createElement=Hc;H.createFactory=function(e){var t=Hc.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:If,render:e}};H.isValidElement=ha;H.lazy=function(e){return{$$typeof:Bf,_payload:{_status:-1,_result:e},_init:Vf}};H.memo=function(e,t){return{$$typeof:Ff,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=bo.transition;bo.transition={};try{e()}finally{bo.transition=t}};H.unstable_act=Yc;H.useCallback=function(e,t){return Le.current.useCallback(e,t)};H.useContext=function(e){return Le.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};H.useEffect=function(e,t){return Le.current.useEffect(e,t)};H.useId=function(){return Le.current.useId()};H.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Le.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};H.useRef=function(e){return Le.current.useRef(e)};H.useState=function(e){return Le.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Le.current.useTransition()};H.version="18.3.1";Ac.exports=H;var N=Ac.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf=N,Qf=Symbol.for("react.element"),Xf=Symbol.for("react.fragment"),Gf=Object.prototype.hasOwnProperty,Jf=Yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zf={key:!0,ref:!0,__self:!0,__source:!0};function Qc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Gf.call(t,r)&&!Zf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Qf,type:e,key:i,ref:l,props:o,_owner:Jf.current}}li.Fragment=Xf;li.jsx=Qc;li.jsxs=Qc;Ic.exports=li;var c=Ic.exports,Xc={exports:{}},Xe={},Gc={exports:{}},Jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,I){var F=R.length;R.push(I);e:for(;0<F;){var G=F-1>>>1,le=R[G];if(0<o(le,I))R[G]=I,R[F]=le,F=G;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var I=R[0],F=R.pop();if(F!==I){R[0]=F;e:for(var G=0,le=R.length,st=le>>>1;G<st;){var Ze=2*(G+1)-1,Nt=R[Ze],me=Ze+1,Ue=R[me];if(0>o(Nt,F))me<le&&0>o(Ue,Nt)?(R[G]=Ue,R[me]=F,G=me):(R[G]=Nt,R[Ze]=F,G=Ze);else if(me<le&&0>o(Ue,F))R[G]=Ue,R[me]=F,G=me;else break e}}return I}function o(R,I){var F=R.sortIndex-I.sortIndex;return F!==0?F:R.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],g=[],u=1,h=null,p=3,y=!1,v=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(R){for(var I=n(g);I!==null;){if(I.callback===null)r(g);else if(I.startTime<=R)r(g),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(g)}}function w(R){if(b=!1,x(R),!v)if(n(s)!==null)v=!0,Se(S);else{var I=n(g);I!==null&&at(w,I.startTime-R)}}function S(R,I){v=!1,b&&(b=!1,m(P),P=-1),y=!0;var F=p;try{for(x(I),h=n(s);h!==null&&(!(h.expirationTime>I)||R&&!J());){var G=h.callback;if(typeof G=="function"){h.callback=null,p=h.priorityLevel;var le=G(h.expirationTime<=I);I=e.unstable_now(),typeof le=="function"?h.callback=le:h===n(s)&&r(s),x(I)}else r(s);h=n(s)}if(h!==null)var st=!0;else{var Ze=n(g);Ze!==null&&at(w,Ze.startTime-I),st=!1}return st}finally{h=null,p=F,y=!1}}var C=!1,D=null,P=-1,K=5,M=-1;function J(){return!(e.unstable_now()-M<K)}function Ce(){if(D!==null){var R=e.unstable_now();M=R;var I=!0;try{I=D(!0,R)}finally{I?ce():(C=!1,D=null)}}else C=!1}var ce;if(typeof d=="function")ce=function(){d(Ce)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Je=Pe.port2;Pe.port1.onmessage=Ce,ce=function(){Je.postMessage(null)}}else ce=function(){_(Ce,0)};function Se(R){D=R,C||(C=!0,ce())}function at(R,I){P=_(function(){R(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Se(S))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var F=p;p=I;try{return R()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,I){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=p;p=R;try{return I()}finally{p=F}},e.unstable_scheduleCallback=function(R,I,F){var G=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?G+F:G):F=G,R){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=F+le,R={id:u++,callback:I,priorityLevel:R,startTime:F,expirationTime:le,sortIndex:-1},F>G?(R.sortIndex=F,t(g,R),n(s)===null&&R===n(g)&&(b?(m(P),P=-1):b=!0,at(w,F-G))):(R.sortIndex=le,t(s,R),v||y||(v=!0,Se(S))),R},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(R){var I=p;return function(){var F=p;p=I;try{return R.apply(this,arguments)}finally{p=F}}}})(Jc);Gc.exports=Jc;var qf=Gc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep=N,Ye=qf;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zc=new Set,jr={};function zn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(jr[e]=t,e=0;e<t.length;e++)Zc.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=Object.prototype.hasOwnProperty,tp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hs={},gs={};function np(e){return ul.call(gs,e)?!0:ul.call(hs,e)?!1:tp.test(e)?gs[e]=!0:(hs[e]=!0,!1)}function rp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function op(e,t,n,r){if(t===null||typeof t>"u"||rp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var ga=/[\-:]([a-z])/g;function ma(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ga,ma);ke[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ga,ma);ke[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ga,ma);ke[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function xa(e,t,n,r){var o=ke.hasOwnProperty(t)?ke[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(op(t,n,o,r)&&(n=null),r||o===null?np(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $t=ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),ya=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),qc=Symbol.for("react.provider"),eu=Symbol.for("react.context"),wa=Symbol.for("react.forward_ref"),fl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),va=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),tu=Symbol.for("react.offscreen"),ms=Symbol.iterator;function or(e){return e===null||typeof e!="object"?null:(e=ms&&e[ms]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,_i;function fr(e){if(_i===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_i=t&&t[1]||""}return`
`+_i+e}var Di=!1;function Li(e,t){if(!e||Di)return"";Di=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var o=g.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Di=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fr(e):""}function ip(e){switch(e.tag){case 5:return fr(e.type);case 16:return fr("Lazy");case 13:return fr("Suspense");case 19:return fr("SuspenseList");case 0:case 2:case 15:return e=Li(e.type,!1),e;case 11:return e=Li(e.type.render,!1),e;case 1:return e=Li(e.type,!0),e;default:return""}}function hl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case Dn:return"Portal";case dl:return"Profiler";case ya:return"StrictMode";case fl:return"Suspense";case pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case eu:return(e.displayName||"Context")+".Consumer";case qc:return(e._context.displayName||"Context")+".Provider";case wa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case va:return t=e.displayName||null,t!==null?t:hl(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return hl(e(t))}catch{}}return null}function lp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hl(t);case 8:return t===ya?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ap(e){var t=nu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function no(e){e._valueTracker||(e._valueTracker=ap(e))}function ru(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=nu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gl(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ou(e,t){t=t.checked,t!=null&&xa(e,"checked",t,!1)}function ml(e,t){ou(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xl(e,t.type,n):t.hasOwnProperty("defaultValue")&&xl(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ys(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xl(e,t,n){(t!=="number"||Oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pr=Array.isArray;function Un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ws(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(pr(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function iu(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function lu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?lu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ro,au=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sp=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(e){sp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xr[t]=xr[e]})});function su(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xr.hasOwnProperty(e)&&xr[e]?(""+t).trim():t+"px"}function cu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=su(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var cp=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vl(e,t){if(t){if(cp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kl=null;function ba(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,Kn=null,Wn=null;function bs(e){if(e=Qr(e)){if(typeof Sl!="function")throw Error(z(280));var t=e.stateNode;t&&(t=di(t),Sl(e.stateNode,e.type,t))}}function uu(e){Kn?Wn?Wn.push(e):Wn=[e]:Kn=e}function du(){if(Kn){var e=Kn,t=Wn;if(Wn=Kn=null,bs(e),t)for(e=0;e<t.length;e++)bs(t[e])}}function fu(e,t){return e(t)}function pu(){}var Ti=!1;function hu(e,t,n){if(Ti)return e(t,n);Ti=!0;try{return fu(e,t,n)}finally{Ti=!1,(Kn!==null||Wn!==null)&&(pu(),du())}}function Cr(e,t){var n=e.stateNode;if(n===null)return null;var r=di(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var zl=!1;if(Pt)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){zl=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{zl=!1}function up(e,t,n,r,o,i,l,a,s){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(u){this.onError(u)}}var yr=!1,Mo=null,$o=!1,El=null,dp={onError:function(e){yr=!0,Mo=e}};function fp(e,t,n,r,o,i,l,a,s){yr=!1,Mo=null,up.apply(dp,arguments)}function pp(e,t,n,r,o,i,l,a,s){if(fp.apply(this,arguments),yr){if(yr){var g=Mo;yr=!1,Mo=null}else throw Error(z(198));$o||($o=!0,El=g)}}function En(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ks(e){if(En(e)!==e)throw Error(z(188))}function hp(e){var t=e.alternate;if(!t){if(t=En(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ks(o),e;if(i===r)return ks(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function mu(e){return e=hp(e),e!==null?xu(e):null}function xu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xu(e);if(t!==null)return t;e=e.sibling}return null}var yu=Ye.unstable_scheduleCallback,Ss=Ye.unstable_cancelCallback,gp=Ye.unstable_shouldYield,mp=Ye.unstable_requestPaint,se=Ye.unstable_now,xp=Ye.unstable_getCurrentPriorityLevel,ka=Ye.unstable_ImmediatePriority,wu=Ye.unstable_UserBlockingPriority,Io=Ye.unstable_NormalPriority,yp=Ye.unstable_LowPriority,vu=Ye.unstable_IdlePriority,ai=null,zt=null;function wp(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(ai,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:kp,vp=Math.log,bp=Math.LN2;function kp(e){return e>>>=0,e===0?32:31-(vp(e)/bp|0)|0}var oo=64,io=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=hr(a):(i&=l,i!==0&&(r=hr(i)))}else l=n&~o,l!==0?r=hr(l):i!==0&&(r=hr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),o=1<<n,r|=e[n],t&=~o;return r}function Sp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-gt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Sp(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bu(){var e=oo;return oo<<=1,!(oo&4194240)&&(oo=64),e}function Pi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function Ep(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-gt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var X=0;function ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Su,za,zu,Eu,ju,Nl=!1,lo=[],Ht=null,Yt=null,Qt=null,_r=new Map,Dr=new Map,Ut=[],jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zs(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(t.pointerId)}}function lr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Qr(t),t!==null&&za(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Np(e,t,n,r,o){switch(t){case"focusin":return Ht=lr(Ht,e,t,n,r,o),!0;case"dragenter":return Yt=lr(Yt,e,t,n,r,o),!0;case"mouseover":return Qt=lr(Qt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return _r.set(i,lr(_r.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Dr.set(i,lr(Dr.get(i)||null,e,t,n,r,o)),!0}return!1}function Nu(e){var t=pn(e.target);if(t!==null){var n=En(t);if(n!==null){if(t=n.tag,t===13){if(t=gu(n),t!==null){e.blockedOn=t,ju(e.priority,function(){zu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kl=r,n.target.dispatchEvent(r),kl=null}else return t=Qr(n),t!==null&&za(t),e.blockedOn=n,!1;t.shift()}return!0}function Es(e,t,n){ko(e)&&n.delete(t)}function Cp(){Nl=!1,Ht!==null&&ko(Ht)&&(Ht=null),Yt!==null&&ko(Yt)&&(Yt=null),Qt!==null&&ko(Qt)&&(Qt=null),_r.forEach(Es),Dr.forEach(Es)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,Nl||(Nl=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Cp)))}function Lr(e){function t(o){return ar(o,e)}if(0<lo.length){ar(lo[0],e);for(var n=1;n<lo.length;n++){var r=lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&ar(Ht,e),Yt!==null&&ar(Yt,e),Qt!==null&&ar(Qt,e),_r.forEach(t),Dr.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)Nu(n),n.blockedOn===null&&Ut.shift()}var Vn=$t.ReactCurrentBatchConfig,Fo=!0;function _p(e,t,n,r){var o=X,i=Vn.transition;Vn.transition=null;try{X=1,Ea(e,t,n,r)}finally{X=o,Vn.transition=i}}function Dp(e,t,n,r){var o=X,i=Vn.transition;Vn.transition=null;try{X=4,Ea(e,t,n,r)}finally{X=o,Vn.transition=i}}function Ea(e,t,n,r){if(Fo){var o=Cl(e,t,n,r);if(o===null)Ki(e,t,r,Bo,n),zs(e,r);else if(Np(o,e,t,n,r))r.stopPropagation();else if(zs(e,r),t&4&&-1<jp.indexOf(e)){for(;o!==null;){var i=Qr(o);if(i!==null&&Su(i),i=Cl(e,t,n,r),i===null&&Ki(e,t,r,Bo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ki(e,t,r,null,n)}}var Bo=null;function Cl(e,t,n,r){if(Bo=null,e=ba(r),e=pn(e),e!==null)if(t=En(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bo=e,null}function Cu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xp()){case ka:return 1;case wu:return 4;case Io:case yp:return 16;case vu:return 536870912;default:return 16}default:return 16}}var Wt=null,ja=null,So=null;function _u(){if(So)return So;var e,t=ja,n=t.length,r,o="value"in Wt?Wt.value:Wt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return So=o.slice(e,1<r?1-r:void 0)}function zo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function js(){return!1}function Ge(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ao:js,this.isPropagationStopped=js,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Na=Ge(nr),Yr=ie({},nr,{view:0,detail:0}),Lp=Ge(Yr),Ri,Oi,sr,si=ie({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ca,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(Ri=e.screenX-sr.screenX,Oi=e.screenY-sr.screenY):Oi=Ri=0,sr=e),Ri)},movementY:function(e){return"movementY"in e?e.movementY:Oi}}),Ns=Ge(si),Tp=ie({},si,{dataTransfer:0}),Pp=Ge(Tp),Rp=ie({},Yr,{relatedTarget:0}),Mi=Ge(Rp),Op=ie({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Mp=Ge(Op),$p=ie({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ip=Ge($p),Ap=ie({},nr,{data:0}),Cs=Ge(Ap),Fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Up[e])?!!t[e]:!1}function Ca(){return Kp}var Wp=ie({},Yr,{key:function(e){if(e.key){var t=Fp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ca,charCode:function(e){return e.type==="keypress"?zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vp=Ge(Wp),Hp=ie({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_s=Ge(Hp),Yp=ie({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ca}),Qp=Ge(Yp),Xp=ie({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gp=Ge(Xp),Jp=ie({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zp=Ge(Jp),qp=[9,13,27,32],_a=Pt&&"CompositionEvent"in window,wr=null;Pt&&"documentMode"in document&&(wr=document.documentMode);var eh=Pt&&"TextEvent"in window&&!wr,Du=Pt&&(!_a||wr&&8<wr&&11>=wr),Ds=" ",Ls=!1;function Lu(e,t){switch(e){case"keyup":return qp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function th(e,t){switch(e){case"compositionend":return Tu(t);case"keypress":return t.which!==32?null:(Ls=!0,Ds);case"textInput":return e=t.data,e===Ds&&Ls?null:e;default:return null}}function nh(e,t){if(Tn)return e==="compositionend"||!_a&&Lu(e,t)?(e=_u(),So=ja=Wt=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Du&&t.locale!=="ko"?null:t.data;default:return null}}var rh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rh[e.type]:t==="textarea"}function Pu(e,t,n,r){uu(r),t=Uo(t,"onChange"),0<t.length&&(n=new Na("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,Tr=null;function oh(e){Wu(e,0)}function ci(e){var t=On(e);if(ru(t))return e}function ih(e,t){if(e==="change")return t}var Ru=!1;if(Pt){var $i;if(Pt){var Ii="oninput"in document;if(!Ii){var Ps=document.createElement("div");Ps.setAttribute("oninput","return;"),Ii=typeof Ps.oninput=="function"}$i=Ii}else $i=!1;Ru=$i&&(!document.documentMode||9<document.documentMode)}function Rs(){vr&&(vr.detachEvent("onpropertychange",Ou),Tr=vr=null)}function Ou(e){if(e.propertyName==="value"&&ci(Tr)){var t=[];Pu(t,Tr,e,ba(e)),hu(oh,t)}}function lh(e,t,n){e==="focusin"?(Rs(),vr=t,Tr=n,vr.attachEvent("onpropertychange",Ou)):e==="focusout"&&Rs()}function ah(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(Tr)}function sh(e,t){if(e==="click")return ci(t)}function ch(e,t){if(e==="input"||e==="change")return ci(t)}function uh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:uh;function Pr(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ul.call(t,o)||!xt(e[o],t[o]))return!1}return!0}function Os(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ms(e,t){var n=Os(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Os(n)}}function Mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $u(){for(var e=window,t=Oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oo(e.document)}return t}function Da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dh(e){var t=$u(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mu(n.ownerDocument.documentElement,n)){if(r!==null&&Da(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ms(n,i);var l=Ms(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fh=Pt&&"documentMode"in document&&11>=document.documentMode,Pn=null,_l=null,br=null,Dl=!1;function $s(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dl||Pn==null||Pn!==Oo(r)||(r=Pn,"selectionStart"in r&&Da(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&Pr(br,r)||(br=r,r=Uo(_l,"onSelect"),0<r.length&&(t=new Na("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rn={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Ai={},Iu={};Pt&&(Iu=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function ui(e){if(Ai[e])return Ai[e];if(!Rn[e])return e;var t=Rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Iu)return Ai[e]=t[n];return e}var Au=ui("animationend"),Fu=ui("animationiteration"),Bu=ui("animationstart"),Uu=ui("transitionend"),Ku=new Map,Is="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){Ku.set(e,t),zn(t,[e])}for(var Fi=0;Fi<Is.length;Fi++){var Bi=Is[Fi],ph=Bi.toLowerCase(),hh=Bi[0].toUpperCase()+Bi.slice(1);nn(ph,"on"+hh)}nn(Au,"onAnimationEnd");nn(Fu,"onAnimationIteration");nn(Bu,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(Uu,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gh=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function As(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,pp(r,t,void 0,e),e.currentTarget=null}function Wu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,g=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;As(o,a,g),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,g=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;As(o,a,g),i=s}}}if($o)throw e=El,$o=!1,El=null,e}function q(e,t){var n=t[Ol];n===void 0&&(n=t[Ol]=new Set);var r=e+"__bubble";n.has(r)||(Vu(t,e,2,!1),n.add(r))}function Ui(e,t,n){var r=0;t&&(r|=4),Vu(n,e,r,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[co]){e[co]=!0,Zc.forEach(function(n){n!=="selectionchange"&&(gh.has(n)||Ui(n,!1,e),Ui(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,Ui("selectionchange",!1,t))}}function Vu(e,t,n,r){switch(Cu(t)){case 1:var o=_p;break;case 4:o=Dp;break;default:o=Ea}n=o.bind(null,t,n,e),o=void 0,!zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ki(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=pn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}hu(function(){var g=i,u=ba(n),h=[];e:{var p=Ku.get(e);if(p!==void 0){var y=Na,v=e;switch(e){case"keypress":if(zo(n)===0)break e;case"keydown":case"keyup":y=Vp;break;case"focusin":v="focus",y=Mi;break;case"focusout":v="blur",y=Mi;break;case"beforeblur":case"afterblur":y=Mi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Qp;break;case Au:case Fu:case Bu:y=Mp;break;case Uu:y=Gp;break;case"scroll":y=Lp;break;case"wheel":y=Zp;break;case"copy":case"cut":case"paste":y=Ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=_s}var b=(t&4)!==0,_=!b&&e==="scroll",m=b?p!==null?p+"Capture":null:p;b=[];for(var d=g,x;d!==null;){x=d;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,m!==null&&(w=Cr(d,m),w!=null&&b.push(Or(d,w,x)))),_)break;d=d.return}0<b.length&&(p=new y(p,v,null,n,u),h.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==kl&&(v=n.relatedTarget||n.fromElement)&&(pn(v)||v[Rt]))break e;if((y||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=g,v=v?pn(v):null,v!==null&&(_=En(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=g),y!==v)){if(b=Ns,w="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=_s,w="onPointerLeave",m="onPointerEnter",d="pointer"),_=y==null?p:On(y),x=v==null?p:On(v),p=new b(w,d+"leave",y,n,u),p.target=_,p.relatedTarget=x,w=null,pn(u)===g&&(b=new b(m,d+"enter",v,n,u),b.target=x,b.relatedTarget=_,w=b),_=w,y&&v)t:{for(b=y,m=v,d=0,x=b;x;x=_n(x))d++;for(x=0,w=m;w;w=_n(w))x++;for(;0<d-x;)b=_n(b),d--;for(;0<x-d;)m=_n(m),x--;for(;d--;){if(b===m||m!==null&&b===m.alternate)break t;b=_n(b),m=_n(m)}b=null}else b=null;y!==null&&Fs(h,p,y,b,!1),v!==null&&_!==null&&Fs(h,_,v,b,!0)}}e:{if(p=g?On(g):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=ih;else if(Ts(p))if(Ru)S=ch;else{S=ah;var C=lh}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=sh);if(S&&(S=S(e,g))){Pu(h,S,n,u);break e}C&&C(e,p,g),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&xl(p,"number",p.value)}switch(C=g?On(g):window,e){case"focusin":(Ts(C)||C.contentEditable==="true")&&(Pn=C,_l=g,br=null);break;case"focusout":br=_l=Pn=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,$s(h,n,u);break;case"selectionchange":if(fh)break;case"keydown":case"keyup":$s(h,n,u)}var D;if(_a)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Tn?Lu(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Du&&n.locale!=="ko"&&(Tn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Tn&&(D=_u()):(Wt=u,ja="value"in Wt?Wt.value:Wt.textContent,Tn=!0)),C=Uo(g,P),0<C.length&&(P=new Cs(P,e,null,n,u),h.push({event:P,listeners:C}),D?P.data=D:(D=Tu(n),D!==null&&(P.data=D)))),(D=eh?th(e,n):nh(e,n))&&(g=Uo(g,"onBeforeInput"),0<g.length&&(u=new Cs("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:g}),u.data=D))}Wu(h,t)})}function Or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Uo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Cr(e,n),i!=null&&r.unshift(Or(e,i,o)),i=Cr(e,t),i!=null&&r.push(Or(e,i,o))),e=e.return}return r}function _n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,g=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&g!==null&&(a=g,o?(s=Cr(n,i),s!=null&&l.unshift(Or(n,s,a))):o||(s=Cr(n,i),s!=null&&l.push(Or(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var mh=/\r\n?/g,xh=/\u0000|\uFFFD/g;function Bs(e){return(typeof e=="string"?e:""+e).replace(mh,`
`).replace(xh,"")}function uo(e,t,n){if(t=Bs(t),Bs(e)!==t&&n)throw Error(z(425))}function Ko(){}var Ll=null,Tl=null;function Pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,yh=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,wh=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(e){return Us.resolve(null).then(e).catch(vh)}:Rl;function vh(e){setTimeout(function(){throw e})}function Wi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Lr(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ks(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),St="__reactFiber$"+rr,Mr="__reactProps$"+rr,Rt="__reactContainer$"+rr,Ol="__reactEvents$"+rr,bh="__reactListeners$"+rr,kh="__reactHandles$"+rr;function pn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ks(e);e!==null;){if(n=e[St])return n;e=Ks(e)}return t}e=n,n=e.parentNode}return null}function Qr(e){return e=e[St]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function di(e){return e[Mr]||null}var Ml=[],Mn=-1;function rn(e){return{current:e}}function ee(e){0>Mn||(e.current=Ml[Mn],Ml[Mn]=null,Mn--)}function Z(e,t){Mn++,Ml[Mn]=e.current,e.current=t}var tn={},Ne=rn(tn),Ae=rn(!1),wn=tn;function Xn(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Fe(e){return e=e.childContextTypes,e!=null}function Wo(){ee(Ae),ee(Ne)}function Ws(e,t,n){if(Ne.current!==tn)throw Error(z(168));Z(Ne,t),Z(Ae,n)}function Hu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,lp(e)||"Unknown",o));return ie({},n,r)}function Vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,wn=Ne.current,Z(Ne,e),Z(Ae,Ae.current),!0}function Vs(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=Hu(e,t,wn),r.__reactInternalMemoizedMergedChildContext=e,ee(Ae),ee(Ne),Z(Ne,e)):ee(Ae),Z(Ae,n)}var _t=null,fi=!1,Vi=!1;function Yu(e){_t===null?_t=[e]:_t.push(e)}function Sh(e){fi=!0,Yu(e)}function on(){if(!Vi&&_t!==null){Vi=!0;var e=0,t=X;try{var n=_t;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,fi=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),yu(ka,on),o}finally{X=t,Vi=!1}}return null}var $n=[],In=0,Ho=null,Yo=0,tt=[],nt=0,vn=null,Dt=1,Lt="";function dn(e,t){$n[In++]=Yo,$n[In++]=Ho,Ho=e,Yo=t}function Qu(e,t,n){tt[nt++]=Dt,tt[nt++]=Lt,tt[nt++]=vn,vn=e;var r=Dt;e=Lt;var o=32-gt(r)-1;r&=~(1<<o),n+=1;var i=32-gt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Dt=1<<32-gt(t)+o|n<<o|r,Lt=i+e}else Dt=1<<i|n<<o|r,Lt=e}function La(e){e.return!==null&&(dn(e,1),Qu(e,1,0))}function Ta(e){for(;e===Ho;)Ho=$n[--In],$n[In]=null,Yo=$n[--In],$n[In]=null;for(;e===vn;)vn=tt[--nt],tt[nt]=null,Lt=tt[--nt],tt[nt]=null,Dt=tt[--nt],tt[nt]=null}var He=null,Ve=null,ne=!1,pt=null;function Xu(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Ve=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vn!==null?{id:Dt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Ve=null,!0):!1;default:return!1}}function $l(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Il(e){if(ne){var t=Ve;if(t){var n=t;if(!Hs(e,t)){if($l(e))throw Error(z(418));t=Xt(n.nextSibling);var r=He;t&&Hs(e,t)?Xu(r,n):(e.flags=e.flags&-4097|2,ne=!1,He=e)}}else{if($l(e))throw Error(z(418));e.flags=e.flags&-4097|2,ne=!1,He=e}}}function Ys(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function fo(e){if(e!==He)return!1;if(!ne)return Ys(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pl(e.type,e.memoizedProps)),t&&(t=Ve)){if($l(e))throw Gu(),Error(z(418));for(;t;)Xu(e,t),t=Xt(t.nextSibling)}if(Ys(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=He?Xt(e.stateNode.nextSibling):null;return!0}function Gu(){for(var e=Ve;e;)e=Xt(e.nextSibling)}function Gn(){Ve=He=null,ne=!1}function Pa(e){pt===null?pt=[e]:pt.push(e)}var zh=$t.ReactCurrentBatchConfig;function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qs(e){var t=e._init;return t(e._payload)}function Ju(e){function t(m,d){if(e){var x=m.deletions;x===null?(m.deletions=[d],m.flags|=16):x.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function o(m,d){return m=qt(m,d),m.index=0,m.sibling=null,m}function i(m,d,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<d?(m.flags|=2,d):x):(m.flags|=2,d)):(m.flags|=1048576,d)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,d,x,w){return d===null||d.tag!==6?(d=Zi(x,m.mode,w),d.return=m,d):(d=o(d,x),d.return=m,d)}function s(m,d,x,w){var S=x.type;return S===Ln?u(m,d,x.props.children,w,x.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ft&&Qs(S)===d.type)?(w=o(d,x.props),w.ref=cr(m,d,x),w.return=m,w):(w=Lo(x.type,x.key,x.props,null,m.mode,w),w.ref=cr(m,d,x),w.return=m,w)}function g(m,d,x,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==x.containerInfo||d.stateNode.implementation!==x.implementation?(d=qi(x,m.mode,w),d.return=m,d):(d=o(d,x.children||[]),d.return=m,d)}function u(m,d,x,w,S){return d===null||d.tag!==7?(d=xn(x,m.mode,w,S),d.return=m,d):(d=o(d,x),d.return=m,d)}function h(m,d,x){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Zi(""+d,m.mode,x),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case to:return x=Lo(d.type,d.key,d.props,null,m.mode,x),x.ref=cr(m,null,d),x.return=m,x;case Dn:return d=qi(d,m.mode,x),d.return=m,d;case Ft:var w=d._init;return h(m,w(d._payload),x)}if(pr(d)||or(d))return d=xn(d,m.mode,x,null),d.return=m,d;po(m,d)}return null}function p(m,d,x,w){var S=d!==null?d.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(m,d,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case to:return x.key===S?s(m,d,x,w):null;case Dn:return x.key===S?g(m,d,x,w):null;case Ft:return S=x._init,p(m,d,S(x._payload),w)}if(pr(x)||or(x))return S!==null?null:u(m,d,x,w,null);po(m,x)}return null}function y(m,d,x,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(x)||null,a(d,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case to:return m=m.get(w.key===null?x:w.key)||null,s(d,m,w,S);case Dn:return m=m.get(w.key===null?x:w.key)||null,g(d,m,w,S);case Ft:var C=w._init;return y(m,d,x,C(w._payload),S)}if(pr(w)||or(w))return m=m.get(x)||null,u(d,m,w,S,null);po(d,w)}return null}function v(m,d,x,w){for(var S=null,C=null,D=d,P=d=0,K=null;D!==null&&P<x.length;P++){D.index>P?(K=D,D=null):K=D.sibling;var M=p(m,D,x[P],w);if(M===null){D===null&&(D=K);break}e&&D&&M.alternate===null&&t(m,D),d=i(M,d,P),C===null?S=M:C.sibling=M,C=M,D=K}if(P===x.length)return n(m,D),ne&&dn(m,P),S;if(D===null){for(;P<x.length;P++)D=h(m,x[P],w),D!==null&&(d=i(D,d,P),C===null?S=D:C.sibling=D,C=D);return ne&&dn(m,P),S}for(D=r(m,D);P<x.length;P++)K=y(D,m,P,x[P],w),K!==null&&(e&&K.alternate!==null&&D.delete(K.key===null?P:K.key),d=i(K,d,P),C===null?S=K:C.sibling=K,C=K);return e&&D.forEach(function(J){return t(m,J)}),ne&&dn(m,P),S}function b(m,d,x,w){var S=or(x);if(typeof S!="function")throw Error(z(150));if(x=S.call(x),x==null)throw Error(z(151));for(var C=S=null,D=d,P=d=0,K=null,M=x.next();D!==null&&!M.done;P++,M=x.next()){D.index>P?(K=D,D=null):K=D.sibling;var J=p(m,D,M.value,w);if(J===null){D===null&&(D=K);break}e&&D&&J.alternate===null&&t(m,D),d=i(J,d,P),C===null?S=J:C.sibling=J,C=J,D=K}if(M.done)return n(m,D),ne&&dn(m,P),S;if(D===null){for(;!M.done;P++,M=x.next())M=h(m,M.value,w),M!==null&&(d=i(M,d,P),C===null?S=M:C.sibling=M,C=M);return ne&&dn(m,P),S}for(D=r(m,D);!M.done;P++,M=x.next())M=y(D,m,P,M.value,w),M!==null&&(e&&M.alternate!==null&&D.delete(M.key===null?P:M.key),d=i(M,d,P),C===null?S=M:C.sibling=M,C=M);return e&&D.forEach(function(Ce){return t(m,Ce)}),ne&&dn(m,P),S}function _(m,d,x,w){if(typeof x=="object"&&x!==null&&x.type===Ln&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case to:e:{for(var S=x.key,C=d;C!==null;){if(C.key===S){if(S=x.type,S===Ln){if(C.tag===7){n(m,C.sibling),d=o(C,x.props.children),d.return=m,m=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ft&&Qs(S)===C.type){n(m,C.sibling),d=o(C,x.props),d.ref=cr(m,C,x),d.return=m,m=d;break e}n(m,C);break}else t(m,C);C=C.sibling}x.type===Ln?(d=xn(x.props.children,m.mode,w,x.key),d.return=m,m=d):(w=Lo(x.type,x.key,x.props,null,m.mode,w),w.ref=cr(m,d,x),w.return=m,m=w)}return l(m);case Dn:e:{for(C=x.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===x.containerInfo&&d.stateNode.implementation===x.implementation){n(m,d.sibling),d=o(d,x.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=qi(x,m.mode,w),d.return=m,m=d}return l(m);case Ft:return C=x._init,_(m,d,C(x._payload),w)}if(pr(x))return v(m,d,x,w);if(or(x))return b(m,d,x,w);po(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,d!==null&&d.tag===6?(n(m,d.sibling),d=o(d,x),d.return=m,m=d):(n(m,d),d=Zi(x,m.mode,w),d.return=m,m=d),l(m)):n(m,d)}return _}var Jn=Ju(!0),Zu=Ju(!1),Qo=rn(null),Xo=null,An=null,Ra=null;function Oa(){Ra=An=Xo=null}function Ma(e){var t=Qo.current;ee(Qo),e._currentValue=t}function Al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hn(e,t){Xo=e,Ra=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Ra!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(Xo===null)throw Error(z(308));An=e,Xo.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var hn=null;function $a(e){hn===null?hn=[e]:hn.push(e)}function qu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,$a(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bt=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ed(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ot(e,n)}return o=r.interleaved,o===null?(t.next=t,$a(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ot(e,n)}function Eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}function Xs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Go(e,t,n,r){var o=e.updateQueue;Bt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,g=s.next;s.next=null,l===null?i=g:l.next=g,l=s;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==l&&(a===null?u.firstBaseUpdate=g:a.next=g,u.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,u=g=s=null,a=i;do{var p=a.lane,y=a.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,b=a;switch(p=t,y=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){h=v.call(y,h,p);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,p=typeof v=="function"?v.call(y,h,p):v,p==null)break e;h=ie({},h,p);break e;case 2:Bt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(g=u=y,s=h):u=u.next=y,l|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(u===null&&(s=h),o.baseState=s,o.firstBaseUpdate=g,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);kn|=l,e.lanes=l,e.memoizedState=h}}function Gs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var Xr={},Et=rn(Xr),$r=rn(Xr),Ir=rn(Xr);function gn(e){if(e===Xr)throw Error(z(174));return e}function Aa(e,t){switch(Z(Ir,t),Z($r,e),Z(Et,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wl(t,e)}ee(Et),Z(Et,t)}function Zn(){ee(Et),ee($r),ee(Ir)}function td(e){gn(Ir.current);var t=gn(Et.current),n=wl(t,e.type);t!==n&&(Z($r,e),Z(Et,n))}function Fa(e){$r.current===e&&(ee(Et),ee($r))}var re=rn(0);function Jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hi=[];function Ba(){for(var e=0;e<Hi.length;e++)Hi[e]._workInProgressVersionPrimary=null;Hi.length=0}var jo=$t.ReactCurrentDispatcher,Yi=$t.ReactCurrentBatchConfig,bn=0,oe=null,fe=null,he=null,Zo=!1,kr=!1,Ar=0,Eh=0;function ze(){throw Error(z(321))}function Ua(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function Ka(e,t,n,r,o,i){if(bn=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jo.current=e===null||e.memoizedState===null?_h:Dh,e=n(r,o),kr){i=0;do{if(kr=!1,Ar=0,25<=i)throw Error(z(301));i+=1,he=fe=null,t.updateQueue=null,jo.current=Lh,e=n(r,o)}while(kr)}if(jo.current=qo,t=fe!==null&&fe.next!==null,bn=0,he=fe=oe=null,Zo=!1,t)throw Error(z(300));return e}function Wa(){var e=Ar!==0;return Ar=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?oe.memoizedState=he=e:he=he.next=e,he}function lt(){if(fe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=he===null?oe.memoizedState:he.next;if(t!==null)he=t,fe=e;else{if(e===null)throw Error(z(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},he===null?oe.memoizedState=he=e:he=he.next=e}return he}function Fr(e,t){return typeof t=="function"?t(e):t}function Qi(e){var t=lt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=fe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,g=i;do{var u=g.lane;if((bn&u)===u)s!==null&&(s=s.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var h={lane:u,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,oe.lanes|=u,kn|=u}g=g.next}while(g!==null&&g!==i);s===null?l=r:s.next=a,xt(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,oe.lanes|=i,kn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xi(e){var t=lt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);xt(i,t.memoizedState)||(Ie=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function nd(){}function rd(e,t){var n=oe,r=lt(),o=t(),i=!xt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ie=!0),r=r.queue,Va(ld.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Br(9,id.bind(null,n,r,o,t),void 0,null),ge===null)throw Error(z(349));bn&30||od(n,t,o)}return o}function od(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function id(e,t,n,r){t.value=n,t.getSnapshot=r,ad(t)&&sd(e)}function ld(e,t,n){return n(function(){ad(t)&&sd(e)})}function ad(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function sd(e){var t=Ot(e,1);t!==null&&mt(t,e,1,-1)}function Js(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ch.bind(null,oe,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cd(){return lt().memoizedState}function No(e,t,n,r){var o=kt();oe.flags|=e,o.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function pi(e,t,n,r){var o=lt();r=r===void 0?null:r;var i=void 0;if(fe!==null){var l=fe.memoizedState;if(i=l.destroy,r!==null&&Ua(r,l.deps)){o.memoizedState=Br(t,n,i,r);return}}oe.flags|=e,o.memoizedState=Br(1|t,n,i,r)}function Zs(e,t){return No(8390656,8,e,t)}function Va(e,t){return pi(2048,8,e,t)}function ud(e,t){return pi(4,2,e,t)}function dd(e,t){return pi(4,4,e,t)}function fd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pd(e,t,n){return n=n!=null?n.concat([e]):null,pi(4,4,fd.bind(null,t,e),n)}function Ha(){}function hd(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gd(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function md(e,t,n){return bn&21?(xt(n,t)||(n=bu(),oe.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function jh(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Yi.transition;Yi.transition={};try{e(!1),t()}finally{X=n,Yi.transition=r}}function xd(){return lt().memoizedState}function Nh(e,t,n){var r=Zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yd(e))wd(t,n);else if(n=qu(e,t,n,r),n!==null){var o=De();mt(n,e,r,o),vd(n,t,r)}}function Ch(e,t,n){var r=Zt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yd(e))wd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,xt(a,l)){var s=t.interleaved;s===null?(o.next=o,$a(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=qu(e,t,o,r),n!==null&&(o=De(),mt(n,e,r,o),vd(n,t,r))}}function yd(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function wd(e,t){kr=Zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}var qo={readContext:it,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},_h={readContext:it,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Zs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,No(4194308,4,fd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return No(4194308,4,e,t)},useInsertionEffect:function(e,t){return No(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nh.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:Js,useDebugValue:Ha,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Js(!1),t=e[0];return e=jh.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,o=kt();if(ne){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),ge===null)throw Error(z(349));bn&30||od(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Zs(ld.bind(null,r,i,e),[e]),r.flags|=2048,Br(9,id.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=kt(),t=ge.identifierPrefix;if(ne){var n=Lt,r=Dt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Eh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dh={readContext:it,useCallback:hd,useContext:it,useEffect:Va,useImperativeHandle:pd,useInsertionEffect:ud,useLayoutEffect:dd,useMemo:gd,useReducer:Qi,useRef:cd,useState:function(){return Qi(Fr)},useDebugValue:Ha,useDeferredValue:function(e){var t=lt();return md(t,fe.memoizedState,e)},useTransition:function(){var e=Qi(Fr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:nd,useSyncExternalStore:rd,useId:xd,unstable_isNewReconciler:!1},Lh={readContext:it,useCallback:hd,useContext:it,useEffect:Va,useImperativeHandle:pd,useInsertionEffect:ud,useLayoutEffect:dd,useMemo:gd,useReducer:Xi,useRef:cd,useState:function(){return Xi(Fr)},useDebugValue:Ha,useDeferredValue:function(e){var t=lt();return fe===null?t.memoizedState=e:md(t,fe.memoizedState,e)},useTransition:function(){var e=Xi(Fr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:nd,useSyncExternalStore:rd,useId:xd,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hi={isMounted:function(e){return(e=e._reactInternals)?En(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),o=Zt(e),i=Tt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(mt(t,e,o,r),Eo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),o=Zt(e),i=Tt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(mt(t,e,o,r),Eo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=Zt(e),o=Tt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Gt(e,o,r),t!==null&&(mt(t,e,r,n),Eo(t,e,r))}};function qs(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(o,i):!0}function bd(e,t,n){var r=!1,o=tn,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(o=Fe(t)?wn:Ne.current,r=t.contextTypes,i=(r=r!=null)?Xn(e,o):tn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ec(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hi.enqueueReplaceState(t,t.state,null)}function Bl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ia(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=it(i):(i=Fe(t)?wn:Ne.current,o.context=Xn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Fl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&hi.enqueueReplaceState(o,o.state,null),Go(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function qn(e,t){try{var n="",r=t;do n+=ip(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Gi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ul(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Th=typeof WeakMap=="function"?WeakMap:Map;function kd(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ti||(ti=!0,Zl=r),Ul(e,t)},n}function Sd(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ul(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ul(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function tc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Th;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Hh.bind(null,e,t,n),t.then(e,e))}function nc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var Ph=$t.ReactCurrentOwner,Ie=!1;function _e(e,t,n,r){t.child=e===null?Zu(t,null,n,r):Jn(t,e.child,n,r)}function oc(e,t,n,r,o){n=n.render;var i=t.ref;return Hn(t,o),r=Ka(e,t,n,r,i,o),n=Wa(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(ne&&n&&La(t),t.flags|=1,_e(e,t,r,o),t.child)}function ic(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!es(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,zd(e,t,i,r,o)):(e=Lo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Pr,n(l,r)&&e.ref===t.ref)return Mt(e,t,o)}return t.flags|=1,e=qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function zd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Pr(i,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Mt(e,t,o)}return Kl(e,t,n,r,o)}function Ed(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Bn,Ke),Ke|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Bn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Z(Bn,Ke),Ke|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Z(Bn,Ke),Ke|=r;return _e(e,t,o,n),t.child}function jd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Kl(e,t,n,r,o){var i=Fe(n)?wn:Ne.current;return i=Xn(t,i),Hn(t,o),n=Ka(e,t,n,r,i,o),r=Wa(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(ne&&r&&La(t),t.flags|=1,_e(e,t,n,o),t.child)}function lc(e,t,n,r,o){if(Fe(n)){var i=!0;Vo(t)}else i=!1;if(Hn(t,o),t.stateNode===null)Co(e,t),bd(t,n,r),Bl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,g=n.contextType;typeof g=="object"&&g!==null?g=it(g):(g=Fe(n)?wn:Ne.current,g=Xn(t,g));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==g)&&ec(t,l,r,g),Bt=!1;var p=t.memoizedState;l.state=p,Go(t,r,l,o),s=t.memoizedState,a!==r||p!==s||Ae.current||Bt?(typeof u=="function"&&(Fl(t,n,u,r),s=t.memoizedState),(a=Bt||qs(t,n,a,r,p,s,g))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=g,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ed(e,t),a=t.memoizedProps,g=t.type===t.elementType?a:ut(t.type,a),l.props=g,h=t.pendingProps,p=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=it(s):(s=Fe(n)?wn:Ne.current,s=Xn(t,s));var y=n.getDerivedStateFromProps;(u=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||p!==s)&&ec(t,l,r,s),Bt=!1,p=t.memoizedState,l.state=p,Go(t,r,l,o);var v=t.memoizedState;a!==h||p!==v||Ae.current||Bt?(typeof y=="function"&&(Fl(t,n,y,r),v=t.memoizedState),(g=Bt||qs(t,n,g,r,p,v,s)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=s,r=g):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Wl(e,t,n,r,i,o)}function Wl(e,t,n,r,o,i){jd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Vs(t,n,!1),Mt(e,t,i);r=t.stateNode,Ph.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Jn(t,e.child,null,i),t.child=Jn(t,null,a,i)):_e(e,t,a,i),t.memoizedState=r.state,o&&Vs(t,n,!0),t.child}function Nd(e){var t=e.stateNode;t.pendingContext?Ws(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ws(e,t.context,!1),Aa(e,t.containerInfo)}function ac(e,t,n,r,o){return Gn(),Pa(o),t.flags|=256,_e(e,t,n,r),t.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cd(e,t,n){var r=t.pendingProps,o=re.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Z(re,o&1),e===null)return Il(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=xi(l,r,0,null),e=xn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Hl(n),t.memoizedState=Vl,e):Ya(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Rh(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=qt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=qt(a,i):(i=xn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Hl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Vl,r}return i=e.child,e=i.sibling,r=qt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ya(e,t){return t=xi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ho(e,t,n,r){return r!==null&&Pa(r),Jn(t,e.child,null,n),e=Ya(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Gi(Error(z(422))),ho(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=xi({mode:"visible",children:r.children},o,0,null),i=xn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Jn(t,e.child,null,l),t.child.memoizedState=Hl(l),t.memoizedState=Vl,i);if(!(t.mode&1))return ho(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(z(419)),r=Gi(i,r,void 0),ho(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ie||a){if(r=ge,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ot(e,o),mt(r,e,o,-1))}return qa(),r=Gi(Error(z(421))),ho(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Yh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ve=Xt(o.nextSibling),He=t,ne=!0,pt=null,e!==null&&(tt[nt++]=Dt,tt[nt++]=Lt,tt[nt++]=vn,Dt=e.id,Lt=e.overflow,vn=t),t=Ya(t,r.children),t.flags|=4096,t)}function sc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Al(e.return,t,n)}function Ji(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function _d(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(_e(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sc(e,n,t);else if(e.tag===19)sc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(re,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Jo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ji(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Jo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ji(t,!0,n,null,i);break;case"together":Ji(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Co(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oh(e,t,n){switch(t.tag){case 3:Nd(t),Gn();break;case 5:td(t);break;case 1:Fe(t.type)&&Vo(t);break;case 4:Aa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Z(Qo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?Cd(e,t,n):(Z(re,re.current&1),e=Mt(e,t,n),e!==null?e.sibling:null);Z(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _d(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,Ed(e,t,n)}return Mt(e,t,n)}var Dd,Yl,Ld,Td;Dd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yl=function(){};Ld=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,gn(Et.current);var i=null;switch(n){case"input":o=gl(e,o),r=gl(e,r),i=[];break;case"select":o=ie({},o,{value:void 0}),r=ie({},r,{value:void 0}),i=[];break;case"textarea":o=yl(e,o),r=yl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ko)}vl(n,r);var l;n=null;for(g in o)if(!r.hasOwnProperty(g)&&o.hasOwnProperty(g)&&o[g]!=null)if(g==="style"){var a=o[g];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(jr.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in r){var s=r[g];if(a=o!=null?o[g]:void 0,r.hasOwnProperty(g)&&s!==a&&(s!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(g,n)),n=s;else g==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(g,s)):g==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(g,""+s):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(jr.hasOwnProperty(g)?(s!=null&&g==="onScroll"&&q("scroll",e),i||a===s||(i=[])):(i=i||[]).push(g,s))}n&&(i=i||[]).push("style",n);var g=i;(t.updateQueue=g)&&(t.flags|=4)}};Td=function(e,t,n,r){n!==r&&(t.flags|=4)};function ur(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mh(e,t,n){var r=t.pendingProps;switch(Ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Fe(t.type)&&Wo(),Ee(t),null;case 3:return r=t.stateNode,Zn(),ee(Ae),ee(Ne),Ba(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(ta(pt),pt=null))),Yl(e,t),Ee(t),null;case 5:Fa(t);var o=gn(Ir.current);if(n=t.type,e!==null&&t.stateNode!=null)Ld(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Ee(t),null}if(e=gn(Et.current),fo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[St]=t,r[Mr]=i,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<gr.length;o++)q(gr[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":xs(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":ws(r,i),q("invalid",r)}vl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&uo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&uo(r.textContent,a,e),o=["children",""+a]):jr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&q("scroll",r)}switch(n){case"input":no(r),ys(r,i,!0);break;case"textarea":no(r),vs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ko)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[St]=t,e[Mr]=r,Dd(e,t,!1,!1),t.stateNode=e;e:{switch(l=bl(n,r),n){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<gr.length;o++)q(gr[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":xs(e,r),o=gl(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ie({},r,{value:void 0}),q("invalid",e);break;case"textarea":ws(e,r),o=yl(e,r),q("invalid",e);break;default:o=r}vl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?cu(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&au(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Nr(e,s):typeof s=="number"&&Nr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(jr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&q("scroll",e):s!=null&&xa(e,i,s,l))}switch(n){case"input":no(e),ys(e,r,!1);break;case"textarea":no(e),vs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Un(e,!!r.multiple,i,!1):r.defaultValue!=null&&Un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Td(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=gn(Ir.current),gn(Et.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(i=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Ee(t),null;case 13:if(ee(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Ve!==null&&t.mode&1&&!(t.flags&128))Gu(),Gn(),t.flags|=98560,i=!1;else if(i=fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[St]=t}else Gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else pt!==null&&(ta(pt),pt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?pe===0&&(pe=3):qa())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Zn(),Yl(e,t),e===null&&Rr(t.stateNode.containerInfo),Ee(t),null;case 10:return Ma(t.type._context),Ee(t),null;case 17:return Fe(t.type)&&Wo(),Ee(t),null;case 19:if(ee(re),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)ur(i,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Jo(e),l!==null){for(t.flags|=128,ur(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(re,re.current&1|2),t.child}e=e.sibling}i.tail!==null&&se()>er&&(t.flags|=128,r=!0,ur(i,!1),t.lanes=4194304)}else{if(!r)if(e=Jo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ur(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ne)return Ee(t),null}else 2*se()-i.renderingStartTime>er&&n!==1073741824&&(t.flags|=128,r=!0,ur(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=se(),t.sibling=null,n=re.current,Z(re,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return Za(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function $h(e,t){switch(Ta(t),t.tag){case 1:return Fe(t.type)&&Wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zn(),ee(Ae),ee(Ne),Ba(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fa(t),null;case 13:if(ee(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(re),null;case 4:return Zn(),null;case 10:return Ma(t.type._context),null;case 22:case 23:return Za(),null;case 24:return null;default:return null}}var go=!1,je=!1,Ih=typeof WeakSet=="function"?WeakSet:Set,O=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function Ql(e,t,n){try{n()}catch(r){ae(e,t,r)}}var cc=!1;function Ah(e,t){if(Ll=Fo,e=$u(),Da(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,g=0,u=0,h=e,p=null;t:for(;;){for(var y;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===e)break t;if(p===n&&++g===o&&(a=l),p===i&&++u===r&&(s=l),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tl={focusedElem:e,selectionRange:n},Fo=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,_=v.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:ut(t.type,b),_);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return v=cc,cc=!1,v}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ql(t,n,i)}o=o.next}while(o!==r)}}function gi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pd(e){var t=e.alternate;t!==null&&(e.alternate=null,Pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[Mr],delete t[Ol],delete t[bh],delete t[kh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rd(e){return e.tag===5||e.tag===3||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ko));else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}var we=null,dt=!1;function At(e,t,n){for(n=n.child;n!==null;)Od(e,t,n),n=n.sibling}function Od(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(ai,n)}catch{}switch(n.tag){case 5:je||Fn(n,t);case 6:var r=we,o=dt;we=null,At(e,t,n),we=r,dt=o,we!==null&&(dt?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(dt?(e=we,n=n.stateNode,e.nodeType===8?Wi(e.parentNode,n):e.nodeType===1&&Wi(e,n),Lr(e)):Wi(we,n.stateNode));break;case 4:r=we,o=dt,we=n.stateNode.containerInfo,dt=!0,At(e,t,n),we=r,dt=o;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ql(n,t,l),o=o.next}while(o!==r)}At(e,t,n);break;case 1:if(!je&&(Fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,t,a)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,At(e,t,n),je=r):At(e,t,n);break;default:At(e,t,n)}}function dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ih),t.forEach(function(r){var o=Qh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:we=a.stateNode,dt=!1;break e;case 3:we=a.stateNode.containerInfo,dt=!0;break e;case 4:we=a.stateNode.containerInfo,dt=!0;break e}a=a.return}if(we===null)throw Error(z(160));Od(i,l,o),we=null,dt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(g){ae(o,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Md(t,e),t=t.sibling}function Md(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),bt(e),r&4){try{Sr(3,e,e.return),gi(3,e)}catch(b){ae(e,e.return,b)}try{Sr(5,e,e.return)}catch(b){ae(e,e.return,b)}}break;case 1:ct(t,e),bt(e),r&512&&n!==null&&Fn(n,n.return);break;case 5:if(ct(t,e),bt(e),r&512&&n!==null&&Fn(n,n.return),e.flags&32){var o=e.stateNode;try{Nr(o,"")}catch(b){ae(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ou(o,i),bl(a,l);var g=bl(a,i);for(l=0;l<s.length;l+=2){var u=s[l],h=s[l+1];u==="style"?cu(o,h):u==="dangerouslySetInnerHTML"?au(o,h):u==="children"?Nr(o,h):xa(o,u,h,g)}switch(a){case"input":ml(o,i);break;case"textarea":iu(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Un(o,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?Un(o,!!i.multiple,i.defaultValue,!0):Un(o,!!i.multiple,i.multiple?[]:"",!1))}o[Mr]=i}catch(b){ae(e,e.return,b)}}break;case 6:if(ct(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){ae(e,e.return,b)}}break;case 3:if(ct(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lr(t.containerInfo)}catch(b){ae(e,e.return,b)}break;case 4:ct(t,e),bt(e);break;case 13:ct(t,e),bt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ga=se())),r&4&&dc(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(je=(g=je)||u,ct(t,e),je=g):ct(t,e),bt(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!u&&e.mode&1)for(O=e,u=e.child;u!==null;){for(h=O=u;O!==null;){switch(p=O,y=p.child,p.tag){case 0:case 11:case 14:case 15:Sr(4,p,p.return);break;case 1:Fn(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){ae(r,n,b)}}break;case 5:Fn(p,p.return);break;case 22:if(p.memoizedState!==null){pc(h);continue}}y!==null?(y.return=p,O=y):pc(h)}u=u.sibling}e:for(u=null,h=e;;){if(h.tag===5){if(u===null){u=h;try{o=h.stateNode,g?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=su("display",l))}catch(b){ae(e,e.return,b)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=g?"":h.memoizedProps}catch(b){ae(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ct(t,e),bt(e),r&4&&dc(e);break;case 21:break;default:ct(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rd(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Nr(o,""),r.flags&=-33);var i=uc(e);Jl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=uc(e);Gl(e,a,l);break;default:throw Error(z(161))}}catch(s){ae(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fh(e,t,n){O=e,$d(e)}function $d(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||go;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||je;a=go;var g=je;if(go=l,(je=s)&&!g)for(O=o;O!==null;)l=O,s=l.child,l.tag===22&&l.memoizedState!==null?hc(o):s!==null?(s.return=l,O=s):hc(o);for(;i!==null;)O=i,$d(i),i=i.sibling;O=o,go=a,je=g}fc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):fc(e)}}function fc(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||gi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Gs(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gs(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var u=g.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Lr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}je||t.flags&512&&Xl(t)}catch(p){ae(t,t.return,p)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function pc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function hc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{gi(4,t)}catch(s){ae(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ae(t,o,s)}}var i=t.return;try{Xl(t)}catch(s){ae(t,i,s)}break;case 5:var l=t.return;try{Xl(t)}catch(s){ae(t,l,s)}}}catch(s){ae(t,t.return,s)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Bh=Math.ceil,ei=$t.ReactCurrentDispatcher,Qa=$t.ReactCurrentOwner,ot=$t.ReactCurrentBatchConfig,Q=0,ge=null,de=null,be=0,Ke=0,Bn=rn(0),pe=0,Ur=null,kn=0,mi=0,Xa=0,zr=null,Me=null,Ga=0,er=1/0,Ct=null,ti=!1,Zl=null,Jt=null,mo=!1,Vt=null,ni=0,Er=0,ql=null,_o=-1,Do=0;function De(){return Q&6?se():_o!==-1?_o:_o=se()}function Zt(e){return e.mode&1?Q&2&&be!==0?be&-be:zh.transition!==null?(Do===0&&(Do=bu()),Do):(e=X,e!==0||(e=window.event,e=e===void 0?16:Cu(e.type)),e):1}function mt(e,t,n,r){if(50<Er)throw Er=0,ql=null,Error(z(185));Hr(e,n,r),(!(Q&2)||e!==ge)&&(e===ge&&(!(Q&2)&&(mi|=n),pe===4&&Kt(e,be)),Be(e,r),n===1&&Q===0&&!(t.mode&1)&&(er=se()+500,fi&&on()))}function Be(e,t){var n=e.callbackNode;zp(e,t);var r=Ao(e,e===ge?be:0);if(r===0)n!==null&&Ss(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ss(n),t===1)e.tag===0?Sh(gc.bind(null,e)):Yu(gc.bind(null,e)),wh(function(){!(Q&6)&&on()}),n=null;else{switch(ku(r)){case 1:n=ka;break;case 4:n=wu;break;case 16:n=Io;break;case 536870912:n=vu;break;default:n=Io}n=Vd(n,Id.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Id(e,t){if(_o=-1,Do=0,Q&6)throw Error(z(327));var n=e.callbackNode;if(Yn()&&e.callbackNode!==n)return null;var r=Ao(e,e===ge?be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ri(e,r);else{t=r;var o=Q;Q|=2;var i=Fd();(ge!==e||be!==t)&&(Ct=null,er=se()+500,mn(e,t));do try{Wh();break}catch(a){Ad(e,a)}while(!0);Oa(),ei.current=i,Q=o,de!==null?t=0:(ge=null,be=0,t=pe)}if(t!==0){if(t===2&&(o=jl(e),o!==0&&(r=o,t=ea(e,o))),t===1)throw n=Ur,mn(e,0),Kt(e,r),Be(e,se()),n;if(t===6)Kt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Uh(o)&&(t=ri(e,r),t===2&&(i=jl(e),i!==0&&(r=i,t=ea(e,i))),t===1))throw n=Ur,mn(e,0),Kt(e,r),Be(e,se()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:fn(e,Me,Ct);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=Ga+500-se(),10<t)){if(Ao(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Rl(fn.bind(null,e,Me,Ct),t);break}fn(e,Me,Ct);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-gt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bh(r/1960))-r,10<r){e.timeoutHandle=Rl(fn.bind(null,e,Me,Ct),r);break}fn(e,Me,Ct);break;case 5:fn(e,Me,Ct);break;default:throw Error(z(329))}}}return Be(e,se()),e.callbackNode===n?Id.bind(null,e):null}function ea(e,t){var n=zr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=ri(e,t),e!==2&&(t=Me,Me=n,t!==null&&ta(t)),e}function ta(e){Me===null?Me=e:Me.push.apply(Me,e)}function Uh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!xt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~Xa,t&=~mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function gc(e){if(Q&6)throw Error(z(327));Yn();var t=Ao(e,0);if(!(t&1))return Be(e,se()),null;var n=ri(e,t);if(e.tag!==0&&n===2){var r=jl(e);r!==0&&(t=r,n=ea(e,r))}if(n===1)throw n=Ur,mn(e,0),Kt(e,t),Be(e,se()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fn(e,Me,Ct),Be(e,se()),null}function Ja(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(er=se()+500,fi&&on())}}function Sn(e){Vt!==null&&Vt.tag===0&&!(Q&6)&&Yn();var t=Q;Q|=1;var n=ot.transition,r=X;try{if(ot.transition=null,X=1,e)return e()}finally{X=r,ot.transition=n,Q=t,!(Q&6)&&on()}}function Za(){Ke=Bn.current,ee(Bn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,yh(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wo();break;case 3:Zn(),ee(Ae),ee(Ne),Ba();break;case 5:Fa(r);break;case 4:Zn();break;case 13:ee(re);break;case 19:ee(re);break;case 10:Ma(r.type._context);break;case 22:case 23:Za()}n=n.return}if(ge=e,de=e=qt(e.current,null),be=Ke=t,pe=0,Ur=null,Xa=mi=kn=0,Me=zr=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}hn=null}return e}function Ad(e,t){do{var n=de;try{if(Oa(),jo.current=qo,Zo){for(var r=oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Zo=!1}if(bn=0,he=fe=oe=null,kr=!1,Ar=0,Qa.current=null,n===null||n.return===null){pe=1,Ur=t,de=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=be,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var g=s,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=nc(l);if(y!==null){y.flags&=-257,rc(y,l,a,i,t),y.mode&1&&tc(i,g,t),t=y,s=g;var v=t.updateQueue;if(v===null){var b=new Set;b.add(s),t.updateQueue=b}else v.add(s);break e}else{if(!(t&1)){tc(i,g,t),qa();break e}s=Error(z(426))}}else if(ne&&a.mode&1){var _=nc(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),rc(_,l,a,i,t),Pa(qn(s,a));break e}}i=s=qn(s,a),pe!==4&&(pe=2),zr===null?zr=[i]:zr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=kd(i,s,t);Xs(i,m);break e;case 1:a=s;var d=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Jt===null||!Jt.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Sd(i,a,t);Xs(i,w);break e}}i=i.return}while(i!==null)}Ud(n)}catch(S){t=S,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Fd(){var e=ei.current;return ei.current=qo,e===null?qo:e}function qa(){(pe===0||pe===3||pe===2)&&(pe=4),ge===null||!(kn&268435455)&&!(mi&268435455)||Kt(ge,be)}function ri(e,t){var n=Q;Q|=2;var r=Fd();(ge!==e||be!==t)&&(Ct=null,mn(e,t));do try{Kh();break}catch(o){Ad(e,o)}while(!0);if(Oa(),Q=n,ei.current=r,de!==null)throw Error(z(261));return ge=null,be=0,pe}function Kh(){for(;de!==null;)Bd(de)}function Wh(){for(;de!==null&&!gp();)Bd(de)}function Bd(e){var t=Wd(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?Ud(e):de=t,Qa.current=null}function Ud(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$h(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,de=null;return}}else if(n=Mh(n,t,Ke),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);pe===0&&(pe=5)}function fn(e,t,n){var r=X,o=ot.transition;try{ot.transition=null,X=1,Vh(e,t,n,r)}finally{ot.transition=o,X=r}return null}function Vh(e,t,n,r){do Yn();while(Vt!==null);if(Q&6)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ep(e,i),e===ge&&(de=ge=null,be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,Vd(Io,function(){return Yn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ot.transition,ot.transition=null;var l=X;X=1;var a=Q;Q|=4,Qa.current=null,Ah(e,n),Md(n,e),dh(Tl),Fo=!!Ll,Tl=Ll=null,e.current=n,Fh(n),mp(),Q=a,X=l,ot.transition=i}else e.current=n;if(mo&&(mo=!1,Vt=e,ni=o),i=e.pendingLanes,i===0&&(Jt=null),wp(n.stateNode),Be(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ti)throw ti=!1,e=Zl,Zl=null,e;return ni&1&&e.tag!==0&&Yn(),i=e.pendingLanes,i&1?e===ql?Er++:(Er=0,ql=e):Er=0,on(),null}function Yn(){if(Vt!==null){var e=ku(ni),t=ot.transition,n=X;try{if(ot.transition=null,X=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,ni=0,Q&6)throw Error(z(331));var o=Q;for(Q|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var g=a[s];for(O=g;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:Sr(8,u,i)}var h=u.child;if(h!==null)h.return=u,O=h;else for(;O!==null;){u=O;var p=u.sibling,y=u.return;if(Pd(u),u===g){O=null;break}if(p!==null){p.return=y,O=p;break}O=y}}}var v=i.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Sr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,O=m;break e}O=i.return}}var d=e.current;for(O=d;O!==null;){l=O;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,O=x;else e:for(l=d;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gi(9,a)}}catch(S){ae(a,a.return,S)}if(a===l){O=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,O=w;break e}O=a.return}}if(Q=o,on(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(ai,e)}catch{}r=!0}return r}finally{X=n,ot.transition=t}}return!1}function mc(e,t,n){t=qn(n,t),t=kd(e,t,1),e=Gt(e,t,1),t=De(),e!==null&&(Hr(e,1,t),Be(e,t))}function ae(e,t,n){if(e.tag===3)mc(e,e,n);else for(;t!==null;){if(t.tag===3){mc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=qn(n,e),e=Sd(t,e,1),t=Gt(t,e,1),e=De(),t!==null&&(Hr(t,1,e),Be(t,e));break}}t=t.return}}function Hh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(be&n)===n&&(pe===4||pe===3&&(be&130023424)===be&&500>se()-Ga?mn(e,0):Xa|=n),Be(e,t)}function Kd(e,t){t===0&&(e.mode&1?(t=io,io<<=1,!(io&130023424)&&(io=4194304)):t=1);var n=De();e=Ot(e,t),e!==null&&(Hr(e,t,n),Be(e,n))}function Yh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kd(e,n)}function Qh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),Kd(e,n)}var Wd;Wd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,Oh(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,ne&&t.flags&1048576&&Qu(t,Yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Co(e,t),e=t.pendingProps;var o=Xn(t,Ne.current);Hn(t,n),o=Ka(null,t,r,e,o,n);var i=Wa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(i=!0,Vo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ia(t),o.updater=hi,t.stateNode=o,o._reactInternals=t,Bl(t,r,e,n),t=Wl(null,t,r,!0,i,n)):(t.tag=0,ne&&i&&La(t),_e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Co(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Gh(r),e=ut(r,e),o){case 0:t=Kl(null,t,r,e,n);break e;case 1:t=lc(null,t,r,e,n);break e;case 11:t=oc(null,t,r,e,n);break e;case 14:t=ic(null,t,r,ut(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),Kl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),lc(e,t,r,o,n);case 3:e:{if(Nd(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ed(e,t),Go(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=qn(Error(z(423)),t),t=ac(e,t,r,n,o);break e}else if(r!==o){o=qn(Error(z(424)),t),t=ac(e,t,r,n,o);break e}else for(Ve=Xt(t.stateNode.containerInfo.firstChild),He=t,ne=!0,pt=null,n=Zu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===o){t=Mt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return td(t),e===null&&Il(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Pl(r,o)?l=null:i!==null&&Pl(r,i)&&(t.flags|=32),jd(e,t),_e(e,t,l,n),t.child;case 6:return e===null&&Il(t),null;case 13:return Cd(e,t,n);case 4:return Aa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jn(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),oc(e,t,r,o,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Z(Qo,r._currentValue),r._currentValue=l,i!==null)if(xt(i.value,l)){if(i.children===o.children&&!Ae.current){t=Mt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Tt(-1,n&-n),s.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var u=g.pending;u===null?s.next=s:(s.next=u.next,u.next=s),g.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Al(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(z(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Al(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}_e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Hn(t,n),o=it(o),r=r(o),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,o=ut(r,t.pendingProps),o=ut(r.type,o),ic(e,t,r,o,n);case 15:return zd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),Co(e,t),t.tag=1,Fe(r)?(e=!0,Vo(t)):e=!1,Hn(t,n),bd(t,r,o),Bl(t,r,o,n),Wl(null,t,r,!0,e,n);case 19:return _d(e,t,n);case 22:return Ed(e,t,n)}throw Error(z(156,t.tag))};function Vd(e,t){return yu(e,t)}function Xh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new Xh(e,t,n,r)}function es(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gh(e){if(typeof e=="function")return es(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wa)return 11;if(e===va)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")es(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ln:return xn(n.children,o,i,t);case ya:l=8,o|=8;break;case dl:return e=rt(12,n,t,o|2),e.elementType=dl,e.lanes=i,e;case fl:return e=rt(13,n,t,o),e.elementType=fl,e.lanes=i,e;case pl:return e=rt(19,n,t,o),e.elementType=pl,e.lanes=i,e;case tu:return xi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qc:l=10;break e;case eu:l=9;break e;case wa:l=11;break e;case va:l=14;break e;case Ft:l=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=rt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function xn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function xi(e,t,n,r){return e=rt(22,e,r,t),e.elementType=tu,e.lanes=n,e.stateNode={isHidden:!1},e}function Zi(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function qi(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ts(e,t,n,r,o,i,l,a,s){return e=new Jh(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ia(i),e}function Zh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hd(e){if(!e)return tn;e=e._reactInternals;e:{if(En(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Fe(n))return Hu(e,n,t)}return t}function Yd(e,t,n,r,o,i,l,a,s){return e=ts(n,r,!0,e,o,i,l,a,s),e.context=Hd(null),n=e.current,r=De(),o=Zt(n),i=Tt(r,o),i.callback=t??null,Gt(n,i,o),e.current.lanes=o,Hr(e,o,r),Be(e,r),e}function yi(e,t,n,r){var o=t.current,i=De(),l=Zt(o);return n=Hd(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(o,t,l),e!==null&&(mt(e,o,l,i),Eo(e,o,l)),l}function oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ns(e,t){xc(e,t),(e=e.alternate)&&xc(e,t)}function qh(){return null}var Qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function rs(e){this._internalRoot=e}wi.prototype.render=rs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));yi(e,t,null,null)};wi.prototype.unmount=rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){yi(null,e,null,null)}),t[Rt]=null}};function wi(e){this._internalRoot=e}wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Eu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&Nu(e)}};function os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yc(){}function eg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var g=oi(l);i.call(g)}}var l=Yd(t,r,e,0,null,!1,!1,"",yc);return e._reactRootContainer=l,e[Rt]=l.current,Rr(e.nodeType===8?e.parentNode:e),Sn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var g=oi(s);a.call(g)}}var s=ts(e,0,!1,null,null,!1,!1,"",yc);return e._reactRootContainer=s,e[Rt]=s.current,Rr(e.nodeType===8?e.parentNode:e),Sn(function(){yi(t,s,n,r)}),s}function bi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=oi(l);a.call(s)}}yi(t,l,e,o)}else l=eg(n,t,e,o,r);return oi(l)}Su=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(Sa(t,n|1),Be(t,se()),!(Q&6)&&(er=se()+500,on()))}break;case 13:Sn(function(){var r=Ot(e,1);if(r!==null){var o=De();mt(r,e,1,o)}}),ns(e,1)}};za=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=De();mt(t,e,134217728,n)}ns(e,134217728)}};zu=function(e){if(e.tag===13){var t=Zt(e),n=Ot(e,t);if(n!==null){var r=De();mt(n,e,t,r)}ns(e,t)}};Eu=function(){return X};ju=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Sl=function(e,t,n){switch(t){case"input":if(ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=di(r);if(!o)throw Error(z(90));ru(r),ml(r,o)}}}break;case"textarea":iu(e,n);break;case"select":t=n.value,t!=null&&Un(e,!!n.multiple,t,!1)}};fu=Ja;pu=Sn;var tg={usingClientEntryPoint:!1,Events:[Qr,On,di,uu,du,Ja]},dr={findFiberByHostInstance:pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ng={bundleType:dr.bundleType,version:dr.version,rendererPackageName:dr.rendererPackageName,rendererConfig:dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mu(e),e===null?null:e.stateNode},findFiberByHostInstance:dr.findFiberByHostInstance||qh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{ai=xo.inject(ng),zt=xo}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tg;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!os(t))throw Error(z(200));return Zh(e,t,null,n)};Xe.createRoot=function(e,t){if(!os(e))throw Error(z(299));var n=!1,r="",o=Qd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ts(e,1,!1,null,null,n,!1,r,o),e[Rt]=t.current,Rr(e.nodeType===8?e.parentNode:e),new rs(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=mu(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return Sn(e)};Xe.hydrate=function(e,t,n){if(!vi(t))throw Error(z(200));return bi(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!os(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Qd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Yd(t,null,e,1,n??null,o,!1,i,l),e[Rt]=t.current,Rr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new wi(t)};Xe.render=function(e,t,n){if(!vi(t))throw Error(z(200));return bi(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!vi(e))throw Error(z(40));return e._reactRootContainer?(Sn(function(){bi(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};Xe.unstable_batchedUpdates=Ja;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vi(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return bi(e,t,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function Xd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xd)}catch(e){console.error(e)}}Xd(),Xc.exports=Xe;var rg=Xc.exports,Gd,wc=rg;Gd=wc.createRoot,wc.hydrateRoot;const og="modulepreload",ig=function(e,t){return new URL(e,t).href},vc={},jt=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(g=>{if(g=ig(g,r),g in vc)return;vc[g]=!0;const u=g.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!r)for(let v=l.length-1;v>=0;v--){const b=l[v];if(b.href===g&&(!u||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${h}`))return;const y=document.createElement("link");if(y.rel=u?"stylesheet":og,u||(y.as="script"),y.crossOrigin="",y.href=g,s&&y.setAttribute("nonce",s),document.head.appendChild(y),u)return new Promise((v,b)=>{y.addEventListener("load",v),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${g}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};function lg(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:l}=e;let a,s;const g=async(h=!0)=>{await s};async function u(){if("serviceWorker"in navigator){if(a=await jt(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:h}},[],import.meta.url).then(({Workbox:h})=>new h("./sw.js",{scope:"./",type:"classic"})).catch(h=>{l==null||l(h)}),!a)return;a.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),a.addEventListener("installed",h=>{h.isUpdate||r==null||r()}),a.register({immediate:t}).then(h=>{i?i("./sw.js",h):o==null||o(h)}).catch(h=>{l==null||l(h)})}}return s=u(),g}const na=(e,t)=>t.some(n=>e instanceof n);let bc,kc;function ag(){return bc||(bc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sg(){return kc||(kc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ra=new WeakMap,el=new WeakMap,ki=new WeakMap;function cg(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",l)},i=()=>{n(yn(e.result)),o()},l=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",l)});return ki.set(t,e),t}function ug(e){if(ra.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",l),e.removeEventListener("abort",l)},i=()=>{n(),o()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",l),e.addEventListener("abort",l)});ra.set(e,t)}let oa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ra.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Jd(e){oa=e(oa)}function dg(e){return sg().includes(e)?function(...t){return e.apply(ia(this),t),yn(this.request)}:function(...t){return yn(e.apply(ia(this),t))}}function fg(e){return typeof e=="function"?dg(e):(e instanceof IDBTransaction&&ug(e),na(e,ag())?new Proxy(e,oa):e)}function yn(e){if(e instanceof IDBRequest)return cg(e);if(el.has(e))return el.get(e);const t=fg(e);return t!==e&&(el.set(e,t),ki.set(t,e)),t}const ia=e=>ki.get(e);function pg(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const l=indexedDB.open(e,t),a=yn(l);return r&&l.addEventListener("upgradeneeded",s=>{r(yn(l.result),s.oldVersion,s.newVersion,yn(l.transaction),s)}),n&&l.addEventListener("blocked",s=>n(s.oldVersion,s.newVersion,s)),a.then(s=>{i&&s.addEventListener("close",()=>i()),o&&s.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),a}const hg=["get","getKey","getAll","getAllKeys","count"],gg=["put","add","delete","clear"],tl=new Map;function Sc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(tl.get(t))return tl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=gg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||hg.includes(n)))return;const i=async function(l,...a){const s=this.transaction(l,o?"readwrite":"readonly");let g=s.store;return r&&(g=g.index(a.shift())),(await Promise.all([g[n](...a),o&&s.done]))[0]};return tl.set(t,i),i}Jd(e=>({...e,get:(t,n,r)=>Sc(t,n)||e.get(t,n,r),has:(t,n)=>!!Sc(t,n)||e.has(t,n)}));const mg=["continue","continuePrimaryKey","advance"],zc={},la=new WeakMap,Zd=new WeakMap,xg={get(e,t){if(!mg.includes(t))return e[t];let n=zc[t];return n||(n=zc[t]=function(...r){la.set(this,Zd.get(this)[t](...r))}),n}};async function*yg(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const n=new Proxy(t,xg);for(Zd.set(n,t),ki.set(n,ia(t));t;)yield n,t=await(la.get(n)||t.continue()),la.delete(n)}function Ec(e,t){return t===Symbol.asyncIterator&&na(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&na(e,[IDBIndex,IDBObjectStore])}Jd(e=>({...e,get(t,n,r){return Ec(t,n)?yg:e.get(t,n,r)},has(t,n){return Ec(t,n)||e.has(t,n)}}));const wg="nachumin-diary",vg=1,Kr="kv",bg="line-diary-entries-v1",We="rooms-v1",$e=e=>`room-data-v1:${e}`,kg=e=>`trash-v1:${e}:${Date.now()}`,To="declaration-v1",Wr="marks-v1",Sg=["・","❤︎","🩷","💛","🩵","💜","✨","✔︎"],ii=e=>`donelog-v1:${e}`,Po=e=>`habits-v1:${e}`,qd=e=>`habitlog-v1:${e}`,ef=e=>`habitseed-v1:${e}`,aa=e=>`period-v1:${e}`,Ro=e=>`symptoms-v1:${e}`,tf=e=>`symptomlog-v1:${e}`,nf=e=>`symptomseed-v1:${e}`,sa=e=>`futurescript-v1:${e}`,ym=(e,t)=>`albumfull-v1:${e}:${t}`,wm=(e,t)=>`albumthumb-v1:${e}:${t}`,nl="albumseed-v1",zg="album-main",rl="smartseed-v1",Eg="smart-main",ol="nowseed-v1",jg="now-main",il="futureseed-v1",Ng="future-main",jc="startroom-v1",ll="backup-v1",ue="diary-main",is=pg(wg,vg,{upgrade(e){e.objectStoreNames.contains(Kr)||e.createObjectStore(Kr)}});async function W(e){return(await is).get(Kr,e)}async function B(e,t){return(await is).put(Kr,t,e)}async function vm(e){return(await is).delete(Kr,e)}async function bm(){try{if(navigator.storage&&navigator.storage.estimate)return await navigator.storage.estimate()}catch{}return null}async function Cg(){try{navigator.storage&&navigator.storage.persist&&await navigator.storage.persist()}catch{}}async function _g(){const e=await W(We);if(e)return e;let t=await W(bg);if(typeof t=="string")try{t=JSON.parse(t)}catch{t=null}const n=t&&typeof t=="object"?t:{};await B($e(ue),n);const r=Object.keys(n).sort(),o=r[r.length-1],i=[{id:ue,type:"diary",name:"日記",emoji:"💗",createdAt:Date.now(),lastAt:o?Date.now():0,preview:o?n[o].text.split(`
`)[0].slice(0,40):""}];return await B(We,i),i}const Dg=5,Lg=Dg*60*60*1e3,rf=()=>new Date(Date.now()-Lg),Qe=e=>String(e).padStart(2,"0"),ht=e=>`${e.getFullYear()}-${Qe(e.getMonth()+1)}-${Qe(e.getDate())}`,ye=e=>e.split("-").join("/"),ve=e=>{const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},of=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],km=["S","M","T","W","T","F","S"],Tg=e=>`${ye(e)} ${of[ve(e).getDay()]}`,yo=(e,t,n)=>1+(8-new Date(e,t-1,1).getDay())%7+(n-1)*7,Pg=e=>Math.floor(20.8431+.242194*(e-1980)-Math.floor((e-1980)/4)),Rg=e=>Math.floor(23.2488+.242194*(e-1980)-Math.floor((e-1980)/4)),al={};function Og(e){if(al[e])return al[e];const t={},n=(r,o,i)=>{t[`${e}-${Qe(r)}-${Qe(o)}`]=i};n(1,1,"元日"),n(1,yo(e,1,2),"成人の日"),n(2,11,"建国記念の日"),n(2,23,"天皇誕生日"),n(3,Pg(e),"春分の日"),n(4,29,"昭和の日"),n(5,3,"憲法記念日"),n(5,4,"みどりの日"),n(5,5,"こどもの日"),n(7,yo(e,7,3),"海の日"),n(8,11,"山の日"),n(9,yo(e,9,3),"敬老の日"),n(9,Rg(e),"秋分の日"),n(10,yo(e,10,2),"スポーツの日"),n(11,3,"文化の日"),n(11,23,"勤労感謝の日");for(const r of Object.keys(t)){const o=ve(r),i=new Date(o);i.setDate(i.getDate()+1);const l=new Date(o);l.setDate(l.getDate()+2),t[ht(l)]&&!t[ht(i)]&&i.getDay()!==0&&(t[ht(i)]="国民の休日")}for(const r of Object.keys({...t})){if(ve(r).getDay()!==0)continue;const o=ve(r);do o.setDate(o.getDate()+1);while(t[ht(o)]);t[ht(o)]="振替休日"}return al[e]=t,t}const Mg=e=>!!Og(Number(e.slice(0,4)))[e],$g=e=>{if(Mg(e))return"sun";const t=ve(e).getDay();return t===0?"sun":t===6?"sat":""},Sm=e=>"¥"+Math.round(Number(e)||0).toLocaleString("ja-JP"),zm=e=>e.slice(0,7),Em=(e,t)=>{const[n,r]=e.split("-");return(t&&Number(n)===t?"":`${n}年`)+`${Number(r)}月`},ft=()=>ht(rf()),Nc=()=>{const e=rf();return e.setDate(e.getDate()-1),ht(e)},lf=()=>{const e=new Date;return`${e.getHours()}:${Qe(e.getMinutes())}`},Ig=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),jm=e=>String(e||"").replace(/[\/\\:*?"<>| -]/g,"_").replace(/\s+/g," ").trim()||"room";async function Ag(e){try{return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.top="0",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}const et=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36),Nm=e=>Object.keys(e).sort().map(t=>`🩷${Tg(t)}🩷 ${e[t].time}
${e[t].text}`).join(`

──────────

`),Cm=e=>{const t={},n=e.split(/\n*─{3,}\n*/);for(const r of n){const o=r.trim();if(!o)continue;const i=o.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*(?:[（(]?(?:[A-Za-z]{3}|[日月火水木金土])[)）]?)?\s*🩷?\s*(\d{1,2}:\d{2})?\s*\n?([\s\S]*)$/u);if(!i)continue;const l=`${i[1]}-${Qe(Number(i[2]))}-${Qe(Number(i[3]))}`,a=i[5].trim();a&&(t[l]={text:a,time:i[4]||"0:00"})}return t},_m=(e,t)=>{const n=[];let r="";for(const o of e)o.dateKey!==r&&(r=o.dateKey,n.length&&n.push(""),n.push(`🩷${ye(r)}🩷`)),n.push(`${o.time?o.time+" ":""}${t(o.memberId)}「${o.text}」`);return n.join(`
`)},Dm=e=>{const t=[];let n=ft(),r=null;const o=()=>{if(!r)return;let i=r.lines.join(`
`).trim();i.endsWith("」")&&(i=i.slice(0,-1)),i&&t.push({dateKey:r.dateKey,name:r.name,time:r.time,text:i}),r=null};for(const i of e.split(`
`)){const l=i.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(l){o(),n=`${l[1]}-${Qe(Number(l[2]))}-${Qe(Number(l[3]))}`;continue}if(r)r.lines.push(i);else{const s=i.match(/^(?:(\d{1,2}:\d{2})\s+)?(.+?)「([\s\S]*)$/u);if(!s)continue;r={dateKey:n,name:s[2].trim(),time:s[1]||"",lines:[s[3]]}}const a=r.lines[r.lines.length-1].trimEnd();a.endsWith("」")&&(r.lines[r.lines.length-1]=a,o())}return o(),t},Fg=[{key:"morning",label:"朝",emoji:"🌅"},{key:"noon",label:"昼",emoji:"☀️"},{key:"night",label:"夜",emoji:"🌙"}],Lm=()=>{const e=new Date().getHours();return e>=5&&e<11?"morning":e>=11&&e<17?"noon":"night"},Tm=(e,t)=>{var i;const n=l=>{var a;return((a=t.find(s=>s.id===l))==null?void 0:a.name)||"？"},r={};for(const l of e)(r[i=l.dateKey]||(r[i]={morning:[],noon:[],night:[]}))[l.slot].push(l);const o=[];for(const l of Object.keys(r).sort()){const a=[];for(const s of Fg){const g=r[l][s.key];if(!g.length)continue;const u=g.map(h=>n(h.memberId)+(h.memo&&h.memo.trim()?`(${h.memo.trim()})`:"")).join("・");a.push(`${s.emoji}${s.label}:${u}`)}a.length&&o.push(`🩷${ye(l)}🩷 ${a.join(" / ")}`)}return o.join(`
`)},Pm=e=>{const t=[],n=r=>r.includes("朝")?"morning":r.includes("昼")?"noon":r.includes("夜")?"night":null;for(const r of e.split(`
`)){const o=r.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(.*)$/u);if(!o)continue;const i=`${o[1]}-${Qe(Number(o[2]))}-${Qe(Number(o[3]))}`,l=o[4];if(l.trim())for(const a of l.split("/")){const s=a.indexOf(":"),g=a.indexOf("："),u=s===-1?g:g===-1?s:Math.min(s,g);if(u===-1)continue;const h=n(a.slice(0,u));if(!h)continue;const p=a.slice(u+1);for(const y of p.split("・")){const v=y.trim().match(/^(.+?)(?:[(（]([\s\S]*)[)）])?$/u);if(!v)continue;const b=v[1].trim();b&&t.push({dateKey:i,slot:h,name:b,memo:(v[2]||"").trim()})}}}return t},Rm=e=>{var n;const t={};for(const r of e)(t[n=r.dateKey]||(t[n]={morning:[],noon:[],night:[]}))[r.slot].push(r);return t},Om=(e,t)=>{let n=t;for(const l of e)l.dateKey<n&&(n=l.dateKey);ve(t);const r=ve(t);r.setDate(r.getDate()-34);const o=ve(n)<r?ve(n):r,i=[];for(let l=new Date(o);ht(l)<=t;l.setDate(l.getDate()+1))i.push(ht(l));return i},Mm=e=>{const t=[];for(const n of String(e||"").split(`
`)){let r=n.trim();r&&(/^🩷?\s*\d{4}[/-]\d{1,2}[/-]\d{1,2}\s*🩷?\s*$/u.test(r)||(r=r.replace(/^[★☆☐☑✓□■●○・\-*+•‣▪️\s]+/u,"").trim(),r&&t.push(r)))}return t},$m=e=>{const t=[];let n=ft();for(const r of e.split(`
`)){const o=r.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(o){n=`${o[1]}-${Qe(Number(o[2]))}-${Qe(Number(o[3]))}`;continue}const i=r.match(/^\s*(★\s*)?([☑☐✓])\s+(.+)$/u);if(!i)continue;const l=!!i[1],a=i[2]==="☑"||i[2]==="✓",s=i[3].trim();s&&t.push({dateKey:n,text:s,done:a,important:l})}return t},Bg="🩷 できたこと",Im=e=>{const t=(e||"").split(`
`),n=t.indexOf(Bg);if(n===-1)return{text:e||"",items:[]};const r=[];let o=n+1;for(;o<t.length&&t[o].startsWith("☑ ");){const a=t[o].match(/^☑ (.*?)(?: \((\d{1,2}:\d{2})\))?$/u);a&&r.push({text:a[1],time:a[2]||""}),o++}let i=n;return i-1>=0&&t[i-1]===""&&(i-=1),t.splice(i,o-i),{text:t.join(`
`).replace(/\n{3,}/g,`

`).replace(/\s+$/,""),items:r}},af="🎬 今日のコマ: ",Ug=e=>(e||"").split(`
`).filter(t=>!t.startsWith(af)).join(`
`).replace(/^\n+/,""),Kg=(e,t)=>{const n=Ug(e).trim(),r=af+t;return n?`${r}

${n}`:r},ls=(e,t)=>{const n=ve(e);return n.setDate(n.getDate()+t),ht(n)},ca=(e,t)=>Math.round((ve(t)-ve(e))/864e5),Cc=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(String(e||""));if(!t)return 99999;const n=Number(t[1]);return(n<5?n+24:n)*60+Number(t[2])},Am=(e,t)=>{const n=ve(e),r=n.getDate();n.setDate(1),n.setMonth(n.getMonth()+t);const o=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return n.setDate(Math.min(r,o)),ht(n)},Fm=e=>{if(e<12)return`${e}ヶ月後`;const t=Math.floor(e/12),n=e%12;return n===0?`${t}年後`:n===6?`${t}年半後`:`${t}年${n}ヶ月後`},Bm=e=>{const t=[...new Set(e||[])].sort();if(!t.length)return[];const n=[];for(const o of t){const i=n[n.length-1];i&&ls(i.end,1)===o?i.end=o:n.push({start:o,end:o})}return n.map((o,i)=>({start:o.start,end:o.end,length:ca(o.start,o.end)+1,cycle:i<n.length-1?ca(o.start,n[i+1].start):null,ongoing:i===n.length-1})).reverse()},Um=(e,t,n=3)=>{const r=e.filter(s=>s.cycle!=null).map(s=>s.cycle);if(!r.length||!e.length)return null;const o=r.slice(0,n),i=Math.round(o.reduce((s,g)=>s+g,0)/o.length),l=e[0].start,a=ls(l,i);return{next:a,avg:i,daysLeft:ca(t,a),min:Math.min(...r),max:Math.max(...r),count:r.length}},Wg={morning:"🌅",noon:"☀️",night:"🌙"},sl="nachumin-diary-backup.json";function Vg(e){if(!e||typeof e!="object"||Array.isArray(e))return"バックアップの形式が読めませんでした 🥺";if(e.app!=="nachumin-diary")return"これは Nachumin Lifelog のバックアップファイルではないみたい 🥺";if(!Array.isArray(e.rooms))return"ルームの情報が入っていません。ファイルが壊れているかも 🥺";if(e.rooms.some(t=>!t||typeof t!="object"||!t.id||!t.type))return"ルームの形式が壊れています 🥺";if(e.data!=null&&(typeof e.data!="object"||Array.isArray(e.data)))return"ルームの中身の形式が壊れています 🥺";for(const t of["doneLogs","habits","habitLogs","habitSeeds","periods","symptoms","symptomLogs","symptomSeeds","futureScripts"])if(e[t]!=null&&(typeof e[t]!="object"||Array.isArray(e[t])))return`${t} の形式が壊れています 🥺`;return null}function Hg(e){const t={rooms:(e.rooms||[]).length,items:0},n=r=>r==="talk"?"messages":r==="todo"?"todos":r==="darelog"?"records":r==="expense"?"expenses":r==="challenge"?"challenges":r==="future"?"opened":r==="now"?"posts":r==="album"?"pages":r==="smart"?"items":null;for(const r of e.rooms||[]){const o=e.data?e.data[r.id]:void 0;if(!o)continue;const i=n(r.type);t.items+=i?(o[i]||[]).length:Object.keys(o).length}return t}function cl(e,t){var i,l;if(e.type==="talk"){const a=t&&t.messages||[],s=a[a.length-1];return{previewName:s?(u=>{var h;return((h=(e.members||[]).find(p=>p.id===u))==null?void 0:h.name)||""})(s.memberId):"",preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="todo"){const a=t&&t.todos||[],s=a[a.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?`${s.done?"☑":"☐"} ${s.text.split(`
`)[0]}`.slice(0,40):"",todoOpen:a.filter(g=>!g.done&&!g.deferred).length,lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="darelog"){const a=t&&t.records||[],s=a[a.length-1],g=u=>{var h;return((h=(e.members||[]).find(p=>p.id===u))==null?void 0:h.name)||""};return{preview:s?`${Wg[s.slot]||""} ${g(s.memberId)}`.trim():"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="challenge"){const a=t&&t.challenges||[],s=[...a].sort((g,u)=>{var h,p;return(((h=u.records)==null?void 0:h.length)||0)-(((p=g.records)==null?void 0:p.length)||0)})[0];return{preview:s?`${s.emoji||"🏁"} ${s.name} ${((i=s.records)==null?void 0:i.length)||0}/${s.target}`:"",lastAt:e.lastAt||(a.length?Date.now():0)}}if(e.type==="expense"){const a=t&&t.expenses||[],s=a[a.length-1];return{preview:s?`${(u=>{var h;return((h=(e.categories||[]).find(p=>p.id===u))==null?void 0:h.name)||""})(s.categoryId)} ¥${(s.amount||0).toLocaleString("ja-JP")}`:"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="album"){const a=t&&t.pages||[];return{preview:a.length?`${a.length}枚`:"",lastAt:e.lastAt||0}}if(e.type==="smart"){const s=[...t&&t.items||[]].sort((g,u)=>(g.at||0)-(u.at||0)).pop();return{preview:s?`${s.score?s.score+"点 ":""}${s.text}`.slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="now"){const s=[...t&&t.posts||[]].sort((g,u)=>(g.at||0)-(u.at||0)).pop();return{preview:s&&typeof s.text=="string"?`${s.time} ${s.text.split(`
`)[0]}`.slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="future"){const a=t&&t.opened||[],s=a[a.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}const n=t&&typeof t=="object"?t:{},r=Object.keys(n).sort(),o=r[r.length-1];return{preview:typeof((l=n[o])==null?void 0:l.text)=="string"?n[o].text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(o?Date.now():0)}}async function _c(){const e=await W(We)||[],t={};for(const y of e){const v=await W($e(y.id));v!==void 0&&(t[y.id]=v)}const n=await W(To)||null,r={},o={},i={},l={},a={},s={},g={},u={},h={};for(const y of e){const v=await W(ii(y.id));v&&Object.keys(v).length&&(r[y.id]=v);const b=await W(Po(y.id));Array.isArray(b)&&b.length&&(o[y.id]=b);const _=await W(qd(y.id));_&&Object.keys(_).length&&(i[y.id]=_),await W(ef(y.id))&&(l[y.id]=!0);const m=await W(aa(y.id));Array.isArray(m==null?void 0:m.days)&&m.days.length&&(a[y.id]=m.days);const d=await W(Ro(y.id));Array.isArray(d)&&d.length&&(s[y.id]=d);const x=await W(tf(y.id));x&&Object.keys(x).length&&(g[y.id]=x),await W(nf(y.id))&&(u[y.id]=!0);const w=await W(sa(y.id));Array.isArray(w)&&w.length&&(h[y.id]=w)}const p=await W(Wr)||null;return{app:"nachumin-diary",version:1,exportedAt:new Date().toISOString(),rooms:e,data:t,declaration:n,doneLogs:r,habits:o,habitLogs:i,habitSeeds:l,periods:a,symptoms:s,symptomLogs:g,symptomSeeds:u,futureScripts:h,marks:p}}const Yg=e=>e.map((t,n)=>[t,n]).sort((t,n)=>t[0].dateKey<n[0].dateKey?-1:t[0].dateKey>n[0].dateKey?1:t[1]-n[1]).map(([t])=>t);async function Qg(e){var s,g;if(!e||e.app!=="nachumin-diary"||!Array.isArray(e.rooms))throw new Error("invalid-backup");const t=await W(We)||[],n=new Map(t.map(u=>[u.id,{...u}]));let r=0,o=0;for(const u of e.rooms){const h=e.data?e.data[u.id]:void 0,p=u.type==="talk"?"messages":u.type==="todo"?"todos":u.type==="darelog"?"records":u.type==="expense"?"expenses":u.type==="challenge"?"challenges":u.type==="future"?"opened":u.type==="now"?"posts":u.type==="album"?"pages":u.type==="smart"?"items":null,y=b=>p==="messages"?`${b.dateKey} ${b.memberId} ${b.text}`:p==="todos"?`${b.dateKey} ${b.text}`:p==="records"?`${b.dateKey} ${b.slot} ${b.memberId}`:b.id;if(!n.has(u.id)){h!==void 0&&await B($e(u.id),h),n.set(u.id,{...u,...cl(u,h)}),r+=1,p?o+=((s=h==null?void 0:h[p])==null?void 0:s.length)||0:o+=h?Object.keys(h).length:0;continue}const v=n.get(u.id);if(p){const b=await W($e(u.id))||{},_=b[p]||[],m=new Set(_.map(y));let d=_.slice();for(const S of(h==null?void 0:h[p])||[])m.has(y(S))||(m.add(y(S)),d.push(S),o+=1);p==="messages"&&(d=Yg(d));const x={...b,[p]:d};for(const S of Object.keys(h||{}))S!==p&&x[S]===void 0&&(x[S]=h[S]);await B($e(u.id),x);let w={...v};if(u.type==="talk"||u.type==="darelog"){const S=v.members||[],C=new Set(S.map(D=>D.id));w.members=S.concat((u.members||[]).filter(D=>!C.has(D.id)))}n.set(u.id,{...w,...cl(w,x)})}else{const _={...await W($e(u.id))||{}};for(const m of Object.keys(h||{}))_[m]||(_[m]=h[m],o+=1);await B($e(u.id),_),n.set(u.id,{...v,...cl(v,_)})}}if(e.doneLogs)for(const[u,h]of Object.entries(e.doneLogs)){const p=ii(u),v={...await W(p)||{}};for(const[b,_]of Object.entries(h)){const m=(v[b]||[]).slice();for(const d of _)m.some(x=>x.text===d.text&&x.time===d.time)||m.push(d);v[b]=m}await B(p,v)}const i={};if(e.habits)for(const[u,h]of Object.entries(e.habits)){if(!Array.isArray(h))continue;const p=await W(Po(u));if(p===void 0){await B(Po(u),h);continue}const y=Array.isArray(p)?p:[],v=new Set(y.map(d=>d.id)),b=new Map(y.filter(d=>(d.name||"").trim()).map(d=>[d.name.trim(),d.id])),_=y.slice(),m={};for(const d of h){if(!d||!d.id)continue;if(v.has(d.id)){m[d.id]=d.id;continue}const x=(d.name||"").trim(),w=x?b.get(x):null;if(w){m[d.id]=w;continue}_.push(d),v.add(d.id),x&&b.set(x,d.id),m[d.id]=d.id}_.length!==y.length&&await B(Po(u),_),i[u]=m}if(e.habitSeeds)for(const u of Object.keys(e.habitSeeds))e.habitSeeds[u]&&await B(ef(u),!0);if(e.periods)for(const[u,h]of Object.entries(e.periods)){if(!Array.isArray(h))continue;const p=((g=await W(aa(u)))==null?void 0:g.days)||[];await B(aa(u),{days:[...new Set([...p,...h])].sort()})}const l={};if(e.symptoms)for(const[u,h]of Object.entries(e.symptoms)){if(!Array.isArray(h))continue;const p=await W(Ro(u));if(p===void 0){await B(Ro(u),h);continue}const y=Array.isArray(p)?p:[],v=new Set(y.map(d=>d.id)),b=new Map(y.filter(d=>(d.name||"").trim()).map(d=>[d.name.trim(),d.id])),_=y.slice(),m={};for(const d of h){if(!d||!d.id)continue;if(v.has(d.id)){m[d.id]=d.id;continue}const x=(d.name||"").trim(),w=x?b.get(x):null;if(w){m[d.id]=w;continue}_.push(d),v.add(d.id),x&&b.set(x,d.id),m[d.id]=d.id}_.length!==y.length&&await B(Ro(u),_),l[u]=m}if(e.symptomSeeds)for(const u of Object.keys(e.symptomSeeds))e.symptomSeeds[u]&&await B(nf(u),!0);if(e.futureScripts)for(const[u,h]of Object.entries(e.futureScripts)){if(!Array.isArray(h)||!h.length)continue;const p=await W(sa(u))||[],y=new Set(p.map(b=>b.id)),v=h.filter(b=>b&&b.id&&!y.has(b.id));v.length&&(await B(sa(u),[...p,...v]),o+=v.length)}if(e.symptomLogs)for(const[u,h]of Object.entries(e.symptomLogs)){const p=tf(u),v={...await W(p)||{}},b=l[u]||{};for(const[_,m]of Object.entries(h)){const d=(m||[]).map(x=>b[x]||x);v[_]=[...new Set([...v[_]||[],...d])]}await B(p,v)}if(e.habitLogs)for(const[u,h]of Object.entries(e.habitLogs)){const p=i[u]||{},y=qd(u),b={...await W(y)||{}};for(const[_,m]of Object.entries(h)){const d=(m||[]).map(x=>p[x]||x);b[_]=[...new Set([...b[_]||[],...d])]}await B(y,b)}if(Array.isArray(e.marks)&&e.marks.length){const u=await W(Wr);(!Array.isArray(u)||!u.length)&&await B(Wr,e.marks)}const a=[...n.values()];return await B(We,a),{addedRooms:r,addedItems:o,rooms:a}}const un="M12 20.5s-7.5-5-7.5-10a4.2 4.2 0 0 1 7.5-2.6A4.2 4.2 0 0 1 19.5 10.5c0 5-7.5 10-7.5 10z",Xg=`<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>
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
<path d='${un}' transform='translate(96 60) scale(1.6)'/>
<path d='${un}' transform='translate(24 96) scale(0.9) rotate(-12 12 12)'/>
<path d='${un}' transform='translate(190 60) scale(0.8) rotate(14 12 12)'/>
<path d='${un}' transform='translate(130 150) scale(1.1) rotate(-8 12 12)'/>
<path d='${un}' transform='translate(30 208) scale(0.8) rotate(10 12 12)'/>
</g>
<g fill='#f8b1d6'>
<path d='${un}' transform='translate(100 64) scale(1.1) '/>
<path d='${un}' transform='translate(133 153) scale(0.7)'/>
</g>
</svg>`,wo=`url("data:image/svg+xml,${encodeURIComponent(Xg)}")`,Km=["#ffffff","#fff5fa","#ffd9ec","#ffc4e1","#ff9fd0","#e0629f","#d4f0ff","#c9f5f2","#d9ffe3","#e8dcff","#f0f0f0","#2b2430"],Wm=["#9C27B0","#E91E63","#FFEB3B","#2196F3","#4CAF50","#FF9800","#F44336","#00BCD4","#3F51B5","#8BC34A","#FF4081","#009688"],ua=["#ff6fb2","#c58cff","#6fb8ff","#5fd6b0","#ffcf5f","#ff9d6f","#7ed957","#ff8fa8"],mr=ua[0],Dc=e=>{const t=e||mr;return{background:`linear-gradient(163deg, #ffffff 0%, #fff6fb 40%, ${t}2e 100%)`,boxShadow:`0 6px 13px ${t}42, 0 2px 0 ${t}66, inset 0 1.5px 0 #ffffff`,borderColor:`${t}55`}},Vm=[{key:"auto",label:"自動",value:null},{key:"white",label:"白",value:"#ffffff"},{key:"black",label:"黒",value:"#222028"},{key:"pink",label:"ピンク",value:"#ff2d87"}],Gg=e=>{const t=String(e).replace("#","");if(t.length<6)return"#4a3140";const n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),o=parseInt(t.slice(4,6),16);return .299*n+.587*r+.114*o<140?"#fff5fa":"#4a3140"},Hm=e=>e&&e.textColor?e.textColor:Gg(e&&e.color),Lc=`
  * { box-sizing: border-box; }
  .app {
    height: 100vh; height: 100dvh;
    display: flex; flex-direction: column;
    font-family: "Hiragino Maru Gothic ProN", "Hiragino Kaku Gothic ProN",
      "Yu Gothic", sans-serif;
    background: ${wo} #f6bedd; background-size: 240px 240px;
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
    background: ${wo} #f6bedd; background-size: 240px 240px;
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
    background: ${wo} #f6bedd; background-size: 240px 240px;
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
    background: ${wo} #f6bedd; background-size: 240px 240px;
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
`;function Jg(e,t=500){const n=N.useRef({}),r=l=>{if(typeof e!="function"||l.touches&&l.touches.length!==1)return;const a=l.touches?l.touches[0]:l;n.current.x=a.clientX,n.current.y=a.clientY,n.current.fired=!1,clearTimeout(n.current.timer),n.current.timer=setTimeout(()=>{n.current.fired=!0;try{navigator.vibrate&&navigator.vibrate(15)}catch{}e({x:n.current.x,y:n.current.y})},t)},o=l=>{const a=l.touches?l.touches[0]:l;(Math.abs(a.clientX-n.current.x)>10||Math.abs(a.clientY-n.current.y)>10)&&clearTimeout(n.current.timer)},i=()=>clearTimeout(n.current.timer);return{onTouchStart:r,onTouchMove:o,onTouchEnd:i,onTouchCancel:i,onContextMenu:l=>{typeof e=="function"&&(l.preventDefault(),e({x:l.clientX,y:l.clientY}))},onClickCapture:l=>{n.current.fired&&(l.stopPropagation(),l.preventDefault(),n.current.fired=!1)}}}function Tc({onLongPress:e,longPressMs:t,children:n,...r}){const o=Jg(e,t);return c.jsx("div",{...r,...o,children:n})}function Zg({x:e,y:t,onCopy:n,onEdit:r,onDelete:o,onClose:i,top:l,extra:a}){const u=N.useRef(null),[h,p]=N.useState(null);return N.useLayoutEffect(()=>{const y=u.current;if(!y)return;const v=y.offsetHeight,b=window.innerWidth,_=window.innerHeight,m=Math.max(8,Math.min(e-168/2,b-168-8));let d=t+8;d+v>_-8&&(d=t-8-v),d<8&&(d=Math.max(8,_-v-8)),p({left:m,top:d})},[e,t,l,a,r,o]),c.jsx("div",{className:"ctx-overlay",onClick:i,onContextMenu:y=>y.preventDefault(),children:c.jsxs("div",{ref:u,className:"ctx-menu",style:{left:h?h.left:Math.max(8,Math.min(e-168/2,window.innerWidth-168-8)),top:h?h.top:t+8,width:168,maxHeight:`calc(100vh - ${8*2}px)`,overflowY:"auto",visibility:h?"visible":"hidden"},onClick:y=>y.stopPropagation(),children:[(l||[]).map((y,v)=>c.jsx("button",{className:"ctx-item ctx-top",onClick:y.onClick,children:y.label},v)),c.jsx("button",{className:"ctx-item",onClick:n,children:"📋 コピー"}),r&&c.jsx("button",{className:"ctx-item",onClick:r,children:"✏️ 編集"}),(a||[]).map((y,v)=>c.jsx("button",{className:"ctx-item",onClick:y.onClick,children:y.label},v)),o&&c.jsx("button",{className:"ctx-item ctx-del",onClick:o,children:"🗑 削除"})]})})}function sf({message:e,confirmLabel:t="削除する",onConfirm:n,onCancel:r}){return c.jsx("div",{className:"overlay confirm-over",onClick:r,children:c.jsxs("div",{className:"panel confirm-panel",onClick:o=>o.stopPropagation(),children:[c.jsx("div",{className:"confirm-msg",children:e}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-close",onClick:r,children:"キャンセル"}),c.jsx("button",{className:"p-del arm",onClick:n,children:t})]})]})})}function qg(e=!0){const[t,n]=N.useState(0);return N.useEffect(()=>{if(!e||!window.visualViewport){n(0);return}const r=window.visualViewport,o=()=>n(Math.max(0,window.innerHeight-r.height-r.offsetTop));return o(),r.addEventListener("resize",o),r.addEventListener("scroll",o),()=>{r.removeEventListener("resize",o),r.removeEventListener("scroll",o)}},[e]),t}const Pc=/https?:\/\/[^\s　-〿぀-ヿ一-鿿＀-￯]+/g,em=/[.,;:、。）)\]】」』"'！？!?]+$/;function Rc(e,t=n=>n){if(!e)return e;const n=[];let r=0,o=0,i;for(Pc.lastIndex=0;i=Pc.exec(e);){let l=i[0];const a=(l.match(em)||[""])[0];a&&(l=l.slice(0,l.length-a.length)),l&&(i.index>r&&n.push(c.jsx(N.Fragment,{children:t(e.slice(r,i.index))},o++)),n.push(c.jsx("a",{className:"body-link",href:l,target:"_blank",rel:"noopener noreferrer",onClick:s=>s.stopPropagation(),children:l},o++)),r=i.index+l.length)}return n.length?(r<e.length&&n.push(c.jsx(N.Fragment,{children:t(e.slice(r))},o++)),n):t(e)}const Oc=150,tm=(e,t)=>Cc(e.time)-Cc(t.time)||(e.at||0)-(t.at||0),nm=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(e||"");return t?`${t[1].padStart(2,"0")}:${t[2]}`:""},rm=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(e||"");return t?`${Number(t[1])}:${t[2]}`:""};function om({room:e,onBack:t,onMeta:n,showToast:r,pinned:o,onOpenDiary:i}){const[l,a]=N.useState([]),[s,g]=N.useState(!1),[u,h]=N.useState(""),[p,y]=N.useState(()=>Nc()),[v,b]=N.useState(null),[_,m]=N.useState(null),[d,x]=N.useState(null),[w,S]=N.useState(null),[C,D]=N.useState(76),[P,K]=N.useState(e.nowView==="gallery"?"gallery":"time"),[M,J]=N.useState(Number(e.nowCols)===3?3:2),[Ce,ce]=N.useState(Oc),Pe=N.useRef(null),Je=N.useRef(null),Se=N.useRef(null),at=qg(!_),R=ft();N.useEffect(()=>{(async()=>{try{const E=await W($e(e.id));E&&Array.isArray(E.posts)&&a(E.posts)}catch{}finally{g(!0)}})()},[e.id]),N.useEffect(()=>{if(!Je.current||typeof ResizeObserver>"u")return;const E=new ResizeObserver(()=>Je.current&&D(Je.current.offsetHeight));return E.observe(Je.current),()=>E.disconnect()},[_]);const I=E=>{const A=Pe.current;A&&A.scrollTo({top:A.scrollHeight,behavior:E?"smooth":"auto"})};N.useEffect(()=>{s&&P==="time"&&I(!1)},[s,P]);const F=async E=>{a(E);try{await B($e(e.id),{posts:E});const A=[...E].sort((V,vt)=>(V.at||0)-(vt.at||0)).pop();n({preview:A?`${A.time} ${A.text.split(`
`)[0]}`.slice(0,40):"",lastAt:Date.now()})}catch{r("保存に失敗しました。ストレージを確認してね")}},G=()=>{const E=u.trim();if(!E)return;const A={id:et(),dateKey:ft(),time:lf(),text:E,at:Date.now()};F([...l,A]),h(""),Se.current&&(Se.current.style.height="auto"),S(A.id),setTimeout(()=>S(null),900),P==="time"&&requestAnimationFrame(()=>I(!0))},le=E=>{E.key==="Enter"&&!E.shiftKey&&!E.nativeEvent.isComposing&&E.keyCode!==229&&(E.preventDefault(),G())},st=E=>{h(E.target.value);const A=E.target;A.style.height="auto",A.style.height=Math.min(A.scrollHeight,120)+"px"},Ze=()=>{const E=_.text.trim(),A=rm(_.time);if(!E){r("なにしてたか書いてね");return}if(!A){r("時刻を入れてね");return}F(l.map(V=>V.id===_.id?{...V,text:E,time:A}:V)),m(null)},Nt=E=>{const A=l.find(vt=>vt.id===E);if(!A)return;const V=A.text.length>20?A.text.slice(0,20)+"…":A.text;x({message:`${A.time}「${V}」を削除しますか？`,onConfirm:()=>{F(l.filter(vt=>vt.id!==E)),x(null),m(null)}})},me={};for(const E of l)(me[E.dateKey]=me[E.dateKey]||[]).push(E);const Ue=Object.keys(me).sort(),xe=Ue.filter(E=>E>=p);xe.includes(R)||xe.push(R);const jn=Ue.filter(E=>E<p).length,Nn=(me[R]||[]).length,Gr=E=>{const A=`${ye(E).slice(5)} ${of[ve(E).getDay()]}`;return E===R?`今日 ${A}`:E===Nc()?`昨日 ${A}`:A},yt=E=>{K(E),n({nowView:E})},ln=E=>{J(E),n({nowCols:E})},an=[...l].sort((E,A)=>E.dateKey<A.dateKey?1:E.dateKey>A.dateKey?-1:(A.at||0)-(E.at||0)),sn=an.slice(0,Ce),wt=v&&l.find(E=>E.id===v.id);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"hd",children:[c.jsx("button",{className:"back-btn","aria-label":"もどる",onClick:t,children:"‹"}),c.jsx("span",{style:{fontSize:20},children:e.emoji}),c.jsxs("div",{style:{minWidth:0},children:[c.jsx("div",{className:"hd-title",children:e.name}),c.jsx("div",{className:"hd-sub",children:s?`今日 ${Nn}件`:"Nachumin Lifelog"})]}),c.jsx("button",{className:"now-view"+(P==="gallery"?" on":""),"aria-label":P==="gallery"?"時系列で見る":"ギャラリーで見る",onClick:()=>yt(P==="gallery"?"time":"gallery"),style:{marginLeft:"auto"},children:P==="gallery"?"🕐":"▦"}),i&&c.jsxs("button",{className:"now-to-diary",onClick:i,"aria-label":"日記をひらく",style:{marginLeft:0},children:[c.jsx("span",{className:"now-to-diary-ic",children:"💗"}),"日記",c.jsx("span",{className:"now-to-diary-arw",children:"›"})]})]}),o,P==="gallery"?c.jsxs("div",{className:"now-gal-scroll",style:{paddingBottom:C+12},children:[c.jsxs("div",{className:"now-gal-bar",children:[c.jsxs("span",{className:"now-gal-n",children:[an.length,"件"]}),c.jsx("div",{className:"now-gal-cols",children:[2,3].map(E=>c.jsxs("button",{className:"now-gal-col"+(M===E?" on":""),"aria-label":`${E}列にする`,onClick:()=>ln(E),children:[E,"列"]},E))})]}),s&&an.length===0&&c.jsx("div",{className:"now-empty",children:"下からつぶやいてね🕐"}),c.jsx("div",{className:"now-gal cols-"+M,children:sn.map(E=>c.jsx(Tc,{className:"now-card"+(w===E.id?" pop":""),onLongPress:A=>b({id:E.id,x:A.x,y:A.y}),children:Rc(E.text)},E.id))}),an.length>sn.length&&c.jsxs("button",{className:"now-more",onClick:()=>ce(E=>E+Oc),children:["↓ もっと見る（あと",an.length-sn.length,"件）"]})]}):c.jsxs("div",{className:"chat now-scroll",ref:Pe,style:{paddingBottom:C+12},children:[jn>0&&c.jsxs("button",{className:"now-more",onClick:()=>y(E=>ls(E,-7)),children:["↑ 前の日を見る（あと",jn,"日ぶん）"]}),xe.map(E=>{const A=(me[E]||[]).slice().sort(tm);return c.jsxs(N.Fragment,{children:[c.jsxs("div",{className:"now-day"+(E===R?" today":""),children:[c.jsx("span",{className:"now-day-l "+$g(E),children:Gr(E)}),A.length>0&&c.jsx("span",{className:"now-day-n",children:A.length})]}),A.length===0&&E===R&&c.jsx("div",{className:"now-empty",children:"下からつぶやいてね🕐 時刻は自動でつくよ"}),c.jsx("div",{className:"now-tl",children:A.map(V=>c.jsxs(Tc,{className:"now-post"+(w===V.id?" pop":""),onLongPress:vt=>b({id:V.id,x:vt.x,y:vt.y}),children:[c.jsx("span",{className:"now-time",children:V.time}),c.jsx("span",{className:"now-dot","aria-hidden":"true"}),c.jsx("span",{className:"now-text",children:Rc(V.text)})]},V.id))})]},E)})]}),!_&&c.jsx("div",{className:"bar bar-fixed now-bar",ref:Je,style:{bottom:at},children:c.jsxs("div",{className:"in-row",children:[c.jsx("textarea",{ref:Se,className:"ta",rows:1,placeholder:"いまなにしてる？",enterKeyHint:"send",value:u,onChange:st,onKeyDown:le}),c.jsx("button",{className:"send","aria-label":"つぶやく",disabled:!u.trim(),onClick:G,children:"↑"})]})}),v&&wt&&c.jsx(Zg,{x:v.x,y:v.y,onClose:()=>b(null),onCopy:async()=>{const E=await Ag(`${wt.time} ${wt.text}`);r(E?"コピーしました🩷":"コピーできませんでした"),b(null)},onEdit:()=>{m({id:wt.id,text:wt.text,time:nm(wt.time)}),b(null)},onDelete:()=>{const E=wt.id;b(null),Nt(E)}}),_&&c.jsx("div",{className:"overlay",onClick:()=>m(null),children:c.jsxs("div",{className:"panel",onClick:E=>E.stopPropagation(),children:[c.jsx("h3",{children:"🕐 なうを直す"}),c.jsx("div",{className:"f-label",children:"時刻（あとから書いたときは直してね）"}),c.jsx("input",{className:"f-input",type:"time",style:{width:140},value:_.time,onChange:E=>m(A=>({...A,time:E.target.value}))}),c.jsx("div",{className:"f-label",children:"なにしてた"}),c.jsx("textarea",{autoFocus:!0,style:{minHeight:80},value:_.text,onChange:E=>m(A=>({...A,text:E.target.value}))}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:Ze,children:"保存"}),c.jsx("button",{className:"p-del",onClick:()=>Nt(_.id),children:"削除"}),c.jsx("button",{className:"p-close",onClick:()=>m(null),children:"もどる"})]})]})}),d&&c.jsx(sf,{message:d.message,onConfirm:d.onConfirm,onCancel:()=>x(null)})]})}function im({items:e,keyOf:t,onReorder:n,renderItem:r,onLongPress:o,longPress:i=320,footer:l}){const[a,s]=N.useState(null),[g,u]=N.useState(null),h=N.useRef(null),p=N.useRef({});p.current.items=e,p.current.keyOf=t,p.current.onReorder=n,p.current.onLongPress=o;const y=a||e,v=w=>{var S;return(S=h.current)==null?void 0:S.querySelector(`[data-dk="${CSS.escape(String(w))}"]`)},b=()=>{const w=h.current;if(!w||p.current.dragKey==null)return;const S=v(p.current.dragKey);if(!S)return;const C=w.getBoundingClientRect(),D=C.left+S.offsetLeft,P=C.top+S.offsetTop,K=p.current.pointerX-p.current.grabX-D,M=p.current.pointerY-p.current.grabY-P;S.style.transform=`translate(${K}px, ${M}px) scale(1.08)`},_=w=>{const S=v(w);if(!S)return;const C=S.getBoundingClientRect();p.current.dragKey=w,p.current.grabX=p.current.pointerX-C.left,p.current.grabY=p.current.pointerY-C.top,p.current.pickupX=p.current.pointerX,p.current.pickupY=p.current.pointerY,p.current.moved=!1,p.current.order=p.current.items.slice(),S.style.zIndex="10",s(p.current.order),u(w);try{navigator.vibrate&&navigator.vibrate(12)}catch{}requestAnimationFrame(b)},m=()=>{const w=h.current;if(!w||p.current.dragKey==null)return;const S=w.getBoundingClientRect(),C=p.current.pointerX-S.left,D=p.current.pointerY-S.top,P=[...w.querySelectorAll("[data-dk]")];let K=0,M=1/0;for(let ce=0;ce<P.length;ce++){const Pe=P[ce],Je=Pe.offsetLeft+Pe.offsetWidth/2,Se=Pe.offsetTop+Pe.offsetHeight/2,at=(C-Je)**2+(D-Se)**2;at<M&&(M=at,K=ce)}const J=p.current.order,Ce=J.findIndex(ce=>p.current.keyOf(ce)===p.current.dragKey);if(Ce!==-1&&Ce!==K){const[ce]=J.splice(Ce,1);J.splice(K,0,ce),s(J.slice())}requestAnimationFrame(b)},d=()=>{if(clearTimeout(p.current.timer),p.current.dragKey!=null){const w=v(p.current.dragKey);if(w&&(w.style.transform="",w.style.zIndex=""),p.current.moved)p.current.onReorder(p.current.order.slice());else if(p.current.onLongPress){const S=p.current.items.find(C=>p.current.keyOf(C)===p.current.dragKey);p.current.onLongPress({item:S,x:p.current.pointerX,y:p.current.pointerY})}p.current.suppress=Date.now()+450}p.current.dragKey=null,u(null),s(null)};N.useEffect(()=>{const w=h.current;if(!w)return;const S=K=>{if(K.touches.length!==1)return;const M=K.target.closest("[data-dk]");if(!M||!w.contains(M))return;const J=K.touches[0];p.current.startX=J.clientX,p.current.startY=J.clientY,p.current.pointerX=J.clientX,p.current.pointerY=J.clientY,p.current.moved=!1;const Ce=M.getAttribute("data-dk");clearTimeout(p.current.timer),p.current.timer=setTimeout(()=>{p.current.moved||_(Ce)},i)},C=K=>{const M=K.touches[0];if(p.current.pointerX=M.clientX,p.current.pointerY=M.clientY,p.current.dragKey==null){(Math.abs(M.clientX-p.current.startX)>12||Math.abs(M.clientY-p.current.startY)>12)&&(p.current.moved=!0,clearTimeout(p.current.timer));return}(Math.abs(M.clientX-p.current.pickupX)>8||Math.abs(M.clientY-p.current.pickupY)>8)&&(p.current.moved=!0),K.preventDefault(),m()},D=()=>{clearTimeout(p.current.timer),p.current.dragKey!=null&&d()},P=K=>K.preventDefault();return w.addEventListener("touchstart",S,{passive:!0}),w.addEventListener("touchmove",C,{passive:!1}),w.addEventListener("touchend",D,{passive:!0}),w.addEventListener("touchcancel",D,{passive:!0}),w.addEventListener("contextmenu",P),()=>{w.removeEventListener("touchstart",S),w.removeEventListener("touchmove",C),w.removeEventListener("touchend",D),w.removeEventListener("touchcancel",D),w.removeEventListener("contextmenu",P)}},[i]);const x=w=>{p.current.suppress&&Date.now()<p.current.suppress&&(w.stopPropagation(),w.preventDefault(),p.current.suppress=0)};return c.jsxs("div",{ref:h,className:"ig-grid",onClickCapture:x,children:[y.map(w=>{const S=t(w);return c.jsx("div",{"data-dk":S,className:"ig-cell"+(g===S?" dragging":""),children:r(w)},S)}),l]})}function lm({onBack:e,children:t}){const[n,r]=N.useState(0),[o,i]=N.useState(!1),l=N.useRef(null),a=N.useRef(!1),s=p=>{if(p.touches.length!==1||document.querySelector(".overlay"))return;const y=p.touches[0];y.clientX>28||(l.current={x:y.clientX,y:y.clientY},a.current=!1)},g=p=>{if(!l.current)return;const y=p.touches[0],v=y.clientX-l.current.x,b=y.clientY-l.current.y;if(!a.current){if(Math.abs(v)<8&&Math.abs(b)<8)return;if(Math.abs(b)>Math.abs(v)){l.current=null;return}a.current=!0,i(!1)}r(Math.max(0,v))},u=()=>{if(!l.current)return;const p=Math.min(110,window.innerWidth*.3);i(!0),a.current&&n>p?(r(window.innerWidth),setTimeout(e,190)):r(0),l.current=null,a.current=!1},h=n>0?{transform:`translateX(${n}px)`,transition:o?"transform .19s ease-out":"none",boxShadow:"-10px 0 26px rgba(120,50,90,.18)"}:void 0;return c.jsx("div",{className:"swipe-wrap",style:h,onTouchStart:s,onTouchMove:g,onTouchEnd:u,children:t})}const am=N.lazy(()=>jt(()=>import("./DiaryRoom-CR4IFjJK.js"),__vite__mapDeps([0,1]),import.meta.url)),sm=N.lazy(()=>jt(()=>import("./TalkRoom-DggnKTLL.js"),[],import.meta.url)),cm=N.lazy(()=>jt(()=>import("./TodoRoom-BaCXY4uw.js"),__vite__mapDeps([2,1]),import.meta.url)),um=N.lazy(()=>jt(()=>import("./DarelogRoom-Da1Xhqew.js"),__vite__mapDeps([3,4]),import.meta.url)),dm=N.lazy(()=>jt(()=>import("./ExpenseRoom-Cq0IgOoF.js"),[],import.meta.url)),fm=N.lazy(()=>jt(()=>import("./ChallengeRoom-BhMAiJzo.js"),[],import.meta.url)),pm=N.lazy(()=>jt(()=>import("./FutureRoom-aw8PAO5b.js"),[],import.meta.url)),hm=N.lazy(()=>jt(()=>import("./AlbumRoom-eZTslmkU.js"),[],import.meta.url)),gm=N.lazy(()=>jt(()=>import("./SmartRoom-CqxlaOti.js"),[],import.meta.url)),mm=["💗","🩷","💛","🩵","💜","🤍","🖤","🌸","🌷","🎀","🌟","✨","⭐️","👑","🫶","🐰","🐻","🐱","🦄","🌙","🌊","🌿","🍓","🍒","🧸","📖","💬","✅","🌗","💰"];function xm(){const[e,t]=N.useState(null),[n,r]=N.useState({screen:"home"}),[o,i]=N.useState(!1),[l,a]=N.useState(""),[s,g]=N.useState(null),[u,h]=N.useState(null),[p,y]=N.useState(!1),[v,b]=N.useState(null),[_,m]=N.useState(""),[d,x]=N.useState(null),[w,S]=N.useState(""),[C,D]=N.useState(null),[P,K]=N.useState(0),[M,J]=N.useState(null),[Ce,ce]=N.useState(!1),Pe=N.useRef(null),Je=N.useRef(0),[Se,at]=N.useState(Sg),[R,I]=N.useState(!1),[F,G]=N.useState(""),[le,st]=N.useState(!1),[Ze,Nt]=N.useState(""),[me,Ue]=N.useState(""),[xe,jn]=N.useState(null),[Nn,Gr]=N.useState(!1),[yt,ln]=N.useState(null),[an,sn]=N.useState(!1),[wt,E]=N.useState(""),A=N.useRef(null),V=(f,k=3e3)=>{E(f),clearTimeout(A.current),A.current=setTimeout(()=>E(""),k)},vt=async f=>{try{if(await W(il))return f;if(f.some(L=>L.type==="future"))return await B(il,!0),f;const k=[...f,{id:Ng,type:"future",name:"未来日記",emoji:"🔮",theme:ua[3]||void 0,createdAt:Date.now(),lastAt:0,preview:""}];return await B(We,k),await B(il,!0),k}catch{return f}},cf=async f=>{try{if(await W(nl))return f;if(f.some(L=>L.type==="album"))return await B(nl,!0),f;const k=[...f,{id:zg,type:"album",name:"絵日記",emoji:"📔",createdAt:Date.now(),lastAt:0,preview:""}];return await B(We,k),await B(nl,!0),k}catch{return f}},uf=async f=>{try{if(await W(rl))return f;if(f.some(L=>L.type==="smart"))return await B(rl,!0),f;const k=[...f,{id:Eg,type:"smart",name:"スマートノート",emoji:"📝",createdAt:Date.now(),lastAt:0,preview:""}];return await B(We,k),await B(rl,!0),k}catch{return f}},df=async f=>{try{if(await W(ol))return f;if(f.some(L=>L.type==="now"))return await B(ol,!0),f;const k=[{id:jg,type:"now",name:"なう",emoji:"🕐",createdAt:Date.now(),lastAt:0,preview:""},...f];return await B(We,k),await B(ol,!0),k}catch{return f}};N.useEffect(()=>{(async()=>{try{const f=await df(await uf(await cf(await vt(await _g())))),k=await W(jc);k&&D(k);const L=k&&f.find(T=>T.id===k)||f.find(T=>T.type==="now"&&!T.hidden)||f.find(T=>T.id===ue);L&&r({screen:"room",roomId:L.id}),t(f);const[j,U,Y]=await Promise.all([W(To),W(Wr),W(ll)]);j&&j.dateKey===ft()&&m(j.text),Array.isArray(U)&&U.length&&at(U),jn(Y||{})}catch{V("データの読み込みに失敗しました"),t([])}})()},[]),N.useEffect(()=>{if(n.screen!=="home")return;let f=!0;return(async()=>{try{let k=await W($e(ue));k=typeof k=="string"?JSON.parse(k):k||{};const L=k[ft()];if(!f)return;L&&typeof L.text=="string"&&L.text.trim()?J({written:!0,preview:L.text.split(`
`)[0].slice(0,34)}):J({written:!1})}catch{f&&J({written:!1})}})(),()=>{f=!1}},[n.screen,P]),N.useEffect(()=>{n.screen==="home"&&Pe.current&&(Pe.current.scrollTop=Je.current)},[n.screen]);const as=f=>{t(k=>{let L=k;return k.find(j=>j.id===ue)||(L=[...k,{id:ue,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),L=L.map(j=>j.id===ue?{...j,...f!=null?{preview:f}:{},lastAt:Date.now()}:j),B(We,L),L}),K(k=>k+1)},ff=async({text:f,time:k,dateKey:L})=>{try{const j=ii(ue),U=await W(j)||{},Y=(U[L]||[]).slice();Y.some(T=>T.text===f&&T.time===k)||Y.push({text:f,time:k}),await B(j,{...U,[L]:Y}),as(`🩷 できたこと ☑ ${f}`.slice(0,40))}catch{V("できたことの記録に失敗しました")}},pf=async({text:f,time:k,dateKey:L})=>{try{const j=ii(ue),U=await W(j)||{},Y=(U[L]||[]).filter($=>!($.text===f&&$.time===k)),T={...U};Y.length?T[L]=Y:delete T[L],await B(j,T),as(null)}catch{}},Si=f=>{t(f),B(We,f).catch(()=>V("保存に失敗しました"))},It=(f,k)=>{t(L=>{const j=L.map(U=>U.id===f?{...U,...k}:U);return B(We,j).catch(()=>V("保存に失敗しました")),j})},hf=async(f,k,L)=>{try{const j=(e||[]).find(qe=>qe.id===k);if(!j)return{ok:!1};const U=$e(k),Y=await W(U)||{},T=Array.isArray(Y.todos)?Y.todos:[],$=(L||"").trim(),te=$?(j.places||[]).find(qe=>(qe.name||"").trim()===$):null,Re={...f,placeId:te?te.id:null},Oe=[...T,Re];await B(U,{...Y,todos:Oe});const cn=Oe.filter(qe=>!qe.done&&!qe.deferred).length;return It(k,{preview:`${Re.done?"☑":"☐"} ${(Re.text||"").split(`
`)[0]}`.slice(0,40),todoOpen:cn,lastAt:Date.now()}),{ok:!0,placeDropped:!!$&&!te,placeKept:!!te}}catch{return{ok:!1}}},gf=async f=>{const k=f.trim();if(!k)return;const L=ft();try{await B(To,{dateKey:L,text:k}),m(k);const j=$e(ue);let U=await W(j);U=U&&typeof U=="object"?U:{};const Y=U[L],T=Kg(Y?Y.text:"",k);U={...U,[L]:{text:T,time:Y?Y.time:lf()}},await B(j,U);const $=Object.keys(U).sort(),te=$[$.length-1],Re=U[te].text.split(`
`)[0].slice(0,40);t(Oe=>{let cn=Oe;return Oe.find(qe=>qe.id===ue)||(cn=[...Oe,{id:ue,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),cn=cn.map(qe=>qe.id===ue?{...qe,preview:Re,lastAt:Date.now()}:qe),B(We,cn),cn}),K(Oe=>Oe+1),V("今日のコマをピン留めしたよ🩷")}catch{V("宣言の保存に失敗しました")}},ss=f=>{at(f),B(Wr,f).catch(()=>V("マークの保存に失敗しました"))},cs=()=>{const f=F.trim();if(f){if(Se.includes(f)){G("");return}ss([...Se,f]),G("")}},mf=f=>ss(Se.filter(k=>k!==f));N.useEffect(()=>{!o||!e||(async()=>{const f={};for(const k of e)f[k.id]=await W($e(k.id));g(f)})()},[o,e]);const Jr=e||[],zi=N.useMemo(()=>{if(!l||!s||!e)return null;const f=l.toLowerCase(),k=[];for(const L of Jr){const j=s[L.id],U=[];if(L.type==="diary"){const Y=j&&typeof j=="object"?j:{};for(const T of Object.keys(Y).sort())(Y[T].text+ye(T)).toLowerCase().includes(f)&&U.push({snippet:Y[T].text.split(`
`)[0],date:ye(T)})}else if(L.type==="todo"){const Y=j&&Array.isArray(j.todos)?j.todos:[];for(const T of Y)(T.text+ye(T.dateKey)).toLowerCase().includes(f)&&U.push({snippet:`${T.done?"☑":"☐"} ${T.text.split(`
`)[0]}`,date:ye(T.dateKey)})}else if(L.type==="darelog"){const Y=j&&Array.isArray(j.records)?j.records:[],T=$=>{var te,Re;return((Re=(te=L.members)==null?void 0:te.find(Oe=>Oe.id===$))==null?void 0:Re.name)||""};for(const $ of L.members||[])($.memberMemo||"").toLowerCase().includes(f)&&U.push({snippet:`${$.name}: ${$.memberMemo}`,date:"メンバーメモ"});for(const $ of Y){const te=T($.memberId);(te+($.memo||"")+ye($.dateKey)).toLowerCase().includes(f)&&U.push({snippet:`${te}${$.memo?`: ${$.memo}`:""}`,date:ye($.dateKey)})}}else if(L.type==="expense"){const Y=j&&Array.isArray(j.expenses)?j.expenses:[],T=$=>{var te,Re;return((Re=(te=L.categories)==null?void 0:te.find(Oe=>Oe.id===$))==null?void 0:Re.name)||""};for(const $ of Y)(T($.categoryId)+($.memo||"")+String($.amount)+ye($.dateKey)).toLowerCase().includes(f)&&U.push({snippet:`${T($.categoryId)} ¥${$.amount}${$.memo?" "+$.memo:""}`,date:ye($.dateKey)})}else if(L.type==="smart"){const Y=j&&Array.isArray(j.items)?j.items:[];for(const T of Y)(T.text+ye(T.dateKey)).toLowerCase().includes(f)&&U.push({snippet:`${T.score?T.score+"点 ":""}${T.text}`,date:ye(T.dateKey)})}else{const Y=j&&Array.isArray(j.messages)?j.messages:[],T=$=>{var te,Re;return((Re=(te=L.members)==null?void 0:te.find(Oe=>Oe.id===$))==null?void 0:Re.name)||""};for(const $ of Y)(($.text+ye($.dateKey)).toLowerCase().includes(f)||T($.memberId).toLowerCase().includes(f))&&U.push({snippet:`${T($.memberId)||"？"}: ${$.text.split(`
`)[0]}`,date:ye($.dateKey)})}U.length===0&&L.name.toLowerCase().includes(f)&&U.push({snippet:L.preview||"",date:""}),U.length&&k.push({room:L,hits:U})}return k},[l,s,Jr,e]),xf=f=>l?f.split(new RegExp(`(${Ig(l)})`,"gi")).map((L,j)=>L.toLowerCase()===l.toLowerCase()?c.jsx("mark",{className:"hl",children:L},j):L):f,yf=()=>{const f=u.name.trim();if(!f){V("ルーム名を入れてね");return}const k={diary:"💗",todo:"✅",darelog:"🌗",expense:"💰",challenge:"🏁",smart:"📝",talk:"🩷"}[u.type]||"🩷",L=u.type==="darelog"?[{id:et(),name:"ブルー",color:"#d4f0ff",icon:{type:"emoji",value:"🌊"},side:"left"},{id:et(),name:"グリーン",color:"#d9ffe3",icon:{type:"emoji",value:"🌿"},side:"left"},{id:et(),name:"ピンク",color:"#ffd9ec",icon:{type:"emoji",value:"🌸"},side:"right"}]:[],j=u.type==="expense"?[{id:et(),name:"AI費用",emoji:"🤖",color:"#2196F3"},{id:et(),name:"ピンクグッズ",emoji:"🎀",color:"#E91E63"},{id:et(),name:"ネイル",emoji:"💅",color:"#9C27B0"},{id:et(),name:"旅費交通費",emoji:"🚃",color:"#00A5B5",transit:!0}]:void 0,U={id:et(),type:u.type,name:f,emoji:u.emoji.trim()||k,theme:u.theme||mr,members:L,createdAt:Date.now(),lastAt:0,preview:"",...u.type==="todo"?{shopping:!!u.shopping,numbering:!!u.numbering,noDiary:!!u.noDiary}:{},...j?{categories:j,subscriptions:[],subsPosted:{},transitSeeded:!0,stations:[],fares:[],defaultFromId:null,roundTripDefault:!1,incomeSeeded:!0,incomeCategories:[{id:et(),name:"売上",emoji:"💰",color:"#2E9E5B"},{id:et(),name:"返金",emoji:"↩️",color:"#3BA7A0"},{id:et(),name:"その他",emoji:"✨",color:"#7FB800"}]}:{}};Si([...e,U]),h(null),r({screen:"room",roomId:U.id})},wf=()=>{const f=u.name.trim();if(!f){V("ルーム名を入れてね");return}It(u.roomId,{name:f,emoji:u.emoji.trim()||"💗",theme:u.theme||mr,hidden:!!u.hidden,...u.type==="todo"?{shopping:!!u.shopping,numbering:!!u.numbering,noDiary:!!u.noDiary}:{}});const k=u.start?u.roomId:C===u.roomId?null:C;k!==C&&(D(k),B(jc,k).catch(()=>V("起動ルームの保存に失敗しました"))),h(null)},vf=f=>{h({mode:"edit",roomId:f.id,name:f.name,emoji:f.emoji,type:f.type,shopping:!!f.shopping,numbering:!!f.numbering,noDiary:!!f.noDiary,theme:f.theme||mr,hidden:!!f.hidden,start:C===f.id}),y(!1)},bf=async f=>{try{const k=await W($e(f));k&&await B(kg(f),k),Si(e.filter(L=>L.id!==f)),h(null),b(null),V("ルームを削除しました")}catch{V("削除に失敗しました")}},kf=()=>{const f=e.find(k=>k.id===u.roomId);b({message:`ルーム「${(f==null?void 0:f.name)||""}」を削除しますか？
中の記録もすべて消えます。`,onConfirm:()=>bf(u.roomId)})},Sf=async()=>{Ue(""),sn(!1);try{const f=await _c();Nt(JSON.stringify(f,null,2))}catch{Nt("")}st(!0)},Ei=async()=>{const f={...xe||{},lastDateKey:ft(),lastAt:Date.now()};jn(f);try{await B(ll,f)}catch{}},us=f=>{const k=new Blob([f],{type:"application/json;charset=utf-8"}),L=URL.createObjectURL(k),j=document.createElement("a");j.href=L,j.download=sl,document.body.appendChild(j),j.click(),j.remove(),setTimeout(()=>URL.revokeObjectURL(L),3e3)},ji=async()=>{if(!Nn){Gr(!0);try{let f;try{f=JSON.stringify(await _c(),null,2)}catch{V("バックアップの作成に失敗しました 🥺");return}try{const k=new File([f],sl,{type:"application/json"});if(navigator.canShare&&navigator.canShare({files:[k]})){await navigator.share({files:[k]}),await Ei(),V("バックアップを保存したよ💗");return}}catch(k){if(k&&(k.name==="AbortError"||k.name==="NotAllowedError"))return}try{us(f),await Ei(),V("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{V("保存できない環境みたい。コピーを使ってね")}}finally{Gr(!1)}}},zf=()=>{try{us(Ze),Ei(),V("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{V("保存できない環境みたい。コピーを使ってね")}},Zr=ft(),Cn=(()=>{if(!(xe!=null&&xe.lastDateKey))return null;const f=ve(Zr)-ve(xe.lastDateKey);return Math.max(0,Math.round(f/864e5))})(),Ni=Cn===null||Cn>=7,Ef=!!xe&&xe.lastDateKey!==Zr&&xe.dismissedDateKey!==Zr,jf=async()=>{const f={...xe||{},dismissedDateKey:Zr};jn(f);try{await B(ll,f)}catch{}},Nf=async()=>{try{await navigator.clipboard.writeText(Ze),sn(!0),setTimeout(()=>sn(!1),2e3)}catch{V("コピーできませんでした。全選択して手動でコピーしてね")}},Cf=f=>{var j;const k=(j=f.target.files)==null?void 0:j[0];if(!k)return;const L=new FileReader;L.onload=()=>Ue(String(L.result||"")),L.onerror=()=>V("ファイルを読めませんでした"),L.readAsText(k),f.target.value=""},_f=()=>{let f;try{f=JSON.parse(me)}catch{V("JSONとして読めませんでした。ファイルが壊れているかも 🥺",4e3);return}const k=Vg(f);if(k){V(k,4500);return}ln({obj:f,counts:Hg(f),exportedAt:f.exportedAt||"",version:f.version})},Df=async()=>{const f=yt==null?void 0:yt.obj;if(f)try{const k=await Qg(f);t(k.rooms),f.declaration&&f.declaration.dateKey===ft()&&!_&&(await B(To,f.declaration),m(f.declaration.text)),K(L=>L+1),ln(null),st(!1),Ue(""),V(`復元完了💗 ${k.addedRooms}ルーム / ${k.addedItems}件を追加`)}catch{ln(null),V("復元中にエラーが出ました。ファイルが壊れているかも 🥺",4e3)}};if(!e)return c.jsx("div",{className:"app",children:c.jsx("style",{children:Lc})});const Lf=c.jsxs("div",{className:"pin",onClick:()=>{S(_),x(_?"view":"edit")},role:"button",children:[c.jsx("span",{className:"pin-ic",children:_?"📌":"🩷"}),_?c.jsx("span",{className:"pin-txt",children:_}):c.jsx("span",{className:"pin-ph",children:"今日のコマをえらぶ🩷"})]});let qr;if(n.screen==="room"){const f=e.find(k=>k.id===n.roomId);if(!f)qr=null,setTimeout(()=>r({screen:"home"}),0);else{const k={room:f,onBack:()=>r({screen:"home"}),onMeta:j=>It(f.id,j),initialQuery:n.q,showToast:V,pinned:Lf},L=f.type==="diary"?c.jsx(am,{...k,syncSignal:P,marks:Se,onEditMarks:()=>I(!0),nowRoomIds:e.filter(j=>j.type==="now").map(j=>j.id)},f.id):f.type==="now"?c.jsx(om,{...k,onOpenDiary:e.some(j=>j.id===ue)?()=>r({screen:"room",roomId:ue}):void 0},f.id):f.type==="todo"?c.jsx(cm,{...k,onTodoComplete:ff,onTodoUncomplete:pf,onRoomChange:j=>It(f.id,j),todoRooms:e.filter(j=>j.type==="todo"&&j.id!==f.id),onMoveTodo:hf},f.id):f.type==="darelog"?c.jsx(um,{...k,onRoomChange:j=>It(f.id,j)},f.id):f.type==="expense"?c.jsx(dm,{...k,onRoomChange:j=>It(f.id,j)},f.id):f.type==="challenge"?c.jsx(fm,{...k},f.id):f.type==="future"?c.jsx(pm,{...k},f.id):f.type==="album"?c.jsx(hm,{...k},f.id):f.type==="smart"?c.jsx(gm,{...k},f.id):c.jsx(sm,{...k,onRoomChange:j=>It(f.id,j)},f.id);qr=c.jsx(lm,{onBack:()=>r({screen:"home"}),children:c.jsx(N.Suspense,{fallback:c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"hd hd-loading"}),c.jsx("div",{className:"chat"})]}),children:L})},f.id)}}else qr=c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"hd hd-home",children:[c.jsx("div",{className:"app-brand",children:c.jsx("div",{className:"app-title",children:"💖Nachumin Lifelog💖"})}),c.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"バックアップ",onClick:Sf,children:"💾"}),c.jsx("button",{className:"icon-btn","aria-label":"新しいルーム",onClick:()=>h({mode:"new",name:"",emoji:"",type:"talk"}),children:"➕"}),c.jsx("button",{className:"icon-btn","aria-label":"ぜんぶ検索",onClick:()=>{i(!o),a("")},children:o?"✕":"🔍"})]}),Ef&&c.jsxs("div",{className:"bk-banner"+(Ni?" stale":""),children:[c.jsxs("button",{className:"bk-main",onClick:ji,disabled:Nn,children:[c.jsx("span",{className:"bk-ttl",children:"💾 今日のバックアップ🩷"}),c.jsx("span",{className:"bk-sub",children:Cn===null?"まだ一度も保存していません":Ni?`最後の保存から ${Cn}日 たっています`:"タップで1ファイルに書き出し"})]}),c.jsx("button",{className:"bk-x","aria-label":"閉じる",onClick:jf,children:"✕"})]}),o&&c.jsx("div",{className:"search-row",children:c.jsx("input",{autoFocus:!0,placeholder:"ぜんぶのルームから検索（ことば・話者・日付）",value:l,onChange:f=>a(f.target.value)})}),zi?c.jsx("div",{className:"rooms",children:zi.length===0?c.jsx("div",{className:"empty",children:"みつかりませんでした 🥺"}):zi.map(({room:f,hits:k})=>c.jsxs("div",{className:"room-row",onClick:()=>r({screen:"room",roomId:f.id,q:l}),children:[c.jsx("div",{className:"r-ic",children:f.emoji}),c.jsxs("div",{className:"r-main",children:[c.jsx("div",{className:"r-name",children:f.name}),c.jsx("div",{className:"r-prev",children:xf(k[0].snippet)})]}),c.jsxs("div",{className:"r-side",children:[c.jsxs("span",{className:"r-badge",children:[k.length,"件"]}),k[0].date&&c.jsx("span",{className:"r-date",children:k[0].date})]})]},f.id))}):c.jsx("div",{className:"home-scroll",ref:Pe,onScroll:f=>{Je.current=f.target.scrollTop},children:(()=>{const f=e.find(T=>T.id===ue),k=Jr.filter(T=>T.id!==ue&&!T.hidden),L=Jr.filter(T=>T.id!==ue&&T.hidden),j=ve(ft()),U=M?M.written?M.preview:`${j.getMonth()+1}/${j.getDate()}・きょうの分はまだ`:"…",Y=T=>{const $=[...T];Si(e.map(te=>te.id===ue||te.hidden?te:$.shift()))};return c.jsxs(c.Fragment,{children:[f&&c.jsxs("button",{className:"diary-card",onClick:()=>r({screen:"room",roomId:f.id}),children:[c.jsx("span",{className:"dc-ic",children:f.emoji}),c.jsxs("span",{className:"dc-main",children:[c.jsx("span",{className:"dc-name",children:"DIARY"}),c.jsx("span",{className:"dc-sub",children:U})]}),c.jsx("span",{className:"dc-arw",children:"›"})]}),c.jsx(im,{items:k,keyOf:T=>T.id,onReorder:Y,onLongPress:({item:T})=>{T&&vf(T)},footer:c.jsx("div",{className:"ig-cell ig-add",children:c.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>h({mode:"new",name:"",emoji:"",type:"talk"}),onKeyDown:T=>T.key==="Enter"&&h({mode:"new",name:"",emoji:"",type:"talk"}),children:[c.jsx("span",{className:"ig-btn",children:"＋"}),c.jsx("span",{className:"ig-name",children:"つくる"})]})}),renderItem:T=>{const $=T.type==="todo"&&T.todoOpen>0?T.todoOpen:null;return c.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>r({screen:"room",roomId:T.id}),onKeyDown:te=>te.key==="Enter"&&r({screen:"room",roomId:T.id}),children:[c.jsxs("span",{className:"ig-btn",style:Dc(T.theme),children:[T.emoji,$!=null&&c.jsx("span",{className:"ig-badge",children:$>99?"99+":$})]}),c.jsx("span",{className:"ig-name",children:T.name})]})}}),L.length>0&&c.jsx("button",{className:"hidden-entry",onClick:()=>ce(!0),children:"🙈 非表示のルーム"}),Ce&&c.jsx("div",{className:"overlay",onClick:()=>ce(!1),children:c.jsxs("div",{className:"panel",onClick:T=>T.stopPropagation(),children:[c.jsx("h3",{children:"🙈 非表示のルーム"}),c.jsx("p",{className:"panel-note",children:"一覧に出していないルームです。中の記録は消えていません。「戻す」でまた表示できます。"}),c.jsx("div",{className:"move-list",children:L.map(T=>c.jsxs("div",{className:"move-item as-row",children:[c.jsx("span",{className:"move-ic",children:T.emoji}),c.jsx("span",{className:"move-name",children:T.name}),c.jsx("button",{className:"unhide-btn",onClick:()=>It(T.id,{hidden:!1}),children:"戻す"})]},T.id))}),c.jsx("div",{className:"panel-btns",children:c.jsx("button",{className:"p-close",onClick:()=>ce(!1),children:"閉じる"})})]})})]})})()})]});return c.jsxs("div",{className:"app",children:[c.jsx("style",{children:Lc}),qr,u&&c.jsx("div",{className:"overlay",onClick:()=>{h(null),y(!1)},children:c.jsxs("div",{className:"panel",onClick:f=>f.stopPropagation(),children:[c.jsx("h3",{children:u.mode==="new"?"➕ 新しいルーム":"⚙️ ルーム設定"}),c.jsx("div",{className:"f-label",children:"ルーム名"}),c.jsx("input",{className:"f-input",autoFocus:u.mode==="new",placeholder:"ハートるんず",value:u.name,onChange:f=>h(k=>({...k,name:f.target.value}))}),c.jsx("div",{className:"f-label",children:"アイコン（タップで選ぶ）"}),c.jsx("div",{className:"emoji-picks",children:mm.map(f=>c.jsx("button",{className:"emoji-pick"+(u.emoji===f?" on":""),onClick:()=>h(k=>({...k,emoji:f})),children:f},f))}),c.jsx("input",{className:"f-input",style:{width:130,textAlign:"center",marginTop:4},maxLength:8,placeholder:"または自由入力",value:u.emoji,onChange:f=>h(k=>({...k,emoji:f.target.value}))}),c.jsx("div",{className:"f-label",children:"テーマカラー"}),c.jsx("div",{className:"theme-swatches",children:ua.map(f=>{const k=(u.theme||mr)===f;return c.jsx("button",{className:"theme-sw"+(k?" on":""),style:Dc(f),"aria-label":f,onClick:()=>h(L=>({...L,theme:f}))},f)})}),c.jsxs("div",{className:"f-label",children:["タイプ",u.mode==="edit"?"（変更できません）":""]}),c.jsxs("div",{className:"type-row",children:[c.jsxs("button",{className:"type-chip"+(u.type==="diary"?" on":""),disabled:u.mode==="edit",onClick:()=>h(f=>({...f,type:"diary"})),children:["📖 日記",c.jsx("small",{children:"1日=1吹き出し"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="talk"?" on":""),disabled:u.mode==="edit",onClick:()=>h(f=>({...f,type:"talk"})),children:["💬 トーク",c.jsx("small",{children:"話者ごと"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="todo"?" on":""),disabled:u.mode==="edit",onClick:()=>h(f=>({...f,type:"todo"})),children:["✅ TODO",c.jsx("small",{children:"やること"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="darelog"?" on":""),disabled:u.mode==="edit",onClick:()=>h(f=>({...f,type:"darelog"})),children:["🌗 だれログ",c.jsx("small",{children:"朝昼夜の記録"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="expense"?" on":""),disabled:u.mode==="edit",onClick:()=>h(f=>({...f,type:"expense"})),children:["💰 経費",c.jsx("small",{children:"支出を記録"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="challenge"?" on":""),disabled:u.mode==="edit",onClick:()=>h(f=>({...f,type:"challenge"})),children:["🏁 チャレンジ",c.jsx("small",{children:"100個の目標"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="future"?" on":""),disabled:u.mode==="edit",onClick:()=>h(f=>({...f,type:"future"})),children:["🔮 未来日記",c.jsx("small",{children:"1日1篇とどく"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="now"?" on":""),disabled:u.mode==="edit",onClick:()=>h(f=>({...f,type:"now"})),children:["🕐 なう",c.jsx("small",{children:"いまを一言"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="album"?" on":""),disabled:u.mode==="edit",onClick:()=>h(f=>({...f,type:"album"})),children:["📔 絵日記",c.jsx("small",{children:"書いた日記の画像"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="smart"?" on":""),disabled:u.mode==="edit",onClick:()=>h(f=>({...f,type:"smart"})),children:["📝 スマートノート",c.jsx("small",{children:"やったこと5個に点数"})]})]}),u.mode==="edit"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"アプリを開いたとき"}),c.jsxs("button",{className:"shop-toggle"+(u.start?" on":""),onClick:()=>h(f=>({...f,start:!f.start})),children:[c.jsx("span",{className:"shop-box",children:u.start?"✓":""}),"🚀 開いたらこのルームを出す"]})]}),u.mode==="edit"&&u.roomId!==ue&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"一覧での表示"}),c.jsxs("button",{className:"shop-toggle"+(u.hidden?" on":""),onClick:()=>h(f=>({...f,hidden:!f.hidden})),children:[c.jsx("span",{className:"shop-box",children:u.hidden?"✓":""}),"🙈 一覧に表示しない（記録は消えません）"]})]}),u.type==="todo"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"用途"}),c.jsxs("button",{className:"shop-toggle"+(u.shopping?" on":""),onClick:()=>h(f=>({...f,shopping:!f.shopping})),children:[c.jsx("span",{className:"shop-box",children:u.shopping?"✓":""}),"🛒 買い物リストとして使う（よく買うものクイック追加）"]}),c.jsxs("button",{className:"shop-toggle"+(u.numbering?" on":""),onClick:()=>h(f=>({...f,numbering:!f.numbering})),children:[c.jsx("span",{className:"shop-box",children:u.numbering?"✓":""}),"🔢 日ごとに番号をつける（1,2,3…／日付が変わると1から）"]}),c.jsxs("button",{className:"shop-toggle"+(u.noDiary?" on":""),onClick:()=>h(f=>({...f,noDiary:!f.noDiary})),children:[c.jsx("span",{className:"shop-box",children:u.noDiary?"✓":""}),"📓 完了しても日記の「できたこと」に入れない"]})]}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:u.mode==="new"?yf:wf,children:u.mode==="new"?"つくる":"保存"}),u.mode==="edit"&&c.jsx("button",{className:"p-del",onClick:kf,children:"削除"}),c.jsx("button",{className:"p-close",onClick:()=>{h(null),y(!1)},children:"閉じる"})]})]})}),le&&c.jsx("div",{className:"overlay",onClick:()=>st(!1),children:c.jsxs("div",{className:"panel",onClick:f=>f.stopPropagation(),children:[c.jsx("h3",{children:"💾 まるごとバックアップ"}),c.jsx("p",{className:"panel-note",children:"全ルーム・全データ（日記 / TODO / だれログ / 経費 / 習慣 / 各種設定）を まるごと1ファイルに保存します。端末が変わっても元どおり復元できます。"}),e.some(f=>f.type==="album")&&c.jsxs("p",{className:"panel-note bk-warn",children:["📔 絵日記の",c.jsx("b",{children:"画像だけは入りません"}),"（数百MBになってしまうため）。 元の画像は写真アプリに残しておいてね。日付の記録は入ります。"]}),c.jsxs("div",{className:"bk-last"+(Ni?" stale":""),children:[c.jsx("span",{className:"bk-last-l",children:"最後にバックアップした日"}),c.jsx("span",{className:"bk-last-v",children:xe!=null&&xe.lastDateKey?`${ye(xe.lastDateKey)}${Cn===0?"（今日）":`（${Cn}日前）`}`:"まだありません"})]}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:ji,disabled:Nn,children:"💾 1タップで書き出し"}),c.jsx("button",{className:"p-dl",onClick:zf,children:"ダウンロード"}),c.jsx("button",{className:"p-dl",onClick:Nf,children:an?"コピーしたよ💗":"コピー"})]}),c.jsxs("p",{className:"panel-note",children:["ファイル名は毎回 ",c.jsx("b",{children:sl})," で固定です。ただし 「ファイルに保存」は同じ名前があると ",c.jsx("b",{children:"iOS が勝手に番号を付けて"})," 別ファイルにします。 毎回きっちり上書きしたいときは、共有シートで 「ファイルに保存」ではなく ",c.jsx("b",{children:"ショートカット"}),"（上書き保存する用に作ったもの）を選んでね。"]}),c.jsx("div",{className:"f-label",style:{marginTop:6},children:"復元する（バックアップから読み込み）"}),c.jsx("p",{className:"panel-note",children:"既存のデータは消さず、足りない分だけ追加します（安全マージ）"}),c.jsxs("label",{className:"upload-btn",style:{alignSelf:"flex-start"},children:["📂 バックアップファイルを選ぶ",c.jsx("input",{type:"file",accept:".json,application/json,text/plain",onChange:Cf})]}),c.jsx("textarea",{placeholder:"または、コピーしたバックアップをここに貼り付け",value:me,onChange:f=>Ue(f.target.value),style:{minHeight:120}}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",disabled:!me.trim(),onClick:_f,children:"復元する"}),c.jsx("button",{className:"p-close",onClick:()=>{st(!1),Ue("")},children:"閉じる"})]})]})}),yt&&c.jsx("div",{className:"overlay bk-ask-over",onClick:()=>ln(null),children:c.jsxs("div",{className:"panel",onClick:f=>f.stopPropagation(),children:[c.jsx("h3",{children:"⚠️ 復元まえの確認"}),c.jsxs("div",{className:"bk-ask-box",children:[c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"ルーム"}),c.jsx("b",{children:yt.counts.rooms})]}),c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"記録の件数"}),c.jsx("b",{children:yt.counts.items})]}),yt.exportedAt&&c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"書き出し日時"}),c.jsx("b",{children:new Date(yt.exportedAt).toLocaleString("ja-JP")})]})]}),c.jsxs("p",{className:"panel-note",children:["今のデータは消えません（足りない分を追加する安全マージ）。 それでも念のため、",c.jsx("b",{children:"先に今のデータをバックアップ"}),"しておくのがおすすめです💗"]}),c.jsx("button",{className:"bk-first",onClick:ji,disabled:Nn,children:"💾 先に今のデータをバックアップする"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:Df,children:"この内容で復元する"}),c.jsx("button",{className:"p-close",onClick:()=>ln(null),children:"キャンセル"})]})]})}),d&&c.jsx("div",{className:"overlay",onClick:()=>x(null),children:c.jsxs("div",{className:"panel",onClick:f=>f.stopPropagation(),children:[c.jsx("h3",{children:"🩷 今日のコマ"}),d==="view"?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"decl-full",children:_}),c.jsx("p",{className:"panel-note",children:"その日1日だけピン留め。日記にも記録されています🎬"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:()=>{S(_),x("edit")},children:"書きなおす"}),c.jsx("button",{className:"p-close",onClick:()=>x(null),children:"閉じる"})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("textarea",{autoFocus:!0,style:{minHeight:120},placeholder:"今日は愛全開の私でいる！",value:w,onChange:f=>S(f.target.value)}),c.jsx("p",{className:"panel-note",children:"その日1日だけ表示。決定すると今日の日記の先頭に🎬として残ります"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",disabled:!w.trim(),onClick:()=>{gf(w),x(null)},children:"決定"}),c.jsx("button",{className:"p-close",onClick:()=>x(null),children:"閉じる"})]})]})]})}),R&&c.jsx("div",{className:"overlay",onClick:()=>I(!1),children:c.jsxs("div",{className:"panel",onClick:f=>f.stopPropagation(),children:[c.jsx("h3",{children:"⚙︎ 箇条書きマーク"}),c.jsx("p",{className:"panel-note",children:"日記の入力欄に出るマーク。タップで削除、下から追加できます。"}),c.jsxs("div",{className:"mark-manage",children:[Se.map(f=>c.jsxs("span",{className:"mark-item",children:[f,c.jsx("button",{onClick:()=>mf(f),"aria-label":"削除",children:"✕"})]},f)),Se.length===0&&c.jsx("p",{className:"panel-note",children:"マークがありません。追加してね"})]}),c.jsxs("div",{className:"in-row",style:{marginTop:4},children:[c.jsx("input",{className:"f-input",maxLength:4,placeholder:"記号や絵文字（例: ❤︎）",value:F,onChange:f=>G(f.target.value),onKeyDown:f=>f.key==="Enter"&&cs()}),c.jsx("button",{className:"p-copy",style:{flex:"0 0 auto",padding:"8px 16px",borderRadius:999},disabled:!F.trim(),onClick:cs,children:"追加"})]}),c.jsx("div",{className:"panel-btns",children:c.jsx("button",{className:"p-close",onClick:()=>I(!1),children:"閉じる"})})]})}),v&&c.jsx(sf,{message:v.message,onConfirm:v.onConfirm,onCancel:()=>b(null)}),wt&&c.jsx("div",{className:"toast",children:wt})]})}let Mc=!1,$c=!!(navigator.serviceWorker&&navigator.serviceWorker.controller);navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!$c){$c=!0;return}Mc||(Mc=!0,window.location.reload())});lg({immediate:!0,onRegisteredSW(e,t){t&&(t.update(),setInterval(()=>t.update(),60*60*1e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&t.update()}))}});Cg();Gd(document.getElementById("root")).render(c.jsx(N.StrictMode,{children:c.jsx(xm,{})}));export{Pm as $,ht as A,of as B,Nc as C,Bg as D,Zg as E,Tg as F,sf as G,lf as H,Nm as I,jm as J,Cm as K,Rc as L,Wm as M,Ag as N,Ig as O,Tc as P,Gg as Q,Mm as R,$m as S,Hm as T,Vm as U,Lm as V,km as W,Rm as X,Om as Y,Fg as Z,Tm as _,Um as a,Km as a0,_m as a1,Dm as a2,zm as a3,Em as a4,Sm as a5,mr as a6,ua as a7,sa as a8,Fm as a9,Am as aa,bm as ab,ym as ac,wm as ad,vm as ae,Bm as b,ca as c,$g as d,ls as e,$e as f,W as g,ii as h,Im as i,c as j,ye as k,Po as l,et as m,ef as n,qd as o,Qe as p,Ro as q,N as r,B as s,ft as t,qg as u,aa as v,tf as w,Cc as x,af as y,ve as z};
