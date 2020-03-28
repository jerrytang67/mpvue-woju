require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([17],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_choosePartner_vue__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4fe16f20_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_choosePartner_vue__ = __webpack_require__(298);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(295)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4fe16f20"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_choosePartner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4fe16f20_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_choosePartner_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\choosePartner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] choosePartner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fe16f20", Component.options)
  } else {
    hotAPI.reload("data-v-4fe16f20", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 295:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_dist_toast_toast__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timers__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_timers__);

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

// Use Vuex





/* harmony default export */ __webpack_exports__["a"] = ({
  onLoad: function onLoad(options) {
    wx.setNavigationBarTitle({ title: "附近其他团长" });

    console.log(options);
  },
  onReady: function onReady() {},
  mounted: function mounted() {
    var that = this;
    var query = this.$root.$mp.query;
    that.PARTNER([]);
    if (query.lat && query.lng && query.address) {
      that.SET_POSITION({
        latitude: query.lat,
        longitude: query.lng,
        address: query.address
      });
      that.$api.loadPartnerList({
        Lat: query.lat,
        Lng: query.lng,
        type: "bd09"
      }).then(function (res) {
        that.PARTNER(res);
      });
    } else {
      wx.getLocation({
        type: "gcj02",
        success: function success(res) {
          //save to store
          that.SET_POSITION(res);
          //get partner list
          that.$api.loadPartnerList({
            Lat: res.latitude,
            Lng: res.longitude,
            type: "gcj02"
          }).then(function (res) {
            if (res) that.PARTNER(res);else __WEBPACK_IMPORTED_MODULE_2__static_dist_toast_toast__["a" /* default */].fail("附近没有团长");
          });

          //get pois name
          that.$api.getPois({ lat: res.latitude, lng: res.longitude, type: "gcj02" }).then(function (res2) {
            that.position.address = res2.result.formatted_address;
            that.SET_POSITION(that.position);
          }).catch(function (error) {
            console.log(error);
          });
        },
        fail: function fail(error) {
          Object(__WEBPACK_IMPORTED_MODULE_2__static_dist_toast_toast__["a" /* default */])("必须授权定位才可查看团长");
        }
      });
    }
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["e" /* mapState */])(["userInfo", "partner_list", "position"])),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapMutations */])(["PARTNER", "SET_BUYITEMLIST", "SET_POSITION"]), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(["select_partner"]), {
    select: function select(p) {
      var that = this;
      this.select_partner(p).then(function () {
        // Toast.success("选择成功");
        that.$api.loadPartnerItems(p.Id).then(function (res) {
          that.SET_BUYITEMLIST(res);
        });
        Object(__WEBPACK_IMPORTED_MODULE_3_timers__["setTimeout"])(function () {
          wx.switchTab({ url: "/pages/index/index" });
        }, 1000);
      });
      // wx.navigateTo({ url: "/pages/index/main" });
      // wx.navigateBack()
    },
    goMap: function goMap() {
      wx.navigateTo({ url: "/pages/index/address" });
    }
  })
});

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('view', {
    staticClass: "headBar"
  }, [_c('div', {
    staticStyle: {
      "padding": "0 20rpx"
    }
  }, [_c('p', [_vm._v("您所在的当位置")]), _vm._v(" "), _c('p', [_vm._v("\n        " + _vm._s(_vm.position.address) + "\n        "), _c('van-button', {
    attrs: {
      "type": "default",
      "size": "small",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.goMap
    }
  }, [_vm._v("修改位置")])], 1)], 1)]), _vm._v(" "), _c('view', {
    staticClass: "contentBody"
  }, [(_vm.partner_list.length > 0) ? _c('div', {
    staticClass: "card-list",
    staticStyle: {
      "padding": "20rpx 30rpx"
    }
  }, [_vm._l((_vm.partner_list), function(p, index) {
    return _c('van-card', {
      key: p,
      attrs: {
        "thumb": p.headimgurl,
        "tag": "团长",
        "eventid": '1_' + index,
        "mpcomid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.select(p)
        }
      }
    }, [_c('view', {
      staticClass: "title",
      slot: "title"
    }, [_vm._v(_vm._s(p.nickname))]), _vm._v(" "), _c('view', {
      staticClass: "desc",
      staticStyle: {
        "font-size": "34rpx",
        "color": "red"
      },
      slot: "desc"
    }, [_vm._v("社群:" + _vm._s(p.LocationLabel))]), _vm._v(" "), _c('view', {
      slot: "tags"
    }, [_vm._v("取货地址" + _vm._s(p.LocationAddress))]), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_c('van-tag', {
      attrs: {
        "type": "primary",
        "mpcomid": '1_' + index
      }
    }, [_vm._v("距您 " + _vm._s(p.Distance / 1000 > 1 ? p.Distance / 1000 + '公里' : p.Distance + '米'))])], 1)])
  }), _vm._v(" "), (_vm.partner_list.length == 0) ? _c('view', [_vm._v("您当前位置三公里内没有团长,可以手动更换位置")]) : _vm._e()], 2) : _vm._e()]), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '4'
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
     require("vue-hot-reload-api").rerender("data-v-4fe16f20", esExports)
  }
}

/***/ })

},[370]);