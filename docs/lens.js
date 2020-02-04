(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lens"] = factory();
	else
		root["lens"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
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
var EPSILON = 1.0e-12;
/**
 * @type {number}
 * @memberOf lens
 */

var MAXIMUM_VALUE = 1.79769313486231570E+308;
/**
 * Pi/2
 *
 * @type {number}
 * @memberOf lens
 */

var M_PI2 = Math.PI / 2;
/**
 * Pi * 2
 *
 * @memberOf lens
 * @type {number}
 */

var M_2PI = Math.PI * 2;


/***/ }),

/***/ "./lib/distort.js":
/*!************************!*\
  !*** ./lib/distort.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _distorter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./distorter */ "./lib/distorter/index.js");
/* harmony import */ var _resampler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resampler */ "./lib/resampler/index.js");
/* harmony import */ var _filter_presets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-presets */ "./lib/filter-presets.js");






var defaultOptions = {
  bestFit: false,
  filter: _filter_presets__WEBPACK_IMPORTED_MODULE_5__["default"].ROBIDOUX,
  resample: true,
  async: true,
  outputScaling: 1
};
/**
 * Performs distortion of image
 *
 * @memberOf lens
 * @param {ImageInterface} image
 * @param {lens.distorts|lens~distortionResolver|DistortionInterface} distortion
 * @param {array} args
 * @param {DistortionOptions} [options]
 * @returns {ImageInterface|Promise<ImageInterface>}
 */

function distort(image, distortion, args) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (typeof distortion == 'function') {
    distortion = distortion(args, image);
  } else {
    options = args || {};
  }

  options = makeOptions(options);

  if (distortion.forceBestFit) {
    options.bestFit = true;
  }

  var distorted = sync(makeDistorter(image, distortion, makeResampler(image, distortion, options), options).distort());

  if (options.supersample && options.supersample != 1) {
    return scaleSupersampled(distorted, 1 / options.supersample);
  }

  return distorted;
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
    return distorted.then(function (distorted) {
      return sync(distorted);
    });
  }

  if ('sync' in distorted && typeof distorted.sync == 'function') {
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
    return supersampled.then(function (supersampled) {
      return scaleSupersampled(supersampled, scale);
    });
  }

  if ('scale' in supersampled && typeof supersampled.scale == 'function') {
    return supersampled.scale(scale);
  } else {
    console.warn("Method 'scale()' not found in image object. No scaling performed.");
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
  var dist = new _distorter__WEBPACK_IMPORTED_MODULE_3__["ReversePixelMapping"](image, distortion, resampler);
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
  var rsm;

  if (options.resampler) {
    rsm = options.resampler;
  } else if (options.resample) {
    rsm = new _resampler__WEBPACK_IMPORTED_MODULE_4__["EWA"](makeFilter(options));
  } else {
    rsm = new _resampler__WEBPACK_IMPORTED_MODULE_4__["Point"]();
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
  if (typeof options.filter == 'function') {
    return options.filter();
  }

  return options.filter;
}

/* harmony default export */ __webpack_exports__["default"] = (distort);

/***/ }),

/***/ "./lib/distorter/index.js":
/*!********************************!*\
  !*** ./lib/distorter/index.js ***!
  \********************************/
/*! exports provided: ReversePixelMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reverse_pixel_mapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reverse-pixel-mapping */ "./lib/distorter/reverse-pixel-mapping.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReversePixelMapping", function() { return _reverse_pixel_mapping__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * Distorter namespace
 *
 * @namespace lens.distorter
 */


/***/ }),

/***/ "./lib/distorter/reverse-pixel-mapping.js":
/*!************************************************!*\
  !*** ./lib/distorter/reverse-pixel-mapping.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Reverse pixel mapping.
 *
 * @memberOf lens.distorter
 * @see {@link https://www.imagemagick.org/Usage/distorts/#mapping Reverse pixel mapping details at ImageMagick docs}
 * @tutorial 02.02.reverse-pixel-mapping
 */
var ReversePixelMapping =
/*#__PURE__*/
function () {
  /**
   *
   * @param {ImageInterface} image Image to be distorted.
   * @param {DistortionInterface} distortion Distortion to be performed.
   * @param {ResamplerInterface} resampler Color resampler.
   */
  function ReversePixelMapping(image, distortion, resampler) {
    _classCallCheck(this, ReversePixelMapping);

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


  _createClass(ReversePixelMapping, [{
    key: "distort",
    value: function distort() {
      var _this = this;

      this.resampler.setImage(this.image);
      this.resampler.setMapper(this.mapper);
      var viewport = this.prepareViewport();
      var x1 = Math.floor(viewport.x1);
      var y1 = Math.floor(viewport.y1);
      var x2 = Math.floor(viewport.x2);
      var y2 = Math.floor(viewport.y2);
      var canvas = this.image.getBlank(viewport);
      this.resampler.scaling = 1 / this.outputScaling;

      if (canvas instanceof Promise) {
        return canvas.then(function (canvas) {
          return _this.performDistortionAsync(canvas, x1, y1, x2, y2);
        });
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

  }, {
    key: "performDistortion",
    value: function performDistortion(canvas, x1, y1, x2, y2) {
      for (var y = y1; y <= y2; y++) {
        for (var x = x1; x <= x2; x++) {
          canvas.setPixelColor(x, y, this.resampler.getResampledColor(x + 0.5, y + 0.5));
        }
      }

      return canvas;
    }
  }, {
    key: "performDistortionAsync",
    value: function performDistortionAsync() {
      var _this2 = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new Promise(function (resolve) {
        return setTimeout(function () {
          return resolve(_this2.performDistortion.apply(_this2, args), 0);
        });
      });
    }
    /**
     * @protected
     * @returns {lens.Viewport}
     */

  }, {
    key: "prepareViewport",
    value: function prepareViewport() {
      var viewport;

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
  }]);

  return ReversePixelMapping;
}();

/* harmony default export */ __webpack_exports__["default"] = (ReversePixelMapping);

/***/ }),

/***/ "./lib/distortion/affine.js":
/*!**********************************!*\
  !*** ./lib/distortion/affine.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_gauss_jordan_elimination_least_squares__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/gauss-jordan-elimination/least-squares */ "./lib/util/gauss-jordan-elimination/least-squares.js");
/* harmony import */ var _mixins_creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mixins/creates-bestFit-viewport-from-apexes */ "./lib/mixins/creates-bestFit-viewport-from-apexes.js");
/* harmony import */ var _exception_invalid_arguments_length__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../exception/invalid-arguments-length */ "./lib/exception/invalid-arguments-length.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/util */ "./lib/util/util.js");








function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





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
  return [matrix[0] * x + matrix[1] * y + matrix[2], matrix[3] * x + matrix[4] * y + matrix[5]];
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


var Affine =
/*#__PURE__*/
function () {
  /**
   *
   * @param {number[]} matrix Affine matrix.
   */
  function Affine(matrix) {
    _classCallCheck(this, Affine);

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


  _createClass(Affine, [{
    key: "reverseMap",

    /**
     * @inheritDoc
     */
    value: function reverseMap(x, y) {
      return map(x, y, this.matrix);
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "getValidity",
    value: function getValidity(x, y) {
      return 1;
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "getPartialDerivatives",
    value: function getPartialDerivatives(x, y) {
      return [this.matrix[0], this.matrix[1], this.matrix[3], this.matrix[4]];
    }
    /**
     * Maps source coords into destination coords.
     *
     * @param {number} x X-coordinate of source image point.
     * @param {number} y Y-coordinate of source image point.
     * @returns {Point} Forward mapped destination image coords.
     */

  }, {
    key: "forwardMap",
    value: function forwardMap(x, y) {
      return map(x, y, this.forwardMatrix);
    }
  }], [{
    key: "fromControlPoints",
    value: function fromControlPoints(controlPoints) {
      if (controlPoints.length % 4 != 0) {
        throw new _exception_invalid_arguments_length__WEBPACK_IMPORTED_MODULE_9__["default"]("Number of arguments must be multiple of 4 and at least 4 arguments (1 control point) expected. ".concat(controlPoints.length, " arguments given."));
      }
      /*
       * handle special cases of not enough arguments
       */


      if (controlPoints.length === 4) {
        // Only 1 CP Set Given
        return new Affine([1, 0, controlPoints[0] - controlPoints[2], 0, 1, controlPoints[1] - controlPoints[3]]);
      } else {
        // 2 or more points (usally 3) given.
        // Solve a least squares simultaneous equation for coefficients.
        var leastSquares = new _util_gauss_jordan_elimination_least_squares__WEBPACK_IMPORTED_MODULE_7__["default"](3, 2);

        for (var i = 0; i < controlPoints.length; i += 4) {
          var _controlPoints$slice = controlPoints.slice(i, i + 4),
              _controlPoints$slice2 = _slicedToArray(_controlPoints$slice, 4),
              u = _controlPoints$slice2[0],
              v = _controlPoints$slice2[1],
              x = _controlPoints$slice2[2],
              y = _controlPoints$slice2[3];

          leastSquares.addTerms([x, y, 1], [u, v]);
        }

        if (controlPoints.length === 8) {
          /*
           * Only two pairs were given, but we need 3 to solve the affine.
           * Fake extra coordinates by rotating p1 around p0 by 90 degrees.
           * x2 = x0 - (y1-y0)   y2 = y0 + (x1-x0)
           */
          leastSquares.addTerms([controlPoints[2] - (controlPoints[7] - controlPoints[3]), controlPoints[3] + (controlPoints[6] - controlPoints[2]), 1], [controlPoints[0] - controlPoints[5] + controlPoints[1], controlPoints[1] + controlPoints[4] - controlPoints[0]]);
        }

        var vectors = leastSquares.solve().getVectors();
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

  }, {
    key: "fromForwardMatrix",
    value: function fromForwardMatrix(matrix) {
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

  }, {
    key: "invertAffineMatrix",
    value: function invertAffineMatrix(matrix) {
      /* From "Digital Image Warping" by George Wolberg, page 50 */
      var determinant = Object(_util_util__WEBPACK_IMPORTED_MODULE_10__["perceptibleReciprocal"])(matrix[0] * matrix[4] - matrix[1] * matrix[3]);
      return [determinant * matrix[4], determinant * -matrix[1], determinant * (matrix[1] * matrix[5] - matrix[2] * matrix[4]), determinant * -matrix[3], determinant * matrix[0], determinant * (matrix[2] * matrix[3] - matrix[0] * matrix[5])];
    }
  }]);

  return Affine;
}();

Object.assign(Affine.prototype, _mixins_creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_8__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Affine);

/***/ }),

/***/ "./lib/distortion/arc.js":
/*!*******************************!*\
  !*** ./lib/distortion/arc.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");
/* harmony import */ var core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");
/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../exception */ "./lib/exception/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util */ "./lib/util/index.js");
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../viewport */ "./lib/viewport.js");








function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





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

var Arc =
/*#__PURE__*/
function () {
  /**
   *
   * @param {lens.Viewport} viewport
   * @param {number} c0 Angle for center of source image.
   * @param {number} c1 Angle scale for mapping to source image.
   * @param {number} c2 Radius for top of source image.
   * @param {number} c3 Radius scale for mapping source image.
   * @param {number} c4 Center line of arc within source image.
   */
  function Arc(viewport, c0, c1, c2, c3, c4) {
    _classCallCheck(this, Arc);

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

    this.angleToWidth = _constants__WEBPACK_IMPORTED_MODULE_7__["M_2PI"] * this.viewport.width() / this.c1;
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


  _createClass(Arc, [{
    key: "reverseMap",

    /**
     * @inheritDoc
     */
    value: function reverseMap(x, y) {
      var _this$getUV = this.getUV(x, y),
          _this$getUV2 = _slicedToArray(_this$getUV, 2),
          u = _this$getUV2[0],
          v = _this$getUV2[1]; // now scale the angle and radius for source image lookup point


      u = u * this.angleToWidth + this.c4 + this.viewport.x1 + 0.5;
      v = (this.c2 - v) * this.radiusToHeight + this.viewport.y1; //console.log(u, v, x, y);

      return [u, v];
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "getValidity",
    value: function getValidity(x, y) {
      return 1;
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "getPartialDerivatives",
    value: function getPartialDerivatives(x, y) {
      var _this$getUV3 = this.getUV(x, y),
          _this$getUV4 = _slicedToArray(_this$getUV3, 2),
          u = _this$getUV4[0],
          v = _this$getUV4[1];
      /*
       * Arc Distortion Partial Scaling Vectors
       * Are derived by mapping the perpendicular unit vectors
       * dR  and  dA*R*2PI  rather than trying to map dx and dy
       * The results is a very simple orthogonal aligned ellipse.
       */


      if (v > _constants__WEBPACK_IMPORTED_MODULE_7__["EPSILON"]) {
        return [this.angleToWidth / (_constants__WEBPACK_IMPORTED_MODULE_7__["M_2PI"] * v), 0, 0, this.radiusToHeight];
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

  }, {
    key: "getBestFitViewport",
    value: function getBestFitViewport(viewport) {
      // Forward Map Corners
      var a = this.c0 - this.c1 / 2,
          ca = Math.cos(a),
          sa = Math.sin(a),
          x = this.c2 * ca,
          y = this.c2 * sa,
          vp = new _viewport__WEBPACK_IMPORTED_MODULE_10__["default"](x, y, x, y);
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
      vp.expand(x, y); // Orthogonal points along top of arc

      for (a = Math.ceil((this.c0 - this.c1 / 2) / _constants__WEBPACK_IMPORTED_MODULE_7__["M_PI2"]) * _constants__WEBPACK_IMPORTED_MODULE_7__["M_PI2"]; a < this.c0 + this.c1 / 2; a += _constants__WEBPACK_IMPORTED_MODULE_7__["M_PI2"]) {
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

  }, {
    key: "getUV",
    value: function getUV(x, y) {
      var u, v; // what is the angle and radius in the destination image

      u = (Math.atan2(y, x) - this.c0) / _constants__WEBPACK_IMPORTED_MODULE_7__["M_2PI"];
      u -= Math.round(u);
      v = Math.hypot(x, y);
      return [u, v];
    }
  }], [{
    key: "fromArguments",
    value: function fromArguments(viewport, args) {
      if (args.length >= 1 && args[0] < _constants__WEBPACK_IMPORTED_MODULE_7__["EPSILON"]) {
        throw new _exception__WEBPACK_IMPORTED_MODULE_8__["InvalidArgument"]('Angle too small');
      }

      if (args.length >= 3 && args[2] < _constants__WEBPACK_IMPORTED_MODULE_7__["EPSILON"]) {
        throw new _exception__WEBPACK_IMPORTED_MODULE_8__["InvalidArgument"]('Outer radius too small');
      }

      var c0, c1, c2, c3, c4;
      c0 = -_constants__WEBPACK_IMPORTED_MODULE_7__["M_PI2"]; // -90, place at top!

      if (args.length >= 1) {
        c1 = Object(_util__WEBPACK_IMPORTED_MODULE_9__["deg2rad"])(args[0]);
      } else {
        c1 = _constants__WEBPACK_IMPORTED_MODULE_7__["M_PI2"]; // zero arguments - center is at top
      }

      if (args.length >= 2) {
        c0 += Object(_util__WEBPACK_IMPORTED_MODULE_9__["deg2rad"])(args[1]);
      }

      c0 /= _constants__WEBPACK_IMPORTED_MODULE_7__["M_2PI"]; // normalize radians

      c0 -= Math.round(c0);
      c0 *= _constants__WEBPACK_IMPORTED_MODULE_7__["M_2PI"]; // de-normalize back to radians

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
  }]);

  return Arc;
}();

/* harmony default export */ __webpack_exports__["default"] = (Arc);

/***/ }),

/***/ "./lib/distortion/index.js":
/*!*********************************!*\
  !*** ./lib/distortion/index.js ***!
  \*********************************/
/*! exports provided: Affine, Perspective, Arc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _affine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./affine */ "./lib/distortion/affine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Affine", function() { return _affine__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _perspective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perspective */ "./lib/distortion/perspective.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Perspective", function() { return _perspective__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _arc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arc */ "./lib/distortion/arc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return _arc__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/**
 * Distortion namespace
 *
 * @namespace lens.distortion
 */




/***/ }),

/***/ "./lib/distortion/perspective.js":
/*!***************************************!*\
  !*** ./lib/distortion/perspective.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_gauss_jordan_elimination_least_squares__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/gauss-jordan-elimination/least-squares */ "./lib/util/gauss-jordan-elimination/least-squares.js");
/* harmony import */ var _mixins_creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mixins/creates-bestFit-viewport-from-apexes */ "./lib/mixins/creates-bestFit-viewport-from-apexes.js");
/* harmony import */ var _exception_invalid_arguments_length__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../exception/invalid-arguments-length */ "./lib/exception/invalid-arguments-length.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/util */ "./lib/util/util.js");








function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





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
  var p = matrix[0] * x + matrix[1] * y + matrix[2],
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


var Perspective =
/*#__PURE__*/
function () {
  /**
   *
   * @param {number[]} reverseMatrix Perspective projection matrix for reverse pixel mapping.
   * @param {number} denominator Denominator for mapping validity calculation.
   */
  function Perspective(reverseMatrix, denominator) {
    _classCallCheck(this, Perspective);

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


  _createClass(Perspective, [{
    key: "reverseMap",

    /**
     * @inheritDoc
     */
    value: function reverseMap(x, y) {
      return map(x, y, this.matrix);
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "getValidity",
    value: function getValidity(x, y, scaling) {
      var r = this.matrix[6] * x + this.matrix[7] * y + 1;
      var validity = r * this.denominator < 0 ? 0 : 1;
      var absR = Math.abs(r) * 2;
      var absC6 = Math.abs(this.matrix[6]);
      var absC7 = Math.abs(this.matrix[7]);

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

  }, {
    key: "getPartialDerivatives",
    value: function getPartialDerivatives(x, y) {
      var p = this.matrix[0] * x + this.matrix[1] * y + this.matrix[2],
          q = this.matrix[3] * x + this.matrix[4] * y + this.matrix[5],
          r = this.matrix[6] * x + this.matrix[7] * y + 1,
          scale = Math.pow(1 / r, 2);
      return [(r * this.matrix[0] - p * this.matrix[6]) * scale, // dUx
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

  }, {
    key: "forwardMap",
    value: function forwardMap(u, v) {
      return map(u, v, this.forwardMatrix);
    }
  }], [{
    key: "fromControlPoints",
    value: function fromControlPoints(controlPoints) {
      if (controlPoints.length < 16 || controlPoints.length % 4 != 0) {
        throw new _exception_invalid_arguments_length__WEBPACK_IMPORTED_MODULE_9__["default"]("Number of arguments must be multiple of 4 and at least 16 arguments (4 control points) expected. ".concat(controlPoints.length, " arguments given."));
      }

      var leastSquares = new _util_gauss_jordan_elimination_least_squares__WEBPACK_IMPORTED_MODULE_7__["default"](8, 1);

      for (var i = 0; i < controlPoints.length; i += 4) {
        var _controlPoints$slice = controlPoints.slice(i, i + 4),
            _controlPoints$slice2 = _slicedToArray(_controlPoints$slice, 4),
            u = _controlPoints$slice2[0],
            v = _controlPoints$slice2[1],
            x = _controlPoints$slice2[2],
            y = _controlPoints$slice2[3];

        leastSquares.addTerms([x, y, 1, 0, 0, 0, -x * u, -y * u], [u]).addTerms([0, 0, 0, x, y, 1, -x * v, -y * v], [v]);
      }

      var matrix = leastSquares.solve().getVectors()[0];
      /*
       * Calculate denominator! The ground-sky determination.
       * What is sign of the 'ground' in r() denominator affine function?
       * Just use any valid image coordinate (first control point) in
       * destination for determination of what part of view is 'ground'.
       */

      var denominator = matrix[6] * controlPoints[2] + matrix[7] * controlPoints[3] + 1 < 0 ? -1 : 1;
      return new Perspective(matrix, denominator);
    }
    /**
     * Creates perspective distortion using perspective matrix.
     *
     * @param {number[]} matrix Perspective matrix.
     * @returns {lens.distortion.Perspective}
     * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l00853 Generating inverted perspective distortion matrix from forward perspective matrix at ImageMagick docs}
     */

  }, {
    key: "fromForwardMatrix",
    value: function fromForwardMatrix(matrix) {
      // TODO: trap test  c0*c4-c3*c1 == 0  (determinant = 0, no inverse)
      var inverse = this.invertPerspectiveMatrix(matrix);
      /*
       * Calculate denominator! The ground-sky determination.
       * What is sign of the 'ground' in r() denominator affine function?
       * Just use any valid image coordinate in destination for determination.
       * For a forward mapped perspective the images 0,0 coord will map to
       * c2,c5 in the distorted image, so set the sign of denominator of that.
       */

      var denominator = inverse[6] * matrix[2] + inverse[7] * matrix[5] + 1 < 0 ? -1 : 1;
      return new Perspective(inverse, denominator);
    }
    /**
     * Creates inverted perspective matrix from perspective matrix.
     *
     * @param {number[]} matrix Perspective matrix.
     * @returns {number[]} Inverted perspective matrix.
     * @see {@link https://imagemagick.org/api/MagickCore/distort_8c_source.html#l00109 Inverting perspective matrix at ImageMagick source}
     */

  }, {
    key: "invertPerspectiveMatrix",
    value: function invertPerspectiveMatrix(matrix) {
      var determinant = Object(_util_util__WEBPACK_IMPORTED_MODULE_10__["perceptibleReciprocal"])(matrix[0] * matrix[4] - matrix[3] * matrix[1]);
      return [determinant * (matrix[4] - matrix[7] * matrix[5]), determinant * (matrix[7] * matrix[2] - matrix[1]), determinant * (matrix[1] * matrix[5] - matrix[4] * matrix[2]), determinant * (matrix[6] * matrix[5] - matrix[3]), determinant * (matrix[0] - matrix[6] * matrix[2]), determinant * (matrix[3] * matrix[2] - matrix[0] * matrix[5]), determinant * (matrix[3] * matrix[7] - matrix[6] * matrix[4]), determinant * (matrix[6] * matrix[1] - matrix[0] * matrix[7])];
    }
  }]);

  return Perspective;
}();

Object.assign(Perspective.prototype, _mixins_creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_8__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Perspective);

/***/ }),

/***/ "./lib/distorts.js":
/*!*************************!*\
  !*** ./lib/distorts.js ***!
  \*************************/
/*! exports provided: registerDistortionResolver, unregisterDistortionResolver, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDistortionResolver", function() { return registerDistortionResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterDistortionResolver", function() { return unregisterDistortionResolver; });
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _distortion_affine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./distortion/affine */ "./lib/distortion/affine.js");
/* harmony import */ var _distortion_arc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./distortion/arc */ "./lib/distortion/arc.js");
/* harmony import */ var _distortion_perspective__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./distortion/perspective */ "./lib/distortion/perspective.js");







function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




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
  return _distortion_affine__WEBPACK_IMPORTED_MODULE_6__["default"].fromControlPoints(args);
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


function affineByMatrix(_ref) {
  var _ref2 = _slicedToArray(_ref, 6),
      sx = _ref2[0],
      ry = _ref2[1],
      rx = _ref2[2],
      sy = _ref2[3],
      tx = _ref2[4],
      ty = _ref2[5];

  // Change arguments order.
  return _distortion_affine__WEBPACK_IMPORTED_MODULE_6__["default"].fromForwardMatrix([sx, rx, tx, ry, sy, ty]);
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
    return _distortion_affine__WEBPACK_IMPORTED_MODULE_6__["default"].fromControlPoints(args);
  }

  return _distortion_perspective__WEBPACK_IMPORTED_MODULE_8__["default"].fromControlPoints(args);
}
/**
 * @private
 * @param {number[]} args
 * @returns {lens.distortion.Perspective}
 */


function perspectiveByMatrix(args) {
  return _distortion_perspective__WEBPACK_IMPORTED_MODULE_8__["default"].fromForwardMatrix(args);
}
/**
 * @private
 * @param {number[]} args
 * @param {ImageInterface} image
 * @returns {lens.distortion.Arc}
 */


function arcByArguments(args, image) {
  return _distortion_arc__WEBPACK_IMPORTED_MODULE_7__["default"].fromArguments(image.viewport, args);
}
/**
 * Distortion types.
 *
 * @enum {lens~distortionResolver}
 * @memberOf lens
 */


var distorts = {
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
  distorts[name] = resolver;
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

/***/ "./lib/exception/index.js":
/*!********************************!*\
  !*** ./lib/exception/index.js ***!
  \********************************/
/*! exports provided: LensException, InvalidArgumentsLength, UnsolvableMatrix, InvalidArgument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lens_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lens-exception */ "./lib/exception/lens-exception.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LensException", function() { return _lens_exception__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _invalid_arguments_length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalid-arguments-length */ "./lib/exception/invalid-arguments-length.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvalidArgumentsLength", function() { return _invalid_arguments_length__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _unsolvable_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsolvable-matrix */ "./lib/exception/unsolvable-matrix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsolvableMatrix", function() { return _unsolvable_matrix__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _invalid_argument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invalid-argument */ "./lib/exception/invalid-argument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvalidArgument", function() { return _invalid_argument__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/**
 * Exception namespace
 *
 * @namespace lens.exception
 */





/***/ }),

/***/ "./lib/exception/invalid-argument.js":
/*!*******************************************!*\
  !*** ./lib/exception/invalid-argument.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lens_exception__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lens-exception */ "./lib/exception/lens-exception.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Invalid Argument Exception.
 *
 * @memberOf lens.exception
 * @extends lens.exception.LensException
 */

var InvalidArgument =
/*#__PURE__*/
function (_LensException) {
  _inherits(InvalidArgument, _LensException);

  /**
   *
   * @param {string} message
   */
  function InvalidArgument(message) {
    _classCallCheck(this, InvalidArgument);

    return _possibleConstructorReturn(this, _getPrototypeOf(InvalidArgument).call(this, message));
  }

  return InvalidArgument;
}(_lens_exception__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (InvalidArgument);

/***/ }),

/***/ "./lib/exception/invalid-arguments-length.js":
/*!***************************************************!*\
  !*** ./lib/exception/invalid-arguments-length.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lens_exception__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lens-exception */ "./lib/exception/lens-exception.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Exception for cases when invalid number of arguments passed
 *
 * @extends lens.exception.LensException
 * @memberOf lens.exception
 */

var InvalidArgumentsLength =
/*#__PURE__*/
function (_LensException) {
  _inherits(InvalidArgumentsLength, _LensException);

  /**
   *
   * @param {string} message
   */
  function InvalidArgumentsLength(message) {
    _classCallCheck(this, InvalidArgumentsLength);

    return _possibleConstructorReturn(this, _getPrototypeOf(InvalidArgumentsLength).call(this, message));
  }

  return InvalidArgumentsLength;
}(_lens_exception__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (InvalidArgumentsLength);

/***/ }),

/***/ "./lib/exception/lens-exception.js":
/*!*****************************************!*\
  !*** ./lib/exception/lens-exception.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_11__);













function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Base Lens exception
 *
 * @extends Error
 * @memberOf lens.exception
 */
var LensException =
/*#__PURE__*/
function (_Error) {
  _inherits(LensException, _Error);

  /**
   *
   * @param {string} message
   */
  function LensException(message) {
    var _this;

    _classCallCheck(this, LensException);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LensException).call(this, message));
    _this.name = _this.constructor.name;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(_assertThisInitialized(_this), _this.constructor);
    } else {
      _this.stack = new Error(message).stack;
    }

    return _this;
  }

  return LensException;
}(_wrapNativeSuper(Error));

/* harmony default export */ __webpack_exports__["default"] = (LensException);

/***/ }),

/***/ "./lib/exception/unsolvable-matrix.js":
/*!********************************************!*\
  !*** ./lib/exception/unsolvable-matrix.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lens_exception__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lens-exception */ "./lib/exception/lens-exception.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Exception for unsolvable matrix in Gauss-Jordan elimination
 *
 * @extends lens.exception.LensException
 * @memberOf lens.exception
 */

var UnsolvableMatrix =
/*#__PURE__*/
function (_LensException) {
  _inherits(UnsolvableMatrix, _LensException);

  /**
   *
   * @param {string} message
   */
  function UnsolvableMatrix(message) {
    _classCallCheck(this, UnsolvableMatrix);

    return _possibleConstructorReturn(this, _getPrototypeOf(UnsolvableMatrix).call(this, message));
  }

  return UnsolvableMatrix;
}(_lens_exception__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (UnsolvableMatrix);

/***/ }),

/***/ "./lib/filter-presets.js":
/*!*******************************!*\
  !*** ./lib/filter-presets.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter/filter */ "./lib/filter/filter.js");
/* harmony import */ var _filter_filter_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter/filter-functions */ "./lib/filter/filter-functions.js");


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
  return new _filter_filter__WEBPACK_IMPORTED_MODULE_0__["default"](Object(_filter_filter_functions__WEBPACK_IMPORTED_MODULE_1__["cubicBC"])(0.37821575509399867, 0.31089212245300067), Object(_filter_filter_functions__WEBPACK_IMPORTED_MODULE_1__["box"])(), 2, 1.1685777620836932, 1);
}
/**
 * @private
 * @returns {lens.filter.Filter}
 * @constructor
 */


function ROBIDOUX_SHARP() {
  return new _filter_filter__WEBPACK_IMPORTED_MODULE_0__["default"](Object(_filter_filter_functions__WEBPACK_IMPORTED_MODULE_1__["cubicBC"])(0.2620145123990142, 0.3689927438004929), 2, Object(_filter_filter_functions__WEBPACK_IMPORTED_MODULE_1__["box"])(), 1.105822933719019, 1);
}
/**
 * Filter presets.
 *
 * @enum {lens~filterFactory}
 * @memberOf lens
 */


var filterPresets = {
  ROBIDOUX: ROBIDOUX,
  ROBIDOUX_SHARP: ROBIDOUX_SHARP
}; // TODO add more filter presets

/* harmony default export */ __webpack_exports__["default"] = (filterPresets);

/***/ }),

/***/ "./lib/filter/filter-functions.js":
/*!****************************************!*\
  !*** ./lib/filter/filter-functions.js ***!
  \****************************************/
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
  return function () {
    return 1;
  };
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
  var p0 = (6 - 2 * b) / 6;
  var p1 = 0;
  var p2 = (-18 + 12 * b + 6 * c) / 6;
  var p3 = (12 - 9 * b - 6 * c) / 6;
  var q0 = (8 * b + 24 * c) / 6;
  var q1 = (-12 * b - 48 * c) / 6;
  var q2 = (6 * b + 30 * c) / 6;
  var q3 = (-1 * b - 6 * c) / 6;
  return function (x) {
    if (x < 1) {
      return p0 + x * (x * (p2 + x * p3));
    } else if (x < 2) {
      return q0 + x * (q1 + x * (q2 + x * q3));
    } else {
      return 0;
    }
  };
} // TODO: add more filter functions




/***/ }),

/***/ "./lib/filter/filter.js":
/*!******************************!*\
  !*** ./lib/filter/filter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


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

var Filter =
/*#__PURE__*/
function () {
  /**
   *
   * @param {lens.filter.Filter~filterFunction} filterFunction Filtering function.
   * @param {lens.filter.Filter~filterFunction} windowFunction Windowing function.
   * @param {number} support Filter region of support - the filter support limit.
   * @param {number} scale Dimension scaling to fit window support (usally 1.0).
   * @param {number} [blur=1] X-scale (blur-sharpen).
   * @param {number} [windowSupport=null] Window support, usually equal to support (expert only).
   */
  function Filter(filterFunction, windowFunction, support, scale) {
    var blur = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    var windowSupport = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

    _classCallCheck(this, Filter);

    this.filterFunction = filterFunction;
    this.windowFunction = windowFunction;
    this.support = support;
    this.scale = scale;
    this.blur = blur;
    this.windowSupport = windowSupport !== null ? windowSupport : support;
  }
  /**
   * @inheritDoc
   */


  _createClass(Filter, [{
    key: "getWeight",
    value: function getWeight(x) {
      var xBlur = x / this.blur;
      var scale = xBlur < _constants__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] ? 1 : this.window(this.scale * xBlur);
      return scale * this.filter(xBlur);
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "filter",
    value: function filter(x) {
      return this.filterFunction(x, this.support, this.windowSupport);
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "window",
    value: function window(x) {
      return this.windowFunction(x, this.support, this.windowSupport);
    }
  }]);

  return Filter;
}();

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./lib/filter/index.js":
/*!*****************************!*\
  !*** ./lib/filter/index.js ***!
  \*****************************/
/*! exports provided: Filter, filterFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./lib/filter/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _filter_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-functions */ "./lib/filter/filter-functions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "filterFunctions", function() { return _filter_functions__WEBPACK_IMPORTED_MODULE_1__; });
/**
 * Filter namespace
 *
 * @namespace lens.filter
 */




/***/ }),

/***/ "./lib/image/abstract-image.js":
/*!*************************************!*\
  !*** ./lib/image/abstract-image.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewport */ "./lib/viewport.js");
/* harmony import */ var _vpx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vpx */ "./lib/vpx.js");
/* harmony import */ var _mixins_virtual_pixel_trait__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/virtual-pixel-trait */ "./lib/mixins/virtual-pixel-trait.js");
/* harmony import */ var _mixins_interpolation_trait__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/interpolation-trait */ "./lib/mixins/interpolation-trait.js");
/* harmony import */ var _interpolation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../interpolation */ "./lib/interpolation.js");




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







function notImplemented(method) {
  throw new Error("".concat(method, "() is abstract method and must be implemented by child class"));
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


var AbstractImage =
/*#__PURE__*/
function () {
  /**
   * @param {number} width Image width
   * @param {number} height Image height
   */
  function AbstractImage(width, height) {
    _classCallCheck(this, AbstractImage);

    this.width = width;
    this.height = height;
    this.viewport = new _viewport__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0, this.width - 1, this.height - 1);
    this.backgroundColor = [0, 0, 0, 0]; // Transparent;

    this.virtualPixelMethod = _vpx__WEBPACK_IMPORTED_MODULE_4__["default"].TRANSPARENT;
    this.quantumRange = 255;
    this.interpolationMethod = _interpolation__WEBPACK_IMPORTED_MODULE_7__["default"].INTEGER;
  }
  /**
   * @inheritDoc
   */


  _createClass(AbstractImage, [{
    key: "getPixelColor",
    value: function getPixelColor(x, y) {
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

  }, {
    key: "setPixelColor",
    value: function setPixelColor(x, y, color) {
      x = Math.floor(x - this.viewport.x1);
      y = Math.floor(y - this.viewport.y1);

      if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
        this.setImagePixelColor(x, y, color);
        return this;
      }

      throw new Error("Given coords (".concat(x, ", ").concat(y, ") is out of image bounds"));
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "getBlank",
    value: function getBlank(viewport) {
      var blank = this.prepareBlank(viewport.width(), viewport.height());

      if (blank instanceof Promise) {
        return blank.then(function (blank) {
          blank.viewport = viewport;
          return blank;
        });
      }

      blank.viewport = viewport;
      return blank;
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "scale",
    value: function scale(_scale) {
      var viewport = this.viewport.clone();
      viewport.scale(_scale);
      var resized = this.resize(viewport.width(), viewport.height());

      if (resized instanceof Promise) {
        return resized.then(function () {
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

  }, {
    key: "sync",
    value: function sync() {
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

  }, {
    key: "getImagePixelColor",
    value: function getImagePixelColor(x, y) {
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

  }, {
    key: "setImagePixelColor",
    value: function setImagePixelColor(x, y, color) {
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

  }, {
    key: "prepareBlank",
    value: function prepareBlank(width, height) {
      notImplemented('prepareBlank');
    }
    /**
     * Returns average color of whole image.
     *
     * @abstract
     * @returns {Color}
     */

  }, {
    key: "getAverageColor",
    value: function getAverageColor() {
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

  }, {
    key: "resize",
    value: function resize(width, height) {
      notImplemented('resize');
    }
  }]);

  return AbstractImage;
}();

Object.assign(AbstractImage.prototype, _mixins_virtual_pixel_trait__WEBPACK_IMPORTED_MODULE_5__["default"]);
Object.assign(AbstractImage.prototype, _mixins_interpolation_trait__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (AbstractImage);

/***/ }),

/***/ "./lib/image/canvas.js":
/*!*****************************!*\
  !*** ./lib/image/canvas.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _abstract_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract-image */ "./lib/image/abstract-image.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * ImageInterface implementation for distortion using HTML5 Canvas objects.
 * Distortion result will contain new Canvas object in {@link lens.image.Canvas#canvas} property.
 *
 * @implements {ImageInterface}
 * @memberOf lens.image
 * @extends lens.image.AbstractImage
 */

var Canvas =
/*#__PURE__*/
function (_AbstractImage) {
  _inherits(Canvas, _AbstractImage);

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function Canvas(canvas) {
    var _this;

    _classCallCheck(this, Canvas);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Canvas).call(this, canvas.width, canvas.height));
    _this.canvas = canvas;
    _this.imageData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
    _this.data = _this.imageData.data;
    return _this;
  }
  /**
   * @inheritDoc
   */


  _createClass(Canvas, [{
    key: "getImagePixelColor",
    value: function getImagePixelColor(x, y) {
      var offset = (y * this.width + x) * 4;
      return Array.prototype.slice.call(this.data, offset, offset + 4);
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "setImagePixelColor",
    value: function setImagePixelColor(x, y, color) {
      var _this2 = this;

      var offset = (y * this.width + x) * 4;
      color.forEach(function (channel, i) {
        return _this2.data[offset + i] = channel;
      });
      return this;
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "prepareBlank",
    value: function prepareBlank(width, height) {
      var canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      return new this.constructor(canvas);
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "sync",
    value: function sync() {
      this.canvas.getContext('2d').putImageData(this.imageData, 0, 0);
      return this;
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "getAverageColor",
    value: function getAverageColor() {
      var canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      canvas.getContext('2d').drawImage(this.canvas, 0, 0, this.width, this.height, 0, 0, 1, 1);
      return Array.prototype.slice.call(canvas.getContext('2d').getImageData(0, 0, 1, 1).data);
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "resize",
    value: function resize(width, height) {
      var dst = document.createElement('canvas');
      dst.width = width;
      dst.height = height;
      dst.getContext('2d').drawImage(this.canvas, 0, 0, this.width, this.height, 0, 0, width, height);
      return new this.constructor(dst);
    }
  }]);

  return Canvas;
}(_abstract_image__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Canvas);

/***/ }),

/***/ "./lib/image/dom-image.js":
/*!********************************!*\
  !*** ./lib/image/dom-image.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_reflect_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
/* harmony import */ var core_js_modules_es6_reflect_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas */ "./lib/image/canvas.js");







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Wrapper for {@link lens.image.Canvas} for direct distortion of DOM Image objects.
 * Distortion result will contain new DOM Image object in {@link lens.image.DomImage#image} property.
 *
 * @implements {ImageInterface}
 * @memberOf lens.image
 * @extends lens.image.Canvas
 */

var DomImage =
/*#__PURE__*/
function (_Canvas) {
  _inherits(DomImage, _Canvas);

  /**
   *
   * @param {Image} image DOM Image object
   */
  function DomImage(image) {
    var _this;

    _classCallCheck(this, DomImage);

    var canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.getContext('2d').drawImage(image, 0, 0);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(DomImage).call(this, canvas));
    _this.image = image;
    return _this;
  }
  /**
   * @inheritDoc
   */


  _createClass(DomImage, [{
    key: "prepareBlank",
    value: function prepareBlank(width, height) {
      return new this.constructor(new Image(width, height));
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "sync",
    value: function sync() {
      var _this2 = this;

      _get(_getPrototypeOf(DomImage.prototype), "sync", this).call(this);

      return new Promise(function (resolve) {
        _this2.image.onload = function () {
          return resolve(_this2);
        };

        _this2.image.src = _this2.canvas.toDataURL();
      });
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "resize",
    value: function resize(width, height) {
      var _this3 = this;

      return this.sync().then(function () {
        return new Promise(function (resolve) {
          var canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          canvas.getContext('2d').drawImage(_this3.image, 0, 0, _this3.width, _this3.height, 0, 0, width, height);
          var image = new Image(width, height);

          image.onload = function () {
            var resized = new _this3.constructor(image);
            resolve(resized);
          };

          image.src = canvas.toDataURL();
        });
      });
    }
  }]);

  return DomImage;
}(_canvas__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (DomImage);

/***/ }),

/***/ "./lib/image/index.js":
/*!****************************!*\
  !*** ./lib/image/index.js ***!
  \****************************/
/*! exports provided: AbstractImage, Canvas, DomImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-image */ "./lib/image/abstract-image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractImage", function() { return _abstract_image__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./lib/image/canvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _canvas__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _dom_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-image */ "./lib/image/dom-image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomImage", function() { return _dom_image__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/**
 * Image namespace
 *
 * @namespace lens.image
 */




/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: distort, VERSION, distorter, distortion, exception, filter, filterPresets, image, mixins, resampler, util, interpolation, vpx, Viewport, distorts, registerDistortionResolver, unregisterDistortionResolver, EPSILON, MAXIMUM_VALUE, M_PI2, M_2PI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _distort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distort */ "./lib/distort.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distort", function() { return _distort__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _distorter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distorter */ "./lib/distorter/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "distorter", function() { return _distorter__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _distortion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distortion */ "./lib/distortion/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "distortion", function() { return _distortion__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exception */ "./lib/exception/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "exception", function() { return _exception__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter */ "./lib/filter/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _filter_presets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-presets */ "./lib/filter-presets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterPresets", function() { return _filter_presets__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image */ "./lib/image/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "image", function() { return _image__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mixins */ "./lib/mixins/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return _mixins__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _resampler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resampler */ "./lib/resampler/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "resampler", function() { return _resampler__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util */ "./lib/util/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_9__; });
/* harmony import */ var _interpolation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interpolation */ "./lib/interpolation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolation", function() { return _interpolation__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _vpx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vpx */ "./lib/vpx.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vpx", function() { return _vpx__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viewport */ "./lib/viewport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Viewport", function() { return _viewport__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _distorts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./distorts */ "./lib/distorts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distorts", function() { return _distorts__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDistortionResolver", function() { return _distorts__WEBPACK_IMPORTED_MODULE_13__["registerDistortionResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unregisterDistortionResolver", function() { return _distorts__WEBPACK_IMPORTED_MODULE_13__["unregisterDistortionResolver"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constants */ "./lib/constants.js");
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
var VERSION = '1.0.0';






























/***/ }),

/***/ "./lib/interpolation.js":
/*!******************************!*\
  !*** ./lib/interpolation.js ***!
  \******************************/
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
var interpolation = {
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

/***/ "./lib/mixins/creates-bestFit-viewport-from-apexes.js":
/*!************************************************************!*\
  !*** ./lib/mixins/creates-bestFit-viewport-from-apexes.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../viewport */ "./lib/viewport.js");









function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/**
 * Mixin for classes implementing {@link DistortionInterface} that can calculate best fit viewport using forward
 * pixel mapping of image corners.
 *
 * @memberOf lens.mixins
 * @mixin
 */

var createsBestFitViewportFromApexes = {
  /**
   * Returns best fit viewport for distortion, using forward mapping for image apexes (corners).
   *
   * @param {lens.Viewport} viewport
   * @returns {lens.Viewport}
   */
  getBestFitViewport: function getBestFitViewport(viewport) {
    var _this = this;

    var u1 = viewport.x1,
        v1 = viewport.y1,
        u2 = viewport.x2 + 1,
        v2 = viewport.y2 + 1,
        _this$forwardMap = this.forwardMap(u1, v1),
        _this$forwardMap2 = _slicedToArray(_this$forwardMap, 2),
        x = _this$forwardMap2[0],
        y = _this$forwardMap2[1],
        bestFit = new _viewport__WEBPACK_IMPORTED_MODULE_8__["default"](x, y, x, y);

    [[u2, v1], [u2, v2], [u1, v2]].forEach(function (apex) {
      return bestFit.expand.apply(bestFit, _toConsumableArray(_this.forwardMap.apply(_this, _toConsumableArray(apex))));
    });
    bestFit.fixBounds();
    return bestFit;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createsBestFitViewportFromApexes);

/***/ }),

/***/ "./lib/mixins/index.js":
/*!*****************************!*\
  !*** ./lib/mixins/index.js ***!
  \*****************************/
/*! exports provided: interpolationTrait, virtualPixelTrait, createsBestFitViewportFromApexes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interpolation_trait__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpolation-trait */ "./lib/mixins/interpolation-trait.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolationTrait", function() { return _interpolation_trait__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _virtual_pixel_trait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virtual-pixel-trait */ "./lib/mixins/virtual-pixel-trait.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "virtualPixelTrait", function() { return _virtual_pixel_trait__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creates-bestFit-viewport-from-apexes */ "./lib/mixins/creates-bestFit-viewport-from-apexes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createsBestFitViewportFromApexes", function() { return _creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/**
 * @namespace lens.mixins
 */




/***/ }),

/***/ "./lib/mixins/interpolation-trait.js":
/*!*******************************************!*\
  !*** ./lib/mixins/interpolation-trait.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interpolation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interpolation */ "./lib/interpolation.js");

/**
 * Adds color interpolation functionality for classes that implement {@link ImageInterface}
 *
 * @mixin
 * @memberOf lens.mixins
 */

var interpolationTrait = {
  /**
   * Returns interpolated pixel color.
   *
   * @param {number} x
   * @param {number} y
   * @param {lens.interpolation} [interpolationMethod=this.interpolationMethod]
   * @returns {Color}
   */
  getInterpolatedPixelColor: function getInterpolatedPixelColor(x, y) {
    var interpolationMethod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.interpolationMethod;

    switch (interpolationMethod) {
      case _interpolation__WEBPACK_IMPORTED_MODULE_0__["default"].AVERAGE:
        return this.interpolateAverage(x, y, 2);

      case _interpolation__WEBPACK_IMPORTED_MODULE_0__["default"].AVERAGE_9:
        return this.interpolateAverage(x, y, 3);

      case _interpolation__WEBPACK_IMPORTED_MODULE_0__["default"].ANERAGE_16:
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
  interpolateAverage: function interpolateAverage(x, y) {
    var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    var startX, startY;

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

    var endX = startX + count;
    var endY = startY + count;
    var color = [0, 0, 0, 0];

    for (var Y = startY; Y < endY; Y++) {
      for (var X = startX; X < endX; X++) {
        this.getPixelColor(x, y).forEach(function (channel, i) {
          return color[i] += channel;
        });
      }
    }

    var gamma = 1 / (count * count);
    return color.map(function (channel) {
      return Math.round(channel * gamma);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (interpolationTrait);

/***/ }),

/***/ "./lib/mixins/virtual-pixel-trait.js":
/*!*******************************************!*\
  !*** ./lib/mixins/virtual-pixel-trait.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vpx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../vpx */ "./lib/vpx.js");










function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/**
 * @private
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @returns {Point}
 */

function getEdgeCoords(x, y, width, height) {
  return [Math.max(0, Math.min(width - 1, x)), Math.max(0, Math.min(height - 1, y))];
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
  var rx = x % width,
      ry = y % height;
  return [rx < 0 ? width + rx : rx, ry < 0 ? height + ry : ry];
}
/**
 * Adds virtual pixel behavior to classes that implement ImageInterface.
 *
 * @mixin
 * @memberOf lens.mixins
 * @tutorial 02.05.virtual-pixels-and-matte
 */


var virtualPixelTrait = {
  /**
   * Returns virtual pixel color.
   *
   * @param {number} x Image X-coordinate OUTSIDE of image bounds.
   * @param {number} y Image Y-coordinate OUTSIDE of image bounds.
   * @param {lens.vpx} method Virtual pixel method.
   * @returns {Color}
   */
  getVirtualPixelColor: function getVirtualPixelColor(x, y, method) {
    switch (method) {
      case _vpx__WEBPACK_IMPORTED_MODULE_9__["default"].BACKGROUND:
        return this.backgroundColor.slice();

      case _vpx__WEBPACK_IMPORTED_MODULE_9__["default"].EDGE:
        return this.getImagePixelColor.apply(this, _toConsumableArray(getEdgeCoords(x, y, this.width, this.height)));

      case _vpx__WEBPACK_IMPORTED_MODULE_9__["default"].MIRROR:
        var _getTileCoords = getTileCoords(x, y, this.width * 2, this.height * 2),
            _getTileCoords2 = _slicedToArray(_getTileCoords, 2),
            tx = _getTileCoords2[0],
            ty = _getTileCoords2[1];

        if (tx > this.width - 1) {
          tx = this.width - (tx - this.width) - 1;
        }

        if (ty > this.height - 1) {
          ty = this.height - (ty - this.height) - 1;
        }

        return this.getImagePixelColor(tx, ty);

      case _vpx__WEBPACK_IMPORTED_MODULE_9__["default"].TILE:
        return this.getImagePixelColor.apply(this, _toConsumableArray(getTileCoords(x, y, this.width, this.height)));

      case _vpx__WEBPACK_IMPORTED_MODULE_9__["default"].TRANSPARENT:
      default:
        return [0, 0, 0, 0];

      case _vpx__WEBPACK_IMPORTED_MODULE_9__["default"].BLACK:
        return [0, 0, 0, this.quantumRange];

      case _vpx__WEBPACK_IMPORTED_MODULE_9__["default"].WHITE:
        return new Array(4).fill(this.quantumRange);

      case _vpx__WEBPACK_IMPORTED_MODULE_9__["default"].GRAY:
        return new Array(3).fill(Math.round(this.quantumRange / 2)).concat([this.quantumRange]);

      case _vpx__WEBPACK_IMPORTED_MODULE_9__["default"].HORIZONTAL_TILE:
      case _vpx__WEBPACK_IMPORTED_MODULE_9__["default"].HORIZONTAL_TILE_EDGE:
        if (y < 0 || y >= this.height) {
          return method === _vpx__WEBPACK_IMPORTED_MODULE_9__["default"].HORIZONTAL_TILE ? this.backgroundColor.slice() : this.getImagePixelColor.apply(this, _toConsumableArray(getEdgeCoords(x, y, this.width, this.height)));
        }

        return this.getImagePixelColor.apply(this, _toConsumableArray(getTileCoords(x, y, this.width, this.height)));

      case _vpx__WEBPACK_IMPORTED_MODULE_9__["default"].VERTICAL_TILE:
      case _vpx__WEBPACK_IMPORTED_MODULE_9__["default"].VERTICAL_TILE_EDGE:
        if (x < 0 || y >= this.width) {
          return method === _vpx__WEBPACK_IMPORTED_MODULE_9__["default"].VERTICAL_TILE ? this.backgroundColor.slice() : this.getImagePixelColor.apply(this, _toConsumableArray(getEdgeCoords(x, y, this.width, this.height)));
        }

        return this.getImagePixelColor.apply(this, _toConsumableArray(getTileCoords(x, y, this.width, this.height)));

      case _vpx__WEBPACK_IMPORTED_MODULE_9__["default"].RANDOM:
        return this.getImagePixelColor(Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.height));
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (virtualPixelTrait);

/***/ }),

/***/ "./lib/resampler/e-w-a.js":
/*!********************************!*\
  !*** ./lib/resampler/e-w-a.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vpx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vpx */ "./lib/vpx.js");
/* harmony import */ var _interpolation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../interpolation */ "./lib/interpolation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/util */ "./lib/util/util.js");









function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/**
 * @private
 * @type {number}
 */

var WEIGHT_LOOKUP_TABLE_WIDTH = 1024;
/**
 * @private
 * @param {FilterInterface} filter
 * @param {number} support
 * @returns {number[]}
 */

function buildWeightLookupTable(filter, support) {
  var table = [];
  var rScale = support * Math.sqrt(1 / WEIGHT_LOOKUP_TABLE_WIDTH);

  for (var Q = 0; Q < WEIGHT_LOOKUP_TABLE_WIDTH; Q++) {
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
  var a = dux;
  var b = duy;
  var c = dvx;
  var d = dvy;
  /*
   * n is the matrix Jinv * transpose(Jinv). Eigenvalues of n are the
   * squares of the singular values of Jinv.
   */

  var aa = a * a;
  var bb = b * b;
  var cc = c * c;
  var dd = d * d;
  /*
   * Eigenvectors of n are left singular vectors of Jinv.
   */

  var n11 = aa + bb;
  var n12 = a * c + b * d;
  var n21 = n12;
  var n22 = cc + dd;
  var det = a * d - b * c;
  var twice_det = det + det;
  var frobenius_squared = n11 + n22;
  var discriminant = (frobenius_squared + twice_det) * (frobenius_squared - twice_det);
  /*
   * In exact arithmetic, discriminant can't be negative. In floating
   * point, it can, because of the bad conditioning of SVD
   * decompositions done through the associated normal matrix.
   */

  var sqrt_discriminant = Math.sqrt(discriminant > 0 ? discriminant : 0);
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

  var s1s1 = 0.5 * (frobenius_squared + sqrt_discriminant);
  /*
   * s2 the smallest singular value of the inverse Jacobian
   * matrix. Its reciprocal is the largest singular value of the
   * Jacobian matrix itself.
   */

  var s2s2 = 0.5 * (frobenius_squared - sqrt_discriminant);
  var s1s1minusn11 = s1s1 - n11;
  var s1s1minusn22 = s1s1 - n22;
  /*
   * u1, the first column of the U factor of a singular decomposition
   * of Jinv, is a (non-normalized) left singular vector corresponding
   * to s1. It has entries u11 and u21. We compute u1 from the fact
   * that it is an eigenvector of n corresponding to the eigenvalue
   * s1^2.
   */

  var s1s1minusn11_squared = s1s1minusn11 * s1s1minusn11;
  var s1s1minusn22_squared = s1s1minusn22 * s1s1minusn22;
  /*
   * The following selects the largest row of n-s1^2 I as the one
   * which is used to find the eigenvector. If both s1^2-n11 and
   * s1^2-n22 are zero, n-s1^2 I is the zero matrix.  In that case,
   * any vector is an eigenvector; in addition, norm below is equal to
   * zero, and, in exact arithmetic, this is the only case in which
   * norm = 0. So, setting u1 to the simple but arbitrary vector [1,0]
   * if norm = 0 safely takes care of all cases.
   */

  var temp_u11 = s1s1minusn11_squared >= s1s1minusn22_squared ? n12 : s1s1minusn22;
  var temp_u21 = s1s1minusn11_squared >= s1s1minusn22_squared ? s1s1minusn11 : n21;
  var norm = Math.sqrt(temp_u11 * temp_u11 + temp_u21 * temp_u21);
  /*
   * Finalize the entries of first left singular vector (associated
   * with the largest singular value).
   */

  var u11 = norm > 0 ? temp_u11 / norm : 1;
  var u21 = norm > 0 ? temp_u21 / norm : 0;
  /*
   * Clamp the singular values up to 1.
   */

  var major_mag = s1s1 <= 1 ? 1 : Math.sqrt(s1s1);
  var minor_mag = s2s2 <= 1 ? 1 : Math.sqrt(s2s2);
  var major_x = u11 * major_mag;
  var major_y = u21 * major_mag;
  var minor_x = -u21 * minor_mag;
  var minor_y = u11 * minor_mag;
  return [major_x, major_y, minor_x, minor_y, major_mag, minor_mag];
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


var EWA =
/*#__PURE__*/
function () {
  /**
   *
   * @param {FilterInterface} filter
   */
  function EWA(filter) {
    _classCallCheck(this, EWA);

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


  _createClass(EWA, [{
    key: "getResampledColor",
    value: function getResampledColor(x, y) {
      x = x * this.scaling;
      y = y * this.scaling;
      var validity = this.mapper.getValidity(x, y, this.scaling);

      if (validity > 0) {
        var _this$mapper$reverseM = this.mapper.reverseMap(x, y),
            _this$mapper$reverseM2 = _slicedToArray(_this$mapper$reverseM, 2),
            u = _this$mapper$reverseM2[0],
            v = _this$mapper$reverseM2[1];

        if (this.mapper.hasConstantPartialDerivatives) {
          this.setupEllipseOnce.apply(this, _toConsumableArray(this.mapper.getPartialDerivatives(x, y)));
        } else {
          this.setupEllipse.apply(this, _toConsumableArray(this.mapper.getPartialDerivatives(x, y)));
        }

        var color = this.getWeightedAverage(u, v);

        if (validity < 1) {
          return Object(_util_util__WEBPACK_IMPORTED_MODULE_11__["blendColors"])(color, validity, this.matteColor);
        }

        return color;
      }

      return this.matteColor.slice();
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "setImage",
    value: function setImage(image) {
      this.image = image; // cache image viewport for faster direct access.

      this.imageViewport = this.image.viewport; // cache image area.

      this.imageArea = this.imageViewport.area(); // cache image virtual pixel method (will it be faster actually?)

      this.imageVirtualPixelMethod = this.image.virtualPixelMethod; // reset cached image average color

      this.imageAverageColor = null;
      return this;
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "setMapper",
    value: function setMapper(mapper) {
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

  }, {
    key: "setupEllipseOnce",
    value: function setupEllipseOnce() {
      if (!this.ellipseIsSetUp) {
        this.ellipseIsSetUp = true;
        return this.setupEllipse.apply(this, arguments);
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

  }, {
    key: "setupEllipse",
    value: function setupEllipse() {
      var _this = this;

      for (var _len = arguments.length, derivatives = new Array(_len), _key = 0; _key < _len; _key++) {
        derivatives[_key] = arguments[_key];
      }

      this.limitReached = false;
      derivatives = derivatives.map(function (derivative) {
        return derivative * _this.scaling;
      });
      return this.initEllipse.apply(this, _toConsumableArray(derivatives)).scaleEllipse();
    }
    /**
     * Calculates ellipse equation for given distortion partial derivatives.
     *
     * @private
     * @param derivatives
     * @returns {lens.resampler.EWA}
     */

  }, {
    key: "initEllipse",
    value: function initEllipse() {
      var _clampEllipseAxes = clampEllipseAxes.apply(void 0, arguments),
          _clampEllipseAxes2 = _slicedToArray(_clampEllipseAxes, 6),
          major_x = _clampEllipseAxes2[0],
          major_y = _clampEllipseAxes2[1],
          minor_x = _clampEllipseAxes2[2],
          minor_y = _clampEllipseAxes2[3],
          major_mag = _clampEllipseAxes2[4],
          minor_mag = _clampEllipseAxes2[5];

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

      this.limitReached = 4 * this.A * this.C - this.B * this.B > _constants__WEBPACK_IMPORTED_MODULE_10__["MAXIMUM_VALUE"];
      return this;
    }
    /**
     * Scales ellipse to match filter support.
     *
     * @private
     * @returns {lens.resampler.EWA}
     */

  }, {
    key: "scaleEllipse",
    value: function scaleEllipse() {
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


        var scale = WEIGHT_LOOKUP_TABLE_WIDTH / this.F;
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

  }, {
    key: "getWeightedAverage",
    value: function getWeightedAverage(u0, v0) {
      if (this.doesntNeedResampling(u0, v0)) {
        /* The area being resampled is simply a solid color
         * just return a single lookup color.
         */
        return this.image.getPixelColor(u0, v0);
      }

      if (this.limitReached) {
        // When Scaling limits reached, return an 'averaged' result.
        switch (this.imageVirtualPixelMethod) {
          case _vpx__WEBPACK_IMPORTED_MODULE_8__["default"].EDGE:
          case _vpx__WEBPACK_IMPORTED_MODULE_8__["default"].HORIZONTAL_TILE_EDGE:
          case _vpx__WEBPACK_IMPORTED_MODULE_8__["default"].VERTICAL_TILE_EDGE:
            /*
             * We need an average edge pixel, from the correct edge!
             * How should I calculate an average edge color?
             * Just returning an averaged neighbourhood,
             * works well in general, but falls down for TileEdge methods.
             * This needs to be done properly!!!!!!
             */
            return this.image.getInterpolatedPixelColor(u0, v0, _interpolation__WEBPACK_IMPORTED_MODULE_9__["default"].AVERAGE);

          case _vpx__WEBPACK_IMPORTED_MODULE_8__["default"].HORIZONTAL_TILE:
          case _vpx__WEBPACK_IMPORTED_MODULE_8__["default"].VERTICAL_TILE:
            /*
            * just return the background pixel - Is there more direct way?
            */
            return this.image.getPixelColor(this.imageViewport.x1 - 1, this.imageViewport.y1 - 1);

          default:
            return this.getImageAverageColor();
        }
      }

      var divisorM = 0,
          divisorC = 0,
          red = 0,
          green = 0,
          blue = 0,
          alpha = 0;
      /*
       * Determine the parellelogram bounding box fitted to the ellipse
       * centered at u0,v0.  This area is bounding by the lines...
       */

      var v1 = Math.ceil(v0 - this.vLimit);
      var v2 = Math.floor(v0 + this.vLimit); // scan line start and width accross the parallelogram

      var u1 = u0 + (v1 - v0) * this.slope - this.uWidth;
      var uw = 2 * this.uWidth + 1;
      /*
       * Do weighted resampling of all pixels,  within the scaled ellipse,
       * bound by a Parellelogram fitted to the ellipse.
       */

      var DDQ = 2 * this.A;

      for (var v = v1; v < v2; v++) {
        var ustart = Math.ceil(u1); // first pixel in scanline

        u1 += this.slope; // start of next scan line

        var uend = ustart + uw; // location of this first pixel, relative to u0,v0

        var U = ustart - u0;
        var V = v - v0; // Q = ellipse quotent ( if Q<F then pixel is inside ellipse)

        var Q = (this.A * U + this.B * V) * U + this.C * V * V;
        var DQ = this.A * (2 * U + 1) + this.B * V; // count up the weighted pixel colors

        for (var u = ustart; u < uend; u++) {
          // Note that the ellipse has been pre-scaled so F = $this->weightLookupTableWidth
          if (Q < WEIGHT_LOOKUP_TABLE_WIDTH) {
            var weight = this.weightLookupTable[Math.floor(Q)];

            var _this$image$getPixelC = this.image.getPixelColor(u, v),
                _this$image$getPixelC2 = _slicedToArray(_this$image$getPixelC, 4),
                r = _this$image$getPixelC2[0],
                g = _this$image$getPixelC2[1],
                b = _this$image$getPixelC2[2],
                a = _this$image$getPixelC2[3];

            alpha += weight * a;
            divisorM += weight;
            weight *= a / this.image.quantumRange;
            red += r * weight;
            green += g * weight;
            blue += b * weight;
            divisorC += weight;
          }

          Q += DQ;
          DQ += DDQ;
        }
      } // Result sanity check -- this should NOT happen


      if (!divisorC || !divisorM) {
        /*
         * not enough pixels, or bad weighting in resampling,
         * resort to direct interpolation
         */
        return this.image.getInterpolatedPixelColor(u0, v0);
      }

      return [clampToQuantum(Math.round(red / divisorC), this.image.quantumRange), clampToQuantum(Math.round(green / divisorC), this.image.quantumRange), clampToQuantum(Math.round(blue / divisorC), this.image.quantumRange), clampToQuantum(Math.round(alpha / divisorM), this.image.quantumRange)];
    }
    /**
     * Checks if no resampling is needed (if single pixel color should be returned).
     *
     * @private
     * @param {number} u
     * @param {number} v
     * @returns {boolean}
     */

  }, {
    key: "doesntNeedResampling",
    value: function doesntNeedResampling(u, v) {
      switch (this.imageVirtualPixelMethod) {
        case _vpx__WEBPACK_IMPORTED_MODULE_8__["default"].TRANSPARENT:
        case _vpx__WEBPACK_IMPORTED_MODULE_8__["default"].BACKGROUND:
        case _vpx__WEBPACK_IMPORTED_MODULE_8__["default"].BLACK:
        case _vpx__WEBPACK_IMPORTED_MODULE_8__["default"].WHITE:
        case _vpx__WEBPACK_IMPORTED_MODULE_8__["default"].GRAY:
          return this.limitReached || this.outOfImageBounds(u, v);

        case _vpx__WEBPACK_IMPORTED_MODULE_8__["default"].EDGE:
          return u + this.uLimit < this.imageViewport.x1 && v + this.vLimit < this.imageViewport.y1 || u + this.uLimit < this.imageViewport.x1 && v - this.vLimit > this.imageViewport.y2 || u - this.uLimit > this.imageViewport.x2 && v + this.vLimit < this.imageViewport.y1 || u - this.uLimit > this.imageViewport.x2 && v - this.vLimit > this.imageViewport.y2;

        case _vpx__WEBPACK_IMPORTED_MODULE_8__["default"].HORIZONTAL_TILE:
          return v + this.vLimit < this.imageViewport.y1 || v - this.vLimit > this.imageViewport.y2;

        case _vpx__WEBPACK_IMPORTED_MODULE_8__["default"].VERTICAL_TILE:
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

  }, {
    key: "getImageAverageColor",
    value: function getImageAverageColor() {
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

  }, {
    key: "outOfImageBounds",
    value: function outOfImageBounds(u, v) {
      return u + this.uLimit < this.imageViewport.x1 || u - this.uLimit > this.imageViewport.x2 || v + this.vLimit < this.imageViewport.y1 || v - this.vLimit > this.imageViewport.y2;
    }
  }]);

  return EWA;
}();

/* harmony default export */ __webpack_exports__["default"] = (EWA);

/***/ }),

/***/ "./lib/resampler/index.js":
/*!********************************!*\
  !*** ./lib/resampler/index.js ***!
  \********************************/
/*! exports provided: Point, EWA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./lib/resampler/point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return _point__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _e_w_a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e-w-a */ "./lib/resampler/e-w-a.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EWA", function() { return _e_w_a__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/**
 * @namespace lens.resampler
 */



/***/ }),

/***/ "./lib/resampler/point.js":
/*!********************************!*\
  !*** ./lib/resampler/point.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/util */ "./lib/util/util.js");







function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


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

var Point =
/*#__PURE__*/
function () {
  function Point() {
    _classCallCheck(this, Point);

    this.matteColor = [0, 0, 0, 0];
    this.scaling = 1;
  }
  /**
   * @inheritDoc
   */


  _createClass(Point, [{
    key: "setImage",
    value: function setImage(image) {
      this.image = image;
      return this;
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "setMapper",
    value: function setMapper(mapper) {
      this.mapper = mapper;
      return this;
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "getResampledColor",
    value: function getResampledColor(x, y) {
      x = x * this.scaling;
      y = y * this.scaling;
      var validity = this.mapper.getValidity(x, y, this.scaling);

      if (validity >= 0) {
        var _this$mapper$reverseM = this.mapper.reverseMap(x, y),
            _this$mapper$reverseM2 = _slicedToArray(_this$mapper$reverseM, 2),
            u = _this$mapper$reverseM2[0],
            v = _this$mapper$reverseM2[1];

        var color = this.image.getInterpolatedPixelColor(u, v);

        if (validity < 1) {
          return Object(_util_util__WEBPACK_IMPORTED_MODULE_6__["blendColors"])(color, this.matteColor, validity);
        }

        return color;
      }

      return this.matteColor.slice();
    }
  }]);

  return Point;
}();

/* harmony default export */ __webpack_exports__["default"] = (Point);

/***/ }),

/***/ "./lib/util/gauss-jordan-elimination/index.js":
/*!****************************************************!*\
  !*** ./lib/util/gauss-jordan-elimination/index.js ***!
  \****************************************************/
/*! exports provided: GaussJordanElimination, LeastSquares */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solver */ "./lib/util/gauss-jordan-elimination/solver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaussJordanElimination", function() { return _solver__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _least_squares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./least-squares */ "./lib/util/gauss-jordan-elimination/least-squares.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeastSquares", function() { return _least_squares__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/**
 * @namespace lens.util.gaussJordanElimination
 */



/***/ }),

/***/ "./lib/util/gauss-jordan-elimination/least-squares.js":
/*!************************************************************!*\
  !*** ./lib/util/gauss-jordan-elimination/least-squares.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _solver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solver */ "./lib/util/gauss-jordan-elimination/solver.js");





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * @summary Solves system of equations using Least Squares method.
 * @memberOf lens.util.gaussJordanElimination
 * @see {@link https://imagemagick.org/api/MagickCore/matrix_8c_source.html#l00829 LeastSquaresAddTerms()} at
 * ImageMagick source.
 */

var LeastSquares =
/*#__PURE__*/
function (_Solver) {
  _inherits(LeastSquares, _Solver);

  /**
   *
   * @param {number} rank The rank or size of the dimensions of the square matrix.
   * Also the length of vectors, and number of terms being added.
   * @param {number} numVectors Number of result vectors, and number or results being
   * added.  Also represents the number of separable systems of equations
   * that is being solved.
   */
  function LeastSquares(rank) {
    var numVectors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    _classCallCheck(this, LeastSquares);

    var matrix = [];
    var vectors = [];

    for (var i = 0; i < rank; i++) {
      matrix.push(new Array(rank).fill(0));
    }

    for (var _i = 0; _i < numVectors; _i++) {
      vectors.push(new Array(rank).fill(0));
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(LeastSquares).call(this, matrix, vectors));
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


  _createClass(LeastSquares, [{
    key: "addTerms",
    value: function addTerms(terms, results) {
      var rank = this.matrix.length;

      for (var j = 0; j < rank; j++) {
        for (var i = 0; i < rank; i++) {
          this.matrix[i][j] += terms[i] * terms[j];
        }

        for (var _i2 = 0; _i2 < this.vectors.length; _i2++) {
          this.vectors[_i2][j] += results[_i2] * terms[j];
        }
      }

      return this;
    }
  }]);

  return LeastSquares;
}(_solver__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (LeastSquares);

/***/ }),

/***/ "./lib/util/gauss-jordan-elimination/solver.js":
/*!*****************************************************!*\
  !*** ./lib/util/gauss-jordan-elimination/solver.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _exception_unsolvable_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../exception/unsolvable-matrix */ "./lib/exception/unsolvable-matrix.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./lib/util/util.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



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
  throw new _exception_unsolvable_matrix__WEBPACK_IMPORTED_MODULE_1__["default"]("Can't solve given matrix using Gauss-Jordan method");
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


var Solver =
/*#__PURE__*/
function () {
  /**
   *
   * @param {Array<number[]>} matrix Square matrix to be solved.
   * @param {Array<number[]>} vectors Augment results matrix.
   */
  function Solver(matrix, vectors) {
    _classCallCheck(this, Solver);

    this.solved = false;
    this.matrix = matrix.map(function (row) {
      return row.slice();
    });
    this.vectors = vectors.map(function (vector) {
      return vector.slice();
    });
  }
  /**
   * Solves given matrix.
   *
   * @returns {lens.util.gaussJordanElimination.Solver}
   */


  _createClass(Solver, [{
    key: "solve",
    value: function solve() {
      if (this.solved) {
        return this;
      }

      this.validate();
      var matrix = this.matrix;
      var vectors = this.vectors;
      var rank = matrix.length;
      var numVectors = vectors.length;
      var cols = new Array(rank).fill(0);
      var rows = new Array(rank).fill(0);
      var pivots = new Array(rank).fill(0);
      var col = 0;
      var row = 0;

      for (var i = 0; i < rank; i++) {
        var max = 0;

        for (var j = 0; j < rank; j++) {
          if (pivots[j] != 1) {
            for (var k = 0; k < rank; k++) {
              if (pivots[k] != 0) {
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

        if (row != col) {
          for (var _k = 0; _k < rank; _k++) {
            swap(matrix, row, _k, col, _k);
          }

          for (var _k2 = 0; _k2 < numVectors; _k2++) {
            swap(vectors, _k2, row, _k2, col);
          }
        }

        rows[i] = row;
        cols[i] = col;

        if (matrix[col][col] == 0) {
          unsolvable();
        }

        var scale = Object(_util__WEBPACK_IMPORTED_MODULE_2__["perceptibleReciprocal"])(matrix[col][col]);
        matrix[col][col] = 1;

        for (var _j = 0; _j < rank; _j++) {
          matrix[col][_j] *= scale;
        }

        for (var _j2 = 0; _j2 < numVectors; _j2++) {
          vectors[_j2][col] *= scale;
        }

        for (var _j3 = 0; _j3 < rank; _j3++) {
          if (_j3 != col) {
            var _scale = matrix[_j3][col];
            matrix[_j3][col] = 0;

            for (var _k3 = 0; _k3 < rank; _k3++) {
              matrix[_j3][_k3] -= _scale * matrix[col][_k3];
            }

            for (var _k4 = 0; _k4 < numVectors; _k4++) {
              vectors[_k4][_j3] -= _scale * vectors[_k4][col];
            }
          }
        }
      }

      for (var _j4 = rank - 1; _j4 >= 0; _j4--) {
        if (cols[_j4] != rows[_j4]) {
          for (var _i = 0; _i < rank; _i++) {
            swap(matrix, _i, rows[_j4], _i, cols[_j4]);
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

  }, {
    key: "getVectors",
    value: function getVectors() {
      return this.vectors.map(function (vector) {
        return vector.slice();
      });
    }
    /**
     * Validates matrix and vectors.
     * @protected
     * @returns {lens.util.gaussJordanElimination.Solver}
     */

  }, {
    key: "validate",
    value: function validate() {
      var rank = this.matrix.length;
      this.matrix.forEach(function (row) {
        if (row.length !== rank) {
          throw new Error('Matrix must be square');
        }
      });
      this.vectors.forEach(function (vector) {
        if (vector.length !== rank) {
          throw new Error('Vectors must be the same length as matrix rank');
        }
      });
      return this;
    }
  }]);

  return Solver;
}();

/* harmony default export */ __webpack_exports__["default"] = (Solver);

/***/ }),

/***/ "./lib/util/index.js":
/*!***************************!*\
  !*** ./lib/util/index.js ***!
  \***************************/
/*! exports provided: gaussJordanElimination, blendColors, perceptibleReciprocal, deg2rad, rad2deg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gauss_jordan_elimination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gauss-jordan-elimination */ "./lib/util/gauss-jordan-elimination/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "gaussJordanElimination", function() { return _gauss_jordan_elimination__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./lib/util/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blendColors", function() { return _util__WEBPACK_IMPORTED_MODULE_1__["blendColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "perceptibleReciprocal", function() { return _util__WEBPACK_IMPORTED_MODULE_1__["perceptibleReciprocal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return _util__WEBPACK_IMPORTED_MODULE_1__["deg2rad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return _util__WEBPACK_IMPORTED_MODULE_1__["rad2deg"]; });

/**
 * @namespace lens.util
 */




/***/ }),

/***/ "./lib/util/util.js":
/*!**************************!*\
  !*** ./lib/util/util.js ***!
  \**************************/
/*! exports provided: blendColors, perceptibleReciprocal, rad2deg, deg2rad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blendColors", function() { return blendColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perceptibleReciprocal", function() { return perceptibleReciprocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return rad2deg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");

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
  var sign = x < 0 ? -1 : 1;

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


function blendColors(color1, weight1, color2) {
  var weight2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (weight2 === null) {
    weight2 = 1 - weight1;
  }

  return color1.map(function (channel, i) {
    return Math.round(channel * weight1 + color2[i] * weight2);
  });
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

/***/ "./lib/viewport.js":
/*!*************************!*\
  !*** ./lib/viewport.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @summary Virtual viewport class.
 *
 * @description Represents image's virtual position at it's coordinate space.
 *
 * @memberOf lens
 * @see {@link https://www.imagemagick.org/Usage/basics/#page Virtual canvas offset} at ImageMagick docs.
 * @tutorial 02.06.virtual-viewport
 */
var Viewport =
/*#__PURE__*/
function () {
  /**
   *
   * @param {number} x1 Left edge coordinate of viewport.
   * @param {number} y1 Top edge coordinate  of viewport.
   * @param {number} x2 Right edge coordinate of viewport.
   * @param {number} y2 Bottom edge coordinate of viewport.
   */
  function Viewport(x1, y1, x2, y2) {
    _classCallCheck(this, Viewport);

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


  _createClass(Viewport, [{
    key: "width",
    value: function width() {
      return this.x2 - this.x1 + 1;
    }
    /**
     * Returns virtual viewport height -- same as image actual height.
     *
     * @returns {number}
     */

  }, {
    key: "height",
    value: function height() {
      return this.y2 - this.y1 + 1;
    }
    /**
     * Returns viewport area.
     *
     * @returns {number}
     */

  }, {
    key: "area",
    value: function area() {
      return this.width() * this.height();
    }
    /**
     * Checks if viewport contains given coords.
     *
     * @param {number} x
     * @param {number} y
     * @returns {boolean}
     */

  }, {
    key: "contains",
    value: function contains(x, y) {
      return x >= this.x1 && x <= this.x2 && y >= this.y1 && y <= this.y2;
    }
    /**
     * Expands viewport to contain given coords.
     *
     * @param {number} x
     * @param {number} y
     * @returns {lens.Viewport}
     */

  }, {
    key: "expand",
    value: function expand(x, y) {
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

  }, {
    key: "clone",
    value: function clone() {
      return new this.constructor(this.x1, this.y1, this.x2, this.y2);
    }
    /**
     * Fix bounds after best fit viewport calculation.
     *
     * @returns {lens.Viewport}
     */

  }, {
    key: "fixBounds",
    value: function fixBounds() {
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

  }, {
    key: "scale",
    value: function scale(_scale) {
      this.x1 = Math.round(this.x1 * _scale);
      this.y1 = Math.round(this.y1 * _scale);
      this.x2 = Math.round(this.x2 * _scale);
      this.y2 = Math.round(this.y2 * _scale);
      return this;
    }
    /**
     * Resets viewport offset.
     *
     * @returns {lens.Viewport}
     */

  }, {
    key: "reset",
    value: function reset() {
      var width = this.width(),
          height = this.height();
      this.x1 = 0;
      this.y1 = 0;
      this.x2 = this.x1 + width - 1;
      this.y2 = this.y1 + height - 1;
      return this;
    }
  }]);

  return Viewport;
}();

/* harmony default export */ __webpack_exports__["default"] = (Viewport);

/***/ }),

/***/ "./lib/vpx.js":
/*!********************!*\
  !*** ./lib/vpx.js ***!
  \********************/
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
var vpx = {
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
  VERTICAL_TILE_EDGE: 15 // TODO: implement and add Checker tile an dither methods

};
/* harmony default export */ __webpack_exports__["default"] = (vpx);

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW5zL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sZW5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlbnMvLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZGlzdG9ydC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRlci9yZXZlcnNlLXBpeGVsLW1hcHBpbmcuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9kaXN0b3J0aW9uL2FmZmluZS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRpb24vYXJjLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZGlzdG9ydGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRpb24vcGVyc3BlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9kaXN0b3J0cy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi9pbnZhbGlkLWFyZ3VtZW50LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZXhjZXB0aW9uL2ludmFsaWQtYXJndW1lbnRzLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi9sZW5zLWV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi91bnNvbHZhYmxlLW1hdHJpeC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2ZpbHRlci1wcmVzZXRzLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZmlsdGVyL2ZpbHRlci1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZmlsdGVyL2luZGV4LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvaW1hZ2UvYWJzdHJhY3QtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9pbWFnZS9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9pbWFnZS9kb20taW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9pbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2luZGV4LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvaW50ZXJwb2xhdGlvbi5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL21peGlucy9jcmVhdGVzLWJlc3RGaXQtdmlld3BvcnQtZnJvbS1hcGV4ZXMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9taXhpbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9taXhpbnMvaW50ZXJwb2xhdGlvbi10cmFpdC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL21peGlucy92aXJ0dWFsLXBpeGVsLXRyYWl0LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvcmVzYW1wbGVyL2Utdy1hLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvcmVzYW1wbGVyL2luZGV4LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvcmVzYW1wbGVyL3BvaW50LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdXRpbC9nYXVzcy1qb3JkYW4tZWxpbWluYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi91dGlsL2dhdXNzLWpvcmRhbi1lbGltaW5hdGlvbi9sZWFzdC1zcXVhcmVzLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdXRpbC9nYXVzcy1qb3JkYW4tZWxpbWluYXRpb24vc29sdmVyLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3ZpZXdwb3J0LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdnB4LmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWZpbGwuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19iaW5kLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZnVuY3Rpb24tdG8tc3RyaW5nLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdmFsaWRhdGUtY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXAuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguaHlwb3QuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmNvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5mbGFncy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovL2xlbnMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIl0sIm5hbWVzIjpbIkVQU0lMT04iLCJNQVhJTVVNX1ZBTFVFIiwiTV9QSTIiLCJNYXRoIiwiUEkiLCJNXzJQSSIsImRlZmF1bHRPcHRpb25zIiwiYmVzdEZpdCIsImZpbHRlciIsImZpbHRlclByZXNldHMiLCJST0JJRE9VWCIsInJlc2FtcGxlIiwiYXN5bmMiLCJvdXRwdXRTY2FsaW5nIiwiZGlzdG9ydCIsImltYWdlIiwiZGlzdG9ydGlvbiIsImFyZ3MiLCJvcHRpb25zIiwibWFrZU9wdGlvbnMiLCJmb3JjZUJlc3RGaXQiLCJkaXN0b3J0ZWQiLCJzeW5jIiwibWFrZURpc3RvcnRlciIsIm1ha2VSZXNhbXBsZXIiLCJzdXBlcnNhbXBsZSIsInNjYWxlU3VwZXJzYW1wbGVkIiwiUHJvbWlzZSIsInRoZW4iLCJzdXBlcnNhbXBsZWQiLCJzY2FsZSIsImNvbnNvbGUiLCJ3YXJuIiwiT2JqZWN0IiwiYXNzaWduIiwicmVzYW1wbGVyIiwiZGlzdCIsImRpc3RvcnRlciIsInZpZXdwb3J0IiwicnNtIiwibWFrZUZpbHRlciIsIm1hdHRlQ29sb3IiLCJzbGljZSIsIlJldmVyc2VQaXhlbE1hcHBpbmciLCJtYXBwZXIiLCJzZXRJbWFnZSIsInNldE1hcHBlciIsInByZXBhcmVWaWV3cG9ydCIsIngxIiwiZmxvb3IiLCJ5MSIsIngyIiwieTIiLCJjYW52YXMiLCJnZXRCbGFuayIsInNjYWxpbmciLCJwZXJmb3JtRGlzdG9ydGlvbkFzeW5jIiwicGVyZm9ybURpc3RvcnRpb24iLCJ5IiwieCIsInNldFBpeGVsQ29sb3IiLCJnZXRSZXNhbXBsZWRDb2xvciIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiY2xvbmUiLCJoYXNCZXN0Rml0Vmlld3BvcnQiLCJnZXRCZXN0Rml0Vmlld3BvcnQiLCJtYXAiLCJtYXRyaXgiLCJBZmZpbmUiLCJmb3J3YXJkTWF0cml4IiwiY29uc3RydWN0b3IiLCJpbnZlcnRBZmZpbmVNYXRyaXgiLCJoYXNQYXJ0aWFsRGVyaXZhdGl2ZXMiLCJoYXNDb25zdGFudFBhcnRpYWxEZXJpdmF0aXZlcyIsImNvbnRyb2xQb2ludHMiLCJsZW5ndGgiLCJJbnZhbGlkQXJndW1lbnRzTGVuZ3RoIiwibGVhc3RTcXVhcmVzIiwiTGVhc3RTcXVhcmVzIiwiaSIsInUiLCJ2IiwiYWRkVGVybXMiLCJ2ZWN0b3JzIiwic29sdmUiLCJnZXRWZWN0b3JzIiwiY29uY2F0IiwiZGV0ZXJtaW5hbnQiLCJwZXJjZXB0aWJsZVJlY2lwcm9jYWwiLCJwcm90b3R5cGUiLCJjcmVhdGVzQmVzdEZpdFZpZXdwb3J0RnJvbUFwZXhlcyIsIkFyYyIsImMwIiwiYzEiLCJjMiIsImMzIiwiYzQiLCJhbmdsZVRvV2lkdGgiLCJ3aWR0aCIsInJhZGl1c1RvSGVpZ2h0IiwiaGVpZ2h0IiwiZ2V0VVYiLCJhIiwiY2EiLCJjb3MiLCJzYSIsInNpbiIsInZwIiwiVmlld3BvcnQiLCJleHBhbmQiLCJjZWlsIiwiZml4Qm91bmRzIiwiYXRhbjIiLCJyb3VuZCIsImh5cG90IiwiSW52YWxpZEFyZ3VtZW50IiwiZGVnMnJhZCIsInAiLCJxIiwiciIsIlBlcnNwZWN0aXZlIiwicmV2ZXJzZU1hdHJpeCIsImRlbm9taW5hdG9yIiwiaW52ZXJ0UGVyc3BlY3RpdmVNYXRyaXgiLCJ2YWxpZGl0eSIsImFic1IiLCJhYnMiLCJhYnNDNiIsImFic0M3IiwicG93IiwiaW52ZXJzZSIsImFmZmluZUJ5Q29udHJvbFBvaW50cyIsImZyb21Db250cm9sUG9pbnRzIiwiYWZmaW5lQnlNYXRyaXgiLCJzeCIsInJ5IiwicngiLCJzeSIsInR4IiwidHkiLCJmcm9tRm9yd2FyZE1hdHJpeCIsInBlcnNwZWN0aXZlQnlDb250cm9sUG9pbnRzIiwicGVyc3BlY3RpdmVCeU1hdHJpeCIsImFyY0J5QXJndW1lbnRzIiwiZnJvbUFyZ3VtZW50cyIsImRpc3RvcnRzIiwiQUZGSU5FIiwiQUZGSU5FX1BST0pFQ1RJT04iLCJQRVJTUEVDVElWRSIsIlBFUlNQRUNUSVZFX1BST0pFQ1RJT04iLCJBUkMiLCJyZWdpc3RlckRpc3RvcnRpb25SZXNvbHZlciIsIm5hbWUiLCJyZXNvbHZlciIsInVucmVnaXN0ZXJEaXN0b3J0aW9uUmVzb2x2ZXIiLCJtZXNzYWdlIiwiTGVuc0V4Y2VwdGlvbiIsIkVycm9yIiwiY2FwdHVyZVN0YWNrVHJhY2UiLCJzdGFjayIsIlVuc29sdmFibGVNYXRyaXgiLCJGaWx0ZXIiLCJjdWJpY0JDIiwiYm94IiwiUk9CSURPVVhfU0hBUlAiLCJiIiwiYyIsInAwIiwicDEiLCJwMiIsInAzIiwicTAiLCJxMSIsInEyIiwicTMiLCJmaWx0ZXJGdW5jdGlvbiIsIndpbmRvd0Z1bmN0aW9uIiwic3VwcG9ydCIsImJsdXIiLCJ3aW5kb3dTdXBwb3J0IiwieEJsdXIiLCJ3aW5kb3ciLCJub3RJbXBsZW1lbnRlZCIsIm1ldGhvZCIsIkFic3RyYWN0SW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2aXJ0dWFsUGl4ZWxNZXRob2QiLCJ2cHgiLCJUUkFOU1BBUkVOVCIsInF1YW50dW1SYW5nZSIsImludGVycG9sYXRpb25NZXRob2QiLCJpbnRlcnBvbGF0aW9uIiwiSU5URUdFUiIsImdldEltYWdlUGl4ZWxDb2xvciIsImdldFZpcnR1YWxQaXhlbENvbG9yIiwiY29sb3IiLCJzZXRJbWFnZVBpeGVsQ29sb3IiLCJibGFuayIsInByZXBhcmVCbGFuayIsInJlc2l6ZWQiLCJyZXNpemUiLCJ2aXJ0dWFsUGl4ZWxUcmFpdCIsImludGVycG9sYXRpb25UcmFpdCIsIkNhbnZhcyIsImltYWdlRGF0YSIsImdldENvbnRleHQiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwib2Zmc2V0IiwiQXJyYXkiLCJjYWxsIiwiZm9yRWFjaCIsImNoYW5uZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwdXRJbWFnZURhdGEiLCJkcmF3SW1hZ2UiLCJkc3QiLCJEb21JbWFnZSIsIkltYWdlIiwib25sb2FkIiwic3JjIiwidG9EYXRhVVJMIiwiVkVSU0lPTiIsIkFWRVJBR0UiLCJBVkVSQUdFXzkiLCJBVkVSQUdFXzE2IiwiQkFDS0dST1VORCIsInUxIiwidjEiLCJ1MiIsInYyIiwiZm9yd2FyZE1hcCIsImFwZXgiLCJnZXRJbnRlcnBvbGF0ZWRQaXhlbENvbG9yIiwibWV0aG9kcyIsImludGVycG9sYXRlQXZlcmFnZSIsIkFORVJBR0VfMTYiLCJnZXRQaXhlbENvbG9yIiwiY291bnQiLCJzdGFydFgiLCJzdGFydFkiLCJlbmRYIiwiZW5kWSIsIlkiLCJYIiwiZ2FtbWEiLCJnZXRFZGdlQ29vcmRzIiwibWF4IiwibWluIiwiZ2V0VGlsZUNvb3JkcyIsInZweE1ldGhvZHMiLCJFREdFIiwiTUlSUk9SIiwiVElMRSIsIkJMQUNLIiwiV0hJVEUiLCJmaWxsIiwiR1JBWSIsIkhPUklaT05UQUxfVElMRSIsIkhPUklaT05UQUxfVElMRV9FREdFIiwiVkVSVElDQUxfVElMRSIsIlZFUlRJQ0FMX1RJTEVfRURHRSIsIlJBTkRPTSIsInJhbmRvbSIsIldFSUdIVF9MT09LVVBfVEFCTEVfV0lEVEgiLCJidWlsZFdlaWdodExvb2t1cFRhYmxlIiwidGFibGUiLCJyU2NhbGUiLCJzcXJ0IiwiUSIsImdldFdlaWdodCIsImNsYW1wVG9RdWFudHVtIiwidmFsdWUiLCJjbGFtcEVsbGlwc2VBeGVzIiwiZHV4IiwiZHV5IiwiZHZ4IiwiZHZ5IiwiZCIsImFhIiwiYmIiLCJjYyIsImRkIiwibjExIiwibjEyIiwibjIxIiwibjIyIiwiZGV0IiwidHdpY2VfZGV0IiwiZnJvYmVuaXVzX3NxdWFyZWQiLCJkaXNjcmltaW5hbnQiLCJzcXJ0X2Rpc2NyaW1pbmFudCIsInMxczEiLCJzMnMyIiwiczFzMW1pbnVzbjExIiwiczFzMW1pbnVzbjIyIiwiczFzMW1pbnVzbjExX3NxdWFyZWQiLCJzMXMxbWludXNuMjJfc3F1YXJlZCIsInRlbXBfdTExIiwidGVtcF91MjEiLCJub3JtIiwidTExIiwidTIxIiwibWFqb3JfbWFnIiwibWlub3JfbWFnIiwibWFqb3JfeCIsIm1ham9yX3kiLCJtaW5vcl94IiwibWlub3JfeSIsIkVXQSIsInJlc2l6ZUZpbHRlciIsIndlaWdodExvb2t1cFRhYmxlIiwiaW1hZ2VWaWV3cG9ydCIsImltYWdlQXJlYSIsImltYWdlVmlydHVhbFBpeGVsTWV0aG9kIiwiaW1hZ2VBdmVyYWdlQ29sb3IiLCJBIiwiQiIsIkMiLCJGIiwidUxpbWl0IiwidkxpbWl0IiwidVdpZHRoIiwic2xvcGUiLCJlbGxpcHNlSXNTZXRVcCIsImxpbWl0UmVhY2hlZCIsImdldFZhbGlkaXR5IiwicmV2ZXJzZU1hcCIsInNldHVwRWxsaXBzZU9uY2UiLCJnZXRQYXJ0aWFsRGVyaXZhdGl2ZXMiLCJzZXR1cEVsbGlwc2UiLCJnZXRXZWlnaHRlZEF2ZXJhZ2UiLCJibGVuZENvbG9ycyIsImFyZWEiLCJkZXJpdmF0aXZlcyIsImRlcml2YXRpdmUiLCJpbml0RWxsaXBzZSIsInNjYWxlRWxsaXBzZSIsInUwIiwidjAiLCJkb2VzbnROZWVkUmVzYW1wbGluZyIsImdldEltYWdlQXZlcmFnZUNvbG9yIiwiZGl2aXNvck0iLCJkaXZpc29yQyIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFscGhhIiwidXciLCJERFEiLCJ1c3RhcnQiLCJ1ZW5kIiwiVSIsIlYiLCJEUSIsIndlaWdodCIsImciLCJvdXRPZkltYWdlQm91bmRzIiwiZ2V0QXZlcmFnZUNvbG9yIiwiUG9pbnQiLCJyYW5rIiwibnVtVmVjdG9ycyIsInB1c2giLCJ0ZXJtcyIsInJlc3VsdHMiLCJqIiwiU29sdmVyIiwic3dhcCIsImFycmF5Iiwicm93MSIsImNvbDEiLCJyb3cyIiwiY29sMiIsInVuc29sdmFibGUiLCJzb2x2ZWQiLCJyb3ciLCJ2ZWN0b3IiLCJ2YWxpZGF0ZSIsImNvbHMiLCJyb3dzIiwicGl2b3RzIiwiY29sIiwiayIsInNpZ24iLCJjb2xvcjEiLCJ3ZWlnaHQxIiwiY29sb3IyIiwid2VpZ2h0MiIsInJhZDJkZWciLCJyYWRpYW5zIiwiZGVncmVlcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBSUEsSUFBTUEsT0FBTyxHQUFHLE9BQWhCO0FBQ0E7Ozs7O0FBSUEsSUFBTUMsYUFBYSxHQUFHLHdCQUF0QjtBQUVBOzs7Ozs7O0FBTUEsSUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUF4QjtBQUVB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QUFDLHNEQUFRO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9ELHdCQUF3QjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibGVucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxlbnNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGVuc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiLyoqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBFUFNJTE9OID0gMS4wZS0xMjtcclxuLyoqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBNQVhJTVVNX1ZBTFVFID0gMS43OTc2OTMxMzQ4NjIzMTU3MEUrMzA4O1xyXG5cclxuLyoqXHJcbiAqIFBpLzJcclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICogQG1lbWJlck9mIGxlbnNcclxuICovXHJcbmNvbnN0IE1fUEkyID0gTWF0aC5QSSAvIDI7XHJcblxyXG4vKipcclxuICogUGkgKiAyXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xyXG5jb25zdCBNXzJQSSA9IE1hdGguUEkgKiAyO1xyXG5cclxuZXhwb3J0IHtcclxuICBFUFNJTE9OLFxyXG4gIE1BWElNVU1fVkFMVUUsXHJcbiAgTV9QSTIsXHJcbiAgTV8yUElcclxufTsiLCJpbXBvcnQgKiBhcyBkaXN0b3J0ZXIgZnJvbSBcIi4vZGlzdG9ydGVyXCI7XHJcbmltcG9ydCAqIGFzIHJlc2FtcGxlciBmcm9tIFwiLi9yZXNhbXBsZXJcIjtcclxuaW1wb3J0IGZpbHRlclByZXNldHMgZnJvbSAnLi9maWx0ZXItcHJlc2V0cyc7XHJcblxyXG5sZXQgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgYmVzdEZpdDogZmFsc2UsXHJcbiAgZmlsdGVyOiBmaWx0ZXJQcmVzZXRzLlJPQklET1VYLFxyXG4gIHJlc2FtcGxlOiB0cnVlLFxyXG4gIGFzeW5jOiB0cnVlLFxyXG4gIG91dHB1dFNjYWxpbmc6IDFcclxufTtcclxuXHJcbi8qKlxyXG4gKiBQZXJmb3JtcyBkaXN0b3J0aW9uIG9mIGltYWdlXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqIEBwYXJhbSB7SW1hZ2VJbnRlcmZhY2V9IGltYWdlXHJcbiAqIEBwYXJhbSB7bGVucy5kaXN0b3J0c3xsZW5zfmRpc3RvcnRpb25SZXNvbHZlcnxEaXN0b3J0aW9uSW50ZXJmYWNlfSBkaXN0b3J0aW9uXHJcbiAqIEBwYXJhbSB7YXJyYXl9IGFyZ3NcclxuICogQHBhcmFtIHtEaXN0b3J0aW9uT3B0aW9uc30gW29wdGlvbnNdXHJcbiAqIEByZXR1cm5zIHtJbWFnZUludGVyZmFjZXxQcm9taXNlPEltYWdlSW50ZXJmYWNlPn1cclxuICovXHJcbmZ1bmN0aW9uIGRpc3RvcnQoaW1hZ2UsIGRpc3RvcnRpb24sIGFyZ3MsIG9wdGlvbnMgPSB7fSkge1xyXG4gIGlmICh0eXBlb2YgZGlzdG9ydGlvbiA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBkaXN0b3J0aW9uICA9IGRpc3RvcnRpb24oYXJncywgaW1hZ2UpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvcHRpb25zICAgICA9IGFyZ3MgfHwge307XHJcbiAgfVxyXG5cclxuICBvcHRpb25zID0gbWFrZU9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gIGlmIChkaXN0b3J0aW9uLmZvcmNlQmVzdEZpdCkge1xyXG4gICAgb3B0aW9ucy5iZXN0Rml0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGxldCBkaXN0b3J0ZWQgPSBzeW5jKFxyXG4gICAgbWFrZURpc3RvcnRlcihcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGRpc3RvcnRpb24sXHJcbiAgICAgIG1ha2VSZXNhbXBsZXIoaW1hZ2UsIGRpc3RvcnRpb24sIG9wdGlvbnMpLFxyXG4gICAgICBvcHRpb25zXHJcbiAgICApLmRpc3RvcnQoKVxyXG4gICk7XHJcblxyXG4gIGlmIChvcHRpb25zLnN1cGVyc2FtcGxlICYmIG9wdGlvbnMuc3VwZXJzYW1wbGUgIT0gMSkge1xyXG4gICAgcmV0dXJuIHNjYWxlU3VwZXJzYW1wbGVkKGRpc3RvcnRlZCwgMSAvIG9wdGlvbnMuc3VwZXJzYW1wbGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpc3RvcnRlZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFN5bmMgSW1hZ2VJbnRlcmZhY2UgaW50ZXJuYWwgZGF0YSBzdG9yYWdlIHdpdGggaW1hZ2Ugb2JqZWN0LlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0ltYWdlSW50ZXJmYWNlfFByb21pc2U8SW1hZ2VJbnRlcmZhY2U+fSBkaXN0b3J0ZWRcclxuICogQHJldHVybnMge0ltYWdlSW50ZXJmYWNlfFByb21pc2U8SW1hZ2VJbnRlcmZhY2U+fVxyXG4gKi9cclxuZnVuY3Rpb24gc3luYyhkaXN0b3J0ZWQpIHtcclxuICBpZiAoZGlzdG9ydGVkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgcmV0dXJuIGRpc3RvcnRlZC50aGVuKGRpc3RvcnRlZCA9PiBzeW5jKGRpc3RvcnRlZCkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCdzeW5jJyBpbiBkaXN0b3J0ZWQgJiYgdHlwZW9mIGRpc3RvcnRlZC5zeW5jID09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiBkaXN0b3J0ZWQuc3luYygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpc3RvcnRlZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNjYWxlcyBzdXBlcnNhbXBsZWQgaW1hZ2UgYmFjayB0byBub3JtYWwgc2l6ZS5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZXxQcm9taXNlPEltYWdlSW50ZXJmYWNlPn0gc3VwZXJzYW1wbGVkXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVxyXG4gKiBAcmV0dXJucyB7SW1hZ2VJbnRlcmZhY2V8UHJvbWlzZTxJbWFnZUludGVyZmFjZT59XHJcbiAqL1xyXG5mdW5jdGlvbiBzY2FsZVN1cGVyc2FtcGxlZChzdXBlcnNhbXBsZWQsIHNjYWxlKSB7XHJcbiAgaWYgKHN1cGVyc2FtcGxlZCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgIHJldHVybiBzdXBlcnNhbXBsZWQudGhlbihzdXBlcnNhbXBsZWQgPT4gc2NhbGVTdXBlcnNhbXBsZWQoc3VwZXJzYW1wbGVkLCBzY2FsZSkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCdzY2FsZScgaW4gc3VwZXJzYW1wbGVkICYmIHR5cGVvZiBzdXBlcnNhbXBsZWQuc2NhbGUgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIHN1cGVyc2FtcGxlZC5zY2FsZShzY2FsZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUud2FybihgTWV0aG9kICdzY2FsZSgpJyBub3QgZm91bmQgaW4gaW1hZ2Ugb2JqZWN0LiBObyBzY2FsaW5nIHBlcmZvcm1lZC5gKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzdXBlcnNhbXBsZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyB2YWxpZCBvcHRpb25zIGZvciBkaXN0b3J0aW9uXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbk9wdGlvbnN9IG9wdGlvbnNcclxuICogQHJldHVybnMge0Rpc3RvcnRpb25PcHRpb25zfVxyXG4gKi9cclxuZnVuY3Rpb24gbWFrZU9wdGlvbnMob3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XHJcblxyXG4gIGlmIChvcHRpb25zLnN1cGVyc2FtcGxlKSB7XHJcbiAgICBvcHRpb25zLm91dHB1dFNjYWxpbmcgPSBvcHRpb25zLnN1cGVyc2FtcGxlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9wdGlvbnM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyBpbWFnZSBkaXN0b3J0ZXJcclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gaW1hZ2VcclxuICogQHBhcmFtIHtEaXN0b3J0aW9uSW50ZXJmYWNlfSBkaXN0b3J0aW9uXHJcbiAqIEBwYXJhbSB7UmVzYW1wbGVySW50ZXJmYWNlfSByZXNhbXBsZXJcclxuICogQHBhcmFtIHtEaXN0b3J0aW9uT3B0aW9uc30gb3B0aW9uc1xyXG4gKiBAcmV0dXJucyB7UmV2ZXJzZVBpeGVsTWFwcGluZ31cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VEaXN0b3J0ZXIoaW1hZ2UsIGRpc3RvcnRpb24sIHJlc2FtcGxlciwgb3B0aW9ucykge1xyXG4gIGNvbnN0IGRpc3QgPSBuZXcgZGlzdG9ydGVyLlJldmVyc2VQaXhlbE1hcHBpbmcoaW1hZ2UsIGRpc3RvcnRpb24sIHJlc2FtcGxlcik7XHJcbiAgZGlzdC5hc3luYyA9ICEhb3B0aW9ucy5hc3luYztcclxuICBkaXN0LmJlc3RGaXQgPSAhIW9wdGlvbnMuYmVzdEZpdDtcclxuXHJcbiAgaWYgKG9wdGlvbnMudmlld3BvcnQpIHtcclxuICAgIGRpc3Qudmlld3BvcnQgPSBvcHRpb25zLnZpZXdwb3J0O1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbnMub3V0cHV0U2NhbGluZykge1xyXG4gICAgZGlzdC5vdXRwdXRTY2FsaW5nID0gb3B0aW9ucy5vdXRwdXRTY2FsaW5nO1xyXG5cclxuICAgIGlmIChvcHRpb25zLnN1cGVyc2FtcGxlKSB7XHJcbiAgICAgIGRpc3Quc3VwZXJzYW1wbGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpc3Q7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyByZXNhbXBsZXJcclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gaW1hZ2VcclxuICogQHBhcmFtIHtEaXN0b3J0aW9uSW50ZXJmYWNlfSBkaXN0b3J0aW9uXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbk9wdGlvbnN9IG9wdGlvbnNcclxuICogQHJldHVybnMge1Jlc2FtcGxlckludGVyZmFjZX1cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VSZXNhbXBsZXIoaW1hZ2UsIGRpc3RvcnRpb24sIG9wdGlvbnMpIHtcclxuICBsZXQgcnNtO1xyXG5cclxuICBpZiAob3B0aW9ucy5yZXNhbXBsZXIpIHtcclxuICAgIHJzbSA9IG9wdGlvbnMucmVzYW1wbGVyO1xyXG4gIH0gZWxzZSBpZiAob3B0aW9ucy5yZXNhbXBsZSkge1xyXG4gICAgcnNtID0gbmV3IHJlc2FtcGxlci5FV0EobWFrZUZpbHRlcihvcHRpb25zKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJzbSA9IG5ldyByZXNhbXBsZXIuUG9pbnQoKTtcclxuICB9XHJcblxyXG4gIGlmIChvcHRpb25zLm1hdHRlQ29sb3IpIHtcclxuICAgIHJzbS5tYXR0ZUNvbG9yID0gb3B0aW9ucy5tYXR0ZUNvbG9yLnNsaWNlKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcnNtO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZXMgZmlsdGVyXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbk9wdGlvbnN9IG9wdGlvbnNcclxuICogQHJldHVybnMge0ZpbHRlckludGVyZmFjZX1cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VGaWx0ZXIob3B0aW9ucykge1xyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5maWx0ZXIgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb3B0aW9ucy5maWx0ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3RvcnQ7IiwiLyoqXHJcbiAqIERpc3RvcnRlciBuYW1lc3BhY2VcclxuICpcclxuICogQG5hbWVzcGFjZSBsZW5zLmRpc3RvcnRlclxyXG4gKi9cclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBSZXZlcnNlUGl4ZWxNYXBwaW5nfSBmcm9tICcuL3JldmVyc2UtcGl4ZWwtbWFwcGluZyc7IiwiLyoqXHJcbiAqIFJldmVyc2UgcGl4ZWwgbWFwcGluZy5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMuZGlzdG9ydGVyXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9kaXN0b3J0cy8jbWFwcGluZyBSZXZlcnNlIHBpeGVsIG1hcHBpbmcgZGV0YWlscyBhdCBJbWFnZU1hZ2ljayBkb2NzfVxyXG4gKiBAdHV0b3JpYWwgMDIuMDIucmV2ZXJzZS1waXhlbC1tYXBwaW5nXHJcbiAqL1xyXG5jbGFzcyBSZXZlcnNlUGl4ZWxNYXBwaW5nIHtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0ltYWdlSW50ZXJmYWNlfSBpbWFnZSBJbWFnZSB0byBiZSBkaXN0b3J0ZWQuXHJcbiAgICogQHBhcmFtIHtEaXN0b3J0aW9uSW50ZXJmYWNlfSBkaXN0b3J0aW9uIERpc3RvcnRpb24gdG8gYmUgcGVyZm9ybWVkLlxyXG4gICAqIEBwYXJhbSB7UmVzYW1wbGVySW50ZXJmYWNlfSByZXNhbXBsZXIgQ29sb3IgcmVzYW1wbGVyLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGltYWdlLCBkaXN0b3J0aW9uLCByZXNhbXBsZXIpIHtcclxuICAgIC8qKlxyXG4gICAgICogSW1hZ2UgYmVpbmcgZGlzdG9ydGVkLlxyXG4gICAgICogQHR5cGUge0ltYWdlSW50ZXJmYWNlfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXN0b3J0aW9uLlxyXG4gICAgICogQHR5cGUge0Rpc3RvcnRpb25JbnRlcmZhY2V9XHJcbiAgICAgKi9cclxuICAgIHRoaXMubWFwcGVyID0gZGlzdG9ydGlvbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2FtcGxlci5cclxuICAgICAqIEB0eXBlIHtSZXNhbXBsZXJJbnRlcmZhY2V9XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVzYW1wbGVyID0gcmVzYW1wbGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgc2V0IHRvIHRydWUsIHRyeSB0byBjYWxjdWxhdGUgYmVzdCBmaXQgdmlld3BvcnQuXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5iZXN0Rml0ID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkZSBvdXRwdXQgdmlld3BvcnQuXHJcbiAgICAgKiBAdHlwZSB7bGVucy5WaWV3cG9ydHxudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnZpZXdwb3J0ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJ1biBkaXN0b3J0aW9uIGFzeW5jLlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMuYXN5bmMgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3V0cHV0IGltYWdlIHNjYWxpbmcuXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm91dHB1dFNjYWxpbmcgPSAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzdG9ydHMgaW1hZ2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJbWFnZUludGVyZmFjZT58SW1hZ2VJbnRlcmZhY2V9IE5ldyBpbnN0YW5jZSBvZiBJbWFnZUludGVyZmFjZSB3aXRoIGRpc3RvcnRlZCBpbWFnZSBvciBQcm9taXNlXHJcbiAgICogdGhhdCByZXNvbHZlcyBkaXN0b3J0ZWQgSW1hZ2VJbnRlcmZhY2UgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgZGlzdG9ydCgpIHtcclxuICAgIHRoaXMucmVzYW1wbGVyLnNldEltYWdlKHRoaXMuaW1hZ2UpO1xyXG4gICAgdGhpcy5yZXNhbXBsZXIuc2V0TWFwcGVyKHRoaXMubWFwcGVyKTtcclxuXHJcbiAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMucHJlcGFyZVZpZXdwb3J0KCk7XHJcbiAgICBjb25zdCB4MSA9IE1hdGguZmxvb3Iodmlld3BvcnQueDEpO1xyXG4gICAgY29uc3QgeTEgPSBNYXRoLmZsb29yKHZpZXdwb3J0LnkxKTtcclxuICAgIGNvbnN0IHgyID0gTWF0aC5mbG9vcih2aWV3cG9ydC54Mik7XHJcbiAgICBjb25zdCB5MiA9IE1hdGguZmxvb3Iodmlld3BvcnQueTIpO1xyXG5cclxuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuaW1hZ2UuZ2V0Qmxhbmsodmlld3BvcnQpO1xyXG5cclxuICAgIHRoaXMucmVzYW1wbGVyLnNjYWxpbmcgPSAxIC8gdGhpcy5vdXRwdXRTY2FsaW5nO1xyXG5cclxuICAgIGlmIChjYW52YXMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgIHJldHVybiBjYW52YXMudGhlbihjYW52YXMgPT4gdGhpcy5wZXJmb3JtRGlzdG9ydGlvbkFzeW5jKGNhbnZhcywgeDEsIHkxLCB4MiwgeTIpKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5hc3luYykge1xyXG4gICAgICByZXR1cm4gdGhpcy5wZXJmb3JtRGlzdG9ydGlvbkFzeW5jKGNhbnZhcywgeDEsIHkxLCB4MiwgeTIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnBlcmZvcm1EaXN0b3J0aW9uKGNhbnZhcywgeDEsIHkxLCB4MiwgeTIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqIEBwYXJhbSB7SW1hZ2VJbnRlcmZhY2V9IGNhbnZhc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4MVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5MVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4MlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5MlxyXG4gICAqIEByZXR1cm5zIHtJbWFnZUludGVyZmFjZX1cclxuICAgKi9cclxuICBwZXJmb3JtRGlzdG9ydGlvbihjYW52YXMsIHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICBmb3IgKGxldCB5ID0geTE7IHkgPD0geTI7IHkrKykge1xyXG4gICAgICBmb3IgKGxldCB4ID0geDE7IHggPD0geDI7IHgrKykge1xyXG4gICAgICAgIGNhbnZhcy5zZXRQaXhlbENvbG9yKHgsIHksIHRoaXMucmVzYW1wbGVyLmdldFJlc2FtcGxlZENvbG9yKHggKyAwLjUsIHkgKyAwLjUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYW52YXM7XHJcbiAgfVxyXG5cclxuICBwZXJmb3JtRGlzdG9ydGlvbkFzeW5jKC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSh0aGlzLnBlcmZvcm1EaXN0b3J0aW9uKC4uLmFyZ3MpLCAwKSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqIEByZXR1cm5zIHtsZW5zLlZpZXdwb3J0fVxyXG4gICAqL1xyXG4gIHByZXBhcmVWaWV3cG9ydCgpIHtcclxuICAgIGxldCB2aWV3cG9ydDtcclxuXHJcbiAgICBpZiAodGhpcy52aWV3cG9ydCkge1xyXG4gICAgICB2aWV3cG9ydCA9IHRoaXMudmlld3BvcnQuY2xvbmUoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5iZXN0Rml0ICYmIHRoaXMubWFwcGVyLmhhc0Jlc3RGaXRWaWV3cG9ydCkge1xyXG4gICAgICB2aWV3cG9ydCA9IHRoaXMubWFwcGVyLmdldEJlc3RGaXRWaWV3cG9ydCh0aGlzLmltYWdlLnZpZXdwb3J0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZpZXdwb3J0ID0gdGhpcy5pbWFnZS52aWV3cG9ydC5jbG9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZXdwb3J0LnNjYWxlKHRoaXMub3V0cHV0U2NhbGluZyk7XHJcblxyXG4gICAgcmV0dXJuIHZpZXdwb3J0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2ZXJzZVBpeGVsTWFwcGluZzsiLCJpbXBvcnQgTGVhc3RTcXVhcmVzIGZyb20gXCIuLi91dGlsL2dhdXNzLWpvcmRhbi1lbGltaW5hdGlvbi9sZWFzdC1zcXVhcmVzXCI7XHJcbmltcG9ydCBjcmVhdGVzQmVzdEZpdFZpZXdwb3J0RnJvbUFwZXhlcyBmcm9tICcuLi9taXhpbnMvY3JlYXRlcy1iZXN0Rml0LXZpZXdwb3J0LWZyb20tYXBleGVzJztcclxuaW1wb3J0IEludmFsaWRBcmd1bWVudHNMZW5ndGggZnJvbSAnLi4vZXhjZXB0aW9uL2ludmFsaWQtYXJndW1lbnRzLWxlbmd0aCc7XHJcbmltcG9ydCB7cGVyY2VwdGlibGVSZWNpcHJvY2FsfSBmcm9tIFwiLi4vdXRpbC91dGlsXCI7XHJcblxyXG4vKipcclxuICogUHJvamVjdCBjb29yZGluYXRlcyB1c2luZyBwcm9qZWN0aW9uIG1hdHJpeC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbWF0cml4IEFmZmluZSBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtQb2ludH0gTWFwcGVkIGNvb3JkcyBwYWlyLlxyXG4gKi9cclxuZnVuY3Rpb24gbWFwKHgsIHksIG1hdHJpeCkge1xyXG4gIHJldHVybiBbXHJcbiAgICBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzFdICogeSArIG1hdHJpeFsyXSxcclxuICAgIG1hdHJpeFszXSAqIHggKyBtYXRyaXhbNF0gKiB5ICsgbWF0cml4WzVdXHJcbiAgXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFmZmluZSBkaXN0b3J0aW9uLlxyXG4gKlxyXG4gKiBAaW1wbGVtZW50cyB7RGlzdG9ydGlvbkludGVyZmFjZX1cclxuICogQG1lbWJlck9mIGxlbnMuZGlzdG9ydGlvblxyXG4gKiBAbWl4ZXMgbGVucy5taXhpbnMuY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXNcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cuaW1hZ2VtYWdpY2sub3JnL1VzYWdlL2Rpc3RvcnRzLyNhZmZpbmUgQWZmaW5lIGRpc3RvcnRpb24gZGV0YWlscyBhdCBJbWFnZU1hZ2ljayBkb2NzfVxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMjQ0MyBBZmZpbmUgZGlzdG9ydGlvbiBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAqIEB0dXRvcmlhbCAwMy4wMS5hZmZpbmVcclxuICovXHJcbmNsYXNzIEFmZmluZSB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSBtYXRyaXggQWZmaW5lIG1hdHJpeC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcclxuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xyXG4gICAgdGhpcy5mb3J3YXJkTWF0cml4ID0gdGhpcy5jb25zdHJ1Y3Rvci5pbnZlcnRBZmZpbmVNYXRyaXgobWF0cml4KTtcclxuICAgIHRoaXMuaGFzUGFydGlhbERlcml2YXRpdmVzID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFzQ29uc3RhbnRQYXJ0aWFsRGVyaXZhdGl2ZXMgPSB0cnVlO1xyXG4gICAgdGhpcy5oYXNCZXN0Rml0Vmlld3BvcnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhZmZpbmUgZGlzdG9ydGlvbiB1c2luZyBjb250cm9sIHBvaW50cyBhcnJheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IGNvbnRyb2xQb2ludHMgTWFwcGluZ3Mgb2YgY29udHJvbCBwb2ludHMgW3UwLCB2MCwgeDAsIHkwLCAuLi4gLCB1biwgdm4sIHhuLCB5bl0gd2hlcmVcclxuICAgKiAodSosIHYqKSBhcmUgc291cmNlICh4LCB5KSBwb2ludCBhbmQgKHgqLCB5KikgYXJlIGRlc3RpbmF0aW9uICh4LCB5KSBwb2ludFxyXG4gICAqIEByZXR1cm5zIHtsZW5zLmRpc3RvcnRpb24uQWZmaW5lfVxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAwNTAxIEdlbmVyYXRpbmcgYWZmaW5lIGRpc3RvcnRpb24gbWF0cml4IGZyb20gY29udHJvbCBwb2ludHMgYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBmcm9tQ29udHJvbFBvaW50cyhjb250cm9sUG9pbnRzKSB7XHJcbiAgICBpZiAoY29udHJvbFBvaW50cy5sZW5ndGggJSA0ICE9IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudHNMZW5ndGgoYE51bWJlciBvZiBhcmd1bWVudHMgbXVzdCBiZSBtdWx0aXBsZSBvZiA0IGFuZCBhdCBsZWFzdCA0IGFyZ3VtZW50cyAoMSBjb250cm9sIHBvaW50KSBleHBlY3RlZC4gJHtjb250cm9sUG9pbnRzLmxlbmd0aH0gYXJndW1lbnRzIGdpdmVuLmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBoYW5kbGUgc3BlY2lhbCBjYXNlcyBvZiBub3QgZW5vdWdoIGFyZ3VtZW50c1xyXG4gICAgICovXHJcbiAgICBpZiAoY29udHJvbFBvaW50cy5sZW5ndGggPT09IDQpIHtcclxuICAgICAgLy8gT25seSAxIENQIFNldCBHaXZlblxyXG4gICAgICByZXR1cm4gbmV3IEFmZmluZShbXHJcbiAgICAgICAgMSwgMCwgY29udHJvbFBvaW50c1swXSAtIGNvbnRyb2xQb2ludHNbMl0sXHJcbiAgICAgICAgMCwgMSwgY29udHJvbFBvaW50c1sxXSAtIGNvbnRyb2xQb2ludHNbM11cclxuICAgICAgXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAyIG9yIG1vcmUgcG9pbnRzICh1c2FsbHkgMykgZ2l2ZW4uXHJcbiAgICAgIC8vIFNvbHZlIGEgbGVhc3Qgc3F1YXJlcyBzaW11bHRhbmVvdXMgZXF1YXRpb24gZm9yIGNvZWZmaWNpZW50cy5cclxuICAgICAgY29uc3QgbGVhc3RTcXVhcmVzID0gbmV3IExlYXN0U3F1YXJlcygzLCAyKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbFBvaW50cy5sZW5ndGg7IGkgKz0gNCkge1xyXG4gICAgICAgIGxldCBbdSwgdiwgeCwgeV0gPSBjb250cm9sUG9pbnRzLnNsaWNlKGksIGkgKyA0KTtcclxuXHJcbiAgICAgICAgbGVhc3RTcXVhcmVzLmFkZFRlcm1zKFtcclxuICAgICAgICAgIHgsIHksIDFcclxuICAgICAgICBdLCBbdSwgdl0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29udHJvbFBvaW50cy5sZW5ndGggPT09IDgpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIE9ubHkgdHdvIHBhaXJzIHdlcmUgZ2l2ZW4sIGJ1dCB3ZSBuZWVkIDMgdG8gc29sdmUgdGhlIGFmZmluZS5cclxuICAgICAgICAgKiBGYWtlIGV4dHJhIGNvb3JkaW5hdGVzIGJ5IHJvdGF0aW5nIHAxIGFyb3VuZCBwMCBieSA5MCBkZWdyZWVzLlxyXG4gICAgICAgICAqIHgyID0geDAgLSAoeTEteTApICAgeTIgPSB5MCArICh4MS14MClcclxuICAgICAgICAgKi9cclxuICAgICAgICBsZWFzdFNxdWFyZXMuYWRkVGVybXMoXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgIGNvbnRyb2xQb2ludHNbMl0gLSAoY29udHJvbFBvaW50c1s3XSAtIGNvbnRyb2xQb2ludHNbM10pLFxyXG4gICAgICAgICAgICBjb250cm9sUG9pbnRzWzNdICsgKGNvbnRyb2xQb2ludHNbNl0gLSBjb250cm9sUG9pbnRzWzJdKSxcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAgY29udHJvbFBvaW50c1swXSAtIGNvbnRyb2xQb2ludHNbNV0gKyBjb250cm9sUG9pbnRzWzFdLFxyXG4gICAgICAgICAgICBjb250cm9sUG9pbnRzWzFdICsgY29udHJvbFBvaW50c1s0XSAtIGNvbnRyb2xQb2ludHNbMF1cclxuICAgICAgICAgIF1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB2ZWN0b3JzID0gbGVhc3RTcXVhcmVzLnNvbHZlKCkuZ2V0VmVjdG9ycygpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBBZmZpbmUodmVjdG9yc1swXS5jb25jYXQodmVjdG9yc1sxXSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhZmZpbmUgZGlzdG9ydGlvbiB1c2luZyBhZmZpbmUgbWF0cml4LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gbWF0cml4IEFmZmluZSBwcm9qZWN0aW9uIGNvZWZmaWNpZW50czogW3N4LCByeCwgdHgsIHJ5LCBzeSwgdHldXHJcbiAgICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5BZmZpbmV9XHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDA2MDkgR2VuZXJhdGluZyBpbnZlcnRlZCBhZmZpbmUgZGlzdG9ydGlvbiBtYXRyaXggZnJvbSBmb3J3YXJkIGFmZmluZSBtYXRyaXggYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBmcm9tRm9yd2FyZE1hdHJpeChtYXRyaXgpIHtcclxuICAgIC8vIFRPRE86IHRyYXAgdGVzdCBmb3Igc3gqc3ktcngqcnkgPT0gMCAoZGV0ZXJtaW5hbnQgPSAwLCBubyBpbnZlcnNlKVxyXG5cclxuICAgIHJldHVybiBuZXcgQWZmaW5lKHRoaXMuaW52ZXJ0QWZmaW5lTWF0cml4KG1hdHJpeCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBpbnZlcnRlZCBhZmZpbmUgbWF0cml4IGZyb20gYWZmaW5lIG1hdHJpeC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IG1hdHJpeCBBZmZpbmUgbWF0cml4LlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJbXX0gSW52ZXJ0ZWQgYWZmaW5lIG1hdHJpeC5cclxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMDA5NSBJbnZlcnRpbmcgYWZmaW5lIG1hdHJpeCBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAgICovXHJcbiAgc3RhdGljIGludmVydEFmZmluZU1hdHJpeChtYXRyaXgpIHtcclxuICAgIC8qIEZyb20gXCJEaWdpdGFsIEltYWdlIFdhcnBpbmdcIiBieSBHZW9yZ2UgV29sYmVyZywgcGFnZSA1MCAqL1xyXG5cclxuICAgIGNvbnN0IGRldGVybWluYW50ID0gcGVyY2VwdGlibGVSZWNpcHJvY2FsKG1hdHJpeFswXSAqIG1hdHJpeFs0XSAtIG1hdHJpeFsxXSAqIG1hdHJpeFszXSk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgZGV0ZXJtaW5hbnQgKiBtYXRyaXhbNF0sXHJcbiAgICAgIGRldGVybWluYW50ICogKC1tYXRyaXhbMV0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbMV0gKiBtYXRyaXhbNV0gLSBtYXRyaXhbMl0gKiBtYXRyaXhbNF0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqICgtbWF0cml4WzNdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiBtYXRyaXhbMF0sXHJcbiAgICAgIGRldGVybWluYW50ICogKG1hdHJpeFsyXSAqIG1hdHJpeFszXSAtIG1hdHJpeFswXSAqIG1hdHJpeFs1XSlcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHJldmVyc2VNYXAoeCwgeSkge1xyXG4gICAgcmV0dXJuIG1hcCh4LCB5LCB0aGlzLm1hdHJpeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldFZhbGlkaXR5KHgsIHkpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRQYXJ0aWFsRGVyaXZhdGl2ZXMoeCwgeSkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgdGhpcy5tYXRyaXhbMF0sXHJcbiAgICAgIHRoaXMubWF0cml4WzFdLFxyXG4gICAgICB0aGlzLm1hdHJpeFszXSxcclxuICAgICAgdGhpcy5tYXRyaXhbNF1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXBzIHNvdXJjZSBjb29yZHMgaW50byBkZXN0aW5hdGlvbiBjb29yZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geCBYLWNvb3JkaW5hdGUgb2Ygc291cmNlIGltYWdlIHBvaW50LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktY29vcmRpbmF0ZSBvZiBzb3VyY2UgaW1hZ2UgcG9pbnQuXHJcbiAgICogQHJldHVybnMge1BvaW50fSBGb3J3YXJkIG1hcHBlZCBkZXN0aW5hdGlvbiBpbWFnZSBjb29yZHMuXHJcbiAgICovXHJcbiAgZm9yd2FyZE1hcCh4LCB5KSB7XHJcbiAgICByZXR1cm4gbWFwKHgsIHksIHRoaXMuZm9yd2FyZE1hdHJpeCk7XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKEFmZmluZS5wcm90b3R5cGUsIGNyZWF0ZXNCZXN0Rml0Vmlld3BvcnRGcm9tQXBleGVzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFmZmluZTsiLCJpbXBvcnQge0VQU0lMT04sIE1fUEkyLCBNXzJQSX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge0ludmFsaWRBcmd1bWVudH0gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xyXG5pbXBvcnQge2RlZzJyYWR9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuLi92aWV3cG9ydCc7XHJcblxyXG4vKipcclxuICogQHN1bW1hcnkgQXJjIGRpc3RvcnRpb24uXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvbiBOb3RlIHRoZSBjb2VmZmljaWVudHMgdXNlIGEgY2VudGVyIGFuZ2xlLCBzbyBhc3ltcHRvdGljIGpvaW4gaXNcclxuICogZnVydGhlc3QgZnJvbSBib3RoIHNpZGVzIG9mIHRoZSBzb3VyY2UgaW1hZ2UuIFRoaXMgYWxzbyBtZWFucyB0aGF0XHJcbiAqIGZvciBhcmMgYW5nbGVzIGdyZWF0ZXIgdGhhbiAzNjAgdGhlIHNpZGVzIG9mIHRoZSBpbWFnZSB3aWxsIGJlXHJcbiAqIHRyaW1tZWQgZXF1YWxseS5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMuZGlzdG9ydGlvblxyXG4gKiBAaW1wbGVtZW50cyBEaXN0b3J0aW9uSW50ZXJmYWNlXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9kaXN0b3J0cy8jYXJjIEFyYyBkaXN0b3J0aW9uIGRldGFpbHN9IGF0IEltYWdlTWFnaWNrIGRvY3MuXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAyNTYxIEFyYyBkaXN0b3J0aW9ufSBhdCBJbWFnZU1hZ2lja1xyXG4gKiBzb3VyY2UuXHJcbiAqIEB0dXRvcmlhbCAwMy4wMy5hcmNcclxuICovXHJcbmNsYXNzIEFyYyB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2xlbnMuVmlld3BvcnR9IHZpZXdwb3J0XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGMwIEFuZ2xlIGZvciBjZW50ZXIgb2Ygc291cmNlIGltYWdlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjMSBBbmdsZSBzY2FsZSBmb3IgbWFwcGluZyB0byBzb3VyY2UgaW1hZ2UuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGMyIFJhZGl1cyBmb3IgdG9wIG9mIHNvdXJjZSBpbWFnZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gYzMgUmFkaXVzIHNjYWxlIGZvciBtYXBwaW5nIHNvdXJjZSBpbWFnZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gYzQgQ2VudGVyIGxpbmUgb2YgYXJjIHdpdGhpbiBzb3VyY2UgaW1hZ2UuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iodmlld3BvcnQsIGMwLCBjMSwgYzIsIGMzLCBjNCkge1xyXG4gICAgdGhpcy52aWV3cG9ydCA9IHZpZXdwb3J0O1xyXG4gICAgdGhpcy5jMCA9IGMwO1xyXG4gICAgdGhpcy5jMSA9IGMxO1xyXG4gICAgdGhpcy5jMiA9IGMyO1xyXG4gICAgdGhpcy5jMyA9IGMzO1xyXG4gICAgdGhpcy5jNCA9IGM0O1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBhbmdsZV90b193aWR0aCBhbmQgcmFkaXVzX3RvX2hlaWdodFxyXG4gICAgICogdG8gYXBwcm9wcmlhdGUgc2NhbGluZyBmYWN0b3JzLCB0byBhbGxvdyBmYXN0ZXIgcHJvY2Vzc2luZ1xyXG4gICAgICogaW4gdGhlIG1hcHBpbmcgZnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYW5nbGVUb1dpZHRoID0gTV8yUEkgKiB0aGlzLnZpZXdwb3J0LndpZHRoKCkgLyB0aGlzLmMxO1xyXG4gICAgdGhpcy5yYWRpdXNUb0hlaWdodCA9IHRoaXMudmlld3BvcnQuaGVpZ2h0KCkgLyB0aGlzLmMzO1xyXG5cclxuICAgIHRoaXMuaGFzUGFydGlhbERlcml2YXRpdmVzID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFzQ29uc3RhbnRQYXJ0aWFsRGVyaXZhdGl2ZXMgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFzQmVzdEZpdFZpZXdwb3J0ID0gdHJ1ZTtcclxuICAgIHRoaXMuZm9yY2VCZXN0Rml0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdW1tYXJ5IENyZWF0ZXMgYXJjIGRpc3RvcnRpb24gY2xhc3MgZnJvbSBhcmd1bWVudHMuXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb24gQXJndW1lbnRzOiAgW2FuZ2xlLCByb3RhdGlvbiwgb3V0ZXJfcmFkaXVzLCBpbm5lcl9yYWRpdXNdXHJcbiAgICogQWxsIGJ1dCBmaXJzdCBhcmd1bWVudCBhcmUgb3B0aW9uYWwuXHJcbiAgICpcclxuICAgKiBCeSBkZWZhdWx0LCBpZiB0aGUgcmFkaWkgYXJndW1lbnRzIGFyZSBub3IgcHJvdmlkZWQgdGhlIGltYWdlIHJhZGl1c1xyXG4gICAqIGlzIGNhbGN1bGF0ZWQgc28gdGhlIGhvcml6b250YWwgY2VudGVyLWxpbmUgaXMgZml0cyB0aGUgZ2l2ZW4gYXJjXHJcbiAgICogd2l0aG91dCBzY2FsaW5nLlxyXG4gICAqXHJcbiAgICogVGhlIG91dHB1dCBpbWFnZSBzaXplIGlzIEFMV0FZUyBhZGp1c3RlZCB0byBjb250YWluIHRoZSB3aG9sZSBpbWFnZSxcclxuICAgKiBhbmQgYW4gb2Zmc2V0IGlzIGdpdmVuIHRvIHBvc2l0aW9uIGltYWdlIHJlbGF0aXZlIHRvIHRoZSAwLDAgcG9pbnQgb2ZcclxuICAgKiB0aGUgb3JpZ2luLCBhbGxvd2luZyB1c2VycyB0byB1c2UgcmVsYXRpdmUgcG9zaXRpb25pbmcgb250byBsYXJnZXJcclxuICAgKiBiYWNrZ3JvdW5kLlxyXG4gICAqXHJcbiAgICogVGhlIGFyZ3VtZW50cyBhcmUgY29udmVydGVkIHRvIGRpc3RvcnRpb24gY29lZmZpY2llbnRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtsZW5zLlZpZXdwb3J0fSB2aWV3cG9ydFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IGFyZ3MgQXJndW1lbnRzOlxyXG4gICAqICogMDogKiphbmdsZSoqIC0gVGhlIGFuZ2xlIG92ZXIgd2hpY2ggdG8gYXJjIHRoZSBpbWFnZSBzaWRlLXRvLXNpZGUuXHJcbiAgICogKiAxOiAqKnJvdGF0aW9uKiogLSBBbmdsZSB0byByb3RhdGUgaW1hZ2UgZnJvbSB2ZXJ0aWNhbCBjZW50ZXIuXHJcbiAgICogKiAyOiAqKm91dGVyX3JhZGl1cyoqIC0gU2V0IHRvcCBlZGdlIG9mIHNvdXJjZSBpbWFnZSBhdCB0aGlzIHJhZGl1cy5cclxuICAgKiAqIDM6ICoqaW5uZXJfcmFkaXVzKiogLSBTZXQgYm90dG9tIGVkZ2UgdG8gdGhpcyByYWRpdXMgKHJhZGlhbCBzY2FsaW5nKS5cclxuICAgKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLkFyY31cclxuICAgKiBAdGhyb3dzIHtsZW5zLmV4Y2VwdGlvbi5JbnZhbGlkQXJndW1lbnR9IFRocm93biB3aGVuIGZpcnN0IChhbmdsZSkgb3IgdGhpcmQgKG91dGVyIHJhZGl1cykgYXJndW1lbnRzIGFyZSB0b28gc21hbGxcclxuICAgKlxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAxMDk1IEdlbmVyYXRpbmcgY29lZmZpY2llbnRzfSBmb3IgYXJjXHJcbiAgICogZGlzdG9ydGlvbiBhdCBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAgICovXHJcbiAgc3RhdGljIGZyb21Bcmd1bWVudHModmlld3BvcnQsIGFyZ3MpIHtcclxuICAgIGlmIChhcmdzLmxlbmd0aCA+PSAxICYmIGFyZ3NbMF0gPCBFUFNJTE9OKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnQoJ0FuZ2xlIHRvbyBzbWFsbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhcmdzLmxlbmd0aCA+PSAzICYmIGFyZ3NbMl0gPCBFUFNJTE9OKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnQoJ091dGVyIHJhZGl1cyB0b28gc21hbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYzAsIGMxLCBjMiwgYzMsIGM0O1xyXG5cclxuICAgIGMwID0gLU1fUEkyOyAvLyAtOTAsIHBsYWNlIGF0IHRvcCFcclxuXHJcbiAgICBpZiAoYXJncy5sZW5ndGggPj0gMSkge1xyXG4gICAgICBjMSA9IGRlZzJyYWQoYXJnc1swXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjMSA9IE1fUEkyOyAvLyB6ZXJvIGFyZ3VtZW50cyAtIGNlbnRlciBpcyBhdCB0b3BcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXJncy5sZW5ndGggPj0gMikge1xyXG4gICAgICBjMCArPSBkZWcycmFkKGFyZ3NbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGMwIC89IE1fMlBJOyAvLyBub3JtYWxpemUgcmFkaWFuc1xyXG4gICAgYzAgLT0gTWF0aC5yb3VuZChjMCk7XHJcbiAgICBjMCAqPSBNXzJQSTsgLy8gZGUtbm9ybWFsaXplIGJhY2sgdG8gcmFkaWFuc1xyXG5cclxuICAgIGMzID0gdmlld3BvcnQuaGVpZ2h0KCkgLSAxO1xyXG4gICAgYzIgPSB2aWV3cG9ydC53aWR0aCgpIC8gYzEgKyBjMyAvIDI7XHJcblxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID49IDMpIHtcclxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID49IDQpIHtcclxuICAgICAgICBjMyA9IGFyZ3NbMl0gLSBhcmdzWzNdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGMzICo9IGFyZ3NbMl0gLyBjMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYzIgPSBhcmdzWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIGM0ID0gKHZpZXdwb3J0LndpZHRoKCkgLSAxKSAvIDI7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBBcmModmlld3BvcnQsIGMwLCBjMSwgYzIsIGMzLCBjNCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHJldmVyc2VNYXAoeCwgeSkge1xyXG4gICAgbGV0IFt1LCB2XSA9IHRoaXMuZ2V0VVYoeCwgeSk7XHJcblxyXG4gICAgLy8gbm93IHNjYWxlIHRoZSBhbmdsZSBhbmQgcmFkaXVzIGZvciBzb3VyY2UgaW1hZ2UgbG9va3VwIHBvaW50XHJcbiAgICB1ID0gdSAqIHRoaXMuYW5nbGVUb1dpZHRoICsgdGhpcy5jNCArIHRoaXMudmlld3BvcnQueDEgKyAwLjU7XHJcbiAgICB2ID0gKHRoaXMuYzIgLSB2KSAqIHRoaXMucmFkaXVzVG9IZWlnaHQgKyB0aGlzLnZpZXdwb3J0LnkxO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2codSwgdiwgeCwgeSk7XHJcblxyXG4gICAgcmV0dXJuIFt1LCB2XTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0VmFsaWRpdHkoeCwgeSkge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldFBhcnRpYWxEZXJpdmF0aXZlcyh4LCB5KSB7XHJcbiAgICBsZXQgW3UsIHZdID0gdGhpcy5nZXRVVih4LCB5KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogQXJjIERpc3RvcnRpb24gUGFydGlhbCBTY2FsaW5nIFZlY3RvcnNcclxuICAgICAqIEFyZSBkZXJpdmVkIGJ5IG1hcHBpbmcgdGhlIHBlcnBlbmRpY3VsYXIgdW5pdCB2ZWN0b3JzXHJcbiAgICAgKiBkUiAgYW5kICBkQSpSKjJQSSAgcmF0aGVyIHRoYW4gdHJ5aW5nIHRvIG1hcCBkeCBhbmQgZHlcclxuICAgICAqIFRoZSByZXN1bHRzIGlzIGEgdmVyeSBzaW1wbGUgb3J0aG9nb25hbCBhbGlnbmVkIGVsbGlwc2UuXHJcbiAgICAgKi9cclxuICAgIGlmICh2ID4gRVBTSUxPTikge1xyXG4gICAgICByZXR1cm4gW3RoaXMuYW5nbGVUb1dpZHRoIC8gKE1fMlBJICogdiksIDAsIDAsIHRoaXMucmFkaXVzVG9IZWlnaHRdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFt0aGlzLnZpZXdwb3J0LndpZHRoKCkgKiAyLCAwLCAwLCB0aGlzLnJhZGl1c1RvSGVpZ2h0XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgY2FsY3VsYXRlZCBiZXN0IGZpdCB2aWV3cG9ydCBmb3IgaW1hZ2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2xlbnMuVmlld3BvcnR9IHZpZXdwb3J0XHJcbiAgICogQHJldHVybnMge2xlbnMuVmlld3BvcnR9XHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDE4MzQgR2VuZXJhdGluZyBiZXN0IGZpdCB2aWV3cG9ydH1cclxuICAgKiBmb3IgYXJjIGRpc3RvcnRpb24gYXQgSW1hZ2VNYWdpY2sgc291cmNlLlxyXG4gICAqL1xyXG4gIGdldEJlc3RGaXRWaWV3cG9ydCh2aWV3cG9ydCkge1xyXG4gICAgLy8gRm9yd2FyZCBNYXAgQ29ybmVyc1xyXG4gICAgbGV0IGEgPSB0aGlzLmMwIC0gdGhpcy5jMSAvIDIsXHJcbiAgICAgIGNhID0gTWF0aC5jb3MoYSksXHJcbiAgICAgIHNhID0gTWF0aC5zaW4oYSksXHJcbiAgICAgIHggPSB0aGlzLmMyICogY2EsXHJcbiAgICAgIHkgPSB0aGlzLmMyICogc2EsXHJcbiAgICAgIHZwID0gbmV3IFZpZXdwb3J0KHgsIHksIHgsIHkpO1xyXG5cclxuICAgIHggPSAodGhpcy5jMiAtIHRoaXMuYzMpICogY2E7XHJcbiAgICB5ID0gKHRoaXMuYzIgLSB0aGlzLmMzKSAqIHNhO1xyXG4gICAgdnAuZXhwYW5kKHgsIHkpO1xyXG5cclxuICAgIGEgPSB0aGlzLmMwICsgdGhpcy5jMSAvIDI7XHJcbiAgICBjYSA9IE1hdGguY29zKGEpO1xyXG4gICAgc2EgPSBNYXRoLnNpbihhKTtcclxuICAgIHggPSB0aGlzLmMyICogY2E7XHJcbiAgICB5ID0gdGhpcy5jMiAqIHNhO1xyXG4gICAgdnAuZXhwYW5kKHgsIHkpO1xyXG5cclxuICAgIHggPSAodGhpcy5jMiAtIHRoaXMuYzMpICogY2E7XHJcbiAgICB5ID0gKHRoaXMuYzIgLSB0aGlzLmMzKSAqIHNhO1xyXG4gICAgdnAuZXhwYW5kKHgsIHkpO1xyXG5cclxuICAgIC8vIE9ydGhvZ29uYWwgcG9pbnRzIGFsb25nIHRvcCBvZiBhcmNcclxuICAgIGZvciAoXHJcbiAgICAgIGEgPSBNYXRoLmNlaWwoKHRoaXMuYzAgLSB0aGlzLmMxIC8gMikgLyBNX1BJMikgKiBNX1BJMjtcclxuICAgICAgYSA8IHRoaXMuYzAgKyB0aGlzLmMxIC8gMjtcclxuICAgICAgYSArPSBNX1BJMlxyXG4gICAgKSB7XHJcbiAgICAgIGNhID0gTWF0aC5jb3MoYSk7XHJcbiAgICAgIHNhID0gTWF0aC5zaW4oYSk7XHJcbiAgICAgIHggPSB0aGlzLmMyICogY2E7XHJcbiAgICAgIHkgPSB0aGlzLmMyICogc2E7XHJcbiAgICAgIHZwLmV4cGFuZCh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICB2cC5maXhCb3VuZHMoKTtcclxuXHJcbiAgICByZXR1cm4gdnA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICAgKiBAcmV0dXJucyB7UG9pbnR9XHJcbiAgICovXHJcbiAgZ2V0VVYoeCwgeSkge1xyXG4gICAgbGV0IHUsIHY7XHJcblxyXG4gICAgLy8gd2hhdCBpcyB0aGUgYW5nbGUgYW5kIHJhZGl1cyBpbiB0aGUgZGVzdGluYXRpb24gaW1hZ2VcclxuICAgIHUgPSAoTWF0aC5hdGFuMih5LCB4KSAtIHRoaXMuYzApIC8gTV8yUEk7XHJcbiAgICB1IC09IE1hdGgucm91bmQodSk7XHJcbiAgICB2ID0gTWF0aC5oeXBvdCh4LCB5KTtcclxuXHJcbiAgICByZXR1cm4gW3UsIHZdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJjOyIsIi8qKlxyXG4gKiBEaXN0b3J0aW9uIG5hbWVzcGFjZVxyXG4gKlxyXG4gKiBAbmFtZXNwYWNlIGxlbnMuZGlzdG9ydGlvblxyXG4gKi9cclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBBZmZpbmV9IGZyb20gJy4vYWZmaW5lJztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQZXJzcGVjdGl2ZX0gZnJvbSAnLi9wZXJzcGVjdGl2ZSc7XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgQXJjfSBmcm9tICcuL2FyYyc7IiwiaW1wb3J0IExlYXN0U3F1YXJlcyBmcm9tICcuLi91dGlsL2dhdXNzLWpvcmRhbi1lbGltaW5hdGlvbi9sZWFzdC1zcXVhcmVzJztcclxuaW1wb3J0IGNyZWF0ZXNCZXN0Rml0Vmlld3BvcnRGcm9tQXBleGVzIGZyb20gJy4uL21peGlucy9jcmVhdGVzLWJlc3RGaXQtdmlld3BvcnQtZnJvbS1hcGV4ZXMnO1xyXG5pbXBvcnQgSW52YWxpZEFyZ3VtZW50c0xlbmd0aCBmcm9tICcuLi9leGNlcHRpb24vaW52YWxpZC1hcmd1bWVudHMtbGVuZ3RoJztcclxuaW1wb3J0IHtwZXJjZXB0aWJsZVJlY2lwcm9jYWwsIGlzQ29sbGluZWFyfSBmcm9tIFwiLi4vdXRpbC91dGlsXCI7XHJcblxyXG4vKipcclxuICogUHJvamVjdCBjb29yZGluYXRlcyB1c2luZyBwcm9qZWN0aW9uIG1hdHJpeFxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0geFxyXG4gKiBAcGFyYW0ge251bWJlcn0geVxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBtYXRyaXggUGVyc3BlY3RpdmUgbWF0cml4LlxyXG4gKiBAcmV0dXJucyB7UG9pbnR9IE1hcHBlZCBjb29yZHMgcGFpci5cclxuICogQHR1dG9yaWFsIDAzLjAyLnBlcnNwZWN0aXZlXHJcbiAqL1xyXG5mdW5jdGlvbiBtYXAoeCwgeSwgbWF0cml4KSB7XHJcbiAgbGV0IHAgPSBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzFdICogeSArIG1hdHJpeFsyXSxcclxuICAgIHEgPSBtYXRyaXhbM10gKiB4ICsgbWF0cml4WzRdICogeSArIG1hdHJpeFs1XSxcclxuICAgIHIgPSBtYXRyaXhbNl0gKiB4ICsgbWF0cml4WzddICogeSArIDE7XHJcblxyXG4gIHJldHVybiBbcCAvIHIsIHEgLyByXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBzdW1tYXJ5IFBlcnNwZWN0aXZlIERpc3RvcnRpb24gKGEgcmF0aW8gb2YgYWZmaW5lIGRpc3RvcnRpb25zKS5cclxuICpcclxuICogQGRlc2NyaXB0aW9uIDxwcmU+XHJcbiAqXHJcbiAqICAgICBwKHgseSkgICAgYzAqeCArIGMxKnkgKyBjMlxyXG4gKiB1ID0gLS0tLS0tID0gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICAgICByKHgseSkgICAgYzYqeCArIGM3KnkgKyAxXHJcbiAqXHJcbiAqICAgICBxKHgseSkgICAgYzMqeCArIGM0KnkgKyBjNVxyXG4gKiB2ID0gLS0tLS0tID0gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICAgICAgcih4LHkpICAgIGM2KnggKyBjNyp5ICsgMVxyXG4gKlxyXG4gKiBkZW5vbWluYXRvciA9IFNpZ24gb2YgJ3InLCBvciB0aGUgZGVub21pbmF0b3IgYWZmaW5lLCBmb3IgdGhlIGFjdHVhbCBpbWFnZS5cclxuICogVGhpcyBkZXRlcm1pbmVzIHdoYXQgcGFydCBvZiB0aGUgZGlzdG9ydGVkIGltYWdlIGlzICdncm91bmQnXHJcbiAqIHNpZGUgb2YgdGhlIGhvcml6b24sIHRoZSBvdGhlciBwYXJ0IGlzICdza3knIG9yIGludmFsaWQuXHJcbiAqIFZhbGlkIHZhbHVlcyBhcmUgICsxLjAgIG9yICAtMS4wICBvbmx5LlxyXG4gKiA8L3ByZT5cclxuICpcclxuICogQGltcGxlbWVudHMge0Rpc3RvcnRpb25JbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLmRpc3RvcnRpb25cclxuICogQG1peGVzIGxlbnMubWl4aW5zLmNyZWF0ZXNCZXN0Rml0Vmlld3BvcnRGcm9tQXBleGVzXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9kaXN0b3J0cy8jcGVyc3BlY3RpdmUgUGVyc3BlY3RpdmUgZGlzdG9ydGlvbiBkZXRhaWxzIGF0IEltYWdlTWFnaWNrIGRvY3N9XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAyNDUwIFBlcnNwZWN0aXZlIGRpc3RvcnRpb24gYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gKi9cclxuY2xhc3MgUGVyc3BlY3RpdmUge1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IHJldmVyc2VNYXRyaXggUGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggZm9yIHJldmVyc2UgcGl4ZWwgbWFwcGluZy5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVub21pbmF0b3IgRGVub21pbmF0b3IgZm9yIG1hcHBpbmcgdmFsaWRpdHkgY2FsY3VsYXRpb24uXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocmV2ZXJzZU1hdHJpeCwgZGVub21pbmF0b3IpIHtcclxuICAgIHRoaXMubWF0cml4ID0gcmV2ZXJzZU1hdHJpeDtcclxuICAgIHRoaXMuZGVub21pbmF0b3IgPSBkZW5vbWluYXRvcjtcclxuICAgIHRoaXMuZm9yd2FyZE1hdHJpeCA9IHRoaXMuY29uc3RydWN0b3IuaW52ZXJ0UGVyc3BlY3RpdmVNYXRyaXgocmV2ZXJzZU1hdHJpeCk7XHJcbiAgICB0aGlzLmhhc1BhcnRpYWxEZXJpdmF0aXZlcyA9IHRydWU7XHJcbiAgICB0aGlzLmhhc0NvbnN0YW50UGFydGlhbERlcml2YXRpdmVzID0gZmFsc2U7XHJcbiAgICB0aGlzLmhhc0Jlc3RGaXRWaWV3cG9ydCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIHBlcnNwZWN0aXZlIGRpc3RvcnRpb24gdXNpbmcgY29udHJvbCBwb2ludHMgYXJyYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSBjb250cm9sUG9pbnRzIE1hcHBpbmdzIG9mIGNvbnRyb2wgcG9pbnRzIFt1MCwgdjAsIHgwLCB5MCwgLi4uICwgdW4sIHZuLCB4biwgeW5dIHdoZXJlXHJcbiAgICogKHUqLCB2KikgYXJlIHNvdXJjZSAoeCwgeSkgcG9pbnQgYW5kICh4KiwgeSopIGFyZSBkZXN0aW5hdGlvbiAoeCwgeSkgcG9pbnQuXHJcbiAgICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5QZXJzcGVjdGl2ZX0gTmV3IGluc3RhbmNlLlxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAwNzQ1IEdlbmVyYXRpbmcgcGVyc3BlY3RpdmUgZGlzdG9ydGlvbiBtYXRyaXggZnJvbSBjb250cm9sIHBvaW50cyBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAgICovXHJcbiAgc3RhdGljIGZyb21Db250cm9sUG9pbnRzKGNvbnRyb2xQb2ludHMpIHtcclxuICAgIGlmIChjb250cm9sUG9pbnRzLmxlbmd0aCA8IDE2IHx8IGNvbnRyb2xQb2ludHMubGVuZ3RoICUgNCAhPSAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRzTGVuZ3RoKGBOdW1iZXIgb2YgYXJndW1lbnRzIG11c3QgYmUgbXVsdGlwbGUgb2YgNCBhbmQgYXQgbGVhc3QgMTYgYXJndW1lbnRzICg0IGNvbnRyb2wgcG9pbnRzKSBleHBlY3RlZC4gJHtjb250cm9sUG9pbnRzLmxlbmd0aH0gYXJndW1lbnRzIGdpdmVuLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxlYXN0U3F1YXJlcyA9IG5ldyBMZWFzdFNxdWFyZXMoOCwgMSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9sUG9pbnRzLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgIGxldCBbdSwgdiwgeCwgeV0gPSBjb250cm9sUG9pbnRzLnNsaWNlKGksIGkgKyA0KTtcclxuXHJcbiAgICAgIGxlYXN0U3F1YXJlcy5hZGRUZXJtcyhbXHJcbiAgICAgICAgeCwgeSwgMSxcclxuICAgICAgICAwLCAwLCAwLFxyXG4gICAgICAgIC14ICogdSwgLXkgKiB1XHJcbiAgICAgIF0sIFt1XSlcclxuICAgICAgICAuYWRkVGVybXMoW1xyXG4gICAgICAgICAgMCwgMCwgMCxcclxuICAgICAgICAgIHgsIHksIDEsXHJcbiAgICAgICAgICAteCAqIHYsIC15ICogdlxyXG4gICAgICAgIF0sIFt2XSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWF0cml4ID0gbGVhc3RTcXVhcmVzLnNvbHZlKCkuZ2V0VmVjdG9ycygpWzBdO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBDYWxjdWxhdGUgZGVub21pbmF0b3IhIFRoZSBncm91bmQtc2t5IGRldGVybWluYXRpb24uXHJcbiAgICAgKiBXaGF0IGlzIHNpZ24gb2YgdGhlICdncm91bmQnIGluIHIoKSBkZW5vbWluYXRvciBhZmZpbmUgZnVuY3Rpb24/XHJcbiAgICAgKiBKdXN0IHVzZSBhbnkgdmFsaWQgaW1hZ2UgY29vcmRpbmF0ZSAoZmlyc3QgY29udHJvbCBwb2ludCkgaW5cclxuICAgICAqIGRlc3RpbmF0aW9uIGZvciBkZXRlcm1pbmF0aW9uIG9mIHdoYXQgcGFydCBvZiB2aWV3IGlzICdncm91bmQnLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBkZW5vbWluYXRvciA9IG1hdHJpeFs2XSAqIGNvbnRyb2xQb2ludHNbMl0gKyBtYXRyaXhbN10gKiBjb250cm9sUG9pbnRzWzNdICsgMSA8IDAgPyAtMSA6IDE7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQZXJzcGVjdGl2ZShtYXRyaXgsIGRlbm9taW5hdG9yKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgcGVyc3BlY3RpdmUgZGlzdG9ydGlvbiB1c2luZyBwZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSBtYXRyaXggUGVyc3BlY3RpdmUgbWF0cml4LlxyXG4gICAqIEByZXR1cm5zIHtsZW5zLmRpc3RvcnRpb24uUGVyc3BlY3RpdmV9XHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDA4NTMgR2VuZXJhdGluZyBpbnZlcnRlZCBwZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIG1hdHJpeCBmcm9tIGZvcndhcmQgcGVyc3BlY3RpdmUgbWF0cml4IGF0IEltYWdlTWFnaWNrIGRvY3N9XHJcbiAgICovXHJcbiAgc3RhdGljIGZyb21Gb3J3YXJkTWF0cml4KG1hdHJpeCkge1xyXG4gICAgLy8gVE9ETzogdHJhcCB0ZXN0ICBjMCpjNC1jMypjMSA9PSAwICAoZGV0ZXJtaW5hbnQgPSAwLCBubyBpbnZlcnNlKVxyXG4gICAgY29uc3QgaW52ZXJzZSA9IHRoaXMuaW52ZXJ0UGVyc3BlY3RpdmVNYXRyaXgobWF0cml4KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogQ2FsY3VsYXRlIGRlbm9taW5hdG9yISBUaGUgZ3JvdW5kLXNreSBkZXRlcm1pbmF0aW9uLlxyXG4gICAgICogV2hhdCBpcyBzaWduIG9mIHRoZSAnZ3JvdW5kJyBpbiByKCkgZGVub21pbmF0b3IgYWZmaW5lIGZ1bmN0aW9uP1xyXG4gICAgICogSnVzdCB1c2UgYW55IHZhbGlkIGltYWdlIGNvb3JkaW5hdGUgaW4gZGVzdGluYXRpb24gZm9yIGRldGVybWluYXRpb24uXHJcbiAgICAgKiBGb3IgYSBmb3J3YXJkIG1hcHBlZCBwZXJzcGVjdGl2ZSB0aGUgaW1hZ2VzIDAsMCBjb29yZCB3aWxsIG1hcCB0b1xyXG4gICAgICogYzIsYzUgaW4gdGhlIGRpc3RvcnRlZCBpbWFnZSwgc28gc2V0IHRoZSBzaWduIG9mIGRlbm9taW5hdG9yIG9mIHRoYXQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGRlbm9taW5hdG9yID0gaW52ZXJzZVs2XSAqIG1hdHJpeFsyXSArIGludmVyc2VbN10gKiBtYXRyaXhbNV0gKyAxIDwgMCA/IC0xIDogMTtcclxuICAgIHJldHVybiBuZXcgUGVyc3BlY3RpdmUoaW52ZXJzZSwgZGVub21pbmF0b3IpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBpbnZlcnRlZCBwZXJzcGVjdGl2ZSBtYXRyaXggZnJvbSBwZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSBtYXRyaXggUGVyc3BlY3RpdmUgbWF0cml4LlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJbXX0gSW52ZXJ0ZWQgcGVyc3BlY3RpdmUgbWF0cml4LlxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAwMTA5IEludmVydGluZyBwZXJzcGVjdGl2ZSBtYXRyaXggYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBpbnZlcnRQZXJzcGVjdGl2ZU1hdHJpeChtYXRyaXgpIHtcclxuICAgIGNvbnN0IGRldGVybWluYW50ID0gcGVyY2VwdGlibGVSZWNpcHJvY2FsKG1hdHJpeFswXSAqIG1hdHJpeFs0XSAtIG1hdHJpeFszXSAqIG1hdHJpeFsxXSk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzRdIC0gbWF0cml4WzddICogbWF0cml4WzVdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzddICogbWF0cml4WzJdIC0gbWF0cml4WzFdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzFdICogbWF0cml4WzVdIC0gbWF0cml4WzRdICogbWF0cml4WzJdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzZdICogbWF0cml4WzVdIC0gbWF0cml4WzNdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzBdIC0gbWF0cml4WzZdICogbWF0cml4WzJdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzNdICogbWF0cml4WzJdIC0gbWF0cml4WzBdICogbWF0cml4WzVdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzNdICogbWF0cml4WzddIC0gbWF0cml4WzZdICogbWF0cml4WzRdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzZdICogbWF0cml4WzFdIC0gbWF0cml4WzBdICogbWF0cml4WzddKVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcmV2ZXJzZU1hcCh4LCB5KSB7XHJcbiAgICByZXR1cm4gbWFwKHgsIHksIHRoaXMubWF0cml4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0VmFsaWRpdHkoeCwgeSwgc2NhbGluZykge1xyXG4gICAgY29uc3QgciA9IHRoaXMubWF0cml4WzZdICogeCArIHRoaXMubWF0cml4WzddICogeSArIDE7XHJcbiAgICBsZXQgdmFsaWRpdHkgPSByICogdGhpcy5kZW5vbWluYXRvciA8IDAgPyAwIDogMTtcclxuICAgIGNvbnN0IGFic1IgPSBNYXRoLmFicyhyKSAqIDI7XHJcbiAgICBjb25zdCBhYnNDNiA9IE1hdGguYWJzKHRoaXMubWF0cml4WzZdKTtcclxuICAgIGNvbnN0IGFic0M3ID0gTWF0aC5hYnModGhpcy5tYXRyaXhbN10pO1xyXG5cclxuICAgIGlmIChhYnNDNiA+IGFic0M3KSB7XHJcbiAgICAgIGlmIChhYnNSIDwgYWJzQzYpIHtcclxuICAgICAgICB2YWxpZGl0eSA9IDAuNSAtIHRoaXMuZGVub21pbmF0b3IgKiByIC8gKHRoaXMubWF0cml4WzZdICogc2NhbGluZyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoYWJzUiA8IGFic0M3KSB7XHJcbiAgICAgIHZhbGlkaXR5ID0gMC41IC0gdGhpcy5kZW5vbWluYXRvciAqIHIgLyAodGhpcy5tYXRyaXhbN10gKiBzY2FsaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWRpdHk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldFBhcnRpYWxEZXJpdmF0aXZlcyh4LCB5KSB7XHJcbiAgICBjb25zdCBwID0gdGhpcy5tYXRyaXhbMF0gKiB4ICsgdGhpcy5tYXRyaXhbMV0gKiB5ICsgdGhpcy5tYXRyaXhbMl0sXHJcbiAgICAgIHEgPSB0aGlzLm1hdHJpeFszXSAqIHggKyB0aGlzLm1hdHJpeFs0XSAqIHkgKyB0aGlzLm1hdHJpeFs1XSxcclxuICAgICAgciA9IHRoaXMubWF0cml4WzZdICogeCArIHRoaXMubWF0cml4WzddICogeSArIDEsXHJcbiAgICAgIHNjYWxlID0gTWF0aC5wb3coMSAvIHIsIDIpO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIChyICogdGhpcy5tYXRyaXhbMF0gLSBwICogdGhpcy5tYXRyaXhbNl0pICogc2NhbGUsIC8vIGRVeFxyXG4gICAgICAociAqIHRoaXMubWF0cml4WzFdIC0gcCAqIHRoaXMubWF0cml4WzddKSAqIHNjYWxlLCAvLyBkVXlcclxuICAgICAgKHIgKiB0aGlzLm1hdHJpeFszXSAtIHEgKiB0aGlzLm1hdHJpeFs2XSkgKiBzY2FsZSwgLy8gZFZ4XHJcbiAgICAgIChyICogdGhpcy5tYXRyaXhbNF0gLSBxICogdGhpcy5tYXRyaXhbN10pICogc2NhbGUgLy9kVnlcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXBzIHNvdXJjZSBjb29yZHMgaW50byBkZXN0aW5hdGlvbiBjb29yZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdSBYLWNvb3JkaW5hdGUgb2Ygc291cmNlIGltYWdlIHBvaW50LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2IFktY29vcmRpbmF0ZSBvZiBzb3VyY2UgaW1hZ2UgcG9pbnQuXHJcbiAgICogQHJldHVybnMge1BvaW50fSBGb3J3YXJkIG1hcHBlZCBkZXN0aW5hdGlvbiBpbWFnZSBjb29yZHMuXHJcbiAgICovXHJcbiAgZm9yd2FyZE1hcCh1LCB2KSB7XHJcbiAgICByZXR1cm4gbWFwKHUsIHYsIHRoaXMuZm9yd2FyZE1hdHJpeCk7XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKFBlcnNwZWN0aXZlLnByb3RvdHlwZSwgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc3BlY3RpdmU7IiwiaW1wb3J0IEFmZmluZSBmcm9tICcuL2Rpc3RvcnRpb24vYWZmaW5lJztcclxuaW1wb3J0IEFyYyBmcm9tICcuL2Rpc3RvcnRpb24vYXJjJztcclxuaW1wb3J0IFBlcnNwZWN0aXZlIGZyb20gJy4vZGlzdG9ydGlvbi9wZXJzcGVjdGl2ZSc7XHJcblxyXG4vKipcclxuICogQHN1bW1hcnkgUmVzb2x2ZXMgZGlzdG9ydGlvbiBjbGFzcyBpbnN0YW5jZSB1c2luZyBkaXN0b3J0aW9uIGFyZ3VtZW50cyBhbmQgb3B0aW9uYWxseSBpbWFnZS5cclxuICpcclxuICogQGNhbGxiYWNrIGxlbnN+RGlzdG9ydGlvblJlc29sdmVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFyZ3NcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gW2ltYWdlXVxyXG4gKiBAcmV0dXJucyB7RGlzdG9ydGlvbkludGVyZmFjZX1cclxuICovXHJcblxyXG4vKipcclxuICogTWFrZSBBZmZpbmUgZGlzdG9ydGlvbiB1c2luZyBjb250cm9sIHBvaW50cy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJbXX0gYXJnc1xyXG4gKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLkFmZmluZX1cclxuICovXHJcbmZ1bmN0aW9uIGFmZmluZUJ5Q29udHJvbFBvaW50cyhhcmdzKSB7XHJcbiAgcmV0dXJuIEFmZmluZS5mcm9tQ29udHJvbFBvaW50cyhhcmdzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2UgQWZmaW5lIGRpc3RvcnRpb24gdXNpbmcgYWZmaW5lIG1hdHJpeC4gQXJndW1lbnRzIG9yZGVyIGlzIGFzIGRlc2NyaWJlZCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEltYWdlTWFnaWNrXHJcbiAqIGFyZ3VtZW50cy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHN4XHJcbiAqIEBwYXJhbSByeVxyXG4gKiBAcGFyYW0gcnhcclxuICogQHBhcmFtIHN5XHJcbiAqIEBwYXJhbSB0eFxyXG4gKiBAcGFyYW0gdHlcclxuICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5BZmZpbmV9XHJcbiAqL1xyXG5mdW5jdGlvbiBhZmZpbmVCeU1hdHJpeCAoW3N4LCByeSwgcngsIHN5LCB0eCwgdHldKSB7XHJcbiAgLy8gQ2hhbmdlIGFyZ3VtZW50cyBvcmRlci5cclxuICByZXR1cm4gQWZmaW5lLmZyb21Gb3J3YXJkTWF0cml4KFtzeCwgcngsIHR4LCByeSwgc3ksIHR5XSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlIHBlcnNwZWN0aXZlIGRpc3RvcnRpb24gdXNpbmcgY29udHJvbCBwb2ludHMuXHJcbiAqIElmIG51bWJlciBvZiBjb250cm9sIHBvaW50IHNldHMgaXMgbGVzcyB0aGFuIDQgKDwgMTYgYXJndW1lbnRzKSwgdGhpcyB3aWxsIGZhbGxiYWNrIHRvIEFmZmluZSBkaXN0b3J0aW9uLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBhcmdzXHJcbiAqIEByZXR1cm5zIHtsZW5zLmRpc3RvcnRpb24uUGVyc3BlY3RpdmV8bGVucy5kaXN0b3J0aW9uLkFmZmluZX1cclxuICovXHJcbmZ1bmN0aW9uIHBlcnNwZWN0aXZlQnlDb250cm9sUG9pbnRzKGFyZ3MpIHtcclxuICBpZiAoYXJncy5sZW5ndGggPCAxNikge1xyXG4gICAgY29uc29sZS53YXJuKCdQZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIHJlcXVpcmVzIGF0IGxlYXN0IDQgY29udHJvbHMgcG9pbnRzIG1hcHBpbmcgKHUsIHYpIC0+ICh4LCB5KS4gQWZmaW5lIGRpc3RvcnRpb24gd2lsbCBiZSB1c2VkLicpO1xyXG4gICAgcmV0dXJuIEFmZmluZS5mcm9tQ29udHJvbFBvaW50cyhhcmdzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBQZXJzcGVjdGl2ZS5mcm9tQ29udHJvbFBvaW50cyhhcmdzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFyZ3NcclxuICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5QZXJzcGVjdGl2ZX1cclxuICovXHJcbmZ1bmN0aW9uIHBlcnNwZWN0aXZlQnlNYXRyaXgoYXJncykge1xyXG4gIHJldHVybiBQZXJzcGVjdGl2ZS5mcm9tRm9yd2FyZE1hdHJpeChhcmdzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFyZ3NcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gaW1hZ2VcclxuICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5BcmN9XHJcbiAqL1xyXG5mdW5jdGlvbiBhcmNCeUFyZ3VtZW50cyhhcmdzLCBpbWFnZSkge1xyXG4gIHJldHVybiBBcmMuZnJvbUFyZ3VtZW50cyhpbWFnZS52aWV3cG9ydCwgYXJncyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXN0b3J0aW9uIHR5cGVzLlxyXG4gKlxyXG4gKiBAZW51bSB7bGVuc35kaXN0b3J0aW9uUmVzb2x2ZXJ9XHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBkaXN0b3J0cyA9IHtcclxuICAvKipcclxuICAgKiBBZmZpbmUgZGlzdG9ydGlvbiB1c2luZyBjb250cm9sIHBvaW50cy4gQXJndW1lbnRzIGFyZSBzZXRzIG9mIGNvbnRyb2wgcG9pbnRzIG1hcHBpbmdzOlxyXG4gICAqIFt1MCwgdjAsIHgwLCB5MCwgLi4uLCB1Tiwgdk4sIHhOLCB5Tl0sIHdoZXJlIHUqLCB2KiBhcmUgc291cmNlIGltYWdlIGNvb3JkcywgeCosIHkqIGFyZVxyXG4gICAqIGRlc3RpbmF0aW9uIGltYWdlIGNvb3Jkcy5cclxuICAgKi9cclxuICBBRkZJTkU6IGFmZmluZUJ5Q29udHJvbFBvaW50cyxcclxuICAvKipcclxuICAgKiBBZmZpbmUgZGlzdG9ydGlvbiB1c2luZyBmb3J3YXJkIGFmZmluZSBtYXRyaXguXHJcbiAgICogQXJndW1lbnRzIGFyZSBhZmZpbmUgbWF0cml4IGNvZWZmaWNpZW50czogW3N4LCByeSwgcngsIHN5LCB0eCwgdHldXHJcbiAgICovXHJcbiAgQUZGSU5FX1BST0pFQ1RJT046IGFmZmluZUJ5TWF0cml4LFxyXG4gIC8qKlxyXG4gICAqIFBlcnNwZWN0aXZlIGRpc3RvcnRpb24gdXNpbmcgY29udHJvbCBwb2ludHMuIEFyZ3VtZW50cyBhcmUgc2V0cyBvZiBjb250cm9sIHBvaW50cyBtYXBwaW5nczpcclxuICAgKiBbdTAsIHYwLCB4MCwgeTAsIC4uLiwgdU4sIHZOLCB4TiwgeU5dLCB3aGVyZSB1KiwgdiogYXJlIHNvdXJjZSBpbWFnZSBjb29yZHMsIHgqLCB5KiBhcmVcclxuICAgKiBkZXN0aW5hdGlvbiBpbWFnZSBjb29yZHMuXHJcbiAgICogSWYgbnVtYmVyIG9mIGNvbnRyb2wgcG9pbnQgc2V0cyBpcyBsZXNzIHRoYW4gNCAoPCAxNiBhcmd1bWVudHMpLCB0aGlzIHdpbGwgZmFsbGJhY2sgdG8gQWZmaW5lIGRpc3RvcnRpb25cclxuICAgKiB3aXRoIHdhcm5pbmcgbWVzc2FnZSBpbiBjb25zb2xlLlxyXG4gICAqL1xyXG4gIFBFUlNQRUNUSVZFOiBwZXJzcGVjdGl2ZUJ5Q29udHJvbFBvaW50cyxcclxuICAvKipcclxuICAgKiBQZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIHVzaW5nIGZvcndhcmQgcGVyc3BlY3RpdmUgbWF0cml4LiBBcmd1bWVudHMgYXJlIHBlcnNwZWN0aXZlIG1hdHJpeCBjb2VmZmljaWVudHM6XHJcbiAgICogW3N4LCByeSwgdHgsIHJ4LCBzeSwgdHksIHB4LCBweV0uXHJcbiAgICovXHJcbiAgUEVSU1BFQ1RJVkVfUFJPSkVDVElPTjogcGVyc3BlY3RpdmVCeU1hdHJpeCxcclxuXHJcbiAgLyoqXHJcbiAgICogQXJjIGRpc3RvcnRpb24uIEFyZ3VtZW50cyBhcmU6IFthcmNBbmdsZSwgcm90YXRpb24sIG91dGVyUmFkaXVzLCBpbm5lclJhZGl1c10uIEFsbCBhcmd1bWVudHMgZXhjZXB0IGFyY0FuZ2xlXHJcbiAgICogYXJlIG9wdGlvbmFsLiBTZWUge0BsaW5rIGxlbnMuZGlzdG9ydGlvbi5BcmMuZnJvbUFyZ3VtZW50c31cclxuICAgKi9cclxuICBBUkM6IGFyY0J5QXJndW1lbnRzXHJcbn07XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXIgY3VzdG9tIGRpc3RvcnRpb24gcmVzb2x2ZXIuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAqIEBwYXJhbSB7bGVuc35kaXN0b3J0aW9uUmVzb2x2ZXJ9IHJlc29sdmVyXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlckRpc3RvcnRpb25SZXNvbHZlcihuYW1lLCByZXNvbHZlcikge1xyXG4gIGRpc3RvcnRzW25hbWVdICA9IHJlc29sdmVyO1xyXG59XHJcblxyXG4vKipcclxuICogVW5yZWdpc3RlciBkaXN0b3J0aW9uIHJlc29sdmVyLlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gKi9cclxuZnVuY3Rpb24gdW5yZWdpc3RlckRpc3RvcnRpb25SZXNvbHZlcihuYW1lKSB7XHJcbiAgZGVsZXRlIGRpc3RvcnRzW25hbWVdO1xyXG59XHJcblxyXG5leHBvcnQge3JlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyLCB1bnJlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3RvcnRzOyIsIi8qKlxyXG4gKiBFeGNlcHRpb24gbmFtZXNwYWNlXHJcbiAqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5leGNlcHRpb25cclxuICovXHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgTGVuc0V4Y2VwdGlvbn0gZnJvbSAnLi9sZW5zLWV4Y2VwdGlvbic7XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgSW52YWxpZEFyZ3VtZW50c0xlbmd0aH0gZnJvbSAnLi9pbnZhbGlkLWFyZ3VtZW50cy1sZW5ndGgnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIFVuc29sdmFibGVNYXRyaXh9IGZyb20gJy4vdW5zb2x2YWJsZS1tYXRyaXgnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIEludmFsaWRBcmd1bWVudH0gZnJvbSAnLi9pbnZhbGlkLWFyZ3VtZW50JzsiLCJpbXBvcnQgTGVuc0V4Y2VwdGlvbiBmcm9tICcuL2xlbnMtZXhjZXB0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBJbnZhbGlkIEFyZ3VtZW50IEV4Y2VwdGlvbi5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMuZXhjZXB0aW9uXHJcbiAqIEBleHRlbmRzIGxlbnMuZXhjZXB0aW9uLkxlbnNFeGNlcHRpb25cclxuICovXHJcbmNsYXNzIEludmFsaWRBcmd1bWVudCBleHRlbmRzIExlbnNFeGNlcHRpb24ge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludmFsaWRBcmd1bWVudDsiLCJpbXBvcnQgTGVuc0V4Y2VwdGlvbiBmcm9tICcuL2xlbnMtZXhjZXB0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBFeGNlcHRpb24gZm9yIGNhc2VzIHdoZW4gaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzIHBhc3NlZFxyXG4gKlxyXG4gKiBAZXh0ZW5kcyBsZW5zLmV4Y2VwdGlvbi5MZW5zRXhjZXB0aW9uXHJcbiAqIEBtZW1iZXJPZiBsZW5zLmV4Y2VwdGlvblxyXG4gKi9cclxuY2xhc3MgSW52YWxpZEFyZ3VtZW50c0xlbmd0aCBleHRlbmRzIExlbnNFeGNlcHRpb24ge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludmFsaWRBcmd1bWVudHNMZW5ndGg7IiwiLyoqXHJcbiAqIEJhc2UgTGVucyBleGNlcHRpb25cclxuICpcclxuICogQGV4dGVuZHMgRXJyb3JcclxuICogQG1lbWJlck9mIGxlbnMuZXhjZXB0aW9uXHJcbiAqL1xyXG5jbGFzcyBMZW5zRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xyXG4gICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKG1lc3NhZ2UpKS5zdGFjaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlbnNFeGNlcHRpb247IiwiaW1wb3J0IExlbnNFeGNlcHRpb24gZnJvbSAnLi9sZW5zLWV4Y2VwdGlvbic7XHJcblxyXG4vKipcclxuICogRXhjZXB0aW9uIGZvciB1bnNvbHZhYmxlIG1hdHJpeCBpbiBHYXVzcy1Kb3JkYW4gZWxpbWluYXRpb25cclxuICpcclxuICogQGV4dGVuZHMgbGVucy5leGNlcHRpb24uTGVuc0V4Y2VwdGlvblxyXG4gKiBAbWVtYmVyT2YgbGVucy5leGNlcHRpb25cclxuICovXHJcbmNsYXNzIFVuc29sdmFibGVNYXRyaXggZXh0ZW5kcyBMZW5zRXhjZXB0aW9uIHtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5zb2x2YWJsZU1hdHJpeDsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vZmlsdGVyL2ZpbHRlcic7XHJcbmltcG9ydCB7Ym94LCBjdWJpY0JDfSBmcm9tIFwiLi9maWx0ZXIvZmlsdGVyLWZ1bmN0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIEZpbHRlciBmYWN0b3J5LlxyXG4gKlxyXG4gKiBAY2FsbGJhY2sgbGVuc35maWx0ZXJGYWN0b3J5XHJcbiAqIEByZXR1cm5zIHtGaWx0ZXJJbnRlcmZhY2V9XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEByZXR1cm5zIHtsZW5zLmZpbHRlci5GaWx0ZXJ9XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gUk9CSURPVVgoKSB7XHJcbiAgcmV0dXJuIG5ldyBGaWx0ZXIoXHJcbiAgICBjdWJpY0JDKDAuMzc4MjE1NzU1MDkzOTk4NjcsIDAuMzEwODkyMTIyNDUzMDAwNjcpLFxyXG4gICAgYm94KCksXHJcbiAgICAyLFxyXG4gICAgMS4xNjg1Nzc3NjIwODM2OTMyLFxyXG4gICAgMVxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcmV0dXJucyB7bGVucy5maWx0ZXIuRmlsdGVyfVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIFJPQklET1VYX1NIQVJQKCkge1xyXG4gIHJldHVybiBuZXcgRmlsdGVyKFxyXG4gICAgY3ViaWNCQygwLjI2MjAxNDUxMjM5OTAxNDIsIDAuMzY4OTkyNzQzODAwNDkyOSksXHJcbiAgICAyLFxyXG4gICAgYm94KCksXHJcbiAgICAxLjEwNTgyMjkzMzcxOTAxOSxcclxuICAgIDFcclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogRmlsdGVyIHByZXNldHMuXHJcbiAqXHJcbiAqIEBlbnVtIHtsZW5zfmZpbHRlckZhY3Rvcnl9XHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBmaWx0ZXJQcmVzZXRzID0ge1xyXG4gIFJPQklET1VYLFxyXG4gIFJPQklET1VYX1NIQVJQXHJcbn07XHJcblxyXG4vLyBUT0RPIGFkZCBtb3JlIGZpbHRlciBwcmVzZXRzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJQcmVzZXRzOyIsIi8qKlxyXG4gKiBAbmFtZXNwYWNlIGxlbnMuZmlsdGVyLmZpbHRlckZ1bmN0aW9uc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyBib3ggZmlsdGVyIGZ1bmN0aW9uLlxyXG4gKiBBIEJveCBmaWx0ZXIgaXMgYSBlcXVhbCB3ZWlnaHRpbmcgZnVuY3Rpb24gKGFsbCB3ZWlnaHRzIGVxdWFsKS5cclxuICogRE8gTk9UIExJTUlUIHJlc3VsdHMgYnkgc3VwcG9ydCBvciByZXNpemUgcG9pbnQgc2FtcGxpbmcgd2lsbCB3b3JrXHJcbiAqIGFzIGl0IHJlcXVlc3RzIHBvaW50cyBiZXlvbmQgaXRzIG5vcm1hbCAwLjAgc3VwcG9ydCBzaXplLlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy5maWx0ZXIuZmlsdGVyRnVuY0ZhY3Rvcmllc1xyXG4gKiBAcmV0dXJucyB7bGVucy5maWx0ZXIuRmlsdGVyfmZpbHRlckZ1bmN0aW9ufVxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9yZXNpemVfOGNfc291cmNlLmh0bWwjbDAwMTgxIE94IGZpbHRlciBmdW5jdGlvbiBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBib3goKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyBjdWJpY0JDIGZpbHRlciBmdW5jdGlvbi5cclxuICogPHA+Q3ViaWMgRmlsdGVycyB1c2luZyBCLEMgZGV0ZXJtaW5lZCB2YWx1ZXM6PC9wPlxyXG4gKiA8cHJlPlxyXG4gKiAgICAgTWl0Y2hlbGwtTmV0cmF2YWxpICBCID0gMS8zIEMgPSAxLzMgIFwiQmFsYW5jZWRcIiBjdWJpYyBzcGxpbmUgZmlsdGVyXHJcbiAqICAgICBDYXRtdWxsLVJvbSAgICAgICAgIEIgPSAwICAgQyA9IDEvMiAgSW50ZXJwb2xhdG9yeSBhbmQgZXhhY3Qgb24gbGluZWFyc1xyXG4gKiAgICAgU3BsaW5lICAgICAgICAgICAgICBCID0gMSAgIEMgPSAwICAgIEItU3BsaW5lIEdhdXNzaWFuIGFwcHJveGltYXRpb25cclxuICogICAgIEhlcm1pdGUgICAgICAgICAgICAgQiA9IDAgICBDID0gMCAgICBCLVNwbGluZSBpbnRlcnBvbGF0b3JcclxuICogPC9wcmU+XHJcbiAqXHJcbiAqIDxwPlNlZSBwYXBlciBieSBNaXRjaGVsbCBhbmQgTmV0cmF2YWxpLCBSZWNvbnN0cnVjdGlvbiBGaWx0ZXJzIGluIENvbXB1dGVyXHJcbiAqIEdyYXBoaWNzIENvbXB1dGVyIEdyYXBoaWNzLCBWb2x1bWUgMjIsIE51bWJlciA0LCBBdWd1c3QgMTk4OFxyXG4gKiB7QGxpbmsgaHR0cDovL3d3dy5jcy51dGV4YXMuZWR1L3VzZXJzL2Z1c3NlbGwvY291cnNlcy9jczM4NGcvbGVjdHVyZXMvbWl0Y2hlbGwvTWl0Y2hlbGwucGRmfS48L3A+XHJcbiAqXHJcbiAqIDxwPkNvZWZmaWNlbnRzIGFyZSBkZXRlcm1pbmVkIGZyb20gQixDIHZhbHVlczpcclxuICogPHByZT5cclxuICogICAgUDAgPSAoICA2IC0gMipCICAgICAgICkvNiA9IGNvZWZmWzBdXHJcbiAqICAgIFAxID0gICAgICAgICAwXHJcbiAqICAgIFAyID0gKC0xOCArMTIqQiArIDYqQyApLzYgPSBjb2VmZlsxXVxyXG4gKiAgICBQMyA9ICggMTIgLSA5KkIgLSA2KkMgKS82ID0gY29lZmZbMl1cclxuICogICAgUTAgPSAoICAgICAgOCpCICsyNCpDICkvNiA9IGNvZWZmWzNdXHJcbiAqICAgIFExID0gKCAgICAtMTIqQiAtNDgqQyApLzYgPSBjb2VmZls0XVxyXG4gKiAgICBRMiA9ICggICAgICA2KkIgKzMwKkMgKS82ID0gY29lZmZbNV1cclxuICogICAgUTMgPSAoICAgIC0gMSpCIC0gNipDICkvNiA9IGNvZWZmWzZdXHJcbiAqIDwvcHJlPlxyXG4gKiB3aGljaCBhcmUgdXNlZCB0byBkZWZpbmUgdGhlIGZpbHRlcjpcclxuICogPHByZT5cclxuICogICAgUDAgKyBQMSp4ICsgUDIqeF4yICsgUDMqeF4zICAgICAgMCA8PSB4IDwgMVxyXG4gKiAgICBRMCArIFExKnggKyBRMip4XjIgKyBRMyp4XjMgICAgICAxIDw9IHggPCAyXHJcbiAqIDwvcHJlPlxyXG4gKiB3aGljaCBlbnN1cmVzIGZ1bmN0aW9uIGlzIGNvbnRpbnVvdXMgaW4gdmFsdWUgYW5kIGRlcml2YXRpdmUgKHNsb3BlKS48L3A+XHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLmZpbHRlci5maWx0ZXJGdW5jRmFjdG9yaWVzXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3Jlc2l6ZV84Y19zb3VyY2UuaHRtbCNsMDAyMDcgQ3ViaWNCQyBmaWx0ZXIgZnVuY3Rpb24gYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gKiBAcGFyYW0ge251bWJlcn0gYlxyXG4gKiBAcGFyYW0ge251bWJlcn0gY1xyXG4gKiBAcmV0dXJucyB7bGVucy5maWx0ZXIuRmlsdGVyfmZpbHRlckZ1bmN0aW9ufVxyXG4gKi9cclxuZnVuY3Rpb24gY3ViaWNCQyhiLCBjKSB7XHJcbiAgY29uc3QgcDAgPSAoNiAtIDIgKiBiKSAvIDY7XHJcbiAgY29uc3QgcDEgPSAwO1xyXG4gIGNvbnN0IHAyID0gKC0xOCArIDEyICogYiArIDYgKiBjKSAvIDY7XHJcbiAgY29uc3QgcDMgPSAoMTIgLSA5ICogYiAtIDYgKiBjKSAvIDY7XHJcbiAgY29uc3QgcTAgPSAoOCAqIGIgKyAyNCAqIGMpIC8gNjtcclxuICBjb25zdCBxMSA9ICgtMTIgKiBiIC0gNDggKiBjKSAvIDY7XHJcbiAgY29uc3QgcTIgPSAoNiAqIGIgKyAzMCAqIGMpIC8gNjtcclxuICBjb25zdCBxMyA9ICgtMSAqIGIgLSA2ICogYykgLyA2O1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcclxuICAgIGlmICh4IDwgMSkge1xyXG4gICAgICByZXR1cm4gcDAgKyB4ICogKHggKiAocDIgKyB4ICogcDMpKTtcclxuICAgIH0gZWxzZSBpZiAoeCA8IDIpIHtcclxuICAgICAgcmV0dXJuIHEwICsgeCAqIChxMSArIHggKiAocTIgKyB4ICogcTMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gVE9ETzogYWRkIG1vcmUgZmlsdGVyIGZ1bmN0aW9uc1xyXG5cclxuZXhwb3J0IHtcclxuICBib3gsIGN1YmljQkNcclxufTsiLCJpbXBvcnQge0VQU0lMT059IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBmaWx0ZXIgb3Igd2luZG93aW5nIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAY2FsbGJhY2sgbGVucy5maWx0ZXIuRmlsdGVyfmZpbHRlckZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeF1cclxuICogQHBhcmFtIHtudW1iZXJ9IFtzdXBwb3J0XVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3dpbmRvd1N1cHBvcnRdXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFJlc2FtcGxlIGZpbHRlci5cclxuICpcclxuICogQGltcGxlbWVudHMge0ZpbHRlckludGVyZmFjZX1cclxuICogQG1lbWJlck9mIGxlbnMuZmlsdGVyXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9maWx0ZXIvI2ZpbHRlciBSZXNhbXBsaW5nIEZpbHRlcnN9IGF0IEltYWdlTWFnaWNrIGRvY3NcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cyLmVlY3MuYmVya2VsZXkuZWR1L1B1YnMvVGVjaFJwdHMvMTk4OS9DU0QtODktNTE2LnBkZiBGdW5kYW1lbnRhbHMgb2YgVGV4dHVyZSBNYXBwaW5nIGFuZCBJbWFnZSBXYXJwaW5nIGJ5IFBhdWwgUy4gSGVja2JlcnR9XHJcbiAqIHBhZ2UgNDEsIHNlY3Rpb24gMy40LCAzLjVcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvcmVzaXplXzhjX3NvdXJjZS5odG1sI2wwMDc1NyBBcXVpcmVSZXNpemVGaWx0ZXIgYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gKiBAdHV0b3JpYWwgMDIuMDMucGl4ZWwtY29sb3ItbG9va3VwXHJcbiAqL1xyXG5jbGFzcyBGaWx0ZXIge1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bGVucy5maWx0ZXIuRmlsdGVyfmZpbHRlckZ1bmN0aW9ufSBmaWx0ZXJGdW5jdGlvbiBGaWx0ZXJpbmcgZnVuY3Rpb24uXHJcbiAgICogQHBhcmFtIHtsZW5zLmZpbHRlci5GaWx0ZXJ+ZmlsdGVyRnVuY3Rpb259IHdpbmRvd0Z1bmN0aW9uIFdpbmRvd2luZyBmdW5jdGlvbi5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3VwcG9ydCBGaWx0ZXIgcmVnaW9uIG9mIHN1cHBvcnQgLSB0aGUgZmlsdGVyIHN1cHBvcnQgbGltaXQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlIERpbWVuc2lvbiBzY2FsaW5nIHRvIGZpdCB3aW5kb3cgc3VwcG9ydCAodXNhbGx5IDEuMCkuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtibHVyPTFdIFgtc2NhbGUgKGJsdXItc2hhcnBlbikuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt3aW5kb3dTdXBwb3J0PW51bGxdIFdpbmRvdyBzdXBwb3J0LCB1c3VhbGx5IGVxdWFsIHRvIHN1cHBvcnQgKGV4cGVydCBvbmx5KS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihmaWx0ZXJGdW5jdGlvbiwgd2luZG93RnVuY3Rpb24sIHN1cHBvcnQsIHNjYWxlLCBibHVyID0gMSwgd2luZG93U3VwcG9ydCA9IG51bGwpIHtcclxuICAgIHRoaXMuZmlsdGVyRnVuY3Rpb24gPSBmaWx0ZXJGdW5jdGlvbjtcclxuICAgIHRoaXMud2luZG93RnVuY3Rpb24gPSB3aW5kb3dGdW5jdGlvbjtcclxuICAgIHRoaXMuc3VwcG9ydCA9IHN1cHBvcnQ7XHJcbiAgICB0aGlzLnNjYWxlID0gc2NhbGU7XHJcbiAgICB0aGlzLmJsdXIgPSBibHVyO1xyXG4gICAgdGhpcy53aW5kb3dTdXBwb3J0ID0gd2luZG93U3VwcG9ydCAhPT0gbnVsbCA/IHdpbmRvd1N1cHBvcnQgOiBzdXBwb3J0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRXZWlnaHQoeCkge1xyXG4gICAgY29uc3QgeEJsdXIgPSB4IC8gdGhpcy5ibHVyO1xyXG4gICAgY29uc3Qgc2NhbGUgPSB4Qmx1ciA8IEVQU0lMT04gPyAxIDogdGhpcy53aW5kb3codGhpcy5zY2FsZSAqIHhCbHVyKTtcclxuICAgIHJldHVybiBzY2FsZSAqIHRoaXMuZmlsdGVyKHhCbHVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZmlsdGVyKHgpIHtcclxuICAgIHJldHVybiB0aGlzLmZpbHRlckZ1bmN0aW9uKHgsIHRoaXMuc3VwcG9ydCwgdGhpcy53aW5kb3dTdXBwb3J0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgd2luZG93KHgpIHtcclxuICAgIHJldHVybiB0aGlzLndpbmRvd0Z1bmN0aW9uKHgsIHRoaXMuc3VwcG9ydCwgdGhpcy53aW5kb3dTdXBwb3J0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjsiLCIvKipcclxuICogRmlsdGVyIG5hbWVzcGFjZVxyXG4gKlxyXG4gKiBAbmFtZXNwYWNlIGxlbnMuZmlsdGVyXHJcbiAqL1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIEZpbHRlcn0gZnJvbSAnLi9maWx0ZXInO1xyXG5cclxuaW1wb3J0ICogYXMgZmlsdGVyRnVuY3Rpb25zIGZyb20gJy4vZmlsdGVyLWZ1bmN0aW9ucyc7XHJcblxyXG5leHBvcnQge2ZpbHRlckZ1bmN0aW9uc307IiwiaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4uL3ZpZXdwb3J0JztcclxuaW1wb3J0IHZweCBmcm9tICcuLi92cHgnO1xyXG5pbXBvcnQgdmlydHVhbFBpeGVsVHJhaXQgZnJvbSAnLi4vbWl4aW5zL3ZpcnR1YWwtcGl4ZWwtdHJhaXQnO1xyXG5pbXBvcnQgaW50ZXJwb2xhdGlvblRyYWl0IGZyb20gJy4uL21peGlucy9pbnRlcnBvbGF0aW9uLXRyYWl0JztcclxuaW1wb3J0IGludGVycG9sYXRpb24gZnJvbSAnLi4vaW50ZXJwb2xhdGlvbic7XHJcblxyXG5mdW5jdGlvbiBub3RJbXBsZW1lbnRlZChtZXRob2QpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoYCR7bWV0aG9kfSgpIGlzIGFic3RyYWN0IG1ldGhvZCBhbmQgbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBjaGlsZCBjbGFzc2ApO1xyXG59XHJcblxyXG4vKipcclxuICogQWJzdHJhY3QgaW1hZ2UgY2xhc3MgZm9yIEltYWdlSW50ZXJmYWNlIGltcGxlbWVudGF0aW9uLlxyXG4gKlxyXG4gKiBAaW1wbGVtZW50cyB7SW1hZ2VJbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLmltYWdlXHJcbiAqIEBhYnN0cmFjdFxyXG4gKiBAbWl4ZXMgbGVucy5taXhpbnMuaW50ZXJwb2xhdGlvblRyYWl0XHJcbiAqIEBtaXhlcyBsZW5zLm1peGlucy52aXJ0dWFsUGl4ZWxUcmFpdFxyXG4gKi9cclxuY2xhc3MgQWJzdHJhY3RJbWFnZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBJbWFnZSB3aWR0aFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSW1hZ2UgaGVpZ2h0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLnZpZXdwb3J0ID0gbmV3IFZpZXdwb3J0KDAsIDAsIHRoaXMud2lkdGggLSAxLCB0aGlzLmhlaWdodCAtIDEpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBbMCwgMCwgMCwgMF0gLy8gVHJhbnNwYXJlbnQ7XHJcbiAgICB0aGlzLnZpcnR1YWxQaXhlbE1ldGhvZCA9IHZweC5UUkFOU1BBUkVOVDtcclxuICAgIHRoaXMucXVhbnR1bVJhbmdlID0gMjU1O1xyXG4gICAgdGhpcy5pbnRlcnBvbGF0aW9uTWV0aG9kID0gaW50ZXJwb2xhdGlvbi5JTlRFR0VSO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRQaXhlbENvbG9yKHgsIHkpIHtcclxuICAgIHggPSBNYXRoLmZsb29yKHggLSB0aGlzLnZpZXdwb3J0LngxKTtcclxuICAgIHkgPSBNYXRoLmZsb29yKHkgLSB0aGlzLnZpZXdwb3J0LnkxKTtcclxuXHJcbiAgICBpZiAoeCA+PSAwICYmIHggPCB0aGlzLndpZHRoICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5oZWlnaHQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VQaXhlbENvbG9yKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmdldFZpcnR1YWxQaXhlbENvbG9yKHgsIHksIHRoaXMudmlydHVhbFBpeGVsTWV0aG9kKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc2V0UGl4ZWxDb2xvcih4LCB5LCBjb2xvcikge1xyXG4gICAgeCA9IE1hdGguZmxvb3IoeCAtIHRoaXMudmlld3BvcnQueDEpO1xyXG4gICAgeSA9IE1hdGguZmxvb3IoeSAtIHRoaXMudmlld3BvcnQueTEpO1xyXG5cclxuICAgIGlmICh4ID49IDAgJiYgeCA8IHRoaXMud2lkdGggJiYgeSA+PSAwICYmIHkgPCB0aGlzLmhlaWdodCkge1xyXG4gICAgICB0aGlzLnNldEltYWdlUGl4ZWxDb2xvcih4LCB5LCBjb2xvcik7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEdpdmVuIGNvb3JkcyAoJHt4fSwgJHt5fSkgaXMgb3V0IG9mIGltYWdlIGJvdW5kc2ApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRCbGFuayh2aWV3cG9ydCkge1xyXG4gICAgY29uc3QgYmxhbmsgPSB0aGlzLnByZXBhcmVCbGFuayh2aWV3cG9ydC53aWR0aCgpLCB2aWV3cG9ydC5oZWlnaHQoKSk7XHJcblxyXG4gICAgaWYgKGJsYW5rIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICByZXR1cm4gYmxhbmsudGhlbihibGFuayA9PiB7XHJcbiAgICAgICAgYmxhbmsudmlld3BvcnQgID0gdmlld3BvcnQ7XHJcbiAgICAgICAgcmV0dXJuIGJsYW5rO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBibGFuay52aWV3cG9ydCA9IHZpZXdwb3J0O1xyXG4gICAgcmV0dXJuIGJsYW5rO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBzY2FsZShzY2FsZSkge1xyXG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLnZpZXdwb3J0LmNsb25lKCk7XHJcbiAgICB2aWV3cG9ydC5zY2FsZShzY2FsZSk7XHJcbiAgICBjb25zdCByZXNpemVkID0gdGhpcy5yZXNpemUodmlld3BvcnQud2lkdGgoKSwgdmlld3BvcnQuaGVpZ2h0KCkpO1xyXG5cclxuICAgIGlmIChyZXNpemVkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICByZXR1cm4gcmVzaXplZC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXNpemVkLnZpZXdwb3J0ID0gdmlld3BvcnQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc2l6ZWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2l6ZWQudmlld3BvcnQgPSB2aWV3cG9ydDtcclxuICAgIHJldHVybiByZXNpemVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBzeW5jKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHBpeGVsIGNvbG9yIGF0IGdpdmVuIGltYWdlIGNvb3Jkcy4gSW1hZ2UgY29vcmRzIE1VU1QgYmU6IHgg4oiIIFswOyB3aWR0aCAtIDFdLCB5IOKIiCBbMDsgaGVpZ2h0IC0gMV0uXHJcbiAgICpcclxuICAgKiBAYWJzdHJhY3RcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge251bWJlcn0geVxyXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cclxuICAgKi9cclxuICBnZXRJbWFnZVBpeGVsQ29sb3IoeCwgeSkge1xyXG4gICAgbm90SW1wbGVtZW50ZWQoJ2dldEltYWdlUGl4ZWxDb2xvcicpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBwaXhlbCBjb2xvciBhdCBnaXZlbiBpbWFnZSBjb29yZGluYXRlcy5cclxuICAgKlxyXG4gICAqIEBhYnN0cmFjdFxyXG4gICAqIEBwcm90ZWN0ZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHBhcmFtIHtDb2xvcn0gY29sb3JcclxuICAgKi9cclxuICBzZXRJbWFnZVBpeGVsQ29sb3IoeCwgeSwgY29sb3IpIHtcclxuICAgIG5vdEltcGxlbWVudGVkKCdzZXRJbWFnZVBpeGVsQ29sb3InKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXBhcmVzIGJsYW5rIGltYWdlIGZvciB7QGxpbmsgSW1hZ2VJbnRlcmZhY2UjZ2V0Qmxhbmt9IG1ldGhvZC5cclxuICAgKlxyXG4gICAqIEBhYnN0cmFjdFxyXG4gICAqIEBwcm90ZWN0ZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICogQHJldHVybnMge0ltYWdlSW50ZXJmYWNlfVxyXG4gICAqL1xyXG4gIHByZXBhcmVCbGFuayh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBub3RJbXBsZW1lbnRlZCgncHJlcGFyZUJsYW5rJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGF2ZXJhZ2UgY29sb3Igb2Ygd2hvbGUgaW1hZ2UuXHJcbiAgICpcclxuICAgKiBAYWJzdHJhY3RcclxuICAgKiBAcmV0dXJucyB7Q29sb3J9XHJcbiAgICovXHJcbiAgZ2V0QXZlcmFnZUNvbG9yKCkge1xyXG4gICAgbm90SW1wbGVtZW50ZWQoJ2dldEF2ZXJhZ2VDb2xvcicpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyByZXNpemVkIGluc3RhbmNlIG9mIHNlbGYuXHJcbiAgICpcclxuICAgKiBAYWJzdHJhY3RcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gICAqIEByZXR1cm5zIHtJbWFnZUludGVyZmFjZXxQcm9taXNlPEltYWdlSW50ZXJmYWNlPn1cclxuICAgKi9cclxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgbm90SW1wbGVtZW50ZWQoJ3Jlc2l6ZScpO1xyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihBYnN0cmFjdEltYWdlLnByb3RvdHlwZSwgdmlydHVhbFBpeGVsVHJhaXQpO1xyXG5PYmplY3QuYXNzaWduKEFic3RyYWN0SW1hZ2UucHJvdG90eXBlLCBpbnRlcnBvbGF0aW9uVHJhaXQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RJbWFnZTsiLCJpbXBvcnQgQWJzdHJhY3RJbWFnZSBmcm9tICcuL2Fic3RyYWN0LWltYWdlJztcclxuXHJcbi8qKlxyXG4gKiBJbWFnZUludGVyZmFjZSBpbXBsZW1lbnRhdGlvbiBmb3IgZGlzdG9ydGlvbiB1c2luZyBIVE1MNSBDYW52YXMgb2JqZWN0cy5cclxuICogRGlzdG9ydGlvbiByZXN1bHQgd2lsbCBjb250YWluIG5ldyBDYW52YXMgb2JqZWN0IGluIHtAbGluayBsZW5zLmltYWdlLkNhbnZhcyNjYW52YXN9IHByb3BlcnR5LlxyXG4gKlxyXG4gKiBAaW1wbGVtZW50cyB7SW1hZ2VJbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLmltYWdlXHJcbiAqIEBleHRlbmRzIGxlbnMuaW1hZ2UuQWJzdHJhY3RJbWFnZVxyXG4gKi9cclxuY2xhc3MgQ2FudmFzIGV4dGVuZHMgQWJzdHJhY3RJbWFnZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICBzdXBlcihjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5jYW52YXMgICAgID0gY2FudmFzO1xyXG4gICAgdGhpcy5pbWFnZURhdGEgID0gY2FudmFzLmdldENvbnRleHQoJzJkJykuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICB0aGlzLmRhdGEgICAgICAgPSB0aGlzLmltYWdlRGF0YS5kYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRJbWFnZVBpeGVsQ29sb3IoeCwgeSkge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gKHkgKiB0aGlzLndpZHRoICsgeCkgKiA0O1xyXG5cclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcclxuICAgICAgdGhpcy5kYXRhLFxyXG4gICAgICBvZmZzZXQsXHJcbiAgICAgIG9mZnNldCArIDRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHNldEltYWdlUGl4ZWxDb2xvcih4LCB5LCBjb2xvcikge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gKHkgKiB0aGlzLndpZHRoICsgeCkgKiA0O1xyXG5cclxuICAgIGNvbG9yLmZvckVhY2goKGNoYW5uZWwsIGkpID0+IHRoaXMuZGF0YVtvZmZzZXQgKyBpXSA9IGNoYW5uZWwpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBwcmVwYXJlQmxhbmsod2lkdGgsIGhlaWdodCkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKGNhbnZhcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHN5bmMoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwgMCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldEF2ZXJhZ2VDb2xvcigpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gMTtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSAxO1xyXG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgMSwgMSk7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXHJcbiAgICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKS5kYXRhXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgY29uc3QgZHN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBkc3Qud2lkdGggPSB3aWR0aDtcclxuICAgIGRzdC5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICBkc3QuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihkc3QpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzOyIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZm9yIHtAbGluayBsZW5zLmltYWdlLkNhbnZhc30gZm9yIGRpcmVjdCBkaXN0b3J0aW9uIG9mIERPTSBJbWFnZSBvYmplY3RzLlxyXG4gKiBEaXN0b3J0aW9uIHJlc3VsdCB3aWxsIGNvbnRhaW4gbmV3IERPTSBJbWFnZSBvYmplY3QgaW4ge0BsaW5rIGxlbnMuaW1hZ2UuRG9tSW1hZ2UjaW1hZ2V9IHByb3BlcnR5LlxyXG4gKlxyXG4gKiBAaW1wbGVtZW50cyB7SW1hZ2VJbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLmltYWdlXHJcbiAqIEBleHRlbmRzIGxlbnMuaW1hZ2UuQ2FudmFzXHJcbiAqL1xyXG5jbGFzcyBEb21JbWFnZSBleHRlbmRzIENhbnZhcyB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0ltYWdlfSBpbWFnZSBET00gSW1hZ2Ugb2JqZWN0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoaW1hZ2UpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gaW1hZ2Uud2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcclxuICAgIHN1cGVyKGNhbnZhcyk7XHJcblxyXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBwcmVwYXJlQmxhbmsod2lkdGgsIGhlaWdodCkge1xyXG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKG5ldyBJbWFnZSh3aWR0aCwgaGVpZ2h0KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHN5bmMoKSB7XHJcbiAgICBzdXBlci5zeW5jKCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUodGhpcyk7XHJcblxyXG4gICAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zeW5jKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNpemVkID0gbmV3IHRoaXMuY29uc3RydWN0b3IoaW1hZ2UpO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXNpemVkKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb21JbWFnZTsiLCIvKipcclxuICogSW1hZ2UgbmFtZXNwYWNlXHJcbiAqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5pbWFnZVxyXG4gKi9cclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBBYnN0cmFjdEltYWdlfSBmcm9tICcuL2Fic3RyYWN0LWltYWdlJztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBDYW52YXN9IGZyb20gJy4vY2FudmFzJztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBEb21JbWFnZX0gZnJvbSAnLi9kb20taW1hZ2UnOyIsIi8qKlxyXG4gKiBAbmFtZXNwYWNlIGxlbnNcclxuICovXHJcblxyXG4vKipcclxuICogTGlicmFyeSB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBAcmVhZG9ubHlcclxuICogQG1lbWJlck9mIGxlbnNcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXHJcbmNvbnN0IFZFUlNJT04gPSAnMS4wLjAnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIGRpc3RvcnR9IGZyb20gJy4vZGlzdG9ydCc7XHJcblxyXG5leHBvcnQge1ZFUlNJT059O1xyXG5cclxuaW1wb3J0ICogYXMgZGlzdG9ydGVyIGZyb20gJy4vZGlzdG9ydGVyJztcclxuZXhwb3J0IHtkaXN0b3J0ZXJ9O1xyXG5cclxuaW1wb3J0ICogYXMgZGlzdG9ydGlvbiBmcm9tICcuL2Rpc3RvcnRpb24nO1xyXG5leHBvcnQge2Rpc3RvcnRpb259O1xyXG5cclxuaW1wb3J0ICogYXMgZXhjZXB0aW9uIGZyb20gJy4vZXhjZXB0aW9uJztcclxuZXhwb3J0IHtleGNlcHRpb259O1xyXG5cclxuaW1wb3J0ICogYXMgZmlsdGVyIGZyb20gJy4vZmlsdGVyJztcclxuZXhwb3J0IHtmaWx0ZXJ9O1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIGZpbHRlclByZXNldHN9IGZyb20gJy4vZmlsdGVyLXByZXNldHMnO1xyXG5cclxuaW1wb3J0ICogYXMgaW1hZ2UgZnJvbSAnLi9pbWFnZSc7XHJcbmV4cG9ydCB7aW1hZ2V9O1xyXG5cclxuaW1wb3J0ICogYXMgbWl4aW5zIGZyb20gJy4vbWl4aW5zJztcclxuZXhwb3J0IHttaXhpbnN9O1xyXG5cclxuaW1wb3J0ICogYXMgcmVzYW1wbGVyIGZyb20gJy4vcmVzYW1wbGVyJztcclxuZXhwb3J0IHtyZXNhbXBsZXJ9O1xyXG5cclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xyXG5leHBvcnQge3V0aWx9O1xyXG5cclxuaW1wb3J0IGludGVycG9sYXRpb24gZnJvbSAnLi9pbnRlcnBvbGF0aW9uJztcclxuZXhwb3J0IHtpbnRlcnBvbGF0aW9ufTtcclxuXHJcbmltcG9ydCB2cHggZnJvbSAnLi92cHgnO1xyXG5leHBvcnQge3ZweH07XHJcblxyXG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi92aWV3cG9ydCc7XHJcbmV4cG9ydCB7Vmlld3BvcnR9O1xyXG5cclxuaW1wb3J0IGRpc3RvcnRzIGZyb20gJy4vZGlzdG9ydHMnO1xyXG5leHBvcnQge2Rpc3RvcnRzfTtcclxuXHJcbmV4cG9ydCB7cmVnaXN0ZXJEaXN0b3J0aW9uUmVzb2x2ZXIsIHVucmVnaXN0ZXJEaXN0b3J0aW9uUmVzb2x2ZXJ9IGZyb20gJy4vZGlzdG9ydHMnO1xyXG5cclxuZXhwb3J0IHtcclxuICBFUFNJTE9OLFxyXG4gIE1BWElNVU1fVkFMVUUsXHJcbiAgTV9QSTIsXHJcbiAgTV8yUElcclxufSBmcm9tICcuL2NvbnN0YW50cyc7IiwiLyoqXHJcbiAqIENvbG9yIGludGVycG9sYXRpb24gbWV0aG9kcy5cclxuICpcclxuICogQHJlYWRvbmx5XHJcbiAqIEBlbnVtIHtudW1iZXJ9XHJcbiAqIEBtZW1iZXJvZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uID0ge1xyXG4gIC8qKlxyXG4gICAqIEF2ZXJhZ2UgNCBuZWFyZXN0IG5laWdoYm91cnMuXHJcbiAgICovXHJcbiAgQVZFUkFHRTogMSxcclxuXHJcbiAgLyoqXHJcbiAgICogQXZlcmFnZSA5IG5lYXJlc3QgbmVpZ2hib3Vycy5cclxuICAgKi9cclxuICBBVkVSQUdFXzk6IDIsXHJcblxyXG4gIC8qKlxyXG4gICAqIEF2ZXJhZ2UgMTYgbmVhcmVzdCBuZWlnaGJvdXJzLlxyXG4gICAqL1xyXG4gIEFWRVJBR0VfMTY6IDMsXHJcblxyXG4gIC8qKlxyXG4gICAqIEp1c3QgcmV0dXJuIGJhY2tncm91bmQgY29sb3IuXHJcbiAgICovXHJcbiAgQkFDS0dST1VORDogNCxcclxuXHJcbiAgLyoqXHJcbiAgICogSW50ZWdlciAoZmxvb3IpIGludGVycG9sYXRpb24uXHJcbiAgICovXHJcbiAgSU5URUdFUjogOCAvLyBUT0RPOiBpbXBsZW1lbnQgYW5kIGFkZCBvdGhlciBtZXRob2RzXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcnBvbGF0aW9uOyIsImltcG9ydCBWaWV3cG9ydCBmcm9tIFwiLi4vdmlld3BvcnRcIjtcclxuXHJcbi8qKlxyXG4gKiBNaXhpbiBmb3IgY2xhc3NlcyBpbXBsZW1lbnRpbmcge0BsaW5rIERpc3RvcnRpb25JbnRlcmZhY2V9IHRoYXQgY2FuIGNhbGN1bGF0ZSBiZXN0IGZpdCB2aWV3cG9ydCB1c2luZyBmb3J3YXJkXHJcbiAqIHBpeGVsIG1hcHBpbmcgb2YgaW1hZ2UgY29ybmVycy5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMubWl4aW5zXHJcbiAqIEBtaXhpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBiZXN0IGZpdCB2aWV3cG9ydCBmb3IgZGlzdG9ydGlvbiwgdXNpbmcgZm9yd2FyZCBtYXBwaW5nIGZvciBpbWFnZSBhcGV4ZXMgKGNvcm5lcnMpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtsZW5zLlZpZXdwb3J0fSB2aWV3cG9ydFxyXG4gICAqIEByZXR1cm5zIHtsZW5zLlZpZXdwb3J0fVxyXG4gICAqL1xyXG4gIGdldEJlc3RGaXRWaWV3cG9ydCh2aWV3cG9ydCkge1xyXG4gICAgY29uc3QgdTEgPSB2aWV3cG9ydC54MSxcclxuICAgICAgdjEgPSB2aWV3cG9ydC55MSxcclxuICAgICAgdTIgPSB2aWV3cG9ydC54MiArIDEsXHJcbiAgICAgIHYyID0gdmlld3BvcnQueTIgKyAxLFxyXG4gICAgICBbeCwgeV0gPSB0aGlzLmZvcndhcmRNYXAodTEsIHYxKSxcclxuICAgICAgYmVzdEZpdCA9IG5ldyBWaWV3cG9ydCh4LCB5LCB4LCB5KTtcclxuXHJcbiAgICBbW3UyLCB2MV0sIFt1MiwgdjJdLCBbdTEsIHYyXV0uZm9yRWFjaChhcGV4ID0+IGJlc3RGaXQuZXhwYW5kKC4uLnRoaXMuZm9yd2FyZE1hcCguLi5hcGV4KSkpO1xyXG5cclxuICAgIGJlc3RGaXQuZml4Qm91bmRzKCk7XHJcblxyXG4gICAgcmV0dXJuIGJlc3RGaXQ7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXM7IiwiLyoqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5taXhpbnNcclxuICovXHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGlvblRyYWl0fSBmcm9tICcuL2ludGVycG9sYXRpb24tdHJhaXQnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIHZpcnR1YWxQaXhlbFRyYWl0fSBmcm9tICcuL3ZpcnR1YWwtcGl4ZWwtdHJhaXQnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIGNyZWF0ZXNCZXN0Rml0Vmlld3BvcnRGcm9tQXBleGVzfSBmcm9tICcuL2NyZWF0ZXMtYmVzdEZpdC12aWV3cG9ydC1mcm9tLWFwZXhlcyc7IiwiaW1wb3J0IG1ldGhvZHMgZnJvbSAnLi4vaW50ZXJwb2xhdGlvbic7XHJcblxyXG4vKipcclxuICogQWRkcyBjb2xvciBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uYWxpdHkgZm9yIGNsYXNzZXMgdGhhdCBpbXBsZW1lbnQge0BsaW5rIEltYWdlSW50ZXJmYWNlfVxyXG4gKlxyXG4gKiBAbWl4aW5cclxuICogQG1lbWJlck9mIGxlbnMubWl4aW5zXHJcbiAqL1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uVHJhaXQgPSB7XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBpbnRlcnBvbGF0ZWQgcGl4ZWwgY29sb3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHBhcmFtIHtsZW5zLmludGVycG9sYXRpb259IFtpbnRlcnBvbGF0aW9uTWV0aG9kPXRoaXMuaW50ZXJwb2xhdGlvbk1ldGhvZF1cclxuICAgKiBAcmV0dXJucyB7Q29sb3J9XHJcbiAgICovXHJcbiAgZ2V0SW50ZXJwb2xhdGVkUGl4ZWxDb2xvcih4LCB5LCBpbnRlcnBvbGF0aW9uTWV0aG9kID0gdGhpcy5pbnRlcnBvbGF0aW9uTWV0aG9kKSB7XHJcbiAgICBzd2l0Y2ggKGludGVycG9sYXRpb25NZXRob2QpIHtcclxuICAgICAgY2FzZSBtZXRob2RzLkFWRVJBR0U6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGVBdmVyYWdlKHgsIHksIDIpO1xyXG4gICAgICBjYXNlIG1ldGhvZHMuQVZFUkFHRV85OlxyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVycG9sYXRlQXZlcmFnZSh4LCB5LCAzKTtcclxuICAgICAgY2FzZSBtZXRob2RzLkFORVJBR0VfMTY6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGVBdmVyYWdlKHgsIHksIDQpO1xyXG4gICAgICBjYXNlIG1ldGhvZHMuQkFDS0dST1VORDpcclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3Iuc2xpY2UoKTtcclxuICAgICAgY2FzZSBtZXRob2RzLklOVEVHRVI6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGl4ZWxDb2xvcihNYXRoLmZsb29yKHgpLCBNYXRoLmZsb29yKHkpKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGludGVycG9sYXRlZCBjb2xvciBieSBhdmVyYWdlIG9mIG5laWdoYm9ycy5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge251bWJlcn0geVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxyXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cclxuICAgKi9cclxuICBpbnRlcnBvbGF0ZUF2ZXJhZ2UoeCwgeSwgY291bnQgPSAyKSB7XHJcbiAgICBsZXQgc3RhcnRYLCBzdGFydFk7XHJcblxyXG4gICAgc3dpdGNoIChjb3VudCkge1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgc3RhcnRYID0gTWF0aC5mbG9vcih4KTtcclxuICAgICAgICBzdGFydFkgPSBNYXRoLmZsb29yKHkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHN0YXJ0WCA9IE1hdGguZmxvb3IoeCArIDAuNSkgLSAxO1xyXG4gICAgICAgIHN0YXJ0WSA9IE1hdGguZmxvb3IoeSArIDAuNSkgLSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgc3RhcnRYID0gTWF0aC5mbG9vcih4KSAtIDE7XHJcbiAgICAgICAgc3RhcnRZID0gTWF0aC5mbG9vcih5KSAtIDE7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmFtICdjb3VudCcgbXVzdCBiZSBpbnRlZ2VyIGJldHdlZW4gMiBhbmQgNC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW5kWCA9IHN0YXJ0WCArIGNvdW50O1xyXG4gICAgY29uc3QgZW5kWSA9IHN0YXJ0WSArIGNvdW50O1xyXG4gICAgbGV0IGNvbG9yID0gWzAsIDAsIDAsIDBdO1xyXG5cclxuICAgIGZvciAobGV0IFkgPSBzdGFydFk7IFkgPCBlbmRZOyBZKyspIHtcclxuICAgICAgZm9yIChsZXQgWCA9IHN0YXJ0WDsgWCA8IGVuZFg7IFgrKykge1xyXG4gICAgICAgIHRoaXMuZ2V0UGl4ZWxDb2xvcih4LCB5KS5mb3JFYWNoKChjaGFubmVsLCBpKSA9PiBjb2xvcltpXSArPSBjaGFubmVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdhbW1hID0gMSAvIChjb3VudCAqIGNvdW50KTtcclxuXHJcbiAgICByZXR1cm4gY29sb3IubWFwKGNoYW5uZWwgPT4gTWF0aC5yb3VuZChjaGFubmVsICogZ2FtbWEpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcnBvbGF0aW9uVHJhaXQ7IiwiaW1wb3J0IHZweE1ldGhvZHMgZnJvbSAnLi4vdnB4JztcclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0geFxyXG4gKiBAcGFyYW0ge251bWJlcn0geVxyXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gKiBAcmV0dXJucyB7UG9pbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRFZGdlQ29vcmRzKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICByZXR1cm4gW1xyXG4gICAgTWF0aC5tYXgoMCwgTWF0aC5taW4od2lkdGggLSAxLCB4KSksXHJcbiAgICBNYXRoLm1heCgwLCBNYXRoLm1pbihoZWlnaHQgLSAxLCB5KSlcclxuICBdO1xyXG59XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICogQHJldHVybnMge1BvaW50fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VGlsZUNvb3Jkcyh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgbGV0IHJ4ID0geCAlIHdpZHRoLFxyXG4gICAgcnkgPSB5ICUgaGVpZ2h0O1xyXG5cclxuICByZXR1cm4gW1xyXG4gICAgcnggPCAwID8gd2lkdGggKyByeCA6IHJ4LFxyXG4gICAgcnkgPCAwID8gaGVpZ2h0ICsgcnkgOiByeVxyXG4gIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIHZpcnR1YWwgcGl4ZWwgYmVoYXZpb3IgdG8gY2xhc3NlcyB0aGF0IGltcGxlbWVudCBJbWFnZUludGVyZmFjZS5cclxuICpcclxuICogQG1peGluXHJcbiAqIEBtZW1iZXJPZiBsZW5zLm1peGluc1xyXG4gKiBAdHV0b3JpYWwgMDIuMDUudmlydHVhbC1waXhlbHMtYW5kLW1hdHRlXHJcbiAqL1xyXG5jb25zdCB2aXJ0dWFsUGl4ZWxUcmFpdCA9IHtcclxuICAvKipcclxuICAgKiBSZXR1cm5zIHZpcnR1YWwgcGl4ZWwgY29sb3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geCBJbWFnZSBYLWNvb3JkaW5hdGUgT1VUU0lERSBvZiBpbWFnZSBib3VuZHMuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgSW1hZ2UgWS1jb29yZGluYXRlIE9VVFNJREUgb2YgaW1hZ2UgYm91bmRzLlxyXG4gICAqIEBwYXJhbSB7bGVucy52cHh9IG1ldGhvZCBWaXJ0dWFsIHBpeGVsIG1ldGhvZC5cclxuICAgKiBAcmV0dXJucyB7Q29sb3J9XHJcbiAgICovXHJcbiAgZ2V0VmlydHVhbFBpeGVsQ29sb3IoeCwgeSwgbWV0aG9kKSB7XHJcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuQkFDS0dST1VORDpcclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3Iuc2xpY2UoKTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5FREdFOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEltYWdlUGl4ZWxDb2xvciguLi5nZXRFZGdlQ29vcmRzKHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSk7XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuTUlSUk9SOlxyXG4gICAgICAgIGxldCBbdHgsIHR5XSA9IGdldFRpbGVDb29yZHMoeCwgeSwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcblxyXG4gICAgICAgIGlmICh0eCA+IHRoaXMud2lkdGggLSAxKSB7XHJcbiAgICAgICAgICB0eCA9IHRoaXMud2lkdGggLSAodHggLSB0aGlzLndpZHRoKSAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHkgPiB0aGlzLmhlaWdodCAtIDEpIHtcclxuICAgICAgICAgIHR5ID0gdGhpcy5oZWlnaHQgLSAodHkgLSB0aGlzLmhlaWdodCkgLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VQaXhlbENvbG9yKHR4LCB0eSk7XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuVElMRTpcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoLi4uZ2V0VGlsZUNvb3Jkcyh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpO1xyXG5cclxuICAgICAgY2FzZSB2cHhNZXRob2RzLlRSQU5TUEFSRU5UOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuQkxBQ0s6XHJcbiAgICAgICAgcmV0dXJuIFswLCAwLCAwLCB0aGlzLnF1YW50dW1SYW5nZV07XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuV0hJVEU6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKHRoaXMucXVhbnR1bVJhbmdlKTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5HUkFZOlxyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkoMykuZmlsbChNYXRoLnJvdW5kKHRoaXMucXVhbnR1bVJhbmdlIC8gMikpLmNvbmNhdChbdGhpcy5xdWFudHVtUmFuZ2VdKTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5IT1JJWk9OVEFMX1RJTEU6XHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5IT1JJWk9OVEFMX1RJTEVfRURHRTpcclxuICAgICAgICBpZiAoeSA8IDAgfHwgeSA+PSB0aGlzLmhlaWdodCkge1xyXG4gICAgICAgICAgcmV0dXJuIG1ldGhvZCA9PT0gdnB4TWV0aG9kcy5IT1JJWk9OVEFMX1RJTEUgPyB0aGlzLmJhY2tncm91bmRDb2xvci5zbGljZSgpXHJcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoLi4uZ2V0RWRnZUNvb3Jkcyh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VQaXhlbENvbG9yKC4uLmdldFRpbGVDb29yZHMoeCwgeSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5WRVJUSUNBTF9USUxFOlxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuVkVSVElDQUxfVElMRV9FREdFOlxyXG4gICAgICAgIGlmICh4IDwgMCB8fCB5ID49IHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgIHJldHVybiBtZXRob2QgPT09IHZweE1ldGhvZHMuVkVSVElDQUxfVElMRSA/IHRoaXMuYmFja2dyb3VuZENvbG9yLnNsaWNlKClcclxuICAgICAgICAgICAgOiB0aGlzLmdldEltYWdlUGl4ZWxDb2xvciguLi5nZXRFZGdlQ29vcmRzKHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoLi4uZ2V0VGlsZUNvb3Jkcyh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpO1xyXG5cclxuICAgICAgY2FzZSB2cHhNZXRob2RzLlJBTkRPTTpcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoXHJcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoKSxcclxuICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmlydHVhbFBpeGVsVHJhaXQ7IiwiaW1wb3J0IHZweCBmcm9tICcuLi92cHgnO1xyXG5pbXBvcnQgaW50ZXJwb2xhdGlvbiBmcm9tICcuLi9pbnRlcnBvbGF0aW9uJztcclxuaW1wb3J0IHtNQVhJTVVNX1ZBTFVFfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7YmxlbmRDb2xvcnN9IGZyb20gXCIuLi91dGlsL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cclxuY29uc3QgV0VJR0hUX0xPT0tVUF9UQUJMRV9XSURUSCA9IDEwMjQ7XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtGaWx0ZXJJbnRlcmZhY2V9IGZpbHRlclxyXG4gKiBAcGFyYW0ge251bWJlcn0gc3VwcG9ydFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyW119XHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZFdlaWdodExvb2t1cFRhYmxlKGZpbHRlciwgc3VwcG9ydCkge1xyXG4gIGNvbnN0IHRhYmxlID0gW107XHJcblxyXG4gIGNvbnN0IHJTY2FsZSA9IHN1cHBvcnQgKiBNYXRoLnNxcnQoMSAvIFdFSUdIVF9MT09LVVBfVEFCTEVfV0lEVEgpO1xyXG5cclxuICBmb3IgKGxldCBRID0gMDsgUSA8IFdFSUdIVF9MT09LVVBfVEFCTEVfV0lEVEg7IFErKykge1xyXG4gICAgdGFibGVbUV0gPSBmaWx0ZXIuZ2V0V2VpZ2h0KE1hdGguc3FydChRKSAqIHJTY2FsZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGFibGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICogQHBhcmFtIHF1YW50dW1SYW5nZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gY2xhbXBUb1F1YW50dW0odmFsdWUsIHF1YW50dW1SYW5nZSkge1xyXG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihxdWFudHVtUmFuZ2UsIHZhbHVlKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiA8cD5DbGFtcEVsbGlwc2VBeGVzKCkgZnVuY3Rpb24gY29udmVydHMgdGhlIGlucHV0IHZlY3RvcnMgaW50byBhIG1ham9yIGFuZFxyXG4gKiBtaW5vciBheGlzIHVuaXQgdmVjdG9ycywgYW5kIHRoZWlyIG1hZ25pdHVkZS4gIFRoaXMgYWxsb3dzIHVzIHRvXHJcbiAqIGVuc3VyZSB0aGF0IHRoZSBlbGxpcHNlIGdlbmVyYXRlZCBpcyBuZXZlciBzbWFsbGVyIHRoYW4gdGhlIHVuaXRcclxuICogY2lyY2xlIGFuZCB0aHVzIG5ldmVyIHRvbyBzbWFsbCBmb3IgdXNlIGluIEVXQSByZXNhbXBsaW5nLjwvcD5cclxuICpcclxuICogPHA+VGhpcyBwdXJlbHkgbWF0aGVtYXRpY2FsICdtYWdpYycgd2FzIHByb3ZpZGVkIGJ5IFByb2Zlc3NvciBOaWNvbGFzXHJcbiAqIFJvYmlkb3V4IGFuZCBoaXMgTWFzdGVycyBzdHVkZW50IENoYW50YWwgUmFjZXR0ZS48L3A+XHJcbiAqXHJcbiAqIDxwPlJlZmVyZW5jZTogXCJXZSBSZWNvbW1lbmQgU2luZ3VsYXIgVmFsdWUgRGVjb21wb3NpdGlvblwiLCBEYXZpZCBBdXN0aW5cclxuICogICB7QGxpbmsgaHR0cDovL3d3dy5hbXMub3JnL3NhbXBsaW5ncy9mZWF0dXJlLWNvbHVtbi9mY2FyYy1zdmR9PC9wPlxyXG4gKlxyXG4gKiA8cD5CeSBnZW5lcmF0aW5nIG1ham9yIGFuZCBtaW5vciBheGlzIHZlY3RvcnMsIHdlIGNhbiBhY3R1YWxseSB1c2UgdGhlXHJcbiAqIGVsbGlwc2UgaW4gaXRzIFwiY2Fub25pY2FsIGZvcm1cIiwgYnkgcmVtYXBwaW5nIHRoZSBkeCxkeSBvZiB0aGVcclxuICogc2FtcGxlZCBwb2ludCBpbnRvIGRpc3RhbmNlcyBhbG9uZyB0aGUgbWFqb3IgYW5kIG1pbm9yIGF4aXMgdW5pdFxyXG4gKiB2ZWN0b3JzLjwvcD5cclxuICpcclxuICogPHA+UmVmZXJlbmNlOiB7QGxpbmsgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9FbGxpcHNlI0Nhbm9uaWNhbF9mb3JtfTwvcD5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1eFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHV5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdnhcclxuICogQHBhcmFtIHtudW1iZXJ9IGR2eVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyW119XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3Jlc2FtcGxlXzhjX3NvdXJjZS5odG1sI2wwMDcwOSBDbGFtcFVwQXhlcygpIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICogQHR1dG9yaWFsIDAyLjAzLnBpeGVsLWNvbG9yLWxvb2t1cFxyXG4gKi9cclxuZnVuY3Rpb24gY2xhbXBFbGxpcHNlQXhlcyhkdXgsIGR1eSwgZHZ4LCBkdnkpIHtcclxuICAvKlxyXG4gICAqIENsYW1wVXBBeGVzIHRha2VzIGFuIGlucHV0IDJ4MiBtYXRyaXhcclxuICAgKlxyXG4gICAqIFsgYSBiIF0gPSBbIGR1eCBkdXkgXVxyXG4gICAqIFsgYyBkIF0gPSBbIGR2eCBkdnkgXVxyXG4gICAqXHJcbiAgICogYW5kIGNvbXB1dGVzIGZyb20gaXQgdGhlIG1ham9yIGFuZCBtaW5vciBheGlzIHZlY3RvcnMgW21ham9yX3gsXHJcbiAgICogbWFqb3JfeV0gYW5kIFttaW5vcl94LG1pbm9yX3ldIG9mIHRoZSBzbWFsbGVzdCBlbGxpcHNlIGNvbnRhaW5pbmdcclxuICAgKiBib3RoIHRoZSB1bml0IGRpc2sgYW5kIHRoZSBlbGxpcHNlIHdoaWNoIGlzIHRoZSBpbWFnZSBvZiB0aGUgdW5pdFxyXG4gICAqIGRpc2sgYnkgdGhlIGxpbmVhciB0cmFuc2Zvcm1hdGlvblxyXG4gICAqXHJcbiAgICogWyBkdXggZHV5IF0gW1NdID0gW3NdXHJcbiAgICogWyBkdnggZHZ5IF0gW1RdID0gW3RdXHJcbiAgICpcclxuICAgKiAoVGhlIHZlY3RvciBbUyxUXSBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgcG9zaXRpb24gaW4gb3V0cHV0XHJcbiAgICogc3BhY2UgYW5kIFtYLFldOyB0aGUgdmVjdG9yIFtzLHRdIGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYVxyXG4gICAqIHBvc2l0aW9uIGluIGlucHV0IHNwYWNlIGFuZCBbeCx5XS4pXHJcbiAgICovXHJcbiAgLypcclxuICAgKiBPdXRwdXQ6XHJcbiAgICpcclxuICAgKiBtYWpvcl9tYWcgaXMgdGhlIGhhbGYtbGVuZ3RoIG9mIHRoZSBtYWpvciBheGlzIG9mIHRoZSBcIm5ld1wiXHJcbiAgICogZWxsaXBzZS5cclxuICAgKlxyXG4gICAqIG1pbm9yX21hZyBpcyB0aGUgaGFsZi1sZW5ndGggb2YgdGhlIG1pbm9yIGF4aXMgb2YgdGhlIFwibmV3XCJcclxuICAgKiBlbGxpcHNlLlxyXG4gICAqXHJcbiAgICogbWFqb3JfdW5pdF94IGlzIHRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIG1ham9yIGF4aXMgZGlyZWN0aW9uIHZlY3RvclxyXG4gICAqIG9mIGJvdGggdGhlIFwib2xkXCIgYW5kIFwibmV3XCIgZWxsaXBzZXMuXHJcbiAgICpcclxuICAgKiBtYWpvcl91bml0X3kgaXMgdGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgbWFqb3IgYXhpcyBkaXJlY3Rpb24gdmVjdG9yLlxyXG4gICAqXHJcbiAgICogbWlub3JfdW5pdF94IGlzIHRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIG1pbm9yIGF4aXMgZGlyZWN0aW9uIHZlY3Rvci5cclxuICAgKlxyXG4gICAqIG1pbm9yX3VuaXRfeSBpcyB0aGUgeS1jb29yZGluYXRlIG9mIHRoZSBtaW5vciBheGlzIGRpcmVjdGlvbiB2ZWN0b3IuXHJcbiAgICpcclxuICAgKiBVbml0IHZlY3RvcnMgYXJlIHVzZWZ1bCBmb3IgY29tcHV0aW5nIHByb2plY3Rpb25zLCBpbiBwYXJ0aWN1bGFyLFxyXG4gICAqIHRvIGNvbXB1dGUgdGhlIGRpc3RhbmNlIGJldHdlZW4gYSBwb2ludCBpbiBvdXRwdXQgc3BhY2UgYW5kIHRoZVxyXG4gICAqIGNlbnRlciBvZiBhIHVuaXQgZGlzayBpbiBvdXRwdXQgc3BhY2UsIHVzaW5nIHRoZSBwb3NpdGlvbiBvZiB0aGVcclxuICAgKiBjb3JyZXNwb25kaW5nIHBvaW50IFtzLHRdIGluIGlucHV0IHNwYWNlLiBGb2xsb3dpbmcgdGhlIGNsYW1waW5nLFxyXG4gICAqIHRoZSBzcXVhcmUgb2YgdGhpcyBkaXN0YW5jZSBpc1xyXG4gICAqXHJcbiAgICogKCAoIHMgKiBtYWpvcl91bml0X3ggKyB0ICogbWFqb3JfdW5pdF95ICkgLyBtYWpvcl9tYWcgKV4yXHJcbiAgICogK1xyXG4gICAqICggKCBzICogbWlub3JfdW5pdF94ICsgdCAqIG1pbm9yX3VuaXRfeSApIC8gbWlub3JfbWFnICleMlxyXG4gICAqXHJcbiAgICogSWYgc3VjaCBkaXN0YW5jZXMgd2lsbCBiZSBjb21wdXRlZCBmb3IgbWFueSBbcyx0XSdzLCBpdCBtYWtlc1xyXG4gICAqIHNlbnNlIHRvIGFjdHVhbGx5IGNvbXB1dGUgdGhlIHJlY2lwcm9jYWwgb2YgbWFqb3JfbWFnIGFuZFxyXG4gICAqIG1pbm9yX21hZyBhbmQgbXVsdGlwbHkgdGhlbSBieSB0aGUgYWJvdmUgdW5pdCBsZW5ndGhzLlxyXG4gICAqXHJcbiAgICogTm93LCBpZiB5b3Ugd2FudCB0byBtb2RpZnkgdGhlIGlucHV0IHBhaXIgb2YgdGFuZ2VudCB2ZWN0b3JzIHNvXHJcbiAgICogdGhhdCBpdCBkZWZpbmVzIHRoZSBtb2RpZmllZCBlbGxpcHNlLCBhbGwgeW91IGhhdmUgdG8gZG8gaXMgc2V0XHJcbiAgICpcclxuICAgKiBuZXdkdXggPSBtYWpvcl9tYWcgKiBtYWpvcl91bml0X3hcclxuICAgKiBuZXdkdnggPSBtYWpvcl9tYWcgKiBtYWpvcl91bml0X3lcclxuICAgKiBuZXdkdXkgPSBtaW5vcl9tYWcgKiBtaW5vcl91bml0X3ggPSBtaW5vcl9tYWcgKiAtbWFqb3JfdW5pdF95XHJcbiAgICogbmV3ZHZ5ID0gbWlub3JfbWFnICogbWlub3JfdW5pdF95ID0gbWlub3JfbWFnICogIG1ham9yX3VuaXRfeFxyXG4gICAqXHJcbiAgICogYW5kIHVzZSB0aGVzZSB0YW5nZW50IHZlY3RvcnMgYXMgaWYgdGhleSB3ZXJlIHRoZSBvcmlnaW5hbCBvbmVzLlxyXG4gICAqIFVzdWFsbHksIHRoaXMgaXMgYSBkcmFzdGljIGNoYW5nZSBpbiB0aGUgdGFuZ2VudCB2ZWN0b3JzIGV2ZW4gaWZcclxuICAgKiB0aGUgc2luZ3VsYXIgdmFsdWVzIGFyZSBub3QgY2xhbXBlZDsgZm9yIGV4YW1wbGUsIHRoZSBtaW5vciBheGlzXHJcbiAgICogdmVjdG9yIGFsd2F5cyBwb2ludHMgaW4gYSBkaXJlY3Rpb24gd2hpY2ggaXMgOTAgZGVncmVlc1xyXG4gICAqIGNvdW50ZXJjbG9ja3dpc2UgZnJvbSB0aGUgZGlyZWN0aW9uIG9mIHRoZSBtYWpvciBheGlzIHZlY3Rvci5cclxuICAgKi9cclxuICAvKlxyXG4gICAqIERpc2N1c3Npb246XHJcbiAgICpcclxuICAgKiBHT0FMOiBGaXggdGhpbmdzIHNvIHRoYXQgdGhlIHB1bGxiYWNrLCBpbiBpbnB1dCBzcGFjZSwgb2YgYSBkaXNrXHJcbiAgICogb2YgcmFkaXVzIHIgaW4gb3V0cHV0IHNwYWNlIGlzIGFuIGVsbGlwc2Ugd2hpY2ggY29udGFpbnMsIGF0XHJcbiAgICogbGVhc3QsIGEgZGlzYyBvZiByYWRpdXMgci4gKE1ha2UgdGhpcyBob2xkIGZvciBhbnkgcj4wLilcclxuICAgKlxyXG4gICAqIEVTU0VOQ0UgT0YgVEhFIE1FVEhPRDogQ29tcHV0ZSB0aGUgcHJvZHVjdCBvZiB0aGUgZmlyc3QgdHdvXHJcbiAgICogZmFjdG9ycyBvZiBhbiBTVkQgb2YgdGhlIGxpbmVhciB0cmFuc2Zvcm1hdGlvbiBkZWZpbmluZyB0aGVcclxuICAgKiBlbGxpcHNlIGFuZCBtYWtlIHN1cmUgdGhhdCBib3RoIGl0cyBjb2x1bW5zIGhhdmUgbm9ybSBhdCBsZWFzdCAxLlxyXG4gICAqIEJlY2F1c2Ugcm90YXRpb25zIGFuZCByZWZsZXhpb25zIG1hcCBkaXNrcyB0byB0aGVtc2VsdmVzLCBpdCBpc1xyXG4gICAqIG5vdCBuZWNlc3NhcnkgdG8gY29tcHV0ZSB0aGUgdGhpcmQgKHJpZ2h0bW9zdCkgZmFjdG9yIG9mIHRoZSBTVkQuXHJcbiAgICpcclxuICAgKiBERVRBSUxTOiBGaW5kIHRoZSBzaW5ndWxhciB2YWx1ZXMgYW5kICh1bml0KSBsZWZ0IHNpbmd1bGFyXHJcbiAgICogdmVjdG9ycyBvZiBKaW52LCBjbGFtcGxpbmcgdXAgdGhlIHNpbmd1bGFyIHZhbHVlcyB0byAxLCBhbmRcclxuICAgKiBtdWx0aXBseSB0aGUgdW5pdCBsZWZ0IHNpbmd1bGFyIHZlY3RvcnMgYnkgdGhlIG5ldyBzaW5ndWxhclxyXG4gICAqIHZhbHVlcyBpbiBvcmRlciB0byBnZXQgdGhlIG1pbm9yIGFuZCBtYWpvciBlbGxpcHNlIGF4aXMgdmVjdG9ycy5cclxuICAgKlxyXG4gICAqIEltYWdlIHJlc2FtcGxpbmcgY29udGV4dDpcclxuICAgKlxyXG4gICAqIFRoZSBKYWNvYmlhbiBtYXRyaXggb2YgdGhlIHRyYW5zZm9ybWF0aW9uIGF0IHRoZSBvdXRwdXQgcG9pbnRcclxuICAgKiB1bmRlciBjb25zaWRlcmF0aW9uIGlzIGRlZmluZWQgYXMgZm9sbG93czpcclxuICAgKlxyXG4gICAqIENvbnNpZGVyIHRoZSB0cmFuc2Zvcm1hdGlvbiAoeCx5KSAtPiAoWCxZKSBmcm9tIGlucHV0IGxvY2F0aW9uc1xyXG4gICAqIHRvIG91dHB1dCBsb2NhdGlvbnMuIChBbnRob255IFRoeXNzZW4sIGVsc2V3aGVyZSBpbiByZXNhbXBsZS5jLFxyXG4gICAqIHVzZXMgdGhlIG5vdGF0aW9uICh1LHYpIC0+ICh4LHkpLilcclxuICAgKlxyXG4gICAqIFRoZSBKYWNvYmlhbiBtYXRyaXggb2YgdGhlIHRyYW5zZm9ybWF0aW9uIGF0ICh4LHkpIGlzIGVxdWFsIHRvXHJcbiAgICpcclxuICAgKiAgIEogPSBbIEEsIEIgXSA9IFsgZFgvZHgsIGRYL2R5IF1cclxuICAgKiAgICAgICBbIEMsIEQgXSAgIFsgZFkvZHgsIGRZL2R5IF1cclxuICAgKlxyXG4gICAqIHRoYXQgaXMsIHRoZSB2ZWN0b3IgW0EsQ10gaXMgdGhlIHRhbmdlbnQgdmVjdG9yIGNvcnJlc3BvbmRpbmcgdG9cclxuICAgKiBpbnB1dCBjaGFuZ2VzIGluIHRoZSBob3Jpem9udGFsIGRpcmVjdGlvbiwgYW5kIHRoZSB2ZWN0b3IgW0IsRF1cclxuICAgKiBpcyB0aGUgdGFuZ2VudCB2ZWN0b3IgY29ycmVzcG9uZGluZyB0byBpbnB1dCBjaGFuZ2VzIGluIHRoZVxyXG4gICAqIHZlcnRpY2FsIGRpcmVjdGlvbi5cclxuICAgKlxyXG4gICAqIEluIHRoZSBjb250ZXh0IG9mIHJlc2FtcGxpbmcsIGl0IGlzIG5hdHVyYWwgdG8gdXNlIHRoZSBpbnZlcnNlXHJcbiAgICogSmFjb2JpYW4gbWF0cml4IEppbnYgYmVjYXVzZSByZXNhbXBsaW5nIGlzIGdlbmVyYWxseSBwZXJmb3JtZWQgYnlcclxuICAgKiBwdWxsaW5nIHBpeGVsIGxvY2F0aW9ucyBpbiB0aGUgb3V0cHV0IGltYWdlIGJhY2sgdG8gbG9jYXRpb25zIGluXHJcbiAgICogdGhlIGlucHV0IGltYWdlLiBKaW52IGlzXHJcbiAgICpcclxuICAgKiAgIEppbnYgPSBbIGEsIGIgXSA9IFsgZHgvZFgsIGR4L2RZIF1cclxuICAgKiAgICAgICAgICBbIGMsIGQgXSAgIFsgZHkvZFgsIGR5L2RZIF1cclxuICAgKlxyXG4gICAqIE5vdGU6IEppbnYgY2FuIGJlIGNvbXB1dGVkIGZyb20gSiB3aXRoIHRoZSBmb2xsb3dpbmcgbWF0cml4XHJcbiAgICogZm9ybXVsYTpcclxuICAgKlxyXG4gICAqICAgSmludiA9IDEvKEEqRC1CKkMpIFsgIEQsIC1CIF1cclxuICAgKiAgICAgICAgICAgICAgICAgICAgICBbIC1DLCAgQSBdXHJcbiAgICpcclxuICAgKiBXaGF0IHdlIGRvIGlzIG1vZGlmeSBKaW52IHNvIHRoYXQgaXQgZ2VuZXJhdGVzIGFuIGVsbGlwc2Ugd2hpY2hcclxuICAgKiBpcyBhcyBjbG9zZSBhcyBwb3NzaWJsZSB0byB0aGUgb3JpZ2luYWwgYnV0IHdoaWNoIGNvbnRhaW5zIHRoZVxyXG4gICAqIHVuaXQgZGlzay4gVGhpcyBjYW4gYmUgYWNjb21wbGlzaGVkIGFzIGZvbGxvd3M6XHJcbiAgICpcclxuICAgKiBMZXRcclxuICAgKlxyXG4gICAqICAgSmludiA9IFUgU2lnbWEgVl5UXHJcbiAgICpcclxuICAgKiBiZSBhbiBTVkQgZGVjb21wb3NpdGlvbiBvZiBKaW52LiAoVGhlIFNWRCBpcyBub3QgdW5pcXVlLCBidXQgdGhlXHJcbiAgICogZmluYWwgZWxsaXBzZSBkb2VzIG5vdCBkZXBlbmQgb24gdGhlIHBhcnRpY3VsYXIgU1ZELilcclxuICAgKlxyXG4gICAqIFdlIGNvdWxkIGNsYW1wIHVwIHRoZSBlbnRyaWVzIG9mIHRoZSBkaWFnb25hbCBtYXRyaXggU2lnbWEgc29cclxuICAgKiB0aGF0IHRoZXkgYXJlIGF0IGxlYXN0IDEsIGFuZCB0aGVuIHNldFxyXG4gICAqXHJcbiAgICogICBKaW52ID0gVSBuZXdTaWdtYSBWXlQuXHJcbiAgICpcclxuICAgKiBIb3dldmVyLCB3ZSBkbyBub3QgbmVlZCB0byBjb21wdXRlIFYgZm9yIHRoZSBmb2xsb3dpbmcgcmVhc29uOlxyXG4gICAqIFZeVCBpcyBhbiBvcnRob2dvbmFsIG1hdHJpeCAodGhhdCBpcywgaXQgcmVwcmVzZW50cyBhIGNvbWJpbmF0aW9uXHJcbiAgICogb2Ygcm90YXRpb25zIGFuZCByZWZsZXhpb25zKSBzbyB0aGF0IGl0IG1hcHMgdGhlIHVuaXQgY2lyY2xlIHRvXHJcbiAgICogaXRzZWxmLiBGb3IgdGhpcyByZWFzb24sIHRoZSBleGFjdCB2YWx1ZSBvZiBWIGRvZXMgbm90IGFmZmVjdCB0aGVcclxuICAgKiBmaW5hbCBlbGxpcHNlLCBhbmQgd2UgY2FuIGNob29zZSBWIHRvIGJlIHRoZSBpZGVudGl0eVxyXG4gICAqIG1hdHJpeC4gVGhpcyBnaXZlc1xyXG4gICAqXHJcbiAgICogICBKaW52ID0gVSBuZXdTaWdtYS5cclxuICAgKlxyXG4gICAqIEluIHRoZSBlbmQsIHdlIHJldHVybiB0aGUgdHdvIGRpYWdvbmFsIGVudHJpZXMgb2YgbmV3U2lnbWFcclxuICAgKiB0b2dldGhlciB3aXRoIHRoZSB0d28gY29sdW1ucyBvZiBVLlxyXG4gICAqL1xyXG4gIC8qXHJcbiAgICogQ2xhbXBVcEF4ZXMgd2FzIHdyaXR0ZW4gYnkgTmljb2xhcyBSb2JpZG91eCBhbmQgQ2hhbnRhbCBSYWNldHRlXHJcbiAgICogb2YgTGF1cmVudGlhbiBVbml2ZXJzaXR5IHdpdGggaW5zaWdodGZ1bCBzdWdnZXN0aW9ucyBmcm9tIEFudGhvbnlcclxuICAgKiBUaHlzc2VuIGFuZCBmdW5kaW5nIGZyb20gdGhlIE5hdGlvbmFsIFNjaWVuY2UgYW5kIEVuZ2luZWVyaW5nXHJcbiAgICogUmVzZWFyY2ggQ291bmNpbCBvZiBDYW5hZGEuIEl0IGlzIGRpc3Rpbmd1aXNoZWQgZnJvbSBpdHNcclxuICAgKiBwcmVkZWNlc3NvcnMgYnkgaXRzIGVmZmljaWVudCBoYW5kbGluZyBvZiBkZWdlbmVyYXRlIGNhc2VzLlxyXG4gICAqXHJcbiAgICogVGhlIGlkZWEgb2YgY2xhbXBpbmcgdXAgdGhlIEVXQSBlbGxpcHNlJ3MgbWFqb3IgYW5kIG1pbm9yIGF4ZXMgc29cclxuICAgKiB0aGF0IHRoZSByZXN1bHQgY29udGFpbnMgdGhlIHJlY29uc3RydWN0aW9uIGtlcm5lbCBmaWx0ZXIgc3VwcG9ydFxyXG4gICAqIGlzIHRha2VuIGZyb20gQW5kcmVhcyBHdXN0YWZmc29uJ3MgTWFzdGVycyB0aGVzaXMgXCJJbnRlcmFjdGl2ZVxyXG4gICAqIEltYWdlIFdhcnBpbmdcIiwgSGVsc2lua2kgVW5pdmVyc2l0eSBvZiBUZWNobm9sb2d5LCBGYWN1bHR5IG9mXHJcbiAgICogSW5mb3JtYXRpb24gVGVjaG5vbG9neSwgNTkgcGFnZXMsIDE5OTMgKHNlZSBTZWN0aW9uIDMuNikuXHJcbiAgICpcclxuICAgKiBUaGUgdXNlIG9mIHRoZSBTVkQgdG8gY2xhbXAgdXAgdGhlIHNpbmd1bGFyIHZhbHVlcyBvZiB0aGVcclxuICAgKiBKYWNvYmlhbiBtYXRyaXggb2YgdGhlIHB1bGxiYWNrIHRyYW5zZm9ybWF0aW9uIGZvciBFV0EgcmVzYW1wbGluZ1xyXG4gICAqIGlzIHRha2VuIGZyb20gdGhlIGFzdHJvcGh5c2ljaXN0IENyYWlnIERlRm9yZXN0LiAgSXQgaXNcclxuICAgKiBpbXBsZW1lbnRlZCBpbiBoaXMgUERMOjpUcmFuc2Zvcm0gY29kZSAoUERMID0gUGVybCBEYXRhXHJcbiAgICogTGFuZ3VhZ2UpLlxyXG4gICAqL1xyXG5cclxuICBjb25zdCBhID0gZHV4O1xyXG4gIGNvbnN0IGIgPSBkdXk7XHJcbiAgY29uc3QgYyA9IGR2eDtcclxuICBjb25zdCBkID0gZHZ5O1xyXG5cclxuICAvKlxyXG4gICAqIG4gaXMgdGhlIG1hdHJpeCBKaW52ICogdHJhbnNwb3NlKEppbnYpLiBFaWdlbnZhbHVlcyBvZiBuIGFyZSB0aGVcclxuICAgKiBzcXVhcmVzIG9mIHRoZSBzaW5ndWxhciB2YWx1ZXMgb2YgSmludi5cclxuICAgKi9cclxuICBjb25zdCBhYSA9IGEgKiBhO1xyXG4gIGNvbnN0IGJiID0gYiAqIGI7XHJcbiAgY29uc3QgY2MgPSBjICogYztcclxuICBjb25zdCBkZCA9IGQgKiBkO1xyXG5cclxuICAvKlxyXG4gICAqIEVpZ2VudmVjdG9ycyBvZiBuIGFyZSBsZWZ0IHNpbmd1bGFyIHZlY3RvcnMgb2YgSmludi5cclxuICAgKi9cclxuICBjb25zdCBuMTEgPSBhYSArIGJiO1xyXG4gIGNvbnN0IG4xMiA9IGEgKiBjICsgYiAqIGQ7XHJcbiAgY29uc3QgbjIxID0gbjEyO1xyXG4gIGNvbnN0IG4yMiA9IGNjICsgZGQ7XHJcbiAgY29uc3QgZGV0ID0gYSAqIGQgLSBiICogYztcclxuICBjb25zdCB0d2ljZV9kZXQgPSBkZXQgKyBkZXQ7XHJcbiAgY29uc3QgZnJvYmVuaXVzX3NxdWFyZWQgPSBuMTEgKyBuMjI7XHJcbiAgY29uc3QgZGlzY3JpbWluYW50ID0gKGZyb2Jlbml1c19zcXVhcmVkICsgdHdpY2VfZGV0KSAqIChmcm9iZW5pdXNfc3F1YXJlZCAtIHR3aWNlX2RldCk7XHJcblxyXG4gIC8qXHJcbiAgICogSW4gZXhhY3QgYXJpdGhtZXRpYywgZGlzY3JpbWluYW50IGNhbid0IGJlIG5lZ2F0aXZlLiBJbiBmbG9hdGluZ1xyXG4gICAqIHBvaW50LCBpdCBjYW4sIGJlY2F1c2Ugb2YgdGhlIGJhZCBjb25kaXRpb25pbmcgb2YgU1ZEXHJcbiAgICogZGVjb21wb3NpdGlvbnMgZG9uZSB0aHJvdWdoIHRoZSBhc3NvY2lhdGVkIG5vcm1hbCBtYXRyaXguXHJcbiAgICovXHJcbiAgY29uc3Qgc3FydF9kaXNjcmltaW5hbnQgPSBNYXRoLnNxcnQoZGlzY3JpbWluYW50ID4gMCA/IGRpc2NyaW1pbmFudCA6IDApO1xyXG5cclxuICAvKlxyXG4gICAqIHMxIGlzIHRoZSBsYXJnZXN0IHNpbmd1bGFyIHZhbHVlIG9mIHRoZSBpbnZlcnNlIEphY29iaWFuXHJcbiAgICogbWF0cml4LiBJbiBvdGhlciB3b3JkcywgaXRzIHJlY2lwcm9jYWwgaXMgdGhlIHNtYWxsZXN0IHNpbmd1bGFyXHJcbiAgICogdmFsdWUgb2YgdGhlIEphY29iaWFuIG1hdHJpeCBpdHNlbGYuXHJcbiAgICogSWYgczEgPSAwLCBib3RoIHNpbmd1bGFyIHZhbHVlcyBhcmUgMCwgYW5kIGFueSBvcnRob2dvbmFsIHBhaXIgb2ZcclxuICAgKiBsZWZ0IGFuZCByaWdodCBmYWN0b3JzIHByb2R1Y2VzIGEgc2luZ3VsYXIgZGVjb21wb3NpdGlvbiBvZiBKaW52LlxyXG4gICAqL1xyXG4gIC8qXHJcbiAgICogSW5pdGlhbGx5LCB3ZSBvbmx5IGNvbXB1dGUgdGhlIHNxdWFyZXMgb2YgdGhlIHNpbmd1bGFyIHZhbHVlcy5cclxuICAgKi9cclxuICBjb25zdCBzMXMxID0gMC41ICogKGZyb2Jlbml1c19zcXVhcmVkICsgc3FydF9kaXNjcmltaW5hbnQpO1xyXG5cclxuICAvKlxyXG4gICAqIHMyIHRoZSBzbWFsbGVzdCBzaW5ndWxhciB2YWx1ZSBvZiB0aGUgaW52ZXJzZSBKYWNvYmlhblxyXG4gICAqIG1hdHJpeC4gSXRzIHJlY2lwcm9jYWwgaXMgdGhlIGxhcmdlc3Qgc2luZ3VsYXIgdmFsdWUgb2YgdGhlXHJcbiAgICogSmFjb2JpYW4gbWF0cml4IGl0c2VsZi5cclxuICAgKi9cclxuICBjb25zdCBzMnMyID0gMC41ICogKGZyb2Jlbml1c19zcXVhcmVkIC0gc3FydF9kaXNjcmltaW5hbnQpO1xyXG4gIGNvbnN0IHMxczFtaW51c24xMSA9IHMxczEgLSBuMTE7XHJcbiAgY29uc3QgczFzMW1pbnVzbjIyID0gczFzMSAtIG4yMjtcclxuXHJcbiAgLypcclxuICAgKiB1MSwgdGhlIGZpcnN0IGNvbHVtbiBvZiB0aGUgVSBmYWN0b3Igb2YgYSBzaW5ndWxhciBkZWNvbXBvc2l0aW9uXHJcbiAgICogb2YgSmludiwgaXMgYSAobm9uLW5vcm1hbGl6ZWQpIGxlZnQgc2luZ3VsYXIgdmVjdG9yIGNvcnJlc3BvbmRpbmdcclxuICAgKiB0byBzMS4gSXQgaGFzIGVudHJpZXMgdTExIGFuZCB1MjEuIFdlIGNvbXB1dGUgdTEgZnJvbSB0aGUgZmFjdFxyXG4gICAqIHRoYXQgaXQgaXMgYW4gZWlnZW52ZWN0b3Igb2YgbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBlaWdlbnZhbHVlXHJcbiAgICogczFeMi5cclxuICAgKi9cclxuICBjb25zdCBzMXMxbWludXNuMTFfc3F1YXJlZCA9IHMxczFtaW51c24xMSAqIHMxczFtaW51c24xMTtcclxuICBjb25zdCBzMXMxbWludXNuMjJfc3F1YXJlZCA9IHMxczFtaW51c24yMiAqIHMxczFtaW51c24yMjtcclxuXHJcbiAgLypcclxuICAgKiBUaGUgZm9sbG93aW5nIHNlbGVjdHMgdGhlIGxhcmdlc3Qgcm93IG9mIG4tczFeMiBJIGFzIHRoZSBvbmVcclxuICAgKiB3aGljaCBpcyB1c2VkIHRvIGZpbmQgdGhlIGVpZ2VudmVjdG9yLiBJZiBib3RoIHMxXjItbjExIGFuZFxyXG4gICAqIHMxXjItbjIyIGFyZSB6ZXJvLCBuLXMxXjIgSSBpcyB0aGUgemVybyBtYXRyaXguICBJbiB0aGF0IGNhc2UsXHJcbiAgICogYW55IHZlY3RvciBpcyBhbiBlaWdlbnZlY3RvcjsgaW4gYWRkaXRpb24sIG5vcm0gYmVsb3cgaXMgZXF1YWwgdG9cclxuICAgKiB6ZXJvLCBhbmQsIGluIGV4YWN0IGFyaXRobWV0aWMsIHRoaXMgaXMgdGhlIG9ubHkgY2FzZSBpbiB3aGljaFxyXG4gICAqIG5vcm0gPSAwLiBTbywgc2V0dGluZyB1MSB0byB0aGUgc2ltcGxlIGJ1dCBhcmJpdHJhcnkgdmVjdG9yIFsxLDBdXHJcbiAgICogaWYgbm9ybSA9IDAgc2FmZWx5IHRha2VzIGNhcmUgb2YgYWxsIGNhc2VzLlxyXG4gICAqL1xyXG4gIGNvbnN0IHRlbXBfdTExID0gKHMxczFtaW51c24xMV9zcXVhcmVkID49IHMxczFtaW51c24yMl9zcXVhcmVkKSA/IG4xMiA6IHMxczFtaW51c24yMjtcclxuICBjb25zdCB0ZW1wX3UyMSA9IChzMXMxbWludXNuMTFfc3F1YXJlZCA+PSBzMXMxbWludXNuMjJfc3F1YXJlZCkgPyBzMXMxbWludXNuMTEgOiBuMjE7XHJcbiAgY29uc3Qgbm9ybSA9IE1hdGguc3FydCh0ZW1wX3UxMSAqIHRlbXBfdTExICsgdGVtcF91MjEgKiB0ZW1wX3UyMSk7XHJcblxyXG4gIC8qXHJcbiAgICogRmluYWxpemUgdGhlIGVudHJpZXMgb2YgZmlyc3QgbGVmdCBzaW5ndWxhciB2ZWN0b3IgKGFzc29jaWF0ZWRcclxuICAgKiB3aXRoIHRoZSBsYXJnZXN0IHNpbmd1bGFyIHZhbHVlKS5cclxuICAgKi9cclxuICBjb25zdCB1MTEgPSBub3JtID4gMCA/IHRlbXBfdTExIC8gbm9ybSA6IDE7XHJcbiAgY29uc3QgdTIxID0gbm9ybSA+IDAgPyB0ZW1wX3UyMSAvIG5vcm0gOiAwO1xyXG5cclxuICAvKlxyXG4gICAqIENsYW1wIHRoZSBzaW5ndWxhciB2YWx1ZXMgdXAgdG8gMS5cclxuICAgKi9cclxuICBjb25zdCBtYWpvcl9tYWcgPSBzMXMxIDw9IDEgPyAxIDogTWF0aC5zcXJ0KHMxczEpO1xyXG4gIGNvbnN0IG1pbm9yX21hZyA9IHMyczIgPD0gMSA/IDEgOiBNYXRoLnNxcnQoczJzMik7XHJcblxyXG5cclxuICBjb25zdCBtYWpvcl94ID0gdTExICogbWFqb3JfbWFnO1xyXG4gIGNvbnN0IG1ham9yX3kgPSB1MjEgKiBtYWpvcl9tYWc7XHJcbiAgY29uc3QgbWlub3JfeCA9IC11MjEgKiBtaW5vcl9tYWc7XHJcbiAgY29uc3QgbWlub3JfeSA9IHUxMSAqIG1pbm9yX21hZztcclxuXHJcbiAgcmV0dXJuIFtcclxuICAgIG1ham9yX3gsXHJcbiAgICBtYWpvcl95LFxyXG4gICAgbWlub3JfeCxcclxuICAgIG1pbm9yX3ksXHJcbiAgICBtYWpvcl9tYWcsXHJcbiAgICBtaW5vcl9tYWdcclxuICBdO1xyXG59XHJcblxyXG4vKipcclxuICogRWxsaXB0aWNhbCBXZWlnaHRlZCBBdmVyYWdlLlxyXG4gKiBSZXNhbXBsZXMgcGl4ZWwgY29sb3IgdXNpbmcgRWxsaXB0aWNhbCBXZWlnaHRlZCBBdmVyYWdlIHRlY2huaXF1ZS5cclxuICpcclxuICogQGltcGxlbWVudHMge1Jlc2FtcGxlckludGVyZmFjZX1cclxuICogQG1lbWJlck9mIGxlbnMucmVzYW1wbGVyXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9kaXN0b3J0cy8jZGlzdG9ydF9ld2EgRVdBIGRldGFpbHN9IGF0IEltYWdlTWFnaWNrIGRvY3MuXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3Mi5lZWNzLmJlcmtlbGV5LmVkdS9QdWJzL1RlY2hScHRzLzE5ODkvQ1NELTg5LTUxNi5wZGYgRnVuZGFtZW50YWxzIG9mIFRleHR1cmUgTWFwcGluZyBhbmQgSW1hZ2UgV2FycGluZyBieSBQYXVsIFMuIEhlY2tiZXJ0fVxyXG4gKiBwYWdlIDQxLCBzZWN0aW9uIDMuNCwgMy41XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3Jlc2FtcGxlXzhjX3NvdXJjZS5odG1sI2wwMTAzOCBTY2FsZVJlc2FtcGxlRmlsdGVyKCl9IGF0XHJcbiAqIEltYWdlTWFnaWNrIHNvdXJjZS5cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvcmVzYW1wbGVfOGNfc291cmNlLmh0bWwjbDAwMzE1IFJlc2FtcGxlUGl4ZWxDb2xvcigpfSBhdFxyXG4gKiBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAqL1xyXG5jbGFzcyBFV0Ege1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RmlsdGVySW50ZXJmYWNlfSBmaWx0ZXJcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihmaWx0ZXIpIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVjb25zdHJ1Y3Rpb24gZmlsdGVyLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge0ZpbHRlckludGVyZmFjZX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXNpemVGaWx0ZXIgPSBmaWx0ZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcHJhY3RpY2FsIHdvcmtpbmcgc3VwcG9ydCBvZiB0aGUgZmlsdGVyXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnN1cHBvcnQgPSB0aGlzLnJlc2l6ZUZpbHRlci5zdXBwb3J0ICogdGhpcy5yZXNpemVGaWx0ZXIuYmx1cjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hdHRlIGNvbG9yIGZvciBpbnZhbGlkIG1hcHBpbmdzLlxyXG4gICAgICogQHR5cGUge0NvbG9yfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1hdHRlQ29sb3IgPSBbMCwgMCwgMCwgMF07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb29rdXAgdGFibGUgb2Ygd2VpZ2h0cyBmb3IgZmlsdGVyZWQgYXZlcmFnZSBpbiBlbGxpcHRpY2FsIGFyZWEuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyW119XHJcbiAgICAgKi9cclxuICAgIHRoaXMud2VpZ2h0TG9va3VwVGFibGUgPSBidWlsZFdlaWdodExvb2t1cFRhYmxlKHRoaXMucmVzaXplRmlsdGVyLCB0aGlzLnN1cHBvcnQpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1hZ2UgYmVpbmcgcmVzYW1wbGVkLlxyXG4gICAgICogQHR5cGUge0ltYWdlSW50ZXJmYWNlfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3RvcnRpb24gbWFwcGVyLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge0Rpc3RvcnRpb25JbnRlcmZhY2V9XHJcbiAgICAgKi9cclxuICAgIHRoaXMubWFwcGVyID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhY2hlZCBmb3IgZGlyZWN0IGFjY2VzcyBpbWFnZSB2aXJ0dWFsIHZpZXdwb3J0LlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge2xlbnMuVmlld3BvcnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaW1hZ2VWaWV3cG9ydCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWNoZWQgaW1hZ2UgYXJlYS5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaW1hZ2VBcmVhID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhY2hlZCBmb3IgZGlyZWN0IGFjY2VzcyBpbWFnZSB2aXJ0dWFsIHBpeGVsIG1ldGhvZC5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtsZW5zLnZweH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5pbWFnZVZpcnR1YWxQaXhlbE1ldGhvZCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWNoZWQgaW1hZ2UgYXZlcmFnZSBjb2xvci5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtDb2xvcnxudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmltYWdlQXZlcmFnZUNvbG9yID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVsbGlwc2UgZXF1aWF0aW9uIEEuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLkEgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRWxsaXBzZSBlcXVhdGlvbiBCLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5CID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVsbGlwc2UgZXF1YXRpb24gQy5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuQyA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbGxpcHNlIGVxdWF0aW9uIEYuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLkYgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy51TGltaXQgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy52TGltaXQgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy51V2lkdGggPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5zbG9wZSA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIGZvciBkaXN0b3J0aW9ucyB3aXRoIGNvbnN0YW50IHBhcnRpYWwgZGVyaXZhdGl2ZXMgdG8gZmxhZyB0aGF0IGVsbGlwc2UgYWxyZWFkeSBoYXMgYmVlbiBzZXQgdXAuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5lbGxpcHNlSXNTZXRVcCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmxhZ3MgdGhhdCBlbGxpcHNlIGlzIHRvbyBsYXJnZSBhbmQgaXQgaXMgaW1wcmFjdGljYWwgdG8gcmVzYW1wbGUgY29sb3IgLS0gYmV0dGVyIHVzZSBzb21lIG9mIHBvc3NpYmxlXHJcbiAgICAgKiBvcHRpbWl6YXRpb25zLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMubGltaXRSZWFjaGVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgaW1hZ2Ugc2NhbGluZyBmYWN0b3IuXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnNjYWxpbmcgPSAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRSZXNhbXBsZWRDb2xvcih4LCB5KSB7XHJcbiAgICB4ID0geCAqIHRoaXMuc2NhbGluZztcclxuICAgIHkgPSB5ICogdGhpcy5zY2FsaW5nO1xyXG5cclxuICAgIGNvbnN0IHZhbGlkaXR5ID0gdGhpcy5tYXBwZXIuZ2V0VmFsaWRpdHkoeCwgeSwgdGhpcy5zY2FsaW5nKTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHkgPiAwKSB7XHJcbiAgICAgIGNvbnN0IFt1LCB2XSA9IHRoaXMubWFwcGVyLnJldmVyc2VNYXAoeCwgeSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5tYXBwZXIuaGFzQ29uc3RhbnRQYXJ0aWFsRGVyaXZhdGl2ZXMpIHtcclxuICAgICAgICB0aGlzLnNldHVwRWxsaXBzZU9uY2UoLi4udGhpcy5tYXBwZXIuZ2V0UGFydGlhbERlcml2YXRpdmVzKHgsIHkpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldHVwRWxsaXBzZSguLi50aGlzLm1hcHBlci5nZXRQYXJ0aWFsRGVyaXZhdGl2ZXMoeCwgeSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuZ2V0V2VpZ2h0ZWRBdmVyYWdlKHUsIHYpO1xyXG5cclxuICAgICAgaWYgKHZhbGlkaXR5IDwgMSkge1xyXG4gICAgICAgIHJldHVybiBibGVuZENvbG9ycyhjb2xvciwgdmFsaWRpdHksIHRoaXMubWF0dGVDb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5tYXR0ZUNvbG9yLnNsaWNlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHNldEltYWdlKGltYWdlKSB7XHJcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAvLyBjYWNoZSBpbWFnZSB2aWV3cG9ydCBmb3IgZmFzdGVyIGRpcmVjdCBhY2Nlc3MuXHJcbiAgICB0aGlzLmltYWdlVmlld3BvcnQgPSB0aGlzLmltYWdlLnZpZXdwb3J0O1xyXG4gICAgLy8gY2FjaGUgaW1hZ2UgYXJlYS5cclxuICAgIHRoaXMuaW1hZ2VBcmVhID0gdGhpcy5pbWFnZVZpZXdwb3J0LmFyZWEoKTtcclxuICAgIC8vIGNhY2hlIGltYWdlIHZpcnR1YWwgcGl4ZWwgbWV0aG9kICh3aWxsIGl0IGJlIGZhc3RlciBhY3R1YWxseT8pXHJcbiAgICB0aGlzLmltYWdlVmlydHVhbFBpeGVsTWV0aG9kID0gdGhpcy5pbWFnZS52aXJ0dWFsUGl4ZWxNZXRob2Q7XHJcbiAgICAvLyByZXNldCBjYWNoZWQgaW1hZ2UgYXZlcmFnZSBjb2xvclxyXG4gICAgdGhpcy5pbWFnZUF2ZXJhZ2VDb2xvciA9IG51bGw7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc2V0TWFwcGVyKG1hcHBlcikge1xyXG4gICAgaWYgKCFtYXBwZXIuaGFzUGFydGlhbERlcml2YXRpdmVzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGl4ZWwgbWFwcGVyIG11c3QgaGF2ZSBwYXJ0aWFsIGRlcml2YXRpdmVzIHRvIHVzZSB0aGlzIHJlc2FtcGxlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWFwcGVyID0gbWFwcGVyO1xyXG4gICAgdGhpcy5lbGxpcHNlSXNTZXRVcCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlcyBlbGxpcHNlIG9uY2UgZm9yIGRpc3RvcnRpb25zIHdpdGggY29uc3RhbnQgcGFydGlhbCBkZXJpdmF0aXZlcy5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIGRlcml2YXRpdmVzXHJcbiAgICogQHJldHVybnMge2xlbnMucmVzYW1wbGVyLkVXQX1cclxuICAgKi9cclxuICBzZXR1cEVsbGlwc2VPbmNlKC4uLmRlcml2YXRpdmVzKSB7XHJcbiAgICBpZiAoIXRoaXMuZWxsaXBzZUlzU2V0VXApIHtcclxuICAgICAgdGhpcy5lbGxpcHNlSXNTZXRVcCA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldHVwRWxsaXBzZSguLi5kZXJpdmF0aXZlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGVzIGVsbGlwc2UgZm9yIEVXQSByZXNhbXBsaW5nIHVzaW5nIHBhcnRpYWwgZGVyaXZhdGl2ZXMuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSBkZXJpdmF0aXZlc1xyXG4gICAqIEByZXR1cm5zIHtsZW5zLnJlc2FtcGxlci5FV0F9XHJcbiAgICovXHJcbiAgc2V0dXBFbGxpcHNlKC4uLmRlcml2YXRpdmVzKSB7XHJcbiAgICB0aGlzLmxpbWl0UmVhY2hlZCA9IGZhbHNlO1xyXG5cclxuICAgIGRlcml2YXRpdmVzID0gZGVyaXZhdGl2ZXMubWFwKGRlcml2YXRpdmUgPT4gZGVyaXZhdGl2ZSAqIHRoaXMuc2NhbGluZyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaW5pdEVsbGlwc2UoLi4uZGVyaXZhdGl2ZXMpXHJcbiAgICAgIC5zY2FsZUVsbGlwc2UoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZXMgZWxsaXBzZSBlcXVhdGlvbiBmb3IgZ2l2ZW4gZGlzdG9ydGlvbiBwYXJ0aWFsIGRlcml2YXRpdmVzLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0gZGVyaXZhdGl2ZXNcclxuICAgKiBAcmV0dXJucyB7bGVucy5yZXNhbXBsZXIuRVdBfVxyXG4gICAqL1xyXG4gIGluaXRFbGxpcHNlKC4uLmRlcml2YXRpdmVzKSB7XHJcbiAgICBjb25zdCBbXHJcbiAgICAgIG1ham9yX3gsXHJcbiAgICAgIG1ham9yX3ksXHJcbiAgICAgIG1pbm9yX3gsXHJcbiAgICAgIG1pbm9yX3ksXHJcbiAgICAgIG1ham9yX21hZyxcclxuICAgICAgbWlub3JfbWFnXHJcbiAgICBdID0gY2xhbXBFbGxpcHNlQXhlcyguLi5kZXJpdmF0aXZlcyk7XHJcblxyXG4gICAgdGhpcy5BID0gbWFqb3JfeSAqIG1ham9yX3kgKyBtaW5vcl95ICogbWlub3JfeTtcclxuICAgIHRoaXMuQiA9IC0yICogKG1ham9yX3ggKiBtYWpvcl95ICsgbWlub3JfeCAqIG1pbm9yX3kpO1xyXG4gICAgdGhpcy5DID0gbWFqb3JfeCAqIG1ham9yX3ggKyBtaW5vcl94ICogbWlub3JfeDtcclxuICAgIHRoaXMuRiA9IG1ham9yX21hZyAqIG1pbm9yX21hZztcclxuICAgIHRoaXMuRiAqPSB0aGlzLkY7XHJcblxyXG4gICAgLypcclxuICAgICAqIElmIG9uZSBvciBib3RoIG9mIHRoZSBzY2FsaW5nIHZlY3RvcnMgaXMgaW1wb3NzaWJseSBsYXJnZVxyXG4gICAgICogKHByb2R1Y2luZyBhIHZlcnkgbGFyZ2UgcmF3IEYgdmFsdWUpLCB3ZSBtYXkgYXMgd2VsbCBub3QgYm90aGVyXHJcbiAgICAgKiBkb2luZyBhbnkgZm9ybSBvZiByZXNhbXBsaW5nIHNpbmNlIHJlc2FtcGxlZCBhcmVhIGlzIHZlcnkgbGFyZ2UuXHJcbiAgICAgKiBJbiB0aGlzIGNhc2Ugc29tZSBhbHRlcm5hdGl2ZSBtZWFucyBvZiBwaXhlbCBzYW1wbGluZywgc3VjaCBhc1xyXG4gICAgICogdGhlIGF2ZXJhZ2Ugb2YgdGhlIHdob2xlIGltYWdlIGlzIG5lZWRlZCB0byBnZXQgYSByZWFzb25hYmxlXHJcbiAgICAgKiByZXN1bHQuIENhbGN1bGF0ZSBvbmx5IGFzIG5lZWRlZC5cclxuICAgICAqL1xyXG4gICAgdGhpcy5saW1pdFJlYWNoZWQgPSA0ICogdGhpcy5BICogdGhpcy5DIC0gdGhpcy5CICogdGhpcy5CID4gTUFYSU1VTV9WQUxVRTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjYWxlcyBlbGxpcHNlIHRvIG1hdGNoIGZpbHRlciBzdXBwb3J0LlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcmV0dXJucyB7bGVucy5yZXNhbXBsZXIuRVdBfVxyXG4gICAqL1xyXG4gIHNjYWxlRWxsaXBzZSgpIHtcclxuICAgIGlmICghdGhpcy5saW1pdFJlYWNoZWQpIHtcclxuICAgICAgdGhpcy5GICo9IHRoaXMuc3VwcG9ydCAqIHRoaXMuc3VwcG9ydDtcclxuICAgICAgdGhpcy51TGltaXQgPSBNYXRoLnNxcnQodGhpcy5DICogdGhpcy5GIC8gKHRoaXMuQSAqIHRoaXMuQyAtIDAuMjUgKiB0aGlzLkIgKiB0aGlzLkIpKTtcclxuICAgICAgdGhpcy52TGltaXQgPSBNYXRoLnNxcnQodGhpcy5BICogdGhpcy5GIC8gKHRoaXMuQSAqIHRoaXMuQyAtIDAuMjUgKiB0aGlzLkIgKiB0aGlzLkIpKTtcclxuICAgICAgdGhpcy51V2lkdGggPSBNYXRoLnNxcnQodGhpcy5GIC8gdGhpcy5BKTtcclxuICAgICAgdGhpcy5zbG9wZSA9IC10aGlzLkIgLyAoMiAqIHRoaXMuQSk7XHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgKiBDaGVjayB0aGUgYWJzb2x1dGUgYXJlYSBvZiB0aGUgcGFyYWxsZWxvZ3JhbSBpbnZvbHZlZC5cclxuICAgICAgICogVGhpcyBsaW1pdCBuZWVkcyBtb3JlIHdvcmssIGFzIGl0IGlzIHRvbyBzbG93IGZvciBsYXJnZXIgaW1hZ2VzXHJcbiAgICAgICAqIHdpdGggdGlsZWQgdmlld3Mgb2YgdGhlIGhvcml6b24uXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAodGhpcy51V2lkdGggKiB0aGlzLnZMaW1pdCA+IDQgKiB0aGlzLmltYWdlQXJlYSkge1xyXG4gICAgICAgIHRoaXMubGltaXRSZWFjaGVkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogU2NhbGUgZWxsaXBzZSBmb3JtdWxhIHRvIGRpcmVjdGx5IGluZGV4IHRoZSBGaWx0ZXIgTG9va3VwIFRhYmxlICovXHJcbiAgICAgIGNvbnN0IHNjYWxlID0gV0VJR0hUX0xPT0tVUF9UQUJMRV9XSURUSCAvIHRoaXMuRjtcclxuICAgICAgdGhpcy5BICo9IHNjYWxlO1xyXG4gICAgICB0aGlzLkIgKj0gc2NhbGU7XHJcbiAgICAgIHRoaXMuQyAqPSBzY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgd2VpZ2h0ZWQgYXZlcmFnZSBjb2xvciBhdCBnaXZlbiBwb2ludCB1c2luZyBzY2FsZWQgRVdBIGVsbGlwc2UuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1MFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2MFxyXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cclxuICAgKi9cclxuICBnZXRXZWlnaHRlZEF2ZXJhZ2UodTAsIHYwKSB7XHJcbiAgICBpZiAodGhpcy5kb2VzbnROZWVkUmVzYW1wbGluZyh1MCwgdjApKSB7XHJcbiAgICAgIC8qIFRoZSBhcmVhIGJlaW5nIHJlc2FtcGxlZCBpcyBzaW1wbHkgYSBzb2xpZCBjb2xvclxyXG4gICAgICAgKiBqdXN0IHJldHVybiBhIHNpbmdsZSBsb29rdXAgY29sb3IuXHJcbiAgICAgICAqL1xyXG4gICAgICByZXR1cm4gdGhpcy5pbWFnZS5nZXRQaXhlbENvbG9yKHUwLCB2MCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubGltaXRSZWFjaGVkKSB7XHJcbiAgICAgIC8vIFdoZW4gU2NhbGluZyBsaW1pdHMgcmVhY2hlZCwgcmV0dXJuIGFuICdhdmVyYWdlZCcgcmVzdWx0LlxyXG5cclxuICAgICAgc3dpdGNoICh0aGlzLmltYWdlVmlydHVhbFBpeGVsTWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSB2cHguRURHRTpcclxuICAgICAgICBjYXNlIHZweC5IT1JJWk9OVEFMX1RJTEVfRURHRTpcclxuICAgICAgICBjYXNlIHZweC5WRVJUSUNBTF9USUxFX0VER0U6XHJcbiAgICAgICAgICAvKlxyXG4gICAgICAgICAgICogV2UgbmVlZCBhbiBhdmVyYWdlIGVkZ2UgcGl4ZWwsIGZyb20gdGhlIGNvcnJlY3QgZWRnZSFcclxuICAgICAgICAgICAqIEhvdyBzaG91bGQgSSBjYWxjdWxhdGUgYW4gYXZlcmFnZSBlZGdlIGNvbG9yP1xyXG4gICAgICAgICAgICogSnVzdCByZXR1cm5pbmcgYW4gYXZlcmFnZWQgbmVpZ2hib3VyaG9vZCxcclxuICAgICAgICAgICAqIHdvcmtzIHdlbGwgaW4gZ2VuZXJhbCwgYnV0IGZhbGxzIGRvd24gZm9yIFRpbGVFZGdlIG1ldGhvZHMuXHJcbiAgICAgICAgICAgKiBUaGlzIG5lZWRzIHRvIGJlIGRvbmUgcHJvcGVybHkhISEhISFcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2UuZ2V0SW50ZXJwb2xhdGVkUGl4ZWxDb2xvcih1MCwgdjAsIGludGVycG9sYXRpb24uQVZFUkFHRSk7XHJcbiAgICAgICAgY2FzZSB2cHguSE9SSVpPTlRBTF9USUxFOlxyXG4gICAgICAgIGNhc2UgdnB4LlZFUlRJQ0FMX1RJTEU6XHJcbiAgICAgICAgICAvKlxyXG4gICAgICAgICAgKiBqdXN0IHJldHVybiB0aGUgYmFja2dyb3VuZCBwaXhlbCAtIElzIHRoZXJlIG1vcmUgZGlyZWN0IHdheT9cclxuICAgICAgICAgICovXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pbWFnZS5nZXRQaXhlbENvbG9yKFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlVmlld3BvcnQueDEgLSAxLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlVmlld3BvcnQueTEgLSAxXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZUF2ZXJhZ2VDb2xvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRpdmlzb3JNID0gMCxcclxuICAgICAgZGl2aXNvckMgPSAwLFxyXG4gICAgICByZWQgPSAwLFxyXG4gICAgICBncmVlbiA9IDAsXHJcbiAgICAgIGJsdWUgPSAwLFxyXG4gICAgICBhbHBoYSA9IDA7XHJcblxyXG4gICAgLypcclxuICAgICAqIERldGVybWluZSB0aGUgcGFyZWxsZWxvZ3JhbSBib3VuZGluZyBib3ggZml0dGVkIHRvIHRoZSBlbGxpcHNlXHJcbiAgICAgKiBjZW50ZXJlZCBhdCB1MCx2MC4gIFRoaXMgYXJlYSBpcyBib3VuZGluZyBieSB0aGUgbGluZXMuLi5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdjEgPSBNYXRoLmNlaWwodjAgLSB0aGlzLnZMaW1pdCk7XHJcbiAgICBjb25zdCB2MiA9IE1hdGguZmxvb3IodjAgKyB0aGlzLnZMaW1pdCk7XHJcblxyXG4gICAgLy8gc2NhbiBsaW5lIHN0YXJ0IGFuZCB3aWR0aCBhY2Nyb3NzIHRoZSBwYXJhbGxlbG9ncmFtXHJcbiAgICBsZXQgdTEgPSB1MCArICh2MSAtIHYwKSAqIHRoaXMuc2xvcGUgLSB0aGlzLnVXaWR0aDtcclxuICAgIGxldCB1dyA9IDIgKiB0aGlzLnVXaWR0aCArIDE7XHJcblxyXG4gICAgLypcclxuICAgICAqIERvIHdlaWdodGVkIHJlc2FtcGxpbmcgb2YgYWxsIHBpeGVscywgIHdpdGhpbiB0aGUgc2NhbGVkIGVsbGlwc2UsXHJcbiAgICAgKiBib3VuZCBieSBhIFBhcmVsbGVsb2dyYW0gZml0dGVkIHRvIHRoZSBlbGxpcHNlLlxyXG4gICAgICovXHJcblxyXG4gICAgbGV0IEREUSA9IDIgKiB0aGlzLkE7XHJcblxyXG4gICAgZm9yIChsZXQgdiA9IHYxOyB2IDwgdjI7IHYrKykge1xyXG4gICAgICBsZXQgdXN0YXJ0ID0gTWF0aC5jZWlsKHUxKTsgLy8gZmlyc3QgcGl4ZWwgaW4gc2NhbmxpbmVcclxuICAgICAgdTEgKz0gdGhpcy5zbG9wZTsgLy8gc3RhcnQgb2YgbmV4dCBzY2FuIGxpbmVcclxuICAgICAgbGV0IHVlbmQgPSB1c3RhcnQgKyB1dztcclxuXHJcbiAgICAgIC8vIGxvY2F0aW9uIG9mIHRoaXMgZmlyc3QgcGl4ZWwsIHJlbGF0aXZlIHRvIHUwLHYwXHJcbiAgICAgIGxldCBVID0gdXN0YXJ0IC0gdTA7XHJcbiAgICAgIGxldCBWID0gdiAtIHYwO1xyXG5cclxuICAgICAgLy8gUSA9IGVsbGlwc2UgcXVvdGVudCAoIGlmIFE8RiB0aGVuIHBpeGVsIGlzIGluc2lkZSBlbGxpcHNlKVxyXG4gICAgICBsZXQgUSA9ICh0aGlzLkEgKiBVICsgdGhpcy5CICogVikgKiBVICsgdGhpcy5DICogViAqIFY7XHJcbiAgICAgIGxldCBEUSA9IHRoaXMuQSAqICgyICogVSArIDEpICsgdGhpcy5CICogVjtcclxuXHJcbiAgICAgIC8vIGNvdW50IHVwIHRoZSB3ZWlnaHRlZCBwaXhlbCBjb2xvcnNcclxuICAgICAgZm9yIChsZXQgdSA9IHVzdGFydDsgdSA8IHVlbmQ7IHUrKykge1xyXG4gICAgICAgIC8vIE5vdGUgdGhhdCB0aGUgZWxsaXBzZSBoYXMgYmVlbiBwcmUtc2NhbGVkIHNvIEYgPSAkdGhpcy0+d2VpZ2h0TG9va3VwVGFibGVXaWR0aFxyXG4gICAgICAgIGlmIChRIDwgV0VJR0hUX0xPT0tVUF9UQUJMRV9XSURUSCkge1xyXG4gICAgICAgICAgbGV0IHdlaWdodCA9IHRoaXMud2VpZ2h0TG9va3VwVGFibGVbTWF0aC5mbG9vcihRKV07XHJcbiAgICAgICAgICBsZXQgW3IsIGcsIGIsIGFdID0gdGhpcy5pbWFnZS5nZXRQaXhlbENvbG9yKHUsIHYpO1xyXG4gICAgICAgICAgYWxwaGEgKz0gd2VpZ2h0ICogYTtcclxuICAgICAgICAgIGRpdmlzb3JNICs9IHdlaWdodDtcclxuXHJcbiAgICAgICAgICB3ZWlnaHQgKj0gKGEgLyB0aGlzLmltYWdlLnF1YW50dW1SYW5nZSk7XHJcblxyXG4gICAgICAgICAgcmVkICs9IHIgKiB3ZWlnaHQ7XHJcbiAgICAgICAgICBncmVlbiArPSBnICogd2VpZ2h0O1xyXG4gICAgICAgICAgYmx1ZSArPSBiICogd2VpZ2h0O1xyXG4gICAgICAgICAgZGl2aXNvckMgKz0gd2VpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUSArPSBEUTtcclxuICAgICAgICBEUSArPSBERFE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXN1bHQgc2FuaXR5IGNoZWNrIC0tIHRoaXMgc2hvdWxkIE5PVCBoYXBwZW5cclxuICAgIGlmICghZGl2aXNvckMgfHwgIWRpdmlzb3JNKSB7XHJcbiAgICAgIC8qXHJcbiAgICAgICAqIG5vdCBlbm91Z2ggcGl4ZWxzLCBvciBiYWQgd2VpZ2h0aW5nIGluIHJlc2FtcGxpbmcsXHJcbiAgICAgICAqIHJlc29ydCB0byBkaXJlY3QgaW50ZXJwb2xhdGlvblxyXG4gICAgICAgKi9cclxuICAgICAgcmV0dXJuIHRoaXMuaW1hZ2UuZ2V0SW50ZXJwb2xhdGVkUGl4ZWxDb2xvcih1MCwgdjApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIGNsYW1wVG9RdWFudHVtKE1hdGgucm91bmQocmVkIC8gZGl2aXNvckMpLCB0aGlzLmltYWdlLnF1YW50dW1SYW5nZSksXHJcbiAgICAgIGNsYW1wVG9RdWFudHVtKE1hdGgucm91bmQoZ3JlZW4gLyBkaXZpc29yQyksIHRoaXMuaW1hZ2UucXVhbnR1bVJhbmdlKSxcclxuICAgICAgY2xhbXBUb1F1YW50dW0oTWF0aC5yb3VuZChibHVlIC8gZGl2aXNvckMpLCB0aGlzLmltYWdlLnF1YW50dW1SYW5nZSksXHJcbiAgICAgIGNsYW1wVG9RdWFudHVtKE1hdGgucm91bmQoYWxwaGEgLyBkaXZpc29yTSksIHRoaXMuaW1hZ2UucXVhbnR1bVJhbmdlKVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBubyByZXNhbXBsaW5nIGlzIG5lZWRlZCAoaWYgc2luZ2xlIHBpeGVsIGNvbG9yIHNob3VsZCBiZSByZXR1cm5lZCkuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBkb2VzbnROZWVkUmVzYW1wbGluZyh1LCB2KSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuaW1hZ2VWaXJ0dWFsUGl4ZWxNZXRob2QpIHtcclxuICAgICAgY2FzZSB2cHguVFJBTlNQQVJFTlQ6XHJcbiAgICAgIGNhc2UgdnB4LkJBQ0tHUk9VTkQ6XHJcbiAgICAgIGNhc2UgdnB4LkJMQUNLOlxyXG4gICAgICBjYXNlIHZweC5XSElURTpcclxuICAgICAgY2FzZSB2cHguR1JBWTpcclxuICAgICAgICByZXR1cm4gdGhpcy5saW1pdFJlYWNoZWQgfHwgdGhpcy5vdXRPZkltYWdlQm91bmRzKHUsIHYpO1xyXG4gICAgICBjYXNlIHZweC5FREdFOlxyXG4gICAgICAgIHJldHVybiAodSArIHRoaXMudUxpbWl0IDwgdGhpcy5pbWFnZVZpZXdwb3J0LngxICYmIHYgKyB0aGlzLnZMaW1pdCA8IHRoaXMuaW1hZ2VWaWV3cG9ydC55MSlcclxuICAgICAgICAgIHx8ICh1ICsgdGhpcy51TGltaXQgPCB0aGlzLmltYWdlVmlld3BvcnQueDEgJiYgdiAtIHRoaXMudkxpbWl0ID4gdGhpcy5pbWFnZVZpZXdwb3J0LnkyKVxyXG4gICAgICAgICAgfHwgKHUgLSB0aGlzLnVMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC54MiAmJiB2ICsgdGhpcy52TGltaXQgPCB0aGlzLmltYWdlVmlld3BvcnQueTEpXHJcbiAgICAgICAgICB8fCAodSAtIHRoaXMudUxpbWl0ID4gdGhpcy5pbWFnZVZpZXdwb3J0LngyICYmIHYgLSB0aGlzLnZMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC55Mik7XHJcbiAgICAgIGNhc2UgdnB4LkhPUklaT05UQUxfVElMRTpcclxuICAgICAgICByZXR1cm4gdiArIHRoaXMudkxpbWl0IDwgdGhpcy5pbWFnZVZpZXdwb3J0LnkxIHx8IHYgLSB0aGlzLnZMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC55MjtcclxuICAgICAgY2FzZSB2cHguVkVSVElDQUxfVElMRTpcclxuICAgICAgICByZXR1cm4gdSArIHRoaXMudUxpbWl0IDwgdGhpcy5pbWFnZVZpZXdwb3J0LngxIHx8IHUgLSB0aGlzLnVMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC54MjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMYXppbGl5IHJldHVybnMgY2FjaGVkIGltYWdlIGF2ZXJhZ2UgY29sb3IuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cclxuICAgKi9cclxuICBnZXRJbWFnZUF2ZXJhZ2VDb2xvcigpIHtcclxuICAgIGlmICh0aGlzLmltYWdlQXZlcmFnZUNvbG9yID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VBdmVyYWdlQ29sb3IgPSB0aGlzLmltYWdlLmdldEF2ZXJhZ2VDb2xvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmltYWdlQXZlcmFnZUNvbG9yLnNsaWNlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgZWxsaXBzZSBpcyBjb21wbGV0ZWx5IG91dCBvZiBpbWFnZSBib3VuZHMuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBvdXRPZkltYWdlQm91bmRzKHUsIHYpIHtcclxuICAgIHJldHVybiB1ICsgdGhpcy51TGltaXQgPCB0aGlzLmltYWdlVmlld3BvcnQueDFcclxuICAgICAgfHwgdSAtIHRoaXMudUxpbWl0ID4gdGhpcy5pbWFnZVZpZXdwb3J0LngyXHJcbiAgICAgIHx8IHYgKyB0aGlzLnZMaW1pdCA8IHRoaXMuaW1hZ2VWaWV3cG9ydC55MVxyXG4gICAgICB8fCB2IC0gdGhpcy52TGltaXQgPiB0aGlzLmltYWdlVmlld3BvcnQueTI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFV0E7IiwiLyoqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5yZXNhbXBsZXJcclxuICovXHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgUG9pbnR9IGZyb20gJy4vcG9pbnQnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIEVXQX0gZnJvbSAnLi9lLXctYSc7IiwiaW1wb3J0IHtibGVuZENvbG9yc30gZnJvbSBcIi4uL3V0aWwvdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIDxwPntAbGluayBSZXNhbXBsZXJJbnRlcmZhY2V9IGltcGxlbWVudGFpb24gd2l0aG91dCByZXNhbXBsaW5nIGl0c2VsZi48L3A+XHJcbiAqIDxwPkl0IHVzZXMgcGl4ZWwgY29sb3IgaW50ZXJwb2xhdGlvbiBhbmQgd29ya3MgbXVjaCBmYXN0ZXIgdGhhbiB7QGxpbmsgbGVucy5yZXNhbXBsZXIuRVdBfSBidXQgcHJvZHVjZXMgYWxpYXNpbmdcclxuICogZWZmZWN0cy48L3A+XHJcbiAqIDxwPkl0IGlzIGdvb2QgZm9yIHF1aWNrIGNyZWF0aW9uIG9mIGRpc3RvcnRpb24gcHJldmlld3MgYW5kIGFsc28gdXNlZCBmb3Ige0BsaW5rIERpc3RvcnRpb25JbnRlcmZhY2V9IGltcGxlbWVudGF0aW9uc1xyXG4gKiB0aGF0IGRvZXNuJ3QgaGF2ZSBwYXJ0aWFsIGRlcml2YXRpdmVzLjwvcD5cclxuICogPHA+SXQgd29ya3MgbW9zdCBxdWlja2x5IHdoZW4ge0BsaW5rIEltYWdlSW50ZXJmYWNlfSNpbnRlcnBvbGF0aW9uTWV0aG9kIHByb3BlcnR5IGlzIHNldCB0b1xyXG4gKiB7QGxpbmsgbGVucy5pbnRlcnBvbGF0aW9uLklOVEVHRVJ9PC9wPlxyXG4gKlxyXG4gKiBAaW1wbGVtZW50cyB7UmVzYW1wbGVySW50ZXJmYWNlfVxyXG4gKiBAbWVtYmVyT2YgbGVucy5yZXNhbXBsZXJcclxuICogQHR1dG9yaWFsIDAyLjAzLnBpeGVsLWNvbG9yLWxvb2t1cFxyXG4gKi9cclxuY2xhc3MgUG9pbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubWF0dGVDb2xvciA9IFswLCAwLCAwLCAwXTtcclxuICAgIHRoaXMuc2NhbGluZyA9IDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHNldEltYWdlKGltYWdlKSB7XHJcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc2V0TWFwcGVyKG1hcHBlcikge1xyXG4gICAgdGhpcy5tYXBwZXIgPSBtYXBwZXI7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0UmVzYW1wbGVkQ29sb3IoeCwgeSkge1xyXG4gICAgeCA9IHggKiB0aGlzLnNjYWxpbmc7XHJcbiAgICB5ID0geSAqIHRoaXMuc2NhbGluZztcclxuXHJcbiAgICBjb25zdCB2YWxpZGl0eSA9IHRoaXMubWFwcGVyLmdldFZhbGlkaXR5KHgsIHksIHRoaXMuc2NhbGluZyk7XHJcblxyXG4gICAgaWYgKHZhbGlkaXR5ID49IDApIHtcclxuICAgICAgbGV0IFt1LCB2XSA9IHRoaXMubWFwcGVyLnJldmVyc2VNYXAoeCwgeSk7XHJcbiAgICAgIGxldCBjb2xvciA9IHRoaXMuaW1hZ2UuZ2V0SW50ZXJwb2xhdGVkUGl4ZWxDb2xvcih1LCB2KTtcclxuXHJcbiAgICAgIGlmICh2YWxpZGl0eSA8IDEpIHtcclxuICAgICAgICByZXR1cm4gYmxlbmRDb2xvcnMoY29sb3IsIHRoaXMubWF0dGVDb2xvciwgdmFsaWRpdHkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubWF0dGVDb2xvci5zbGljZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7IiwiLyoqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy51dGlsLmdhdXNzSm9yZGFuRWxpbWluYXRpb25cclxuICovXHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgR2F1c3NKb3JkYW5FbGltaW5hdGlvbn0gZnJvbSAnLi9zb2x2ZXInO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIExlYXN0U3F1YXJlc30gZnJvbSAnLi9sZWFzdC1zcXVhcmVzJzsiLCJpbXBvcnQgU29sdmVyIGZyb20gJy4vc29sdmVyJztcclxuXHJcbi8qKlxyXG4gKiBAc3VtbWFyeSBTb2x2ZXMgc3lzdGVtIG9mIGVxdWF0aW9ucyB1c2luZyBMZWFzdCBTcXVhcmVzIG1ldGhvZC5cclxuICogQG1lbWJlck9mIGxlbnMudXRpbC5nYXVzc0pvcmRhbkVsaW1pbmF0aW9uXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL21hdHJpeF84Y19zb3VyY2UuaHRtbCNsMDA4MjkgTGVhc3RTcXVhcmVzQWRkVGVybXMoKX0gYXRcclxuICogSW1hZ2VNYWdpY2sgc291cmNlLlxyXG4gKi9cclxuY2xhc3MgTGVhc3RTcXVhcmVzIGV4dGVuZHMgU29sdmVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcmFuayBUaGUgcmFuayBvciBzaXplIG9mIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBzcXVhcmUgbWF0cml4LlxyXG4gICAqIEFsc28gdGhlIGxlbmd0aCBvZiB2ZWN0b3JzLCBhbmQgbnVtYmVyIG9mIHRlcm1zIGJlaW5nIGFkZGVkLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1WZWN0b3JzIE51bWJlciBvZiByZXN1bHQgdmVjdG9ycywgYW5kIG51bWJlciBvciByZXN1bHRzIGJlaW5nXHJcbiAgICogYWRkZWQuICBBbHNvIHJlcHJlc2VudHMgdGhlIG51bWJlciBvZiBzZXBhcmFibGUgc3lzdGVtcyBvZiBlcXVhdGlvbnNcclxuICAgKiB0aGF0IGlzIGJlaW5nIHNvbHZlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihyYW5rLCBudW1WZWN0b3JzID0gMSkge1xyXG4gICAgY29uc3QgbWF0cml4ID0gW107XHJcbiAgICBjb25zdCB2ZWN0b3JzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5rOyBpKyspIHtcclxuICAgICAgbWF0cml4LnB1c2gobmV3IEFycmF5KHJhbmspLmZpbGwoMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmVjdG9yczsgaSsrKSB7XHJcbiAgICAgIHZlY3RvcnMucHVzaChuZXcgQXJyYXkocmFuaykuZmlsbCgwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIobWF0cml4LCB2ZWN0b3JzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgb25lIHNldCBvZiB0ZXJtcyBhbmQgYXNzb2NpYXRlIHJlc3VsdHMgdG8gdGhlXHJcbiAgICogZ2l2ZW4gbWF0cml4IGFuZCB2ZWN0b3JzIGZvciBzb2x2aW5nIHVzaW5nIGxlYXN0LXNxdWFyZXMgZnVuY3Rpb24gZml0dGluZy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IHRlcm1zIFRoZSBwcmUtY2FsY3VsYXRlZCB0ZXJtcyAod2l0aG91dCB0aGUgdW5rbm93biBjb2VmZmljaWVudFxyXG4gICAqIHdlaWdodHMpIHRoYXQgZm9ybXMgdGhlIGVxdWF0aW9uIGJlaW5nIGFkZGVkLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IHJlc3VsdHMgVGhlIHJlc3VsdChzKSB0aGF0IHNob3VsZCBiZSBnZW5lcmF0ZWQgZnJvbSB0aGUgZ2l2ZW4gdGVybXNcclxuICAgKiB3ZWlnaHRlZCBieSB0aGUgeWV0LXRvLWJlLXNvbHZlZCBjb2VmZmljaWVudHMuXHJcbiAgICogQHJldHVybnMge2xlbnMudXRpbC5nYXVzc0pvcmRhbkVsaW1pbmF0aW9uLkxlYXN0U3F1YXJlc31cclxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9tYXRyaXhfOGNfc291cmNlLmh0bWwjbDAwODI5IExlYXN0U3F1YXJlc0FkZFRlcm1zKCl9IGF0XHJcbiAgICogSW1hZ2VNYWdpY2sgc291cmNlLlxyXG4gICAqL1xyXG4gIGFkZFRlcm1zKHRlcm1zLCByZXN1bHRzKSB7XHJcbiAgICBjb25zdCByYW5rID0gdGhpcy5tYXRyaXgubGVuZ3RoO1xyXG5cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmFuazsgaisrKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuazsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5tYXRyaXhbaV1bal0gKz0gdGVybXNbaV0gKiB0ZXJtc1tqXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlY3RvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLnZlY3RvcnNbaV1bal0gKz0gcmVzdWx0c1tpXSAqIHRlcm1zW2pdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWFzdFNxdWFyZXM7IiwiaW1wb3J0IFVuc29sdmFibGVNYXRyaXggZnJvbSAnLi4vLi4vZXhjZXB0aW9uL3Vuc29sdmFibGUtbWF0cml4JztcclxuaW1wb3J0IHtwZXJjZXB0aWJsZVJlY2lwcm9jYWx9IGZyb20gXCIuLi91dGlsXCI7XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtBcnJheX0gYXJyYXlcclxuICogQHBhcmFtIHtudW1iZXJ9IHJvdzFcclxuICogQHBhcmFtIHtudW1iZXJ9IGNvbDFcclxuICogQHBhcmFtIHtudW1iZXJ9IHJvdzJcclxuICogQHBhcmFtIHtudW1iZXJ9IGNvbDJcclxuICovXHJcbmZ1bmN0aW9uIHN3YXAoYXJyYXksIHJvdzEsIGNvbDEsIHJvdzIsIGNvbDIpIHtcclxuICBpZiAoYXJyYXlbcm93MV1bY29sMV0gIT09IGFycmF5W3JvdzJdW2NvbDJdKSB7XHJcbiAgICBhcnJheVtyb3cxXVtjb2wxXSArPSBhcnJheVtyb3cyXVtjb2wyXTtcclxuICAgIGFycmF5W3JvdzJdW2NvbDJdID0gYXJyYXlbcm93MV1bY29sMV0gLSBhcnJheVtyb3cyXVtjb2wyXTtcclxuICAgIGFycmF5W3JvdzFdW2NvbDFdIC09IGFycmF5W3JvdzJdW2NvbDJdO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5zb2x2YWJsZSgpIHtcclxuICB0aHJvdyBuZXcgVW5zb2x2YWJsZU1hdHJpeChcIkNhbid0IHNvbHZlIGdpdmVuIG1hdHJpeCB1c2luZyBHYXVzcy1Kb3JkYW4gbWV0aG9kXCIpO1xyXG59XHJcblxyXG4vKipcclxuICogQHN1bW1hcnkgU29sdmVzIHN5c3RlbSBvZiBlcXVhdGlvbnMgdXNpbmcgR2F1c3MtSm9yZGFuIGVsaW1pbmF0aW9uLlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb24gPHA+QnJpbmdzIHRoZSBtYXRyaXggdG8gcmVkdWNlZCByb3cgZWNoZWxvbiBmb3JtLFxyXG4gKiAgd2hpbGUgc2ltdWx0YW5lb3VzbHkgcmVkdWNpbmcgYW5kIHRodXMgc29sdmluZyB0aGUgYXVnbWVudGVkIHJlc3VsdHNcclxuICogIG1hdHJpeC48L3A+XHJcbiAqXHJcbiAqIDxwPlNlZSBhbHNvIHtAbGluayBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dhdXNzLUpvcmRhbl9lbGltaW5hdGlvbn08L3A+XHJcbiAqXHJcbiAqXHJcbiAqICA8cD5Ob3RlIHRoYXQgdGhlICdtYXRyaXgnIGlzIGdpdmVuIGFzIGEgJ2FycmF5IG9mIGFycmF5cycgb2YgcmFuayBzaXplLlxyXG4gKiAgVGhhdCBpcyB2YWx1ZXMgY2FuIGJlIGFzc2lnbmVkIGFzICAgbWF0cml4W3Jvd11bY29sdW1uXSAgIHdoZXJlICdyb3cnIGlzXHJcbiAqICB0eXBpY2FsbHkgdGhlIGVxdWF0aW9uLCBhbmQgJ2NvbHVtbicgaXMgdGhlIHRlcm0gb2YgdGhlIGVxdWF0aW9uLlxyXG4gKiAgVGhhdCBpcyB0aGUgbWF0cml4IGlzIGluIHRoZSBmb3JtIG9mIGEgJ3JvdyBmaXJzdCBhcnJheScuPC9wPlxyXG4gKlxyXG4gKiAgPHA+SG93ZXZlciAndmVjdG9ycycgaXMgYSAnYXJyYXkgb2YgYXJyYXlzJyB3aGljaCBjYW4gaGF2ZSBhbnkgbnVtYmVyXHJcbiAqICBvZiBjb2x1bW5zLCB3aXRoIGVhY2ggY29sdW1uIGFycmF5IHRoZSBzYW1lICdyYW5rJyBzaXplIGFzICdtYXRyaXgnLjwvcD5cclxuICpcclxuICogIDxwPlRoaXMgYWxsb3dzIGZvciBzaW1wbGVyIGhhbmRsaW5nIG9mIHRoZSByZXN1bHRzLCBlc3BlY2lhbGx5IGlzIG9ubHkgb25lXHJcbiAqICBjb2x1bW4gJ3ZlY3RvcicgaXMgYWxsIHRoYXQgaXMgcmVxdWlyZWQgdG8gcHJvZHVjZSB0aGUgZGVzaXJlZCBzb2x1dGlvbi48L3A+XHJcbiAqXHJcbiAqICA8cD5Gb3IgZXhhbXBsZSwgdGhlICd2ZWN0b3JzJyBjYW4gY29uc2lzdCBvZiBzaW1wbGUgYXJyYXkgb2ZcclxuICogIG51bWJlcnMuICB3aGVuIG9ubHkgb25lIHNldCBvZiBzaW11bHRhbmVvdXMgZXF1YXRpb25zIGlzIHRvIGJlIHNvbHZlZCBmcm9tXHJcbiAqICB0aGUgZ2l2ZW4gc2V0IG9mIGNvZWZmaWNpZW50IHdlaWdodGVkIHRlcm1zLjwvcD5cclxuICpcclxuICogIDxwPkhvd2V2ZXIgYnkgc3BlY2lmeWluZyBtb3JlICdjb2x1bW5zJyAoYXMgYW4gJ2FycmF5IG9mIHZlY3RvciBjb2x1bW5zJyxcclxuICogIHlvdSBjYW4gdXNlIHRoaXMgZnVuY3Rpb24gdG8gc29sdmUgYSBzZXQgb2YgJ3NlcGFyYWJsZScgZXF1YXRpb25zLjwvcD5cclxuICpcclxuICogIDxwPkZvciBleGFtcGxlIGEgZGlzdG9ydGlvbiBmdW5jdGlvbiB3aGVyZSAgICA8Y29kZT51ID0gVSh4LHkpICB2ID0gVih4LHkpPC9jb2RlPlxyXG4gKiAgQW5kIHRoZSBmdW5jdGlvbnMgVSgpIGFuZCBWKCkgaGF2ZSBzZXBhcmF0ZSBjb2VmZmljaWVudHMsIGJ1dCBhcmUgYmVpbmdcclxuICogIGdlbmVyYXRlZCBmcm9tIGEgY29tbW9uIHgseS0+dSx2ICBkYXRhIHNldC48L3A+XHJcbiAqXHJcbiAqICA8cD5Zb3UgY2FuIGFsc28gdXNlIHRoZSAndmVjdG9ycycgdG8gZ2VuZXJhdGUgYW4gaW52ZXJzZSBvZiB0aGUgZ2l2ZW4gJ21hdHJpeCdcclxuICogIHRob3VnaCBhcyBhICdjb2x1bW4gZmlyc3QgYXJyYXknIHJhdGhlciB0aGFuIGEgJ3JvdyBmaXJzdCBhcnJheScuIEZvclxyXG4gKiAgZGV0YWlscyBzZWUge0BsaW5rIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR2F1c3MtSm9yZGFuX2VsaW1pbmF0aW9ufTwvcD5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMudXRpbC5nYXVzc0pvcmRhbkVsaW1pbmF0aW9uXHJcbiAqXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL21hdHJpeF84Y19zb3VyY2UuaHRtbCNsMDA0ODAgR2F1c3NKb3JkYW5FbGltaW5hdGlvbigpfSBhdFxyXG4gKiBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAqL1xyXG5jbGFzcyBTb2x2ZXIge1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyW10+fSBtYXRyaXggU3F1YXJlIG1hdHJpeCB0byBiZSBzb2x2ZWQuXHJcbiAgICogQHBhcmFtIHtBcnJheTxudW1iZXJbXT59IHZlY3RvcnMgQXVnbWVudCByZXN1bHRzIG1hdHJpeC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihtYXRyaXgsIHZlY3RvcnMpIHtcclxuICAgIHRoaXMuc29sdmVkID0gZmFsc2U7XHJcbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeC5tYXAocm93ID0+IHJvdy5zbGljZSgpKTtcclxuICAgIHRoaXMudmVjdG9ycyA9IHZlY3RvcnMubWFwKHZlY3RvciA9PiB2ZWN0b3Iuc2xpY2UoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTb2x2ZXMgZ2l2ZW4gbWF0cml4LlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge2xlbnMudXRpbC5nYXVzc0pvcmRhbkVsaW1pbmF0aW9uLlNvbHZlcn1cclxuICAgKi9cclxuICBzb2x2ZSgpIHtcclxuICAgIGlmICh0aGlzLnNvbHZlZCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlKCk7XHJcblxyXG4gICAgY29uc3QgbWF0cml4ID0gdGhpcy5tYXRyaXg7XHJcbiAgICBjb25zdCB2ZWN0b3JzID0gdGhpcy52ZWN0b3JzO1xyXG4gICAgY29uc3QgcmFuayA9IG1hdHJpeC5sZW5ndGg7XHJcbiAgICBjb25zdCBudW1WZWN0b3JzID0gdmVjdG9ycy5sZW5ndGg7XHJcbiAgICBjb25zdCBjb2xzID0gbmV3IEFycmF5KHJhbmspLmZpbGwoMCk7XHJcbiAgICBjb25zdCByb3dzID0gbmV3IEFycmF5KHJhbmspLmZpbGwoMCk7XHJcbiAgICBjb25zdCBwaXZvdHMgPSBuZXcgQXJyYXkocmFuaykuZmlsbCgwKTtcclxuICAgIGxldCBjb2wgPSAwO1xyXG4gICAgbGV0IHJvdyA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5rOyBpKyspIHtcclxuICAgICAgbGV0IG1heCA9IDA7XHJcblxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJhbms7IGorKykge1xyXG4gICAgICAgIGlmIChwaXZvdHNbal0gIT0gMSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCByYW5rOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKHBpdm90c1trXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHBpdm90c1trXSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHVuc29sdmFibGUoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMobWF0cml4W2pdW2tdKSA+PSBtYXgpIHtcclxuICAgICAgICAgICAgICBtYXggPSBNYXRoLmFicyhtYXRyaXhbal1ba10pO1xyXG4gICAgICAgICAgICAgIHJvdyA9IGo7XHJcbiAgICAgICAgICAgICAgY29sID0gaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcGl2b3RzW2NvbF0rKztcclxuXHJcbiAgICAgIGlmIChyb3cgIT0gY29sKSB7XHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCByYW5rOyBrKyspIHtcclxuICAgICAgICAgIHN3YXAobWF0cml4LCByb3csIGssIGNvbCwgayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG51bVZlY3RvcnM7IGsrKykge1xyXG4gICAgICAgICAgc3dhcCh2ZWN0b3JzLCBrLCByb3csIGssIGNvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByb3dzW2ldID0gcm93O1xyXG4gICAgICBjb2xzW2ldID0gY29sO1xyXG5cclxuICAgICAgaWYgKG1hdHJpeFtjb2xdW2NvbF0gPT0gMCkge1xyXG4gICAgICAgIHVuc29sdmFibGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHNjYWxlID0gcGVyY2VwdGlibGVSZWNpcHJvY2FsKG1hdHJpeFtjb2xdW2NvbF0pO1xyXG4gICAgICBtYXRyaXhbY29sXVtjb2xdID0gMTtcclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmFuazsgaisrKSB7XHJcbiAgICAgICAgbWF0cml4W2NvbF1bal0gKj0gc2NhbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtVmVjdG9yczsgaisrKSB7XHJcbiAgICAgICAgdmVjdG9yc1tqXVtjb2xdICo9IHNjYWxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJhbms7IGorKykge1xyXG4gICAgICAgIGlmIChqICE9IGNvbCkge1xyXG4gICAgICAgICAgbGV0IHNjYWxlID0gbWF0cml4W2pdW2NvbF07XHJcbiAgICAgICAgICBtYXRyaXhbal1bY29sXSA9IDA7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCByYW5rOyBrKyspIHtcclxuICAgICAgICAgICAgbWF0cml4W2pdW2tdIC09IHNjYWxlICogbWF0cml4W2NvbF1ba107XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBudW1WZWN0b3JzOyBrKyspIHtcclxuICAgICAgICAgICAgdmVjdG9yc1trXVtqXSAtPSBzY2FsZSAqIHZlY3RvcnNba11bY29sXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBqID0gcmFuayAtIDE7IGogPj0gMDsgai0tKSB7XHJcbiAgICAgIGlmIChjb2xzW2pdICE9IHJvd3Nbal0pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbms7IGkrKykge1xyXG4gICAgICAgICAgc3dhcChtYXRyaXgsIGksIHJvd3Nbal0sIGksIGNvbHNbal0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc29sdmVkID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYXVnbWVudCBtYXRyaXggKHJlc3VsdHMpXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7QXJyYXkuPG51bWJlcltdPn1cclxuICAgKi9cclxuICBnZXRWZWN0b3JzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmVjdG9ycy5tYXAodmVjdG9yID0+IHZlY3Rvci5zbGljZSgpKTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0ZXMgbWF0cml4IGFuZCB2ZWN0b3JzLlxyXG4gICAqIEBwcm90ZWN0ZWRcclxuICAgKiBAcmV0dXJucyB7bGVucy51dGlsLmdhdXNzSm9yZGFuRWxpbWluYXRpb24uU29sdmVyfVxyXG4gICAqL1xyXG4gIHZhbGlkYXRlKCkge1xyXG4gICAgY29uc3QgcmFuayA9IHRoaXMubWF0cml4Lmxlbmd0aDtcclxuXHJcbiAgICB0aGlzLm1hdHJpeC5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIGlmIChyb3cubGVuZ3RoICE9PSByYW5rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggbXVzdCBiZSBzcXVhcmUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy52ZWN0b3JzLmZvckVhY2godmVjdG9yID0+IHtcclxuICAgICAgaWYgKHZlY3Rvci5sZW5ndGggIT09IHJhbmspIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZlY3RvcnMgbXVzdCBiZSB0aGUgc2FtZSBsZW5ndGggYXMgbWF0cml4IHJhbmsnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2x2ZXI7IiwiLyoqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy51dGlsXHJcbiAqL1xyXG5cclxuaW1wb3J0ICogYXMgZ2F1c3NKb3JkYW5FbGltaW5hdGlvbiBmcm9tICcuL2dhdXNzLWpvcmRhbi1lbGltaW5hdGlvbic7XHJcblxyXG5leHBvcnQge2dhdXNzSm9yZGFuRWxpbWluYXRpb259O1xyXG5cclxuZXhwb3J0IHtcclxuICBibGVuZENvbG9ycyxcclxuICBwZXJjZXB0aWJsZVJlY2lwcm9jYWwsXHJcbiAgZGVnMnJhZCxcclxuICByYWQyZGVnXHJcbn0gZnJvbSAnLi91dGlsJzsiLCJpbXBvcnQge0VQU0lMT059IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gMS94IHdoZXJlIHggaXMgcGVyY2VwdGlibGUgKG5vdCB1bmxpbWl0ZWQgb3IgaW5maW5pdGVzaW1hbCkuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLnV0aWxcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHJldHVybnMge251bWJlcn1cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvcGl4ZWwtYWNjZXNzb3JfOGhfc291cmNlLmh0bWwjbDAwMjM0IFBlcmNlcHRpYmxlUmVjaXByb2NhbCgpfVxyXG4gKiBhdCBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBwZXJjZXB0aWJsZVJlY2lwcm9jYWwoeCkge1xyXG4gIGNvbnN0IHNpZ24gPSB4IDwgMCA/IC0xIDogMTtcclxuXHJcbiAgaWYgKHNpZ24gKiB4ID49IEVQU0lMT04pIHtcclxuICAgIHJldHVybiAxIC8geDtcclxuICB9XHJcblxyXG4gIHJldHVybiBzaWduIC8gRVBTSUxPTjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJsZW5kcyB0d28gY29sb3JzIGJ5IGdpdmVuIHdlaWdodHMuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLnV0aWxcclxuICogQHBhcmFtIHtDb2xvcn0gY29sb3IxIEZpcnN0IGNvbG9yIHRvIGJsZW5kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gd2VpZ2h0MSBGaXJzdCBjb2xvcidzIHdlaWdodC5cclxuICogQHBhcmFtIHtDb2xvcn0gY29sb3IyIFNlY29uZCBjb2xvciB0byBibGVuZC5cclxuICogQHBhcmFtIHtudW1iZXJ8bnVsbH0gW3dlaWdodDJdIFNlY29uZCBjb2xvcidzIHdlaWdodC4gSWYgbm90IHBhc3NlZCAtLSB3aWxsIGJlIGNhbGN1bGF0ZWQgYXMgMSAtIHdlaWdodDEuXHJcbiAqIEByZXR1cm5zIHtDb2xvcn0gQ29sb3IgYmxlbmRpbmcgcmVzdWx0LlxyXG4gKi9cclxuZnVuY3Rpb24gYmxlbmRDb2xvcnMoY29sb3IxLCB3ZWlnaHQxLCBjb2xvcjIsIHdlaWdodDIgPSBudWxsKSB7XHJcbiAgaWYgKHdlaWdodDIgPT09IG51bGwpIHtcclxuICAgIHdlaWdodDIgPSAxIC0gd2VpZ2h0MTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb2xvcjEubWFwKChjaGFubmVsLCBpKSA9PiBNYXRoLnJvdW5kKGNoYW5uZWwgKiB3ZWlnaHQxICsgY29sb3IyW2ldICogd2VpZ2h0MikpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgcmFkaWFucyB0byBkZWdyZWVzXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLnV0aWxcclxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnNcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIHJhZDJkZWcocmFkaWFucykge1xyXG4gIHJldHVybiAxODAgKiByYWRpYW5zIC8gTWF0aC5QSTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGRlZ3JlZXMgdG8gcmFkaWFuc1xyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy51dGlsXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWdyZWVzXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBkZWcycmFkKGRlZ3JlZXMpIHtcclxuICByZXR1cm4gTWF0aC5QSSAqIGRlZ3JlZXMgLyAxODA7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgYmxlbmRDb2xvcnMsXHJcbiAgcGVyY2VwdGlibGVSZWNpcHJvY2FsLFxyXG4gIHJhZDJkZWcsXHJcbiAgZGVnMnJhZFxyXG59OyIsIi8qKlxyXG4gKiBAc3VtbWFyeSBWaXJ0dWFsIHZpZXdwb3J0IGNsYXNzLlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb24gUmVwcmVzZW50cyBpbWFnZSdzIHZpcnR1YWwgcG9zaXRpb24gYXQgaXQncyBjb29yZGluYXRlIHNwYWNlLlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy5pbWFnZW1hZ2ljay5vcmcvVXNhZ2UvYmFzaWNzLyNwYWdlIFZpcnR1YWwgY2FudmFzIG9mZnNldH0gYXQgSW1hZ2VNYWdpY2sgZG9jcy5cclxuICogQHR1dG9yaWFsIDAyLjA2LnZpcnR1YWwtdmlld3BvcnRcclxuICovXHJcbmNsYXNzIFZpZXdwb3J0IHtcclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4MSBMZWZ0IGVkZ2UgY29vcmRpbmF0ZSBvZiB2aWV3cG9ydC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geTEgVG9wIGVkZ2UgY29vcmRpbmF0ZSAgb2Ygdmlld3BvcnQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHgyIFJpZ2h0IGVkZ2UgY29vcmRpbmF0ZSBvZiB2aWV3cG9ydC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geTIgQm90dG9tIGVkZ2UgY29vcmRpbmF0ZSBvZiB2aWV3cG9ydC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBMZWZ0IGVkZ2UgY29vcmRpbmF0ZSBvZiB2aWV3cG9ydC5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLngxID0geDE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb3AgZWRnZSBjb29yZGluYXRlIG9mIHZpZXdwb3J0LlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy55MSA9IHkxO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmlnaHQgZWRnZSBjb29yZGluYXRlIG9mIHZpZXdwb3J0LlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy54MiA9IHgyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQm90dG9tIGVkZ2UgY29vcmRpbmF0ZSBvZiB2aWV3cG9ydC5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMueTIgPSB5MjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdmlydHVhbCB2aWV3cG9ydCB3aWR0aCAtLSBzYW1lIGFzIGltYWdlIGFjdHVhbCB3aWR0aC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgd2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy54MiAtIHRoaXMueDEgKyAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB2aXJ0dWFsIHZpZXdwb3J0IGhlaWdodCAtLSBzYW1lIGFzIGltYWdlIGFjdHVhbCBoZWlnaHQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLnkyIC0gdGhpcy55MSArIDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHZpZXdwb3J0IGFyZWEuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGFyZWEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53aWR0aCgpICogdGhpcy5oZWlnaHQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB2aWV3cG9ydCBjb250YWlucyBnaXZlbiBjb29yZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgY29udGFpbnMoeCwgeSkge1xyXG4gICAgcmV0dXJuIHggPj0gdGhpcy54MSAmJiB4IDw9IHRoaXMueDIgJiYgeSA+PSB0aGlzLnkxICYmIHkgPD0gdGhpcy55MjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4cGFuZHMgdmlld3BvcnQgdG8gY29udGFpbiBnaXZlbiBjb29yZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHJldHVybnMge2xlbnMuVmlld3BvcnR9XHJcbiAgICovXHJcbiAgZXhwYW5kKHgsIHkpIHtcclxuICAgIHRoaXMueDEgPSBNYXRoLm1pbih0aGlzLngxLCB4KTtcclxuICAgIHRoaXMueDIgPSBNYXRoLm1heCh0aGlzLngyLCB4KTtcclxuICAgIHRoaXMueTEgPSBNYXRoLm1pbih0aGlzLnkxLCB5KTtcclxuICAgIHRoaXMueTIgPSBNYXRoLm1heCh0aGlzLnkyLCB5KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvbmVzIHZpZXdwb3J0IGludG8gbmV3IGluc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge2xlbnMuVmlld3BvcnR9XHJcbiAgICovXHJcbiAgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy54MSwgdGhpcy55MSwgdGhpcy54MiwgdGhpcy55Mik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaXggYm91bmRzIGFmdGVyIGJlc3QgZml0IHZpZXdwb3J0IGNhbGN1bGF0aW9uLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge2xlbnMuVmlld3BvcnR9XHJcbiAgICovXHJcbiAgZml4Qm91bmRzKCkge1xyXG4gICAgdGhpcy54MSA9IE1hdGguZmxvb3IodGhpcy54MSAtIDAuNSk7XHJcbiAgICB0aGlzLnkxID0gTWF0aC5mbG9vcih0aGlzLnkxIC0gMC41KTtcclxuICAgIHRoaXMueDIgPSBNYXRoLmNlaWwodGhpcy54MiAtIDAuNSk7XHJcbiAgICB0aGlzLnkyID0gTWF0aC5jZWlsKHRoaXMueTIgLSAwLjUpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY2FsZXMgdmlld3BvcnQgYm91bmRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlXHJcbiAgICogQHJldHVybnMge2xlbnMuVmlld3BvcnR9XHJcbiAgICovXHJcbiAgc2NhbGUoc2NhbGUpIHtcclxuICAgIHRoaXMueDEgPSBNYXRoLnJvdW5kKHRoaXMueDEgKiBzY2FsZSk7XHJcbiAgICB0aGlzLnkxID0gTWF0aC5yb3VuZCh0aGlzLnkxICogc2NhbGUpO1xyXG4gICAgdGhpcy54MiA9IE1hdGgucm91bmQodGhpcy54MiAqIHNjYWxlKTtcclxuICAgIHRoaXMueTIgPSBNYXRoLnJvdW5kKHRoaXMueTIgKiBzY2FsZSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0cyB2aWV3cG9ydCBvZmZzZXQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bGVucy5WaWV3cG9ydH1cclxuICAgKi9cclxuICByZXNldCgpIHtcclxuICAgIGxldCB3aWR0aCA9IHRoaXMud2lkdGgoKSxcclxuICAgICAgICBoZWlnaHQgPSB0aGlzLmhlaWdodCgpO1xyXG4gICAgdGhpcy54MSA9IDA7XHJcbiAgICB0aGlzLnkxID0gMDtcclxuICAgIHRoaXMueDIgPSB0aGlzLngxICsgd2lkdGggLSAxO1xyXG4gICAgdGhpcy55MiA9IHRoaXMueTEgKyBoZWlnaHQgLSAxO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3cG9ydDsiLCIvKipcclxuICogVmlydHVhbCBwaXhlbCBtZXRob2RzLlxyXG4gKlxyXG4gKiBAcmVhZG9ubHlcclxuICogQGVudW0ge251bWJlcn1cclxuICogQG1lbWJlck9mIGxlbnNcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cuaW1hZ2VtYWdpY2sub3JnL1VzYWdlL21pc2MvI3ZpcnR1YWwtcGl4ZWwgVmlydHVhbCBwaXhlbCBkZXRhaWxzfSBhdCBJbWFnZU1hZ2ljayBkb2NzLlxyXG4gKiBAdHV0b3JpYWwgMDIuMDUudmlydHVhbC1waXhlbHMtYW5kLW1hdHRlXHJcbiAqL1xyXG5jb25zdCB2cHggPSB7XHJcbiAgLyoqXHJcbiAgICogVXNlIGltYWdlIGJhY2tncm91bmQgY29sb3IuXHJcbiAgICovXHJcbiAgQkFDS0dST1VORDogMSxcclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2VzdCBlZGdlIGNvbG9yLlxyXG4gICAqL1xyXG4gIEVER0U6IDMsXHJcblxyXG4gIC8qKlxyXG4gICAqIE1pcnJvciBlZmZlY3QuXHJcbiAgICovXHJcbiAgTUlSUk9SOiA0LFxyXG5cclxuICAvKipcclxuICAgKiBSYW5kb20gY29sb3IgZnJvbSBpbWFnZS5cclxuICAgKi9cclxuICBSQU5ET006IDUsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRpbGUgZWZmZWN0LlxyXG4gICAqL1xyXG4gIFRJTEU6IDYsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYW5zcGFyZW50IGNvbG9yLlxyXG4gICAqL1xyXG4gIFRSQU5TUEFSRU5UOiA3LFxyXG5cclxuICAvKipcclxuICAgKiBCbGFjayBjb2xvci5cclxuICAgKi9cclxuICBCTEFDSzogOSxcclxuXHJcbiAgLyoqXHJcbiAgICogR3JheSBjb2xvci5cclxuICAgKi9cclxuICBHUkFZOiAxMCxcclxuXHJcbiAgLyoqXHJcbiAgICogV2hpdGUgY29sb3IuXHJcbiAgICovXHJcbiAgV0hJVEU6IDExLFxyXG5cclxuICAvKipcclxuICAgKiBUaWxlIGVmZmVjdCBob3Jpem9udGFsbHksIGJhY2tncm91bmQgY29sb3IgdmVydGljYWxseS5cclxuICAgKi9cclxuICBIT1JJWk9OVEFMX1RJTEU6IDEyLFxyXG5cclxuICAvKipcclxuICAgKiBUaWxlIGVmZmVjdCB2ZXJ0aWNhbGx5LCBiYWNrZ3JvdW5kIGNvbG9yIGhvcml6b250YWxseS5cclxuICAgKi9cclxuICBWRVJUSUNBTF9USUxFOiAxMyxcclxuXHJcbiAgLyoqXHJcbiAgICogVGlsZSBlZmZlY3QgaG9yaXpvbnRhbGx5LCBjbG9zZXN0IGVkZ2UgY29sb3IgdmVydGljYWxseS5cclxuICAgKi9cclxuICBIT1JJWk9OVEFMX1RJTEVfRURHRTogMTQsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRpbGUgZWZmZWN0IHZlcnRpY2FsbHksIGNsb3Nlc3QgZWRnZSBjb2xvciBob3Jpem9udGFsbHkuXHJcbiAgICovXHJcbiAgVkVSVElDQUxfVElMRV9FREdFOiAxNVxyXG5cclxuICAvLyBUT0RPOiBpbXBsZW1lbnQgYW5kIGFkZCBDaGVja2VyIHRpbGUgYW4gZGl0aGVyIG1ldGhvZHNcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZweDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbid1c2Ugc3RyaWN0JztcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiAsIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgbGVuZ3RoKTtcbiAgdmFyIGVuZCA9IGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICB2YXIgZW5kUG9zID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0Fic29sdXRlSW5kZXgoZW5kLCBsZW5ndGgpO1xuICB3aGlsZSAoZW5kUG9zID4gaW5kZXgpIE9baW5kZXgrK10gPSB2YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgYXJyYXlTbGljZSA9IFtdLnNsaWNlO1xudmFyIGZhY3RvcmllcyA9IHt9O1xuXG52YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gKEYsIGxlbiwgYXJncykge1xuICBpZiAoIShsZW4gaW4gZmFjdG9yaWVzKSkge1xuICAgIGZvciAodmFyIG4gPSBbXSwgaSA9IDA7IGkgPCBsZW47IGkrKykgbltpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgIGZhY3Rvcmllc1tsZW5dID0gRnVuY3Rpb24oJ0YsYScsICdyZXR1cm4gbmV3IEYoJyArIG4uam9pbignLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2xlbl0oRiwgYXJncyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLmJpbmQgfHwgZnVuY3Rpb24gYmluZCh0aGF0IC8qICwgLi4uYXJncyAqLykge1xuICB2YXIgZm4gPSBhRnVuY3Rpb24odGhpcyk7XG4gIHZhciBwYXJ0QXJncyA9IGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB2YXIgYm91bmQgPSBmdW5jdGlvbiAoLyogYXJncy4uLiAqLykge1xuICAgIHZhciBhcmdzID0gcGFydEFyZ3MuY29uY2F0KGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kID8gY29uc3RydWN0KGZuLCBhcmdzLmxlbmd0aCwgYXJncykgOiBpbnZva2UoZm4sIGFyZ3MsIHRoYXQpO1xuICB9O1xuICBpZiAoaXNPYmplY3QoZm4ucHJvdG90eXBlKSkgYm91bmQucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuICByZXR1cm4gYm91bmQ7XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIGZhc3RLZXkgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTSVpFID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbiAodGhhdCwga2V5KSB7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSk7XG4gIHZhciBlbnRyeTtcbiAgaWYgKGluZGV4ICE9PSAnRicpIHJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvciAoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgaWYgKGVudHJ5LmsgPT0ga2V5KSByZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5fdCA9IE5BTUU7ICAgICAgICAgLy8gY29sbGVjdGlvbiB0eXBlXG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgZm9yICh2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKGVudHJ5LnApIGVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uO1xuICAgICAgICAgIHZhciBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAocHJldikgcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZiAobmV4dCkgbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZiAodGhhdC5fZiA9PSBlbnRyeSkgdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYgKHRoYXQuX2wgPT0gZW50cnkpIHRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgICB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpO1xuICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgIHdoaWxlIChlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2YpIHtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBOQU1FKSwga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUodGhpcywgTkFNRSlbU0laRV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgIHZhciBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmICghdGhhdC5fZikgdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYgKHByZXYpIHByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZiAoaW5kZXggIT09ICdGJykgdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24gKEMsIE5BTUUsIElTX01BUCkge1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgICAgIHRoaXMuX3QgPSB2YWxpZGF0ZShpdGVyYXRlZCwgTkFNRSk7IC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgICAgICAgICAgICAgICAgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIga2luZCA9IHRoYXQuX2s7XG4gICAgICB2YXIgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmICghdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKSB7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgJGl0ZXJEZXRlY3QgPSByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspIHtcbiAgdmFyIEJhc2UgPSBnbG9iYWxbTkFNRV07XG4gIHZhciBDID0gQmFzZTtcbiAgdmFyIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJztcbiAgdmFyIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZTtcbiAgdmFyIE8gPSB7fTtcbiAgdmFyIGZpeE1ldGhvZCA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgICB2YXIgZm4gPSBwcm90b1tLRVldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBLRVksXG4gICAgICBLRVkgPT0gJ2RlbGV0ZScgPyBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2dldCcgPyBmdW5jdGlvbiBnZXQoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyB1bmRlZmluZWQgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdhZGQnID8gZnVuY3Rpb24gYWRkKGEpIHsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpOyByZXR1cm4gdGhpczsgfVxuICAgICAgICA6IGZ1bmN0aW9uIHNldChhLCBiKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTsgcmV0dXJuIHRoaXM7IH1cbiAgICApO1xuICB9O1xuICBpZiAodHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKSB7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDKCk7XG4gICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuICAgIHZhciBIQVNOVF9DSEFJTklORyA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT0gaW5zdGFuY2U7XG4gICAgLy8gVjggfiAgQ2hyb21pdW0gNDAtIHdlYWstY29sbGVjdGlvbnMgdGhyb3dzIG9uIHByaW1pdGl2ZXMsIGJ1dCBzaG91bGQgcmV0dXJuIGZhbHNlXG4gICAgdmFyIFRIUk9XU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBpbnN0YW5jZS5oYXMoMSk7IH0pO1xuICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcbiAgICB2YXIgQUNDRVBUX0lURVJBQkxFUyA9ICRpdGVyRGV0ZWN0KGZ1bmN0aW9uIChpdGVyKSB7IG5ldyBDKGl0ZXIpOyB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcbiAgICB2YXIgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFY4IH4gQ2hyb21pdW0gNDItIGZhaWxzIG9ubHkgd2l0aCA1KyBlbGVtZW50c1xuICAgICAgdmFyICRpbnN0YW5jZSA9IG5ldyBDKCk7XG4gICAgICB2YXIgaW5kZXggPSA1O1xuICAgICAgd2hpbGUgKGluZGV4LS0pICRpbnN0YW5jZVtBRERFUl0oaW5kZXgsIGluZGV4KTtcbiAgICAgIHJldHVybiAhJGluc3RhbmNlLmhhcygtMCk7XG4gICAgfSk7XG4gICAgaWYgKCFBQ0NFUFRfSVRFUkFCTEVTKSB7XG4gICAgICBDID0gd3JhcHBlcihmdW5jdGlvbiAodGFyZ2V0LCBpdGVyYWJsZSkge1xuICAgICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSk7XG4gICAgICAgIHZhciB0aGF0ID0gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UoKSwgdGFyZ2V0LCBDKTtcbiAgICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICAgIH0pO1xuICAgICAgQy5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgIHByb3RvLmNvbnN0cnVjdG9yID0gQztcbiAgICB9XG4gICAgaWYgKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pIHtcbiAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG4gICAgICBmaXhNZXRob2QoJ2hhcycpO1xuICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XG4gICAgfVxuICAgIGlmIChCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKSBmaXhNZXRob2QoQURERVIpO1xuICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgc2hvdWxkIG5vdCBjb250YWlucyAuY2xlYXIgbWV0aG9kXG4gICAgaWYgKElTX1dFQUsgJiYgcHJvdG8uY2xlYXIpIGRlbGV0ZSBwcm90by5jbGVhcjtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChDICE9IEJhc2UpLCBPKTtcblxuICBpZiAoIUlTX1dFQUspIGNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjExJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgdGFyZ2V0LCBDKSB7XG4gIHZhciBTID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICB2YXIgUDtcbiAgaWYgKFMgIT09IEMgJiYgdHlwZW9mIFMgPT0gJ2Z1bmN0aW9uJyAmJiAoUCA9IFMucHJvdG90eXBlKSAhPT0gQy5wcm90b3R5cGUgJiYgaXNPYmplY3QoUCkgJiYgc2V0UHJvdG90eXBlT2YpIHtcbiAgICBzZXRQcm90b3R5cGVPZih0aGF0LCBQKTtcbiAgfSByZXR1cm4gdGhhdDtcbn07XG4iLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIFNhZmFyaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgfSBlbHNlIGlmIChPYnNlcnZlciAmJiAhKGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci5zdGFuZGFsb25lKSkge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlIHdpdGhvdXQgYW4gYXJndW1lbnQgdGhyb3dzIGFuIGVycm9yIGluIExHIFdlYk9TIDJcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikge1xuICAgICAga2V5ID0ga2V5c1tqKytdO1xuICAgICAgaWYgKCFERVNDUklQVE9SUyB8fCBpc0VudW0uY2FsbChTLCBrZXkpKSBUW2tleV0gPSBTW2tleV07XG4gICAgfVxuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciAkdG9TdHJpbmcgPSByZXF1aXJlKCcuL19mdW5jdGlvbi10by1zdHJpbmcnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsLm5hdmlnYXRvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRZUEUpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgfHwgaXQuX3QgIT09IFRZUEUpIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwiLy8gMjIuMS4zLjYgQXJyYXkucHJvdG90eXBlLmZpbGwodmFsdWUsIHN0YXJ0ID0gMCwgZW5kID0gdGhpcy5sZW5ndGgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5JywgeyBmaWxsOiByZXF1aXJlKCcuL19hcnJheS1maWxsJykgfSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdmaWxsJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsInZhciBEYXRlUHJvdG8gPSBEYXRlLnByb3RvdHlwZTtcbnZhciBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJztcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IERhdGVQcm90b1tUT19TVFJJTkddO1xudmFyIGdldFRpbWUgPSBEYXRlUHJvdG8uZ2V0VGltZTtcbmlmIChuZXcgRGF0ZShOYU4pICsgJycgIT0gSU5WQUxJRF9EQVRFKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoRGF0ZVByb3RvLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciB2YWx1ZSA9IGdldFRpbWUuY2FsbCh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/ICR0b1N0cmluZy5jYWxsKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgRlByb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyAxOS4yLjQuMiBuYW1lXG5OQU1FIGluIEZQcm90byB8fCByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIGRQKEZQcm90bywgTkFNRSwge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKCcnICsgdGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIE1BUCA9ICdNYXAnO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKShNQVAsIGZ1bmN0aW9uIChnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpIHsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG4iLCIvLyAyMC4yLjIuMTcgTWF0aC5oeXBvdChbdmFsdWUxWywgdmFsdWUyWywg4oCmIF1dXSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgYWJzID0gTWF0aC5hYnM7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgaHlwb3Q6IGZ1bmN0aW9uIGh5cG90KHZhbHVlMSwgdmFsdWUyKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgc3VtID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBsYXJnID0gMDtcbiAgICB2YXIgYXJnLCBkaXY7XG4gICAgd2hpbGUgKGkgPCBhTGVuKSB7XG4gICAgICBhcmcgPSBhYnMoYXJndW1lbnRzW2krK10pO1xuICAgICAgaWYgKGxhcmcgPCBhcmcpIHtcbiAgICAgICAgZGl2ID0gbGFyZyAvIGFyZztcbiAgICAgICAgc3VtID0gc3VtICogZGl2ICogZGl2ICsgMTtcbiAgICAgICAgbGFyZyA9IGFyZztcbiAgICAgIH0gZWxzZSBpZiAoYXJnID4gMCkge1xuICAgICAgICBkaXYgPSBhcmcgLyBsYXJnO1xuICAgICAgICBzdW0gKz0gZGl2ICogZGl2O1xuICAgICAgfSBlbHNlIHN1bSArPSBhcmc7XG4gICAgfVxuICAgIHJldHVybiBsYXJnID09PSBJbmZpbml0eSA/IEluZmluaXR5IDogbGFyZyAqIE1hdGguc3FydChzdW0pO1xuICB9XG59KTtcbiIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG4iLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciB0ZXN0ID0ge307XG50ZXN0W3JlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmICh0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuL191c2VyLWFnZW50Jyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjggfHwgJyc7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKVxuICAgICAgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlXG4gICAgICAvLyB2OCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD04MzA1NjVcbiAgICAgIC8vIHdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgICAmJiB2OC5pbmRleE9mKCc2LjYnKSAhPT0gMFxuICAgICAgJiYgdXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZS82NicpID09PSAtMTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBtYXkgdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLl9oICE9PSAxICYmIChwcm9taXNlLl9hIHx8IHByb21pc2UuX2MpLmxlbmd0aCA9PT0gMDtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuIiwiLy8gMjYuMS4yIFJlZmxlY3QuY29uc3RydWN0KHRhcmdldCwgYXJndW1lbnRzTGlzdCBbLCBuZXdUYXJnZXRdKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vX2JpbmQnKTtcbnZhciByQ29uc3RydWN0ID0gKHJlcXVpcmUoJy4vX2dsb2JhbCcpLlJlZmxlY3QgfHwge30pLmNvbnN0cnVjdDtcblxuLy8gTVMgRWRnZSBzdXBwb3J0cyBvbmx5IDIgYXJndW1lbnRzIGFuZCBhcmd1bWVudHNMaXN0IGFyZ3VtZW50IGlzIG9wdGlvbmFsXG4vLyBGRiBOaWdodGx5IHNldHMgdGhpcmQgYXJndW1lbnQgYXMgYG5ldy50YXJnZXRgLCBidXQgZG9lcyBub3QgY3JlYXRlIGB0aGlzYCBmcm9tIGl0XG52YXIgTkVXX1RBUkdFVF9CVUcgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuICEockNvbnN0cnVjdChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sIFtdLCBGKSBpbnN0YW5jZW9mIEYpO1xufSk7XG52YXIgQVJHU19CVUcgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByQ29uc3RydWN0KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTkVXX1RBUkdFVF9CVUcgfHwgQVJHU19CVUcpLCAnUmVmbGVjdCcsIHtcbiAgY29uc3RydWN0OiBmdW5jdGlvbiBjb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzIC8qICwgbmV3VGFyZ2V0ICovKSB7XG4gICAgYUZ1bmN0aW9uKFRhcmdldCk7XG4gICAgYW5PYmplY3QoYXJncyk7XG4gICAgdmFyIG5ld1RhcmdldCA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gVGFyZ2V0IDogYUZ1bmN0aW9uKGFyZ3VtZW50c1syXSk7XG4gICAgaWYgKEFSR1NfQlVHICYmICFORVdfVEFSR0VUX0JVRykgcmV0dXJuIHJDb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzLCBuZXdUYXJnZXQpO1xuICAgIGlmIChUYXJnZXQgPT0gbmV3VGFyZ2V0KSB7XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIG9wdGltaXphdGlvbiBmb3IgMC00IGFyZ3VtZW50c1xuICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgVGFyZ2V0KCk7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgIGNhc2UgNDogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gICAgICB9XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIGxvdCBvZiBhcmd1bWVudHMgY2FzZVxuICAgICAgdmFyICRhcmdzID0gW251bGxdO1xuICAgICAgJGFyZ3MucHVzaC5hcHBseSgkYXJncywgYXJncyk7XG4gICAgICByZXR1cm4gbmV3IChiaW5kLmFwcGx5KFRhcmdldCwgJGFyZ3MpKSgpO1xuICAgIH1cbiAgICAvLyB3aXRoIGFsdGVyZWQgbmV3VGFyZ2V0LCBub3Qgc3VwcG9ydCBidWlsdC1pbiBjb25zdHJ1Y3RvcnNcbiAgICB2YXIgcHJvdG8gPSBuZXdUYXJnZXQucHJvdG90eXBlO1xuICAgIHZhciBpbnN0YW5jZSA9IGNyZWF0ZShpc09iamVjdChwcm90bykgPyBwcm90byA6IE9iamVjdC5wcm90b3R5cGUpO1xuICAgIHZhciByZXN1bHQgPSBGdW5jdGlvbi5hcHBseS5jYWxsKFRhcmdldCwgaW5zdGFuY2UsIGFyZ3MpO1xuICAgIHJldHVybiBpc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogaW5zdGFuY2U7XG4gIH1cbn0pO1xuIiwiLy8gMjYuMS42IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkgWywgcmVjZWl2ZXJdKVxudmFyIGdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIGdldCh0YXJnZXQsIHByb3BlcnR5S2V5IC8qICwgcmVjZWl2ZXIgKi8pIHtcbiAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiBhcmd1bWVudHNbMl07XG4gIHZhciBkZXNjLCBwcm90bztcbiAgaWYgKGFuT2JqZWN0KHRhcmdldCkgPT09IHJlY2VpdmVyKSByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgaWYgKGRlc2MgPSBnT1BELmYodGFyZ2V0LCBwcm9wZXJ0eUtleSkpIHJldHVybiBoYXMoZGVzYywgJ3ZhbHVlJylcbiAgICA/IGRlc2MudmFsdWVcbiAgICA6IGRlc2MuZ2V0ICE9PSB1bmRlZmluZWRcbiAgICAgID8gZGVzYy5nZXQuY2FsbChyZWNlaXZlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICBpZiAoaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKSkgcmV0dXJuIGdldChwcm90bywgcHJvcGVydHlLZXksIHJlY2VpdmVyKTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0JywgeyBnZXQ6IGdldCB9KTtcbiIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IHJlcXVpcmUoJy4vX2ZsYWdzJylcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJEdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbicgJiYgISEkR09QUy5mO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICAkR09QUy5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyBDaHJvbWUgMzggYW5kIDM5IGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBmYWlscyBvbiBwcmltaXRpdmVzXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNDQzXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9ICRmYWlscyhmdW5jdGlvbiAoKSB7ICRHT1BTLmYoMSk7IH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIEZBSUxTX09OX1BSSU1JVElWRVMsICdPYmplY3QnLCB7XG4gIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gICAgcmV0dXJuICRHT1BTLmYodG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=