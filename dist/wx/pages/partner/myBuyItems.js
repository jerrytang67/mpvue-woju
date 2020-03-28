require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_myBuyItems_vue__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_181bccde_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_myBuyItems_vue__ = __webpack_require__(341);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(335)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_myBuyItems_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_181bccde_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_myBuyItems_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\partner\\myBuyItems.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] myBuyItems.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-181bccde", Component.options)
  } else {
    hotAPI.reload("data-v-181bccde", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 335:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_record__ = __webpack_require__(337);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    console.log(options);
  },
  mounted: function mounted() {
    this.get();
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["e" /* mapState */])(["openid", "partner", "myBuyItems", "partnerShops", "position"])),
  data: {
    selectShopIndex: 0,
    currentShop: null,
    items: [],
    positionHasGot: false
  },
  onReady: function onReady() {},

  components: {
    record: __WEBPACK_IMPORTED_MODULE_2__components_record__["a" /* default */]
  },
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapMutations */])(["SET_POSITION"]), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(["getPartnerSetting", "deleteMyItem", "topMyItem"]), {
    onShare: function onShare(item) {
      wx.setStorageSync("shareItem", item);
    },
    onTabChange: function onTabChange(e) {
      console.log(e);
      var index = e.mp.detail.index;
      if (index === 0) {
        this.get();
      }
    },
    onChange: function onChange(x) {
      console.log(x.State);
      this.addItem(x.BuyItem.Id, x.State ? "disable" : "add");
      // console.log(x);
      x.State = !x.State;
    },
    addItem: function addItem(itemId, t) {
      if (!t) t = "add";
      console.log("SetPartnerBuyItems");
      console.log({ itemId: itemId });
      this.$api.setItems(itemId, t).then();
    },
    topItem: function topItem(index) {
      var item = this.myBuyItems[index];
      if (!item) return;
      this.$api.setItems(item.BuyItem_Id, "top").then(function (res) {
        //this.topMyItem(itemId);
        item.State = 2;
      });
    },
    notopItem: function notopItem(index) {
      var item = this.myBuyItems[index];
      if (!item) return;
      this.$api.setItems(item.BuyItem_Id, "notop").then(function (res) {
        item.State = 1;
      });
    },
    deleteItem: function deleteItem(index) {
      var _this = this;

      var itemId = this.myBuyItems[index].BuyItem.Id;
      if (!itemId) return;
      this.$api.setItems(itemId, "delete").then(function (res) {
        _this.deleteMyItem(itemId);
      });
    },

    //商家便签切换
    onBadgeChange: function onBadgeChange(e) {
      var _this2 = this;

      console.log(e);
      if (e.mp.detail < 0) return;
      //this.selectShopIndex = e.mp.detail;
      var index = e.mp.detail - 1;
      if (index >= 0) {
        this.currentShop = this.partnerShops[index];
        var shopId = this.currentShop.Id;
        console.log(this.currentShop);
        this.$api.getShopBuyItems({ shopId: shopId, state: 1 }).then(function (res) {
          _this2.items[shopId] = res;
          _this2.items = _this2.items[shopId];
        });
      }
    },
    get: function get() {
      var that = this;
      if (!that.positionHasGot) wx.getLocation({
        type: "gcj02",
        success: function success(res) {
          //save to store
          that.SET_POSITION(res);
          that.getPartnerSetting({ lat: res.latitude, lng: res.longitude });
          that.positionHasGot = true;
        },
        fail: function fail(error) {
          Object(__WEBPACK_IMPORTED_MODULE_3__static_dist_toast_toast__["a" /* default */])("必须授权定位才可查看团长");
        }
      });else that.getPartnerSetting({
        lat: that.position.latitude,
        lng: that.position.longitude
      });
    }
  }),

  //下拉
  onPullDownRefresh: function onPullDownRefresh() {
    this.get();
    wx.stopPullDownRefresh();
  }
});

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_record_vue__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_cc3b04be_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_record_vue__ = __webpack_require__(340);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(338)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_record_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_cc3b04be_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_record_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\record.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] record.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cc3b04be", Component.options)
  } else {
    hotAPI.reload("data-v-cc3b04be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 338:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_upload__ = __webpack_require__(49);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["data"],
  data: function data() {
    return {
      recorderManager: wx.getRecorderManager(),
      innerAudioContext: wx.createInnerAudioContext(),
      tempFilePath: ""
    };
  },
  methods: {
    start: function start() {
      var options = {
        duration: 10000, //指定录音的时长，单位 ms
        sampleRate: 16000, //采样率
        numberOfChannels: 1, //录音通道数
        encodeBitRate: 96000, //编码码率
        format: "mp3", //音频格式，有效值 aac/mp3
        frameSize: 50 //指定帧大小，单位 KB
      };
      //开始录音
      this.recorderManager.start(options);
      this.recorderManager.onStart(function () {
        console.log("recorder start");
      });
      //错误回调
      this.recorderManager.onError(function (res) {
        console.log(res);
      });
    }, //end start
    pause: function pause() {
      this.recorderManager.pause();
      this.recorderManager.onPause(function (res) {
        console.log("暂停录音");
      });
    }, //end pause
    resume: function resume() {
      this.recorderManager.resume();
      this.recorderManager.onStart(function () {
        console.log("重新开始录音");
      });
      //错误回调
      this.recorderManager.onError(function (res) {
        console.log(res);
      });
    }, //end resume
    stop: function stop() {
      var _this = this;

      //停止录音
      this.recorderManager.stop();
      this.recorderManager.onStop(function (res) {
        _this.tempFilePath = res.tempFilePath;
        console.log("停止录音", res.tempFilePath);
        var tempFilePath = res.tempFilePath;
      });
    }, //end stop

    play: function play() {
      if (this.tempFilePath) {
        //播放声音
        this.innerAudioContext.autoplay = true;
        this.innerAudioContext.src = this.tempFilePath;
        this.innerAudioContext.onPlay(function () {
          console.log("开始播放");
        });
        this.innerAudioContext.onError(function (res) {
          console.log(res.errMsg);
          console.log(res.errCode);
        });
      }
    },
    upload: function upload() {
      if (this.tempFilePath) __WEBPACK_IMPORTED_MODULE_0__utils_upload__["a" /* default */].uploadRecord(this.tempFilePath).then(function (res) {
        console.log(res);
        wx.showToast({
          title: res
        });
      });
    }
  }
});

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.start
    }
  }, [_vm._v("开始录音")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.pause
    }
  }, [_vm._v("暂停")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.resume
    }
  }, [_vm._v("继续")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.stop
    }
  }, [_vm._v("停止")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.play
    }
  }, [_vm._v("播放")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.upload
    }
  }, [_vm._v("上传")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cc3b04be", esExports)
  }
}

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticStyle: {
      "background": "#fff",
      "width": "100vw"
    }
  }, [_c('van-tabs', {
    attrs: {
      "active": "0",
      "eventid": '8',
      "mpcomid": '12'
    },
    on: {
      "change": _vm.onTabChange
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "我的商品",
      "mpcomid": '5'
    }
  }, _vm._l((_vm.myBuyItems), function(x, index) {
    return _c('van-card', {
      key: x,
      attrs: {
        "index": index,
        "lazy-load": "true",
        "desc": x.BuyItem.ShareDesc,
        "title": x.BuyItem.Name,
        "origin-price": x.BuyItem.Price,
        "price": x.BuyItem.VipPrice,
        "mpcomid": '4_' + index
      }
    }, [_c('view', {
      slot: "thumb"
    }, [_c('image', {
      staticStyle: {
        "width": "90px",
        "height": "90px"
      },
      attrs: {
        "mode": "aspectFill",
        "src": x.BuyItem.LogoList[0] + '!w100h100',
        "lazy-load": "true",
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.$navigate.To(("/pages/item/itemDetail?id=" + (x.BuyItem.Id) + "&pid=" + (_vm.partner.Id)))
        }
      }
    })]), _vm._v(" "), _c('view', {
      staticClass: "title",
      slot: "title"
    }, [_vm._v(_vm._s(x.BuyItem.Name))]), _vm._v(" "), (x.BuyItem.ShareDesc) ? _c('view', {
      staticClass: "desc",
      slot: "desc"
    }, [_vm._v(_vm._s(x.BuyItem.ShareDesc))]) : _vm._e(), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_c('view', [(x.State !== 2) ? _c('van-button', {
      attrs: {
        "size": "small",
        "type": "primary",
        "eventid": '1_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.topItem(index)
        }
      }
    }, [_vm._v("置顶")]) : _vm._e(), _vm._v(" "), (x.State === 2) ? _c('van-button', {
      attrs: {
        "size": "small",
        "type": "primary",
        "eventid": '2_' + index,
        "mpcomid": '1_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.notopItem(index)
        }
      }
    }, [_vm._v("取消置顶")]) : _vm._e(), _vm._v(" "), _c('van-button', {
      staticStyle: {
        "margin-left": "10px"
      },
      attrs: {
        "size": "small",
        "type": "danger",
        "eventid": '3_' + index,
        "mpcomid": '2_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.deleteItem(index)
        }
      }
    }, [_vm._v("删除")])], 1)]), _vm._v(" "), _c('view', {
      slot: "tags"
    }, [_c('van-switch', {
      attrs: {
        "size": "45rpx",
        "checked": x.State ? true : false,
        "eventid": '4_' + index,
        "mpcomid": '3_' + index
      },
      on: {
        "change": function($event) {
          _vm.onChange(x)
        }
      }
    })], 1)])
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "店铺",
      "mpcomid": '11'
    }
  }, [_c('div', {
    staticStyle: {
      "display": "flex",
      "flex-direction": "row",
      "justify-content": "start"
    }
  }, [_c('scroll-view', {
    staticStyle: {
      "height": "calc(100vh - 44px)",
      "width": "25vw"
    },
    attrs: {
      "scroll-y": ""
    }
  }, [_c('van-badge-group', {
    attrs: {
      "active": _vm.selectShopIndex,
      "eventid": '5',
      "mpcomid": '8'
    },
    on: {
      "change": _vm.onBadgeChange
    }
  }, [_c('van-badge', {
    attrs: {
      "title": "莴聚公告",
      "mpcomid": '6'
    }
  }), _vm._v(" "), _vm._l((_vm.partnerShops), function(x, index) {
    return _c('van-badge', {
      key: x,
      attrs: {
        "title": x.ShopName,
        "mpcomid": '7_' + index
      }
    })
  })], 2)], 1), _vm._v(" "), _c('view', {
    staticStyle: {
      "width": "75vw"
    }
  }, [_c('div', [(_vm.selectShopIndex > 0) ? _c('div', {
    staticStyle: {
      "padding": "25rpx",
      "font-size": "32rpx"
    }
  }, [_c('image', {
    staticStyle: {
      "width": "50px",
      "height": "50px",
      "border-radius": "50%"
    },
    attrs: {
      "src": _vm.currentShop.LogoImageUrl + '!w100h100'
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.currentShop.ShopName))]), _vm._v(" "), _c('p', [_vm._v("地址:" + _vm._s(_vm.currentShop.ShopAddress))]), _vm._v(" "), _c('p', [_vm._v("电话:" + _vm._s(_vm.currentShop.ShopKeFuTel))])], 1) : _vm._e(), _vm._v(" "), _vm._l((_vm.items), function(x, index) {
    return _c('van-card', {
      key: x,
      attrs: {
        "lazy-load": "true",
        "thumb": x.LogoList[0] + '!w100h100',
        "origin-price": x.Price,
        "price": x.VipPrice,
        "eventid": '7_' + index,
        "mpcomid": '10_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.$navigate.To('/pages/item/itemDetail?id=' + x.Id)
        }
      }
    }, [_c('view', {
      slot: "footer"
    }, [_c('van-button', {
      attrs: {
        "size": "small",
        "type": "danger",
        "eventid": '6_' + index,
        "mpcomid": '9_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.addItem(x.Id)
        }
      }
    }, [_vm._v("上架")])], 1), _vm._v(" "), _c('view', {
      staticClass: "title",
      slot: "title"
    }, [_vm._v(_vm._s(x.Name))]), _vm._v(" "), (x.ShareDesc) ? _c('view', {
      staticClass: "desc",
      slot: "desc"
    }, [_vm._v(_vm._s(x.ShareDesc))]) : _vm._e(), _vm._v(" "), _c('view', {
      slot: "tags"
    })])
  })], 2)])], 1)])], 1)], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '13'
    }
  }), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '14'
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
     require("vue-hot-reload-api").rerender("data-v-181bccde", esExports)
  }
}

/***/ })

},[378]);