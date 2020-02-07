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
/* harmony import */ var _mixins_creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/creates-bestFit-viewport-from-apexes */ "./lib/mixins/creates-bestFit-viewport-from-apexes.js");
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

Object.assign(Affine.prototype, _mixins_creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
/* harmony import */ var _util_gauss_jordan_elimination_least_squares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/gauss-jordan-elimination/least-squares */ "./lib/util/gauss-jordan-elimination/least-squares.js");
/* harmony import */ var _mixins_creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/creates-bestFit-viewport-from-apexes */ "./lib/mixins/creates-bestFit-viewport-from-apexes.js");
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

Object.assign(Perspective.prototype, _mixins_creates_bestFit_viewport_from_apexes__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
    _classCallCheck(this, InvalidArgument);

    return _possibleConstructorReturn(this, _getPrototypeOf(InvalidArgument).call(this, message));
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
    _classCallCheck(this, InvalidArgumentsLength);

    return _possibleConstructorReturn(this, _getPrototypeOf(InvalidArgumentsLength).call(this, message));
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
    _classCallCheck(this, UnsolvableMatrix);

    return _possibleConstructorReturn(this, _getPrototypeOf(UnsolvableMatrix).call(this, message));
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
  var p0 = (6 - 2 * b) / 6; // const p1 = 0;

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
}

; // TODO: add more filter functions



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
   * @param {number|null} [windowSupport=null] Window support, usually equal to support (expert only).
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
var VERSION = '0.1.0';






























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
        if (x < 0 || y >= this.width) {
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

      if (validity >= 0) {
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW5zL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sZW5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlbnMvLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZGlzdG9ydC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRlci9yZXZlcnNlLXBpeGVsLW1hcHBpbmcuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9kaXN0b3J0aW9uL2FmZmluZS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRpb24vYXJjLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZGlzdG9ydGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRpb24vcGVyc3BlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9kaXN0b3J0cy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi9pbnZhbGlkLWFyZ3VtZW50LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZXhjZXB0aW9uL2ludmFsaWQtYXJndW1lbnRzLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi9sZW5zLWV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi91bnNvbHZhYmxlLW1hdHJpeC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2ZpbHRlci1wcmVzZXRzLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZmlsdGVyL2ZpbHRlci1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZmlsdGVyL2luZGV4LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvaW1hZ2UvYWJzdHJhY3QtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9pbWFnZS9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9pbWFnZS9kb20taW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9pbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2luZGV4LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvaW50ZXJwb2xhdGlvbi5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL21peGlucy9jcmVhdGVzLWJlc3RGaXQtdmlld3BvcnQtZnJvbS1hcGV4ZXMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9taXhpbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9taXhpbnMvaW50ZXJwb2xhdGlvbi10cmFpdC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL21peGlucy92aXJ0dWFsLXBpeGVsLXRyYWl0LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvcmVzYW1wbGVyL2Utdy1hLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvcmVzYW1wbGVyL2luZGV4LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvcmVzYW1wbGVyL3BvaW50LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdXRpbC9nYXVzcy1qb3JkYW4tZWxpbWluYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi91dGlsL2dhdXNzLWpvcmRhbi1lbGltaW5hdGlvbi9sZWFzdC1zcXVhcmVzLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdXRpbC9nYXVzcy1qb3JkYW4tZWxpbWluYXRpb24vc29sdmVyLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3ZpZXdwb3J0LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdnB4LmpzIl0sIm5hbWVzIjpbIkVQU0lMT04iLCJNQVhJTVVNX1ZBTFVFIiwiTV9QSTIiLCJNYXRoIiwiUEkiLCJNXzJQSSIsImRlZmF1bHRPcHRpb25zIiwiYmVzdEZpdCIsImZpbHRlciIsImZpbHRlclByZXNldHMiLCJST0JJRE9VWCIsInJlc2FtcGxlIiwiYXN5bmMiLCJvdXRwdXRTY2FsaW5nIiwiZGlzdG9ydCIsImltYWdlIiwiZGlzdG9ydGlvbiIsImFyZ3MiLCJvcHRpb25zIiwibWFrZU9wdGlvbnMiLCJmb3JjZUJlc3RGaXQiLCJkaXN0b3J0ZWQiLCJzeW5jIiwibWFrZURpc3RvcnRlciIsIm1ha2VSZXNhbXBsZXIiLCJzdXBlcnNhbXBsZSIsInNjYWxlU3VwZXJzYW1wbGVkIiwiUHJvbWlzZSIsInRoZW4iLCJzdXBlcnNhbXBsZWQiLCJzY2FsZSIsImNvbnNvbGUiLCJ3YXJuIiwiT2JqZWN0IiwiYXNzaWduIiwicmVzYW1wbGVyIiwiZGlzdCIsImRpc3RvcnRlciIsInZpZXdwb3J0IiwicnNtIiwibWFrZUZpbHRlciIsIm1hdHRlQ29sb3IiLCJzbGljZSIsIlJldmVyc2VQaXhlbE1hcHBpbmciLCJtYXBwZXIiLCJzZXRJbWFnZSIsInNldE1hcHBlciIsInByZXBhcmVWaWV3cG9ydCIsIngxIiwiZmxvb3IiLCJ5MSIsIngyIiwieTIiLCJjYW52YXMiLCJnZXRCbGFuayIsInNjYWxpbmciLCJwZXJmb3JtRGlzdG9ydGlvbkFzeW5jIiwicGVyZm9ybURpc3RvcnRpb24iLCJ5IiwieCIsInNldFBpeGVsQ29sb3IiLCJnZXRSZXNhbXBsZWRDb2xvciIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiY2xvbmUiLCJoYXNCZXN0Rml0Vmlld3BvcnQiLCJnZXRCZXN0Rml0Vmlld3BvcnQiLCJtYXAiLCJtYXRyaXgiLCJBZmZpbmUiLCJmb3J3YXJkTWF0cml4IiwiY29uc3RydWN0b3IiLCJpbnZlcnRBZmZpbmVNYXRyaXgiLCJoYXNQYXJ0aWFsRGVyaXZhdGl2ZXMiLCJoYXNDb25zdGFudFBhcnRpYWxEZXJpdmF0aXZlcyIsImNvbnRyb2xQb2ludHMiLCJsZW5ndGgiLCJJbnZhbGlkQXJndW1lbnRzTGVuZ3RoIiwibGVhc3RTcXVhcmVzIiwiTGVhc3RTcXVhcmVzIiwiaSIsInUiLCJ2IiwiYWRkVGVybXMiLCJ2ZWN0b3JzIiwic29sdmUiLCJnZXRWZWN0b3JzIiwiY29uY2F0IiwiZGV0ZXJtaW5hbnQiLCJwZXJjZXB0aWJsZVJlY2lwcm9jYWwiLCJwcm90b3R5cGUiLCJjcmVhdGVzQmVzdEZpdFZpZXdwb3J0RnJvbUFwZXhlcyIsIkFyYyIsImMwIiwiYzEiLCJjMiIsImMzIiwiYzQiLCJhbmdsZVRvV2lkdGgiLCJ3aWR0aCIsInJhZGl1c1RvSGVpZ2h0IiwiaGVpZ2h0IiwiZ2V0VVYiLCJhIiwiY2EiLCJjb3MiLCJzYSIsInNpbiIsInZwIiwiVmlld3BvcnQiLCJleHBhbmQiLCJjZWlsIiwiZml4Qm91bmRzIiwiYXRhbjIiLCJyb3VuZCIsImh5cG90IiwiSW52YWxpZEFyZ3VtZW50IiwiZGVnMnJhZCIsInAiLCJxIiwiciIsIlBlcnNwZWN0aXZlIiwicmV2ZXJzZU1hdHJpeCIsImRlbm9taW5hdG9yIiwiaW52ZXJ0UGVyc3BlY3RpdmVNYXRyaXgiLCJ2YWxpZGl0eSIsImFic1IiLCJhYnMiLCJhYnNDNiIsImFic0M3IiwicG93IiwiaW52ZXJzZSIsImFmZmluZUJ5Q29udHJvbFBvaW50cyIsImZyb21Db250cm9sUG9pbnRzIiwiYWZmaW5lQnlNYXRyaXgiLCJzeCIsInJ5IiwicngiLCJzeSIsInR4IiwidHkiLCJmcm9tRm9yd2FyZE1hdHJpeCIsInBlcnNwZWN0aXZlQnlDb250cm9sUG9pbnRzIiwicGVyc3BlY3RpdmVCeU1hdHJpeCIsImFyY0J5QXJndW1lbnRzIiwiZnJvbUFyZ3VtZW50cyIsImRpc3RvcnRzIiwiQUZGSU5FIiwiQUZGSU5FX1BST0pFQ1RJT04iLCJQRVJTUEVDVElWRSIsIlBFUlNQRUNUSVZFX1BST0pFQ1RJT04iLCJBUkMiLCJyZWdpc3RlckRpc3RvcnRpb25SZXNvbHZlciIsIm5hbWUiLCJyZXNvbHZlciIsInVucmVnaXN0ZXJEaXN0b3J0aW9uUmVzb2x2ZXIiLCJtZXNzYWdlIiwiTGVuc0V4Y2VwdGlvbiIsIkVycm9yIiwiY2FwdHVyZVN0YWNrVHJhY2UiLCJzdGFjayIsIlVuc29sdmFibGVNYXRyaXgiLCJGaWx0ZXIiLCJjdWJpY0JDIiwiYm94IiwiUk9CSURPVVhfU0hBUlAiLCJiIiwiYyIsInAwIiwicDIiLCJwMyIsInEwIiwicTEiLCJxMiIsInEzIiwiZmlsdGVyRnVuY3Rpb24iLCJ3aW5kb3dGdW5jdGlvbiIsInN1cHBvcnQiLCJibHVyIiwid2luZG93U3VwcG9ydCIsInhCbHVyIiwid2luZG93Iiwibm90SW1wbGVtZW50ZWQiLCJtZXRob2QiLCJBYnN0cmFjdEltYWdlIiwiYmFja2dyb3VuZENvbG9yIiwidmlydHVhbFBpeGVsTWV0aG9kIiwidnB4IiwiVFJBTlNQQVJFTlQiLCJxdWFudHVtUmFuZ2UiLCJpbnRlcnBvbGF0aW9uTWV0aG9kIiwiaW50ZXJwb2xhdGlvbiIsIklOVEVHRVIiLCJnZXRJbWFnZVBpeGVsQ29sb3IiLCJnZXRWaXJ0dWFsUGl4ZWxDb2xvciIsImNvbG9yIiwic2V0SW1hZ2VQaXhlbENvbG9yIiwiYmxhbmsiLCJwcmVwYXJlQmxhbmsiLCJyZXNpemVkIiwicmVzaXplIiwidmlydHVhbFBpeGVsVHJhaXQiLCJpbnRlcnBvbGF0aW9uVHJhaXQiLCJDYW52YXMiLCJpbWFnZURhdGEiLCJnZXRDb250ZXh0IiwiZ2V0SW1hZ2VEYXRhIiwiZGF0YSIsIm9mZnNldCIsIkFycmF5IiwiY2FsbCIsImZvckVhY2giLCJjaGFubmVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicHV0SW1hZ2VEYXRhIiwiZHJhd0ltYWdlIiwiZHN0IiwiRG9tSW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsInNyYyIsInRvRGF0YVVSTCIsIlZFUlNJT04iLCJBVkVSQUdFIiwiQVZFUkFHRV85IiwiQVZFUkFHRV8xNiIsIkJBQ0tHUk9VTkQiLCJ1MSIsInYxIiwidTIiLCJ2MiIsImZvcndhcmRNYXAiLCJhcGV4IiwiZ2V0SW50ZXJwb2xhdGVkUGl4ZWxDb2xvciIsIm1ldGhvZHMiLCJpbnRlcnBvbGF0ZUF2ZXJhZ2UiLCJnZXRQaXhlbENvbG9yIiwiY291bnQiLCJzdGFydFgiLCJzdGFydFkiLCJlbmRYIiwiZW5kWSIsIlkiLCJYIiwiZ2FtbWEiLCJnZXRFZGdlQ29vcmRzIiwibWF4IiwibWluIiwiZ2V0VGlsZUNvb3JkcyIsInZweE1ldGhvZHMiLCJFREdFIiwiTUlSUk9SIiwiVElMRSIsIkJMQUNLIiwiV0hJVEUiLCJmaWxsIiwiR1JBWSIsIkhPUklaT05UQUxfVElMRSIsIkhPUklaT05UQUxfVElMRV9FREdFIiwiVkVSVElDQUxfVElMRSIsIlZFUlRJQ0FMX1RJTEVfRURHRSIsIlJBTkRPTSIsInJhbmRvbSIsIldFSUdIVF9MT09LVVBfVEFCTEVfV0lEVEgiLCJidWlsZFdlaWdodExvb2t1cFRhYmxlIiwidGFibGUiLCJyU2NhbGUiLCJzcXJ0IiwiUSIsImdldFdlaWdodCIsImNsYW1wVG9RdWFudHVtIiwidmFsdWUiLCJjbGFtcEVsbGlwc2VBeGVzIiwiZHV4IiwiZHV5IiwiZHZ4IiwiZHZ5IiwiZCIsImFhIiwiYmIiLCJjYyIsImRkIiwibjExIiwibjEyIiwibjIxIiwibjIyIiwiZGV0IiwidHdpY2VfZGV0IiwiZnJvYmVuaXVzX3NxdWFyZWQiLCJkaXNjcmltaW5hbnQiLCJzcXJ0X2Rpc2NyaW1pbmFudCIsInMxczEiLCJzMnMyIiwiczFzMW1pbnVzbjExIiwiczFzMW1pbnVzbjIyIiwiczFzMW1pbnVzbjExX3NxdWFyZWQiLCJzMXMxbWludXNuMjJfc3F1YXJlZCIsInRlbXBfdTExIiwidGVtcF91MjEiLCJub3JtIiwidTExIiwidTIxIiwibWFqb3JfbWFnIiwibWlub3JfbWFnIiwibWFqb3JfeCIsIm1ham9yX3kiLCJtaW5vcl94IiwibWlub3JfeSIsIkVXQSIsInJlc2l6ZUZpbHRlciIsIndlaWdodExvb2t1cFRhYmxlIiwiaW1hZ2VWaWV3cG9ydCIsImltYWdlQXJlYSIsImltYWdlVmlydHVhbFBpeGVsTWV0aG9kIiwiaW1hZ2VBdmVyYWdlQ29sb3IiLCJBIiwiQiIsIkMiLCJGIiwidUxpbWl0IiwidkxpbWl0IiwidVdpZHRoIiwic2xvcGUiLCJlbGxpcHNlSXNTZXRVcCIsImxpbWl0UmVhY2hlZCIsImdldFZhbGlkaXR5IiwicmV2ZXJzZU1hcCIsInNldHVwRWxsaXBzZU9uY2UiLCJnZXRQYXJ0aWFsRGVyaXZhdGl2ZXMiLCJzZXR1cEVsbGlwc2UiLCJnZXRXZWlnaHRlZEF2ZXJhZ2UiLCJibGVuZENvbG9ycyIsImFyZWEiLCJkZXJpdmF0aXZlcyIsImRlcml2YXRpdmUiLCJpbml0RWxsaXBzZSIsInNjYWxlRWxsaXBzZSIsInUwIiwidjAiLCJkb2VzbnROZWVkUmVzYW1wbGluZyIsImdldEltYWdlQXZlcmFnZUNvbG9yIiwiZGl2aXNvck0iLCJkaXZpc29yQyIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFscGhhIiwidXciLCJERFEiLCJ1c3RhcnQiLCJ1ZW5kIiwiVSIsIlYiLCJEUSIsIndlaWdodCIsImciLCJvdXRPZkltYWdlQm91bmRzIiwiZ2V0QXZlcmFnZUNvbG9yIiwiUG9pbnQiLCJyYW5rIiwibnVtVmVjdG9ycyIsInB1c2giLCJ0ZXJtcyIsInJlc3VsdHMiLCJqIiwiU29sdmVyIiwic3dhcCIsImFycmF5Iiwicm93MSIsImNvbDEiLCJyb3cyIiwiY29sMiIsInVuc29sdmFibGUiLCJzb2x2ZWQiLCJyb3ciLCJ2ZWN0b3IiLCJ2YWxpZGF0ZSIsImNvbHMiLCJyb3dzIiwicGl2b3RzIiwiY29sIiwiayIsInNpZ24iLCJjb2xvcjEiLCJ3ZWlnaHQxIiwiY29sb3IyIiwid2VpZ2h0MiIsInJhZDJkZWciLCJyYWRpYW5zIiwiZGVncmVlcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBSUEsSUFBTUEsT0FBTyxHQUFHLE9BQWhCO0FBQ0E7Ozs7O0FBSUEsSUFBTUMsYUFBYSxHQUFHLHdCQUF0QjtBQUVBOzs7Ozs7O0FBTUEsSUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUF4QjtBQUVBOzs7Ozs7O0FBTUEsSUFBTUMsS0FBSyxHQUFHRixJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUF4Qjs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlFLGNBQWMsR0FBRztBQUNuQkMsU0FBTyxFQUFFLEtBRFU7QUFFbkJDLFFBQU0sRUFBRUMsdURBQWEsQ0FBQ0MsUUFGSDtBQUduQkMsVUFBUSxFQUFFLElBSFM7QUFJbkJDLE9BQUssRUFBRSxJQUpZO0FBS25CQyxlQUFhLEVBQUU7QUFMSSxDQUFyQjtBQVFBOzs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7OztBQVdBLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxVQUF4QixFQUFvQ0MsSUFBcEMsRUFBd0Q7QUFBQSxNQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQ3RELE1BQUksT0FBT0YsVUFBUCxLQUFzQixVQUExQixFQUFzQztBQUNwQ0EsY0FBVSxHQUFJQSxVQUFVLENBQUNDLElBQUQsRUFBT0YsS0FBUCxDQUF4QjtBQUNELEdBRkQsTUFFTztBQUNMRyxXQUFPLEdBQU9ELElBQUksSUFBSSxFQUF0QjtBQUNEOztBQUVEQyxTQUFPLEdBQUdDLFdBQVcsQ0FBQ0QsT0FBRCxDQUFyQjs7QUFFQSxNQUFJRixVQUFVLENBQUNJLFlBQWYsRUFBNkI7QUFDM0JGLFdBQU8sQ0FBQ1gsT0FBUixHQUFrQixJQUFsQjtBQUNEOztBQUVELE1BQUljLFNBQVMsR0FBR0MsSUFBSSxDQUNsQkMsYUFBYSxDQUNYUixLQURXLEVBRVhDLFVBRlcsRUFHWFEsYUFBYSxDQUFDVCxLQUFELEVBQVFDLFVBQVIsRUFBb0JFLE9BQXBCLENBSEYsRUFJWEEsT0FKVyxDQUFiLENBS0VKLE9BTEYsRUFEa0IsQ0FBcEI7O0FBU0EsTUFBSUksT0FBTyxDQUFDTyxXQUFSLElBQXVCUCxPQUFPLENBQUNPLFdBQVIsS0FBd0IsQ0FBbkQsRUFBc0Q7QUFDcEQsV0FBT0MsaUJBQWlCLENBQUNMLFNBQUQsRUFBWSxJQUFJSCxPQUFPLENBQUNPLFdBQXhCLENBQXhCO0FBQ0Q7O0FBRUQsU0FBT0osU0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9BLFNBQVNDLElBQVQsQ0FBY0QsU0FBZCxFQUF5QjtBQUN2QixNQUFJQSxTQUFTLFlBQVlNLE9BQXpCLEVBQWtDO0FBQ2hDLFdBQU9OLFNBQVMsQ0FBQ08sSUFBVixDQUFlLFVBQUFQLFNBQVM7QUFBQSxhQUFJQyxJQUFJLENBQUNELFNBQUQsQ0FBUjtBQUFBLEtBQXhCLENBQVA7QUFDRDs7QUFFRCxNQUFJLFVBQVVBLFNBQVYsSUFBdUIsT0FBT0EsU0FBUyxDQUFDQyxJQUFqQixLQUEwQixVQUFyRCxFQUFpRTtBQUMvRCxXQUFPRCxTQUFTLENBQUNDLElBQVYsRUFBUDtBQUNEOztBQUVELFNBQU9ELFNBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7O0FBUUEsU0FBU0ssaUJBQVQsQ0FBMkJHLFlBQTNCLEVBQXlDQyxLQUF6QyxFQUFnRDtBQUM5QyxNQUFJRCxZQUFZLFlBQVlGLE9BQTVCLEVBQXFDO0FBQ25DLFdBQU9FLFlBQVksQ0FBQ0QsSUFBYixDQUFrQixVQUFBQyxZQUFZO0FBQUEsYUFBSUgsaUJBQWlCLENBQUNHLFlBQUQsRUFBZUMsS0FBZixDQUFyQjtBQUFBLEtBQTlCLENBQVA7QUFDRDs7QUFFRCxNQUFJLFdBQVdELFlBQVgsSUFBMkIsT0FBT0EsWUFBWSxDQUFDQyxLQUFwQixLQUE4QixVQUE3RCxFQUF5RTtBQUN2RSxXQUFPRCxZQUFZLENBQUNDLEtBQWIsQ0FBbUJBLEtBQW5CLENBQVA7QUFDRCxHQUZELE1BRU87QUFDTEMsV0FBTyxDQUFDQyxJQUFSO0FBQ0Q7O0FBRUQsU0FBT0gsWUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9BLFNBQVNWLFdBQVQsQ0FBcUJELE9BQXJCLEVBQThCO0FBQzVCQSxTQUFPLEdBQUdlLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0I1QixjQUFsQixFQUFrQ1ksT0FBbEMsQ0FBVjs7QUFFQSxNQUFJQSxPQUFPLENBQUNPLFdBQVosRUFBeUI7QUFDdkJQLFdBQU8sQ0FBQ0wsYUFBUixHQUF3QkssT0FBTyxDQUFDTyxXQUFoQztBQUNEOztBQUVELFNBQU9QLE9BQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7QUFVQSxTQUFTSyxhQUFULENBQXVCUixLQUF2QixFQUE4QkMsVUFBOUIsRUFBMENtQixTQUExQyxFQUFxRGpCLE9BQXJELEVBQThEO0FBQzVELE1BQU1rQixJQUFJLEdBQUcsSUFBSUMsOERBQUosQ0FBa0N0QixLQUFsQyxFQUF5Q0MsVUFBekMsRUFBcURtQixTQUFyRCxDQUFiO0FBQ0FDLE1BQUksQ0FBQ3hCLEtBQUwsR0FBYSxDQUFDLENBQUNNLE9BQU8sQ0FBQ04sS0FBdkI7QUFDQXdCLE1BQUksQ0FBQzdCLE9BQUwsR0FBZSxDQUFDLENBQUNXLE9BQU8sQ0FBQ1gsT0FBekI7O0FBRUEsTUFBSVcsT0FBTyxDQUFDb0IsUUFBWixFQUFzQjtBQUNwQkYsUUFBSSxDQUFDRSxRQUFMLEdBQWdCcEIsT0FBTyxDQUFDb0IsUUFBeEI7QUFDRDs7QUFFRCxNQUFJcEIsT0FBTyxDQUFDTCxhQUFaLEVBQTJCO0FBQ3pCdUIsUUFBSSxDQUFDdkIsYUFBTCxHQUFxQkssT0FBTyxDQUFDTCxhQUE3Qjs7QUFFQSxRQUFJSyxPQUFPLENBQUNPLFdBQVosRUFBeUI7QUFDdkJXLFVBQUksQ0FBQ1gsV0FBTCxHQUFtQixJQUFuQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT1csSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsU0FBU1osYUFBVCxDQUF1QlQsS0FBdkIsRUFBOEJDLFVBQTlCLEVBQTBDRSxPQUExQyxFQUFtRDtBQUNqRCxNQUFJcUIsR0FBSjs7QUFFQSxNQUFJckIsT0FBTyxDQUFDaUIsU0FBWixFQUF1QjtBQUNyQkksT0FBRyxHQUFHckIsT0FBTyxDQUFDaUIsU0FBZDtBQUNELEdBRkQsTUFFTyxJQUFJakIsT0FBTyxDQUFDUCxRQUFaLEVBQXNCO0FBQzNCNEIsT0FBRyxHQUFHLElBQUlKLDhDQUFKLENBQWtCSyxVQUFVLENBQUN0QixPQUFELENBQTVCLENBQU47QUFDRCxHQUZNLE1BRUE7QUFDTHFCLE9BQUcsR0FBRyxJQUFJSixnREFBSixFQUFOO0FBQ0Q7O0FBRUQsTUFBSWpCLE9BQU8sQ0FBQ3VCLFVBQVosRUFBd0I7QUFDdEJGLE9BQUcsQ0FBQ0UsVUFBSixHQUFpQnZCLE9BQU8sQ0FBQ3VCLFVBQVIsQ0FBbUJDLEtBQW5CLEVBQWpCO0FBQ0Q7O0FBRUQsU0FBT0gsR0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9BLFNBQVNDLFVBQVQsQ0FBb0J0QixPQUFwQixFQUE2QjtBQUMzQixNQUFJLE9BQU9BLE9BQU8sQ0FBQ1YsTUFBZixLQUEwQixVQUE5QixFQUEwQztBQUN4QyxXQUFPVSxPQUFPLENBQUNWLE1BQVIsRUFBUDtBQUNEOztBQUVELFNBQU9VLE9BQU8sQ0FBQ1YsTUFBZjtBQUNEOztBQUVjTSxzRUFBZixFOzs7Ozs7Ozs7Ozs7QUNuTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7SUFPTTZCLG1COzs7QUFFSjs7Ozs7O0FBTUEsK0JBQVk1QixLQUFaLEVBQW1CQyxVQUFuQixFQUErQm1CLFNBQS9CLEVBQTBDO0FBQUE7O0FBQ3hDOzs7O0FBSUEsU0FBS3BCLEtBQUwsR0FBYUEsS0FBYjtBQUVBOzs7OztBQUlBLFNBQUs2QixNQUFMLEdBQWM1QixVQUFkO0FBRUE7Ozs7O0FBSUEsU0FBS21CLFNBQUwsR0FBaUJBLFNBQWpCO0FBRUE7Ozs7O0FBSUEsU0FBSzVCLE9BQUwsR0FBZSxLQUFmO0FBRUE7Ozs7O0FBSUEsU0FBSytCLFFBQUwsR0FBZ0IsSUFBaEI7QUFFQTs7Ozs7QUFJQSxTQUFLMUIsS0FBTCxHQUFhLElBQWI7QUFFQTs7Ozs7QUFJQSxTQUFLQyxhQUFMLEdBQXFCLENBQXJCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs4QkFNVTtBQUFBOztBQUNSLFdBQUtzQixTQUFMLENBQWVVLFFBQWYsQ0FBd0IsS0FBSzlCLEtBQTdCO0FBQ0EsV0FBS29CLFNBQUwsQ0FBZVcsU0FBZixDQUF5QixLQUFLRixNQUE5QjtBQUVBLFVBQU1OLFFBQVEsR0FBRyxLQUFLUyxlQUFMLEVBQWpCO0FBQ0EsVUFBTUMsRUFBRSxHQUFHN0MsSUFBSSxDQUFDOEMsS0FBTCxDQUFXWCxRQUFRLENBQUNVLEVBQXBCLENBQVg7QUFDQSxVQUFNRSxFQUFFLEdBQUcvQyxJQUFJLENBQUM4QyxLQUFMLENBQVdYLFFBQVEsQ0FBQ1ksRUFBcEIsQ0FBWDtBQUNBLFVBQU1DLEVBQUUsR0FBR2hELElBQUksQ0FBQzhDLEtBQUwsQ0FBV1gsUUFBUSxDQUFDYSxFQUFwQixDQUFYO0FBQ0EsVUFBTUMsRUFBRSxHQUFHakQsSUFBSSxDQUFDOEMsS0FBTCxDQUFXWCxRQUFRLENBQUNjLEVBQXBCLENBQVg7QUFFQSxVQUFNQyxNQUFNLEdBQUcsS0FBS3RDLEtBQUwsQ0FBV3VDLFFBQVgsQ0FBb0JoQixRQUFwQixDQUFmO0FBRUEsV0FBS0gsU0FBTCxDQUFlb0IsT0FBZixHQUF5QixJQUFJLEtBQUsxQyxhQUFsQzs7QUFFQSxVQUFJd0MsTUFBTSxZQUFZMUIsT0FBdEIsRUFBK0I7QUFDN0IsZUFBTzBCLE1BQU0sQ0FBQ3pCLElBQVAsQ0FBWSxVQUFBeUIsTUFBTTtBQUFBLGlCQUFJLEtBQUksQ0FBQ0csc0JBQUwsQ0FBNEJILE1BQTVCLEVBQW9DTCxFQUFwQyxFQUF3Q0UsRUFBeEMsRUFBNENDLEVBQTVDLEVBQWdEQyxFQUFoRCxDQUFKO0FBQUEsU0FBbEIsQ0FBUDtBQUNELE9BRkQsTUFFTyxJQUFJLEtBQUt4QyxLQUFULEVBQWdCO0FBQ3JCLGVBQU8sS0FBSzRDLHNCQUFMLENBQTRCSCxNQUE1QixFQUFvQ0wsRUFBcEMsRUFBd0NFLEVBQXhDLEVBQTRDQyxFQUE1QyxFQUFnREMsRUFBaEQsQ0FBUDtBQUNEOztBQUVELGFBQU8sS0FBS0ssaUJBQUwsQ0FBdUJKLE1BQXZCLEVBQStCTCxFQUEvQixFQUFtQ0UsRUFBbkMsRUFBdUNDLEVBQXZDLEVBQTJDQyxFQUEzQyxDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7O3NDQVNrQkMsTSxFQUFRTCxFLEVBQUlFLEUsRUFBSUMsRSxFQUFJQyxFLEVBQUk7QUFDeEMsV0FBSyxJQUFJTSxDQUFDLEdBQUdSLEVBQWIsRUFBaUJRLENBQUMsSUFBSU4sRUFBdEIsRUFBMEJNLENBQUMsRUFBM0IsRUFBK0I7QUFDN0IsYUFBSyxJQUFJQyxDQUFDLEdBQUdYLEVBQWIsRUFBaUJXLENBQUMsSUFBSVIsRUFBdEIsRUFBMEJRLENBQUMsRUFBM0IsRUFBK0I7QUFDN0JOLGdCQUFNLENBQUNPLGFBQVAsQ0FBcUJELENBQXJCLEVBQXdCRCxDQUF4QixFQUEyQixLQUFLdkIsU0FBTCxDQUFlMEIsaUJBQWYsQ0FBaUNGLENBQUMsR0FBRyxHQUFyQyxFQUEwQ0QsQ0FBQyxHQUFHLEdBQTlDLENBQTNCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPTCxNQUFQO0FBQ0Q7Ozs2Q0FFK0I7QUFBQTs7QUFBQSx3Q0FBTnBDLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUM5QixhQUFPLElBQUlVLE9BQUosQ0FBWSxVQUFBbUMsT0FBTztBQUFBLGVBQUlDLFVBQVUsQ0FBQztBQUFBLGlCQUFNRCxPQUFPLENBQUMsTUFBSSxDQUFDTCxpQkFBTCxhQUFJLEVBQXNCeEMsSUFBdEIsQ0FBTCxFQUFrQyxDQUFsQyxDQUFiO0FBQUEsU0FBRCxDQUFkO0FBQUEsT0FBbkIsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7c0NBSWtCO0FBQ2hCLFVBQUlxQixRQUFKOztBQUVBLFVBQUksS0FBS0EsUUFBVCxFQUFtQjtBQUNqQkEsZ0JBQVEsR0FBRyxLQUFLQSxRQUFMLENBQWMwQixLQUFkLEVBQVg7QUFDRCxPQUZELE1BRU8sSUFBSSxLQUFLekQsT0FBTCxJQUFnQixLQUFLcUMsTUFBTCxDQUFZcUIsa0JBQWhDLEVBQW9EO0FBQ3pEM0IsZ0JBQVEsR0FBRyxLQUFLTSxNQUFMLENBQVlzQixrQkFBWixDQUErQixLQUFLbkQsS0FBTCxDQUFXdUIsUUFBMUMsQ0FBWDtBQUNELE9BRk0sTUFFQTtBQUNMQSxnQkFBUSxHQUFHLEtBQUt2QixLQUFMLENBQVd1QixRQUFYLENBQW9CMEIsS0FBcEIsRUFBWDtBQUNEOztBQUVEMUIsY0FBUSxDQUFDUixLQUFULENBQWUsS0FBS2pCLGFBQXBCO0FBRUEsYUFBT3lCLFFBQVA7QUFDRDs7Ozs7O0FBR1lLLGtGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVNBLFNBQVN3QixHQUFULENBQWFSLENBQWIsRUFBZ0JELENBQWhCLEVBQW1CVSxNQUFuQixFQUEyQjtBQUN6QixTQUFPLENBQ0xBLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWVQsQ0FBWixHQUFnQlMsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZVixDQUE1QixHQUFnQ1UsTUFBTSxDQUFDLENBQUQsQ0FEakMsRUFFTEEsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZVCxDQUFaLEdBQWdCUyxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlWLENBQTVCLEdBQWdDVSxNQUFNLENBQUMsQ0FBRCxDQUZqQyxDQUFQO0FBSUQ7QUFFRDs7Ozs7Ozs7Ozs7O0lBVU1DLE07OztBQUNKOzs7O0FBSUEsa0JBQVlELE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0UsYUFBTCxHQUFxQixLQUFLQyxXQUFMLENBQWlCQyxrQkFBakIsQ0FBb0NKLE1BQXBDLENBQXJCO0FBQ0EsU0FBS0sscUJBQUwsR0FBNkIsSUFBN0I7QUFDQSxTQUFLQyw2QkFBTCxHQUFxQyxJQUFyQztBQUNBLFNBQUtULGtCQUFMLEdBQTBCLElBQTFCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7OztBQStGQTs7OytCQUdXTixDLEVBQUdELEMsRUFBRztBQUNmLGFBQU9TLEdBQUcsQ0FBQ1IsQ0FBRCxFQUFJRCxDQUFKLEVBQU8sS0FBS1UsTUFBWixDQUFWO0FBQ0Q7QUFFRDs7Ozs7O2dDQUdZVCxDLEVBQUdELEMsRUFBRztBQUNoQixhQUFPLENBQVA7QUFDRDtBQUVEOzs7Ozs7MENBR3NCQyxDLEVBQUdELEMsRUFBRztBQUMxQixhQUFPLENBQ0wsS0FBS1UsTUFBTCxDQUFZLENBQVosQ0FESyxFQUVMLEtBQUtBLE1BQUwsQ0FBWSxDQUFaLENBRkssRUFHTCxLQUFLQSxNQUFMLENBQVksQ0FBWixDQUhLLEVBSUwsS0FBS0EsTUFBTCxDQUFZLENBQVosQ0FKSyxDQUFQO0FBTUQ7QUFFRDs7Ozs7Ozs7OzsrQkFPV1QsQyxFQUFHRCxDLEVBQUc7QUFDZixhQUFPUyxHQUFHLENBQUNSLENBQUQsRUFBSUQsQ0FBSixFQUFPLEtBQUtZLGFBQVosQ0FBVjtBQUNEOzs7c0NBMUh3QkssYSxFQUFlO0FBQ3RDLFVBQUlBLGFBQWEsQ0FBQ0MsTUFBZCxHQUF1QixDQUF2QixLQUE2QixDQUFqQyxFQUFvQztBQUNsQyxjQUFNLElBQUlDLDJFQUFKLDBHQUE2SEYsYUFBYSxDQUFDQyxNQUEzSSx1QkFBTjtBQUNEO0FBRUQ7Ozs7O0FBR0EsVUFBSUQsYUFBYSxDQUFDQyxNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBQzlCO0FBQ0EsZUFBTyxJQUFJUCxNQUFKLENBQVcsQ0FDaEIsQ0FEZ0IsRUFDYixDQURhLEVBQ1ZNLGFBQWEsQ0FBQyxDQUFELENBQWIsR0FBbUJBLGFBQWEsQ0FBQyxDQUFELENBRHRCLEVBRWhCLENBRmdCLEVBRWIsQ0FGYSxFQUVWQSxhQUFhLENBQUMsQ0FBRCxDQUFiLEdBQW1CQSxhQUFhLENBQUMsQ0FBRCxDQUZ0QixDQUFYLENBQVA7QUFJRCxPQU5ELE1BTU87QUFDTDtBQUNBO0FBQ0EsWUFBTUcsWUFBWSxHQUFHLElBQUlDLG9GQUFKLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQXJCOztBQUVBLGFBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0wsYUFBYSxDQUFDQyxNQUFsQyxFQUEwQ0ksQ0FBQyxJQUFJLENBQS9DLEVBQWtEO0FBQUEscUNBQzdCTCxhQUFhLENBQUNqQyxLQUFkLENBQW9Cc0MsQ0FBcEIsRUFBdUJBLENBQUMsR0FBRyxDQUEzQixDQUQ2QjtBQUFBO0FBQUEsY0FDM0NDLENBRDJDO0FBQUEsY0FDeENDLENBRHdDO0FBQUEsY0FDckN2QixDQURxQztBQUFBLGNBQ2xDRCxDQURrQzs7QUFHaERvQixzQkFBWSxDQUFDSyxRQUFiLENBQXNCLENBQ3BCeEIsQ0FEb0IsRUFDakJELENBRGlCLEVBQ2QsQ0FEYyxDQUF0QixFQUVHLENBQUN1QixDQUFELEVBQUlDLENBQUosQ0FGSDtBQUdEOztBQUVELFlBQUlQLGFBQWEsQ0FBQ0MsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUM5Qjs7Ozs7QUFLQUUsc0JBQVksQ0FBQ0ssUUFBYixDQUNFLENBQ0VSLGFBQWEsQ0FBQyxDQUFELENBQWIsSUFBb0JBLGFBQWEsQ0FBQyxDQUFELENBQWIsR0FBbUJBLGFBQWEsQ0FBQyxDQUFELENBQXBELENBREYsRUFFRUEsYUFBYSxDQUFDLENBQUQsQ0FBYixJQUFvQkEsYUFBYSxDQUFDLENBQUQsQ0FBYixHQUFtQkEsYUFBYSxDQUFDLENBQUQsQ0FBcEQsQ0FGRixFQUdFLENBSEYsQ0FERixFQU1FLENBQ0VBLGFBQWEsQ0FBQyxDQUFELENBQWIsR0FBbUJBLGFBQWEsQ0FBQyxDQUFELENBQWhDLEdBQXNDQSxhQUFhLENBQUMsQ0FBRCxDQURyRCxFQUVFQSxhQUFhLENBQUMsQ0FBRCxDQUFiLEdBQW1CQSxhQUFhLENBQUMsQ0FBRCxDQUFoQyxHQUFzQ0EsYUFBYSxDQUFDLENBQUQsQ0FGckQsQ0FORjtBQVdEOztBQUVELFlBQU1TLE9BQU8sR0FBR04sWUFBWSxDQUFDTyxLQUFiLEdBQXFCQyxVQUFyQixFQUFoQjtBQUVBLGVBQU8sSUFBSWpCLE1BQUosQ0FBV2UsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRyxNQUFYLENBQWtCSCxPQUFPLENBQUMsQ0FBRCxDQUF6QixDQUFYLENBQVA7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7Ozs7c0NBT3lCaEIsTSxFQUFRO0FBQy9CO0FBRUEsYUFBTyxJQUFJQyxNQUFKLENBQVcsS0FBS0csa0JBQUwsQ0FBd0JKLE1BQXhCLENBQVgsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7dUNBTzBCQSxNLEVBQVE7QUFDaEM7QUFFQSxVQUFNb0IsV0FBVyxHQUFHQyx3RUFBcUIsQ0FBQ3JCLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWUEsTUFBTSxDQUFDLENBQUQsQ0FBbEIsR0FBd0JBLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWUEsTUFBTSxDQUFDLENBQUQsQ0FBM0MsQ0FBekM7QUFFQSxhQUFPLENBQ0xvQixXQUFXLEdBQUdwQixNQUFNLENBQUMsQ0FBRCxDQURmLEVBRUxvQixXQUFXLEdBQUksQ0FBQ3BCLE1BQU0sQ0FBQyxDQUFELENBRmpCLEVBR0xvQixXQUFXLElBQUlwQixNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlBLE1BQU0sQ0FBQyxDQUFELENBQWxCLEdBQXdCQSxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlBLE1BQU0sQ0FBQyxDQUFELENBQTlDLENBSE4sRUFJTG9CLFdBQVcsR0FBSSxDQUFDcEIsTUFBTSxDQUFDLENBQUQsQ0FKakIsRUFLTG9CLFdBQVcsR0FBR3BCLE1BQU0sQ0FBQyxDQUFELENBTGYsRUFNTG9CLFdBQVcsSUFBSXBCLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWUEsTUFBTSxDQUFDLENBQUQsQ0FBbEIsR0FBd0JBLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWUEsTUFBTSxDQUFDLENBQUQsQ0FBOUMsQ0FOTixDQUFQO0FBUUQ7Ozs7OztBQXdDSG5DLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjbUMsTUFBTSxDQUFDcUIsU0FBckIsRUFBZ0NDLG9GQUFoQztBQUVldEIscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25MQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZU11QixHOzs7QUFDSjs7Ozs7Ozs7O0FBU0EsZUFBWXRELFFBQVosRUFBc0J1RCxFQUF0QixFQUEwQkMsRUFBMUIsRUFBOEJDLEVBQTlCLEVBQWtDQyxFQUFsQyxFQUFzQ0MsRUFBdEMsRUFBMEM7QUFBQTs7QUFDeEMsU0FBSzNELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS3VELEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUVBOzs7Ozs7QUFLQSxTQUFLQyxZQUFMLEdBQW9CN0YsZ0RBQUssR0FBRyxLQUFLaUMsUUFBTCxDQUFjNkQsS0FBZCxFQUFSLEdBQWdDLEtBQUtMLEVBQXpEO0FBQ0EsU0FBS00sY0FBTCxHQUFzQixLQUFLOUQsUUFBTCxDQUFjK0QsTUFBZCxLQUF5QixLQUFLTCxFQUFwRDtBQUVBLFNBQUt2QixxQkFBTCxHQUE2QixJQUE3QjtBQUNBLFNBQUtDLDZCQUFMLEdBQXFDLEtBQXJDO0FBQ0EsU0FBS1Qsa0JBQUwsR0FBMEIsSUFBMUI7QUFDQSxTQUFLN0MsWUFBTCxHQUFvQixJQUFwQjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwRUE7OzsrQkFHV3VDLEMsRUFBR0QsQyxFQUFHO0FBQUEsd0JBQ0YsS0FBSzRDLEtBQUwsQ0FBVzNDLENBQVgsRUFBY0QsQ0FBZCxDQURFO0FBQUE7QUFBQSxVQUNWdUIsQ0FEVTtBQUFBLFVBQ1BDLENBRE8sb0JBR2Y7OztBQUNBRCxPQUFDLEdBQUdBLENBQUMsR0FBRyxLQUFLaUIsWUFBVCxHQUF3QixLQUFLRCxFQUE3QixHQUFrQyxLQUFLM0QsUUFBTCxDQUFjVSxFQUFoRCxHQUFxRCxHQUF6RDtBQUNBa0MsT0FBQyxHQUFHLENBQUMsS0FBS2EsRUFBTCxHQUFVYixDQUFYLElBQWdCLEtBQUtrQixjQUFyQixHQUFzQyxLQUFLOUQsUUFBTCxDQUFjWSxFQUF4RCxDQUxlLENBT2Y7O0FBRUEsYUFBTyxDQUFDK0IsQ0FBRCxFQUFJQyxDQUFKLENBQVA7QUFDRDtBQUVEOzs7Ozs7Z0NBR1l2QixDLEVBQUdELEMsRUFBRztBQUNoQixhQUFPLENBQVA7QUFDRDtBQUVEOzs7Ozs7MENBR3NCQyxDLEVBQUdELEMsRUFBRztBQUFBLHlCQUNiLEtBQUs0QyxLQUFMLENBQVczQyxDQUFYLEVBQWNELENBQWQsQ0FEYTtBQUFBO0FBQUEsVUFDckJ1QixDQURxQjtBQUFBLFVBQ2xCQyxDQURrQjtBQUcxQjs7Ozs7Ozs7QUFNQSxVQUFJQSxDQUFDLEdBQUdsRixrREFBUixFQUFpQjtBQUNmLGVBQU8sQ0FBQyxLQUFLa0csWUFBTCxJQUFxQjdGLGdEQUFLLEdBQUc2RSxDQUE3QixDQUFELEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLEVBQXdDLEtBQUtrQixjQUE3QyxDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxDQUFDLEtBQUs5RCxRQUFMLENBQWM2RCxLQUFkLEtBQXdCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLEtBQUtDLGNBQXZDLENBQVA7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7Ozs7O3VDQVFtQjlELFEsRUFBVTtBQUMzQjtBQUNBLFVBQUlpRSxDQUFDLEdBQUcsS0FBS1YsRUFBTCxHQUFVLEtBQUtDLEVBQUwsR0FBVSxDQUE1QjtBQUFBLFVBQ0VVLEVBQUUsR0FBR3JHLElBQUksQ0FBQ3NHLEdBQUwsQ0FBU0YsQ0FBVCxDQURQO0FBQUEsVUFFRUcsRUFBRSxHQUFHdkcsSUFBSSxDQUFDd0csR0FBTCxDQUFTSixDQUFULENBRlA7QUFBQSxVQUdFNUMsQ0FBQyxHQUFHLEtBQUtvQyxFQUFMLEdBQVVTLEVBSGhCO0FBQUEsVUFJRTlDLENBQUMsR0FBRyxLQUFLcUMsRUFBTCxHQUFVVyxFQUpoQjtBQUFBLFVBS0VFLEVBQUUsR0FBRyxJQUFJQyxpREFBSixDQUFhbEQsQ0FBYixFQUFnQkQsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCRCxDQUF0QixDQUxQO0FBT0FDLE9BQUMsR0FBRyxDQUFDLEtBQUtvQyxFQUFMLEdBQVUsS0FBS0MsRUFBaEIsSUFBc0JRLEVBQTFCO0FBQ0E5QyxPQUFDLEdBQUcsQ0FBQyxLQUFLcUMsRUFBTCxHQUFVLEtBQUtDLEVBQWhCLElBQXNCVSxFQUExQjtBQUNBRSxRQUFFLENBQUNFLE1BQUgsQ0FBVW5ELENBQVYsRUFBYUQsQ0FBYjtBQUVBNkMsT0FBQyxHQUFHLEtBQUtWLEVBQUwsR0FBVSxLQUFLQyxFQUFMLEdBQVUsQ0FBeEI7QUFDQVUsUUFBRSxHQUFHckcsSUFBSSxDQUFDc0csR0FBTCxDQUFTRixDQUFULENBQUw7QUFDQUcsUUFBRSxHQUFHdkcsSUFBSSxDQUFDd0csR0FBTCxDQUFTSixDQUFULENBQUw7QUFDQTVDLE9BQUMsR0FBRyxLQUFLb0MsRUFBTCxHQUFVUyxFQUFkO0FBQ0E5QyxPQUFDLEdBQUcsS0FBS3FDLEVBQUwsR0FBVVcsRUFBZDtBQUNBRSxRQUFFLENBQUNFLE1BQUgsQ0FBVW5ELENBQVYsRUFBYUQsQ0FBYjtBQUVBQyxPQUFDLEdBQUcsQ0FBQyxLQUFLb0MsRUFBTCxHQUFVLEtBQUtDLEVBQWhCLElBQXNCUSxFQUExQjtBQUNBOUMsT0FBQyxHQUFHLENBQUMsS0FBS3FDLEVBQUwsR0FBVSxLQUFLQyxFQUFoQixJQUFzQlUsRUFBMUI7QUFDQUUsUUFBRSxDQUFDRSxNQUFILENBQVVuRCxDQUFWLEVBQWFELENBQWIsRUF0QjJCLENBd0IzQjs7QUFDQSxXQUNFNkMsQ0FBQyxHQUFHcEcsSUFBSSxDQUFDNEcsSUFBTCxDQUFVLENBQUMsS0FBS2xCLEVBQUwsR0FBVSxLQUFLQyxFQUFMLEdBQVUsQ0FBckIsSUFBMEI1RixnREFBcEMsSUFBNkNBLGdEQURuRCxFQUVFcUcsQ0FBQyxHQUFHLEtBQUtWLEVBQUwsR0FBVSxLQUFLQyxFQUFMLEdBQVUsQ0FGMUIsRUFHRVMsQ0FBQyxJQUFJckcsZ0RBSFAsRUFJRTtBQUNBc0csVUFBRSxHQUFHckcsSUFBSSxDQUFDc0csR0FBTCxDQUFTRixDQUFULENBQUw7QUFDQUcsVUFBRSxHQUFHdkcsSUFBSSxDQUFDd0csR0FBTCxDQUFTSixDQUFULENBQUw7QUFDQTVDLFNBQUMsR0FBRyxLQUFLb0MsRUFBTCxHQUFVUyxFQUFkO0FBQ0E5QyxTQUFDLEdBQUcsS0FBS3FDLEVBQUwsR0FBVVcsRUFBZDtBQUNBRSxVQUFFLENBQUNFLE1BQUgsQ0FBVW5ELENBQVYsRUFBYUQsQ0FBYjtBQUNEOztBQUVEa0QsUUFBRSxDQUFDSSxTQUFIO0FBRUEsYUFBT0osRUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OzswQkFNTWpELEMsRUFBR0QsQyxFQUFHO0FBQ1YsVUFBSXVCLENBQUosRUFBT0MsQ0FBUCxDQURVLENBR1Y7O0FBQ0FELE9BQUMsR0FBRyxDQUFDOUUsSUFBSSxDQUFDOEcsS0FBTCxDQUFXdkQsQ0FBWCxFQUFjQyxDQUFkLElBQW1CLEtBQUtrQyxFQUF6QixJQUErQnhGLGdEQUFuQztBQUNBNEUsT0FBQyxJQUFJOUUsSUFBSSxDQUFDK0csS0FBTCxDQUFXakMsQ0FBWCxDQUFMO0FBQ0FDLE9BQUMsR0FBRy9FLElBQUksQ0FBQ2dILEtBQUwsQ0FBV3hELENBQVgsRUFBY0QsQ0FBZCxDQUFKO0FBRUEsYUFBTyxDQUFDdUIsQ0FBRCxFQUFJQyxDQUFKLENBQVA7QUFDRDs7O2tDQXZKb0I1QyxRLEVBQVVyQixJLEVBQU07QUFDbkMsVUFBSUEsSUFBSSxDQUFDMkQsTUFBTCxJQUFlLENBQWYsSUFBb0IzRCxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVqQixrREFBbEMsRUFBMkM7QUFDekMsY0FBTSxJQUFJb0gsMERBQUosQ0FBb0IsaUJBQXBCLENBQU47QUFDRDs7QUFFRCxVQUFJbkcsSUFBSSxDQUFDMkQsTUFBTCxJQUFlLENBQWYsSUFBb0IzRCxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVqQixrREFBbEMsRUFBMkM7QUFDekMsY0FBTSxJQUFJb0gsMERBQUosQ0FBb0Isd0JBQXBCLENBQU47QUFDRDs7QUFFRCxVQUFJdkIsRUFBSixFQUFRQyxFQUFSLEVBQVlDLEVBQVosRUFBZ0JDLEVBQWhCLEVBQW9CQyxFQUFwQjtBQUVBSixRQUFFLEdBQUcsQ0FBQzNGLGdEQUFOLENBWG1DLENBV3RCOztBQUViLFVBQUllLElBQUksQ0FBQzJELE1BQUwsSUFBZSxDQUFuQixFQUFzQjtBQUNwQmtCLFVBQUUsR0FBR3VCLHFEQUFPLENBQUNwRyxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQVo7QUFDRCxPQUZELE1BRU87QUFDTDZFLFVBQUUsR0FBRzVGLGdEQUFMLENBREssQ0FDTztBQUNiOztBQUVELFVBQUllLElBQUksQ0FBQzJELE1BQUwsSUFBZSxDQUFuQixFQUFzQjtBQUNwQmlCLFVBQUUsSUFBSXdCLHFEQUFPLENBQUNwRyxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQWI7QUFDRDs7QUFFRDRFLFFBQUUsSUFBSXhGLGdEQUFOLENBdkJtQyxDQXVCdEI7O0FBQ2J3RixRQUFFLElBQUkxRixJQUFJLENBQUMrRyxLQUFMLENBQVdyQixFQUFYLENBQU47QUFDQUEsUUFBRSxJQUFJeEYsZ0RBQU4sQ0F6Qm1DLENBeUJ0Qjs7QUFFYjJGLFFBQUUsR0FBRzFELFFBQVEsQ0FBQytELE1BQVQsS0FBb0IsQ0FBekI7QUFDQU4sUUFBRSxHQUFHekQsUUFBUSxDQUFDNkQsS0FBVCxLQUFtQkwsRUFBbkIsR0FBd0JFLEVBQUUsR0FBRyxDQUFsQzs7QUFFQSxVQUFJL0UsSUFBSSxDQUFDMkQsTUFBTCxJQUFlLENBQW5CLEVBQXNCO0FBQ3BCLFlBQUkzRCxJQUFJLENBQUMyRCxNQUFMLElBQWUsQ0FBbkIsRUFBc0I7QUFDcEJvQixZQUFFLEdBQUcvRSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVBLElBQUksQ0FBQyxDQUFELENBQW5CO0FBQ0QsU0FGRCxNQUVPO0FBQ0wrRSxZQUFFLElBQUkvRSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVU4RSxFQUFoQjtBQUNEOztBQUVEQSxVQUFFLEdBQUc5RSxJQUFJLENBQUMsQ0FBRCxDQUFUO0FBQ0Q7O0FBRURnRixRQUFFLEdBQUcsQ0FBQzNELFFBQVEsQ0FBQzZELEtBQVQsS0FBbUIsQ0FBcEIsSUFBeUIsQ0FBOUI7QUFFQSxhQUFPLElBQUlQLEdBQUosQ0FBUXRELFFBQVIsRUFBa0J1RCxFQUFsQixFQUFzQkMsRUFBdEIsRUFBMEJDLEVBQTFCLEVBQThCQyxFQUE5QixFQUFrQ0MsRUFBbEMsQ0FBUDtBQUNEOzs7Ozs7QUErR1lMLGtFQUFmLEU7Ozs7Ozs7Ozs7OztBQzNPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQU1BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFVQSxTQUFTekIsR0FBVCxDQUFhUixDQUFiLEVBQWdCRCxDQUFoQixFQUFtQlUsTUFBbkIsRUFBMkI7QUFDekIsTUFBSWtELENBQUMsR0FBR2xELE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWVQsQ0FBWixHQUFnQlMsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZVixDQUE1QixHQUFnQ1UsTUFBTSxDQUFDLENBQUQsQ0FBOUM7QUFBQSxNQUNFbUQsQ0FBQyxHQUFHbkQsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZVCxDQUFaLEdBQWdCUyxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlWLENBQTVCLEdBQWdDVSxNQUFNLENBQUMsQ0FBRCxDQUQ1QztBQUFBLE1BRUVvRCxDQUFDLEdBQUdwRCxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlULENBQVosR0FBZ0JTLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWVYsQ0FBNUIsR0FBZ0MsQ0FGdEM7QUFJQSxTQUFPLENBQUM0RCxDQUFDLEdBQUdFLENBQUwsRUFBUUQsQ0FBQyxHQUFHQyxDQUFaLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF5Qk1DLFc7OztBQUVKOzs7OztBQUtBLHVCQUFZQyxhQUFaLEVBQTJCQyxXQUEzQixFQUF3QztBQUFBOztBQUN0QyxTQUFLdkQsTUFBTCxHQUFjc0QsYUFBZDtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS3JELGFBQUwsR0FBcUIsS0FBS0MsV0FBTCxDQUFpQnFELHVCQUFqQixDQUF5Q0YsYUFBekMsQ0FBckI7QUFDQSxTQUFLakQscUJBQUwsR0FBNkIsSUFBN0I7QUFDQSxTQUFLQyw2QkFBTCxHQUFxQyxLQUFyQztBQUNBLFNBQUtULGtCQUFMLEdBQTBCLElBQTFCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7OztBQXVGQTs7OytCQUdXTixDLEVBQUdELEMsRUFBRztBQUNmLGFBQU9TLEdBQUcsQ0FBQ1IsQ0FBRCxFQUFJRCxDQUFKLEVBQU8sS0FBS1UsTUFBWixDQUFWO0FBQ0Q7QUFFRDs7Ozs7O2dDQUdZVCxDLEVBQUdELEMsRUFBR0gsTyxFQUFTO0FBQ3pCLFVBQU1pRSxDQUFDLEdBQUcsS0FBS3BELE1BQUwsQ0FBWSxDQUFaLElBQWlCVCxDQUFqQixHQUFxQixLQUFLUyxNQUFMLENBQVksQ0FBWixJQUFpQlYsQ0FBdEMsR0FBMEMsQ0FBcEQ7QUFDQSxVQUFJbUUsUUFBUSxHQUFHTCxDQUFDLEdBQUcsS0FBS0csV0FBVCxHQUF1QixDQUF2QixHQUEyQixDQUEzQixHQUErQixDQUE5QztBQUNBLFVBQU1HLElBQUksR0FBRzNILElBQUksQ0FBQzRILEdBQUwsQ0FBU1AsQ0FBVCxJQUFjLENBQTNCO0FBQ0EsVUFBTVEsS0FBSyxHQUFHN0gsSUFBSSxDQUFDNEgsR0FBTCxDQUFTLEtBQUszRCxNQUFMLENBQVksQ0FBWixDQUFULENBQWQ7QUFDQSxVQUFNNkQsS0FBSyxHQUFHOUgsSUFBSSxDQUFDNEgsR0FBTCxDQUFTLEtBQUszRCxNQUFMLENBQVksQ0FBWixDQUFULENBQWQ7O0FBRUEsVUFBSTRELEtBQUssR0FBR0MsS0FBWixFQUFtQjtBQUNqQixZQUFJSCxJQUFJLEdBQUdFLEtBQVgsRUFBa0I7QUFDaEJILGtCQUFRLEdBQUcsTUFBTSxLQUFLRixXQUFMLEdBQW1CSCxDQUFuQixJQUF3QixLQUFLcEQsTUFBTCxDQUFZLENBQVosSUFBaUJiLE9BQXpDLENBQWpCO0FBQ0Q7QUFDRixPQUpELE1BSU8sSUFBSXVFLElBQUksR0FBR0csS0FBWCxFQUFrQjtBQUN2QkosZ0JBQVEsR0FBRyxNQUFNLEtBQUtGLFdBQUwsR0FBbUJILENBQW5CLElBQXdCLEtBQUtwRCxNQUFMLENBQVksQ0FBWixJQUFpQmIsT0FBekMsQ0FBakI7QUFDRDs7QUFFRCxhQUFPc0UsUUFBUDtBQUNEO0FBRUQ7Ozs7OzswQ0FHc0JsRSxDLEVBQUdELEMsRUFBRztBQUMxQixVQUFNNEQsQ0FBQyxHQUFHLEtBQUtsRCxNQUFMLENBQVksQ0FBWixJQUFpQlQsQ0FBakIsR0FBcUIsS0FBS1MsTUFBTCxDQUFZLENBQVosSUFBaUJWLENBQXRDLEdBQTBDLEtBQUtVLE1BQUwsQ0FBWSxDQUFaLENBQXBEO0FBQUEsVUFDRW1ELENBQUMsR0FBRyxLQUFLbkQsTUFBTCxDQUFZLENBQVosSUFBaUJULENBQWpCLEdBQXFCLEtBQUtTLE1BQUwsQ0FBWSxDQUFaLElBQWlCVixDQUF0QyxHQUEwQyxLQUFLVSxNQUFMLENBQVksQ0FBWixDQURoRDtBQUFBLFVBRUVvRCxDQUFDLEdBQUcsS0FBS3BELE1BQUwsQ0FBWSxDQUFaLElBQWlCVCxDQUFqQixHQUFxQixLQUFLUyxNQUFMLENBQVksQ0FBWixJQUFpQlYsQ0FBdEMsR0FBMEMsQ0FGaEQ7QUFBQSxVQUdFNUIsS0FBSyxHQUFHM0IsSUFBSSxDQUFDK0gsR0FBTCxDQUFTLElBQUlWLENBQWIsRUFBZ0IsQ0FBaEIsQ0FIVjtBQUtBLGFBQU8sQ0FDTCxDQUFDQSxDQUFDLEdBQUcsS0FBS3BELE1BQUwsQ0FBWSxDQUFaLENBQUosR0FBcUJrRCxDQUFDLEdBQUcsS0FBS2xELE1BQUwsQ0FBWSxDQUFaLENBQTFCLElBQTRDdEMsS0FEdkMsRUFDOEM7QUFDbkQsT0FBQzBGLENBQUMsR0FBRyxLQUFLcEQsTUFBTCxDQUFZLENBQVosQ0FBSixHQUFxQmtELENBQUMsR0FBRyxLQUFLbEQsTUFBTCxDQUFZLENBQVosQ0FBMUIsSUFBNEN0QyxLQUZ2QyxFQUU4QztBQUNuRCxPQUFDMEYsQ0FBQyxHQUFHLEtBQUtwRCxNQUFMLENBQVksQ0FBWixDQUFKLEdBQXFCbUQsQ0FBQyxHQUFHLEtBQUtuRCxNQUFMLENBQVksQ0FBWixDQUExQixJQUE0Q3RDLEtBSHZDLEVBRzhDO0FBQ25ELE9BQUMwRixDQUFDLEdBQUcsS0FBS3BELE1BQUwsQ0FBWSxDQUFaLENBQUosR0FBcUJtRCxDQUFDLEdBQUcsS0FBS25ELE1BQUwsQ0FBWSxDQUFaLENBQTFCLElBQTRDdEMsS0FKdkMsQ0FJNkM7QUFKN0MsT0FBUDtBQU1EO0FBRUQ7Ozs7Ozs7Ozs7K0JBT1dtRCxDLEVBQUdDLEMsRUFBRztBQUNmLGFBQU9mLEdBQUcsQ0FBQ2MsQ0FBRCxFQUFJQyxDQUFKLEVBQU8sS0FBS1osYUFBWixDQUFWO0FBQ0Q7OztzQ0FySXdCSyxhLEVBQWU7QUFDdEMsVUFBSUEsYUFBYSxDQUFDQyxNQUFkLEdBQXVCLEVBQXZCLElBQTZCRCxhQUFhLENBQUNDLE1BQWQsR0FBdUIsQ0FBdkIsS0FBNkIsQ0FBOUQsRUFBaUU7QUFDL0QsY0FBTSxJQUFJQywyRUFBSiw0R0FBK0hGLGFBQWEsQ0FBQ0MsTUFBN0ksdUJBQU47QUFDRDs7QUFFRCxVQUFNRSxZQUFZLEdBQUcsSUFBSUMsb0ZBQUosQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBckI7O0FBRUEsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxhQUFhLENBQUNDLE1BQWxDLEVBQTBDSSxDQUFDLElBQUksQ0FBL0MsRUFBa0Q7QUFBQSxtQ0FDN0JMLGFBQWEsQ0FBQ2pDLEtBQWQsQ0FBb0JzQyxDQUFwQixFQUF1QkEsQ0FBQyxHQUFHLENBQTNCLENBRDZCO0FBQUE7QUFBQSxZQUMzQ0MsQ0FEMkM7QUFBQSxZQUN4Q0MsQ0FEd0M7QUFBQSxZQUNyQ3ZCLENBRHFDO0FBQUEsWUFDbENELENBRGtDOztBQUdoRG9CLG9CQUFZLENBQUNLLFFBQWIsQ0FBc0IsQ0FDcEJ4QixDQURvQixFQUNqQkQsQ0FEaUIsRUFDZCxDQURjLEVBRXBCLENBRm9CLEVBRWpCLENBRmlCLEVBRWQsQ0FGYyxFQUdwQixDQUFDQyxDQUFELEdBQUtzQixDQUhlLEVBR1osQ0FBQ3ZCLENBQUQsR0FBS3VCLENBSE8sQ0FBdEIsRUFJRyxDQUFDQSxDQUFELENBSkgsRUFLR0UsUUFMSCxDQUtZLENBQ1IsQ0FEUSxFQUNMLENBREssRUFDRixDQURFLEVBRVJ4QixDQUZRLEVBRUxELENBRkssRUFFRixDQUZFLEVBR1IsQ0FBQ0MsQ0FBRCxHQUFLdUIsQ0FIRyxFQUdBLENBQUN4QixDQUFELEdBQUt3QixDQUhMLENBTFosRUFTSyxDQUFDQSxDQUFELENBVEw7QUFVRDs7QUFFRCxVQUFNZCxNQUFNLEdBQUdVLFlBQVksQ0FBQ08sS0FBYixHQUFxQkMsVUFBckIsR0FBa0MsQ0FBbEMsQ0FBZjtBQUVBOzs7Ozs7O0FBTUEsVUFBTXFDLFdBQVcsR0FBR3ZELE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWU8sYUFBYSxDQUFDLENBQUQsQ0FBekIsR0FBK0JQLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWU8sYUFBYSxDQUFDLENBQUQsQ0FBeEQsR0FBOEQsQ0FBOUQsR0FBa0UsQ0FBbEUsR0FBc0UsQ0FBQyxDQUF2RSxHQUEyRSxDQUEvRjtBQUVBLGFBQU8sSUFBSThDLFdBQUosQ0FBZ0JyRCxNQUFoQixFQUF3QnVELFdBQXhCLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7O3NDQU95QnZELE0sRUFBUTtBQUMvQjtBQUNBLFVBQU0rRCxPQUFPLEdBQUcsS0FBS1AsdUJBQUwsQ0FBNkJ4RCxNQUE3QixDQUFoQjtBQUVBOzs7Ozs7OztBQU9BLFVBQU11RCxXQUFXLEdBQUdRLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYS9ELE1BQU0sQ0FBQyxDQUFELENBQW5CLEdBQXlCK0QsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhL0QsTUFBTSxDQUFDLENBQUQsQ0FBNUMsR0FBa0QsQ0FBbEQsR0FBc0QsQ0FBdEQsR0FBMEQsQ0FBQyxDQUEzRCxHQUErRCxDQUFuRjtBQUNBLGFBQU8sSUFBSXFELFdBQUosQ0FBZ0JVLE9BQWhCLEVBQXlCUixXQUF6QixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs0Q0FPK0J2RCxNLEVBQVE7QUFDckMsVUFBTW9CLFdBQVcsR0FBR0Msd0VBQXFCLENBQUNyQixNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlBLE1BQU0sQ0FBQyxDQUFELENBQWxCLEdBQXdCQSxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlBLE1BQU0sQ0FBQyxDQUFELENBQTNDLENBQXpDO0FBRUEsYUFBTyxDQUNMb0IsV0FBVyxJQUFJcEIsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZQSxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlBLE1BQU0sQ0FBQyxDQUFELENBQWxDLENBRE4sRUFFTG9CLFdBQVcsSUFBSXBCLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWUEsTUFBTSxDQUFDLENBQUQsQ0FBbEIsR0FBd0JBLE1BQU0sQ0FBQyxDQUFELENBQWxDLENBRk4sRUFHTG9CLFdBQVcsSUFBSXBCLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWUEsTUFBTSxDQUFDLENBQUQsQ0FBbEIsR0FBd0JBLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWUEsTUFBTSxDQUFDLENBQUQsQ0FBOUMsQ0FITixFQUlMb0IsV0FBVyxJQUFJcEIsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZQSxNQUFNLENBQUMsQ0FBRCxDQUFsQixHQUF3QkEsTUFBTSxDQUFDLENBQUQsQ0FBbEMsQ0FKTixFQUtMb0IsV0FBVyxJQUFJcEIsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZQSxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlBLE1BQU0sQ0FBQyxDQUFELENBQWxDLENBTE4sRUFNTG9CLFdBQVcsSUFBSXBCLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWUEsTUFBTSxDQUFDLENBQUQsQ0FBbEIsR0FBd0JBLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWUEsTUFBTSxDQUFDLENBQUQsQ0FBOUMsQ0FOTixFQU9Mb0IsV0FBVyxJQUFJcEIsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZQSxNQUFNLENBQUMsQ0FBRCxDQUFsQixHQUF3QkEsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZQSxNQUFNLENBQUMsQ0FBRCxDQUE5QyxDQVBOLEVBUUxvQixXQUFXLElBQUlwQixNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlBLE1BQU0sQ0FBQyxDQUFELENBQWxCLEdBQXdCQSxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlBLE1BQU0sQ0FBQyxDQUFELENBQTlDLENBUk4sQ0FBUDtBQVVEOzs7Ozs7QUEyREhuQyxNQUFNLENBQUNDLE1BQVAsQ0FBY3VGLFdBQVcsQ0FBQy9CLFNBQTFCLEVBQXFDQyxvRkFBckM7QUFFZThCLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE5BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFPQSxTQUFTVyxxQkFBVCxDQUErQm5ILElBQS9CLEVBQXFDO0FBQ25DLFNBQU9vRCwwREFBTSxDQUFDZ0UsaUJBQVAsQ0FBeUJwSCxJQUF6QixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsU0FBU3FILGNBQVQsT0FBbUQ7QUFBQTtBQUFBLE1BQXpCQyxFQUF5QjtBQUFBLE1BQXJCQyxFQUFxQjtBQUFBLE1BQWpCQyxFQUFpQjtBQUFBLE1BQWJDLEVBQWE7QUFBQSxNQUFUQyxFQUFTO0FBQUEsTUFBTEMsRUFBSzs7QUFDakQ7QUFDQSxTQUFPdkUsMERBQU0sQ0FBQ3dFLGlCQUFQLENBQXlCLENBQUNOLEVBQUQsRUFBS0UsRUFBTCxFQUFTRSxFQUFULEVBQWFILEVBQWIsRUFBaUJFLEVBQWpCLEVBQXFCRSxFQUFyQixDQUF6QixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQVFBLFNBQVNFLDBCQUFULENBQW9DN0gsSUFBcEMsRUFBMEM7QUFDeEMsTUFBSUEsSUFBSSxDQUFDMkQsTUFBTCxHQUFjLEVBQWxCLEVBQXNCO0FBQ3BCN0MsV0FBTyxDQUFDQyxJQUFSLENBQWEsc0hBQWI7QUFDQSxXQUFPcUMsMERBQU0sQ0FBQ2dFLGlCQUFQLENBQXlCcEgsSUFBekIsQ0FBUDtBQUNEOztBQUVELFNBQU93RywrREFBVyxDQUFDWSxpQkFBWixDQUE4QnBILElBQTlCLENBQVA7QUFDRDtBQUVEOzs7Ozs7O0FBS0EsU0FBUzhILG1CQUFULENBQTZCOUgsSUFBN0IsRUFBbUM7QUFDakMsU0FBT3dHLCtEQUFXLENBQUNvQixpQkFBWixDQUE4QjVILElBQTlCLENBQVA7QUFDRDtBQUVEOzs7Ozs7OztBQU1BLFNBQVMrSCxjQUFULENBQXdCL0gsSUFBeEIsRUFBOEJGLEtBQTlCLEVBQXFDO0FBQ25DLFNBQU82RSx1REFBRyxDQUFDcUQsYUFBSixDQUFrQmxJLEtBQUssQ0FBQ3VCLFFBQXhCLEVBQWtDckIsSUFBbEMsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTUEsSUFBTWlJLFFBQVEsR0FBRztBQUNmOzs7OztBQUtBQyxRQUFNLEVBQUVmLHFCQU5POztBQU9mOzs7O0FBSUFnQixtQkFBaUIsRUFBRWQsY0FYSjs7QUFZZjs7Ozs7OztBQU9BZSxhQUFXLEVBQUVQLDBCQW5CRTs7QUFvQmY7Ozs7QUFJQVEsd0JBQXNCLEVBQUVQLG1CQXhCVDs7QUEwQmY7Ozs7QUFJQVEsS0FBRyxFQUFFUDtBQTlCVSxDQUFqQjtBQWlDQTs7Ozs7Ozs7QUFPQSxTQUFTUSwwQkFBVCxDQUFvQ0MsSUFBcEMsRUFBMENDLFFBQTFDLEVBQW9EO0FBQ2xEUixVQUFRLENBQUNPLElBQUQsQ0FBUixHQUFrQkMsUUFBbEI7QUFDRDtBQUVEOzs7Ozs7OztBQU1BLFNBQVNDLDRCQUFULENBQXNDRixJQUF0QyxFQUE0QztBQUMxQyxTQUFPUCxRQUFRLENBQUNPLElBQUQsQ0FBZjtBQUNEOztBQUVEO0FBRWVQLHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQzVJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQU1BO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUVBOzs7Ozs7O0lBTU05QixlOzs7OztBQUNKOzs7O0FBSUEsMkJBQVl3QyxPQUFaLEVBQXFCO0FBQUE7O0FBQUEsd0ZBQ2JBLE9BRGE7QUFFcEI7OztFQVAyQkMsdUQ7O0FBVWZ6Qyw4RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBRUE7Ozs7Ozs7SUFNTXZDLHNCOzs7OztBQUNKOzs7O0FBSUEsa0NBQVkrRSxPQUFaLEVBQXFCO0FBQUE7O0FBQUEsK0ZBQ2JBLE9BRGE7QUFFcEI7OztFQVBrQ0MsdUQ7O0FBVXRCaEYscUZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7OztJQU1NZ0YsYTs7Ozs7QUFFSjs7OztBQUlBLHlCQUFZRCxPQUFaLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ25CLHVGQUFNQSxPQUFOO0FBQ0EsVUFBS0gsSUFBTCxHQUFZLE1BQUtsRixXQUFMLENBQWlCa0YsSUFBN0I7O0FBRUEsUUFBSSxPQUFPSyxLQUFLLENBQUNDLGlCQUFiLEtBQW1DLFVBQXZDLEVBQW1EO0FBQ2pERCxXQUFLLENBQUNDLGlCQUFOLGdDQUE4QixNQUFLeEYsV0FBbkM7QUFDRCxLQUZELE1BRU87QUFDTCxZQUFLeUYsS0FBTCxHQUFjLElBQUlGLEtBQUosQ0FBVUYsT0FBVixDQUFELENBQXFCSSxLQUFsQztBQUNEOztBQVJrQjtBQVNwQjs7O21CQWZ5QkYsSzs7QUFrQmJELDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFFQTs7Ozs7OztJQU1NSSxnQjs7Ozs7QUFFSjs7OztBQUlBLDRCQUFZTCxPQUFaLEVBQXFCO0FBQUE7O0FBQUEseUZBQ2JBLE9BRGE7QUFFcEI7OztFQVI0QkMsdUQ7O0FBV2hCSSwrRUFBZixFOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7Ozs7OztBQUtBLFNBQVN2SixRQUFULEdBQW9CO0FBQ2xCLFNBQU8sSUFBSXdKLHNEQUFKLENBQ0xDLHdFQUFPLENBQUMsbUJBQUQsRUFBc0IsbUJBQXRCLENBREYsRUFFTEMsb0VBQUcsRUFGRSxFQUdMLENBSEssRUFJTCxrQkFKSyxFQUtMLENBTEssQ0FBUDtBQU9EO0FBRUQ7Ozs7Ozs7QUFLQSxTQUFTQyxjQUFULEdBQTBCO0FBQ3hCLFNBQU8sSUFBSUgsc0RBQUosQ0FDTEMsd0VBQU8sQ0FBQyxrQkFBRCxFQUFxQixrQkFBckIsQ0FERixFQUVMQyxvRUFBRyxFQUZFLEVBR0wsQ0FISyxFQUlMLGlCQUpLLEVBS0wsQ0FMSyxDQUFQO0FBT0Q7QUFFRDs7Ozs7Ozs7QUFNQSxJQUFNM0osYUFBYSxHQUFHO0FBQ3BCQyxVQUFRLEVBQVJBLFFBRG9CO0FBRXBCMkosZ0JBQWMsRUFBZEE7QUFGb0IsQ0FBdEIsQyxDQUtBOztBQUVlNUosNEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBOzs7O0FBSUE7Ozs7Ozs7Ozs7QUFVQSxTQUFTMkosR0FBVCxHQUFlO0FBQ2IsU0FBTyxZQUFZO0FBQ2pCLFdBQU8sQ0FBUDtBQUNELEdBRkQ7QUFHRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBLFNBQVNELE9BQVQsQ0FBaUJHLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUNyQixNQUFNQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUlGLENBQVQsSUFBYyxDQUF6QixDQURxQixDQUVyQjs7QUFDQSxNQUFNRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUQsR0FBTSxLQUFLSCxDQUFYLEdBQWUsSUFBSUMsQ0FBcEIsSUFBeUIsQ0FBcEM7QUFDQSxNQUFNRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLElBQUlKLENBQVQsR0FBYSxJQUFJQyxDQUFsQixJQUF1QixDQUFsQztBQUNBLE1BQU1JLEVBQUUsR0FBRyxDQUFDLElBQUlMLENBQUosR0FBUSxLQUFLQyxDQUFkLElBQW1CLENBQTlCO0FBQ0EsTUFBTUssRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFELEdBQU1OLENBQU4sR0FBVSxLQUFLQyxDQUFoQixJQUFxQixDQUFoQztBQUNBLE1BQU1NLEVBQUUsR0FBRyxDQUFDLElBQUlQLENBQUosR0FBUSxLQUFLQyxDQUFkLElBQW1CLENBQTlCO0FBQ0EsTUFBTU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFELEdBQUtSLENBQUwsR0FBUyxJQUFJQyxDQUFkLElBQW1CLENBQTlCO0FBRUEsU0FBTyxVQUFVNUcsQ0FBVixFQUFhO0FBQ2xCLFFBQUlBLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDVCxhQUFPNkcsRUFBRSxHQUFHN0csQ0FBQyxJQUFJQSxDQUFDLElBQUk4RyxFQUFFLEdBQUc5RyxDQUFDLEdBQUcrRyxFQUFiLENBQUwsQ0FBYjtBQUNELEtBRkQsTUFFTyxJQUFJL0csQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNoQixhQUFPZ0gsRUFBRSxHQUFHaEgsQ0FBQyxJQUFJaUgsRUFBRSxHQUFHakgsQ0FBQyxJQUFJa0gsRUFBRSxHQUFHbEgsQ0FBQyxHQUFHbUgsRUFBYixDQUFWLENBQWI7QUFDRCxLQUZNLE1BRUE7QUFDTCxhQUFPLENBQVA7QUFDRDtBQUNGLEdBUkQ7QUFTRDs7QUFBQSxDLENBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFFQTs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7SUFXTVosTTs7O0FBRUo7Ozs7Ozs7OztBQVNBLGtCQUFZYSxjQUFaLEVBQTRCQyxjQUE1QixFQUE0Q0MsT0FBNUMsRUFBcURuSixLQUFyRCxFQUE0RjtBQUFBLFFBQWhDb0osSUFBZ0MsdUVBQXpCLENBQXlCO0FBQUEsUUFBdEJDLGFBQXNCLHVFQUFOLElBQU07O0FBQUE7O0FBQzFGLFNBQUtKLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLbkosS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS29KLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQWEsS0FBSyxJQUFsQixHQUF5QkEsYUFBekIsR0FBeUNGLE9BQTlEO0FBQ0Q7QUFFRDs7Ozs7Ozs4QkFHVXRILEMsRUFBRztBQUNYLFVBQU15SCxLQUFLLEdBQUd6SCxDQUFDLEdBQUcsS0FBS3VILElBQXZCO0FBQ0EsVUFBTXBKLEtBQUssR0FBR3NKLEtBQUssR0FBR3BMLGtEQUFSLEdBQWtCLENBQWxCLEdBQXNCLEtBQUtxTCxNQUFMLENBQVksS0FBS3ZKLEtBQUwsR0FBYXNKLEtBQXpCLENBQXBDO0FBQ0EsYUFBT3RKLEtBQUssR0FBRyxLQUFLdEIsTUFBTCxDQUFZNEssS0FBWixDQUFmO0FBQ0Q7QUFFRDs7Ozs7OzJCQUdPekgsQyxFQUFHO0FBQ1IsYUFBTyxLQUFLb0gsY0FBTCxDQUFvQnBILENBQXBCLEVBQXVCLEtBQUtzSCxPQUE1QixFQUFxQyxLQUFLRSxhQUExQyxDQUFQO0FBQ0Q7QUFFRDs7Ozs7OzJCQUdPeEgsQyxFQUFHO0FBQ1IsYUFBTyxLQUFLcUgsY0FBTCxDQUFvQnJILENBQXBCLEVBQXVCLEtBQUtzSCxPQUE1QixFQUFxQyxLQUFLRSxhQUExQyxDQUFQO0FBQ0Q7Ozs7OztBQUdZakIscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQU1BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNvQixjQUFULENBQXdCQyxNQUF4QixFQUFnQztBQUM5QixRQUFNLElBQUl6QixLQUFKLFdBQWF5QixNQUFiLGtFQUFOO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7SUFTTUMsYTs7O0FBRUo7Ozs7QUFJQSx5QkFBWXJGLEtBQVosRUFBbUJFLE1BQW5CLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtFLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUsvRCxRQUFMLEdBQWdCLElBQUl1RSxpREFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsS0FBS1YsS0FBTCxHQUFhLENBQWhDLEVBQW1DLEtBQUtFLE1BQUwsR0FBYyxDQUFqRCxDQUFoQjtBQUNBLFNBQUtvRixlQUFMLEdBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUF2QixDQUp5QixDQUlZOztBQUNyQyxTQUFLQyxrQkFBTCxHQUEwQkMsNENBQUcsQ0FBQ0MsV0FBOUI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEdBQXBCO0FBQ0EsU0FBS0MsbUJBQUwsR0FBMkJDLHNEQUFhLENBQUNDLE9BQXpDO0FBQ0Q7QUFFRDs7Ozs7OztrQ0FHY3JJLEMsRUFBR0QsQyxFQUFHO0FBQ2xCQyxPQUFDLEdBQUd4RCxJQUFJLENBQUM4QyxLQUFMLENBQVdVLENBQUMsR0FBRyxLQUFLckIsUUFBTCxDQUFjVSxFQUE3QixDQUFKO0FBQ0FVLE9BQUMsR0FBR3ZELElBQUksQ0FBQzhDLEtBQUwsQ0FBV1MsQ0FBQyxHQUFHLEtBQUtwQixRQUFMLENBQWNZLEVBQTdCLENBQUo7O0FBRUEsVUFBSVMsQ0FBQyxJQUFJLENBQUwsSUFBVUEsQ0FBQyxHQUFHLEtBQUt3QyxLQUFuQixJQUE0QnpDLENBQUMsSUFBSSxDQUFqQyxJQUFzQ0EsQ0FBQyxHQUFHLEtBQUsyQyxNQUFuRCxFQUEyRDtBQUN6RCxlQUFPLEtBQUs0RixrQkFBTCxDQUF3QnRJLENBQXhCLEVBQTJCRCxDQUEzQixDQUFQO0FBQ0Q7O0FBRUQsYUFBTyxLQUFLd0ksb0JBQUwsQ0FBMEJ2SSxDQUExQixFQUE2QkQsQ0FBN0IsRUFBZ0MsS0FBS2dJLGtCQUFyQyxDQUFQO0FBQ0Q7QUFFRDs7Ozs7O2tDQUdjL0gsQyxFQUFHRCxDLEVBQUd5SSxLLEVBQU87QUFDekJ4SSxPQUFDLEdBQUd4RCxJQUFJLENBQUM4QyxLQUFMLENBQVdVLENBQUMsR0FBRyxLQUFLckIsUUFBTCxDQUFjVSxFQUE3QixDQUFKO0FBQ0FVLE9BQUMsR0FBR3ZELElBQUksQ0FBQzhDLEtBQUwsQ0FBV1MsQ0FBQyxHQUFHLEtBQUtwQixRQUFMLENBQWNZLEVBQTdCLENBQUo7O0FBRUEsVUFBSVMsQ0FBQyxJQUFJLENBQUwsSUFBVUEsQ0FBQyxHQUFHLEtBQUt3QyxLQUFuQixJQUE0QnpDLENBQUMsSUFBSSxDQUFqQyxJQUFzQ0EsQ0FBQyxHQUFHLEtBQUsyQyxNQUFuRCxFQUEyRDtBQUN6RCxhQUFLK0Ysa0JBQUwsQ0FBd0J6SSxDQUF4QixFQUEyQkQsQ0FBM0IsRUFBOEJ5SSxLQUE5QjtBQUVBLGVBQU8sSUFBUDtBQUNEOztBQUVELFlBQU0sSUFBSXJDLEtBQUoseUJBQTJCbkcsQ0FBM0IsZUFBaUNELENBQWpDLDhCQUFOO0FBQ0Q7QUFFRDs7Ozs7OzZCQUdTcEIsUSxFQUFVO0FBQ2pCLFVBQU0rSixLQUFLLEdBQUcsS0FBS0MsWUFBTCxDQUFrQmhLLFFBQVEsQ0FBQzZELEtBQVQsRUFBbEIsRUFBb0M3RCxRQUFRLENBQUMrRCxNQUFULEVBQXBDLENBQWQ7O0FBRUEsVUFBSWdHLEtBQUssWUFBWTFLLE9BQXJCLEVBQThCO0FBQzVCLGVBQU8wSyxLQUFLLENBQUN6SyxJQUFOLENBQVcsVUFBQXlLLEtBQUssRUFBSTtBQUN6QkEsZUFBSyxDQUFDL0osUUFBTixHQUFrQkEsUUFBbEI7QUFDQSxpQkFBTytKLEtBQVA7QUFDRCxTQUhNLENBQVA7QUFJRDs7QUFFREEsV0FBSyxDQUFDL0osUUFBTixHQUFpQkEsUUFBakI7QUFDQSxhQUFPK0osS0FBUDtBQUNEO0FBRUQ7Ozs7OzswQkFHTXZLLE0sRUFBTztBQUNYLFVBQU1RLFFBQVEsR0FBRyxLQUFLQSxRQUFMLENBQWMwQixLQUFkLEVBQWpCO0FBQ0ExQixjQUFRLENBQUNSLEtBQVQsQ0FBZUEsTUFBZjtBQUNBLFVBQU15SyxPQUFPLEdBQUcsS0FBS0MsTUFBTCxDQUFZbEssUUFBUSxDQUFDNkQsS0FBVCxFQUFaLEVBQThCN0QsUUFBUSxDQUFDK0QsTUFBVCxFQUE5QixDQUFoQjs7QUFFQSxVQUFJa0csT0FBTyxZQUFZNUssT0FBdkIsRUFBZ0M7QUFDOUIsZUFBTzRLLE9BQU8sQ0FBQzNLLElBQVIsQ0FBYSxZQUFNO0FBQ3hCMkssaUJBQU8sQ0FBQ2pLLFFBQVIsR0FBbUJBLFFBQW5CO0FBQ0EsaUJBQU9pSyxPQUFQO0FBQ0QsU0FITSxDQUFQO0FBSUQ7O0FBRURBLGFBQU8sQ0FBQ2pLLFFBQVIsR0FBbUJBLFFBQW5CO0FBQ0EsYUFBT2lLLE9BQVA7QUFDRDtBQUVEOzs7Ozs7MkJBR087QUFDTCxhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7dUNBU21CNUksQyxFQUFHRCxDLEVBQUc7QUFDdkI0SCxvQkFBYyxDQUFDLG9CQUFELENBQWQ7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7dUNBU21CM0gsQyxFQUFHRCxDLEVBQUd5SSxLLEVBQU87QUFDOUJiLG9CQUFjLENBQUMsb0JBQUQsQ0FBZDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7OztpQ0FTYW5GLEssRUFBT0UsTSxFQUFRO0FBQzFCaUYsb0JBQWMsQ0FBQyxjQUFELENBQWQ7QUFDRDtBQUVEOzs7Ozs7Ozs7c0NBTWtCO0FBQ2hCQSxvQkFBYyxDQUFDLGlCQUFELENBQWQ7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7MkJBU09uRixLLEVBQU9FLE0sRUFBUTtBQUNwQmlGLG9CQUFjLENBQUMsUUFBRCxDQUFkO0FBQ0Q7Ozs7OztBQUdIckosTUFBTSxDQUFDQyxNQUFQLENBQWNzSixhQUFhLENBQUM5RixTQUE1QixFQUF1QytHLG1FQUF2QztBQUNBeEssTUFBTSxDQUFDQyxNQUFQLENBQWNzSixhQUFhLENBQUM5RixTQUE1QixFQUF1Q2dILG1FQUF2QztBQUVlbEIsNEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5S0E7QUFFQTs7Ozs7Ozs7O0lBUU1tQixNOzs7OztBQUVKOzs7O0FBSUEsa0JBQVl0SixNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2xCLGdGQUFNQSxNQUFNLENBQUM4QyxLQUFiLEVBQW9COUMsTUFBTSxDQUFDZ0QsTUFBM0I7QUFDQSxVQUFLaEQsTUFBTCxHQUFrQkEsTUFBbEI7QUFDQSxVQUFLdUosU0FBTCxHQUFrQnZKLE1BQU0sQ0FBQ3dKLFVBQVAsQ0FBa0IsSUFBbEIsRUFBd0JDLFlBQXhCLENBQXFDLENBQXJDLEVBQXdDLENBQXhDLEVBQTJDekosTUFBTSxDQUFDOEMsS0FBbEQsRUFBeUQ5QyxNQUFNLENBQUNnRCxNQUFoRSxDQUFsQjtBQUNBLFVBQUswRyxJQUFMLEdBQWtCLE1BQUtILFNBQUwsQ0FBZUcsSUFBakM7QUFKa0I7QUFLbkI7QUFFRDs7Ozs7Ozt1Q0FHbUJwSixDLEVBQUdELEMsRUFBRztBQUN2QixVQUFNc0osTUFBTSxHQUFHLENBQUN0SixDQUFDLEdBQUcsS0FBS3lDLEtBQVQsR0FBaUJ4QyxDQUFsQixJQUF1QixDQUF0QztBQUVBLGFBQU9zSixLQUFLLENBQUN2SCxTQUFOLENBQWdCaEQsS0FBaEIsQ0FBc0J3SyxJQUF0QixDQUNMLEtBQUtILElBREEsRUFFTEMsTUFGSyxFQUdMQSxNQUFNLEdBQUcsQ0FISixDQUFQO0FBS0Q7QUFFRDs7Ozs7O3VDQUdtQnJKLEMsRUFBR0QsQyxFQUFHeUksSyxFQUFPO0FBQUE7O0FBQzlCLFVBQU1hLE1BQU0sR0FBRyxDQUFDdEosQ0FBQyxHQUFHLEtBQUt5QyxLQUFULEdBQWlCeEMsQ0FBbEIsSUFBdUIsQ0FBdEM7QUFFQXdJLFdBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxVQUFDQyxPQUFELEVBQVVwSSxDQUFWO0FBQUEsZUFBZ0IsTUFBSSxDQUFDK0gsSUFBTCxDQUFVQyxNQUFNLEdBQUdoSSxDQUFuQixJQUF3Qm9JLE9BQXhDO0FBQUEsT0FBZDtBQUNEO0FBRUQ7Ozs7OztpQ0FHYWpILEssRUFBT0UsTSxFQUFRO0FBQzFCLFVBQU1oRCxNQUFNLEdBQUdnSyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBakssWUFBTSxDQUFDOEMsS0FBUCxHQUFlQSxLQUFmO0FBQ0E5QyxZQUFNLENBQUNnRCxNQUFQLEdBQWdCQSxNQUFoQjtBQUVBLGFBQU8sSUFBSSxLQUFLOUIsV0FBVCxDQUFxQmxCLE1BQXJCLENBQVA7QUFDRDtBQUVEOzs7Ozs7MkJBR087QUFDTCxXQUFLQSxNQUFMLENBQVl3SixVQUFaLENBQXVCLElBQXZCLEVBQTZCVSxZQUE3QixDQUEwQyxLQUFLWCxTQUEvQyxFQUEwRCxDQUExRCxFQUE2RCxDQUE3RDtBQUVBLGFBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7OztzQ0FHa0I7QUFDaEIsVUFBTXZKLE1BQU0sR0FBR2dLLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0FqSyxZQUFNLENBQUM4QyxLQUFQLEdBQWUsQ0FBZjtBQUNBOUMsWUFBTSxDQUFDZ0QsTUFBUCxHQUFnQixDQUFoQjtBQUNBaEQsWUFBTSxDQUFDd0osVUFBUCxDQUFrQixJQUFsQixFQUF3QlcsU0FBeEIsQ0FBa0MsS0FBS25LLE1BQXZDLEVBQStDLENBQS9DLEVBQWtELENBQWxELEVBQXFELEtBQUs4QyxLQUExRCxFQUFpRSxLQUFLRSxNQUF0RSxFQUE4RSxDQUE5RSxFQUFpRixDQUFqRixFQUFvRixDQUFwRixFQUF1RixDQUF2RjtBQUNBLGFBQU80RyxLQUFLLENBQUN2SCxTQUFOLENBQWdCaEQsS0FBaEIsQ0FBc0J3SyxJQUF0QixDQUNMN0osTUFBTSxDQUFDd0osVUFBUCxDQUFrQixJQUFsQixFQUF3QkMsWUFBeEIsQ0FBcUMsQ0FBckMsRUFBd0MsQ0FBeEMsRUFBMkMsQ0FBM0MsRUFBOEMsQ0FBOUMsRUFBaURDLElBRDVDLENBQVA7QUFHRDtBQUVEOzs7Ozs7MkJBR081RyxLLEVBQU9FLE0sRUFBUTtBQUNwQixVQUFNb0gsR0FBRyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBRyxTQUFHLENBQUN0SCxLQUFKLEdBQVlBLEtBQVo7QUFDQXNILFNBQUcsQ0FBQ3BILE1BQUosR0FBYUEsTUFBYjtBQUNBb0gsU0FBRyxDQUFDWixVQUFKLENBQWUsSUFBZixFQUFxQlcsU0FBckIsQ0FBK0IsS0FBS25LLE1BQXBDLEVBQTRDLENBQTVDLEVBQStDLENBQS9DLEVBQWtELEtBQUs4QyxLQUF2RCxFQUE4RCxLQUFLRSxNQUFuRSxFQUEyRSxDQUEzRSxFQUE4RSxDQUE5RSxFQUFpRkYsS0FBakYsRUFBd0ZFLE1BQXhGO0FBQ0EsYUFBTyxJQUFJLEtBQUs5QixXQUFULENBQXFCa0osR0FBckIsQ0FBUDtBQUNEOzs7O0VBN0VrQmpDLHVEOztBQWdGTm1CLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUVBOzs7Ozs7Ozs7SUFRTWUsUTs7Ozs7QUFDSjs7OztBQUlBLG9CQUFZM00sS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixRQUFNc0MsTUFBTSxHQUFHZ0ssUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQWpLLFVBQU0sQ0FBQzhDLEtBQVAsR0FBZXBGLEtBQUssQ0FBQ29GLEtBQXJCO0FBQ0E5QyxVQUFNLENBQUNnRCxNQUFQLEdBQWdCdEYsS0FBSyxDQUFDc0YsTUFBdEI7QUFDQWhELFVBQU0sQ0FBQ3dKLFVBQVAsQ0FBa0IsSUFBbEIsRUFBd0JXLFNBQXhCLENBQWtDek0sS0FBbEMsRUFBeUMsQ0FBekMsRUFBNEMsQ0FBNUM7QUFDQSxrRkFBTXNDLE1BQU47QUFFQSxVQUFLdEMsS0FBTCxHQUFhQSxLQUFiO0FBUGlCO0FBUWxCO0FBRUQ7Ozs7Ozs7aUNBR2FvRixLLEVBQU9FLE0sRUFBUTtBQUMxQixhQUFPLElBQUksS0FBSzlCLFdBQVQsQ0FBcUIsSUFBSW9KLEtBQUosQ0FBVXhILEtBQVYsRUFBaUJFLE1BQWpCLENBQXJCLENBQVA7QUFDRDtBQUVEOzs7Ozs7MkJBR087QUFBQTs7QUFDTDs7QUFFQSxhQUFPLElBQUkxRSxPQUFKLENBQVksVUFBQW1DLE9BQU8sRUFBSTtBQUM1QixjQUFJLENBQUMvQyxLQUFMLENBQVc2TSxNQUFYLEdBQW9CO0FBQUEsaUJBQU05SixPQUFPLENBQUMsTUFBRCxDQUFiO0FBQUEsU0FBcEI7O0FBRUEsY0FBSSxDQUFDL0MsS0FBTCxDQUFXOE0sR0FBWCxHQUFpQixNQUFJLENBQUN4SyxNQUFMLENBQVl5SyxTQUFaLEVBQWpCO0FBQ0QsT0FKTSxDQUFQO0FBS0Q7QUFFRDs7Ozs7OzJCQUdPM0gsSyxFQUFPRSxNLEVBQVE7QUFBQTs7QUFDcEIsYUFBTyxLQUFLL0UsSUFBTCxHQUFZTSxJQUFaLENBQWlCLFlBQU07QUFDNUIsZUFBTyxJQUFJRCxPQUFKLENBQVksVUFBQW1DLE9BQU8sRUFBSTtBQUM1QixjQUFNVCxNQUFNLEdBQUdnSyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBakssZ0JBQU0sQ0FBQzhDLEtBQVAsR0FBZUEsS0FBZjtBQUNBOUMsZ0JBQU0sQ0FBQ2dELE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0FoRCxnQkFBTSxDQUFDd0osVUFBUCxDQUFrQixJQUFsQixFQUF3QlcsU0FBeEIsQ0FBa0MsTUFBSSxDQUFDek0sS0FBdkMsRUFBOEMsQ0FBOUMsRUFBaUQsQ0FBakQsRUFBb0QsTUFBSSxDQUFDb0YsS0FBekQsRUFBZ0UsTUFBSSxDQUFDRSxNQUFyRSxFQUE2RSxDQUE3RSxFQUFnRixDQUFoRixFQUFtRkYsS0FBbkYsRUFBMEZFLE1BQTFGO0FBRUEsY0FBTXRGLEtBQUssR0FBRyxJQUFJNE0sS0FBSixDQUFVeEgsS0FBVixFQUFpQkUsTUFBakIsQ0FBZDs7QUFFQXRGLGVBQUssQ0FBQzZNLE1BQU4sR0FBZSxZQUFNO0FBQ25CLGdCQUFNckIsT0FBTyxHQUFHLElBQUksTUFBSSxDQUFDaEksV0FBVCxDQUFxQnhELEtBQXJCLENBQWhCO0FBQ0ErQyxtQkFBTyxDQUFDeUksT0FBRCxDQUFQO0FBQ0QsV0FIRDs7QUFLQXhMLGVBQUssQ0FBQzhNLEdBQU4sR0FBWXhLLE1BQU0sQ0FBQ3lLLFNBQVAsRUFBWjtBQUNELFNBZE0sQ0FBUDtBQWVELE9BaEJNLENBQVA7QUFpQkQ7Ozs7RUF4RG9CbkIsK0M7O0FBMkRSZSx1RUFBZixFOzs7Ozs7Ozs7Ozs7QUNyRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUlBOzs7Ozs7O0FBT0EsSUFBTUssT0FBTyxHQUFHLE9BQWhCO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFBQTs7Ozs7OztBQU9BLElBQU1oQyxhQUFhLEdBQUc7QUFDcEI7OztBQUdBaUMsU0FBTyxFQUFFLENBSlc7O0FBTXBCOzs7QUFHQUMsV0FBUyxFQUFFLENBVFM7O0FBV3BCOzs7QUFHQUMsWUFBVSxFQUFFLENBZFE7O0FBZ0JwQjs7O0FBR0FDLFlBQVUsRUFBRSxDQW5CUTs7QUFxQnBCOzs7QUFHQW5DLFNBQU8sRUFBRSxDQXhCVyxDQXdCVDs7QUF4QlMsQ0FBdEI7QUEyQmVELDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUVBOzs7Ozs7OztBQU9BLElBQU1wRyxnQ0FBZ0MsR0FBRztBQUN2Qzs7Ozs7O0FBTUF6QixvQkFQdUMsOEJBT3BCNUIsUUFQb0IsRUFPVjtBQUFBOztBQUNyQixRQUFBOEwsRUFBRSxHQUFHOUwsUUFBUSxDQUFDVSxFQUFkO0FBQUEsUUFDSnFMLEVBREksR0FDQy9MLFFBQVEsQ0FBQ1ksRUFEVjtBQUFBLFFBRUpvTCxFQUZJLEdBRUNoTSxRQUFRLENBQUNhLEVBQVQsR0FBYyxDQUZmO0FBQUEsUUFHSm9MLEVBSEksR0FHQ2pNLFFBQVEsQ0FBQ2MsRUFBVCxHQUFjLENBSGY7QUFBQSwyQkFJSyxLQUFLb0wsVUFBTCxDQUFnQkosRUFBaEIsRUFBb0JDLEVBQXBCLENBSkw7QUFBQTtBQUFBLFFBSUgxSyxDQUpHO0FBQUEsUUFJQUQsQ0FKQTtBQUFBLFFBS0puRCxPQUxJLEdBS00sSUFBSXNHLGlEQUFKLENBQWFsRCxDQUFiLEVBQWdCRCxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0JELENBQXRCLENBTE47O0FBT04sS0FBQyxDQUFDNEssRUFBRCxFQUFLRCxFQUFMLENBQUQsRUFBVyxDQUFDQyxFQUFELEVBQUtDLEVBQUwsQ0FBWCxFQUFxQixDQUFDSCxFQUFELEVBQUtHLEVBQUwsQ0FBckIsRUFBK0JwQixPQUEvQixDQUF1QyxVQUFBc0IsSUFBSTtBQUFBLGFBQUlsTyxPQUFPLENBQUN1RyxNQUFSLE9BQUF2RyxPQUFPLHFCQUFXLEtBQUksQ0FBQ2lPLFVBQUwsWUFBSSxxQkFBZUMsSUFBZixFQUFmLEVBQVg7QUFBQSxLQUEzQztBQUVBbE8sV0FBTyxDQUFDeUcsU0FBUjtBQUVBLFdBQU96RyxPQUFQO0FBQ0Q7QUFwQnNDLENBQXpDO0FBdUJlb0YsK0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFFQTs7Ozs7OztBQU1BLElBQU0rRyxrQkFBa0IsR0FBRztBQUN6Qjs7Ozs7Ozs7QUFRQWdDLDJCQVR5QixxQ0FTQy9LLENBVEQsRUFTSUQsQ0FUSixFQVN1RDtBQUFBLFFBQWhEb0ksbUJBQWdELHVFQUExQixLQUFLQSxtQkFBcUI7O0FBQzlFLFlBQVFBLG1CQUFSO0FBQ0UsV0FBSzZDLHNEQUFPLENBQUNYLE9BQWI7QUFDRSxlQUFPLEtBQUtZLGtCQUFMLENBQXdCakwsQ0FBeEIsRUFBMkJELENBQTNCLEVBQThCLENBQTlCLENBQVA7O0FBQ0YsV0FBS2lMLHNEQUFPLENBQUNWLFNBQWI7QUFDRSxlQUFPLEtBQUtXLGtCQUFMLENBQXdCakwsQ0FBeEIsRUFBMkJELENBQTNCLEVBQThCLENBQTlCLENBQVA7O0FBQ0YsV0FBS2lMLHNEQUFPLENBQUNULFVBQWI7QUFDRSxlQUFPLEtBQUtVLGtCQUFMLENBQXdCakwsQ0FBeEIsRUFBMkJELENBQTNCLEVBQThCLENBQTlCLENBQVA7O0FBQ0YsV0FBS2lMLHNEQUFPLENBQUNSLFVBQWI7QUFDRSxlQUFPLEtBQUsxQyxlQUFMLENBQXFCL0ksS0FBckIsRUFBUDs7QUFDRixXQUFLaU0sc0RBQU8sQ0FBQzNDLE9BQWI7QUFDQTtBQUNFLGVBQU8sS0FBSzZDLGFBQUwsQ0FBbUIxTyxJQUFJLENBQUM4QyxLQUFMLENBQVdVLENBQVgsQ0FBbkIsRUFBa0N4RCxJQUFJLENBQUM4QyxLQUFMLENBQVdTLENBQVgsQ0FBbEMsQ0FBUDtBQVhKO0FBYUQsR0F2QndCOztBQXlCekI7Ozs7Ozs7OztBQVNBa0wsb0JBbEN5Qiw4QkFrQ05qTCxDQWxDTSxFQWtDSEQsQ0FsQ0csRUFrQ1c7QUFBQSxRQUFYb0wsS0FBVyx1RUFBSCxDQUFHO0FBQ2xDLFFBQUlDLE1BQUosRUFBWUMsTUFBWjs7QUFFQSxZQUFRRixLQUFSO0FBQ0UsV0FBSyxDQUFMO0FBQ0VDLGNBQU0sR0FBRzVPLElBQUksQ0FBQzhDLEtBQUwsQ0FBV1UsQ0FBWCxDQUFUO0FBQ0FxTCxjQUFNLEdBQUc3TyxJQUFJLENBQUM4QyxLQUFMLENBQVdTLENBQVgsQ0FBVDtBQUNBOztBQUVGLFdBQUssQ0FBTDtBQUNFcUwsY0FBTSxHQUFHNU8sSUFBSSxDQUFDOEMsS0FBTCxDQUFXVSxDQUFDLEdBQUcsR0FBZixJQUFzQixDQUEvQjtBQUNBcUwsY0FBTSxHQUFHN08sSUFBSSxDQUFDOEMsS0FBTCxDQUFXUyxDQUFDLEdBQUcsR0FBZixJQUFzQixDQUEvQjtBQUNBOztBQUNGLFdBQUssQ0FBTDtBQUNFcUwsY0FBTSxHQUFHNU8sSUFBSSxDQUFDOEMsS0FBTCxDQUFXVSxDQUFYLElBQWdCLENBQXpCO0FBQ0FxTCxjQUFNLEdBQUc3TyxJQUFJLENBQUM4QyxLQUFMLENBQVdTLENBQVgsSUFBZ0IsQ0FBekI7QUFDQTs7QUFFRjtBQUNFLGNBQU0sSUFBSW9HLEtBQUosQ0FBVSxnREFBVixDQUFOO0FBaEJKOztBQW1CQSxRQUFNbUYsSUFBSSxHQUFHRixNQUFNLEdBQUdELEtBQXRCO0FBQ0EsUUFBTUksSUFBSSxHQUFHRixNQUFNLEdBQUdGLEtBQXRCO0FBQ0EsUUFBSTNDLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBWjs7QUFFQSxTQUFLLElBQUlnRCxDQUFDLEdBQUdILE1BQWIsRUFBcUJHLENBQUMsR0FBR0QsSUFBekIsRUFBK0JDLENBQUMsRUFBaEMsRUFBb0M7QUFDbEMsV0FBSyxJQUFJQyxDQUFDLEdBQUdMLE1BQWIsRUFBcUJLLENBQUMsR0FBR0gsSUFBekIsRUFBK0JHLENBQUMsRUFBaEMsRUFBb0M7QUFDbEMsYUFBS1AsYUFBTCxDQUFtQmxMLENBQW5CLEVBQXNCRCxDQUF0QixFQUF5QnlKLE9BQXpCLENBQWlDLFVBQUNDLE9BQUQsRUFBVXBJLENBQVY7QUFBQSxpQkFBZ0JtSCxLQUFLLENBQUNuSCxDQUFELENBQUwsSUFBWW9JLE9BQTVCO0FBQUEsU0FBakM7QUFDRDtBQUNGOztBQUVELFFBQU1pQyxLQUFLLEdBQUcsS0FBS1AsS0FBSyxHQUFHQSxLQUFiLENBQWQ7QUFFQSxXQUFPM0MsS0FBSyxDQUFDaEksR0FBTixDQUFVLFVBQUFpSixPQUFPO0FBQUEsYUFBSWpOLElBQUksQ0FBQytHLEtBQUwsQ0FBV2tHLE9BQU8sR0FBR2lDLEtBQXJCLENBQUo7QUFBQSxLQUFqQixDQUFQO0FBQ0Q7QUFyRXdCLENBQTNCO0FBd0VlM0MsaUZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBRUE7Ozs7Ozs7OztBQVFBLFNBQVM0QyxhQUFULENBQXVCM0wsQ0FBdkIsRUFBMEJELENBQTFCLEVBQTZCeUMsS0FBN0IsRUFBb0NFLE1BQXBDLEVBQTRDO0FBQzFDLFNBQU8sQ0FDTGxHLElBQUksQ0FBQ29QLEdBQUwsQ0FBUyxDQUFULEVBQVlwUCxJQUFJLENBQUNxUCxHQUFMLENBQVNySixLQUFLLEdBQUcsQ0FBakIsRUFBb0J4QyxDQUFwQixDQUFaLENBREssRUFFTHhELElBQUksQ0FBQ29QLEdBQUwsQ0FBUyxDQUFULEVBQVlwUCxJQUFJLENBQUNxUCxHQUFMLENBQVNuSixNQUFNLEdBQUcsQ0FBbEIsRUFBcUIzQyxDQUFyQixDQUFaLENBRkssQ0FBUDtBQUlEO0FBRUQ7Ozs7Ozs7Ozs7QUFRQSxTQUFTK0wsYUFBVCxDQUF1QjlMLENBQXZCLEVBQTBCRCxDQUExQixFQUE2QnlDLEtBQTdCLEVBQW9DRSxNQUFwQyxFQUE0QztBQUMxQyxNQUFJb0MsRUFBRSxHQUFHOUUsQ0FBQyxHQUFHd0MsS0FBYjtBQUFBLE1BQ0VxQyxFQUFFLEdBQUc5RSxDQUFDLEdBQUcyQyxNQURYO0FBR0EsU0FBTyxDQUNMb0MsRUFBRSxHQUFHLENBQUwsR0FBU3RDLEtBQUssR0FBR3NDLEVBQWpCLEdBQXNCQSxFQURqQixFQUVMRCxFQUFFLEdBQUcsQ0FBTCxHQUFTbkMsTUFBTSxHQUFHbUMsRUFBbEIsR0FBdUJBLEVBRmxCLENBQVA7QUFJRDtBQUVEOzs7Ozs7Ozs7QUFPQSxJQUFNaUUsaUJBQWlCLEdBQUc7QUFDeEI7Ozs7Ozs7O0FBUUFQLHNCQVR3QixnQ0FTSHZJLENBVEcsRUFTQUQsQ0FUQSxFQVNHNkgsTUFUSCxFQVNXO0FBQ2pDLFlBQVFBLE1BQVI7QUFDRSxXQUFLbUUsNENBQVUsQ0FBQ3ZCLFVBQWhCO0FBQ0UsZUFBTyxLQUFLMUMsZUFBTCxDQUFxQi9JLEtBQXJCLEVBQVA7O0FBRUYsV0FBS2dOLDRDQUFVLENBQUNDLElBQWhCO0FBQ0UsZUFBTyxLQUFLMUQsa0JBQUwsZ0NBQTJCcUQsYUFBYSxDQUFDM0wsQ0FBRCxFQUFJRCxDQUFKLEVBQU8sS0FBS3lDLEtBQVosRUFBbUIsS0FBS0UsTUFBeEIsQ0FBeEMsRUFBUDs7QUFFRixXQUFLcUosNENBQVUsQ0FBQ0UsTUFBaEI7QUFBQSw2QkFDaUJILGFBQWEsQ0FBQzlMLENBQUQsRUFBSUQsQ0FBSixFQUFPLEtBQUt5QyxLQUFMLEdBQWEsQ0FBcEIsRUFBdUIsS0FBS0UsTUFBTCxHQUFjLENBQXJDLENBRDlCO0FBQUE7QUFBQSxZQUNPc0MsRUFEUDtBQUFBLFlBQ1dDLEVBRFg7O0FBR0UsWUFBSUQsRUFBRSxHQUFHLEtBQUt4QyxLQUFMLEdBQWEsQ0FBdEIsRUFBeUI7QUFDdkJ3QyxZQUFFLEdBQUcsS0FBS3hDLEtBQUwsSUFBY3dDLEVBQUUsR0FBRyxLQUFLeEMsS0FBeEIsSUFBaUMsQ0FBdEM7QUFDRDs7QUFFRCxZQUFJeUMsRUFBRSxHQUFHLEtBQUt2QyxNQUFMLEdBQWMsQ0FBdkIsRUFBMEI7QUFDeEJ1QyxZQUFFLEdBQUcsS0FBS3ZDLE1BQUwsSUFBZXVDLEVBQUUsR0FBRyxLQUFLdkMsTUFBekIsSUFBbUMsQ0FBeEM7QUFDRDs7QUFFRCxlQUFPLEtBQUs0RixrQkFBTCxDQUF3QnRELEVBQXhCLEVBQTRCQyxFQUE1QixDQUFQOztBQUVGLFdBQUs4Ryw0Q0FBVSxDQUFDRyxJQUFoQjtBQUNFLGVBQU8sS0FBSzVELGtCQUFMLGdDQUEyQndELGFBQWEsQ0FBQzlMLENBQUQsRUFBSUQsQ0FBSixFQUFPLEtBQUt5QyxLQUFaLEVBQW1CLEtBQUtFLE1BQXhCLENBQXhDLEVBQVA7O0FBRUYsV0FBS3FKLDRDQUFVLENBQUM5RCxXQUFoQjtBQUNBO0FBQ0UsZUFBTyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBUDs7QUFFRixXQUFLOEQsNENBQVUsQ0FBQ0ksS0FBaEI7QUFDRSxlQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsS0FBS2pFLFlBQWYsQ0FBUDs7QUFFRixXQUFLNkQsNENBQVUsQ0FBQ0ssS0FBaEI7QUFDRSxlQUFPLElBQUk5QyxLQUFKLENBQVUsQ0FBVixFQUFhK0MsSUFBYixDQUFrQixLQUFLbkUsWUFBdkIsQ0FBUDs7QUFFRixXQUFLNkQsNENBQVUsQ0FBQ08sSUFBaEI7QUFDRSxlQUFPLElBQUloRCxLQUFKLENBQVUsQ0FBVixFQUFhK0MsSUFBYixDQUFrQjdQLElBQUksQ0FBQytHLEtBQUwsQ0FBVyxLQUFLMkUsWUFBTCxHQUFvQixDQUEvQixDQUFsQixFQUFxRHRHLE1BQXJELENBQTRELENBQUMsS0FBS3NHLFlBQU4sQ0FBNUQsQ0FBUDs7QUFFRixXQUFLNkQsNENBQVUsQ0FBQ1EsZUFBaEI7QUFDQSxXQUFLUiw0Q0FBVSxDQUFDUyxvQkFBaEI7QUFDRSxZQUFJek0sQ0FBQyxHQUFHLENBQUosSUFBU0EsQ0FBQyxJQUFJLEtBQUsyQyxNQUF2QixFQUErQjtBQUM3QixpQkFBT2tGLE1BQU0sS0FBS21FLDRDQUFVLENBQUNRLGVBQXRCLEdBQXdDLEtBQUt6RSxlQUFMLENBQXFCL0ksS0FBckIsRUFBeEMsR0FDSCxLQUFLdUosa0JBQUwsZ0NBQTJCcUQsYUFBYSxDQUFDM0wsQ0FBRCxFQUFJRCxDQUFKLEVBQU8sS0FBS3lDLEtBQVosRUFBbUIsS0FBS0UsTUFBeEIsQ0FBeEMsRUFESjtBQUVEOztBQUVELGVBQU8sS0FBSzRGLGtCQUFMLGdDQUEyQndELGFBQWEsQ0FBQzlMLENBQUQsRUFBSUQsQ0FBSixFQUFPLEtBQUt5QyxLQUFaLEVBQW1CLEtBQUtFLE1BQXhCLENBQXhDLEVBQVA7O0FBRUYsV0FBS3FKLDRDQUFVLENBQUNVLGFBQWhCO0FBQ0EsV0FBS1YsNENBQVUsQ0FBQ1csa0JBQWhCO0FBQ0UsWUFBSTFNLENBQUMsR0FBRyxDQUFKLElBQVNELENBQUMsSUFBSSxLQUFLeUMsS0FBdkIsRUFBOEI7QUFDNUIsaUJBQU9vRixNQUFNLEtBQUttRSw0Q0FBVSxDQUFDVSxhQUF0QixHQUFzQyxLQUFLM0UsZUFBTCxDQUFxQi9JLEtBQXJCLEVBQXRDLEdBQ0gsS0FBS3VKLGtCQUFMLGdDQUEyQnFELGFBQWEsQ0FBQzNMLENBQUQsRUFBSUQsQ0FBSixFQUFPLEtBQUt5QyxLQUFaLEVBQW1CLEtBQUtFLE1BQXhCLENBQXhDLEVBREo7QUFFRDs7QUFFRCxlQUFPLEtBQUs0RixrQkFBTCxnQ0FBMkJ3RCxhQUFhLENBQUM5TCxDQUFELEVBQUlELENBQUosRUFBTyxLQUFLeUMsS0FBWixFQUFtQixLQUFLRSxNQUF4QixDQUF4QyxFQUFQOztBQUVGLFdBQUtxSiw0Q0FBVSxDQUFDWSxNQUFoQjtBQUNFLGVBQU8sS0FBS3JFLGtCQUFMLENBQ0w5TCxJQUFJLENBQUM4QyxLQUFMLENBQVc5QyxJQUFJLENBQUNvUSxNQUFMLEtBQWdCLEtBQUtwSyxLQUFoQyxDQURLLEVBRUxoRyxJQUFJLENBQUM4QyxLQUFMLENBQVc5QyxJQUFJLENBQUNvUSxNQUFMLEtBQWdCLEtBQUtsSyxNQUFoQyxDQUZLLENBQVA7QUF2REo7QUE0REQ7QUF0RXVCLENBQTFCO0FBeUVlb0csZ0ZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUEsSUFBTStELHlCQUF5QixHQUFHLElBQWxDO0FBRUE7Ozs7Ozs7QUFNQSxTQUFTQyxzQkFBVCxDQUFnQ2pRLE1BQWhDLEVBQXdDeUssT0FBeEMsRUFBaUQ7QUFDL0MsTUFBTXlGLEtBQUssR0FBRyxFQUFkO0FBRUEsTUFBTUMsTUFBTSxHQUFHMUYsT0FBTyxHQUFHOUssSUFBSSxDQUFDeVEsSUFBTCxDQUFVLElBQUlKLHlCQUFkLENBQXpCOztBQUVBLE9BQUssSUFBSUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0wseUJBQXBCLEVBQStDSyxDQUFDLEVBQWhELEVBQW9EO0FBQ2xESCxTQUFLLENBQUNHLENBQUQsQ0FBTCxHQUFXclEsTUFBTSxDQUFDc1EsU0FBUCxDQUFpQjNRLElBQUksQ0FBQ3lRLElBQUwsQ0FBVUMsQ0FBVixJQUFlRixNQUFoQyxDQUFYO0FBQ0Q7O0FBRUQsU0FBT0QsS0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTUEsU0FBU0ssY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0JuRixZQUEvQixFQUE2QztBQUMzQyxTQUFPMUwsSUFBSSxDQUFDb1AsR0FBTCxDQUFTLENBQVQsRUFBWXBQLElBQUksQ0FBQ3FQLEdBQUwsQ0FBUzNELFlBQVQsRUFBdUJtRixLQUF2QixDQUFaLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkEsU0FBU0MsZ0JBQVQsQ0FBMEJDLEdBQTFCLEVBQStCQyxHQUEvQixFQUFvQ0MsR0FBcEMsRUFBeUNDLEdBQXpDLEVBQThDO0FBQzVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEsTUFBTTlLLENBQUMsR0FBRzJLLEdBQVY7QUFDQSxNQUFNNUcsQ0FBQyxHQUFHNkcsR0FBVjtBQUNBLE1BQU01RyxDQUFDLEdBQUc2RyxHQUFWO0FBQ0EsTUFBTUUsQ0FBQyxHQUFHRCxHQUFWO0FBRUE7Ozs7O0FBSUEsTUFBTUUsRUFBRSxHQUFHaEwsQ0FBQyxHQUFHQSxDQUFmO0FBQ0EsTUFBTWlMLEVBQUUsR0FBR2xILENBQUMsR0FBR0EsQ0FBZjtBQUNBLE1BQU1tSCxFQUFFLEdBQUdsSCxDQUFDLEdBQUdBLENBQWY7QUFDQSxNQUFNbUgsRUFBRSxHQUFHSixDQUFDLEdBQUdBLENBQWY7QUFFQTs7OztBQUdBLE1BQU1LLEdBQUcsR0FBR0osRUFBRSxHQUFHQyxFQUFqQjtBQUNBLE1BQU1JLEdBQUcsR0FBR3JMLENBQUMsR0FBR2dFLENBQUosR0FBUUQsQ0FBQyxHQUFHZ0gsQ0FBeEI7QUFDQSxNQUFNTyxHQUFHLEdBQUdELEdBQVo7QUFDQSxNQUFNRSxHQUFHLEdBQUdMLEVBQUUsR0FBR0MsRUFBakI7QUFDQSxNQUFNSyxHQUFHLEdBQUd4TCxDQUFDLEdBQUcrSyxDQUFKLEdBQVFoSCxDQUFDLEdBQUdDLENBQXhCO0FBQ0EsTUFBTXlILFNBQVMsR0FBR0QsR0FBRyxHQUFHQSxHQUF4QjtBQUNBLE1BQU1FLGlCQUFpQixHQUFHTixHQUFHLEdBQUdHLEdBQWhDO0FBQ0EsTUFBTUksWUFBWSxHQUFHLENBQUNELGlCQUFpQixHQUFHRCxTQUFyQixLQUFtQ0MsaUJBQWlCLEdBQUdELFNBQXZELENBQXJCO0FBRUE7Ozs7OztBQUtBLE1BQU1HLGlCQUFpQixHQUFHaFMsSUFBSSxDQUFDeVEsSUFBTCxDQUFVc0IsWUFBWSxHQUFHLENBQWYsR0FBbUJBLFlBQW5CLEdBQWtDLENBQTVDLENBQTFCO0FBRUE7Ozs7Ozs7O0FBT0E7Ozs7QUFHQSxNQUFNRSxJQUFJLEdBQUcsT0FBT0gsaUJBQWlCLEdBQUdFLGlCQUEzQixDQUFiO0FBRUE7Ozs7OztBQUtBLE1BQU1FLElBQUksR0FBRyxPQUFPSixpQkFBaUIsR0FBR0UsaUJBQTNCLENBQWI7QUFDQSxNQUFNRyxZQUFZLEdBQUdGLElBQUksR0FBR1QsR0FBNUI7QUFDQSxNQUFNWSxZQUFZLEdBQUdILElBQUksR0FBR04sR0FBNUI7QUFFQTs7Ozs7Ozs7QUFPQSxNQUFNVSxvQkFBb0IsR0FBR0YsWUFBWSxHQUFHQSxZQUE1QztBQUNBLE1BQU1HLG9CQUFvQixHQUFHRixZQUFZLEdBQUdBLFlBQTVDO0FBRUE7Ozs7Ozs7Ozs7QUFTQSxNQUFNRyxRQUFRLEdBQUlGLG9CQUFvQixJQUFJQyxvQkFBekIsR0FBaURiLEdBQWpELEdBQXVEVyxZQUF4RTtBQUNBLE1BQU1JLFFBQVEsR0FBSUgsb0JBQW9CLElBQUlDLG9CQUF6QixHQUFpREgsWUFBakQsR0FBZ0VULEdBQWpGO0FBQ0EsTUFBTWUsSUFBSSxHQUFHelMsSUFBSSxDQUFDeVEsSUFBTCxDQUFVOEIsUUFBUSxHQUFHQSxRQUFYLEdBQXNCQyxRQUFRLEdBQUdBLFFBQTNDLENBQWI7QUFFQTs7Ozs7QUFJQSxNQUFNRSxHQUFHLEdBQUdELElBQUksR0FBRyxDQUFQLEdBQVdGLFFBQVEsR0FBR0UsSUFBdEIsR0FBNkIsQ0FBekM7QUFDQSxNQUFNRSxHQUFHLEdBQUdGLElBQUksR0FBRyxDQUFQLEdBQVdELFFBQVEsR0FBR0MsSUFBdEIsR0FBNkIsQ0FBekM7QUFFQTs7OztBQUdBLE1BQU1HLFNBQVMsR0FBR1gsSUFBSSxJQUFJLENBQVIsR0FBWSxDQUFaLEdBQWdCalMsSUFBSSxDQUFDeVEsSUFBTCxDQUFVd0IsSUFBVixDQUFsQztBQUNBLE1BQU1ZLFNBQVMsR0FBR1gsSUFBSSxJQUFJLENBQVIsR0FBWSxDQUFaLEdBQWdCbFMsSUFBSSxDQUFDeVEsSUFBTCxDQUFVeUIsSUFBVixDQUFsQztBQUdBLE1BQU1ZLE9BQU8sR0FBR0osR0FBRyxHQUFHRSxTQUF0QjtBQUNBLE1BQU1HLE9BQU8sR0FBR0osR0FBRyxHQUFHQyxTQUF0QjtBQUNBLE1BQU1JLE9BQU8sR0FBRyxDQUFDTCxHQUFELEdBQU9FLFNBQXZCO0FBQ0EsTUFBTUksT0FBTyxHQUFHUCxHQUFHLEdBQUdHLFNBQXRCO0FBRUEsU0FBTyxDQUNMQyxPQURLLEVBRUxDLE9BRkssRUFHTEMsT0FISyxFQUlMQyxPQUpLLEVBS0xMLFNBTEssRUFNTEMsU0FOSyxDQUFQO0FBUUQ7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OztJQWNNSyxHOzs7QUFFSjs7OztBQUlBLGVBQVk3UyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCOzs7OztBQUtBLFNBQUs4UyxZQUFMLEdBQW9COVMsTUFBcEI7QUFFQTs7Ozs7O0FBS0EsU0FBS3lLLE9BQUwsR0FBZSxLQUFLcUksWUFBTCxDQUFrQnJJLE9BQWxCLEdBQTRCLEtBQUtxSSxZQUFMLENBQWtCcEksSUFBN0Q7QUFFQTs7Ozs7QUFJQSxTQUFLekksVUFBTCxHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBbEI7QUFFQTs7Ozs7O0FBS0EsU0FBSzhRLGlCQUFMLEdBQXlCOUMsc0JBQXNCLENBQUMsS0FBSzZDLFlBQU4sRUFBb0IsS0FBS3JJLE9BQXpCLENBQS9DO0FBRUE7Ozs7O0FBSUEsU0FBS2xLLEtBQUwsR0FBYSxJQUFiO0FBRUE7Ozs7OztBQUtBLFNBQUs2QixNQUFMLEdBQWMsSUFBZDtBQUVBOzs7Ozs7QUFLQSxTQUFLNFEsYUFBTCxHQUFxQixJQUFyQjtBQUVBOzs7Ozs7QUFLQSxTQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBRUE7Ozs7OztBQUtBLFNBQUtDLHVCQUFMLEdBQStCLElBQS9CO0FBRUE7Ozs7OztBQUtBLFNBQUtDLGlCQUFMLEdBQXlCLElBQXpCO0FBRUE7Ozs7OztBQUtBLFNBQUtDLENBQUwsR0FBUyxDQUFUO0FBRUE7Ozs7OztBQUtBLFNBQUtDLENBQUwsR0FBUyxDQUFUO0FBRUE7Ozs7OztBQUtBLFNBQUtDLENBQUwsR0FBUyxDQUFUO0FBRUE7Ozs7OztBQUtBLFNBQUtDLENBQUwsR0FBUyxDQUFUO0FBRUE7Ozs7O0FBSUEsU0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFFQTs7Ozs7QUFJQSxTQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUVBOzs7OztBQUlBLFNBQUtDLE1BQUwsR0FBYyxDQUFkO0FBRUE7Ozs7O0FBSUEsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFFQTs7Ozs7O0FBS0EsU0FBS0MsY0FBTCxHQUFzQixLQUF0QjtBQUVBOzs7Ozs7O0FBTUEsU0FBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUVBOzs7OztBQUlBLFNBQUs5USxPQUFMLEdBQWUsQ0FBZjtBQUNEO0FBRUQ7Ozs7Ozs7c0NBR2tCSSxDLEVBQUdELEMsRUFBRztBQUN0QkMsT0FBQyxHQUFHQSxDQUFDLEdBQUcsS0FBS0osT0FBYjtBQUNBRyxPQUFDLEdBQUdBLENBQUMsR0FBRyxLQUFLSCxPQUFiO0FBRUEsVUFBTXNFLFFBQVEsR0FBRyxLQUFLakYsTUFBTCxDQUFZMFIsV0FBWixDQUF3QjNRLENBQXhCLEVBQTJCRCxDQUEzQixFQUE4QixLQUFLSCxPQUFuQyxDQUFqQjs7QUFFQSxVQUFJc0UsUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFBQSxvQ0FDRCxLQUFLakYsTUFBTCxDQUFZMlIsVUFBWixDQUF1QjVRLENBQXZCLEVBQTBCRCxDQUExQixDQURDO0FBQUE7QUFBQSxZQUNUdUIsQ0FEUztBQUFBLFlBQ05DLENBRE07O0FBR2hCLFlBQUksS0FBS3RDLE1BQUwsQ0FBWThCLDZCQUFoQixFQUErQztBQUM3QyxlQUFLOFAsZ0JBQUwsZ0NBQXlCLEtBQUs1UixNQUFMLENBQVk2UixxQkFBWixDQUFrQzlRLENBQWxDLEVBQXFDRCxDQUFyQyxDQUF6QjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtnUixZQUFMLGdDQUFxQixLQUFLOVIsTUFBTCxDQUFZNlIscUJBQVosQ0FBa0M5USxDQUFsQyxFQUFxQ0QsQ0FBckMsQ0FBckI7QUFDRDs7QUFFRCxZQUFNeUksS0FBSyxHQUFHLEtBQUt3SSxrQkFBTCxDQUF3QjFQLENBQXhCLEVBQTJCQyxDQUEzQixDQUFkOztBQUVBLFlBQUkyQyxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNoQixpQkFBTytNLDhEQUFXLENBQUN6SSxLQUFELEVBQVF0RSxRQUFSLEVBQWtCLEtBQUtwRixVQUF2QixDQUFsQjtBQUNEOztBQUVELGVBQU8wSixLQUFQO0FBQ0Q7O0FBRUQsYUFBTyxLQUFLMUosVUFBTCxDQUFnQkMsS0FBaEIsRUFBUDtBQUNEO0FBRUQ7Ozs7Ozs2QkFHUzNCLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYixDQURjLENBRWQ7O0FBQ0EsV0FBS3lTLGFBQUwsR0FBcUIsS0FBS3pTLEtBQUwsQ0FBV3VCLFFBQWhDLENBSGMsQ0FJZDs7QUFDQSxXQUFLbVIsU0FBTCxHQUFpQixLQUFLRCxhQUFMLENBQW1CcUIsSUFBbkIsRUFBakIsQ0FMYyxDQU1kOztBQUNBLFdBQUtuQix1QkFBTCxHQUErQixLQUFLM1MsS0FBTCxDQUFXMkssa0JBQTFDLENBUGMsQ0FRZDs7QUFDQSxXQUFLaUksaUJBQUwsR0FBeUIsSUFBekI7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7OEJBR1UvUSxNLEVBQVE7QUFDaEIsVUFBSSxDQUFDQSxNQUFNLENBQUM2QixxQkFBWixFQUFtQztBQUNqQyxjQUFNLElBQUlxRixLQUFKLENBQVUsa0VBQVYsQ0FBTjtBQUNEOztBQUVELFdBQUtsSCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxXQUFLd1IsY0FBTCxHQUFzQixLQUF0QjtBQUVBLGFBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7dUNBT2lDO0FBQy9CLFVBQUksQ0FBQyxLQUFLQSxjQUFWLEVBQTBCO0FBQ3hCLGFBQUtBLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxlQUFPLEtBQUtNLFlBQUwsdUJBQVA7QUFDRDs7QUFFRCxhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7O21DQU82QjtBQUFBOztBQUFBLHdDQUFiSSxXQUFhO0FBQWJBLG1CQUFhO0FBQUE7O0FBQzNCLFdBQUtULFlBQUwsR0FBb0IsS0FBcEI7QUFFQVMsaUJBQVcsR0FBR0EsV0FBVyxDQUFDM1EsR0FBWixDQUFnQixVQUFBNFEsVUFBVTtBQUFBLGVBQUlBLFVBQVUsR0FBRyxLQUFJLENBQUN4UixPQUF0QjtBQUFBLE9BQTFCLENBQWQ7QUFFQSxhQUFPLEtBQUt5UixXQUFMLGdDQUFvQkYsV0FBcEIsR0FDSkcsWUFESSxFQUFQO0FBRUQ7QUFFRDs7Ozs7Ozs7OztrQ0FPNEI7QUFBQSw4QkFRdEJoRSxnQkFBZ0IsTUFBaEIsbUJBUnNCO0FBQUE7QUFBQSxVQUV4QmdDLE9BRndCO0FBQUEsVUFHeEJDLE9BSHdCO0FBQUEsVUFJeEJDLE9BSndCO0FBQUEsVUFLeEJDLE9BTHdCO0FBQUEsVUFNeEJMLFNBTndCO0FBQUEsVUFPeEJDLFNBUHdCOztBQVUxQixXQUFLWSxDQUFMLEdBQVNWLE9BQU8sR0FBR0EsT0FBVixHQUFvQkUsT0FBTyxHQUFHQSxPQUF2QztBQUNBLFdBQUtTLENBQUwsR0FBUyxDQUFDLENBQUQsSUFBTVosT0FBTyxHQUFHQyxPQUFWLEdBQW9CQyxPQUFPLEdBQUdDLE9BQXBDLENBQVQ7QUFDQSxXQUFLVSxDQUFMLEdBQVNiLE9BQU8sR0FBR0EsT0FBVixHQUFvQkUsT0FBTyxHQUFHQSxPQUF2QztBQUNBLFdBQUtZLENBQUwsR0FBU2hCLFNBQVMsR0FBR0MsU0FBckI7QUFDQSxXQUFLZSxDQUFMLElBQVUsS0FBS0EsQ0FBZjtBQUVBOzs7Ozs7Ozs7QUFRQSxXQUFLTSxZQUFMLEdBQW9CLElBQUksS0FBS1QsQ0FBVCxHQUFhLEtBQUtFLENBQWxCLEdBQXNCLEtBQUtELENBQUwsR0FBUyxLQUFLQSxDQUFwQyxHQUF3QzVULHdEQUE1RDtBQUVBLGFBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OzttQ0FNZTtBQUNiLFVBQUksQ0FBQyxLQUFLb1UsWUFBVixFQUF3QjtBQUN0QixhQUFLTixDQUFMLElBQVUsS0FBSzlJLE9BQUwsR0FBZSxLQUFLQSxPQUE5QjtBQUNBLGFBQUsrSSxNQUFMLEdBQWM3VCxJQUFJLENBQUN5USxJQUFMLENBQVUsS0FBS2tELENBQUwsR0FBUyxLQUFLQyxDQUFkLElBQW1CLEtBQUtILENBQUwsR0FBUyxLQUFLRSxDQUFkLEdBQWtCLE9BQU8sS0FBS0QsQ0FBWixHQUFnQixLQUFLQSxDQUExRCxDQUFWLENBQWQ7QUFDQSxhQUFLSSxNQUFMLEdBQWM5VCxJQUFJLENBQUN5USxJQUFMLENBQVUsS0FBS2dELENBQUwsR0FBUyxLQUFLRyxDQUFkLElBQW1CLEtBQUtILENBQUwsR0FBUyxLQUFLRSxDQUFkLEdBQWtCLE9BQU8sS0FBS0QsQ0FBWixHQUFnQixLQUFLQSxDQUExRCxDQUFWLENBQWQ7QUFDQSxhQUFLSyxNQUFMLEdBQWMvVCxJQUFJLENBQUN5USxJQUFMLENBQVUsS0FBS21ELENBQUwsR0FBUyxLQUFLSCxDQUF4QixDQUFkO0FBQ0EsYUFBS08sS0FBTCxHQUFhLENBQUMsS0FBS04sQ0FBTixJQUFXLElBQUksS0FBS0QsQ0FBcEIsQ0FBYjtBQUVBOzs7Ozs7QUFLQSxZQUFJLEtBQUtNLE1BQUwsR0FBYyxLQUFLRCxNQUFuQixHQUE0QixJQUFJLEtBQUtSLFNBQXpDLEVBQW9EO0FBQ2xELGVBQUtZLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxpQkFBTyxJQUFQO0FBQ0Q7QUFFRDs7O0FBQ0EsWUFBTXZTLEtBQUssR0FBRzBPLHlCQUF5QixHQUFHLEtBQUt1RCxDQUEvQztBQUNBLGFBQUtILENBQUwsSUFBVTlSLEtBQVY7QUFDQSxhQUFLK1IsQ0FBTCxJQUFVL1IsS0FBVjtBQUNBLGFBQUtnUyxDQUFMLElBQVVoUyxLQUFWO0FBQ0Q7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7dUNBUW1Cb1QsRSxFQUFJQyxFLEVBQUk7QUFDekIsVUFBSSxLQUFLQyxvQkFBTCxDQUEwQkYsRUFBMUIsRUFBOEJDLEVBQTlCLENBQUosRUFBdUM7QUFDckM7OztBQUdBLGVBQU8sS0FBS3BVLEtBQUwsQ0FBVzhOLGFBQVgsQ0FBeUJxRyxFQUF6QixFQUE2QkMsRUFBN0IsQ0FBUDtBQUNEOztBQUVELFVBQUksS0FBS2QsWUFBVCxFQUF1QjtBQUNyQjtBQUVBLGdCQUFRLEtBQUtYLHVCQUFiO0FBQ0UsZUFBSy9ILDRDQUFHLENBQUNnRSxJQUFUO0FBQ0EsZUFBS2hFLDRDQUFHLENBQUN3RSxvQkFBVDtBQUNBLGVBQUt4RSw0Q0FBRyxDQUFDMEUsa0JBQVQ7QUFDRTs7Ozs7OztBQU9BLG1CQUFPLEtBQUt0UCxLQUFMLENBQVcyTix5QkFBWCxDQUFxQ3dHLEVBQXJDLEVBQXlDQyxFQUF6QyxFQUE2Q3BKLHNEQUFhLENBQUNpQyxPQUEzRCxDQUFQOztBQUNGLGVBQUtyQyw0Q0FBRyxDQUFDdUUsZUFBVDtBQUNBLGVBQUt2RSw0Q0FBRyxDQUFDeUUsYUFBVDtBQUNFOzs7QUFHQSxtQkFBTyxLQUFLclAsS0FBTCxDQUFXOE4sYUFBWCxDQUNMLEtBQUsyRSxhQUFMLENBQW1CeFEsRUFBbkIsR0FBd0IsQ0FEbkIsRUFFTCxLQUFLd1EsYUFBTCxDQUFtQnRRLEVBQW5CLEdBQXdCLENBRm5CLENBQVA7O0FBSUY7QUFDRSxtQkFBTyxLQUFLbVMsb0JBQUwsRUFBUDtBQXRCSjtBQXdCRDs7QUFFRCxVQUFJQyxRQUFRLEdBQUcsQ0FBZjtBQUFBLFVBQ0VDLFFBQVEsR0FBRyxDQURiO0FBQUEsVUFFRUMsR0FBRyxHQUFHLENBRlI7QUFBQSxVQUdFQyxLQUFLLEdBQUcsQ0FIVjtBQUFBLFVBSUVDLElBQUksR0FBRyxDQUpUO0FBQUEsVUFLRUMsS0FBSyxHQUFHLENBTFY7QUFPQTs7Ozs7QUFJQSxVQUFNdEgsRUFBRSxHQUFHbE8sSUFBSSxDQUFDNEcsSUFBTCxDQUFVb08sRUFBRSxHQUFHLEtBQUtsQixNQUFwQixDQUFYO0FBQ0EsVUFBTTFGLEVBQUUsR0FBR3BPLElBQUksQ0FBQzhDLEtBQUwsQ0FBV2tTLEVBQUUsR0FBRyxLQUFLbEIsTUFBckIsQ0FBWCxDQWpEeUIsQ0FtRHpCOztBQUNBLFVBQUk3RixFQUFFLEdBQUc4RyxFQUFFLEdBQUcsQ0FBQzdHLEVBQUUsR0FBRzhHLEVBQU4sSUFBWSxLQUFLaEIsS0FBdEIsR0FBOEIsS0FBS0QsTUFBNUM7QUFDQSxVQUFJMEIsRUFBRSxHQUFHLElBQUksS0FBSzFCLE1BQVQsR0FBa0IsQ0FBM0I7QUFFQTs7Ozs7QUFLQSxVQUFJMkIsR0FBRyxHQUFHLElBQUksS0FBS2pDLENBQW5COztBQUVBLFdBQUssSUFBSTFPLENBQUMsR0FBR21KLEVBQWIsRUFBaUJuSixDQUFDLEdBQUdxSixFQUFyQixFQUF5QnJKLENBQUMsRUFBMUIsRUFBOEI7QUFDNUIsWUFBSTRRLE1BQU0sR0FBRzNWLElBQUksQ0FBQzRHLElBQUwsQ0FBVXFILEVBQVYsQ0FBYixDQUQ0QixDQUNBOztBQUM1QkEsVUFBRSxJQUFJLEtBQUsrRixLQUFYLENBRjRCLENBRVY7O0FBQ2xCLFlBQUk0QixJQUFJLEdBQUdELE1BQU0sR0FBR0YsRUFBcEIsQ0FINEIsQ0FLNUI7O0FBQ0EsWUFBSUksQ0FBQyxHQUFHRixNQUFNLEdBQUdaLEVBQWpCO0FBQ0EsWUFBSWUsQ0FBQyxHQUFHL1EsQ0FBQyxHQUFHaVEsRUFBWixDQVA0QixDQVM1Qjs7QUFDQSxZQUFJdEUsQ0FBQyxHQUFHLENBQUMsS0FBSytDLENBQUwsR0FBU29DLENBQVQsR0FBYSxLQUFLbkMsQ0FBTCxHQUFTb0MsQ0FBdkIsSUFBNEJELENBQTVCLEdBQWdDLEtBQUtsQyxDQUFMLEdBQVNtQyxDQUFULEdBQWFBLENBQXJEO0FBQ0EsWUFBSUMsRUFBRSxHQUFHLEtBQUt0QyxDQUFMLElBQVUsSUFBSW9DLENBQUosR0FBUSxDQUFsQixJQUF1QixLQUFLbkMsQ0FBTCxHQUFTb0MsQ0FBekMsQ0FYNEIsQ0FhNUI7O0FBQ0EsYUFBSyxJQUFJaFIsQ0FBQyxHQUFHNlEsTUFBYixFQUFxQjdRLENBQUMsR0FBRzhRLElBQXpCLEVBQStCOVEsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQztBQUNBLGNBQUk0TCxDQUFDLEdBQUdMLHlCQUFSLEVBQW1DO0FBQ2pDLGdCQUFJMkYsTUFBTSxHQUFHLEtBQUs1QyxpQkFBTCxDQUF1QnBULElBQUksQ0FBQzhDLEtBQUwsQ0FBVzROLENBQVgsQ0FBdkIsQ0FBYjs7QUFEaUMsd0NBRWQsS0FBSzlQLEtBQUwsQ0FBVzhOLGFBQVgsQ0FBeUI1SixDQUF6QixFQUE0QkMsQ0FBNUIsQ0FGYztBQUFBO0FBQUEsZ0JBRTVCc0MsQ0FGNEI7QUFBQSxnQkFFekI0TyxDQUZ5QjtBQUFBLGdCQUV0QjlMLENBRnNCO0FBQUEsZ0JBRW5CL0QsQ0FGbUI7O0FBR2pDb1AsaUJBQUssSUFBSVEsTUFBTSxHQUFHNVAsQ0FBbEI7QUFDQStPLG9CQUFRLElBQUlhLE1BQVo7QUFFQUEsa0JBQU0sSUFBSzVQLENBQUMsR0FBRyxLQUFLeEYsS0FBTCxDQUFXOEssWUFBMUI7QUFFQTJKLGVBQUcsSUFBSWhPLENBQUMsR0FBRzJPLE1BQVg7QUFDQVYsaUJBQUssSUFBSVcsQ0FBQyxHQUFHRCxNQUFiO0FBQ0FULGdCQUFJLElBQUlwTCxDQUFDLEdBQUc2TCxNQUFaO0FBQ0FaLG9CQUFRLElBQUlZLE1BQVo7QUFDRDs7QUFFRHRGLFdBQUMsSUFBSXFGLEVBQUw7QUFDQUEsWUFBRSxJQUFJTCxHQUFOO0FBQ0Q7QUFDRixPQS9Gd0IsQ0FpR3pCOzs7QUFDQSxVQUFJLENBQUNOLFFBQUQsSUFBYSxDQUFDRCxRQUFsQixFQUE0QjtBQUMxQjs7OztBQUlBLGVBQU8sS0FBS3ZVLEtBQUwsQ0FBVzJOLHlCQUFYLENBQXFDd0csRUFBckMsRUFBeUNDLEVBQXpDLENBQVA7QUFDRDs7QUFFRCxhQUFPLENBQ0xwRSxjQUFjLENBQUM1USxJQUFJLENBQUMrRyxLQUFMLENBQVdzTyxHQUFHLEdBQUdELFFBQWpCLENBQUQsRUFBNkIsS0FBS3hVLEtBQUwsQ0FBVzhLLFlBQXhDLENBRFQsRUFFTGtGLGNBQWMsQ0FBQzVRLElBQUksQ0FBQytHLEtBQUwsQ0FBV3VPLEtBQUssR0FBR0YsUUFBbkIsQ0FBRCxFQUErQixLQUFLeFUsS0FBTCxDQUFXOEssWUFBMUMsQ0FGVCxFQUdMa0YsY0FBYyxDQUFDNVEsSUFBSSxDQUFDK0csS0FBTCxDQUFXd08sSUFBSSxHQUFHSCxRQUFsQixDQUFELEVBQThCLEtBQUt4VSxLQUFMLENBQVc4SyxZQUF6QyxDQUhULEVBSUxrRixjQUFjLENBQUM1USxJQUFJLENBQUMrRyxLQUFMLENBQVd5TyxLQUFLLEdBQUdMLFFBQW5CLENBQUQsRUFBK0IsS0FBS3ZVLEtBQUwsQ0FBVzhLLFlBQTFDLENBSlQsQ0FBUDtBQU1EO0FBRUQ7Ozs7Ozs7Ozs7O3lDQVFxQjVHLEMsRUFBR0MsQyxFQUFHO0FBQ3pCLGNBQVEsS0FBS3dPLHVCQUFiO0FBQ0UsYUFBSy9ILDRDQUFHLENBQUNDLFdBQVQ7QUFDQSxhQUFLRCw0Q0FBRyxDQUFDd0MsVUFBVDtBQUNBLGFBQUt4Qyw0Q0FBRyxDQUFDbUUsS0FBVDtBQUNBLGFBQUtuRSw0Q0FBRyxDQUFDb0UsS0FBVDtBQUNBLGFBQUtwRSw0Q0FBRyxDQUFDc0UsSUFBVDtBQUNFLGlCQUFPLEtBQUtvRSxZQUFMLElBQXFCLEtBQUtnQyxnQkFBTCxDQUFzQnBSLENBQXRCLEVBQXlCQyxDQUF6QixDQUE1Qjs7QUFDRixhQUFLeUcsNENBQUcsQ0FBQ2dFLElBQVQ7QUFDRSxpQkFBUTFLLENBQUMsR0FBRyxLQUFLK08sTUFBVCxHQUFrQixLQUFLUixhQUFMLENBQW1CeFEsRUFBckMsSUFBMkNrQyxDQUFDLEdBQUcsS0FBSytPLE1BQVQsR0FBa0IsS0FBS1QsYUFBTCxDQUFtQnRRLEVBQWpGLElBQ0orQixDQUFDLEdBQUcsS0FBSytPLE1BQVQsR0FBa0IsS0FBS1IsYUFBTCxDQUFtQnhRLEVBQXJDLElBQTJDa0MsQ0FBQyxHQUFHLEtBQUsrTyxNQUFULEdBQWtCLEtBQUtULGFBQUwsQ0FBbUJwUSxFQUQ1RSxJQUVKNkIsQ0FBQyxHQUFHLEtBQUsrTyxNQUFULEdBQWtCLEtBQUtSLGFBQUwsQ0FBbUJyUSxFQUFyQyxJQUEyQytCLENBQUMsR0FBRyxLQUFLK08sTUFBVCxHQUFrQixLQUFLVCxhQUFMLENBQW1CdFEsRUFGNUUsSUFHSitCLENBQUMsR0FBRyxLQUFLK08sTUFBVCxHQUFrQixLQUFLUixhQUFMLENBQW1CclEsRUFBckMsSUFBMkMrQixDQUFDLEdBQUcsS0FBSytPLE1BQVQsR0FBa0IsS0FBS1QsYUFBTCxDQUFtQnBRLEVBSG5GOztBQUlGLGFBQUt1SSw0Q0FBRyxDQUFDdUUsZUFBVDtBQUNFLGlCQUFPaEwsQ0FBQyxHQUFHLEtBQUsrTyxNQUFULEdBQWtCLEtBQUtULGFBQUwsQ0FBbUJ0USxFQUFyQyxJQUEyQ2dDLENBQUMsR0FBRyxLQUFLK08sTUFBVCxHQUFrQixLQUFLVCxhQUFMLENBQW1CcFEsRUFBdkY7O0FBQ0YsYUFBS3VJLDRDQUFHLENBQUN5RSxhQUFUO0FBQ0UsaUJBQU9uTCxDQUFDLEdBQUcsS0FBSytPLE1BQVQsR0FBa0IsS0FBS1IsYUFBTCxDQUFtQnhRLEVBQXJDLElBQTJDaUMsQ0FBQyxHQUFHLEtBQUsrTyxNQUFULEdBQWtCLEtBQUtSLGFBQUwsQ0FBbUJyUSxFQUF2Rjs7QUFDRjtBQUNFLGlCQUFPLEtBQVA7QUFqQko7QUFtQkQ7QUFFRDs7Ozs7Ozs7OzJDQU11QjtBQUNyQixVQUFJLEtBQUt3USxpQkFBTCxLQUEyQixJQUEvQixFQUFxQztBQUNuQyxhQUFLQSxpQkFBTCxHQUF5QixLQUFLNVMsS0FBTCxDQUFXdVYsZUFBWCxFQUF6QjtBQUNEOztBQUVELGFBQU8sS0FBSzNDLGlCQUFMLENBQXVCalIsS0FBdkIsRUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O3FDQVFpQnVDLEMsRUFBR0MsQyxFQUFHO0FBQ3JCLGFBQU9ELENBQUMsR0FBRyxLQUFLK08sTUFBVCxHQUFrQixLQUFLUixhQUFMLENBQW1CeFEsRUFBckMsSUFDTGlDLENBQUMsR0FBRyxLQUFLK08sTUFBVCxHQUFrQixLQUFLUixhQUFMLENBQW1CclEsRUFEaEMsSUFFTCtCLENBQUMsR0FBRyxLQUFLK08sTUFBVCxHQUFrQixLQUFLVCxhQUFMLENBQW1CdFEsRUFGaEMsSUFHTGdDLENBQUMsR0FBRyxLQUFLK08sTUFBVCxHQUFrQixLQUFLVCxhQUFMLENBQW1CcFEsRUFIdkM7QUFJRDs7Ozs7O0FBR1lpUSxrRUFBZixFOzs7Ozs7Ozs7Ozs7QUM1MEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0lBYU1rRCxLOzs7QUFFSixtQkFBYztBQUFBOztBQUNaLFNBQUs5VCxVQUFMLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFsQjtBQUNBLFNBQUtjLE9BQUwsR0FBZSxDQUFmO0FBQ0Q7QUFFRDs7Ozs7Ozs2QkFHU3hDLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGFBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs4QkFHVTZCLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7c0NBR2tCZSxDLEVBQUdELEMsRUFBRztBQUN0QkMsT0FBQyxHQUFHQSxDQUFDLEdBQUcsS0FBS0osT0FBYjtBQUNBRyxPQUFDLEdBQUdBLENBQUMsR0FBRyxLQUFLSCxPQUFiO0FBRUEsVUFBTXNFLFFBQVEsR0FBRyxLQUFLakYsTUFBTCxDQUFZMFIsV0FBWixDQUF3QjNRLENBQXhCLEVBQTJCRCxDQUEzQixFQUE4QixLQUFLSCxPQUFuQyxDQUFqQjs7QUFFQSxVQUFJc0UsUUFBUSxJQUFJLENBQWhCLEVBQW1CO0FBQUEsb0NBQ0osS0FBS2pGLE1BQUwsQ0FBWTJSLFVBQVosQ0FBdUI1USxDQUF2QixFQUEwQkQsQ0FBMUIsQ0FESTtBQUFBO0FBQUEsWUFDWnVCLENBRFk7QUFBQSxZQUNUQyxDQURTOztBQUVqQixZQUFJaUgsS0FBSyxHQUFHLEtBQUtwTCxLQUFMLENBQVcyTix5QkFBWCxDQUFxQ3pKLENBQXJDLEVBQXdDQyxDQUF4QyxDQUFaOztBQUVBLFlBQUkyQyxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNoQixpQkFBTytNLDhEQUFXLENBQUN6SSxLQUFELEVBQVEsS0FBSzFKLFVBQWIsRUFBeUJvRixRQUF6QixDQUFsQjtBQUNEOztBQUVELGVBQU9zRSxLQUFQO0FBQ0Q7O0FBRUQsYUFBTyxLQUFLMUosVUFBTCxDQUFnQkMsS0FBaEIsRUFBUDtBQUNEOzs7Ozs7QUFHWTZULG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQzlEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFFQTs7Ozs7OztJQU1NeFIsWTs7Ozs7QUFFSjs7Ozs7Ozs7QUFRQSx3QkFBWXlSLElBQVosRUFBa0M7QUFBQSxRQUFoQkMsVUFBZ0IsdUVBQUgsQ0FBRzs7QUFBQTs7QUFDaEMsUUFBTXJTLE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBTWdCLE9BQU8sR0FBRyxFQUFoQjs7QUFFQSxTQUFLLElBQUlKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd3UixJQUFwQixFQUEwQnhSLENBQUMsRUFBM0IsRUFBK0I7QUFDN0JaLFlBQU0sQ0FBQ3NTLElBQVAsQ0FBWSxJQUFJekosS0FBSixDQUFVdUosSUFBVixFQUFnQnhHLElBQWhCLENBQXFCLENBQXJCLENBQVo7QUFDRDs7QUFFRCxTQUFLLElBQUloTCxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHeVIsVUFBcEIsRUFBZ0N6UixFQUFDLEVBQWpDLEVBQXFDO0FBQ25DSSxhQUFPLENBQUNzUixJQUFSLENBQWEsSUFBSXpKLEtBQUosQ0FBVXVKLElBQVYsRUFBZ0J4RyxJQUFoQixDQUFxQixDQUFyQixDQUFiO0FBQ0Q7O0FBVitCLHFGQVkxQjVMLE1BWjBCLEVBWWxCZ0IsT0Faa0I7QUFhakM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFZU3VSLEssRUFBT0MsTyxFQUFTO0FBQ3ZCLFVBQU1KLElBQUksR0FBRyxLQUFLcFMsTUFBTCxDQUFZUSxNQUF6Qjs7QUFFQSxXQUFLLElBQUlpUyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxJQUFwQixFQUEwQkssQ0FBQyxFQUEzQixFQUErQjtBQUM3QixhQUFLLElBQUk3UixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHd1IsSUFBcEIsRUFBMEJ4UixDQUFDLEVBQTNCLEVBQStCO0FBQzdCLGVBQUtaLE1BQUwsQ0FBWVksQ0FBWixFQUFlNlIsQ0FBZixLQUFxQkYsS0FBSyxDQUFDM1IsQ0FBRCxDQUFMLEdBQVcyUixLQUFLLENBQUNFLENBQUQsQ0FBckM7QUFDRDs7QUFFRCxhQUFLLElBQUk3UixHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHLEtBQUtJLE9BQUwsQ0FBYVIsTUFBakMsRUFBeUNJLEdBQUMsRUFBMUMsRUFBOEM7QUFDNUMsZUFBS0ksT0FBTCxDQUFhSixHQUFiLEVBQWdCNlIsQ0FBaEIsS0FBc0JELE9BQU8sQ0FBQzVSLEdBQUQsQ0FBUCxHQUFhMlIsS0FBSyxDQUFDRSxDQUFELENBQXhDO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPLElBQVA7QUFDRDs7OztFQW5Ed0JDLCtDOztBQXNEWi9SLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVFBLFNBQVNnUyxJQUFULENBQWNDLEtBQWQsRUFBcUJDLElBQXJCLEVBQTJCQyxJQUEzQixFQUFpQ0MsSUFBakMsRUFBdUNDLElBQXZDLEVBQTZDO0FBQzNDLE1BQUlKLEtBQUssQ0FBQ0MsSUFBRCxDQUFMLENBQVlDLElBQVosTUFBc0JGLEtBQUssQ0FBQ0csSUFBRCxDQUFMLENBQVlDLElBQVosQ0FBMUIsRUFBNkM7QUFDM0NKLFNBQUssQ0FBQ0MsSUFBRCxDQUFMLENBQVlDLElBQVosS0FBcUJGLEtBQUssQ0FBQ0csSUFBRCxDQUFMLENBQVlDLElBQVosQ0FBckI7QUFDQUosU0FBSyxDQUFDRyxJQUFELENBQUwsQ0FBWUMsSUFBWixJQUFvQkosS0FBSyxDQUFDQyxJQUFELENBQUwsQ0FBWUMsSUFBWixJQUFvQkYsS0FBSyxDQUFDRyxJQUFELENBQUwsQ0FBWUMsSUFBWixDQUF4QztBQUNBSixTQUFLLENBQUNDLElBQUQsQ0FBTCxDQUFZQyxJQUFaLEtBQXFCRixLQUFLLENBQUNHLElBQUQsQ0FBTCxDQUFZQyxJQUFaLENBQXJCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTQyxVQUFULEdBQXNCO0FBQ3BCLFFBQU0sSUFBSXBOLG9FQUFKLENBQXFCLG9EQUFyQixDQUFOO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlDTTZNLE07OztBQUVKOzs7OztBQUtBLGtCQUFZMVMsTUFBWixFQUFvQmdCLE9BQXBCLEVBQTZCO0FBQUE7O0FBQzNCLFNBQUtrUyxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtsVCxNQUFMLEdBQWNBLE1BQU0sQ0FBQ0QsR0FBUCxDQUFXLFVBQUFvVCxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDN1UsS0FBSixFQUFKO0FBQUEsS0FBZCxDQUFkO0FBQ0EsU0FBSzBDLE9BQUwsR0FBZUEsT0FBTyxDQUFDakIsR0FBUixDQUFZLFVBQUFxVCxNQUFNO0FBQUEsYUFBSUEsTUFBTSxDQUFDOVUsS0FBUCxFQUFKO0FBQUEsS0FBbEIsQ0FBZjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs0QkFLUTtBQUNOLFVBQUksS0FBSzRVLE1BQVQsRUFBaUI7QUFDZixlQUFPLElBQVA7QUFDRDs7QUFFRCxXQUFLRyxRQUFMO0FBRUEsVUFBTXJULE1BQU0sR0FBRyxLQUFLQSxNQUFwQjtBQUNBLFVBQU1nQixPQUFPLEdBQUcsS0FBS0EsT0FBckI7QUFDQSxVQUFNb1IsSUFBSSxHQUFHcFMsTUFBTSxDQUFDUSxNQUFwQjtBQUNBLFVBQU02UixVQUFVLEdBQUdyUixPQUFPLENBQUNSLE1BQTNCO0FBQ0EsVUFBTThTLElBQUksR0FBRyxJQUFJekssS0FBSixDQUFVdUosSUFBVixFQUFnQnhHLElBQWhCLENBQXFCLENBQXJCLENBQWI7QUFDQSxVQUFNMkgsSUFBSSxHQUFHLElBQUkxSyxLQUFKLENBQVV1SixJQUFWLEVBQWdCeEcsSUFBaEIsQ0FBcUIsQ0FBckIsQ0FBYjtBQUNBLFVBQU00SCxNQUFNLEdBQUcsSUFBSTNLLEtBQUosQ0FBVXVKLElBQVYsRUFBZ0J4RyxJQUFoQixDQUFxQixDQUFyQixDQUFmO0FBQ0EsVUFBSTZILEdBQUcsR0FBRyxDQUFWO0FBQ0EsVUFBSU4sR0FBRyxHQUFHLENBQVY7O0FBRUEsV0FBSyxJQUFJdlMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3dSLElBQXBCLEVBQTBCeFIsQ0FBQyxFQUEzQixFQUErQjtBQUM3QixZQUFJdUssR0FBRyxHQUFHLENBQVY7O0FBRUEsYUFBSyxJQUFJc0gsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0wsSUFBcEIsRUFBMEJLLENBQUMsRUFBM0IsRUFBK0I7QUFDN0IsY0FBSWUsTUFBTSxDQUFDZixDQUFELENBQU4sS0FBYyxDQUFsQixFQUFxQjtBQUNuQixpQkFBSyxJQUFJaUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3RCLElBQXBCLEVBQTBCc0IsQ0FBQyxFQUEzQixFQUErQjtBQUM3QixrQkFBSUYsTUFBTSxDQUFDRSxDQUFELENBQU4sS0FBYyxDQUFsQixFQUFxQjtBQUNuQixvQkFBSUYsTUFBTSxDQUFDRSxDQUFELENBQU4sR0FBWSxDQUFoQixFQUFtQjtBQUNqQlQsNEJBQVU7QUFDWDtBQUNGLGVBSkQsTUFJTyxJQUFJbFgsSUFBSSxDQUFDNEgsR0FBTCxDQUFTM0QsTUFBTSxDQUFDeVMsQ0FBRCxDQUFOLENBQVVpQixDQUFWLENBQVQsS0FBMEJ2SSxHQUE5QixFQUFtQztBQUN4Q0EsbUJBQUcsR0FBR3BQLElBQUksQ0FBQzRILEdBQUwsQ0FBUzNELE1BQU0sQ0FBQ3lTLENBQUQsQ0FBTixDQUFVaUIsQ0FBVixDQUFULENBQU47QUFDQVAsbUJBQUcsR0FBR1YsQ0FBTjtBQUNBZ0IsbUJBQUcsR0FBR0MsQ0FBTjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVERixjQUFNLENBQUNDLEdBQUQsQ0FBTjs7QUFFQSxZQUFJTixHQUFHLEtBQUtNLEdBQVosRUFBaUI7QUFDZixlQUFLLElBQUlDLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUd0QixJQUFwQixFQUEwQnNCLEVBQUMsRUFBM0IsRUFBK0I7QUFDN0JmLGdCQUFJLENBQUMzUyxNQUFELEVBQVNtVCxHQUFULEVBQWNPLEVBQWQsRUFBaUJELEdBQWpCLEVBQXNCQyxFQUF0QixDQUFKO0FBQ0Q7O0FBRUQsZUFBSyxJQUFJQSxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHckIsVUFBcEIsRUFBZ0NxQixHQUFDLEVBQWpDLEVBQXFDO0FBQ25DZixnQkFBSSxDQUFDM1IsT0FBRCxFQUFVMFMsR0FBVixFQUFhUCxHQUFiLEVBQWtCTyxHQUFsQixFQUFxQkQsR0FBckIsQ0FBSjtBQUNEO0FBQ0Y7O0FBRURGLFlBQUksQ0FBQzNTLENBQUQsQ0FBSixHQUFVdVMsR0FBVjtBQUNBRyxZQUFJLENBQUMxUyxDQUFELENBQUosR0FBVTZTLEdBQVY7O0FBRUEsWUFBSXpULE1BQU0sQ0FBQ3lULEdBQUQsQ0FBTixDQUFZQSxHQUFaLE1BQXFCLENBQXpCLEVBQTRCO0FBQzFCUixvQkFBVTtBQUNYOztBQUVELFlBQUl2VixLQUFLLEdBQUcyRCxtRUFBcUIsQ0FBQ3JCLE1BQU0sQ0FBQ3lULEdBQUQsQ0FBTixDQUFZQSxHQUFaLENBQUQsQ0FBakM7QUFDQXpULGNBQU0sQ0FBQ3lULEdBQUQsQ0FBTixDQUFZQSxHQUFaLElBQW1CLENBQW5COztBQUVBLGFBQUssSUFBSWhCLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdMLElBQXBCLEVBQTBCSyxFQUFDLEVBQTNCLEVBQStCO0FBQzdCelMsZ0JBQU0sQ0FBQ3lULEdBQUQsQ0FBTixDQUFZaEIsRUFBWixLQUFrQi9VLEtBQWxCO0FBQ0Q7O0FBRUQsYUFBSyxJQUFJK1UsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR0osVUFBcEIsRUFBZ0NJLEdBQUMsRUFBakMsRUFBcUM7QUFDbkN6UixpQkFBTyxDQUFDeVIsR0FBRCxDQUFQLENBQVdnQixHQUFYLEtBQW1CL1YsS0FBbkI7QUFDRDs7QUFFRCxhQUFLLElBQUkrVSxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHTCxJQUFwQixFQUEwQkssR0FBQyxFQUEzQixFQUErQjtBQUM3QixjQUFJQSxHQUFDLEtBQUtnQixHQUFWLEVBQWU7QUFDYixnQkFBSS9WLE1BQUssR0FBR3NDLE1BQU0sQ0FBQ3lTLEdBQUQsQ0FBTixDQUFVZ0IsR0FBVixDQUFaO0FBQ0F6VCxrQkFBTSxDQUFDeVMsR0FBRCxDQUFOLENBQVVnQixHQUFWLElBQWlCLENBQWpCOztBQUVBLGlCQUFLLElBQUlDLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUd0QixJQUFwQixFQUEwQnNCLEdBQUMsRUFBM0IsRUFBK0I7QUFDN0IxVCxvQkFBTSxDQUFDeVMsR0FBRCxDQUFOLENBQVVpQixHQUFWLEtBQWdCaFcsTUFBSyxHQUFHc0MsTUFBTSxDQUFDeVQsR0FBRCxDQUFOLENBQVlDLEdBQVosQ0FBeEI7QUFDRDs7QUFFRCxpQkFBSyxJQUFJQSxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHckIsVUFBcEIsRUFBZ0NxQixHQUFDLEVBQWpDLEVBQXFDO0FBQ25DMVMscUJBQU8sQ0FBQzBTLEdBQUQsQ0FBUCxDQUFXakIsR0FBWCxLQUFpQi9VLE1BQUssR0FBR3NELE9BQU8sQ0FBQzBTLEdBQUQsQ0FBUCxDQUFXRCxHQUFYLENBQXpCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsV0FBSyxJQUFJaEIsR0FBQyxHQUFHTCxJQUFJLEdBQUcsQ0FBcEIsRUFBdUJLLEdBQUMsSUFBSSxDQUE1QixFQUErQkEsR0FBQyxFQUFoQyxFQUFvQztBQUNsQyxZQUFJYSxJQUFJLENBQUNiLEdBQUQsQ0FBSixLQUFZYyxJQUFJLENBQUNkLEdBQUQsQ0FBcEIsRUFBeUI7QUFDdkIsZUFBSyxJQUFJN1IsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR3dSLElBQXBCLEVBQTBCeFIsRUFBQyxFQUEzQixFQUErQjtBQUM3QitSLGdCQUFJLENBQUMzUyxNQUFELEVBQVNZLEVBQVQsRUFBWTJTLElBQUksQ0FBQ2QsR0FBRCxDQUFoQixFQUFxQjdSLEVBQXJCLEVBQXdCMFMsSUFBSSxDQUFDYixHQUFELENBQTVCLENBQUo7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsV0FBS1MsTUFBTCxHQUFjLElBQWQ7QUFFQSxhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7OztpQ0FLYTtBQUNYLGFBQU8sS0FBS2xTLE9BQUwsQ0FBYWpCLEdBQWIsQ0FBaUIsVUFBQXFULE1BQU07QUFBQSxlQUFJQSxNQUFNLENBQUM5VSxLQUFQLEVBQUo7QUFBQSxPQUF2QixDQUFQO0FBQ0Q7QUFHRDs7Ozs7Ozs7K0JBS1c7QUFDVCxVQUFNOFQsSUFBSSxHQUFHLEtBQUtwUyxNQUFMLENBQVlRLE1BQXpCO0FBRUEsV0FBS1IsTUFBTCxDQUFZK0ksT0FBWixDQUFvQixVQUFBb0ssR0FBRyxFQUFJO0FBQ3pCLFlBQUlBLEdBQUcsQ0FBQzNTLE1BQUosS0FBZTRSLElBQW5CLEVBQXlCO0FBQ3ZCLGdCQUFNLElBQUkxTSxLQUFKLENBQVUsdUJBQVYsQ0FBTjtBQUNEO0FBQ0YsT0FKRDtBQU1BLFdBQUsxRSxPQUFMLENBQWErSCxPQUFiLENBQXFCLFVBQUFxSyxNQUFNLEVBQUk7QUFDN0IsWUFBSUEsTUFBTSxDQUFDNVMsTUFBUCxLQUFrQjRSLElBQXRCLEVBQTRCO0FBQzFCLGdCQUFNLElBQUkxTSxLQUFKLENBQVUsZ0RBQVYsQ0FBTjtBQUNEO0FBQ0YsT0FKRDtBQU1BLGFBQU8sSUFBUDtBQUNEOzs7Ozs7QUFHWWdOLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ25OQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7QUFTQSxTQUFTclIscUJBQVQsQ0FBK0I5QixDQUEvQixFQUFrQztBQUNoQyxNQUFNb1UsSUFBSSxHQUFHcFUsQ0FBQyxHQUFHLENBQUosR0FBUSxDQUFDLENBQVQsR0FBYSxDQUExQjs7QUFFQSxNQUFJb1UsSUFBSSxHQUFHcFUsQ0FBUCxJQUFZM0Qsa0RBQWhCLEVBQXlCO0FBQ3ZCLFdBQU8sSUFBSTJELENBQVg7QUFDRDs7QUFFRCxTQUFPb1UsSUFBSSxHQUFHL1gsa0RBQWQ7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7QUFVQSxTQUFTNFUsV0FBVCxDQUFxQm9ELE1BQXJCLEVBQTZCQyxPQUE3QixFQUFzQ0MsTUFBdEMsRUFBOEQ7QUFBQSxNQUFoQkMsT0FBZ0IsdUVBQU4sSUFBTTs7QUFDNUQsTUFBSUEsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCQSxXQUFPLEdBQUcsSUFBSUYsT0FBZDtBQUNEOztBQUVELFNBQU9ELE1BQU0sQ0FBQzdULEdBQVAsQ0FBVyxVQUFDaUosT0FBRCxFQUFVcEksQ0FBVjtBQUFBLFdBQWdCN0UsSUFBSSxDQUFDK0csS0FBTCxDQUFXa0csT0FBTyxHQUFHNkssT0FBVixHQUFvQkMsTUFBTSxDQUFDbFQsQ0FBRCxDQUFOLEdBQVltVCxPQUEzQyxDQUFoQjtBQUFBLEdBQVgsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9BLFNBQVNDLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQTBCO0FBQ3hCLFNBQU8sTUFBTUEsT0FBTixHQUFnQmxZLElBQUksQ0FBQ0MsRUFBNUI7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTaUgsT0FBVCxDQUFpQmlSLE9BQWpCLEVBQTBCO0FBQ3hCLFNBQU9uWSxJQUFJLENBQUNDLEVBQUwsR0FBVWtZLE9BQVYsR0FBb0IsR0FBM0I7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0REOzs7Ozs7Ozs7SUFTTXpSLFE7OztBQUNKOzs7Ozs7O0FBT0Esb0JBQVk3RCxFQUFaLEVBQWdCRSxFQUFoQixFQUFvQkMsRUFBcEIsRUFBd0JDLEVBQXhCLEVBQTRCO0FBQUE7O0FBQzFCOzs7OztBQUtBLFNBQUtKLEVBQUwsR0FBVUEsRUFBVjtBQUVBOzs7OztBQUlBLFNBQUtFLEVBQUwsR0FBVUEsRUFBVjtBQUVBOzs7OztBQUlBLFNBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUVBOzs7OztBQUlBLFNBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs0QkFLUTtBQUNOLGFBQU8sS0FBS0QsRUFBTCxHQUFVLEtBQUtILEVBQWYsR0FBb0IsQ0FBM0I7QUFDRDtBQUVEOzs7Ozs7Ozs2QkFLUztBQUNQLGFBQU8sS0FBS0ksRUFBTCxHQUFVLEtBQUtGLEVBQWYsR0FBb0IsQ0FBM0I7QUFDRDtBQUVEOzs7Ozs7OzsyQkFLTztBQUNMLGFBQU8sS0FBS2lELEtBQUwsS0FBZSxLQUFLRSxNQUFMLEVBQXRCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs2QkFPUzFDLEMsRUFBR0QsQyxFQUFHO0FBQ2IsYUFBT0MsQ0FBQyxJQUFJLEtBQUtYLEVBQVYsSUFBZ0JXLENBQUMsSUFBSSxLQUFLUixFQUExQixJQUFnQ08sQ0FBQyxJQUFJLEtBQUtSLEVBQTFDLElBQWdEUSxDQUFDLElBQUksS0FBS04sRUFBakU7QUFDRDtBQUVEOzs7Ozs7Ozs7OzJCQU9PTyxDLEVBQUdELEMsRUFBRztBQUNYLFdBQUtWLEVBQUwsR0FBVTdDLElBQUksQ0FBQ3FQLEdBQUwsQ0FBUyxLQUFLeE0sRUFBZCxFQUFrQlcsQ0FBbEIsQ0FBVjtBQUNBLFdBQUtSLEVBQUwsR0FBVWhELElBQUksQ0FBQ29QLEdBQUwsQ0FBUyxLQUFLcE0sRUFBZCxFQUFrQlEsQ0FBbEIsQ0FBVjtBQUNBLFdBQUtULEVBQUwsR0FBVS9DLElBQUksQ0FBQ3FQLEdBQUwsQ0FBUyxLQUFLdE0sRUFBZCxFQUFrQlEsQ0FBbEIsQ0FBVjtBQUNBLFdBQUtOLEVBQUwsR0FBVWpELElBQUksQ0FBQ29QLEdBQUwsQ0FBUyxLQUFLbk0sRUFBZCxFQUFrQk0sQ0FBbEIsQ0FBVjtBQUNBLGFBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OzRCQUtRO0FBQ04sYUFBTyxJQUFJLEtBQUthLFdBQVQsQ0FBcUIsS0FBS3ZCLEVBQTFCLEVBQThCLEtBQUtFLEVBQW5DLEVBQXVDLEtBQUtDLEVBQTVDLEVBQWdELEtBQUtDLEVBQXJELENBQVA7QUFDRDtBQUVEOzs7Ozs7OztnQ0FLWTtBQUNWLFdBQUtKLEVBQUwsR0FBVTdDLElBQUksQ0FBQzhDLEtBQUwsQ0FBVyxLQUFLRCxFQUFMLEdBQVUsR0FBckIsQ0FBVjtBQUNBLFdBQUtFLEVBQUwsR0FBVS9DLElBQUksQ0FBQzhDLEtBQUwsQ0FBVyxLQUFLQyxFQUFMLEdBQVUsR0FBckIsQ0FBVjtBQUNBLFdBQUtDLEVBQUwsR0FBVWhELElBQUksQ0FBQzRHLElBQUwsQ0FBVSxLQUFLNUQsRUFBTCxHQUFVLEdBQXBCLENBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVVqRCxJQUFJLENBQUM0RyxJQUFMLENBQVUsS0FBSzNELEVBQUwsR0FBVSxHQUFwQixDQUFWO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OzBCQU1NdEIsTSxFQUFPO0FBQ1gsV0FBS2tCLEVBQUwsR0FBVTdDLElBQUksQ0FBQytHLEtBQUwsQ0FBVyxLQUFLbEUsRUFBTCxHQUFVbEIsTUFBckIsQ0FBVjtBQUNBLFdBQUtvQixFQUFMLEdBQVUvQyxJQUFJLENBQUMrRyxLQUFMLENBQVcsS0FBS2hFLEVBQUwsR0FBVXBCLE1BQXJCLENBQVY7QUFDQSxXQUFLcUIsRUFBTCxHQUFVaEQsSUFBSSxDQUFDK0csS0FBTCxDQUFXLEtBQUsvRCxFQUFMLEdBQVVyQixNQUFyQixDQUFWO0FBQ0EsV0FBS3NCLEVBQUwsR0FBVWpELElBQUksQ0FBQytHLEtBQUwsQ0FBVyxLQUFLOUQsRUFBTCxHQUFVdEIsTUFBckIsQ0FBVjtBQUNBLGFBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OzRCQUtRO0FBQ04sVUFBSXFFLEtBQUssR0FBRyxLQUFLQSxLQUFMLEVBQVo7QUFBQSxVQUNJRSxNQUFNLEdBQUcsS0FBS0EsTUFBTCxFQURiO0FBRUEsV0FBS3JELEVBQUwsR0FBVSxDQUFWO0FBQ0EsV0FBS0UsRUFBTCxHQUFVLENBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVUsS0FBS0gsRUFBTCxHQUFVbUQsS0FBVixHQUFrQixDQUE1QjtBQUNBLFdBQUsvQyxFQUFMLEdBQVUsS0FBS0YsRUFBTCxHQUFVbUQsTUFBVixHQUFtQixDQUE3QjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7Ozs7QUFHWVEsdUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDckpBO0FBQUE7Ozs7Ozs7OztBQVNBLElBQU04RSxHQUFHLEdBQUc7QUFDVjs7O0FBR0F3QyxZQUFVLEVBQUUsQ0FKRjs7QUFNVjs7O0FBR0F3QixNQUFJLEVBQUUsQ0FUSTs7QUFXVjs7O0FBR0FDLFFBQU0sRUFBRSxDQWRFOztBQWdCVjs7O0FBR0FVLFFBQU0sRUFBRSxDQW5CRTs7QUFxQlY7OztBQUdBVCxNQUFJLEVBQUUsQ0F4Qkk7O0FBMEJWOzs7QUFHQWpFLGFBQVcsRUFBRSxDQTdCSDs7QUErQlY7OztBQUdBa0UsT0FBSyxFQUFFLENBbENHOztBQW9DVjs7O0FBR0FHLE1BQUksRUFBRSxFQXZDSTs7QUF5Q1Y7OztBQUdBRixPQUFLLEVBQUUsRUE1Q0c7O0FBOENWOzs7QUFHQUcsaUJBQWUsRUFBRSxFQWpEUDs7QUFtRFY7OztBQUdBRSxlQUFhLEVBQUUsRUF0REw7O0FBd0RWOzs7QUFHQUQsc0JBQW9CLEVBQUUsRUEzRFo7O0FBNkRWOzs7QUFHQUUsb0JBQWtCLEVBQUUsRUFoRVYsQ0FrRVY7O0FBbEVVLENBQVo7QUFxRWUxRSxrRUFBZixFIiwiZmlsZSI6ImxlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsZW5zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxlbnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsIi8qKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKi9cclxuY29uc3QgRVBTSUxPTiA9IDEuMGUtMTI7XHJcbi8qKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKi9cclxuY29uc3QgTUFYSU1VTV9WQUxVRSA9IDEuNzk3NjkzMTM0ODYyMzE1NzBFKzMwODtcclxuXHJcbi8qKlxyXG4gKiBQaS8yXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBNX1BJMiA9IE1hdGguUEkgLyAyO1xyXG5cclxuLyoqXHJcbiAqIFBpICogMlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cclxuY29uc3QgTV8yUEkgPSBNYXRoLlBJICogMjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgRVBTSUxPTixcclxuICBNQVhJTVVNX1ZBTFVFLFxyXG4gIE1fUEkyLFxyXG4gIE1fMlBJXHJcbn07IiwiaW1wb3J0ICogYXMgZGlzdG9ydGVyIGZyb20gXCIuL2Rpc3RvcnRlclwiO1xyXG5pbXBvcnQgKiBhcyByZXNhbXBsZXIgZnJvbSBcIi4vcmVzYW1wbGVyXCI7XHJcbmltcG9ydCBmaWx0ZXJQcmVzZXRzIGZyb20gJy4vZmlsdGVyLXByZXNldHMnO1xyXG5cclxubGV0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gIGJlc3RGaXQ6IGZhbHNlLFxyXG4gIGZpbHRlcjogZmlsdGVyUHJlc2V0cy5ST0JJRE9VWCxcclxuICByZXNhbXBsZTogdHJ1ZSxcclxuICBhc3luYzogdHJ1ZSxcclxuICBvdXRwdXRTY2FsaW5nOiAxXHJcbn07XHJcblxyXG4vKipcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBuYW1lIGRpc3RvcnRcclxuICogQG1lbWJlck9mIGxlbnNcclxuICogQHZhcmlhdGlvbiAyXHJcbiAqXHJcbiAqIEBwYXJhbSB7SW1hZ2VJbnRlcmZhY2V9IGltYWdlXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbkludGVyZmFjZX0gZGlzdG9ydGlvblxyXG4gKiBAcGFyYW0ge0Rpc3RvcnRpb25PcHRpb25zfSBvcHRpb25zXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtJbWFnZUludGVyZmFjZXxQcm9taXNlPEltYWdlSW50ZXJmYWNlPn1cclxuICovXHJcblxyXG4vKipcclxuICogUGVyZm9ybXMgZGlzdG9ydGlvbiBvZiBpbWFnZVxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKiBAcGFyYW0ge0ltYWdlSW50ZXJmYWNlfSBpbWFnZVxyXG4gKiBAcGFyYW0ge2xlbnMuZGlzdG9ydHN8bGVuc35kaXN0b3J0aW9uUmVzb2x2ZXJ9IGRpc3RvcnRpb25cclxuICogQHBhcmFtIHthcnJheX0gYXJnc1xyXG4gKiBAcGFyYW0ge0Rpc3RvcnRpb25PcHRpb25zfSBbb3B0aW9uc11cclxuICpcclxuICogQHJldHVybnMge0ltYWdlSW50ZXJmYWNlfFByb21pc2U8SW1hZ2VJbnRlcmZhY2U+fVxyXG4gKi9cclxuZnVuY3Rpb24gZGlzdG9ydChpbWFnZSwgZGlzdG9ydGlvbiwgYXJncywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgaWYgKHR5cGVvZiBkaXN0b3J0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBkaXN0b3J0aW9uICA9IGRpc3RvcnRpb24oYXJncywgaW1hZ2UpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvcHRpb25zICAgICA9IGFyZ3MgfHwge307XHJcbiAgfVxyXG5cclxuICBvcHRpb25zID0gbWFrZU9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gIGlmIChkaXN0b3J0aW9uLmZvcmNlQmVzdEZpdCkge1xyXG4gICAgb3B0aW9ucy5iZXN0Rml0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGxldCBkaXN0b3J0ZWQgPSBzeW5jKFxyXG4gICAgbWFrZURpc3RvcnRlcihcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGRpc3RvcnRpb24sXHJcbiAgICAgIG1ha2VSZXNhbXBsZXIoaW1hZ2UsIGRpc3RvcnRpb24sIG9wdGlvbnMpLFxyXG4gICAgICBvcHRpb25zXHJcbiAgICApLmRpc3RvcnQoKVxyXG4gICk7XHJcblxyXG4gIGlmIChvcHRpb25zLnN1cGVyc2FtcGxlICYmIG9wdGlvbnMuc3VwZXJzYW1wbGUgIT09IDEpIHtcclxuICAgIHJldHVybiBzY2FsZVN1cGVyc2FtcGxlZChkaXN0b3J0ZWQsIDEgLyBvcHRpb25zLnN1cGVyc2FtcGxlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkaXN0b3J0ZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTeW5jIEltYWdlSW50ZXJmYWNlIGludGVybmFsIGRhdGEgc3RvcmFnZSB3aXRoIGltYWdlIG9iamVjdC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZXxQcm9taXNlPEltYWdlSW50ZXJmYWNlPn0gZGlzdG9ydGVkXHJcbiAqIEByZXR1cm5zIHtJbWFnZUludGVyZmFjZXxQcm9taXNlPEltYWdlSW50ZXJmYWNlPn1cclxuICovXHJcbmZ1bmN0aW9uIHN5bmMoZGlzdG9ydGVkKSB7XHJcbiAgaWYgKGRpc3RvcnRlZCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgIHJldHVybiBkaXN0b3J0ZWQudGhlbihkaXN0b3J0ZWQgPT4gc3luYyhkaXN0b3J0ZWQpKTtcclxuICB9XHJcblxyXG4gIGlmICgnc3luYycgaW4gZGlzdG9ydGVkICYmIHR5cGVvZiBkaXN0b3J0ZWQuc3luYyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIGRpc3RvcnRlZC5zeW5jKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGlzdG9ydGVkO1xyXG59XHJcblxyXG4vKipcclxuICogU2NhbGVzIHN1cGVyc2FtcGxlZCBpbWFnZSBiYWNrIHRvIG5vcm1hbCBzaXplLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0ltYWdlSW50ZXJmYWNlfFByb21pc2U8SW1hZ2VJbnRlcmZhY2U+fSBzdXBlcnNhbXBsZWRcclxuICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlXHJcbiAqIEByZXR1cm5zIHtJbWFnZUludGVyZmFjZXxQcm9taXNlPEltYWdlSW50ZXJmYWNlPn1cclxuICovXHJcbmZ1bmN0aW9uIHNjYWxlU3VwZXJzYW1wbGVkKHN1cGVyc2FtcGxlZCwgc2NhbGUpIHtcclxuICBpZiAoc3VwZXJzYW1wbGVkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgcmV0dXJuIHN1cGVyc2FtcGxlZC50aGVuKHN1cGVyc2FtcGxlZCA9PiBzY2FsZVN1cGVyc2FtcGxlZChzdXBlcnNhbXBsZWQsIHNjYWxlKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoJ3NjYWxlJyBpbiBzdXBlcnNhbXBsZWQgJiYgdHlwZW9mIHN1cGVyc2FtcGxlZC5zY2FsZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIHN1cGVyc2FtcGxlZC5zY2FsZShzY2FsZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUud2FybihgTWV0aG9kICdzY2FsZSgpJyBub3QgZm91bmQgaW4gaW1hZ2Ugb2JqZWN0LiBObyBzY2FsaW5nIHBlcmZvcm1lZC5gKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzdXBlcnNhbXBsZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyB2YWxpZCBvcHRpb25zIGZvciBkaXN0b3J0aW9uXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbk9wdGlvbnN9IG9wdGlvbnNcclxuICogQHJldHVybnMge0Rpc3RvcnRpb25PcHRpb25zfVxyXG4gKi9cclxuZnVuY3Rpb24gbWFrZU9wdGlvbnMob3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XHJcblxyXG4gIGlmIChvcHRpb25zLnN1cGVyc2FtcGxlKSB7XHJcbiAgICBvcHRpb25zLm91dHB1dFNjYWxpbmcgPSBvcHRpb25zLnN1cGVyc2FtcGxlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9wdGlvbnM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyBpbWFnZSBkaXN0b3J0ZXJcclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gaW1hZ2VcclxuICogQHBhcmFtIHtEaXN0b3J0aW9uSW50ZXJmYWNlfSBkaXN0b3J0aW9uXHJcbiAqIEBwYXJhbSB7UmVzYW1wbGVySW50ZXJmYWNlfSByZXNhbXBsZXJcclxuICogQHBhcmFtIHtEaXN0b3J0aW9uT3B0aW9uc30gb3B0aW9uc1xyXG4gKiBAcmV0dXJucyB7UmV2ZXJzZVBpeGVsTWFwcGluZ31cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VEaXN0b3J0ZXIoaW1hZ2UsIGRpc3RvcnRpb24sIHJlc2FtcGxlciwgb3B0aW9ucykge1xyXG4gIGNvbnN0IGRpc3QgPSBuZXcgZGlzdG9ydGVyLlJldmVyc2VQaXhlbE1hcHBpbmcoaW1hZ2UsIGRpc3RvcnRpb24sIHJlc2FtcGxlcik7XHJcbiAgZGlzdC5hc3luYyA9ICEhb3B0aW9ucy5hc3luYztcclxuICBkaXN0LmJlc3RGaXQgPSAhIW9wdGlvbnMuYmVzdEZpdDtcclxuXHJcbiAgaWYgKG9wdGlvbnMudmlld3BvcnQpIHtcclxuICAgIGRpc3Qudmlld3BvcnQgPSBvcHRpb25zLnZpZXdwb3J0O1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbnMub3V0cHV0U2NhbGluZykge1xyXG4gICAgZGlzdC5vdXRwdXRTY2FsaW5nID0gb3B0aW9ucy5vdXRwdXRTY2FsaW5nO1xyXG5cclxuICAgIGlmIChvcHRpb25zLnN1cGVyc2FtcGxlKSB7XHJcbiAgICAgIGRpc3Quc3VwZXJzYW1wbGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpc3Q7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyByZXNhbXBsZXJcclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gaW1hZ2VcclxuICogQHBhcmFtIHtEaXN0b3J0aW9uSW50ZXJmYWNlfSBkaXN0b3J0aW9uXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbk9wdGlvbnN9IG9wdGlvbnNcclxuICogQHJldHVybnMge1Jlc2FtcGxlckludGVyZmFjZX1cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VSZXNhbXBsZXIoaW1hZ2UsIGRpc3RvcnRpb24sIG9wdGlvbnMpIHtcclxuICBsZXQgcnNtO1xyXG5cclxuICBpZiAob3B0aW9ucy5yZXNhbXBsZXIpIHtcclxuICAgIHJzbSA9IG9wdGlvbnMucmVzYW1wbGVyO1xyXG4gIH0gZWxzZSBpZiAob3B0aW9ucy5yZXNhbXBsZSkge1xyXG4gICAgcnNtID0gbmV3IHJlc2FtcGxlci5FV0EobWFrZUZpbHRlcihvcHRpb25zKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJzbSA9IG5ldyByZXNhbXBsZXIuUG9pbnQoKTtcclxuICB9XHJcblxyXG4gIGlmIChvcHRpb25zLm1hdHRlQ29sb3IpIHtcclxuICAgIHJzbS5tYXR0ZUNvbG9yID0gb3B0aW9ucy5tYXR0ZUNvbG9yLnNsaWNlKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcnNtO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZXMgZmlsdGVyXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbk9wdGlvbnN9IG9wdGlvbnNcclxuICogQHJldHVybnMge0ZpbHRlckludGVyZmFjZX1cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VGaWx0ZXIob3B0aW9ucykge1xyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXN0b3J0OyIsIi8qKlxyXG4gKiBEaXN0b3J0ZXIgbmFtZXNwYWNlXHJcbiAqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5kaXN0b3J0ZXJcclxuICovXHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgUmV2ZXJzZVBpeGVsTWFwcGluZ30gZnJvbSAnLi9yZXZlcnNlLXBpeGVsLW1hcHBpbmcnOyIsIi8qKlxyXG4gKiBSZXZlcnNlIHBpeGVsIG1hcHBpbmcuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLmRpc3RvcnRlclxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy5pbWFnZW1hZ2ljay5vcmcvVXNhZ2UvZGlzdG9ydHMvI21hcHBpbmcgUmV2ZXJzZSBwaXhlbCBtYXBwaW5nIGRldGFpbHMgYXQgSW1hZ2VNYWdpY2sgZG9jc31cclxuICogQHR1dG9yaWFsIDAyLjAyLnJldmVyc2UtcGl4ZWwtbWFwcGluZ1xyXG4gKi9cclxuY2xhc3MgUmV2ZXJzZVBpeGVsTWFwcGluZyB7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gaW1hZ2UgSW1hZ2UgdG8gYmUgZGlzdG9ydGVkLlxyXG4gICAqIEBwYXJhbSB7RGlzdG9ydGlvbkludGVyZmFjZX0gZGlzdG9ydGlvbiBEaXN0b3J0aW9uIHRvIGJlIHBlcmZvcm1lZC5cclxuICAgKiBAcGFyYW0ge1Jlc2FtcGxlckludGVyZmFjZX0gcmVzYW1wbGVyIENvbG9yIHJlc2FtcGxlci5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihpbWFnZSwgZGlzdG9ydGlvbiwgcmVzYW1wbGVyKSB7XHJcbiAgICAvKipcclxuICAgICAqIEltYWdlIGJlaW5nIGRpc3RvcnRlZC5cclxuICAgICAqIEB0eXBlIHtJbWFnZUludGVyZmFjZX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzdG9ydGlvbi5cclxuICAgICAqIEB0eXBlIHtEaXN0b3J0aW9uSW50ZXJmYWNlfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1hcHBlciA9IGRpc3RvcnRpb247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNhbXBsZXIuXHJcbiAgICAgKiBAdHlwZSB7UmVzYW1wbGVySW50ZXJmYWNlfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc2FtcGxlciA9IHJlc2FtcGxlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHNldCB0byB0cnVlLCB0cnkgdG8gY2FsY3VsYXRlIGJlc3QgZml0IHZpZXdwb3J0LlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMuYmVzdEZpdCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGUgb3V0cHV0IHZpZXdwb3J0LlxyXG4gICAgICogQHR5cGUge2xlbnMuVmlld3BvcnR8bnVsbH1cclxuICAgICAqL1xyXG4gICAgdGhpcy52aWV3cG9ydCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSdW4gZGlzdG9ydGlvbiBhc3luYy5cclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB0aGlzLmFzeW5jID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBpbWFnZSBzY2FsaW5nLlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5vdXRwdXRTY2FsaW5nID0gMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3RvcnRzIGltYWdlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8SW1hZ2VJbnRlcmZhY2U+fEltYWdlSW50ZXJmYWNlfSBOZXcgaW5zdGFuY2Ugb2YgSW1hZ2VJbnRlcmZhY2Ugd2l0aCBkaXN0b3J0ZWQgaW1hZ2Ugb3IgUHJvbWlzZVxyXG4gICAqIHRoYXQgcmVzb2x2ZXMgZGlzdG9ydGVkIEltYWdlSW50ZXJmYWNlIGluc3RhbmNlLlxyXG4gICAqL1xyXG4gIGRpc3RvcnQoKSB7XHJcbiAgICB0aGlzLnJlc2FtcGxlci5zZXRJbWFnZSh0aGlzLmltYWdlKTtcclxuICAgIHRoaXMucmVzYW1wbGVyLnNldE1hcHBlcih0aGlzLm1hcHBlcik7XHJcblxyXG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLnByZXBhcmVWaWV3cG9ydCgpO1xyXG4gICAgY29uc3QgeDEgPSBNYXRoLmZsb29yKHZpZXdwb3J0LngxKTtcclxuICAgIGNvbnN0IHkxID0gTWF0aC5mbG9vcih2aWV3cG9ydC55MSk7XHJcbiAgICBjb25zdCB4MiA9IE1hdGguZmxvb3Iodmlld3BvcnQueDIpO1xyXG4gICAgY29uc3QgeTIgPSBNYXRoLmZsb29yKHZpZXdwb3J0LnkyKTtcclxuXHJcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmltYWdlLmdldEJsYW5rKHZpZXdwb3J0KTtcclxuXHJcbiAgICB0aGlzLnJlc2FtcGxlci5zY2FsaW5nID0gMSAvIHRoaXMub3V0cHV0U2NhbGluZztcclxuXHJcbiAgICBpZiAoY2FudmFzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICByZXR1cm4gY2FudmFzLnRoZW4oY2FudmFzID0+IHRoaXMucGVyZm9ybURpc3RvcnRpb25Bc3luYyhjYW52YXMsIHgxLCB5MSwgeDIsIHkyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXN5bmMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucGVyZm9ybURpc3RvcnRpb25Bc3luYyhjYW52YXMsIHgxLCB5MSwgeDIsIHkyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5wZXJmb3JtRGlzdG9ydGlvbihjYW52YXMsIHgxLCB5MSwgeDIsIHkyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm90ZWN0ZWRcclxuICAgKiBAcGFyYW0ge0ltYWdlSW50ZXJmYWNlfSBjYW52YXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0geDFcclxuICAgKiBAcGFyYW0ge251bWJlcn0geTFcclxuICAgKiBAcGFyYW0ge251bWJlcn0geDJcclxuICAgKiBAcGFyYW0ge251bWJlcn0geTJcclxuICAgKiBAcmV0dXJucyB7SW1hZ2VJbnRlcmZhY2V9XHJcbiAgICovXHJcbiAgcGVyZm9ybURpc3RvcnRpb24oY2FudmFzLCB4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgZm9yIChsZXQgeSA9IHkxOyB5IDw9IHkyOyB5KyspIHtcclxuICAgICAgZm9yIChsZXQgeCA9IHgxOyB4IDw9IHgyOyB4KyspIHtcclxuICAgICAgICBjYW52YXMuc2V0UGl4ZWxDb2xvcih4LCB5LCB0aGlzLnJlc2FtcGxlci5nZXRSZXNhbXBsZWRDb2xvcih4ICsgMC41LCB5ICsgMC41KSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FudmFzO1xyXG4gIH1cclxuXHJcbiAgcGVyZm9ybURpc3RvcnRpb25Bc3luYyguLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUodGhpcy5wZXJmb3JtRGlzdG9ydGlvbiguLi5hcmdzKSwgMCkpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm90ZWN0ZWRcclxuICAgKiBAcmV0dXJucyB7bGVucy5WaWV3cG9ydH1cclxuICAgKi9cclxuICBwcmVwYXJlVmlld3BvcnQoKSB7XHJcbiAgICBsZXQgdmlld3BvcnQ7XHJcblxyXG4gICAgaWYgKHRoaXMudmlld3BvcnQpIHtcclxuICAgICAgdmlld3BvcnQgPSB0aGlzLnZpZXdwb3J0LmNsb25lKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmVzdEZpdCAmJiB0aGlzLm1hcHBlci5oYXNCZXN0Rml0Vmlld3BvcnQpIHtcclxuICAgICAgdmlld3BvcnQgPSB0aGlzLm1hcHBlci5nZXRCZXN0Rml0Vmlld3BvcnQodGhpcy5pbWFnZS52aWV3cG9ydCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2aWV3cG9ydCA9IHRoaXMuaW1hZ2Uudmlld3BvcnQuY2xvbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB2aWV3cG9ydC5zY2FsZSh0aGlzLm91dHB1dFNjYWxpbmcpO1xyXG5cclxuICAgIHJldHVybiB2aWV3cG9ydDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmVyc2VQaXhlbE1hcHBpbmc7IiwiaW1wb3J0IExlYXN0U3F1YXJlcyBmcm9tIFwiLi4vdXRpbC9nYXVzcy1qb3JkYW4tZWxpbWluYXRpb24vbGVhc3Qtc3F1YXJlc1wiO1xyXG5pbXBvcnQgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXMgZnJvbSAnLi4vbWl4aW5zL2NyZWF0ZXMtYmVzdEZpdC12aWV3cG9ydC1mcm9tLWFwZXhlcyc7XHJcbmltcG9ydCBJbnZhbGlkQXJndW1lbnRzTGVuZ3RoIGZyb20gJy4uL2V4Y2VwdGlvbi9pbnZhbGlkLWFyZ3VtZW50cy1sZW5ndGgnO1xyXG5pbXBvcnQge3BlcmNlcHRpYmxlUmVjaXByb2NhbH0gZnJvbSBcIi4uL3V0aWwvdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIFByb2plY3QgY29vcmRpbmF0ZXMgdXNpbmcgcHJvamVjdGlvbiBtYXRyaXguXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG1hdHJpeCBBZmZpbmUgbWF0cml4LlxyXG4gKiBAcmV0dXJucyB7UG9pbnR9IE1hcHBlZCBjb29yZHMgcGFpci5cclxuICovXHJcbmZ1bmN0aW9uIG1hcCh4LCB5LCBtYXRyaXgpIHtcclxuICByZXR1cm4gW1xyXG4gICAgbWF0cml4WzBdICogeCArIG1hdHJpeFsxXSAqIHkgKyBtYXRyaXhbMl0sXHJcbiAgICBtYXRyaXhbM10gKiB4ICsgbWF0cml4WzRdICogeSArIG1hdHJpeFs1XVxyXG4gIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZmZpbmUgZGlzdG9ydGlvbi5cclxuICpcclxuICogQGltcGxlbWVudHMge0Rpc3RvcnRpb25JbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLmRpc3RvcnRpb25cclxuICogQG1peGVzIGxlbnMubWl4aW5zLmNyZWF0ZXNCZXN0Rml0Vmlld3BvcnRGcm9tQXBleGVzXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9kaXN0b3J0cy8jYWZmaW5lIEFmZmluZSBkaXN0b3J0aW9uIGRldGFpbHMgYXQgSW1hZ2VNYWdpY2sgZG9jc31cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDI0NDMgQWZmaW5lIGRpc3RvcnRpb24gYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gKiBAdHV0b3JpYWwgMDMuMDEuYWZmaW5lXHJcbiAqL1xyXG5jbGFzcyBBZmZpbmUge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gbWF0cml4IEFmZmluZSBtYXRyaXguXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XHJcbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcclxuICAgIHRoaXMuZm9yd2FyZE1hdHJpeCA9IHRoaXMuY29uc3RydWN0b3IuaW52ZXJ0QWZmaW5lTWF0cml4KG1hdHJpeCk7XHJcbiAgICB0aGlzLmhhc1BhcnRpYWxEZXJpdmF0aXZlcyA9IHRydWU7XHJcbiAgICB0aGlzLmhhc0NvbnN0YW50UGFydGlhbERlcml2YXRpdmVzID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFzQmVzdEZpdFZpZXdwb3J0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYWZmaW5lIGRpc3RvcnRpb24gdXNpbmcgY29udHJvbCBwb2ludHMgYXJyYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSBjb250cm9sUG9pbnRzIE1hcHBpbmdzIG9mIGNvbnRyb2wgcG9pbnRzIFt1MCwgdjAsIHgwLCB5MCwgLi4uICwgdW4sIHZuLCB4biwgeW5dIHdoZXJlXHJcbiAgICogKHUqLCB2KikgYXJlIHNvdXJjZSAoeCwgeSkgcG9pbnQgYW5kICh4KiwgeSopIGFyZSBkZXN0aW5hdGlvbiAoeCwgeSkgcG9pbnRcclxuICAgKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLkFmZmluZX1cclxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMDUwMSBHZW5lcmF0aW5nIGFmZmluZSBkaXN0b3J0aW9uIG1hdHJpeCBmcm9tIGNvbnRyb2wgcG9pbnRzIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICAgKi9cclxuICBzdGF0aWMgZnJvbUNvbnRyb2xQb2ludHMoY29udHJvbFBvaW50cykge1xyXG4gICAgaWYgKGNvbnRyb2xQb2ludHMubGVuZ3RoICUgNCAhPT0gMCkge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50c0xlbmd0aChgTnVtYmVyIG9mIGFyZ3VtZW50cyBtdXN0IGJlIG11bHRpcGxlIG9mIDQgYW5kIGF0IGxlYXN0IDQgYXJndW1lbnRzICgxIGNvbnRyb2wgcG9pbnQpIGV4cGVjdGVkLiAke2NvbnRyb2xQb2ludHMubGVuZ3RofSBhcmd1bWVudHMgZ2l2ZW4uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGhhbmRsZSBzcGVjaWFsIGNhc2VzIG9mIG5vdCBlbm91Z2ggYXJndW1lbnRzXHJcbiAgICAgKi9cclxuICAgIGlmIChjb250cm9sUG9pbnRzLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAvLyBPbmx5IDEgQ1AgU2V0IEdpdmVuXHJcbiAgICAgIHJldHVybiBuZXcgQWZmaW5lKFtcclxuICAgICAgICAxLCAwLCBjb250cm9sUG9pbnRzWzBdIC0gY29udHJvbFBvaW50c1syXSxcclxuICAgICAgICAwLCAxLCBjb250cm9sUG9pbnRzWzFdIC0gY29udHJvbFBvaW50c1szXVxyXG4gICAgICBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIDIgb3IgbW9yZSBwb2ludHMgKHVzYWxseSAzKSBnaXZlbi5cclxuICAgICAgLy8gU29sdmUgYSBsZWFzdCBzcXVhcmVzIHNpbXVsdGFuZW91cyBlcXVhdGlvbiBmb3IgY29lZmZpY2llbnRzLlxyXG4gICAgICBjb25zdCBsZWFzdFNxdWFyZXMgPSBuZXcgTGVhc3RTcXVhcmVzKDMsIDIpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9sUG9pbnRzLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgICAgbGV0IFt1LCB2LCB4LCB5XSA9IGNvbnRyb2xQb2ludHMuc2xpY2UoaSwgaSArIDQpO1xyXG5cclxuICAgICAgICBsZWFzdFNxdWFyZXMuYWRkVGVybXMoW1xyXG4gICAgICAgICAgeCwgeSwgMVxyXG4gICAgICAgIF0sIFt1LCB2XSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb250cm9sUG9pbnRzLmxlbmd0aCA9PT0gOCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogT25seSB0d28gcGFpcnMgd2VyZSBnaXZlbiwgYnV0IHdlIG5lZWQgMyB0byBzb2x2ZSB0aGUgYWZmaW5lLlxyXG4gICAgICAgICAqIEZha2UgZXh0cmEgY29vcmRpbmF0ZXMgYnkgcm90YXRpbmcgcDEgYXJvdW5kIHAwIGJ5IDkwIGRlZ3JlZXMuXHJcbiAgICAgICAgICogeDIgPSB4MCAtICh5MS15MCkgICB5MiA9IHkwICsgKHgxLXgwKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxlYXN0U3F1YXJlcy5hZGRUZXJtcyhcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAgY29udHJvbFBvaW50c1syXSAtIChjb250cm9sUG9pbnRzWzddIC0gY29udHJvbFBvaW50c1szXSksXHJcbiAgICAgICAgICAgIGNvbnRyb2xQb2ludHNbM10gKyAoY29udHJvbFBvaW50c1s2XSAtIGNvbnRyb2xQb2ludHNbMl0pLFxyXG4gICAgICAgICAgICAxXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICBjb250cm9sUG9pbnRzWzBdIC0gY29udHJvbFBvaW50c1s1XSArIGNvbnRyb2xQb2ludHNbMV0sXHJcbiAgICAgICAgICAgIGNvbnRyb2xQb2ludHNbMV0gKyBjb250cm9sUG9pbnRzWzRdIC0gY29udHJvbFBvaW50c1swXVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHZlY3RvcnMgPSBsZWFzdFNxdWFyZXMuc29sdmUoKS5nZXRWZWN0b3JzKCk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEFmZmluZSh2ZWN0b3JzWzBdLmNvbmNhdCh2ZWN0b3JzWzFdKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFmZmluZSBkaXN0b3J0aW9uIHVzaW5nIGFmZmluZSBtYXRyaXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSBtYXRyaXggQWZmaW5lIHByb2plY3Rpb24gY29lZmZpY2llbnRzOiBbc3gsIHJ4LCB0eCwgcnksIHN5LCB0eV1cclxuICAgKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLkFmZmluZX1cclxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMDYwOSBHZW5lcmF0aW5nIGludmVydGVkIGFmZmluZSBkaXN0b3J0aW9uIG1hdHJpeCBmcm9tIGZvcndhcmQgYWZmaW5lIG1hdHJpeCBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAgICovXHJcbiAgc3RhdGljIGZyb21Gb3J3YXJkTWF0cml4KG1hdHJpeCkge1xyXG4gICAgLy8gVE9ETzogdHJhcCB0ZXN0IGZvciBzeCpzeS1yeCpyeSA9PSAwIChkZXRlcm1pbmFudCA9IDAsIG5vIGludmVyc2UpXHJcblxyXG4gICAgcmV0dXJuIG5ldyBBZmZpbmUodGhpcy5pbnZlcnRBZmZpbmVNYXRyaXgobWF0cml4KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGludmVydGVkIGFmZmluZSBtYXRyaXggZnJvbSBhZmZpbmUgbWF0cml4LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gbWF0cml4IEFmZmluZSBtYXRyaXguXHJcbiAgICogQHJldHVybnMge251bWJlcltdfSBJbnZlcnRlZCBhZmZpbmUgbWF0cml4LlxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAwMDk1IEludmVydGluZyBhZmZpbmUgbWF0cml4IGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICAgKi9cclxuICBzdGF0aWMgaW52ZXJ0QWZmaW5lTWF0cml4KG1hdHJpeCkge1xyXG4gICAgLyogRnJvbSBcIkRpZ2l0YWwgSW1hZ2UgV2FycGluZ1wiIGJ5IEdlb3JnZSBXb2xiZXJnLCBwYWdlIDUwICovXHJcblxyXG4gICAgY29uc3QgZGV0ZXJtaW5hbnQgPSBwZXJjZXB0aWJsZVJlY2lwcm9jYWwobWF0cml4WzBdICogbWF0cml4WzRdIC0gbWF0cml4WzFdICogbWF0cml4WzNdKTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBkZXRlcm1pbmFudCAqIG1hdHJpeFs0XSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAoLW1hdHJpeFsxXSksXHJcbiAgICAgIGRldGVybWluYW50ICogKG1hdHJpeFsxXSAqIG1hdHJpeFs1XSAtIG1hdHJpeFsyXSAqIG1hdHJpeFs0XSksXHJcbiAgICAgIGRldGVybWluYW50ICogKC1tYXRyaXhbM10pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIG1hdHJpeFswXSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzJdICogbWF0cml4WzNdIC0gbWF0cml4WzBdICogbWF0cml4WzVdKVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcmV2ZXJzZU1hcCh4LCB5KSB7XHJcbiAgICByZXR1cm4gbWFwKHgsIHksIHRoaXMubWF0cml4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0VmFsaWRpdHkoeCwgeSkge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldFBhcnRpYWxEZXJpdmF0aXZlcyh4LCB5KSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB0aGlzLm1hdHJpeFswXSxcclxuICAgICAgdGhpcy5tYXRyaXhbMV0sXHJcbiAgICAgIHRoaXMubWF0cml4WzNdLFxyXG4gICAgICB0aGlzLm1hdHJpeFs0XVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcHMgc291cmNlIGNvb3JkcyBpbnRvIGRlc3RpbmF0aW9uIGNvb3Jkcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtY29vcmRpbmF0ZSBvZiBzb3VyY2UgaW1hZ2UgcG9pbnQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1jb29yZGluYXRlIG9mIHNvdXJjZSBpbWFnZSBwb2ludC5cclxuICAgKiBAcmV0dXJucyB7UG9pbnR9IEZvcndhcmQgbWFwcGVkIGRlc3RpbmF0aW9uIGltYWdlIGNvb3Jkcy5cclxuICAgKi9cclxuICBmb3J3YXJkTWFwKHgsIHkpIHtcclxuICAgIHJldHVybiBtYXAoeCwgeSwgdGhpcy5mb3J3YXJkTWF0cml4KTtcclxuICB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oQWZmaW5lLnByb3RvdHlwZSwgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWZmaW5lOyIsImltcG9ydCB7RVBTSUxPTiwgTV9QSTIsIE1fMlBJfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7SW52YWxpZEFyZ3VtZW50fSBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XHJcbmltcG9ydCB7ZGVnMnJhZH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4uL3ZpZXdwb3J0JztcclxuXHJcbi8qKlxyXG4gKiBAc3VtbWFyeSBBcmMgZGlzdG9ydGlvbi5cclxuICpcclxuICogQGRlc2NyaXB0aW9uIE5vdGUgdGhlIGNvZWZmaWNpZW50cyB1c2UgYSBjZW50ZXIgYW5nbGUsIHNvIGFzeW1wdG90aWMgam9pbiBpc1xyXG4gKiBmdXJ0aGVzdCBmcm9tIGJvdGggc2lkZXMgb2YgdGhlIHNvdXJjZSBpbWFnZS4gVGhpcyBhbHNvIG1lYW5zIHRoYXRcclxuICogZm9yIGFyYyBhbmdsZXMgZ3JlYXRlciB0aGFuIDM2MCB0aGUgc2lkZXMgb2YgdGhlIGltYWdlIHdpbGwgYmVcclxuICogdHJpbW1lZCBlcXVhbGx5LlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy5kaXN0b3J0aW9uXHJcbiAqIEBpbXBsZW1lbnRzIERpc3RvcnRpb25JbnRlcmZhY2VcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cuaW1hZ2VtYWdpY2sub3JnL1VzYWdlL2Rpc3RvcnRzLyNhcmMgQXJjIGRpc3RvcnRpb24gZGV0YWlsc30gYXQgSW1hZ2VNYWdpY2sgZG9jcy5cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDI1NjEgQXJjIGRpc3RvcnRpb259IGF0IEltYWdlTWFnaWNrXHJcbiAqIHNvdXJjZS5cclxuICogQHR1dG9yaWFsIDAzLjAzLmFyY1xyXG4gKi9cclxuY2xhc3MgQXJjIHtcclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bGVucy5WaWV3cG9ydH0gdmlld3BvcnRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gYzAgQW5nbGUgZm9yIGNlbnRlciBvZiBzb3VyY2UgaW1hZ2UuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGMxIEFuZ2xlIHNjYWxlIGZvciBtYXBwaW5nIHRvIHNvdXJjZSBpbWFnZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gYzIgUmFkaXVzIGZvciB0b3Agb2Ygc291cmNlIGltYWdlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjMyBSYWRpdXMgc2NhbGUgZm9yIG1hcHBpbmcgc291cmNlIGltYWdlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjNCBDZW50ZXIgbGluZSBvZiBhcmMgd2l0aGluIHNvdXJjZSBpbWFnZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih2aWV3cG9ydCwgYzAsIGMxLCBjMiwgYzMsIGM0KSB7XHJcbiAgICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnQ7XHJcbiAgICB0aGlzLmMwID0gYzA7XHJcbiAgICB0aGlzLmMxID0gYzE7XHJcbiAgICB0aGlzLmMyID0gYzI7XHJcbiAgICB0aGlzLmMzID0gYzM7XHJcbiAgICB0aGlzLmM0ID0gYzQ7XHJcblxyXG4gICAgLypcclxuICAgICAqIENvbnZlcnQgdGhlIGFuZ2xlX3RvX3dpZHRoIGFuZCByYWRpdXNfdG9faGVpZ2h0XHJcbiAgICAgKiB0byBhcHByb3ByaWF0ZSBzY2FsaW5nIGZhY3RvcnMsIHRvIGFsbG93IGZhc3RlciBwcm9jZXNzaW5nXHJcbiAgICAgKiBpbiB0aGUgbWFwcGluZyBmdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgdGhpcy5hbmdsZVRvV2lkdGggPSBNXzJQSSAqIHRoaXMudmlld3BvcnQud2lkdGgoKSAvIHRoaXMuYzE7XHJcbiAgICB0aGlzLnJhZGl1c1RvSGVpZ2h0ID0gdGhpcy52aWV3cG9ydC5oZWlnaHQoKSAvIHRoaXMuYzM7XHJcblxyXG4gICAgdGhpcy5oYXNQYXJ0aWFsRGVyaXZhdGl2ZXMgPSB0cnVlO1xyXG4gICAgdGhpcy5oYXNDb25zdGFudFBhcnRpYWxEZXJpdmF0aXZlcyA9IGZhbHNlO1xyXG4gICAgdGhpcy5oYXNCZXN0Rml0Vmlld3BvcnQgPSB0cnVlO1xyXG4gICAgdGhpcy5mb3JjZUJlc3RGaXQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHN1bW1hcnkgQ3JlYXRlcyBhcmMgZGlzdG9ydGlvbiBjbGFzcyBmcm9tIGFyZ3VtZW50cy5cclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBBcmd1bWVudHM6ICBbYW5nbGUsIHJvdGF0aW9uLCBvdXRlcl9yYWRpdXMsIGlubmVyX3JhZGl1c11cclxuICAgKiBBbGwgYnV0IGZpcnN0IGFyZ3VtZW50IGFyZSBvcHRpb25hbC5cclxuICAgKlxyXG4gICAqIEJ5IGRlZmF1bHQsIGlmIHRoZSByYWRpaSBhcmd1bWVudHMgYXJlIG5vciBwcm92aWRlZCB0aGUgaW1hZ2UgcmFkaXVzXHJcbiAgICogaXMgY2FsY3VsYXRlZCBzbyB0aGUgaG9yaXpvbnRhbCBjZW50ZXItbGluZSBpcyBmaXRzIHRoZSBnaXZlbiBhcmNcclxuICAgKiB3aXRob3V0IHNjYWxpbmcuXHJcbiAgICpcclxuICAgKiBUaGUgb3V0cHV0IGltYWdlIHNpemUgaXMgQUxXQVlTIGFkanVzdGVkIHRvIGNvbnRhaW4gdGhlIHdob2xlIGltYWdlLFxyXG4gICAqIGFuZCBhbiBvZmZzZXQgaXMgZ2l2ZW4gdG8gcG9zaXRpb24gaW1hZ2UgcmVsYXRpdmUgdG8gdGhlIDAsMCBwb2ludCBvZlxyXG4gICAqIHRoZSBvcmlnaW4sIGFsbG93aW5nIHVzZXJzIHRvIHVzZSByZWxhdGl2ZSBwb3NpdGlvbmluZyBvbnRvIGxhcmdlclxyXG4gICAqIGJhY2tncm91bmQuXHJcbiAgICpcclxuICAgKiBUaGUgYXJndW1lbnRzIGFyZSBjb252ZXJ0ZWQgdG8gZGlzdG9ydGlvbiBjb2VmZmljaWVudHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2xlbnMuVmlld3BvcnR9IHZpZXdwb3J0XHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gYXJncyBBcmd1bWVudHM6XHJcbiAgICogKiAwOiAqKmFuZ2xlKiogLSBUaGUgYW5nbGUgb3ZlciB3aGljaCB0byBhcmMgdGhlIGltYWdlIHNpZGUtdG8tc2lkZS5cclxuICAgKiAqIDE6ICoqcm90YXRpb24qKiAtIEFuZ2xlIHRvIHJvdGF0ZSBpbWFnZSBmcm9tIHZlcnRpY2FsIGNlbnRlci5cclxuICAgKiAqIDI6ICoqb3V0ZXJfcmFkaXVzKiogLSBTZXQgdG9wIGVkZ2Ugb2Ygc291cmNlIGltYWdlIGF0IHRoaXMgcmFkaXVzLlxyXG4gICAqICogMzogKippbm5lcl9yYWRpdXMqKiAtIFNldCBib3R0b20gZWRnZSB0byB0aGlzIHJhZGl1cyAocmFkaWFsIHNjYWxpbmcpLlxyXG4gICAqIEByZXR1cm5zIHtsZW5zLmRpc3RvcnRpb24uQXJjfVxyXG4gICAqIEB0aHJvd3Mge2xlbnMuZXhjZXB0aW9uLkludmFsaWRBcmd1bWVudH0gVGhyb3duIHdoZW4gZmlyc3QgKGFuZ2xlKSBvciB0aGlyZCAob3V0ZXIgcmFkaXVzKSBhcmd1bWVudHMgYXJlIHRvbyBzbWFsbFxyXG4gICAqXHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDEwOTUgR2VuZXJhdGluZyBjb2VmZmljaWVudHN9IGZvciBhcmNcclxuICAgKiBkaXN0b3J0aW9uIGF0IEltYWdlTWFnaWNrIHNvdXJjZS5cclxuICAgKi9cclxuICBzdGF0aWMgZnJvbUFyZ3VtZW50cyh2aWV3cG9ydCwgYXJncykge1xyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID49IDEgJiYgYXJnc1swXSA8IEVQU0lMT04pIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudCgnQW5nbGUgdG9vIHNtYWxsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID49IDMgJiYgYXJnc1syXSA8IEVQU0lMT04pIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudCgnT3V0ZXIgcmFkaXVzIHRvbyBzbWFsbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjMCwgYzEsIGMyLCBjMywgYzQ7XHJcblxyXG4gICAgYzAgPSAtTV9QSTI7IC8vIC05MCwgcGxhY2UgYXQgdG9wIVxyXG5cclxuICAgIGlmIChhcmdzLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgIGMxID0gZGVnMnJhZChhcmdzWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGMxID0gTV9QSTI7IC8vIHplcm8gYXJndW1lbnRzIC0gY2VudGVyIGlzIGF0IHRvcFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhcmdzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgIGMwICs9IGRlZzJyYWQoYXJnc1sxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYzAgLz0gTV8yUEk7IC8vIG5vcm1hbGl6ZSByYWRpYW5zXHJcbiAgICBjMCAtPSBNYXRoLnJvdW5kKGMwKTtcclxuICAgIGMwICo9IE1fMlBJOyAvLyBkZS1ub3JtYWxpemUgYmFjayB0byByYWRpYW5zXHJcblxyXG4gICAgYzMgPSB2aWV3cG9ydC5oZWlnaHQoKSAtIDE7XHJcbiAgICBjMiA9IHZpZXdwb3J0LndpZHRoKCkgLyBjMSArIGMzIC8gMjtcclxuXHJcbiAgICBpZiAoYXJncy5sZW5ndGggPj0gMykge1xyXG4gICAgICBpZiAoYXJncy5sZW5ndGggPj0gNCkge1xyXG4gICAgICAgIGMzID0gYXJnc1syXSAtIGFyZ3NbM107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYzMgKj0gYXJnc1syXSAvIGMyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjMiA9IGFyZ3NbMl07XHJcbiAgICB9XHJcblxyXG4gICAgYzQgPSAodmlld3BvcnQud2lkdGgoKSAtIDEpIC8gMjtcclxuXHJcbiAgICByZXR1cm4gbmV3IEFyYyh2aWV3cG9ydCwgYzAsIGMxLCBjMiwgYzMsIGM0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcmV2ZXJzZU1hcCh4LCB5KSB7XHJcbiAgICBsZXQgW3UsIHZdID0gdGhpcy5nZXRVVih4LCB5KTtcclxuXHJcbiAgICAvLyBub3cgc2NhbGUgdGhlIGFuZ2xlIGFuZCByYWRpdXMgZm9yIHNvdXJjZSBpbWFnZSBsb29rdXAgcG9pbnRcclxuICAgIHUgPSB1ICogdGhpcy5hbmdsZVRvV2lkdGggKyB0aGlzLmM0ICsgdGhpcy52aWV3cG9ydC54MSArIDAuNTtcclxuICAgIHYgPSAodGhpcy5jMiAtIHYpICogdGhpcy5yYWRpdXNUb0hlaWdodCArIHRoaXMudmlld3BvcnQueTE7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh1LCB2LCB4LCB5KTtcclxuXHJcbiAgICByZXR1cm4gW3UsIHZdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRWYWxpZGl0eSh4LCB5KSB7XHJcbiAgICByZXR1cm4gMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0UGFydGlhbERlcml2YXRpdmVzKHgsIHkpIHtcclxuICAgIGxldCBbdSwgdl0gPSB0aGlzLmdldFVWKHgsIHkpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBBcmMgRGlzdG9ydGlvbiBQYXJ0aWFsIFNjYWxpbmcgVmVjdG9yc1xyXG4gICAgICogQXJlIGRlcml2ZWQgYnkgbWFwcGluZyB0aGUgcGVycGVuZGljdWxhciB1bml0IHZlY3RvcnNcclxuICAgICAqIGRSICBhbmQgIGRBKlIqMlBJICByYXRoZXIgdGhhbiB0cnlpbmcgdG8gbWFwIGR4IGFuZCBkeVxyXG4gICAgICogVGhlIHJlc3VsdHMgaXMgYSB2ZXJ5IHNpbXBsZSBvcnRob2dvbmFsIGFsaWduZWQgZWxsaXBzZS5cclxuICAgICAqL1xyXG4gICAgaWYgKHYgPiBFUFNJTE9OKSB7XHJcbiAgICAgIHJldHVybiBbdGhpcy5hbmdsZVRvV2lkdGggLyAoTV8yUEkgKiB2KSwgMCwgMCwgdGhpcy5yYWRpdXNUb0hlaWdodF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gW3RoaXMudmlld3BvcnQud2lkdGgoKSAqIDIsIDAsIDAsIHRoaXMucmFkaXVzVG9IZWlnaHRdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBjYWxjdWxhdGVkIGJlc3QgZml0IHZpZXdwb3J0IGZvciBpbWFnZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bGVucy5WaWV3cG9ydH0gdmlld3BvcnRcclxuICAgKiBAcmV0dXJucyB7bGVucy5WaWV3cG9ydH1cclxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMTgzNCBHZW5lcmF0aW5nIGJlc3QgZml0IHZpZXdwb3J0fVxyXG4gICAqIGZvciBhcmMgZGlzdG9ydGlvbiBhdCBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAgICovXHJcbiAgZ2V0QmVzdEZpdFZpZXdwb3J0KHZpZXdwb3J0KSB7XHJcbiAgICAvLyBGb3J3YXJkIE1hcCBDb3JuZXJzXHJcbiAgICBsZXQgYSA9IHRoaXMuYzAgLSB0aGlzLmMxIC8gMixcclxuICAgICAgY2EgPSBNYXRoLmNvcyhhKSxcclxuICAgICAgc2EgPSBNYXRoLnNpbihhKSxcclxuICAgICAgeCA9IHRoaXMuYzIgKiBjYSxcclxuICAgICAgeSA9IHRoaXMuYzIgKiBzYSxcclxuICAgICAgdnAgPSBuZXcgVmlld3BvcnQoeCwgeSwgeCwgeSk7XHJcblxyXG4gICAgeCA9ICh0aGlzLmMyIC0gdGhpcy5jMykgKiBjYTtcclxuICAgIHkgPSAodGhpcy5jMiAtIHRoaXMuYzMpICogc2E7XHJcbiAgICB2cC5leHBhbmQoeCwgeSk7XHJcblxyXG4gICAgYSA9IHRoaXMuYzAgKyB0aGlzLmMxIC8gMjtcclxuICAgIGNhID0gTWF0aC5jb3MoYSk7XHJcbiAgICBzYSA9IE1hdGguc2luKGEpO1xyXG4gICAgeCA9IHRoaXMuYzIgKiBjYTtcclxuICAgIHkgPSB0aGlzLmMyICogc2E7XHJcbiAgICB2cC5leHBhbmQoeCwgeSk7XHJcblxyXG4gICAgeCA9ICh0aGlzLmMyIC0gdGhpcy5jMykgKiBjYTtcclxuICAgIHkgPSAodGhpcy5jMiAtIHRoaXMuYzMpICogc2E7XHJcbiAgICB2cC5leHBhbmQoeCwgeSk7XHJcblxyXG4gICAgLy8gT3J0aG9nb25hbCBwb2ludHMgYWxvbmcgdG9wIG9mIGFyY1xyXG4gICAgZm9yIChcclxuICAgICAgYSA9IE1hdGguY2VpbCgodGhpcy5jMCAtIHRoaXMuYzEgLyAyKSAvIE1fUEkyKSAqIE1fUEkyO1xyXG4gICAgICBhIDwgdGhpcy5jMCArIHRoaXMuYzEgLyAyO1xyXG4gICAgICBhICs9IE1fUEkyXHJcbiAgICApIHtcclxuICAgICAgY2EgPSBNYXRoLmNvcyhhKTtcclxuICAgICAgc2EgPSBNYXRoLnNpbihhKTtcclxuICAgICAgeCA9IHRoaXMuYzIgKiBjYTtcclxuICAgICAgeSA9IHRoaXMuYzIgKiBzYTtcclxuICAgICAgdnAuZXhwYW5kKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZwLmZpeEJvdW5kcygpO1xyXG5cclxuICAgIHJldHVybiB2cDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge251bWJlcn0geVxyXG4gICAqIEByZXR1cm5zIHtQb2ludH1cclxuICAgKi9cclxuICBnZXRVVih4LCB5KSB7XHJcbiAgICBsZXQgdSwgdjtcclxuXHJcbiAgICAvLyB3aGF0IGlzIHRoZSBhbmdsZSBhbmQgcmFkaXVzIGluIHRoZSBkZXN0aW5hdGlvbiBpbWFnZVxyXG4gICAgdSA9IChNYXRoLmF0YW4yKHksIHgpIC0gdGhpcy5jMCkgLyBNXzJQSTtcclxuICAgIHUgLT0gTWF0aC5yb3VuZCh1KTtcclxuICAgIHYgPSBNYXRoLmh5cG90KHgsIHkpO1xyXG5cclxuICAgIHJldHVybiBbdSwgdl07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcmM7IiwiLyoqXHJcbiAqIERpc3RvcnRpb24gbmFtZXNwYWNlXHJcbiAqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5kaXN0b3J0aW9uXHJcbiAqL1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIEFmZmluZX0gZnJvbSAnLi9hZmZpbmUnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIFBlcnNwZWN0aXZlfSBmcm9tICcuL3BlcnNwZWN0aXZlJztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBBcmN9IGZyb20gJy4vYXJjJzsiLCJpbXBvcnQgTGVhc3RTcXVhcmVzIGZyb20gJy4uL3V0aWwvZ2F1c3Mtam9yZGFuLWVsaW1pbmF0aW9uL2xlYXN0LXNxdWFyZXMnO1xyXG5pbXBvcnQgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXMgZnJvbSAnLi4vbWl4aW5zL2NyZWF0ZXMtYmVzdEZpdC12aWV3cG9ydC1mcm9tLWFwZXhlcyc7XHJcbmltcG9ydCBJbnZhbGlkQXJndW1lbnRzTGVuZ3RoIGZyb20gJy4uL2V4Y2VwdGlvbi9pbnZhbGlkLWFyZ3VtZW50cy1sZW5ndGgnO1xyXG5pbXBvcnQge3BlcmNlcHRpYmxlUmVjaXByb2NhbH0gZnJvbSBcIi4uL3V0aWwvdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIFByb2plY3QgY29vcmRpbmF0ZXMgdXNpbmcgcHJvamVjdGlvbiBtYXRyaXhcclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbWF0cml4IFBlcnNwZWN0aXZlIG1hdHJpeC5cclxuICogQHJldHVybnMge1BvaW50fSBNYXBwZWQgY29vcmRzIHBhaXIuXHJcbiAqIEB0dXRvcmlhbCAwMy4wMi5wZXJzcGVjdGl2ZVxyXG4gKi9cclxuZnVuY3Rpb24gbWFwKHgsIHksIG1hdHJpeCkge1xyXG4gIGxldCBwID0gbWF0cml4WzBdICogeCArIG1hdHJpeFsxXSAqIHkgKyBtYXRyaXhbMl0sXHJcbiAgICBxID0gbWF0cml4WzNdICogeCArIG1hdHJpeFs0XSAqIHkgKyBtYXRyaXhbNV0sXHJcbiAgICByID0gbWF0cml4WzZdICogeCArIG1hdHJpeFs3XSAqIHkgKyAxO1xyXG5cclxuICByZXR1cm4gW3AgLyByLCBxIC8gcl07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAc3VtbWFyeSBQZXJzcGVjdGl2ZSBEaXN0b3J0aW9uIChhIHJhdGlvIG9mIGFmZmluZSBkaXN0b3J0aW9ucykuXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvbiA8cHJlPlxyXG4gKlxyXG4gKiAgICAgcCh4LHkpICAgIGMwKnggKyBjMSp5ICsgYzJcclxuICogdSA9IC0tLS0tLSA9IC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgICAgcih4LHkpICAgIGM2KnggKyBjNyp5ICsgMVxyXG4gKlxyXG4gKiAgICAgcSh4LHkpICAgIGMzKnggKyBjNCp5ICsgYzVcclxuICogdiA9IC0tLS0tLSA9IC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgICAgIHIoeCx5KSAgICBjNip4ICsgYzcqeSArIDFcclxuICpcclxuICogZGVub21pbmF0b3IgPSBTaWduIG9mICdyJywgb3IgdGhlIGRlbm9taW5hdG9yIGFmZmluZSwgZm9yIHRoZSBhY3R1YWwgaW1hZ2UuXHJcbiAqIFRoaXMgZGV0ZXJtaW5lcyB3aGF0IHBhcnQgb2YgdGhlIGRpc3RvcnRlZCBpbWFnZSBpcyAnZ3JvdW5kJ1xyXG4gKiBzaWRlIG9mIHRoZSBob3Jpem9uLCB0aGUgb3RoZXIgcGFydCBpcyAnc2t5JyBvciBpbnZhbGlkLlxyXG4gKiBWYWxpZCB2YWx1ZXMgYXJlICArMS4wICBvciAgLTEuMCAgb25seS5cclxuICogPC9wcmU+XHJcbiAqXHJcbiAqIEBpbXBsZW1lbnRzIHtEaXN0b3J0aW9uSW50ZXJmYWNlfVxyXG4gKiBAbWVtYmVyT2YgbGVucy5kaXN0b3J0aW9uXHJcbiAqIEBtaXhlcyBsZW5zLm1peGlucy5jcmVhdGVzQmVzdEZpdFZpZXdwb3J0RnJvbUFwZXhlc1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy5pbWFnZW1hZ2ljay5vcmcvVXNhZ2UvZGlzdG9ydHMvI3BlcnNwZWN0aXZlIFBlcnNwZWN0aXZlIGRpc3RvcnRpb24gZGV0YWlscyBhdCBJbWFnZU1hZ2ljayBkb2NzfVxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMjQ1MCBQZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICovXHJcbmNsYXNzIFBlcnNwZWN0aXZlIHtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSByZXZlcnNlTWF0cml4IFBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IGZvciByZXZlcnNlIHBpeGVsIG1hcHBpbmcuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlbm9taW5hdG9yIERlbm9taW5hdG9yIGZvciBtYXBwaW5nIHZhbGlkaXR5IGNhbGN1bGF0aW9uLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHJldmVyc2VNYXRyaXgsIGRlbm9taW5hdG9yKSB7XHJcbiAgICB0aGlzLm1hdHJpeCA9IHJldmVyc2VNYXRyaXg7XHJcbiAgICB0aGlzLmRlbm9taW5hdG9yID0gZGVub21pbmF0b3I7XHJcbiAgICB0aGlzLmZvcndhcmRNYXRyaXggPSB0aGlzLmNvbnN0cnVjdG9yLmludmVydFBlcnNwZWN0aXZlTWF0cml4KHJldmVyc2VNYXRyaXgpO1xyXG4gICAgdGhpcy5oYXNQYXJ0aWFsRGVyaXZhdGl2ZXMgPSB0cnVlO1xyXG4gICAgdGhpcy5oYXNDb25zdGFudFBhcnRpYWxEZXJpdmF0aXZlcyA9IGZhbHNlO1xyXG4gICAgdGhpcy5oYXNCZXN0Rml0Vmlld3BvcnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBwZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIHVzaW5nIGNvbnRyb2wgcG9pbnRzIGFycmF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gY29udHJvbFBvaW50cyBNYXBwaW5ncyBvZiBjb250cm9sIHBvaW50cyBbdTAsIHYwLCB4MCwgeTAsIC4uLiAsIHVuLCB2biwgeG4sIHluXSB3aGVyZVxyXG4gICAqICh1KiwgdiopIGFyZSBzb3VyY2UgKHgsIHkpIHBvaW50IGFuZCAoeCosIHkqKSBhcmUgZGVzdGluYXRpb24gKHgsIHkpIHBvaW50LlxyXG4gICAqIEByZXR1cm5zIHtsZW5zLmRpc3RvcnRpb24uUGVyc3BlY3RpdmV9IE5ldyBpbnN0YW5jZS5cclxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMDc0NSBHZW5lcmF0aW5nIHBlcnNwZWN0aXZlIGRpc3RvcnRpb24gbWF0cml4IGZyb20gY29udHJvbCBwb2ludHMgYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBmcm9tQ29udHJvbFBvaW50cyhjb250cm9sUG9pbnRzKSB7XHJcbiAgICBpZiAoY29udHJvbFBvaW50cy5sZW5ndGggPCAxNiB8fCBjb250cm9sUG9pbnRzLmxlbmd0aCAlIDQgIT09IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudHNMZW5ndGgoYE51bWJlciBvZiBhcmd1bWVudHMgbXVzdCBiZSBtdWx0aXBsZSBvZiA0IGFuZCBhdCBsZWFzdCAxNiBhcmd1bWVudHMgKDQgY29udHJvbCBwb2ludHMpIGV4cGVjdGVkLiAke2NvbnRyb2xQb2ludHMubGVuZ3RofSBhcmd1bWVudHMgZ2l2ZW4uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGVhc3RTcXVhcmVzID0gbmV3IExlYXN0U3F1YXJlcyg4LCAxKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyb2xQb2ludHMubGVuZ3RoOyBpICs9IDQpIHtcclxuICAgICAgbGV0IFt1LCB2LCB4LCB5XSA9IGNvbnRyb2xQb2ludHMuc2xpY2UoaSwgaSArIDQpO1xyXG5cclxuICAgICAgbGVhc3RTcXVhcmVzLmFkZFRlcm1zKFtcclxuICAgICAgICB4LCB5LCAxLFxyXG4gICAgICAgIDAsIDAsIDAsXHJcbiAgICAgICAgLXggKiB1LCAteSAqIHVcclxuICAgICAgXSwgW3VdKVxyXG4gICAgICAgIC5hZGRUZXJtcyhbXHJcbiAgICAgICAgICAwLCAwLCAwLFxyXG4gICAgICAgICAgeCwgeSwgMSxcclxuICAgICAgICAgIC14ICogdiwgLXkgKiB2XHJcbiAgICAgICAgXSwgW3ZdKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYXRyaXggPSBsZWFzdFNxdWFyZXMuc29sdmUoKS5nZXRWZWN0b3JzKClbMF07XHJcblxyXG4gICAgLypcclxuICAgICAqIENhbGN1bGF0ZSBkZW5vbWluYXRvciEgVGhlIGdyb3VuZC1za3kgZGV0ZXJtaW5hdGlvbi5cclxuICAgICAqIFdoYXQgaXMgc2lnbiBvZiB0aGUgJ2dyb3VuZCcgaW4gcigpIGRlbm9taW5hdG9yIGFmZmluZSBmdW5jdGlvbj9cclxuICAgICAqIEp1c3QgdXNlIGFueSB2YWxpZCBpbWFnZSBjb29yZGluYXRlIChmaXJzdCBjb250cm9sIHBvaW50KSBpblxyXG4gICAgICogZGVzdGluYXRpb24gZm9yIGRldGVybWluYXRpb24gb2Ygd2hhdCBwYXJ0IG9mIHZpZXcgaXMgJ2dyb3VuZCcuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGRlbm9taW5hdG9yID0gbWF0cml4WzZdICogY29udHJvbFBvaW50c1syXSArIG1hdHJpeFs3XSAqIGNvbnRyb2xQb2ludHNbM10gKyAxIDwgMCA/IC0xIDogMTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBlcnNwZWN0aXZlKG1hdHJpeCwgZGVub21pbmF0b3IpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBwZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIHVzaW5nIHBlcnNwZWN0aXZlIG1hdHJpeC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IG1hdHJpeCBQZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5QZXJzcGVjdGl2ZX1cclxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMDg1MyBHZW5lcmF0aW5nIGludmVydGVkIHBlcnNwZWN0aXZlIGRpc3RvcnRpb24gbWF0cml4IGZyb20gZm9yd2FyZCBwZXJzcGVjdGl2ZSBtYXRyaXggYXQgSW1hZ2VNYWdpY2sgZG9jc31cclxuICAgKi9cclxuICBzdGF0aWMgZnJvbUZvcndhcmRNYXRyaXgobWF0cml4KSB7XHJcbiAgICAvLyBUT0RPOiB0cmFwIHRlc3QgIGMwKmM0LWMzKmMxID09IDAgIChkZXRlcm1pbmFudCA9IDAsIG5vIGludmVyc2UpXHJcbiAgICBjb25zdCBpbnZlcnNlID0gdGhpcy5pbnZlcnRQZXJzcGVjdGl2ZU1hdHJpeChtYXRyaXgpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBDYWxjdWxhdGUgZGVub21pbmF0b3IhIFRoZSBncm91bmQtc2t5IGRldGVybWluYXRpb24uXHJcbiAgICAgKiBXaGF0IGlzIHNpZ24gb2YgdGhlICdncm91bmQnIGluIHIoKSBkZW5vbWluYXRvciBhZmZpbmUgZnVuY3Rpb24/XHJcbiAgICAgKiBKdXN0IHVzZSBhbnkgdmFsaWQgaW1hZ2UgY29vcmRpbmF0ZSBpbiBkZXN0aW5hdGlvbiBmb3IgZGV0ZXJtaW5hdGlvbi5cclxuICAgICAqIEZvciBhIGZvcndhcmQgbWFwcGVkIHBlcnNwZWN0aXZlIHRoZSBpbWFnZXMgMCwwIGNvb3JkIHdpbGwgbWFwIHRvXHJcbiAgICAgKiBjMixjNSBpbiB0aGUgZGlzdG9ydGVkIGltYWdlLCBzbyBzZXQgdGhlIHNpZ24gb2YgZGVub21pbmF0b3Igb2YgdGhhdC5cclxuICAgICAqL1xyXG4gICAgY29uc3QgZGVub21pbmF0b3IgPSBpbnZlcnNlWzZdICogbWF0cml4WzJdICsgaW52ZXJzZVs3XSAqIG1hdHJpeFs1XSArIDEgPCAwID8gLTEgOiAxO1xyXG4gICAgcmV0dXJuIG5ldyBQZXJzcGVjdGl2ZShpbnZlcnNlLCBkZW5vbWluYXRvcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGludmVydGVkIHBlcnNwZWN0aXZlIG1hdHJpeCBmcm9tIHBlcnNwZWN0aXZlIG1hdHJpeC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IG1hdHJpeCBQZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICogQHJldHVybnMge251bWJlcltdfSBJbnZlcnRlZCBwZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDAxMDkgSW52ZXJ0aW5nIHBlcnNwZWN0aXZlIG1hdHJpeCBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAgICovXHJcbiAgc3RhdGljIGludmVydFBlcnNwZWN0aXZlTWF0cml4KG1hdHJpeCkge1xyXG4gICAgY29uc3QgZGV0ZXJtaW5hbnQgPSBwZXJjZXB0aWJsZVJlY2lwcm9jYWwobWF0cml4WzBdICogbWF0cml4WzRdIC0gbWF0cml4WzNdICogbWF0cml4WzFdKTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbNF0gLSBtYXRyaXhbN10gKiBtYXRyaXhbNV0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbN10gKiBtYXRyaXhbMl0gLSBtYXRyaXhbMV0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbMV0gKiBtYXRyaXhbNV0gLSBtYXRyaXhbNF0gKiBtYXRyaXhbMl0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbNl0gKiBtYXRyaXhbNV0gLSBtYXRyaXhbM10pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbMF0gLSBtYXRyaXhbNl0gKiBtYXRyaXhbMl0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbM10gKiBtYXRyaXhbMl0gLSBtYXRyaXhbMF0gKiBtYXRyaXhbNV0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbM10gKiBtYXRyaXhbN10gLSBtYXRyaXhbNl0gKiBtYXRyaXhbNF0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbNl0gKiBtYXRyaXhbMV0gLSBtYXRyaXhbMF0gKiBtYXRyaXhbN10pXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICByZXZlcnNlTWFwKHgsIHkpIHtcclxuICAgIHJldHVybiBtYXAoeCwgeSwgdGhpcy5tYXRyaXgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRWYWxpZGl0eSh4LCB5LCBzY2FsaW5nKSB7XHJcbiAgICBjb25zdCByID0gdGhpcy5tYXRyaXhbNl0gKiB4ICsgdGhpcy5tYXRyaXhbN10gKiB5ICsgMTtcclxuICAgIGxldCB2YWxpZGl0eSA9IHIgKiB0aGlzLmRlbm9taW5hdG9yIDwgMCA/IDAgOiAxO1xyXG4gICAgY29uc3QgYWJzUiA9IE1hdGguYWJzKHIpICogMjtcclxuICAgIGNvbnN0IGFic0M2ID0gTWF0aC5hYnModGhpcy5tYXRyaXhbNl0pO1xyXG4gICAgY29uc3QgYWJzQzcgPSBNYXRoLmFicyh0aGlzLm1hdHJpeFs3XSk7XHJcblxyXG4gICAgaWYgKGFic0M2ID4gYWJzQzcpIHtcclxuICAgICAgaWYgKGFic1IgPCBhYnNDNikge1xyXG4gICAgICAgIHZhbGlkaXR5ID0gMC41IC0gdGhpcy5kZW5vbWluYXRvciAqIHIgLyAodGhpcy5tYXRyaXhbNl0gKiBzY2FsaW5nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChhYnNSIDwgYWJzQzcpIHtcclxuICAgICAgdmFsaWRpdHkgPSAwLjUgLSB0aGlzLmRlbm9taW5hdG9yICogciAvICh0aGlzLm1hdHJpeFs3XSAqIHNjYWxpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZGl0eTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0UGFydGlhbERlcml2YXRpdmVzKHgsIHkpIHtcclxuICAgIGNvbnN0IHAgPSB0aGlzLm1hdHJpeFswXSAqIHggKyB0aGlzLm1hdHJpeFsxXSAqIHkgKyB0aGlzLm1hdHJpeFsyXSxcclxuICAgICAgcSA9IHRoaXMubWF0cml4WzNdICogeCArIHRoaXMubWF0cml4WzRdICogeSArIHRoaXMubWF0cml4WzVdLFxyXG4gICAgICByID0gdGhpcy5tYXRyaXhbNl0gKiB4ICsgdGhpcy5tYXRyaXhbN10gKiB5ICsgMSxcclxuICAgICAgc2NhbGUgPSBNYXRoLnBvdygxIC8gciwgMik7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgKHIgKiB0aGlzLm1hdHJpeFswXSAtIHAgKiB0aGlzLm1hdHJpeFs2XSkgKiBzY2FsZSwgLy8gZFV4XHJcbiAgICAgIChyICogdGhpcy5tYXRyaXhbMV0gLSBwICogdGhpcy5tYXRyaXhbN10pICogc2NhbGUsIC8vIGRVeVxyXG4gICAgICAociAqIHRoaXMubWF0cml4WzNdIC0gcSAqIHRoaXMubWF0cml4WzZdKSAqIHNjYWxlLCAvLyBkVnhcclxuICAgICAgKHIgKiB0aGlzLm1hdHJpeFs0XSAtIHEgKiB0aGlzLm1hdHJpeFs3XSkgKiBzY2FsZSAvL2RWeVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcHMgc291cmNlIGNvb3JkcyBpbnRvIGRlc3RpbmF0aW9uIGNvb3Jkcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1IFgtY29vcmRpbmF0ZSBvZiBzb3VyY2UgaW1hZ2UgcG9pbnQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHYgWS1jb29yZGluYXRlIG9mIHNvdXJjZSBpbWFnZSBwb2ludC5cclxuICAgKiBAcmV0dXJucyB7UG9pbnR9IEZvcndhcmQgbWFwcGVkIGRlc3RpbmF0aW9uIGltYWdlIGNvb3Jkcy5cclxuICAgKi9cclxuICBmb3J3YXJkTWFwKHUsIHYpIHtcclxuICAgIHJldHVybiBtYXAodSwgdiwgdGhpcy5mb3J3YXJkTWF0cml4KTtcclxuICB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oUGVyc3BlY3RpdmUucHJvdG90eXBlLCBjcmVhdGVzQmVzdEZpdFZpZXdwb3J0RnJvbUFwZXhlcyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzcGVjdGl2ZTsiLCJpbXBvcnQgQWZmaW5lIGZyb20gJy4vZGlzdG9ydGlvbi9hZmZpbmUnO1xyXG5pbXBvcnQgQXJjIGZyb20gJy4vZGlzdG9ydGlvbi9hcmMnO1xyXG5pbXBvcnQgUGVyc3BlY3RpdmUgZnJvbSAnLi9kaXN0b3J0aW9uL3BlcnNwZWN0aXZlJztcclxuXHJcbi8qKlxyXG4gKiBAc3VtbWFyeSBSZXNvbHZlcyBkaXN0b3J0aW9uIGNsYXNzIGluc3RhbmNlIHVzaW5nIGRpc3RvcnRpb24gYXJndW1lbnRzIGFuZCBvcHRpb25hbGx5IGltYWdlLlxyXG4gKlxyXG4gKiBAY2FsbGJhY2sgbGVuc35EaXN0b3J0aW9uUmVzb2x2ZXJcclxuICogQHBhcmFtIHtudW1iZXJbXX0gYXJnc1xyXG4gKiBAcGFyYW0ge0ltYWdlSW50ZXJmYWNlfSBbaW1hZ2VdXHJcbiAqIEByZXR1cm5zIHtEaXN0b3J0aW9uSW50ZXJmYWNlfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBNYWtlIEFmZmluZSBkaXN0b3J0aW9uIHVzaW5nIGNvbnRyb2wgcG9pbnRzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBhcmdzXHJcbiAqIEByZXR1cm5zIHtsZW5zLmRpc3RvcnRpb24uQWZmaW5lfVxyXG4gKi9cclxuZnVuY3Rpb24gYWZmaW5lQnlDb250cm9sUG9pbnRzKGFyZ3MpIHtcclxuICByZXR1cm4gQWZmaW5lLmZyb21Db250cm9sUG9pbnRzKGFyZ3MpO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZSBBZmZpbmUgZGlzdG9ydGlvbiB1c2luZyBhZmZpbmUgbWF0cml4LiBBcmd1bWVudHMgb3JkZXIgaXMgYXMgZGVzY3JpYmVkIGZvciBjb21wYXRpYmlsaXR5IHdpdGggSW1hZ2VNYWdpY2tcclxuICogYXJndW1lbnRzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0gc3hcclxuICogQHBhcmFtIHJ5XHJcbiAqIEBwYXJhbSByeFxyXG4gKiBAcGFyYW0gc3lcclxuICogQHBhcmFtIHR4XHJcbiAqIEBwYXJhbSB0eVxyXG4gKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLkFmZmluZX1cclxuICovXHJcbmZ1bmN0aW9uIGFmZmluZUJ5TWF0cml4IChbc3gsIHJ5LCByeCwgc3ksIHR4LCB0eV0pIHtcclxuICAvLyBDaGFuZ2UgYXJndW1lbnRzIG9yZGVyLlxyXG4gIHJldHVybiBBZmZpbmUuZnJvbUZvcndhcmRNYXRyaXgoW3N4LCByeCwgdHgsIHJ5LCBzeSwgdHldKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2UgcGVyc3BlY3RpdmUgZGlzdG9ydGlvbiB1c2luZyBjb250cm9sIHBvaW50cy5cclxuICogSWYgbnVtYmVyIG9mIGNvbnRyb2wgcG9pbnQgc2V0cyBpcyBsZXNzIHRoYW4gNCAoPCAxNiBhcmd1bWVudHMpLCB0aGlzIHdpbGwgZmFsbGJhY2sgdG8gQWZmaW5lIGRpc3RvcnRpb24uXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFyZ3NcclxuICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5QZXJzcGVjdGl2ZXxsZW5zLmRpc3RvcnRpb24uQWZmaW5lfVxyXG4gKi9cclxuZnVuY3Rpb24gcGVyc3BlY3RpdmVCeUNvbnRyb2xQb2ludHMoYXJncykge1xyXG4gIGlmIChhcmdzLmxlbmd0aCA8IDE2KSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ1BlcnNwZWN0aXZlIGRpc3RvcnRpb24gcmVxdWlyZXMgYXQgbGVhc3QgNCBjb250cm9scyBwb2ludHMgbWFwcGluZyAodSwgdikgLT4gKHgsIHkpLiBBZmZpbmUgZGlzdG9ydGlvbiB3aWxsIGJlIHVzZWQuJyk7XHJcbiAgICByZXR1cm4gQWZmaW5lLmZyb21Db250cm9sUG9pbnRzKGFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFBlcnNwZWN0aXZlLmZyb21Db250cm9sUG9pbnRzKGFyZ3MpO1xyXG59XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJbXX0gYXJnc1xyXG4gKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLlBlcnNwZWN0aXZlfVxyXG4gKi9cclxuZnVuY3Rpb24gcGVyc3BlY3RpdmVCeU1hdHJpeChhcmdzKSB7XHJcbiAgcmV0dXJuIFBlcnNwZWN0aXZlLmZyb21Gb3J3YXJkTWF0cml4KGFyZ3MpO1xyXG59XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJbXX0gYXJnc1xyXG4gKiBAcGFyYW0ge0ltYWdlSW50ZXJmYWNlfSBpbWFnZVxyXG4gKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLkFyY31cclxuICovXHJcbmZ1bmN0aW9uIGFyY0J5QXJndW1lbnRzKGFyZ3MsIGltYWdlKSB7XHJcbiAgcmV0dXJuIEFyYy5mcm9tQXJndW1lbnRzKGltYWdlLnZpZXdwb3J0LCBhcmdzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3RvcnRpb24gdHlwZXMuXHJcbiAqXHJcbiAqIEBlbnVtIHtsZW5zfmRpc3RvcnRpb25SZXNvbHZlcn1cclxuICogQG1lbWJlck9mIGxlbnNcclxuICovXHJcbmNvbnN0IGRpc3RvcnRzID0ge1xyXG4gIC8qKlxyXG4gICAqIEFmZmluZSBkaXN0b3J0aW9uIHVzaW5nIGNvbnRyb2wgcG9pbnRzLiBBcmd1bWVudHMgYXJlIHNldHMgb2YgY29udHJvbCBwb2ludHMgbWFwcGluZ3M6XHJcbiAgICogW3UwLCB2MCwgeDAsIHkwLCAuLi4sIHVOLCB2TiwgeE4sIHlOXSwgd2hlcmUgdSosIHYqIGFyZSBzb3VyY2UgaW1hZ2UgY29vcmRzLCB4KiwgeSogYXJlXHJcbiAgICogZGVzdGluYXRpb24gaW1hZ2UgY29vcmRzLlxyXG4gICAqL1xyXG4gIEFGRklORTogYWZmaW5lQnlDb250cm9sUG9pbnRzLFxyXG4gIC8qKlxyXG4gICAqIEFmZmluZSBkaXN0b3J0aW9uIHVzaW5nIGZvcndhcmQgYWZmaW5lIG1hdHJpeC5cclxuICAgKiBBcmd1bWVudHMgYXJlIGFmZmluZSBtYXRyaXggY29lZmZpY2llbnRzOiBbc3gsIHJ5LCByeCwgc3ksIHR4LCB0eV1cclxuICAgKi9cclxuICBBRkZJTkVfUFJPSkVDVElPTjogYWZmaW5lQnlNYXRyaXgsXHJcbiAgLyoqXHJcbiAgICogUGVyc3BlY3RpdmUgZGlzdG9ydGlvbiB1c2luZyBjb250cm9sIHBvaW50cy4gQXJndW1lbnRzIGFyZSBzZXRzIG9mIGNvbnRyb2wgcG9pbnRzIG1hcHBpbmdzOlxyXG4gICAqIFt1MCwgdjAsIHgwLCB5MCwgLi4uLCB1Tiwgdk4sIHhOLCB5Tl0sIHdoZXJlIHUqLCB2KiBhcmUgc291cmNlIGltYWdlIGNvb3JkcywgeCosIHkqIGFyZVxyXG4gICAqIGRlc3RpbmF0aW9uIGltYWdlIGNvb3Jkcy5cclxuICAgKiBJZiBudW1iZXIgb2YgY29udHJvbCBwb2ludCBzZXRzIGlzIGxlc3MgdGhhbiA0ICg8IDE2IGFyZ3VtZW50cyksIHRoaXMgd2lsbCBmYWxsYmFjayB0byBBZmZpbmUgZGlzdG9ydGlvblxyXG4gICAqIHdpdGggd2FybmluZyBtZXNzYWdlIGluIGNvbnNvbGUuXHJcbiAgICovXHJcbiAgUEVSU1BFQ1RJVkU6IHBlcnNwZWN0aXZlQnlDb250cm9sUG9pbnRzLFxyXG4gIC8qKlxyXG4gICAqIFBlcnNwZWN0aXZlIGRpc3RvcnRpb24gdXNpbmcgZm9yd2FyZCBwZXJzcGVjdGl2ZSBtYXRyaXguIEFyZ3VtZW50cyBhcmUgcGVyc3BlY3RpdmUgbWF0cml4IGNvZWZmaWNpZW50czpcclxuICAgKiBbc3gsIHJ5LCB0eCwgcngsIHN5LCB0eSwgcHgsIHB5XS5cclxuICAgKi9cclxuICBQRVJTUEVDVElWRV9QUk9KRUNUSU9OOiBwZXJzcGVjdGl2ZUJ5TWF0cml4LFxyXG5cclxuICAvKipcclxuICAgKiBBcmMgZGlzdG9ydGlvbi4gQXJndW1lbnRzIGFyZTogW2FyY0FuZ2xlLCByb3RhdGlvbiwgb3V0ZXJSYWRpdXMsIGlubmVyUmFkaXVzXS4gQWxsIGFyZ3VtZW50cyBleGNlcHQgYXJjQW5nbGVcclxuICAgKiBhcmUgb3B0aW9uYWwuIFNlZSB7QGxpbmsgbGVucy5kaXN0b3J0aW9uLkFyYy5mcm9tQXJndW1lbnRzfVxyXG4gICAqL1xyXG4gIEFSQzogYXJjQnlBcmd1bWVudHNcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlciBjdXN0b20gZGlzdG9ydGlvbiByZXNvbHZlci5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICogQHBhcmFtIHtsZW5zfmRpc3RvcnRpb25SZXNvbHZlcn0gcmVzb2x2ZXJcclxuICovXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyKG5hbWUsIHJlc29sdmVyKSB7XHJcbiAgZGlzdG9ydHNbbmFtZV0gID0gcmVzb2x2ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVbnJlZ2lzdGVyIGRpc3RvcnRpb24gcmVzb2x2ZXIuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAqL1xyXG5mdW5jdGlvbiB1bnJlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyKG5hbWUpIHtcclxuICBkZWxldGUgZGlzdG9ydHNbbmFtZV07XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVnaXN0ZXJEaXN0b3J0aW9uUmVzb2x2ZXIsIHVucmVnaXN0ZXJEaXN0b3J0aW9uUmVzb2x2ZXJ9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzdG9ydHM7IiwiLyoqXHJcbiAqIEV4Y2VwdGlvbiBuYW1lc3BhY2VcclxuICpcclxuICogQG5hbWVzcGFjZSBsZW5zLmV4Y2VwdGlvblxyXG4gKi9cclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBMZW5zRXhjZXB0aW9ufSBmcm9tICcuL2xlbnMtZXhjZXB0aW9uJztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBJbnZhbGlkQXJndW1lbnRzTGVuZ3RofSBmcm9tICcuL2ludmFsaWQtYXJndW1lbnRzLWxlbmd0aCc7XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgVW5zb2x2YWJsZU1hdHJpeH0gZnJvbSAnLi91bnNvbHZhYmxlLW1hdHJpeCc7XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgSW52YWxpZEFyZ3VtZW50fSBmcm9tICcuL2ludmFsaWQtYXJndW1lbnQnOyIsImltcG9ydCBMZW5zRXhjZXB0aW9uIGZyb20gJy4vbGVucy1leGNlcHRpb24nO1xyXG5cclxuLyoqXHJcbiAqIEludmFsaWQgQXJndW1lbnQgRXhjZXB0aW9uLlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy5leGNlcHRpb25cclxuICogQGV4dGVuZHMgbGVucy5leGNlcHRpb24uTGVuc0V4Y2VwdGlvblxyXG4gKi9cclxuY2xhc3MgSW52YWxpZEFyZ3VtZW50IGV4dGVuZHMgTGVuc0V4Y2VwdGlvbiB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52YWxpZEFyZ3VtZW50OyIsImltcG9ydCBMZW5zRXhjZXB0aW9uIGZyb20gJy4vbGVucy1leGNlcHRpb24nO1xyXG5cclxuLyoqXHJcbiAqIEV4Y2VwdGlvbiBmb3IgY2FzZXMgd2hlbiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMgcGFzc2VkXHJcbiAqXHJcbiAqIEBleHRlbmRzIGxlbnMuZXhjZXB0aW9uLkxlbnNFeGNlcHRpb25cclxuICogQG1lbWJlck9mIGxlbnMuZXhjZXB0aW9uXHJcbiAqL1xyXG5jbGFzcyBJbnZhbGlkQXJndW1lbnRzTGVuZ3RoIGV4dGVuZHMgTGVuc0V4Y2VwdGlvbiB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52YWxpZEFyZ3VtZW50c0xlbmd0aDsiLCIvKipcclxuICogQmFzZSBMZW5zIGV4Y2VwdGlvblxyXG4gKlxyXG4gKiBAZXh0ZW5kcyBFcnJvclxyXG4gKiBAbWVtYmVyT2YgbGVucy5leGNlcHRpb25cclxuICovXHJcbmNsYXNzIExlbnNFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIHRoaXMubmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuXHJcbiAgICBpZiAodHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IobWVzc2FnZSkpLnN0YWNrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVuc0V4Y2VwdGlvbjsiLCJpbXBvcnQgTGVuc0V4Y2VwdGlvbiBmcm9tICcuL2xlbnMtZXhjZXB0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBFeGNlcHRpb24gZm9yIHVuc29sdmFibGUgbWF0cml4IGluIEdhdXNzLUpvcmRhbiBlbGltaW5hdGlvblxyXG4gKlxyXG4gKiBAZXh0ZW5kcyBsZW5zLmV4Y2VwdGlvbi5MZW5zRXhjZXB0aW9uXHJcbiAqIEBtZW1iZXJPZiBsZW5zLmV4Y2VwdGlvblxyXG4gKi9cclxuY2xhc3MgVW5zb2x2YWJsZU1hdHJpeCBleHRlbmRzIExlbnNFeGNlcHRpb24ge1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xyXG4gICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbnNvbHZhYmxlTWF0cml4OyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXIvZmlsdGVyJztcclxuaW1wb3J0IHtib3gsIGN1YmljQkN9IGZyb20gXCIuL2ZpbHRlci9maWx0ZXItZnVuY3Rpb25zXCI7XHJcblxyXG4vKipcclxuICogRmlsdGVyIGZhY3RvcnkuXHJcbiAqXHJcbiAqIEBjYWxsYmFjayBsZW5zfmZpbHRlckZhY3RvcnlcclxuICogQHJldHVybnMge0ZpbHRlckludGVyZmFjZX1cclxuICovXHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHJldHVybnMge2xlbnMuZmlsdGVyLkZpbHRlcn1cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBST0JJRE9VWCgpIHtcclxuICByZXR1cm4gbmV3IEZpbHRlcihcclxuICAgIGN1YmljQkMoMC4zNzgyMTU3NTUwOTM5OTg2NywgMC4zMTA4OTIxMjI0NTMwMDA2NyksXHJcbiAgICBib3goKSxcclxuICAgIDIsXHJcbiAgICAxLjE2ODU3Nzc2MjA4MzY5MzIsXHJcbiAgICAxXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEByZXR1cm5zIHtsZW5zLmZpbHRlci5GaWx0ZXJ9XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gUk9CSURPVVhfU0hBUlAoKSB7XHJcbiAgcmV0dXJuIG5ldyBGaWx0ZXIoXHJcbiAgICBjdWJpY0JDKDAuMjYyMDE0NTEyMzk5MDE0MiwgMC4zNjg5OTI3NDM4MDA0OTI5KSxcclxuICAgIGJveCgpLFxyXG4gICAgMixcclxuICAgIDEuMTA1ODIyOTMzNzE5MDE5LFxyXG4gICAgMVxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaWx0ZXIgcHJlc2V0cy5cclxuICpcclxuICogQGVudW0ge2xlbnN+ZmlsdGVyRmFjdG9yeX1cclxuICogQG1lbWJlck9mIGxlbnNcclxuICovXHJcbmNvbnN0IGZpbHRlclByZXNldHMgPSB7XHJcbiAgUk9CSURPVVgsXHJcbiAgUk9CSURPVVhfU0hBUlBcclxufTtcclxuXHJcbi8vIFRPRE8gYWRkIG1vcmUgZmlsdGVyIHByZXNldHNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbHRlclByZXNldHM7IiwiLyoqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5maWx0ZXIuZmlsdGVyRnVuY3Rpb25zXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE1ha2VzIGJveCBmaWx0ZXIgZnVuY3Rpb24uXHJcbiAqIEEgQm94IGZpbHRlciBpcyBhIGVxdWFsIHdlaWdodGluZyBmdW5jdGlvbiAoYWxsIHdlaWdodHMgZXF1YWwpLlxyXG4gKiBETyBOT1QgTElNSVQgcmVzdWx0cyBieSBzdXBwb3J0IG9yIHJlc2l6ZSBwb2ludCBzYW1wbGluZyB3aWxsIHdvcmtcclxuICogYXMgaXQgcmVxdWVzdHMgcG9pbnRzIGJleW9uZCBpdHMgbm9ybWFsIDAuMCBzdXBwb3J0IHNpemUuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLmZpbHRlci5maWx0ZXJGdW5jRmFjdG9yaWVzXHJcbiAqIEByZXR1cm5zIHtsZW5zLmZpbHRlci5GaWx0ZXJ+ZmlsdGVyRnVuY3Rpb259XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3Jlc2l6ZV84Y19zb3VyY2UuaHRtbCNsMDAxODEgT3ggZmlsdGVyIGZ1bmN0aW9uIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICovXHJcbmZ1bmN0aW9uIGJveCgpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2VzIGN1YmljQkMgZmlsdGVyIGZ1bmN0aW9uLlxyXG4gKiA8cD5DdWJpYyBGaWx0ZXJzIHVzaW5nIEIsQyBkZXRlcm1pbmVkIHZhbHVlczo8L3A+XHJcbiAqIDxwcmU+XHJcbiAqICAgICBNaXRjaGVsbC1OZXRyYXZhbGkgIEIgPSAxLzMgQyA9IDEvMyAgXCJCYWxhbmNlZFwiIGN1YmljIHNwbGluZSBmaWx0ZXJcclxuICogICAgIENhdG11bGwtUm9tICAgICAgICAgQiA9IDAgICBDID0gMS8yICBJbnRlcnBvbGF0b3J5IGFuZCBleGFjdCBvbiBsaW5lYXJzXHJcbiAqICAgICBTcGxpbmUgICAgICAgICAgICAgIEIgPSAxICAgQyA9IDAgICAgQi1TcGxpbmUgR2F1c3NpYW4gYXBwcm94aW1hdGlvblxyXG4gKiAgICAgSGVybWl0ZSAgICAgICAgICAgICBCID0gMCAgIEMgPSAwICAgIEItU3BsaW5lIGludGVycG9sYXRvclxyXG4gKiA8L3ByZT5cclxuICpcclxuICogPHA+U2VlIHBhcGVyIGJ5IE1pdGNoZWxsIGFuZCBOZXRyYXZhbGksIFJlY29uc3RydWN0aW9uIEZpbHRlcnMgaW4gQ29tcHV0ZXJcclxuICogR3JhcGhpY3MgQ29tcHV0ZXIgR3JhcGhpY3MsIFZvbHVtZSAyMiwgTnVtYmVyIDQsIEF1Z3VzdCAxOTg4XHJcbiAqIHtAbGluayBodHRwOi8vd3d3LmNzLnV0ZXhhcy5lZHUvdXNlcnMvZnVzc2VsbC9jb3Vyc2VzL2NzMzg0Zy9sZWN0dXJlcy9taXRjaGVsbC9NaXRjaGVsbC5wZGZ9LjwvcD5cclxuICpcclxuICogPHA+Q29lZmZpY2VudHMgYXJlIGRldGVybWluZWQgZnJvbSBCLEMgdmFsdWVzOlxyXG4gKiA8cHJlPlxyXG4gKiAgICBQMCA9ICggIDYgLSAyKkIgICAgICAgKS82ID0gY29lZmZbMF1cclxuICogICAgUDEgPSAgICAgICAgIDBcclxuICogICAgUDIgPSAoLTE4ICsxMipCICsgNipDICkvNiA9IGNvZWZmWzFdXHJcbiAqICAgIFAzID0gKCAxMiAtIDkqQiAtIDYqQyApLzYgPSBjb2VmZlsyXVxyXG4gKiAgICBRMCA9ICggICAgICA4KkIgKzI0KkMgKS82ID0gY29lZmZbM11cclxuICogICAgUTEgPSAoICAgIC0xMipCIC00OCpDICkvNiA9IGNvZWZmWzRdXHJcbiAqICAgIFEyID0gKCAgICAgIDYqQiArMzAqQyApLzYgPSBjb2VmZls1XVxyXG4gKiAgICBRMyA9ICggICAgLSAxKkIgLSA2KkMgKS82ID0gY29lZmZbNl1cclxuICogPC9wcmU+XHJcbiAqIHdoaWNoIGFyZSB1c2VkIHRvIGRlZmluZSB0aGUgZmlsdGVyOlxyXG4gKiA8cHJlPlxyXG4gKiAgICBQMCArIFAxKnggKyBQMip4XjIgKyBQMyp4XjMgICAgICAwIDw9IHggPCAxXHJcbiAqICAgIFEwICsgUTEqeCArIFEyKnheMiArIFEzKnheMyAgICAgIDEgPD0geCA8IDJcclxuICogPC9wcmU+XHJcbiAqIHdoaWNoIGVuc3VyZXMgZnVuY3Rpb24gaXMgY29udGludW91cyBpbiB2YWx1ZSBhbmQgZGVyaXZhdGl2ZSAoc2xvcGUpLjwvcD5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMuZmlsdGVyLmZpbHRlckZ1bmNGYWN0b3JpZXNcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvcmVzaXplXzhjX3NvdXJjZS5odG1sI2wwMDIwNyBDdWJpY0JDIGZpbHRlciBmdW5jdGlvbiBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBjXHJcbiAqIEByZXR1cm5zIHtsZW5zLmZpbHRlci5GaWx0ZXJ+ZmlsdGVyRnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiBjdWJpY0JDKGIsIGMpIHtcclxuICBjb25zdCBwMCA9ICg2IC0gMiAqIGIpIC8gNjtcclxuICAvLyBjb25zdCBwMSA9IDA7XHJcbiAgY29uc3QgcDIgPSAoLTE4ICsgMTIgKiBiICsgNiAqIGMpIC8gNjtcclxuICBjb25zdCBwMyA9ICgxMiAtIDkgKiBiIC0gNiAqIGMpIC8gNjtcclxuICBjb25zdCBxMCA9ICg4ICogYiArIDI0ICogYykgLyA2O1xyXG4gIGNvbnN0IHExID0gKC0xMiAqIGIgLSA0OCAqIGMpIC8gNjtcclxuICBjb25zdCBxMiA9ICg2ICogYiArIDMwICogYykgLyA2O1xyXG4gIGNvbnN0IHEzID0gKC0xICogYiAtIDYgKiBjKSAvIDY7XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiAoeCkge1xyXG4gICAgaWYgKHggPCAxKSB7XHJcbiAgICAgIHJldHVybiBwMCArIHggKiAoeCAqIChwMiArIHggKiBwMykpO1xyXG4gICAgfSBlbHNlIGlmICh4IDwgMikge1xyXG4gICAgICByZXR1cm4gcTAgKyB4ICogKHExICsgeCAqIChxMiArIHggKiBxMykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gVE9ETzogYWRkIG1vcmUgZmlsdGVyIGZ1bmN0aW9uc1xyXG5cclxuZXhwb3J0IHtcclxuICBib3gsIGN1YmljQkNcclxufTsiLCJpbXBvcnQge0VQU0lMT059IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBmaWx0ZXIgb3Igd2luZG93aW5nIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAY2FsbGJhY2sgbGVucy5maWx0ZXIuRmlsdGVyfmZpbHRlckZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeF1cclxuICogQHBhcmFtIHtudW1iZXJ9IFtzdXBwb3J0XVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3dpbmRvd1N1cHBvcnRdXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFJlc2FtcGxlIGZpbHRlci5cclxuICpcclxuICogQGltcGxlbWVudHMge0ZpbHRlckludGVyZmFjZX1cclxuICogQG1lbWJlck9mIGxlbnMuZmlsdGVyXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9maWx0ZXIvI2ZpbHRlciBSZXNhbXBsaW5nIEZpbHRlcnN9IGF0IEltYWdlTWFnaWNrIGRvY3NcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cyLmVlY3MuYmVya2VsZXkuZWR1L1B1YnMvVGVjaFJwdHMvMTk4OS9DU0QtODktNTE2LnBkZiBGdW5kYW1lbnRhbHMgb2YgVGV4dHVyZSBNYXBwaW5nIGFuZCBJbWFnZSBXYXJwaW5nIGJ5IFBhdWwgUy4gSGVja2JlcnR9XHJcbiAqIHBhZ2UgNDEsIHNlY3Rpb24gMy40LCAzLjVcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvcmVzaXplXzhjX3NvdXJjZS5odG1sI2wwMDc1NyBBcXVpcmVSZXNpemVGaWx0ZXIgYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gKiBAdHV0b3JpYWwgMDIuMDMucGl4ZWwtY29sb3ItbG9va3VwXHJcbiAqL1xyXG5jbGFzcyBGaWx0ZXIge1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bGVucy5maWx0ZXIuRmlsdGVyfmZpbHRlckZ1bmN0aW9ufSBmaWx0ZXJGdW5jdGlvbiBGaWx0ZXJpbmcgZnVuY3Rpb24uXHJcbiAgICogQHBhcmFtIHtsZW5zLmZpbHRlci5GaWx0ZXJ+ZmlsdGVyRnVuY3Rpb259IHdpbmRvd0Z1bmN0aW9uIFdpbmRvd2luZyBmdW5jdGlvbi5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3VwcG9ydCBGaWx0ZXIgcmVnaW9uIG9mIHN1cHBvcnQgLSB0aGUgZmlsdGVyIHN1cHBvcnQgbGltaXQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlIERpbWVuc2lvbiBzY2FsaW5nIHRvIGZpdCB3aW5kb3cgc3VwcG9ydCAodXNhbGx5IDEuMCkuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtibHVyPTFdIFgtc2NhbGUgKGJsdXItc2hhcnBlbikuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVsbH0gW3dpbmRvd1N1cHBvcnQ9bnVsbF0gV2luZG93IHN1cHBvcnQsIHVzdWFsbHkgZXF1YWwgdG8gc3VwcG9ydCAoZXhwZXJ0IG9ubHkpLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGZpbHRlckZ1bmN0aW9uLCB3aW5kb3dGdW5jdGlvbiwgc3VwcG9ydCwgc2NhbGUsIGJsdXIgPSAxLCB3aW5kb3dTdXBwb3J0ID0gbnVsbCkge1xyXG4gICAgdGhpcy5maWx0ZXJGdW5jdGlvbiA9IGZpbHRlckZ1bmN0aW9uO1xyXG4gICAgdGhpcy53aW5kb3dGdW5jdGlvbiA9IHdpbmRvd0Z1bmN0aW9uO1xyXG4gICAgdGhpcy5zdXBwb3J0ID0gc3VwcG9ydDtcclxuICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcclxuICAgIHRoaXMuYmx1ciA9IGJsdXI7XHJcbiAgICB0aGlzLndpbmRvd1N1cHBvcnQgPSB3aW5kb3dTdXBwb3J0ICE9PSBudWxsID8gd2luZG93U3VwcG9ydCA6IHN1cHBvcnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldFdlaWdodCh4KSB7XHJcbiAgICBjb25zdCB4Qmx1ciA9IHggLyB0aGlzLmJsdXI7XHJcbiAgICBjb25zdCBzY2FsZSA9IHhCbHVyIDwgRVBTSUxPTiA/IDEgOiB0aGlzLndpbmRvdyh0aGlzLnNjYWxlICogeEJsdXIpO1xyXG4gICAgcmV0dXJuIHNjYWxlICogdGhpcy5maWx0ZXIoeEJsdXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBmaWx0ZXIoeCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyRnVuY3Rpb24oeCwgdGhpcy5zdXBwb3J0LCB0aGlzLndpbmRvd1N1cHBvcnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICB3aW5kb3coeCkge1xyXG4gICAgcmV0dXJuIHRoaXMud2luZG93RnVuY3Rpb24oeCwgdGhpcy5zdXBwb3J0LCB0aGlzLndpbmRvd1N1cHBvcnQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyOyIsIi8qKlxyXG4gKiBGaWx0ZXIgbmFtZXNwYWNlXHJcbiAqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5maWx0ZXJcclxuICovXHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgRmlsdGVyfSBmcm9tICcuL2ZpbHRlcic7XHJcblxyXG5pbXBvcnQgKiBhcyBmaWx0ZXJGdW5jdGlvbnMgZnJvbSAnLi9maWx0ZXItZnVuY3Rpb25zJztcclxuXHJcbmV4cG9ydCB7ZmlsdGVyRnVuY3Rpb25zfTsiLCJpbXBvcnQgVmlld3BvcnQgZnJvbSAnLi4vdmlld3BvcnQnO1xyXG5pbXBvcnQgdnB4IGZyb20gJy4uL3ZweCc7XHJcbmltcG9ydCB2aXJ0dWFsUGl4ZWxUcmFpdCBmcm9tICcuLi9taXhpbnMvdmlydHVhbC1waXhlbC10cmFpdCc7XHJcbmltcG9ydCBpbnRlcnBvbGF0aW9uVHJhaXQgZnJvbSAnLi4vbWl4aW5zL2ludGVycG9sYXRpb24tdHJhaXQnO1xyXG5pbXBvcnQgaW50ZXJwb2xhdGlvbiBmcm9tICcuLi9pbnRlcnBvbGF0aW9uJztcclxuXHJcbmZ1bmN0aW9uIG5vdEltcGxlbWVudGVkKG1ldGhvZCkge1xyXG4gIHRocm93IG5ldyBFcnJvcihgJHttZXRob2R9KCkgaXMgYWJzdHJhY3QgbWV0aG9kIGFuZCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGNoaWxkIGNsYXNzYCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBYnN0cmFjdCBpbWFnZSBjbGFzcyBmb3IgSW1hZ2VJbnRlcmZhY2UgaW1wbGVtZW50YXRpb24uXHJcbiAqXHJcbiAqIEBpbXBsZW1lbnRzIHtJbWFnZUludGVyZmFjZX1cclxuICogQG1lbWJlck9mIGxlbnMuaW1hZ2VcclxuICogQGFic3RyYWN0XHJcbiAqIEBtaXhlcyBsZW5zLm1peGlucy5pbnRlcnBvbGF0aW9uVHJhaXRcclxuICogQG1peGVzIGxlbnMubWl4aW5zLnZpcnR1YWxQaXhlbFRyYWl0XHJcbiAqL1xyXG5jbGFzcyBBYnN0cmFjdEltYWdlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIEltYWdlIHdpZHRoXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBJbWFnZSBoZWlnaHRcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMudmlld3BvcnQgPSBuZXcgVmlld3BvcnQoMCwgMCwgdGhpcy53aWR0aCAtIDEsIHRoaXMuaGVpZ2h0IC0gMSk7XHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IFswLCAwLCAwLCAwXTsgLy8gVHJhbnNwYXJlbnQ7XHJcbiAgICB0aGlzLnZpcnR1YWxQaXhlbE1ldGhvZCA9IHZweC5UUkFOU1BBUkVOVDtcclxuICAgIHRoaXMucXVhbnR1bVJhbmdlID0gMjU1O1xyXG4gICAgdGhpcy5pbnRlcnBvbGF0aW9uTWV0aG9kID0gaW50ZXJwb2xhdGlvbi5JTlRFR0VSO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRQaXhlbENvbG9yKHgsIHkpIHtcclxuICAgIHggPSBNYXRoLmZsb29yKHggLSB0aGlzLnZpZXdwb3J0LngxKTtcclxuICAgIHkgPSBNYXRoLmZsb29yKHkgLSB0aGlzLnZpZXdwb3J0LnkxKTtcclxuXHJcbiAgICBpZiAoeCA+PSAwICYmIHggPCB0aGlzLndpZHRoICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5oZWlnaHQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VQaXhlbENvbG9yKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmdldFZpcnR1YWxQaXhlbENvbG9yKHgsIHksIHRoaXMudmlydHVhbFBpeGVsTWV0aG9kKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc2V0UGl4ZWxDb2xvcih4LCB5LCBjb2xvcikge1xyXG4gICAgeCA9IE1hdGguZmxvb3IoeCAtIHRoaXMudmlld3BvcnQueDEpO1xyXG4gICAgeSA9IE1hdGguZmxvb3IoeSAtIHRoaXMudmlld3BvcnQueTEpO1xyXG5cclxuICAgIGlmICh4ID49IDAgJiYgeCA8IHRoaXMud2lkdGggJiYgeSA+PSAwICYmIHkgPCB0aGlzLmhlaWdodCkge1xyXG4gICAgICB0aGlzLnNldEltYWdlUGl4ZWxDb2xvcih4LCB5LCBjb2xvcik7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEdpdmVuIGNvb3JkcyAoJHt4fSwgJHt5fSkgaXMgb3V0IG9mIGltYWdlIGJvdW5kc2ApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRCbGFuayh2aWV3cG9ydCkge1xyXG4gICAgY29uc3QgYmxhbmsgPSB0aGlzLnByZXBhcmVCbGFuayh2aWV3cG9ydC53aWR0aCgpLCB2aWV3cG9ydC5oZWlnaHQoKSk7XHJcblxyXG4gICAgaWYgKGJsYW5rIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICByZXR1cm4gYmxhbmsudGhlbihibGFuayA9PiB7XHJcbiAgICAgICAgYmxhbmsudmlld3BvcnQgID0gdmlld3BvcnQ7XHJcbiAgICAgICAgcmV0dXJuIGJsYW5rO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBibGFuay52aWV3cG9ydCA9IHZpZXdwb3J0O1xyXG4gICAgcmV0dXJuIGJsYW5rO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBzY2FsZShzY2FsZSkge1xyXG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLnZpZXdwb3J0LmNsb25lKCk7XHJcbiAgICB2aWV3cG9ydC5zY2FsZShzY2FsZSk7XHJcbiAgICBjb25zdCByZXNpemVkID0gdGhpcy5yZXNpemUodmlld3BvcnQud2lkdGgoKSwgdmlld3BvcnQuaGVpZ2h0KCkpO1xyXG5cclxuICAgIGlmIChyZXNpemVkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICByZXR1cm4gcmVzaXplZC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXNpemVkLnZpZXdwb3J0ID0gdmlld3BvcnQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc2l6ZWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2l6ZWQudmlld3BvcnQgPSB2aWV3cG9ydDtcclxuICAgIHJldHVybiByZXNpemVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBzeW5jKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHBpeGVsIGNvbG9yIGF0IGdpdmVuIGltYWdlIGNvb3Jkcy4gSW1hZ2UgY29vcmRzIE1VU1QgYmU6IHgg4oiIIFswOyB3aWR0aCAtIDFdLCB5IOKIiCBbMDsgaGVpZ2h0IC0gMV0uXHJcbiAgICpcclxuICAgKiBAYWJzdHJhY3RcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge251bWJlcn0geVxyXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cclxuICAgKi9cclxuICBnZXRJbWFnZVBpeGVsQ29sb3IoeCwgeSkge1xyXG4gICAgbm90SW1wbGVtZW50ZWQoJ2dldEltYWdlUGl4ZWxDb2xvcicpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBwaXhlbCBjb2xvciBhdCBnaXZlbiBpbWFnZSBjb29yZGluYXRlcy5cclxuICAgKlxyXG4gICAqIEBhYnN0cmFjdFxyXG4gICAqIEBwcm90ZWN0ZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHBhcmFtIHtDb2xvcn0gY29sb3JcclxuICAgKi9cclxuICBzZXRJbWFnZVBpeGVsQ29sb3IoeCwgeSwgY29sb3IpIHtcclxuICAgIG5vdEltcGxlbWVudGVkKCdzZXRJbWFnZVBpeGVsQ29sb3InKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXBhcmVzIGJsYW5rIGltYWdlIGZvciB7QGxpbmsgSW1hZ2VJbnRlcmZhY2UjZ2V0Qmxhbmt9IG1ldGhvZC5cclxuICAgKlxyXG4gICAqIEBhYnN0cmFjdFxyXG4gICAqIEBwcm90ZWN0ZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICogQHJldHVybnMge0ltYWdlSW50ZXJmYWNlfVxyXG4gICAqL1xyXG4gIHByZXBhcmVCbGFuayh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBub3RJbXBsZW1lbnRlZCgncHJlcGFyZUJsYW5rJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGF2ZXJhZ2UgY29sb3Igb2Ygd2hvbGUgaW1hZ2UuXHJcbiAgICpcclxuICAgKiBAYWJzdHJhY3RcclxuICAgKiBAcmV0dXJucyB7Q29sb3J9XHJcbiAgICovXHJcbiAgZ2V0QXZlcmFnZUNvbG9yKCkge1xyXG4gICAgbm90SW1wbGVtZW50ZWQoJ2dldEF2ZXJhZ2VDb2xvcicpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyByZXNpemVkIGluc3RhbmNlIG9mIHNlbGYuXHJcbiAgICpcclxuICAgKiBAYWJzdHJhY3RcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gICAqIEByZXR1cm5zIHtJbWFnZUludGVyZmFjZXxQcm9taXNlPEltYWdlSW50ZXJmYWNlPn1cclxuICAgKi9cclxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgbm90SW1wbGVtZW50ZWQoJ3Jlc2l6ZScpO1xyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihBYnN0cmFjdEltYWdlLnByb3RvdHlwZSwgdmlydHVhbFBpeGVsVHJhaXQpO1xyXG5PYmplY3QuYXNzaWduKEFic3RyYWN0SW1hZ2UucHJvdG90eXBlLCBpbnRlcnBvbGF0aW9uVHJhaXQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RJbWFnZTsiLCJpbXBvcnQgQWJzdHJhY3RJbWFnZSBmcm9tICcuL2Fic3RyYWN0LWltYWdlJztcclxuXHJcbi8qKlxyXG4gKiBJbWFnZUludGVyZmFjZSBpbXBsZW1lbnRhdGlvbiBmb3IgZGlzdG9ydGlvbiB1c2luZyBIVE1MNSBDYW52YXMgb2JqZWN0cy5cclxuICogRGlzdG9ydGlvbiByZXN1bHQgd2lsbCBjb250YWluIG5ldyBDYW52YXMgb2JqZWN0IGluIHtAbGluayBsZW5zLmltYWdlLkNhbnZhcyNjYW52YXN9IHByb3BlcnR5LlxyXG4gKlxyXG4gKiBAaW1wbGVtZW50cyB7SW1hZ2VJbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLmltYWdlXHJcbiAqIEBleHRlbmRzIGxlbnMuaW1hZ2UuQWJzdHJhY3RJbWFnZVxyXG4gKi9cclxuY2xhc3MgQ2FudmFzIGV4dGVuZHMgQWJzdHJhY3RJbWFnZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICBzdXBlcihjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5jYW52YXMgICAgID0gY2FudmFzO1xyXG4gICAgdGhpcy5pbWFnZURhdGEgID0gY2FudmFzLmdldENvbnRleHQoJzJkJykuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICB0aGlzLmRhdGEgICAgICAgPSB0aGlzLmltYWdlRGF0YS5kYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRJbWFnZVBpeGVsQ29sb3IoeCwgeSkge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gKHkgKiB0aGlzLndpZHRoICsgeCkgKiA0O1xyXG5cclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcclxuICAgICAgdGhpcy5kYXRhLFxyXG4gICAgICBvZmZzZXQsXHJcbiAgICAgIG9mZnNldCArIDRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHNldEltYWdlUGl4ZWxDb2xvcih4LCB5LCBjb2xvcikge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gKHkgKiB0aGlzLndpZHRoICsgeCkgKiA0O1xyXG5cclxuICAgIGNvbG9yLmZvckVhY2goKGNoYW5uZWwsIGkpID0+IHRoaXMuZGF0YVtvZmZzZXQgKyBpXSA9IGNoYW5uZWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBwcmVwYXJlQmxhbmsod2lkdGgsIGhlaWdodCkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKGNhbnZhcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHN5bmMoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwgMCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldEF2ZXJhZ2VDb2xvcigpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gMTtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSAxO1xyXG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgMSwgMSk7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXHJcbiAgICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKS5kYXRhXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgY29uc3QgZHN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBkc3Qud2lkdGggPSB3aWR0aDtcclxuICAgIGRzdC5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICBkc3QuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihkc3QpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzOyIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZm9yIHtAbGluayBsZW5zLmltYWdlLkNhbnZhc30gZm9yIGRpcmVjdCBkaXN0b3J0aW9uIG9mIERPTSBJbWFnZSBvYmplY3RzLlxyXG4gKiBEaXN0b3J0aW9uIHJlc3VsdCB3aWxsIGNvbnRhaW4gbmV3IERPTSBJbWFnZSBvYmplY3QgaW4ge0BsaW5rIGxlbnMuaW1hZ2UuRG9tSW1hZ2UjaW1hZ2V9IHByb3BlcnR5LlxyXG4gKlxyXG4gKiBAaW1wbGVtZW50cyB7SW1hZ2VJbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLmltYWdlXHJcbiAqIEBleHRlbmRzIGxlbnMuaW1hZ2UuQ2FudmFzXHJcbiAqL1xyXG5jbGFzcyBEb21JbWFnZSBleHRlbmRzIENhbnZhcyB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkltYWdlfEhUTUxJbWFnZUVsZW1lbnR9IGltYWdlIERPTSBJbWFnZSBvYmplY3RcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihpbWFnZSkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSBpbWFnZS53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgc3VwZXIoY2FudmFzKTtcclxuXHJcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHByZXBhcmVCbGFuayh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IobmV3IEltYWdlKHdpZHRoLCBoZWlnaHQpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc3luYygpIHtcclxuICAgIHN1cGVyLnN5bmMoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZSh0aGlzKTtcclxuXHJcbiAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5jYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiB0aGlzLnN5bmMoKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2Uod2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc2l6ZWQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihpbWFnZSk7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc2l6ZWQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGltYWdlLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvbUltYWdlOyIsIi8qKlxyXG4gKiBJbWFnZSBuYW1lc3BhY2VcclxuICpcclxuICogQG5hbWVzcGFjZSBsZW5zLmltYWdlXHJcbiAqL1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIEFic3RyYWN0SW1hZ2V9IGZyb20gJy4vYWJzdHJhY3QtaW1hZ2UnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIENhbnZhc30gZnJvbSAnLi9jYW52YXMnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIERvbUltYWdlfSBmcm9tICcuL2RvbS1pbWFnZSc7IiwiLyoqXHJcbiAqIEBuYW1lc3BhY2UgbGVuc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBMaWJyYXJ5IHZlcnNpb24uXHJcbiAqXHJcbiAqIEByZWFkb25seVxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cclxuY29uc3QgVkVSU0lPTiA9ICcwLjEuMCc7XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgZGlzdG9ydH0gZnJvbSAnLi9kaXN0b3J0JztcclxuXHJcbmV4cG9ydCB7VkVSU0lPTn07XHJcblxyXG5pbXBvcnQgKiBhcyBkaXN0b3J0ZXIgZnJvbSAnLi9kaXN0b3J0ZXInO1xyXG5leHBvcnQge2Rpc3RvcnRlcn07XHJcblxyXG5pbXBvcnQgKiBhcyBkaXN0b3J0aW9uIGZyb20gJy4vZGlzdG9ydGlvbic7XHJcbmV4cG9ydCB7ZGlzdG9ydGlvbn07XHJcblxyXG5pbXBvcnQgKiBhcyBleGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24nO1xyXG5leHBvcnQge2V4Y2VwdGlvbn07XHJcblxyXG5pbXBvcnQgKiBhcyBmaWx0ZXIgZnJvbSAnLi9maWx0ZXInO1xyXG5leHBvcnQge2ZpbHRlcn07XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgZmlsdGVyUHJlc2V0c30gZnJvbSAnLi9maWx0ZXItcHJlc2V0cyc7XHJcblxyXG5pbXBvcnQgKiBhcyBpbWFnZSBmcm9tICcuL2ltYWdlJztcclxuZXhwb3J0IHtpbWFnZX07XHJcblxyXG5pbXBvcnQgKiBhcyBtaXhpbnMgZnJvbSAnLi9taXhpbnMnO1xyXG5leHBvcnQge21peGluc307XHJcblxyXG5pbXBvcnQgKiBhcyByZXNhbXBsZXIgZnJvbSAnLi9yZXNhbXBsZXInO1xyXG5leHBvcnQge3Jlc2FtcGxlcn07XHJcblxyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XHJcbmV4cG9ydCB7dXRpbH07XHJcblxyXG5pbXBvcnQgaW50ZXJwb2xhdGlvbiBmcm9tICcuL2ludGVycG9sYXRpb24nO1xyXG5leHBvcnQge2ludGVycG9sYXRpb259O1xyXG5cclxuaW1wb3J0IHZweCBmcm9tICcuL3ZweCc7XHJcbmV4cG9ydCB7dnB4fTtcclxuXHJcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL3ZpZXdwb3J0JztcclxuZXhwb3J0IHtWaWV3cG9ydH07XHJcblxyXG5pbXBvcnQgZGlzdG9ydHMgZnJvbSAnLi9kaXN0b3J0cyc7XHJcbmV4cG9ydCB7ZGlzdG9ydHN9O1xyXG5cclxuZXhwb3J0IHtyZWdpc3RlckRpc3RvcnRpb25SZXNvbHZlciwgdW5yZWdpc3RlckRpc3RvcnRpb25SZXNvbHZlcn0gZnJvbSAnLi9kaXN0b3J0cyc7XHJcblxyXG5leHBvcnQge1xyXG4gIEVQU0lMT04sXHJcbiAgTUFYSU1VTV9WQUxVRSxcclxuICBNX1BJMixcclxuICBNXzJQSVxyXG59IGZyb20gJy4vY29uc3RhbnRzJzsiLCIvKipcclxuICogQ29sb3IgaW50ZXJwb2xhdGlvbiBtZXRob2RzLlxyXG4gKlxyXG4gKiBAcmVhZG9ubHlcclxuICogQGVudW0ge251bWJlcn1cclxuICogQG1lbWJlcm9mIGxlbnNcclxuICovXHJcbmNvbnN0IGludGVycG9sYXRpb24gPSB7XHJcbiAgLyoqXHJcbiAgICogQXZlcmFnZSA0IG5lYXJlc3QgbmVpZ2hib3Vycy5cclxuICAgKi9cclxuICBBVkVSQUdFOiAxLFxyXG5cclxuICAvKipcclxuICAgKiBBdmVyYWdlIDkgbmVhcmVzdCBuZWlnaGJvdXJzLlxyXG4gICAqL1xyXG4gIEFWRVJBR0VfOTogMixcclxuXHJcbiAgLyoqXHJcbiAgICogQXZlcmFnZSAxNiBuZWFyZXN0IG5laWdoYm91cnMuXHJcbiAgICovXHJcbiAgQVZFUkFHRV8xNjogMyxcclxuXHJcbiAgLyoqXHJcbiAgICogSnVzdCByZXR1cm4gYmFja2dyb3VuZCBjb2xvci5cclxuICAgKi9cclxuICBCQUNLR1JPVU5EOiA0LFxyXG5cclxuICAvKipcclxuICAgKiBJbnRlZ2VyIChmbG9vcikgaW50ZXJwb2xhdGlvbi5cclxuICAgKi9cclxuICBJTlRFR0VSOiA4IC8vIFRPRE86IGltcGxlbWVudCBhbmQgYWRkIG90aGVyIG1ldGhvZHNcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVycG9sYXRpb247IiwiaW1wb3J0IFZpZXdwb3J0IGZyb20gXCIuLi92aWV3cG9ydFwiO1xyXG5cclxuLyoqXHJcbiAqIE1peGluIGZvciBjbGFzc2VzIGltcGxlbWVudGluZyB7QGxpbmsgRGlzdG9ydGlvbkludGVyZmFjZX0gdGhhdCBjYW4gY2FsY3VsYXRlIGJlc3QgZml0IHZpZXdwb3J0IHVzaW5nIGZvcndhcmRcclxuICogcGl4ZWwgbWFwcGluZyBvZiBpbWFnZSBjb3JuZXJzLlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy5taXhpbnNcclxuICogQG1peGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVzQmVzdEZpdFZpZXdwb3J0RnJvbUFwZXhlcyA9IHtcclxuICAvKipcclxuICAgKiBSZXR1cm5zIGJlc3QgZml0IHZpZXdwb3J0IGZvciBkaXN0b3J0aW9uLCB1c2luZyBmb3J3YXJkIG1hcHBpbmcgZm9yIGltYWdlIGFwZXhlcyAoY29ybmVycykuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2xlbnMuVmlld3BvcnR9IHZpZXdwb3J0XHJcbiAgICogQHJldHVybnMge2xlbnMuVmlld3BvcnR9XHJcbiAgICovXHJcbiAgZ2V0QmVzdEZpdFZpZXdwb3J0KHZpZXdwb3J0KSB7XHJcbiAgICBjb25zdCB1MSA9IHZpZXdwb3J0LngxLFxyXG4gICAgICB2MSA9IHZpZXdwb3J0LnkxLFxyXG4gICAgICB1MiA9IHZpZXdwb3J0LngyICsgMSxcclxuICAgICAgdjIgPSB2aWV3cG9ydC55MiArIDEsXHJcbiAgICAgIFt4LCB5XSA9IHRoaXMuZm9yd2FyZE1hcCh1MSwgdjEpLFxyXG4gICAgICBiZXN0Rml0ID0gbmV3IFZpZXdwb3J0KHgsIHksIHgsIHkpO1xyXG5cclxuICAgIFtbdTIsIHYxXSwgW3UyLCB2Ml0sIFt1MSwgdjJdXS5mb3JFYWNoKGFwZXggPT4gYmVzdEZpdC5leHBhbmQoLi4udGhpcy5mb3J3YXJkTWFwKC4uLmFwZXgpKSk7XHJcblxyXG4gICAgYmVzdEZpdC5maXhCb3VuZHMoKTtcclxuXHJcbiAgICByZXR1cm4gYmVzdEZpdDtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVzQmVzdEZpdFZpZXdwb3J0RnJvbUFwZXhlczsiLCIvKipcclxuICogQG5hbWVzcGFjZSBsZW5zLm1peGluc1xyXG4gKi9cclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0aW9uVHJhaXR9IGZyb20gJy4vaW50ZXJwb2xhdGlvbi10cmFpdCc7XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgdmlydHVhbFBpeGVsVHJhaXR9IGZyb20gJy4vdmlydHVhbC1waXhlbC10cmFpdCc7XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXN9IGZyb20gJy4vY3JlYXRlcy1iZXN0Rml0LXZpZXdwb3J0LWZyb20tYXBleGVzJzsiLCJpbXBvcnQgbWV0aG9kcyBmcm9tICcuLi9pbnRlcnBvbGF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBBZGRzIGNvbG9yIGludGVycG9sYXRpb24gZnVuY3Rpb25hbGl0eSBmb3IgY2xhc3NlcyB0aGF0IGltcGxlbWVudCB7QGxpbmsgSW1hZ2VJbnRlcmZhY2V9XHJcbiAqXHJcbiAqIEBtaXhpblxyXG4gKiBAbWVtYmVyT2YgbGVucy5taXhpbnNcclxuICovXHJcbmNvbnN0IGludGVycG9sYXRpb25UcmFpdCA9IHtcclxuICAvKipcclxuICAgKiBSZXR1cm5zIGludGVycG9sYXRlZCBwaXhlbCBjb2xvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICAgKiBAcGFyYW0ge2xlbnMuaW50ZXJwb2xhdGlvbn0gW2ludGVycG9sYXRpb25NZXRob2Q9dGhpcy5pbnRlcnBvbGF0aW9uTWV0aG9kXVxyXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cclxuICAgKi9cclxuICBnZXRJbnRlcnBvbGF0ZWRQaXhlbENvbG9yKHgsIHksIGludGVycG9sYXRpb25NZXRob2QgPSB0aGlzLmludGVycG9sYXRpb25NZXRob2QpIHtcclxuICAgIHN3aXRjaCAoaW50ZXJwb2xhdGlvbk1ldGhvZCkge1xyXG4gICAgICBjYXNlIG1ldGhvZHMuQVZFUkFHRTpcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0ZUF2ZXJhZ2UoeCwgeSwgMik7XHJcbiAgICAgIGNhc2UgbWV0aG9kcy5BVkVSQUdFXzk6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGVBdmVyYWdlKHgsIHksIDMpO1xyXG4gICAgICBjYXNlIG1ldGhvZHMuQVZFUkFHRV8xNjpcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0ZUF2ZXJhZ2UoeCwgeSwgNCk7XHJcbiAgICAgIGNhc2UgbWV0aG9kcy5CQUNLR1JPVU5EOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tncm91bmRDb2xvci5zbGljZSgpO1xyXG4gICAgICBjYXNlIG1ldGhvZHMuSU5URUdFUjpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQaXhlbENvbG9yKE1hdGguZmxvb3IoeCksIE1hdGguZmxvb3IoeSkpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgaW50ZXJwb2xhdGVkIGNvbG9yIGJ5IGF2ZXJhZ2Ugb2YgbmVpZ2hib3JzLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XHJcbiAgICogQHJldHVybnMge0NvbG9yfVxyXG4gICAqL1xyXG4gIGludGVycG9sYXRlQXZlcmFnZSh4LCB5LCBjb3VudCA9IDIpIHtcclxuICAgIGxldCBzdGFydFgsIHN0YXJ0WTtcclxuXHJcbiAgICBzd2l0Y2ggKGNvdW50KSB7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICBzdGFydFggPSBNYXRoLmZsb29yKHgpO1xyXG4gICAgICAgIHN0YXJ0WSA9IE1hdGguZmxvb3IoeSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgc3RhcnRYID0gTWF0aC5mbG9vcih4ICsgMC41KSAtIDE7XHJcbiAgICAgICAgc3RhcnRZID0gTWF0aC5mbG9vcih5ICsgMC41KSAtIDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICBzdGFydFggPSBNYXRoLmZsb29yKHgpIC0gMTtcclxuICAgICAgICBzdGFydFkgPSBNYXRoLmZsb29yKHkpIC0gMTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyYW0gJ2NvdW50JyBtdXN0IGJlIGludGVnZXIgYmV0d2VlbiAyIGFuZCA0LlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbmRYID0gc3RhcnRYICsgY291bnQ7XHJcbiAgICBjb25zdCBlbmRZID0gc3RhcnRZICsgY291bnQ7XHJcbiAgICBsZXQgY29sb3IgPSBbMCwgMCwgMCwgMF07XHJcblxyXG4gICAgZm9yIChsZXQgWSA9IHN0YXJ0WTsgWSA8IGVuZFk7IFkrKykge1xyXG4gICAgICBmb3IgKGxldCBYID0gc3RhcnRYOyBYIDwgZW5kWDsgWCsrKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQaXhlbENvbG9yKHgsIHkpLmZvckVhY2goKGNoYW5uZWwsIGkpID0+IGNvbG9yW2ldICs9IGNoYW5uZWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2FtbWEgPSAxIC8gKGNvdW50ICogY291bnQpO1xyXG5cclxuICAgIHJldHVybiBjb2xvci5tYXAoY2hhbm5lbCA9PiBNYXRoLnJvdW5kKGNoYW5uZWwgKiBnYW1tYSkpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVycG9sYXRpb25UcmFpdDsiLCJpbXBvcnQgdnB4TWV0aG9kcyBmcm9tICcuLi92cHgnO1xyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxyXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAqIEByZXR1cm5zIHtQb2ludH1cclxuICovXHJcbmZ1bmN0aW9uIGdldEVkZ2VDb29yZHMoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gIHJldHVybiBbXHJcbiAgICBNYXRoLm1heCgwLCBNYXRoLm1pbih3aWR0aCAtIDEsIHgpKSxcclxuICAgIE1hdGgubWF4KDAsIE1hdGgubWluKGhlaWdodCAtIDEsIHkpKVxyXG4gIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0geFxyXG4gKiBAcGFyYW0ge251bWJlcn0geVxyXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gKiBAcmV0dXJucyB7UG9pbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRUaWxlQ29vcmRzKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICBsZXQgcnggPSB4ICUgd2lkdGgsXHJcbiAgICByeSA9IHkgJSBoZWlnaHQ7XHJcblxyXG4gIHJldHVybiBbXHJcbiAgICByeCA8IDAgPyB3aWR0aCArIHJ4IDogcngsXHJcbiAgICByeSA8IDAgPyBoZWlnaHQgKyByeSA6IHJ5XHJcbiAgXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgdmlydHVhbCBwaXhlbCBiZWhhdmlvciB0byBjbGFzc2VzIHRoYXQgaW1wbGVtZW50IEltYWdlSW50ZXJmYWNlLlxyXG4gKlxyXG4gKiBAbWl4aW5cclxuICogQG1lbWJlck9mIGxlbnMubWl4aW5zXHJcbiAqIEB0dXRvcmlhbCAwMi4wNS52aXJ0dWFsLXBpeGVscy1hbmQtbWF0dGVcclxuICovXHJcbmNvbnN0IHZpcnR1YWxQaXhlbFRyYWl0ID0ge1xyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdmlydHVhbCBwaXhlbCBjb2xvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IEltYWdlIFgtY29vcmRpbmF0ZSBPVVRTSURFIG9mIGltYWdlIGJvdW5kcy5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geSBJbWFnZSBZLWNvb3JkaW5hdGUgT1VUU0lERSBvZiBpbWFnZSBib3VuZHMuXHJcbiAgICogQHBhcmFtIHtsZW5zLnZweH0gbWV0aG9kIFZpcnR1YWwgcGl4ZWwgbWV0aG9kLlxyXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cclxuICAgKi9cclxuICBnZXRWaXJ0dWFsUGl4ZWxDb2xvcih4LCB5LCBtZXRob2QpIHtcclxuICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5CQUNLR1JPVU5EOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tncm91bmRDb2xvci5zbGljZSgpO1xyXG5cclxuICAgICAgY2FzZSB2cHhNZXRob2RzLkVER0U6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VQaXhlbENvbG9yKC4uLmdldEVkZ2VDb29yZHMoeCwgeSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5NSVJST1I6XHJcbiAgICAgICAgbGV0IFt0eCwgdHldID0gZ2V0VGlsZUNvb3Jkcyh4LCB5LCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuXHJcbiAgICAgICAgaWYgKHR4ID4gdGhpcy53aWR0aCAtIDEpIHtcclxuICAgICAgICAgIHR4ID0gdGhpcy53aWR0aCAtICh0eCAtIHRoaXMud2lkdGgpIC0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eSA+IHRoaXMuaGVpZ2h0IC0gMSkge1xyXG4gICAgICAgICAgdHkgPSB0aGlzLmhlaWdodCAtICh0eSAtIHRoaXMuaGVpZ2h0KSAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IodHgsIHR5KTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5USUxFOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEltYWdlUGl4ZWxDb2xvciguLi5nZXRUaWxlQ29vcmRzKHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSk7XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuVFJBTlNQQVJFTlQ6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFswLCAwLCAwLCAwXTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5CTEFDSzpcclxuICAgICAgICByZXR1cm4gWzAsIDAsIDAsIHRoaXMucXVhbnR1bVJhbmdlXTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5XSElURTpcclxuICAgICAgICByZXR1cm4gbmV3IEFycmF5KDQpLmZpbGwodGhpcy5xdWFudHVtUmFuZ2UpO1xyXG5cclxuICAgICAgY2FzZSB2cHhNZXRob2RzLkdSQVk6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgzKS5maWxsKE1hdGgucm91bmQodGhpcy5xdWFudHVtUmFuZ2UgLyAyKSkuY29uY2F0KFt0aGlzLnF1YW50dW1SYW5nZV0pO1xyXG5cclxuICAgICAgY2FzZSB2cHhNZXRob2RzLkhPUklaT05UQUxfVElMRTpcclxuICAgICAgY2FzZSB2cHhNZXRob2RzLkhPUklaT05UQUxfVElMRV9FREdFOlxyXG4gICAgICAgIGlmICh5IDwgMCB8fCB5ID49IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICByZXR1cm4gbWV0aG9kID09PSB2cHhNZXRob2RzLkhPUklaT05UQUxfVElMRSA/IHRoaXMuYmFja2dyb3VuZENvbG9yLnNsaWNlKClcclxuICAgICAgICAgICAgOiB0aGlzLmdldEltYWdlUGl4ZWxDb2xvciguLi5nZXRFZGdlQ29vcmRzKHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoLi4uZ2V0VGlsZUNvb3Jkcyh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpO1xyXG5cclxuICAgICAgY2FzZSB2cHhNZXRob2RzLlZFUlRJQ0FMX1RJTEU6XHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5WRVJUSUNBTF9USUxFX0VER0U6XHJcbiAgICAgICAgaWYgKHggPCAwIHx8IHkgPj0gdGhpcy53aWR0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIG1ldGhvZCA9PT0gdnB4TWV0aG9kcy5WRVJUSUNBTF9USUxFID8gdGhpcy5iYWNrZ3JvdW5kQ29sb3Iuc2xpY2UoKVxyXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW1hZ2VQaXhlbENvbG9yKC4uLmdldEVkZ2VDb29yZHMoeCwgeSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEltYWdlUGl4ZWxDb2xvciguLi5nZXRUaWxlQ29vcmRzKHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSk7XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuUkFORE9NOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEltYWdlUGl4ZWxDb2xvcihcclxuICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMud2lkdGgpLFxyXG4gICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2aXJ0dWFsUGl4ZWxUcmFpdDsiLCJpbXBvcnQgdnB4IGZyb20gJy4uL3ZweCc7XHJcbmltcG9ydCBpbnRlcnBvbGF0aW9uIGZyb20gJy4uL2ludGVycG9sYXRpb24nO1xyXG5pbXBvcnQge01BWElNVU1fVkFMVUV9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHtibGVuZENvbG9yc30gZnJvbSBcIi4uL3V0aWwvdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xyXG5jb25zdCBXRUlHSFRfTE9PS1VQX1RBQkxFX1dJRFRIID0gMTAyNDtcclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0ZpbHRlckludGVyZmFjZX0gZmlsdGVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdXBwb3J0XHJcbiAqIEByZXR1cm5zIHtudW1iZXJbXX1cclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkV2VpZ2h0TG9va3VwVGFibGUoZmlsdGVyLCBzdXBwb3J0KSB7XHJcbiAgY29uc3QgdGFibGUgPSBbXTtcclxuXHJcbiAgY29uc3QgclNjYWxlID0gc3VwcG9ydCAqIE1hdGguc3FydCgxIC8gV0VJR0hUX0xPT0tVUF9UQUJMRV9XSURUSCk7XHJcblxyXG4gIGZvciAobGV0IFEgPSAwOyBRIDwgV0VJR0hUX0xPT0tVUF9UQUJMRV9XSURUSDsgUSsrKSB7XHJcbiAgICB0YWJsZVtRXSA9IGZpbHRlci5nZXRXZWlnaHQoTWF0aC5zcXJ0KFEpICogclNjYWxlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0YWJsZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKiBAcGFyYW0gcXVhbnR1bVJhbmdlXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBjbGFtcFRvUXVhbnR1bSh2YWx1ZSwgcXVhbnR1bVJhbmdlKSB7XHJcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKHF1YW50dW1SYW5nZSwgdmFsdWUpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDxwPkNsYW1wRWxsaXBzZUF4ZXMoKSBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgaW5wdXQgdmVjdG9ycyBpbnRvIGEgbWFqb3IgYW5kXHJcbiAqIG1pbm9yIGF4aXMgdW5pdCB2ZWN0b3JzLCBhbmQgdGhlaXIgbWFnbml0dWRlLiAgVGhpcyBhbGxvd3MgdXMgdG9cclxuICogZW5zdXJlIHRoYXQgdGhlIGVsbGlwc2UgZ2VuZXJhdGVkIGlzIG5ldmVyIHNtYWxsZXIgdGhhbiB0aGUgdW5pdFxyXG4gKiBjaXJjbGUgYW5kIHRodXMgbmV2ZXIgdG9vIHNtYWxsIGZvciB1c2UgaW4gRVdBIHJlc2FtcGxpbmcuPC9wPlxyXG4gKlxyXG4gKiA8cD5UaGlzIHB1cmVseSBtYXRoZW1hdGljYWwgJ21hZ2ljJyB3YXMgcHJvdmlkZWQgYnkgUHJvZmVzc29yIE5pY29sYXNcclxuICogUm9iaWRvdXggYW5kIGhpcyBNYXN0ZXJzIHN0dWRlbnQgQ2hhbnRhbCBSYWNldHRlLjwvcD5cclxuICpcclxuICogPHA+UmVmZXJlbmNlOiBcIldlIFJlY29tbWVuZCBTaW5ndWxhciBWYWx1ZSBEZWNvbXBvc2l0aW9uXCIsIERhdmlkIEF1c3RpblxyXG4gKiAgIHtAbGluayBodHRwOi8vd3d3LmFtcy5vcmcvc2FtcGxpbmdzL2ZlYXR1cmUtY29sdW1uL2ZjYXJjLXN2ZH08L3A+XHJcbiAqXHJcbiAqIDxwPkJ5IGdlbmVyYXRpbmcgbWFqb3IgYW5kIG1pbm9yIGF4aXMgdmVjdG9ycywgd2UgY2FuIGFjdHVhbGx5IHVzZSB0aGVcclxuICogZWxsaXBzZSBpbiBpdHMgXCJjYW5vbmljYWwgZm9ybVwiLCBieSByZW1hcHBpbmcgdGhlIGR4LGR5IG9mIHRoZVxyXG4gKiBzYW1wbGVkIHBvaW50IGludG8gZGlzdGFuY2VzIGFsb25nIHRoZSBtYWpvciBhbmQgbWlub3IgYXhpcyB1bml0XHJcbiAqIHZlY3RvcnMuPC9wPlxyXG4gKlxyXG4gKiA8cD5SZWZlcmVuY2U6IHtAbGluayBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0VsbGlwc2UjQ2Fub25pY2FsX2Zvcm19PC9wPlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHV4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXlcclxuICogQHBhcmFtIHtudW1iZXJ9IGR2eFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHZ5XHJcbiAqIEByZXR1cm5zIHtudW1iZXJbXX1cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvcmVzYW1wbGVfOGNfc291cmNlLmh0bWwjbDAwNzA5IENsYW1wVXBBeGVzKCkgYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gKiBAdHV0b3JpYWwgMDIuMDMucGl4ZWwtY29sb3ItbG9va3VwXHJcbiAqL1xyXG5mdW5jdGlvbiBjbGFtcEVsbGlwc2VBeGVzKGR1eCwgZHV5LCBkdngsIGR2eSkge1xyXG4gIC8qXHJcbiAgICogQ2xhbXBVcEF4ZXMgdGFrZXMgYW4gaW5wdXQgMngyIG1hdHJpeFxyXG4gICAqXHJcbiAgICogWyBhIGIgXSA9IFsgZHV4IGR1eSBdXHJcbiAgICogWyBjIGQgXSA9IFsgZHZ4IGR2eSBdXHJcbiAgICpcclxuICAgKiBhbmQgY29tcHV0ZXMgZnJvbSBpdCB0aGUgbWFqb3IgYW5kIG1pbm9yIGF4aXMgdmVjdG9ycyBbbWFqb3JfeCxcclxuICAgKiBtYWpvcl95XSBhbmQgW21pbm9yX3gsbWlub3JfeV0gb2YgdGhlIHNtYWxsZXN0IGVsbGlwc2UgY29udGFpbmluZ1xyXG4gICAqIGJvdGggdGhlIHVuaXQgZGlzayBhbmQgdGhlIGVsbGlwc2Ugd2hpY2ggaXMgdGhlIGltYWdlIG9mIHRoZSB1bml0XHJcbiAgICogZGlzayBieSB0aGUgbGluZWFyIHRyYW5zZm9ybWF0aW9uXHJcbiAgICpcclxuICAgKiBbIGR1eCBkdXkgXSBbU10gPSBbc11cclxuICAgKiBbIGR2eCBkdnkgXSBbVF0gPSBbdF1cclxuICAgKlxyXG4gICAqIChUaGUgdmVjdG9yIFtTLFRdIGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYSBwb3NpdGlvbiBpbiBvdXRwdXRcclxuICAgKiBzcGFjZSBhbmQgW1gsWV07IHRoZSB2ZWN0b3IgW3MsdF0gaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhXHJcbiAgICogcG9zaXRpb24gaW4gaW5wdXQgc3BhY2UgYW5kIFt4LHldLilcclxuICAgKi9cclxuICAvKlxyXG4gICAqIE91dHB1dDpcclxuICAgKlxyXG4gICAqIG1ham9yX21hZyBpcyB0aGUgaGFsZi1sZW5ndGggb2YgdGhlIG1ham9yIGF4aXMgb2YgdGhlIFwibmV3XCJcclxuICAgKiBlbGxpcHNlLlxyXG4gICAqXHJcbiAgICogbWlub3JfbWFnIGlzIHRoZSBoYWxmLWxlbmd0aCBvZiB0aGUgbWlub3IgYXhpcyBvZiB0aGUgXCJuZXdcIlxyXG4gICAqIGVsbGlwc2UuXHJcbiAgICpcclxuICAgKiBtYWpvcl91bml0X3ggaXMgdGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgbWFqb3IgYXhpcyBkaXJlY3Rpb24gdmVjdG9yXHJcbiAgICogb2YgYm90aCB0aGUgXCJvbGRcIiBhbmQgXCJuZXdcIiBlbGxpcHNlcy5cclxuICAgKlxyXG4gICAqIG1ham9yX3VuaXRfeSBpcyB0aGUgeS1jb29yZGluYXRlIG9mIHRoZSBtYWpvciBheGlzIGRpcmVjdGlvbiB2ZWN0b3IuXHJcbiAgICpcclxuICAgKiBtaW5vcl91bml0X3ggaXMgdGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgbWlub3IgYXhpcyBkaXJlY3Rpb24gdmVjdG9yLlxyXG4gICAqXHJcbiAgICogbWlub3JfdW5pdF95IGlzIHRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIG1pbm9yIGF4aXMgZGlyZWN0aW9uIHZlY3Rvci5cclxuICAgKlxyXG4gICAqIFVuaXQgdmVjdG9ycyBhcmUgdXNlZnVsIGZvciBjb21wdXRpbmcgcHJvamVjdGlvbnMsIGluIHBhcnRpY3VsYXIsXHJcbiAgICogdG8gY29tcHV0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhIHBvaW50IGluIG91dHB1dCBzcGFjZSBhbmQgdGhlXHJcbiAgICogY2VudGVyIG9mIGEgdW5pdCBkaXNrIGluIG91dHB1dCBzcGFjZSwgdXNpbmcgdGhlIHBvc2l0aW9uIG9mIHRoZVxyXG4gICAqIGNvcnJlc3BvbmRpbmcgcG9pbnQgW3MsdF0gaW4gaW5wdXQgc3BhY2UuIEZvbGxvd2luZyB0aGUgY2xhbXBpbmcsXHJcbiAgICogdGhlIHNxdWFyZSBvZiB0aGlzIGRpc3RhbmNlIGlzXHJcbiAgICpcclxuICAgKiAoICggcyAqIG1ham9yX3VuaXRfeCArIHQgKiBtYWpvcl91bml0X3kgKSAvIG1ham9yX21hZyApXjJcclxuICAgKiArXHJcbiAgICogKCAoIHMgKiBtaW5vcl91bml0X3ggKyB0ICogbWlub3JfdW5pdF95ICkgLyBtaW5vcl9tYWcgKV4yXHJcbiAgICpcclxuICAgKiBJZiBzdWNoIGRpc3RhbmNlcyB3aWxsIGJlIGNvbXB1dGVkIGZvciBtYW55IFtzLHRdJ3MsIGl0IG1ha2VzXHJcbiAgICogc2Vuc2UgdG8gYWN0dWFsbHkgY29tcHV0ZSB0aGUgcmVjaXByb2NhbCBvZiBtYWpvcl9tYWcgYW5kXHJcbiAgICogbWlub3JfbWFnIGFuZCBtdWx0aXBseSB0aGVtIGJ5IHRoZSBhYm92ZSB1bml0IGxlbmd0aHMuXHJcbiAgICpcclxuICAgKiBOb3csIGlmIHlvdSB3YW50IHRvIG1vZGlmeSB0aGUgaW5wdXQgcGFpciBvZiB0YW5nZW50IHZlY3RvcnMgc29cclxuICAgKiB0aGF0IGl0IGRlZmluZXMgdGhlIG1vZGlmaWVkIGVsbGlwc2UsIGFsbCB5b3UgaGF2ZSB0byBkbyBpcyBzZXRcclxuICAgKlxyXG4gICAqIG5ld2R1eCA9IG1ham9yX21hZyAqIG1ham9yX3VuaXRfeFxyXG4gICAqIG5ld2R2eCA9IG1ham9yX21hZyAqIG1ham9yX3VuaXRfeVxyXG4gICAqIG5ld2R1eSA9IG1pbm9yX21hZyAqIG1pbm9yX3VuaXRfeCA9IG1pbm9yX21hZyAqIC1tYWpvcl91bml0X3lcclxuICAgKiBuZXdkdnkgPSBtaW5vcl9tYWcgKiBtaW5vcl91bml0X3kgPSBtaW5vcl9tYWcgKiAgbWFqb3JfdW5pdF94XHJcbiAgICpcclxuICAgKiBhbmQgdXNlIHRoZXNlIHRhbmdlbnQgdmVjdG9ycyBhcyBpZiB0aGV5IHdlcmUgdGhlIG9yaWdpbmFsIG9uZXMuXHJcbiAgICogVXN1YWxseSwgdGhpcyBpcyBhIGRyYXN0aWMgY2hhbmdlIGluIHRoZSB0YW5nZW50IHZlY3RvcnMgZXZlbiBpZlxyXG4gICAqIHRoZSBzaW5ndWxhciB2YWx1ZXMgYXJlIG5vdCBjbGFtcGVkOyBmb3IgZXhhbXBsZSwgdGhlIG1pbm9yIGF4aXNcclxuICAgKiB2ZWN0b3IgYWx3YXlzIHBvaW50cyBpbiBhIGRpcmVjdGlvbiB3aGljaCBpcyA5MCBkZWdyZWVzXHJcbiAgICogY291bnRlcmNsb2Nrd2lzZSBmcm9tIHRoZSBkaXJlY3Rpb24gb2YgdGhlIG1ham9yIGF4aXMgdmVjdG9yLlxyXG4gICAqL1xyXG4gIC8qXHJcbiAgICogRGlzY3Vzc2lvbjpcclxuICAgKlxyXG4gICAqIEdPQUw6IEZpeCB0aGluZ3Mgc28gdGhhdCB0aGUgcHVsbGJhY2ssIGluIGlucHV0IHNwYWNlLCBvZiBhIGRpc2tcclxuICAgKiBvZiByYWRpdXMgciBpbiBvdXRwdXQgc3BhY2UgaXMgYW4gZWxsaXBzZSB3aGljaCBjb250YWlucywgYXRcclxuICAgKiBsZWFzdCwgYSBkaXNjIG9mIHJhZGl1cyByLiAoTWFrZSB0aGlzIGhvbGQgZm9yIGFueSByPjAuKVxyXG4gICAqXHJcbiAgICogRVNTRU5DRSBPRiBUSEUgTUVUSE9EOiBDb21wdXRlIHRoZSBwcm9kdWN0IG9mIHRoZSBmaXJzdCB0d29cclxuICAgKiBmYWN0b3JzIG9mIGFuIFNWRCBvZiB0aGUgbGluZWFyIHRyYW5zZm9ybWF0aW9uIGRlZmluaW5nIHRoZVxyXG4gICAqIGVsbGlwc2UgYW5kIG1ha2Ugc3VyZSB0aGF0IGJvdGggaXRzIGNvbHVtbnMgaGF2ZSBub3JtIGF0IGxlYXN0IDEuXHJcbiAgICogQmVjYXVzZSByb3RhdGlvbnMgYW5kIHJlZmxleGlvbnMgbWFwIGRpc2tzIHRvIHRoZW1zZWx2ZXMsIGl0IGlzXHJcbiAgICogbm90IG5lY2Vzc2FyeSB0byBjb21wdXRlIHRoZSB0aGlyZCAocmlnaHRtb3N0KSBmYWN0b3Igb2YgdGhlIFNWRC5cclxuICAgKlxyXG4gICAqIERFVEFJTFM6IEZpbmQgdGhlIHNpbmd1bGFyIHZhbHVlcyBhbmQgKHVuaXQpIGxlZnQgc2luZ3VsYXJcclxuICAgKiB2ZWN0b3JzIG9mIEppbnYsIGNsYW1wbGluZyB1cCB0aGUgc2luZ3VsYXIgdmFsdWVzIHRvIDEsIGFuZFxyXG4gICAqIG11bHRpcGx5IHRoZSB1bml0IGxlZnQgc2luZ3VsYXIgdmVjdG9ycyBieSB0aGUgbmV3IHNpbmd1bGFyXHJcbiAgICogdmFsdWVzIGluIG9yZGVyIHRvIGdldCB0aGUgbWlub3IgYW5kIG1ham9yIGVsbGlwc2UgYXhpcyB2ZWN0b3JzLlxyXG4gICAqXHJcbiAgICogSW1hZ2UgcmVzYW1wbGluZyBjb250ZXh0OlxyXG4gICAqXHJcbiAgICogVGhlIEphY29iaWFuIG1hdHJpeCBvZiB0aGUgdHJhbnNmb3JtYXRpb24gYXQgdGhlIG91dHB1dCBwb2ludFxyXG4gICAqIHVuZGVyIGNvbnNpZGVyYXRpb24gaXMgZGVmaW5lZCBhcyBmb2xsb3dzOlxyXG4gICAqXHJcbiAgICogQ29uc2lkZXIgdGhlIHRyYW5zZm9ybWF0aW9uICh4LHkpIC0+IChYLFkpIGZyb20gaW5wdXQgbG9jYXRpb25zXHJcbiAgICogdG8gb3V0cHV0IGxvY2F0aW9ucy4gKEFudGhvbnkgVGh5c3NlbiwgZWxzZXdoZXJlIGluIHJlc2FtcGxlLmMsXHJcbiAgICogdXNlcyB0aGUgbm90YXRpb24gKHUsdikgLT4gKHgseSkuKVxyXG4gICAqXHJcbiAgICogVGhlIEphY29iaWFuIG1hdHJpeCBvZiB0aGUgdHJhbnNmb3JtYXRpb24gYXQgKHgseSkgaXMgZXF1YWwgdG9cclxuICAgKlxyXG4gICAqICAgSiA9IFsgQSwgQiBdID0gWyBkWC9keCwgZFgvZHkgXVxyXG4gICAqICAgICAgIFsgQywgRCBdICAgWyBkWS9keCwgZFkvZHkgXVxyXG4gICAqXHJcbiAgICogdGhhdCBpcywgdGhlIHZlY3RvciBbQSxDXSBpcyB0aGUgdGFuZ2VudCB2ZWN0b3IgY29ycmVzcG9uZGluZyB0b1xyXG4gICAqIGlucHV0IGNoYW5nZXMgaW4gdGhlIGhvcml6b250YWwgZGlyZWN0aW9uLCBhbmQgdGhlIHZlY3RvciBbQixEXVxyXG4gICAqIGlzIHRoZSB0YW5nZW50IHZlY3RvciBjb3JyZXNwb25kaW5nIHRvIGlucHV0IGNoYW5nZXMgaW4gdGhlXHJcbiAgICogdmVydGljYWwgZGlyZWN0aW9uLlxyXG4gICAqXHJcbiAgICogSW4gdGhlIGNvbnRleHQgb2YgcmVzYW1wbGluZywgaXQgaXMgbmF0dXJhbCB0byB1c2UgdGhlIGludmVyc2VcclxuICAgKiBKYWNvYmlhbiBtYXRyaXggSmludiBiZWNhdXNlIHJlc2FtcGxpbmcgaXMgZ2VuZXJhbGx5IHBlcmZvcm1lZCBieVxyXG4gICAqIHB1bGxpbmcgcGl4ZWwgbG9jYXRpb25zIGluIHRoZSBvdXRwdXQgaW1hZ2UgYmFjayB0byBsb2NhdGlvbnMgaW5cclxuICAgKiB0aGUgaW5wdXQgaW1hZ2UuIEppbnYgaXNcclxuICAgKlxyXG4gICAqICAgSmludiA9IFsgYSwgYiBdID0gWyBkeC9kWCwgZHgvZFkgXVxyXG4gICAqICAgICAgICAgIFsgYywgZCBdICAgWyBkeS9kWCwgZHkvZFkgXVxyXG4gICAqXHJcbiAgICogTm90ZTogSmludiBjYW4gYmUgY29tcHV0ZWQgZnJvbSBKIHdpdGggdGhlIGZvbGxvd2luZyBtYXRyaXhcclxuICAgKiBmb3JtdWxhOlxyXG4gICAqXHJcbiAgICogICBKaW52ID0gMS8oQSpELUIqQykgWyAgRCwgLUIgXVxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgIFsgLUMsICBBIF1cclxuICAgKlxyXG4gICAqIFdoYXQgd2UgZG8gaXMgbW9kaWZ5IEppbnYgc28gdGhhdCBpdCBnZW5lcmF0ZXMgYW4gZWxsaXBzZSB3aGljaFxyXG4gICAqIGlzIGFzIGNsb3NlIGFzIHBvc3NpYmxlIHRvIHRoZSBvcmlnaW5hbCBidXQgd2hpY2ggY29udGFpbnMgdGhlXHJcbiAgICogdW5pdCBkaXNrLiBUaGlzIGNhbiBiZSBhY2NvbXBsaXNoZWQgYXMgZm9sbG93czpcclxuICAgKlxyXG4gICAqIExldFxyXG4gICAqXHJcbiAgICogICBKaW52ID0gVSBTaWdtYSBWXlRcclxuICAgKlxyXG4gICAqIGJlIGFuIFNWRCBkZWNvbXBvc2l0aW9uIG9mIEppbnYuIChUaGUgU1ZEIGlzIG5vdCB1bmlxdWUsIGJ1dCB0aGVcclxuICAgKiBmaW5hbCBlbGxpcHNlIGRvZXMgbm90IGRlcGVuZCBvbiB0aGUgcGFydGljdWxhciBTVkQuKVxyXG4gICAqXHJcbiAgICogV2UgY291bGQgY2xhbXAgdXAgdGhlIGVudHJpZXMgb2YgdGhlIGRpYWdvbmFsIG1hdHJpeCBTaWdtYSBzb1xyXG4gICAqIHRoYXQgdGhleSBhcmUgYXQgbGVhc3QgMSwgYW5kIHRoZW4gc2V0XHJcbiAgICpcclxuICAgKiAgIEppbnYgPSBVIG5ld1NpZ21hIFZeVC5cclxuICAgKlxyXG4gICAqIEhvd2V2ZXIsIHdlIGRvIG5vdCBuZWVkIHRvIGNvbXB1dGUgViBmb3IgdGhlIGZvbGxvd2luZyByZWFzb246XHJcbiAgICogVl5UIGlzIGFuIG9ydGhvZ29uYWwgbWF0cml4ICh0aGF0IGlzLCBpdCByZXByZXNlbnRzIGEgY29tYmluYXRpb25cclxuICAgKiBvZiByb3RhdGlvbnMgYW5kIHJlZmxleGlvbnMpIHNvIHRoYXQgaXQgbWFwcyB0aGUgdW5pdCBjaXJjbGUgdG9cclxuICAgKiBpdHNlbGYuIEZvciB0aGlzIHJlYXNvbiwgdGhlIGV4YWN0IHZhbHVlIG9mIFYgZG9lcyBub3QgYWZmZWN0IHRoZVxyXG4gICAqIGZpbmFsIGVsbGlwc2UsIGFuZCB3ZSBjYW4gY2hvb3NlIFYgdG8gYmUgdGhlIGlkZW50aXR5XHJcbiAgICogbWF0cml4LiBUaGlzIGdpdmVzXHJcbiAgICpcclxuICAgKiAgIEppbnYgPSBVIG5ld1NpZ21hLlxyXG4gICAqXHJcbiAgICogSW4gdGhlIGVuZCwgd2UgcmV0dXJuIHRoZSB0d28gZGlhZ29uYWwgZW50cmllcyBvZiBuZXdTaWdtYVxyXG4gICAqIHRvZ2V0aGVyIHdpdGggdGhlIHR3byBjb2x1bW5zIG9mIFUuXHJcbiAgICovXHJcbiAgLypcclxuICAgKiBDbGFtcFVwQXhlcyB3YXMgd3JpdHRlbiBieSBOaWNvbGFzIFJvYmlkb3V4IGFuZCBDaGFudGFsIFJhY2V0dGVcclxuICAgKiBvZiBMYXVyZW50aWFuIFVuaXZlcnNpdHkgd2l0aCBpbnNpZ2h0ZnVsIHN1Z2dlc3Rpb25zIGZyb20gQW50aG9ueVxyXG4gICAqIFRoeXNzZW4gYW5kIGZ1bmRpbmcgZnJvbSB0aGUgTmF0aW9uYWwgU2NpZW5jZSBhbmQgRW5naW5lZXJpbmdcclxuICAgKiBSZXNlYXJjaCBDb3VuY2lsIG9mIENhbmFkYS4gSXQgaXMgZGlzdGluZ3Vpc2hlZCBmcm9tIGl0c1xyXG4gICAqIHByZWRlY2Vzc29ycyBieSBpdHMgZWZmaWNpZW50IGhhbmRsaW5nIG9mIGRlZ2VuZXJhdGUgY2FzZXMuXHJcbiAgICpcclxuICAgKiBUaGUgaWRlYSBvZiBjbGFtcGluZyB1cCB0aGUgRVdBIGVsbGlwc2UncyBtYWpvciBhbmQgbWlub3IgYXhlcyBzb1xyXG4gICAqIHRoYXQgdGhlIHJlc3VsdCBjb250YWlucyB0aGUgcmVjb25zdHJ1Y3Rpb24ga2VybmVsIGZpbHRlciBzdXBwb3J0XHJcbiAgICogaXMgdGFrZW4gZnJvbSBBbmRyZWFzIEd1c3RhZmZzb24ncyBNYXN0ZXJzIHRoZXNpcyBcIkludGVyYWN0aXZlXHJcbiAgICogSW1hZ2UgV2FycGluZ1wiLCBIZWxzaW5raSBVbml2ZXJzaXR5IG9mIFRlY2hub2xvZ3ksIEZhY3VsdHkgb2ZcclxuICAgKiBJbmZvcm1hdGlvbiBUZWNobm9sb2d5LCA1OSBwYWdlcywgMTk5MyAoc2VlIFNlY3Rpb24gMy42KS5cclxuICAgKlxyXG4gICAqIFRoZSB1c2Ugb2YgdGhlIFNWRCB0byBjbGFtcCB1cCB0aGUgc2luZ3VsYXIgdmFsdWVzIG9mIHRoZVxyXG4gICAqIEphY29iaWFuIG1hdHJpeCBvZiB0aGUgcHVsbGJhY2sgdHJhbnNmb3JtYXRpb24gZm9yIEVXQSByZXNhbXBsaW5nXHJcbiAgICogaXMgdGFrZW4gZnJvbSB0aGUgYXN0cm9waHlzaWNpc3QgQ3JhaWcgRGVGb3Jlc3QuICBJdCBpc1xyXG4gICAqIGltcGxlbWVudGVkIGluIGhpcyBQREw6OlRyYW5zZm9ybSBjb2RlIChQREwgPSBQZXJsIERhdGFcclxuICAgKiBMYW5ndWFnZSkuXHJcbiAgICovXHJcblxyXG4gIGNvbnN0IGEgPSBkdXg7XHJcbiAgY29uc3QgYiA9IGR1eTtcclxuICBjb25zdCBjID0gZHZ4O1xyXG4gIGNvbnN0IGQgPSBkdnk7XHJcblxyXG4gIC8qXHJcbiAgICogbiBpcyB0aGUgbWF0cml4IEppbnYgKiB0cmFuc3Bvc2UoSmludikuIEVpZ2VudmFsdWVzIG9mIG4gYXJlIHRoZVxyXG4gICAqIHNxdWFyZXMgb2YgdGhlIHNpbmd1bGFyIHZhbHVlcyBvZiBKaW52LlxyXG4gICAqL1xyXG4gIGNvbnN0IGFhID0gYSAqIGE7XHJcbiAgY29uc3QgYmIgPSBiICogYjtcclxuICBjb25zdCBjYyA9IGMgKiBjO1xyXG4gIGNvbnN0IGRkID0gZCAqIGQ7XHJcblxyXG4gIC8qXHJcbiAgICogRWlnZW52ZWN0b3JzIG9mIG4gYXJlIGxlZnQgc2luZ3VsYXIgdmVjdG9ycyBvZiBKaW52LlxyXG4gICAqL1xyXG4gIGNvbnN0IG4xMSA9IGFhICsgYmI7XHJcbiAgY29uc3QgbjEyID0gYSAqIGMgKyBiICogZDtcclxuICBjb25zdCBuMjEgPSBuMTI7XHJcbiAgY29uc3QgbjIyID0gY2MgKyBkZDtcclxuICBjb25zdCBkZXQgPSBhICogZCAtIGIgKiBjO1xyXG4gIGNvbnN0IHR3aWNlX2RldCA9IGRldCArIGRldDtcclxuICBjb25zdCBmcm9iZW5pdXNfc3F1YXJlZCA9IG4xMSArIG4yMjtcclxuICBjb25zdCBkaXNjcmltaW5hbnQgPSAoZnJvYmVuaXVzX3NxdWFyZWQgKyB0d2ljZV9kZXQpICogKGZyb2Jlbml1c19zcXVhcmVkIC0gdHdpY2VfZGV0KTtcclxuXHJcbiAgLypcclxuICAgKiBJbiBleGFjdCBhcml0aG1ldGljLCBkaXNjcmltaW5hbnQgY2FuJ3QgYmUgbmVnYXRpdmUuIEluIGZsb2F0aW5nXHJcbiAgICogcG9pbnQsIGl0IGNhbiwgYmVjYXVzZSBvZiB0aGUgYmFkIGNvbmRpdGlvbmluZyBvZiBTVkRcclxuICAgKiBkZWNvbXBvc2l0aW9ucyBkb25lIHRocm91Z2ggdGhlIGFzc29jaWF0ZWQgbm9ybWFsIG1hdHJpeC5cclxuICAgKi9cclxuICBjb25zdCBzcXJ0X2Rpc2NyaW1pbmFudCA9IE1hdGguc3FydChkaXNjcmltaW5hbnQgPiAwID8gZGlzY3JpbWluYW50IDogMCk7XHJcblxyXG4gIC8qXHJcbiAgICogczEgaXMgdGhlIGxhcmdlc3Qgc2luZ3VsYXIgdmFsdWUgb2YgdGhlIGludmVyc2UgSmFjb2JpYW5cclxuICAgKiBtYXRyaXguIEluIG90aGVyIHdvcmRzLCBpdHMgcmVjaXByb2NhbCBpcyB0aGUgc21hbGxlc3Qgc2luZ3VsYXJcclxuICAgKiB2YWx1ZSBvZiB0aGUgSmFjb2JpYW4gbWF0cml4IGl0c2VsZi5cclxuICAgKiBJZiBzMSA9IDAsIGJvdGggc2luZ3VsYXIgdmFsdWVzIGFyZSAwLCBhbmQgYW55IG9ydGhvZ29uYWwgcGFpciBvZlxyXG4gICAqIGxlZnQgYW5kIHJpZ2h0IGZhY3RvcnMgcHJvZHVjZXMgYSBzaW5ndWxhciBkZWNvbXBvc2l0aW9uIG9mIEppbnYuXHJcbiAgICovXHJcbiAgLypcclxuICAgKiBJbml0aWFsbHksIHdlIG9ubHkgY29tcHV0ZSB0aGUgc3F1YXJlcyBvZiB0aGUgc2luZ3VsYXIgdmFsdWVzLlxyXG4gICAqL1xyXG4gIGNvbnN0IHMxczEgPSAwLjUgKiAoZnJvYmVuaXVzX3NxdWFyZWQgKyBzcXJ0X2Rpc2NyaW1pbmFudCk7XHJcblxyXG4gIC8qXHJcbiAgICogczIgdGhlIHNtYWxsZXN0IHNpbmd1bGFyIHZhbHVlIG9mIHRoZSBpbnZlcnNlIEphY29iaWFuXHJcbiAgICogbWF0cml4LiBJdHMgcmVjaXByb2NhbCBpcyB0aGUgbGFyZ2VzdCBzaW5ndWxhciB2YWx1ZSBvZiB0aGVcclxuICAgKiBKYWNvYmlhbiBtYXRyaXggaXRzZWxmLlxyXG4gICAqL1xyXG4gIGNvbnN0IHMyczIgPSAwLjUgKiAoZnJvYmVuaXVzX3NxdWFyZWQgLSBzcXJ0X2Rpc2NyaW1pbmFudCk7XHJcbiAgY29uc3QgczFzMW1pbnVzbjExID0gczFzMSAtIG4xMTtcclxuICBjb25zdCBzMXMxbWludXNuMjIgPSBzMXMxIC0gbjIyO1xyXG5cclxuICAvKlxyXG4gICAqIHUxLCB0aGUgZmlyc3QgY29sdW1uIG9mIHRoZSBVIGZhY3RvciBvZiBhIHNpbmd1bGFyIGRlY29tcG9zaXRpb25cclxuICAgKiBvZiBKaW52LCBpcyBhIChub24tbm9ybWFsaXplZCkgbGVmdCBzaW5ndWxhciB2ZWN0b3IgY29ycmVzcG9uZGluZ1xyXG4gICAqIHRvIHMxLiBJdCBoYXMgZW50cmllcyB1MTEgYW5kIHUyMS4gV2UgY29tcHV0ZSB1MSBmcm9tIHRoZSBmYWN0XHJcbiAgICogdGhhdCBpdCBpcyBhbiBlaWdlbnZlY3RvciBvZiBuIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGVpZ2VudmFsdWVcclxuICAgKiBzMV4yLlxyXG4gICAqL1xyXG4gIGNvbnN0IHMxczFtaW51c24xMV9zcXVhcmVkID0gczFzMW1pbnVzbjExICogczFzMW1pbnVzbjExO1xyXG4gIGNvbnN0IHMxczFtaW51c24yMl9zcXVhcmVkID0gczFzMW1pbnVzbjIyICogczFzMW1pbnVzbjIyO1xyXG5cclxuICAvKlxyXG4gICAqIFRoZSBmb2xsb3dpbmcgc2VsZWN0cyB0aGUgbGFyZ2VzdCByb3cgb2Ygbi1zMV4yIEkgYXMgdGhlIG9uZVxyXG4gICAqIHdoaWNoIGlzIHVzZWQgdG8gZmluZCB0aGUgZWlnZW52ZWN0b3IuIElmIGJvdGggczFeMi1uMTEgYW5kXHJcbiAgICogczFeMi1uMjIgYXJlIHplcm8sIG4tczFeMiBJIGlzIHRoZSB6ZXJvIG1hdHJpeC4gIEluIHRoYXQgY2FzZSxcclxuICAgKiBhbnkgdmVjdG9yIGlzIGFuIGVpZ2VudmVjdG9yOyBpbiBhZGRpdGlvbiwgbm9ybSBiZWxvdyBpcyBlcXVhbCB0b1xyXG4gICAqIHplcm8sIGFuZCwgaW4gZXhhY3QgYXJpdGhtZXRpYywgdGhpcyBpcyB0aGUgb25seSBjYXNlIGluIHdoaWNoXHJcbiAgICogbm9ybSA9IDAuIFNvLCBzZXR0aW5nIHUxIHRvIHRoZSBzaW1wbGUgYnV0IGFyYml0cmFyeSB2ZWN0b3IgWzEsMF1cclxuICAgKiBpZiBub3JtID0gMCBzYWZlbHkgdGFrZXMgY2FyZSBvZiBhbGwgY2FzZXMuXHJcbiAgICovXHJcbiAgY29uc3QgdGVtcF91MTEgPSAoczFzMW1pbnVzbjExX3NxdWFyZWQgPj0gczFzMW1pbnVzbjIyX3NxdWFyZWQpID8gbjEyIDogczFzMW1pbnVzbjIyO1xyXG4gIGNvbnN0IHRlbXBfdTIxID0gKHMxczFtaW51c24xMV9zcXVhcmVkID49IHMxczFtaW51c24yMl9zcXVhcmVkKSA/IHMxczFtaW51c24xMSA6IG4yMTtcclxuICBjb25zdCBub3JtID0gTWF0aC5zcXJ0KHRlbXBfdTExICogdGVtcF91MTEgKyB0ZW1wX3UyMSAqIHRlbXBfdTIxKTtcclxuXHJcbiAgLypcclxuICAgKiBGaW5hbGl6ZSB0aGUgZW50cmllcyBvZiBmaXJzdCBsZWZ0IHNpbmd1bGFyIHZlY3RvciAoYXNzb2NpYXRlZFxyXG4gICAqIHdpdGggdGhlIGxhcmdlc3Qgc2luZ3VsYXIgdmFsdWUpLlxyXG4gICAqL1xyXG4gIGNvbnN0IHUxMSA9IG5vcm0gPiAwID8gdGVtcF91MTEgLyBub3JtIDogMTtcclxuICBjb25zdCB1MjEgPSBub3JtID4gMCA/IHRlbXBfdTIxIC8gbm9ybSA6IDA7XHJcblxyXG4gIC8qXHJcbiAgICogQ2xhbXAgdGhlIHNpbmd1bGFyIHZhbHVlcyB1cCB0byAxLlxyXG4gICAqL1xyXG4gIGNvbnN0IG1ham9yX21hZyA9IHMxczEgPD0gMSA/IDEgOiBNYXRoLnNxcnQoczFzMSk7XHJcbiAgY29uc3QgbWlub3JfbWFnID0gczJzMiA8PSAxID8gMSA6IE1hdGguc3FydChzMnMyKTtcclxuXHJcblxyXG4gIGNvbnN0IG1ham9yX3ggPSB1MTEgKiBtYWpvcl9tYWc7XHJcbiAgY29uc3QgbWFqb3JfeSA9IHUyMSAqIG1ham9yX21hZztcclxuICBjb25zdCBtaW5vcl94ID0gLXUyMSAqIG1pbm9yX21hZztcclxuICBjb25zdCBtaW5vcl95ID0gdTExICogbWlub3JfbWFnO1xyXG5cclxuICByZXR1cm4gW1xyXG4gICAgbWFqb3JfeCxcclxuICAgIG1ham9yX3ksXHJcbiAgICBtaW5vcl94LFxyXG4gICAgbWlub3JfeSxcclxuICAgIG1ham9yX21hZyxcclxuICAgIG1pbm9yX21hZ1xyXG4gIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbGxpcHRpY2FsIFdlaWdodGVkIEF2ZXJhZ2UuXHJcbiAqIFJlc2FtcGxlcyBwaXhlbCBjb2xvciB1c2luZyBFbGxpcHRpY2FsIFdlaWdodGVkIEF2ZXJhZ2UgdGVjaG5pcXVlLlxyXG4gKlxyXG4gKiBAaW1wbGVtZW50cyB7UmVzYW1wbGVySW50ZXJmYWNlfVxyXG4gKiBAbWVtYmVyT2YgbGVucy5yZXNhbXBsZXJcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cuaW1hZ2VtYWdpY2sub3JnL1VzYWdlL2Rpc3RvcnRzLyNkaXN0b3J0X2V3YSBFV0EgZGV0YWlsc30gYXQgSW1hZ2VNYWdpY2sgZG9jcy5cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cyLmVlY3MuYmVya2VsZXkuZWR1L1B1YnMvVGVjaFJwdHMvMTk4OS9DU0QtODktNTE2LnBkZiBGdW5kYW1lbnRhbHMgb2YgVGV4dHVyZSBNYXBwaW5nIGFuZCBJbWFnZSBXYXJwaW5nIGJ5IFBhdWwgUy4gSGVja2JlcnR9XHJcbiAqIHBhZ2UgNDEsIHNlY3Rpb24gMy40LCAzLjVcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvcmVzYW1wbGVfOGNfc291cmNlLmh0bWwjbDAxMDM4IFNjYWxlUmVzYW1wbGVGaWx0ZXIoKX0gYXRcclxuICogSW1hZ2VNYWdpY2sgc291cmNlLlxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9yZXNhbXBsZV84Y19zb3VyY2UuaHRtbCNsMDAzMTUgUmVzYW1wbGVQaXhlbENvbG9yKCl9IGF0XHJcbiAqIEltYWdlTWFnaWNrIHNvdXJjZS5cclxuICovXHJcbmNsYXNzIEVXQSB7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtGaWx0ZXJJbnRlcmZhY2V9IGZpbHRlclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGZpbHRlcikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWNvbnN0cnVjdGlvbiBmaWx0ZXIuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7RmlsdGVySW50ZXJmYWNlfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc2l6ZUZpbHRlciA9IGZpbHRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwcmFjdGljYWwgd29ya2luZyBzdXBwb3J0IG9mIHRoZSBmaWx0ZXJcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3VwcG9ydCA9IHRoaXMucmVzaXplRmlsdGVyLnN1cHBvcnQgKiB0aGlzLnJlc2l6ZUZpbHRlci5ibHVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWF0dGUgY29sb3IgZm9yIGludmFsaWQgbWFwcGluZ3MuXHJcbiAgICAgKiBAdHlwZSB7Q29sb3J9XHJcbiAgICAgKi9cclxuICAgIHRoaXMubWF0dGVDb2xvciA9IFswLCAwLCAwLCAwXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIExvb2t1cCB0YWJsZSBvZiB3ZWlnaHRzIGZvciBmaWx0ZXJlZCBhdmVyYWdlIGluIGVsbGlwdGljYWwgYXJlYS5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtudW1iZXJbXX1cclxuICAgICAqL1xyXG4gICAgdGhpcy53ZWlnaHRMb29rdXBUYWJsZSA9IGJ1aWxkV2VpZ2h0TG9va3VwVGFibGUodGhpcy5yZXNpemVGaWx0ZXIsIHRoaXMuc3VwcG9ydCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbWFnZSBiZWluZyByZXNhbXBsZWQuXHJcbiAgICAgKiBAdHlwZSB7SW1hZ2VJbnRlcmZhY2V9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzdG9ydGlvbiBtYXBwZXIuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7RGlzdG9ydGlvbkludGVyZmFjZX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5tYXBwZXIgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FjaGVkIGZvciBkaXJlY3QgYWNjZXNzIGltYWdlIHZpcnR1YWwgdmlld3BvcnQuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bGVucy5WaWV3cG9ydH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5pbWFnZVZpZXdwb3J0ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhY2hlZCBpbWFnZSBhcmVhLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5pbWFnZUFyZWEgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FjaGVkIGZvciBkaXJlY3QgYWNjZXNzIGltYWdlIHZpcnR1YWwgcGl4ZWwgbWV0aG9kLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge2xlbnMudnB4fVxyXG4gICAgICovXHJcbiAgICB0aGlzLmltYWdlVmlydHVhbFBpeGVsTWV0aG9kID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhY2hlZCBpbWFnZSBhdmVyYWdlIGNvbG9yLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge0NvbG9yfG51bGx9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaW1hZ2VBdmVyYWdlQ29sb3IgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRWxsaXBzZSBlcXVpYXRpb24gQS5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuQSA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbGxpcHNlIGVxdWF0aW9uIEIuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLkIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRWxsaXBzZSBlcXVhdGlvbiBDLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5DID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVsbGlwc2UgZXF1YXRpb24gRi5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuRiA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnVMaW1pdCA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnZMaW1pdCA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnVXaWR0aCA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnNsb3BlID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgZm9yIGRpc3RvcnRpb25zIHdpdGggY29uc3RhbnQgcGFydGlhbCBkZXJpdmF0aXZlcyB0byBmbGFnIHRoYXQgZWxsaXBzZSBhbHJlYWR5IGhhcyBiZWVuIHNldCB1cC5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB0aGlzLmVsbGlwc2VJc1NldFVwID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFncyB0aGF0IGVsbGlwc2UgaXMgdG9vIGxhcmdlIGFuZCBpdCBpcyBpbXByYWN0aWNhbCB0byByZXNhbXBsZSBjb2xvciAtLSBiZXR0ZXIgdXNlIHNvbWUgb2YgcG9zc2libGVcclxuICAgICAqIG9wdGltaXphdGlvbnMuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5saW1pdFJlYWNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBpbWFnZSBzY2FsaW5nIGZhY3Rvci5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2NhbGluZyA9IDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldFJlc2FtcGxlZENvbG9yKHgsIHkpIHtcclxuICAgIHggPSB4ICogdGhpcy5zY2FsaW5nO1xyXG4gICAgeSA9IHkgKiB0aGlzLnNjYWxpbmc7XHJcblxyXG4gICAgY29uc3QgdmFsaWRpdHkgPSB0aGlzLm1hcHBlci5nZXRWYWxpZGl0eSh4LCB5LCB0aGlzLnNjYWxpbmcpO1xyXG5cclxuICAgIGlmICh2YWxpZGl0eSA+IDApIHtcclxuICAgICAgY29uc3QgW3UsIHZdID0gdGhpcy5tYXBwZXIucmV2ZXJzZU1hcCh4LCB5KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm1hcHBlci5oYXNDb25zdGFudFBhcnRpYWxEZXJpdmF0aXZlcykge1xyXG4gICAgICAgIHRoaXMuc2V0dXBFbGxpcHNlT25jZSguLi50aGlzLm1hcHBlci5nZXRQYXJ0aWFsRGVyaXZhdGl2ZXMoeCwgeSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0dXBFbGxpcHNlKC4uLnRoaXMubWFwcGVyLmdldFBhcnRpYWxEZXJpdmF0aXZlcyh4LCB5KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5nZXRXZWlnaHRlZEF2ZXJhZ2UodSwgdik7XHJcblxyXG4gICAgICBpZiAodmFsaWRpdHkgPCAxKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsZW5kQ29sb3JzKGNvbG9yLCB2YWxpZGl0eSwgdGhpcy5tYXR0ZUNvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLm1hdHRlQ29sb3Iuc2xpY2UoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc2V0SW1hZ2UoaW1hZ2UpIHtcclxuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgIC8vIGNhY2hlIGltYWdlIHZpZXdwb3J0IGZvciBmYXN0ZXIgZGlyZWN0IGFjY2Vzcy5cclxuICAgIHRoaXMuaW1hZ2VWaWV3cG9ydCA9IHRoaXMuaW1hZ2Uudmlld3BvcnQ7XHJcbiAgICAvLyBjYWNoZSBpbWFnZSBhcmVhLlxyXG4gICAgdGhpcy5pbWFnZUFyZWEgPSB0aGlzLmltYWdlVmlld3BvcnQuYXJlYSgpO1xyXG4gICAgLy8gY2FjaGUgaW1hZ2UgdmlydHVhbCBwaXhlbCBtZXRob2QgKHdpbGwgaXQgYmUgZmFzdGVyIGFjdHVhbGx5PylcclxuICAgIHRoaXMuaW1hZ2VWaXJ0dWFsUGl4ZWxNZXRob2QgPSB0aGlzLmltYWdlLnZpcnR1YWxQaXhlbE1ldGhvZDtcclxuICAgIC8vIHJlc2V0IGNhY2hlZCBpbWFnZSBhdmVyYWdlIGNvbG9yXHJcbiAgICB0aGlzLmltYWdlQXZlcmFnZUNvbG9yID0gbnVsbDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBzZXRNYXBwZXIobWFwcGVyKSB7XHJcbiAgICBpZiAoIW1hcHBlci5oYXNQYXJ0aWFsRGVyaXZhdGl2ZXMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQaXhlbCBtYXBwZXIgbXVzdCBoYXZlIHBhcnRpYWwgZGVyaXZhdGl2ZXMgdG8gdXNlIHRoaXMgcmVzYW1wbGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tYXBwZXIgPSBtYXBwZXI7XHJcbiAgICB0aGlzLmVsbGlwc2VJc1NldFVwID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGVzIGVsbGlwc2Ugb25jZSBmb3IgZGlzdG9ydGlvbnMgd2l0aCBjb25zdGFudCBwYXJ0aWFsIGRlcml2YXRpdmVzLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0gZGVyaXZhdGl2ZXNcclxuICAgKiBAcmV0dXJucyB7bGVucy5yZXNhbXBsZXIuRVdBfVxyXG4gICAqL1xyXG4gIHNldHVwRWxsaXBzZU9uY2UoLi4uZGVyaXZhdGl2ZXMpIHtcclxuICAgIGlmICghdGhpcy5lbGxpcHNlSXNTZXRVcCkge1xyXG4gICAgICB0aGlzLmVsbGlwc2VJc1NldFVwID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMuc2V0dXBFbGxpcHNlKC4uLmRlcml2YXRpdmVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZXMgZWxsaXBzZSBmb3IgRVdBIHJlc2FtcGxpbmcgdXNpbmcgcGFydGlhbCBkZXJpdmF0aXZlcy5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIGRlcml2YXRpdmVzXHJcbiAgICogQHJldHVybnMge2xlbnMucmVzYW1wbGVyLkVXQX1cclxuICAgKi9cclxuICBzZXR1cEVsbGlwc2UoLi4uZGVyaXZhdGl2ZXMpIHtcclxuICAgIHRoaXMubGltaXRSZWFjaGVkID0gZmFsc2U7XHJcblxyXG4gICAgZGVyaXZhdGl2ZXMgPSBkZXJpdmF0aXZlcy5tYXAoZGVyaXZhdGl2ZSA9PiBkZXJpdmF0aXZlICogdGhpcy5zY2FsaW5nKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5pbml0RWxsaXBzZSguLi5kZXJpdmF0aXZlcylcclxuICAgICAgLnNjYWxlRWxsaXBzZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlcyBlbGxpcHNlIGVxdWF0aW9uIGZvciBnaXZlbiBkaXN0b3J0aW9uIHBhcnRpYWwgZGVyaXZhdGl2ZXMuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSBkZXJpdmF0aXZlc1xyXG4gICAqIEByZXR1cm5zIHtsZW5zLnJlc2FtcGxlci5FV0F9XHJcbiAgICovXHJcbiAgaW5pdEVsbGlwc2UoLi4uZGVyaXZhdGl2ZXMpIHtcclxuICAgIGNvbnN0IFtcclxuICAgICAgbWFqb3JfeCxcclxuICAgICAgbWFqb3JfeSxcclxuICAgICAgbWlub3JfeCxcclxuICAgICAgbWlub3JfeSxcclxuICAgICAgbWFqb3JfbWFnLFxyXG4gICAgICBtaW5vcl9tYWdcclxuICAgIF0gPSBjbGFtcEVsbGlwc2VBeGVzKC4uLmRlcml2YXRpdmVzKTtcclxuXHJcbiAgICB0aGlzLkEgPSBtYWpvcl95ICogbWFqb3JfeSArIG1pbm9yX3kgKiBtaW5vcl95O1xyXG4gICAgdGhpcy5CID0gLTIgKiAobWFqb3JfeCAqIG1ham9yX3kgKyBtaW5vcl94ICogbWlub3JfeSk7XHJcbiAgICB0aGlzLkMgPSBtYWpvcl94ICogbWFqb3JfeCArIG1pbm9yX3ggKiBtaW5vcl94O1xyXG4gICAgdGhpcy5GID0gbWFqb3JfbWFnICogbWlub3JfbWFnO1xyXG4gICAgdGhpcy5GICo9IHRoaXMuRjtcclxuXHJcbiAgICAvKlxyXG4gICAgICogSWYgb25lIG9yIGJvdGggb2YgdGhlIHNjYWxpbmcgdmVjdG9ycyBpcyBpbXBvc3NpYmx5IGxhcmdlXHJcbiAgICAgKiAocHJvZHVjaW5nIGEgdmVyeSBsYXJnZSByYXcgRiB2YWx1ZSksIHdlIG1heSBhcyB3ZWxsIG5vdCBib3RoZXJcclxuICAgICAqIGRvaW5nIGFueSBmb3JtIG9mIHJlc2FtcGxpbmcgc2luY2UgcmVzYW1wbGVkIGFyZWEgaXMgdmVyeSBsYXJnZS5cclxuICAgICAqIEluIHRoaXMgY2FzZSBzb21lIGFsdGVybmF0aXZlIG1lYW5zIG9mIHBpeGVsIHNhbXBsaW5nLCBzdWNoIGFzXHJcbiAgICAgKiB0aGUgYXZlcmFnZSBvZiB0aGUgd2hvbGUgaW1hZ2UgaXMgbmVlZGVkIHRvIGdldCBhIHJlYXNvbmFibGVcclxuICAgICAqIHJlc3VsdC4gQ2FsY3VsYXRlIG9ubHkgYXMgbmVlZGVkLlxyXG4gICAgICovXHJcbiAgICB0aGlzLmxpbWl0UmVhY2hlZCA9IDQgKiB0aGlzLkEgKiB0aGlzLkMgLSB0aGlzLkIgKiB0aGlzLkIgPiBNQVhJTVVNX1ZBTFVFO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2NhbGVzIGVsbGlwc2UgdG8gbWF0Y2ggZmlsdGVyIHN1cHBvcnQuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEByZXR1cm5zIHtsZW5zLnJlc2FtcGxlci5FV0F9XHJcbiAgICovXHJcbiAgc2NhbGVFbGxpcHNlKCkge1xyXG4gICAgaWYgKCF0aGlzLmxpbWl0UmVhY2hlZCkge1xyXG4gICAgICB0aGlzLkYgKj0gdGhpcy5zdXBwb3J0ICogdGhpcy5zdXBwb3J0O1xyXG4gICAgICB0aGlzLnVMaW1pdCA9IE1hdGguc3FydCh0aGlzLkMgKiB0aGlzLkYgLyAodGhpcy5BICogdGhpcy5DIC0gMC4yNSAqIHRoaXMuQiAqIHRoaXMuQikpO1xyXG4gICAgICB0aGlzLnZMaW1pdCA9IE1hdGguc3FydCh0aGlzLkEgKiB0aGlzLkYgLyAodGhpcy5BICogdGhpcy5DIC0gMC4yNSAqIHRoaXMuQiAqIHRoaXMuQikpO1xyXG4gICAgICB0aGlzLnVXaWR0aCA9IE1hdGguc3FydCh0aGlzLkYgLyB0aGlzLkEpO1xyXG4gICAgICB0aGlzLnNsb3BlID0gLXRoaXMuQiAvICgyICogdGhpcy5BKTtcclxuXHJcbiAgICAgIC8qXHJcbiAgICAgICAqIENoZWNrIHRoZSBhYnNvbHV0ZSBhcmVhIG9mIHRoZSBwYXJhbGxlbG9ncmFtIGludm9sdmVkLlxyXG4gICAgICAgKiBUaGlzIGxpbWl0IG5lZWRzIG1vcmUgd29yaywgYXMgaXQgaXMgdG9vIHNsb3cgZm9yIGxhcmdlciBpbWFnZXNcclxuICAgICAgICogd2l0aCB0aWxlZCB2aWV3cyBvZiB0aGUgaG9yaXpvbi5cclxuICAgICAgICovXHJcbiAgICAgIGlmICh0aGlzLnVXaWR0aCAqIHRoaXMudkxpbWl0ID4gNCAqIHRoaXMuaW1hZ2VBcmVhKSB7XHJcbiAgICAgICAgdGhpcy5saW1pdFJlYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBTY2FsZSBlbGxpcHNlIGZvcm11bGEgdG8gZGlyZWN0bHkgaW5kZXggdGhlIEZpbHRlciBMb29rdXAgVGFibGUgKi9cclxuICAgICAgY29uc3Qgc2NhbGUgPSBXRUlHSFRfTE9PS1VQX1RBQkxFX1dJRFRIIC8gdGhpcy5GO1xyXG4gICAgICB0aGlzLkEgKj0gc2NhbGU7XHJcbiAgICAgIHRoaXMuQiAqPSBzY2FsZTtcclxuICAgICAgdGhpcy5DICo9IHNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB3ZWlnaHRlZCBhdmVyYWdlIGNvbG9yIGF0IGdpdmVuIHBvaW50IHVzaW5nIHNjYWxlZCBFV0EgZWxsaXBzZS5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHUwXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHYwXHJcbiAgICogQHJldHVybnMge0NvbG9yfVxyXG4gICAqL1xyXG4gIGdldFdlaWdodGVkQXZlcmFnZSh1MCwgdjApIHtcclxuICAgIGlmICh0aGlzLmRvZXNudE5lZWRSZXNhbXBsaW5nKHUwLCB2MCkpIHtcclxuICAgICAgLyogVGhlIGFyZWEgYmVpbmcgcmVzYW1wbGVkIGlzIHNpbXBseSBhIHNvbGlkIGNvbG9yXHJcbiAgICAgICAqIGp1c3QgcmV0dXJuIGEgc2luZ2xlIGxvb2t1cCBjb2xvci5cclxuICAgICAgICovXHJcbiAgICAgIHJldHVybiB0aGlzLmltYWdlLmdldFBpeGVsQ29sb3IodTAsIHYwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5saW1pdFJlYWNoZWQpIHtcclxuICAgICAgLy8gV2hlbiBTY2FsaW5nIGxpbWl0cyByZWFjaGVkLCByZXR1cm4gYW4gJ2F2ZXJhZ2VkJyByZXN1bHQuXHJcblxyXG4gICAgICBzd2l0Y2ggKHRoaXMuaW1hZ2VWaXJ0dWFsUGl4ZWxNZXRob2QpIHtcclxuICAgICAgICBjYXNlIHZweC5FREdFOlxyXG4gICAgICAgIGNhc2UgdnB4LkhPUklaT05UQUxfVElMRV9FREdFOlxyXG4gICAgICAgIGNhc2UgdnB4LlZFUlRJQ0FMX1RJTEVfRURHRTpcclxuICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgKiBXZSBuZWVkIGFuIGF2ZXJhZ2UgZWRnZSBwaXhlbCwgZnJvbSB0aGUgY29ycmVjdCBlZGdlIVxyXG4gICAgICAgICAgICogSG93IHNob3VsZCBJIGNhbGN1bGF0ZSBhbiBhdmVyYWdlIGVkZ2UgY29sb3I/XHJcbiAgICAgICAgICAgKiBKdXN0IHJldHVybmluZyBhbiBhdmVyYWdlZCBuZWlnaGJvdXJob29kLFxyXG4gICAgICAgICAgICogd29ya3Mgd2VsbCBpbiBnZW5lcmFsLCBidXQgZmFsbHMgZG93biBmb3IgVGlsZUVkZ2UgbWV0aG9kcy5cclxuICAgICAgICAgICAqIFRoaXMgbmVlZHMgdG8gYmUgZG9uZSBwcm9wZXJseSEhISEhIVxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pbWFnZS5nZXRJbnRlcnBvbGF0ZWRQaXhlbENvbG9yKHUwLCB2MCwgaW50ZXJwb2xhdGlvbi5BVkVSQUdFKTtcclxuICAgICAgICBjYXNlIHZweC5IT1JJWk9OVEFMX1RJTEU6XHJcbiAgICAgICAgY2FzZSB2cHguVkVSVElDQUxfVElMRTpcclxuICAgICAgICAgIC8qXHJcbiAgICAgICAgICAqIGp1c3QgcmV0dXJuIHRoZSBiYWNrZ3JvdW5kIHBpeGVsIC0gSXMgdGhlcmUgbW9yZSBkaXJlY3Qgd2F5P1xyXG4gICAgICAgICAgKi9cclxuICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlLmdldFBpeGVsQ29sb3IoXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VWaWV3cG9ydC54MSAtIDEsXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VWaWV3cG9ydC55MSAtIDFcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiB0aGlzLmdldEltYWdlQXZlcmFnZUNvbG9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGl2aXNvck0gPSAwLFxyXG4gICAgICBkaXZpc29yQyA9IDAsXHJcbiAgICAgIHJlZCA9IDAsXHJcbiAgICAgIGdyZWVuID0gMCxcclxuICAgICAgYmx1ZSA9IDAsXHJcbiAgICAgIGFscGhhID0gMDtcclxuXHJcbiAgICAvKlxyXG4gICAgICogRGV0ZXJtaW5lIHRoZSBwYXJlbGxlbG9ncmFtIGJvdW5kaW5nIGJveCBmaXR0ZWQgdG8gdGhlIGVsbGlwc2VcclxuICAgICAqIGNlbnRlcmVkIGF0IHUwLHYwLiAgVGhpcyBhcmVhIGlzIGJvdW5kaW5nIGJ5IHRoZSBsaW5lcy4uLlxyXG4gICAgICovXHJcbiAgICBjb25zdCB2MSA9IE1hdGguY2VpbCh2MCAtIHRoaXMudkxpbWl0KTtcclxuICAgIGNvbnN0IHYyID0gTWF0aC5mbG9vcih2MCArIHRoaXMudkxpbWl0KTtcclxuXHJcbiAgICAvLyBzY2FuIGxpbmUgc3RhcnQgYW5kIHdpZHRoIGFjY3Jvc3MgdGhlIHBhcmFsbGVsb2dyYW1cclxuICAgIGxldCB1MSA9IHUwICsgKHYxIC0gdjApICogdGhpcy5zbG9wZSAtIHRoaXMudVdpZHRoO1xyXG4gICAgbGV0IHV3ID0gMiAqIHRoaXMudVdpZHRoICsgMTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogRG8gd2VpZ2h0ZWQgcmVzYW1wbGluZyBvZiBhbGwgcGl4ZWxzLCAgd2l0aGluIHRoZSBzY2FsZWQgZWxsaXBzZSxcclxuICAgICAqIGJvdW5kIGJ5IGEgUGFyZWxsZWxvZ3JhbSBmaXR0ZWQgdG8gdGhlIGVsbGlwc2UuXHJcbiAgICAgKi9cclxuXHJcbiAgICBsZXQgRERRID0gMiAqIHRoaXMuQTtcclxuXHJcbiAgICBmb3IgKGxldCB2ID0gdjE7IHYgPCB2MjsgdisrKSB7XHJcbiAgICAgIGxldCB1c3RhcnQgPSBNYXRoLmNlaWwodTEpOyAvLyBmaXJzdCBwaXhlbCBpbiBzY2FubGluZVxyXG4gICAgICB1MSArPSB0aGlzLnNsb3BlOyAvLyBzdGFydCBvZiBuZXh0IHNjYW4gbGluZVxyXG4gICAgICBsZXQgdWVuZCA9IHVzdGFydCArIHV3O1xyXG5cclxuICAgICAgLy8gbG9jYXRpb24gb2YgdGhpcyBmaXJzdCBwaXhlbCwgcmVsYXRpdmUgdG8gdTAsdjBcclxuICAgICAgbGV0IFUgPSB1c3RhcnQgLSB1MDtcclxuICAgICAgbGV0IFYgPSB2IC0gdjA7XHJcblxyXG4gICAgICAvLyBRID0gZWxsaXBzZSBxdW90ZW50ICggaWYgUTxGIHRoZW4gcGl4ZWwgaXMgaW5zaWRlIGVsbGlwc2UpXHJcbiAgICAgIGxldCBRID0gKHRoaXMuQSAqIFUgKyB0aGlzLkIgKiBWKSAqIFUgKyB0aGlzLkMgKiBWICogVjtcclxuICAgICAgbGV0IERRID0gdGhpcy5BICogKDIgKiBVICsgMSkgKyB0aGlzLkIgKiBWO1xyXG5cclxuICAgICAgLy8gY291bnQgdXAgdGhlIHdlaWdodGVkIHBpeGVsIGNvbG9yc1xyXG4gICAgICBmb3IgKGxldCB1ID0gdXN0YXJ0OyB1IDwgdWVuZDsgdSsrKSB7XHJcbiAgICAgICAgLy8gTm90ZSB0aGF0IHRoZSBlbGxpcHNlIGhhcyBiZWVuIHByZS1zY2FsZWQgc28gRiA9ICR0aGlzLT53ZWlnaHRMb29rdXBUYWJsZVdpZHRoXHJcbiAgICAgICAgaWYgKFEgPCBXRUlHSFRfTE9PS1VQX1RBQkxFX1dJRFRIKSB7XHJcbiAgICAgICAgICBsZXQgd2VpZ2h0ID0gdGhpcy53ZWlnaHRMb29rdXBUYWJsZVtNYXRoLmZsb29yKFEpXTtcclxuICAgICAgICAgIGxldCBbciwgZywgYiwgYV0gPSB0aGlzLmltYWdlLmdldFBpeGVsQ29sb3IodSwgdik7XHJcbiAgICAgICAgICBhbHBoYSArPSB3ZWlnaHQgKiBhO1xyXG4gICAgICAgICAgZGl2aXNvck0gKz0gd2VpZ2h0O1xyXG5cclxuICAgICAgICAgIHdlaWdodCAqPSAoYSAvIHRoaXMuaW1hZ2UucXVhbnR1bVJhbmdlKTtcclxuXHJcbiAgICAgICAgICByZWQgKz0gciAqIHdlaWdodDtcclxuICAgICAgICAgIGdyZWVuICs9IGcgKiB3ZWlnaHQ7XHJcbiAgICAgICAgICBibHVlICs9IGIgKiB3ZWlnaHQ7XHJcbiAgICAgICAgICBkaXZpc29yQyArPSB3ZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBRICs9IERRO1xyXG4gICAgICAgIERRICs9IEREUTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlc3VsdCBzYW5pdHkgY2hlY2sgLS0gdGhpcyBzaG91bGQgTk9UIGhhcHBlblxyXG4gICAgaWYgKCFkaXZpc29yQyB8fCAhZGl2aXNvck0pIHtcclxuICAgICAgLypcclxuICAgICAgICogbm90IGVub3VnaCBwaXhlbHMsIG9yIGJhZCB3ZWlnaHRpbmcgaW4gcmVzYW1wbGluZyxcclxuICAgICAgICogcmVzb3J0IHRvIGRpcmVjdCBpbnRlcnBvbGF0aW9uXHJcbiAgICAgICAqL1xyXG4gICAgICByZXR1cm4gdGhpcy5pbWFnZS5nZXRJbnRlcnBvbGF0ZWRQaXhlbENvbG9yKHUwLCB2MCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgY2xhbXBUb1F1YW50dW0oTWF0aC5yb3VuZChyZWQgLyBkaXZpc29yQyksIHRoaXMuaW1hZ2UucXVhbnR1bVJhbmdlKSxcclxuICAgICAgY2xhbXBUb1F1YW50dW0oTWF0aC5yb3VuZChncmVlbiAvIGRpdmlzb3JDKSwgdGhpcy5pbWFnZS5xdWFudHVtUmFuZ2UpLFxyXG4gICAgICBjbGFtcFRvUXVhbnR1bShNYXRoLnJvdW5kKGJsdWUgLyBkaXZpc29yQyksIHRoaXMuaW1hZ2UucXVhbnR1bVJhbmdlKSxcclxuICAgICAgY2xhbXBUb1F1YW50dW0oTWF0aC5yb3VuZChhbHBoYSAvIGRpdmlzb3JNKSwgdGhpcy5pbWFnZS5xdWFudHVtUmFuZ2UpXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIG5vIHJlc2FtcGxpbmcgaXMgbmVlZGVkIChpZiBzaW5nbGUgcGl4ZWwgY29sb3Igc2hvdWxkIGJlIHJldHVybmVkKS5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGRvZXNudE5lZWRSZXNhbXBsaW5nKHUsIHYpIHtcclxuICAgIHN3aXRjaCAodGhpcy5pbWFnZVZpcnR1YWxQaXhlbE1ldGhvZCkge1xyXG4gICAgICBjYXNlIHZweC5UUkFOU1BBUkVOVDpcclxuICAgICAgY2FzZSB2cHguQkFDS0dST1VORDpcclxuICAgICAgY2FzZSB2cHguQkxBQ0s6XHJcbiAgICAgIGNhc2UgdnB4LldISVRFOlxyXG4gICAgICBjYXNlIHZweC5HUkFZOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmxpbWl0UmVhY2hlZCB8fCB0aGlzLm91dE9mSW1hZ2VCb3VuZHModSwgdik7XHJcbiAgICAgIGNhc2UgdnB4LkVER0U6XHJcbiAgICAgICAgcmV0dXJuICh1ICsgdGhpcy51TGltaXQgPCB0aGlzLmltYWdlVmlld3BvcnQueDEgJiYgdiArIHRoaXMudkxpbWl0IDwgdGhpcy5pbWFnZVZpZXdwb3J0LnkxKSB8fFxyXG4gICAgICAgICAgKHUgKyB0aGlzLnVMaW1pdCA8IHRoaXMuaW1hZ2VWaWV3cG9ydC54MSAmJiB2IC0gdGhpcy52TGltaXQgPiB0aGlzLmltYWdlVmlld3BvcnQueTIpIHx8XHJcbiAgICAgICAgICAodSAtIHRoaXMudUxpbWl0ID4gdGhpcy5pbWFnZVZpZXdwb3J0LngyICYmIHYgKyB0aGlzLnZMaW1pdCA8IHRoaXMuaW1hZ2VWaWV3cG9ydC55MSkgfHxcclxuICAgICAgICAgICh1IC0gdGhpcy51TGltaXQgPiB0aGlzLmltYWdlVmlld3BvcnQueDIgJiYgdiAtIHRoaXMudkxpbWl0ID4gdGhpcy5pbWFnZVZpZXdwb3J0LnkyKTtcclxuICAgICAgY2FzZSB2cHguSE9SSVpPTlRBTF9USUxFOlxyXG4gICAgICAgIHJldHVybiB2ICsgdGhpcy52TGltaXQgPCB0aGlzLmltYWdlVmlld3BvcnQueTEgfHwgdiAtIHRoaXMudkxpbWl0ID4gdGhpcy5pbWFnZVZpZXdwb3J0LnkyO1xyXG4gICAgICBjYXNlIHZweC5WRVJUSUNBTF9USUxFOlxyXG4gICAgICAgIHJldHVybiB1ICsgdGhpcy51TGltaXQgPCB0aGlzLmltYWdlVmlld3BvcnQueDEgfHwgdSAtIHRoaXMudUxpbWl0ID4gdGhpcy5pbWFnZVZpZXdwb3J0LngyO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExhemlsaXkgcmV0dXJucyBjYWNoZWQgaW1hZ2UgYXZlcmFnZSBjb2xvci5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHJldHVybnMge0NvbG9yfVxyXG4gICAqL1xyXG4gIGdldEltYWdlQXZlcmFnZUNvbG9yKCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VBdmVyYWdlQ29sb3IgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5pbWFnZUF2ZXJhZ2VDb2xvciA9IHRoaXMuaW1hZ2UuZ2V0QXZlcmFnZUNvbG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VBdmVyYWdlQ29sb3Iuc2xpY2UoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBlbGxpcHNlIGlzIGNvbXBsZXRlbHkgb3V0IG9mIGltYWdlIGJvdW5kcy5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIG91dE9mSW1hZ2VCb3VuZHModSwgdikge1xyXG4gICAgcmV0dXJuIHUgKyB0aGlzLnVMaW1pdCA8IHRoaXMuaW1hZ2VWaWV3cG9ydC54MSB8fFxyXG4gICAgICB1IC0gdGhpcy51TGltaXQgPiB0aGlzLmltYWdlVmlld3BvcnQueDIgfHxcclxuICAgICAgdiArIHRoaXMudkxpbWl0IDwgdGhpcy5pbWFnZVZpZXdwb3J0LnkxIHx8XHJcbiAgICAgIHYgLSB0aGlzLnZMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC55MjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVXQTsiLCIvKipcclxuICogQG5hbWVzcGFjZSBsZW5zLnJlc2FtcGxlclxyXG4gKi9cclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQb2ludH0gZnJvbSAnLi9wb2ludCc7XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgRVdBfSBmcm9tICcuL2Utdy1hJzsiLCJpbXBvcnQge2JsZW5kQ29sb3JzfSBmcm9tIFwiLi4vdXRpbC91dGlsXCI7XHJcblxyXG4vKipcclxuICogPHA+e0BsaW5rIFJlc2FtcGxlckludGVyZmFjZX0gaW1wbGVtZW50YWlvbiB3aXRob3V0IHJlc2FtcGxpbmcgaXRzZWxmLjwvcD5cclxuICogPHA+SXQgdXNlcyBwaXhlbCBjb2xvciBpbnRlcnBvbGF0aW9uIGFuZCB3b3JrcyBtdWNoIGZhc3RlciB0aGFuIHtAbGluayBsZW5zLnJlc2FtcGxlci5FV0F9IGJ1dCBwcm9kdWNlcyBhbGlhc2luZ1xyXG4gKiBlZmZlY3RzLjwvcD5cclxuICogPHA+SXQgaXMgZ29vZCBmb3IgcXVpY2sgY3JlYXRpb24gb2YgZGlzdG9ydGlvbiBwcmV2aWV3cyBhbmQgYWxzbyB1c2VkIGZvciB7QGxpbmsgRGlzdG9ydGlvbkludGVyZmFjZX0gaW1wbGVtZW50YXRpb25zXHJcbiAqIHRoYXQgZG9lc24ndCBoYXZlIHBhcnRpYWwgZGVyaXZhdGl2ZXMuPC9wPlxyXG4gKiA8cD5JdCB3b3JrcyBtb3N0IHF1aWNrbHkgd2hlbiB7QGxpbmsgSW1hZ2VJbnRlcmZhY2V9I2ludGVycG9sYXRpb25NZXRob2QgcHJvcGVydHkgaXMgc2V0IHRvXHJcbiAqIHtAbGluayBsZW5zLmludGVycG9sYXRpb24uSU5URUdFUn08L3A+XHJcbiAqXHJcbiAqIEBpbXBsZW1lbnRzIHtSZXNhbXBsZXJJbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLnJlc2FtcGxlclxyXG4gKiBAdHV0b3JpYWwgMDIuMDMucGl4ZWwtY29sb3ItbG9va3VwXHJcbiAqL1xyXG5jbGFzcyBQb2ludCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tYXR0ZUNvbG9yID0gWzAsIDAsIDAsIDBdO1xyXG4gICAgdGhpcy5zY2FsaW5nID0gMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc2V0SW1hZ2UoaW1hZ2UpIHtcclxuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBzZXRNYXBwZXIobWFwcGVyKSB7XHJcbiAgICB0aGlzLm1hcHBlciA9IG1hcHBlcjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRSZXNhbXBsZWRDb2xvcih4LCB5KSB7XHJcbiAgICB4ID0geCAqIHRoaXMuc2NhbGluZztcclxuICAgIHkgPSB5ICogdGhpcy5zY2FsaW5nO1xyXG5cclxuICAgIGNvbnN0IHZhbGlkaXR5ID0gdGhpcy5tYXBwZXIuZ2V0VmFsaWRpdHkoeCwgeSwgdGhpcy5zY2FsaW5nKTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHkgPj0gMCkge1xyXG4gICAgICBsZXQgW3UsIHZdID0gdGhpcy5tYXBwZXIucmV2ZXJzZU1hcCh4LCB5KTtcclxuICAgICAgbGV0IGNvbG9yID0gdGhpcy5pbWFnZS5nZXRJbnRlcnBvbGF0ZWRQaXhlbENvbG9yKHUsIHYpO1xyXG5cclxuICAgICAgaWYgKHZhbGlkaXR5IDwgMSkge1xyXG4gICAgICAgIHJldHVybiBibGVuZENvbG9ycyhjb2xvciwgdGhpcy5tYXR0ZUNvbG9yLCB2YWxpZGl0eSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5tYXR0ZUNvbG9yLnNsaWNlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2ludDsiLCIvKipcclxuICogQG5hbWVzcGFjZSBsZW5zLnV0aWwuZ2F1c3NKb3JkYW5FbGltaW5hdGlvblxyXG4gKi9cclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBHYXVzc0pvcmRhbkVsaW1pbmF0aW9ufSBmcm9tICcuL3NvbHZlcic7XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgTGVhc3RTcXVhcmVzfSBmcm9tICcuL2xlYXN0LXNxdWFyZXMnOyIsImltcG9ydCBTb2x2ZXIgZnJvbSAnLi9zb2x2ZXInO1xyXG5cclxuLyoqXHJcbiAqIEBzdW1tYXJ5IFNvbHZlcyBzeXN0ZW0gb2YgZXF1YXRpb25zIHVzaW5nIExlYXN0IFNxdWFyZXMgbWV0aG9kLlxyXG4gKiBAbWVtYmVyT2YgbGVucy51dGlsLmdhdXNzSm9yZGFuRWxpbWluYXRpb25cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvbWF0cml4XzhjX3NvdXJjZS5odG1sI2wwMDgyOSBMZWFzdFNxdWFyZXNBZGRUZXJtcygpfSBhdFxyXG4gKiBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAqL1xyXG5jbGFzcyBMZWFzdFNxdWFyZXMgZXh0ZW5kcyBTb2x2ZXIge1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByYW5rIFRoZSByYW5rIG9yIHNpemUgb2YgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIHNxdWFyZSBtYXRyaXguXHJcbiAgICogQWxzbyB0aGUgbGVuZ3RoIG9mIHZlY3RvcnMsIGFuZCBudW1iZXIgb2YgdGVybXMgYmVpbmcgYWRkZWQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bVZlY3RvcnMgTnVtYmVyIG9mIHJlc3VsdCB2ZWN0b3JzLCBhbmQgbnVtYmVyIG9yIHJlc3VsdHMgYmVpbmdcclxuICAgKiBhZGRlZC4gIEFsc28gcmVwcmVzZW50cyB0aGUgbnVtYmVyIG9mIHNlcGFyYWJsZSBzeXN0ZW1zIG9mIGVxdWF0aW9uc1xyXG4gICAqIHRoYXQgaXMgYmVpbmcgc29sdmVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHJhbmssIG51bVZlY3RvcnMgPSAxKSB7XHJcbiAgICBjb25zdCBtYXRyaXggPSBbXTtcclxuICAgIGNvbnN0IHZlY3RvcnMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbms7IGkrKykge1xyXG4gICAgICBtYXRyaXgucHVzaChuZXcgQXJyYXkocmFuaykuZmlsbCgwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WZWN0b3JzOyBpKyspIHtcclxuICAgICAgdmVjdG9ycy5wdXNoKG5ldyBBcnJheShyYW5rKS5maWxsKDApKTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlcihtYXRyaXgsIHZlY3RvcnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBvbmUgc2V0IG9mIHRlcm1zIGFuZCBhc3NvY2lhdGUgcmVzdWx0cyB0byB0aGVcclxuICAgKiBnaXZlbiBtYXRyaXggYW5kIHZlY3RvcnMgZm9yIHNvbHZpbmcgdXNpbmcgbGVhc3Qtc3F1YXJlcyBmdW5jdGlvbiBmaXR0aW5nLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gdGVybXMgVGhlIHByZS1jYWxjdWxhdGVkIHRlcm1zICh3aXRob3V0IHRoZSB1bmtub3duIGNvZWZmaWNpZW50XHJcbiAgICogd2VpZ2h0cykgdGhhdCBmb3JtcyB0aGUgZXF1YXRpb24gYmVpbmcgYWRkZWQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gcmVzdWx0cyBUaGUgcmVzdWx0KHMpIHRoYXQgc2hvdWxkIGJlIGdlbmVyYXRlZCBmcm9tIHRoZSBnaXZlbiB0ZXJtc1xyXG4gICAqIHdlaWdodGVkIGJ5IHRoZSB5ZXQtdG8tYmUtc29sdmVkIGNvZWZmaWNpZW50cy5cclxuICAgKiBAcmV0dXJucyB7bGVucy51dGlsLmdhdXNzSm9yZGFuRWxpbWluYXRpb24uTGVhc3RTcXVhcmVzfVxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL21hdHJpeF84Y19zb3VyY2UuaHRtbCNsMDA4MjkgTGVhc3RTcXVhcmVzQWRkVGVybXMoKX0gYXRcclxuICAgKiBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAgICovXHJcbiAgYWRkVGVybXModGVybXMsIHJlc3VsdHMpIHtcclxuICAgIGNvbnN0IHJhbmsgPSB0aGlzLm1hdHJpeC5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCByYW5rOyBqKyspIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5rOyBpKyspIHtcclxuICAgICAgICB0aGlzLm1hdHJpeFtpXVtqXSArPSB0ZXJtc1tpXSAqIHRlcm1zW2pdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVjdG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMudmVjdG9yc1tpXVtqXSArPSByZXN1bHRzW2ldICogdGVybXNbal07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlYXN0U3F1YXJlczsiLCJpbXBvcnQgVW5zb2x2YWJsZU1hdHJpeCBmcm9tICcuLi8uLi9leGNlcHRpb24vdW5zb2x2YWJsZS1tYXRyaXgnO1xyXG5pbXBvcnQge3BlcmNlcHRpYmxlUmVjaXByb2NhbH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcm93MVxyXG4gKiBAcGFyYW0ge251bWJlcn0gY29sMVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcm93MlxyXG4gKiBAcGFyYW0ge251bWJlcn0gY29sMlxyXG4gKi9cclxuZnVuY3Rpb24gc3dhcChhcnJheSwgcm93MSwgY29sMSwgcm93MiwgY29sMikge1xyXG4gIGlmIChhcnJheVtyb3cxXVtjb2wxXSAhPT0gYXJyYXlbcm93Ml1bY29sMl0pIHtcclxuICAgIGFycmF5W3JvdzFdW2NvbDFdICs9IGFycmF5W3JvdzJdW2NvbDJdO1xyXG4gICAgYXJyYXlbcm93Ml1bY29sMl0gPSBhcnJheVtyb3cxXVtjb2wxXSAtIGFycmF5W3JvdzJdW2NvbDJdO1xyXG4gICAgYXJyYXlbcm93MV1bY29sMV0gLT0gYXJyYXlbcm93Ml1bY29sMl07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bnNvbHZhYmxlKCkge1xyXG4gIHRocm93IG5ldyBVbnNvbHZhYmxlTWF0cml4KFwiQ2FuJ3Qgc29sdmUgZ2l2ZW4gbWF0cml4IHVzaW5nIEdhdXNzLUpvcmRhbiBtZXRob2RcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAc3VtbWFyeSBTb2x2ZXMgc3lzdGVtIG9mIGVxdWF0aW9ucyB1c2luZyBHYXVzcy1Kb3JkYW4gZWxpbWluYXRpb24uXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvbiA8cD5CcmluZ3MgdGhlIG1hdHJpeCB0byByZWR1Y2VkIHJvdyBlY2hlbG9uIGZvcm0sXHJcbiAqICB3aGlsZSBzaW11bHRhbmVvdXNseSByZWR1Y2luZyBhbmQgdGh1cyBzb2x2aW5nIHRoZSBhdWdtZW50ZWQgcmVzdWx0c1xyXG4gKiAgbWF0cml4LjwvcD5cclxuICpcclxuICogPHA+U2VlIGFsc28ge0BsaW5rIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR2F1c3MtSm9yZGFuX2VsaW1pbmF0aW9ufTwvcD5cclxuICpcclxuICpcclxuICogIDxwPk5vdGUgdGhhdCB0aGUgJ21hdHJpeCcgaXMgZ2l2ZW4gYXMgYSAnYXJyYXkgb2YgYXJyYXlzJyBvZiByYW5rIHNpemUuXHJcbiAqICBUaGF0IGlzIHZhbHVlcyBjYW4gYmUgYXNzaWduZWQgYXMgICBtYXRyaXhbcm93XVtjb2x1bW5dICAgd2hlcmUgJ3JvdycgaXNcclxuICogIHR5cGljYWxseSB0aGUgZXF1YXRpb24sIGFuZCAnY29sdW1uJyBpcyB0aGUgdGVybSBvZiB0aGUgZXF1YXRpb24uXHJcbiAqICBUaGF0IGlzIHRoZSBtYXRyaXggaXMgaW4gdGhlIGZvcm0gb2YgYSAncm93IGZpcnN0IGFycmF5Jy48L3A+XHJcbiAqXHJcbiAqICA8cD5Ib3dldmVyICd2ZWN0b3JzJyBpcyBhICdhcnJheSBvZiBhcnJheXMnIHdoaWNoIGNhbiBoYXZlIGFueSBudW1iZXJcclxuICogIG9mIGNvbHVtbnMsIHdpdGggZWFjaCBjb2x1bW4gYXJyYXkgdGhlIHNhbWUgJ3JhbmsnIHNpemUgYXMgJ21hdHJpeCcuPC9wPlxyXG4gKlxyXG4gKiAgPHA+VGhpcyBhbGxvd3MgZm9yIHNpbXBsZXIgaGFuZGxpbmcgb2YgdGhlIHJlc3VsdHMsIGVzcGVjaWFsbHkgaXMgb25seSBvbmVcclxuICogIGNvbHVtbiAndmVjdG9yJyBpcyBhbGwgdGhhdCBpcyByZXF1aXJlZCB0byBwcm9kdWNlIHRoZSBkZXNpcmVkIHNvbHV0aW9uLjwvcD5cclxuICpcclxuICogIDxwPkZvciBleGFtcGxlLCB0aGUgJ3ZlY3RvcnMnIGNhbiBjb25zaXN0IG9mIHNpbXBsZSBhcnJheSBvZlxyXG4gKiAgbnVtYmVycy4gIHdoZW4gb25seSBvbmUgc2V0IG9mIHNpbXVsdGFuZW91cyBlcXVhdGlvbnMgaXMgdG8gYmUgc29sdmVkIGZyb21cclxuICogIHRoZSBnaXZlbiBzZXQgb2YgY29lZmZpY2llbnQgd2VpZ2h0ZWQgdGVybXMuPC9wPlxyXG4gKlxyXG4gKiAgPHA+SG93ZXZlciBieSBzcGVjaWZ5aW5nIG1vcmUgJ2NvbHVtbnMnIChhcyBhbiAnYXJyYXkgb2YgdmVjdG9yIGNvbHVtbnMnLFxyXG4gKiAgeW91IGNhbiB1c2UgdGhpcyBmdW5jdGlvbiB0byBzb2x2ZSBhIHNldCBvZiAnc2VwYXJhYmxlJyBlcXVhdGlvbnMuPC9wPlxyXG4gKlxyXG4gKiAgPHA+Rm9yIGV4YW1wbGUgYSBkaXN0b3J0aW9uIGZ1bmN0aW9uIHdoZXJlICAgIDxjb2RlPnUgPSBVKHgseSkgIHYgPSBWKHgseSk8L2NvZGU+XHJcbiAqICBBbmQgdGhlIGZ1bmN0aW9ucyBVKCkgYW5kIFYoKSBoYXZlIHNlcGFyYXRlIGNvZWZmaWNpZW50cywgYnV0IGFyZSBiZWluZ1xyXG4gKiAgZ2VuZXJhdGVkIGZyb20gYSBjb21tb24geCx5LT51LHYgIGRhdGEgc2V0LjwvcD5cclxuICpcclxuICogIDxwPllvdSBjYW4gYWxzbyB1c2UgdGhlICd2ZWN0b3JzJyB0byBnZW5lcmF0ZSBhbiBpbnZlcnNlIG9mIHRoZSBnaXZlbiAnbWF0cml4J1xyXG4gKiAgdGhvdWdoIGFzIGEgJ2NvbHVtbiBmaXJzdCBhcnJheScgcmF0aGVyIHRoYW4gYSAncm93IGZpcnN0IGFycmF5Jy4gRm9yXHJcbiAqICBkZXRhaWxzIHNlZSB7QGxpbmsgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HYXVzcy1Kb3JkYW5fZWxpbWluYXRpb259PC9wPlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy51dGlsLmdhdXNzSm9yZGFuRWxpbWluYXRpb25cclxuICpcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvbWF0cml4XzhjX3NvdXJjZS5odG1sI2wwMDQ4MCBHYXVzc0pvcmRhbkVsaW1pbmF0aW9uKCl9IGF0XHJcbiAqIEltYWdlTWFnaWNrIHNvdXJjZS5cclxuICovXHJcbmNsYXNzIFNvbHZlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtBcnJheTxudW1iZXJbXT59IG1hdHJpeCBTcXVhcmUgbWF0cml4IHRvIGJlIHNvbHZlZC5cclxuICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcltdPn0gdmVjdG9ycyBBdWdtZW50IHJlc3VsdHMgbWF0cml4LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG1hdHJpeCwgdmVjdG9ycykge1xyXG4gICAgdGhpcy5zb2x2ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubWF0cml4ID0gbWF0cml4Lm1hcChyb3cgPT4gcm93LnNsaWNlKCkpO1xyXG4gICAgdGhpcy52ZWN0b3JzID0gdmVjdG9ycy5tYXAodmVjdG9yID0+IHZlY3Rvci5zbGljZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNvbHZlcyBnaXZlbiBtYXRyaXguXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bGVucy51dGlsLmdhdXNzSm9yZGFuRWxpbWluYXRpb24uU29sdmVyfVxyXG4gICAqL1xyXG4gIHNvbHZlKCkge1xyXG4gICAgaWYgKHRoaXMuc29sdmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmFsaWRhdGUoKTtcclxuXHJcbiAgICBjb25zdCBtYXRyaXggPSB0aGlzLm1hdHJpeDtcclxuICAgIGNvbnN0IHZlY3RvcnMgPSB0aGlzLnZlY3RvcnM7XHJcbiAgICBjb25zdCByYW5rID0gbWF0cml4Lmxlbmd0aDtcclxuICAgIGNvbnN0IG51bVZlY3RvcnMgPSB2ZWN0b3JzLmxlbmd0aDtcclxuICAgIGNvbnN0IGNvbHMgPSBuZXcgQXJyYXkocmFuaykuZmlsbCgwKTtcclxuICAgIGNvbnN0IHJvd3MgPSBuZXcgQXJyYXkocmFuaykuZmlsbCgwKTtcclxuICAgIGNvbnN0IHBpdm90cyA9IG5ldyBBcnJheShyYW5rKS5maWxsKDApO1xyXG4gICAgbGV0IGNvbCA9IDA7XHJcbiAgICBsZXQgcm93ID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbms7IGkrKykge1xyXG4gICAgICBsZXQgbWF4ID0gMDtcclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmFuazsgaisrKSB7XHJcbiAgICAgICAgaWYgKHBpdm90c1tqXSAhPT0gMSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCByYW5rOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKHBpdm90c1trXSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIGlmIChwaXZvdHNba10gPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNvbHZhYmxlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKG1hdHJpeFtqXVtrXSkgPj0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgbWF4ID0gTWF0aC5hYnMobWF0cml4W2pdW2tdKTtcclxuICAgICAgICAgICAgICByb3cgPSBqO1xyXG4gICAgICAgICAgICAgIGNvbCA9IGs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBpdm90c1tjb2xdKys7XHJcblxyXG4gICAgICBpZiAocm93ICE9PSBjb2wpIHtcclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHJhbms7IGsrKykge1xyXG4gICAgICAgICAgc3dhcChtYXRyaXgsIHJvdywgaywgY29sLCBrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbnVtVmVjdG9yczsgaysrKSB7XHJcbiAgICAgICAgICBzd2FwKHZlY3RvcnMsIGssIHJvdywgaywgY29sKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvd3NbaV0gPSByb3c7XHJcbiAgICAgIGNvbHNbaV0gPSBjb2w7XHJcblxyXG4gICAgICBpZiAobWF0cml4W2NvbF1bY29sXSA9PT0gMCkge1xyXG4gICAgICAgIHVuc29sdmFibGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHNjYWxlID0gcGVyY2VwdGlibGVSZWNpcHJvY2FsKG1hdHJpeFtjb2xdW2NvbF0pO1xyXG4gICAgICBtYXRyaXhbY29sXVtjb2xdID0gMTtcclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmFuazsgaisrKSB7XHJcbiAgICAgICAgbWF0cml4W2NvbF1bal0gKj0gc2NhbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtVmVjdG9yczsgaisrKSB7XHJcbiAgICAgICAgdmVjdG9yc1tqXVtjb2xdICo9IHNjYWxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJhbms7IGorKykge1xyXG4gICAgICAgIGlmIChqICE9PSBjb2wpIHtcclxuICAgICAgICAgIGxldCBzY2FsZSA9IG1hdHJpeFtqXVtjb2xdO1xyXG4gICAgICAgICAgbWF0cml4W2pdW2NvbF0gPSAwO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcmFuazsgaysrKSB7XHJcbiAgICAgICAgICAgIG1hdHJpeFtqXVtrXSAtPSBzY2FsZSAqIG1hdHJpeFtjb2xdW2tdO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbnVtVmVjdG9yczsgaysrKSB7XHJcbiAgICAgICAgICAgIHZlY3RvcnNba11bal0gLT0gc2NhbGUgKiB2ZWN0b3JzW2tdW2NvbF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IHJhbmsgLSAxOyBqID49IDA7IGotLSkge1xyXG4gICAgICBpZiAoY29sc1tqXSAhPT0gcm93c1tqXSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuazsgaSsrKSB7XHJcbiAgICAgICAgICBzd2FwKG1hdHJpeCwgaSwgcm93c1tqXSwgaSwgY29sc1tqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zb2x2ZWQgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhdWdtZW50IG1hdHJpeCAocmVzdWx0cylcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtBcnJheS48bnVtYmVyW10+fVxyXG4gICAqL1xyXG4gIGdldFZlY3RvcnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52ZWN0b3JzLm1hcCh2ZWN0b3IgPT4gdmVjdG9yLnNsaWNlKCkpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlcyBtYXRyaXggYW5kIHZlY3RvcnMuXHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqIEByZXR1cm5zIHtsZW5zLnV0aWwuZ2F1c3NKb3JkYW5FbGltaW5hdGlvbi5Tb2x2ZXJ9XHJcbiAgICovXHJcbiAgdmFsaWRhdGUoKSB7XHJcbiAgICBjb25zdCByYW5rID0gdGhpcy5tYXRyaXgubGVuZ3RoO1xyXG5cclxuICAgIHRoaXMubWF0cml4LmZvckVhY2gocm93ID0+IHtcclxuICAgICAgaWYgKHJvdy5sZW5ndGggIT09IHJhbmspIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBtdXN0IGJlIHNxdWFyZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnZlY3RvcnMuZm9yRWFjaCh2ZWN0b3IgPT4ge1xyXG4gICAgICBpZiAodmVjdG9yLmxlbmd0aCAhPT0gcmFuaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVmVjdG9ycyBtdXN0IGJlIHRoZSBzYW1lIGxlbmd0aCBhcyBtYXRyaXggcmFuaycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvbHZlcjsiLCIvKipcclxuICogQG5hbWVzcGFjZSBsZW5zLnV0aWxcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBnYXVzc0pvcmRhbkVsaW1pbmF0aW9uIGZyb20gJy4vZ2F1c3Mtam9yZGFuLWVsaW1pbmF0aW9uJztcclxuXHJcbmV4cG9ydCB7Z2F1c3NKb3JkYW5FbGltaW5hdGlvbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGJsZW5kQ29sb3JzLFxyXG4gIHBlcmNlcHRpYmxlUmVjaXByb2NhbCxcclxuICBkZWcycmFkLFxyXG4gIHJhZDJkZWdcclxufSBmcm9tICcuL3V0aWwnOyIsImltcG9ydCB7RVBTSUxPTn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiAxL3ggd2hlcmUgeCBpcyBwZXJjZXB0aWJsZSAobm90IHVubGltaXRlZCBvciBpbmZpbml0ZXNpbWFsKS5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMudXRpbFxyXG4gKiBAcGFyYW0ge251bWJlcn0geFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9waXhlbC1hY2Nlc3Nvcl84aF9zb3VyY2UuaHRtbCNsMDAyMzQgUGVyY2VwdGlibGVSZWNpcHJvY2FsKCl9XHJcbiAqIGF0IEltYWdlTWFnaWNrIHNvdXJjZS5cclxuICovXHJcbmZ1bmN0aW9uIHBlcmNlcHRpYmxlUmVjaXByb2NhbCh4KSB7XHJcbiAgY29uc3Qgc2lnbiA9IHggPCAwID8gLTEgOiAxO1xyXG5cclxuICBpZiAoc2lnbiAqIHggPj0gRVBTSUxPTikge1xyXG4gICAgcmV0dXJuIDEgLyB4O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNpZ24gLyBFUFNJTE9OO1xyXG59XHJcblxyXG4vKipcclxuICogQmxlbmRzIHR3byBjb2xvcnMgYnkgZ2l2ZW4gd2VpZ2h0cy5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMudXRpbFxyXG4gKiBAcGFyYW0ge0NvbG9yfSBjb2xvcjEgRmlyc3QgY29sb3IgdG8gYmxlbmQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3ZWlnaHQxIEZpcnN0IGNvbG9yJ3Mgd2VpZ2h0LlxyXG4gKiBAcGFyYW0ge0NvbG9yfSBjb2xvcjIgU2Vjb25kIGNvbG9yIHRvIGJsZW5kLlxyXG4gKiBAcGFyYW0ge251bWJlcnxudWxsfSBbd2VpZ2h0Ml0gU2Vjb25kIGNvbG9yJ3Mgd2VpZ2h0LiBJZiBub3QgcGFzc2VkIC0tIHdpbGwgYmUgY2FsY3VsYXRlZCBhcyAxIC0gd2VpZ2h0MS5cclxuICogQHJldHVybnMge0NvbG9yfSBDb2xvciBibGVuZGluZyByZXN1bHQuXHJcbiAqL1xyXG5mdW5jdGlvbiBibGVuZENvbG9ycyhjb2xvcjEsIHdlaWdodDEsIGNvbG9yMiwgd2VpZ2h0MiA9IG51bGwpIHtcclxuICBpZiAod2VpZ2h0MiA9PT0gbnVsbCkge1xyXG4gICAgd2VpZ2h0MiA9IDEgLSB3ZWlnaHQxO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbG9yMS5tYXAoKGNoYW5uZWwsIGkpID0+IE1hdGgucm91bmQoY2hhbm5lbCAqIHdlaWdodDEgKyBjb2xvcjJbaV0gKiB3ZWlnaHQyKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyByYWRpYW5zIHRvIGRlZ3JlZXNcclxuICpcclxuICogQG1lbWJlck9mIGxlbnMudXRpbFxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFuc1xyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gcmFkMmRlZyhyYWRpYW5zKSB7XHJcbiAgcmV0dXJuIDE4MCAqIHJhZGlhbnMgLyBNYXRoLlBJO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgZGVncmVlcyB0byByYWRpYW5zXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLnV0aWxcclxuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXNcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIGRlZzJyYWQoZGVncmVlcykge1xyXG4gIHJldHVybiBNYXRoLlBJICogZGVncmVlcyAvIDE4MDtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBibGVuZENvbG9ycyxcclxuICBwZXJjZXB0aWJsZVJlY2lwcm9jYWwsXHJcbiAgcmFkMmRlZyxcclxuICBkZWcycmFkXHJcbn07IiwiLyoqXHJcbiAqIEBzdW1tYXJ5IFZpcnR1YWwgdmlld3BvcnQgY2xhc3MuXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvbiBSZXByZXNlbnRzIGltYWdlJ3MgdmlydHVhbCBwb3NpdGlvbiBhdCBpdCdzIGNvb3JkaW5hdGUgc3BhY2UuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9iYXNpY3MvI3BhZ2UgVmlydHVhbCBjYW52YXMgb2Zmc2V0fSBhdCBJbWFnZU1hZ2ljayBkb2NzLlxyXG4gKiBAdHV0b3JpYWwgMDIuMDYudmlydHVhbC12aWV3cG9ydFxyXG4gKi9cclxuY2xhc3MgVmlld3BvcnQge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHgxIExlZnQgZWRnZSBjb29yZGluYXRlIG9mIHZpZXdwb3J0LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5MSBUb3AgZWRnZSBjb29yZGluYXRlICBvZiB2aWV3cG9ydC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geDIgUmlnaHQgZWRnZSBjb29yZGluYXRlIG9mIHZpZXdwb3J0LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5MiBCb3R0b20gZWRnZSBjb29yZGluYXRlIG9mIHZpZXdwb3J0LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAvKipcclxuICAgICAqIExlZnQgZWRnZSBjb29yZGluYXRlIG9mIHZpZXdwb3J0LlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMueDEgPSB4MTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRvcCBlZGdlIGNvb3JkaW5hdGUgb2Ygdmlld3BvcnQuXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnkxID0geTE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSaWdodCBlZGdlIGNvb3JkaW5hdGUgb2Ygdmlld3BvcnQuXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLngyID0geDI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCb3R0b20gZWRnZSBjb29yZGluYXRlIG9mIHZpZXdwb3J0LlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy55MiA9IHkyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB2aXJ0dWFsIHZpZXdwb3J0IHdpZHRoIC0tIHNhbWUgYXMgaW1hZ2UgYWN0dWFsIHdpZHRoLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICB3aWR0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLngyIC0gdGhpcy54MSArIDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHZpcnR1YWwgdmlld3BvcnQgaGVpZ2h0IC0tIHNhbWUgYXMgaW1hZ2UgYWN0dWFsIGhlaWdodC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMueTIgLSB0aGlzLnkxICsgMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdmlld3BvcnQgYXJlYS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgYXJlYSgpIHtcclxuICAgIHJldHVybiB0aGlzLndpZHRoKCkgKiB0aGlzLmhlaWdodCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHZpZXdwb3J0IGNvbnRhaW5zIGdpdmVuIGNvb3Jkcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBjb250YWlucyh4LCB5KSB7XHJcbiAgICByZXR1cm4geCA+PSB0aGlzLngxICYmIHggPD0gdGhpcy54MiAmJiB5ID49IHRoaXMueTEgJiYgeSA8PSB0aGlzLnkyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXhwYW5kcyB2aWV3cG9ydCB0byBjb250YWluIGdpdmVuIGNvb3Jkcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICAgKiBAcmV0dXJucyB7bGVucy5WaWV3cG9ydH1cclxuICAgKi9cclxuICBleHBhbmQoeCwgeSkge1xyXG4gICAgdGhpcy54MSA9IE1hdGgubWluKHRoaXMueDEsIHgpO1xyXG4gICAgdGhpcy54MiA9IE1hdGgubWF4KHRoaXMueDIsIHgpO1xyXG4gICAgdGhpcy55MSA9IE1hdGgubWluKHRoaXMueTEsIHkpO1xyXG4gICAgdGhpcy55MiA9IE1hdGgubWF4KHRoaXMueTIsIHkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbG9uZXMgdmlld3BvcnQgaW50byBuZXcgaW5zdGFuY2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bGVucy5WaWV3cG9ydH1cclxuICAgKi9cclxuICBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLngxLCB0aGlzLnkxLCB0aGlzLngyLCB0aGlzLnkyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpeCBib3VuZHMgYWZ0ZXIgYmVzdCBmaXQgdmlld3BvcnQgY2FsY3VsYXRpb24uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bGVucy5WaWV3cG9ydH1cclxuICAgKi9cclxuICBmaXhCb3VuZHMoKSB7XHJcbiAgICB0aGlzLngxID0gTWF0aC5mbG9vcih0aGlzLngxIC0gMC41KTtcclxuICAgIHRoaXMueTEgPSBNYXRoLmZsb29yKHRoaXMueTEgLSAwLjUpO1xyXG4gICAgdGhpcy54MiA9IE1hdGguY2VpbCh0aGlzLngyIC0gMC41KTtcclxuICAgIHRoaXMueTIgPSBNYXRoLmNlaWwodGhpcy55MiAtIDAuNSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjYWxlcyB2aWV3cG9ydCBib3VuZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVcclxuICAgKiBAcmV0dXJucyB7bGVucy5WaWV3cG9ydH1cclxuICAgKi9cclxuICBzY2FsZShzY2FsZSkge1xyXG4gICAgdGhpcy54MSA9IE1hdGgucm91bmQodGhpcy54MSAqIHNjYWxlKTtcclxuICAgIHRoaXMueTEgPSBNYXRoLnJvdW5kKHRoaXMueTEgKiBzY2FsZSk7XHJcbiAgICB0aGlzLngyID0gTWF0aC5yb3VuZCh0aGlzLngyICogc2NhbGUpO1xyXG4gICAgdGhpcy55MiA9IE1hdGgucm91bmQodGhpcy55MiAqIHNjYWxlKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXRzIHZpZXdwb3J0IG9mZnNldC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtsZW5zLlZpZXdwb3J0fVxyXG4gICAqL1xyXG4gIHJlc2V0KCkge1xyXG4gICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aCgpLFxyXG4gICAgICAgIGhlaWdodCA9IHRoaXMuaGVpZ2h0KCk7XHJcbiAgICB0aGlzLngxID0gMDtcclxuICAgIHRoaXMueTEgPSAwO1xyXG4gICAgdGhpcy54MiA9IHRoaXMueDEgKyB3aWR0aCAtIDE7XHJcbiAgICB0aGlzLnkyID0gdGhpcy55MSArIGhlaWdodCAtIDE7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdwb3J0OyIsIi8qKlxyXG4gKiBWaXJ0dWFsIHBpeGVsIG1ldGhvZHMuXHJcbiAqXHJcbiAqIEByZWFkb25seVxyXG4gKiBAZW51bSB7bnVtYmVyfVxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy5pbWFnZW1hZ2ljay5vcmcvVXNhZ2UvbWlzYy8jdmlydHVhbC1waXhlbCBWaXJ0dWFsIHBpeGVsIGRldGFpbHN9IGF0IEltYWdlTWFnaWNrIGRvY3MuXHJcbiAqIEB0dXRvcmlhbCAwMi4wNS52aXJ0dWFsLXBpeGVscy1hbmQtbWF0dGVcclxuICovXHJcbmNvbnN0IHZweCA9IHtcclxuICAvKipcclxuICAgKiBVc2UgaW1hZ2UgYmFja2dyb3VuZCBjb2xvci5cclxuICAgKi9cclxuICBCQUNLR1JPVU5EOiAxLFxyXG5cclxuICAvKipcclxuICAgKiBDbG9zZXN0IGVkZ2UgY29sb3IuXHJcbiAgICovXHJcbiAgRURHRTogMyxcclxuXHJcbiAgLyoqXHJcbiAgICogTWlycm9yIGVmZmVjdC5cclxuICAgKi9cclxuICBNSVJST1I6IDQsXHJcblxyXG4gIC8qKlxyXG4gICAqIFJhbmRvbSBjb2xvciBmcm9tIGltYWdlLlxyXG4gICAqL1xyXG4gIFJBTkRPTTogNSxcclxuXHJcbiAgLyoqXHJcbiAgICogVGlsZSBlZmZlY3QuXHJcbiAgICovXHJcbiAgVElMRTogNixcclxuXHJcbiAgLyoqXHJcbiAgICogVHJhbnNwYXJlbnQgY29sb3IuXHJcbiAgICovXHJcbiAgVFJBTlNQQVJFTlQ6IDcsXHJcblxyXG4gIC8qKlxyXG4gICAqIEJsYWNrIGNvbG9yLlxyXG4gICAqL1xyXG4gIEJMQUNLOiA5LFxyXG5cclxuICAvKipcclxuICAgKiBHcmF5IGNvbG9yLlxyXG4gICAqL1xyXG4gIEdSQVk6IDEwLFxyXG5cclxuICAvKipcclxuICAgKiBXaGl0ZSBjb2xvci5cclxuICAgKi9cclxuICBXSElURTogMTEsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRpbGUgZWZmZWN0IGhvcml6b250YWxseSwgYmFja2dyb3VuZCBjb2xvciB2ZXJ0aWNhbGx5LlxyXG4gICAqL1xyXG4gIEhPUklaT05UQUxfVElMRTogMTIsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRpbGUgZWZmZWN0IHZlcnRpY2FsbHksIGJhY2tncm91bmQgY29sb3IgaG9yaXpvbnRhbGx5LlxyXG4gICAqL1xyXG4gIFZFUlRJQ0FMX1RJTEU6IDEzLFxyXG5cclxuICAvKipcclxuICAgKiBUaWxlIGVmZmVjdCBob3Jpem9udGFsbHksIGNsb3Nlc3QgZWRnZSBjb2xvciB2ZXJ0aWNhbGx5LlxyXG4gICAqL1xyXG4gIEhPUklaT05UQUxfVElMRV9FREdFOiAxNCxcclxuXHJcbiAgLyoqXHJcbiAgICogVGlsZSBlZmZlY3QgdmVydGljYWxseSwgY2xvc2VzdCBlZGdlIGNvbG9yIGhvcml6b250YWxseS5cclxuICAgKi9cclxuICBWRVJUSUNBTF9USUxFX0VER0U6IDE1XHJcblxyXG4gIC8vIFRPRE86IGltcGxlbWVudCBhbmQgYWRkIENoZWNrZXIgdGlsZSBhbiBkaXRoZXIgbWV0aG9kc1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdnB4OyJdLCJzb3VyY2VSb290IjoiIn0=