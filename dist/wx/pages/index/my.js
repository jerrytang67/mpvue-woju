require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_my_vue__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_aa753766_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_my_vue__ = __webpack_require__(293);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(288)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-aa753766"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_my_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_aa753766_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_my_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\my.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] my.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aa753766", Component.options)
  } else {
    hotAPI.reload("data-v-aa753766", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 288:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_dist_toast_toast__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_upload__ = __webpack_require__(49);

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
    wx.setNavigationBarTitle({ title: "我的" });
  },

  data: {
    imgSrc: "",
    noticeChk: true,
    active: 0,
    showMoneyChk: false,
    qr: ""
  },
  // onReady() {
  //   if (!this.userInfo.userInfo) wx.navigateTo({ url: "/pages/index/login" });
  // },
  mounted: function mounted() {
    this.get_setting();
  },

  //下拉
  onPullDownRefresh: function onPullDownRefresh() {
    console.log("onPullDownRefresh");
    this.get_setting().then(function () {
      setTimeout(function () {
        wx.stopPullDownRefresh();
      }, 500);
    });
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["e" /* mapState */])(["userInfo", "position", "myShops", "myOrders", "partner", "unionid"]), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(["waitForPayCount", "paidOrderCount", "canTakeOrderCount"])),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapMutations */])([]), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(["get_setting"]), {
    showQR: function showQR() {
      this.qr = "https://www.wujiangapp.com/home/qr?str=" + this.unionid + "&type=WoJu&sid=" + this.$api.STOREID;
    },
    onChange: function onChange(event) {
      console.log(event.detail);
    },
    tabbar_change: function tabbar_change() {},
    upFile: function upFile() {
      var that = this;
      __WEBPACK_IMPORTED_MODULE_3__utils_upload__["a" /* default */].upload().then(function (res) {
        console.log(res);
        that.imgSrc = res;
      }).catch(function (err) {
        console.log(err);
      });
    },
    toggleSetting: function toggleSetting(name) {
      if (name == "notice") this.noticeChk = !this.noticeChk;
      if (name == "showMoney") this.showMoneyChk = !this.showMoneyChk;
    }
  })
});

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [(_vm.userInfo.userInfo) ? _c('image', {
    staticStyle: {
      "width": "30vw",
      "height": "30vw",
      "border-radius": "50%",
      "margin-bottom": "5rpx"
    },
    attrs: {
      "src": _vm.userInfo.userInfo.avatarUrl
    }
  }) : _vm._e(), _vm._v(" "), _c('view', {
    staticClass: "contentBody"
  }, [_c('div', {
    staticStyle: {
      "padding": "20rpx 5vw"
    }
  }, [_c('demo-block', {
    attrs: {
      "title": "我的信息",
      "mpcomid": '7'
    }
  }, [_c('van-panel', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('view', {
    staticStyle: {
      "padding": "1rem 2rem",
      "text-align": "center"
    },
    slot: "header"
  }, [(_vm.userInfo.userInfo) ? _c('view', [_vm._v(_vm._s(_vm.userInfo.userInfo.nickName))]) : _vm._e(), _vm._v(" "), (_vm.qr) ? _c('image', {
    staticStyle: {
      "width": "30vw",
      "height": "30vw",
      "margin": "10rpx auto"
    },
    attrs: {
      "src": _vm.qr
    }
  }) : _vm._e(), _vm._v(" "), _c('view', [_c('van-button', {
    attrs: {
      "type": "primary",
      "size": "small",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.showQR
    }
  }, [_vm._v("显示取货码")])], 1)]), _vm._v(" "), _c('view', [_c('van-tabbar', {
    attrs: {
      "active": _vm.active,
      "fixed": false,
      "eventid": '5',
      "mpcomid": '5'
    },
    on: {
      "change": _vm.tabbar_change
    }
  }, [_c('van-tabbar-item', {
    attrs: {
      "icon": "gold-coin",
      "info": _vm.waitForPayCount ? _vm.waitForPayCount : '',
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "click": function($event) {
        _vm.$navigate.Tab({
          url: "/pages/order/orders",
          index: 0
        })
      }
    }
  }, [_vm._v("待付款")]), _vm._v(" "), _c('van-tabbar-item', {
    attrs: {
      "icon": "chat",
      "info": _vm.paidOrderCount ? _vm.paidOrderCount : '',
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "click": function($event) {
        _vm.$navigate.Tab({
          url: "/pages/order/orders",
          index: 1
        })
      }
    }
  }, [_vm._v("已付款")]), _vm._v(" "), _c('van-tabbar-item', {
    attrs: {
      "icon": "records",
      "info": _vm.canTakeOrderCount ? _vm.canTakeOrderCount : '',
      "eventid": '3',
      "mpcomid": '3'
    },
    on: {
      "click": function($event) {
        _vm.$navigate.Tab({
          url: "/pages/order/orders",
          index: 2
        })
      }
    }
  }, [_vm._v("可取货")]), _vm._v(" "), _c('van-tabbar-item', {
    attrs: {
      "icon": "shop",
      "eventid": '4',
      "mpcomid": '4'
    },
    on: {
      "click": function($event) {
        _vm.$navigate.Tab({
          url: "/pages/order/orders",
          index: 3
        })
      }
    }
  }, [_vm._v("已完成")])], 1)], 1)])], 1), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": "其它设置",
      "mpcomid": '10'
    }
  }, [_c('van-switch-cell', {
    attrs: {
      "title": "接收通知",
      "checked": _vm.noticeChk,
      "eventid": '6',
      "mpcomid": '8'
    },
    on: {
      "change": function($event) {
        _vm.toggleSetting('notice')
      }
    }
  }), _vm._v(" "), (_vm.partner && _vm.partner.State === '成功') ? _c('van-switch-cell', {
    attrs: {
      "title": "隐藏金额",
      "checked": _vm.showMoneyChk,
      "eventid": '7',
      "mpcomid": '9'
    },
    on: {
      "change": function($event) {
        _vm.toggleSetting('showMoney')
      }
    }
  }) : _vm._e()], 1), _vm._v(" "), (_vm.partner && _vm.partner.State === '成功') ? _c('demo-block', {
    attrs: {
      "title": "我的团长信息",
      "mpcomid": '17'
    }
  }, [_c('van-panel', {
    staticClass: "partner",
    attrs: {
      "use-footer-slot": "",
      "mpcomid": '16'
    }
  }, [_c('view', {
    staticClass: "header",
    slot: "header"
  }, [_c('div', [_vm._v("团长姓名:" + _vm._s(_vm.partner.Realname))]), _vm._v(" "), _c('div', [_vm._v("团长电话:" + _vm._s(_vm.partner.Phone))]), _vm._v(" "), (_vm.showMoneyChk) ? _c('div', {
    staticClass: "flex-between"
  }, [_c('div', [_vm._v("可提现: "), _c('span', {
    staticClass: "price"
  }, [_vm._v("￥" + _vm._s(_vm.partner.AvblBalance))])]), _vm._v(" "), _c('div', [_vm._v("不可提:"), _c('span', {
    staticClass: "price"
  }, [_vm._v("￥" + _vm._s(_vm.partner.UnavblBalance))])]), _vm._v(" "), _c('div', [_vm._v("已提:"), _c('span', {
    staticClass: "price"
  }, [_vm._v("￥" + _vm._s(_vm.partner.TotalWithdrawals))])])]) : _vm._e()]), _vm._v(" "), _c('view', {
    staticStyle: {
      "padding": "0 20rpx"
    },
    slot: "footer"
  }, [_c('van-tabbar', {
    attrs: {
      "active": _vm.active,
      "fixed": false,
      "eventid": '12',
      "mpcomid": '15'
    },
    on: {
      "change": _vm.tabbar_change
    }
  }, [_c('van-tabbar-item', {
    attrs: {
      "icon": "location-o",
      "eventid": '8',
      "mpcomid": '11'
    },
    on: {
      "click": function($event) {
        _vm.$navigate.To('/pages/partner/map')
      }
    }
  }, [_vm._v("打开地图")]), _vm._v(" "), _c('van-tabbar-item', {
    attrs: {
      "icon": "info-o",
      "eventid": '9',
      "mpcomid": '12'
    },
    on: {
      "click": function($event) {
        _vm.$navigate.To('/pages/partner/edit')
      }
    }
  }, [_vm._v("编辑信息")]), _vm._v(" "), _c('van-tabbar-item', {
    attrs: {
      "icon": "upgrade",
      "eventid": '10',
      "mpcomid": '13'
    },
    on: {
      "click": function($event) {
        _vm.$navigate.To('/pages/partner/myBuyItems')
      }
    }
  }, [_vm._v("上架商品")]), _vm._v(" "), _c('van-tabbar-item', {
    attrs: {
      "icon": "cart-o",
      "eventid": '11',
      "mpcomid": '14'
    },
    on: {
      "click": function($event) {
        _vm.$navigate.To('/pages/partner/orders')
      }
    }
  }, [_vm._v("团长的订单")])], 1)], 1)])], 1) : _vm._e(), _vm._v(" "), (_vm.myShops && _vm.myShops.length > 0) ? _c('demo-block', {
    attrs: {
      "title": "我的店铺管理",
      "mpcomid": '23'
    }
  }, _vm._l((_vm.myShops), function(shop, index) {
    return _c('van-panel', {
      key: shop,
      attrs: {
        "use-footer-slot": "",
        "mpcomid": '22_' + index
      }
    }, [_c('view', {
      staticStyle: {
        "display": "flex",
        "align-items": "center",
        "padding": "20rpx",
        "flex-direction": "row"
      },
      slot: "header"
    }, [_c('image', {
      staticStyle: {
        "width": "80rpx",
        "height": "80rpx",
        "border-radius": "8rpx"
      },
      attrs: {
        "src": shop.LogoImageUrl + '!w100h100'
      }
    }), _vm._v(" "), _c('span', {
      staticStyle: {
        "margin-left": "1rem"
      }
    }, [_vm._v("\n              " + _vm._s(shop.ShopName) + "\n            ")])]), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_c('van-tabbar', {
      attrs: {
        "active": _vm.active,
        "fixed": false,
        "eventid": '16_' + index,
        "mpcomid": '21_' + index
      },
      on: {
        "change": _vm.tabbar_change
      }
    }, [_c('van-tabbar-item', {
      attrs: {
        "icon": "goods-collect-o",
        "eventid": '13_' + index,
        "mpcomid": '18_' + index
      },
      on: {
        "click": function($event) {
          _vm.$navigate.To(("/pages/shop/buyItems?shopId=" + (shop.Id) + "&shopName=" + (shop.ShopName)))
        }
      }
    }, [_vm._v("商品列表")]), _vm._v(" "), _c('van-tabbar-item', {
      attrs: {
        "icon": "orders-o",
        "eventid": '14_' + index,
        "mpcomid": '19_' + index
      },
      on: {
        "click": function($event) {
          _vm.$navigate.To(("/pages/shop/orders?shopId=" + (shop.Id) + "&shopName=" + (shop.ShopName)))
        }
      }
    }, [_vm._v("查看订单")]), _vm._v(" "), _c('van-tabbar-item', {
      attrs: {
        "icon": "add-o",
        "eventid": '15_' + index,
        "mpcomid": '20_' + index
      },
      on: {
        "click": function($event) {
          _vm.$navigate.To(("/pages/shop/addItem?shopId=" + (shop.Id) + "&shopName=" + (shop.ShopName)))
        }
      }
    }, [_vm._v("新建商品")])], 1)], 1)])
  })) : _vm._e()], 1)]), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '24'
    }
  }), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '25'
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
     require("vue-hot-reload-api").rerender("data-v-aa753766", esExports)
  }
}

/***/ })

},[369]);