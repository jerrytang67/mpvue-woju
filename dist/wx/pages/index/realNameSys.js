require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([13],{

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_realNameSys_vue__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8e6dc51a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_realNameSys_vue__ = __webpack_require__(357);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(355)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_realNameSys_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8e6dc51a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_realNameSys_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\realNameSys.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] realNameSys.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8e6dc51a", Component.options)
  } else {
    hotAPI.reload("data-v-8e6dc51a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 355:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_picUpload__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_index__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_dist_toast_toast__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_Tips__ = __webpack_require__(21);




var _components$onLoad$on;

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

var REALNAMEINFO = {
  RealName: "",
  Telphone: "",
  TelphoneBackup: "",
  IDCardFrontUrl: "",
  IDCardBackUrl: "",
  IDCardHandUrl: "",
  BusinessLicenseUrl: ""
};






/* harmony default export */ __webpack_exports__["a"] = (_components$onLoad$on = {
  components: {
    picUpload: __WEBPACK_IMPORTED_MODULE_4__components_picUpload__["a" /* default */]
  },
  onLoad: function onLoad(options) {
    var _this = this;

    console.log(options);
    if (!options.type < 0) wx.navigateBack();
    this.type = options.type;
    wx.setNavigationBarTitle({
      title: (this.type == 0 ? "团长" : "商家") + " 实名认证"
    });
    this.getRealNameInfo().then(function (res) {
      if (res) {
        console.log("load from http");
        _this.item = res;
      }
    });
  },
  onReady: function onReady() {
    console.log("onReady");
  },

  data: {
    steps: [{
      text: "步骤一",
      desc: "实名信息"
    }, {
      text: "步骤二",
      desc: "团长信息"
    }, {
      text: "完成",
      desc: "等待审核通过"
    }],
    type: 0,
    selectType: 0,
    Type: ["个人", "企业"],
    item: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, REALNAMEINFO)
  }
}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components$onLoad$on, "onReady", function onReady() {}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components$onLoad$on, "mounted", function mounted() {
  console.log(this);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components$onLoad$on, "computed", __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["e" /* mapState */])(["realNameInfo"]))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components$onLoad$on, "methods", __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(["getRealNameInfo"]), {
  onUpdate1: function onUpdate1(e) {
    console.log(e);
    this.item.BusinessLicenseUrl = e;
  },
  onUpdate2: function onUpdate2(e) {
    this.item.IDCardFrontUrl = e;
  },
  onUpdate3: function onUpdate3(e) {
    this.item.IDCardBackUrl = e;
  },
  onUpdate4: function onUpdate4(e) {
    this.item.IDCardHandUrl = e;
  },
  post: function post() {
    var that = this;
    var data = {
      RealName: that.item.RealName,
      Telphone: that.item.Telphone,
      TelphoneBackup: that.item.TelphoneBackup,
      IDCardFrontUrl: that.item.IDCardFrontUrl,
      IDCardBackUrl: that.item.IDCardBackUrl,
      IDCardHandUrl: that.item.IDCardHandUrl
    };
    if (that.type == 1) {
      if (!that.item.BusinessLicenseUrl) {
        __WEBPACK_IMPORTED_MODULE_6__static_dist_toast_toast__["a" /* default */].fail("营业执照没有上传");
        return;
      }
      data.BusinessLicenseUrl = that.item.BusinessLicenseUrl;
    }
    that.$api.postRealNameInfo(data).then(function (res) {
      if (res.Id) {
        __WEBPACK_IMPORTED_MODULE_6__static_dist_toast_toast__["a" /* default */].success("提交成功,请审核结果");
        setTimeout(function () {
          if (that.type == 1) wx.navigateBack();else wx.navigateTo({ url: '/pages/partner/edit' });
        }, 1500);
      }
    });
  },
  btnClick: function btnClick() {
    this.item.TelphoneBackup = this.item.Telphone;
  },
  onChange: function onChange(e) {
    console.log(e);
    var value = e.mp.detail.value || e.mp.detail;
    var key = e.mp.currentTarget.dataset.name;
    this.item[key] = value;
  },
  getPhoneNumber: function getPhoneNumber(e) {
    var _this2 = this;

    // console.log(e.mp.detail.errMsg);
    // console.log(e.mp.detail.iv);
    // console.log(e.mp.detail.encryptedData);
    if (e.mp.detail.errMsg.indexOf("ok") > 0) {
      this.$api.getPhone({
        iv: e.mp.detail.iv,
        encryptedData: e.mp.detail.encryptedData
      }).then(function (res) {
        var json = JSON.parse(res);
        console.log(json.purePhoneNumber);
        _this2.item.Telphone = json.purePhoneNumber;
      });
    } else {
      __WEBPACK_IMPORTED_MODULE_7__utils_Tips__["a" /* default */].error(e.mp.detail.errMsg);
    }
  }
})), _components$onLoad$on);

/***/ }),

/***/ 357:
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
      "active": "0",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": "实名认证基本信息",
      "mpcomid": '7'
    }
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('van-field', {
    attrs: {
      "label": "姓名",
      "value": _vm.item.RealName,
      "required": "",
      "data-name": "RealName",
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.onChange
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "手机号",
      "disabled": "",
      "value": _vm.item.Telphone,
      "type": "number",
      "required": "",
      "data-name": "Telphone",
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
      "open-type": "getPhoneNumber",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "getphonenumber": _vm.getPhoneNumber
    },
    slot: "button"
  }, [_vm._v("微信授权获取")])], 1), _vm._v(" "), _c('van-field', {
    attrs: {
      "type": "number",
      "label": "联系电话",
      "value": _vm.item.TelphoneBackup,
      "required": "",
      "data-name": "TelphoneBackup",
      "use-button-slot": "",
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "change": _vm.onChange
    }
  }, [_c('van-button', {
    attrs: {
      "size": "small",
      "plain": "",
      "type": "primary",
      "eventid": '3',
      "mpcomid": '4'
    },
    on: {
      "click": _vm.btnClick
    },
    slot: "button"
  }, [_vm._v("同上")])], 1)], 1)], 1), _vm._v(" "), (_vm.type == 1) ? _c('demo-block', {
    attrs: {
      "title": "营业执照",
      "mpcomid": '9'
    }
  }, [_c('picUpload', {
    attrs: {
      "data": _vm.item.BusinessLicenseUrl,
      "limit": 1,
      "eventid": '5',
      "mpcomid": '8'
    },
    on: {
      "onUpdate": _vm.onUpdate1
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": "身份证-正面",
      "mpcomid": '11'
    }
  }, [_c('picUpload', {
    attrs: {
      "data": _vm.item.IDCardFrontUrl,
      "limit": 1,
      "eventid": '6',
      "mpcomid": '10'
    },
    on: {
      "onUpdate": _vm.onUpdate2
    }
  })], 1), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": "身份证-背面",
      "mpcomid": '13'
    }
  }, [_c('picUpload', {
    attrs: {
      "data": _vm.item.IDCardBackUrl,
      "limit": 1,
      "eventid": '7',
      "mpcomid": '12'
    },
    on: {
      "onUpdate": _vm.onUpdate3
    }
  })], 1), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": "手持身份证-正面 照片",
      "mpcomid": '15'
    }
  }, [_c('picUpload', {
    attrs: {
      "data": _vm.item.IDCardHandUrl,
      "limit": 1,
      "eventid": '8',
      "mpcomid": '14'
    },
    on: {
      "onUpdate": _vm.onUpdate4
    }
  })], 1), _vm._v(" "), _c('view', {
    staticStyle: {
      "height": "10vh"
    }
  })], 1)]), _vm._v(" "), _c('van-goods-action', {
    staticStyle: {
      "z-index": "9999"
    },
    attrs: {
      "mpcomid": '18'
    }
  }, [_c('van-goods-action-icon', {
    attrs: {
      "icon": "chat-o",
      "text": "客服",
      "open-type": "contact",
      "mpcomid": '16'
    }
  }), _vm._v(" "), _c('van-goods-action-button', {
    attrs: {
      "text": "下一步",
      "type": "primary",
      "eventid": '9',
      "mpcomid": '17'
    },
    on: {
      "click": function($event) {
        _vm.post()
      }
    }
  })], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '19'
    }
  }), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '20'
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
     require("vue-hot-reload-api").rerender("data-v-8e6dc51a", esExports)
  }
}

/***/ })

},[382]);