"use strict";var c=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var f=c(function(p,s){
var o=require('@stdlib/assert-is-number/dist').isPrimitive,a=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/error-tools-fmtprodmsg/dist');function g(n){var r,t,u,e;if(u=0,e=0,arguments.length){if(!o(n))throw new TypeError(m('1K39X',n));return t=n,v}return t=0,l;function l(i){return arguments.length===0?e===0?null:e===1?a(u)?NaN:0:u/(e-1):(e+=1,r=i-t,t+=r/e,u+=r*(i-t),e<2?a(u)?NaN:0:u/(e-1))}function v(i){return arguments.length===0?e===0?null:u/e:(e+=1,r=i-t,u+=r*r,u/e)}}s.exports=g
});var N=f();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
