!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1323)}({1323:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(165);n(1324),document.addEventListener("DOMContentLoaded",(function(e){var t=o.getQsParam("code"),n=o.getQsParam("state");if(null!=n&&n.includes(":clientId=browser"))!function(e,t){window.postMessage({command:"authResult",code:e,state:t},"*");var n=("; "+document.cookie).split("; ssoHandOffMessage=").pop().split(";").shift();document.cookie="ssoHandOffMessage=;SameSite=strict;max-age=0";var o=document.getElementById("content");o.innerHTML="";var r=document.createElement("p");r.innerText=n,o.appendChild(r)}(t,n);else{window.location.href=window.location.origin+"/#/sso?code="+t+"&state="+n;var r=function(e,t){var n=new RegExp(t).exec(e);if(!n)return null;return n[0]}(n,"(?<=_returnUri=')(.*)(?=')");window.location.href=r?window.location.origin+"/#"+r:window.location.origin+"/#/sso?code="+t+"&state="+n}}))},1324:function(e,t,n){"use strict";n.r(t)},165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.b64Decode=t.getQsParam=void 0,t.getQsParam=function(e){var t=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},t.b64Decode=function(e){return decodeURIComponent(Array.prototype.map.call(atob(e),(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""))}}});
//# sourceMappingURL=sso.8e5494e39b48bad5e654.js.map