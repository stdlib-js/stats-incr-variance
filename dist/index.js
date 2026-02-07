"use strict";var c=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var f=c(function(p,s){
var o=require('@stdlib/assert-is-number/dist').isPrimitive,a=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/error-tools-fmtprodmsg/dist');function g(n){var e,t,u,r;if(u=0,r=0,arguments.length){if(!o(n))throw new TypeError(m('1K39X',n));return t=n,v}return t=0,l;function l(i){return arguments.length===0?r===0?null:r===1?a(u)?NaN:0:u/(r-1):(r+=1,e=i-t,t+=e/r,u+=e*(i-t),r<2?a(u)?NaN:0:u/(r-1))}function v(i){return arguments.length===0?r===0?null:u/r:(r+=1,e=i-t,u+=e*e,u/r)}}s.exports=g
});var N=f();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
