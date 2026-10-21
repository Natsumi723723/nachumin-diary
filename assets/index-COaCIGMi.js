const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DiaryRoom-D4cvm5bg.js","./InlineEdit-CFQ57_7q.js","./TodoRoom-BN0s5OgK.js","./DarelogRoom-BPMC3FW1.js","./TalkRoom-DqBDn2fF.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var $c={exports:{}},li={},Ic={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vr=Symbol.for("react.element"),Df=Symbol.for("react.portal"),Lf=Symbol.for("react.fragment"),Tf=Symbol.for("react.strict_mode"),Pf=Symbol.for("react.profiler"),Rf=Symbol.for("react.provider"),Of=Symbol.for("react.context"),Mf=Symbol.for("react.forward_ref"),$f=Symbol.for("react.suspense"),If=Symbol.for("react.memo"),Af=Symbol.for("react.lazy"),us=Symbol.iterator;function Ff(e){return e===null||typeof e!="object"?null:(e=us&&e[us]||e["@@iterator"],typeof e=="function"?e:null)}var Ac={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fc=Object.assign,Bc={};function tr(e,t,n){this.props=e,this.context=t,this.refs=Bc,this.updater=n||Ac}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Uc(){}Uc.prototype=tr.prototype;function ua(e,t,n){this.props=e,this.context=t,this.refs=Bc,this.updater=n||Ac}var da=ua.prototype=new Uc;da.constructor=ua;Fc(da,tr.prototype);da.isPureReactComponent=!0;var ds=Array.isArray,Kc=Object.prototype.hasOwnProperty,fa={current:null},Wc={key:!0,ref:!0,__self:!0,__source:!0};function Vc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Kc.call(t,r)&&!Wc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),g=0;g<a;g++)s[g]=arguments[g+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Vr,type:e,key:i,ref:l,props:o,_owner:fa.current}}function Bf(e,t){return{$$typeof:Vr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vr}function Uf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fs=/\/+/g;function Ci(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Uf(""+e.key):t.toString(36)}function wo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Vr:case Df:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ci(l,0):r,ds(o)?(n="",e!=null&&(n=e.replace(fs,"$&/")+"/"),wo(o,t,n,"",function(g){return g})):o!=null&&(pa(o)&&(o=Bf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(fs,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ds(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Ci(i,a);l+=wo(i,t,n,s,o)}else if(s=Ff(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Ci(i,a++),l+=wo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function eo(e,t,n){if(e==null)return e;var r=[],o=0;return wo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Kf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},bo={transition:null},Wf={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:bo,ReactCurrentOwner:fa};function Hc(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:eo,forEach:function(e,t,n){eo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return eo(e,function(){t++}),t},toArray:function(e){return eo(e,function(t){return t})||[]},only:function(e){if(!pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=tr;H.Fragment=Lf;H.Profiler=Pf;H.PureComponent=ua;H.StrictMode=Tf;H.Suspense=$f;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wf;H.act=Hc;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=fa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Kc.call(t,s)&&!Wc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var g=0;g<s;g++)a[g]=arguments[g+2];r.children=a}return{$$typeof:Vr,type:e.type,key:o,ref:i,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:Of,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rf,_context:e},e.Consumer=e};H.createElement=Vc;H.createFactory=function(e){var t=Vc.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Mf,render:e}};H.isValidElement=pa;H.lazy=function(e){return{$$typeof:Af,_payload:{_status:-1,_result:e},_init:Kf}};H.memo=function(e,t){return{$$typeof:If,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=bo.transition;bo.transition={};try{e()}finally{bo.transition=t}};H.unstable_act=Hc;H.useCallback=function(e,t){return Le.current.useCallback(e,t)};H.useContext=function(e){return Le.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};H.useEffect=function(e,t){return Le.current.useEffect(e,t)};H.useId=function(){return Le.current.useId()};H.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Le.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};H.useRef=function(e){return Le.current.useRef(e)};H.useState=function(e){return Le.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Le.current.useTransition()};H.version="18.3.1";Ic.exports=H;var j=Ic.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf=j,Hf=Symbol.for("react.element"),Yf=Symbol.for("react.fragment"),Qf=Object.prototype.hasOwnProperty,Xf=Vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gf={key:!0,ref:!0,__self:!0,__source:!0};function Yc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Qf.call(t,r)&&!Gf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Hf,type:e,key:i,ref:l,props:o,_owner:Xf.current}}li.Fragment=Yf;li.jsx=Yc;li.jsxs=Yc;$c.exports=li;var c=$c.exports,Qc={exports:{}},Qe={},Xc={exports:{}},Gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,I){var F=T.length;T.push(I);e:for(;0<F;){var G=F-1>>>1,le=T[G];if(0<o(le,I))T[G]=I,T[F]=le,F=G;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var I=T[0],F=T.pop();if(F!==I){T[0]=F;e:for(var G=0,le=T.length,st=le>>>1;G<st;){var Je=2*(G+1)-1,jt=T[Je],me=Je+1,Ue=T[me];if(0>o(jt,F))me<le&&0>o(Ue,jt)?(T[G]=Ue,T[me]=F,G=me):(T[G]=jt,T[Je]=F,G=Je);else if(me<le&&0>o(Ue,F))T[G]=Ue,T[me]=F,G=me;else break e}}return I}function o(T,I){var F=T.sortIndex-I.sortIndex;return F!==0?F:T.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],g=[],u=1,h=null,f=3,y=!1,w=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(T){for(var I=n(g);I!==null;){if(I.callback===null)r(g);else if(I.startTime<=T)r(g),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(g)}}function v(T){if(b=!1,x(T),!w)if(n(s)!==null)w=!0,ke(S);else{var I=n(g);I!==null&&at(v,I.startTime-T)}}function S(T,I){w=!1,b&&(b=!1,m(L),L=-1),y=!0;var F=f;try{for(x(I),h=n(s);h!==null&&(!(h.expirationTime>I)||T&&!J());){var G=h.callback;if(typeof G=="function"){h.callback=null,f=h.priorityLevel;var le=G(h.expirationTime<=I);I=e.unstable_now(),typeof le=="function"?h.callback=le:h===n(s)&&r(s),x(I)}else r(s);h=n(s)}if(h!==null)var st=!0;else{var Je=n(g);Je!==null&&at(v,Je.startTime-I),st=!1}return st}finally{h=null,f=F,y=!1}}var N=!1,D=null,L=-1,K=5,M=-1;function J(){return!(e.unstable_now()-M<K)}function Ne(){if(D!==null){var T=e.unstable_now();M=T;var I=!0;try{I=D(!0,T)}finally{I?ce():(N=!1,D=null)}}else N=!1}var ce;if(typeof d=="function")ce=function(){d(Ne)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Ge=Pe.port2;Pe.port1.onmessage=Ne,ce=function(){Ge.postMessage(null)}}else ce=function(){_(Ne,0)};function ke(T){D=T,N||(N=!0,ce())}function at(T,I){L=_(function(){T(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,ke(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var F=f;f=I;try{return T()}finally{f=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,I){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var F=f;f=T;try{return I()}finally{f=F}},e.unstable_scheduleCallback=function(T,I,F){var G=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?G+F:G):F=G,T){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=F+le,T={id:u++,callback:I,priorityLevel:T,startTime:F,expirationTime:le,sortIndex:-1},F>G?(T.sortIndex=F,t(g,T),n(s)===null&&T===n(g)&&(b?(m(L),L=-1):b=!0,at(v,F-G))):(T.sortIndex=le,t(s,T),w||y||(w=!0,ke(S))),T},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(T){var I=f;return function(){var F=f;f=I;try{return T.apply(this,arguments)}finally{f=F}}}})(Gc);Xc.exports=Gc;var Jf=Xc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf=j,He=Jf;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jc=new Set,jr={};function zn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(jr[e]=t,e=0;e<t.length;e++)Jc.add(t[e])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cl=Object.prototype.hasOwnProperty,qf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ps={},hs={};function ep(e){return cl.call(hs,e)?!0:cl.call(ps,e)?!1:qf.test(e)?hs[e]=!0:(ps[e]=!0,!1)}function tp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function np(e,t,n,r){if(t===null||typeof t>"u"||tp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var ha=/[\-:]([a-z])/g;function ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ha,ga);be[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ha,ga);be[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ha,ga);be[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function ma(e,t,n,r){var o=be.hasOwnProperty(t)?be[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(np(t,n,o,r)&&(n=null),r||o===null?ep(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Mt=Zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),xa=Symbol.for("react.strict_mode"),ul=Symbol.for("react.profiler"),Zc=Symbol.for("react.provider"),qc=Symbol.for("react.context"),ya=Symbol.for("react.forward_ref"),dl=Symbol.for("react.suspense"),fl=Symbol.for("react.suspense_list"),va=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),eu=Symbol.for("react.offscreen"),gs=Symbol.iterator;function or(e){return e===null||typeof e!="object"?null:(e=gs&&e[gs]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,_i;function fr(e){if(_i===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_i=t&&t[1]||""}return`
`+_i+e}var Di=!1;function Li(e,t){if(!e||Di)return"";Di=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var o=g.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Di=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fr(e):""}function rp(e){switch(e.tag){case 5:return fr(e.type);case 16:return fr("Lazy");case 13:return fr("Suspense");case 19:return fr("SuspenseList");case 0:case 2:case 15:return e=Li(e.type,!1),e;case 11:return e=Li(e.type.render,!1),e;case 1:return e=Li(e.type,!0),e;default:return""}}function pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case Dn:return"Portal";case ul:return"Profiler";case xa:return"StrictMode";case dl:return"Suspense";case fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qc:return(e.displayName||"Context")+".Consumer";case Zc:return(e._context.displayName||"Context")+".Provider";case ya:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case va:return t=e.displayName||null,t!==null?t:pl(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return pl(e(t))}catch{}}return null}function op(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pl(t);case 8:return t===xa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ip(e){var t=tu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function no(e){e._valueTracker||(e._valueTracker=ip(e))}function nu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=tu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hl(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ms(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ru(e,t){t=t.checked,t!=null&&ma(e,"checked",t,!1)}function gl(e,t){ru(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&ml(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ml(e,t,n){(t!=="number"||Oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pr=Array.isArray;function Un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ys(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(pr(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function ou(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?iu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ro,lu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lp=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(e){lp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xr[t]=xr[e]})});function au(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xr.hasOwnProperty(e)&&xr[e]?(""+t).trim():t+"px"}function su(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=au(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var ap=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vl(e,t){if(t){if(ap[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bl=null;function wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kl=null,Kn=null,Wn=null;function ws(e){if(e=Qr(e)){if(typeof kl!="function")throw Error(z(280));var t=e.stateNode;t&&(t=di(t),kl(e.stateNode,e.type,t))}}function cu(e){Kn?Wn?Wn.push(e):Wn=[e]:Kn=e}function uu(){if(Kn){var e=Kn,t=Wn;if(Wn=Kn=null,ws(e),t)for(e=0;e<t.length;e++)ws(t[e])}}function du(e,t){return e(t)}function fu(){}var Ti=!1;function pu(e,t,n){if(Ti)return e(t,n);Ti=!0;try{return du(e,t,n)}finally{Ti=!1,(Kn!==null||Wn!==null)&&(fu(),uu())}}function Cr(e,t){var n=e.stateNode;if(n===null)return null;var r=di(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Sl=!1;if(Tt)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{Sl=!1}function sp(e,t,n,r,o,i,l,a,s){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(u){this.onError(u)}}var yr=!1,Mo=null,$o=!1,zl=null,cp={onError:function(e){yr=!0,Mo=e}};function up(e,t,n,r,o,i,l,a,s){yr=!1,Mo=null,sp.apply(cp,arguments)}function dp(e,t,n,r,o,i,l,a,s){if(up.apply(this,arguments),yr){if(yr){var g=Mo;yr=!1,Mo=null}else throw Error(z(198));$o||($o=!0,zl=g)}}function En(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bs(e){if(En(e)!==e)throw Error(z(188))}function fp(e){var t=e.alternate;if(!t){if(t=En(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return bs(o),e;if(i===r)return bs(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function gu(e){return e=fp(e),e!==null?mu(e):null}function mu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mu(e);if(t!==null)return t;e=e.sibling}return null}var xu=He.unstable_scheduleCallback,ks=He.unstable_cancelCallback,pp=He.unstable_shouldYield,hp=He.unstable_requestPaint,se=He.unstable_now,gp=He.unstable_getCurrentPriorityLevel,ba=He.unstable_ImmediatePriority,yu=He.unstable_UserBlockingPriority,Io=He.unstable_NormalPriority,mp=He.unstable_LowPriority,vu=He.unstable_IdlePriority,ai=null,zt=null;function xp(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(ai,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:wp,yp=Math.log,vp=Math.LN2;function wp(e){return e>>>=0,e===0?32:31-(yp(e)/vp|0)|0}var oo=64,io=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=hr(a):(i&=l,i!==0&&(r=hr(i)))}else l=n&~o,l!==0?r=hr(l):i!==0&&(r=hr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),o=1<<n,r|=e[n],t&=~o;return r}function bp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-gt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=bp(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wu(){var e=oo;return oo<<=1,!(oo&4194240)&&(oo=64),e}function Pi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function Sp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-gt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ka(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var X=0;function bu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ku,Sa,Su,zu,Eu,jl=!1,lo=[],Ht=null,Yt=null,Qt=null,_r=new Map,Dr=new Map,Ut=[],zp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ss(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(t.pointerId)}}function lr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Qr(t),t!==null&&Sa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ep(e,t,n,r,o){switch(t){case"focusin":return Ht=lr(Ht,e,t,n,r,o),!0;case"dragenter":return Yt=lr(Yt,e,t,n,r,o),!0;case"mouseover":return Qt=lr(Qt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return _r.set(i,lr(_r.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Dr.set(i,lr(Dr.get(i)||null,e,t,n,r,o)),!0}return!1}function ju(e){var t=pn(e.target);if(t!==null){var n=En(t);if(n!==null){if(t=n.tag,t===13){if(t=hu(n),t!==null){e.blockedOn=t,Eu(e.priority,function(){Su(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bl=r,n.target.dispatchEvent(r),bl=null}else return t=Qr(n),t!==null&&Sa(t),e.blockedOn=n,!1;t.shift()}return!0}function zs(e,t,n){ko(e)&&n.delete(t)}function jp(){jl=!1,Ht!==null&&ko(Ht)&&(Ht=null),Yt!==null&&ko(Yt)&&(Yt=null),Qt!==null&&ko(Qt)&&(Qt=null),_r.forEach(zs),Dr.forEach(zs)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,jl||(jl=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,jp)))}function Lr(e){function t(o){return ar(o,e)}if(0<lo.length){ar(lo[0],e);for(var n=1;n<lo.length;n++){var r=lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&ar(Ht,e),Yt!==null&&ar(Yt,e),Qt!==null&&ar(Qt,e),_r.forEach(t),Dr.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)ju(n),n.blockedOn===null&&Ut.shift()}var Vn=Mt.ReactCurrentBatchConfig,Fo=!0;function Np(e,t,n,r){var o=X,i=Vn.transition;Vn.transition=null;try{X=1,za(e,t,n,r)}finally{X=o,Vn.transition=i}}function Cp(e,t,n,r){var o=X,i=Vn.transition;Vn.transition=null;try{X=4,za(e,t,n,r)}finally{X=o,Vn.transition=i}}function za(e,t,n,r){if(Fo){var o=Nl(e,t,n,r);if(o===null)Ki(e,t,r,Bo,n),Ss(e,r);else if(Ep(o,e,t,n,r))r.stopPropagation();else if(Ss(e,r),t&4&&-1<zp.indexOf(e)){for(;o!==null;){var i=Qr(o);if(i!==null&&ku(i),i=Nl(e,t,n,r),i===null&&Ki(e,t,r,Bo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ki(e,t,r,null,n)}}var Bo=null;function Nl(e,t,n,r){if(Bo=null,e=wa(r),e=pn(e),e!==null)if(t=En(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bo=e,null}function Nu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gp()){case ba:return 1;case yu:return 4;case Io:case mp:return 16;case vu:return 536870912;default:return 16}default:return 16}}var Wt=null,Ea=null,So=null;function Cu(){if(So)return So;var e,t=Ea,n=t.length,r,o="value"in Wt?Wt.value:Wt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return So=o.slice(e,1<r?1-r:void 0)}function zo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function Es(){return!1}function Xe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ao:Es,this.isPropagationStopped=Es,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ja=Xe(nr),Yr=ie({},nr,{view:0,detail:0}),_p=Xe(Yr),Ri,Oi,sr,si=ie({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(Ri=e.screenX-sr.screenX,Oi=e.screenY-sr.screenY):Oi=Ri=0,sr=e),Ri)},movementY:function(e){return"movementY"in e?e.movementY:Oi}}),js=Xe(si),Dp=ie({},si,{dataTransfer:0}),Lp=Xe(Dp),Tp=ie({},Yr,{relatedTarget:0}),Mi=Xe(Tp),Pp=ie({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Rp=Xe(Pp),Op=ie({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mp=Xe(Op),$p=ie({},nr,{data:0}),Ns=Xe($p),Ip={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ap={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fp[e])?!!t[e]:!1}function Na(){return Bp}var Up=ie({},Yr,{key:function(e){if(e.key){var t=Ip[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ap[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Na,charCode:function(e){return e.type==="keypress"?zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kp=Xe(Up),Wp=ie({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cs=Xe(Wp),Vp=ie({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Na}),Hp=Xe(Vp),Yp=ie({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qp=Xe(Yp),Xp=ie({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gp=Xe(Xp),Jp=[9,13,27,32],Ca=Tt&&"CompositionEvent"in window,vr=null;Tt&&"documentMode"in document&&(vr=document.documentMode);var Zp=Tt&&"TextEvent"in window&&!vr,_u=Tt&&(!Ca||vr&&8<vr&&11>=vr),_s=" ",Ds=!1;function Du(e,t){switch(e){case"keyup":return Jp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function qp(e,t){switch(e){case"compositionend":return Lu(t);case"keypress":return t.which!==32?null:(Ds=!0,_s);case"textInput":return e=t.data,e===_s&&Ds?null:e;default:return null}}function eh(e,t){if(Tn)return e==="compositionend"||!Ca&&Du(e,t)?(e=Cu(),So=Ea=Wt=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _u&&t.locale!=="ko"?null:t.data;default:return null}}var th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!th[e.type]:t==="textarea"}function Tu(e,t,n,r){cu(r),t=Uo(t,"onChange"),0<t.length&&(n=new ja("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,Tr=null;function nh(e){Ku(e,0)}function ci(e){var t=On(e);if(nu(t))return e}function rh(e,t){if(e==="change")return t}var Pu=!1;if(Tt){var $i;if(Tt){var Ii="oninput"in document;if(!Ii){var Ts=document.createElement("div");Ts.setAttribute("oninput","return;"),Ii=typeof Ts.oninput=="function"}$i=Ii}else $i=!1;Pu=$i&&(!document.documentMode||9<document.documentMode)}function Ps(){wr&&(wr.detachEvent("onpropertychange",Ru),Tr=wr=null)}function Ru(e){if(e.propertyName==="value"&&ci(Tr)){var t=[];Tu(t,Tr,e,wa(e)),pu(nh,t)}}function oh(e,t,n){e==="focusin"?(Ps(),wr=t,Tr=n,wr.attachEvent("onpropertychange",Ru)):e==="focusout"&&Ps()}function ih(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(Tr)}function lh(e,t){if(e==="click")return ci(t)}function ah(e,t){if(e==="input"||e==="change")return ci(t)}function sh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:sh;function Pr(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!cl.call(t,o)||!xt(e[o],t[o]))return!1}return!0}function Rs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Os(e,t){var n=Rs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rs(n)}}function Ou(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ou(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mu(){for(var e=window,t=Oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oo(e.document)}return t}function _a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ch(e){var t=Mu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ou(n.ownerDocument.documentElement,n)){if(r!==null&&_a(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Os(n,i);var l=Os(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uh=Tt&&"documentMode"in document&&11>=document.documentMode,Pn=null,Cl=null,br=null,_l=!1;function Ms(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||Pn==null||Pn!==Oo(r)||(r=Pn,"selectionStart"in r&&_a(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&Pr(br,r)||(br=r,r=Uo(Cl,"onSelect"),0<r.length&&(t=new ja("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rn={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Ai={},$u={};Tt&&($u=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function ui(e){if(Ai[e])return Ai[e];if(!Rn[e])return e;var t=Rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $u)return Ai[e]=t[n];return e}var Iu=ui("animationend"),Au=ui("animationiteration"),Fu=ui("animationstart"),Bu=ui("transitionend"),Uu=new Map,$s="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){Uu.set(e,t),zn(t,[e])}for(var Fi=0;Fi<$s.length;Fi++){var Bi=$s[Fi],dh=Bi.toLowerCase(),fh=Bi[0].toUpperCase()+Bi.slice(1);nn(dh,"on"+fh)}nn(Iu,"onAnimationEnd");nn(Au,"onAnimationIteration");nn(Fu,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(Bu,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ph=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function Is(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dp(r,t,void 0,e),e.currentTarget=null}function Ku(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,g=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Is(o,a,g),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,g=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Is(o,a,g),i=s}}}if($o)throw e=zl,$o=!1,zl=null,e}function q(e,t){var n=t[Rl];n===void 0&&(n=t[Rl]=new Set);var r=e+"__bubble";n.has(r)||(Wu(t,e,2,!1),n.add(r))}function Ui(e,t,n){var r=0;t&&(r|=4),Wu(n,e,r,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[co]){e[co]=!0,Jc.forEach(function(n){n!=="selectionchange"&&(ph.has(n)||Ui(n,!1,e),Ui(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,Ui("selectionchange",!1,t))}}function Wu(e,t,n,r){switch(Nu(t)){case 1:var o=Np;break;case 4:o=Cp;break;default:o=za}n=o.bind(null,t,n,e),o=void 0,!Sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ki(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=pn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}pu(function(){var g=i,u=wa(n),h=[];e:{var f=Uu.get(e);if(f!==void 0){var y=ja,w=e;switch(e){case"keypress":if(zo(n)===0)break e;case"keydown":case"keyup":y=Kp;break;case"focusin":w="focus",y=Mi;break;case"focusout":w="blur",y=Mi;break;case"beforeblur":case"afterblur":y=Mi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Lp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Hp;break;case Iu:case Au:case Fu:y=Rp;break;case Bu:y=Qp;break;case"scroll":y=_p;break;case"wheel":y=Gp;break;case"copy":case"cut":case"paste":y=Mp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Cs}var b=(t&4)!==0,_=!b&&e==="scroll",m=b?f!==null?f+"Capture":null:f;b=[];for(var d=g,x;d!==null;){x=d;var v=x.stateNode;if(x.tag===5&&v!==null&&(x=v,m!==null&&(v=Cr(d,m),v!=null&&b.push(Or(d,v,x)))),_)break;d=d.return}0<b.length&&(f=new y(f,w,null,n,u),h.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==bl&&(w=n.relatedTarget||n.fromElement)&&(pn(w)||w[Pt]))break e;if((y||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=g,w=w?pn(w):null,w!==null&&(_=En(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=g),y!==w)){if(b=js,v="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=Cs,v="onPointerLeave",m="onPointerEnter",d="pointer"),_=y==null?f:On(y),x=w==null?f:On(w),f=new b(v,d+"leave",y,n,u),f.target=_,f.relatedTarget=x,v=null,pn(u)===g&&(b=new b(m,d+"enter",w,n,u),b.target=x,b.relatedTarget=_,v=b),_=v,y&&w)t:{for(b=y,m=w,d=0,x=b;x;x=_n(x))d++;for(x=0,v=m;v;v=_n(v))x++;for(;0<d-x;)b=_n(b),d--;for(;0<x-d;)m=_n(m),x--;for(;d--;){if(b===m||m!==null&&b===m.alternate)break t;b=_n(b),m=_n(m)}b=null}else b=null;y!==null&&As(h,f,y,b,!1),w!==null&&_!==null&&As(h,_,w,b,!0)}}e:{if(f=g?On(g):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var S=rh;else if(Ls(f))if(Pu)S=ah;else{S=ih;var N=oh}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=lh);if(S&&(S=S(e,g))){Tu(h,S,n,u);break e}N&&N(e,f,g),e==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&ml(f,"number",f.value)}switch(N=g?On(g):window,e){case"focusin":(Ls(N)||N.contentEditable==="true")&&(Pn=N,Cl=g,br=null);break;case"focusout":br=Cl=Pn=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Ms(h,n,u);break;case"selectionchange":if(uh)break;case"keydown":case"keyup":Ms(h,n,u)}var D;if(Ca)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Tn?Du(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(_u&&n.locale!=="ko"&&(Tn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Tn&&(D=Cu()):(Wt=u,Ea="value"in Wt?Wt.value:Wt.textContent,Tn=!0)),N=Uo(g,L),0<N.length&&(L=new Ns(L,e,null,n,u),h.push({event:L,listeners:N}),D?L.data=D:(D=Lu(n),D!==null&&(L.data=D)))),(D=Zp?qp(e,n):eh(e,n))&&(g=Uo(g,"onBeforeInput"),0<g.length&&(u=new Ns("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:g}),u.data=D))}Ku(h,t)})}function Or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Uo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Cr(e,n),i!=null&&r.unshift(Or(e,i,o)),i=Cr(e,t),i!=null&&r.push(Or(e,i,o))),e=e.return}return r}function _n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function As(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,g=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&g!==null&&(a=g,o?(s=Cr(n,i),s!=null&&l.unshift(Or(n,s,a))):o||(s=Cr(n,i),s!=null&&l.push(Or(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var hh=/\r\n?/g,gh=/\u0000|\uFFFD/g;function Fs(e){return(typeof e=="string"?e:""+e).replace(hh,`
`).replace(gh,"")}function uo(e,t,n){if(t=Fs(t),Fs(e)!==t&&n)throw Error(z(425))}function Ko(){}var Dl=null,Ll=null;function Tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,mh=typeof clearTimeout=="function"?clearTimeout:void 0,Bs=typeof Promise=="function"?Promise:void 0,xh=typeof queueMicrotask=="function"?queueMicrotask:typeof Bs<"u"?function(e){return Bs.resolve(null).then(e).catch(yh)}:Pl;function yh(e){setTimeout(function(){throw e})}function Wi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Lr(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Us(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),St="__reactFiber$"+rr,Mr="__reactProps$"+rr,Pt="__reactContainer$"+rr,Rl="__reactEvents$"+rr,vh="__reactListeners$"+rr,wh="__reactHandles$"+rr;function pn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Us(e);e!==null;){if(n=e[St])return n;e=Us(e)}return t}e=n,n=e.parentNode}return null}function Qr(e){return e=e[St]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function di(e){return e[Mr]||null}var Ol=[],Mn=-1;function rn(e){return{current:e}}function ee(e){0>Mn||(e.current=Ol[Mn],Ol[Mn]=null,Mn--)}function Z(e,t){Mn++,Ol[Mn]=e.current,e.current=t}var tn={},je=rn(tn),Ae=rn(!1),vn=tn;function Xn(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Fe(e){return e=e.childContextTypes,e!=null}function Wo(){ee(Ae),ee(je)}function Ks(e,t,n){if(je.current!==tn)throw Error(z(168));Z(je,t),Z(Ae,n)}function Vu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,op(e)||"Unknown",o));return ie({},n,r)}function Vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,vn=je.current,Z(je,e),Z(Ae,Ae.current),!0}function Ws(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=Vu(e,t,vn),r.__reactInternalMemoizedMergedChildContext=e,ee(Ae),ee(je),Z(je,e)):ee(Ae),Z(Ae,n)}var Ct=null,fi=!1,Vi=!1;function Hu(e){Ct===null?Ct=[e]:Ct.push(e)}function bh(e){fi=!0,Hu(e)}function on(){if(!Vi&&Ct!==null){Vi=!0;var e=0,t=X;try{var n=Ct;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,fi=!1}catch(o){throw Ct!==null&&(Ct=Ct.slice(e+1)),xu(ba,on),o}finally{X=t,Vi=!1}}return null}var $n=[],In=0,Ho=null,Yo=0,tt=[],nt=0,wn=null,_t=1,Dt="";function dn(e,t){$n[In++]=Yo,$n[In++]=Ho,Ho=e,Yo=t}function Yu(e,t,n){tt[nt++]=_t,tt[nt++]=Dt,tt[nt++]=wn,wn=e;var r=_t;e=Dt;var o=32-gt(r)-1;r&=~(1<<o),n+=1;var i=32-gt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,_t=1<<32-gt(t)+o|n<<o|r,Dt=i+e}else _t=1<<i|n<<o|r,Dt=e}function Da(e){e.return!==null&&(dn(e,1),Yu(e,1,0))}function La(e){for(;e===Ho;)Ho=$n[--In],$n[In]=null,Yo=$n[--In],$n[In]=null;for(;e===wn;)wn=tt[--nt],tt[nt]=null,Dt=tt[--nt],tt[nt]=null,_t=tt[--nt],tt[nt]=null}var Ve=null,We=null,ne=!1,pt=null;function Qu(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,We=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wn!==null?{id:_t,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,We=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $l(e){if(ne){var t=We;if(t){var n=t;if(!Vs(e,t)){if(Ml(e))throw Error(z(418));t=Xt(n.nextSibling);var r=Ve;t&&Vs(e,t)?Qu(r,n):(e.flags=e.flags&-4097|2,ne=!1,Ve=e)}}else{if(Ml(e))throw Error(z(418));e.flags=e.flags&-4097|2,ne=!1,Ve=e}}}function Hs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function fo(e){if(e!==Ve)return!1;if(!ne)return Hs(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tl(e.type,e.memoizedProps)),t&&(t=We)){if(Ml(e))throw Xu(),Error(z(418));for(;t;)Qu(e,t),t=Xt(t.nextSibling)}if(Hs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Ve?Xt(e.stateNode.nextSibling):null;return!0}function Xu(){for(var e=We;e;)e=Xt(e.nextSibling)}function Gn(){We=Ve=null,ne=!1}function Ta(e){pt===null?pt=[e]:pt.push(e)}var kh=Mt.ReactCurrentBatchConfig;function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ys(e){var t=e._init;return t(e._payload)}function Gu(e){function t(m,d){if(e){var x=m.deletions;x===null?(m.deletions=[d],m.flags|=16):x.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function o(m,d){return m=qt(m,d),m.index=0,m.sibling=null,m}function i(m,d,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<d?(m.flags|=2,d):x):(m.flags|=2,d)):(m.flags|=1048576,d)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,d,x,v){return d===null||d.tag!==6?(d=Zi(x,m.mode,v),d.return=m,d):(d=o(d,x),d.return=m,d)}function s(m,d,x,v){var S=x.type;return S===Ln?u(m,d,x.props.children,v,x.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ft&&Ys(S)===d.type)?(v=o(d,x.props),v.ref=cr(m,d,x),v.return=m,v):(v=Lo(x.type,x.key,x.props,null,m.mode,v),v.ref=cr(m,d,x),v.return=m,v)}function g(m,d,x,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==x.containerInfo||d.stateNode.implementation!==x.implementation?(d=qi(x,m.mode,v),d.return=m,d):(d=o(d,x.children||[]),d.return=m,d)}function u(m,d,x,v,S){return d===null||d.tag!==7?(d=xn(x,m.mode,v,S),d.return=m,d):(d=o(d,x),d.return=m,d)}function h(m,d,x){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Zi(""+d,m.mode,x),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case to:return x=Lo(d.type,d.key,d.props,null,m.mode,x),x.ref=cr(m,null,d),x.return=m,x;case Dn:return d=qi(d,m.mode,x),d.return=m,d;case Ft:var v=d._init;return h(m,v(d._payload),x)}if(pr(d)||or(d))return d=xn(d,m.mode,x,null),d.return=m,d;po(m,d)}return null}function f(m,d,x,v){var S=d!==null?d.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(m,d,""+x,v);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case to:return x.key===S?s(m,d,x,v):null;case Dn:return x.key===S?g(m,d,x,v):null;case Ft:return S=x._init,f(m,d,S(x._payload),v)}if(pr(x)||or(x))return S!==null?null:u(m,d,x,v,null);po(m,x)}return null}function y(m,d,x,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(x)||null,a(d,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case to:return m=m.get(v.key===null?x:v.key)||null,s(d,m,v,S);case Dn:return m=m.get(v.key===null?x:v.key)||null,g(d,m,v,S);case Ft:var N=v._init;return y(m,d,x,N(v._payload),S)}if(pr(v)||or(v))return m=m.get(x)||null,u(d,m,v,S,null);po(d,v)}return null}function w(m,d,x,v){for(var S=null,N=null,D=d,L=d=0,K=null;D!==null&&L<x.length;L++){D.index>L?(K=D,D=null):K=D.sibling;var M=f(m,D,x[L],v);if(M===null){D===null&&(D=K);break}e&&D&&M.alternate===null&&t(m,D),d=i(M,d,L),N===null?S=M:N.sibling=M,N=M,D=K}if(L===x.length)return n(m,D),ne&&dn(m,L),S;if(D===null){for(;L<x.length;L++)D=h(m,x[L],v),D!==null&&(d=i(D,d,L),N===null?S=D:N.sibling=D,N=D);return ne&&dn(m,L),S}for(D=r(m,D);L<x.length;L++)K=y(D,m,L,x[L],v),K!==null&&(e&&K.alternate!==null&&D.delete(K.key===null?L:K.key),d=i(K,d,L),N===null?S=K:N.sibling=K,N=K);return e&&D.forEach(function(J){return t(m,J)}),ne&&dn(m,L),S}function b(m,d,x,v){var S=or(x);if(typeof S!="function")throw Error(z(150));if(x=S.call(x),x==null)throw Error(z(151));for(var N=S=null,D=d,L=d=0,K=null,M=x.next();D!==null&&!M.done;L++,M=x.next()){D.index>L?(K=D,D=null):K=D.sibling;var J=f(m,D,M.value,v);if(J===null){D===null&&(D=K);break}e&&D&&J.alternate===null&&t(m,D),d=i(J,d,L),N===null?S=J:N.sibling=J,N=J,D=K}if(M.done)return n(m,D),ne&&dn(m,L),S;if(D===null){for(;!M.done;L++,M=x.next())M=h(m,M.value,v),M!==null&&(d=i(M,d,L),N===null?S=M:N.sibling=M,N=M);return ne&&dn(m,L),S}for(D=r(m,D);!M.done;L++,M=x.next())M=y(D,m,L,M.value,v),M!==null&&(e&&M.alternate!==null&&D.delete(M.key===null?L:M.key),d=i(M,d,L),N===null?S=M:N.sibling=M,N=M);return e&&D.forEach(function(Ne){return t(m,Ne)}),ne&&dn(m,L),S}function _(m,d,x,v){if(typeof x=="object"&&x!==null&&x.type===Ln&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case to:e:{for(var S=x.key,N=d;N!==null;){if(N.key===S){if(S=x.type,S===Ln){if(N.tag===7){n(m,N.sibling),d=o(N,x.props.children),d.return=m,m=d;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ft&&Ys(S)===N.type){n(m,N.sibling),d=o(N,x.props),d.ref=cr(m,N,x),d.return=m,m=d;break e}n(m,N);break}else t(m,N);N=N.sibling}x.type===Ln?(d=xn(x.props.children,m.mode,v,x.key),d.return=m,m=d):(v=Lo(x.type,x.key,x.props,null,m.mode,v),v.ref=cr(m,d,x),v.return=m,m=v)}return l(m);case Dn:e:{for(N=x.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===x.containerInfo&&d.stateNode.implementation===x.implementation){n(m,d.sibling),d=o(d,x.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=qi(x,m.mode,v),d.return=m,m=d}return l(m);case Ft:return N=x._init,_(m,d,N(x._payload),v)}if(pr(x))return w(m,d,x,v);if(or(x))return b(m,d,x,v);po(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,d!==null&&d.tag===6?(n(m,d.sibling),d=o(d,x),d.return=m,m=d):(n(m,d),d=Zi(x,m.mode,v),d.return=m,m=d),l(m)):n(m,d)}return _}var Jn=Gu(!0),Ju=Gu(!1),Qo=rn(null),Xo=null,An=null,Pa=null;function Ra(){Pa=An=Xo=null}function Oa(e){var t=Qo.current;ee(Qo),e._currentValue=t}function Il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hn(e,t){Xo=e,Pa=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Pa!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(Xo===null)throw Error(z(308));An=e,Xo.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var hn=null;function Ma(e){hn===null?hn=[e]:hn.push(e)}function Zu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ma(t)):(n.next=o.next,o.next=n),t.interleaved=n,Rt(e,r)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bt=!1;function $a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Rt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ma(r)):(t.next=o.next,o.next=t),r.interleaved=t,Rt(e,n)}function Eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ka(e,n)}}function Qs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Go(e,t,n,r){var o=e.updateQueue;Bt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,g=s.next;s.next=null,l===null?i=g:l.next=g,l=s;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==l&&(a===null?u.firstBaseUpdate=g:a.next=g,u.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,u=g=s=null,a=i;do{var f=a.lane,y=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,b=a;switch(f=t,y=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){h=w.call(y,h,f);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,f=typeof w=="function"?w.call(y,h,f):w,f==null)break e;h=ie({},h,f);break e;case 2:Bt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(g=u=y,s=h):u=u.next=y,l|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(u===null&&(s=h),o.baseState=s,o.firstBaseUpdate=g,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);kn|=l,e.lanes=l,e.memoizedState=h}}function Xs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var Xr={},Et=rn(Xr),$r=rn(Xr),Ir=rn(Xr);function gn(e){if(e===Xr)throw Error(z(174));return e}function Ia(e,t){switch(Z(Ir,t),Z($r,e),Z(Et,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yl(t,e)}ee(Et),Z(Et,t)}function Zn(){ee(Et),ee($r),ee(Ir)}function ed(e){gn(Ir.current);var t=gn(Et.current),n=yl(t,e.type);t!==n&&(Z($r,e),Z(Et,n))}function Aa(e){$r.current===e&&(ee(Et),ee($r))}var re=rn(0);function Jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hi=[];function Fa(){for(var e=0;e<Hi.length;e++)Hi[e]._workInProgressVersionPrimary=null;Hi.length=0}var jo=Mt.ReactCurrentDispatcher,Yi=Mt.ReactCurrentBatchConfig,bn=0,oe=null,fe=null,he=null,Zo=!1,kr=!1,Ar=0,Sh=0;function Se(){throw Error(z(321))}function Ba(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function Ua(e,t,n,r,o,i){if(bn=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jo.current=e===null||e.memoizedState===null?Nh:Ch,e=n(r,o),kr){i=0;do{if(kr=!1,Ar=0,25<=i)throw Error(z(301));i+=1,he=fe=null,t.updateQueue=null,jo.current=_h,e=n(r,o)}while(kr)}if(jo.current=qo,t=fe!==null&&fe.next!==null,bn=0,he=fe=oe=null,Zo=!1,t)throw Error(z(300));return e}function Ka(){var e=Ar!==0;return Ar=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?oe.memoizedState=he=e:he=he.next=e,he}function lt(){if(fe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=he===null?oe.memoizedState:he.next;if(t!==null)he=t,fe=e;else{if(e===null)throw Error(z(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},he===null?oe.memoizedState=he=e:he=he.next=e}return he}function Fr(e,t){return typeof t=="function"?t(e):t}function Qi(e){var t=lt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=fe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,g=i;do{var u=g.lane;if((bn&u)===u)s!==null&&(s=s.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var h={lane:u,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,oe.lanes|=u,kn|=u}g=g.next}while(g!==null&&g!==i);s===null?l=r:s.next=a,xt(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,oe.lanes|=i,kn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xi(e){var t=lt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);xt(i,t.memoizedState)||(Ie=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function td(){}function nd(e,t){var n=oe,r=lt(),o=t(),i=!xt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ie=!0),r=r.queue,Wa(id.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Br(9,od.bind(null,n,r,o,t),void 0,null),ge===null)throw Error(z(349));bn&30||rd(n,t,o)}return o}function rd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function od(e,t,n,r){t.value=n,t.getSnapshot=r,ld(t)&&ad(e)}function id(e,t,n){return n(function(){ld(t)&&ad(e)})}function ld(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function ad(e){var t=Rt(e,1);t!==null&&mt(t,e,1,-1)}function Gs(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},t.queue=e,e=e.dispatch=jh.bind(null,oe,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function sd(){return lt().memoizedState}function No(e,t,n,r){var o=kt();oe.flags|=e,o.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function pi(e,t,n,r){var o=lt();r=r===void 0?null:r;var i=void 0;if(fe!==null){var l=fe.memoizedState;if(i=l.destroy,r!==null&&Ba(r,l.deps)){o.memoizedState=Br(t,n,i,r);return}}oe.flags|=e,o.memoizedState=Br(1|t,n,i,r)}function Js(e,t){return No(8390656,8,e,t)}function Wa(e,t){return pi(2048,8,e,t)}function cd(e,t){return pi(4,2,e,t)}function ud(e,t){return pi(4,4,e,t)}function dd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fd(e,t,n){return n=n!=null?n.concat([e]):null,pi(4,4,dd.bind(null,t,e),n)}function Va(){}function pd(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hd(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gd(e,t,n){return bn&21?(xt(n,t)||(n=wu(),oe.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function zh(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Yi.transition;Yi.transition={};try{e(!1),t()}finally{X=n,Yi.transition=r}}function md(){return lt().memoizedState}function Eh(e,t,n){var r=Zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xd(e))yd(t,n);else if(n=Zu(e,t,n,r),n!==null){var o=De();mt(n,e,r,o),vd(n,t,r)}}function jh(e,t,n){var r=Zt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xd(e))yd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,xt(a,l)){var s=t.interleaved;s===null?(o.next=o,Ma(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Zu(e,t,o,r),n!==null&&(o=De(),mt(n,e,r,o),vd(n,t,r))}}function xd(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function yd(e,t){kr=Zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ka(e,n)}}var qo={readContext:it,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Nh={readContext:it,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Js,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,No(4194308,4,dd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return No(4194308,4,e,t)},useInsertionEffect:function(e,t){return No(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Eh.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:Gs,useDebugValue:Va,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Gs(!1),t=e[0];return e=zh.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,o=kt();if(ne){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),ge===null)throw Error(z(349));bn&30||rd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Js(id.bind(null,r,i,e),[e]),r.flags|=2048,Br(9,od.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=kt(),t=ge.identifierPrefix;if(ne){var n=Dt,r=_t;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ch={readContext:it,useCallback:pd,useContext:it,useEffect:Wa,useImperativeHandle:fd,useInsertionEffect:cd,useLayoutEffect:ud,useMemo:hd,useReducer:Qi,useRef:sd,useState:function(){return Qi(Fr)},useDebugValue:Va,useDeferredValue:function(e){var t=lt();return gd(t,fe.memoizedState,e)},useTransition:function(){var e=Qi(Fr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:td,useSyncExternalStore:nd,useId:md,unstable_isNewReconciler:!1},_h={readContext:it,useCallback:pd,useContext:it,useEffect:Wa,useImperativeHandle:fd,useInsertionEffect:cd,useLayoutEffect:ud,useMemo:hd,useReducer:Xi,useRef:sd,useState:function(){return Xi(Fr)},useDebugValue:Va,useDeferredValue:function(e){var t=lt();return fe===null?t.memoizedState=e:gd(t,fe.memoizedState,e)},useTransition:function(){var e=Xi(Fr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:td,useSyncExternalStore:nd,useId:md,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hi={isMounted:function(e){return(e=e._reactInternals)?En(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),o=Zt(e),i=Lt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(mt(t,e,o,r),Eo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),o=Zt(e),i=Lt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(mt(t,e,o,r),Eo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=Zt(e),o=Lt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Gt(e,o,r),t!==null&&(mt(t,e,r,n),Eo(t,e,r))}};function Zs(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(o,i):!0}function wd(e,t,n){var r=!1,o=tn,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(o=Fe(t)?vn:je.current,r=t.contextTypes,i=(r=r!=null)?Xn(e,o):tn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hi.enqueueReplaceState(t,t.state,null)}function Fl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},$a(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=it(i):(i=Fe(t)?vn:je.current,o.context=Xn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Al(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&hi.enqueueReplaceState(o,o.state,null),Go(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function qn(e,t){try{var n="",r=t;do n+=rp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Gi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dh=typeof WeakMap=="function"?WeakMap:Map;function bd(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ti||(ti=!0,Jl=r),Bl(e,t)},n}function kd(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Bl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Bl(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ec(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Wh.bind(null,e,t,n),t.then(e,e))}function tc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var Lh=Mt.ReactCurrentOwner,Ie=!1;function _e(e,t,n,r){t.child=e===null?Ju(t,null,n,r):Jn(t,e.child,n,r)}function rc(e,t,n,r,o){n=n.render;var i=t.ref;return Hn(t,o),r=Ua(e,t,n,r,i,o),n=Ka(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ot(e,t,o)):(ne&&n&&Da(t),t.flags|=1,_e(e,t,r,o),t.child)}function oc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!qa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Sd(e,t,i,r,o)):(e=Lo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Pr,n(l,r)&&e.ref===t.ref)return Ot(e,t,o)}return t.flags|=1,e=qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Sd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Pr(i,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Ot(e,t,o)}return Ul(e,t,n,r,o)}function zd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Bn,Ke),Ke|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Bn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Z(Bn,Ke),Ke|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Z(Bn,Ke),Ke|=r;return _e(e,t,o,n),t.child}function Ed(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ul(e,t,n,r,o){var i=Fe(n)?vn:je.current;return i=Xn(t,i),Hn(t,o),n=Ua(e,t,n,r,i,o),r=Ka(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ot(e,t,o)):(ne&&r&&Da(t),t.flags|=1,_e(e,t,n,o),t.child)}function ic(e,t,n,r,o){if(Fe(n)){var i=!0;Vo(t)}else i=!1;if(Hn(t,o),t.stateNode===null)Co(e,t),wd(t,n,r),Fl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,g=n.contextType;typeof g=="object"&&g!==null?g=it(g):(g=Fe(n)?vn:je.current,g=Xn(t,g));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==g)&&qs(t,l,r,g),Bt=!1;var f=t.memoizedState;l.state=f,Go(t,r,l,o),s=t.memoizedState,a!==r||f!==s||Ae.current||Bt?(typeof u=="function"&&(Al(t,n,u,r),s=t.memoizedState),(a=Bt||Zs(t,n,a,r,f,s,g))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=g,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,qu(e,t),a=t.memoizedProps,g=t.type===t.elementType?a:ut(t.type,a),l.props=g,h=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=it(s):(s=Fe(n)?vn:je.current,s=Xn(t,s));var y=n.getDerivedStateFromProps;(u=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||f!==s)&&qs(t,l,r,s),Bt=!1,f=t.memoizedState,l.state=f,Go(t,r,l,o);var w=t.memoizedState;a!==h||f!==w||Ae.current||Bt?(typeof y=="function"&&(Al(t,n,y,r),w=t.memoizedState),(g=Bt||Zs(t,n,g,r,f,w,s)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=g):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Kl(e,t,n,r,i,o)}function Kl(e,t,n,r,o,i){Ed(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ws(t,n,!1),Ot(e,t,i);r=t.stateNode,Lh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Jn(t,e.child,null,i),t.child=Jn(t,null,a,i)):_e(e,t,a,i),t.memoizedState=r.state,o&&Ws(t,n,!0),t.child}function jd(e){var t=e.stateNode;t.pendingContext?Ks(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ks(e,t.context,!1),Ia(e,t.containerInfo)}function lc(e,t,n,r,o){return Gn(),Ta(o),t.flags|=256,_e(e,t,n,r),t.child}var Wl={dehydrated:null,treeContext:null,retryLane:0};function Vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nd(e,t,n){var r=t.pendingProps,o=re.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Z(re,o&1),e===null)return $l(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=xi(l,r,0,null),e=xn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Vl(n),t.memoizedState=Wl,e):Ha(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Th(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=qt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=qt(a,i):(i=xn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Vl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Wl,r}return i=e.child,e=i.sibling,r=qt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ha(e,t){return t=xi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ho(e,t,n,r){return r!==null&&Ta(r),Jn(t,e.child,null,n),e=Ha(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Th(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Gi(Error(z(422))),ho(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=xi({mode:"visible",children:r.children},o,0,null),i=xn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Jn(t,e.child,null,l),t.child.memoizedState=Vl(l),t.memoizedState=Wl,i);if(!(t.mode&1))return ho(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(z(419)),r=Gi(i,r,void 0),ho(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ie||a){if(r=ge,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Rt(e,o),mt(r,e,o,-1))}return Za(),r=Gi(Error(z(421))),ho(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Vh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,We=Xt(o.nextSibling),Ve=t,ne=!0,pt=null,e!==null&&(tt[nt++]=_t,tt[nt++]=Dt,tt[nt++]=wn,_t=e.id,Dt=e.overflow,wn=t),t=Ha(t,r.children),t.flags|=4096,t)}function ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Il(e.return,t,n)}function Ji(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Cd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(_e(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ac(e,n,t);else if(e.tag===19)ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(re,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Jo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ji(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Jo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ji(t,!0,n,null,i);break;case"together":Ji(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Co(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ph(e,t,n){switch(t.tag){case 3:jd(t),Gn();break;case 5:ed(t);break;case 1:Fe(t.type)&&Vo(t);break;case 4:Ia(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Z(Qo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?Nd(e,t,n):(Z(re,re.current&1),e=Ot(e,t,n),e!==null?e.sibling:null);Z(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Cd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,zd(e,t,n)}return Ot(e,t,n)}var _d,Hl,Dd,Ld;_d=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hl=function(){};Dd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,gn(Et.current);var i=null;switch(n){case"input":o=hl(e,o),r=hl(e,r),i=[];break;case"select":o=ie({},o,{value:void 0}),r=ie({},r,{value:void 0}),i=[];break;case"textarea":o=xl(e,o),r=xl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ko)}vl(n,r);var l;n=null;for(g in o)if(!r.hasOwnProperty(g)&&o.hasOwnProperty(g)&&o[g]!=null)if(g==="style"){var a=o[g];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(jr.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in r){var s=r[g];if(a=o!=null?o[g]:void 0,r.hasOwnProperty(g)&&s!==a&&(s!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(g,n)),n=s;else g==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(g,s)):g==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(g,""+s):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(jr.hasOwnProperty(g)?(s!=null&&g==="onScroll"&&q("scroll",e),i||a===s||(i=[])):(i=i||[]).push(g,s))}n&&(i=i||[]).push("style",n);var g=i;(t.updateQueue=g)&&(t.flags|=4)}};Ld=function(e,t,n,r){n!==r&&(t.flags|=4)};function ur(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rh(e,t,n){var r=t.pendingProps;switch(La(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Fe(t.type)&&Wo(),ze(t),null;case 3:return r=t.stateNode,Zn(),ee(Ae),ee(je),Fa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(ea(pt),pt=null))),Hl(e,t),ze(t),null;case 5:Aa(t);var o=gn(Ir.current);if(n=t.type,e!==null&&t.stateNode!=null)Dd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return ze(t),null}if(e=gn(Et.current),fo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[St]=t,r[Mr]=i,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<gr.length;o++)q(gr[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":ms(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":ys(r,i),q("invalid",r)}vl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&uo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&uo(r.textContent,a,e),o=["children",""+a]):jr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&q("scroll",r)}switch(n){case"input":no(r),xs(r,i,!0);break;case"textarea":no(r),vs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ko)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=iu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[St]=t,e[Mr]=r,_d(e,t,!1,!1),t.stateNode=e;e:{switch(l=wl(n,r),n){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<gr.length;o++)q(gr[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":ms(e,r),o=hl(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ie({},r,{value:void 0}),q("invalid",e);break;case"textarea":ys(e,r),o=xl(e,r),q("invalid",e);break;default:o=r}vl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?su(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&lu(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Nr(e,s):typeof s=="number"&&Nr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(jr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&q("scroll",e):s!=null&&ma(e,i,s,l))}switch(n){case"input":no(e),xs(e,r,!1);break;case"textarea":no(e),vs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Un(e,!!r.multiple,i,!1):r.defaultValue!=null&&Un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)Ld(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=gn(Ir.current),gn(Et.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(i=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return ze(t),null;case 13:if(ee(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&We!==null&&t.mode&1&&!(t.flags&128))Xu(),Gn(),t.flags|=98560,i=!1;else if(i=fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[St]=t}else Gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),i=!1}else pt!==null&&(ea(pt),pt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?pe===0&&(pe=3):Za())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Zn(),Hl(e,t),e===null&&Rr(t.stateNode.containerInfo),ze(t),null;case 10:return Oa(t.type._context),ze(t),null;case 17:return Fe(t.type)&&Wo(),ze(t),null;case 19:if(ee(re),i=t.memoizedState,i===null)return ze(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)ur(i,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Jo(e),l!==null){for(t.flags|=128,ur(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(re,re.current&1|2),t.child}e=e.sibling}i.tail!==null&&se()>er&&(t.flags|=128,r=!0,ur(i,!1),t.lanes=4194304)}else{if(!r)if(e=Jo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ur(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ne)return ze(t),null}else 2*se()-i.renderingStartTime>er&&n!==1073741824&&(t.flags|=128,r=!0,ur(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=se(),t.sibling=null,n=re.current,Z(re,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Ja(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function Oh(e,t){switch(La(t),t.tag){case 1:return Fe(t.type)&&Wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zn(),ee(Ae),ee(je),Fa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Aa(t),null;case 13:if(ee(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(re),null;case 4:return Zn(),null;case 10:return Oa(t.type._context),null;case 22:case 23:return Ja(),null;case 24:return null;default:return null}}var go=!1,Ee=!1,Mh=typeof WeakSet=="function"?WeakSet:Set,O=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function Yl(e,t,n){try{n()}catch(r){ae(e,t,r)}}var sc=!1;function $h(e,t){if(Dl=Fo,e=Mu(),_a(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,g=0,u=0,h=e,f=null;t:for(;;){for(var y;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(y=h.firstChild)!==null;)f=h,h=y;for(;;){if(h===e)break t;if(f===n&&++g===o&&(a=l),f===i&&++u===r&&(s=l),(y=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ll={focusedElem:e,selectionRange:n},Fo=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,_=w.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:ut(t.type,b),_);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(v){ae(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return w=sc,sc=!1,w}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Yl(t,n,i)}o=o.next}while(o!==r)}}function gi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Td(e){var t=e.alternate;t!==null&&(e.alternate=null,Td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[Mr],delete t[Rl],delete t[vh],delete t[wh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pd(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ko));else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}var ye=null,dt=!1;function At(e,t,n){for(n=n.child;n!==null;)Rd(e,t,n),n=n.sibling}function Rd(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(ai,n)}catch{}switch(n.tag){case 5:Ee||Fn(n,t);case 6:var r=ye,o=dt;ye=null,At(e,t,n),ye=r,dt=o,ye!==null&&(dt?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(dt?(e=ye,n=n.stateNode,e.nodeType===8?Wi(e.parentNode,n):e.nodeType===1&&Wi(e,n),Lr(e)):Wi(ye,n.stateNode));break;case 4:r=ye,o=dt,ye=n.stateNode.containerInfo,dt=!0,At(e,t,n),ye=r,dt=o;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Yl(n,t,l),o=o.next}while(o!==r)}At(e,t,n);break;case 1:if(!Ee&&(Fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,t,a)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,At(e,t,n),Ee=r):At(e,t,n);break;default:At(e,t,n)}}function uc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Mh),t.forEach(function(r){var o=Hh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ye=a.stateNode,dt=!1;break e;case 3:ye=a.stateNode.containerInfo,dt=!0;break e;case 4:ye=a.stateNode.containerInfo,dt=!0;break e}a=a.return}if(ye===null)throw Error(z(160));Rd(i,l,o),ye=null,dt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(g){ae(o,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Od(t,e),t=t.sibling}function Od(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),bt(e),r&4){try{Sr(3,e,e.return),gi(3,e)}catch(b){ae(e,e.return,b)}try{Sr(5,e,e.return)}catch(b){ae(e,e.return,b)}}break;case 1:ct(t,e),bt(e),r&512&&n!==null&&Fn(n,n.return);break;case 5:if(ct(t,e),bt(e),r&512&&n!==null&&Fn(n,n.return),e.flags&32){var o=e.stateNode;try{Nr(o,"")}catch(b){ae(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ru(o,i),wl(a,l);var g=wl(a,i);for(l=0;l<s.length;l+=2){var u=s[l],h=s[l+1];u==="style"?su(o,h):u==="dangerouslySetInnerHTML"?lu(o,h):u==="children"?Nr(o,h):ma(o,u,h,g)}switch(a){case"input":gl(o,i);break;case"textarea":ou(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Un(o,!!i.multiple,y,!1):f!==!!i.multiple&&(i.defaultValue!=null?Un(o,!!i.multiple,i.defaultValue,!0):Un(o,!!i.multiple,i.multiple?[]:"",!1))}o[Mr]=i}catch(b){ae(e,e.return,b)}}break;case 6:if(ct(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){ae(e,e.return,b)}}break;case 3:if(ct(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lr(t.containerInfo)}catch(b){ae(e,e.return,b)}break;case 4:ct(t,e),bt(e);break;case 13:ct(t,e),bt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Xa=se())),r&4&&uc(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(g=Ee)||u,ct(t,e),Ee=g):ct(t,e),bt(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!u&&e.mode&1)for(O=e,u=e.child;u!==null;){for(h=O=u;O!==null;){switch(f=O,y=f.child,f.tag){case 0:case 11:case 14:case 15:Sr(4,f,f.return);break;case 1:Fn(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){ae(r,n,b)}}break;case 5:Fn(f,f.return);break;case 22:if(f.memoizedState!==null){fc(h);continue}}y!==null?(y.return=f,O=y):fc(h)}u=u.sibling}e:for(u=null,h=e;;){if(h.tag===5){if(u===null){u=h;try{o=h.stateNode,g?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=au("display",l))}catch(b){ae(e,e.return,b)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=g?"":h.memoizedProps}catch(b){ae(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ct(t,e),bt(e),r&4&&uc(e);break;case 21:break;default:ct(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pd(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Nr(o,""),r.flags&=-33);var i=cc(e);Gl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=cc(e);Xl(e,a,l);break;default:throw Error(z(161))}}catch(s){ae(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ih(e,t,n){O=e,Md(e)}function Md(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||go;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Ee;a=go;var g=Ee;if(go=l,(Ee=s)&&!g)for(O=o;O!==null;)l=O,s=l.child,l.tag===22&&l.memoizedState!==null?pc(o):s!==null?(s.return=l,O=s):pc(o);for(;i!==null;)O=i,Md(i),i=i.sibling;O=o,go=a,Ee=g}dc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):dc(e)}}function dc(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||gi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Xs(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xs(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var u=g.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Lr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ee||t.flags&512&&Ql(t)}catch(f){ae(t,t.return,f)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function fc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function pc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{gi(4,t)}catch(s){ae(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ae(t,o,s)}}var i=t.return;try{Ql(t)}catch(s){ae(t,i,s)}break;case 5:var l=t.return;try{Ql(t)}catch(s){ae(t,l,s)}}}catch(s){ae(t,t.return,s)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Ah=Math.ceil,ei=Mt.ReactCurrentDispatcher,Ya=Mt.ReactCurrentOwner,ot=Mt.ReactCurrentBatchConfig,Y=0,ge=null,de=null,we=0,Ke=0,Bn=rn(0),pe=0,Ur=null,kn=0,mi=0,Qa=0,zr=null,Me=null,Xa=0,er=1/0,Nt=null,ti=!1,Jl=null,Jt=null,mo=!1,Vt=null,ni=0,Er=0,Zl=null,_o=-1,Do=0;function De(){return Y&6?se():_o!==-1?_o:_o=se()}function Zt(e){return e.mode&1?Y&2&&we!==0?we&-we:kh.transition!==null?(Do===0&&(Do=wu()),Do):(e=X,e!==0||(e=window.event,e=e===void 0?16:Nu(e.type)),e):1}function mt(e,t,n,r){if(50<Er)throw Er=0,Zl=null,Error(z(185));Hr(e,n,r),(!(Y&2)||e!==ge)&&(e===ge&&(!(Y&2)&&(mi|=n),pe===4&&Kt(e,we)),Be(e,r),n===1&&Y===0&&!(t.mode&1)&&(er=se()+500,fi&&on()))}function Be(e,t){var n=e.callbackNode;kp(e,t);var r=Ao(e,e===ge?we:0);if(r===0)n!==null&&ks(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ks(n),t===1)e.tag===0?bh(hc.bind(null,e)):Hu(hc.bind(null,e)),xh(function(){!(Y&6)&&on()}),n=null;else{switch(bu(r)){case 1:n=ba;break;case 4:n=yu;break;case 16:n=Io;break;case 536870912:n=vu;break;default:n=Io}n=Wd(n,$d.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $d(e,t){if(_o=-1,Do=0,Y&6)throw Error(z(327));var n=e.callbackNode;if(Yn()&&e.callbackNode!==n)return null;var r=Ao(e,e===ge?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ri(e,r);else{t=r;var o=Y;Y|=2;var i=Ad();(ge!==e||we!==t)&&(Nt=null,er=se()+500,mn(e,t));do try{Uh();break}catch(a){Id(e,a)}while(!0);Ra(),ei.current=i,Y=o,de!==null?t=0:(ge=null,we=0,t=pe)}if(t!==0){if(t===2&&(o=El(e),o!==0&&(r=o,t=ql(e,o))),t===1)throw n=Ur,mn(e,0),Kt(e,r),Be(e,se()),n;if(t===6)Kt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Fh(o)&&(t=ri(e,r),t===2&&(i=El(e),i!==0&&(r=i,t=ql(e,i))),t===1))throw n=Ur,mn(e,0),Kt(e,r),Be(e,se()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:fn(e,Me,Nt);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=Xa+500-se(),10<t)){if(Ao(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Pl(fn.bind(null,e,Me,Nt),t);break}fn(e,Me,Nt);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-gt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ah(r/1960))-r,10<r){e.timeoutHandle=Pl(fn.bind(null,e,Me,Nt),r);break}fn(e,Me,Nt);break;case 5:fn(e,Me,Nt);break;default:throw Error(z(329))}}}return Be(e,se()),e.callbackNode===n?$d.bind(null,e):null}function ql(e,t){var n=zr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=ri(e,t),e!==2&&(t=Me,Me=n,t!==null&&ea(t)),e}function ea(e){Me===null?Me=e:Me.push.apply(Me,e)}function Fh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!xt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~Qa,t&=~mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function hc(e){if(Y&6)throw Error(z(327));Yn();var t=Ao(e,0);if(!(t&1))return Be(e,se()),null;var n=ri(e,t);if(e.tag!==0&&n===2){var r=El(e);r!==0&&(t=r,n=ql(e,r))}if(n===1)throw n=Ur,mn(e,0),Kt(e,t),Be(e,se()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fn(e,Me,Nt),Be(e,se()),null}function Ga(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(er=se()+500,fi&&on())}}function Sn(e){Vt!==null&&Vt.tag===0&&!(Y&6)&&Yn();var t=Y;Y|=1;var n=ot.transition,r=X;try{if(ot.transition=null,X=1,e)return e()}finally{X=r,ot.transition=n,Y=t,!(Y&6)&&on()}}function Ja(){Ke=Bn.current,ee(Bn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mh(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(La(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wo();break;case 3:Zn(),ee(Ae),ee(je),Fa();break;case 5:Aa(r);break;case 4:Zn();break;case 13:ee(re);break;case 19:ee(re);break;case 10:Oa(r.type._context);break;case 22:case 23:Ja()}n=n.return}if(ge=e,de=e=qt(e.current,null),we=Ke=t,pe=0,Ur=null,Qa=mi=kn=0,Me=zr=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}hn=null}return e}function Id(e,t){do{var n=de;try{if(Ra(),jo.current=qo,Zo){for(var r=oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Zo=!1}if(bn=0,he=fe=oe=null,kr=!1,Ar=0,Ya.current=null,n===null||n.return===null){pe=1,Ur=t,de=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=we,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var g=s,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=tc(l);if(y!==null){y.flags&=-257,nc(y,l,a,i,t),y.mode&1&&ec(i,g,t),t=y,s=g;var w=t.updateQueue;if(w===null){var b=new Set;b.add(s),t.updateQueue=b}else w.add(s);break e}else{if(!(t&1)){ec(i,g,t),Za();break e}s=Error(z(426))}}else if(ne&&a.mode&1){var _=tc(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),nc(_,l,a,i,t),Ta(qn(s,a));break e}}i=s=qn(s,a),pe!==4&&(pe=2),zr===null?zr=[i]:zr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=bd(i,s,t);Qs(i,m);break e;case 1:a=s;var d=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Jt===null||!Jt.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=kd(i,a,t);Qs(i,v);break e}}i=i.return}while(i!==null)}Bd(n)}catch(S){t=S,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Ad(){var e=ei.current;return ei.current=qo,e===null?qo:e}function Za(){(pe===0||pe===3||pe===2)&&(pe=4),ge===null||!(kn&268435455)&&!(mi&268435455)||Kt(ge,we)}function ri(e,t){var n=Y;Y|=2;var r=Ad();(ge!==e||we!==t)&&(Nt=null,mn(e,t));do try{Bh();break}catch(o){Id(e,o)}while(!0);if(Ra(),Y=n,ei.current=r,de!==null)throw Error(z(261));return ge=null,we=0,pe}function Bh(){for(;de!==null;)Fd(de)}function Uh(){for(;de!==null&&!pp();)Fd(de)}function Fd(e){var t=Kd(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?Bd(e):de=t,Ya.current=null}function Bd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Oh(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,de=null;return}}else if(n=Rh(n,t,Ke),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);pe===0&&(pe=5)}function fn(e,t,n){var r=X,o=ot.transition;try{ot.transition=null,X=1,Kh(e,t,n,r)}finally{ot.transition=o,X=r}return null}function Kh(e,t,n,r){do Yn();while(Vt!==null);if(Y&6)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Sp(e,i),e===ge&&(de=ge=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,Wd(Io,function(){return Yn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ot.transition,ot.transition=null;var l=X;X=1;var a=Y;Y|=4,Ya.current=null,$h(e,n),Od(n,e),ch(Ll),Fo=!!Dl,Ll=Dl=null,e.current=n,Ih(n),hp(),Y=a,X=l,ot.transition=i}else e.current=n;if(mo&&(mo=!1,Vt=e,ni=o),i=e.pendingLanes,i===0&&(Jt=null),xp(n.stateNode),Be(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ti)throw ti=!1,e=Jl,Jl=null,e;return ni&1&&e.tag!==0&&Yn(),i=e.pendingLanes,i&1?e===Zl?Er++:(Er=0,Zl=e):Er=0,on(),null}function Yn(){if(Vt!==null){var e=bu(ni),t=ot.transition,n=X;try{if(ot.transition=null,X=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,ni=0,Y&6)throw Error(z(331));var o=Y;for(Y|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var g=a[s];for(O=g;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:Sr(8,u,i)}var h=u.child;if(h!==null)h.return=u,O=h;else for(;O!==null;){u=O;var f=u.sibling,y=u.return;if(Td(u),u===g){O=null;break}if(f!==null){f.return=y,O=f;break}O=y}}}var w=i.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Sr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,O=m;break e}O=i.return}}var d=e.current;for(O=d;O!==null;){l=O;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,O=x;else e:for(l=d;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gi(9,a)}}catch(S){ae(a,a.return,S)}if(a===l){O=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,O=v;break e}O=a.return}}if(Y=o,on(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(ai,e)}catch{}r=!0}return r}finally{X=n,ot.transition=t}}return!1}function gc(e,t,n){t=qn(n,t),t=bd(e,t,1),e=Gt(e,t,1),t=De(),e!==null&&(Hr(e,1,t),Be(e,t))}function ae(e,t,n){if(e.tag===3)gc(e,e,n);else for(;t!==null;){if(t.tag===3){gc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=qn(n,e),e=kd(t,e,1),t=Gt(t,e,1),e=De(),t!==null&&(Hr(t,1,e),Be(t,e));break}}t=t.return}}function Wh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(we&n)===n&&(pe===4||pe===3&&(we&130023424)===we&&500>se()-Xa?mn(e,0):Qa|=n),Be(e,t)}function Ud(e,t){t===0&&(e.mode&1?(t=io,io<<=1,!(io&130023424)&&(io=4194304)):t=1);var n=De();e=Rt(e,t),e!==null&&(Hr(e,t,n),Be(e,n))}function Vh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ud(e,n)}function Hh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),Ud(e,n)}var Kd;Kd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,Ph(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,ne&&t.flags&1048576&&Yu(t,Yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Co(e,t),e=t.pendingProps;var o=Xn(t,je.current);Hn(t,n),o=Ua(null,t,r,e,o,n);var i=Ka();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(i=!0,Vo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,$a(t),o.updater=hi,t.stateNode=o,o._reactInternals=t,Fl(t,r,e,n),t=Kl(null,t,r,!0,i,n)):(t.tag=0,ne&&i&&Da(t),_e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Co(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Qh(r),e=ut(r,e),o){case 0:t=Ul(null,t,r,e,n);break e;case 1:t=ic(null,t,r,e,n);break e;case 11:t=rc(null,t,r,e,n);break e;case 14:t=oc(null,t,r,ut(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),Ul(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),ic(e,t,r,o,n);case 3:e:{if(jd(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,qu(e,t),Go(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=qn(Error(z(423)),t),t=lc(e,t,r,n,o);break e}else if(r!==o){o=qn(Error(z(424)),t),t=lc(e,t,r,n,o);break e}else for(We=Xt(t.stateNode.containerInfo.firstChild),Ve=t,ne=!0,pt=null,n=Ju(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===o){t=Ot(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return ed(t),e===null&&$l(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Tl(r,o)?l=null:i!==null&&Tl(r,i)&&(t.flags|=32),Ed(e,t),_e(e,t,l,n),t.child;case 6:return e===null&&$l(t),null;case 13:return Nd(e,t,n);case 4:return Ia(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jn(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),rc(e,t,r,o,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Z(Qo,r._currentValue),r._currentValue=l,i!==null)if(xt(i.value,l)){if(i.children===o.children&&!Ae.current){t=Ot(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Lt(-1,n&-n),s.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var u=g.pending;u===null?s.next=s:(s.next=u.next,u.next=s),g.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Il(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(z(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Il(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}_e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Hn(t,n),o=it(o),r=r(o),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,o=ut(r,t.pendingProps),o=ut(r.type,o),oc(e,t,r,o,n);case 15:return Sd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),Co(e,t),t.tag=1,Fe(r)?(e=!0,Vo(t)):e=!1,Hn(t,n),wd(t,r,o),Fl(t,r,o,n),Kl(null,t,r,!0,e,n);case 19:return Cd(e,t,n);case 22:return zd(e,t,n)}throw Error(z(156,t.tag))};function Wd(e,t){return xu(e,t)}function Yh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new Yh(e,t,n,r)}function qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qh(e){if(typeof e=="function")return qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ya)return 11;if(e===va)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")qa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ln:return xn(n.children,o,i,t);case xa:l=8,o|=8;break;case ul:return e=rt(12,n,t,o|2),e.elementType=ul,e.lanes=i,e;case dl:return e=rt(13,n,t,o),e.elementType=dl,e.lanes=i,e;case fl:return e=rt(19,n,t,o),e.elementType=fl,e.lanes=i,e;case eu:return xi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zc:l=10;break e;case qc:l=9;break e;case ya:l=11;break e;case va:l=14;break e;case Ft:l=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=rt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function xn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function xi(e,t,n,r){return e=rt(22,e,r,t),e.elementType=eu,e.lanes=n,e.stateNode={isHidden:!1},e}function Zi(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function qi(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function es(e,t,n,r,o,i,l,a,s){return e=new Xh(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$a(i),e}function Gh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vd(e){if(!e)return tn;e=e._reactInternals;e:{if(En(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Fe(n))return Vu(e,n,t)}return t}function Hd(e,t,n,r,o,i,l,a,s){return e=es(n,r,!0,e,o,i,l,a,s),e.context=Vd(null),n=e.current,r=De(),o=Zt(n),i=Lt(r,o),i.callback=t??null,Gt(n,i,o),e.current.lanes=o,Hr(e,o,r),Be(e,r),e}function yi(e,t,n,r){var o=t.current,i=De(),l=Zt(o);return n=Vd(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(o,t,l),e!==null&&(mt(e,o,l,i),Eo(e,o,l)),l}function oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ts(e,t){mc(e,t),(e=e.alternate)&&mc(e,t)}function Jh(){return null}var Yd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ns(e){this._internalRoot=e}vi.prototype.render=ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));yi(e,t,null,null)};vi.prototype.unmount=ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){yi(null,e,null,null)}),t[Pt]=null}};function vi(e){this._internalRoot=e}vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=zu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&ju(e)}};function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xc(){}function Zh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var g=oi(l);i.call(g)}}var l=Hd(t,r,e,0,null,!1,!1,"",xc);return e._reactRootContainer=l,e[Pt]=l.current,Rr(e.nodeType===8?e.parentNode:e),Sn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var g=oi(s);a.call(g)}}var s=es(e,0,!1,null,null,!1,!1,"",xc);return e._reactRootContainer=s,e[Pt]=s.current,Rr(e.nodeType===8?e.parentNode:e),Sn(function(){yi(t,s,n,r)}),s}function bi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=oi(l);a.call(s)}}yi(t,l,e,o)}else l=Zh(n,t,e,o,r);return oi(l)}ku=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(ka(t,n|1),Be(t,se()),!(Y&6)&&(er=se()+500,on()))}break;case 13:Sn(function(){var r=Rt(e,1);if(r!==null){var o=De();mt(r,e,1,o)}}),ts(e,1)}};Sa=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=De();mt(t,e,134217728,n)}ts(e,134217728)}};Su=function(e){if(e.tag===13){var t=Zt(e),n=Rt(e,t);if(n!==null){var r=De();mt(n,e,t,r)}ts(e,t)}};zu=function(){return X};Eu=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};kl=function(e,t,n){switch(t){case"input":if(gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=di(r);if(!o)throw Error(z(90));nu(r),gl(r,o)}}}break;case"textarea":ou(e,n);break;case"select":t=n.value,t!=null&&Un(e,!!n.multiple,t,!1)}};du=Ga;fu=Sn;var qh={usingClientEntryPoint:!1,Events:[Qr,On,di,cu,uu,Ga]},dr={findFiberByHostInstance:pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eg={bundleType:dr.bundleType,version:dr.version,rendererPackageName:dr.rendererPackageName,rendererConfig:dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gu(e),e===null?null:e.stateNode},findFiberByHostInstance:dr.findFiberByHostInstance||Jh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{ai=xo.inject(eg),zt=xo}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qh;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rs(t))throw Error(z(200));return Gh(e,t,null,n)};Qe.createRoot=function(e,t){if(!rs(e))throw Error(z(299));var n=!1,r="",o=Yd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=es(e,1,!1,null,null,n,!1,r,o),e[Pt]=t.current,Rr(e.nodeType===8?e.parentNode:e),new ns(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=gu(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return Sn(e)};Qe.hydrate=function(e,t,n){if(!wi(t))throw Error(z(200));return bi(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!rs(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Yd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Hd(t,null,e,1,n??null,o,!1,i,l),e[Pt]=t.current,Rr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new vi(t)};Qe.render=function(e,t,n){if(!wi(t))throw Error(z(200));return bi(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!wi(e))throw Error(z(40));return e._reactRootContainer?(Sn(function(){bi(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1};Qe.unstable_batchedUpdates=Ga;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wi(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return bi(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function Qd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qd)}catch(e){console.error(e)}}Qd(),Qc.exports=Qe;var tg=Qc.exports,Xd,yc=tg;Xd=yc.createRoot,yc.hydrateRoot;const ng="modulepreload",rg=function(e,t){return new URL(e,t).href},vc={},$t=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(g=>{if(g=rg(g,r),g in vc)return;vc[g]=!0;const u=g.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!r)for(let w=l.length-1;w>=0;w--){const b=l[w];if(b.href===g&&(!u||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${h}`))return;const y=document.createElement("link");if(y.rel=u?"stylesheet":ng,u||(y.as="script"),y.crossOrigin="",y.href=g,s&&y.setAttribute("nonce",s),document.head.appendChild(y),u)return new Promise((w,b)=>{y.addEventListener("load",w),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${g}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};function og(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:l}=e;let a,s;const g=async(h=!0)=>{await s};async function u(){if("serviceWorker"in navigator){if(a=await $t(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:h}},[],import.meta.url).then(({Workbox:h})=>new h("./sw.js",{scope:"./",type:"classic"})).catch(h=>{l==null||l(h)}),!a)return;a.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),a.addEventListener("installed",h=>{h.isUpdate||r==null||r()}),a.register({immediate:t}).then(h=>{i?i("./sw.js",h):o==null||o(h)}).catch(h=>{l==null||l(h)})}}return s=u(),g}const ta=(e,t)=>t.some(n=>e instanceof n);let wc,bc;function ig(){return wc||(wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lg(){return bc||(bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const na=new WeakMap,el=new WeakMap,ki=new WeakMap;function ag(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",l)},i=()=>{n(yn(e.result)),o()},l=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",l)});return ki.set(t,e),t}function sg(e){if(na.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",l),e.removeEventListener("abort",l)},i=()=>{n(),o()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",l),e.addEventListener("abort",l)});na.set(e,t)}let ra={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return na.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Gd(e){ra=e(ra)}function cg(e){return lg().includes(e)?function(...t){return e.apply(oa(this),t),yn(this.request)}:function(...t){return yn(e.apply(oa(this),t))}}function ug(e){return typeof e=="function"?cg(e):(e instanceof IDBTransaction&&sg(e),ta(e,ig())?new Proxy(e,ra):e)}function yn(e){if(e instanceof IDBRequest)return ag(e);if(el.has(e))return el.get(e);const t=ug(e);return t!==e&&(el.set(e,t),ki.set(t,e)),t}const oa=e=>ki.get(e);function dg(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const l=indexedDB.open(e,t),a=yn(l);return r&&l.addEventListener("upgradeneeded",s=>{r(yn(l.result),s.oldVersion,s.newVersion,yn(l.transaction),s)}),n&&l.addEventListener("blocked",s=>n(s.oldVersion,s.newVersion,s)),a.then(s=>{i&&s.addEventListener("close",()=>i()),o&&s.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),a}const fg=["get","getKey","getAll","getAllKeys","count"],pg=["put","add","delete","clear"],tl=new Map;function kc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(tl.get(t))return tl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=pg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||fg.includes(n)))return;const i=async function(l,...a){const s=this.transaction(l,o?"readwrite":"readonly");let g=s.store;return r&&(g=g.index(a.shift())),(await Promise.all([g[n](...a),o&&s.done]))[0]};return tl.set(t,i),i}Gd(e=>({...e,get:(t,n,r)=>kc(t,n)||e.get(t,n,r),has:(t,n)=>!!kc(t,n)||e.has(t,n)}));const hg=["continue","continuePrimaryKey","advance"],Sc={},ia=new WeakMap,Jd=new WeakMap,gg={get(e,t){if(!hg.includes(t))return e[t];let n=Sc[t];return n||(n=Sc[t]=function(...r){ia.set(this,Jd.get(this)[t](...r))}),n}};async function*mg(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const n=new Proxy(t,gg);for(Jd.set(n,t),ki.set(n,oa(t));t;)yield n,t=await(ia.get(n)||t.continue()),ia.delete(n)}function zc(e,t){return t===Symbol.asyncIterator&&ta(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&ta(e,[IDBIndex,IDBObjectStore])}Gd(e=>({...e,get(t,n,r){return zc(t,n)?mg:e.get(t,n,r)},has(t,n){return zc(t,n)||e.has(t,n)}}));const xg="nachumin-diary",yg=1,Kr="kv",vg="line-diary-entries-v1",et="rooms-v1",$e=e=>`room-data-v1:${e}`,wg=e=>`trash-v1:${e}:${Date.now()}`,To="declaration-v1",Wr="marks-v1",bg=["・","❤︎","🩷","💛","🩵","💜","✨","✔︎"],ii=e=>`donelog-v1:${e}`,Po=e=>`habits-v1:${e}`,Zd=e=>`habitlog-v1:${e}`,qd=e=>`habitseed-v1:${e}`,la=e=>`period-v1:${e}`,Ro=e=>`symptoms-v1:${e}`,ef=e=>`symptomlog-v1:${e}`,tf=e=>`symptomseed-v1:${e}`,aa=e=>`futurescript-v1:${e}`,hm=(e,t)=>`albumfull-v1:${e}:${t}`,gm=(e,t)=>`albumthumb-v1:${e}:${t}`,nl="albumseed-v1",kg="album-main",rl="nowseed-v1",Sg="now-main",ol="futureseed-v1",zg="future-main",Ec="startroom-v1",il="backup-v1",ue="diary-main",os=dg(xg,yg,{upgrade(e){e.objectStoreNames.contains(Kr)||e.createObjectStore(Kr)}});async function W(e){return(await os).get(Kr,e)}async function U(e,t){return(await os).put(Kr,t,e)}async function mm(e){return(await os).delete(Kr,e)}async function xm(){try{if(navigator.storage&&navigator.storage.estimate)return await navigator.storage.estimate()}catch{}return null}async function Eg(){try{navigator.storage&&navigator.storage.persist&&await navigator.storage.persist()}catch{}}async function jg(){const e=await W(et);if(e)return e;let t=await W(vg);if(typeof t=="string")try{t=JSON.parse(t)}catch{t=null}const n=t&&typeof t=="object"?t:{};await U($e(ue),n);const r=Object.keys(n).sort(),o=r[r.length-1],i=[{id:ue,type:"diary",name:"日記",emoji:"💗",createdAt:Date.now(),lastAt:o?Date.now():0,preview:o?n[o].text.split(`
`)[0].slice(0,40):""}];return await U(et,i),i}const Ng=5,Cg=Ng*60*60*1e3,nf=()=>new Date(Date.now()-Cg),Ye=e=>String(e).padStart(2,"0"),ht=e=>`${e.getFullYear()}-${Ye(e.getMonth()+1)}-${Ye(e.getDate())}`,Ce=e=>e.split("-").join("/"),ve=e=>{const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},rf=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ym=["S","M","T","W","T","F","S"],_g=e=>`${Ce(e)} ${rf[ve(e).getDay()]}`,yo=(e,t,n)=>1+(8-new Date(e,t-1,1).getDay())%7+(n-1)*7,Dg=e=>Math.floor(20.8431+.242194*(e-1980)-Math.floor((e-1980)/4)),Lg=e=>Math.floor(23.2488+.242194*(e-1980)-Math.floor((e-1980)/4)),ll={};function Tg(e){if(ll[e])return ll[e];const t={},n=(r,o,i)=>{t[`${e}-${Ye(r)}-${Ye(o)}`]=i};n(1,1,"元日"),n(1,yo(e,1,2),"成人の日"),n(2,11,"建国記念の日"),n(2,23,"天皇誕生日"),n(3,Dg(e),"春分の日"),n(4,29,"昭和の日"),n(5,3,"憲法記念日"),n(5,4,"みどりの日"),n(5,5,"こどもの日"),n(7,yo(e,7,3),"海の日"),n(8,11,"山の日"),n(9,yo(e,9,3),"敬老の日"),n(9,Lg(e),"秋分の日"),n(10,yo(e,10,2),"スポーツの日"),n(11,3,"文化の日"),n(11,23,"勤労感謝の日");for(const r of Object.keys(t)){const o=ve(r),i=new Date(o);i.setDate(i.getDate()+1);const l=new Date(o);l.setDate(l.getDate()+2),t[ht(l)]&&!t[ht(i)]&&i.getDay()!==0&&(t[ht(i)]="国民の休日")}for(const r of Object.keys({...t})){if(ve(r).getDay()!==0)continue;const o=ve(r);do o.setDate(o.getDate()+1);while(t[ht(o)]);t[ht(o)]="振替休日"}return ll[e]=t,t}const Pg=e=>!!Tg(Number(e.slice(0,4)))[e],Rg=e=>{if(Pg(e))return"sun";const t=ve(e).getDay();return t===0?"sun":t===6?"sat":""},vm=e=>"¥"+Math.round(Number(e)||0).toLocaleString("ja-JP"),wm=e=>e.slice(0,7),bm=(e,t)=>{const[n,r]=e.split("-");return(t&&Number(n)===t?"":`${n}年`)+`${Number(r)}月`},ft=()=>ht(nf()),jc=()=>{const e=nf();return e.setDate(e.getDate()-1),ht(e)},of=()=>{const e=new Date;return`${e.getHours()}:${Ye(e.getMinutes())}`},Og=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),km=e=>String(e||"").replace(/[\/\\:*?"<>| -]/g,"_").replace(/\s+/g," ").trim()||"room";async function Mg(e){try{return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.top="0",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}const qe=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36),Sm=e=>Object.keys(e).sort().map(t=>`🩷${_g(t)}🩷 ${e[t].time}
${e[t].text}`).join(`

──────────

`),zm=e=>{const t={},n=e.split(/\n*─{3,}\n*/);for(const r of n){const o=r.trim();if(!o)continue;const i=o.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*(?:[（(]?(?:[A-Za-z]{3}|[日月火水木金土])[)）]?)?\s*🩷?\s*(\d{1,2}:\d{2})?\s*\n?([\s\S]*)$/u);if(!i)continue;const l=`${i[1]}-${Ye(Number(i[2]))}-${Ye(Number(i[3]))}`,a=i[5].trim();a&&(t[l]={text:a,time:i[4]||"0:00"})}return t},Em=(e,t)=>{const n=[];let r="";for(const o of e)o.dateKey!==r&&(r=o.dateKey,n.length&&n.push(""),n.push(`🩷${Ce(r)}🩷`)),n.push(`${o.time?o.time+" ":""}${t(o.memberId)}「${o.text}」`);return n.join(`
`)},jm=e=>{const t=[];let n=ft(),r=null;const o=()=>{if(!r)return;let i=r.lines.join(`
`).trim();i.endsWith("」")&&(i=i.slice(0,-1)),i&&t.push({dateKey:r.dateKey,name:r.name,time:r.time,text:i}),r=null};for(const i of e.split(`
`)){const l=i.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(l){o(),n=`${l[1]}-${Ye(Number(l[2]))}-${Ye(Number(l[3]))}`;continue}if(r)r.lines.push(i);else{const s=i.match(/^(?:(\d{1,2}:\d{2})\s+)?(.+?)「([\s\S]*)$/u);if(!s)continue;r={dateKey:n,name:s[2].trim(),time:s[1]||"",lines:[s[3]]}}const a=r.lines[r.lines.length-1].trimEnd();a.endsWith("」")&&(r.lines[r.lines.length-1]=a,o())}return o(),t},$g=[{key:"morning",label:"朝",emoji:"🌅"},{key:"noon",label:"昼",emoji:"☀️"},{key:"night",label:"夜",emoji:"🌙"}],Nm=()=>{const e=new Date().getHours();return e>=5&&e<11?"morning":e>=11&&e<17?"noon":"night"},Cm=(e,t)=>{var i;const n=l=>{var a;return((a=t.find(s=>s.id===l))==null?void 0:a.name)||"？"},r={};for(const l of e)(r[i=l.dateKey]||(r[i]={morning:[],noon:[],night:[]}))[l.slot].push(l);const o=[];for(const l of Object.keys(r).sort()){const a=[];for(const s of $g){const g=r[l][s.key];if(!g.length)continue;const u=g.map(h=>n(h.memberId)+(h.memo&&h.memo.trim()?`(${h.memo.trim()})`:"")).join("・");a.push(`${s.emoji}${s.label}:${u}`)}a.length&&o.push(`🩷${Ce(l)}🩷 ${a.join(" / ")}`)}return o.join(`
`)},_m=e=>{const t=[],n=r=>r.includes("朝")?"morning":r.includes("昼")?"noon":r.includes("夜")?"night":null;for(const r of e.split(`
`)){const o=r.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(.*)$/u);if(!o)continue;const i=`${o[1]}-${Ye(Number(o[2]))}-${Ye(Number(o[3]))}`,l=o[4];if(l.trim())for(const a of l.split("/")){const s=a.indexOf(":"),g=a.indexOf("："),u=s===-1?g:g===-1?s:Math.min(s,g);if(u===-1)continue;const h=n(a.slice(0,u));if(!h)continue;const f=a.slice(u+1);for(const y of f.split("・")){const w=y.trim().match(/^(.+?)(?:[(（]([\s\S]*)[)）])?$/u);if(!w)continue;const b=w[1].trim();b&&t.push({dateKey:i,slot:h,name:b,memo:(w[2]||"").trim()})}}}return t},Dm=e=>{var n;const t={};for(const r of e)(t[n=r.dateKey]||(t[n]={morning:[],noon:[],night:[]}))[r.slot].push(r);return t},Lm=(e,t)=>{let n=t;for(const l of e)l.dateKey<n&&(n=l.dateKey);ve(t);const r=ve(t);r.setDate(r.getDate()-34);const o=ve(n)<r?ve(n):r,i=[];for(let l=new Date(o);ht(l)<=t;l.setDate(l.getDate()+1))i.push(ht(l));return i},Tm=e=>{const t=[];for(const n of String(e||"").split(`
`)){let r=n.trim();r&&(/^🩷?\s*\d{4}[/-]\d{1,2}[/-]\d{1,2}\s*🩷?\s*$/u.test(r)||(r=r.replace(/^[★☆☐☑✓□■●○・\-*+•‣▪️\s]+/u,"").trim(),r&&t.push(r)))}return t},Pm=e=>{const t=[];let n=ft();for(const r of e.split(`
`)){const o=r.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(o){n=`${o[1]}-${Ye(Number(o[2]))}-${Ye(Number(o[3]))}`;continue}const i=r.match(/^\s*(★\s*)?([☑☐✓])\s+(.+)$/u);if(!i)continue;const l=!!i[1],a=i[2]==="☑"||i[2]==="✓",s=i[3].trim();s&&t.push({dateKey:n,text:s,done:a,important:l})}return t},Ig="🩷 できたこと",Rm=e=>{const t=(e||"").split(`
`),n=t.indexOf(Ig);if(n===-1)return{text:e||"",items:[]};const r=[];let o=n+1;for(;o<t.length&&t[o].startsWith("☑ ");){const a=t[o].match(/^☑ (.*?)(?: \((\d{1,2}:\d{2})\))?$/u);a&&r.push({text:a[1],time:a[2]||""}),o++}let i=n;return i-1>=0&&t[i-1]===""&&(i-=1),t.splice(i,o-i),{text:t.join(`
`).replace(/\n{3,}/g,`

`).replace(/\s+$/,""),items:r}},lf="🎬 今日のコマ: ",Ag=e=>(e||"").split(`
`).filter(t=>!t.startsWith(lf)).join(`
`).replace(/^\n+/,""),Fg=(e,t)=>{const n=Ag(e).trim(),r=lf+t;return n?`${r}

${n}`:r},is=(e,t)=>{const n=ve(e);return n.setDate(n.getDate()+t),ht(n)},sa=(e,t)=>Math.round((ve(t)-ve(e))/864e5),Nc=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(String(e||""));if(!t)return 99999;const n=Number(t[1]);return(n<5?n+24:n)*60+Number(t[2])},Om=(e,t)=>{const n=ve(e),r=n.getDate();n.setDate(1),n.setMonth(n.getMonth()+t);const o=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return n.setDate(Math.min(r,o)),ht(n)},Mm=e=>{if(e<12)return`${e}ヶ月後`;const t=Math.floor(e/12),n=e%12;return n===0?`${t}年後`:n===6?`${t}年半後`:`${t}年${n}ヶ月後`},$m=e=>{const t=[...new Set(e||[])].sort();if(!t.length)return[];const n=[];for(const o of t){const i=n[n.length-1];i&&is(i.end,1)===o?i.end=o:n.push({start:o,end:o})}return n.map((o,i)=>({start:o.start,end:o.end,length:sa(o.start,o.end)+1,cycle:i<n.length-1?sa(o.start,n[i+1].start):null,ongoing:i===n.length-1})).reverse()},Im=(e,t,n=3)=>{const r=e.filter(s=>s.cycle!=null).map(s=>s.cycle);if(!r.length||!e.length)return null;const o=r.slice(0,n),i=Math.round(o.reduce((s,g)=>s+g,0)/o.length),l=e[0].start,a=is(l,i);return{next:a,avg:i,daysLeft:sa(t,a),min:Math.min(...r),max:Math.max(...r),count:r.length}},Bg={morning:"🌅",noon:"☀️",night:"🌙"},al="nachumin-diary-backup.json";function Ug(e){if(!e||typeof e!="object"||Array.isArray(e))return"バックアップの形式が読めませんでした 🥺";if(e.app!=="nachumin-diary")return"これは Nachumin Lifelog のバックアップファイルではないみたい 🥺";if(!Array.isArray(e.rooms))return"ルームの情報が入っていません。ファイルが壊れているかも 🥺";if(e.rooms.some(t=>!t||typeof t!="object"||!t.id||!t.type))return"ルームの形式が壊れています 🥺";if(e.data!=null&&(typeof e.data!="object"||Array.isArray(e.data)))return"ルームの中身の形式が壊れています 🥺";for(const t of["doneLogs","habits","habitLogs","habitSeeds","periods","symptoms","symptomLogs","symptomSeeds","futureScripts"])if(e[t]!=null&&(typeof e[t]!="object"||Array.isArray(e[t])))return`${t} の形式が壊れています 🥺`;return null}function Kg(e){const t={rooms:(e.rooms||[]).length,items:0},n=r=>r==="talk"?"messages":r==="todo"?"todos":r==="darelog"?"records":r==="expense"?"expenses":r==="challenge"?"challenges":r==="future"?"opened":r==="now"?"posts":r==="album"?"pages":null;for(const r of e.rooms||[]){const o=e.data?e.data[r.id]:void 0;if(!o)continue;const i=n(r.type);t.items+=i?(o[i]||[]).length:Object.keys(o).length}return t}function sl(e,t){var i,l;if(e.type==="talk"){const a=t&&t.messages||[],s=a[a.length-1];return{previewName:s?(u=>{var h;return((h=(e.members||[]).find(f=>f.id===u))==null?void 0:h.name)||""})(s.memberId):"",preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="todo"){const a=t&&t.todos||[],s=a[a.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?`${s.done?"☑":"☐"} ${s.text.split(`
`)[0]}`.slice(0,40):"",todoOpen:a.filter(g=>!g.done&&!g.deferred).length,lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="darelog"){const a=t&&t.records||[],s=a[a.length-1],g=u=>{var h;return((h=(e.members||[]).find(f=>f.id===u))==null?void 0:h.name)||""};return{preview:s?`${Bg[s.slot]||""} ${g(s.memberId)}`.trim():"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="challenge"){const a=t&&t.challenges||[],s=[...a].sort((g,u)=>{var h,f;return(((h=u.records)==null?void 0:h.length)||0)-(((f=g.records)==null?void 0:f.length)||0)})[0];return{preview:s?`${s.emoji||"🏁"} ${s.name} ${((i=s.records)==null?void 0:i.length)||0}/${s.target}`:"",lastAt:e.lastAt||(a.length?Date.now():0)}}if(e.type==="expense"){const a=t&&t.expenses||[],s=a[a.length-1];return{preview:s?`${(u=>{var h;return((h=(e.categories||[]).find(f=>f.id===u))==null?void 0:h.name)||""})(s.categoryId)} ¥${(s.amount||0).toLocaleString("ja-JP")}`:"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="album"){const a=t&&t.pages||[];return{preview:a.length?`${a.length}枚`:"",lastAt:e.lastAt||0}}if(e.type==="now"){const s=[...t&&t.posts||[]].sort((g,u)=>(g.at||0)-(u.at||0)).pop();return{preview:s&&typeof s.text=="string"?`${s.time} ${s.text.split(`
`)[0]}`.slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="future"){const a=t&&t.opened||[],s=a[a.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}const n=t&&typeof t=="object"?t:{},r=Object.keys(n).sort(),o=r[r.length-1];return{preview:typeof((l=n[o])==null?void 0:l.text)=="string"?n[o].text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(o?Date.now():0)}}async function Cc(){const e=await W(et)||[],t={};for(const y of e){const w=await W($e(y.id));w!==void 0&&(t[y.id]=w)}const n=await W(To)||null,r={},o={},i={},l={},a={},s={},g={},u={},h={};for(const y of e){const w=await W(ii(y.id));w&&Object.keys(w).length&&(r[y.id]=w);const b=await W(Po(y.id));Array.isArray(b)&&b.length&&(o[y.id]=b);const _=await W(Zd(y.id));_&&Object.keys(_).length&&(i[y.id]=_),await W(qd(y.id))&&(l[y.id]=!0);const m=await W(la(y.id));Array.isArray(m==null?void 0:m.days)&&m.days.length&&(a[y.id]=m.days);const d=await W(Ro(y.id));Array.isArray(d)&&d.length&&(s[y.id]=d);const x=await W(ef(y.id));x&&Object.keys(x).length&&(g[y.id]=x),await W(tf(y.id))&&(u[y.id]=!0);const v=await W(aa(y.id));Array.isArray(v)&&v.length&&(h[y.id]=v)}const f=await W(Wr)||null;return{app:"nachumin-diary",version:1,exportedAt:new Date().toISOString(),rooms:e,data:t,declaration:n,doneLogs:r,habits:o,habitLogs:i,habitSeeds:l,periods:a,symptoms:s,symptomLogs:g,symptomSeeds:u,futureScripts:h,marks:f}}const Wg=e=>e.map((t,n)=>[t,n]).sort((t,n)=>t[0].dateKey<n[0].dateKey?-1:t[0].dateKey>n[0].dateKey?1:t[1]-n[1]).map(([t])=>t);async function Vg(e){var s,g;if(!e||e.app!=="nachumin-diary"||!Array.isArray(e.rooms))throw new Error("invalid-backup");const t=await W(et)||[],n=new Map(t.map(u=>[u.id,{...u}]));let r=0,o=0;for(const u of e.rooms){const h=e.data?e.data[u.id]:void 0,f=u.type==="talk"?"messages":u.type==="todo"?"todos":u.type==="darelog"?"records":u.type==="expense"?"expenses":u.type==="challenge"?"challenges":u.type==="future"?"opened":u.type==="now"?"posts":u.type==="album"?"pages":null,y=b=>f==="messages"?`${b.dateKey} ${b.memberId} ${b.text}`:f==="todos"?`${b.dateKey} ${b.text}`:f==="records"?`${b.dateKey} ${b.slot} ${b.memberId}`:b.id;if(!n.has(u.id)){h!==void 0&&await U($e(u.id),h),n.set(u.id,{...u,...sl(u,h)}),r+=1,f?o+=((s=h==null?void 0:h[f])==null?void 0:s.length)||0:o+=h?Object.keys(h).length:0;continue}const w=n.get(u.id);if(f){const b=await W($e(u.id))||{},_=b[f]||[],m=new Set(_.map(y));let d=_.slice();for(const S of(h==null?void 0:h[f])||[])m.has(y(S))||(m.add(y(S)),d.push(S),o+=1);f==="messages"&&(d=Wg(d));const x={...b,[f]:d};for(const S of Object.keys(h||{}))S!==f&&x[S]===void 0&&(x[S]=h[S]);await U($e(u.id),x);let v={...w};if(u.type==="talk"||u.type==="darelog"){const S=w.members||[],N=new Set(S.map(D=>D.id));v.members=S.concat((u.members||[]).filter(D=>!N.has(D.id)))}n.set(u.id,{...v,...sl(v,x)})}else{const _={...await W($e(u.id))||{}};for(const m of Object.keys(h||{}))_[m]||(_[m]=h[m],o+=1);await U($e(u.id),_),n.set(u.id,{...w,...sl(w,_)})}}if(e.doneLogs)for(const[u,h]of Object.entries(e.doneLogs)){const f=ii(u),w={...await W(f)||{}};for(const[b,_]of Object.entries(h)){const m=(w[b]||[]).slice();for(const d of _)m.some(x=>x.text===d.text&&x.time===d.time)||m.push(d);w[b]=m}await U(f,w)}const i={};if(e.habits)for(const[u,h]of Object.entries(e.habits)){if(!Array.isArray(h))continue;const f=await W(Po(u));if(f===void 0){await U(Po(u),h);continue}const y=Array.isArray(f)?f:[],w=new Set(y.map(d=>d.id)),b=new Map(y.filter(d=>(d.name||"").trim()).map(d=>[d.name.trim(),d.id])),_=y.slice(),m={};for(const d of h){if(!d||!d.id)continue;if(w.has(d.id)){m[d.id]=d.id;continue}const x=(d.name||"").trim(),v=x?b.get(x):null;if(v){m[d.id]=v;continue}_.push(d),w.add(d.id),x&&b.set(x,d.id),m[d.id]=d.id}_.length!==y.length&&await U(Po(u),_),i[u]=m}if(e.habitSeeds)for(const u of Object.keys(e.habitSeeds))e.habitSeeds[u]&&await U(qd(u),!0);if(e.periods)for(const[u,h]of Object.entries(e.periods)){if(!Array.isArray(h))continue;const f=((g=await W(la(u)))==null?void 0:g.days)||[];await U(la(u),{days:[...new Set([...f,...h])].sort()})}const l={};if(e.symptoms)for(const[u,h]of Object.entries(e.symptoms)){if(!Array.isArray(h))continue;const f=await W(Ro(u));if(f===void 0){await U(Ro(u),h);continue}const y=Array.isArray(f)?f:[],w=new Set(y.map(d=>d.id)),b=new Map(y.filter(d=>(d.name||"").trim()).map(d=>[d.name.trim(),d.id])),_=y.slice(),m={};for(const d of h){if(!d||!d.id)continue;if(w.has(d.id)){m[d.id]=d.id;continue}const x=(d.name||"").trim(),v=x?b.get(x):null;if(v){m[d.id]=v;continue}_.push(d),w.add(d.id),x&&b.set(x,d.id),m[d.id]=d.id}_.length!==y.length&&await U(Ro(u),_),l[u]=m}if(e.symptomSeeds)for(const u of Object.keys(e.symptomSeeds))e.symptomSeeds[u]&&await U(tf(u),!0);if(e.futureScripts)for(const[u,h]of Object.entries(e.futureScripts)){if(!Array.isArray(h)||!h.length)continue;const f=await W(aa(u))||[],y=new Set(f.map(b=>b.id)),w=h.filter(b=>b&&b.id&&!y.has(b.id));w.length&&(await U(aa(u),[...f,...w]),o+=w.length)}if(e.symptomLogs)for(const[u,h]of Object.entries(e.symptomLogs)){const f=ef(u),w={...await W(f)||{}},b=l[u]||{};for(const[_,m]of Object.entries(h)){const d=(m||[]).map(x=>b[x]||x);w[_]=[...new Set([...w[_]||[],...d])]}await U(f,w)}if(e.habitLogs)for(const[u,h]of Object.entries(e.habitLogs)){const f=i[u]||{},y=Zd(u),b={...await W(y)||{}};for(const[_,m]of Object.entries(h)){const d=(m||[]).map(x=>f[x]||x);b[_]=[...new Set([...b[_]||[],...d])]}await U(y,b)}if(Array.isArray(e.marks)&&e.marks.length){const u=await W(Wr);(!Array.isArray(u)||!u.length)&&await U(Wr,e.marks)}const a=[...n.values()];return await U(et,a),{addedRooms:r,addedItems:o,rooms:a}}const un="M12 20.5s-7.5-5-7.5-10a4.2 4.2 0 0 1 7.5-2.6A4.2 4.2 0 0 1 19.5 10.5c0 5-7.5 10-7.5 10z",Hg=`<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>
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
</svg>`,vo=`url("data:image/svg+xml,${encodeURIComponent(Hg)}")`,Am=["#ffffff","#fff5fa","#ffd9ec","#ffc4e1","#ff9fd0","#e0629f","#d4f0ff","#c9f5f2","#d9ffe3","#e8dcff","#f0f0f0","#2b2430"],Fm=["#9C27B0","#E91E63","#FFEB3B","#2196F3","#4CAF50","#FF9800","#F44336","#00BCD4","#3F51B5","#8BC34A","#FF4081","#009688"],ca=["#ff6fb2","#c58cff","#6fb8ff","#5fd6b0","#ffcf5f","#ff9d6f","#7ed957","#ff8fa8"],mr=ca[0],_c=e=>{const t=e||mr;return{background:`linear-gradient(163deg, #ffffff 0%, #fff6fb 40%, ${t}2e 100%)`,boxShadow:`0 6px 13px ${t}42, 0 2px 0 ${t}66, inset 0 1.5px 0 #ffffff`,borderColor:`${t}55`}},Bm=[{key:"auto",label:"自動",value:null},{key:"white",label:"白",value:"#ffffff"},{key:"black",label:"黒",value:"#222028"},{key:"pink",label:"ピンク",value:"#ff2d87"}],Yg=e=>{const t=String(e).replace("#","");if(t.length<6)return"#4a3140";const n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),o=parseInt(t.slice(4,6),16);return .299*n+.587*r+.114*o<140?"#fff5fa":"#4a3140"},Um=e=>e&&e.textColor?e.textColor:Yg(e&&e.color),Dc=`
  * { box-sizing: border-box; }
  .app {
    height: 100vh; height: 100dvh;
    display: flex; flex-direction: column;
    font-family: "Hiragino Maru Gothic ProN", "Hiragino Kaku Gothic ProN",
      "Yu Gothic", sans-serif;
    background: ${vo} #f6bedd; background-size: 240px 240px;
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
    background: ${vo} #f6bedd; background-size: 240px 240px;
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
    background: ${vo} #f6bedd; background-size: 240px 240px;
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
    background: ${vo} #f6bedd; background-size: 240px 240px;
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
`;function Qg(e,t=500){const n=j.useRef({}),r=l=>{if(typeof e!="function"||l.touches&&l.touches.length!==1)return;const a=l.touches?l.touches[0]:l;n.current.x=a.clientX,n.current.y=a.clientY,n.current.fired=!1,clearTimeout(n.current.timer),n.current.timer=setTimeout(()=>{n.current.fired=!0;try{navigator.vibrate&&navigator.vibrate(15)}catch{}e({x:n.current.x,y:n.current.y})},t)},o=l=>{const a=l.touches?l.touches[0]:l;(Math.abs(a.clientX-n.current.x)>10||Math.abs(a.clientY-n.current.y)>10)&&clearTimeout(n.current.timer)},i=()=>clearTimeout(n.current.timer);return{onTouchStart:r,onTouchMove:o,onTouchEnd:i,onTouchCancel:i,onContextMenu:l=>{typeof e=="function"&&(l.preventDefault(),e({x:l.clientX,y:l.clientY}))},onClickCapture:l=>{n.current.fired&&(l.stopPropagation(),l.preventDefault(),n.current.fired=!1)}}}function Lc({onLongPress:e,longPressMs:t,children:n,...r}){const o=Qg(e,t);return c.jsx("div",{...r,...o,children:n})}function Xg({x:e,y:t,onCopy:n,onEdit:r,onDelete:o,onClose:i,top:l,extra:a}){const u=j.useRef(null),[h,f]=j.useState(null);return j.useLayoutEffect(()=>{const y=u.current;if(!y)return;const w=y.offsetHeight,b=window.innerWidth,_=window.innerHeight,m=Math.max(8,Math.min(e-168/2,b-168-8));let d=t+8;d+w>_-8&&(d=t-8-w),d<8&&(d=Math.max(8,_-w-8)),f({left:m,top:d})},[e,t,l,a,r,o]),c.jsx("div",{className:"ctx-overlay",onClick:i,onContextMenu:y=>y.preventDefault(),children:c.jsxs("div",{ref:u,className:"ctx-menu",style:{left:h?h.left:Math.max(8,Math.min(e-168/2,window.innerWidth-168-8)),top:h?h.top:t+8,width:168,maxHeight:`calc(100vh - ${8*2}px)`,overflowY:"auto",visibility:h?"visible":"hidden"},onClick:y=>y.stopPropagation(),children:[(l||[]).map((y,w)=>c.jsx("button",{className:"ctx-item ctx-top",onClick:y.onClick,children:y.label},w)),c.jsx("button",{className:"ctx-item",onClick:n,children:"📋 コピー"}),r&&c.jsx("button",{className:"ctx-item",onClick:r,children:"✏️ 編集"}),(a||[]).map((y,w)=>c.jsx("button",{className:"ctx-item",onClick:y.onClick,children:y.label},w)),o&&c.jsx("button",{className:"ctx-item ctx-del",onClick:o,children:"🗑 削除"})]})})}function af({message:e,confirmLabel:t="削除する",onConfirm:n,onCancel:r}){return c.jsx("div",{className:"overlay confirm-over",onClick:r,children:c.jsxs("div",{className:"panel confirm-panel",onClick:o=>o.stopPropagation(),children:[c.jsx("div",{className:"confirm-msg",children:e}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-close",onClick:r,children:"キャンセル"}),c.jsx("button",{className:"p-del arm",onClick:n,children:t})]})]})})}function Gg(e=!0){const[t,n]=j.useState(0);return j.useEffect(()=>{if(!e||!window.visualViewport){n(0);return}const r=window.visualViewport,o=()=>n(Math.max(0,window.innerHeight-r.height-r.offsetTop));return o(),r.addEventListener("resize",o),r.addEventListener("scroll",o),()=>{r.removeEventListener("resize",o),r.removeEventListener("scroll",o)}},[e]),t}const Tc=/https?:\/\/[^\s　-〿぀-ヿ一-鿿＀-￯]+/g,Jg=/[.,;:、。）)\]】」』"'！？!?]+$/;function Pc(e,t=n=>n){if(!e)return e;const n=[];let r=0,o=0,i;for(Tc.lastIndex=0;i=Tc.exec(e);){let l=i[0];const a=(l.match(Jg)||[""])[0];a&&(l=l.slice(0,l.length-a.length)),l&&(i.index>r&&n.push(c.jsx(j.Fragment,{children:t(e.slice(r,i.index))},o++)),n.push(c.jsx("a",{className:"body-link",href:l,target:"_blank",rel:"noopener noreferrer",onClick:s=>s.stopPropagation(),children:l},o++)),r=i.index+l.length)}return n.length?(r<e.length&&n.push(c.jsx(j.Fragment,{children:t(e.slice(r))},o++)),n):t(e)}const Rc=150,Zg=(e,t)=>Nc(e.time)-Nc(t.time)||(e.at||0)-(t.at||0),qg=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(e||"");return t?`${t[1].padStart(2,"0")}:${t[2]}`:""},em=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(e||"");return t?`${Number(t[1])}:${t[2]}`:""};function tm({room:e,onBack:t,onMeta:n,showToast:r,pinned:o,onOpenDiary:i}){const[l,a]=j.useState([]),[s,g]=j.useState(!1),[u,h]=j.useState(""),[f,y]=j.useState(()=>jc()),[w,b]=j.useState(null),[_,m]=j.useState(null),[d,x]=j.useState(null),[v,S]=j.useState(null),[N,D]=j.useState(76),[L,K]=j.useState(e.nowView==="gallery"?"gallery":"time"),[M,J]=j.useState(Number(e.nowCols)===3?3:2),[Ne,ce]=j.useState(Rc),Pe=j.useRef(null),Ge=j.useRef(null),ke=j.useRef(null),at=Gg(!_),T=ft();j.useEffect(()=>{(async()=>{try{const E=await W($e(e.id));E&&Array.isArray(E.posts)&&a(E.posts)}catch{}finally{g(!0)}})()},[e.id]),j.useEffect(()=>{if(!Ge.current||typeof ResizeObserver>"u")return;const E=new ResizeObserver(()=>Ge.current&&D(Ge.current.offsetHeight));return E.observe(Ge.current),()=>E.disconnect()},[_]);const I=E=>{const A=Pe.current;A&&A.scrollTo({top:A.scrollHeight,behavior:E?"smooth":"auto"})};j.useEffect(()=>{s&&L==="time"&&I(!1)},[s,L]);const F=async E=>{a(E);try{await U($e(e.id),{posts:E});const A=[...E].sort((V,wt)=>(V.at||0)-(wt.at||0)).pop();n({preview:A?`${A.time} ${A.text.split(`
`)[0]}`.slice(0,40):"",lastAt:Date.now()})}catch{r("保存に失敗しました。ストレージを確認してね")}},G=()=>{const E=u.trim();if(!E)return;const A={id:qe(),dateKey:ft(),time:of(),text:E,at:Date.now()};F([...l,A]),h(""),ke.current&&(ke.current.style.height="auto"),S(A.id),setTimeout(()=>S(null),900),L==="time"&&requestAnimationFrame(()=>I(!0))},le=E=>{E.key==="Enter"&&!E.shiftKey&&!E.nativeEvent.isComposing&&E.keyCode!==229&&(E.preventDefault(),G())},st=E=>{h(E.target.value);const A=E.target;A.style.height="auto",A.style.height=Math.min(A.scrollHeight,120)+"px"},Je=()=>{const E=_.text.trim(),A=em(_.time);if(!E){r("なにしてたか書いてね");return}if(!A){r("時刻を入れてね");return}F(l.map(V=>V.id===_.id?{...V,text:E,time:A}:V)),m(null)},jt=E=>{const A=l.find(wt=>wt.id===E);if(!A)return;const V=A.text.length>20?A.text.slice(0,20)+"…":A.text;x({message:`${A.time}「${V}」を削除しますか？`,onConfirm:()=>{F(l.filter(wt=>wt.id!==E)),x(null),m(null)}})},me={};for(const E of l)(me[E.dateKey]=me[E.dateKey]||[]).push(E);const Ue=Object.keys(me).sort(),xe=Ue.filter(E=>E>=f);xe.includes(T)||xe.push(T);const jn=Ue.filter(E=>E<f).length,Nn=(me[T]||[]).length,Gr=E=>{const A=`${Ce(E).slice(5)} ${rf[ve(E).getDay()]}`;return E===T?`今日 ${A}`:E===jc()?`昨日 ${A}`:A},yt=E=>{K(E),n({nowView:E})},ln=E=>{J(E),n({nowCols:E})},an=[...l].sort((E,A)=>E.dateKey<A.dateKey?1:E.dateKey>A.dateKey?-1:(A.at||0)-(E.at||0)),sn=an.slice(0,Ne),vt=w&&l.find(E=>E.id===w.id);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"hd",children:[c.jsx("button",{className:"back-btn","aria-label":"もどる",onClick:t,children:"‹"}),c.jsx("span",{style:{fontSize:20},children:e.emoji}),c.jsxs("div",{style:{minWidth:0},children:[c.jsx("div",{className:"hd-title",children:e.name}),c.jsx("div",{className:"hd-sub",children:s?`今日 ${Nn}件`:"Nachumin Lifelog"})]}),c.jsx("button",{className:"now-view"+(L==="gallery"?" on":""),"aria-label":L==="gallery"?"時系列で見る":"ギャラリーで見る",onClick:()=>yt(L==="gallery"?"time":"gallery"),style:{marginLeft:"auto"},children:L==="gallery"?"🕐":"▦"}),i&&c.jsxs("button",{className:"now-to-diary",onClick:i,"aria-label":"日記をひらく",style:{marginLeft:0},children:[c.jsx("span",{className:"now-to-diary-ic",children:"💗"}),"日記",c.jsx("span",{className:"now-to-diary-arw",children:"›"})]})]}),o,L==="gallery"?c.jsxs("div",{className:"now-gal-scroll",style:{paddingBottom:N+12},children:[c.jsxs("div",{className:"now-gal-bar",children:[c.jsxs("span",{className:"now-gal-n",children:[an.length,"件"]}),c.jsx("div",{className:"now-gal-cols",children:[2,3].map(E=>c.jsxs("button",{className:"now-gal-col"+(M===E?" on":""),"aria-label":`${E}列にする`,onClick:()=>ln(E),children:[E,"列"]},E))})]}),s&&an.length===0&&c.jsx("div",{className:"now-empty",children:"下からつぶやいてね🕐"}),c.jsx("div",{className:"now-gal cols-"+M,children:sn.map(E=>c.jsx(Lc,{className:"now-card"+(v===E.id?" pop":""),onLongPress:A=>b({id:E.id,x:A.x,y:A.y}),children:Pc(E.text)},E.id))}),an.length>sn.length&&c.jsxs("button",{className:"now-more",onClick:()=>ce(E=>E+Rc),children:["↓ もっと見る（あと",an.length-sn.length,"件）"]})]}):c.jsxs("div",{className:"chat now-scroll",ref:Pe,style:{paddingBottom:N+12},children:[jn>0&&c.jsxs("button",{className:"now-more",onClick:()=>y(E=>is(E,-7)),children:["↑ 前の日を見る（あと",jn,"日ぶん）"]}),xe.map(E=>{const A=(me[E]||[]).slice().sort(Zg);return c.jsxs(j.Fragment,{children:[c.jsxs("div",{className:"now-day"+(E===T?" today":""),children:[c.jsx("span",{className:"now-day-l "+Rg(E),children:Gr(E)}),A.length>0&&c.jsx("span",{className:"now-day-n",children:A.length})]}),A.length===0&&E===T&&c.jsx("div",{className:"now-empty",children:"下からつぶやいてね🕐 時刻は自動でつくよ"}),c.jsx("div",{className:"now-tl",children:A.map(V=>c.jsxs(Lc,{className:"now-post"+(v===V.id?" pop":""),onLongPress:wt=>b({id:V.id,x:wt.x,y:wt.y}),children:[c.jsx("span",{className:"now-time",children:V.time}),c.jsx("span",{className:"now-dot","aria-hidden":"true"}),c.jsx("span",{className:"now-text",children:Pc(V.text)})]},V.id))})]},E)})]}),!_&&c.jsx("div",{className:"bar bar-fixed now-bar",ref:Ge,style:{bottom:at},children:c.jsxs("div",{className:"in-row",children:[c.jsx("textarea",{ref:ke,className:"ta",rows:1,placeholder:"いまなにしてる？",enterKeyHint:"send",value:u,onChange:st,onKeyDown:le}),c.jsx("button",{className:"send","aria-label":"つぶやく",disabled:!u.trim(),onClick:G,children:"↑"})]})}),w&&vt&&c.jsx(Xg,{x:w.x,y:w.y,onClose:()=>b(null),onCopy:async()=>{const E=await Mg(`${vt.time} ${vt.text}`);r(E?"コピーしました🩷":"コピーできませんでした"),b(null)},onEdit:()=>{m({id:vt.id,text:vt.text,time:qg(vt.time)}),b(null)},onDelete:()=>{const E=vt.id;b(null),jt(E)}}),_&&c.jsx("div",{className:"overlay",onClick:()=>m(null),children:c.jsxs("div",{className:"panel",onClick:E=>E.stopPropagation(),children:[c.jsx("h3",{children:"🕐 なうを直す"}),c.jsx("div",{className:"f-label",children:"時刻（あとから書いたときは直してね）"}),c.jsx("input",{className:"f-input",type:"time",style:{width:140},value:_.time,onChange:E=>m(A=>({...A,time:E.target.value}))}),c.jsx("div",{className:"f-label",children:"なにしてた"}),c.jsx("textarea",{autoFocus:!0,style:{minHeight:80},value:_.text,onChange:E=>m(A=>({...A,text:E.target.value}))}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:Je,children:"保存"}),c.jsx("button",{className:"p-del",onClick:()=>jt(_.id),children:"削除"}),c.jsx("button",{className:"p-close",onClick:()=>m(null),children:"もどる"})]})]})}),d&&c.jsx(af,{message:d.message,onConfirm:d.onConfirm,onCancel:()=>x(null)})]})}function nm({items:e,keyOf:t,onReorder:n,renderItem:r,onLongPress:o,longPress:i=320,footer:l}){const[a,s]=j.useState(null),[g,u]=j.useState(null),h=j.useRef(null),f=j.useRef({});f.current.items=e,f.current.keyOf=t,f.current.onReorder=n,f.current.onLongPress=o;const y=a||e,w=v=>{var S;return(S=h.current)==null?void 0:S.querySelector(`[data-dk="${CSS.escape(String(v))}"]`)},b=()=>{const v=h.current;if(!v||f.current.dragKey==null)return;const S=w(f.current.dragKey);if(!S)return;const N=v.getBoundingClientRect(),D=N.left+S.offsetLeft,L=N.top+S.offsetTop,K=f.current.pointerX-f.current.grabX-D,M=f.current.pointerY-f.current.grabY-L;S.style.transform=`translate(${K}px, ${M}px) scale(1.08)`},_=v=>{const S=w(v);if(!S)return;const N=S.getBoundingClientRect();f.current.dragKey=v,f.current.grabX=f.current.pointerX-N.left,f.current.grabY=f.current.pointerY-N.top,f.current.pickupX=f.current.pointerX,f.current.pickupY=f.current.pointerY,f.current.moved=!1,f.current.order=f.current.items.slice(),S.style.zIndex="10",s(f.current.order),u(v);try{navigator.vibrate&&navigator.vibrate(12)}catch{}requestAnimationFrame(b)},m=()=>{const v=h.current;if(!v||f.current.dragKey==null)return;const S=v.getBoundingClientRect(),N=f.current.pointerX-S.left,D=f.current.pointerY-S.top,L=[...v.querySelectorAll("[data-dk]")];let K=0,M=1/0;for(let ce=0;ce<L.length;ce++){const Pe=L[ce],Ge=Pe.offsetLeft+Pe.offsetWidth/2,ke=Pe.offsetTop+Pe.offsetHeight/2,at=(N-Ge)**2+(D-ke)**2;at<M&&(M=at,K=ce)}const J=f.current.order,Ne=J.findIndex(ce=>f.current.keyOf(ce)===f.current.dragKey);if(Ne!==-1&&Ne!==K){const[ce]=J.splice(Ne,1);J.splice(K,0,ce),s(J.slice())}requestAnimationFrame(b)},d=()=>{if(clearTimeout(f.current.timer),f.current.dragKey!=null){const v=w(f.current.dragKey);if(v&&(v.style.transform="",v.style.zIndex=""),f.current.moved)f.current.onReorder(f.current.order.slice());else if(f.current.onLongPress){const S=f.current.items.find(N=>f.current.keyOf(N)===f.current.dragKey);f.current.onLongPress({item:S,x:f.current.pointerX,y:f.current.pointerY})}f.current.suppress=Date.now()+450}f.current.dragKey=null,u(null),s(null)};j.useEffect(()=>{const v=h.current;if(!v)return;const S=K=>{if(K.touches.length!==1)return;const M=K.target.closest("[data-dk]");if(!M||!v.contains(M))return;const J=K.touches[0];f.current.startX=J.clientX,f.current.startY=J.clientY,f.current.pointerX=J.clientX,f.current.pointerY=J.clientY,f.current.moved=!1;const Ne=M.getAttribute("data-dk");clearTimeout(f.current.timer),f.current.timer=setTimeout(()=>{f.current.moved||_(Ne)},i)},N=K=>{const M=K.touches[0];if(f.current.pointerX=M.clientX,f.current.pointerY=M.clientY,f.current.dragKey==null){(Math.abs(M.clientX-f.current.startX)>12||Math.abs(M.clientY-f.current.startY)>12)&&(f.current.moved=!0,clearTimeout(f.current.timer));return}(Math.abs(M.clientX-f.current.pickupX)>8||Math.abs(M.clientY-f.current.pickupY)>8)&&(f.current.moved=!0),K.preventDefault(),m()},D=()=>{clearTimeout(f.current.timer),f.current.dragKey!=null&&d()},L=K=>K.preventDefault();return v.addEventListener("touchstart",S,{passive:!0}),v.addEventListener("touchmove",N,{passive:!1}),v.addEventListener("touchend",D,{passive:!0}),v.addEventListener("touchcancel",D,{passive:!0}),v.addEventListener("contextmenu",L),()=>{v.removeEventListener("touchstart",S),v.removeEventListener("touchmove",N),v.removeEventListener("touchend",D),v.removeEventListener("touchcancel",D),v.removeEventListener("contextmenu",L)}},[i]);const x=v=>{f.current.suppress&&Date.now()<f.current.suppress&&(v.stopPropagation(),v.preventDefault(),f.current.suppress=0)};return c.jsxs("div",{ref:h,className:"ig-grid",onClickCapture:x,children:[y.map(v=>{const S=t(v);return c.jsx("div",{"data-dk":S,className:"ig-cell"+(g===S?" dragging":""),children:r(v)},S)}),l]})}function rm({onBack:e,children:t}){const[n,r]=j.useState(0),[o,i]=j.useState(!1),l=j.useRef(null),a=j.useRef(!1),s=f=>{if(f.touches.length!==1||document.querySelector(".overlay"))return;const y=f.touches[0];y.clientX>28||(l.current={x:y.clientX,y:y.clientY},a.current=!1)},g=f=>{if(!l.current)return;const y=f.touches[0],w=y.clientX-l.current.x,b=y.clientY-l.current.y;if(!a.current){if(Math.abs(w)<8&&Math.abs(b)<8)return;if(Math.abs(b)>Math.abs(w)){l.current=null;return}a.current=!0,i(!1)}r(Math.max(0,w))},u=()=>{if(!l.current)return;const f=Math.min(110,window.innerWidth*.3);i(!0),a.current&&n>f?(r(window.innerWidth),setTimeout(e,190)):r(0),l.current=null,a.current=!1},h=n>0?{transform:`translateX(${n}px)`,transition:o?"transform .19s ease-out":"none",boxShadow:"-10px 0 26px rgba(120,50,90,.18)"}:void 0;return c.jsx("div",{className:"swipe-wrap",style:h,onTouchStart:s,onTouchMove:g,onTouchEnd:u,children:t})}const om=j.lazy(()=>$t(()=>import("./DiaryRoom-D4cvm5bg.js"),__vite__mapDeps([0,1]),import.meta.url)),im=j.lazy(()=>$t(()=>import("./TalkRoom-DqBDn2fF.js"),[],import.meta.url)),lm=j.lazy(()=>$t(()=>import("./TodoRoom-BN0s5OgK.js"),__vite__mapDeps([2,1]),import.meta.url)),am=j.lazy(()=>$t(()=>import("./DarelogRoom-BPMC3FW1.js"),__vite__mapDeps([3,4]),import.meta.url)),sm=j.lazy(()=>$t(()=>import("./ExpenseRoom-jYarBJHf.js"),[],import.meta.url)),cm=j.lazy(()=>$t(()=>import("./ChallengeRoom-BDnNKutN.js"),[],import.meta.url)),um=j.lazy(()=>$t(()=>import("./FutureRoom-B7yKthiB.js"),[],import.meta.url)),dm=j.lazy(()=>$t(()=>import("./AlbumRoom-v8ZtPL_A.js"),[],import.meta.url)),fm=["💗","🩷","💛","🩵","💜","🤍","🖤","🌸","🌷","🎀","🌟","✨","⭐️","👑","🫶","🐰","🐻","🐱","🦄","🌙","🌊","🌿","🍓","🍒","🧸","📖","💬","✅","🌗","💰"];function pm(){const[e,t]=j.useState(null),[n,r]=j.useState({screen:"home"}),[o,i]=j.useState(!1),[l,a]=j.useState(""),[s,g]=j.useState(null),[u,h]=j.useState(null),[f,y]=j.useState(!1),[w,b]=j.useState(null),[_,m]=j.useState(""),[d,x]=j.useState(null),[v,S]=j.useState(""),[N,D]=j.useState(null),[L,K]=j.useState(0),[M,J]=j.useState(null),[Ne,ce]=j.useState(!1),Pe=j.useRef(null),Ge=j.useRef(0),[ke,at]=j.useState(bg),[T,I]=j.useState(!1),[F,G]=j.useState(""),[le,st]=j.useState(!1),[Je,jt]=j.useState(""),[me,Ue]=j.useState(""),[xe,jn]=j.useState(null),[Nn,Gr]=j.useState(!1),[yt,ln]=j.useState(null),[an,sn]=j.useState(!1),[vt,E]=j.useState(""),A=j.useRef(null),V=(p,k=3e3)=>{E(p),clearTimeout(A.current),A.current=setTimeout(()=>E(""),k)},wt=async p=>{try{if(await W(ol))return p;if(p.some(P=>P.type==="future"))return await U(ol,!0),p;const k=[...p,{id:zg,type:"future",name:"未来日記",emoji:"🔮",theme:ca[3]||void 0,createdAt:Date.now(),lastAt:0,preview:""}];return await U(et,k),await U(ol,!0),k}catch{return p}},sf=async p=>{try{if(await W(nl))return p;if(p.some(P=>P.type==="album"))return await U(nl,!0),p;const k=[...p,{id:kg,type:"album",name:"絵日記",emoji:"📔",createdAt:Date.now(),lastAt:0,preview:""}];return await U(et,k),await U(nl,!0),k}catch{return p}},cf=async p=>{try{if(await W(rl))return p;if(p.some(P=>P.type==="now"))return await U(rl,!0),p;const k=[{id:Sg,type:"now",name:"なう",emoji:"🕐",createdAt:Date.now(),lastAt:0,preview:""},...p];return await U(et,k),await U(rl,!0),k}catch{return p}};j.useEffect(()=>{(async()=>{try{const p=await cf(await sf(await wt(await jg()))),k=await W(Ec);k&&D(k);const P=k&&p.find(R=>R.id===k)||p.find(R=>R.type==="now"&&!R.hidden)||p.find(R=>R.id===ue);P&&r({screen:"room",roomId:P.id}),t(p);const[C,B,Q]=await Promise.all([W(To),W(Wr),W(il)]);C&&C.dateKey===ft()&&m(C.text),Array.isArray(B)&&B.length&&at(B),jn(Q||{})}catch{V("データの読み込みに失敗しました"),t([])}})()},[]),j.useEffect(()=>{if(n.screen!=="home")return;let p=!0;return(async()=>{try{let k=await W($e(ue));k=typeof k=="string"?JSON.parse(k):k||{};const P=k[ft()];if(!p)return;P&&typeof P.text=="string"&&P.text.trim()?J({written:!0,preview:P.text.split(`
`)[0].slice(0,34)}):J({written:!1})}catch{p&&J({written:!1})}})(),()=>{p=!1}},[n.screen,L]),j.useEffect(()=>{n.screen==="home"&&Pe.current&&(Pe.current.scrollTop=Ge.current)},[n.screen]);const ls=p=>{t(k=>{let P=k;return k.find(C=>C.id===ue)||(P=[...k,{id:ue,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),P=P.map(C=>C.id===ue?{...C,...p!=null?{preview:p}:{},lastAt:Date.now()}:C),U(et,P),P}),K(k=>k+1)},uf=async({text:p,time:k,dateKey:P})=>{try{const C=ii(ue),B=await W(C)||{},Q=(B[P]||[]).slice();Q.some(R=>R.text===p&&R.time===k)||Q.push({text:p,time:k}),await U(C,{...B,[P]:Q}),ls(`🩷 できたこと ☑ ${p}`.slice(0,40))}catch{V("できたことの記録に失敗しました")}},df=async({text:p,time:k,dateKey:P})=>{try{const C=ii(ue),B=await W(C)||{},Q=(B[P]||[]).filter($=>!($.text===p&&$.time===k)),R={...B};Q.length?R[P]=Q:delete R[P],await U(C,R),ls(null)}catch{}},Si=p=>{t(p),U(et,p).catch(()=>V("保存に失敗しました"))},It=(p,k)=>{t(P=>{const C=P.map(B=>B.id===p?{...B,...k}:B);return U(et,C).catch(()=>V("保存に失敗しました")),C})},ff=async(p,k,P)=>{try{const C=(e||[]).find(Ze=>Ze.id===k);if(!C)return{ok:!1};const B=$e(k),Q=await W(B)||{},R=Array.isArray(Q.todos)?Q.todos:[],$=(P||"").trim(),te=$?(C.places||[]).find(Ze=>(Ze.name||"").trim()===$):null,Re={...p,placeId:te?te.id:null},Oe=[...R,Re];await U(B,{...Q,todos:Oe});const cn=Oe.filter(Ze=>!Ze.done&&!Ze.deferred).length;return It(k,{preview:`${Re.done?"☑":"☐"} ${(Re.text||"").split(`
`)[0]}`.slice(0,40),todoOpen:cn,lastAt:Date.now()}),{ok:!0,placeDropped:!!$&&!te,placeKept:!!te}}catch{return{ok:!1}}},pf=async p=>{const k=p.trim();if(!k)return;const P=ft();try{await U(To,{dateKey:P,text:k}),m(k);const C=$e(ue);let B=await W(C);B=B&&typeof B=="object"?B:{};const Q=B[P],R=Fg(Q?Q.text:"",k);B={...B,[P]:{text:R,time:Q?Q.time:of()}},await U(C,B);const $=Object.keys(B).sort(),te=$[$.length-1],Re=B[te].text.split(`
`)[0].slice(0,40);t(Oe=>{let cn=Oe;return Oe.find(Ze=>Ze.id===ue)||(cn=[...Oe,{id:ue,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),cn=cn.map(Ze=>Ze.id===ue?{...Ze,preview:Re,lastAt:Date.now()}:Ze),U(et,cn),cn}),K(Oe=>Oe+1),V("今日のコマをピン留めしたよ🩷")}catch{V("宣言の保存に失敗しました")}},as=p=>{at(p),U(Wr,p).catch(()=>V("マークの保存に失敗しました"))},ss=()=>{const p=F.trim();if(p){if(ke.includes(p)){G("");return}as([...ke,p]),G("")}},hf=p=>as(ke.filter(k=>k!==p));j.useEffect(()=>{!o||!e||(async()=>{const p={};for(const k of e)p[k.id]=await W($e(k.id));g(p)})()},[o,e]);const Jr=e||[],zi=j.useMemo(()=>{if(!l||!s||!e)return null;const p=l.toLowerCase(),k=[];for(const P of Jr){const C=s[P.id],B=[];if(P.type==="diary"){const Q=C&&typeof C=="object"?C:{};for(const R of Object.keys(Q).sort())(Q[R].text+Ce(R)).toLowerCase().includes(p)&&B.push({snippet:Q[R].text.split(`
`)[0],date:Ce(R)})}else if(P.type==="todo"){const Q=C&&Array.isArray(C.todos)?C.todos:[];for(const R of Q)(R.text+Ce(R.dateKey)).toLowerCase().includes(p)&&B.push({snippet:`${R.done?"☑":"☐"} ${R.text.split(`
`)[0]}`,date:Ce(R.dateKey)})}else if(P.type==="darelog"){const Q=C&&Array.isArray(C.records)?C.records:[],R=$=>{var te,Re;return((Re=(te=P.members)==null?void 0:te.find(Oe=>Oe.id===$))==null?void 0:Re.name)||""};for(const $ of P.members||[])($.memberMemo||"").toLowerCase().includes(p)&&B.push({snippet:`${$.name}: ${$.memberMemo}`,date:"メンバーメモ"});for(const $ of Q){const te=R($.memberId);(te+($.memo||"")+Ce($.dateKey)).toLowerCase().includes(p)&&B.push({snippet:`${te}${$.memo?`: ${$.memo}`:""}`,date:Ce($.dateKey)})}}else if(P.type==="expense"){const Q=C&&Array.isArray(C.expenses)?C.expenses:[],R=$=>{var te,Re;return((Re=(te=P.categories)==null?void 0:te.find(Oe=>Oe.id===$))==null?void 0:Re.name)||""};for(const $ of Q)(R($.categoryId)+($.memo||"")+String($.amount)+Ce($.dateKey)).toLowerCase().includes(p)&&B.push({snippet:`${R($.categoryId)} ¥${$.amount}${$.memo?" "+$.memo:""}`,date:Ce($.dateKey)})}else{const Q=C&&Array.isArray(C.messages)?C.messages:[],R=$=>{var te,Re;return((Re=(te=P.members)==null?void 0:te.find(Oe=>Oe.id===$))==null?void 0:Re.name)||""};for(const $ of Q)(($.text+Ce($.dateKey)).toLowerCase().includes(p)||R($.memberId).toLowerCase().includes(p))&&B.push({snippet:`${R($.memberId)||"？"}: ${$.text.split(`
`)[0]}`,date:Ce($.dateKey)})}B.length===0&&P.name.toLowerCase().includes(p)&&B.push({snippet:P.preview||"",date:""}),B.length&&k.push({room:P,hits:B})}return k},[l,s,Jr,e]),gf=p=>l?p.split(new RegExp(`(${Og(l)})`,"gi")).map((P,C)=>P.toLowerCase()===l.toLowerCase()?c.jsx("mark",{className:"hl",children:P},C):P):p,mf=()=>{const p=u.name.trim();if(!p){V("ルーム名を入れてね");return}const k={diary:"💗",todo:"✅",darelog:"🌗",expense:"💰",challenge:"🏁",talk:"🩷"}[u.type]||"🩷",P=u.type==="darelog"?[{id:qe(),name:"ブルー",color:"#d4f0ff",icon:{type:"emoji",value:"🌊"},side:"left"},{id:qe(),name:"グリーン",color:"#d9ffe3",icon:{type:"emoji",value:"🌿"},side:"left"},{id:qe(),name:"ピンク",color:"#ffd9ec",icon:{type:"emoji",value:"🌸"},side:"right"}]:[],C=u.type==="expense"?[{id:qe(),name:"AI費用",emoji:"🤖",color:"#2196F3"},{id:qe(),name:"ピンクグッズ",emoji:"🎀",color:"#E91E63"},{id:qe(),name:"ネイル",emoji:"💅",color:"#9C27B0"},{id:qe(),name:"旅費交通費",emoji:"🚃",color:"#00A5B5",transit:!0}]:void 0,B={id:qe(),type:u.type,name:p,emoji:u.emoji.trim()||k,theme:u.theme||mr,members:P,createdAt:Date.now(),lastAt:0,preview:"",...u.type==="todo"?{shopping:!!u.shopping,numbering:!!u.numbering,noDiary:!!u.noDiary}:{},...C?{categories:C,subscriptions:[],subsPosted:{},transitSeeded:!0,stations:[],fares:[],defaultFromId:null,roundTripDefault:!1,incomeSeeded:!0,incomeCategories:[{id:qe(),name:"売上",emoji:"💰",color:"#2E9E5B"},{id:qe(),name:"返金",emoji:"↩️",color:"#3BA7A0"},{id:qe(),name:"その他",emoji:"✨",color:"#7FB800"}]}:{}};Si([...e,B]),h(null),r({screen:"room",roomId:B.id})},xf=()=>{const p=u.name.trim();if(!p){V("ルーム名を入れてね");return}It(u.roomId,{name:p,emoji:u.emoji.trim()||"💗",theme:u.theme||mr,hidden:!!u.hidden,...u.type==="todo"?{shopping:!!u.shopping,numbering:!!u.numbering,noDiary:!!u.noDiary}:{}});const k=u.start?u.roomId:N===u.roomId?null:N;k!==N&&(D(k),U(Ec,k).catch(()=>V("起動ルームの保存に失敗しました"))),h(null)},yf=p=>{h({mode:"edit",roomId:p.id,name:p.name,emoji:p.emoji,type:p.type,shopping:!!p.shopping,numbering:!!p.numbering,noDiary:!!p.noDiary,theme:p.theme||mr,hidden:!!p.hidden,start:N===p.id}),y(!1)},vf=async p=>{try{const k=await W($e(p));k&&await U(wg(p),k),Si(e.filter(P=>P.id!==p)),h(null),b(null),V("ルームを削除しました")}catch{V("削除に失敗しました")}},wf=()=>{const p=e.find(k=>k.id===u.roomId);b({message:`ルーム「${(p==null?void 0:p.name)||""}」を削除しますか？
中の記録もすべて消えます。`,onConfirm:()=>vf(u.roomId)})},bf=async()=>{Ue(""),sn(!1);try{const p=await Cc();jt(JSON.stringify(p,null,2))}catch{jt("")}st(!0)},Ei=async()=>{const p={...xe||{},lastDateKey:ft(),lastAt:Date.now()};jn(p);try{await U(il,p)}catch{}},cs=p=>{const k=new Blob([p],{type:"application/json;charset=utf-8"}),P=URL.createObjectURL(k),C=document.createElement("a");C.href=P,C.download=al,document.body.appendChild(C),C.click(),C.remove(),setTimeout(()=>URL.revokeObjectURL(P),3e3)},ji=async()=>{if(!Nn){Gr(!0);try{let p;try{p=JSON.stringify(await Cc(),null,2)}catch{V("バックアップの作成に失敗しました 🥺");return}try{const k=new File([p],al,{type:"application/json"});if(navigator.canShare&&navigator.canShare({files:[k]})){await navigator.share({files:[k]}),await Ei(),V("バックアップを保存したよ💗");return}}catch(k){if(k&&(k.name==="AbortError"||k.name==="NotAllowedError"))return}try{cs(p),await Ei(),V("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{V("保存できない環境みたい。コピーを使ってね")}}finally{Gr(!1)}}},kf=()=>{try{cs(Je),Ei(),V("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{V("保存できない環境みたい。コピーを使ってね")}},Zr=ft(),Cn=(()=>{if(!(xe!=null&&xe.lastDateKey))return null;const p=ve(Zr)-ve(xe.lastDateKey);return Math.max(0,Math.round(p/864e5))})(),Ni=Cn===null||Cn>=7,Sf=!!xe&&xe.lastDateKey!==Zr&&xe.dismissedDateKey!==Zr,zf=async()=>{const p={...xe||{},dismissedDateKey:Zr};jn(p);try{await U(il,p)}catch{}},Ef=async()=>{try{await navigator.clipboard.writeText(Je),sn(!0),setTimeout(()=>sn(!1),2e3)}catch{V("コピーできませんでした。全選択して手動でコピーしてね")}},jf=p=>{var C;const k=(C=p.target.files)==null?void 0:C[0];if(!k)return;const P=new FileReader;P.onload=()=>Ue(String(P.result||"")),P.onerror=()=>V("ファイルを読めませんでした"),P.readAsText(k),p.target.value=""},Nf=()=>{let p;try{p=JSON.parse(me)}catch{V("JSONとして読めませんでした。ファイルが壊れているかも 🥺",4e3);return}const k=Ug(p);if(k){V(k,4500);return}ln({obj:p,counts:Kg(p),exportedAt:p.exportedAt||"",version:p.version})},Cf=async()=>{const p=yt==null?void 0:yt.obj;if(p)try{const k=await Vg(p);t(k.rooms),p.declaration&&p.declaration.dateKey===ft()&&!_&&(await U(To,p.declaration),m(p.declaration.text)),K(P=>P+1),ln(null),st(!1),Ue(""),V(`復元完了💗 ${k.addedRooms}ルーム / ${k.addedItems}件を追加`)}catch{ln(null),V("復元中にエラーが出ました。ファイルが壊れているかも 🥺",4e3)}};if(!e)return c.jsx("div",{className:"app",children:c.jsx("style",{children:Dc})});const _f=c.jsxs("div",{className:"pin",onClick:()=>{S(_),x(_?"view":"edit")},role:"button",children:[c.jsx("span",{className:"pin-ic",children:_?"📌":"🩷"}),_?c.jsx("span",{className:"pin-txt",children:_}):c.jsx("span",{className:"pin-ph",children:"今日のコマをえらぶ🩷"})]});let qr;if(n.screen==="room"){const p=e.find(k=>k.id===n.roomId);if(!p)qr=null,setTimeout(()=>r({screen:"home"}),0);else{const k={room:p,onBack:()=>r({screen:"home"}),onMeta:C=>It(p.id,C),initialQuery:n.q,showToast:V,pinned:_f},P=p.type==="diary"?c.jsx(om,{...k,syncSignal:L,marks:ke,onEditMarks:()=>I(!0),nowRoomIds:e.filter(C=>C.type==="now").map(C=>C.id)},p.id):p.type==="now"?c.jsx(tm,{...k,onOpenDiary:e.some(C=>C.id===ue)?()=>r({screen:"room",roomId:ue}):void 0},p.id):p.type==="todo"?c.jsx(lm,{...k,onTodoComplete:uf,onTodoUncomplete:df,onRoomChange:C=>It(p.id,C),todoRooms:e.filter(C=>C.type==="todo"&&C.id!==p.id),onMoveTodo:ff},p.id):p.type==="darelog"?c.jsx(am,{...k,onRoomChange:C=>It(p.id,C)},p.id):p.type==="expense"?c.jsx(sm,{...k,onRoomChange:C=>It(p.id,C)},p.id):p.type==="challenge"?c.jsx(cm,{...k},p.id):p.type==="future"?c.jsx(um,{...k},p.id):p.type==="album"?c.jsx(dm,{...k},p.id):c.jsx(im,{...k,onRoomChange:C=>It(p.id,C)},p.id);qr=c.jsx(rm,{onBack:()=>r({screen:"home"}),children:c.jsx(j.Suspense,{fallback:c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"hd hd-loading"}),c.jsx("div",{className:"chat"})]}),children:P})},p.id)}}else qr=c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"hd hd-home",children:[c.jsx("div",{className:"app-brand",children:c.jsx("div",{className:"app-title",children:"💖Nachumin Lifelog💖"})}),c.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"バックアップ",onClick:bf,children:"💾"}),c.jsx("button",{className:"icon-btn","aria-label":"新しいルーム",onClick:()=>h({mode:"new",name:"",emoji:"",type:"talk"}),children:"➕"}),c.jsx("button",{className:"icon-btn","aria-label":"ぜんぶ検索",onClick:()=>{i(!o),a("")},children:o?"✕":"🔍"})]}),Sf&&c.jsxs("div",{className:"bk-banner"+(Ni?" stale":""),children:[c.jsxs("button",{className:"bk-main",onClick:ji,disabled:Nn,children:[c.jsx("span",{className:"bk-ttl",children:"💾 今日のバックアップ🩷"}),c.jsx("span",{className:"bk-sub",children:Cn===null?"まだ一度も保存していません":Ni?`最後の保存から ${Cn}日 たっています`:"タップで1ファイルに書き出し"})]}),c.jsx("button",{className:"bk-x","aria-label":"閉じる",onClick:zf,children:"✕"})]}),o&&c.jsx("div",{className:"search-row",children:c.jsx("input",{autoFocus:!0,placeholder:"ぜんぶのルームから検索（ことば・話者・日付）",value:l,onChange:p=>a(p.target.value)})}),zi?c.jsx("div",{className:"rooms",children:zi.length===0?c.jsx("div",{className:"empty",children:"みつかりませんでした 🥺"}):zi.map(({room:p,hits:k})=>c.jsxs("div",{className:"room-row",onClick:()=>r({screen:"room",roomId:p.id,q:l}),children:[c.jsx("div",{className:"r-ic",children:p.emoji}),c.jsxs("div",{className:"r-main",children:[c.jsx("div",{className:"r-name",children:p.name}),c.jsx("div",{className:"r-prev",children:gf(k[0].snippet)})]}),c.jsxs("div",{className:"r-side",children:[c.jsxs("span",{className:"r-badge",children:[k.length,"件"]}),k[0].date&&c.jsx("span",{className:"r-date",children:k[0].date})]})]},p.id))}):c.jsx("div",{className:"home-scroll",ref:Pe,onScroll:p=>{Ge.current=p.target.scrollTop},children:(()=>{const p=e.find(R=>R.id===ue),k=Jr.filter(R=>R.id!==ue&&!R.hidden),P=Jr.filter(R=>R.id!==ue&&R.hidden),C=ve(ft()),B=M?M.written?M.preview:`${C.getMonth()+1}/${C.getDate()}・きょうの分はまだ`:"…",Q=R=>{const $=[...R];Si(e.map(te=>te.id===ue||te.hidden?te:$.shift()))};return c.jsxs(c.Fragment,{children:[p&&c.jsxs("button",{className:"diary-card",onClick:()=>r({screen:"room",roomId:p.id}),children:[c.jsx("span",{className:"dc-ic",children:p.emoji}),c.jsxs("span",{className:"dc-main",children:[c.jsx("span",{className:"dc-name",children:"DIARY"}),c.jsx("span",{className:"dc-sub",children:B})]}),c.jsx("span",{className:"dc-arw",children:"›"})]}),c.jsx(nm,{items:k,keyOf:R=>R.id,onReorder:Q,onLongPress:({item:R})=>{R&&yf(R)},footer:c.jsx("div",{className:"ig-cell ig-add",children:c.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>h({mode:"new",name:"",emoji:"",type:"talk"}),onKeyDown:R=>R.key==="Enter"&&h({mode:"new",name:"",emoji:"",type:"talk"}),children:[c.jsx("span",{className:"ig-btn",children:"＋"}),c.jsx("span",{className:"ig-name",children:"つくる"})]})}),renderItem:R=>{const $=R.type==="todo"&&R.todoOpen>0?R.todoOpen:null;return c.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>r({screen:"room",roomId:R.id}),onKeyDown:te=>te.key==="Enter"&&r({screen:"room",roomId:R.id}),children:[c.jsxs("span",{className:"ig-btn",style:_c(R.theme),children:[R.emoji,$!=null&&c.jsx("span",{className:"ig-badge",children:$>99?"99+":$})]}),c.jsx("span",{className:"ig-name",children:R.name})]})}}),P.length>0&&c.jsx("button",{className:"hidden-entry",onClick:()=>ce(!0),children:"🙈 非表示のルーム"}),Ne&&c.jsx("div",{className:"overlay",onClick:()=>ce(!1),children:c.jsxs("div",{className:"panel",onClick:R=>R.stopPropagation(),children:[c.jsx("h3",{children:"🙈 非表示のルーム"}),c.jsx("p",{className:"panel-note",children:"一覧に出していないルームです。中の記録は消えていません。「戻す」でまた表示できます。"}),c.jsx("div",{className:"move-list",children:P.map(R=>c.jsxs("div",{className:"move-item as-row",children:[c.jsx("span",{className:"move-ic",children:R.emoji}),c.jsx("span",{className:"move-name",children:R.name}),c.jsx("button",{className:"unhide-btn",onClick:()=>It(R.id,{hidden:!1}),children:"戻す"})]},R.id))}),c.jsx("div",{className:"panel-btns",children:c.jsx("button",{className:"p-close",onClick:()=>ce(!1),children:"閉じる"})})]})})]})})()})]});return c.jsxs("div",{className:"app",children:[c.jsx("style",{children:Dc}),qr,u&&c.jsx("div",{className:"overlay",onClick:()=>{h(null),y(!1)},children:c.jsxs("div",{className:"panel",onClick:p=>p.stopPropagation(),children:[c.jsx("h3",{children:u.mode==="new"?"➕ 新しいルーム":"⚙️ ルーム設定"}),c.jsx("div",{className:"f-label",children:"ルーム名"}),c.jsx("input",{className:"f-input",autoFocus:u.mode==="new",placeholder:"ハートるんず",value:u.name,onChange:p=>h(k=>({...k,name:p.target.value}))}),c.jsx("div",{className:"f-label",children:"アイコン（タップで選ぶ）"}),c.jsx("div",{className:"emoji-picks",children:fm.map(p=>c.jsx("button",{className:"emoji-pick"+(u.emoji===p?" on":""),onClick:()=>h(k=>({...k,emoji:p})),children:p},p))}),c.jsx("input",{className:"f-input",style:{width:130,textAlign:"center",marginTop:4},maxLength:8,placeholder:"または自由入力",value:u.emoji,onChange:p=>h(k=>({...k,emoji:p.target.value}))}),c.jsx("div",{className:"f-label",children:"テーマカラー"}),c.jsx("div",{className:"theme-swatches",children:ca.map(p=>{const k=(u.theme||mr)===p;return c.jsx("button",{className:"theme-sw"+(k?" on":""),style:_c(p),"aria-label":p,onClick:()=>h(P=>({...P,theme:p}))},p)})}),c.jsxs("div",{className:"f-label",children:["タイプ",u.mode==="edit"?"（変更できません）":""]}),c.jsxs("div",{className:"type-row",children:[c.jsxs("button",{className:"type-chip"+(u.type==="diary"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"diary"})),children:["📖 日記",c.jsx("small",{children:"1日=1吹き出し"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="talk"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"talk"})),children:["💬 トーク",c.jsx("small",{children:"話者ごと"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="todo"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"todo"})),children:["✅ TODO",c.jsx("small",{children:"やること"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="darelog"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"darelog"})),children:["🌗 だれログ",c.jsx("small",{children:"朝昼夜の記録"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="expense"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"expense"})),children:["💰 経費",c.jsx("small",{children:"支出を記録"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="challenge"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"challenge"})),children:["🏁 チャレンジ",c.jsx("small",{children:"100個の目標"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="future"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"future"})),children:["🔮 未来日記",c.jsx("small",{children:"1日1篇とどく"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="now"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"now"})),children:["🕐 なう",c.jsx("small",{children:"いまを一言"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="album"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"album"})),children:["📔 絵日記",c.jsx("small",{children:"書いた日記の画像"})]})]}),u.mode==="edit"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"アプリを開いたとき"}),c.jsxs("button",{className:"shop-toggle"+(u.start?" on":""),onClick:()=>h(p=>({...p,start:!p.start})),children:[c.jsx("span",{className:"shop-box",children:u.start?"✓":""}),"🚀 開いたらこのルームを出す"]})]}),u.mode==="edit"&&u.roomId!==ue&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"一覧での表示"}),c.jsxs("button",{className:"shop-toggle"+(u.hidden?" on":""),onClick:()=>h(p=>({...p,hidden:!p.hidden})),children:[c.jsx("span",{className:"shop-box",children:u.hidden?"✓":""}),"🙈 一覧に表示しない（記録は消えません）"]})]}),u.type==="todo"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"用途"}),c.jsxs("button",{className:"shop-toggle"+(u.shopping?" on":""),onClick:()=>h(p=>({...p,shopping:!p.shopping})),children:[c.jsx("span",{className:"shop-box",children:u.shopping?"✓":""}),"🛒 買い物リストとして使う（よく買うものクイック追加）"]}),c.jsxs("button",{className:"shop-toggle"+(u.numbering?" on":""),onClick:()=>h(p=>({...p,numbering:!p.numbering})),children:[c.jsx("span",{className:"shop-box",children:u.numbering?"✓":""}),"🔢 日ごとに番号をつける（1,2,3…／日付が変わると1から）"]}),c.jsxs("button",{className:"shop-toggle"+(u.noDiary?" on":""),onClick:()=>h(p=>({...p,noDiary:!p.noDiary})),children:[c.jsx("span",{className:"shop-box",children:u.noDiary?"✓":""}),"📓 完了しても日記の「できたこと」に入れない"]})]}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:u.mode==="new"?mf:xf,children:u.mode==="new"?"つくる":"保存"}),u.mode==="edit"&&c.jsx("button",{className:"p-del",onClick:wf,children:"削除"}),c.jsx("button",{className:"p-close",onClick:()=>{h(null),y(!1)},children:"閉じる"})]})]})}),le&&c.jsx("div",{className:"overlay",onClick:()=>st(!1),children:c.jsxs("div",{className:"panel",onClick:p=>p.stopPropagation(),children:[c.jsx("h3",{children:"💾 まるごとバックアップ"}),c.jsx("p",{className:"panel-note",children:"全ルーム・全データ（日記 / TODO / だれログ / 経費 / 習慣 / 各種設定）を まるごと1ファイルに保存します。端末が変わっても元どおり復元できます。"}),e.some(p=>p.type==="album")&&c.jsxs("p",{className:"panel-note bk-warn",children:["📔 絵日記の",c.jsx("b",{children:"画像だけは入りません"}),"（数百MBになってしまうため）。 元の画像は写真アプリに残しておいてね。日付の記録は入ります。"]}),c.jsxs("div",{className:"bk-last"+(Ni?" stale":""),children:[c.jsx("span",{className:"bk-last-l",children:"最後にバックアップした日"}),c.jsx("span",{className:"bk-last-v",children:xe!=null&&xe.lastDateKey?`${Ce(xe.lastDateKey)}${Cn===0?"（今日）":`（${Cn}日前）`}`:"まだありません"})]}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:ji,disabled:Nn,children:"💾 1タップで書き出し"}),c.jsx("button",{className:"p-dl",onClick:kf,children:"ダウンロード"}),c.jsx("button",{className:"p-dl",onClick:Ef,children:an?"コピーしたよ💗":"コピー"})]}),c.jsxs("p",{className:"panel-note",children:["ファイル名は毎回 ",c.jsx("b",{children:al})," で固定です。ただし 「ファイルに保存」は同じ名前があると ",c.jsx("b",{children:"iOS が勝手に番号を付けて"})," 別ファイルにします。 毎回きっちり上書きしたいときは、共有シートで 「ファイルに保存」ではなく ",c.jsx("b",{children:"ショートカット"}),"（上書き保存する用に作ったもの）を選んでね。"]}),c.jsx("div",{className:"f-label",style:{marginTop:6},children:"復元する（バックアップから読み込み）"}),c.jsx("p",{className:"panel-note",children:"既存のデータは消さず、足りない分だけ追加します（安全マージ）"}),c.jsxs("label",{className:"upload-btn",style:{alignSelf:"flex-start"},children:["📂 バックアップファイルを選ぶ",c.jsx("input",{type:"file",accept:".json,application/json,text/plain",onChange:jf})]}),c.jsx("textarea",{placeholder:"または、コピーしたバックアップをここに貼り付け",value:me,onChange:p=>Ue(p.target.value),style:{minHeight:120}}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",disabled:!me.trim(),onClick:Nf,children:"復元する"}),c.jsx("button",{className:"p-close",onClick:()=>{st(!1),Ue("")},children:"閉じる"})]})]})}),yt&&c.jsx("div",{className:"overlay bk-ask-over",onClick:()=>ln(null),children:c.jsxs("div",{className:"panel",onClick:p=>p.stopPropagation(),children:[c.jsx("h3",{children:"⚠️ 復元まえの確認"}),c.jsxs("div",{className:"bk-ask-box",children:[c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"ルーム"}),c.jsx("b",{children:yt.counts.rooms})]}),c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"記録の件数"}),c.jsx("b",{children:yt.counts.items})]}),yt.exportedAt&&c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"書き出し日時"}),c.jsx("b",{children:new Date(yt.exportedAt).toLocaleString("ja-JP")})]})]}),c.jsxs("p",{className:"panel-note",children:["今のデータは消えません（足りない分を追加する安全マージ）。 それでも念のため、",c.jsx("b",{children:"先に今のデータをバックアップ"}),"しておくのがおすすめです💗"]}),c.jsx("button",{className:"bk-first",onClick:ji,disabled:Nn,children:"💾 先に今のデータをバックアップする"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:Cf,children:"この内容で復元する"}),c.jsx("button",{className:"p-close",onClick:()=>ln(null),children:"キャンセル"})]})]})}),d&&c.jsx("div",{className:"overlay",onClick:()=>x(null),children:c.jsxs("div",{className:"panel",onClick:p=>p.stopPropagation(),children:[c.jsx("h3",{children:"🩷 今日のコマ"}),d==="view"?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"decl-full",children:_}),c.jsx("p",{className:"panel-note",children:"その日1日だけピン留め。日記にも記録されています🎬"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:()=>{S(_),x("edit")},children:"書きなおす"}),c.jsx("button",{className:"p-close",onClick:()=>x(null),children:"閉じる"})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("textarea",{autoFocus:!0,style:{minHeight:120},placeholder:"今日は愛全開の私でいる！",value:v,onChange:p=>S(p.target.value)}),c.jsx("p",{className:"panel-note",children:"その日1日だけ表示。決定すると今日の日記の先頭に🎬として残ります"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",disabled:!v.trim(),onClick:()=>{pf(v),x(null)},children:"決定"}),c.jsx("button",{className:"p-close",onClick:()=>x(null),children:"閉じる"})]})]})]})}),T&&c.jsx("div",{className:"overlay",onClick:()=>I(!1),children:c.jsxs("div",{className:"panel",onClick:p=>p.stopPropagation(),children:[c.jsx("h3",{children:"⚙︎ 箇条書きマーク"}),c.jsx("p",{className:"panel-note",children:"日記の入力欄に出るマーク。タップで削除、下から追加できます。"}),c.jsxs("div",{className:"mark-manage",children:[ke.map(p=>c.jsxs("span",{className:"mark-item",children:[p,c.jsx("button",{onClick:()=>hf(p),"aria-label":"削除",children:"✕"})]},p)),ke.length===0&&c.jsx("p",{className:"panel-note",children:"マークがありません。追加してね"})]}),c.jsxs("div",{className:"in-row",style:{marginTop:4},children:[c.jsx("input",{className:"f-input",maxLength:4,placeholder:"記号や絵文字（例: ❤︎）",value:F,onChange:p=>G(p.target.value),onKeyDown:p=>p.key==="Enter"&&ss()}),c.jsx("button",{className:"p-copy",style:{flex:"0 0 auto",padding:"8px 16px",borderRadius:999},disabled:!F.trim(),onClick:ss,children:"追加"})]}),c.jsx("div",{className:"panel-btns",children:c.jsx("button",{className:"p-close",onClick:()=>I(!1),children:"閉じる"})})]})}),w&&c.jsx(af,{message:w.message,onConfirm:w.onConfirm,onCancel:()=>b(null)}),vt&&c.jsx("div",{className:"toast",children:vt})]})}let Oc=!1,Mc=!!(navigator.serviceWorker&&navigator.serviceWorker.controller);navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!Mc){Mc=!0;return}Oc||(Oc=!0,window.location.reload())});og({immediate:!0,onRegisteredSW(e,t){t&&(t.update(),setInterval(()=>t.update(),60*60*1e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&t.update()}))}});Eg();Xd(document.getElementById("root")).render(c.jsx(j.StrictMode,{children:c.jsx(pm,{})}));export{Cm as $,ve as A,ht as B,rf as C,Ig as D,jc as E,Xg as F,_g as G,af as H,of as I,Sm as J,km as K,zm as L,Fm as M,Pc as N,Mg as O,Lc as P,Og as Q,Yg as R,Tm as S,Pm as T,Um as U,Bm as V,ym as W,Nm as X,Dm as Y,Lm as Z,$g as _,Im as a,_m as a0,Am as a1,Em as a2,jm as a3,wm as a4,bm as a5,vm as a6,mr as a7,ca as a8,aa as a9,Mm as aa,Om as ab,xm as ac,hm as ad,gm as ae,mm as af,$m as b,sa as c,Rg as d,is as e,$e as f,W as g,ii as h,Rm as i,c as j,Ce as k,Po as l,qe as m,qd as n,Zd as o,Ye as p,Ro as q,j as r,U as s,ft as t,Gg as u,tf as v,la as w,ef as x,Nc as y,lf as z};
