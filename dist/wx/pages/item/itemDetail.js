require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_itemDetail_vue__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_71a04ea8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_itemDetail_vue__ = __webpack_require__(303);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(300)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-71a04ea8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_itemDetail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_71a04ea8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_itemDetail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\item\\itemDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] itemDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71a04ea8", Component.options)
  } else {
    hotAPI.reload("data-v-71a04ea8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 300:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_dist_toast_toast__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_promisify__ = __webpack_require__(302);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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





var wxGetImageInfo = Object(__WEBPACK_IMPORTED_MODULE_6__utils_promisify__["a" /* promisify */])(wx.getImageInfo);
var wxCanvasToTempFilePath = Object(__WEBPACK_IMPORTED_MODULE_6__utils_promisify__["a" /* promisify */])(wx.canvasToTempFilePath);
var wxSaveImageToPhotosAlbum = Object(__WEBPACK_IMPORTED_MODULE_6__utils_promisify__["a" /* promisify */])(wx.saveImageToPhotosAlbum);
/* harmony default export */ __webpack_exports__["a"] = ({
  onLoad: function onLoad(options) {
    if (!options.id) wx.navigateBack();
    wx.setNavigationBarTitle({ title: "商品详情" });
  },

  onShareAppMessage: function onShareAppMessage(res) {
    var select_partner = wx.getStorageSync("my_partner");
    var currentItem = wx.getStorageSync("currentItem");

    if (select_partner && currentItem) return {
      title: currentItem.Name,
      path: "/pages/item/itemDetail?pid=" + select_partner.Id + "&id=" + currentItem.Id
    };
  },
  data: {
    pid: 1,
    modalShow: false,
    colorList: [{ mid: "#7B24B3", top: "#A22CB1" }, { mid: "#F44786", top: "#D21B51" }, { mid: "#FFE948", top: "#D7D63D" }, { mid: "#4DA2E5", top: "#232A3C" }, { mid: "#FD2739", top: "#FD2739" }]
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.load();
    wx.stopPullDownRefresh();
  },
  onReady: function onReady() {
    var that = this;
    var query = that.$root.$mp.query;
    if (query.pid) {
      that.$api.getPartner({ pid: query.pid }).then(function (res) {
        that.SET_SELECT_PARTNER(res); //store set the current partner
      });
      that.$api.loadPartnerItems(that.$root.$mp.query.pid).then(function (res) {
        if (res) that.SET_BUYITEMLIST(res); //store set current buyitem list
      });
    }
  },
  onUnload: function onUnload() {
    console.log("销毁前");
    this.modalShow = false;
  },
  mounted: function mounted() {
    this.load();
  },

  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["e" /* mapState */])(["userInfo", "cartItems", "buyItems", "total", "currentItem", "my_partner"])),
  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["d" /* mapMutations */])(["SET_ITEM", "SET_BUYITEMLIST", "SET_SELECT_PARTNER"]), Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(["add_to_cart"]), {
    copyWeixin: function copyWeixin() {
      var that = this;
      console.log(that.my_partner);
      wx.setClipboardData({
        data: that.my_partner.weixin,
        success: function success(res) {
          wx.getClipboardData({
            success: function success(res) {
              console.log(res.data); // data
              wx.showToast({
                title: "复制微信名成功",
                icon: "none"
              });
            }
          });
        }
      });
    },
    onClose: function onClose() {},

    //todo:这里要加入loading处理
    draw: function draw(index, rpx) {
      var that = this;
      var imgList = [].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(that.currentItem.LogoList.filter(function (r) {
        return !r.endsWith(".gif");
      })));
      var imgListLength = imgList.length;
      var idx = Math.floor(Math.random() * imgListLength);
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([wxGetImageInfo({
        src: imgList[idx].replace(/http:/i, "https:") + "!wh500"
      }), wxGetImageInfo({
        src: "https://www.lovewujiang.com/woju/getPartnerQR?pid=" + that.my_partner.Id + "&itemId=" + that.currentItem.Id + "&storeId=6"
      })]).then(function (res) {
        console.log(res);
        var ctx = wx.createCanvasContext("shareCanvas");
        var ctxW = 700 * rpx;
        var ctxH = 1000 * rpx;
        var space = 35 * rpx;
        var space_lg = 46 * rpx;
        var tLength = that.currentItem.Name.length;
        var tPrice = that.currentItem.VipPrice;
        var nickname = that.my_partner.nickname;
        var qrtext = "长按识别，即可查看商品";
        var label = that.my_partner.LocationLabel;
        var nowH = 0;
        /* 绘制白色背景 todo:以图片代替*/
        ctx.rect(0, 0, ctxW, ctxH);
        ctx.setFillStyle("white");
        ctx.fillRect(0, 0, ctxW, ctxH);
        /* 底图 */
        ctx.drawImage(res[0].path, space_lg, space_lg, ctxW - 2 * space_lg, ctxW - 2 * space_lg);
        /* 背景*/
        ctx.setFillStyle(that.colorList[index].top);
        ctx.fillRect(space_lg, 0, ctxW - 2 * space_lg, space_lg);
        /*绘制店名*/
        ctx.setFontSize(22 * rpx);
        ctx.setFillStyle("#fff");
        ctx.textAlign = "left";
        ctx.fillText(label + " \u793E\u533A " + nickname + " \u7684\u5C0F\u5E97", space_lg + 5 * rpx, space);
        ctx.restore();
        /* 绘制产品名称背景 */
        ctx.setFillStyle(that.colorList[index].mid);
        ctx.fillRect(space_lg, space_lg + ctxW - 2 * space_lg, ctxW - 2 * space_lg, 120 * rpx);
        nowH = space_lg + ctxW - 2 * space_lg + 45 * rpx;
        ctx.setTextAlign("left");
        ctx.setFillStyle("#ffffff");
        ctx.setFontSize(32 * rpx);
        ctx.fillText(that.currentItem.Name.substr(0, 16), space_lg + space, nowH);
        nowH = nowH + 45 * rpx;
        if (tLength > 13) {
          ctx.setTextAlign("left");
          ctx.setFillStyle("#ffffff");
          ctx.setFontSize(32 * rpx);
          ctx.fillText(that.currentItem.Name.substr(16, 15) + "...", space_lg + space, nowH);
        }
        nowH = 800 * rpx;
        var qrImgSize = 168 * rpx;
        /* 绘制线框*/
        ctx.setLineDash([1, 3], 1);
        ctx.beginPath();
        ctx.moveTo(space_lg, nowH);
        ctx.lineTo(400 * rpx, nowH);
        ctx.moveTo(space_lg, nowH + qrImgSize);
        ctx.lineTo(400 * rpx, nowH + qrImgSize);
        ctx.setStrokeStyle("#979797");
        ctx.restore();
        /*绘制文字*/
        ctx.setFontSize(36 * rpx);
        ctx.setFillStyle("#333333");
        ctx.textAlign = "left";
        ctx.fillText("￥", space_lg + space, nowH + 70 * rpx);
        ctx.setFontSize(48 * rpx);
        ctx.fillText(tPrice, space_lg + 70 * rpx, nowH + 70 * rpx);
        ctx.setFontSize(32 * rpx);
        ctx.setFillStyle("#666666");
        ctx.fillText(qrtext, space_lg, nowH + qrImgSize - 30 * rpx);
        ctx.restore();
        // 小程序码
        ctx.drawImage(res[1].path, 700 * rpx / 4 * 3 - qrImgSize / 2, 800 * rpx, qrImgSize, qrImgSize);

        /*圆形头像*/
        // ctx.save()
        // ctx.beginPath();
        // ctx.arc(35, 30, 20, 0, 2 * Math.PI)
        // ctx.setFillStyle('#fff')
        // ctx.fill()
        // ctx.clip()
        // ctx.drawImage( res[2].path, 15, 10, 40, 40)
        // ctx.restore()
        ctx.stroke();
        ctx.draw();
        //打开窗口
      }, function (error) {
        wx.showToast({
          title: "海报图片下载失败",
          icon: "none"
        });
      });
    },
    openModal: function openModal() {
      var that = this;
      that.modalShow = !that.modalShow;
      if (that.modalShow) {
        var rpx;
        var index = Math.floor(Math.random() * that.colorList.length);
        //获取屏幕宽度，获取自适应单位
        wx.getSystemInfo({
          success: function success(res) {
            rpx = res.windowWidth / 750;
            // console.log(res.windowWidth);
            // console.log(rpx);
          }
        });
        that.draw(index, rpx);
      }
    },
    save: function save() {
      wxCanvasToTempFilePath({
        canvasId: "shareCanvas"
      }, this).then(function (res) {
        return wxSaveImageToPhotosAlbum({
          filePath: res.tempFilePath
        });
      }).then(function (res) {
        wx.showToast({
          title: "已保存到相册"
        });
      }, function (error) {
        wx.showToast({
          title: "保存失败,请打开保存相册权限!!",
          icon: "none"
        });
      });
    },
    load: function load() {
      var that = this;
      this.currentItem = {};
      that.SET_ITEM({});
      var id = this.$root.$mp.query.id;
      this.$api.getItemDetail({ id: id }).then(function (res) {
        console.log(res);
        that.SET_ITEM(res);
      });
    },
    joinShop: function joinShop() {
      this.$api.joinShop(this.currentItem.ShopId).then(function (res) {
        __WEBPACK_IMPORTED_MODULE_5__static_dist_toast_toast__["a" /* default */].success("申请成功");
        return;
      });
    },
    getItem: function getItem() {
      var _this = this;

      var current = this.buyItems.filter(function (z) {
        return z.BuyItem.Id == _this.$root.$mp.query["id"];
      })[0];
      return current;
    },
    back: function back() {
      var pages = getCurrentPages();
      if (pages.length > 1) wx.navigateBack();else wx.switchTab({ url: "/pages/index/index" });
    },
    addCart: function addCart() {
      var item = this.getItem();
      var that = this;
      console.log(item);
      if (item.BuyItem) {
        if (new Date(that.currentItem.DateTimeEnd) < new Date()) {
          __WEBPACK_IMPORTED_MODULE_5__static_dist_toast_toast__["a" /* default */].fail("已结束");
          return;
        }
        item.Count = 1;
        this.add_to_cart(item).then(function (res) {
          wx.navigateTo({ url: "/pages/index/pay" });
        });
      }
    },
    getpay: function getpay() {
      this.addCart();
    },
    previewImage: function previewImage(e) {
      console.log(e);
      var that = this;
      wx.previewImage({
        current: that.currentItem.LogoList[e],
        urls: that.currentItem.LogoList // 需要预览的图片http链接列表
      });
    },
    onClickButton: function onClickButton() {},
    onClickIcon: function onClickIcon() {
      // console.log("go to cart");
      wx.switchTab({ url: "/pages/index/cart" });
    }
  })
});

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = promisify;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);


function promisify(api) {
  return function (options) {
    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      api.apply(undefined, [__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    });
  };
}
/* unused harmony default export */ var _unused_webpack_default_export = ({
  promisify: promisify
});

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "background": "#fff"
    }
  }, [_c('div', {
    staticStyle: {
      "position": "relative"
    }
  }, [_c('swiper', {
    staticClass: "swiper",
    attrs: {
      "indicator-dots": "true",
      "autoplay": "true",
      "interval": "5000",
      "duration": "500"
    }
  }, _vm._l((_vm.currentItem.LogoList), function(x, $index) {
    return _c('block', {
      key: x
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0_' + $index
      }
    }, [_c('img', {
      attrs: {
        "src": x + '!w500',
        "eventid": '0_' + $index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.previewImage($index)
        }
      }
    })])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "locationLabel flex-r-ac"
  }, [_c('img', {
    staticClass: "img-circle thumb48",
    staticStyle: {
      "margin-right": "5px",
      "border": "2px solid #fff"
    },
    attrs: {
      "src": _vm.my_partner.headimgurl,
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.copyWeixin($event)
      }
    }
  }), _vm._v(" "), _c('van-tag', {
    staticClass: "locationLabel-tag",
    attrs: {
      "round": "",
      "type": "danger",
      "mpcomid": '1'
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "28rpx",
      "padding": "5rpx 10rpx"
    }
  }, [_vm._v(_vm._s(_vm.my_partner.LocationLabel) + " 社区")])])], 1)], 1), _vm._v(" "), _c('view', {
    staticClass: "details-msg"
  }, [_c('view', {
    staticClass: "details-title"
  }, [_vm._v(_vm._s(_vm.currentItem.Name))]), _vm._v(" "), _c('view', {
    staticClass: "details_pinfo"
  }, [_c('text', {
    staticClass: "price"
  }, [_vm._v("￥" + _vm._s(_vm.currentItem.VipPrice))])]), _vm._v(" "), _c('view', {
    staticClass: "baoyou"
  }, [_c('van-tag', {
    attrs: {
      "round": "",
      "type": "primary",
      "mpcomid": '2'
    }
  }, [_vm._v(_vm._s(_vm.currentItem.PickUpType))]), _vm._v(" "), (_vm.currentItem.LimitBuyCount == 0) ? _c('van-tag', {
    attrs: {
      "round": "",
      "type": "primary",
      "mpcomid": '4'
    }
  }, [_vm._v("不限购")]) : _c('van-tag', {
    attrs: {
      "round": "",
      "type": "primary",
      "mpcomid": '3'
    }
  }, [_vm._v("每人限购" + _vm._s(_vm.currentItem.LimitBuyCount) + "件")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "right"
    }
  }, [_c('button', {
    attrs: {
      "type": "default",
      "size": "mini",
      "round": "",
      "eventid": '2'
    },
    on: {
      "click": _vm.openModal
    }
  }, [_vm._v("海报")])], 1)], 1)]), _vm._v(" "), _c('view', {
    staticClass: "order_num"
  }, [_c('view', {
    staticClass: "doc"
  }, [_vm._v("\n      库存:\n      "), _c('text', {
    staticClass: "num"
  }, [_vm._v(_vm._s(_vm.currentItem.Count) + "件")])]), _vm._v(" "), (_vm.currentItem.SoldCount > 5) ? _c('view', {
    staticClass: "doc"
  }, [_vm._v("\n      订单中:\n      "), _c('text', {
    staticClass: "num"
  }, [_vm._v("已拼" + _vm._s(_vm.currentItem.SoldCount) + "件")])]) : _vm._e()]), _vm._v(" "), (_vm.currentItem.CountItems && _vm.currentItem.CountItems.length > 0) ? _c('view', {
    staticStyle: {
      "width": "90vw"
    }
  }, _vm._l((_vm.currentItem.CountItems), function(x, index) {
    return _c('view', {
      key: x,
      staticStyle: {
        "margin": "20rpx 0"
      }
    }, [_c('van-tag', {
      attrs: {
        "plain": "",
        "size": "large",
        "type": "primary",
        "mpcomid": '5_' + index
      }
    }, [_vm._v(_vm._s(x.Name) + " ￥" + _vm._s(x.Price) + "元")])], 1)
  })) : _vm._e(), _vm._v(" "), _c('view', {
    staticClass: "block"
  }, [_c('view', {
    staticClass: "block_title"
  }, [_vm._v("购前需知")]), _vm._v(" "), _c('view', {
    staticClass: "block_content"
  }, [_c('view', {
    staticClass: "doc"
  }, [_vm._v(_vm._s(_vm.currentItem.NoticeText))])])]), _vm._v(" "), _c('view', {
    staticClass: "block"
  }, [_c('view', {
    staticClass: "block_title"
  }, [_vm._v("跟团说明")]), _vm._v(" "), _c('view', {
    staticClass: "block_content"
  }, [_c('view', {
    staticClass: "doc"
  }, [(_vm.my_partner.weixin) ? _c('strong', {
    staticStyle: {
      "color": "red",
      "font-weight": "700",
      "margin": "5px"
    }
  }, [_vm._v("点击团长头像可以复制团长微信号")]) : _vm._e(), _vm._v(" "), _vm._v("\n        此商品在拼团期间可接收订单，如若超过拼团时间则不能下单；未付款订单系统一小时内将自动取消，所以，亲下单以后请尽快付款。\n        我们会以实际订单为准为您发货。请您放心购买!\n      ")], 1)])]), _vm._v(" "), (_vm.currentItem.Shop) ? _c('view', {
    staticClass: "block"
  }, [_c('view', {
    staticClass: "block_title"
  }, [_vm._v("供货商家")]), _vm._v(" "), _c('view', {
    staticClass: "block_content"
  }, [_c('view', {
    staticClass: "doc flex-r-ac"
  }, [_c('div', [_c('img', {
    staticClass: "img-circle thumb64",
    attrs: {
      "src": _vm.currentItem.Shop.LogoImageUrl + '!w100h100'
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "flex-c px-lg"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.currentItem.Shop.ShopName))]), _vm._v(" "), _c('p', [_vm._v("地址:" + _vm._s(_vm.currentItem.Shop.ShopAddress))]), _vm._v(" "), _c('p', [_vm._v("电话:" + _vm._s(_vm.currentItem.Shop.ShopKeFuTel))]), _vm._v(" "), _c('p', [_c('van-button', {
    attrs: {
      "size": "small",
      "type": "primary",
      "eventid": '3',
      "mpcomid": '6'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.joinShop($event)
      }
    }
  }, [_vm._v("申请成为Ta的团长")])], 1)], 1)])])]) : _vm._e(), _vm._v(" "), _c('view', {
    staticClass: "spacing"
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('view', {
    staticClass: "htmlContent"
  }, [_c('wxparser', {
    attrs: {
      "rich-text": _vm.currentItem.Desc,
      "mpcomid": '7'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "5vh"
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "spacing"
  }), _vm._v(" "), _c('van-goods-action', {
    attrs: {
      "mpcomid": '11'
    }
  }, [_c('van-goods-action-icon', {
    attrs: {
      "icon": "home-o",
      "text": "返回",
      "eventid": '4',
      "mpcomid": '8'
    },
    on: {
      "click": _vm.back
    }
  }), _vm._v(" "), _c('van-goods-action-icon', {
    attrs: {
      "icon": "chat-o",
      "text": "客服",
      "open-type": "contact",
      "mpcomid": '9'
    }
  }), _vm._v(" "), _c('van-goods-action-button', {
    attrs: {
      "type": "primary",
      "text": "立即购买",
      "eventid": '5',
      "mpcomid": '10'
    },
    on: {
      "click": function($event) {
        _vm.getpay()
      }
    }
  })], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '12'
    }
  }), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '13'
    }
  }), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.modalShow,
      "eventid": '8',
      "mpcomid": '16'
    },
    on: {
      "click-overlay": _vm.openModal
    }
  }, [_c('canvas', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.modalShow),
      expression: "modalShow"
    }],
    staticStyle: {
      "width": "700rpx",
      "height": "1000rpx"
    },
    attrs: {
      "canvas-id": "shareCanvas"
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.modalShow),
      expression: "modalShow"
    }],
    staticStyle: {
      "margin": "10px auto",
      "text-align": "center"
    }
  }, [_c('van-button', {
    staticStyle: {
      "margin": "5px"
    },
    attrs: {
      "type": "primary",
      "eventid": '6',
      "mpcomid": '14'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.save($event)
      }
    }
  }, [_vm._v("保存到相册")]), _vm._v(" "), _c('van-button', {
    staticStyle: {
      "margin": "5px"
    },
    attrs: {
      "type": "primary",
      "eventid": '7',
      "mpcomid": '15'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.openModal($event)
      }
    }
  }, [_vm._v("关 闭")])], 1)])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "block"
  }, [_c('view', {
    staticClass: "block_title"
  }, [_vm._v("商品详情")]), _vm._v(" "), _c('view', {
    staticClass: "block_content"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-71a04ea8", esExports)
  }
}

/***/ })

},[371]);