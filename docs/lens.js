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
var ReversePixelMapping = /*#__PURE__*/function () {
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


var Affine = /*#__PURE__*/function () {
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

var Arc = /*#__PURE__*/function () {
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


var Perspective = /*#__PURE__*/function () {
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var InvalidArgument = /*#__PURE__*/function (_LensException) {
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var InvalidArgumentsLength = /*#__PURE__*/function (_LensException) {
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
var LensException = /*#__PURE__*/function (_Error) {
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
}( /*#__PURE__*/_wrapNativeSuper(Error));

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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var UnsolvableMatrix = /*#__PURE__*/function (_LensException) {
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

var Filter = /*#__PURE__*/function () {
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


var AbstractImage = /*#__PURE__*/function () {
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Canvas = /*#__PURE__*/function (_AbstractImage) {
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var DomImage = /*#__PURE__*/function (_Canvas) {
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


var EWA = /*#__PURE__*/function () {
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

var Point = /*#__PURE__*/function () {
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var LeastSquares = /*#__PURE__*/function (_Solver) {
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


var Solver = /*#__PURE__*/function () {
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
var Viewport = /*#__PURE__*/function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW5zL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sZW5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlbnMvLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZGlzdG9ydC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRlci9kaXN0b3J0ZXIuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9kaXN0b3J0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9kaXN0b3J0ZXIvcmV2ZXJzZS1waXhlbC1tYXBwaW5nLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZGlzdG9ydGlvbi9hZmZpbmUuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9kaXN0b3J0aW9uL2FyYy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRpb24vZGlzdG9ydGlvbi5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRpb24vcGVyc3BlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9kaXN0b3J0cy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi9leGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9leGNlcHRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9leGNlcHRpb24vaW52YWxpZC1hcmd1bWVudC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi9pbnZhbGlkLWFyZ3VtZW50cy1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9leGNlcHRpb24vbGVucy1leGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9leGNlcHRpb24vdW5zb2x2YWJsZS1tYXRyaXguanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9maWx0ZXItcHJlc2V0cy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2ZpbHRlci9maWx0ZXItZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZmlsdGVyL2ZpbHRlci1uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvaW1hZ2UvYWJzdHJhY3QtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9pbWFnZS9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9pbWFnZS9kb20taW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9pbWFnZS9pbWFnZS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2ludGVycG9sYXRpb24uanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9sZW5zLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvbWl4aW5zL2NyZWF0ZXMtYmVzdC1maXQtdmlld3BvcnQtZnJvbS1hcGV4ZXMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9taXhpbnMvaW50ZXJwb2xhdGlvbi10cmFpdC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL21peGlucy9taXhpbnMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9taXhpbnMvdmlydHVhbC1waXhlbC10cmFpdC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3Jlc2FtcGxlci9lLXctYS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3Jlc2FtcGxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3Jlc2FtcGxlci9wb2ludC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3Jlc2FtcGxlci9yZXNhbXBsZXIuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi91dGlsL2dhdXNzLWpvcmRhbi1lbGltaW5hdGlvbi9nYXVzcy1qb3JkYW4tZWxpbWluYXRpb24uanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi91dGlsL2dhdXNzLWpvcmRhbi1lbGltaW5hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3V0aWwvZ2F1c3Mtam9yZGFuLWVsaW1pbmF0aW9uL2xlYXN0LXNxdWFyZXMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi91dGlsL2dhdXNzLWpvcmRhbi1lbGltaW5hdGlvbi9zb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi91dGlsL2luZGV4LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdXRpbC91dGlsLW5hbWVzcGFjZS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3ZpZXdwb3J0LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdnB4LmpzIl0sIm5hbWVzIjpbIkVQU0lMT04iLCJNQVhJTVVNX1ZBTFVFIiwiTV9QSTIiLCJNYXRoIiwiUEkiLCJNXzJQSSIsImRlZmF1bHRPcHRpb25zIiwiYmVzdEZpdCIsImZpbHRlciIsImZpbHRlclByZXNldHMiLCJST0JJRE9VWCIsInJlc2FtcGxlIiwiYXN5bmMiLCJvdXRwdXRTY2FsaW5nIiwiZGlzdG9ydCIsImltYWdlIiwiZGlzdG9ydGlvbiIsImFyZ3MiLCJvcHRpb25zIiwibWFrZU9wdGlvbnMiLCJmb3JjZUJlc3RGaXQiLCJkaXN0b3J0ZWQiLCJzeW5jIiwibWFrZURpc3RvcnRlciIsIm1ha2VSZXNhbXBsZXIiLCJzdXBlcnNhbXBsZSIsInNjYWxlU3VwZXJzYW1wbGVkIiwiZSIsIlByb21pc2UiLCJyZWplY3QiLCJ0aGVuIiwic3VwZXJzYW1wbGVkIiwic2NhbGUiLCJjb25zb2xlIiwid2FybiIsIk9iamVjdCIsImFzc2lnbiIsInJlc2FtcGxlciIsImRpc3QiLCJkaXN0b3J0ZXIiLCJ2aWV3cG9ydCIsInJzbSIsIm1ha2VGaWx0ZXIiLCJtYXR0ZUNvbG9yIiwic2xpY2UiLCJSZXZlcnNlUGl4ZWxNYXBwaW5nIiwibWFwcGVyIiwic2V0SW1hZ2UiLCJzZXRNYXBwZXIiLCJwcmVwYXJlVmlld3BvcnQiLCJ4MSIsImZsb29yIiwieTEiLCJ4MiIsInkyIiwiY2FudmFzIiwiZ2V0QmxhbmsiLCJzY2FsaW5nIiwicGVyZm9ybURpc3RvcnRpb25Bc3luYyIsInBlcmZvcm1EaXN0b3J0aW9uIiwieSIsIngiLCJzZXRQaXhlbENvbG9yIiwiZ2V0UmVzYW1wbGVkQ29sb3IiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImNsb25lIiwiaGFzQmVzdEZpdFZpZXdwb3J0IiwiZ2V0QmVzdEZpdFZpZXdwb3J0IiwibWFwIiwibWF0cml4IiwiQWZmaW5lIiwiZm9yd2FyZE1hdHJpeCIsImNvbnN0cnVjdG9yIiwiaW52ZXJ0QWZmaW5lTWF0cml4IiwiaGFzUGFydGlhbERlcml2YXRpdmVzIiwiaGFzQ29uc3RhbnRQYXJ0aWFsRGVyaXZhdGl2ZXMiLCJjb250cm9sUG9pbnRzIiwibGVuZ3RoIiwiSW52YWxpZEFyZ3VtZW50c0xlbmd0aCIsImxlYXN0U3F1YXJlcyIsIkxlYXN0U3F1YXJlcyIsImkiLCJ1IiwidiIsImFkZFRlcm1zIiwidmVjdG9ycyIsInNvbHZlIiwiZ2V0VmVjdG9ycyIsImNvbmNhdCIsImRldGVybWluYW50IiwicGVyY2VwdGlibGVSZWNpcHJvY2FsIiwicHJvdG90eXBlIiwiY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXMiLCJBcmMiLCJjMCIsImMxIiwiYzIiLCJjMyIsImM0IiwiYW5nbGVUb1dpZHRoIiwid2lkdGgiLCJyYWRpdXNUb0hlaWdodCIsImhlaWdodCIsImdldFVWIiwiYSIsImNhIiwiY29zIiwic2EiLCJzaW4iLCJ2cCIsIlZpZXdwb3J0IiwiZXhwYW5kIiwiY2VpbCIsImZpeEJvdW5kcyIsImF0YW4yIiwicm91bmQiLCJoeXBvdCIsIkludmFsaWRBcmd1bWVudCIsImRlZzJyYWQiLCJQZXJzcGVjdGl2ZSIsInAiLCJxIiwiciIsInJldmVyc2VNYXRyaXgiLCJkZW5vbWluYXRvciIsImludmVydFBlcnNwZWN0aXZlTWF0cml4IiwidmFsaWRpdHkiLCJhYnNSIiwiYWJzIiwiYWJzQzYiLCJhYnNDNyIsInBvdyIsImludmVyc2UiLCJhZmZpbmVCeUNvbnRyb2xQb2ludHMiLCJmcm9tQ29udHJvbFBvaW50cyIsImFmZmluZUJ5TWF0cml4Iiwic3giLCJyeSIsInJ4Iiwic3kiLCJ0eCIsInR5IiwiZnJvbUZvcndhcmRNYXRyaXgiLCJwZXJzcGVjdGl2ZUJ5Q29udHJvbFBvaW50cyIsInBlcnNwZWN0aXZlQnlNYXRyaXgiLCJhcmNCeUFyZ3VtZW50cyIsImZyb21Bcmd1bWVudHMiLCJkaXN0b3J0cyIsIkFGRklORSIsIkFGRklORV9QUk9KRUNUSU9OIiwiUEVSU1BFQ1RJVkUiLCJQRVJTUEVDVElWRV9QUk9KRUNUSU9OIiwiQVJDIiwicmVnaXN0ZXJEaXN0b3J0aW9uUmVzb2x2ZXIiLCJuYW1lIiwicmVzb2x2ZXIiLCJ1bnJlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyIiwiZXhjZXB0aW9uIiwiTGVuc0V4Y2VwdGlvbiIsIlVuc29sdmFibGVNYXRyaXgiLCJtZXNzYWdlIiwiRXJyb3IiLCJjYXB0dXJlU3RhY2tUcmFjZSIsInN0YWNrIiwiRmlsdGVyIiwiY3ViaWNCQyIsImJveCIsIlJPQklET1VYX1NIQVJQIiwiZnVuYyIsImZpbHRlckZ1bmN0aW9uTmFtZSIsImIiLCJjIiwicDAiLCJwMiIsInAzIiwicTAiLCJxMSIsInEyIiwicTMiLCJmaWx0ZXJGdW5jdGlvbnMiLCJmaWx0ZXJGdW5jdGlvbiIsIndpbmRvd2luZ0Z1bmN0aW9uIiwic3VwcG9ydCIsImJsdXIiLCJ3aW5kb3dTdXBwb3J0IiwieEJsdXIiLCJ3aW5kb3ciLCJub3RJbXBsZW1lbnRlZCIsIm1ldGhvZCIsIkFic3RyYWN0SW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2aXJ0dWFsUGl4ZWxNZXRob2QiLCJ2cHgiLCJUUkFOU1BBUkVOVCIsInF1YW50dW1SYW5nZSIsImludGVycG9sYXRpb25NZXRob2QiLCJpbnRlcnBvbGF0aW9uIiwiSU5URUdFUiIsImdldEltYWdlUGl4ZWxDb2xvciIsImdldFZpcnR1YWxQaXhlbENvbG9yIiwiY29sb3IiLCJzZXRJbWFnZVBpeGVsQ29sb3IiLCJibGFuayIsInByZXBhcmVCbGFuayIsInJlc2l6ZWQiLCJyZXNpemUiLCJ2aXJ0dWFsUGl4ZWxUcmFpdCIsImludGVycG9sYXRpb25UcmFpdCIsIkNhbnZhcyIsImltYWdlRGF0YSIsImdldENvbnRleHQiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwib2Zmc2V0IiwiQXJyYXkiLCJjYWxsIiwiZm9yRWFjaCIsImNoYW5uZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwdXRJbWFnZURhdGEiLCJkcmF3SW1hZ2UiLCJkc3QiLCJEb21JbWFnZSIsIkltYWdlIiwib25sb2FkIiwic3JjIiwidG9EYXRhVVJMIiwiQVZFUkFHRSIsIkFWRVJBR0VfOSIsIkFWRVJBR0VfMTYiLCJCQUNLR1JPVU5EIiwiVkVSU0lPTiIsInByb2Nlc3MiLCJsZW5zIiwibWl4aW5zIiwidXRpbCIsInUxIiwidjEiLCJ1MiIsInYyIiwiZm9yd2FyZE1hcCIsImFwZXgiLCJnZXRJbnRlcnBvbGF0ZWRQaXhlbENvbG9yIiwibWV0aG9kcyIsImludGVycG9sYXRlQXZlcmFnZSIsImdldFBpeGVsQ29sb3IiLCJjb3VudCIsInN0YXJ0WCIsInN0YXJ0WSIsImVuZFgiLCJlbmRZIiwiWSIsIlgiLCJnYW1tYSIsImdldEVkZ2VDb29yZHMiLCJtYXgiLCJtaW4iLCJnZXRUaWxlQ29vcmRzIiwidnB4TWV0aG9kcyIsIkVER0UiLCJNSVJST1IiLCJUSUxFIiwiQkxBQ0siLCJXSElURSIsImZpbGwiLCJHUkFZIiwiSE9SSVpPTlRBTF9USUxFIiwiSE9SSVpPTlRBTF9USUxFX0VER0UiLCJWRVJUSUNBTF9USUxFIiwiVkVSVElDQUxfVElMRV9FREdFIiwiUkFORE9NIiwicmFuZG9tIiwiV0VJR0hUX0xPT0tVUF9UQUJMRV9XSURUSCIsImJ1aWxkV2VpZ2h0TG9va3VwVGFibGUiLCJ0YWJsZSIsInJTY2FsZSIsInNxcnQiLCJRIiwiZ2V0V2VpZ2h0IiwiY2xhbXBUb1F1YW50dW0iLCJ2YWx1ZSIsImNsYW1wRWxsaXBzZUF4ZXMiLCJkdXgiLCJkdXkiLCJkdngiLCJkdnkiLCJkIiwiYWEiLCJiYiIsImNjIiwiZGQiLCJuMTEiLCJuMTIiLCJuMjEiLCJuMjIiLCJkZXQiLCJ0d2ljZV9kZXQiLCJmcm9iZW5pdXNfc3F1YXJlZCIsImRpc2NyaW1pbmFudCIsInNxcnRfZGlzY3JpbWluYW50IiwiczFzMSIsInMyczIiLCJzMXMxbWludXNuMTEiLCJzMXMxbWludXNuMjIiLCJzMXMxbWludXNuMTFfc3F1YXJlZCIsInMxczFtaW51c24yMl9zcXVhcmVkIiwidGVtcF91MTEiLCJ0ZW1wX3UyMSIsIm5vcm0iLCJ1MTEiLCJ1MjEiLCJtYWpvcl9tYWciLCJtaW5vcl9tYWciLCJtYWpvcl94IiwibWFqb3JfeSIsIm1pbm9yX3giLCJtaW5vcl95IiwiRVdBIiwicmVzaXplRmlsdGVyIiwid2VpZ2h0TG9va3VwVGFibGUiLCJpbWFnZVZpZXdwb3J0IiwiaW1hZ2VBcmVhIiwiaW1hZ2VWaXJ0dWFsUGl4ZWxNZXRob2QiLCJpbWFnZUF2ZXJhZ2VDb2xvciIsIkEiLCJCIiwiQyIsIkYiLCJ1TGltaXQiLCJ2TGltaXQiLCJ1V2lkdGgiLCJzbG9wZSIsImVsbGlwc2VJc1NldFVwIiwibGltaXRSZWFjaGVkIiwiZ2V0VmFsaWRpdHkiLCJyZXZlcnNlTWFwIiwic2V0dXBFbGxpcHNlT25jZSIsImdldFBhcnRpYWxEZXJpdmF0aXZlcyIsInNldHVwRWxsaXBzZSIsImdldFdlaWdodGVkQXZlcmFnZSIsImJsZW5kQ29sb3JzIiwiYXJlYSIsImRlcml2YXRpdmVzIiwiZGVyaXZhdGl2ZSIsImluaXRFbGxpcHNlIiwic2NhbGVFbGxpcHNlIiwidTAiLCJ2MCIsImRvZXNudE5lZWRSZXNhbXBsaW5nIiwiZ2V0SW1hZ2VBdmVyYWdlQ29sb3IiLCJkaXZpc29yTSIsImRpdmlzb3JDIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYWxwaGEiLCJ1dyIsIkREUSIsInVzdGFydCIsInVlbmQiLCJVIiwiViIsIkRRIiwid2VpZ2h0IiwiZyIsIm91dE9mSW1hZ2VCb3VuZHMiLCJnZXRBdmVyYWdlQ29sb3IiLCJQb2ludCIsImdhdXNzSm9yZGFuRWxpbWluYXRpb24iLCJTb2x2ZXIiLCJyYW5rIiwibnVtVmVjdG9ycyIsInB1c2giLCJ0ZXJtcyIsInJlc3VsdHMiLCJqIiwic3dhcCIsImFycmF5Iiwicm93MSIsImNvbDEiLCJyb3cyIiwiY29sMiIsInVuc29sdmFibGUiLCJzb2x2ZWQiLCJyb3ciLCJ2ZWN0b3IiLCJ2YWxpZGF0ZSIsImNvbHMiLCJyb3dzIiwicGl2b3RzIiwiY29sIiwiayIsInV0aWxzIiwic2lnbiIsImNvbG9yMSIsIndlaWdodDEiLCJjb2xvcjIiLCJ3ZWlnaHQyIiwicmFkMmRlZyIsInJhZGlhbnMiLCJkZWdyZWVzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZB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QUpGOztBQU1WOzs7QUFHQTZCLE1BQUksRUFBRSxDQVRJOztBQVdWOzs7QUFHQUMsUUFBTSxFQUFFLENBZEU7O0FBZ0JWOzs7QUFHQVUsUUFBTSxFQUFFLENBbkJFOztBQXFCVjs7O0FBR0FULE1BQUksRUFBRSxDQXhCSTs7QUEwQlY7OztBQUdBckUsYUFBVyxFQUFFLENBN0JIOztBQStCVjs7O0FBR0FzRSxPQUFLLEVBQUUsQ0FsQ0c7O0FBb0NWOzs7QUFHQUcsTUFBSSxFQUFFLEVBdkNJOztBQXlDVjs7O0FBR0FGLE9BQUssRUFBRSxFQTVDRzs7QUE4Q1Y7OztBQUdBRyxpQkFBZSxFQUFFLEVBakRQOztBQW1EVjs7O0FBR0FFLGVBQWEsRUFBRSxFQXRETDs7QUF3RFY7OztBQUdBRCxzQkFBb0IsRUFBRSxFQTNEWjs7QUE2RFY7OztBQUdBRSxvQkFBa0IsRUFBRSxFQWhFVixDQWtFVjs7QUFsRVUsQ0FBWjtBQXFFZTlFLGtFQUFmLEUiLCJmaWxlIjoibGVucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxlbnNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGVuc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2xlbnMuanNcIik7XG4iLCIvKipcclxuICogQHR5cGUge251bWJlcn1cclxuICogQG1lbWJlck9mIGxlbnNcclxuICovXHJcbmNvbnN0IEVQU0lMT04gPSAxLjBlLTEyO1xyXG4vKipcclxuICogQHR5cGUge251bWJlcn1cclxuICogQG1lbWJlck9mIGxlbnNcclxuICovXHJcbmNvbnN0IE1BWElNVU1fVkFMVUUgPSAxLjc5NzY5MzEzNDg2MjMxNTcwRSszMDg7XHJcblxyXG4vKipcclxuICogUGkvMlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKi9cclxuY29uc3QgTV9QSTIgPSBNYXRoLlBJIC8gMjtcclxuXHJcbi8qKlxyXG4gKiBQaSAqIDJcclxuICpcclxuICogQG1lbWJlck9mIGxlbnNcclxuICogQHR5cGUge251bWJlcn1cclxuICovXHJcbmNvbnN0IE1fMlBJID0gTWF0aC5QSSAqIDI7XHJcblxyXG5leHBvcnQge1xyXG4gIEVQU0lMT04sXHJcbiAgTUFYSU1VTV9WQUxVRSxcclxuICBNX1BJMixcclxuICBNXzJQSVxyXG59OyIsImltcG9ydCAqIGFzIGRpc3RvcnRlciBmcm9tIFwiLi9kaXN0b3J0ZXJcIjtcclxuaW1wb3J0ICogYXMgcmVzYW1wbGVyIGZyb20gXCIuL3Jlc2FtcGxlclwiO1xyXG5pbXBvcnQgZmlsdGVyUHJlc2V0cyBmcm9tICcuL2ZpbHRlci1wcmVzZXRzJztcclxuXHJcbmxldCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICBiZXN0Rml0OiBmYWxzZSxcclxuICBmaWx0ZXI6IGZpbHRlclByZXNldHMuUk9CSURPVVgsXHJcbiAgcmVzYW1wbGU6IHRydWUsXHJcbiAgYXN5bmM6IHRydWUsXHJcbiAgb3V0cHV0U2NhbGluZzogMVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAbmFtZSBkaXN0b3J0XHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqIEB2YXJpYXRpb24gMlxyXG4gKlxyXG4gKiBAcGFyYW0ge0ltYWdlSW50ZXJmYWNlfSBpbWFnZVxyXG4gKiBAcGFyYW0ge0Rpc3RvcnRpb25JbnRlcmZhY2V9IGRpc3RvcnRpb25cclxuICogQHBhcmFtIHtEaXN0b3J0aW9uT3B0aW9uc30gb3B0aW9uc1xyXG4gKlxyXG4gKiBAcmV0dXJucyB7SW1hZ2VJbnRlcmZhY2V8UHJvbWlzZTxJbWFnZUludGVyZmFjZT59XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFBlcmZvcm1zIGRpc3RvcnRpb24gb2YgaW1hZ2VcclxuICpcclxuICogQG1lbWJlck9mIGxlbnNcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gaW1hZ2VcclxuICogQHBhcmFtIHtsZW5zLmRpc3RvcnRzfGxlbnN+ZGlzdG9ydGlvblJlc29sdmVyfSBkaXN0b3J0aW9uXHJcbiAqIEBwYXJhbSB7YXJyYXl9IGFyZ3NcclxuICogQHBhcmFtIHtEaXN0b3J0aW9uT3B0aW9uc30gW29wdGlvbnNdXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtJbWFnZUludGVyZmFjZXxQcm9taXNlPEltYWdlSW50ZXJmYWNlPn1cclxuICovXHJcbmZ1bmN0aW9uIGRpc3RvcnQoaW1hZ2UsIGRpc3RvcnRpb24sIGFyZ3MsIG9wdGlvbnMgPSB7fSkge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAodHlwZW9mIGRpc3RvcnRpb24gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgZGlzdG9ydGlvbiAgPSBkaXN0b3J0aW9uKGFyZ3MsIGltYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wdGlvbnMgICAgID0gYXJncyB8fCB7fTtcclxuICAgIH1cclxuXHJcbiAgICBvcHRpb25zID0gbWFrZU9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKGRpc3RvcnRpb24uZm9yY2VCZXN0Rml0KSB7XHJcbiAgICAgIG9wdGlvbnMuYmVzdEZpdCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRpc3RvcnRlZCA9IHN5bmMoXHJcbiAgICAgIG1ha2VEaXN0b3J0ZXIoXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgZGlzdG9ydGlvbixcclxuICAgICAgICBtYWtlUmVzYW1wbGVyKGltYWdlLCBkaXN0b3J0aW9uLCBvcHRpb25zKSxcclxuICAgICAgICBvcHRpb25zXHJcbiAgICAgICkuZGlzdG9ydCgpXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChvcHRpb25zLnN1cGVyc2FtcGxlICYmIG9wdGlvbnMuc3VwZXJzYW1wbGUgIT09IDEpIHtcclxuICAgICAgcmV0dXJuIHNjYWxlU3VwZXJzYW1wbGVkKGRpc3RvcnRlZCwgMSAvIG9wdGlvbnMuc3VwZXJzYW1wbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaXN0b3J0ZWQ7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5hc3luYykge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTeW5jIEltYWdlSW50ZXJmYWNlIGludGVybmFsIGRhdGEgc3RvcmFnZSB3aXRoIGltYWdlIG9iamVjdC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZXxQcm9taXNlPEltYWdlSW50ZXJmYWNlPn0gZGlzdG9ydGVkXHJcbiAqIEByZXR1cm5zIHtJbWFnZUludGVyZmFjZXxQcm9taXNlPEltYWdlSW50ZXJmYWNlPn1cclxuICovXHJcbmZ1bmN0aW9uIHN5bmMoZGlzdG9ydGVkKSB7XHJcbiAgaWYgKGRpc3RvcnRlZCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgIHJldHVybiBkaXN0b3J0ZWQudGhlbihkaXN0b3J0ZWQgPT4gc3luYyhkaXN0b3J0ZWQpKTtcclxuICB9XHJcblxyXG4gIGlmICgnc3luYycgaW4gZGlzdG9ydGVkICYmIHR5cGVvZiBkaXN0b3J0ZWQuc3luYyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIGRpc3RvcnRlZC5zeW5jKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGlzdG9ydGVkO1xyXG59XHJcblxyXG4vKipcclxuICogU2NhbGVzIHN1cGVyc2FtcGxlZCBpbWFnZSBiYWNrIHRvIG5vcm1hbCBzaXplLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0ltYWdlSW50ZXJmYWNlfFByb21pc2U8SW1hZ2VJbnRlcmZhY2U+fSBzdXBlcnNhbXBsZWRcclxuICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlXHJcbiAqIEByZXR1cm5zIHtJbWFnZUludGVyZmFjZXxQcm9taXNlPEltYWdlSW50ZXJmYWNlPn1cclxuICovXHJcbmZ1bmN0aW9uIHNjYWxlU3VwZXJzYW1wbGVkKHN1cGVyc2FtcGxlZCwgc2NhbGUpIHtcclxuICBpZiAoc3VwZXJzYW1wbGVkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgcmV0dXJuIHN1cGVyc2FtcGxlZC50aGVuKHN1cGVyc2FtcGxlZCA9PiBzY2FsZVN1cGVyc2FtcGxlZChzdXBlcnNhbXBsZWQsIHNjYWxlKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoJ3NjYWxlJyBpbiBzdXBlcnNhbXBsZWQgJiYgdHlwZW9mIHN1cGVyc2FtcGxlZC5zY2FsZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIHN1cGVyc2FtcGxlZC5zY2FsZShzY2FsZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUud2FybihgTWV0aG9kICdzY2FsZSgpJyBub3QgZm91bmQgaW4gaW1hZ2Ugb2JqZWN0LiBObyBzY2FsaW5nIHBlcmZvcm1lZC5gKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzdXBlcnNhbXBsZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyB2YWxpZCBvcHRpb25zIGZvciBkaXN0b3J0aW9uXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbk9wdGlvbnN9IG9wdGlvbnNcclxuICogQHJldHVybnMge0Rpc3RvcnRpb25PcHRpb25zfVxyXG4gKi9cclxuZnVuY3Rpb24gbWFrZU9wdGlvbnMob3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XHJcblxyXG4gIGlmIChvcHRpb25zLnN1cGVyc2FtcGxlKSB7XHJcbiAgICBvcHRpb25zLm91dHB1dFNjYWxpbmcgPSBvcHRpb25zLnN1cGVyc2FtcGxlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9wdGlvbnM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyBpbWFnZSBkaXN0b3J0ZXJcclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gaW1hZ2VcclxuICogQHBhcmFtIHtEaXN0b3J0aW9uSW50ZXJmYWNlfSBkaXN0b3J0aW9uXHJcbiAqIEBwYXJhbSB7UmVzYW1wbGVySW50ZXJmYWNlfSByZXNhbXBsZXJcclxuICogQHBhcmFtIHtEaXN0b3J0aW9uT3B0aW9uc30gb3B0aW9uc1xyXG4gKiBAcmV0dXJucyB7UmV2ZXJzZVBpeGVsTWFwcGluZ31cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VEaXN0b3J0ZXIoaW1hZ2UsIGRpc3RvcnRpb24sIHJlc2FtcGxlciwgb3B0aW9ucykge1xyXG4gIGNvbnN0IGRpc3QgPSBuZXcgZGlzdG9ydGVyLlJldmVyc2VQaXhlbE1hcHBpbmcoaW1hZ2UsIGRpc3RvcnRpb24sIHJlc2FtcGxlcik7XHJcbiAgZGlzdC5hc3luYyA9ICEhb3B0aW9ucy5hc3luYztcclxuICBkaXN0LmJlc3RGaXQgPSAhIW9wdGlvbnMuYmVzdEZpdDtcclxuXHJcbiAgaWYgKG9wdGlvbnMudmlld3BvcnQpIHtcclxuICAgIGRpc3Qudmlld3BvcnQgPSBvcHRpb25zLnZpZXdwb3J0O1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbnMub3V0cHV0U2NhbGluZykge1xyXG4gICAgZGlzdC5vdXRwdXRTY2FsaW5nID0gb3B0aW9ucy5vdXRwdXRTY2FsaW5nO1xyXG5cclxuICAgIGlmIChvcHRpb25zLnN1cGVyc2FtcGxlKSB7XHJcbiAgICAgIGRpc3Quc3VwZXJzYW1wbGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpc3Q7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyByZXNhbXBsZXJcclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gaW1hZ2VcclxuICogQHBhcmFtIHtEaXN0b3J0aW9uSW50ZXJmYWNlfSBkaXN0b3J0aW9uXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbk9wdGlvbnN9IG9wdGlvbnNcclxuICogQHJldHVybnMge1Jlc2FtcGxlckludGVyZmFjZX1cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VSZXNhbXBsZXIoaW1hZ2UsIGRpc3RvcnRpb24sIG9wdGlvbnMpIHtcclxuICBsZXQgcnNtO1xyXG5cclxuICBpZiAob3B0aW9ucy5yZXNhbXBsZXIpIHtcclxuICAgIHJzbSA9IG9wdGlvbnMucmVzYW1wbGVyO1xyXG4gIH0gZWxzZSBpZiAob3B0aW9ucy5yZXNhbXBsZSkge1xyXG4gICAgcnNtID0gbmV3IHJlc2FtcGxlci5FV0EobWFrZUZpbHRlcihvcHRpb25zKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJzbSA9IG5ldyByZXNhbXBsZXIuUG9pbnQoKTtcclxuICB9XHJcblxyXG4gIGlmIChvcHRpb25zLm1hdHRlQ29sb3IpIHtcclxuICAgIHJzbS5tYXR0ZUNvbG9yID0gb3B0aW9ucy5tYXR0ZUNvbG9yLnNsaWNlKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcnNtO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZXMgZmlsdGVyXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbk9wdGlvbnN9IG9wdGlvbnNcclxuICogQHJldHVybnMge0ZpbHRlckludGVyZmFjZX1cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VGaWx0ZXIob3B0aW9ucykge1xyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXN0b3J0OyIsImltcG9ydCBSZXZlcnNlUGl4ZWxNYXBwaW5nIGZyb20gJy4vcmV2ZXJzZS1waXhlbC1tYXBwaW5nJztcclxuXHJcbi8qKlxyXG4gKiBEaXN0b3J0ZXIgbmFtZXNwYWNlXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5kaXN0b3J0ZXJcclxuICovXHJcbmNvbnN0IGRpc3RvcnRlciA9IHtcclxuICBSZXZlcnNlUGl4ZWxNYXBwaW5nXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXN0b3J0ZXI7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIFJldmVyc2VQaXhlbE1hcHBpbmd9IGZyb20gJy4vcmV2ZXJzZS1waXhlbC1tYXBwaW5nJzsiLCIvKipcclxuICogUmV2ZXJzZSBwaXhlbCBtYXBwaW5nLlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy5kaXN0b3J0ZXJcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cuaW1hZ2VtYWdpY2sub3JnL1VzYWdlL2Rpc3RvcnRzLyNtYXBwaW5nIFJldmVyc2UgcGl4ZWwgbWFwcGluZyBkZXRhaWxzIGF0IEltYWdlTWFnaWNrIGRvY3N9XHJcbiAqIEB0dXRvcmlhbCAwMi4wMi5yZXZlcnNlLXBpeGVsLW1hcHBpbmdcclxuICovXHJcbmNsYXNzIFJldmVyc2VQaXhlbE1hcHBpbmcge1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SW1hZ2VJbnRlcmZhY2V9IGltYWdlIEltYWdlIHRvIGJlIGRpc3RvcnRlZC5cclxuICAgKiBAcGFyYW0ge0Rpc3RvcnRpb25JbnRlcmZhY2V9IGRpc3RvcnRpb24gRGlzdG9ydGlvbiB0byBiZSBwZXJmb3JtZWQuXHJcbiAgICogQHBhcmFtIHtSZXNhbXBsZXJJbnRlcmZhY2V9IHJlc2FtcGxlciBDb2xvciByZXNhbXBsZXIuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoaW1hZ2UsIGRpc3RvcnRpb24sIHJlc2FtcGxlcikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbWFnZSBiZWluZyBkaXN0b3J0ZWQuXHJcbiAgICAgKiBAdHlwZSB7SW1hZ2VJbnRlcmZhY2V9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3RvcnRpb24uXHJcbiAgICAgKiBAdHlwZSB7RGlzdG9ydGlvbkludGVyZmFjZX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5tYXBwZXIgPSBkaXN0b3J0aW9uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzYW1wbGVyLlxyXG4gICAgICogQHR5cGUge1Jlc2FtcGxlckludGVyZmFjZX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXNhbXBsZXIgPSByZXNhbXBsZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdHJ5IHRvIGNhbGN1bGF0ZSBiZXN0IGZpdCB2aWV3cG9ydC5cclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB0aGlzLmJlc3RGaXQgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJyaWRlIG91dHB1dCB2aWV3cG9ydC5cclxuICAgICAqIEB0eXBlIHtsZW5zLlZpZXdwb3J0fG51bGx9XHJcbiAgICAgKi9cclxuICAgIHRoaXMudmlld3BvcnQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUnVuIGRpc3RvcnRpb24gYXN5bmMuXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5hc3luYyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgaW1hZ2Ugc2NhbGluZy5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMub3V0cHV0U2NhbGluZyA9IDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXN0b3J0cyBpbWFnZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEltYWdlSW50ZXJmYWNlPnxJbWFnZUludGVyZmFjZX0gTmV3IGluc3RhbmNlIG9mIEltYWdlSW50ZXJmYWNlIHdpdGggZGlzdG9ydGVkIGltYWdlIG9yIFByb21pc2VcclxuICAgKiB0aGF0IHJlc29sdmVzIGRpc3RvcnRlZCBJbWFnZUludGVyZmFjZSBpbnN0YW5jZS5cclxuICAgKi9cclxuICBkaXN0b3J0KCkge1xyXG4gICAgdGhpcy5yZXNhbXBsZXIuc2V0SW1hZ2UodGhpcy5pbWFnZSk7XHJcbiAgICB0aGlzLnJlc2FtcGxlci5zZXRNYXBwZXIodGhpcy5tYXBwZXIpO1xyXG5cclxuICAgIGNvbnN0IHZpZXdwb3J0ID0gdGhpcy5wcmVwYXJlVmlld3BvcnQoKTtcclxuICAgIGNvbnN0IHgxID0gTWF0aC5mbG9vcih2aWV3cG9ydC54MSk7XHJcbiAgICBjb25zdCB5MSA9IE1hdGguZmxvb3Iodmlld3BvcnQueTEpO1xyXG4gICAgY29uc3QgeDIgPSBNYXRoLmZsb29yKHZpZXdwb3J0LngyKTtcclxuICAgIGNvbnN0IHkyID0gTWF0aC5mbG9vcih2aWV3cG9ydC55Mik7XHJcblxyXG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5pbWFnZS5nZXRCbGFuayh2aWV3cG9ydCk7XHJcblxyXG4gICAgdGhpcy5yZXNhbXBsZXIuc2NhbGluZyA9IDEgLyB0aGlzLm91dHB1dFNjYWxpbmc7XHJcblxyXG4gICAgaWYgKGNhbnZhcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgcmV0dXJuIGNhbnZhcy50aGVuKGNhbnZhcyA9PiB0aGlzLnBlcmZvcm1EaXN0b3J0aW9uQXN5bmMoY2FudmFzLCB4MSwgeTEsIHgyLCB5MikpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmFzeW5jKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBlcmZvcm1EaXN0b3J0aW9uQXN5bmMoY2FudmFzLCB4MSwgeTEsIHgyLCB5Mik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucGVyZm9ybURpc3RvcnRpb24oY2FudmFzLCB4MSwgeTEsIHgyLCB5Mik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gY2FudmFzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHgxXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkxXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHgyXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkyXHJcbiAgICogQHJldHVybnMge0ltYWdlSW50ZXJmYWNlfVxyXG4gICAqL1xyXG4gIHBlcmZvcm1EaXN0b3J0aW9uKGNhbnZhcywgeDEsIHkxLCB4MiwgeTIpIHtcclxuICAgIGZvciAobGV0IHkgPSB5MTsgeSA8PSB5MjsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSB4MTsgeCA8PSB4MjsgeCsrKSB7XHJcbiAgICAgICAgY2FudmFzLnNldFBpeGVsQ29sb3IoeCwgeSwgdGhpcy5yZXNhbXBsZXIuZ2V0UmVzYW1wbGVkQ29sb3IoeCArIDAuNSwgeSArIDAuNSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuICB9XHJcblxyXG4gIHBlcmZvcm1EaXN0b3J0aW9uQXN5bmMoLi4uYXJncykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHRoaXMucGVyZm9ybURpc3RvcnRpb24oLi4uYXJncyksIDApKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICogQHJldHVybnMge2xlbnMuVmlld3BvcnR9XHJcbiAgICovXHJcbiAgcHJlcGFyZVZpZXdwb3J0KCkge1xyXG4gICAgbGV0IHZpZXdwb3J0O1xyXG5cclxuICAgIGlmICh0aGlzLnZpZXdwb3J0KSB7XHJcbiAgICAgIHZpZXdwb3J0ID0gdGhpcy52aWV3cG9ydC5jbG9uZSgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmJlc3RGaXQgJiYgdGhpcy5tYXBwZXIuaGFzQmVzdEZpdFZpZXdwb3J0KSB7XHJcbiAgICAgIHZpZXdwb3J0ID0gdGhpcy5tYXBwZXIuZ2V0QmVzdEZpdFZpZXdwb3J0KHRoaXMuaW1hZ2Uudmlld3BvcnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmlld3BvcnQgPSB0aGlzLmltYWdlLnZpZXdwb3J0LmNsb25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmlld3BvcnQuc2NhbGUodGhpcy5vdXRwdXRTY2FsaW5nKTtcclxuXHJcbiAgICByZXR1cm4gdmlld3BvcnQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZlcnNlUGl4ZWxNYXBwaW5nOyIsImltcG9ydCBMZWFzdFNxdWFyZXMgZnJvbSBcIi4uL3V0aWwvZ2F1c3Mtam9yZGFuLWVsaW1pbmF0aW9uL2xlYXN0LXNxdWFyZXNcIjtcclxuaW1wb3J0IGNyZWF0ZXNCZXN0Rml0Vmlld3BvcnRGcm9tQXBleGVzIGZyb20gJy4uL21peGlucy9jcmVhdGVzLWJlc3QtZml0LXZpZXdwb3J0LWZyb20tYXBleGVzJztcclxuaW1wb3J0IEludmFsaWRBcmd1bWVudHNMZW5ndGggZnJvbSAnLi4vZXhjZXB0aW9uL2ludmFsaWQtYXJndW1lbnRzLWxlbmd0aCc7XHJcbmltcG9ydCB7cGVyY2VwdGlibGVSZWNpcHJvY2FsfSBmcm9tIFwiLi4vdXRpbC91dGlsXCI7XHJcblxyXG4vKipcclxuICogUHJvamVjdCBjb29yZGluYXRlcyB1c2luZyBwcm9qZWN0aW9uIG1hdHJpeC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbWF0cml4IEFmZmluZSBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtQb2ludH0gTWFwcGVkIGNvb3JkcyBwYWlyLlxyXG4gKi9cclxuZnVuY3Rpb24gbWFwKHgsIHksIG1hdHJpeCkge1xyXG4gIHJldHVybiBbXHJcbiAgICBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzFdICogeSArIG1hdHJpeFsyXSxcclxuICAgIG1hdHJpeFszXSAqIHggKyBtYXRyaXhbNF0gKiB5ICsgbWF0cml4WzVdXHJcbiAgXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFmZmluZSBkaXN0b3J0aW9uLlxyXG4gKlxyXG4gKiBAaW1wbGVtZW50cyB7RGlzdG9ydGlvbkludGVyZmFjZX1cclxuICogQG1lbWJlck9mIGxlbnMuZGlzdG9ydGlvblxyXG4gKiBAbWl4ZXMgbGVucy5taXhpbnMuY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXNcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cuaW1hZ2VtYWdpY2sub3JnL1VzYWdlL2Rpc3RvcnRzLyNhZmZpbmUgQWZmaW5lIGRpc3RvcnRpb24gZGV0YWlscyBhdCBJbWFnZU1hZ2ljayBkb2NzfVxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMjQ0MyBBZmZpbmUgZGlzdG9ydGlvbiBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAqIEB0dXRvcmlhbCAwMy4wMS5hZmZpbmVcclxuICovXHJcbmNsYXNzIEFmZmluZSB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSBtYXRyaXggQWZmaW5lIG1hdHJpeC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcclxuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xyXG4gICAgdGhpcy5mb3J3YXJkTWF0cml4ID0gdGhpcy5jb25zdHJ1Y3Rvci5pbnZlcnRBZmZpbmVNYXRyaXgobWF0cml4KTtcclxuICAgIHRoaXMuaGFzUGFydGlhbERlcml2YXRpdmVzID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFzQ29uc3RhbnRQYXJ0aWFsRGVyaXZhdGl2ZXMgPSB0cnVlO1xyXG4gICAgdGhpcy5oYXNCZXN0Rml0Vmlld3BvcnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhZmZpbmUgZGlzdG9ydGlvbiB1c2luZyBjb250cm9sIHBvaW50cyBhcnJheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IGNvbnRyb2xQb2ludHMgTWFwcGluZ3Mgb2YgY29udHJvbCBwb2ludHMgW3UwLCB2MCwgeDAsIHkwLCAuLi4gLCB1biwgdm4sIHhuLCB5bl0gd2hlcmVcclxuICAgKiAodSosIHYqKSBhcmUgc291cmNlICh4LCB5KSBwb2ludCBhbmQgKHgqLCB5KikgYXJlIGRlc3RpbmF0aW9uICh4LCB5KSBwb2ludFxyXG4gICAqIEByZXR1cm5zIHtsZW5zLmRpc3RvcnRpb24uQWZmaW5lfVxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAwNTAxIEdlbmVyYXRpbmcgYWZmaW5lIGRpc3RvcnRpb24gbWF0cml4IGZyb20gY29udHJvbCBwb2ludHMgYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBmcm9tQ29udHJvbFBvaW50cyhjb250cm9sUG9pbnRzKSB7XHJcbiAgICBpZiAoY29udHJvbFBvaW50cy5sZW5ndGggJSA0ICE9PSAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRzTGVuZ3RoKGBOdW1iZXIgb2YgYXJndW1lbnRzIG11c3QgYmUgbXVsdGlwbGUgb2YgNCBhbmQgYXQgbGVhc3QgNCBhcmd1bWVudHMgKDEgY29udHJvbCBwb2ludCkgZXhwZWN0ZWQuICR7Y29udHJvbFBvaW50cy5sZW5ndGh9IGFyZ3VtZW50cyBnaXZlbi5gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogaGFuZGxlIHNwZWNpYWwgY2FzZXMgb2Ygbm90IGVub3VnaCBhcmd1bWVudHNcclxuICAgICAqL1xyXG4gICAgaWYgKGNvbnRyb2xQb2ludHMubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgIC8vIE9ubHkgMSBDUCBTZXQgR2l2ZW5cclxuICAgICAgcmV0dXJuIG5ldyBBZmZpbmUoW1xyXG4gICAgICAgIDEsIDAsIGNvbnRyb2xQb2ludHNbMF0gLSBjb250cm9sUG9pbnRzWzJdLFxyXG4gICAgICAgIDAsIDEsIGNvbnRyb2xQb2ludHNbMV0gLSBjb250cm9sUG9pbnRzWzNdXHJcbiAgICAgIF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gMiBvciBtb3JlIHBvaW50cyAodXNhbGx5IDMpIGdpdmVuLlxyXG4gICAgICAvLyBTb2x2ZSBhIGxlYXN0IHNxdWFyZXMgc2ltdWx0YW5lb3VzIGVxdWF0aW9uIGZvciBjb2VmZmljaWVudHMuXHJcbiAgICAgIGNvbnN0IGxlYXN0U3F1YXJlcyA9IG5ldyBMZWFzdFNxdWFyZXMoMywgMik7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyb2xQb2ludHMubGVuZ3RoOyBpICs9IDQpIHtcclxuICAgICAgICBsZXQgW3UsIHYsIHgsIHldID0gY29udHJvbFBvaW50cy5zbGljZShpLCBpICsgNCk7XHJcblxyXG4gICAgICAgIGxlYXN0U3F1YXJlcy5hZGRUZXJtcyhbXHJcbiAgICAgICAgICB4LCB5LCAxXHJcbiAgICAgICAgXSwgW3UsIHZdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbnRyb2xQb2ludHMubGVuZ3RoID09PSA4KSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBPbmx5IHR3byBwYWlycyB3ZXJlIGdpdmVuLCBidXQgd2UgbmVlZCAzIHRvIHNvbHZlIHRoZSBhZmZpbmUuXHJcbiAgICAgICAgICogRmFrZSBleHRyYSBjb29yZGluYXRlcyBieSByb3RhdGluZyBwMSBhcm91bmQgcDAgYnkgOTAgZGVncmVlcy5cclxuICAgICAgICAgKiB4MiA9IHgwIC0gKHkxLXkwKSAgIHkyID0geTAgKyAoeDEteDApXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGVhc3RTcXVhcmVzLmFkZFRlcm1zKFxyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICBjb250cm9sUG9pbnRzWzJdIC0gKGNvbnRyb2xQb2ludHNbN10gLSBjb250cm9sUG9pbnRzWzNdKSxcclxuICAgICAgICAgICAgY29udHJvbFBvaW50c1szXSArIChjb250cm9sUG9pbnRzWzZdIC0gY29udHJvbFBvaW50c1syXSksXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgIGNvbnRyb2xQb2ludHNbMF0gLSBjb250cm9sUG9pbnRzWzVdICsgY29udHJvbFBvaW50c1sxXSxcclxuICAgICAgICAgICAgY29udHJvbFBvaW50c1sxXSArIGNvbnRyb2xQb2ludHNbNF0gLSBjb250cm9sUG9pbnRzWzBdXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdmVjdG9ycyA9IGxlYXN0U3F1YXJlcy5zb2x2ZSgpLmdldFZlY3RvcnMoKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgQWZmaW5lKHZlY3RvcnNbMF0uY29uY2F0KHZlY3RvcnNbMV0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYWZmaW5lIGRpc3RvcnRpb24gdXNpbmcgYWZmaW5lIG1hdHJpeC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IG1hdHJpeCBBZmZpbmUgcHJvamVjdGlvbiBjb2VmZmljaWVudHM6IFtzeCwgcngsIHR4LCByeSwgc3ksIHR5XVxyXG4gICAqIEByZXR1cm5zIHtsZW5zLmRpc3RvcnRpb24uQWZmaW5lfVxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAwNjA5IEdlbmVyYXRpbmcgaW52ZXJ0ZWQgYWZmaW5lIGRpc3RvcnRpb24gbWF0cml4IGZyb20gZm9yd2FyZCBhZmZpbmUgbWF0cml4IGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICAgKi9cclxuICBzdGF0aWMgZnJvbUZvcndhcmRNYXRyaXgobWF0cml4KSB7XHJcbiAgICAvLyBUT0RPOiB0cmFwIHRlc3QgZm9yIHN4KnN5LXJ4KnJ5ID09IDAgKGRldGVybWluYW50ID0gMCwgbm8gaW52ZXJzZSlcclxuXHJcbiAgICByZXR1cm4gbmV3IEFmZmluZSh0aGlzLmludmVydEFmZmluZU1hdHJpeChtYXRyaXgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgaW52ZXJ0ZWQgYWZmaW5lIG1hdHJpeCBmcm9tIGFmZmluZSBtYXRyaXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSBtYXRyaXggQWZmaW5lIG1hdHJpeC5cclxuICAgKiBAcmV0dXJucyB7bnVtYmVyW119IEludmVydGVkIGFmZmluZSBtYXRyaXguXHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDAwOTUgSW52ZXJ0aW5nIGFmZmluZSBtYXRyaXggYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBpbnZlcnRBZmZpbmVNYXRyaXgobWF0cml4KSB7XHJcbiAgICAvKiBGcm9tIFwiRGlnaXRhbCBJbWFnZSBXYXJwaW5nXCIgYnkgR2VvcmdlIFdvbGJlcmcsIHBhZ2UgNTAgKi9cclxuXHJcbiAgICBjb25zdCBkZXRlcm1pbmFudCA9IHBlcmNlcHRpYmxlUmVjaXByb2NhbChtYXRyaXhbMF0gKiBtYXRyaXhbNF0gLSBtYXRyaXhbMV0gKiBtYXRyaXhbM10pO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIGRldGVybWluYW50ICogbWF0cml4WzRdLFxyXG4gICAgICBkZXRlcm1pbmFudCAqICgtbWF0cml4WzFdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzFdICogbWF0cml4WzVdIC0gbWF0cml4WzJdICogbWF0cml4WzRdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAoLW1hdHJpeFszXSksXHJcbiAgICAgIGRldGVybWluYW50ICogbWF0cml4WzBdLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbMl0gKiBtYXRyaXhbM10gLSBtYXRyaXhbMF0gKiBtYXRyaXhbNV0pXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICByZXZlcnNlTWFwKHgsIHkpIHtcclxuICAgIHJldHVybiBtYXAoeCwgeSwgdGhpcy5tYXRyaXgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRWYWxpZGl0eSh4LCB5KSB7XHJcbiAgICByZXR1cm4gMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0UGFydGlhbERlcml2YXRpdmVzKHgsIHkpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHRoaXMubWF0cml4WzBdLFxyXG4gICAgICB0aGlzLm1hdHJpeFsxXSxcclxuICAgICAgdGhpcy5tYXRyaXhbM10sXHJcbiAgICAgIHRoaXMubWF0cml4WzRdXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFwcyBzb3VyY2UgY29vcmRzIGludG8gZGVzdGluYXRpb24gY29vcmRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1jb29yZGluYXRlIG9mIHNvdXJjZSBpbWFnZSBwb2ludC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geSBZLWNvb3JkaW5hdGUgb2Ygc291cmNlIGltYWdlIHBvaW50LlxyXG4gICAqIEByZXR1cm5zIHtQb2ludH0gRm9yd2FyZCBtYXBwZWQgZGVzdGluYXRpb24gaW1hZ2UgY29vcmRzLlxyXG4gICAqL1xyXG4gIGZvcndhcmRNYXAoeCwgeSkge1xyXG4gICAgcmV0dXJuIG1hcCh4LCB5LCB0aGlzLmZvcndhcmRNYXRyaXgpO1xyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihBZmZpbmUucHJvdG90eXBlLCBjcmVhdGVzQmVzdEZpdFZpZXdwb3J0RnJvbUFwZXhlcyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZmZpbmU7IiwiaW1wb3J0IHtFUFNJTE9OLCBNX1BJMiwgTV8yUEl9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHtJbnZhbGlkQXJndW1lbnR9IGZyb20gXCIuLi9leGNlcHRpb25cIjtcclxuaW1wb3J0IHtkZWcycmFkfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi4vdmlld3BvcnQnO1xyXG5cclxuLyoqXHJcbiAqIEBzdW1tYXJ5IEFyYyBkaXN0b3J0aW9uLlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb24gTm90ZSB0aGUgY29lZmZpY2llbnRzIHVzZSBhIGNlbnRlciBhbmdsZSwgc28gYXN5bXB0b3RpYyBqb2luIGlzXHJcbiAqIGZ1cnRoZXN0IGZyb20gYm90aCBzaWRlcyBvZiB0aGUgc291cmNlIGltYWdlLiBUaGlzIGFsc28gbWVhbnMgdGhhdFxyXG4gKiBmb3IgYXJjIGFuZ2xlcyBncmVhdGVyIHRoYW4gMzYwIHRoZSBzaWRlcyBvZiB0aGUgaW1hZ2Ugd2lsbCBiZVxyXG4gKiB0cmltbWVkIGVxdWFsbHkuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLmRpc3RvcnRpb25cclxuICogQGltcGxlbWVudHMgRGlzdG9ydGlvbkludGVyZmFjZVxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy5pbWFnZW1hZ2ljay5vcmcvVXNhZ2UvZGlzdG9ydHMvI2FyYyBBcmMgZGlzdG9ydGlvbiBkZXRhaWxzfSBhdCBJbWFnZU1hZ2ljayBkb2NzLlxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMjU2MSBBcmMgZGlzdG9ydGlvbn0gYXQgSW1hZ2VNYWdpY2tcclxuICogc291cmNlLlxyXG4gKiBAdHV0b3JpYWwgMDMuMDMuYXJjXHJcbiAqL1xyXG5jbGFzcyBBcmMge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtsZW5zLlZpZXdwb3J0fSB2aWV3cG9ydFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjMCBBbmdsZSBmb3IgY2VudGVyIG9mIHNvdXJjZSBpbWFnZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gYzEgQW5nbGUgc2NhbGUgZm9yIG1hcHBpbmcgdG8gc291cmNlIGltYWdlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjMiBSYWRpdXMgZm9yIHRvcCBvZiBzb3VyY2UgaW1hZ2UuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGMzIFJhZGl1cyBzY2FsZSBmb3IgbWFwcGluZyBzb3VyY2UgaW1hZ2UuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGM0IENlbnRlciBsaW5lIG9mIGFyYyB3aXRoaW4gc291cmNlIGltYWdlLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHZpZXdwb3J0LCBjMCwgYzEsIGMyLCBjMywgYzQpIHtcclxuICAgIHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydDtcclxuICAgIHRoaXMuYzAgPSBjMDtcclxuICAgIHRoaXMuYzEgPSBjMTtcclxuICAgIHRoaXMuYzIgPSBjMjtcclxuICAgIHRoaXMuYzMgPSBjMztcclxuICAgIHRoaXMuYzQgPSBjNDtcclxuXHJcbiAgICAvKlxyXG4gICAgICogQ29udmVydCB0aGUgYW5nbGVfdG9fd2lkdGggYW5kIHJhZGl1c190b19oZWlnaHRcclxuICAgICAqIHRvIGFwcHJvcHJpYXRlIHNjYWxpbmcgZmFjdG9ycywgdG8gYWxsb3cgZmFzdGVyIHByb2Nlc3NpbmdcclxuICAgICAqIGluIHRoZSBtYXBwaW5nIGZ1bmN0aW9uLlxyXG4gICAgICovXHJcbiAgICB0aGlzLmFuZ2xlVG9XaWR0aCA9IE1fMlBJICogdGhpcy52aWV3cG9ydC53aWR0aCgpIC8gdGhpcy5jMTtcclxuICAgIHRoaXMucmFkaXVzVG9IZWlnaHQgPSB0aGlzLnZpZXdwb3J0LmhlaWdodCgpIC8gdGhpcy5jMztcclxuXHJcbiAgICB0aGlzLmhhc1BhcnRpYWxEZXJpdmF0aXZlcyA9IHRydWU7XHJcbiAgICB0aGlzLmhhc0NvbnN0YW50UGFydGlhbERlcml2YXRpdmVzID0gZmFsc2U7XHJcbiAgICB0aGlzLmhhc0Jlc3RGaXRWaWV3cG9ydCA9IHRydWU7XHJcbiAgICB0aGlzLmZvcmNlQmVzdEZpdCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFyYyBkaXN0b3J0aW9uIGNsYXNzIGZyb20gYXJndW1lbnRzLlxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uIEFyZ3VtZW50czogIFthbmdsZSwgcm90YXRpb24sIG91dGVyX3JhZGl1cywgaW5uZXJfcmFkaXVzXVxyXG4gICAqIEFsbCBidXQgZmlyc3QgYXJndW1lbnQgYXJlIG9wdGlvbmFsLlxyXG4gICAqXHJcbiAgICogQnkgZGVmYXVsdCwgaWYgdGhlIHJhZGlpIGFyZ3VtZW50cyBhcmUgbm9yIHByb3ZpZGVkIHRoZSBpbWFnZSByYWRpdXNcclxuICAgKiBpcyBjYWxjdWxhdGVkIHNvIHRoZSBob3Jpem9udGFsIGNlbnRlci1saW5lIGlzIGZpdHMgdGhlIGdpdmVuIGFyY1xyXG4gICAqIHdpdGhvdXQgc2NhbGluZy5cclxuICAgKlxyXG4gICAqIFRoZSBvdXRwdXQgaW1hZ2Ugc2l6ZSBpcyBBTFdBWVMgYWRqdXN0ZWQgdG8gY29udGFpbiB0aGUgd2hvbGUgaW1hZ2UsXHJcbiAgICogYW5kIGFuIG9mZnNldCBpcyBnaXZlbiB0byBwb3NpdGlvbiBpbWFnZSByZWxhdGl2ZSB0byB0aGUgMCwwIHBvaW50IG9mXHJcbiAgICogdGhlIG9yaWdpbiwgYWxsb3dpbmcgdXNlcnMgdG8gdXNlIHJlbGF0aXZlIHBvc2l0aW9uaW5nIG9udG8gbGFyZ2VyXHJcbiAgICogYmFja2dyb3VuZC5cclxuICAgKlxyXG4gICAqIFRoZSBhcmd1bWVudHMgYXJlIGNvbnZlcnRlZCB0byBkaXN0b3J0aW9uIGNvZWZmaWNpZW50cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bGVucy5WaWV3cG9ydH0gdmlld3BvcnRcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSBhcmdzIEFyZ3VtZW50czpcclxuICAgKiAqIDA6ICoqYW5nbGUqKiAtIFRoZSBhbmdsZSBvdmVyIHdoaWNoIHRvIGFyYyB0aGUgaW1hZ2Ugc2lkZS10by1zaWRlLlxyXG4gICAqICogMTogKipyb3RhdGlvbioqIC0gQW5nbGUgdG8gcm90YXRlIGltYWdlIGZyb20gdmVydGljYWwgY2VudGVyLlxyXG4gICAqICogMjogKipvdXRlcl9yYWRpdXMqKiAtIFNldCB0b3AgZWRnZSBvZiBzb3VyY2UgaW1hZ2UgYXQgdGhpcyByYWRpdXMuXHJcbiAgICogKiAzOiAqKmlubmVyX3JhZGl1cyoqIC0gU2V0IGJvdHRvbSBlZGdlIHRvIHRoaXMgcmFkaXVzIChyYWRpYWwgc2NhbGluZykuXHJcbiAgICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5BcmN9XHJcbiAgICogQHRocm93cyB7bGVucy5leGNlcHRpb24uSW52YWxpZEFyZ3VtZW50fSBUaHJvd24gd2hlbiBmaXJzdCAoYW5nbGUpIG9yIHRoaXJkIChvdXRlciByYWRpdXMpIGFyZ3VtZW50cyBhcmUgdG9vIHNtYWxsXHJcbiAgICpcclxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMTA5NSBHZW5lcmF0aW5nIGNvZWZmaWNpZW50c30gZm9yIGFyY1xyXG4gICAqIGRpc3RvcnRpb24gYXQgSW1hZ2VNYWdpY2sgc291cmNlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBmcm9tQXJndW1lbnRzKHZpZXdwb3J0LCBhcmdzKSB7XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPj0gMSAmJiBhcmdzWzBdIDwgRVBTSUxPTikge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50KCdBbmdsZSB0b28gc21hbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXJncy5sZW5ndGggPj0gMyAmJiBhcmdzWzJdIDwgRVBTSUxPTikge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50KCdPdXRlciByYWRpdXMgdG9vIHNtYWxsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGMwLCBjMSwgYzIsIGMzLCBjNDtcclxuXHJcbiAgICBjMCA9IC1NX1BJMjsgLy8gLTkwLCBwbGFjZSBhdCB0b3AhXHJcblxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID49IDEpIHtcclxuICAgICAgYzEgPSBkZWcycmFkKGFyZ3NbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYzEgPSBNX1BJMjsgLy8gemVybyBhcmd1bWVudHMgLSBjZW50ZXIgaXMgYXQgdG9wXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID49IDIpIHtcclxuICAgICAgYzAgKz0gZGVnMnJhZChhcmdzWzFdKTtcclxuICAgIH1cclxuXHJcbiAgICBjMCAvPSBNXzJQSTsgLy8gbm9ybWFsaXplIHJhZGlhbnNcclxuICAgIGMwIC09IE1hdGgucm91bmQoYzApO1xyXG4gICAgYzAgKj0gTV8yUEk7IC8vIGRlLW5vcm1hbGl6ZSBiYWNrIHRvIHJhZGlhbnNcclxuXHJcbiAgICBjMyA9IHZpZXdwb3J0LmhlaWdodCgpIC0gMTtcclxuICAgIGMyID0gdmlld3BvcnQud2lkdGgoKSAvIGMxICsgYzMgLyAyO1xyXG5cclxuICAgIGlmIChhcmdzLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+PSA0KSB7XHJcbiAgICAgICAgYzMgPSBhcmdzWzJdIC0gYXJnc1szXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjMyAqPSBhcmdzWzJdIC8gYzI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGMyID0gYXJnc1syXTtcclxuICAgIH1cclxuXHJcbiAgICBjNCA9ICh2aWV3cG9ydC53aWR0aCgpIC0gMSkgLyAyO1xyXG5cclxuICAgIHJldHVybiBuZXcgQXJjKHZpZXdwb3J0LCBjMCwgYzEsIGMyLCBjMywgYzQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICByZXZlcnNlTWFwKHgsIHkpIHtcclxuICAgIGxldCBbdSwgdl0gPSB0aGlzLmdldFVWKHgsIHkpO1xyXG5cclxuICAgIC8vIG5vdyBzY2FsZSB0aGUgYW5nbGUgYW5kIHJhZGl1cyBmb3Igc291cmNlIGltYWdlIGxvb2t1cCBwb2ludFxyXG4gICAgdSA9IHUgKiB0aGlzLmFuZ2xlVG9XaWR0aCArIHRoaXMuYzQgKyB0aGlzLnZpZXdwb3J0LngxICsgMC41O1xyXG4gICAgdiA9ICh0aGlzLmMyIC0gdikgKiB0aGlzLnJhZGl1c1RvSGVpZ2h0ICsgdGhpcy52aWV3cG9ydC55MTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHUsIHYsIHgsIHkpO1xyXG5cclxuICAgIHJldHVybiBbdSwgdl07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldFZhbGlkaXR5KHgsIHkpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRQYXJ0aWFsRGVyaXZhdGl2ZXMoeCwgeSkge1xyXG4gICAgbGV0IFt1LCB2XSA9IHRoaXMuZ2V0VVYoeCwgeSk7XHJcblxyXG4gICAgLypcclxuICAgICAqIEFyYyBEaXN0b3J0aW9uIFBhcnRpYWwgU2NhbGluZyBWZWN0b3JzXHJcbiAgICAgKiBBcmUgZGVyaXZlZCBieSBtYXBwaW5nIHRoZSBwZXJwZW5kaWN1bGFyIHVuaXQgdmVjdG9yc1xyXG4gICAgICogZFIgIGFuZCAgZEEqUioyUEkgIHJhdGhlciB0aGFuIHRyeWluZyB0byBtYXAgZHggYW5kIGR5XHJcbiAgICAgKiBUaGUgcmVzdWx0cyBpcyBhIHZlcnkgc2ltcGxlIG9ydGhvZ29uYWwgYWxpZ25lZCBlbGxpcHNlLlxyXG4gICAgICovXHJcbiAgICBpZiAodiA+IEVQU0lMT04pIHtcclxuICAgICAgcmV0dXJuIFt0aGlzLmFuZ2xlVG9XaWR0aCAvIChNXzJQSSAqIHYpLCAwLCAwLCB0aGlzLnJhZGl1c1RvSGVpZ2h0XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBbdGhpcy52aWV3cG9ydC53aWR0aCgpICogMiwgMCwgMCwgdGhpcy5yYWRpdXNUb0hlaWdodF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGNhbGN1bGF0ZWQgYmVzdCBmaXQgdmlld3BvcnQgZm9yIGltYWdlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtsZW5zLlZpZXdwb3J0fSB2aWV3cG9ydFxyXG4gICAqIEByZXR1cm5zIHtsZW5zLlZpZXdwb3J0fVxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAxODM0IEdlbmVyYXRpbmcgYmVzdCBmaXQgdmlld3BvcnR9XHJcbiAgICogZm9yIGFyYyBkaXN0b3J0aW9uIGF0IEltYWdlTWFnaWNrIHNvdXJjZS5cclxuICAgKi9cclxuICBnZXRCZXN0Rml0Vmlld3BvcnQodmlld3BvcnQpIHtcclxuICAgIC8vIEZvcndhcmQgTWFwIENvcm5lcnNcclxuICAgIGxldCBhID0gdGhpcy5jMCAtIHRoaXMuYzEgLyAyLFxyXG4gICAgICBjYSA9IE1hdGguY29zKGEpLFxyXG4gICAgICBzYSA9IE1hdGguc2luKGEpLFxyXG4gICAgICB4ID0gdGhpcy5jMiAqIGNhLFxyXG4gICAgICB5ID0gdGhpcy5jMiAqIHNhLFxyXG4gICAgICB2cCA9IG5ldyBWaWV3cG9ydCh4LCB5LCB4LCB5KTtcclxuXHJcbiAgICB4ID0gKHRoaXMuYzIgLSB0aGlzLmMzKSAqIGNhO1xyXG4gICAgeSA9ICh0aGlzLmMyIC0gdGhpcy5jMykgKiBzYTtcclxuICAgIHZwLmV4cGFuZCh4LCB5KTtcclxuXHJcbiAgICBhID0gdGhpcy5jMCArIHRoaXMuYzEgLyAyO1xyXG4gICAgY2EgPSBNYXRoLmNvcyhhKTtcclxuICAgIHNhID0gTWF0aC5zaW4oYSk7XHJcbiAgICB4ID0gdGhpcy5jMiAqIGNhO1xyXG4gICAgeSA9IHRoaXMuYzIgKiBzYTtcclxuICAgIHZwLmV4cGFuZCh4LCB5KTtcclxuXHJcbiAgICB4ID0gKHRoaXMuYzIgLSB0aGlzLmMzKSAqIGNhO1xyXG4gICAgeSA9ICh0aGlzLmMyIC0gdGhpcy5jMykgKiBzYTtcclxuICAgIHZwLmV4cGFuZCh4LCB5KTtcclxuXHJcbiAgICAvLyBPcnRob2dvbmFsIHBvaW50cyBhbG9uZyB0b3Agb2YgYXJjXHJcbiAgICBmb3IgKFxyXG4gICAgICBhID0gTWF0aC5jZWlsKCh0aGlzLmMwIC0gdGhpcy5jMSAvIDIpIC8gTV9QSTIpICogTV9QSTI7XHJcbiAgICAgIGEgPCB0aGlzLmMwICsgdGhpcy5jMSAvIDI7XHJcbiAgICAgIGEgKz0gTV9QSTJcclxuICAgICkge1xyXG4gICAgICBjYSA9IE1hdGguY29zKGEpO1xyXG4gICAgICBzYSA9IE1hdGguc2luKGEpO1xyXG4gICAgICB4ID0gdGhpcy5jMiAqIGNhO1xyXG4gICAgICB5ID0gdGhpcy5jMiAqIHNhO1xyXG4gICAgICB2cC5leHBhbmQoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgdnAuZml4Qm91bmRzKCk7XHJcblxyXG4gICAgcmV0dXJuIHZwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHJldHVybnMge1BvaW50fVxyXG4gICAqL1xyXG4gIGdldFVWKHgsIHkpIHtcclxuICAgIGxldCB1LCB2O1xyXG5cclxuICAgIC8vIHdoYXQgaXMgdGhlIGFuZ2xlIGFuZCByYWRpdXMgaW4gdGhlIGRlc3RpbmF0aW9uIGltYWdlXHJcbiAgICB1ID0gKE1hdGguYXRhbjIoeSwgeCkgLSB0aGlzLmMwKSAvIE1fMlBJO1xyXG4gICAgdSAtPSBNYXRoLnJvdW5kKHUpO1xyXG4gICAgdiA9IE1hdGguaHlwb3QoeCwgeSk7XHJcblxyXG4gICAgcmV0dXJuIFt1LCB2XTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFyYzsiLCJpbXBvcnQgQWZmaW5lIGZyb20gJy4vYWZmaW5lJztcclxuaW1wb3J0IEFyYyBmcm9tICcuL2FyYyc7XHJcbmltcG9ydCBQZXJzcGVjdGl2ZSBmcm9tICcuL3BlcnNwZWN0aXZlJztcclxuXHJcbi8qKlxyXG4gKiBEaXN0b3J0aW9uIG5hbWVzcGFjZVxyXG4gKlxyXG4gKiBAbmFtZXNwYWNlIGxlbnMuZGlzdG9ydGlvblxyXG4gKi9cclxuY29uc3QgZGlzdG9ydGlvbiA9IHtcclxuICBBZmZpbmUsXHJcbiAgQXJjLFxyXG4gIFBlcnNwZWN0aXZlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXN0b3J0aW9uOyIsImltcG9ydCBMZWFzdFNxdWFyZXMgZnJvbSAnLi4vdXRpbC9nYXVzcy1qb3JkYW4tZWxpbWluYXRpb24vbGVhc3Qtc3F1YXJlcyc7XHJcbmltcG9ydCBjcmVhdGVzQmVzdEZpdFZpZXdwb3J0RnJvbUFwZXhlcyBmcm9tICcuLi9taXhpbnMvY3JlYXRlcy1iZXN0LWZpdC12aWV3cG9ydC1mcm9tLWFwZXhlcyc7XHJcbmltcG9ydCBJbnZhbGlkQXJndW1lbnRzTGVuZ3RoIGZyb20gJy4uL2V4Y2VwdGlvbi9pbnZhbGlkLWFyZ3VtZW50cy1sZW5ndGgnO1xyXG5pbXBvcnQge3BlcmNlcHRpYmxlUmVjaXByb2NhbH0gZnJvbSBcIi4uL3V0aWwvdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIFByb2plY3QgY29vcmRpbmF0ZXMgdXNpbmcgcHJvamVjdGlvbiBtYXRyaXhcclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbWF0cml4IFBlcnNwZWN0aXZlIG1hdHJpeC5cclxuICogQHJldHVybnMge1BvaW50fSBNYXBwZWQgY29vcmRzIHBhaXIuXHJcbiAqIEB0dXRvcmlhbCAwMy4wMi5wZXJzcGVjdGl2ZVxyXG4gKi9cclxuZnVuY3Rpb24gbWFwKHgsIHksIG1hdHJpeCkge1xyXG4gIGxldCBwID0gbWF0cml4WzBdICogeCArIG1hdHJpeFsxXSAqIHkgKyBtYXRyaXhbMl0sXHJcbiAgICBxID0gbWF0cml4WzNdICogeCArIG1hdHJpeFs0XSAqIHkgKyBtYXRyaXhbNV0sXHJcbiAgICByID0gbWF0cml4WzZdICogeCArIG1hdHJpeFs3XSAqIHkgKyAxO1xyXG5cclxuICByZXR1cm4gW3AgLyByLCBxIC8gcl07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAc3VtbWFyeSBQZXJzcGVjdGl2ZSBEaXN0b3J0aW9uIChhIHJhdGlvIG9mIGFmZmluZSBkaXN0b3J0aW9ucykuXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvbiA8cHJlPlxyXG4gKlxyXG4gKiAgICAgcCh4LHkpICAgIGMwKnggKyBjMSp5ICsgYzJcclxuICogdSA9IC0tLS0tLSA9IC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgICAgcih4LHkpICAgIGM2KnggKyBjNyp5ICsgMVxyXG4gKlxyXG4gKiAgICAgcSh4LHkpICAgIGMzKnggKyBjNCp5ICsgYzVcclxuICogdiA9IC0tLS0tLSA9IC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgICAgIHIoeCx5KSAgICBjNip4ICsgYzcqeSArIDFcclxuICpcclxuICogZGVub21pbmF0b3IgPSBTaWduIG9mICdyJywgb3IgdGhlIGRlbm9taW5hdG9yIGFmZmluZSwgZm9yIHRoZSBhY3R1YWwgaW1hZ2UuXHJcbiAqIFRoaXMgZGV0ZXJtaW5lcyB3aGF0IHBhcnQgb2YgdGhlIGRpc3RvcnRlZCBpbWFnZSBpcyAnZ3JvdW5kJ1xyXG4gKiBzaWRlIG9mIHRoZSBob3Jpem9uLCB0aGUgb3RoZXIgcGFydCBpcyAnc2t5JyBvciBpbnZhbGlkLlxyXG4gKiBWYWxpZCB2YWx1ZXMgYXJlICArMS4wICBvciAgLTEuMCAgb25seS5cclxuICogPC9wcmU+XHJcbiAqXHJcbiAqIEBpbXBsZW1lbnRzIHtEaXN0b3J0aW9uSW50ZXJmYWNlfVxyXG4gKiBAbWVtYmVyT2YgbGVucy5kaXN0b3J0aW9uXHJcbiAqIEBtaXhlcyBsZW5zLm1peGlucy5jcmVhdGVzQmVzdEZpdFZpZXdwb3J0RnJvbUFwZXhlc1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy5pbWFnZW1hZ2ljay5vcmcvVXNhZ2UvZGlzdG9ydHMvI3BlcnNwZWN0aXZlIFBlcnNwZWN0aXZlIGRpc3RvcnRpb24gZGV0YWlscyBhdCBJbWFnZU1hZ2ljayBkb2NzfVxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMjQ1MCBQZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICovXHJcbmNsYXNzIFBlcnNwZWN0aXZlIHtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSByZXZlcnNlTWF0cml4IFBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IGZvciByZXZlcnNlIHBpeGVsIG1hcHBpbmcuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlbm9taW5hdG9yIERlbm9taW5hdG9yIGZvciBtYXBwaW5nIHZhbGlkaXR5IGNhbGN1bGF0aW9uLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHJldmVyc2VNYXRyaXgsIGRlbm9taW5hdG9yKSB7XHJcbiAgICB0aGlzLm1hdHJpeCA9IHJldmVyc2VNYXRyaXg7XHJcbiAgICB0aGlzLmRlbm9taW5hdG9yID0gZGVub21pbmF0b3I7XHJcbiAgICB0aGlzLmZvcndhcmRNYXRyaXggPSB0aGlzLmNvbnN0cnVjdG9yLmludmVydFBlcnNwZWN0aXZlTWF0cml4KHJldmVyc2VNYXRyaXgpO1xyXG4gICAgdGhpcy5oYXNQYXJ0aWFsRGVyaXZhdGl2ZXMgPSB0cnVlO1xyXG4gICAgdGhpcy5oYXNDb25zdGFudFBhcnRpYWxEZXJpdmF0aXZlcyA9IGZhbHNlO1xyXG4gICAgdGhpcy5oYXNCZXN0Rml0Vmlld3BvcnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBwZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIHVzaW5nIGNvbnRyb2wgcG9pbnRzIGFycmF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gY29udHJvbFBvaW50cyBNYXBwaW5ncyBvZiBjb250cm9sIHBvaW50cyBbdTAsIHYwLCB4MCwgeTAsIC4uLiAsIHVuLCB2biwgeG4sIHluXSB3aGVyZVxyXG4gICAqICh1KiwgdiopIGFyZSBzb3VyY2UgKHgsIHkpIHBvaW50IGFuZCAoeCosIHkqKSBhcmUgZGVzdGluYXRpb24gKHgsIHkpIHBvaW50LlxyXG4gICAqIEByZXR1cm5zIHtsZW5zLmRpc3RvcnRpb24uUGVyc3BlY3RpdmV9IE5ldyBpbnN0YW5jZS5cclxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMDc0NSBHZW5lcmF0aW5nIHBlcnNwZWN0aXZlIGRpc3RvcnRpb24gbWF0cml4IGZyb20gY29udHJvbCBwb2ludHMgYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBmcm9tQ29udHJvbFBvaW50cyhjb250cm9sUG9pbnRzKSB7XHJcbiAgICBpZiAoY29udHJvbFBvaW50cy5sZW5ndGggPCAxNiB8fCBjb250cm9sUG9pbnRzLmxlbmd0aCAlIDQgIT09IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudHNMZW5ndGgoYE51bWJlciBvZiBhcmd1bWVudHMgbXVzdCBiZSBtdWx0aXBsZSBvZiA0IGFuZCBhdCBsZWFzdCAxNiBhcmd1bWVudHMgKDQgY29udHJvbCBwb2ludHMpIGV4cGVjdGVkLiAke2NvbnRyb2xQb2ludHMubGVuZ3RofSBhcmd1bWVudHMgZ2l2ZW4uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGVhc3RTcXVhcmVzID0gbmV3IExlYXN0U3F1YXJlcyg4LCAxKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyb2xQb2ludHMubGVuZ3RoOyBpICs9IDQpIHtcclxuICAgICAgbGV0IFt1LCB2LCB4LCB5XSA9IGNvbnRyb2xQb2ludHMuc2xpY2UoaSwgaSArIDQpO1xyXG5cclxuICAgICAgbGVhc3RTcXVhcmVzLmFkZFRlcm1zKFtcclxuICAgICAgICB4LCB5LCAxLFxyXG4gICAgICAgIDAsIDAsIDAsXHJcbiAgICAgICAgLXggKiB1LCAteSAqIHVcclxuICAgICAgXSwgW3VdKVxyXG4gICAgICAgIC5hZGRUZXJtcyhbXHJcbiAgICAgICAgICAwLCAwLCAwLFxyXG4gICAgICAgICAgeCwgeSwgMSxcclxuICAgICAgICAgIC14ICogdiwgLXkgKiB2XHJcbiAgICAgICAgXSwgW3ZdKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYXRyaXggPSBsZWFzdFNxdWFyZXMuc29sdmUoKS5nZXRWZWN0b3JzKClbMF07XHJcblxyXG4gICAgLypcclxuICAgICAqIENhbGN1bGF0ZSBkZW5vbWluYXRvciEgVGhlIGdyb3VuZC1za3kgZGV0ZXJtaW5hdGlvbi5cclxuICAgICAqIFdoYXQgaXMgc2lnbiBvZiB0aGUgJ2dyb3VuZCcgaW4gcigpIGRlbm9taW5hdG9yIGFmZmluZSBmdW5jdGlvbj9cclxuICAgICAqIEp1c3QgdXNlIGFueSB2YWxpZCBpbWFnZSBjb29yZGluYXRlIChmaXJzdCBjb250cm9sIHBvaW50KSBpblxyXG4gICAgICogZGVzdGluYXRpb24gZm9yIGRldGVybWluYXRpb24gb2Ygd2hhdCBwYXJ0IG9mIHZpZXcgaXMgJ2dyb3VuZCcuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGRlbm9taW5hdG9yID0gbWF0cml4WzZdICogY29udHJvbFBvaW50c1syXSArIG1hdHJpeFs3XSAqIGNvbnRyb2xQb2ludHNbM10gKyAxIDwgMCA/IC0xIDogMTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBlcnNwZWN0aXZlKG1hdHJpeCwgZGVub21pbmF0b3IpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBwZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIHVzaW5nIHBlcnNwZWN0aXZlIG1hdHJpeC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IG1hdHJpeCBQZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5QZXJzcGVjdGl2ZX1cclxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMDg1MyBHZW5lcmF0aW5nIGludmVydGVkIHBlcnNwZWN0aXZlIGRpc3RvcnRpb24gbWF0cml4IGZyb20gZm9yd2FyZCBwZXJzcGVjdGl2ZSBtYXRyaXggYXQgSW1hZ2VNYWdpY2sgZG9jc31cclxuICAgKi9cclxuICBzdGF0aWMgZnJvbUZvcndhcmRNYXRyaXgobWF0cml4KSB7XHJcbiAgICAvLyBUT0RPOiB0cmFwIHRlc3QgIGMwKmM0LWMzKmMxID09IDAgIChkZXRlcm1pbmFudCA9IDAsIG5vIGludmVyc2UpXHJcbiAgICBjb25zdCBpbnZlcnNlID0gdGhpcy5pbnZlcnRQZXJzcGVjdGl2ZU1hdHJpeChtYXRyaXgpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBDYWxjdWxhdGUgZGVub21pbmF0b3IhIFRoZSBncm91bmQtc2t5IGRldGVybWluYXRpb24uXHJcbiAgICAgKiBXaGF0IGlzIHNpZ24gb2YgdGhlICdncm91bmQnIGluIHIoKSBkZW5vbWluYXRvciBhZmZpbmUgZnVuY3Rpb24/XHJcbiAgICAgKiBKdXN0IHVzZSBhbnkgdmFsaWQgaW1hZ2UgY29vcmRpbmF0ZSBpbiBkZXN0aW5hdGlvbiBmb3IgZGV0ZXJtaW5hdGlvbi5cclxuICAgICAqIEZvciBhIGZvcndhcmQgbWFwcGVkIHBlcnNwZWN0aXZlIHRoZSBpbWFnZXMgMCwwIGNvb3JkIHdpbGwgbWFwIHRvXHJcbiAgICAgKiBjMixjNSBpbiB0aGUgZGlzdG9ydGVkIGltYWdlLCBzbyBzZXQgdGhlIHNpZ24gb2YgZGVub21pbmF0b3Igb2YgdGhhdC5cclxuICAgICAqL1xyXG4gICAgY29uc3QgZGVub21pbmF0b3IgPSBpbnZlcnNlWzZdICogbWF0cml4WzJdICsgaW52ZXJzZVs3XSAqIG1hdHJpeFs1XSArIDEgPCAwID8gLTEgOiAxO1xyXG4gICAgcmV0dXJuIG5ldyBQZXJzcGVjdGl2ZShpbnZlcnNlLCBkZW5vbWluYXRvcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGludmVydGVkIHBlcnNwZWN0aXZlIG1hdHJpeCBmcm9tIHBlcnNwZWN0aXZlIG1hdHJpeC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IG1hdHJpeCBQZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICogQHJldHVybnMge251bWJlcltdfSBJbnZlcnRlZCBwZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDAxMDkgSW52ZXJ0aW5nIHBlcnNwZWN0aXZlIG1hdHJpeCBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAgICovXHJcbiAgc3RhdGljIGludmVydFBlcnNwZWN0aXZlTWF0cml4KG1hdHJpeCkge1xyXG4gICAgY29uc3QgZGV0ZXJtaW5hbnQgPSBwZXJjZXB0aWJsZVJlY2lwcm9jYWwobWF0cml4WzBdICogbWF0cml4WzRdIC0gbWF0cml4WzNdICogbWF0cml4WzFdKTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbNF0gLSBtYXRyaXhbN10gKiBtYXRyaXhbNV0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbN10gKiBtYXRyaXhbMl0gLSBtYXRyaXhbMV0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbMV0gKiBtYXRyaXhbNV0gLSBtYXRyaXhbNF0gKiBtYXRyaXhbMl0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbNl0gKiBtYXRyaXhbNV0gLSBtYXRyaXhbM10pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbMF0gLSBtYXRyaXhbNl0gKiBtYXRyaXhbMl0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbM10gKiBtYXRyaXhbMl0gLSBtYXRyaXhbMF0gKiBtYXRyaXhbNV0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbM10gKiBtYXRyaXhbN10gLSBtYXRyaXhbNl0gKiBtYXRyaXhbNF0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbNl0gKiBtYXRyaXhbMV0gLSBtYXRyaXhbMF0gKiBtYXRyaXhbN10pXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICByZXZlcnNlTWFwKHgsIHkpIHtcclxuICAgIHJldHVybiBtYXAoeCwgeSwgdGhpcy5tYXRyaXgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRWYWxpZGl0eSh4LCB5LCBzY2FsaW5nKSB7XHJcbiAgICBjb25zdCByID0gdGhpcy5tYXRyaXhbNl0gKiB4ICsgdGhpcy5tYXRyaXhbN10gKiB5ICsgMTtcclxuICAgIGxldCB2YWxpZGl0eSA9IHIgKiB0aGlzLmRlbm9taW5hdG9yIDwgMCA/IDAgOiAxO1xyXG4gICAgY29uc3QgYWJzUiA9IE1hdGguYWJzKHIpICogMjtcclxuICAgIGNvbnN0IGFic0M2ID0gTWF0aC5hYnModGhpcy5tYXRyaXhbNl0pO1xyXG4gICAgY29uc3QgYWJzQzcgPSBNYXRoLmFicyh0aGlzLm1hdHJpeFs3XSk7XHJcblxyXG4gICAgaWYgKGFic0M2ID4gYWJzQzcpIHtcclxuICAgICAgaWYgKGFic1IgPCBhYnNDNikge1xyXG4gICAgICAgIHZhbGlkaXR5ID0gMC41IC0gdGhpcy5kZW5vbWluYXRvciAqIHIgLyAodGhpcy5tYXRyaXhbNl0gKiBzY2FsaW5nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChhYnNSIDwgYWJzQzcpIHtcclxuICAgICAgdmFsaWRpdHkgPSAwLjUgLSB0aGlzLmRlbm9taW5hdG9yICogciAvICh0aGlzLm1hdHJpeFs3XSAqIHNjYWxpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZGl0eTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0UGFydGlhbERlcml2YXRpdmVzKHgsIHkpIHtcclxuICAgIGNvbnN0IHAgPSB0aGlzLm1hdHJpeFswXSAqIHggKyB0aGlzLm1hdHJpeFsxXSAqIHkgKyB0aGlzLm1hdHJpeFsyXSxcclxuICAgICAgcSA9IHRoaXMubWF0cml4WzNdICogeCArIHRoaXMubWF0cml4WzRdICogeSArIHRoaXMubWF0cml4WzVdLFxyXG4gICAgICByID0gdGhpcy5tYXRyaXhbNl0gKiB4ICsgdGhpcy5tYXRyaXhbN10gKiB5ICsgMSxcclxuICAgICAgc2NhbGUgPSBNYXRoLnBvdygxIC8gciwgMik7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgKHIgKiB0aGlzLm1hdHJpeFswXSAtIHAgKiB0aGlzLm1hdHJpeFs2XSkgKiBzY2FsZSwgLy8gZFV4XHJcbiAgICAgIChyICogdGhpcy5tYXRyaXhbMV0gLSBwICogdGhpcy5tYXRyaXhbN10pICogc2NhbGUsIC8vIGRVeVxyXG4gICAgICAociAqIHRoaXMubWF0cml4WzNdIC0gcSAqIHRoaXMubWF0cml4WzZdKSAqIHNjYWxlLCAvLyBkVnhcclxuICAgICAgKHIgKiB0aGlzLm1hdHJpeFs0XSAtIHEgKiB0aGlzLm1hdHJpeFs3XSkgKiBzY2FsZSAvL2RWeVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcHMgc291cmNlIGNvb3JkcyBpbnRvIGRlc3RpbmF0aW9uIGNvb3Jkcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1IFgtY29vcmRpbmF0ZSBvZiBzb3VyY2UgaW1hZ2UgcG9pbnQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHYgWS1jb29yZGluYXRlIG9mIHNvdXJjZSBpbWFnZSBwb2ludC5cclxuICAgKiBAcmV0dXJucyB7UG9pbnR9IEZvcndhcmQgbWFwcGVkIGRlc3RpbmF0aW9uIGltYWdlIGNvb3Jkcy5cclxuICAgKi9cclxuICBmb3J3YXJkTWFwKHUsIHYpIHtcclxuICAgIHJldHVybiBtYXAodSwgdiwgdGhpcy5mb3J3YXJkTWF0cml4KTtcclxuICB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oUGVyc3BlY3RpdmUucHJvdG90eXBlLCBjcmVhdGVzQmVzdEZpdFZpZXdwb3J0RnJvbUFwZXhlcyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzcGVjdGl2ZTsiLCJpbXBvcnQgQWZmaW5lIGZyb20gJy4vZGlzdG9ydGlvbi9hZmZpbmUnO1xyXG5pbXBvcnQgQXJjIGZyb20gJy4vZGlzdG9ydGlvbi9hcmMnO1xyXG5pbXBvcnQgUGVyc3BlY3RpdmUgZnJvbSAnLi9kaXN0b3J0aW9uL3BlcnNwZWN0aXZlJztcclxuXHJcbi8qKlxyXG4gKiBAc3VtbWFyeSBSZXNvbHZlcyBkaXN0b3J0aW9uIGNsYXNzIGluc3RhbmNlIHVzaW5nIGRpc3RvcnRpb24gYXJndW1lbnRzIGFuZCBvcHRpb25hbGx5IGltYWdlLlxyXG4gKlxyXG4gKiBAY2FsbGJhY2sgbGVuc35EaXN0b3J0aW9uUmVzb2x2ZXJcclxuICogQHBhcmFtIHtudW1iZXJbXX0gYXJnc1xyXG4gKiBAcGFyYW0ge0ltYWdlSW50ZXJmYWNlfSBbaW1hZ2VdXHJcbiAqIEByZXR1cm5zIHtEaXN0b3J0aW9uSW50ZXJmYWNlfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBNYWtlIEFmZmluZSBkaXN0b3J0aW9uIHVzaW5nIGNvbnRyb2wgcG9pbnRzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBhcmdzXHJcbiAqIEByZXR1cm5zIHtsZW5zLmRpc3RvcnRpb24uQWZmaW5lfVxyXG4gKi9cclxuZnVuY3Rpb24gYWZmaW5lQnlDb250cm9sUG9pbnRzKGFyZ3MpIHtcclxuICByZXR1cm4gQWZmaW5lLmZyb21Db250cm9sUG9pbnRzKGFyZ3MpO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZSBBZmZpbmUgZGlzdG9ydGlvbiB1c2luZyBhZmZpbmUgbWF0cml4LiBBcmd1bWVudHMgb3JkZXIgaXMgYXMgZGVzY3JpYmVkIGZvciBjb21wYXRpYmlsaXR5IHdpdGggSW1hZ2VNYWdpY2tcclxuICogYXJndW1lbnRzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0gc3hcclxuICogQHBhcmFtIHJ5XHJcbiAqIEBwYXJhbSByeFxyXG4gKiBAcGFyYW0gc3lcclxuICogQHBhcmFtIHR4XHJcbiAqIEBwYXJhbSB0eVxyXG4gKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLkFmZmluZX1cclxuICovXHJcbmZ1bmN0aW9uIGFmZmluZUJ5TWF0cml4IChbc3gsIHJ5LCByeCwgc3ksIHR4LCB0eV0pIHtcclxuICAvLyBDaGFuZ2UgYXJndW1lbnRzIG9yZGVyLlxyXG4gIHJldHVybiBBZmZpbmUuZnJvbUZvcndhcmRNYXRyaXgoW3N4LCByeCwgdHgsIHJ5LCBzeSwgdHldKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2UgcGVyc3BlY3RpdmUgZGlzdG9ydGlvbiB1c2luZyBjb250cm9sIHBvaW50cy5cclxuICogSWYgbnVtYmVyIG9mIGNvbnRyb2wgcG9pbnQgc2V0cyBpcyBsZXNzIHRoYW4gNCAoPCAxNiBhcmd1bWVudHMpLCB0aGlzIHdpbGwgZmFsbGJhY2sgdG8gQWZmaW5lIGRpc3RvcnRpb24uXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFyZ3NcclxuICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5QZXJzcGVjdGl2ZXxsZW5zLmRpc3RvcnRpb24uQWZmaW5lfVxyXG4gKi9cclxuZnVuY3Rpb24gcGVyc3BlY3RpdmVCeUNvbnRyb2xQb2ludHMoYXJncykge1xyXG4gIGlmIChhcmdzLmxlbmd0aCA8IDE2KSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ1BlcnNwZWN0aXZlIGRpc3RvcnRpb24gcmVxdWlyZXMgYXQgbGVhc3QgNCBjb250cm9scyBwb2ludHMgbWFwcGluZyAodSwgdikgLT4gKHgsIHkpLiBBZmZpbmUgZGlzdG9ydGlvbiB3aWxsIGJlIHVzZWQuJyk7XHJcbiAgICByZXR1cm4gQWZmaW5lLmZyb21Db250cm9sUG9pbnRzKGFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFBlcnNwZWN0aXZlLmZyb21Db250cm9sUG9pbnRzKGFyZ3MpO1xyXG59XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJbXX0gYXJnc1xyXG4gKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLlBlcnNwZWN0aXZlfVxyXG4gKi9cclxuZnVuY3Rpb24gcGVyc3BlY3RpdmVCeU1hdHJpeChhcmdzKSB7XHJcbiAgcmV0dXJuIFBlcnNwZWN0aXZlLmZyb21Gb3J3YXJkTWF0cml4KGFyZ3MpO1xyXG59XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJbXX0gYXJnc1xyXG4gKiBAcGFyYW0ge0ltYWdlSW50ZXJmYWNlfSBpbWFnZVxyXG4gKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLkFyY31cclxuICovXHJcbmZ1bmN0aW9uIGFyY0J5QXJndW1lbnRzKGFyZ3MsIGltYWdlKSB7XHJcbiAgcmV0dXJuIEFyYy5mcm9tQXJndW1lbnRzKGltYWdlLnZpZXdwb3J0LCBhcmdzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3RvcnRpb24gdHlwZXMuXHJcbiAqXHJcbiAqIEBlbnVtIHtsZW5zfmRpc3RvcnRpb25SZXNvbHZlcn1cclxuICogQG1lbWJlck9mIGxlbnNcclxuICovXHJcbmNvbnN0IGRpc3RvcnRzID0ge1xyXG4gIC8qKlxyXG4gICAqIEFmZmluZSBkaXN0b3J0aW9uIHVzaW5nIGNvbnRyb2wgcG9pbnRzLiBBcmd1bWVudHMgYXJlIHNldHMgb2YgY29udHJvbCBwb2ludHMgbWFwcGluZ3M6XHJcbiAgICogW3UwLCB2MCwgeDAsIHkwLCAuLi4sIHVOLCB2TiwgeE4sIHlOXSwgd2hlcmUgdSosIHYqIGFyZSBzb3VyY2UgaW1hZ2UgY29vcmRzLCB4KiwgeSogYXJlXHJcbiAgICogZGVzdGluYXRpb24gaW1hZ2UgY29vcmRzLlxyXG4gICAqL1xyXG4gIEFGRklORTogYWZmaW5lQnlDb250cm9sUG9pbnRzLFxyXG4gIC8qKlxyXG4gICAqIEFmZmluZSBkaXN0b3J0aW9uIHVzaW5nIGZvcndhcmQgYWZmaW5lIG1hdHJpeC5cclxuICAgKiBBcmd1bWVudHMgYXJlIGFmZmluZSBtYXRyaXggY29lZmZpY2llbnRzOiBbc3gsIHJ5LCByeCwgc3ksIHR4LCB0eV1cclxuICAgKi9cclxuICBBRkZJTkVfUFJPSkVDVElPTjogYWZmaW5lQnlNYXRyaXgsXHJcbiAgLyoqXHJcbiAgICogUGVyc3BlY3RpdmUgZGlzdG9ydGlvbiB1c2luZyBjb250cm9sIHBvaW50cy4gQXJndW1lbnRzIGFyZSBzZXRzIG9mIGNvbnRyb2wgcG9pbnRzIG1hcHBpbmdzOlxyXG4gICAqIFt1MCwgdjAsIHgwLCB5MCwgLi4uLCB1Tiwgdk4sIHhOLCB5Tl0sIHdoZXJlIHUqLCB2KiBhcmUgc291cmNlIGltYWdlIGNvb3JkcywgeCosIHkqIGFyZVxyXG4gICAqIGRlc3RpbmF0aW9uIGltYWdlIGNvb3Jkcy5cclxuICAgKiBJZiBudW1iZXIgb2YgY29udHJvbCBwb2ludCBzZXRzIGlzIGxlc3MgdGhhbiA0ICg8IDE2IGFyZ3VtZW50cyksIHRoaXMgd2lsbCBmYWxsYmFjayB0byBBZmZpbmUgZGlzdG9ydGlvblxyXG4gICAqIHdpdGggd2FybmluZyBtZXNzYWdlIGluIGNvbnNvbGUuXHJcbiAgICovXHJcbiAgUEVSU1BFQ1RJVkU6IHBlcnNwZWN0aXZlQnlDb250cm9sUG9pbnRzLFxyXG4gIC8qKlxyXG4gICAqIFBlcnNwZWN0aXZlIGRpc3RvcnRpb24gdXNpbmcgZm9yd2FyZCBwZXJzcGVjdGl2ZSBtYXRyaXguIEFyZ3VtZW50cyBhcmUgcGVyc3BlY3RpdmUgbWF0cml4IGNvZWZmaWNpZW50czpcclxuICAgKiBbc3gsIHJ5LCB0eCwgcngsIHN5LCB0eSwgcHgsIHB5XS5cclxuICAgKi9cclxuICBQRVJTUEVDVElWRV9QUk9KRUNUSU9OOiBwZXJzcGVjdGl2ZUJ5TWF0cml4LFxyXG5cclxuICAvKipcclxuICAgKiBBcmMgZGlzdG9ydGlvbi4gQXJndW1lbnRzIGFyZTogW2FyY0FuZ2xlLCByb3RhdGlvbiwgb3V0ZXJSYWRpdXMsIGlubmVyUmFkaXVzXS4gQWxsIGFyZ3VtZW50cyBleGNlcHQgYXJjQW5nbGVcclxuICAgKiBhcmUgb3B0aW9uYWwuIFNlZSB7QGxpbmsgbGVucy5kaXN0b3J0aW9uLkFyYy5mcm9tQXJndW1lbnRzfVxyXG4gICAqL1xyXG4gIEFSQzogYXJjQnlBcmd1bWVudHNcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlciBjdXN0b20gZGlzdG9ydGlvbiByZXNvbHZlci5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICogQHBhcmFtIHtsZW5zfmRpc3RvcnRpb25SZXNvbHZlcn0gcmVzb2x2ZXJcclxuICovXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyKG5hbWUsIHJlc29sdmVyKSB7XHJcbiAgZGlzdG9ydHNbbmFtZV0gID0gcmVzb2x2ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVbnJlZ2lzdGVyIGRpc3RvcnRpb24gcmVzb2x2ZXIuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAqL1xyXG5mdW5jdGlvbiB1bnJlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyKG5hbWUpIHtcclxuICBkZWxldGUgZGlzdG9ydHNbbmFtZV07XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVnaXN0ZXJEaXN0b3J0aW9uUmVzb2x2ZXIsIHVucmVnaXN0ZXJEaXN0b3J0aW9uUmVzb2x2ZXJ9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzdG9ydHM7IiwiaW1wb3J0IEludmFsaWRBcmd1bWVudCBmcm9tICcuL2ludmFsaWQtYXJndW1lbnQnO1xyXG5pbXBvcnQgSW52YWxpZEFyZ3VtZW50c0xlbmd0aCBmcm9tICcuL2ludmFsaWQtYXJndW1lbnRzLWxlbmd0aCc7XHJcbmltcG9ydCBMZW5zRXhjZXB0aW9uIGZyb20gJy4vbGVucy1leGNlcHRpb24nO1xyXG5pbXBvcnQgVW5zb2x2YWJsZU1hdHJpeCBmcm9tICcuL3Vuc29sdmFibGUtbWF0cml4JztcclxuXHJcbi8qKlxyXG4gKiBFeGNlcHRpb24gbmFtZXNwYWNlXHJcbiAqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5leGNlcHRpb25cclxuICovXHJcbmNvbnN0IGV4Y2VwdGlvbiA9IHtcclxuICBJbnZhbGlkQXJndW1lbnQsXHJcbiAgSW52YWxpZEFyZ3VtZW50c0xlbmd0aCxcclxuICBMZW5zRXhjZXB0aW9uLFxyXG4gIFVuc29sdmFibGVNYXRyaXhcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4Y2VwdGlvbjsiLCJleHBvcnQge2RlZmF1bHQgYXMgTGVuc0V4Y2VwdGlvbn0gZnJvbSAnLi9sZW5zLWV4Y2VwdGlvbic7XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgSW52YWxpZEFyZ3VtZW50c0xlbmd0aH0gZnJvbSAnLi9pbnZhbGlkLWFyZ3VtZW50cy1sZW5ndGgnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIFVuc29sdmFibGVNYXRyaXh9IGZyb20gJy4vdW5zb2x2YWJsZS1tYXRyaXgnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIEludmFsaWRBcmd1bWVudH0gZnJvbSAnLi9pbnZhbGlkLWFyZ3VtZW50JzsiLCJpbXBvcnQgTGVuc0V4Y2VwdGlvbiBmcm9tICcuL2xlbnMtZXhjZXB0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBJbnZhbGlkIEFyZ3VtZW50IEV4Y2VwdGlvbi5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMuZXhjZXB0aW9uXHJcbiAqIEBleHRlbmRzIGxlbnMuZXhjZXB0aW9uLkxlbnNFeGNlcHRpb25cclxuICovXHJcbmNsYXNzIEludmFsaWRBcmd1bWVudCBleHRlbmRzIExlbnNFeGNlcHRpb24ge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIHRoaXMubmFtZSA9ICdJbnZhbGlkQXJndW1lbnQnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52YWxpZEFyZ3VtZW50OyIsImltcG9ydCBMZW5zRXhjZXB0aW9uIGZyb20gJy4vbGVucy1leGNlcHRpb24nO1xyXG5cclxuLyoqXHJcbiAqIEV4Y2VwdGlvbiBmb3IgY2FzZXMgd2hlbiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMgcGFzc2VkXHJcbiAqXHJcbiAqIEBleHRlbmRzIGxlbnMuZXhjZXB0aW9uLkxlbnNFeGNlcHRpb25cclxuICogQG1lbWJlck9mIGxlbnMuZXhjZXB0aW9uXHJcbiAqL1xyXG5jbGFzcyBJbnZhbGlkQXJndW1lbnRzTGVuZ3RoIGV4dGVuZHMgTGVuc0V4Y2VwdGlvbiB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgdGhpcy5uYW1lID0gJ0ludmFsaWRBcmd1bWVudHNMZW5ndGgnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52YWxpZEFyZ3VtZW50c0xlbmd0aDsiLCIvKipcclxuICogQmFzZSBMZW5zIGV4Y2VwdGlvblxyXG4gKlxyXG4gKiBAZXh0ZW5kcyBFcnJvclxyXG4gKiBAbWVtYmVyT2YgbGVucy5leGNlcHRpb25cclxuICovXHJcbmNsYXNzIExlbnNFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIHRoaXMubmFtZSA9ICdMZW5zRXhjZXB0aW9uJztcclxuXHJcbiAgICBpZiAodHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IobWVzc2FnZSkpLnN0YWNrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVuc0V4Y2VwdGlvbjsiLCJpbXBvcnQgTGVuc0V4Y2VwdGlvbiBmcm9tICcuL2xlbnMtZXhjZXB0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBFeGNlcHRpb24gZm9yIHVuc29sdmFibGUgbWF0cml4IGluIEdhdXNzLUpvcmRhbiBlbGltaW5hdGlvblxyXG4gKlxyXG4gKiBAZXh0ZW5kcyBsZW5zLmV4Y2VwdGlvbi5MZW5zRXhjZXB0aW9uXHJcbiAqIEBtZW1iZXJPZiBsZW5zLmV4Y2VwdGlvblxyXG4gKi9cclxuY2xhc3MgVW5zb2x2YWJsZU1hdHJpeCBleHRlbmRzIExlbnNFeGNlcHRpb24ge1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xyXG4gICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICB0aGlzLm5hbWUgPSAnVW5zb2x2YWJsZU1hdHJpeCc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbnNvbHZhYmxlTWF0cml4OyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXIvZmlsdGVyJztcclxuaW1wb3J0IHtib3gsIGN1YmljQkN9IGZyb20gXCIuL2ZpbHRlci9maWx0ZXItZnVuY3Rpb25zXCI7XHJcblxyXG4vKipcclxuICogRmlsdGVyIGZhY3RvcnkuXHJcbiAqXHJcbiAqIEBjYWxsYmFjayBsZW5zfmZpbHRlckZhY3RvcnlcclxuICogQHJldHVybnMge0ZpbHRlckludGVyZmFjZX1cclxuICovXHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHJldHVybnMge2xlbnMuZmlsdGVyLkZpbHRlcn1cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBST0JJRE9VWCgpIHtcclxuICByZXR1cm4gbmV3IEZpbHRlcihcclxuICAgIGN1YmljQkMoMC4zNzgyMTU3NTUwOTM5OTg2NywgMC4zMTA4OTIxMjI0NTMwMDA2NyksXHJcbiAgICBib3goKSxcclxuICAgIDIsXHJcbiAgICAxLjE2ODU3Nzc2MjA4MzY5MzIsXHJcbiAgICAxXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEByZXR1cm5zIHtsZW5zLmZpbHRlci5GaWx0ZXJ9XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gUk9CSURPVVhfU0hBUlAoKSB7XHJcbiAgcmV0dXJuIG5ldyBGaWx0ZXIoXHJcbiAgICBjdWJpY0JDKDAuMjYyMDE0NTEyMzk5MDE0MiwgMC4zNjg5OTI3NDM4MDA0OTI5KSxcclxuICAgIGJveCgpLFxyXG4gICAgMixcclxuICAgIDEuMTA1ODIyOTMzNzE5MDE5LFxyXG4gICAgMVxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaWx0ZXIgcHJlc2V0cy5cclxuICpcclxuICogQGVudW0ge2xlbnN+ZmlsdGVyRmFjdG9yeX1cclxuICogQG1lbWJlck9mIGxlbnNcclxuICovXHJcbmNvbnN0IGZpbHRlclByZXNldHMgPSB7XHJcbiAgUk9CSURPVVgsXHJcbiAgUk9CSURPVVhfU0hBUlBcclxufTtcclxuXHJcbi8vIFRPRE8gYWRkIG1vcmUgZmlsdGVyIHByZXNldHNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbHRlclByZXNldHM7IiwiLyoqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5maWx0ZXIuZmlsdGVyRnVuY3Rpb25zXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE1ha2VzIGJveCBmaWx0ZXIgZnVuY3Rpb24uXHJcbiAqIEEgQm94IGZpbHRlciBpcyBhIGVxdWFsIHdlaWdodGluZyBmdW5jdGlvbiAoYWxsIHdlaWdodHMgZXF1YWwpLlxyXG4gKiBETyBOT1QgTElNSVQgcmVzdWx0cyBieSBzdXBwb3J0IG9yIHJlc2l6ZSBwb2ludCBzYW1wbGluZyB3aWxsIHdvcmtcclxuICogYXMgaXQgcmVxdWVzdHMgcG9pbnRzIGJleW9uZCBpdHMgbm9ybWFsIDAuMCBzdXBwb3J0IHNpemUuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLmZpbHRlci5maWx0ZXJGdW5jRmFjdG9yaWVzXHJcbiAqIEByZXR1cm5zIHtsZW5zLmZpbHRlci5GaWx0ZXJ+ZmlsdGVyRnVuY3Rpb259XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3Jlc2l6ZV84Y19zb3VyY2UuaHRtbCNsMDAxODEgT3ggZmlsdGVyIGZ1bmN0aW9uIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICovXHJcbmZ1bmN0aW9uIGJveCgpIHtcclxuICBjb25zdCBmdW5jID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfTtcclxuXHJcbiAgZnVuYy5maWx0ZXJGdW5jdGlvbk5hbWUgPSAnYm94JztcclxuXHJcbiAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyBjdWJpY0JDIGZpbHRlciBmdW5jdGlvbi5cclxuICogPHA+Q3ViaWMgRmlsdGVycyB1c2luZyBCLEMgZGV0ZXJtaW5lZCB2YWx1ZXM6PC9wPlxyXG4gKiA8cHJlPlxyXG4gKiAgICAgTWl0Y2hlbGwtTmV0cmF2YWxpICBCID0gMS8zIEMgPSAxLzMgIFwiQmFsYW5jZWRcIiBjdWJpYyBzcGxpbmUgZmlsdGVyXHJcbiAqICAgICBDYXRtdWxsLVJvbSAgICAgICAgIEIgPSAwICAgQyA9IDEvMiAgSW50ZXJwb2xhdG9yeSBhbmQgZXhhY3Qgb24gbGluZWFyc1xyXG4gKiAgICAgU3BsaW5lICAgICAgICAgICAgICBCID0gMSAgIEMgPSAwICAgIEItU3BsaW5lIEdhdXNzaWFuIGFwcHJveGltYXRpb25cclxuICogICAgIEhlcm1pdGUgICAgICAgICAgICAgQiA9IDAgICBDID0gMCAgICBCLVNwbGluZSBpbnRlcnBvbGF0b3JcclxuICogPC9wcmU+XHJcbiAqXHJcbiAqIDxwPlNlZSBwYXBlciBieSBNaXRjaGVsbCBhbmQgTmV0cmF2YWxpLCBSZWNvbnN0cnVjdGlvbiBGaWx0ZXJzIGluIENvbXB1dGVyXHJcbiAqIEdyYXBoaWNzIENvbXB1dGVyIEdyYXBoaWNzLCBWb2x1bWUgMjIsIE51bWJlciA0LCBBdWd1c3QgMTk4OFxyXG4gKiB7QGxpbmsgaHR0cDovL3d3dy5jcy51dGV4YXMuZWR1L3VzZXJzL2Z1c3NlbGwvY291cnNlcy9jczM4NGcvbGVjdHVyZXMvbWl0Y2hlbGwvTWl0Y2hlbGwucGRmfS48L3A+XHJcbiAqXHJcbiAqIDxwPkNvZWZmaWNlbnRzIGFyZSBkZXRlcm1pbmVkIGZyb20gQixDIHZhbHVlczpcclxuICogPHByZT5cclxuICogICAgUDAgPSAoICA2IC0gMipCICAgICAgICkvNiA9IGNvZWZmWzBdXHJcbiAqICAgIFAxID0gICAgICAgICAwXHJcbiAqICAgIFAyID0gKC0xOCArMTIqQiArIDYqQyApLzYgPSBjb2VmZlsxXVxyXG4gKiAgICBQMyA9ICggMTIgLSA5KkIgLSA2KkMgKS82ID0gY29lZmZbMl1cclxuICogICAgUTAgPSAoICAgICAgOCpCICsyNCpDICkvNiA9IGNvZWZmWzNdXHJcbiAqICAgIFExID0gKCAgICAtMTIqQiAtNDgqQyApLzYgPSBjb2VmZls0XVxyXG4gKiAgICBRMiA9ICggICAgICA2KkIgKzMwKkMgKS82ID0gY29lZmZbNV1cclxuICogICAgUTMgPSAoICAgIC0gMSpCIC0gNipDICkvNiA9IGNvZWZmWzZdXHJcbiAqIDwvcHJlPlxyXG4gKiB3aGljaCBhcmUgdXNlZCB0byBkZWZpbmUgdGhlIGZpbHRlcjpcclxuICogPHByZT5cclxuICogICAgUDAgKyBQMSp4ICsgUDIqeF4yICsgUDMqeF4zICAgICAgMCA8PSB4IDwgMVxyXG4gKiAgICBRMCArIFExKnggKyBRMip4XjIgKyBRMyp4XjMgICAgICAxIDw9IHggPCAyXHJcbiAqIDwvcHJlPlxyXG4gKiB3aGljaCBlbnN1cmVzIGZ1bmN0aW9uIGlzIGNvbnRpbnVvdXMgaW4gdmFsdWUgYW5kIGRlcml2YXRpdmUgKHNsb3BlKS48L3A+XHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLmZpbHRlci5maWx0ZXJGdW5jRmFjdG9yaWVzXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3Jlc2l6ZV84Y19zb3VyY2UuaHRtbCNsMDAyMDcgQ3ViaWNCQyBmaWx0ZXIgZnVuY3Rpb24gYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gKiBAcGFyYW0ge251bWJlcn0gYlxyXG4gKiBAcGFyYW0ge251bWJlcn0gY1xyXG4gKiBAcmV0dXJucyB7bGVucy5maWx0ZXIuRmlsdGVyfmZpbHRlckZ1bmN0aW9ufVxyXG4gKi9cclxuZnVuY3Rpb24gY3ViaWNCQyhiLCBjKSB7XHJcbiAgY29uc3QgcDAgPSAoNiAtIDIgKiBiKSAvIDY7XHJcbiAgLy8gY29uc3QgcDEgPSAwO1xyXG4gIGNvbnN0IHAyID0gKC0xOCArIDEyICogYiArIDYgKiBjKSAvIDY7XHJcbiAgY29uc3QgcDMgPSAoMTIgLSA5ICogYiAtIDYgKiBjKSAvIDY7XHJcbiAgY29uc3QgcTAgPSAoOCAqIGIgKyAyNCAqIGMpIC8gNjtcclxuICBjb25zdCBxMSA9ICgtMTIgKiBiIC0gNDggKiBjKSAvIDY7XHJcbiAgY29uc3QgcTIgPSAoNiAqIGIgKyAzMCAqIGMpIC8gNjtcclxuICBjb25zdCBxMyA9ICgtMSAqIGIgLSA2ICogYykgLyA2O1xyXG5cclxuICBjb25zdCBmdW5jID0gZnVuY3Rpb24gKHgpIHtcclxuICAgIGlmICh4IDwgMSkge1xyXG4gICAgICByZXR1cm4gcDAgKyB4ICogKHggKiAocDIgKyB4ICogcDMpKTtcclxuICAgIH0gZWxzZSBpZiAoeCA8IDIpIHtcclxuICAgICAgcmV0dXJuIHEwICsgeCAqIChxMSArIHggKiAocTIgKyB4ICogcTMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuYy5maWx0ZXJGdW5jdGlvbk5hbWUgPSAnY3ViaWNCQyc7XHJcbiAgZnVuYy5iID0gYjtcclxuICBmdW5jLmMgPSBjO1xyXG5cclxuICByZXR1cm4gZnVuYztcclxufTtcclxuXHJcbi8vIFRPRE86IGFkZCBtb3JlIGZpbHRlciBmdW5jdGlvbnNcclxuXHJcbmV4cG9ydCB7XHJcbiAgYm94LCBjdWJpY0JDXHJcbn07IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL2ZpbHRlcic7XHJcbmltcG9ydCAqIGFzIGZpbHRlckZ1bmN0aW9ucyBmcm9tICcuL2ZpbHRlci1mdW5jdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIEZpbHRlciBuYW1lc3BhY2VcclxuICpcclxuICogQG5hbWVzcGFjZSBsZW5zLmZpbHRlclxyXG4gKi9cclxuY29uc3QgZmlsdGVyID0ge1xyXG4gIEZpbHRlcixcclxuICBmaWx0ZXJGdW5jdGlvbnNcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbHRlcjsiLCJpbXBvcnQge0VQU0lMT059IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBmaWx0ZXIgb3Igd2luZG93aW5nIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAY2FsbGJhY2sgbGVucy5maWx0ZXIuRmlsdGVyfmZpbHRlckZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeF1cclxuICogQHBhcmFtIHtudW1iZXJ9IFtzdXBwb3J0XVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3dpbmRvd1N1cHBvcnRdXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFJlc2FtcGxlIGZpbHRlci5cclxuICpcclxuICogQGltcGxlbWVudHMge0ZpbHRlckludGVyZmFjZX1cclxuICogQG1lbWJlck9mIGxlbnMuZmlsdGVyXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9maWx0ZXIvI2ZpbHRlciBSZXNhbXBsaW5nIEZpbHRlcnN9IGF0IEltYWdlTWFnaWNrIGRvY3NcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cyLmVlY3MuYmVya2VsZXkuZWR1L1B1YnMvVGVjaFJwdHMvMTk4OS9DU0QtODktNTE2LnBkZiBGdW5kYW1lbnRhbHMgb2YgVGV4dHVyZSBNYXBwaW5nIGFuZCBJbWFnZSBXYXJwaW5nIGJ5IFBhdWwgUy4gSGVja2JlcnR9XHJcbiAqIHBhZ2UgNDEsIHNlY3Rpb24gMy40LCAzLjVcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvcmVzaXplXzhjX3NvdXJjZS5odG1sI2wwMDc1NyBBcXVpcmVSZXNpemVGaWx0ZXIgYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gKiBAdHV0b3JpYWwgMDIuMDMucGl4ZWwtY29sb3ItbG9va3VwXHJcbiAqL1xyXG5jbGFzcyBGaWx0ZXIge1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bGVucy5maWx0ZXIuRmlsdGVyfmZpbHRlckZ1bmN0aW9ufSBmaWx0ZXJGdW5jdGlvbiBGaWx0ZXJpbmcgZnVuY3Rpb24uXHJcbiAgICogQHBhcmFtIHtsZW5zLmZpbHRlci5GaWx0ZXJ+ZmlsdGVyRnVuY3Rpb259IHdpbmRvd2luZ0Z1bmN0aW9uIFdpbmRvd2luZyBmdW5jdGlvbi5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3VwcG9ydCBGaWx0ZXIgcmVnaW9uIG9mIHN1cHBvcnQgLSB0aGUgZmlsdGVyIHN1cHBvcnQgbGltaXQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlIERpbWVuc2lvbiBzY2FsaW5nIHRvIGZpdCB3aW5kb3cgc3VwcG9ydCAodXNhbGx5IDEuMCkuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtibHVyPTFdIFgtc2NhbGUgKGJsdXItc2hhcnBlbikuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVsbH0gW3dpbmRvd1N1cHBvcnQ9bnVsbF0gV2luZG93IHN1cHBvcnQsIHVzdWFsbHkgZXF1YWwgdG8gc3VwcG9ydCAoZXhwZXJ0IG9ubHkpLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGZpbHRlckZ1bmN0aW9uLCB3aW5kb3dpbmdGdW5jdGlvbiwgc3VwcG9ydCwgc2NhbGUsIGJsdXIgPSAxLCB3aW5kb3dTdXBwb3J0ID0gbnVsbCkge1xyXG4gICAgdGhpcy5maWx0ZXJGdW5jdGlvbiAgICA9IGZpbHRlckZ1bmN0aW9uO1xyXG4gICAgdGhpcy53aW5kb3dpbmdGdW5jdGlvbiA9IHdpbmRvd2luZ0Z1bmN0aW9uO1xyXG4gICAgdGhpcy5zdXBwb3J0ICAgICAgICAgICA9IHN1cHBvcnQ7XHJcbiAgICB0aGlzLnNjYWxlICAgICAgICAgICAgID0gc2NhbGU7XHJcbiAgICB0aGlzLmJsdXIgICAgICAgICAgICAgID0gYmx1cjtcclxuICAgIHRoaXMud2luZG93U3VwcG9ydCAgICAgPSB3aW5kb3dTdXBwb3J0ICE9PSBudWxsID8gd2luZG93U3VwcG9ydCA6IHN1cHBvcnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldFdlaWdodCh4KSB7XHJcbiAgICBjb25zdCB4Qmx1ciA9IHggLyB0aGlzLmJsdXI7XHJcbiAgICBjb25zdCBzY2FsZSA9IHhCbHVyIDwgRVBTSUxPTiA/IDEgOiB0aGlzLndpbmRvdyh0aGlzLnNjYWxlICogeEJsdXIpO1xyXG4gICAgcmV0dXJuIHNjYWxlICogdGhpcy5maWx0ZXIoeEJsdXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBmaWx0ZXIoeCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyRnVuY3Rpb24oeCwgdGhpcy5zdXBwb3J0LCB0aGlzLndpbmRvd1N1cHBvcnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICB3aW5kb3coeCkge1xyXG4gICAgcmV0dXJuIHRoaXMud2luZG93aW5nRnVuY3Rpb24oeCwgdGhpcy5zdXBwb3J0LCB0aGlzLndpbmRvd1N1cHBvcnQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyOyIsImltcG9ydCBWaWV3cG9ydCBmcm9tICcuLi92aWV3cG9ydCc7XHJcbmltcG9ydCB2cHggZnJvbSAnLi4vdnB4JztcclxuaW1wb3J0IHZpcnR1YWxQaXhlbFRyYWl0IGZyb20gJy4uL21peGlucy92aXJ0dWFsLXBpeGVsLXRyYWl0JztcclxuaW1wb3J0IGludGVycG9sYXRpb25UcmFpdCBmcm9tICcuLi9taXhpbnMvaW50ZXJwb2xhdGlvbi10cmFpdCc7XHJcbmltcG9ydCBpbnRlcnBvbGF0aW9uIGZyb20gJy4uL2ludGVycG9sYXRpb24nO1xyXG5cclxuZnVuY3Rpb24gbm90SW1wbGVtZW50ZWQobWV0aG9kKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKGAke21ldGhvZH0oKSBpcyBhYnN0cmFjdCBtZXRob2QgYW5kIG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgY2hpbGQgY2xhc3NgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFic3RyYWN0IGltYWdlIGNsYXNzIGZvciBJbWFnZUludGVyZmFjZSBpbXBsZW1lbnRhdGlvbi5cclxuICpcclxuICogQGltcGxlbWVudHMge0ltYWdlSW50ZXJmYWNlfVxyXG4gKiBAbWVtYmVyT2YgbGVucy5pbWFnZVxyXG4gKiBAYWJzdHJhY3RcclxuICogQG1peGVzIGxlbnMubWl4aW5zLmludGVycG9sYXRpb25UcmFpdFxyXG4gKiBAbWl4ZXMgbGVucy5taXhpbnMudmlydHVhbFBpeGVsVHJhaXRcclxuICovXHJcbmNsYXNzIEFic3RyYWN0SW1hZ2Uge1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggSW1hZ2Ugd2lkdGhcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEltYWdlIGhlaWdodFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy52aWV3cG9ydCA9IG5ldyBWaWV3cG9ydCgwLCAwLCB0aGlzLndpZHRoIC0gMSwgdGhpcy5oZWlnaHQgLSAxKTtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gWzAsIDAsIDAsIDBdOyAvLyBUcmFuc3BhcmVudDtcclxuICAgIHRoaXMudmlydHVhbFBpeGVsTWV0aG9kID0gdnB4LlRSQU5TUEFSRU5UO1xyXG4gICAgdGhpcy5xdWFudHVtUmFuZ2UgPSAyNTU7XHJcbiAgICB0aGlzLmludGVycG9sYXRpb25NZXRob2QgPSBpbnRlcnBvbGF0aW9uLklOVEVHRVI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldFBpeGVsQ29sb3IoeCwgeSkge1xyXG4gICAgeCA9IE1hdGguZmxvb3IoeCAtIHRoaXMudmlld3BvcnQueDEpO1xyXG4gICAgeSA9IE1hdGguZmxvb3IoeSAtIHRoaXMudmlld3BvcnQueTEpO1xyXG5cclxuICAgIGlmICh4ID49IDAgJiYgeCA8IHRoaXMud2lkdGggJiYgeSA+PSAwICYmIHkgPCB0aGlzLmhlaWdodCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VmlydHVhbFBpeGVsQ29sb3IoeCwgeSwgdGhpcy52aXJ0dWFsUGl4ZWxNZXRob2QpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBzZXRQaXhlbENvbG9yKHgsIHksIGNvbG9yKSB7XHJcbiAgICB4ID0gTWF0aC5mbG9vcih4IC0gdGhpcy52aWV3cG9ydC54MSk7XHJcbiAgICB5ID0gTWF0aC5mbG9vcih5IC0gdGhpcy52aWV3cG9ydC55MSk7XHJcblxyXG4gICAgaWYgKHggPj0gMCAmJiB4IDwgdGhpcy53aWR0aCAmJiB5ID49IDAgJiYgeSA8IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuc2V0SW1hZ2VQaXhlbENvbG9yKHgsIHksIGNvbG9yKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihgR2l2ZW4gY29vcmRzICgke3h9LCAke3l9KSBpcyBvdXQgb2YgaW1hZ2UgYm91bmRzYCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldEJsYW5rKHZpZXdwb3J0KSB7XHJcbiAgICBjb25zdCBibGFuayA9IHRoaXMucHJlcGFyZUJsYW5rKHZpZXdwb3J0LndpZHRoKCksIHZpZXdwb3J0LmhlaWdodCgpKTtcclxuXHJcbiAgICBpZiAoYmxhbmsgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgIHJldHVybiBibGFuay50aGVuKGJsYW5rID0+IHtcclxuICAgICAgICBibGFuay52aWV3cG9ydCAgPSB2aWV3cG9ydDtcclxuICAgICAgICByZXR1cm4gYmxhbms7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJsYW5rLnZpZXdwb3J0ID0gdmlld3BvcnQ7XHJcbiAgICByZXR1cm4gYmxhbms7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHNjYWxlKHNjYWxlKSB7XHJcbiAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMudmlld3BvcnQuY2xvbmUoKTtcclxuICAgIHZpZXdwb3J0LnNjYWxlKHNjYWxlKTtcclxuICAgIGNvbnN0IHJlc2l6ZWQgPSB0aGlzLnJlc2l6ZSh2aWV3cG9ydC53aWR0aCgpLCB2aWV3cG9ydC5oZWlnaHQoKSk7XHJcblxyXG4gICAgaWYgKHJlc2l6ZWQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgIHJldHVybiByZXNpemVkLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJlc2l6ZWQudmlld3BvcnQgPSB2aWV3cG9ydDtcclxuICAgICAgICByZXR1cm4gcmVzaXplZDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplZC52aWV3cG9ydCA9IHZpZXdwb3J0O1xyXG4gICAgcmV0dXJuIHJlc2l6ZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHN5bmMoKSB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgcGl4ZWwgY29sb3IgYXQgZ2l2ZW4gaW1hZ2UgY29vcmRzLiBJbWFnZSBjb29yZHMgTVVTVCBiZTogeCDiiIggWzA7IHdpZHRoIC0gMV0sIHkg4oiIIFswOyBoZWlnaHQgLSAxXS5cclxuICAgKlxyXG4gICAqIEBhYnN0cmFjdFxyXG4gICAqIEBwcm90ZWN0ZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHJldHVybnMge0NvbG9yfVxyXG4gICAqL1xyXG4gIGdldEltYWdlUGl4ZWxDb2xvcih4LCB5KSB7XHJcbiAgICBub3RJbXBsZW1lbnRlZCgnZ2V0SW1hZ2VQaXhlbENvbG9yJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHBpeGVsIGNvbG9yIGF0IGdpdmVuIGltYWdlIGNvb3JkaW5hdGVzLlxyXG4gICAqXHJcbiAgICogQGFic3RyYWN0XHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICAgKiBAcGFyYW0ge0NvbG9yfSBjb2xvclxyXG4gICAqL1xyXG4gIHNldEltYWdlUGl4ZWxDb2xvcih4LCB5LCBjb2xvcikge1xyXG4gICAgbm90SW1wbGVtZW50ZWQoJ3NldEltYWdlUGl4ZWxDb2xvcicpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJlcGFyZXMgYmxhbmsgaW1hZ2UgZm9yIHtAbGluayBJbWFnZUludGVyZmFjZSNnZXRCbGFua30gbWV0aG9kLlxyXG4gICAqXHJcbiAgICogQGFic3RyYWN0XHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICAgKiBAcmV0dXJucyB7SW1hZ2VJbnRlcmZhY2V9XHJcbiAgICovXHJcbiAgcHJlcGFyZUJsYW5rKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIG5vdEltcGxlbWVudGVkKCdwcmVwYXJlQmxhbmsnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYXZlcmFnZSBjb2xvciBvZiB3aG9sZSBpbWFnZS5cclxuICAgKlxyXG4gICAqIEBhYnN0cmFjdFxyXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cclxuICAgKi9cclxuICBnZXRBdmVyYWdlQ29sb3IoKSB7XHJcbiAgICBub3RJbXBsZW1lbnRlZCgnZ2V0QXZlcmFnZUNvbG9yJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHJlc2l6ZWQgaW5zdGFuY2Ugb2Ygc2VsZi5cclxuICAgKlxyXG4gICAqIEBhYnN0cmFjdFxyXG4gICAqIEBwcm90ZWN0ZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICogQHJldHVybnMge0ltYWdlSW50ZXJmYWNlfFByb21pc2U8SW1hZ2VJbnRlcmZhY2U+fVxyXG4gICAqL1xyXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBub3RJbXBsZW1lbnRlZCgncmVzaXplJyk7XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKEFic3RyYWN0SW1hZ2UucHJvdG90eXBlLCB2aXJ0dWFsUGl4ZWxUcmFpdCk7XHJcbk9iamVjdC5hc3NpZ24oQWJzdHJhY3RJbWFnZS5wcm90b3R5cGUsIGludGVycG9sYXRpb25UcmFpdCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYnN0cmFjdEltYWdlOyIsImltcG9ydCBBYnN0cmFjdEltYWdlIGZyb20gJy4vYWJzdHJhY3QtaW1hZ2UnO1xyXG5cclxuLyoqXHJcbiAqIEltYWdlSW50ZXJmYWNlIGltcGxlbWVudGF0aW9uIGZvciBkaXN0b3J0aW9uIHVzaW5nIEhUTUw1IENhbnZhcyBvYmplY3RzLlxyXG4gKiBEaXN0b3J0aW9uIHJlc3VsdCB3aWxsIGNvbnRhaW4gbmV3IENhbnZhcyBvYmplY3QgaW4ge0BsaW5rIGxlbnMuaW1hZ2UuQ2FudmFzI2NhbnZhc30gcHJvcGVydHkuXHJcbiAqXHJcbiAqIEBpbXBsZW1lbnRzIHtJbWFnZUludGVyZmFjZX1cclxuICogQG1lbWJlck9mIGxlbnMuaW1hZ2VcclxuICogQGV4dGVuZHMgbGVucy5pbWFnZS5BYnN0cmFjdEltYWdlXHJcbiAqL1xyXG5jbGFzcyBDYW52YXMgZXh0ZW5kcyBBYnN0cmFjdEltYWdlIHtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXNcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgIHN1cGVyKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICB0aGlzLmNhbnZhcyAgICAgPSBjYW52YXM7XHJcbiAgICB0aGlzLmltYWdlRGF0YSAgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuZGF0YSAgICAgICA9IHRoaXMuaW1hZ2VEYXRhLmRhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldEltYWdlUGl4ZWxDb2xvcih4LCB5KSB7XHJcbiAgICBjb25zdCBvZmZzZXQgPSAoeSAqIHRoaXMud2lkdGggKyB4KSAqIDQ7XHJcblxyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxyXG4gICAgICB0aGlzLmRhdGEsXHJcbiAgICAgIG9mZnNldCxcclxuICAgICAgb2Zmc2V0ICsgNFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc2V0SW1hZ2VQaXhlbENvbG9yKHgsIHksIGNvbG9yKSB7XHJcbiAgICBjb25zdCBvZmZzZXQgPSAoeSAqIHRoaXMud2lkdGggKyB4KSAqIDQ7XHJcblxyXG4gICAgY29sb3IuZm9yRWFjaCgoY2hhbm5lbCwgaSkgPT4gdGhpcy5kYXRhW29mZnNldCArIGldID0gY2hhbm5lbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHByZXBhcmVCbGFuayh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoY2FudmFzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc3luYygpIHtcclxuICAgIHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykucHV0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VEYXRhLCAwLCAwKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0QXZlcmFnZUNvbG9yKCkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSAxO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IDE7XHJcbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCAxLCAxKTtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcclxuICAgICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpLmRhdGFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBjb25zdCBkc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGRzdC53aWR0aCA9IHdpZHRoO1xyXG4gICAgZHN0LmhlaWdodCA9IGhlaWdodDtcclxuICAgIGRzdC5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZSh0aGlzLmNhbnZhcywgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKGRzdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW52YXM7IiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XHJcblxyXG4vKipcclxuICogV3JhcHBlciBmb3Ige0BsaW5rIGxlbnMuaW1hZ2UuQ2FudmFzfSBmb3IgZGlyZWN0IGRpc3RvcnRpb24gb2YgRE9NIEltYWdlIG9iamVjdHMuXHJcbiAqIERpc3RvcnRpb24gcmVzdWx0IHdpbGwgY29udGFpbiBuZXcgRE9NIEltYWdlIG9iamVjdCBpbiB7QGxpbmsgbGVucy5pbWFnZS5Eb21JbWFnZSNpbWFnZX0gcHJvcGVydHkuXHJcbiAqXHJcbiAqIEBpbXBsZW1lbnRzIHtJbWFnZUludGVyZmFjZX1cclxuICogQG1lbWJlck9mIGxlbnMuaW1hZ2VcclxuICogQGV4dGVuZHMgbGVucy5pbWFnZS5DYW52YXNcclxuICovXHJcbmNsYXNzIERvbUltYWdlIGV4dGVuZHMgQ2FudmFzIHtcclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7ZXh0ZXJuYWw6SW1hZ2V8SFRNTEltYWdlRWxlbWVudH0gaW1hZ2UgRE9NIEltYWdlIG9iamVjdFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGltYWdlKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcbiAgICBzdXBlcihjYW52YXMpO1xyXG5cclxuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcHJlcGFyZUJsYW5rKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihuZXcgSW1hZ2Uod2lkdGgsIGhlaWdodCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBzeW5jKCkge1xyXG4gICAgc3VwZXIuc3luYygpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHRoaXMpO1xyXG5cclxuICAgICAgdGhpcy5pbWFnZS5zcmMgPSB0aGlzLmNhbnZhcy50b0RhdGFVUkwoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3luYygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSh3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzaXplZCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGltYWdlKTtcclxuICAgICAgICAgIHJlc29sdmUocmVzaXplZCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9tSW1hZ2U7IiwiaW1wb3J0IEFic3RyYWN0SW1hZ2UgZnJvbSAnLi9hYnN0cmFjdC1pbWFnZSc7XHJcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgRG9tSW1hZ2UgZnJvbSAnLi9kb20taW1hZ2UnO1xyXG5cclxuLyoqXHJcbiAqIEltYWdlIG5hbWVzcGFjZVxyXG4gKlxyXG4gKiBAbmFtZXNwYWNlIGxlbnMuaW1hZ2VcclxuICovXHJcbmNvbnN0IGltYWdlID0ge1xyXG4gIEFic3RyYWN0SW1hZ2UsXHJcbiAgQ2FudmFzLFxyXG4gIERvbUltYWdlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbWFnZTsiLCIvKipcclxuICogQ29sb3IgaW50ZXJwb2xhdGlvbiBtZXRob2RzLlxyXG4gKlxyXG4gKiBAcmVhZG9ubHlcclxuICogQGVudW0ge251bWJlcn1cclxuICogQG1lbWJlcm9mIGxlbnNcclxuICovXHJcbmNvbnN0IGludGVycG9sYXRpb24gPSB7XHJcbiAgLyoqXHJcbiAgICogQXZlcmFnZSA0IG5lYXJlc3QgbmVpZ2hib3Vycy5cclxuICAgKi9cclxuICBBVkVSQUdFOiAxLFxyXG5cclxuICAvKipcclxuICAgKiBBdmVyYWdlIDkgbmVhcmVzdCBuZWlnaGJvdXJzLlxyXG4gICAqL1xyXG4gIEFWRVJBR0VfOTogMixcclxuXHJcbiAgLyoqXHJcbiAgICogQXZlcmFnZSAxNiBuZWFyZXN0IG5laWdoYm91cnMuXHJcbiAgICovXHJcbiAgQVZFUkFHRV8xNjogMyxcclxuXHJcbiAgLyoqXHJcbiAgICogSnVzdCByZXR1cm4gYmFja2dyb3VuZCBjb2xvci5cclxuICAgKi9cclxuICBCQUNLR1JPVU5EOiA0LFxyXG5cclxuICAvKipcclxuICAgKiBJbnRlZ2VyIChmbG9vcikgaW50ZXJwb2xhdGlvbi5cclxuICAgKi9cclxuICBJTlRFR0VSOiA4IC8vIFRPRE86IGltcGxlbWVudCBhbmQgYWRkIG90aGVyIG1ldGhvZHNcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVycG9sYXRpb247IiwiaW1wb3J0IGRpc3RvcnRlciBmcm9tICcuL2Rpc3RvcnRlci9kaXN0b3J0ZXInO1xyXG5pbXBvcnQgZGlzdG9ydGlvbiBmcm9tICcuL2Rpc3RvcnRpb24vZGlzdG9ydGlvbic7XHJcbmltcG9ydCBleGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24vZXhjZXB0aW9uJztcclxuaW1wb3J0IGZpbHRlciBmcm9tICcuL2ZpbHRlci9maWx0ZXItbmFtZXNwYWNlJztcclxuaW1wb3J0IGltYWdlIGZyb20gJy4vaW1hZ2UvaW1hZ2UnO1xyXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4vbWl4aW5zL21peGlucyc7XHJcbmltcG9ydCByZXNhbXBsZXIgZnJvbSAnLi9yZXNhbXBsZXIvcmVzYW1wbGVyJztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsL3V0aWwtbmFtZXNwYWNlJztcclxuaW1wb3J0IHtFUFNJTE9OLCBNQVhJTVVNX1ZBTFVFLCBNXzJQSSwgTV9QSTJ9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IGRpc3RvcnQgZnJvbSAnLi9kaXN0b3J0JztcclxuaW1wb3J0IGRpc3RvcnRzIGZyb20gJy4vZGlzdG9ydHMnO1xyXG5pbXBvcnQge3JlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyLCB1bnJlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyfSBmcm9tICcuL2Rpc3RvcnRzJztcclxuaW1wb3J0IGZpbHRlclByZXNldHMgZnJvbSAnLi9maWx0ZXItcHJlc2V0cyc7XHJcbmltcG9ydCBpbnRlcnBvbGF0aW9uIGZyb20gJy4vaW50ZXJwb2xhdGlvbic7XHJcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL3ZpZXdwb3J0JztcclxuaW1wb3J0IHZweCBmcm9tICcuL3ZweCc7XHJcblxyXG4vKipcclxuICogTGlicmFyeSB2ZXJzaW9uXHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBWRVJTSU9OID0gcHJvY2Vzcy5lbnYuUEFDS0FHRV9WRVJTSU9OO1xyXG5cclxuLyoqXHJcbiAqIExlbnMgbGlicmFyeSBuYW1lc3BhY2VcclxuICpcclxuICogQG5hbWVzcGFjZSBsZW5zXHJcbiAqL1xyXG5jb25zdCBsZW5zID0ge1xyXG4gIC8vIENvbnN0YW50c1xyXG4gIFZFUlNJT04sXHJcbiAgRVBTSUxPTixcclxuICBNQVhJTVVNX1ZBTFVFLFxyXG4gIE1fMlBJLFxyXG4gIE1fUEkyLFxyXG5cclxuICAvLyBFbnVtc1xyXG4gIGRpc3RvcnRzLFxyXG4gIGZpbHRlclByZXNldHMsXHJcbiAgaW50ZXJwb2xhdGlvbixcclxuICB2cHgsXHJcblxyXG4gIC8vIFR5cGVzXHJcbiAgVmlld3BvcnQsXHJcblxyXG4gIC8vIE5hbWVzcGFjZXNcclxuICBkaXN0b3J0ZXIsXHJcbiAgZGlzdG9ydGlvbixcclxuICBleGNlcHRpb24sXHJcbiAgZmlsdGVyLFxyXG4gIGltYWdlLFxyXG4gIG1peGlucyxcclxuICByZXNhbXBsZXIsXHJcbiAgdXRpbCxcclxuXHJcbiAgLy8gRnVuY3Rpb25zXHJcbiAgZGlzdG9ydCxcclxuICByZWdpc3RlckRpc3RvcnRpb25SZXNvbHZlcixcclxuICB1bnJlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsZW5zOyIsImltcG9ydCBWaWV3cG9ydCBmcm9tIFwiLi4vdmlld3BvcnRcIjtcclxuXHJcbi8qKlxyXG4gKiBNaXhpbiBmb3IgY2xhc3NlcyBpbXBsZW1lbnRpbmcge0BsaW5rIERpc3RvcnRpb25JbnRlcmZhY2V9IHRoYXQgY2FuIGNhbGN1bGF0ZSBiZXN0IGZpdCB2aWV3cG9ydCB1c2luZyBmb3J3YXJkXHJcbiAqIHBpeGVsIG1hcHBpbmcgb2YgaW1hZ2UgY29ybmVycy5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMubWl4aW5zXHJcbiAqIEBtaXhpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBiZXN0IGZpdCB2aWV3cG9ydCBmb3IgZGlzdG9ydGlvbiwgdXNpbmcgZm9yd2FyZCBtYXBwaW5nIGZvciBpbWFnZSBhcGV4ZXMgKGNvcm5lcnMpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtsZW5zLlZpZXdwb3J0fSB2aWV3cG9ydFxyXG4gICAqIEByZXR1cm5zIHtsZW5zLlZpZXdwb3J0fVxyXG4gICAqL1xyXG4gIGdldEJlc3RGaXRWaWV3cG9ydCh2aWV3cG9ydCkge1xyXG4gICAgY29uc3QgdTEgPSB2aWV3cG9ydC54MSxcclxuICAgICAgdjEgPSB2aWV3cG9ydC55MSxcclxuICAgICAgdTIgPSB2aWV3cG9ydC54MiArIDEsXHJcbiAgICAgIHYyID0gdmlld3BvcnQueTIgKyAxLFxyXG4gICAgICBbeCwgeV0gPSB0aGlzLmZvcndhcmRNYXAodTEsIHYxKSxcclxuICAgICAgYmVzdEZpdCA9IG5ldyBWaWV3cG9ydCh4LCB5LCB4LCB5KTtcclxuXHJcbiAgICBbW3UyLCB2MV0sIFt1MiwgdjJdLCBbdTEsIHYyXV0uZm9yRWFjaChhcGV4ID0+IGJlc3RGaXQuZXhwYW5kKC4uLnRoaXMuZm9yd2FyZE1hcCguLi5hcGV4KSkpO1xyXG5cclxuICAgIGJlc3RGaXQuZml4Qm91bmRzKCk7XHJcblxyXG4gICAgcmV0dXJuIGJlc3RGaXQ7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXM7IiwiaW1wb3J0IG1ldGhvZHMgZnJvbSAnLi4vaW50ZXJwb2xhdGlvbic7XHJcblxyXG4vKipcclxuICogQWRkcyBjb2xvciBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uYWxpdHkgZm9yIGNsYXNzZXMgdGhhdCBpbXBsZW1lbnQge0BsaW5rIEltYWdlSW50ZXJmYWNlfVxyXG4gKlxyXG4gKiBAbWl4aW5cclxuICogQG1lbWJlck9mIGxlbnMubWl4aW5zXHJcbiAqL1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uVHJhaXQgPSB7XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBpbnRlcnBvbGF0ZWQgcGl4ZWwgY29sb3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHBhcmFtIHtsZW5zLmludGVycG9sYXRpb259IFtpbnRlcnBvbGF0aW9uTWV0aG9kPXRoaXMuaW50ZXJwb2xhdGlvbk1ldGhvZF1cclxuICAgKiBAcmV0dXJucyB7Q29sb3J9XHJcbiAgICovXHJcbiAgZ2V0SW50ZXJwb2xhdGVkUGl4ZWxDb2xvcih4LCB5LCBpbnRlcnBvbGF0aW9uTWV0aG9kID0gdGhpcy5pbnRlcnBvbGF0aW9uTWV0aG9kKSB7XHJcbiAgICBzd2l0Y2ggKGludGVycG9sYXRpb25NZXRob2QpIHtcclxuICAgICAgY2FzZSBtZXRob2RzLkFWRVJBR0U6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGVBdmVyYWdlKHgsIHksIDIpO1xyXG4gICAgICBjYXNlIG1ldGhvZHMuQVZFUkFHRV85OlxyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVycG9sYXRlQXZlcmFnZSh4LCB5LCAzKTtcclxuICAgICAgY2FzZSBtZXRob2RzLkFWRVJBR0VfMTY6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGVBdmVyYWdlKHgsIHksIDQpO1xyXG4gICAgICBjYXNlIG1ldGhvZHMuQkFDS0dST1VORDpcclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3Iuc2xpY2UoKTtcclxuICAgICAgY2FzZSBtZXRob2RzLklOVEVHRVI6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGl4ZWxDb2xvcihNYXRoLmZsb29yKHgpLCBNYXRoLmZsb29yKHkpKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGludGVycG9sYXRlZCBjb2xvciBieSBhdmVyYWdlIG9mIG5laWdoYm9ycy5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge251bWJlcn0geVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxyXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cclxuICAgKi9cclxuICBpbnRlcnBvbGF0ZUF2ZXJhZ2UoeCwgeSwgY291bnQgPSAyKSB7XHJcbiAgICBsZXQgc3RhcnRYLCBzdGFydFk7XHJcblxyXG4gICAgc3dpdGNoIChjb3VudCkge1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgc3RhcnRYID0gTWF0aC5mbG9vcih4KTtcclxuICAgICAgICBzdGFydFkgPSBNYXRoLmZsb29yKHkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHN0YXJ0WCA9IE1hdGguZmxvb3IoeCArIDAuNSkgLSAxO1xyXG4gICAgICAgIHN0YXJ0WSA9IE1hdGguZmxvb3IoeSArIDAuNSkgLSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgc3RhcnRYID0gTWF0aC5mbG9vcih4KSAtIDE7XHJcbiAgICAgICAgc3RhcnRZID0gTWF0aC5mbG9vcih5KSAtIDE7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmFtICdjb3VudCcgbXVzdCBiZSBpbnRlZ2VyIGJldHdlZW4gMiBhbmQgNC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW5kWCA9IHN0YXJ0WCArIGNvdW50O1xyXG4gICAgY29uc3QgZW5kWSA9IHN0YXJ0WSArIGNvdW50O1xyXG4gICAgbGV0IGNvbG9yID0gWzAsIDAsIDAsIDBdO1xyXG5cclxuICAgIGZvciAobGV0IFkgPSBzdGFydFk7IFkgPCBlbmRZOyBZKyspIHtcclxuICAgICAgZm9yIChsZXQgWCA9IHN0YXJ0WDsgWCA8IGVuZFg7IFgrKykge1xyXG4gICAgICAgIHRoaXMuZ2V0UGl4ZWxDb2xvcih4LCB5KS5mb3JFYWNoKChjaGFubmVsLCBpKSA9PiBjb2xvcltpXSArPSBjaGFubmVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdhbW1hID0gMSAvIChjb3VudCAqIGNvdW50KTtcclxuXHJcbiAgICByZXR1cm4gY29sb3IubWFwKGNoYW5uZWwgPT4gTWF0aC5yb3VuZChjaGFubmVsICogZ2FtbWEpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcnBvbGF0aW9uVHJhaXQ7IiwiaW1wb3J0IGNyZWF0ZXNCZXN0Rml0Vmlld3BvcnRGcm9tQXBleGVzIGZyb20gJy4vY3JlYXRlcy1iZXN0LWZpdC12aWV3cG9ydC1mcm9tLWFwZXhlcyc7XHJcbmltcG9ydCBpbnRlcnBvbGF0aW9uVHJhaXQgZnJvbSAnLi9pbnRlcnBvbGF0aW9uLXRyYWl0JztcclxuaW1wb3J0IHZpcnR1YWxQaXhlbFRyYWl0IGZyb20gJy4vdmlydHVhbC1waXhlbC10cmFpdCc7XHJcblxyXG4vKipcclxuICogTWl4aW5zIG5hbWVzcGFjZVxyXG4gKlxyXG4gKiBAbmFtZXNwYWNlIGxlbnMubWl4aW5zXHJcbiAqL1xyXG5jb25zdCBtaXhpbnMgPSB7XHJcbiAgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXMsXHJcbiAgaW50ZXJwb2xhdGlvblRyYWl0LFxyXG4gIHZpcnR1YWxQaXhlbFRyYWl0XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtaXhpbnM7IiwiaW1wb3J0IHZweE1ldGhvZHMgZnJvbSAnLi4vdnB4JztcclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0geFxyXG4gKiBAcGFyYW0ge251bWJlcn0geVxyXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gKiBAcmV0dXJucyB7UG9pbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRFZGdlQ29vcmRzKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICByZXR1cm4gW1xyXG4gICAgTWF0aC5tYXgoMCwgTWF0aC5taW4od2lkdGggLSAxLCB4KSksXHJcbiAgICBNYXRoLm1heCgwLCBNYXRoLm1pbihoZWlnaHQgLSAxLCB5KSlcclxuICBdO1xyXG59XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICogQHJldHVybnMge1BvaW50fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VGlsZUNvb3Jkcyh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgbGV0IHJ4ID0geCAlIHdpZHRoLFxyXG4gICAgcnkgPSB5ICUgaGVpZ2h0O1xyXG5cclxuICByZXR1cm4gW1xyXG4gICAgcnggPCAwID8gd2lkdGggKyByeCA6IHJ4LFxyXG4gICAgcnkgPCAwID8gaGVpZ2h0ICsgcnkgOiByeVxyXG4gIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIHZpcnR1YWwgcGl4ZWwgYmVoYXZpb3IgdG8gY2xhc3NlcyB0aGF0IGltcGxlbWVudCBJbWFnZUludGVyZmFjZS5cclxuICpcclxuICogQG1peGluXHJcbiAqIEBtZW1iZXJPZiBsZW5zLm1peGluc1xyXG4gKiBAdHV0b3JpYWwgMDIuMDUudmlydHVhbC1waXhlbHMtYW5kLW1hdHRlXHJcbiAqL1xyXG5jb25zdCB2aXJ0dWFsUGl4ZWxUcmFpdCA9IHtcclxuICAvKipcclxuICAgKiBSZXR1cm5zIHZpcnR1YWwgcGl4ZWwgY29sb3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geCBJbWFnZSBYLWNvb3JkaW5hdGUgT1VUU0lERSBvZiBpbWFnZSBib3VuZHMuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgSW1hZ2UgWS1jb29yZGluYXRlIE9VVFNJREUgb2YgaW1hZ2UgYm91bmRzLlxyXG4gICAqIEBwYXJhbSB7bGVucy52cHh9IG1ldGhvZCBWaXJ0dWFsIHBpeGVsIG1ldGhvZC5cclxuICAgKiBAcmV0dXJucyB7Q29sb3J9XHJcbiAgICovXHJcbiAgZ2V0VmlydHVhbFBpeGVsQ29sb3IoeCwgeSwgbWV0aG9kKSB7XHJcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuQkFDS0dST1VORDpcclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3Iuc2xpY2UoKTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5FREdFOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEltYWdlUGl4ZWxDb2xvciguLi5nZXRFZGdlQ29vcmRzKHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSk7XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuTUlSUk9SOlxyXG4gICAgICAgIGxldCBbdHgsIHR5XSA9IGdldFRpbGVDb29yZHMoeCwgeSwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcblxyXG4gICAgICAgIGlmICh0eCA+IHRoaXMud2lkdGggLSAxKSB7XHJcbiAgICAgICAgICB0eCA9IHRoaXMud2lkdGggLSAodHggLSB0aGlzLndpZHRoKSAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHkgPiB0aGlzLmhlaWdodCAtIDEpIHtcclxuICAgICAgICAgIHR5ID0gdGhpcy5oZWlnaHQgLSAodHkgLSB0aGlzLmhlaWdodCkgLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VQaXhlbENvbG9yKHR4LCB0eSk7XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuVElMRTpcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoLi4uZ2V0VGlsZUNvb3Jkcyh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpO1xyXG5cclxuICAgICAgY2FzZSB2cHhNZXRob2RzLlRSQU5TUEFSRU5UOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuQkxBQ0s6XHJcbiAgICAgICAgcmV0dXJuIFswLCAwLCAwLCB0aGlzLnF1YW50dW1SYW5nZV07XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuV0hJVEU6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKHRoaXMucXVhbnR1bVJhbmdlKTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5HUkFZOlxyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkoMykuZmlsbChNYXRoLnJvdW5kKHRoaXMucXVhbnR1bVJhbmdlIC8gMikpLmNvbmNhdChbdGhpcy5xdWFudHVtUmFuZ2VdKTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5IT1JJWk9OVEFMX1RJTEU6XHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5IT1JJWk9OVEFMX1RJTEVfRURHRTpcclxuICAgICAgICBpZiAoeSA8IDAgfHwgeSA+PSB0aGlzLmhlaWdodCkge1xyXG4gICAgICAgICAgcmV0dXJuIG1ldGhvZCA9PT0gdnB4TWV0aG9kcy5IT1JJWk9OVEFMX1RJTEUgPyB0aGlzLmJhY2tncm91bmRDb2xvci5zbGljZSgpXHJcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoLi4uZ2V0RWRnZUNvb3Jkcyh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VQaXhlbENvbG9yKC4uLmdldFRpbGVDb29yZHMoeCwgeSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5WRVJUSUNBTF9USUxFOlxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuVkVSVElDQUxfVElMRV9FREdFOlxyXG4gICAgICAgIGlmICh4IDwgMCB8fCB4ID49IHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgIHJldHVybiBtZXRob2QgPT09IHZweE1ldGhvZHMuVkVSVElDQUxfVElMRSA/IHRoaXMuYmFja2dyb3VuZENvbG9yLnNsaWNlKClcclxuICAgICAgICAgICAgOiB0aGlzLmdldEltYWdlUGl4ZWxDb2xvciguLi5nZXRFZGdlQ29vcmRzKHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoLi4uZ2V0VGlsZUNvb3Jkcyh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpO1xyXG5cclxuICAgICAgY2FzZSB2cHhNZXRob2RzLlJBTkRPTTpcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoXHJcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoKSxcclxuICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmlydHVhbFBpeGVsVHJhaXQ7IiwiaW1wb3J0IHZweCBmcm9tICcuLi92cHgnO1xyXG5pbXBvcnQgaW50ZXJwb2xhdGlvbiBmcm9tICcuLi9pbnRlcnBvbGF0aW9uJztcclxuaW1wb3J0IHtNQVhJTVVNX1ZBTFVFfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7YmxlbmRDb2xvcnN9IGZyb20gXCIuLi91dGlsL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cclxuY29uc3QgV0VJR0hUX0xPT0tVUF9UQUJMRV9XSURUSCA9IDEwMjQ7XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtGaWx0ZXJJbnRlcmZhY2V9IGZpbHRlclxyXG4gKiBAcGFyYW0ge251bWJlcn0gc3VwcG9ydFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyW119XHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZFdlaWdodExvb2t1cFRhYmxlKGZpbHRlciwgc3VwcG9ydCkge1xyXG4gIGNvbnN0IHRhYmxlID0gW107XHJcblxyXG4gIGNvbnN0IHJTY2FsZSA9IHN1cHBvcnQgKiBNYXRoLnNxcnQoMSAvIFdFSUdIVF9MT09LVVBfVEFCTEVfV0lEVEgpO1xyXG5cclxuICBmb3IgKGxldCBRID0gMDsgUSA8IFdFSUdIVF9MT09LVVBfVEFCTEVfV0lEVEg7IFErKykge1xyXG4gICAgdGFibGVbUV0gPSBmaWx0ZXIuZ2V0V2VpZ2h0KE1hdGguc3FydChRKSAqIHJTY2FsZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGFibGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICogQHBhcmFtIHF1YW50dW1SYW5nZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gY2xhbXBUb1F1YW50dW0odmFsdWUsIHF1YW50dW1SYW5nZSkge1xyXG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihxdWFudHVtUmFuZ2UsIHZhbHVlKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiA8cD5DbGFtcEVsbGlwc2VBeGVzKCkgZnVuY3Rpb24gY29udmVydHMgdGhlIGlucHV0IHZlY3RvcnMgaW50byBhIG1ham9yIGFuZFxyXG4gKiBtaW5vciBheGlzIHVuaXQgdmVjdG9ycywgYW5kIHRoZWlyIG1hZ25pdHVkZS4gIFRoaXMgYWxsb3dzIHVzIHRvXHJcbiAqIGVuc3VyZSB0aGF0IHRoZSBlbGxpcHNlIGdlbmVyYXRlZCBpcyBuZXZlciBzbWFsbGVyIHRoYW4gdGhlIHVuaXRcclxuICogY2lyY2xlIGFuZCB0aHVzIG5ldmVyIHRvbyBzbWFsbCBmb3IgdXNlIGluIEVXQSByZXNhbXBsaW5nLjwvcD5cclxuICpcclxuICogPHA+VGhpcyBwdXJlbHkgbWF0aGVtYXRpY2FsICdtYWdpYycgd2FzIHByb3ZpZGVkIGJ5IFByb2Zlc3NvciBOaWNvbGFzXHJcbiAqIFJvYmlkb3V4IGFuZCBoaXMgTWFzdGVycyBzdHVkZW50IENoYW50YWwgUmFjZXR0ZS48L3A+XHJcbiAqXHJcbiAqIDxwPlJlZmVyZW5jZTogXCJXZSBSZWNvbW1lbmQgU2luZ3VsYXIgVmFsdWUgRGVjb21wb3NpdGlvblwiLCBEYXZpZCBBdXN0aW5cclxuICogICB7QGxpbmsgaHR0cDovL3d3dy5hbXMub3JnL3NhbXBsaW5ncy9mZWF0dXJlLWNvbHVtbi9mY2FyYy1zdmR9PC9wPlxyXG4gKlxyXG4gKiA8cD5CeSBnZW5lcmF0aW5nIG1ham9yIGFuZCBtaW5vciBheGlzIHZlY3RvcnMsIHdlIGNhbiBhY3R1YWxseSB1c2UgdGhlXHJcbiAqIGVsbGlwc2UgaW4gaXRzIFwiY2Fub25pY2FsIGZvcm1cIiwgYnkgcmVtYXBwaW5nIHRoZSBkeCxkeSBvZiB0aGVcclxuICogc2FtcGxlZCBwb2ludCBpbnRvIGRpc3RhbmNlcyBhbG9uZyB0aGUgbWFqb3IgYW5kIG1pbm9yIGF4aXMgdW5pdFxyXG4gKiB2ZWN0b3JzLjwvcD5cclxuICpcclxuICogPHA+UmVmZXJlbmNlOiB7QGxpbmsgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9FbGxpcHNlI0Nhbm9uaWNhbF9mb3JtfTwvcD5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1eFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHV5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdnhcclxuICogQHBhcmFtIHtudW1iZXJ9IGR2eVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyW119XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3Jlc2FtcGxlXzhjX3NvdXJjZS5odG1sI2wwMDcwOSBDbGFtcFVwQXhlcygpIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICogQHR1dG9yaWFsIDAyLjAzLnBpeGVsLWNvbG9yLWxvb2t1cFxyXG4gKi9cclxuZnVuY3Rpb24gY2xhbXBFbGxpcHNlQXhlcyhkdXgsIGR1eSwgZHZ4LCBkdnkpIHtcclxuICAvKlxyXG4gICAqIENsYW1wVXBBeGVzIHRha2VzIGFuIGlucHV0IDJ4MiBtYXRyaXhcclxuICAgKlxyXG4gICAqIFsgYSBiIF0gPSBbIGR1eCBkdXkgXVxyXG4gICAqIFsgYyBkIF0gPSBbIGR2eCBkdnkgXVxyXG4gICAqXHJcbiAgICogYW5kIGNvbXB1dGVzIGZyb20gaXQgdGhlIG1ham9yIGFuZCBtaW5vciBheGlzIHZlY3RvcnMgW21ham9yX3gsXHJcbiAgICogbWFqb3JfeV0gYW5kIFttaW5vcl94LG1pbm9yX3ldIG9mIHRoZSBzbWFsbGVzdCBlbGxpcHNlIGNvbnRhaW5pbmdcclxuICAgKiBib3RoIHRoZSB1bml0IGRpc2sgYW5kIHRoZSBlbGxpcHNlIHdoaWNoIGlzIHRoZSBpbWFnZSBvZiB0aGUgdW5pdFxyXG4gICAqIGRpc2sgYnkgdGhlIGxpbmVhciB0cmFuc2Zvcm1hdGlvblxyXG4gICAqXHJcbiAgICogWyBkdXggZHV5IF0gW1NdID0gW3NdXHJcbiAgICogWyBkdnggZHZ5IF0gW1RdID0gW3RdXHJcbiAgICpcclxuICAgKiAoVGhlIHZlY3RvciBbUyxUXSBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgcG9zaXRpb24gaW4gb3V0cHV0XHJcbiAgICogc3BhY2UgYW5kIFtYLFldOyB0aGUgdmVjdG9yIFtzLHRdIGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYVxyXG4gICAqIHBvc2l0aW9uIGluIGlucHV0IHNwYWNlIGFuZCBbeCx5XS4pXHJcbiAgICovXHJcbiAgLypcclxuICAgKiBPdXRwdXQ6XHJcbiAgICpcclxuICAgKiBtYWpvcl9tYWcgaXMgdGhlIGhhbGYtbGVuZ3RoIG9mIHRoZSBtYWpvciBheGlzIG9mIHRoZSBcIm5ld1wiXHJcbiAgICogZWxsaXBzZS5cclxuICAgKlxyXG4gICAqIG1pbm9yX21hZyBpcyB0aGUgaGFsZi1sZW5ndGggb2YgdGhlIG1pbm9yIGF4aXMgb2YgdGhlIFwibmV3XCJcclxuICAgKiBlbGxpcHNlLlxyXG4gICAqXHJcbiAgICogbWFqb3JfdW5pdF94IGlzIHRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIG1ham9yIGF4aXMgZGlyZWN0aW9uIHZlY3RvclxyXG4gICAqIG9mIGJvdGggdGhlIFwib2xkXCIgYW5kIFwibmV3XCIgZWxsaXBzZXMuXHJcbiAgICpcclxuICAgKiBtYWpvcl91bml0X3kgaXMgdGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgbWFqb3IgYXhpcyBkaXJlY3Rpb24gdmVjdG9yLlxyXG4gICAqXHJcbiAgICogbWlub3JfdW5pdF94IGlzIHRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIG1pbm9yIGF4aXMgZGlyZWN0aW9uIHZlY3Rvci5cclxuICAgKlxyXG4gICAqIG1pbm9yX3VuaXRfeSBpcyB0aGUgeS1jb29yZGluYXRlIG9mIHRoZSBtaW5vciBheGlzIGRpcmVjdGlvbiB2ZWN0b3IuXHJcbiAgICpcclxuICAgKiBVbml0IHZlY3RvcnMgYXJlIHVzZWZ1bCBmb3IgY29tcHV0aW5nIHByb2plY3Rpb25zLCBpbiBwYXJ0aWN1bGFyLFxyXG4gICAqIHRvIGNvbXB1dGUgdGhlIGRpc3RhbmNlIGJldHdlZW4gYSBwb2ludCBpbiBvdXRwdXQgc3BhY2UgYW5kIHRoZVxyXG4gICAqIGNlbnRlciBvZiBhIHVuaXQgZGlzayBpbiBvdXRwdXQgc3BhY2UsIHVzaW5nIHRoZSBwb3NpdGlvbiBvZiB0aGVcclxuICAgKiBjb3JyZXNwb25kaW5nIHBvaW50IFtzLHRdIGluIGlucHV0IHNwYWNlLiBGb2xsb3dpbmcgdGhlIGNsYW1waW5nLFxyXG4gICAqIHRoZSBzcXVhcmUgb2YgdGhpcyBkaXN0YW5jZSBpc1xyXG4gICAqXHJcbiAgICogKCAoIHMgKiBtYWpvcl91bml0X3ggKyB0ICogbWFqb3JfdW5pdF95ICkgLyBtYWpvcl9tYWcgKV4yXHJcbiAgICogK1xyXG4gICAqICggKCBzICogbWlub3JfdW5pdF94ICsgdCAqIG1pbm9yX3VuaXRfeSApIC8gbWlub3JfbWFnICleMlxyXG4gICAqXHJcbiAgICogSWYgc3VjaCBkaXN0YW5jZXMgd2lsbCBiZSBjb21wdXRlZCBmb3IgbWFueSBbcyx0XSdzLCBpdCBtYWtlc1xyXG4gICAqIHNlbnNlIHRvIGFjdHVhbGx5IGNvbXB1dGUgdGhlIHJlY2lwcm9jYWwgb2YgbWFqb3JfbWFnIGFuZFxyXG4gICAqIG1pbm9yX21hZyBhbmQgbXVsdGlwbHkgdGhlbSBieSB0aGUgYWJvdmUgdW5pdCBsZW5ndGhzLlxyXG4gICAqXHJcbiAgICogTm93LCBpZiB5b3Ugd2FudCB0byBtb2RpZnkgdGhlIGlucHV0IHBhaXIgb2YgdGFuZ2VudCB2ZWN0b3JzIHNvXHJcbiAgICogdGhhdCBpdCBkZWZpbmVzIHRoZSBtb2RpZmllZCBlbGxpcHNlLCBhbGwgeW91IGhhdmUgdG8gZG8gaXMgc2V0XHJcbiAgICpcclxuICAgKiBuZXdkdXggPSBtYWpvcl9tYWcgKiBtYWpvcl91bml0X3hcclxuICAgKiBuZXdkdnggPSBtYWpvcl9tYWcgKiBtYWpvcl91bml0X3lcclxuICAgKiBuZXdkdXkgPSBtaW5vcl9tYWcgKiBtaW5vcl91bml0X3ggPSBtaW5vcl9tYWcgKiAtbWFqb3JfdW5pdF95XHJcbiAgICogbmV3ZHZ5ID0gbWlub3JfbWFnICogbWlub3JfdW5pdF95ID0gbWlub3JfbWFnICogIG1ham9yX3VuaXRfeFxyXG4gICAqXHJcbiAgICogYW5kIHVzZSB0aGVzZSB0YW5nZW50IHZlY3RvcnMgYXMgaWYgdGhleSB3ZXJlIHRoZSBvcmlnaW5hbCBvbmVzLlxyXG4gICAqIFVzdWFsbHksIHRoaXMgaXMgYSBkcmFzdGljIGNoYW5nZSBpbiB0aGUgdGFuZ2VudCB2ZWN0b3JzIGV2ZW4gaWZcclxuICAgKiB0aGUgc2luZ3VsYXIgdmFsdWVzIGFyZSBub3QgY2xhbXBlZDsgZm9yIGV4YW1wbGUsIHRoZSBtaW5vciBheGlzXHJcbiAgICogdmVjdG9yIGFsd2F5cyBwb2ludHMgaW4gYSBkaXJlY3Rpb24gd2hpY2ggaXMgOTAgZGVncmVlc1xyXG4gICAqIGNvdW50ZXJjbG9ja3dpc2UgZnJvbSB0aGUgZGlyZWN0aW9uIG9mIHRoZSBtYWpvciBheGlzIHZlY3Rvci5cclxuICAgKi9cclxuICAvKlxyXG4gICAqIERpc2N1c3Npb246XHJcbiAgICpcclxuICAgKiBHT0FMOiBGaXggdGhpbmdzIHNvIHRoYXQgdGhlIHB1bGxiYWNrLCBpbiBpbnB1dCBzcGFjZSwgb2YgYSBkaXNrXHJcbiAgICogb2YgcmFkaXVzIHIgaW4gb3V0cHV0IHNwYWNlIGlzIGFuIGVsbGlwc2Ugd2hpY2ggY29udGFpbnMsIGF0XHJcbiAgICogbGVhc3QsIGEgZGlzYyBvZiByYWRpdXMgci4gKE1ha2UgdGhpcyBob2xkIGZvciBhbnkgcj4wLilcclxuICAgKlxyXG4gICAqIEVTU0VOQ0UgT0YgVEhFIE1FVEhPRDogQ29tcHV0ZSB0aGUgcHJvZHVjdCBvZiB0aGUgZmlyc3QgdHdvXHJcbiAgICogZmFjdG9ycyBvZiBhbiBTVkQgb2YgdGhlIGxpbmVhciB0cmFuc2Zvcm1hdGlvbiBkZWZpbmluZyB0aGVcclxuICAgKiBlbGxpcHNlIGFuZCBtYWtlIHN1cmUgdGhhdCBib3RoIGl0cyBjb2x1bW5zIGhhdmUgbm9ybSBhdCBsZWFzdCAxLlxyXG4gICAqIEJlY2F1c2Ugcm90YXRpb25zIGFuZCByZWZsZXhpb25zIG1hcCBkaXNrcyB0byB0aGVtc2VsdmVzLCBpdCBpc1xyXG4gICAqIG5vdCBuZWNlc3NhcnkgdG8gY29tcHV0ZSB0aGUgdGhpcmQgKHJpZ2h0bW9zdCkgZmFjdG9yIG9mIHRoZSBTVkQuXHJcbiAgICpcclxuICAgKiBERVRBSUxTOiBGaW5kIHRoZSBzaW5ndWxhciB2YWx1ZXMgYW5kICh1bml0KSBsZWZ0IHNpbmd1bGFyXHJcbiAgICogdmVjdG9ycyBvZiBKaW52LCBjbGFtcGxpbmcgdXAgdGhlIHNpbmd1bGFyIHZhbHVlcyB0byAxLCBhbmRcclxuICAgKiBtdWx0aXBseSB0aGUgdW5pdCBsZWZ0IHNpbmd1bGFyIHZlY3RvcnMgYnkgdGhlIG5ldyBzaW5ndWxhclxyXG4gICAqIHZhbHVlcyBpbiBvcmRlciB0byBnZXQgdGhlIG1pbm9yIGFuZCBtYWpvciBlbGxpcHNlIGF4aXMgdmVjdG9ycy5cclxuICAgKlxyXG4gICAqIEltYWdlIHJlc2FtcGxpbmcgY29udGV4dDpcclxuICAgKlxyXG4gICAqIFRoZSBKYWNvYmlhbiBtYXRyaXggb2YgdGhlIHRyYW5zZm9ybWF0aW9uIGF0IHRoZSBvdXRwdXQgcG9pbnRcclxuICAgKiB1bmRlciBjb25zaWRlcmF0aW9uIGlzIGRlZmluZWQgYXMgZm9sbG93czpcclxuICAgKlxyXG4gICAqIENvbnNpZGVyIHRoZSB0cmFuc2Zvcm1hdGlvbiAoeCx5KSAtPiAoWCxZKSBmcm9tIGlucHV0IGxvY2F0aW9uc1xyXG4gICAqIHRvIG91dHB1dCBsb2NhdGlvbnMuIChBbnRob255IFRoeXNzZW4sIGVsc2V3aGVyZSBpbiByZXNhbXBsZS5jLFxyXG4gICAqIHVzZXMgdGhlIG5vdGF0aW9uICh1LHYpIC0+ICh4LHkpLilcclxuICAgKlxyXG4gICAqIFRoZSBKYWNvYmlhbiBtYXRyaXggb2YgdGhlIHRyYW5zZm9ybWF0aW9uIGF0ICh4LHkpIGlzIGVxdWFsIHRvXHJcbiAgICpcclxuICAgKiAgIEogPSBbIEEsIEIgXSA9IFsgZFgvZHgsIGRYL2R5IF1cclxuICAgKiAgICAgICBbIEMsIEQgXSAgIFsgZFkvZHgsIGRZL2R5IF1cclxuICAgKlxyXG4gICAqIHRoYXQgaXMsIHRoZSB2ZWN0b3IgW0EsQ10gaXMgdGhlIHRhbmdlbnQgdmVjdG9yIGNvcnJlc3BvbmRpbmcgdG9cclxuICAgKiBpbnB1dCBjaGFuZ2VzIGluIHRoZSBob3Jpem9udGFsIGRpcmVjdGlvbiwgYW5kIHRoZSB2ZWN0b3IgW0IsRF1cclxuICAgKiBpcyB0aGUgdGFuZ2VudCB2ZWN0b3IgY29ycmVzcG9uZGluZyB0byBpbnB1dCBjaGFuZ2VzIGluIHRoZVxyXG4gICAqIHZlcnRpY2FsIGRpcmVjdGlvbi5cclxuICAgKlxyXG4gICAqIEluIHRoZSBjb250ZXh0IG9mIHJlc2FtcGxpbmcsIGl0IGlzIG5hdHVyYWwgdG8gdXNlIHRoZSBpbnZlcnNlXHJcbiAgICogSmFjb2JpYW4gbWF0cml4IEppbnYgYmVjYXVzZSByZXNhbXBsaW5nIGlzIGdlbmVyYWxseSBwZXJmb3JtZWQgYnlcclxuICAgKiBwdWxsaW5nIHBpeGVsIGxvY2F0aW9ucyBpbiB0aGUgb3V0cHV0IGltYWdlIGJhY2sgdG8gbG9jYXRpb25zIGluXHJcbiAgICogdGhlIGlucHV0IGltYWdlLiBKaW52IGlzXHJcbiAgICpcclxuICAgKiAgIEppbnYgPSBbIGEsIGIgXSA9IFsgZHgvZFgsIGR4L2RZIF1cclxuICAgKiAgICAgICAgICBbIGMsIGQgXSAgIFsgZHkvZFgsIGR5L2RZIF1cclxuICAgKlxyXG4gICAqIE5vdGU6IEppbnYgY2FuIGJlIGNvbXB1dGVkIGZyb20gSiB3aXRoIHRoZSBmb2xsb3dpbmcgbWF0cml4XHJcbiAgICogZm9ybXVsYTpcclxuICAgKlxyXG4gICAqICAgSmludiA9IDEvKEEqRC1CKkMpIFsgIEQsIC1CIF1cclxuICAgKiAgICAgICAgICAgICAgICAgICAgICBbIC1DLCAgQSBdXHJcbiAgICpcclxuICAgKiBXaGF0IHdlIGRvIGlzIG1vZGlmeSBKaW52IHNvIHRoYXQgaXQgZ2VuZXJhdGVzIGFuIGVsbGlwc2Ugd2hpY2hcclxuICAgKiBpcyBhcyBjbG9zZSBhcyBwb3NzaWJsZSB0byB0aGUgb3JpZ2luYWwgYnV0IHdoaWNoIGNvbnRhaW5zIHRoZVxyXG4gICAqIHVuaXQgZGlzay4gVGhpcyBjYW4gYmUgYWNjb21wbGlzaGVkIGFzIGZvbGxvd3M6XHJcbiAgICpcclxuICAgKiBMZXRcclxuICAgKlxyXG4gICAqICAgSmludiA9IFUgU2lnbWEgVl5UXHJcbiAgICpcclxuICAgKiBiZSBhbiBTVkQgZGVjb21wb3NpdGlvbiBvZiBKaW52LiAoVGhlIFNWRCBpcyBub3QgdW5pcXVlLCBidXQgdGhlXHJcbiAgICogZmluYWwgZWxsaXBzZSBkb2VzIG5vdCBkZXBlbmQgb24gdGhlIHBhcnRpY3VsYXIgU1ZELilcclxuICAgKlxyXG4gICAqIFdlIGNvdWxkIGNsYW1wIHVwIHRoZSBlbnRyaWVzIG9mIHRoZSBkaWFnb25hbCBtYXRyaXggU2lnbWEgc29cclxuICAgKiB0aGF0IHRoZXkgYXJlIGF0IGxlYXN0IDEsIGFuZCB0aGVuIHNldFxyXG4gICAqXHJcbiAgICogICBKaW52ID0gVSBuZXdTaWdtYSBWXlQuXHJcbiAgICpcclxuICAgKiBIb3dldmVyLCB3ZSBkbyBub3QgbmVlZCB0byBjb21wdXRlIFYgZm9yIHRoZSBmb2xsb3dpbmcgcmVhc29uOlxyXG4gICAqIFZeVCBpcyBhbiBvcnRob2dvbmFsIG1hdHJpeCAodGhhdCBpcywgaXQgcmVwcmVzZW50cyBhIGNvbWJpbmF0aW9uXHJcbiAgICogb2Ygcm90YXRpb25zIGFuZCByZWZsZXhpb25zKSBzbyB0aGF0IGl0IG1hcHMgdGhlIHVuaXQgY2lyY2xlIHRvXHJcbiAgICogaXRzZWxmLiBGb3IgdGhpcyByZWFzb24sIHRoZSBleGFjdCB2YWx1ZSBvZiBWIGRvZXMgbm90IGFmZmVjdCB0aGVcclxuICAgKiBmaW5hbCBlbGxpcHNlLCBhbmQgd2UgY2FuIGNob29zZSBWIHRvIGJlIHRoZSBpZGVudGl0eVxyXG4gICAqIG1hdHJpeC4gVGhpcyBnaXZlc1xyXG4gICAqXHJcbiAgICogICBKaW52ID0gVSBuZXdTaWdtYS5cclxuICAgKlxyXG4gICAqIEluIHRoZSBlbmQsIHdlIHJldHVybiB0aGUgdHdvIGRpYWdvbmFsIGVudHJpZXMgb2YgbmV3U2lnbWFcclxuICAgKiB0b2dldGhlciB3aXRoIHRoZSB0d28gY29sdW1ucyBvZiBVLlxyXG4gICAqL1xyXG4gIC8qXHJcbiAgICogQ2xhbXBVcEF4ZXMgd2FzIHdyaXR0ZW4gYnkgTmljb2xhcyBSb2JpZG91eCBhbmQgQ2hhbnRhbCBSYWNldHRlXHJcbiAgICogb2YgTGF1cmVudGlhbiBVbml2ZXJzaXR5IHdpdGggaW5zaWdodGZ1bCBzdWdnZXN0aW9ucyBmcm9tIEFudGhvbnlcclxuICAgKiBUaHlzc2VuIGFuZCBmdW5kaW5nIGZyb20gdGhlIE5hdGlvbmFsIFNjaWVuY2UgYW5kIEVuZ2luZWVyaW5nXHJcbiAgICogUmVzZWFyY2ggQ291bmNpbCBvZiBDYW5hZGEuIEl0IGlzIGRpc3Rpbmd1aXNoZWQgZnJvbSBpdHNcclxuICAgKiBwcmVkZWNlc3NvcnMgYnkgaXRzIGVmZmljaWVudCBoYW5kbGluZyBvZiBkZWdlbmVyYXRlIGNhc2VzLlxyXG4gICAqXHJcbiAgICogVGhlIGlkZWEgb2YgY2xhbXBpbmcgdXAgdGhlIEVXQSBlbGxpcHNlJ3MgbWFqb3IgYW5kIG1pbm9yIGF4ZXMgc29cclxuICAgKiB0aGF0IHRoZSByZXN1bHQgY29udGFpbnMgdGhlIHJlY29uc3RydWN0aW9uIGtlcm5lbCBmaWx0ZXIgc3VwcG9ydFxyXG4gICAqIGlzIHRha2VuIGZyb20gQW5kcmVhcyBHdXN0YWZmc29uJ3MgTWFzdGVycyB0aGVzaXMgXCJJbnRlcmFjdGl2ZVxyXG4gICAqIEltYWdlIFdhcnBpbmdcIiwgSGVsc2lua2kgVW5pdmVyc2l0eSBvZiBUZWNobm9sb2d5LCBGYWN1bHR5IG9mXHJcbiAgICogSW5mb3JtYXRpb24gVGVjaG5vbG9neSwgNTkgcGFnZXMsIDE5OTMgKHNlZSBTZWN0aW9uIDMuNikuXHJcbiAgICpcclxuICAgKiBUaGUgdXNlIG9mIHRoZSBTVkQgdG8gY2xhbXAgdXAgdGhlIHNpbmd1bGFyIHZhbHVlcyBvZiB0aGVcclxuICAgKiBKYWNvYmlhbiBtYXRyaXggb2YgdGhlIHB1bGxiYWNrIHRyYW5zZm9ybWF0aW9uIGZvciBFV0EgcmVzYW1wbGluZ1xyXG4gICAqIGlzIHRha2VuIGZyb20gdGhlIGFzdHJvcGh5c2ljaXN0IENyYWlnIERlRm9yZXN0LiAgSXQgaXNcclxuICAgKiBpbXBsZW1lbnRlZCBpbiBoaXMgUERMOjpUcmFuc2Zvcm0gY29kZSAoUERMID0gUGVybCBEYXRhXHJcbiAgICogTGFuZ3VhZ2UpLlxyXG4gICAqL1xyXG5cclxuICBjb25zdCBhID0gZHV4O1xyXG4gIGNvbnN0IGIgPSBkdXk7XHJcbiAgY29uc3QgYyA9IGR2eDtcclxuICBjb25zdCBkID0gZHZ5O1xyXG5cclxuICAvKlxyXG4gICAqIG4gaXMgdGhlIG1hdHJpeCBKaW52ICogdHJhbnNwb3NlKEppbnYpLiBFaWdlbnZhbHVlcyBvZiBuIGFyZSB0aGVcclxuICAgKiBzcXVhcmVzIG9mIHRoZSBzaW5ndWxhciB2YWx1ZXMgb2YgSmludi5cclxuICAgKi9cclxuICBjb25zdCBhYSA9IGEgKiBhO1xyXG4gIGNvbnN0IGJiID0gYiAqIGI7XHJcbiAgY29uc3QgY2MgPSBjICogYztcclxuICBjb25zdCBkZCA9IGQgKiBkO1xyXG5cclxuICAvKlxyXG4gICAqIEVpZ2VudmVjdG9ycyBvZiBuIGFyZSBsZWZ0IHNpbmd1bGFyIHZlY3RvcnMgb2YgSmludi5cclxuICAgKi9cclxuICBjb25zdCBuMTEgPSBhYSArIGJiO1xyXG4gIGNvbnN0IG4xMiA9IGEgKiBjICsgYiAqIGQ7XHJcbiAgY29uc3QgbjIxID0gbjEyO1xyXG4gIGNvbnN0IG4yMiA9IGNjICsgZGQ7XHJcbiAgY29uc3QgZGV0ID0gYSAqIGQgLSBiICogYztcclxuICBjb25zdCB0d2ljZV9kZXQgPSBkZXQgKyBkZXQ7XHJcbiAgY29uc3QgZnJvYmVuaXVzX3NxdWFyZWQgPSBuMTEgKyBuMjI7XHJcbiAgY29uc3QgZGlzY3JpbWluYW50ID0gKGZyb2Jlbml1c19zcXVhcmVkICsgdHdpY2VfZGV0KSAqIChmcm9iZW5pdXNfc3F1YXJlZCAtIHR3aWNlX2RldCk7XHJcblxyXG4gIC8qXHJcbiAgICogSW4gZXhhY3QgYXJpdGhtZXRpYywgZGlzY3JpbWluYW50IGNhbid0IGJlIG5lZ2F0aXZlLiBJbiBmbG9hdGluZ1xyXG4gICAqIHBvaW50LCBpdCBjYW4sIGJlY2F1c2Ugb2YgdGhlIGJhZCBjb25kaXRpb25pbmcgb2YgU1ZEXHJcbiAgICogZGVjb21wb3NpdGlvbnMgZG9uZSB0aHJvdWdoIHRoZSBhc3NvY2lhdGVkIG5vcm1hbCBtYXRyaXguXHJcbiAgICovXHJcbiAgY29uc3Qgc3FydF9kaXNjcmltaW5hbnQgPSBNYXRoLnNxcnQoZGlzY3JpbWluYW50ID4gMCA/IGRpc2NyaW1pbmFudCA6IDApO1xyXG5cclxuICAvKlxyXG4gICAqIHMxIGlzIHRoZSBsYXJnZXN0IHNpbmd1bGFyIHZhbHVlIG9mIHRoZSBpbnZlcnNlIEphY29iaWFuXHJcbiAgICogbWF0cml4LiBJbiBvdGhlciB3b3JkcywgaXRzIHJlY2lwcm9jYWwgaXMgdGhlIHNtYWxsZXN0IHNpbmd1bGFyXHJcbiAgICogdmFsdWUgb2YgdGhlIEphY29iaWFuIG1hdHJpeCBpdHNlbGYuXHJcbiAgICogSWYgczEgPSAwLCBib3RoIHNpbmd1bGFyIHZhbHVlcyBhcmUgMCwgYW5kIGFueSBvcnRob2dvbmFsIHBhaXIgb2ZcclxuICAgKiBsZWZ0IGFuZCByaWdodCBmYWN0b3JzIHByb2R1Y2VzIGEgc2luZ3VsYXIgZGVjb21wb3NpdGlvbiBvZiBKaW52LlxyXG4gICAqL1xyXG4gIC8qXHJcbiAgICogSW5pdGlhbGx5LCB3ZSBvbmx5IGNvbXB1dGUgdGhlIHNxdWFyZXMgb2YgdGhlIHNpbmd1bGFyIHZhbHVlcy5cclxuICAgKi9cclxuICBjb25zdCBzMXMxID0gMC41ICogKGZyb2Jlbml1c19zcXVhcmVkICsgc3FydF9kaXNjcmltaW5hbnQpO1xyXG5cclxuICAvKlxyXG4gICAqIHMyIHRoZSBzbWFsbGVzdCBzaW5ndWxhciB2YWx1ZSBvZiB0aGUgaW52ZXJzZSBKYWNvYmlhblxyXG4gICAqIG1hdHJpeC4gSXRzIHJlY2lwcm9jYWwgaXMgdGhlIGxhcmdlc3Qgc2luZ3VsYXIgdmFsdWUgb2YgdGhlXHJcbiAgICogSmFjb2JpYW4gbWF0cml4IGl0c2VsZi5cclxuICAgKi9cclxuICBjb25zdCBzMnMyID0gMC41ICogKGZyb2Jlbml1c19zcXVhcmVkIC0gc3FydF9kaXNjcmltaW5hbnQpO1xyXG4gIGNvbnN0IHMxczFtaW51c24xMSA9IHMxczEgLSBuMTE7XHJcbiAgY29uc3QgczFzMW1pbnVzbjIyID0gczFzMSAtIG4yMjtcclxuXHJcbiAgLypcclxuICAgKiB1MSwgdGhlIGZpcnN0IGNvbHVtbiBvZiB0aGUgVSBmYWN0b3Igb2YgYSBzaW5ndWxhciBkZWNvbXBvc2l0aW9uXHJcbiAgICogb2YgSmludiwgaXMgYSAobm9uLW5vcm1hbGl6ZWQpIGxlZnQgc2luZ3VsYXIgdmVjdG9yIGNvcnJlc3BvbmRpbmdcclxuICAgKiB0byBzMS4gSXQgaGFzIGVudHJpZXMgdTExIGFuZCB1MjEuIFdlIGNvbXB1dGUgdTEgZnJvbSB0aGUgZmFjdFxyXG4gICAqIHRoYXQgaXQgaXMgYW4gZWlnZW52ZWN0b3Igb2YgbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBlaWdlbnZhbHVlXHJcbiAgICogczFeMi5cclxuICAgKi9cclxuICBjb25zdCBzMXMxbWludXNuMTFfc3F1YXJlZCA9IHMxczFtaW51c24xMSAqIHMxczFtaW51c24xMTtcclxuICBjb25zdCBzMXMxbWludXNuMjJfc3F1YXJlZCA9IHMxczFtaW51c24yMiAqIHMxczFtaW51c24yMjtcclxuXHJcbiAgLypcclxuICAgKiBUaGUgZm9sbG93aW5nIHNlbGVjdHMgdGhlIGxhcmdlc3Qgcm93IG9mIG4tczFeMiBJIGFzIHRoZSBvbmVcclxuICAgKiB3aGljaCBpcyB1c2VkIHRvIGZpbmQgdGhlIGVpZ2VudmVjdG9yLiBJZiBib3RoIHMxXjItbjExIGFuZFxyXG4gICAqIHMxXjItbjIyIGFyZSB6ZXJvLCBuLXMxXjIgSSBpcyB0aGUgemVybyBtYXRyaXguICBJbiB0aGF0IGNhc2UsXHJcbiAgICogYW55IHZlY3RvciBpcyBhbiBlaWdlbnZlY3RvcjsgaW4gYWRkaXRpb24sIG5vcm0gYmVsb3cgaXMgZXF1YWwgdG9cclxuICAgKiB6ZXJvLCBhbmQsIGluIGV4YWN0IGFyaXRobWV0aWMsIHRoaXMgaXMgdGhlIG9ubHkgY2FzZSBpbiB3aGljaFxyXG4gICAqIG5vcm0gPSAwLiBTbywgc2V0dGluZyB1MSB0byB0aGUgc2ltcGxlIGJ1dCBhcmJpdHJhcnkgdmVjdG9yIFsxLDBdXHJcbiAgICogaWYgbm9ybSA9IDAgc2FmZWx5IHRha2VzIGNhcmUgb2YgYWxsIGNhc2VzLlxyXG4gICAqL1xyXG4gIGNvbnN0IHRlbXBfdTExID0gKHMxczFtaW51c24xMV9zcXVhcmVkID49IHMxczFtaW51c24yMl9zcXVhcmVkKSA/IG4xMiA6IHMxczFtaW51c24yMjtcclxuICBjb25zdCB0ZW1wX3UyMSA9IChzMXMxbWludXNuMTFfc3F1YXJlZCA+PSBzMXMxbWludXNuMjJfc3F1YXJlZCkgPyBzMXMxbWludXNuMTEgOiBuMjE7XHJcbiAgY29uc3Qgbm9ybSA9IE1hdGguc3FydCh0ZW1wX3UxMSAqIHRlbXBfdTExICsgdGVtcF91MjEgKiB0ZW1wX3UyMSk7XHJcblxyXG4gIC8qXHJcbiAgICogRmluYWxpemUgdGhlIGVudHJpZXMgb2YgZmlyc3QgbGVmdCBzaW5ndWxhciB2ZWN0b3IgKGFzc29jaWF0ZWRcclxuICAgKiB3aXRoIHRoZSBsYXJnZXN0IHNpbmd1bGFyIHZhbHVlKS5cclxuICAgKi9cclxuICBjb25zdCB1MTEgPSBub3JtID4gMCA/IHRlbXBfdTExIC8gbm9ybSA6IDE7XHJcbiAgY29uc3QgdTIxID0gbm9ybSA+IDAgPyB0ZW1wX3UyMSAvIG5vcm0gOiAwO1xyXG5cclxuICAvKlxyXG4gICAqIENsYW1wIHRoZSBzaW5ndWxhciB2YWx1ZXMgdXAgdG8gMS5cclxuICAgKi9cclxuICBjb25zdCBtYWpvcl9tYWcgPSBzMXMxIDw9IDEgPyAxIDogTWF0aC5zcXJ0KHMxczEpO1xyXG4gIGNvbnN0IG1pbm9yX21hZyA9IHMyczIgPD0gMSA/IDEgOiBNYXRoLnNxcnQoczJzMik7XHJcblxyXG5cclxuICBjb25zdCBtYWpvcl94ID0gdTExICogbWFqb3JfbWFnO1xyXG4gIGNvbnN0IG1ham9yX3kgPSB1MjEgKiBtYWpvcl9tYWc7XHJcbiAgY29uc3QgbWlub3JfeCA9IC11MjEgKiBtaW5vcl9tYWc7XHJcbiAgY29uc3QgbWlub3JfeSA9IHUxMSAqIG1pbm9yX21hZztcclxuXHJcbiAgcmV0dXJuIFtcclxuICAgIG1ham9yX3gsXHJcbiAgICBtYWpvcl95LFxyXG4gICAgbWlub3JfeCxcclxuICAgIG1pbm9yX3ksXHJcbiAgICBtYWpvcl9tYWcsXHJcbiAgICBtaW5vcl9tYWdcclxuICBdO1xyXG59XHJcblxyXG4vKipcclxuICogRWxsaXB0aWNhbCBXZWlnaHRlZCBBdmVyYWdlLlxyXG4gKiBSZXNhbXBsZXMgcGl4ZWwgY29sb3IgdXNpbmcgRWxsaXB0aWNhbCBXZWlnaHRlZCBBdmVyYWdlIHRlY2huaXF1ZS5cclxuICpcclxuICogQGltcGxlbWVudHMge1Jlc2FtcGxlckludGVyZmFjZX1cclxuICogQG1lbWJlck9mIGxlbnMucmVzYW1wbGVyXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9kaXN0b3J0cy8jZGlzdG9ydF9ld2EgRVdBIGRldGFpbHN9IGF0IEltYWdlTWFnaWNrIGRvY3MuXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3Mi5lZWNzLmJlcmtlbGV5LmVkdS9QdWJzL1RlY2hScHRzLzE5ODkvQ1NELTg5LTUxNi5wZGYgRnVuZGFtZW50YWxzIG9mIFRleHR1cmUgTWFwcGluZyBhbmQgSW1hZ2UgV2FycGluZyBieSBQYXVsIFMuIEhlY2tiZXJ0fVxyXG4gKiBwYWdlIDQxLCBzZWN0aW9uIDMuNCwgMy41XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3Jlc2FtcGxlXzhjX3NvdXJjZS5odG1sI2wwMTAzOCBTY2FsZVJlc2FtcGxlRmlsdGVyKCl9IGF0XHJcbiAqIEltYWdlTWFnaWNrIHNvdXJjZS5cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvcmVzYW1wbGVfOGNfc291cmNlLmh0bWwjbDAwMzE1IFJlc2FtcGxlUGl4ZWxDb2xvcigpfSBhdFxyXG4gKiBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAqL1xyXG5jbGFzcyBFV0Ege1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RmlsdGVySW50ZXJmYWNlfSBmaWx0ZXJcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihmaWx0ZXIpIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVjb25zdHJ1Y3Rpb24gZmlsdGVyLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge0ZpbHRlckludGVyZmFjZX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXNpemVGaWx0ZXIgPSBmaWx0ZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcHJhY3RpY2FsIHdvcmtpbmcgc3VwcG9ydCBvZiB0aGUgZmlsdGVyXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnN1cHBvcnQgPSB0aGlzLnJlc2l6ZUZpbHRlci5zdXBwb3J0ICogdGhpcy5yZXNpemVGaWx0ZXIuYmx1cjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hdHRlIGNvbG9yIGZvciBpbnZhbGlkIG1hcHBpbmdzLlxyXG4gICAgICogQHR5cGUge0NvbG9yfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1hdHRlQ29sb3IgPSBbMCwgMCwgMCwgMF07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb29rdXAgdGFibGUgb2Ygd2VpZ2h0cyBmb3IgZmlsdGVyZWQgYXZlcmFnZSBpbiBlbGxpcHRpY2FsIGFyZWEuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyW119XHJcbiAgICAgKi9cclxuICAgIHRoaXMud2VpZ2h0TG9va3VwVGFibGUgPSBidWlsZFdlaWdodExvb2t1cFRhYmxlKHRoaXMucmVzaXplRmlsdGVyLCB0aGlzLnN1cHBvcnQpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1hZ2UgYmVpbmcgcmVzYW1wbGVkLlxyXG4gICAgICogQHR5cGUge0ltYWdlSW50ZXJmYWNlfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3RvcnRpb24gbWFwcGVyLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge0Rpc3RvcnRpb25JbnRlcmZhY2V9XHJcbiAgICAgKi9cclxuICAgIHRoaXMubWFwcGVyID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhY2hlZCBmb3IgZGlyZWN0IGFjY2VzcyBpbWFnZSB2aXJ0dWFsIHZpZXdwb3J0LlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge2xlbnMuVmlld3BvcnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaW1hZ2VWaWV3cG9ydCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWNoZWQgaW1hZ2UgYXJlYS5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaW1hZ2VBcmVhID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhY2hlZCBmb3IgZGlyZWN0IGFjY2VzcyBpbWFnZSB2aXJ0dWFsIHBpeGVsIG1ldGhvZC5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtsZW5zLnZweH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5pbWFnZVZpcnR1YWxQaXhlbE1ldGhvZCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWNoZWQgaW1hZ2UgYXZlcmFnZSBjb2xvci5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtDb2xvcnxudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmltYWdlQXZlcmFnZUNvbG9yID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVsbGlwc2UgZXF1aWF0aW9uIEEuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLkEgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRWxsaXBzZSBlcXVhdGlvbiBCLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5CID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVsbGlwc2UgZXF1YXRpb24gQy5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuQyA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbGxpcHNlIGVxdWF0aW9uIEYuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLkYgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy51TGltaXQgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy52TGltaXQgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy51V2lkdGggPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5zbG9wZSA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIGZvciBkaXN0b3J0aW9ucyB3aXRoIGNvbnN0YW50IHBhcnRpYWwgZGVyaXZhdGl2ZXMgdG8gZmxhZyB0aGF0IGVsbGlwc2UgYWxyZWFkeSBoYXMgYmVlbiBzZXQgdXAuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5lbGxpcHNlSXNTZXRVcCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmxhZ3MgdGhhdCBlbGxpcHNlIGlzIHRvbyBsYXJnZSBhbmQgaXQgaXMgaW1wcmFjdGljYWwgdG8gcmVzYW1wbGUgY29sb3IgLS0gYmV0dGVyIHVzZSBzb21lIG9mIHBvc3NpYmxlXHJcbiAgICAgKiBvcHRpbWl6YXRpb25zLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMubGltaXRSZWFjaGVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgaW1hZ2Ugc2NhbGluZyBmYWN0b3IuXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnNjYWxpbmcgPSAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRSZXNhbXBsZWRDb2xvcih4LCB5KSB7XHJcbiAgICB4ID0geCAqIHRoaXMuc2NhbGluZztcclxuICAgIHkgPSB5ICogdGhpcy5zY2FsaW5nO1xyXG5cclxuICAgIGNvbnN0IHZhbGlkaXR5ID0gdGhpcy5tYXBwZXIuZ2V0VmFsaWRpdHkoeCwgeSwgdGhpcy5zY2FsaW5nKTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHkgPiAwKSB7XHJcbiAgICAgIGNvbnN0IFt1LCB2XSA9IHRoaXMubWFwcGVyLnJldmVyc2VNYXAoeCwgeSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5tYXBwZXIuaGFzQ29uc3RhbnRQYXJ0aWFsRGVyaXZhdGl2ZXMpIHtcclxuICAgICAgICB0aGlzLnNldHVwRWxsaXBzZU9uY2UoLi4udGhpcy5tYXBwZXIuZ2V0UGFydGlhbERlcml2YXRpdmVzKHgsIHkpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldHVwRWxsaXBzZSguLi50aGlzLm1hcHBlci5nZXRQYXJ0aWFsRGVyaXZhdGl2ZXMoeCwgeSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuZ2V0V2VpZ2h0ZWRBdmVyYWdlKHUsIHYpO1xyXG5cclxuICAgICAgaWYgKHZhbGlkaXR5IDwgMSkge1xyXG4gICAgICAgIHJldHVybiBibGVuZENvbG9ycyhjb2xvciwgdmFsaWRpdHksIHRoaXMubWF0dGVDb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5tYXR0ZUNvbG9yLnNsaWNlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHNldEltYWdlKGltYWdlKSB7XHJcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAvLyBjYWNoZSBpbWFnZSB2aWV3cG9ydCBmb3IgZmFzdGVyIGRpcmVjdCBhY2Nlc3MuXHJcbiAgICB0aGlzLmltYWdlVmlld3BvcnQgPSB0aGlzLmltYWdlLnZpZXdwb3J0O1xyXG4gICAgLy8gY2FjaGUgaW1hZ2UgYXJlYS5cclxuICAgIHRoaXMuaW1hZ2VBcmVhID0gdGhpcy5pbWFnZVZpZXdwb3J0LmFyZWEoKTtcclxuICAgIC8vIGNhY2hlIGltYWdlIHZpcnR1YWwgcGl4ZWwgbWV0aG9kICh3aWxsIGl0IGJlIGZhc3RlciBhY3R1YWxseT8pXHJcbiAgICB0aGlzLmltYWdlVmlydHVhbFBpeGVsTWV0aG9kID0gdGhpcy5pbWFnZS52aXJ0dWFsUGl4ZWxNZXRob2Q7XHJcbiAgICAvLyByZXNldCBjYWNoZWQgaW1hZ2UgYXZlcmFnZSBjb2xvclxyXG4gICAgdGhpcy5pbWFnZUF2ZXJhZ2VDb2xvciA9IG51bGw7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc2V0TWFwcGVyKG1hcHBlcikge1xyXG4gICAgaWYgKCFtYXBwZXIuaGFzUGFydGlhbERlcml2YXRpdmVzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGl4ZWwgbWFwcGVyIG11c3QgaGF2ZSBwYXJ0aWFsIGRlcml2YXRpdmVzIHRvIHVzZSB0aGlzIHJlc2FtcGxlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWFwcGVyID0gbWFwcGVyO1xyXG4gICAgdGhpcy5lbGxpcHNlSXNTZXRVcCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlcyBlbGxpcHNlIG9uY2UgZm9yIGRpc3RvcnRpb25zIHdpdGggY29uc3RhbnQgcGFydGlhbCBkZXJpdmF0aXZlcy5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIGRlcml2YXRpdmVzXHJcbiAgICogQHJldHVybnMge2xlbnMucmVzYW1wbGVyLkVXQX1cclxuICAgKi9cclxuICBzZXR1cEVsbGlwc2VPbmNlKC4uLmRlcml2YXRpdmVzKSB7XHJcbiAgICBpZiAoIXRoaXMuZWxsaXBzZUlzU2V0VXApIHtcclxuICAgICAgdGhpcy5lbGxpcHNlSXNTZXRVcCA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldHVwRWxsaXBzZSguLi5kZXJpdmF0aXZlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGVzIGVsbGlwc2UgZm9yIEVXQSByZXNhbXBsaW5nIHVzaW5nIHBhcnRpYWwgZGVyaXZhdGl2ZXMuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSBkZXJpdmF0aXZlc1xyXG4gICAqIEByZXR1cm5zIHtsZW5zLnJlc2FtcGxlci5FV0F9XHJcbiAgICovXHJcbiAgc2V0dXBFbGxpcHNlKC4uLmRlcml2YXRpdmVzKSB7XHJcbiAgICB0aGlzLmxpbWl0UmVhY2hlZCA9IGZhbHNlO1xyXG5cclxuICAgIGRlcml2YXRpdmVzID0gZGVyaXZhdGl2ZXMubWFwKGRlcml2YXRpdmUgPT4gZGVyaXZhdGl2ZSAqIHRoaXMuc2NhbGluZyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaW5pdEVsbGlwc2UoLi4uZGVyaXZhdGl2ZXMpXHJcbiAgICAgIC5zY2FsZUVsbGlwc2UoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZXMgZWxsaXBzZSBlcXVhdGlvbiBmb3IgZ2l2ZW4gZGlzdG9ydGlvbiBwYXJ0aWFsIGRlcml2YXRpdmVzLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0gZGVyaXZhdGl2ZXNcclxuICAgKiBAcmV0dXJucyB7bGVucy5yZXNhbXBsZXIuRVdBfVxyXG4gICAqL1xyXG4gIGluaXRFbGxpcHNlKC4uLmRlcml2YXRpdmVzKSB7XHJcbiAgICBjb25zdCBbXHJcbiAgICAgIG1ham9yX3gsXHJcbiAgICAgIG1ham9yX3ksXHJcbiAgICAgIG1pbm9yX3gsXHJcbiAgICAgIG1pbm9yX3ksXHJcbiAgICAgIG1ham9yX21hZyxcclxuICAgICAgbWlub3JfbWFnXHJcbiAgICBdID0gY2xhbXBFbGxpcHNlQXhlcyguLi5kZXJpdmF0aXZlcyk7XHJcblxyXG4gICAgdGhpcy5BID0gbWFqb3JfeSAqIG1ham9yX3kgKyBtaW5vcl95ICogbWlub3JfeTtcclxuICAgIHRoaXMuQiA9IC0yICogKG1ham9yX3ggKiBtYWpvcl95ICsgbWlub3JfeCAqIG1pbm9yX3kpO1xyXG4gICAgdGhpcy5DID0gbWFqb3JfeCAqIG1ham9yX3ggKyBtaW5vcl94ICogbWlub3JfeDtcclxuICAgIHRoaXMuRiA9IG1ham9yX21hZyAqIG1pbm9yX21hZztcclxuICAgIHRoaXMuRiAqPSB0aGlzLkY7XHJcblxyXG4gICAgLypcclxuICAgICAqIElmIG9uZSBvciBib3RoIG9mIHRoZSBzY2FsaW5nIHZlY3RvcnMgaXMgaW1wb3NzaWJseSBsYXJnZVxyXG4gICAgICogKHByb2R1Y2luZyBhIHZlcnkgbGFyZ2UgcmF3IEYgdmFsdWUpLCB3ZSBtYXkgYXMgd2VsbCBub3QgYm90aGVyXHJcbiAgICAgKiBkb2luZyBhbnkgZm9ybSBvZiByZXNhbXBsaW5nIHNpbmNlIHJlc2FtcGxlZCBhcmVhIGlzIHZlcnkgbGFyZ2UuXHJcbiAgICAgKiBJbiB0aGlzIGNhc2Ugc29tZSBhbHRlcm5hdGl2ZSBtZWFucyBvZiBwaXhlbCBzYW1wbGluZywgc3VjaCBhc1xyXG4gICAgICogdGhlIGF2ZXJhZ2Ugb2YgdGhlIHdob2xlIGltYWdlIGlzIG5lZWRlZCB0byBnZXQgYSByZWFzb25hYmxlXHJcbiAgICAgKiByZXN1bHQuIENhbGN1bGF0ZSBvbmx5IGFzIG5lZWRlZC5cclxuICAgICAqL1xyXG4gICAgdGhpcy5saW1pdFJlYWNoZWQgPSA0ICogdGhpcy5BICogdGhpcy5DIC0gdGhpcy5CICogdGhpcy5CID4gTUFYSU1VTV9WQUxVRTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjYWxlcyBlbGxpcHNlIHRvIG1hdGNoIGZpbHRlciBzdXBwb3J0LlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcmV0dXJucyB7bGVucy5yZXNhbXBsZXIuRVdBfVxyXG4gICAqL1xyXG4gIHNjYWxlRWxsaXBzZSgpIHtcclxuICAgIGlmICghdGhpcy5saW1pdFJlYWNoZWQpIHtcclxuICAgICAgdGhpcy5GICo9IHRoaXMuc3VwcG9ydCAqIHRoaXMuc3VwcG9ydDtcclxuICAgICAgdGhpcy51TGltaXQgPSBNYXRoLnNxcnQodGhpcy5DICogdGhpcy5GIC8gKHRoaXMuQSAqIHRoaXMuQyAtIDAuMjUgKiB0aGlzLkIgKiB0aGlzLkIpKTtcclxuICAgICAgdGhpcy52TGltaXQgPSBNYXRoLnNxcnQodGhpcy5BICogdGhpcy5GIC8gKHRoaXMuQSAqIHRoaXMuQyAtIDAuMjUgKiB0aGlzLkIgKiB0aGlzLkIpKTtcclxuICAgICAgdGhpcy51V2lkdGggPSBNYXRoLnNxcnQodGhpcy5GIC8gdGhpcy5BKTtcclxuICAgICAgdGhpcy5zbG9wZSA9IC10aGlzLkIgLyAoMiAqIHRoaXMuQSk7XHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgKiBDaGVjayB0aGUgYWJzb2x1dGUgYXJlYSBvZiB0aGUgcGFyYWxsZWxvZ3JhbSBpbnZvbHZlZC5cclxuICAgICAgICogVGhpcyBsaW1pdCBuZWVkcyBtb3JlIHdvcmssIGFzIGl0IGlzIHRvbyBzbG93IGZvciBsYXJnZXIgaW1hZ2VzXHJcbiAgICAgICAqIHdpdGggdGlsZWQgdmlld3Mgb2YgdGhlIGhvcml6b24uXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAodGhpcy51V2lkdGggKiB0aGlzLnZMaW1pdCA+IDQgKiB0aGlzLmltYWdlQXJlYSkge1xyXG4gICAgICAgIHRoaXMubGltaXRSZWFjaGVkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogU2NhbGUgZWxsaXBzZSBmb3JtdWxhIHRvIGRpcmVjdGx5IGluZGV4IHRoZSBGaWx0ZXIgTG9va3VwIFRhYmxlICovXHJcbiAgICAgIGNvbnN0IHNjYWxlID0gV0VJR0hUX0xPT0tVUF9UQUJMRV9XSURUSCAvIHRoaXMuRjtcclxuICAgICAgdGhpcy5BICo9IHNjYWxlO1xyXG4gICAgICB0aGlzLkIgKj0gc2NhbGU7XHJcbiAgICAgIHRoaXMuQyAqPSBzY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgd2VpZ2h0ZWQgYXZlcmFnZSBjb2xvciBhdCBnaXZlbiBwb2ludCB1c2luZyBzY2FsZWQgRVdBIGVsbGlwc2UuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1MFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2MFxyXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cclxuICAgKi9cclxuICBnZXRXZWlnaHRlZEF2ZXJhZ2UodTAsIHYwKSB7XHJcbiAgICBpZiAodGhpcy5kb2VzbnROZWVkUmVzYW1wbGluZyh1MCwgdjApKSB7XHJcbiAgICAgIC8qIFRoZSBhcmVhIGJlaW5nIHJlc2FtcGxlZCBpcyBzaW1wbHkgYSBzb2xpZCBjb2xvclxyXG4gICAgICAgKiBqdXN0IHJldHVybiBhIHNpbmdsZSBsb29rdXAgY29sb3IuXHJcbiAgICAgICAqL1xyXG4gICAgICByZXR1cm4gdGhpcy5pbWFnZS5nZXRQaXhlbENvbG9yKHUwLCB2MCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubGltaXRSZWFjaGVkKSB7XHJcbiAgICAgIC8vIFdoZW4gU2NhbGluZyBsaW1pdHMgcmVhY2hlZCwgcmV0dXJuIGFuICdhdmVyYWdlZCcgcmVzdWx0LlxyXG5cclxuICAgICAgc3dpdGNoICh0aGlzLmltYWdlVmlydHVhbFBpeGVsTWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSB2cHguRURHRTpcclxuICAgICAgICBjYXNlIHZweC5IT1JJWk9OVEFMX1RJTEVfRURHRTpcclxuICAgICAgICBjYXNlIHZweC5WRVJUSUNBTF9USUxFX0VER0U6XHJcbiAgICAgICAgICAvKlxyXG4gICAgICAgICAgICogV2UgbmVlZCBhbiBhdmVyYWdlIGVkZ2UgcGl4ZWwsIGZyb20gdGhlIGNvcnJlY3QgZWRnZSFcclxuICAgICAgICAgICAqIEhvdyBzaG91bGQgSSBjYWxjdWxhdGUgYW4gYXZlcmFnZSBlZGdlIGNvbG9yP1xyXG4gICAgICAgICAgICogSnVzdCByZXR1cm5pbmcgYW4gYXZlcmFnZWQgbmVpZ2hib3VyaG9vZCxcclxuICAgICAgICAgICAqIHdvcmtzIHdlbGwgaW4gZ2VuZXJhbCwgYnV0IGZhbGxzIGRvd24gZm9yIFRpbGVFZGdlIG1ldGhvZHMuXHJcbiAgICAgICAgICAgKiBUaGlzIG5lZWRzIHRvIGJlIGRvbmUgcHJvcGVybHkhISEhISFcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2UuZ2V0SW50ZXJwb2xhdGVkUGl4ZWxDb2xvcih1MCwgdjAsIGludGVycG9sYXRpb24uQVZFUkFHRSk7XHJcbiAgICAgICAgY2FzZSB2cHguSE9SSVpPTlRBTF9USUxFOlxyXG4gICAgICAgIGNhc2UgdnB4LlZFUlRJQ0FMX1RJTEU6XHJcbiAgICAgICAgICAvKlxyXG4gICAgICAgICAgKiBqdXN0IHJldHVybiB0aGUgYmFja2dyb3VuZCBwaXhlbCAtIElzIHRoZXJlIG1vcmUgZGlyZWN0IHdheT9cclxuICAgICAgICAgICovXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pbWFnZS5nZXRQaXhlbENvbG9yKFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlVmlld3BvcnQueDEgLSAxLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlVmlld3BvcnQueTEgLSAxXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZUF2ZXJhZ2VDb2xvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRpdmlzb3JNID0gMCxcclxuICAgICAgZGl2aXNvckMgPSAwLFxyXG4gICAgICByZWQgPSAwLFxyXG4gICAgICBncmVlbiA9IDAsXHJcbiAgICAgIGJsdWUgPSAwLFxyXG4gICAgICBhbHBoYSA9IDA7XHJcblxyXG4gICAgLypcclxuICAgICAqIERldGVybWluZSB0aGUgcGFyZWxsZWxvZ3JhbSBib3VuZGluZyBib3ggZml0dGVkIHRvIHRoZSBlbGxpcHNlXHJcbiAgICAgKiBjZW50ZXJlZCBhdCB1MCx2MC4gIFRoaXMgYXJlYSBpcyBib3VuZGluZyBieSB0aGUgbGluZXMuLi5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdjEgPSBNYXRoLmNlaWwodjAgLSB0aGlzLnZMaW1pdCk7XHJcbiAgICBjb25zdCB2MiA9IE1hdGguZmxvb3IodjAgKyB0aGlzLnZMaW1pdCk7XHJcblxyXG4gICAgLy8gc2NhbiBsaW5lIHN0YXJ0IGFuZCB3aWR0aCBhY2Nyb3NzIHRoZSBwYXJhbGxlbG9ncmFtXHJcbiAgICBsZXQgdTEgPSB1MCArICh2MSAtIHYwKSAqIHRoaXMuc2xvcGUgLSB0aGlzLnVXaWR0aDtcclxuICAgIGxldCB1dyA9IDIgKiB0aGlzLnVXaWR0aCArIDE7XHJcblxyXG4gICAgLypcclxuICAgICAqIERvIHdlaWdodGVkIHJlc2FtcGxpbmcgb2YgYWxsIHBpeGVscywgIHdpdGhpbiB0aGUgc2NhbGVkIGVsbGlwc2UsXHJcbiAgICAgKiBib3VuZCBieSBhIFBhcmVsbGVsb2dyYW0gZml0dGVkIHRvIHRoZSBlbGxpcHNlLlxyXG4gICAgICovXHJcblxyXG4gICAgbGV0IEREUSA9IDIgKiB0aGlzLkE7XHJcblxyXG4gICAgZm9yIChsZXQgdiA9IHYxOyB2IDwgdjI7IHYrKykge1xyXG4gICAgICBsZXQgdXN0YXJ0ID0gTWF0aC5jZWlsKHUxKTsgLy8gZmlyc3QgcGl4ZWwgaW4gc2NhbmxpbmVcclxuICAgICAgdTEgKz0gdGhpcy5zbG9wZTsgLy8gc3RhcnQgb2YgbmV4dCBzY2FuIGxpbmVcclxuICAgICAgbGV0IHVlbmQgPSB1c3RhcnQgKyB1dztcclxuXHJcbiAgICAgIC8vIGxvY2F0aW9uIG9mIHRoaXMgZmlyc3QgcGl4ZWwsIHJlbGF0aXZlIHRvIHUwLHYwXHJcbiAgICAgIGxldCBVID0gdXN0YXJ0IC0gdTA7XHJcbiAgICAgIGxldCBWID0gdiAtIHYwO1xyXG5cclxuICAgICAgLy8gUSA9IGVsbGlwc2UgcXVvdGVudCAoIGlmIFE8RiB0aGVuIHBpeGVsIGlzIGluc2lkZSBlbGxpcHNlKVxyXG4gICAgICBsZXQgUSA9ICh0aGlzLkEgKiBVICsgdGhpcy5CICogVikgKiBVICsgdGhpcy5DICogViAqIFY7XHJcbiAgICAgIGxldCBEUSA9IHRoaXMuQSAqICgyICogVSArIDEpICsgdGhpcy5CICogVjtcclxuXHJcbiAgICAgIC8vIGNvdW50IHVwIHRoZSB3ZWlnaHRlZCBwaXhlbCBjb2xvcnNcclxuICAgICAgZm9yIChsZXQgdSA9IHVzdGFydDsgdSA8IHVlbmQ7IHUrKykge1xyXG4gICAgICAgIC8vIE5vdGUgdGhhdCB0aGUgZWxsaXBzZSBoYXMgYmVlbiBwcmUtc2NhbGVkIHNvIEYgPSAkdGhpcy0+d2VpZ2h0TG9va3VwVGFibGVXaWR0aFxyXG4gICAgICAgIGlmIChRIDwgV0VJR0hUX0xPT0tVUF9UQUJMRV9XSURUSCkge1xyXG4gICAgICAgICAgbGV0IHdlaWdodCA9IHRoaXMud2VpZ2h0TG9va3VwVGFibGVbTWF0aC5mbG9vcihRKV07XHJcbiAgICAgICAgICBsZXQgW3IsIGcsIGIsIGFdID0gdGhpcy5pbWFnZS5nZXRQaXhlbENvbG9yKHUsIHYpO1xyXG4gICAgICAgICAgYWxwaGEgKz0gd2VpZ2h0ICogYTtcclxuICAgICAgICAgIGRpdmlzb3JNICs9IHdlaWdodDtcclxuXHJcbiAgICAgICAgICB3ZWlnaHQgKj0gKGEgLyB0aGlzLmltYWdlLnF1YW50dW1SYW5nZSk7XHJcblxyXG4gICAgICAgICAgcmVkICs9IHIgKiB3ZWlnaHQ7XHJcbiAgICAgICAgICBncmVlbiArPSBnICogd2VpZ2h0O1xyXG4gICAgICAgICAgYmx1ZSArPSBiICogd2VpZ2h0O1xyXG4gICAgICAgICAgZGl2aXNvckMgKz0gd2VpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUSArPSBEUTtcclxuICAgICAgICBEUSArPSBERFE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXN1bHQgc2FuaXR5IGNoZWNrIC0tIHRoaXMgc2hvdWxkIE5PVCBoYXBwZW5cclxuICAgIGlmICghZGl2aXNvckMgfHwgIWRpdmlzb3JNKSB7XHJcbiAgICAgIC8qXHJcbiAgICAgICAqIG5vdCBlbm91Z2ggcGl4ZWxzLCBvciBiYWQgd2VpZ2h0aW5nIGluIHJlc2FtcGxpbmcsXHJcbiAgICAgICAqIHJlc29ydCB0byBkaXJlY3QgaW50ZXJwb2xhdGlvblxyXG4gICAgICAgKi9cclxuICAgICAgcmV0dXJuIHRoaXMuaW1hZ2UuZ2V0SW50ZXJwb2xhdGVkUGl4ZWxDb2xvcih1MCwgdjApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIGNsYW1wVG9RdWFudHVtKE1hdGgucm91bmQocmVkIC8gZGl2aXNvckMpLCB0aGlzLmltYWdlLnF1YW50dW1SYW5nZSksXHJcbiAgICAgIGNsYW1wVG9RdWFudHVtKE1hdGgucm91bmQoZ3JlZW4gLyBkaXZpc29yQyksIHRoaXMuaW1hZ2UucXVhbnR1bVJhbmdlKSxcclxuICAgICAgY2xhbXBUb1F1YW50dW0oTWF0aC5yb3VuZChibHVlIC8gZGl2aXNvckMpLCB0aGlzLmltYWdlLnF1YW50dW1SYW5nZSksXHJcbiAgICAgIGNsYW1wVG9RdWFudHVtKE1hdGgucm91bmQoYWxwaGEgLyBkaXZpc29yTSksIHRoaXMuaW1hZ2UucXVhbnR1bVJhbmdlKVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBubyByZXNhbXBsaW5nIGlzIG5lZWRlZCAoaWYgc2luZ2xlIHBpeGVsIGNvbG9yIHNob3VsZCBiZSByZXR1cm5lZCkuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBkb2VzbnROZWVkUmVzYW1wbGluZyh1LCB2KSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuaW1hZ2VWaXJ0dWFsUGl4ZWxNZXRob2QpIHtcclxuICAgICAgY2FzZSB2cHguVFJBTlNQQVJFTlQ6XHJcbiAgICAgIGNhc2UgdnB4LkJBQ0tHUk9VTkQ6XHJcbiAgICAgIGNhc2UgdnB4LkJMQUNLOlxyXG4gICAgICBjYXNlIHZweC5XSElURTpcclxuICAgICAgY2FzZSB2cHguR1JBWTpcclxuICAgICAgICByZXR1cm4gdGhpcy5saW1pdFJlYWNoZWQgfHwgdGhpcy5vdXRPZkltYWdlQm91bmRzKHUsIHYpO1xyXG4gICAgICBjYXNlIHZweC5FREdFOlxyXG4gICAgICAgIHJldHVybiAodSArIHRoaXMudUxpbWl0IDwgdGhpcy5pbWFnZVZpZXdwb3J0LngxICYmIHYgKyB0aGlzLnZMaW1pdCA8IHRoaXMuaW1hZ2VWaWV3cG9ydC55MSkgfHxcclxuICAgICAgICAgICh1ICsgdGhpcy51TGltaXQgPCB0aGlzLmltYWdlVmlld3BvcnQueDEgJiYgdiAtIHRoaXMudkxpbWl0ID4gdGhpcy5pbWFnZVZpZXdwb3J0LnkyKSB8fFxyXG4gICAgICAgICAgKHUgLSB0aGlzLnVMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC54MiAmJiB2ICsgdGhpcy52TGltaXQgPCB0aGlzLmltYWdlVmlld3BvcnQueTEpIHx8XHJcbiAgICAgICAgICAodSAtIHRoaXMudUxpbWl0ID4gdGhpcy5pbWFnZVZpZXdwb3J0LngyICYmIHYgLSB0aGlzLnZMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC55Mik7XHJcbiAgICAgIGNhc2UgdnB4LkhPUklaT05UQUxfVElMRTpcclxuICAgICAgICByZXR1cm4gdiArIHRoaXMudkxpbWl0IDwgdGhpcy5pbWFnZVZpZXdwb3J0LnkxIHx8IHYgLSB0aGlzLnZMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC55MjtcclxuICAgICAgY2FzZSB2cHguVkVSVElDQUxfVElMRTpcclxuICAgICAgICByZXR1cm4gdSArIHRoaXMudUxpbWl0IDwgdGhpcy5pbWFnZVZpZXdwb3J0LngxIHx8IHUgLSB0aGlzLnVMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC54MjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMYXppbGl5IHJldHVybnMgY2FjaGVkIGltYWdlIGF2ZXJhZ2UgY29sb3IuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cclxuICAgKi9cclxuICBnZXRJbWFnZUF2ZXJhZ2VDb2xvcigpIHtcclxuICAgIGlmICh0aGlzLmltYWdlQXZlcmFnZUNvbG9yID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VBdmVyYWdlQ29sb3IgPSB0aGlzLmltYWdlLmdldEF2ZXJhZ2VDb2xvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmltYWdlQXZlcmFnZUNvbG9yLnNsaWNlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgZWxsaXBzZSBpcyBjb21wbGV0ZWx5IG91dCBvZiBpbWFnZSBib3VuZHMuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBvdXRPZkltYWdlQm91bmRzKHUsIHYpIHtcclxuICAgIHJldHVybiB1ICsgdGhpcy51TGltaXQgPCB0aGlzLmltYWdlVmlld3BvcnQueDEgfHxcclxuICAgICAgdSAtIHRoaXMudUxpbWl0ID4gdGhpcy5pbWFnZVZpZXdwb3J0LngyIHx8XHJcbiAgICAgIHYgKyB0aGlzLnZMaW1pdCA8IHRoaXMuaW1hZ2VWaWV3cG9ydC55MSB8fFxyXG4gICAgICB2IC0gdGhpcy52TGltaXQgPiB0aGlzLmltYWdlVmlld3BvcnQueTI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFV0E7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIFBvaW50fSBmcm9tICcuL3BvaW50JztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBFV0F9IGZyb20gJy4vZS13LWEnOyIsImltcG9ydCB7YmxlbmRDb2xvcnN9IGZyb20gXCIuLi91dGlsL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiA8cD57QGxpbmsgUmVzYW1wbGVySW50ZXJmYWNlfSBpbXBsZW1lbnRhaW9uIHdpdGhvdXQgcmVzYW1wbGluZyBpdHNlbGYuPC9wPlxyXG4gKiA8cD5JdCB1c2VzIHBpeGVsIGNvbG9yIGludGVycG9sYXRpb24gYW5kIHdvcmtzIG11Y2ggZmFzdGVyIHRoYW4ge0BsaW5rIGxlbnMucmVzYW1wbGVyLkVXQX0gYnV0IHByb2R1Y2VzIGFsaWFzaW5nXHJcbiAqIGVmZmVjdHMuPC9wPlxyXG4gKiA8cD5JdCBpcyBnb29kIGZvciBxdWljayBjcmVhdGlvbiBvZiBkaXN0b3J0aW9uIHByZXZpZXdzIGFuZCBhbHNvIHVzZWQgZm9yIHtAbGluayBEaXN0b3J0aW9uSW50ZXJmYWNlfSBpbXBsZW1lbnRhdGlvbnNcclxuICogdGhhdCBkb2Vzbid0IGhhdmUgcGFydGlhbCBkZXJpdmF0aXZlcy48L3A+XHJcbiAqIDxwPkl0IHdvcmtzIG1vc3QgcXVpY2tseSB3aGVuIHtAbGluayBJbWFnZUludGVyZmFjZX0jaW50ZXJwb2xhdGlvbk1ldGhvZCBwcm9wZXJ0eSBpcyBzZXQgdG9cclxuICoge0BsaW5rIGxlbnMuaW50ZXJwb2xhdGlvbi5JTlRFR0VSfTwvcD5cclxuICpcclxuICogQGltcGxlbWVudHMge1Jlc2FtcGxlckludGVyZmFjZX1cclxuICogQG1lbWJlck9mIGxlbnMucmVzYW1wbGVyXHJcbiAqIEB0dXRvcmlhbCAwMi4wMy5waXhlbC1jb2xvci1sb29rdXBcclxuICovXHJcbmNsYXNzIFBvaW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1hdHRlQ29sb3IgPSBbMCwgMCwgMCwgMF07XHJcbiAgICB0aGlzLnNjYWxpbmcgPSAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBzZXRJbWFnZShpbWFnZSkge1xyXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHNldE1hcHBlcihtYXBwZXIpIHtcclxuICAgIHRoaXMubWFwcGVyID0gbWFwcGVyO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldFJlc2FtcGxlZENvbG9yKHgsIHkpIHtcclxuICAgIHggPSB4ICogdGhpcy5zY2FsaW5nO1xyXG4gICAgeSA9IHkgKiB0aGlzLnNjYWxpbmc7XHJcblxyXG4gICAgY29uc3QgdmFsaWRpdHkgPSB0aGlzLm1hcHBlci5nZXRWYWxpZGl0eSh4LCB5LCB0aGlzLnNjYWxpbmcpO1xyXG5cclxuICAgIGlmICh2YWxpZGl0eSA+IDApIHtcclxuICAgICAgbGV0IFt1LCB2XSA9IHRoaXMubWFwcGVyLnJldmVyc2VNYXAoeCwgeSk7XHJcbiAgICAgIGxldCBjb2xvciA9IHRoaXMuaW1hZ2UuZ2V0SW50ZXJwb2xhdGVkUGl4ZWxDb2xvcih1LCB2KTtcclxuXHJcbiAgICAgIGlmICh2YWxpZGl0eSA8IDEpIHtcclxuICAgICAgICByZXR1cm4gYmxlbmRDb2xvcnMoY29sb3IsIHRoaXMubWF0dGVDb2xvciwgdmFsaWRpdHkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubWF0dGVDb2xvci5zbGljZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7IiwiaW1wb3J0IEVXQSBmcm9tICcuL2Utdy1hJztcclxuaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xyXG5cclxuLyoqXHJcbiAqIFJlc2FtcGxlciBuYW1lc3BhY2VcclxuICpcclxuICogQG5hbWVzcGFjZSBsZW5zLnJlc2FtcGxlclxyXG4gKi9cclxuY29uc3QgcmVzYW1wbGVyID0ge1xyXG4gIEVXQSxcclxuICBQb2ludFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzYW1wbGVyOyIsImltcG9ydCBTb2x2ZXIgZnJvbSAnLi9zb2x2ZXInO1xyXG5pbXBvcnQgTGVhc3RTcXVhcmVzIGZyb20gJy4vbGVhc3Qtc3F1YXJlcyc7XHJcblxyXG4vKipcclxuICogR2F1c3MgSm9yZGFuIEVsaW1pbmF0aW9uIG5hbWVzcGFjZVxyXG4gKlxyXG4gKiBAbmFtZXNwYWNlIGxlbnMudXRpbC5nYXVzc0pvcmRhbkVsaW1pbmF0aW9uXHJcbiAqL1xyXG5jb25zdCBnYXVzc0pvcmRhbkVsaW1pbmF0aW9uID0ge1xyXG4gIFNvbHZlcixcclxuICBMZWFzdFNxdWFyZXNcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhdXNzSm9yZGFuRWxpbWluYXRpb247IiwiZXhwb3J0IHtkZWZhdWx0IGFzIEdhdXNzSm9yZGFuRWxpbWluYXRpb259IGZyb20gJy4vc29sdmVyJztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBMZWFzdFNxdWFyZXN9IGZyb20gJy4vbGVhc3Qtc3F1YXJlcyc7IiwiaW1wb3J0IFNvbHZlciBmcm9tICcuL3NvbHZlcic7XHJcblxyXG4vKipcclxuICogQHN1bW1hcnkgU29sdmVzIHN5c3RlbSBvZiBlcXVhdGlvbnMgdXNpbmcgTGVhc3QgU3F1YXJlcyBtZXRob2QuXHJcbiAqIEBtZW1iZXJPZiBsZW5zLnV0aWwuZ2F1c3NKb3JkYW5FbGltaW5hdGlvblxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9tYXRyaXhfOGNfc291cmNlLmh0bWwjbDAwODI5IExlYXN0U3F1YXJlc0FkZFRlcm1zKCl9IGF0XHJcbiAqIEltYWdlTWFnaWNrIHNvdXJjZS5cclxuICovXHJcbmNsYXNzIExlYXN0U3F1YXJlcyBleHRlbmRzIFNvbHZlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJhbmsgVGhlIHJhbmsgb3Igc2l6ZSBvZiB0aGUgZGltZW5zaW9ucyBvZiB0aGUgc3F1YXJlIG1hdHJpeC5cclxuICAgKiBBbHNvIHRoZSBsZW5ndGggb2YgdmVjdG9ycywgYW5kIG51bWJlciBvZiB0ZXJtcyBiZWluZyBhZGRlZC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtVmVjdG9ycyBOdW1iZXIgb2YgcmVzdWx0IHZlY3RvcnMsIGFuZCBudW1iZXIgb3IgcmVzdWx0cyBiZWluZ1xyXG4gICAqIGFkZGVkLiAgQWxzbyByZXByZXNlbnRzIHRoZSBudW1iZXIgb2Ygc2VwYXJhYmxlIHN5c3RlbXMgb2YgZXF1YXRpb25zXHJcbiAgICogdGhhdCBpcyBiZWluZyBzb2x2ZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocmFuaywgbnVtVmVjdG9ycyA9IDEpIHtcclxuICAgIGNvbnN0IG1hdHJpeCA9IFtdO1xyXG4gICAgY29uc3QgdmVjdG9ycyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuazsgaSsrKSB7XHJcbiAgICAgIG1hdHJpeC5wdXNoKG5ldyBBcnJheShyYW5rKS5maWxsKDApKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVZlY3RvcnM7IGkrKykge1xyXG4gICAgICB2ZWN0b3JzLnB1c2gobmV3IEFycmF5KHJhbmspLmZpbGwoMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyKG1hdHJpeCwgdmVjdG9ycyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIG9uZSBzZXQgb2YgdGVybXMgYW5kIGFzc29jaWF0ZSByZXN1bHRzIHRvIHRoZVxyXG4gICAqIGdpdmVuIG1hdHJpeCBhbmQgdmVjdG9ycyBmb3Igc29sdmluZyB1c2luZyBsZWFzdC1zcXVhcmVzIGZ1bmN0aW9uIGZpdHRpbmcuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSB0ZXJtcyBUaGUgcHJlLWNhbGN1bGF0ZWQgdGVybXMgKHdpdGhvdXQgdGhlIHVua25vd24gY29lZmZpY2llbnRcclxuICAgKiB3ZWlnaHRzKSB0aGF0IGZvcm1zIHRoZSBlcXVhdGlvbiBiZWluZyBhZGRlZC5cclxuICAgKiBAcGFyYW0ge251bWJlcltdfSByZXN1bHRzIFRoZSByZXN1bHQocykgdGhhdCBzaG91bGQgYmUgZ2VuZXJhdGVkIGZyb20gdGhlIGdpdmVuIHRlcm1zXHJcbiAgICogd2VpZ2h0ZWQgYnkgdGhlIHlldC10by1iZS1zb2x2ZWQgY29lZmZpY2llbnRzLlxyXG4gICAqIEByZXR1cm5zIHtsZW5zLnV0aWwuZ2F1c3NKb3JkYW5FbGltaW5hdGlvbi5MZWFzdFNxdWFyZXN9XHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvbWF0cml4XzhjX3NvdXJjZS5odG1sI2wwMDgyOSBMZWFzdFNxdWFyZXNBZGRUZXJtcygpfSBhdFxyXG4gICAqIEltYWdlTWFnaWNrIHNvdXJjZS5cclxuICAgKi9cclxuICBhZGRUZXJtcyh0ZXJtcywgcmVzdWx0cykge1xyXG4gICAgY29uc3QgcmFuayA9IHRoaXMubWF0cml4Lmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJhbms7IGorKykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbms7IGkrKykge1xyXG4gICAgICAgIHRoaXMubWF0cml4W2ldW2pdICs9IHRlcm1zW2ldICogdGVybXNbal07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZWN0b3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy52ZWN0b3JzW2ldW2pdICs9IHJlc3VsdHNbaV0gKiB0ZXJtc1tqXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVhc3RTcXVhcmVzOyIsImltcG9ydCBVbnNvbHZhYmxlTWF0cml4IGZyb20gJy4uLy4uL2V4Y2VwdGlvbi91bnNvbHZhYmxlLW1hdHJpeCc7XHJcbmltcG9ydCB7cGVyY2VwdGlibGVSZWNpcHJvY2FsfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByb3cxXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2wxXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByb3cyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2wyXHJcbiAqL1xyXG5mdW5jdGlvbiBzd2FwKGFycmF5LCByb3cxLCBjb2wxLCByb3cyLCBjb2wyKSB7XHJcbiAgaWYgKGFycmF5W3JvdzFdW2NvbDFdICE9PSBhcnJheVtyb3cyXVtjb2wyXSkge1xyXG4gICAgYXJyYXlbcm93MV1bY29sMV0gKz0gYXJyYXlbcm93Ml1bY29sMl07XHJcbiAgICBhcnJheVtyb3cyXVtjb2wyXSA9IGFycmF5W3JvdzFdW2NvbDFdIC0gYXJyYXlbcm93Ml1bY29sMl07XHJcbiAgICBhcnJheVtyb3cxXVtjb2wxXSAtPSBhcnJheVtyb3cyXVtjb2wyXTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuc29sdmFibGUoKSB7XHJcbiAgdGhyb3cgbmV3IFVuc29sdmFibGVNYXRyaXgoXCJDYW4ndCBzb2x2ZSBnaXZlbiBtYXRyaXggdXNpbmcgR2F1c3MtSm9yZGFuIG1ldGhvZFwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBzdW1tYXJ5IFNvbHZlcyBzeXN0ZW0gb2YgZXF1YXRpb25zIHVzaW5nIEdhdXNzLUpvcmRhbiBlbGltaW5hdGlvbi5cclxuICpcclxuICogQGRlc2NyaXB0aW9uIDxwPkJyaW5ncyB0aGUgbWF0cml4IHRvIHJlZHVjZWQgcm93IGVjaGVsb24gZm9ybSxcclxuICogIHdoaWxlIHNpbXVsdGFuZW91c2x5IHJlZHVjaW5nIGFuZCB0aHVzIHNvbHZpbmcgdGhlIGF1Z21lbnRlZCByZXN1bHRzXHJcbiAqICBtYXRyaXguPC9wPlxyXG4gKlxyXG4gKiA8cD5TZWUgYWxzbyB7QGxpbmsgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HYXVzcy1Kb3JkYW5fZWxpbWluYXRpb259PC9wPlxyXG4gKlxyXG4gKlxyXG4gKiAgPHA+Tm90ZSB0aGF0IHRoZSAnbWF0cml4JyBpcyBnaXZlbiBhcyBhICdhcnJheSBvZiBhcnJheXMnIG9mIHJhbmsgc2l6ZS5cclxuICogIFRoYXQgaXMgdmFsdWVzIGNhbiBiZSBhc3NpZ25lZCBhcyAgIG1hdHJpeFtyb3ddW2NvbHVtbl0gICB3aGVyZSAncm93JyBpc1xyXG4gKiAgdHlwaWNhbGx5IHRoZSBlcXVhdGlvbiwgYW5kICdjb2x1bW4nIGlzIHRoZSB0ZXJtIG9mIHRoZSBlcXVhdGlvbi5cclxuICogIFRoYXQgaXMgdGhlIG1hdHJpeCBpcyBpbiB0aGUgZm9ybSBvZiBhICdyb3cgZmlyc3QgYXJyYXknLjwvcD5cclxuICpcclxuICogIDxwPkhvd2V2ZXIgJ3ZlY3RvcnMnIGlzIGEgJ2FycmF5IG9mIGFycmF5cycgd2hpY2ggY2FuIGhhdmUgYW55IG51bWJlclxyXG4gKiAgb2YgY29sdW1ucywgd2l0aCBlYWNoIGNvbHVtbiBhcnJheSB0aGUgc2FtZSAncmFuaycgc2l6ZSBhcyAnbWF0cml4Jy48L3A+XHJcbiAqXHJcbiAqICA8cD5UaGlzIGFsbG93cyBmb3Igc2ltcGxlciBoYW5kbGluZyBvZiB0aGUgcmVzdWx0cywgZXNwZWNpYWxseSBpcyBvbmx5IG9uZVxyXG4gKiAgY29sdW1uICd2ZWN0b3InIGlzIGFsbCB0aGF0IGlzIHJlcXVpcmVkIHRvIHByb2R1Y2UgdGhlIGRlc2lyZWQgc29sdXRpb24uPC9wPlxyXG4gKlxyXG4gKiAgPHA+Rm9yIGV4YW1wbGUsIHRoZSAndmVjdG9ycycgY2FuIGNvbnNpc3Qgb2Ygc2ltcGxlIGFycmF5IG9mXHJcbiAqICBudW1iZXJzLiAgd2hlbiBvbmx5IG9uZSBzZXQgb2Ygc2ltdWx0YW5lb3VzIGVxdWF0aW9ucyBpcyB0byBiZSBzb2x2ZWQgZnJvbVxyXG4gKiAgdGhlIGdpdmVuIHNldCBvZiBjb2VmZmljaWVudCB3ZWlnaHRlZCB0ZXJtcy48L3A+XHJcbiAqXHJcbiAqICA8cD5Ib3dldmVyIGJ5IHNwZWNpZnlpbmcgbW9yZSAnY29sdW1ucycgKGFzIGFuICdhcnJheSBvZiB2ZWN0b3IgY29sdW1ucycsXHJcbiAqICB5b3UgY2FuIHVzZSB0aGlzIGZ1bmN0aW9uIHRvIHNvbHZlIGEgc2V0IG9mICdzZXBhcmFibGUnIGVxdWF0aW9ucy48L3A+XHJcbiAqXHJcbiAqICA8cD5Gb3IgZXhhbXBsZSBhIGRpc3RvcnRpb24gZnVuY3Rpb24gd2hlcmUgICAgPGNvZGU+dSA9IFUoeCx5KSAgdiA9IFYoeCx5KTwvY29kZT5cclxuICogIEFuZCB0aGUgZnVuY3Rpb25zIFUoKSBhbmQgVigpIGhhdmUgc2VwYXJhdGUgY29lZmZpY2llbnRzLCBidXQgYXJlIGJlaW5nXHJcbiAqICBnZW5lcmF0ZWQgZnJvbSBhIGNvbW1vbiB4LHktPnUsdiAgZGF0YSBzZXQuPC9wPlxyXG4gKlxyXG4gKiAgPHA+WW91IGNhbiBhbHNvIHVzZSB0aGUgJ3ZlY3RvcnMnIHRvIGdlbmVyYXRlIGFuIGludmVyc2Ugb2YgdGhlIGdpdmVuICdtYXRyaXgnXHJcbiAqICB0aG91Z2ggYXMgYSAnY29sdW1uIGZpcnN0IGFycmF5JyByYXRoZXIgdGhhbiBhICdyb3cgZmlyc3QgYXJyYXknLiBGb3JcclxuICogIGRldGFpbHMgc2VlIHtAbGluayBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dhdXNzLUpvcmRhbl9lbGltaW5hdGlvbn08L3A+XHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLnV0aWwuZ2F1c3NKb3JkYW5FbGltaW5hdGlvblxyXG4gKlxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9tYXRyaXhfOGNfc291cmNlLmh0bWwjbDAwNDgwIEdhdXNzSm9yZGFuRWxpbWluYXRpb24oKX0gYXRcclxuICogSW1hZ2VNYWdpY2sgc291cmNlLlxyXG4gKi9cclxuY2xhc3MgU29sdmVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcltdPn0gbWF0cml4IFNxdWFyZSBtYXRyaXggdG8gYmUgc29sdmVkLlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyW10+fSB2ZWN0b3JzIEF1Z21lbnQgcmVzdWx0cyBtYXRyaXguXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobWF0cml4LCB2ZWN0b3JzKSB7XHJcbiAgICB0aGlzLnNvbHZlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXgubWFwKHJvdyA9PiByb3cuc2xpY2UoKSk7XHJcbiAgICB0aGlzLnZlY3RvcnMgPSB2ZWN0b3JzLm1hcCh2ZWN0b3IgPT4gdmVjdG9yLnNsaWNlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU29sdmVzIGdpdmVuIG1hdHJpeC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtsZW5zLnV0aWwuZ2F1c3NKb3JkYW5FbGltaW5hdGlvbi5Tb2x2ZXJ9XHJcbiAgICovXHJcbiAgc29sdmUoKSB7XHJcbiAgICBpZiAodGhpcy5zb2x2ZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52YWxpZGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IG1hdHJpeCA9IHRoaXMubWF0cml4O1xyXG4gICAgY29uc3QgdmVjdG9ycyA9IHRoaXMudmVjdG9ycztcclxuICAgIGNvbnN0IHJhbmsgPSBtYXRyaXgubGVuZ3RoO1xyXG4gICAgY29uc3QgbnVtVmVjdG9ycyA9IHZlY3RvcnMubGVuZ3RoO1xyXG4gICAgY29uc3QgY29scyA9IG5ldyBBcnJheShyYW5rKS5maWxsKDApO1xyXG4gICAgY29uc3Qgcm93cyA9IG5ldyBBcnJheShyYW5rKS5maWxsKDApO1xyXG4gICAgY29uc3QgcGl2b3RzID0gbmV3IEFycmF5KHJhbmspLmZpbGwoMCk7XHJcbiAgICBsZXQgY29sID0gMDtcclxuICAgIGxldCByb3cgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuazsgaSsrKSB7XHJcbiAgICAgIGxldCBtYXggPSAwO1xyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByYW5rOyBqKyspIHtcclxuICAgICAgICBpZiAocGl2b3RzW2pdICE9PSAxKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHJhbms7IGsrKykge1xyXG4gICAgICAgICAgICBpZiAocGl2b3RzW2tdICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHBpdm90c1trXSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHVuc29sdmFibGUoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMobWF0cml4W2pdW2tdKSA+PSBtYXgpIHtcclxuICAgICAgICAgICAgICBtYXggPSBNYXRoLmFicyhtYXRyaXhbal1ba10pO1xyXG4gICAgICAgICAgICAgIHJvdyA9IGo7XHJcbiAgICAgICAgICAgICAgY29sID0gaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcGl2b3RzW2NvbF0rKztcclxuXHJcbiAgICAgIGlmIChyb3cgIT09IGNvbCkge1xyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcmFuazsgaysrKSB7XHJcbiAgICAgICAgICBzd2FwKG1hdHJpeCwgcm93LCBrLCBjb2wsIGspO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBudW1WZWN0b3JzOyBrKyspIHtcclxuICAgICAgICAgIHN3YXAodmVjdG9ycywgaywgcm93LCBrLCBjb2wpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcm93c1tpXSA9IHJvdztcclxuICAgICAgY29sc1tpXSA9IGNvbDtcclxuXHJcbiAgICAgIGlmIChtYXRyaXhbY29sXVtjb2xdID09PSAwKSB7XHJcbiAgICAgICAgdW5zb2x2YWJsZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgc2NhbGUgPSBwZXJjZXB0aWJsZVJlY2lwcm9jYWwobWF0cml4W2NvbF1bY29sXSk7XHJcbiAgICAgIG1hdHJpeFtjb2xdW2NvbF0gPSAxO1xyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByYW5rOyBqKyspIHtcclxuICAgICAgICBtYXRyaXhbY29sXVtqXSAqPSBzY2FsZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1WZWN0b3JzOyBqKyspIHtcclxuICAgICAgICB2ZWN0b3JzW2pdW2NvbF0gKj0gc2NhbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmFuazsgaisrKSB7XHJcbiAgICAgICAgaWYgKGogIT09IGNvbCkge1xyXG4gICAgICAgICAgbGV0IHNjYWxlID0gbWF0cml4W2pdW2NvbF07XHJcbiAgICAgICAgICBtYXRyaXhbal1bY29sXSA9IDA7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCByYW5rOyBrKyspIHtcclxuICAgICAgICAgICAgbWF0cml4W2pdW2tdIC09IHNjYWxlICogbWF0cml4W2NvbF1ba107XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBudW1WZWN0b3JzOyBrKyspIHtcclxuICAgICAgICAgICAgdmVjdG9yc1trXVtqXSAtPSBzY2FsZSAqIHZlY3RvcnNba11bY29sXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBqID0gcmFuayAtIDE7IGogPj0gMDsgai0tKSB7XHJcbiAgICAgIGlmIChjb2xzW2pdICE9PSByb3dzW2pdKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5rOyBpKyspIHtcclxuICAgICAgICAgIHN3YXAobWF0cml4LCBpLCByb3dzW2pdLCBpLCBjb2xzW2pdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNvbHZlZCA9IHRydWU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGF1Z21lbnQgbWF0cml4IChyZXN1bHRzKVxyXG4gICAqXHJcbiAgICogQHJldHVybnMge0FycmF5LjxudW1iZXJbXT59XHJcbiAgICovXHJcbiAgZ2V0VmVjdG9ycygpIHtcclxuICAgIHJldHVybiB0aGlzLnZlY3RvcnMubWFwKHZlY3RvciA9PiB2ZWN0b3Iuc2xpY2UoKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdGVzIG1hdHJpeCBhbmQgdmVjdG9ycy5cclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICogQHJldHVybnMge2xlbnMudXRpbC5nYXVzc0pvcmRhbkVsaW1pbmF0aW9uLlNvbHZlcn1cclxuICAgKi9cclxuICB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IHJhbmsgPSB0aGlzLm1hdHJpeC5sZW5ndGg7XHJcblxyXG4gICAgdGhpcy5tYXRyaXguZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBpZiAocm93Lmxlbmd0aCAhPT0gcmFuaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IG11c3QgYmUgc3F1YXJlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudmVjdG9ycy5mb3JFYWNoKHZlY3RvciA9PiB7XHJcbiAgICAgIGlmICh2ZWN0b3IubGVuZ3RoICE9PSByYW5rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWZWN0b3JzIG11c3QgYmUgdGhlIHNhbWUgbGVuZ3RoIGFzIG1hdHJpeCByYW5rJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29sdmVyOyIsImltcG9ydCAqIGFzIGdhdXNzSm9yZGFuRWxpbWluYXRpb24gZnJvbSAnLi9nYXVzcy1qb3JkYW4tZWxpbWluYXRpb24nO1xyXG5cclxuZXhwb3J0IHtnYXVzc0pvcmRhbkVsaW1pbmF0aW9ufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgYmxlbmRDb2xvcnMsXHJcbiAgcGVyY2VwdGlibGVSZWNpcHJvY2FsLFxyXG4gIGRlZzJyYWQsXHJcbiAgcmFkMmRlZ1xyXG59IGZyb20gJy4vdXRpbCc7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlsJztcclxuaW1wb3J0IGdhdXNzSm9yZGFuRWxpbWluYXRpb24gZnJvbSAnLi9nYXVzcy1qb3JkYW4tZWxpbWluYXRpb24vZ2F1c3Mtam9yZGFuLWVsaW1pbmF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyBuYW1lc3BhY2VcclxuICpcclxuICogQG5hbWVzcGFjZSBsZW5zLnV0aWxcclxuICovXHJcbmNvbnN0IHV0aWwgPSB7XHJcbiAgLi4udXRpbHMsXHJcbiAgZ2F1c3NKb3JkYW5FbGltaW5hdGlvblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXRpbDsiLCJpbXBvcnQge0VQU0lMT059IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gMS94IHdoZXJlIHggaXMgcGVyY2VwdGlibGUgKG5vdCB1bmxpbWl0ZWQgb3IgaW5maW5pdGVzaW1hbCkuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLnV0aWxcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHJldHVybnMge251bWJlcn1cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvcGl4ZWwtYWNjZXNzb3JfOGhfc291cmNlLmh0bWwjbDAwMjM0IFBlcmNlcHRpYmxlUmVjaXByb2NhbCgpfVxyXG4gKiBhdCBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBwZXJjZXB0aWJsZVJlY2lwcm9jYWwoeCkge1xyXG4gIGNvbnN0IHNpZ24gPSB4IDwgMCA/IC0xIDogMTtcclxuXHJcbiAgaWYgKHNpZ24gKiB4ID49IEVQU0lMT04pIHtcclxuICAgIHJldHVybiAxIC8geDtcclxuICB9XHJcblxyXG4gIHJldHVybiBzaWduIC8gRVBTSUxPTjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJsZW5kcyB0d28gY29sb3JzIGJ5IGdpdmVuIHdlaWdodHMuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLnV0aWxcclxuICogQHBhcmFtIHtDb2xvcn0gY29sb3IxIEZpcnN0IGNvbG9yIHRvIGJsZW5kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gd2VpZ2h0MSBGaXJzdCBjb2xvcidzIHdlaWdodC5cclxuICogQHBhcmFtIHtDb2xvcn0gY29sb3IyIFNlY29uZCBjb2xvciB0byBibGVuZC5cclxuICogQHBhcmFtIHtudW1iZXJ8bnVsbH0gW3dlaWdodDJdIFNlY29uZCBjb2xvcidzIHdlaWdodC4gSWYgbm90IHBhc3NlZCAtLSB3aWxsIGJlIGNhbGN1bGF0ZWQgYXMgMSAtIHdlaWdodDEuXHJcbiAqIEByZXR1cm5zIHtDb2xvcn0gQ29sb3IgYmxlbmRpbmcgcmVzdWx0LlxyXG4gKi9cclxuZnVuY3Rpb24gYmxlbmRDb2xvcnMoY29sb3IxLCB3ZWlnaHQxLCBjb2xvcjIsIHdlaWdodDIgPSBudWxsKSB7XHJcbiAgaWYgKHdlaWdodDIgPT09IG51bGwpIHtcclxuICAgIHdlaWdodDIgPSAxIC0gd2VpZ2h0MTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb2xvcjEubWFwKChjaGFubmVsLCBpKSA9PiBNYXRoLnJvdW5kKGNoYW5uZWwgKiB3ZWlnaHQxICsgY29sb3IyW2ldICogd2VpZ2h0MikpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgcmFkaWFucyB0byBkZWdyZWVzXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLnV0aWxcclxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnNcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIHJhZDJkZWcocmFkaWFucykge1xyXG4gIHJldHVybiAxODAgKiByYWRpYW5zIC8gTWF0aC5QSTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGRlZ3JlZXMgdG8gcmFkaWFuc1xyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy51dGlsXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWdyZWVzXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBkZWcycmFkKGRlZ3JlZXMpIHtcclxuICByZXR1cm4gTWF0aC5QSSAqIGRlZ3JlZXMgLyAxODA7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgYmxlbmRDb2xvcnMsXHJcbiAgcGVyY2VwdGlibGVSZWNpcHJvY2FsLFxyXG4gIHJhZDJkZWcsXHJcbiAgZGVnMnJhZFxyXG59OyIsIi8qKlxyXG4gKiBAc3VtbWFyeSBWaXJ0dWFsIHZpZXdwb3J0IGNsYXNzLlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb24gUmVwcmVzZW50cyBpbWFnZSdzIHZpcnR1YWwgcG9zaXRpb24gYXQgaXQncyBjb29yZGluYXRlIHNwYWNlLlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy5pbWFnZW1hZ2ljay5vcmcvVXNhZ2UvYmFzaWNzLyNwYWdlIFZpcnR1YWwgY2FudmFzIG9mZnNldH0gYXQgSW1hZ2VNYWdpY2sgZG9jcy5cclxuICogQHR1dG9yaWFsIDAyLjA2LnZpcnR1YWwtdmlld3BvcnRcclxuICovXHJcbmNsYXNzIFZpZXdwb3J0IHtcclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4MSBMZWZ0IGVkZ2UgY29vcmRpbmF0ZSBvZiB2aWV3cG9ydC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geTEgVG9wIGVkZ2UgY29vcmRpbmF0ZSAgb2Ygdmlld3BvcnQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHgyIFJpZ2h0IGVkZ2UgY29vcmRpbmF0ZSBvZiB2aWV3cG9ydC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geTIgQm90dG9tIGVkZ2UgY29vcmRpbmF0ZSBvZiB2aWV3cG9ydC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBMZWZ0IGVkZ2UgY29vcmRpbmF0ZSBvZiB2aWV3cG9ydC5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLngxID0geDE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb3AgZWRnZSBjb29yZGluYXRlIG9mIHZpZXdwb3J0LlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy55MSA9IHkxO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmlnaHQgZWRnZSBjb29yZGluYXRlIG9mIHZpZXdwb3J0LlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy54MiA9IHgyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQm90dG9tIGVkZ2UgY29vcmRpbmF0ZSBvZiB2aWV3cG9ydC5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMueTIgPSB5MjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdmlydHVhbCB2aWV3cG9ydCB3aWR0aCAtLSBzYW1lIGFzIGltYWdlIGFjdHVhbCB3aWR0aC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgd2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy54MiAtIHRoaXMueDEgKyAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB2aXJ0dWFsIHZpZXdwb3J0IGhlaWdodCAtLSBzYW1lIGFzIGltYWdlIGFjdHVhbCBoZWlnaHQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLnkyIC0gdGhpcy55MSArIDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHZpZXdwb3J0IGFyZWEuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGFyZWEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53aWR0aCgpICogdGhpcy5oZWlnaHQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB2aWV3cG9ydCBjb250YWlucyBnaXZlbiBjb29yZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgY29udGFpbnMoeCwgeSkge1xyXG4gICAgcmV0dXJuIHggPj0gdGhpcy54MSAmJiB4IDw9IHRoaXMueDIgJiYgeSA+PSB0aGlzLnkxICYmIHkgPD0gdGhpcy55MjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4cGFuZHMgdmlld3BvcnQgdG8gY29udGFpbiBnaXZlbiBjb29yZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHJldHVybnMge2xlbnMuVmlld3BvcnR9XHJcbiAgICovXHJcbiAgZXhwYW5kKHgsIHkpIHtcclxuICAgIHRoaXMueDEgPSBNYXRoLm1pbih0aGlzLngxLCB4KTtcclxuICAgIHRoaXMueDIgPSBNYXRoLm1heCh0aGlzLngyLCB4KTtcclxuICAgIHRoaXMueTEgPSBNYXRoLm1pbih0aGlzLnkxLCB5KTtcclxuICAgIHRoaXMueTIgPSBNYXRoLm1heCh0aGlzLnkyLCB5KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvbmVzIHZpZXdwb3J0IGludG8gbmV3IGluc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge2xlbnMuVmlld3BvcnR9XHJcbiAgICovXHJcbiAgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy54MSwgdGhpcy55MSwgdGhpcy54MiwgdGhpcy55Mik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaXggYm91bmRzIGFmdGVyIGJlc3QgZml0IHZpZXdwb3J0IGNhbGN1bGF0aW9uLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge2xlbnMuVmlld3BvcnR9XHJcbiAgICovXHJcbiAgZml4Qm91bmRzKCkge1xyXG4gICAgdGhpcy54MSA9IE1hdGguZmxvb3IodGhpcy54MSAtIDAuNSk7XHJcbiAgICB0aGlzLnkxID0gTWF0aC5mbG9vcih0aGlzLnkxIC0gMC41KTtcclxuICAgIHRoaXMueDIgPSBNYXRoLmNlaWwodGhpcy54MiAtIDAuNSk7XHJcbiAgICB0aGlzLnkyID0gTWF0aC5jZWlsKHRoaXMueTIgLSAwLjUpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY2FsZXMgdmlld3BvcnQgYm91bmRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlXHJcbiAgICogQHJldHVybnMge2xlbnMuVmlld3BvcnR9XHJcbiAgICovXHJcbiAgc2NhbGUoc2NhbGUpIHtcclxuICAgIHRoaXMueDEgPSBNYXRoLnJvdW5kKHRoaXMueDEgKiBzY2FsZSk7XHJcbiAgICB0aGlzLnkxID0gTWF0aC5yb3VuZCh0aGlzLnkxICogc2NhbGUpO1xyXG4gICAgdGhpcy54MiA9IE1hdGgucm91bmQodGhpcy54MiAqIHNjYWxlKTtcclxuICAgIHRoaXMueTIgPSBNYXRoLnJvdW5kKHRoaXMueTIgKiBzY2FsZSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0cyB2aWV3cG9ydCBvZmZzZXQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bGVucy5WaWV3cG9ydH1cclxuICAgKi9cclxuICByZXNldCgpIHtcclxuICAgIGxldCB3aWR0aCA9IHRoaXMud2lkdGgoKSxcclxuICAgICAgICBoZWlnaHQgPSB0aGlzLmhlaWdodCgpO1xyXG4gICAgdGhpcy54MSA9IDA7XHJcbiAgICB0aGlzLnkxID0gMDtcclxuICAgIHRoaXMueDIgPSB0aGlzLngxICsgd2lkdGggLSAxO1xyXG4gICAgdGhpcy55MiA9IHRoaXMueTEgKyBoZWlnaHQgLSAxO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHZpZXdwb3J0IG9mZnNldFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge251bWJlcn0geVxyXG4gICAqIEByZXR1cm5zIHtsZW5zLlZpZXdwb3J0fVxyXG4gICAqL1xyXG4gIG9mZnNldCh4LCB5KSB7XHJcbiAgICB0aGlzLngxICs9IHg7XHJcbiAgICB0aGlzLnkxICs9IHk7XHJcbiAgICB0aGlzLngyICs9IHg7XHJcbiAgICB0aGlzLnkyICs9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdwb3J0OyIsIi8qKlxyXG4gKiBWaXJ0dWFsIHBpeGVsIG1ldGhvZHMuXHJcbiAqXHJcbiAqIEByZWFkb25seVxyXG4gKiBAZW51bSB7bnVtYmVyfVxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy5pbWFnZW1hZ2ljay5vcmcvVXNhZ2UvbWlzYy8jdmlydHVhbC1waXhlbCBWaXJ0dWFsIHBpeGVsIGRldGFpbHN9IGF0IEltYWdlTWFnaWNrIGRvY3MuXHJcbiAqIEB0dXRvcmlhbCAwMi4wNS52aXJ0dWFsLXBpeGVscy1hbmQtbWF0dGVcclxuICovXHJcbmNvbnN0IHZweCA9IHtcclxuICAvKipcclxuICAgKiBVc2UgaW1hZ2UgYmFja2dyb3VuZCBjb2xvci5cclxuICAgKi9cclxuICBCQUNLR1JPVU5EOiAxLFxyXG5cclxuICAvKipcclxuICAgKiBDbG9zZXN0IGVkZ2UgY29sb3IuXHJcbiAgICovXHJcbiAgRURHRTogMyxcclxuXHJcbiAgLyoqXHJcbiAgICogTWlycm9yIGVmZmVjdC5cclxuICAgKi9cclxuICBNSVJST1I6IDQsXHJcblxyXG4gIC8qKlxyXG4gICAqIFJhbmRvbSBjb2xvciBmcm9tIGltYWdlLlxyXG4gICAqL1xyXG4gIFJBTkRPTTogNSxcclxuXHJcbiAgLyoqXHJcbiAgICogVGlsZSBlZmZlY3QuXHJcbiAgICovXHJcbiAgVElMRTogNixcclxuXHJcbiAgLyoqXHJcbiAgICogVHJhbnNwYXJlbnQgY29sb3IuXHJcbiAgICovXHJcbiAgVFJBTlNQQVJFTlQ6IDcsXHJcblxyXG4gIC8qKlxyXG4gICAqIEJsYWNrIGNvbG9yLlxyXG4gICAqL1xyXG4gIEJMQUNLOiA5LFxyXG5cclxuICAvKipcclxuICAgKiBHcmF5IGNvbG9yLlxyXG4gICAqL1xyXG4gIEdSQVk6IDEwLFxyXG5cclxuICAvKipcclxuICAgKiBXaGl0ZSBjb2xvci5cclxuICAgKi9cclxuICBXSElURTogMTEsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRpbGUgZWZmZWN0IGhvcml6b250YWxseSwgYmFja2dyb3VuZCBjb2xvciB2ZXJ0aWNhbGx5LlxyXG4gICAqL1xyXG4gIEhPUklaT05UQUxfVElMRTogMTIsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRpbGUgZWZmZWN0IHZlcnRpY2FsbHksIGJhY2tncm91bmQgY29sb3IgaG9yaXpvbnRhbGx5LlxyXG4gICAqL1xyXG4gIFZFUlRJQ0FMX1RJTEU6IDEzLFxyXG5cclxuICAvKipcclxuICAgKiBUaWxlIGVmZmVjdCBob3Jpem9udGFsbHksIGNsb3Nlc3QgZWRnZSBjb2xvciB2ZXJ0aWNhbGx5LlxyXG4gICAqL1xyXG4gIEhPUklaT05UQUxfVElMRV9FREdFOiAxNCxcclxuXHJcbiAgLyoqXHJcbiAgICogVGlsZSBlZmZlY3QgdmVydGljYWxseSwgY2xvc2VzdCBlZGdlIGNvbG9yIGhvcml6b250YWxseS5cclxuICAgKi9cclxuICBWRVJUSUNBTF9USUxFX0VER0U6IDE1XHJcblxyXG4gIC8vIFRPRE86IGltcGxlbWVudCBhbmQgYWRkIENoZWNrZXIgdGlsZSBhbiBkaXRoZXIgbWV0aG9kc1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdnB4OyJdLCJzb3VyY2VSb290IjoiIn0=