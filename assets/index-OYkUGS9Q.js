const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DiaryRoom-C5f34Sfp.js","./InlineEdit--iL3vmu3.js","./TodoRoom-BF2wI3zf.js","./DarelogRoom-CCOrIcZh.js","./TalkRoom-zHqMn8Sc.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var ju={exports:{}},Zo={},Nu={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $r=Symbol.for("react.element"),bf=Symbol.for("react.portal"),Sf=Symbol.for("react.fragment"),zf=Symbol.for("react.strict_mode"),Ef=Symbol.for("react.profiler"),Cf=Symbol.for("react.provider"),jf=Symbol.for("react.context"),Nf=Symbol.for("react.forward_ref"),_f=Symbol.for("react.suspense"),Df=Symbol.for("react.memo"),Tf=Symbol.for("react.lazy"),os=Symbol.iterator;function Lf(e){return e===null||typeof e!="object"?null:(e=os&&e[os]||e["@@iterator"],typeof e=="function"?e:null)}var _u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Du=Object.assign,Tu={};function Yn(e,t,n){this.props=e,this.context=t,this.refs=Tu,this.updater=n||_u}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lu(){}Lu.prototype=Yn.prototype;function na(e,t,n){this.props=e,this.context=t,this.refs=Tu,this.updater=n||_u}var ra=na.prototype=new Lu;ra.constructor=na;Du(ra,Yn.prototype);ra.isPureReactComponent=!0;var is=Array.isArray,Pu=Object.prototype.hasOwnProperty,oa={current:null},Ou={key:!0,ref:!0,__self:!0,__source:!0};function Ru(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Pu.call(t,r)&&!Ou.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),h=0;h<a;h++)s[h]=arguments[h+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:$r,type:e,key:i,ref:l,props:o,_owner:oa.current}}function Pf(e,t){return{$$typeof:$r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ia(e){return typeof e=="object"&&e!==null&&e.$$typeof===$r}function Of(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ls=/\/+/g;function ki(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Of(""+e.key):t.toString(36)}function co(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case $r:case bf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ki(l,0):r,is(o)?(n="",e!=null&&(n=e.replace(ls,"$&/")+"/"),co(o,t,n,"",function(h){return h})):o!=null&&(ia(o)&&(o=Pf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ls,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",is(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+ki(i,a);l+=co(i,t,n,s,o)}else if(s=Lf(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+ki(i,a++),l+=co(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Vr(e,t,n){if(e==null)return e;var r=[],o=0;return co(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Rf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},fo={transition:null},Mf={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:fo,ReactCurrentOwner:oa};function Mu(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Vr,forEach:function(e,t,n){Vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vr(e,function(){t++}),t},toArray:function(e){return Vr(e,function(t){return t})||[]},only:function(e){if(!ia(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Yn;V.Fragment=Sf;V.Profiler=Ef;V.PureComponent=na;V.StrictMode=zf;V.Suspense=_f;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mf;V.act=Mu;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Du({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=oa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Pu.call(t,s)&&!Ou.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var h=0;h<s;h++)a[h]=arguments[h+2];r.children=a}return{$$typeof:$r,type:e.type,key:o,ref:i,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:jf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cf,_context:e},e.Consumer=e};V.createElement=Ru;V.createFactory=function(e){var t=Ru.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Nf,render:e}};V.isValidElement=ia;V.lazy=function(e){return{$$typeof:Tf,_payload:{_status:-1,_result:e},_init:Rf}};V.memo=function(e,t){return{$$typeof:Df,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=fo.transition;fo.transition={};try{e()}finally{fo.transition=t}};V.unstable_act=Mu;V.useCallback=function(e,t){return Le.current.useCallback(e,t)};V.useContext=function(e){return Le.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};V.useEffect=function(e,t){return Le.current.useEffect(e,t)};V.useId=function(){return Le.current.useId()};V.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Le.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};V.useRef=function(e){return Le.current.useRef(e)};V.useState=function(e){return Le.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Le.current.useTransition()};V.version="18.3.1";Nu.exports=V;var _=Nu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f=_,If=Symbol.for("react.element"),Af=Symbol.for("react.fragment"),Ff=Object.prototype.hasOwnProperty,Bf=$f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uf={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ff.call(t,r)&&!Uf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:If,type:e,key:i,ref:l,props:o,_owner:Bf.current}}Zo.Fragment=Af;Zo.jsx=$u;Zo.jsxs=$u;ju.exports=Zo;var c=ju.exports,Iu={exports:{}},Qe={},Au={exports:{}},Fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,I){var F=L.length;L.push(I);e:for(;0<F;){var Q=F-1>>>1,q=L[Q];if(0<o(q,I))L[Q]=I,L[F]=q,F=Q;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var I=L[0],F=L.pop();if(F!==I){L[0]=F;e:for(var Q=0,q=L.length,gt=q>>>1;Q<gt;){var Ue=2*(Q+1)-1,it=L[Ue],X=Ue+1,D=L[X];if(0>o(it,F))X<q&&0>o(D,it)?(L[Q]=D,L[X]=F,Q=X):(L[Q]=it,L[Ue]=F,Q=Ue);else if(X<q&&0>o(D,F))L[Q]=D,L[X]=F,Q=X;else break e}}return I}function o(L,I){var F=L.sortIndex-I.sortIndex;return F!==0?F:L.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],h=[],d=1,p=null,f=3,y=!1,w=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var I=n(h);I!==null;){if(I.callback===null)r(h);else if(I.startTime<=L)r(h),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(h)}}function v(L){if(k=!1,x(L),!w)if(n(s)!==null)w=!0,St(S);else{var I=n(h);I!==null&&Ge(v,I.startTime-L)}}function S(L,I){w=!1,k&&(k=!1,g(P),P=-1),y=!0;var F=f;try{for(x(I),p=n(s);p!==null&&(!(p.expirationTime>I)||L&&!J());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,f=p.priorityLevel;var q=Q(p.expirationTime<=I);I=e.unstable_now(),typeof q=="function"?p.callback=q:p===n(s)&&r(s),x(I)}else r(s);p=n(s)}if(p!==null)var gt=!0;else{var Ue=n(h);Ue!==null&&Ge(v,Ue.startTime-I),gt=!1}return gt}finally{p=null,f=F,y=!1}}var j=!1,N=null,P=-1,A=5,M=-1;function J(){return!(e.unstable_now()-M<A)}function se(){if(N!==null){var L=e.unstable_now();M=L;var I=!0;try{I=N(!0,L)}finally{I?de():(j=!1,N=null)}}else j=!1}var de;if(typeof u=="function")de=function(){u(se)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,bt=ge.port2;ge.port1.onmessage=se,de=function(){bt.postMessage(null)}}else de=function(){C(se,0)};function St(L){N=L,j||(j=!0,de())}function Ge(L,I){P=C(function(){L(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,St(S))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var F=f;f=I;try{return L()}finally{f=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,I){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var F=f;f=L;try{return I()}finally{f=F}},e.unstable_scheduleCallback=function(L,I,F){var Q=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Q+F:Q):F=Q,L){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=F+q,L={id:d++,callback:I,priorityLevel:L,startTime:F,expirationTime:q,sortIndex:-1},F>Q?(L.sortIndex=F,t(h,L),n(s)===null&&L===n(h)&&(k?(g(P),P=-1):k=!0,Ge(v,F-Q))):(L.sortIndex=q,t(s,L),w||y||(w=!0,St(S))),L},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(L){var I=f;return function(){var F=f;f=I;try{return L.apply(this,arguments)}finally{f=F}}}})(Fu);Au.exports=Fu;var Kf=Au.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf=_,He=Kf;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bu=new Set,vr={};function yn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(vr[e]=t,e=0;e<t.length;e++)Bu.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,Vf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,as={},ss={};function Hf(e){return tl.call(ss,e)?!0:tl.call(as,e)?!1:Vf.test(e)?ss[e]=!0:(as[e]=!0,!1)}function Yf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qf(e,t,n,r){if(t===null||typeof t>"u"||Yf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var la=/[\-:]([a-z])/g;function aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(la,aa);Se[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(la,aa);Se[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(la,aa);Se[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function sa(e,t,n,r){var o=Se.hasOwnProperty(t)?Se[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qf(t,n,o,r)&&(n=null),r||o===null?Hf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=Wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hr=Symbol.for("react.element"),bn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),ua=Symbol.for("react.strict_mode"),nl=Symbol.for("react.profiler"),Uu=Symbol.for("react.provider"),Ku=Symbol.for("react.context"),ca=Symbol.for("react.forward_ref"),rl=Symbol.for("react.suspense"),ol=Symbol.for("react.suspense_list"),da=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),Wu=Symbol.for("react.offscreen"),us=Symbol.iterator;function Jn(e){return e===null||typeof e!="object"?null:(e=us&&e[us]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,bi;function ir(e){if(bi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bi=t&&t[1]||""}return`
`+bi+e}var Si=!1;function zi(e,t){if(!e||Si)return"";Si=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var o=h.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Si=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ir(e):""}function Xf(e){switch(e.tag){case 5:return ir(e.type);case 16:return ir("Lazy");case 13:return ir("Suspense");case 19:return ir("SuspenseList");case 0:case 2:case 15:return e=zi(e.type,!1),e;case 11:return e=zi(e.type.render,!1),e;case 1:return e=zi(e.type,!0),e;default:return""}}function il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case bn:return"Portal";case nl:return"Profiler";case ua:return"StrictMode";case rl:return"Suspense";case ol:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ku:return(e.displayName||"Context")+".Consumer";case Uu:return(e._context.displayName||"Context")+".Provider";case ca:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case da:return t=e.displayName||null,t!==null?t:il(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return il(e(t))}catch{}}return null}function Gf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return il(t);case 8:return t===ua?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jf(e){var t=Vu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yr(e){e._valueTracker||(e._valueTracker=Jf(e))}function Hu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ll(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yu(e,t){t=t.checked,t!=null&&sa(e,"checked",t,!1)}function al(e,t){Yu(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sl(e,t.type,n):t.hasOwnProperty("defaultValue")&&sl(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ds(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sl(e,t,n){(t!=="number"||Co(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var lr=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(lr(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function Qu(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ps(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qr,Gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qr=Qr||document.createElement("div"),Qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zf=["Webkit","ms","Moz","O"];Object.keys(cr).forEach(function(e){Zf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cr[t]=cr[e]})});function Ju(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||cr.hasOwnProperty(e)&&cr[e]?(""+t).trim():t+"px"}function Zu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ju(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var qf=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dl(e,t){if(t){if(qf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pl=null;function fa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,Rn=null,Mn=null;function hs(e){if(e=Fr(e)){if(typeof hl!="function")throw Error(z(280));var t=e.stateNode;t&&(t=ri(t),hl(e.stateNode,e.type,t))}}function qu(e){Rn?Mn?Mn.push(e):Mn=[e]:Rn=e}function ec(){if(Rn){var e=Rn,t=Mn;if(Mn=Rn=null,hs(e),t)for(e=0;e<t.length;e++)hs(t[e])}}function tc(e,t){return e(t)}function nc(){}var Ei=!1;function rc(e,t,n){if(Ei)return e(t,n);Ei=!0;try{return tc(e,t,n)}finally{Ei=!1,(Rn!==null||Mn!==null)&&(nc(),ec())}}function kr(e,t){var n=e.stateNode;if(n===null)return null;var r=ri(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var ml=!1;if(_t)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){ml=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{ml=!1}function ep(e,t,n,r,o,i,l,a,s){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(d){this.onError(d)}}var dr=!1,jo=null,No=!1,gl=null,tp={onError:function(e){dr=!0,jo=e}};function np(e,t,n,r,o,i,l,a,s){dr=!1,jo=null,ep.apply(tp,arguments)}function rp(e,t,n,r,o,i,l,a,s){if(np.apply(this,arguments),dr){if(dr){var h=jo;dr=!1,jo=null}else throw Error(z(198));No||(No=!0,gl=h)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function oc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ms(e){if(vn(e)!==e)throw Error(z(188))}function op(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ms(o),e;if(i===r)return ms(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function ic(e){return e=op(e),e!==null?lc(e):null}function lc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lc(e);if(t!==null)return t;e=e.sibling}return null}var ac=He.unstable_scheduleCallback,gs=He.unstable_cancelCallback,ip=He.unstable_shouldYield,lp=He.unstable_requestPaint,ce=He.unstable_now,ap=He.unstable_getCurrentPriorityLevel,pa=He.unstable_ImmediatePriority,sc=He.unstable_UserBlockingPriority,_o=He.unstable_NormalPriority,sp=He.unstable_LowPriority,uc=He.unstable_IdlePriority,qo=null,wt=null;function up(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(qo,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:fp,cp=Math.log,dp=Math.LN2;function fp(e){return e>>>=0,e===0?32:31-(cp(e)/dp|0)|0}var Xr=64,Gr=4194304;function ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Do(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=ar(a):(i&=l,i!==0&&(r=ar(i)))}else l=n&~o,l!==0?r=ar(l):i!==0&&(r=ar(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),o=1<<n,r|=e[n],t&=~o;return r}function pp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-pt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=pp(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function xl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cc(){var e=Xr;return Xr<<=1,!(Xr&4194240)&&(Xr=64),e}function Ci(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function mp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-pt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ha(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function dc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fc,ma,pc,hc,mc,yl=!1,Jr=[],Ut=null,Kt=null,Wt=null,br=new Map,Sr=new Map,It=[],gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xs(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":br.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function qn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Fr(t),t!==null&&ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function xp(e,t,n,r,o){switch(t){case"focusin":return Ut=qn(Ut,e,t,n,r,o),!0;case"dragenter":return Kt=qn(Kt,e,t,n,r,o),!0;case"mouseover":return Wt=qn(Wt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return br.set(i,qn(br.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Sr.set(i,qn(Sr.get(i)||null,e,t,n,r,o)),!0}return!1}function gc(e){var t=an(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=oc(n),t!==null){e.blockedOn=t,mc(e.priority,function(){pc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pl=r,n.target.dispatchEvent(r),pl=null}else return t=Fr(n),t!==null&&ma(t),e.blockedOn=n,!1;t.shift()}return!0}function ys(e,t,n){po(e)&&n.delete(t)}function yp(){yl=!1,Ut!==null&&po(Ut)&&(Ut=null),Kt!==null&&po(Kt)&&(Kt=null),Wt!==null&&po(Wt)&&(Wt=null),br.forEach(ys),Sr.forEach(ys)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,yl||(yl=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,yp)))}function zr(e){function t(o){return er(o,e)}if(0<Jr.length){er(Jr[0],e);for(var n=1;n<Jr.length;n++){var r=Jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&er(Ut,e),Kt!==null&&er(Kt,e),Wt!==null&&er(Wt,e),br.forEach(t),Sr.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)gc(n),n.blockedOn===null&&It.shift()}var $n=Pt.ReactCurrentBatchConfig,To=!0;function vp(e,t,n,r){var o=G,i=$n.transition;$n.transition=null;try{G=1,ga(e,t,n,r)}finally{G=o,$n.transition=i}}function wp(e,t,n,r){var o=G,i=$n.transition;$n.transition=null;try{G=4,ga(e,t,n,r)}finally{G=o,$n.transition=i}}function ga(e,t,n,r){if(To){var o=vl(e,t,n,r);if(o===null)Mi(e,t,r,Lo,n),xs(e,r);else if(xp(o,e,t,n,r))r.stopPropagation();else if(xs(e,r),t&4&&-1<gp.indexOf(e)){for(;o!==null;){var i=Fr(o);if(i!==null&&fc(i),i=vl(e,t,n,r),i===null&&Mi(e,t,r,Lo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Mi(e,t,r,null,n)}}var Lo=null;function vl(e,t,n,r){if(Lo=null,e=fa(r),e=an(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=oc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lo=e,null}function xc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ap()){case pa:return 1;case sc:return 4;case _o:case sp:return 16;case uc:return 536870912;default:return 16}default:return 16}}var Ft=null,xa=null,ho=null;function yc(){if(ho)return ho;var e,t=xa,n=t.length,r,o="value"in Ft?Ft.value:Ft.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ho=o.slice(e,1<r?1-r:void 0)}function mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function vs(){return!1}function Xe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zr:vs,this.isPropagationStopped=vs,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=Xe(Qn),Ar=ae({},Qn,{view:0,detail:0}),kp=Xe(Ar),ji,Ni,tr,ei=ae({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:va,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(ji=e.screenX-tr.screenX,Ni=e.screenY-tr.screenY):Ni=ji=0,tr=e),ji)},movementY:function(e){return"movementY"in e?e.movementY:Ni}}),ws=Xe(ei),bp=ae({},ei,{dataTransfer:0}),Sp=Xe(bp),zp=ae({},Ar,{relatedTarget:0}),_i=Xe(zp),Ep=ae({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cp=Xe(Ep),jp=ae({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Np=Xe(jp),_p=ae({},Qn,{data:0}),ks=Xe(_p),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lp[e])?!!t[e]:!1}function va(){return Pp}var Op=ae({},Ar,{key:function(e){if(e.key){var t=Dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:va,charCode:function(e){return e.type==="keypress"?mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rp=Xe(Op),Mp=ae({},ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bs=Xe(Mp),$p=ae({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:va}),Ip=Xe($p),Ap=ae({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fp=Xe(Ap),Bp=ae({},ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Up=Xe(Bp),Kp=[9,13,27,32],wa=_t&&"CompositionEvent"in window,fr=null;_t&&"documentMode"in document&&(fr=document.documentMode);var Wp=_t&&"TextEvent"in window&&!fr,vc=_t&&(!wa||fr&&8<fr&&11>=fr),Ss=" ",zs=!1;function wc(e,t){switch(e){case"keyup":return Kp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function Vp(e,t){switch(e){case"compositionend":return kc(t);case"keypress":return t.which!==32?null:(zs=!0,Ss);case"textInput":return e=t.data,e===Ss&&zs?null:e;default:return null}}function Hp(e,t){if(zn)return e==="compositionend"||!wa&&wc(e,t)?(e=yc(),ho=xa=Ft=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vc&&t.locale!=="ko"?null:t.data;default:return null}}var Yp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yp[e.type]:t==="textarea"}function bc(e,t,n,r){qu(r),t=Po(t,"onChange"),0<t.length&&(n=new ya("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pr=null,Er=null;function Qp(e){Pc(e,0)}function ti(e){var t=jn(e);if(Hu(t))return e}function Xp(e,t){if(e==="change")return t}var Sc=!1;if(_t){var Di;if(_t){var Ti="oninput"in document;if(!Ti){var Cs=document.createElement("div");Cs.setAttribute("oninput","return;"),Ti=typeof Cs.oninput=="function"}Di=Ti}else Di=!1;Sc=Di&&(!document.documentMode||9<document.documentMode)}function js(){pr&&(pr.detachEvent("onpropertychange",zc),Er=pr=null)}function zc(e){if(e.propertyName==="value"&&ti(Er)){var t=[];bc(t,Er,e,fa(e)),rc(Qp,t)}}function Gp(e,t,n){e==="focusin"?(js(),pr=t,Er=n,pr.attachEvent("onpropertychange",zc)):e==="focusout"&&js()}function Jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ti(Er)}function Zp(e,t){if(e==="click")return ti(t)}function qp(e,t){if(e==="input"||e==="change")return ti(t)}function eh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:eh;function Cr(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!tl.call(t,o)||!mt(e[o],t[o]))return!1}return!0}function Ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _s(e,t){var n=Ns(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ns(n)}}function Ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cc(){for(var e=window,t=Co();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Co(e.document)}return t}function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function th(e){var t=Cc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ec(n.ownerDocument.documentElement,n)){if(r!==null&&ka(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=_s(n,i);var l=_s(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nh=_t&&"documentMode"in document&&11>=document.documentMode,En=null,wl=null,hr=null,kl=!1;function Ds(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kl||En==null||En!==Co(r)||(r=En,"selectionStart"in r&&ka(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hr&&Cr(hr,r)||(hr=r,r=Po(wl,"onSelect"),0<r.length&&(t=new ya("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:qr("Animation","AnimationEnd"),animationiteration:qr("Animation","AnimationIteration"),animationstart:qr("Animation","AnimationStart"),transitionend:qr("Transition","TransitionEnd")},Li={},jc={};_t&&(jc=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function ni(e){if(Li[e])return Li[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jc)return Li[e]=t[n];return e}var Nc=ni("animationend"),_c=ni("animationiteration"),Dc=ni("animationstart"),Tc=ni("transitionend"),Lc=new Map,Ts="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(e,t){Lc.set(e,t),yn(t,[e])}for(var Pi=0;Pi<Ts.length;Pi++){var Oi=Ts[Pi],rh=Oi.toLowerCase(),oh=Oi[0].toUpperCase()+Oi.slice(1);Zt(rh,"on"+oh)}Zt(Nc,"onAnimationEnd");Zt(_c,"onAnimationIteration");Zt(Dc,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(Tc,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ih=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function Ls(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rp(r,t,void 0,e),e.currentTarget=null}function Pc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,h=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Ls(o,a,h),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,h=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Ls(o,a,h),i=s}}}if(No)throw e=gl,No=!1,gl=null,e}function ee(e,t){var n=t[Cl];n===void 0&&(n=t[Cl]=new Set);var r=e+"__bubble";n.has(r)||(Oc(t,e,2,!1),n.add(r))}function Ri(e,t,n){var r=0;t&&(r|=4),Oc(n,e,r,t)}var eo="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[eo]){e[eo]=!0,Bu.forEach(function(n){n!=="selectionchange"&&(ih.has(n)||Ri(n,!1,e),Ri(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[eo]||(t[eo]=!0,Ri("selectionchange",!1,t))}}function Oc(e,t,n,r){switch(xc(t)){case 1:var o=vp;break;case 4:o=wp;break;default:o=ga}n=o.bind(null,t,n,e),o=void 0,!ml||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Mi(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=an(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}rc(function(){var h=i,d=fa(n),p=[];e:{var f=Lc.get(e);if(f!==void 0){var y=ya,w=e;switch(e){case"keypress":if(mo(n)===0)break e;case"keydown":case"keyup":y=Rp;break;case"focusin":w="focus",y=_i;break;case"focusout":w="blur",y=_i;break;case"beforeblur":case"afterblur":y=_i;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Sp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ip;break;case Nc:case _c:case Dc:y=Cp;break;case Tc:y=Fp;break;case"scroll":y=kp;break;case"wheel":y=Up;break;case"copy":case"cut":case"paste":y=Np;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=bs}var k=(t&4)!==0,C=!k&&e==="scroll",g=k?f!==null?f+"Capture":null:f;k=[];for(var u=h,x;u!==null;){x=u;var v=x.stateNode;if(x.tag===5&&v!==null&&(x=v,g!==null&&(v=kr(u,g),v!=null&&k.push(Nr(u,v,x)))),C)break;u=u.return}0<k.length&&(f=new y(f,w,null,n,d),p.push({event:f,listeners:k}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==pl&&(w=n.relatedTarget||n.fromElement)&&(an(w)||w[Dt]))break e;if((y||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=h,w=w?an(w):null,w!==null&&(C=vn(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=h),y!==w)){if(k=ws,v="onMouseLeave",g="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=bs,v="onPointerLeave",g="onPointerEnter",u="pointer"),C=y==null?f:jn(y),x=w==null?f:jn(w),f=new k(v,u+"leave",y,n,d),f.target=C,f.relatedTarget=x,v=null,an(d)===h&&(k=new k(g,u+"enter",w,n,d),k.target=x,k.relatedTarget=C,v=k),C=v,y&&w)t:{for(k=y,g=w,u=0,x=k;x;x=kn(x))u++;for(x=0,v=g;v;v=kn(v))x++;for(;0<u-x;)k=kn(k),u--;for(;0<x-u;)g=kn(g),x--;for(;u--;){if(k===g||g!==null&&k===g.alternate)break t;k=kn(k),g=kn(g)}k=null}else k=null;y!==null&&Ps(p,f,y,k,!1),w!==null&&C!==null&&Ps(p,C,w,k,!0)}}e:{if(f=h?jn(h):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var S=Xp;else if(Es(f))if(Sc)S=qp;else{S=Jp;var j=Gp}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Zp);if(S&&(S=S(e,h))){bc(p,S,n,d);break e}j&&j(e,f,h),e==="focusout"&&(j=f._wrapperState)&&j.controlled&&f.type==="number"&&sl(f,"number",f.value)}switch(j=h?jn(h):window,e){case"focusin":(Es(j)||j.contentEditable==="true")&&(En=j,wl=h,hr=null);break;case"focusout":hr=wl=En=null;break;case"mousedown":kl=!0;break;case"contextmenu":case"mouseup":case"dragend":kl=!1,Ds(p,n,d);break;case"selectionchange":if(nh)break;case"keydown":case"keyup":Ds(p,n,d)}var N;if(wa)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else zn?wc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(vc&&n.locale!=="ko"&&(zn||P!=="onCompositionStart"?P==="onCompositionEnd"&&zn&&(N=yc()):(Ft=d,xa="value"in Ft?Ft.value:Ft.textContent,zn=!0)),j=Po(h,P),0<j.length&&(P=new ks(P,e,null,n,d),p.push({event:P,listeners:j}),N?P.data=N:(N=kc(n),N!==null&&(P.data=N)))),(N=Wp?Vp(e,n):Hp(e,n))&&(h=Po(h,"onBeforeInput"),0<h.length&&(d=new ks("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:h}),d.data=N))}Pc(p,t)})}function Nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Po(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=kr(e,n),i!=null&&r.unshift(Nr(e,i,o)),i=kr(e,t),i!=null&&r.push(Nr(e,i,o))),e=e.return}return r}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ps(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,h=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&h!==null&&(a=h,o?(s=kr(n,i),s!=null&&l.unshift(Nr(n,s,a))):o||(s=kr(n,i),s!=null&&l.push(Nr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var lh=/\r\n?/g,ah=/\u0000|\uFFFD/g;function Os(e){return(typeof e=="string"?e:""+e).replace(lh,`
`).replace(ah,"")}function to(e,t,n){if(t=Os(t),Os(e)!==t&&n)throw Error(z(425))}function Oo(){}var bl=null,Sl=null;function zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var El=typeof setTimeout=="function"?setTimeout:void 0,sh=typeof clearTimeout=="function"?clearTimeout:void 0,Rs=typeof Promise=="function"?Promise:void 0,uh=typeof queueMicrotask=="function"?queueMicrotask:typeof Rs<"u"?function(e){return Rs.resolve(null).then(e).catch(ch)}:El;function ch(e){setTimeout(function(){throw e})}function $i(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),zr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);zr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ms(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),vt="__reactFiber$"+Xn,_r="__reactProps$"+Xn,Dt="__reactContainer$"+Xn,Cl="__reactEvents$"+Xn,dh="__reactListeners$"+Xn,fh="__reactHandles$"+Xn;function an(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ms(e);e!==null;){if(n=e[vt])return n;e=Ms(e)}return t}e=n,n=e.parentNode}return null}function Fr(e){return e=e[vt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function ri(e){return e[_r]||null}var jl=[],Nn=-1;function qt(e){return{current:e}}function te(e){0>Nn||(e.current=jl[Nn],jl[Nn]=null,Nn--)}function Z(e,t){Nn++,jl[Nn]=e.current,e.current=t}var Jt={},Ne=qt(Jt),Ae=qt(!1),pn=Jt;function Bn(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Fe(e){return e=e.childContextTypes,e!=null}function Ro(){te(Ae),te(Ne)}function $s(e,t,n){if(Ne.current!==Jt)throw Error(z(168));Z(Ne,t),Z(Ae,n)}function Rc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,Gf(e)||"Unknown",o));return ae({},n,r)}function Mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,pn=Ne.current,Z(Ne,e),Z(Ae,Ae.current),!0}function Is(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=Rc(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,te(Ae),te(Ne),Z(Ne,e)):te(Ae),Z(Ae,n)}var Et=null,oi=!1,Ii=!1;function Mc(e){Et===null?Et=[e]:Et.push(e)}function ph(e){oi=!0,Mc(e)}function en(){if(!Ii&&Et!==null){Ii=!0;var e=0,t=G;try{var n=Et;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Et=null,oi=!1}catch(o){throw Et!==null&&(Et=Et.slice(e+1)),ac(pa,en),o}finally{G=t,Ii=!1}}return null}var _n=[],Dn=0,$o=null,Io=0,qe=[],et=0,hn=null,Ct=1,jt="";function on(e,t){_n[Dn++]=Io,_n[Dn++]=$o,$o=e,Io=t}function $c(e,t,n){qe[et++]=Ct,qe[et++]=jt,qe[et++]=hn,hn=e;var r=Ct;e=jt;var o=32-pt(r)-1;r&=~(1<<o),n+=1;var i=32-pt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Ct=1<<32-pt(t)+o|n<<o|r,jt=i+e}else Ct=1<<i|n<<o|r,jt=e}function ba(e){e.return!==null&&(on(e,1),$c(e,1,0))}function Sa(e){for(;e===$o;)$o=_n[--Dn],_n[Dn]=null,Io=_n[--Dn],_n[Dn]=null;for(;e===hn;)hn=qe[--et],qe[et]=null,jt=qe[--et],qe[et]=null,Ct=qe[--et],qe[et]=null}var Ve=null,We=null,oe=!1,ct=null;function Ic(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function As(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,We=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hn!==null?{id:Ct,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,We=null,!0):!1;default:return!1}}function Nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _l(e){if(oe){var t=We;if(t){var n=t;if(!As(e,t)){if(Nl(e))throw Error(z(418));t=Vt(n.nextSibling);var r=Ve;t&&As(e,t)?Ic(r,n):(e.flags=e.flags&-4097|2,oe=!1,Ve=e)}}else{if(Nl(e))throw Error(z(418));e.flags=e.flags&-4097|2,oe=!1,Ve=e}}}function Fs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function no(e){if(e!==Ve)return!1;if(!oe)return Fs(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zl(e.type,e.memoizedProps)),t&&(t=We)){if(Nl(e))throw Ac(),Error(z(418));for(;t;)Ic(e,t),t=Vt(t.nextSibling)}if(Fs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Ve?Vt(e.stateNode.nextSibling):null;return!0}function Ac(){for(var e=We;e;)e=Vt(e.nextSibling)}function Un(){We=Ve=null,oe=!1}function za(e){ct===null?ct=[e]:ct.push(e)}var hh=Pt.ReactCurrentBatchConfig;function nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function ro(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bs(e){var t=e._init;return t(e._payload)}function Fc(e){function t(g,u){if(e){var x=g.deletions;x===null?(g.deletions=[u],g.flags|=16):x.push(u)}}function n(g,u){if(!e)return null;for(;u!==null;)t(g,u),u=u.sibling;return null}function r(g,u){for(g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function o(g,u){return g=Xt(g,u),g.index=0,g.sibling=null,g}function i(g,u,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<u?(g.flags|=2,u):x):(g.flags|=2,u)):(g.flags|=1048576,u)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,u,x,v){return u===null||u.tag!==6?(u=Vi(x,g.mode,v),u.return=g,u):(u=o(u,x),u.return=g,u)}function s(g,u,x,v){var S=x.type;return S===Sn?d(g,u,x.props.children,v,x.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Mt&&Bs(S)===u.type)?(v=o(u,x.props),v.ref=nr(g,u,x),v.return=g,v):(v=bo(x.type,x.key,x.props,null,g.mode,v),v.ref=nr(g,u,x),v.return=g,v)}function h(g,u,x,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==x.containerInfo||u.stateNode.implementation!==x.implementation?(u=Hi(x,g.mode,v),u.return=g,u):(u=o(u,x.children||[]),u.return=g,u)}function d(g,u,x,v,S){return u===null||u.tag!==7?(u=dn(x,g.mode,v,S),u.return=g,u):(u=o(u,x),u.return=g,u)}function p(g,u,x){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Vi(""+u,g.mode,x),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Hr:return x=bo(u.type,u.key,u.props,null,g.mode,x),x.ref=nr(g,null,u),x.return=g,x;case bn:return u=Hi(u,g.mode,x),u.return=g,u;case Mt:var v=u._init;return p(g,v(u._payload),x)}if(lr(u)||Jn(u))return u=dn(u,g.mode,x,null),u.return=g,u;ro(g,u)}return null}function f(g,u,x,v){var S=u!==null?u.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(g,u,""+x,v);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Hr:return x.key===S?s(g,u,x,v):null;case bn:return x.key===S?h(g,u,x,v):null;case Mt:return S=x._init,f(g,u,S(x._payload),v)}if(lr(x)||Jn(x))return S!==null?null:d(g,u,x,v,null);ro(g,x)}return null}function y(g,u,x,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return g=g.get(x)||null,a(u,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Hr:return g=g.get(v.key===null?x:v.key)||null,s(u,g,v,S);case bn:return g=g.get(v.key===null?x:v.key)||null,h(u,g,v,S);case Mt:var j=v._init;return y(g,u,x,j(v._payload),S)}if(lr(v)||Jn(v))return g=g.get(x)||null,d(u,g,v,S,null);ro(u,v)}return null}function w(g,u,x,v){for(var S=null,j=null,N=u,P=u=0,A=null;N!==null&&P<x.length;P++){N.index>P?(A=N,N=null):A=N.sibling;var M=f(g,N,x[P],v);if(M===null){N===null&&(N=A);break}e&&N&&M.alternate===null&&t(g,N),u=i(M,u,P),j===null?S=M:j.sibling=M,j=M,N=A}if(P===x.length)return n(g,N),oe&&on(g,P),S;if(N===null){for(;P<x.length;P++)N=p(g,x[P],v),N!==null&&(u=i(N,u,P),j===null?S=N:j.sibling=N,j=N);return oe&&on(g,P),S}for(N=r(g,N);P<x.length;P++)A=y(N,g,P,x[P],v),A!==null&&(e&&A.alternate!==null&&N.delete(A.key===null?P:A.key),u=i(A,u,P),j===null?S=A:j.sibling=A,j=A);return e&&N.forEach(function(J){return t(g,J)}),oe&&on(g,P),S}function k(g,u,x,v){var S=Jn(x);if(typeof S!="function")throw Error(z(150));if(x=S.call(x),x==null)throw Error(z(151));for(var j=S=null,N=u,P=u=0,A=null,M=x.next();N!==null&&!M.done;P++,M=x.next()){N.index>P?(A=N,N=null):A=N.sibling;var J=f(g,N,M.value,v);if(J===null){N===null&&(N=A);break}e&&N&&J.alternate===null&&t(g,N),u=i(J,u,P),j===null?S=J:j.sibling=J,j=J,N=A}if(M.done)return n(g,N),oe&&on(g,P),S;if(N===null){for(;!M.done;P++,M=x.next())M=p(g,M.value,v),M!==null&&(u=i(M,u,P),j===null?S=M:j.sibling=M,j=M);return oe&&on(g,P),S}for(N=r(g,N);!M.done;P++,M=x.next())M=y(N,g,P,M.value,v),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?P:M.key),u=i(M,u,P),j===null?S=M:j.sibling=M,j=M);return e&&N.forEach(function(se){return t(g,se)}),oe&&on(g,P),S}function C(g,u,x,v){if(typeof x=="object"&&x!==null&&x.type===Sn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Hr:e:{for(var S=x.key,j=u;j!==null;){if(j.key===S){if(S=x.type,S===Sn){if(j.tag===7){n(g,j.sibling),u=o(j,x.props.children),u.return=g,g=u;break e}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Mt&&Bs(S)===j.type){n(g,j.sibling),u=o(j,x.props),u.ref=nr(g,j,x),u.return=g,g=u;break e}n(g,j);break}else t(g,j);j=j.sibling}x.type===Sn?(u=dn(x.props.children,g.mode,v,x.key),u.return=g,g=u):(v=bo(x.type,x.key,x.props,null,g.mode,v),v.ref=nr(g,u,x),v.return=g,g=v)}return l(g);case bn:e:{for(j=x.key;u!==null;){if(u.key===j)if(u.tag===4&&u.stateNode.containerInfo===x.containerInfo&&u.stateNode.implementation===x.implementation){n(g,u.sibling),u=o(u,x.children||[]),u.return=g,g=u;break e}else{n(g,u);break}else t(g,u);u=u.sibling}u=Hi(x,g.mode,v),u.return=g,g=u}return l(g);case Mt:return j=x._init,C(g,u,j(x._payload),v)}if(lr(x))return w(g,u,x,v);if(Jn(x))return k(g,u,x,v);ro(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,u!==null&&u.tag===6?(n(g,u.sibling),u=o(u,x),u.return=g,g=u):(n(g,u),u=Vi(x,g.mode,v),u.return=g,g=u),l(g)):n(g,u)}return C}var Kn=Fc(!0),Bc=Fc(!1),Ao=qt(null),Fo=null,Tn=null,Ea=null;function Ca(){Ea=Tn=Fo=null}function ja(e){var t=Ao.current;te(Ao),e._currentValue=t}function Dl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function In(e,t){Fo=e,Ea=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(Ea!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(Fo===null)throw Error(z(308));Tn=e,Fo.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var sn=null;function Na(e){sn===null?sn=[e]:sn.push(e)}function Uc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Na(t)):(n.next=o.next,o.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function _a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Tt(e,n)}return o=r.interleaved,o===null?(t.next=t,Na(r)):(t.next=o.next,o.next=t),r.interleaved=t,Tt(e,n)}function go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}function Us(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bo(e,t,n,r){var o=e.updateQueue;$t=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,h=s.next;s.next=null,l===null?i=h:l.next=h,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=h:a.next=h,d.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,d=h=s=null,a=i;do{var f=a.lane,y=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(f=t,y=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){p=w.call(y,p,f);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,f=typeof w=="function"?w.call(y,p,f):w,f==null)break e;p=ae({},p,f);break e;case 2:$t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(h=d=y,s=p):d=d.next=y,l|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(d===null&&(s=p),o.baseState=s,o.firstBaseUpdate=h,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);gn|=l,e.lanes=l,e.memoizedState=p}}function Ks(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var Br={},kt=qt(Br),Dr=qt(Br),Tr=qt(Br);function un(e){if(e===Br)throw Error(z(174));return e}function Da(e,t){switch(Z(Tr,t),Z(Dr,e),Z(kt,Br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cl(t,e)}te(kt),Z(kt,t)}function Wn(){te(kt),te(Dr),te(Tr)}function Wc(e){un(Tr.current);var t=un(kt.current),n=cl(t,e.type);t!==n&&(Z(Dr,e),Z(kt,n))}function Ta(e){Dr.current===e&&(te(kt),te(Dr))}var ie=qt(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ai=[];function La(){for(var e=0;e<Ai.length;e++)Ai[e]._workInProgressVersionPrimary=null;Ai.length=0}var xo=Pt.ReactCurrentDispatcher,Fi=Pt.ReactCurrentBatchConfig,mn=0,le=null,he=null,xe=null,Ko=!1,mr=!1,Lr=0,mh=0;function Ee(){throw Error(z(321))}function Pa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function Oa(e,t,n,r,o,i){if(mn=i,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?vh:wh,e=n(r,o),mr){i=0;do{if(mr=!1,Lr=0,25<=i)throw Error(z(301));i+=1,xe=he=null,t.updateQueue=null,xo.current=kh,e=n(r,o)}while(mr)}if(xo.current=Wo,t=he!==null&&he.next!==null,mn=0,xe=he=le=null,Ko=!1,t)throw Error(z(300));return e}function Ra(){var e=Lr!==0;return Lr=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?le.memoizedState=xe=e:xe=xe.next=e,xe}function ot(){if(he===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=xe===null?le.memoizedState:xe.next;if(t!==null)xe=t,he=e;else{if(e===null)throw Error(z(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},xe===null?le.memoizedState=xe=e:xe=xe.next=e}return xe}function Pr(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=ot(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=he,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,h=i;do{var d=h.lane;if((mn&d)===d)s!==null&&(s=s.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var p={lane:d,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,le.lanes|=d,gn|=d}h=h.next}while(h!==null&&h!==i);s===null?l=r:s.next=a,mt(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,le.lanes|=i,gn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ui(e){var t=ot(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);mt(i,t.memoizedState)||(Ie=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Vc(){}function Hc(e,t){var n=le,r=ot(),o=t(),i=!mt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ie=!0),r=r.queue,Ma(Xc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Or(9,Qc.bind(null,n,r,o,t),void 0,null),ye===null)throw Error(z(349));mn&30||Yc(n,t,o)}return o}function Yc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qc(e,t,n,r){t.value=n,t.getSnapshot=r,Gc(t)&&Jc(e)}function Xc(e,t,n){return n(function(){Gc(t)&&Jc(e)})}function Gc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Jc(e){var t=Tt(e,1);t!==null&&ht(t,e,1,-1)}function Ws(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:e},t.queue=e,e=e.dispatch=yh.bind(null,le,e),[t.memoizedState,e]}function Or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zc(){return ot().memoizedState}function yo(e,t,n,r){var o=yt();le.flags|=e,o.memoizedState=Or(1|t,n,void 0,r===void 0?null:r)}function ii(e,t,n,r){var o=ot();r=r===void 0?null:r;var i=void 0;if(he!==null){var l=he.memoizedState;if(i=l.destroy,r!==null&&Pa(r,l.deps)){o.memoizedState=Or(t,n,i,r);return}}le.flags|=e,o.memoizedState=Or(1|t,n,i,r)}function Vs(e,t){return yo(8390656,8,e,t)}function Ma(e,t){return ii(2048,8,e,t)}function qc(e,t){return ii(4,2,e,t)}function ed(e,t){return ii(4,4,e,t)}function td(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nd(e,t,n){return n=n!=null?n.concat([e]):null,ii(4,4,td.bind(null,t,e),n)}function $a(){}function rd(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function od(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function id(e,t,n){return mn&21?(mt(n,t)||(n=cc(),le.lanes|=n,gn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function gh(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Fi.transition;Fi.transition={};try{e(!1),t()}finally{G=n,Fi.transition=r}}function ld(){return ot().memoizedState}function xh(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ad(e))sd(t,n);else if(n=Uc(e,t,n,r),n!==null){var o=Te();ht(n,e,r,o),ud(n,t,r)}}function yh(e,t,n){var r=Qt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ad(e))sd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,mt(a,l)){var s=t.interleaved;s===null?(o.next=o,Na(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Uc(e,t,o,r),n!==null&&(o=Te(),ht(n,e,r,o),ud(n,t,r))}}function ad(e){var t=e.alternate;return e===le||t!==null&&t===le}function sd(e,t){mr=Ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ud(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}var Wo={readContext:rt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},vh={readContext:rt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Vs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yo(4194308,4,td.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return yo(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xh.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:Ws,useDebugValue:$a,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=Ws(!1),t=e[0];return e=gh.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,o=yt();if(oe){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),ye===null)throw Error(z(349));mn&30||Yc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Vs(Xc.bind(null,r,i,e),[e]),r.flags|=2048,Or(9,Qc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yt(),t=ye.identifierPrefix;if(oe){var n=jt,r=Ct;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wh={readContext:rt,useCallback:rd,useContext:rt,useEffect:Ma,useImperativeHandle:nd,useInsertionEffect:qc,useLayoutEffect:ed,useMemo:od,useReducer:Bi,useRef:Zc,useState:function(){return Bi(Pr)},useDebugValue:$a,useDeferredValue:function(e){var t=ot();return id(t,he.memoizedState,e)},useTransition:function(){var e=Bi(Pr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Vc,useSyncExternalStore:Hc,useId:ld,unstable_isNewReconciler:!1},kh={readContext:rt,useCallback:rd,useContext:rt,useEffect:Ma,useImperativeHandle:nd,useInsertionEffect:qc,useLayoutEffect:ed,useMemo:od,useReducer:Ui,useRef:Zc,useState:function(){return Ui(Pr)},useDebugValue:$a,useDeferredValue:function(e){var t=ot();return he===null?t.memoizedState=e:id(t,he.memoizedState,e)},useTransition:function(){var e=Ui(Pr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Vc,useSyncExternalStore:Hc,useId:ld,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Tl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var li={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),o=Qt(e),i=Nt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ht(e,i,o),t!==null&&(ht(t,e,o,r),go(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),o=Qt(e),i=Nt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ht(e,i,o),t!==null&&(ht(t,e,o,r),go(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Qt(e),o=Nt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ht(e,o,r),t!==null&&(ht(t,e,r,n),go(t,e,r))}};function Hs(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(o,i):!0}function cd(e,t,n){var r=!1,o=Jt,i=t.contextType;return typeof i=="object"&&i!==null?i=rt(i):(o=Fe(t)?pn:Ne.current,r=t.contextTypes,i=(r=r!=null)?Bn(e,o):Jt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=li,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&li.enqueueReplaceState(t,t.state,null)}function Ll(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},_a(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=rt(i):(i=Fe(t)?pn:Ne.current,o.context=Bn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Tl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&li.enqueueReplaceState(o,o.state,null),Bo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=Xf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ki(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bh=typeof WeakMap=="function"?WeakMap:Map;function dd(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ho||(Ho=!0,Kl=r),Pl(e,t)},n}function fd(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Pl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Pl(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Qs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Mh.bind(null,e,t,n),t.then(e,e))}function Xs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gs(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e)}var Sh=Pt.ReactCurrentOwner,Ie=!1;function De(e,t,n,r){t.child=e===null?Bc(t,null,n,r):Kn(t,e.child,n,r)}function Js(e,t,n,r,o){n=n.render;var i=t.ref;return In(t,o),r=Oa(e,t,n,r,i,o),n=Ra(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lt(e,t,o)):(oe&&n&&ba(t),t.flags|=1,De(e,t,r,o),t.child)}function Zs(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Va(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,pd(e,t,i,r,o)):(e=bo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(l,r)&&e.ref===t.ref)return Lt(e,t,o)}return t.flags|=1,e=Xt(i,r),e.ref=t.ref,e.return=t,t.child=e}function pd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Cr(i,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Lt(e,t,o)}return Ol(e,t,n,r,o)}function hd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Pn,Ke),Ke|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Pn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Z(Pn,Ke),Ke|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Z(Pn,Ke),Ke|=r;return De(e,t,o,n),t.child}function md(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ol(e,t,n,r,o){var i=Fe(n)?pn:Ne.current;return i=Bn(t,i),In(t,o),n=Oa(e,t,n,r,i,o),r=Ra(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lt(e,t,o)):(oe&&r&&ba(t),t.flags|=1,De(e,t,n,o),t.child)}function qs(e,t,n,r,o){if(Fe(n)){var i=!0;Mo(t)}else i=!1;if(In(t,o),t.stateNode===null)vo(e,t),cd(t,n,r),Ll(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=rt(h):(h=Fe(n)?pn:Ne.current,h=Bn(t,h));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==h)&&Ys(t,l,r,h),$t=!1;var f=t.memoizedState;l.state=f,Bo(t,r,l,o),s=t.memoizedState,a!==r||f!==s||Ae.current||$t?(typeof d=="function"&&(Tl(t,n,d,r),s=t.memoizedState),(a=$t||Hs(t,n,a,r,f,s,h))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=h,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Kc(e,t),a=t.memoizedProps,h=t.type===t.elementType?a:at(t.type,a),l.props=h,p=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=rt(s):(s=Fe(n)?pn:Ne.current,s=Bn(t,s));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||f!==s)&&Ys(t,l,r,s),$t=!1,f=t.memoizedState,l.state=f,Bo(t,r,l,o);var w=t.memoizedState;a!==p||f!==w||Ae.current||$t?(typeof y=="function"&&(Tl(t,n,y,r),w=t.memoizedState),(h=$t||Hs(t,n,h,r,f,w,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=h):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Rl(e,t,n,r,i,o)}function Rl(e,t,n,r,o,i){md(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Is(t,n,!1),Lt(e,t,i);r=t.stateNode,Sh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Kn(t,e.child,null,i),t.child=Kn(t,null,a,i)):De(e,t,a,i),t.memoizedState=r.state,o&&Is(t,n,!0),t.child}function gd(e){var t=e.stateNode;t.pendingContext?$s(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$s(e,t.context,!1),Da(e,t.containerInfo)}function eu(e,t,n,r,o){return Un(),za(o),t.flags|=256,De(e,t,n,r),t.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function $l(e){return{baseLanes:e,cachePool:null,transitions:null}}function xd(e,t,n){var r=t.pendingProps,o=ie.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Z(ie,o&1),e===null)return _l(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ui(l,r,0,null),e=dn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=$l(n),t.memoizedState=Ml,e):Ia(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return zh(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Xt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Xt(a,i):(i=dn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?$l(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ml,r}return i=e.child,e=i.sibling,r=Xt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ia(e,t){return t=ui({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oo(e,t,n,r){return r!==null&&za(r),Kn(t,e.child,null,n),e=Ia(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ki(Error(z(422))),oo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ui({mode:"visible",children:r.children},o,0,null),i=dn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Kn(t,e.child,null,l),t.child.memoizedState=$l(l),t.memoizedState=Ml,i);if(!(t.mode&1))return oo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(z(419)),r=Ki(i,r,void 0),oo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ie||a){if(r=ye,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Tt(e,o),ht(r,e,o,-1))}return Wa(),r=Ki(Error(z(421))),oo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=$h.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,We=Vt(o.nextSibling),Ve=t,oe=!0,ct=null,e!==null&&(qe[et++]=Ct,qe[et++]=jt,qe[et++]=hn,Ct=e.id,jt=e.overflow,hn=t),t=Ia(t,r.children),t.flags|=4096,t)}function tu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Dl(e.return,t,n)}function Wi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function yd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(De(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tu(e,n,t);else if(e.tag===19)tu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(ie,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Uo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Wi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Uo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Wi(t,!0,n,null,i);break;case"together":Wi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Eh(e,t,n){switch(t.tag){case 3:gd(t),Un();break;case 5:Wc(t);break;case 1:Fe(t.type)&&Mo(t);break;case 4:Da(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Z(Ao,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?xd(e,t,n):(Z(ie,ie.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);Z(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,hd(e,t,n)}return Lt(e,t,n)}var vd,Il,wd,kd;vd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Il=function(){};wd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,un(kt.current);var i=null;switch(n){case"input":o=ll(e,o),r=ll(e,r),i=[];break;case"select":o=ae({},o,{value:void 0}),r=ae({},r,{value:void 0}),i=[];break;case"textarea":o=ul(e,o),r=ul(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oo)}dl(n,r);var l;n=null;for(h in o)if(!r.hasOwnProperty(h)&&o.hasOwnProperty(h)&&o[h]!=null)if(h==="style"){var a=o[h];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(vr.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var s=r[h];if(a=o!=null?o[h]:void 0,r.hasOwnProperty(h)&&s!==a&&(s!=null||a!=null))if(h==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(h,n)),n=s;else h==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(h,s)):h==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(h,""+s):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(vr.hasOwnProperty(h)?(s!=null&&h==="onScroll"&&ee("scroll",e),i||a===s||(i=[])):(i=i||[]).push(h,s))}n&&(i=i||[]).push("style",n);var h=i;(t.updateQueue=h)&&(t.flags|=4)}};kd=function(e,t,n,r){n!==r&&(t.flags|=4)};function rr(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ch(e,t,n){var r=t.pendingProps;switch(Sa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Fe(t.type)&&Ro(),Ce(t),null;case 3:return r=t.stateNode,Wn(),te(Ae),te(Ne),La(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(no(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(Hl(ct),ct=null))),Il(e,t),Ce(t),null;case 5:Ta(t);var o=un(Tr.current);if(n=t.type,e!==null&&t.stateNode!=null)wd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Ce(t),null}if(e=un(kt.current),no(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[vt]=t,r[_r]=i,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(o=0;o<sr.length;o++)ee(sr[o],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":cs(r,i),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ee("invalid",r);break;case"textarea":fs(r,i),ee("invalid",r)}dl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&to(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&to(r.textContent,a,e),o=["children",""+a]):vr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ee("scroll",r)}switch(n){case"input":Yr(r),ds(r,i,!0);break;case"textarea":Yr(r),ps(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Oo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[vt]=t,e[_r]=r,vd(e,t,!1,!1),t.stateNode=e;e:{switch(l=fl(n,r),n){case"dialog":ee("cancel",e),ee("close",e),o=r;break;case"iframe":case"object":case"embed":ee("load",e),o=r;break;case"video":case"audio":for(o=0;o<sr.length;o++)ee(sr[o],e);o=r;break;case"source":ee("error",e),o=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),o=r;break;case"details":ee("toggle",e),o=r;break;case"input":cs(e,r),o=ll(e,r),ee("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ae({},r,{value:void 0}),ee("invalid",e);break;case"textarea":fs(e,r),o=ul(e,r),ee("invalid",e);break;default:o=r}dl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Zu(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Gu(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&wr(e,s):typeof s=="number"&&wr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(vr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ee("scroll",e):s!=null&&sa(e,i,s,l))}switch(n){case"input":Yr(e),ds(e,r,!1);break;case"textarea":Yr(e),ps(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?On(e,!!r.multiple,i,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)kd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=un(Tr.current),un(kt.current),no(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(i=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:to(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&to(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return Ce(t),null;case 13:if(te(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&We!==null&&t.mode&1&&!(t.flags&128))Ac(),Un(),t.flags|=98560,i=!1;else if(i=no(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[vt]=t}else Un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else ct!==null&&(Hl(ct),ct=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?me===0&&(me=3):Wa())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Wn(),Il(e,t),e===null&&jr(t.stateNode.containerInfo),Ce(t),null;case 10:return ja(t.type._context),Ce(t),null;case 17:return Fe(t.type)&&Ro(),Ce(t),null;case 19:if(te(ie),i=t.memoizedState,i===null)return Ce(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)rr(i,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Uo(e),l!==null){for(t.flags|=128,rr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(ie,ie.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>Hn&&(t.flags|=128,r=!0,rr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Uo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),rr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!oe)return Ce(t),null}else 2*ce()-i.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,rr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,n=ie.current,Z(ie,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Ka(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function jh(e,t){switch(Sa(t),t.tag){case 1:return Fe(t.type)&&Ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),te(Ae),te(Ne),La(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ta(t),null;case 13:if(te(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(ie),null;case 4:return Wn(),null;case 10:return ja(t.type._context),null;case 22:case 23:return Ka(),null;case 24:return null;default:return null}}var io=!1,je=!1,Nh=typeof WeakSet=="function"?WeakSet:Set,O=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function Al(e,t,n){try{n()}catch(r){ue(e,t,r)}}var nu=!1;function _h(e,t){if(bl=To,e=Cc(),ka(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,h=0,d=0,p=e,f=null;t:for(;;){for(var y;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)f=p,p=y;for(;;){if(p===e)break t;if(f===n&&++h===o&&(a=l),f===i&&++d===r&&(s=l),(y=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sl={focusedElem:e,selectionRange:n},To=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,C=w.memoizedState,g=t.stateNode,u=g.getSnapshotBeforeUpdate(t.elementType===t.type?k:at(t.type,k),C);g.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(v){ue(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return w=nu,nu=!1,w}function gr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Al(t,n,i)}o=o.next}while(o!==r)}}function ai(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bd(e){var t=e.alternate;t!==null&&(e.alternate=null,bd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[_r],delete t[Cl],delete t[dh],delete t[fh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sd(e){return e.tag===5||e.tag===3||e.tag===4}function ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oo));else if(r!==4&&(e=e.child,e!==null))for(Bl(e,t,n),e=e.sibling;e!==null;)Bl(e,t,n),e=e.sibling}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}var we=null,st=!1;function Rt(e,t,n){for(n=n.child;n!==null;)zd(e,t,n),n=n.sibling}function zd(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(qo,n)}catch{}switch(n.tag){case 5:je||Ln(n,t);case 6:var r=we,o=st;we=null,Rt(e,t,n),we=r,st=o,we!==null&&(st?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(st?(e=we,n=n.stateNode,e.nodeType===8?$i(e.parentNode,n):e.nodeType===1&&$i(e,n),zr(e)):$i(we,n.stateNode));break;case 4:r=we,o=st,we=n.stateNode.containerInfo,st=!0,Rt(e,t,n),we=r,st=o;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Al(n,t,l),o=o.next}while(o!==r)}Rt(e,t,n);break;case 1:if(!je&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,t,a)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Rt(e,t,n),je=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Nh),t.forEach(function(r){var o=Ih.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:we=a.stateNode,st=!1;break e;case 3:we=a.stateNode.containerInfo,st=!0;break e;case 4:we=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(we===null)throw Error(z(160));zd(i,l,o),we=null,st=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(h){ue(o,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ed(t,e),t=t.sibling}function Ed(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),xt(e),r&4){try{gr(3,e,e.return),ai(3,e)}catch(k){ue(e,e.return,k)}try{gr(5,e,e.return)}catch(k){ue(e,e.return,k)}}break;case 1:lt(t,e),xt(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(lt(t,e),xt(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var o=e.stateNode;try{wr(o,"")}catch(k){ue(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Yu(o,i),fl(a,l);var h=fl(a,i);for(l=0;l<s.length;l+=2){var d=s[l],p=s[l+1];d==="style"?Zu(o,p):d==="dangerouslySetInnerHTML"?Gu(o,p):d==="children"?wr(o,p):sa(o,d,p,h)}switch(a){case"input":al(o,i);break;case"textarea":Qu(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?On(o,!!i.multiple,y,!1):f!==!!i.multiple&&(i.defaultValue!=null?On(o,!!i.multiple,i.defaultValue,!0):On(o,!!i.multiple,i.multiple?[]:"",!1))}o[_r]=i}catch(k){ue(e,e.return,k)}}break;case 6:if(lt(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){ue(e,e.return,k)}}break;case 3:if(lt(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zr(t.containerInfo)}catch(k){ue(e,e.return,k)}break;case 4:lt(t,e),xt(e);break;case 13:lt(t,e),xt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ba=ce())),r&4&&ou(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(je=(h=je)||d,lt(t,e),je=h):lt(t,e),xt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(p=O=d;O!==null;){switch(f=O,y=f.child,f.tag){case 0:case 11:case 14:case 15:gr(4,f,f.return);break;case 1:Ln(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){ue(r,n,k)}}break;case 5:Ln(f,f.return);break;case 22:if(f.memoizedState!==null){lu(p);continue}}y!==null?(y.return=f,O=y):lu(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,h?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ju("display",l))}catch(k){ue(e,e.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(k){ue(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:lt(t,e),xt(e),r&4&&ou(e);break;case 21:break;default:lt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sd(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(wr(o,""),r.flags&=-33);var i=ru(e);Ul(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=ru(e);Bl(e,a,l);break;default:throw Error(z(161))}}catch(s){ue(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dh(e,t,n){O=e,Cd(e)}function Cd(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||io;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||je;a=io;var h=je;if(io=l,(je=s)&&!h)for(O=o;O!==null;)l=O,s=l.child,l.tag===22&&l.memoizedState!==null?au(o):s!==null?(s.return=l,O=s):au(o);for(;i!==null;)O=i,Cd(i),i=i.sibling;O=o,io=a,je=h}iu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):iu(e)}}function iu(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||ai(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ks(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ks(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var d=h.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&zr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}je||t.flags&512&&Fl(t)}catch(f){ue(t,t.return,f)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function lu(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function au(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ai(4,t)}catch(s){ue(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ue(t,o,s)}}var i=t.return;try{Fl(t)}catch(s){ue(t,i,s)}break;case 5:var l=t.return;try{Fl(t)}catch(s){ue(t,l,s)}}}catch(s){ue(t,t.return,s)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Th=Math.ceil,Vo=Pt.ReactCurrentDispatcher,Aa=Pt.ReactCurrentOwner,nt=Pt.ReactCurrentBatchConfig,Y=0,ye=null,pe=null,be=0,Ke=0,Pn=qt(0),me=0,Rr=null,gn=0,si=0,Fa=0,xr=null,Me=null,Ba=0,Hn=1/0,zt=null,Ho=!1,Kl=null,Yt=null,lo=!1,Bt=null,Yo=0,yr=0,Wl=null,wo=-1,ko=0;function Te(){return Y&6?ce():wo!==-1?wo:wo=ce()}function Qt(e){return e.mode&1?Y&2&&be!==0?be&-be:hh.transition!==null?(ko===0&&(ko=cc()),ko):(e=G,e!==0||(e=window.event,e=e===void 0?16:xc(e.type)),e):1}function ht(e,t,n,r){if(50<yr)throw yr=0,Wl=null,Error(z(185));Ir(e,n,r),(!(Y&2)||e!==ye)&&(e===ye&&(!(Y&2)&&(si|=n),me===4&&At(e,be)),Be(e,r),n===1&&Y===0&&!(t.mode&1)&&(Hn=ce()+500,oi&&en()))}function Be(e,t){var n=e.callbackNode;hp(e,t);var r=Do(e,e===ye?be:0);if(r===0)n!==null&&gs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&gs(n),t===1)e.tag===0?ph(su.bind(null,e)):Mc(su.bind(null,e)),uh(function(){!(Y&6)&&en()}),n=null;else{switch(dc(r)){case 1:n=pa;break;case 4:n=sc;break;case 16:n=_o;break;case 536870912:n=uc;break;default:n=_o}n=Od(n,jd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jd(e,t){if(wo=-1,ko=0,Y&6)throw Error(z(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=Do(e,e===ye?be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Qo(e,r);else{t=r;var o=Y;Y|=2;var i=_d();(ye!==e||be!==t)&&(zt=null,Hn=ce()+500,cn(e,t));do try{Oh();break}catch(a){Nd(e,a)}while(!0);Ca(),Vo.current=i,Y=o,pe!==null?t=0:(ye=null,be=0,t=me)}if(t!==0){if(t===2&&(o=xl(e),o!==0&&(r=o,t=Vl(e,o))),t===1)throw n=Rr,cn(e,0),At(e,r),Be(e,ce()),n;if(t===6)At(e,r);else{if(o=e.current.alternate,!(r&30)&&!Lh(o)&&(t=Qo(e,r),t===2&&(i=xl(e),i!==0&&(r=i,t=Vl(e,i))),t===1))throw n=Rr,cn(e,0),At(e,r),Be(e,ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:ln(e,Me,zt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=Ba+500-ce(),10<t)){if(Do(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=El(ln.bind(null,e,Me,zt),t);break}ln(e,Me,zt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-pt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Th(r/1960))-r,10<r){e.timeoutHandle=El(ln.bind(null,e,Me,zt),r);break}ln(e,Me,zt);break;case 5:ln(e,Me,zt);break;default:throw Error(z(329))}}}return Be(e,ce()),e.callbackNode===n?jd.bind(null,e):null}function Vl(e,t){var n=xr;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=Qo(e,t),e!==2&&(t=Me,Me=n,t!==null&&Hl(t)),e}function Hl(e){Me===null?Me=e:Me.push.apply(Me,e)}function Lh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!mt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~Fa,t&=~si,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(Y&6)throw Error(z(327));An();var t=Do(e,0);if(!(t&1))return Be(e,ce()),null;var n=Qo(e,t);if(e.tag!==0&&n===2){var r=xl(e);r!==0&&(t=r,n=Vl(e,r))}if(n===1)throw n=Rr,cn(e,0),At(e,t),Be(e,ce()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Me,zt),Be(e,ce()),null}function Ua(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(Hn=ce()+500,oi&&en())}}function xn(e){Bt!==null&&Bt.tag===0&&!(Y&6)&&An();var t=Y;Y|=1;var n=nt.transition,r=G;try{if(nt.transition=null,G=1,e)return e()}finally{G=r,nt.transition=n,Y=t,!(Y&6)&&en()}}function Ka(){Ke=Pn.current,te(Pn)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sh(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Sa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ro();break;case 3:Wn(),te(Ae),te(Ne),La();break;case 5:Ta(r);break;case 4:Wn();break;case 13:te(ie);break;case 19:te(ie);break;case 10:ja(r.type._context);break;case 22:case 23:Ka()}n=n.return}if(ye=e,pe=e=Xt(e.current,null),be=Ke=t,me=0,Rr=null,Fa=si=gn=0,Me=xr=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}sn=null}return e}function Nd(e,t){do{var n=pe;try{if(Ca(),xo.current=Wo,Ko){for(var r=le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ko=!1}if(mn=0,xe=he=le=null,mr=!1,Lr=0,Aa.current=null,n===null||n.return===null){me=1,Rr=t,pe=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=be,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var h=s,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Xs(l);if(y!==null){y.flags&=-257,Gs(y,l,a,i,t),y.mode&1&&Qs(i,h,t),t=y,s=h;var w=t.updateQueue;if(w===null){var k=new Set;k.add(s),t.updateQueue=k}else w.add(s);break e}else{if(!(t&1)){Qs(i,h,t),Wa();break e}s=Error(z(426))}}else if(oe&&a.mode&1){var C=Xs(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Gs(C,l,a,i,t),za(Vn(s,a));break e}}i=s=Vn(s,a),me!==4&&(me=2),xr===null?xr=[i]:xr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=dd(i,s,t);Us(i,g);break e;case 1:a=s;var u=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Yt===null||!Yt.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=fd(i,a,t);Us(i,v);break e}}i=i.return}while(i!==null)}Td(n)}catch(S){t=S,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function _d(){var e=Vo.current;return Vo.current=Wo,e===null?Wo:e}function Wa(){(me===0||me===3||me===2)&&(me=4),ye===null||!(gn&268435455)&&!(si&268435455)||At(ye,be)}function Qo(e,t){var n=Y;Y|=2;var r=_d();(ye!==e||be!==t)&&(zt=null,cn(e,t));do try{Ph();break}catch(o){Nd(e,o)}while(!0);if(Ca(),Y=n,Vo.current=r,pe!==null)throw Error(z(261));return ye=null,be=0,me}function Ph(){for(;pe!==null;)Dd(pe)}function Oh(){for(;pe!==null&&!ip();)Dd(pe)}function Dd(e){var t=Pd(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?Td(e):pe=t,Aa.current=null}function Td(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jh(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,pe=null;return}}else if(n=Ch(n,t,Ke),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);me===0&&(me=5)}function ln(e,t,n){var r=G,o=nt.transition;try{nt.transition=null,G=1,Rh(e,t,n,r)}finally{nt.transition=o,G=r}return null}function Rh(e,t,n,r){do An();while(Bt!==null);if(Y&6)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(mp(e,i),e===ye&&(pe=ye=null,be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lo||(lo=!0,Od(_o,function(){return An(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=nt.transition,nt.transition=null;var l=G;G=1;var a=Y;Y|=4,Aa.current=null,_h(e,n),Ed(n,e),th(Sl),To=!!bl,Sl=bl=null,e.current=n,Dh(n),lp(),Y=a,G=l,nt.transition=i}else e.current=n;if(lo&&(lo=!1,Bt=e,Yo=o),i=e.pendingLanes,i===0&&(Yt=null),up(n.stateNode),Be(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ho)throw Ho=!1,e=Kl,Kl=null,e;return Yo&1&&e.tag!==0&&An(),i=e.pendingLanes,i&1?e===Wl?yr++:(yr=0,Wl=e):yr=0,en(),null}function An(){if(Bt!==null){var e=dc(Yo),t=nt.transition,n=G;try{if(nt.transition=null,G=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,Yo=0,Y&6)throw Error(z(331));var o=Y;for(Y|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var h=a[s];for(O=h;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:gr(8,d,i)}var p=d.child;if(p!==null)p.return=d,O=p;else for(;O!==null;){d=O;var f=d.sibling,y=d.return;if(bd(d),d===h){O=null;break}if(f!==null){f.return=y,O=f;break}O=y}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:gr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,O=g;break e}O=i.return}}var u=e.current;for(O=u;O!==null;){l=O;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,O=x;else e:for(l=u;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ai(9,a)}}catch(S){ue(a,a.return,S)}if(a===l){O=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,O=v;break e}O=a.return}}if(Y=o,en(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(qo,e)}catch{}r=!0}return r}finally{G=n,nt.transition=t}}return!1}function uu(e,t,n){t=Vn(n,t),t=dd(e,t,1),e=Ht(e,t,1),t=Te(),e!==null&&(Ir(e,1,t),Be(e,t))}function ue(e,t,n){if(e.tag===3)uu(e,e,n);else for(;t!==null;){if(t.tag===3){uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=Vn(n,e),e=fd(t,e,1),t=Ht(t,e,1),e=Te(),t!==null&&(Ir(t,1,e),Be(t,e));break}}t=t.return}}function Mh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(be&n)===n&&(me===4||me===3&&(be&130023424)===be&&500>ce()-Ba?cn(e,0):Fa|=n),Be(e,t)}function Ld(e,t){t===0&&(e.mode&1?(t=Gr,Gr<<=1,!(Gr&130023424)&&(Gr=4194304)):t=1);var n=Te();e=Tt(e,t),e!==null&&(Ir(e,t,n),Be(e,n))}function $h(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ld(e,n)}function Ih(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),Ld(e,n)}var Pd;Pd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,Eh(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,oe&&t.flags&1048576&&$c(t,Io,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vo(e,t),e=t.pendingProps;var o=Bn(t,Ne.current);In(t,n),o=Oa(null,t,r,e,o,n);var i=Ra();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(i=!0,Mo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,_a(t),o.updater=li,t.stateNode=o,o._reactInternals=t,Ll(t,r,e,n),t=Rl(null,t,r,!0,i,n)):(t.tag=0,oe&&i&&ba(t),De(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Fh(r),e=at(r,e),o){case 0:t=Ol(null,t,r,e,n);break e;case 1:t=qs(null,t,r,e,n);break e;case 11:t=Js(null,t,r,e,n);break e;case 14:t=Zs(null,t,r,at(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),Ol(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),qs(e,t,r,o,n);case 3:e:{if(gd(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Kc(e,t),Bo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Vn(Error(z(423)),t),t=eu(e,t,r,n,o);break e}else if(r!==o){o=Vn(Error(z(424)),t),t=eu(e,t,r,n,o);break e}else for(We=Vt(t.stateNode.containerInfo.firstChild),Ve=t,oe=!0,ct=null,n=Bc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===o){t=Lt(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return Wc(t),e===null&&_l(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,zl(r,o)?l=null:i!==null&&zl(r,i)&&(t.flags|=32),md(e,t),De(e,t,l,n),t.child;case 6:return e===null&&_l(t),null;case 13:return xd(e,t,n);case 4:return Da(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kn(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),Js(e,t,r,o,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Z(Ao,r._currentValue),r._currentValue=l,i!==null)if(mt(i.value,l)){if(i.children===o.children&&!Ae.current){t=Lt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Nt(-1,n&-n),s.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var d=h.pending;d===null?s.next=s:(s.next=d.next,d.next=s),h.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Dl(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(z(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Dl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}De(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,In(t,n),o=rt(o),r=r(o),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,o=at(r,t.pendingProps),o=at(r.type,o),Zs(e,t,r,o,n);case 15:return pd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),vo(e,t),t.tag=1,Fe(r)?(e=!0,Mo(t)):e=!1,In(t,n),cd(t,r,o),Ll(t,r,o,n),Rl(null,t,r,!0,e,n);case 19:return yd(e,t,n);case 22:return hd(e,t,n)}throw Error(z(156,t.tag))};function Od(e,t){return ac(e,t)}function Ah(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new Ah(e,t,n,r)}function Va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fh(e){if(typeof e=="function")return Va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ca)return 11;if(e===da)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Va(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Sn:return dn(n.children,o,i,t);case ua:l=8,o|=8;break;case nl:return e=tt(12,n,t,o|2),e.elementType=nl,e.lanes=i,e;case rl:return e=tt(13,n,t,o),e.elementType=rl,e.lanes=i,e;case ol:return e=tt(19,n,t,o),e.elementType=ol,e.lanes=i,e;case Wu:return ui(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uu:l=10;break e;case Ku:l=9;break e;case ca:l=11;break e;case da:l=14;break e;case Mt:l=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=tt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function dn(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function ui(e,t,n,r){return e=tt(22,e,r,t),e.elementType=Wu,e.lanes=n,e.stateNode={isHidden:!1},e}function Vi(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function Hi(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ci(0),this.expirationTimes=Ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ha(e,t,n,r,o,i,l,a,s){return e=new Bh(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_a(i),e}function Uh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rd(e){if(!e)return Jt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Fe(n))return Rc(e,n,t)}return t}function Md(e,t,n,r,o,i,l,a,s){return e=Ha(n,r,!0,e,o,i,l,a,s),e.context=Rd(null),n=e.current,r=Te(),o=Qt(n),i=Nt(r,o),i.callback=t??null,Ht(n,i,o),e.current.lanes=o,Ir(e,o,r),Be(e,r),e}function ci(e,t,n,r){var o=t.current,i=Te(),l=Qt(o);return n=Rd(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ht(o,t,l),e!==null&&(ht(e,o,l,i),go(e,o,l)),l}function Xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ya(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function Kh(){return null}var $d=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qa(e){this._internalRoot=e}di.prototype.render=Qa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));ci(e,t,null,null)};di.prototype.unmount=Qa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){ci(null,e,null,null)}),t[Dt]=null}};function di(e){this._internalRoot=e}di.prototype.unstable_scheduleHydration=function(e){if(e){var t=hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&gc(e)}};function Xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function du(){}function Wh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var h=Xo(l);i.call(h)}}var l=Md(t,r,e,0,null,!1,!1,"",du);return e._reactRootContainer=l,e[Dt]=l.current,jr(e.nodeType===8?e.parentNode:e),xn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var h=Xo(s);a.call(h)}}var s=Ha(e,0,!1,null,null,!1,!1,"",du);return e._reactRootContainer=s,e[Dt]=s.current,jr(e.nodeType===8?e.parentNode:e),xn(function(){ci(t,s,n,r)}),s}function pi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Xo(l);a.call(s)}}ci(t,l,e,o)}else l=Wh(n,t,e,o,r);return Xo(l)}fc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ar(t.pendingLanes);n!==0&&(ha(t,n|1),Be(t,ce()),!(Y&6)&&(Hn=ce()+500,en()))}break;case 13:xn(function(){var r=Tt(e,1);if(r!==null){var o=Te();ht(r,e,1,o)}}),Ya(e,1)}};ma=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=Te();ht(t,e,134217728,n)}Ya(e,134217728)}};pc=function(e){if(e.tag===13){var t=Qt(e),n=Tt(e,t);if(n!==null){var r=Te();ht(n,e,t,r)}Ya(e,t)}};hc=function(){return G};mc=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};hl=function(e,t,n){switch(t){case"input":if(al(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ri(r);if(!o)throw Error(z(90));Hu(r),al(r,o)}}}break;case"textarea":Qu(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};tc=Ua;nc=xn;var Vh={usingClientEntryPoint:!1,Events:[Fr,jn,ri,qu,ec,Ua]},or={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hh={bundleType:or.bundleType,version:or.version,rendererPackageName:or.rendererPackageName,rendererConfig:or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ic(e),e===null?null:e.stateNode},findFiberByHostInstance:or.findFiberByHostInstance||Kh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{qo=ao.inject(Hh),wt=ao}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vh;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xa(t))throw Error(z(200));return Uh(e,t,null,n)};Qe.createRoot=function(e,t){if(!Xa(e))throw Error(z(299));var n=!1,r="",o=$d;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ha(e,1,!1,null,null,n,!1,r,o),e[Dt]=t.current,jr(e.nodeType===8?e.parentNode:e),new Qa(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=ic(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return xn(e)};Qe.hydrate=function(e,t,n){if(!fi(t))throw Error(z(200));return pi(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!Xa(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=$d;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Md(t,null,e,1,n??null,o,!1,i,l),e[Dt]=t.current,jr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new di(t)};Qe.render=function(e,t,n){if(!fi(t))throw Error(z(200));return pi(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!fi(e))throw Error(z(40));return e._reactRootContainer?(xn(function(){pi(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};Qe.unstable_batchedUpdates=Ua;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fi(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return pi(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function Id(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Id)}catch(e){console.error(e)}}Id(),Iu.exports=Qe;var Yh=Iu.exports,Ad,fu=Yh;Ad=fu.createRoot,fu.hydrateRoot;const Qh="modulepreload",Xh=function(e,t){return new URL(e,t).href},pu={},tn=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(h=>{if(h=Xh(h,r),h in pu)return;pu[h]=!0;const d=h.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!r)for(let w=l.length-1;w>=0;w--){const k=l[w];if(k.href===h&&(!d||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${p}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":Qh,d||(y.as="script"),y.crossOrigin="",y.href=h,s&&y.setAttribute("nonce",s),document.head.appendChild(y),d)return new Promise((w,k)=>{y.addEventListener("load",w),y.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};function Gh(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:l}=e;let a,s;const h=async(p=!0)=>{await s};async function d(){if("serviceWorker"in navigator){if(a=await tn(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:p}},[],import.meta.url).then(({Workbox:p})=>new p("./sw.js",{scope:"./",type:"classic"})).catch(p=>{l==null||l(p)}),!a)return;a.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),a.addEventListener("installed",p=>{p.isUpdate||r==null||r()}),a.register({immediate:t}).then(p=>{i?i("./sw.js",p):o==null||o(p)}).catch(p=>{l==null||l(p)})}}return s=d(),h}const Yl=(e,t)=>t.some(n=>e instanceof n);let hu,mu;function Jh(){return hu||(hu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zh(){return mu||(mu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ql=new WeakMap,Yi=new WeakMap,hi=new WeakMap;function qh(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",l)},i=()=>{n(fn(e.result)),o()},l=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",l)});return hi.set(t,e),t}function em(e){if(Ql.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",l),e.removeEventListener("abort",l)},i=()=>{n(),o()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",l),e.addEventListener("abort",l)});Ql.set(e,t)}let Xl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ql.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Fd(e){Xl=e(Xl)}function tm(e){return Zh().includes(e)?function(...t){return e.apply(Gl(this),t),fn(this.request)}:function(...t){return fn(e.apply(Gl(this),t))}}function nm(e){return typeof e=="function"?tm(e):(e instanceof IDBTransaction&&em(e),Yl(e,Jh())?new Proxy(e,Xl):e)}function fn(e){if(e instanceof IDBRequest)return qh(e);if(Yi.has(e))return Yi.get(e);const t=nm(e);return t!==e&&(Yi.set(e,t),hi.set(t,e)),t}const Gl=e=>hi.get(e);function rm(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const l=indexedDB.open(e,t),a=fn(l);return r&&l.addEventListener("upgradeneeded",s=>{r(fn(l.result),s.oldVersion,s.newVersion,fn(l.transaction),s)}),n&&l.addEventListener("blocked",s=>n(s.oldVersion,s.newVersion,s)),a.then(s=>{i&&s.addEventListener("close",()=>i()),o&&s.addEventListener("versionchange",h=>o(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const om=["get","getKey","getAll","getAllKeys","count"],im=["put","add","delete","clear"],Qi=new Map;function gu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Qi.get(t))return Qi.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=im.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||om.includes(n)))return;const i=async function(l,...a){const s=this.transaction(l,o?"readwrite":"readonly");let h=s.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),o&&s.done]))[0]};return Qi.set(t,i),i}Fd(e=>({...e,get:(t,n,r)=>gu(t,n)||e.get(t,n,r),has:(t,n)=>!!gu(t,n)||e.has(t,n)}));const lm=["continue","continuePrimaryKey","advance"],xu={},Jl=new WeakMap,Bd=new WeakMap,am={get(e,t){if(!lm.includes(t))return e[t];let n=xu[t];return n||(n=xu[t]=function(...r){Jl.set(this,Bd.get(this)[t](...r))}),n}};async function*sm(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const n=new Proxy(t,am);for(Bd.set(n,t),hi.set(n,Gl(t));t;)yield n,t=await(Jl.get(n)||t.continue()),Jl.delete(n)}function yu(e,t){return t===Symbol.asyncIterator&&Yl(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&Yl(e,[IDBIndex,IDBObjectStore])}Fd(e=>({...e,get(t,n,r){return yu(t,n)?sm:e.get(t,n,r)},has(t,n){return yu(t,n)||e.has(t,n)}}));const um="nachumin-diary",cm=1,Go="kv",dm="line-diary-entries-v1",dt="rooms-v1",$e=e=>`room-data-v1:${e}`,fm=e=>`trash-v1:${e}:${Date.now()}`,So="declaration-v1",Mr="marks-v1",pm=["・","❤︎","🩷","💛","🩵","💜","✨","✔︎"],Jo=e=>`donelog-v1:${e}`,zo=e=>`habits-v1:${e}`,Ud=e=>`habitlog-v1:${e}`,Kd=e=>`habitseed-v1:${e}`,Zl=e=>`period-v1:${e}`,Eo=e=>`symptoms-v1:${e}`,Wd=e=>`symptomlog-v1:${e}`,Vd=e=>`symptomseed-v1:${e}`,ql=e=>`futurescript-v1:${e}`,Xi="nowseed-v1",hm="now-main",Gi="futureseed-v1",mm="future-main",Ji="backup-v1",fe="diary-main",Hd=rm(um,cm,{upgrade(e){e.objectStoreNames.contains(Go)||e.createObjectStore(Go)}});async function W(e){return(await Hd).get(Go,e)}async function K(e,t){return(await Hd).put(Go,t,e)}async function gm(){try{navigator.storage&&navigator.storage.persist&&await navigator.storage.persist()}catch{}}async function xm(){const e=await W(dt);if(e)return e;let t=await W(dm);if(typeof t=="string")try{t=JSON.parse(t)}catch{t=null}const n=t&&typeof t=="object"?t:{};await K($e(fe),n);const r=Object.keys(n).sort(),o=r[r.length-1],i=[{id:fe,type:"diary",name:"日記",emoji:"💗",createdAt:Date.now(),lastAt:o?Date.now():0,preview:o?n[o].text.split(`
`)[0].slice(0,40):""}];return await K(dt,i),i}const ym=5,vm=ym*60*60*1e3,Yd=()=>new Date(Date.now()-vm),Ye=e=>String(e).padStart(2,"0"),ft=e=>`${e.getFullYear()}-${Ye(e.getMonth()+1)}-${Ye(e.getDate())}`,_e=e=>e.split("-").join("/"),ke=e=>{const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},Qd=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],lg=["S","M","T","W","T","F","S"],wm=e=>`${_e(e)} ${Qd[ke(e).getDay()]}`,so=(e,t,n)=>1+(8-new Date(e,t-1,1).getDay())%7+(n-1)*7,km=e=>Math.floor(20.8431+.242194*(e-1980)-Math.floor((e-1980)/4)),bm=e=>Math.floor(23.2488+.242194*(e-1980)-Math.floor((e-1980)/4)),Zi={};function Sm(e){if(Zi[e])return Zi[e];const t={},n=(r,o,i)=>{t[`${e}-${Ye(r)}-${Ye(o)}`]=i};n(1,1,"元日"),n(1,so(e,1,2),"成人の日"),n(2,11,"建国記念の日"),n(2,23,"天皇誕生日"),n(3,km(e),"春分の日"),n(4,29,"昭和の日"),n(5,3,"憲法記念日"),n(5,4,"みどりの日"),n(5,5,"こどもの日"),n(7,so(e,7,3),"海の日"),n(8,11,"山の日"),n(9,so(e,9,3),"敬老の日"),n(9,bm(e),"秋分の日"),n(10,so(e,10,2),"スポーツの日"),n(11,3,"文化の日"),n(11,23,"勤労感謝の日");for(const r of Object.keys(t)){const o=ke(r),i=new Date(o);i.setDate(i.getDate()+1);const l=new Date(o);l.setDate(l.getDate()+2),t[ft(l)]&&!t[ft(i)]&&i.getDay()!==0&&(t[ft(i)]="国民の休日")}for(const r of Object.keys({...t})){if(ke(r).getDay()!==0)continue;const o=ke(r);do o.setDate(o.getDate()+1);while(t[ft(o)]);t[ft(o)]="振替休日"}return Zi[e]=t,t}const zm=e=>!!Sm(Number(e.slice(0,4)))[e],Em=e=>{if(zm(e))return"sun";const t=ke(e).getDay();return t===0?"sun":t===6?"sat":""},ag=e=>"¥"+Math.round(Number(e)||0).toLocaleString("ja-JP"),sg=e=>e.slice(0,7),ug=(e,t)=>{const[n,r]=e.split("-");return(t&&Number(n)===t?"":`${n}年`)+`${Number(r)}月`},ut=()=>ft(Yd()),vu=()=>{const e=Yd();return e.setDate(e.getDate()-1),ft(e)},Xd=()=>{const e=new Date;return`${e.getHours()}:${Ye(e.getMinutes())}`},Cm=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),cg=e=>String(e||"").replace(/[\/\\:*?"<>| -]/g,"_").replace(/\s+/g," ").trim()||"room";async function jm(e){try{return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.top="0",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}const Ze=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36),dg=e=>Object.keys(e).sort().map(t=>`🩷${wm(t)}🩷 ${e[t].time}
${e[t].text}`).join(`

──────────

`),fg=e=>{const t={},n=e.split(/\n*─{3,}\n*/);for(const r of n){const o=r.trim();if(!o)continue;const i=o.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*(?:[（(]?(?:[A-Za-z]{3}|[日月火水木金土])[)）]?)?\s*🩷?\s*(\d{1,2}:\d{2})?\s*\n?([\s\S]*)$/u);if(!i)continue;const l=`${i[1]}-${Ye(Number(i[2]))}-${Ye(Number(i[3]))}`,a=i[5].trim();a&&(t[l]={text:a,time:i[4]||"0:00"})}return t},pg=(e,t)=>{const n=[];let r="";for(const o of e)o.dateKey!==r&&(r=o.dateKey,n.length&&n.push(""),n.push(`🩷${_e(r)}🩷`)),n.push(`${o.time?o.time+" ":""}${t(o.memberId)}「${o.text}」`);return n.join(`
`)},hg=e=>{const t=[];let n=ut(),r=null;const o=()=>{if(!r)return;let i=r.lines.join(`
`).trim();i.endsWith("」")&&(i=i.slice(0,-1)),i&&t.push({dateKey:r.dateKey,name:r.name,time:r.time,text:i}),r=null};for(const i of e.split(`
`)){const l=i.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(l){o(),n=`${l[1]}-${Ye(Number(l[2]))}-${Ye(Number(l[3]))}`;continue}if(r)r.lines.push(i);else{const s=i.match(/^(?:(\d{1,2}:\d{2})\s+)?(.+?)「([\s\S]*)$/u);if(!s)continue;r={dateKey:n,name:s[2].trim(),time:s[1]||"",lines:[s[3]]}}const a=r.lines[r.lines.length-1].trimEnd();a.endsWith("」")&&(r.lines[r.lines.length-1]=a,o())}return o(),t},Nm=[{key:"morning",label:"朝",emoji:"🌅"},{key:"noon",label:"昼",emoji:"☀️"},{key:"night",label:"夜",emoji:"🌙"}],mg=()=>{const e=new Date().getHours();return e>=5&&e<11?"morning":e>=11&&e<17?"noon":"night"},gg=(e,t)=>{var i;const n=l=>{var a;return((a=t.find(s=>s.id===l))==null?void 0:a.name)||"？"},r={};for(const l of e)(r[i=l.dateKey]||(r[i]={morning:[],noon:[],night:[]}))[l.slot].push(l);const o=[];for(const l of Object.keys(r).sort()){const a=[];for(const s of Nm){const h=r[l][s.key];if(!h.length)continue;const d=h.map(p=>n(p.memberId)+(p.memo&&p.memo.trim()?`(${p.memo.trim()})`:"")).join("・");a.push(`${s.emoji}${s.label}:${d}`)}a.length&&o.push(`🩷${_e(l)}🩷 ${a.join(" / ")}`)}return o.join(`
`)},xg=e=>{const t=[],n=r=>r.includes("朝")?"morning":r.includes("昼")?"noon":r.includes("夜")?"night":null;for(const r of e.split(`
`)){const o=r.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(.*)$/u);if(!o)continue;const i=`${o[1]}-${Ye(Number(o[2]))}-${Ye(Number(o[3]))}`,l=o[4];if(l.trim())for(const a of l.split("/")){const s=a.indexOf(":"),h=a.indexOf("："),d=s===-1?h:h===-1?s:Math.min(s,h);if(d===-1)continue;const p=n(a.slice(0,d));if(!p)continue;const f=a.slice(d+1);for(const y of f.split("・")){const w=y.trim().match(/^(.+?)(?:[(（]([\s\S]*)[)）])?$/u);if(!w)continue;const k=w[1].trim();k&&t.push({dateKey:i,slot:p,name:k,memo:(w[2]||"").trim()})}}}return t},yg=e=>{var n;const t={};for(const r of e)(t[n=r.dateKey]||(t[n]={morning:[],noon:[],night:[]}))[r.slot].push(r);return t},vg=(e,t)=>{let n=t;for(const l of e)l.dateKey<n&&(n=l.dateKey);ke(t);const r=ke(t);r.setDate(r.getDate()-34);const o=ke(n)<r?ke(n):r,i=[];for(let l=new Date(o);ft(l)<=t;l.setDate(l.getDate()+1))i.push(ft(l));return i},wg=e=>{const t=[];for(const n of String(e||"").split(`
`)){let r=n.trim();r&&(/^🩷?\s*\d{4}[/-]\d{1,2}[/-]\d{1,2}\s*🩷?\s*$/u.test(r)||(r=r.replace(/^[★☆☐☑✓□■●○・\-*+•‣▪️\s]+/u,"").trim(),r&&t.push(r)))}return t},kg=e=>{const t=[];let n=ut();for(const r of e.split(`
`)){const o=r.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(o){n=`${o[1]}-${Ye(Number(o[2]))}-${Ye(Number(o[3]))}`;continue}const i=r.match(/^\s*(★\s*)?([☑☐✓])\s+(.+)$/u);if(!i)continue;const l=!!i[1],a=i[2]==="☑"||i[2]==="✓",s=i[3].trim();s&&t.push({dateKey:n,text:s,done:a,important:l})}return t},_m="🩷 できたこと",bg=e=>{const t=(e||"").split(`
`),n=t.indexOf(_m);if(n===-1)return{text:e||"",items:[]};const r=[];let o=n+1;for(;o<t.length&&t[o].startsWith("☑ ");){const a=t[o].match(/^☑ (.*?)(?: \((\d{1,2}:\d{2})\))?$/u);a&&r.push({text:a[1],time:a[2]||""}),o++}let i=n;return i-1>=0&&t[i-1]===""&&(i-=1),t.splice(i,o-i),{text:t.join(`
`).replace(/\n{3,}/g,`

`).replace(/\s+$/,""),items:r}},Gd="🎬 今日のコマ: ",Dm=e=>(e||"").split(`
`).filter(t=>!t.startsWith(Gd)).join(`
`).replace(/^\n+/,""),Tm=(e,t)=>{const n=Dm(e).trim(),r=Gd+t;return n?`${r}

${n}`:r},Ga=(e,t)=>{const n=ke(e);return n.setDate(n.getDate()+t),ft(n)},ea=(e,t)=>Math.round((ke(t)-ke(e))/864e5),wu=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(String(e||""));if(!t)return 99999;const n=Number(t[1]);return(n<5?n+24:n)*60+Number(t[2])},Sg=(e,t)=>{const n=ke(e),r=n.getDate();n.setDate(1),n.setMonth(n.getMonth()+t);const o=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return n.setDate(Math.min(r,o)),ft(n)},zg=e=>{if(e<12)return`${e}ヶ月後`;const t=Math.floor(e/12),n=e%12;return n===0?`${t}年後`:n===6?`${t}年半後`:`${t}年${n}ヶ月後`},Eg=e=>{const t=[...new Set(e||[])].sort();if(!t.length)return[];const n=[];for(const o of t){const i=n[n.length-1];i&&Ga(i.end,1)===o?i.end=o:n.push({start:o,end:o})}return n.map((o,i)=>({start:o.start,end:o.end,length:ea(o.start,o.end)+1,cycle:i<n.length-1?ea(o.start,n[i+1].start):null,ongoing:i===n.length-1})).reverse()},Cg=(e,t,n=3)=>{const r=e.filter(s=>s.cycle!=null).map(s=>s.cycle);if(!r.length||!e.length)return null;const o=r.slice(0,n),i=Math.round(o.reduce((s,h)=>s+h,0)/o.length),l=e[0].start,a=Ga(l,i);return{next:a,avg:i,daysLeft:ea(t,a),min:Math.min(...r),max:Math.max(...r),count:r.length}},Lm={morning:"🌅",noon:"☀️",night:"🌙"},qi="nachumin-diary-backup.json";function Pm(e){if(!e||typeof e!="object"||Array.isArray(e))return"バックアップの形式が読めませんでした 🥺";if(e.app!=="nachumin-diary")return"これは Nachumin Lifelog のバックアップファイルではないみたい 🥺";if(!Array.isArray(e.rooms))return"ルームの情報が入っていません。ファイルが壊れているかも 🥺";if(e.rooms.some(t=>!t||typeof t!="object"||!t.id||!t.type))return"ルームの形式が壊れています 🥺";if(e.data!=null&&(typeof e.data!="object"||Array.isArray(e.data)))return"ルームの中身の形式が壊れています 🥺";for(const t of["doneLogs","habits","habitLogs","habitSeeds","periods","symptoms","symptomLogs","symptomSeeds","futureScripts"])if(e[t]!=null&&(typeof e[t]!="object"||Array.isArray(e[t])))return`${t} の形式が壊れています 🥺`;return null}function Om(e){const t={rooms:(e.rooms||[]).length,items:0},n=r=>r==="talk"?"messages":r==="todo"?"todos":r==="darelog"?"records":r==="expense"?"expenses":r==="challenge"?"challenges":r==="future"?"opened":r==="now"?"posts":null;for(const r of e.rooms||[]){const o=e.data?e.data[r.id]:void 0;if(!o)continue;const i=n(r.type);t.items+=i?(o[i]||[]).length:Object.keys(o).length}return t}function el(e,t){var i,l;if(e.type==="talk"){const a=t&&t.messages||[],s=a[a.length-1];return{previewName:s?(d=>{var p;return((p=(e.members||[]).find(f=>f.id===d))==null?void 0:p.name)||""})(s.memberId):"",preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="todo"){const a=t&&t.todos||[],s=a[a.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?`${s.done?"☑":"☐"} ${s.text.split(`
`)[0]}`.slice(0,40):"",todoOpen:a.filter(h=>!h.done&&!h.deferred).length,lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="darelog"){const a=t&&t.records||[],s=a[a.length-1],h=d=>{var p;return((p=(e.members||[]).find(f=>f.id===d))==null?void 0:p.name)||""};return{preview:s?`${Lm[s.slot]||""} ${h(s.memberId)}`.trim():"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="challenge"){const a=t&&t.challenges||[],s=[...a].sort((h,d)=>{var p,f;return(((p=d.records)==null?void 0:p.length)||0)-(((f=h.records)==null?void 0:f.length)||0)})[0];return{preview:s?`${s.emoji||"🏁"} ${s.name} ${((i=s.records)==null?void 0:i.length)||0}/${s.target}`:"",lastAt:e.lastAt||(a.length?Date.now():0)}}if(e.type==="expense"){const a=t&&t.expenses||[],s=a[a.length-1];return{preview:s?`${(d=>{var p;return((p=(e.categories||[]).find(f=>f.id===d))==null?void 0:p.name)||""})(s.categoryId)} ¥${(s.amount||0).toLocaleString("ja-JP")}`:"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="now"){const s=[...t&&t.posts||[]].sort((h,d)=>(h.at||0)-(d.at||0)).pop();return{preview:s&&typeof s.text=="string"?`${s.time} ${s.text.split(`
`)[0]}`.slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="future"){const a=t&&t.opened||[],s=a[a.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}const n=t&&typeof t=="object"?t:{},r=Object.keys(n).sort(),o=r[r.length-1];return{preview:typeof((l=n[o])==null?void 0:l.text)=="string"?n[o].text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(o?Date.now():0)}}async function ku(){const e=await W(dt)||[],t={};for(const y of e){const w=await W($e(y.id));w!==void 0&&(t[y.id]=w)}const n=await W(So)||null,r={},o={},i={},l={},a={},s={},h={},d={},p={};for(const y of e){const w=await W(Jo(y.id));w&&Object.keys(w).length&&(r[y.id]=w);const k=await W(zo(y.id));Array.isArray(k)&&k.length&&(o[y.id]=k);const C=await W(Ud(y.id));C&&Object.keys(C).length&&(i[y.id]=C),await W(Kd(y.id))&&(l[y.id]=!0);const g=await W(Zl(y.id));Array.isArray(g==null?void 0:g.days)&&g.days.length&&(a[y.id]=g.days);const u=await W(Eo(y.id));Array.isArray(u)&&u.length&&(s[y.id]=u);const x=await W(Wd(y.id));x&&Object.keys(x).length&&(h[y.id]=x),await W(Vd(y.id))&&(d[y.id]=!0);const v=await W(ql(y.id));Array.isArray(v)&&v.length&&(p[y.id]=v)}const f=await W(Mr)||null;return{app:"nachumin-diary",version:1,exportedAt:new Date().toISOString(),rooms:e,data:t,declaration:n,doneLogs:r,habits:o,habitLogs:i,habitSeeds:l,periods:a,symptoms:s,symptomLogs:h,symptomSeeds:d,futureScripts:p,marks:f}}const Rm=e=>e.map((t,n)=>[t,n]).sort((t,n)=>t[0].dateKey<n[0].dateKey?-1:t[0].dateKey>n[0].dateKey?1:t[1]-n[1]).map(([t])=>t);async function Mm(e){var s,h;if(!e||e.app!=="nachumin-diary"||!Array.isArray(e.rooms))throw new Error("invalid-backup");const t=await W(dt)||[],n=new Map(t.map(d=>[d.id,{...d}]));let r=0,o=0;for(const d of e.rooms){const p=e.data?e.data[d.id]:void 0,f=d.type==="talk"?"messages":d.type==="todo"?"todos":d.type==="darelog"?"records":d.type==="expense"?"expenses":d.type==="challenge"?"challenges":d.type==="future"?"opened":d.type==="now"?"posts":null,y=k=>f==="messages"?`${k.dateKey} ${k.memberId} ${k.text}`:f==="todos"?`${k.dateKey} ${k.text}`:f==="records"?`${k.dateKey} ${k.slot} ${k.memberId}`:k.id;if(!n.has(d.id)){p!==void 0&&await K($e(d.id),p),n.set(d.id,{...d,...el(d,p)}),r+=1,f?o+=((s=p==null?void 0:p[f])==null?void 0:s.length)||0:o+=p?Object.keys(p).length:0;continue}const w=n.get(d.id);if(f){const k=await W($e(d.id))||{},C=k[f]||[],g=new Set(C.map(y));let u=C.slice();for(const S of(p==null?void 0:p[f])||[])g.has(y(S))||(g.add(y(S)),u.push(S),o+=1);f==="messages"&&(u=Rm(u));const x={...k,[f]:u};for(const S of Object.keys(p||{}))S!==f&&x[S]===void 0&&(x[S]=p[S]);await K($e(d.id),x);let v={...w};if(d.type==="talk"||d.type==="darelog"){const S=w.members||[],j=new Set(S.map(N=>N.id));v.members=S.concat((d.members||[]).filter(N=>!j.has(N.id)))}n.set(d.id,{...v,...el(v,x)})}else{const C={...await W($e(d.id))||{}};for(const g of Object.keys(p||{}))C[g]||(C[g]=p[g],o+=1);await K($e(d.id),C),n.set(d.id,{...w,...el(w,C)})}}if(e.doneLogs)for(const[d,p]of Object.entries(e.doneLogs)){const f=Jo(d),w={...await W(f)||{}};for(const[k,C]of Object.entries(p)){const g=(w[k]||[]).slice();for(const u of C)g.some(x=>x.text===u.text&&x.time===u.time)||g.push(u);w[k]=g}await K(f,w)}const i={};if(e.habits)for(const[d,p]of Object.entries(e.habits)){if(!Array.isArray(p))continue;const f=await W(zo(d));if(f===void 0){await K(zo(d),p);continue}const y=Array.isArray(f)?f:[],w=new Set(y.map(u=>u.id)),k=new Map(y.filter(u=>(u.name||"").trim()).map(u=>[u.name.trim(),u.id])),C=y.slice(),g={};for(const u of p){if(!u||!u.id)continue;if(w.has(u.id)){g[u.id]=u.id;continue}const x=(u.name||"").trim(),v=x?k.get(x):null;if(v){g[u.id]=v;continue}C.push(u),w.add(u.id),x&&k.set(x,u.id),g[u.id]=u.id}C.length!==y.length&&await K(zo(d),C),i[d]=g}if(e.habitSeeds)for(const d of Object.keys(e.habitSeeds))e.habitSeeds[d]&&await K(Kd(d),!0);if(e.periods)for(const[d,p]of Object.entries(e.periods)){if(!Array.isArray(p))continue;const f=((h=await W(Zl(d)))==null?void 0:h.days)||[];await K(Zl(d),{days:[...new Set([...f,...p])].sort()})}const l={};if(e.symptoms)for(const[d,p]of Object.entries(e.symptoms)){if(!Array.isArray(p))continue;const f=await W(Eo(d));if(f===void 0){await K(Eo(d),p);continue}const y=Array.isArray(f)?f:[],w=new Set(y.map(u=>u.id)),k=new Map(y.filter(u=>(u.name||"").trim()).map(u=>[u.name.trim(),u.id])),C=y.slice(),g={};for(const u of p){if(!u||!u.id)continue;if(w.has(u.id)){g[u.id]=u.id;continue}const x=(u.name||"").trim(),v=x?k.get(x):null;if(v){g[u.id]=v;continue}C.push(u),w.add(u.id),x&&k.set(x,u.id),g[u.id]=u.id}C.length!==y.length&&await K(Eo(d),C),l[d]=g}if(e.symptomSeeds)for(const d of Object.keys(e.symptomSeeds))e.symptomSeeds[d]&&await K(Vd(d),!0);if(e.futureScripts)for(const[d,p]of Object.entries(e.futureScripts)){if(!Array.isArray(p)||!p.length)continue;const f=await W(ql(d))||[],y=new Set(f.map(k=>k.id)),w=p.filter(k=>k&&k.id&&!y.has(k.id));w.length&&(await K(ql(d),[...f,...w]),o+=w.length)}if(e.symptomLogs)for(const[d,p]of Object.entries(e.symptomLogs)){const f=Wd(d),w={...await W(f)||{}},k=l[d]||{};for(const[C,g]of Object.entries(p)){const u=(g||[]).map(x=>k[x]||x);w[C]=[...new Set([...w[C]||[],...u])]}await K(f,w)}if(e.habitLogs)for(const[d,p]of Object.entries(e.habitLogs)){const f=i[d]||{},y=Ud(d),k={...await W(y)||{}};for(const[C,g]of Object.entries(p)){const u=(g||[]).map(x=>f[x]||x);k[C]=[...new Set([...k[C]||[],...u])]}await K(y,k)}if(Array.isArray(e.marks)&&e.marks.length){const d=await W(Mr);(!Array.isArray(d)||!d.length)&&await K(Mr,e.marks)}const a=[...n.values()];return await K(dt,a),{addedRooms:r,addedItems:o,rooms:a}}const rn="M12 20.5s-7.5-5-7.5-10a4.2 4.2 0 0 1 7.5-2.6A4.2 4.2 0 0 1 19.5 10.5c0 5-7.5 10-7.5 10z",$m=`<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>
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
<path d='${rn}' transform='translate(96 60) scale(1.6)'/>
<path d='${rn}' transform='translate(24 96) scale(0.9) rotate(-12 12 12)'/>
<path d='${rn}' transform='translate(190 60) scale(0.8) rotate(14 12 12)'/>
<path d='${rn}' transform='translate(130 150) scale(1.1) rotate(-8 12 12)'/>
<path d='${rn}' transform='translate(30 208) scale(0.8) rotate(10 12 12)'/>
</g>
<g fill='#f8b1d6'>
<path d='${rn}' transform='translate(100 64) scale(1.1) '/>
<path d='${rn}' transform='translate(133 153) scale(0.7)'/>
</g>
</svg>`,uo=`url("data:image/svg+xml,${encodeURIComponent($m)}")`,jg=["#ffffff","#fff5fa","#ffd9ec","#ffc4e1","#ff9fd0","#e0629f","#d4f0ff","#c9f5f2","#d9ffe3","#e8dcff","#f0f0f0","#2b2430"],Ng=["#9C27B0","#E91E63","#FFEB3B","#2196F3","#4CAF50","#FF9800","#F44336","#00BCD4","#3F51B5","#8BC34A","#FF4081","#009688"],ta=["#ff6fb2","#c58cff","#6fb8ff","#5fd6b0","#ffcf5f","#ff9d6f","#7ed957","#ff8fa8"],ur=ta[0],bu=e=>{const t=e||ur;return{background:`linear-gradient(163deg, #ffffff 0%, #fff6fb 40%, ${t}2e 100%)`,boxShadow:`0 6px 13px ${t}42, 0 2px 0 ${t}66, inset 0 1.5px 0 #ffffff`,borderColor:`${t}55`}},_g=[{key:"auto",label:"自動",value:null},{key:"white",label:"白",value:"#ffffff"},{key:"black",label:"黒",value:"#222028"},{key:"pink",label:"ピンク",value:"#ff2d87"}],Im=e=>{const t=String(e).replace("#","");if(t.length<6)return"#4a3140";const n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),o=parseInt(t.slice(4,6),16);return .299*n+.587*r+.114*o<140?"#fff5fa":"#4a3140"},Dg=e=>e&&e.textColor?e.textColor:Im(e&&e.color),Su=`
  * { box-sizing: border-box; }
  .app {
    height: 100vh; height: 100dvh;
    display: flex; flex-direction: column;
    font-family: "Hiragino Maru Gothic ProN", "Hiragino Kaku Gothic ProN",
      "Yu Gothic", sans-serif;
    background: ${uo} #f6bedd; background-size: 240px 240px;
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
    background: ${uo} #f6bedd; background-size: 240px 240px;
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
  /* 日記ルームに出る「🕐 なう」 */
  .now-daily .done-bubble { background: #fff4fa; border-color: #ffc9e4; }
  .now-daily .done-bubble::after { background: #fff4fa; border-color: #ffc9e4; }
  .now-d-n { font-size: 11px; font-weight: 800; color: #d6317f; }
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
    background: ${uo} #f6bedd; background-size: 240px 240px;
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
    background: ${uo} #f6bedd; background-size: 240px 240px;
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
`;function Am(e,t=500){const n=_.useRef({}),r=l=>{if(typeof e!="function"||l.touches&&l.touches.length!==1)return;const a=l.touches?l.touches[0]:l;n.current.x=a.clientX,n.current.y=a.clientY,n.current.fired=!1,clearTimeout(n.current.timer),n.current.timer=setTimeout(()=>{n.current.fired=!0;try{navigator.vibrate&&navigator.vibrate(15)}catch{}e({x:n.current.x,y:n.current.y})},t)},o=l=>{const a=l.touches?l.touches[0]:l;(Math.abs(a.clientX-n.current.x)>10||Math.abs(a.clientY-n.current.y)>10)&&clearTimeout(n.current.timer)},i=()=>clearTimeout(n.current.timer);return{onTouchStart:r,onTouchMove:o,onTouchEnd:i,onTouchCancel:i,onContextMenu:l=>{typeof e=="function"&&(l.preventDefault(),e({x:l.clientX,y:l.clientY}))},onClickCapture:l=>{n.current.fired&&(l.stopPropagation(),l.preventDefault(),n.current.fired=!1)}}}function Fm({onLongPress:e,longPressMs:t,children:n,...r}){const o=Am(e,t);return c.jsx("div",{...r,...o,children:n})}function Bm({x:e,y:t,onCopy:n,onEdit:r,onDelete:o,onClose:i,top:l,extra:a}){const d=_.useRef(null),[p,f]=_.useState(null);return _.useLayoutEffect(()=>{const y=d.current;if(!y)return;const w=y.offsetHeight,k=window.innerWidth,C=window.innerHeight,g=Math.max(8,Math.min(e-168/2,k-168-8));let u=t+8;u+w>C-8&&(u=t-8-w),u<8&&(u=Math.max(8,C-w-8)),f({left:g,top:u})},[e,t,l,a,r,o]),c.jsx("div",{className:"ctx-overlay",onClick:i,onContextMenu:y=>y.preventDefault(),children:c.jsxs("div",{ref:d,className:"ctx-menu",style:{left:p?p.left:Math.max(8,Math.min(e-168/2,window.innerWidth-168-8)),top:p?p.top:t+8,width:168,maxHeight:`calc(100vh - ${8*2}px)`,overflowY:"auto",visibility:p?"visible":"hidden"},onClick:y=>y.stopPropagation(),children:[(l||[]).map((y,w)=>c.jsx("button",{className:"ctx-item ctx-top",onClick:y.onClick,children:y.label},w)),c.jsx("button",{className:"ctx-item",onClick:n,children:"📋 コピー"}),r&&c.jsx("button",{className:"ctx-item",onClick:r,children:"✏️ 編集"}),(a||[]).map((y,w)=>c.jsx("button",{className:"ctx-item",onClick:y.onClick,children:y.label},w)),o&&c.jsx("button",{className:"ctx-item ctx-del",onClick:o,children:"🗑 削除"})]})})}function Jd({message:e,confirmLabel:t="削除する",onConfirm:n,onCancel:r}){return c.jsx("div",{className:"overlay confirm-over",onClick:r,children:c.jsxs("div",{className:"panel confirm-panel",onClick:o=>o.stopPropagation(),children:[c.jsx("div",{className:"confirm-msg",children:e}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-close",onClick:r,children:"キャンセル"}),c.jsx("button",{className:"p-del arm",onClick:n,children:t})]})]})})}function Um(e=!0){const[t,n]=_.useState(0);return _.useEffect(()=>{if(!e||!window.visualViewport){n(0);return}const r=window.visualViewport,o=()=>n(Math.max(0,window.innerHeight-r.height-r.offsetTop));return o(),r.addEventListener("resize",o),r.addEventListener("scroll",o),()=>{r.removeEventListener("resize",o),r.removeEventListener("scroll",o)}},[e]),t}const zu=/https?:\/\/[^\s　-〿぀-ヿ一-鿿＀-￯]+/g,Km=/[.,;:、。）)\]】」』"'！？!?]+$/;function Wm(e,t=n=>n){if(!e)return e;const n=[];let r=0,o=0,i;for(zu.lastIndex=0;i=zu.exec(e);){let l=i[0];const a=(l.match(Km)||[""])[0];a&&(l=l.slice(0,l.length-a.length)),l&&(i.index>r&&n.push(c.jsx(_.Fragment,{children:t(e.slice(r,i.index))},o++)),n.push(c.jsx("a",{className:"body-link",href:l,target:"_blank",rel:"noopener noreferrer",onClick:s=>s.stopPropagation(),children:l},o++)),r=i.index+l.length)}return n.length?(r<e.length&&n.push(c.jsx(_.Fragment,{children:t(e.slice(r))},o++)),n):t(e)}const Vm=(e,t)=>wu(e.time)-wu(t.time)||(e.at||0)-(t.at||0),Hm=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(e||"");return t?`${t[1].padStart(2,"0")}:${t[2]}`:""},Ym=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(e||"");return t?`${Number(t[1])}:${t[2]}`:""};function Qm({room:e,onBack:t,onMeta:n,showToast:r,pinned:o,onOpenDiary:i}){const[l,a]=_.useState([]),[s,h]=_.useState(!1),[d,p]=_.useState(""),[f,y]=_.useState(()=>vu()),[w,k]=_.useState(null),[C,g]=_.useState(null),[u,x]=_.useState(null),[v,S]=_.useState(null),[j,N]=_.useState(76),P=_.useRef(null),A=_.useRef(null),M=_.useRef(null),J=Um(!C),se=ut();_.useEffect(()=>{(async()=>{try{const D=await W($e(e.id));D&&Array.isArray(D.posts)&&a(D.posts)}catch{}finally{h(!0)}})()},[e.id]),_.useEffect(()=>{if(!A.current||typeof ResizeObserver>"u")return;const D=new ResizeObserver(()=>A.current&&N(A.current.offsetHeight));return D.observe(A.current),()=>D.disconnect()},[C]);const de=D=>{const B=P.current;B&&B.scrollTo({top:B.scrollHeight,behavior:D?"smooth":"auto"})};_.useEffect(()=>{s&&de(!1)},[s]);const ge=async D=>{a(D);try{await K($e(e.id),{posts:D});const B=[...D].sort((ze,ve)=>(ze.at||0)-(ve.at||0)).pop();n({preview:B?`${B.time} ${B.text.split(`
`)[0]}`.slice(0,40):"",lastAt:Date.now()})}catch{r("保存に失敗しました。ストレージを確認してね")}},bt=()=>{const D=d.trim();if(!D)return;const B={id:Ze(),dateKey:ut(),time:Xd(),text:D,at:Date.now()};ge([...l,B]),p(""),M.current&&(M.current.style.height="auto"),S(B.id),setTimeout(()=>S(null),900),requestAnimationFrame(()=>de(!0))},St=D=>{D.key==="Enter"&&!D.shiftKey&&!D.nativeEvent.isComposing&&D.keyCode!==229&&(D.preventDefault(),bt())},Ge=D=>{p(D.target.value);const B=D.target;B.style.height="auto",B.style.height=Math.min(B.scrollHeight,120)+"px"},L=()=>{const D=C.text.trim(),B=Ym(C.time);if(!D){r("なにしてたか書いてね");return}if(!B){r("時刻を入れてね");return}ge(l.map(ze=>ze.id===C.id?{...ze,text:D,time:B}:ze)),g(null)},I=D=>{const B=l.find(ve=>ve.id===D);if(!B)return;const ze=B.text.length>20?B.text.slice(0,20)+"…":B.text;x({message:`${B.time}「${ze}」を削除しますか？`,onConfirm:()=>{ge(l.filter(ve=>ve.id!==D)),x(null),g(null)}})},F={};for(const D of l)(F[D.dateKey]=F[D.dateKey]||[]).push(D);const Q=Object.keys(F).sort(),q=Q.filter(D=>D>=f);q.includes(se)||q.push(se);const gt=Q.filter(D=>D<f).length,Ue=(F[se]||[]).length,it=D=>{const B=`${_e(D).slice(5)} ${Qd[ke(D).getDay()]}`;return D===se?`今日 ${B}`:D===vu()?`昨日 ${B}`:B},X=w&&l.find(D=>D.id===w.id);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"hd",children:[c.jsx("button",{className:"back-btn","aria-label":"もどる",onClick:t,children:"‹"}),c.jsx("span",{style:{fontSize:20},children:e.emoji}),c.jsxs("div",{style:{minWidth:0},children:[c.jsx("div",{className:"hd-title",children:e.name}),c.jsx("div",{className:"hd-sub",children:s?`今日 ${Ue}件`:"Nachumin Lifelog"})]}),i&&c.jsxs("button",{className:"now-to-diary",onClick:i,"aria-label":"日記をひらく",children:[c.jsx("span",{className:"now-to-diary-ic",children:"💗"}),"日記",c.jsx("span",{className:"now-to-diary-arw",children:"›"})]})]}),o,c.jsxs("div",{className:"chat now-scroll",ref:P,style:{paddingBottom:j+12},children:[gt>0&&c.jsxs("button",{className:"now-more",onClick:()=>y(D=>Ga(D,-7)),children:["↑ 前の日を見る（あと",gt,"日ぶん）"]}),q.map(D=>{const B=(F[D]||[]).slice().sort(Vm);return c.jsxs(_.Fragment,{children:[c.jsxs("div",{className:"now-day"+(D===se?" today":""),children:[c.jsx("span",{className:"now-day-l "+Em(D),children:it(D)}),B.length>0&&c.jsx("span",{className:"now-day-n",children:B.length})]}),B.length===0&&D===se&&c.jsx("div",{className:"now-empty",children:"下からつぶやいてね🕐 時刻は自動でつくよ"}),c.jsx("div",{className:"now-tl",children:B.map(ze=>c.jsxs(Fm,{className:"now-post"+(v===ze.id?" pop":""),onLongPress:ve=>k({id:ze.id,x:ve.x,y:ve.y}),children:[c.jsx("span",{className:"now-time",children:ze.time}),c.jsx("span",{className:"now-dot","aria-hidden":"true"}),c.jsx("span",{className:"now-text",children:Wm(ze.text)})]},ze.id))})]},D)})]}),!C&&c.jsx("div",{className:"bar bar-fixed now-bar",ref:A,style:{bottom:J},children:c.jsxs("div",{className:"in-row",children:[c.jsx("textarea",{ref:M,className:"ta",rows:1,placeholder:"いまなにしてる？",enterKeyHint:"send",value:d,onChange:Ge,onKeyDown:St}),c.jsx("button",{className:"send","aria-label":"つぶやく",disabled:!d.trim(),onClick:bt,children:"↑"})]})}),w&&X&&c.jsx(Bm,{x:w.x,y:w.y,onClose:()=>k(null),onCopy:async()=>{const D=await jm(`${X.time} ${X.text}`);r(D?"コピーしました🩷":"コピーできませんでした"),k(null)},onEdit:()=>{g({id:X.id,text:X.text,time:Hm(X.time)}),k(null)},onDelete:()=>{const D=X.id;k(null),I(D)}}),C&&c.jsx("div",{className:"overlay",onClick:()=>g(null),children:c.jsxs("div",{className:"panel",onClick:D=>D.stopPropagation(),children:[c.jsx("h3",{children:"🕐 なうを直す"}),c.jsx("div",{className:"f-label",children:"時刻（あとから書いたときは直してね）"}),c.jsx("input",{className:"f-input",type:"time",style:{width:140},value:C.time,onChange:D=>g(B=>({...B,time:D.target.value}))}),c.jsx("div",{className:"f-label",children:"なにしてた"}),c.jsx("textarea",{autoFocus:!0,style:{minHeight:80},value:C.text,onChange:D=>g(B=>({...B,text:D.target.value}))}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:L,children:"保存"}),c.jsx("button",{className:"p-del",onClick:()=>I(C.id),children:"削除"}),c.jsx("button",{className:"p-close",onClick:()=>g(null),children:"もどる"})]})]})}),u&&c.jsx(Jd,{message:u.message,onConfirm:u.onConfirm,onCancel:()=>x(null)})]})}function Xm({items:e,keyOf:t,onReorder:n,renderItem:r,onLongPress:o,longPress:i=320,footer:l}){const[a,s]=_.useState(null),[h,d]=_.useState(null),p=_.useRef(null),f=_.useRef({});f.current.items=e,f.current.keyOf=t,f.current.onReorder=n,f.current.onLongPress=o;const y=a||e,w=v=>{var S;return(S=p.current)==null?void 0:S.querySelector(`[data-dk="${CSS.escape(String(v))}"]`)},k=()=>{const v=p.current;if(!v||f.current.dragKey==null)return;const S=w(f.current.dragKey);if(!S)return;const j=v.getBoundingClientRect(),N=j.left+S.offsetLeft,P=j.top+S.offsetTop,A=f.current.pointerX-f.current.grabX-N,M=f.current.pointerY-f.current.grabY-P;S.style.transform=`translate(${A}px, ${M}px) scale(1.08)`},C=v=>{const S=w(v);if(!S)return;const j=S.getBoundingClientRect();f.current.dragKey=v,f.current.grabX=f.current.pointerX-j.left,f.current.grabY=f.current.pointerY-j.top,f.current.pickupX=f.current.pointerX,f.current.pickupY=f.current.pointerY,f.current.moved=!1,f.current.order=f.current.items.slice(),S.style.zIndex="10",s(f.current.order),d(v);try{navigator.vibrate&&navigator.vibrate(12)}catch{}requestAnimationFrame(k)},g=()=>{const v=p.current;if(!v||f.current.dragKey==null)return;const S=v.getBoundingClientRect(),j=f.current.pointerX-S.left,N=f.current.pointerY-S.top,P=[...v.querySelectorAll("[data-dk]")];let A=0,M=1/0;for(let de=0;de<P.length;de++){const ge=P[de],bt=ge.offsetLeft+ge.offsetWidth/2,St=ge.offsetTop+ge.offsetHeight/2,Ge=(j-bt)**2+(N-St)**2;Ge<M&&(M=Ge,A=de)}const J=f.current.order,se=J.findIndex(de=>f.current.keyOf(de)===f.current.dragKey);if(se!==-1&&se!==A){const[de]=J.splice(se,1);J.splice(A,0,de),s(J.slice())}requestAnimationFrame(k)},u=()=>{if(clearTimeout(f.current.timer),f.current.dragKey!=null){const v=w(f.current.dragKey);if(v&&(v.style.transform="",v.style.zIndex=""),f.current.moved)f.current.onReorder(f.current.order.slice());else if(f.current.onLongPress){const S=f.current.items.find(j=>f.current.keyOf(j)===f.current.dragKey);f.current.onLongPress({item:S,x:f.current.pointerX,y:f.current.pointerY})}f.current.suppress=Date.now()+450}f.current.dragKey=null,d(null),s(null)};_.useEffect(()=>{const v=p.current;if(!v)return;const S=A=>{if(A.touches.length!==1)return;const M=A.target.closest("[data-dk]");if(!M||!v.contains(M))return;const J=A.touches[0];f.current.startX=J.clientX,f.current.startY=J.clientY,f.current.pointerX=J.clientX,f.current.pointerY=J.clientY,f.current.moved=!1;const se=M.getAttribute("data-dk");clearTimeout(f.current.timer),f.current.timer=setTimeout(()=>{f.current.moved||C(se)},i)},j=A=>{const M=A.touches[0];if(f.current.pointerX=M.clientX,f.current.pointerY=M.clientY,f.current.dragKey==null){(Math.abs(M.clientX-f.current.startX)>12||Math.abs(M.clientY-f.current.startY)>12)&&(f.current.moved=!0,clearTimeout(f.current.timer));return}(Math.abs(M.clientX-f.current.pickupX)>8||Math.abs(M.clientY-f.current.pickupY)>8)&&(f.current.moved=!0),A.preventDefault(),g()},N=()=>{clearTimeout(f.current.timer),f.current.dragKey!=null&&u()},P=A=>A.preventDefault();return v.addEventListener("touchstart",S,{passive:!0}),v.addEventListener("touchmove",j,{passive:!1}),v.addEventListener("touchend",N,{passive:!0}),v.addEventListener("touchcancel",N,{passive:!0}),v.addEventListener("contextmenu",P),()=>{v.removeEventListener("touchstart",S),v.removeEventListener("touchmove",j),v.removeEventListener("touchend",N),v.removeEventListener("touchcancel",N),v.removeEventListener("contextmenu",P)}},[i]);const x=v=>{f.current.suppress&&Date.now()<f.current.suppress&&(v.stopPropagation(),v.preventDefault(),f.current.suppress=0)};return c.jsxs("div",{ref:p,className:"ig-grid",onClickCapture:x,children:[y.map(v=>{const S=t(v);return c.jsx("div",{"data-dk":S,className:"ig-cell"+(h===S?" dragging":""),children:r(v)},S)}),l]})}function Gm({onBack:e,children:t}){const[n,r]=_.useState(0),[o,i]=_.useState(!1),l=_.useRef(null),a=_.useRef(!1),s=f=>{if(f.touches.length!==1||document.querySelector(".overlay"))return;const y=f.touches[0];y.clientX>28||(l.current={x:y.clientX,y:y.clientY},a.current=!1)},h=f=>{if(!l.current)return;const y=f.touches[0],w=y.clientX-l.current.x,k=y.clientY-l.current.y;if(!a.current){if(Math.abs(w)<8&&Math.abs(k)<8)return;if(Math.abs(k)>Math.abs(w)){l.current=null;return}a.current=!0,i(!1)}r(Math.max(0,w))},d=()=>{if(!l.current)return;const f=Math.min(110,window.innerWidth*.3);i(!0),a.current&&n>f?(r(window.innerWidth),setTimeout(e,190)):r(0),l.current=null,a.current=!1},p=n>0?{transform:`translateX(${n}px)`,transition:o?"transform .19s ease-out":"none",boxShadow:"-10px 0 26px rgba(120,50,90,.18)"}:void 0;return c.jsx("div",{className:"swipe-wrap",style:p,onTouchStart:s,onTouchMove:h,onTouchEnd:d,children:t})}const Jm=_.lazy(()=>tn(()=>import("./DiaryRoom-C5f34Sfp.js"),__vite__mapDeps([0,1]),import.meta.url)),Zm=_.lazy(()=>tn(()=>import("./TalkRoom-zHqMn8Sc.js"),[],import.meta.url)),qm=_.lazy(()=>tn(()=>import("./TodoRoom-BF2wI3zf.js"),__vite__mapDeps([2,1]),import.meta.url)),eg=_.lazy(()=>tn(()=>import("./DarelogRoom-CCOrIcZh.js"),__vite__mapDeps([3,4]),import.meta.url)),tg=_.lazy(()=>tn(()=>import("./ExpenseRoom-BkJ0dMAO.js"),[],import.meta.url)),ng=_.lazy(()=>tn(()=>import("./ChallengeRoom-BqCjsMEP.js"),[],import.meta.url)),rg=_.lazy(()=>tn(()=>import("./FutureRoom-Dw5wt9v3.js"),[],import.meta.url)),og=["💗","🩷","💛","🩵","💜","🤍","🖤","🌸","🌷","🎀","🌟","✨","⭐️","👑","🫶","🐰","🐻","🐱","🦄","🌙","🌊","🌿","🍓","🍒","🧸","📖","💬","✅","🌗","💰"];function ig(){const[e,t]=_.useState(null),[n,r]=_.useState({screen:"home"}),[o,i]=_.useState(!1),[l,a]=_.useState(""),[s,h]=_.useState(null),[d,p]=_.useState(null),[f,y]=_.useState(!1),[w,k]=_.useState(null),[C,g]=_.useState(""),[u,x]=_.useState(null),[v,S]=_.useState(""),[j,N]=_.useState(0),[P,A]=_.useState(null),[M,J]=_.useState(!1),se=_.useRef(null),de=_.useRef(0),[ge,bt]=_.useState(pm),[St,Ge]=_.useState(!1),[L,I]=_.useState(""),[F,Q]=_.useState(!1),[q,gt]=_.useState(""),[Ue,it]=_.useState(""),[X,D]=_.useState(null),[B,ze]=_.useState(!1),[ve,Gn]=_.useState(null),[Zd,mi]=_.useState(!1),[Ja,Za]=_.useState(""),qa=_.useRef(null),ne=(m,b=3e3)=>{Za(m),clearTimeout(qa.current),qa.current=setTimeout(()=>Za(""),b)},qd=async m=>{try{if(await W(Gi))return m;if(m.some(T=>T.type==="future"))return await K(Gi,!0),m;const b=[...m,{id:mm,type:"future",name:"未来日記",emoji:"🔮",theme:ta[3]||void 0,createdAt:Date.now(),lastAt:0,preview:""}];return await K(dt,b),await K(Gi,!0),b}catch{return m}},ef=async m=>{try{if(await W(Xi))return m;if(m.some(T=>T.type==="now"))return await K(Xi,!0),m;const b=[{id:hm,type:"now",name:"なう",emoji:"🕐",createdAt:Date.now(),lastAt:0,preview:""},...m];return await K(dt,b),await K(Xi,!0),b}catch{return m}};_.useEffect(()=>{(async()=>{try{const m=await ef(await qd(await xm())),b=m.find(H=>H.type==="now"&&!H.hidden)||m.find(H=>H.id===fe);b&&r({screen:"room",roomId:b.id}),t(m);const[T,E,U]=await Promise.all([W(So),W(Mr),W(Ji)]);T&&T.dateKey===ut()&&g(T.text),Array.isArray(E)&&E.length&&bt(E),D(U||{})}catch{ne("データの読み込みに失敗しました"),t([])}})()},[]),_.useEffect(()=>{if(n.screen!=="home")return;let m=!0;return(async()=>{try{let b=await W($e(fe));b=typeof b=="string"?JSON.parse(b):b||{};const T=b[ut()];if(!m)return;T&&typeof T.text=="string"&&T.text.trim()?A({written:!0,preview:T.text.split(`
`)[0].slice(0,34)}):A({written:!1})}catch{m&&A({written:!1})}})(),()=>{m=!1}},[n.screen,j]),_.useEffect(()=>{n.screen==="home"&&se.current&&(se.current.scrollTop=de.current)},[n.screen]);const es=m=>{t(b=>{let T=b;return b.find(E=>E.id===fe)||(T=[...b,{id:fe,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),T=T.map(E=>E.id===fe?{...E,...m!=null?{preview:m}:{},lastAt:Date.now()}:E),K(dt,T),T}),N(b=>b+1)},tf=async({text:m,time:b,dateKey:T})=>{try{const E=Jo(fe),U=await W(E)||{},H=(U[T]||[]).slice();H.some(R=>R.text===m&&R.time===b)||H.push({text:m,time:b}),await K(E,{...U,[T]:H}),es(`🩷 できたこと ☑ ${m}`.slice(0,40))}catch{ne("できたことの記録に失敗しました")}},nf=async({text:m,time:b,dateKey:T})=>{try{const E=Jo(fe),U=await W(E)||{},H=(U[T]||[]).filter($=>!($.text===m&&$.time===b)),R={...U};H.length?R[T]=H:delete R[T],await K(E,R),es(null)}catch{}},gi=m=>{t(m),K(dt,m).catch(()=>ne("保存に失敗しました"))},Ot=(m,b)=>{t(T=>{const E=T.map(U=>U.id===m?{...U,...b}:U);return K(dt,E).catch(()=>ne("保存に失敗しました")),E})},rf=async(m,b,T)=>{try{const E=(e||[]).find(Je=>Je.id===b);if(!E)return{ok:!1};const U=$e(b),H=await W(U)||{},R=Array.isArray(H.todos)?H.todos:[],$=(T||"").trim(),re=$?(E.places||[]).find(Je=>(Je.name||"").trim()===$):null,Oe={...m,placeId:re?re.id:null},Re=[...R,Oe];await K(U,{...H,todos:Re});const nn=Re.filter(Je=>!Je.done&&!Je.deferred).length;return Ot(b,{preview:`${Oe.done?"☑":"☐"} ${(Oe.text||"").split(`
`)[0]}`.slice(0,40),todoOpen:nn,lastAt:Date.now()}),{ok:!0,placeDropped:!!$&&!re,placeKept:!!re}}catch{return{ok:!1}}},of=async m=>{const b=m.trim();if(!b)return;const T=ut();try{await K(So,{dateKey:T,text:b}),g(b);const E=$e(fe);let U=await W(E);U=U&&typeof U=="object"?U:{};const H=U[T],R=Tm(H?H.text:"",b);U={...U,[T]:{text:R,time:H?H.time:Xd()}},await K(E,U);const $=Object.keys(U).sort(),re=$[$.length-1],Oe=U[re].text.split(`
`)[0].slice(0,40);t(Re=>{let nn=Re;return Re.find(Je=>Je.id===fe)||(nn=[...Re,{id:fe,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),nn=nn.map(Je=>Je.id===fe?{...Je,preview:Oe,lastAt:Date.now()}:Je),K(dt,nn),nn}),N(Re=>Re+1),ne("今日のコマをピン留めしたよ🩷")}catch{ne("宣言の保存に失敗しました")}},ts=m=>{bt(m),K(Mr,m).catch(()=>ne("マークの保存に失敗しました"))},ns=()=>{const m=L.trim();if(m){if(ge.includes(m)){I("");return}ts([...ge,m]),I("")}},lf=m=>ts(ge.filter(b=>b!==m));_.useEffect(()=>{!o||!e||(async()=>{const m={};for(const b of e)m[b.id]=await W($e(b.id));h(m)})()},[o,e]);const Ur=e||[],xi=_.useMemo(()=>{if(!l||!s||!e)return null;const m=l.toLowerCase(),b=[];for(const T of Ur){const E=s[T.id],U=[];if(T.type==="diary"){const H=E&&typeof E=="object"?E:{};for(const R of Object.keys(H).sort())(H[R].text+_e(R)).toLowerCase().includes(m)&&U.push({snippet:H[R].text.split(`
`)[0],date:_e(R)})}else if(T.type==="todo"){const H=E&&Array.isArray(E.todos)?E.todos:[];for(const R of H)(R.text+_e(R.dateKey)).toLowerCase().includes(m)&&U.push({snippet:`${R.done?"☑":"☐"} ${R.text.split(`
`)[0]}`,date:_e(R.dateKey)})}else if(T.type==="darelog"){const H=E&&Array.isArray(E.records)?E.records:[],R=$=>{var re,Oe;return((Oe=(re=T.members)==null?void 0:re.find(Re=>Re.id===$))==null?void 0:Oe.name)||""};for(const $ of T.members||[])($.memberMemo||"").toLowerCase().includes(m)&&U.push({snippet:`${$.name}: ${$.memberMemo}`,date:"メンバーメモ"});for(const $ of H){const re=R($.memberId);(re+($.memo||"")+_e($.dateKey)).toLowerCase().includes(m)&&U.push({snippet:`${re}${$.memo?`: ${$.memo}`:""}`,date:_e($.dateKey)})}}else if(T.type==="expense"){const H=E&&Array.isArray(E.expenses)?E.expenses:[],R=$=>{var re,Oe;return((Oe=(re=T.categories)==null?void 0:re.find(Re=>Re.id===$))==null?void 0:Oe.name)||""};for(const $ of H)(R($.categoryId)+($.memo||"")+String($.amount)+_e($.dateKey)).toLowerCase().includes(m)&&U.push({snippet:`${R($.categoryId)} ¥${$.amount}${$.memo?" "+$.memo:""}`,date:_e($.dateKey)})}else{const H=E&&Array.isArray(E.messages)?E.messages:[],R=$=>{var re,Oe;return((Oe=(re=T.members)==null?void 0:re.find(Re=>Re.id===$))==null?void 0:Oe.name)||""};for(const $ of H)(($.text+_e($.dateKey)).toLowerCase().includes(m)||R($.memberId).toLowerCase().includes(m))&&U.push({snippet:`${R($.memberId)||"？"}: ${$.text.split(`
`)[0]}`,date:_e($.dateKey)})}U.length===0&&T.name.toLowerCase().includes(m)&&U.push({snippet:T.preview||"",date:""}),U.length&&b.push({room:T,hits:U})}return b},[l,s,Ur,e]),af=m=>l?m.split(new RegExp(`(${Cm(l)})`,"gi")).map((T,E)=>T.toLowerCase()===l.toLowerCase()?c.jsx("mark",{className:"hl",children:T},E):T):m,sf=()=>{const m=d.name.trim();if(!m){ne("ルーム名を入れてね");return}const b={diary:"💗",todo:"✅",darelog:"🌗",expense:"💰",challenge:"🏁",talk:"🩷"}[d.type]||"🩷",T=d.type==="darelog"?[{id:Ze(),name:"ブルー",color:"#d4f0ff",icon:{type:"emoji",value:"🌊"},side:"left"},{id:Ze(),name:"グリーン",color:"#d9ffe3",icon:{type:"emoji",value:"🌿"},side:"left"},{id:Ze(),name:"ピンク",color:"#ffd9ec",icon:{type:"emoji",value:"🌸"},side:"right"}]:[],E=d.type==="expense"?[{id:Ze(),name:"AI費用",emoji:"🤖",color:"#2196F3"},{id:Ze(),name:"ピンクグッズ",emoji:"🎀",color:"#E91E63"},{id:Ze(),name:"ネイル",emoji:"💅",color:"#9C27B0"},{id:Ze(),name:"旅費交通費",emoji:"🚃",color:"#00A5B5",transit:!0}]:void 0,U={id:Ze(),type:d.type,name:m,emoji:d.emoji.trim()||b,theme:d.theme||ur,members:T,createdAt:Date.now(),lastAt:0,preview:"",...d.type==="todo"?{shopping:!!d.shopping}:{},...E?{categories:E,subscriptions:[],subsPosted:{},transitSeeded:!0,stations:[],fares:[],defaultFromId:null,roundTripDefault:!1,incomeSeeded:!0,incomeCategories:[{id:Ze(),name:"売上",emoji:"💰",color:"#2E9E5B"},{id:Ze(),name:"返金",emoji:"↩️",color:"#3BA7A0"},{id:Ze(),name:"その他",emoji:"✨",color:"#7FB800"}]}:{}};gi([...e,U]),p(null),r({screen:"room",roomId:U.id})},uf=()=>{const m=d.name.trim();if(!m){ne("ルーム名を入れてね");return}Ot(d.roomId,{name:m,emoji:d.emoji.trim()||"💗",theme:d.theme||ur,hidden:!!d.hidden,...d.type==="todo"?{shopping:!!d.shopping}:{}}),p(null)},cf=m=>{p({mode:"edit",roomId:m.id,name:m.name,emoji:m.emoji,type:m.type,shopping:!!m.shopping,theme:m.theme||ur,hidden:!!m.hidden}),y(!1)},df=async m=>{try{const b=await W($e(m));b&&await K(fm(m),b),gi(e.filter(T=>T.id!==m)),p(null),k(null),ne("ルームを削除しました")}catch{ne("削除に失敗しました")}},ff=()=>{const m=e.find(b=>b.id===d.roomId);k({message:`ルーム「${(m==null?void 0:m.name)||""}」を削除しますか？
中の記録もすべて消えます。`,onConfirm:()=>df(d.roomId)})},pf=async()=>{it(""),mi(!1);try{const m=await ku();gt(JSON.stringify(m,null,2))}catch{gt("")}Q(!0)},yi=async()=>{const m={...X||{},lastDateKey:ut(),lastAt:Date.now()};D(m);try{await K(Ji,m)}catch{}},rs=m=>{const b=new Blob([m],{type:"application/json;charset=utf-8"}),T=URL.createObjectURL(b),E=document.createElement("a");E.href=T,E.download=qi,document.body.appendChild(E),E.click(),E.remove(),setTimeout(()=>URL.revokeObjectURL(T),3e3)},vi=async()=>{if(!B){ze(!0);try{let m;try{m=JSON.stringify(await ku(),null,2)}catch{ne("バックアップの作成に失敗しました 🥺");return}try{const b=new File([m],qi,{type:"application/json"});if(navigator.canShare&&navigator.canShare({files:[b]})){await navigator.share({files:[b]}),await yi(),ne("バックアップを保存したよ💗");return}}catch(b){if(b&&(b.name==="AbortError"||b.name==="NotAllowedError"))return}try{rs(m),await yi(),ne("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{ne("保存できない環境みたい。コピーを使ってね")}}finally{ze(!1)}}},hf=()=>{try{rs(q),yi(),ne("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{ne("保存できない環境みたい。コピーを使ってね")}},Kr=ut(),wn=(()=>{if(!(X!=null&&X.lastDateKey))return null;const m=ke(Kr)-ke(X.lastDateKey);return Math.max(0,Math.round(m/864e5))})(),wi=wn===null||wn>=7,mf=!!X&&X.lastDateKey!==Kr&&X.dismissedDateKey!==Kr,gf=async()=>{const m={...X||{},dismissedDateKey:Kr};D(m);try{await K(Ji,m)}catch{}},xf=async()=>{try{await navigator.clipboard.writeText(q),mi(!0),setTimeout(()=>mi(!1),2e3)}catch{ne("コピーできませんでした。全選択して手動でコピーしてね")}},yf=m=>{var E;const b=(E=m.target.files)==null?void 0:E[0];if(!b)return;const T=new FileReader;T.onload=()=>it(String(T.result||"")),T.onerror=()=>ne("ファイルを読めませんでした"),T.readAsText(b),m.target.value=""},vf=()=>{let m;try{m=JSON.parse(Ue)}catch{ne("JSONとして読めませんでした。ファイルが壊れているかも 🥺",4e3);return}const b=Pm(m);if(b){ne(b,4500);return}Gn({obj:m,counts:Om(m),exportedAt:m.exportedAt||"",version:m.version})},wf=async()=>{const m=ve==null?void 0:ve.obj;if(m)try{const b=await Mm(m);t(b.rooms),m.declaration&&m.declaration.dateKey===ut()&&!C&&(await K(So,m.declaration),g(m.declaration.text)),N(T=>T+1),Gn(null),Q(!1),it(""),ne(`復元完了💗 ${b.addedRooms}ルーム / ${b.addedItems}件を追加`)}catch{Gn(null),ne("復元中にエラーが出ました。ファイルが壊れているかも 🥺",4e3)}};if(!e)return c.jsx("div",{className:"app",children:c.jsx("style",{children:Su})});const kf=c.jsxs("div",{className:"pin",onClick:()=>{S(C),x(C?"view":"edit")},role:"button",children:[c.jsx("span",{className:"pin-ic",children:C?"📌":"🩷"}),C?c.jsx("span",{className:"pin-txt",children:C}):c.jsx("span",{className:"pin-ph",children:"今日のコマをえらぶ🩷"})]});let Wr;if(n.screen==="room"){const m=e.find(b=>b.id===n.roomId);if(!m)Wr=null,setTimeout(()=>r({screen:"home"}),0);else{const b={room:m,onBack:()=>r({screen:"home"}),onMeta:E=>Ot(m.id,E),initialQuery:n.q,showToast:ne,pinned:kf},T=m.type==="diary"?c.jsx(Jm,{...b,syncSignal:j,marks:ge,onEditMarks:()=>Ge(!0),nowRoomIds:e.filter(E=>E.type==="now").map(E=>E.id)},m.id):m.type==="now"?c.jsx(Qm,{...b,onOpenDiary:e.some(E=>E.id===fe)?()=>r({screen:"room",roomId:fe}):void 0},m.id):m.type==="todo"?c.jsx(qm,{...b,onTodoComplete:tf,onTodoUncomplete:nf,onRoomChange:E=>Ot(m.id,E),todoRooms:e.filter(E=>E.type==="todo"&&E.id!==m.id),onMoveTodo:rf},m.id):m.type==="darelog"?c.jsx(eg,{...b,onRoomChange:E=>Ot(m.id,E)},m.id):m.type==="expense"?c.jsx(tg,{...b,onRoomChange:E=>Ot(m.id,E)},m.id):m.type==="challenge"?c.jsx(ng,{...b},m.id):m.type==="future"?c.jsx(rg,{...b},m.id):c.jsx(Zm,{...b,onRoomChange:E=>Ot(m.id,E)},m.id);Wr=c.jsx(Gm,{onBack:()=>r({screen:"home"}),children:c.jsx(_.Suspense,{fallback:c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"hd hd-loading"}),c.jsx("div",{className:"chat"})]}),children:T})},m.id)}}else Wr=c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"hd hd-home",children:[c.jsx("div",{className:"app-brand",children:c.jsx("div",{className:"app-title",children:"💖Nachumin Lifelog💖"})}),c.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"バックアップ",onClick:pf,children:"💾"}),c.jsx("button",{className:"icon-btn","aria-label":"新しいルーム",onClick:()=>p({mode:"new",name:"",emoji:"",type:"talk"}),children:"➕"}),c.jsx("button",{className:"icon-btn","aria-label":"ぜんぶ検索",onClick:()=>{i(!o),a("")},children:o?"✕":"🔍"})]}),mf&&c.jsxs("div",{className:"bk-banner"+(wi?" stale":""),children:[c.jsxs("button",{className:"bk-main",onClick:vi,disabled:B,children:[c.jsx("span",{className:"bk-ttl",children:"💾 今日のバックアップ🩷"}),c.jsx("span",{className:"bk-sub",children:wn===null?"まだ一度も保存していません":wi?`最後の保存から ${wn}日 たっています`:"タップで1ファイルに書き出し"})]}),c.jsx("button",{className:"bk-x","aria-label":"閉じる",onClick:gf,children:"✕"})]}),o&&c.jsx("div",{className:"search-row",children:c.jsx("input",{autoFocus:!0,placeholder:"ぜんぶのルームから検索（ことば・話者・日付）",value:l,onChange:m=>a(m.target.value)})}),xi?c.jsx("div",{className:"rooms",children:xi.length===0?c.jsx("div",{className:"empty",children:"みつかりませんでした 🥺"}):xi.map(({room:m,hits:b})=>c.jsxs("div",{className:"room-row",onClick:()=>r({screen:"room",roomId:m.id,q:l}),children:[c.jsx("div",{className:"r-ic",children:m.emoji}),c.jsxs("div",{className:"r-main",children:[c.jsx("div",{className:"r-name",children:m.name}),c.jsx("div",{className:"r-prev",children:af(b[0].snippet)})]}),c.jsxs("div",{className:"r-side",children:[c.jsxs("span",{className:"r-badge",children:[b.length,"件"]}),b[0].date&&c.jsx("span",{className:"r-date",children:b[0].date})]})]},m.id))}):c.jsx("div",{className:"home-scroll",ref:se,onScroll:m=>{de.current=m.target.scrollTop},children:(()=>{const m=e.find(R=>R.id===fe),b=Ur.filter(R=>R.id!==fe&&!R.hidden),T=Ur.filter(R=>R.id!==fe&&R.hidden),E=ke(ut()),U=P?P.written?P.preview:`${E.getMonth()+1}/${E.getDate()}・きょうの分はまだ`:"…",H=R=>{const $=[...R];gi(e.map(re=>re.id===fe||re.hidden?re:$.shift()))};return c.jsxs(c.Fragment,{children:[m&&c.jsxs("button",{className:"diary-card",onClick:()=>r({screen:"room",roomId:m.id}),children:[c.jsx("span",{className:"dc-ic",children:m.emoji}),c.jsxs("span",{className:"dc-main",children:[c.jsx("span",{className:"dc-name",children:"DIARY"}),c.jsx("span",{className:"dc-sub",children:U})]}),c.jsx("span",{className:"dc-arw",children:"›"})]}),c.jsx(Xm,{items:b,keyOf:R=>R.id,onReorder:H,onLongPress:({item:R})=>{R&&cf(R)},footer:c.jsx("div",{className:"ig-cell ig-add",children:c.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>p({mode:"new",name:"",emoji:"",type:"talk"}),onKeyDown:R=>R.key==="Enter"&&p({mode:"new",name:"",emoji:"",type:"talk"}),children:[c.jsx("span",{className:"ig-btn",children:"＋"}),c.jsx("span",{className:"ig-name",children:"つくる"})]})}),renderItem:R=>{const $=R.type==="todo"&&R.todoOpen>0?R.todoOpen:null;return c.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>r({screen:"room",roomId:R.id}),onKeyDown:re=>re.key==="Enter"&&r({screen:"room",roomId:R.id}),children:[c.jsxs("span",{className:"ig-btn",style:bu(R.theme),children:[R.emoji,$!=null&&c.jsx("span",{className:"ig-badge",children:$>99?"99+":$})]}),c.jsx("span",{className:"ig-name",children:R.name})]})}}),T.length>0&&c.jsx("button",{className:"hidden-entry",onClick:()=>J(!0),children:"🙈 非表示のルーム"}),M&&c.jsx("div",{className:"overlay",onClick:()=>J(!1),children:c.jsxs("div",{className:"panel",onClick:R=>R.stopPropagation(),children:[c.jsx("h3",{children:"🙈 非表示のルーム"}),c.jsx("p",{className:"panel-note",children:"一覧に出していないルームです。中の記録は消えていません。「戻す」でまた表示できます。"}),c.jsx("div",{className:"move-list",children:T.map(R=>c.jsxs("div",{className:"move-item as-row",children:[c.jsx("span",{className:"move-ic",children:R.emoji}),c.jsx("span",{className:"move-name",children:R.name}),c.jsx("button",{className:"unhide-btn",onClick:()=>Ot(R.id,{hidden:!1}),children:"戻す"})]},R.id))}),c.jsx("div",{className:"panel-btns",children:c.jsx("button",{className:"p-close",onClick:()=>J(!1),children:"閉じる"})})]})})]})})()})]});return c.jsxs("div",{className:"app",children:[c.jsx("style",{children:Su}),Wr,d&&c.jsx("div",{className:"overlay",onClick:()=>{p(null),y(!1)},children:c.jsxs("div",{className:"panel",onClick:m=>m.stopPropagation(),children:[c.jsx("h3",{children:d.mode==="new"?"➕ 新しいルーム":"⚙️ ルーム設定"}),c.jsx("div",{className:"f-label",children:"ルーム名"}),c.jsx("input",{className:"f-input",autoFocus:d.mode==="new",placeholder:"ハートるんず",value:d.name,onChange:m=>p(b=>({...b,name:m.target.value}))}),c.jsx("div",{className:"f-label",children:"アイコン（タップで選ぶ）"}),c.jsx("div",{className:"emoji-picks",children:og.map(m=>c.jsx("button",{className:"emoji-pick"+(d.emoji===m?" on":""),onClick:()=>p(b=>({...b,emoji:m})),children:m},m))}),c.jsx("input",{className:"f-input",style:{width:130,textAlign:"center",marginTop:4},maxLength:8,placeholder:"または自由入力",value:d.emoji,onChange:m=>p(b=>({...b,emoji:m.target.value}))}),c.jsx("div",{className:"f-label",children:"テーマカラー"}),c.jsx("div",{className:"theme-swatches",children:ta.map(m=>{const b=(d.theme||ur)===m;return c.jsx("button",{className:"theme-sw"+(b?" on":""),style:bu(m),"aria-label":m,onClick:()=>p(T=>({...T,theme:m}))},m)})}),c.jsxs("div",{className:"f-label",children:["タイプ",d.mode==="edit"?"（変更できません）":""]}),c.jsxs("div",{className:"type-row",children:[c.jsxs("button",{className:"type-chip"+(d.type==="diary"?" on":""),disabled:d.mode==="edit",onClick:()=>p(m=>({...m,type:"diary"})),children:["📖 日記",c.jsx("small",{children:"1日=1吹き出し"})]}),c.jsxs("button",{className:"type-chip"+(d.type==="talk"?" on":""),disabled:d.mode==="edit",onClick:()=>p(m=>({...m,type:"talk"})),children:["💬 トーク",c.jsx("small",{children:"話者ごと"})]}),c.jsxs("button",{className:"type-chip"+(d.type==="todo"?" on":""),disabled:d.mode==="edit",onClick:()=>p(m=>({...m,type:"todo"})),children:["✅ TODO",c.jsx("small",{children:"やること"})]}),c.jsxs("button",{className:"type-chip"+(d.type==="darelog"?" on":""),disabled:d.mode==="edit",onClick:()=>p(m=>({...m,type:"darelog"})),children:["🌗 だれログ",c.jsx("small",{children:"朝昼夜の記録"})]}),c.jsxs("button",{className:"type-chip"+(d.type==="expense"?" on":""),disabled:d.mode==="edit",onClick:()=>p(m=>({...m,type:"expense"})),children:["💰 経費",c.jsx("small",{children:"支出を記録"})]}),c.jsxs("button",{className:"type-chip"+(d.type==="challenge"?" on":""),disabled:d.mode==="edit",onClick:()=>p(m=>({...m,type:"challenge"})),children:["🏁 チャレンジ",c.jsx("small",{children:"100個の目標"})]}),c.jsxs("button",{className:"type-chip"+(d.type==="future"?" on":""),disabled:d.mode==="edit",onClick:()=>p(m=>({...m,type:"future"})),children:["🔮 未来日記",c.jsx("small",{children:"1日1篇とどく"})]}),c.jsxs("button",{className:"type-chip"+(d.type==="now"?" on":""),disabled:d.mode==="edit",onClick:()=>p(m=>({...m,type:"now"})),children:["🕐 なう",c.jsx("small",{children:"いまを一言"})]})]}),d.mode==="edit"&&d.roomId!==fe&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"一覧での表示"}),c.jsxs("button",{className:"shop-toggle"+(d.hidden?" on":""),onClick:()=>p(m=>({...m,hidden:!m.hidden})),children:[c.jsx("span",{className:"shop-box",children:d.hidden?"✓":""}),"🙈 一覧に表示しない（記録は消えません）"]})]}),d.type==="todo"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"用途"}),c.jsxs("button",{className:"shop-toggle"+(d.shopping?" on":""),onClick:()=>p(m=>({...m,shopping:!m.shopping})),children:[c.jsx("span",{className:"shop-box",children:d.shopping?"✓":""}),"🛒 買い物リストとして使う（よく買うものクイック追加）"]})]}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:d.mode==="new"?sf:uf,children:d.mode==="new"?"つくる":"保存"}),d.mode==="edit"&&c.jsx("button",{className:"p-del",onClick:ff,children:"削除"}),c.jsx("button",{className:"p-close",onClick:()=>{p(null),y(!1)},children:"閉じる"})]})]})}),F&&c.jsx("div",{className:"overlay",onClick:()=>Q(!1),children:c.jsxs("div",{className:"panel",onClick:m=>m.stopPropagation(),children:[c.jsx("h3",{children:"💾 まるごとバックアップ"}),c.jsx("p",{className:"panel-note",children:"全ルーム・全データ（日記 / TODO / だれログ / 経費 / 習慣 / 各種設定）を まるごと1ファイルに保存します。端末が変わっても元どおり復元できます。"}),c.jsxs("div",{className:"bk-last"+(wi?" stale":""),children:[c.jsx("span",{className:"bk-last-l",children:"最後にバックアップした日"}),c.jsx("span",{className:"bk-last-v",children:X!=null&&X.lastDateKey?`${_e(X.lastDateKey)}${wn===0?"（今日）":`（${wn}日前）`}`:"まだありません"})]}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:vi,disabled:B,children:"💾 1タップで書き出し"}),c.jsx("button",{className:"p-dl",onClick:hf,children:"ダウンロード"}),c.jsx("button",{className:"p-dl",onClick:xf,children:Zd?"コピーしたよ💗":"コピー"})]}),c.jsxs("p",{className:"panel-note",children:["ファイル名は毎回 ",c.jsx("b",{children:qi})," で固定です。ただし 「ファイルに保存」は同じ名前があると ",c.jsx("b",{children:"iOS が勝手に番号を付けて"})," 別ファイルにします。 毎回きっちり上書きしたいときは、共有シートで 「ファイルに保存」ではなく ",c.jsx("b",{children:"ショートカット"}),"（上書き保存する用に作ったもの）を選んでね。"]}),c.jsx("div",{className:"f-label",style:{marginTop:6},children:"復元する（バックアップから読み込み）"}),c.jsx("p",{className:"panel-note",children:"既存のデータは消さず、足りない分だけ追加します（安全マージ）"}),c.jsxs("label",{className:"upload-btn",style:{alignSelf:"flex-start"},children:["📂 バックアップファイルを選ぶ",c.jsx("input",{type:"file",accept:".json,application/json,text/plain",onChange:yf})]}),c.jsx("textarea",{placeholder:"または、コピーしたバックアップをここに貼り付け",value:Ue,onChange:m=>it(m.target.value),style:{minHeight:120}}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",disabled:!Ue.trim(),onClick:vf,children:"復元する"}),c.jsx("button",{className:"p-close",onClick:()=>{Q(!1),it("")},children:"閉じる"})]})]})}),ve&&c.jsx("div",{className:"overlay bk-ask-over",onClick:()=>Gn(null),children:c.jsxs("div",{className:"panel",onClick:m=>m.stopPropagation(),children:[c.jsx("h3",{children:"⚠️ 復元まえの確認"}),c.jsxs("div",{className:"bk-ask-box",children:[c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"ルーム"}),c.jsx("b",{children:ve.counts.rooms})]}),c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"記録の件数"}),c.jsx("b",{children:ve.counts.items})]}),ve.exportedAt&&c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"書き出し日時"}),c.jsx("b",{children:new Date(ve.exportedAt).toLocaleString("ja-JP")})]})]}),c.jsxs("p",{className:"panel-note",children:["今のデータは消えません（足りない分を追加する安全マージ）。 それでも念のため、",c.jsx("b",{children:"先に今のデータをバックアップ"}),"しておくのがおすすめです💗"]}),c.jsx("button",{className:"bk-first",onClick:vi,disabled:B,children:"💾 先に今のデータをバックアップする"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:wf,children:"この内容で復元する"}),c.jsx("button",{className:"p-close",onClick:()=>Gn(null),children:"キャンセル"})]})]})}),u&&c.jsx("div",{className:"overlay",onClick:()=>x(null),children:c.jsxs("div",{className:"panel",onClick:m=>m.stopPropagation(),children:[c.jsx("h3",{children:"🩷 今日のコマ"}),u==="view"?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"decl-full",children:C}),c.jsx("p",{className:"panel-note",children:"その日1日だけピン留め。日記にも記録されています🎬"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:()=>{S(C),x("edit")},children:"書きなおす"}),c.jsx("button",{className:"p-close",onClick:()=>x(null),children:"閉じる"})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("textarea",{autoFocus:!0,style:{minHeight:120},placeholder:"今日は愛全開の私でいる！",value:v,onChange:m=>S(m.target.value)}),c.jsx("p",{className:"panel-note",children:"その日1日だけ表示。決定すると今日の日記の先頭に🎬として残ります"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",disabled:!v.trim(),onClick:()=>{of(v),x(null)},children:"決定"}),c.jsx("button",{className:"p-close",onClick:()=>x(null),children:"閉じる"})]})]})]})}),St&&c.jsx("div",{className:"overlay",onClick:()=>Ge(!1),children:c.jsxs("div",{className:"panel",onClick:m=>m.stopPropagation(),children:[c.jsx("h3",{children:"⚙︎ 箇条書きマーク"}),c.jsx("p",{className:"panel-note",children:"日記の入力欄に出るマーク。タップで削除、下から追加できます。"}),c.jsxs("div",{className:"mark-manage",children:[ge.map(m=>c.jsxs("span",{className:"mark-item",children:[m,c.jsx("button",{onClick:()=>lf(m),"aria-label":"削除",children:"✕"})]},m)),ge.length===0&&c.jsx("p",{className:"panel-note",children:"マークがありません。追加してね"})]}),c.jsxs("div",{className:"in-row",style:{marginTop:4},children:[c.jsx("input",{className:"f-input",maxLength:4,placeholder:"記号や絵文字（例: ❤︎）",value:L,onChange:m=>I(m.target.value),onKeyDown:m=>m.key==="Enter"&&ns()}),c.jsx("button",{className:"p-copy",style:{flex:"0 0 auto",padding:"8px 16px",borderRadius:999},disabled:!L.trim(),onClick:ns,children:"追加"})]}),c.jsx("div",{className:"panel-btns",children:c.jsx("button",{className:"p-close",onClick:()=>Ge(!1),children:"閉じる"})})]})}),w&&c.jsx(Jd,{message:w.message,onConfirm:w.onConfirm,onCancel:()=>k(null)}),Ja&&c.jsx("div",{className:"toast",children:Ja})]})}let Eu=!1,Cu=!!(navigator.serviceWorker&&navigator.serviceWorker.controller);navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!Cu){Cu=!0;return}Eu||(Eu=!0,window.location.reload())});Gh({immediate:!0,onRegisteredSW(e,t){t&&(t.update(),setInterval(()=>t.update(),60*60*1e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&t.update()}))}});gm();Ad(document.getElementById("root")).render(c.jsx(_.StrictMode,{children:c.jsx(ig,{})}));export{gg as $,ke as A,ft as B,Qd as C,_m as D,vu as E,Bm as F,wm as G,Jd as H,Xd as I,dg as J,cg as K,fg as L,Ng as M,Wm as N,jm as O,Fm as P,Cm as Q,Im as R,wg as S,kg as T,Dg as U,_g as V,lg as W,mg as X,yg as Y,vg as Z,Nm as _,Cg as a,xg as a0,jg as a1,pg as a2,hg as a3,sg as a4,ug as a5,ag as a6,ur as a7,ta as a8,ql as a9,zg as aa,Sg as ab,Eg as b,ea as c,Em as d,Ga as e,$e as f,W as g,Jo as h,bg as i,c as j,_e as k,zo as l,Ze as m,Kd as n,Ud as o,Ye as p,Eo as q,_ as r,K as s,ut as t,Um as u,Vd as v,Zl as w,Wd as x,wu as y,Gd as z};
