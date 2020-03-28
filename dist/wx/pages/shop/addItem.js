require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_addItem_vue__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fd352b02_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_addItem_vue__ = __webpack_require__(314);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(309)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_addItem_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fd352b02_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_addItem_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shop\\addItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] addItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fd352b02", Component.options)
  } else {
    hotAPI.reload("data-v-fd352b02", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 309:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_picUpload__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_dist_toast_toast__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_dist_dialog_dialog__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_Tips__ = __webpack_require__(21);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var DEFAULTITEM = {
  Name: "",
  LogoList: [],
  Price: null,
  VipPrice: null,
  Count: null,
  LimitBuyCount: 0,
  State: 1,
  ShopId: null,
  DateTimeStart: __WEBPACK_IMPORTED_MODULE_1_moment___default()(new Date()).format("YYYY-MM-DD"),
  DateTimeEnd: "",
  ShowType: 0,
  PickUpType: "到店自提"
};
/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    picUpload: __WEBPACK_IMPORTED_MODULE_4__components_picUpload__["a" /* default */]
  },
  onLoad: function onLoad(options) {
    var _this = this;

    //编辑模式
    if (options.itemId) {
      this.itemId = options.itemId;
      this.$api.getItemDetail({ id: this.itemId, isBackend: true }).then(function (res) {
        _this.item = res;
        _this.item.dateStart = __WEBPACK_IMPORTED_MODULE_1_moment___default()(new Date(res.DateTimeStart)).format("YYYY-MM-DD");
        _this.item.dateEnd = __WEBPACK_IMPORTED_MODULE_1_moment___default()(new Date(res.DateTimeEnd)).format("YYYY-MM-DD");
        _this.item.PickUpType = res.PickUpType.toString();
        wx.setNavigationBarTitle({ title: "编辑 " + res.Name });
      });
    } else {
      if (!options.shopId) wx.navigateBack();else {
        this.shopId = options.shopId;
        this.item.ShopId = this.shopId;
        wx.setNavigationBarTitle({ title: options.shopName + " 新建商品" });
      }
    }
  },
  onReady: function onReady() {
    // this.shopId = this.$root.$mp.query.shopId;
    // this.item.ShopId = this.shopId;
  },
  beforeDestroy: function beforeDestroy() {
    console.log("beforeDestroy");
  },

  data: {
    itemId: 0,
    dateStart: __WEBPACK_IMPORTED_MODULE_1_moment___default()(new Date()).format("YYYY-MM-DD"),
    dateEnd: __WEBPACK_IMPORTED_MODULE_1_moment___default()(new Date()).add({ months: 12 }).format("YYYY-MM-DD"),
    result: ["2"],
    showType: [{ name: "莴聚小程序", value: "2" }, { name: "吴江优选", value: "1" }],
    shopId: null,
    item: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, DEFAULTITEM, {}),
    width: "120rpx",
    height: "120rpx"
  },
  methods: {
    onPicUpdate: function onPicUpdate(e) {
      console.log("onPicUpdate", e);
      this.item.LogoList = e;
    },
    onRadioChange: function onRadioChange(event) {
      console.log(event);
      this.item.PickUpType = event.mp.currentTarget.dataset.name || this.item.PickUpType;
    },
    onRadioClick: function onRadioClick(event) {
      console.log(event);
      this.item.PickUpType = event.mp.currentTarget.dataset.name || this.item.PickUpType;
    },

    //发布
    post: function post() {
      var that = this;
      // this.item.PickUpType = parseInt(this.item.PickUpType);
      if (!that.itemId) {
        if (!that.shopId) {
          __WEBPACK_IMPORTED_MODULE_7__utils_Tips__["a" /* default */].error("没有选中商家");
          return;
        }
        that.item.ShopId = this.shopId;
      }
      if (!that.item.DateTimeEnd) {
        __WEBPACK_IMPORTED_MODULE_7__utils_Tips__["a" /* default */].error("结束时间不能为空");
        return;
      }
      //位操作.这里加起来
      // that.item.ShowType = 0;
      // if (that.result && that.result.length)
      //   that.result.forEach(element => {
      //     that.item.ShowType = parseInt(element) + parseInt(that.item.ShowType);
      //   });
      // else that.item.ShowType = 2;

      that.$api.post_buyitem(that.item).then(function (res) {
        that.item = DEFAULTITEM;
        __WEBPACK_IMPORTED_MODULE_7__utils_Tips__["a" /* default */].error("发布成功");
        setTimeout(function () {
          wx.navigateBack();
        }, 500);
        // Dialog.alert({
        //   title: "success",
        //   message: "发布成功"
        // }).then(() => {
        //   // on close
        // });
      });
    },
    onChkTap: function onChkTap(e) {
      console.log("onChkTap");
      console.log(e);
    },
    onChkToggle: function onChkToggle(event) {
      console.log("onCellToggle");
      console.log(event);
      var name = event.currentTarget.dataset.name;

      var checkbox = this.$mp.page.selectComponent(".checkboxes-" + name);
      checkbox.toggle();
    },
    onChkChange: function onChkChange(e) {
      console.log("onChkChange");
      console.log(e.mp.detail);
      this.result = e.mp.detail;
    },
    onChange: function onChange(e) {
      console.log(e);
      var value = e.mp.detail.value || e.mp.detail;
      var key = e.mp.currentTarget.dataset.name;
      this.item[key] = value;
    },
    save: function save() {
      console.log("set key:save_item_" + this.shopId);
      wx.setStorageSync("save_item_" + this.shopId, this.item);
      wx.navigateBack();
    },
    toggle: function toggle(key) {
      switch (key) {
        case "LimitBuyCount":
          {
            this.item[key] = this.item[key] > 0 ? 0 : 1;
            break;
          }
        case "State":
          {
            this.item[key] = this.item[key] === 0 ? 1 : 0;
            break;
          }
        default:
          {
            this.item[key] = !this.item[key];
          }
      }
    }
  }
});

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "contentBody"
  }, [_c('div', {
    staticStyle: {
      "padding": "20rpx 5vw"
    }
  }, [_c('demo-block', {
    attrs: {
      "title": "滚动图片",
      "mpcomid": '1'
    }
  }, [_c('picUpload', {
    attrs: {
      "data": _vm.item.LogoList,
      "limit": "4",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "onUpdate": _vm.onPicUpdate
    }
  })], 1), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": "商品详情",
      "mpcomid": '9'
    }
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '8'
    }
  }, [_c('van-field', {
    attrs: {
      "label": "商品名称",
      "value": _vm.item.Name,
      "required": "",
      "clearable": "",
      "data-name": "Name",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "change": _vm.onChange
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "原价",
      "value": _vm.item.Price,
      "type": "digit",
      "required": "",
      "clearable": "",
      "data-name": "Price",
      "eventid": '2',
      "mpcomid": '3'
    },
    on: {
      "change": _vm.onChange
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "成交价",
      "value": _vm.item.VipPrice,
      "type": "digit",
      "required": "",
      "data-name": "VipPrice",
      "eventid": '3',
      "mpcomid": '4'
    },
    on: {
      "change": _vm.onChange
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "库存",
      "value": _vm.item.Count,
      "type": "number",
      "required": "",
      "data-name": "Count",
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "change": _vm.onChange
    }
  }), _vm._v(" "), _c('van-switch-cell', {
    attrs: {
      "title": "是否限购",
      "checked": _vm.item.LimitBuyCount > 0,
      "eventid": '5',
      "mpcomid": '6'
    },
    on: {
      "change": function($event) {
        _vm.toggle('LimitBuyCount')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "限购数量",
      "disabled": _vm.item.LimitBuyCount == 0,
      "value": _vm.item.LimitBuyCount,
      "type": "number",
      "data-name": "LimitBuyCount",
      "eventid": '6',
      "mpcomid": '7'
    },
    on: {
      "change": _vm.onChange
    }
  })], 1)], 1), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": "开始时间",
      "mpcomid": '11'
    }
  }, [_c('van-cell', {
    attrs: {
      "mpcomid": '10'
    }
  }, [_c('view', {
    slot: "title"
  }, [_c('picker', {
    attrs: {
      "mode": "date",
      "value": _vm.item.DateTimeStart,
      "start": _vm.dateStart,
      "end": _vm.dateEnd,
      "data-name": "DateTimeStart",
      "eventid": '7'
    },
    on: {
      "change": _vm.onChange
    }
  }, [_c('view', {
    staticClass: "picker flex-between"
  }, [_c('span', [_vm._v("开始时间")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.item.DateTimeStart))])])])], 1)])], 1), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": "结束时间",
      "mpcomid": '13'
    }
  }, [_c('van-cell', {
    attrs: {
      "mpcomid": '12'
    }
  }, [_c('view', {
    slot: "title"
  }, [_c('picker', {
    attrs: {
      "mode": "date",
      "value": _vm.item.DateTimeEnd,
      "start": _vm.dateStart,
      "end": _vm.dateEnd,
      "data-name": "DateTimeEnd",
      "eventid": '8'
    },
    on: {
      "change": _vm.onChange
    }
  }, [_c('view', {
    staticClass: "picker flex-between"
  }, [_c('span', [_vm._v("结束时间")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.item.DateTimeEnd))])])])], 1)])], 1), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": "购前需知",
      "mpcomid": '16'
    }
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '15'
    }
  }, [_c('van-field', {
    attrs: {
      "value": _vm.item.NoticeText,
      "label": "购前需知",
      "type": "textarea",
      "required": "",
      "autosize": "",
      "data-name": "NoticeText",
      "eventid": '9',
      "mpcomid": '14'
    },
    on: {
      "change": _vm.onChange
    }
  })], 1)], 1), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": "状态",
      "mpcomid": '18'
    }
  }, [_c('van-switch-cell', {
    attrs: {
      "title": "是否启用",
      "checked": _vm.item.State > 0,
      "eventid": '10',
      "mpcomid": '17'
    },
    on: {
      "change": function($event) {
        _vm.toggle('State')
      }
    }
  })], 1), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": "取货方式",
      "mpcomid": '29'
    }
  }, [_c('van-radio-group', {
    attrs: {
      "value": _vm.item.PickUpType,
      "bind:change": "onRadioChange",
      "mpcomid": '28'
    }
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '27'
    }
  }, [_c('van-cell', {
    attrs: {
      "title": "到店自提",
      "clickable": "",
      "data-name": "到店自提",
      "eventid": '11',
      "mpcomid": '20'
    },
    on: {
      "click": _vm.onRadioClick
    }
  }, [_c('van-radio', {
    attrs: {
      "name": "到店自提",
      "mpcomid": '19'
    }
  })], 1), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "团长处自提",
      "clickable": "",
      "data-name": "团长处自提",
      "eventid": '12',
      "mpcomid": '22'
    },
    on: {
      "click": _vm.onRadioClick
    }
  }, [_c('van-radio', {
    attrs: {
      "name": "团长处自提",
      "mpcomid": '21'
    }
  })], 1), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "商家送货",
      "clickable": "",
      "data-name": "商家送货",
      "eventid": '13',
      "mpcomid": '24'
    },
    on: {
      "click": _vm.onRadioClick
    }
  }, [_c('van-radio', {
    attrs: {
      "name": "商家送货",
      "mpcomid": '23'
    }
  })], 1), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "团长提货送货",
      "clickable": "",
      "data-name": "团长提货送货",
      "eventid": '14',
      "mpcomid": '26'
    },
    on: {
      "click": _vm.onRadioClick
    }
  }, [_c('van-radio', {
    attrs: {
      "name": "团长提货送货",
      "mpcomid": '25'
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('demo-block', {
    attrs: {
      "title": "商品介绍",
      "mpcomid": '32'
    }
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '31'
    }
  }, [_c('van-field', {
    attrs: {
      "value": _vm.item.Desc,
      "label": "商品介绍",
      "type": "textarea",
      "required": "",
      "autosize": "",
      "data-name": "Desc",
      "eventid": '15',
      "mpcomid": '30'
    },
    on: {
      "change": _vm.onChange
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "15vh"
    }
  })]), _vm._v(" "), _c('van-goods-action', {
    staticStyle: {
      "z-index": "9999"
    },
    attrs: {
      "mpcomid": '35'
    }
  }, [_c('van-goods-action-icon', {
    attrs: {
      "icon": "chat",
      "text": "客服",
      "open-type": "contact",
      "mpcomid": '33'
    }
  }), _vm._v(" "), _c('van-goods-action-button', {
    attrs: {
      "text": "发布",
      "eventid": '16',
      "mpcomid": '34'
    },
    on: {
      "click": function($event) {
        _vm.post()
      }
    }
  })], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '36'
    }
  }), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '37'
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
     require("vue-hot-reload-api").rerender("data-v-fd352b02", esExports)
  }
}

/***/ })

},[373]);