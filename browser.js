// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,n="function"==typeof Symbol?Symbol.toStringTag:"",r=t&&"symbol"==typeof Symbol.toStringTag?function(t){var r,l,f,a,i;if(null==t)return o.call(t);l=t[n],i=n,r=null!=(a=t)&&e.call(a,i);try{t[n]=void 0}catch(e){return o.call(t)}return f=o.call(t),r?t[n]=l:delete t[n],f}:function(t){return o.call(t)},l="function"==typeof Float32Array,f=Number.POSITIVE_INFINITY,a="function"==typeof Float32Array?Float32Array:null,i="function"==typeof Float32Array?Float32Array:void 0,y=function(){var t,o,e;if("function"!=typeof a)return!1;try{o=new a([1,3.14,-3.14,5e40]),e=o,t=(l&&e instanceof Float32Array||"[object Float32Array]"===r(e))&&1===o[0]&&3.140000104904175===o[1]&&-3.140000104904175===o[2]&&o[3]===f}catch(o){t=!1}return t}()?i:function(){throw new Error("not implemented")};return function(t,o){return new y(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*o,2*(t.length-o))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).reinterpret=o();
//# sourceMappingURL=browser.js.map
