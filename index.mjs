// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function n(n){var s,i,m,o;if(m=0,o=0,arguments.length){if(!r(n))throw new TypeError(e("1K39X",n));return i=n,function(r){if(0===arguments.length)return 0===o?null:m/o;return(m+=(s=r-i)*s)/(o+=1)}}return i=0,function(r){if(0===arguments.length)return 0===o?null:1===o?t(m)?NaN:0:m/(o-1);if(m+=(s=r-i)*(r-(i+=s/(o+=1))),o<2)return t(m)?NaN:0;return m/(o-1)}}export{n as default};
//# sourceMappingURL=index.mjs.map