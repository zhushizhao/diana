!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.diana=n():t.diana=n()}("undefined"!=typeof self?self:this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=4)}([function(t,n){function e(){for(var t=[],n=arguments.length,e=Array(n),o=0;o<n;o++)e[o]=arguments[o];for(var i=0;i<e.length;i++)t=t.concat(e[i]);var u={},a=[];return t.forEach(function(t){u[(void 0===t?"undefined":r(t))+t]||(u[(void 0===t?"undefined":r(t))+t]=t,a.push(t))}),a}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=e},function(t,n,e){var r=e(2),o={};r(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(t){o["is"+t]=function(n){return Object.prototype.toString.call(n)==="[object "+t+"]"}}),t.exports=o},function(t,n,e){var r=e(16),o=Math.pow(2,53)-1,i=function(t,n,e){n=r(n,e);var o=void 0,i=void 0;if(u(t))for(o=0,i=t.length;o<i;o++)n(t[o],o,t);else{var a=Object.keys(t);for(o=0,i=a.length;o<i;o++)n(t[a[o]],a[o],t)}return t},u=function(t){var n=null===t?void 0:t.length;return"number"==typeof n&&n>=0&&n<=o};t.exports=i},function(t,n){function e(t){return t.reduce(function(t,n){return t+n})}t.exports=e},function(t,n,e){var r=e(5),o=e(26),i=e(27),u={getOS:o,isMobile:i};t.exports=Object.assign({},r,u)},function(t,n,e){var r=e(0),o=e(6),i=e(7),u=e(8),a=e(9),c=e(10),f=e(11),s=e(12),l=e(13),p=e(14),y=e(15),d=e(1),v=e(3),g=e(17),m=e(18),b=e(19),h=e(20),x=e(22),j=e(23),S=e(2),w=e(24),O=e(25),A={uniq:r,intersection:o,rdColor:i,rdNum:u,isEmail:a,isPhoneNum:c,trim:f,changeCase:s,isArray:l,clone:p,cloneDeep:y,sum:v,mean:g,max:m,min:b,equal:h,obj2query:x,query2obj:j,each:S,debounce:w,throttle:O},M=Object.assign({},A,d);t.exports=M},function(t,n,e){function r(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];if(1===n.length){for(var r=n[0].sort(),i=[],u=0;u<r.length-1;u++)r[u]===r[u+1]&&i.push(r[u]);return i}if(n.length>1){for(var a=[],c=0;c<n.length;c++)a=a.concat(o(n[c]));for(var f=a.sort(),s=[],l=0;l<f.length-1;l++)f[l]===f[l+(n.length-1)]&&s.push(f[l]);return s}}var o=e(0);t.exports=r},function(t,n){function e(){return"#"+("000"+(16777216*Math.random()<<0).toString(16)).slice(-6)}t.exports=e},function(t,n){function e(t,n,e){if(t===n)return"rdNum() 边界值不合理";var r=n-t,o=Math.random();switch(e){case"left":return t+Math.floor(o*r);case"right":return 0===o&&(o=1),t+Math.ceil(o*r);case"no":return n-t<1||n-t==1?"rdNum() 边界值不合理":(0===o&&(o=1),t+Math.ceil(o*(r-1)));default:return t+Math.round(o*r)}}t.exports=e},function(t,n){function e(t){return/^[a-z0-9]+([._\\-]*[a-z0-9])*@(\w+([-.]\w+)*\.){1,63}[a-z0-9]+$/.test(t)}t.exports=e},function(t,n){function e(t){return/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(String(t))}t.exports=e},function(t,n){function e(t,n){switch(n){case 1:return t.replace(/\s*/g,"");case 2:return t.replace(/(^\s*)|(\s*$)/g,"");case 3:return t.replace(/(^\s*)/g,"");case 4:return t.replace(/(\s*$)/g,"");default:return t.replace(/\s*/g,"")}}t.exports=e},function(t,n){function e(t,n){switch(n){case 1:return t.replace(/^(\w)(\w+)/,function(t,n,e){return n.toUpperCase()+e.toLowerCase()});case 2:return t.replace(/^(\w)(\w+)/,function(t,n,e){return n.toLowerCase()+e.toUpperCase()});case 3:return r(t);default:return t.replace(/^(\w)(\w+)/,function(t,n,e){return n.toUpperCase()+e.toLowerCase()})}}function r(t){var n="";return t.split("").forEach(function(t){/^[a-z]/.test(t)?n+=t.toUpperCase():/^[A-Z]/.test(t)?n+=t.toLowerCase():n+=t}),n}t.exports=e},function(t,n){function e(t){return Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Array.isArray(t)}t.exports=e},function(t,n){function e(t){if(t instanceof Object){var n={};for(var e in t)n[e]=t[e];return n}}t.exports=e},function(t,n){function e(t){var n=void 0;if(null==t||"object"!==(void 0===t?"undefined":r(t)))return t;if(t instanceof Date)return n=new Date,n.setTime(t.getTime()),n;if(t instanceof Array){n=[];for(var o=0,i=t.length;o<i;o++)n[o]=e(t[o]);return n}if(t instanceof Object){n={};for(var u in t)n[u]=e(t[u]);return n}}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=e},function(t,n){var e=function(t,n,e){var r=arguments;if(void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)}}return function(){return t.apply(n,r)}};t.exports=e},function(t,n,e){function r(t){return o(t)/t.length}var o=e(3);t.exports=r},function(t,n){function e(t){return Math.max.apply(null,t)}t.exports=e},function(t,n){function e(t){return Math.min.apply(null,t)}t.exports=e},function(t,n,e){function r(t,n){return o(t,n)}var o=e(21);t.exports=r},function(t,n,e){function r(t,n,e,r){return t===n?0!==t||1/t==1/n:null!=t&&null!=n&&(t!==t?n!==n:("function"==typeof t||"object"===(void 0===t?"undefined":i(t))||"object"==(void 0===n?"undefined":i(n)))&&o(t,n,e,r))}function o(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],c=a.call(t);if(c!==a.call(n))return!1;switch(c){case"[object RegExp]":case"[object String]":return""+t==""+n;case"[object Number]":return+t!=+t?+n!=+n:0==+t?1/+t==1/n:+t==+n;case"[object Date]":case"[object Boolean]":return+t==+n;case"[object Symbol]":return Symbol.prototype.valueOf.call(t)===Symbol.prototype.valueOf.call(n)}var f="[object Array]"===c;if(!f){if("object"!=(void 0===t?"undefined":i(t))||"object"!=(void 0===n?"undefined":i(n)))return!1;var s=t.constructor,l=n.constructor;if(s!==l&&!(u(s)&&s instanceof s&&u(l)&&l instanceof l))return!1}for(var p=e.length;p--;)if(e[p]===t)return o[p]===n;if(e.push(t),o.push(n),f){var y=t.length;if(y!==n.length)return!1;for(;y--;)if(!r(t[y],n[y],e,o))return!1}else{var d=Object.keys(t),v=void 0,g=d.length;if(Object.keys(n).length!==g)return!1;for(;g--;)if(v=d[g],!n.hasOwnProperty(v)||!r(t[v],n[v],e,o))return!1}return e.pop(),o.pop(),!0}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=e(1).isFunction,a=Object.prototype.toString;t.exports=r},function(t,n){function e(t,n){return n?t+"?"+Object.keys(n).filter(function(t){return null!=n[t]}).map(function(t){return t+"="+encodeURIComponent(n[t])}).join("&"):"请检查参数是否为对象"}t.exports=e},function(t,n){function e(t){var n=t.substring(t.lastIndexOf("?")+1);if(!n)return{};var e=decodeURIComponent(n).split("&").filter(function(t){return""!==t}),r={},o=!0,i=!1,u=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done);o=!0){var f=a.value,s=f.match(/.*?(?==)/);s&&(r[s[0]]=f.substring(f.indexOf("=")+1))}}catch(t){i=!0,u=t}finally{try{!o&&c.return&&c.return()}finally{if(i)throw u}}return r}t.exports=e},function(t,n){function e(t,n,e){var r=void 0,o=void 0,i=function(){var i=this,u=arguments;if(r&&clearTimeout(r),e){var a=!r;r=setTimeout(function(){r=null},n),a&&(o=t.apply(this,arguments))}else r=setTimeout(function(){t.apply(i,u)},n);return o};return i.cancel=function(){clearTimeout(r),r=null},i}t.exports=e},function(t,n){function e(t,n,e){var r=void 0,o=0;e||(e={});var i=function(){var i=this,u=arguments,a=(new Date).getTime();o||!1!==e.leading||(o=a);var c=n-(a-o);c<=0||a<o?(r&&(clearTimeout(r),r=null),o=a,t.apply(this,arguments)):r||!1===e.trailing||(r=setTimeout(function(){o=!1===e.leading?0:(new Date).getTime(),r=null,t.apply(i,u)},c))};return i.cancel=function(){clearTimeout(r),o=0,r=null},i}t.exports=e},function(t,n){function e(){var t=navigator.userAgent.toLowerCase()||"",n=navigator.platform||"",e={Windows:"Win32"===navigator.platform||"Windows"===navigator.platform,MacOSX:"Mac68K"===navigator.platform||"MacPPC"===navigator.platform||"Macintosh"===navigator.platform||"MacIntel"==navigator.platform,Unix:"X11"===navigator.platform&&!e.Windows&&!e.MacOSX,Linux:/linux/i.test(n),ios:/iphone/i.test(t)||/ipad/i.test(t)||/ipod/i.test(t),android:/android/i.test(t),weixin:/MicroMessenger/i.test(t),other:!0};return Object.keys(e).filter(function(t){return!0===e[t]})[0]}t.exports=e},function(t,n){var e={Android:function(){return/Android/i.test(navigator.userAgent)},BlackBerry:function(){return/BlackBerry/i.test(navigator.userAgent)},iOS:function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)},Opera:function(){return/Opera Mini/i.test(navigator.userAgent)},Windows:function(){return/IEMobile/i.test(navigator.userAgent)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}};t.exports=e.any}])});