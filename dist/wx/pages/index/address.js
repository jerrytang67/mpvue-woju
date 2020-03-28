require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([19],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_address_vue__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3b148fba_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_address_vue__ = __webpack_require__(307);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(305)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3b148fba"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_address_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3b148fba_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_address_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\address.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] address.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b148fba", Component.options)
  } else {
    hotAPI.reload("data-v-3b148fba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 305:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Use Vuex


/* harmony default export */ __webpack_exports__["a"] = ({
  onLoad: function onLoad() {
    wx.setNavigationBarTitle({ title: "选择位置" });
  },
  onReady: function onReady() {},
  mounted: function mounted() {
    var that = this;
    // wx.getLocation({
    //   type: "gcj02",
    //   success: function(res) {
    //     // console.log(res);
    //     that.SET_POSITION(res);
    //   }
    // });
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["e" /* mapState */])(["userInfo", "position", "searchHistory"])),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapMutations */])(["SET_POSITION", "ADD_SEARCHHISTORY"]), {
    selectAddress: function selectAddress(txt) {
      this.postSearch(txt);
    },
    postSearch: function postSearch(txt) {
      var that = this;
      this.$api.placeSuggestion({ query: txt, region: "苏州" }).then(function (res) {
        if (res.result && res.result.length) {
          that.location = res.result;
          that.ADD_SEARCHHISTORY(txt);
        } else {
          __WEBPACK_IMPORTED_MODULE_2__static_dist_toast_toast__["a" /* default */].fail("换个关键字试试");
        }
      }).catch(function (err) {
        __WEBPACK_IMPORTED_MODULE_2__static_dist_toast_toast__["a" /* default */].fail("出错了");
      });
    },
    onSearch: function onSearch(event) {
      var that = this;
      var txt = event.mp.detail;
      that.position = [];
      that.postSearch(txt);
    }
  }),
  data: {
    location: []
  }
});

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "background": "#fff"
    }
  }, [_c('view', {
    staticStyle: {
      "width": "100vw"
    }
  }, [_c('van-search', {
    attrs: {
      "placeholder": "请输入搜索关键词",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "search": _vm.onSearch
    }
  })], 1), _vm._v(" "), (_vm.searchHistory && _vm.searchHistory.length > 0) ? _c('view', {
    staticClass: "history"
  }, [_vm._v("搜索历史:\n    "), _vm._l((_vm.searchHistory), function(s, index) {
    return _c('van-button', {
      key: s,
      attrs: {
        "size": "small",
        "eventid": '1_' + index,
        "mpcomid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.selectAddress(s)
        }
      }
    }, [_vm._v(_vm._s(s))])
  })], 2) : _vm._e(), _vm._v(" "), _c('van-cell-group', {
    staticStyle: {
      "width": "100vw"
    },
    attrs: {
      "mpcomid": '3'
    }
  }, _vm._l((_vm.location), function(l, index) {
    return _c('van-cell', {
      key: l,
      attrs: {
        "icon": "location",
        "is-link": "",
        "border": "true",
        "url": '/pages/index/choosePartner?lng=' + l.location.lng + '&lat=' + l.location.lat + '&address=' + l.city + l.district + l.name,
        "mpcomid": '2_' + index
      }
    }, [_c('view', {
      slot: "title"
    }, [_c('span', {
      staticClass: "van-cell-text"
    }, [_vm._v(_vm._s(l.city) + _vm._s(l.district) + " " + _vm._s(l.name))])])])
  })), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '5'
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
     require("vue-hot-reload-api").rerender("data-v-3b148fba", esExports)
  }
}

/***/ })

},[372]);