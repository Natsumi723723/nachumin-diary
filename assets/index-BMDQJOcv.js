const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DarelogRoom-BwOz4CSH.js","./TalkRoom-BqNYY_d8.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var qu={exports:{}},Pi={},ec={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),Nf=Symbol.for("react.portal"),Cf=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),zf=Symbol.for("react.profiler"),_f=Symbol.for("react.provider"),Df=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Lf=Symbol.for("react.suspense"),Pf=Symbol.for("react.memo"),Mf=Symbol.for("react.lazy"),_a=Symbol.iterator;function Of(e){return e===null||typeof e!="object"?null:(e=_a&&e[_a]||e["@@iterator"],typeof e=="function"?e:null)}var tc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nc=Object.assign,rc={};function cr(e,t,n){this.props=e,this.context=t,this.refs=rc,this.updater=n||tc}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function oc(){}oc.prototype=cr.prototype;function Os(e,t,n){this.props=e,this.context=t,this.refs=rc,this.updater=n||tc}var Rs=Os.prototype=new oc;Rs.constructor=Os;nc(Rs,cr.prototype);Rs.isPureReactComponent=!0;var Da=Array.isArray,ic=Object.prototype.hasOwnProperty,Is={current:null},lc={key:!0,ref:!0,__self:!0,__source:!0};function sc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ic.call(t,r)&&!lc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:uo,type:e,key:i,ref:l,props:o,_owner:Is.current}}function Rf(e,t){return{$$typeof:uo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $s(e){return typeof e=="object"&&e!==null&&e.$$typeof===uo}function If(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ta=/\/+/g;function ol(e,t){return typeof e=="object"&&e!==null&&e.key!=null?If(""+e.key):t.toString(36)}function Wo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case uo:case Nf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ol(l,0):r,Da(o)?(n="",e!=null&&(n=e.replace(Ta,"$&/")+"/"),Wo(o,t,n,"",function(c){return c})):o!=null&&($s(o)&&(o=Rf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ta,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Da(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+ol(i,s);l+=Wo(i,t,n,a,o)}else if(a=Of(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+ol(i,s++),l+=Wo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Co(e,t,n){if(e==null)return e;var r=[],o=0;return Wo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function $f(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},Vo={transition:null},Af={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Vo,ReactCurrentOwner:Is};function ac(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Co,forEach:function(e,t,n){Co(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Co(e,function(){t++}),t},toArray:function(e){return Co(e,function(t){return t})||[]},only:function(e){if(!$s(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=cr;H.Fragment=Cf;H.Profiler=zf;H.PureComponent=Os;H.StrictMode=Ef;H.Suspense=Lf;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Af;H.act=ac;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Is.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)ic.call(t,a)&&!lc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:uo,type:e.type,key:o,ref:i,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:Df,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_f,_context:e},e.Consumer=e};H.createElement=sc;H.createFactory=function(e){var t=sc.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Tf,render:e}};H.isValidElement=$s;H.lazy=function(e){return{$$typeof:Mf,_payload:{_status:-1,_result:e},_init:$f}};H.memo=function(e,t){return{$$typeof:Pf,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Vo.transition;Vo.transition={};try{e()}finally{Vo.transition=t}};H.unstable_act=ac;H.useCallback=function(e,t){return Ue.current.useCallback(e,t)};H.useContext=function(e){return Ue.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ue.current.useEffect(e,t)};H.useId=function(){return Ue.current.useId()};H.useImperativeHandle=function(e,t,n){return Ue.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ue.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ue.current.useReducer(e,t,n)};H.useRef=function(e){return Ue.current.useRef(e)};H.useState=function(e){return Ue.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ue.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ue.current.useTransition()};H.version="18.3.1";ec.exports=H;var z=ec.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff=z,Bf=Symbol.for("react.element"),Uf=Symbol.for("react.fragment"),Kf=Object.prototype.hasOwnProperty,Hf=Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wf={key:!0,ref:!0,__self:!0,__source:!0};function uc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Kf.call(t,r)&&!Wf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Bf,type:e,key:i,ref:l,props:o,_owner:Hf.current}}Pi.Fragment=Uf;Pi.jsx=uc;Pi.jsxs=uc;qu.exports=Pi;var u=qu.exports,cc={exports:{}},tt={},dc={exports:{}},fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,F){var B=O.length;O.push(F);e:for(;0<B;){var G=B-1>>>1,ie=O[G];if(0<o(ie,F))O[G]=F,O[B]=ie,B=G;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var F=O[0],B=O.pop();if(B!==F){O[0]=B;e:for(var G=0,ie=O.length,xe=ie>>>1;G<xe;){var Se=2*(G+1)-1,je=O[Se],q=Se+1,wt=O[q];if(0>o(je,B))q<ie&&0>o(wt,je)?(O[G]=wt,O[q]=B,G=q):(O[G]=je,O[Se]=B,G=Se);else if(q<ie&&0>o(wt,B))O[G]=wt,O[q]=B,G=q;else break e}}return F}function o(O,F){var B=O.sortIndex-F.sortIndex;return B!==0?B:O.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],m=1,x=null,f=3,w=!1,b=!1,S=!1,P=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(O){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=O)r(c),F.sortIndex=F.expirationTime,t(a,F);else break;F=n(c)}}function k(O){if(S=!1,h(O),!b)if(n(a)!==null)b=!0,rt(N);else{var F=n(c);F!==null&&He(k,F.startTime-O)}}function N(O,F){b=!1,S&&(S=!1,g(T),T=-1),w=!0;var B=f;try{for(h(F),x=n(a);x!==null&&(!(x.expirationTime>F)||O&&!W());){var G=x.callback;if(typeof G=="function"){x.callback=null,f=x.priorityLevel;var ie=G(x.expirationTime<=F);F=e.unstable_now(),typeof ie=="function"?x.callback=ie:x===n(a)&&r(a),h(F)}else r(a);x=n(a)}if(x!==null)var xe=!0;else{var Se=n(c);Se!==null&&He(k,Se.startTime-F),xe=!1}return xe}finally{x=null,f=B,w=!1}}var D=!1,M=null,T=-1,A=5,$=-1;function W(){return!(e.unstable_now()-$<A)}function he(){if(M!==null){var O=e.unstable_now();$=O;var F=!0;try{F=M(!0,O)}finally{F?ge():(D=!1,M=null)}}else D=!1}var ge;if(typeof p=="function")ge=function(){p(he)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Ut=be.port2;be.port1.onmessage=he,ge=function(){Ut.postMessage(null)}}else ge=function(){P(he,0)};function rt(O){M=O,D||(D=!0,ge())}function He(O,F){T=P(function(){O(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){b||w||(b=!0,rt(N))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var B=f;f=F;try{return O()}finally{f=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var B=f;f=O;try{return F()}finally{f=B}},e.unstable_scheduleCallback=function(O,F,B){var G=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?G+B:G):B=G,O){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=B+ie,O={id:m++,callback:F,priorityLevel:O,startTime:B,expirationTime:ie,sortIndex:-1},B>G?(O.sortIndex=B,t(c,O),n(a)===null&&O===n(c)&&(S?(g(T),T=-1):S=!0,He(k,B-G))):(O.sortIndex=ie,t(a,O),b||w||(b=!0,rt(N))),O},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(O){var F=f;return function(){var B=f;f=F;try{return O.apply(this,arguments)}finally{f=B}}}})(fc);dc.exports=fc;var Vf=dc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf=z,et=Vf;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pc=new Set,Wr={};function On(e,t){rr(e,t),rr(e+"Capture",t)}function rr(e,t){for(Wr[e]=t,e=0;e<t.length;e++)pc.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rl=Object.prototype.hasOwnProperty,Yf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,La={},Pa={};function Xf(e){return Rl.call(Pa,e)?!0:Rl.call(La,e)?!1:Yf.test(e)?Pa[e]=!0:(La[e]=!0,!1)}function Gf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jf(e,t,n,r){if(t===null||typeof t>"u"||Gf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var As=/[\-:]([a-z])/g;function Fs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(As,Fs);_e[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(As,Fs);_e[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(As,Fs);_e[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bs(e,t,n,r){var o=_e.hasOwnProperty(t)?_e[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jf(t,n,o,r)&&(n=null),r||o===null?Xf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=Qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),An=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),Us=Symbol.for("react.strict_mode"),Il=Symbol.for("react.profiler"),hc=Symbol.for("react.provider"),mc=Symbol.for("react.context"),Ks=Symbol.for("react.forward_ref"),$l=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),Hs=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),gc=Symbol.for("react.offscreen"),Ma=Symbol.iterator;function br(e){return e===null||typeof e!="object"?null:(e=Ma&&e[Ma]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,il;function Tr(e){if(il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);il=t&&t[1]||""}return`
`+il+e}var ll=!1;function sl(e,t){if(!e||ll)return"";ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tr(e):""}function Zf(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=sl(e.type,!1),e;case 11:return e=sl(e.type.render,!1),e;case 1:return e=sl(e.type,!0),e;default:return""}}function Fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fn:return"Fragment";case An:return"Portal";case Il:return"Profiler";case Us:return"StrictMode";case $l:return"Suspense";case Al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mc:return(e.displayName||"Context")+".Consumer";case hc:return(e._context.displayName||"Context")+".Provider";case Ks:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hs:return t=e.displayName||null,t!==null?t:Fl(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return Fl(e(t))}catch{}}return null}function qf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fl(t);case 8:return t===Us?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ep(e){var t=xc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zo(e){e._valueTracker||(e._valueTracker=ep(e))}function yc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bl(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Oa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vc(e,t){t=t.checked,t!=null&&Bs(e,"checked",t,!1)}function Ul(e,t){vc(e,t);var n=sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Kl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Kl(e,t.type,sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ra(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Kl(e,t,n){(t!=="number"||oi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lr=Array.isArray;function Jn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+sn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ia(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Lr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:sn(n)}}function wc(e,t){var n=sn(t.value),r=sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $a(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _o,bc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_o=_o||document.createElement("div"),_o.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_o.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tp=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){tp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rr[t]=Rr[e]})});function Sc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+t).trim():t+"px"}function jc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Sc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var np=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vl(e,t){if(t){if(np[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yl=null;function Ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xl=null,Zn=null,qn=null;function Aa(e){if(e=po(e)){if(typeof Xl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=$i(t),Xl(e.stateNode,e.type,t))}}function Nc(e){Zn?qn?qn.push(e):qn=[e]:Zn=e}function Cc(){if(Zn){var e=Zn,t=qn;if(qn=Zn=null,Aa(e),t)for(e=0;e<t.length;e++)Aa(t[e])}}function Ec(e,t){return e(t)}function zc(){}var al=!1;function _c(e,t,n){if(al)return e(t,n);al=!0;try{return Ec(e,t,n)}finally{al=!1,(Zn!==null||qn!==null)&&(zc(),Cc())}}function Qr(e,t){var n=e.stateNode;if(n===null)return null;var r=$i(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Gl=!1;if(It)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){Gl=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{Gl=!1}function rp(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Ir=!1,ii=null,li=!1,Jl=null,op={onError:function(e){Ir=!0,ii=e}};function ip(e,t,n,r,o,i,l,s,a){Ir=!1,ii=null,rp.apply(op,arguments)}function lp(e,t,n,r,o,i,l,s,a){if(ip.apply(this,arguments),Ir){if(Ir){var c=ii;Ir=!1,ii=null}else throw Error(_(198));li||(li=!0,Jl=c)}}function Rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fa(e){if(Rn(e)!==e)throw Error(_(188))}function sp(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Fa(o),e;if(i===r)return Fa(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Tc(e){return e=sp(e),e!==null?Lc(e):null}function Lc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lc(e);if(t!==null)return t;e=e.sibling}return null}var Pc=et.unstable_scheduleCallback,Ba=et.unstable_cancelCallback,ap=et.unstable_shouldYield,up=et.unstable_requestPaint,pe=et.unstable_now,cp=et.unstable_getCurrentPriorityLevel,Vs=et.unstable_ImmediatePriority,Mc=et.unstable_UserBlockingPriority,si=et.unstable_NormalPriority,dp=et.unstable_LowPriority,Oc=et.unstable_IdlePriority,Mi=null,Et=null;function fp(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mi,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:mp,pp=Math.log,hp=Math.LN2;function mp(e){return e>>>=0,e===0?32:31-(pp(e)/hp|0)|0}var Do=64,To=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ai(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Pr(s):(i&=l,i!==0&&(r=Pr(i)))}else l=n&~o,l!==0?r=Pr(l):i!==0&&(r=Pr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),o=1<<n,r|=e[n],t&=~o;return r}function gp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-xt(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=gp(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rc(){var e=Do;return Do<<=1,!(Do&4194240)&&(Do=64),e}function ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function co(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function yp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Qs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var X=0;function Ic(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $c,Ys,Ac,Fc,Bc,ql=!1,Lo=[],Zt=null,qt=null,en=null,Yr=new Map,Xr=new Map,Yt=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ua(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xr.delete(t.pointerId)}}function jr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=po(t),t!==null&&Ys(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function wp(e,t,n,r,o){switch(t){case"focusin":return Zt=jr(Zt,e,t,n,r,o),!0;case"dragenter":return qt=jr(qt,e,t,n,r,o),!0;case"mouseover":return en=jr(en,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Yr.set(i,jr(Yr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Xr.set(i,jr(Xr.get(i)||null,e,t,n,r,o)),!0}return!1}function Uc(e){var t=bn(e.target);if(t!==null){var n=Rn(t);if(n!==null){if(t=n.tag,t===13){if(t=Dc(n),t!==null){e.blockedOn=t,Bc(e.priority,function(){Ac(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yl=r,n.target.dispatchEvent(r),Yl=null}else return t=po(n),t!==null&&Ys(t),e.blockedOn=n,!1;t.shift()}return!0}function Ka(e,t,n){Qo(e)&&n.delete(t)}function kp(){ql=!1,Zt!==null&&Qo(Zt)&&(Zt=null),qt!==null&&Qo(qt)&&(qt=null),en!==null&&Qo(en)&&(en=null),Yr.forEach(Ka),Xr.forEach(Ka)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,ql||(ql=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,kp)))}function Gr(e){function t(o){return Nr(o,e)}if(0<Lo.length){Nr(Lo[0],e);for(var n=1;n<Lo.length;n++){var r=Lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&Nr(Zt,e),qt!==null&&Nr(qt,e),en!==null&&Nr(en,e),Yr.forEach(t),Xr.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)Uc(n),n.blockedOn===null&&Yt.shift()}var er=Bt.ReactCurrentBatchConfig,ui=!0;function bp(e,t,n,r){var o=X,i=er.transition;er.transition=null;try{X=1,Xs(e,t,n,r)}finally{X=o,er.transition=i}}function Sp(e,t,n,r){var o=X,i=er.transition;er.transition=null;try{X=4,Xs(e,t,n,r)}finally{X=o,er.transition=i}}function Xs(e,t,n,r){if(ui){var o=es(e,t,n,r);if(o===null)vl(e,t,r,ci,n),Ua(e,r);else if(wp(o,e,t,n,r))r.stopPropagation();else if(Ua(e,r),t&4&&-1<vp.indexOf(e)){for(;o!==null;){var i=po(o);if(i!==null&&$c(i),i=es(e,t,n,r),i===null&&vl(e,t,r,ci,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else vl(e,t,r,null,n)}}var ci=null;function es(e,t,n,r){if(ci=null,e=Ws(r),e=bn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ci=e,null}function Kc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cp()){case Vs:return 1;case Mc:return 4;case si:case dp:return 16;case Oc:return 536870912;default:return 16}default:return 16}}var Gt=null,Gs=null,Yo=null;function Hc(){if(Yo)return Yo;var e,t=Gs,n=t.length,r,o="value"in Gt?Gt.value:Gt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Yo=o.slice(e,1<r?1-r:void 0)}function Xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function Ha(){return!1}function nt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Po:Ha,this.isPropagationStopped=Ha,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Js=nt(dr),fo=ue({},dr,{view:0,detail:0}),jp=nt(fo),cl,dl,Cr,Oi=ue({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cr&&(Cr&&e.type==="mousemove"?(cl=e.screenX-Cr.screenX,dl=e.screenY-Cr.screenY):dl=cl=0,Cr=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:dl}}),Wa=nt(Oi),Np=ue({},Oi,{dataTransfer:0}),Cp=nt(Np),Ep=ue({},fo,{relatedTarget:0}),fl=nt(Ep),zp=ue({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),_p=nt(zp),Dp=ue({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tp=nt(Dp),Lp=ue({},dr,{data:0}),Va=nt(Lp),Pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Op={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Op[e])?!!t[e]:!1}function Zs(){return Rp}var Ip=ue({},fo,{key:function(e){if(e.key){var t=Pp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zs,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$p=nt(Ip),Ap=ue({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qa=nt(Ap),Fp=ue({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zs}),Bp=nt(Fp),Up=ue({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kp=nt(Up),Hp=ue({},Oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wp=nt(Hp),Vp=[9,13,27,32],qs=It&&"CompositionEvent"in window,$r=null;It&&"documentMode"in document&&($r=document.documentMode);var Qp=It&&"TextEvent"in window&&!$r,Wc=It&&(!qs||$r&&8<$r&&11>=$r),Ya=" ",Xa=!1;function Vc(e,t){switch(e){case"keyup":return Vp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bn=!1;function Yp(e,t){switch(e){case"compositionend":return Qc(t);case"keypress":return t.which!==32?null:(Xa=!0,Ya);case"textInput":return e=t.data,e===Ya&&Xa?null:e;default:return null}}function Xp(e,t){if(Bn)return e==="compositionend"||!qs&&Vc(e,t)?(e=Hc(),Yo=Gs=Gt=null,Bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wc&&t.locale!=="ko"?null:t.data;default:return null}}var Gp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gp[e.type]:t==="textarea"}function Yc(e,t,n,r){Nc(r),t=di(t,"onChange"),0<t.length&&(n=new Js("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,Jr=null;function Jp(e){id(e,0)}function Ri(e){var t=Hn(e);if(yc(t))return e}function Zp(e,t){if(e==="change")return t}var Xc=!1;if(It){var pl;if(It){var hl="oninput"in document;if(!hl){var Ja=document.createElement("div");Ja.setAttribute("oninput","return;"),hl=typeof Ja.oninput=="function"}pl=hl}else pl=!1;Xc=pl&&(!document.documentMode||9<document.documentMode)}function Za(){Ar&&(Ar.detachEvent("onpropertychange",Gc),Jr=Ar=null)}function Gc(e){if(e.propertyName==="value"&&Ri(Jr)){var t=[];Yc(t,Jr,e,Ws(e)),_c(Jp,t)}}function qp(e,t,n){e==="focusin"?(Za(),Ar=t,Jr=n,Ar.attachEvent("onpropertychange",Gc)):e==="focusout"&&Za()}function eh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ri(Jr)}function th(e,t){if(e==="click")return Ri(t)}function nh(e,t){if(e==="input"||e==="change")return Ri(t)}function rh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:rh;function Zr(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Rl.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function qa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eu(e,t){var n=qa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qa(n)}}function Jc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zc(){for(var e=window,t=oi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oi(e.document)}return t}function ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function oh(e){var t=Zc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jc(n.ownerDocument.documentElement,n)){if(r!==null&&ea(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=eu(n,i);var l=eu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ih=It&&"documentMode"in document&&11>=document.documentMode,Un=null,ts=null,Fr=null,ns=!1;function tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ns||Un==null||Un!==oi(r)||(r=Un,"selectionStart"in r&&ea(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&Zr(Fr,r)||(Fr=r,r=di(ts,"onSelect"),0<r.length&&(t=new Js("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Un)))}function Mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},ml={},qc={};It&&(qc=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function Ii(e){if(ml[e])return ml[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qc)return ml[e]=t[n];return e}var ed=Ii("animationend"),td=Ii("animationiteration"),nd=Ii("animationstart"),rd=Ii("transitionend"),od=new Map,nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){od.set(e,t),On(t,[e])}for(var gl=0;gl<nu.length;gl++){var xl=nu[gl],lh=xl.toLowerCase(),sh=xl[0].toUpperCase()+xl.slice(1);un(lh,"on"+sh)}un(ed,"onAnimationEnd");un(td,"onAnimationIteration");un(nd,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(rd,"onTransitionEnd");rr("onMouseEnter",["mouseout","mouseover"]);rr("onMouseLeave",["mouseout","mouseover"]);rr("onPointerEnter",["pointerout","pointerover"]);rr("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ah=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,lp(r,t,void 0,e),e.currentTarget=null}function id(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;ru(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;ru(o,s,c),i=a}}}if(li)throw e=Jl,li=!1,Jl=null,e}function re(e,t){var n=t[ss];n===void 0&&(n=t[ss]=new Set);var r=e+"__bubble";n.has(r)||(ld(t,e,2,!1),n.add(r))}function yl(e,t,n){var r=0;t&&(r|=4),ld(n,e,r,t)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[Oo]){e[Oo]=!0,pc.forEach(function(n){n!=="selectionchange"&&(ah.has(n)||yl(n,!1,e),yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oo]||(t[Oo]=!0,yl("selectionchange",!1,t))}}function ld(e,t,n,r){switch(Kc(t)){case 1:var o=bp;break;case 4:o=Sp;break;default:o=Xs}n=o.bind(null,t,n,e),o=void 0,!Gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function vl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=bn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}_c(function(){var c=i,m=Ws(n),x=[];e:{var f=od.get(e);if(f!==void 0){var w=Js,b=e;switch(e){case"keypress":if(Xo(n)===0)break e;case"keydown":case"keyup":w=$p;break;case"focusin":b="focus",w=fl;break;case"focusout":b="blur",w=fl;break;case"beforeblur":case"afterblur":w=fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Wa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Bp;break;case ed:case td:case nd:w=_p;break;case rd:w=Kp;break;case"scroll":w=jp;break;case"wheel":w=Wp;break;case"copy":case"cut":case"paste":w=Tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Qa}var S=(t&4)!==0,P=!S&&e==="scroll",g=S?f!==null?f+"Capture":null:f;S=[];for(var p=c,h;p!==null;){h=p;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,g!==null&&(k=Qr(p,g),k!=null&&S.push(eo(p,k,h)))),P)break;p=p.return}0<S.length&&(f=new w(f,b,null,n,m),x.push({event:f,listeners:S}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",f&&n!==Yl&&(b=n.relatedTarget||n.fromElement)&&(bn(b)||b[$t]))break e;if((w||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,w?(b=n.relatedTarget||n.toElement,w=c,b=b?bn(b):null,b!==null&&(P=Rn(b),b!==P||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=c),w!==b)){if(S=Wa,k="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=Qa,k="onPointerLeave",g="onPointerEnter",p="pointer"),P=w==null?f:Hn(w),h=b==null?f:Hn(b),f=new S(k,p+"leave",w,n,m),f.target=P,f.relatedTarget=h,k=null,bn(m)===c&&(S=new S(g,p+"enter",b,n,m),S.target=h,S.relatedTarget=P,k=S),P=k,w&&b)t:{for(S=w,g=b,p=0,h=S;h;h=$n(h))p++;for(h=0,k=g;k;k=$n(k))h++;for(;0<p-h;)S=$n(S),p--;for(;0<h-p;)g=$n(g),h--;for(;p--;){if(S===g||g!==null&&S===g.alternate)break t;S=$n(S),g=$n(g)}S=null}else S=null;w!==null&&ou(x,f,w,S,!1),b!==null&&P!==null&&ou(x,P,b,S,!0)}}e:{if(f=c?Hn(c):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var N=Zp;else if(Ga(f))if(Xc)N=nh;else{N=eh;var D=qp}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=th);if(N&&(N=N(e,c))){Yc(x,N,n,m);break e}D&&D(e,f,c),e==="focusout"&&(D=f._wrapperState)&&D.controlled&&f.type==="number"&&Kl(f,"number",f.value)}switch(D=c?Hn(c):window,e){case"focusin":(Ga(D)||D.contentEditable==="true")&&(Un=D,ts=c,Fr=null);break;case"focusout":Fr=ts=Un=null;break;case"mousedown":ns=!0;break;case"contextmenu":case"mouseup":case"dragend":ns=!1,tu(x,n,m);break;case"selectionchange":if(ih)break;case"keydown":case"keyup":tu(x,n,m)}var M;if(qs)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Bn?Vc(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Wc&&n.locale!=="ko"&&(Bn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Bn&&(M=Hc()):(Gt=m,Gs="value"in Gt?Gt.value:Gt.textContent,Bn=!0)),D=di(c,T),0<D.length&&(T=new Va(T,e,null,n,m),x.push({event:T,listeners:D}),M?T.data=M:(M=Qc(n),M!==null&&(T.data=M)))),(M=Qp?Yp(e,n):Xp(e,n))&&(c=di(c,"onBeforeInput"),0<c.length&&(m=new Va("onBeforeInput","beforeinput",null,n,m),x.push({event:m,listeners:c}),m.data=M))}id(x,t)})}function eo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function di(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Qr(e,n),i!=null&&r.unshift(eo(e,i,o)),i=Qr(e,t),i!=null&&r.push(eo(e,i,o))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ou(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=Qr(n,i),a!=null&&l.unshift(eo(n,a,s))):o||(a=Qr(n,i),a!=null&&l.push(eo(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var uh=/\r\n?/g,ch=/\u0000|\uFFFD/g;function iu(e){return(typeof e=="string"?e:""+e).replace(uh,`
`).replace(ch,"")}function Ro(e,t,n){if(t=iu(t),iu(e)!==t&&n)throw Error(_(425))}function fi(){}var rs=null,os=null;function is(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ls=typeof setTimeout=="function"?setTimeout:void 0,dh=typeof clearTimeout=="function"?clearTimeout:void 0,lu=typeof Promise=="function"?Promise:void 0,fh=typeof queueMicrotask=="function"?queueMicrotask:typeof lu<"u"?function(e){return lu.resolve(null).then(e).catch(ph)}:ls;function ph(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Gr(t)}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+fr,to="__reactProps$"+fr,$t="__reactContainer$"+fr,ss="__reactEvents$"+fr,hh="__reactListeners$"+fr,mh="__reactHandles$"+fr;function bn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=su(e);e!==null;){if(n=e[Ct])return n;e=su(e)}return t}e=n,n=e.parentNode}return null}function po(e){return e=e[Ct]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function $i(e){return e[to]||null}var as=[],Wn=-1;function cn(e){return{current:e}}function oe(e){0>Wn||(e.current=as[Wn],as[Wn]=null,Wn--)}function ne(e,t){Wn++,as[Wn]=e.current,e.current=t}var an={},Ie=cn(an),Qe=cn(!1),Dn=an;function or(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ye(e){return e=e.childContextTypes,e!=null}function pi(){oe(Qe),oe(Ie)}function au(e,t,n){if(Ie.current!==an)throw Error(_(168));ne(Ie,t),ne(Qe,n)}function sd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,qf(e)||"Unknown",o));return ue({},n,r)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,Dn=Ie.current,ne(Ie,e),ne(Qe,Qe.current),!0}function uu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=sd(e,t,Dn),r.__reactInternalMemoizedMergedChildContext=e,oe(Qe),oe(Ie),ne(Ie,e)):oe(Qe),ne(Qe,n)}var Lt=null,Ai=!1,kl=!1;function ad(e){Lt===null?Lt=[e]:Lt.push(e)}function gh(e){Ai=!0,ad(e)}function dn(){if(!kl&&Lt!==null){kl=!0;var e=0,t=X;try{var n=Lt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lt=null,Ai=!1}catch(o){throw Lt!==null&&(Lt=Lt.slice(e+1)),Pc(Vs,dn),o}finally{X=t,kl=!1}}return null}var Vn=[],Qn=0,mi=null,gi=0,it=[],lt=0,Tn=null,Pt=1,Mt="";function wn(e,t){Vn[Qn++]=gi,Vn[Qn++]=mi,mi=e,gi=t}function ud(e,t,n){it[lt++]=Pt,it[lt++]=Mt,it[lt++]=Tn,Tn=e;var r=Pt;e=Mt;var o=32-xt(r)-1;r&=~(1<<o),n+=1;var i=32-xt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Pt=1<<32-xt(t)+o|n<<o|r,Mt=i+e}else Pt=1<<i|n<<o|r,Mt=e}function ta(e){e.return!==null&&(wn(e,1),ud(e,1,0))}function na(e){for(;e===mi;)mi=Vn[--Qn],Vn[Qn]=null,gi=Vn[--Qn],Vn[Qn]=null;for(;e===Tn;)Tn=it[--lt],it[lt]=null,Mt=it[--lt],it[lt]=null,Pt=it[--lt],it[lt]=null}var qe=null,Ze=null,le=!1,mt=null;function cd(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ze=tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:Pt,overflow:Mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ze=null,!0):!1;default:return!1}}function us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cs(e){if(le){var t=Ze;if(t){var n=t;if(!cu(e,t)){if(us(e))throw Error(_(418));t=tn(n.nextSibling);var r=qe;t&&cu(e,t)?cd(r,n):(e.flags=e.flags&-4097|2,le=!1,qe=e)}}else{if(us(e))throw Error(_(418));e.flags=e.flags&-4097|2,le=!1,qe=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Io(e){if(e!==qe)return!1;if(!le)return du(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!is(e.type,e.memoizedProps)),t&&(t=Ze)){if(us(e))throw dd(),Error(_(418));for(;t;)cd(e,t),t=tn(t.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=qe?tn(e.stateNode.nextSibling):null;return!0}function dd(){for(var e=Ze;e;)e=tn(e.nextSibling)}function ir(){Ze=qe=null,le=!1}function ra(e){mt===null?mt=[e]:mt.push(e)}var xh=Bt.ReactCurrentBatchConfig;function Er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function $o(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fu(e){var t=e._init;return t(e._payload)}function fd(e){function t(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function o(g,p){return g=ln(g,p),g.index=0,g.sibling=null,g}function i(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,h,k){return p===null||p.tag!==6?(p=zl(h,g.mode,k),p.return=g,p):(p=o(p,h),p.return=g,p)}function a(g,p,h,k){var N=h.type;return N===Fn?m(g,p,h.props.children,k,h.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Vt&&fu(N)===p.type)?(k=o(p,h.props),k.ref=Er(g,p,h),k.return=g,k):(k=ni(h.type,h.key,h.props,null,g.mode,k),k.ref=Er(g,p,h),k.return=g,k)}function c(g,p,h,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=_l(h,g.mode,k),p.return=g,p):(p=o(p,h.children||[]),p.return=g,p)}function m(g,p,h,k,N){return p===null||p.tag!==7?(p=Cn(h,g.mode,k,N),p.return=g,p):(p=o(p,h),p.return=g,p)}function x(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=zl(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Eo:return h=ni(p.type,p.key,p.props,null,g.mode,h),h.ref=Er(g,null,p),h.return=g,h;case An:return p=_l(p,g.mode,h),p.return=g,p;case Vt:var k=p._init;return x(g,k(p._payload),h)}if(Lr(p)||br(p))return p=Cn(p,g.mode,h,null),p.return=g,p;$o(g,p)}return null}function f(g,p,h,k){var N=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return N!==null?null:s(g,p,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Eo:return h.key===N?a(g,p,h,k):null;case An:return h.key===N?c(g,p,h,k):null;case Vt:return N=h._init,f(g,p,N(h._payload),k)}if(Lr(h)||br(h))return N!==null?null:m(g,p,h,k,null);$o(g,h)}return null}function w(g,p,h,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(h)||null,s(p,g,""+k,N);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Eo:return g=g.get(k.key===null?h:k.key)||null,a(p,g,k,N);case An:return g=g.get(k.key===null?h:k.key)||null,c(p,g,k,N);case Vt:var D=k._init;return w(g,p,h,D(k._payload),N)}if(Lr(k)||br(k))return g=g.get(h)||null,m(p,g,k,N,null);$o(p,k)}return null}function b(g,p,h,k){for(var N=null,D=null,M=p,T=p=0,A=null;M!==null&&T<h.length;T++){M.index>T?(A=M,M=null):A=M.sibling;var $=f(g,M,h[T],k);if($===null){M===null&&(M=A);break}e&&M&&$.alternate===null&&t(g,M),p=i($,p,T),D===null?N=$:D.sibling=$,D=$,M=A}if(T===h.length)return n(g,M),le&&wn(g,T),N;if(M===null){for(;T<h.length;T++)M=x(g,h[T],k),M!==null&&(p=i(M,p,T),D===null?N=M:D.sibling=M,D=M);return le&&wn(g,T),N}for(M=r(g,M);T<h.length;T++)A=w(M,g,T,h[T],k),A!==null&&(e&&A.alternate!==null&&M.delete(A.key===null?T:A.key),p=i(A,p,T),D===null?N=A:D.sibling=A,D=A);return e&&M.forEach(function(W){return t(g,W)}),le&&wn(g,T),N}function S(g,p,h,k){var N=br(h);if(typeof N!="function")throw Error(_(150));if(h=N.call(h),h==null)throw Error(_(151));for(var D=N=null,M=p,T=p=0,A=null,$=h.next();M!==null&&!$.done;T++,$=h.next()){M.index>T?(A=M,M=null):A=M.sibling;var W=f(g,M,$.value,k);if(W===null){M===null&&(M=A);break}e&&M&&W.alternate===null&&t(g,M),p=i(W,p,T),D===null?N=W:D.sibling=W,D=W,M=A}if($.done)return n(g,M),le&&wn(g,T),N;if(M===null){for(;!$.done;T++,$=h.next())$=x(g,$.value,k),$!==null&&(p=i($,p,T),D===null?N=$:D.sibling=$,D=$);return le&&wn(g,T),N}for(M=r(g,M);!$.done;T++,$=h.next())$=w(M,g,T,$.value,k),$!==null&&(e&&$.alternate!==null&&M.delete($.key===null?T:$.key),p=i($,p,T),D===null?N=$:D.sibling=$,D=$);return e&&M.forEach(function(he){return t(g,he)}),le&&wn(g,T),N}function P(g,p,h,k){if(typeof h=="object"&&h!==null&&h.type===Fn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Eo:e:{for(var N=h.key,D=p;D!==null;){if(D.key===N){if(N=h.type,N===Fn){if(D.tag===7){n(g,D.sibling),p=o(D,h.props.children),p.return=g,g=p;break e}}else if(D.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Vt&&fu(N)===D.type){n(g,D.sibling),p=o(D,h.props),p.ref=Er(g,D,h),p.return=g,g=p;break e}n(g,D);break}else t(g,D);D=D.sibling}h.type===Fn?(p=Cn(h.props.children,g.mode,k,h.key),p.return=g,g=p):(k=ni(h.type,h.key,h.props,null,g.mode,k),k.ref=Er(g,p,h),k.return=g,g=k)}return l(g);case An:e:{for(D=h.key;p!==null;){if(p.key===D)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(g,p.sibling),p=o(p,h.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=_l(h,g.mode,k),p.return=g,g=p}return l(g);case Vt:return D=h._init,P(g,p,D(h._payload),k)}if(Lr(h))return b(g,p,h,k);if(br(h))return S(g,p,h,k);$o(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(g,p.sibling),p=o(p,h),p.return=g,g=p):(n(g,p),p=zl(h,g.mode,k),p.return=g,g=p),l(g)):n(g,p)}return P}var lr=fd(!0),pd=fd(!1),xi=cn(null),yi=null,Yn=null,oa=null;function ia(){oa=Yn=yi=null}function la(e){var t=xi.current;oe(xi),e._currentValue=t}function ds(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tr(e,t){yi=e,oa=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(oa!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(yi===null)throw Error(_(308));Yn=e,yi.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var Sn=null;function sa(e){Sn===null?Sn=[e]:Sn.push(e)}function hd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,sa(t)):(n.next=o.next,o.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qt=!1;function aa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function md(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,At(e,n)}return o=r.interleaved,o===null?(t.next=t,sa(r)):(t.next=o.next,o.next=t),r.interleaved=t,At(e,n)}function Go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qs(e,n)}}function pu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vi(e,t,n,r){var o=e.updateQueue;Qt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=a))}if(i!==null){var x=o.baseState;l=0,m=c=a=null,s=i;do{var f=s.lane,w=s.eventTime;if((r&f)===f){m!==null&&(m=m.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,S=s;switch(f=t,w=n,S.tag){case 1:if(b=S.payload,typeof b=="function"){x=b.call(w,x,f);break e}x=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=S.payload,f=typeof b=="function"?b.call(w,x,f):b,f==null)break e;x=ue({},x,f);break e;case 2:Qt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else w={eventTime:w,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=w,a=x):m=m.next=w,l|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(m===null&&(a=x),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Pn|=l,e.lanes=l,e.memoizedState=x}}function hu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var ho={},zt=cn(ho),no=cn(ho),ro=cn(ho);function jn(e){if(e===ho)throw Error(_(174));return e}function ua(e,t){switch(ne(ro,t),ne(no,e),ne(zt,ho),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wl(t,e)}oe(zt),ne(zt,t)}function sr(){oe(zt),oe(no),oe(ro)}function gd(e){jn(ro.current);var t=jn(zt.current),n=Wl(t,e.type);t!==n&&(ne(no,e),ne(zt,n))}function ca(e){no.current===e&&(oe(zt),oe(no))}var se=cn(0);function wi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bl=[];function da(){for(var e=0;e<bl.length;e++)bl[e]._workInProgressVersionPrimary=null;bl.length=0}var Jo=Bt.ReactCurrentDispatcher,Sl=Bt.ReactCurrentBatchConfig,Ln=0,ae=null,we=null,Ne=null,ki=!1,Br=!1,oo=0,yh=0;function Te(){throw Error(_(321))}function fa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function pa(e,t,n,r,o,i){if(Ln=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jo.current=e===null||e.memoizedState===null?bh:Sh,e=n(r,o),Br){i=0;do{if(Br=!1,oo=0,25<=i)throw Error(_(301));i+=1,Ne=we=null,t.updateQueue=null,Jo.current=jh,e=n(r,o)}while(Br)}if(Jo.current=bi,t=we!==null&&we.next!==null,Ln=0,Ne=we=ae=null,ki=!1,t)throw Error(_(300));return e}function ha(){var e=oo!==0;return oo=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ae.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function ct(){if(we===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Ne===null?ae.memoizedState:Ne.next;if(t!==null)Ne=t,we=e;else{if(e===null)throw Error(_(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ne===null?ae.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function io(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=ct(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=we,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var m=c.lane;if((Ln&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var x={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=x,l=r):a=a.next=x,ae.lanes|=m,Pn|=m}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,vt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,Pn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Nl(e){var t=ct(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);vt(i,t.memoizedState)||(Ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function xd(){}function yd(e,t){var n=ae,r=ct(),o=t(),i=!vt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ve=!0),r=r.queue,ma(kd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,lo(9,wd.bind(null,n,r,o,t),void 0,null),Ce===null)throw Error(_(349));Ln&30||vd(n,t,o)}return o}function vd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wd(e,t,n,r){t.value=n,t.getSnapshot=r,bd(t)&&Sd(e)}function kd(e,t,n){return n(function(){bd(t)&&Sd(e)})}function bd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Sd(e){var t=At(e,1);t!==null&&yt(t,e,1,-1)}function mu(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:e},t.queue=e,e=e.dispatch=kh.bind(null,ae,e),[t.memoizedState,e]}function lo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jd(){return ct().memoizedState}function Zo(e,t,n,r){var o=Nt();ae.flags|=e,o.memoizedState=lo(1|t,n,void 0,r===void 0?null:r)}function Fi(e,t,n,r){var o=ct();r=r===void 0?null:r;var i=void 0;if(we!==null){var l=we.memoizedState;if(i=l.destroy,r!==null&&fa(r,l.deps)){o.memoizedState=lo(t,n,i,r);return}}ae.flags|=e,o.memoizedState=lo(1|t,n,i,r)}function gu(e,t){return Zo(8390656,8,e,t)}function ma(e,t){return Fi(2048,8,e,t)}function Nd(e,t){return Fi(4,2,e,t)}function Cd(e,t){return Fi(4,4,e,t)}function Ed(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zd(e,t,n){return n=n!=null?n.concat([e]):null,Fi(4,4,Ed.bind(null,t,e),n)}function ga(){}function _d(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Dd(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Td(e,t,n){return Ln&21?(vt(n,t)||(n=Rc(),ae.lanes|=n,Pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function vh(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Sl.transition;Sl.transition={};try{e(!1),t()}finally{X=n,Sl.transition=r}}function Ld(){return ct().memoizedState}function wh(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pd(e))Md(t,n);else if(n=hd(e,t,n,r),n!==null){var o=Be();yt(n,e,r,o),Od(n,t,r)}}function kh(e,t,n){var r=on(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pd(e))Md(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,vt(s,l)){var a=t.interleaved;a===null?(o.next=o,sa(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=hd(e,t,o,r),n!==null&&(o=Be(),yt(n,e,r,o),Od(n,t,r))}}function Pd(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Md(e,t){Br=ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Od(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qs(e,n)}}var bi={readContext:ut,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},bh={readContext:ut,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:gu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zo(4194308,4,Ed.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zo(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wh.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:mu,useDebugValue:ga,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=mu(!1),t=e[0];return e=vh.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,o=Nt();if(le){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Ce===null)throw Error(_(349));Ln&30||vd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,gu(kd.bind(null,r,i,e),[e]),r.flags|=2048,lo(9,wd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Nt(),t=Ce.identifierPrefix;if(le){var n=Mt,r=Pt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=oo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sh={readContext:ut,useCallback:_d,useContext:ut,useEffect:ma,useImperativeHandle:zd,useInsertionEffect:Nd,useLayoutEffect:Cd,useMemo:Dd,useReducer:jl,useRef:jd,useState:function(){return jl(io)},useDebugValue:ga,useDeferredValue:function(e){var t=ct();return Td(t,we.memoizedState,e)},useTransition:function(){var e=jl(io)[0],t=ct().memoizedState;return[e,t]},useMutableSource:xd,useSyncExternalStore:yd,useId:Ld,unstable_isNewReconciler:!1},jh={readContext:ut,useCallback:_d,useContext:ut,useEffect:ma,useImperativeHandle:zd,useInsertionEffect:Nd,useLayoutEffect:Cd,useMemo:Dd,useReducer:Nl,useRef:jd,useState:function(){return Nl(io)},useDebugValue:ga,useDeferredValue:function(e){var t=ct();return we===null?t.memoizedState=e:Td(t,we.memoizedState,e)},useTransition:function(){var e=Nl(io)[0],t=ct().memoizedState;return[e,t]},useMutableSource:xd,useSyncExternalStore:yd,useId:Ld,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bi={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),o=on(e),i=Rt(r,o);i.payload=t,n!=null&&(i.callback=n),t=nn(e,i,o),t!==null&&(yt(t,e,o,r),Go(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),o=on(e),i=Rt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=nn(e,i,o),t!==null&&(yt(t,e,o,r),Go(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=on(e),o=Rt(n,r);o.tag=2,t!=null&&(o.callback=t),t=nn(e,o,r),t!==null&&(yt(t,e,r,n),Go(t,e,r))}};function xu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Zr(n,r)||!Zr(o,i):!0}function Rd(e,t,n){var r=!1,o=an,i=t.contextType;return typeof i=="object"&&i!==null?i=ut(i):(o=Ye(t)?Dn:Ie.current,r=t.contextTypes,i=(r=r!=null)?or(e,o):an),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function yu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bi.enqueueReplaceState(t,t.state,null)}function ps(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},aa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ut(i):(i=Ye(t)?Dn:Ie.current,o.context=or(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(fs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Bi.enqueueReplaceState(o,o.state,null),vi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t){try{var n="",r=t;do n+=Zf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Nh=typeof WeakMap=="function"?WeakMap:Map;function Id(e,t,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ji||(ji=!0,js=r),hs(e,t)},n}function $d(e,t,n){n=Rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){hs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){hs(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Nh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ah.bind(null,e,t,n),t.then(e,e))}function wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ku(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rt(-1,1),t.tag=2,nn(n,t,1))),n.lanes|=1),e)}var Ch=Bt.ReactCurrentOwner,Ve=!1;function Fe(e,t,n,r){t.child=e===null?pd(t,null,n,r):lr(t,e.child,n,r)}function bu(e,t,n,r,o){n=n.render;var i=t.ref;return tr(t,o),r=pa(e,t,n,r,i,o),n=ha(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(le&&n&&ta(t),t.flags|=1,Fe(e,t,r,o),t.child)}function Su(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ja(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ad(e,t,i,r,o)):(e=ni(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zr,n(l,r)&&e.ref===t.ref)return Ft(e,t,o)}return t.flags|=1,e=ln(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ad(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Zr(i,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Ft(e,t,o)}return ms(e,t,n,r,o)}function Fd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Gn,Ge),Ge|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(Gn,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(Gn,Ge),Ge|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ne(Gn,Ge),Ge|=r;return Fe(e,t,o,n),t.child}function Bd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ms(e,t,n,r,o){var i=Ye(n)?Dn:Ie.current;return i=or(t,i),tr(t,o),n=pa(e,t,n,r,i,o),r=ha(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(le&&r&&ta(t),t.flags|=1,Fe(e,t,n,o),t.child)}function ju(e,t,n,r,o){if(Ye(n)){var i=!0;hi(t)}else i=!1;if(tr(t,o),t.stateNode===null)qo(e,t),Rd(t,n,r),ps(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=ut(c):(c=Ye(n)?Dn:Ie.current,c=or(t,c));var m=n.getDerivedStateFromProps,x=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&yu(t,l,r,c),Qt=!1;var f=t.memoizedState;l.state=f,vi(t,r,l,o),a=t.memoizedState,s!==r||f!==a||Qe.current||Qt?(typeof m=="function"&&(fs(t,n,m,r),a=t.memoizedState),(s=Qt||xu(t,n,s,r,f,a,c))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,md(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:pt(t.type,s),l.props=c,x=t.pendingProps,f=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=ut(a):(a=Ye(n)?Dn:Ie.current,a=or(t,a));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==x||f!==a)&&yu(t,l,r,a),Qt=!1,f=t.memoizedState,l.state=f,vi(t,r,l,o);var b=t.memoizedState;s!==x||f!==b||Qe.current||Qt?(typeof w=="function"&&(fs(t,n,w,r),b=t.memoizedState),(c=Qt||xu(t,n,c,r,f,b,a)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return gs(e,t,n,r,i,o)}function gs(e,t,n,r,o,i){Bd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&uu(t,n,!1),Ft(e,t,i);r=t.stateNode,Ch.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=lr(t,e.child,null,i),t.child=lr(t,null,s,i)):Fe(e,t,s,i),t.memoizedState=r.state,o&&uu(t,n,!0),t.child}function Ud(e){var t=e.stateNode;t.pendingContext?au(e,t.pendingContext,t.pendingContext!==t.context):t.context&&au(e,t.context,!1),ua(e,t.containerInfo)}function Nu(e,t,n,r,o){return ir(),ra(o),t.flags|=256,Fe(e,t,n,r),t.child}var xs={dehydrated:null,treeContext:null,retryLane:0};function ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kd(e,t,n){var r=t.pendingProps,o=se.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(se,o&1),e===null)return cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Hi(l,r,0,null),e=Cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ys(n),t.memoizedState=xs,e):xa(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Eh(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=ln(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=ln(s,i):(i=Cn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ys(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=xs,r}return i=e.child,e=i.sibling,r=ln(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xa(e,t){return t=Hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ao(e,t,n,r){return r!==null&&ra(r),lr(t,e.child,null,n),e=xa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Eh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Cl(Error(_(422))),Ao(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Hi({mode:"visible",children:r.children},o,0,null),i=Cn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&lr(t,e.child,null,l),t.child.memoizedState=ys(l),t.memoizedState=xs,i);if(!(t.mode&1))return Ao(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=Cl(i,r,void 0),Ao(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ve||s){if(r=Ce,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,At(e,o),yt(r,e,o,-1))}return Sa(),r=Cl(Error(_(421))),Ao(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Fh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ze=tn(o.nextSibling),qe=t,le=!0,mt=null,e!==null&&(it[lt++]=Pt,it[lt++]=Mt,it[lt++]=Tn,Pt=e.id,Mt=e.overflow,Tn=t),t=xa(t,r.children),t.flags|=4096,t)}function Cu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ds(e.return,t,n)}function El(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Hd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Fe(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cu(e,n,t);else if(e.tag===19)Cu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(se,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&wi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),El(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&wi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}El(t,!0,n,null,i);break;case"together":El(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zh(e,t,n){switch(t.tag){case 3:Ud(t),ir();break;case 5:gd(t);break;case 1:Ye(t.type)&&hi(t);break;case 4:ua(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ne(xi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?Kd(e,t,n):(ne(se,se.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);ne(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Fd(e,t,n)}return Ft(e,t,n)}var Wd,vs,Vd,Qd;Wd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vs=function(){};Vd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,jn(zt.current);var i=null;switch(n){case"input":o=Bl(e,o),r=Bl(e,r),i=[];break;case"select":o=ue({},o,{value:void 0}),r=ue({},r,{value:void 0}),i=[];break;case"textarea":o=Hl(e,o),r=Hl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fi)}Vl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&re("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Qd=function(e,t,n,r){n!==r&&(t.flags|=4)};function zr(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _h(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Ye(t.type)&&pi(),Le(t),null;case 3:return r=t.stateNode,sr(),oe(Qe),oe(Ie),da(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mt!==null&&(Es(mt),mt=null))),vs(e,t),Le(t),null;case 5:ca(t);var o=jn(ro.current);if(n=t.type,e!==null&&t.stateNode!=null)Vd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Le(t),null}if(e=jn(zt.current),Io(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ct]=t,r[to]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<Mr.length;o++)re(Mr[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Oa(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":Ia(r,i),re("invalid",r)}Vl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ro(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ro(r.textContent,s,e),o=["children",""+s]):Wr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&re("scroll",r)}switch(n){case"input":zo(r),Ra(r,i,!0);break;case"textarea":zo(r),$a(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=fi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ct]=t,e[to]=r,Wd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ql(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Mr.length;o++)re(Mr[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":Oa(e,r),o=Bl(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ue({},r,{value:void 0}),re("invalid",e);break;case"textarea":Ia(e,r),o=Hl(e,r),re("invalid",e);break;default:o=r}Vl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?jc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&bc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Vr(e,a):typeof a=="number"&&Vr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&re("scroll",e):a!=null&&Bs(e,i,a,l))}switch(n){case"input":zo(e),Ra(e,r,!1);break;case"textarea":zo(e),$a(e);break;case"option":r.value!=null&&e.setAttribute("value",""+sn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Jn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=fi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)Qd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=jn(ro.current),jn(zt.current),Io(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(i=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Ro(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ro(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Le(t),null;case 13:if(oe(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Ze!==null&&t.mode&1&&!(t.flags&128))dd(),ir(),t.flags|=98560,i=!1;else if(i=Io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[Ct]=t}else ir(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else mt!==null&&(Es(mt),mt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ke===0&&(ke=3):Sa())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return sr(),vs(e,t),e===null&&qr(t.stateNode.containerInfo),Le(t),null;case 10:return la(t.type._context),Le(t),null;case 17:return Ye(t.type)&&pi(),Le(t),null;case 19:if(oe(se),i=t.memoizedState,i===null)return Le(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)zr(i,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=wi(e),l!==null){for(t.flags|=128,zr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&pe()>ur&&(t.flags|=128,r=!0,zr(i,!1),t.lanes=4194304)}else{if(!r)if(e=wi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!le)return Le(t),null}else 2*pe()-i.renderingStartTime>ur&&n!==1073741824&&(t.flags|=128,r=!0,zr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=pe(),t.sibling=null,n=se.current,ne(se,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return ba(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ge&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Dh(e,t){switch(na(t),t.tag){case 1:return Ye(t.type)&&pi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),oe(Qe),oe(Ie),da(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ca(t),null;case 13:if(oe(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(se),null;case 4:return sr(),null;case 10:return la(t.type._context),null;case 22:case 23:return ba(),null;case 24:return null;default:return null}}var Fo=!1,Pe=!1,Th=typeof WeakSet=="function"?WeakSet:Set,I=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function ws(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Eu=!1;function Lh(e,t){if(rs=ui,e=Zc(),ea(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,m=0,x=e,f=null;t:for(;;){for(var w;x!==n||o!==0&&x.nodeType!==3||(s=l+o),x!==i||r!==0&&x.nodeType!==3||(a=l+r),x.nodeType===3&&(l+=x.nodeValue.length),(w=x.firstChild)!==null;)f=x,x=w;for(;;){if(x===e)break t;if(f===n&&++c===o&&(s=l),f===i&&++m===r&&(a=l),(w=x.nextSibling)!==null)break;x=f,f=x.parentNode}x=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(os={focusedElem:e,selectionRange:n},ui=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var S=b.memoizedProps,P=b.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?S:pt(t.type,S),P);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(k){fe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return b=Eu,Eu=!1,b}function Ur(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ws(t,n,i)}o=o.next}while(o!==r)}}function Ui(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ks(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yd(e){var t=e.alternate;t!==null&&(e.alternate=null,Yd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[to],delete t[ss],delete t[hh],delete t[mh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xd(e){return e.tag===5||e.tag===3||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fi));else if(r!==4&&(e=e.child,e!==null))for(bs(e,t,n),e=e.sibling;e!==null;)bs(e,t,n),e=e.sibling}function Ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ss(e,t,n),e=e.sibling;e!==null;)Ss(e,t,n),e=e.sibling}var Ee=null,ht=!1;function Wt(e,t,n){for(n=n.child;n!==null;)Gd(e,t,n),n=n.sibling}function Gd(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mi,n)}catch{}switch(n.tag){case 5:Pe||Xn(n,t);case 6:var r=Ee,o=ht;Ee=null,Wt(e,t,n),Ee=r,ht=o,Ee!==null&&(ht?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(ht?(e=Ee,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),Gr(e)):wl(Ee,n.stateNode));break;case 4:r=Ee,o=ht,Ee=n.stateNode.containerInfo,ht=!0,Wt(e,t,n),Ee=r,ht=o;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ws(n,t,l),o=o.next}while(o!==r)}Wt(e,t,n);break;case 1:if(!Pe&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){fe(n,t,s)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Wt(e,t,n),Pe=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function _u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Th),t.forEach(function(r){var o=Bh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Ee=s.stateNode,ht=!1;break e;case 3:Ee=s.stateNode.containerInfo,ht=!0;break e;case 4:Ee=s.stateNode.containerInfo,ht=!0;break e}s=s.return}if(Ee===null)throw Error(_(160));Gd(i,l,o),Ee=null,ht=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){fe(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jd(t,e),t=t.sibling}function Jd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),jt(e),r&4){try{Ur(3,e,e.return),Ui(3,e)}catch(S){fe(e,e.return,S)}try{Ur(5,e,e.return)}catch(S){fe(e,e.return,S)}}break;case 1:ft(t,e),jt(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(ft(t,e),jt(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var o=e.stateNode;try{Vr(o,"")}catch(S){fe(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&vc(o,i),Ql(s,l);var c=Ql(s,i);for(l=0;l<a.length;l+=2){var m=a[l],x=a[l+1];m==="style"?jc(o,x):m==="dangerouslySetInnerHTML"?bc(o,x):m==="children"?Vr(o,x):Bs(o,m,x,c)}switch(s){case"input":Ul(o,i);break;case"textarea":wc(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Jn(o,!!i.multiple,w,!1):f!==!!i.multiple&&(i.defaultValue!=null?Jn(o,!!i.multiple,i.defaultValue,!0):Jn(o,!!i.multiple,i.multiple?[]:"",!1))}o[to]=i}catch(S){fe(e,e.return,S)}}break;case 6:if(ft(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){fe(e,e.return,S)}}break;case 3:if(ft(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(S){fe(e,e.return,S)}break;case 4:ft(t,e),jt(e);break;case 13:ft(t,e),jt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(wa=pe())),r&4&&_u(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(c=Pe)||m,ft(t,e),Pe=c):ft(t,e),jt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(I=e,m=e.child;m!==null;){for(x=I=m;I!==null;){switch(f=I,w=f.child,f.tag){case 0:case 11:case 14:case 15:Ur(4,f,f.return);break;case 1:Xn(f,f.return);var b=f.stateNode;if(typeof b.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(S){fe(r,n,S)}}break;case 5:Xn(f,f.return);break;case 22:if(f.memoizedState!==null){Tu(x);continue}}w!==null?(w.return=f,I=w):Tu(x)}m=m.sibling}e:for(m=null,x=e;;){if(x.tag===5){if(m===null){m=x;try{o=x.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=x.stateNode,a=x.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Sc("display",l))}catch(S){fe(e,e.return,S)}}}else if(x.tag===6){if(m===null)try{x.stateNode.nodeValue=c?"":x.memoizedProps}catch(S){fe(e,e.return,S)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;m===x&&(m=null),x=x.return}m===x&&(m=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:ft(t,e),jt(e),r&4&&_u(e);break;case 21:break;default:ft(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xd(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Vr(o,""),r.flags&=-33);var i=zu(e);Ss(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=zu(e);bs(e,s,l);break;default:throw Error(_(161))}}catch(a){fe(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ph(e,t,n){I=e,Zd(e)}function Zd(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Fo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Pe;s=Fo;var c=Pe;if(Fo=l,(Pe=a)&&!c)for(I=o;I!==null;)l=I,a=l.child,l.tag===22&&l.memoizedState!==null?Lu(o):a!==null?(a.return=l,I=a):Lu(o);for(;i!==null;)I=i,Zd(i),i=i.sibling;I=o,Fo=s,Pe=c}Du(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,I=i):Du(e)}}function Du(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||Ui(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&hu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var x=m.dehydrated;x!==null&&Gr(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Pe||t.flags&512&&ks(t)}catch(f){fe(t,t.return,f)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Tu(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Lu(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ui(4,t)}catch(a){fe(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){fe(t,o,a)}}var i=t.return;try{ks(t)}catch(a){fe(t,i,a)}break;case 5:var l=t.return;try{ks(t)}catch(a){fe(t,l,a)}}}catch(a){fe(t,t.return,a)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var Mh=Math.ceil,Si=Bt.ReactCurrentDispatcher,ya=Bt.ReactCurrentOwner,at=Bt.ReactCurrentBatchConfig,Y=0,Ce=null,me=null,ze=0,Ge=0,Gn=cn(0),ke=0,so=null,Pn=0,Ki=0,va=0,Kr=null,We=null,wa=0,ur=1/0,Tt=null,ji=!1,js=null,rn=null,Bo=!1,Jt=null,Ni=0,Hr=0,Ns=null,ei=-1,ti=0;function Be(){return Y&6?pe():ei!==-1?ei:ei=pe()}function on(e){return e.mode&1?Y&2&&ze!==0?ze&-ze:xh.transition!==null?(ti===0&&(ti=Rc()),ti):(e=X,e!==0||(e=window.event,e=e===void 0?16:Kc(e.type)),e):1}function yt(e,t,n,r){if(50<Hr)throw Hr=0,Ns=null,Error(_(185));co(e,n,r),(!(Y&2)||e!==Ce)&&(e===Ce&&(!(Y&2)&&(Ki|=n),ke===4&&Xt(e,ze)),Xe(e,r),n===1&&Y===0&&!(t.mode&1)&&(ur=pe()+500,Ai&&dn()))}function Xe(e,t){var n=e.callbackNode;xp(e,t);var r=ai(e,e===Ce?ze:0);if(r===0)n!==null&&Ba(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ba(n),t===1)e.tag===0?gh(Pu.bind(null,e)):ad(Pu.bind(null,e)),fh(function(){!(Y&6)&&dn()}),n=null;else{switch(Ic(r)){case 1:n=Vs;break;case 4:n=Mc;break;case 16:n=si;break;case 536870912:n=Oc;break;default:n=si}n=sf(n,qd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qd(e,t){if(ei=-1,ti=0,Y&6)throw Error(_(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=ai(e,e===Ce?ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ci(e,r);else{t=r;var o=Y;Y|=2;var i=tf();(Ce!==e||ze!==t)&&(Tt=null,ur=pe()+500,Nn(e,t));do try{Ih();break}catch(s){ef(e,s)}while(!0);ia(),Si.current=i,Y=o,me!==null?t=0:(Ce=null,ze=0,t=ke)}if(t!==0){if(t===2&&(o=Zl(e),o!==0&&(r=o,t=Cs(e,o))),t===1)throw n=so,Nn(e,0),Xt(e,r),Xe(e,pe()),n;if(t===6)Xt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Oh(o)&&(t=Ci(e,r),t===2&&(i=Zl(e),i!==0&&(r=i,t=Cs(e,i))),t===1))throw n=so,Nn(e,0),Xt(e,r),Xe(e,pe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:kn(e,We,Tt);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=wa+500-pe(),10<t)){if(ai(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ls(kn.bind(null,e,We,Tt),t);break}kn(e,We,Tt);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-xt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mh(r/1960))-r,10<r){e.timeoutHandle=ls(kn.bind(null,e,We,Tt),r);break}kn(e,We,Tt);break;case 5:kn(e,We,Tt);break;default:throw Error(_(329))}}}return Xe(e,pe()),e.callbackNode===n?qd.bind(null,e):null}function Cs(e,t){var n=Kr;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=Ci(e,t),e!==2&&(t=We,We=n,t!==null&&Es(t)),e}function Es(e){We===null?We=e:We.push.apply(We,e)}function Oh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!vt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~va,t&=~Ki,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function Pu(e){if(Y&6)throw Error(_(327));nr();var t=ai(e,0);if(!(t&1))return Xe(e,pe()),null;var n=Ci(e,t);if(e.tag!==0&&n===2){var r=Zl(e);r!==0&&(t=r,n=Cs(e,r))}if(n===1)throw n=so,Nn(e,0),Xt(e,t),Xe(e,pe()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,We,Tt),Xe(e,pe()),null}function ka(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(ur=pe()+500,Ai&&dn())}}function Mn(e){Jt!==null&&Jt.tag===0&&!(Y&6)&&nr();var t=Y;Y|=1;var n=at.transition,r=X;try{if(at.transition=null,X=1,e)return e()}finally{X=r,at.transition=n,Y=t,!(Y&6)&&dn()}}function ba(){Ge=Gn.current,oe(Gn)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dh(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(na(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pi();break;case 3:sr(),oe(Qe),oe(Ie),da();break;case 5:ca(r);break;case 4:sr();break;case 13:oe(se);break;case 19:oe(se);break;case 10:la(r.type._context);break;case 22:case 23:ba()}n=n.return}if(Ce=e,me=e=ln(e.current,null),ze=Ge=t,ke=0,so=null,va=Ki=Pn=0,We=Kr=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Sn=null}return e}function ef(e,t){do{var n=me;try{if(ia(),Jo.current=bi,ki){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ki=!1}if(Ln=0,Ne=we=ae=null,Br=!1,oo=0,ya.current=null,n===null||n.return===null){ke=1,so=t,me=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=ze,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=s,x=m.tag;if(!(m.mode&1)&&(x===0||x===11||x===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=wu(l);if(w!==null){w.flags&=-257,ku(w,l,s,i,t),w.mode&1&&vu(i,c,t),t=w,a=c;var b=t.updateQueue;if(b===null){var S=new Set;S.add(a),t.updateQueue=S}else b.add(a);break e}else{if(!(t&1)){vu(i,c,t),Sa();break e}a=Error(_(426))}}else if(le&&s.mode&1){var P=wu(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),ku(P,l,s,i,t),ra(ar(a,s));break e}}i=a=ar(a,s),ke!==4&&(ke=2),Kr===null?Kr=[i]:Kr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Id(i,a,t);pu(i,g);break e;case 1:s=a;var p=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(rn===null||!rn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=$d(i,s,t);pu(i,k);break e}}i=i.return}while(i!==null)}rf(n)}catch(N){t=N,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function tf(){var e=Si.current;return Si.current=bi,e===null?bi:e}function Sa(){(ke===0||ke===3||ke===2)&&(ke=4),Ce===null||!(Pn&268435455)&&!(Ki&268435455)||Xt(Ce,ze)}function Ci(e,t){var n=Y;Y|=2;var r=tf();(Ce!==e||ze!==t)&&(Tt=null,Nn(e,t));do try{Rh();break}catch(o){ef(e,o)}while(!0);if(ia(),Y=n,Si.current=r,me!==null)throw Error(_(261));return Ce=null,ze=0,ke}function Rh(){for(;me!==null;)nf(me)}function Ih(){for(;me!==null&&!ap();)nf(me)}function nf(e){var t=lf(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?rf(e):me=t,ya.current=null}function rf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dh(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,me=null;return}}else if(n=_h(n,t,Ge),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ke===0&&(ke=5)}function kn(e,t,n){var r=X,o=at.transition;try{at.transition=null,X=1,$h(e,t,n,r)}finally{at.transition=o,X=r}return null}function $h(e,t,n,r){do nr();while(Jt!==null);if(Y&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(yp(e,i),e===Ce&&(me=Ce=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bo||(Bo=!0,sf(si,function(){return nr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=at.transition,at.transition=null;var l=X;X=1;var s=Y;Y|=4,ya.current=null,Lh(e,n),Jd(n,e),oh(os),ui=!!rs,os=rs=null,e.current=n,Ph(n),up(),Y=s,X=l,at.transition=i}else e.current=n;if(Bo&&(Bo=!1,Jt=e,Ni=o),i=e.pendingLanes,i===0&&(rn=null),fp(n.stateNode),Xe(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ji)throw ji=!1,e=js,js=null,e;return Ni&1&&e.tag!==0&&nr(),i=e.pendingLanes,i&1?e===Ns?Hr++:(Hr=0,Ns=e):Hr=0,dn(),null}function nr(){if(Jt!==null){var e=Ic(Ni),t=at.transition,n=X;try{if(at.transition=null,X=16>e?16:e,Jt===null)var r=!1;else{if(e=Jt,Jt=null,Ni=0,Y&6)throw Error(_(331));var o=Y;for(Y|=4,I=e.current;I!==null;){var i=I,l=i.child;if(I.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(I=c;I!==null;){var m=I;switch(m.tag){case 0:case 11:case 15:Ur(8,m,i)}var x=m.child;if(x!==null)x.return=m,I=x;else for(;I!==null;){m=I;var f=m.sibling,w=m.return;if(Yd(m),m===c){I=null;break}if(f!==null){f.return=w,I=f;break}I=w}}}var b=i.alternate;if(b!==null){var S=b.child;if(S!==null){b.child=null;do{var P=S.sibling;S.sibling=null,S=P}while(S!==null)}}I=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,I=l;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ur(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,I=g;break e}I=i.return}}var p=e.current;for(I=p;I!==null;){l=I;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,I=h;else e:for(l=p;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ui(9,s)}}catch(N){fe(s,s.return,N)}if(s===l){I=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,I=k;break e}I=s.return}}if(Y=o,dn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mi,e)}catch{}r=!0}return r}finally{X=n,at.transition=t}}return!1}function Mu(e,t,n){t=ar(n,t),t=Id(e,t,1),e=nn(e,t,1),t=Be(),e!==null&&(co(e,1,t),Xe(e,t))}function fe(e,t,n){if(e.tag===3)Mu(e,e,n);else for(;t!==null;){if(t.tag===3){Mu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=ar(n,e),e=$d(t,e,1),t=nn(t,e,1),e=Be(),t!==null&&(co(t,1,e),Xe(t,e));break}}t=t.return}}function Ah(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(ze&n)===n&&(ke===4||ke===3&&(ze&130023424)===ze&&500>pe()-wa?Nn(e,0):va|=n),Xe(e,t)}function of(e,t){t===0&&(e.mode&1?(t=To,To<<=1,!(To&130023424)&&(To=4194304)):t=1);var n=Be();e=At(e,t),e!==null&&(co(e,t,n),Xe(e,n))}function Fh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),of(e,n)}function Bh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),of(e,n)}var lf;lf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,zh(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,le&&t.flags&1048576&&ud(t,gi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qo(e,t),e=t.pendingProps;var o=or(t,Ie.current);tr(t,n),o=pa(null,t,r,e,o,n);var i=ha();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(i=!0,hi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,aa(t),o.updater=Bi,t.stateNode=o,o._reactInternals=t,ps(t,r,e,n),t=gs(null,t,r,!0,i,n)):(t.tag=0,le&&i&&ta(t),Fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Kh(r),e=pt(r,e),o){case 0:t=ms(null,t,r,e,n);break e;case 1:t=ju(null,t,r,e,n);break e;case 11:t=bu(null,t,r,e,n);break e;case 14:t=Su(null,t,r,pt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),ms(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),ju(e,t,r,o,n);case 3:e:{if(Ud(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,md(e,t),vi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ar(Error(_(423)),t),t=Nu(e,t,r,n,o);break e}else if(r!==o){o=ar(Error(_(424)),t),t=Nu(e,t,r,n,o);break e}else for(Ze=tn(t.stateNode.containerInfo.firstChild),qe=t,le=!0,mt=null,n=pd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ir(),r===o){t=Ft(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return gd(t),e===null&&cs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,is(r,o)?l=null:i!==null&&is(r,i)&&(t.flags|=32),Bd(e,t),Fe(e,t,l,n),t.child;case 6:return e===null&&cs(t),null;case 13:return Kd(e,t,n);case 4:return ua(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lr(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),bu(e,t,r,o,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ne(xi,r._currentValue),r._currentValue=l,i!==null)if(vt(i.value,l)){if(i.children===o.children&&!Qe.current){t=Ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Rt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ds(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ds(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,tr(t,n),o=ut(o),r=r(o),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,o=pt(r,t.pendingProps),o=pt(r.type,o),Su(e,t,r,o,n);case 15:return Ad(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),qo(e,t),t.tag=1,Ye(r)?(e=!0,hi(t)):e=!1,tr(t,n),Rd(t,r,o),ps(t,r,o,n),gs(null,t,r,!0,e,n);case 19:return Hd(e,t,n);case 22:return Fd(e,t,n)}throw Error(_(156,t.tag))};function sf(e,t){return Pc(e,t)}function Uh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new Uh(e,t,n,r)}function ja(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kh(e){if(typeof e=="function")return ja(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ks)return 11;if(e===Hs)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ni(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ja(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Fn:return Cn(n.children,o,i,t);case Us:l=8,o|=8;break;case Il:return e=st(12,n,t,o|2),e.elementType=Il,e.lanes=i,e;case $l:return e=st(13,n,t,o),e.elementType=$l,e.lanes=i,e;case Al:return e=st(19,n,t,o),e.elementType=Al,e.lanes=i,e;case gc:return Hi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hc:l=10;break e;case mc:l=9;break e;case Ks:l=11;break e;case Hs:l=14;break e;case Vt:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=st(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Cn(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function Hi(e,t,n,r){return e=st(22,e,r,t),e.elementType=gc,e.lanes=n,e.stateNode={isHidden:!1},e}function zl(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function _l(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Na(e,t,n,r,o,i,l,s,a){return e=new Hh(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=st(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},aa(i),e}function Wh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:An,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function af(e){if(!e)return an;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ye(n))return sd(e,n,t)}return t}function uf(e,t,n,r,o,i,l,s,a){return e=Na(n,r,!0,e,o,i,l,s,a),e.context=af(null),n=e.current,r=Be(),o=on(n),i=Rt(r,o),i.callback=t??null,nn(n,i,o),e.current.lanes=o,co(e,o,r),Xe(e,r),e}function Wi(e,t,n,r){var o=t.current,i=Be(),l=on(o);return n=af(n),t.context===null?t.context=n:t.pendingContext=n,t=Rt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=nn(o,t,l),e!==null&&(yt(e,o,l,i),Go(e,o,l)),l}function Ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ca(e,t){Ou(e,t),(e=e.alternate)&&Ou(e,t)}function Vh(){return null}var cf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ea(e){this._internalRoot=e}Vi.prototype.render=Ea.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Wi(e,t,null,null)};Vi.prototype.unmount=Ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mn(function(){Wi(null,e,null,null)}),t[$t]=null}};function Vi(e){this._internalRoot=e}Vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&Uc(e)}};function za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ru(){}function Qh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ei(l);i.call(c)}}var l=uf(t,r,e,0,null,!1,!1,"",Ru);return e._reactRootContainer=l,e[$t]=l.current,qr(e.nodeType===8?e.parentNode:e),Mn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Ei(a);s.call(c)}}var a=Na(e,0,!1,null,null,!1,!1,"",Ru);return e._reactRootContainer=a,e[$t]=a.current,qr(e.nodeType===8?e.parentNode:e),Mn(function(){Wi(t,a,n,r)}),a}function Yi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Ei(l);s.call(a)}}Wi(t,l,e,o)}else l=Qh(n,t,e,o,r);return Ei(l)}$c=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(Qs(t,n|1),Xe(t,pe()),!(Y&6)&&(ur=pe()+500,dn()))}break;case 13:Mn(function(){var r=At(e,1);if(r!==null){var o=Be();yt(r,e,1,o)}}),Ca(e,1)}};Ys=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Be();yt(t,e,134217728,n)}Ca(e,134217728)}};Ac=function(e){if(e.tag===13){var t=on(e),n=At(e,t);if(n!==null){var r=Be();yt(n,e,t,r)}Ca(e,t)}};Fc=function(){return X};Bc=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Xl=function(e,t,n){switch(t){case"input":if(Ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=$i(r);if(!o)throw Error(_(90));yc(r),Ul(r,o)}}}break;case"textarea":wc(e,n);break;case"select":t=n.value,t!=null&&Jn(e,!!n.multiple,t,!1)}};Ec=ka;zc=Mn;var Yh={usingClientEntryPoint:!1,Events:[po,Hn,$i,Nc,Cc,ka]},_r={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xh={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tc(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||Vh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uo.isDisabled&&Uo.supportsFiber)try{Mi=Uo.inject(Xh),Et=Uo}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yh;tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!za(t))throw Error(_(200));return Wh(e,t,null,n)};tt.createRoot=function(e,t){if(!za(e))throw Error(_(299));var n=!1,r="",o=cf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Na(e,1,!1,null,null,n,!1,r,o),e[$t]=t.current,qr(e.nodeType===8?e.parentNode:e),new Ea(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Tc(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return Mn(e)};tt.hydrate=function(e,t,n){if(!Qi(t))throw Error(_(200));return Yi(null,e,t,!0,n)};tt.hydrateRoot=function(e,t,n){if(!za(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=cf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=uf(t,null,e,1,n??null,o,!1,i,l),e[$t]=t.current,qr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Vi(t)};tt.render=function(e,t,n){if(!Qi(t))throw Error(_(200));return Yi(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!Qi(e))throw Error(_(40));return e._reactRootContainer?(Mn(function(){Yi(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};tt.unstable_batchedUpdates=ka;tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qi(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Yi(e,t,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function df(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(df)}catch(e){console.error(e)}}df(),cc.exports=tt;var Gh=cc.exports,ff,Iu=Gh;ff=Iu.createRoot,Iu.hydrateRoot;const Jh="modulepreload",Zh=function(e,t){return new URL(e,t).href},$u={},mo=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(c=>{if(c=Zh(c,r),c in $u)return;$u[c]=!0;const m=c.endsWith(".css"),x=m?'[rel="stylesheet"]':"";if(!!r)for(let b=l.length-1;b>=0;b--){const S=l[b];if(S.href===c&&(!m||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${x}`))return;const w=document.createElement("link");if(w.rel=m?"stylesheet":Jh,m||(w.as="script"),w.crossOrigin="",w.href=c,a&&w.setAttribute("nonce",a),document.head.appendChild(w),m)return new Promise((b,S)=>{w.addEventListener("load",b),w.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})};function qh(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:l}=e;let s,a;const c=async(x=!0)=>{await a};async function m(){if("serviceWorker"in navigator){if(s=await mo(async()=>{const{Workbox:x}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:x}},[],import.meta.url).then(({Workbox:x})=>new x("./sw.js",{scope:"./",type:"classic"})).catch(x=>{l==null||l(x)}),!s)return;s.addEventListener("activated",x=>{(x.isUpdate||x.isExternal)&&window.location.reload()}),s.addEventListener("installed",x=>{x.isUpdate||r==null||r()}),s.register({immediate:t}).then(x=>{i?i("./sw.js",x):o==null||o(x)}).catch(x=>{l==null||l(x)})}}return a=m(),c}const zs=(e,t)=>t.some(n=>e instanceof n);let Au,Fu;function em(){return Au||(Au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tm(){return Fu||(Fu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _s=new WeakMap,Dl=new WeakMap,Xi=new WeakMap;function nm(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",l)},i=()=>{n(En(e.result)),o()},l=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",l)});return Xi.set(t,e),t}function rm(e){if(_s.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",l),e.removeEventListener("abort",l)},i=()=>{n(),o()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",l),e.addEventListener("abort",l)});_s.set(e,t)}let Ds={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return _s.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function pf(e){Ds=e(Ds)}function om(e){return tm().includes(e)?function(...t){return e.apply(Ts(this),t),En(this.request)}:function(...t){return En(e.apply(Ts(this),t))}}function im(e){return typeof e=="function"?om(e):(e instanceof IDBTransaction&&rm(e),zs(e,em())?new Proxy(e,Ds):e)}function En(e){if(e instanceof IDBRequest)return nm(e);if(Dl.has(e))return Dl.get(e);const t=im(e);return t!==e&&(Dl.set(e,t),Xi.set(t,e)),t}const Ts=e=>Xi.get(e);function lm(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const l=indexedDB.open(e,t),s=En(l);return r&&l.addEventListener("upgradeneeded",a=>{r(En(l.result),a.oldVersion,a.newVersion,En(l.transaction),a)}),n&&l.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),s.then(a=>{i&&a.addEventListener("close",()=>i()),o&&a.addEventListener("versionchange",c=>o(c.oldVersion,c.newVersion,c))}).catch(()=>{}),s}const sm=["get","getKey","getAll","getAllKeys","count"],am=["put","add","delete","clear"],Tl=new Map;function Bu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Tl.get(t))return Tl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=am.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||sm.includes(n)))return;const i=async function(l,...s){const a=this.transaction(l,o?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(s.shift())),(await Promise.all([c[n](...s),o&&a.done]))[0]};return Tl.set(t,i),i}pf(e=>({...e,get:(t,n,r)=>Bu(t,n)||e.get(t,n,r),has:(t,n)=>!!Bu(t,n)||e.has(t,n)}));const um=["continue","continuePrimaryKey","advance"],Uu={},Ls=new WeakMap,hf=new WeakMap,cm={get(e,t){if(!um.includes(t))return e[t];let n=Uu[t];return n||(n=Uu[t]=function(...r){Ls.set(this,hf.get(this)[t](...r))}),n}};async function*dm(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const n=new Proxy(t,cm);for(hf.set(n,t),Xi.set(n,Ts(t));t;)yield n,t=await(Ls.get(n)||t.continue()),Ls.delete(n)}function Ku(e,t){return t===Symbol.asyncIterator&&zs(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&zs(e,[IDBIndex,IDBObjectStore])}pf(e=>({...e,get(t,n,r){return Ku(t,n)?dm:e.get(t,n,r)},has(t,n){return Ku(t,n)||e.has(t,n)}}));const fm="nachumin-diary",pm=1,zi="kv",hm="line-diary-entries-v1",Ot="rooms-v1",Me=e=>`room-data-v1:${e}`,mm=e=>`trash-v1:${e}:${Date.now()}`,ri="declaration-v1",ao="marks-v1",gm=["・","❤︎","🩷","💛","🩵","💜","✨","✔︎"],zn=e=>`donelog-v1:${e}`,_n=e=>`habits-v1:${e}`,_i=e=>`habitlog-v1:${e}`,Di=e=>`habitseed-v1:${e}`,Ll="backup-v1",ye="diary-main",mf=lm(fm,pm,{upgrade(e){e.objectStoreNames.contains(zi)||e.createObjectStore(zi)}});async function V(e){return(await mf).get(zi,e)}async function Q(e,t){return(await mf).put(zi,t,e)}async function xm(){try{navigator.storage&&navigator.storage.persist&&await navigator.storage.persist()}catch{}}async function ym(){const e=await V(Ot);if(e)return e;let t=await V(hm);if(typeof t=="string")try{t=JSON.parse(t)}catch{t=null}const n=t&&typeof t=="object"?t:{};await Q(Me(ye),n);const r=Object.keys(n).sort(),o=r[r.length-1],i=[{id:ye,type:"diary",name:"日記",emoji:"💗",createdAt:Date.now(),lastAt:o?Date.now():0,preview:o?n[o].text.split(`
`)[0].slice(0,40):""}];return await Q(Ot,i),i}const vm=5,wm=vm*60*60*1e3,gf=()=>new Date(Date.now()-wm),Re=e=>String(e).padStart(2,"0"),gt=e=>`${e.getFullYear()}-${Re(e.getMonth()+1)}-${Re(e.getDate())}`,ve=e=>e.split("-").join("/"),Oe=e=>{const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},Ps=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],km=["S","M","T","W","T","F","S"],Ms=e=>`${ve(e)} ${Ps[Oe(e).getDay()]}`,Ko=(e,t,n)=>1+(8-new Date(e,t-1,1).getDay())%7+(n-1)*7,bm=e=>Math.floor(20.8431+.242194*(e-1980)-Math.floor((e-1980)/4)),Sm=e=>Math.floor(23.2488+.242194*(e-1980)-Math.floor((e-1980)/4)),Pl={};function jm(e){if(Pl[e])return Pl[e];const t={},n=(r,o,i)=>{t[`${e}-${Re(r)}-${Re(o)}`]=i};n(1,1,"元日"),n(1,Ko(e,1,2),"成人の日"),n(2,11,"建国記念の日"),n(2,23,"天皇誕生日"),n(3,bm(e),"春分の日"),n(4,29,"昭和の日"),n(5,3,"憲法記念日"),n(5,4,"みどりの日"),n(5,5,"こどもの日"),n(7,Ko(e,7,3),"海の日"),n(8,11,"山の日"),n(9,Ko(e,9,3),"敬老の日"),n(9,Sm(e),"秋分の日"),n(10,Ko(e,10,2),"スポーツの日"),n(11,3,"文化の日"),n(11,23,"勤労感謝の日");for(const r of Object.keys(t)){const o=Oe(r),i=new Date(o);i.setDate(i.getDate()+1);const l=new Date(o);l.setDate(l.getDate()+2),t[gt(l)]&&!t[gt(i)]&&i.getDay()!==0&&(t[gt(i)]="国民の休日")}for(const r of Object.keys({...t})){if(Oe(r).getDay()!==0)continue;const o=Oe(r);do o.setDate(o.getDate()+1);while(t[gt(o)]);t[gt(o)]="振替休日"}return Pl[e]=t,t}const Nm=e=>!!jm(Number(e.slice(0,4)))[e],Ti=e=>{if(Nm(e))return"sun";const t=Oe(e).getDay();return t===0?"sun":t===6?"sat":""},ng=e=>"¥"+Math.round(Number(e)||0).toLocaleString("ja-JP"),rg=e=>e.slice(0,7),og=(e,t)=>{const[n,r]=e.split("-");return(t&&Number(n)===t?"":`${n}年`)+`${Number(r)}月`},Je=()=>gt(gf()),Hu=()=>{const e=gf();return e.setDate(e.getDate()-1),gt(e)},xf=()=>{const e=new Date;return`${e.getHours()}:${Re(e.getMinutes())}`},yf=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Cm=e=>String(e||"").replace(/[\/\\:*?"<>| -]/g,"_").replace(/\s+/g," ").trim()||"room";async function Wu(e){try{return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.top="0",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}const Ae=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36),Em=e=>Object.keys(e).sort().map(t=>`🩷${Ms(t)}🩷 ${e[t].time}
${e[t].text}`).join(`

──────────

`),zm=e=>{const t={},n=e.split(/\n*─{3,}\n*/);for(const r of n){const o=r.trim();if(!o)continue;const i=o.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*(?:[（(]?(?:[A-Za-z]{3}|[日月火水木金土])[)）]?)?\s*🩷?\s*(\d{1,2}:\d{2})?\s*\n?([\s\S]*)$/u);if(!i)continue;const l=`${i[1]}-${Re(Number(i[2]))}-${Re(Number(i[3]))}`,s=i[5].trim();s&&(t[l]={text:s,time:i[4]||"0:00"})}return t},ig=(e,t)=>{const n=[];let r="";for(const o of e)o.dateKey!==r&&(r=o.dateKey,n.length&&n.push(""),n.push(`🩷${ve(r)}🩷`)),n.push(`${o.time?o.time+" ":""}${t(o.memberId)}「${o.text}」`);return n.join(`
`)},lg=e=>{const t=[];let n=Je(),r=null;const o=()=>{if(!r)return;let i=r.lines.join(`
`).trim();i.endsWith("」")&&(i=i.slice(0,-1)),i&&t.push({dateKey:r.dateKey,name:r.name,time:r.time,text:i}),r=null};for(const i of e.split(`
`)){const l=i.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(l){o(),n=`${l[1]}-${Re(Number(l[2]))}-${Re(Number(l[3]))}`;continue}if(r)r.lines.push(i);else{const a=i.match(/^(?:(\d{1,2}:\d{2})\s+)?(.+?)「([\s\S]*)$/u);if(!a)continue;r={dateKey:n,name:a[2].trim(),time:a[1]||"",lines:[a[3]]}}const s=r.lines[r.lines.length-1].trimEnd();s.endsWith("」")&&(r.lines[r.lines.length-1]=s,o())}return o(),t},_m=[{key:"morning",label:"朝",emoji:"🌅"},{key:"noon",label:"昼",emoji:"☀️"},{key:"night",label:"夜",emoji:"🌙"}],sg=()=>{const e=new Date().getHours();return e>=5&&e<11?"morning":e>=11&&e<17?"noon":"night"},ag=(e,t)=>{var i;const n=l=>{var s;return((s=t.find(a=>a.id===l))==null?void 0:s.name)||"？"},r={};for(const l of e)(r[i=l.dateKey]||(r[i]={morning:[],noon:[],night:[]}))[l.slot].push(l);const o=[];for(const l of Object.keys(r).sort()){const s=[];for(const a of _m){const c=r[l][a.key];if(!c.length)continue;const m=c.map(x=>n(x.memberId)+(x.memo&&x.memo.trim()?`(${x.memo.trim()})`:"")).join("・");s.push(`${a.emoji}${a.label}:${m}`)}s.length&&o.push(`🩷${ve(l)}🩷 ${s.join(" / ")}`)}return o.join(`
`)},ug=e=>{const t=[],n=r=>r.includes("朝")?"morning":r.includes("昼")?"noon":r.includes("夜")?"night":null;for(const r of e.split(`
`)){const o=r.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(.*)$/u);if(!o)continue;const i=`${o[1]}-${Re(Number(o[2]))}-${Re(Number(o[3]))}`,l=o[4];if(l.trim())for(const s of l.split("/")){const a=s.indexOf(":"),c=s.indexOf("："),m=a===-1?c:c===-1?a:Math.min(a,c);if(m===-1)continue;const x=n(s.slice(0,m));if(!x)continue;const f=s.slice(m+1);for(const w of f.split("・")){const b=w.trim().match(/^(.+?)(?:[(（]([\s\S]*)[)）])?$/u);if(!b)continue;const S=b[1].trim();S&&t.push({dateKey:i,slot:x,name:S,memo:(b[2]||"").trim()})}}}return t},cg=e=>{var n;const t={};for(const r of e)(t[n=r.dateKey]||(t[n]={morning:[],noon:[],night:[]}))[r.slot].push(r);return t},dg=(e,t)=>{let n=t;for(const l of e)l.dateKey<n&&(n=l.dateKey);Oe(t);const r=Oe(t);r.setDate(r.getDate()-34);const o=Oe(n)<r?Oe(n):r,i=[];for(let l=new Date(o);gt(l)<=t;l.setDate(l.getDate()+1))i.push(gt(l));return i},fg=e=>{const t=[];for(const n of String(e||"").split(`
`)){let r=n.trim();r&&(/^🩷?\s*\d{4}[/-]\d{1,2}[/-]\d{1,2}\s*🩷?\s*$/u.test(r)||(r=r.replace(/^[★☆☐☑✓□■●○・\-*+•‣▪️\s]+/u,"").trim(),r&&t.push(r)))}return t},pg=e=>{const t=[];let n=Je();for(const r of e.split(`
`)){const o=r.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);if(o){n=`${o[1]}-${Re(Number(o[2]))}-${Re(Number(o[3]))}`;continue}const i=r.match(/^\s*(★\s*)?([☑☐✓])\s+(.+)$/u);if(!i)continue;const l=!!i[1],s=i[2]==="☑"||i[2]==="✓",a=i[3].trim();a&&t.push({dateKey:n,text:a,done:s,important:l})}return t},vf="🩷 できたこと",Dm=e=>{const t=(e||"").split(`
`),n=t.indexOf(vf);if(n===-1)return{text:e||"",items:[]};const r=[];let o=n+1;for(;o<t.length&&t[o].startsWith("☑ ");){const s=t[o].match(/^☑ (.*?)(?: \((\d{1,2}:\d{2})\))?$/u);s&&r.push({text:s[1],time:s[2]||""}),o++}let i=n;return i-1>=0&&t[i-1]===""&&(i-=1),t.splice(i,o-i),{text:t.join(`
`).replace(/\n{3,}/g,`

`).replace(/\s+$/,""),items:r}},Li="🎬 今日のコマ: ",Tm=e=>(e||"").split(`
`).filter(t=>!t.startsWith(Li)).join(`
`).replace(/^\n+/,""),Lm=(e,t)=>{const n=Tm(e).trim(),r=Li+t;return n?`${r}

${n}`:r},Pm={morning:"🌅",noon:"☀️",night:"🌙"},Ho="nachumin-diary-backup.json";function Mm(e){if(!e||typeof e!="object"||Array.isArray(e))return"バックアップの形式が読めませんでした 🥺";if(e.app!=="nachumin-diary")return"これは Nachumin Lifelog のバックアップファイルではないみたい 🥺";if(!Array.isArray(e.rooms))return"ルームの情報が入っていません。ファイルが壊れているかも 🥺";if(e.rooms.some(t=>!t||typeof t!="object"||!t.id||!t.type))return"ルームの形式が壊れています 🥺";if(e.data!=null&&(typeof e.data!="object"||Array.isArray(e.data)))return"ルームの中身の形式が壊れています 🥺";for(const t of["doneLogs","habits","habitLogs","habitSeeds"])if(e[t]!=null&&(typeof e[t]!="object"||Array.isArray(e[t])))return`${t} の形式が壊れています 🥺`;return null}function Om(e){const t={rooms:(e.rooms||[]).length,items:0},n=r=>r==="talk"?"messages":r==="todo"?"todos":r==="darelog"?"records":r==="expense"?"expenses":null;for(const r of e.rooms||[]){const o=e.data?e.data[r.id]:void 0;if(!o)continue;const i=n(r.type);t.items+=i?(o[i]||[]).length:Object.keys(o).length}return t}function Ml(e,t){var i;if(e.type==="talk"){const l=t&&t.messages||[],s=l[l.length-1];return{previewName:s?(c=>{var m;return((m=(e.members||[]).find(x=>x.id===c))==null?void 0:m.name)||""})(s.memberId):"",preview:typeof(s==null?void 0:s.text)=="string"?s.text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="todo"){const l=t&&t.todos||[],s=l[l.length-1];return{preview:typeof(s==null?void 0:s.text)=="string"?`${s.done?"☑":"☐"} ${s.text.split(`
`)[0]}`.slice(0,40):"",todoOpen:l.filter(a=>!a.done&&!a.deferred).length,lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="darelog"){const l=t&&t.records||[],s=l[l.length-1],a=c=>{var m;return((m=(e.members||[]).find(x=>x.id===c))==null?void 0:m.name)||""};return{preview:s?`${Pm[s.slot]||""} ${a(s.memberId)}`.trim():"",lastAt:e.lastAt||(s?Date.now():0)}}if(e.type==="expense"){const l=t&&t.expenses||[],s=l[l.length-1];return{preview:s?`${(c=>{var m;return((m=(e.categories||[]).find(x=>x.id===c))==null?void 0:m.name)||""})(s.categoryId)} ¥${(s.amount||0).toLocaleString("ja-JP")}`:"",lastAt:e.lastAt||(s?Date.now():0)}}const n=t&&typeof t=="object"?t:{},r=Object.keys(n).sort(),o=r[r.length-1];return{preview:typeof((i=n[o])==null?void 0:i.text)=="string"?n[o].text.split(`
`)[0].slice(0,40):"",lastAt:e.lastAt||(o?Date.now():0)}}async function Vu(){const e=await V(Ot)||[],t={};for(const a of e){const c=await V(Me(a.id));c!==void 0&&(t[a.id]=c)}const n=await V(ri)||null,r={},o={},i={},l={};for(const a of e){const c=await V(zn(a.id));c&&Object.keys(c).length&&(r[a.id]=c);const m=await V(_n(a.id));Array.isArray(m)&&m.length&&(o[a.id]=m);const x=await V(_i(a.id));x&&Object.keys(x).length&&(i[a.id]=x),await V(Di(a.id))&&(l[a.id]=!0)}const s=await V(ao)||null;return{app:"nachumin-diary",version:1,exportedAt:new Date().toISOString(),rooms:e,data:t,declaration:n,doneLogs:r,habits:o,habitLogs:i,habitSeeds:l,marks:s}}const Rm=e=>e.map((t,n)=>[t,n]).sort((t,n)=>t[0].dateKey<n[0].dateKey?-1:t[0].dateKey>n[0].dateKey?1:t[1]-n[1]).map(([t])=>t);async function Im(e){var s;if(!e||e.app!=="nachumin-diary"||!Array.isArray(e.rooms))throw new Error("invalid-backup");const t=await V(Ot)||[],n=new Map(t.map(a=>[a.id,{...a}]));let r=0,o=0;for(const a of e.rooms){const c=e.data?e.data[a.id]:void 0,m=a.type==="talk"?"messages":a.type==="todo"?"todos":a.type==="darelog"?"records":a.type==="expense"?"expenses":null,x=w=>m==="messages"?`${w.dateKey} ${w.memberId} ${w.text}`:m==="todos"?`${w.dateKey} ${w.text}`:m==="records"?`${w.dateKey} ${w.slot} ${w.memberId}`:w.id;if(!n.has(a.id)){c!==void 0&&await Q(Me(a.id),c),n.set(a.id,{...a,...Ml(a,c)}),r+=1,m?o+=((s=c==null?void 0:c[m])==null?void 0:s.length)||0:o+=c?Object.keys(c).length:0;continue}const f=n.get(a.id);if(m){const b=(await V(Me(a.id))||{})[m]||[],S=new Set(b.map(x));let P=b.slice();for(const h of(c==null?void 0:c[m])||[])S.has(x(h))||(S.add(x(h)),P.push(h),o+=1);m==="messages"&&(P=Rm(P));const g={[m]:P};await Q(Me(a.id),g);let p={...f};if(a.type==="talk"||a.type==="darelog"){const h=f.members||[],k=new Set(h.map(N=>N.id));p.members=h.concat((a.members||[]).filter(N=>!k.has(N.id)))}n.set(a.id,{...p,...Ml(p,g)})}else{const b={...await V(Me(a.id))||{}};for(const S of Object.keys(c||{}))b[S]||(b[S]=c[S],o+=1);await Q(Me(a.id),b),n.set(a.id,{...f,...Ml(f,b)})}}if(e.doneLogs)for(const[a,c]of Object.entries(e.doneLogs)){const m=zn(a),f={...await V(m)||{}};for(const[w,b]of Object.entries(c)){const S=(f[w]||[]).slice();for(const P of b)S.some(g=>g.text===P.text&&g.time===P.time)||S.push(P);f[w]=S}await Q(m,f)}const i={};if(e.habits)for(const[a,c]of Object.entries(e.habits)){if(!Array.isArray(c))continue;const m=await V(_n(a));if(m===void 0){await Q(_n(a),c);continue}const x=Array.isArray(m)?m:[],f=new Set(x.map(P=>P.id)),w=new Map(x.filter(P=>(P.name||"").trim()).map(P=>[P.name.trim(),P.id])),b=x.slice(),S={};for(const P of c){if(!P||!P.id)continue;if(f.has(P.id)){S[P.id]=P.id;continue}const g=(P.name||"").trim(),p=g?w.get(g):null;if(p){S[P.id]=p;continue}b.push(P),f.add(P.id),g&&w.set(g,P.id),S[P.id]=P.id}b.length!==x.length&&await Q(_n(a),b),i[a]=S}if(e.habitSeeds)for(const a of Object.keys(e.habitSeeds))e.habitSeeds[a]&&await Q(Di(a),!0);if(e.habitLogs)for(const[a,c]of Object.entries(e.habitLogs)){const m=i[a]||{},x=_i(a),w={...await V(x)||{}};for(const[b,S]of Object.entries(c)){const P=(S||[]).map(g=>m[g]||g);w[b]=[...new Set([...w[b]||[],...P])]}await Q(x,w)}if(Array.isArray(e.marks)&&e.marks.length){const a=await V(ao);(!Array.isArray(a)||!a.length)&&await Q(ao,e.marks)}const l=[...n.values()];return await Q(Ot,l),{addedRooms:r,addedItems:o,rooms:l}}const vn="M12 20.5s-7.5-5-7.5-10a4.2 4.2 0 0 1 7.5-2.6A4.2 4.2 0 0 1 19.5 10.5c0 5-7.5 10-7.5 10z",$m=`<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>
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
<path d='${vn}' transform='translate(96 60) scale(1.6)'/>
<path d='${vn}' transform='translate(24 96) scale(0.9) rotate(-12 12 12)'/>
<path d='${vn}' transform='translate(190 60) scale(0.8) rotate(14 12 12)'/>
<path d='${vn}' transform='translate(130 150) scale(1.1) rotate(-8 12 12)'/>
<path d='${vn}' transform='translate(30 208) scale(0.8) rotate(10 12 12)'/>
</g>
<g fill='#f8b1d6'>
<path d='${vn}' transform='translate(100 64) scale(1.1) '/>
<path d='${vn}' transform='translate(133 153) scale(0.7)'/>
</g>
</svg>`,Ol=`url("data:image/svg+xml,${encodeURIComponent($m)}")`,hg=["#ffffff","#fff5fa","#ffd9ec","#ffc4e1","#ff9fd0","#e0629f","#d4f0ff","#c9f5f2","#d9ffe3","#e8dcff","#f0f0f0","#2b2430"],mg=["#9C27B0","#E91E63","#FFEB3B","#2196F3","#4CAF50","#FF9800","#F44336","#00BCD4","#3F51B5","#8BC34A","#FF4081","#009688"],wf=["#ff6fb2","#c58cff","#6fb8ff","#5fd6b0","#ffcf5f","#ff9d6f","#7ed957","#ff8fa8"],Or=wf[0],Qu=e=>{const t=e||Or;return{background:`linear-gradient(163deg, #ffffff 0%, #fff6fb 40%, ${t}2e 100%)`,boxShadow:`0 6px 13px ${t}42, 0 2px 0 ${t}66, inset 0 1.5px 0 #ffffff`,borderColor:`${t}55`}},gg=[{key:"auto",label:"自動",value:null},{key:"white",label:"白",value:"#ffffff"},{key:"black",label:"黒",value:"#222028"},{key:"pink",label:"ピンク",value:"#ff2d87"}],Am=e=>{const t=String(e).replace("#","");if(t.length<6)return"#4a3140";const n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),o=parseInt(t.slice(4,6),16);return .299*n+.587*r+.114*o<140?"#fff5fa":"#4a3140"},xg=e=>e&&e.textColor?e.textColor:Am(e&&e.color),Yu=`
  * { box-sizing: border-box; }
  .app {
    height: 100vh; height: 100dvh;
    display: flex; flex-direction: column;
    font-family: "Hiragino Maru Gothic ProN", "Hiragino Kaku Gothic ProN",
      "Yu Gothic", sans-serif;
    background: ${Ol} #f6bedd; background-size: 240px 240px;
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
    background: ${Ol} #f6bedd; background-size: 240px 240px;
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
    background: ${Ol} #f6bedd; background-size: 240px 240px;
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
`;function kf(e,t,n){if(!e)return;const r=e.selectionStart??e.value.length,o=e.selectionEnd??e.value.length,i=e.value.slice(0,r)+t+e.value.slice(o);n(i),requestAnimationFrame(()=>{try{e.focus();const l=r+t.length;e.setSelectionRange(l,l)}catch{}})}function bf({marks:e,onInsert:t,onEdit:n}){return u.jsxs("div",{className:"markbar",children:[e.map((r,o)=>u.jsx("button",{className:"markchip",onMouseDown:i=>i.preventDefault(),onClick:()=>t(r),children:r},o)),u.jsx("button",{className:"markchip mark-edit",onMouseDown:r=>r.preventDefault(),onClick:n,"aria-label":"マークを編集",children:"⚙︎"})]})}function Sf(e=!0){const[t,n]=z.useState(0);return z.useEffect(()=>{if(!e||!window.visualViewport){n(0);return}const r=window.visualViewport,o=()=>n(Math.max(0,window.innerHeight-r.height-r.offsetTop));return o(),r.addEventListener("resize",o),r.addEventListener("scroll",o),()=>{r.removeEventListener("resize",o),r.removeEventListener("scroll",o)}},[e]),t}function Fm({initial:e,appendNewline:t,marks:n,onEditMarks:r,onSave:o,onCancel:i,onDelete:l,placeholder:s,bottomToolbar:a}){const[c,m]=z.useState(t?e?e+`
`:"":e||""),x=Sf(!!a),f=z.useRef(null),w=()=>{const g=f.current;g&&(g.style.height="auto",g.style.height=Math.min(g.scrollHeight,Math.round(window.innerHeight*.42))+"px")};z.useEffect(()=>{const g=f.current;if(!g)return;g.focus(),w();const p=g.value.length;g.setSelectionRange(p,p),g.scrollTop=g.scrollHeight},[]);const b=g=>kf(f.current,g+" ",p=>{m(p),requestAnimationFrame(w)}),S=n?u.jsx(bf,{marks:n,onInsert:b,onEdit:r}):null,P=u.jsxs("div",{className:"inline-btns",children:[l&&u.jsx("button",{className:"ie-del",onClick:l,children:"削除"}),u.jsx("button",{className:"ie-cancel",onClick:i,children:"キャンセル"}),u.jsx("button",{className:"ie-save",onClick:()=>o(c),"aria-label":"保存",children:"💌"})]});return u.jsxs("div",{className:"inline-edit",onClick:g=>g.stopPropagation(),children:[!a&&S,u.jsx("textarea",{ref:f,className:"inline-ta",value:c,placeholder:s,onChange:g=>{m(g.target.value),w()}}),a?u.jsxs("div",{className:"edit-toolbar",style:{bottom:x},onClick:g=>g.stopPropagation(),children:[S,P]}):P]})}function Bm(e,t=500){const n=z.useRef({}),r=l=>{if(typeof e!="function"||l.touches&&l.touches.length!==1)return;const s=l.touches?l.touches[0]:l;n.current.x=s.clientX,n.current.y=s.clientY,n.current.fired=!1,clearTimeout(n.current.timer),n.current.timer=setTimeout(()=>{n.current.fired=!0;try{navigator.vibrate&&navigator.vibrate(15)}catch{}e({x:n.current.x,y:n.current.y})},t)},o=l=>{const s=l.touches?l.touches[0]:l;(Math.abs(s.clientX-n.current.x)>10||Math.abs(s.clientY-n.current.y)>10)&&clearTimeout(n.current.timer)},i=()=>clearTimeout(n.current.timer);return{onTouchStart:r,onTouchMove:o,onTouchEnd:i,onTouchCancel:i,onContextMenu:l=>{typeof e=="function"&&(l.preventDefault(),e({x:l.clientX,y:l.clientY}))},onClickCapture:l=>{n.current.fired&&(l.stopPropagation(),l.preventDefault(),n.current.fired=!1)}}}function Xu({onLongPress:e,longPressMs:t,children:n,...r}){const o=Bm(e,t);return u.jsx("div",{...r,...o,children:n})}function Um({x:e,y:t,onCopy:n,onEdit:r,onDelete:o,onClose:i,top:l,extra:s}){const m=z.useRef(null),[x,f]=z.useState(null);return z.useLayoutEffect(()=>{const w=m.current;if(!w)return;const b=w.offsetHeight,S=window.innerWidth,P=window.innerHeight,g=Math.max(8,Math.min(e-168/2,S-168-8));let p=t+8;p+b>P-8&&(p=t-8-b),p<8&&(p=Math.max(8,P-b-8)),f({left:g,top:p})},[e,t,l,s,r,o]),u.jsx("div",{className:"ctx-overlay",onClick:i,onContextMenu:w=>w.preventDefault(),children:u.jsxs("div",{ref:m,className:"ctx-menu",style:{left:x?x.left:Math.max(8,Math.min(e-168/2,window.innerWidth-168-8)),top:x?x.top:t+8,width:168,maxHeight:`calc(100vh - ${8*2}px)`,overflowY:"auto",visibility:x?"visible":"hidden"},onClick:w=>w.stopPropagation(),children:[(l||[]).map((w,b)=>u.jsx("button",{className:"ctx-item ctx-top",onClick:w.onClick,children:w.label},b)),u.jsx("button",{className:"ctx-item",onClick:n,children:"📋 コピー"}),r&&u.jsx("button",{className:"ctx-item",onClick:r,children:"✏️ 編集"}),(s||[]).map((w,b)=>u.jsx("button",{className:"ctx-item",onClick:w.onClick,children:w.label},b)),o&&u.jsx("button",{className:"ctx-item ctx-del",onClick:o,children:"🗑 削除"})]})})}function jf({message:e,confirmLabel:t="削除する",onConfirm:n,onCancel:r}){return u.jsx("div",{className:"overlay confirm-over",onClick:r,children:u.jsxs("div",{className:"panel confirm-panel",onClick:o=>o.stopPropagation(),children:[u.jsx("div",{className:"confirm-msg",children:e}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-close",onClick:r,children:"キャンセル"}),u.jsx("button",{className:"p-del arm",onClick:n,children:t})]})]})})}function Km({habits:e,habitAch:t,onToggle:n,onClose:r,onManage:o}){const i=Je(),[l,s]=z.useState(i.slice(0,7)),[a,c]=l.split("-").map(Number),m=new Date(a,c,0).getDate(),x=i.slice(0,7),f=z.useMemo(()=>{const h=[];for(let k=1;k<=m;k++){const N=`${a}-${Re(c)}-${Re(k)}`;h.push({d:k,key:N,dow:new Date(a,c-1,k).getDay(),isToday:N===i,future:N>i})}return h},[a,c,m,i]),w=h=>{const k=new Date(a,c-1+h,1);s(`${k.getFullYear()}-${Re(k.getMonth()+1)}`)},b=(h,k)=>h.freq==="weekly"?(h.days||[]).includes(k):!0,S=h=>{let k=0,N=0;for(const D of f)b(h,D.dow)&&!D.future&&(N+=1),(t[D.key]||[]).includes(h.id)&&(k+=1);return{done:k,total:N}},P=e.filter(h=>h.freq!=="weekly"),g=e.filter(h=>h.freq==="weekly"),p=h=>{const{done:k,total:N}=S(h),D=N?k/N:0,M=k===0?0:D>=.8?3:D>=.5?2:D>=.25?1:0;return u.jsxs("div",{className:"hv-row",children:[u.jsxs("div",{className:"hv-name",children:[u.jsx("span",{className:"hv-emoji",children:h.emoji||"🩷"}),u.jsx("span",{className:"hv-nm",children:h.name})]}),u.jsx("div",{className:"hv-cells",children:f.map(T=>{const A=b(h,T.dow),$=(t[T.key]||[]).includes(h.id);return u.jsx("button",{className:"hv-cell"+($?" on":"")+(A||$?"":" off")+(T.isToday?" today":"")+(T.future?" future":""),disabled:!A&&!$||T.future,"aria-label":`${c}月${T.d}日 ${h.name}${$?" 達成ずみ":""}`,"aria-pressed":$,onClick:()=>n(T.key,h.id),children:$?"♥":""},T.key)})}),u.jsxs("div",{className:"hv-count lv"+M,children:[u.jsx("span",{className:"hv-n",children:k}),u.jsxs("span",{className:"hv-d",children:["/",N]})]})]},h.id)};return u.jsxs("div",{className:"hv-screen",children:[u.jsxs("div",{className:"hd",children:[u.jsx("button",{className:"back-btn","aria-label":"とじる",onClick:r,children:"‹"}),u.jsxs("div",{style:{minWidth:0},children:[u.jsx("div",{className:"hd-title",children:"🎯 習慣ビュー"}),u.jsx("div",{className:"hd-sub",children:"スタンプで振り返る"})]}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"習慣を編集",onClick:o,children:"⚙︎"})]}),u.jsxs("div",{className:"hv-monthbar",children:[u.jsx("button",{className:"hv-mbtn","aria-label":"前の月",onClick:()=>w(-1),children:"‹"}),u.jsxs("div",{className:"hv-month",children:[a,"年",c,"月"]}),u.jsx("button",{className:"hv-mbtn","aria-label":"次の月",onClick:()=>w(1),children:"›"}),l!==x&&u.jsx("button",{className:"hv-now",onClick:()=>s(x),children:"今月"})]}),e.length===0?u.jsxs("div",{className:"empty",children:["まだ習慣がありません。",`
`,"右上の⚙︎から追加してね💗"]}):u.jsx("div",{className:"hv-scroll",children:u.jsxs("div",{className:"hv-table",children:[u.jsxs("div",{className:"hv-row hv-head",children:[u.jsx("div",{className:"hv-name hv-corner",children:"習慣"}),u.jsx("div",{className:"hv-cells",children:f.map(h=>u.jsxs("div",{className:"hv-dcell"+(h.isToday?" today":"")+(Ti(h.key)?" "+Ti(h.key):""),children:[u.jsx("span",{className:"hv-dnum",children:h.d}),u.jsx("span",{className:"hv-dow",children:km[h.dow]})]},h.key))}),u.jsx("div",{className:"hv-count hv-corner",children:"今月"})]}),P.map(p),g.length>0&&u.jsx("div",{className:"hv-seprow",children:u.jsx("span",{className:"hv-seplabel",children:"毎週の習慣"})}),g.map(p)]})})]})}const Gu=/https?:\/\/[^\s　-〿぀-ヿ一-鿿＀-￯]+/g,Hm=/[.,;:、。）)\]】」』"'！？!?]+$/;function Wm(e,t=n=>n){if(!e)return e;const n=[];let r=0,o=0,i;for(Gu.lastIndex=0;i=Gu.exec(e);){let l=i[0];const s=(l.match(Hm)||[""])[0];s&&(l=l.slice(0,l.length-s.length)),l&&(i.index>r&&n.push(u.jsx(z.Fragment,{children:t(e.slice(r,i.index))},o++)),n.push(u.jsx("a",{className:"body-link",href:l,target:"_blank",rel:"noopener noreferrer",onClick:a=>a.stopPropagation(),children:l},o++)),r=i.index+l.length)}return n.length?(r<e.length&&n.push(u.jsx(z.Fragment,{children:t(e.slice(r))},o++)),n):t(e)}const Dr="🎬",Vm=[1,2,3,4,5,6,0];function Qm({room:e,onBack:t,onMeta:n,initialQuery:r,showToast:o,pinned:i,syncSignal:l,marks:s,onEditMarks:a}){const[c,m]=z.useState({}),[x,f]=z.useState({}),[w,b]=z.useState([]),[S,P]=z.useState({}),[g,p]=z.useState(!1),[h,k]=z.useState(null),[N,D]=z.useState(Je()),[M,T]=z.useState(""),[A,$]=z.useState(!!r),[W,he]=z.useState(r||""),[ge,be]=z.useState(!1),[Ut,rt]=z.useState(!1),[He,O]=z.useState(""),[F,B]=z.useState(!1),[G,ie]=z.useState(!1),[xe,Se]=z.useState(null),[je,q]=z.useState(null),[wt,Kt]=z.useState(!1),[go,kt]=z.useState(120),De=z.useRef(null),fn=z.useRef(null),pn=z.useRef(null),Ht=z.useRef(null),xo=Sf(!h);z.useEffect(()=>{(async()=>{try{let d=await V(Me(e.id));d=typeof d=="string"?JSON.parse(d):d||{};const v=await V(zn(e.id))||{};let j=!1;const L={},E={...v};for(const[J,Z]of Object.entries(d))if(Z&&typeof Z.text=="string"&&Z.text.includes(vf)){const{text:K,items:$e}=Dm(Z.text);if(L[J]={...Z,text:K},$e.length){const de=(E[J]||[]).slice();for(const ot of $e)de.some(yn=>yn.text===ot.text&&yn.time===ot.time)||de.push(ot);E[J]=de}j=!0}else L[J]=Z;j&&(await Q(Me(e.id),L),await Q(zn(e.id),E)),m(L),f(E);let R=await V(_n(e.id));const U=R===void 0;U&&(R=[{id:Ae(),name:"note投稿",emoji:"📝"},{id:Ae(),name:"キャラ投稿",emoji:"🎨"}]);let te=U;R=R.map(J=>J.freq&&J.days?J:(te=!0,{...J,freq:J.freq||"daily",days:J.days||[]})),await V(Di(e.id))||(await Q(Di(e.id),!0),R.some(J=>J.name==="週報を書く")||(R=[...R,{id:Ae(),name:"週報を書く",emoji:"📋",freq:"weekly",days:[0]}],te=!0)),te&&await Q(_n(e.id),R),b(Array.isArray(R)?R:[]),P(await V(_i(e.id))||{})}catch{}finally{p(!0)}})()},[e.id]),z.useEffect(()=>{l&&(async()=>{const d=await V(Me(e.id));d&&m(typeof d=="string"?JSON.parse(d):d),f(await V(zn(e.id))||{})})()},[l]),z.useEffect(()=>{if(!Ht.current||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>Ht.current&&kt(Ht.current.offsetHeight));return d.observe(Ht.current),()=>d.disconnect()},[h,A]);const hn=async d=>{m(d);try{await Q(Me(e.id),d);const v=Object.keys(d).sort(),j=v[v.length-1];n({preview:j?d[j].text.split(`
`)[0].slice(0,40):"",lastAt:Date.now()})}catch{o("保存に失敗しました。ストレージを確認してね")}};z.useEffect(()=>{!W&&!h&&De.current&&(De.current.scrollTop=De.current.scrollHeight)},[g,W,h]),z.useEffect(()=>{var v;if(!h)return;const d=(v=De.current)==null?void 0:v.querySelector(".editing-now");d&&setTimeout(()=>d.scrollIntoView({block:"start",behavior:"smooth"}),60)},[h]);const ee=()=>{const d=M.trim();if(!d)return;const v=c[N];hn({...c,[N]:v?{...v,text:v.text+`

`+d}:{text:d,time:xf()}}),T(""),fn.current&&(fn.current.style.height="auto"),setTimeout(()=>{var L;const j=(L=De.current)==null?void 0:L.querySelector(`[data-date="${N}"]`);j?j.scrollIntoView({block:"end",behavior:"smooth"}):De.current&&(De.current.scrollTop=De.current.scrollHeight)},50)},yo=d=>{T(d.target.value);const v=d.target;v.style.height="auto",v.style.height=Math.min(v.scrollHeight,140)+"px"},Gi=d=>kf(fn.current,d+" ",v=>{T(v),requestAnimationFrame(()=>{const j=fn.current;j&&(j.style.height="auto",j.style.height=Math.min(j.scrollHeight,140)+"px")})}),pr=d=>{k(d),he(""),$(!1)},hr=(d,v)=>{const j=v.trim();if(!j){k(null);return}hn({...c,[d]:{...c[d],text:j}}),k(null)},bt=d=>{const v={...c};delete v[d],hn(v),k(null)},[mr,mn]=z.useState(null),gr=d=>mn({message:`🩷${ve(d)}🩷 の日記を削除しますか？`,onConfirm:()=>{bt(d),mn(null)}}),xr=(d,v)=>{const j=S[d]||[],L=j.includes(v)?j.filter(R=>R!==v):[...j,v],E={...S};L.length?E[d]=L:delete E[d],P(E),Q(_i(e.id),E).catch(()=>o("保存に失敗しました"))},gn=d=>{b(d),Q(_n(e.id),d).catch(()=>o("保存に失敗しました"))},In=()=>gn([...w,{id:Ae(),name:"",emoji:"🩷",freq:"daily",days:[]}]),_t=(d,v)=>gn(w.map(j=>j.id===d?{...j,...v}:j)),vo=(d,v)=>{if(v==="weekly"){const j=w.find(L=>L.id===d);_t(d,{freq:v,days:j&&j.days&&j.days.length?j.days:[Oe(Je()).getDay()]})}else _t(d,{freq:"daily"})},Ji=(d,v)=>{const j=w.find(E=>E.id===d),L=(j.days||[]).includes(v)?j.days.filter(E=>E!==v):[...j.days||[],v];_t(d,{days:L})},wo=(d,v)=>{const j=d+v;if(j<0||j>=w.length)return;const L=[...w];[L[d],L[j]]=[L[j],L[d]],gn(L)},Zi=d=>{const v=w.find(L=>L.id===d),j=Object.values(S).filter(L=>(L||[]).includes(d)).length;mn({message:`習慣「${((v==null?void 0:v.emoji)||"")+((v==null?void 0:v.name)||"")}」を削除しますか？`+(j?`
これまでの達成 ${j}日分 の記録も消えます。`:""),onConfirm:()=>{gn(w.filter(L=>L.id!==d)),mn(null)}})},ko=()=>{const d=w.filter(v=>v.name.trim()||v.emoji&&v.emoji.trim());d.length!==w.length&&gn(d),B(!1)},yr=()=>Em(c),qi=async()=>{try{await navigator.clipboard.writeText(yr()),Kt(!0)}catch{try{pn.current.focus(),pn.current.select(),document.execCommand("copy"),Kt(!0)}catch{o("コピーできませんでした。全選択して手動でコピーしてね")}}setTimeout(()=>Kt(!1),2e3)},vr=()=>{try{const d=new Blob([yr()],{type:"text/plain;charset=utf-8"}),v=URL.createObjectURL(d),j=document.createElement("a");j.href=v,j.download=`nachumin-diary-${Cm(e.name)}.txt`,document.body.appendChild(j),j.click(),j.remove(),setTimeout(()=>URL.revokeObjectURL(v),3e3)}catch{o("ダウンロードできない環境みたい。コピーを使ってね")}},bo=()=>{const d=zm(He),v=Object.keys(d);if(v.length===0){o("読み込める日記が見つかりませんでした 🥺");return}let j=0,L=0;const E={...c};for(const R of v)E[R]?L+=1:(E[R]=d[R],j+=1);hn(E),rt(!1),O(""),o(`${j}件の日記を復元したよ💗`+(L?`（${L}件はもうあるのでスキップ）`:""))},wr=d=>W?d.split(new RegExp(`(${yf(W)})`,"gi")).map((j,L)=>j.toLowerCase()===W.toLowerCase()?u.jsx("mark",{className:"hl",children:j},L):j):d,So=d=>Wm(d,wr),dt=z.useMemo(()=>{var R;const d=(s||[]).filter(Boolean),v=[...d,Dr],j=[...d].sort((U,te)=>te.length-U.length),L={},E={};for(const U of v)L[U]=0,E[U]=[];for(const U of Object.keys(c).sort().reverse()){const te=(((R=c[U])==null?void 0:R.text)||"").split(`
`).reverse();for(const ce of te){if(!ce.trim())continue;const J=ce.trim();if(J.startsWith(Li)){const de=J.slice(Li.length).trim();de&&(E[Dr].push({dateKey:U,text:de}),L[Dr]+=1);continue}let Z=ce.trim();const K=[];let $e=!0;for(;$e;){$e=!1;for(const de of j)if(Z.startsWith(de)){K.includes(de)||K.push(de),Z=Z.slice(de.length).trimStart(),$e=!0;break}}if(!(!K.length||!Z))for(const de of K)E[de]&&(E[de].push({dateKey:U,text:Z}),L[de]+=1)}}return{counts:L,byMark:E}},[c,s]),St=[...(s||[]).filter(Boolean),Dr],kr=()=>{q(St.find(d=>dt.counts[d]>0)||St[0]||null)},el=d=>{q(null),he(""),$(!1),setTimeout(()=>{var j;const v=(j=De.current)==null?void 0:j.querySelector(`[data-date="${d}"]`);v&&v.scrollIntoView({block:"center",behavior:"smooth"})},90)},tl=async()=>{const d=dt.byMark[je]||[];if(!d.length)return;const v=[];let j="";for(const E of d)E.dateKey!==j&&(j=E.dateKey,v.length&&v.push(""),v.push(`🩷${Ms(j)}🩷`)),v.push(E.text);const L=await Wu(v.join(`
`));o(L?"コピーしました🩷":"コピーできませんでした。手動でコピーしてね")},nl=d=>{const v=["🩷 できたこと"];for(const E of x[d]||[])v.push(`☑ ${E.text}${E.time?` (${E.time})`:""}`);const j=S[d]||[],L=w.filter(E=>j.includes(E.id)).map(E=>`${E.emoji||""}${E.name}`);return L.length&&v.push("習慣: "+L.join(" ")),v.join(`
`)},rl=async d=>{const v=await Wu(d);o(v?"コピーしました🩷":"コピーできませんでした。手動でコピーしてね"),Se(null)},jo=W.toLowerCase(),xn=Je(),No=new Set([...Object.keys(c),...Object.keys(x),...Object.keys(S)]);w.length&&No.add(xn);let Dt=[...No].sort();W&&(Dt=Dt.filter(d=>{const v=c[d]&&(c[d].text+ve(d)).toLowerCase().includes(jo),j=(x[d]||[]).some(L=>L.text.toLowerCase().includes(jo));return v||j}));const y=ve(N).slice(5),C=(d,v)=>u.jsx("button",{className:"chip"+(N===v?" chip-on":""),onClick:()=>D(v),children:d},d);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"hd",children:[u.jsx("button",{className:"back-btn","aria-label":"もどる",onClick:t,children:"‹"}),u.jsx("span",{style:{fontSize:20},children:e.emoji}),u.jsxs("div",{children:[u.jsx("div",{className:"hd-title",children:e.name}),u.jsx("div",{className:"hd-sub",children:"Nachumin Lifelog"})]}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"マークで集める",onClick:kr,children:"🔖"}),u.jsx("button",{className:"icon-btn","aria-label":"習慣",onClick:()=>B(!0),children:"🎯"}),u.jsx("button",{className:"icon-btn","aria-label":"テキスト書き出し",onClick:()=>be(!0),children:"📤"}),u.jsx("button",{className:"icon-btn","aria-label":"テキストから復元",onClick:()=>rt(!0),children:"📥"}),u.jsx("button",{className:"icon-btn","aria-label":"検索",onClick:()=>{$(!A),he("")},children:A?"✕":"🔍"})]}),i,A&&u.jsx("div",{className:"search-row",children:u.jsx("input",{autoFocus:!0,placeholder:"日記を検索（ことば・日付）",value:W,onChange:d=>he(d.target.value)})}),u.jsxs("div",{className:"chat",ref:De,style:{paddingBottom:h?210:go+12},children:[g&&Dt.length===0&&u.jsx("div",{className:"empty",children:W?"みつかりませんでした 🥺":`まだ日記がありません。
下から今日のことを書いてみよう💗`}),Dt.map(d=>{const v=h===d,j=!!c[d],L=x[d]||[],E=d===xn,R=S[d]||[],U=Oe(d).getDay(),te=new Set,ce=w.filter(K=>{if(K.freq!=="weekly")return!0;const $e=K.days||[];if(!$e.length)return!1;if($e.includes(U))return!0;if((S[d]||[]).includes(K.id))return te.add(K.id),!0;let de=null;for(let ot=1;ot<=6;ot++){const yn=Oe(d);if(yn.setDate(yn.getDate()-ot),$e.includes(yn.getDay())){de=yn;break}}if(!de)return!1;for(const ot=new Date(de);gt(ot)<d;ot.setDate(ot.getDate()+1))if((S[gt(ot)]||[]).includes(K.id))return!1;return te.add(K.id),!0}),J=ce.length>0&&(E||j||R.length>0),Z=L.length>0||J;return u.jsxs(z.Fragment,{children:[j&&u.jsxs("div",{className:"row","data-date":d,children:[u.jsx("div",{className:"time",children:c[d].time}),u.jsxs(Xu,{className:"bubble"+(v?" editing-now":""),onClick:v?void 0:()=>pr(d),onLongPress:v?void 0:K=>Se({type:"diary",k:d,x:K.x,y:K.y}),role:"button",tabIndex:0,onKeyDown:K=>!v&&K.key==="Enter"&&pr(d),children:[u.jsx("span",{className:"spark",children:"✨"}),u.jsxs("div",{className:"d-head",children:["🩷",u.jsxs("span",{className:"lnk"+(Ti(d)?" wd-"+Ti(d):""),children:[ve(d)," ",Ps[Oe(d).getDay()]]}),"🩷"]}),v?u.jsx(Fm,{initial:c[d].text,appendNewline:!0,marks:s,onEditMarks:a,bottomToolbar:!0,onSave:K=>hr(d,K),onCancel:()=>k(null),onDelete:()=>gr(d),placeholder:"内容を書きなおしてね"}):u.jsx("div",{className:"body",children:So(c[d].text)})]})]}),Z&&u.jsx("div",{className:"done-row",style:j?void 0:{marginTop:0},children:u.jsxs(Xu,{className:"done-bubble",onLongPress:K=>Se({type:"done",k:d,x:K.x,y:K.y}),children:[u.jsxs("div",{className:"done-head",children:[u.jsx("span",{children:"🩷 できたこと"}),J&&u.jsx("button",{className:"hv-open","aria-label":"習慣ビューをひらく",onClick:K=>{K.stopPropagation(),ie(!0)},children:"🎯 習慣ビュー"})]}),L.map((K,$e)=>u.jsxs("div",{className:"done-line",children:["☑ ",So(K.text),K.time?u.jsxs("span",{className:"done-time",children:[" (",K.time,")"]}):null]},$e)),J&&u.jsx("div",{className:"habits-row"+(L.length?" has-sep":""),children:ce.map(K=>{const $e=R.includes(K.id),de=te.has(K.id);return u.jsxs("button",{className:"habit-chip"+($e?" on":"")+(de?" carry":""),onClick:()=>xr(d,K.id),children:[de?"⏳ ":"",K.emoji?K.emoji+" ":"",K.name,$e?" 🩷":""]},K.id)})})]})})]},d)})]}),!h&&u.jsxs("div",{className:"bar bar-fixed",ref:Ht,style:{bottom:xo},children:[u.jsxs("div",{className:"chips",children:[C("今日",xn),C("昨日",Hu()),u.jsxs("button",{className:"chip chip-date",children:["📅 ",N===xn||N===Hu()?"日付をえらぶ":y,u.jsx("input",{type:"date",value:N,onChange:d=>d.target.value&&D(d.target.value)})]}),c[N]&&u.jsx("span",{className:"exists-note",children:"この日はもうあるので追記されます"})]}),s&&s.length>0&&u.jsx(bf,{marks:s,onInsert:Gi,onEdit:a}),u.jsxs("div",{className:"in-row",children:[u.jsx("textarea",{ref:fn,className:"ta",rows:1,placeholder:N===xn?"今日あったことを書く…":`${y} に追記…`,value:M,onChange:yo}),u.jsx("button",{className:"send","aria-label":"送信",disabled:!M.trim(),onClick:ee,children:"↑"})]})]}),xe&&u.jsx(Um,{x:xe.x,y:xe.y,onClose:()=>Se(null),onCopy:()=>{var d;return rl(`🩷${Ms(xe.k)}🩷
`+(xe.type==="diary"?((d=c[xe.k])==null?void 0:d.text)||"":nl(xe.k)))},onEdit:xe.type==="diary"?()=>{Se(null),pr(xe.k)}:void 0,onDelete:xe.type==="diary"?()=>{Se(null),gr(xe.k)}:void 0}),mr&&u.jsx(jf,{message:mr.message,onConfirm:mr.onConfirm,onCancel:()=>mn(null)}),je!==null&&u.jsxs("div",{className:"mv-screen",children:[u.jsxs("div",{className:"hd",children:[u.jsx("button",{className:"back-btn","aria-label":"とじる",onClick:()=>q(null),children:"‹"}),u.jsxs("div",{style:{minWidth:0},children:[u.jsx("div",{className:"hd-title",children:"🔖 マークで集める"}),u.jsxs("div",{className:"hd-sub",children:[(dt.byMark[je]||[]).length,"件 ・ 全期間"]})]}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"ぜんぶコピー",onClick:tl,children:"📋"})]}),u.jsx("div",{className:"mv-marks",children:St.map(d=>u.jsxs("button",{className:"mv-chip"+(je===d?" on":""),onClick:()=>q(d),children:[u.jsx("span",{className:"mv-chip-m",children:d}),u.jsx("span",{className:"mv-chip-n",children:dt.counts[d]||0})]},d))}),u.jsx("div",{className:"mv-list",children:(dt.byMark[je]||[]).length===0?u.jsx("div",{className:"empty",children:je===Dr?`今日のコマはまだありません。
上のピンク留めバーから書くと集まります💗`:`「${je||""}」が行頭に付いた行はまだありません。
日記の入力欄でマークを押して書くと集まります💗`}):(dt.byMark[je]||[]).map((d,v)=>u.jsxs("button",{className:"mv-row",onClick:()=>el(d.dateKey),children:[u.jsx("span",{className:"mv-date",children:ve(d.dateKey).slice(5)}),u.jsx("span",{className:"mv-text",children:d.text})]},v))})]}),G&&u.jsx(Km,{habits:w,habitAch:S,onToggle:xr,onClose:()=>ie(!1),onManage:()=>B(!0)}),F&&u.jsx("div",{className:"overlay habit-over",onClick:ko,children:u.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[u.jsx("h3",{children:"🎯 習慣"}),u.jsx("p",{className:"panel-note",children:"毎日くり返すこと。日記の「できたこと」からワンタップで記録できます。"}),w.map((d,v)=>u.jsxs("div",{className:"mem-row",style:{flexWrap:"wrap"},children:[u.jsx("input",{className:"f-input",style:{width:54,textAlign:"center",flex:"0 0 auto"},maxLength:4,placeholder:"🩷",value:d.emoji||"",onChange:j=>_t(d.id,{emoji:j.target.value})}),u.jsx("input",{className:"f-input",style:{flex:1,minWidth:0},placeholder:"習慣の名前",value:d.name,onChange:j=>_t(d.id,{name:j.target.value})}),u.jsx("button",{className:"mem-btn",disabled:v===0,onClick:()=>wo(v,-1),"aria-label":"上へ",children:"↑"}),u.jsx("button",{className:"mem-btn",disabled:v===w.length-1,onClick:()=>wo(v,1),"aria-label":"下へ",children:"↓"}),u.jsx("button",{className:"mem-btn",onClick:()=>Zi(d.id),"aria-label":"削除",children:"🗑"}),u.jsxs("div",{className:"seg",style:{flexBasis:"100%",marginTop:4},children:[u.jsx("button",{className:d.freq!=="weekly"?"on":"",onClick:()=>vo(d.id,"daily"),children:"毎日"}),u.jsx("button",{className:d.freq==="weekly"?"on":"",onClick:()=>vo(d.id,"weekly"),children:"毎週"})]}),d.freq==="weekly"&&u.jsx("div",{className:"dow-row",children:Vm.map(j=>u.jsx("button",{className:"dow-chip"+((d.days||[]).includes(j)?" on":""),onClick:()=>Ji(d.id,j),children:Ps[j]},j))})]},d.id)),w.length===0&&u.jsx("p",{className:"panel-note",children:"まだ習慣がありません。追加してね💗"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:In,children:"＋ 習慣を追加"}),u.jsx("button",{className:"p-close",onClick:ko,children:"閉じる"})]})]})}),ge&&u.jsx("div",{className:"overlay",onClick:()=>be(!1),children:u.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[u.jsx("h3",{children:"📤 日記をテキストで書き出し"}),u.jsx("textarea",{ref:pn,readOnly:!0,value:yr()}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:qi,children:wt?"コピーしたよ💗":"ぜんぶコピー"}),u.jsx("button",{className:"p-dl",onClick:vr,children:".txtでDL"}),u.jsx("button",{className:"p-close",onClick:()=>be(!1),children:"閉じる"})]})]})}),Ut&&u.jsx("div",{className:"overlay",onClick:()=>rt(!1),children:u.jsxs("div",{className:"panel",onClick:d=>d.stopPropagation(),children:[u.jsx("h3",{children:"📥 テキストから復元"}),u.jsx("textarea",{placeholder:`エクスポートした .txt の内容をここに貼り付けてね

🩷2026/07/17🩷 9:30
今日あったこと…`,value:He,onChange:d=>O(d.target.value)}),u.jsx("p",{className:"panel-note",children:"※ すでにある日付の日記は上書きせずスキップされます"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",disabled:!He.trim(),onClick:bo,children:"読み込む"}),u.jsx("button",{className:"p-close",onClick:()=>{rt(!1),O("")},children:"閉じる"})]})]})})]})}function Ym({items:e,keyOf:t,onReorder:n,renderItem:r,onLongPress:o,longPress:i=320,footer:l}){const[s,a]=z.useState(null),[c,m]=z.useState(null),x=z.useRef(null),f=z.useRef({});f.current.items=e,f.current.keyOf=t,f.current.onReorder=n,f.current.onLongPress=o;const w=s||e,b=k=>{var N;return(N=x.current)==null?void 0:N.querySelector(`[data-dk="${CSS.escape(String(k))}"]`)},S=()=>{const k=x.current;if(!k||f.current.dragKey==null)return;const N=b(f.current.dragKey);if(!N)return;const D=k.getBoundingClientRect(),M=D.left+N.offsetLeft,T=D.top+N.offsetTop,A=f.current.pointerX-f.current.grabX-M,$=f.current.pointerY-f.current.grabY-T;N.style.transform=`translate(${A}px, ${$}px) scale(1.08)`},P=k=>{const N=b(k);if(!N)return;const D=N.getBoundingClientRect();f.current.dragKey=k,f.current.grabX=f.current.pointerX-D.left,f.current.grabY=f.current.pointerY-D.top,f.current.pickupX=f.current.pointerX,f.current.pickupY=f.current.pointerY,f.current.moved=!1,f.current.order=f.current.items.slice(),N.style.zIndex="10",a(f.current.order),m(k);try{navigator.vibrate&&navigator.vibrate(12)}catch{}requestAnimationFrame(S)},g=()=>{const k=x.current;if(!k||f.current.dragKey==null)return;const N=k.getBoundingClientRect(),D=f.current.pointerX-N.left,M=f.current.pointerY-N.top,T=[...k.querySelectorAll("[data-dk]")];let A=0,$=1/0;for(let ge=0;ge<T.length;ge++){const be=T[ge],Ut=be.offsetLeft+be.offsetWidth/2,rt=be.offsetTop+be.offsetHeight/2,He=(D-Ut)**2+(M-rt)**2;He<$&&($=He,A=ge)}const W=f.current.order,he=W.findIndex(ge=>f.current.keyOf(ge)===f.current.dragKey);if(he!==-1&&he!==A){const[ge]=W.splice(he,1);W.splice(A,0,ge),a(W.slice())}requestAnimationFrame(S)},p=()=>{if(clearTimeout(f.current.timer),f.current.dragKey!=null){const k=b(f.current.dragKey);if(k&&(k.style.transform="",k.style.zIndex=""),f.current.moved)f.current.onReorder(f.current.order.slice());else if(f.current.onLongPress){const N=f.current.items.find(D=>f.current.keyOf(D)===f.current.dragKey);f.current.onLongPress({item:N,x:f.current.pointerX,y:f.current.pointerY})}f.current.suppress=Date.now()+450}f.current.dragKey=null,m(null),a(null)};z.useEffect(()=>{const k=x.current;if(!k)return;const N=A=>{if(A.touches.length!==1)return;const $=A.target.closest("[data-dk]");if(!$||!k.contains($))return;const W=A.touches[0];f.current.startX=W.clientX,f.current.startY=W.clientY,f.current.pointerX=W.clientX,f.current.pointerY=W.clientY,f.current.moved=!1;const he=$.getAttribute("data-dk");clearTimeout(f.current.timer),f.current.timer=setTimeout(()=>{f.current.moved||P(he)},i)},D=A=>{const $=A.touches[0];if(f.current.pointerX=$.clientX,f.current.pointerY=$.clientY,f.current.dragKey==null){(Math.abs($.clientX-f.current.startX)>12||Math.abs($.clientY-f.current.startY)>12)&&(f.current.moved=!0,clearTimeout(f.current.timer));return}(Math.abs($.clientX-f.current.pickupX)>8||Math.abs($.clientY-f.current.pickupY)>8)&&(f.current.moved=!0),A.preventDefault(),g()},M=()=>{clearTimeout(f.current.timer),f.current.dragKey!=null&&p()},T=A=>A.preventDefault();return k.addEventListener("touchstart",N,{passive:!0}),k.addEventListener("touchmove",D,{passive:!1}),k.addEventListener("touchend",M,{passive:!0}),k.addEventListener("touchcancel",M,{passive:!0}),k.addEventListener("contextmenu",T),()=>{k.removeEventListener("touchstart",N),k.removeEventListener("touchmove",D),k.removeEventListener("touchend",M),k.removeEventListener("touchcancel",M),k.removeEventListener("contextmenu",T)}},[i]);const h=k=>{f.current.suppress&&Date.now()<f.current.suppress&&(k.stopPropagation(),k.preventDefault(),f.current.suppress=0)};return u.jsxs("div",{ref:x,className:"ig-grid",onClickCapture:h,children:[w.map(k=>{const N=t(k);return u.jsx("div",{"data-dk":N,className:"ig-cell"+(c===N?" dragging":""),children:r(k)},N)}),l]})}function Xm({onBack:e,children:t}){const[n,r]=z.useState(0),[o,i]=z.useState(!1),l=z.useRef(null),s=z.useRef(!1),a=f=>{if(f.touches.length!==1||document.querySelector(".overlay"))return;const w=f.touches[0];w.clientX>28||(l.current={x:w.clientX,y:w.clientY},s.current=!1)},c=f=>{if(!l.current)return;const w=f.touches[0],b=w.clientX-l.current.x,S=w.clientY-l.current.y;if(!s.current){if(Math.abs(b)<8&&Math.abs(S)<8)return;if(Math.abs(S)>Math.abs(b)){l.current=null;return}s.current=!0,i(!1)}r(Math.max(0,b))},m=()=>{if(!l.current)return;const f=Math.min(110,window.innerWidth*.3);i(!0),s.current&&n>f?(r(window.innerWidth),setTimeout(e,190)):r(0),l.current=null,s.current=!1},x=n>0?{transform:`translateX(${n}px)`,transition:o?"transform .19s ease-out":"none",boxShadow:"-10px 0 26px rgba(120,50,90,.18)"}:void 0;return u.jsx("div",{className:"swipe-wrap",style:x,onTouchStart:a,onTouchMove:c,onTouchEnd:m,children:t})}const Gm=z.lazy(()=>mo(()=>import("./TalkRoom-BqNYY_d8.js"),[],import.meta.url)),Jm=z.lazy(()=>mo(()=>import("./TodoRoom-VcodbkPa.js"),[],import.meta.url)),Zm=z.lazy(()=>mo(()=>import("./DarelogRoom-BwOz4CSH.js"),__vite__mapDeps([0,1]),import.meta.url)),qm=z.lazy(()=>mo(()=>import("./ExpenseRoom-BsuVYBtU.js"),[],import.meta.url)),eg=["💗","🩷","💛","🩵","💜","🤍","🖤","🌸","🌷","🎀","🌟","✨","⭐️","👑","🫶","🐰","🐻","🐱","🦄","🌙","🌊","🌿","🍓","🍒","🧸","📖","💬","✅","🌗","💰"];function tg(){const[e,t]=z.useState(null),[n,r]=z.useState({screen:"home"}),[o,i]=z.useState(!1),[l,s]=z.useState(""),[a,c]=z.useState(null),[m,x]=z.useState(null),[f,w]=z.useState(!1),[b,S]=z.useState(null),[P,g]=z.useState(""),[p,h]=z.useState(null),[k,N]=z.useState(""),[D,M]=z.useState(0),[T,A]=z.useState(null),[$,W]=z.useState(!1),he=z.useRef(null),ge=z.useRef(0),[be,Ut]=z.useState(gm),[rt,He]=z.useState(!1),[O,F]=z.useState(""),[B,G]=z.useState(!1),[ie,xe]=z.useState(""),[Se,je]=z.useState(""),[q,wt]=z.useState(null),[Kt,go]=z.useState(!1),[kt,De]=z.useState(null),[fn,pn]=z.useState(!1),[Ht,xo]=z.useState(""),hn=z.useRef(null),ee=(y,C=3e3)=>{xo(y),clearTimeout(hn.current),hn.current=setTimeout(()=>xo(""),C)};z.useEffect(()=>{(async()=>{try{const y=await ym();y.some(j=>j.id===ye)&&r({screen:"room",roomId:ye}),t(y);const[C,d,v]=await Promise.all([V(ri),V(ao),V(Ll)]);C&&C.dateKey===Je()&&g(C.text),Array.isArray(d)&&d.length&&Ut(d),wt(v||{})}catch{ee("データの読み込みに失敗しました"),t([])}})()},[]),z.useEffect(()=>{if(n.screen!=="home")return;let y=!0;return(async()=>{try{let C=await V(Me(ye));C=typeof C=="string"?JSON.parse(C):C||{};const d=C[Je()];if(!y)return;d&&typeof d.text=="string"&&d.text.trim()?A({written:!0,preview:d.text.split(`
`)[0].slice(0,34)}):A({written:!1})}catch{y&&A({written:!1})}})(),()=>{y=!1}},[n.screen,D]),z.useEffect(()=>{n.screen==="home"&&he.current&&(he.current.scrollTop=ge.current)},[n.screen]);const yo=y=>{t(C=>{let d=C;return C.find(v=>v.id===ye)||(d=[...C,{id:ye,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),d=d.map(v=>v.id===ye?{...v,...y!=null?{preview:y}:{},lastAt:Date.now()}:v),Q(Ot,d),d}),M(C=>C+1)},Gi=async({text:y,time:C,dateKey:d})=>{try{const v=zn(ye),j=await V(v)||{},L=(j[d]||[]).slice();L.some(E=>E.text===y&&E.time===C)||L.push({text:y,time:C}),await Q(v,{...j,[d]:L}),yo(`🩷 できたこと ☑ ${y}`.slice(0,40))}catch{ee("できたことの記録に失敗しました")}},pr=async({text:y,time:C,dateKey:d})=>{try{const v=zn(ye),j=await V(v)||{},L=(j[d]||[]).filter(R=>!(R.text===y&&R.time===C)),E={...j};L.length?E[d]=L:delete E[d],await Q(v,E),yo(null)}catch{}},hr=y=>{t(y),Q(Ot,y).catch(()=>ee("保存に失敗しました"))},bt=(y,C)=>{t(d=>{const v=d.map(j=>j.id===y?{...j,...C}:j);return Q(Ot,v).catch(()=>ee("保存に失敗しました")),v})},mr=async(y,C,d)=>{try{const v=(e||[]).find(Z=>Z.id===C);if(!v)return{ok:!1};const j=Me(C),L=await V(j)||{},E=Array.isArray(L.todos)?L.todos:[],R=(d||"").trim(),U=R?(v.places||[]).find(Z=>(Z.name||"").trim()===R):null,te={...y,placeId:U?U.id:null},ce=[...E,te];await Q(j,{...L,todos:ce});const J=ce.filter(Z=>!Z.done&&!Z.deferred).length;return bt(C,{preview:`${te.done?"☑":"☐"} ${(te.text||"").split(`
`)[0]}`.slice(0,40),todoOpen:J,lastAt:Date.now()}),{ok:!0,placeDropped:!!R&&!U,placeKept:!!U}}catch{return{ok:!1}}},mn=async y=>{const C=y.trim();if(!C)return;const d=Je();try{await Q(ri,{dateKey:d,text:C}),g(C);const v=Me(ye);let j=await V(v);j=j&&typeof j=="object"?j:{};const L=j[d],E=Lm(L?L.text:"",C);j={...j,[d]:{text:E,time:L?L.time:xf()}},await Q(v,j);const R=Object.keys(j).sort(),U=R[R.length-1],te=j[U].text.split(`
`)[0].slice(0,40);t(ce=>{let J=ce;return ce.find(Z=>Z.id===ye)||(J=[...ce,{id:ye,type:"diary",name:"日記",emoji:"💗",members:[],createdAt:Date.now(),lastAt:0,preview:""}]),J=J.map(Z=>Z.id===ye?{...Z,preview:te,lastAt:Date.now()}:Z),Q(Ot,J),J}),M(ce=>ce+1),ee("今日のコマをピン留めしたよ🩷")}catch{ee("宣言の保存に失敗しました")}},gr=y=>{Ut(y),Q(ao,y).catch(()=>ee("マークの保存に失敗しました"))},xr=()=>{const y=O.trim();if(y){if(be.includes(y)){F("");return}gr([...be,y]),F("")}},gn=y=>gr(be.filter(C=>C!==y));z.useEffect(()=>{!o||!e||(async()=>{const y={};for(const C of e)y[C.id]=await V(Me(C.id));c(y)})()},[o,e]);const In=e||[],_t=z.useMemo(()=>{if(!l||!a||!e)return null;const y=l.toLowerCase(),C=[];for(const d of In){const v=a[d.id],j=[];if(d.type==="diary"){const L=v&&typeof v=="object"?v:{};for(const E of Object.keys(L).sort())(L[E].text+ve(E)).toLowerCase().includes(y)&&j.push({snippet:L[E].text.split(`
`)[0],date:ve(E)})}else if(d.type==="todo"){const L=v&&Array.isArray(v.todos)?v.todos:[];for(const E of L)(E.text+ve(E.dateKey)).toLowerCase().includes(y)&&j.push({snippet:`${E.done?"☑":"☐"} ${E.text.split(`
`)[0]}`,date:ve(E.dateKey)})}else if(d.type==="darelog"){const L=v&&Array.isArray(v.records)?v.records:[],E=R=>{var U,te;return((te=(U=d.members)==null?void 0:U.find(ce=>ce.id===R))==null?void 0:te.name)||""};for(const R of L){const U=E(R.memberId);(U+(R.memo||"")+ve(R.dateKey)).toLowerCase().includes(y)&&j.push({snippet:`${U}${R.memo?`: ${R.memo}`:""}`,date:ve(R.dateKey)})}}else if(d.type==="expense"){const L=v&&Array.isArray(v.expenses)?v.expenses:[],E=R=>{var U,te;return((te=(U=d.categories)==null?void 0:U.find(ce=>ce.id===R))==null?void 0:te.name)||""};for(const R of L)(E(R.categoryId)+(R.memo||"")+String(R.amount)+ve(R.dateKey)).toLowerCase().includes(y)&&j.push({snippet:`${E(R.categoryId)} ¥${R.amount}${R.memo?" "+R.memo:""}`,date:ve(R.dateKey)})}else{const L=v&&Array.isArray(v.messages)?v.messages:[],E=R=>{var U,te;return((te=(U=d.members)==null?void 0:U.find(ce=>ce.id===R))==null?void 0:te.name)||""};for(const R of L)((R.text+ve(R.dateKey)).toLowerCase().includes(y)||E(R.memberId).toLowerCase().includes(y))&&j.push({snippet:`${E(R.memberId)||"？"}: ${R.text.split(`
`)[0]}`,date:ve(R.dateKey)})}j.length===0&&d.name.toLowerCase().includes(y)&&j.push({snippet:d.preview||"",date:""}),j.length&&C.push({room:d,hits:j})}return C},[l,a,In,e]),vo=y=>l?y.split(new RegExp(`(${yf(l)})`,"gi")).map((d,v)=>d.toLowerCase()===l.toLowerCase()?u.jsx("mark",{className:"hl",children:d},v):d):y,Ji=()=>{const y=m.name.trim();if(!y){ee("ルーム名を入れてね");return}const C={diary:"💗",todo:"✅",darelog:"🌗",expense:"💰",talk:"🩷"}[m.type]||"🩷",d=m.type==="darelog"?[{id:Ae(),name:"ヒカルくん",color:"#d4f0ff",icon:{type:"emoji",value:"🌊"},side:"left"},{id:Ae(),name:"柊くん",color:"#d9ffe3",icon:{type:"emoji",value:"🌿"},side:"left"},{id:Ae(),name:"ひかりちゃん",color:"#ffd9ec",icon:{type:"emoji",value:"🌸"},side:"right"}]:[],v=m.type==="expense"?[{id:Ae(),name:"AI費用",emoji:"🤖",color:"#2196F3"},{id:Ae(),name:"ピンクグッズ",emoji:"🎀",color:"#E91E63"},{id:Ae(),name:"ネイル",emoji:"💅",color:"#9C27B0"},{id:Ae(),name:"旅費交通費",emoji:"🚃",color:"#00A5B5",transit:!0}]:void 0,j={id:Ae(),type:m.type,name:y,emoji:m.emoji.trim()||C,theme:m.theme||Or,members:d,createdAt:Date.now(),lastAt:0,preview:"",...m.type==="todo"?{shopping:!!m.shopping}:{},...v?{categories:v,subscriptions:[],subsPosted:{},transitSeeded:!0,stations:[],fares:[],defaultFromId:null,roundTripDefault:!1,incomeSeeded:!0,incomeCategories:[{id:Ae(),name:"売上",emoji:"💰",color:"#2E9E5B"},{id:Ae(),name:"返金",emoji:"↩️",color:"#3BA7A0"},{id:Ae(),name:"その他",emoji:"✨",color:"#7FB800"}]}:{}};hr([...e,j]),x(null),r({screen:"room",roomId:j.id})},wo=()=>{const y=m.name.trim();if(!y){ee("ルーム名を入れてね");return}bt(m.roomId,{name:y,emoji:m.emoji.trim()||"💗",theme:m.theme||Or,hidden:!!m.hidden,...m.type==="todo"?{shopping:!!m.shopping}:{}}),x(null)},Zi=y=>{x({mode:"edit",roomId:y.id,name:y.name,emoji:y.emoji,type:y.type,shopping:!!y.shopping,theme:y.theme||Or,hidden:!!y.hidden}),w(!1)},ko=async y=>{try{const C=await V(Me(y));C&&await Q(mm(y),C),hr(e.filter(d=>d.id!==y)),x(null),S(null),ee("ルームを削除しました")}catch{ee("削除に失敗しました")}},yr=()=>{const y=e.find(C=>C.id===m.roomId);S({message:`ルーム「${(y==null?void 0:y.name)||""}」を削除しますか？
中の記録もすべて消えます。`,onConfirm:()=>ko(m.roomId)})},qi=async()=>{je(""),pn(!1);try{const y=await Vu();xe(JSON.stringify(y,null,2))}catch{xe("")}G(!0)},vr=async()=>{const y={...q||{},lastDateKey:Je(),lastAt:Date.now()};wt(y);try{await Q(Ll,y)}catch{}},bo=y=>{const C=new Blob([y],{type:"application/json;charset=utf-8"}),d=URL.createObjectURL(C),v=document.createElement("a");v.href=d,v.download=Ho,document.body.appendChild(v),v.click(),v.remove(),setTimeout(()=>URL.revokeObjectURL(d),3e3)},wr=async()=>{if(!Kt){go(!0);try{let y;try{y=JSON.stringify(await Vu(),null,2)}catch{ee("バックアップの作成に失敗しました 🥺");return}try{const C=new File([y],Ho,{type:"application/json"});if(navigator.canShare&&navigator.canShare({files:[C]})){await navigator.share({files:[C],title:Ho}),await vr(),ee("バックアップを保存したよ💗 同じファイルに置き換えできたかな？");return}}catch(C){if(C&&(C.name==="AbortError"||C.name==="NotAllowedError"))return}try{bo(y),await vr(),ee("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{ee("保存できない環境みたい。コピーを使ってね")}}finally{go(!1)}}},So=()=>{try{bo(ie),vr(),ee("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心")}catch{ee("保存できない環境みたい。コピーを使ってね")}},dt=Je(),St=(()=>{if(!(q!=null&&q.lastDateKey))return null;const y=Oe(dt)-Oe(q.lastDateKey);return Math.max(0,Math.round(y/864e5))})(),kr=St===null||St>=7,el=!!q&&q.lastDateKey!==dt&&q.dismissedDateKey!==dt,tl=async()=>{const y={...q||{},dismissedDateKey:dt};wt(y);try{await Q(Ll,y)}catch{}},nl=async()=>{try{await navigator.clipboard.writeText(ie),pn(!0),setTimeout(()=>pn(!1),2e3)}catch{ee("コピーできませんでした。全選択して手動でコピーしてね")}},rl=y=>{var v;const C=(v=y.target.files)==null?void 0:v[0];if(!C)return;const d=new FileReader;d.onload=()=>je(String(d.result||"")),d.onerror=()=>ee("ファイルを読めませんでした"),d.readAsText(C),y.target.value=""},jo=()=>{let y;try{y=JSON.parse(Se)}catch{ee("JSONとして読めませんでした。ファイルが壊れているかも 🥺",4e3);return}const C=Mm(y);if(C){ee(C,4500);return}De({obj:y,counts:Om(y),exportedAt:y.exportedAt||"",version:y.version})},xn=async()=>{const y=kt==null?void 0:kt.obj;if(y)try{const C=await Im(y);t(C.rooms),y.declaration&&y.declaration.dateKey===Je()&&!P&&(await Q(ri,y.declaration),g(y.declaration.text)),M(d=>d+1),De(null),G(!1),je(""),ee(`復元完了💗 ${C.addedRooms}ルーム / ${C.addedItems}件を追加`)}catch{De(null),ee("復元中にエラーが出ました。ファイルが壊れているかも 🥺",4e3)}};if(!e)return u.jsx("div",{className:"app",children:u.jsx("style",{children:Yu})});const No=u.jsxs("div",{className:"pin",onClick:()=>{N(P),h(P?"view":"edit")},role:"button",children:[u.jsx("span",{className:"pin-ic",children:P?"📌":"🩷"}),P?u.jsx("span",{className:"pin-txt",children:P}):u.jsx("span",{className:"pin-ph",children:"今日のコマをえらぶ🩷"})]});let Dt;if(n.screen==="room"){const y=e.find(C=>C.id===n.roomId);if(!y)Dt=null,setTimeout(()=>r({screen:"home"}),0);else{const C={room:y,onBack:()=>r({screen:"home"}),onMeta:v=>bt(y.id,v),initialQuery:n.q,showToast:ee,pinned:No},d=y.type==="diary"?u.jsx(Qm,{...C,syncSignal:D,marks:be,onEditMarks:()=>He(!0)},y.id):y.type==="todo"?u.jsx(Jm,{...C,onTodoComplete:Gi,onTodoUncomplete:pr,onRoomChange:v=>bt(y.id,v),todoRooms:e.filter(v=>v.type==="todo"&&v.id!==y.id),onMoveTodo:mr},y.id):y.type==="darelog"?u.jsx(Zm,{...C,onRoomChange:v=>bt(y.id,v)},y.id):y.type==="expense"?u.jsx(qm,{...C,onRoomChange:v=>bt(y.id,v)},y.id):u.jsx(Gm,{...C,onRoomChange:v=>bt(y.id,v)},y.id);Dt=u.jsx(Xm,{onBack:()=>r({screen:"home"}),children:u.jsx(z.Suspense,{fallback:u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"hd hd-loading"}),u.jsx("div",{className:"chat"})]}),children:d})},y.id)}}else Dt=u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"hd hd-home",children:[u.jsx("div",{className:"app-brand",children:u.jsx("div",{className:"app-title",children:"💖Nachumin Lifelog💖"})}),u.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},"aria-label":"バックアップ",onClick:qi,children:"💾"}),u.jsx("button",{className:"icon-btn","aria-label":"新しいルーム",onClick:()=>x({mode:"new",name:"",emoji:"",type:"talk"}),children:"➕"}),u.jsx("button",{className:"icon-btn","aria-label":"ぜんぶ検索",onClick:()=>{i(!o),s("")},children:o?"✕":"🔍"})]}),el&&u.jsxs("div",{className:"bk-banner"+(kr?" stale":""),children:[u.jsxs("button",{className:"bk-main",onClick:wr,disabled:Kt,children:[u.jsx("span",{className:"bk-ttl",children:"💾 今日のバックアップ🩷"}),u.jsx("span",{className:"bk-sub",children:St===null?"まだ一度も保存していません":kr?`最後の保存から ${St}日 たっています`:"タップで1ファイルに書き出し"})]}),u.jsx("button",{className:"bk-x","aria-label":"閉じる",onClick:tl,children:"✕"})]}),o&&u.jsx("div",{className:"search-row",children:u.jsx("input",{autoFocus:!0,placeholder:"ぜんぶのルームから検索（ことば・話者・日付）",value:l,onChange:y=>s(y.target.value)})}),_t?u.jsx("div",{className:"rooms",children:_t.length===0?u.jsx("div",{className:"empty",children:"みつかりませんでした 🥺"}):_t.map(({room:y,hits:C})=>u.jsxs("div",{className:"room-row",onClick:()=>r({screen:"room",roomId:y.id,q:l}),children:[u.jsx("div",{className:"r-ic",children:y.emoji}),u.jsxs("div",{className:"r-main",children:[u.jsx("div",{className:"r-name",children:y.name}),u.jsx("div",{className:"r-prev",children:vo(C[0].snippet)})]}),u.jsxs("div",{className:"r-side",children:[u.jsxs("span",{className:"r-badge",children:[C.length,"件"]}),C[0].date&&u.jsx("span",{className:"r-date",children:C[0].date})]})]},y.id))}):u.jsx("div",{className:"home-scroll",ref:he,onScroll:y=>{ge.current=y.target.scrollTop},children:(()=>{const y=e.find(E=>E.id===ye),C=In.filter(E=>E.id!==ye&&!E.hidden),d=In.filter(E=>E.id!==ye&&E.hidden),v=Oe(Je()),j=T?T.written?T.preview:`${v.getMonth()+1}/${v.getDate()}・きょうの分はまだ`:"…",L=E=>{const R=[...E];hr(e.map(U=>U.id===ye||U.hidden?U:R.shift()))};return u.jsxs(u.Fragment,{children:[y&&u.jsxs("button",{className:"diary-card",onClick:()=>r({screen:"room",roomId:y.id}),children:[u.jsx("span",{className:"dc-ic",children:y.emoji}),u.jsxs("span",{className:"dc-main",children:[u.jsx("span",{className:"dc-name",children:"DIARY"}),u.jsx("span",{className:"dc-sub",children:j})]}),u.jsx("span",{className:"dc-arw",children:"›"})]}),u.jsx(Ym,{items:C,keyOf:E=>E.id,onReorder:L,onLongPress:({item:E})=>{E&&Zi(E)},footer:u.jsx("div",{className:"ig-cell ig-add",children:u.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>x({mode:"new",name:"",emoji:"",type:"talk"}),onKeyDown:E=>E.key==="Enter"&&x({mode:"new",name:"",emoji:"",type:"talk"}),children:[u.jsx("span",{className:"ig-btn",children:"＋"}),u.jsx("span",{className:"ig-name",children:"つくる"})]})}),renderItem:E=>{const R=E.type==="todo"&&E.todoOpen>0?E.todoOpen:null;return u.jsxs("div",{className:"ig-tile",role:"button",tabIndex:0,onClick:()=>r({screen:"room",roomId:E.id}),onKeyDown:U=>U.key==="Enter"&&r({screen:"room",roomId:E.id}),children:[u.jsxs("span",{className:"ig-btn",style:Qu(E.theme),children:[E.emoji,R!=null&&u.jsx("span",{className:"ig-badge",children:R>99?"99+":R})]}),u.jsx("span",{className:"ig-name",children:E.name})]})}}),d.length>0&&u.jsx("button",{className:"hidden-entry",onClick:()=>W(!0),children:"🙈 非表示のルーム"}),$&&u.jsx("div",{className:"overlay",onClick:()=>W(!1),children:u.jsxs("div",{className:"panel",onClick:E=>E.stopPropagation(),children:[u.jsx("h3",{children:"🙈 非表示のルーム"}),u.jsx("p",{className:"panel-note",children:"一覧に出していないルームです。中の記録は消えていません。「戻す」でまた表示できます。"}),u.jsx("div",{className:"move-list",children:d.map(E=>u.jsxs("div",{className:"move-item as-row",children:[u.jsx("span",{className:"move-ic",children:E.emoji}),u.jsx("span",{className:"move-name",children:E.name}),u.jsx("button",{className:"unhide-btn",onClick:()=>bt(E.id,{hidden:!1}),children:"戻す"})]},E.id))}),u.jsx("div",{className:"panel-btns",children:u.jsx("button",{className:"p-close",onClick:()=>W(!1),children:"閉じる"})})]})})]})})()})]});return u.jsxs("div",{className:"app",children:[u.jsx("style",{children:Yu}),Dt,m&&u.jsx("div",{className:"overlay",onClick:()=>{x(null),w(!1)},children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:m.mode==="new"?"➕ 新しいルーム":"⚙️ ルーム設定"}),u.jsx("div",{className:"f-label",children:"ルーム名"}),u.jsx("input",{className:"f-input",autoFocus:m.mode==="new",placeholder:"ハートるんず",value:m.name,onChange:y=>x(C=>({...C,name:y.target.value}))}),u.jsx("div",{className:"f-label",children:"アイコン（タップで選ぶ）"}),u.jsx("div",{className:"emoji-picks",children:eg.map(y=>u.jsx("button",{className:"emoji-pick"+(m.emoji===y?" on":""),onClick:()=>x(C=>({...C,emoji:y})),children:y},y))}),u.jsx("input",{className:"f-input",style:{width:130,textAlign:"center",marginTop:4},maxLength:8,placeholder:"または自由入力",value:m.emoji,onChange:y=>x(C=>({...C,emoji:y.target.value}))}),u.jsx("div",{className:"f-label",children:"テーマカラー"}),u.jsx("div",{className:"theme-swatches",children:wf.map(y=>{const C=(m.theme||Or)===y;return u.jsx("button",{className:"theme-sw"+(C?" on":""),style:Qu(y),"aria-label":y,onClick:()=>x(d=>({...d,theme:y}))},y)})}),u.jsxs("div",{className:"f-label",children:["タイプ",m.mode==="edit"?"（変更できません）":""]}),u.jsxs("div",{className:"type-row",children:[u.jsxs("button",{className:"type-chip"+(m.type==="diary"?" on":""),disabled:m.mode==="edit",onClick:()=>x(y=>({...y,type:"diary"})),children:["📖 日記",u.jsx("small",{children:"1日=1吹き出し"})]}),u.jsxs("button",{className:"type-chip"+(m.type==="talk"?" on":""),disabled:m.mode==="edit",onClick:()=>x(y=>({...y,type:"talk"})),children:["💬 トーク",u.jsx("small",{children:"話者ごと"})]}),u.jsxs("button",{className:"type-chip"+(m.type==="todo"?" on":""),disabled:m.mode==="edit",onClick:()=>x(y=>({...y,type:"todo"})),children:["✅ TODO",u.jsx("small",{children:"やること"})]}),u.jsxs("button",{className:"type-chip"+(m.type==="darelog"?" on":""),disabled:m.mode==="edit",onClick:()=>x(y=>({...y,type:"darelog"})),children:["🌗 だれログ",u.jsx("small",{children:"朝昼夜の記録"})]}),u.jsxs("button",{className:"type-chip"+(m.type==="expense"?" on":""),disabled:m.mode==="edit",onClick:()=>x(y=>({...y,type:"expense"})),children:["💰 経費",u.jsx("small",{children:"支出を記録"})]})]}),m.mode==="edit"&&m.roomId!==ye&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"f-label",children:"一覧での表示"}),u.jsxs("button",{className:"shop-toggle"+(m.hidden?" on":""),onClick:()=>x(y=>({...y,hidden:!y.hidden})),children:[u.jsx("span",{className:"shop-box",children:m.hidden?"✓":""}),"🙈 一覧に表示しない（記録は消えません）"]})]}),m.type==="todo"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"f-label",children:"用途"}),u.jsxs("button",{className:"shop-toggle"+(m.shopping?" on":""),onClick:()=>x(y=>({...y,shopping:!y.shopping})),children:[u.jsx("span",{className:"shop-box",children:m.shopping?"✓":""}),"🛒 買い物リストとして使う（よく買うものクイック追加）"]})]}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:m.mode==="new"?Ji:wo,children:m.mode==="new"?"つくる":"保存"}),m.mode==="edit"&&u.jsx("button",{className:"p-del",onClick:yr,children:"削除"}),u.jsx("button",{className:"p-close",onClick:()=>{x(null),w(!1)},children:"閉じる"})]})]})}),B&&u.jsx("div",{className:"overlay",onClick:()=>G(!1),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"💾 まるごとバックアップ"}),u.jsx("p",{className:"panel-note",children:"全ルーム・全データ（日記 / TODO / だれログ / 経費 / 習慣 / 各種設定）を まるごと1ファイルに保存します。端末が変わっても元どおり復元できます。"}),u.jsxs("div",{className:"bk-last"+(kr?" stale":""),children:[u.jsx("span",{className:"bk-last-l",children:"最後にバックアップした日"}),u.jsx("span",{className:"bk-last-v",children:q!=null&&q.lastDateKey?`${ve(q.lastDateKey)}${St===0?"（今日）":`（${St}日前）`}`:"まだありません"})]}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:wr,disabled:Kt,children:"💾 1タップで書き出し"}),u.jsx("button",{className:"p-dl",onClick:So,children:"ダウンロード"}),u.jsx("button",{className:"p-dl",onClick:nl,children:fn?"コピーしたよ💗":"コピー"})]}),u.jsxs("p",{className:"panel-note",children:["ファイル名は毎回 ",u.jsx("b",{children:Ho})," で固定。iPhoneの共有シートから 「ファイルに保存」を選ぶと、前のファイルを置き換えて上書きできます。"]}),u.jsx("div",{className:"f-label",style:{marginTop:6},children:"復元する（バックアップから読み込み）"}),u.jsx("p",{className:"panel-note",children:"既存のデータは消さず、足りない分だけ追加します（安全マージ）"}),u.jsxs("label",{className:"upload-btn",style:{alignSelf:"flex-start"},children:["📂 バックアップファイルを選ぶ",u.jsx("input",{type:"file",accept:".json,application/json,text/plain",onChange:rl})]}),u.jsx("textarea",{placeholder:"または、コピーしたバックアップをここに貼り付け",value:Se,onChange:y=>je(y.target.value),style:{minHeight:120}}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",disabled:!Se.trim(),onClick:jo,children:"復元する"}),u.jsx("button",{className:"p-close",onClick:()=>{G(!1),je("")},children:"閉じる"})]})]})}),kt&&u.jsx("div",{className:"overlay bk-ask-over",onClick:()=>De(null),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"⚠️ 復元まえの確認"}),u.jsxs("div",{className:"bk-ask-box",children:[u.jsxs("div",{className:"bk-ask-row",children:[u.jsx("span",{children:"ルーム"}),u.jsx("b",{children:kt.counts.rooms})]}),u.jsxs("div",{className:"bk-ask-row",children:[u.jsx("span",{children:"記録の件数"}),u.jsx("b",{children:kt.counts.items})]}),kt.exportedAt&&u.jsxs("div",{className:"bk-ask-row",children:[u.jsx("span",{children:"書き出し日時"}),u.jsx("b",{children:new Date(kt.exportedAt).toLocaleString("ja-JP")})]})]}),u.jsxs("p",{className:"panel-note",children:["今のデータは消えません（足りない分を追加する安全マージ）。 それでも念のため、",u.jsx("b",{children:"先に今のデータをバックアップ"}),"しておくのがおすすめです💗"]}),u.jsx("button",{className:"bk-first",onClick:wr,disabled:Kt,children:"💾 先に今のデータをバックアップする"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:xn,children:"この内容で復元する"}),u.jsx("button",{className:"p-close",onClick:()=>De(null),children:"キャンセル"})]})]})}),p&&u.jsx("div",{className:"overlay",onClick:()=>h(null),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"🩷 今日のコマ"}),p==="view"?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"decl-full",children:P}),u.jsx("p",{className:"panel-note",children:"その日1日だけピン留め。日記にも記録されています🎬"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",onClick:()=>{N(P),h("edit")},children:"書きなおす"}),u.jsx("button",{className:"p-close",onClick:()=>h(null),children:"閉じる"})]})]}):u.jsxs(u.Fragment,{children:[u.jsx("textarea",{autoFocus:!0,style:{minHeight:120},placeholder:"今日は愛全開の私でいる！",value:k,onChange:y=>N(y.target.value)}),u.jsx("p",{className:"panel-note",children:"その日1日だけ表示。決定すると今日の日記の先頭に🎬として残ります"}),u.jsxs("div",{className:"panel-btns",children:[u.jsx("button",{className:"p-copy",disabled:!k.trim(),onClick:()=>{mn(k),h(null)},children:"決定"}),u.jsx("button",{className:"p-close",onClick:()=>h(null),children:"閉じる"})]})]})]})}),rt&&u.jsx("div",{className:"overlay",onClick:()=>He(!1),children:u.jsxs("div",{className:"panel",onClick:y=>y.stopPropagation(),children:[u.jsx("h3",{children:"⚙︎ 箇条書きマーク"}),u.jsx("p",{className:"panel-note",children:"日記の入力欄に出るマーク。タップで削除、下から追加できます。"}),u.jsxs("div",{className:"mark-manage",children:[be.map(y=>u.jsxs("span",{className:"mark-item",children:[y,u.jsx("button",{onClick:()=>gn(y),"aria-label":"削除",children:"✕"})]},y)),be.length===0&&u.jsx("p",{className:"panel-note",children:"マークがありません。追加してね"})]}),u.jsxs("div",{className:"in-row",style:{marginTop:4},children:[u.jsx("input",{className:"f-input",maxLength:4,placeholder:"記号や絵文字（例: ❤︎）",value:O,onChange:y=>F(y.target.value),onKeyDown:y=>y.key==="Enter"&&xr()}),u.jsx("button",{className:"p-copy",style:{flex:"0 0 auto",padding:"8px 16px",borderRadius:999},disabled:!O.trim(),onClick:xr,children:"追加"})]}),u.jsx("div",{className:"panel-btns",children:u.jsx("button",{className:"p-close",onClick:()=>He(!1),children:"閉じる"})})]})}),b&&u.jsx(jf,{message:b.message,onConfirm:b.onConfirm,onCancel:()=>S(null)}),Ht&&u.jsx("div",{className:"toast",children:Ht})]})}let Ju=!1,Zu=!!(navigator.serviceWorker&&navigator.serviceWorker.controller);navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!Zu){Zu=!0;return}Ju||(Ju=!0,window.location.reload())});qh({immediate:!0,onRegisteredSW(e,t){t&&(t.update(),setInterval(()=>t.update(),60*60*1e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&t.update()}))}});xm();ff(document.getElementById("root")).render(u.jsx(z.StrictMode,{children:u.jsx(tg,{})}));export{ig as A,lg as B,Um as C,rg as D,og as E,ng as F,Hu as G,Fm as I,mg as M,Xu as P,_m as S,gg as T,Ps as W,Me as a,ve as b,Wu as c,Ti as d,jf as e,Je as f,V as g,pg as h,yf as i,u as j,Oe as k,Wm as l,Q as m,xf as n,xg as o,fg as p,sg as q,z as r,Cm as s,Am as t,Ae as u,cg as v,dg as w,ag as x,ug as y,hg as z};
