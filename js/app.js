/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/chunks/" + ({"playground":"playground"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/app.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/app-layout.vue?vue&type=template&id=31c8f702&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/app-layout.vue?vue&type=template&id=31c8f702& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
    "VApp",
    [
      _c(
        "VNavigationDrawer",
        {
          attrs: { app: "", clipped: "", temporary: "" },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "VList",
            { attrs: { dense: "" } },
            _vm._l(_vm.menuItems, function(ref) {
              var title = ref.title
              var to = ref.to
              var icon = ref.icon
              var href = ref.href
              var target = ref.target
              return _c(
                "VListItem",
                {
                  key: title,
                  attrs: {
                    to: to,
                    href: href,
                    target: target,
                    link: "",
                    exact: ""
                  }
                },
                [
                  icon
                    ? _c(
                        "VListItemAction",
                        [_c("VIcon", [_vm._v(_vm._s(icon))])],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "VListItemContent",
                    [_c("VListItemTitle", [_vm._v(_vm._s(title))])],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "VAppBar",
        { attrs: { app: "", "clipped-left": "" } },
        [
          _c("VAppBarNavIcon", {
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.drawer = !_vm.drawer
              }
            }
          }),
          _vm._v(" "),
          _c(
            "RouterLink",
            {
              staticClass: "d-flex align-center",
              attrs: { to: { path: "/" } }
            },
            [
              _c("VImg", {
                attrs: {
                  src: __webpack_require__(/*! ../../img/lens-logo-96x96.png */ "./src/img/lens-logo-96x96.png").default,
                  alt: "Lens Logo",
                  height: "48",
                  width: "48"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("VToolbarTitle", { staticClass: "ml-2" }, [
            _vm._v("\n            LENS "),
            _c("small", [_vm._v(_vm._s(_vm.$route.meta.subtitle))])
          ]),
          _vm._v(" "),
          _c("VSpacer")
        ],
        1
      ),
      _vm._v(" "),
      _c("VContent", [_c("RouterView")], 1),
      _vm._v(" "),
      _c("VFooter", { attrs: { app: "" } }, [
        _c("span", { staticClass: "grey--text body-2" }, [
          _vm._v("© Alexander Alexandrov (alxcube) 2020")
        ])
      ]),
      _vm._v(" "),
      _c(
        "VSnackbar",
        {
          attrs: { color: "error", top: "" },
          model: {
            value: _vm.showErrorMessage,
            callback: function($$v) {
              _vm.showErrorMessage = $$v
            },
            expression: "showErrorMessage"
          }
        },
        [_vm._v("\n        " + _vm._s(_vm.errorMessage) + "\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/home/index.vue?vue&type=template&id=45886ef9&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/home/index.vue?vue&type=template&id=45886ef9& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("VContainer", [_vm._v("\n    home\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/app-layout.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/app-layout.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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

const menuItems = [
  {
    title: 'Home',
    to: {name: 'home'}
  },
  {
    title: 'Playground',
    to: {name: 'playground'}
  },
  {
    title: 'Documentation',
    href: 'docs',
    target: '_blank'
  },
  {
    title: 'GitHub',
    href: 'https://github.com/alxcube/lens',
    target: '_blank'
  }
];

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AppLayout',

  data() {
    return {
      drawer: false,
      showErrorMessage: false,
      errorMessage: null,
      menuItems
    };
  },

  errorCaptured(err, vm, info) {
    this.errorMessage = err;
    this.showErrorMessage = true;
  }
});


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/home/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/pages/home/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HomePage'
});


/***/ }),

/***/ "./src/img/lens-logo-96x96.png":
/*!*************************************!*\
  !*** ./src/img/lens-logo-96x96.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/0b7f3f6a5ad6a69d3313d7ad8cb92057.png");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_app_layout_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/app-layout.vue */ "./src/js/components/app-layout.vue");
/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/vuetify */ "./src/js/plugins/vuetify.js");
/* harmony import */ var portal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! portal-vue */ "./node_modules/portal-vue/dist/portal-vue.common.js");
/* harmony import */ var portal_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(portal_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plugins_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/router */ "./src/js/plugins/router.js");






vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(portal_vue__WEBPACK_IMPORTED_MODULE_3___default.a);

vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('app-layout', _components_app_layout_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

const app = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#app',
  render: h => h(_components_app_layout_vue__WEBPACK_IMPORTED_MODULE_1__["default"]),
  vuetify: _plugins_vuetify__WEBPACK_IMPORTED_MODULE_2__["default"],
  router: _plugins_router__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/js/components/app-layout.vue":
/*!******************************************!*\
  !*** ./src/js/components/app-layout.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_layout_vue_vue_type_template_id_31c8f702___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-layout.vue?vue&type=template&id=31c8f702& */ "./src/js/components/app-layout.vue?vue&type=template&id=31c8f702&");
/* harmony import */ var _app_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-layout.vue?vue&type=script&lang=js& */ "./src/js/components/app-layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAppBar */ "./node_modules/vuetify/lib/components/VAppBar/index.js");
/* harmony import */ var vuetify_lib_components_VContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VContent */ "./node_modules/vuetify/lib/components/VContent/index.js");
/* harmony import */ var vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VFooter */ "./node_modules/vuetify/lib/components/VFooter/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VNavigationDrawer */ "./node_modules/vuetify/lib/components/VNavigationDrawer/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_layout_vue_vue_type_template_id_31c8f702___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_layout_vue_vue_type_template_id_31c8f702___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */

















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VAppBar: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__["VAppBar"],VAppBarNavIcon: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__["VAppBarNavIcon"],VContent: vuetify_lib_components_VContent__WEBPACK_IMPORTED_MODULE_6__["VContent"],VFooter: vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_7__["VFooter"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__["VImg"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemAction"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemContent"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemTitle"],VNavigationDrawer: vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_11__["VNavigationDrawer"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_12__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_13__["VSpacer"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/app-layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/app-layout.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/js/components/app-layout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../node_modules/vue-loader/lib??vue-loader-options!./app-layout.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/app-layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/app-layout.vue?vue&type=template&id=31c8f702&":
/*!*************************************************************************!*\
  !*** ./src/js/components/app-layout.vue?vue&type=template&id=31c8f702& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_layout_vue_vue_type_template_id_31c8f702___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../node_modules/vue-loader/lib??vue-loader-options!./app-layout.vue?vue&type=template&id=31c8f702& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/app-layout.vue?vue&type=template&id=31c8f702&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_layout_vue_vue_type_template_id_31c8f702___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_layout_vue_vue_type_template_id_31c8f702___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/pages/home/index.vue":
/*!************************************************!*\
  !*** ./src/js/components/pages/home/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_45886ef9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=45886ef9& */ "./src/js/components/pages/home/index.vue?vue&type=template&id=45886ef9&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/js/components/pages/home/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_45886ef9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_45886ef9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VContainer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/pages/home/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/pages/home/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/js/components/pages/home/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/home/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/pages/home/index.vue?vue&type=template&id=45886ef9&":
/*!*******************************************************************************!*\
  !*** ./src/js/components/pages/home/index.vue?vue&type=template&id=45886ef9& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45886ef9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=45886ef9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/pages/home/index.vue?vue&type=template&id=45886ef9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45886ef9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45886ef9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/plugins/router.js":
/*!**********************************!*\
  !*** ./src/js/plugins/router.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./src/js/routes/index.js");




vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);

const router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'hash',
  routes: _routes__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/js/plugins/vuetify.js":
/*!***********************************!*\
  !*** ./src/js/plugins/vuetify.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mdi_font_css_materialdesignicons_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mdi/font/css/materialdesignicons.css */ "./node_modules/@mdi/font/css/materialdesignicons.css");
/* harmony import */ var _mdi_font_css_materialdesignicons_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mdi_font_css_materialdesignicons_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");




vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(vuetify_lib__WEBPACK_IMPORTED_MODULE_2__["default"]);

const opts = {
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },

  theme: {
    dark: true
  }
};

/* harmony default export */ __webpack_exports__["default"] = (new vuetify_lib__WEBPACK_IMPORTED_MODULE_2__["default"](opts));

/***/ }),

/***/ "./src/js/routes/index.js":
/*!********************************!*\
  !*** ./src/js/routes/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/pages/home */ "./src/js/components/pages/home/index.vue");


const LensPlayground = () => Promise.all(/*! import() | playground */[__webpack_require__.e("vendors"), __webpack_require__.e("playground")]).then(__webpack_require__.bind(null, /*! ../components/pages/lens-playground */ "./src/js/components/pages/lens-playground/index.vue"));

const routes = [
  {
    path: '/',
    name: 'home',
    component: _components_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"],
    meta: {
      title: 'Lens Home',
      subtitle: 'Home'
    }
  },
  {
    path: '/playground',
    name: 'playground',
    component: LensPlayground,
    meta: {
      title: 'Lens Playground',
      subtitle: 'Playground'
    }
  }
];

/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

/******/ });
//# sourceMappingURL=app.js.map