require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_map_vue__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7d73ebfe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_map_vue__ = __webpack_require__(333);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(331)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7d73ebfe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_map_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7d73ebfe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_map_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\partner\\map.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] map.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d73ebfe", Component.options)
  } else {
    hotAPI.reload("data-v-7d73ebfe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 331:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_dist_toast_toast__ = __webpack_require__(7);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    wx.setNavigationBarTitle({ title: "地图" });
  },
  onReady: function onReady() {},
  mounted: function mounted() {
    var that = this;
    // wx.getLocation({
    //   type: "gcj02",
    //   success: function(res) {
    //     // console.log(res);
    //     that.SET_POSITION(res);
    //   }
    // });
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["e" /* mapState */])(["userInfo", "position"])),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapMutations */])(["SET_POSITION"]), {
    // onSearch(event) {
    //   var that = this;
    //   that.position = [];
    //   console.log(event.mp.detail);
    //   this.$api
    //     .placeSuggestion({ query: event.mp.detail, region: "苏州" })
    //     .then(res => {
    //       if (res.result && res.result.length) {
    //         that.location = res.result;
    //       } else {
    //         Toast.fail("换个关键字试试");
    //       }
    //     })
    //     .catch(err => {
    //       Toast.fail("出错了");
    //     });
    // },
    markertap: function markertap(e) {
      console.log(e.markerId);
    },
    controltap: function controltap(e) {
      console.log(e);
    },
    tapMap: function tapMap(e) {
      console.log(e);
    },
    regionchange: function regionchange(e) {
      var that = this;
      // 改变中心点位置
      if (res.type == "end") {
        that.getCenterLocation();
      }
    },

    getCenterLocation: function getCenterLocation() {
      var that = this;
      //mapId 就是你在 map 标签中定义的 id
      var mapCtx = wx.createMapContext(mapId);
      mapCtx.getCenterLocation({
        success: function success(res) {
          console.log("getCenterLocation----------------------->");
          console.log(res);
          that.updateCenterLocation(res.latitude, res.longitude);
          that.regeocodingAddress();
          that.queryMarkerInfo();
        }
      });
    }
  }),
  data: {
    msg: "asfdasdf",
    location: [],
    markers: [
      // {
      //   iconPath: "/static/images/other.png",
      //   id: 0,
      //   latitude: 23.099994,
      //   longitude: 113.32452,
      //   width: 50,
      //   height: 50
      // }
    ],
    polyline: [
      // {
      //   points: [
      //     {
      //       longitude: 113.3245211,
      //       latitude: 23.10229
      //     },
      //     {
      //       longitude: 113.32452,
      //       latitude: 23.21229
      //     }
      //   ],
      //   color: "#FF0000DD",
      //   width: 2,
      //   dottedLine: true
      // }
    ],
    controls: [
      // {
      //   id: 1,
      //   iconPath: "/static/images/location.png",
      //   position: {
      //     left: (windowWidth - controlsWidth) / 2,
      //     top: (windowHeight - bottomHeight) / 2 - controlsHeight * 3 / 4,
      //     width: controlsWidth,
      //     height: controlsHeight
      //   },
      //   clickable: true
      // }
    ]
  }
});

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "background": "#fff"
    }
  }, [(_vm.position) ? _c('map', {
    staticStyle: {
      "width": "100vw",
      "height": "100vh"
    },
    attrs: {
      "id": "map",
      "subkey": "JQDBZ-M7CR6-LAYS5-MCG7D-DCXHK-GJBIV",
      "longitude": _vm.position.longitude,
      "latitude": _vm.position.latitude,
      "scale": "18",
      "controls": _vm.controls,
      "markers": _vm.markers,
      "polyline": _vm.polyline,
      "show-location": "",
      "eventid": '0'
    },
    on: {
      "controltap": _vm.controltap,
      "markertap": _vm.markertap,
      "tap": _vm.tapMap,
      "regionchange": _vm.regionchange
    }
  }) : _vm._e(), _vm._v(" "), _c('van-dialog', {
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
     require("vue-hot-reload-api").rerender("data-v-7d73ebfe", esExports)
  }
}

/***/ })

},[377]);