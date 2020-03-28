require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_buyItems_vue__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b8495b82_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_buyItems_vue__ = __webpack_require__(322);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(320)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_buyItems_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b8495b82_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_buyItems_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shop\\buyItems.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] buyItems.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b8495b82", Component.options)
  } else {
    hotAPI.reload("data-v-b8495b82", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 320:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Tips__ = __webpack_require__(21);
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






/* harmony default export */ __webpack_exports__["a"] = ({
  onLoad: function onLoad(options) {
    console.log(options);
    if (!options.shopId) wx.navigateBack();
    wx.setNavigationBarTitle({ title: options.shopName + " 商品列表" });
  },
  onReady: function onReady() {
    this.shopBuyItems = [];
    this.shopId = this.$root.$mp.query.shopId;
  },
  mounted: function mounted() {
    this.getItems();
  },

  data: {
    shopId: null
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["e" /* mapState */])(["shopBuyItems", "openid"])),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(["getShopBuyItems", "deleteBuyItem"]), {
    getItems: function getItems() {
      var that = this;
      that.getShopBuyItems({ shopId: this.$root.$mp.query.shopId });
    },

    //删除
    onDelete: function onDelete(item) {
      var _this = this;

      console.log("onDelete");
      console.log(item);
      __WEBPACK_IMPORTED_MODULE_2__utils_Tips__["a" /* default */].confirm("删除后将不能恢复").then(function (res) {
        _this.deleteBuyItem(item.Id);
        // this.shopBuyItems = this.shopBuyItems.filter(z => z.Id != item.Id);
      }).catch(function () {
        console.log("no");
      });
    }
  }),
  //下拉
  onPullDownRefresh: function onPullDownRefresh() {
    this.getItems();
    wx.stopPullDownRefresh();
  }
});

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "contentBody"
  }, [_c('div', {
    staticStyle: {
      "padding": "20rpx"
    }
  }, _vm._l((_vm.shopBuyItems), function(x, index) {
    return _c('van-card', {
      key: x,
      staticClass: "card",
      attrs: {
        "lazy-load": "true",
        "tag": x.Type,
        "thumb": x.LogoList[0] + '!w100h100',
        "origin-price": x.Price,
        "price": x.VipPrice,
        "eventid": '2_' + index,
        "mpcomid": '5_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.$navigate.To('/pages/item/itemDetail?id=' + x.Id)
        }
      }
    }, [_c('view', {
      staticClass: "footer",
      slot: "footer"
    }, [_c('van-button', {
      attrs: {
        "size": "small",
        "type": "primary",
        "eventid": '0_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.$navigate.To('/pages/shop/addItem?itemId=' + x.Id)
        }
      }
    }, [_vm._v("编辑")]), _vm._v(" "), _c('van-button', {
      attrs: {
        "size": "small",
        "type": "danger",
        "eventid": '1_' + index,
        "mpcomid": '1_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.onDelete(x)
        }
      }
    }, [_vm._v("删除")])], 1), _vm._v(" "), _c('view', {
      staticClass: "title",
      slot: "title"
    }, [_vm._v(_vm._s(x.Name))]), _vm._v(" "), (x.ShareDesc) ? _c('view', {
      staticClass: "desc",
      slot: "desc"
    }, [_vm._v(_vm._s(x.ShareDesc))]) : _vm._e(), _vm._v(" "), _c('view', {
      staticStyle: {
        "margin-top": "24rpx"
      },
      slot: "tags"
    }, [_c('van-tag', {
      attrs: {
        "round": "",
        "type": "primary",
        "mpcomid": '2_' + index
      }
    }, [_vm._v(_vm._s(x.PickUpType))]), _vm._v(" "), (x.LimitBuyCount == 0) ? _c('van-tag', {
      attrs: {
        "round": "",
        "type": "primary",
        "mpcomid": '4_' + index
      }
    }, [_vm._v("不限购")]) : _c('van-tag', {
      attrs: {
        "round": "",
        "type": "primary",
        "mpcomid": '3_' + index
      }
    }, [_vm._v("限购" + _vm._s(x.LimitBuyCount) + "件")])], 1)])
  }))]), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '7'
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
     require("vue-hot-reload-api").rerender("data-v-b8495b82", esExports)
  }
}

/***/ })

},[375]);