/*!
 * @alxcube/lens 0.1.0
 * © 2020 Alexander Alexandrov <alxcube@gmail.com>
 * License: Apache-2.0
 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/lens.js");
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
/* harmony import */ var _distorter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distorter */ "./lib/distorter/index.js");
/* harmony import */ var _resampler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resampler */ "./lib/resampler/index.js");
/* harmony import */ var _filter_presets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-presets */ "./lib/filter-presets.js");



var defaultOptions = {
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

function distort(image, distortion, args) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  try {
    if (typeof distortion === 'function') {
      distortion = distortion(args, image);
    } else {
      options = args || {};
    }

    options = makeOptions(options);

    if (distortion.forceBestFit) {
      options.bestFit = true;
    }

    var distorted = sync(makeDistorter(image, distortion, makeResampler(image, distortion, options), options).distort());

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
    return distorted.then(function (distorted) {
      return sync(distorted);
    });
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
    return supersampled.then(function (supersampled) {
      return scaleSupersampled(supersampled, scale);
    });
  }

  if ('scale' in supersampled && typeof supersampled.scale === 'function') {
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
  var dist = new _distorter__WEBPACK_IMPORTED_MODULE_0__["ReversePixelMapping"](image, distortion, resampler);
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

/***/ "./lib/distorter/distorter.js":
/*!************************************!*\
  !*** ./lib/distorter/distorter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reverse_pixel_mapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reverse-pixel-mapping */ "./lib/distorter/reverse-pixel-mapping.js");

/**
 * Distorter namespace
 * @namespace lens.distorter
 */

var distorter = {
  ReversePixelMapping: _reverse_pixel_mapping__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (distorter);

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



/***/ }),

/***/ "./lib/distorter/reverse-pixel-mapping.js":
/*!************************************************!*\
  !*** ./lib/distorter/reverse-pixel-mapping.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _util_gauss_jordan_elimination_least_squares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/gauss-jordan-elimination/least-squares */ "./lib/util/gauss-jordan-elimination/least-squares.js");
/* harmony import */ var _mixins_creates_best_fit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/creates-best-fit-viewport-from-apexes */ "./lib/mixins/creates-best-fit-viewport-from-apexes.js");
/* harmony import */ var _exception_invalid_arguments_length__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exception/invalid-arguments-length */ "./lib/exception/invalid-arguments-length.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "./lib/util/util.js");
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
      if (controlPoints.length % 4 !== 0) {
        throw new _exception_invalid_arguments_length__WEBPACK_IMPORTED_MODULE_2__["default"]("Number of arguments must be multiple of 4 and at least 4 arguments (1 control point) expected. ".concat(controlPoints.length, " arguments given."));
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
        var leastSquares = new _util_gauss_jordan_elimination_least_squares__WEBPACK_IMPORTED_MODULE_0__["default"](3, 2);

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
      var determinant = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["perceptibleReciprocal"])(matrix[0] * matrix[4] - matrix[1] * matrix[3]);
      return [determinant * matrix[4], determinant * -matrix[1], determinant * (matrix[1] * matrix[5] - matrix[2] * matrix[4]), determinant * -matrix[3], determinant * matrix[0], determinant * (matrix[2] * matrix[3] - matrix[0] * matrix[5])];
    }
  }]);

  return Affine;
}();

Object.assign(Affine.prototype, _mixins_creates_best_fit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");
/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exception */ "./lib/exception/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./lib/util/index.js");
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewport */ "./lib/viewport.js");
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

  }, {
    key: "getBestFitViewport",
    value: function getBestFitViewport(viewport) {
      // Forward Map Corners
      var a = this.c0 - this.c1 / 2,
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
      vp.expand(x, y); // Orthogonal points along top of arc

      for (a = Math.ceil((this.c0 - this.c1 / 2) / _constants__WEBPACK_IMPORTED_MODULE_0__["M_PI2"]) * _constants__WEBPACK_IMPORTED_MODULE_0__["M_PI2"]; a < this.c0 + this.c1 / 2; a += _constants__WEBPACK_IMPORTED_MODULE_0__["M_PI2"]) {
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

      u = (Math.atan2(y, x) - this.c0) / _constants__WEBPACK_IMPORTED_MODULE_0__["M_2PI"];
      u -= Math.round(u);
      v = Math.hypot(x, y);
      return [u, v];
    }
  }], [{
    key: "fromArguments",
    value: function fromArguments(viewport, args) {
      if (args.length >= 1 && args[0] < _constants__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
        throw new _exception__WEBPACK_IMPORTED_MODULE_1__["InvalidArgument"]('Angle too small');
      }

      if (args.length >= 3 && args[2] < _constants__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
        throw new _exception__WEBPACK_IMPORTED_MODULE_1__["InvalidArgument"]('Outer radius too small');
      }

      var c0, c1, c2, c3, c4;
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
  }]);

  return Arc;
}();

/* harmony default export */ __webpack_exports__["default"] = (Arc);

/***/ }),

/***/ "./lib/distortion/distortion.js":
/*!**************************************!*\
  !*** ./lib/distortion/distortion.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _affine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./affine */ "./lib/distortion/affine.js");
/* harmony import */ var _arc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arc */ "./lib/distortion/arc.js");
/* harmony import */ var _perspective__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perspective */ "./lib/distortion/perspective.js");



/**
 * Distortion namespace
 *
 * @namespace lens.distortion
 */

var distortion = {
  Affine: _affine__WEBPACK_IMPORTED_MODULE_0__["default"],
  Arc: _arc__WEBPACK_IMPORTED_MODULE_1__["default"],
  Perspective: _perspective__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (distortion);

/***/ }),

/***/ "./lib/distortion/perspective.js":
/*!***************************************!*\
  !*** ./lib/distortion/perspective.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_gauss_jordan_elimination_least_squares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/gauss-jordan-elimination/least-squares */ "./lib/util/gauss-jordan-elimination/least-squares.js");
/* harmony import */ var _mixins_creates_best_fit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/creates-best-fit-viewport-from-apexes */ "./lib/mixins/creates-best-fit-viewport-from-apexes.js");
/* harmony import */ var _exception_invalid_arguments_length__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exception/invalid-arguments-length */ "./lib/exception/invalid-arguments-length.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "./lib/util/util.js");
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
      if (controlPoints.length < 16 || controlPoints.length % 4 !== 0) {
        throw new _exception_invalid_arguments_length__WEBPACK_IMPORTED_MODULE_2__["default"]("Number of arguments must be multiple of 4 and at least 16 arguments (4 control points) expected. ".concat(controlPoints.length, " arguments given."));
      }

      var leastSquares = new _util_gauss_jordan_elimination_least_squares__WEBPACK_IMPORTED_MODULE_0__["default"](8, 1);

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
      var determinant = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["perceptibleReciprocal"])(matrix[0] * matrix[4] - matrix[3] * matrix[1]);
      return [determinant * (matrix[4] - matrix[7] * matrix[5]), determinant * (matrix[7] * matrix[2] - matrix[1]), determinant * (matrix[1] * matrix[5] - matrix[4] * matrix[2]), determinant * (matrix[6] * matrix[5] - matrix[3]), determinant * (matrix[0] - matrix[6] * matrix[2]), determinant * (matrix[3] * matrix[2] - matrix[0] * matrix[5]), determinant * (matrix[3] * matrix[7] - matrix[6] * matrix[4]), determinant * (matrix[6] * matrix[1] - matrix[0] * matrix[7])];
    }
  }]);

  return Perspective;
}();

Object.assign(Perspective.prototype, _mixins_creates_best_fit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
/* harmony import */ var _distortion_affine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distortion/affine */ "./lib/distortion/affine.js");
/* harmony import */ var _distortion_arc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distortion/arc */ "./lib/distortion/arc.js");
/* harmony import */ var _distortion_perspective__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distortion/perspective */ "./lib/distortion/perspective.js");
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


function affineByMatrix(_ref) {
  var _ref2 = _slicedToArray(_ref, 6),
      sx = _ref2[0],
      ry = _ref2[1],
      rx = _ref2[2],
      sy = _ref2[3],
      tx = _ref2[4],
      ty = _ref2[5];

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

/***/ "./lib/exception/exception.js":
/*!************************************!*\
  !*** ./lib/exception/exception.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invalid_argument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalid-argument */ "./lib/exception/invalid-argument.js");
/* harmony import */ var _invalid_arguments_length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalid-arguments-length */ "./lib/exception/invalid-arguments-length.js");
/* harmony import */ var _lens_exception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lens-exception */ "./lib/exception/lens-exception.js");
/* harmony import */ var _unsolvable_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unsolvable-matrix */ "./lib/exception/unsolvable-matrix.js");




/**
 * Exception namespace
 *
 * @namespace lens.exception
 */

var exception = {
  InvalidArgument: _invalid_argument__WEBPACK_IMPORTED_MODULE_0__["default"],
  InvalidArgumentsLength: _invalid_arguments_length__WEBPACK_IMPORTED_MODULE_1__["default"],
  LensException: _lens_exception__WEBPACK_IMPORTED_MODULE_2__["default"],
  UnsolvableMatrix: _unsolvable_matrix__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (exception);

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






/***/ }),

/***/ "./lib/exception/invalid-argument.js":
/*!*******************************************!*\
  !*** ./lib/exception/invalid-argument.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lens_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lens-exception */ "./lib/exception/lens-exception.js");
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
    var _this;

    _classCallCheck(this, InvalidArgument);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InvalidArgument).call(this, message));
    _this.name = 'InvalidArgument';
    return _this;
  }

  return InvalidArgument;
}(_lens_exception__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
/* harmony import */ var _lens_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lens-exception */ "./lib/exception/lens-exception.js");
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
    var _this;

    _classCallCheck(this, InvalidArgumentsLength);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InvalidArgumentsLength).call(this, message));
    _this.name = 'InvalidArgumentsLength';
    return _this;
  }

  return InvalidArgumentsLength;
}(_lens_exception__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
    _this.name = 'LensException';

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
/* harmony import */ var _lens_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lens-exception */ "./lib/exception/lens-exception.js");
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
    var _this;

    _classCallCheck(this, UnsolvableMatrix);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UnsolvableMatrix).call(this, message));
    _this.name = 'UnsolvableMatrix';
    return _this;
  }

  return UnsolvableMatrix;
}(_lens_exception__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
  return new _filter_filter__WEBPACK_IMPORTED_MODULE_0__["default"](Object(_filter_filter_functions__WEBPACK_IMPORTED_MODULE_1__["cubicBC"])(0.2620145123990142, 0.3689927438004929), Object(_filter_filter_functions__WEBPACK_IMPORTED_MODULE_1__["box"])(), 2, 1.105822933719019, 1);
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
  var func = function func() {
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
  var p0 = (6 - 2 * b) / 6; // const p1 = 0;

  var p2 = (-18 + 12 * b + 6 * c) / 6;
  var p3 = (12 - 9 * b - 6 * c) / 6;
  var q0 = (8 * b + 24 * c) / 6;
  var q1 = (-12 * b - 48 * c) / 6;
  var q2 = (6 * b + 30 * c) / 6;
  var q3 = (-1 * b - 6 * c) / 6;

  var func = function func(x) {
    if (x < 1) {
      return p0 + x * (x * (p2 + x * p3));
    } else if (x < 2) {
      return q0 + x * (q1 + x * (q2 + x * q3));
    } else {
      return 0;
    }
  };

  func.filterFunctionName = 'cubicBC';
  func.b = b;
  func.c = c;
  return func;
}

; // TODO: add more filter functions



/***/ }),

/***/ "./lib/filter/filter-namespace.js":
/*!****************************************!*\
  !*** ./lib/filter/filter-namespace.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./lib/filter/filter.js");
/* harmony import */ var _filter_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-functions */ "./lib/filter/filter-functions.js");


/**
 * Filter namespace
 *
 * @namespace lens.filter
 */

var filter = {
  Filter: _filter__WEBPACK_IMPORTED_MODULE_0__["default"],
  filterFunctions: _filter_functions__WEBPACK_IMPORTED_MODULE_1__
};
/* harmony default export */ __webpack_exports__["default"] = (filter);

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
   * @param {lens.filter.Filter~filterFunction} windowingFunction Windowing function.
   * @param {number} support Filter region of support - the filter support limit.
   * @param {number} scale Dimension scaling to fit window support (usally 1.0).
   * @param {number} [blur=1] X-scale (blur-sharpen).
   * @param {number|null} [windowSupport=null] Window support, usually equal to support (expert only).
   */
  function Filter(filterFunction, windowingFunction, support, scale) {
    var blur = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    var windowSupport = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

    _classCallCheck(this, Filter);

    this.filterFunction = filterFunction;
    this.windowingFunction = windowingFunction;
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
      return this.windowingFunction(x, this.support, this.windowSupport);
    }
  }]);

  return Filter;
}();

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./lib/image/abstract-image.js":
/*!*************************************!*\
  !*** ./lib/image/abstract-image.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewport */ "./lib/viewport.js");
/* harmony import */ var _vpx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vpx */ "./lib/vpx.js");
/* harmony import */ var _mixins_virtual_pixel_trait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/virtual-pixel-trait */ "./lib/mixins/virtual-pixel-trait.js");
/* harmony import */ var _mixins_interpolation_trait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/interpolation-trait */ "./lib/mixins/interpolation-trait.js");
/* harmony import */ var _interpolation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interpolation */ "./lib/interpolation.js");
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
    this.viewport = new _viewport__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, this.width - 1, this.height - 1);
    this.backgroundColor = [0, 0, 0, 0]; // Transparent;

    this.virtualPixelMethod = _vpx__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSPARENT;
    this.quantumRange = 255;
    this.interpolationMethod = _interpolation__WEBPACK_IMPORTED_MODULE_4__["default"].INTEGER;
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

Object.assign(AbstractImage.prototype, _mixins_virtual_pixel_trait__WEBPACK_IMPORTED_MODULE_2__["default"]);
Object.assign(AbstractImage.prototype, _mixins_interpolation_trait__WEBPACK_IMPORTED_MODULE_3__["default"]);
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
/* harmony import */ var _abstract_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-image */ "./lib/image/abstract-image.js");
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
}(_abstract_image__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./lib/image/canvas.js");
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
   * @param {external:Image|HTMLImageElement} image DOM Image object
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
}(_canvas__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (DomImage);

/***/ }),

/***/ "./lib/image/image.js":
/*!****************************!*\
  !*** ./lib/image/image.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-image */ "./lib/image/abstract-image.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./lib/image/canvas.js");
/* harmony import */ var _dom_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-image */ "./lib/image/dom-image.js");



/**
 * Image namespace
 *
 * @namespace lens.image
 */

var image = {
  AbstractImage: _abstract_image__WEBPACK_IMPORTED_MODULE_0__["default"],
  Canvas: _canvas__WEBPACK_IMPORTED_MODULE_1__["default"],
  DomImage: _dom_image__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (image);

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

/***/ "./lib/lens.js":
/*!*********************!*\
  !*** ./lib/lens.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _distorter_distorter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distorter/distorter */ "./lib/distorter/distorter.js");
/* harmony import */ var _distortion_distortion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distortion/distortion */ "./lib/distortion/distortion.js");
/* harmony import */ var _exception_exception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exception/exception */ "./lib/exception/exception.js");
/* harmony import */ var _filter_filter_namespace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter/filter-namespace */ "./lib/filter/filter-namespace.js");
/* harmony import */ var _image_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image/image */ "./lib/image/image.js");
/* harmony import */ var _mixins_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mixins/mixins */ "./lib/mixins/mixins.js");
/* harmony import */ var _resampler_resampler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resampler/resampler */ "./lib/resampler/resampler.js");
/* harmony import */ var _util_util_namespace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/util-namespace */ "./lib/util/util-namespace.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./lib/constants.js");
/* harmony import */ var _distort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./distort */ "./lib/distort.js");
/* harmony import */ var _distorts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./distorts */ "./lib/distorts.js");
/* harmony import */ var _filter_presets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filter-presets */ "./lib/filter-presets.js");
/* harmony import */ var _interpolation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interpolation */ "./lib/interpolation.js");
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./viewport */ "./lib/viewport.js");
/* harmony import */ var _vpx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vpx */ "./lib/vpx.js");
















/**
 * Library version
 * @memberOf lens
 */

var VERSION = "0.1.0";
/**
 * Lens library namespace
 *
 * @namespace lens
 */

var lens = {
  // Constants
  VERSION: VERSION,
  EPSILON: _constants__WEBPACK_IMPORTED_MODULE_8__["EPSILON"],
  MAXIMUM_VALUE: _constants__WEBPACK_IMPORTED_MODULE_8__["MAXIMUM_VALUE"],
  M_2PI: _constants__WEBPACK_IMPORTED_MODULE_8__["M_2PI"],
  M_PI2: _constants__WEBPACK_IMPORTED_MODULE_8__["M_PI2"],
  // Enums
  distorts: _distorts__WEBPACK_IMPORTED_MODULE_10__["default"],
  filterPresets: _filter_presets__WEBPACK_IMPORTED_MODULE_11__["default"],
  interpolation: _interpolation__WEBPACK_IMPORTED_MODULE_12__["default"],
  vpx: _vpx__WEBPACK_IMPORTED_MODULE_14__["default"],
  // Types
  Viewport: _viewport__WEBPACK_IMPORTED_MODULE_13__["default"],
  // Namespaces
  distorter: _distorter_distorter__WEBPACK_IMPORTED_MODULE_0__["default"],
  distortion: _distortion_distortion__WEBPACK_IMPORTED_MODULE_1__["default"],
  exception: _exception_exception__WEBPACK_IMPORTED_MODULE_2__["default"],
  filter: _filter_filter_namespace__WEBPACK_IMPORTED_MODULE_3__["default"],
  image: _image_image__WEBPACK_IMPORTED_MODULE_4__["default"],
  mixins: _mixins_mixins__WEBPACK_IMPORTED_MODULE_5__["default"],
  resampler: _resampler_resampler__WEBPACK_IMPORTED_MODULE_6__["default"],
  util: _util_util_namespace__WEBPACK_IMPORTED_MODULE_7__["default"],
  // Functions
  distort: _distort__WEBPACK_IMPORTED_MODULE_9__["default"],
  registerDistortionResolver: _distorts__WEBPACK_IMPORTED_MODULE_10__["registerDistortionResolver"],
  unregisterDistortionResolver: _distorts__WEBPACK_IMPORTED_MODULE_10__["unregisterDistortionResolver"]
};
/* harmony default export */ __webpack_exports__["default"] = (lens);

/***/ }),

/***/ "./lib/mixins/creates-best-fit-viewport-from-apexes.js":
/*!*************************************************************!*\
  !*** ./lib/mixins/creates-best-fit-viewport-from-apexes.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewport */ "./lib/viewport.js");
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
        bestFit = new _viewport__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, x, y);

    [[u2, v1], [u2, v2], [u1, v2]].forEach(function (apex) {
      return bestFit.expand.apply(bestFit, _toConsumableArray(_this.forwardMap.apply(_this, _toConsumableArray(apex))));
    });
    bestFit.fixBounds();
    return bestFit;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createsBestFitViewportFromApexes);

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

/***/ "./lib/mixins/mixins.js":
/*!******************************!*\
  !*** ./lib/mixins/mixins.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creates_best_fit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creates-best-fit-viewport-from-apexes */ "./lib/mixins/creates-best-fit-viewport-from-apexes.js");
/* harmony import */ var _interpolation_trait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interpolation-trait */ "./lib/mixins/interpolation-trait.js");
/* harmony import */ var _virtual_pixel_trait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtual-pixel-trait */ "./lib/mixins/virtual-pixel-trait.js");



/**
 * Mixins namespace
 *
 * @namespace lens.mixins
 */

var mixins = {
  createsBestFitViewportFromApexes: _creates_best_fit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_0__["default"],
  interpolationTrait: _interpolation_trait__WEBPACK_IMPORTED_MODULE_1__["default"],
  virtualPixelTrait: _virtual_pixel_trait__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (mixins);

/***/ }),

/***/ "./lib/mixins/virtual-pixel-trait.js":
/*!*******************************************!*\
  !*** ./lib/mixins/virtual-pixel-trait.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vpx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vpx */ "./lib/vpx.js");
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
      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].BACKGROUND:
        return this.backgroundColor.slice();

      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].EDGE:
        return this.getImagePixelColor.apply(this, _toConsumableArray(getEdgeCoords(x, y, this.width, this.height)));

      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].MIRROR:
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

      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].TILE:
        return this.getImagePixelColor.apply(this, _toConsumableArray(getTileCoords(x, y, this.width, this.height)));

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
          return method === _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].HORIZONTAL_TILE ? this.backgroundColor.slice() : this.getImagePixelColor.apply(this, _toConsumableArray(getEdgeCoords(x, y, this.width, this.height)));
        }

        return this.getImagePixelColor.apply(this, _toConsumableArray(getTileCoords(x, y, this.width, this.height)));

      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].VERTICAL_TILE:
      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].VERTICAL_TILE_EDGE:
        if (x < 0 || x >= this.width) {
          return method === _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].VERTICAL_TILE ? this.backgroundColor.slice() : this.getImagePixelColor.apply(this, _toConsumableArray(getEdgeCoords(x, y, this.width, this.height)));
        }

        return this.getImagePixelColor.apply(this, _toConsumableArray(getTileCoords(x, y, this.width, this.height)));

      case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].RANDOM:
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
/* harmony import */ var _vpx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vpx */ "./lib/vpx.js");
/* harmony import */ var _interpolation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interpolation */ "./lib/interpolation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "./lib/util/util.js");
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
          return Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["blendColors"])(color, validity, this.matteColor);
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

      this.limitReached = 4 * this.A * this.C - this.B * this.B > _constants__WEBPACK_IMPORTED_MODULE_2__["MAXIMUM_VALUE"];
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
        case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].TRANSPARENT:
        case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].BACKGROUND:
        case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].BLACK:
        case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].WHITE:
        case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].GRAY:
          return this.limitReached || this.outOfImageBounds(u, v);

        case _vpx__WEBPACK_IMPORTED_MODULE_0__["default"].EDGE:
          return u + this.uLimit < this.imageViewport.x1 && v + this.vLimit < this.imageViewport.y1 || u + this.uLimit < this.imageViewport.x1 && v - this.vLimit > this.imageViewport.y2 || u - this.uLimit > this.imageViewport.x2 && v + this.vLimit < this.imageViewport.y1 || u - this.uLimit > this.imageViewport.x2 && v - this.vLimit > this.imageViewport.y2;

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




/***/ }),

/***/ "./lib/resampler/point.js":
/*!********************************!*\
  !*** ./lib/resampler/point.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ "./lib/util/util.js");
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

      if (validity > 0) {
        var _this$mapper$reverseM = this.mapper.reverseMap(x, y),
            _this$mapper$reverseM2 = _slicedToArray(_this$mapper$reverseM, 2),
            u = _this$mapper$reverseM2[0],
            v = _this$mapper$reverseM2[1];

        var color = this.image.getInterpolatedPixelColor(u, v);

        if (validity < 1) {
          return Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["blendColors"])(color, this.matteColor, validity);
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

/***/ "./lib/resampler/resampler.js":
/*!************************************!*\
  !*** ./lib/resampler/resampler.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _e_w_a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e-w-a */ "./lib/resampler/e-w-a.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./lib/resampler/point.js");


/**
 * Resampler namespace
 *
 * @namespace lens.resampler
 */

var resampler = {
  EWA: _e_w_a__WEBPACK_IMPORTED_MODULE_0__["default"],
  Point: _point__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (resampler);

/***/ }),

/***/ "./lib/util/gauss-jordan-elimination/gauss-jordan-elimination.js":
/*!***********************************************************************!*\
  !*** ./lib/util/gauss-jordan-elimination/gauss-jordan-elimination.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solver */ "./lib/util/gauss-jordan-elimination/solver.js");
/* harmony import */ var _least_squares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./least-squares */ "./lib/util/gauss-jordan-elimination/least-squares.js");


/**
 * Gauss Jordan Elimination namespace
 *
 * @namespace lens.util.gaussJordanElimination
 */

var gaussJordanElimination = {
  Solver: _solver__WEBPACK_IMPORTED_MODULE_0__["default"],
  LeastSquares: _least_squares__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (gaussJordanElimination);

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




/***/ }),

/***/ "./lib/util/gauss-jordan-elimination/least-squares.js":
/*!************************************************************!*\
  !*** ./lib/util/gauss-jordan-elimination/least-squares.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solver */ "./lib/util/gauss-jordan-elimination/solver.js");
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
}(_solver__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
/* harmony import */ var _exception_unsolvable_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../exception/unsolvable-matrix */ "./lib/exception/unsolvable-matrix.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./lib/util/util.js");
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
          if (pivots[j] !== 1) {
            for (var k = 0; k < rank; k++) {
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
          for (var _k = 0; _k < rank; _k++) {
            swap(matrix, row, _k, col, _k);
          }

          for (var _k2 = 0; _k2 < numVectors; _k2++) {
            swap(vectors, _k2, row, _k2, col);
          }
        }

        rows[i] = row;
        cols[i] = col;

        if (matrix[col][col] === 0) {
          unsolvable();
        }

        var scale = Object(_util__WEBPACK_IMPORTED_MODULE_1__["perceptibleReciprocal"])(matrix[col][col]);
        matrix[col][col] = 1;

        for (var _j = 0; _j < rank; _j++) {
          matrix[col][_j] *= scale;
        }

        for (var _j2 = 0; _j2 < numVectors; _j2++) {
          vectors[_j2][col] *= scale;
        }

        for (var _j3 = 0; _j3 < rank; _j3++) {
          if (_j3 !== col) {
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
        if (cols[_j4] !== rows[_j4]) {
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





/***/ }),

/***/ "./lib/util/util-namespace.js":
/*!************************************!*\
  !*** ./lib/util/util-namespace.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./lib/util/util.js");
/* harmony import */ var _gauss_jordan_elimination_gauss_jordan_elimination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gauss-jordan-elimination/gauss-jordan-elimination */ "./lib/util/gauss-jordan-elimination/gauss-jordan-elimination.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Utility functions namespace
 *
 * @namespace lens.util
 */

var util = _objectSpread({}, _util__WEBPACK_IMPORTED_MODULE_0__, {
  gaussJordanElimination: _gauss_jordan_elimination_gauss_jordan_elimination__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/* harmony default export */ __webpack_exports__["default"] = (util);

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
    /**
     * Sets viewport offset
     *
     * @param {number} x
     * @param {number} y
     * @returns {lens.Viewport}
     */

  }, {
    key: "offset",
    value: function offset(x, y) {
      this.x1 += x;
      this.y1 += y;
      this.x2 += x;
      this.y2 += y;
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

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW5zL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sZW5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlbnMvLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZGlzdG9ydC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRlci9kaXN0b3J0ZXIuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9kaXN0b3J0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9kaXN0b3J0ZXIvcmV2ZXJzZS1waXhlbC1tYXBwaW5nLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZGlzdG9ydGlvbi9hZmZpbmUuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9kaXN0b3J0aW9uL2FyYy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRpb24vZGlzdG9ydGlvbi5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRpb24vcGVyc3BlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9kaXN0b3J0cy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi9leGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9leGNlcHRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9leGNlcHRpb24vaW52YWxpZC1hcmd1bWVudC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi9pbnZhbGlkLWFyZ3VtZW50cy1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9leGNlcHRpb24vbGVucy1leGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9leGNlcHRpb24vdW5zb2x2YWJsZS1tYXRyaXguanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9maWx0ZXItcHJlc2V0cy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2ZpbHRlci9maWx0ZXItZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZmlsdGVyL2ZpbHRlci1uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvaW1hZ2UvYWJzdHJhY3QtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9pbWFnZS9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9pbWFnZS9kb20taW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9pbWFnZS9pbWFnZS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2ludGVycG9sYXRpb24uanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9sZW5zLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvbWl4aW5zL2NyZWF0ZXMtYmVzdC1maXQtdmlld3BvcnQtZnJvbS1hcGV4ZXMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9taXhpbnMvaW50ZXJwb2xhdGlvbi10cmFpdC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL21peGlucy9taXhpbnMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9taXhpbnMvdmlydHVhbC1waXhlbC10cmFpdC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3Jlc2FtcGxlci9lLXctYS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3Jlc2FtcGxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3Jlc2FtcGxlci9wb2ludC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3Jlc2FtcGxlci9yZXNhbXBsZXIuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi91dGlsL2dhdXNzLWpvcmRhbi1lbGltaW5hdGlvbi9nYXVzcy1qb3JkYW4tZWxpbWluYXRpb24uanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi91dGlsL2dhdXNzLWpvcmRhbi1lbGltaW5hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3V0aWwvZ2F1c3Mtam9yZGFuLWVsaW1pbmF0aW9uL2xlYXN0LXNxdWFyZXMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi91dGlsL2dhdXNzLWpvcmRhbi1lbGltaW5hdGlvbi9zb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi91dGlsL2luZGV4LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdXRpbC91dGlsLW5hbWVzcGFjZS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3ZpZXdwb3J0LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdnB4LmpzIl0sIm5hbWVzIjpbIkVQU0lMT04iLCJNQVhJTVVNX1ZBTFVFIiwiTV9QSTIiLCJNYXRoIiwiUEkiLCJNXzJQSSIsImRlZmF1bHRPcHRpb25zIiwiYmVzdEZpdCIsImZpbHRlciIsImZpbHRlclByZXNldHMiLCJST0JJRE9VWCIsInJlc2FtcGxlIiwiYXN5bmMiLCJvdXRwdXRTY2FsaW5nIiwiZGlzdG9ydCIsImltYWdlIiwiZGlzdG9ydGlvbiIsImFyZ3MiLCJvcHRpb25zIiwibWFrZU9wdGlvbnMiLCJmb3JjZUJlc3RGaXQiLCJkaXN0b3J0ZWQiLCJzeW5jIiwibWFrZURpc3RvcnRlciIsIm1ha2VSZXNhbXBsZXIiLCJzdXBlcnNhbXBsZSIsInNjYWxlU3VwZXJzYW1wbGVkIiwiZSIsIlByb21pc2UiLCJyZWplY3QiLCJ0aGVuIiwic3VwZXJzYW1wbGVkIiwic2NhbGUiLCJjb25zb2xlIiwid2FybiIsIk9iamVjdCIsImFzc2lnbiIsInJlc2FtcGxlciIsImRpc3QiLCJkaXN0b3J0ZXIiLCJ2aWV3cG9ydCIsInJzbSIsIm1ha2VGaWx0ZXIiLCJtYXR0ZUNvbG9yIiwic2xpY2UiLCJSZXZlcnNlUGl4ZWxNYXBwaW5nIiwibWFwcGVyIiwic2V0SW1hZ2UiLCJzZXRNYXBwZXIiLCJwcmVwYXJlVmlld3BvcnQiLCJ4MSIsImZsb29yIiwieTEiLCJ4MiIsInkyIiwiY2FudmFzIiwiZ2V0QmxhbmsiLCJzY2FsaW5nIiwicGVyZm9ybURpc3RvcnRpb25Bc3luYyIsInBlcmZvcm1EaXN0b3J0aW9uIiwieSIsIngiLCJzZXRQaXhlbENvbG9yIiwiZ2V0UmVzYW1wbGVkQ29sb3IiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImNsb25lIiwiaGFzQmVzdEZpdFZpZXdwb3J0IiwiZ2V0QmVzdEZpdFZpZXdwb3J0IiwibWFwIiwibWF0cml4IiwiQWZmaW5lIiwiZm9yd2FyZE1hdHJpeCIsImNvbnN0cnVjdG9yIiwiaW52ZXJ0QWZmaW5lTWF0cml4IiwiaGFzUGFydGlhbERlcml2YXRpdmVzIiwiaGFzQ29uc3RhbnRQYXJ0aWFsRGVyaXZhdGl2ZXMiLCJjb250cm9sUG9pbnRzIiwibGVuZ3RoIiwiSW52YWxpZEFyZ3VtZW50c0xlbmd0aCIsImxlYXN0U3F1YXJlcyIsIkxlYXN0U3F1YXJlcyIsImkiLCJ1IiwidiIsImFkZFRlcm1zIiwidmVjdG9ycyIsInNvbHZlIiwiZ2V0VmVjdG9ycyIsImNvbmNhdCIsImRldGVybWluYW50IiwicGVyY2VwdGlibGVSZWNpcHJvY2FsIiwicHJvdG90eXBlIiwiY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXMiLCJBcmMiLCJjMCIsImMxIiwiYzIiLCJjMyIsImM0IiwiYW5nbGVUb1dpZHRoIiwid2lkdGgiLCJyYWRpdXNUb0hlaWdodCIsImhlaWdodCIsImdldFVWIiwiYSIsImNhIiwiY29zIiwic2EiLCJzaW4iLCJ2cCIsIlZpZXdwb3J0IiwiZXhwYW5kIiwiY2VpbCIsImZpeEJvdW5kcyIsImF0YW4yIiwicm91bmQiLCJoeXBvdCIsIkludmFsaWRBcmd1bWVudCIsImRlZzJyYWQiLCJQZXJzcGVjdGl2ZSIsInAiLCJxIiwiciIsInJldmVyc2VNYXRyaXgiLCJkZW5vbWluYXRvciIsImludmVydFBlcnNwZWN0aXZlTWF0cml4IiwidmFsaWRpdHkiLCJhYnNSIiwiYWJzIiwiYWJzQzYiLCJhYnNDNyIsInBvdyIsImludmVyc2UiLCJhZmZpbmVCeUNvbnRyb2xQb2ludHMiLCJmcm9tQ29udHJvbFBvaW50cyIsImFmZmluZUJ5TWF0cml4Iiwic3giLCJyeSIsInJ4Iiwic3kiLCJ0eCIsInR5IiwiZnJvbUZvcndhcmRNYXRyaXgiLCJwZXJzcGVjdGl2ZUJ5Q29udHJvbFBvaW50cyIsInBlcnNwZWN0aXZlQnlNYXRyaXgiLCJhcmNCeUFyZ3VtZW50cyIsImZyb21Bcmd1bWVudHMiLCJkaXN0b3J0cyIsIkFGRklORSIsIkFGRklORV9QUk9KRUNUSU9OIiwiUEVSU1BFQ1RJVkUiLCJQRVJTUEVDVElWRV9QUk9KRUNUSU9OIiwiQVJDIiwicmVnaXN0ZXJEaXN0b3J0aW9uUmVzb2x2ZXIiLCJuYW1lIiwicmVzb2x2ZXIiLCJ1bnJlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyIiwiZXhjZXB0aW9uIiwiTGVuc0V4Y2VwdGlvbiIsIlVuc29sdmFibGVNYXRyaXgiLCJtZXNzYWdlIiwiRXJyb3IiLCJjYXB0dXJlU3RhY2tUcmFjZSIsInN0YWNrIiwiRmlsdGVyIiwiY3ViaWNCQyIsImJveCIsIlJPQklET1VYX1NIQVJQIiwiZnVuYyIsImZpbHRlckZ1bmN0aW9uTmFtZSIsImIiLCJjIiwicDAiLCJwMiIsInAzIiwicTAiLCJxMSIsInEyIiwicTMiLCJmaWx0ZXJGdW5jdGlvbnMiLCJmaWx0ZXJGdW5jdGlvbiIsIndpbmRvd2luZ0Z1bmN0aW9uIiwic3VwcG9ydCIsImJsdXIiLCJ3aW5kb3dTdXBwb3J0IiwieEJsdXIiLCJ3aW5kb3ciLCJub3RJbXBsZW1lbnRlZCIsIm1ldGhvZCIsIkFic3RyYWN0SW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2aXJ0dWFsUGl4ZWxNZXRob2QiLCJ2cHgiLCJUUkFOU1BBUkVOVCIsInF1YW50dW1SYW5nZSIsImludGVycG9sYXRpb25NZXRob2QiLCJpbnRlcnBvbGF0aW9uIiwiSU5URUdFUiIsImdldEltYWdlUGl4ZWxDb2xvciIsImdldFZpcnR1YWxQaXhlbENvbG9yIiwiY29sb3IiLCJzZXRJbWFnZVBpeGVsQ29sb3IiLCJibGFuayIsInByZXBhcmVCbGFuayIsInJlc2l6ZWQiLCJyZXNpemUiLCJ2aXJ0dWFsUGl4ZWxUcmFpdCIsImludGVycG9sYXRpb25UcmFpdCIsIkNhbnZhcyIsImltYWdlRGF0YSIsImdldENvbnRleHQiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwib2Zmc2V0IiwiQXJyYXkiLCJjYWxsIiwiZm9yRWFjaCIsImNoYW5uZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwdXRJbWFnZURhdGEiLCJkcmF3SW1hZ2UiLCJkc3QiLCJEb21JbWFnZSIsIkltYWdlIiwib25sb2FkIiwic3JjIiwidG9EYXRhVVJMIiwiQVZFUkFHRSIsIkFWRVJBR0VfOSIsIkFWRVJBR0VfMTYiLCJCQUNLR1JPVU5EIiwiVkVSU0lPTiIsInByb2Nlc3MiLCJsZW5zIiwibWl4aW5zIiwidXRpbCIsInUxIiwidjEiLCJ1MiIsInYyIiwiZm9yd2FyZE1hcCIsImFwZXgiLCJnZXRJbnRlcnBvbGF0ZWRQaXhlbENvbG9yIiwibWV0aG9kcyIsImludGVycG9sYXRlQXZlcmFnZSIsImdldFBpeGVsQ29sb3IiLCJjb3VudCIsInN0YXJ0WCIsInN0YXJ0WSIsImVuZFgiLCJlbmRZIiwiWSIsIlgiLCJnYW1tYSIsImdldEVkZ2VDb29yZHMiLCJtYXgiLCJtaW4iLCJnZXRUaWxlQ29vcmRzIiwidnB4TWV0aG9kcyIsIkVER0UiLCJNSVJST1IiLCJUSUxFIiwiQkxBQ0siLCJXSElURSIsImZpbGwiLCJHUkFZIiwiSE9SSVpPTlRBTF9USUxFIiwiSE9SSVpPTlRBTF9USUxFX0VER0UiLCJWRVJUSUNBTF9USUxFIiwiVkVSVElDQUxfVElMRV9FREdFIiwiUkFORE9NIiwicmFuZG9tIiwiV0VJR0hUX0xPT0tVUF9UQUJMRV9XSURUSCIsImJ1aWxkV2VpZ2h0TG9va3VwVGFibGUiLCJ0YWJsZSIsInJTY2FsZSIsInNxcnQiLCJRIiwiZ2V0V2VpZ2h0IiwiY2xhbXBUb1F1YW50dW0iLCJ2YWx1ZSIsImNsYW1wRWxsaXBzZUF4ZXMiLCJkdXgiLCJkdXkiLCJkdngiLCJkdnkiLCJkIiwiYWEiLCJiYiIsImNjIiwiZGQiLCJuMTEiLCJuMTIiLCJuMjEiLCJuMjIiLCJkZXQiLCJ0d2ljZV9kZXQiLCJmcm9iZW5pdXNfc3F1YXJlZCIsImRpc2NyaW1pbmFudCIsInNxcnRfZGlzY3JpbWluYW50IiwiczFzMSIsInMyczIiLCJzMXMxbWludXNuMTEiLCJzMXMxbWludXNuMjIiLCJzMXMxbWludXNuMTFfc3F1YXJlZCIsInMxczFtaW51c24yMl9zcXVhcmVkIiwidGVtcF91MTEiLCJ0ZW1wX3UyMSIsIm5vcm0iLCJ1MTEiLCJ1MjEiLCJtYWpvcl9tYWciLCJtaW5vcl9tYWciLCJtYWpvcl94IiwibWFqb3JfeSIsIm1pbm9yX3giLCJtaW5vcl95IiwiRVdBIiwicmVzaXplRmlsdGVyIiwid2VpZ2h0TG9va3VwVGFibGUiLCJpbWFnZVZpZXdwb3J0IiwiaW1hZ2VBcmVhIiwiaW1hZ2VWaXJ0dWFsUGl4ZWxNZXRob2QiLCJpbWFnZUF2ZXJhZ2VDb2xvciIsIkEiLCJCIiwiQyIsIkYiLCJ1TGltaXQiLCJ2TGltaXQiLCJ1V2lkdGgiLCJzbG9wZSIsImVsbGlwc2VJc1NldFVwIiwibGltaXRSZWFjaGVkIiwiZ2V0VmFsaWRpdHkiLCJyZXZlcnNlTWFwIiwic2V0dXBFbGxpcHNlT25jZSIsImdldFBhcnRpYWxEZXJpdmF0aXZlcyIsInNldHVwRWxsaXBzZSIsImdldFdlaWdodGVkQXZlcmFnZSIsImJsZW5kQ29sb3JzIiwiYXJlYSIsImRlcml2YXRpdmVzIiwiZGVyaXZhdGl2ZSIsImluaXRFbGxpcHNlIiwic2NhbGVFbGxpcHNlIiwidTAiLCJ2MCIsImRvZXNudE5lZWRSZXNhbXBsaW5nIiwiZ2V0SW1hZ2VBdmVyYWdlQ29sb3IiLCJkaXZpc29yTSIsImRpdmlzb3JDIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYWxwaGEiLCJ1dyIsIkREUSIsInVzdGFydCIsInVlbmQiLCJVIiwiViIsIkRRIiwid2VpZ2h0IiwiZyIsIm91dE9mSW1hZ2VCb3VuZHMiLCJnZXRBdmVyYWdlQ29sb3IiLCJQb2ludCIsImdhdXNzSm9yZGFuRWxpbWluYXRpb24iLCJTb2x2ZXIiLCJyYW5rIiwibnVtVmVjdG9ycyIsInB1c2giLCJ0ZXJtcyIsInJlc3VsdHMiLCJqIiwic3dhcCIsImFycmF5Iiwicm93MSIsImNvbDEiLCJyb3cyIiwiY29sMiIsInVuc29sdmFibGUiLCJzb2x2ZWQiLCJyb3ciLCJ2ZWN0b3IiLCJ2YWxpZGF0ZSIsImNvbHMiLCJyb3dzIiwicGl2b3RzIiwiY29sIiwiayIsInV0aWxzIiwic2lnbiIsImNvbG9yMSIsIndlaWdodDEiLCJjb2xvcjIiLCJ3ZWlnaHQyIiwicmFkMmRlZyIsInJhZGlhbnMiLCJkZWdyZWVzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZB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QUFHLEdBQUc7QUFDVjs7O0FBR0F1QyxZQUFVLEVBQUUsQ0FKRjs7QUFNVjs7O0FBR0E2QixNQUFJLEVBQUUsQ0FUSTs7QUFXVjs7O0FBR0FDLFFBQU0sRUFBRSxDQWRFOztBQWdCVjs7O0FBR0FVLFFBQU0sRUFBRSxDQW5CRTs7QUFxQlY7OztBQUdBVCxNQUFJLEVBQUUsQ0F4Qkk7O0FBMEJWOzs7QUFHQXJFLGFBQVcsRUFBRSxDQTdCSDs7QUErQlY7OztBQUdBc0UsT0FBSyxFQUFFLENBbENHOztBQW9DVjs7O0FBR0FHLE1BQUksRUFBRSxFQXZDSTs7QUF5Q1Y7OztBQUdBRixPQUFLLEVBQUUsRUE1Q0c7O0FBOENWOzs7QUFHQUcsaUJBQWUsRUFBRSxFQWpEUDs7QUFtRFY7OztBQUdBRSxlQUFhLEVBQUUsRUF0REw7O0FBd0RWOzs7QUFHQUQsc0JBQW9CLEVBQUUsRUEzRFo7O0FBNkRWOzs7QUFHQUUsb0JBQWtCLEVBQUUsRUFoRVYsQ0FrRVY7O0FBbEVVLENBQVo7QUFxRWU5RSxrRUFBZixFIiwiZmlsZSI6ImxlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsZW5zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxlbnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9sZW5zLmpzXCIpO1xuIiwiLyoqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBFUFNJTE9OID0gMS4wZS0xMjtcclxuLyoqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBNQVhJTVVNX1ZBTFVFID0gMS43OTc2OTMxMzQ4NjIzMTU3MEUrMzA4O1xyXG5cclxuLyoqXHJcbiAqIFBpLzJcclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICogQG1lbWJlck9mIGxlbnNcclxuICovXHJcbmNvbnN0IE1fUEkyID0gTWF0aC5QSSAvIDI7XHJcblxyXG4vKipcclxuICogUGkgKiAyXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xyXG5jb25zdCBNXzJQSSA9IE1hdGguUEkgKiAyO1xyXG5cclxuZXhwb3J0IHtcclxuICBFUFNJTE9OLFxyXG4gIE1BWElNVU1fVkFMVUUsXHJcbiAgTV9QSTIsXHJcbiAgTV8yUElcclxufTsiLCJpbXBvcnQgKiBhcyBkaXN0b3J0ZXIgZnJvbSBcIi4vZGlzdG9ydGVyXCI7XHJcbmltcG9ydCAqIGFzIHJlc2FtcGxlciBmcm9tIFwiLi9yZXNhbXBsZXJcIjtcclxuaW1wb3J0IGZpbHRlclByZXNldHMgZnJvbSAnLi9maWx0ZXItcHJlc2V0cyc7XHJcblxyXG5sZXQgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgYmVzdEZpdDogZmFsc2UsXHJcbiAgZmlsdGVyOiBmaWx0ZXJQcmVzZXRzLlJPQklET1VYLFxyXG4gIHJlc2FtcGxlOiB0cnVlLFxyXG4gIGFzeW5jOiB0cnVlLFxyXG4gIG91dHB1dFNjYWxpbmc6IDFcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQG5hbWUgZGlzdG9ydFxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKiBAdmFyaWF0aW9uIDJcclxuICpcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gaW1hZ2VcclxuICogQHBhcmFtIHtEaXN0b3J0aW9uSW50ZXJmYWNlfSBkaXN0b3J0aW9uXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbk9wdGlvbnN9IG9wdGlvbnNcclxuICpcclxuICogQHJldHVybnMge0ltYWdlSW50ZXJmYWNlfFByb21pc2U8SW1hZ2VJbnRlcmZhY2U+fVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBQZXJmb3JtcyBkaXN0b3J0aW9uIG9mIGltYWdlXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqIEBwYXJhbSB7SW1hZ2VJbnRlcmZhY2V9IGltYWdlXHJcbiAqIEBwYXJhbSB7bGVucy5kaXN0b3J0c3xsZW5zfmRpc3RvcnRpb25SZXNvbHZlcn0gZGlzdG9ydGlvblxyXG4gKiBAcGFyYW0ge2FycmF5fSBhcmdzXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbk9wdGlvbnN9IFtvcHRpb25zXVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SW1hZ2VJbnRlcmZhY2V8UHJvbWlzZTxJbWFnZUludGVyZmFjZT59XHJcbiAqL1xyXG5mdW5jdGlvbiBkaXN0b3J0KGltYWdlLCBkaXN0b3J0aW9uLCBhcmdzLCBvcHRpb25zID0ge30pIHtcclxuICB0cnkge1xyXG4gICAgaWYgKHR5cGVvZiBkaXN0b3J0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGRpc3RvcnRpb24gID0gZGlzdG9ydGlvbihhcmdzLCBpbWFnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcHRpb25zICAgICA9IGFyZ3MgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9ucyA9IG1ha2VPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuICAgIGlmIChkaXN0b3J0aW9uLmZvcmNlQmVzdEZpdCkge1xyXG4gICAgICBvcHRpb25zLmJlc3RGaXQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkaXN0b3J0ZWQgPSBzeW5jKFxyXG4gICAgICBtYWtlRGlzdG9ydGVyKFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIGRpc3RvcnRpb24sXHJcbiAgICAgICAgbWFrZVJlc2FtcGxlcihpbWFnZSwgZGlzdG9ydGlvbiwgb3B0aW9ucyksXHJcbiAgICAgICAgb3B0aW9uc1xyXG4gICAgICApLmRpc3RvcnQoKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5zdXBlcnNhbXBsZSAmJiBvcHRpb25zLnN1cGVyc2FtcGxlICE9PSAxKSB7XHJcbiAgICAgIHJldHVybiBzY2FsZVN1cGVyc2FtcGxlZChkaXN0b3J0ZWQsIDEgLyBvcHRpb25zLnN1cGVyc2FtcGxlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGlzdG9ydGVkO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuYXN5bmMpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IGU7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogU3luYyBJbWFnZUludGVyZmFjZSBpbnRlcm5hbCBkYXRhIHN0b3JhZ2Ugd2l0aCBpbWFnZSBvYmplY3QuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7SW1hZ2VJbnRlcmZhY2V8UHJvbWlzZTxJbWFnZUludGVyZmFjZT59IGRpc3RvcnRlZFxyXG4gKiBAcmV0dXJucyB7SW1hZ2VJbnRlcmZhY2V8UHJvbWlzZTxJbWFnZUludGVyZmFjZT59XHJcbiAqL1xyXG5mdW5jdGlvbiBzeW5jKGRpc3RvcnRlZCkge1xyXG4gIGlmIChkaXN0b3J0ZWQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICByZXR1cm4gZGlzdG9ydGVkLnRoZW4oZGlzdG9ydGVkID0+IHN5bmMoZGlzdG9ydGVkKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoJ3N5bmMnIGluIGRpc3RvcnRlZCAmJiB0eXBlb2YgZGlzdG9ydGVkLnN5bmMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiBkaXN0b3J0ZWQuc3luYygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpc3RvcnRlZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNjYWxlcyBzdXBlcnNhbXBsZWQgaW1hZ2UgYmFjayB0byBub3JtYWwgc2l6ZS5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZXxQcm9taXNlPEltYWdlSW50ZXJmYWNlPn0gc3VwZXJzYW1wbGVkXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVxyXG4gKiBAcmV0dXJucyB7SW1hZ2VJbnRlcmZhY2V8UHJvbWlzZTxJbWFnZUludGVyZmFjZT59XHJcbiAqL1xyXG5mdW5jdGlvbiBzY2FsZVN1cGVyc2FtcGxlZChzdXBlcnNhbXBsZWQsIHNjYWxlKSB7XHJcbiAgaWYgKHN1cGVyc2FtcGxlZCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgIHJldHVybiBzdXBlcnNhbXBsZWQudGhlbihzdXBlcnNhbXBsZWQgPT4gc2NhbGVTdXBlcnNhbXBsZWQoc3VwZXJzYW1wbGVkLCBzY2FsZSkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCdzY2FsZScgaW4gc3VwZXJzYW1wbGVkICYmIHR5cGVvZiBzdXBlcnNhbXBsZWQuc2NhbGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiBzdXBlcnNhbXBsZWQuc2NhbGUoc2NhbGUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLndhcm4oYE1ldGhvZCAnc2NhbGUoKScgbm90IGZvdW5kIGluIGltYWdlIG9iamVjdC4gTm8gc2NhbGluZyBwZXJmb3JtZWQuYCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3VwZXJzYW1wbGVkO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZXMgdmFsaWQgb3B0aW9ucyBmb3IgZGlzdG9ydGlvblxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0Rpc3RvcnRpb25PcHRpb25zfSBvcHRpb25zXHJcbiAqIEByZXR1cm5zIHtEaXN0b3J0aW9uT3B0aW9uc31cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VPcHRpb25zKG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xyXG5cclxuICBpZiAob3B0aW9ucy5zdXBlcnNhbXBsZSkge1xyXG4gICAgb3B0aW9ucy5vdXRwdXRTY2FsaW5nID0gb3B0aW9ucy5zdXBlcnNhbXBsZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvcHRpb25zO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZXMgaW1hZ2UgZGlzdG9ydGVyXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7SW1hZ2VJbnRlcmZhY2V9IGltYWdlXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbkludGVyZmFjZX0gZGlzdG9ydGlvblxyXG4gKiBAcGFyYW0ge1Jlc2FtcGxlckludGVyZmFjZX0gcmVzYW1wbGVyXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbk9wdGlvbnN9IG9wdGlvbnNcclxuICogQHJldHVybnMge1JldmVyc2VQaXhlbE1hcHBpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlRGlzdG9ydGVyKGltYWdlLCBkaXN0b3J0aW9uLCByZXNhbXBsZXIsIG9wdGlvbnMpIHtcclxuICBjb25zdCBkaXN0ID0gbmV3IGRpc3RvcnRlci5SZXZlcnNlUGl4ZWxNYXBwaW5nKGltYWdlLCBkaXN0b3J0aW9uLCByZXNhbXBsZXIpO1xyXG4gIGRpc3QuYXN5bmMgPSAhIW9wdGlvbnMuYXN5bmM7XHJcbiAgZGlzdC5iZXN0Rml0ID0gISFvcHRpb25zLmJlc3RGaXQ7XHJcblxyXG4gIGlmIChvcHRpb25zLnZpZXdwb3J0KSB7XHJcbiAgICBkaXN0LnZpZXdwb3J0ID0gb3B0aW9ucy52aWV3cG9ydDtcclxuICB9XHJcblxyXG4gIGlmIChvcHRpb25zLm91dHB1dFNjYWxpbmcpIHtcclxuICAgIGRpc3Qub3V0cHV0U2NhbGluZyA9IG9wdGlvbnMub3V0cHV0U2NhbGluZztcclxuXHJcbiAgICBpZiAob3B0aW9ucy5zdXBlcnNhbXBsZSkge1xyXG4gICAgICBkaXN0LnN1cGVyc2FtcGxlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBkaXN0O1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZXMgcmVzYW1wbGVyXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7SW1hZ2VJbnRlcmZhY2V9IGltYWdlXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbkludGVyZmFjZX0gZGlzdG9ydGlvblxyXG4gKiBAcGFyYW0ge0Rpc3RvcnRpb25PcHRpb25zfSBvcHRpb25zXHJcbiAqIEByZXR1cm5zIHtSZXNhbXBsZXJJbnRlcmZhY2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlUmVzYW1wbGVyKGltYWdlLCBkaXN0b3J0aW9uLCBvcHRpb25zKSB7XHJcbiAgbGV0IHJzbTtcclxuXHJcbiAgaWYgKG9wdGlvbnMucmVzYW1wbGVyKSB7XHJcbiAgICByc20gPSBvcHRpb25zLnJlc2FtcGxlcjtcclxuICB9IGVsc2UgaWYgKG9wdGlvbnMucmVzYW1wbGUpIHtcclxuICAgIHJzbSA9IG5ldyByZXNhbXBsZXIuRVdBKG1ha2VGaWx0ZXIob3B0aW9ucykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByc20gPSBuZXcgcmVzYW1wbGVyLlBvaW50KCk7XHJcbiAgfVxyXG5cclxuICBpZiAob3B0aW9ucy5tYXR0ZUNvbG9yKSB7XHJcbiAgICByc20ubWF0dGVDb2xvciA9IG9wdGlvbnMubWF0dGVDb2xvci5zbGljZSgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJzbTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2VzIGZpbHRlclxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0Rpc3RvcnRpb25PcHRpb25zfSBvcHRpb25zXHJcbiAqIEByZXR1cm5zIHtGaWx0ZXJJbnRlcmZhY2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlRmlsdGVyKG9wdGlvbnMpIHtcclxuICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvcHRpb25zLmZpbHRlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzdG9ydDsiLCJpbXBvcnQgUmV2ZXJzZVBpeGVsTWFwcGluZyBmcm9tICcuL3JldmVyc2UtcGl4ZWwtbWFwcGluZyc7XHJcblxyXG4vKipcclxuICogRGlzdG9ydGVyIG5hbWVzcGFjZVxyXG4gKiBAbmFtZXNwYWNlIGxlbnMuZGlzdG9ydGVyXHJcbiAqL1xyXG5jb25zdCBkaXN0b3J0ZXIgPSB7XHJcbiAgUmV2ZXJzZVBpeGVsTWFwcGluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzdG9ydGVyOyIsImV4cG9ydCB7ZGVmYXVsdCBhcyBSZXZlcnNlUGl4ZWxNYXBwaW5nfSBmcm9tICcuL3JldmVyc2UtcGl4ZWwtbWFwcGluZyc7IiwiLyoqXHJcbiAqIFJldmVyc2UgcGl4ZWwgbWFwcGluZy5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMuZGlzdG9ydGVyXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9kaXN0b3J0cy8jbWFwcGluZyBSZXZlcnNlIHBpeGVsIG1hcHBpbmcgZGV0YWlscyBhdCBJbWFnZU1hZ2ljayBkb2NzfVxyXG4gKiBAdHV0b3JpYWwgMDIuMDIucmV2ZXJzZS1waXhlbC1tYXBwaW5nXHJcbiAqL1xyXG5jbGFzcyBSZXZlcnNlUGl4ZWxNYXBwaW5nIHtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0ltYWdlSW50ZXJmYWNlfSBpbWFnZSBJbWFnZSB0byBiZSBkaXN0b3J0ZWQuXHJcbiAgICogQHBhcmFtIHtEaXN0b3J0aW9uSW50ZXJmYWNlfSBkaXN0b3J0aW9uIERpc3RvcnRpb24gdG8gYmUgcGVyZm9ybWVkLlxyXG4gICAqIEBwYXJhbSB7UmVzYW1wbGVySW50ZXJmYWNlfSByZXNhbXBsZXIgQ29sb3IgcmVzYW1wbGVyLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGltYWdlLCBkaXN0b3J0aW9uLCByZXNhbXBsZXIpIHtcclxuICAgIC8qKlxyXG4gICAgICogSW1hZ2UgYmVpbmcgZGlzdG9ydGVkLlxyXG4gICAgICogQHR5cGUge0ltYWdlSW50ZXJmYWNlfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXN0b3J0aW9uLlxyXG4gICAgICogQHR5cGUge0Rpc3RvcnRpb25JbnRlcmZhY2V9XHJcbiAgICAgKi9cclxuICAgIHRoaXMubWFwcGVyID0gZGlzdG9ydGlvbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2FtcGxlci5cclxuICAgICAqIEB0eXBlIHtSZXNhbXBsZXJJbnRlcmZhY2V9XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVzYW1wbGVyID0gcmVzYW1wbGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgc2V0IHRvIHRydWUsIHRyeSB0byBjYWxjdWxhdGUgYmVzdCBmaXQgdmlld3BvcnQuXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5iZXN0Rml0ID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkZSBvdXRwdXQgdmlld3BvcnQuXHJcbiAgICAgKiBAdHlwZSB7bGVucy5WaWV3cG9ydHxudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnZpZXdwb3J0ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJ1biBkaXN0b3J0aW9uIGFzeW5jLlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMuYXN5bmMgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3V0cHV0IGltYWdlIHNjYWxpbmcuXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm91dHB1dFNjYWxpbmcgPSAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzdG9ydHMgaW1hZ2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJbWFnZUludGVyZmFjZT58SW1hZ2VJbnRlcmZhY2V9IE5ldyBpbnN0YW5jZSBvZiBJbWFnZUludGVyZmFjZSB3aXRoIGRpc3RvcnRlZCBpbWFnZSBvciBQcm9taXNlXHJcbiAgICogdGhhdCByZXNvbHZlcyBkaXN0b3J0ZWQgSW1hZ2VJbnRlcmZhY2UgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgZGlzdG9ydCgpIHtcclxuICAgIHRoaXMucmVzYW1wbGVyLnNldEltYWdlKHRoaXMuaW1hZ2UpO1xyXG4gICAgdGhpcy5yZXNhbXBsZXIuc2V0TWFwcGVyKHRoaXMubWFwcGVyKTtcclxuXHJcbiAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMucHJlcGFyZVZpZXdwb3J0KCk7XHJcbiAgICBjb25zdCB4MSA9IE1hdGguZmxvb3Iodmlld3BvcnQueDEpO1xyXG4gICAgY29uc3QgeTEgPSBNYXRoLmZsb29yKHZpZXdwb3J0LnkxKTtcclxuICAgIGNvbnN0IHgyID0gTWF0aC5mbG9vcih2aWV3cG9ydC54Mik7XHJcbiAgICBjb25zdCB5MiA9IE1hdGguZmxvb3Iodmlld3BvcnQueTIpO1xyXG5cclxuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuaW1hZ2UuZ2V0Qmxhbmsodmlld3BvcnQpO1xyXG5cclxuICAgIHRoaXMucmVzYW1wbGVyLnNjYWxpbmcgPSAxIC8gdGhpcy5vdXRwdXRTY2FsaW5nO1xyXG5cclxuICAgIGlmIChjYW52YXMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgIHJldHVybiBjYW52YXMudGhlbihjYW52YXMgPT4gdGhpcy5wZXJmb3JtRGlzdG9ydGlvbkFzeW5jKGNhbnZhcywgeDEsIHkxLCB4MiwgeTIpKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5hc3luYykge1xyXG4gICAgICByZXR1cm4gdGhpcy5wZXJmb3JtRGlzdG9ydGlvbkFzeW5jKGNhbnZhcywgeDEsIHkxLCB4MiwgeTIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnBlcmZvcm1EaXN0b3J0aW9uKGNhbnZhcywgeDEsIHkxLCB4MiwgeTIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqIEBwYXJhbSB7SW1hZ2VJbnRlcmZhY2V9IGNhbnZhc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4MVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5MVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4MlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5MlxyXG4gICAqIEByZXR1cm5zIHtJbWFnZUludGVyZmFjZX1cclxuICAgKi9cclxuICBwZXJmb3JtRGlzdG9ydGlvbihjYW52YXMsIHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICBmb3IgKGxldCB5ID0geTE7IHkgPD0geTI7IHkrKykge1xyXG4gICAgICBmb3IgKGxldCB4ID0geDE7IHggPD0geDI7IHgrKykge1xyXG4gICAgICAgIGNhbnZhcy5zZXRQaXhlbENvbG9yKHgsIHksIHRoaXMucmVzYW1wbGVyLmdldFJlc2FtcGxlZENvbG9yKHggKyAwLjUsIHkgKyAwLjUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYW52YXM7XHJcbiAgfVxyXG5cclxuICBwZXJmb3JtRGlzdG9ydGlvbkFzeW5jKC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSh0aGlzLnBlcmZvcm1EaXN0b3J0aW9uKC4uLmFyZ3MpLCAwKSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqIEByZXR1cm5zIHtsZW5zLlZpZXdwb3J0fVxyXG4gICAqL1xyXG4gIHByZXBhcmVWaWV3cG9ydCgpIHtcclxuICAgIGxldCB2aWV3cG9ydDtcclxuXHJcbiAgICBpZiAodGhpcy52aWV3cG9ydCkge1xyXG4gICAgICB2aWV3cG9ydCA9IHRoaXMudmlld3BvcnQuY2xvbmUoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5iZXN0Rml0ICYmIHRoaXMubWFwcGVyLmhhc0Jlc3RGaXRWaWV3cG9ydCkge1xyXG4gICAgICB2aWV3cG9ydCA9IHRoaXMubWFwcGVyLmdldEJlc3RGaXRWaWV3cG9ydCh0aGlzLmltYWdlLnZpZXdwb3J0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZpZXdwb3J0ID0gdGhpcy5pbWFnZS52aWV3cG9ydC5jbG9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZXdwb3J0LnNjYWxlKHRoaXMub3V0cHV0U2NhbGluZyk7XHJcblxyXG4gICAgcmV0dXJuIHZpZXdwb3J0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2ZXJzZVBpeGVsTWFwcGluZzsiLCJpbXBvcnQgTGVhc3RTcXVhcmVzIGZyb20gXCIuLi91dGlsL2dhdXNzLWpvcmRhbi1lbGltaW5hdGlvbi9sZWFzdC1zcXVhcmVzXCI7XHJcbmltcG9ydCBjcmVhdGVzQmVzdEZpdFZpZXdwb3J0RnJvbUFwZXhlcyBmcm9tICcuLi9taXhpbnMvY3JlYXRlcy1iZXN0LWZpdC12aWV3cG9ydC1mcm9tLWFwZXhlcyc7XHJcbmltcG9ydCBJbnZhbGlkQXJndW1lbnRzTGVuZ3RoIGZyb20gJy4uL2V4Y2VwdGlvbi9pbnZhbGlkLWFyZ3VtZW50cy1sZW5ndGgnO1xyXG5pbXBvcnQge3BlcmNlcHRpYmxlUmVjaXByb2NhbH0gZnJvbSBcIi4uL3V0aWwvdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIFByb2plY3QgY29vcmRpbmF0ZXMgdXNpbmcgcHJvamVjdGlvbiBtYXRyaXguXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG1hdHJpeCBBZmZpbmUgbWF0cml4LlxyXG4gKiBAcmV0dXJucyB7UG9pbnR9IE1hcHBlZCBjb29yZHMgcGFpci5cclxuICovXHJcbmZ1bmN0aW9uIG1hcCh4LCB5LCBtYXRyaXgpIHtcclxuICByZXR1cm4gW1xyXG4gICAgbWF0cml4WzBdICogeCArIG1hdHJpeFsxXSAqIHkgKyBtYXRyaXhbMl0sXHJcbiAgICBtYXRyaXhbM10gKiB4ICsgbWF0cml4WzRdICogeSArIG1hdHJpeFs1XVxyXG4gIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZmZpbmUgZGlzdG9ydGlvbi5cclxuICpcclxuICogQGltcGxlbWVudHMge0Rpc3RvcnRpb25JbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLmRpc3RvcnRpb25cclxuICogQG1peGVzIGxlbnMubWl4aW5zLmNyZWF0ZXNCZXN0Rml0Vmlld3BvcnRGcm9tQXBleGVzXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9kaXN0b3J0cy8jYWZmaW5lIEFmZmluZSBkaXN0b3J0aW9uIGRldGFpbHMgYXQgSW1hZ2VNYWdpY2sgZG9jc31cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDI0NDMgQWZmaW5lIGRpc3RvcnRpb24gYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gKiBAdHV0b3JpYWwgMDMuMDEuYWZmaW5lXHJcbiAqL1xyXG5jbGFzcyBBZmZpbmUge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gbWF0cml4IEFmZmluZSBtYXRyaXguXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XHJcbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcclxuICAgIHRoaXMuZm9yd2FyZE1hdHJpeCA9IHRoaXMuY29uc3RydWN0b3IuaW52ZXJ0QWZmaW5lTWF0cml4KG1hdHJpeCk7XHJcbiAgICB0aGlzLmhhc1BhcnRpYWxEZXJpdmF0aXZlcyA9IHRydWU7XHJcbiAgICB0aGlzLmhhc0NvbnN0YW50UGFydGlhbERlcml2YXRpdmVzID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFzQmVzdEZpdFZpZXdwb3J0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYWZmaW5lIGRpc3RvcnRpb24gdXNpbmcgY29udHJvbCBwb2ludHMgYXJyYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSBjb250cm9sUG9pbnRzIE1hcHBpbmdzIG9mIGNvbnRyb2wgcG9pbnRzIFt1MCwgdjAsIHgwLCB5MCwgLi4uICwgdW4sIHZuLCB4biwgeW5dIHdoZXJlXHJcbiAgICogKHUqLCB2KikgYXJlIHNvdXJjZSAoeCwgeSkgcG9pbnQgYW5kICh4KiwgeSopIGFyZSBkZXN0aW5hdGlvbiAoeCwgeSkgcG9pbnRcclxuICAgKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLkFmZmluZX1cclxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMDUwMSBHZW5lcmF0aW5nIGFmZmluZSBkaXN0b3J0aW9uIG1hdHJpeCBmcm9tIGNvbnRyb2wgcG9pbnRzIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICAgKi9cclxuICBzdGF0aWMgZnJvbUNvbnRyb2xQb2ludHMoY29udHJvbFBvaW50cykge1xyXG4gICAgaWYgKGNvbnRyb2xQb2ludHMubGVuZ3RoICUgNCAhPT0gMCkge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50c0xlbmd0aChgTnVtYmVyIG9mIGFyZ3VtZW50cyBtdXN0IGJlIG11bHRpcGxlIG9mIDQgYW5kIGF0IGxlYXN0IDQgYXJndW1lbnRzICgxIGNvbnRyb2wgcG9pbnQpIGV4cGVjdGVkLiAke2NvbnRyb2xQb2ludHMubGVuZ3RofSBhcmd1bWVudHMgZ2l2ZW4uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGhhbmRsZSBzcGVjaWFsIGNhc2VzIG9mIG5vdCBlbm91Z2ggYXJndW1lbnRzXHJcbiAgICAgKi9cclxuICAgIGlmIChjb250cm9sUG9pbnRzLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAvLyBPbmx5IDEgQ1AgU2V0IEdpdmVuXHJcbiAgICAgIHJldHVybiBuZXcgQWZmaW5lKFtcclxuICAgICAgICAxLCAwLCBjb250cm9sUG9pbnRzWzBdIC0gY29udHJvbFBvaW50c1syXSxcclxuICAgICAgICAwLCAxLCBjb250cm9sUG9pbnRzWzFdIC0gY29udHJvbFBvaW50c1szXVxyXG4gICAgICBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIDIgb3IgbW9yZSBwb2ludHMgKHVzYWxseSAzKSBnaXZlbi5cclxuICAgICAgLy8gU29sdmUgYSBsZWFzdCBzcXVhcmVzIHNpbXVsdGFuZW91cyBlcXVhdGlvbiBmb3IgY29lZmZpY2llbnRzLlxyXG4gICAgICBjb25zdCBsZWFzdFNxdWFyZXMgPSBuZXcgTGVhc3RTcXVhcmVzKDMsIDIpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9sUG9pbnRzLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgICAgbGV0IFt1LCB2LCB4LCB5XSA9IGNvbnRyb2xQb2ludHMuc2xpY2UoaSwgaSArIDQpO1xyXG5cclxuICAgICAgICBsZWFzdFNxdWFyZXMuYWRkVGVybXMoW1xyXG4gICAgICAgICAgeCwgeSwgMVxyXG4gICAgICAgIF0sIFt1LCB2XSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb250cm9sUG9pbnRzLmxlbmd0aCA9PT0gOCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogT25seSB0d28gcGFpcnMgd2VyZSBnaXZlbiwgYnV0IHdlIG5lZWQgMyB0byBzb2x2ZSB0aGUgYWZmaW5lLlxyXG4gICAgICAgICAqIEZha2UgZXh0cmEgY29vcmRpbmF0ZXMgYnkgcm90YXRpbmcgcDEgYXJvdW5kIHAwIGJ5IDkwIGRlZ3JlZXMuXHJcbiAgICAgICAgICogeDIgPSB4MCAtICh5MS15MCkgICB5MiA9IHkwICsgKHgxLXgwKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxlYXN0U3F1YXJlcy5hZGRUZXJtcyhcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAgY29udHJvbFBvaW50c1syXSAtIChjb250cm9sUG9pbnRzWzddIC0gY29udHJvbFBvaW50c1szXSksXHJcbiAgICAgICAgICAgIGNvbnRyb2xQb2ludHNbM10gKyAoY29udHJvbFBvaW50c1s2XSAtIGNvbnRyb2xQb2ludHNbMl0pLFxyXG4gICAgICAgICAgICAxXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICBjb250cm9sUG9pbnRzWzBdIC0gY29udHJvbFBvaW50c1s1XSArIGNvbnRyb2xQb2ludHNbMV0sXHJcbiAgICAgICAgICAgIGNvbnRyb2xQb2ludHNbMV0gKyBjb250cm9sUG9pbnRzWzRdIC0gY29udHJvbFBvaW50c1swXVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHZlY3RvcnMgPSBsZWFzdFNxdWFyZXMuc29sdmUoKS5nZXRWZWN0b3JzKCk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEFmZmluZSh2ZWN0b3JzWzBdLmNvbmNhdCh2ZWN0b3JzWzFdKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFmZmluZSBkaXN0b3J0aW9uIHVzaW5nIGFmZmluZSBtYXRyaXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSBtYXRyaXggQWZmaW5lIHByb2plY3Rpb24gY29lZmZpY2llbnRzOiBbc3gsIHJ4LCB0eCwgcnksIHN5LCB0eV1cclxuICAgKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLkFmZmluZX1cclxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMDYwOSBHZW5lcmF0aW5nIGludmVydGVkIGFmZmluZSBkaXN0b3J0aW9uIG1hdHJpeCBmcm9tIGZvcndhcmQgYWZmaW5lIG1hdHJpeCBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAgICovXHJcbiAgc3RhdGljIGZyb21Gb3J3YXJkTWF0cml4KG1hdHJpeCkge1xyXG4gICAgLy8gVE9ETzogdHJhcCB0ZXN0IGZvciBzeCpzeS1yeCpyeSA9PSAwIChkZXRlcm1pbmFudCA9IDAsIG5vIGludmVyc2UpXHJcblxyXG4gICAgcmV0dXJuIG5ldyBBZmZpbmUodGhpcy5pbnZlcnRBZmZpbmVNYXRyaXgobWF0cml4KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGludmVydGVkIGFmZmluZSBtYXRyaXggZnJvbSBhZmZpbmUgbWF0cml4LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gbWF0cml4IEFmZmluZSBtYXRyaXguXHJcbiAgICogQHJldHVybnMge251bWJlcltdfSBJbnZlcnRlZCBhZmZpbmUgbWF0cml4LlxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAwMDk1IEludmVydGluZyBhZmZpbmUgbWF0cml4IGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICAgKi9cclxuICBzdGF0aWMgaW52ZXJ0QWZmaW5lTWF0cml4KG1hdHJpeCkge1xyXG4gICAgLyogRnJvbSBcIkRpZ2l0YWwgSW1hZ2UgV2FycGluZ1wiIGJ5IEdlb3JnZSBXb2xiZXJnLCBwYWdlIDUwICovXHJcblxyXG4gICAgY29uc3QgZGV0ZXJtaW5hbnQgPSBwZXJjZXB0aWJsZVJlY2lwcm9jYWwobWF0cml4WzBdICogbWF0cml4WzRdIC0gbWF0cml4WzFdICogbWF0cml4WzNdKTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBkZXRlcm1pbmFudCAqIG1hdHJpeFs0XSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAoLW1hdHJpeFsxXSksXHJcbiAgICAgIGRldGVybWluYW50ICogKG1hdHJpeFsxXSAqIG1hdHJpeFs1XSAtIG1hdHJpeFsyXSAqIG1hdHJpeFs0XSksXHJcbiAgICAgIGRldGVybWluYW50ICogKC1tYXRyaXhbM10pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIG1hdHJpeFswXSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzJdICogbWF0cml4WzNdIC0gbWF0cml4WzBdICogbWF0cml4WzVdKVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcmV2ZXJzZU1hcCh4LCB5KSB7XHJcbiAgICByZXR1cm4gbWFwKHgsIHksIHRoaXMubWF0cml4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0VmFsaWRpdHkoeCwgeSkge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldFBhcnRpYWxEZXJpdmF0aXZlcyh4LCB5KSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB0aGlzLm1hdHJpeFswXSxcclxuICAgICAgdGhpcy5tYXRyaXhbMV0sXHJcbiAgICAgIHRoaXMubWF0cml4WzNdLFxyXG4gICAgICB0aGlzLm1hdHJpeFs0XVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcHMgc291cmNlIGNvb3JkcyBpbnRvIGRlc3RpbmF0aW9uIGNvb3Jkcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtY29vcmRpbmF0ZSBvZiBzb3VyY2UgaW1hZ2UgcG9pbnQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1jb29yZGluYXRlIG9mIHNvdXJjZSBpbWFnZSBwb2ludC5cclxuICAgKiBAcmV0dXJucyB7UG9pbnR9IEZvcndhcmQgbWFwcGVkIGRlc3RpbmF0aW9uIGltYWdlIGNvb3Jkcy5cclxuICAgKi9cclxuICBmb3J3YXJkTWFwKHgsIHkpIHtcclxuICAgIHJldHVybiBtYXAoeCwgeSwgdGhpcy5mb3J3YXJkTWF0cml4KTtcclxuICB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oQWZmaW5lLnByb3RvdHlwZSwgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWZmaW5lOyIsImltcG9ydCB7RVBTSUxPTiwgTV9QSTIsIE1fMlBJfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7SW52YWxpZEFyZ3VtZW50fSBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XHJcbmltcG9ydCB7ZGVnMnJhZH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4uL3ZpZXdwb3J0JztcclxuXHJcbi8qKlxyXG4gKiBAc3VtbWFyeSBBcmMgZGlzdG9ydGlvbi5cclxuICpcclxuICogQGRlc2NyaXB0aW9uIE5vdGUgdGhlIGNvZWZmaWNpZW50cyB1c2UgYSBjZW50ZXIgYW5nbGUsIHNvIGFzeW1wdG90aWMgam9pbiBpc1xyXG4gKiBmdXJ0aGVzdCBmcm9tIGJvdGggc2lkZXMgb2YgdGhlIHNvdXJjZSBpbWFnZS4gVGhpcyBhbHNvIG1lYW5zIHRoYXRcclxuICogZm9yIGFyYyBhbmdsZXMgZ3JlYXRlciB0aGFuIDM2MCB0aGUgc2lkZXMgb2YgdGhlIGltYWdlIHdpbGwgYmVcclxuICogdHJpbW1lZCBlcXVhbGx5LlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy5kaXN0b3J0aW9uXHJcbiAqIEBpbXBsZW1lbnRzIERpc3RvcnRpb25JbnRlcmZhY2VcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cuaW1hZ2VtYWdpY2sub3JnL1VzYWdlL2Rpc3RvcnRzLyNhcmMgQXJjIGRpc3RvcnRpb24gZGV0YWlsc30gYXQgSW1hZ2VNYWdpY2sgZG9jcy5cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDI1NjEgQXJjIGRpc3RvcnRpb259IGF0IEltYWdlTWFnaWNrXHJcbiAqIHNvdXJjZS5cclxuICogQHR1dG9yaWFsIDAzLjAzLmFyY1xyXG4gKi9cclxuY2xhc3MgQXJjIHtcclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bGVucy5WaWV3cG9ydH0gdmlld3BvcnRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gYzAgQW5nbGUgZm9yIGNlbnRlciBvZiBzb3VyY2UgaW1hZ2UuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGMxIEFuZ2xlIHNjYWxlIGZvciBtYXBwaW5nIHRvIHNvdXJjZSBpbWFnZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gYzIgUmFkaXVzIGZvciB0b3Agb2Ygc291cmNlIGltYWdlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjMyBSYWRpdXMgc2NhbGUgZm9yIG1hcHBpbmcgc291cmNlIGltYWdlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjNCBDZW50ZXIgbGluZSBvZiBhcmMgd2l0aGluIHNvdXJjZSBpbWFnZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih2aWV3cG9ydCwgYzAsIGMxLCBjMiwgYzMsIGM0KSB7XHJcbiAgICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnQ7XHJcbiAgICB0aGlzLmMwID0gYzA7XHJcbiAgICB0aGlzLmMxID0gYzE7XHJcbiAgICB0aGlzLmMyID0gYzI7XHJcbiAgICB0aGlzLmMzID0gYzM7XHJcbiAgICB0aGlzLmM0ID0gYzQ7XHJcblxyXG4gICAgLypcclxuICAgICAqIENvbnZlcnQgdGhlIGFuZ2xlX3RvX3dpZHRoIGFuZCByYWRpdXNfdG9faGVpZ2h0XHJcbiAgICAgKiB0byBhcHByb3ByaWF0ZSBzY2FsaW5nIGZhY3RvcnMsIHRvIGFsbG93IGZhc3RlciBwcm9jZXNzaW5nXHJcbiAgICAgKiBpbiB0aGUgbWFwcGluZyBmdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgdGhpcy5hbmdsZVRvV2lkdGggPSBNXzJQSSAqIHRoaXMudmlld3BvcnQud2lkdGgoKSAvIHRoaXMuYzE7XHJcbiAgICB0aGlzLnJhZGl1c1RvSGVpZ2h0ID0gdGhpcy52aWV3cG9ydC5oZWlnaHQoKSAvIHRoaXMuYzM7XHJcblxyXG4gICAgdGhpcy5oYXNQYXJ0aWFsRGVyaXZhdGl2ZXMgPSB0cnVlO1xyXG4gICAgdGhpcy5oYXNDb25zdGFudFBhcnRpYWxEZXJpdmF0aXZlcyA9IGZhbHNlO1xyXG4gICAgdGhpcy5oYXNCZXN0Rml0Vmlld3BvcnQgPSB0cnVlO1xyXG4gICAgdGhpcy5mb3JjZUJlc3RGaXQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHN1bW1hcnkgQ3JlYXRlcyBhcmMgZGlzdG9ydGlvbiBjbGFzcyBmcm9tIGFyZ3VtZW50cy5cclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBBcmd1bWVudHM6ICBbYW5nbGUsIHJvdGF0aW9uLCBvdXRlcl9yYWRpdXMsIGlubmVyX3JhZGl1c11cclxuICAgKiBBbGwgYnV0IGZpcnN0IGFyZ3VtZW50IGFyZSBvcHRpb25hbC5cclxuICAgKlxyXG4gICAqIEJ5IGRlZmF1bHQsIGlmIHRoZSByYWRpaSBhcmd1bWVudHMgYXJlIG5vciBwcm92aWRlZCB0aGUgaW1hZ2UgcmFkaXVzXHJcbiAgICogaXMgY2FsY3VsYXRlZCBzbyB0aGUgaG9yaXpvbnRhbCBjZW50ZXItbGluZSBpcyBmaXRzIHRoZSBnaXZlbiBhcmNcclxuICAgKiB3aXRob3V0IHNjYWxpbmcuXHJcbiAgICpcclxuICAgKiBUaGUgb3V0cHV0IGltYWdlIHNpemUgaXMgQUxXQVlTIGFkanVzdGVkIHRvIGNvbnRhaW4gdGhlIHdob2xlIGltYWdlLFxyXG4gICAqIGFuZCBhbiBvZmZzZXQgaXMgZ2l2ZW4gdG8gcG9zaXRpb24gaW1hZ2UgcmVsYXRpdmUgdG8gdGhlIDAsMCBwb2ludCBvZlxyXG4gICAqIHRoZSBvcmlnaW4sIGFsbG93aW5nIHVzZXJzIHRvIHVzZSByZWxhdGl2ZSBwb3NpdGlvbmluZyBvbnRvIGxhcmdlclxyXG4gICAqIGJhY2tncm91bmQuXHJcbiAgICpcclxuICAgKiBUaGUgYXJndW1lbnRzIGFyZSBjb252ZXJ0ZWQgdG8gZGlzdG9ydGlvbiBjb2VmZmljaWVudHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2xlbnMuVmlld3BvcnR9IHZpZXdwb3J0XHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gYXJncyBBcmd1bWVudHM6XHJcbiAgICogKiAwOiAqKmFuZ2xlKiogLSBUaGUgYW5nbGUgb3ZlciB3aGljaCB0byBhcmMgdGhlIGltYWdlIHNpZGUtdG8tc2lkZS5cclxuICAgKiAqIDE6ICoqcm90YXRpb24qKiAtIEFuZ2xlIHRvIHJvdGF0ZSBpbWFnZSBmcm9tIHZlcnRpY2FsIGNlbnRlci5cclxuICAgKiAqIDI6ICoqb3V0ZXJfcmFkaXVzKiogLSBTZXQgdG9wIGVkZ2Ugb2Ygc291cmNlIGltYWdlIGF0IHRoaXMgcmFkaXVzLlxyXG4gICAqICogMzogKippbm5lcl9yYWRpdXMqKiAtIFNldCBib3R0b20gZWRnZSB0byB0aGlzIHJhZGl1cyAocmFkaWFsIHNjYWxpbmcpLlxyXG4gICAqIEByZXR1cm5zIHtsZW5zLmRpc3RvcnRpb24uQXJjfVxyXG4gICAqIEB0aHJvd3Mge2xlbnMuZXhjZXB0aW9uLkludmFsaWRBcmd1bWVudH0gVGhyb3duIHdoZW4gZmlyc3QgKGFuZ2xlKSBvciB0aGlyZCAob3V0ZXIgcmFkaXVzKSBhcmd1bWVudHMgYXJlIHRvbyBzbWFsbFxyXG4gICAqXHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDEwOTUgR2VuZXJhdGluZyBjb2VmZmljaWVudHN9IGZvciBhcmNcclxuICAgKiBkaXN0b3J0aW9uIGF0IEltYWdlTWFnaWNrIHNvdXJjZS5cclxuICAgKi9cclxuICBzdGF0aWMgZnJvbUFyZ3VtZW50cyh2aWV3cG9ydCwgYXJncykge1xyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID49IDEgJiYgYXJnc1swXSA8IEVQU0lMT04pIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudCgnQW5nbGUgdG9vIHNtYWxsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID49IDMgJiYgYXJnc1syXSA8IEVQU0lMT04pIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudCgnT3V0ZXIgcmFkaXVzIHRvbyBzbWFsbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjMCwgYzEsIGMyLCBjMywgYzQ7XHJcblxyXG4gICAgYzAgPSAtTV9QSTI7IC8vIC05MCwgcGxhY2UgYXQgdG9wIVxyXG5cclxuICAgIGlmIChhcmdzLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgIGMxID0gZGVnMnJhZChhcmdzWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGMxID0gTV9QSTI7IC8vIHplcm8gYXJndW1lbnRzIC0gY2VudGVyIGlzIGF0IHRvcFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhcmdzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgIGMwICs9IGRlZzJyYWQoYXJnc1sxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYzAgLz0gTV8yUEk7IC8vIG5vcm1hbGl6ZSByYWRpYW5zXHJcbiAgICBjMCAtPSBNYXRoLnJvdW5kKGMwKTtcclxuICAgIGMwICo9IE1fMlBJOyAvLyBkZS1ub3JtYWxpemUgYmFjayB0byByYWRpYW5zXHJcblxyXG4gICAgYzMgPSB2aWV3cG9ydC5oZWlnaHQoKSAtIDE7XHJcbiAgICBjMiA9IHZpZXdwb3J0LndpZHRoKCkgLyBjMSArIGMzIC8gMjtcclxuXHJcbiAgICBpZiAoYXJncy5sZW5ndGggPj0gMykge1xyXG4gICAgICBpZiAoYXJncy5sZW5ndGggPj0gNCkge1xyXG4gICAgICAgIGMzID0gYXJnc1syXSAtIGFyZ3NbM107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYzMgKj0gYXJnc1syXSAvIGMyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjMiA9IGFyZ3NbMl07XHJcbiAgICB9XHJcblxyXG4gICAgYzQgPSAodmlld3BvcnQud2lkdGgoKSAtIDEpIC8gMjtcclxuXHJcbiAgICByZXR1cm4gbmV3IEFyYyh2aWV3cG9ydCwgYzAsIGMxLCBjMiwgYzMsIGM0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcmV2ZXJzZU1hcCh4LCB5KSB7XHJcbiAgICBsZXQgW3UsIHZdID0gdGhpcy5nZXRVVih4LCB5KTtcclxuXHJcbiAgICAvLyBub3cgc2NhbGUgdGhlIGFuZ2xlIGFuZCByYWRpdXMgZm9yIHNvdXJjZSBpbWFnZSBsb29rdXAgcG9pbnRcclxuICAgIHUgPSB1ICogdGhpcy5hbmdsZVRvV2lkdGggKyB0aGlzLmM0ICsgdGhpcy52aWV3cG9ydC54MSArIDAuNTtcclxuICAgIHYgPSAodGhpcy5jMiAtIHYpICogdGhpcy5yYWRpdXNUb0hlaWdodCArIHRoaXMudmlld3BvcnQueTE7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh1LCB2LCB4LCB5KTtcclxuXHJcbiAgICByZXR1cm4gW3UsIHZdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRWYWxpZGl0eSh4LCB5KSB7XHJcbiAgICByZXR1cm4gMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0UGFydGlhbERlcml2YXRpdmVzKHgsIHkpIHtcclxuICAgIGxldCBbdSwgdl0gPSB0aGlzLmdldFVWKHgsIHkpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBBcmMgRGlzdG9ydGlvbiBQYXJ0aWFsIFNjYWxpbmcgVmVjdG9yc1xyXG4gICAgICogQXJlIGRlcml2ZWQgYnkgbWFwcGluZyB0aGUgcGVycGVuZGljdWxhciB1bml0IHZlY3RvcnNcclxuICAgICAqIGRSICBhbmQgIGRBKlIqMlBJICByYXRoZXIgdGhhbiB0cnlpbmcgdG8gbWFwIGR4IGFuZCBkeVxyXG4gICAgICogVGhlIHJlc3VsdHMgaXMgYSB2ZXJ5IHNpbXBsZSBvcnRob2dvbmFsIGFsaWduZWQgZWxsaXBzZS5cclxuICAgICAqL1xyXG4gICAgaWYgKHYgPiBFUFNJTE9OKSB7XHJcbiAgICAgIHJldHVybiBbdGhpcy5hbmdsZVRvV2lkdGggLyAoTV8yUEkgKiB2KSwgMCwgMCwgdGhpcy5yYWRpdXNUb0hlaWdodF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gW3RoaXMudmlld3BvcnQud2lkdGgoKSAqIDIsIDAsIDAsIHRoaXMucmFkaXVzVG9IZWlnaHRdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBjYWxjdWxhdGVkIGJlc3QgZml0IHZpZXdwb3J0IGZvciBpbWFnZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bGVucy5WaWV3cG9ydH0gdmlld3BvcnRcclxuICAgKiBAcmV0dXJucyB7bGVucy5WaWV3cG9ydH1cclxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMTgzNCBHZW5lcmF0aW5nIGJlc3QgZml0IHZpZXdwb3J0fVxyXG4gICAqIGZvciBhcmMgZGlzdG9ydGlvbiBhdCBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAgICovXHJcbiAgZ2V0QmVzdEZpdFZpZXdwb3J0KHZpZXdwb3J0KSB7XHJcbiAgICAvLyBGb3J3YXJkIE1hcCBDb3JuZXJzXHJcbiAgICBsZXQgYSA9IHRoaXMuYzAgLSB0aGlzLmMxIC8gMixcclxuICAgICAgY2EgPSBNYXRoLmNvcyhhKSxcclxuICAgICAgc2EgPSBNYXRoLnNpbihhKSxcclxuICAgICAgeCA9IHRoaXMuYzIgKiBjYSxcclxuICAgICAgeSA9IHRoaXMuYzIgKiBzYSxcclxuICAgICAgdnAgPSBuZXcgVmlld3BvcnQoeCwgeSwgeCwgeSk7XHJcblxyXG4gICAgeCA9ICh0aGlzLmMyIC0gdGhpcy5jMykgKiBjYTtcclxuICAgIHkgPSAodGhpcy5jMiAtIHRoaXMuYzMpICogc2E7XHJcbiAgICB2cC5leHBhbmQoeCwgeSk7XHJcblxyXG4gICAgYSA9IHRoaXMuYzAgKyB0aGlzLmMxIC8gMjtcclxuICAgIGNhID0gTWF0aC5jb3MoYSk7XHJcbiAgICBzYSA9IE1hdGguc2luKGEpO1xyXG4gICAgeCA9IHRoaXMuYzIgKiBjYTtcclxuICAgIHkgPSB0aGlzLmMyICogc2E7XHJcbiAgICB2cC5leHBhbmQoeCwgeSk7XHJcblxyXG4gICAgeCA9ICh0aGlzLmMyIC0gdGhpcy5jMykgKiBjYTtcclxuICAgIHkgPSAodGhpcy5jMiAtIHRoaXMuYzMpICogc2E7XHJcbiAgICB2cC5leHBhbmQoeCwgeSk7XHJcblxyXG4gICAgLy8gT3J0aG9nb25hbCBwb2ludHMgYWxvbmcgdG9wIG9mIGFyY1xyXG4gICAgZm9yIChcclxuICAgICAgYSA9IE1hdGguY2VpbCgodGhpcy5jMCAtIHRoaXMuYzEgLyAyKSAvIE1fUEkyKSAqIE1fUEkyO1xyXG4gICAgICBhIDwgdGhpcy5jMCArIHRoaXMuYzEgLyAyO1xyXG4gICAgICBhICs9IE1fUEkyXHJcbiAgICApIHtcclxuICAgICAgY2EgPSBNYXRoLmNvcyhhKTtcclxuICAgICAgc2EgPSBNYXRoLnNpbihhKTtcclxuICAgICAgeCA9IHRoaXMuYzIgKiBjYTtcclxuICAgICAgeSA9IHRoaXMuYzIgKiBzYTtcclxuICAgICAgdnAuZXhwYW5kKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZwLmZpeEJvdW5kcygpO1xyXG5cclxuICAgIHJldHVybiB2cDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge251bWJlcn0geVxyXG4gICAqIEByZXR1cm5zIHtQb2ludH1cclxuICAgKi9cclxuICBnZXRVVih4LCB5KSB7XHJcbiAgICBsZXQgdSwgdjtcclxuXHJcbiAgICAvLyB3aGF0IGlzIHRoZSBhbmdsZSBhbmQgcmFkaXVzIGluIHRoZSBkZXN0aW5hdGlvbiBpbWFnZVxyXG4gICAgdSA9IChNYXRoLmF0YW4yKHksIHgpIC0gdGhpcy5jMCkgLyBNXzJQSTtcclxuICAgIHUgLT0gTWF0aC5yb3VuZCh1KTtcclxuICAgIHYgPSBNYXRoLmh5cG90KHgsIHkpO1xyXG5cclxuICAgIHJldHVybiBbdSwgdl07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcmM7IiwiaW1wb3J0IEFmZmluZSBmcm9tICcuL2FmZmluZSc7XHJcbmltcG9ydCBBcmMgZnJvbSAnLi9hcmMnO1xyXG5pbXBvcnQgUGVyc3BlY3RpdmUgZnJvbSAnLi9wZXJzcGVjdGl2ZSc7XHJcblxyXG4vKipcclxuICogRGlzdG9ydGlvbiBuYW1lc3BhY2VcclxuICpcclxuICogQG5hbWVzcGFjZSBsZW5zLmRpc3RvcnRpb25cclxuICovXHJcbmNvbnN0IGRpc3RvcnRpb24gPSB7XHJcbiAgQWZmaW5lLFxyXG4gIEFyYyxcclxuICBQZXJzcGVjdGl2ZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzdG9ydGlvbjsiLCJpbXBvcnQgTGVhc3RTcXVhcmVzIGZyb20gJy4uL3V0aWwvZ2F1c3Mtam9yZGFuLWVsaW1pbmF0aW9uL2xlYXN0LXNxdWFyZXMnO1xyXG5pbXBvcnQgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXMgZnJvbSAnLi4vbWl4aW5zL2NyZWF0ZXMtYmVzdC1maXQtdmlld3BvcnQtZnJvbS1hcGV4ZXMnO1xyXG5pbXBvcnQgSW52YWxpZEFyZ3VtZW50c0xlbmd0aCBmcm9tICcuLi9leGNlcHRpb24vaW52YWxpZC1hcmd1bWVudHMtbGVuZ3RoJztcclxuaW1wb3J0IHtwZXJjZXB0aWJsZVJlY2lwcm9jYWx9IGZyb20gXCIuLi91dGlsL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBQcm9qZWN0IGNvb3JkaW5hdGVzIHVzaW5nIHByb2plY3Rpb24gbWF0cml4XHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG1hdHJpeCBQZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtQb2ludH0gTWFwcGVkIGNvb3JkcyBwYWlyLlxyXG4gKiBAdHV0b3JpYWwgMDMuMDIucGVyc3BlY3RpdmVcclxuICovXHJcbmZ1bmN0aW9uIG1hcCh4LCB5LCBtYXRyaXgpIHtcclxuICBsZXQgcCA9IG1hdHJpeFswXSAqIHggKyBtYXRyaXhbMV0gKiB5ICsgbWF0cml4WzJdLFxyXG4gICAgcSA9IG1hdHJpeFszXSAqIHggKyBtYXRyaXhbNF0gKiB5ICsgbWF0cml4WzVdLFxyXG4gICAgciA9IG1hdHJpeFs2XSAqIHggKyBtYXRyaXhbN10gKiB5ICsgMTtcclxuXHJcbiAgcmV0dXJuIFtwIC8gciwgcSAvIHJdO1xyXG59XHJcblxyXG4vKipcclxuICogQHN1bW1hcnkgUGVyc3BlY3RpdmUgRGlzdG9ydGlvbiAoYSByYXRpbyBvZiBhZmZpbmUgZGlzdG9ydGlvbnMpLlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb24gPHByZT5cclxuICpcclxuICogICAgIHAoeCx5KSAgICBjMCp4ICsgYzEqeSArIGMyXHJcbiAqIHUgPSAtLS0tLS0gPSAtLS0tLS0tLS0tLS0tLS0tLS1cclxuICogICAgIHIoeCx5KSAgICBjNip4ICsgYzcqeSArIDFcclxuICpcclxuICogICAgIHEoeCx5KSAgICBjMyp4ICsgYzQqeSArIGM1XHJcbiAqIHYgPSAtLS0tLS0gPSAtLS0tLS0tLS0tLS0tLS0tLS1cclxuICogICAgICByKHgseSkgICAgYzYqeCArIGM3KnkgKyAxXHJcbiAqXHJcbiAqIGRlbm9taW5hdG9yID0gU2lnbiBvZiAncicsIG9yIHRoZSBkZW5vbWluYXRvciBhZmZpbmUsIGZvciB0aGUgYWN0dWFsIGltYWdlLlxyXG4gKiBUaGlzIGRldGVybWluZXMgd2hhdCBwYXJ0IG9mIHRoZSBkaXN0b3J0ZWQgaW1hZ2UgaXMgJ2dyb3VuZCdcclxuICogc2lkZSBvZiB0aGUgaG9yaXpvbiwgdGhlIG90aGVyIHBhcnQgaXMgJ3NreScgb3IgaW52YWxpZC5cclxuICogVmFsaWQgdmFsdWVzIGFyZSAgKzEuMCAgb3IgIC0xLjAgIG9ubHkuXHJcbiAqIDwvcHJlPlxyXG4gKlxyXG4gKiBAaW1wbGVtZW50cyB7RGlzdG9ydGlvbkludGVyZmFjZX1cclxuICogQG1lbWJlck9mIGxlbnMuZGlzdG9ydGlvblxyXG4gKiBAbWl4ZXMgbGVucy5taXhpbnMuY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXNcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cuaW1hZ2VtYWdpY2sub3JnL1VzYWdlL2Rpc3RvcnRzLyNwZXJzcGVjdGl2ZSBQZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIGRldGFpbHMgYXQgSW1hZ2VNYWdpY2sgZG9jc31cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDI0NTAgUGVyc3BlY3RpdmUgZGlzdG9ydGlvbiBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAqL1xyXG5jbGFzcyBQZXJzcGVjdGl2ZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gcmV2ZXJzZU1hdHJpeCBQZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCBmb3IgcmV2ZXJzZSBwaXhlbCBtYXBwaW5nLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZW5vbWluYXRvciBEZW5vbWluYXRvciBmb3IgbWFwcGluZyB2YWxpZGl0eSBjYWxjdWxhdGlvbi5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihyZXZlcnNlTWF0cml4LCBkZW5vbWluYXRvcikge1xyXG4gICAgdGhpcy5tYXRyaXggPSByZXZlcnNlTWF0cml4O1xyXG4gICAgdGhpcy5kZW5vbWluYXRvciA9IGRlbm9taW5hdG9yO1xyXG4gICAgdGhpcy5mb3J3YXJkTWF0cml4ID0gdGhpcy5jb25zdHJ1Y3Rvci5pbnZlcnRQZXJzcGVjdGl2ZU1hdHJpeChyZXZlcnNlTWF0cml4KTtcclxuICAgIHRoaXMuaGFzUGFydGlhbERlcml2YXRpdmVzID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFzQ29uc3RhbnRQYXJ0aWFsRGVyaXZhdGl2ZXMgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFzQmVzdEZpdFZpZXdwb3J0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgcGVyc3BlY3RpdmUgZGlzdG9ydGlvbiB1c2luZyBjb250cm9sIHBvaW50cyBhcnJheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IGNvbnRyb2xQb2ludHMgTWFwcGluZ3Mgb2YgY29udHJvbCBwb2ludHMgW3UwLCB2MCwgeDAsIHkwLCAuLi4gLCB1biwgdm4sIHhuLCB5bl0gd2hlcmVcclxuICAgKiAodSosIHYqKSBhcmUgc291cmNlICh4LCB5KSBwb2ludCBhbmQgKHgqLCB5KikgYXJlIGRlc3RpbmF0aW9uICh4LCB5KSBwb2ludC5cclxuICAgKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLlBlcnNwZWN0aXZlfSBOZXcgaW5zdGFuY2UuXHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDA3NDUgR2VuZXJhdGluZyBwZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIG1hdHJpeCBmcm9tIGNvbnRyb2wgcG9pbnRzIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICAgKi9cclxuICBzdGF0aWMgZnJvbUNvbnRyb2xQb2ludHMoY29udHJvbFBvaW50cykge1xyXG4gICAgaWYgKGNvbnRyb2xQb2ludHMubGVuZ3RoIDwgMTYgfHwgY29udHJvbFBvaW50cy5sZW5ndGggJSA0ICE9PSAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRzTGVuZ3RoKGBOdW1iZXIgb2YgYXJndW1lbnRzIG11c3QgYmUgbXVsdGlwbGUgb2YgNCBhbmQgYXQgbGVhc3QgMTYgYXJndW1lbnRzICg0IGNvbnRyb2wgcG9pbnRzKSBleHBlY3RlZC4gJHtjb250cm9sUG9pbnRzLmxlbmd0aH0gYXJndW1lbnRzIGdpdmVuLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxlYXN0U3F1YXJlcyA9IG5ldyBMZWFzdFNxdWFyZXMoOCwgMSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9sUG9pbnRzLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgIGxldCBbdSwgdiwgeCwgeV0gPSBjb250cm9sUG9pbnRzLnNsaWNlKGksIGkgKyA0KTtcclxuXHJcbiAgICAgIGxlYXN0U3F1YXJlcy5hZGRUZXJtcyhbXHJcbiAgICAgICAgeCwgeSwgMSxcclxuICAgICAgICAwLCAwLCAwLFxyXG4gICAgICAgIC14ICogdSwgLXkgKiB1XHJcbiAgICAgIF0sIFt1XSlcclxuICAgICAgICAuYWRkVGVybXMoW1xyXG4gICAgICAgICAgMCwgMCwgMCxcclxuICAgICAgICAgIHgsIHksIDEsXHJcbiAgICAgICAgICAteCAqIHYsIC15ICogdlxyXG4gICAgICAgIF0sIFt2XSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWF0cml4ID0gbGVhc3RTcXVhcmVzLnNvbHZlKCkuZ2V0VmVjdG9ycygpWzBdO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBDYWxjdWxhdGUgZGVub21pbmF0b3IhIFRoZSBncm91bmQtc2t5IGRldGVybWluYXRpb24uXHJcbiAgICAgKiBXaGF0IGlzIHNpZ24gb2YgdGhlICdncm91bmQnIGluIHIoKSBkZW5vbWluYXRvciBhZmZpbmUgZnVuY3Rpb24/XHJcbiAgICAgKiBKdXN0IHVzZSBhbnkgdmFsaWQgaW1hZ2UgY29vcmRpbmF0ZSAoZmlyc3QgY29udHJvbCBwb2ludCkgaW5cclxuICAgICAqIGRlc3RpbmF0aW9uIGZvciBkZXRlcm1pbmF0aW9uIG9mIHdoYXQgcGFydCBvZiB2aWV3IGlzICdncm91bmQnLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBkZW5vbWluYXRvciA9IG1hdHJpeFs2XSAqIGNvbnRyb2xQb2ludHNbMl0gKyBtYXRyaXhbN10gKiBjb250cm9sUG9pbnRzWzNdICsgMSA8IDAgPyAtMSA6IDE7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQZXJzcGVjdGl2ZShtYXRyaXgsIGRlbm9taW5hdG9yKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgcGVyc3BlY3RpdmUgZGlzdG9ydGlvbiB1c2luZyBwZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSBtYXRyaXggUGVyc3BlY3RpdmUgbWF0cml4LlxyXG4gICAqIEByZXR1cm5zIHtsZW5zLmRpc3RvcnRpb24uUGVyc3BlY3RpdmV9XHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDA4NTMgR2VuZXJhdGluZyBpbnZlcnRlZCBwZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIG1hdHJpeCBmcm9tIGZvcndhcmQgcGVyc3BlY3RpdmUgbWF0cml4IGF0IEltYWdlTWFnaWNrIGRvY3N9XHJcbiAgICovXHJcbiAgc3RhdGljIGZyb21Gb3J3YXJkTWF0cml4KG1hdHJpeCkge1xyXG4gICAgLy8gVE9ETzogdHJhcCB0ZXN0ICBjMCpjNC1jMypjMSA9PSAwICAoZGV0ZXJtaW5hbnQgPSAwLCBubyBpbnZlcnNlKVxyXG4gICAgY29uc3QgaW52ZXJzZSA9IHRoaXMuaW52ZXJ0UGVyc3BlY3RpdmVNYXRyaXgobWF0cml4KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogQ2FsY3VsYXRlIGRlbm9taW5hdG9yISBUaGUgZ3JvdW5kLXNreSBkZXRlcm1pbmF0aW9uLlxyXG4gICAgICogV2hhdCBpcyBzaWduIG9mIHRoZSAnZ3JvdW5kJyBpbiByKCkgZGVub21pbmF0b3IgYWZmaW5lIGZ1bmN0aW9uP1xyXG4gICAgICogSnVzdCB1c2UgYW55IHZhbGlkIGltYWdlIGNvb3JkaW5hdGUgaW4gZGVzdGluYXRpb24gZm9yIGRldGVybWluYXRpb24uXHJcbiAgICAgKiBGb3IgYSBmb3J3YXJkIG1hcHBlZCBwZXJzcGVjdGl2ZSB0aGUgaW1hZ2VzIDAsMCBjb29yZCB3aWxsIG1hcCB0b1xyXG4gICAgICogYzIsYzUgaW4gdGhlIGRpc3RvcnRlZCBpbWFnZSwgc28gc2V0IHRoZSBzaWduIG9mIGRlbm9taW5hdG9yIG9mIHRoYXQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGRlbm9taW5hdG9yID0gaW52ZXJzZVs2XSAqIG1hdHJpeFsyXSArIGludmVyc2VbN10gKiBtYXRyaXhbNV0gKyAxIDwgMCA/IC0xIDogMTtcclxuICAgIHJldHVybiBuZXcgUGVyc3BlY3RpdmUoaW52ZXJzZSwgZGVub21pbmF0b3IpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBpbnZlcnRlZCBwZXJzcGVjdGl2ZSBtYXRyaXggZnJvbSBwZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSBtYXRyaXggUGVyc3BlY3RpdmUgbWF0cml4LlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJbXX0gSW52ZXJ0ZWQgcGVyc3BlY3RpdmUgbWF0cml4LlxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAwMTA5IEludmVydGluZyBwZXJzcGVjdGl2ZSBtYXRyaXggYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBpbnZlcnRQZXJzcGVjdGl2ZU1hdHJpeChtYXRyaXgpIHtcclxuICAgIGNvbnN0IGRldGVybWluYW50ID0gcGVyY2VwdGlibGVSZWNpcHJvY2FsKG1hdHJpeFswXSAqIG1hdHJpeFs0XSAtIG1hdHJpeFszXSAqIG1hdHJpeFsxXSk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzRdIC0gbWF0cml4WzddICogbWF0cml4WzVdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzddICogbWF0cml4WzJdIC0gbWF0cml4WzFdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzFdICogbWF0cml4WzVdIC0gbWF0cml4WzRdICogbWF0cml4WzJdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzZdICogbWF0cml4WzVdIC0gbWF0cml4WzNdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzBdIC0gbWF0cml4WzZdICogbWF0cml4WzJdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzNdICogbWF0cml4WzJdIC0gbWF0cml4WzBdICogbWF0cml4WzVdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzNdICogbWF0cml4WzddIC0gbWF0cml4WzZdICogbWF0cml4WzRdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzZdICogbWF0cml4WzFdIC0gbWF0cml4WzBdICogbWF0cml4WzddKVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcmV2ZXJzZU1hcCh4LCB5KSB7XHJcbiAgICByZXR1cm4gbWFwKHgsIHksIHRoaXMubWF0cml4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0VmFsaWRpdHkoeCwgeSwgc2NhbGluZykge1xyXG4gICAgY29uc3QgciA9IHRoaXMubWF0cml4WzZdICogeCArIHRoaXMubWF0cml4WzddICogeSArIDE7XHJcbiAgICBsZXQgdmFsaWRpdHkgPSByICogdGhpcy5kZW5vbWluYXRvciA8IDAgPyAwIDogMTtcclxuICAgIGNvbnN0IGFic1IgPSBNYXRoLmFicyhyKSAqIDI7XHJcbiAgICBjb25zdCBhYnNDNiA9IE1hdGguYWJzKHRoaXMubWF0cml4WzZdKTtcclxuICAgIGNvbnN0IGFic0M3ID0gTWF0aC5hYnModGhpcy5tYXRyaXhbN10pO1xyXG5cclxuICAgIGlmIChhYnNDNiA+IGFic0M3KSB7XHJcbiAgICAgIGlmIChhYnNSIDwgYWJzQzYpIHtcclxuICAgICAgICB2YWxpZGl0eSA9IDAuNSAtIHRoaXMuZGVub21pbmF0b3IgKiByIC8gKHRoaXMubWF0cml4WzZdICogc2NhbGluZyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoYWJzUiA8IGFic0M3KSB7XHJcbiAgICAgIHZhbGlkaXR5ID0gMC41IC0gdGhpcy5kZW5vbWluYXRvciAqIHIgLyAodGhpcy5tYXRyaXhbN10gKiBzY2FsaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWRpdHk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldFBhcnRpYWxEZXJpdmF0aXZlcyh4LCB5KSB7XHJcbiAgICBjb25zdCBwID0gdGhpcy5tYXRyaXhbMF0gKiB4ICsgdGhpcy5tYXRyaXhbMV0gKiB5ICsgdGhpcy5tYXRyaXhbMl0sXHJcbiAgICAgIHEgPSB0aGlzLm1hdHJpeFszXSAqIHggKyB0aGlzLm1hdHJpeFs0XSAqIHkgKyB0aGlzLm1hdHJpeFs1XSxcclxuICAgICAgciA9IHRoaXMubWF0cml4WzZdICogeCArIHRoaXMubWF0cml4WzddICogeSArIDEsXHJcbiAgICAgIHNjYWxlID0gTWF0aC5wb3coMSAvIHIsIDIpO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIChyICogdGhpcy5tYXRyaXhbMF0gLSBwICogdGhpcy5tYXRyaXhbNl0pICogc2NhbGUsIC8vIGRVeFxyXG4gICAgICAociAqIHRoaXMubWF0cml4WzFdIC0gcCAqIHRoaXMubWF0cml4WzddKSAqIHNjYWxlLCAvLyBkVXlcclxuICAgICAgKHIgKiB0aGlzLm1hdHJpeFszXSAtIHEgKiB0aGlzLm1hdHJpeFs2XSkgKiBzY2FsZSwgLy8gZFZ4XHJcbiAgICAgIChyICogdGhpcy5tYXRyaXhbNF0gLSBxICogdGhpcy5tYXRyaXhbN10pICogc2NhbGUgLy9kVnlcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXBzIHNvdXJjZSBjb29yZHMgaW50byBkZXN0aW5hdGlvbiBjb29yZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdSBYLWNvb3JkaW5hdGUgb2Ygc291cmNlIGltYWdlIHBvaW50LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2IFktY29vcmRpbmF0ZSBvZiBzb3VyY2UgaW1hZ2UgcG9pbnQuXHJcbiAgICogQHJldHVybnMge1BvaW50fSBGb3J3YXJkIG1hcHBlZCBkZXN0aW5hdGlvbiBpbWFnZSBjb29yZHMuXHJcbiAgICovXHJcbiAgZm9yd2FyZE1hcCh1LCB2KSB7XHJcbiAgICByZXR1cm4gbWFwKHUsIHYsIHRoaXMuZm9yd2FyZE1hdHJpeCk7XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKFBlcnNwZWN0aXZlLnByb3RvdHlwZSwgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc3BlY3RpdmU7IiwiaW1wb3J0IEFmZmluZSBmcm9tICcuL2Rpc3RvcnRpb24vYWZmaW5lJztcclxuaW1wb3J0IEFyYyBmcm9tICcuL2Rpc3RvcnRpb24vYXJjJztcclxuaW1wb3J0IFBlcnNwZWN0aXZlIGZyb20gJy4vZGlzdG9ydGlvbi9wZXJzcGVjdGl2ZSc7XHJcblxyXG4vKipcclxuICogQHN1bW1hcnkgUmVzb2x2ZXMgZGlzdG9ydGlvbiBjbGFzcyBpbnN0YW5jZSB1c2luZyBkaXN0b3J0aW9uIGFyZ3VtZW50cyBhbmQgb3B0aW9uYWxseSBpbWFnZS5cclxuICpcclxuICogQGNhbGxiYWNrIGxlbnN+RGlzdG9ydGlvblJlc29sdmVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFyZ3NcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gW2ltYWdlXVxyXG4gKiBAcmV0dXJucyB7RGlzdG9ydGlvbkludGVyZmFjZX1cclxuICovXHJcblxyXG4vKipcclxuICogTWFrZSBBZmZpbmUgZGlzdG9ydGlvbiB1c2luZyBjb250cm9sIHBvaW50cy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJbXX0gYXJnc1xyXG4gKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLkFmZmluZX1cclxuICovXHJcbmZ1bmN0aW9uIGFmZmluZUJ5Q29udHJvbFBvaW50cyhhcmdzKSB7XHJcbiAgcmV0dXJuIEFmZmluZS5mcm9tQ29udHJvbFBvaW50cyhhcmdzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2UgQWZmaW5lIGRpc3RvcnRpb24gdXNpbmcgYWZmaW5lIG1hdHJpeC4gQXJndW1lbnRzIG9yZGVyIGlzIGFzIGRlc2NyaWJlZCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEltYWdlTWFnaWNrXHJcbiAqIGFyZ3VtZW50cy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHN4XHJcbiAqIEBwYXJhbSByeVxyXG4gKiBAcGFyYW0gcnhcclxuICogQHBhcmFtIHN5XHJcbiAqIEBwYXJhbSB0eFxyXG4gKiBAcGFyYW0gdHlcclxuICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5BZmZpbmV9XHJcbiAqL1xyXG5mdW5jdGlvbiBhZmZpbmVCeU1hdHJpeCAoW3N4LCByeSwgcngsIHN5LCB0eCwgdHldKSB7XHJcbiAgLy8gQ2hhbmdlIGFyZ3VtZW50cyBvcmRlci5cclxuICByZXR1cm4gQWZmaW5lLmZyb21Gb3J3YXJkTWF0cml4KFtzeCwgcngsIHR4LCByeSwgc3ksIHR5XSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlIHBlcnNwZWN0aXZlIGRpc3RvcnRpb24gdXNpbmcgY29udHJvbCBwb2ludHMuXHJcbiAqIElmIG51bWJlciBvZiBjb250cm9sIHBvaW50IHNldHMgaXMgbGVzcyB0aGFuIDQgKDwgMTYgYXJndW1lbnRzKSwgdGhpcyB3aWxsIGZhbGxiYWNrIHRvIEFmZmluZSBkaXN0b3J0aW9uLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBhcmdzXHJcbiAqIEByZXR1cm5zIHtsZW5zLmRpc3RvcnRpb24uUGVyc3BlY3RpdmV8bGVucy5kaXN0b3J0aW9uLkFmZmluZX1cclxuICovXHJcbmZ1bmN0aW9uIHBlcnNwZWN0aXZlQnlDb250cm9sUG9pbnRzKGFyZ3MpIHtcclxuICBpZiAoYXJncy5sZW5ndGggPCAxNikge1xyXG4gICAgY29uc29sZS53YXJuKCdQZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIHJlcXVpcmVzIGF0IGxlYXN0IDQgY29udHJvbHMgcG9pbnRzIG1hcHBpbmcgKHUsIHYpIC0+ICh4LCB5KS4gQWZmaW5lIGRpc3RvcnRpb24gd2lsbCBiZSB1c2VkLicpO1xyXG4gICAgcmV0dXJuIEFmZmluZS5mcm9tQ29udHJvbFBvaW50cyhhcmdzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBQZXJzcGVjdGl2ZS5mcm9tQ29udHJvbFBvaW50cyhhcmdzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFyZ3NcclxuICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5QZXJzcGVjdGl2ZX1cclxuICovXHJcbmZ1bmN0aW9uIHBlcnNwZWN0aXZlQnlNYXRyaXgoYXJncykge1xyXG4gIHJldHVybiBQZXJzcGVjdGl2ZS5mcm9tRm9yd2FyZE1hdHJpeChhcmdzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFyZ3NcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gaW1hZ2VcclxuICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5BcmN9XHJcbiAqL1xyXG5mdW5jdGlvbiBhcmNCeUFyZ3VtZW50cyhhcmdzLCBpbWFnZSkge1xyXG4gIHJldHVybiBBcmMuZnJvbUFyZ3VtZW50cyhpbWFnZS52aWV3cG9ydCwgYXJncyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXN0b3J0aW9uIHR5cGVzLlxyXG4gKlxyXG4gKiBAZW51bSB7bGVuc35kaXN0b3J0aW9uUmVzb2x2ZXJ9XHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBkaXN0b3J0cyA9IHtcclxuICAvKipcclxuICAgKiBBZmZpbmUgZGlzdG9ydGlvbiB1c2luZyBjb250cm9sIHBvaW50cy4gQXJndW1lbnRzIGFyZSBzZXRzIG9mIGNvbnRyb2wgcG9pbnRzIG1hcHBpbmdzOlxyXG4gICAqIFt1MCwgdjAsIHgwLCB5MCwgLi4uLCB1Tiwgdk4sIHhOLCB5Tl0sIHdoZXJlIHUqLCB2KiBhcmUgc291cmNlIGltYWdlIGNvb3JkcywgeCosIHkqIGFyZVxyXG4gICAqIGRlc3RpbmF0aW9uIGltYWdlIGNvb3Jkcy5cclxuICAgKi9cclxuICBBRkZJTkU6IGFmZmluZUJ5Q29udHJvbFBvaW50cyxcclxuICAvKipcclxuICAgKiBBZmZpbmUgZGlzdG9ydGlvbiB1c2luZyBmb3J3YXJkIGFmZmluZSBtYXRyaXguXHJcbiAgICogQXJndW1lbnRzIGFyZSBhZmZpbmUgbWF0cml4IGNvZWZmaWNpZW50czogW3N4LCByeSwgcngsIHN5LCB0eCwgdHldXHJcbiAgICovXHJcbiAgQUZGSU5FX1BST0pFQ1RJT046IGFmZmluZUJ5TWF0cml4LFxyXG4gIC8qKlxyXG4gICAqIFBlcnNwZWN0aXZlIGRpc3RvcnRpb24gdXNpbmcgY29udHJvbCBwb2ludHMuIEFyZ3VtZW50cyBhcmUgc2V0cyBvZiBjb250cm9sIHBvaW50cyBtYXBwaW5nczpcclxuICAgKiBbdTAsIHYwLCB4MCwgeTAsIC4uLiwgdU4sIHZOLCB4TiwgeU5dLCB3aGVyZSB1KiwgdiogYXJlIHNvdXJjZSBpbWFnZSBjb29yZHMsIHgqLCB5KiBhcmVcclxuICAgKiBkZXN0aW5hdGlvbiBpbWFnZSBjb29yZHMuXHJcbiAgICogSWYgbnVtYmVyIG9mIGNvbnRyb2wgcG9pbnQgc2V0cyBpcyBsZXNzIHRoYW4gNCAoPCAxNiBhcmd1bWVudHMpLCB0aGlzIHdpbGwgZmFsbGJhY2sgdG8gQWZmaW5lIGRpc3RvcnRpb25cclxuICAgKiB3aXRoIHdhcm5pbmcgbWVzc2FnZSBpbiBjb25zb2xlLlxyXG4gICAqL1xyXG4gIFBFUlNQRUNUSVZFOiBwZXJzcGVjdGl2ZUJ5Q29udHJvbFBvaW50cyxcclxuICAvKipcclxuICAgKiBQZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIHVzaW5nIGZvcndhcmQgcGVyc3BlY3RpdmUgbWF0cml4LiBBcmd1bWVudHMgYXJlIHBlcnNwZWN0aXZlIG1hdHJpeCBjb2VmZmljaWVudHM6XHJcbiAgICogW3N4LCByeSwgdHgsIHJ4LCBzeSwgdHksIHB4LCBweV0uXHJcbiAgICovXHJcbiAgUEVSU1BFQ1RJVkVfUFJPSkVDVElPTjogcGVyc3BlY3RpdmVCeU1hdHJpeCxcclxuXHJcbiAgLyoqXHJcbiAgICogQXJjIGRpc3RvcnRpb24uIEFyZ3VtZW50cyBhcmU6IFthcmNBbmdsZSwgcm90YXRpb24sIG91dGVyUmFkaXVzLCBpbm5lclJhZGl1c10uIEFsbCBhcmd1bWVudHMgZXhjZXB0IGFyY0FuZ2xlXHJcbiAgICogYXJlIG9wdGlvbmFsLiBTZWUge0BsaW5rIGxlbnMuZGlzdG9ydGlvbi5BcmMuZnJvbUFyZ3VtZW50c31cclxuICAgKi9cclxuICBBUkM6IGFyY0J5QXJndW1lbnRzXHJcbn07XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXIgY3VzdG9tIGRpc3RvcnRpb24gcmVzb2x2ZXIuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAqIEBwYXJhbSB7bGVuc35kaXN0b3J0aW9uUmVzb2x2ZXJ9IHJlc29sdmVyXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlckRpc3RvcnRpb25SZXNvbHZlcihuYW1lLCByZXNvbHZlcikge1xyXG4gIGRpc3RvcnRzW25hbWVdICA9IHJlc29sdmVyO1xyXG59XHJcblxyXG4vKipcclxuICogVW5yZWdpc3RlciBkaXN0b3J0aW9uIHJlc29sdmVyLlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gKi9cclxuZnVuY3Rpb24gdW5yZWdpc3RlckRpc3RvcnRpb25SZXNvbHZlcihuYW1lKSB7XHJcbiAgZGVsZXRlIGRpc3RvcnRzW25hbWVdO1xyXG59XHJcblxyXG5leHBvcnQge3JlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyLCB1bnJlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3RvcnRzOyIsImltcG9ydCBJbnZhbGlkQXJndW1lbnQgZnJvbSAnLi9pbnZhbGlkLWFyZ3VtZW50JztcclxuaW1wb3J0IEludmFsaWRBcmd1bWVudHNMZW5ndGggZnJvbSAnLi9pbnZhbGlkLWFyZ3VtZW50cy1sZW5ndGgnO1xyXG5pbXBvcnQgTGVuc0V4Y2VwdGlvbiBmcm9tICcuL2xlbnMtZXhjZXB0aW9uJztcclxuaW1wb3J0IFVuc29sdmFibGVNYXRyaXggZnJvbSAnLi91bnNvbHZhYmxlLW1hdHJpeCc7XHJcblxyXG4vKipcclxuICogRXhjZXB0aW9uIG5hbWVzcGFjZVxyXG4gKlxyXG4gKiBAbmFtZXNwYWNlIGxlbnMuZXhjZXB0aW9uXHJcbiAqL1xyXG5jb25zdCBleGNlcHRpb24gPSB7XHJcbiAgSW52YWxpZEFyZ3VtZW50LFxyXG4gIEludmFsaWRBcmd1bWVudHNMZW5ndGgsXHJcbiAgTGVuc0V4Y2VwdGlvbixcclxuICBVbnNvbHZhYmxlTWF0cml4XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleGNlcHRpb247IiwiZXhwb3J0IHtkZWZhdWx0IGFzIExlbnNFeGNlcHRpb259IGZyb20gJy4vbGVucy1leGNlcHRpb24nO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIEludmFsaWRBcmd1bWVudHNMZW5ndGh9IGZyb20gJy4vaW52YWxpZC1hcmd1bWVudHMtbGVuZ3RoJztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBVbnNvbHZhYmxlTWF0cml4fSBmcm9tICcuL3Vuc29sdmFibGUtbWF0cml4JztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBJbnZhbGlkQXJndW1lbnR9IGZyb20gJy4vaW52YWxpZC1hcmd1bWVudCc7IiwiaW1wb3J0IExlbnNFeGNlcHRpb24gZnJvbSAnLi9sZW5zLWV4Y2VwdGlvbic7XHJcblxyXG4vKipcclxuICogSW52YWxpZCBBcmd1bWVudCBFeGNlcHRpb24uXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLmV4Y2VwdGlvblxyXG4gKiBAZXh0ZW5kcyBsZW5zLmV4Y2VwdGlvbi5MZW5zRXhjZXB0aW9uXHJcbiAqL1xyXG5jbGFzcyBJbnZhbGlkQXJndW1lbnQgZXh0ZW5kcyBMZW5zRXhjZXB0aW9uIHtcclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xyXG4gICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICB0aGlzLm5hbWUgPSAnSW52YWxpZEFyZ3VtZW50JztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludmFsaWRBcmd1bWVudDsiLCJpbXBvcnQgTGVuc0V4Y2VwdGlvbiBmcm9tICcuL2xlbnMtZXhjZXB0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBFeGNlcHRpb24gZm9yIGNhc2VzIHdoZW4gaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzIHBhc3NlZFxyXG4gKlxyXG4gKiBAZXh0ZW5kcyBsZW5zLmV4Y2VwdGlvbi5MZW5zRXhjZXB0aW9uXHJcbiAqIEBtZW1iZXJPZiBsZW5zLmV4Y2VwdGlvblxyXG4gKi9cclxuY2xhc3MgSW52YWxpZEFyZ3VtZW50c0xlbmd0aCBleHRlbmRzIExlbnNFeGNlcHRpb24ge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIHRoaXMubmFtZSA9ICdJbnZhbGlkQXJndW1lbnRzTGVuZ3RoJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludmFsaWRBcmd1bWVudHNMZW5ndGg7IiwiLyoqXHJcbiAqIEJhc2UgTGVucyBleGNlcHRpb25cclxuICpcclxuICogQGV4dGVuZHMgRXJyb3JcclxuICogQG1lbWJlck9mIGxlbnMuZXhjZXB0aW9uXHJcbiAqL1xyXG5jbGFzcyBMZW5zRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xyXG4gICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICB0aGlzLm5hbWUgPSAnTGVuc0V4Y2VwdGlvbic7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKG1lc3NhZ2UpKS5zdGFjaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlbnNFeGNlcHRpb247IiwiaW1wb3J0IExlbnNFeGNlcHRpb24gZnJvbSAnLi9sZW5zLWV4Y2VwdGlvbic7XHJcblxyXG4vKipcclxuICogRXhjZXB0aW9uIGZvciB1bnNvbHZhYmxlIG1hdHJpeCBpbiBHYXVzcy1Kb3JkYW4gZWxpbWluYXRpb25cclxuICpcclxuICogQGV4dGVuZHMgbGVucy5leGNlcHRpb24uTGVuc0V4Y2VwdGlvblxyXG4gKiBAbWVtYmVyT2YgbGVucy5leGNlcHRpb25cclxuICovXHJcbmNsYXNzIFVuc29sdmFibGVNYXRyaXggZXh0ZW5kcyBMZW5zRXhjZXB0aW9uIHtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgdGhpcy5uYW1lID0gJ1Vuc29sdmFibGVNYXRyaXgnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5zb2x2YWJsZU1hdHJpeDsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vZmlsdGVyL2ZpbHRlcic7XHJcbmltcG9ydCB7Ym94LCBjdWJpY0JDfSBmcm9tIFwiLi9maWx0ZXIvZmlsdGVyLWZ1bmN0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIEZpbHRlciBmYWN0b3J5LlxyXG4gKlxyXG4gKiBAY2FsbGJhY2sgbGVuc35maWx0ZXJGYWN0b3J5XHJcbiAqIEByZXR1cm5zIHtGaWx0ZXJJbnRlcmZhY2V9XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEByZXR1cm5zIHtsZW5zLmZpbHRlci5GaWx0ZXJ9XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gUk9CSURPVVgoKSB7XHJcbiAgcmV0dXJuIG5ldyBGaWx0ZXIoXHJcbiAgICBjdWJpY0JDKDAuMzc4MjE1NzU1MDkzOTk4NjcsIDAuMzEwODkyMTIyNDUzMDAwNjcpLFxyXG4gICAgYm94KCksXHJcbiAgICAyLFxyXG4gICAgMS4xNjg1Nzc3NjIwODM2OTMyLFxyXG4gICAgMVxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcmV0dXJucyB7bGVucy5maWx0ZXIuRmlsdGVyfVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIFJPQklET1VYX1NIQVJQKCkge1xyXG4gIHJldHVybiBuZXcgRmlsdGVyKFxyXG4gICAgY3ViaWNCQygwLjI2MjAxNDUxMjM5OTAxNDIsIDAuMzY4OTkyNzQzODAwNDkyOSksXHJcbiAgICBib3goKSxcclxuICAgIDIsXHJcbiAgICAxLjEwNTgyMjkzMzcxOTAxOSxcclxuICAgIDFcclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogRmlsdGVyIHByZXNldHMuXHJcbiAqXHJcbiAqIEBlbnVtIHtsZW5zfmZpbHRlckZhY3Rvcnl9XHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBmaWx0ZXJQcmVzZXRzID0ge1xyXG4gIFJPQklET1VYLFxyXG4gIFJPQklET1VYX1NIQVJQXHJcbn07XHJcblxyXG4vLyBUT0RPIGFkZCBtb3JlIGZpbHRlciBwcmVzZXRzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJQcmVzZXRzOyIsIi8qKlxyXG4gKiBAbmFtZXNwYWNlIGxlbnMuZmlsdGVyLmZpbHRlckZ1bmN0aW9uc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyBib3ggZmlsdGVyIGZ1bmN0aW9uLlxyXG4gKiBBIEJveCBmaWx0ZXIgaXMgYSBlcXVhbCB3ZWlnaHRpbmcgZnVuY3Rpb24gKGFsbCB3ZWlnaHRzIGVxdWFsKS5cclxuICogRE8gTk9UIExJTUlUIHJlc3VsdHMgYnkgc3VwcG9ydCBvciByZXNpemUgcG9pbnQgc2FtcGxpbmcgd2lsbCB3b3JrXHJcbiAqIGFzIGl0IHJlcXVlc3RzIHBvaW50cyBiZXlvbmQgaXRzIG5vcm1hbCAwLjAgc3VwcG9ydCBzaXplLlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy5maWx0ZXIuZmlsdGVyRnVuY0ZhY3Rvcmllc1xyXG4gKiBAcmV0dXJucyB7bGVucy5maWx0ZXIuRmlsdGVyfmZpbHRlckZ1bmN0aW9ufVxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9yZXNpemVfOGNfc291cmNlLmh0bWwjbDAwMTgxIE94IGZpbHRlciBmdW5jdGlvbiBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBib3goKSB7XHJcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH07XHJcblxyXG4gIGZ1bmMuZmlsdGVyRnVuY3Rpb25OYW1lID0gJ2JveCc7XHJcblxyXG4gIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZXMgY3ViaWNCQyBmaWx0ZXIgZnVuY3Rpb24uXHJcbiAqIDxwPkN1YmljIEZpbHRlcnMgdXNpbmcgQixDIGRldGVybWluZWQgdmFsdWVzOjwvcD5cclxuICogPHByZT5cclxuICogICAgIE1pdGNoZWxsLU5ldHJhdmFsaSAgQiA9IDEvMyBDID0gMS8zICBcIkJhbGFuY2VkXCIgY3ViaWMgc3BsaW5lIGZpbHRlclxyXG4gKiAgICAgQ2F0bXVsbC1Sb20gICAgICAgICBCID0gMCAgIEMgPSAxLzIgIEludGVycG9sYXRvcnkgYW5kIGV4YWN0IG9uIGxpbmVhcnNcclxuICogICAgIFNwbGluZSAgICAgICAgICAgICAgQiA9IDEgICBDID0gMCAgICBCLVNwbGluZSBHYXVzc2lhbiBhcHByb3hpbWF0aW9uXHJcbiAqICAgICBIZXJtaXRlICAgICAgICAgICAgIEIgPSAwICAgQyA9IDAgICAgQi1TcGxpbmUgaW50ZXJwb2xhdG9yXHJcbiAqIDwvcHJlPlxyXG4gKlxyXG4gKiA8cD5TZWUgcGFwZXIgYnkgTWl0Y2hlbGwgYW5kIE5ldHJhdmFsaSwgUmVjb25zdHJ1Y3Rpb24gRmlsdGVycyBpbiBDb21wdXRlclxyXG4gKiBHcmFwaGljcyBDb21wdXRlciBHcmFwaGljcywgVm9sdW1lIDIyLCBOdW1iZXIgNCwgQXVndXN0IDE5ODhcclxuICoge0BsaW5rIGh0dHA6Ly93d3cuY3MudXRleGFzLmVkdS91c2Vycy9mdXNzZWxsL2NvdXJzZXMvY3MzODRnL2xlY3R1cmVzL21pdGNoZWxsL01pdGNoZWxsLnBkZn0uPC9wPlxyXG4gKlxyXG4gKiA8cD5Db2VmZmljZW50cyBhcmUgZGV0ZXJtaW5lZCBmcm9tIEIsQyB2YWx1ZXM6XHJcbiAqIDxwcmU+XHJcbiAqICAgIFAwID0gKCAgNiAtIDIqQiAgICAgICApLzYgPSBjb2VmZlswXVxyXG4gKiAgICBQMSA9ICAgICAgICAgMFxyXG4gKiAgICBQMiA9ICgtMTggKzEyKkIgKyA2KkMgKS82ID0gY29lZmZbMV1cclxuICogICAgUDMgPSAoIDEyIC0gOSpCIC0gNipDICkvNiA9IGNvZWZmWzJdXHJcbiAqICAgIFEwID0gKCAgICAgIDgqQiArMjQqQyApLzYgPSBjb2VmZlszXVxyXG4gKiAgICBRMSA9ICggICAgLTEyKkIgLTQ4KkMgKS82ID0gY29lZmZbNF1cclxuICogICAgUTIgPSAoICAgICAgNipCICszMCpDICkvNiA9IGNvZWZmWzVdXHJcbiAqICAgIFEzID0gKCAgICAtIDEqQiAtIDYqQyApLzYgPSBjb2VmZls2XVxyXG4gKiA8L3ByZT5cclxuICogd2hpY2ggYXJlIHVzZWQgdG8gZGVmaW5lIHRoZSBmaWx0ZXI6XHJcbiAqIDxwcmU+XHJcbiAqICAgIFAwICsgUDEqeCArIFAyKnheMiArIFAzKnheMyAgICAgIDAgPD0geCA8IDFcclxuICogICAgUTAgKyBRMSp4ICsgUTIqeF4yICsgUTMqeF4zICAgICAgMSA8PSB4IDwgMlxyXG4gKiA8L3ByZT5cclxuICogd2hpY2ggZW5zdXJlcyBmdW5jdGlvbiBpcyBjb250aW51b3VzIGluIHZhbHVlIGFuZCBkZXJpdmF0aXZlIChzbG9wZSkuPC9wPlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy5maWx0ZXIuZmlsdGVyRnVuY0ZhY3Rvcmllc1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9yZXNpemVfOGNfc291cmNlLmh0bWwjbDAwMjA3IEN1YmljQkMgZmlsdGVyIGZ1bmN0aW9uIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICogQHBhcmFtIHtudW1iZXJ9IGJcclxuICogQHBhcmFtIHtudW1iZXJ9IGNcclxuICogQHJldHVybnMge2xlbnMuZmlsdGVyLkZpbHRlcn5maWx0ZXJGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIGN1YmljQkMoYiwgYykge1xyXG4gIGNvbnN0IHAwID0gKDYgLSAyICogYikgLyA2O1xyXG4gIC8vIGNvbnN0IHAxID0gMDtcclxuICBjb25zdCBwMiA9ICgtMTggKyAxMiAqIGIgKyA2ICogYykgLyA2O1xyXG4gIGNvbnN0IHAzID0gKDEyIC0gOSAqIGIgLSA2ICogYykgLyA2O1xyXG4gIGNvbnN0IHEwID0gKDggKiBiICsgMjQgKiBjKSAvIDY7XHJcbiAgY29uc3QgcTEgPSAoLTEyICogYiAtIDQ4ICogYykgLyA2O1xyXG4gIGNvbnN0IHEyID0gKDYgKiBiICsgMzAgKiBjKSAvIDY7XHJcbiAgY29uc3QgcTMgPSAoLTEgKiBiIC0gNiAqIGMpIC8gNjtcclxuXHJcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICBpZiAoeCA8IDEpIHtcclxuICAgICAgcmV0dXJuIHAwICsgeCAqICh4ICogKHAyICsgeCAqIHAzKSk7XHJcbiAgICB9IGVsc2UgaWYgKHggPCAyKSB7XHJcbiAgICAgIHJldHVybiBxMCArIHggKiAocTEgKyB4ICogKHEyICsgeCAqIHEzKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmMuZmlsdGVyRnVuY3Rpb25OYW1lID0gJ2N1YmljQkMnO1xyXG4gIGZ1bmMuYiA9IGI7XHJcbiAgZnVuYy5jID0gYztcclxuXHJcbiAgcmV0dXJuIGZ1bmM7XHJcbn07XHJcblxyXG4vLyBUT0RPOiBhZGQgbW9yZSBmaWx0ZXIgZnVuY3Rpb25zXHJcblxyXG5leHBvcnQge1xyXG4gIGJveCwgY3ViaWNCQ1xyXG59OyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXInO1xyXG5pbXBvcnQgKiBhcyBmaWx0ZXJGdW5jdGlvbnMgZnJvbSAnLi9maWx0ZXItZnVuY3Rpb25zJztcclxuXHJcbi8qKlxyXG4gKiBGaWx0ZXIgbmFtZXNwYWNlXHJcbiAqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5maWx0ZXJcclxuICovXHJcbmNvbnN0IGZpbHRlciA9IHtcclxuICBGaWx0ZXIsXHJcbiAgZmlsdGVyRnVuY3Rpb25zXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXI7IiwiaW1wb3J0IHtFUFNJTE9OfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZmlsdGVyIG9yIHdpbmRvd2luZyBmdW5jdGlvbi5cclxuICpcclxuICogQGNhbGxiYWNrIGxlbnMuZmlsdGVyLkZpbHRlcn5maWx0ZXJGdW5jdGlvblxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3hdXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3VwcG9ydF1cclxuICogQHBhcmFtIHtudW1iZXJ9IFt3aW5kb3dTdXBwb3J0XVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBSZXNhbXBsZSBmaWx0ZXIuXHJcbiAqXHJcbiAqIEBpbXBsZW1lbnRzIHtGaWx0ZXJJbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLmZpbHRlclxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy5pbWFnZW1hZ2ljay5vcmcvVXNhZ2UvZmlsdGVyLyNmaWx0ZXIgUmVzYW1wbGluZyBGaWx0ZXJzfSBhdCBJbWFnZU1hZ2ljayBkb2NzXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3Mi5lZWNzLmJlcmtlbGV5LmVkdS9QdWJzL1RlY2hScHRzLzE5ODkvQ1NELTg5LTUxNi5wZGYgRnVuZGFtZW50YWxzIG9mIFRleHR1cmUgTWFwcGluZyBhbmQgSW1hZ2UgV2FycGluZyBieSBQYXVsIFMuIEhlY2tiZXJ0fVxyXG4gKiBwYWdlIDQxLCBzZWN0aW9uIDMuNCwgMy41XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3Jlc2l6ZV84Y19zb3VyY2UuaHRtbCNsMDA3NTcgQXF1aXJlUmVzaXplRmlsdGVyIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICogQHR1dG9yaWFsIDAyLjAzLnBpeGVsLWNvbG9yLWxvb2t1cFxyXG4gKi9cclxuY2xhc3MgRmlsdGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2xlbnMuZmlsdGVyLkZpbHRlcn5maWx0ZXJGdW5jdGlvbn0gZmlsdGVyRnVuY3Rpb24gRmlsdGVyaW5nIGZ1bmN0aW9uLlxyXG4gICAqIEBwYXJhbSB7bGVucy5maWx0ZXIuRmlsdGVyfmZpbHRlckZ1bmN0aW9ufSB3aW5kb3dpbmdGdW5jdGlvbiBXaW5kb3dpbmcgZnVuY3Rpb24uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN1cHBvcnQgRmlsdGVyIHJlZ2lvbiBvZiBzdXBwb3J0IC0gdGhlIGZpbHRlciBzdXBwb3J0IGxpbWl0LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZSBEaW1lbnNpb24gc2NhbGluZyB0byBmaXQgd2luZG93IHN1cHBvcnQgKHVzYWxseSAxLjApLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbYmx1cj0xXSBYLXNjYWxlIChibHVyLXNoYXJwZW4pLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bGx9IFt3aW5kb3dTdXBwb3J0PW51bGxdIFdpbmRvdyBzdXBwb3J0LCB1c3VhbGx5IGVxdWFsIHRvIHN1cHBvcnQgKGV4cGVydCBvbmx5KS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihmaWx0ZXJGdW5jdGlvbiwgd2luZG93aW5nRnVuY3Rpb24sIHN1cHBvcnQsIHNjYWxlLCBibHVyID0gMSwgd2luZG93U3VwcG9ydCA9IG51bGwpIHtcclxuICAgIHRoaXMuZmlsdGVyRnVuY3Rpb24gICAgPSBmaWx0ZXJGdW5jdGlvbjtcclxuICAgIHRoaXMud2luZG93aW5nRnVuY3Rpb24gPSB3aW5kb3dpbmdGdW5jdGlvbjtcclxuICAgIHRoaXMuc3VwcG9ydCAgICAgICAgICAgPSBzdXBwb3J0O1xyXG4gICAgdGhpcy5zY2FsZSAgICAgICAgICAgICA9IHNjYWxlO1xyXG4gICAgdGhpcy5ibHVyICAgICAgICAgICAgICA9IGJsdXI7XHJcbiAgICB0aGlzLndpbmRvd1N1cHBvcnQgICAgID0gd2luZG93U3VwcG9ydCAhPT0gbnVsbCA/IHdpbmRvd1N1cHBvcnQgOiBzdXBwb3J0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRXZWlnaHQoeCkge1xyXG4gICAgY29uc3QgeEJsdXIgPSB4IC8gdGhpcy5ibHVyO1xyXG4gICAgY29uc3Qgc2NhbGUgPSB4Qmx1ciA8IEVQU0lMT04gPyAxIDogdGhpcy53aW5kb3codGhpcy5zY2FsZSAqIHhCbHVyKTtcclxuICAgIHJldHVybiBzY2FsZSAqIHRoaXMuZmlsdGVyKHhCbHVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZmlsdGVyKHgpIHtcclxuICAgIHJldHVybiB0aGlzLmZpbHRlckZ1bmN0aW9uKHgsIHRoaXMuc3VwcG9ydCwgdGhpcy53aW5kb3dTdXBwb3J0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgd2luZG93KHgpIHtcclxuICAgIHJldHVybiB0aGlzLndpbmRvd2luZ0Z1bmN0aW9uKHgsIHRoaXMuc3VwcG9ydCwgdGhpcy53aW5kb3dTdXBwb3J0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjsiLCJpbXBvcnQgVmlld3BvcnQgZnJvbSAnLi4vdmlld3BvcnQnO1xyXG5pbXBvcnQgdnB4IGZyb20gJy4uL3ZweCc7XHJcbmltcG9ydCB2aXJ0dWFsUGl4ZWxUcmFpdCBmcm9tICcuLi9taXhpbnMvdmlydHVhbC1waXhlbC10cmFpdCc7XHJcbmltcG9ydCBpbnRlcnBvbGF0aW9uVHJhaXQgZnJvbSAnLi4vbWl4aW5zL2ludGVycG9sYXRpb24tdHJhaXQnO1xyXG5pbXBvcnQgaW50ZXJwb2xhdGlvbiBmcm9tICcuLi9pbnRlcnBvbGF0aW9uJztcclxuXHJcbmZ1bmN0aW9uIG5vdEltcGxlbWVudGVkKG1ldGhvZCkge1xyXG4gIHRocm93IG5ldyBFcnJvcihgJHttZXRob2R9KCkgaXMgYWJzdHJhY3QgbWV0aG9kIGFuZCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGNoaWxkIGNsYXNzYCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBYnN0cmFjdCBpbWFnZSBjbGFzcyBmb3IgSW1hZ2VJbnRlcmZhY2UgaW1wbGVtZW50YXRpb24uXHJcbiAqXHJcbiAqIEBpbXBsZW1lbnRzIHtJbWFnZUludGVyZmFjZX1cclxuICogQG1lbWJlck9mIGxlbnMuaW1hZ2VcclxuICogQGFic3RyYWN0XHJcbiAqIEBtaXhlcyBsZW5zLm1peGlucy5pbnRlcnBvbGF0aW9uVHJhaXRcclxuICogQG1peGVzIGxlbnMubWl4aW5zLnZpcnR1YWxQaXhlbFRyYWl0XHJcbiAqL1xyXG5jbGFzcyBBYnN0cmFjdEltYWdlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIEltYWdlIHdpZHRoXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBJbWFnZSBoZWlnaHRcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMudmlld3BvcnQgPSBuZXcgVmlld3BvcnQoMCwgMCwgdGhpcy53aWR0aCAtIDEsIHRoaXMuaGVpZ2h0IC0gMSk7XHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IFswLCAwLCAwLCAwXTsgLy8gVHJhbnNwYXJlbnQ7XHJcbiAgICB0aGlzLnZpcnR1YWxQaXhlbE1ldGhvZCA9IHZweC5UUkFOU1BBUkVOVDtcclxuICAgIHRoaXMucXVhbnR1bVJhbmdlID0gMjU1O1xyXG4gICAgdGhpcy5pbnRlcnBvbGF0aW9uTWV0aG9kID0gaW50ZXJwb2xhdGlvbi5JTlRFR0VSO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRQaXhlbENvbG9yKHgsIHkpIHtcclxuICAgIHggPSBNYXRoLmZsb29yKHggLSB0aGlzLnZpZXdwb3J0LngxKTtcclxuICAgIHkgPSBNYXRoLmZsb29yKHkgLSB0aGlzLnZpZXdwb3J0LnkxKTtcclxuXHJcbiAgICBpZiAoeCA+PSAwICYmIHggPCB0aGlzLndpZHRoICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5oZWlnaHQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VQaXhlbENvbG9yKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmdldFZpcnR1YWxQaXhlbENvbG9yKHgsIHksIHRoaXMudmlydHVhbFBpeGVsTWV0aG9kKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc2V0UGl4ZWxDb2xvcih4LCB5LCBjb2xvcikge1xyXG4gICAgeCA9IE1hdGguZmxvb3IoeCAtIHRoaXMudmlld3BvcnQueDEpO1xyXG4gICAgeSA9IE1hdGguZmxvb3IoeSAtIHRoaXMudmlld3BvcnQueTEpO1xyXG5cclxuICAgIGlmICh4ID49IDAgJiYgeCA8IHRoaXMud2lkdGggJiYgeSA+PSAwICYmIHkgPCB0aGlzLmhlaWdodCkge1xyXG4gICAgICB0aGlzLnNldEltYWdlUGl4ZWxDb2xvcih4LCB5LCBjb2xvcik7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEdpdmVuIGNvb3JkcyAoJHt4fSwgJHt5fSkgaXMgb3V0IG9mIGltYWdlIGJvdW5kc2ApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRCbGFuayh2aWV3cG9ydCkge1xyXG4gICAgY29uc3QgYmxhbmsgPSB0aGlzLnByZXBhcmVCbGFuayh2aWV3cG9ydC53aWR0aCgpLCB2aWV3cG9ydC5oZWlnaHQoKSk7XHJcblxyXG4gICAgaWYgKGJsYW5rIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICByZXR1cm4gYmxhbmsudGhlbihibGFuayA9PiB7XHJcbiAgICAgICAgYmxhbmsudmlld3BvcnQgID0gdmlld3BvcnQ7XHJcbiAgICAgICAgcmV0dXJuIGJsYW5rO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBibGFuay52aWV3cG9ydCA9IHZpZXdwb3J0O1xyXG4gICAgcmV0dXJuIGJsYW5rO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBzY2FsZShzY2FsZSkge1xyXG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLnZpZXdwb3J0LmNsb25lKCk7XHJcbiAgICB2aWV3cG9ydC5zY2FsZShzY2FsZSk7XHJcbiAgICBjb25zdCByZXNpemVkID0gdGhpcy5yZXNpemUodmlld3BvcnQud2lkdGgoKSwgdmlld3BvcnQuaGVpZ2h0KCkpO1xyXG5cclxuICAgIGlmIChyZXNpemVkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICByZXR1cm4gcmVzaXplZC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXNpemVkLnZpZXdwb3J0ID0gdmlld3BvcnQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc2l6ZWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2l6ZWQudmlld3BvcnQgPSB2aWV3cG9ydDtcclxuICAgIHJldHVybiByZXNpemVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBzeW5jKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHBpeGVsIGNvbG9yIGF0IGdpdmVuIGltYWdlIGNvb3Jkcy4gSW1hZ2UgY29vcmRzIE1VU1QgYmU6IHgg4oiIIFswOyB3aWR0aCAtIDFdLCB5IOKIiCBbMDsgaGVpZ2h0IC0gMV0uXHJcbiAgICpcclxuICAgKiBAYWJzdHJhY3RcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge251bWJlcn0geVxyXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cclxuICAgKi9cclxuICBnZXRJbWFnZVBpeGVsQ29sb3IoeCwgeSkge1xyXG4gICAgbm90SW1wbGVtZW50ZWQoJ2dldEltYWdlUGl4ZWxDb2xvcicpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBwaXhlbCBjb2xvciBhdCBnaXZlbiBpbWFnZSBjb29yZGluYXRlcy5cclxuICAgKlxyXG4gICAqIEBhYnN0cmFjdFxyXG4gICAqIEBwcm90ZWN0ZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHBhcmFtIHtDb2xvcn0gY29sb3JcclxuICAgKi9cclxuICBzZXRJbWFnZVBpeGVsQ29sb3IoeCwgeSwgY29sb3IpIHtcclxuICAgIG5vdEltcGxlbWVudGVkKCdzZXRJbWFnZVBpeGVsQ29sb3InKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXBhcmVzIGJsYW5rIGltYWdlIGZvciB7QGxpbmsgSW1hZ2VJbnRlcmZhY2UjZ2V0Qmxhbmt9IG1ldGhvZC5cclxuICAgKlxyXG4gICAqIEBhYnN0cmFjdFxyXG4gICAqIEBwcm90ZWN0ZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICogQHJldHVybnMge0ltYWdlSW50ZXJmYWNlfVxyXG4gICAqL1xyXG4gIHByZXBhcmVCbGFuayh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBub3RJbXBsZW1lbnRlZCgncHJlcGFyZUJsYW5rJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGF2ZXJhZ2UgY29sb3Igb2Ygd2hvbGUgaW1hZ2UuXHJcbiAgICpcclxuICAgKiBAYWJzdHJhY3RcclxuICAgKiBAcmV0dXJucyB7Q29sb3J9XHJcbiAgICovXHJcbiAgZ2V0QXZlcmFnZUNvbG9yKCkge1xyXG4gICAgbm90SW1wbGVtZW50ZWQoJ2dldEF2ZXJhZ2VDb2xvcicpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyByZXNpemVkIGluc3RhbmNlIG9mIHNlbGYuXHJcbiAgICpcclxuICAgKiBAYWJzdHJhY3RcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gICAqIEByZXR1cm5zIHtJbWFnZUludGVyZmFjZXxQcm9taXNlPEltYWdlSW50ZXJmYWNlPn1cclxuICAgKi9cclxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgbm90SW1wbGVtZW50ZWQoJ3Jlc2l6ZScpO1xyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihBYnN0cmFjdEltYWdlLnByb3RvdHlwZSwgdmlydHVhbFBpeGVsVHJhaXQpO1xyXG5PYmplY3QuYXNzaWduKEFic3RyYWN0SW1hZ2UucHJvdG90eXBlLCBpbnRlcnBvbGF0aW9uVHJhaXQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RJbWFnZTsiLCJpbXBvcnQgQWJzdHJhY3RJbWFnZSBmcm9tICcuL2Fic3RyYWN0LWltYWdlJztcclxuXHJcbi8qKlxyXG4gKiBJbWFnZUludGVyZmFjZSBpbXBsZW1lbnRhdGlvbiBmb3IgZGlzdG9ydGlvbiB1c2luZyBIVE1MNSBDYW52YXMgb2JqZWN0cy5cclxuICogRGlzdG9ydGlvbiByZXN1bHQgd2lsbCBjb250YWluIG5ldyBDYW52YXMgb2JqZWN0IGluIHtAbGluayBsZW5zLmltYWdlLkNhbnZhcyNjYW52YXN9IHByb3BlcnR5LlxyXG4gKlxyXG4gKiBAaW1wbGVtZW50cyB7SW1hZ2VJbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLmltYWdlXHJcbiAqIEBleHRlbmRzIGxlbnMuaW1hZ2UuQWJzdHJhY3RJbWFnZVxyXG4gKi9cclxuY2xhc3MgQ2FudmFzIGV4dGVuZHMgQWJzdHJhY3RJbWFnZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICBzdXBlcihjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5jYW52YXMgICAgID0gY2FudmFzO1xyXG4gICAgdGhpcy5pbWFnZURhdGEgID0gY2FudmFzLmdldENvbnRleHQoJzJkJykuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICB0aGlzLmRhdGEgICAgICAgPSB0aGlzLmltYWdlRGF0YS5kYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRJbWFnZVBpeGVsQ29sb3IoeCwgeSkge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gKHkgKiB0aGlzLndpZHRoICsgeCkgKiA0O1xyXG5cclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcclxuICAgICAgdGhpcy5kYXRhLFxyXG4gICAgICBvZmZzZXQsXHJcbiAgICAgIG9mZnNldCArIDRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHNldEltYWdlUGl4ZWxDb2xvcih4LCB5LCBjb2xvcikge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gKHkgKiB0aGlzLndpZHRoICsgeCkgKiA0O1xyXG5cclxuICAgIGNvbG9yLmZvckVhY2goKGNoYW5uZWwsIGkpID0+IHRoaXMuZGF0YVtvZmZzZXQgKyBpXSA9IGNoYW5uZWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBwcmVwYXJlQmxhbmsod2lkdGgsIGhlaWdodCkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKGNhbnZhcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHN5bmMoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwgMCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldEF2ZXJhZ2VDb2xvcigpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gMTtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSAxO1xyXG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgMSwgMSk7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXHJcbiAgICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKS5kYXRhXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgY29uc3QgZHN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBkc3Qud2lkdGggPSB3aWR0aDtcclxuICAgIGRzdC5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICBkc3QuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihkc3QpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzOyIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZm9yIHtAbGluayBsZW5zLmltYWdlLkNhbnZhc30gZm9yIGRpcmVjdCBkaXN0b3J0aW9uIG9mIERPTSBJbWFnZSBvYmplY3RzLlxyXG4gKiBEaXN0b3J0aW9uIHJlc3VsdCB3aWxsIGNvbnRhaW4gbmV3IERPTSBJbWFnZSBvYmplY3QgaW4ge0BsaW5rIGxlbnMuaW1hZ2UuRG9tSW1hZ2UjaW1hZ2V9IHByb3BlcnR5LlxyXG4gKlxyXG4gKiBAaW1wbGVtZW50cyB7SW1hZ2VJbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLmltYWdlXHJcbiAqIEBleHRlbmRzIGxlbnMuaW1hZ2UuQ2FudmFzXHJcbiAqL1xyXG5jbGFzcyBEb21JbWFnZSBleHRlbmRzIENhbnZhcyB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkltYWdlfEhUTUxJbWFnZUVsZW1lbnR9IGltYWdlIERPTSBJbWFnZSBvYmplY3RcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihpbWFnZSkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSBpbWFnZS53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgc3VwZXIoY2FudmFzKTtcclxuXHJcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHByZXBhcmVCbGFuayh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IobmV3IEltYWdlKHdpZHRoLCBoZWlnaHQpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc3luYygpIHtcclxuICAgIHN1cGVyLnN5bmMoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZSh0aGlzKTtcclxuXHJcbiAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5jYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiB0aGlzLnN5bmMoKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2Uod2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc2l6ZWQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihpbWFnZSk7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc2l6ZWQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGltYWdlLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvbUltYWdlOyIsImltcG9ydCBBYnN0cmFjdEltYWdlIGZyb20gJy4vYWJzdHJhY3QtaW1hZ2UnO1xyXG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzJztcclxuaW1wb3J0IERvbUltYWdlIGZyb20gJy4vZG9tLWltYWdlJztcclxuXHJcbi8qKlxyXG4gKiBJbWFnZSBuYW1lc3BhY2VcclxuICpcclxuICogQG5hbWVzcGFjZSBsZW5zLmltYWdlXHJcbiAqL1xyXG5jb25zdCBpbWFnZSA9IHtcclxuICBBYnN0cmFjdEltYWdlLFxyXG4gIENhbnZhcyxcclxuICBEb21JbWFnZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW1hZ2U7IiwiLyoqXHJcbiAqIENvbG9yIGludGVycG9sYXRpb24gbWV0aG9kcy5cclxuICpcclxuICogQHJlYWRvbmx5XHJcbiAqIEBlbnVtIHtudW1iZXJ9XHJcbiAqIEBtZW1iZXJvZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uID0ge1xyXG4gIC8qKlxyXG4gICAqIEF2ZXJhZ2UgNCBuZWFyZXN0IG5laWdoYm91cnMuXHJcbiAgICovXHJcbiAgQVZFUkFHRTogMSxcclxuXHJcbiAgLyoqXHJcbiAgICogQXZlcmFnZSA5IG5lYXJlc3QgbmVpZ2hib3Vycy5cclxuICAgKi9cclxuICBBVkVSQUdFXzk6IDIsXHJcblxyXG4gIC8qKlxyXG4gICAqIEF2ZXJhZ2UgMTYgbmVhcmVzdCBuZWlnaGJvdXJzLlxyXG4gICAqL1xyXG4gIEFWRVJBR0VfMTY6IDMsXHJcblxyXG4gIC8qKlxyXG4gICAqIEp1c3QgcmV0dXJuIGJhY2tncm91bmQgY29sb3IuXHJcbiAgICovXHJcbiAgQkFDS0dST1VORDogNCxcclxuXHJcbiAgLyoqXHJcbiAgICogSW50ZWdlciAoZmxvb3IpIGludGVycG9sYXRpb24uXHJcbiAgICovXHJcbiAgSU5URUdFUjogOCAvLyBUT0RPOiBpbXBsZW1lbnQgYW5kIGFkZCBvdGhlciBtZXRob2RzXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcnBvbGF0aW9uOyIsImltcG9ydCBkaXN0b3J0ZXIgZnJvbSAnLi9kaXN0b3J0ZXIvZGlzdG9ydGVyJztcclxuaW1wb3J0IGRpc3RvcnRpb24gZnJvbSAnLi9kaXN0b3J0aW9uL2Rpc3RvcnRpb24nO1xyXG5pbXBvcnQgZXhjZXB0aW9uIGZyb20gJy4vZXhjZXB0aW9uL2V4Y2VwdGlvbic7XHJcbmltcG9ydCBmaWx0ZXIgZnJvbSAnLi9maWx0ZXIvZmlsdGVyLW5hbWVzcGFjZSc7XHJcbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltYWdlL2ltYWdlJztcclxuaW1wb3J0IG1peGlucyBmcm9tICcuL21peGlucy9taXhpbnMnO1xyXG5pbXBvcnQgcmVzYW1wbGVyIGZyb20gJy4vcmVzYW1wbGVyL3Jlc2FtcGxlcic7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbC91dGlsLW5hbWVzcGFjZSc7XHJcbmltcG9ydCB7RVBTSUxPTiwgTUFYSU1VTV9WQUxVRSwgTV8yUEksIE1fUEkyfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCBkaXN0b3J0IGZyb20gJy4vZGlzdG9ydCc7XHJcbmltcG9ydCBkaXN0b3J0cyBmcm9tICcuL2Rpc3RvcnRzJztcclxuaW1wb3J0IHtyZWdpc3RlckRpc3RvcnRpb25SZXNvbHZlciwgdW5yZWdpc3RlckRpc3RvcnRpb25SZXNvbHZlcn0gZnJvbSAnLi9kaXN0b3J0cyc7XHJcbmltcG9ydCBmaWx0ZXJQcmVzZXRzIGZyb20gJy4vZmlsdGVyLXByZXNldHMnO1xyXG5pbXBvcnQgaW50ZXJwb2xhdGlvbiBmcm9tICcuL2ludGVycG9sYXRpb24nO1xyXG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi92aWV3cG9ydCc7XHJcbmltcG9ydCB2cHggZnJvbSAnLi92cHgnO1xyXG5cclxuLyoqXHJcbiAqIExpYnJhcnkgdmVyc2lvblxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKi9cclxuY29uc3QgVkVSU0lPTiA9IHByb2Nlc3MuZW52LlBBQ0tBR0VfVkVSU0lPTjtcclxuXHJcbi8qKlxyXG4gKiBMZW5zIGxpYnJhcnkgbmFtZXNwYWNlXHJcbiAqXHJcbiAqIEBuYW1lc3BhY2UgbGVuc1xyXG4gKi9cclxuY29uc3QgbGVucyA9IHtcclxuICAvLyBDb25zdGFudHNcclxuICBWRVJTSU9OLFxyXG4gIEVQU0lMT04sXHJcbiAgTUFYSU1VTV9WQUxVRSxcclxuICBNXzJQSSxcclxuICBNX1BJMixcclxuXHJcbiAgLy8gRW51bXNcclxuICBkaXN0b3J0cyxcclxuICBmaWx0ZXJQcmVzZXRzLFxyXG4gIGludGVycG9sYXRpb24sXHJcbiAgdnB4LFxyXG5cclxuICAvLyBUeXBlc1xyXG4gIFZpZXdwb3J0LFxyXG5cclxuICAvLyBOYW1lc3BhY2VzXHJcbiAgZGlzdG9ydGVyLFxyXG4gIGRpc3RvcnRpb24sXHJcbiAgZXhjZXB0aW9uLFxyXG4gIGZpbHRlcixcclxuICBpbWFnZSxcclxuICBtaXhpbnMsXHJcbiAgcmVzYW1wbGVyLFxyXG4gIHV0aWwsXHJcblxyXG4gIC8vIEZ1bmN0aW9uc1xyXG4gIGRpc3RvcnQsXHJcbiAgcmVnaXN0ZXJEaXN0b3J0aW9uUmVzb2x2ZXIsXHJcbiAgdW5yZWdpc3RlckRpc3RvcnRpb25SZXNvbHZlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGVuczsiLCJpbXBvcnQgVmlld3BvcnQgZnJvbSBcIi4uL3ZpZXdwb3J0XCI7XHJcblxyXG4vKipcclxuICogTWl4aW4gZm9yIGNsYXNzZXMgaW1wbGVtZW50aW5nIHtAbGluayBEaXN0b3J0aW9uSW50ZXJmYWNlfSB0aGF0IGNhbiBjYWxjdWxhdGUgYmVzdCBmaXQgdmlld3BvcnQgdXNpbmcgZm9yd2FyZFxyXG4gKiBwaXhlbCBtYXBwaW5nIG9mIGltYWdlIGNvcm5lcnMuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLm1peGluc1xyXG4gKiBAbWl4aW5cclxuICovXHJcbmNvbnN0IGNyZWF0ZXNCZXN0Rml0Vmlld3BvcnRGcm9tQXBleGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYmVzdCBmaXQgdmlld3BvcnQgZm9yIGRpc3RvcnRpb24sIHVzaW5nIGZvcndhcmQgbWFwcGluZyBmb3IgaW1hZ2UgYXBleGVzIChjb3JuZXJzKS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bGVucy5WaWV3cG9ydH0gdmlld3BvcnRcclxuICAgKiBAcmV0dXJucyB7bGVucy5WaWV3cG9ydH1cclxuICAgKi9cclxuICBnZXRCZXN0Rml0Vmlld3BvcnQodmlld3BvcnQpIHtcclxuICAgIGNvbnN0IHUxID0gdmlld3BvcnQueDEsXHJcbiAgICAgIHYxID0gdmlld3BvcnQueTEsXHJcbiAgICAgIHUyID0gdmlld3BvcnQueDIgKyAxLFxyXG4gICAgICB2MiA9IHZpZXdwb3J0LnkyICsgMSxcclxuICAgICAgW3gsIHldID0gdGhpcy5mb3J3YXJkTWFwKHUxLCB2MSksXHJcbiAgICAgIGJlc3RGaXQgPSBuZXcgVmlld3BvcnQoeCwgeSwgeCwgeSk7XHJcblxyXG4gICAgW1t1MiwgdjFdLCBbdTIsIHYyXSwgW3UxLCB2Ml1dLmZvckVhY2goYXBleCA9PiBiZXN0Rml0LmV4cGFuZCguLi50aGlzLmZvcndhcmRNYXAoLi4uYXBleCkpKTtcclxuXHJcbiAgICBiZXN0Rml0LmZpeEJvdW5kcygpO1xyXG5cclxuICAgIHJldHVybiBiZXN0Rml0O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZXNCZXN0Rml0Vmlld3BvcnRGcm9tQXBleGVzOyIsImltcG9ydCBtZXRob2RzIGZyb20gJy4uL2ludGVycG9sYXRpb24nO1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgY29sb3IgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbmFsaXR5IGZvciBjbGFzc2VzIHRoYXQgaW1wbGVtZW50IHtAbGluayBJbWFnZUludGVyZmFjZX1cclxuICpcclxuICogQG1peGluXHJcbiAqIEBtZW1iZXJPZiBsZW5zLm1peGluc1xyXG4gKi9cclxuY29uc3QgaW50ZXJwb2xhdGlvblRyYWl0ID0ge1xyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgaW50ZXJwb2xhdGVkIHBpeGVsIGNvbG9yLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge251bWJlcn0geVxyXG4gICAqIEBwYXJhbSB7bGVucy5pbnRlcnBvbGF0aW9ufSBbaW50ZXJwb2xhdGlvbk1ldGhvZD10aGlzLmludGVycG9sYXRpb25NZXRob2RdXHJcbiAgICogQHJldHVybnMge0NvbG9yfVxyXG4gICAqL1xyXG4gIGdldEludGVycG9sYXRlZFBpeGVsQ29sb3IoeCwgeSwgaW50ZXJwb2xhdGlvbk1ldGhvZCA9IHRoaXMuaW50ZXJwb2xhdGlvbk1ldGhvZCkge1xyXG4gICAgc3dpdGNoIChpbnRlcnBvbGF0aW9uTWV0aG9kKSB7XHJcbiAgICAgIGNhc2UgbWV0aG9kcy5BVkVSQUdFOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVycG9sYXRlQXZlcmFnZSh4LCB5LCAyKTtcclxuICAgICAgY2FzZSBtZXRob2RzLkFWRVJBR0VfOTpcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0ZUF2ZXJhZ2UoeCwgeSwgMyk7XHJcbiAgICAgIGNhc2UgbWV0aG9kcy5BVkVSQUdFXzE2OlxyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVycG9sYXRlQXZlcmFnZSh4LCB5LCA0KTtcclxuICAgICAgY2FzZSBtZXRob2RzLkJBQ0tHUk9VTkQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yLnNsaWNlKCk7XHJcbiAgICAgIGNhc2UgbWV0aG9kcy5JTlRFR0VSOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBpeGVsQ29sb3IoTWF0aC5mbG9vcih4KSwgTWF0aC5mbG9vcih5KSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBpbnRlcnBvbGF0ZWQgY29sb3IgYnkgYXZlcmFnZSBvZiBuZWlnaGJvcnMuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcclxuICAgKiBAcmV0dXJucyB7Q29sb3J9XHJcbiAgICovXHJcbiAgaW50ZXJwb2xhdGVBdmVyYWdlKHgsIHksIGNvdW50ID0gMikge1xyXG4gICAgbGV0IHN0YXJ0WCwgc3RhcnRZO1xyXG5cclxuICAgIHN3aXRjaCAoY291bnQpIHtcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHN0YXJ0WCA9IE1hdGguZmxvb3IoeCk7XHJcbiAgICAgICAgc3RhcnRZID0gTWF0aC5mbG9vcih5KTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICBzdGFydFggPSBNYXRoLmZsb29yKHggKyAwLjUpIC0gMTtcclxuICAgICAgICBzdGFydFkgPSBNYXRoLmZsb29yKHkgKyAwLjUpIC0gMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA0OlxyXG4gICAgICAgIHN0YXJ0WCA9IE1hdGguZmxvb3IoeCkgLSAxO1xyXG4gICAgICAgIHN0YXJ0WSA9IE1hdGguZmxvb3IoeSkgLSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJhbSAnY291bnQnIG11c3QgYmUgaW50ZWdlciBiZXR3ZWVuIDIgYW5kIDQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVuZFggPSBzdGFydFggKyBjb3VudDtcclxuICAgIGNvbnN0IGVuZFkgPSBzdGFydFkgKyBjb3VudDtcclxuICAgIGxldCBjb2xvciA9IFswLCAwLCAwLCAwXTtcclxuXHJcbiAgICBmb3IgKGxldCBZID0gc3RhcnRZOyBZIDwgZW5kWTsgWSsrKSB7XHJcbiAgICAgIGZvciAobGV0IFggPSBzdGFydFg7IFggPCBlbmRYOyBYKyspIHtcclxuICAgICAgICB0aGlzLmdldFBpeGVsQ29sb3IoeCwgeSkuZm9yRWFjaCgoY2hhbm5lbCwgaSkgPT4gY29sb3JbaV0gKz0gY2hhbm5lbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnYW1tYSA9IDEgLyAoY291bnQgKiBjb3VudCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbG9yLm1hcChjaGFubmVsID0+IE1hdGgucm91bmQoY2hhbm5lbCAqIGdhbW1hKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJwb2xhdGlvblRyYWl0OyIsImltcG9ydCBjcmVhdGVzQmVzdEZpdFZpZXdwb3J0RnJvbUFwZXhlcyBmcm9tICcuL2NyZWF0ZXMtYmVzdC1maXQtdmlld3BvcnQtZnJvbS1hcGV4ZXMnO1xyXG5pbXBvcnQgaW50ZXJwb2xhdGlvblRyYWl0IGZyb20gJy4vaW50ZXJwb2xhdGlvbi10cmFpdCc7XHJcbmltcG9ydCB2aXJ0dWFsUGl4ZWxUcmFpdCBmcm9tICcuL3ZpcnR1YWwtcGl4ZWwtdHJhaXQnO1xyXG5cclxuLyoqXHJcbiAqIE1peGlucyBuYW1lc3BhY2VcclxuICpcclxuICogQG5hbWVzcGFjZSBsZW5zLm1peGluc1xyXG4gKi9cclxuY29uc3QgbWl4aW5zID0ge1xyXG4gIGNyZWF0ZXNCZXN0Rml0Vmlld3BvcnRGcm9tQXBleGVzLFxyXG4gIGludGVycG9sYXRpb25UcmFpdCxcclxuICB2aXJ0dWFsUGl4ZWxUcmFpdFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWl4aW5zOyIsImltcG9ydCB2cHhNZXRob2RzIGZyb20gJy4uL3ZweCc7XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICogQHJldHVybnMge1BvaW50fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RWRnZUNvb3Jkcyh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIE1hdGgubWF4KDAsIE1hdGgubWluKHdpZHRoIC0gMSwgeCkpLFxyXG4gICAgTWF0aC5tYXgoMCwgTWF0aC5taW4oaGVpZ2h0IC0gMSwgeSkpXHJcbiAgXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxyXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAqIEByZXR1cm5zIHtQb2ludH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFRpbGVDb29yZHMoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gIGxldCByeCA9IHggJSB3aWR0aCxcclxuICAgIHJ5ID0geSAlIGhlaWdodDtcclxuXHJcbiAgcmV0dXJuIFtcclxuICAgIHJ4IDwgMCA/IHdpZHRoICsgcnggOiByeCxcclxuICAgIHJ5IDwgMCA/IGhlaWdodCArIHJ5IDogcnlcclxuICBdO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcyB2aXJ0dWFsIHBpeGVsIGJlaGF2aW9yIHRvIGNsYXNzZXMgdGhhdCBpbXBsZW1lbnQgSW1hZ2VJbnRlcmZhY2UuXHJcbiAqXHJcbiAqIEBtaXhpblxyXG4gKiBAbWVtYmVyT2YgbGVucy5taXhpbnNcclxuICogQHR1dG9yaWFsIDAyLjA1LnZpcnR1YWwtcGl4ZWxzLWFuZC1tYXR0ZVxyXG4gKi9cclxuY29uc3QgdmlydHVhbFBpeGVsVHJhaXQgPSB7XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB2aXJ0dWFsIHBpeGVsIGNvbG9yLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggSW1hZ2UgWC1jb29yZGluYXRlIE9VVFNJREUgb2YgaW1hZ2UgYm91bmRzLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IEltYWdlIFktY29vcmRpbmF0ZSBPVVRTSURFIG9mIGltYWdlIGJvdW5kcy5cclxuICAgKiBAcGFyYW0ge2xlbnMudnB4fSBtZXRob2QgVmlydHVhbCBwaXhlbCBtZXRob2QuXHJcbiAgICogQHJldHVybnMge0NvbG9yfVxyXG4gICAqL1xyXG4gIGdldFZpcnR1YWxQaXhlbENvbG9yKHgsIHksIG1ldGhvZCkge1xyXG4gICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgY2FzZSB2cHhNZXRob2RzLkJBQ0tHUk9VTkQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yLnNsaWNlKCk7XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuRURHRTpcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoLi4uZ2V0RWRnZUNvb3Jkcyh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpO1xyXG5cclxuICAgICAgY2FzZSB2cHhNZXRob2RzLk1JUlJPUjpcclxuICAgICAgICBsZXQgW3R4LCB0eV0gPSBnZXRUaWxlQ29vcmRzKHgsIHksIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG5cclxuICAgICAgICBpZiAodHggPiB0aGlzLndpZHRoIC0gMSkge1xyXG4gICAgICAgICAgdHggPSB0aGlzLndpZHRoIC0gKHR4IC0gdGhpcy53aWR0aCkgLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5ID4gdGhpcy5oZWlnaHQgLSAxKSB7XHJcbiAgICAgICAgICB0eSA9IHRoaXMuaGVpZ2h0IC0gKHR5IC0gdGhpcy5oZWlnaHQpIC0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEltYWdlUGl4ZWxDb2xvcih0eCwgdHkpO1xyXG5cclxuICAgICAgY2FzZSB2cHhNZXRob2RzLlRJTEU6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VQaXhlbENvbG9yKC4uLmdldFRpbGVDb29yZHMoeCwgeSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5UUkFOU1BBUkVOVDpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gWzAsIDAsIDAsIDBdO1xyXG5cclxuICAgICAgY2FzZSB2cHhNZXRob2RzLkJMQUNLOlxyXG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgdGhpcy5xdWFudHVtUmFuZ2VdO1xyXG5cclxuICAgICAgY2FzZSB2cHhNZXRob2RzLldISVRFOlxyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCh0aGlzLnF1YW50dW1SYW5nZSk7XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuR1JBWTpcclxuICAgICAgICByZXR1cm4gbmV3IEFycmF5KDMpLmZpbGwoTWF0aC5yb3VuZCh0aGlzLnF1YW50dW1SYW5nZSAvIDIpKS5jb25jYXQoW3RoaXMucXVhbnR1bVJhbmdlXSk7XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuSE9SSVpPTlRBTF9USUxFOlxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuSE9SSVpPTlRBTF9USUxFX0VER0U6XHJcbiAgICAgICAgaWYgKHkgPCAwIHx8IHkgPj0gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgIHJldHVybiBtZXRob2QgPT09IHZweE1ldGhvZHMuSE9SSVpPTlRBTF9USUxFID8gdGhpcy5iYWNrZ3JvdW5kQ29sb3Iuc2xpY2UoKVxyXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW1hZ2VQaXhlbENvbG9yKC4uLmdldEVkZ2VDb29yZHMoeCwgeSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEltYWdlUGl4ZWxDb2xvciguLi5nZXRUaWxlQ29vcmRzKHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSk7XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuVkVSVElDQUxfVElMRTpcclxuICAgICAgY2FzZSB2cHhNZXRob2RzLlZFUlRJQ0FMX1RJTEVfRURHRTpcclxuICAgICAgICBpZiAoeCA8IDAgfHwgeCA+PSB0aGlzLndpZHRoKSB7XHJcbiAgICAgICAgICByZXR1cm4gbWV0aG9kID09PSB2cHhNZXRob2RzLlZFUlRJQ0FMX1RJTEUgPyB0aGlzLmJhY2tncm91bmRDb2xvci5zbGljZSgpXHJcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoLi4uZ2V0RWRnZUNvb3Jkcyh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VQaXhlbENvbG9yKC4uLmdldFRpbGVDb29yZHMoeCwgeSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5SQU5ET006XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VQaXhlbENvbG9yKFxyXG4gICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCksXHJcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZpcnR1YWxQaXhlbFRyYWl0OyIsImltcG9ydCB2cHggZnJvbSAnLi4vdnB4JztcclxuaW1wb3J0IGludGVycG9sYXRpb24gZnJvbSAnLi4vaW50ZXJwb2xhdGlvbic7XHJcbmltcG9ydCB7TUFYSU1VTV9WQUxVRX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge2JsZW5kQ29sb3JzfSBmcm9tIFwiLi4vdXRpbC91dGlsXCI7XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHR5cGUge251bWJlcn1cclxuICovXHJcbmNvbnN0IFdFSUdIVF9MT09LVVBfVEFCTEVfV0lEVEggPSAxMDI0O1xyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7RmlsdGVySW50ZXJmYWNlfSBmaWx0ZXJcclxuICogQHBhcmFtIHtudW1iZXJ9IHN1cHBvcnRcclxuICogQHJldHVybnMge251bWJlcltdfVxyXG4gKi9cclxuZnVuY3Rpb24gYnVpbGRXZWlnaHRMb29rdXBUYWJsZShmaWx0ZXIsIHN1cHBvcnQpIHtcclxuICBjb25zdCB0YWJsZSA9IFtdO1xyXG5cclxuICBjb25zdCByU2NhbGUgPSBzdXBwb3J0ICogTWF0aC5zcXJ0KDEgLyBXRUlHSFRfTE9PS1VQX1RBQkxFX1dJRFRIKTtcclxuXHJcbiAgZm9yIChsZXQgUSA9IDA7IFEgPCBXRUlHSFRfTE9PS1VQX1RBQkxFX1dJRFRIOyBRKyspIHtcclxuICAgIHRhYmxlW1FdID0gZmlsdGVyLmdldFdlaWdodChNYXRoLnNxcnQoUSkgKiByU2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRhYmxlO1xyXG59XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEBwYXJhbSBxdWFudHVtUmFuZ2VcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIGNsYW1wVG9RdWFudHVtKHZhbHVlLCBxdWFudHVtUmFuZ2UpIHtcclxuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4ocXVhbnR1bVJhbmdlLCB2YWx1ZSkpO1xyXG59XHJcblxyXG4vKipcclxuICogPHA+Q2xhbXBFbGxpcHNlQXhlcygpIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBpbnB1dCB2ZWN0b3JzIGludG8gYSBtYWpvciBhbmRcclxuICogbWlub3IgYXhpcyB1bml0IHZlY3RvcnMsIGFuZCB0aGVpciBtYWduaXR1ZGUuICBUaGlzIGFsbG93cyB1cyB0b1xyXG4gKiBlbnN1cmUgdGhhdCB0aGUgZWxsaXBzZSBnZW5lcmF0ZWQgaXMgbmV2ZXIgc21hbGxlciB0aGFuIHRoZSB1bml0XHJcbiAqIGNpcmNsZSBhbmQgdGh1cyBuZXZlciB0b28gc21hbGwgZm9yIHVzZSBpbiBFV0EgcmVzYW1wbGluZy48L3A+XHJcbiAqXHJcbiAqIDxwPlRoaXMgcHVyZWx5IG1hdGhlbWF0aWNhbCAnbWFnaWMnIHdhcyBwcm92aWRlZCBieSBQcm9mZXNzb3IgTmljb2xhc1xyXG4gKiBSb2JpZG91eCBhbmQgaGlzIE1hc3RlcnMgc3R1ZGVudCBDaGFudGFsIFJhY2V0dGUuPC9wPlxyXG4gKlxyXG4gKiA8cD5SZWZlcmVuY2U6IFwiV2UgUmVjb21tZW5kIFNpbmd1bGFyIFZhbHVlIERlY29tcG9zaXRpb25cIiwgRGF2aWQgQXVzdGluXHJcbiAqICAge0BsaW5rIGh0dHA6Ly93d3cuYW1zLm9yZy9zYW1wbGluZ3MvZmVhdHVyZS1jb2x1bW4vZmNhcmMtc3ZkfTwvcD5cclxuICpcclxuICogPHA+QnkgZ2VuZXJhdGluZyBtYWpvciBhbmQgbWlub3IgYXhpcyB2ZWN0b3JzLCB3ZSBjYW4gYWN0dWFsbHkgdXNlIHRoZVxyXG4gKiBlbGxpcHNlIGluIGl0cyBcImNhbm9uaWNhbCBmb3JtXCIsIGJ5IHJlbWFwcGluZyB0aGUgZHgsZHkgb2YgdGhlXHJcbiAqIHNhbXBsZWQgcG9pbnQgaW50byBkaXN0YW5jZXMgYWxvbmcgdGhlIG1ham9yIGFuZCBtaW5vciBheGlzIHVuaXRcclxuICogdmVjdG9ycy48L3A+XHJcbiAqXHJcbiAqIDxwPlJlZmVyZW5jZToge0BsaW5rIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRWxsaXBzZSNDYW5vbmljYWxfZm9ybX08L3A+XHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXhcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1eVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHZ4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdnlcclxuICogQHJldHVybnMge251bWJlcltdfVxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9yZXNhbXBsZV84Y19zb3VyY2UuaHRtbCNsMDA3MDkgQ2xhbXBVcEF4ZXMoKSBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAqIEB0dXRvcmlhbCAwMi4wMy5waXhlbC1jb2xvci1sb29rdXBcclxuICovXHJcbmZ1bmN0aW9uIGNsYW1wRWxsaXBzZUF4ZXMoZHV4LCBkdXksIGR2eCwgZHZ5KSB7XHJcbiAgLypcclxuICAgKiBDbGFtcFVwQXhlcyB0YWtlcyBhbiBpbnB1dCAyeDIgbWF0cml4XHJcbiAgICpcclxuICAgKiBbIGEgYiBdID0gWyBkdXggZHV5IF1cclxuICAgKiBbIGMgZCBdID0gWyBkdnggZHZ5IF1cclxuICAgKlxyXG4gICAqIGFuZCBjb21wdXRlcyBmcm9tIGl0IHRoZSBtYWpvciBhbmQgbWlub3IgYXhpcyB2ZWN0b3JzIFttYWpvcl94LFxyXG4gICAqIG1ham9yX3ldIGFuZCBbbWlub3JfeCxtaW5vcl95XSBvZiB0aGUgc21hbGxlc3QgZWxsaXBzZSBjb250YWluaW5nXHJcbiAgICogYm90aCB0aGUgdW5pdCBkaXNrIGFuZCB0aGUgZWxsaXBzZSB3aGljaCBpcyB0aGUgaW1hZ2Ugb2YgdGhlIHVuaXRcclxuICAgKiBkaXNrIGJ5IHRoZSBsaW5lYXIgdHJhbnNmb3JtYXRpb25cclxuICAgKlxyXG4gICAqIFsgZHV4IGR1eSBdIFtTXSA9IFtzXVxyXG4gICAqIFsgZHZ4IGR2eSBdIFtUXSA9IFt0XVxyXG4gICAqXHJcbiAgICogKFRoZSB2ZWN0b3IgW1MsVF0gaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIHBvc2l0aW9uIGluIG91dHB1dFxyXG4gICAqIHNwYWNlIGFuZCBbWCxZXTsgdGhlIHZlY3RvciBbcyx0XSBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGFcclxuICAgKiBwb3NpdGlvbiBpbiBpbnB1dCBzcGFjZSBhbmQgW3gseV0uKVxyXG4gICAqL1xyXG4gIC8qXHJcbiAgICogT3V0cHV0OlxyXG4gICAqXHJcbiAgICogbWFqb3JfbWFnIGlzIHRoZSBoYWxmLWxlbmd0aCBvZiB0aGUgbWFqb3IgYXhpcyBvZiB0aGUgXCJuZXdcIlxyXG4gICAqIGVsbGlwc2UuXHJcbiAgICpcclxuICAgKiBtaW5vcl9tYWcgaXMgdGhlIGhhbGYtbGVuZ3RoIG9mIHRoZSBtaW5vciBheGlzIG9mIHRoZSBcIm5ld1wiXHJcbiAgICogZWxsaXBzZS5cclxuICAgKlxyXG4gICAqIG1ham9yX3VuaXRfeCBpcyB0aGUgeC1jb29yZGluYXRlIG9mIHRoZSBtYWpvciBheGlzIGRpcmVjdGlvbiB2ZWN0b3JcclxuICAgKiBvZiBib3RoIHRoZSBcIm9sZFwiIGFuZCBcIm5ld1wiIGVsbGlwc2VzLlxyXG4gICAqXHJcbiAgICogbWFqb3JfdW5pdF95IGlzIHRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIG1ham9yIGF4aXMgZGlyZWN0aW9uIHZlY3Rvci5cclxuICAgKlxyXG4gICAqIG1pbm9yX3VuaXRfeCBpcyB0aGUgeC1jb29yZGluYXRlIG9mIHRoZSBtaW5vciBheGlzIGRpcmVjdGlvbiB2ZWN0b3IuXHJcbiAgICpcclxuICAgKiBtaW5vcl91bml0X3kgaXMgdGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgbWlub3IgYXhpcyBkaXJlY3Rpb24gdmVjdG9yLlxyXG4gICAqXHJcbiAgICogVW5pdCB2ZWN0b3JzIGFyZSB1c2VmdWwgZm9yIGNvbXB1dGluZyBwcm9qZWN0aW9ucywgaW4gcGFydGljdWxhcixcclxuICAgKiB0byBjb21wdXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGEgcG9pbnQgaW4gb3V0cHV0IHNwYWNlIGFuZCB0aGVcclxuICAgKiBjZW50ZXIgb2YgYSB1bml0IGRpc2sgaW4gb3V0cHV0IHNwYWNlLCB1c2luZyB0aGUgcG9zaXRpb24gb2YgdGhlXHJcbiAgICogY29ycmVzcG9uZGluZyBwb2ludCBbcyx0XSBpbiBpbnB1dCBzcGFjZS4gRm9sbG93aW5nIHRoZSBjbGFtcGluZyxcclxuICAgKiB0aGUgc3F1YXJlIG9mIHRoaXMgZGlzdGFuY2UgaXNcclxuICAgKlxyXG4gICAqICggKCBzICogbWFqb3JfdW5pdF94ICsgdCAqIG1ham9yX3VuaXRfeSApIC8gbWFqb3JfbWFnICleMlxyXG4gICAqICtcclxuICAgKiAoICggcyAqIG1pbm9yX3VuaXRfeCArIHQgKiBtaW5vcl91bml0X3kgKSAvIG1pbm9yX21hZyApXjJcclxuICAgKlxyXG4gICAqIElmIHN1Y2ggZGlzdGFuY2VzIHdpbGwgYmUgY29tcHV0ZWQgZm9yIG1hbnkgW3MsdF0ncywgaXQgbWFrZXNcclxuICAgKiBzZW5zZSB0byBhY3R1YWxseSBjb21wdXRlIHRoZSByZWNpcHJvY2FsIG9mIG1ham9yX21hZyBhbmRcclxuICAgKiBtaW5vcl9tYWcgYW5kIG11bHRpcGx5IHRoZW0gYnkgdGhlIGFib3ZlIHVuaXQgbGVuZ3Rocy5cclxuICAgKlxyXG4gICAqIE5vdywgaWYgeW91IHdhbnQgdG8gbW9kaWZ5IHRoZSBpbnB1dCBwYWlyIG9mIHRhbmdlbnQgdmVjdG9ycyBzb1xyXG4gICAqIHRoYXQgaXQgZGVmaW5lcyB0aGUgbW9kaWZpZWQgZWxsaXBzZSwgYWxsIHlvdSBoYXZlIHRvIGRvIGlzIHNldFxyXG4gICAqXHJcbiAgICogbmV3ZHV4ID0gbWFqb3JfbWFnICogbWFqb3JfdW5pdF94XHJcbiAgICogbmV3ZHZ4ID0gbWFqb3JfbWFnICogbWFqb3JfdW5pdF95XHJcbiAgICogbmV3ZHV5ID0gbWlub3JfbWFnICogbWlub3JfdW5pdF94ID0gbWlub3JfbWFnICogLW1ham9yX3VuaXRfeVxyXG4gICAqIG5ld2R2eSA9IG1pbm9yX21hZyAqIG1pbm9yX3VuaXRfeSA9IG1pbm9yX21hZyAqICBtYWpvcl91bml0X3hcclxuICAgKlxyXG4gICAqIGFuZCB1c2UgdGhlc2UgdGFuZ2VudCB2ZWN0b3JzIGFzIGlmIHRoZXkgd2VyZSB0aGUgb3JpZ2luYWwgb25lcy5cclxuICAgKiBVc3VhbGx5LCB0aGlzIGlzIGEgZHJhc3RpYyBjaGFuZ2UgaW4gdGhlIHRhbmdlbnQgdmVjdG9ycyBldmVuIGlmXHJcbiAgICogdGhlIHNpbmd1bGFyIHZhbHVlcyBhcmUgbm90IGNsYW1wZWQ7IGZvciBleGFtcGxlLCB0aGUgbWlub3IgYXhpc1xyXG4gICAqIHZlY3RvciBhbHdheXMgcG9pbnRzIGluIGEgZGlyZWN0aW9uIHdoaWNoIGlzIDkwIGRlZ3JlZXNcclxuICAgKiBjb3VudGVyY2xvY2t3aXNlIGZyb20gdGhlIGRpcmVjdGlvbiBvZiB0aGUgbWFqb3IgYXhpcyB2ZWN0b3IuXHJcbiAgICovXHJcbiAgLypcclxuICAgKiBEaXNjdXNzaW9uOlxyXG4gICAqXHJcbiAgICogR09BTDogRml4IHRoaW5ncyBzbyB0aGF0IHRoZSBwdWxsYmFjaywgaW4gaW5wdXQgc3BhY2UsIG9mIGEgZGlza1xyXG4gICAqIG9mIHJhZGl1cyByIGluIG91dHB1dCBzcGFjZSBpcyBhbiBlbGxpcHNlIHdoaWNoIGNvbnRhaW5zLCBhdFxyXG4gICAqIGxlYXN0LCBhIGRpc2Mgb2YgcmFkaXVzIHIuIChNYWtlIHRoaXMgaG9sZCBmb3IgYW55IHI+MC4pXHJcbiAgICpcclxuICAgKiBFU1NFTkNFIE9GIFRIRSBNRVRIT0Q6IENvbXB1dGUgdGhlIHByb2R1Y3Qgb2YgdGhlIGZpcnN0IHR3b1xyXG4gICAqIGZhY3RvcnMgb2YgYW4gU1ZEIG9mIHRoZSBsaW5lYXIgdHJhbnNmb3JtYXRpb24gZGVmaW5pbmcgdGhlXHJcbiAgICogZWxsaXBzZSBhbmQgbWFrZSBzdXJlIHRoYXQgYm90aCBpdHMgY29sdW1ucyBoYXZlIG5vcm0gYXQgbGVhc3QgMS5cclxuICAgKiBCZWNhdXNlIHJvdGF0aW9ucyBhbmQgcmVmbGV4aW9ucyBtYXAgZGlza3MgdG8gdGhlbXNlbHZlcywgaXQgaXNcclxuICAgKiBub3QgbmVjZXNzYXJ5IHRvIGNvbXB1dGUgdGhlIHRoaXJkIChyaWdodG1vc3QpIGZhY3RvciBvZiB0aGUgU1ZELlxyXG4gICAqXHJcbiAgICogREVUQUlMUzogRmluZCB0aGUgc2luZ3VsYXIgdmFsdWVzIGFuZCAodW5pdCkgbGVmdCBzaW5ndWxhclxyXG4gICAqIHZlY3RvcnMgb2YgSmludiwgY2xhbXBsaW5nIHVwIHRoZSBzaW5ndWxhciB2YWx1ZXMgdG8gMSwgYW5kXHJcbiAgICogbXVsdGlwbHkgdGhlIHVuaXQgbGVmdCBzaW5ndWxhciB2ZWN0b3JzIGJ5IHRoZSBuZXcgc2luZ3VsYXJcclxuICAgKiB2YWx1ZXMgaW4gb3JkZXIgdG8gZ2V0IHRoZSBtaW5vciBhbmQgbWFqb3IgZWxsaXBzZSBheGlzIHZlY3RvcnMuXHJcbiAgICpcclxuICAgKiBJbWFnZSByZXNhbXBsaW5nIGNvbnRleHQ6XHJcbiAgICpcclxuICAgKiBUaGUgSmFjb2JpYW4gbWF0cml4IG9mIHRoZSB0cmFuc2Zvcm1hdGlvbiBhdCB0aGUgb3V0cHV0IHBvaW50XHJcbiAgICogdW5kZXIgY29uc2lkZXJhdGlvbiBpcyBkZWZpbmVkIGFzIGZvbGxvd3M6XHJcbiAgICpcclxuICAgKiBDb25zaWRlciB0aGUgdHJhbnNmb3JtYXRpb24gKHgseSkgLT4gKFgsWSkgZnJvbSBpbnB1dCBsb2NhdGlvbnNcclxuICAgKiB0byBvdXRwdXQgbG9jYXRpb25zLiAoQW50aG9ueSBUaHlzc2VuLCBlbHNld2hlcmUgaW4gcmVzYW1wbGUuYyxcclxuICAgKiB1c2VzIHRoZSBub3RhdGlvbiAodSx2KSAtPiAoeCx5KS4pXHJcbiAgICpcclxuICAgKiBUaGUgSmFjb2JpYW4gbWF0cml4IG9mIHRoZSB0cmFuc2Zvcm1hdGlvbiBhdCAoeCx5KSBpcyBlcXVhbCB0b1xyXG4gICAqXHJcbiAgICogICBKID0gWyBBLCBCIF0gPSBbIGRYL2R4LCBkWC9keSBdXHJcbiAgICogICAgICAgWyBDLCBEIF0gICBbIGRZL2R4LCBkWS9keSBdXHJcbiAgICpcclxuICAgKiB0aGF0IGlzLCB0aGUgdmVjdG9yIFtBLENdIGlzIHRoZSB0YW5nZW50IHZlY3RvciBjb3JyZXNwb25kaW5nIHRvXHJcbiAgICogaW5wdXQgY2hhbmdlcyBpbiB0aGUgaG9yaXpvbnRhbCBkaXJlY3Rpb24sIGFuZCB0aGUgdmVjdG9yIFtCLERdXHJcbiAgICogaXMgdGhlIHRhbmdlbnQgdmVjdG9yIGNvcnJlc3BvbmRpbmcgdG8gaW5wdXQgY2hhbmdlcyBpbiB0aGVcclxuICAgKiB2ZXJ0aWNhbCBkaXJlY3Rpb24uXHJcbiAgICpcclxuICAgKiBJbiB0aGUgY29udGV4dCBvZiByZXNhbXBsaW5nLCBpdCBpcyBuYXR1cmFsIHRvIHVzZSB0aGUgaW52ZXJzZVxyXG4gICAqIEphY29iaWFuIG1hdHJpeCBKaW52IGJlY2F1c2UgcmVzYW1wbGluZyBpcyBnZW5lcmFsbHkgcGVyZm9ybWVkIGJ5XHJcbiAgICogcHVsbGluZyBwaXhlbCBsb2NhdGlvbnMgaW4gdGhlIG91dHB1dCBpbWFnZSBiYWNrIHRvIGxvY2F0aW9ucyBpblxyXG4gICAqIHRoZSBpbnB1dCBpbWFnZS4gSmludiBpc1xyXG4gICAqXHJcbiAgICogICBKaW52ID0gWyBhLCBiIF0gPSBbIGR4L2RYLCBkeC9kWSBdXHJcbiAgICogICAgICAgICAgWyBjLCBkIF0gICBbIGR5L2RYLCBkeS9kWSBdXHJcbiAgICpcclxuICAgKiBOb3RlOiBKaW52IGNhbiBiZSBjb21wdXRlZCBmcm9tIEogd2l0aCB0aGUgZm9sbG93aW5nIG1hdHJpeFxyXG4gICAqIGZvcm11bGE6XHJcbiAgICpcclxuICAgKiAgIEppbnYgPSAxLyhBKkQtQipDKSBbICBELCAtQiBdXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgWyAtQywgIEEgXVxyXG4gICAqXHJcbiAgICogV2hhdCB3ZSBkbyBpcyBtb2RpZnkgSmludiBzbyB0aGF0IGl0IGdlbmVyYXRlcyBhbiBlbGxpcHNlIHdoaWNoXHJcbiAgICogaXMgYXMgY2xvc2UgYXMgcG9zc2libGUgdG8gdGhlIG9yaWdpbmFsIGJ1dCB3aGljaCBjb250YWlucyB0aGVcclxuICAgKiB1bml0IGRpc2suIFRoaXMgY2FuIGJlIGFjY29tcGxpc2hlZCBhcyBmb2xsb3dzOlxyXG4gICAqXHJcbiAgICogTGV0XHJcbiAgICpcclxuICAgKiAgIEppbnYgPSBVIFNpZ21hIFZeVFxyXG4gICAqXHJcbiAgICogYmUgYW4gU1ZEIGRlY29tcG9zaXRpb24gb2YgSmludi4gKFRoZSBTVkQgaXMgbm90IHVuaXF1ZSwgYnV0IHRoZVxyXG4gICAqIGZpbmFsIGVsbGlwc2UgZG9lcyBub3QgZGVwZW5kIG9uIHRoZSBwYXJ0aWN1bGFyIFNWRC4pXHJcbiAgICpcclxuICAgKiBXZSBjb3VsZCBjbGFtcCB1cCB0aGUgZW50cmllcyBvZiB0aGUgZGlhZ29uYWwgbWF0cml4IFNpZ21hIHNvXHJcbiAgICogdGhhdCB0aGV5IGFyZSBhdCBsZWFzdCAxLCBhbmQgdGhlbiBzZXRcclxuICAgKlxyXG4gICAqICAgSmludiA9IFUgbmV3U2lnbWEgVl5ULlxyXG4gICAqXHJcbiAgICogSG93ZXZlciwgd2UgZG8gbm90IG5lZWQgdG8gY29tcHV0ZSBWIGZvciB0aGUgZm9sbG93aW5nIHJlYXNvbjpcclxuICAgKiBWXlQgaXMgYW4gb3J0aG9nb25hbCBtYXRyaXggKHRoYXQgaXMsIGl0IHJlcHJlc2VudHMgYSBjb21iaW5hdGlvblxyXG4gICAqIG9mIHJvdGF0aW9ucyBhbmQgcmVmbGV4aW9ucykgc28gdGhhdCBpdCBtYXBzIHRoZSB1bml0IGNpcmNsZSB0b1xyXG4gICAqIGl0c2VsZi4gRm9yIHRoaXMgcmVhc29uLCB0aGUgZXhhY3QgdmFsdWUgb2YgViBkb2VzIG5vdCBhZmZlY3QgdGhlXHJcbiAgICogZmluYWwgZWxsaXBzZSwgYW5kIHdlIGNhbiBjaG9vc2UgViB0byBiZSB0aGUgaWRlbnRpdHlcclxuICAgKiBtYXRyaXguIFRoaXMgZ2l2ZXNcclxuICAgKlxyXG4gICAqICAgSmludiA9IFUgbmV3U2lnbWEuXHJcbiAgICpcclxuICAgKiBJbiB0aGUgZW5kLCB3ZSByZXR1cm4gdGhlIHR3byBkaWFnb25hbCBlbnRyaWVzIG9mIG5ld1NpZ21hXHJcbiAgICogdG9nZXRoZXIgd2l0aCB0aGUgdHdvIGNvbHVtbnMgb2YgVS5cclxuICAgKi9cclxuICAvKlxyXG4gICAqIENsYW1wVXBBeGVzIHdhcyB3cml0dGVuIGJ5IE5pY29sYXMgUm9iaWRvdXggYW5kIENoYW50YWwgUmFjZXR0ZVxyXG4gICAqIG9mIExhdXJlbnRpYW4gVW5pdmVyc2l0eSB3aXRoIGluc2lnaHRmdWwgc3VnZ2VzdGlvbnMgZnJvbSBBbnRob255XHJcbiAgICogVGh5c3NlbiBhbmQgZnVuZGluZyBmcm9tIHRoZSBOYXRpb25hbCBTY2llbmNlIGFuZCBFbmdpbmVlcmluZ1xyXG4gICAqIFJlc2VhcmNoIENvdW5jaWwgb2YgQ2FuYWRhLiBJdCBpcyBkaXN0aW5ndWlzaGVkIGZyb20gaXRzXHJcbiAgICogcHJlZGVjZXNzb3JzIGJ5IGl0cyBlZmZpY2llbnQgaGFuZGxpbmcgb2YgZGVnZW5lcmF0ZSBjYXNlcy5cclxuICAgKlxyXG4gICAqIFRoZSBpZGVhIG9mIGNsYW1waW5nIHVwIHRoZSBFV0EgZWxsaXBzZSdzIG1ham9yIGFuZCBtaW5vciBheGVzIHNvXHJcbiAgICogdGhhdCB0aGUgcmVzdWx0IGNvbnRhaW5zIHRoZSByZWNvbnN0cnVjdGlvbiBrZXJuZWwgZmlsdGVyIHN1cHBvcnRcclxuICAgKiBpcyB0YWtlbiBmcm9tIEFuZHJlYXMgR3VzdGFmZnNvbidzIE1hc3RlcnMgdGhlc2lzIFwiSW50ZXJhY3RpdmVcclxuICAgKiBJbWFnZSBXYXJwaW5nXCIsIEhlbHNpbmtpIFVuaXZlcnNpdHkgb2YgVGVjaG5vbG9neSwgRmFjdWx0eSBvZlxyXG4gICAqIEluZm9ybWF0aW9uIFRlY2hub2xvZ3ksIDU5IHBhZ2VzLCAxOTkzIChzZWUgU2VjdGlvbiAzLjYpLlxyXG4gICAqXHJcbiAgICogVGhlIHVzZSBvZiB0aGUgU1ZEIHRvIGNsYW1wIHVwIHRoZSBzaW5ndWxhciB2YWx1ZXMgb2YgdGhlXHJcbiAgICogSmFjb2JpYW4gbWF0cml4IG9mIHRoZSBwdWxsYmFjayB0cmFuc2Zvcm1hdGlvbiBmb3IgRVdBIHJlc2FtcGxpbmdcclxuICAgKiBpcyB0YWtlbiBmcm9tIHRoZSBhc3Ryb3BoeXNpY2lzdCBDcmFpZyBEZUZvcmVzdC4gIEl0IGlzXHJcbiAgICogaW1wbGVtZW50ZWQgaW4gaGlzIFBETDo6VHJhbnNmb3JtIGNvZGUgKFBETCA9IFBlcmwgRGF0YVxyXG4gICAqIExhbmd1YWdlKS5cclxuICAgKi9cclxuXHJcbiAgY29uc3QgYSA9IGR1eDtcclxuICBjb25zdCBiID0gZHV5O1xyXG4gIGNvbnN0IGMgPSBkdng7XHJcbiAgY29uc3QgZCA9IGR2eTtcclxuXHJcbiAgLypcclxuICAgKiBuIGlzIHRoZSBtYXRyaXggSmludiAqIHRyYW5zcG9zZShKaW52KS4gRWlnZW52YWx1ZXMgb2YgbiBhcmUgdGhlXHJcbiAgICogc3F1YXJlcyBvZiB0aGUgc2luZ3VsYXIgdmFsdWVzIG9mIEppbnYuXHJcbiAgICovXHJcbiAgY29uc3QgYWEgPSBhICogYTtcclxuICBjb25zdCBiYiA9IGIgKiBiO1xyXG4gIGNvbnN0IGNjID0gYyAqIGM7XHJcbiAgY29uc3QgZGQgPSBkICogZDtcclxuXHJcbiAgLypcclxuICAgKiBFaWdlbnZlY3RvcnMgb2YgbiBhcmUgbGVmdCBzaW5ndWxhciB2ZWN0b3JzIG9mIEppbnYuXHJcbiAgICovXHJcbiAgY29uc3QgbjExID0gYWEgKyBiYjtcclxuICBjb25zdCBuMTIgPSBhICogYyArIGIgKiBkO1xyXG4gIGNvbnN0IG4yMSA9IG4xMjtcclxuICBjb25zdCBuMjIgPSBjYyArIGRkO1xyXG4gIGNvbnN0IGRldCA9IGEgKiBkIC0gYiAqIGM7XHJcbiAgY29uc3QgdHdpY2VfZGV0ID0gZGV0ICsgZGV0O1xyXG4gIGNvbnN0IGZyb2Jlbml1c19zcXVhcmVkID0gbjExICsgbjIyO1xyXG4gIGNvbnN0IGRpc2NyaW1pbmFudCA9IChmcm9iZW5pdXNfc3F1YXJlZCArIHR3aWNlX2RldCkgKiAoZnJvYmVuaXVzX3NxdWFyZWQgLSB0d2ljZV9kZXQpO1xyXG5cclxuICAvKlxyXG4gICAqIEluIGV4YWN0IGFyaXRobWV0aWMsIGRpc2NyaW1pbmFudCBjYW4ndCBiZSBuZWdhdGl2ZS4gSW4gZmxvYXRpbmdcclxuICAgKiBwb2ludCwgaXQgY2FuLCBiZWNhdXNlIG9mIHRoZSBiYWQgY29uZGl0aW9uaW5nIG9mIFNWRFxyXG4gICAqIGRlY29tcG9zaXRpb25zIGRvbmUgdGhyb3VnaCB0aGUgYXNzb2NpYXRlZCBub3JtYWwgbWF0cml4LlxyXG4gICAqL1xyXG4gIGNvbnN0IHNxcnRfZGlzY3JpbWluYW50ID0gTWF0aC5zcXJ0KGRpc2NyaW1pbmFudCA+IDAgPyBkaXNjcmltaW5hbnQgOiAwKTtcclxuXHJcbiAgLypcclxuICAgKiBzMSBpcyB0aGUgbGFyZ2VzdCBzaW5ndWxhciB2YWx1ZSBvZiB0aGUgaW52ZXJzZSBKYWNvYmlhblxyXG4gICAqIG1hdHJpeC4gSW4gb3RoZXIgd29yZHMsIGl0cyByZWNpcHJvY2FsIGlzIHRoZSBzbWFsbGVzdCBzaW5ndWxhclxyXG4gICAqIHZhbHVlIG9mIHRoZSBKYWNvYmlhbiBtYXRyaXggaXRzZWxmLlxyXG4gICAqIElmIHMxID0gMCwgYm90aCBzaW5ndWxhciB2YWx1ZXMgYXJlIDAsIGFuZCBhbnkgb3J0aG9nb25hbCBwYWlyIG9mXHJcbiAgICogbGVmdCBhbmQgcmlnaHQgZmFjdG9ycyBwcm9kdWNlcyBhIHNpbmd1bGFyIGRlY29tcG9zaXRpb24gb2YgSmludi5cclxuICAgKi9cclxuICAvKlxyXG4gICAqIEluaXRpYWxseSwgd2Ugb25seSBjb21wdXRlIHRoZSBzcXVhcmVzIG9mIHRoZSBzaW5ndWxhciB2YWx1ZXMuXHJcbiAgICovXHJcbiAgY29uc3QgczFzMSA9IDAuNSAqIChmcm9iZW5pdXNfc3F1YXJlZCArIHNxcnRfZGlzY3JpbWluYW50KTtcclxuXHJcbiAgLypcclxuICAgKiBzMiB0aGUgc21hbGxlc3Qgc2luZ3VsYXIgdmFsdWUgb2YgdGhlIGludmVyc2UgSmFjb2JpYW5cclxuICAgKiBtYXRyaXguIEl0cyByZWNpcHJvY2FsIGlzIHRoZSBsYXJnZXN0IHNpbmd1bGFyIHZhbHVlIG9mIHRoZVxyXG4gICAqIEphY29iaWFuIG1hdHJpeCBpdHNlbGYuXHJcbiAgICovXHJcbiAgY29uc3QgczJzMiA9IDAuNSAqIChmcm9iZW5pdXNfc3F1YXJlZCAtIHNxcnRfZGlzY3JpbWluYW50KTtcclxuICBjb25zdCBzMXMxbWludXNuMTEgPSBzMXMxIC0gbjExO1xyXG4gIGNvbnN0IHMxczFtaW51c24yMiA9IHMxczEgLSBuMjI7XHJcblxyXG4gIC8qXHJcbiAgICogdTEsIHRoZSBmaXJzdCBjb2x1bW4gb2YgdGhlIFUgZmFjdG9yIG9mIGEgc2luZ3VsYXIgZGVjb21wb3NpdGlvblxyXG4gICAqIG9mIEppbnYsIGlzIGEgKG5vbi1ub3JtYWxpemVkKSBsZWZ0IHNpbmd1bGFyIHZlY3RvciBjb3JyZXNwb25kaW5nXHJcbiAgICogdG8gczEuIEl0IGhhcyBlbnRyaWVzIHUxMSBhbmQgdTIxLiBXZSBjb21wdXRlIHUxIGZyb20gdGhlIGZhY3RcclxuICAgKiB0aGF0IGl0IGlzIGFuIGVpZ2VudmVjdG9yIG9mIG4gY29ycmVzcG9uZGluZyB0byB0aGUgZWlnZW52YWx1ZVxyXG4gICAqIHMxXjIuXHJcbiAgICovXHJcbiAgY29uc3QgczFzMW1pbnVzbjExX3NxdWFyZWQgPSBzMXMxbWludXNuMTEgKiBzMXMxbWludXNuMTE7XHJcbiAgY29uc3QgczFzMW1pbnVzbjIyX3NxdWFyZWQgPSBzMXMxbWludXNuMjIgKiBzMXMxbWludXNuMjI7XHJcblxyXG4gIC8qXHJcbiAgICogVGhlIGZvbGxvd2luZyBzZWxlY3RzIHRoZSBsYXJnZXN0IHJvdyBvZiBuLXMxXjIgSSBhcyB0aGUgb25lXHJcbiAgICogd2hpY2ggaXMgdXNlZCB0byBmaW5kIHRoZSBlaWdlbnZlY3Rvci4gSWYgYm90aCBzMV4yLW4xMSBhbmRcclxuICAgKiBzMV4yLW4yMiBhcmUgemVybywgbi1zMV4yIEkgaXMgdGhlIHplcm8gbWF0cml4LiAgSW4gdGhhdCBjYXNlLFxyXG4gICAqIGFueSB2ZWN0b3IgaXMgYW4gZWlnZW52ZWN0b3I7IGluIGFkZGl0aW9uLCBub3JtIGJlbG93IGlzIGVxdWFsIHRvXHJcbiAgICogemVybywgYW5kLCBpbiBleGFjdCBhcml0aG1ldGljLCB0aGlzIGlzIHRoZSBvbmx5IGNhc2UgaW4gd2hpY2hcclxuICAgKiBub3JtID0gMC4gU28sIHNldHRpbmcgdTEgdG8gdGhlIHNpbXBsZSBidXQgYXJiaXRyYXJ5IHZlY3RvciBbMSwwXVxyXG4gICAqIGlmIG5vcm0gPSAwIHNhZmVseSB0YWtlcyBjYXJlIG9mIGFsbCBjYXNlcy5cclxuICAgKi9cclxuICBjb25zdCB0ZW1wX3UxMSA9IChzMXMxbWludXNuMTFfc3F1YXJlZCA+PSBzMXMxbWludXNuMjJfc3F1YXJlZCkgPyBuMTIgOiBzMXMxbWludXNuMjI7XHJcbiAgY29uc3QgdGVtcF91MjEgPSAoczFzMW1pbnVzbjExX3NxdWFyZWQgPj0gczFzMW1pbnVzbjIyX3NxdWFyZWQpID8gczFzMW1pbnVzbjExIDogbjIxO1xyXG4gIGNvbnN0IG5vcm0gPSBNYXRoLnNxcnQodGVtcF91MTEgKiB0ZW1wX3UxMSArIHRlbXBfdTIxICogdGVtcF91MjEpO1xyXG5cclxuICAvKlxyXG4gICAqIEZpbmFsaXplIHRoZSBlbnRyaWVzIG9mIGZpcnN0IGxlZnQgc2luZ3VsYXIgdmVjdG9yIChhc3NvY2lhdGVkXHJcbiAgICogd2l0aCB0aGUgbGFyZ2VzdCBzaW5ndWxhciB2YWx1ZSkuXHJcbiAgICovXHJcbiAgY29uc3QgdTExID0gbm9ybSA+IDAgPyB0ZW1wX3UxMSAvIG5vcm0gOiAxO1xyXG4gIGNvbnN0IHUyMSA9IG5vcm0gPiAwID8gdGVtcF91MjEgLyBub3JtIDogMDtcclxuXHJcbiAgLypcclxuICAgKiBDbGFtcCB0aGUgc2luZ3VsYXIgdmFsdWVzIHVwIHRvIDEuXHJcbiAgICovXHJcbiAgY29uc3QgbWFqb3JfbWFnID0gczFzMSA8PSAxID8gMSA6IE1hdGguc3FydChzMXMxKTtcclxuICBjb25zdCBtaW5vcl9tYWcgPSBzMnMyIDw9IDEgPyAxIDogTWF0aC5zcXJ0KHMyczIpO1xyXG5cclxuXHJcbiAgY29uc3QgbWFqb3JfeCA9IHUxMSAqIG1ham9yX21hZztcclxuICBjb25zdCBtYWpvcl95ID0gdTIxICogbWFqb3JfbWFnO1xyXG4gIGNvbnN0IG1pbm9yX3ggPSAtdTIxICogbWlub3JfbWFnO1xyXG4gIGNvbnN0IG1pbm9yX3kgPSB1MTEgKiBtaW5vcl9tYWc7XHJcblxyXG4gIHJldHVybiBbXHJcbiAgICBtYWpvcl94LFxyXG4gICAgbWFqb3JfeSxcclxuICAgIG1pbm9yX3gsXHJcbiAgICBtaW5vcl95LFxyXG4gICAgbWFqb3JfbWFnLFxyXG4gICAgbWlub3JfbWFnXHJcbiAgXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVsbGlwdGljYWwgV2VpZ2h0ZWQgQXZlcmFnZS5cclxuICogUmVzYW1wbGVzIHBpeGVsIGNvbG9yIHVzaW5nIEVsbGlwdGljYWwgV2VpZ2h0ZWQgQXZlcmFnZSB0ZWNobmlxdWUuXHJcbiAqXHJcbiAqIEBpbXBsZW1lbnRzIHtSZXNhbXBsZXJJbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLnJlc2FtcGxlclxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy5pbWFnZW1hZ2ljay5vcmcvVXNhZ2UvZGlzdG9ydHMvI2Rpc3RvcnRfZXdhIEVXQSBkZXRhaWxzfSBhdCBJbWFnZU1hZ2ljayBkb2NzLlxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dzIuZWVjcy5iZXJrZWxleS5lZHUvUHVicy9UZWNoUnB0cy8xOTg5L0NTRC04OS01MTYucGRmIEZ1bmRhbWVudGFscyBvZiBUZXh0dXJlIE1hcHBpbmcgYW5kIEltYWdlIFdhcnBpbmcgYnkgUGF1bCBTLiBIZWNrYmVydH1cclxuICogcGFnZSA0MSwgc2VjdGlvbiAzLjQsIDMuNVxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9yZXNhbXBsZV84Y19zb3VyY2UuaHRtbCNsMDEwMzggU2NhbGVSZXNhbXBsZUZpbHRlcigpfSBhdFxyXG4gKiBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3Jlc2FtcGxlXzhjX3NvdXJjZS5odG1sI2wwMDMxNSBSZXNhbXBsZVBpeGVsQ29sb3IoKX0gYXRcclxuICogSW1hZ2VNYWdpY2sgc291cmNlLlxyXG4gKi9cclxuY2xhc3MgRVdBIHtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0ZpbHRlckludGVyZmFjZX0gZmlsdGVyXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZmlsdGVyKSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlY29uc3RydWN0aW9uIGZpbHRlci5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtGaWx0ZXJJbnRlcmZhY2V9XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVzaXplRmlsdGVyID0gZmlsdGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHByYWN0aWNhbCB3b3JraW5nIHN1cHBvcnQgb2YgdGhlIGZpbHRlclxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5zdXBwb3J0ID0gdGhpcy5yZXNpemVGaWx0ZXIuc3VwcG9ydCAqIHRoaXMucmVzaXplRmlsdGVyLmJsdXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXR0ZSBjb2xvciBmb3IgaW52YWxpZCBtYXBwaW5ncy5cclxuICAgICAqIEB0eXBlIHtDb2xvcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5tYXR0ZUNvbG9yID0gWzAsIDAsIDAsIDBdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9va3VwIHRhYmxlIG9mIHdlaWdodHMgZm9yIGZpbHRlcmVkIGF2ZXJhZ2UgaW4gZWxsaXB0aWNhbCBhcmVhLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcltdfVxyXG4gICAgICovXHJcbiAgICB0aGlzLndlaWdodExvb2t1cFRhYmxlID0gYnVpbGRXZWlnaHRMb29rdXBUYWJsZSh0aGlzLnJlc2l6ZUZpbHRlciwgdGhpcy5zdXBwb3J0KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEltYWdlIGJlaW5nIHJlc2FtcGxlZC5cclxuICAgICAqIEB0eXBlIHtJbWFnZUludGVyZmFjZX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5pbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXN0b3J0aW9uIG1hcHBlci5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtEaXN0b3J0aW9uSW50ZXJmYWNlfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1hcHBlciA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWNoZWQgZm9yIGRpcmVjdCBhY2Nlc3MgaW1hZ2UgdmlydHVhbCB2aWV3cG9ydC5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtsZW5zLlZpZXdwb3J0fVxyXG4gICAgICovXHJcbiAgICB0aGlzLmltYWdlVmlld3BvcnQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FjaGVkIGltYWdlIGFyZWEuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmltYWdlQXJlYSA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWNoZWQgZm9yIGRpcmVjdCBhY2Nlc3MgaW1hZ2UgdmlydHVhbCBwaXhlbCBtZXRob2QuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bGVucy52cHh9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaW1hZ2VWaXJ0dWFsUGl4ZWxNZXRob2QgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FjaGVkIGltYWdlIGF2ZXJhZ2UgY29sb3IuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7Q29sb3J8bnVsbH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5pbWFnZUF2ZXJhZ2VDb2xvciA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbGxpcHNlIGVxdWlhdGlvbiBBLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5BID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVsbGlwc2UgZXF1YXRpb24gQi5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuQiA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbGxpcHNlIGVxdWF0aW9uIEMuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLkMgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRWxsaXBzZSBlcXVhdGlvbiBGLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5GID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMudUxpbWl0ID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMudkxpbWl0ID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMudVdpZHRoID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2xvcGUgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlZCBmb3IgZGlzdG9ydGlvbnMgd2l0aCBjb25zdGFudCBwYXJ0aWFsIGRlcml2YXRpdmVzIHRvIGZsYWcgdGhhdCBlbGxpcHNlIGFscmVhZHkgaGFzIGJlZW4gc2V0IHVwLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZWxsaXBzZUlzU2V0VXAgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZsYWdzIHRoYXQgZWxsaXBzZSBpcyB0b28gbGFyZ2UgYW5kIGl0IGlzIGltcHJhY3RpY2FsIHRvIHJlc2FtcGxlIGNvbG9yIC0tIGJldHRlciB1c2Ugc29tZSBvZiBwb3NzaWJsZVxyXG4gICAgICogb3B0aW1pemF0aW9ucy5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB0aGlzLmxpbWl0UmVhY2hlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3V0cHV0IGltYWdlIHNjYWxpbmcgZmFjdG9yLlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5zY2FsaW5nID0gMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0UmVzYW1wbGVkQ29sb3IoeCwgeSkge1xyXG4gICAgeCA9IHggKiB0aGlzLnNjYWxpbmc7XHJcbiAgICB5ID0geSAqIHRoaXMuc2NhbGluZztcclxuXHJcbiAgICBjb25zdCB2YWxpZGl0eSA9IHRoaXMubWFwcGVyLmdldFZhbGlkaXR5KHgsIHksIHRoaXMuc2NhbGluZyk7XHJcblxyXG4gICAgaWYgKHZhbGlkaXR5ID4gMCkge1xyXG4gICAgICBjb25zdCBbdSwgdl0gPSB0aGlzLm1hcHBlci5yZXZlcnNlTWFwKHgsIHkpO1xyXG5cclxuICAgICAgaWYgKHRoaXMubWFwcGVyLmhhc0NvbnN0YW50UGFydGlhbERlcml2YXRpdmVzKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cEVsbGlwc2VPbmNlKC4uLnRoaXMubWFwcGVyLmdldFBhcnRpYWxEZXJpdmF0aXZlcyh4LCB5KSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cEVsbGlwc2UoLi4udGhpcy5tYXBwZXIuZ2V0UGFydGlhbERlcml2YXRpdmVzKHgsIHkpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmdldFdlaWdodGVkQXZlcmFnZSh1LCB2KTtcclxuXHJcbiAgICAgIGlmICh2YWxpZGl0eSA8IDEpIHtcclxuICAgICAgICByZXR1cm4gYmxlbmRDb2xvcnMoY29sb3IsIHZhbGlkaXR5LCB0aGlzLm1hdHRlQ29sb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubWF0dGVDb2xvci5zbGljZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBzZXRJbWFnZShpbWFnZSkge1xyXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgLy8gY2FjaGUgaW1hZ2Ugdmlld3BvcnQgZm9yIGZhc3RlciBkaXJlY3QgYWNjZXNzLlxyXG4gICAgdGhpcy5pbWFnZVZpZXdwb3J0ID0gdGhpcy5pbWFnZS52aWV3cG9ydDtcclxuICAgIC8vIGNhY2hlIGltYWdlIGFyZWEuXHJcbiAgICB0aGlzLmltYWdlQXJlYSA9IHRoaXMuaW1hZ2VWaWV3cG9ydC5hcmVhKCk7XHJcbiAgICAvLyBjYWNoZSBpbWFnZSB2aXJ0dWFsIHBpeGVsIG1ldGhvZCAod2lsbCBpdCBiZSBmYXN0ZXIgYWN0dWFsbHk/KVxyXG4gICAgdGhpcy5pbWFnZVZpcnR1YWxQaXhlbE1ldGhvZCA9IHRoaXMuaW1hZ2UudmlydHVhbFBpeGVsTWV0aG9kO1xyXG4gICAgLy8gcmVzZXQgY2FjaGVkIGltYWdlIGF2ZXJhZ2UgY29sb3JcclxuICAgIHRoaXMuaW1hZ2VBdmVyYWdlQ29sb3IgPSBudWxsO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHNldE1hcHBlcihtYXBwZXIpIHtcclxuICAgIGlmICghbWFwcGVyLmhhc1BhcnRpYWxEZXJpdmF0aXZlcykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BpeGVsIG1hcHBlciBtdXN0IGhhdmUgcGFydGlhbCBkZXJpdmF0aXZlcyB0byB1c2UgdGhpcyByZXNhbXBsZXInKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1hcHBlciA9IG1hcHBlcjtcclxuICAgIHRoaXMuZWxsaXBzZUlzU2V0VXAgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZXMgZWxsaXBzZSBvbmNlIGZvciBkaXN0b3J0aW9ucyB3aXRoIGNvbnN0YW50IHBhcnRpYWwgZGVyaXZhdGl2ZXMuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSBkZXJpdmF0aXZlc1xyXG4gICAqIEByZXR1cm5zIHtsZW5zLnJlc2FtcGxlci5FV0F9XHJcbiAgICovXHJcbiAgc2V0dXBFbGxpcHNlT25jZSguLi5kZXJpdmF0aXZlcykge1xyXG4gICAgaWYgKCF0aGlzLmVsbGlwc2VJc1NldFVwKSB7XHJcbiAgICAgIHRoaXMuZWxsaXBzZUlzU2V0VXAgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gdGhpcy5zZXR1cEVsbGlwc2UoLi4uZGVyaXZhdGl2ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlcyBlbGxpcHNlIGZvciBFV0EgcmVzYW1wbGluZyB1c2luZyBwYXJ0aWFsIGRlcml2YXRpdmVzLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0gZGVyaXZhdGl2ZXNcclxuICAgKiBAcmV0dXJucyB7bGVucy5yZXNhbXBsZXIuRVdBfVxyXG4gICAqL1xyXG4gIHNldHVwRWxsaXBzZSguLi5kZXJpdmF0aXZlcykge1xyXG4gICAgdGhpcy5saW1pdFJlYWNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICBkZXJpdmF0aXZlcyA9IGRlcml2YXRpdmVzLm1hcChkZXJpdmF0aXZlID0+IGRlcml2YXRpdmUgKiB0aGlzLnNjYWxpbmcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmluaXRFbGxpcHNlKC4uLmRlcml2YXRpdmVzKVxyXG4gICAgICAuc2NhbGVFbGxpcHNlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGVzIGVsbGlwc2UgZXF1YXRpb24gZm9yIGdpdmVuIGRpc3RvcnRpb24gcGFydGlhbCBkZXJpdmF0aXZlcy5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIGRlcml2YXRpdmVzXHJcbiAgICogQHJldHVybnMge2xlbnMucmVzYW1wbGVyLkVXQX1cclxuICAgKi9cclxuICBpbml0RWxsaXBzZSguLi5kZXJpdmF0aXZlcykge1xyXG4gICAgY29uc3QgW1xyXG4gICAgICBtYWpvcl94LFxyXG4gICAgICBtYWpvcl95LFxyXG4gICAgICBtaW5vcl94LFxyXG4gICAgICBtaW5vcl95LFxyXG4gICAgICBtYWpvcl9tYWcsXHJcbiAgICAgIG1pbm9yX21hZ1xyXG4gICAgXSA9IGNsYW1wRWxsaXBzZUF4ZXMoLi4uZGVyaXZhdGl2ZXMpO1xyXG5cclxuICAgIHRoaXMuQSA9IG1ham9yX3kgKiBtYWpvcl95ICsgbWlub3JfeSAqIG1pbm9yX3k7XHJcbiAgICB0aGlzLkIgPSAtMiAqIChtYWpvcl94ICogbWFqb3JfeSArIG1pbm9yX3ggKiBtaW5vcl95KTtcclxuICAgIHRoaXMuQyA9IG1ham9yX3ggKiBtYWpvcl94ICsgbWlub3JfeCAqIG1pbm9yX3g7XHJcbiAgICB0aGlzLkYgPSBtYWpvcl9tYWcgKiBtaW5vcl9tYWc7XHJcbiAgICB0aGlzLkYgKj0gdGhpcy5GO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBJZiBvbmUgb3IgYm90aCBvZiB0aGUgc2NhbGluZyB2ZWN0b3JzIGlzIGltcG9zc2libHkgbGFyZ2VcclxuICAgICAqIChwcm9kdWNpbmcgYSB2ZXJ5IGxhcmdlIHJhdyBGIHZhbHVlKSwgd2UgbWF5IGFzIHdlbGwgbm90IGJvdGhlclxyXG4gICAgICogZG9pbmcgYW55IGZvcm0gb2YgcmVzYW1wbGluZyBzaW5jZSByZXNhbXBsZWQgYXJlYSBpcyB2ZXJ5IGxhcmdlLlxyXG4gICAgICogSW4gdGhpcyBjYXNlIHNvbWUgYWx0ZXJuYXRpdmUgbWVhbnMgb2YgcGl4ZWwgc2FtcGxpbmcsIHN1Y2ggYXNcclxuICAgICAqIHRoZSBhdmVyYWdlIG9mIHRoZSB3aG9sZSBpbWFnZSBpcyBuZWVkZWQgdG8gZ2V0IGEgcmVhc29uYWJsZVxyXG4gICAgICogcmVzdWx0LiBDYWxjdWxhdGUgb25seSBhcyBuZWVkZWQuXHJcbiAgICAgKi9cclxuICAgIHRoaXMubGltaXRSZWFjaGVkID0gNCAqIHRoaXMuQSAqIHRoaXMuQyAtIHRoaXMuQiAqIHRoaXMuQiA+IE1BWElNVU1fVkFMVUU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY2FsZXMgZWxsaXBzZSB0byBtYXRjaCBmaWx0ZXIgc3VwcG9ydC5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHJldHVybnMge2xlbnMucmVzYW1wbGVyLkVXQX1cclxuICAgKi9cclxuICBzY2FsZUVsbGlwc2UoKSB7XHJcbiAgICBpZiAoIXRoaXMubGltaXRSZWFjaGVkKSB7XHJcbiAgICAgIHRoaXMuRiAqPSB0aGlzLnN1cHBvcnQgKiB0aGlzLnN1cHBvcnQ7XHJcbiAgICAgIHRoaXMudUxpbWl0ID0gTWF0aC5zcXJ0KHRoaXMuQyAqIHRoaXMuRiAvICh0aGlzLkEgKiB0aGlzLkMgLSAwLjI1ICogdGhpcy5CICogdGhpcy5CKSk7XHJcbiAgICAgIHRoaXMudkxpbWl0ID0gTWF0aC5zcXJ0KHRoaXMuQSAqIHRoaXMuRiAvICh0aGlzLkEgKiB0aGlzLkMgLSAwLjI1ICogdGhpcy5CICogdGhpcy5CKSk7XHJcbiAgICAgIHRoaXMudVdpZHRoID0gTWF0aC5zcXJ0KHRoaXMuRiAvIHRoaXMuQSk7XHJcbiAgICAgIHRoaXMuc2xvcGUgPSAtdGhpcy5CIC8gKDIgKiB0aGlzLkEpO1xyXG5cclxuICAgICAgLypcclxuICAgICAgICogQ2hlY2sgdGhlIGFic29sdXRlIGFyZWEgb2YgdGhlIHBhcmFsbGVsb2dyYW0gaW52b2x2ZWQuXHJcbiAgICAgICAqIFRoaXMgbGltaXQgbmVlZHMgbW9yZSB3b3JrLCBhcyBpdCBpcyB0b28gc2xvdyBmb3IgbGFyZ2VyIGltYWdlc1xyXG4gICAgICAgKiB3aXRoIHRpbGVkIHZpZXdzIG9mIHRoZSBob3Jpem9uLlxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKHRoaXMudVdpZHRoICogdGhpcy52TGltaXQgPiA0ICogdGhpcy5pbWFnZUFyZWEpIHtcclxuICAgICAgICB0aGlzLmxpbWl0UmVhY2hlZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIFNjYWxlIGVsbGlwc2UgZm9ybXVsYSB0byBkaXJlY3RseSBpbmRleCB0aGUgRmlsdGVyIExvb2t1cCBUYWJsZSAqL1xyXG4gICAgICBjb25zdCBzY2FsZSA9IFdFSUdIVF9MT09LVVBfVEFCTEVfV0lEVEggLyB0aGlzLkY7XHJcbiAgICAgIHRoaXMuQSAqPSBzY2FsZTtcclxuICAgICAgdGhpcy5CICo9IHNjYWxlO1xyXG4gICAgICB0aGlzLkMgKj0gc2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHdlaWdodGVkIGF2ZXJhZ2UgY29sb3IgYXQgZ2l2ZW4gcG9pbnQgdXNpbmcgc2NhbGVkIEVXQSBlbGxpcHNlLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdTBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdjBcclxuICAgKiBAcmV0dXJucyB7Q29sb3J9XHJcbiAgICovXHJcbiAgZ2V0V2VpZ2h0ZWRBdmVyYWdlKHUwLCB2MCkge1xyXG4gICAgaWYgKHRoaXMuZG9lc250TmVlZFJlc2FtcGxpbmcodTAsIHYwKSkge1xyXG4gICAgICAvKiBUaGUgYXJlYSBiZWluZyByZXNhbXBsZWQgaXMgc2ltcGx5IGEgc29saWQgY29sb3JcclxuICAgICAgICoganVzdCByZXR1cm4gYSBzaW5nbGUgbG9va3VwIGNvbG9yLlxyXG4gICAgICAgKi9cclxuICAgICAgcmV0dXJuIHRoaXMuaW1hZ2UuZ2V0UGl4ZWxDb2xvcih1MCwgdjApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxpbWl0UmVhY2hlZCkge1xyXG4gICAgICAvLyBXaGVuIFNjYWxpbmcgbGltaXRzIHJlYWNoZWQsIHJldHVybiBhbiAnYXZlcmFnZWQnIHJlc3VsdC5cclxuXHJcbiAgICAgIHN3aXRjaCAodGhpcy5pbWFnZVZpcnR1YWxQaXhlbE1ldGhvZCkge1xyXG4gICAgICAgIGNhc2UgdnB4LkVER0U6XHJcbiAgICAgICAgY2FzZSB2cHguSE9SSVpPTlRBTF9USUxFX0VER0U6XHJcbiAgICAgICAgY2FzZSB2cHguVkVSVElDQUxfVElMRV9FREdFOlxyXG4gICAgICAgICAgLypcclxuICAgICAgICAgICAqIFdlIG5lZWQgYW4gYXZlcmFnZSBlZGdlIHBpeGVsLCBmcm9tIHRoZSBjb3JyZWN0IGVkZ2UhXHJcbiAgICAgICAgICAgKiBIb3cgc2hvdWxkIEkgY2FsY3VsYXRlIGFuIGF2ZXJhZ2UgZWRnZSBjb2xvcj9cclxuICAgICAgICAgICAqIEp1c3QgcmV0dXJuaW5nIGFuIGF2ZXJhZ2VkIG5laWdoYm91cmhvb2QsXHJcbiAgICAgICAgICAgKiB3b3JrcyB3ZWxsIGluIGdlbmVyYWwsIGJ1dCBmYWxscyBkb3duIGZvciBUaWxlRWRnZSBtZXRob2RzLlxyXG4gICAgICAgICAgICogVGhpcyBuZWVkcyB0byBiZSBkb25lIHByb3Blcmx5ISEhISEhXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlLmdldEludGVycG9sYXRlZFBpeGVsQ29sb3IodTAsIHYwLCBpbnRlcnBvbGF0aW9uLkFWRVJBR0UpO1xyXG4gICAgICAgIGNhc2UgdnB4LkhPUklaT05UQUxfVElMRTpcclxuICAgICAgICBjYXNlIHZweC5WRVJUSUNBTF9USUxFOlxyXG4gICAgICAgICAgLypcclxuICAgICAgICAgICoganVzdCByZXR1cm4gdGhlIGJhY2tncm91bmQgcGl4ZWwgLSBJcyB0aGVyZSBtb3JlIGRpcmVjdCB3YXk/XHJcbiAgICAgICAgICAqL1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2UuZ2V0UGl4ZWxDb2xvcihcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVZpZXdwb3J0LngxIC0gMSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVZpZXdwb3J0LnkxIC0gMVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VBdmVyYWdlQ29sb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBkaXZpc29yTSA9IDAsXHJcbiAgICAgIGRpdmlzb3JDID0gMCxcclxuICAgICAgcmVkID0gMCxcclxuICAgICAgZ3JlZW4gPSAwLFxyXG4gICAgICBibHVlID0gMCxcclxuICAgICAgYWxwaGEgPSAwO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBEZXRlcm1pbmUgdGhlIHBhcmVsbGVsb2dyYW0gYm91bmRpbmcgYm94IGZpdHRlZCB0byB0aGUgZWxsaXBzZVxyXG4gICAgICogY2VudGVyZWQgYXQgdTAsdjAuICBUaGlzIGFyZWEgaXMgYm91bmRpbmcgYnkgdGhlIGxpbmVzLi4uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHYxID0gTWF0aC5jZWlsKHYwIC0gdGhpcy52TGltaXQpO1xyXG4gICAgY29uc3QgdjIgPSBNYXRoLmZsb29yKHYwICsgdGhpcy52TGltaXQpO1xyXG5cclxuICAgIC8vIHNjYW4gbGluZSBzdGFydCBhbmQgd2lkdGggYWNjcm9zcyB0aGUgcGFyYWxsZWxvZ3JhbVxyXG4gICAgbGV0IHUxID0gdTAgKyAodjEgLSB2MCkgKiB0aGlzLnNsb3BlIC0gdGhpcy51V2lkdGg7XHJcbiAgICBsZXQgdXcgPSAyICogdGhpcy51V2lkdGggKyAxO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBEbyB3ZWlnaHRlZCByZXNhbXBsaW5nIG9mIGFsbCBwaXhlbHMsICB3aXRoaW4gdGhlIHNjYWxlZCBlbGxpcHNlLFxyXG4gICAgICogYm91bmQgYnkgYSBQYXJlbGxlbG9ncmFtIGZpdHRlZCB0byB0aGUgZWxsaXBzZS5cclxuICAgICAqL1xyXG5cclxuICAgIGxldCBERFEgPSAyICogdGhpcy5BO1xyXG5cclxuICAgIGZvciAobGV0IHYgPSB2MTsgdiA8IHYyOyB2KyspIHtcclxuICAgICAgbGV0IHVzdGFydCA9IE1hdGguY2VpbCh1MSk7IC8vIGZpcnN0IHBpeGVsIGluIHNjYW5saW5lXHJcbiAgICAgIHUxICs9IHRoaXMuc2xvcGU7IC8vIHN0YXJ0IG9mIG5leHQgc2NhbiBsaW5lXHJcbiAgICAgIGxldCB1ZW5kID0gdXN0YXJ0ICsgdXc7XHJcblxyXG4gICAgICAvLyBsb2NhdGlvbiBvZiB0aGlzIGZpcnN0IHBpeGVsLCByZWxhdGl2ZSB0byB1MCx2MFxyXG4gICAgICBsZXQgVSA9IHVzdGFydCAtIHUwO1xyXG4gICAgICBsZXQgViA9IHYgLSB2MDtcclxuXHJcbiAgICAgIC8vIFEgPSBlbGxpcHNlIHF1b3RlbnQgKCBpZiBRPEYgdGhlbiBwaXhlbCBpcyBpbnNpZGUgZWxsaXBzZSlcclxuICAgICAgbGV0IFEgPSAodGhpcy5BICogVSArIHRoaXMuQiAqIFYpICogVSArIHRoaXMuQyAqIFYgKiBWO1xyXG4gICAgICBsZXQgRFEgPSB0aGlzLkEgKiAoMiAqIFUgKyAxKSArIHRoaXMuQiAqIFY7XHJcblxyXG4gICAgICAvLyBjb3VudCB1cCB0aGUgd2VpZ2h0ZWQgcGl4ZWwgY29sb3JzXHJcbiAgICAgIGZvciAobGV0IHUgPSB1c3RhcnQ7IHUgPCB1ZW5kOyB1KyspIHtcclxuICAgICAgICAvLyBOb3RlIHRoYXQgdGhlIGVsbGlwc2UgaGFzIGJlZW4gcHJlLXNjYWxlZCBzbyBGID0gJHRoaXMtPndlaWdodExvb2t1cFRhYmxlV2lkdGhcclxuICAgICAgICBpZiAoUSA8IFdFSUdIVF9MT09LVVBfVEFCTEVfV0lEVEgpIHtcclxuICAgICAgICAgIGxldCB3ZWlnaHQgPSB0aGlzLndlaWdodExvb2t1cFRhYmxlW01hdGguZmxvb3IoUSldO1xyXG4gICAgICAgICAgbGV0IFtyLCBnLCBiLCBhXSA9IHRoaXMuaW1hZ2UuZ2V0UGl4ZWxDb2xvcih1LCB2KTtcclxuICAgICAgICAgIGFscGhhICs9IHdlaWdodCAqIGE7XHJcbiAgICAgICAgICBkaXZpc29yTSArPSB3ZWlnaHQ7XHJcblxyXG4gICAgICAgICAgd2VpZ2h0ICo9IChhIC8gdGhpcy5pbWFnZS5xdWFudHVtUmFuZ2UpO1xyXG5cclxuICAgICAgICAgIHJlZCArPSByICogd2VpZ2h0O1xyXG4gICAgICAgICAgZ3JlZW4gKz0gZyAqIHdlaWdodDtcclxuICAgICAgICAgIGJsdWUgKz0gYiAqIHdlaWdodDtcclxuICAgICAgICAgIGRpdmlzb3JDICs9IHdlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFEgKz0gRFE7XHJcbiAgICAgICAgRFEgKz0gRERRO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzdWx0IHNhbml0eSBjaGVjayAtLSB0aGlzIHNob3VsZCBOT1QgaGFwcGVuXHJcbiAgICBpZiAoIWRpdmlzb3JDIHx8ICFkaXZpc29yTSkge1xyXG4gICAgICAvKlxyXG4gICAgICAgKiBub3QgZW5vdWdoIHBpeGVscywgb3IgYmFkIHdlaWdodGluZyBpbiByZXNhbXBsaW5nLFxyXG4gICAgICAgKiByZXNvcnQgdG8gZGlyZWN0IGludGVycG9sYXRpb25cclxuICAgICAgICovXHJcbiAgICAgIHJldHVybiB0aGlzLmltYWdlLmdldEludGVycG9sYXRlZFBpeGVsQ29sb3IodTAsIHYwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBjbGFtcFRvUXVhbnR1bShNYXRoLnJvdW5kKHJlZCAvIGRpdmlzb3JDKSwgdGhpcy5pbWFnZS5xdWFudHVtUmFuZ2UpLFxyXG4gICAgICBjbGFtcFRvUXVhbnR1bShNYXRoLnJvdW5kKGdyZWVuIC8gZGl2aXNvckMpLCB0aGlzLmltYWdlLnF1YW50dW1SYW5nZSksXHJcbiAgICAgIGNsYW1wVG9RdWFudHVtKE1hdGgucm91bmQoYmx1ZSAvIGRpdmlzb3JDKSwgdGhpcy5pbWFnZS5xdWFudHVtUmFuZ2UpLFxyXG4gICAgICBjbGFtcFRvUXVhbnR1bShNYXRoLnJvdW5kKGFscGhhIC8gZGl2aXNvck0pLCB0aGlzLmltYWdlLnF1YW50dW1SYW5nZSlcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgbm8gcmVzYW1wbGluZyBpcyBuZWVkZWQgKGlmIHNpbmdsZSBwaXhlbCBjb2xvciBzaG91bGQgYmUgcmV0dXJuZWQpLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2XHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgZG9lc250TmVlZFJlc2FtcGxpbmcodSwgdikge1xyXG4gICAgc3dpdGNoICh0aGlzLmltYWdlVmlydHVhbFBpeGVsTWV0aG9kKSB7XHJcbiAgICAgIGNhc2UgdnB4LlRSQU5TUEFSRU5UOlxyXG4gICAgICBjYXNlIHZweC5CQUNLR1JPVU5EOlxyXG4gICAgICBjYXNlIHZweC5CTEFDSzpcclxuICAgICAgY2FzZSB2cHguV0hJVEU6XHJcbiAgICAgIGNhc2UgdnB4LkdSQVk6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGltaXRSZWFjaGVkIHx8IHRoaXMub3V0T2ZJbWFnZUJvdW5kcyh1LCB2KTtcclxuICAgICAgY2FzZSB2cHguRURHRTpcclxuICAgICAgICByZXR1cm4gKHUgKyB0aGlzLnVMaW1pdCA8IHRoaXMuaW1hZ2VWaWV3cG9ydC54MSAmJiB2ICsgdGhpcy52TGltaXQgPCB0aGlzLmltYWdlVmlld3BvcnQueTEpIHx8XHJcbiAgICAgICAgICAodSArIHRoaXMudUxpbWl0IDwgdGhpcy5pbWFnZVZpZXdwb3J0LngxICYmIHYgLSB0aGlzLnZMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC55MikgfHxcclxuICAgICAgICAgICh1IC0gdGhpcy51TGltaXQgPiB0aGlzLmltYWdlVmlld3BvcnQueDIgJiYgdiArIHRoaXMudkxpbWl0IDwgdGhpcy5pbWFnZVZpZXdwb3J0LnkxKSB8fFxyXG4gICAgICAgICAgKHUgLSB0aGlzLnVMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC54MiAmJiB2IC0gdGhpcy52TGltaXQgPiB0aGlzLmltYWdlVmlld3BvcnQueTIpO1xyXG4gICAgICBjYXNlIHZweC5IT1JJWk9OVEFMX1RJTEU6XHJcbiAgICAgICAgcmV0dXJuIHYgKyB0aGlzLnZMaW1pdCA8IHRoaXMuaW1hZ2VWaWV3cG9ydC55MSB8fCB2IC0gdGhpcy52TGltaXQgPiB0aGlzLmltYWdlVmlld3BvcnQueTI7XHJcbiAgICAgIGNhc2UgdnB4LlZFUlRJQ0FMX1RJTEU6XHJcbiAgICAgICAgcmV0dXJuIHUgKyB0aGlzLnVMaW1pdCA8IHRoaXMuaW1hZ2VWaWV3cG9ydC54MSB8fCB1IC0gdGhpcy51TGltaXQgPiB0aGlzLmltYWdlVmlld3BvcnQueDI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGF6aWxpeSByZXR1cm5zIGNhY2hlZCBpbWFnZSBhdmVyYWdlIGNvbG9yLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcmV0dXJucyB7Q29sb3J9XHJcbiAgICovXHJcbiAgZ2V0SW1hZ2VBdmVyYWdlQ29sb3IoKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZUF2ZXJhZ2VDb2xvciA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmltYWdlQXZlcmFnZUNvbG9yID0gdGhpcy5pbWFnZS5nZXRBdmVyYWdlQ29sb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5pbWFnZUF2ZXJhZ2VDb2xvci5zbGljZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGVsbGlwc2UgaXMgY29tcGxldGVseSBvdXQgb2YgaW1hZ2UgYm91bmRzLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2XHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgb3V0T2ZJbWFnZUJvdW5kcyh1LCB2KSB7XHJcbiAgICByZXR1cm4gdSArIHRoaXMudUxpbWl0IDwgdGhpcy5pbWFnZVZpZXdwb3J0LngxIHx8XHJcbiAgICAgIHUgLSB0aGlzLnVMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC54MiB8fFxyXG4gICAgICB2ICsgdGhpcy52TGltaXQgPCB0aGlzLmltYWdlVmlld3BvcnQueTEgfHxcclxuICAgICAgdiAtIHRoaXMudkxpbWl0ID4gdGhpcy5pbWFnZVZpZXdwb3J0LnkyO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRVdBOyIsImV4cG9ydCB7ZGVmYXVsdCBhcyBQb2ludH0gZnJvbSAnLi9wb2ludCc7XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgRVdBfSBmcm9tICcuL2Utdy1hJzsiLCJpbXBvcnQge2JsZW5kQ29sb3JzfSBmcm9tIFwiLi4vdXRpbC91dGlsXCI7XHJcblxyXG4vKipcclxuICogPHA+e0BsaW5rIFJlc2FtcGxlckludGVyZmFjZX0gaW1wbGVtZW50YWlvbiB3aXRob3V0IHJlc2FtcGxpbmcgaXRzZWxmLjwvcD5cclxuICogPHA+SXQgdXNlcyBwaXhlbCBjb2xvciBpbnRlcnBvbGF0aW9uIGFuZCB3b3JrcyBtdWNoIGZhc3RlciB0aGFuIHtAbGluayBsZW5zLnJlc2FtcGxlci5FV0F9IGJ1dCBwcm9kdWNlcyBhbGlhc2luZ1xyXG4gKiBlZmZlY3RzLjwvcD5cclxuICogPHA+SXQgaXMgZ29vZCBmb3IgcXVpY2sgY3JlYXRpb24gb2YgZGlzdG9ydGlvbiBwcmV2aWV3cyBhbmQgYWxzbyB1c2VkIGZvciB7QGxpbmsgRGlzdG9ydGlvbkludGVyZmFjZX0gaW1wbGVtZW50YXRpb25zXHJcbiAqIHRoYXQgZG9lc24ndCBoYXZlIHBhcnRpYWwgZGVyaXZhdGl2ZXMuPC9wPlxyXG4gKiA8cD5JdCB3b3JrcyBtb3N0IHF1aWNrbHkgd2hlbiB7QGxpbmsgSW1hZ2VJbnRlcmZhY2V9I2ludGVycG9sYXRpb25NZXRob2QgcHJvcGVydHkgaXMgc2V0IHRvXHJcbiAqIHtAbGluayBsZW5zLmludGVycG9sYXRpb24uSU5URUdFUn08L3A+XHJcbiAqXHJcbiAqIEBpbXBsZW1lbnRzIHtSZXNhbXBsZXJJbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLnJlc2FtcGxlclxyXG4gKiBAdHV0b3JpYWwgMDIuMDMucGl4ZWwtY29sb3ItbG9va3VwXHJcbiAqL1xyXG5jbGFzcyBQb2ludCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tYXR0ZUNvbG9yID0gWzAsIDAsIDAsIDBdO1xyXG4gICAgdGhpcy5zY2FsaW5nID0gMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc2V0SW1hZ2UoaW1hZ2UpIHtcclxuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBzZXRNYXBwZXIobWFwcGVyKSB7XHJcbiAgICB0aGlzLm1hcHBlciA9IG1hcHBlcjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRSZXNhbXBsZWRDb2xvcih4LCB5KSB7XHJcbiAgICB4ID0geCAqIHRoaXMuc2NhbGluZztcclxuICAgIHkgPSB5ICogdGhpcy5zY2FsaW5nO1xyXG5cclxuICAgIGNvbnN0IHZhbGlkaXR5ID0gdGhpcy5tYXBwZXIuZ2V0VmFsaWRpdHkoeCwgeSwgdGhpcy5zY2FsaW5nKTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHkgPiAwKSB7XHJcbiAgICAgIGxldCBbdSwgdl0gPSB0aGlzLm1hcHBlci5yZXZlcnNlTWFwKHgsIHkpO1xyXG4gICAgICBsZXQgY29sb3IgPSB0aGlzLmltYWdlLmdldEludGVycG9sYXRlZFBpeGVsQ29sb3IodSwgdik7XHJcblxyXG4gICAgICBpZiAodmFsaWRpdHkgPCAxKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsZW5kQ29sb3JzKGNvbG9yLCB0aGlzLm1hdHRlQ29sb3IsIHZhbGlkaXR5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLm1hdHRlQ29sb3Iuc2xpY2UoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvaW50OyIsImltcG9ydCBFV0EgZnJvbSAnLi9lLXctYSc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcclxuXHJcbi8qKlxyXG4gKiBSZXNhbXBsZXIgbmFtZXNwYWNlXHJcbiAqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5yZXNhbXBsZXJcclxuICovXHJcbmNvbnN0IHJlc2FtcGxlciA9IHtcclxuICBFV0EsXHJcbiAgUG9pbnRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlc2FtcGxlcjsiLCJpbXBvcnQgU29sdmVyIGZyb20gJy4vc29sdmVyJztcclxuaW1wb3J0IExlYXN0U3F1YXJlcyBmcm9tICcuL2xlYXN0LXNxdWFyZXMnO1xyXG5cclxuLyoqXHJcbiAqIEdhdXNzIEpvcmRhbiBFbGltaW5hdGlvbiBuYW1lc3BhY2VcclxuICpcclxuICogQG5hbWVzcGFjZSBsZW5zLnV0aWwuZ2F1c3NKb3JkYW5FbGltaW5hdGlvblxyXG4gKi9cclxuY29uc3QgZ2F1c3NKb3JkYW5FbGltaW5hdGlvbiA9IHtcclxuICBTb2x2ZXIsXHJcbiAgTGVhc3RTcXVhcmVzXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYXVzc0pvcmRhbkVsaW1pbmF0aW9uOyIsImV4cG9ydCB7ZGVmYXVsdCBhcyBHYXVzc0pvcmRhbkVsaW1pbmF0aW9ufSBmcm9tICcuL3NvbHZlcic7XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgTGVhc3RTcXVhcmVzfSBmcm9tICcuL2xlYXN0LXNxdWFyZXMnOyIsImltcG9ydCBTb2x2ZXIgZnJvbSAnLi9zb2x2ZXInO1xyXG5cclxuLyoqXHJcbiAqIEBzdW1tYXJ5IFNvbHZlcyBzeXN0ZW0gb2YgZXF1YXRpb25zIHVzaW5nIExlYXN0IFNxdWFyZXMgbWV0aG9kLlxyXG4gKiBAbWVtYmVyT2YgbGVucy51dGlsLmdhdXNzSm9yZGFuRWxpbWluYXRpb25cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvbWF0cml4XzhjX3NvdXJjZS5odG1sI2wwMDgyOSBMZWFzdFNxdWFyZXNBZGRUZXJtcygpfSBhdFxyXG4gKiBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAqL1xyXG5jbGFzcyBMZWFzdFNxdWFyZXMgZXh0ZW5kcyBTb2x2ZXIge1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByYW5rIFRoZSByYW5rIG9yIHNpemUgb2YgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIHNxdWFyZSBtYXRyaXguXHJcbiAgICogQWxzbyB0aGUgbGVuZ3RoIG9mIHZlY3RvcnMsIGFuZCBudW1iZXIgb2YgdGVybXMgYmVpbmcgYWRkZWQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bVZlY3RvcnMgTnVtYmVyIG9mIHJlc3VsdCB2ZWN0b3JzLCBhbmQgbnVtYmVyIG9yIHJlc3VsdHMgYmVpbmdcclxuICAgKiBhZGRlZC4gIEFsc28gcmVwcmVzZW50cyB0aGUgbnVtYmVyIG9mIHNlcGFyYWJsZSBzeXN0ZW1zIG9mIGVxdWF0aW9uc1xyXG4gICAqIHRoYXQgaXMgYmVpbmcgc29sdmVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHJhbmssIG51bVZlY3RvcnMgPSAxKSB7XHJcbiAgICBjb25zdCBtYXRyaXggPSBbXTtcclxuICAgIGNvbnN0IHZlY3RvcnMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbms7IGkrKykge1xyXG4gICAgICBtYXRyaXgucHVzaChuZXcgQXJyYXkocmFuaykuZmlsbCgwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WZWN0b3JzOyBpKyspIHtcclxuICAgICAgdmVjdG9ycy5wdXNoKG5ldyBBcnJheShyYW5rKS5maWxsKDApKTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlcihtYXRyaXgsIHZlY3RvcnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBvbmUgc2V0IG9mIHRlcm1zIGFuZCBhc3NvY2lhdGUgcmVzdWx0cyB0byB0aGVcclxuICAgKiBnaXZlbiBtYXRyaXggYW5kIHZlY3RvcnMgZm9yIHNvbHZpbmcgdXNpbmcgbGVhc3Qtc3F1YXJlcyBmdW5jdGlvbiBmaXR0aW5nLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gdGVybXMgVGhlIHByZS1jYWxjdWxhdGVkIHRlcm1zICh3aXRob3V0IHRoZSB1bmtub3duIGNvZWZmaWNpZW50XHJcbiAgICogd2VpZ2h0cykgdGhhdCBmb3JtcyB0aGUgZXF1YXRpb24gYmVpbmcgYWRkZWQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gcmVzdWx0cyBUaGUgcmVzdWx0KHMpIHRoYXQgc2hvdWxkIGJlIGdlbmVyYXRlZCBmcm9tIHRoZSBnaXZlbiB0ZXJtc1xyXG4gICAqIHdlaWdodGVkIGJ5IHRoZSB5ZXQtdG8tYmUtc29sdmVkIGNvZWZmaWNpZW50cy5cclxuICAgKiBAcmV0dXJucyB7bGVucy51dGlsLmdhdXNzSm9yZGFuRWxpbWluYXRpb24uTGVhc3RTcXVhcmVzfVxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL21hdHJpeF84Y19zb3VyY2UuaHRtbCNsMDA4MjkgTGVhc3RTcXVhcmVzQWRkVGVybXMoKX0gYXRcclxuICAgKiBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAgICovXHJcbiAgYWRkVGVybXModGVybXMsIHJlc3VsdHMpIHtcclxuICAgIGNvbnN0IHJhbmsgPSB0aGlzLm1hdHJpeC5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCByYW5rOyBqKyspIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5rOyBpKyspIHtcclxuICAgICAgICB0aGlzLm1hdHJpeFtpXVtqXSArPSB0ZXJtc1tpXSAqIHRlcm1zW2pdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVjdG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMudmVjdG9yc1tpXVtqXSArPSByZXN1bHRzW2ldICogdGVybXNbal07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlYXN0U3F1YXJlczsiLCJpbXBvcnQgVW5zb2x2YWJsZU1hdHJpeCBmcm9tICcuLi8uLi9leGNlcHRpb24vdW5zb2x2YWJsZS1tYXRyaXgnO1xyXG5pbXBvcnQge3BlcmNlcHRpYmxlUmVjaXByb2NhbH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcm93MVxyXG4gKiBAcGFyYW0ge251bWJlcn0gY29sMVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcm93MlxyXG4gKiBAcGFyYW0ge251bWJlcn0gY29sMlxyXG4gKi9cclxuZnVuY3Rpb24gc3dhcChhcnJheSwgcm93MSwgY29sMSwgcm93MiwgY29sMikge1xyXG4gIGlmIChhcnJheVtyb3cxXVtjb2wxXSAhPT0gYXJyYXlbcm93Ml1bY29sMl0pIHtcclxuICAgIGFycmF5W3JvdzFdW2NvbDFdICs9IGFycmF5W3JvdzJdW2NvbDJdO1xyXG4gICAgYXJyYXlbcm93Ml1bY29sMl0gPSBhcnJheVtyb3cxXVtjb2wxXSAtIGFycmF5W3JvdzJdW2NvbDJdO1xyXG4gICAgYXJyYXlbcm93MV1bY29sMV0gLT0gYXJyYXlbcm93Ml1bY29sMl07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bnNvbHZhYmxlKCkge1xyXG4gIHRocm93IG5ldyBVbnNvbHZhYmxlTWF0cml4KFwiQ2FuJ3Qgc29sdmUgZ2l2ZW4gbWF0cml4IHVzaW5nIEdhdXNzLUpvcmRhbiBtZXRob2RcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAc3VtbWFyeSBTb2x2ZXMgc3lzdGVtIG9mIGVxdWF0aW9ucyB1c2luZyBHYXVzcy1Kb3JkYW4gZWxpbWluYXRpb24uXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvbiA8cD5CcmluZ3MgdGhlIG1hdHJpeCB0byByZWR1Y2VkIHJvdyBlY2hlbG9uIGZvcm0sXHJcbiAqICB3aGlsZSBzaW11bHRhbmVvdXNseSByZWR1Y2luZyBhbmQgdGh1cyBzb2x2aW5nIHRoZSBhdWdtZW50ZWQgcmVzdWx0c1xyXG4gKiAgbWF0cml4LjwvcD5cclxuICpcclxuICogPHA+U2VlIGFsc28ge0BsaW5rIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR2F1c3MtSm9yZGFuX2VsaW1pbmF0aW9ufTwvcD5cclxuICpcclxuICpcclxuICogIDxwPk5vdGUgdGhhdCB0aGUgJ21hdHJpeCcgaXMgZ2l2ZW4gYXMgYSAnYXJyYXkgb2YgYXJyYXlzJyBvZiByYW5rIHNpemUuXHJcbiAqICBUaGF0IGlzIHZhbHVlcyBjYW4gYmUgYXNzaWduZWQgYXMgICBtYXRyaXhbcm93XVtjb2x1bW5dICAgd2hlcmUgJ3JvdycgaXNcclxuICogIHR5cGljYWxseSB0aGUgZXF1YXRpb24sIGFuZCAnY29sdW1uJyBpcyB0aGUgdGVybSBvZiB0aGUgZXF1YXRpb24uXHJcbiAqICBUaGF0IGlzIHRoZSBtYXRyaXggaXMgaW4gdGhlIGZvcm0gb2YgYSAncm93IGZpcnN0IGFycmF5Jy48L3A+XHJcbiAqXHJcbiAqICA8cD5Ib3dldmVyICd2ZWN0b3JzJyBpcyBhICdhcnJheSBvZiBhcnJheXMnIHdoaWNoIGNhbiBoYXZlIGFueSBudW1iZXJcclxuICogIG9mIGNvbHVtbnMsIHdpdGggZWFjaCBjb2x1bW4gYXJyYXkgdGhlIHNhbWUgJ3JhbmsnIHNpemUgYXMgJ21hdHJpeCcuPC9wPlxyXG4gKlxyXG4gKiAgPHA+VGhpcyBhbGxvd3MgZm9yIHNpbXBsZXIgaGFuZGxpbmcgb2YgdGhlIHJlc3VsdHMsIGVzcGVjaWFsbHkgaXMgb25seSBvbmVcclxuICogIGNvbHVtbiAndmVjdG9yJyBpcyBhbGwgdGhhdCBpcyByZXF1aXJlZCB0byBwcm9kdWNlIHRoZSBkZXNpcmVkIHNvbHV0aW9uLjwvcD5cclxuICpcclxuICogIDxwPkZvciBleGFtcGxlLCB0aGUgJ3ZlY3RvcnMnIGNhbiBjb25zaXN0IG9mIHNpbXBsZSBhcnJheSBvZlxyXG4gKiAgbnVtYmVycy4gIHdoZW4gb25seSBvbmUgc2V0IG9mIHNpbXVsdGFuZW91cyBlcXVhdGlvbnMgaXMgdG8gYmUgc29sdmVkIGZyb21cclxuICogIHRoZSBnaXZlbiBzZXQgb2YgY29lZmZpY2llbnQgd2VpZ2h0ZWQgdGVybXMuPC9wPlxyXG4gKlxyXG4gKiAgPHA+SG93ZXZlciBieSBzcGVjaWZ5aW5nIG1vcmUgJ2NvbHVtbnMnIChhcyBhbiAnYXJyYXkgb2YgdmVjdG9yIGNvbHVtbnMnLFxyXG4gKiAgeW91IGNhbiB1c2UgdGhpcyBmdW5jdGlvbiB0byBzb2x2ZSBhIHNldCBvZiAnc2VwYXJhYmxlJyBlcXVhdGlvbnMuPC9wPlxyXG4gKlxyXG4gKiAgPHA+Rm9yIGV4YW1wbGUgYSBkaXN0b3J0aW9uIGZ1bmN0aW9uIHdoZXJlICAgIDxjb2RlPnUgPSBVKHgseSkgIHYgPSBWKHgseSk8L2NvZGU+XHJcbiAqICBBbmQgdGhlIGZ1bmN0aW9ucyBVKCkgYW5kIFYoKSBoYXZlIHNlcGFyYXRlIGNvZWZmaWNpZW50cywgYnV0IGFyZSBiZWluZ1xyXG4gKiAgZ2VuZXJhdGVkIGZyb20gYSBjb21tb24geCx5LT51LHYgIGRhdGEgc2V0LjwvcD5cclxuICpcclxuICogIDxwPllvdSBjYW4gYWxzbyB1c2UgdGhlICd2ZWN0b3JzJyB0byBnZW5lcmF0ZSBhbiBpbnZlcnNlIG9mIHRoZSBnaXZlbiAnbWF0cml4J1xyXG4gKiAgdGhvdWdoIGFzIGEgJ2NvbHVtbiBmaXJzdCBhcnJheScgcmF0aGVyIHRoYW4gYSAncm93IGZpcnN0IGFycmF5Jy4gRm9yXHJcbiAqICBkZXRhaWxzIHNlZSB7QGxpbmsgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HYXVzcy1Kb3JkYW5fZWxpbWluYXRpb259PC9wPlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy51dGlsLmdhdXNzSm9yZGFuRWxpbWluYXRpb25cclxuICpcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvbWF0cml4XzhjX3NvdXJjZS5odG1sI2wwMDQ4MCBHYXVzc0pvcmRhbkVsaW1pbmF0aW9uKCl9IGF0XHJcbiAqIEltYWdlTWFnaWNrIHNvdXJjZS5cclxuICovXHJcbmNsYXNzIFNvbHZlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtBcnJheTxudW1iZXJbXT59IG1hdHJpeCBTcXVhcmUgbWF0cml4IHRvIGJlIHNvbHZlZC5cclxuICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcltdPn0gdmVjdG9ycyBBdWdtZW50IHJlc3VsdHMgbWF0cml4LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG1hdHJpeCwgdmVjdG9ycykge1xyXG4gICAgdGhpcy5zb2x2ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubWF0cml4ID0gbWF0cml4Lm1hcChyb3cgPT4gcm93LnNsaWNlKCkpO1xyXG4gICAgdGhpcy52ZWN0b3JzID0gdmVjdG9ycy5tYXAodmVjdG9yID0+IHZlY3Rvci5zbGljZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNvbHZlcyBnaXZlbiBtYXRyaXguXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bGVucy51dGlsLmdhdXNzSm9yZGFuRWxpbWluYXRpb24uU29sdmVyfVxyXG4gICAqL1xyXG4gIHNvbHZlKCkge1xyXG4gICAgaWYgKHRoaXMuc29sdmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmFsaWRhdGUoKTtcclxuXHJcbiAgICBjb25zdCBtYXRyaXggPSB0aGlzLm1hdHJpeDtcclxuICAgIGNvbnN0IHZlY3RvcnMgPSB0aGlzLnZlY3RvcnM7XHJcbiAgICBjb25zdCByYW5rID0gbWF0cml4Lmxlbmd0aDtcclxuICAgIGNvbnN0IG51bVZlY3RvcnMgPSB2ZWN0b3JzLmxlbmd0aDtcclxuICAgIGNvbnN0IGNvbHMgPSBuZXcgQXJyYXkocmFuaykuZmlsbCgwKTtcclxuICAgIGNvbnN0IHJvd3MgPSBuZXcgQXJyYXkocmFuaykuZmlsbCgwKTtcclxuICAgIGNvbnN0IHBpdm90cyA9IG5ldyBBcnJheShyYW5rKS5maWxsKDApO1xyXG4gICAgbGV0IGNvbCA9IDA7XHJcbiAgICBsZXQgcm93ID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbms7IGkrKykge1xyXG4gICAgICBsZXQgbWF4ID0gMDtcclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmFuazsgaisrKSB7XHJcbiAgICAgICAgaWYgKHBpdm90c1tqXSAhPT0gMSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCByYW5rOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKHBpdm90c1trXSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIGlmIChwaXZvdHNba10gPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNvbHZhYmxlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKG1hdHJpeFtqXVtrXSkgPj0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgbWF4ID0gTWF0aC5hYnMobWF0cml4W2pdW2tdKTtcclxuICAgICAgICAgICAgICByb3cgPSBqO1xyXG4gICAgICAgICAgICAgIGNvbCA9IGs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBpdm90c1tjb2xdKys7XHJcblxyXG4gICAgICBpZiAocm93ICE9PSBjb2wpIHtcclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHJhbms7IGsrKykge1xyXG4gICAgICAgICAgc3dhcChtYXRyaXgsIHJvdywgaywgY29sLCBrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbnVtVmVjdG9yczsgaysrKSB7XHJcbiAgICAgICAgICBzd2FwKHZlY3RvcnMsIGssIHJvdywgaywgY29sKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvd3NbaV0gPSByb3c7XHJcbiAgICAgIGNvbHNbaV0gPSBjb2w7XHJcblxyXG4gICAgICBpZiAobWF0cml4W2NvbF1bY29sXSA9PT0gMCkge1xyXG4gICAgICAgIHVuc29sdmFibGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHNjYWxlID0gcGVyY2VwdGlibGVSZWNpcHJvY2FsKG1hdHJpeFtjb2xdW2NvbF0pO1xyXG4gICAgICBtYXRyaXhbY29sXVtjb2xdID0gMTtcclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmFuazsgaisrKSB7XHJcbiAgICAgICAgbWF0cml4W2NvbF1bal0gKj0gc2NhbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtVmVjdG9yczsgaisrKSB7XHJcbiAgICAgICAgdmVjdG9yc1tqXVtjb2xdICo9IHNjYWxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJhbms7IGorKykge1xyXG4gICAgICAgIGlmIChqICE9PSBjb2wpIHtcclxuICAgICAgICAgIGxldCBzY2FsZSA9IG1hdHJpeFtqXVtjb2xdO1xyXG4gICAgICAgICAgbWF0cml4W2pdW2NvbF0gPSAwO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcmFuazsgaysrKSB7XHJcbiAgICAgICAgICAgIG1hdHJpeFtqXVtrXSAtPSBzY2FsZSAqIG1hdHJpeFtjb2xdW2tdO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbnVtVmVjdG9yczsgaysrKSB7XHJcbiAgICAgICAgICAgIHZlY3RvcnNba11bal0gLT0gc2NhbGUgKiB2ZWN0b3JzW2tdW2NvbF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IHJhbmsgLSAxOyBqID49IDA7IGotLSkge1xyXG4gICAgICBpZiAoY29sc1tqXSAhPT0gcm93c1tqXSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuazsgaSsrKSB7XHJcbiAgICAgICAgICBzd2FwKG1hdHJpeCwgaSwgcm93c1tqXSwgaSwgY29sc1tqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zb2x2ZWQgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhdWdtZW50IG1hdHJpeCAocmVzdWx0cylcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtBcnJheS48bnVtYmVyW10+fVxyXG4gICAqL1xyXG4gIGdldFZlY3RvcnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52ZWN0b3JzLm1hcCh2ZWN0b3IgPT4gdmVjdG9yLnNsaWNlKCkpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlcyBtYXRyaXggYW5kIHZlY3RvcnMuXHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqIEByZXR1cm5zIHtsZW5zLnV0aWwuZ2F1c3NKb3JkYW5FbGltaW5hdGlvbi5Tb2x2ZXJ9XHJcbiAgICovXHJcbiAgdmFsaWRhdGUoKSB7XHJcbiAgICBjb25zdCByYW5rID0gdGhpcy5tYXRyaXgubGVuZ3RoO1xyXG5cclxuICAgIHRoaXMubWF0cml4LmZvckVhY2gocm93ID0+IHtcclxuICAgICAgaWYgKHJvdy5sZW5ndGggIT09IHJhbmspIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBtdXN0IGJlIHNxdWFyZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnZlY3RvcnMuZm9yRWFjaCh2ZWN0b3IgPT4ge1xyXG4gICAgICBpZiAodmVjdG9yLmxlbmd0aCAhPT0gcmFuaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVmVjdG9ycyBtdXN0IGJlIHRoZSBzYW1lIGxlbmd0aCBhcyBtYXRyaXggcmFuaycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvbHZlcjsiLCJpbXBvcnQgKiBhcyBnYXVzc0pvcmRhbkVsaW1pbmF0aW9uIGZyb20gJy4vZ2F1c3Mtam9yZGFuLWVsaW1pbmF0aW9uJztcclxuXHJcbmV4cG9ydCB7Z2F1c3NKb3JkYW5FbGltaW5hdGlvbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGJsZW5kQ29sb3JzLFxyXG4gIHBlcmNlcHRpYmxlUmVjaXByb2NhbCxcclxuICBkZWcycmFkLFxyXG4gIHJhZDJkZWdcclxufSBmcm9tICcuL3V0aWwnOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCBnYXVzc0pvcmRhbkVsaW1pbmF0aW9uIGZyb20gJy4vZ2F1c3Mtam9yZGFuLWVsaW1pbmF0aW9uL2dhdXNzLWpvcmRhbi1lbGltaW5hdGlvbic7XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBmdW5jdGlvbnMgbmFtZXNwYWNlXHJcbiAqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy51dGlsXHJcbiAqL1xyXG5jb25zdCB1dGlsID0ge1xyXG4gIC4uLnV0aWxzLFxyXG4gIGdhdXNzSm9yZGFuRWxpbWluYXRpb25cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWw7IiwiaW1wb3J0IHtFUFNJTE9OfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogUmV0dXJuIDEveCB3aGVyZSB4IGlzIHBlcmNlcHRpYmxlIChub3QgdW5saW1pdGVkIG9yIGluZmluaXRlc2ltYWwpLlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy51dGlsXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3BpeGVsLWFjY2Vzc29yXzhoX3NvdXJjZS5odG1sI2wwMDIzNCBQZXJjZXB0aWJsZVJlY2lwcm9jYWwoKX1cclxuICogYXQgSW1hZ2VNYWdpY2sgc291cmNlLlxyXG4gKi9cclxuZnVuY3Rpb24gcGVyY2VwdGlibGVSZWNpcHJvY2FsKHgpIHtcclxuICBjb25zdCBzaWduID0geCA8IDAgPyAtMSA6IDE7XHJcblxyXG4gIGlmIChzaWduICogeCA+PSBFUFNJTE9OKSB7XHJcbiAgICByZXR1cm4gMSAvIHg7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2lnbiAvIEVQU0lMT047XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCbGVuZHMgdHdvIGNvbG9ycyBieSBnaXZlbiB3ZWlnaHRzLlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy51dGlsXHJcbiAqIEBwYXJhbSB7Q29sb3J9IGNvbG9yMSBGaXJzdCBjb2xvciB0byBibGVuZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHdlaWdodDEgRmlyc3QgY29sb3IncyB3ZWlnaHQuXHJcbiAqIEBwYXJhbSB7Q29sb3J9IGNvbG9yMiBTZWNvbmQgY29sb3IgdG8gYmxlbmQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfG51bGx9IFt3ZWlnaHQyXSBTZWNvbmQgY29sb3IncyB3ZWlnaHQuIElmIG5vdCBwYXNzZWQgLS0gd2lsbCBiZSBjYWxjdWxhdGVkIGFzIDEgLSB3ZWlnaHQxLlxyXG4gKiBAcmV0dXJucyB7Q29sb3J9IENvbG9yIGJsZW5kaW5nIHJlc3VsdC5cclxuICovXHJcbmZ1bmN0aW9uIGJsZW5kQ29sb3JzKGNvbG9yMSwgd2VpZ2h0MSwgY29sb3IyLCB3ZWlnaHQyID0gbnVsbCkge1xyXG4gIGlmICh3ZWlnaHQyID09PSBudWxsKSB7XHJcbiAgICB3ZWlnaHQyID0gMSAtIHdlaWdodDE7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29sb3IxLm1hcCgoY2hhbm5lbCwgaSkgPT4gTWF0aC5yb3VuZChjaGFubmVsICogd2VpZ2h0MSArIGNvbG9yMltpXSAqIHdlaWdodDIpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHJhZGlhbnMgdG8gZGVncmVlc1xyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy51dGlsXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYW5zXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiByYWQyZGVnKHJhZGlhbnMpIHtcclxuICByZXR1cm4gMTgwICogcmFkaWFucyAvIE1hdGguUEk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBkZWdyZWVzIHRvIHJhZGlhbnNcclxuICpcclxuICogQG1lbWJlck9mIGxlbnMudXRpbFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlc1xyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gZGVnMnJhZChkZWdyZWVzKSB7XHJcbiAgcmV0dXJuIE1hdGguUEkgKiBkZWdyZWVzIC8gMTgwO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGJsZW5kQ29sb3JzLFxyXG4gIHBlcmNlcHRpYmxlUmVjaXByb2NhbCxcclxuICByYWQyZGVnLFxyXG4gIGRlZzJyYWRcclxufTsiLCIvKipcclxuICogQHN1bW1hcnkgVmlydHVhbCB2aWV3cG9ydCBjbGFzcy5cclxuICpcclxuICogQGRlc2NyaXB0aW9uIFJlcHJlc2VudHMgaW1hZ2UncyB2aXJ0dWFsIHBvc2l0aW9uIGF0IGl0J3MgY29vcmRpbmF0ZSBzcGFjZS5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnNcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cuaW1hZ2VtYWdpY2sub3JnL1VzYWdlL2Jhc2ljcy8jcGFnZSBWaXJ0dWFsIGNhbnZhcyBvZmZzZXR9IGF0IEltYWdlTWFnaWNrIGRvY3MuXHJcbiAqIEB0dXRvcmlhbCAwMi4wNi52aXJ0dWFsLXZpZXdwb3J0XHJcbiAqL1xyXG5jbGFzcyBWaWV3cG9ydCB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geDEgTGVmdCBlZGdlIGNvb3JkaW5hdGUgb2Ygdmlld3BvcnQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkxIFRvcCBlZGdlIGNvb3JkaW5hdGUgIG9mIHZpZXdwb3J0LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4MiBSaWdodCBlZGdlIGNvb3JkaW5hdGUgb2Ygdmlld3BvcnQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkyIEJvdHRvbSBlZGdlIGNvb3JkaW5hdGUgb2Ygdmlld3BvcnQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoeDEsIHkxLCB4MiwgeTIpIHtcclxuICAgIC8qKlxyXG4gICAgICogTGVmdCBlZGdlIGNvb3JkaW5hdGUgb2Ygdmlld3BvcnQuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy54MSA9IHgxO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVG9wIGVkZ2UgY29vcmRpbmF0ZSBvZiB2aWV3cG9ydC5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMueTEgPSB5MTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJpZ2h0IGVkZ2UgY29vcmRpbmF0ZSBvZiB2aWV3cG9ydC5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMueDIgPSB4MjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJvdHRvbSBlZGdlIGNvb3JkaW5hdGUgb2Ygdmlld3BvcnQuXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnkyID0geTI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHZpcnR1YWwgdmlld3BvcnQgd2lkdGggLS0gc2FtZSBhcyBpbWFnZSBhY3R1YWwgd2lkdGguXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIHdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMueDIgLSB0aGlzLngxICsgMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdmlydHVhbCB2aWV3cG9ydCBoZWlnaHQgLS0gc2FtZSBhcyBpbWFnZSBhY3R1YWwgaGVpZ2h0LlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBoZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy55MiAtIHRoaXMueTEgKyAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB2aWV3cG9ydCBhcmVhLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBhcmVhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMud2lkdGgoKSAqIHRoaXMuaGVpZ2h0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdmlld3BvcnQgY29udGFpbnMgZ2l2ZW4gY29vcmRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge251bWJlcn0geVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGNvbnRhaW5zKHgsIHkpIHtcclxuICAgIHJldHVybiB4ID49IHRoaXMueDEgJiYgeCA8PSB0aGlzLngyICYmIHkgPj0gdGhpcy55MSAmJiB5IDw9IHRoaXMueTI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFeHBhbmRzIHZpZXdwb3J0IHRvIGNvbnRhaW4gZ2l2ZW4gY29vcmRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge251bWJlcn0geVxyXG4gICAqIEByZXR1cm5zIHtsZW5zLlZpZXdwb3J0fVxyXG4gICAqL1xyXG4gIGV4cGFuZCh4LCB5KSB7XHJcbiAgICB0aGlzLngxID0gTWF0aC5taW4odGhpcy54MSwgeCk7XHJcbiAgICB0aGlzLngyID0gTWF0aC5tYXgodGhpcy54MiwgeCk7XHJcbiAgICB0aGlzLnkxID0gTWF0aC5taW4odGhpcy55MSwgeSk7XHJcbiAgICB0aGlzLnkyID0gTWF0aC5tYXgodGhpcy55MiwgeSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb25lcyB2aWV3cG9ydCBpbnRvIG5ldyBpbnN0YW5jZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtsZW5zLlZpZXdwb3J0fVxyXG4gICAqL1xyXG4gIGNsb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMueDEsIHRoaXMueTEsIHRoaXMueDIsIHRoaXMueTIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRml4IGJvdW5kcyBhZnRlciBiZXN0IGZpdCB2aWV3cG9ydCBjYWxjdWxhdGlvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtsZW5zLlZpZXdwb3J0fVxyXG4gICAqL1xyXG4gIGZpeEJvdW5kcygpIHtcclxuICAgIHRoaXMueDEgPSBNYXRoLmZsb29yKHRoaXMueDEgLSAwLjUpO1xyXG4gICAgdGhpcy55MSA9IE1hdGguZmxvb3IodGhpcy55MSAtIDAuNSk7XHJcbiAgICB0aGlzLngyID0gTWF0aC5jZWlsKHRoaXMueDIgLSAwLjUpO1xyXG4gICAgdGhpcy55MiA9IE1hdGguY2VpbCh0aGlzLnkyIC0gMC41KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2NhbGVzIHZpZXdwb3J0IGJvdW5kcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVxyXG4gICAqIEByZXR1cm5zIHtsZW5zLlZpZXdwb3J0fVxyXG4gICAqL1xyXG4gIHNjYWxlKHNjYWxlKSB7XHJcbiAgICB0aGlzLngxID0gTWF0aC5yb3VuZCh0aGlzLngxICogc2NhbGUpO1xyXG4gICAgdGhpcy55MSA9IE1hdGgucm91bmQodGhpcy55MSAqIHNjYWxlKTtcclxuICAgIHRoaXMueDIgPSBNYXRoLnJvdW5kKHRoaXMueDIgKiBzY2FsZSk7XHJcbiAgICB0aGlzLnkyID0gTWF0aC5yb3VuZCh0aGlzLnkyICogc2NhbGUpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdmlld3BvcnQgb2Zmc2V0LlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge2xlbnMuVmlld3BvcnR9XHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICBsZXQgd2lkdGggPSB0aGlzLndpZHRoKCksXHJcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5oZWlnaHQoKTtcclxuICAgIHRoaXMueDEgPSAwO1xyXG4gICAgdGhpcy55MSA9IDA7XHJcbiAgICB0aGlzLngyID0gdGhpcy54MSArIHdpZHRoIC0gMTtcclxuICAgIHRoaXMueTIgPSB0aGlzLnkxICsgaGVpZ2h0IC0gMTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB2aWV3cG9ydCBvZmZzZXRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICAgKiBAcmV0dXJucyB7bGVucy5WaWV3cG9ydH1cclxuICAgKi9cclxuICBvZmZzZXQoeCwgeSkge1xyXG4gICAgdGhpcy54MSArPSB4O1xyXG4gICAgdGhpcy55MSArPSB5O1xyXG4gICAgdGhpcy54MiArPSB4O1xyXG4gICAgdGhpcy55MiArPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3cG9ydDsiLCIvKipcclxuICogVmlydHVhbCBwaXhlbCBtZXRob2RzLlxyXG4gKlxyXG4gKiBAcmVhZG9ubHlcclxuICogQGVudW0ge251bWJlcn1cclxuICogQG1lbWJlck9mIGxlbnNcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cuaW1hZ2VtYWdpY2sub3JnL1VzYWdlL21pc2MvI3ZpcnR1YWwtcGl4ZWwgVmlydHVhbCBwaXhlbCBkZXRhaWxzfSBhdCBJbWFnZU1hZ2ljayBkb2NzLlxyXG4gKiBAdHV0b3JpYWwgMDIuMDUudmlydHVhbC1waXhlbHMtYW5kLW1hdHRlXHJcbiAqL1xyXG5jb25zdCB2cHggPSB7XHJcbiAgLyoqXHJcbiAgICogVXNlIGltYWdlIGJhY2tncm91bmQgY29sb3IuXHJcbiAgICovXHJcbiAgQkFDS0dST1VORDogMSxcclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2VzdCBlZGdlIGNvbG9yLlxyXG4gICAqL1xyXG4gIEVER0U6IDMsXHJcblxyXG4gIC8qKlxyXG4gICAqIE1pcnJvciBlZmZlY3QuXHJcbiAgICovXHJcbiAgTUlSUk9SOiA0LFxyXG5cclxuICAvKipcclxuICAgKiBSYW5kb20gY29sb3IgZnJvbSBpbWFnZS5cclxuICAgKi9cclxuICBSQU5ET006IDUsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRpbGUgZWZmZWN0LlxyXG4gICAqL1xyXG4gIFRJTEU6IDYsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYW5zcGFyZW50IGNvbG9yLlxyXG4gICAqL1xyXG4gIFRSQU5TUEFSRU5UOiA3LFxyXG5cclxuICAvKipcclxuICAgKiBCbGFjayBjb2xvci5cclxuICAgKi9cclxuICBCTEFDSzogOSxcclxuXHJcbiAgLyoqXHJcbiAgICogR3JheSBjb2xvci5cclxuICAgKi9cclxuICBHUkFZOiAxMCxcclxuXHJcbiAgLyoqXHJcbiAgICogV2hpdGUgY29sb3IuXHJcbiAgICovXHJcbiAgV0hJVEU6IDExLFxyXG5cclxuICAvKipcclxuICAgKiBUaWxlIGVmZmVjdCBob3Jpem9udGFsbHksIGJhY2tncm91bmQgY29sb3IgdmVydGljYWxseS5cclxuICAgKi9cclxuICBIT1JJWk9OVEFMX1RJTEU6IDEyLFxyXG5cclxuICAvKipcclxuICAgKiBUaWxlIGVmZmVjdCB2ZXJ0aWNhbGx5LCBiYWNrZ3JvdW5kIGNvbG9yIGhvcml6b250YWxseS5cclxuICAgKi9cclxuICBWRVJUSUNBTF9USUxFOiAxMyxcclxuXHJcbiAgLyoqXHJcbiAgICogVGlsZSBlZmZlY3QgaG9yaXpvbnRhbGx5LCBjbG9zZXN0IGVkZ2UgY29sb3IgdmVydGljYWxseS5cclxuICAgKi9cclxuICBIT1JJWk9OVEFMX1RJTEVfRURHRTogMTQsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRpbGUgZWZmZWN0IHZlcnRpY2FsbHksIGNsb3Nlc3QgZWRnZSBjb2xvciBob3Jpem9udGFsbHkuXHJcbiAgICovXHJcbiAgVkVSVElDQUxfVElMRV9FREdFOiAxNVxyXG5cclxuICAvLyBUT0RPOiBpbXBsZW1lbnQgYW5kIGFkZCBDaGVja2VyIHRpbGUgYW4gZGl0aGVyIG1ldGhvZHNcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZweDsiXSwic291cmNlUm9vdCI6IiJ9