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

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW5zL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sZW5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlbnMvLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZGlzdG9ydC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRlci9yZXZlcnNlLXBpeGVsLW1hcHBpbmcuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9kaXN0b3J0aW9uL2FmZmluZS5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRpb24vYXJjLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZGlzdG9ydGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2Rpc3RvcnRpb24vcGVyc3BlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9kaXN0b3J0cy5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi9pbnZhbGlkLWFyZ3VtZW50LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZXhjZXB0aW9uL2ludmFsaWQtYXJndW1lbnRzLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi9sZW5zLWV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2V4Y2VwdGlvbi91bnNvbHZhYmxlLW1hdHJpeC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2ZpbHRlci1wcmVzZXRzLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZmlsdGVyL2ZpbHRlci1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvZmlsdGVyL2luZGV4LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvaW1hZ2UvYWJzdHJhY3QtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9pbWFnZS9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9pbWFnZS9kb20taW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9pbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL2luZGV4LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvaW50ZXJwb2xhdGlvbi5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL21peGlucy9jcmVhdGVzLWJlc3RGaXQtdmlld3BvcnQtZnJvbS1hcGV4ZXMuanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9taXhpbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi9taXhpbnMvaW50ZXJwb2xhdGlvbi10cmFpdC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL21peGlucy92aXJ0dWFsLXBpeGVsLXRyYWl0LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvcmVzYW1wbGVyL2Utdy1hLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvcmVzYW1wbGVyL2luZGV4LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvcmVzYW1wbGVyL3BvaW50LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdXRpbC9nYXVzcy1qb3JkYW4tZWxpbWluYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVucy8uL2xpYi91dGlsL2dhdXNzLWpvcmRhbi1lbGltaW5hdGlvbi9sZWFzdC1zcXVhcmVzLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdXRpbC9nYXVzcy1qb3JkYW4tZWxpbWluYXRpb24vc29sdmVyLmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly9sZW5zLy4vbGliL3ZpZXdwb3J0LmpzIiwid2VicGFjazovL2xlbnMvLi9saWIvdnB4LmpzIl0sIm5hbWVzIjpbIkVQU0lMT04iLCJNQVhJTVVNX1ZBTFVFIiwiTV9QSTIiLCJNYXRoIiwiUEkiLCJNXzJQSSIsImRlZmF1bHRPcHRpb25zIiwiYmVzdEZpdCIsImZpbHRlciIsImZpbHRlclByZXNldHMiLCJST0JJRE9VWCIsInJlc2FtcGxlIiwiYXN5bmMiLCJvdXRwdXRTY2FsaW5nIiwiZGlzdG9ydCIsImltYWdlIiwiZGlzdG9ydGlvbiIsImFyZ3MiLCJvcHRpb25zIiwibWFrZU9wdGlvbnMiLCJmb3JjZUJlc3RGaXQiLCJkaXN0b3J0ZWQiLCJzeW5jIiwibWFrZURpc3RvcnRlciIsIm1ha2VSZXNhbXBsZXIiLCJzdXBlcnNhbXBsZSIsInNjYWxlU3VwZXJzYW1wbGVkIiwiZSIsIlByb21pc2UiLCJyZWplY3QiLCJ0aGVuIiwic3VwZXJzYW1wbGVkIiwic2NhbGUiLCJjb25zb2xlIiwid2FybiIsIk9iamVjdCIsImFzc2lnbiIsInJlc2FtcGxlciIsImRpc3QiLCJkaXN0b3J0ZXIiLCJ2aWV3cG9ydCIsInJzbSIsIm1ha2VGaWx0ZXIiLCJtYXR0ZUNvbG9yIiwic2xpY2UiLCJSZXZlcnNlUGl4ZWxNYXBwaW5nIiwibWFwcGVyIiwic2V0SW1hZ2UiLCJzZXRNYXBwZXIiLCJwcmVwYXJlVmlld3BvcnQiLCJ4MSIsImZsb29yIiwieTEiLCJ4MiIsInkyIiwiY2FudmFzIiwiZ2V0QmxhbmsiLCJzY2FsaW5nIiwicGVyZm9ybURpc3RvcnRpb25Bc3luYyIsInBlcmZvcm1EaXN0b3J0aW9uIiwieSIsIngiLCJzZXRQaXhlbENvbG9yIiwiZ2V0UmVzYW1wbGVkQ29sb3IiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImNsb25lIiwiaGFzQmVzdEZpdFZpZXdwb3J0IiwiZ2V0QmVzdEZpdFZpZXdwb3J0IiwibWFwIiwibWF0cml4IiwiQWZmaW5lIiwiZm9yd2FyZE1hdHJpeCIsImNvbnN0cnVjdG9yIiwiaW52ZXJ0QWZmaW5lTWF0cml4IiwiaGFzUGFydGlhbERlcml2YXRpdmVzIiwiaGFzQ29uc3RhbnRQYXJ0aWFsRGVyaXZhdGl2ZXMiLCJjb250cm9sUG9pbnRzIiwibGVuZ3RoIiwiSW52YWxpZEFyZ3VtZW50c0xlbmd0aCIsImxlYXN0U3F1YXJlcyIsIkxlYXN0U3F1YXJlcyIsImkiLCJ1IiwidiIsImFkZFRlcm1zIiwidmVjdG9ycyIsInNvbHZlIiwiZ2V0VmVjdG9ycyIsImNvbmNhdCIsImRldGVybWluYW50IiwicGVyY2VwdGlibGVSZWNpcHJvY2FsIiwicHJvdG90eXBlIiwiY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXMiLCJBcmMiLCJjMCIsImMxIiwiYzIiLCJjMyIsImM0IiwiYW5nbGVUb1dpZHRoIiwid2lkdGgiLCJyYWRpdXNUb0hlaWdodCIsImhlaWdodCIsImdldFVWIiwiYSIsImNhIiwiY29zIiwic2EiLCJzaW4iLCJ2cCIsIlZpZXdwb3J0IiwiZXhwYW5kIiwiY2VpbCIsImZpeEJvdW5kcyIsImF0YW4yIiwicm91bmQiLCJoeXBvdCIsIkludmFsaWRBcmd1bWVudCIsImRlZzJyYWQiLCJwIiwicSIsInIiLCJQZXJzcGVjdGl2ZSIsInJldmVyc2VNYXRyaXgiLCJkZW5vbWluYXRvciIsImludmVydFBlcnNwZWN0aXZlTWF0cml4IiwidmFsaWRpdHkiLCJhYnNSIiwiYWJzIiwiYWJzQzYiLCJhYnNDNyIsInBvdyIsImludmVyc2UiLCJhZmZpbmVCeUNvbnRyb2xQb2ludHMiLCJmcm9tQ29udHJvbFBvaW50cyIsImFmZmluZUJ5TWF0cml4Iiwic3giLCJyeSIsInJ4Iiwic3kiLCJ0eCIsInR5IiwiZnJvbUZvcndhcmRNYXRyaXgiLCJwZXJzcGVjdGl2ZUJ5Q29udHJvbFBvaW50cyIsInBlcnNwZWN0aXZlQnlNYXRyaXgiLCJhcmNCeUFyZ3VtZW50cyIsImZyb21Bcmd1bWVudHMiLCJkaXN0b3J0cyIsIkFGRklORSIsIkFGRklORV9QUk9KRUNUSU9OIiwiUEVSU1BFQ1RJVkUiLCJQRVJTUEVDVElWRV9QUk9KRUNUSU9OIiwiQVJDIiwicmVnaXN0ZXJEaXN0b3J0aW9uUmVzb2x2ZXIiLCJuYW1lIiwicmVzb2x2ZXIiLCJ1bnJlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyIiwibWVzc2FnZSIsIkxlbnNFeGNlcHRpb24iLCJFcnJvciIsImNhcHR1cmVTdGFja1RyYWNlIiwic3RhY2siLCJVbnNvbHZhYmxlTWF0cml4IiwiRmlsdGVyIiwiY3ViaWNCQyIsImJveCIsIlJPQklET1VYX1NIQVJQIiwiZnVuYyIsImZpbHRlckZ1bmN0aW9uTmFtZSIsImIiLCJjIiwicDAiLCJwMiIsInAzIiwicTAiLCJxMSIsInEyIiwicTMiLCJmaWx0ZXJGdW5jdGlvbiIsIndpbmRvd2luZ0Z1bmN0aW9uIiwic3VwcG9ydCIsImJsdXIiLCJ3aW5kb3dTdXBwb3J0IiwieEJsdXIiLCJ3aW5kb3ciLCJub3RJbXBsZW1lbnRlZCIsIm1ldGhvZCIsIkFic3RyYWN0SW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2aXJ0dWFsUGl4ZWxNZXRob2QiLCJ2cHgiLCJUUkFOU1BBUkVOVCIsInF1YW50dW1SYW5nZSIsImludGVycG9sYXRpb25NZXRob2QiLCJpbnRlcnBvbGF0aW9uIiwiSU5URUdFUiIsImdldEltYWdlUGl4ZWxDb2xvciIsImdldFZpcnR1YWxQaXhlbENvbG9yIiwiY29sb3IiLCJzZXRJbWFnZVBpeGVsQ29sb3IiLCJibGFuayIsInByZXBhcmVCbGFuayIsInJlc2l6ZWQiLCJyZXNpemUiLCJ2aXJ0dWFsUGl4ZWxUcmFpdCIsImludGVycG9sYXRpb25UcmFpdCIsIkNhbnZhcyIsImltYWdlRGF0YSIsImdldENvbnRleHQiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwib2Zmc2V0IiwiQXJyYXkiLCJjYWxsIiwiZm9yRWFjaCIsImNoYW5uZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwdXRJbWFnZURhdGEiLCJkcmF3SW1hZ2UiLCJkc3QiLCJEb21JbWFnZSIsIkltYWdlIiwib25sb2FkIiwic3JjIiwidG9EYXRhVVJMIiwiVkVSU0lPTiIsIkFWRVJBR0UiLCJBVkVSQUdFXzkiLCJBVkVSQUdFXzE2IiwiQkFDS0dST1VORCIsInUxIiwidjEiLCJ1MiIsInYyIiwiZm9yd2FyZE1hcCIsImFwZXgiLCJnZXRJbnRlcnBvbGF0ZWRQaXhlbENvbG9yIiwibWV0aG9kcyIsImludGVycG9sYXRlQXZlcmFnZSIsImdldFBpeGVsQ29sb3IiLCJjb3VudCIsInN0YXJ0WCIsInN0YXJ0WSIsImVuZFgiLCJlbmRZIiwiWSIsIlgiLCJnYW1tYSIsImdldEVkZ2VDb29yZHMiLCJtYXgiLCJtaW4iLCJnZXRUaWxlQ29vcmRzIiwidnB4TWV0aG9kcyIsIkVER0UiLCJNSVJST1IiLCJUSUxFIiwiQkxBQ0siLCJXSElURSIsImZpbGwiLCJHUkFZIiwiSE9SSVpPTlRBTF9USUxFIiwiSE9SSVpPTlRBTF9USUxFX0VER0UiLCJWRVJUSUNBTF9USUxFIiwiVkVSVElDQUxfVElMRV9FREdFIiwiUkFORE9NIiwicmFuZG9tIiwiV0VJR0hUX0xPT0tVUF9UQUJMRV9XSURUSCIsImJ1aWxkV2VpZ2h0TG9va3VwVGFibGUiLCJ0YWJsZSIsInJTY2FsZSIsInNxcnQiLCJRIiwiZ2V0V2VpZ2h0IiwiY2xhbXBUb1F1YW50dW0iLCJ2YWx1ZSIsImNsYW1wRWxsaXBzZUF4ZXMiLCJkdXgiLCJkdXkiLCJkdngiLCJkdnkiLCJkIiwiYWEiLCJiYiIsImNjIiwiZGQiLCJuMTEiLCJuMTIiLCJuMjEiLCJuMjIiLCJkZXQiLCJ0d2ljZV9kZXQiLCJmcm9iZW5pdXNfc3F1YXJlZCIsImRpc2NyaW1pbmFudCIsInNxcnRfZGlzY3JpbWluYW50IiwiczFzMSIsInMyczIiLCJzMXMxbWludXNuMTEiLCJzMXMxbWludXNuMjIiLCJzMXMxbWludXNuMTFfc3F1YXJlZCIsInMxczFtaW51c24yMl9zcXVhcmVkIiwidGVtcF91MTEiLCJ0ZW1wX3UyMSIsIm5vcm0iLCJ1MTEiLCJ1MjEiLCJtYWpvcl9tYWciLCJtaW5vcl9tYWciLCJtYWpvcl94IiwibWFqb3JfeSIsIm1pbm9yX3giLCJtaW5vcl95IiwiRVdBIiwicmVzaXplRmlsdGVyIiwid2VpZ2h0TG9va3VwVGFibGUiLCJpbWFnZVZpZXdwb3J0IiwiaW1hZ2VBcmVhIiwiaW1hZ2VWaXJ0dWFsUGl4ZWxNZXRob2QiLCJpbWFnZUF2ZXJhZ2VDb2xvciIsIkEiLCJCIiwiQyIsIkYiLCJ1TGltaXQiLCJ2TGltaXQiLCJ1V2lkdGgiLCJzbG9wZSIsImVsbGlwc2VJc1NldFVwIiwibGltaXRSZWFjaGVkIiwiZ2V0VmFsaWRpdHkiLCJyZXZlcnNlTWFwIiwic2V0dXBFbGxpcHNlT25jZSIsImdldFBhcnRpYWxEZXJpdmF0aXZlcyIsInNldHVwRWxsaXBzZSIsImdldFdlaWdodGVkQXZlcmFnZSIsImJsZW5kQ29sb3JzIiwiYXJlYSIsImRlcml2YXRpdmVzIiwiZGVyaXZhdGl2ZSIsImluaXRFbGxpcHNlIiwic2NhbGVFbGxpcHNlIiwidTAiLCJ2MCIsImRvZXNudE5lZWRSZXNhbXBsaW5nIiwiZ2V0SW1hZ2VBdmVyYWdlQ29sb3IiLCJkaXZpc29yTSIsImRpdmlzb3JDIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYWxwaGEiLCJ1dyIsIkREUSIsInVzdGFydCIsInVlbmQiLCJVIiwiViIsIkRRIiwid2VpZ2h0IiwiZyIsIm91dE9mSW1hZ2VCb3VuZHMiLCJnZXRBdmVyYWdlQ29sb3IiLCJQb2ludCIsInJhbmsiLCJudW1WZWN0b3JzIiwicHVzaCIsInRlcm1zIiwicmVzdWx0cyIsImoiLCJTb2x2ZXIiLCJzd2FwIiwiYXJyYXkiLCJyb3cxIiwiY29sMSIsInJvdzIiLCJjb2wyIiwidW5zb2x2YWJsZSIsInNvbHZlZCIsInJvdyIsInZlY3RvciIsInZhbGlkYXRlIiwiY29scyIsInJvd3MiLCJwaXZvdHMiLCJjb2wiLCJrIiwic2lnbiIsImNvbG9yMSIsIndlaWdodDEiLCJjb2xvcjIiLCJ3ZWlnaHQyIiwicmFkMmRlZyIsInJhZGlhbnMiLCJkZWdyZWVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LE1BQUksRUFBRSxDQVRJOztBQVdWOzs7QUFHQUMsUUFBTSxFQUFFLENBZEU7O0FBZ0JWOzs7QUFHQVUsUUFBTSxFQUFFLENBbkJFOztBQXFCVjs7O0FBR0FULE1BQUksRUFBRSxDQXhCSTs7QUEwQlY7OztBQUdBakUsYUFBVyxFQUFFLENBN0JIOztBQStCVjs7O0FBR0FrRSxPQUFLLEVBQUUsQ0FsQ0c7O0FBb0NWOzs7QUFHQUcsTUFBSSxFQUFFLEVBdkNJOztBQXlDVjs7O0FBR0FGLE9BQUssRUFBRSxFQTVDRzs7QUE4Q1Y7OztBQUdBRyxpQkFBZSxFQUFFLEVBakRQOztBQW1EVjs7O0FBR0FFLGVBQWEsRUFBRSxFQXRETDs7QUF3RFY7OztBQUdBRCxzQkFBb0IsRUFBRSxFQTNEWjs7QUE2RFY7OztBQUdBRSxvQkFBa0IsRUFBRSxFQWhFVixDQWtFVjs7QUFsRVUsQ0FBWjtBQXFFZTFFLGtFQUFmLEUiLCJmaWxlIjoibGVucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxlbnNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGVuc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiLyoqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBFUFNJTE9OID0gMS4wZS0xMjtcclxuLyoqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBNQVhJTVVNX1ZBTFVFID0gMS43OTc2OTMxMzQ4NjIzMTU3MEUrMzA4O1xyXG5cclxuLyoqXHJcbiAqIFBpLzJcclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICogQG1lbWJlck9mIGxlbnNcclxuICovXHJcbmNvbnN0IE1fUEkyID0gTWF0aC5QSSAvIDI7XHJcblxyXG4vKipcclxuICogUGkgKiAyXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xyXG5jb25zdCBNXzJQSSA9IE1hdGguUEkgKiAyO1xyXG5cclxuZXhwb3J0IHtcclxuICBFUFNJTE9OLFxyXG4gIE1BWElNVU1fVkFMVUUsXHJcbiAgTV9QSTIsXHJcbiAgTV8yUElcclxufTsiLCJpbXBvcnQgKiBhcyBkaXN0b3J0ZXIgZnJvbSBcIi4vZGlzdG9ydGVyXCI7XHJcbmltcG9ydCAqIGFzIHJlc2FtcGxlciBmcm9tIFwiLi9yZXNhbXBsZXJcIjtcclxuaW1wb3J0IGZpbHRlclByZXNldHMgZnJvbSAnLi9maWx0ZXItcHJlc2V0cyc7XHJcblxyXG5sZXQgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgYmVzdEZpdDogZmFsc2UsXHJcbiAgZmlsdGVyOiBmaWx0ZXJQcmVzZXRzLlJPQklET1VYLFxyXG4gIHJlc2FtcGxlOiB0cnVlLFxyXG4gIGFzeW5jOiB0cnVlLFxyXG4gIG91dHB1dFNjYWxpbmc6IDFcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQG5hbWUgZGlzdG9ydFxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKiBAdmFyaWF0aW9uIDJcclxuICpcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gaW1hZ2VcclxuICogQHBhcmFtIHtEaXN0b3J0aW9uSW50ZXJmYWNlfSBkaXN0b3J0aW9uXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbk9wdGlvbnN9IG9wdGlvbnNcclxuICpcclxuICogQHJldHVybnMge0ltYWdlSW50ZXJmYWNlfFByb21pc2U8SW1hZ2VJbnRlcmZhY2U+fVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBQZXJmb3JtcyBkaXN0b3J0aW9uIG9mIGltYWdlXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqIEBwYXJhbSB7SW1hZ2VJbnRlcmZhY2V9IGltYWdlXHJcbiAqIEBwYXJhbSB7bGVucy5kaXN0b3J0c3xsZW5zfmRpc3RvcnRpb25SZXNvbHZlcn0gZGlzdG9ydGlvblxyXG4gKiBAcGFyYW0ge2FycmF5fSBhcmdzXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbk9wdGlvbnN9IFtvcHRpb25zXVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SW1hZ2VJbnRlcmZhY2V8UHJvbWlzZTxJbWFnZUludGVyZmFjZT59XHJcbiAqL1xyXG5mdW5jdGlvbiBkaXN0b3J0KGltYWdlLCBkaXN0b3J0aW9uLCBhcmdzLCBvcHRpb25zID0ge30pIHtcclxuICB0cnkge1xyXG4gICAgaWYgKHR5cGVvZiBkaXN0b3J0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGRpc3RvcnRpb24gID0gZGlzdG9ydGlvbihhcmdzLCBpbWFnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcHRpb25zICAgICA9IGFyZ3MgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9ucyA9IG1ha2VPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuICAgIGlmIChkaXN0b3J0aW9uLmZvcmNlQmVzdEZpdCkge1xyXG4gICAgICBvcHRpb25zLmJlc3RGaXQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkaXN0b3J0ZWQgPSBzeW5jKFxyXG4gICAgICBtYWtlRGlzdG9ydGVyKFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIGRpc3RvcnRpb24sXHJcbiAgICAgICAgbWFrZVJlc2FtcGxlcihpbWFnZSwgZGlzdG9ydGlvbiwgb3B0aW9ucyksXHJcbiAgICAgICAgb3B0aW9uc1xyXG4gICAgICApLmRpc3RvcnQoKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5zdXBlcnNhbXBsZSAmJiBvcHRpb25zLnN1cGVyc2FtcGxlICE9PSAxKSB7XHJcbiAgICAgIHJldHVybiBzY2FsZVN1cGVyc2FtcGxlZChkaXN0b3J0ZWQsIDEgLyBvcHRpb25zLnN1cGVyc2FtcGxlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGlzdG9ydGVkO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuYXN5bmMpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IGU7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogU3luYyBJbWFnZUludGVyZmFjZSBpbnRlcm5hbCBkYXRhIHN0b3JhZ2Ugd2l0aCBpbWFnZSBvYmplY3QuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7SW1hZ2VJbnRlcmZhY2V8UHJvbWlzZTxJbWFnZUludGVyZmFjZT59IGRpc3RvcnRlZFxyXG4gKiBAcmV0dXJucyB7SW1hZ2VJbnRlcmZhY2V8UHJvbWlzZTxJbWFnZUludGVyZmFjZT59XHJcbiAqL1xyXG5mdW5jdGlvbiBzeW5jKGRpc3RvcnRlZCkge1xyXG4gIGlmIChkaXN0b3J0ZWQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICByZXR1cm4gZGlzdG9ydGVkLnRoZW4oZGlzdG9ydGVkID0+IHN5bmMoZGlzdG9ydGVkKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoJ3N5bmMnIGluIGRpc3RvcnRlZCAmJiB0eXBlb2YgZGlzdG9ydGVkLnN5bmMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiBkaXN0b3J0ZWQuc3luYygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpc3RvcnRlZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNjYWxlcyBzdXBlcnNhbXBsZWQgaW1hZ2UgYmFjayB0byBub3JtYWwgc2l6ZS5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZXxQcm9taXNlPEltYWdlSW50ZXJmYWNlPn0gc3VwZXJzYW1wbGVkXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVxyXG4gKiBAcmV0dXJucyB7SW1hZ2VJbnRlcmZhY2V8UHJvbWlzZTxJbWFnZUludGVyZmFjZT59XHJcbiAqL1xyXG5mdW5jdGlvbiBzY2FsZVN1cGVyc2FtcGxlZChzdXBlcnNhbXBsZWQsIHNjYWxlKSB7XHJcbiAgaWYgKHN1cGVyc2FtcGxlZCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgIHJldHVybiBzdXBlcnNhbXBsZWQudGhlbihzdXBlcnNhbXBsZWQgPT4gc2NhbGVTdXBlcnNhbXBsZWQoc3VwZXJzYW1wbGVkLCBzY2FsZSkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCdzY2FsZScgaW4gc3VwZXJzYW1wbGVkICYmIHR5cGVvZiBzdXBlcnNhbXBsZWQuc2NhbGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiBzdXBlcnNhbXBsZWQuc2NhbGUoc2NhbGUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLndhcm4oYE1ldGhvZCAnc2NhbGUoKScgbm90IGZvdW5kIGluIGltYWdlIG9iamVjdC4gTm8gc2NhbGluZyBwZXJmb3JtZWQuYCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3VwZXJzYW1wbGVkO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZXMgdmFsaWQgb3B0aW9ucyBmb3IgZGlzdG9ydGlvblxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0Rpc3RvcnRpb25PcHRpb25zfSBvcHRpb25zXHJcbiAqIEByZXR1cm5zIHtEaXN0b3J0aW9uT3B0aW9uc31cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VPcHRpb25zKG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xyXG5cclxuICBpZiAob3B0aW9ucy5zdXBlcnNhbXBsZSkge1xyXG4gICAgb3B0aW9ucy5vdXRwdXRTY2FsaW5nID0gb3B0aW9ucy5zdXBlcnNhbXBsZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvcHRpb25zO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZXMgaW1hZ2UgZGlzdG9ydGVyXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7SW1hZ2VJbnRlcmZhY2V9IGltYWdlXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbkludGVyZmFjZX0gZGlzdG9ydGlvblxyXG4gKiBAcGFyYW0ge1Jlc2FtcGxlckludGVyZmFjZX0gcmVzYW1wbGVyXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbk9wdGlvbnN9IG9wdGlvbnNcclxuICogQHJldHVybnMge1JldmVyc2VQaXhlbE1hcHBpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlRGlzdG9ydGVyKGltYWdlLCBkaXN0b3J0aW9uLCByZXNhbXBsZXIsIG9wdGlvbnMpIHtcclxuICBjb25zdCBkaXN0ID0gbmV3IGRpc3RvcnRlci5SZXZlcnNlUGl4ZWxNYXBwaW5nKGltYWdlLCBkaXN0b3J0aW9uLCByZXNhbXBsZXIpO1xyXG4gIGRpc3QuYXN5bmMgPSAhIW9wdGlvbnMuYXN5bmM7XHJcbiAgZGlzdC5iZXN0Rml0ID0gISFvcHRpb25zLmJlc3RGaXQ7XHJcblxyXG4gIGlmIChvcHRpb25zLnZpZXdwb3J0KSB7XHJcbiAgICBkaXN0LnZpZXdwb3J0ID0gb3B0aW9ucy52aWV3cG9ydDtcclxuICB9XHJcblxyXG4gIGlmIChvcHRpb25zLm91dHB1dFNjYWxpbmcpIHtcclxuICAgIGRpc3Qub3V0cHV0U2NhbGluZyA9IG9wdGlvbnMub3V0cHV0U2NhbGluZztcclxuXHJcbiAgICBpZiAob3B0aW9ucy5zdXBlcnNhbXBsZSkge1xyXG4gICAgICBkaXN0LnN1cGVyc2FtcGxlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBkaXN0O1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZXMgcmVzYW1wbGVyXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7SW1hZ2VJbnRlcmZhY2V9IGltYWdlXHJcbiAqIEBwYXJhbSB7RGlzdG9ydGlvbkludGVyZmFjZX0gZGlzdG9ydGlvblxyXG4gKiBAcGFyYW0ge0Rpc3RvcnRpb25PcHRpb25zfSBvcHRpb25zXHJcbiAqIEByZXR1cm5zIHtSZXNhbXBsZXJJbnRlcmZhY2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlUmVzYW1wbGVyKGltYWdlLCBkaXN0b3J0aW9uLCBvcHRpb25zKSB7XHJcbiAgbGV0IHJzbTtcclxuXHJcbiAgaWYgKG9wdGlvbnMucmVzYW1wbGVyKSB7XHJcbiAgICByc20gPSBvcHRpb25zLnJlc2FtcGxlcjtcclxuICB9IGVsc2UgaWYgKG9wdGlvbnMucmVzYW1wbGUpIHtcclxuICAgIHJzbSA9IG5ldyByZXNhbXBsZXIuRVdBKG1ha2VGaWx0ZXIob3B0aW9ucykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByc20gPSBuZXcgcmVzYW1wbGVyLlBvaW50KCk7XHJcbiAgfVxyXG5cclxuICBpZiAob3B0aW9ucy5tYXR0ZUNvbG9yKSB7XHJcbiAgICByc20ubWF0dGVDb2xvciA9IG9wdGlvbnMubWF0dGVDb2xvci5zbGljZSgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJzbTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2VzIGZpbHRlclxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0Rpc3RvcnRpb25PcHRpb25zfSBvcHRpb25zXHJcbiAqIEByZXR1cm5zIHtGaWx0ZXJJbnRlcmZhY2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlRmlsdGVyKG9wdGlvbnMpIHtcclxuICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvcHRpb25zLmZpbHRlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzdG9ydDsiLCIvKipcclxuICogRGlzdG9ydGVyIG5hbWVzcGFjZVxyXG4gKlxyXG4gKiBAbmFtZXNwYWNlIGxlbnMuZGlzdG9ydGVyXHJcbiAqL1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIFJldmVyc2VQaXhlbE1hcHBpbmd9IGZyb20gJy4vcmV2ZXJzZS1waXhlbC1tYXBwaW5nJzsiLCIvKipcclxuICogUmV2ZXJzZSBwaXhlbCBtYXBwaW5nLlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy5kaXN0b3J0ZXJcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cuaW1hZ2VtYWdpY2sub3JnL1VzYWdlL2Rpc3RvcnRzLyNtYXBwaW5nIFJldmVyc2UgcGl4ZWwgbWFwcGluZyBkZXRhaWxzIGF0IEltYWdlTWFnaWNrIGRvY3N9XHJcbiAqIEB0dXRvcmlhbCAwMi4wMi5yZXZlcnNlLXBpeGVsLW1hcHBpbmdcclxuICovXHJcbmNsYXNzIFJldmVyc2VQaXhlbE1hcHBpbmcge1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SW1hZ2VJbnRlcmZhY2V9IGltYWdlIEltYWdlIHRvIGJlIGRpc3RvcnRlZC5cclxuICAgKiBAcGFyYW0ge0Rpc3RvcnRpb25JbnRlcmZhY2V9IGRpc3RvcnRpb24gRGlzdG9ydGlvbiB0byBiZSBwZXJmb3JtZWQuXHJcbiAgICogQHBhcmFtIHtSZXNhbXBsZXJJbnRlcmZhY2V9IHJlc2FtcGxlciBDb2xvciByZXNhbXBsZXIuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoaW1hZ2UsIGRpc3RvcnRpb24sIHJlc2FtcGxlcikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbWFnZSBiZWluZyBkaXN0b3J0ZWQuXHJcbiAgICAgKiBAdHlwZSB7SW1hZ2VJbnRlcmZhY2V9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3RvcnRpb24uXHJcbiAgICAgKiBAdHlwZSB7RGlzdG9ydGlvbkludGVyZmFjZX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5tYXBwZXIgPSBkaXN0b3J0aW9uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzYW1wbGVyLlxyXG4gICAgICogQHR5cGUge1Jlc2FtcGxlckludGVyZmFjZX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXNhbXBsZXIgPSByZXNhbXBsZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdHJ5IHRvIGNhbGN1bGF0ZSBiZXN0IGZpdCB2aWV3cG9ydC5cclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB0aGlzLmJlc3RGaXQgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJyaWRlIG91dHB1dCB2aWV3cG9ydC5cclxuICAgICAqIEB0eXBlIHtsZW5zLlZpZXdwb3J0fG51bGx9XHJcbiAgICAgKi9cclxuICAgIHRoaXMudmlld3BvcnQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUnVuIGRpc3RvcnRpb24gYXN5bmMuXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5hc3luYyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgaW1hZ2Ugc2NhbGluZy5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMub3V0cHV0U2NhbGluZyA9IDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXN0b3J0cyBpbWFnZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEltYWdlSW50ZXJmYWNlPnxJbWFnZUludGVyZmFjZX0gTmV3IGluc3RhbmNlIG9mIEltYWdlSW50ZXJmYWNlIHdpdGggZGlzdG9ydGVkIGltYWdlIG9yIFByb21pc2VcclxuICAgKiB0aGF0IHJlc29sdmVzIGRpc3RvcnRlZCBJbWFnZUludGVyZmFjZSBpbnN0YW5jZS5cclxuICAgKi9cclxuICBkaXN0b3J0KCkge1xyXG4gICAgdGhpcy5yZXNhbXBsZXIuc2V0SW1hZ2UodGhpcy5pbWFnZSk7XHJcbiAgICB0aGlzLnJlc2FtcGxlci5zZXRNYXBwZXIodGhpcy5tYXBwZXIpO1xyXG5cclxuICAgIGNvbnN0IHZpZXdwb3J0ID0gdGhpcy5wcmVwYXJlVmlld3BvcnQoKTtcclxuICAgIGNvbnN0IHgxID0gTWF0aC5mbG9vcih2aWV3cG9ydC54MSk7XHJcbiAgICBjb25zdCB5MSA9IE1hdGguZmxvb3Iodmlld3BvcnQueTEpO1xyXG4gICAgY29uc3QgeDIgPSBNYXRoLmZsb29yKHZpZXdwb3J0LngyKTtcclxuICAgIGNvbnN0IHkyID0gTWF0aC5mbG9vcih2aWV3cG9ydC55Mik7XHJcblxyXG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5pbWFnZS5nZXRCbGFuayh2aWV3cG9ydCk7XHJcblxyXG4gICAgdGhpcy5yZXNhbXBsZXIuc2NhbGluZyA9IDEgLyB0aGlzLm91dHB1dFNjYWxpbmc7XHJcblxyXG4gICAgaWYgKGNhbnZhcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgcmV0dXJuIGNhbnZhcy50aGVuKGNhbnZhcyA9PiB0aGlzLnBlcmZvcm1EaXN0b3J0aW9uQXN5bmMoY2FudmFzLCB4MSwgeTEsIHgyLCB5MikpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmFzeW5jKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBlcmZvcm1EaXN0b3J0aW9uQXN5bmMoY2FudmFzLCB4MSwgeTEsIHgyLCB5Mik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucGVyZm9ybURpc3RvcnRpb24oY2FudmFzLCB4MSwgeTEsIHgyLCB5Mik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gY2FudmFzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHgxXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkxXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHgyXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkyXHJcbiAgICogQHJldHVybnMge0ltYWdlSW50ZXJmYWNlfVxyXG4gICAqL1xyXG4gIHBlcmZvcm1EaXN0b3J0aW9uKGNhbnZhcywgeDEsIHkxLCB4MiwgeTIpIHtcclxuICAgIGZvciAobGV0IHkgPSB5MTsgeSA8PSB5MjsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSB4MTsgeCA8PSB4MjsgeCsrKSB7XHJcbiAgICAgICAgY2FudmFzLnNldFBpeGVsQ29sb3IoeCwgeSwgdGhpcy5yZXNhbXBsZXIuZ2V0UmVzYW1wbGVkQ29sb3IoeCArIDAuNSwgeSArIDAuNSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuICB9XHJcblxyXG4gIHBlcmZvcm1EaXN0b3J0aW9uQXN5bmMoLi4uYXJncykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHRoaXMucGVyZm9ybURpc3RvcnRpb24oLi4uYXJncyksIDApKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICogQHJldHVybnMge2xlbnMuVmlld3BvcnR9XHJcbiAgICovXHJcbiAgcHJlcGFyZVZpZXdwb3J0KCkge1xyXG4gICAgbGV0IHZpZXdwb3J0O1xyXG5cclxuICAgIGlmICh0aGlzLnZpZXdwb3J0KSB7XHJcbiAgICAgIHZpZXdwb3J0ID0gdGhpcy52aWV3cG9ydC5jbG9uZSgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmJlc3RGaXQgJiYgdGhpcy5tYXBwZXIuaGFzQmVzdEZpdFZpZXdwb3J0KSB7XHJcbiAgICAgIHZpZXdwb3J0ID0gdGhpcy5tYXBwZXIuZ2V0QmVzdEZpdFZpZXdwb3J0KHRoaXMuaW1hZ2Uudmlld3BvcnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmlld3BvcnQgPSB0aGlzLmltYWdlLnZpZXdwb3J0LmNsb25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmlld3BvcnQuc2NhbGUodGhpcy5vdXRwdXRTY2FsaW5nKTtcclxuXHJcbiAgICByZXR1cm4gdmlld3BvcnQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZlcnNlUGl4ZWxNYXBwaW5nOyIsImltcG9ydCBMZWFzdFNxdWFyZXMgZnJvbSBcIi4uL3V0aWwvZ2F1c3Mtam9yZGFuLWVsaW1pbmF0aW9uL2xlYXN0LXNxdWFyZXNcIjtcclxuaW1wb3J0IGNyZWF0ZXNCZXN0Rml0Vmlld3BvcnRGcm9tQXBleGVzIGZyb20gJy4uL21peGlucy9jcmVhdGVzLWJlc3RGaXQtdmlld3BvcnQtZnJvbS1hcGV4ZXMnO1xyXG5pbXBvcnQgSW52YWxpZEFyZ3VtZW50c0xlbmd0aCBmcm9tICcuLi9leGNlcHRpb24vaW52YWxpZC1hcmd1bWVudHMtbGVuZ3RoJztcclxuaW1wb3J0IHtwZXJjZXB0aWJsZVJlY2lwcm9jYWx9IGZyb20gXCIuLi91dGlsL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBQcm9qZWN0IGNvb3JkaW5hdGVzIHVzaW5nIHByb2plY3Rpb24gbWF0cml4LlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0geFxyXG4gKiBAcGFyYW0ge251bWJlcn0geVxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBtYXRyaXggQWZmaW5lIG1hdHJpeC5cclxuICogQHJldHVybnMge1BvaW50fSBNYXBwZWQgY29vcmRzIHBhaXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBtYXAoeCwgeSwgbWF0cml4KSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIG1hdHJpeFswXSAqIHggKyBtYXRyaXhbMV0gKiB5ICsgbWF0cml4WzJdLFxyXG4gICAgbWF0cml4WzNdICogeCArIG1hdHJpeFs0XSAqIHkgKyBtYXRyaXhbNV1cclxuICBdO1xyXG59XHJcblxyXG4vKipcclxuICogQWZmaW5lIGRpc3RvcnRpb24uXHJcbiAqXHJcbiAqIEBpbXBsZW1lbnRzIHtEaXN0b3J0aW9uSW50ZXJmYWNlfVxyXG4gKiBAbWVtYmVyT2YgbGVucy5kaXN0b3J0aW9uXHJcbiAqIEBtaXhlcyBsZW5zLm1peGlucy5jcmVhdGVzQmVzdEZpdFZpZXdwb3J0RnJvbUFwZXhlc1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy5pbWFnZW1hZ2ljay5vcmcvVXNhZ2UvZGlzdG9ydHMvI2FmZmluZSBBZmZpbmUgZGlzdG9ydGlvbiBkZXRhaWxzIGF0IEltYWdlTWFnaWNrIGRvY3N9XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAyNDQzIEFmZmluZSBkaXN0b3J0aW9uIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICogQHR1dG9yaWFsIDAzLjAxLmFmZmluZVxyXG4gKi9cclxuY2xhc3MgQWZmaW5lIHtcclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IG1hdHJpeCBBZmZpbmUgbWF0cml4LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xyXG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XHJcbiAgICB0aGlzLmZvcndhcmRNYXRyaXggPSB0aGlzLmNvbnN0cnVjdG9yLmludmVydEFmZmluZU1hdHJpeChtYXRyaXgpO1xyXG4gICAgdGhpcy5oYXNQYXJ0aWFsRGVyaXZhdGl2ZXMgPSB0cnVlO1xyXG4gICAgdGhpcy5oYXNDb25zdGFudFBhcnRpYWxEZXJpdmF0aXZlcyA9IHRydWU7XHJcbiAgICB0aGlzLmhhc0Jlc3RGaXRWaWV3cG9ydCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFmZmluZSBkaXN0b3J0aW9uIHVzaW5nIGNvbnRyb2wgcG9pbnRzIGFycmF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gY29udHJvbFBvaW50cyBNYXBwaW5ncyBvZiBjb250cm9sIHBvaW50cyBbdTAsIHYwLCB4MCwgeTAsIC4uLiAsIHVuLCB2biwgeG4sIHluXSB3aGVyZVxyXG4gICAqICh1KiwgdiopIGFyZSBzb3VyY2UgKHgsIHkpIHBvaW50IGFuZCAoeCosIHkqKSBhcmUgZGVzdGluYXRpb24gKHgsIHkpIHBvaW50XHJcbiAgICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5BZmZpbmV9XHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDA1MDEgR2VuZXJhdGluZyBhZmZpbmUgZGlzdG9ydGlvbiBtYXRyaXggZnJvbSBjb250cm9sIHBvaW50cyBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAgICovXHJcbiAgc3RhdGljIGZyb21Db250cm9sUG9pbnRzKGNvbnRyb2xQb2ludHMpIHtcclxuICAgIGlmIChjb250cm9sUG9pbnRzLmxlbmd0aCAlIDQgIT09IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudHNMZW5ndGgoYE51bWJlciBvZiBhcmd1bWVudHMgbXVzdCBiZSBtdWx0aXBsZSBvZiA0IGFuZCBhdCBsZWFzdCA0IGFyZ3VtZW50cyAoMSBjb250cm9sIHBvaW50KSBleHBlY3RlZC4gJHtjb250cm9sUG9pbnRzLmxlbmd0aH0gYXJndW1lbnRzIGdpdmVuLmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBoYW5kbGUgc3BlY2lhbCBjYXNlcyBvZiBub3QgZW5vdWdoIGFyZ3VtZW50c1xyXG4gICAgICovXHJcbiAgICBpZiAoY29udHJvbFBvaW50cy5sZW5ndGggPT09IDQpIHtcclxuICAgICAgLy8gT25seSAxIENQIFNldCBHaXZlblxyXG4gICAgICByZXR1cm4gbmV3IEFmZmluZShbXHJcbiAgICAgICAgMSwgMCwgY29udHJvbFBvaW50c1swXSAtIGNvbnRyb2xQb2ludHNbMl0sXHJcbiAgICAgICAgMCwgMSwgY29udHJvbFBvaW50c1sxXSAtIGNvbnRyb2xQb2ludHNbM11cclxuICAgICAgXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAyIG9yIG1vcmUgcG9pbnRzICh1c2FsbHkgMykgZ2l2ZW4uXHJcbiAgICAgIC8vIFNvbHZlIGEgbGVhc3Qgc3F1YXJlcyBzaW11bHRhbmVvdXMgZXF1YXRpb24gZm9yIGNvZWZmaWNpZW50cy5cclxuICAgICAgY29uc3QgbGVhc3RTcXVhcmVzID0gbmV3IExlYXN0U3F1YXJlcygzLCAyKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbFBvaW50cy5sZW5ndGg7IGkgKz0gNCkge1xyXG4gICAgICAgIGxldCBbdSwgdiwgeCwgeV0gPSBjb250cm9sUG9pbnRzLnNsaWNlKGksIGkgKyA0KTtcclxuXHJcbiAgICAgICAgbGVhc3RTcXVhcmVzLmFkZFRlcm1zKFtcclxuICAgICAgICAgIHgsIHksIDFcclxuICAgICAgICBdLCBbdSwgdl0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29udHJvbFBvaW50cy5sZW5ndGggPT09IDgpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIE9ubHkgdHdvIHBhaXJzIHdlcmUgZ2l2ZW4sIGJ1dCB3ZSBuZWVkIDMgdG8gc29sdmUgdGhlIGFmZmluZS5cclxuICAgICAgICAgKiBGYWtlIGV4dHJhIGNvb3JkaW5hdGVzIGJ5IHJvdGF0aW5nIHAxIGFyb3VuZCBwMCBieSA5MCBkZWdyZWVzLlxyXG4gICAgICAgICAqIHgyID0geDAgLSAoeTEteTApICAgeTIgPSB5MCArICh4MS14MClcclxuICAgICAgICAgKi9cclxuICAgICAgICBsZWFzdFNxdWFyZXMuYWRkVGVybXMoXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgIGNvbnRyb2xQb2ludHNbMl0gLSAoY29udHJvbFBvaW50c1s3XSAtIGNvbnRyb2xQb2ludHNbM10pLFxyXG4gICAgICAgICAgICBjb250cm9sUG9pbnRzWzNdICsgKGNvbnRyb2xQb2ludHNbNl0gLSBjb250cm9sUG9pbnRzWzJdKSxcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAgY29udHJvbFBvaW50c1swXSAtIGNvbnRyb2xQb2ludHNbNV0gKyBjb250cm9sUG9pbnRzWzFdLFxyXG4gICAgICAgICAgICBjb250cm9sUG9pbnRzWzFdICsgY29udHJvbFBvaW50c1s0XSAtIGNvbnRyb2xQb2ludHNbMF1cclxuICAgICAgICAgIF1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB2ZWN0b3JzID0gbGVhc3RTcXVhcmVzLnNvbHZlKCkuZ2V0VmVjdG9ycygpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBBZmZpbmUodmVjdG9yc1swXS5jb25jYXQodmVjdG9yc1sxXSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhZmZpbmUgZGlzdG9ydGlvbiB1c2luZyBhZmZpbmUgbWF0cml4LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gbWF0cml4IEFmZmluZSBwcm9qZWN0aW9uIGNvZWZmaWNpZW50czogW3N4LCByeCwgdHgsIHJ5LCBzeSwgdHldXHJcbiAgICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5BZmZpbmV9XHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDA2MDkgR2VuZXJhdGluZyBpbnZlcnRlZCBhZmZpbmUgZGlzdG9ydGlvbiBtYXRyaXggZnJvbSBmb3J3YXJkIGFmZmluZSBtYXRyaXggYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBmcm9tRm9yd2FyZE1hdHJpeChtYXRyaXgpIHtcclxuICAgIC8vIFRPRE86IHRyYXAgdGVzdCBmb3Igc3gqc3ktcngqcnkgPT0gMCAoZGV0ZXJtaW5hbnQgPSAwLCBubyBpbnZlcnNlKVxyXG5cclxuICAgIHJldHVybiBuZXcgQWZmaW5lKHRoaXMuaW52ZXJ0QWZmaW5lTWF0cml4KG1hdHJpeCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBpbnZlcnRlZCBhZmZpbmUgbWF0cml4IGZyb20gYWZmaW5lIG1hdHJpeC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IG1hdHJpeCBBZmZpbmUgbWF0cml4LlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJbXX0gSW52ZXJ0ZWQgYWZmaW5lIG1hdHJpeC5cclxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9kaXN0b3J0XzhjX3NvdXJjZS5odG1sI2wwMDA5NSBJbnZlcnRpbmcgYWZmaW5lIG1hdHJpeCBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAgICovXHJcbiAgc3RhdGljIGludmVydEFmZmluZU1hdHJpeChtYXRyaXgpIHtcclxuICAgIC8qIEZyb20gXCJEaWdpdGFsIEltYWdlIFdhcnBpbmdcIiBieSBHZW9yZ2UgV29sYmVyZywgcGFnZSA1MCAqL1xyXG5cclxuICAgIGNvbnN0IGRldGVybWluYW50ID0gcGVyY2VwdGlibGVSZWNpcHJvY2FsKG1hdHJpeFswXSAqIG1hdHJpeFs0XSAtIG1hdHJpeFsxXSAqIG1hdHJpeFszXSk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgZGV0ZXJtaW5hbnQgKiBtYXRyaXhbNF0sXHJcbiAgICAgIGRldGVybWluYW50ICogKC1tYXRyaXhbMV0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqIChtYXRyaXhbMV0gKiBtYXRyaXhbNV0gLSBtYXRyaXhbMl0gKiBtYXRyaXhbNF0pLFxyXG4gICAgICBkZXRlcm1pbmFudCAqICgtbWF0cml4WzNdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiBtYXRyaXhbMF0sXHJcbiAgICAgIGRldGVybWluYW50ICogKG1hdHJpeFsyXSAqIG1hdHJpeFszXSAtIG1hdHJpeFswXSAqIG1hdHJpeFs1XSlcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHJldmVyc2VNYXAoeCwgeSkge1xyXG4gICAgcmV0dXJuIG1hcCh4LCB5LCB0aGlzLm1hdHJpeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldFZhbGlkaXR5KHgsIHkpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRQYXJ0aWFsRGVyaXZhdGl2ZXMoeCwgeSkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgdGhpcy5tYXRyaXhbMF0sXHJcbiAgICAgIHRoaXMubWF0cml4WzFdLFxyXG4gICAgICB0aGlzLm1hdHJpeFszXSxcclxuICAgICAgdGhpcy5tYXRyaXhbNF1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXBzIHNvdXJjZSBjb29yZHMgaW50byBkZXN0aW5hdGlvbiBjb29yZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geCBYLWNvb3JkaW5hdGUgb2Ygc291cmNlIGltYWdlIHBvaW50LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktY29vcmRpbmF0ZSBvZiBzb3VyY2UgaW1hZ2UgcG9pbnQuXHJcbiAgICogQHJldHVybnMge1BvaW50fSBGb3J3YXJkIG1hcHBlZCBkZXN0aW5hdGlvbiBpbWFnZSBjb29yZHMuXHJcbiAgICovXHJcbiAgZm9yd2FyZE1hcCh4LCB5KSB7XHJcbiAgICByZXR1cm4gbWFwKHgsIHksIHRoaXMuZm9yd2FyZE1hdHJpeCk7XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKEFmZmluZS5wcm90b3R5cGUsIGNyZWF0ZXNCZXN0Rml0Vmlld3BvcnRGcm9tQXBleGVzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFmZmluZTsiLCJpbXBvcnQge0VQU0lMT04sIE1fUEkyLCBNXzJQSX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge0ludmFsaWRBcmd1bWVudH0gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xyXG5pbXBvcnQge2RlZzJyYWR9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuLi92aWV3cG9ydCc7XHJcblxyXG4vKipcclxuICogQHN1bW1hcnkgQXJjIGRpc3RvcnRpb24uXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvbiBOb3RlIHRoZSBjb2VmZmljaWVudHMgdXNlIGEgY2VudGVyIGFuZ2xlLCBzbyBhc3ltcHRvdGljIGpvaW4gaXNcclxuICogZnVydGhlc3QgZnJvbSBib3RoIHNpZGVzIG9mIHRoZSBzb3VyY2UgaW1hZ2UuIFRoaXMgYWxzbyBtZWFucyB0aGF0XHJcbiAqIGZvciBhcmMgYW5nbGVzIGdyZWF0ZXIgdGhhbiAzNjAgdGhlIHNpZGVzIG9mIHRoZSBpbWFnZSB3aWxsIGJlXHJcbiAqIHRyaW1tZWQgZXF1YWxseS5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMuZGlzdG9ydGlvblxyXG4gKiBAaW1wbGVtZW50cyBEaXN0b3J0aW9uSW50ZXJmYWNlXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9kaXN0b3J0cy8jYXJjIEFyYyBkaXN0b3J0aW9uIGRldGFpbHN9IGF0IEltYWdlTWFnaWNrIGRvY3MuXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAyNTYxIEFyYyBkaXN0b3J0aW9ufSBhdCBJbWFnZU1hZ2lja1xyXG4gKiBzb3VyY2UuXHJcbiAqIEB0dXRvcmlhbCAwMy4wMy5hcmNcclxuICovXHJcbmNsYXNzIEFyYyB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2xlbnMuVmlld3BvcnR9IHZpZXdwb3J0XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGMwIEFuZ2xlIGZvciBjZW50ZXIgb2Ygc291cmNlIGltYWdlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjMSBBbmdsZSBzY2FsZSBmb3IgbWFwcGluZyB0byBzb3VyY2UgaW1hZ2UuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGMyIFJhZGl1cyBmb3IgdG9wIG9mIHNvdXJjZSBpbWFnZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gYzMgUmFkaXVzIHNjYWxlIGZvciBtYXBwaW5nIHNvdXJjZSBpbWFnZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gYzQgQ2VudGVyIGxpbmUgb2YgYXJjIHdpdGhpbiBzb3VyY2UgaW1hZ2UuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iodmlld3BvcnQsIGMwLCBjMSwgYzIsIGMzLCBjNCkge1xyXG4gICAgdGhpcy52aWV3cG9ydCA9IHZpZXdwb3J0O1xyXG4gICAgdGhpcy5jMCA9IGMwO1xyXG4gICAgdGhpcy5jMSA9IGMxO1xyXG4gICAgdGhpcy5jMiA9IGMyO1xyXG4gICAgdGhpcy5jMyA9IGMzO1xyXG4gICAgdGhpcy5jNCA9IGM0O1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBhbmdsZV90b193aWR0aCBhbmQgcmFkaXVzX3RvX2hlaWdodFxyXG4gICAgICogdG8gYXBwcm9wcmlhdGUgc2NhbGluZyBmYWN0b3JzLCB0byBhbGxvdyBmYXN0ZXIgcHJvY2Vzc2luZ1xyXG4gICAgICogaW4gdGhlIG1hcHBpbmcgZnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYW5nbGVUb1dpZHRoID0gTV8yUEkgKiB0aGlzLnZpZXdwb3J0LndpZHRoKCkgLyB0aGlzLmMxO1xyXG4gICAgdGhpcy5yYWRpdXNUb0hlaWdodCA9IHRoaXMudmlld3BvcnQuaGVpZ2h0KCkgLyB0aGlzLmMzO1xyXG5cclxuICAgIHRoaXMuaGFzUGFydGlhbERlcml2YXRpdmVzID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFzQ29uc3RhbnRQYXJ0aWFsRGVyaXZhdGl2ZXMgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFzQmVzdEZpdFZpZXdwb3J0ID0gdHJ1ZTtcclxuICAgIHRoaXMuZm9yY2VCZXN0Rml0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdW1tYXJ5IENyZWF0ZXMgYXJjIGRpc3RvcnRpb24gY2xhc3MgZnJvbSBhcmd1bWVudHMuXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb24gQXJndW1lbnRzOiAgW2FuZ2xlLCByb3RhdGlvbiwgb3V0ZXJfcmFkaXVzLCBpbm5lcl9yYWRpdXNdXHJcbiAgICogQWxsIGJ1dCBmaXJzdCBhcmd1bWVudCBhcmUgb3B0aW9uYWwuXHJcbiAgICpcclxuICAgKiBCeSBkZWZhdWx0LCBpZiB0aGUgcmFkaWkgYXJndW1lbnRzIGFyZSBub3IgcHJvdmlkZWQgdGhlIGltYWdlIHJhZGl1c1xyXG4gICAqIGlzIGNhbGN1bGF0ZWQgc28gdGhlIGhvcml6b250YWwgY2VudGVyLWxpbmUgaXMgZml0cyB0aGUgZ2l2ZW4gYXJjXHJcbiAgICogd2l0aG91dCBzY2FsaW5nLlxyXG4gICAqXHJcbiAgICogVGhlIG91dHB1dCBpbWFnZSBzaXplIGlzIEFMV0FZUyBhZGp1c3RlZCB0byBjb250YWluIHRoZSB3aG9sZSBpbWFnZSxcclxuICAgKiBhbmQgYW4gb2Zmc2V0IGlzIGdpdmVuIHRvIHBvc2l0aW9uIGltYWdlIHJlbGF0aXZlIHRvIHRoZSAwLDAgcG9pbnQgb2ZcclxuICAgKiB0aGUgb3JpZ2luLCBhbGxvd2luZyB1c2VycyB0byB1c2UgcmVsYXRpdmUgcG9zaXRpb25pbmcgb250byBsYXJnZXJcclxuICAgKiBiYWNrZ3JvdW5kLlxyXG4gICAqXHJcbiAgICogVGhlIGFyZ3VtZW50cyBhcmUgY29udmVydGVkIHRvIGRpc3RvcnRpb24gY29lZmZpY2llbnRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtsZW5zLlZpZXdwb3J0fSB2aWV3cG9ydFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IGFyZ3MgQXJndW1lbnRzOlxyXG4gICAqICogMDogKiphbmdsZSoqIC0gVGhlIGFuZ2xlIG92ZXIgd2hpY2ggdG8gYXJjIHRoZSBpbWFnZSBzaWRlLXRvLXNpZGUuXHJcbiAgICogKiAxOiAqKnJvdGF0aW9uKiogLSBBbmdsZSB0byByb3RhdGUgaW1hZ2UgZnJvbSB2ZXJ0aWNhbCBjZW50ZXIuXHJcbiAgICogKiAyOiAqKm91dGVyX3JhZGl1cyoqIC0gU2V0IHRvcCBlZGdlIG9mIHNvdXJjZSBpbWFnZSBhdCB0aGlzIHJhZGl1cy5cclxuICAgKiAqIDM6ICoqaW5uZXJfcmFkaXVzKiogLSBTZXQgYm90dG9tIGVkZ2UgdG8gdGhpcyByYWRpdXMgKHJhZGlhbCBzY2FsaW5nKS5cclxuICAgKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLkFyY31cclxuICAgKiBAdGhyb3dzIHtsZW5zLmV4Y2VwdGlvbi5JbnZhbGlkQXJndW1lbnR9IFRocm93biB3aGVuIGZpcnN0IChhbmdsZSkgb3IgdGhpcmQgKG91dGVyIHJhZGl1cykgYXJndW1lbnRzIGFyZSB0b28gc21hbGxcclxuICAgKlxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAxMDk1IEdlbmVyYXRpbmcgY29lZmZpY2llbnRzfSBmb3IgYXJjXHJcbiAgICogZGlzdG9ydGlvbiBhdCBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAgICovXHJcbiAgc3RhdGljIGZyb21Bcmd1bWVudHModmlld3BvcnQsIGFyZ3MpIHtcclxuICAgIGlmIChhcmdzLmxlbmd0aCA+PSAxICYmIGFyZ3NbMF0gPCBFUFNJTE9OKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnQoJ0FuZ2xlIHRvbyBzbWFsbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhcmdzLmxlbmd0aCA+PSAzICYmIGFyZ3NbMl0gPCBFUFNJTE9OKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnQoJ091dGVyIHJhZGl1cyB0b28gc21hbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYzAsIGMxLCBjMiwgYzMsIGM0O1xyXG5cclxuICAgIGMwID0gLU1fUEkyOyAvLyAtOTAsIHBsYWNlIGF0IHRvcCFcclxuXHJcbiAgICBpZiAoYXJncy5sZW5ndGggPj0gMSkge1xyXG4gICAgICBjMSA9IGRlZzJyYWQoYXJnc1swXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjMSA9IE1fUEkyOyAvLyB6ZXJvIGFyZ3VtZW50cyAtIGNlbnRlciBpcyBhdCB0b3BcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXJncy5sZW5ndGggPj0gMikge1xyXG4gICAgICBjMCArPSBkZWcycmFkKGFyZ3NbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGMwIC89IE1fMlBJOyAvLyBub3JtYWxpemUgcmFkaWFuc1xyXG4gICAgYzAgLT0gTWF0aC5yb3VuZChjMCk7XHJcbiAgICBjMCAqPSBNXzJQSTsgLy8gZGUtbm9ybWFsaXplIGJhY2sgdG8gcmFkaWFuc1xyXG5cclxuICAgIGMzID0gdmlld3BvcnQuaGVpZ2h0KCkgLSAxO1xyXG4gICAgYzIgPSB2aWV3cG9ydC53aWR0aCgpIC8gYzEgKyBjMyAvIDI7XHJcblxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID49IDMpIHtcclxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID49IDQpIHtcclxuICAgICAgICBjMyA9IGFyZ3NbMl0gLSBhcmdzWzNdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGMzICo9IGFyZ3NbMl0gLyBjMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYzIgPSBhcmdzWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIGM0ID0gKHZpZXdwb3J0LndpZHRoKCkgLSAxKSAvIDI7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBBcmModmlld3BvcnQsIGMwLCBjMSwgYzIsIGMzLCBjNCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHJldmVyc2VNYXAoeCwgeSkge1xyXG4gICAgbGV0IFt1LCB2XSA9IHRoaXMuZ2V0VVYoeCwgeSk7XHJcblxyXG4gICAgLy8gbm93IHNjYWxlIHRoZSBhbmdsZSBhbmQgcmFkaXVzIGZvciBzb3VyY2UgaW1hZ2UgbG9va3VwIHBvaW50XHJcbiAgICB1ID0gdSAqIHRoaXMuYW5nbGVUb1dpZHRoICsgdGhpcy5jNCArIHRoaXMudmlld3BvcnQueDEgKyAwLjU7XHJcbiAgICB2ID0gKHRoaXMuYzIgLSB2KSAqIHRoaXMucmFkaXVzVG9IZWlnaHQgKyB0aGlzLnZpZXdwb3J0LnkxO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2codSwgdiwgeCwgeSk7XHJcblxyXG4gICAgcmV0dXJuIFt1LCB2XTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0VmFsaWRpdHkoeCwgeSkge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldFBhcnRpYWxEZXJpdmF0aXZlcyh4LCB5KSB7XHJcbiAgICBsZXQgW3UsIHZdID0gdGhpcy5nZXRVVih4LCB5KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogQXJjIERpc3RvcnRpb24gUGFydGlhbCBTY2FsaW5nIFZlY3RvcnNcclxuICAgICAqIEFyZSBkZXJpdmVkIGJ5IG1hcHBpbmcgdGhlIHBlcnBlbmRpY3VsYXIgdW5pdCB2ZWN0b3JzXHJcbiAgICAgKiBkUiAgYW5kICBkQSpSKjJQSSAgcmF0aGVyIHRoYW4gdHJ5aW5nIHRvIG1hcCBkeCBhbmQgZHlcclxuICAgICAqIFRoZSByZXN1bHRzIGlzIGEgdmVyeSBzaW1wbGUgb3J0aG9nb25hbCBhbGlnbmVkIGVsbGlwc2UuXHJcbiAgICAgKi9cclxuICAgIGlmICh2ID4gRVBTSUxPTikge1xyXG4gICAgICByZXR1cm4gW3RoaXMuYW5nbGVUb1dpZHRoIC8gKE1fMlBJICogdiksIDAsIDAsIHRoaXMucmFkaXVzVG9IZWlnaHRdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFt0aGlzLnZpZXdwb3J0LndpZHRoKCkgKiAyLCAwLCAwLCB0aGlzLnJhZGl1c1RvSGVpZ2h0XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgY2FsY3VsYXRlZCBiZXN0IGZpdCB2aWV3cG9ydCBmb3IgaW1hZ2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2xlbnMuVmlld3BvcnR9IHZpZXdwb3J0XHJcbiAgICogQHJldHVybnMge2xlbnMuVmlld3BvcnR9XHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDE4MzQgR2VuZXJhdGluZyBiZXN0IGZpdCB2aWV3cG9ydH1cclxuICAgKiBmb3IgYXJjIGRpc3RvcnRpb24gYXQgSW1hZ2VNYWdpY2sgc291cmNlLlxyXG4gICAqL1xyXG4gIGdldEJlc3RGaXRWaWV3cG9ydCh2aWV3cG9ydCkge1xyXG4gICAgLy8gRm9yd2FyZCBNYXAgQ29ybmVyc1xyXG4gICAgbGV0IGEgPSB0aGlzLmMwIC0gdGhpcy5jMSAvIDIsXHJcbiAgICAgIGNhID0gTWF0aC5jb3MoYSksXHJcbiAgICAgIHNhID0gTWF0aC5zaW4oYSksXHJcbiAgICAgIHggPSB0aGlzLmMyICogY2EsXHJcbiAgICAgIHkgPSB0aGlzLmMyICogc2EsXHJcbiAgICAgIHZwID0gbmV3IFZpZXdwb3J0KHgsIHksIHgsIHkpO1xyXG5cclxuICAgIHggPSAodGhpcy5jMiAtIHRoaXMuYzMpICogY2E7XHJcbiAgICB5ID0gKHRoaXMuYzIgLSB0aGlzLmMzKSAqIHNhO1xyXG4gICAgdnAuZXhwYW5kKHgsIHkpO1xyXG5cclxuICAgIGEgPSB0aGlzLmMwICsgdGhpcy5jMSAvIDI7XHJcbiAgICBjYSA9IE1hdGguY29zKGEpO1xyXG4gICAgc2EgPSBNYXRoLnNpbihhKTtcclxuICAgIHggPSB0aGlzLmMyICogY2E7XHJcbiAgICB5ID0gdGhpcy5jMiAqIHNhO1xyXG4gICAgdnAuZXhwYW5kKHgsIHkpO1xyXG5cclxuICAgIHggPSAodGhpcy5jMiAtIHRoaXMuYzMpICogY2E7XHJcbiAgICB5ID0gKHRoaXMuYzIgLSB0aGlzLmMzKSAqIHNhO1xyXG4gICAgdnAuZXhwYW5kKHgsIHkpO1xyXG5cclxuICAgIC8vIE9ydGhvZ29uYWwgcG9pbnRzIGFsb25nIHRvcCBvZiBhcmNcclxuICAgIGZvciAoXHJcbiAgICAgIGEgPSBNYXRoLmNlaWwoKHRoaXMuYzAgLSB0aGlzLmMxIC8gMikgLyBNX1BJMikgKiBNX1BJMjtcclxuICAgICAgYSA8IHRoaXMuYzAgKyB0aGlzLmMxIC8gMjtcclxuICAgICAgYSArPSBNX1BJMlxyXG4gICAgKSB7XHJcbiAgICAgIGNhID0gTWF0aC5jb3MoYSk7XHJcbiAgICAgIHNhID0gTWF0aC5zaW4oYSk7XHJcbiAgICAgIHggPSB0aGlzLmMyICogY2E7XHJcbiAgICAgIHkgPSB0aGlzLmMyICogc2E7XHJcbiAgICAgIHZwLmV4cGFuZCh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICB2cC5maXhCb3VuZHMoKTtcclxuXHJcbiAgICByZXR1cm4gdnA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICAgKiBAcmV0dXJucyB7UG9pbnR9XHJcbiAgICovXHJcbiAgZ2V0VVYoeCwgeSkge1xyXG4gICAgbGV0IHUsIHY7XHJcblxyXG4gICAgLy8gd2hhdCBpcyB0aGUgYW5nbGUgYW5kIHJhZGl1cyBpbiB0aGUgZGVzdGluYXRpb24gaW1hZ2VcclxuICAgIHUgPSAoTWF0aC5hdGFuMih5LCB4KSAtIHRoaXMuYzApIC8gTV8yUEk7XHJcbiAgICB1IC09IE1hdGgucm91bmQodSk7XHJcbiAgICB2ID0gTWF0aC5oeXBvdCh4LCB5KTtcclxuXHJcbiAgICByZXR1cm4gW3UsIHZdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJjOyIsIi8qKlxyXG4gKiBEaXN0b3J0aW9uIG5hbWVzcGFjZVxyXG4gKlxyXG4gKiBAbmFtZXNwYWNlIGxlbnMuZGlzdG9ydGlvblxyXG4gKi9cclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBBZmZpbmV9IGZyb20gJy4vYWZmaW5lJztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQZXJzcGVjdGl2ZX0gZnJvbSAnLi9wZXJzcGVjdGl2ZSc7XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgQXJjfSBmcm9tICcuL2FyYyc7IiwiaW1wb3J0IExlYXN0U3F1YXJlcyBmcm9tICcuLi91dGlsL2dhdXNzLWpvcmRhbi1lbGltaW5hdGlvbi9sZWFzdC1zcXVhcmVzJztcclxuaW1wb3J0IGNyZWF0ZXNCZXN0Rml0Vmlld3BvcnRGcm9tQXBleGVzIGZyb20gJy4uL21peGlucy9jcmVhdGVzLWJlc3RGaXQtdmlld3BvcnQtZnJvbS1hcGV4ZXMnO1xyXG5pbXBvcnQgSW52YWxpZEFyZ3VtZW50c0xlbmd0aCBmcm9tICcuLi9leGNlcHRpb24vaW52YWxpZC1hcmd1bWVudHMtbGVuZ3RoJztcclxuaW1wb3J0IHtwZXJjZXB0aWJsZVJlY2lwcm9jYWx9IGZyb20gXCIuLi91dGlsL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBQcm9qZWN0IGNvb3JkaW5hdGVzIHVzaW5nIHByb2plY3Rpb24gbWF0cml4XHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG1hdHJpeCBQZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtQb2ludH0gTWFwcGVkIGNvb3JkcyBwYWlyLlxyXG4gKiBAdHV0b3JpYWwgMDMuMDIucGVyc3BlY3RpdmVcclxuICovXHJcbmZ1bmN0aW9uIG1hcCh4LCB5LCBtYXRyaXgpIHtcclxuICBsZXQgcCA9IG1hdHJpeFswXSAqIHggKyBtYXRyaXhbMV0gKiB5ICsgbWF0cml4WzJdLFxyXG4gICAgcSA9IG1hdHJpeFszXSAqIHggKyBtYXRyaXhbNF0gKiB5ICsgbWF0cml4WzVdLFxyXG4gICAgciA9IG1hdHJpeFs2XSAqIHggKyBtYXRyaXhbN10gKiB5ICsgMTtcclxuXHJcbiAgcmV0dXJuIFtwIC8gciwgcSAvIHJdO1xyXG59XHJcblxyXG4vKipcclxuICogQHN1bW1hcnkgUGVyc3BlY3RpdmUgRGlzdG9ydGlvbiAoYSByYXRpbyBvZiBhZmZpbmUgZGlzdG9ydGlvbnMpLlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb24gPHByZT5cclxuICpcclxuICogICAgIHAoeCx5KSAgICBjMCp4ICsgYzEqeSArIGMyXHJcbiAqIHUgPSAtLS0tLS0gPSAtLS0tLS0tLS0tLS0tLS0tLS1cclxuICogICAgIHIoeCx5KSAgICBjNip4ICsgYzcqeSArIDFcclxuICpcclxuICogICAgIHEoeCx5KSAgICBjMyp4ICsgYzQqeSArIGM1XHJcbiAqIHYgPSAtLS0tLS0gPSAtLS0tLS0tLS0tLS0tLS0tLS1cclxuICogICAgICByKHgseSkgICAgYzYqeCArIGM3KnkgKyAxXHJcbiAqXHJcbiAqIGRlbm9taW5hdG9yID0gU2lnbiBvZiAncicsIG9yIHRoZSBkZW5vbWluYXRvciBhZmZpbmUsIGZvciB0aGUgYWN0dWFsIGltYWdlLlxyXG4gKiBUaGlzIGRldGVybWluZXMgd2hhdCBwYXJ0IG9mIHRoZSBkaXN0b3J0ZWQgaW1hZ2UgaXMgJ2dyb3VuZCdcclxuICogc2lkZSBvZiB0aGUgaG9yaXpvbiwgdGhlIG90aGVyIHBhcnQgaXMgJ3NreScgb3IgaW52YWxpZC5cclxuICogVmFsaWQgdmFsdWVzIGFyZSAgKzEuMCAgb3IgIC0xLjAgIG9ubHkuXHJcbiAqIDwvcHJlPlxyXG4gKlxyXG4gKiBAaW1wbGVtZW50cyB7RGlzdG9ydGlvbkludGVyZmFjZX1cclxuICogQG1lbWJlck9mIGxlbnMuZGlzdG9ydGlvblxyXG4gKiBAbWl4ZXMgbGVucy5taXhpbnMuY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXNcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cuaW1hZ2VtYWdpY2sub3JnL1VzYWdlL2Rpc3RvcnRzLyNwZXJzcGVjdGl2ZSBQZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIGRldGFpbHMgYXQgSW1hZ2VNYWdpY2sgZG9jc31cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDI0NTAgUGVyc3BlY3RpdmUgZGlzdG9ydGlvbiBhdCBJbWFnZU1hZ2ljayBzb3VyY2V9XHJcbiAqL1xyXG5jbGFzcyBQZXJzcGVjdGl2ZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gcmV2ZXJzZU1hdHJpeCBQZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCBmb3IgcmV2ZXJzZSBwaXhlbCBtYXBwaW5nLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZW5vbWluYXRvciBEZW5vbWluYXRvciBmb3IgbWFwcGluZyB2YWxpZGl0eSBjYWxjdWxhdGlvbi5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihyZXZlcnNlTWF0cml4LCBkZW5vbWluYXRvcikge1xyXG4gICAgdGhpcy5tYXRyaXggPSByZXZlcnNlTWF0cml4O1xyXG4gICAgdGhpcy5kZW5vbWluYXRvciA9IGRlbm9taW5hdG9yO1xyXG4gICAgdGhpcy5mb3J3YXJkTWF0cml4ID0gdGhpcy5jb25zdHJ1Y3Rvci5pbnZlcnRQZXJzcGVjdGl2ZU1hdHJpeChyZXZlcnNlTWF0cml4KTtcclxuICAgIHRoaXMuaGFzUGFydGlhbERlcml2YXRpdmVzID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFzQ29uc3RhbnRQYXJ0aWFsRGVyaXZhdGl2ZXMgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFzQmVzdEZpdFZpZXdwb3J0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgcGVyc3BlY3RpdmUgZGlzdG9ydGlvbiB1c2luZyBjb250cm9sIHBvaW50cyBhcnJheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IGNvbnRyb2xQb2ludHMgTWFwcGluZ3Mgb2YgY29udHJvbCBwb2ludHMgW3UwLCB2MCwgeDAsIHkwLCAuLi4gLCB1biwgdm4sIHhuLCB5bl0gd2hlcmVcclxuICAgKiAodSosIHYqKSBhcmUgc291cmNlICh4LCB5KSBwb2ludCBhbmQgKHgqLCB5KikgYXJlIGRlc3RpbmF0aW9uICh4LCB5KSBwb2ludC5cclxuICAgKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLlBlcnNwZWN0aXZlfSBOZXcgaW5zdGFuY2UuXHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDA3NDUgR2VuZXJhdGluZyBwZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIG1hdHJpeCBmcm9tIGNvbnRyb2wgcG9pbnRzIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICAgKi9cclxuICBzdGF0aWMgZnJvbUNvbnRyb2xQb2ludHMoY29udHJvbFBvaW50cykge1xyXG4gICAgaWYgKGNvbnRyb2xQb2ludHMubGVuZ3RoIDwgMTYgfHwgY29udHJvbFBvaW50cy5sZW5ndGggJSA0ICE9PSAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRzTGVuZ3RoKGBOdW1iZXIgb2YgYXJndW1lbnRzIG11c3QgYmUgbXVsdGlwbGUgb2YgNCBhbmQgYXQgbGVhc3QgMTYgYXJndW1lbnRzICg0IGNvbnRyb2wgcG9pbnRzKSBleHBlY3RlZC4gJHtjb250cm9sUG9pbnRzLmxlbmd0aH0gYXJndW1lbnRzIGdpdmVuLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxlYXN0U3F1YXJlcyA9IG5ldyBMZWFzdFNxdWFyZXMoOCwgMSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9sUG9pbnRzLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgIGxldCBbdSwgdiwgeCwgeV0gPSBjb250cm9sUG9pbnRzLnNsaWNlKGksIGkgKyA0KTtcclxuXHJcbiAgICAgIGxlYXN0U3F1YXJlcy5hZGRUZXJtcyhbXHJcbiAgICAgICAgeCwgeSwgMSxcclxuICAgICAgICAwLCAwLCAwLFxyXG4gICAgICAgIC14ICogdSwgLXkgKiB1XHJcbiAgICAgIF0sIFt1XSlcclxuICAgICAgICAuYWRkVGVybXMoW1xyXG4gICAgICAgICAgMCwgMCwgMCxcclxuICAgICAgICAgIHgsIHksIDEsXHJcbiAgICAgICAgICAteCAqIHYsIC15ICogdlxyXG4gICAgICAgIF0sIFt2XSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWF0cml4ID0gbGVhc3RTcXVhcmVzLnNvbHZlKCkuZ2V0VmVjdG9ycygpWzBdO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBDYWxjdWxhdGUgZGVub21pbmF0b3IhIFRoZSBncm91bmQtc2t5IGRldGVybWluYXRpb24uXHJcbiAgICAgKiBXaGF0IGlzIHNpZ24gb2YgdGhlICdncm91bmQnIGluIHIoKSBkZW5vbWluYXRvciBhZmZpbmUgZnVuY3Rpb24/XHJcbiAgICAgKiBKdXN0IHVzZSBhbnkgdmFsaWQgaW1hZ2UgY29vcmRpbmF0ZSAoZmlyc3QgY29udHJvbCBwb2ludCkgaW5cclxuICAgICAqIGRlc3RpbmF0aW9uIGZvciBkZXRlcm1pbmF0aW9uIG9mIHdoYXQgcGFydCBvZiB2aWV3IGlzICdncm91bmQnLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBkZW5vbWluYXRvciA9IG1hdHJpeFs2XSAqIGNvbnRyb2xQb2ludHNbMl0gKyBtYXRyaXhbN10gKiBjb250cm9sUG9pbnRzWzNdICsgMSA8IDAgPyAtMSA6IDE7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQZXJzcGVjdGl2ZShtYXRyaXgsIGRlbm9taW5hdG9yKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgcGVyc3BlY3RpdmUgZGlzdG9ydGlvbiB1c2luZyBwZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSBtYXRyaXggUGVyc3BlY3RpdmUgbWF0cml4LlxyXG4gICAqIEByZXR1cm5zIHtsZW5zLmRpc3RvcnRpb24uUGVyc3BlY3RpdmV9XHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvZGlzdG9ydF84Y19zb3VyY2UuaHRtbCNsMDA4NTMgR2VuZXJhdGluZyBpbnZlcnRlZCBwZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIG1hdHJpeCBmcm9tIGZvcndhcmQgcGVyc3BlY3RpdmUgbWF0cml4IGF0IEltYWdlTWFnaWNrIGRvY3N9XHJcbiAgICovXHJcbiAgc3RhdGljIGZyb21Gb3J3YXJkTWF0cml4KG1hdHJpeCkge1xyXG4gICAgLy8gVE9ETzogdHJhcCB0ZXN0ICBjMCpjNC1jMypjMSA9PSAwICAoZGV0ZXJtaW5hbnQgPSAwLCBubyBpbnZlcnNlKVxyXG4gICAgY29uc3QgaW52ZXJzZSA9IHRoaXMuaW52ZXJ0UGVyc3BlY3RpdmVNYXRyaXgobWF0cml4KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogQ2FsY3VsYXRlIGRlbm9taW5hdG9yISBUaGUgZ3JvdW5kLXNreSBkZXRlcm1pbmF0aW9uLlxyXG4gICAgICogV2hhdCBpcyBzaWduIG9mIHRoZSAnZ3JvdW5kJyBpbiByKCkgZGVub21pbmF0b3IgYWZmaW5lIGZ1bmN0aW9uP1xyXG4gICAgICogSnVzdCB1c2UgYW55IHZhbGlkIGltYWdlIGNvb3JkaW5hdGUgaW4gZGVzdGluYXRpb24gZm9yIGRldGVybWluYXRpb24uXHJcbiAgICAgKiBGb3IgYSBmb3J3YXJkIG1hcHBlZCBwZXJzcGVjdGl2ZSB0aGUgaW1hZ2VzIDAsMCBjb29yZCB3aWxsIG1hcCB0b1xyXG4gICAgICogYzIsYzUgaW4gdGhlIGRpc3RvcnRlZCBpbWFnZSwgc28gc2V0IHRoZSBzaWduIG9mIGRlbm9taW5hdG9yIG9mIHRoYXQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGRlbm9taW5hdG9yID0gaW52ZXJzZVs2XSAqIG1hdHJpeFsyXSArIGludmVyc2VbN10gKiBtYXRyaXhbNV0gKyAxIDwgMCA/IC0xIDogMTtcclxuICAgIHJldHVybiBuZXcgUGVyc3BlY3RpdmUoaW52ZXJzZSwgZGVub21pbmF0b3IpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBpbnZlcnRlZCBwZXJzcGVjdGl2ZSBtYXRyaXggZnJvbSBwZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcltdfSBtYXRyaXggUGVyc3BlY3RpdmUgbWF0cml4LlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJbXX0gSW52ZXJ0ZWQgcGVyc3BlY3RpdmUgbWF0cml4LlxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL2Rpc3RvcnRfOGNfc291cmNlLmh0bWwjbDAwMTA5IEludmVydGluZyBwZXJzcGVjdGl2ZSBtYXRyaXggYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBpbnZlcnRQZXJzcGVjdGl2ZU1hdHJpeChtYXRyaXgpIHtcclxuICAgIGNvbnN0IGRldGVybWluYW50ID0gcGVyY2VwdGlibGVSZWNpcHJvY2FsKG1hdHJpeFswXSAqIG1hdHJpeFs0XSAtIG1hdHJpeFszXSAqIG1hdHJpeFsxXSk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzRdIC0gbWF0cml4WzddICogbWF0cml4WzVdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzddICogbWF0cml4WzJdIC0gbWF0cml4WzFdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzFdICogbWF0cml4WzVdIC0gbWF0cml4WzRdICogbWF0cml4WzJdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzZdICogbWF0cml4WzVdIC0gbWF0cml4WzNdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzBdIC0gbWF0cml4WzZdICogbWF0cml4WzJdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzNdICogbWF0cml4WzJdIC0gbWF0cml4WzBdICogbWF0cml4WzVdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzNdICogbWF0cml4WzddIC0gbWF0cml4WzZdICogbWF0cml4WzRdKSxcclxuICAgICAgZGV0ZXJtaW5hbnQgKiAobWF0cml4WzZdICogbWF0cml4WzFdIC0gbWF0cml4WzBdICogbWF0cml4WzddKVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcmV2ZXJzZU1hcCh4LCB5KSB7XHJcbiAgICByZXR1cm4gbWFwKHgsIHksIHRoaXMubWF0cml4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0VmFsaWRpdHkoeCwgeSwgc2NhbGluZykge1xyXG4gICAgY29uc3QgciA9IHRoaXMubWF0cml4WzZdICogeCArIHRoaXMubWF0cml4WzddICogeSArIDE7XHJcbiAgICBsZXQgdmFsaWRpdHkgPSByICogdGhpcy5kZW5vbWluYXRvciA8IDAgPyAwIDogMTtcclxuICAgIGNvbnN0IGFic1IgPSBNYXRoLmFicyhyKSAqIDI7XHJcbiAgICBjb25zdCBhYnNDNiA9IE1hdGguYWJzKHRoaXMubWF0cml4WzZdKTtcclxuICAgIGNvbnN0IGFic0M3ID0gTWF0aC5hYnModGhpcy5tYXRyaXhbN10pO1xyXG5cclxuICAgIGlmIChhYnNDNiA+IGFic0M3KSB7XHJcbiAgICAgIGlmIChhYnNSIDwgYWJzQzYpIHtcclxuICAgICAgICB2YWxpZGl0eSA9IDAuNSAtIHRoaXMuZGVub21pbmF0b3IgKiByIC8gKHRoaXMubWF0cml4WzZdICogc2NhbGluZyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoYWJzUiA8IGFic0M3KSB7XHJcbiAgICAgIHZhbGlkaXR5ID0gMC41IC0gdGhpcy5kZW5vbWluYXRvciAqIHIgLyAodGhpcy5tYXRyaXhbN10gKiBzY2FsaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWRpdHk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGdldFBhcnRpYWxEZXJpdmF0aXZlcyh4LCB5KSB7XHJcbiAgICBjb25zdCBwID0gdGhpcy5tYXRyaXhbMF0gKiB4ICsgdGhpcy5tYXRyaXhbMV0gKiB5ICsgdGhpcy5tYXRyaXhbMl0sXHJcbiAgICAgIHEgPSB0aGlzLm1hdHJpeFszXSAqIHggKyB0aGlzLm1hdHJpeFs0XSAqIHkgKyB0aGlzLm1hdHJpeFs1XSxcclxuICAgICAgciA9IHRoaXMubWF0cml4WzZdICogeCArIHRoaXMubWF0cml4WzddICogeSArIDEsXHJcbiAgICAgIHNjYWxlID0gTWF0aC5wb3coMSAvIHIsIDIpO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIChyICogdGhpcy5tYXRyaXhbMF0gLSBwICogdGhpcy5tYXRyaXhbNl0pICogc2NhbGUsIC8vIGRVeFxyXG4gICAgICAociAqIHRoaXMubWF0cml4WzFdIC0gcCAqIHRoaXMubWF0cml4WzddKSAqIHNjYWxlLCAvLyBkVXlcclxuICAgICAgKHIgKiB0aGlzLm1hdHJpeFszXSAtIHEgKiB0aGlzLm1hdHJpeFs2XSkgKiBzY2FsZSwgLy8gZFZ4XHJcbiAgICAgIChyICogdGhpcy5tYXRyaXhbNF0gLSBxICogdGhpcy5tYXRyaXhbN10pICogc2NhbGUgLy9kVnlcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXBzIHNvdXJjZSBjb29yZHMgaW50byBkZXN0aW5hdGlvbiBjb29yZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdSBYLWNvb3JkaW5hdGUgb2Ygc291cmNlIGltYWdlIHBvaW50LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2IFktY29vcmRpbmF0ZSBvZiBzb3VyY2UgaW1hZ2UgcG9pbnQuXHJcbiAgICogQHJldHVybnMge1BvaW50fSBGb3J3YXJkIG1hcHBlZCBkZXN0aW5hdGlvbiBpbWFnZSBjb29yZHMuXHJcbiAgICovXHJcbiAgZm9yd2FyZE1hcCh1LCB2KSB7XHJcbiAgICByZXR1cm4gbWFwKHUsIHYsIHRoaXMuZm9yd2FyZE1hdHJpeCk7XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKFBlcnNwZWN0aXZlLnByb3RvdHlwZSwgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc3BlY3RpdmU7IiwiaW1wb3J0IEFmZmluZSBmcm9tICcuL2Rpc3RvcnRpb24vYWZmaW5lJztcclxuaW1wb3J0IEFyYyBmcm9tICcuL2Rpc3RvcnRpb24vYXJjJztcclxuaW1wb3J0IFBlcnNwZWN0aXZlIGZyb20gJy4vZGlzdG9ydGlvbi9wZXJzcGVjdGl2ZSc7XHJcblxyXG4vKipcclxuICogQHN1bW1hcnkgUmVzb2x2ZXMgZGlzdG9ydGlvbiBjbGFzcyBpbnN0YW5jZSB1c2luZyBkaXN0b3J0aW9uIGFyZ3VtZW50cyBhbmQgb3B0aW9uYWxseSBpbWFnZS5cclxuICpcclxuICogQGNhbGxiYWNrIGxlbnN+RGlzdG9ydGlvblJlc29sdmVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFyZ3NcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gW2ltYWdlXVxyXG4gKiBAcmV0dXJucyB7RGlzdG9ydGlvbkludGVyZmFjZX1cclxuICovXHJcblxyXG4vKipcclxuICogTWFrZSBBZmZpbmUgZGlzdG9ydGlvbiB1c2luZyBjb250cm9sIHBvaW50cy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJbXX0gYXJnc1xyXG4gKiBAcmV0dXJucyB7bGVucy5kaXN0b3J0aW9uLkFmZmluZX1cclxuICovXHJcbmZ1bmN0aW9uIGFmZmluZUJ5Q29udHJvbFBvaW50cyhhcmdzKSB7XHJcbiAgcmV0dXJuIEFmZmluZS5mcm9tQ29udHJvbFBvaW50cyhhcmdzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2UgQWZmaW5lIGRpc3RvcnRpb24gdXNpbmcgYWZmaW5lIG1hdHJpeC4gQXJndW1lbnRzIG9yZGVyIGlzIGFzIGRlc2NyaWJlZCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEltYWdlTWFnaWNrXHJcbiAqIGFyZ3VtZW50cy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHN4XHJcbiAqIEBwYXJhbSByeVxyXG4gKiBAcGFyYW0gcnhcclxuICogQHBhcmFtIHN5XHJcbiAqIEBwYXJhbSB0eFxyXG4gKiBAcGFyYW0gdHlcclxuICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5BZmZpbmV9XHJcbiAqL1xyXG5mdW5jdGlvbiBhZmZpbmVCeU1hdHJpeCAoW3N4LCByeSwgcngsIHN5LCB0eCwgdHldKSB7XHJcbiAgLy8gQ2hhbmdlIGFyZ3VtZW50cyBvcmRlci5cclxuICByZXR1cm4gQWZmaW5lLmZyb21Gb3J3YXJkTWF0cml4KFtzeCwgcngsIHR4LCByeSwgc3ksIHR5XSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlIHBlcnNwZWN0aXZlIGRpc3RvcnRpb24gdXNpbmcgY29udHJvbCBwb2ludHMuXHJcbiAqIElmIG51bWJlciBvZiBjb250cm9sIHBvaW50IHNldHMgaXMgbGVzcyB0aGFuIDQgKDwgMTYgYXJndW1lbnRzKSwgdGhpcyB3aWxsIGZhbGxiYWNrIHRvIEFmZmluZSBkaXN0b3J0aW9uLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBhcmdzXHJcbiAqIEByZXR1cm5zIHtsZW5zLmRpc3RvcnRpb24uUGVyc3BlY3RpdmV8bGVucy5kaXN0b3J0aW9uLkFmZmluZX1cclxuICovXHJcbmZ1bmN0aW9uIHBlcnNwZWN0aXZlQnlDb250cm9sUG9pbnRzKGFyZ3MpIHtcclxuICBpZiAoYXJncy5sZW5ndGggPCAxNikge1xyXG4gICAgY29uc29sZS53YXJuKCdQZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIHJlcXVpcmVzIGF0IGxlYXN0IDQgY29udHJvbHMgcG9pbnRzIG1hcHBpbmcgKHUsIHYpIC0+ICh4LCB5KS4gQWZmaW5lIGRpc3RvcnRpb24gd2lsbCBiZSB1c2VkLicpO1xyXG4gICAgcmV0dXJuIEFmZmluZS5mcm9tQ29udHJvbFBvaW50cyhhcmdzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBQZXJzcGVjdGl2ZS5mcm9tQ29udHJvbFBvaW50cyhhcmdzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFyZ3NcclxuICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5QZXJzcGVjdGl2ZX1cclxuICovXHJcbmZ1bmN0aW9uIHBlcnNwZWN0aXZlQnlNYXRyaXgoYXJncykge1xyXG4gIHJldHVybiBQZXJzcGVjdGl2ZS5mcm9tRm9yd2FyZE1hdHJpeChhcmdzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFyZ3NcclxuICogQHBhcmFtIHtJbWFnZUludGVyZmFjZX0gaW1hZ2VcclxuICogQHJldHVybnMge2xlbnMuZGlzdG9ydGlvbi5BcmN9XHJcbiAqL1xyXG5mdW5jdGlvbiBhcmNCeUFyZ3VtZW50cyhhcmdzLCBpbWFnZSkge1xyXG4gIHJldHVybiBBcmMuZnJvbUFyZ3VtZW50cyhpbWFnZS52aWV3cG9ydCwgYXJncyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXN0b3J0aW9uIHR5cGVzLlxyXG4gKlxyXG4gKiBAZW51bSB7bGVuc35kaXN0b3J0aW9uUmVzb2x2ZXJ9XHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBkaXN0b3J0cyA9IHtcclxuICAvKipcclxuICAgKiBBZmZpbmUgZGlzdG9ydGlvbiB1c2luZyBjb250cm9sIHBvaW50cy4gQXJndW1lbnRzIGFyZSBzZXRzIG9mIGNvbnRyb2wgcG9pbnRzIG1hcHBpbmdzOlxyXG4gICAqIFt1MCwgdjAsIHgwLCB5MCwgLi4uLCB1Tiwgdk4sIHhOLCB5Tl0sIHdoZXJlIHUqLCB2KiBhcmUgc291cmNlIGltYWdlIGNvb3JkcywgeCosIHkqIGFyZVxyXG4gICAqIGRlc3RpbmF0aW9uIGltYWdlIGNvb3Jkcy5cclxuICAgKi9cclxuICBBRkZJTkU6IGFmZmluZUJ5Q29udHJvbFBvaW50cyxcclxuICAvKipcclxuICAgKiBBZmZpbmUgZGlzdG9ydGlvbiB1c2luZyBmb3J3YXJkIGFmZmluZSBtYXRyaXguXHJcbiAgICogQXJndW1lbnRzIGFyZSBhZmZpbmUgbWF0cml4IGNvZWZmaWNpZW50czogW3N4LCByeSwgcngsIHN5LCB0eCwgdHldXHJcbiAgICovXHJcbiAgQUZGSU5FX1BST0pFQ1RJT046IGFmZmluZUJ5TWF0cml4LFxyXG4gIC8qKlxyXG4gICAqIFBlcnNwZWN0aXZlIGRpc3RvcnRpb24gdXNpbmcgY29udHJvbCBwb2ludHMuIEFyZ3VtZW50cyBhcmUgc2V0cyBvZiBjb250cm9sIHBvaW50cyBtYXBwaW5nczpcclxuICAgKiBbdTAsIHYwLCB4MCwgeTAsIC4uLiwgdU4sIHZOLCB4TiwgeU5dLCB3aGVyZSB1KiwgdiogYXJlIHNvdXJjZSBpbWFnZSBjb29yZHMsIHgqLCB5KiBhcmVcclxuICAgKiBkZXN0aW5hdGlvbiBpbWFnZSBjb29yZHMuXHJcbiAgICogSWYgbnVtYmVyIG9mIGNvbnRyb2wgcG9pbnQgc2V0cyBpcyBsZXNzIHRoYW4gNCAoPCAxNiBhcmd1bWVudHMpLCB0aGlzIHdpbGwgZmFsbGJhY2sgdG8gQWZmaW5lIGRpc3RvcnRpb25cclxuICAgKiB3aXRoIHdhcm5pbmcgbWVzc2FnZSBpbiBjb25zb2xlLlxyXG4gICAqL1xyXG4gIFBFUlNQRUNUSVZFOiBwZXJzcGVjdGl2ZUJ5Q29udHJvbFBvaW50cyxcclxuICAvKipcclxuICAgKiBQZXJzcGVjdGl2ZSBkaXN0b3J0aW9uIHVzaW5nIGZvcndhcmQgcGVyc3BlY3RpdmUgbWF0cml4LiBBcmd1bWVudHMgYXJlIHBlcnNwZWN0aXZlIG1hdHJpeCBjb2VmZmljaWVudHM6XHJcbiAgICogW3N4LCByeSwgdHgsIHJ4LCBzeSwgdHksIHB4LCBweV0uXHJcbiAgICovXHJcbiAgUEVSU1BFQ1RJVkVfUFJPSkVDVElPTjogcGVyc3BlY3RpdmVCeU1hdHJpeCxcclxuXHJcbiAgLyoqXHJcbiAgICogQXJjIGRpc3RvcnRpb24uIEFyZ3VtZW50cyBhcmU6IFthcmNBbmdsZSwgcm90YXRpb24sIG91dGVyUmFkaXVzLCBpbm5lclJhZGl1c10uIEFsbCBhcmd1bWVudHMgZXhjZXB0IGFyY0FuZ2xlXHJcbiAgICogYXJlIG9wdGlvbmFsLiBTZWUge0BsaW5rIGxlbnMuZGlzdG9ydGlvbi5BcmMuZnJvbUFyZ3VtZW50c31cclxuICAgKi9cclxuICBBUkM6IGFyY0J5QXJndW1lbnRzXHJcbn07XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXIgY3VzdG9tIGRpc3RvcnRpb24gcmVzb2x2ZXIuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAqIEBwYXJhbSB7bGVuc35kaXN0b3J0aW9uUmVzb2x2ZXJ9IHJlc29sdmVyXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlckRpc3RvcnRpb25SZXNvbHZlcihuYW1lLCByZXNvbHZlcikge1xyXG4gIGRpc3RvcnRzW25hbWVdICA9IHJlc29sdmVyO1xyXG59XHJcblxyXG4vKipcclxuICogVW5yZWdpc3RlciBkaXN0b3J0aW9uIHJlc29sdmVyLlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVuc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gKi9cclxuZnVuY3Rpb24gdW5yZWdpc3RlckRpc3RvcnRpb25SZXNvbHZlcihuYW1lKSB7XHJcbiAgZGVsZXRlIGRpc3RvcnRzW25hbWVdO1xyXG59XHJcblxyXG5leHBvcnQge3JlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyLCB1bnJlZ2lzdGVyRGlzdG9ydGlvblJlc29sdmVyfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3RvcnRzOyIsIi8qKlxyXG4gKiBFeGNlcHRpb24gbmFtZXNwYWNlXHJcbiAqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5leGNlcHRpb25cclxuICovXHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgTGVuc0V4Y2VwdGlvbn0gZnJvbSAnLi9sZW5zLWV4Y2VwdGlvbic7XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgSW52YWxpZEFyZ3VtZW50c0xlbmd0aH0gZnJvbSAnLi9pbnZhbGlkLWFyZ3VtZW50cy1sZW5ndGgnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIFVuc29sdmFibGVNYXRyaXh9IGZyb20gJy4vdW5zb2x2YWJsZS1tYXRyaXgnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIEludmFsaWRBcmd1bWVudH0gZnJvbSAnLi9pbnZhbGlkLWFyZ3VtZW50JzsiLCJpbXBvcnQgTGVuc0V4Y2VwdGlvbiBmcm9tICcuL2xlbnMtZXhjZXB0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBJbnZhbGlkIEFyZ3VtZW50IEV4Y2VwdGlvbi5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMuZXhjZXB0aW9uXHJcbiAqIEBleHRlbmRzIGxlbnMuZXhjZXB0aW9uLkxlbnNFeGNlcHRpb25cclxuICovXHJcbmNsYXNzIEludmFsaWRBcmd1bWVudCBleHRlbmRzIExlbnNFeGNlcHRpb24ge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIHRoaXMubmFtZSA9ICdJbnZhbGlkQXJndW1lbnQnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52YWxpZEFyZ3VtZW50OyIsImltcG9ydCBMZW5zRXhjZXB0aW9uIGZyb20gJy4vbGVucy1leGNlcHRpb24nO1xyXG5cclxuLyoqXHJcbiAqIEV4Y2VwdGlvbiBmb3IgY2FzZXMgd2hlbiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMgcGFzc2VkXHJcbiAqXHJcbiAqIEBleHRlbmRzIGxlbnMuZXhjZXB0aW9uLkxlbnNFeGNlcHRpb25cclxuICogQG1lbWJlck9mIGxlbnMuZXhjZXB0aW9uXHJcbiAqL1xyXG5jbGFzcyBJbnZhbGlkQXJndW1lbnRzTGVuZ3RoIGV4dGVuZHMgTGVuc0V4Y2VwdGlvbiB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgdGhpcy5uYW1lID0gJ0ludmFsaWRBcmd1bWVudHNMZW5ndGgnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52YWxpZEFyZ3VtZW50c0xlbmd0aDsiLCIvKipcclxuICogQmFzZSBMZW5zIGV4Y2VwdGlvblxyXG4gKlxyXG4gKiBAZXh0ZW5kcyBFcnJvclxyXG4gKiBAbWVtYmVyT2YgbGVucy5leGNlcHRpb25cclxuICovXHJcbmNsYXNzIExlbnNFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIHRoaXMubmFtZSA9ICdMZW5zRXhjZXB0aW9uJztcclxuXHJcbiAgICBpZiAodHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IobWVzc2FnZSkpLnN0YWNrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVuc0V4Y2VwdGlvbjsiLCJpbXBvcnQgTGVuc0V4Y2VwdGlvbiBmcm9tICcuL2xlbnMtZXhjZXB0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBFeGNlcHRpb24gZm9yIHVuc29sdmFibGUgbWF0cml4IGluIEdhdXNzLUpvcmRhbiBlbGltaW5hdGlvblxyXG4gKlxyXG4gKiBAZXh0ZW5kcyBsZW5zLmV4Y2VwdGlvbi5MZW5zRXhjZXB0aW9uXHJcbiAqIEBtZW1iZXJPZiBsZW5zLmV4Y2VwdGlvblxyXG4gKi9cclxuY2xhc3MgVW5zb2x2YWJsZU1hdHJpeCBleHRlbmRzIExlbnNFeGNlcHRpb24ge1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xyXG4gICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICB0aGlzLm5hbWUgPSAnVW5zb2x2YWJsZU1hdHJpeCc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbnNvbHZhYmxlTWF0cml4OyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXIvZmlsdGVyJztcclxuaW1wb3J0IHtib3gsIGN1YmljQkN9IGZyb20gXCIuL2ZpbHRlci9maWx0ZXItZnVuY3Rpb25zXCI7XHJcblxyXG4vKipcclxuICogRmlsdGVyIGZhY3RvcnkuXHJcbiAqXHJcbiAqIEBjYWxsYmFjayBsZW5zfmZpbHRlckZhY3RvcnlcclxuICogQHJldHVybnMge0ZpbHRlckludGVyZmFjZX1cclxuICovXHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHJldHVybnMge2xlbnMuZmlsdGVyLkZpbHRlcn1cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBST0JJRE9VWCgpIHtcclxuICByZXR1cm4gbmV3IEZpbHRlcihcclxuICAgIGN1YmljQkMoMC4zNzgyMTU3NTUwOTM5OTg2NywgMC4zMTA4OTIxMjI0NTMwMDA2NyksXHJcbiAgICBib3goKSxcclxuICAgIDIsXHJcbiAgICAxLjE2ODU3Nzc2MjA4MzY5MzIsXHJcbiAgICAxXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEByZXR1cm5zIHtsZW5zLmZpbHRlci5GaWx0ZXJ9XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gUk9CSURPVVhfU0hBUlAoKSB7XHJcbiAgcmV0dXJuIG5ldyBGaWx0ZXIoXHJcbiAgICBjdWJpY0JDKDAuMjYyMDE0NTEyMzk5MDE0MiwgMC4zNjg5OTI3NDM4MDA0OTI5KSxcclxuICAgIGJveCgpLFxyXG4gICAgMixcclxuICAgIDEuMTA1ODIyOTMzNzE5MDE5LFxyXG4gICAgMVxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaWx0ZXIgcHJlc2V0cy5cclxuICpcclxuICogQGVudW0ge2xlbnN+ZmlsdGVyRmFjdG9yeX1cclxuICogQG1lbWJlck9mIGxlbnNcclxuICovXHJcbmNvbnN0IGZpbHRlclByZXNldHMgPSB7XHJcbiAgUk9CSURPVVgsXHJcbiAgUk9CSURPVVhfU0hBUlBcclxufTtcclxuXHJcbi8vIFRPRE8gYWRkIG1vcmUgZmlsdGVyIHByZXNldHNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbHRlclByZXNldHM7IiwiLyoqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5maWx0ZXIuZmlsdGVyRnVuY3Rpb25zXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE1ha2VzIGJveCBmaWx0ZXIgZnVuY3Rpb24uXHJcbiAqIEEgQm94IGZpbHRlciBpcyBhIGVxdWFsIHdlaWdodGluZyBmdW5jdGlvbiAoYWxsIHdlaWdodHMgZXF1YWwpLlxyXG4gKiBETyBOT1QgTElNSVQgcmVzdWx0cyBieSBzdXBwb3J0IG9yIHJlc2l6ZSBwb2ludCBzYW1wbGluZyB3aWxsIHdvcmtcclxuICogYXMgaXQgcmVxdWVzdHMgcG9pbnRzIGJleW9uZCBpdHMgbm9ybWFsIDAuMCBzdXBwb3J0IHNpemUuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLmZpbHRlci5maWx0ZXJGdW5jRmFjdG9yaWVzXHJcbiAqIEByZXR1cm5zIHtsZW5zLmZpbHRlci5GaWx0ZXJ+ZmlsdGVyRnVuY3Rpb259XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3Jlc2l6ZV84Y19zb3VyY2UuaHRtbCNsMDAxODEgT3ggZmlsdGVyIGZ1bmN0aW9uIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICovXHJcbmZ1bmN0aW9uIGJveCgpIHtcclxuICBjb25zdCBmdW5jID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfTtcclxuXHJcbiAgZnVuYy5maWx0ZXJGdW5jdGlvbk5hbWUgPSAnYm94JztcclxuXHJcbiAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyBjdWJpY0JDIGZpbHRlciBmdW5jdGlvbi5cclxuICogPHA+Q3ViaWMgRmlsdGVycyB1c2luZyBCLEMgZGV0ZXJtaW5lZCB2YWx1ZXM6PC9wPlxyXG4gKiA8cHJlPlxyXG4gKiAgICAgTWl0Y2hlbGwtTmV0cmF2YWxpICBCID0gMS8zIEMgPSAxLzMgIFwiQmFsYW5jZWRcIiBjdWJpYyBzcGxpbmUgZmlsdGVyXHJcbiAqICAgICBDYXRtdWxsLVJvbSAgICAgICAgIEIgPSAwICAgQyA9IDEvMiAgSW50ZXJwb2xhdG9yeSBhbmQgZXhhY3Qgb24gbGluZWFyc1xyXG4gKiAgICAgU3BsaW5lICAgICAgICAgICAgICBCID0gMSAgIEMgPSAwICAgIEItU3BsaW5lIEdhdXNzaWFuIGFwcHJveGltYXRpb25cclxuICogICAgIEhlcm1pdGUgICAgICAgICAgICAgQiA9IDAgICBDID0gMCAgICBCLVNwbGluZSBpbnRlcnBvbGF0b3JcclxuICogPC9wcmU+XHJcbiAqXHJcbiAqIDxwPlNlZSBwYXBlciBieSBNaXRjaGVsbCBhbmQgTmV0cmF2YWxpLCBSZWNvbnN0cnVjdGlvbiBGaWx0ZXJzIGluIENvbXB1dGVyXHJcbiAqIEdyYXBoaWNzIENvbXB1dGVyIEdyYXBoaWNzLCBWb2x1bWUgMjIsIE51bWJlciA0LCBBdWd1c3QgMTk4OFxyXG4gKiB7QGxpbmsgaHR0cDovL3d3dy5jcy51dGV4YXMuZWR1L3VzZXJzL2Z1c3NlbGwvY291cnNlcy9jczM4NGcvbGVjdHVyZXMvbWl0Y2hlbGwvTWl0Y2hlbGwucGRmfS48L3A+XHJcbiAqXHJcbiAqIDxwPkNvZWZmaWNlbnRzIGFyZSBkZXRlcm1pbmVkIGZyb20gQixDIHZhbHVlczpcclxuICogPHByZT5cclxuICogICAgUDAgPSAoICA2IC0gMipCICAgICAgICkvNiA9IGNvZWZmWzBdXHJcbiAqICAgIFAxID0gICAgICAgICAwXHJcbiAqICAgIFAyID0gKC0xOCArMTIqQiArIDYqQyApLzYgPSBjb2VmZlsxXVxyXG4gKiAgICBQMyA9ICggMTIgLSA5KkIgLSA2KkMgKS82ID0gY29lZmZbMl1cclxuICogICAgUTAgPSAoICAgICAgOCpCICsyNCpDICkvNiA9IGNvZWZmWzNdXHJcbiAqICAgIFExID0gKCAgICAtMTIqQiAtNDgqQyApLzYgPSBjb2VmZls0XVxyXG4gKiAgICBRMiA9ICggICAgICA2KkIgKzMwKkMgKS82ID0gY29lZmZbNV1cclxuICogICAgUTMgPSAoICAgIC0gMSpCIC0gNipDICkvNiA9IGNvZWZmWzZdXHJcbiAqIDwvcHJlPlxyXG4gKiB3aGljaCBhcmUgdXNlZCB0byBkZWZpbmUgdGhlIGZpbHRlcjpcclxuICogPHByZT5cclxuICogICAgUDAgKyBQMSp4ICsgUDIqeF4yICsgUDMqeF4zICAgICAgMCA8PSB4IDwgMVxyXG4gKiAgICBRMCArIFExKnggKyBRMip4XjIgKyBRMyp4XjMgICAgICAxIDw9IHggPCAyXHJcbiAqIDwvcHJlPlxyXG4gKiB3aGljaCBlbnN1cmVzIGZ1bmN0aW9uIGlzIGNvbnRpbnVvdXMgaW4gdmFsdWUgYW5kIGRlcml2YXRpdmUgKHNsb3BlKS48L3A+XHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLmZpbHRlci5maWx0ZXJGdW5jRmFjdG9yaWVzXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3Jlc2l6ZV84Y19zb3VyY2UuaHRtbCNsMDAyMDcgQ3ViaWNCQyBmaWx0ZXIgZnVuY3Rpb24gYXQgSW1hZ2VNYWdpY2sgc291cmNlfVxyXG4gKiBAcGFyYW0ge251bWJlcn0gYlxyXG4gKiBAcGFyYW0ge251bWJlcn0gY1xyXG4gKiBAcmV0dXJucyB7bGVucy5maWx0ZXIuRmlsdGVyfmZpbHRlckZ1bmN0aW9ufVxyXG4gKi9cclxuZnVuY3Rpb24gY3ViaWNCQyhiLCBjKSB7XHJcbiAgY29uc3QgcDAgPSAoNiAtIDIgKiBiKSAvIDY7XHJcbiAgLy8gY29uc3QgcDEgPSAwO1xyXG4gIGNvbnN0IHAyID0gKC0xOCArIDEyICogYiArIDYgKiBjKSAvIDY7XHJcbiAgY29uc3QgcDMgPSAoMTIgLSA5ICogYiAtIDYgKiBjKSAvIDY7XHJcbiAgY29uc3QgcTAgPSAoOCAqIGIgKyAyNCAqIGMpIC8gNjtcclxuICBjb25zdCBxMSA9ICgtMTIgKiBiIC0gNDggKiBjKSAvIDY7XHJcbiAgY29uc3QgcTIgPSAoNiAqIGIgKyAzMCAqIGMpIC8gNjtcclxuICBjb25zdCBxMyA9ICgtMSAqIGIgLSA2ICogYykgLyA2O1xyXG5cclxuICBjb25zdCBmdW5jID0gZnVuY3Rpb24gKHgpIHtcclxuICAgIGlmICh4IDwgMSkge1xyXG4gICAgICByZXR1cm4gcDAgKyB4ICogKHggKiAocDIgKyB4ICogcDMpKTtcclxuICAgIH0gZWxzZSBpZiAoeCA8IDIpIHtcclxuICAgICAgcmV0dXJuIHEwICsgeCAqIChxMSArIHggKiAocTIgKyB4ICogcTMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuYy5maWx0ZXJGdW5jdGlvbk5hbWUgPSAnY3ViaWNCQyc7XHJcbiAgZnVuYy5iID0gYjtcclxuICBmdW5jLmMgPSBjO1xyXG5cclxuICByZXR1cm4gZnVuYztcclxufTtcclxuXHJcbi8vIFRPRE86IGFkZCBtb3JlIGZpbHRlciBmdW5jdGlvbnNcclxuXHJcbmV4cG9ydCB7XHJcbiAgYm94LCBjdWJpY0JDXHJcbn07IiwiaW1wb3J0IHtFUFNJTE9OfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZmlsdGVyIG9yIHdpbmRvd2luZyBmdW5jdGlvbi5cclxuICpcclxuICogQGNhbGxiYWNrIGxlbnMuZmlsdGVyLkZpbHRlcn5maWx0ZXJGdW5jdGlvblxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3hdXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3VwcG9ydF1cclxuICogQHBhcmFtIHtudW1iZXJ9IFt3aW5kb3dTdXBwb3J0XVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBSZXNhbXBsZSBmaWx0ZXIuXHJcbiAqXHJcbiAqIEBpbXBsZW1lbnRzIHtGaWx0ZXJJbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLmZpbHRlclxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy5pbWFnZW1hZ2ljay5vcmcvVXNhZ2UvZmlsdGVyLyNmaWx0ZXIgUmVzYW1wbGluZyBGaWx0ZXJzfSBhdCBJbWFnZU1hZ2ljayBkb2NzXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3Mi5lZWNzLmJlcmtlbGV5LmVkdS9QdWJzL1RlY2hScHRzLzE5ODkvQ1NELTg5LTUxNi5wZGYgRnVuZGFtZW50YWxzIG9mIFRleHR1cmUgTWFwcGluZyBhbmQgSW1hZ2UgV2FycGluZyBieSBQYXVsIFMuIEhlY2tiZXJ0fVxyXG4gKiBwYWdlIDQxLCBzZWN0aW9uIDMuNCwgMy41XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3Jlc2l6ZV84Y19zb3VyY2UuaHRtbCNsMDA3NTcgQXF1aXJlUmVzaXplRmlsdGVyIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICogQHR1dG9yaWFsIDAyLjAzLnBpeGVsLWNvbG9yLWxvb2t1cFxyXG4gKi9cclxuY2xhc3MgRmlsdGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2xlbnMuZmlsdGVyLkZpbHRlcn5maWx0ZXJGdW5jdGlvbn0gZmlsdGVyRnVuY3Rpb24gRmlsdGVyaW5nIGZ1bmN0aW9uLlxyXG4gICAqIEBwYXJhbSB7bGVucy5maWx0ZXIuRmlsdGVyfmZpbHRlckZ1bmN0aW9ufSB3aW5kb3dpbmdGdW5jdGlvbiBXaW5kb3dpbmcgZnVuY3Rpb24uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN1cHBvcnQgRmlsdGVyIHJlZ2lvbiBvZiBzdXBwb3J0IC0gdGhlIGZpbHRlciBzdXBwb3J0IGxpbWl0LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZSBEaW1lbnNpb24gc2NhbGluZyB0byBmaXQgd2luZG93IHN1cHBvcnQgKHVzYWxseSAxLjApLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbYmx1cj0xXSBYLXNjYWxlIChibHVyLXNoYXJwZW4pLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bGx9IFt3aW5kb3dTdXBwb3J0PW51bGxdIFdpbmRvdyBzdXBwb3J0LCB1c3VhbGx5IGVxdWFsIHRvIHN1cHBvcnQgKGV4cGVydCBvbmx5KS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihmaWx0ZXJGdW5jdGlvbiwgd2luZG93aW5nRnVuY3Rpb24sIHN1cHBvcnQsIHNjYWxlLCBibHVyID0gMSwgd2luZG93U3VwcG9ydCA9IG51bGwpIHtcclxuICAgIHRoaXMuZmlsdGVyRnVuY3Rpb24gICAgPSBmaWx0ZXJGdW5jdGlvbjtcclxuICAgIHRoaXMud2luZG93aW5nRnVuY3Rpb24gPSB3aW5kb3dpbmdGdW5jdGlvbjtcclxuICAgIHRoaXMuc3VwcG9ydCAgICAgICAgICAgPSBzdXBwb3J0O1xyXG4gICAgdGhpcy5zY2FsZSAgICAgICAgICAgICA9IHNjYWxlO1xyXG4gICAgdGhpcy5ibHVyICAgICAgICAgICAgICA9IGJsdXI7XHJcbiAgICB0aGlzLndpbmRvd1N1cHBvcnQgICAgID0gd2luZG93U3VwcG9ydCAhPT0gbnVsbCA/IHdpbmRvd1N1cHBvcnQgOiBzdXBwb3J0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRXZWlnaHQoeCkge1xyXG4gICAgY29uc3QgeEJsdXIgPSB4IC8gdGhpcy5ibHVyO1xyXG4gICAgY29uc3Qgc2NhbGUgPSB4Qmx1ciA8IEVQU0lMT04gPyAxIDogdGhpcy53aW5kb3codGhpcy5zY2FsZSAqIHhCbHVyKTtcclxuICAgIHJldHVybiBzY2FsZSAqIHRoaXMuZmlsdGVyKHhCbHVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZmlsdGVyKHgpIHtcclxuICAgIHJldHVybiB0aGlzLmZpbHRlckZ1bmN0aW9uKHgsIHRoaXMuc3VwcG9ydCwgdGhpcy53aW5kb3dTdXBwb3J0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgd2luZG93KHgpIHtcclxuICAgIHJldHVybiB0aGlzLndpbmRvd2luZ0Z1bmN0aW9uKHgsIHRoaXMuc3VwcG9ydCwgdGhpcy53aW5kb3dTdXBwb3J0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjsiLCIvKipcclxuICogRmlsdGVyIG5hbWVzcGFjZVxyXG4gKlxyXG4gKiBAbmFtZXNwYWNlIGxlbnMuZmlsdGVyXHJcbiAqL1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIEZpbHRlcn0gZnJvbSAnLi9maWx0ZXInO1xyXG5cclxuaW1wb3J0ICogYXMgZmlsdGVyRnVuY3Rpb25zIGZyb20gJy4vZmlsdGVyLWZ1bmN0aW9ucyc7XHJcblxyXG5leHBvcnQge2ZpbHRlckZ1bmN0aW9uc307IiwiaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4uL3ZpZXdwb3J0JztcclxuaW1wb3J0IHZweCBmcm9tICcuLi92cHgnO1xyXG5pbXBvcnQgdmlydHVhbFBpeGVsVHJhaXQgZnJvbSAnLi4vbWl4aW5zL3ZpcnR1YWwtcGl4ZWwtdHJhaXQnO1xyXG5pbXBvcnQgaW50ZXJwb2xhdGlvblRyYWl0IGZyb20gJy4uL21peGlucy9pbnRlcnBvbGF0aW9uLXRyYWl0JztcclxuaW1wb3J0IGludGVycG9sYXRpb24gZnJvbSAnLi4vaW50ZXJwb2xhdGlvbic7XHJcblxyXG5mdW5jdGlvbiBub3RJbXBsZW1lbnRlZChtZXRob2QpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoYCR7bWV0aG9kfSgpIGlzIGFic3RyYWN0IG1ldGhvZCBhbmQgbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBjaGlsZCBjbGFzc2ApO1xyXG59XHJcblxyXG4vKipcclxuICogQWJzdHJhY3QgaW1hZ2UgY2xhc3MgZm9yIEltYWdlSW50ZXJmYWNlIGltcGxlbWVudGF0aW9uLlxyXG4gKlxyXG4gKiBAaW1wbGVtZW50cyB7SW1hZ2VJbnRlcmZhY2V9XHJcbiAqIEBtZW1iZXJPZiBsZW5zLmltYWdlXHJcbiAqIEBhYnN0cmFjdFxyXG4gKiBAbWl4ZXMgbGVucy5taXhpbnMuaW50ZXJwb2xhdGlvblRyYWl0XHJcbiAqIEBtaXhlcyBsZW5zLm1peGlucy52aXJ0dWFsUGl4ZWxUcmFpdFxyXG4gKi9cclxuY2xhc3MgQWJzdHJhY3RJbWFnZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBJbWFnZSB3aWR0aFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSW1hZ2UgaGVpZ2h0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLnZpZXdwb3J0ID0gbmV3IFZpZXdwb3J0KDAsIDAsIHRoaXMud2lkdGggLSAxLCB0aGlzLmhlaWdodCAtIDEpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBbMCwgMCwgMCwgMF07IC8vIFRyYW5zcGFyZW50O1xyXG4gICAgdGhpcy52aXJ0dWFsUGl4ZWxNZXRob2QgPSB2cHguVFJBTlNQQVJFTlQ7XHJcbiAgICB0aGlzLnF1YW50dW1SYW5nZSA9IDI1NTtcclxuICAgIHRoaXMuaW50ZXJwb2xhdGlvbk1ldGhvZCA9IGludGVycG9sYXRpb24uSU5URUdFUjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0UGl4ZWxDb2xvcih4LCB5KSB7XHJcbiAgICB4ID0gTWF0aC5mbG9vcih4IC0gdGhpcy52aWV3cG9ydC54MSk7XHJcbiAgICB5ID0gTWF0aC5mbG9vcih5IC0gdGhpcy52aWV3cG9ydC55MSk7XHJcblxyXG4gICAgaWYgKHggPj0gMCAmJiB4IDwgdGhpcy53aWR0aCAmJiB5ID49IDAgJiYgeSA8IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldEltYWdlUGl4ZWxDb2xvcih4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRWaXJ0dWFsUGl4ZWxDb2xvcih4LCB5LCB0aGlzLnZpcnR1YWxQaXhlbE1ldGhvZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHNldFBpeGVsQ29sb3IoeCwgeSwgY29sb3IpIHtcclxuICAgIHggPSBNYXRoLmZsb29yKHggLSB0aGlzLnZpZXdwb3J0LngxKTtcclxuICAgIHkgPSBNYXRoLmZsb29yKHkgLSB0aGlzLnZpZXdwb3J0LnkxKTtcclxuXHJcbiAgICBpZiAoeCA+PSAwICYmIHggPCB0aGlzLndpZHRoICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5oZWlnaHQpIHtcclxuICAgICAgdGhpcy5zZXRJbWFnZVBpeGVsQ29sb3IoeCwgeSwgY29sb3IpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBHaXZlbiBjb29yZHMgKCR7eH0sICR7eX0pIGlzIG91dCBvZiBpbWFnZSBib3VuZHNgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0Qmxhbmsodmlld3BvcnQpIHtcclxuICAgIGNvbnN0IGJsYW5rID0gdGhpcy5wcmVwYXJlQmxhbmsodmlld3BvcnQud2lkdGgoKSwgdmlld3BvcnQuaGVpZ2h0KCkpO1xyXG5cclxuICAgIGlmIChibGFuayBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgcmV0dXJuIGJsYW5rLnRoZW4oYmxhbmsgPT4ge1xyXG4gICAgICAgIGJsYW5rLnZpZXdwb3J0ICA9IHZpZXdwb3J0O1xyXG4gICAgICAgIHJldHVybiBibGFuaztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmxhbmsudmlld3BvcnQgPSB2aWV3cG9ydDtcclxuICAgIHJldHVybiBibGFuaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc2NhbGUoc2NhbGUpIHtcclxuICAgIGNvbnN0IHZpZXdwb3J0ID0gdGhpcy52aWV3cG9ydC5jbG9uZSgpO1xyXG4gICAgdmlld3BvcnQuc2NhbGUoc2NhbGUpO1xyXG4gICAgY29uc3QgcmVzaXplZCA9IHRoaXMucmVzaXplKHZpZXdwb3J0LndpZHRoKCksIHZpZXdwb3J0LmhlaWdodCgpKTtcclxuXHJcbiAgICBpZiAocmVzaXplZCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgcmV0dXJuIHJlc2l6ZWQudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmVzaXplZC52aWV3cG9ydCA9IHZpZXdwb3J0O1xyXG4gICAgICAgIHJldHVybiByZXNpemVkO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXNpemVkLnZpZXdwb3J0ID0gdmlld3BvcnQ7XHJcbiAgICByZXR1cm4gcmVzaXplZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc3luYygpIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBwaXhlbCBjb2xvciBhdCBnaXZlbiBpbWFnZSBjb29yZHMuIEltYWdlIGNvb3JkcyBNVVNUIGJlOiB4IOKIiCBbMDsgd2lkdGggLSAxXSwgeSDiiIggWzA7IGhlaWdodCAtIDFdLlxyXG4gICAqXHJcbiAgICogQGFic3RyYWN0XHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICAgKiBAcmV0dXJucyB7Q29sb3J9XHJcbiAgICovXHJcbiAgZ2V0SW1hZ2VQaXhlbENvbG9yKHgsIHkpIHtcclxuICAgIG5vdEltcGxlbWVudGVkKCdnZXRJbWFnZVBpeGVsQ29sb3InKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgcGl4ZWwgY29sb3IgYXQgZ2l2ZW4gaW1hZ2UgY29vcmRpbmF0ZXMuXHJcbiAgICpcclxuICAgKiBAYWJzdHJhY3RcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge251bWJlcn0geVxyXG4gICAqIEBwYXJhbSB7Q29sb3J9IGNvbG9yXHJcbiAgICovXHJcbiAgc2V0SW1hZ2VQaXhlbENvbG9yKHgsIHksIGNvbG9yKSB7XHJcbiAgICBub3RJbXBsZW1lbnRlZCgnc2V0SW1hZ2VQaXhlbENvbG9yJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVwYXJlcyBibGFuayBpbWFnZSBmb3Ige0BsaW5rIEltYWdlSW50ZXJmYWNlI2dldEJsYW5rfSBtZXRob2QuXHJcbiAgICpcclxuICAgKiBAYWJzdHJhY3RcclxuICAgKiBAcHJvdGVjdGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gICAqIEByZXR1cm5zIHtJbWFnZUludGVyZmFjZX1cclxuICAgKi9cclxuICBwcmVwYXJlQmxhbmsod2lkdGgsIGhlaWdodCkge1xyXG4gICAgbm90SW1wbGVtZW50ZWQoJ3ByZXBhcmVCbGFuaycpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhdmVyYWdlIGNvbG9yIG9mIHdob2xlIGltYWdlLlxyXG4gICAqXHJcbiAgICogQGFic3RyYWN0XHJcbiAgICogQHJldHVybnMge0NvbG9yfVxyXG4gICAqL1xyXG4gIGdldEF2ZXJhZ2VDb2xvcigpIHtcclxuICAgIG5vdEltcGxlbWVudGVkKCdnZXRBdmVyYWdlQ29sb3InKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgcmVzaXplZCBpbnN0YW5jZSBvZiBzZWxmLlxyXG4gICAqXHJcbiAgICogQGFic3RyYWN0XHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICAgKiBAcmV0dXJucyB7SW1hZ2VJbnRlcmZhY2V8UHJvbWlzZTxJbWFnZUludGVyZmFjZT59XHJcbiAgICovXHJcbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIG5vdEltcGxlbWVudGVkKCdyZXNpemUnKTtcclxuICB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oQWJzdHJhY3RJbWFnZS5wcm90b3R5cGUsIHZpcnR1YWxQaXhlbFRyYWl0KTtcclxuT2JqZWN0LmFzc2lnbihBYnN0cmFjdEltYWdlLnByb3RvdHlwZSwgaW50ZXJwb2xhdGlvblRyYWl0KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFic3RyYWN0SW1hZ2U7IiwiaW1wb3J0IEFic3RyYWN0SW1hZ2UgZnJvbSAnLi9hYnN0cmFjdC1pbWFnZSc7XHJcblxyXG4vKipcclxuICogSW1hZ2VJbnRlcmZhY2UgaW1wbGVtZW50YXRpb24gZm9yIGRpc3RvcnRpb24gdXNpbmcgSFRNTDUgQ2FudmFzIG9iamVjdHMuXHJcbiAqIERpc3RvcnRpb24gcmVzdWx0IHdpbGwgY29udGFpbiBuZXcgQ2FudmFzIG9iamVjdCBpbiB7QGxpbmsgbGVucy5pbWFnZS5DYW52YXMjY2FudmFzfSBwcm9wZXJ0eS5cclxuICpcclxuICogQGltcGxlbWVudHMge0ltYWdlSW50ZXJmYWNlfVxyXG4gKiBAbWVtYmVyT2YgbGVucy5pbWFnZVxyXG4gKiBAZXh0ZW5kcyBsZW5zLmltYWdlLkFic3RyYWN0SW1hZ2VcclxuICovXHJcbmNsYXNzIENhbnZhcyBleHRlbmRzIEFic3RyYWN0SW1hZ2Uge1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgc3VwZXIoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuY2FudmFzICAgICA9IGNhbnZhcztcclxuICAgIHRoaXMuaW1hZ2VEYXRhICA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5kYXRhICAgICAgID0gdGhpcy5pbWFnZURhdGEuZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0SW1hZ2VQaXhlbENvbG9yKHgsIHkpIHtcclxuICAgIGNvbnN0IG9mZnNldCA9ICh5ICogdGhpcy53aWR0aCArIHgpICogNDtcclxuXHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXHJcbiAgICAgIHRoaXMuZGF0YSxcclxuICAgICAgb2Zmc2V0LFxyXG4gICAgICBvZmZzZXQgKyA0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBzZXRJbWFnZVBpeGVsQ29sb3IoeCwgeSwgY29sb3IpIHtcclxuICAgIGNvbnN0IG9mZnNldCA9ICh5ICogdGhpcy53aWR0aCArIHgpICogNDtcclxuXHJcbiAgICBjb2xvci5mb3JFYWNoKChjaGFubmVsLCBpKSA9PiB0aGlzLmRhdGFbb2Zmc2V0ICsgaV0gPSBjaGFubmVsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcHJlcGFyZUJsYW5rKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihjYW52YXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBzeW5jKCkge1xyXG4gICAgdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5wdXRJbWFnZURhdGEodGhpcy5pbWFnZURhdGEsIDAsIDApO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRBdmVyYWdlQ29sb3IoKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IDE7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gMTtcclxuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZSh0aGlzLmNhbnZhcywgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIDEsIDEpO1xyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxyXG4gICAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5nZXRJbWFnZURhdGEoMCwgMCwgMSwgMSkuZGF0YVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGNvbnN0IGRzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgZHN0LndpZHRoID0gd2lkdGg7XHJcbiAgICBkc3QuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgZHN0LmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoZHN0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbnZhczsiLCJpbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzJztcclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGZvciB7QGxpbmsgbGVucy5pbWFnZS5DYW52YXN9IGZvciBkaXJlY3QgZGlzdG9ydGlvbiBvZiBET00gSW1hZ2Ugb2JqZWN0cy5cclxuICogRGlzdG9ydGlvbiByZXN1bHQgd2lsbCBjb250YWluIG5ldyBET00gSW1hZ2Ugb2JqZWN0IGluIHtAbGluayBsZW5zLmltYWdlLkRvbUltYWdlI2ltYWdlfSBwcm9wZXJ0eS5cclxuICpcclxuICogQGltcGxlbWVudHMge0ltYWdlSW50ZXJmYWNlfVxyXG4gKiBAbWVtYmVyT2YgbGVucy5pbWFnZVxyXG4gKiBAZXh0ZW5kcyBsZW5zLmltYWdlLkNhbnZhc1xyXG4gKi9cclxuY2xhc3MgRG9tSW1hZ2UgZXh0ZW5kcyBDYW52YXMge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtleHRlcm5hbDpJbWFnZXxIVE1MSW1hZ2VFbGVtZW50fSBpbWFnZSBET00gSW1hZ2Ugb2JqZWN0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoaW1hZ2UpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gaW1hZ2Uud2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcclxuICAgIHN1cGVyKGNhbnZhcyk7XHJcblxyXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBwcmVwYXJlQmxhbmsod2lkdGgsIGhlaWdodCkge1xyXG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKG5ldyBJbWFnZSh3aWR0aCwgaGVpZ2h0KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHN5bmMoKSB7XHJcbiAgICBzdXBlci5zeW5jKCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUodGhpcyk7XHJcblxyXG4gICAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zeW5jKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNpemVkID0gbmV3IHRoaXMuY29uc3RydWN0b3IoaW1hZ2UpO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXNpemVkKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb21JbWFnZTsiLCIvKipcclxuICogSW1hZ2UgbmFtZXNwYWNlXHJcbiAqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5pbWFnZVxyXG4gKi9cclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBBYnN0cmFjdEltYWdlfSBmcm9tICcuL2Fic3RyYWN0LWltYWdlJztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBDYW52YXN9IGZyb20gJy4vY2FudmFzJztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBEb21JbWFnZX0gZnJvbSAnLi9kb20taW1hZ2UnOyIsIi8qKlxyXG4gKiBAbmFtZXNwYWNlIGxlbnNcclxuICovXHJcblxyXG4vKipcclxuICogTGlicmFyeSB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBAcmVhZG9ubHlcclxuICogQG1lbWJlck9mIGxlbnNcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXHJcbmNvbnN0IFZFUlNJT04gPSAnMC4xLjAnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIGRpc3RvcnR9IGZyb20gJy4vZGlzdG9ydCc7XHJcblxyXG5leHBvcnQge1ZFUlNJT059O1xyXG5cclxuaW1wb3J0ICogYXMgZGlzdG9ydGVyIGZyb20gJy4vZGlzdG9ydGVyJztcclxuZXhwb3J0IHtkaXN0b3J0ZXJ9O1xyXG5cclxuaW1wb3J0ICogYXMgZGlzdG9ydGlvbiBmcm9tICcuL2Rpc3RvcnRpb24nO1xyXG5leHBvcnQge2Rpc3RvcnRpb259O1xyXG5cclxuaW1wb3J0ICogYXMgZXhjZXB0aW9uIGZyb20gJy4vZXhjZXB0aW9uJztcclxuZXhwb3J0IHtleGNlcHRpb259O1xyXG5cclxuaW1wb3J0ICogYXMgZmlsdGVyIGZyb20gJy4vZmlsdGVyJztcclxuZXhwb3J0IHtmaWx0ZXJ9O1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIGZpbHRlclByZXNldHN9IGZyb20gJy4vZmlsdGVyLXByZXNldHMnO1xyXG5cclxuaW1wb3J0ICogYXMgaW1hZ2UgZnJvbSAnLi9pbWFnZSc7XHJcbmV4cG9ydCB7aW1hZ2V9O1xyXG5cclxuaW1wb3J0ICogYXMgbWl4aW5zIGZyb20gJy4vbWl4aW5zJztcclxuZXhwb3J0IHttaXhpbnN9O1xyXG5cclxuaW1wb3J0ICogYXMgcmVzYW1wbGVyIGZyb20gJy4vcmVzYW1wbGVyJztcclxuZXhwb3J0IHtyZXNhbXBsZXJ9O1xyXG5cclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xyXG5leHBvcnQge3V0aWx9O1xyXG5cclxuaW1wb3J0IGludGVycG9sYXRpb24gZnJvbSAnLi9pbnRlcnBvbGF0aW9uJztcclxuZXhwb3J0IHtpbnRlcnBvbGF0aW9ufTtcclxuXHJcbmltcG9ydCB2cHggZnJvbSAnLi92cHgnO1xyXG5leHBvcnQge3ZweH07XHJcblxyXG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi92aWV3cG9ydCc7XHJcbmV4cG9ydCB7Vmlld3BvcnR9O1xyXG5cclxuaW1wb3J0IGRpc3RvcnRzIGZyb20gJy4vZGlzdG9ydHMnO1xyXG5leHBvcnQge2Rpc3RvcnRzfTtcclxuXHJcbmV4cG9ydCB7cmVnaXN0ZXJEaXN0b3J0aW9uUmVzb2x2ZXIsIHVucmVnaXN0ZXJEaXN0b3J0aW9uUmVzb2x2ZXJ9IGZyb20gJy4vZGlzdG9ydHMnO1xyXG5cclxuZXhwb3J0IHtcclxuICBFUFNJTE9OLFxyXG4gIE1BWElNVU1fVkFMVUUsXHJcbiAgTV9QSTIsXHJcbiAgTV8yUElcclxufSBmcm9tICcuL2NvbnN0YW50cyc7IiwiLyoqXHJcbiAqIENvbG9yIGludGVycG9sYXRpb24gbWV0aG9kcy5cclxuICpcclxuICogQHJlYWRvbmx5XHJcbiAqIEBlbnVtIHtudW1iZXJ9XHJcbiAqIEBtZW1iZXJvZiBsZW5zXHJcbiAqL1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uID0ge1xyXG4gIC8qKlxyXG4gICAqIEF2ZXJhZ2UgNCBuZWFyZXN0IG5laWdoYm91cnMuXHJcbiAgICovXHJcbiAgQVZFUkFHRTogMSxcclxuXHJcbiAgLyoqXHJcbiAgICogQXZlcmFnZSA5IG5lYXJlc3QgbmVpZ2hib3Vycy5cclxuICAgKi9cclxuICBBVkVSQUdFXzk6IDIsXHJcblxyXG4gIC8qKlxyXG4gICAqIEF2ZXJhZ2UgMTYgbmVhcmVzdCBuZWlnaGJvdXJzLlxyXG4gICAqL1xyXG4gIEFWRVJBR0VfMTY6IDMsXHJcblxyXG4gIC8qKlxyXG4gICAqIEp1c3QgcmV0dXJuIGJhY2tncm91bmQgY29sb3IuXHJcbiAgICovXHJcbiAgQkFDS0dST1VORDogNCxcclxuXHJcbiAgLyoqXHJcbiAgICogSW50ZWdlciAoZmxvb3IpIGludGVycG9sYXRpb24uXHJcbiAgICovXHJcbiAgSU5URUdFUjogOCAvLyBUT0RPOiBpbXBsZW1lbnQgYW5kIGFkZCBvdGhlciBtZXRob2RzXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcnBvbGF0aW9uOyIsImltcG9ydCBWaWV3cG9ydCBmcm9tIFwiLi4vdmlld3BvcnRcIjtcclxuXHJcbi8qKlxyXG4gKiBNaXhpbiBmb3IgY2xhc3NlcyBpbXBsZW1lbnRpbmcge0BsaW5rIERpc3RvcnRpb25JbnRlcmZhY2V9IHRoYXQgY2FuIGNhbGN1bGF0ZSBiZXN0IGZpdCB2aWV3cG9ydCB1c2luZyBmb3J3YXJkXHJcbiAqIHBpeGVsIG1hcHBpbmcgb2YgaW1hZ2UgY29ybmVycy5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMubWl4aW5zXHJcbiAqIEBtaXhpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBiZXN0IGZpdCB2aWV3cG9ydCBmb3IgZGlzdG9ydGlvbiwgdXNpbmcgZm9yd2FyZCBtYXBwaW5nIGZvciBpbWFnZSBhcGV4ZXMgKGNvcm5lcnMpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtsZW5zLlZpZXdwb3J0fSB2aWV3cG9ydFxyXG4gICAqIEByZXR1cm5zIHtsZW5zLlZpZXdwb3J0fVxyXG4gICAqL1xyXG4gIGdldEJlc3RGaXRWaWV3cG9ydCh2aWV3cG9ydCkge1xyXG4gICAgY29uc3QgdTEgPSB2aWV3cG9ydC54MSxcclxuICAgICAgdjEgPSB2aWV3cG9ydC55MSxcclxuICAgICAgdTIgPSB2aWV3cG9ydC54MiArIDEsXHJcbiAgICAgIHYyID0gdmlld3BvcnQueTIgKyAxLFxyXG4gICAgICBbeCwgeV0gPSB0aGlzLmZvcndhcmRNYXAodTEsIHYxKSxcclxuICAgICAgYmVzdEZpdCA9IG5ldyBWaWV3cG9ydCh4LCB5LCB4LCB5KTtcclxuXHJcbiAgICBbW3UyLCB2MV0sIFt1MiwgdjJdLCBbdTEsIHYyXV0uZm9yRWFjaChhcGV4ID0+IGJlc3RGaXQuZXhwYW5kKC4uLnRoaXMuZm9yd2FyZE1hcCguLi5hcGV4KSkpO1xyXG5cclxuICAgIGJlc3RGaXQuZml4Qm91bmRzKCk7XHJcblxyXG4gICAgcmV0dXJuIGJlc3RGaXQ7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlc0Jlc3RGaXRWaWV3cG9ydEZyb21BcGV4ZXM7IiwiLyoqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5taXhpbnNcclxuICovXHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGlvblRyYWl0fSBmcm9tICcuL2ludGVycG9sYXRpb24tdHJhaXQnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIHZpcnR1YWxQaXhlbFRyYWl0fSBmcm9tICcuL3ZpcnR1YWwtcGl4ZWwtdHJhaXQnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIGNyZWF0ZXNCZXN0Rml0Vmlld3BvcnRGcm9tQXBleGVzfSBmcm9tICcuL2NyZWF0ZXMtYmVzdEZpdC12aWV3cG9ydC1mcm9tLWFwZXhlcyc7IiwiaW1wb3J0IG1ldGhvZHMgZnJvbSAnLi4vaW50ZXJwb2xhdGlvbic7XHJcblxyXG4vKipcclxuICogQWRkcyBjb2xvciBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uYWxpdHkgZm9yIGNsYXNzZXMgdGhhdCBpbXBsZW1lbnQge0BsaW5rIEltYWdlSW50ZXJmYWNlfVxyXG4gKlxyXG4gKiBAbWl4aW5cclxuICogQG1lbWJlck9mIGxlbnMubWl4aW5zXHJcbiAqL1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uVHJhaXQgPSB7XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBpbnRlcnBvbGF0ZWQgcGl4ZWwgY29sb3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHBhcmFtIHtsZW5zLmludGVycG9sYXRpb259IFtpbnRlcnBvbGF0aW9uTWV0aG9kPXRoaXMuaW50ZXJwb2xhdGlvbk1ldGhvZF1cclxuICAgKiBAcmV0dXJucyB7Q29sb3J9XHJcbiAgICovXHJcbiAgZ2V0SW50ZXJwb2xhdGVkUGl4ZWxDb2xvcih4LCB5LCBpbnRlcnBvbGF0aW9uTWV0aG9kID0gdGhpcy5pbnRlcnBvbGF0aW9uTWV0aG9kKSB7XHJcbiAgICBzd2l0Y2ggKGludGVycG9sYXRpb25NZXRob2QpIHtcclxuICAgICAgY2FzZSBtZXRob2RzLkFWRVJBR0U6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGVBdmVyYWdlKHgsIHksIDIpO1xyXG4gICAgICBjYXNlIG1ldGhvZHMuQVZFUkFHRV85OlxyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVycG9sYXRlQXZlcmFnZSh4LCB5LCAzKTtcclxuICAgICAgY2FzZSBtZXRob2RzLkFWRVJBR0VfMTY6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGVBdmVyYWdlKHgsIHksIDQpO1xyXG4gICAgICBjYXNlIG1ldGhvZHMuQkFDS0dST1VORDpcclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3Iuc2xpY2UoKTtcclxuICAgICAgY2FzZSBtZXRob2RzLklOVEVHRVI6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGl4ZWxDb2xvcihNYXRoLmZsb29yKHgpLCBNYXRoLmZsb29yKHkpKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGludGVycG9sYXRlZCBjb2xvciBieSBhdmVyYWdlIG9mIG5laWdoYm9ycy5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge251bWJlcn0geVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxyXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cclxuICAgKi9cclxuICBpbnRlcnBvbGF0ZUF2ZXJhZ2UoeCwgeSwgY291bnQgPSAyKSB7XHJcbiAgICBsZXQgc3RhcnRYLCBzdGFydFk7XHJcblxyXG4gICAgc3dpdGNoIChjb3VudCkge1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgc3RhcnRYID0gTWF0aC5mbG9vcih4KTtcclxuICAgICAgICBzdGFydFkgPSBNYXRoLmZsb29yKHkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHN0YXJ0WCA9IE1hdGguZmxvb3IoeCArIDAuNSkgLSAxO1xyXG4gICAgICAgIHN0YXJ0WSA9IE1hdGguZmxvb3IoeSArIDAuNSkgLSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgc3RhcnRYID0gTWF0aC5mbG9vcih4KSAtIDE7XHJcbiAgICAgICAgc3RhcnRZID0gTWF0aC5mbG9vcih5KSAtIDE7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmFtICdjb3VudCcgbXVzdCBiZSBpbnRlZ2VyIGJldHdlZW4gMiBhbmQgNC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW5kWCA9IHN0YXJ0WCArIGNvdW50O1xyXG4gICAgY29uc3QgZW5kWSA9IHN0YXJ0WSArIGNvdW50O1xyXG4gICAgbGV0IGNvbG9yID0gWzAsIDAsIDAsIDBdO1xyXG5cclxuICAgIGZvciAobGV0IFkgPSBzdGFydFk7IFkgPCBlbmRZOyBZKyspIHtcclxuICAgICAgZm9yIChsZXQgWCA9IHN0YXJ0WDsgWCA8IGVuZFg7IFgrKykge1xyXG4gICAgICAgIHRoaXMuZ2V0UGl4ZWxDb2xvcih4LCB5KS5mb3JFYWNoKChjaGFubmVsLCBpKSA9PiBjb2xvcltpXSArPSBjaGFubmVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdhbW1hID0gMSAvIChjb3VudCAqIGNvdW50KTtcclxuXHJcbiAgICByZXR1cm4gY29sb3IubWFwKGNoYW5uZWwgPT4gTWF0aC5yb3VuZChjaGFubmVsICogZ2FtbWEpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcnBvbGF0aW9uVHJhaXQ7IiwiaW1wb3J0IHZweE1ldGhvZHMgZnJvbSAnLi4vdnB4JztcclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0geFxyXG4gKiBAcGFyYW0ge251bWJlcn0geVxyXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gKiBAcmV0dXJucyB7UG9pbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRFZGdlQ29vcmRzKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICByZXR1cm4gW1xyXG4gICAgTWF0aC5tYXgoMCwgTWF0aC5taW4od2lkdGggLSAxLCB4KSksXHJcbiAgICBNYXRoLm1heCgwLCBNYXRoLm1pbihoZWlnaHQgLSAxLCB5KSlcclxuICBdO1xyXG59XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICogQHJldHVybnMge1BvaW50fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VGlsZUNvb3Jkcyh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgbGV0IHJ4ID0geCAlIHdpZHRoLFxyXG4gICAgcnkgPSB5ICUgaGVpZ2h0O1xyXG5cclxuICByZXR1cm4gW1xyXG4gICAgcnggPCAwID8gd2lkdGggKyByeCA6IHJ4LFxyXG4gICAgcnkgPCAwID8gaGVpZ2h0ICsgcnkgOiByeVxyXG4gIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIHZpcnR1YWwgcGl4ZWwgYmVoYXZpb3IgdG8gY2xhc3NlcyB0aGF0IGltcGxlbWVudCBJbWFnZUludGVyZmFjZS5cclxuICpcclxuICogQG1peGluXHJcbiAqIEBtZW1iZXJPZiBsZW5zLm1peGluc1xyXG4gKiBAdHV0b3JpYWwgMDIuMDUudmlydHVhbC1waXhlbHMtYW5kLW1hdHRlXHJcbiAqL1xyXG5jb25zdCB2aXJ0dWFsUGl4ZWxUcmFpdCA9IHtcclxuICAvKipcclxuICAgKiBSZXR1cm5zIHZpcnR1YWwgcGl4ZWwgY29sb3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geCBJbWFnZSBYLWNvb3JkaW5hdGUgT1VUU0lERSBvZiBpbWFnZSBib3VuZHMuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgSW1hZ2UgWS1jb29yZGluYXRlIE9VVFNJREUgb2YgaW1hZ2UgYm91bmRzLlxyXG4gICAqIEBwYXJhbSB7bGVucy52cHh9IG1ldGhvZCBWaXJ0dWFsIHBpeGVsIG1ldGhvZC5cclxuICAgKiBAcmV0dXJucyB7Q29sb3J9XHJcbiAgICovXHJcbiAgZ2V0VmlydHVhbFBpeGVsQ29sb3IoeCwgeSwgbWV0aG9kKSB7XHJcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuQkFDS0dST1VORDpcclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3Iuc2xpY2UoKTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5FREdFOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEltYWdlUGl4ZWxDb2xvciguLi5nZXRFZGdlQ29vcmRzKHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSk7XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuTUlSUk9SOlxyXG4gICAgICAgIGxldCBbdHgsIHR5XSA9IGdldFRpbGVDb29yZHMoeCwgeSwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcblxyXG4gICAgICAgIGlmICh0eCA+IHRoaXMud2lkdGggLSAxKSB7XHJcbiAgICAgICAgICB0eCA9IHRoaXMud2lkdGggLSAodHggLSB0aGlzLndpZHRoKSAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHkgPiB0aGlzLmhlaWdodCAtIDEpIHtcclxuICAgICAgICAgIHR5ID0gdGhpcy5oZWlnaHQgLSAodHkgLSB0aGlzLmhlaWdodCkgLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VQaXhlbENvbG9yKHR4LCB0eSk7XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuVElMRTpcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoLi4uZ2V0VGlsZUNvb3Jkcyh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpO1xyXG5cclxuICAgICAgY2FzZSB2cHhNZXRob2RzLlRSQU5TUEFSRU5UOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuQkxBQ0s6XHJcbiAgICAgICAgcmV0dXJuIFswLCAwLCAwLCB0aGlzLnF1YW50dW1SYW5nZV07XHJcblxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuV0hJVEU6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKHRoaXMucXVhbnR1bVJhbmdlKTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5HUkFZOlxyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkoMykuZmlsbChNYXRoLnJvdW5kKHRoaXMucXVhbnR1bVJhbmdlIC8gMikpLmNvbmNhdChbdGhpcy5xdWFudHVtUmFuZ2VdKTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5IT1JJWk9OVEFMX1RJTEU6XHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5IT1JJWk9OVEFMX1RJTEVfRURHRTpcclxuICAgICAgICBpZiAoeSA8IDAgfHwgeSA+PSB0aGlzLmhlaWdodCkge1xyXG4gICAgICAgICAgcmV0dXJuIG1ldGhvZCA9PT0gdnB4TWV0aG9kcy5IT1JJWk9OVEFMX1RJTEUgPyB0aGlzLmJhY2tncm91bmRDb2xvci5zbGljZSgpXHJcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoLi4uZ2V0RWRnZUNvb3Jkcyh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VQaXhlbENvbG9yKC4uLmdldFRpbGVDb29yZHMoeCwgeSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKTtcclxuXHJcbiAgICAgIGNhc2UgdnB4TWV0aG9kcy5WRVJUSUNBTF9USUxFOlxyXG4gICAgICBjYXNlIHZweE1ldGhvZHMuVkVSVElDQUxfVElMRV9FREdFOlxyXG4gICAgICAgIGlmICh4IDwgMCB8fCB4ID49IHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgIHJldHVybiBtZXRob2QgPT09IHZweE1ldGhvZHMuVkVSVElDQUxfVElMRSA/IHRoaXMuYmFja2dyb3VuZENvbG9yLnNsaWNlKClcclxuICAgICAgICAgICAgOiB0aGlzLmdldEltYWdlUGl4ZWxDb2xvciguLi5nZXRFZGdlQ29vcmRzKHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoLi4uZ2V0VGlsZUNvb3Jkcyh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpO1xyXG5cclxuICAgICAgY2FzZSB2cHhNZXRob2RzLlJBTkRPTTpcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVBpeGVsQ29sb3IoXHJcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoKSxcclxuICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmlydHVhbFBpeGVsVHJhaXQ7IiwiaW1wb3J0IHZweCBmcm9tICcuLi92cHgnO1xyXG5pbXBvcnQgaW50ZXJwb2xhdGlvbiBmcm9tICcuLi9pbnRlcnBvbGF0aW9uJztcclxuaW1wb3J0IHtNQVhJTVVNX1ZBTFVFfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7YmxlbmRDb2xvcnN9IGZyb20gXCIuLi91dGlsL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cclxuY29uc3QgV0VJR0hUX0xPT0tVUF9UQUJMRV9XSURUSCA9IDEwMjQ7XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtGaWx0ZXJJbnRlcmZhY2V9IGZpbHRlclxyXG4gKiBAcGFyYW0ge251bWJlcn0gc3VwcG9ydFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyW119XHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZFdlaWdodExvb2t1cFRhYmxlKGZpbHRlciwgc3VwcG9ydCkge1xyXG4gIGNvbnN0IHRhYmxlID0gW107XHJcblxyXG4gIGNvbnN0IHJTY2FsZSA9IHN1cHBvcnQgKiBNYXRoLnNxcnQoMSAvIFdFSUdIVF9MT09LVVBfVEFCTEVfV0lEVEgpO1xyXG5cclxuICBmb3IgKGxldCBRID0gMDsgUSA8IFdFSUdIVF9MT09LVVBfVEFCTEVfV0lEVEg7IFErKykge1xyXG4gICAgdGFibGVbUV0gPSBmaWx0ZXIuZ2V0V2VpZ2h0KE1hdGguc3FydChRKSAqIHJTY2FsZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGFibGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICogQHBhcmFtIHF1YW50dW1SYW5nZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gY2xhbXBUb1F1YW50dW0odmFsdWUsIHF1YW50dW1SYW5nZSkge1xyXG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihxdWFudHVtUmFuZ2UsIHZhbHVlKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiA8cD5DbGFtcEVsbGlwc2VBeGVzKCkgZnVuY3Rpb24gY29udmVydHMgdGhlIGlucHV0IHZlY3RvcnMgaW50byBhIG1ham9yIGFuZFxyXG4gKiBtaW5vciBheGlzIHVuaXQgdmVjdG9ycywgYW5kIHRoZWlyIG1hZ25pdHVkZS4gIFRoaXMgYWxsb3dzIHVzIHRvXHJcbiAqIGVuc3VyZSB0aGF0IHRoZSBlbGxpcHNlIGdlbmVyYXRlZCBpcyBuZXZlciBzbWFsbGVyIHRoYW4gdGhlIHVuaXRcclxuICogY2lyY2xlIGFuZCB0aHVzIG5ldmVyIHRvbyBzbWFsbCBmb3IgdXNlIGluIEVXQSByZXNhbXBsaW5nLjwvcD5cclxuICpcclxuICogPHA+VGhpcyBwdXJlbHkgbWF0aGVtYXRpY2FsICdtYWdpYycgd2FzIHByb3ZpZGVkIGJ5IFByb2Zlc3NvciBOaWNvbGFzXHJcbiAqIFJvYmlkb3V4IGFuZCBoaXMgTWFzdGVycyBzdHVkZW50IENoYW50YWwgUmFjZXR0ZS48L3A+XHJcbiAqXHJcbiAqIDxwPlJlZmVyZW5jZTogXCJXZSBSZWNvbW1lbmQgU2luZ3VsYXIgVmFsdWUgRGVjb21wb3NpdGlvblwiLCBEYXZpZCBBdXN0aW5cclxuICogICB7QGxpbmsgaHR0cDovL3d3dy5hbXMub3JnL3NhbXBsaW5ncy9mZWF0dXJlLWNvbHVtbi9mY2FyYy1zdmR9PC9wPlxyXG4gKlxyXG4gKiA8cD5CeSBnZW5lcmF0aW5nIG1ham9yIGFuZCBtaW5vciBheGlzIHZlY3RvcnMsIHdlIGNhbiBhY3R1YWxseSB1c2UgdGhlXHJcbiAqIGVsbGlwc2UgaW4gaXRzIFwiY2Fub25pY2FsIGZvcm1cIiwgYnkgcmVtYXBwaW5nIHRoZSBkeCxkeSBvZiB0aGVcclxuICogc2FtcGxlZCBwb2ludCBpbnRvIGRpc3RhbmNlcyBhbG9uZyB0aGUgbWFqb3IgYW5kIG1pbm9yIGF4aXMgdW5pdFxyXG4gKiB2ZWN0b3JzLjwvcD5cclxuICpcclxuICogPHA+UmVmZXJlbmNlOiB7QGxpbmsgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9FbGxpcHNlI0Nhbm9uaWNhbF9mb3JtfTwvcD5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1eFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHV5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdnhcclxuICogQHBhcmFtIHtudW1iZXJ9IGR2eVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyW119XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3Jlc2FtcGxlXzhjX3NvdXJjZS5odG1sI2wwMDcwOSBDbGFtcFVwQXhlcygpIGF0IEltYWdlTWFnaWNrIHNvdXJjZX1cclxuICogQHR1dG9yaWFsIDAyLjAzLnBpeGVsLWNvbG9yLWxvb2t1cFxyXG4gKi9cclxuZnVuY3Rpb24gY2xhbXBFbGxpcHNlQXhlcyhkdXgsIGR1eSwgZHZ4LCBkdnkpIHtcclxuICAvKlxyXG4gICAqIENsYW1wVXBBeGVzIHRha2VzIGFuIGlucHV0IDJ4MiBtYXRyaXhcclxuICAgKlxyXG4gICAqIFsgYSBiIF0gPSBbIGR1eCBkdXkgXVxyXG4gICAqIFsgYyBkIF0gPSBbIGR2eCBkdnkgXVxyXG4gICAqXHJcbiAgICogYW5kIGNvbXB1dGVzIGZyb20gaXQgdGhlIG1ham9yIGFuZCBtaW5vciBheGlzIHZlY3RvcnMgW21ham9yX3gsXHJcbiAgICogbWFqb3JfeV0gYW5kIFttaW5vcl94LG1pbm9yX3ldIG9mIHRoZSBzbWFsbGVzdCBlbGxpcHNlIGNvbnRhaW5pbmdcclxuICAgKiBib3RoIHRoZSB1bml0IGRpc2sgYW5kIHRoZSBlbGxpcHNlIHdoaWNoIGlzIHRoZSBpbWFnZSBvZiB0aGUgdW5pdFxyXG4gICAqIGRpc2sgYnkgdGhlIGxpbmVhciB0cmFuc2Zvcm1hdGlvblxyXG4gICAqXHJcbiAgICogWyBkdXggZHV5IF0gW1NdID0gW3NdXHJcbiAgICogWyBkdnggZHZ5IF0gW1RdID0gW3RdXHJcbiAgICpcclxuICAgKiAoVGhlIHZlY3RvciBbUyxUXSBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgcG9zaXRpb24gaW4gb3V0cHV0XHJcbiAgICogc3BhY2UgYW5kIFtYLFldOyB0aGUgdmVjdG9yIFtzLHRdIGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYVxyXG4gICAqIHBvc2l0aW9uIGluIGlucHV0IHNwYWNlIGFuZCBbeCx5XS4pXHJcbiAgICovXHJcbiAgLypcclxuICAgKiBPdXRwdXQ6XHJcbiAgICpcclxuICAgKiBtYWpvcl9tYWcgaXMgdGhlIGhhbGYtbGVuZ3RoIG9mIHRoZSBtYWpvciBheGlzIG9mIHRoZSBcIm5ld1wiXHJcbiAgICogZWxsaXBzZS5cclxuICAgKlxyXG4gICAqIG1pbm9yX21hZyBpcyB0aGUgaGFsZi1sZW5ndGggb2YgdGhlIG1pbm9yIGF4aXMgb2YgdGhlIFwibmV3XCJcclxuICAgKiBlbGxpcHNlLlxyXG4gICAqXHJcbiAgICogbWFqb3JfdW5pdF94IGlzIHRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIG1ham9yIGF4aXMgZGlyZWN0aW9uIHZlY3RvclxyXG4gICAqIG9mIGJvdGggdGhlIFwib2xkXCIgYW5kIFwibmV3XCIgZWxsaXBzZXMuXHJcbiAgICpcclxuICAgKiBtYWpvcl91bml0X3kgaXMgdGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgbWFqb3IgYXhpcyBkaXJlY3Rpb24gdmVjdG9yLlxyXG4gICAqXHJcbiAgICogbWlub3JfdW5pdF94IGlzIHRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIG1pbm9yIGF4aXMgZGlyZWN0aW9uIHZlY3Rvci5cclxuICAgKlxyXG4gICAqIG1pbm9yX3VuaXRfeSBpcyB0aGUgeS1jb29yZGluYXRlIG9mIHRoZSBtaW5vciBheGlzIGRpcmVjdGlvbiB2ZWN0b3IuXHJcbiAgICpcclxuICAgKiBVbml0IHZlY3RvcnMgYXJlIHVzZWZ1bCBmb3IgY29tcHV0aW5nIHByb2plY3Rpb25zLCBpbiBwYXJ0aWN1bGFyLFxyXG4gICAqIHRvIGNvbXB1dGUgdGhlIGRpc3RhbmNlIGJldHdlZW4gYSBwb2ludCBpbiBvdXRwdXQgc3BhY2UgYW5kIHRoZVxyXG4gICAqIGNlbnRlciBvZiBhIHVuaXQgZGlzayBpbiBvdXRwdXQgc3BhY2UsIHVzaW5nIHRoZSBwb3NpdGlvbiBvZiB0aGVcclxuICAgKiBjb3JyZXNwb25kaW5nIHBvaW50IFtzLHRdIGluIGlucHV0IHNwYWNlLiBGb2xsb3dpbmcgdGhlIGNsYW1waW5nLFxyXG4gICAqIHRoZSBzcXVhcmUgb2YgdGhpcyBkaXN0YW5jZSBpc1xyXG4gICAqXHJcbiAgICogKCAoIHMgKiBtYWpvcl91bml0X3ggKyB0ICogbWFqb3JfdW5pdF95ICkgLyBtYWpvcl9tYWcgKV4yXHJcbiAgICogK1xyXG4gICAqICggKCBzICogbWlub3JfdW5pdF94ICsgdCAqIG1pbm9yX3VuaXRfeSApIC8gbWlub3JfbWFnICleMlxyXG4gICAqXHJcbiAgICogSWYgc3VjaCBkaXN0YW5jZXMgd2lsbCBiZSBjb21wdXRlZCBmb3IgbWFueSBbcyx0XSdzLCBpdCBtYWtlc1xyXG4gICAqIHNlbnNlIHRvIGFjdHVhbGx5IGNvbXB1dGUgdGhlIHJlY2lwcm9jYWwgb2YgbWFqb3JfbWFnIGFuZFxyXG4gICAqIG1pbm9yX21hZyBhbmQgbXVsdGlwbHkgdGhlbSBieSB0aGUgYWJvdmUgdW5pdCBsZW5ndGhzLlxyXG4gICAqXHJcbiAgICogTm93LCBpZiB5b3Ugd2FudCB0byBtb2RpZnkgdGhlIGlucHV0IHBhaXIgb2YgdGFuZ2VudCB2ZWN0b3JzIHNvXHJcbiAgICogdGhhdCBpdCBkZWZpbmVzIHRoZSBtb2RpZmllZCBlbGxpcHNlLCBhbGwgeW91IGhhdmUgdG8gZG8gaXMgc2V0XHJcbiAgICpcclxuICAgKiBuZXdkdXggPSBtYWpvcl9tYWcgKiBtYWpvcl91bml0X3hcclxuICAgKiBuZXdkdnggPSBtYWpvcl9tYWcgKiBtYWpvcl91bml0X3lcclxuICAgKiBuZXdkdXkgPSBtaW5vcl9tYWcgKiBtaW5vcl91bml0X3ggPSBtaW5vcl9tYWcgKiAtbWFqb3JfdW5pdF95XHJcbiAgICogbmV3ZHZ5ID0gbWlub3JfbWFnICogbWlub3JfdW5pdF95ID0gbWlub3JfbWFnICogIG1ham9yX3VuaXRfeFxyXG4gICAqXHJcbiAgICogYW5kIHVzZSB0aGVzZSB0YW5nZW50IHZlY3RvcnMgYXMgaWYgdGhleSB3ZXJlIHRoZSBvcmlnaW5hbCBvbmVzLlxyXG4gICAqIFVzdWFsbHksIHRoaXMgaXMgYSBkcmFzdGljIGNoYW5nZSBpbiB0aGUgdGFuZ2VudCB2ZWN0b3JzIGV2ZW4gaWZcclxuICAgKiB0aGUgc2luZ3VsYXIgdmFsdWVzIGFyZSBub3QgY2xhbXBlZDsgZm9yIGV4YW1wbGUsIHRoZSBtaW5vciBheGlzXHJcbiAgICogdmVjdG9yIGFsd2F5cyBwb2ludHMgaW4gYSBkaXJlY3Rpb24gd2hpY2ggaXMgOTAgZGVncmVlc1xyXG4gICAqIGNvdW50ZXJjbG9ja3dpc2UgZnJvbSB0aGUgZGlyZWN0aW9uIG9mIHRoZSBtYWpvciBheGlzIHZlY3Rvci5cclxuICAgKi9cclxuICAvKlxyXG4gICAqIERpc2N1c3Npb246XHJcbiAgICpcclxuICAgKiBHT0FMOiBGaXggdGhpbmdzIHNvIHRoYXQgdGhlIHB1bGxiYWNrLCBpbiBpbnB1dCBzcGFjZSwgb2YgYSBkaXNrXHJcbiAgICogb2YgcmFkaXVzIHIgaW4gb3V0cHV0IHNwYWNlIGlzIGFuIGVsbGlwc2Ugd2hpY2ggY29udGFpbnMsIGF0XHJcbiAgICogbGVhc3QsIGEgZGlzYyBvZiByYWRpdXMgci4gKE1ha2UgdGhpcyBob2xkIGZvciBhbnkgcj4wLilcclxuICAgKlxyXG4gICAqIEVTU0VOQ0UgT0YgVEhFIE1FVEhPRDogQ29tcHV0ZSB0aGUgcHJvZHVjdCBvZiB0aGUgZmlyc3QgdHdvXHJcbiAgICogZmFjdG9ycyBvZiBhbiBTVkQgb2YgdGhlIGxpbmVhciB0cmFuc2Zvcm1hdGlvbiBkZWZpbmluZyB0aGVcclxuICAgKiBlbGxpcHNlIGFuZCBtYWtlIHN1cmUgdGhhdCBib3RoIGl0cyBjb2x1bW5zIGhhdmUgbm9ybSBhdCBsZWFzdCAxLlxyXG4gICAqIEJlY2F1c2Ugcm90YXRpb25zIGFuZCByZWZsZXhpb25zIG1hcCBkaXNrcyB0byB0aGVtc2VsdmVzLCBpdCBpc1xyXG4gICAqIG5vdCBuZWNlc3NhcnkgdG8gY29tcHV0ZSB0aGUgdGhpcmQgKHJpZ2h0bW9zdCkgZmFjdG9yIG9mIHRoZSBTVkQuXHJcbiAgICpcclxuICAgKiBERVRBSUxTOiBGaW5kIHRoZSBzaW5ndWxhciB2YWx1ZXMgYW5kICh1bml0KSBsZWZ0IHNpbmd1bGFyXHJcbiAgICogdmVjdG9ycyBvZiBKaW52LCBjbGFtcGxpbmcgdXAgdGhlIHNpbmd1bGFyIHZhbHVlcyB0byAxLCBhbmRcclxuICAgKiBtdWx0aXBseSB0aGUgdW5pdCBsZWZ0IHNpbmd1bGFyIHZlY3RvcnMgYnkgdGhlIG5ldyBzaW5ndWxhclxyXG4gICAqIHZhbHVlcyBpbiBvcmRlciB0byBnZXQgdGhlIG1pbm9yIGFuZCBtYWpvciBlbGxpcHNlIGF4aXMgdmVjdG9ycy5cclxuICAgKlxyXG4gICAqIEltYWdlIHJlc2FtcGxpbmcgY29udGV4dDpcclxuICAgKlxyXG4gICAqIFRoZSBKYWNvYmlhbiBtYXRyaXggb2YgdGhlIHRyYW5zZm9ybWF0aW9uIGF0IHRoZSBvdXRwdXQgcG9pbnRcclxuICAgKiB1bmRlciBjb25zaWRlcmF0aW9uIGlzIGRlZmluZWQgYXMgZm9sbG93czpcclxuICAgKlxyXG4gICAqIENvbnNpZGVyIHRoZSB0cmFuc2Zvcm1hdGlvbiAoeCx5KSAtPiAoWCxZKSBmcm9tIGlucHV0IGxvY2F0aW9uc1xyXG4gICAqIHRvIG91dHB1dCBsb2NhdGlvbnMuIChBbnRob255IFRoeXNzZW4sIGVsc2V3aGVyZSBpbiByZXNhbXBsZS5jLFxyXG4gICAqIHVzZXMgdGhlIG5vdGF0aW9uICh1LHYpIC0+ICh4LHkpLilcclxuICAgKlxyXG4gICAqIFRoZSBKYWNvYmlhbiBtYXRyaXggb2YgdGhlIHRyYW5zZm9ybWF0aW9uIGF0ICh4LHkpIGlzIGVxdWFsIHRvXHJcbiAgICpcclxuICAgKiAgIEogPSBbIEEsIEIgXSA9IFsgZFgvZHgsIGRYL2R5IF1cclxuICAgKiAgICAgICBbIEMsIEQgXSAgIFsgZFkvZHgsIGRZL2R5IF1cclxuICAgKlxyXG4gICAqIHRoYXQgaXMsIHRoZSB2ZWN0b3IgW0EsQ10gaXMgdGhlIHRhbmdlbnQgdmVjdG9yIGNvcnJlc3BvbmRpbmcgdG9cclxuICAgKiBpbnB1dCBjaGFuZ2VzIGluIHRoZSBob3Jpem9udGFsIGRpcmVjdGlvbiwgYW5kIHRoZSB2ZWN0b3IgW0IsRF1cclxuICAgKiBpcyB0aGUgdGFuZ2VudCB2ZWN0b3IgY29ycmVzcG9uZGluZyB0byBpbnB1dCBjaGFuZ2VzIGluIHRoZVxyXG4gICAqIHZlcnRpY2FsIGRpcmVjdGlvbi5cclxuICAgKlxyXG4gICAqIEluIHRoZSBjb250ZXh0IG9mIHJlc2FtcGxpbmcsIGl0IGlzIG5hdHVyYWwgdG8gdXNlIHRoZSBpbnZlcnNlXHJcbiAgICogSmFjb2JpYW4gbWF0cml4IEppbnYgYmVjYXVzZSByZXNhbXBsaW5nIGlzIGdlbmVyYWxseSBwZXJmb3JtZWQgYnlcclxuICAgKiBwdWxsaW5nIHBpeGVsIGxvY2F0aW9ucyBpbiB0aGUgb3V0cHV0IGltYWdlIGJhY2sgdG8gbG9jYXRpb25zIGluXHJcbiAgICogdGhlIGlucHV0IGltYWdlLiBKaW52IGlzXHJcbiAgICpcclxuICAgKiAgIEppbnYgPSBbIGEsIGIgXSA9IFsgZHgvZFgsIGR4L2RZIF1cclxuICAgKiAgICAgICAgICBbIGMsIGQgXSAgIFsgZHkvZFgsIGR5L2RZIF1cclxuICAgKlxyXG4gICAqIE5vdGU6IEppbnYgY2FuIGJlIGNvbXB1dGVkIGZyb20gSiB3aXRoIHRoZSBmb2xsb3dpbmcgbWF0cml4XHJcbiAgICogZm9ybXVsYTpcclxuICAgKlxyXG4gICAqICAgSmludiA9IDEvKEEqRC1CKkMpIFsgIEQsIC1CIF1cclxuICAgKiAgICAgICAgICAgICAgICAgICAgICBbIC1DLCAgQSBdXHJcbiAgICpcclxuICAgKiBXaGF0IHdlIGRvIGlzIG1vZGlmeSBKaW52IHNvIHRoYXQgaXQgZ2VuZXJhdGVzIGFuIGVsbGlwc2Ugd2hpY2hcclxuICAgKiBpcyBhcyBjbG9zZSBhcyBwb3NzaWJsZSB0byB0aGUgb3JpZ2luYWwgYnV0IHdoaWNoIGNvbnRhaW5zIHRoZVxyXG4gICAqIHVuaXQgZGlzay4gVGhpcyBjYW4gYmUgYWNjb21wbGlzaGVkIGFzIGZvbGxvd3M6XHJcbiAgICpcclxuICAgKiBMZXRcclxuICAgKlxyXG4gICAqICAgSmludiA9IFUgU2lnbWEgVl5UXHJcbiAgICpcclxuICAgKiBiZSBhbiBTVkQgZGVjb21wb3NpdGlvbiBvZiBKaW52LiAoVGhlIFNWRCBpcyBub3QgdW5pcXVlLCBidXQgdGhlXHJcbiAgICogZmluYWwgZWxsaXBzZSBkb2VzIG5vdCBkZXBlbmQgb24gdGhlIHBhcnRpY3VsYXIgU1ZELilcclxuICAgKlxyXG4gICAqIFdlIGNvdWxkIGNsYW1wIHVwIHRoZSBlbnRyaWVzIG9mIHRoZSBkaWFnb25hbCBtYXRyaXggU2lnbWEgc29cclxuICAgKiB0aGF0IHRoZXkgYXJlIGF0IGxlYXN0IDEsIGFuZCB0aGVuIHNldFxyXG4gICAqXHJcbiAgICogICBKaW52ID0gVSBuZXdTaWdtYSBWXlQuXHJcbiAgICpcclxuICAgKiBIb3dldmVyLCB3ZSBkbyBub3QgbmVlZCB0byBjb21wdXRlIFYgZm9yIHRoZSBmb2xsb3dpbmcgcmVhc29uOlxyXG4gICAqIFZeVCBpcyBhbiBvcnRob2dvbmFsIG1hdHJpeCAodGhhdCBpcywgaXQgcmVwcmVzZW50cyBhIGNvbWJpbmF0aW9uXHJcbiAgICogb2Ygcm90YXRpb25zIGFuZCByZWZsZXhpb25zKSBzbyB0aGF0IGl0IG1hcHMgdGhlIHVuaXQgY2lyY2xlIHRvXHJcbiAgICogaXRzZWxmLiBGb3IgdGhpcyByZWFzb24sIHRoZSBleGFjdCB2YWx1ZSBvZiBWIGRvZXMgbm90IGFmZmVjdCB0aGVcclxuICAgKiBmaW5hbCBlbGxpcHNlLCBhbmQgd2UgY2FuIGNob29zZSBWIHRvIGJlIHRoZSBpZGVudGl0eVxyXG4gICAqIG1hdHJpeC4gVGhpcyBnaXZlc1xyXG4gICAqXHJcbiAgICogICBKaW52ID0gVSBuZXdTaWdtYS5cclxuICAgKlxyXG4gICAqIEluIHRoZSBlbmQsIHdlIHJldHVybiB0aGUgdHdvIGRpYWdvbmFsIGVudHJpZXMgb2YgbmV3U2lnbWFcclxuICAgKiB0b2dldGhlciB3aXRoIHRoZSB0d28gY29sdW1ucyBvZiBVLlxyXG4gICAqL1xyXG4gIC8qXHJcbiAgICogQ2xhbXBVcEF4ZXMgd2FzIHdyaXR0ZW4gYnkgTmljb2xhcyBSb2JpZG91eCBhbmQgQ2hhbnRhbCBSYWNldHRlXHJcbiAgICogb2YgTGF1cmVudGlhbiBVbml2ZXJzaXR5IHdpdGggaW5zaWdodGZ1bCBzdWdnZXN0aW9ucyBmcm9tIEFudGhvbnlcclxuICAgKiBUaHlzc2VuIGFuZCBmdW5kaW5nIGZyb20gdGhlIE5hdGlvbmFsIFNjaWVuY2UgYW5kIEVuZ2luZWVyaW5nXHJcbiAgICogUmVzZWFyY2ggQ291bmNpbCBvZiBDYW5hZGEuIEl0IGlzIGRpc3Rpbmd1aXNoZWQgZnJvbSBpdHNcclxuICAgKiBwcmVkZWNlc3NvcnMgYnkgaXRzIGVmZmljaWVudCBoYW5kbGluZyBvZiBkZWdlbmVyYXRlIGNhc2VzLlxyXG4gICAqXHJcbiAgICogVGhlIGlkZWEgb2YgY2xhbXBpbmcgdXAgdGhlIEVXQSBlbGxpcHNlJ3MgbWFqb3IgYW5kIG1pbm9yIGF4ZXMgc29cclxuICAgKiB0aGF0IHRoZSByZXN1bHQgY29udGFpbnMgdGhlIHJlY29uc3RydWN0aW9uIGtlcm5lbCBmaWx0ZXIgc3VwcG9ydFxyXG4gICAqIGlzIHRha2VuIGZyb20gQW5kcmVhcyBHdXN0YWZmc29uJ3MgTWFzdGVycyB0aGVzaXMgXCJJbnRlcmFjdGl2ZVxyXG4gICAqIEltYWdlIFdhcnBpbmdcIiwgSGVsc2lua2kgVW5pdmVyc2l0eSBvZiBUZWNobm9sb2d5LCBGYWN1bHR5IG9mXHJcbiAgICogSW5mb3JtYXRpb24gVGVjaG5vbG9neSwgNTkgcGFnZXMsIDE5OTMgKHNlZSBTZWN0aW9uIDMuNikuXHJcbiAgICpcclxuICAgKiBUaGUgdXNlIG9mIHRoZSBTVkQgdG8gY2xhbXAgdXAgdGhlIHNpbmd1bGFyIHZhbHVlcyBvZiB0aGVcclxuICAgKiBKYWNvYmlhbiBtYXRyaXggb2YgdGhlIHB1bGxiYWNrIHRyYW5zZm9ybWF0aW9uIGZvciBFV0EgcmVzYW1wbGluZ1xyXG4gICAqIGlzIHRha2VuIGZyb20gdGhlIGFzdHJvcGh5c2ljaXN0IENyYWlnIERlRm9yZXN0LiAgSXQgaXNcclxuICAgKiBpbXBsZW1lbnRlZCBpbiBoaXMgUERMOjpUcmFuc2Zvcm0gY29kZSAoUERMID0gUGVybCBEYXRhXHJcbiAgICogTGFuZ3VhZ2UpLlxyXG4gICAqL1xyXG5cclxuICBjb25zdCBhID0gZHV4O1xyXG4gIGNvbnN0IGIgPSBkdXk7XHJcbiAgY29uc3QgYyA9IGR2eDtcclxuICBjb25zdCBkID0gZHZ5O1xyXG5cclxuICAvKlxyXG4gICAqIG4gaXMgdGhlIG1hdHJpeCBKaW52ICogdHJhbnNwb3NlKEppbnYpLiBFaWdlbnZhbHVlcyBvZiBuIGFyZSB0aGVcclxuICAgKiBzcXVhcmVzIG9mIHRoZSBzaW5ndWxhciB2YWx1ZXMgb2YgSmludi5cclxuICAgKi9cclxuICBjb25zdCBhYSA9IGEgKiBhO1xyXG4gIGNvbnN0IGJiID0gYiAqIGI7XHJcbiAgY29uc3QgY2MgPSBjICogYztcclxuICBjb25zdCBkZCA9IGQgKiBkO1xyXG5cclxuICAvKlxyXG4gICAqIEVpZ2VudmVjdG9ycyBvZiBuIGFyZSBsZWZ0IHNpbmd1bGFyIHZlY3RvcnMgb2YgSmludi5cclxuICAgKi9cclxuICBjb25zdCBuMTEgPSBhYSArIGJiO1xyXG4gIGNvbnN0IG4xMiA9IGEgKiBjICsgYiAqIGQ7XHJcbiAgY29uc3QgbjIxID0gbjEyO1xyXG4gIGNvbnN0IG4yMiA9IGNjICsgZGQ7XHJcbiAgY29uc3QgZGV0ID0gYSAqIGQgLSBiICogYztcclxuICBjb25zdCB0d2ljZV9kZXQgPSBkZXQgKyBkZXQ7XHJcbiAgY29uc3QgZnJvYmVuaXVzX3NxdWFyZWQgPSBuMTEgKyBuMjI7XHJcbiAgY29uc3QgZGlzY3JpbWluYW50ID0gKGZyb2Jlbml1c19zcXVhcmVkICsgdHdpY2VfZGV0KSAqIChmcm9iZW5pdXNfc3F1YXJlZCAtIHR3aWNlX2RldCk7XHJcblxyXG4gIC8qXHJcbiAgICogSW4gZXhhY3QgYXJpdGhtZXRpYywgZGlzY3JpbWluYW50IGNhbid0IGJlIG5lZ2F0aXZlLiBJbiBmbG9hdGluZ1xyXG4gICAqIHBvaW50LCBpdCBjYW4sIGJlY2F1c2Ugb2YgdGhlIGJhZCBjb25kaXRpb25pbmcgb2YgU1ZEXHJcbiAgICogZGVjb21wb3NpdGlvbnMgZG9uZSB0aHJvdWdoIHRoZSBhc3NvY2lhdGVkIG5vcm1hbCBtYXRyaXguXHJcbiAgICovXHJcbiAgY29uc3Qgc3FydF9kaXNjcmltaW5hbnQgPSBNYXRoLnNxcnQoZGlzY3JpbWluYW50ID4gMCA/IGRpc2NyaW1pbmFudCA6IDApO1xyXG5cclxuICAvKlxyXG4gICAqIHMxIGlzIHRoZSBsYXJnZXN0IHNpbmd1bGFyIHZhbHVlIG9mIHRoZSBpbnZlcnNlIEphY29iaWFuXHJcbiAgICogbWF0cml4LiBJbiBvdGhlciB3b3JkcywgaXRzIHJlY2lwcm9jYWwgaXMgdGhlIHNtYWxsZXN0IHNpbmd1bGFyXHJcbiAgICogdmFsdWUgb2YgdGhlIEphY29iaWFuIG1hdHJpeCBpdHNlbGYuXHJcbiAgICogSWYgczEgPSAwLCBib3RoIHNpbmd1bGFyIHZhbHVlcyBhcmUgMCwgYW5kIGFueSBvcnRob2dvbmFsIHBhaXIgb2ZcclxuICAgKiBsZWZ0IGFuZCByaWdodCBmYWN0b3JzIHByb2R1Y2VzIGEgc2luZ3VsYXIgZGVjb21wb3NpdGlvbiBvZiBKaW52LlxyXG4gICAqL1xyXG4gIC8qXHJcbiAgICogSW5pdGlhbGx5LCB3ZSBvbmx5IGNvbXB1dGUgdGhlIHNxdWFyZXMgb2YgdGhlIHNpbmd1bGFyIHZhbHVlcy5cclxuICAgKi9cclxuICBjb25zdCBzMXMxID0gMC41ICogKGZyb2Jlbml1c19zcXVhcmVkICsgc3FydF9kaXNjcmltaW5hbnQpO1xyXG5cclxuICAvKlxyXG4gICAqIHMyIHRoZSBzbWFsbGVzdCBzaW5ndWxhciB2YWx1ZSBvZiB0aGUgaW52ZXJzZSBKYWNvYmlhblxyXG4gICAqIG1hdHJpeC4gSXRzIHJlY2lwcm9jYWwgaXMgdGhlIGxhcmdlc3Qgc2luZ3VsYXIgdmFsdWUgb2YgdGhlXHJcbiAgICogSmFjb2JpYW4gbWF0cml4IGl0c2VsZi5cclxuICAgKi9cclxuICBjb25zdCBzMnMyID0gMC41ICogKGZyb2Jlbml1c19zcXVhcmVkIC0gc3FydF9kaXNjcmltaW5hbnQpO1xyXG4gIGNvbnN0IHMxczFtaW51c24xMSA9IHMxczEgLSBuMTE7XHJcbiAgY29uc3QgczFzMW1pbnVzbjIyID0gczFzMSAtIG4yMjtcclxuXHJcbiAgLypcclxuICAgKiB1MSwgdGhlIGZpcnN0IGNvbHVtbiBvZiB0aGUgVSBmYWN0b3Igb2YgYSBzaW5ndWxhciBkZWNvbXBvc2l0aW9uXHJcbiAgICogb2YgSmludiwgaXMgYSAobm9uLW5vcm1hbGl6ZWQpIGxlZnQgc2luZ3VsYXIgdmVjdG9yIGNvcnJlc3BvbmRpbmdcclxuICAgKiB0byBzMS4gSXQgaGFzIGVudHJpZXMgdTExIGFuZCB1MjEuIFdlIGNvbXB1dGUgdTEgZnJvbSB0aGUgZmFjdFxyXG4gICAqIHRoYXQgaXQgaXMgYW4gZWlnZW52ZWN0b3Igb2YgbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBlaWdlbnZhbHVlXHJcbiAgICogczFeMi5cclxuICAgKi9cclxuICBjb25zdCBzMXMxbWludXNuMTFfc3F1YXJlZCA9IHMxczFtaW51c24xMSAqIHMxczFtaW51c24xMTtcclxuICBjb25zdCBzMXMxbWludXNuMjJfc3F1YXJlZCA9IHMxczFtaW51c24yMiAqIHMxczFtaW51c24yMjtcclxuXHJcbiAgLypcclxuICAgKiBUaGUgZm9sbG93aW5nIHNlbGVjdHMgdGhlIGxhcmdlc3Qgcm93IG9mIG4tczFeMiBJIGFzIHRoZSBvbmVcclxuICAgKiB3aGljaCBpcyB1c2VkIHRvIGZpbmQgdGhlIGVpZ2VudmVjdG9yLiBJZiBib3RoIHMxXjItbjExIGFuZFxyXG4gICAqIHMxXjItbjIyIGFyZSB6ZXJvLCBuLXMxXjIgSSBpcyB0aGUgemVybyBtYXRyaXguICBJbiB0aGF0IGNhc2UsXHJcbiAgICogYW55IHZlY3RvciBpcyBhbiBlaWdlbnZlY3RvcjsgaW4gYWRkaXRpb24sIG5vcm0gYmVsb3cgaXMgZXF1YWwgdG9cclxuICAgKiB6ZXJvLCBhbmQsIGluIGV4YWN0IGFyaXRobWV0aWMsIHRoaXMgaXMgdGhlIG9ubHkgY2FzZSBpbiB3aGljaFxyXG4gICAqIG5vcm0gPSAwLiBTbywgc2V0dGluZyB1MSB0byB0aGUgc2ltcGxlIGJ1dCBhcmJpdHJhcnkgdmVjdG9yIFsxLDBdXHJcbiAgICogaWYgbm9ybSA9IDAgc2FmZWx5IHRha2VzIGNhcmUgb2YgYWxsIGNhc2VzLlxyXG4gICAqL1xyXG4gIGNvbnN0IHRlbXBfdTExID0gKHMxczFtaW51c24xMV9zcXVhcmVkID49IHMxczFtaW51c24yMl9zcXVhcmVkKSA/IG4xMiA6IHMxczFtaW51c24yMjtcclxuICBjb25zdCB0ZW1wX3UyMSA9IChzMXMxbWludXNuMTFfc3F1YXJlZCA+PSBzMXMxbWludXNuMjJfc3F1YXJlZCkgPyBzMXMxbWludXNuMTEgOiBuMjE7XHJcbiAgY29uc3Qgbm9ybSA9IE1hdGguc3FydCh0ZW1wX3UxMSAqIHRlbXBfdTExICsgdGVtcF91MjEgKiB0ZW1wX3UyMSk7XHJcblxyXG4gIC8qXHJcbiAgICogRmluYWxpemUgdGhlIGVudHJpZXMgb2YgZmlyc3QgbGVmdCBzaW5ndWxhciB2ZWN0b3IgKGFzc29jaWF0ZWRcclxuICAgKiB3aXRoIHRoZSBsYXJnZXN0IHNpbmd1bGFyIHZhbHVlKS5cclxuICAgKi9cclxuICBjb25zdCB1MTEgPSBub3JtID4gMCA/IHRlbXBfdTExIC8gbm9ybSA6IDE7XHJcbiAgY29uc3QgdTIxID0gbm9ybSA+IDAgPyB0ZW1wX3UyMSAvIG5vcm0gOiAwO1xyXG5cclxuICAvKlxyXG4gICAqIENsYW1wIHRoZSBzaW5ndWxhciB2YWx1ZXMgdXAgdG8gMS5cclxuICAgKi9cclxuICBjb25zdCBtYWpvcl9tYWcgPSBzMXMxIDw9IDEgPyAxIDogTWF0aC5zcXJ0KHMxczEpO1xyXG4gIGNvbnN0IG1pbm9yX21hZyA9IHMyczIgPD0gMSA/IDEgOiBNYXRoLnNxcnQoczJzMik7XHJcblxyXG5cclxuICBjb25zdCBtYWpvcl94ID0gdTExICogbWFqb3JfbWFnO1xyXG4gIGNvbnN0IG1ham9yX3kgPSB1MjEgKiBtYWpvcl9tYWc7XHJcbiAgY29uc3QgbWlub3JfeCA9IC11MjEgKiBtaW5vcl9tYWc7XHJcbiAgY29uc3QgbWlub3JfeSA9IHUxMSAqIG1pbm9yX21hZztcclxuXHJcbiAgcmV0dXJuIFtcclxuICAgIG1ham9yX3gsXHJcbiAgICBtYWpvcl95LFxyXG4gICAgbWlub3JfeCxcclxuICAgIG1pbm9yX3ksXHJcbiAgICBtYWpvcl9tYWcsXHJcbiAgICBtaW5vcl9tYWdcclxuICBdO1xyXG59XHJcblxyXG4vKipcclxuICogRWxsaXB0aWNhbCBXZWlnaHRlZCBBdmVyYWdlLlxyXG4gKiBSZXNhbXBsZXMgcGl4ZWwgY29sb3IgdXNpbmcgRWxsaXB0aWNhbCBXZWlnaHRlZCBBdmVyYWdlIHRlY2huaXF1ZS5cclxuICpcclxuICogQGltcGxlbWVudHMge1Jlc2FtcGxlckludGVyZmFjZX1cclxuICogQG1lbWJlck9mIGxlbnMucmVzYW1wbGVyXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9kaXN0b3J0cy8jZGlzdG9ydF9ld2EgRVdBIGRldGFpbHN9IGF0IEltYWdlTWFnaWNrIGRvY3MuXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3Mi5lZWNzLmJlcmtlbGV5LmVkdS9QdWJzL1RlY2hScHRzLzE5ODkvQ1NELTg5LTUxNi5wZGYgRnVuZGFtZW50YWxzIG9mIFRleHR1cmUgTWFwcGluZyBhbmQgSW1hZ2UgV2FycGluZyBieSBQYXVsIFMuIEhlY2tiZXJ0fVxyXG4gKiBwYWdlIDQxLCBzZWN0aW9uIDMuNCwgMy41XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL3Jlc2FtcGxlXzhjX3NvdXJjZS5odG1sI2wwMTAzOCBTY2FsZVJlc2FtcGxlRmlsdGVyKCl9IGF0XHJcbiAqIEltYWdlTWFnaWNrIHNvdXJjZS5cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvcmVzYW1wbGVfOGNfc291cmNlLmh0bWwjbDAwMzE1IFJlc2FtcGxlUGl4ZWxDb2xvcigpfSBhdFxyXG4gKiBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAqL1xyXG5jbGFzcyBFV0Ege1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RmlsdGVySW50ZXJmYWNlfSBmaWx0ZXJcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihmaWx0ZXIpIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVjb25zdHJ1Y3Rpb24gZmlsdGVyLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge0ZpbHRlckludGVyZmFjZX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXNpemVGaWx0ZXIgPSBmaWx0ZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcHJhY3RpY2FsIHdvcmtpbmcgc3VwcG9ydCBvZiB0aGUgZmlsdGVyXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnN1cHBvcnQgPSB0aGlzLnJlc2l6ZUZpbHRlci5zdXBwb3J0ICogdGhpcy5yZXNpemVGaWx0ZXIuYmx1cjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hdHRlIGNvbG9yIGZvciBpbnZhbGlkIG1hcHBpbmdzLlxyXG4gICAgICogQHR5cGUge0NvbG9yfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1hdHRlQ29sb3IgPSBbMCwgMCwgMCwgMF07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb29rdXAgdGFibGUgb2Ygd2VpZ2h0cyBmb3IgZmlsdGVyZWQgYXZlcmFnZSBpbiBlbGxpcHRpY2FsIGFyZWEuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyW119XHJcbiAgICAgKi9cclxuICAgIHRoaXMud2VpZ2h0TG9va3VwVGFibGUgPSBidWlsZFdlaWdodExvb2t1cFRhYmxlKHRoaXMucmVzaXplRmlsdGVyLCB0aGlzLnN1cHBvcnQpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1hZ2UgYmVpbmcgcmVzYW1wbGVkLlxyXG4gICAgICogQHR5cGUge0ltYWdlSW50ZXJmYWNlfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3RvcnRpb24gbWFwcGVyLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge0Rpc3RvcnRpb25JbnRlcmZhY2V9XHJcbiAgICAgKi9cclxuICAgIHRoaXMubWFwcGVyID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhY2hlZCBmb3IgZGlyZWN0IGFjY2VzcyBpbWFnZSB2aXJ0dWFsIHZpZXdwb3J0LlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge2xlbnMuVmlld3BvcnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaW1hZ2VWaWV3cG9ydCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWNoZWQgaW1hZ2UgYXJlYS5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaW1hZ2VBcmVhID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhY2hlZCBmb3IgZGlyZWN0IGFjY2VzcyBpbWFnZSB2aXJ0dWFsIHBpeGVsIG1ldGhvZC5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtsZW5zLnZweH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5pbWFnZVZpcnR1YWxQaXhlbE1ldGhvZCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWNoZWQgaW1hZ2UgYXZlcmFnZSBjb2xvci5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtDb2xvcnxudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmltYWdlQXZlcmFnZUNvbG9yID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVsbGlwc2UgZXF1aWF0aW9uIEEuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLkEgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRWxsaXBzZSBlcXVhdGlvbiBCLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5CID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVsbGlwc2UgZXF1YXRpb24gQy5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuQyA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbGxpcHNlIGVxdWF0aW9uIEYuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLkYgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy51TGltaXQgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy52TGltaXQgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy51V2lkdGggPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5zbG9wZSA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIGZvciBkaXN0b3J0aW9ucyB3aXRoIGNvbnN0YW50IHBhcnRpYWwgZGVyaXZhdGl2ZXMgdG8gZmxhZyB0aGF0IGVsbGlwc2UgYWxyZWFkeSBoYXMgYmVlbiBzZXQgdXAuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5lbGxpcHNlSXNTZXRVcCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmxhZ3MgdGhhdCBlbGxpcHNlIGlzIHRvbyBsYXJnZSBhbmQgaXQgaXMgaW1wcmFjdGljYWwgdG8gcmVzYW1wbGUgY29sb3IgLS0gYmV0dGVyIHVzZSBzb21lIG9mIHBvc3NpYmxlXHJcbiAgICAgKiBvcHRpbWl6YXRpb25zLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMubGltaXRSZWFjaGVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgaW1hZ2Ugc2NhbGluZyBmYWN0b3IuXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnNjYWxpbmcgPSAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBnZXRSZXNhbXBsZWRDb2xvcih4LCB5KSB7XHJcbiAgICB4ID0geCAqIHRoaXMuc2NhbGluZztcclxuICAgIHkgPSB5ICogdGhpcy5zY2FsaW5nO1xyXG5cclxuICAgIGNvbnN0IHZhbGlkaXR5ID0gdGhpcy5tYXBwZXIuZ2V0VmFsaWRpdHkoeCwgeSwgdGhpcy5zY2FsaW5nKTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHkgPiAwKSB7XHJcbiAgICAgIGNvbnN0IFt1LCB2XSA9IHRoaXMubWFwcGVyLnJldmVyc2VNYXAoeCwgeSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5tYXBwZXIuaGFzQ29uc3RhbnRQYXJ0aWFsRGVyaXZhdGl2ZXMpIHtcclxuICAgICAgICB0aGlzLnNldHVwRWxsaXBzZU9uY2UoLi4udGhpcy5tYXBwZXIuZ2V0UGFydGlhbERlcml2YXRpdmVzKHgsIHkpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldHVwRWxsaXBzZSguLi50aGlzLm1hcHBlci5nZXRQYXJ0aWFsRGVyaXZhdGl2ZXMoeCwgeSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuZ2V0V2VpZ2h0ZWRBdmVyYWdlKHUsIHYpO1xyXG5cclxuICAgICAgaWYgKHZhbGlkaXR5IDwgMSkge1xyXG4gICAgICAgIHJldHVybiBibGVuZENvbG9ycyhjb2xvciwgdmFsaWRpdHksIHRoaXMubWF0dGVDb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5tYXR0ZUNvbG9yLnNsaWNlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHNldEltYWdlKGltYWdlKSB7XHJcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAvLyBjYWNoZSBpbWFnZSB2aWV3cG9ydCBmb3IgZmFzdGVyIGRpcmVjdCBhY2Nlc3MuXHJcbiAgICB0aGlzLmltYWdlVmlld3BvcnQgPSB0aGlzLmltYWdlLnZpZXdwb3J0O1xyXG4gICAgLy8gY2FjaGUgaW1hZ2UgYXJlYS5cclxuICAgIHRoaXMuaW1hZ2VBcmVhID0gdGhpcy5pbWFnZVZpZXdwb3J0LmFyZWEoKTtcclxuICAgIC8vIGNhY2hlIGltYWdlIHZpcnR1YWwgcGl4ZWwgbWV0aG9kICh3aWxsIGl0IGJlIGZhc3RlciBhY3R1YWxseT8pXHJcbiAgICB0aGlzLmltYWdlVmlydHVhbFBpeGVsTWV0aG9kID0gdGhpcy5pbWFnZS52aXJ0dWFsUGl4ZWxNZXRob2Q7XHJcbiAgICAvLyByZXNldCBjYWNoZWQgaW1hZ2UgYXZlcmFnZSBjb2xvclxyXG4gICAgdGhpcy5pbWFnZUF2ZXJhZ2VDb2xvciA9IG51bGw7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc2V0TWFwcGVyKG1hcHBlcikge1xyXG4gICAgaWYgKCFtYXBwZXIuaGFzUGFydGlhbERlcml2YXRpdmVzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGl4ZWwgbWFwcGVyIG11c3QgaGF2ZSBwYXJ0aWFsIGRlcml2YXRpdmVzIHRvIHVzZSB0aGlzIHJlc2FtcGxlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWFwcGVyID0gbWFwcGVyO1xyXG4gICAgdGhpcy5lbGxpcHNlSXNTZXRVcCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlcyBlbGxpcHNlIG9uY2UgZm9yIGRpc3RvcnRpb25zIHdpdGggY29uc3RhbnQgcGFydGlhbCBkZXJpdmF0aXZlcy5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIGRlcml2YXRpdmVzXHJcbiAgICogQHJldHVybnMge2xlbnMucmVzYW1wbGVyLkVXQX1cclxuICAgKi9cclxuICBzZXR1cEVsbGlwc2VPbmNlKC4uLmRlcml2YXRpdmVzKSB7XHJcbiAgICBpZiAoIXRoaXMuZWxsaXBzZUlzU2V0VXApIHtcclxuICAgICAgdGhpcy5lbGxpcHNlSXNTZXRVcCA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldHVwRWxsaXBzZSguLi5kZXJpdmF0aXZlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGVzIGVsbGlwc2UgZm9yIEVXQSByZXNhbXBsaW5nIHVzaW5nIHBhcnRpYWwgZGVyaXZhdGl2ZXMuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSBkZXJpdmF0aXZlc1xyXG4gICAqIEByZXR1cm5zIHtsZW5zLnJlc2FtcGxlci5FV0F9XHJcbiAgICovXHJcbiAgc2V0dXBFbGxpcHNlKC4uLmRlcml2YXRpdmVzKSB7XHJcbiAgICB0aGlzLmxpbWl0UmVhY2hlZCA9IGZhbHNlO1xyXG5cclxuICAgIGRlcml2YXRpdmVzID0gZGVyaXZhdGl2ZXMubWFwKGRlcml2YXRpdmUgPT4gZGVyaXZhdGl2ZSAqIHRoaXMuc2NhbGluZyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaW5pdEVsbGlwc2UoLi4uZGVyaXZhdGl2ZXMpXHJcbiAgICAgIC5zY2FsZUVsbGlwc2UoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZXMgZWxsaXBzZSBlcXVhdGlvbiBmb3IgZ2l2ZW4gZGlzdG9ydGlvbiBwYXJ0aWFsIGRlcml2YXRpdmVzLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0gZGVyaXZhdGl2ZXNcclxuICAgKiBAcmV0dXJucyB7bGVucy5yZXNhbXBsZXIuRVdBfVxyXG4gICAqL1xyXG4gIGluaXRFbGxpcHNlKC4uLmRlcml2YXRpdmVzKSB7XHJcbiAgICBjb25zdCBbXHJcbiAgICAgIG1ham9yX3gsXHJcbiAgICAgIG1ham9yX3ksXHJcbiAgICAgIG1pbm9yX3gsXHJcbiAgICAgIG1pbm9yX3ksXHJcbiAgICAgIG1ham9yX21hZyxcclxuICAgICAgbWlub3JfbWFnXHJcbiAgICBdID0gY2xhbXBFbGxpcHNlQXhlcyguLi5kZXJpdmF0aXZlcyk7XHJcblxyXG4gICAgdGhpcy5BID0gbWFqb3JfeSAqIG1ham9yX3kgKyBtaW5vcl95ICogbWlub3JfeTtcclxuICAgIHRoaXMuQiA9IC0yICogKG1ham9yX3ggKiBtYWpvcl95ICsgbWlub3JfeCAqIG1pbm9yX3kpO1xyXG4gICAgdGhpcy5DID0gbWFqb3JfeCAqIG1ham9yX3ggKyBtaW5vcl94ICogbWlub3JfeDtcclxuICAgIHRoaXMuRiA9IG1ham9yX21hZyAqIG1pbm9yX21hZztcclxuICAgIHRoaXMuRiAqPSB0aGlzLkY7XHJcblxyXG4gICAgLypcclxuICAgICAqIElmIG9uZSBvciBib3RoIG9mIHRoZSBzY2FsaW5nIHZlY3RvcnMgaXMgaW1wb3NzaWJseSBsYXJnZVxyXG4gICAgICogKHByb2R1Y2luZyBhIHZlcnkgbGFyZ2UgcmF3IEYgdmFsdWUpLCB3ZSBtYXkgYXMgd2VsbCBub3QgYm90aGVyXHJcbiAgICAgKiBkb2luZyBhbnkgZm9ybSBvZiByZXNhbXBsaW5nIHNpbmNlIHJlc2FtcGxlZCBhcmVhIGlzIHZlcnkgbGFyZ2UuXHJcbiAgICAgKiBJbiB0aGlzIGNhc2Ugc29tZSBhbHRlcm5hdGl2ZSBtZWFucyBvZiBwaXhlbCBzYW1wbGluZywgc3VjaCBhc1xyXG4gICAgICogdGhlIGF2ZXJhZ2Ugb2YgdGhlIHdob2xlIGltYWdlIGlzIG5lZWRlZCB0byBnZXQgYSByZWFzb25hYmxlXHJcbiAgICAgKiByZXN1bHQuIENhbGN1bGF0ZSBvbmx5IGFzIG5lZWRlZC5cclxuICAgICAqL1xyXG4gICAgdGhpcy5saW1pdFJlYWNoZWQgPSA0ICogdGhpcy5BICogdGhpcy5DIC0gdGhpcy5CICogdGhpcy5CID4gTUFYSU1VTV9WQUxVRTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjYWxlcyBlbGxpcHNlIHRvIG1hdGNoIGZpbHRlciBzdXBwb3J0LlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcmV0dXJucyB7bGVucy5yZXNhbXBsZXIuRVdBfVxyXG4gICAqL1xyXG4gIHNjYWxlRWxsaXBzZSgpIHtcclxuICAgIGlmICghdGhpcy5saW1pdFJlYWNoZWQpIHtcclxuICAgICAgdGhpcy5GICo9IHRoaXMuc3VwcG9ydCAqIHRoaXMuc3VwcG9ydDtcclxuICAgICAgdGhpcy51TGltaXQgPSBNYXRoLnNxcnQodGhpcy5DICogdGhpcy5GIC8gKHRoaXMuQSAqIHRoaXMuQyAtIDAuMjUgKiB0aGlzLkIgKiB0aGlzLkIpKTtcclxuICAgICAgdGhpcy52TGltaXQgPSBNYXRoLnNxcnQodGhpcy5BICogdGhpcy5GIC8gKHRoaXMuQSAqIHRoaXMuQyAtIDAuMjUgKiB0aGlzLkIgKiB0aGlzLkIpKTtcclxuICAgICAgdGhpcy51V2lkdGggPSBNYXRoLnNxcnQodGhpcy5GIC8gdGhpcy5BKTtcclxuICAgICAgdGhpcy5zbG9wZSA9IC10aGlzLkIgLyAoMiAqIHRoaXMuQSk7XHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgKiBDaGVjayB0aGUgYWJzb2x1dGUgYXJlYSBvZiB0aGUgcGFyYWxsZWxvZ3JhbSBpbnZvbHZlZC5cclxuICAgICAgICogVGhpcyBsaW1pdCBuZWVkcyBtb3JlIHdvcmssIGFzIGl0IGlzIHRvbyBzbG93IGZvciBsYXJnZXIgaW1hZ2VzXHJcbiAgICAgICAqIHdpdGggdGlsZWQgdmlld3Mgb2YgdGhlIGhvcml6b24uXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAodGhpcy51V2lkdGggKiB0aGlzLnZMaW1pdCA+IDQgKiB0aGlzLmltYWdlQXJlYSkge1xyXG4gICAgICAgIHRoaXMubGltaXRSZWFjaGVkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogU2NhbGUgZWxsaXBzZSBmb3JtdWxhIHRvIGRpcmVjdGx5IGluZGV4IHRoZSBGaWx0ZXIgTG9va3VwIFRhYmxlICovXHJcbiAgICAgIGNvbnN0IHNjYWxlID0gV0VJR0hUX0xPT0tVUF9UQUJMRV9XSURUSCAvIHRoaXMuRjtcclxuICAgICAgdGhpcy5BICo9IHNjYWxlO1xyXG4gICAgICB0aGlzLkIgKj0gc2NhbGU7XHJcbiAgICAgIHRoaXMuQyAqPSBzY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgd2VpZ2h0ZWQgYXZlcmFnZSBjb2xvciBhdCBnaXZlbiBwb2ludCB1c2luZyBzY2FsZWQgRVdBIGVsbGlwc2UuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1MFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2MFxyXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cclxuICAgKi9cclxuICBnZXRXZWlnaHRlZEF2ZXJhZ2UodTAsIHYwKSB7XHJcbiAgICBpZiAodGhpcy5kb2VzbnROZWVkUmVzYW1wbGluZyh1MCwgdjApKSB7XHJcbiAgICAgIC8qIFRoZSBhcmVhIGJlaW5nIHJlc2FtcGxlZCBpcyBzaW1wbHkgYSBzb2xpZCBjb2xvclxyXG4gICAgICAgKiBqdXN0IHJldHVybiBhIHNpbmdsZSBsb29rdXAgY29sb3IuXHJcbiAgICAgICAqL1xyXG4gICAgICByZXR1cm4gdGhpcy5pbWFnZS5nZXRQaXhlbENvbG9yKHUwLCB2MCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubGltaXRSZWFjaGVkKSB7XHJcbiAgICAgIC8vIFdoZW4gU2NhbGluZyBsaW1pdHMgcmVhY2hlZCwgcmV0dXJuIGFuICdhdmVyYWdlZCcgcmVzdWx0LlxyXG5cclxuICAgICAgc3dpdGNoICh0aGlzLmltYWdlVmlydHVhbFBpeGVsTWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSB2cHguRURHRTpcclxuICAgICAgICBjYXNlIHZweC5IT1JJWk9OVEFMX1RJTEVfRURHRTpcclxuICAgICAgICBjYXNlIHZweC5WRVJUSUNBTF9USUxFX0VER0U6XHJcbiAgICAgICAgICAvKlxyXG4gICAgICAgICAgICogV2UgbmVlZCBhbiBhdmVyYWdlIGVkZ2UgcGl4ZWwsIGZyb20gdGhlIGNvcnJlY3QgZWRnZSFcclxuICAgICAgICAgICAqIEhvdyBzaG91bGQgSSBjYWxjdWxhdGUgYW4gYXZlcmFnZSBlZGdlIGNvbG9yP1xyXG4gICAgICAgICAgICogSnVzdCByZXR1cm5pbmcgYW4gYXZlcmFnZWQgbmVpZ2hib3VyaG9vZCxcclxuICAgICAgICAgICAqIHdvcmtzIHdlbGwgaW4gZ2VuZXJhbCwgYnV0IGZhbGxzIGRvd24gZm9yIFRpbGVFZGdlIG1ldGhvZHMuXHJcbiAgICAgICAgICAgKiBUaGlzIG5lZWRzIHRvIGJlIGRvbmUgcHJvcGVybHkhISEhISFcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2UuZ2V0SW50ZXJwb2xhdGVkUGl4ZWxDb2xvcih1MCwgdjAsIGludGVycG9sYXRpb24uQVZFUkFHRSk7XHJcbiAgICAgICAgY2FzZSB2cHguSE9SSVpPTlRBTF9USUxFOlxyXG4gICAgICAgIGNhc2UgdnB4LlZFUlRJQ0FMX1RJTEU6XHJcbiAgICAgICAgICAvKlxyXG4gICAgICAgICAgKiBqdXN0IHJldHVybiB0aGUgYmFja2dyb3VuZCBwaXhlbCAtIElzIHRoZXJlIG1vcmUgZGlyZWN0IHdheT9cclxuICAgICAgICAgICovXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pbWFnZS5nZXRQaXhlbENvbG9yKFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlVmlld3BvcnQueDEgLSAxLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlVmlld3BvcnQueTEgLSAxXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZUF2ZXJhZ2VDb2xvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRpdmlzb3JNID0gMCxcclxuICAgICAgZGl2aXNvckMgPSAwLFxyXG4gICAgICByZWQgPSAwLFxyXG4gICAgICBncmVlbiA9IDAsXHJcbiAgICAgIGJsdWUgPSAwLFxyXG4gICAgICBhbHBoYSA9IDA7XHJcblxyXG4gICAgLypcclxuICAgICAqIERldGVybWluZSB0aGUgcGFyZWxsZWxvZ3JhbSBib3VuZGluZyBib3ggZml0dGVkIHRvIHRoZSBlbGxpcHNlXHJcbiAgICAgKiBjZW50ZXJlZCBhdCB1MCx2MC4gIFRoaXMgYXJlYSBpcyBib3VuZGluZyBieSB0aGUgbGluZXMuLi5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdjEgPSBNYXRoLmNlaWwodjAgLSB0aGlzLnZMaW1pdCk7XHJcbiAgICBjb25zdCB2MiA9IE1hdGguZmxvb3IodjAgKyB0aGlzLnZMaW1pdCk7XHJcblxyXG4gICAgLy8gc2NhbiBsaW5lIHN0YXJ0IGFuZCB3aWR0aCBhY2Nyb3NzIHRoZSBwYXJhbGxlbG9ncmFtXHJcbiAgICBsZXQgdTEgPSB1MCArICh2MSAtIHYwKSAqIHRoaXMuc2xvcGUgLSB0aGlzLnVXaWR0aDtcclxuICAgIGxldCB1dyA9IDIgKiB0aGlzLnVXaWR0aCArIDE7XHJcblxyXG4gICAgLypcclxuICAgICAqIERvIHdlaWdodGVkIHJlc2FtcGxpbmcgb2YgYWxsIHBpeGVscywgIHdpdGhpbiB0aGUgc2NhbGVkIGVsbGlwc2UsXHJcbiAgICAgKiBib3VuZCBieSBhIFBhcmVsbGVsb2dyYW0gZml0dGVkIHRvIHRoZSBlbGxpcHNlLlxyXG4gICAgICovXHJcblxyXG4gICAgbGV0IEREUSA9IDIgKiB0aGlzLkE7XHJcblxyXG4gICAgZm9yIChsZXQgdiA9IHYxOyB2IDwgdjI7IHYrKykge1xyXG4gICAgICBsZXQgdXN0YXJ0ID0gTWF0aC5jZWlsKHUxKTsgLy8gZmlyc3QgcGl4ZWwgaW4gc2NhbmxpbmVcclxuICAgICAgdTEgKz0gdGhpcy5zbG9wZTsgLy8gc3RhcnQgb2YgbmV4dCBzY2FuIGxpbmVcclxuICAgICAgbGV0IHVlbmQgPSB1c3RhcnQgKyB1dztcclxuXHJcbiAgICAgIC8vIGxvY2F0aW9uIG9mIHRoaXMgZmlyc3QgcGl4ZWwsIHJlbGF0aXZlIHRvIHUwLHYwXHJcbiAgICAgIGxldCBVID0gdXN0YXJ0IC0gdTA7XHJcbiAgICAgIGxldCBWID0gdiAtIHYwO1xyXG5cclxuICAgICAgLy8gUSA9IGVsbGlwc2UgcXVvdGVudCAoIGlmIFE8RiB0aGVuIHBpeGVsIGlzIGluc2lkZSBlbGxpcHNlKVxyXG4gICAgICBsZXQgUSA9ICh0aGlzLkEgKiBVICsgdGhpcy5CICogVikgKiBVICsgdGhpcy5DICogViAqIFY7XHJcbiAgICAgIGxldCBEUSA9IHRoaXMuQSAqICgyICogVSArIDEpICsgdGhpcy5CICogVjtcclxuXHJcbiAgICAgIC8vIGNvdW50IHVwIHRoZSB3ZWlnaHRlZCBwaXhlbCBjb2xvcnNcclxuICAgICAgZm9yIChsZXQgdSA9IHVzdGFydDsgdSA8IHVlbmQ7IHUrKykge1xyXG4gICAgICAgIC8vIE5vdGUgdGhhdCB0aGUgZWxsaXBzZSBoYXMgYmVlbiBwcmUtc2NhbGVkIHNvIEYgPSAkdGhpcy0+d2VpZ2h0TG9va3VwVGFibGVXaWR0aFxyXG4gICAgICAgIGlmIChRIDwgV0VJR0hUX0xPT0tVUF9UQUJMRV9XSURUSCkge1xyXG4gICAgICAgICAgbGV0IHdlaWdodCA9IHRoaXMud2VpZ2h0TG9va3VwVGFibGVbTWF0aC5mbG9vcihRKV07XHJcbiAgICAgICAgICBsZXQgW3IsIGcsIGIsIGFdID0gdGhpcy5pbWFnZS5nZXRQaXhlbENvbG9yKHUsIHYpO1xyXG4gICAgICAgICAgYWxwaGEgKz0gd2VpZ2h0ICogYTtcclxuICAgICAgICAgIGRpdmlzb3JNICs9IHdlaWdodDtcclxuXHJcbiAgICAgICAgICB3ZWlnaHQgKj0gKGEgLyB0aGlzLmltYWdlLnF1YW50dW1SYW5nZSk7XHJcblxyXG4gICAgICAgICAgcmVkICs9IHIgKiB3ZWlnaHQ7XHJcbiAgICAgICAgICBncmVlbiArPSBnICogd2VpZ2h0O1xyXG4gICAgICAgICAgYmx1ZSArPSBiICogd2VpZ2h0O1xyXG4gICAgICAgICAgZGl2aXNvckMgKz0gd2VpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUSArPSBEUTtcclxuICAgICAgICBEUSArPSBERFE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXN1bHQgc2FuaXR5IGNoZWNrIC0tIHRoaXMgc2hvdWxkIE5PVCBoYXBwZW5cclxuICAgIGlmICghZGl2aXNvckMgfHwgIWRpdmlzb3JNKSB7XHJcbiAgICAgIC8qXHJcbiAgICAgICAqIG5vdCBlbm91Z2ggcGl4ZWxzLCBvciBiYWQgd2VpZ2h0aW5nIGluIHJlc2FtcGxpbmcsXHJcbiAgICAgICAqIHJlc29ydCB0byBkaXJlY3QgaW50ZXJwb2xhdGlvblxyXG4gICAgICAgKi9cclxuICAgICAgcmV0dXJuIHRoaXMuaW1hZ2UuZ2V0SW50ZXJwb2xhdGVkUGl4ZWxDb2xvcih1MCwgdjApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIGNsYW1wVG9RdWFudHVtKE1hdGgucm91bmQocmVkIC8gZGl2aXNvckMpLCB0aGlzLmltYWdlLnF1YW50dW1SYW5nZSksXHJcbiAgICAgIGNsYW1wVG9RdWFudHVtKE1hdGgucm91bmQoZ3JlZW4gLyBkaXZpc29yQyksIHRoaXMuaW1hZ2UucXVhbnR1bVJhbmdlKSxcclxuICAgICAgY2xhbXBUb1F1YW50dW0oTWF0aC5yb3VuZChibHVlIC8gZGl2aXNvckMpLCB0aGlzLmltYWdlLnF1YW50dW1SYW5nZSksXHJcbiAgICAgIGNsYW1wVG9RdWFudHVtKE1hdGgucm91bmQoYWxwaGEgLyBkaXZpc29yTSksIHRoaXMuaW1hZ2UucXVhbnR1bVJhbmdlKVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBubyByZXNhbXBsaW5nIGlzIG5lZWRlZCAoaWYgc2luZ2xlIHBpeGVsIGNvbG9yIHNob3VsZCBiZSByZXR1cm5lZCkuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBkb2VzbnROZWVkUmVzYW1wbGluZyh1LCB2KSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuaW1hZ2VWaXJ0dWFsUGl4ZWxNZXRob2QpIHtcclxuICAgICAgY2FzZSB2cHguVFJBTlNQQVJFTlQ6XHJcbiAgICAgIGNhc2UgdnB4LkJBQ0tHUk9VTkQ6XHJcbiAgICAgIGNhc2UgdnB4LkJMQUNLOlxyXG4gICAgICBjYXNlIHZweC5XSElURTpcclxuICAgICAgY2FzZSB2cHguR1JBWTpcclxuICAgICAgICByZXR1cm4gdGhpcy5saW1pdFJlYWNoZWQgfHwgdGhpcy5vdXRPZkltYWdlQm91bmRzKHUsIHYpO1xyXG4gICAgICBjYXNlIHZweC5FREdFOlxyXG4gICAgICAgIHJldHVybiAodSArIHRoaXMudUxpbWl0IDwgdGhpcy5pbWFnZVZpZXdwb3J0LngxICYmIHYgKyB0aGlzLnZMaW1pdCA8IHRoaXMuaW1hZ2VWaWV3cG9ydC55MSkgfHxcclxuICAgICAgICAgICh1ICsgdGhpcy51TGltaXQgPCB0aGlzLmltYWdlVmlld3BvcnQueDEgJiYgdiAtIHRoaXMudkxpbWl0ID4gdGhpcy5pbWFnZVZpZXdwb3J0LnkyKSB8fFxyXG4gICAgICAgICAgKHUgLSB0aGlzLnVMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC54MiAmJiB2ICsgdGhpcy52TGltaXQgPCB0aGlzLmltYWdlVmlld3BvcnQueTEpIHx8XHJcbiAgICAgICAgICAodSAtIHRoaXMudUxpbWl0ID4gdGhpcy5pbWFnZVZpZXdwb3J0LngyICYmIHYgLSB0aGlzLnZMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC55Mik7XHJcbiAgICAgIGNhc2UgdnB4LkhPUklaT05UQUxfVElMRTpcclxuICAgICAgICByZXR1cm4gdiArIHRoaXMudkxpbWl0IDwgdGhpcy5pbWFnZVZpZXdwb3J0LnkxIHx8IHYgLSB0aGlzLnZMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC55MjtcclxuICAgICAgY2FzZSB2cHguVkVSVElDQUxfVElMRTpcclxuICAgICAgICByZXR1cm4gdSArIHRoaXMudUxpbWl0IDwgdGhpcy5pbWFnZVZpZXdwb3J0LngxIHx8IHUgLSB0aGlzLnVMaW1pdCA+IHRoaXMuaW1hZ2VWaWV3cG9ydC54MjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMYXppbGl5IHJldHVybnMgY2FjaGVkIGltYWdlIGF2ZXJhZ2UgY29sb3IuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEByZXR1cm5zIHtDb2xvcn1cclxuICAgKi9cclxuICBnZXRJbWFnZUF2ZXJhZ2VDb2xvcigpIHtcclxuICAgIGlmICh0aGlzLmltYWdlQXZlcmFnZUNvbG9yID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VBdmVyYWdlQ29sb3IgPSB0aGlzLmltYWdlLmdldEF2ZXJhZ2VDb2xvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmltYWdlQXZlcmFnZUNvbG9yLnNsaWNlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgZWxsaXBzZSBpcyBjb21wbGV0ZWx5IG91dCBvZiBpbWFnZSBib3VuZHMuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBvdXRPZkltYWdlQm91bmRzKHUsIHYpIHtcclxuICAgIHJldHVybiB1ICsgdGhpcy51TGltaXQgPCB0aGlzLmltYWdlVmlld3BvcnQueDEgfHxcclxuICAgICAgdSAtIHRoaXMudUxpbWl0ID4gdGhpcy5pbWFnZVZpZXdwb3J0LngyIHx8XHJcbiAgICAgIHYgKyB0aGlzLnZMaW1pdCA8IHRoaXMuaW1hZ2VWaWV3cG9ydC55MSB8fFxyXG4gICAgICB2IC0gdGhpcy52TGltaXQgPiB0aGlzLmltYWdlVmlld3BvcnQueTI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFV0E7IiwiLyoqXHJcbiAqIEBuYW1lc3BhY2UgbGVucy5yZXNhbXBsZXJcclxuICovXHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgUG9pbnR9IGZyb20gJy4vcG9pbnQnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0IGFzIEVXQX0gZnJvbSAnLi9lLXctYSc7IiwiaW1wb3J0IHtibGVuZENvbG9yc30gZnJvbSBcIi4uL3V0aWwvdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIDxwPntAbGluayBSZXNhbXBsZXJJbnRlcmZhY2V9IGltcGxlbWVudGFpb24gd2l0aG91dCByZXNhbXBsaW5nIGl0c2VsZi48L3A+XHJcbiAqIDxwPkl0IHVzZXMgcGl4ZWwgY29sb3IgaW50ZXJwb2xhdGlvbiBhbmQgd29ya3MgbXVjaCBmYXN0ZXIgdGhhbiB7QGxpbmsgbGVucy5yZXNhbXBsZXIuRVdBfSBidXQgcHJvZHVjZXMgYWxpYXNpbmdcclxuICogZWZmZWN0cy48L3A+XHJcbiAqIDxwPkl0IGlzIGdvb2QgZm9yIHF1aWNrIGNyZWF0aW9uIG9mIGRpc3RvcnRpb24gcHJldmlld3MgYW5kIGFsc28gdXNlZCBmb3Ige0BsaW5rIERpc3RvcnRpb25JbnRlcmZhY2V9IGltcGxlbWVudGF0aW9uc1xyXG4gKiB0aGF0IGRvZXNuJ3QgaGF2ZSBwYXJ0aWFsIGRlcml2YXRpdmVzLjwvcD5cclxuICogPHA+SXQgd29ya3MgbW9zdCBxdWlja2x5IHdoZW4ge0BsaW5rIEltYWdlSW50ZXJmYWNlfSNpbnRlcnBvbGF0aW9uTWV0aG9kIHByb3BlcnR5IGlzIHNldCB0b1xyXG4gKiB7QGxpbmsgbGVucy5pbnRlcnBvbGF0aW9uLklOVEVHRVJ9PC9wPlxyXG4gKlxyXG4gKiBAaW1wbGVtZW50cyB7UmVzYW1wbGVySW50ZXJmYWNlfVxyXG4gKiBAbWVtYmVyT2YgbGVucy5yZXNhbXBsZXJcclxuICogQHR1dG9yaWFsIDAyLjAzLnBpeGVsLWNvbG9yLWxvb2t1cFxyXG4gKi9cclxuY2xhc3MgUG9pbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubWF0dGVDb2xvciA9IFswLCAwLCAwLCAwXTtcclxuICAgIHRoaXMuc2NhbGluZyA9IDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHNldEltYWdlKGltYWdlKSB7XHJcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgc2V0TWFwcGVyKG1hcHBlcikge1xyXG4gICAgdGhpcy5tYXBwZXIgPSBtYXBwZXI7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgZ2V0UmVzYW1wbGVkQ29sb3IoeCwgeSkge1xyXG4gICAgeCA9IHggKiB0aGlzLnNjYWxpbmc7XHJcbiAgICB5ID0geSAqIHRoaXMuc2NhbGluZztcclxuXHJcbiAgICBjb25zdCB2YWxpZGl0eSA9IHRoaXMubWFwcGVyLmdldFZhbGlkaXR5KHgsIHksIHRoaXMuc2NhbGluZyk7XHJcblxyXG4gICAgaWYgKHZhbGlkaXR5ID4gMCkge1xyXG4gICAgICBsZXQgW3UsIHZdID0gdGhpcy5tYXBwZXIucmV2ZXJzZU1hcCh4LCB5KTtcclxuICAgICAgbGV0IGNvbG9yID0gdGhpcy5pbWFnZS5nZXRJbnRlcnBvbGF0ZWRQaXhlbENvbG9yKHUsIHYpO1xyXG5cclxuICAgICAgaWYgKHZhbGlkaXR5IDwgMSkge1xyXG4gICAgICAgIHJldHVybiBibGVuZENvbG9ycyhjb2xvciwgdGhpcy5tYXR0ZUNvbG9yLCB2YWxpZGl0eSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5tYXR0ZUNvbG9yLnNsaWNlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2ludDsiLCIvKipcclxuICogQG5hbWVzcGFjZSBsZW5zLnV0aWwuZ2F1c3NKb3JkYW5FbGltaW5hdGlvblxyXG4gKi9cclxuXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBHYXVzc0pvcmRhbkVsaW1pbmF0aW9ufSBmcm9tICcuL3NvbHZlcic7XHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgTGVhc3RTcXVhcmVzfSBmcm9tICcuL2xlYXN0LXNxdWFyZXMnOyIsImltcG9ydCBTb2x2ZXIgZnJvbSAnLi9zb2x2ZXInO1xyXG5cclxuLyoqXHJcbiAqIEBzdW1tYXJ5IFNvbHZlcyBzeXN0ZW0gb2YgZXF1YXRpb25zIHVzaW5nIExlYXN0IFNxdWFyZXMgbWV0aG9kLlxyXG4gKiBAbWVtYmVyT2YgbGVucy51dGlsLmdhdXNzSm9yZGFuRWxpbWluYXRpb25cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvbWF0cml4XzhjX3NvdXJjZS5odG1sI2wwMDgyOSBMZWFzdFNxdWFyZXNBZGRUZXJtcygpfSBhdFxyXG4gKiBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAqL1xyXG5jbGFzcyBMZWFzdFNxdWFyZXMgZXh0ZW5kcyBTb2x2ZXIge1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByYW5rIFRoZSByYW5rIG9yIHNpemUgb2YgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIHNxdWFyZSBtYXRyaXguXHJcbiAgICogQWxzbyB0aGUgbGVuZ3RoIG9mIHZlY3RvcnMsIGFuZCBudW1iZXIgb2YgdGVybXMgYmVpbmcgYWRkZWQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bVZlY3RvcnMgTnVtYmVyIG9mIHJlc3VsdCB2ZWN0b3JzLCBhbmQgbnVtYmVyIG9yIHJlc3VsdHMgYmVpbmdcclxuICAgKiBhZGRlZC4gIEFsc28gcmVwcmVzZW50cyB0aGUgbnVtYmVyIG9mIHNlcGFyYWJsZSBzeXN0ZW1zIG9mIGVxdWF0aW9uc1xyXG4gICAqIHRoYXQgaXMgYmVpbmcgc29sdmVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHJhbmssIG51bVZlY3RvcnMgPSAxKSB7XHJcbiAgICBjb25zdCBtYXRyaXggPSBbXTtcclxuICAgIGNvbnN0IHZlY3RvcnMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbms7IGkrKykge1xyXG4gICAgICBtYXRyaXgucHVzaChuZXcgQXJyYXkocmFuaykuZmlsbCgwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WZWN0b3JzOyBpKyspIHtcclxuICAgICAgdmVjdG9ycy5wdXNoKG5ldyBBcnJheShyYW5rKS5maWxsKDApKTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlcihtYXRyaXgsIHZlY3RvcnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBvbmUgc2V0IG9mIHRlcm1zIGFuZCBhc3NvY2lhdGUgcmVzdWx0cyB0byB0aGVcclxuICAgKiBnaXZlbiBtYXRyaXggYW5kIHZlY3RvcnMgZm9yIHNvbHZpbmcgdXNpbmcgbGVhc3Qtc3F1YXJlcyBmdW5jdGlvbiBmaXR0aW5nLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gdGVybXMgVGhlIHByZS1jYWxjdWxhdGVkIHRlcm1zICh3aXRob3V0IHRoZSB1bmtub3duIGNvZWZmaWNpZW50XHJcbiAgICogd2VpZ2h0cykgdGhhdCBmb3JtcyB0aGUgZXF1YXRpb24gYmVpbmcgYWRkZWQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gcmVzdWx0cyBUaGUgcmVzdWx0KHMpIHRoYXQgc2hvdWxkIGJlIGdlbmVyYXRlZCBmcm9tIHRoZSBnaXZlbiB0ZXJtc1xyXG4gICAqIHdlaWdodGVkIGJ5IHRoZSB5ZXQtdG8tYmUtc29sdmVkIGNvZWZmaWNpZW50cy5cclxuICAgKiBAcmV0dXJucyB7bGVucy51dGlsLmdhdXNzSm9yZGFuRWxpbWluYXRpb24uTGVhc3RTcXVhcmVzfVxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnL2FwaS9NYWdpY2tDb3JlL21hdHJpeF84Y19zb3VyY2UuaHRtbCNsMDA4MjkgTGVhc3RTcXVhcmVzQWRkVGVybXMoKX0gYXRcclxuICAgKiBJbWFnZU1hZ2ljayBzb3VyY2UuXHJcbiAgICovXHJcbiAgYWRkVGVybXModGVybXMsIHJlc3VsdHMpIHtcclxuICAgIGNvbnN0IHJhbmsgPSB0aGlzLm1hdHJpeC5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCByYW5rOyBqKyspIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5rOyBpKyspIHtcclxuICAgICAgICB0aGlzLm1hdHJpeFtpXVtqXSArPSB0ZXJtc1tpXSAqIHRlcm1zW2pdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVjdG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMudmVjdG9yc1tpXVtqXSArPSByZXN1bHRzW2ldICogdGVybXNbal07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlYXN0U3F1YXJlczsiLCJpbXBvcnQgVW5zb2x2YWJsZU1hdHJpeCBmcm9tICcuLi8uLi9leGNlcHRpb24vdW5zb2x2YWJsZS1tYXRyaXgnO1xyXG5pbXBvcnQge3BlcmNlcHRpYmxlUmVjaXByb2NhbH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcm93MVxyXG4gKiBAcGFyYW0ge251bWJlcn0gY29sMVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcm93MlxyXG4gKiBAcGFyYW0ge251bWJlcn0gY29sMlxyXG4gKi9cclxuZnVuY3Rpb24gc3dhcChhcnJheSwgcm93MSwgY29sMSwgcm93MiwgY29sMikge1xyXG4gIGlmIChhcnJheVtyb3cxXVtjb2wxXSAhPT0gYXJyYXlbcm93Ml1bY29sMl0pIHtcclxuICAgIGFycmF5W3JvdzFdW2NvbDFdICs9IGFycmF5W3JvdzJdW2NvbDJdO1xyXG4gICAgYXJyYXlbcm93Ml1bY29sMl0gPSBhcnJheVtyb3cxXVtjb2wxXSAtIGFycmF5W3JvdzJdW2NvbDJdO1xyXG4gICAgYXJyYXlbcm93MV1bY29sMV0gLT0gYXJyYXlbcm93Ml1bY29sMl07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bnNvbHZhYmxlKCkge1xyXG4gIHRocm93IG5ldyBVbnNvbHZhYmxlTWF0cml4KFwiQ2FuJ3Qgc29sdmUgZ2l2ZW4gbWF0cml4IHVzaW5nIEdhdXNzLUpvcmRhbiBtZXRob2RcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAc3VtbWFyeSBTb2x2ZXMgc3lzdGVtIG9mIGVxdWF0aW9ucyB1c2luZyBHYXVzcy1Kb3JkYW4gZWxpbWluYXRpb24uXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvbiA8cD5CcmluZ3MgdGhlIG1hdHJpeCB0byByZWR1Y2VkIHJvdyBlY2hlbG9uIGZvcm0sXHJcbiAqICB3aGlsZSBzaW11bHRhbmVvdXNseSByZWR1Y2luZyBhbmQgdGh1cyBzb2x2aW5nIHRoZSBhdWdtZW50ZWQgcmVzdWx0c1xyXG4gKiAgbWF0cml4LjwvcD5cclxuICpcclxuICogPHA+U2VlIGFsc28ge0BsaW5rIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR2F1c3MtSm9yZGFuX2VsaW1pbmF0aW9ufTwvcD5cclxuICpcclxuICpcclxuICogIDxwPk5vdGUgdGhhdCB0aGUgJ21hdHJpeCcgaXMgZ2l2ZW4gYXMgYSAnYXJyYXkgb2YgYXJyYXlzJyBvZiByYW5rIHNpemUuXHJcbiAqICBUaGF0IGlzIHZhbHVlcyBjYW4gYmUgYXNzaWduZWQgYXMgICBtYXRyaXhbcm93XVtjb2x1bW5dICAgd2hlcmUgJ3JvdycgaXNcclxuICogIHR5cGljYWxseSB0aGUgZXF1YXRpb24sIGFuZCAnY29sdW1uJyBpcyB0aGUgdGVybSBvZiB0aGUgZXF1YXRpb24uXHJcbiAqICBUaGF0IGlzIHRoZSBtYXRyaXggaXMgaW4gdGhlIGZvcm0gb2YgYSAncm93IGZpcnN0IGFycmF5Jy48L3A+XHJcbiAqXHJcbiAqICA8cD5Ib3dldmVyICd2ZWN0b3JzJyBpcyBhICdhcnJheSBvZiBhcnJheXMnIHdoaWNoIGNhbiBoYXZlIGFueSBudW1iZXJcclxuICogIG9mIGNvbHVtbnMsIHdpdGggZWFjaCBjb2x1bW4gYXJyYXkgdGhlIHNhbWUgJ3JhbmsnIHNpemUgYXMgJ21hdHJpeCcuPC9wPlxyXG4gKlxyXG4gKiAgPHA+VGhpcyBhbGxvd3MgZm9yIHNpbXBsZXIgaGFuZGxpbmcgb2YgdGhlIHJlc3VsdHMsIGVzcGVjaWFsbHkgaXMgb25seSBvbmVcclxuICogIGNvbHVtbiAndmVjdG9yJyBpcyBhbGwgdGhhdCBpcyByZXF1aXJlZCB0byBwcm9kdWNlIHRoZSBkZXNpcmVkIHNvbHV0aW9uLjwvcD5cclxuICpcclxuICogIDxwPkZvciBleGFtcGxlLCB0aGUgJ3ZlY3RvcnMnIGNhbiBjb25zaXN0IG9mIHNpbXBsZSBhcnJheSBvZlxyXG4gKiAgbnVtYmVycy4gIHdoZW4gb25seSBvbmUgc2V0IG9mIHNpbXVsdGFuZW91cyBlcXVhdGlvbnMgaXMgdG8gYmUgc29sdmVkIGZyb21cclxuICogIHRoZSBnaXZlbiBzZXQgb2YgY29lZmZpY2llbnQgd2VpZ2h0ZWQgdGVybXMuPC9wPlxyXG4gKlxyXG4gKiAgPHA+SG93ZXZlciBieSBzcGVjaWZ5aW5nIG1vcmUgJ2NvbHVtbnMnIChhcyBhbiAnYXJyYXkgb2YgdmVjdG9yIGNvbHVtbnMnLFxyXG4gKiAgeW91IGNhbiB1c2UgdGhpcyBmdW5jdGlvbiB0byBzb2x2ZSBhIHNldCBvZiAnc2VwYXJhYmxlJyBlcXVhdGlvbnMuPC9wPlxyXG4gKlxyXG4gKiAgPHA+Rm9yIGV4YW1wbGUgYSBkaXN0b3J0aW9uIGZ1bmN0aW9uIHdoZXJlICAgIDxjb2RlPnUgPSBVKHgseSkgIHYgPSBWKHgseSk8L2NvZGU+XHJcbiAqICBBbmQgdGhlIGZ1bmN0aW9ucyBVKCkgYW5kIFYoKSBoYXZlIHNlcGFyYXRlIGNvZWZmaWNpZW50cywgYnV0IGFyZSBiZWluZ1xyXG4gKiAgZ2VuZXJhdGVkIGZyb20gYSBjb21tb24geCx5LT51LHYgIGRhdGEgc2V0LjwvcD5cclxuICpcclxuICogIDxwPllvdSBjYW4gYWxzbyB1c2UgdGhlICd2ZWN0b3JzJyB0byBnZW5lcmF0ZSBhbiBpbnZlcnNlIG9mIHRoZSBnaXZlbiAnbWF0cml4J1xyXG4gKiAgdGhvdWdoIGFzIGEgJ2NvbHVtbiBmaXJzdCBhcnJheScgcmF0aGVyIHRoYW4gYSAncm93IGZpcnN0IGFycmF5Jy4gRm9yXHJcbiAqICBkZXRhaWxzIHNlZSB7QGxpbmsgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HYXVzcy1Kb3JkYW5fZWxpbWluYXRpb259PC9wPlxyXG4gKlxyXG4gKiBAbWVtYmVyT2YgbGVucy51dGlsLmdhdXNzSm9yZGFuRWxpbWluYXRpb25cclxuICpcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcmcvYXBpL01hZ2lja0NvcmUvbWF0cml4XzhjX3NvdXJjZS5odG1sI2wwMDQ4MCBHYXVzc0pvcmRhbkVsaW1pbmF0aW9uKCl9IGF0XHJcbiAqIEltYWdlTWFnaWNrIHNvdXJjZS5cclxuICovXHJcbmNsYXNzIFNvbHZlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtBcnJheTxudW1iZXJbXT59IG1hdHJpeCBTcXVhcmUgbWF0cml4IHRvIGJlIHNvbHZlZC5cclxuICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcltdPn0gdmVjdG9ycyBBdWdtZW50IHJlc3VsdHMgbWF0cml4LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG1hdHJpeCwgdmVjdG9ycykge1xyXG4gICAgdGhpcy5zb2x2ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubWF0cml4ID0gbWF0cml4Lm1hcChyb3cgPT4gcm93LnNsaWNlKCkpO1xyXG4gICAgdGhpcy52ZWN0b3JzID0gdmVjdG9ycy5tYXAodmVjdG9yID0+IHZlY3Rvci5zbGljZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNvbHZlcyBnaXZlbiBtYXRyaXguXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bGVucy51dGlsLmdhdXNzSm9yZGFuRWxpbWluYXRpb24uU29sdmVyfVxyXG4gICAqL1xyXG4gIHNvbHZlKCkge1xyXG4gICAgaWYgKHRoaXMuc29sdmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmFsaWRhdGUoKTtcclxuXHJcbiAgICBjb25zdCBtYXRyaXggPSB0aGlzLm1hdHJpeDtcclxuICAgIGNvbnN0IHZlY3RvcnMgPSB0aGlzLnZlY3RvcnM7XHJcbiAgICBjb25zdCByYW5rID0gbWF0cml4Lmxlbmd0aDtcclxuICAgIGNvbnN0IG51bVZlY3RvcnMgPSB2ZWN0b3JzLmxlbmd0aDtcclxuICAgIGNvbnN0IGNvbHMgPSBuZXcgQXJyYXkocmFuaykuZmlsbCgwKTtcclxuICAgIGNvbnN0IHJvd3MgPSBuZXcgQXJyYXkocmFuaykuZmlsbCgwKTtcclxuICAgIGNvbnN0IHBpdm90cyA9IG5ldyBBcnJheShyYW5rKS5maWxsKDApO1xyXG4gICAgbGV0IGNvbCA9IDA7XHJcbiAgICBsZXQgcm93ID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbms7IGkrKykge1xyXG4gICAgICBsZXQgbWF4ID0gMDtcclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmFuazsgaisrKSB7XHJcbiAgICAgICAgaWYgKHBpdm90c1tqXSAhPT0gMSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCByYW5rOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKHBpdm90c1trXSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIGlmIChwaXZvdHNba10gPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNvbHZhYmxlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKG1hdHJpeFtqXVtrXSkgPj0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgbWF4ID0gTWF0aC5hYnMobWF0cml4W2pdW2tdKTtcclxuICAgICAgICAgICAgICByb3cgPSBqO1xyXG4gICAgICAgICAgICAgIGNvbCA9IGs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBpdm90c1tjb2xdKys7XHJcblxyXG4gICAgICBpZiAocm93ICE9PSBjb2wpIHtcclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHJhbms7IGsrKykge1xyXG4gICAgICAgICAgc3dhcChtYXRyaXgsIHJvdywgaywgY29sLCBrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbnVtVmVjdG9yczsgaysrKSB7XHJcbiAgICAgICAgICBzd2FwKHZlY3RvcnMsIGssIHJvdywgaywgY29sKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvd3NbaV0gPSByb3c7XHJcbiAgICAgIGNvbHNbaV0gPSBjb2w7XHJcblxyXG4gICAgICBpZiAobWF0cml4W2NvbF1bY29sXSA9PT0gMCkge1xyXG4gICAgICAgIHVuc29sdmFibGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHNjYWxlID0gcGVyY2VwdGlibGVSZWNpcHJvY2FsKG1hdHJpeFtjb2xdW2NvbF0pO1xyXG4gICAgICBtYXRyaXhbY29sXVtjb2xdID0gMTtcclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmFuazsgaisrKSB7XHJcbiAgICAgICAgbWF0cml4W2NvbF1bal0gKj0gc2NhbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtVmVjdG9yczsgaisrKSB7XHJcbiAgICAgICAgdmVjdG9yc1tqXVtjb2xdICo9IHNjYWxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJhbms7IGorKykge1xyXG4gICAgICAgIGlmIChqICE9PSBjb2wpIHtcclxuICAgICAgICAgIGxldCBzY2FsZSA9IG1hdHJpeFtqXVtjb2xdO1xyXG4gICAgICAgICAgbWF0cml4W2pdW2NvbF0gPSAwO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcmFuazsgaysrKSB7XHJcbiAgICAgICAgICAgIG1hdHJpeFtqXVtrXSAtPSBzY2FsZSAqIG1hdHJpeFtjb2xdW2tdO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbnVtVmVjdG9yczsgaysrKSB7XHJcbiAgICAgICAgICAgIHZlY3RvcnNba11bal0gLT0gc2NhbGUgKiB2ZWN0b3JzW2tdW2NvbF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IHJhbmsgLSAxOyBqID49IDA7IGotLSkge1xyXG4gICAgICBpZiAoY29sc1tqXSAhPT0gcm93c1tqXSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuazsgaSsrKSB7XHJcbiAgICAgICAgICBzd2FwKG1hdHJpeCwgaSwgcm93c1tqXSwgaSwgY29sc1tqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zb2x2ZWQgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhdWdtZW50IG1hdHJpeCAocmVzdWx0cylcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtBcnJheS48bnVtYmVyW10+fVxyXG4gICAqL1xyXG4gIGdldFZlY3RvcnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52ZWN0b3JzLm1hcCh2ZWN0b3IgPT4gdmVjdG9yLnNsaWNlKCkpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlcyBtYXRyaXggYW5kIHZlY3RvcnMuXHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqIEByZXR1cm5zIHtsZW5zLnV0aWwuZ2F1c3NKb3JkYW5FbGltaW5hdGlvbi5Tb2x2ZXJ9XHJcbiAgICovXHJcbiAgdmFsaWRhdGUoKSB7XHJcbiAgICBjb25zdCByYW5rID0gdGhpcy5tYXRyaXgubGVuZ3RoO1xyXG5cclxuICAgIHRoaXMubWF0cml4LmZvckVhY2gocm93ID0+IHtcclxuICAgICAgaWYgKHJvdy5sZW5ndGggIT09IHJhbmspIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBtdXN0IGJlIHNxdWFyZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnZlY3RvcnMuZm9yRWFjaCh2ZWN0b3IgPT4ge1xyXG4gICAgICBpZiAodmVjdG9yLmxlbmd0aCAhPT0gcmFuaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVmVjdG9ycyBtdXN0IGJlIHRoZSBzYW1lIGxlbmd0aCBhcyBtYXRyaXggcmFuaycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvbHZlcjsiLCIvKipcclxuICogQG5hbWVzcGFjZSBsZW5zLnV0aWxcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBnYXVzc0pvcmRhbkVsaW1pbmF0aW9uIGZyb20gJy4vZ2F1c3Mtam9yZGFuLWVsaW1pbmF0aW9uJztcclxuXHJcbmV4cG9ydCB7Z2F1c3NKb3JkYW5FbGltaW5hdGlvbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGJsZW5kQ29sb3JzLFxyXG4gIHBlcmNlcHRpYmxlUmVjaXByb2NhbCxcclxuICBkZWcycmFkLFxyXG4gIHJhZDJkZWdcclxufSBmcm9tICcuL3V0aWwnOyIsImltcG9ydCB7RVBTSUxPTn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiAxL3ggd2hlcmUgeCBpcyBwZXJjZXB0aWJsZSAobm90IHVubGltaXRlZCBvciBpbmZpbml0ZXNpbWFsKS5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMudXRpbFxyXG4gKiBAcGFyYW0ge251bWJlcn0geFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2ltYWdlbWFnaWNrLm9yZy9hcGkvTWFnaWNrQ29yZS9waXhlbC1hY2Nlc3Nvcl84aF9zb3VyY2UuaHRtbCNsMDAyMzQgUGVyY2VwdGlibGVSZWNpcHJvY2FsKCl9XHJcbiAqIGF0IEltYWdlTWFnaWNrIHNvdXJjZS5cclxuICovXHJcbmZ1bmN0aW9uIHBlcmNlcHRpYmxlUmVjaXByb2NhbCh4KSB7XHJcbiAgY29uc3Qgc2lnbiA9IHggPCAwID8gLTEgOiAxO1xyXG5cclxuICBpZiAoc2lnbiAqIHggPj0gRVBTSUxPTikge1xyXG4gICAgcmV0dXJuIDEgLyB4O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNpZ24gLyBFUFNJTE9OO1xyXG59XHJcblxyXG4vKipcclxuICogQmxlbmRzIHR3byBjb2xvcnMgYnkgZ2l2ZW4gd2VpZ2h0cy5cclxuICpcclxuICogQG1lbWJlck9mIGxlbnMudXRpbFxyXG4gKiBAcGFyYW0ge0NvbG9yfSBjb2xvcjEgRmlyc3QgY29sb3IgdG8gYmxlbmQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3ZWlnaHQxIEZpcnN0IGNvbG9yJ3Mgd2VpZ2h0LlxyXG4gKiBAcGFyYW0ge0NvbG9yfSBjb2xvcjIgU2Vjb25kIGNvbG9yIHRvIGJsZW5kLlxyXG4gKiBAcGFyYW0ge251bWJlcnxudWxsfSBbd2VpZ2h0Ml0gU2Vjb25kIGNvbG9yJ3Mgd2VpZ2h0LiBJZiBub3QgcGFzc2VkIC0tIHdpbGwgYmUgY2FsY3VsYXRlZCBhcyAxIC0gd2VpZ2h0MS5cclxuICogQHJldHVybnMge0NvbG9yfSBDb2xvciBibGVuZGluZyByZXN1bHQuXHJcbiAqL1xyXG5mdW5jdGlvbiBibGVuZENvbG9ycyhjb2xvcjEsIHdlaWdodDEsIGNvbG9yMiwgd2VpZ2h0MiA9IG51bGwpIHtcclxuICBpZiAod2VpZ2h0MiA9PT0gbnVsbCkge1xyXG4gICAgd2VpZ2h0MiA9IDEgLSB3ZWlnaHQxO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbG9yMS5tYXAoKGNoYW5uZWwsIGkpID0+IE1hdGgucm91bmQoY2hhbm5lbCAqIHdlaWdodDEgKyBjb2xvcjJbaV0gKiB3ZWlnaHQyKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyByYWRpYW5zIHRvIGRlZ3JlZXNcclxuICpcclxuICogQG1lbWJlck9mIGxlbnMudXRpbFxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFuc1xyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gcmFkMmRlZyhyYWRpYW5zKSB7XHJcbiAgcmV0dXJuIDE4MCAqIHJhZGlhbnMgLyBNYXRoLlBJO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgZGVncmVlcyB0byByYWRpYW5zXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zLnV0aWxcclxuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXNcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIGRlZzJyYWQoZGVncmVlcykge1xyXG4gIHJldHVybiBNYXRoLlBJICogZGVncmVlcyAvIDE4MDtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBibGVuZENvbG9ycyxcclxuICBwZXJjZXB0aWJsZVJlY2lwcm9jYWwsXHJcbiAgcmFkMmRlZyxcclxuICBkZWcycmFkXHJcbn07IiwiLyoqXHJcbiAqIEBzdW1tYXJ5IFZpcnR1YWwgdmlld3BvcnQgY2xhc3MuXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvbiBSZXByZXNlbnRzIGltYWdlJ3MgdmlydHVhbCBwb3NpdGlvbiBhdCBpdCdzIGNvb3JkaW5hdGUgc3BhY2UuXHJcbiAqXHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9iYXNpY3MvI3BhZ2UgVmlydHVhbCBjYW52YXMgb2Zmc2V0fSBhdCBJbWFnZU1hZ2ljayBkb2NzLlxyXG4gKiBAdHV0b3JpYWwgMDIuMDYudmlydHVhbC12aWV3cG9ydFxyXG4gKi9cclxuY2xhc3MgVmlld3BvcnQge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHgxIExlZnQgZWRnZSBjb29yZGluYXRlIG9mIHZpZXdwb3J0LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5MSBUb3AgZWRnZSBjb29yZGluYXRlICBvZiB2aWV3cG9ydC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geDIgUmlnaHQgZWRnZSBjb29yZGluYXRlIG9mIHZpZXdwb3J0LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5MiBCb3R0b20gZWRnZSBjb29yZGluYXRlIG9mIHZpZXdwb3J0LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAvKipcclxuICAgICAqIExlZnQgZWRnZSBjb29yZGluYXRlIG9mIHZpZXdwb3J0LlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMueDEgPSB4MTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRvcCBlZGdlIGNvb3JkaW5hdGUgb2Ygdmlld3BvcnQuXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnkxID0geTE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSaWdodCBlZGdlIGNvb3JkaW5hdGUgb2Ygdmlld3BvcnQuXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLngyID0geDI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCb3R0b20gZWRnZSBjb29yZGluYXRlIG9mIHZpZXdwb3J0LlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy55MiA9IHkyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB2aXJ0dWFsIHZpZXdwb3J0IHdpZHRoIC0tIHNhbWUgYXMgaW1hZ2UgYWN0dWFsIHdpZHRoLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICB3aWR0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLngyIC0gdGhpcy54MSArIDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHZpcnR1YWwgdmlld3BvcnQgaGVpZ2h0IC0tIHNhbWUgYXMgaW1hZ2UgYWN0dWFsIGhlaWdodC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMueTIgLSB0aGlzLnkxICsgMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdmlld3BvcnQgYXJlYS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgYXJlYSgpIHtcclxuICAgIHJldHVybiB0aGlzLndpZHRoKCkgKiB0aGlzLmhlaWdodCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHZpZXdwb3J0IGNvbnRhaW5zIGdpdmVuIGNvb3Jkcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBjb250YWlucyh4LCB5KSB7XHJcbiAgICByZXR1cm4geCA+PSB0aGlzLngxICYmIHggPD0gdGhpcy54MiAmJiB5ID49IHRoaXMueTEgJiYgeSA8PSB0aGlzLnkyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXhwYW5kcyB2aWV3cG9ydCB0byBjb250YWluIGdpdmVuIGNvb3Jkcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICAgKiBAcmV0dXJucyB7bGVucy5WaWV3cG9ydH1cclxuICAgKi9cclxuICBleHBhbmQoeCwgeSkge1xyXG4gICAgdGhpcy54MSA9IE1hdGgubWluKHRoaXMueDEsIHgpO1xyXG4gICAgdGhpcy54MiA9IE1hdGgubWF4KHRoaXMueDIsIHgpO1xyXG4gICAgdGhpcy55MSA9IE1hdGgubWluKHRoaXMueTEsIHkpO1xyXG4gICAgdGhpcy55MiA9IE1hdGgubWF4KHRoaXMueTIsIHkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbG9uZXMgdmlld3BvcnQgaW50byBuZXcgaW5zdGFuY2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bGVucy5WaWV3cG9ydH1cclxuICAgKi9cclxuICBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLngxLCB0aGlzLnkxLCB0aGlzLngyLCB0aGlzLnkyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpeCBib3VuZHMgYWZ0ZXIgYmVzdCBmaXQgdmlld3BvcnQgY2FsY3VsYXRpb24uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bGVucy5WaWV3cG9ydH1cclxuICAgKi9cclxuICBmaXhCb3VuZHMoKSB7XHJcbiAgICB0aGlzLngxID0gTWF0aC5mbG9vcih0aGlzLngxIC0gMC41KTtcclxuICAgIHRoaXMueTEgPSBNYXRoLmZsb29yKHRoaXMueTEgLSAwLjUpO1xyXG4gICAgdGhpcy54MiA9IE1hdGguY2VpbCh0aGlzLngyIC0gMC41KTtcclxuICAgIHRoaXMueTIgPSBNYXRoLmNlaWwodGhpcy55MiAtIDAuNSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjYWxlcyB2aWV3cG9ydCBib3VuZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVcclxuICAgKiBAcmV0dXJucyB7bGVucy5WaWV3cG9ydH1cclxuICAgKi9cclxuICBzY2FsZShzY2FsZSkge1xyXG4gICAgdGhpcy54MSA9IE1hdGgucm91bmQodGhpcy54MSAqIHNjYWxlKTtcclxuICAgIHRoaXMueTEgPSBNYXRoLnJvdW5kKHRoaXMueTEgKiBzY2FsZSk7XHJcbiAgICB0aGlzLngyID0gTWF0aC5yb3VuZCh0aGlzLngyICogc2NhbGUpO1xyXG4gICAgdGhpcy55MiA9IE1hdGgucm91bmQodGhpcy55MiAqIHNjYWxlKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXRzIHZpZXdwb3J0IG9mZnNldC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtsZW5zLlZpZXdwb3J0fVxyXG4gICAqL1xyXG4gIHJlc2V0KCkge1xyXG4gICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aCgpLFxyXG4gICAgICAgIGhlaWdodCA9IHRoaXMuaGVpZ2h0KCk7XHJcbiAgICB0aGlzLngxID0gMDtcclxuICAgIHRoaXMueTEgPSAwO1xyXG4gICAgdGhpcy54MiA9IHRoaXMueDEgKyB3aWR0aCAtIDE7XHJcbiAgICB0aGlzLnkyID0gdGhpcy55MSArIGhlaWdodCAtIDE7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdmlld3BvcnQgb2Zmc2V0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHJldHVybnMge2xlbnMuVmlld3BvcnR9XHJcbiAgICovXHJcbiAgb2Zmc2V0KHgsIHkpIHtcclxuICAgIHRoaXMueDEgKz0geDtcclxuICAgIHRoaXMueTEgKz0geTtcclxuICAgIHRoaXMueDIgKz0geDtcclxuICAgIHRoaXMueTIgKz0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlld3BvcnQ7IiwiLyoqXHJcbiAqIFZpcnR1YWwgcGl4ZWwgbWV0aG9kcy5cclxuICpcclxuICogQHJlYWRvbmx5XHJcbiAqIEBlbnVtIHtudW1iZXJ9XHJcbiAqIEBtZW1iZXJPZiBsZW5zXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LmltYWdlbWFnaWNrLm9yZy9Vc2FnZS9taXNjLyN2aXJ0dWFsLXBpeGVsIFZpcnR1YWwgcGl4ZWwgZGV0YWlsc30gYXQgSW1hZ2VNYWdpY2sgZG9jcy5cclxuICogQHR1dG9yaWFsIDAyLjA1LnZpcnR1YWwtcGl4ZWxzLWFuZC1tYXR0ZVxyXG4gKi9cclxuY29uc3QgdnB4ID0ge1xyXG4gIC8qKlxyXG4gICAqIFVzZSBpbWFnZSBiYWNrZ3JvdW5kIGNvbG9yLlxyXG4gICAqL1xyXG4gIEJBQ0tHUk9VTkQ6IDEsXHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3Nlc3QgZWRnZSBjb2xvci5cclxuICAgKi9cclxuICBFREdFOiAzLFxyXG5cclxuICAvKipcclxuICAgKiBNaXJyb3IgZWZmZWN0LlxyXG4gICAqL1xyXG4gIE1JUlJPUjogNCxcclxuXHJcbiAgLyoqXHJcbiAgICogUmFuZG9tIGNvbG9yIGZyb20gaW1hZ2UuXHJcbiAgICovXHJcbiAgUkFORE9NOiA1LFxyXG5cclxuICAvKipcclxuICAgKiBUaWxlIGVmZmVjdC5cclxuICAgKi9cclxuICBUSUxFOiA2LFxyXG5cclxuICAvKipcclxuICAgKiBUcmFuc3BhcmVudCBjb2xvci5cclxuICAgKi9cclxuICBUUkFOU1BBUkVOVDogNyxcclxuXHJcbiAgLyoqXHJcbiAgICogQmxhY2sgY29sb3IuXHJcbiAgICovXHJcbiAgQkxBQ0s6IDksXHJcblxyXG4gIC8qKlxyXG4gICAqIEdyYXkgY29sb3IuXHJcbiAgICovXHJcbiAgR1JBWTogMTAsXHJcblxyXG4gIC8qKlxyXG4gICAqIFdoaXRlIGNvbG9yLlxyXG4gICAqL1xyXG4gIFdISVRFOiAxMSxcclxuXHJcbiAgLyoqXHJcbiAgICogVGlsZSBlZmZlY3QgaG9yaXpvbnRhbGx5LCBiYWNrZ3JvdW5kIGNvbG9yIHZlcnRpY2FsbHkuXHJcbiAgICovXHJcbiAgSE9SSVpPTlRBTF9USUxFOiAxMixcclxuXHJcbiAgLyoqXHJcbiAgICogVGlsZSBlZmZlY3QgdmVydGljYWxseSwgYmFja2dyb3VuZCBjb2xvciBob3Jpem9udGFsbHkuXHJcbiAgICovXHJcbiAgVkVSVElDQUxfVElMRTogMTMsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRpbGUgZWZmZWN0IGhvcml6b250YWxseSwgY2xvc2VzdCBlZGdlIGNvbG9yIHZlcnRpY2FsbHkuXHJcbiAgICovXHJcbiAgSE9SSVpPTlRBTF9USUxFX0VER0U6IDE0LFxyXG5cclxuICAvKipcclxuICAgKiBUaWxlIGVmZmVjdCB2ZXJ0aWNhbGx5LCBjbG9zZXN0IGVkZ2UgY29sb3IgaG9yaXpvbnRhbGx5LlxyXG4gICAqL1xyXG4gIFZFUlRJQ0FMX1RJTEVfRURHRTogMTVcclxuXHJcbiAgLy8gVE9ETzogaW1wbGVtZW50IGFuZCBhZGQgQ2hlY2tlciB0aWxlIGFuIGRpdGhlciBtZXRob2RzXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2cHg7Il0sInNvdXJjZVJvb3QiOiIifQ==