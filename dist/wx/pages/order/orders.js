require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([11],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_orders_vue__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0506448a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_orders_vue__ = __webpack_require__(345);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(343)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_orders_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0506448a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_orders_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\order\\orders.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] orders.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0506448a", Component.options)
  } else {
    hotAPI.reload("data-v-0506448a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 343:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_order__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_dist_toast_toast__ = __webpack_require__(7);

//
//
//
//
//
//
//
//
//
//
//
//
//
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
    if (options.index) this.selectIndex = options.index;
    wx.setNavigationBarTitle({ title: "我的订单" });
  },
  mounted: function mounted() {
    console.log(wx.getStorageSync("Tab_Select_index"));
    this.selectIndex = wx.getStorageSync("Tab_Select_index") || this.selectIndex;
    this.get_setting();
  },

  onPullDownRefresh: function onPullDownRefresh() {
    console.log("onPullDownRefresh");
    this.get_setting().then(function () {
      setTimeout(function () {
        wx.stopPullDownRefresh();
      }, 500);
    });
  },
  data: {
    selectIndex: 0
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(["waitForPayCount", "paidOrderCount", "canTakeOrderCount", "waitForPay", "paidOrder", "canTakeOrder", "finishOrder"])),
  components: {
    order: __WEBPACK_IMPORTED_MODULE_3__components_order__["a" /* default */]
  },
  created: function created() {},

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(["get_setting"]), {
    onTabChange: function onTabChange(event) {
      console.log(event);
      this.selectIndex = event.mp.detail.index;
    }
  })
});

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "background": "#fff"
    }
  }, [_c('van-tabs', {
    attrs: {
      "active": _vm.selectIndex,
      "sticky": "true",
      "scroll-top": 0,
      "eventid": '0',
      "mpcomid": '8'
    },
    on: {
      "change": _vm.onTabChange
    }
  }, [_c('van-tab', {
    attrs: {
      "title": '待付款',
      "mpcomid": '1'
    }
  }, _vm._l((_vm.waitForPay), function(x, index) {
    return _c('order', {
      key: x,
      attrs: {
        "data": x,
        "type": "user",
        "mpcomid": '0_' + index
      }
    })
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": '已付款',
      "mpcomid": '3'
    }
  }, _vm._l((_vm.paidOrder), function(x, index) {
    return _c('order', {
      key: x,
      attrs: {
        "data": x,
        "type": "user",
        "mpcomid": '2_' + index
      }
    })
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": '可取货',
      "mpcomid": '5'
    }
  }, _vm._l((_vm.canTakeOrder), function(x, index) {
    return _c('order', {
      key: x,
      attrs: {
        "data": x,
        "type": "user",
        "mpcomid": '4_' + index
      }
    })
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": '已完成',
      "mpcomid": '7'
    }
  }, _vm._l((_vm.finishOrder), function(x, index) {
    return _c('order', {
      key: x,
      attrs: {
        "data": x,
        "type": "user",
        "mpcomid": '6_' + index
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '9'
    }
  }), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '10'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0506448a", esExports)
  }
}

/***/ })

},[379]);