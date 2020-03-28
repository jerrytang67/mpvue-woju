require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_edit_vue__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_82276596_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_edit_vue__ = __webpack_require__(365);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(363)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_edit_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_82276596_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_edit_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\partner\\edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-82276596", Component.options)
  } else {
    hotAPI.reload("data-v-82276596", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 363:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_dist_toast_toast__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_Tips__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_timers__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_timers__);




var _onLoad$onReady$mount;

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

var Partner = {
  weixin: "",
  LocationLabel: "",
  LocationAddress: "",
  Lat: 0,
  Lng: 0
};





/* harmony default export */ __webpack_exports__["a"] = (_onLoad$onReady$mount = {
  // components: {
  //   picUpload
  // },
  onLoad: function onLoad(options) {
    wx.setNavigationBarTitle({
      title: "团长信息"
    });
  },
  onReady: function onReady() {},
  mounted: function mounted() {
    var that = this;

    wx.getLocation({
      type: "gcj02",
      success: function success(res) {
        that.SET_POSITION(res);
        that.setCenter(res);
        that.mapCtx = wx.createMapContext("map");
        that.get_setting().then(function () {
          if (that.partner) {
            that.item = that.partner;
            that.setCenter({ latitude: that.partner.Lat, longitude: that.partner.Lng });
          }
        });
      },
      fail: function fail() {
        __WEBPACK_IMPORTED_MODULE_5__utils_Tips__["a" /* default */].error("你拒绝了定位授权,请打开授权定位后再试...");
        Object(__WEBPACK_IMPORTED_MODULE_6_timers__["setTimeout"])(function () {
          wx.navigateBack();
        }, 2000);
      }
    });
  },

  data: {
    step: 1,
    isFinish: false,
    item: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, Partner),
    mapCtx: undefined,
    location: [],
    markers: [{
      iconPath: "/static/images/location.png",
      id: 0,
      latitude: 0,
      longitude: 0,
      width: 32,
      height: 32
    }],
    polyline: [],
    controls: [],
    steps: [{
      text: "步骤一",
      desc: "实名信息"
    }, {
      text: "步骤二",
      desc: "团长信息"
    }, {
      text: "完成",
      desc: "等待审核通过"
    }]
  }
}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_onLoad$onReady$mount, "onReady", function onReady() {}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_onLoad$onReady$mount, "computed", __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["e" /* mapState */])(["position", "partner"]))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_onLoad$onReady$mount, "methods", __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["d" /* mapMutations */])(["SET_POSITION"]), Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(["get_setting"]), {
  //提交资料
  onSubmit: function onSubmit(e) {
    var that = this;
    console.log(e);
    this.$api.postPartner(this.item).then(function (res) {
      if (res.Id) {
        __WEBPACK_IMPORTED_MODULE_4__static_dist_toast_toast__["a" /* default */].success("提交成功,请审核结果");
        that.isFinish = true;
        that.step = 2;
      }
    });
  },
  back: function back() {
    wx.switchTab({ url: "/pages/index/index" });
  },
  search: function search() {
    var _this = this;

    this.$api.geocoder(this.item.LocationLabel).then(function (res) {
      _this.setCenter({ latitude: res.Lat, longitude: res.Lng });
    });
  },
  onChange: function onChange(e) {
    var value = e.mp.detail.value || e.mp.detail;
    var key = e.mp.currentTarget.dataset.name;
    this.item[key] = value;
  },
  regionchange: function regionchange(e) {
    var that = this;
    if (e.type === "end" && e.mp.causedBy === "drag") {
      // console.log(e);
      that.getCenterLocation();
    }
  },

  //地图和MARKER移至中心点
  setCenter: function setCenter(_ref) {
    var latitude = _ref.latitude,
        longitude = _ref.longitude;

    this.markers[0].latitude = latitude;
    this.markers[0].longitude = longitude;
    this.position.latitude = latitude;
    this.position.longitude = longitude;
    this.item.Lng = longitude;
    this.item.Lat = latitude;
  },


  getCenterLocation: function getCenterLocation() {
    var that = this;
    that.mapCtx.getCenterLocation({
      success: function success(res) {
        // console.log(res);
        that.setCenter(res);
      }
    });
  }
})), _onLoad$onReady$mount);

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "contentBody"
  }, [_c('div', {
    staticStyle: {
      "padding": "24rpx 32rpx"
    }
  }, [_c('van-steps', {
    attrs: {
      "steps": _vm.steps,
      "active": _vm.step,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": "实名认证基本信息",
      "mpcomid": '6'
    }
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('van-field', {
    attrs: {
      "label": "微信号",
      "value": _vm.item.weixin,
      "data-name": "weixin",
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.onChange
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "社区名",
      "value": _vm.item.LocationLabel,
      "required": "",
      "data-name": "LocationLabel",
      "use-button-slot": "",
      "eventid": '2',
      "mpcomid": '3'
    },
    on: {
      "change": _vm.onChange
    }
  }, [_c('van-button', {
    attrs: {
      "size": "small",
      "type": "primary",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.search
    },
    slot: "button"
  }, [_vm._v("搜索")])], 1), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "地址",
      "value": _vm.item.LocationAddress,
      "required": "",
      "data-name": "LocationAddress",
      "eventid": '3',
      "mpcomid": '4'
    },
    on: {
      "change": _vm.onChange
    }
  })], 1)], 1), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": "地图",
      "mpcomid": '7'
    }
  }, [(_vm.position) ? _c('map', {
    staticStyle: {
      "height": "40vh",
      "width": "100%"
    },
    attrs: {
      "id": "map",
      "subkey": "JQDBZ-M7CR6-LAYS5-MCG7D-DCXHK-GJBIV",
      "longitude": _vm.position.longitude,
      "latitude": _vm.position.latitude,
      "scale": "16",
      "markers": _vm.markers,
      "show-location": "",
      "eventid": '4'
    },
    on: {
      "regionchange": _vm.regionchange,
      "end": _vm.regionchange
    }
  }) : _vm._e()], 1)], 1)]), _vm._v(" "), _c('van-goods-action', {
    staticStyle: {
      "z-index": "9999"
    },
    attrs: {
      "mpcomid": '11'
    }
  }, [_c('van-goods-action-icon', {
    attrs: {
      "icon": "chat",
      "text": "客服",
      "open-type": "contact",
      "mpcomid": '8'
    }
  }), _vm._v(" "), (!_vm.isFinish) ? _c('van-goods-action-button', {
    attrs: {
      "text": "提交",
      "type": "primary",
      "eventid": '5',
      "mpcomid": '9'
    },
    on: {
      "click": _vm.onSubmit
    }
  }) : _vm._e(), _vm._v(" "), (_vm.isFinish) ? _c('van-goods-action-button', {
    attrs: {
      "text": "返回首页",
      "type": "primary",
      "eventid": '6',
      "mpcomid": '10'
    },
    on: {
      "click": _vm.back
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '12'
    }
  }), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '13'
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
     require("vue-hot-reload-api").rerender("data-v-82276596", esExports)
  }
}

/***/ })

},[384]);