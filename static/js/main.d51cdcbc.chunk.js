/*! For license information please see main.d51cdcbc.chunk.js.LICENSE.txt */
(this["webpackJsonpwinbox-react-example"]=this["webpackJsonpwinbox-react-example"]||[]).push([[0],{11:function(e,t,n){e.exports={code:"All_code__1gyC3",code2:"All_code2__2REqc"}},13:function(e,t,n){e.exports={code:"Example_code__2IE8M",code2:"Example_code2__Sl4n6"}},15:function(e,t,n){e.exports={code:"Usage_code___4Ao_",code2:"Usage_code2__8k6h5"}},30:function(e,t,n){e.exports={socialIcons:"SocialIcons_socialIcons__1GnRW"}},31:function(e,t,n){e.exports=n.p+"static/media/image.691a3b2d.png"},36:function(e,t,n){e.exports=n(81)},37:function(e,t,n){},45:function(e,t,n){},7:function(e,t,n){e.exports={name:"Hero_name__16OH0",text:"Hero_text__5joQG"}},81:function(e,t,n){"use strict";n.r(t);n(37);var r=n(1),a=n.n(r),o=n(25),l=n.n(o),i=(n(44),n(45),n(3)),c=n(35);n(46),n(47);function s(e,t){return e(t={exports:{}},t.exports),t.exports}var u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;function d(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var h=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,r,a=d(e),o=1;o<arguments.length;o++){for(var l in n=Object(arguments[o]))f.call(n,l)&&(a[l]=n[l]);if(u){r=u(n);for(var i=0;i<r.length;i++)p.call(n,r[i])&&(a[r[i]]=n[r[i]])}}return a};function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g="function"===typeof Symbol&&Symbol.for,y=g?Symbol.for("react.portal"):60106,x=g?Symbol.for("react.fragment"):60107,v=g?Symbol.for("react.strict_mode"):60108,b=g?Symbol.for("react.profiler"):60114,w=g?Symbol.for("react.provider"):60109,E=g?Symbol.for("react.context"):60110,k=g?Symbol.for("react.concurrent_mode"):60111,S=g?Symbol.for("react.forward_ref"):60112,N=g?Symbol.for("react.suspense"):60113,_=g?Symbol.for("react.suspense_list"):60120,C=g?Symbol.for("react.memo"):60115,O=g?Symbol.for("react.lazy"):60116,I=g?Symbol.for("react.block"):60121,F=g?Symbol.for("react.fundamental"):60117,D=g?Symbol.for("react.scope"):60119;function j(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case x:return"Fragment";case y:return"Portal";case b:return"Profiler";case v:return"StrictMode";case N:return"Suspense";case _:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case E:return"Context.Consumer";case w:return"Context.Provider";case S:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case C:return j(e.type);case I:return j(e.render);case O:if(e=1===e._status?e._result:null)return j(e)}return null}var M=a.a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;M.hasOwnProperty("ReactCurrentDispatcher")||(M.ReactCurrentDispatcher={current:null}),M.hasOwnProperty("ReactCurrentBatchConfig")||(M.ReactCurrentBatchConfig={suspense:null});var R={};function T(e,t){for(var n=0|e._threadCount;n<=t;n++)e[n]=e._currentValue2,e._threadCount=n+1}for(var P=new Uint16Array(16),L=0;15>L;L++)P[L]=L+1;P[15]=0;var W=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,A=Object.prototype.hasOwnProperty,z={},V={};function U(e){return!!A.call(V,e)||!A.call(z,e)&&(W.test(e)?V[e]=!0:(z[e]=!0,!1))}function H(e,t,n,r,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){q[e]=new H(e,0,!1,e,null,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];q[t]=new H(t,1,!1,e[1],null,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){q[e]=new H(e,2,!1,e.toLowerCase(),null,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){q[e]=new H(e,2,!1,e,null,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){q[e]=new H(e,3,!1,e.toLowerCase(),null,!1)})),["checked","multiple","muted","selected"].forEach((function(e){q[e]=new H(e,3,!0,e,null,!1)})),["capture","download"].forEach((function(e){q[e]=new H(e,4,!1,e,null,!1)})),["cols","rows","size","span"].forEach((function(e){q[e]=new H(e,6,!1,e,null,!1)})),["rowSpan","start"].forEach((function(e){q[e]=new H(e,5,!1,e.toLowerCase(),null,!1)}));var B=/[\-:]([a-z])/g;function $(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(B,$);q[t]=new H(t,1,!1,e,null,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(B,$);q[t]=new H(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(B,$);q[t]=new H(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)})),["tabIndex","crossOrigin"].forEach((function(e){q[e]=new H(e,1,!1,e.toLowerCase(),null,!1)})),q.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach((function(e){q[e]=new H(e,1,!1,e.toLowerCase(),null,!0)}));var G=/["'&<>]/;function Z(e){if("boolean"===typeof e||"number"===typeof e)return""+e;e=""+e;var t=G.exec(e);if(t){var n,r="",a=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}a!==n&&(r+=e.substring(a,n)),a=n+1,r+=t}e=a!==n?r+e.substring(a,n):r}return e}function Y(e,t){var n,r=q.hasOwnProperty(e)?q[e]:null;return(n="style"!==e)&&(n=null!==r?0===r.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])),n||function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(e,t,r,!1)?"":null!==r?(e=r.attributeName,3===(n=r.type)||4===n&&!0===t?e+'=""':(r.sanitizeURL&&(t=""+t),e+'="'+Z(t)+'"')):U(e)?e+'="'+Z(t)+'"':""}var J="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},X=null,K=null,Q=null,ee=!1,te=!1,ne=null,re=0;function ae(){if(null===X)throw Error(m(321));return X}function oe(){if(0<re)throw Error(m(312));return{memoizedState:null,queue:null,next:null}}function le(){return null===Q?null===K?(ee=!1,K=Q=oe()):(ee=!0,Q=K):null===Q.next?(ee=!1,Q=Q.next=oe()):(ee=!0,Q=Q.next),Q}function ie(e,t,n,r){for(;te;)te=!1,re+=1,Q=null,n=e(t,r);return K=X=null,re=0,Q=ne=null,n}function ce(e,t){return"function"===typeof t?t(e):t}function se(e,t,n){if(X=ae(),Q=le(),ee){var r=Q.queue;if(t=r.dispatch,null!==ne&&void 0!==(n=ne.get(r))){ne.delete(r),r=Q.memoizedState;do{r=e(r,n.action),n=n.next}while(null!==n);return Q.memoizedState=r,[r,t]}return[Q.memoizedState,t]}return e=e===ce?"function"===typeof t?t():t:void 0!==n?n(t):t,Q.memoizedState=e,e=(e=Q.queue={last:null,dispatch:null}).dispatch=ue.bind(null,X,e),[Q.memoizedState,e]}function ue(e,t,n){if(!(25>re))throw Error(m(301));if(e===X)if(te=!0,e={action:n,next:null},null===ne&&(ne=new Map),void 0===(n=ne.get(t)))ne.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}}function fe(){}var pe=0,de={readContext:function(e){var t=pe;return T(e,t),e[t]},useContext:function(e){ae();var t=pe;return T(e,t),e[t]},useMemo:function(e,t){if(X=ae(),t=void 0===t?null:t,null!==(Q=le())){var n=Q.memoizedState;if(null!==n&&null!==t){e:{var r=n[1];if(null===r)r=!1;else{for(var a=0;a<r.length&&a<t.length;a++)if(!J(t[a],r[a])){r=!1;break e}r=!0}}if(r)return n[0]}}return e=e(),Q.memoizedState=[e,t],e},useReducer:se,useRef:function(e){X=ae();var t=(Q=le()).memoizedState;return null===t?(e={current:e},Q.memoizedState=e):t},useState:function(e){return se(ce,e)},useLayoutEffect:function(){},useCallback:function(e){return e},useImperativeHandle:fe,useEffect:fe,useDebugValue:fe,useResponder:function(e,t){return{props:t,responder:e}},useDeferredValue:function(e){return ae(),e},useTransition:function(){return ae(),[function(e){e()},!1]}},he="http://www.w3.org/1999/xhtml";var me={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},ge=h({menuitem:!0},me),ye={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xe=["Webkit","ms","Moz","O"];Object.keys(ye).forEach((function(e){xe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ye[t]=ye[e]}))}));var ve=/([A-Z])/g,be=/^ms-/,we=a.a.Children.toArray,Ee=M.ReactCurrentDispatcher,ke={listing:!0,pre:!0,textarea:!0},Se=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ne={},_e={};var Ce=Object.prototype.hasOwnProperty,Oe={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Ie(e,t){if(void 0===e)throw Error(m(152,j(t)||"Component"))}function Fe(e,t,n){function r(r,a){var o=a.prototype&&a.prototype.isReactComponent,l=function(e,t,n,r){if(r&&("object"===typeof(r=e.contextType)&&null!==r))return T(r,n),r[n];if(e=e.contextTypes){for(var a in n={},e)n[a]=t[a];t=n}else t=R;return t}(a,t,n,o),i=[],c=!1,s={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===i)return null},enqueueReplaceState:function(e,t){c=!0,i=[t]},enqueueSetState:function(e,t){if(null===i)return null;i.push(t)}};if(o){if(o=new a(r.props,l,s),"function"===typeof a.getDerivedStateFromProps){var u=a.getDerivedStateFromProps.call(null,r.props,o.state);null!=u&&(o.state=h({},o.state,u))}}else if(X={},o=a(r.props,l,s),null==(o=ie(a,r.props,o,l))||null==o.render)return void Ie(e=o,a);if(o.props=r.props,o.context=l,o.updater=s,void 0===(s=o.state)&&(o.state=s=null),"function"===typeof o.UNSAFE_componentWillMount||"function"===typeof o.componentWillMount)if("function"===typeof o.componentWillMount&&"function"!==typeof a.getDerivedStateFromProps&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&"function"!==typeof a.getDerivedStateFromProps&&o.UNSAFE_componentWillMount(),i.length){s=i;var f=c;if(i=null,c=!1,f&&1===s.length)o.state=s[0];else{u=f?s[0]:o.state;var p=!0;for(f=f?1:0;f<s.length;f++){var d=s[f];null!=(d="function"===typeof d?d.call(o,u,r.props,l):d)&&(p?(p=!1,u=h({},u,d)):h(u,d))}o.state=u}}else i=null;if(Ie(e=o.render(),a),"function"===typeof o.getChildContext&&"object"===typeof(r=a.childContextTypes)){var g=o.getChildContext();for(var y in g)if(!(y in r))throw Error(m(108,j(a)||"Unknown",y))}g&&(t=h({},t,g))}for(;a.a.isValidElement(e);){var o=e,l=o.type;if("function"!==typeof l)break;r(o,l)}return{child:e,context:t}}var De=function(){function e(e,t){a.a.isValidElement(e)?e.type!==x?e=[e]:(e=e.props.children,e=a.a.isValidElement(e)?[e]:we(e)):e=we(e),e={type:null,domNamespace:he,children:e,childIndex:0,context:R,footer:""};var n=P[0];if(0===n){var r=P,o=2*(n=r.length);if(!(65536>=o))throw Error(m(304));var l=new Uint16Array(o);for(l.set(r),(P=l)[0]=n+1,r=n;r<o-1;r++)P[r]=r+1;P[o-1]=0}else P[0]=P[n];this.threadID=n,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;P[e]=P[0],P[0]=e}},t.pushProvider=function(e){var t=++this.contextIndex,n=e.type._context,r=this.threadID;T(n,r);var a=n[r];this.contextStack[t]=n,this.contextValueStack[t]=a,n[r]=e.props.value},t.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],n=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=n},t.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},t.read=function(e){if(this.exhausted)return null;var t=pe;pe=this.threadID;var n=Ee.current;Ee.current=de;try{for(var r=[""],a=!1;r[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var o=this.threadID;P[o]=P[0],P[0]=o;break}var l=this.stack[this.stack.length-1];if(a||l.childIndex>=l.children.length){var i=l.footer;if(""!==i&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===l.type)this.currentSelectValue=null;else if(null!=l.type&&null!=l.type.type&&l.type.type.$$typeof===w)this.popProvider(l.type);else if(l.type===N){this.suspenseDepth--;var c=r.pop();if(a){a=!1;var s=l.fallbackFrame;if(!s)throw Error(m(303));this.stack.push(s),r[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}r[this.suspenseDepth]+=c}r[this.suspenseDepth]+=i}else{var u=l.children[l.childIndex++],f="";try{f+=this.render(u,l.context,l.domNamespace)}catch(p){if(null!=p&&"function"===typeof p.then)throw Error(m(294));throw p}r.length<=this.suspenseDepth&&r.push(""),r[this.suspenseDepth]+=f}}return r[0]}finally{Ee.current=n,pe=t}},t.render=function(e,t,n){if("string"===typeof e||"number"===typeof e)return""===(n=""+e)?"":this.makeStaticMarkup?Z(n):this.previousWasTextNode?"\x3c!-- --\x3e"+Z(n):(this.previousWasTextNode=!0,Z(n));if(e=(t=Fe(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!a.a.isValidElement(e)){if(null!=e&&null!=e.$$typeof){if((n=e.$$typeof)===y)throw Error(m(257));throw Error(m(258,n.toString()))}return e=we(e),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}var r=e.type;if("string"===typeof r)return this.renderDOM(e,t,n);switch(r){case v:case k:case b:case _:case x:return e=we(e.props.children),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case N:throw Error(m(294))}if("object"===typeof r&&null!==r)switch(r.$$typeof){case S:X={};var o=r.render(e.props,e.ref);return o=ie(r.render,e.props,o,e.ref),o=we(o),this.stack.push({type:null,domNamespace:n,children:o,childIndex:0,context:t,footer:""}),"";case C:return e=[a.a.createElement(r.type,h({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case w:return n={type:e,domNamespace:n,children:r=we(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(n),"";case E:r=e.type,o=e.props;var l=this.threadID;return T(r,l),r=we(o.children(r[l])),this.stack.push({type:e,domNamespace:n,children:r,childIndex:0,context:t,footer:""}),"";case F:throw Error(m(338));case O:switch(function(e){if(-1===e._status){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}}(r=e.type),r._status){case 1:return e=[a.a.createElement(r._result,h({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case 2:throw r._result;default:throw Error(m(295))}case D:throw Error(m(343))}throw Error(m(130,null==r?r:typeof r,""))},t.renderDOM=function(e,t,n){var r=e.type.toLowerCase();if(!Ne.hasOwnProperty(r)){if(!Se.test(r))throw Error(m(65,r));Ne[r]=!0}var o=e.props;if("input"===r)o=h({type:void 0},o,{defaultChecked:void 0,defaultValue:void 0,value:null!=o.value?o.value:o.defaultValue,checked:null!=o.checked?o.checked:o.defaultChecked});else if("textarea"===r){var l=o.value;if(null==l){l=o.defaultValue;var i=o.children;if(null!=i){if(null!=l)throw Error(m(92));if(Array.isArray(i)){if(!(1>=i.length))throw Error(m(93));i=i[0]}l=""+i}null==l&&(l="")}o=h({},o,{value:void 0,children:""+l})}else if("select"===r)this.currentSelectValue=null!=o.value?o.value:o.defaultValue,o=h({},o,{value:void 0});else if("option"===r){i=this.currentSelectValue;var c=function(e){if(void 0===e||null===e)return e;var t="";return a.a.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(o.children);if(null!=i){var s=null!=o.value?o.value+"":c;if(l=!1,Array.isArray(i)){for(var u=0;u<i.length;u++)if(""+i[u]===s){l=!0;break}}else l=""+i===s;o=h({selected:void 0,children:void 0},o,{selected:l,children:c})}}if(l=o){if(ge[r]&&(null!=l.children||null!=l.dangerouslySetInnerHTML))throw Error(m(137,r,""));if(null!=l.dangerouslySetInnerHTML){if(null!=l.children)throw Error(m(60));if("object"!==typeof l.dangerouslySetInnerHTML||!("__html"in l.dangerouslySetInnerHTML))throw Error(m(61))}if(null!=l.style&&"object"!==typeof l.style)throw Error(m(62,""))}for(b in l=o,i=this.makeStaticMarkup,c=1===this.stack.length,s="<"+e.type,l)if(Ce.call(l,b)){var f=l[b];if(null!=f){if("style"===b){u=void 0;var p="",d="";for(u in f)if(f.hasOwnProperty(u)){var g=0===u.indexOf("--"),y=f[u];if(null!=y){if(g)var x=u;else if(x=u,_e.hasOwnProperty(x))x=_e[x];else{var v=x.replace(ve,"-$1").toLowerCase().replace(be,"-ms-");x=_e[x]=v}p+=d+x+":",d=u,p+=g=null==y||"boolean"===typeof y||""===y?"":g||"number"!==typeof y||0===y||ye.hasOwnProperty(d)&&ye[d]?(""+y).trim():y+"px",d=";"}}f=p||null}u=null;e:if(g=r,y=l,-1===g.indexOf("-"))g="string"===typeof y.is;else switch(g){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":g=!1;break e;default:g=!0}g?Oe.hasOwnProperty(b)||(u=U(u=b)&&null!=f?u+'="'+Z(f)+'"':""):u=Y(b,f),u&&(s+=" "+u)}}i||c&&(s+=' data-reactroot=""');var b=s;l="",me.hasOwnProperty(r)?b+="/>":(b+=">",l="</"+e.type+">");e:{if(null!=(i=o.dangerouslySetInnerHTML)){if(null!=i.__html){i=i.__html;break e}}else if("string"===typeof(i=o.children)||"number"===typeof i){i=Z(i);break e}i=null}return null!=i?(o=[],ke.hasOwnProperty(r)&&"\n"===i.charAt(0)&&(b+="\n"),b+=i):o=we(o.children),e=e.type,n=null==n||"http://www.w3.org/1999/xhtml"===n?function(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}(e):"http://www.w3.org/2000/svg"===n&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":n,this.stack.push({domNamespace:n,type:r,children:o,childIndex:0,context:t,footer:l}),this.previousWasTextNode=!1,b},e}(),je={renderToString:function(e){e=new De(e,!1);try{return e.read(1/0)}finally{e.destroy()}},renderToStaticMarkup:function(e){e=new De(e,!0);try{return e.read(1/0)}finally{e.destroy()}},renderToNodeStream:function(){throw Error(m(207))},renderToStaticNodeStream:function(){throw Error(m(208))},version:"16.14.0"},Me=je.default||je;function Re(e,t,n,r,a){}Re.resetWarningCache=function(){0};s((function(e){0}));var Te=s((function(e){e.exports=Me})),Pe=function(e){var t=e.title,n=e.border,r=e.background,o=e.className,l=e.x,i=e.y,s=e.width,u=e.height,f=e.top,p=e.right,d=e.bottom,h=e.left,m=e.modal,g=e.children,y=e.modern,x=e.onClose;new c.a(t,{border:n,background:r,x:l,y:i,width:s,height:u,top:f,right:p,bottom:d,left:h,modal:m,html:"".concat(Te.renderToStaticMarkup(g)),class:"".concat(y?"modern":o?"".concat(o):""),onclose:x()});return a.a.createElement("div",null)};Pe.defaultProps={title:"Winbox React Title",border:"0",background:"#28292d",x:0,y:0,modal:!1};var Le=Pe,We=n(83),Ae=n(5),ze=n(82),Ve=n(11),Ue=n.n(Ve);We.a.registerLanguage("jsx",Ae.a);var He=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],l=function(){o(!n)};return a.a.createElement("div",{className:"text-light pt-4"},n&&a.a.createElement(Le,Object.assign({onClose:l},{title:"Custom Title",border:"4",background:"linear-gradient(90deg, rgba(49,36,239,1) 0%, rgba(67,0,168,1) 100%)",className:"",x:"center",y:"center",width:"20%",height:"50%",top:50,right:50,bottom:100,left:50,modal:!1,url:"",modern:!1}),a.a.createElement("h4",null,"Lorem ipsum dolor sit amet")),a.a.createElement("span",{className:"d-block title title__colored text-center pt-5"},"Example with all available props"),a.a.createElement("span",{className:"d-block text-center pt-3"},"Config object"),a.a.createElement("div",{className:"mx-auto ".concat(Ue.a.code)},a.a.createElement(We.a,{language:"jsx",style:ze.a},"const config = {\n    // ADDING CUSTOM TITLE\n    title: 'Custom Title',\n\n    /*ADDING BORDER example:  25px, 1rem, 10%, 3em. \n    If any number is given it will be count as pixels*/\n    border: '4',\n\n    /*ADDING BACKGROUND COLOR any valid \n    css color code can be used. You also can use gradients.*/\n    background:\n      `linear-gradient(90deg, rgba(49,36,239,1) \n      0%, rgba(67,0,168,1) 100%)`,\n\n    //CUSTOM className\n    className: '',\n\n    //CUSTOM POSITION any valid\n    x: 'center',\n    y: 'center',\n\n    //CUSTOM SIZE\n    width: '20%',\n    height: '50%',\n\n    //LIMIT VIEWPORT \n    top: 50,\n    right: 50,\n    bottom: 100,\n    left: 50,\n\n    //IS MODAL OR WINDOW (default is false)\n    modal: false,\n\n    //EMBED A WEBSITE using the url prop ()\n    url: '',\n\n    //USE THE MODERN THEME OF WINBOX\n    modern: false\n\n    //onClose EVENT\n    onClose: myCustomFunction()\n  }")),a.a.createElement("span",{className:"d-block   text-center pt-3"},"Render the component."),a.a.createElement("div",{className:"mx-auto ".concat(Ue.a.code2)},a.a.createElement(We.a,{language:"jsx",style:ze.a},"<WinboxReact {...options}>\n  <h4>Lorem ipsum dolor sit amet</h4>\n</WinboxReact>")),a.a.createElement("div",{className:"text-center pb-5"},a.a.createElement("button",{onClick:l,className:"btn btn-custom btn-lg mt-4"},"Show All")))},qe=n(13),Be=n.n(qe);We.a.registerLanguage("jsx",Ae.a);var $e=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],l=function(){o(!n)};return a.a.createElement("div",{className:"text-light pt-4"},n&&a.a.createElement(Le,{onClose:l},a.a.createElement("h4",null,"Lorem ipsum dolor sit amet")),a.a.createElement("span",{className:"d-block title title__colored text-center pt-5"},"Example"),a.a.createElement("span",{className:"d-block   text-center pt-3"},"You can import WinboxReact component as default exported component."),a.a.createElement("div",{className:"mx-auto ".concat(Be.a.code)},a.a.createElement(We.a,{language:"jsx",style:ze.a},"import WinboxReact from 'winbox-react'")),a.a.createElement("span",{className:"d-block   text-center pt-3"},"Render the component."),a.a.createElement("div",{className:"mx-auto ".concat(Be.a.code2)},a.a.createElement(We.a,{language:"jsx",style:ze.a},"<WinboxReact>\n  <h4>\n    Lorem ipsum dolor sit amet\n  </h4>\n</WinboxReact>")),a.a.createElement("div",{className:"text-center pb-5"},a.a.createElement("button",{onClick:l,className:"btn btn-custom btn-lg mt-4"},"Show Example")))},Ge=n(6),Ze=n(14),Ye={facebook:"https://facebook.com/tanvir.mahin.1",twitter:"https://twitter.com/TanvirMahin24",linkedin:"https://www.linkedin.com/in/tanvirmahin24/",email:"tanvirmahin24@gmail.com",github:"https://github.com/TanvirMahin24"},Je=n(30),Xe=n.n(Je),Ke=function(){return a.a.createElement("div",{className:Xe.a.socialIcons},a.a.createElement("a",{href:Ye.facebook},a.a.createElement(Ze.a,null)),a.a.createElement("a",{href:Ye.twitter},a.a.createElement(Ge.c,null)),a.a.createElement("a",{href:Ye.linkedin},a.a.createElement(Ze.b,null)),a.a.createElement("a",{href:Ye.github},a.a.createElement(Ge.a,null)),a.a.createElement("a",{href:Ye.email},a.a.createElement(Ge.b,null)))},Qe=function(){return a.a.createElement("div",{className:"py-4 text-center"},a.a.createElement("div",{className:""},a.a.createElement(Ke,null)),a.a.createElement("div",{className:"text-light lead"},"\xa92021 by Tanvir Mahin"))},et=n(7),tt=n.n(et),nt=n(31),rt=n.n(nt),at=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],l=function(){o(!n)};return a.a.createElement("div",{className:"text-center"},n&&a.a.createElement(Le,{onClose:l,background:"linear-gradient(90deg, rgba(49,36,239,1) 0%, rgba(67,0,168,1) 100%)"}),a.a.createElement("img",{src:rt.a,className:"img-fluid mt-5",alt:""}),a.a.createElement("span",{className:"d-block ".concat(tt.a.name)},"WinBox React"),a.a.createElement("span",{className:"d-block ".concat(tt.a.text," ")},"by"," ",a.a.createElement("a",{href:"https://tanvirmahin.netlify.app/",className:"title__colored"},"Tanvir Mahin")),a.a.createElement("span",{className:"d-block ".concat(tt.a.text)},"by",a.a.createElement("a",{href:"https://tanvirmahin.netlify.app/",className:"title__colored"},"WinBox.js")),a.a.createElement("button",{onClick:l,className:"btn btn-custom btn-lg mt-4"},"Show Example"))},ot=n(32),lt=n(34),it=n(15),ct=n.n(it);We.a.registerLanguage("bash",ot.a),We.a.registerLanguage("javascript",lt.a);var st=function(){return a.a.createElement("div",{className:"text-light pt-4"},a.a.createElement("span",{className:"d-block title title__colored text-center pt-5"},"USAGE"),a.a.createElement("span",{className:"d-block   text-center pt-3"},"Install the Package using npm"),a.a.createElement("div",{className:"mx-auto ".concat(ct.a.code)},a.a.createElement(We.a,{language:"bash",style:ze.a},"npm i winbox-react")),a.a.createElement("span",{className:"d-block   text-center pt-3"},"Import the CSS in the App.js file"),a.a.createElement("div",{className:"mx-auto ".concat(ct.a.code2)},a.a.createElement(We.a,{language:"javascript",style:ze.a},"import 'winbox-react/dist/index.css'")))},ut=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(at,null),a.a.createElement(st,null),a.a.createElement($e,null),a.a.createElement(He,null),a.a.createElement(Qe,null))},ft=function(){return a.a.createElement(ut,null)};l.a.render(a.a.createElement(ft,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.d51cdcbc.chunk.js.map