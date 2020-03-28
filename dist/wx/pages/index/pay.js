require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([14],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_pay_vue__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_27a5b657_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_pay_vue__ = __webpack_require__(286);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(284)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-27a5b657"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_pay_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_27a5b657_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_pay_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\pay.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pay.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27a5b657", Component.options)
  } else {
    hotAPI.reload("data-v-27a5b657", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 284:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_dist_toast_toast__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_dist_dialog_dialog__ = __webpack_require__(48);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    wx.setNavigationBarTitle({ title: "购物车" });
  },
  onReady: function onReady() {},

  data: {
    address: "",
    telphone: "",
    userName: "",
    comment: "",
    pList: {}
  },
  mounted: function mounted() {},

  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["e" /* mapState */])(["userInfo", "total", "totalPrice", "totalVipPrice", "cartItems", "my_partner"]), {
    youhuan: function youhuan() {
      return this.totalPrice - this.totalVipPrice;
    }
  }),
  methods: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["d" /* mapMutations */])([]), Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])(["add_to_cart"]), {
    setAddress: function setAddress() {
      var that = this;
      wx.chooseAddress({
        success: function success(res) {
          that.address = res.provinceName + res.cityName + res.detailInfo;
          that.telphone = res.telNumber;
          that.userName = res.userName;

          // console.log(res.userName);
          // console.log(res.postalCode);
          // console.log(res.provinceName);
          // console.log(res.cityName);
          // console.log(res.countyName);
          // console.log(res.detailInfo);
          // console.log(res.nationalCode);
          // console.log(res.telNumber);
        },
        fail: function fail() {
          __WEBPACK_IMPORTED_MODULE_4__static_dist_dialog_dialog__["a" /* default */].confirm({
            message: "由于您没有授权获取地址,是否去设置?",
            confirmButtonOpenType: "openSetting"
          }).then(function () {
            wx.openSetting({
              success: function success(res) {
                console.log(res.authSetting);
              }
            });
          }).catch(function () {
            __WEBPACK_IMPORTED_MODULE_3__static_dist_toast_toast__["a" /* default */].fail("打开设置失败了");
          });
        }
      });
    },
    onChange: function onChange(e) {
      var value = e.mp.detail.value || e.mp.detail;
      this.comment = value;
    },
    add: function add(item) {
      var that = this;
      console.log(item);
      item.Count += 1;
      var _id = item.Id + "_" + item.Count;
      that.pList = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, that.pList, { id: _id, value: "" });
      that.add_to_cart(this.cartItems[0]);
    },
    remove: function remove(item) {
      console.log(item);
      if (item.Count > 0) {
        item.Count -= 1;
        this.add_to_cart(this.cartItems[0]);
      }
    },
    onSubmit: function onSubmit() {
      var that = this;
      if (!that.userName || !that.telphone) {
        __WEBPACK_IMPORTED_MODULE_3__static_dist_toast_toast__["a" /* default */].fail("请填写联系信息或收货地址");
        return;
      }

      var itemId = this.cartItems[0].BuyItem_Id;
      var count = this.cartItems[0].Count;
      var partnerId = this.cartItems[0].Partner_Id;
      var countItems = this.cartItems[0].BuyItem.CountItems;

      var payData = {
        itemId: this.cartItems[0].BuyItem_Id,
        count: this.cartItems[0].Count,
        partner_Id: this.cartItems[0].Partner_Id,
        countItems: this.cartItems[0].BuyItem.CountItems.filter(function (z) {
          return z.Count > 0;
        }),
        address: that.address,
        telphone: that.telphone,
        userName: that.userName,
        comment: that.comment
      };
      this.$api.postPay(payData).then(function (obj) {
        wx.requestPayment({
          //相关支付参数
          timeStamp: obj.timeStamp,
          nonceStr: obj.nonceStr,
          package: "prepay_id=" + obj.prepay_id,
          signType: obj.signType,
          paySign: obj.paySign,
          success: function success(res) {
            __WEBPACK_IMPORTED_MODULE_3__static_dist_toast_toast__["a" /* default */].success("支付成功");
            setTimeout(function () {
              that.$navigate.To("/pages/order?index=1");
            }, 1500);
          },
          fail: function fail(res) {
            __WEBPACK_IMPORTED_MODULE_3__static_dist_toast_toast__["a" /* default */].fail("支付失败");
          }
        });
      });
    }
  })
});

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "contentBody"
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('van-cell', {
    attrs: {
      "center": "true",
      "title": '团长:' + _vm.my_partner.nickname,
      "mpcomid": '0'
    }
  }, [_c('img', {
    staticStyle: {
      "border-radius": "50%",
      "width": "80rpx",
      "height": "80rpx"
    },
    attrs: {
      "src": _vm.my_partner.headimgurl
    },
    slot: "right-icon"
  })]), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": '团长地址:' + _vm.my_partner.LocationAddress,
      "icon": "location",
      "is-link": "",
      "mpcomid": '2'
    }
  }, [_c('van-icon', {
    staticClass: "van-cell__right-icon",
    attrs: {
      "name": "search",
      "mpcomid": '1'
    },
    slot: "right-icon"
  })], 1)], 1), _vm._v(" "), _vm._l((_vm.cartItems), function(x, index) {
    return _c('div', {
      key: index
    }, [_c('van-card', {
      attrs: {
        "lazy-load": "true",
        "thumb": x.BuyItem.LogoList[0] + '!w100h100',
        "num": x.Count,
        "origin-price": x.BuyItem.Price,
        "price": x.BuyItem.VipPrice,
        "mpcomid": '10_' + index
      }
    }, [_c('view', {
      staticClass: "title",
      slot: "title"
    }, [_vm._v(_vm._s(x.BuyItem.Name))]), _vm._v(" "), (x.BuyItem.ShareDesc) ? _c('view', {
      staticClass: "desc",
      slot: "desc"
    }, [_vm._v(_vm._s(x.BuyItem.ShareDesc))]) : _vm._e(), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [(x.BuyItem.CountItems && x.BuyItem.CountItems.length > 0) ? _c('view', _vm._l((x.BuyItem.CountItems), function(y, index2) {
      return _c('div', {
        key: index2,
        staticClass: "flex-between",
        staticStyle: {
          "margin": "20rpx 0"
        }
      }, [_c('van-tag', {
        attrs: {
          "plain": "",
          "size": "large",
          "type": "primary",
          "mpcomid": '4_' + index + '-' + index2
        }
      }, [_vm._v(_vm._s(y.Name) + " ￥" + _vm._s(y.Price) + "元")]), _vm._v(" "), _c('van-stepper', {
        attrs: {
          "min": 0,
          "value": y.Count,
          "eventid": '0_' + index + '-' + index2,
          "mpcomid": '5_' + index + '-' + index2
        },
        on: {
          "plus": function($event) {
            _vm.add(y)
          },
          "minus": function($event) {
            _vm.remove(y)
          }
        }
      })], 1)
    })) : _c('view', [(x.BuyItem.LimitBuyCount > 0) ? _c('van-stepper', {
      attrs: {
        "min": 1,
        "max": x.BuyItem.LimitBuyCount,
        "value": x.Count,
        "eventid": '1_' + index,
        "mpcomid": '6_' + index
      },
      on: {
        "plus": function($event) {
          _vm.add(x)
        },
        "minus": function($event) {
          _vm.remove(x)
        }
      }
    }) : _vm._e(), _vm._v(" "), (x.BuyItem.LimitBuyCount === 0) ? _c('van-stepper', {
      attrs: {
        "min": 1,
        "value": x.Count,
        "eventid": '2_' + index,
        "mpcomid": '7_' + index
      },
      on: {
        "plus": function($event) {
          _vm.add(x)
        },
        "minus": function($event) {
          _vm.remove(x)
        }
      }
    }) : _vm._e()], 1)]), _vm._v(" "), _c('view', {
      slot: "tags"
    }, [(x.BuyItem.LimitBuyCount == 0) ? _c('van-tag', {
      attrs: {
        "round": "",
        "type": "primary",
        "mpcomid": '9_' + index
      }
    }, [_vm._v("不限购")]) : _c('van-tag', {
      attrs: {
        "round": "",
        "type": "primary",
        "mpcomid": '8_' + index
      }
    }, [_vm._v("每人限购" + _vm._s(x.BuyItem.LimitBuyCount) + "件")])], 1)]), _vm._v(" "), (x.BuyItem.NoticeText) ? _c('van-notice-bar', {
      attrs: {
        "text": x.BuyItem.NoticeText,
        "mpcomid": '11_' + index
      }
    }) : _vm._e()], 1)
  }), _vm._v(" "), _c('van-submit-bar', {
    attrs: {
      "disabled": _vm.totalVipPrice <= 0,
      "price": _vm.totalVipPrice * 100,
      "button-type": "primary",
      "button-text": "微信支付",
      "eventid": '3',
      "mpcomid": '13'
    },
    on: {
      "submit": _vm.onSubmit
    }
  }, [(_vm.youhuan > 0) ? _c('van-tag', {
    attrs: {
      "type": "danger",
      "mpcomid": '12'
    }
  }, [_vm._v("省 " + _vm._s(_vm.youhuan) + "元")]) : _vm._e()], 1), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": "收货方式",
      "mpcomid": '15'
    }
  }, [_c('van-cell', {
    attrs: {
      "title": _vm.cartItems[0].BuyItem.PickUpType,
      "mpcomid": '14'
    }
  })], 1), _vm._v(" "), (_vm.cartItems[0].BuyItem.PickUpType == '团长提货送货' || _vm.cartItems[0].BuyItem.PickUpType == '商家送货') ? _c('demo-block', {
    attrs: {
      "title": "收货地址",
      "mpcomid": '21'
    }
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '20'
    }
  }, [_c('van-cell', {
    attrs: {
      "title": _vm.address || '选择收货地址',
      "clickable": "",
      "icon": "location",
      "eventid": '4',
      "mpcomid": '17'
    },
    on: {
      "click": _vm.setAddress
    }
  }, [_c('van-icon', {
    staticClass: "van-cell__right-icon",
    attrs: {
      "name": "search",
      "mpcomid": '16'
    },
    slot: "right-icon"
  })], 1), _vm._v(" "), (_vm.telphone) ? _c('van-cell', {
    attrs: {
      "title": '联系电话: ' + _vm.telphone,
      "clickable": "",
      "icon": "phone",
      "eventid": '5',
      "mpcomid": '18'
    },
    on: {
      "click": _vm.setAddress
    }
  }) : _vm._e(), _vm._v(" "), (_vm.userName) ? _c('van-cell', {
    attrs: {
      "title": '收货人: ' + _vm.userName,
      "clickable": "",
      "icon": "user",
      "eventid": '6',
      "mpcomid": '19'
    },
    on: {
      "click": _vm.setAddress
    }
  }) : _vm._e()], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.cartItems[0].BuyItem.PickUpType == '到店自提' || _vm.cartItems[0].BuyItem.PickUpType == '团长处自提') ? _c('demo-block', {
    attrs: {
      "title": "联系方式",
      "mpcomid": '27'
    }
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '26'
    }
  }, [_c('van-cell', {
    attrs: {
      "title": _vm.address || '选择联系方式',
      "clickable": "",
      "icon": "location",
      "eventid": '7',
      "mpcomid": '23'
    },
    on: {
      "click": _vm.setAddress
    }
  }, [_c('van-icon', {
    staticClass: "van-cell__right-icon",
    attrs: {
      "name": "search",
      "mpcomid": '22'
    },
    slot: "right-icon"
  })], 1), _vm._v(" "), (_vm.telphone) ? _c('van-cell', {
    attrs: {
      "title": '联系电话: ' + _vm.telphone,
      "clickable": "",
      "icon": "phone",
      "eventid": '8',
      "mpcomid": '24'
    },
    on: {
      "click": _vm.setAddress
    }
  }) : _vm._e(), _vm._v(" "), (_vm.userName) ? _c('van-cell', {
    attrs: {
      "title": '联系人: ' + _vm.userName,
      "clickable": "",
      "icon": "user",
      "eventid": '9',
      "mpcomid": '25'
    },
    on: {
      "click": _vm.setAddress
    }
  }) : _vm._e()], 1)], 1) : _vm._e(), _vm._v(" "), _c('demo-block', {
    staticStyle: {
      "margin-bottom": "20vh"
    },
    attrs: {
      "title": "备注",
      "mpcomid": '30'
    }
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '29'
    }
  }, [_c('van-field', {
    attrs: {
      "value": _vm.comment,
      "label": "备注",
      "type": "textarea",
      "required": "",
      "autosize": "",
      "data-name": "comment",
      "eventid": '10',
      "mpcomid": '28'
    },
    on: {
      "change": _vm.onChange
    }
  })], 1)], 1)], 2), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '31'
    }
  }), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '32'
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
     require("vue-hot-reload-api").rerender("data-v-27a5b657", esExports)
  }
}

/***/ })

},[368]);