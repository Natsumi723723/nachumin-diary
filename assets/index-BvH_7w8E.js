const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DiaryRoom-BGz9vAfH.js","./InlineEdit-DWonenGo.js","./TodoRoom-B8i8W1OA.js","./DarelogRoom-DQLNQ7Zf.js","./TalkRoom-CAVMw8HR.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Lu={exports:{}},qo={},Pu={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=Symbol.for("react.element"),Nf=Symbol.for("react.portal"),Cf=Symbol.for("react.fragment"),_f=Symbol.for("react.strict_mode"),Df=Symbol.for("react.profiler"),Tf=Symbol.for("react.provider"),Lf=Symbol.for("react.context"),Pf=Symbol.for("react.forward_ref"),Rf=Symbol.for("react.suspense"),Of=Symbol.for("react.memo"),Mf=Symbol.for("react.lazy"),ss=Symbol.iterator;function $f(e){return e===null||typeof e!="object"?null:(e=ss&&e[ss]||e["@@iterator"],typeof e=="function"?e:null)}var Ru={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ou=Object.assign,Mu={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=Mu,this.updater=n||Ru}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $u(){}$u.prototype=Qn.prototype;function oa(e,t,n){this.props=e,this.context=t,this.refs=Mu,this.updater=n||Ru}var ia=oa.prototype=new $u;ia.constructor=oa;Ou(ia,Qn.prototype);ia.isPureReactComponent=!0;var us=Array.isArray,Iu=Object.prototype.hasOwnProperty,la={current:null},Au={key:!0,ref:!0,__self:!0,__source:!0};function Fu(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Iu.call(t,r)&&!Au.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),m=0;m<a;m++)s[m]=arguments[m+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Ar,type:e,key:i,ref:l,props:o,_owner:la.current}}function If(e,t){return{$$typeof:Ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function aa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ar}function Af(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var cs=/\/+/g;function ki(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Af(""+e.key):t.toString(36)}function po(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ar:case Nf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ki(l,0):r,us(o)?(n="",e!=null&&(n=e.replace(cs,"$&/")+"/"),po(o,t,n,"",function(m){return m})):o!=null&&(aa(o)&&(o=If(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(cs,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",us(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+ki(i,a);l+=po(i,t,n,s,o)}else if(s=$f(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+ki(i,a++),l+=po(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Yr(e,t,n){if(e==null)return e;var r=[],o=0;return po(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Ff(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},ho={transition:null},Bf={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:ho,ReactCurrentOwner:la};function Bu(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Yr,forEach:function(e,t,n){Yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yr(e,function(){t++}),t},toArray:function(e){return Yr(e,function(t){return t})||[]},only:function(e){if(!aa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Qn;V.Fragment=Cf;V.Profiler=Df;V.PureComponent=oa;V.StrictMode=_f;V.Suspense=Rf;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bf;V.act=Bu;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ou({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=la.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Iu.call(t,s)&&!Au.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var m=0;m<s;m++)a[m]=arguments[m+2];r.children=a}return{$$typeof:Ar,type:e.type,key:o,ref:i,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:Lf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tf,_context:e},e.Consumer=e};V.createElement=Fu;V.createFactory=function(e){var t=Fu.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Pf,render:e}};V.isValidElement=aa;V.lazy=function(e){return{$$typeof:Mf,_payload:{_status:-1,_result:e},_init:Ff}};V.memo=function(e,t){return{$$typeof:Of,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=ho.transition;ho.transition={};try{e()}finally{ho.transition=t}};V.unstable_act=Bu;V.useCallback=function(e,t){return Te.current.useCallback(e,t)};V.useContext=function(e){return Te.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};V.useEffect=function(e,t){return Te.current.useEffect(e,t)};V.useId=function(){return Te.current.useId()};V.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Te.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};V.useRef=function(e){return Te.current.useRef(e)};V.useState=function(e){return Te.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Te.current.useTransition()};V.version="18.3.1";Pu.exports=V;var N=Pu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf=N,Kf=Symbol.for("react.element"),Wf=Symbol.for("react.fragment"),Vf=Object.prototype.hasOwnProperty,Hf=Uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yf={key:!0,ref:!0,__self:!0,__source:!0};function Uu(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Vf.call(t,r)&&!Yf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Kf,type:e,key:i,ref:l,props:o,_owner:Hf.current}}qo.Fragment=Wf;qo.jsx=Uu;qo.jsxs=Uu;Lu.exports=qo;var c=Lu.exports,Ku={exports:{}},Qe={},Wu={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,A){var F=P.length;P.push(A);e:for(;0<F;){var X=F-1>>>1,te=P[X];if(0<o(te,A))P[X]=A,P[F]=te,F=X;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var A=P[0],F=P.pop();if(F!==A){P[0]=F;e:for(var X=0,te=P.length,Ge=te>>>1;X<Ge;){var Je=2*(X+1)-1,Rt=P[Je],pe=Je+1,D=P[pe];if(0>o(Rt,F))pe<te&&0>o(D,Rt)?(P[X]=D,P[pe]=F,X=pe):(P[X]=Rt,P[Je]=F,X=Je);else if(pe<te&&0>o(D,F))P[X]=D,P[pe]=F,X=pe;else break e}}return A}function o(P,A){var F=P.sortIndex-A.sortIndex;return F!==0?F:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],m=[],u=1,h=null,f=3,y=!1,w=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var A=n(m);A!==null;){if(A.callback===null)r(m);else if(A.startTime<=P)r(m),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(m)}}function v(P){if(b=!1,x(P),!w)if(n(s)!==null)w=!0,Pe(S);else{var A=n(m);A!==null&&at(v,A.startTime-P)}}function S(P,A){w=!1,b&&(b=!1,g(R),R=-1),y=!0;var F=f;try{for(x(A),h=n(s);h!==null&&(!(h.expirationTime>A)||P&&!G());){var X=h.callback;if(typeof X=="function"){h.callback=null,f=h.priorityLevel;var te=X(h.expirationTime<=A);A=e.unstable_now(),typeof te=="function"?h.callback=te:h===n(s)&&r(s),x(A)}else r(s);h=n(s)}if(h!==null)var Ge=!0;else{var Je=n(m);Je!==null&&at(v,Je.startTime-A),Ge=!1}return Ge}finally{h=null,f=F,y=!1}}var j=!1,_=null,R=-1,B=5,M=-1;function G(){return!(e.unstable_now()-M<B)}function ce(){if(_!==null){var P=e.unstable_now();M=P;var A=!0;try{A=_(!0,P)}finally{A?se():(j=!1,_=null)}}else j=!1}var se;if(typeof d=="function")se=function(){d(ce)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,kt=Ne.port2;Ne.port1.onmessage=ce,se=function(){kt.postMessage(null)}}else se=function(){C(ce,0)};function Pe(P){_=P,j||(j=!0,se())}function at(P,A){R=C(function(){P(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Pe(S))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var F=f;f=A;try{return P()}finally{f=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=f;f=P;try{return A()}finally{f=F}},e.unstable_scheduleCallback=function(P,A,F){var X=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?X+F:X):F=X,P){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=F+te,P={id:u++,callback:A,priorityLevel:P,startTime:F,expirationTime:te,sortIndex:-1},F>X?(P.sortIndex=F,t(m,P),n(s)===null&&P===n(m)&&(b?(g(R),R=-1):b=!0,at(v,F-X))):(P.sortIndex=te,t(s,P),w||y||(w=!0,Pe(S))),P},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(P){var A=f;return function(){var F=f;f=A;try{return P.apply(this,arguments)}finally{f=F}}}})(Vu);Wu.exports=Vu;var Qf=Wu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf=N,He=Qf;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hu=new Set,wr={};function vn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(wr[e]=t,e=0;e<t.length;e++)Hu.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rl=Object.prototype.hasOwnProperty,Gf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ds={},fs={};function Jf(e){return rl.call(fs,e)?!0:rl.call(ds,e)?!1:Gf.test(e)?fs[e]=!0:(ds[e]=!0,!1)}function Zf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qf(e,t,n,r){if(t===null||typeof t>"u"||Zf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var sa=/[\-:]([a-z])/g;function ua(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sa,ua);ke[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sa,ua);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sa,ua);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function ca(e,t,n,r){var o=ke.hasOwnProperty(t)?ke[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qf(t,n,o,r)&&(n=null),r||o===null?Jf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Lt=Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),da=Symbol.for("react.strict_mode"),ol=Symbol.for("react.profiler"),Yu=Symbol.for("react.provider"),Qu=Symbol.for("react.context"),fa=Symbol.for("react.forward_ref"),il=Symbol.for("react.suspense"),ll=Symbol.for("react.suspense_list"),pa=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),Xu=Symbol.for("react.offscreen"),ps=Symbol.iterator;function Zn(e){return e===null||typeof e!="object"?null:(e=ps&&e[ps]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Si;function lr(e){if(Si===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Si=t&&t[1]||""}return`
`+Si+e}var zi=!1;function Ei(e,t){if(!e||zi)return"";zi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var o=m.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{zi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function ep(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=Ei(e.type,!1),e;case 11:return e=Ei(e.type.render,!1),e;case 1:return e=Ei(e.type,!0),e;default:return""}}function al(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zn:return"Fragment";case Sn:return"Portal";case ol:return"Profiler";case da:return"StrictMode";case il:return"Suspense";case ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qu:return(e.displayName||"Context")+".Consumer";case Yu:return(e._context.displayName||"Context")+".Provider";case fa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pa:return t=e.displayName||null,t!==null?t:al(e.type)||"Memo";case It:t=e._payload,e=e._init;try{return al(e(t))}catch{}}return null}function tp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return al(t);case 8:return t===da?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function np(e){var t=Gu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xr(e){e._valueTracker||(e._valueTracker=np(e))}function Ju(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sl(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zu(e,t){t=t.checked,t!=null&&ca(e,"checked",t,!1)}function ul(e,t){Zu(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cl(e,t.type,n):t.hasOwnProperty("defaultValue")&&cl(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ms(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cl(e,t,n){(t!=="number"||Co(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(ar(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function qu(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ec(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ec(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gr,tc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rp=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){rp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dr[t]=dr[e]})});function nc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||dr.hasOwnProperty(e)&&dr[e]?(""+t).trim():t+"px"}function rc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=nc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var op=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pl(e,t){if(t){if(op[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ml=null;function ha(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gl=null,Mn=null,$n=null;function ys(e){if(e=Ur(e)){if(typeof gl!="function")throw Error(z(280));var t=e.stateNode;t&&(t=oi(t),gl(e.stateNode,e.type,t))}}function oc(e){Mn?$n?$n.push(e):$n=[e]:Mn=e}function ic(){if(Mn){var e=Mn,t=$n;if($n=Mn=null,ys(e),t)for(e=0;e<t.length;e++)ys(t[e])}}function lc(e,t){return e(t)}function ac(){}var ji=!1;function sc(e,t,n){if(ji)return e(t,n);ji=!0;try{return lc(e,t,n)}finally{ji=!1,(Mn!==null||$n!==null)&&(ac(),ic())}}function kr(e,t){var n=e.stateNode;if(n===null)return null;var r=oi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var xl=!1;if(Ct)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){xl=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{xl=!1}function ip(e,t,n,r,o,i,l,a,s){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(u){this.onError(u)}}var fr=!1,_o=null,Do=!1,yl=null,lp={onError:function(e){fr=!0,_o=e}};function ap(e,t,n,r,o,i,l,a,s){fr=!1,_o=null,ip.apply(lp,arguments)}function sp(e,t,n,r,o,i,l,a,s){if(ap.apply(this,arguments),fr){if(fr){var m=_o;fr=!1,_o=null}else throw Error(z(198));Do||(Do=!0,yl=m)}}function wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vs(e){if(wn(e)!==e)throw Error(z(188))}function up(e){var t=e.alternate;if(!t){if(t=wn(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return vs(o),e;if(i===r)return vs(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function cc(e){return e=up(e),e!==null?dc(e):null}function dc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=dc(e);if(t!==null)return t;e=e.sibling}return null}var fc=He.unstable_scheduleCallback,ws=He.unstable_cancelCallback,cp=He.unstable_shouldYield,dp=He.unstable_requestPaint,ue=He.unstable_now,fp=He.unstable_getCurrentPriorityLevel,ma=He.unstable_ImmediatePriority,pc=He.unstable_UserBlockingPriority,To=He.unstable_NormalPriority,pp=He.unstable_LowPriority,hc=He.unstable_IdlePriority,ei=null,wt=null;function hp(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:xp,mp=Math.log,gp=Math.LN2;function xp(e){return e>>>=0,e===0?32:31-(mp(e)/gp|0)|0}var Jr=64,Zr=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=sr(a):(i&=l,i!==0&&(r=sr(i)))}else l=n&~o,l!==0?r=sr(l):i!==0&&(r=sr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),o=1<<n,r|=e[n],t&=~o;return r}function yp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ht(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=yp(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mc(){var e=Jr;return Jr<<=1,!(Jr&4194240)&&(Jr=64),e}function Ni(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function wp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ht(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ga(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Q=0;function gc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xc,xa,yc,vc,wc,wl=!1,qr=[],Wt=null,Vt=null,Ht=null,Sr=new Map,zr=new Map,Ft=[],bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bs(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":Sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(t.pointerId)}}function er(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ur(t),t!==null&&xa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function kp(e,t,n,r,o){switch(t){case"focusin":return Wt=er(Wt,e,t,n,r,o),!0;case"dragenter":return Vt=er(Vt,e,t,n,r,o),!0;case"mouseover":return Ht=er(Ht,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Sr.set(i,er(Sr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,zr.set(i,er(zr.get(i)||null,e,t,n,r,o)),!0}return!1}function bc(e){var t=sn(e.target);if(t!==null){var n=wn(t);if(n!==null){if(t=n.tag,t===13){if(t=uc(n),t!==null){e.blockedOn=t,wc(e.priority,function(){yc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ml=r,n.target.dispatchEvent(r),ml=null}else return t=Ur(n),t!==null&&xa(t),e.blockedOn=n,!1;t.shift()}return!0}function ks(e,t,n){mo(e)&&n.delete(t)}function Sp(){wl=!1,Wt!==null&&mo(Wt)&&(Wt=null),Vt!==null&&mo(Vt)&&(Vt=null),Ht!==null&&mo(Ht)&&(Ht=null),Sr.forEach(ks),zr.forEach(ks)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,wl||(wl=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,Sp)))}function Er(e){function t(o){return tr(o,e)}if(0<qr.length){tr(qr[0],e);for(var n=1;n<qr.length;n++){var r=qr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wt!==null&&tr(Wt,e),Vt!==null&&tr(Vt,e),Ht!==null&&tr(Ht,e),Sr.forEach(t),zr.forEach(t),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)bc(n),n.blockedOn===null&&Ft.shift()}var In=Lt.ReactCurrentBatchConfig,Po=!0;function zp(e,t,n,r){var o=Q,i=In.transition;In.transition=null;try{Q=1,ya(e,t,n,r)}finally{Q=o,In.transition=i}}function Ep(e,t,n,r){var o=Q,i=In.transition;In.transition=null;try{Q=4,ya(e,t,n,r)}finally{Q=o,In.transition=i}}function ya(e,t,n,r){if(Po){var o=bl(e,t,n,r);if(o===null)$i(e,t,r,Ro,n),bs(e,r);else if(kp(o,e,t,n,r))r.stopPropagation();else if(bs(e,r),t&4&&-1<bp.indexOf(e)){for(;o!==null;){var i=Ur(o);if(i!==null&&xc(i),i=bl(e,t,n,r),i===null&&$i(e,t,r,Ro,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else $i(e,t,r,null,n)}}var Ro=null;function bl(e,t,n,r){if(Ro=null,e=ha(r),e=sn(e),e!==null)if(t=wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=uc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ro=e,null}function kc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fp()){case ma:return 1;case pc:return 4;case To:case pp:return 16;case hc:return 536870912;default:return 16}default:return 16}}var Ut=null,va=null,go=null;function Sc(){if(go)return go;var e,t=va,n=t.length,r,o="value"in Ut?Ut.value:Ut.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return go=o.slice(e,1<r?1-r:void 0)}function xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function eo(){return!0}function Ss(){return!1}function Xe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?eo:Ss,this.isPropagationStopped=Ss,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wa=Xe(Xn),Br=le({},Xn,{view:0,detail:0}),jp=Xe(Br),Ci,_i,nr,ti=le({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ba,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(Ci=e.screenX-nr.screenX,_i=e.screenY-nr.screenY):_i=Ci=0,nr=e),Ci)},movementY:function(e){return"movementY"in e?e.movementY:_i}}),zs=Xe(ti),Np=le({},ti,{dataTransfer:0}),Cp=Xe(Np),_p=le({},Br,{relatedTarget:0}),Di=Xe(_p),Dp=le({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Tp=Xe(Dp),Lp=le({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pp=Xe(Lp),Rp=le({},Xn,{data:0}),Es=Xe(Rp),Op={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$p={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ip(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$p[e])?!!t[e]:!1}function ba(){return Ip}var Ap=le({},Br,{key:function(e){if(e.key){var t=Op[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ba,charCode:function(e){return e.type==="keypress"?xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fp=Xe(Ap),Bp=le({},ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),js=Xe(Bp),Up=le({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ba}),Kp=Xe(Up),Wp=le({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vp=Xe(Wp),Hp=le({},ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yp=Xe(Hp),Qp=[9,13,27,32],ka=Ct&&"CompositionEvent"in window,pr=null;Ct&&"documentMode"in document&&(pr=document.documentMode);var Xp=Ct&&"TextEvent"in window&&!pr,zc=Ct&&(!ka||pr&&8<pr&&11>=pr),Ns=" ",Cs=!1;function Ec(e,t){switch(e){case"keyup":return Qp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function Gp(e,t){switch(e){case"compositionend":return jc(t);case"keypress":return t.which!==32?null:(Cs=!0,Ns);case"textInput":return e=t.data,e===Ns&&Cs?null:e;default:return null}}function Jp(e,t){if(En)return e==="compositionend"||!ka&&Ec(e,t)?(e=Sc(),go=va=Ut=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zc&&t.locale!=="ko"?null:t.data;default:return null}}var Zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zp[e.type]:t==="textarea"}function Nc(e,t,n,r){oc(r),t=Oo(t,"onChange"),0<t.length&&(n=new wa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hr=null,jr=null;function qp(e){Ic(e,0)}function ni(e){var t=Cn(e);if(Ju(t))return e}function eh(e,t){if(e==="change")return t}var Cc=!1;if(Ct){var Ti;if(Ct){var Li="oninput"in document;if(!Li){var Ds=document.createElement("div");Ds.setAttribute("oninput","return;"),Li=typeof Ds.oninput=="function"}Ti=Li}else Ti=!1;Cc=Ti&&(!document.documentMode||9<document.documentMode)}function Ts(){hr&&(hr.detachEvent("onpropertychange",_c),jr=hr=null)}function _c(e){if(e.propertyName==="value"&&ni(jr)){var t=[];Nc(t,jr,e,ha(e)),sc(qp,t)}}function th(e,t,n){e==="focusin"?(Ts(),hr=t,jr=n,hr.attachEvent("onpropertychange",_c)):e==="focusout"&&Ts()}function nh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ni(jr)}function rh(e,t){if(e==="click")return ni(t)}function oh(e,t){if(e==="input"||e==="change")return ni(t)}function ih(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:ih;function Nr(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!rl.call(t,o)||!gt(e[o],t[o]))return!1}return!0}function Ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ps(e,t){var n=Ls(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ls(n)}}function Dc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tc(){for(var e=window,t=Co();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Co(e.document)}return t}function Sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function lh(e){var t=Tc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Dc(n.ownerDocument.documentElement,n)){if(r!==null&&Sa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ps(n,i);var l=Ps(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ah=Ct&&"documentMode"in document&&11>=document.documentMode,jn=null,kl=null,mr=null,Sl=!1;function Rs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sl||jn==null||jn!==Co(r)||(r=jn,"selectionStart"in r&&Sa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mr&&Nr(mr,r)||(mr=r,r=Oo(kl,"onSelect"),0<r.length&&(t=new wa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jn)))}function to(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionend:to("Transition","TransitionEnd")},Pi={},Lc={};Ct&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function ri(e){if(Pi[e])return Pi[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lc)return Pi[e]=t[n];return e}var Pc=ri("animationend"),Rc=ri("animationiteration"),Oc=ri("animationstart"),Mc=ri("transitionend"),$c=new Map,Os="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){$c.set(e,t),vn(t,[e])}for(var Ri=0;Ri<Os.length;Ri++){var Oi=Os[Ri],sh=Oi.toLowerCase(),uh=Oi[0].toUpperCase()+Oi.slice(1);en(sh,"on"+uh)}en(Pc,"onAnimationEnd");en(Rc,"onAnimationIteration");en(Oc,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(Mc,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ch=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function Ms(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sp(r,t,void 0,e),e.currentTarget=null}function Ic(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,m=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Ms(o,a,m),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,m=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Ms(o,a,m),i=s}}}if(Do)throw e=yl,Do=!1,yl=null,e}function q(e,t){var n=t[Cl];n===void 0&&(n=t[Cl]=new Set);var r=e+"__bubble";n.has(r)||(Ac(t,e,2,!1),n.add(r))}function Mi(e,t,n){var r=0;t&&(r|=4),Ac(n,e,r,t)}var no="_reactListening"+Math.random().toString(36).slice(2);function Cr(e){if(!e[no]){e[no]=!0,Hu.forEach(function(n){n!=="selectionchange"&&(ch.has(n)||Mi(n,!1,e),Mi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[no]||(t[no]=!0,Mi("selectionchange",!1,t))}}function Ac(e,t,n,r){switch(kc(t)){case 1:var o=zp;break;case 4:o=Ep;break;default:o=ya}n=o.bind(null,t,n,e),o=void 0,!xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function $i(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=sn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}sc(function(){var m=i,u=ha(n),h=[];e:{var f=$c.get(e);if(f!==void 0){var y=wa,w=e;switch(e){case"keypress":if(xo(n)===0)break e;case"keydown":case"keyup":y=Fp;break;case"focusin":w="focus",y=Di;break;case"focusout":w="blur",y=Di;break;case"beforeblur":case"afterblur":y=Di;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Kp;break;case Pc:case Rc:case Oc:y=Tp;break;case Mc:y=Vp;break;case"scroll":y=jp;break;case"wheel":y=Yp;break;case"copy":case"cut":case"paste":y=Pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=js}var b=(t&4)!==0,C=!b&&e==="scroll",g=b?f!==null?f+"Capture":null:f;b=[];for(var d=m,x;d!==null;){x=d;var v=x.stateNode;if(x.tag===5&&v!==null&&(x=v,g!==null&&(v=kr(d,g),v!=null&&b.push(_r(d,v,x)))),C)break;d=d.return}0<b.length&&(f=new y(f,w,null,n,u),h.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==ml&&(w=n.relatedTarget||n.fromElement)&&(sn(w)||w[_t]))break e;if((y||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=m,w=w?sn(w):null,w!==null&&(C=wn(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=m),y!==w)){if(b=zs,v="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=js,v="onPointerLeave",g="onPointerEnter",d="pointer"),C=y==null?f:Cn(y),x=w==null?f:Cn(w),f=new b(v,d+"leave",y,n,u),f.target=C,f.relatedTarget=x,v=null,sn(u)===m&&(b=new b(g,d+"enter",w,n,u),b.target=x,b.relatedTarget=C,v=b),C=v,y&&w)t:{for(b=y,g=w,d=0,x=b;x;x=kn(x))d++;for(x=0,v=g;v;v=kn(v))x++;for(;0<d-x;)b=kn(b),d--;for(;0<x-d;)g=kn(g),x--;for(;d--;){if(b===g||g!==null&&b===g.alternate)break t;b=kn(b),g=kn(g)}b=null}else b=null;y!==null&&$s(h,f,y,b,!1),w!==null&&C!==null&&$s(h,C,w,b,!0)}}e:{if(f=m?Cn(m):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var S=eh;else if(_s(f))if(Cc)S=oh;else{S=nh;var j=th}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=rh);if(S&&(S=S(e,m))){Nc(h,S,n,u);break e}j&&j(e,f,m),e==="focusout"&&(j=f._wrapperState)&&j.controlled&&f.type==="number"&&cl(f,"number",f.value)}switch(j=m?Cn(m):window,e){case"focusin":(_s(j)||j.contentEditable==="true")&&(jn=j,kl=m,mr=null);break;case"focusout":mr=kl=jn=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,Rs(h,n,u);break;case"selectionchange":if(ah)break;case"keydown":case"keyup":Rs(h,n,u)}var _;if(ka)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else En?Ec(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(zc&&n.locale!=="ko"&&(En||R!=="onCompositionStart"?R==="onCompositionEnd"&&En&&(_=Sc()):(Ut=u,va="value"in Ut?Ut.value:Ut.textContent,En=!0)),j=Oo(m,R),0<j.length&&(R=new Es(R,e,null,n,u),h.push({event:R,listeners:j}),_?R.data=_:(_=jc(n),_!==null&&(R.data=_)))),(_=Xp?Gp(e,n):Jp(e,n))&&(m=Oo(m,"onBeforeInput"),0<m.length&&(u=new Es("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:m}),u.data=_))}Ic(h,t)})}function _r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=kr(e,n),i!=null&&r.unshift(_r(e,i,o)),i=kr(e,t),i!=null&&r.push(_r(e,i,o))),e=e.return}return r}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $s(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,m=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&m!==null&&(a=m,o?(s=kr(n,i),s!=null&&l.unshift(_r(n,s,a))):o||(s=kr(n,i),s!=null&&l.push(_r(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var dh=/\r\n?/g,fh=/\u0000|\uFFFD/g;function Is(e){return(typeof e=="string"?e:""+e).replace(dh,`
`).replace(fh,"")}function ro(e,t,n){if(t=Is(t),Is(e)!==t&&n)throw Error(z(425))}function Mo(){}var zl=null,El=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,ph=typeof clearTimeout=="function"?clearTimeout:void 0,As=typeof Promise=="function"?Promise:void 0,hh=typeof queueMicrotask=="function"?queueMicrotask:typeof As<"u"?function(e){return As.resolve(null).then(e).catch(mh)}:Nl;function mh(e){setTimeout(function(){throw e})}function Ii(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Er(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),vt="__reactFiber$"+Gn,Dr="__reactProps$"+Gn,_t="__reactContainer$"+Gn,Cl="__reactEvents$"+Gn,gh="__reactListeners$"+Gn,xh="__reactHandles$"+Gn;function sn(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fs(e);e!==null;){if(n=e[vt])return n;e=Fs(e)}return t}e=n,n=e.parentNode}return null}function Ur(e){return e=e[vt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function oi(e){return e[Dr]||null}var _l=[],_n=-1;function tn(e){return{current:e}}function ee(e){0>_n||(e.current=_l[_n],_l[_n]=null,_n--)}function J(e,t){_n++,_l[_n]=e.current,e.current=t}var qt={},je=tn(qt),Ae=tn(!1),hn=qt;function Un(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Fe(e){return e=e.childContextTypes,e!=null}function $o(){ee(Ae),ee(je)}function Bs(e,t,n){if(je.current!==qt)throw Error(z(168));J(je,t),J(Ae,n)}function Fc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,tp(e)||"Unknown",o));return le({},n,r)}function Io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,hn=je.current,J(je,e),J(Ae,Ae.current),!0}function Us(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=Fc(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,ee(Ae),ee(je),J(je,e)):ee(Ae),J(Ae,n)}var zt=null,ii=!1,Ai=!1;function Bc(e){zt===null?zt=[e]:zt.push(e)}function yh(e){ii=!0,Bc(e)}function nn(){if(!Ai&&zt!==null){Ai=!0;var e=0,t=Q;try{var n=zt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,ii=!1}catch(o){throw zt!==null&&(zt=zt.slice(e+1)),fc(ma,nn),o}finally{Q=t,Ai=!1}}return null}var Dn=[],Tn=0,Ao=null,Fo=0,tt=[],nt=0,mn=null,Et=1,jt="";function ln(e,t){Dn[Tn++]=Fo,Dn[Tn++]=Ao,Ao=e,Fo=t}function Uc(e,t,n){tt[nt++]=Et,tt[nt++]=jt,tt[nt++]=mn,mn=e;var r=Et;e=jt;var o=32-ht(r)-1;r&=~(1<<o),n+=1;var i=32-ht(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Et=1<<32-ht(t)+o|n<<o|r,jt=i+e}else Et=1<<i|n<<o|r,jt=e}function za(e){e.return!==null&&(ln(e,1),Uc(e,1,0))}function Ea(e){for(;e===Ao;)Ao=Dn[--Tn],Dn[Tn]=null,Fo=Dn[--Tn],Dn[Tn]=null;for(;e===mn;)mn=tt[--nt],tt[nt]=null,jt=tt[--nt],tt[nt]=null,Et=tt[--nt],tt[nt]=null}var Ve=null,We=null,re=!1,ft=null;function Kc(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ks(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,We=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:Et,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,We=null,!0):!1;default:return!1}}function Dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(re){var t=We;if(t){var n=t;if(!Ks(e,t)){if(Dl(e))throw Error(z(418));t=Yt(n.nextSibling);var r=Ve;t&&Ks(e,t)?Kc(r,n):(e.flags=e.flags&-4097|2,re=!1,Ve=e)}}else{if(Dl(e))throw Error(z(418));e.flags=e.flags&-4097|2,re=!1,Ve=e}}}function Ws(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function oo(e){if(e!==Ve)return!1;if(!re)return Ws(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=We)){if(Dl(e))throw Wc(),Error(z(418));for(;t;)Kc(e,t),t=Yt(t.nextSibling)}if(Ws(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Ve?Yt(e.stateNode.nextSibling):null;return!0}function Wc(){for(var e=We;e;)e=Yt(e.nextSibling)}function Kn(){We=Ve=null,re=!1}function ja(e){ft===null?ft=[e]:ft.push(e)}var vh=Lt.ReactCurrentBatchConfig;function rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function io(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vs(e){var t=e._init;return t(e._payload)}function Vc(e){function t(g,d){if(e){var x=g.deletions;x===null?(g.deletions=[d],g.flags|=16):x.push(d)}}function n(g,d){if(!e)return null;for(;d!==null;)t(g,d),d=d.sibling;return null}function r(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function o(g,d){return g=Jt(g,d),g.index=0,g.sibling=null,g}function i(g,d,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<d?(g.flags|=2,d):x):(g.flags|=2,d)):(g.flags|=1048576,d)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,d,x,v){return d===null||d.tag!==6?(d=Hi(x,g.mode,v),d.return=g,d):(d=o(d,x),d.return=g,d)}function s(g,d,x,v){var S=x.type;return S===zn?u(g,d,x.props.children,v,x.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===It&&Vs(S)===d.type)?(v=o(d,x.props),v.ref=rr(g,d,x),v.return=g,v):(v=zo(x.type,x.key,x.props,null,g.mode,v),v.ref=rr(g,d,x),v.return=g,v)}function m(g,d,x,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==x.containerInfo||d.stateNode.implementation!==x.implementation?(d=Yi(x,g.mode,v),d.return=g,d):(d=o(d,x.children||[]),d.return=g,d)}function u(g,d,x,v,S){return d===null||d.tag!==7?(d=fn(x,g.mode,v,S),d.return=g,d):(d=o(d,x),d.return=g,d)}function h(g,d,x){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Hi(""+d,g.mode,x),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Qr:return x=zo(d.type,d.key,d.props,null,g.mode,x),x.ref=rr(g,null,d),x.return=g,x;case Sn:return d=Yi(d,g.mode,x),d.return=g,d;case It:var v=d._init;return h(g,v(d._payload),x)}if(ar(d)||Zn(d))return d=fn(d,g.mode,x,null),d.return=g,d;io(g,d)}return null}function f(g,d,x,v){var S=d!==null?d.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(g,d,""+x,v);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qr:return x.key===S?s(g,d,x,v):null;case Sn:return x.key===S?m(g,d,x,v):null;case It:return S=x._init,f(g,d,S(x._payload),v)}if(ar(x)||Zn(x))return S!==null?null:u(g,d,x,v,null);io(g,x)}return null}function y(g,d,x,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return g=g.get(x)||null,a(d,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qr:return g=g.get(v.key===null?x:v.key)||null,s(d,g,v,S);case Sn:return g=g.get(v.key===null?x:v.key)||null,m(d,g,v,S);case It:var j=v._init;return y(g,d,x,j(v._payload),S)}if(ar(v)||Zn(v))return g=g.get(x)||null,u(d,g,v,S,null);io(d,v)}return null}function w(g,d,x,v){for(var S=null,j=null,_=d,R=d=0,B=null;_!==null&&R<x.length;R++){_.index>R?(B=_,_=null):B=_.sibling;var M=f(g,_,x[R],v);if(M===null){_===null&&(_=B);break}e&&_&&M.alternate===null&&t(g,_),d=i(M,d,R),j===null?S=M:j.sibling=M,j=M,_=B}if(R===x.length)return n(g,_),re&&ln(g,R),S;if(_===null){for(;R<x.length;R++)_=h(g,x[R],v),_!==null&&(d=i(_,d,R),j===null?S=_:j.sibling=_,j=_);return re&&ln(g,R),S}for(_=r(g,_);R<x.length;R++)B=y(_,g,R,x[R],v),B!==null&&(e&&B.alternate!==null&&_.delete(B.key===null?R:B.key),d=i(B,d,R),j===null?S=B:j.sibling=B,j=B);return e&&_.forEach(function(G){return t(g,G)}),re&&ln(g,R),S}function b(g,d,x,v){var S=Zn(x);if(typeof S!="function")throw Error(z(150));if(x=S.call(x),x==null)throw Error(z(151));for(var j=S=null,_=d,R=d=0,B=null,M=x.next();_!==null&&!M.done;R++,M=x.next()){_.index>R?(B=_,_=null):B=_.sibling;var G=f(g,_,M.value,v);if(G===null){_===null&&(_=B);break}e&&_&&G.alternate===null&&t(g,_),d=i(G,d,R),j===null?S=G:j.sibling=G,j=G,_=B}if(M.done)return n(g,_),re&&ln(g,R),S;if(_===null){for(;!M.done;R++,M=x.next())M=h(g,M.value,v),M!==null&&(d=i(M,d,R),j===null?S=M:j.sibling=M,j=M);return re&&ln(g,R),S}for(_=r(g,_);!M.done;R++,M=x.next())M=y(_,g,R,M.value,v),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?R:M.key),d=i(M,d,R),j===null?S=M:j.sibling=M,j=M);return e&&_.forEach(function(ce){return t(g,ce)}),re&&ln(g,R),S}function C(g,d,x,v){if(typeof x=="object"&&x!==null&&x.type===zn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Qr:e:{for(var S=x.key,j=d;j!==null;){if(j.key===S){if(S=x.type,S===zn){if(j.tag===7){n(g,j.sibling),d=o(j,x.props.children),d.return=g,g=d;break e}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===It&&Vs(S)===j.type){n(g,j.sibling),d=o(j,x.props),d.ref=rr(g,j,x),d.return=g,g=d;break e}n(g,j);break}else t(g,j);j=j.sibling}x.type===zn?(d=fn(x.props.children,g.mode,v,x.key),d.return=g,g=d):(v=zo(x.type,x.key,x.props,null,g.mode,v),v.ref=rr(g,d,x),v.return=g,g=v)}return l(g);case Sn:e:{for(j=x.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===x.containerInfo&&d.stateNode.implementation===x.implementation){n(g,d.sibling),d=o(d,x.children||[]),d.return=g,g=d;break e}else{n(g,d);break}else t(g,d);d=d.sibling}d=Yi(x,g.mode,v),d.return=g,g=d}return l(g);case It:return j=x._init,C(g,d,j(x._payload),v)}if(ar(x))return w(g,d,x,v);if(Zn(x))return b(g,d,x,v);io(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,d!==null&&d.tag===6?(n(g,d.sibling),d=o(d,x),d.return=g,g=d):(n(g,d),d=Hi(x,g.mode,v),d.return=g,g=d),l(g)):n(g,d)}return C}var Wn=Vc(!0),Hc=Vc(!1),Bo=tn(null),Uo=null,Ln=null,Na=null;function Ca(){Na=Ln=Uo=null}function _a(e){var t=Bo.current;ee(Bo),e._currentValue=t}function Ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function An(e,t){Uo=e,Na=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Na!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(Uo===null)throw Error(z(308));Ln=e,Uo.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var un=null;function Da(e){un===null?un=[e]:un.push(e)}function Yc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Da(t)):(n.next=o.next,o.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function Ta(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Dt(e,n)}return o=r.interleaved,o===null?(t.next=t,Da(r)):(t.next=o.next,o.next=t),r.interleaved=t,Dt(e,n)}function yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}function Hs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ko(e,t,n,r){var o=e.updateQueue;At=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,m=s.next;s.next=null,l===null?i=m:l.next=m,l=s;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==l&&(a===null?u.firstBaseUpdate=m:a.next=m,u.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,u=m=s=null,a=i;do{var f=a.lane,y=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,b=a;switch(f=t,y=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){h=w.call(y,h,f);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,f=typeof w=="function"?w.call(y,h,f):w,f==null)break e;h=le({},h,f);break e;case 2:At=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(m=u=y,s=h):u=u.next=y,l|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(u===null&&(s=h),o.baseState=s,o.firstBaseUpdate=m,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);xn|=l,e.lanes=l,e.memoizedState=h}}function Ys(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var Kr={},bt=tn(Kr),Tr=tn(Kr),Lr=tn(Kr);function cn(e){if(e===Kr)throw Error(z(174));return e}function La(e,t){switch(J(Lr,t),J(Tr,e),J(bt,Kr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fl(t,e)}ee(bt),J(bt,t)}function Vn(){ee(bt),ee(Tr),ee(Lr)}function Xc(e){cn(Lr.current);var t=cn(bt.current),n=fl(t,e.type);t!==n&&(J(Tr,e),J(bt,n))}function Pa(e){Tr.current===e&&(ee(bt),ee(Tr))}var oe=tn(0);function Wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fi=[];function Ra(){for(var e=0;e<Fi.length;e++)Fi[e]._workInProgressVersionPrimary=null;Fi.length=0}var vo=Lt.ReactCurrentDispatcher,Bi=Lt.ReactCurrentBatchConfig,gn=0,ie=null,he=null,ge=null,Vo=!1,gr=!1,Pr=0,wh=0;function Se(){throw Error(z(321))}function Oa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Ma(e,t,n,r,o,i){if(gn=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vo.current=e===null||e.memoizedState===null?zh:Eh,e=n(r,o),gr){i=0;do{if(gr=!1,Pr=0,25<=i)throw Error(z(301));i+=1,ge=he=null,t.updateQueue=null,vo.current=jh,e=n(r,o)}while(gr)}if(vo.current=Ho,t=he!==null&&he.next!==null,gn=0,ge=he=ie=null,Vo=!1,t)throw Error(z(300));return e}function $a(){var e=Pr!==0;return Pr=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function lt(){if(he===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,he=e;else{if(e===null)throw Error(z(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function Rr(e,t){return typeof t=="function"?t(e):t}function Ui(e){var t=lt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=he,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,m=i;do{var u=m.lane;if((gn&u)===u)s!==null&&(s=s.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var h={lane:u,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,ie.lanes|=u,xn|=u}m=m.next}while(m!==null&&m!==i);s===null?l=r:s.next=a,gt(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ie.lanes|=i,xn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ki(e){var t=lt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);gt(i,t.memoizedState)||(Ie=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Gc(){}function Jc(e,t){var n=ie,r=lt(),o=t(),i=!gt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ie=!0),r=r.queue,Ia(ed.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Or(9,qc.bind(null,n,r,o,t),void 0,null),xe===null)throw Error(z(349));gn&30||Zc(n,t,o)}return o}function Zc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qc(e,t,n,r){t.value=n,t.getSnapshot=r,td(t)&&nd(e)}function ed(e,t,n){return n(function(){td(t)&&nd(e)})}function td(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function nd(e){var t=Dt(e,1);t!==null&&mt(t,e,1,-1)}function Qs(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},t.queue=e,e=e.dispatch=Sh.bind(null,ie,e),[t.memoizedState,e]}function Or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rd(){return lt().memoizedState}function wo(e,t,n,r){var o=yt();ie.flags|=e,o.memoizedState=Or(1|t,n,void 0,r===void 0?null:r)}function li(e,t,n,r){var o=lt();r=r===void 0?null:r;var i=void 0;if(he!==null){var l=he.memoizedState;if(i=l.destroy,r!==null&&Oa(r,l.deps)){o.memoizedState=Or(t,n,i,r);return}}ie.flags|=e,o.memoizedState=Or(1|t,n,i,r)}function Xs(e,t){return wo(8390656,8,e,t)}function Ia(e,t){return li(2048,8,e,t)}function od(e,t){return li(4,2,e,t)}function id(e,t){return li(4,4,e,t)}function ld(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ad(e,t,n){return n=n!=null?n.concat([e]):null,li(4,4,ld.bind(null,t,e),n)}function Aa(){}function sd(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ud(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cd(e,t,n){return gn&21?(gt(n,t)||(n=mc(),ie.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function bh(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=Bi.transition;Bi.transition={};try{e(!1),t()}finally{Q=n,Bi.transition=r}}function dd(){return lt().memoizedState}function kh(e,t,n){var r=Gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fd(e))pd(t,n);else if(n=Yc(e,t,n,r),n!==null){var o=De();mt(n,e,r,o),hd(n,t,r)}}function Sh(e,t,n){var r=Gt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fd(e))pd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,gt(a,l)){var s=t.interleaved;s===null?(o.next=o,Da(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Yc(e,t,o,r),n!==null&&(o=De(),mt(n,e,r,o),hd(n,t,r))}}function fd(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function pd(e,t){gr=Vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}var Ho={readContext:it,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},zh={readContext:it,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Xs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wo(4194308,4,ld.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return wo(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kh.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:Qs,useDebugValue:Aa,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=Qs(!1),t=e[0];return e=bh.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,o=yt();if(re){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),xe===null)throw Error(z(349));gn&30||Zc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Xs(ed.bind(null,r,i,e),[e]),r.flags|=2048,Or(9,qc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yt(),t=xe.identifierPrefix;if(re){var n=jt,r=Et;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=wh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Eh={readContext:it,useCallback:sd,useContext:it,useEffect:Ia,useImperativeHandle:ad,useInsertionEffect:od,useLayoutEffect:id,useMemo:ud,useReducer:Ui,useRef:rd,useState:function(){return Ui(Rr)},useDebugValue:Aa,useDeferredValue:function(e){var t=lt();return cd(t,he.memoizedState,e)},useTransition:function(){var e=Ui(Rr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Gc,useSyncExternalStore:Jc,useId:dd,unstable_isNewReconciler:!1},jh={readContext:it,useCallback:sd,useContext:it,useEffect:Ia,useImperativeHandle:ad,useInsertionEffect:od,useLayoutEffect:id,useMemo:ud,useReducer:Ki,useRef:rd,useState:function(){return Ki(Rr)},useDebugValue:Aa,useDeferredValue:function(e){var t=lt();return he===null?t.memoizedState=e:cd(t,he.memoizedState,e)},useTransition:function(){var e=Ki(Rr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Gc,useSyncExternalStore:Jc,useId:dd,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ai={isMounted:function(e){return(e=e._reactInternals)?wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),o=Gt(e),i=Nt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Qt(e,i,o),t!==null&&(mt(t,e,o,r),yo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),o=Gt(e),i=Nt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Qt(e,i,o),t!==null&&(mt(t,e,o,r),yo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=Gt(e),o=Nt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Qt(e,o,r),t!==null&&(mt(t,e,r,n),yo(t,e,r))}};function Gs(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(o,i):!0}function md(e,t,n){var r=!1,o=qt,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(o=Fe(t)?hn:je.current,r=t.contextTypes,i=(r=r!=null)?Un(e,o):qt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ai,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ai.enqueueReplaceState(t,t.state,null)}function Rl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ta(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=it(i):(i=Fe(t)?hn:je.current,o.context=Un(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Pl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ai.enqueueReplaceState(o,o.state,null),Ko(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t){try{var n="",r=t;do n+=ep(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Wi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Nh=typeof WeakMap=="function"?WeakMap:Map;function gd(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qo||(Qo=!0,Vl=r),Ol(e,t)},n}function xd(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ol(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ol(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Zs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Nh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Bh.bind(null,e,t,n),t.then(e,e))}function qs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e)}var Ch=Lt.ReactCurrentOwner,Ie=!1;function _e(e,t,n,r){t.child=e===null?Hc(t,null,n,r):Wn(t,e.child,n,r)}function tu(e,t,n,r,o){n=n.render;var i=t.ref;return An(t,o),r=Ma(e,t,n,r,i,o),n=$a(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(re&&n&&za(t),t.flags|=1,_e(e,t,r,o),t.child)}function nu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ya(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,yd(e,t,i,r,o)):(e=zo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(l,r)&&e.ref===t.ref)return Tt(e,t,o)}return t.flags|=1,e=Jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function yd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Nr(i,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Tt(e,t,o)}return Ml(e,t,n,r,o)}function vd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Rn,Ke),Ke|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Rn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,J(Rn,Ke),Ke|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,J(Rn,Ke),Ke|=r;return _e(e,t,o,n),t.child}function wd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ml(e,t,n,r,o){var i=Fe(n)?hn:je.current;return i=Un(t,i),An(t,o),n=Ma(e,t,n,r,i,o),r=$a(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(re&&r&&za(t),t.flags|=1,_e(e,t,n,o),t.child)}function ru(e,t,n,r,o){if(Fe(n)){var i=!0;Io(t)}else i=!1;if(An(t,o),t.stateNode===null)bo(e,t),md(t,n,r),Rl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,m=n.contextType;typeof m=="object"&&m!==null?m=it(m):(m=Fe(n)?hn:je.current,m=Un(t,m));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==m)&&Js(t,l,r,m),At=!1;var f=t.memoizedState;l.state=f,Ko(t,r,l,o),s=t.memoizedState,a!==r||f!==s||Ae.current||At?(typeof u=="function"&&(Pl(t,n,u,r),s=t.memoizedState),(a=At||Gs(t,n,a,r,f,s,m))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=m,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Qc(e,t),a=t.memoizedProps,m=t.type===t.elementType?a:ut(t.type,a),l.props=m,h=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=it(s):(s=Fe(n)?hn:je.current,s=Un(t,s));var y=n.getDerivedStateFromProps;(u=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||f!==s)&&Js(t,l,r,s),At=!1,f=t.memoizedState,l.state=f,Ko(t,r,l,o);var w=t.memoizedState;a!==h||f!==w||Ae.current||At?(typeof y=="function"&&(Pl(t,n,y,r),w=t.memoizedState),(m=At||Gs(t,n,m,r,f,w,s)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=m):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return $l(e,t,n,r,i,o)}function $l(e,t,n,r,o,i){wd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Us(t,n,!1),Tt(e,t,i);r=t.stateNode,Ch.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Wn(t,e.child,null,i),t.child=Wn(t,null,a,i)):_e(e,t,a,i),t.memoizedState=r.state,o&&Us(t,n,!0),t.child}function bd(e){var t=e.stateNode;t.pendingContext?Bs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bs(e,t.context,!1),La(e,t.containerInfo)}function ou(e,t,n,r,o){return Kn(),ja(o),t.flags|=256,_e(e,t,n,r),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function kd(e,t,n){var r=t.pendingProps,o=oe.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(oe,o&1),e===null)return Tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ci(l,r,0,null),e=fn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Al(n),t.memoizedState=Il,e):Fa(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return _h(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Jt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Jt(a,i):(i=fn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Al(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Il,r}return i=e.child,e=i.sibling,r=Jt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fa(e,t){return t=ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function lo(e,t,n,r){return r!==null&&ja(r),Wn(t,e.child,null,n),e=Fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _h(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Wi(Error(z(422))),lo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ci({mode:"visible",children:r.children},o,0,null),i=fn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Wn(t,e.child,null,l),t.child.memoizedState=Al(l),t.memoizedState=Il,i);if(!(t.mode&1))return lo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(z(419)),r=Wi(i,r,void 0),lo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ie||a){if(r=xe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Dt(e,o),mt(r,e,o,-1))}return Ha(),r=Wi(Error(z(421))),lo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Uh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,We=Yt(o.nextSibling),Ve=t,re=!0,ft=null,e!==null&&(tt[nt++]=Et,tt[nt++]=jt,tt[nt++]=mn,Et=e.id,jt=e.overflow,mn=t),t=Fa(t,r.children),t.flags|=4096,t)}function iu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ll(e.return,t,n)}function Vi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Sd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(_e(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iu(e,n,t);else if(e.tag===19)iu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(oe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Wo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Vi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Wo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Vi(t,!0,n,null,i);break;case"together":Vi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dh(e,t,n){switch(t.tag){case 3:bd(t),Kn();break;case 5:Xc(t);break;case 1:Fe(t.type)&&Io(t);break;case 4:La(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;J(Bo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?kd(e,t,n):(J(oe,oe.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);J(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,vd(e,t,n)}return Tt(e,t,n)}var zd,Fl,Ed,jd;zd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fl=function(){};Ed=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,cn(bt.current);var i=null;switch(n){case"input":o=sl(e,o),r=sl(e,r),i=[];break;case"select":o=le({},o,{value:void 0}),r=le({},r,{value:void 0}),i=[];break;case"textarea":o=dl(e,o),r=dl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Mo)}pl(n,r);var l;n=null;for(m in o)if(!r.hasOwnProperty(m)&&o.hasOwnProperty(m)&&o[m]!=null)if(m==="style"){var a=o[m];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(wr.hasOwnProperty(m)?i||(i=[]):(i=i||[]).push(m,null));for(m in r){var s=r[m];if(a=o!=null?o[m]:void 0,r.hasOwnProperty(m)&&s!==a&&(s!=null||a!=null))if(m==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(m,n)),n=s;else m==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(m,s)):m==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(m,""+s):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(wr.hasOwnProperty(m)?(s!=null&&m==="onScroll"&&q("scroll",e),i||a===s||(i=[])):(i=i||[]).push(m,s))}n&&(i=i||[]).push("style",n);var m=i;(t.updateQueue=m)&&(t.flags|=4)}};jd=function(e,t,n,r){n!==r&&(t.flags|=4)};function or(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Th(e,t,n){var r=t.pendingProps;switch(Ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Fe(t.type)&&$o(),ze(t),null;case 3:return r=t.stateNode,Vn(),ee(Ae),ee(je),Ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Ql(ft),ft=null))),Fl(e,t),ze(t),null;case 5:Pa(t);var o=cn(Lr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ed(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return ze(t),null}if(e=cn(bt.current),oo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[vt]=t,r[Dr]=i,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<ur.length;o++)q(ur[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":hs(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":gs(r,i),q("invalid",r)}pl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ro(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ro(r.textContent,a,e),o=["children",""+a]):wr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&q("scroll",r)}switch(n){case"input":Xr(r),ms(r,i,!0);break;case"textarea":Xr(r),xs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Mo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ec(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[vt]=t,e[Dr]=r,zd(e,t,!1,!1),t.stateNode=e;e:{switch(l=hl(n,r),n){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<ur.length;o++)q(ur[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":hs(e,r),o=sl(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=le({},r,{value:void 0}),q("invalid",e);break;case"textarea":gs(e,r),o=dl(e,r),q("invalid",e);break;default:o=r}pl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?rc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&tc(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&br(e,s):typeof s=="number"&&br(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(wr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&q("scroll",e):s!=null&&ca(e,i,s,l))}switch(n){case"input":Xr(e),ms(e,r,!1);break;case"textarea":Xr(e),xs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?On(e,!!r.multiple,i,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)jd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=cn(Lr.current),cn(bt.current),oo(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(i=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:ro(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ro(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return ze(t),null;case 13:if(ee(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&We!==null&&t.mode&1&&!(t.flags&128))Wc(),Kn(),t.flags|=98560,i=!1;else if(i=oo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[vt]=t}else Kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),i=!1}else ft!==null&&(Ql(ft),ft=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?me===0&&(me=3):Ha())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Vn(),Fl(e,t),e===null&&Cr(t.stateNode.containerInfo),ze(t),null;case 10:return _a(t.type._context),ze(t),null;case 17:return Fe(t.type)&&$o(),ze(t),null;case 19:if(ee(oe),i=t.memoizedState,i===null)return ze(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)or(i,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Wo(e),l!==null){for(t.flags|=128,or(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&ue()>Yn&&(t.flags|=128,r=!0,or(i,!1),t.lanes=4194304)}else{if(!r)if(e=Wo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),or(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!re)return ze(t),null}else 2*ue()-i.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,or(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ue(),t.sibling=null,n=oe.current,J(oe,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Va(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function Lh(e,t){switch(Ea(t),t.tag){case 1:return Fe(t.type)&&$o(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),ee(Ae),ee(je),Ra(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pa(t),null;case 13:if(ee(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(oe),null;case 4:return Vn(),null;case 10:return _a(t.type._context),null;case 22:case 23:return Va(),null;case 24:return null;default:return null}}var ao=!1,Ee=!1,Ph=typeof WeakSet=="function"?WeakSet:Set,O=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function Bl(e,t,n){try{n()}catch(r){ae(e,t,r)}}var lu=!1;function Rh(e,t){if(zl=Po,e=Tc(),Sa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,m=0,u=0,h=e,f=null;t:for(;;){for(var y;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(y=h.firstChild)!==null;)f=h,h=y;for(;;){if(h===e)break t;if(f===n&&++m===o&&(a=l),f===i&&++u===r&&(s=l),(y=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(El={focusedElem:e,selectionRange:n},Po=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,C=w.memoizedState,g=t.stateNode,d=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:ut(t.type,b),C);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(v){ae(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return w=lu,lu=!1,w}function xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Bl(t,n,i)}o=o.next}while(o!==r)}}function si(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ul(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nd(e){var t=e.alternate;t!==null&&(e.alternate=null,Nd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[Dr],delete t[Cl],delete t[gh],delete t[xh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cd(e){return e.tag===5||e.tag===3||e.tag===4}function au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mo));else if(r!==4&&(e=e.child,e!==null))for(Kl(e,t,n),e=e.sibling;e!==null;)Kl(e,t,n),e=e.sibling}function Wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}var ve=null,ct=!1;function $t(e,t,n){for(n=n.child;n!==null;)_d(e,t,n),n=n.sibling}function _d(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(ei,n)}catch{}switch(n.tag){case 5:Ee||Pn(n,t);case 6:var r=ve,o=ct;ve=null,$t(e,t,n),ve=r,ct=o,ve!==null&&(ct?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(ct?(e=ve,n=n.stateNode,e.nodeType===8?Ii(e.parentNode,n):e.nodeType===1&&Ii(e,n),Er(e)):Ii(ve,n.stateNode));break;case 4:r=ve,o=ct,ve=n.stateNode.containerInfo,ct=!0,$t(e,t,n),ve=r,ct=o;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Bl(n,t,l),o=o.next}while(o!==r)}$t(e,t,n);break;case 1:if(!Ee&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,t,a)}$t(e,t,n);break;case 21:$t(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,$t(e,t,n),Ee=r):$t(e,t,n);break;default:$t(e,t,n)}}function su(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ph),t.forEach(function(r){var o=Kh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ve=a.stateNode,ct=!1;break e;case 3:ve=a.stateNode.containerInfo,ct=!0;break e;case 4:ve=a.stateNode.containerInfo,ct=!0;break e}a=a.return}if(ve===null)throw Error(z(160));_d(i,l,o),ve=null,ct=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(m){ae(o,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dd(t,e),t=t.sibling}function Dd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),xt(e),r&4){try{xr(3,e,e.return),si(3,e)}catch(b){ae(e,e.return,b)}try{xr(5,e,e.return)}catch(b){ae(e,e.return,b)}}break;case 1:st(t,e),xt(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(st(t,e),xt(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var o=e.stateNode;try{br(o,"")}catch(b){ae(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Zu(o,i),hl(a,l);var m=hl(a,i);for(l=0;l<s.length;l+=2){var u=s[l],h=s[l+1];u==="style"?rc(o,h):u==="dangerouslySetInnerHTML"?tc(o,h):u==="children"?br(o,h):ca(o,u,h,m)}switch(a){case"input":ul(o,i);break;case"textarea":qu(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?On(o,!!i.multiple,y,!1):f!==!!i.multiple&&(i.defaultValue!=null?On(o,!!i.multiple,i.defaultValue,!0):On(o,!!i.multiple,i.multiple?[]:"",!1))}o[Dr]=i}catch(b){ae(e,e.return,b)}}break;case 6:if(st(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){ae(e,e.return,b)}}break;case 3:if(st(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Er(t.containerInfo)}catch(b){ae(e,e.return,b)}break;case 4:st(t,e),xt(e);break;case 13:st(t,e),xt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ka=ue())),r&4&&su(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(m=Ee)||u,st(t,e),Ee=m):st(t,e),xt(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!u&&e.mode&1)for(O=e,u=e.child;u!==null;){for(h=O=u;O!==null;){switch(f=O,y=f.child,f.tag){case 0:case 11:case 14:case 15:xr(4,f,f.return);break;case 1:Pn(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){ae(r,n,b)}}break;case 5:Pn(f,f.return);break;case 22:if(f.memoizedState!==null){cu(h);continue}}y!==null?(y.return=f,O=y):cu(h)}u=u.sibling}e:for(u=null,h=e;;){if(h.tag===5){if(u===null){u=h;try{o=h.stateNode,m?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=nc("display",l))}catch(b){ae(e,e.return,b)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=m?"":h.memoizedProps}catch(b){ae(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:st(t,e),xt(e),r&4&&su(e);break;case 21:break;default:st(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cd(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(br(o,""),r.flags&=-33);var i=au(e);Wl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=au(e);Kl(e,a,l);break;default:throw Error(z(161))}}catch(s){ae(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Oh(e,t,n){O=e,Td(e)}function Td(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||ao;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Ee;a=ao;var m=Ee;if(ao=l,(Ee=s)&&!m)for(O=o;O!==null;)l=O,s=l.child,l.tag===22&&l.memoizedState!==null?du(o):s!==null?(s.return=l,O=s):du(o);for(;i!==null;)O=i,Td(i),i=i.sibling;O=o,ao=a,Ee=m}uu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):uu(e)}}function uu(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||si(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ys(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ys(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var u=m.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Er(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ee||t.flags&512&&Ul(t)}catch(f){ae(t,t.return,f)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function cu(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function du(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{si(4,t)}catch(s){ae(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ae(t,o,s)}}var i=t.return;try{Ul(t)}catch(s){ae(t,i,s)}break;case 5:var l=t.return;try{Ul(t)}catch(s){ae(t,l,s)}}}catch(s){ae(t,t.return,s)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Mh=Math.ceil,Yo=Lt.ReactCurrentDispatcher,Ba=Lt.ReactCurrentOwner,ot=Lt.ReactCurrentBatchConfig,H=0,xe=null,fe=null,be=0,Ke=0,Rn=tn(0),me=0,Mr=null,xn=0,ui=0,Ua=0,yr=null,Me=null,Ka=0,Yn=1/0,St=null,Qo=!1,Vl=null,Xt=null,so=!1,Kt=null,Xo=0,vr=0,Hl=null,ko=-1,So=0;function De(){return H&6?ue():ko!==-1?ko:ko=ue()}function Gt(e){return e.mode&1?H&2&&be!==0?be&-be:vh.transition!==null?(So===0&&(So=mc()),So):(e=Q,e!==0||(e=window.event,e=e===void 0?16:kc(e.type)),e):1}function mt(e,t,n,r){if(50<vr)throw vr=0,Hl=null,Error(z(185));Fr(e,n,r),(!(H&2)||e!==xe)&&(e===xe&&(!(H&2)&&(ui|=n),me===4&&Bt(e,be)),Be(e,r),n===1&&H===0&&!(t.mode&1)&&(Yn=ue()+500,ii&&nn()))}function Be(e,t){var n=e.callbackNode;vp(e,t);var r=Lo(e,e===xe?be:0);if(r===0)n!==null&&ws(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ws(n),t===1)e.tag===0?yh(fu.bind(null,e)):Bc(fu.bind(null,e)),hh(function(){!(H&6)&&nn()}),n=null;else{switch(gc(r)){case 1:n=ma;break;case 4:n=pc;break;case 16:n=To;break;case 536870912:n=hc;break;default:n=To}n=Ad(n,Ld.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ld(e,t){if(ko=-1,So=0,H&6)throw Error(z(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Lo(e,e===xe?be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Go(e,r);else{t=r;var o=H;H|=2;var i=Rd();(xe!==e||be!==t)&&(St=null,Yn=ue()+500,dn(e,t));do try{Ah();break}catch(a){Pd(e,a)}while(!0);Ca(),Yo.current=i,H=o,fe!==null?t=0:(xe=null,be=0,t=me)}if(t!==0){if(t===2&&(o=vl(e),o!==0&&(r=o,t=Yl(e,o))),t===1)throw n=Mr,dn(e,0),Bt(e,r),Be(e,ue()),n;if(t===6)Bt(e,r);else{if(o=e.current.alternate,!(r&30)&&!$h(o)&&(t=Go(e,r),t===2&&(i=vl(e),i!==0&&(r=i,t=Yl(e,i))),t===1))throw n=Mr,dn(e,0),Bt(e,r),Be(e,ue()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:an(e,Me,St);break;case 3:if(Bt(e,r),(r&130023424)===r&&(t=Ka+500-ue(),10<t)){if(Lo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Nl(an.bind(null,e,Me,St),t);break}an(e,Me,St);break;case 4:if(Bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ht(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mh(r/1960))-r,10<r){e.timeoutHandle=Nl(an.bind(null,e,Me,St),r);break}an(e,Me,St);break;case 5:an(e,Me,St);break;default:throw Error(z(329))}}}return Be(e,ue()),e.callbackNode===n?Ld.bind(null,e):null}function Yl(e,t){var n=yr;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=Go(e,t),e!==2&&(t=Me,Me=n,t!==null&&Ql(t)),e}function Ql(e){Me===null?Me=e:Me.push.apply(Me,e)}function $h(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!gt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bt(e,t){for(t&=~Ua,t&=~ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function fu(e){if(H&6)throw Error(z(327));Fn();var t=Lo(e,0);if(!(t&1))return Be(e,ue()),null;var n=Go(e,t);if(e.tag!==0&&n===2){var r=vl(e);r!==0&&(t=r,n=Yl(e,r))}if(n===1)throw n=Mr,dn(e,0),Bt(e,t),Be(e,ue()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Me,St),Be(e,ue()),null}function Wa(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(Yn=ue()+500,ii&&nn())}}function yn(e){Kt!==null&&Kt.tag===0&&!(H&6)&&Fn();var t=H;H|=1;var n=ot.transition,r=Q;try{if(ot.transition=null,Q=1,e)return e()}finally{Q=r,ot.transition=n,H=t,!(H&6)&&nn()}}function Va(){Ke=Rn.current,ee(Rn)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ph(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Ea(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$o();break;case 3:Vn(),ee(Ae),ee(je),Ra();break;case 5:Pa(r);break;case 4:Vn();break;case 13:ee(oe);break;case 19:ee(oe);break;case 10:_a(r.type._context);break;case 22:case 23:Va()}n=n.return}if(xe=e,fe=e=Jt(e.current,null),be=Ke=t,me=0,Mr=null,Ua=ui=xn=0,Me=yr=null,un!==null){for(t=0;t<un.length;t++)if(n=un[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}un=null}return e}function Pd(e,t){do{var n=fe;try{if(Ca(),vo.current=Ho,Vo){for(var r=ie.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Vo=!1}if(gn=0,ge=he=ie=null,gr=!1,Pr=0,Ba.current=null,n===null||n.return===null){me=1,Mr=t,fe=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=be,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var m=s,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=qs(l);if(y!==null){y.flags&=-257,eu(y,l,a,i,t),y.mode&1&&Zs(i,m,t),t=y,s=m;var w=t.updateQueue;if(w===null){var b=new Set;b.add(s),t.updateQueue=b}else w.add(s);break e}else{if(!(t&1)){Zs(i,m,t),Ha();break e}s=Error(z(426))}}else if(re&&a.mode&1){var C=qs(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),eu(C,l,a,i,t),ja(Hn(s,a));break e}}i=s=Hn(s,a),me!==4&&(me=2),yr===null?yr=[i]:yr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=gd(i,s,t);Hs(i,g);break e;case 1:a=s;var d=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Xt===null||!Xt.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=xd(i,a,t);Hs(i,v);break e}}i=i.return}while(i!==null)}Md(n)}catch(S){t=S,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function Rd(){var e=Yo.current;return Yo.current=Ho,e===null?Ho:e}function Ha(){(me===0||me===3||me===2)&&(me=4),xe===null||!(xn&268435455)&&!(ui&268435455)||Bt(xe,be)}function Go(e,t){var n=H;H|=2;var r=Rd();(xe!==e||be!==t)&&(St=null,dn(e,t));do try{Ih();break}catch(o){Pd(e,o)}while(!0);if(Ca(),H=n,Yo.current=r,fe!==null)throw Error(z(261));return xe=null,be=0,me}function Ih(){for(;fe!==null;)Od(fe)}function Ah(){for(;fe!==null&&!cp();)Od(fe)}function Od(e){var t=Id(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?Md(e):fe=t,Ba.current=null}function Md(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Lh(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,fe=null;return}}else if(n=Th(n,t,Ke),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);me===0&&(me=5)}function an(e,t,n){var r=Q,o=ot.transition;try{ot.transition=null,Q=1,Fh(e,t,n,r)}finally{ot.transition=o,Q=r}return null}function Fh(e,t,n,r){do Fn();while(Kt!==null);if(H&6)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(wp(e,i),e===xe&&(fe=xe=null,be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||so||(so=!0,Ad(To,function(){return Fn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ot.transition,ot.transition=null;var l=Q;Q=1;var a=H;H|=4,Ba.current=null,Rh(e,n),Dd(n,e),lh(El),Po=!!zl,El=zl=null,e.current=n,Oh(n),dp(),H=a,Q=l,ot.transition=i}else e.current=n;if(so&&(so=!1,Kt=e,Xo=o),i=e.pendingLanes,i===0&&(Xt=null),hp(n.stateNode),Be(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Qo)throw Qo=!1,e=Vl,Vl=null,e;return Xo&1&&e.tag!==0&&Fn(),i=e.pendingLanes,i&1?e===Hl?vr++:(vr=0,Hl=e):vr=0,nn(),null}function Fn(){if(Kt!==null){var e=gc(Xo),t=ot.transition,n=Q;try{if(ot.transition=null,Q=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,Xo=0,H&6)throw Error(z(331));var o=H;for(H|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var m=a[s];for(O=m;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:xr(8,u,i)}var h=u.child;if(h!==null)h.return=u,O=h;else for(;O!==null;){u=O;var f=u.sibling,y=u.return;if(Nd(u),u===m){O=null;break}if(f!==null){f.return=y,O=f;break}O=y}}}var w=i.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var C=b.sibling;b.sibling=null,b=C}while(b!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:xr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,O=g;break e}O=i.return}}var d=e.current;for(O=d;O!==null;){l=O;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,O=x;else e:for(l=d;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:si(9,a)}}catch(S){ae(a,a.return,S)}if(a===l){O=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,O=v;break e}O=a.return}}if(H=o,nn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(ei,e)}catch{}r=!0}return r}finally{Q=n,ot.transition=t}}return!1}function pu(e,t,n){t=Hn(n,t),t=gd(e,t,1),e=Qt(e,t,1),t=De(),e!==null&&(Fr(e,1,t),Be(e,t))}function ae(e,t,n){if(e.tag===3)pu(e,e,n);else for(;t!==null;){if(t.tag===3){pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=Hn(n,e),e=xd(t,e,1),t=Qt(t,e,1),e=De(),t!==null&&(Fr(t,1,e),Be(t,e));break}}t=t.return}}function Bh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(be&n)===n&&(me===4||me===3&&(be&130023424)===be&&500>ue()-Ka?dn(e,0):Ua|=n),Be(e,t)}function $d(e,t){t===0&&(e.mode&1?(t=Zr,Zr<<=1,!(Zr&130023424)&&(Zr=4194304)):t=1);var n=De();e=Dt(e,t),e!==null&&(Fr(e,t,n),Be(e,n))}function Uh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$d(e,n)}function Kh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),$d(e,n)}var Id;Id=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,Dh(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,re&&t.flags&1048576&&Uc(t,Fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bo(e,t),e=t.pendingProps;var o=Un(t,je.current);An(t,n),o=Ma(null,t,r,e,o,n);var i=$a();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(i=!0,Io(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ta(t),o.updater=ai,t.stateNode=o,o._reactInternals=t,Rl(t,r,e,n),t=$l(null,t,r,!0,i,n)):(t.tag=0,re&&i&&za(t),_e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Vh(r),e=ut(r,e),o){case 0:t=Ml(null,t,r,e,n);break e;case 1:t=ru(null,t,r,e,n);break e;case 11:t=tu(null,t,r,e,n);break e;case 14:t=nu(null,t,r,ut(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),Ml(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),ru(e,t,r,o,n);case 3:e:{if(bd(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Qc(e,t),Ko(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Hn(Error(z(423)),t),t=ou(e,t,r,n,o);break e}else if(r!==o){o=Hn(Error(z(424)),t),t=ou(e,t,r,n,o);break e}else for(We=Yt(t.stateNode.containerInfo.firstChild),Ve=t,re=!0,ft=null,n=Hc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kn(),r===o){t=Tt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Xc(t),e===null&&Tl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,jl(r,o)?l=null:i!==null&&jl(r,i)&&(t.flags|=32),wd(e,t),_e(e,t,l,n),t.child;case 6:return e===null&&Tl(t),null;case 13:return kd(e,t,n);case 4:return La(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),tu(e,t,r,o,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,J(Bo,r._currentValue),r._currentValue=l,i!==null)if(gt(i.value,l)){if(i.children===o.children&&!Ae.current){t=Tt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Nt(-1,n&-n),s.tag=2;var m=i.updateQueue;if(m!==null){m=m.shared;var u=m.pending;u===null?s.next=s:(s.next=u.next,u.next=s),m.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ll(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(z(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ll(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}_e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,An(t,n),o=it(o),r=r(o),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,o=ut(r,t.pendingProps),o=ut(r.type,o),nu(e,t,r,o,n);case 15:return yd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),bo(e,t),t.tag=1,Fe(r)?(e=!0,Io(t)):e=!1,An(t,n),md(t,r,o),Rl(t,r,o,n),$l(null,t,r,!0,e,n);case 19:return Sd(e,t,n);case 22:return vd(e,t,n)}throw Error(z(156,t.tag))};function Ad(e,t){return fc(e,t)}function Wh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new Wh(e,t,n,r)}function Ya(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vh(e){if(typeof e=="function")return Ya(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fa)return 11;if(e===pa)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ya(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case zn:return fn(n.children,o,i,t);case da:l=8,o|=8;break;case ol:return e=rt(12,n,t,o|2),e.elementType=ol,e.lanes=i,e;case il:return e=rt(13,n,t,o),e.elementType=il,e.lanes=i,e;case ll:return e=rt(19,n,t,o),e.elementType=ll,e.lanes=i,e;case Xu:return ci(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yu:l=10;break e;case Qu:l=9;break e;case fa:l=11;break e;case pa:l=14;break e;case It:l=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=rt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function fn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function ci(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Xu,e.lanes=n,e.stateNode={isHidden:!1},e}function Hi(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Yi(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ni(0),this.expirationTimes=Ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qa(e,t,n,r,o,i,l,a,s){return e=new Hh(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ta(i),e}function Yh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fd(e){if(!e)return qt;e=e._reactInternals;e:{if(wn(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Fe(n))return Fc(e,n,t)}return t}function Bd(e,t,n,r,o,i,l,a,s){return e=Qa(n,r,!0,e,o,i,l,a,s),e.context=Fd(null),n=e.current,r=De(),o=Gt(n),i=Nt(r,o),i.callback=t??null,Qt(n,i,o),e.current.lanes=o,Fr(e,o,r),Be(e,r),e}function di(e,t,n,r){var o=t.current,i=De(),l=Gt(o);return n=Fd(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(o,t,l),e!==null&&(mt(e,o,l,i),yo(e,o,l)),l}function Jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xa(e,t){hu(e,t),(e=e.alternate)&&hu(e,t)}function Qh(){return null}var Ud=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ga(e){this._internalRoot=e}fi.prototype.render=Ga.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));di(e,t,null,null)};fi.prototype.unmount=Ga.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){di(null,e,null,null)}),t[_t]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=vc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&t!==0&&t<Ft[n].priority;n++);Ft.splice(n,0,e),n===0&&bc(e)}};function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mu(){}function Xh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var m=Jo(l);i.call(m)}}var l=Bd(t,r,e,0,null,!1,!1,"",mu);return e._reactRootContainer=l,e[_t]=l.current,Cr(e.nodeType===8?e.parentNode:e),yn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var m=Jo(s);a.call(m)}}var s=Qa(e,0,!1,null,null,!1,!1,"",mu);return e._reactRootContainer=s,e[_t]=s.current,Cr(e.nodeType===8?e.parentNode:e),yn(function(){di(t,s,n,r)}),s}function hi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Jo(l);a.call(s)}}di(t,l,e,o)}else l=Xh(n,t,e,o,r);return Jo(l)}xc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(ga(t,n|1),Be(t,ue()),!(H&6)&&(Yn=ue()+500,nn()))}break;case 13:yn(function(){var r=Dt(e,1);if(r!==null){var o=De();mt(r,e,1,o)}}),Xa(e,1)}};xa=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=De();mt(t,e,134217728,n)}Xa(e,134217728)}};yc=function(e){if(e.tag===13){var t=Gt(e),n=Dt(e,t);if(n!==null){var r=De();mt(n,e,t,r)}Xa(e,t)}};vc=function(){return Q};wc=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};gl=function(e,t,n){switch(t){case"input":if(ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=oi(r);if(!o)throw Error(z(90));Ju(r),ul(r,o)}}}break;case"textarea":qu(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};lc=Wa;ac=yn;var Gh={usingClientEntryPoint:!1,Events:[Ur,Cn,oi,oc,ic,Wa]},ir={findFiberByHostInstance:sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jh={bundleType:ir.bundleType,version:ir.version,rendererPackageName:ir.rendererPackageName,rendererConfig:ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cc(e),e===null?null:e.stateNode},findFiberByHostInstance:ir.findFiberByHostInstance||Qh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uo.isDisabled&&uo.supportsFiber)try{ei=uo.inject(Jh),wt=uo}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gh;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ja(t))throw Error(z(200));return Yh(e,t,null,n)};Qe.createRoot=function(e,t){if(!Ja(e))throw Error(z(299));var n=!1,r="",o=Ud;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qa(e,1,!1,null,null,n,!1,r,o),e[_t]=t.current,Cr(e.nodeType===8?e.parentNode:e),new Ga(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=cc(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return yn(e)};Qe.hydrate=function(e,t,n){if(!pi(t))throw Error(z(200));return hi(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!Ja(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Ud;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Bd(t,null,e,1,n??null,o,!1,i,l),e[_t]=t.current,Cr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new fi(t)};Qe.render=function(e,t,n){if(!pi(t))throw Error(z(200));return hi(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!pi(e))throw Error(z(40));return e._reactRootContainer?(yn(function(){hi(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Qe.unstable_batchedUpdates=Wa;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pi(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return hi(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function Kd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kd)}catch(e){console.error(e)}}Kd(),Ku.exports=Qe;var Zh=Ku.exports,Wd,gu=Zh;Wd=gu.createRoot,gu.hydrateRoot;const qh="modulepreload",em=function(e,t){return new URL(e,t).href},xu={},Pt=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(m=>{if(m=em(m,r),m in xu)return;xu[m]=!0;const u=m.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!r)for(let w=l.length-1;w>=0;w--){const b=l[w];if(b.href===m&&(!u||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${h}`))return;const y=document.createElement("link");if(y.rel=u?"stylesheet":qh,u||(y.as="script"),y.crossOrigin="",y.href=m,s&&y.setAttribute("nonce",s),document.head.appendChild(y),u)return new Promise((w,b)=>{y.addEventListener("load",w),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${m}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};function tm(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:l}=e;let a,s;const m=async(h=!0)=>{await s};async function u(){if("serviceWorker"in navigator){if(a=await Pt(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:h}},[],import.meta.url).then(({Workbox:h})=>new h("./sw.js",{scope:"./",type:"classic"})).catch(h=>{l==null||l(h)}),!a)return;a.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),a.addEventListener("installed",h=>{h.isUpdate||r==null||r()}),a.register({immediate:t}).then(h=>{i?i("./sw.js",h):o==null||o(h)}).catch(h=>{l==null||l(h)})}}return s=u(),m}const Xl=(e,t)=>t.some(n=>e instanceof n);let yu,vu;function nm(){return yu||(yu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rm(){return vu||(vu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gl=new WeakMap,Qi=new WeakMap,mi=new WeakMap;function om(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",l)},i=()=>{n(pn(e.result)),o()},l=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",l)});return mi.set(t,e),t}function im(e){if(Gl.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",l),e.removeEventListener("abort",l)},i=()=>{n(),o()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",l),e.addEventListener("abort",l)});Gl.set(e,t)}let Jl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Gl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Vd(e){Jl=e(Jl)}function lm(e){return rm().includes(e)?function(...t){return e.apply(Zl(this),t),pn(this.request)}:function(...t){return pn(e.apply(Zl(this),t))}}function am(e){return typeof e=="function"?lm(e):(e instanceof IDBTransaction&&im(e),Xl(e,nm())?new Proxy(e,Jl):e)}function pn(e){if(e instanceof IDBRequest)return om(e);if(Qi.has(e))return Qi.get(e);const t=am(e);return t!==e&&(Qi.set(e,t),mi.set(t,e)),t}const Zl=e=>mi.get(e);function sm(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const l=indexedDB.open(e,t),a=pn(l);return r&&l.addEventListener("upgradeneeded",s=>{r(pn(l.result),s.oldVersion,s.newVersion,pn(l.transaction),s)}),n&&l.addEventListener("blocked",s=>n(s.oldVersion,s.newVersion,s)),a.then(s=>{i&&s.addEventListener("close",()=>i()),o&&s.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),a}const um=["get","getKey","getAll","getAllKeys","count"],cm=["put","add","delete","clear"],Xi=new Map;function wu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Xi.get(t))return Xi.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=cm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||um.includes(n)))return;const i=async function(l,...a){const s=this.transaction(l,o?"readwrite":"readonly");let m=s.store;return r&&(m=m.index(a.shift())),(await Promise.all([m[n](...a),o&&s.done]))[0]};return Xi.set(t,i),i}Vd(e=>({...e,get:(t,n,r)=>wu(t,n)||e.get(t,n,r),has:(t,n)=>!!wu(t,n)||e.has(t,n)}));const dm=["continue","continuePrimaryKey","advance"],bu={},ql=new WeakMap,Hd=new WeakMap,fm={get(e,t){if(!dm.includes(t))return e[t];let n=bu[t];return n||(n=bu[t]=function(...r){ql.set(this,Hd.get(this)[t](...r))}),n}};async function*pm(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const n=new Proxy(t,fm);for(Hd.set(n,t),mi.set(n,Zl(t));t;)yield n,t=await(ql.get(n)||t.continue()),ql.delete(n)}function ku(e,t){return t===Symbol.asyncIterator&&Xl(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&Xl(e,[IDBIndex,IDBObjectStore])}Vd(e=>({...e,get(t,n,r){return ku(t,n)?pm:e.get(t,n,r)},has(t,n){return ku(t,n)||e.has(t,n)}}));const hm="nachumin-diary",mm=1,$r="kv",gm="line-diary-entries-v1",et="rooms-v1",$e=e=>`room-data-v1:${e}`,xm=e=>`trash-v1:${e}:${Date.now()}`,Eo="declaration-v1",Ir="marks-v1",ym=["・","❤︎","🩷","💛","🩵","💜","✨","✔︎"],Zo=e=>`donelog-v1:${e}`,jo=e=>`habits-v1:${e}`,Yd=e=>`habitlog-v1:${e}`,Qd=e=>`habitseed-v1:${e}`,ea=e=>`period-v1:${e}`,No=e=>`symptoms-v1:${e}`,Xd=e=>`symptomlog-v1:${e}`,Gd=e=>`symptomseed-v1:${e}`,ta=e=>`futurescript-v1:${e}`,pg=(e,t)=>`albumfull-v1:${e}:${t}`,hg=(e,t)=>`albumthumb-v1:${e}:${t}`,Gi="albumseed-v1",vm="album-main",Ji="nowseed-v1",wm="now-main",Zi="futureseed-v1",bm="future-main",Su="startroom-v1",qi="backup-v1",de="diary-main",Za=sm(hm,mm,{upgrade(e){e.objectStoreNames.contains($r)||e.createObjectStore($r)}});async function W(e){return(await Za).get($r,e)}async function K(e,t){return(await Za).put($r,t,e)}async function mg(e){return(await Za).delete($r,e)}async function gg(){try{if(navigator.storage&&navigator.storage.estimate)return await navigator.storage.estimate()}catch{}return null}async function km(){try{navigator.storage&&navigator.storage.persist&&await navigator.storage.persist()}catch{}}async function Sm(){const e=await W(et);if(e)return e;let t=await W(gm);if(typeof t=="string")try{t=JSON.parse(t)}catch{t=null}const n=t&&typeof t=="object"?t:{};await K($e(de),n);const r=Object.keys(n).sort(),o=r[r.length-1],i=[{id:de,type:"diary",name:"日記",emoji:"💗",createdAt:Date.now(),lastAt:o?Date.now():0,preview:o?n[o].text.split(`
`)[0].slice(0,40):""}];return await K(et,i),i}const zm=5,Em=zm*60*60*1e3,Jd=()=>new Date(Date.now()-Em),Ye=e=>String(e).padStart(2,"0"),pt=e=>`${e.getFullYear()}-${Ye(e.getMonth()+1)}-${Ye(e.getDate())}`,Ce=e=>e.split("-").join("/"),we=e=>{const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},Zd=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],xg=["S","M","T","W","T","F","S"],jm=e=>`${Ce(e)} ${Zd[we(e).getDay()]}`,co=(e,t,n)=>1+(8-new Date(e,t-1,1).getDay())%7+(n-1)*7,Nm=e=>Math.floor(20.8431+.242194*(e-1980)-Math.floor((e-1980)/4)),Cm=e=>Math.floor(23.2488+.242194*(e-1980)-Math.floor((e-1980)/4)),el={};function _m(e){if(el[e])return el[e];const t={},n=(r,o,i)=>{t[`${e}-${Ye(r)}-${Ye(o)}`]=i};n(1,1,"元日"),n(1,co(e,1,2),"成人の日"),n(2,11,"建国記念の日"),n(2,23,"天皇誕生日"),n(3,Nm(e),"春分の日"),n(4,29,"昭和の日"),n(5,3,"憲法記念日"),n(5,4,"みどりの日"),n(5,5,"こどもの日"),n(7,co(e,7,3),"海の日"),n(8,11,"山の日"),n(9,co(e,9,3),"敬老の日"),n(9,Cm(e),"秋分の日"),n(10,co(e,10,2),"スポーツの日"),n(11,3,"文化の日"),n(11,23,"勤労感謝の日");for(const r of Object.keys(t)){const o=we(r),i=new Date(o);i.setDate(i.getDate()+1);const l=new Date(o);l.setDate(l.getDate()+2),t[pt(l)]&&!t[pt(i)]&&i.getDay()!==0&&(t[pt(i)]="国民の休日")}for(const r of Object.keys({...t})){if(we(r).getDay()!==0)continue;const o=we(r);do o.setDate(o.getDate()+1);while(t[pt(o)]);t[pt(o)]="振替休日"}return el[e]=t,t}const Dm=e=>!!_m(Number(e.slice(0,4)))[e],Tm=e=>{if(Dm(e))return"sun";const t=we(e).getDay();return t===0?"sun":t===6?"sat":""},yg=e=>"¥"+Math.round(Number(e)||0).toLocaleString("ja-JP"),vg=e=>e.slice(0,7),wg=(e,t)=>{const[n,r]=e.split("-");return(t&&Number(n)===t?"":`${n}年`)+`${Number(r)}月`},dt=()=>pt(Jd()),zu=()=>{const e=Jd();return e.setDate(e.getDate()-1),pt(e)},qd=()=>{const e=new Date;return`${e.getHours()}:${Ye(e.getMinutes())}`},Lm=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),bg=e=>String(e||"").replace(/[\/\\:*?"<>| -]/g,"_").replace(/\s+/g," ").trim()||"room";async function Pm(e){try{return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.top="0",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}const qe=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36),kg=e=>Object.keys(e).sort().map(t=>`🩷${jm(t)}🩷 ${e[t].time}
${e[t].text}`).join(`

──────────

`),Sg=e=>{const t={},n=e.split(/\n*─{3,}\n*/);for(const r of n){const o=r.trim();if(!o)continue;const i=o.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*(?:[（(]?(?:[A-Za-z]{3}|[日月火水木金土])[)）]?)?\s*🩷?\s*(\d{1,2}:\d{2})?\s*\n?([\s\S]*)$/u);if(!i)continue;const l=`${i[1]}-${Ye(Number(i[2]))}-${Ye(Number(i[3]))}`,a=i[5].trim();a&&(t[l]={text:a,time:i[4]||"0:00"})}return t},zg=(e,t)=>{const n=[];let r="";for(const o of e)o.dateKey!==r&&(r=o.dateKey,n.length&&n.push(""),n.push(`🩷${Ce(r)}🩷`)),n.push(`${o.time?o.time+" ":""}${t(o.memberId)}「${o.text}」`);return n.join(`
`)},Eg=e=>{const t=[];let n=dt(),r=null;const o=()=>{if(!r)return;let i=r.lines.join(`
`).trim();i.endsWith("」")&&(i=i.slice(0,-1)),i&&t.push({dateKey:r.dateKey,name:r.name,time:r.time,text:i}),r=null};for(const i of e.split(`
`)){const l=i.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(l){o(),n=`${l[1]}-${Ye(Number(l[2]))}-${Ye(Number(l[3]))}`;continue}if(r)r.lines.push(i);else{const s=i.match(/^(?:(\d{1,2}:\d{2})\s+)?(.+?)「([\s\S]*)$/u);if(!s)continue;r={dateKey:n,name:s[2].trim(),time:s[1]||"",lines:[s[3]]}}const a=r.lines[r.lines.length-1].trimEnd();a.endsWith("」")&&(r.lines[r.lines.length-1]=a,o())}return o(),t},Rm=[{key:"morning",label:"朝",emoji:"🌅"},{key:"noon",label:"昼",emoji:"☀️"},{key:"night",label:"夜",emoji:"🌙"}],jg=()=>{const e=new Date().getHours();return e>=5&&e<11?"morning":e>=11&&e<17?"noon":"night"},Ng=(e,t)=>{var i;const n=l=>{var a;return((a=t.find(s=>s.id===l))==null?void 0:a.name)||"？"},r={};for(const l of e)(r[i=l.dateKey]||(r[i]={morning:[],noon:[],night:[]}))[l.slot].push(l);const o=[];for(const l of Object.keys(r).sort()){const a=[];for(const s of Rm){const m=r[l][s.key];if(!m.length)continue;const u=m.map(h=>n(h.memberId)+(h.memo&&h.memo.trim()?`(${h.memo.trim()})`:"")).join("・");a.push(`${s.emoji}${s.label}:${u}`)}a.length&&o.push(`🩷${Ce(l)}🩷 ${a.join(" / ")}`)}return o.join(`
`)},Cg=e=>{const t=[],n=r=>r.includes("朝")?"morning":r.includes("昼")?"noon":r.includes("夜")?"night":null;for(const r of e.split(`
`)){const o=r.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(.*)$/u);if(!o)continue;const i=`${o[1]}-${Ye(Number(o[2]))}-${Ye(Number(o[3]))}`,l=o[4];if(l.trim())for(const a of l.split("/")){const s=a.indexOf(":"),m=a.indexOf("："),u=s===-1?m:m===-1?s:Math.min(s,m);if(u===-1)continue;const h=n(a.slice(0,u));if(!h)continue;const f=a.slice(u+1);for(const y of f.split("・")){const w=y.trim().match(/^(.+?)(?:[(（]([\s\S]*)[)）])?$/u);if(!w)continue;const b=w[1].trim();b&&t.push({dateKey:i,slot:h,name:b,memo:(w[2]||"").trim()})}}}return t},_g=e=>{var n;const t={};for(const r of e)(t[n=r.dateKey]||(t[n]={morning:[],noon:[],night:[]}))[r.slot].push(r);return t},Dg=(e,t)=>{let n=t;for(const l of e)l.dateKey<n&&(n=l.dateKey);we(t);const r=we(t);r.setDate(r.getDate()-34);const o=we(n)<r?we(n):r,i=[];for(let l=new Date(o);pt(l)<=t;l.setDate(l.getDate()+1))i.push(pt(l));return i},Tg=e=>{const t=[];for(const n of String(e||"").split(`
`)){let r=n.trim();r&&(/^🩷?\s*\d{4}[/-]\d{1,2}[/-]\d{1,2}\s*🩷?\s*$/u.test(r)||(r=r.replace(/^[★☆☐☑✓□■●○・\-*+•‣▪️\s]+/u,"").trim(),r&&t.push(r)))}return t},Lg=e=>{const t=[];let n=dt();for(const r of e.split(`
`)){const o=r.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(o){n=`${o[1]}-${Ye(Number(o[2]))}-${Ye(Number(o[3]))}`;continue}const i=r.match(/^\s*(★\s*)?([☑☐✓])\s+(.+)$/u);if(!i)continue;const l=!!i[1],a=i[2]==="☑"||i[2]==="✓",s=i[3].trim();s&&t.push({dateKey:n,text:s,done:a,important:l})}return t},Om="🩷 できたこと",Pg=e=>{const t=(e||"").split(`
`),n=t.indexOf(Om);if(n===-1)return{text:e||"",items:[]};const r=[];let o=n+1;for(;o<t.length&&t[o].startsWith("☑ ");){const a=t[o].match(/^☑ (.*?)(?: \((\d{1,2}:\d{2})\))?$/u);a&&r.push({text:a[1],time:a[2]||""}),o++}let i=n;return i-1>=0&&t[i-1]===""&&(i-=1),t.splice(i,o-i),{text:t.join(`
`).replace(/\n{3,}/g,`

`).replace(/\s+$/,""),items:r}},ef="🎬 今日のコマ: ",Mm=e=>(e||"").split(`
`).filter(t=>!t.startsWith(ef)).join(`
`).replace(/^\n+/,""),$m=(e,t)=>{const n=Mm(e).trim(),r=ef+t;return n?`${r}

${n}`:r},qa=(e,t)=>{const n=we(e);return n.setDate(n.getDate()+t),pt(n)},na=(e,t)=>Math.round((we(t)-we(e))/864e5),Eu=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(String(e||""));if(!t)return 99999;const n=Number(t[1]);return(n<5?n+24:n)*60+Number(t[2])},Rg=(e,t)=>{const n=we(e),r=n.getDate();n.setDate(1),n.setMonth(n.getMonth()+t);const o=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return n.setDate(Math.min(r,o)),pt(n)},Og=e=>{if(e<12)return`${e}ヶ月後`;const t=Math.floor(e/12),n=e%12;return n===0?`${t}年後`:n===6?`${t}年半後`:`${t}年${n}ヶ月後`},Mg=e=>{const t=[...new Set(e||[])].sort();if(!t.length)return[];const n=[];for(const o of t){const i=n[n.length-1];i&&qa(i.end,1)===o?i.end=o:n.push({start:o,end:o})}return n.map((o,i)=>({start:o.start,end:o.end,length:na(o.start,o.end)+1,cycle:i<n.length-1?na(o.start,n[i+1].start):null,ongoing:i===n.length-1})).reverse()},$g=(e,t,n=3)=>{const r=e.filter(s=>s.cycle!=null).map(s=>s.cycle);if(!r.length||!e.length)return null;const o=r.slice(0,n),i=Math.round(o.reduce((s,m)=>s+m,0)/o.length),l=e[0].start,a=qa(l,i);return{next:a,avg:i,daysLeft:na(t,a),min:Math.min(...r),max:Math.max(...r),count:r.length}},Im={morning:"🌅",noon:"☀️",night:"🌙"},tl="nachumin-diary-backup.json";function Am(e){if(!e||typeof e!="object"||Array.isArray(e))return"バックアップの形式が読めませんでした 🥺";if(e.app!=="nachumin-diary")return"これは Nachumin Lifelog のバックアップファイルではないみたい 🥺";if(!Array.isArray(e.rooms))return"ルームの情報が入っていません。ファイルが壊れているかも 🥺";if(e.rooms.some(t=>!t||typeof t!="object"||!t.id||!t.type))return"ルームの形式が壊れています 🥺";if(e.data!=null&&(typeof e.data!="object"||Array.isArray(e.data)))return"ルームの中身の形式が壊れています 🥺";for(const t of["doneLogs","habits","habitLogs","habitSeeds","periods","symptoms","symptomLogs","symptomSeeds","futureScripts"])if(e[t]!=null&&(typeof e[t]!="object"||Array.isArray(e[t])))return`${t} の形式が壊れています 🥺`;return null}function Fm(e){const t={rooms:(e.rooms||[]).length,items:0},n=r=>r==="talk"?"messages":r==="todo"?"todos":r==="darelog"?"records":r==="expense"?"expenses":r==="challenge"?"challenges":r==="future"?"opened":r==="now"?"posts":r==="album"?"pages":null;for(const r of e.rooms||[]){const o=e.data?e.data[r.id]:void 0;if(!o)continue;const i=n(r.type);t.items+=i?(o[i]||[]).length:Object.keys(o).length}return t}function nl(e,t){var i,l;if(e.type==="talk"){const a=t&&t.messages||[],s=a[a.length-1];return{previewName:s?(u=>{var h;return((h=(e.members||[]).find(f=>f.id===u))==null?void 0:h.name)||""})(s.memberId):"",preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="todo"){const a=t&&t.todos||[],s=a[a.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?`${s.done?"☑":"☐"} ${s.text.split(`
`)[0]}`.slice(0,40):"",todoOpen:a.filter(m=>!m.done&&!m.deferred).length,lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="darelog"){const a=t&&t.records||[],s=a[a.length-1],m=u=>{var h;return((h=(e.members||[]).find(f=>f.id===u))==null?void 0:h.name)||""};return{preview:s?`${Im[s.slot]||""} ${m(s.memberId)}`.trim():"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="challenge"){const a=t&&t.challenges||[],s=[...a].sort((m,u)=>{var h,f;return(((h=u.records)==null?void 0:h.length)||0)-(((f=m.records)==null?void 0:f.length)||0)})[0];return{preview:s?`${s.emoji||"🏁"} ${s.name} ${((i=s.records)==null?void 0:i.length)||0}/${s.target}`:"",lastAt:e.lastAt||(a.length?Date.now():0)}}if(e.type==="expense"){const a=t&&t.expenses||[],s=a[a.length-1];return{preview:s?`${(u=>{var h;return((h=(e.categories||[]).find(f=>f.id===u))==null?void 0:h.name)||""})(s.categoryId)} ¥${(s.amount||0).toLocaleString("ja-JP")}`:"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="album"){const a=t&&t.pages||[];return{preview:a.length?`${a.length}枚`:"",lastAt:e.lastAt||0}}if(e.type==="now"){const s=[...t&&t.posts||[]].sort((m,u)=>(m.at||0)-(u.at||0)).pop();return{preview:s&&typeof s.text=="string"?`${s.time} ${s.text.split(`
`)[0]}`.slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="future"){const a=t&&t.opened||[],s=a[a.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}const n=t&&typeof t=="object"?t:{},r=Object.keys(n).sort(),o=r[r.length-1];return{preview:typeof((l=n[o])==null?void 0:l.text)=="string"?n[o].text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(o?Date.now():0)}}async function ju(){const e=await W(et)||[],t={};for(const y of e){const w=await W($e(y.id));w!==void 0&&(t[y.id]=w)}const n=await W(Eo)||null,r={},o={},i={},l={},a={},s={},m={},u={},h={};for(const y of e){const w=await W(Zo(y.id));w&&Object.keys(w).length&&(r[y.id]=w);const b=await W(jo(y.id));Array.isArray(b)&&b.length&&(o[y.id]=b);const C=await W(Yd(y.id));C&&Object.keys(C).length&&(i[y.id]=C),await W(Qd(y.id))&&(l[y.id]=!0);const g=await W(ea(y.id));Array.isArray(g==null?void 0:g.days)&&g.days.length&&(a[y.id]=g.days);const d=await W(No(y.id));Array.isArray(d)&&d.length&&(s[y.id]=d);const x=await W(Xd(y.id));x&&Object.keys(x).length&&(m[y.id]=x),await W(Gd(y.id))&&(u[y.id]=!0);const v=await W(ta(y.id));Array.isArray(v)&&v.length&&(h[y.id]=v)}const f=await W(Ir)||null;return{app:"nachumin-diary",version:1,exportedAt:new Date().toISOString(),rooms:e,data:t,declaration:n,doneLogs:r,habits:o,habitLogs:i,habitSeeds:l,periods:a,symptoms:s,symptomLogs:m,symptomSeeds:u,futureScripts:h,marks:f}}const Bm=e=>e.map((t,n)=>[t,n]).sort((t,n)=>t[0].dateKey<n[0].dateKey?-1:t[0].dateKey>n[0].dateKey?1:t[1]-n[1]).map(([t])=>t);async function Um(e){var s,m;if(!e||e.app!=="nachumin-diary"||!Array.isArray(e.rooms))throw new Error("invalid-backup");const t=await W(et)||[],n=new Map(t.map(u=>[u.id,{...u}]));let r=0,o=0;for(const u of e.rooms){const h=e.data?e.data[u.id]:void 0,f=u.type==="talk"?"messages":u.type==="todo"?"todos":u.type==="darelog"?"records":u.type==="expense"?"expenses":u.type==="challenge"?"challenges":u.type==="future"?"opened":u.type==="now"?"posts":u.type==="album"?"pages":null,y=b=>f==="messages"?`${b.dateKey} ${b.memberId} ${b.text}`:f==="todos"?`${b.dateKey} ${b.text}`:f==="records"?`${b.dateKey} ${b.slot} ${b.memberId}`:b.id;if(!n.has(u.id)){h!==void 0&&await K($e(u.id),h),n.set(u.id,{...u,...nl(u,h)}),r+=1,f?o+=((s=h==null?void 0:h[f])==null?void 0:s.length)||0:o+=h?Object.keys(h).length:0;continue}const w=n.get(u.id);if(f){const b=await W($e(u.id))||{},C=b[f]||[],g=new Set(C.map(y));let d=C.slice();for(const S of(h==null?void 0:h[f])||[])g.has(y(S))||(g.add(y(S)),d.push(S),o+=1);f==="messages"&&(d=Bm(d));const x={...b,[f]:d};for(const S of Object.keys(h||{}))S!==f&&x[S]===void 0&&(x[S]=h[S]);await K($e(u.id),x);let v={...w};if(u.type==="talk"||u.type==="darelog"){const S=w.members||[],j=new Set(S.map(_=>_.id));v.members=S.concat((u.members||[]).filter(_=>!j.has(_.id)))}n.set(u.id,{...v,...nl(v,x)})}else{const C={...await W($e(u.id))||{}};for(const g of Object.keys(h||{}))C[g]||(C[g]=h[g],o+=1);await K($e(u.id),C),n.set(u.id,{...w,...nl(w,C)})}}if(e.doneLogs)for(const[u,h]of Object.entries(e.doneLogs)){const f=Zo(u),w={...await W(f)||{}};for(const[b,C]of Object.entries(h)){const g=(w[b]||[]).slice();for(const d of C)g.some(x=>x.text===d.text&&x.time===d.time)||g.push(d);w[b]=g}await K(f,w)}const i={};if(e.habits)for(const[u,h]of Object.entries(e.habits)){if(!Array.isArray(h))continue;const f=await W(jo(u));if(f===void 0){await K(jo(u),h);continue}const y=Array.isArray(f)?f:[],w=new Set(y.map(d=>d.id)),b=new Map(y.filter(d=>(d.name||"").trim()).map(d=>[d.name.trim(),d.id])),C=y.slice(),g={};for(const d of h){if(!d||!d.id)continue;if(w.has(d.id)){g[d.id]=d.id;continue}const x=(d.name||"").trim(),v=x?b.get(x):null;if(v){g[d.id]=v;continue}C.push(d),w.add(d.id),x&&b.set(x,d.id),g[d.id]=d.id}C.length!==y.length&&await K(jo(u),C),i[u]=g}if(e.habitSeeds)for(const u of Object.keys(e.habitSeeds))e.habitSeeds[u]&&await K(Qd(u),!0);if(e.periods)for(const[u,h]of Object.entries(e.periods)){if(!Array.isArray(h))continue;const f=((m=await W(ea(u)))==null?void 0:m.days)||[];await K(ea(u),{days:[...new Set([...f,...h])].sort()})}const l={};if(e.symptoms)for(const[u,h]of Object.entries(e.symptoms)){if(!Array.isArray(h))continue;const f=await W(No(u));if(f===void 0){await K(No(u),h);continue}const y=Array.isArray(f)?f:[],w=new Set(y.map(d=>d.id)),b=new Map(y.filter(d=>(d.name||"").trim()).map(d=>[d.name.trim(),d.id])),C=y.slice(),g={};for(const d of h){if(!d||!d.id)continue;if(w.has(d.id)){g[d.id]=d.id;continue}const x=(d.name||"").trim(),v=x?b.get(x):null;if(v){g[d.id]=v;continue}C.push(d),w.add(d.id),x&&b.set(x,d.id),g[d.id]=d.id}C.length!==y.length&&await K(No(u),C),l[u]=g}if(e.symptomSeeds)for(const u of Object.keys(e.symptomSeeds))e.symptomSeeds[u]&&await K(Gd(u),!0);if(e.futureScripts)for(const[u,h]of Object.entries(e.futureScripts)){if(!Array.isArray(h)||!h.length)continue;const f=await W(ta(u))||[],y=new Set(f.map(b=>b.id)),w=h.filter(b=>b&&b.id&&!y.has(b.id));w.length&&(await K(ta(u),[...f,...w]),o+=w.length)}if(e.symptomLogs)for(const[u,h]of Object.entries(e.symptomLogs)){const f=Xd(u),w={...await W(f)||{}},b=l[u]||{};for(const[C,g]of Object.entries(h)){const d=(g||[]).map(x=>b[x]||x);w[C]=[...new Set([...w[C]||[],...d])]}await K(f,w)}if(e.habitLogs)for(const[u,h]of Object.entries(e.habitLogs)){const f=i[u]||{},y=Yd(u),b={...await W(y)||{}};for(const[C,g]of Object.entries(h)){const d=(g||[]).map(x=>f[x]||x);b[C]=[...new Set([...b[C]||[],...d])]}await K(y,b)}if(Array.isArray(e.marks)&&e.marks.length){const u=await W(Ir);(!Array.isArray(u)||!u.length)&&await K(Ir,e.marks)}const a=[...n.values()];return await K(et,a),{addedRooms:r,addedItems:o,rooms:a}}const on="M12 20.5s-7.5-5-7.5-10a4.2 4.2 0 0 1 7.5-2.6A4.2 4.2 0 0 1 19.5 10.5c0 5-7.5 10-7.5 10z",Km=`<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>
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
<path d='${on}' transform='translate(96 60) scale(1.6)'/>
<path d='${on}' transform='translate(24 96) scale(0.9) rotate(-12 12 12)'/>
<path d='${on}' transform='translate(190 60) scale(0.8) rotate(14 12 12)'/>
<path d='${on}' transform='translate(130 150) scale(1.1) rotate(-8 12 12)'/>
<path d='${on}' transform='translate(30 208) scale(0.8) rotate(10 12 12)'/>
</g>
<g fill='#f8b1d6'>
<path d='${on}' transform='translate(100 64) scale(1.1) '/>
<path d='${on}' transform='translate(133 153) scale(0.7)'/>
</g>
</svg>`,fo=`url("data:image/svg+xml,${encodeURIComponent(Km)}")`,Ig=["#ffffff","#fff5fa","#ffd9ec","#ffc4e1","#ff9fd0","#e0629f","#d4f0ff","#c9f5f2","#d9ffe3","#e8dcff","#f0f0f0","#2b2430"],Ag=["#9C27B0","#E91E63","#FFEB3B","#2196F3","#4CAF50","#FF9800","#F44336","#00BCD4","#3F51B5","#8BC34A","#FF4081","#009688"],ra=["#ff6fb2","#c58cff","#6fb8ff","#5fd6b0","#ffcf5f","#ff9d6f","#7ed957","#ff8fa8"],cr=ra[0],Nu=e=>{const t=e||cr;return{background:`linear-gradient(163deg, #ffffff 0%, #fff6fb 40%, ${t}2e 100%)`,boxShadow:`0 6px 13px ${t}42, 0 2px 0 ${t}66, inset 0 1.5px 0 #ffffff`,borderColor:`${t}55`}},Fg=[{key:"auto",label:"自動",value:null},{key:"white",label:"白",value:"#ffffff"},{key:"black",label:"黒",value:"#222028"},{key:"pink",label:"ピンク",value:"#ff2d87"}],Wm=e=>{const t=String(e).replace("#","");if(t.length<6)return"#4a3140";const n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),o=parseInt(t.slice(4,6),16);return .299*n+.587*r+.114*o<140?"#fff5fa":"#4a3140"},Bg=e=>e&&e.textColor?e.textColor:Wm(e&&e.color),Cu=`
  * { box-sizing: border-box; }
  .app {
    height: 100vh; height: 100dvh;
    display: flex; flex-direction: column;
    font-family: "Hiragino Maru Gothic ProN", "Hiragino Kaku Gothic ProN",
      "Yu Gothic", sans-serif;
    background: ${fo} #f6bedd; background-size: 240px 240px;
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
    background: ${fo} #f6bedd; background-size: 240px 240px;
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
    background: ${fo} #f6bedd; background-size: 240px 240px;
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
    background: ${fo} #f6bedd; background-size: 240px 240px;
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
`;function Vm(e,t=500){const n=N.useRef({}),r=l=>{if(typeof e!="function"||l.touches&&l.touches.length!==1)return;const a=l.touches?l.touches[0]:l;n.current.x=a.clientX,n.current.y=a.clientY,n.current.fired=!1,clearTimeout(n.current.timer),n.current.timer=setTimeout(()=>{n.current.fired=!0;try{navigator.vibrate&&navigator.vibrate(15)}catch{}e({x:n.current.x,y:n.current.y})},t)},o=l=>{const a=l.touches?l.touches[0]:l;(Math.abs(a.clientX-n.current.x)>10||Math.abs(a.clientY-n.current.y)>10)&&clearTimeout(n.current.timer)},i=()=>clearTimeout(n.current.timer);return{onTouchStart:r,onTouchMove:o,onTouchEnd:i,onTouchCancel:i,onContextMenu:l=>{typeof e=="function"&&(l.preventDefault(),e({x:l.clientX,y:l.clientY}))},onClickCapture:l=>{n.current.fired&&(l.stopPropagation(),l.preventDefault(),n.current.fired=!1)}}}function Hm({onLongPress:e,longPressMs:t,children:n,...r}){const o=Vm(e,t);return c.jsx("div",{...r,...o,children:n})}function Ym({x:e,y:t,onCopy:n,onEdit:r,onDelete:o,onClose:i,top:l,extra:a}){const u=N.useRef(null),[h,f]=N.useState(null);return N.useLayoutEffect(()=>{const y=u.current;if(!y)return;const w=y.offsetHeight,b=window.innerWidth,C=window.innerHeight,g=Math.max(8,Math.min(e-168/2,b-168-8));let d=t+8;d+w>C-8&&(d=t-8-w),d<8&&(d=Math.max(8,C-w-8)),f({left:g,top:d})},[e,t,l,a,r,o]),c.jsx("div",{className:"ctx-overlay",onClick:i,onContextMenu:y=>y.preventDefault(),children:c.jsxs("div",{ref:u,className:"ctx-menu",style:{left:h?h.left:Math.max(8,Math.min(e-168/2,window.innerWidth-168-8)),top:h?h.top:t+8,width:168,maxHeight:`calc(100vh - ${8*2}px)`,overflowY:"auto",visibility:h?"visible":"hidden"},onClick:y=>y.stopPropagation(),children:[(l||[]).map((y,w)=>c.jsx("button",{className:"ctx-item ctx-top",onClick:y.onClick,children:y.label},w)),c.jsx("button",{className:"ctx-item",onClick:n,children:"📋 コピー"}),r&&c.jsx("button",{className:"ctx-item",onClick:r,children:"✏️ 編集"}),(a||[]).map((y,w)=>c.jsx("button",{className:"ctx-item",onClick:y.onClick,children:y.label},w)),o&&c.jsx("button",{className:"ctx-item ctx-del",onClick:o,children:"🗑 削除"})]})})}function tf({message:e,confirmLabel:t="削除する",onConfirm:n,onCancel:r}){return c.jsx("div",{className:"overlay confirm-over",onClick:r,children:c.jsxs("div",{className:"panel confirm-panel",onClick:o=>o.stopPropagation(),children:[c.jsx("div",{className:"confirm-msg",children:e}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-close",onClick:r,children:"キャンセル"}),c.jsx("button",{className:"p-del arm",onClick:n,children:t})]})]})})}function Qm(e=!0){const[t,n]=N.useState(0);return N.useEffect(()=>{if(!e||!window.visualViewport){n(0);return}const r=window.visualViewport,o=()=>n(Math.max(0,window.innerHeight-r.height-r.offsetTop));return o(),r.addEventListener("resize",o),r.addEventListener("scroll",o),()=>{r.removeEventListener("resize",o),r.removeEventListener("scroll",o)}},[e]),t}const _u=/https?:\/\/[^\s　-〿぀-ヿ一-鿿＀-￯]+/g,Xm=/[.,;:、。）)\]】」』"'！？!?]+$/;function Gm(e,t=n=>n){if(!e)return e;const n=[];let r=0,o=0,i;for(_u.lastIndex=0;i=_u.exec(e);){let l=i[0];const a=(l.match(Xm)||[""])[0];a&&(l=l.slice(0,l.length-a.length)),l&&(i.index>r&&n.push(c.jsx(N.Fragment,{children:t(e.slice(r,i.index))},o++)),n.push(c.jsx("a",{className:"body-link",href:l,target:"_blank",rel:"noopener noreferrer",onClick:s=>s.stopPropagation(),children:l},o++)),r=i.index+l.length)}return n.length?(r<e.length&&n.push(c.jsx(N.Fragment,{children:t(e.slice(r))},o++)),n):t(e)}const Jm=(e,t)=>Eu(e.time)-Eu(t.time)||(e.at||0)-(t.at||0),Zm=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(e||"");return t?`${t[1].padStart(2,"0")}:${t[2]}`:""},qm=e=>{const t=/^(\d{1,2}):(\d{2})$/.exec(e||"");return t?`${Number(t[1])}:${t[2]}`:""};function eg({room:e,onBack:t,onMeta:n,showToast:r,pinned:o,onOpenDiary:i}){const[l,a]=N.useState([]),[s,m]=N.useState(!1),[u,h]=N.useState(""),[f,y]=N.useState(()=>zu()),[w,b]=N.useState(null),[C,g]=N.useState(null),[d,x]=N.useState(null),[v,S]=N.useState(null),[j,_]=N.useState(76),R=N.useRef(null),B=N.useRef(null),M=N.useRef(null),G=Qm(!C),ce=dt();N.useEffect(()=>{(async()=>{try{const D=await W($e(e.id));D&&Array.isArray(D.posts)&&a(D.posts)}catch{}finally{m(!0)}})()},[e.id]),N.useEffect(()=>{if(!B.current||typeof ResizeObserver>"u")return;const D=new ResizeObserver(()=>B.current&&_(B.current.offsetHeight));return D.observe(B.current),()=>D.disconnect()},[C]);const se=D=>{const $=R.current;$&&$.scrollTo({top:$.scrollHeight,behavior:D?"smooth":"auto"})};N.useEffect(()=>{s&&se(!1)},[s]);const Ne=async D=>{a(D);try{await K($e(e.id),{posts:D});const $=[...D].sort((ye,Ue)=>(ye.at||0)-(Ue.at||0)).pop();n({preview:$?`${$.time} ${$.text.split(`
`)[0]}`.slice(0,40):"",lastAt:Date.now()})}catch{r("保存に失敗しました。ストレージを確認してね")}},kt=()=>{const D=u.trim();if(!D)return;const $={id:qe(),dateKey:dt(),time:qd(),text:D,at:Date.now()};Ne([...l,$]),h(""),M.current&&(M.current.style.height="auto"),S($.id),setTimeout(()=>S(null),900),requestAnimationFrame(()=>se(!0))},Pe=D=>{D.key==="Enter"&&!D.shiftKey&&!D.nativeEvent.isComposing&&D.keyCode!==229&&(D.preventDefault(),kt())},at=D=>{h(D.target.value);const $=D.target;$.style.height="auto",$.style.height=Math.min($.scrollHeight,120)+"px"},P=()=>{const D=C.text.trim(),$=qm(C.time);if(!D){r("なにしてたか書いてね");return}if(!$){r("時刻を入れてね");return}Ne(l.map(ye=>ye.id===C.id?{...ye,text:D,time:$}:ye)),g(null)},A=D=>{const $=l.find(Ue=>Ue.id===D);if(!$)return;const ye=$.text.length>20?$.text.slice(0,20)+"…":$.text;x({message:`${$.time}「${ye}」を削除しますか？`,onConfirm:()=>{Ne(l.filter(Ue=>Ue.id!==D)),x(null),g(null)}})},F={};for(const D of l)(F[D.dateKey]=F[D.dateKey]||[]).push(D);const X=Object.keys(F).sort(),te=X.filter(D=>D>=f);te.includes(ce)||te.push(ce);const Ge=X.filter(D=>D<f).length,Je=(F[ce]||[]).length,Rt=D=>{const $=`${Ce(D).slice(5)} ${Zd[we(D).getDay()]}`;return D===ce?`今日 ${$}`:D===zu()?`昨日 ${$}`:$},pe=w&&l.find(D=>D.id===w.id);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"hd",children:[c.jsx("button",{className:"back-btn","aria-label":"もどる",onClick:t,children:"‹"}),c.jsx("span",{style:{fontSize:20},children:e.emoji}),c.jsxs("div",{style:{minWidth:0},children:[c.jsx("div",{className:"hd-title",children:e.name}),c.jsx("div",{className:"hd-sub",children:s?`今日 ${Je}件`:"Nachumin Lifelog"})]}),i&&c.jsxs("button",{className:"now-to-diary",onClick:i,"aria-label":"日記をひらく",children:[c.jsx("span",{className:"now-to-diary-ic",children:"💗"}),"日記",c.jsx("span",{className:"now-to-diary-arw",children:"›"})]})]}),o,c.jsxs("div",{className:"chat now-scroll",ref:R,style:{paddingBottom:j+12},children:[Ge>0&&c.jsxs("button",{className:"now-more",onClick:()=>y(D=>qa(D,-7)),children:["↑ 前の日を見る（あと",Ge,"日ぶん）"]}),te.map(D=>{const $=(F[D]||[]).slice().sort(Jm);return c.jsxs(N.Fragment,{children:[c.jsxs("div",{className:"now-day"+(D===ce?" today":""),children:[c.jsx("span",{className:"now-day-l "+Tm(D),children:Rt(D)}),$.length>0&&c.jsx("span",{className:"now-day-n",children:$.length})]}),$.length===0&&D===ce&&c.jsx("div",{className:"now-empty",children:"下からつぶやいてね🕐 時刻は自動でつくよ"}),c.jsx("div",{className:"now-tl",children:$.map(ye=>c.jsxs(Hm,{className:"now-post"+(v===ye.id?" pop":""),onLongPress:Ue=>b({id:ye.id,x:Ue.x,y:Ue.y}),children:[c.jsx("span",{className:"now-time",children:ye.time}),c.jsx("span",{className:"now-dot","aria-hidden":"true"}),c.jsx("span",{className:"now-text",children:Gm(ye.text)})]},ye.id))})]},D)})]}),!C&&c.jsx("div",{className:"bar bar-fixed now-bar",ref:B,style:{bottom:G},children:c.jsxs("div",{className:"in-row",children:[c.jsx("textarea",{ref:M,className:"ta",rows:1,placeholder:"いまなにしてる？",enterKeyHint:"send",value:u,onChange:at,onKeyDown:Pe}),c.jsx("button",{className:"send","aria-label":"つぶやく",disabled:!u.trim(),onClick:kt,children:"↑"})]})}),w&&pe&&c.jsx(Ym,{x:w.x,y:w.y,onClose:()=>b(null),onCopy:async()=>{const D=await Pm(`${pe.time} ${pe.text}`);r(D?"コピーしました🩷":"コピーできませんでした"),b(null)},onEdit:()=>{g({id:pe.id,text:pe.text,time:Zm(pe.time)}),b(null)},onDelete:()=>{const D=pe.id;b(null),A(D)}}),C&&c.jsx("div",{className:"overlay",onClick:()=>g(null),children:c.jsxs("div",{className:"panel",onClick:D=>D.stopPropagation(),children:[c.jsx("h3",{children:"🕐 なうを直す"}),c.jsx("div",{className:"f-label",children:"時刻（あとから書いたときは直してね）"}),c.jsx("input",{className:"f-input",type:"time",style:{width:140},value:C.time,onChange:D=>g($=>({...$,time:D.target.value}))}),c.jsx("div",{className:"f-label",children:"なにしてた"}),c.jsx("textarea",{autoFocus:!0,style:{minHeight:80},value:C.text,onChange:D=>g($=>({...$,text:D.target.value}))}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:P,children:"保存"}),c.jsx("button",{className:"p-del",onClick:()=>A(C.id),children:"削除"}),c.jsx("button",{className:"p-close",onClick:()=>g(null),children:"もどる"})]})]})}),d&&c.jsx(tf,{message:d.message,onConfirm:d.onConfirm,onCancel:()=>x(null)})]})}function tg({items:e,keyOf:t,onReorder:n,renderItem:r,onLongPress:o,longPress:i=320,footer:l}){const[a,s]=N.useState(null),[m,u]=N.useState(null),h=N.useRef(null),f=N.useRef({});f.current.items=e,f.current.keyOf=t,f.current.onReorder=n,f.current.onLongPress=o;const y=a||e,w=v=>{var S;return(S=h.current)==null?void 0:S.querySelector(`[data-dk="${CSS.escape(String(v))}"]`)},b=()=>{const v=h.current;if(!v||f.current.dragKey==null)return;const S=w(f.current.dragKey);if(!S)return;const j=v.getBoundingClientRect(),_=j.left+S.offsetLeft,R=j.top+S.offsetTop,B=f.current.pointerX-f.current.grabX-_,M=f.current.pointerY-f.current.grabY-R;S.style.transform=`translate(${B}px, ${M}px) scale(1.08)`},C=v=>{const S=w(v);if(!S)return;const j=S.getBoundingClientRect();f.current.dragKey=v,f.current.grabX=f.current.pointerX-j.left,f.current.grabY=f.current.pointerY-j.top,f.current.pickupX=f.current.pointerX,f.current.pickupY=f.current.pointerY,f.current.moved=!1,f.current.order=f.current.items.slice(),S.style.zIndex="10",s(f.current.order),u(v);try{navigator.vibrate&&navigator.vibrate(12)}catch{}requestAnimationFrame(b)},g=()=>{const v=h.current;if(!v||f.current.dragKey==null)return;const S=v.getBoundingClientRect(),j=f.current.pointerX-S.left,_=f.current.pointerY-S.top,R=[...v.querySelectorAll("[data-dk]")];let B=0,M=1/0;for(let se=0;se<R.length;se++){const Ne=R[se],kt=Ne.offsetLeft+Ne.offsetWidth/2,Pe=Ne.offsetTop+Ne.offsetHeight/2,at=(j-kt)**2+(_-Pe)**2;at<M&&(M=at,B=se)}const G=f.current.order,ce=G.findIndex(se=>f.current.keyOf(se)===f.current.dragKey);if(ce!==-1&&ce!==B){const[se]=G.splice(ce,1);G.splice(B,0,se),s(G.slice())}requestAnimationFrame(b)},d=()=>{if(clearTimeout(f.current.timer),f.current.dragKey!=null){const v=w(f.current.dragKey);if(v&&(v.style.transform="",v.style.zIndex=""),f.current.moved)f.current.onReorder(f.current.order.slice());else if(f.current.onLongPress){const S=f.current.items.find(j=>f.current.keyOf(j)===f.current.dragKey);f.current.onLongPress({item:S,x:f.current.pointerX,y:f.current.pointerY})}f.current.suppress=Date.now()+450}f.current.dragKey=null,u(null),s(null)};N.useEffect(()=>{const v=h.current;if(!v)return;const S=B=>{if(B.touches.length!==1)return;const M=B.target.closest("[data-dk]");if(!M||!v.contains(M))return;const G=B.touches[0];f.current.startX=G.clientX,f.current.startY=G.clientY,f.current.pointerX=G.clientX,f.current.pointerY=G.clientY,f.current.moved=!1;const ce=M.getAttribute("data-dk");clearTimeout(f.current.timer),f.current.timer=setTimeout(()=>{f.current.moved||C(ce)},i)},j=B=>{const M=B.touches[0];if(f.current.pointerX=M.clientX,f.current.pointerY=M.clientY,f.current.dragKey==null){(Math.abs(M.clientX-f.current.startX)>12||Math.abs(M.clientY-f.current.startY)>12)&&(f.current.moved=!0,clearTimeout(f.current.timer));return}(Math.abs(M.clientX-f.current.pickupX)>8||Math.abs(M.clientY-f.current.pickupY)>8)&&(f.current.moved=!0),B.preventDefault(),g()},_=()=>{clearTimeout(f.current.timer),f.current.dragKey!=null&&d()},R=B=>B.preventDefault();return v.addEventListener("touchstart",S,{passive:!0}),v.addEventListener("touchmove",j,{passive:!1}),v.addEventListener("touchend",_,{passive:!0}),v.addEventListener("touchcancel",_,{passive:!0}),v.addEventListener("contextmenu",R),()=>{v.removeEventListener("touchstart",S),v.removeEventListener("touchmove",j),v.removeEventListener("touchend",_),v.removeEventListener("touchcancel",_),v.removeEventListener("contextmenu",R)}},[i]);const x=v=>{f.current.suppress&&Date.now()<f.current.suppress&&(v.stopPropagation(),v.preventDefault(),f.current.suppress=0)};return c.jsxs("div",{ref:h,className:"ig-grid",onClickCapture:x,children:[y.map(v=>{const S=t(v);return c.jsx("div",{"data-dk":S,className:"ig-cell"+(m===S?" dragging":""),children:r(v)},S)}),l]})}function ng({onBack:e,children:t}){const[n,r]=N.useState(0),[o,i]=N.useState(!1),l=N.useRef(null),a=N.useRef(!1),s=f=>{if(f.touches.length!==1||document.querySelector(".overlay"))return;const y=f.touches[0];y.clientX>28||(l.current={x:y.clientX,y:y.clientY},a.current=!1)},m=f=>{if(!l.current)return;const y=f.touches[0],w=y.clientX-l.current.x,b=y.clientY-l.current.y;if(!a.current){if(Math.abs(w)<8&&Math.abs(b)<8)return;if(Math.abs(b)>Math.abs(w)){l.current=null;return}a.current=!0,i(!1)}r(Math.max(0,w))},u=()=>{if(!l.current)return;const f=Math.min(110,window.innerWidth*.3);i(!0),a.current&&n>f?(r(window.innerWidth),setTimeout(e,190)):r(0),l.current=null,a.current=!1},h=n>0?{transform:`translateX(${n}px)`,transition:o?"transform .19s ease-out":"none",boxShadow:"-10px 0 26px rgba(120,50,90,.18)"}:void 0;return c.jsx("div",{className:"swipe-wrap",style:h,onTouchStart:s,onTouchMove:m,onTouchEnd:u,children:t})}const rg=N.lazy(()=>Pt(()=>import("./DiaryRoom-BGz9vAfH.js"),__vite__mapDeps([0,1]),import.meta.url)),og=N.lazy(()=>Pt(()=>import("./TalkRoom-CAVMw8HR.js"),[],import.meta.url)),ig=N.lazy(()=>Pt(()=>import("./TodoRoom-B8i8W1OA.js"),__vite__mapDeps([2,1]),import.meta.url)),lg=N.lazy(()=>Pt(()=>import("./DarelogRoom-DQLNQ7Zf.js"),__vite__mapDeps([3,4]),import.meta.url)),ag=N.lazy(()=>Pt(()=>import("./ExpenseRoom-BIdx-AjU.js"),[],import.meta.url)),sg=N.lazy(()=>Pt(()=>import("./ChallengeRoom-BtKqzkxg.js"),[],import.meta.url)),ug=N.lazy(()=>Pt(()=>import("./FutureRoom-DeX0PD_z.js"),[],import.meta.url)),cg=N.lazy(()=>Pt(()=>import("./AlbumRoom-Bx7SlnSC.js"),[],import.meta.url)),dg=["💗","🩷","💛","🩵","💜","🤍","🖤","🌸","🌷","🎀","🌟","✨","⭐️","👑","🫶","🐰","🐻","🐱","🦄","🌙","🌊","🌿","🍓","🍒","🧸","📖","💬","✅","🌗","💰"];function fg(){const[e,t]=N.useState(null),[n,r]=N.useState({screen:"home"}),[o,i]=N.useState(!1),[l,a]=N.useState(""),[s,m]=N.useState(null),[u,h]=N.useState(null),[f,y]=N.useState(!1),[w,b]=N.useState(null),[C,g]=N.useState(""),[d,x]=N.useState(null),[v,S]=N.useState(""),[j,_]=N.useState(null),[R,B]=N.useState(0),[M,G]=N.useState(null),[ce,se]=N.useState(!1),Ne=N.useRef(null),kt=N.useRef(0),[Pe,at]=N.useState(ym),[P,A]=N.useState(!1),[F,X]=N.useState(""),[te,Ge]=N.useState(!1),[Je,Rt]=N.useState(""),[pe,D]=N.useState(""),[$,ye]=N.useState(null),[Ue,es]=N.useState(!1),[Ot,Jn]=N.useState(null),[nf,gi]=N.useState(!1),[ts,ns]=N.useState(""),rs=N.useRef(null),Z=(p,k=3e3)=>{ns(p),clearTimeout(rs.current),rs.current=setTimeout(()=>ns(""),k)},rf=async p=>{try{if(await W(Zi))return p;if(p.some(T=>T.type==="future"))return await K(Zi,!0),p;const k=[...p,{id:bm,type:"future",name:"未来日記",emoji:"🔮",theme:ra[3]||void 0,createdAt:Date.now(),lastAt:0,preview:""}];return await K(et,k),await K(Zi,!0),k}catch{return p}},of=async p=>{try{if(await W(Gi))return p;if(p.some(T=>T.type==="album"))return await K(Gi,!0),p;const k=[...p,{id:vm,type:"album",name:"絵日記",emoji:"📔",createdAt:Date.now(),lastAt:0,preview:""}];return await K(et,k),await K(Gi,!0),k}catch{return p}},lf=async p=>{try{if(await W(Ji))return p;if(p.some(T=>T.type==="now"))return await K(Ji,!0),p;const k=[{id:wm,type:"now",name:"なう",emoji:"🕐",createdAt:Date.now(),lastAt:0,preview:""},...p];return await K(et,k),await K(Ji,!0),k}catch{return p}};N.useEffect(()=>{(async()=>{try{const p=await lf(await of(await rf(await Sm()))),k=await W(Su);k&&_(k);const T=k&&p.find(L=>L.id===k)||p.find(L=>L.type==="now"&&!L.hidden)||p.find(L=>L.id===de);T&&r({screen:"room",roomId:T.id}),t(p);const[E,U,Y]=await Promise.all([W(Eo),W(Ir),W(qi)]);E&&E.dateKey===dt()&&g(E.text),Array.isArray(U)&&U.length&&at(U),ye(Y||{})}catch{Z("データの読み込みに失敗しました"),t([])}})()},[]),N.useEffect(()=>{if(n.screen!=="home")return;let p=!0;return(async()=>{try{let k=await W($e(de));k=typeof k=="string"?JSON.parse(k):k||{};const T=k[dt()];if(!p)return;T&&typeof T.text=="string"&&T.text.trim()?G({written:!0,preview:T.text.split(`
`)[0].slice(0,34)}):G({written:!1})}catch{p&&G({written:!1})}})(),()=>{p=!1}},[n.screen,R]),N.useEffect(()=>{n.screen==="home"&&Ne.current&&(Ne.current.scrollTop=kt.current)},[n.screen]);const os=p=>{t(k=>{let T=k;return k.find(E=>E.id===de)||(T=[...k,{id:de,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),T=T.map(E=>E.id===de?{...E,...p!=null?{preview:p}:{},lastAt:Date.now()}:E),K(et,T),T}),B(k=>k+1)},af=async({text:p,time:k,dateKey:T})=>{try{const E=Zo(de),U=await W(E)||{},Y=(U[T]||[]).slice();Y.some(L=>L.text===p&&L.time===k)||Y.push({text:p,time:k}),await K(E,{...U,[T]:Y}),os(`🩷 できたこと ☑ ${p}`.slice(0,40))}catch{Z("できたことの記録に失敗しました")}},sf=async({text:p,time:k,dateKey:T})=>{try{const E=Zo(de),U=await W(E)||{},Y=(U[T]||[]).filter(I=>!(I.text===p&&I.time===k)),L={...U};Y.length?L[T]=Y:delete L[T],await K(E,L),os(null)}catch{}},xi=p=>{t(p),K(et,p).catch(()=>Z("保存に失敗しました"))},Mt=(p,k)=>{t(T=>{const E=T.map(U=>U.id===p?{...U,...k}:U);return K(et,E).catch(()=>Z("保存に失敗しました")),E})},uf=async(p,k,T)=>{try{const E=(e||[]).find(Ze=>Ze.id===k);if(!E)return{ok:!1};const U=$e(k),Y=await W(U)||{},L=Array.isArray(Y.todos)?Y.todos:[],I=(T||"").trim(),ne=I?(E.places||[]).find(Ze=>(Ze.name||"").trim()===I):null,Re={...p,placeId:ne?ne.id:null},Oe=[...L,Re];await K(U,{...Y,todos:Oe});const rn=Oe.filter(Ze=>!Ze.done&&!Ze.deferred).length;return Mt(k,{preview:`${Re.done?"☑":"☐"} ${(Re.text||"").split(`
`)[0]}`.slice(0,40),todoOpen:rn,lastAt:Date.now()}),{ok:!0,placeDropped:!!I&&!ne,placeKept:!!ne}}catch{return{ok:!1}}},cf=async p=>{const k=p.trim();if(!k)return;const T=dt();try{await K(Eo,{dateKey:T,text:k}),g(k);const E=$e(de);let U=await W(E);U=U&&typeof U=="object"?U:{};const Y=U[T],L=$m(Y?Y.text:"",k);U={...U,[T]:{text:L,time:Y?Y.time:qd()}},await K(E,U);const I=Object.keys(U).sort(),ne=I[I.length-1],Re=U[ne].text.split(`
`)[0].slice(0,40);t(Oe=>{let rn=Oe;return Oe.find(Ze=>Ze.id===de)||(rn=[...Oe,{id:de,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),rn=rn.map(Ze=>Ze.id===de?{...Ze,preview:Re,lastAt:Date.now()}:Ze),K(et,rn),rn}),B(Oe=>Oe+1),Z("今日のコマをピン留めしたよ🩷")}catch{Z("宣言の保存に失敗しました")}},is=p=>{at(p),K(Ir,p).catch(()=>Z("マークの保存に失敗しました"))},ls=()=>{const p=F.trim();if(p){if(Pe.includes(p)){X("");return}is([...Pe,p]),X("")}},df=p=>is(Pe.filter(k=>k!==p));N.useEffect(()=>{!o||!e||(async()=>{const p={};for(const k of e)p[k.id]=await W($e(k.id));m(p)})()},[o,e]);const Wr=e||[],yi=N.useMemo(()=>{if(!l||!s||!e)return null;const p=l.toLowerCase(),k=[];for(const T of Wr){const E=s[T.id],U=[];if(T.type==="diary"){const Y=E&&typeof E=="object"?E:{};for(const L of Object.keys(Y).sort())(Y[L].text+Ce(L)).toLowerCase().includes(p)&&U.push({snippet:Y[L].text.split(`
`)[0],date:Ce(L)})}else if(T.type==="todo"){const Y=E&&Array.isArray(E.todos)?E.todos:[];for(const L of Y)(L.text+Ce(L.dateKey)).toLowerCase().includes(p)&&U.push({snippet:`${L.done?"☑":"☐"} ${L.text.split(`
`)[0]}`,date:Ce(L.dateKey)})}else if(T.type==="darelog"){const Y=E&&Array.isArray(E.records)?E.records:[],L=I=>{var ne,Re;return((Re=(ne=T.members)==null?void 0:ne.find(Oe=>Oe.id===I))==null?void 0:Re.name)||""};for(const I of T.members||[])(I.memberMemo||"").toLowerCase().includes(p)&&U.push({snippet:`${I.name}: ${I.memberMemo}`,date:"メンバーメモ"});for(const I of Y){const ne=L(I.memberId);(ne+(I.memo||"")+Ce(I.dateKey)).toLowerCase().includes(p)&&U.push({snippet:`${ne}${I.memo?`: ${I.memo}`:""}`,date:Ce(I.dateKey)})}}else if(T.type==="expense"){const Y=E&&Array.isArray(E.expenses)?E.expenses:[],L=I=>{var ne,Re;return((Re=(ne=T.categories)==null?void 0:ne.find(Oe=>Oe.id===I))==null?void 0:Re.name)||""};for(const I of Y)(L(I.categoryId)+(I.memo||"")+String(I.amount)+Ce(I.dateKey)).toLowerCase().includes(p)&&U.push({snippet:`${L(I.categoryId)} ¥${I.amount}${I.memo?" "+I.memo:""}`,date:Ce(I.dateKey)})}else{const Y=E&&Array.isArray(E.messages)?E.messages:[],L=I=>{var ne,Re;return((Re=(ne=T.members)==null?void 0:ne.find(Oe=>Oe.id===I))==null?void 0:Re.name)||""};for(const I of Y)((I.text+Ce(I.dateKey)).toLowerCase().includes(p)||L(I.memberId).toLowerCase().includes(p))&&U.push({snippet:`${L(I.memberId)||"？"}: ${I.text.split(`
`)[0]}`,date:Ce(I.dateKey)})}U.length===0&&T.name.toLowerCase().includes(p)&&U.push({snippet:T.preview||"",date:""}),U.length&&k.push({room:T,hits:U})}return k},[l,s,Wr,e]),ff=p=>l?p.split(new RegExp(`(${Lm(l)})`,"gi")).map((T,E)=>T.toLowerCase()===l.toLowerCase()?c.jsx("mark",{className:"hl",children:T},E):T):p,pf=()=>{const p=u.name.trim();if(!p){Z("ルーム名を入れてね");return}const k={diary:"💗",todo:"✅",darelog:"🌗",expense:"💰",challenge:"🏁",talk:"🩷"}[u.type]||"🩷",T=u.type==="darelog"?[{id:qe(),name:"ブルー",color:"#d4f0ff",icon:{type:"emoji",value:"🌊"},side:"left"},{id:qe(),name:"グリーン",color:"#d9ffe3",icon:{type:"emoji",value:"🌿"},side:"left"},{id:qe(),name:"ピンク",color:"#ffd9ec",icon:{type:"emoji",value:"🌸"},side:"right"}]:[],E=u.type==="expense"?[{id:qe(),name:"AI費用",emoji:"🤖",color:"#2196F3"},{id:qe(),name:"ピンクグッズ",emoji:"🎀",color:"#E91E63"},{id:qe(),name:"ネイル",emoji:"💅",color:"#9C27B0"},{id:qe(),name:"旅費交通費",emoji:"🚃",color:"#00A5B5",transit:!0}]:void 0,U={id:qe(),type:u.type,name:p,emoji:u.emoji.trim()||k,theme:u.theme||cr,members:T,createdAt:Date.now(),lastAt:0,preview:"",...u.type==="todo"?{shopping:!!u.shopping,numbering:!!u.numbering,noDiary:!!u.noDiary}:{},...E?{categories:E,subscriptions:[],subsPosted:{},transitSeeded:!0,stations:[],fares:[],defaultFromId:null,roundTripDefault:!1,incomeSeeded:!0,incomeCategories:[{id:qe(),name:"売上",emoji:"💰",color:"#2E9E5B"},{id:qe(),name:"返金",emoji:"↩️",color:"#3BA7A0"},{id:qe(),name:"その他",emoji:"✨",color:"#7FB800"}]}:{}};xi([...e,U]),h(null),r({screen:"room",roomId:U.id})},hf=()=>{const p=u.name.trim();if(!p){Z("ルーム名を入れてね");return}Mt(u.roomId,{name:p,emoji:u.emoji.trim()||"💗",theme:u.theme||cr,hidden:!!u.hidden,...u.type==="todo"?{shopping:!!u.shopping,numbering:!!u.numbering,noDiary:!!u.noDiary}:{}});const k=u.start?u.roomId:j===u.roomId?null:j;k!==j&&(_(k),K(Su,k).catch(()=>Z("起動ルームの保存に失敗しました"))),h(null)},mf=p=>{h({mode:"edit",roomId:p.id,name:p.name,emoji:p.emoji,type:p.type,shopping:!!p.shopping,numbering:!!p.numbering,noDiary:!!p.noDiary,theme:p.theme||cr,hidden:!!p.hidden,start:j===p.id}),y(!1)},gf=async p=>{try{const k=await W($e(p));k&&await K(xm(p),k),xi(e.filter(T=>T.id!==p)),h(null),b(null),Z("ルームを削除しました")}catch{Z("削除に失敗しました")}},xf=()=>{const p=e.find(k=>k.id===u.roomId);b({message:`ルーム「${(p==null?void 0:p.name)||""}」を削除しますか？
中の記録もすべて消えます。`,onConfirm:()=>gf(u.roomId)})},yf=async()=>{D(""),gi(!1);try{const p=await ju();Rt(JSON.stringify(p,null,2))}catch{Rt("")}Ge(!0)},vi=async()=>{const p={...$||{},lastDateKey:dt(),lastAt:Date.now()};ye(p);try{await K(qi,p)}catch{}},as=p=>{const k=new Blob([p],{type:"application/json;charset=utf-8"}),T=URL.createObjectURL(k),E=document.createElement("a");E.href=T,E.download=tl,document.body.appendChild(E),E.click(),E.remove(),setTimeout(()=>URL.revokeObjectURL(T),3e3)},wi=async()=>{if(!Ue){es(!0);try{let p;try{p=JSON.stringify(await ju(),null,2)}catch{Z("バックアップの作成に失敗しました 🥺");return}try{const k=new File([p],tl,{type:"application/json"});if(navigator.canShare&&navigator.canShare({files:[k]})){await navigator.share({files:[k]}),await vi(),Z("バックアップを保存したよ💗");return}}catch(k){if(k&&(k.name==="AbortError"||k.name==="NotAllowedError"))return}try{as(p),await vi(),Z("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{Z("保存できない環境みたい。コピーを使ってね")}}finally{es(!1)}}},vf=()=>{try{as(Je),vi(),Z("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{Z("保存できない環境みたい。コピーを使ってね")}},Vr=dt(),bn=(()=>{if(!($!=null&&$.lastDateKey))return null;const p=we(Vr)-we($.lastDateKey);return Math.max(0,Math.round(p/864e5))})(),bi=bn===null||bn>=7,wf=!!$&&$.lastDateKey!==Vr&&$.dismissedDateKey!==Vr,bf=async()=>{const p={...$||{},dismissedDateKey:Vr};ye(p);try{await K(qi,p)}catch{}},kf=async()=>{try{await navigator.clipboard.writeText(Je),gi(!0),setTimeout(()=>gi(!1),2e3)}catch{Z("コピーできませんでした。全選択して手動でコピーしてね")}},Sf=p=>{var E;const k=(E=p.target.files)==null?void 0:E[0];if(!k)return;const T=new FileReader;T.onload=()=>D(String(T.result||"")),T.onerror=()=>Z("ファイルを読めませんでした"),T.readAsText(k),p.target.value=""},zf=()=>{let p;try{p=JSON.parse(pe)}catch{Z("JSONとして読めませんでした。ファイルが壊れているかも 🥺",4e3);return}const k=Am(p);if(k){Z(k,4500);return}Jn({obj:p,counts:Fm(p),exportedAt:p.exportedAt||"",version:p.version})},Ef=async()=>{const p=Ot==null?void 0:Ot.obj;if(p)try{const k=await Um(p);t(k.rooms),p.declaration&&p.declaration.dateKey===dt()&&!C&&(await K(Eo,p.declaration),g(p.declaration.text)),B(T=>T+1),Jn(null),Ge(!1),D(""),Z(`復元完了💗 ${k.addedRooms}ルーム / ${k.addedItems}件を追加`)}catch{Jn(null),Z("復元中にエラーが出ました。ファイルが壊れているかも 🥺",4e3)}};if(!e)return c.jsx("div",{className:"app",children:c.jsx("style",{children:Cu})});const jf=c.jsxs("div",{className:"pin",onClick:()=>{S(C),x(C?"view":"edit")},role:"button",children:[c.jsx("span",{className:"pin-ic",children:C?"📌":"🩷"}),C?c.jsx("span",{className:"pin-txt",children:C}):c.jsx("span",{className:"pin-ph",children:"今日のコマをえらぶ🩷"})]});let Hr;if(n.screen==="room"){const p=e.find(k=>k.id===n.roomId);if(!p)Hr=null,setTimeout(()=>r({screen:"home"}),0);else{const k={room:p,onBack:()=>r({screen:"home"}),onMeta:E=>Mt(p.id,E),initialQuery:n.q,showToast:Z,pinned:jf},T=p.type==="diary"?c.jsx(rg,{...k,syncSignal:R,marks:Pe,onEditMarks:()=>A(!0),nowRoomIds:e.filter(E=>E.type==="now").map(E=>E.id)},p.id):p.type==="now"?c.jsx(eg,{...k,onOpenDiary:e.some(E=>E.id===de)?()=>r({screen:"room",roomId:de}):void 0},p.id):p.type==="todo"?c.jsx(ig,{...k,onTodoComplete:af,onTodoUncomplete:sf,onRoomChange:E=>Mt(p.id,E),todoRooms:e.filter(E=>E.type==="todo"&&E.id!==p.id),onMoveTodo:uf},p.id):p.type==="darelog"?c.jsx(lg,{...k,onRoomChange:E=>Mt(p.id,E)},p.id):p.type==="expense"?c.jsx(ag,{...k,onRoomChange:E=>Mt(p.id,E)},p.id):p.type==="challenge"?c.jsx(sg,{...k},p.id):p.type==="future"?c.jsx(ug,{...k},p.id):p.type==="album"?c.jsx(cg,{...k},p.id):c.jsx(og,{...k,onRoomChange:E=>Mt(p.id,E)},p.id);Hr=c.jsx(ng,{onBack:()=>r({screen:"home"}),children:c.jsx(N.Suspense,{fallback:c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"hd hd-loading"}),c.jsx("div",{className:"chat"})]}),children:T})},p.id)}}else Hr=c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"hd hd-home",children:[c.jsx("div",{className:"app-brand",children:c.jsx("div",{className:"app-title",children:"💖Nachumin Lifelog💖"})}),c.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"バックアップ",onClick:yf,children:"💾"}),c.jsx("button",{className:"icon-btn","aria-label":"新しいルーム",onClick:()=>h({mode:"new",name:"",emoji:"",type:"talk"}),children:"➕"}),c.jsx("button",{className:"icon-btn","aria-label":"ぜんぶ検索",onClick:()=>{i(!o),a("")},children:o?"✕":"🔍"})]}),wf&&c.jsxs("div",{className:"bk-banner"+(bi?" stale":""),children:[c.jsxs("button",{className:"bk-main",onClick:wi,disabled:Ue,children:[c.jsx("span",{className:"bk-ttl",children:"💾 今日のバックアップ🩷"}),c.jsx("span",{className:"bk-sub",children:bn===null?"まだ一度も保存していません":bi?`最後の保存から ${bn}日 たっています`:"タップで1ファイルに書き出し"})]}),c.jsx("button",{className:"bk-x","aria-label":"閉じる",onClick:bf,children:"✕"})]}),o&&c.jsx("div",{className:"search-row",children:c.jsx("input",{autoFocus:!0,placeholder:"ぜんぶのルームから検索（ことば・話者・日付）",value:l,onChange:p=>a(p.target.value)})}),yi?c.jsx("div",{className:"rooms",children:yi.length===0?c.jsx("div",{className:"empty",children:"みつかりませんでした 🥺"}):yi.map(({room:p,hits:k})=>c.jsxs("div",{className:"room-row",onClick:()=>r({screen:"room",roomId:p.id,q:l}),children:[c.jsx("div",{className:"r-ic",children:p.emoji}),c.jsxs("div",{className:"r-main",children:[c.jsx("div",{className:"r-name",children:p.name}),c.jsx("div",{className:"r-prev",children:ff(k[0].snippet)})]}),c.jsxs("div",{className:"r-side",children:[c.jsxs("span",{className:"r-badge",children:[k.length,"件"]}),k[0].date&&c.jsx("span",{className:"r-date",children:k[0].date})]})]},p.id))}):c.jsx("div",{className:"home-scroll",ref:Ne,onScroll:p=>{kt.current=p.target.scrollTop},children:(()=>{const p=e.find(L=>L.id===de),k=Wr.filter(L=>L.id!==de&&!L.hidden),T=Wr.filter(L=>L.id!==de&&L.hidden),E=we(dt()),U=M?M.written?M.preview:`${E.getMonth()+1}/${E.getDate()}・きょうの分はまだ`:"…",Y=L=>{const I=[...L];xi(e.map(ne=>ne.id===de||ne.hidden?ne:I.shift()))};return c.jsxs(c.Fragment,{children:[p&&c.jsxs("button",{className:"diary-card",onClick:()=>r({screen:"room",roomId:p.id}),children:[c.jsx("span",{className:"dc-ic",children:p.emoji}),c.jsxs("span",{className:"dc-main",children:[c.jsx("span",{className:"dc-name",children:"DIARY"}),c.jsx("span",{className:"dc-sub",children:U})]}),c.jsx("span",{className:"dc-arw",children:"›"})]}),c.jsx(tg,{items:k,keyOf:L=>L.id,onReorder:Y,onLongPress:({item:L})=>{L&&mf(L)},footer:c.jsx("div",{className:"ig-cell ig-add",children:c.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>h({mode:"new",name:"",emoji:"",type:"talk"}),onKeyDown:L=>L.key==="Enter"&&h({mode:"new",name:"",emoji:"",type:"talk"}),children:[c.jsx("span",{className:"ig-btn",children:"＋"}),c.jsx("span",{className:"ig-name",children:"つくる"})]})}),renderItem:L=>{const I=L.type==="todo"&&L.todoOpen>0?L.todoOpen:null;return c.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>r({screen:"room",roomId:L.id}),onKeyDown:ne=>ne.key==="Enter"&&r({screen:"room",roomId:L.id}),children:[c.jsxs("span",{className:"ig-btn",style:Nu(L.theme),children:[L.emoji,I!=null&&c.jsx("span",{className:"ig-badge",children:I>99?"99+":I})]}),c.jsx("span",{className:"ig-name",children:L.name})]})}}),T.length>0&&c.jsx("button",{className:"hidden-entry",onClick:()=>se(!0),children:"🙈 非表示のルーム"}),ce&&c.jsx("div",{className:"overlay",onClick:()=>se(!1),children:c.jsxs("div",{className:"panel",onClick:L=>L.stopPropagation(),children:[c.jsx("h3",{children:"🙈 非表示のルーム"}),c.jsx("p",{className:"panel-note",children:"一覧に出していないルームです。中の記録は消えていません。「戻す」でまた表示できます。"}),c.jsx("div",{className:"move-list",children:T.map(L=>c.jsxs("div",{className:"move-item as-row",children:[c.jsx("span",{className:"move-ic",children:L.emoji}),c.jsx("span",{className:"move-name",children:L.name}),c.jsx("button",{className:"unhide-btn",onClick:()=>Mt(L.id,{hidden:!1}),children:"戻す"})]},L.id))}),c.jsx("div",{className:"panel-btns",children:c.jsx("button",{className:"p-close",onClick:()=>se(!1),children:"閉じる"})})]})})]})})()})]});return c.jsxs("div",{className:"app",children:[c.jsx("style",{children:Cu}),Hr,u&&c.jsx("div",{className:"overlay",onClick:()=>{h(null),y(!1)},children:c.jsxs("div",{className:"panel",onClick:p=>p.stopPropagation(),children:[c.jsx("h3",{children:u.mode==="new"?"➕ 新しいルーム":"⚙️ ルーム設定"}),c.jsx("div",{className:"f-label",children:"ルーム名"}),c.jsx("input",{className:"f-input",autoFocus:u.mode==="new",placeholder:"ハートるんず",value:u.name,onChange:p=>h(k=>({...k,name:p.target.value}))}),c.jsx("div",{className:"f-label",children:"アイコン（タップで選ぶ）"}),c.jsx("div",{className:"emoji-picks",children:dg.map(p=>c.jsx("button",{className:"emoji-pick"+(u.emoji===p?" on":""),onClick:()=>h(k=>({...k,emoji:p})),children:p},p))}),c.jsx("input",{className:"f-input",style:{width:130,textAlign:"center",marginTop:4},maxLength:8,placeholder:"または自由入力",value:u.emoji,onChange:p=>h(k=>({...k,emoji:p.target.value}))}),c.jsx("div",{className:"f-label",children:"テーマカラー"}),c.jsx("div",{className:"theme-swatches",children:ra.map(p=>{const k=(u.theme||cr)===p;return c.jsx("button",{className:"theme-sw"+(k?" on":""),style:Nu(p),"aria-label":p,onClick:()=>h(T=>({...T,theme:p}))},p)})}),c.jsxs("div",{className:"f-label",children:["タイプ",u.mode==="edit"?"（変更できません）":""]}),c.jsxs("div",{className:"type-row",children:[c.jsxs("button",{className:"type-chip"+(u.type==="diary"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"diary"})),children:["📖 日記",c.jsx("small",{children:"1日=1吹き出し"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="talk"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"talk"})),children:["💬 トーク",c.jsx("small",{children:"話者ごと"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="todo"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"todo"})),children:["✅ TODO",c.jsx("small",{children:"やること"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="darelog"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"darelog"})),children:["🌗 だれログ",c.jsx("small",{children:"朝昼夜の記録"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="expense"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"expense"})),children:["💰 経費",c.jsx("small",{children:"支出を記録"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="challenge"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"challenge"})),children:["🏁 チャレンジ",c.jsx("small",{children:"100個の目標"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="future"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"future"})),children:["🔮 未来日記",c.jsx("small",{children:"1日1篇とどく"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="now"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"now"})),children:["🕐 なう",c.jsx("small",{children:"いまを一言"})]}),c.jsxs("button",{className:"type-chip"+(u.type==="album"?" on":""),disabled:u.mode==="edit",onClick:()=>h(p=>({...p,type:"album"})),children:["📔 絵日記",c.jsx("small",{children:"書いた日記の画像"})]})]}),u.mode==="edit"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"アプリを開いたとき"}),c.jsxs("button",{className:"shop-toggle"+(u.start?" on":""),onClick:()=>h(p=>({...p,start:!p.start})),children:[c.jsx("span",{className:"shop-box",children:u.start?"✓":""}),"🚀 開いたらこのルームを出す"]})]}),u.mode==="edit"&&u.roomId!==de&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"一覧での表示"}),c.jsxs("button",{className:"shop-toggle"+(u.hidden?" on":""),onClick:()=>h(p=>({...p,hidden:!p.hidden})),children:[c.jsx("span",{className:"shop-box",children:u.hidden?"✓":""}),"🙈 一覧に表示しない（記録は消えません）"]})]}),u.type==="todo"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"f-label",children:"用途"}),c.jsxs("button",{className:"shop-toggle"+(u.shopping?" on":""),onClick:()=>h(p=>({...p,shopping:!p.shopping})),children:[c.jsx("span",{className:"shop-box",children:u.shopping?"✓":""}),"🛒 買い物リストとして使う（よく買うものクイック追加）"]}),c.jsxs("button",{className:"shop-toggle"+(u.numbering?" on":""),onClick:()=>h(p=>({...p,numbering:!p.numbering})),children:[c.jsx("span",{className:"shop-box",children:u.numbering?"✓":""}),"🔢 日ごとに番号をつける（1,2,3…／日付が変わると1から）"]}),c.jsxs("button",{className:"shop-toggle"+(u.noDiary?" on":""),onClick:()=>h(p=>({...p,noDiary:!p.noDiary})),children:[c.jsx("span",{className:"shop-box",children:u.noDiary?"✓":""}),"📓 完了しても日記の「できたこと」に入れない"]})]}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:u.mode==="new"?pf:hf,children:u.mode==="new"?"つくる":"保存"}),u.mode==="edit"&&c.jsx("button",{className:"p-del",onClick:xf,children:"削除"}),c.jsx("button",{className:"p-close",onClick:()=>{h(null),y(!1)},children:"閉じる"})]})]})}),te&&c.jsx("div",{className:"overlay",onClick:()=>Ge(!1),children:c.jsxs("div",{className:"panel",onClick:p=>p.stopPropagation(),children:[c.jsx("h3",{children:"💾 まるごとバックアップ"}),c.jsx("p",{className:"panel-note",children:"全ルーム・全データ（日記 / TODO / だれログ / 経費 / 習慣 / 各種設定）を まるごと1ファイルに保存します。端末が変わっても元どおり復元できます。"}),e.some(p=>p.type==="album")&&c.jsxs("p",{className:"panel-note bk-warn",children:["📔 絵日記の",c.jsx("b",{children:"画像だけは入りません"}),"（数百MBになってしまうため）。 元の画像は写真アプリに残しておいてね。日付の記録は入ります。"]}),c.jsxs("div",{className:"bk-last"+(bi?" stale":""),children:[c.jsx("span",{className:"bk-last-l",children:"最後にバックアップした日"}),c.jsx("span",{className:"bk-last-v",children:$!=null&&$.lastDateKey?`${Ce($.lastDateKey)}${bn===0?"（今日）":`（${bn}日前）`}`:"まだありません"})]}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:wi,disabled:Ue,children:"💾 1タップで書き出し"}),c.jsx("button",{className:"p-dl",onClick:vf,children:"ダウンロード"}),c.jsx("button",{className:"p-dl",onClick:kf,children:nf?"コピーしたよ💗":"コピー"})]}),c.jsxs("p",{className:"panel-note",children:["ファイル名は毎回 ",c.jsx("b",{children:tl})," で固定です。ただし 「ファイルに保存」は同じ名前があると ",c.jsx("b",{children:"iOS が勝手に番号を付けて"})," 別ファイルにします。 毎回きっちり上書きしたいときは、共有シートで 「ファイルに保存」ではなく ",c.jsx("b",{children:"ショートカット"}),"（上書き保存する用に作ったもの）を選んでね。"]}),c.jsx("div",{className:"f-label",style:{marginTop:6},children:"復元する（バックアップから読み込み）"}),c.jsx("p",{className:"panel-note",children:"既存のデータは消さず、足りない分だけ追加します（安全マージ）"}),c.jsxs("label",{className:"upload-btn",style:{alignSelf:"flex-start"},children:["📂 バックアップファイルを選ぶ",c.jsx("input",{type:"file",accept:".json,application/json,text/plain",onChange:Sf})]}),c.jsx("textarea",{placeholder:"または、コピーしたバックアップをここに貼り付け",value:pe,onChange:p=>D(p.target.value),style:{minHeight:120}}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",disabled:!pe.trim(),onClick:zf,children:"復元する"}),c.jsx("button",{className:"p-close",onClick:()=>{Ge(!1),D("")},children:"閉じる"})]})]})}),Ot&&c.jsx("div",{className:"overlay bk-ask-over",onClick:()=>Jn(null),children:c.jsxs("div",{className:"panel",onClick:p=>p.stopPropagation(),children:[c.jsx("h3",{children:"⚠️ 復元まえの確認"}),c.jsxs("div",{className:"bk-ask-box",children:[c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"ルーム"}),c.jsx("b",{children:Ot.counts.rooms})]}),c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"記録の件数"}),c.jsx("b",{children:Ot.counts.items})]}),Ot.exportedAt&&c.jsxs("div",{className:"bk-ask-row",children:[c.jsx("span",{children:"書き出し日時"}),c.jsx("b",{children:new Date(Ot.exportedAt).toLocaleString("ja-JP")})]})]}),c.jsxs("p",{className:"panel-note",children:["今のデータは消えません（足りない分を追加する安全マージ）。 それでも念のため、",c.jsx("b",{children:"先に今のデータをバックアップ"}),"しておくのがおすすめです💗"]}),c.jsx("button",{className:"bk-first",onClick:wi,disabled:Ue,children:"💾 先に今のデータをバックアップする"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:Ef,children:"この内容で復元する"}),c.jsx("button",{className:"p-close",onClick:()=>Jn(null),children:"キャンセル"})]})]})}),d&&c.jsx("div",{className:"overlay",onClick:()=>x(null),children:c.jsxs("div",{className:"panel",onClick:p=>p.stopPropagation(),children:[c.jsx("h3",{children:"🩷 今日のコマ"}),d==="view"?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"decl-full",children:C}),c.jsx("p",{className:"panel-note",children:"その日1日だけピン留め。日記にも記録されています🎬"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",onClick:()=>{S(C),x("edit")},children:"書きなおす"}),c.jsx("button",{className:"p-close",onClick:()=>x(null),children:"閉じる"})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("textarea",{autoFocus:!0,style:{minHeight:120},placeholder:"今日は愛全開の私でいる！",value:v,onChange:p=>S(p.target.value)}),c.jsx("p",{className:"panel-note",children:"その日1日だけ表示。決定すると今日の日記の先頭に🎬として残ります"}),c.jsxs("div",{className:"panel-btns",children:[c.jsx("button",{className:"p-copy",disabled:!v.trim(),onClick:()=>{cf(v),x(null)},children:"決定"}),c.jsx("button",{className:"p-close",onClick:()=>x(null),children:"閉じる"})]})]})]})}),P&&c.jsx("div",{className:"overlay",onClick:()=>A(!1),children:c.jsxs("div",{className:"panel",onClick:p=>p.stopPropagation(),children:[c.jsx("h3",{children:"⚙︎ 箇条書きマーク"}),c.jsx("p",{className:"panel-note",children:"日記の入力欄に出るマーク。タップで削除、下から追加できます。"}),c.jsxs("div",{className:"mark-manage",children:[Pe.map(p=>c.jsxs("span",{className:"mark-item",children:[p,c.jsx("button",{onClick:()=>df(p),"aria-label":"削除",children:"✕"})]},p)),Pe.length===0&&c.jsx("p",{className:"panel-note",children:"マークがありません。追加してね"})]}),c.jsxs("div",{className:"in-row",style:{marginTop:4},children:[c.jsx("input",{className:"f-input",maxLength:4,placeholder:"記号や絵文字（例: ❤︎）",value:F,onChange:p=>X(p.target.value),onKeyDown:p=>p.key==="Enter"&&ls()}),c.jsx("button",{className:"p-copy",style:{flex:"0 0 auto",padding:"8px 16px",borderRadius:999},disabled:!F.trim(),onClick:ls,children:"追加"})]}),c.jsx("div",{className:"panel-btns",children:c.jsx("button",{className:"p-close",onClick:()=>A(!1),children:"閉じる"})})]})}),w&&c.jsx(tf,{message:w.message,onConfirm:w.onConfirm,onCancel:()=>b(null)}),ts&&c.jsx("div",{className:"toast",children:ts})]})}let Du=!1,Tu=!!(navigator.serviceWorker&&navigator.serviceWorker.controller);navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!Tu){Tu=!0;return}Du||(Du=!0,window.location.reload())});tm({immediate:!0,onRegisteredSW(e,t){t&&(t.update(),setInterval(()=>t.update(),60*60*1e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&t.update()}))}});km();Wd(document.getElementById("root")).render(c.jsx(N.StrictMode,{children:c.jsx(fg,{})}));export{Ng as $,we as A,pt as B,Zd as C,Om as D,zu as E,Ym as F,jm as G,tf as H,qd as I,kg as J,bg as K,Sg as L,Ag as M,Gm as N,Pm as O,Hm as P,Lm as Q,Wm as R,Tg as S,Lg as T,Bg as U,Fg as V,xg as W,jg as X,_g as Y,Dg as Z,Rm as _,$g as a,Cg as a0,Ig as a1,zg as a2,Eg as a3,vg as a4,wg as a5,yg as a6,cr as a7,ra as a8,ta as a9,Og as aa,Rg as ab,gg as ac,pg as ad,hg as ae,mg as af,Mg as b,na as c,Tm as d,qa as e,$e as f,W as g,Zo as h,Pg as i,c as j,Ce as k,jo as l,qe as m,Qd as n,Yd as o,Ye as p,No as q,N as r,K as s,dt as t,Qm as u,Gd as v,ea as w,Xd as x,Eu as y,ef as z};
