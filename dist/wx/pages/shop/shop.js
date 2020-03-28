require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_shop_vue__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1fd5de4a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_shop_vue__ = __webpack_require__(353);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(351)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_shop_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1fd5de4a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_shop_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shop\\shop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] shop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1fd5de4a", Component.options)
  } else {
    hotAPI.reload("data-v-1fd5de4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 351:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_dist_toast_toast__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  onLoad: function onLoad(options) {
    if (!options.shopId) wx.navigateBack();
    this.load();
  },

  onPullDownRefresh: function onPullDownRefresh() {
    this.load();
    wx.stopPullDownRefresh();
  },
  data: {
    shop: {},
    c: 1
  },
  methods: {
    load: function load() {
      var that = this;
      var shopId = this.$root.$mp.query.shopId;
      this.$api.getShop({ shopId: shopId }).then(function (res) {
        that.shop = res;
      });
    }
  }
});

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "background": "#fff"
    }
  }, [(_vm.shop) ? _c('div', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('image', {
    staticClass: "slide-image",
    attrs: {
      "src": _vm.shop.LogoImageUrl + '!w500',
      "mode": "aspectFill",
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.previewImage(_vm.$index)
      }
    }
  }), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": _vm.shop.ShopName,
      "mpcomid": '0'
    }
  }, [_vm._v("\n      " + _vm._s(_vm.shop.ShopAddress) + "\n    ")])], 1) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1fd5de4a", esExports)
  }
}

/***/ })

},[381]);