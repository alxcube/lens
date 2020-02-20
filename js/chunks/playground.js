(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playground"],{

/***/ "../lens-js/dist/lens.min.js":
/*!***********************************!*\
  !*** ../lens-js/dist/lens.min.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n={};r.r(n),r.d(n,"ReversePixelMapping",(function(){return y}));var i={};r.r(i),r.d(i,"Point",(function(){return O})),r.d(i,"EWA",(function(){return R}));var o={};r.r(o),r.d(o,"box",(function(){return V})),r.d(o,"cubicBC",(function(){return D}));var a={};r.r(a),r.d(a,"LensException",(function(){return K})),r.d(a,"InvalidArgumentsLength",(function(){return dt})),r.d(a,"UnsolvableMatrix",(function(){return Q})),r.d(a,"InvalidArgument",(function(){return Rt}));var u={};r.r(u),r.d(u,"GaussJordanElimination",(function(){return rt})),r.d(u,"LeastSquares",(function(){return st}));var s={};r.r(s),r.d(s,"gaussJordanElimination",(function(){return u})),r.d(s,"blendColors",(function(){return b})),r.d(s,"perceptibleReciprocal",(function(){return d})),r.d(s,"deg2rad",(function(){return x})),r.d(s,"rad2deg",(function(){return w}));var c={};r.r(c),r.d(c,"Affine",(function(){return At})),r.d(c,"Perspective",(function(){return It})),r.d(c,"Arc",(function(){return Vt}));var l={};r.r(l),r.d(l,"Filter",(function(){return L})),r.d(l,"filterFunctions",(function(){return o}));var h={};r.r(h),r.d(h,"AbstractImage",(function(){return zt})),r.d(h,"Canvas",(function(){return Qt})),r.d(h,"DomImage",(function(){return oe}));var f={};function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r.r(f),r.d(f,"interpolationTrait",(function(){return qt})),r.d(f,"virtualPixelTrait",(function(){return Gt})),r.d(f,"createsBestFitViewportFromApexes",(function(){return pt}));var y=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.image=e,this.mapper=r,this.resampler=n,this.bestFit=!1,this.viewport=null,this.async=!0,this.outputScaling=1}var e,r,n;return e=t,(r=[{key:"distort",value:function(){var t=this;this.resampler.setImage(this.image),this.resampler.setMapper(this.mapper);var e=this.prepareViewport(),r=Math.floor(e.x1),n=Math.floor(e.y1),i=Math.floor(e.x2),o=Math.floor(e.y2),a=this.image.getBlank(e);return this.resampler.scaling=1/this.outputScaling,a instanceof Promise?a.then((function(e){return t.performDistortionAsync(e,r,n,i,o)})):this.async?this.performDistortionAsync(a,r,n,i,o):this.performDistortion(a,r,n,i,o)}},{key:"performDistortion",value:function(t,e,r,n,i){for(var o=r;o<=i;o++)for(var a=e;a<=n;a++)t.setPixelColor(a,o,this.resampler.getResampledColor(a+.5,o+.5));return t}},{key:"performDistortionAsync",value:function(){for(var t=this,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return new Promise((function(e){return setTimeout((function(){return e(t.performDistortion.apply(t,r),0)}))}))}},{key:"prepareViewport",value:function(){var t;return(t=this.viewport?this.viewport.clone():this.bestFit&&this.mapper.hasBestFitViewport?this.mapper.getBestFitViewport(this.image.viewport):this.image.viewport.clone()).scale(this.outputScaling),t}}])&&p(e.prototype,r),n&&p(e,n),t}(),v=1e-12,m=Math.PI/2,g=2*Math.PI;function d(t){var e=t<0?-1:1;return e*t>=v?1/t:e/v}function b(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return null===n&&(n=1-e),t.map((function(t,i){return Math.round(t*e+r[i]*n)}))}function w(t){return 180*t/Math.PI}function x(t){return Math.PI*t/180}function E(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var O=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.matteColor=[0,0,0,0],this.scaling=1}var e,r,n;return e=t,(r=[{key:"setImage",value:function(t){return this.image=t,this}},{key:"setMapper",value:function(t){return this.mapper=t,this}},{key:"getResampledColor",value:function(t,e){t*=this.scaling,e*=this.scaling;var r=this.mapper.getValidity(t,e,this.scaling);if(r>0){var n=E(this.mapper.reverseMap(t,e),2),i=n[0],o=n[1],a=this.image.getInterpolatedPixelColor(i,o);return r<1?b(a,this.matteColor,r):a}return this.matteColor.slice()}}])&&A(e.prototype,r),n&&A(e,n),t}(),P={BACKGROUND:1,EDGE:3,MIRROR:4,RANDOM:5,TILE:6,TRANSPARENT:7,BLACK:9,GRAY:10,WHITE:11,HORIZONTAL_TILE:12,VERTICAL_TILE:13,HORIZONTAL_TILE_EDGE:14,VERTICAL_TILE_EDGE:15},M={AVERAGE:1,AVERAGE_9:2,AVERAGE_16:3,BACKGROUND:4,INTEGER:8};function C(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function I(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var T=1024;function j(t,e){return Math.max(0,Math.min(e,t))}function S(t,e,r,n){var i=t*t+e*e,o=t*r+e*n,a=o,u=r*r+n*n,s=t*n-e*r,c=s+s,l=i+u,h=(l+c)*(l-c),f=Math.sqrt(h>0?h:0),p=.5*(l+f),y=.5*(l-f),v=p-i,m=p-u,g=v*v,d=m*m,b=g>=d?o:m,w=g>=d?v:a,x=Math.sqrt(b*b+w*w),E=x>0?b/x:1,A=x>0?w/x:0,O=p<=1?1:Math.sqrt(p),P=y<=1?1:Math.sqrt(y);return[E*O,A*O,-A*P,E*P,O,P]}var R=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resizeFilter=e,this.support=this.resizeFilter.support*this.resizeFilter.blur,this.matteColor=[0,0,0,0],this.weightLookupTable=function(t,e){for(var r=[],n=e*Math.sqrt(1/T),i=0;i<T;i++)r[i]=t.getWeight(Math.sqrt(i)*n);return r}(this.resizeFilter,this.support),this.image=null,this.mapper=null,this.imageViewport=null,this.imageArea=null,this.imageVirtualPixelMethod=null,this.imageAverageColor=null,this.A=0,this.B=0,this.C=0,this.F=0,this.uLimit=0,this.vLimit=0,this.uWidth=0,this.slope=0,this.ellipseIsSetUp=!1,this.limitReached=!1,this.scaling=1}var e,r,n;return e=t,(r=[{key:"getResampledColor",value:function(t,e){t*=this.scaling,e*=this.scaling;var r=this.mapper.getValidity(t,e,this.scaling);if(r>0){var n=I(this.mapper.reverseMap(t,e),2),i=n[0],o=n[1];this.mapper.hasConstantPartialDerivatives?this.setupEllipseOnce.apply(this,C(this.mapper.getPartialDerivatives(t,e))):this.setupEllipse.apply(this,C(this.mapper.getPartialDerivatives(t,e)));var a=this.getWeightedAverage(i,o);return r<1?b(a,r,this.matteColor):a}return this.matteColor.slice()}},{key:"setImage",value:function(t){return this.image=t,this.imageViewport=this.image.viewport,this.imageArea=this.imageViewport.area(),this.imageVirtualPixelMethod=this.image.virtualPixelMethod,this.imageAverageColor=null,this}},{key:"setMapper",value:function(t){if(!t.hasPartialDerivatives)throw new Error("Pixel mapper must have partial derivatives to use this resampler");return this.mapper=t,this.ellipseIsSetUp=!1,this}},{key:"setupEllipseOnce",value:function(){return this.ellipseIsSetUp?this:(this.ellipseIsSetUp=!0,this.setupEllipse.apply(this,arguments))}},{key:"setupEllipse",value:function(){for(var t=this,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return this.limitReached=!1,r=r.map((function(e){return e*t.scaling})),this.initEllipse.apply(this,C(r)).scaleEllipse()}},{key:"initEllipse",value:function(){var t=S.apply(void 0,arguments),e=I(t,6),r=e[0],n=e[1],i=e[2],o=e[3],a=e[4],u=e[5];return this.A=n*n+o*o,this.B=-2*(r*n+i*o),this.C=r*r+i*i,this.F=a*u,this.F*=this.F,this.limitReached=4*this.A*this.C-this.B*this.B>17976931348623157e292,this}},{key:"scaleEllipse",value:function(){if(!this.limitReached){if(this.F*=this.support*this.support,this.uLimit=Math.sqrt(this.C*this.F/(this.A*this.C-.25*this.B*this.B)),this.vLimit=Math.sqrt(this.A*this.F/(this.A*this.C-.25*this.B*this.B)),this.uWidth=Math.sqrt(this.F/this.A),this.slope=-this.B/(2*this.A),this.uWidth*this.vLimit>4*this.imageArea)return this.limitReached=!0,this;var t=T/this.F;this.A*=t,this.B*=t,this.C*=t}return this}},{key:"getWeightedAverage",value:function(t,e){if(this.doesntNeedResampling(t,e))return this.image.getPixelColor(t,e);if(this.limitReached)switch(this.imageVirtualPixelMethod){case P.EDGE:case P.HORIZONTAL_TILE_EDGE:case P.VERTICAL_TILE_EDGE:return this.image.getInterpolatedPixelColor(t,e,M.AVERAGE);case P.HORIZONTAL_TILE:case P.VERTICAL_TILE:return this.image.getPixelColor(this.imageViewport.x1-1,this.imageViewport.y1-1);default:return this.getImageAverageColor()}for(var r=0,n=0,i=0,o=0,a=0,u=0,s=Math.ceil(e-this.vLimit),c=Math.floor(e+this.vLimit),l=t+(s-e)*this.slope-this.uWidth,h=2*this.uWidth+1,f=2*this.A,p=s;p<c;p++){var y=Math.ceil(l);l+=this.slope;for(var v=y+h,m=y-t,g=p-e,d=(this.A*m+this.B*g)*m+this.C*g*g,b=this.A*(2*m+1)+this.B*g,w=y;w<v;w++){if(d<T){var x=this.weightLookupTable[Math.floor(d)],E=I(this.image.getPixelColor(w,p),4),A=E[0],O=E[1],C=E[2],k=E[3];u+=x*k,r+=x,i+=A*(x*=k/this.image.quantumRange),o+=O*x,a+=C*x,n+=x}d+=b,b+=f}}return n&&r?[j(Math.round(i/n),this.image.quantumRange),j(Math.round(o/n),this.image.quantumRange),j(Math.round(a/n),this.image.quantumRange),j(Math.round(u/r),this.image.quantumRange)]:this.image.getInterpolatedPixelColor(t,e)}},{key:"doesntNeedResampling",value:function(t,e){switch(this.imageVirtualPixelMethod){case P.TRANSPARENT:case P.BACKGROUND:case P.BLACK:case P.WHITE:case P.GRAY:return this.limitReached||this.outOfImageBounds(t,e);case P.EDGE:return t+this.uLimit<this.imageViewport.x1&&e+this.vLimit<this.imageViewport.y1||t+this.uLimit<this.imageViewport.x1&&e-this.vLimit>this.imageViewport.y2||t-this.uLimit>this.imageViewport.x2&&e+this.vLimit<this.imageViewport.y1||t-this.uLimit>this.imageViewport.x2&&e-this.vLimit>this.imageViewport.y2;case P.HORIZONTAL_TILE:return e+this.vLimit<this.imageViewport.y1||e-this.vLimit>this.imageViewport.y2;case P.VERTICAL_TILE:return t+this.uLimit<this.imageViewport.x1||t-this.uLimit>this.imageViewport.x2;default:return!1}}},{key:"getImageAverageColor",value:function(){return null===this.imageAverageColor&&(this.imageAverageColor=this.image.getAverageColor()),this.imageAverageColor.slice()}},{key:"outOfImageBounds",value:function(t,e){return t+this.uLimit<this.imageViewport.x1||t-this.uLimit>this.imageViewport.x2||e+this.vLimit<this.imageViewport.y1||e-this.vLimit>this.imageViewport.y2}}])&&k(e.prototype,r),n&&k(e,n),t}();function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var L=function(){function t(e,r,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.filterFunction=e,this.windowingFunction=r,this.support=n,this.scale=i,this.blur=o,this.windowSupport=null!==a?a:n}var e,r,n;return e=t,(r=[{key:"getWeight",value:function(t){var e=t/this.blur;return(e<v?1:this.window(this.scale*e))*this.filter(e)}},{key:"filter",value:function(t){return this.filterFunction(t,this.support,this.windowSupport)}},{key:"window",value:function(t){return this.windowingFunction(t,this.support,this.windowSupport)}}])&&_(e.prototype,r),n&&_(e,n),t}();function V(){var t=function(){return 1};return t.filterFunctionName="box",t}function D(t,e){var r=(6-2*t)/6,n=(12*t-18+6*e)/6,i=(12-9*t-6*e)/6,o=(8*t+24*e)/6,a=(-12*t-48*e)/6,u=(6*t+30*e)/6,s=(-1*t-6*e)/6,c=function(t){return t<1?r+t*(t*(n+t*i)):t<2?o+t*(a+t*(u+t*s)):0};return c.filterFunctionName="cubicBC",c.b=t,c.c=e,c}var F={ROBIDOUX:function(){return new L(D(.3782157550939987,.3108921224530007),V(),2,1.1685777620836932,1)},ROBIDOUX_SHARP:function(){return new L(D(.2620145123990142,.3689927438004929),V(),2,1.105822933719019,1)}},B={bestFit:!1,filter:F.ROBIDOUX,resample:!0,async:!0,outputScaling:1};var N=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};try{"function"==typeof e?e=e(r,t):n=r||{},n=function(t){(t=Object.assign({},B,t)).supersample&&(t.outputScaling=t.supersample);return t}(n),e.forceBestFit&&(n.bestFit=!0);var i=function t(e){if(e instanceof Promise)return e.then((function(e){return t(e)}));if("sync"in e&&"function"==typeof e.sync)return e.sync();return e}(function(t,e,r,n){var i=new y(t,e,r);i.async=!!n.async,i.bestFit=!!n.bestFit,n.viewport&&(i.viewport=n.viewport);n.outputScaling&&(i.outputScaling=n.outputScaling,n.supersample&&(i.supersample=!0));return i}(t,e,function(t,e,r){var n;n=r.resampler?r.resampler:r.resample?new R(function(t){if("function"==typeof t.filter)return t.filter();return t.filter}(r)):new O;r.matteColor&&(n.matteColor=r.matteColor.slice());return n}(0,0,n),n).distort());return n.supersample&&1!==n.supersample?function t(e,r){if(e instanceof Promise)return e.then((function(e){return t(e,r)}));if("scale"in e&&"function"==typeof e.scale)return e.scale(r);console.warn("Method 'scale()' not found in image object. No scaling performed.");return e}(i,1/n.supersample):i}catch(t){if(n&&n.async)return Promise.reject(t);throw t}};function G(t){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function U(t){var e="function"==typeof Map?new Map:void 0;return(U=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return H(t,arguments,z(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),W(n,t)})(t)}function H(t,e,r){return(H=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&W(i,r.prototype),i}).apply(null,arguments)}function W(t,e){return(W=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var K=function(t){function e(t){var r,n,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,(r=!(i=z(e).call(this,t))||"object"!==G(i)&&"function"!=typeof i?q(n):i).name="LensException","function"==typeof Error.captureStackTrace?Error.captureStackTrace(q(r),r.constructor):r.stack=new Error(t).stack,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&W(t,e)}(e,t),e}(U(Error));function Z(t){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function J(t,e){return!e||"object"!==Z(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function X(t){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Y(t,e){return(Y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Q=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=J(this,X(e).call(this,t))).name="UnsolvableMatrix",r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Y(t,e)}(e,t),e}(K);function $(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function tt(t,e,r,n,i){t[e][r]!==t[n][i]&&(t[e][r]+=t[n][i],t[n][i]=t[e][r]-t[n][i],t[e][r]-=t[n][i])}function et(){throw new Q("Can't solve given matrix using Gauss-Jordan method")}var rt=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.solved=!1,this.matrix=e.map((function(t){return t.slice()})),this.vectors=r.map((function(t){return t.slice()}))}var e,r,n;return e=t,(r=[{key:"solve",value:function(){if(this.solved)return this;this.validate();for(var t=this.matrix,e=this.vectors,r=t.length,n=e.length,i=new Array(r).fill(0),o=new Array(r).fill(0),a=new Array(r).fill(0),u=0,s=0,c=0;c<r;c++){for(var l=0,h=0;h<r;h++)if(1!==a[h])for(var f=0;f<r;f++)0!==a[f]?a[f]>1&&et():Math.abs(t[h][f])>=l&&(l=Math.abs(t[h][f]),s=h,u=f);if(a[u]++,s!==u){for(var p=0;p<r;p++)tt(t,s,p,u,p);for(var y=0;y<n;y++)tt(e,y,s,y,u)}o[c]=s,i[c]=u,0===t[u][u]&&et();var v=d(t[u][u]);t[u][u]=1;for(var m=0;m<r;m++)t[u][m]*=v;for(var g=0;g<n;g++)e[g][u]*=v;for(var b=0;b<r;b++)if(b!==u){var w=t[b][u];t[b][u]=0;for(var x=0;x<r;x++)t[b][x]-=w*t[u][x];for(var E=0;E<n;E++)e[E][b]-=w*e[E][u]}}for(var A=r-1;A>=0;A--)if(i[A]!==o[A])for(var O=0;O<r;O++)tt(t,O,o[A],O,i[A]);return this.solved=!0,this}},{key:"getVectors",value:function(){return this.vectors.map((function(t){return t.slice()}))}},{key:"validate",value:function(){var t=this.matrix.length;return this.matrix.forEach((function(e){if(e.length!==t)throw new Error("Matrix must be square")})),this.vectors.forEach((function(e){if(e.length!==t)throw new Error("Vectors must be the same length as matrix rank")})),this}}])&&$(e.prototype,r),n&&$(e,n),t}();function nt(t){return(nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function it(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function ot(t,e){return!e||"object"!==nt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function at(t){return(at=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ut(t,e){return(ut=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var st=function(t){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=[],i=[],o=0;o<t;o++)n.push(new Array(t).fill(0));for(var a=0;a<r;a++)i.push(new Array(t).fill(0));return ot(this,at(e).call(this,n,i))}var r,n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ut(t,e)}(e,t),r=e,(n=[{key:"addTerms",value:function(t,e){for(var r=this.matrix.length,n=0;n<r;n++){for(var i=0;i<r;i++)this.matrix[i][n]+=t[i]*t[n];for(var o=0;o<this.vectors.length;o++)this.vectors[o][n]+=e[o]*t[n]}return this}}])&&it(r.prototype,n),i&&it(r,i),e}(rt);function ct(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var lt=function(){function t(e,r,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x1=e,this.y1=r,this.x2=n,this.y2=i}var e,r,n;return e=t,(r=[{key:"width",value:function(){return this.x2-this.x1+1}},{key:"height",value:function(){return this.y2-this.y1+1}},{key:"area",value:function(){return this.width()*this.height()}},{key:"contains",value:function(t,e){return t>=this.x1&&t<=this.x2&&e>=this.y1&&e<=this.y2}},{key:"expand",value:function(t,e){return this.x1=Math.min(this.x1,t),this.x2=Math.max(this.x2,t),this.y1=Math.min(this.y1,e),this.y2=Math.max(this.y2,e),this}},{key:"clone",value:function(){return new this.constructor(this.x1,this.y1,this.x2,this.y2)}},{key:"fixBounds",value:function(){return this.x1=Math.floor(this.x1-.5),this.y1=Math.floor(this.y1-.5),this.x2=Math.ceil(this.x2-.5),this.y2=Math.ceil(this.y2-.5),this}},{key:"scale",value:function(t){return this.x1=Math.round(this.x1*t),this.y1=Math.round(this.y1*t),this.x2=Math.round(this.x2*t),this.y2=Math.round(this.y2*t),this}},{key:"reset",value:function(){var t=this.width(),e=this.height();return this.x1=0,this.y1=0,this.x2=this.x1+t-1,this.y2=this.y1+e-1,this}},{key:"offset",value:function(t,e){return this.x1+=t,this.y1+=e,this.x2+=t,this.y2+=e,this}}])&&ct(e.prototype,r),n&&ct(e,n),t}();function ht(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ft(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var pt={getBestFitViewport:function(t){var e=this,r=t.x1,n=t.y1,i=t.x2+1,o=t.y2+1,a=ft(this.forwardMap(r,n),2),u=a[0],s=a[1],c=new lt(u,s,u,s);return[[i,n],[i,o],[r,o]].forEach((function(t){return c.expand.apply(c,ht(e.forwardMap.apply(e,ht(t))))})),c.fixBounds(),c}};function yt(t){return(yt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function vt(t,e){return!e||"object"!==yt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function mt(t){return(mt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function gt(t,e){return(gt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var dt=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=vt(this,mt(e).call(this,t))).name="InvalidArgumentsLength",r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&gt(t,e)}(e,t),e}(K);function bt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function wt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function xt(t,e,r){return[r[0]*t+r[1]*e+r[2],r[3]*t+r[4]*e+r[5]]}var Et=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.matrix=e,this.forwardMatrix=this.constructor.invertAffineMatrix(e),this.hasPartialDerivatives=!0,this.hasConstantPartialDerivatives=!0,this.hasBestFitViewport=!0}var e,r,n;return e=t,n=[{key:"fromControlPoints",value:function(e){if(e.length%4!=0)throw new dt("Number of arguments must be multiple of 4 and at least 4 arguments (1 control point) expected. ".concat(e.length," arguments given."));if(4===e.length)return new t([1,0,e[0]-e[2],0,1,e[1]-e[3]]);for(var r=new st(3,2),n=0;n<e.length;n+=4){var i=bt(e.slice(n,n+4),4),o=i[0],a=i[1],u=i[2],s=i[3];r.addTerms([u,s,1],[o,a])}8===e.length&&r.addTerms([e[2]-(e[7]-e[3]),e[3]+(e[6]-e[2]),1],[e[0]-e[5]+e[1],e[1]+e[4]-e[0]]);var c=r.solve().getVectors();return new t(c[0].concat(c[1]))}},{key:"fromForwardMatrix",value:function(e){return new t(this.invertAffineMatrix(e))}},{key:"invertAffineMatrix",value:function(t){var e=d(t[0]*t[4]-t[1]*t[3]);return[e*t[4],e*-t[1],e*(t[1]*t[5]-t[2]*t[4]),e*-t[3],e*t[0],e*(t[2]*t[3]-t[0]*t[5])]}}],(r=[{key:"reverseMap",value:function(t,e){return xt(t,e,this.matrix)}},{key:"getValidity",value:function(t,e){return 1}},{key:"getPartialDerivatives",value:function(t,e){return[this.matrix[0],this.matrix[1],this.matrix[3],this.matrix[4]]}},{key:"forwardMap",value:function(t,e){return xt(t,e,this.forwardMatrix)}}])&&wt(e.prototype,r),n&&wt(e,n),t}();Object.assign(Et.prototype,pt);var At=Et;function Ot(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Pt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Mt(t,e,r){var n=r[0]*t+r[1]*e+r[2],i=r[3]*t+r[4]*e+r[5],o=r[6]*t+r[7]*e+1;return[n/o,i/o]}var Ct=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.matrix=e,this.denominator=r,this.forwardMatrix=this.constructor.invertPerspectiveMatrix(e),this.hasPartialDerivatives=!0,this.hasConstantPartialDerivatives=!1,this.hasBestFitViewport=!0}var e,r,n;return e=t,n=[{key:"fromControlPoints",value:function(e){if(e.length<16||e.length%4!=0)throw new dt("Number of arguments must be multiple of 4 and at least 16 arguments (4 control points) expected. ".concat(e.length," arguments given."));for(var r=new st(8,1),n=0;n<e.length;n+=4){var i=Ot(e.slice(n,n+4),4),o=i[0],a=i[1],u=i[2],s=i[3];r.addTerms([u,s,1,0,0,0,-u*o,-s*o],[o]).addTerms([0,0,0,u,s,1,-u*a,-s*a],[a])}var c=r.solve().getVectors()[0];return new t(c,c[6]*e[2]+c[7]*e[3]+1<0?-1:1)}},{key:"fromForwardMatrix",value:function(e){var r=this.invertPerspectiveMatrix(e);return new t(r,r[6]*e[2]+r[7]*e[5]+1<0?-1:1)}},{key:"invertPerspectiveMatrix",value:function(t){var e=d(t[0]*t[4]-t[3]*t[1]);return[e*(t[4]-t[7]*t[5]),e*(t[7]*t[2]-t[1]),e*(t[1]*t[5]-t[4]*t[2]),e*(t[6]*t[5]-t[3]),e*(t[0]-t[6]*t[2]),e*(t[3]*t[2]-t[0]*t[5]),e*(t[3]*t[7]-t[6]*t[4]),e*(t[6]*t[1]-t[0]*t[7])]}}],(r=[{key:"reverseMap",value:function(t,e){return Mt(t,e,this.matrix)}},{key:"getValidity",value:function(t,e,r){var n=this.matrix[6]*t+this.matrix[7]*e+1,i=n*this.denominator<0?0:1,o=2*Math.abs(n),a=Math.abs(this.matrix[6]),u=Math.abs(this.matrix[7]);return a>u?o<a&&(i=.5-this.denominator*n/(this.matrix[6]*r)):o<u&&(i=.5-this.denominator*n/(this.matrix[7]*r)),i}},{key:"getPartialDerivatives",value:function(t,e){var r=this.matrix[0]*t+this.matrix[1]*e+this.matrix[2],n=this.matrix[3]*t+this.matrix[4]*e+this.matrix[5],i=this.matrix[6]*t+this.matrix[7]*e+1,o=Math.pow(1/i,2);return[(i*this.matrix[0]-r*this.matrix[6])*o,(i*this.matrix[1]-r*this.matrix[7])*o,(i*this.matrix[3]-n*this.matrix[6])*o,(i*this.matrix[4]-n*this.matrix[7])*o]}},{key:"forwardMap",value:function(t,e){return Mt(t,e,this.forwardMatrix)}}])&&Pt(e.prototype,r),n&&Pt(e,n),t}();Object.assign(Ct.prototype,pt);var It=Ct;function kt(t){return(kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Tt(t,e){return!e||"object"!==kt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function jt(t){return(jt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function St(t,e){return(St=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Rt=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=Tt(this,jt(e).call(this,t))).name="InvalidArgument",r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&St(t,e)}(e,t),e}(K);function _t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Lt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var Vt=function(){function t(e,r,n,i,o,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.viewport=e,this.c0=r,this.c1=n,this.c2=i,this.c3=o,this.c4=a,this.angleToWidth=g*this.viewport.width()/this.c1,this.radiusToHeight=this.viewport.height()/this.c3,this.hasPartialDerivatives=!0,this.hasConstantPartialDerivatives=!1,this.hasBestFitViewport=!0,this.forceBestFit=!0}var e,r,n;return e=t,n=[{key:"fromArguments",value:function(e,r){if(r.length>=1&&r[0]<v)throw new Rt("Angle too small");if(r.length>=3&&r[2]<v)throw new Rt("Outer radius too small");var n,i,o,a,u;return n=-m,i=r.length>=1?x(r[0]):m,r.length>=2&&(n+=x(r[1])),n/=g,n-=Math.round(n),n*=g,a=e.height()-1,o=e.width()/i+a/2,r.length>=3&&(r.length>=4?a=r[2]-r[3]:a*=r[2]/o,o=r[2]),u=(e.width()-1)/2,new t(e,n,i,o,a,u)}}],(r=[{key:"reverseMap",value:function(t,e){var r=_t(this.getUV(t,e),2),n=r[0],i=r[1];return[n=n*this.angleToWidth+this.c4+this.viewport.x1+.5,i=(this.c2-i)*this.radiusToHeight+this.viewport.y1]}},{key:"getValidity",value:function(t,e){return 1}},{key:"getPartialDerivatives",value:function(t,e){var r=_t(this.getUV(t,e),2),n=(r[0],r[1]);return n>v?[this.angleToWidth/(g*n),0,0,this.radiusToHeight]:[2*this.viewport.width(),0,0,this.radiusToHeight]}},{key:"getBestFitViewport",value:function(t){var e=this.c0-this.c1/2,r=Math.cos(e),n=Math.sin(e),i=this.c2*r,o=this.c2*n,a=new lt(i,o,i,o);for(i=(this.c2-this.c3)*r,o=(this.c2-this.c3)*n,a.expand(i,o),e=this.c0+this.c1/2,r=Math.cos(e),n=Math.sin(e),i=this.c2*r,o=this.c2*n,a.expand(i,o),i=(this.c2-this.c3)*r,o=(this.c2-this.c3)*n,a.expand(i,o),e=Math.ceil((this.c0-this.c1/2)/m)*m;e<this.c0+this.c1/2;e+=m)r=Math.cos(e),n=Math.sin(e),i=this.c2*r,o=this.c2*n,a.expand(i,o);return a.fixBounds(),a}},{key:"getUV",value:function(t,e){var r;return r=(Math.atan2(e,t)-this.c0)/g,[r-=Math.round(r),Math.hypot(t,e)]}}])&&Lt(e.prototype,r),n&&Lt(e,n),t}();function Dt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Ft(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Bt(t,e,r,n){return[Math.max(0,Math.min(r-1,t)),Math.max(0,Math.min(n-1,e))]}function Nt(t,e,r,n){var i=t%r,o=e%n;return[i<0?r+i:i,o<0?n+o:o]}var Gt={getVirtualPixelColor:function(t,e,r){switch(r){case P.BACKGROUND:return this.backgroundColor.slice();case P.EDGE:return this.getImagePixelColor.apply(this,Ft(Bt(t,e,this.width,this.height)));case P.MIRROR:var n=Dt(Nt(t,e,2*this.width,2*this.height),2),i=n[0],o=n[1];return i>this.width-1&&(i=this.width-(i-this.width)-1),o>this.height-1&&(o=this.height-(o-this.height)-1),this.getImagePixelColor(i,o);case P.TILE:return this.getImagePixelColor.apply(this,Ft(Nt(t,e,this.width,this.height)));case P.TRANSPARENT:default:return[0,0,0,0];case P.BLACK:return[0,0,0,this.quantumRange];case P.WHITE:return new Array(4).fill(this.quantumRange);case P.GRAY:return new Array(3).fill(Math.round(this.quantumRange/2)).concat([this.quantumRange]);case P.HORIZONTAL_TILE:case P.HORIZONTAL_TILE_EDGE:return e<0||e>=this.height?r===P.HORIZONTAL_TILE?this.backgroundColor.slice():this.getImagePixelColor.apply(this,Ft(Bt(t,e,this.width,this.height))):this.getImagePixelColor.apply(this,Ft(Nt(t,e,this.width,this.height)));case P.VERTICAL_TILE:case P.VERTICAL_TILE_EDGE:return t<0||t>=this.width?r===P.VERTICAL_TILE?this.backgroundColor.slice():this.getImagePixelColor.apply(this,Ft(Bt(t,e,this.width,this.height))):this.getImagePixelColor.apply(this,Ft(Nt(t,e,this.width,this.height)));case P.RANDOM:return this.getImagePixelColor(Math.floor(Math.random()*this.width),Math.floor(Math.random()*this.height))}}},qt={getInterpolatedPixelColor:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.interpolationMethod;switch(r){case M.AVERAGE:return this.interpolateAverage(t,e,2);case M.AVERAGE_9:return this.interpolateAverage(t,e,3);case M.AVERAGE_16:return this.interpolateAverage(t,e,4);case M.BACKGROUND:return this.backgroundColor.slice();case M.INTEGER:default:return this.getPixelColor(Math.floor(t),Math.floor(e))}},interpolateAverage:function(t,e){var r,n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;switch(i){case 2:r=Math.floor(t),n=Math.floor(e);break;case 3:r=Math.floor(t+.5)-1,n=Math.floor(e+.5)-1;break;case 4:r=Math.floor(t)-1,n=Math.floor(e)-1;break;default:throw new Error("Param 'count' must be integer between 2 and 4.")}for(var o=r+i,a=n+i,u=[0,0,0,0],s=n;s<a;s++)for(var c=r;c<o;c++)this.getPixelColor(t,e).forEach((function(t,e){return u[e]+=t}));var l=1/(i*i);return u.map((function(t){return Math.round(t*l)}))}};function Ut(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Ht(t){throw new Error("".concat(t,"() is abstract method and must be implemented by child class"))}var Wt=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=e,this.height=r,this.viewport=new lt(0,0,this.width-1,this.height-1),this.backgroundColor=[0,0,0,0],this.virtualPixelMethod=P.TRANSPARENT,this.quantumRange=255,this.interpolationMethod=M.INTEGER}var e,r,n;return e=t,(r=[{key:"getPixelColor",value:function(t,e){return t=Math.floor(t-this.viewport.x1),e=Math.floor(e-this.viewport.y1),t>=0&&t<this.width&&e>=0&&e<this.height?this.getImagePixelColor(t,e):this.getVirtualPixelColor(t,e,this.virtualPixelMethod)}},{key:"setPixelColor",value:function(t,e,r){if(t=Math.floor(t-this.viewport.x1),e=Math.floor(e-this.viewport.y1),t>=0&&t<this.width&&e>=0&&e<this.height)return this.setImagePixelColor(t,e,r),this;throw new Error("Given coords (".concat(t,", ").concat(e,") is out of image bounds"))}},{key:"getBlank",value:function(t){var e=this.prepareBlank(t.width(),t.height());return e instanceof Promise?e.then((function(e){return e.viewport=t,e})):(e.viewport=t,e)}},{key:"scale",value:function(t){var e=this.viewport.clone();e.scale(t);var r=this.resize(e.width(),e.height());return r instanceof Promise?r.then((function(){return r.viewport=e,r})):(r.viewport=e,r)}},{key:"sync",value:function(){return this}},{key:"getImagePixelColor",value:function(t,e){Ht("getImagePixelColor")}},{key:"setImagePixelColor",value:function(t,e,r){Ht("setImagePixelColor")}},{key:"prepareBlank",value:function(t,e){Ht("prepareBlank")}},{key:"getAverageColor",value:function(){Ht("getAverageColor")}},{key:"resize",value:function(t,e){Ht("resize")}}])&&Ut(e.prototype,r),n&&Ut(e,n),t}();Object.assign(Wt.prototype,Gt),Object.assign(Wt.prototype,qt);var zt=Wt;function Kt(t){return(Kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Zt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Jt(t,e){return!e||"object"!==Kt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Xt(t){return(Xt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Yt(t,e){return(Yt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Qt=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=Jt(this,Xt(e).call(this,t.width,t.height))).canvas=t,r.imageData=t.getContext("2d").getImageData(0,0,t.width,t.height),r.data=r.imageData.data,r}var r,n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Yt(t,e)}(e,t),r=e,(n=[{key:"getImagePixelColor",value:function(t,e){var r=4*(e*this.width+t);return Array.prototype.slice.call(this.data,r,r+4)}},{key:"setImagePixelColor",value:function(t,e,r){var n=this,i=4*(e*this.width+t);r.forEach((function(t,e){return n.data[i+e]=t}))}},{key:"prepareBlank",value:function(t,e){var r=document.createElement("canvas");return r.width=t,r.height=e,new this.constructor(r)}},{key:"sync",value:function(){return this.canvas.getContext("2d").putImageData(this.imageData,0,0),this}},{key:"getAverageColor",value:function(){var t=document.createElement("canvas");return t.width=1,t.height=1,t.getContext("2d").drawImage(this.canvas,0,0,this.width,this.height,0,0,1,1),Array.prototype.slice.call(t.getContext("2d").getImageData(0,0,1,1).data)}},{key:"resize",value:function(t,e){var r=document.createElement("canvas");return r.width=t,r.height=e,r.getContext("2d").drawImage(this.canvas,0,0,this.width,this.height,0,0,t,e),new this.constructor(r)}}])&&Zt(r.prototype,n),i&&Zt(r,i),e}(zt);function $t(t){return($t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function te(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function ee(t,e){return!e||"object"!==$t(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function re(t,e,r){return(re="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=ne(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(r):i.value}})(t,e,r||t)}function ne(t){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ie(t,e){return(ie=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var oe=function(t){function e(t){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=document.createElement("canvas");return n.width=t.width,n.height=t.height,n.getContext("2d").drawImage(t,0,0),(r=ee(this,ne(e).call(this,n))).image=t,r}var r,n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ie(t,e)}(e,t),r=e,(n=[{key:"prepareBlank",value:function(t,e){return new this.constructor(new Image(t,e))}},{key:"sync",value:function(){var t=this;return re(ne(e.prototype),"sync",this).call(this),new Promise((function(e){t.image.onload=function(){return e(t)},t.image.src=t.canvas.toDataURL()}))}},{key:"resize",value:function(t,e){var r=this;return this.sync().then((function(){return new Promise((function(n){var i=document.createElement("canvas");i.width=t,i.height=e,i.getContext("2d").drawImage(r.image,0,0,r.width,r.height,0,0,t,e);var o=new Image(t,e);o.onload=function(){var t=new r.constructor(o);n(t)},o.src=i.toDataURL()}))}))}}])&&te(r.prototype,n),i&&te(r,i),e}(Qt);function ae(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ue={AFFINE:function(t){return At.fromControlPoints(t)},AFFINE_PROJECTION:function(t){var e=ae(t,6),r=e[0],n=e[1],i=e[2],o=e[3],a=e[4],u=e[5];return At.fromForwardMatrix([r,i,a,n,o,u])},PERSPECTIVE:function(t){return t.length<16?(console.warn("Perspective distortion requires at least 4 controls points mapping (u, v) -> (x, y). Affine distortion will be used."),At.fromControlPoints(t)):It.fromControlPoints(t)},PERSPECTIVE_PROJECTION:function(t){return It.fromForwardMatrix(t)},ARC:function(t,e){return Vt.fromArguments(e.viewport,t)}};function se(t,e){ue[t]=e}function ce(t){delete ue[t]}var le=ue;r.d(e,"VERSION",(function(){return he})),r.d(e,"distort",(function(){return N})),r.d(e,"distorter",(function(){return n})),r.d(e,"distortion",(function(){return c})),r.d(e,"exception",(function(){return a})),r.d(e,"filter",(function(){return l})),r.d(e,"filterPresets",(function(){return F})),r.d(e,"image",(function(){return h})),r.d(e,"mixins",(function(){return f})),r.d(e,"resampler",(function(){return i})),r.d(e,"util",(function(){return s})),r.d(e,"interpolation",(function(){return M})),r.d(e,"vpx",(function(){return P})),r.d(e,"Viewport",(function(){return lt})),r.d(e,"distorts",(function(){return le})),r.d(e,"registerDistortionResolver",(function(){return se})),r.d(e,"unregisterDistortionResolver",(function(){return ce})),r.d(e,"EPSILON",(function(){return v})),r.d(e,"MAXIMUM_VALUE",(function(){return 17976931348623157e292})),r.d(e,"M_PI2",(function(){return m})),r.d(e,"M_2PI",(function(){return g}));var he="0.1.0"}])}));
//# sourceMappingURL=lens.min.js.map

/***/ }),

/***/ "../lens-js/lib/constants.js":
/*!***********************************!*\
  !*** ../lens-js/lib/constants.js ***!
  \***********************************/
/*! exports provided: EPSILON, MAXIMUM_VALUE, M_PI2, M_2PI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAXIMUM_VALUE", function() { return MAXIMUM_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M_PI2", function() { return M_PI2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M_2PI", function() { return M_2PI; });
/**
 * @type {number}
 * @memberOf lens
 */
const EPSILON = 1.0e-12;
/**
 * @type {number}
 * @memberOf lens
 */
const MAXIMUM_VALUE = 1.79769313486231570E+308;

/**
 * Pi/2
 *
 * @type {number}
 * @memberOf lens
 */
const M_PI2 = Math.PI / 2;

/**
 * Pi * 2
 *
 * @memberOf lens
 * @type {number}
 */
const M_2PI = Math.PI * 2;



/***/ }),

/***/ "../lens-js/lib/distort.js":
/*!*********************************!*\
  !*** ../lens-js/lib/distort.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _distorter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distorter */ "../lens-js/lib/distorter/index.js");
/* harmony import */ var _resampler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resampler */ "../lens-js/lib/resampler/index.js");
/* harmony import */ var _filter_presets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-presets */ "../lens-js/lib/filter-presets.js");




let defaultOptions = {
  bestFit: false,
  filter: _filter_presets__WEBPACK_IMPORTED_MODULE_2__["default"].ROBIDOUX,
  resample: true,
  async: true,
  outputScaling: 1
};

/**
 * @function
 * @name distort
 * @memberOf lens
 * @variation 2
 *
 * @param {ImageInterface} image
 * @param {DistortionInterface} distortion
 * @param {DistortionOptions} options
 *
 * @returns {ImageInterface|Promise<ImageInterface>}
 */

/**
 * Performs distortion of image
 *
 * @memberOf lens
 * @param {ImageInterface} image
 * @param {lens.distorts|lens~distortionResolver} distortion
 * @param {array} args
 * @param {DistortionOptions} [options]
 *
 * @returns {ImageInterface|Promise<ImageInterface>}
 */
function distort(image, distortion, args, options = {}) {
  try {
    if (typeof distortion === 'function') {
      distortion  = distortion(args, image);
    } else {
      options     = args || {};
    }

    options = makeOptions(options);

    if (distortion.forceBestFit) {
      options.bestFit = true;
    }

    let distorted = sync(
      makeDistorter(
        image,
        distortion,
        makeResampler(image, distortion, options),
        options
      ).distort()
    );

    if (options.supersample && options.supersample !== 1) {
      return scaleSupersampled(distorted, 1 / options.supersample);
    }

    return distorted;
  } catch (e) {
    if (options && options.async) {
      return Promise.reject(e);
    }

    throw e;
  }
}

/**
 * Sync ImageInterface internal data storage with image object.
 *
 * @private
 * @param {ImageInterface|Promise<ImageInterface>} distorted
 * @returns {ImageInterface|Promise<ImageInterface>}
 */
function sync(distorted) {
  if (distorted instanceof Promise) {
    return distorted.then(distorted => sync(distorted));
  }

  if ('sync' in distorted && typeof distorted.sync === 'function') {
    return distorted.sync();
  }

  return distorted;
}

/**
 * Scales supersampled image back to normal size.
 *
 * @private
 * @param {ImageInterface|Promise<ImageInterface>} supersampled
 * @param {number} scale
 * @returns {ImageInterface|Promise<ImageInterface>}
 */
function scaleSupersampled(supersampled, scale) {
  if (supersampled instanceof Promise) {
    return supersampled.then(supersampled => scaleSupersampled(supersampled, scale));
  }

  if ('scale' in supersampled && typeof supersampled.scale === 'function') {
    return supersampled.scale(scale);
  } else {
    console.warn(`Method 'scale()' not found in image object. No scaling performed.`);
  }

  return supersampled;
}

/**
 * Makes valid options for distortion
 *
 * @private
 * @param {DistortionOptions} options
 * @returns {DistortionOptions}
 */
function makeOptions(options) {
  options = Object.assign({}, defaultOptions, options);

  if (options.supersample) {
    options.outputScaling = options.supersample;
  }

  return options;
}

/**
 * Makes image distorter
 *
 * @private
 * @param {ImageInterface} image
 * @param {DistortionInterface} distortion
 * @param {ResamplerInterface} resampler
 * @param {DistortionOptions} options
 * @returns {ReversePixelMapping}
 */
function makeDistorter(image, distortion, resampler, options) {
  const dist = new _distorter__WEBPACK_IMPORTED_MODULE_0__["ReversePixelMapping"](image, distortion, resampler);
  dist.async = !!options.async;
  dist.bestFit = !!options.bestFit;

  if (options.viewport) {
    dist.viewport = options.viewport;
  }

  if (options.outputScaling) {
    dist.outputScaling = options.outputScaling;

    if (options.supersample) {
      dist.supersample = true;
    }
  }

  return dist;
}

/**
 * Makes resampler
 *
 * @private
 * @param {ImageInterface} image
 * @param {DistortionInterface} distortion
 * @param {DistortionOptions} options
 * @returns {ResamplerInterface}
 */
function makeResampler(image, distortion, options) {
  let rsm;

  if (options.resampler) {
    rsm = options.resampler;
  } else if (options.resample) {
    rsm = new _resampler__WEBPACK_IMPORTED_MODULE_1__["EWA"](makeFilter(options));
  } else {
    rsm = new _resampler__WEBPACK_IMPORTED_MODULE_1__["Point"]();
  }

  if (options.matteColor) {
    rsm.matteColor = options.matteColor.slice();
  }

  return rsm;
}

/**
 * Makes filter
 *
 * @private
 * @param {DistortionOptions} options
 * @returns {FilterInterface}
 */
function makeFilter(options) {
  if (typeof options.filter === 'function') {
    return options.filter();
  }

  return options.filter;
}

/* harmony default export */ __webpack_exports__["default"] = (distort);

/***/ }),

/***/ "../lens-js/lib/distorter/index.js":
/*!*****************************************!*\
  !*** ../lens-js/lib/distorter/index.js ***!
  \*****************************************/
/*! exports provided: ReversePixelMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reverse_pixel_mapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reverse-pixel-mapping */ "../lens-js/lib/distorter/reverse-pixel-mapping.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReversePixelMapping", function() { return _reverse_pixel_mapping__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * Distorter namespace
 *
 * @namespace lens.distorter
 */



/***/ }),

/***/ "../lens-js/lib/distorter/reverse-pixel-mapping.js":
/*!*********************************************************!*\
  !*** ../lens-js/lib/distorter/reverse-pixel-mapping.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Reverse pixel mapping.
 *
 * @memberOf lens.distorter
 * @see {@link https://www.imagemagick.org/Usage/distorts/#mapping Reverse pixel mapping details at ImageMagick docs}
 * @tutorial 02.02.reverse-pixel-mapping
 */
class ReversePixelMapping {

  /**
   *
   * @param {ImageInterface} image Image to be distorted.
   * @param {DistortionInterface} distortion Distortion to be performed.
   * @param {ResamplerInterface} resampler Color resampler.
   */
  constructor(image, distortion, resampler) {
    /**
     * Image being distorted.
     * @type {ImageInterface}
     */
    this.image = image;

    /**
     * Distortion.
     * @type {DistortionInterface}
     */
    this.mapper = distortion;

    /**
     * Resampler.
     * @type {ResamplerInterface}
     */
    this.resampler = resampler;

    /**
     * If set to true, try to calculate best fit viewport.
     * @type {boolean}
     */
    this.bestFit = false;

    /**
     * Override output viewport.
     * @type {lens.Viewport|null}
     */
    this.viewport = null;

    /**
     * Run distortion async.
     * @type {boolean}
     */
    this.async = true;

    /**
     * Output image scaling.
     * @type {number}
     */
    this.outputScaling = 1;
  }

  /**
   * Distorts image.
   *
   * @returns {Promise<ImageInterface>|ImageInterface} New instance of ImageInterface with distorted image or Promise
   * that resolves distorted ImageInterface instance.
   */
  distort() {
    this.resampler.setImage(this.image);
    this.resampler.setMapper(this.mapper);

    const viewport = this.prepareViewport();
    const x1 = Math.floor(viewport.x1);
    const y1 = Math.floor(viewport.y1);
    const x2 = Math.floor(viewport.x2);
    const y2 = Math.floor(viewport.y2);

    const canvas = this.image.getBlank(viewport);

    this.resampler.scaling = 1 / this.outputScaling;

    if (canvas instanceof Promise) {
      return canvas.then(canvas => this.performDistortionAsync(canvas, x1, y1, x2, y2));
    } else if (this.async) {
      return this.performDistortionAsync(canvas, x1, y1, x2, y2);
    }

    return this.performDistortion(canvas, x1, y1, x2, y2);
  }

  /**
   * @protected
   * @param {ImageInterface} canvas
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @returns {ImageInterface}
   */
  performDistortion(canvas, x1, y1, x2, y2) {
    for (let y = y1; y <= y2; y++) {
      for (let x = x1; x <= x2; x++) {
        canvas.setPixelColor(x, y, this.resampler.getResampledColor(x + 0.5, y + 0.5));
      }
    }

    return canvas;
  }

  performDistortionAsync(...args) {
    return new Promise(resolve => setTimeout(() => resolve(this.performDistortion(...args), 0)));
  }

  /**
   * @protected
   * @returns {lens.Viewport}
   */
  prepareViewport() {
    let viewport;

    if (this.viewport) {
      viewport = this.viewport.clone();
    } else if (this.bestFit && this.mapper.hasBestFitViewport) {
      viewport = this.mapper.getBestFitViewport(this.image.viewport);
    } else {
      viewport = this.image.viewport.clone();
    }

    viewport.scale(this.outputScaling);

    return viewport;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ReversePixelMapping);

/***/ }),

/***/ "../lens-js/lib/distortion/affine.js":
/*!*******************************************!*\
  !*** ../lens-js/lib/distortion/affine.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_gauss_jordan_elimination_least_squares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/gauss-jordan-elimination/least-squares */ "../lens-js/lib/util/gauss-jordan-elimination/least-squares.js");
/* harmony import */ var _mixins_creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/creates-bestFit-viewport-from-apexes */ "../lens-js/lib/mixins/creates-bestFit-viewport-from-apexes.js");
/* harmony import */ var _exception_invalid_arguments_length__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exception/invalid-arguments-length */ "../lens-js/lib/exception/invalid-arguments-length.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "../lens-js/lib/util/util.js");





/**
 * Project coordinates using projection matrix.
 *
 * @private
 * @param {number} x
 * @param {number} y
 * @param {number[]} matrix Affine matrix.
 * @returns {Point} Mapped coords pair.
 */
function map(x, y, matrix) {
  return [
    matrix[0] * x + matrix[1] * y + matrix[2],
    matrix[3] * x + matrix[4] * y + matrix[5]
  ];
}

/**
 * Affine distortion.
 *
 * @implements {DistortionInterface}
 * @memberOf lens.distortion
 * @mixes lens.mixins.createsBestFitViewportFromApexes
 * @see {@link https://www.imagemagick.org/Usage/distorts/#affine Affine distortion details at ImageMagick docs}
 * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l02443 Affine distortion at ImageMagick source}
 * @tutorial 03.01.affine
 */
class Affine {
  /**
   *
   * @param {number[]} matrix Affine matrix.
   */
  constructor(matrix) {
    this.matrix = matrix;
    this.forwardMatrix = this.constructor.invertAffineMatrix(matrix);
    this.hasPartialDerivatives = true;
    this.hasConstantPartialDerivatives = true;
    this.hasBestFitViewport = true;
  }

  /**
   * Creates affine distortion using control points array.
   *
   * @param {number[]} controlPoints Mappings of control points [u0, v0, x0, y0, ... , un, vn, xn, yn] where
   * (u*, v*) are source (x, y) point and (x*, y*) are destination (x, y) point
   * @returns {lens.distortion.Affine}
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l00501 Generating affine distortion matrix from control points at ImageMagick source}
   */
  static fromControlPoints(controlPoints) {
    if (controlPoints.length % 4 !== 0) {
      throw new _exception_invalid_arguments_length__WEBPACK_IMPORTED_MODULE_2__["default"](`Number of arguments must be multiple of 4 and at least 4 arguments (1 control point) expected. ${controlPoints.length} arguments given.`);
    }

    /*
     * handle special cases of not enough arguments
     */
    if (controlPoints.length === 4) {
      // Only 1 CP Set Given
      return new Affine([
        1, 0, controlPoints[0] - controlPoints[2],
        0, 1, controlPoints[1] - controlPoints[3]
      ]);
    } else {
      // 2 or more points (usally 3) given.
      // Solve a least squares simultaneous equation for coefficients.
      const leastSquares = new _util_gauss_jordan_elimination_least_squares__WEBPACK_IMPORTED_MODULE_0__["default"](3, 2);

      for (let i = 0; i < controlPoints.length; i += 4) {
        let [u, v, x, y] = controlPoints.slice(i, i + 4);

        leastSquares.addTerms([
          x, y, 1
        ], [u, v]);
      }

      if (controlPoints.length === 8) {
        /*
         * Only two pairs were given, but we need 3 to solve the affine.
         * Fake extra coordinates by rotating p1 around p0 by 90 degrees.
         * x2 = x0 - (y1-y0)   y2 = y0 + (x1-x0)
         */
        leastSquares.addTerms(
          [
            controlPoints[2] - (controlPoints[7] - controlPoints[3]),
            controlPoints[3] + (controlPoints[6] - controlPoints[2]),
            1
          ],
          [
            controlPoints[0] - controlPoints[5] + controlPoints[1],
            controlPoints[1] + controlPoints[4] - controlPoints[0]
          ]
        );
      }

      const vectors = leastSquares.solve().getVectors();

      return new Affine(vectors[0].concat(vectors[1]));
    }
  }

  /**
   * Creates affine distortion using affine matrix.
   *
   * @param {number[]} matrix Affine projection coefficients: [sx, rx, tx, ry, sy, ty]
   * @returns {lens.distortion.Affine}
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l00609 Generating inverted affine distortion matrix from forward affine matrix at ImageMagick source}
   */
  static fromForwardMatrix(matrix) {
    // TODO: trap test for sx*sy-rx*ry == 0 (determinant = 0, no inverse)

    return new Affine(this.invertAffineMatrix(matrix));
  }

  /**
   * Creates inverted affine matrix from affine matrix.
   *
   * @param {number[]} matrix Affine matrix.
   * @returns {number[]} Inverted affine matrix.
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l00095 Inverting affine matrix at ImageMagick source}
   */
  static invertAffineMatrix(matrix) {
    /* From "Digital Image Warping" by George Wolberg, page 50 */

    const determinant = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["perceptibleReciprocal"])(matrix[0] * matrix[4] - matrix[1] * matrix[3]);

    return [
      determinant * matrix[4],
      determinant * (-matrix[1]),
      determinant * (matrix[1] * matrix[5] - matrix[2] * matrix[4]),
      determinant * (-matrix[3]),
      determinant * matrix[0],
      determinant * (matrix[2] * matrix[3] - matrix[0] * matrix[5])
    ];
  }

  /**
   * @inheritDoc
   */
  reverseMap(x, y) {
    return map(x, y, this.matrix);
  }

  /**
   * @inheritDoc
   */
  getValidity(x, y) {
    return 1;
  }

  /**
   * @inheritDoc
   */
  getPartialDerivatives(x, y) {
    return [
      this.matrix[0],
      this.matrix[1],
      this.matrix[3],
      this.matrix[4]
    ];
  }

  /**
   * Maps source coords into destination coords.
   *
   * @param {number} x X-coordinate of source image point.
   * @param {number} y Y-coordinate of source image point.
   * @returns {Point} Forward mapped destination image coords.
   */
  forwardMap(x, y) {
    return map(x, y, this.forwardMatrix);
  }
}

Object.assign(Affine.prototype, _mixins_creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Affine);

/***/ }),

/***/ "../lens-js/lib/distortion/arc.js":
/*!****************************************!*\
  !*** ../lens-js/lib/distortion/arc.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "../lens-js/lib/constants.js");
/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exception */ "../lens-js/lib/exception/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../lens-js/lib/util/index.js");
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewport */ "../lens-js/lib/viewport.js");





/**
 * @summary Arc distortion.
 *
 * @description Note the coefficients use a center angle, so asymptotic join is
 * furthest from both sides of the source image. This also means that
 * for arc angles greater than 360 the sides of the image will be
 * trimmed equally.
 *
 * @memberOf lens.distortion
 * @implements DistortionInterface
 * @see {@link https://www.imagemagick.org/Usage/distorts/#arc Arc distortion details} at ImageMagick docs.
 * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l02561 Arc distortion} at ImageMagick
 * source.
 * @tutorial 03.03.arc
 */
class Arc {
  /**
   *
   * @param {lens.Viewport} viewport
   * @param {number} c0 Angle for center of source image.
   * @param {number} c1 Angle scale for mapping to source image.
   * @param {number} c2 Radius for top of source image.
   * @param {number} c3 Radius scale for mapping source image.
   * @param {number} c4 Center line of arc within source image.
   */
  constructor(viewport, c0, c1, c2, c3, c4) {
    this.viewport = viewport;
    this.c0 = c0;
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.c4 = c4;

    /*
     * Convert the angle_to_width and radius_to_height
     * to appropriate scaling factors, to allow faster processing
     * in the mapping function.
     */
    this.angleToWidth = _constants__WEBPACK_IMPORTED_MODULE_0__["M_2PI"] * this.viewport.width() / this.c1;
    this.radiusToHeight = this.viewport.height() / this.c3;

    this.hasPartialDerivatives = true;
    this.hasConstantPartialDerivatives = false;
    this.hasBestFitViewport = true;
    this.forceBestFit = true;
  }

  /**
   * @summary Creates arc distortion class from arguments.
   *
   * @description Arguments:  [angle, rotation, outer_radius, inner_radius]
   * All but first argument are optional.
   *
   * By default, if the radii arguments are nor provided the image radius
   * is calculated so the horizontal center-line is fits the given arc
   * without scaling.
   *
   * The output image size is ALWAYS adjusted to contain the whole image,
   * and an offset is given to position image relative to the 0,0 point of
   * the origin, allowing users to use relative positioning onto larger
   * background.
   *
   * The arguments are converted to distortion coefficients.
   *
   * @param {lens.Viewport} viewport
   * @param {number[]} args Arguments:
   * * 0: **angle** - The angle over which to arc the image side-to-side.
   * * 1: **rotation** - Angle to rotate image from vertical center.
   * * 2: **outer_radius** - Set top edge of source image at this radius.
   * * 3: **inner_radius** - Set bottom edge to this radius (radial scaling).
   * @returns {lens.distortion.Arc}
   * @throws {lens.exception.InvalidArgument} Thrown when first (angle) or third (outer radius) arguments are too small
   *
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l01095 Generating coefficients} for arc
   * distortion at ImageMagick source.
   */
  static fromArguments(viewport, args) {
    if (args.length >= 1 && args[0] < _constants__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
      throw new _exception__WEBPACK_IMPORTED_MODULE_1__["InvalidArgument"]('Angle too small');
    }

    if (args.length >= 3 && args[2] < _constants__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
      throw new _exception__WEBPACK_IMPORTED_MODULE_1__["InvalidArgument"]('Outer radius too small');
    }

    let c0, c1, c2, c3, c4;

    c0 = -_constants__WEBPACK_IMPORTED_MODULE_0__["M_PI2"]; // -90, place at top!

    if (args.length >= 1) {
      c1 = Object(_util__WEBPACK_IMPORTED_MODULE_2__["deg2rad"])(args[0]);
    } else {
      c1 = _constants__WEBPACK_IMPORTED_MODULE_0__["M_PI2"]; // zero arguments - center is at top
    }

    if (args.length >= 2) {
      c0 += Object(_util__WEBPACK_IMPORTED_MODULE_2__["deg2rad"])(args[1]);
    }

    c0 /= _constants__WEBPACK_IMPORTED_MODULE_0__["M_2PI"]; // normalize radians
    c0 -= Math.round(c0);
    c0 *= _constants__WEBPACK_IMPORTED_MODULE_0__["M_2PI"]; // de-normalize back to radians

    c3 = viewport.height() - 1;
    c2 = viewport.width() / c1 + c3 / 2;

    if (args.length >= 3) {
      if (args.length >= 4) {
        c3 = args[2] - args[3];
      } else {
        c3 *= args[2] / c2;
      }

      c2 = args[2];
    }

    c4 = (viewport.width() - 1) / 2;

    return new Arc(viewport, c0, c1, c2, c3, c4);
  }

  /**
   * @inheritDoc
   */
  reverseMap(x, y) {
    let [u, v] = this.getUV(x, y);

    // now scale the angle and radius for source image lookup point
    u = u * this.angleToWidth + this.c4 + this.viewport.x1 + 0.5;
    v = (this.c2 - v) * this.radiusToHeight + this.viewport.y1;

    //console.log(u, v, x, y);

    return [u, v];
  }

  /**
   * @inheritDoc
   */
  getValidity(x, y) {
    return 1;
  }

  /**
   * @inheritDoc
   */
  getPartialDerivatives(x, y) {
    let [u, v] = this.getUV(x, y);

    /*
     * Arc Distortion Partial Scaling Vectors
     * Are derived by mapping the perpendicular unit vectors
     * dR  and  dA*R*2PI  rather than trying to map dx and dy
     * The results is a very simple orthogonal aligned ellipse.
     */
    if (v > _constants__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
      return [this.angleToWidth / (_constants__WEBPACK_IMPORTED_MODULE_0__["M_2PI"] * v), 0, 0, this.radiusToHeight];
    } else {
      return [this.viewport.width() * 2, 0, 0, this.radiusToHeight];
    }
  }

  /**
   * Returns calculated best fit viewport for image.
   *
   * @param {lens.Viewport} viewport
   * @returns {lens.Viewport}
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l01834 Generating best fit viewport}
   * for arc distortion at ImageMagick source.
   */
  getBestFitViewport(viewport) {
    // Forward Map Corners
    let a = this.c0 - this.c1 / 2,
      ca = Math.cos(a),
      sa = Math.sin(a),
      x = this.c2 * ca,
      y = this.c2 * sa,
      vp = new _viewport__WEBPACK_IMPORTED_MODULE_3__["default"](x, y, x, y);

    x = (this.c2 - this.c3) * ca;
    y = (this.c2 - this.c3) * sa;
    vp.expand(x, y);

    a = this.c0 + this.c1 / 2;
    ca = Math.cos(a);
    sa = Math.sin(a);
    x = this.c2 * ca;
    y = this.c2 * sa;
    vp.expand(x, y);

    x = (this.c2 - this.c3) * ca;
    y = (this.c2 - this.c3) * sa;
    vp.expand(x, y);

    // Orthogonal points along top of arc
    for (
      a = Math.ceil((this.c0 - this.c1 / 2) / _constants__WEBPACK_IMPORTED_MODULE_0__["M_PI2"]) * _constants__WEBPACK_IMPORTED_MODULE_0__["M_PI2"];
      a < this.c0 + this.c1 / 2;
      a += _constants__WEBPACK_IMPORTED_MODULE_0__["M_PI2"]
    ) {
      ca = Math.cos(a);
      sa = Math.sin(a);
      x = this.c2 * ca;
      y = this.c2 * sa;
      vp.expand(x, y);
    }

    vp.fixBounds();

    return vp;
  }

  /**
   * @private
   * @param {number} x
   * @param {number} y
   * @returns {Point}
   */
  getUV(x, y) {
    let u, v;

    // what is the angle and radius in the destination image
    u = (Math.atan2(y, x) - this.c0) / _constants__WEBPACK_IMPORTED_MODULE_0__["M_2PI"];
    u -= Math.round(u);
    v = Math.hypot(x, y);

    return [u, v];
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Arc);

/***/ }),

/***/ "../lens-js/lib/distortion/index.js":
/*!******************************************!*\
  !*** ../lens-js/lib/distortion/index.js ***!
  \******************************************/
/*! exports provided: Affine, Perspective, Arc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _affine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./affine */ "../lens-js/lib/distortion/affine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Affine", function() { return _affine__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _perspective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perspective */ "../lens-js/lib/distortion/perspective.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Perspective", function() { return _perspective__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _arc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arc */ "../lens-js/lib/distortion/arc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return _arc__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/**
 * Distortion namespace
 *
 * @namespace lens.distortion
 */







/***/ }),

/***/ "../lens-js/lib/distortion/perspective.js":
/*!************************************************!*\
  !*** ../lens-js/lib/distortion/perspective.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_gauss_jordan_elimination_least_squares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/gauss-jordan-elimination/least-squares */ "../lens-js/lib/util/gauss-jordan-elimination/least-squares.js");
/* harmony import */ var _mixins_creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/creates-bestFit-viewport-from-apexes */ "../lens-js/lib/mixins/creates-bestFit-viewport-from-apexes.js");
/* harmony import */ var _exception_invalid_arguments_length__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exception/invalid-arguments-length */ "../lens-js/lib/exception/invalid-arguments-length.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "../lens-js/lib/util/util.js");





/**
 * Project coordinates using projection matrix
 *
 * @private
 * @param {number} x
 * @param {number} y
 * @param {number[]} matrix Perspective matrix.
 * @returns {Point} Mapped coords pair.
 * @tutorial 03.02.perspective
 */
function map(x, y, matrix) {
  let p = matrix[0] * x + matrix[1] * y + matrix[2],
    q = matrix[3] * x + matrix[4] * y + matrix[5],
    r = matrix[6] * x + matrix[7] * y + 1;

  return [p / r, q / r];
}

/**
 * @summary Perspective Distortion (a ratio of affine distortions).
 *
 * @description <pre>
 *
 *     p(x,y)    c0*x + c1*y + c2
 * u = ------ = ------------------
 *     r(x,y)    c6*x + c7*y + 1
 *
 *     q(x,y)    c3*x + c4*y + c5
 * v = ------ = ------------------
 *      r(x,y)    c6*x + c7*y + 1
 *
 * denominator = Sign of 'r', or the denominator affine, for the actual image.
 * This determines what part of the distorted image is 'ground'
 * side of the horizon, the other part is 'sky' or invalid.
 * Valid values are  +1.0  or  -1.0  only.
 * </pre>
 *
 * @implements {DistortionInterface}
 * @memberOf lens.distortion
 * @mixes lens.mixins.createsBestFitViewportFromApexes
 * @see {@link https://www.imagemagick.org/Usage/distorts/#perspective Perspective distortion details at ImageMagick docs}
 * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l02450 Perspective distortion at ImageMagick source}
 */
class Perspective {

  /**
   *
   * @param {number[]} reverseMatrix Perspective projection matrix for reverse pixel mapping.
   * @param {number} denominator Denominator for mapping validity calculation.
   */
  constructor(reverseMatrix, denominator) {
    this.matrix = reverseMatrix;
    this.denominator = denominator;
    this.forwardMatrix = this.constructor.invertPerspectiveMatrix(reverseMatrix);
    this.hasPartialDerivatives = true;
    this.hasConstantPartialDerivatives = false;
    this.hasBestFitViewport = true;
  }

  /**
   * Creates perspective distortion using control points array.
   *
   * @param {number[]} controlPoints Mappings of control points [u0, v0, x0, y0, ... , un, vn, xn, yn] where
   * (u*, v*) are source (x, y) point and (x*, y*) are destination (x, y) point.
   * @returns {lens.distortion.Perspective} New instance.
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l00745 Generating perspective distortion matrix from control points at ImageMagick source}
   */
  static fromControlPoints(controlPoints) {
    if (controlPoints.length < 16 || controlPoints.length % 4 !== 0) {
      throw new _exception_invalid_arguments_length__WEBPACK_IMPORTED_MODULE_2__["default"](`Number of arguments must be multiple of 4 and at least 16 arguments (4 control points) expected. ${controlPoints.length} arguments given.`);
    }

    const leastSquares = new _util_gauss_jordan_elimination_least_squares__WEBPACK_IMPORTED_MODULE_0__["default"](8, 1);

    for (let i = 0; i < controlPoints.length; i += 4) {
      let [u, v, x, y] = controlPoints.slice(i, i + 4);

      leastSquares.addTerms([
        x, y, 1,
        0, 0, 0,
        -x * u, -y * u
      ], [u])
        .addTerms([
          0, 0, 0,
          x, y, 1,
          -x * v, -y * v
        ], [v]);
    }

    const matrix = leastSquares.solve().getVectors()[0];

    /*
     * Calculate denominator! The ground-sky determination.
     * What is sign of the 'ground' in r() denominator affine function?
     * Just use any valid image coordinate (first control point) in
     * destination for determination of what part of view is 'ground'.
     */
    const denominator = matrix[6] * controlPoints[2] + matrix[7] * controlPoints[3] + 1 < 0 ? -1 : 1;

    return new Perspective(matrix, denominator);
  }

  /**
   * Creates perspective distortion using perspective matrix.
   *
   * @param {number[]} matrix Perspective matrix.
   * @returns {lens.distortion.Perspective}
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l00853 Generating inverted perspective distortion matrix from forward perspective matrix at ImageMagick docs}
   */
  static fromForwardMatrix(matrix) {
    // TODO: trap test  c0*c4-c3*c1 == 0  (determinant = 0, no inverse)
    const inverse = this.invertPerspectiveMatrix(matrix);

    /*
     * Calculate denominator! The ground-sky determination.
     * What is sign of the 'ground' in r() denominator affine function?
     * Just use any valid image coordinate in destination for determination.
     * For a forward mapped perspective the images 0,0 coord will map to
     * c2,c5 in the distorted image, so set the sign of denominator of that.
     */
    const denominator = inverse[6] * matrix[2] + inverse[7] * matrix[5] + 1 < 0 ? -1 : 1;
    return new Perspective(inverse, denominator);
  }

  /**
   * Creates inverted perspective matrix from perspective matrix.
   *
   * @param {number[]} matrix Perspective matrix.
   * @returns {number[]} Inverted perspective matrix.
   * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l00109 Inverting perspective matrix at ImageMagick source}
   */
  static invertPerspectiveMatrix(matrix) {
    const determinant = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["perceptibleReciprocal"])(matrix[0] * matrix[4] - matrix[3] * matrix[1]);

    return [
      determinant * (matrix[4] - matrix[7] * matrix[5]),
      determinant * (matrix[7] * matrix[2] - matrix[1]),
      determinant * (matrix[1] * matrix[5] - matrix[4] * matrix[2]),
      determinant * (matrix[6] * matrix[5] - matrix[3]),
      determinant * (matrix[0] - matrix[6] * matrix[2]),
      determinant * (matrix[3] * matrix[2] - matrix[0] * matrix[5]),
      determinant * (matrix[3] * matrix[7] - matrix[6] * matrix[4]),
      determinant * (matrix[6] * matrix[1] - matrix[0] * matrix[7])
    ];
  }

  /**
   * @inheritDoc
   */
  reverseMap(x, y) {
    return map(x, y, this.matrix);
  }

  /**
   * @inheritDoc
   */
  getValidity(x, y, scaling) {
    const r = this.matrix[6] * x + this.matrix[7] * y + 1;
    let validity = r * this.denominator < 0 ? 0 : 1;
    const absR = Math.abs(r) * 2;
    const absC6 = Math.abs(this.matrix[6]);
    const absC7 = Math.abs(this.matrix[7]);

    if (absC6 > absC7) {
      if (absR < absC6) {
        validity = 0.5 - this.denominator * r / (this.matrix[6] * scaling);
      }
    } else if (absR < absC7) {
      validity = 0.5 - this.denominator * r / (this.matrix[7] * scaling);
    }

    return validity;
  }

  /**
   * @inheritDoc
   */
  getPartialDerivatives(x, y) {
    const p = this.matrix[0] * x + this.matrix[1] * y + this.matrix[2],
      q = this.matrix[3] * x + this.matrix[4] * y + this.matrix[5],
      r = this.matrix[6] * x + this.matrix[7] * y + 1,
      scale = Math.pow(1 / r, 2);

    return [
      (r * this.matrix[0] - p * this.matrix[6]) * scale, // dUx
      (r * this.matrix[1] - p * this.matrix[7]) * scale, // dUy
      (r * this.matrix[3] - q * this.matrix[6]) * scale, // dVx
      (r * this.matrix[4] - q * this.matrix[7]) * scale //dVy
    ];
  }

  /**
   * Maps source coords into destination coords.
   *
   * @param {number} u X-coordinate of source image point.
   * @param {number} v Y-coordinate of source image point.
   * @returns {Point} Forward mapped destination image coords.
   */
  forwardMap(u, v) {
    return map(u, v, this.forwardMatrix);
  }
}

Object.assign(Perspective.prototype, _mixins_creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Perspective);

/***/ }),

/***/ "../lens-js/lib/distorts.js":
/*!**********************************!*\
  !*** ../lens-js/lib/distorts.js ***!
  \**********************************/
/*! exports provided: registerDistortionResolver, unregisterDistortionResolver, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDistortionResolver", function() { return registerDistortionResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterDistortionResolver", function() { return unregisterDistortionResolver; });
/* harmony import */ var _distortion_affine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distortion/affine */ "../lens-js/lib/distortion/affine.js");
/* harmony import */ var _distortion_arc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distortion/arc */ "../lens-js/lib/distortion/arc.js");
/* harmony import */ var _distortion_perspective__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distortion/perspective */ "../lens-js/lib/distortion/perspective.js");




/**
 * @summary Resolves distortion class instance using distortion arguments and optionally image.
 *
 * @callback lens~DistortionResolver
 * @param {number[]} args
 * @param {ImageInterface} [image]
 * @returns {DistortionInterface}
 */

/**
 * Make Affine distortion using control points.
 *
 * @private
 * @param {number[]} args
 * @returns {lens.distortion.Affine}
 */
function affineByControlPoints(args) {
  return _distortion_affine__WEBPACK_IMPORTED_MODULE_0__["default"].fromControlPoints(args);
}

/**
 * Make Affine distortion using affine matrix. Arguments order is as described for compatibility with ImageMagick
 * arguments.
 *
 * @private
 * @param sx
 * @param ry
 * @param rx
 * @param sy
 * @param tx
 * @param ty
 * @returns {lens.distortion.Affine}
 */
function affineByMatrix ([sx, ry, rx, sy, tx, ty]) {
  // Change arguments order.
  return _distortion_affine__WEBPACK_IMPORTED_MODULE_0__["default"].fromForwardMatrix([sx, rx, tx, ry, sy, ty]);
}

/**
 * Make perspective distortion using control points.
 * If number of control point sets is less than 4 (< 16 arguments), this will fallback to Affine distortion.
 *
 * @private
 * @param {number[]} args
 * @returns {lens.distortion.Perspective|lens.distortion.Affine}
 */
function perspectiveByControlPoints(args) {
  if (args.length < 16) {
    console.warn('Perspective distortion requires at least 4 controls points mapping (u, v) -> (x, y). Affine distortion will be used.');
    return _distortion_affine__WEBPACK_IMPORTED_MODULE_0__["default"].fromControlPoints(args);
  }

  return _distortion_perspective__WEBPACK_IMPORTED_MODULE_2__["default"].fromControlPoints(args);
}

/**
 * @private
 * @param {number[]} args
 * @returns {lens.distortion.Perspective}
 */
function perspectiveByMatrix(args) {
  return _distortion_perspective__WEBPACK_IMPORTED_MODULE_2__["default"].fromForwardMatrix(args);
}

/**
 * @private
 * @param {number[]} args
 * @param {ImageInterface} image
 * @returns {lens.distortion.Arc}
 */
function arcByArguments(args, image) {
  return _distortion_arc__WEBPACK_IMPORTED_MODULE_1__["default"].fromArguments(image.viewport, args);
}

/**
 * Distortion types.
 *
 * @enum {lens~distortionResolver}
 * @memberOf lens
 */
const distorts = {
  /**
   * Affine distortion using control points. Arguments are sets of control points mappings:
   * [u0, v0, x0, y0, ..., uN, vN, xN, yN], where u*, v* are source image coords, x*, y* are
   * destination image coords.
   */
  AFFINE: affineByControlPoints,
  /**
   * Affine distortion using forward affine matrix.
   * Arguments are affine matrix coefficients: [sx, ry, rx, sy, tx, ty]
   */
  AFFINE_PROJECTION: affineByMatrix,
  /**
   * Perspective distortion using control points. Arguments are sets of control points mappings:
   * [u0, v0, x0, y0, ..., uN, vN, xN, yN], where u*, v* are source image coords, x*, y* are
   * destination image coords.
   * If number of control point sets is less than 4 (< 16 arguments), this will fallback to Affine distortion
   * with warning message in console.
   */
  PERSPECTIVE: perspectiveByControlPoints,
  /**
   * Perspective distortion using forward perspective matrix. Arguments are perspective matrix coefficients:
   * [sx, ry, tx, rx, sy, ty, px, py].
   */
  PERSPECTIVE_PROJECTION: perspectiveByMatrix,

  /**
   * Arc distortion. Arguments are: [arcAngle, rotation, outerRadius, innerRadius]. All arguments except arcAngle
   * are optional. See {@link lens.distortion.Arc.fromArguments}
   */
  ARC: arcByArguments
};

/**
 * Register custom distortion resolver.
 *
 * @memberOf lens
 * @param {string} name
 * @param {lens~distortionResolver} resolver
 */
function registerDistortionResolver(name, resolver) {
  distorts[name]  = resolver;
}

/**
 * Unregister distortion resolver.
 *
 * @memberOf lens
 * @param {string} name
 */
function unregisterDistortionResolver(name) {
  delete distorts[name];
}



/* harmony default export */ __webpack_exports__["default"] = (distorts);

/***/ }),

/***/ "../lens-js/lib/exception/index.js":
/*!*****************************************!*\
  !*** ../lens-js/lib/exception/index.js ***!
  \*****************************************/
/*! exports provided: LensException, InvalidArgumentsLength, UnsolvableMatrix, InvalidArgument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lens_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lens-exception */ "../lens-js/lib/exception/lens-exception.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LensException", function() { return _lens_exception__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _invalid_arguments_length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalid-arguments-length */ "../lens-js/lib/exception/invalid-arguments-length.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvalidArgumentsLength", function() { return _invalid_arguments_length__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _unsolvable_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsolvable-matrix */ "../lens-js/lib/exception/unsolvable-matrix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsolvableMatrix", function() { return _unsolvable_matrix__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _invalid_argument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invalid-argument */ "../lens-js/lib/exception/invalid-argument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvalidArgument", function() { return _invalid_argument__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/**
 * Exception namespace
 *
 * @namespace lens.exception
 */









/***/ }),

/***/ "../lens-js/lib/exception/invalid-argument.js":
/*!****************************************************!*\
  !*** ../lens-js/lib/exception/invalid-argument.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lens_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lens-exception */ "../lens-js/lib/exception/lens-exception.js");


/**
 * Invalid Argument Exception.
 *
 * @memberOf lens.exception
 * @extends lens.exception.LensException
 */
class InvalidArgument extends _lens_exception__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = 'InvalidArgument';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (InvalidArgument);

/***/ }),

/***/ "../lens-js/lib/exception/invalid-arguments-length.js":
/*!************************************************************!*\
  !*** ../lens-js/lib/exception/invalid-arguments-length.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lens_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lens-exception */ "../lens-js/lib/exception/lens-exception.js");


/**
 * Exception for cases when invalid number of arguments passed
 *
 * @extends lens.exception.LensException
 * @memberOf lens.exception
 */
class InvalidArgumentsLength extends _lens_exception__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = 'InvalidArgumentsLength';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (InvalidArgumentsLength);

/***/ }),

/***/ "../lens-js/lib/exception/lens-exception.js":
/*!**************************************************!*\
  !*** ../lens-js/lib/exception/lens-exception.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Base Lens exception
 *
 * @extends Error
 * @memberOf lens.exception
 */
class LensException extends Error {

  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = 'LensException';

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (LensException);

/***/ }),

/***/ "../lens-js/lib/exception/unsolvable-matrix.js":
/*!*****************************************************!*\
  !*** ../lens-js/lib/exception/unsolvable-matrix.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lens_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lens-exception */ "../lens-js/lib/exception/lens-exception.js");


/**
 * Exception for unsolvable matrix in Gauss-Jordan elimination
 *
 * @extends lens.exception.LensException
 * @memberOf lens.exception
 */
class UnsolvableMatrix extends _lens_exception__WEBPACK_IMPORTED_MODULE_0__["default"] {

  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = 'UnsolvableMatrix';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (UnsolvableMatrix);

/***/ }),

/***/ "../lens-js/lib/filter-presets.js":
/*!****************************************!*\
  !*** ../lens-js/lib/filter-presets.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter/filter */ "../lens-js/lib/filter/filter.js");
/* harmony import */ var _filter_filter_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter/filter-functions */ "../lens-js/lib/filter/filter-functions.js");



/**
 * Filter factory.
 *
 * @callback lens~filterFactory
 * @returns {FilterInterface}
 */

/**
 * @private
 * @returns {lens.filter.Filter}
 * @constructor
 */
function ROBIDOUX() {
  return new _filter_filter__WEBPACK_IMPORTED_MODULE_0__["default"](
    Object(_filter_filter_functions__WEBPACK_IMPORTED_MODULE_1__["cubicBC"])(0.37821575509399867, 0.31089212245300067),
    Object(_filter_filter_functions__WEBPACK_IMPORTED_MODULE_1__["box"])(),
    2,
    1.1685777620836932,
    1
  );
}

/**
 * @private
 * @returns {lens.filter.Filter}
 * @constructor
 */
function ROBIDOUX_SHARP() {
  return new _filter_filter__WEBPACK_IMPORTED_MODULE_0__["default"](
    Object(_filter_filter_functions__WEBPACK_IMPORTED_MODULE_1__["cubicBC"])(0.2620145123990142, 0.3689927438004929),
    Object(_filter_filter_functions__WEBPACK_IMPORTED_MODULE_1__["box"])(),
    2,
    1.105822933719019,
    1
  );
}

/**
 * Filter presets.
 *
 * @enum {lens~filterFactory}
 * @memberOf lens
 */
const filterPresets = {
  ROBIDOUX,
  ROBIDOUX_SHARP
};

// TODO add more filter presets

/* harmony default export */ __webpack_exports__["default"] = (filterPresets);

/***/ }),

/***/ "../lens-js/lib/filter/filter-functions.js":
/*!*************************************************!*\
  !*** ../lens-js/lib/filter/filter-functions.js ***!
  \*************************************************/
/*! exports provided: box, cubicBC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "box", function() { return box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicBC", function() { return cubicBC; });
/**
 * @namespace lens.filter.filterFunctions
 */

/**
 * Makes box filter function.
 * A Box filter is a equal weighting function (all weights equal).
 * DO NOT LIMIT results by support or resize point sampling will work
 * as it requests points beyond its normal 0.0 support size.
 *
 * @memberOf lens.filter.filterFuncFactories
 * @returns {lens.filter.Filter~filterFunction}
 * @see {@link https://imagemagick.org/api/MagickCore/resize_8c_source.html#l00181 Ox filter function at ImageMagick source}
 */
function box() {
  const func = function () {
    return 1;
  };

  func.filterFunctionName = 'box';

  return func;
}

/**
 * Makes cubicBC filter function.
 * <p>Cubic Filters using B,C determined values:</p>
 * <pre>
 *     Mitchell-Netravali  B = 1/3 C = 1/3  "Balanced" cubic spline filter
 *     Catmull-Rom         B = 0   C = 1/2  Interpolatory and exact on linears
 *     Spline              B = 1   C = 0    B-Spline Gaussian approximation
 *     Hermite             B = 0   C = 0    B-Spline interpolator
 * </pre>
 *
 * <p>See paper by Mitchell and Netravali, Reconstruction Filters in Computer
 * Graphics Computer Graphics, Volume 22, Number 4, August 1988
 * {@link http://www.cs.utexas.edu/users/fussell/courses/cs384g/lectures/mitchell/Mitchell.pdf}.</p>
 *
 * <p>Coefficents are determined from B,C values:
 * <pre>
 *    P0 = (  6 - 2*B       )/6 = coeff[0]
 *    P1 =         0
 *    P2 = (-18 +12*B + 6*C )/6 = coeff[1]
 *    P3 = ( 12 - 9*B - 6*C )/6 = coeff[2]
 *    Q0 = (      8*B +24*C )/6 = coeff[3]
 *    Q1 = (    -12*B -48*C )/6 = coeff[4]
 *    Q2 = (      6*B +30*C )/6 = coeff[5]
 *    Q3 = (    - 1*B - 6*C )/6 = coeff[6]
 * </pre>
 * which are used to define the filter:
 * <pre>
 *    P0 + P1*x + P2*x^2 + P3*x^3      0 <= x < 1
 *    Q0 + Q1*x + Q2*x^2 + Q3*x^3      1 <= x < 2
 * </pre>
 * which ensures function is continuous in value and derivative (slope).</p>
 *
 * @memberOf lens.filter.filterFuncFactories
 * @see {@link https://imagemagick.org/api/MagickCore/resize_8c_source.html#l00207 CubicBC filter function at ImageMagick source}
 * @param {number} b
 * @param {number} c
 * @returns {lens.filter.Filter~filterFunction}
 */
function cubicBC(b, c) {
  const p0 = (6 - 2 * b) / 6;
  // const p1 = 0;
  const p2 = (-18 + 12 * b + 6 * c) / 6;
  const p3 = (12 - 9 * b - 6 * c) / 6;
  const q0 = (8 * b + 24 * c) / 6;
  const q1 = (-12 * b - 48 * c) / 6;
  const q2 = (6 * b + 30 * c) / 6;
  const q3 = (-1 * b - 6 * c) / 6;

  const func = function (x) {
    if (x < 1) {
      return p0 + x * (x * (p2 + x * p3));
    } else if (x < 2) {
      return q0 + x * (q1 + x * (q2 + x * q3));
    } else {
      return 0;
    }
  }

  func.filterFunctionName = 'cubicBC';
  func.b = b;
  func.c = c;

  return func;
};

// TODO: add more filter functions



/***/ }),

/***/ "../lens-js/lib/filter/filter.js":
/*!***************************************!*\
  !*** ../lens-js/lib/filter/filter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "../lens-js/lib/constants.js");


/**
 * Internal filter or windowing function.
 *
 * @callback lens.filter.Filter~filterFunction
 * @param {number} [x]
 * @param {number} [support]
 * @param {number} [windowSupport]
 * @returns {number}
 */

/**
 * Resample filter.
 *
 * @implements {FilterInterface}
 * @memberOf lens.filter
 * @see {@link https://www.imagemagick.org/Usage/filter/#filter Resampling Filters} at ImageMagick docs
 * @see {@link https://www2.eecs.berkeley.edu/Pubs/TechRpts/1989/CSD-89-516.pdf Fundamentals of Texture Mapping and Image Warping by Paul S. Heckbert}
 * page 41, section 3.4, 3.5
 * @see {@link https://imagemagick.org/api/MagickCore/resize_8c_source.html#l00757 AquireResizeFilter at ImageMagick source}
 * @tutorial 02.03.pixel-color-lookup
 */
class Filter {

  /**
   *
   * @param {lens.filter.Filter~filterFunction} filterFunction Filtering function.
   * @param {lens.filter.Filter~filterFunction} windowingFunction Windowing function.
   * @param {number} support Filter region of support - the filter support limit.
   * @param {number} scale Dimension scaling to fit window support (usally 1.0).
   * @param {number} [blur=1] X-scale (blur-sharpen).
   * @param {number|null} [windowSupport=null] Window support, usually equal to support (expert only).
   */
  constructor(filterFunction, windowingFunction, support, scale, blur = 1, windowSupport = null) {
    this.filterFunction    = filterFunction;
    this.windowingFunction = windowingFunction;
    this.support           = support;
    this.scale             = scale;
    this.blur              = blur;
    this.windowSupport     = windowSupport !== null ? windowSupport : support;
  }

  /**
   * @inheritDoc
   */
  getWeight(x) {
    const xBlur = x / this.blur;
    const scale = xBlur < _constants__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] ? 1 : this.window(this.scale * xBlur);
    return scale * this.filter(xBlur);
  }

  /**
   * @inheritDoc
   */
  filter(x) {
    return this.filterFunction(x, this.support, this.windowSupport);
  }

  /**
   * @inheritDoc
   */
  window(x) {
    return this.windowingFunction(x, this.support, this.windowSupport);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "../lens-js/lib/filter/index.js":
/*!**************************************!*\
  !*** ../lens-js/lib/filter/index.js ***!
  \**************************************/
/*! exports provided: Filter, filterFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "../lens-js/lib/filter/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _filter_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-functions */ "../lens-js/lib/filter/filter-functions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "filterFunctions", function() { return _filter_functions__WEBPACK_IMPORTED_MODULE_1__; });
/**
 * Filter namespace
 *
 * @namespace lens.filter
 */







/***/ }),

/***/ "../lens-js/lib/image/abstract-image.js":
/*!**********************************************!*\
  !*** ../lens-js/lib/image/abstract-image.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewport */ "../lens-js/lib/viewport.js");
/* harmony import */ var _vpx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vpx */ "../lens-js/lib/vpx.js");
/* harmony import */ var _mixins_virtual_pixel_trait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/virtual-pixel-trait */ "../lens-js/lib/mixins/virtual-pixel-trait.js");
/* harmony import */ var _mixins_interpolation_trait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/interpolation-trait */ "../lens-js/lib/mixins/interpolation-trait.js");
/* harmony import */ var _interpolation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interpolation */ "../lens-js/lib/interpolation.js");






function notImplemented(method) {
  throw new Error(`${method}() is abstract method and must be implemented by child class`);
}

/**
 * Abstract image class for ImageInterface implementation.
 *
 * @implements {ImageInterface}
 * @memberOf lens.image
 * @abstract
 * @mixes lens.mixins.interpolationTrait
 * @mixes lens.mixins.virtualPixelTrait
 */
class AbstractImage {

  /**
   * @param {number} width Image width
   * @param {number} height Image height
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.viewport = new _viewport__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, this.width - 1, this.height - 1);
    this.backgroundColor = [0, 0, 0, 0]; // Transparent;
    this.virtualPixelMethod = _vpx__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSPARENT;
    this.quantumRange = 255;
    this.interpolationMethod = _interpolation__WEBPACK_IMPORTED_MODULE_4__["default"].INTEGER;
  }

  /**
   * @inheritDoc
   */
  getPixelColor(x, y) {
    x = Math.floor(x - this.viewport.x1);
    y = Math.floor(y - this.viewport.y1);

    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      return this.getImagePixelColor(x, y);
    }

    return this.getVirtualPixelColor(x, y, this.virtualPixelMethod);
  }

  /**
   * @inheritDoc
   */
  setPixelColor(x, y, color) {
    x = Math.floor(x - this.viewport.x1);
    y = Math.floor(y - this.viewport.y1);

    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      this.setImagePixelColor(x, y, color);

      return this;
    }

    throw new Error(`Given coords (${x}, ${y}) is out of image bounds`);
  }

  /**
   * @inheritDoc
   */
  getBlank(viewport) {
    const blank = this.prepareBlank(viewport.width(), viewport.height());

    if (blank instanceof Promise) {
      return blank.then(blank => {
        blank.viewport  = viewport;
        return blank;
      });
    }

    blank.viewport = viewport;
    return blank;
  }

  /**
   * @inheritDoc
   */
  scale(scale) {
    const viewport = this.viewport.clone();
    viewport.scale(scale);
    const resized = this.resize(viewport.width(), viewport.height());

    if (resized instanceof Promise) {
      return resized.then(() => {
        resized.viewport = viewport;
        return resized;
      });
    }

    resized.viewport = viewport;
    return resized;
  }

  /**
   * @inheritDoc
   */
  sync() {
    return this;
  }

  /**
   * Returns pixel color at given image coords. Image coords MUST be: x ∈ [0; width - 1], y ∈ [0; height - 1].
   *
   * @abstract
   * @protected
   * @param {number} x
   * @param {number} y
   * @returns {Color}
   */
  getImagePixelColor(x, y) {
    notImplemented('getImagePixelColor');
  }

  /**
   * Sets pixel color at given image coordinates.
   *
   * @abstract
   * @protected
   * @param {number} x
   * @param {number} y
   * @param {Color} color
   */
  setImagePixelColor(x, y, color) {
    notImplemented('setImagePixelColor');
  }

  /**
   * Prepares blank image for {@link ImageInterface#getBlank} method.
   *
   * @abstract
   * @protected
   * @param {number} width
   * @param {number} height
   * @returns {ImageInterface}
   */
  prepareBlank(width, height) {
    notImplemented('prepareBlank');
  }

  /**
   * Returns average color of whole image.
   *
   * @abstract
   * @returns {Color}
   */
  getAverageColor() {
    notImplemented('getAverageColor');
  }

  /**
   * Returns resized instance of self.
   *
   * @abstract
   * @protected
   * @param {number} width
   * @param {number} height
   * @returns {ImageInterface|Promise<ImageInterface>}
   */
  resize(width, height) {
    notImplemented('resize');
  }
}

Object.assign(AbstractImage.prototype, _mixins_virtual_pixel_trait__WEBPACK_IMPORTED_MODULE_2__["default"]);
Object.assign(AbstractImage.prototype, _mixins_interpolation_trait__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (AbstractImage);

/***/ }),

/***/ "../lens-js/lib/image/canvas.js":
/*!**************************************!*\
  !*** ../lens-js/lib/image/canvas.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-image */ "../lens-js/lib/image/abstract-image.js");


/**
 * ImageInterface implementation for distortion using HTML5 Canvas objects.
 * Distortion result will contain new Canvas object in {@link lens.image.Canvas#canvas} property.
 *
 * @implements {ImageInterface}
 * @memberOf lens.image
 * @extends lens.image.AbstractImage
 */
class Canvas extends _abstract_image__WEBPACK_IMPORTED_MODULE_0__["default"] {

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    super(canvas.width, canvas.height);
    this.canvas     = canvas;
    this.imageData  = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
    this.data       = this.imageData.data;
  }

  /**
   * @inheritDoc
   */
  getImagePixelColor(x, y) {
    const offset = (y * this.width + x) * 4;

    return Array.prototype.slice.call(
      this.data,
      offset,
      offset + 4
    );
  }

  /**
   * @inheritDoc
   */
  setImagePixelColor(x, y, color) {
    const offset = (y * this.width + x) * 4;

    color.forEach((channel, i) => this.data[offset + i] = channel);
  }

  /**
   * @inheritDoc
   */
  prepareBlank(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    return new this.constructor(canvas);
  }

  /**
   * @inheritDoc
   */
  sync() {
    this.canvas.getContext('2d').putImageData(this.imageData, 0, 0);

    return this;
  }

  /**
   * @inheritDoc
   */
  getAverageColor() {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    canvas.getContext('2d').drawImage(this.canvas, 0, 0, this.width, this.height, 0, 0, 1, 1);
    return Array.prototype.slice.call(
      canvas.getContext('2d').getImageData(0, 0, 1, 1).data
    );
  }

  /**
   * @inheritDoc
   */
  resize(width, height) {
    const dst = document.createElement('canvas');
    dst.width = width;
    dst.height = height;
    dst.getContext('2d').drawImage(this.canvas, 0, 0, this.width, this.height, 0, 0, width, height);
    return new this.constructor(dst);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Canvas);

/***/ }),

/***/ "../lens-js/lib/image/dom-image.js":
/*!*****************************************!*\
  !*** ../lens-js/lib/image/dom-image.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "../lens-js/lib/image/canvas.js");


/**
 * Wrapper for {@link lens.image.Canvas} for direct distortion of DOM Image objects.
 * Distortion result will contain new DOM Image object in {@link lens.image.DomImage#image} property.
 *
 * @implements {ImageInterface}
 * @memberOf lens.image
 * @extends lens.image.Canvas
 */
class DomImage extends _canvas__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   *
   * @param {external:Image|HTMLImageElement} image DOM Image object
   */
  constructor(image) {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.getContext('2d').drawImage(image, 0, 0);
    super(canvas);

    this.image = image;
  }

  /**
   * @inheritDoc
   */
  prepareBlank(width, height) {
    return new this.constructor(new Image(width, height));
  }

  /**
   * @inheritDoc
   */
  sync() {
    super.sync();

    return new Promise(resolve => {
      this.image.onload = () => resolve(this);

      this.image.src = this.canvas.toDataURL();
    });
  }

  /**
   * @inheritDoc
   */
  resize(width, height) {
    return this.sync().then(() => {
      return new Promise(resolve => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(this.image, 0, 0, this.width, this.height, 0, 0, width, height);

        const image = new Image(width, height);

        image.onload = () => {
          const resized = new this.constructor(image);
          resolve(resized);
        };

        image.src = canvas.toDataURL();
      });
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (DomImage);

/***/ }),

/***/ "../lens-js/lib/image/index.js":
/*!*************************************!*\
  !*** ../lens-js/lib/image/index.js ***!
  \*************************************/
/*! exports provided: AbstractImage, Canvas, DomImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-image */ "../lens-js/lib/image/abstract-image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractImage", function() { return _abstract_image__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "../lens-js/lib/image/canvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _canvas__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _dom_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-image */ "../lens-js/lib/image/dom-image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomImage", function() { return _dom_image__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/**
 * Image namespace
 *
 * @namespace lens.image
 */







/***/ }),

/***/ "../lens-js/lib/index.js":
/*!*******************************!*\
  !*** ../lens-js/lib/index.js ***!
  \*******************************/
/*! exports provided: distort, VERSION, distorter, distortion, exception, filter, filterPresets, image, mixins, resampler, util, interpolation, vpx, Viewport, distorts, registerDistortionResolver, unregisterDistortionResolver, EPSILON, MAXIMUM_VALUE, M_PI2, M_2PI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _distort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distort */ "../lens-js/lib/distort.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distort", function() { return _distort__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _distorter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distorter */ "../lens-js/lib/distorter/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "distorter", function() { return _distorter__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _distortion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distortion */ "../lens-js/lib/distortion/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "distortion", function() { return _distortion__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exception */ "../lens-js/lib/exception/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "exception", function() { return _exception__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter */ "../lens-js/lib/filter/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _filter_presets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-presets */ "../lens-js/lib/filter-presets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterPresets", function() { return _filter_presets__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image */ "../lens-js/lib/image/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "image", function() { return _image__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mixins */ "../lens-js/lib/mixins/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return _mixins__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _resampler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resampler */ "../lens-js/lib/resampler/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "resampler", function() { return _resampler__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util */ "../lens-js/lib/util/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_9__; });
/* harmony import */ var _interpolation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interpolation */ "../lens-js/lib/interpolation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolation", function() { return _interpolation__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _vpx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vpx */ "../lens-js/lib/vpx.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vpx", function() { return _vpx__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viewport */ "../lens-js/lib/viewport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Viewport", function() { return _viewport__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _distorts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./distorts */ "../lens-js/lib/distorts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distorts", function() { return _distorts__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDistortionResolver", function() { return _distorts__WEBPACK_IMPORTED_MODULE_13__["registerDistortionResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unregisterDistortionResolver", function() { return _distorts__WEBPACK_IMPORTED_MODULE_13__["unregisterDistortionResolver"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constants */ "../lens-js/lib/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return _constants__WEBPACK_IMPORTED_MODULE_14__["EPSILON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAXIMUM_VALUE", function() { return _constants__WEBPACK_IMPORTED_MODULE_14__["MAXIMUM_VALUE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "M_PI2", function() { return _constants__WEBPACK_IMPORTED_MODULE_14__["M_PI2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "M_2PI", function() { return _constants__WEBPACK_IMPORTED_MODULE_14__["M_2PI"]; });

/**
 * @namespace lens
 */

/**
 * Library version.
 *
 * @readonly
 * @memberOf lens
 * @type {string}
 */
const VERSION = '0.1.0';















































/***/ }),

/***/ "../lens-js/lib/interpolation.js":
/*!***************************************!*\
  !*** ../lens-js/lib/interpolation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Color interpolation methods.
 *
 * @readonly
 * @enum {number}
 * @memberof lens
 */
const interpolation = {
  /**
   * Average 4 nearest neighbours.
   */
  AVERAGE: 1,

  /**
   * Average 9 nearest neighbours.
   */
  AVERAGE_9: 2,

  /**
   * Average 16 nearest neighbours.
   */
  AVERAGE_16: 3,

  /**
   * Just return background color.
   */
  BACKGROUND: 4,

  /**
   * Integer (floor) interpolation.
   */
  INTEGER: 8 // TODO: implement and add other methods
};

/* harmony default export */ __webpack_exports__["default"] = (interpolation);

/***/ }),

/***/ "../lens-js/lib/mixins/creates-bestFit-viewport-from-apexes.js":
/*!*********************************************************************!*\
  !*** ../lens-js/lib/mixins/creates-bestFit-viewport-from-apexes.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewport */ "../lens-js/lib/viewport.js");


/**
 * Mixin for classes implementing {@link DistortionInterface} that can calculate best fit viewport using forward
 * pixel mapping of image corners.
 *
 * @memberOf lens.mixins
 * @mixin
 */
const createsBestFitViewportFromApexes = {
  /**
   * Returns best fit viewport for distortion, using forward mapping for image apexes (corners).
   *
   * @param {lens.Viewport} viewport
   * @returns {lens.Viewport}
   */
  getBestFitViewport(viewport) {
    const u1 = viewport.x1,
      v1 = viewport.y1,
      u2 = viewport.x2 + 1,
      v2 = viewport.y2 + 1,
      [x, y] = this.forwardMap(u1, v1),
      bestFit = new _viewport__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, x, y);

    [[u2, v1], [u2, v2], [u1, v2]].forEach(apex => bestFit.expand(...this.forwardMap(...apex)));

    bestFit.fixBounds();

    return bestFit;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (createsBestFitViewportFromApexes);

/***/ }),

/***/ "../lens-js/lib/mixins/index.js":
/*!**************************************!*\
  !*** ../lens-js/lib/mixins/index.js ***!
  \**************************************/
/*! exports provided: interpolationTrait, virtualPixelTrait, createsBestFitViewportFromApexes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interpolation_trait__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpolation-trait */ "../lens-js/lib/mixins/interpolation-trait.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolationTrait", function() { return _interpolation_trait__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _virtual_pixel_trait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virtual-pixel-trait */ "../lens-js/lib/mixins/virtual-pixel-trait.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "virtualPixelTrait", function() { return _virtual_pixel_trait__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creates-bestFit-viewport-from-apexes */ "../lens-js/lib/mixins/creates-bestFit-viewport-from-apexes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createsBestFitViewportFromApexes", function() { return _creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/**
 * @namespace lens.mixins
 */







/***/ }),

/***/ "../lens-js/lib/mixins/interpolation-trait.js":
/*!****************************************************!*\
  !*** ../lens-js/lib/mixins/interpolation-trait.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interpolation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interpolation */ "../lens-js/lib/interpolation.js");


/**
 * Adds color interpolation functionality for classes that implement {@link ImageInterface}
 *
 * @mixin
 * @memberOf lens.mixins
 */
const interpolationTrait = {
  /**
   * Returns interpolated pixel color.
   *
   * @param {number} x
   * @param {number} y
   * @param {lens.interpolation} [interpolationMethod=this.interpolationMethod]
   * @returns {Color}
   */
  getInterpolatedPixelColor(x, y, interpolationMethod = this.interpolationMethod) {
    switch (interpolationMethod) {
      case _interpolation__WEBPACK_IMPORTED_MODULE_0__["default"].AVERAGE:
        return this.interpolateAverage(x, y, 2);
      case _interpolation__WEBPACK_IMPORTED_MODULE_0__["default"].AVERAGE_9:
        return this.interpolateAverage(x, y, 3);
      case _interpolation__WEBPACK_IMPORTED_MODULE_0__["default"].AVERAGE_16:
        return this.interpolateAverage(x, y, 4);
      case _interpolation__WEBPACK_IMPORTED_MODULE_0__["default"].BACKGROUND:
        return this.backgroundColor.slice();
      case _interpolation__WEBPACK_IMPORTED_MODULE_0__["default"].INTEGER:
      default:
        return this.getPixelColor(Math.floor(x), Math.floor(y));
    }
  },

  /**
   * Returns interpolated color by average of neighbors.
   *
   * @private
   * @param {number} x
   * @param {number} y
   * @param {number} count
   * @returns {Color}
   */
  interpolateAverage(x, y, count = 2) {
    let startX, startY;

    switch (count) {
      case 2:
        startX = Math.floor(x);
        startY = Math.floor(y);
        break;

      case 3:
        startX = Math.floor(x + 0.5) - 1;
        startY = Math.floor(y + 0.5) - 1;
        break;
      case 4:
        startX = Math.floor(x) - 1;
        startY = Math.floor(y) - 1;
        break;

      default:
        throw new Error("Param 'count' must be integer between 2 and 4.");
    }

    const endX = startX + count;
    const endY = startY + count;
    let color = [0, 0, 0, 0];

    for (let Y = startY; Y < endY; Y++) {
      for (let X = startX; X < endX; X++) {
        this.getPixelColor(x, y).forEach((channel, i) => color[i] += channel);
      }
    }

    const gamma = 1 / (count * count);

    return color.map(channel => Math.round(channel * gamma));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (interpolationTrait);

/***/ }),

/***/ "../lens-js/lib/mixins/virtual-pixel-trait.js":
/*!****************************************************!*\
  !*** ../lens-js/lib/mixins/virtual-pixel-trait.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vpx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vpx */ "../lens-js/lib/vpx.js");


/**
 * @private
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @returns {Point}
 */
function getEdgeCoords(x, y, width, height) {
  return [
    Math.max(0, Math.min(width - 1, x)),
    Math.max(0, Math.min(height - 1, y))
  ];
}

/**
 * @private
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @returns {Point}
 */
function getTileCoords(x, y, width, height) {
  let rx = x % width,
    ry = y % height;

  return [
    rx < 0 ? width + rx : rx,
    ry < 0 ? height + ry : ry
  ];
}

/**
 * Adds virtual pixel behavior to classes that implement ImageInterface.
 *
 * @mixin
 * @memberOf lens.mixins
 * @tutorial 02.05.virtual-pixels-and-matte
 */
const virtualPixelTrait = {
  /**
   * Returns virtual pixel color.
   *
   * @param {number} x Image X-coordinate OUTSIDE of image bounds.
   * @param {number} y Image Y-coordinate OUTSIDE of image bounds.
   * @param {lens.vpx} method Virtual pixel method.
   * @returns {Color}
   */
  getVirtualPixelColor(x, y, method) {
    switch (method) {
      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].BACKGROUND:
        return this.backgroundColor.slice();

      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].EDGE:
        return this.getImagePixelColor(...getEdgeCoords(x, y, this.width, this.height));

      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].MIRROR:
        let [tx, ty] = getTileCoords(x, y, this.width * 2, this.height * 2);

        if (tx > this.width - 1) {
          tx = this.width - (tx - this.width) - 1;
        }

        if (ty > this.height - 1) {
          ty = this.height - (ty - this.height) - 1;
        }

        return this.getImagePixelColor(tx, ty);

      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].TILE:
        return this.getImagePixelColor(...getTileCoords(x, y, this.width, this.height));

      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].TRANSPARENT:
      default:
        return [0, 0, 0, 0];

      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].BLACK:
        return [0, 0, 0, this.quantumRange];

      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].WHITE:
        return new Array(4).fill(this.quantumRange);

      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].GRAY:
        return new Array(3).fill(Math.round(this.quantumRange / 2)).concat([this.quantumRange]);

      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].HORIZONTAL_TILE:
      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].HORIZONTAL_TILE_EDGE:
        if (y < 0 || y >= this.height) {
          return method === _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].HORIZONTAL_TILE ? this.backgroundColor.slice()
            : this.getImagePixelColor(...getEdgeCoords(x, y, this.width, this.height));
        }

        return this.getImagePixelColor(...getTileCoords(x, y, this.width, this.height));

      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].VERTICAL_TILE:
      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].VERTICAL_TILE_EDGE:
        if (x < 0 || x >= this.width) {
          return method === _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].VERTICAL_TILE ? this.backgroundColor.slice()
            : this.getImagePixelColor(...getEdgeCoords(x, y, this.width, this.height));
        }

        return this.getImagePixelColor(...getTileCoords(x, y, this.width, this.height));

      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].RANDOM:
        return this.getImagePixelColor(
          Math.floor(Math.random() * this.width),
          Math.floor(Math.random() * this.height)
        );
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (virtualPixelTrait);

/***/ }),

/***/ "../lens-js/lib/resampler/e-w-a.js":
/*!*****************************************!*\
  !*** ../lens-js/lib/resampler/e-w-a.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vpx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vpx */ "../lens-js/lib/vpx.js");
/* harmony import */ var _interpolation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interpolation */ "../lens-js/lib/interpolation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../lens-js/lib/constants.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "../lens-js/lib/util/util.js");





/**
 * @private
 * @type {number}
 */
const WEIGHT_LOOKUP_TABLE_WIDTH = 1024;

/**
 * @private
 * @param {FilterInterface} filter
 * @param {number} support
 * @returns {number[]}
 */
function buildWeightLookupTable(filter, support) {
  const table = [];

  const rScale = support * Math.sqrt(1 / WEIGHT_LOOKUP_TABLE_WIDTH);

  for (let Q = 0; Q < WEIGHT_LOOKUP_TABLE_WIDTH; Q++) {
    table[Q] = filter.getWeight(Math.sqrt(Q) * rScale);
  }

  return table;
}

/**
 * @private
 * @param value
 * @param quantumRange
 * @returns {number}
 */
function clampToQuantum(value, quantumRange) {
  return Math.max(0, Math.min(quantumRange, value));
}

/**
 * <p>ClampEllipseAxes() function converts the input vectors into a major and
 * minor axis unit vectors, and their magnitude.  This allows us to
 * ensure that the ellipse generated is never smaller than the unit
 * circle and thus never too small for use in EWA resampling.</p>
 *
 * <p>This purely mathematical 'magic' was provided by Professor Nicolas
 * Robidoux and his Masters student Chantal Racette.</p>
 *
 * <p>Reference: "We Recommend Singular Value Decomposition", David Austin
 *   {@link http://www.ams.org/samplings/feature-column/fcarc-svd}</p>
 *
 * <p>By generating major and minor axis vectors, we can actually use the
 * ellipse in its "canonical form", by remapping the dx,dy of the
 * sampled point into distances along the major and minor axis unit
 * vectors.</p>
 *
 * <p>Reference: {@link http://en.wikipedia.org/wiki/Ellipse#Canonical_form}</p>
 *
 * @private
 * @param {number} dux
 * @param {number} duy
 * @param {number} dvx
 * @param {number} dvy
 * @returns {number[]}
 * @see {@link https://imagemagick.org/api/MagickCore/resample_8c_source.html#l00709 ClampUpAxes() at ImageMagick source}
 * @tutorial 02.03.pixel-color-lookup
 */
function clampEllipseAxes(dux, duy, dvx, dvy) {
  /*
   * ClampUpAxes takes an input 2x2 matrix
   *
   * [ a b ] = [ dux duy ]
   * [ c d ] = [ dvx dvy ]
   *
   * and computes from it the major and minor axis vectors [major_x,
   * major_y] and [minor_x,minor_y] of the smallest ellipse containing
   * both the unit disk and the ellipse which is the image of the unit
   * disk by the linear transformation
   *
   * [ dux duy ] [S] = [s]
   * [ dvx dvy ] [T] = [t]
   *
   * (The vector [S,T] is the difference between a position in output
   * space and [X,Y]; the vector [s,t] is the difference between a
   * position in input space and [x,y].)
   */
  /*
   * Output:
   *
   * major_mag is the half-length of the major axis of the "new"
   * ellipse.
   *
   * minor_mag is the half-length of the minor axis of the "new"
   * ellipse.
   *
   * major_unit_x is the x-coordinate of the major axis direction vector
   * of both the "old" and "new" ellipses.
   *
   * major_unit_y is the y-coordinate of the major axis direction vector.
   *
   * minor_unit_x is the x-coordinate of the minor axis direction vector.
   *
   * minor_unit_y is the y-coordinate of the minor axis direction vector.
   *
   * Unit vectors are useful for computing projections, in particular,
   * to compute the distance between a point in output space and the
   * center of a unit disk in output space, using the position of the
   * corresponding point [s,t] in input space. Following the clamping,
   * the square of this distance is
   *
   * ( ( s * major_unit_x + t * major_unit_y ) / major_mag )^2
   * +
   * ( ( s * minor_unit_x + t * minor_unit_y ) / minor_mag )^2
   *
   * If such distances will be computed for many [s,t]'s, it makes
   * sense to actually compute the reciprocal of major_mag and
   * minor_mag and multiply them by the above unit lengths.
   *
   * Now, if you want to modify the input pair of tangent vectors so
   * that it defines the modified ellipse, all you have to do is set
   *
   * newdux = major_mag * major_unit_x
   * newdvx = major_mag * major_unit_y
   * newduy = minor_mag * minor_unit_x = minor_mag * -major_unit_y
   * newdvy = minor_mag * minor_unit_y = minor_mag *  major_unit_x
   *
   * and use these tangent vectors as if they were the original ones.
   * Usually, this is a drastic change in the tangent vectors even if
   * the singular values are not clamped; for example, the minor axis
   * vector always points in a direction which is 90 degrees
   * counterclockwise from the direction of the major axis vector.
   */
  /*
   * Discussion:
   *
   * GOAL: Fix things so that the pullback, in input space, of a disk
   * of radius r in output space is an ellipse which contains, at
   * least, a disc of radius r. (Make this hold for any r>0.)
   *
   * ESSENCE OF THE METHOD: Compute the product of the first two
   * factors of an SVD of the linear transformation defining the
   * ellipse and make sure that both its columns have norm at least 1.
   * Because rotations and reflexions map disks to themselves, it is
   * not necessary to compute the third (rightmost) factor of the SVD.
   *
   * DETAILS: Find the singular values and (unit) left singular
   * vectors of Jinv, clampling up the singular values to 1, and
   * multiply the unit left singular vectors by the new singular
   * values in order to get the minor and major ellipse axis vectors.
   *
   * Image resampling context:
   *
   * The Jacobian matrix of the transformation at the output point
   * under consideration is defined as follows:
   *
   * Consider the transformation (x,y) -> (X,Y) from input locations
   * to output locations. (Anthony Thyssen, elsewhere in resample.c,
   * uses the notation (u,v) -> (x,y).)
   *
   * The Jacobian matrix of the transformation at (x,y) is equal to
   *
   *   J = [ A, B ] = [ dX/dx, dX/dy ]
   *       [ C, D ]   [ dY/dx, dY/dy ]
   *
   * that is, the vector [A,C] is the tangent vector corresponding to
   * input changes in the horizontal direction, and the vector [B,D]
   * is the tangent vector corresponding to input changes in the
   * vertical direction.
   *
   * In the context of resampling, it is natural to use the inverse
   * Jacobian matrix Jinv because resampling is generally performed by
   * pulling pixel locations in the output image back to locations in
   * the input image. Jinv is
   *
   *   Jinv = [ a, b ] = [ dx/dX, dx/dY ]
   *          [ c, d ]   [ dy/dX, dy/dY ]
   *
   * Note: Jinv can be computed from J with the following matrix
   * formula:
   *
   *   Jinv = 1/(A*D-B*C) [  D, -B ]
   *                      [ -C,  A ]
   *
   * What we do is modify Jinv so that it generates an ellipse which
   * is as close as possible to the original but which contains the
   * unit disk. This can be accomplished as follows:
   *
   * Let
   *
   *   Jinv = U Sigma V^T
   *
   * be an SVD decomposition of Jinv. (The SVD is not unique, but the
   * final ellipse does not depend on the particular SVD.)
   *
   * We could clamp up the entries of the diagonal matrix Sigma so
   * that they are at least 1, and then set
   *
   *   Jinv = U newSigma V^T.
   *
   * However, we do not need to compute V for the following reason:
   * V^T is an orthogonal matrix (that is, it represents a combination
   * of rotations and reflexions) so that it maps the unit circle to
   * itself. For this reason, the exact value of V does not affect the
   * final ellipse, and we can choose V to be the identity
   * matrix. This gives
   *
   *   Jinv = U newSigma.
   *
   * In the end, we return the two diagonal entries of newSigma
   * together with the two columns of U.
   */
  /*
   * ClampUpAxes was written by Nicolas Robidoux and Chantal Racette
   * of Laurentian University with insightful suggestions from Anthony
   * Thyssen and funding from the National Science and Engineering
   * Research Council of Canada. It is distinguished from its
   * predecessors by its efficient handling of degenerate cases.
   *
   * The idea of clamping up the EWA ellipse's major and minor axes so
   * that the result contains the reconstruction kernel filter support
   * is taken from Andreas Gustaffson's Masters thesis "Interactive
   * Image Warping", Helsinki University of Technology, Faculty of
   * Information Technology, 59 pages, 1993 (see Section 3.6).
   *
   * The use of the SVD to clamp up the singular values of the
   * Jacobian matrix of the pullback transformation for EWA resampling
   * is taken from the astrophysicist Craig DeForest.  It is
   * implemented in his PDL::Transform code (PDL = Perl Data
   * Language).
   */

  const a = dux;
  const b = duy;
  const c = dvx;
  const d = dvy;

  /*
   * n is the matrix Jinv * transpose(Jinv). Eigenvalues of n are the
   * squares of the singular values of Jinv.
   */
  const aa = a * a;
  const bb = b * b;
  const cc = c * c;
  const dd = d * d;

  /*
   * Eigenvectors of n are left singular vectors of Jinv.
   */
  const n11 = aa + bb;
  const n12 = a * c + b * d;
  const n21 = n12;
  const n22 = cc + dd;
  const det = a * d - b * c;
  const twice_det = det + det;
  const frobenius_squared = n11 + n22;
  const discriminant = (frobenius_squared + twice_det) * (frobenius_squared - twice_det);

  /*
   * In exact arithmetic, discriminant can't be negative. In floating
   * point, it can, because of the bad conditioning of SVD
   * decompositions done through the associated normal matrix.
   */
  const sqrt_discriminant = Math.sqrt(discriminant > 0 ? discriminant : 0);

  /*
   * s1 is the largest singular value of the inverse Jacobian
   * matrix. In other words, its reciprocal is the smallest singular
   * value of the Jacobian matrix itself.
   * If s1 = 0, both singular values are 0, and any orthogonal pair of
   * left and right factors produces a singular decomposition of Jinv.
   */
  /*
   * Initially, we only compute the squares of the singular values.
   */
  const s1s1 = 0.5 * (frobenius_squared + sqrt_discriminant);

  /*
   * s2 the smallest singular value of the inverse Jacobian
   * matrix. Its reciprocal is the largest singular value of the
   * Jacobian matrix itself.
   */
  const s2s2 = 0.5 * (frobenius_squared - sqrt_discriminant);
  const s1s1minusn11 = s1s1 - n11;
  const s1s1minusn22 = s1s1 - n22;

  /*
   * u1, the first column of the U factor of a singular decomposition
   * of Jinv, is a (non-normalized) left singular vector corresponding
   * to s1. It has entries u11 and u21. We compute u1 from the fact
   * that it is an eigenvector of n corresponding to the eigenvalue
   * s1^2.
   */
  const s1s1minusn11_squared = s1s1minusn11 * s1s1minusn11;
  const s1s1minusn22_squared = s1s1minusn22 * s1s1minusn22;

  /*
   * The following selects the largest row of n-s1^2 I as the one
   * which is used to find the eigenvector. If both s1^2-n11 and
   * s1^2-n22 are zero, n-s1^2 I is the zero matrix.  In that case,
   * any vector is an eigenvector; in addition, norm below is equal to
   * zero, and, in exact arithmetic, this is the only case in which
   * norm = 0. So, setting u1 to the simple but arbitrary vector [1,0]
   * if norm = 0 safely takes care of all cases.
   */
  const temp_u11 = (s1s1minusn11_squared >= s1s1minusn22_squared) ? n12 : s1s1minusn22;
  const temp_u21 = (s1s1minusn11_squared >= s1s1minusn22_squared) ? s1s1minusn11 : n21;
  const norm = Math.sqrt(temp_u11 * temp_u11 + temp_u21 * temp_u21);

  /*
   * Finalize the entries of first left singular vector (associated
   * with the largest singular value).
   */
  const u11 = norm > 0 ? temp_u11 / norm : 1;
  const u21 = norm > 0 ? temp_u21 / norm : 0;

  /*
   * Clamp the singular values up to 1.
   */
  const major_mag = s1s1 <= 1 ? 1 : Math.sqrt(s1s1);
  const minor_mag = s2s2 <= 1 ? 1 : Math.sqrt(s2s2);


  const major_x = u11 * major_mag;
  const major_y = u21 * major_mag;
  const minor_x = -u21 * minor_mag;
  const minor_y = u11 * minor_mag;

  return [
    major_x,
    major_y,
    minor_x,
    minor_y,
    major_mag,
    minor_mag
  ];
}

/**
 * Elliptical Weighted Average.
 * Resamples pixel color using Elliptical Weighted Average technique.
 *
 * @implements {ResamplerInterface}
 * @memberOf lens.resampler
 * @see {@link https://www.imagemagick.org/Usage/distorts/#distort_ewa EWA details} at ImageMagick docs.
 * @see {@link https://www2.eecs.berkeley.edu/Pubs/TechRpts/1989/CSD-89-516.pdf Fundamentals of Texture Mapping and Image Warping by Paul S. Heckbert}
 * page 41, section 3.4, 3.5
 * @see {@link https://imagemagick.org/api/MagickCore/resample_8c_source.html#l01038 ScaleResampleFilter()} at
 * ImageMagick source.
 * @see {@link https://imagemagick.org/api/MagickCore/resample_8c_source.html#l00315 ResamplePixelColor()} at
 * ImageMagick source.
 */
class EWA {

  /**
   *
   * @param {FilterInterface} filter
   */
  constructor(filter) {
    /**
     * Reconstruction filter.
     * @protected
     * @type {FilterInterface}
     */
    this.resizeFilter = filter;

    /**
     * The practical working support of the filter
     * @protected
     * @type {number}
     */
    this.support = this.resizeFilter.support * this.resizeFilter.blur;

    /**
     * Matte color for invalid mappings.
     * @type {Color}
     */
    this.matteColor = [0, 0, 0, 0];

    /**
     * Lookup table of weights for filtered average in elliptical area.
     * @protected
     * @type {number[]}
     */
    this.weightLookupTable = buildWeightLookupTable(this.resizeFilter, this.support);

    /**
     * Image being resampled.
     * @type {ImageInterface}
     */
    this.image = null;

    /**
     * Distortion mapper.
     * @protected
     * @type {DistortionInterface}
     */
    this.mapper = null;

    /**
     * Cached for direct access image virtual viewport.
     * @protected
     * @type {lens.Viewport}
     */
    this.imageViewport = null;

    /**
     * Cached image area.
     * @protected
     * @type {number}
     */
    this.imageArea = null;

    /**
     * Cached for direct access image virtual pixel method.
     * @protected
     * @type {lens.vpx}
     */
    this.imageVirtualPixelMethod = null;

    /**
     * Cached image average color.
     * @protected
     * @type {Color|null}
     */
    this.imageAverageColor = null;

    /**
     * Ellipse equiation A.
     * @protected
     * @type {number}
     */
    this.A = 0;

    /**
     * Ellipse equation B.
     * @protected
     * @type {number}
     */
    this.B = 0;

    /**
     * Ellipse equation C.
     * @protected
     * @type {number}
     */
    this.C = 0;

    /**
     * Ellipse equation F.
     * @protected
     * @type {number}
     */
    this.F = 0;

    /**
     * @protected
     * @type {number}
     */
    this.uLimit = 0;

    /**
     * @protected
     * @type {number}
     */
    this.vLimit = 0;

    /**
     * @protected
     * @type {number}
     */
    this.uWidth = 0;

    /**
     * @protected
     * @type {number}
     */
    this.slope = 0;

    /**
     * Used for distortions with constant partial derivatives to flag that ellipse already has been set up.
     * @protected
     * @type {boolean}
     */
    this.ellipseIsSetUp = false;

    /**
     * Flags that ellipse is too large and it is impractical to resample color -- better use some of possible
     * optimizations.
     * @protected
     * @type {boolean}
     */
    this.limitReached = false;

    /**
     * Output image scaling factor.
     * @type {number}
     */
    this.scaling = 1;
  }

  /**
   * @inheritDoc
   */
  getResampledColor(x, y) {
    x = x * this.scaling;
    y = y * this.scaling;

    const validity = this.mapper.getValidity(x, y, this.scaling);

    if (validity > 0) {
      const [u, v] = this.mapper.reverseMap(x, y);

      if (this.mapper.hasConstantPartialDerivatives) {
        this.setupEllipseOnce(...this.mapper.getPartialDerivatives(x, y));
      } else {
        this.setupEllipse(...this.mapper.getPartialDerivatives(x, y));
      }

      const color = this.getWeightedAverage(u, v);

      if (validity < 1) {
        return Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["blendColors"])(color, validity, this.matteColor);
      }

      return color;
    }

    return this.matteColor.slice();
  }

  /**
   * @inheritDoc
   */
  setImage(image) {
    this.image = image;
    // cache image viewport for faster direct access.
    this.imageViewport = this.image.viewport;
    // cache image area.
    this.imageArea = this.imageViewport.area();
    // cache image virtual pixel method (will it be faster actually?)
    this.imageVirtualPixelMethod = this.image.virtualPixelMethod;
    // reset cached image average color
    this.imageAverageColor = null;
    return this;
  }

  /**
   * @inheritDoc
   */
  setMapper(mapper) {
    if (!mapper.hasPartialDerivatives) {
      throw new Error('Pixel mapper must have partial derivatives to use this resampler');
    }

    this.mapper = mapper;
    this.ellipseIsSetUp = false;

    return this;
  }

  /**
   * Calculates ellipse once for distortions with constant partial derivatives.
   *
   * @private
   * @param derivatives
   * @returns {lens.resampler.EWA}
   */
  setupEllipseOnce(...derivatives) {
    if (!this.ellipseIsSetUp) {
      this.ellipseIsSetUp = true;
      return this.setupEllipse(...derivatives);
    }

    return this;
  }

  /**
   * Calculates ellipse for EWA resampling using partial derivatives.
   *
   * @private
   * @param derivatives
   * @returns {lens.resampler.EWA}
   */
  setupEllipse(...derivatives) {
    this.limitReached = false;

    derivatives = derivatives.map(derivative => derivative * this.scaling);

    return this.initEllipse(...derivatives)
      .scaleEllipse();
  }

  /**
   * Calculates ellipse equation for given distortion partial derivatives.
   *
   * @private
   * @param derivatives
   * @returns {lens.resampler.EWA}
   */
  initEllipse(...derivatives) {
    const [
      major_x,
      major_y,
      minor_x,
      minor_y,
      major_mag,
      minor_mag
    ] = clampEllipseAxes(...derivatives);

    this.A = major_y * major_y + minor_y * minor_y;
    this.B = -2 * (major_x * major_y + minor_x * minor_y);
    this.C = major_x * major_x + minor_x * minor_x;
    this.F = major_mag * minor_mag;
    this.F *= this.F;

    /*
     * If one or both of the scaling vectors is impossibly large
     * (producing a very large raw F value), we may as well not bother
     * doing any form of resampling since resampled area is very large.
     * In this case some alternative means of pixel sampling, such as
     * the average of the whole image is needed to get a reasonable
     * result. Calculate only as needed.
     */
    this.limitReached = 4 * this.A * this.C - this.B * this.B > _constants__WEBPACK_IMPORTED_MODULE_2__["MAXIMUM_VALUE"];

    return this;
  }

  /**
   * Scales ellipse to match filter support.
   *
   * @private
   * @returns {lens.resampler.EWA}
   */
  scaleEllipse() {
    if (!this.limitReached) {
      this.F *= this.support * this.support;
      this.uLimit = Math.sqrt(this.C * this.F / (this.A * this.C - 0.25 * this.B * this.B));
      this.vLimit = Math.sqrt(this.A * this.F / (this.A * this.C - 0.25 * this.B * this.B));
      this.uWidth = Math.sqrt(this.F / this.A);
      this.slope = -this.B / (2 * this.A);

      /*
       * Check the absolute area of the parallelogram involved.
       * This limit needs more work, as it is too slow for larger images
       * with tiled views of the horizon.
       */
      if (this.uWidth * this.vLimit > 4 * this.imageArea) {
        this.limitReached = true;
        return this;
      }

      /* Scale ellipse formula to directly index the Filter Lookup Table */
      const scale = WEIGHT_LOOKUP_TABLE_WIDTH / this.F;
      this.A *= scale;
      this.B *= scale;
      this.C *= scale;
    }

    return this;
  }

  /**
   * Returns weighted average color at given point using scaled EWA ellipse.
   *
   * @private
   * @param {number} u0
   * @param {number} v0
   * @returns {Color}
   */
  getWeightedAverage(u0, v0) {
    if (this.doesntNeedResampling(u0, v0)) {
      /* The area being resampled is simply a solid color
       * just return a single lookup color.
       */
      return this.image.getPixelColor(u0, v0);
    }

    if (this.limitReached) {
      // When Scaling limits reached, return an 'averaged' result.

      switch (this.imageVirtualPixelMethod) {
        case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].EDGE:
        case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].HORIZONTAL_TILE_EDGE:
        case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].VERTICAL_TILE_EDGE:
          /*
           * We need an average edge pixel, from the correct edge!
           * How should I calculate an average edge color?
           * Just returning an averaged neighbourhood,
           * works well in general, but falls down for TileEdge methods.
           * This needs to be done properly!!!!!!
           */
          return this.image.getInterpolatedPixelColor(u0, v0, _interpolation__WEBPACK_IMPORTED_MODULE_1__["default"].AVERAGE);
        case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].HORIZONTAL_TILE:
        case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].VERTICAL_TILE:
          /*
          * just return the background pixel - Is there more direct way?
          */
          return this.image.getPixelColor(
            this.imageViewport.x1 - 1,
            this.imageViewport.y1 - 1
          );
        default:
          return this.getImageAverageColor();
      }
    }

    let divisorM = 0,
      divisorC = 0,
      red = 0,
      green = 0,
      blue = 0,
      alpha = 0;

    /*
     * Determine the parellelogram bounding box fitted to the ellipse
     * centered at u0,v0.  This area is bounding by the lines...
     */
    const v1 = Math.ceil(v0 - this.vLimit);
    const v2 = Math.floor(v0 + this.vLimit);

    // scan line start and width accross the parallelogram
    let u1 = u0 + (v1 - v0) * this.slope - this.uWidth;
    let uw = 2 * this.uWidth + 1;

    /*
     * Do weighted resampling of all pixels,  within the scaled ellipse,
     * bound by a Parellelogram fitted to the ellipse.
     */

    let DDQ = 2 * this.A;

    for (let v = v1; v < v2; v++) {
      let ustart = Math.ceil(u1); // first pixel in scanline
      u1 += this.slope; // start of next scan line
      let uend = ustart + uw;

      // location of this first pixel, relative to u0,v0
      let U = ustart - u0;
      let V = v - v0;

      // Q = ellipse quotent ( if Q<F then pixel is inside ellipse)
      let Q = (this.A * U + this.B * V) * U + this.C * V * V;
      let DQ = this.A * (2 * U + 1) + this.B * V;

      // count up the weighted pixel colors
      for (let u = ustart; u < uend; u++) {
        // Note that the ellipse has been pre-scaled so F = $this->weightLookupTableWidth
        if (Q < WEIGHT_LOOKUP_TABLE_WIDTH) {
          let weight = this.weightLookupTable[Math.floor(Q)];
          let [r, g, b, a] = this.image.getPixelColor(u, v);
          alpha += weight * a;
          divisorM += weight;

          weight *= (a / this.image.quantumRange);

          red += r * weight;
          green += g * weight;
          blue += b * weight;
          divisorC += weight;
        }

        Q += DQ;
        DQ += DDQ;
      }
    }

    // Result sanity check -- this should NOT happen
    if (!divisorC || !divisorM) {
      /*
       * not enough pixels, or bad weighting in resampling,
       * resort to direct interpolation
       */
      return this.image.getInterpolatedPixelColor(u0, v0);
    }

    return [
      clampToQuantum(Math.round(red / divisorC), this.image.quantumRange),
      clampToQuantum(Math.round(green / divisorC), this.image.quantumRange),
      clampToQuantum(Math.round(blue / divisorC), this.image.quantumRange),
      clampToQuantum(Math.round(alpha / divisorM), this.image.quantumRange)
    ];
  }

  /**
   * Checks if no resampling is needed (if single pixel color should be returned).
   *
   * @private
   * @param {number} u
   * @param {number} v
   * @returns {boolean}
   */
  doesntNeedResampling(u, v) {
    switch (this.imageVirtualPixelMethod) {
      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].TRANSPARENT:
      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].BACKGROUND:
      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].BLACK:
      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].WHITE:
      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].GRAY:
        return this.limitReached || this.outOfImageBounds(u, v);
      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].EDGE:
        return (u + this.uLimit < this.imageViewport.x1 && v + this.vLimit < this.imageViewport.y1) ||
          (u + this.uLimit < this.imageViewport.x1 && v - this.vLimit > this.imageViewport.y2) ||
          (u - this.uLimit > this.imageViewport.x2 && v + this.vLimit < this.imageViewport.y1) ||
          (u - this.uLimit > this.imageViewport.x2 && v - this.vLimit > this.imageViewport.y2);
      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].HORIZONTAL_TILE:
        return v + this.vLimit < this.imageViewport.y1 || v - this.vLimit > this.imageViewport.y2;
      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].VERTICAL_TILE:
        return u + this.uLimit < this.imageViewport.x1 || u - this.uLimit > this.imageViewport.x2;
      default:
        return false;
    }
  }

  /**
   * Laziliy returns cached image average color.
   *
   * @private
   * @returns {Color}
   */
  getImageAverageColor() {
    if (this.imageAverageColor === null) {
      this.imageAverageColor = this.image.getAverageColor();
    }

    return this.imageAverageColor.slice();
  }

  /**
   * Checks if ellipse is completely out of image bounds.
   *
   * @private
   * @param {number} u
   * @param {number} v
   * @returns {boolean}
   */
  outOfImageBounds(u, v) {
    return u + this.uLimit < this.imageViewport.x1 ||
      u - this.uLimit > this.imageViewport.x2 ||
      v + this.vLimit < this.imageViewport.y1 ||
      v - this.vLimit > this.imageViewport.y2;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (EWA);

/***/ }),

/***/ "../lens-js/lib/resampler/index.js":
/*!*****************************************!*\
  !*** ../lens-js/lib/resampler/index.js ***!
  \*****************************************/
/*! exports provided: Point, EWA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "../lens-js/lib/resampler/point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return _point__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _e_w_a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e-w-a */ "../lens-js/lib/resampler/e-w-a.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EWA", function() { return _e_w_a__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/**
 * @namespace lens.resampler
 */





/***/ }),

/***/ "../lens-js/lib/resampler/point.js":
/*!*****************************************!*\
  !*** ../lens-js/lib/resampler/point.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ "../lens-js/lib/util/util.js");


/**
 * <p>{@link ResamplerInterface} implementaion without resampling itself.</p>
 * <p>It uses pixel color interpolation and works much faster than {@link lens.resampler.EWA} but produces aliasing
 * effects.</p>
 * <p>It is good for quick creation of distortion previews and also used for {@link DistortionInterface} implementations
 * that doesn't have partial derivatives.</p>
 * <p>It works most quickly when {@link ImageInterface}#interpolationMethod property is set to
 * {@link lens.interpolation.INTEGER}</p>
 *
 * @implements {ResamplerInterface}
 * @memberOf lens.resampler
 * @tutorial 02.03.pixel-color-lookup
 */
class Point {

  constructor() {
    this.matteColor = [0, 0, 0, 0];
    this.scaling = 1;
  }

  /**
   * @inheritDoc
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * @inheritDoc
   */
  setMapper(mapper) {
    this.mapper = mapper;
    return this;
  }

  /**
   * @inheritDoc
   */
  getResampledColor(x, y) {
    x = x * this.scaling;
    y = y * this.scaling;

    const validity = this.mapper.getValidity(x, y, this.scaling);

    if (validity > 0) {
      let [u, v] = this.mapper.reverseMap(x, y);
      let color = this.image.getInterpolatedPixelColor(u, v);

      if (validity < 1) {
        return Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["blendColors"])(color, this.matteColor, validity);
      }

      return color;
    }

    return this.matteColor.slice();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Point);

/***/ }),

/***/ "../lens-js/lib/util/gauss-jordan-elimination/index.js":
/*!*************************************************************!*\
  !*** ../lens-js/lib/util/gauss-jordan-elimination/index.js ***!
  \*************************************************************/
/*! exports provided: GaussJordanElimination, LeastSquares */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solver */ "../lens-js/lib/util/gauss-jordan-elimination/solver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaussJordanElimination", function() { return _solver__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _least_squares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./least-squares */ "../lens-js/lib/util/gauss-jordan-elimination/least-squares.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeastSquares", function() { return _least_squares__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/**
 * @namespace lens.util.gaussJordanElimination
 */





/***/ }),

/***/ "../lens-js/lib/util/gauss-jordan-elimination/least-squares.js":
/*!*********************************************************************!*\
  !*** ../lens-js/lib/util/gauss-jordan-elimination/least-squares.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solver */ "../lens-js/lib/util/gauss-jordan-elimination/solver.js");


/**
 * @summary Solves system of equations using Least Squares method.
 * @memberOf lens.util.gaussJordanElimination
 * @see {@link https://imagemagick.org/api/MagickCore/matrix_8c_source.html#l00829 LeastSquaresAddTerms()} at
 * ImageMagick source.
 */
class LeastSquares extends _solver__WEBPACK_IMPORTED_MODULE_0__["default"] {

  /**
   *
   * @param {number} rank The rank or size of the dimensions of the square matrix.
   * Also the length of vectors, and number of terms being added.
   * @param {number} numVectors Number of result vectors, and number or results being
   * added.  Also represents the number of separable systems of equations
   * that is being solved.
   */
  constructor(rank, numVectors = 1) {
    const matrix = [];
    const vectors = [];

    for (let i = 0; i < rank; i++) {
      matrix.push(new Array(rank).fill(0));
    }

    for (let i = 0; i < numVectors; i++) {
      vectors.push(new Array(rank).fill(0));
    }

    super(matrix, vectors);
  }

  /**
   * Adds one set of terms and associate results to the
   * given matrix and vectors for solving using least-squares function fitting.
   *
   * @param {number[]} terms The pre-calculated terms (without the unknown coefficient
   * weights) that forms the equation being added.
   * @param {number[]} results The result(s) that should be generated from the given terms
   * weighted by the yet-to-be-solved coefficients.
   * @returns {lens.util.gaussJordanElimination.LeastSquares}
   * @see {@link https://imagemagick.org/api/MagickCore/matrix_8c_source.html#l00829 LeastSquaresAddTerms()} at
   * ImageMagick source.
   */
  addTerms(terms, results) {
    const rank = this.matrix.length;

    for (let j = 0; j < rank; j++) {
      for (let i = 0; i < rank; i++) {
        this.matrix[i][j] += terms[i] * terms[j];
      }

      for (let i = 0; i < this.vectors.length; i++) {
        this.vectors[i][j] += results[i] * terms[j];
      }
    }

    return this;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (LeastSquares);

/***/ }),

/***/ "../lens-js/lib/util/gauss-jordan-elimination/solver.js":
/*!**************************************************************!*\
  !*** ../lens-js/lib/util/gauss-jordan-elimination/solver.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exception_unsolvable_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../exception/unsolvable-matrix */ "../lens-js/lib/exception/unsolvable-matrix.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "../lens-js/lib/util/util.js");



/**
 * @private
 * @param {Array} array
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 */
function swap(array, row1, col1, row2, col2) {
  if (array[row1][col1] !== array[row2][col2]) {
    array[row1][col1] += array[row2][col2];
    array[row2][col2] = array[row1][col1] - array[row2][col2];
    array[row1][col1] -= array[row2][col2];
  }
}

function unsolvable() {
  throw new _exception_unsolvable_matrix__WEBPACK_IMPORTED_MODULE_0__["default"]("Can't solve given matrix using Gauss-Jordan method");
}

/**
 * @summary Solves system of equations using Gauss-Jordan elimination.
 *
 * @description <p>Brings the matrix to reduced row echelon form,
 *  while simultaneously reducing and thus solving the augmented results
 *  matrix.</p>
 *
 * <p>See also {@link http://en.wikipedia.org/wiki/Gauss-Jordan_elimination}</p>
 *
 *
 *  <p>Note that the 'matrix' is given as a 'array of arrays' of rank size.
 *  That is values can be assigned as   matrix[row][column]   where 'row' is
 *  typically the equation, and 'column' is the term of the equation.
 *  That is the matrix is in the form of a 'row first array'.</p>
 *
 *  <p>However 'vectors' is a 'array of arrays' which can have any number
 *  of columns, with each column array the same 'rank' size as 'matrix'.</p>
 *
 *  <p>This allows for simpler handling of the results, especially is only one
 *  column 'vector' is all that is required to produce the desired solution.</p>
 *
 *  <p>For example, the 'vectors' can consist of simple array of
 *  numbers.  when only one set of simultaneous equations is to be solved from
 *  the given set of coefficient weighted terms.</p>
 *
 *  <p>However by specifying more 'columns' (as an 'array of vector columns',
 *  you can use this function to solve a set of 'separable' equations.</p>
 *
 *  <p>For example a distortion function where    <code>u = U(x,y)  v = V(x,y)</code>
 *  And the functions U() and V() have separate coefficients, but are being
 *  generated from a common x,y->u,v  data set.</p>
 *
 *  <p>You can also use the 'vectors' to generate an inverse of the given 'matrix'
 *  though as a 'column first array' rather than a 'row first array'. For
 *  details see {@link http://en.wikipedia.org/wiki/Gauss-Jordan_elimination}</p>
 *
 * @memberOf lens.util.gaussJordanElimination
 *
 * @see {@link https://imagemagick.org/api/MagickCore/matrix_8c_source.html#l00480 GaussJordanElimination()} at
 * ImageMagick source.
 */
class Solver {

  /**
   *
   * @param {Array<number[]>} matrix Square matrix to be solved.
   * @param {Array<number[]>} vectors Augment results matrix.
   */
  constructor(matrix, vectors) {
    this.solved = false;
    this.matrix = matrix.map(row => row.slice());
    this.vectors = vectors.map(vector => vector.slice());
  }

  /**
   * Solves given matrix.
   *
   * @returns {lens.util.gaussJordanElimination.Solver}
   */
  solve() {
    if (this.solved) {
      return this;
    }

    this.validate();

    const matrix = this.matrix;
    const vectors = this.vectors;
    const rank = matrix.length;
    const numVectors = vectors.length;
    const cols = new Array(rank).fill(0);
    const rows = new Array(rank).fill(0);
    const pivots = new Array(rank).fill(0);
    let col = 0;
    let row = 0;

    for (let i = 0; i < rank; i++) {
      let max = 0;

      for (let j = 0; j < rank; j++) {
        if (pivots[j] !== 1) {
          for (let k = 0; k < rank; k++) {
            if (pivots[k] !== 0) {
              if (pivots[k] > 1) {
                unsolvable();
              }
            } else if (Math.abs(matrix[j][k]) >= max) {
              max = Math.abs(matrix[j][k]);
              row = j;
              col = k;
            }
          }
        }
      }

      pivots[col]++;

      if (row !== col) {
        for (let k = 0; k < rank; k++) {
          swap(matrix, row, k, col, k);
        }

        for (let k = 0; k < numVectors; k++) {
          swap(vectors, k, row, k, col);
        }
      }

      rows[i] = row;
      cols[i] = col;

      if (matrix[col][col] === 0) {
        unsolvable();
      }

      let scale = Object(_util__WEBPACK_IMPORTED_MODULE_1__["perceptibleReciprocal"])(matrix[col][col]);
      matrix[col][col] = 1;

      for (let j = 0; j < rank; j++) {
        matrix[col][j] *= scale;
      }

      for (let j = 0; j < numVectors; j++) {
        vectors[j][col] *= scale;
      }

      for (let j = 0; j < rank; j++) {
        if (j !== col) {
          let scale = matrix[j][col];
          matrix[j][col] = 0;

          for (let k = 0; k < rank; k++) {
            matrix[j][k] -= scale * matrix[col][k];
          }

          for (let k = 0; k < numVectors; k++) {
            vectors[k][j] -= scale * vectors[k][col];
          }
        }
      }
    }

    for (let j = rank - 1; j >= 0; j--) {
      if (cols[j] !== rows[j]) {
        for (let i = 0; i < rank; i++) {
          swap(matrix, i, rows[j], i, cols[j]);
        }
      }
    }

    this.solved = true;

    return this;
  }

  /**
   * Returns augment matrix (results)
   *
   * @returns {Array.<number[]>}
   */
  getVectors() {
    return this.vectors.map(vector => vector.slice());
  }


  /**
   * Validates matrix and vectors.
   * @protected
   * @returns {lens.util.gaussJordanElimination.Solver}
   */
  validate() {
    const rank = this.matrix.length;

    this.matrix.forEach(row => {
      if (row.length !== rank) {
        throw new Error('Matrix must be square');
      }
    });

    this.vectors.forEach(vector => {
      if (vector.length !== rank) {
        throw new Error('Vectors must be the same length as matrix rank');
      }
    });

    return this;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Solver);

/***/ }),

/***/ "../lens-js/lib/util/index.js":
/*!************************************!*\
  !*** ../lens-js/lib/util/index.js ***!
  \************************************/
/*! exports provided: gaussJordanElimination, blendColors, perceptibleReciprocal, deg2rad, rad2deg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gauss_jordan_elimination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gauss-jordan-elimination */ "../lens-js/lib/util/gauss-jordan-elimination/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "gaussJordanElimination", function() { return _gauss_jordan_elimination__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "../lens-js/lib/util/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blendColors", function() { return _util__WEBPACK_IMPORTED_MODULE_1__["blendColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "perceptibleReciprocal", function() { return _util__WEBPACK_IMPORTED_MODULE_1__["perceptibleReciprocal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return _util__WEBPACK_IMPORTED_MODULE_1__["deg2rad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return _util__WEBPACK_IMPORTED_MODULE_1__["rad2deg"]; });

/**
 * @namespace lens.util
 */







/***/ }),

/***/ "../lens-js/lib/util/util.js":
/*!***********************************!*\
  !*** ../lens-js/lib/util/util.js ***!
  \***********************************/
/*! exports provided: blendColors, perceptibleReciprocal, rad2deg, deg2rad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blendColors", function() { return blendColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perceptibleReciprocal", function() { return perceptibleReciprocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return rad2deg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "../lens-js/lib/constants.js");


/**
 * Return 1/x where x is perceptible (not unlimited or infinitesimal).
 *
 * @memberOf lens.util
 * @param {number} x
 * @returns {number}
 * @see {@link https://imagemagick.org/api/MagickCore/pixel-accessor_8h_source.html#l00234 PerceptibleReciprocal()}
 * at ImageMagick source.
 */
function perceptibleReciprocal(x) {
  const sign = x < 0 ? -1 : 1;

  if (sign * x >= _constants__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return 1 / x;
  }

  return sign / _constants__WEBPACK_IMPORTED_MODULE_0__["EPSILON"];
}

/**
 * Blends two colors by given weights.
 *
 * @memberOf lens.util
 * @param {Color} color1 First color to blend.
 * @param {number} weight1 First color's weight.
 * @param {Color} color2 Second color to blend.
 * @param {number|null} [weight2] Second color's weight. If not passed -- will be calculated as 1 - weight1.
 * @returns {Color} Color blending result.
 */
function blendColors(color1, weight1, color2, weight2 = null) {
  if (weight2 === null) {
    weight2 = 1 - weight1;
  }

  return color1.map((channel, i) => Math.round(channel * weight1 + color2[i] * weight2));
}

/**
 * Converts radians to degrees
 *
 * @memberOf lens.util
 * @param {number} radians
 * @returns {number}
 */
function rad2deg(radians) {
  return 180 * radians / Math.PI;
}

/**
 * Converts degrees to radians
 *
 * @memberOf lens.util
 * @param {number} degrees
 * @returns {number}
 */
function deg2rad(degrees) {
  return Math.PI * degrees / 180;
}



/***/ }),

/***/ "../lens-js/lib/viewport.js":
/*!**********************************!*\
  !*** ../lens-js/lib/viewport.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @summary Virtual viewport class.
 *
 * @description Represents image's virtual position at it's coordinate space.
 *
 * @memberOf lens
 * @see {@link https://www.imagemagick.org/Usage/basics/#page Virtual canvas offset} at ImageMagick docs.
 * @tutorial 02.06.virtual-viewport
 */
class Viewport {
  /**
   *
   * @param {number} x1 Left edge coordinate of viewport.
   * @param {number} y1 Top edge coordinate  of viewport.
   * @param {number} x2 Right edge coordinate of viewport.
   * @param {number} y2 Bottom edge coordinate of viewport.
   */
  constructor(x1, y1, x2, y2) {
    /**
     * Left edge coordinate of viewport.
     *
     * @type {number}
     */
    this.x1 = x1;

    /**
     * Top edge coordinate of viewport.
     * @type {number}
     */
    this.y1 = y1;

    /**
     * Right edge coordinate of viewport.
     * @type {number}
     */
    this.x2 = x2;

    /**
     * Bottom edge coordinate of viewport.
     * @type {number}
     */
    this.y2 = y2;
  }

  /**
   * Returns virtual viewport width -- same as image actual width.
   *
   * @returns {number}
   */
  width() {
    return this.x2 - this.x1 + 1;
  }

  /**
   * Returns virtual viewport height -- same as image actual height.
   *
   * @returns {number}
   */
  height() {
    return this.y2 - this.y1 + 1;
  }

  /**
   * Returns viewport area.
   *
   * @returns {number}
   */
  area() {
    return this.width() * this.height();
  }

  /**
   * Checks if viewport contains given coords.
   *
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   */
  contains(x, y) {
    return x >= this.x1 && x <= this.x2 && y >= this.y1 && y <= this.y2;
  }

  /**
   * Expands viewport to contain given coords.
   *
   * @param {number} x
   * @param {number} y
   * @returns {lens.Viewport}
   */
  expand(x, y) {
    this.x1 = Math.min(this.x1, x);
    this.x2 = Math.max(this.x2, x);
    this.y1 = Math.min(this.y1, y);
    this.y2 = Math.max(this.y2, y);
    return this;
  }

  /**
   * Clones viewport into new instance.
   *
   * @returns {lens.Viewport}
   */
  clone() {
    return new this.constructor(this.x1, this.y1, this.x2, this.y2);
  }

  /**
   * Fix bounds after best fit viewport calculation.
   *
   * @returns {lens.Viewport}
   */
  fixBounds() {
    this.x1 = Math.floor(this.x1 - 0.5);
    this.y1 = Math.floor(this.y1 - 0.5);
    this.x2 = Math.ceil(this.x2 - 0.5);
    this.y2 = Math.ceil(this.y2 - 0.5);
    return this;
  }

  /**
   * Scales viewport bounds.
   *
   * @param {number} scale
   * @returns {lens.Viewport}
   */
  scale(scale) {
    this.x1 = Math.round(this.x1 * scale);
    this.y1 = Math.round(this.y1 * scale);
    this.x2 = Math.round(this.x2 * scale);
    this.y2 = Math.round(this.y2 * scale);
    return this;
  }

  /**
   * Resets viewport offset.
   *
   * @returns {lens.Viewport}
   */
  reset() {
    let width = this.width(),
        height = this.height();
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = this.x1 + width - 1;
    this.y2 = this.y1 + height - 1;
    return this;
  }

  /**
   * Sets viewport offset
   *
   * @param {number} x
   * @param {number} y
   * @returns {lens.Viewport}
   */
  offset(x, y) {
    this.x1 += x;
    this.y1 += y;
    this.x2 += x;
    this.y2 += y;
    return this;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Viewport);

/***/ }),

/***/ "../lens-js/lib/vpx.js":
/*!*****************************!*\
  !*** ../lens-js/lib/vpx.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Virtual pixel methods.
 *
 * @readonly
 * @enum {number}
 * @memberOf lens
 * @see {@link https://www.imagemagick.org/Usage/misc/#virtual-pixel Virtual pixel details} at ImageMagick docs.
 * @tutorial 02.05.virtual-pixels-and-matte
 */
const vpx = {
  /**
   * Use image background color.
   */
  BACKGROUND: 1,

  /**
   * Closest edge color.
   */
  EDGE: 3,

  /**
   * Mirror effect.
   */
  MIRROR: 4,

  /**
   * Random color from image.
   */
  RANDOM: 5,

  /**
   * Tile effect.
   */
  TILE: 6,

  /**
   * Transparent color.
   */
  TRANSPARENT: 7,

  /**
   * Black color.
   */
  BLACK: 9,

  /**
   * Gray color.
   */
  GRAY: 10,

  /**
   * White color.
   */
  WHITE: 11,

  /**
   * Tile effect horizontally, background color vertically.
   */
  HORIZONTAL_TILE: 12,

  /**
   * Tile effect vertically, background color horizontally.
   */
  VERTICAL_TILE: 13,

  /**
   * Tile effect horizontally, closest edge color vertically.
   */
  HORIZONTAL_TILE_EDGE: 14,

  /**
   * Tile effect vertically, closest edge color horizontally.
   */
  VERTICAL_TILE_EDGE: 15

  // TODO: implement and add Checker tile an dither methods
};

/* harmony default export */ __webpack_exports__["default"] = (vpx);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/color-input.vue?vue&type=style&index=0&id=cb6e9518&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/color-input.vue?vue&type=style&index=0&id=cb6e9518&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".transparent-backdrop[data-v-cb6e9518] {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0I2OTM4MUI0QzA3MTFFQTk5ODI5NEYwRTg3RDIzMDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0I2OTM4MUM0QzA3MTFFQTk5ODI5NEYwRTg3RDIzMDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QjY5MzgxOTRDMDcxMUVBOTk4Mjk0RjBFODdEMjMwNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QjY5MzgxQTRDMDcxMUVBOTk4Mjk0RjBFODdEMjMwNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgAiQgsAAABWSURBVHjaYmRgYJBiQAJCQkJMb9++1WNAA0zoAt+/f//PgAUwMRAJMBRKSkoyY1PIIiUlxfzjx4//UEVMV69e/YNNIeP///+9MAQZGS9Qz430UwgQYAAyfBOo6ecabAAAAABJRU5ErkJggg==);\n  background-repeat: repeat;\n  width: 100%;\n  height: 20px;\n  margin-top: 10px;\n  border: #aaa 1px solid;\n}\n.transparent-backdrop .color-sample[data-v-cb6e9518] {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.transparent-backdrop .color-sample.disabled[data-v-cb6e9518] {\n  cursor: default;\n}\n[data-v-cb6e9518] .v-label {\n  transform-origin: top left;\n  transform: translateY(-10px) scale(0.75);\n  position: absolute !important;\n  left: 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=style&index=0&id=42808a23&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=style&index=0&id=42808a23&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".image-area[data-v-42808a23] {\n  flex-basis: 100%;\n  flex-direction: column;\n}\n.image-area__image-plane.crosshair[data-v-42808a23] {\n  cursor: crosshair;\n}\n.image-area__viewport[data-v-42808a23] {\n  position: relative;\n}\n.image-area__viewport .image-area__axis[data-v-42808a23] {\n  position: absolute;\n  background-color: aquamarine;\n}\n.image-area__viewport .image-area__axis.x-axis[data-v-42808a23] {\n  top: 0;\n  height: 100%;\n  width: 1px;\n  margin-left: -0.5px;\n}\n.image-area__viewport .image-area__axis.y-axis[data-v-42808a23] {\n  left: 0;\n  width: 100%;\n  height: 1px;\n  margin-top: -0.5px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=style&index=0&id=617039a8&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=style&index=0&id=617039a8&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".image-viewer[data-v-617039a8] {\n  position: relative;\n  cursor: grab;\n}\n.image-viewer.panning[data-v-617039a8] {\n  cursor: grabbing;\n}\n.image-viewer__image[data-v-617039a8] {\n  position: absolute;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/index.vue?vue&type=style&index=0&id=d9410534&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/index.vue?vue&type=style&index=0&id=d9410534&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".relative-wrapper[data-v-d9410534] {\n  position: relative;\n  max-height: 100%;\n  height: 100%;\n  width: 100%;\n}\n.relative-wrapper .absolute-wrapper[data-v-d9410534] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/file-selection-area/index.vue?vue&type=style&index=0&id=3557c134&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/file-selection-area/index.vue?vue&type=style&index=0&id=3557c134&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.file-selection-area__label[data-v-3557c134] {\n    display: block;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n}\n.file-selection-area__file-input[data-v-3557c134] {\n    opacity: 0;\n    width: 1px;\n    height: 1px;\n    position: absolute;\n}\n.file-selection-area__drop-zone[data-v-3557c134] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    z-index: 999;\n    padding: 20px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n.file-selection-area__drop-zone-inner[data-v-3557c134] {\n    border: 2px dashed royalblue;\n    height: 100%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/file-selection-area/index.vue?vue&type=style&index=0&id=3557c134&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/file-selection-area/index.vue?vue&type=style&index=0&id=3557c134&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=3557c134&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/file-selection-area/index.vue?vue&type=style&index=0&id=3557c134&scoped=true&lang=css&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/file-selection-area/index.vue?vue&type=template&id=3557c134&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/file-selection-area/index.vue?vue&type=template&id=3557c134&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "file-selection-area" }, [
    _c(
      "label",
      { staticClass: "file-selection-area__label", attrs: { for: _vm.id } },
      [
        _c("input", {
          ref: "input",
          staticClass: "file-selection-area__file-input",
          attrs: {
            type: "file",
            id: _vm.id,
            accept: "image/jpeg,image/png,image/gif",
            multiple: _vm.multiple,
            disabled: _vm.disabled
          },
          on: { change: _vm.onFileInputChange }
        }),
        _vm._v(" "),
        _vm._t("default", null, { click: _vm.openFileDialog })
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.displayDropZone,
            expression: "displayDropZone"
          }
        ],
        staticClass: "file-selection-area__drop-zone",
        on: {
          dragenter: function($event) {
            $event.preventDefault()
            return _vm.onDropZoneDragenter($event)
          },
          dragover: function($event) {
            $event.preventDefault()
            return _vm.onDropZoneDragover($event)
          },
          drop: function($event) {
            $event.preventDefault()
            $event.stopPropagation()
            return _vm.onDrop($event)
          },
          dragleave: function($event) {
            $event.preventDefault()
            return _vm.onDropzoneDragleave($event)
          }
        }
      },
      [
        _c(
          "div",
          {
            ref: "drop_zone",
            staticClass: "file-selection-area__drop-zone-inner"
          },
          [_vm._t("drop-zone")],
          2
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/color-input.vue?vue&type=template&id=cb6e9518&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/color-input.vue?vue&type=template&id=cb6e9518&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "VMenu",
    {
      ref: "menu",
      attrs: {
        "close-on-content-click": false,
        "close-on-click": false,
        "return-value": _vm.color,
        transition: "scale-transition",
        "offset-y": "",
        "min-width": "290px",
        disabled: _vm.disabled
      },
      on: {
        "update:returnValue": function($event) {
          _vm.color = $event
        },
        "update:return-value": function($event) {
          _vm.color = $event
        }
      },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function(ref) {
            var on = ref.on
            return [
              _c("VInput", { attrs: { label: _vm.label } }, [
                _c("div", _vm._g({ staticClass: "transparent-backdrop" }, on), [
                  _c("div", {
                    staticClass: "color-sample",
                    class: { disabled: !!_vm.disabled },
                    style: { backgroundColor: _vm.sheetColor }
                  })
                ])
              ])
            ]
          }
        }
      ]),
      model: {
        value: _vm.menu,
        callback: function($$v) {
          _vm.menu = $$v
        },
        expression: "menu"
      }
    },
    [
      _vm._v(" "),
      _c(
        "VCard",
        [
          _c("VColorPicker", {
            attrs: { "hide-mode-switch": true, mode: "rgba" },
            model: {
              value: _vm.color,
              callback: function($$v) {
                _vm.color = $$v
              },
              expression: "color"
            }
          }),
          _vm._v(" "),
          _c(
            "VCardActions",
            [
              _c(
                "VBtn",
                {
                  attrs: { small: "", color: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.$refs.menu.save(_vm.color)
                    }
                  }
                },
                [_vm._v("\n                Ok\n            ")]
              ),
              _vm._v(" "),
              _c(
                "VBtn",
                {
                  attrs: { small: "", color: "secondary" },
                  on: {
                    click: function($event) {
                      return _vm.$refs.menu.save({ r: 0, g: 0, b: 0, a: 0 })
                    }
                  }
                },
                [_vm._v("\n                Transparent\n            ")]
              ),
              _vm._v(" "),
              _c(
                "VBtn",
                {
                  attrs: { small: "" },
                  on: {
                    click: function($event) {
                      _vm.menu = false
                    }
                  }
                },
                [_vm._v("\n                Cancel\n            ")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue?vue&type=template&id=6e3e466c&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue?vue&type=template&id=6e3e466c& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "VRow",
        { attrs: { dense: "" } },
        _vm._l(_vm.argsMap, function(ref, i) {
          var label = ref.label
          var index = ref.index
          return _c(
            "VCol",
            { key: label, attrs: { cols: "4" } },
            [
              _c("VTextField", {
                attrs: {
                  type: "number",
                  label: label,
                  dense: "",
                  outlined: "",
                  value: _vm.localValue[index],
                  disabled: _vm.disabled
                },
                on: {
                  change: function($event) {
                    return _vm.setValue(index, $event)
                  }
                }
              })
            ],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue?vue&type=template&id=d36ea756&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue?vue&type=template&id=d36ea756& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "VRow",
        { attrs: { dense: "" } },
        _vm._l(_vm.fields, function(ref, index) {
          var label = ref.label
          var clearable = ref.clearable
          var min = ref.min
          var max = ref.max
          return _c(
            "VCol",
            { key: label, attrs: { cols: "6" } },
            [
              _c("VTextField", {
                attrs: {
                  type: "number",
                  label: label,
                  value: _vm.localValue[index],
                  clearable: clearable,
                  dense: "",
                  outlined: "",
                  min: min,
                  max: max,
                  disabled: _vm.disabled
                },
                on: {
                  change: function($event) {
                    return _vm.setValue(index, $event)
                  }
                }
              })
            ],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/control-points.vue?vue&type=template&id=e0329a20&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-arguments/control-points.vue?vue&type=template&id=e0329a20& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "control-points" },
    [
      _vm._l(this.controlPointsGroups, function(ref, groupIndex) {
        var u = ref[0]
        var v = ref[1]
        var x = ref[2]
        var y = ref[3]
        return _c(
          "div",
          { key: groupIndex, staticClass: "d-flex" },
          [
            _c("PointsMapping", {
              attrs: {
                index: groupIndex,
                u: u,
                v: v,
                x: x,
                y: y,
                disabled: _vm.disabled,
                "active-offset": _vm.getActiveOffset(groupIndex),
                "enable-deletion": _vm.enableDeletion
              },
              on: {
                "update:u": function($event) {
                  return _vm.setValue(groupIndex * 4, $event)
                },
                "update:v": function($event) {
                  return _vm.setValue(groupIndex * 4 + 1, $event)
                },
                "update:x": function($event) {
                  return _vm.setValue(groupIndex * 4 + 2, $event)
                },
                "update:y": function($event) {
                  return _vm.setValue(groupIndex * 4 + 3, $event)
                },
                "pick-point": function($event) {
                  return _vm.pickPoint($event, groupIndex)
                },
                "pick-point-cancel": function($event) {
                  return _vm.$emit("pick-point-cancel")
                },
                "pick-source-apex": function($event) {
                  return _vm.pickApex($event, groupIndex)
                }
              }
            })
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "VBtn",
        {
          attrs: { disabled: _vm.disabled },
          on: {
            click: function($event) {
              return _vm.addControlPoint()
            }
          }
        },
        [_vm._v("\n        Add\n    ")]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue?vue&type=template&id=5971fcdc&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue?vue&type=template&id=5971fcdc& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "coords-pair" },
    [
      _c(
        "VRow",
        { attrs: { dense: "" } },
        [
          _c(
            "VCol",
            { attrs: { cols: "6" } },
            [
              _c("VTextField", {
                attrs: {
                  label: _vm.xLabel,
                  type: "number",
                  dense: "",
                  outlined: "",
                  disabled: _vm.disabled
                },
                model: {
                  value: _vm.xval,
                  callback: function($$v) {
                    _vm.xval = _vm._n($$v)
                  },
                  expression: "xval"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "VCol",
            { attrs: { cols: "6" } },
            [
              _c("VTextField", {
                attrs: {
                  label: _vm.yLabel,
                  type: "number",
                  dense: "",
                  outlined: "",
                  disabled: _vm.disabled
                },
                model: {
                  value: _vm.yval,
                  callback: function($$v) {
                    _vm.yval = _vm._n($$v)
                  },
                  expression: "yval"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue?vue&type=template&id=05874f3d&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue?vue&type=template&id=05874f3d& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "VRow",
        { attrs: { dense: "" } },
        _vm._l(_vm.coeffNames, function(label, index) {
          return _c(
            "VCol",
            { key: label, attrs: { cols: "4" } },
            [
              _c("VTextField", {
                attrs: {
                  type: "number",
                  label: label,
                  dense: "",
                  outlined: "",
                  value: _vm.localValue[index],
                  disabled: _vm.disabled
                },
                on: {
                  change: function($event) {
                    return _vm.setValue(index, $event)
                  }
                }
              })
            ],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue?vue&type=template&id=3b708dfe&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue?vue&type=template&id=3b708dfe& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "points-mapping d-flex" },
    [
      _c(
        "VRow",
        { staticClass: "flex-grow-1", attrs: { dense: "" } },
        [
          _c(
            "VCol",
            { attrs: { cols: "6" } },
            [
              _c("CoordsPair", {
                attrs: {
                  "x-label": _vm.ulabel,
                  "y-label": _vm.vlabel,
                  x: _vm.uval,
                  y: _vm.vval,
                  disabled: _vm.disabled
                },
                on: {
                  "update:x": function($event) {
                    _vm.uval = $event
                  },
                  "update:y": function($event) {
                    _vm.vval = $event
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "VCol",
            { attrs: { cols: "6" } },
            [
              _c("CoordsPair", {
                attrs: {
                  "x-label": _vm.xlabel,
                  "y-label": _vm.ylabel,
                  x: _vm.xval,
                  y: _vm.yval,
                  disabled: _vm.disabled
                },
                on: {
                  "update:x": function($event) {
                    _vm.xval = $event
                  },
                  "update:y": function($event) {
                    _vm.yval = $event
                  }
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.activeOffset === null
        ? _c(
            "VMenu",
            {
              attrs: { left: "" },
              scopedSlots: _vm._u(
                [
                  {
                    key: "activator",
                    fn: function(ref) {
                      var on = ref.on
                      return [
                        _c(
                          "VBtn",
                          _vm._g(
                            {
                              staticClass: "mt-2 ml-2",
                              attrs: { icon: "", disabled: _vm.disabled }
                            },
                            on
                          ),
                          [_c("VIcon", [_vm._v("mdi-dots-vertical")])],
                          1
                        )
                      ]
                    }
                  }
                ],
                null,
                false,
                671488762
              ),
              model: {
                value: _vm.showMenu,
                callback: function($$v) {
                  _vm.showMenu = $$v
                },
                expression: "showMenu"
              }
            },
            [
              _vm._v(" "),
              _c(
                "VList",
                [
                  _c(
                    "VMenu",
                    {
                      attrs: { "offset-x": true, left: "" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "VListItem",
                                  _vm._g({}, on),
                                  [
                                    _c(
                                      "VListItemTitle",
                                      [
                                        _c("VIcon", [_vm._v("mdi-menu-left")]),
                                        _vm._v(
                                          "\n                            Pick Source Point\n                        "
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        3526471503
                      )
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "VList",
                        [
                          _c(
                            "VListItem",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.pickPoint(0)
                                }
                              }
                            },
                            [
                              _c(
                                "VListItemIcon",
                                [_c("VIcon", [_vm._v("mdi-target")])],
                                1
                              ),
                              _vm._v(" "),
                              _c("VListItemTitle", [
                                _vm._v(
                                  "\n                            From Image\n                        "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "VListItem",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.pickApex("tl", 0)
                                }
                              }
                            },
                            [
                              _c(
                                "VListItemIcon",
                                [_c("VIcon", [_vm._v("mdi-arrow-top-left")])],
                                1
                              ),
                              _vm._v(" "),
                              _c("VListItemTitle", [
                                _vm._v(
                                  "\n                            Image Top Left\n                        "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "VListItem",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.pickApex("tr", 0)
                                }
                              }
                            },
                            [
                              _c(
                                "VListItemIcon",
                                [_c("VIcon", [_vm._v("mdi-arrow-top-right")])],
                                1
                              ),
                              _vm._v(" "),
                              _c("VListItemTitle", [
                                _vm._v(
                                  "\n                            Image Top Right\n                        "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "VListItem",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.pickApex("bl", 0)
                                }
                              }
                            },
                            [
                              _c(
                                "VListItemIcon",
                                [
                                  _c("VIcon", [_vm._v("mdi-arrow-bottom-left")])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("VListItemTitle", [
                                _vm._v(
                                  "\n                            Image Bottom Left\n                        "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "VListItem",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.pickApex("br", 0)
                                }
                              }
                            },
                            [
                              _c(
                                "VListItemIcon",
                                [
                                  _c("VIcon", [
                                    _vm._v("mdi-arrow-bottom-right")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("VListItemTitle", [
                                _vm._v(
                                  "\n                            Image Bottom Right\n                        "
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "VListItem",
                    {
                      on: {
                        click: function($event) {
                          return _vm.pickPoint(2)
                        }
                      }
                    },
                    [
                      _c(
                        "VListItemIcon",
                        [_c("VIcon", [_vm._v("mdi-target-variant")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("VListItemTitle", [
                        _vm._v(
                          "\n                    Pick Destination Point\n                "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "VListItem",
                    {
                      attrs: { disabled: !_vm.enableDeletion },
                      on: {
                        click: function($event) {
                          return _vm.removeControlPoint(_vm.groupIndex)
                        }
                      }
                    },
                    [
                      _c("VListItemTitle", [
                        _vm._v(
                          "\n                    Remove Mapping\n                "
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _c(
            "VBtn",
            {
              staticClass: "mt-2 ml-2",
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  return _vm.$emit("pick-point-cancel")
                }
              }
            },
            [_c("VIcon", [_vm._v("mdi-cancel")])],
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-button.vue?vue&type=template&id=117dce14&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-button.vue?vue&type=template&id=117dce14& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.mobile
        ? _c(
            "VSpeedDial",
            {
              attrs: { direction: "top", absolute: "", bottom: "", right: "" },
              scopedSlots: _vm._u(
                [
                  {
                    key: "activator",
                    fn: function() {
                      return [
                        _c(
                          "VBtn",
                          {
                            attrs: {
                              fab: "",
                              color: "teal",
                              loading: _vm.loading,
                              disabled: _vm.disabled
                            }
                          },
                          [
                            _c(
                              "VBadge",
                              {
                                attrs: {
                                  value: _vm.showMainBadge && !_vm.fab,
                                  dot: "",
                                  color: "red",
                                  overlap: ""
                                }
                              },
                              [
                                _vm.fab
                                  ? _c("VIcon", [_vm._v("mdi-close")])
                                  : _c("VIcon", [
                                      _vm._v("mdi-dots-vertical-circle")
                                    ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    },
                    proxy: true
                  }
                ],
                null,
                false,
                530000854
              ),
              model: {
                value: _vm.fab,
                callback: function($$v) {
                  _vm.fab = $$v
                },
                expression: "fab"
              }
            },
            [
              _vm._v(" "),
              _c(
                "VBtn",
                {
                  attrs: {
                    fab: "",
                    color: "primary",
                    disabled: _vm.disabled || _vm.disableDistortion
                  },
                  on: {
                    click: function($event) {
                      return _vm.$emit("distort")
                    }
                  }
                },
                [_c("VIcon", [_vm._v("mdi-camera-iris")])],
                1
              ),
              _vm._v(" "),
              _c(
                "VBtn",
                {
                  attrs: { fab: "", color: "red", disabled: _vm.disabled },
                  on: {
                    click: function($event) {
                      return _vm.$emit("show-input-settings")
                    }
                  }
                },
                [_c("VIcon", [_vm._v("mdi-cogs")])],
                1
              ),
              _vm._v(" "),
              _vm.showOutputInfo
                ? _c(
                    "VBtn",
                    {
                      attrs: { fab: "", color: "blue", disabled: _vm.disabled },
                      on: { click: _vm.onShowOutputInfo }
                    },
                    [
                      _c(
                        "VBadge",
                        {
                          attrs: {
                            value: _vm.showOutputInfoBadge,
                            dot: "",
                            color: "red",
                            overlap: ""
                          }
                        },
                        [_c("VIcon", [_vm._v("mdi-information-outline")])],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        : _c(
            "VBtn",
            {
              attrs: {
                fab: "",
                color: "primary",
                loading: _vm.loading,
                disabled: _vm.disabled || _vm.disableDistortion,
                absolute: "",
                bottom: "",
                right: ""
              },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.$emit("distort")
                }
              }
            },
            [_c("VIcon", [_vm._v("mdi-camera-iris")])],
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/distortion-options.vue?vue&type=template&id=724cc47a&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-options/distortion-options.vue?vue&type=template&id=724cc47a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h4", [_vm._v("Resampling Options")]),
      _vm._v(" "),
      _c("VCheckbox", {
        attrs: {
          label: "EWA Resampling",
          dense: "",
          disabled: _vm.disabled || _vm.disableResampling
        },
        model: {
          value: _vm.proxyResample,
          callback: function($$v) {
            _vm.proxyResample = $$v
          },
          expression: "proxyResample"
        }
      }),
      _vm._v(" "),
      _c(
        "VExpandTransition",
        [
          _vm.resample
            ? _c("FilterSettings", {
                attrs: {
                  "filter-preset": _vm.proxyFilterPreset,
                  "custom-filter-options": _vm.proxyCustomFilterOptions,
                  disabled: _vm.disabled
                },
                on: {
                  "update:filterPreset": function($event) {
                    _vm.proxyFilterPreset = $event
                  },
                  "update:filter-preset": function($event) {
                    _vm.proxyFilterPreset = $event
                  },
                  "update:customFilterOptions": function($event) {
                    _vm.proxyCustomFilterOptions = $event
                  },
                  "update:custom-filter-options": function($event) {
                    _vm.proxyCustomFilterOptions = $event
                  }
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("SupersamplingSettings", {
        attrs: { supersample: _vm.proxySupersample, disabled: _vm.disabled },
        on: {
          "update:supersample": function($event) {
            _vm.proxySupersample = $event
          }
        }
      }),
      _vm._v(" "),
      _c("ViewportSettings", {
        attrs: {
          "best-fit": _vm.proxyBestFit,
          "use-custom-viewport": _vm.proxyUseCustomViewport,
          "custom-viewport": _vm.proxyCustomViewport,
          "best-fit-disabled": _vm.disableBestFit,
          "source-disabled": _vm.disableSourceViewport,
          disabled: _vm.disabled
        },
        on: {
          "update:bestFit": function($event) {
            _vm.proxyBestFit = $event
          },
          "update:best-fit": function($event) {
            _vm.proxyBestFit = $event
          },
          "update:useCustomViewport": function($event) {
            _vm.proxyUseCustomViewport = $event
          },
          "update:use-custom-viewport": function($event) {
            _vm.proxyUseCustomViewport = $event
          },
          "update:customViewport": function($event) {
            _vm.proxyCustomViewport = $event
          },
          "update:custom-viewport": function($event) {
            _vm.proxyCustomViewport = $event
          }
        }
      }),
      _vm._v(" "),
      _c("h4", { staticClass: "mb-2" }, [_vm._v("Other Settings")]),
      _vm._v(" "),
      _c("ColorInput", {
        attrs: { label: "Matte Color", disabled: _vm.disabled },
        model: {
          value: _vm.proxyMatteColor,
          callback: function($$v) {
            _vm.proxyMatteColor = $$v
          },
          expression: "proxyMatteColor"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue?vue&type=template&id=06e7b7e5&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue?vue&type=template&id=06e7b7e5& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h5", { staticClass: "mb-2" }, [_vm._v("Custom Filter Settings")]),
      _vm._v(" "),
      _c("FilterFunctionConfigurator", {
        attrs: {
          name: _vm.proxyFilterFunc,
          "cubic-b-c_b": _vm.proxyFilterFuncCubicBC_b,
          "cubic-b-c_c": _vm.proxyFilterFuncCubicBC_c,
          label: "Filter Function",
          disabled: _vm.disabled
        },
        on: {
          "update:name": function($event) {
            _vm.proxyFilterFunc = $event
          },
          "update:cubicBC_b": function($event) {
            _vm.proxyFilterFuncCubicBC_b = $event
          },
          "update:cubic-b-c_b": function($event) {
            _vm.proxyFilterFuncCubicBC_b = $event
          },
          "update:cubicBC_c": function($event) {
            _vm.proxyFilterFuncCubicBC_c = $event
          },
          "update:cubic-b-c_c": function($event) {
            _vm.proxyFilterFuncCubicBC_c = $event
          }
        }
      }),
      _vm._v(" "),
      _c("FilterFunctionConfigurator", {
        attrs: {
          name: _vm.proxyWindowFunc,
          "cubic-b-c_b": _vm.proxyWindowFuncCubicBC_b,
          "cubic-b-c_c": _vm.proxyWindowFuncCubicBC_c,
          label: "Windowing Function",
          disabled: _vm.disabled
        },
        on: {
          "update:name": function($event) {
            _vm.proxyWindowFunc = $event
          },
          "update:cubicBC_b": function($event) {
            _vm.proxyWindowFuncCubicBC_b = $event
          },
          "update:cubic-b-c_b": function($event) {
            _vm.proxyWindowFuncCubicBC_b = $event
          },
          "update:cubicBC_c": function($event) {
            _vm.proxyWindowFuncCubicBC_c = $event
          },
          "update:cubic-b-c_c": function($event) {
            _vm.proxyWindowFuncCubicBC_c = $event
          }
        }
      }),
      _vm._v(" "),
      _c(
        "VRow",
        { attrs: { dense: "" } },
        [
          _c(
            "VCol",
            { attrs: { cols: "6" } },
            [
              _c("VTextField", {
                attrs: {
                  type: "number",
                  label: "Support",
                  dense: "",
                  outlined: "",
                  disabled: _vm.disabled
                },
                model: {
                  value: _vm.proxySupport,
                  callback: function($$v) {
                    _vm.proxySupport = _vm._n($$v)
                  },
                  expression: "proxySupport"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "VCol",
            { attrs: { cols: "6" } },
            [
              _c("VTextField", {
                attrs: {
                  type: "number",
                  label: "Scale",
                  dense: "",
                  outlined: "",
                  disabled: _vm.disabled
                },
                model: {
                  value: _vm.proxyScale,
                  callback: function($$v) {
                    _vm.proxyScale = _vm._n($$v)
                  },
                  expression: "proxyScale"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "VCol",
            { attrs: { cols: "6" } },
            [
              _c("VTextField", {
                attrs: {
                  type: "number",
                  label: "Blur",
                  dense: "",
                  outlined: "",
                  disabled: _vm.disabled
                },
                model: {
                  value: _vm.proxyBlur,
                  callback: function($$v) {
                    _vm.proxyBlur = _vm._n($$v)
                  },
                  expression: "proxyBlur"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "VCol",
            { attrs: { cols: "6" } },
            [
              _c("VTextField", {
                attrs: {
                  type: "number",
                  label: "Window Support",
                  dense: "",
                  outlined: "",
                  disabled: _vm.disabled
                },
                model: {
                  value: _vm.proxyWindowSupport,
                  callback: function($$v) {
                    _vm.proxyWindowSupport = _vm._n($$v)
                  },
                  expression: "proxyWindowSupport"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue?vue&type=template&id=4c18870a&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue?vue&type=template&id=4c18870a& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("VSelect", {
        attrs: {
          label: _vm.label,
          items: _vm.filterFunctionNames,
          filled: "",
          dense: "",
          disabled: _vm.disabled
        },
        model: {
          value: _vm.proxyName,
          callback: function($$v) {
            _vm.proxyName = $$v
          },
          expression: "proxyName"
        }
      }),
      _vm._v(" "),
      _c("VExpandTransition", [
        _vm.name === "cubicBC"
          ? _c(
              "div",
              [
                _c("VTextField", {
                  attrs: {
                    label: "b",
                    type: "number",
                    dense: "",
                    outlined: "",
                    disabled: _vm.disabled
                  },
                  model: {
                    value: _vm.proxyCubicBC_b,
                    callback: function($$v) {
                      _vm.proxyCubicBC_b = _vm._n($$v)
                    },
                    expression: "proxyCubicBC_b"
                  }
                }),
                _vm._v(" "),
                _c("VTextField", {
                  attrs: {
                    label: "c",
                    type: "number",
                    dense: "",
                    outlined: "",
                    disabled: _vm.disabled
                  },
                  model: {
                    value: _vm.proxyCubicBC_c,
                    callback: function($$v) {
                      _vm.proxyCubicBC_c = _vm._n($$v)
                    },
                    expression: "proxyCubicBC_c"
                  }
                })
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/filter-settings.vue?vue&type=template&id=6f9a7dd3&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-options/filter-settings.vue?vue&type=template&id=6f9a7dd3& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("VSelect", {
        attrs: {
          items: _vm.presetNames,
          label: "Filter Preset",
          dense: "",
          filled: "",
          disabled: _vm.disabled
        },
        model: {
          value: _vm.proxyFilterPreset,
          callback: function($$v) {
            _vm.proxyFilterPreset = $$v
          },
          expression: "proxyFilterPreset"
        }
      }),
      _vm._v(" "),
      _c(
        "VExpandTransition",
        [
          _vm.filterPreset === "CUSTOM"
            ? _c("FilterConfigurator", {
                attrs: {
                  "filter-func": _vm.filterFunc,
                  "filter-func-cubic-b-c_b": _vm.filterFuncCubicBC_b,
                  "filter-func-cubic-b-c_c": _vm.filterFuncCubicBC_c,
                  "window-func": _vm.windowFunc,
                  "window-func-cubic-b-c_b": _vm.windowFuncCubicBC_b,
                  "window-func-cubic-b-c_c": _vm.windowFuncCubicBC_c,
                  support: _vm.support,
                  scale: _vm.scale,
                  blur: _vm.blur,
                  "window-support": _vm.windowSupport,
                  disabled: _vm.disabled
                },
                on: {
                  "update:filterFunc": function($event) {
                    _vm.filterFunc = $event
                  },
                  "update:filter-func": function($event) {
                    _vm.filterFunc = $event
                  },
                  "update:filterFuncCubicBC_b": function($event) {
                    _vm.filterFuncCubicBC_b = $event
                  },
                  "update:filter-func-cubic-b-c_b": function($event) {
                    _vm.filterFuncCubicBC_b = $event
                  },
                  "update:filterFuncCubicBC_c": function($event) {
                    _vm.filterFuncCubicBC_c = $event
                  },
                  "update:filter-func-cubic-b-c_c": function($event) {
                    _vm.filterFuncCubicBC_c = $event
                  },
                  "update:windowFunc": function($event) {
                    _vm.windowFunc = $event
                  },
                  "update:window-func": function($event) {
                    _vm.windowFunc = $event
                  },
                  "update:windowFuncCubicBC_b": function($event) {
                    _vm.windowFuncCubicBC_b = $event
                  },
                  "update:window-func-cubic-b-c_b": function($event) {
                    _vm.windowFuncCubicBC_b = $event
                  },
                  "update:windowFuncCubicBC_c": function($event) {
                    _vm.windowFuncCubicBC_c = $event
                  },
                  "update:window-func-cubic-b-c_c": function($event) {
                    _vm.windowFuncCubicBC_c = $event
                  },
                  "update:support": function($event) {
                    _vm.support = $event
                  },
                  "update:scale": function($event) {
                    _vm.scale = $event
                  },
                  "update:blur": function($event) {
                    _vm.blur = $event
                  },
                  "update:windowSupport": function($event) {
                    _vm.windowSupport = $event
                  },
                  "update:window-support": function($event) {
                    _vm.windowSupport = $event
                  }
                }
              })
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue?vue&type=template&id=d506b9fa&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue?vue&type=template&id=d506b9fa&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("VCheckbox", {
        attrs: { label: "Supersampling", disabled: _vm.disabled },
        on: { change: _vm.emitUpdate },
        model: {
          value: _vm.enabled,
          callback: function($$v) {
            _vm.enabled = $$v
          },
          expression: "enabled"
        }
      }),
      _vm._v(" "),
      _c(
        "VExpandTransition",
        [
          _vm.enabled
            ? _c("VTextField", {
                attrs: {
                  type: "number",
                  label: "Supersampling Factor",
                  dense: "",
                  outlined: "",
                  disabled: _vm.disabled
                },
                on: { input: _vm.emitUpdate },
                model: {
                  value: _vm.factor,
                  callback: function($$v) {
                    _vm.factor = _vm._n($$v)
                  },
                  expression: "factor"
                }
              })
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue?vue&type=template&id=eb35c2b6&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue?vue&type=template&id=eb35c2b6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h4", [_vm._v("Output Viewport Settings")]),
      _vm._v(" "),
      _c(
        "VRadioGroup",
        {
          attrs: { label: "Output Viewport" },
          model: {
            value: _vm.selectedViewport,
            callback: function($$v) {
              _vm.selectedViewport = $$v
            },
            expression: "selectedViewport"
          }
        },
        [
          _c("VRadio", {
            attrs: {
              label: "Source Image Viewport",
              value: "source",
              disabled: _vm.disabled || _vm.sourceDisabled
            }
          }),
          _vm._v(" "),
          _c("VRadio", {
            attrs: {
              label: "Best Fit",
              value: "bestfit",
              disabled: _vm.disabled || _vm.bestFitDisabled
            }
          }),
          _vm._v(" "),
          _c("VRadio", {
            attrs: { label: "Custom", value: "custom", disabled: _vm.disabled }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "VExpandTransition",
        [
          _vm.selectedViewport === "custom"
            ? _c(
                "VRow",
                { attrs: { dense: "" } },
                [
                  _c(
                    "VCol",
                    { attrs: { cols: "3" } },
                    [
                      _c("VTextField", {
                        attrs: {
                          label: "x1",
                          dense: "",
                          outlined: "",
                          type: "number",
                          disabled: _vm.disabled
                        },
                        model: {
                          value: _vm.x1,
                          callback: function($$v) {
                            _vm.x1 = _vm._n($$v)
                          },
                          expression: "x1"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "VCol",
                    { attrs: { cols: "3" } },
                    [
                      _c("VTextField", {
                        attrs: {
                          label: "y1",
                          dense: "",
                          outlined: "",
                          type: "number",
                          disabled: _vm.disabled
                        },
                        model: {
                          value: _vm.y1,
                          callback: function($$v) {
                            _vm.y1 = _vm._n($$v)
                          },
                          expression: "y1"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "VCol",
                    { attrs: { cols: "3" } },
                    [
                      _c("VTextField", {
                        attrs: {
                          label: "x2",
                          dense: "",
                          outlined: "",
                          type: "number",
                          disabled: _vm.disabled
                        },
                        model: {
                          value: _vm.x2,
                          callback: function($$v) {
                            _vm.x2 = _vm._n($$v)
                          },
                          expression: "x2"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "VCol",
                    { attrs: { cols: "3" } },
                    [
                      _c("VTextField", {
                        attrs: {
                          label: "y2",
                          dense: "",
                          outlined: "",
                          type: "number",
                          disabled: _vm.disabled
                        },
                        model: {
                          value: _vm.y2,
                          callback: function($$v) {
                            _vm.y2 = _vm._n($$v)
                          },
                          expression: "y2"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue?vue&type=template&id=117204aa&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue?vue&type=template&id=117204aa& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("VSelect", {
        attrs: {
          items: _vm.distortionNames,
          label: "Distortion",
          dense: "",
          filled: "",
          disabled: _vm.disabled
        },
        model: {
          value: _vm.proxyDistortion,
          callback: function($$v) {
            _vm.proxyDistortion = $$v
          },
          expression: "proxyDistortion"
        }
      }),
      _vm._v(" "),
      _c("h4", [_vm._v("Distortion Arguments")]),
      _vm._v(" "),
      _c("h5", { staticClass: "mt2" }, [
        _vm._v(_vm._s(_vm.distortionArgumentsName))
      ]),
      _vm._v(" "),
      _vm.isUsingContolPoints
        ? _c("ControlPoints", {
            attrs: {
              "min-control-points": _vm.minControlPoints,
              "active-offset": _vm.activeOffset,
              disabled: _vm.disabled
            },
            on: {
              "pick-point": function($event) {
                return _vm.$emit("pick-point", $event)
              },
              "pick-point-cancel": function($event) {
                return _vm.$emit("pick-point-cancel")
              },
              "pick-source-apex": _vm.onPickSourceApex
            },
            model: {
              value: _vm.localArgs,
              callback: function($$v) {
                _vm.localArgs = $$v
              },
              expression: "localArgs"
            }
          })
        : _vm.distortion === "AFFINE_PROJECTION"
        ? _c("AffineProjectionArgs", {
            attrs: { disabled: _vm.disabled },
            model: {
              value: _vm.localArgs,
              callback: function($$v) {
                _vm.localArgs = $$v
              },
              expression: "localArgs"
            }
          })
        : _vm.distortion === "PERSPECTIVE_PROJECTION"
        ? _c("PerspectiveProjectionArgs", {
            attrs: { disabled: _vm.disabled },
            model: {
              value: _vm.localArgs,
              callback: function($$v) {
                _vm.localArgs = $$v
              },
              expression: "localArgs"
            }
          })
        : _vm.distortion === "ARC"
        ? _c("ArcArgs", {
            attrs: { disabled: _vm.disabled },
            model: {
              value: _vm.localArgs,
              callback: function($$v) {
                _vm.localArgs = $$v
              },
              expression: "localArgs"
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=template&id=42808a23&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=template&id=42808a23&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "VCard",
    { staticClass: "image-area d-flex" },
    [
      _c(
        "VToolbar",
        { staticClass: "flex-grow-0", attrs: { dense: "" } },
        [
          _c(
            "VTabs",
            {
              attrs: { color: "white" },
              model: {
                value: _vm.imageTab,
                callback: function($$v) {
                  _vm.imageTab = $$v
                },
                expression: "imageTab"
              }
            },
            [
              _c("VTab", [_vm._v("\n                Original\n            ")]),
              _vm._v(" "),
              _c("VTab", { attrs: { disabled: _vm.isTabDistortedDisabled } }, [
                _vm._v("\n                Distorted\n            ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("VSpacer"),
          _vm._v(" "),
          _c(
            "VMenu",
            {
              attrs: { "close-on-content-click": false },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function(ref) {
                    var on = ref.on
                    return [
                      _c(
                        "VBtn",
                        _vm._g({ attrs: { icon: "" } }, on),
                        [_c("VIcon", [_vm._v("mdi-tune")])],
                        1
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.tuneMenu,
                callback: function($$v) {
                  _vm.tuneMenu = $$v
                },
                expression: "tuneMenu"
              }
            },
            [
              _vm._v(" "),
              _c(
                "VCard",
                [
                  _c(
                    "VCardText",
                    [
                      _c("VSwitch", {
                        attrs: { label: "Apply Viewport Offset", dense: "" },
                        model: {
                          value: _vm.applyViewportOffset,
                          callback: function($$v) {
                            _vm.applyViewportOffset = $$v
                          },
                          expression: "applyViewportOffset"
                        }
                      }),
                      _vm._v(" "),
                      _c("VSwitch", {
                        attrs: { label: "Show Axes", dense: "" },
                        model: {
                          value: _vm.showAxes,
                          callback: function($$v) {
                            _vm.showAxes = $$v
                          },
                          expression: "showAxes"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "VCardActions",
                    [
                      _c(
                        "VBtn",
                        {
                          on: {
                            click: function($event) {
                              _vm.tuneMenu = false
                            }
                          }
                        },
                        [_vm._v("Close")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "VSheet",
        {
          staticClass:
            "overflow-hidden flex-grow-1 flex-shrink-1 image-area__viewport",
          attrs: { tile: "" }
        },
        [
          _vm.showAxes
            ? [
                _c("div", {
                  staticClass: "image-area__axis x-axis",
                  style: _vm.xAxisPosition
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass: "image-area__axis y-axis",
                  style: _vm.yAxisPosition
                })
              ]
            : _vm._e(),
          _vm._v(" "),
          _c("ImageViewer", {
            ref: "imageViewer",
            staticClass: "image-area__image-plane fill-height",
            class: _vm.imageViewerClass,
            attrs: {
              src: _vm.src,
              scale: _vm.scale,
              position: _vm.position,
              "min-scale": _vm.minScale,
              "max-scale": _vm.maxScale,
              offset: _vm.imageOffset
            },
            on: {
              "update:scale": function($event) {
                _vm.scale = $event
              },
              "update:position": function($event) {
                _vm.position = $event
              },
              click: function($event) {
                return _vm.$emit("plane-click", $event)
              }
            },
            nativeOn: {
              mousemove: function($event) {
                return _vm.onViewportMouseMove($event)
              },
              mouseleave: function($event) {
                return _vm.onViewportMouseLeave($event)
              }
            }
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "VCardActions",
        [
          _c(
            "VToolbar",
            { attrs: { dense: "", flat: "" } },
            [
              _c(
                "VBtn",
                {
                  attrs: { icon: "", small: "", disabled: _vm.isMinScale },
                  on: {
                    click: function($event) {
                      return _vm.zoom(false)
                    }
                  }
                },
                [_c("VIcon", [_vm._v("mdi-magnify-minus-outline")])],
                1
              ),
              _vm._v(" "),
              _c(
                "VMenu",
                {
                  attrs: { top: "" },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        return [
                          _c(
                            "VBtn",
                            _vm._g(
                              {
                                staticClass: "ml-2",
                                attrs: { small: "", width: "30" }
                              },
                              on
                            ),
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.scalePercentage) +
                                  "%\n                    "
                              )
                            ]
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "VList",
                    [
                      _c(
                        "VListItem",
                        {
                          on: {
                            click: function($event) {
                              _vm.scale = 1
                            }
                          }
                        },
                        [
                          _c("VListItemTitle", [
                            _vm._v(
                              "\n                            100%\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "VListItem",
                        { on: { click: _vm.fit } },
                        [
                          _c("VListItemTitle", [
                            _vm._v(
                              "\n                            Fit\n                        "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "VBtn",
                {
                  staticClass: "ml-2",
                  attrs: { icon: "", small: "", disabled: _vm.isMaxScale },
                  on: {
                    click: function($event) {
                      return _vm.zoom(true)
                    }
                  }
                },
                [_c("VIcon", [_vm._v("mdi-magnify-plus-outline")])],
                1
              ),
              _vm._v(" "),
              _c("VSpacer"),
              _vm._v(" "),
              _vm.crosshair
                ? [
                    _c(
                      "VSheet",
                      {
                        staticClass: "hidden-sm-and-down pa-1 text-center",
                        attrs: { width: "100" }
                      },
                      [
                        _vm._v(
                          "\n                    x: " +
                            _vm._s(_vm.cursorAtX) +
                            "\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "VSheet",
                      {
                        staticClass: "hidden-sm-and-down pa-1 text-center ml-2",
                        attrs: { width: "100" }
                      },
                      [
                        _vm._v(
                          "\n                    y: " +
                            _vm._s(_vm.cursorAtY) +
                            "\n                "
                        )
                      ]
                    )
                  ]
                : _vm._e()
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=template&id=617039a8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=template&id=617039a8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._g(
      { staticClass: "image-viewer", class: _vm.containerClass },
      _vm.mouseTouchHandlers
    ),
    [
      _c(
        "VPanzoom",
        {
          staticClass: "image-viewer__image",
          attrs: {
            tag: "div",
            bounds: _vm.lockBounds,
            "smooth-scroll": false,
            scale: _vm.localScale,
            position: _vm.localPosition,
            "min-zoom": _vm.minScale,
            "max-zoom": _vm.maxScale
          },
          on: {
            "update:scale": function($event) {
              _vm.localScale = $event
            },
            "update:position": function($event) {
              _vm.localPosition = $event
            },
            panstart: _vm.onPanStart,
            panend: _vm.onPanEnd
          }
        },
        [_c("img", { style: _vm.imageStyle, attrs: { src: _vm.src, alt: "" } })]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-settings.vue?vue&type=template&id=2bc5acf1&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/image-settings.vue?vue&type=template&id=2bc5acf1& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("FileSelectionArea", {
        staticClass: "mb-3",
        attrs: { disabled: _vm.disabled },
        on: {
          input: function($event) {
            return _vm.$emit("change-image", $event)
          }
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var click = ref.click
              return [
                _c(
                  "VBtn",
                  { attrs: { disabled: _vm.disabled }, on: { click: click } },
                  [_vm._v("Change Image")]
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("VSelect", {
        attrs: {
          items: _vm.interpolationMethods,
          label: "Interpolation Method",
          dense: "",
          filled: "",
          disabled: _vm.disabled
        },
        model: {
          value: _vm.selectedInterpolationMethod,
          callback: function($$v) {
            _vm.selectedInterpolationMethod = $$v
          },
          expression: "selectedInterpolationMethod"
        }
      }),
      _vm._v(" "),
      _c("VSelect", {
        attrs: {
          items: _vm.virtualPixelMethods,
          label: "Virtual Pixel Method",
          dense: "",
          filled: "",
          disabled: _vm.disabled
        },
        model: {
          value: _vm.selectedVirtualPixelMethod,
          callback: function($$v) {
            _vm.selectedVirtualPixelMethod = $$v
          },
          expression: "selectedVirtualPixelMethod"
        }
      }),
      _vm._v(" "),
      _c("ColorInput", {
        attrs: { label: "Background Color", disabled: _vm.disabled },
        model: {
          value: _vm.selectedBackgroundColor,
          callback: function($$v) {
            _vm.selectedBackgroundColor = $$v
          },
          expression: "selectedBackgroundColor"
        }
      }),
      _vm._v(" "),
      _c("h5", [_vm._v("Initial Viewport Offset")]),
      _vm._v(" "),
      _c(
        "VRow",
        { attrs: { dense: "" } },
        [
          _c(
            "VCol",
            { attrs: { cols: "6" } },
            [
              _c("VTextField", {
                attrs: {
                  type: "number",
                  label: "x",
                  dense: "",
                  outlined: "",
                  disabled: _vm.disabled
                },
                model: {
                  value: _vm.localViewportOffset.x,
                  callback: function($$v) {
                    _vm.$set(_vm.localViewportOffset, "x", _vm._n($$v))
                  },
                  expression: "localViewportOffset.x"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "VCol",
            { attrs: { cols: "6" } },
            [
              _c("VTextField", {
                attrs: {
                  type: "number",
                  label: "y",
                  dense: "",
                  outlined: "",
                  disabled: _vm.disabled
                },
                model: {
                  value: _vm.localViewportOffset.y,
                  callback: function($$v) {
                    _vm.$set(_vm.localViewportOffset, "y", _vm._n($$v))
                  },
                  expression: "localViewportOffset.y"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/index.vue?vue&type=template&id=d9410534&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/index.vue?vue&type=template&id=d9410534&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "VContainer",
    { attrs: { fluid: "", "fill-height": "", "align-stretch": "" } },
    [
      !_vm.sourceImage && !_vm.showLoading
        ? _c(
            "FileSelectionArea",
            {
              staticClass: "fill-height d-flex",
              staticStyle: { width: "100%" },
              on: { input: _vm.onFileSelected }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex align-content-center fill-height justify-center align-center"
                },
                [
                  _c(
                    "p",
                    { staticClass: "text-center" },
                    [
                      _c("VIcon", { attrs: { size: "100" } }, [
                        _vm._v("mdi-image")
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      !_vm.isMobile
                        ? [
                            _vm._v(
                              "\n                    Drag image here or click to select\n                "
                            )
                          ]
                        : [
                            _vm._v(
                              "\n                    Tap to select image\n                "
                            )
                          ]
                    ],
                    2
                  )
                ]
              )
            ]
          )
        : _c(
            "VRow",
            { staticClass: "fill-height", attrs: { dense: "" } },
            [
              _c(
                "VCol",
                { attrs: { cols: "12", md: "8", lg: "9" } },
                [
                  _vm.sourceImage
                    ? _c("ImageArea", {
                        staticClass: "fill-height",
                        attrs: {
                          "source-image": _vm.sourceImage,
                          "distorted-image": _vm.distortedImage,
                          "initial-viewport-offset":
                            _vm.imageOptions.initialViewportOffset,
                          crosshair: _vm.waitingForPoint !== null
                        },
                        on: { "plane-click": _vm.onImagePlaneClick }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "VCol",
                {
                  staticClass: "d-none d-md-flex",
                  attrs: { cols: "12", md: "4", lg: "3" }
                },
                [
                  _c("div", { staticClass: "relative-wrapper" }, [
                    _c(
                      "div",
                      { staticClass: "absolute-wrapper" },
                      [
                        _c(
                          "VTabs",
                          {
                            model: {
                              value: _vm.inputOutputTab,
                              callback: function($$v) {
                                _vm.inputOutputTab = $$v
                              },
                              expression: "inputOutputTab"
                            }
                          },
                          [
                            _c("VTab", [_vm._v("Input Settings")]),
                            _vm._v(" "),
                            _c(
                              "VTab",
                              { attrs: { disabled: _vm.isOutputTabDisabled } },
                              [_vm._v("Output Info")]
                            ),
                            _vm._v(" "),
                            _c(
                              "VTabItem",
                              [
                                _c(
                                  "VCard",
                                  [
                                    _c(
                                      "VCardText",
                                      [
                                        _c(
                                          "portal",
                                          {
                                            attrs: {
                                              to: "mobileInputSettings",
                                              disabled: !_vm.isMobile
                                            }
                                          },
                                          [
                                            _c("InputSettings", {
                                              attrs: {
                                                "source-image": _vm.sourceImage,
                                                "image-options":
                                                  _vm.imageOptions,
                                                distortion: _vm.distortion,
                                                "distortion-options":
                                                  _vm.options,
                                                "args-active-offset":
                                                  _vm.waitingForPoint,
                                                disabled: _vm.showLoading
                                              },
                                              on: {
                                                "update:imageOptions": function(
                                                  $event
                                                ) {
                                                  _vm.imageOptions = $event
                                                },
                                                "update:image-options": function(
                                                  $event
                                                ) {
                                                  _vm.imageOptions = $event
                                                },
                                                "update:distortion": function(
                                                  $event
                                                ) {
                                                  _vm.distortion = $event
                                                },
                                                "update:distortionOptions": function(
                                                  $event
                                                ) {
                                                  _vm.options = $event
                                                },
                                                "update:distortion-options": function(
                                                  $event
                                                ) {
                                                  _vm.options = $event
                                                },
                                                "change-image":
                                                  _vm.onFileSelected,
                                                "pick-point": _vm.onPickPoint,
                                                "pick-point-cancel":
                                                  _vm.onPickPointCancel
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "VTabItem",
                              [
                                _vm.hasDistortionResult
                                  ? _c(
                                      "VCard",
                                      [
                                        _c(
                                          "VCardText",
                                          [
                                            _c(
                                              "portal",
                                              {
                                                attrs: {
                                                  to: "mobileOutputInfo",
                                                  disabled: !_vm.isMobile
                                                }
                                              },
                                              [
                                                _c("OutputInfo", {
                                                  staticClass: "mt-2",
                                                  attrs: {
                                                    "processing-time":
                                                      _vm.distortionTime,
                                                    "distorted-viewport":
                                                      _vm.distortedViewport
                                                  },
                                                  on: {
                                                    "use-distorted-as-source":
                                                      _vm.onUseDistortedAsSource
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ],
            1
          ),
      _vm._v(" "),
      _vm.isMobile
        ? _c(
            "VDialog",
            {
              attrs: {
                fullscreen: "",
                transition: "dialog-bottom-transition",
                scrollable: ""
              },
              model: {
                value: _vm.showMobileInputSettings,
                callback: function($$v) {
                  _vm.showMobileInputSettings = $$v
                },
                expression: "showMobileInputSettings"
              }
            },
            [
              _c(
                "VCard",
                [
                  _c(
                    "VToolbar",
                    [
                      _c(
                        "VBtn",
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.closeInputSettingsDialog($event)
                            }
                          }
                        },
                        [_c("VIcon", [_vm._v("mdi-close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("VToolbarTitle", [_vm._v("Input Settings")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "VCardText",
                    [
                      _c("PortalTarget", {
                        attrs: { name: "mobileInputSettings" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "VCardActions",
                    [
                      _c(
                        "VBtn",
                        {
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.onDistortBtnClick($event)
                            }
                          }
                        },
                        [
                          _c("VIcon", [_vm._v("mdi-camera-iris")]),
                          _vm._v(" Distort\n                ")
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isMobile
        ? _c(
            "VDialog",
            {
              attrs: { fullscreen: "", transition: "dialog-bottom-transition" },
              model: {
                value: _vm.showMobileOutputInfo,
                callback: function($$v) {
                  _vm.showMobileOutputInfo = $$v
                },
                expression: "showMobileOutputInfo"
              }
            },
            [
              _c(
                "VCard",
                [
                  _c(
                    "VToolbar",
                    [
                      _c(
                        "VBtn",
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.closeOutputInfoDialog($event)
                            }
                          }
                        },
                        [_c("VIcon", [_vm._v("mdi-close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("VToolbarTitle", [_vm._v("Output Info")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "VCardText",
                    [
                      _c("PortalTarget", {
                        attrs: { name: "mobileOutputInfo" }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("DistortionButton", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isSourceImageLoaded,
            expression: "isSourceImageLoaded"
          }
        ],
        attrs: {
          mobile: _vm.isMobile,
          loading: _vm.performingDistortion,
          "show-output-info": _vm.hasDistortionResult
        },
        on: {
          distort: _vm.onDistortBtnClick,
          "show-input-settings": _vm.openInputSettingsDialog,
          "show-output-info": _vm.openOutputInfoDialog
        }
      }),
      _vm._v(" "),
      _vm.showLoading
        ? _c(
            "VOverlay",
            [
              _c("VProgressCircular", {
                attrs: { indeterminate: "", size: "100" }
              })
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/input-settings.vue?vue&type=template&id=4c0baa3c&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/input-settings.vue?vue&type=template&id=4c0baa3c& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", { staticClass: "mb-3" }, [_vm._v("Image Settings")]),
      _vm._v(" "),
      _c("ImageSettings", {
        attrs: {
          "interpolation-method": _vm.localImageOptions.interpolationMethod,
          "virtual-pixel-method": _vm.localImageOptions.virtualPixelMethod,
          "background-color": _vm.localImageOptions.backgroundColor,
          "viewport-offset": _vm.localImageOptions.initialViewportOffset,
          disabled: _vm.disabled
        },
        on: {
          "update:interpolationMethod": function($event) {
            return _vm.$set(
              _vm.localImageOptions,
              "interpolationMethod",
              $event
            )
          },
          "update:interpolation-method": function($event) {
            return _vm.$set(
              _vm.localImageOptions,
              "interpolationMethod",
              $event
            )
          },
          "update:virtualPixelMethod": function($event) {
            return _vm.$set(_vm.localImageOptions, "virtualPixelMethod", $event)
          },
          "update:virtual-pixel-method": function($event) {
            return _vm.$set(_vm.localImageOptions, "virtualPixelMethod", $event)
          },
          "update:backgroundColor": function($event) {
            return _vm.$set(_vm.localImageOptions, "backgroundColor", $event)
          },
          "update:background-color": function($event) {
            return _vm.$set(_vm.localImageOptions, "backgroundColor", $event)
          },
          "update:viewportOffset": function($event) {
            return _vm.$set(
              _vm.localImageOptions,
              "initialViewportOffset",
              $event
            )
          },
          "update:viewport-offset": function($event) {
            return _vm.$set(
              _vm.localImageOptions,
              "initialViewportOffset",
              $event
            )
          },
          "change-image": function($event) {
            return _vm.$emit("change-image", $event)
          }
        }
      }),
      _vm._v(" "),
      _c("VDivider"),
      _vm._v(" "),
      _c("h3", { staticClass: "mt-4 mb-3" }, [_vm._v("Distortion Settings")]),
      _vm._v(" "),
      _c("DistortionSettings", {
        staticClass: "mb-3",
        attrs: {
          distortion: _vm.localDistortion.name,
          args: _vm.localDistortion.args,
          disabled: _vm.disabled,
          "source-image": _vm.sourceImage,
          "viewport-offset": _vm.imageOptions.initialViewportOffset,
          "active-offset": _vm.argsActiveOffset
        },
        on: {
          "update:distortion": function($event) {
            return _vm.$set(_vm.localDistortion, "name", $event)
          },
          "update:args": function($event) {
            return _vm.$set(_vm.localDistortion, "args", $event)
          },
          "pick-point": function($event) {
            return _vm.$emit("pick-point", $event)
          },
          "pick-point-cancel": function($event) {
            return _vm.$emit("pick-point-cancel", $event)
          }
        }
      }),
      _vm._v(" "),
      _c("VDivider"),
      _vm._v(" "),
      _c("h3", { staticClass: "mt-4 mb-3" }, [_vm._v("Options")]),
      _vm._v(" "),
      _c("DistortionOptions", {
        attrs: {
          resample: _vm.localDistortionOptions.resample,
          "filter-preset": _vm.localDistortionOptions.filterPreset,
          "custom-filter-options":
            _vm.localDistortionOptions.customFilterOptions,
          "matte-color": _vm.localDistortionOptions.matteColor,
          supersample: _vm.localDistortionOptions.supersample,
          "best-fit": _vm.localDistortionOptions.bestFit,
          "use-custom-viewport": _vm.localDistortionOptions.useCustomViewport,
          "custom-viewport": _vm.localDistortionOptions.customViewport,
          "disable-best-fit": _vm.bestFitViewportDisabled,
          "disable-source-viewport": _vm.sourceViewportDisabled,
          disabled: _vm.disabled
        },
        on: {
          "update:resample": function($event) {
            return _vm.$set(_vm.localDistortionOptions, "resample", $event)
          },
          "update:filterPreset": function($event) {
            return _vm.$set(_vm.localDistortionOptions, "filterPreset", $event)
          },
          "update:filter-preset": function($event) {
            return _vm.$set(_vm.localDistortionOptions, "filterPreset", $event)
          },
          "update:customFilterOptions": function($event) {
            return _vm.$set(
              _vm.localDistortionOptions,
              "customFilterOptions",
              $event
            )
          },
          "update:custom-filter-options": function($event) {
            return _vm.$set(
              _vm.localDistortionOptions,
              "customFilterOptions",
              $event
            )
          },
          "update:matteColor": function($event) {
            return _vm.$set(_vm.localDistortionOptions, "matteColor", $event)
          },
          "update:matte-color": function($event) {
            return _vm.$set(_vm.localDistortionOptions, "matteColor", $event)
          },
          "update:supersample": function($event) {
            return _vm.$set(_vm.localDistortionOptions, "supersample", $event)
          },
          "update:bestFit": function($event) {
            return _vm.$set(_vm.localDistortionOptions, "bestFit", $event)
          },
          "update:best-fit": function($event) {
            return _vm.$set(_vm.localDistortionOptions, "bestFit", $event)
          },
          "update:useCustomViewport": function($event) {
            return _vm.$set(
              _vm.localDistortionOptions,
              "useCustomViewport",
              $event
            )
          },
          "update:use-custom-viewport": function($event) {
            return _vm.$set(
              _vm.localDistortionOptions,
              "useCustomViewport",
              $event
            )
          },
          "update:customViewport": function($event) {
            return _vm.$set(
              _vm.localDistortionOptions,
              "customViewport",
              $event
            )
          },
          "update:custom-viewport": function($event) {
            return _vm.$set(
              _vm.localDistortionOptions,
              "customViewport",
              $event
            )
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/output-info.vue?vue&type=template&id=69018ce4&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/output-info.vue?vue&type=template&id=69018ce4& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("VTextField", {
        attrs: {
          label: "Processing Time",
          value: _vm.distortionTimeString,
          readonly: "",
          dense: "",
          outlined: ""
        }
      }),
      _vm._v(" "),
      _c("h5", { staticClass: "mt-3" }, [_vm._v("Output Viewport")]),
      _vm._v(" "),
      _c(
        "VRow",
        { attrs: { dense: "" } },
        _vm._l(_vm.distortedViewport, function(value, key) {
          return _c(
            "VCol",
            {
              key: key,
              attrs: { cols: key === "width" || key === "height" ? 6 : 3 }
            },
            [
              _c("VTextField", {
                attrs: {
                  label: key,
                  value: value,
                  readonly: "",
                  dense: "",
                  outlined: ""
                }
              })
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "VBtn",
        {
          on: {
            click: function($event) {
              return _vm.$emit("use-distorted-as-source")
            }
          }
        },
        [_vm._v("\n        Use As Source Image\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/color-input.vue?vue&type=style&index=0&id=cb6e9518&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/color-input.vue?vue&type=style&index=0&id=cb6e9518&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./color-input.vue?vue&type=style&index=0&id=cb6e9518&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/color-input.vue?vue&type=style&index=0&id=cb6e9518&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4996b3c1", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=style&index=0&id=42808a23&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=style&index=0&id=42808a23&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./image-area.vue?vue&type=style&index=0&id=42808a23&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=style&index=0&id=42808a23&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("09271e9a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=style&index=0&id=617039a8&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=style&index=0&id=617039a8&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./image-viewer.vue?vue&type=style&index=0&id=617039a8&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=style&index=0&id=617039a8&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3e59d98c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/index.vue?vue&type=style&index=0&id=d9410534&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/index.vue?vue&type=style&index=0&id=d9410534&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=d9410534&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/index.vue?vue&type=style&index=0&id=d9410534&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2beef19e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/file-selection-area/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/file-selection-area/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function hasFilesInDraggable(event) {
  if (!('items' in event.dataTransfer)) {
    // If items is not supported, return true
    return true;
  }

  for (var i = 0, item; item = event.dataTransfer.items[i]; i++) {
    if (item.kind.toLowerCase() === 'file') {
      return true;
    }
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FileSelectionArea',

  props:  {
    id:         String,
    multiple: Boolean,
    disabled: Boolean
  },

  data() {
    return {
      files:           [],
      displayDropZone:        false,
      dragenterCounter:       0
    }
  },

  created() {
    this.onDocDragEnter    = event => {
      if (!this.disabled) {
        if (hasFilesInDraggable(event)) {
          this.showDropZone();
        }
      }
    };
  },

  mounted() {
    document.addEventListener('dragenter', this.onDocDragEnter);
  },

  beforeDestroy() {
    document.removeEventListener('dragenter', this.onDocDragEnter);
  },

  methods:    {
    openFileDialog() {
      this.$refs.input.click();
    },

    onFileInputChange(event) {
      this.handleFileSelection(event.target.files);
    },

    handleFileSelection(files) {
      if (!this.disabled) {
        if (files) {
          this.files      = Array.prototype.filter.call(files, file => /image\/jpe?g|png/.test(file.type));

          if (!this.files.length) {
            this.files = null;
          }
        } else {
          this.files      = null;
        }

        this.$emit('input', this.files);
      }
    },

    onDropZoneDragover(event) {
      event.preventDefault();
    },

    onDropZoneDragenter(event) {
      this.dragenterCounter++;
    },

    onDropzoneDragleave(event) {
      this.dragenterCounter--;

      if (!this.dragenterCounter) {
        this.hideDropZone();
      }
    },

    onDrop(event) {
      this.hideDropZone();
      this.dragenterCounter   = 0;


      this.handleFileSelection(event.dataTransfer.files);
    },

    showDropZone() {
      this.displayDropZone    = true;
    },

    hideDropZone() {
      this.displayDropZone    = false;
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/color-input.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/color-input.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function alphaFractToQuantum(fract) {
  return Math.round(fract * 255);
}

function alphaQuantumToFract(quantum) {
  return quantum / 255;
}

function rgbaObjectToArray({r, g, b, a}) {
  return [
    r, g, b,
    alphaFractToQuantum(a)
  ];
}

function arrayToRgbaObject([r, g, b, a]) {
  a = alphaQuantumToFract(a);

  return {r, g, b, a};
}

function isSameColor(rgba1, rgba2) {
  return rgba1.r === rgba2.r  && rgba1.g === rgba2.g && rgba1.b === rgba2.b && rgba1.a === rgba2.a;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ColorInput',

  props: {
    value: {
      type: Array,
      default() {
        return [255, 255, 255, 255];
      }
    },

    label: String,

    disabled: Boolean
  },

  data() {
    return {
      menu: false,
      color: arrayToRgbaObject(this.value)
    };
  },

  computed: {
    sheetColor() {
      return `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`;
    }
  },

  watch: {
    color(newColor, oldColor) {
      if (!isSameColor(newColor, oldColor)) {
        this.$emit('input', rgbaObjectToArray(newColor));
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _distortion_args_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distortion-args-mixin */ "./src/js/components/pages/lens-playground/distortion-arguments/distortion-args-mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



// Notice indexes: arguments order is [sx, ry, rx, sy, tx, ty]
const argsMap = [
  {
    label: 'sx',
    index: 0
  },
  {
    label: 'rx',
    index: 2
  },
  {
    label: 'tx',
    index: 4
  },
  {
    label: 'ry',
    index: 1
  },
  {
    label: 'sy',
    index: 3
  },
  {
    label: 'ty',
    index: 5
  }
];

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AffineProjectionArgs',

  mixins: [_distortion_args_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],

  data() {
    return {
      argsMap
    };
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _distortion_args_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distortion-args-mixin */ "./src/js/components/pages/lens-playground/distortion-arguments/distortion-args-mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ArcArgs',

  mixins: [_distortion_args_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],

  computed: {
    fields() {
      return [
        {
          label: 'Arc Angle',
          clearable: false,
          min: 0.1,
          max: 360
        },
        {
          label: 'Rotation Angle',
          clearable: true
        },
        {
          label: 'Outer Radius',
          clearable: true
        },
        {
          label: 'Inner Radius',
          clearable: true,
          min: 0
        }
      ];
    }
  },

  methods: {
    emitInput() {
      let index;
      let value = this.getFilteredArray();

      for (let i = value.length - 1; i > 0; i--) {
        if (value[i] === null) {
          index = i;
        } else {
          break;
        }
      }

      if (index) {
        value.splice(index);
      }

      this.$emit('input', value);
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/control-points.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-arguments/control-points.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _distortion_args_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distortion-args-mixin */ "./src/js/components/pages/lens-playground/distortion-arguments/distortion-args-mixin.js");
/* harmony import */ var _points_mapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./points-mapping */ "./src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ControlPoints',

  mixins: [_distortion_args_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],

  components: {
    PointsMapping: _points_mapping__WEBPACK_IMPORTED_MODULE_1__["default"]
  },

  props: {
    minControlPoints: {
      type: Number,
      default: 0
    },

    activeOffset: {
      type: [Number, null],
      default: null
    }
  },


  computed: {
    controlPointsGroups() {
      const groups    = [];

      for (let i = 0; i < this.localValue.length; i += 4) {
        groups.push(
          this.localValue.slice(i, i + 4)
        );
      }

      return groups;
    },

    controlPointsNumber() {
      return this.localValue.length / 4;
    },

    enableDeletion() {
      return this.controlPointsNumber > this.minControlPoints;
    }
  },

  methods: {
    addControlPoint(u = 0, v = 0, x = 0, y = 0) {
      this.localValue.splice(this.localValue.length, 0, u, v, x, y);
      this.emitInput();
    },

    removeControlPoint(groupIndex) {
      this.localValue.splice(groupIndex * 4, 4);
      this.emitInput();
    },

    pickApex({location, offset}, groupOffset) {
      offset += groupOffset * 4;
      this.$emit('pick-source-apex', {location, offset});
    },

    pickPoint(offset, groupOffset) {
      offset += groupOffset * 4;
      this.$emit('pick-point', offset);
    },

    getActiveOffset(groupIndex) {
      if (this.activeOffset === null) {
        return null;
      }

      const index = Math.floor(this.activeOffset / 4);

      return index === groupIndex ? this.activeOffset % 4 : null;
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CoordsPair',

  props: {
    x: {
      type: Number,
      default: 0
    },

    y: {
      type: Number,
      default: 0
    },

    xLabel: {
      type: String,
      default: 'x'
    },

    yLabel: {
      type: String,
      default: 'y'
    },

    disabled: Boolean
  },

  computed: {
    xval: {
      get() {
        return this.x;
      },

      set(x) {
        this.$emit('update:x', x);
      }
    },

    yval: {
      get() {
        return this.y;
      },

      set(y) {
        this.$emit('update:y', y);
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _distortion_args_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distortion-args-mixin */ "./src/js/components/pages/lens-playground/distortion-arguments/distortion-args-mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PerspectiveProjectionArgs',

  mixins: [_distortion_args_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],

  data() {
    return {
      coeffNames: ['sx', 'ry', 'tx', 'rx', 'sy', 'ty', 'px', 'py'],
    };
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coords_pair__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coords-pair */ "./src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



function createComputed(prop) {
  return {
    get() {
      return this[prop];
    },

    set(value) {
      this.$emit(`update:${prop}`, value);
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PointsMapping',

  components: {
    CoordsPair: _coords_pair__WEBPACK_IMPORTED_MODULE_0__["default"]
  },

  props: {
    u: {
      type: Number,
      default: 0
    },

    v: {
      type: Number,
      default: 0
    },

    x: {
      type: Number,
      default: 0
    },

    y: {
      type: Number,
      default: 0
    },

    index: Number,

    disabled: Boolean,

    enableDeletion: {
      type: Boolean,
      default: true
    },

    activeOffset: {
      type: [Number, null],
      default: null
    }
  },

  data() {
    return {
      showMenu: false
    };
  },

  computed: {
    uval: createComputed('u'),
    vval: createComputed('v'),
    xval: createComputed('x'),
    yval: createComputed('y'),

    labelIndex() {
      return this.index !== undefined ? this.index : '';
    },

    ulabel() {
      return `u${this.labelIndex}`;
    },

    vlabel() {
      return `v${this.labelIndex}`;
    },

    xlabel() {
      return `x${this.labelIndex}`;
    },

    ylabel() {
      return `y${this.labelIndex}`;
    }
  },

  methods: {
    pickApex(location, offset) {
      this.$emit('pick-source-apex', {location, offset});
      this.showMenu = false;
    },

    pickPoint(offset) {
      this.$emit('pick-point', offset);
      this.showMenu = false;
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-button.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-button.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DistortionButton',

  props: {
    mobile: Boolean,
    disabled: Boolean,
    loading: Boolean,
    disableDistortion: Boolean,
    showOutputInfo: Boolean
  },

  data() {
    return {
      fab: false,
      showMainBadge: false,
      showOutputInfoBadge: false
    }
  },

  watch: {
    showOutputInfo(val) {
      this.showMainBadge = val;
      this.showOutputInfoBadge = val;
    }
  },

  methods: {
    onShowOutputInfo() {
      this.showMainBadge = false;
      this.showOutputInfoBadge = false;
      this.$emit('show-output-info');
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/distortion-options.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-options/distortion-options.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ "./src/js/utils.js");
/* harmony import */ var _filter_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-settings */ "./src/js/components/pages/lens-playground/distortion-options/filter-settings.vue");
/* harmony import */ var _color_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-input */ "./src/js/components/pages/lens-playground/color-input.vue");
/* harmony import */ var _supersampling_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supersampling-settings */ "./src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue");
/* harmony import */ var _viewport_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewport-settings */ "./src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







const props = {
  resample: Boolean,

  filterPreset: String,

  customFilterOptions: Object,

  supersample: [Boolean, Number],

  matteColor: Array,

  bestFit: Boolean,

  useCustomViewport: Boolean,

  customViewport: Object,

  disableResampling: Boolean,

  disableBestFit: Boolean,

  disableSourceViewport: Boolean,

  disabled: Boolean
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DistortionOptions',

  components: {
    FilterSettings: _filter_settings__WEBPACK_IMPORTED_MODULE_1__["default"],
    ColorInput: _color_input__WEBPACK_IMPORTED_MODULE_2__["default"],
    SupersamplingSettings: _supersampling_settings__WEBPACK_IMPORTED_MODULE_3__["default"],
    ViewportSettings: _viewport_settings__WEBPACK_IMPORTED_MODULE_4__["default"]
  },

  props,

  computed: {
    ...Object(_utils__WEBPACK_IMPORTED_MODULE_0__["massSimpleProxy"])(Object.keys(props), 'proxy', ['disableResampling',
                                                     'disableBestFit',
                                                     'disableSourceViewport',
                                                     'disabled'])
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ "./src/js/utils.js");
/* harmony import */ var _filter_function_configurator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-function-configurator */ "./src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const props = {
  filterFunc: String,

  filterFuncCubicBC_b: Number,

  filterFuncCubicBC_c: Number,

  windowFunc: String,

  windowFuncCubicBC_b: Number,

  windowFuncCubicBC_c: Number,

  support: Number,

  scale: Number,

  blur: Number,

  windowSupport: Number,

  disabled: Boolean
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FilterConfigurator',

  components: {
    FilterFunctionConfigurator: _filter_function_configurator__WEBPACK_IMPORTED_MODULE_1__["default"]
  },

  props,

  computed: {
    ...Object(_utils__WEBPACK_IMPORTED_MODULE_0__["massSimpleProxy"])(Object.keys(props), 'proxy', ['disabled'])
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ "./src/js/utils.js");
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @alxcube/lens */ "../lens-js/dist/lens.min.js");
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alxcube_lens__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const props = {
  name: String,

  cubicBC_b: Number,

  cubicBC_c: Number,

  label: String,

  disabled: Boolean
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FilterFunctionConfigurator',

  props,

  computed: {
    ...Object(_utils__WEBPACK_IMPORTED_MODULE_0__["massSimpleProxy"])(Object.keys(props), 'proxy', ['label', 'disabled']),

    filterFunctionNames() {
      return Object.keys(_alxcube_lens__WEBPACK_IMPORTED_MODULE_1__["filter"].filterFunctions);
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/filter-settings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-options/filter-settings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ "./src/js/utils.js");
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @alxcube/lens */ "../lens-js/dist/lens.min.js");
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alxcube_lens__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _filter_configurator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-configurator */ "./src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





function createFilterOptionProxy(name) {
  return {
    get() {
      return this.localFilterOptions[name];
    },
    
    set(value) {
      this.localFilterOptions[name] = value;
      this.$emit('update:custom-filter-options', this.localFilterOptions);
    }
  };
}

const props = {
  filterPreset: String,

  customFilterOptions: Object,

  disabled: Boolean
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FilterSettings',
  
  components: {
    FilterConfigurator: _filter_configurator__WEBPACK_IMPORTED_MODULE_2__["default"]
  },

  props,

  data() {
    return {
      localFilterOptions: {}
    };
  },

  computed: {
    proxyFilterPreset: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["simpleProxy"])('filterPreset'),
    
    presetNames() {
      let names = Object.keys(_alxcube_lens__WEBPACK_IMPORTED_MODULE_1__["filterPresets"]);
      names.push('CUSTOM');
      return names;
    },
    
    filterFunc: createFilterOptionProxy('filterFunc'),
    filterFuncCubicBC_b: createFilterOptionProxy('filterFuncCubicBC_b'),
    filterFuncCubicBC_c: createFilterOptionProxy('filterFuncCubicBC_c'),
    windowFunc: createFilterOptionProxy('windowFunc'),
    windowFuncCubicBC_b: createFilterOptionProxy('windowFuncCubicBC_b'),
    windowFuncCubicBC_c: createFilterOptionProxy('windowFuncCubicBC_c'),
    support: createFilterOptionProxy('support'),
    scale: createFilterOptionProxy('scale'),
    blur: createFilterOptionProxy('blur'),
    windowSupport: createFilterOptionProxy('windowSupport')
  },

  methods: {
    emitFilterOptionsUpdate() {
      this.$emit('update:custom-filter-options', this.localFilterOptions);
    }
  },

  watch: {
    customFilterOptions: {
      handler(newOptions, oldOptions) {
        if (newOptions !== oldOptions) {
          Object.keys(newOptions).forEach(key => this.$set(this.localFilterOptions, key, newOptions[key]));
        }
      },

      immediate: true
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SupersamplingSettings',

  props: {
    supersample: [Boolean, Number],
    disabled: Boolean
  },

  data() {
    const enabled = this.supersample !== false;

    return {
      enabled,
      factor:  enabled ? this.supersample : 2
    };
  },

  methods: {
    emitUpdate() {
      if (this.enabled) {
        this.$emit('update:supersample', this.factor);
      } else {
        this.$emit('update:supersample', false);
      }
    }
  },

  watch: {
    supersample(newValue) {
      if (newValue !== false) {
        this.enabled = true;
        this.factor  = newValue;
      } else {
        this.enabled = false;
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function makeComputedVpProp(name) {
  return {
    get() {
      return this.localViewport[name];
    },

    set(val) {
      this.localViewport[name] = val;
      this.emitViewport();
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ViewportSettings',

  props: {
    bestFit: Boolean,

    useCustomViewport: Boolean,

    customViewport: Object,

    bestFitDisabled: Boolean,

    sourceDisabled: Boolean,

    disabled: Boolean
  },

  data() {
    return {
      localViewport: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
      }
    };
  },

  computed: {
    selectedViewport: {
      get() {
        if (this.useCustomViewport) {
          return 'custom';
        } else if (this.bestFit) {
          return 'bestfit';
        } else {
          return 'source';
        }
      },

      set(value) {
        switch (value) {
          case 'source':
            this.$emit('update:best-fit', false);
            this.$emit('update:use-custom-viewport', false);
            break;

          case 'bestfit':
            this.$emit('update:best-fit', true);
            this.$emit('update:use-custom-viewport', false);
            break;

          case 'custom':
            this.$emit('update:best-fit', false);
            this.$emit('update:use-custom-viewport', true);
            this.emitViewport();
            break;
        }
      },
    },

    x1: makeComputedVpProp('x1'),
    y1: makeComputedVpProp('y1'),
    x2: makeComputedVpProp('x2'),
    y2: makeComputedVpProp('y2')
  },

  methods: {
    emitViewport() {
      this.$emit('update:custom-viewport', this.localViewport);
    }
  },

  watch: {
    customViewport: {
      handler(newViewport, oldViewport) {
        if (newViewport !== oldViewport) {
          let {x1, y1, x2, y2} = newViewport;
          this.localViewport = {x1, y1, x2, y2};
        }
      },

      immediate: true
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ "./src/js/utils.js");
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @alxcube/lens */ "../lens-js/dist/lens.min.js");
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alxcube_lens__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _distortion_arguments_control_points__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../distortion-arguments/control-points */ "./src/js/components/pages/lens-playground/distortion-arguments/control-points.vue");
/* harmony import */ var _distortion_arguments_affine_projection_args__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../distortion-arguments/affine-projection-args */ "./src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue");
/* harmony import */ var _distortion_arguments_perspective_projection_args__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../distortion-arguments/perspective-projection-args */ "./src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue");
/* harmony import */ var _distortion_arguments_arc_args__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../distortion-arguments/arc-args */ "./src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








const props = {
  distortion: String,

  args: Array,

  disabled: Boolean,

  sourceImage: {
    type: Image,
    default() {
      return null;
    }
  },

  // Offset of control points pair being selected in distortion arguments array
  activeOffset: {
    type: [Number, null],
    default: null
  },

  viewportOffset: {
    type: Object,
    default() {
      return {x: 0, y: 0}
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DistortionSettings',

  components: {
    ControlPoints: _distortion_arguments_control_points__WEBPACK_IMPORTED_MODULE_2__["default"],
    AffineProjectionArgs: _distortion_arguments_affine_projection_args__WEBPACK_IMPORTED_MODULE_3__["default"],
    PerspectiveProjectionArgs: _distortion_arguments_perspective_projection_args__WEBPACK_IMPORTED_MODULE_4__["default"],
    ArcArgs: _distortion_arguments_arc_args__WEBPACK_IMPORTED_MODULE_5__["default"]
  },

  props,

  data() {
    return {
      localArgs: []
    };
  },

  computed: {
    proxyDistortion: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["simpleProxy"])('distortion'),

    distortionNames() {
      return Object.keys(_alxcube_lens__WEBPACK_IMPORTED_MODULE_1__["distorts"]);
    },

    isUsingContolPoints() {
      return this.distortion === 'AFFINE' || this.distortion === 'PERSPECTIVE';
    },

    minControlPoints() {
      switch (this.distortion) {
        case 'AFFINE':
          return 1;
        case 'PERSPECTIVE':
          return 4;
        default:
          return 0;
      }
    },

    distortionArgumentsName() {
      switch (this.distortion) {
        case 'AFFINE':
        case 'PERSPECTIVE':
          return 'Control Points';

        case 'AFFINE_PROJECTION':
          return 'Affine Matrix';

        case 'PERSPECTIVE_PROJECTION':
          return 'Perspective Matrix';

        case 'ARC':
          return 'Arc Parameters';
      }
    }
  },

  watch: {
    args: {
      handler(args) {
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["arraysEqual"])(args, this.localArgs)) {
          this.localArgs = args.slice();
        }
      },

      immediate: true
    },

    localArgs(args) {
      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["arraysEqual"])(args, this.args)) {
        this.$emit('update:args', args);
      }
    }
  },

  methods: {
    onPickSourceApex({location, offset}) {
      if (this.sourceImage) {
        let x, y;

        switch (location) {
          case 'tl':
            x = 0;
            y = 0;
            break;

          case 'tr':
            x = this.sourceImage.width - 1;
            y = 0;
            break;

          case 'br':
            x = this.sourceImage.width - 1;
            y = this.sourceImage.height - 1;
            break;

          case 'bl':
            x = 0;
            y = this.sourceImage.height - 1;
            break;
        }

        x += this.viewportOffset.x;
        y += this.viewportOffset.y;

        this.localArgs.splice(offset, 2, x, y);
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-viewer */ "./src/js/components/pages/lens-playground/image-area/image-viewer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ImageArea',

  components: {
    ImageViewer: _image_viewer__WEBPACK_IMPORTED_MODULE_0__["default"]
  },

  props: {
    sourceImage: Image,
    distortedImage: Object,
    initialViewportOffset: Object,
    crosshair: Boolean
  },

  data() {
    return {
      imageTab: 0,

      tuneMenu: false,

      applyViewportOffset: false,

      showAxes: true,

      scale: 1,

      position: {
        x: 0,
        y: 0
      },

      minScale: 0.1,

      maxScale: 4,

      cursorAt: {
        x: null,
        y: null
      }
    };
  },

  computed: {
    image() {
      return this.imageTab === 1 && this.distortedImage && this.distortedImage.image || this.sourceImage;
    },

    src() {
      return this.image.src;
    },

    isTabDistortedDisabled() {
      return !this.distortedImage;
    },

    scalePercentage() {
      return Math.round(this.scale * 100);
    },

    isMinScale() {
      return this.scale === this.minScale;
    },

    isMaxScale() {
      return this.scale === this.maxScale;
    },

    imageOffset() {
      if (this.applyViewportOffset) {
        if (this.imageTab === 1 && this.distortedImage) {
          const {x1: x, y1: y} = this.distortedImage.viewport;
          return {x, y};
        } else if (this.initialViewportOffset) {
          const {x, y} = this.initialViewportOffset;
          return {x, y}
        }
      }

      return null;
    },
    
    imageViewerClass() {
      return {
        crosshair: !!this.crosshair
      };
    },

    xAxisPosition() {
      return {
        left: this.position.x + 'px'
      }
    },

    yAxisPosition() {
      return {
        top: this.position.y + 'px'
      }
    },

    cursorAtX() {
      const x = this.cursorAt.x;
      return x !== null ? Math.round(x) : '-';
    },

    cursorAtY() {
      const y = this.cursorAt.y;
      return y !== null ? Math.round(y) : '-';
    },

    cursorAtText() {
      let {x, y} = this.cursorAt;

      if (x === null) {
        x = '-';
      }

      if (y === null) {
        y = '-';
      }

      return `x: ${x}; y: ${y}`;
    }
  },

  watch: {
    distortedImage(newVal) {
      if (!newVal) {
        this.imageTab = 0;
      } else {
        this.imageTab = 1;
      }
    }
  },

  mounted() {
    this.fit();
  },

  methods: {
    zoom(zoomIn) {
      let newScale = this.scale * (zoomIn ? 1.25 : 0.75);

      if (newScale < this.minScale) {
        newScale = this.minScale;
      }

      if (newScale > this.maxScale) {
        newScale = this.maxScale;
      }

      this.scale = newScale;
    },

    fit() {
      const {width: vpWidth, height: vpHeight} = this.$refs.imageViewer.$el.getBoundingClientRect();
      let {width, height} = this.image;
      const ratio = width / height;

      if (width > vpWidth) {
        width = vpWidth;
        height = width / ratio;
      }

      if (height > vpHeight) {
        height = vpHeight;
        width = height * ratio;
      }

      let x, y;

      x = vpWidth / 2 - width / 2;
      y = vpHeight / 2 - height / 2;

      let imageOffset = this.imageOffset;

      if (imageOffset) {
        x -= imageOffset.x;
        y -= imageOffset.y;
      }

      this.scale = width / this.image.width;

      this.$nextTick(() => {
        this.position = {x, y};
      });
    },

    onViewportMouseMove(event) {
      const {top, left} = this.$refs.imageViewer.$el.getBoundingClientRect();
      const containerX = event.pageX - left;
      const containerY = event.pageY - top;
      const scale = 1 / this.scale;
      const x = (containerX - this.position.x) * scale;
      const y = (containerY - this.position.y) * scale;
      this.cursorAt.x = x;
      this.cursorAt.y = y;
    },

    onViewportMouseLeave(event) {
      this.cursorAt = {x: null, y: null};
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_panzoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../v-panzoom */ "./src/js/components/v-panzoom/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



function extractPageCoords(mouseTouchEvent) {
  if (mouseTouchEvent.changedTouches) {
    if (mouseTouchEvent.changedTouches.length === 1) {
      const {pageX, pageY} = mouseTouchEvent.changedTouches[0];
      return {pageX, pageY};
    }

    return null;
  }

  const {pageX, pageY} = mouseTouchEvent;

  return {pageX, pageY};
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ImageViewer',

  components: {
    VPanzoom: _v_panzoom__WEBPACK_IMPORTED_MODULE_0__["default"]
  },

  props: {
    src: String,

    position: {
      type: Object,
      default() {
        return {x: 0, y: 0};
      }
    },

    scale: {
      type: Number,
      default: 1
    },

    minScale: {
      type: Number,
      default: 0.1
    },

    maxScale: {
      type: Number,
      default: 4
    },

    lockBounds: Boolean,

    offset: {
      type: Object,
      default() {
        return {x: 0, y: 0}
      }
    }
  },

  data() {
    let mousedown, mouseup, touchstart, touchend, touchcancel;

    mousedown = mouseup = touchstart = touchend = touchcancel = this.mouseTouchHandler;

    return {
      isPanning: false,
      localScale: this.scale,
      localPosition: this.position,
      cursorStart: null,
      mouseTouchHandlers: {
        mousedown,
        mouseup,
        touchstart,
        touchend,
        touchcancel
      }
    };
  },

  computed: {
    imageStyle() {
      let left = 0;
      let top = 0;

      if (this.offset) {
        left = this.offset.x;
        top = this.offset.y;
      }

      left += 'px';
      top += 'px';

      return {left, top, position: 'relative'};
    },

    containerClass() {
      return {
        panning: this.isPanning
      };
    }
  },

  watch: {
    position({x, y}) {
      if (x !== this.localPosition.x || y !== this.localPosition.y) {
        this.localPosition = {x, y};
      }
    },

    scale(newScale) {
      if (newScale !== this.localScale) {
        this.localScale = newScale;
      }
    },

    localPosition({x, y}) {
      if (x !== this.position.x || y !== this.position.y) {
        this.$emit('update:position', {x, y});
      }
    },

    localScale(newScale) {
      if (newScale !== this.scale) {
        this.$emit('update:scale', newScale);
      }
    }
  },

  methods: {

    onPanStart() {
      this.isPanning = true;
    },

    onPanEnd() {
      this.isPanning = false;
    },

    mouseTouchHandler(event) {
      switch (event.type) {
        case 'mousedown':
        case 'touchstart':
          this.cursorStart = extractPageCoords(event);
          break;

        case 'mouseup':
        case 'touchend':
          this.mouseTouchEnd(event);
          break;

        case 'touchcancel':
        default:
          this.cursorStart = null;
          break;
      }
    },

    mouseTouchEnd(event) {
      if (this.cursorStart) {
        let coords = extractPageCoords(event);

        if (coords && coords.pageX === this.cursorStart.pageX && coords.pageY === this.cursorStart.pageY) {
          this.emitClick(coords);
        }

        this.cursorStart = null;
      }
    },

    emitClick({pageX, pageY}) {
      const {top, left} = this.$el.getBoundingClientRect();
      const containerX = pageX - left;
      const containerY = pageY - top;
      const scale = 1 / this.localScale;
      const x = (containerX - this.localPosition.x) * scale;
      const y = (containerY - this.localPosition.y) * scale;
      this.$emit('click', {x, y});
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-settings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/image-settings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-input */ "./src/js/components/pages/lens-playground/color-input.vue");
/* harmony import */ var _file_selection_area_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../file-selection-area/index */ "./src/js/components/file-selection-area/index.vue");
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @alxcube/lens */ "../lens-js/dist/lens.min.js");
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_alxcube_lens__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






function makeItems(object) {
  return Object.keys(object).map(text => ({
    text,
    value: object[text]
  }));
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ImageSettings',

  components: {
    ColorInput: _color_input__WEBPACK_IMPORTED_MODULE_0__["default"],
    FileSelectionArea: _file_selection_area_index__WEBPACK_IMPORTED_MODULE_1__["default"]
  },

  props: {
    interpolationMethod: {
      type: Number,
      default: _alxcube_lens__WEBPACK_IMPORTED_MODULE_2__["interpolation"].AVERAGE
    },

    virtualPixelMethod: {
      type: Number,
      default: _alxcube_lens__WEBPACK_IMPORTED_MODULE_2__["vpx"].TRANSPARENT
    },

    backgroundColor: {
      type: Array,
      default() {
        return [0, 0, 0, 0];
      }
    },

    viewportOffset: {
      type: Object,
      default() {
        return {x: 0, y: 0}
      }
    },

    disabled: Boolean
  },

  data() {
    return {
      localViewportOffset: {x: 0, y: 0}
    };
  },

  computed: {
    selectedInterpolationMethod: {
      get() {
        return this.interpolationMethod;
      },

      set(method) {
        this.$emit('update:interpolation-method', method);
      }
    },

    selectedVirtualPixelMethod: {
      get() {
        return this.virtualPixelMethod;
      },

      set(method) {
        this.$emit('update:virtual-pixel-method', method);
      }
    },

    selectedBackgroundColor: {
      get() {
        return this.backgroundColor;
      },

      set(color) {
        return this.$emit('update:background-color', color);
      }
    },

    interpolationMethods() {
      return makeItems(_alxcube_lens__WEBPACK_IMPORTED_MODULE_2__["interpolation"]);
    },

    virtualPixelMethods() {
      return makeItems(_alxcube_lens__WEBPACK_IMPORTED_MODULE_2__["vpx"]);
    }
  },

  watch: {
    viewportOffset: {
      handler({x, y}) {
        if (x !== this.localViewportOffset.x || y !== this.localViewportOffset.y) {
          this.localViewportOffset = {x, y};
        }
      },

      immediate: true
    },

    localViewportOffset: {
      handler({x, y}) {
        if (x !== this.viewportOffset.x || y !== this.viewportOffset.y) {
          this.$emit('update:viewport-offset', {x, y});
        }
      },

      deep: true
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_selection_area_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../file-selection-area/index */ "./src/js/components/file-selection-area/index.vue");
/* harmony import */ var _mixins_distorts_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/distorts-image */ "./src/js/components/pages/lens-playground/mixins/distorts-image.js");
/* harmony import */ var _mixins_loads_source_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/loads-source-image */ "./src/js/components/pages/lens-playground/mixins/loads-source-image.js");
/* harmony import */ var _image_area_image_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-area/image-area */ "./src/js/components/pages/lens-playground/image-area/image-area.vue");
/* harmony import */ var _input_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-settings */ "./src/js/components/pages/lens-playground/input-settings.vue");
/* harmony import */ var _output_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./output-info */ "./src/js/components/pages/lens-playground/output-info.vue");
/* harmony import */ var _distortion_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./distortion-button */ "./src/js/components/pages/lens-playground/distortion-button.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LensPlayground",

  mixins: [_mixins_distorts_image__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_loads_source_image__WEBPACK_IMPORTED_MODULE_2__["default"]],

  components: {
    FileSelectionArea: _file_selection_area_index__WEBPACK_IMPORTED_MODULE_0__["default"],
    ImageArea: _image_area_image_area__WEBPACK_IMPORTED_MODULE_3__["default"],
    InputSettings: _input_settings__WEBPACK_IMPORTED_MODULE_4__["default"],
    OutputInfo: _output_info__WEBPACK_IMPORTED_MODULE_5__["default"],
    DistortionButton: _distortion_button__WEBPACK_IMPORTED_MODULE_6__["default"]
  },

  data() {
    return {
      inputOutputTab:         0,
      showMobileInputSettings: false,
      showMobileOutputInfo: false,
      fab: false,
      // When set to number, write picked coords from this index to distortion args
      waitingForPoint: null
    };
  },

  computed: {
    isMobile() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return breakpoint === 'sm' || breakpoint === 'xs';
    },

    isSourceImageLoaded() {
      return !!this.sourceImage;
    },

    hasDistortionResult() {
      return !!this.distortedImage;
    },

    isOutputTabDisabled() {
      return !this.hasDistortionResult;
    },

    showLoading() {
      return this.loadingImage || this.performingDistortion;
    },

    distortedViewport() {
      if (!this.distortedImage) {
        return null;
      }

      const {x1, y1, x2, y2} = this.distortedImage.viewport;
      const {width, height} = this.distortedImage;

      return {x1, y1, x2, y2, width, height};
    }
  },

  watch: {
    'distortion.name': function () {
      this.waitingForPoint = null;
    }
  },

  methods: {
    onFileSelected(files) {
      if (files) {
        if (this.isMobile) {
          this.closeInputSettingsDialog();
        }

        this.sourceImage = null;
        this.distortedImage = null;
        this.imageOptions.initialViewportOffset = {x: 0, y: 0};
        this.loadImageFile(files[0]);
      }
    },

    onUseDistortedAsSource() {
      this.closeInputSettingsDialog();
      this.closeOutputInfoDialog();

      this.sourceImage = this.distortedImage.image;
      this.imageOptions.initialViewportOffset = {
        x: this.distortedImage.viewport.x1,
        y: this.distortedImage.viewport.y1
      };
      this.distortedImage = null;
      this.inputOutputTab = 0;
    },

    onDistortBtnClick() {
      this.closeInputSettingsDialog();
      this.closeOutputInfoDialog();

      this.inputOutputTab = 0;

      return this.distort(this.sourceImage)
        .then(() => {
          this.inputOutputTab = 1;
        });
    },

    onPickPoint(offset) {
      if (this.isMobile) {
        this.closeInputSettingsDialog();
      }

      this.waitingForPoint = offset;
    },

    onPickPointCancel() {
      this.waitingForPoint = null;
    },

    onImagePlaneClick({x, y}) {
      if (this.waitingForPoint !== null) {
        this.setControlPoint(x, y, this.waitingForPoint);
        this.waitingForPoint = null;

        if (this.isMobile) {
          this.openInputSettingsDialog();
        }
      }
    },

    openInputSettingsDialog() {
      this.showMobileInputSettings = true;
    },

    closeInputSettingsDialog() {
      this.showMobileInputSettings = false;
    },

    openOutputInfoDialog() {
      this.showMobileOutputInfo = true;
    },

    closeOutputInfoDialog() {
      this.showMobileOutputInfo = false;
    }
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/input-settings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/input-settings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./src/js/utils.js");
/* harmony import */ var _image_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-settings */ "./src/js/components/pages/lens-playground/image-settings.vue");
/* harmony import */ var _distortion_settings_distortion_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distortion-settings/distortion-settings */ "./src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue");
/* harmony import */ var _distortion_options_distortion_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./distortion-options/distortion-options */ "./src/js/components/pages/lens-playground/distortion-options/distortion-options.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InputSettings',

  components: {
    ImageSettings: _image_settings__WEBPACK_IMPORTED_MODULE_1__["default"],
    DistortionSettings: _distortion_settings_distortion_settings__WEBPACK_IMPORTED_MODULE_2__["default"],
    DistortionOptions: _distortion_options_distortion_options__WEBPACK_IMPORTED_MODULE_3__["default"]
  },

  props: {
    imageOptions: Object,
    distortion: Object,
    distortionOptions: Object,
    sourceImage: Image,
    disabled: Boolean,
    argsActiveOffset: [Number, null]
  },

  data() {
    return {
      localImageOptions: {},
      localDistortion: {},
      localDistortionOptions: {},
    };
  },

  computed: {
    sourceViewportDisabled() {
      // Only best fit and custom viewport should be available for ARC distortion
      return this.localDistortion.name === 'ARC';
    },

    bestFitViewportDisabled() {
      // Made for future
      return false;
    }
  },

  watch: {
    ...Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createPropDataWatchers"])({
      imageOptions: 'localImageOptions',
      distortion: 'localDistortion',
      distortionOptions: 'localDistortionOptions'
    })
  },

  methods: {

  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/output-info.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/lens-playground/output-info.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'OutputInfo',

  props: {
    processingTime: [Number, null],
    distortedViewport: Object
  },

  computed: {
    distortionTimeString() {
      if (this.processingTime === null) {
        return '-';
      }

      let msec = this.processingTime;
      let hours = Math.floor(msec / 3600000);
      msec -= hours * 3600000;
      let minutes = Math.floor(msec / 60000);
      msec -= minutes * 60000;
      let seconds = Math.floor(msec / 1000);
      msec -= seconds * 1000;
      let time = [];

      if (hours) {
        time.push(hours + ' h');
      }

      if (hours || minutes) {
        time.push((minutes < 10 ? '0' : '') + minutes + ' min');
      }

      let msecStr = (msec < 10 ? '00' : (msec < 100 ? '0' : '')) + msec;

      time.push(((hours || minutes) && seconds < 10 ? '0' : '') + seconds + '.' + msecStr + ' sec');

      return time.join(',');
    }
  }
});


/***/ }),

/***/ "./src/js/components/file-selection-area/index.vue":
/*!*********************************************************!*\
  !*** ./src/js/components/file-selection-area/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3557c134_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3557c134&scoped=true& */ "./src/js/components/file-selection-area/index.vue?vue&type=template&id=3557c134&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/js/components/file-selection-area/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_3557c134_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=3557c134&scoped=true&lang=css& */ "./src/js/components/file-selection-area/index.vue?vue&type=style&index=0&id=3557c134&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3557c134_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3557c134_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3557c134",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/file-selection-area/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/file-selection-area/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/js/components/file-selection-area/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/file-selection-area/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/file-selection-area/index.vue?vue&type=style&index=0&id=3557c134&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./src/js/components/file-selection-area/index.vue?vue&type=style&index=0&id=3557c134&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3557c134_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=3557c134&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/file-selection-area/index.vue?vue&type=style&index=0&id=3557c134&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3557c134_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3557c134_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3557c134_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3557c134_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3557c134_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/file-selection-area/index.vue?vue&type=template&id=3557c134&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/js/components/file-selection-area/index.vue?vue&type=template&id=3557c134&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3557c134_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3557c134&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/file-selection-area/index.vue?vue&type=template&id=3557c134&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3557c134_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3557c134_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/color-input.vue":
/*!*****************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/color-input.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_input_vue_vue_type_template_id_cb6e9518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-input.vue?vue&type=template&id=cb6e9518&scoped=true& */ "./src/js/components/pages/lens-playground/color-input.vue?vue&type=template&id=cb6e9518&scoped=true&");
/* harmony import */ var _color_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-input.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/color-input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _color_input_vue_vue_type_style_index_0_id_cb6e9518_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-input.vue?vue&type=style&index=0&id=cb6e9518&scoped=true&lang=scss& */ "./src/js/components/pages/lens-playground/color-input.vue?vue&type=style&index=0&id=cb6e9518&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VColorPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VColorPicker */ "./node_modules/vuetify/lib/components/VColorPicker/index.js");
/* harmony import */ var vuetify_lib_components_VInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VInput */ "./node_modules/vuetify/lib/components/VInput/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _color_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _color_input_vue_vue_type_template_id_cb6e9518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _color_input_vue_vue_type_template_id_cb6e9518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cb6e9518",
  null
  
)

/* vuetify-loader */







_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VColorPicker: vuetify_lib_components_VColorPicker__WEBPACK_IMPORTED_MODULE_7__["VColorPicker"],VInput: vuetify_lib_components_VInput__WEBPACK_IMPORTED_MODULE_8__["VInput"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_9__["VMenu"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/color-input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/color-input.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/color-input.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./color-input.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/color-input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/color-input.vue?vue&type=style&index=0&id=cb6e9518&scoped=true&lang=scss&":
/*!***************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/color-input.vue?vue&type=style&index=0&id=cb6e9518&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_input_vue_vue_type_style_index_0_id_cb6e9518_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./color-input.vue?vue&type=style&index=0&id=cb6e9518&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/color-input.vue?vue&type=style&index=0&id=cb6e9518&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_input_vue_vue_type_style_index_0_id_cb6e9518_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_input_vue_vue_type_style_index_0_id_cb6e9518_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_input_vue_vue_type_style_index_0_id_cb6e9518_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_input_vue_vue_type_style_index_0_id_cb6e9518_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_input_vue_vue_type_style_index_0_id_cb6e9518_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/color-input.vue?vue&type=template&id=cb6e9518&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/color-input.vue?vue&type=template&id=cb6e9518&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_input_vue_vue_type_template_id_cb6e9518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./color-input.vue?vue&type=template&id=cb6e9518&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/color-input.vue?vue&type=template&id=cb6e9518&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_input_vue_vue_type_template_id_cb6e9518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_input_vue_vue_type_template_id_cb6e9518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue":
/*!*************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _affine_projection_args_vue_vue_type_template_id_6e3e466c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./affine-projection-args.vue?vue&type=template&id=6e3e466c& */ "./src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue?vue&type=template&id=6e3e466c&");
/* harmony import */ var _affine_projection_args_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./affine-projection-args.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _affine_projection_args_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _affine_projection_args_vue_vue_type_template_id_6e3e466c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _affine_projection_args_vue_vue_type_template_id_6e3e466c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VCol"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_5__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_affine_projection_args_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./affine-projection-args.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_affine_projection_args_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue?vue&type=template&id=6e3e466c&":
/*!********************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue?vue&type=template&id=6e3e466c& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_affine_projection_args_vue_vue_type_template_id_6e3e466c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./affine-projection-args.vue?vue&type=template&id=6e3e466c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/affine-projection-args.vue?vue&type=template&id=6e3e466c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_affine_projection_args_vue_vue_type_template_id_6e3e466c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_affine_projection_args_vue_vue_type_template_id_6e3e466c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue":
/*!***********************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arc_args_vue_vue_type_template_id_d36ea756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arc-args.vue?vue&type=template&id=d36ea756& */ "./src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue?vue&type=template&id=d36ea756&");
/* harmony import */ var _arc_args_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arc-args.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _arc_args_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _arc_args_vue_vue_type_template_id_d36ea756___WEBPACK_IMPORTED_MODULE_0__["render"],
  _arc_args_vue_vue_type_template_id_d36ea756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VCol"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_5__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_arc_args_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./arc-args.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_arc_args_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue?vue&type=template&id=d36ea756&":
/*!******************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue?vue&type=template&id=d36ea756& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_arc_args_vue_vue_type_template_id_d36ea756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./arc-args.vue?vue&type=template&id=d36ea756& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/arc-args.vue?vue&type=template&id=d36ea756&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_arc_args_vue_vue_type_template_id_d36ea756___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_arc_args_vue_vue_type_template_id_d36ea756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/control-points.vue":
/*!*****************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/control-points.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _control_points_vue_vue_type_template_id_e0329a20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-points.vue?vue&type=template&id=e0329a20& */ "./src/js/components/pages/lens-playground/distortion-arguments/control-points.vue?vue&type=template&id=e0329a20&");
/* harmony import */ var _control_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-points.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/distortion-arguments/control-points.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _control_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _control_points_vue_vue_type_template_id_e0329a20___WEBPACK_IMPORTED_MODULE_0__["render"],
  _control_points_vue_vue_type_template_id_e0329a20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/distortion-arguments/control-points.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/control-points.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/control-points.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_control_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./control-points.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/control-points.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_control_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/control-points.vue?vue&type=template&id=e0329a20&":
/*!************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/control-points.vue?vue&type=template&id=e0329a20& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_control_points_vue_vue_type_template_id_e0329a20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./control-points.vue?vue&type=template&id=e0329a20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/control-points.vue?vue&type=template&id=e0329a20&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_control_points_vue_vue_type_template_id_e0329a20___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_control_points_vue_vue_type_template_id_e0329a20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue":
/*!**************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coords_pair_vue_vue_type_template_id_5971fcdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coords-pair.vue?vue&type=template&id=5971fcdc& */ "./src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue?vue&type=template&id=5971fcdc&");
/* harmony import */ var _coords_pair_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coords-pair.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _coords_pair_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _coords_pair_vue_vue_type_template_id_5971fcdc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _coords_pair_vue_vue_type_template_id_5971fcdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VCol"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_5__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coords_pair_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./coords-pair.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coords_pair_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue?vue&type=template&id=5971fcdc&":
/*!*********************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue?vue&type=template&id=5971fcdc& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coords_pair_vue_vue_type_template_id_5971fcdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./coords-pair.vue?vue&type=template&id=5971fcdc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/coords-pair.vue?vue&type=template&id=5971fcdc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coords_pair_vue_vue_type_template_id_5971fcdc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coords_pair_vue_vue_type_template_id_5971fcdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/distortion-args-mixin.js":
/*!***********************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/distortion-args-mixin.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ "./src/js/utils.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: Array,
    disabled: Boolean
  },

  data() {
    return {
      localValue: []
    };
  },

  methods: {
    setValue(index, value) {
      if (typeof value === 'string') {
        value = parseFloat(value.replace(',', '.'));
      }

      this.$set(this.localValue, index, value);
    },

    getFilteredArray() {
      return this.localValue.map(item => {
        if (isNaN(item) || item === undefined) {
          return null;
        }

        return item;
      });
    },

    emitInput() {
      this.$emit('input', this.getFilteredArray());
    }
  },

  watch: {
    value: {
      handler(newValue) {
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["arraysEqual"])(newValue, this.localValue)) {
          this.localValue = newValue.slice();
        }
      },

      immediate: true
    },

    localValue(newValue) {
      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["arraysEqual"])(newValue, this.value)) {
        this.emitInput();
      }
    }
  }
});

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue":
/*!******************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _perspective_projection_args_vue_vue_type_template_id_05874f3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perspective-projection-args.vue?vue&type=template&id=05874f3d& */ "./src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue?vue&type=template&id=05874f3d&");
/* harmony import */ var _perspective_projection_args_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perspective-projection-args.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _perspective_projection_args_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _perspective_projection_args_vue_vue_type_template_id_05874f3d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _perspective_projection_args_vue_vue_type_template_id_05874f3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VCol"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_5__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_perspective_projection_args_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./perspective-projection-args.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_perspective_projection_args_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue?vue&type=template&id=05874f3d&":
/*!*************************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue?vue&type=template&id=05874f3d& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_perspective_projection_args_vue_vue_type_template_id_05874f3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./perspective-projection-args.vue?vue&type=template&id=05874f3d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/perspective-projection-args.vue?vue&type=template&id=05874f3d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_perspective_projection_args_vue_vue_type_template_id_05874f3d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_perspective_projection_args_vue_vue_type_template_id_05874f3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue":
/*!*****************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _points_mapping_vue_vue_type_template_id_3b708dfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./points-mapping.vue?vue&type=template&id=3b708dfe& */ "./src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue?vue&type=template&id=3b708dfe&");
/* harmony import */ var _points_mapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./points-mapping.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _points_mapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _points_mapping_vue_vue_type_template_id_3b708dfe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _points_mapping_vue_vue_type_template_id_3b708dfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VCol"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItem"],VListItemIcon: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemIcon"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemTitle"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_8__["VMenu"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_points_mapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./points-mapping.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_points_mapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue?vue&type=template&id=3b708dfe&":
/*!************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue?vue&type=template&id=3b708dfe& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_points_mapping_vue_vue_type_template_id_3b708dfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./points-mapping.vue?vue&type=template&id=3b708dfe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-arguments/points-mapping.vue?vue&type=template&id=3b708dfe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_points_mapping_vue_vue_type_template_id_3b708dfe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_points_mapping_vue_vue_type_template_id_3b708dfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-button.vue":
/*!***********************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-button.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _distortion_button_vue_vue_type_template_id_117dce14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distortion-button.vue?vue&type=template&id=117dce14& */ "./src/js/components/pages/lens-playground/distortion-button.vue?vue&type=template&id=117dce14&");
/* harmony import */ var _distortion_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distortion-button.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/distortion-button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBadge */ "./node_modules/vuetify/lib/components/VBadge/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSpeedDial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VSpeedDial */ "./node_modules/vuetify/lib/components/VSpeedDial/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _distortion_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _distortion_button_vue_vue_type_template_id_117dce14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _distortion_button_vue_vue_type_template_id_117dce14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBadge: vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_4__["VBadge"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VSpeedDial: vuetify_lib_components_VSpeedDial__WEBPACK_IMPORTED_MODULE_7__["VSpeedDial"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/distortion-button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-button.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-button.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_distortion_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./distortion-button.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_distortion_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-button.vue?vue&type=template&id=117dce14&":
/*!******************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-button.vue?vue&type=template&id=117dce14& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_distortion_button_vue_vue_type_template_id_117dce14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./distortion-button.vue?vue&type=template&id=117dce14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-button.vue?vue&type=template&id=117dce14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_distortion_button_vue_vue_type_template_id_117dce14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_distortion_button_vue_vue_type_template_id_117dce14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/distortion-options.vue":
/*!*******************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/distortion-options.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _distortion_options_vue_vue_type_template_id_724cc47a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distortion-options.vue?vue&type=template&id=724cc47a& */ "./src/js/components/pages/lens-playground/distortion-options/distortion-options.vue?vue&type=template&id=724cc47a&");
/* harmony import */ var _distortion_options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distortion-options.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/distortion-options/distortion-options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _distortion_options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _distortion_options_vue_vue_type_template_id_724cc47a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _distortion_options_vue_vue_type_template_id_724cc47a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_4__["VCheckbox"],VExpandTransition: vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_5__["VExpandTransition"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/distortion-options/distortion-options.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/distortion-options.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/distortion-options.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_distortion_options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./distortion-options.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/distortion-options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_distortion_options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/distortion-options.vue?vue&type=template&id=724cc47a&":
/*!**************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/distortion-options.vue?vue&type=template&id=724cc47a& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_distortion_options_vue_vue_type_template_id_724cc47a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./distortion-options.vue?vue&type=template&id=724cc47a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/distortion-options.vue?vue&type=template&id=724cc47a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_distortion_options_vue_vue_type_template_id_724cc47a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_distortion_options_vue_vue_type_template_id_724cc47a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue":
/*!********************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_configurator_vue_vue_type_template_id_06e7b7e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-configurator.vue?vue&type=template&id=06e7b7e5& */ "./src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue?vue&type=template&id=06e7b7e5&");
/* harmony import */ var _filter_configurator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-configurator.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _filter_configurator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _filter_configurator_vue_vue_type_template_id_06e7b7e5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _filter_configurator_vue_vue_type_template_id_06e7b7e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VCol"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_5__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_configurator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter-configurator.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_configurator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue?vue&type=template&id=06e7b7e5&":
/*!***************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue?vue&type=template&id=06e7b7e5& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_configurator_vue_vue_type_template_id_06e7b7e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter-configurator.vue?vue&type=template&id=06e7b7e5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/filter-configurator.vue?vue&type=template&id=06e7b7e5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_configurator_vue_vue_type_template_id_06e7b7e5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_configurator_vue_vue_type_template_id_06e7b7e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue":
/*!*****************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_function_configurator_vue_vue_type_template_id_4c18870a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-function-configurator.vue?vue&type=template&id=4c18870a& */ "./src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue?vue&type=template&id=4c18870a&");
/* harmony import */ var _filter_function_configurator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-function-configurator.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _filter_function_configurator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _filter_function_configurator_vue_vue_type_template_id_4c18870a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _filter_function_configurator_vue_vue_type_template_id_4c18870a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VExpandTransition: vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_4__["VExpandTransition"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_5__["VSelect"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_function_configurator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter-function-configurator.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_function_configurator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue?vue&type=template&id=4c18870a&":
/*!************************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue?vue&type=template&id=4c18870a& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_function_configurator_vue_vue_type_template_id_4c18870a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter-function-configurator.vue?vue&type=template&id=4c18870a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/filter-function-configurator.vue?vue&type=template&id=4c18870a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_function_configurator_vue_vue_type_template_id_4c18870a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_function_configurator_vue_vue_type_template_id_4c18870a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/filter-settings.vue":
/*!****************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/filter-settings.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_settings_vue_vue_type_template_id_6f9a7dd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-settings.vue?vue&type=template&id=6f9a7dd3& */ "./src/js/components/pages/lens-playground/distortion-options/filter-settings.vue?vue&type=template&id=6f9a7dd3&");
/* harmony import */ var _filter_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-settings.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/distortion-options/filter-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _filter_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _filter_settings_vue_vue_type_template_id_6f9a7dd3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _filter_settings_vue_vue_type_template_id_6f9a7dd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VExpandTransition: vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_4__["VExpandTransition"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_5__["VSelect"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/distortion-options/filter-settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/filter-settings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/filter-settings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter-settings.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/filter-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/filter-settings.vue?vue&type=template&id=6f9a7dd3&":
/*!***********************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/filter-settings.vue?vue&type=template&id=6f9a7dd3& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_settings_vue_vue_type_template_id_6f9a7dd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter-settings.vue?vue&type=template&id=6f9a7dd3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/filter-settings.vue?vue&type=template&id=6f9a7dd3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_settings_vue_vue_type_template_id_6f9a7dd3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_settings_vue_vue_type_template_id_6f9a7dd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue":
/*!***********************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _supersampling_settings_vue_vue_type_template_id_d506b9fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supersampling-settings.vue?vue&type=template&id=d506b9fa&scoped=true& */ "./src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue?vue&type=template&id=d506b9fa&scoped=true&");
/* harmony import */ var _supersampling_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supersampling-settings.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _supersampling_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _supersampling_settings_vue_vue_type_template_id_d506b9fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _supersampling_settings_vue_vue_type_template_id_d506b9fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d506b9fa",
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_4__["VCheckbox"],VExpandTransition: vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_5__["VExpandTransition"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supersampling_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./supersampling-settings.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supersampling_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue?vue&type=template&id=d506b9fa&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue?vue&type=template&id=d506b9fa&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supersampling_settings_vue_vue_type_template_id_d506b9fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./supersampling-settings.vue?vue&type=template&id=d506b9fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/supersampling-settings.vue?vue&type=template&id=d506b9fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supersampling_settings_vue_vue_type_template_id_d506b9fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supersampling_settings_vue_vue_type_template_id_d506b9fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue":
/*!******************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewport_settings_vue_vue_type_template_id_eb35c2b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewport-settings.vue?vue&type=template&id=eb35c2b6&scoped=true& */ "./src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue?vue&type=template&id=eb35c2b6&scoped=true&");
/* harmony import */ var _viewport_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewport-settings.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VRadioGroup */ "./node_modules/vuetify/lib/components/VRadioGroup/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _viewport_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _viewport_settings_vue_vue_type_template_id_eb35c2b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _viewport_settings_vue_vue_type_template_id_eb35c2b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eb35c2b6",
  null
  
)

/* vuetify-loader */







_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VCol"],VExpandTransition: vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_5__["VExpandTransition"],VRadio: vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_6__["VRadio"],VRadioGroup: vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_6__["VRadioGroup"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewport_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewport-settings.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewport_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue?vue&type=template&id=eb35c2b6&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue?vue&type=template&id=eb35c2b6&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewport_settings_vue_vue_type_template_id_eb35c2b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewport-settings.vue?vue&type=template&id=eb35c2b6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-options/viewport-settings.vue?vue&type=template&id=eb35c2b6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewport_settings_vue_vue_type_template_id_eb35c2b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewport_settings_vue_vue_type_template_id_eb35c2b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue":
/*!*********************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _distortion_settings_vue_vue_type_template_id_117204aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distortion-settings.vue?vue&type=template&id=117204aa& */ "./src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue?vue&type=template&id=117204aa&");
/* harmony import */ var _distortion_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distortion-settings.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _distortion_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _distortion_settings_vue_vue_type_template_id_117204aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _distortion_settings_vue_vue_type_template_id_117204aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_4__["VSelect"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_distortion_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./distortion-settings.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_distortion_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue?vue&type=template&id=117204aa&":
/*!****************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue?vue&type=template&id=117204aa& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_distortion_settings_vue_vue_type_template_id_117204aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./distortion-settings.vue?vue&type=template&id=117204aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/distortion-settings/distortion-settings.vue?vue&type=template&id=117204aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_distortion_settings_vue_vue_type_template_id_117204aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_distortion_settings_vue_vue_type_template_id_117204aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/image-area/image-area.vue":
/*!***************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/image-area/image-area.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_area_vue_vue_type_template_id_42808a23_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-area.vue?vue&type=template&id=42808a23&scoped=true& */ "./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=template&id=42808a23&scoped=true&");
/* harmony import */ var _image_area_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-area.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _image_area_vue_vue_type_style_index_0_id_42808a23_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-area.vue?vue&type=style&index=0&id=42808a23&scoped=true&lang=scss& */ "./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=style&index=0&id=42808a23&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSheet */ "./node_modules/vuetify/lib/components/VSheet/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/index.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _image_area_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _image_area_vue_vue_type_template_id_42808a23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _image_area_vue_vue_type_template_id_42808a23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "42808a23",
  null
  
)

/* vuetify-loader */
















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItem"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemTitle"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_9__["VMenu"],VSheet: vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_10__["VSheet"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["VSpacer"],VSwitch: vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_12__["VSwitch"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_13__["VTab"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_13__["VTabs"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__["VToolbar"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/image-area/image-area.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_area_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./image-area.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_area_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=style&index=0&id=42808a23&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=style&index=0&id=42808a23&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_area_vue_vue_type_style_index_0_id_42808a23_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./image-area.vue?vue&type=style&index=0&id=42808a23&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=style&index=0&id=42808a23&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_area_vue_vue_type_style_index_0_id_42808a23_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_area_vue_vue_type_style_index_0_id_42808a23_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_area_vue_vue_type_style_index_0_id_42808a23_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_area_vue_vue_type_style_index_0_id_42808a23_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_area_vue_vue_type_style_index_0_id_42808a23_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=template&id=42808a23&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=template&id=42808a23&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_area_vue_vue_type_template_id_42808a23_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./image-area.vue?vue&type=template&id=42808a23&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-area.vue?vue&type=template&id=42808a23&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_area_vue_vue_type_template_id_42808a23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_area_vue_vue_type_template_id_42808a23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/image-area/image-viewer.vue":
/*!*****************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/image-area/image-viewer.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_viewer_vue_vue_type_template_id_617039a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-viewer.vue?vue&type=template&id=617039a8&scoped=true& */ "./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=template&id=617039a8&scoped=true&");
/* harmony import */ var _image_viewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-viewer.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _image_viewer_vue_vue_type_style_index_0_id_617039a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-viewer.vue?vue&type=style&index=0&id=617039a8&scoped=true&lang=scss& */ "./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=style&index=0&id=617039a8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _image_viewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _image_viewer_vue_vue_type_template_id_617039a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _image_viewer_vue_vue_type_template_id_617039a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "617039a8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/image-area/image-viewer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_viewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./image-viewer.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_viewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=style&index=0&id=617039a8&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=style&index=0&id=617039a8&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_viewer_vue_vue_type_style_index_0_id_617039a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./image-viewer.vue?vue&type=style&index=0&id=617039a8&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=style&index=0&id=617039a8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_viewer_vue_vue_type_style_index_0_id_617039a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_viewer_vue_vue_type_style_index_0_id_617039a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_viewer_vue_vue_type_style_index_0_id_617039a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_viewer_vue_vue_type_style_index_0_id_617039a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_viewer_vue_vue_type_style_index_0_id_617039a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=template&id=617039a8&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=template&id=617039a8&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_viewer_vue_vue_type_template_id_617039a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./image-viewer.vue?vue&type=template&id=617039a8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-area/image-viewer.vue?vue&type=template&id=617039a8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_viewer_vue_vue_type_template_id_617039a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_viewer_vue_vue_type_template_id_617039a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/image-settings.vue":
/*!********************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/image-settings.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_settings_vue_vue_type_template_id_2bc5acf1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-settings.vue?vue&type=template&id=2bc5acf1& */ "./src/js/components/pages/lens-playground/image-settings.vue?vue&type=template&id=2bc5acf1&");
/* harmony import */ var _image_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-settings.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/image-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _image_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _image_settings_vue_vue_type_template_id_2bc5acf1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _image_settings_vue_vue_type_template_id_2bc5acf1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VCol"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_6__["VSelect"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/image-settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/image-settings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/image-settings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./image-settings.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/image-settings.vue?vue&type=template&id=2bc5acf1&":
/*!***************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/image-settings.vue?vue&type=template&id=2bc5acf1& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_settings_vue_vue_type_template_id_2bc5acf1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./image-settings.vue?vue&type=template&id=2bc5acf1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/image-settings.vue?vue&type=template&id=2bc5acf1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_settings_vue_vue_type_template_id_2bc5acf1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_settings_vue_vue_type_template_id_2bc5acf1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/index.vue":
/*!***********************************************************!*\
  !*** ./src/js/components/pages/lens-playground/index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_d9410534_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d9410534&scoped=true& */ "./src/js/components/pages/lens-playground/index.vue?vue&type=template&id=d9410534&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_d9410534_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=d9410534&scoped=true&lang=scss& */ "./src/js/components/pages/lens-playground/index.vue?vue&type=style&index=0&id=d9410534&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VOverlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VOverlay */ "./node_modules/vuetify/lib/components/VOverlay/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_d9410534_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_d9410534_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d9410534",
  null
  
)

/* vuetify-loader */

















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VOverlay: vuetify_lib_components_VOverlay__WEBPACK_IMPORTED_MODULE_10__["VOverlay"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_11__["VProgressCircular"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__["VTab"],VTabItem: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__["VTabItem"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__["VTabs"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/index.vue?vue&type=style&index=0&id=d9410534&scoped=true&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/index.vue?vue&type=style&index=0&id=d9410534&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d9410534_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=d9410534&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/index.vue?vue&type=style&index=0&id=d9410534&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d9410534_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d9410534_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d9410534_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d9410534_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d9410534_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/index.vue?vue&type=template&id=d9410534&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/index.vue?vue&type=template&id=d9410534&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d9410534_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d9410534&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/index.vue?vue&type=template&id=d9410534&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d9410534_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d9410534_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/input-settings.vue":
/*!********************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/input-settings.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_settings_vue_vue_type_template_id_4c0baa3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-settings.vue?vue&type=template&id=4c0baa3c& */ "./src/js/components/pages/lens-playground/input-settings.vue?vue&type=template&id=4c0baa3c&");
/* harmony import */ var _input_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-settings.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/input-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _input_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _input_settings_vue_vue_type_template_id_4c0baa3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _input_settings_vue_vue_type_template_id_4c0baa3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_4__["VDivider"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/input-settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/input-settings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/input-settings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./input-settings.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/input-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/input-settings.vue?vue&type=template&id=4c0baa3c&":
/*!***************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/input-settings.vue?vue&type=template&id=4c0baa3c& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_settings_vue_vue_type_template_id_4c0baa3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./input-settings.vue?vue&type=template&id=4c0baa3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/input-settings.vue?vue&type=template&id=4c0baa3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_settings_vue_vue_type_template_id_4c0baa3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_settings_vue_vue_type_template_id_4c0baa3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/lens-playground/mixins/builds-distortion-options.js":
/*!*************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/mixins/builds-distortion-options.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @alxcube/lens */ "../lens-js/dist/lens.min.js");
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alxcube_lens__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      options: {
        resample: true,
        filterPreset: 'ROBIDOUX',
        customFilterOptions: {
          filterFunc: 'cubicBC',
          filterFuncCubicBC_b: 0.37821575509399867,
          filterFuncCubicBC_c: 0.31089212245300067,
          windowFunc: 'box',
          windowFuncCubicBC_b: 0,
          windowFuncCubicBC_c: 0,
          support: 2,
          scale: 1.1685777620836932,
          blur: 1,
          windowSupport: 2
        },
        supersample: false,
        matteColor: [0, 0, 0, 0],
        bestFit: true,
        useCustomViewport: false,
        customViewport: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0
        }
      }
    };
  },

  methods: {
    buildDistortionOptions() {
      const options = {
        resample: this.options.resample,
        filter: this.buildFilter(),
        supersample: this.options.supersample,
        matteColor: this.options.matteColor,
        bestFit: this.options.bestFit
      };

      if (this.options.useCustomViewport) {
        options.viewport = new _alxcube_lens__WEBPACK_IMPORTED_MODULE_0__["Viewport"](
          this.options.customViewport.x1,
          this.options.customViewport.y1,
          this.options.customViewport.x2,
          this.options.customViewport.y2
        );
      }

      return options;
    },

    buildFilter() {
      if (this.options.filterPreset !== 'CUSTOM') {
        return _alxcube_lens__WEBPACK_IMPORTED_MODULE_0__["filterPresets"][this.options.filterPreset];
      }

      return new _alxcube_lens__WEBPACK_IMPORTED_MODULE_0__["filter"].Filter(
        this.buildFilterFunction(),
        this.buildWindowFunction(),
        this.options.customFilterOptions.support,
        this.options.customFilterOptions.scale,
        this.options.customFilterOptions.blur,
        this.options.customFilterOptions.windowSupport
      );
    },

    buildFilterFunction() {
      const name = this.options.customFilterOptions.filterFunc;

      switch (name) {
        case 'cubicBC':
          return _alxcube_lens__WEBPACK_IMPORTED_MODULE_0__["filter"].filterFunctions.cubicBC(
            this.options.customFilterOptions.filterFuncCubicBC_b,
            this.options.customFilterOptions.filterFuncCubicBC_c
          );

        default:
          return _alxcube_lens__WEBPACK_IMPORTED_MODULE_0__["filter"].filterFunctions[name]();
      };
    },

    buildWindowFunction() {
      const name = this.options.customFilterOptions.windowFunc;

      switch (name) {
        case 'cubicBC':
          return _alxcube_lens__WEBPACK_IMPORTED_MODULE_0__["filter"].filterFunctions.cubicBC(
            this.options.customFilterOptions.windowFuncCubicBC_b,
            this.options.customFilterOptions.windowFuncCubicBC_c
          );

        default:
          return _alxcube_lens__WEBPACK_IMPORTED_MODULE_0__["filter"].filterFunctions[name]();
      };
    }

  }
});

/***/ }),

/***/ "./src/js/components/pages/lens-playground/mixins/builds-distotion.js":
/*!****************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/mixins/builds-distotion.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @alxcube/lens */ "../lens-js/dist/lens.min.js");
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alxcube_lens__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      distortion: {
        name: 'AFFINE',
        args: [0, 0, 0, 0]
      }
    };
  },

  methods: {
    buildDistortion(image) {
      return _alxcube_lens__WEBPACK_IMPORTED_MODULE_0__["distorts"][this.distortion.name](
        this.distortion.args,
        image
      );
    },

    setControlPoint(x, y, offset) {
      this.distortion.args.splice(offset, 2, x, y);
    }
  },

  watch: {
    'distortion.name': function (newName) {
      switch (newName) {
        case 'AFFINE':
          this.distortion.args = [0, 0, 0, 0];
          break;

        case 'AFFINE_PROJECTION':
          this.distortion.args = [1, 0, 0, 1, 0, 0];
          break;

        case 'PERSPECTIVE':
          this.distortion.args = new Array(16).fill(0);
          break;

        case 'PERSPECTIVE_PROJECTION':
          this.distortion.args = [1, 0, 0, 0, 1, 0, 0, 0];
          break;

        case 'ARC':
          this.distortion.args = [90, 0];
          break;
      }
    }
  }
});

/***/ }),

/***/ "./src/js/components/pages/lens-playground/mixins/builds-image-object.js":
/*!*******************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/mixins/builds-image-object.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @alxcube/lens */ "../lens-js/dist/lens.min.js");
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alxcube_lens__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      imageOptions: {
        interpolationMethod: _alxcube_lens__WEBPACK_IMPORTED_MODULE_0__["interpolation"].AVERAGE,
        virtualPixelMethod: _alxcube_lens__WEBPACK_IMPORTED_MODULE_0__["vpx"].TRANSPARENT,
        backgroundColor: [0, 0, 0, 0],
        initialViewportOffset: {
          x: 0,
          y: 0
        }
      }
    };
  },

  methods: {
    buildImageObject(img) {
      const imageObj = new _alxcube_lens__WEBPACK_IMPORTED_MODULE_0__["image"].DomImage(img);
      imageObj.interpolationMethod = this.imageOptions.interpolationMethod;
      imageObj.virtualPixelMethod = this.imageOptions.virtualPixelMethod;
      imageObj.backgroundColor = this.imageOptions.backgroundColor;
      const {x, y} = this.imageOptions.initialViewportOffset;
      imageObj.viewport.offset(x, y);
      return imageObj;
    }
  }
});

/***/ }),

/***/ "./src/js/components/pages/lens-playground/mixins/distorts-image.js":
/*!**************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/mixins/distorts-image.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _builds_distortion_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builds-distortion-options */ "./src/js/components/pages/lens-playground/mixins/builds-distortion-options.js");
/* harmony import */ var _builds_distotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builds-distotion */ "./src/js/components/pages/lens-playground/mixins/builds-distotion.js");
/* harmony import */ var _builds_image_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builds-image-object */ "./src/js/components/pages/lens-playground/mixins/builds-image-object.js");
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @alxcube/lens */ "../lens-js/dist/lens.min.js");
/* harmony import */ var _alxcube_lens__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_alxcube_lens__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _alxcube_lens_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @alxcube/lens/lib */ "../lens-js/lib/index.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [
    _builds_distortion_options__WEBPACK_IMPORTED_MODULE_0__["default"],
    _builds_distotion__WEBPACK_IMPORTED_MODULE_1__["default"],
    _builds_image_object__WEBPACK_IMPORTED_MODULE_2__["default"]
  ],

  data() {
    return {
      distortedImage: null,

      performingDistortion: false,

      distortionTime: null
    };
  },

  methods: {
    performDistortion(img) {
      const image = this.buildImageObject(img);

      try {
        var distortion = this.buildDistortion(image);
      } catch (err) {
        return Promise.reject(err);
      }

      return _alxcube_lens__WEBPACK_IMPORTED_MODULE_3__["distort"](
        image,
        distortion,
        this.buildDistortionOptions()
      );
    },

    distort(img) {
      this.clearDistortionData();

      this.performingDistortion = true;
      const startTime = new Date().getTime();

      return this.performDistortion(img)
        .then(distortedImage => {
          this.distortionTime = new Date().getTime() - startTime;
          this.distortedImage = distortedImage;
        })
        .finally(() => this.performingDistortion = false);
    },

    clearDistortionData() {
      this.distortedImage = null;
      this.distortionTime = null;
    }
  }
});

/***/ }),

/***/ "./src/js/components/pages/lens-playground/mixins/loads-source-image.js":
/*!******************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/mixins/loads-source-image.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ "./src/js/utils.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      sourceImage: null,

      loadingImage: false,

      loadingImageProgress: null
    };
  },

  methods: {
    loadImageFile(file) {
      this.sourceImage = null;
      this.loadingImage = true;
      this.loadingImageProgress = 0;

      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["readImageDataUrl"])(file, progress => this.loadingImageProgress = progress)
        .then(_utils__WEBPACK_IMPORTED_MODULE_0__["preloadImage"])
        .then(img => this.sourceImage = img)
        .finally(() => {
          this.loadingImage = false;
          this.loadingImageProgress = null;
        });
    }
  }
});

/***/ }),

/***/ "./src/js/components/pages/lens-playground/output-info.vue":
/*!*****************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/output-info.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _output_info_vue_vue_type_template_id_69018ce4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output-info.vue?vue&type=template&id=69018ce4& */ "./src/js/components/pages/lens-playground/output-info.vue?vue&type=template&id=69018ce4&");
/* harmony import */ var _output_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./output-info.vue?vue&type=script&lang=js& */ "./src/js/components/pages/lens-playground/output-info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _output_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _output_info_vue_vue_type_template_id_69018ce4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _output_info_vue_vue_type_template_id_69018ce4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VCol"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/lens-playground/output-info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/lens-playground/output-info.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/output-info.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_output_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./output-info.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/output-info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_output_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/lens-playground/output-info.vue?vue&type=template&id=69018ce4&":
/*!************************************************************************************************!*\
  !*** ./src/js/components/pages/lens-playground/output-info.vue?vue&type=template&id=69018ce4& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_output_info_vue_vue_type_template_id_69018ce4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./output-info.vue?vue&type=template&id=69018ce4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/lens-playground/output-info.vue?vue&type=template&id=69018ce4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_output_info_vue_vue_type_template_id_69018ce4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_output_info_vue_vue_type_template_id_69018ce4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/v-panzoom/index.js":
/*!**********************************************!*\
  !*** ./src/js/components/v-panzoom/index.js ***!
  \**********************************************/
/*! exports provided: getElementOffset, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementOffset", function() { return getElementOffset; });
/* harmony import */ var panzoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! panzoom */ "./node_modules/panzoom/index.js");
/* harmony import */ var panzoom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(panzoom__WEBPACK_IMPORTED_MODULE_0__);


function getElementOffset(element) {
    let {top, left} = element.getBoundingClientRect();
    top     -= window.pageYOffset;
    left    -= window.pageXOffset;
    return {top, left};
}

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "VPanzoom",

    props:      {
        tag:        {
            type:       String,
            default:    'div'
        },

        beforeWheel:    Function,

        filterKey:      Function,

        zoomSpeed:      Number,

        pinchSpeed:     Number,

        maxZoom:        Number,

        minZoom:        Number,

        smoothScroll:   Boolean,

        bounds:         [Boolean, Object],

        autocenter:     Boolean,

        disabled:       Boolean,

        position:       {
            type:           Object,
            default() {
                return {x: 0, y: 0}
            }
        },

        scale:          {
            type: Number,
            default: 1
        }
    },

    data() {
        return {
            localPosition: {
                x: 0,
                y: 0
            },

            localScale: 1
        };
    },

    watch:  {
        disabled(disabled) {
            if (this.$_panzoom) {
                if (this.$_panzoom.isPaused() && !disabled) {
                    this.$_panzoom.resume();
                } else if (!this.$_panzoom.isPaused() && disabled) {
                    this.$_panzoom.pause();
                }
            }
        },

        position({x, y}) {
            if (x !== this.localPosition.x || y !== this.localPosition.y) {
                this.$_panzoom.moveTo(x, y);
            }
        },

        scale(scale) {
            if (scale !== this.localScale) {
                const newScale = scale / this.localScale;
                const {x, y, width, height} = this.$el.getBoundingClientRect();
                const {x: px, y: py} = this.$el.parentNode.getBoundingClientRect();
                const clientX = x - px + width / 2; //- window.pageXOffset;
                const clientY = y - py + height / 2; // - window.pageYOffset;
                this.$_panzoom.zoomTo(clientX, clientY, newScale);
            }
        }
    },

    mounted() {
        this.buildPanzoom();
    },

    beforeDestroy() {
        this.$_panzoom.dispose();
    },

    render(createElement) {
        return createElement(this.tag, this.$slots.default);
    },

    methods:    {
        buildPanzoom() {
            this.$_panzoom  = panzoom__WEBPACK_IMPORTED_MODULE_0___default()(this.$el, this.makeOptions());

            this.$_panzoom.on('transform', api => {
                let {x, y, scale}   = api.getTransform();

                this.localPosition = {x, y};
                this.localScale = scale;

                this.$emit('update:position', {x, y});
                this.$emit('update:scale', scale);
                this.$emit('transform', api);
            });

            this.$_panzoom.on('panstart', api => this.$emit('panstart', api));
            this.$_panzoom.on('panend', api => this.$emit('panend', api));
            this.$_panzoom.on('pan', api => this.$emit('pan', api));
            this.$_panzoom.on('zoom', api => this.$emit('zoom', api));
            this.$_panzoom.on('zoomend', api => this.$emit('zoomend', api));

            // if (this.position !== undefined && this.scale !== undefined) {
            //     this.$_panzoom.zoomAbs(this.position.x, this.position.y, this.scale);
            // }

            if (this.disabled) {
                this.$_panzoom.pause();
            }
        },

        makeOptions() {
            let {
                    beforeWheel,
                    filterKey,
                    zoomSpeed,
                    pinchSpeed,
                    maxZoom,
                    minZoom,
                    smoothScroll,
                    bounds,
                    autocenter
                }   = this;

            return {
                beforeWheel,
                filterKey,
                zoomSpeed,
                pinchSpeed,
                maxZoom,
                minZoom,
                smoothScroll,
                bounds,
                autocenter
            };
        }
    }
});

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: createPropWatcher, createDataWatcher, createPropDataWatchers, arraysEqual, simpleProxy, massSimpleProxy, preloadImage, readImageDataUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPropWatcher", function() { return createPropWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDataWatcher", function() { return createDataWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPropDataWatchers", function() { return createPropDataWatchers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arraysEqual", function() { return arraysEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleProxy", function() { return simpleProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "massSimpleProxy", function() { return massSimpleProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preloadImage", function() { return preloadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readImageDataUrl", function() { return readImageDataUrl; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function createPropWatcher(dataPropName) {
  return function (value) {
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(value, this[dataPropName])) {
      this[dataPropName] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(value);
    }
  };
}

function createDataWatcher(propName) {
  return function (value) {
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(value, this[propName])) {
      this.$emit('update:' + Object(lodash__WEBPACK_IMPORTED_MODULE_0__["kebabCase"])(propName), Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(value));
    }
  }
}

function createPropDataWatchers(pairs) {
  const watchers = {};

  Object.keys(pairs).forEach(propName => {
    let dataName = pairs[propName];

    watchers[propName] = {
      handler: createPropWatcher(dataName),
      immediate: true,
      deep: true
    };

    watchers[dataName] = {
      handler: createDataWatcher(propName),
      deep: true
    };
  });

  return watchers;
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function simpleProxy(propName) {
  const propKebeb = propName.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

  return {
    get() {
      return this[propName];
    },

    set(value) {
      this.$emit(`update:${propKebeb}`, value);
    }
  };
}

function massSimpleProxy(names, prefix = 'proxy', exclude = []) {
  return names.reduce((result, name) => {
    if (exclude.indexOf(name) < 0) {
      const proxyName = prefix + name.charAt(0).toUpperCase() + name.substring(1);
      result[proxyName] = simpleProxy(name);
    }

    return result;
  }, {});
}

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const preloader = new Image();

    preloader.onload = () => resolve(preloader);

    preloader.onerror = () => reject(new Error("Couldn't preload image"));

    preloader.src = src;
  });
}

function readImageDataUrl(imageFile, onprogress) {
  return new Promise((resolve, reject) => {
    const reader        = new FileReader();

    reader.onloadend    = () => resolve(reader.result);

    reader.onerror      = () => reject(reader.error);

    if (onprogress) {
      reader.onprogress   = event => {
        let bytesRead   = event.loaded,
            fileSize    = imageFile.size,
            progress    = bytesRead / fileSize;

        onprogress(progress, bytesRead, fileSize);
      }
    }

    reader.readAsDataURL(imageFile);
  });
}

/***/ })

}]);
//# sourceMappingURL=playground.js.map