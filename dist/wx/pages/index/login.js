require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([16],{

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_login_vue__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_43857a50_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_login_vue__ = __webpack_require__(361);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(359)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_43857a50_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_login_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43857a50", Component.options)
  } else {
    hotAPI.reload("data-v-43857a50", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 359:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_dist_toast_toast__ = __webpack_require__(7);


//
//
//
//
//
//
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
  onLoad: function onLoad() {},

  data: {},
  methods: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["d" /* mapMutations */])(["SET_OPENID"]), Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])(["setUserInfo"]), {
    bindGetUserInfo: function bindGetUserInfo(e) {
      if (e.mp.detail.rawData) {
        //用户按了允许授权按钮
        this.getUserInfo().then(function (res) {
          wx.switchTab({ url: "/pages/index/index" });
        }).catch(function (error) {
          __WEBPACK_IMPORTED_MODULE_3__static_dist_toast_toast__["a" /* default */].fail(error);
        });
      } else {
        //用户按了拒绝按钮
        __WEBPACK_IMPORTED_MODULE_3__static_dist_toast_toast__["a" /* default */].fail("请先授权");
      }
    },
    getUserInfo1: function getUserInfo1() {
      console.log("click事件首先触发");
      // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
      // console.log(wx.canIUse('button.open-type.getUserInfo'))
      if (wx.canIUse("button.open-type.getUserInfo")) {
        // 用户版本可用
      } else {
        __WEBPACK_IMPORTED_MODULE_3__static_dist_toast_toast__["a" /* default */].fail("请升级微信版本");
      }
    },
    getUserInfo: function getUserInfo() {
      var _this = this;

      var that = this;
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        wx.login({
          // withCredentials: true,
          success: function success(logRes) {
            // that.$api.code2session(logRes.code).then(res => {
            //   console.log(res);
            // if (res) {
            //   this.SET_OPENID(res);
            // }
            // if (res.token) {
            // console.log("token ok");
            // wx.setStorageSync("token", res.token);
            wx.getUserInfo({
              success: function success(res) {
                res.code = logRes.code;
                _this.setUserInfo(res);
                return resolve();
              }
            });
            // }
            // });
          },
          fail: function fail(error) {
            return reject(error);
          }
        });
      });
      // 调用登录接口
    }
  })
});

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('view', {
    staticStyle: {
      "margin-top": "40vh"
    }
  }, [_c('button', {
    attrs: {
      "type": "primary",
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo,
      "click": _vm.getUserInfo1
    }
  }, [_vm._v("授权登录")])], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '1'
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
     require("vue-hot-reload-api").rerender("data-v-43857a50", esExports)
  }
}

/***/ })

},[383]);