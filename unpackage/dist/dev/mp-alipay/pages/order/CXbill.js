(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/order/CXbill"],{

/***/ 1101:
/*!**********************************************************************************************************************!*\
  !*** D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/main.js?{"page":"pages%2Forder%2FCXbill"} ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
__webpack_require__(/*! uni-pages */ 22);
__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-stat.es.js */ 23);
__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-push/dist/uni-push.es.js */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 21));
var _CXbill = _interopRequireDefault(__webpack_require__(/*! ./pages/order/CXbill.vue */ 1102));
// @ts-ignore
my.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
;
createPage(_CXbill.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 1102:
/*!***************************************************************************************************!*\
  !*** D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/pages/order/CXbill.vue ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CXbill_vue_vue_type_template_id_2d9fee56_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CXbill.vue?vue&type=template&id=2d9fee56&scoped=true& */ 1103);
/* harmony import */ var _CXbill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CXbill.vue?vue&type=script&lang=js& */ 1105);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CXbill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CXbill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _CXbill_vue_vue_type_style_index_0_id_2d9fee56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CXbill.vue?vue&type=style&index=0&id=2d9fee56&scoped=true&lang=scss& */ 1107);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 40);

var renderjs





/* normalize component */

var component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CXbill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CXbill_vue_vue_type_template_id_2d9fee56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CXbill_vue_vue_type_template_id_2d9fee56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d9fee56",
  null,
  false,
  _CXbill_vue_vue_type_template_id_2d9fee56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/order/CXbill.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1103:
/*!**********************************************************************************************************************************************!*\
  !*** D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/pages/order/CXbill.vue?vue&type=template&id=2d9fee56&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_template_id_2d9fee56_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./CXbill.vue?vue&type=template&id=2d9fee56&scoped=true& */ 1104);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_template_id_2d9fee56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_template_id_2d9fee56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_template_id_2d9fee56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_template_id_2d9fee56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1104:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/pages/order/CXbill.vue?vue&type=template&id=2d9fee56&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 =
    !_vm.loadding && _vm.detail.order_status.value == 10
      ? _vm.__map(_vm.orderBill, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var f0 = _vm._f("formatDate")(item.repayment_date)
          return {
            $orig: $orig,
            f0: f0,
          }
        })
      : null
  var g0 =
    !_vm.loadding && _vm.detail.order_status.value == 10
      ? (
          _vm.detail.pay_price -
          _vm.detail.deposit -
          _vm.detail.zhuanzujin
        ).toFixed(2)
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1105:
/*!****************************************************************************************************************************!*\
  !*** D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/pages/order/CXbill.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./CXbill.vue?vue&type=script&lang=js& */ 1106);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1106:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/pages/order/CXbill.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _pay = __webpack_require__(/*! @/common/pay.js */ 253);
var Popup = function Popup() {
  __webpack_require__.e(/*! require.ensure | components/uni-popup */ "components/uni-popup").then((function () {
    return resolve(__webpack_require__(/*! @/components/uni-popup.vue */ 246));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Mpservice = function Mpservice() {
  __webpack_require__.e(/*! require.ensure | components/mpservice/Mpservice */ "components/mpservice/Mpservice").then((function () {
    return resolve(__webpack_require__(/*! @/components/mpservice/Mpservice.vue */ 1274));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  data: function data() {
    return {
      xzf: '',
      qurzshow: true,
      timer: null,
      //定时器名称
      suiping: false,
      payable: "",
      priceJg: "",
      checkboxValue1: [],
      // 基本案列数据
      checkboxList1: [{
        name: '押金过高',
        disabled: false
      }, {
        name: '更改订单信息',
        disabled: false
      }, {
        name: '预收押金/补押金',
        disabled: false
      }, {
        name: '审核时间过长',
        disabled: false
      }, {
        name: '商家没货/服务态度问题',
        disabled: false
      }, {
        name: '运费问题',
        disabled: false
      }],
      showqx: false,
      priceWF: "",
      start_time: '',
      end_time: '',
      buyOutPricedata: "",
      hasrenzheng_id: "",
      portrait: "",
      // 商品总价
      numTitol: "",
      /*是否加载完成*/
      loadding: true,
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      /*是否显示支付类别弹窗*/
      isPayPopup: false,
      /*订单id*/
      order_id: 0,
      // 还款期数
      orderBill: [],
      /*订单详情*/
      detail: {
        order_status: [],
        address: {
          region: []
        },
        product: [],
        pay_type: [],
        delivery_type: [],
        pay_status: [],
        buyOutPrice: ''
      },
      extractStore: {},
      source: 'user',
      service_open: 0,
      service_type: 10,
      isMpservice: false,
      /*是否显示支付宝支付，只有在h5，非微信内打开才显示*/
      showAlipay: false,
      user_id: 0,
      expressList: [],
      express_id: '',
      express_name: '',
      express_no: '',
      status: 1,
      cancel_refuse: '',
      pay_type: 10
    };
  },
  components: {
    Popup: Popup,
    Mpservice: Mpservice
  },
  filters: {
    // 过滤器
    formatDate: function formatDate(value) {
      var date = new Date(value * 1000);
      //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var y = date.getFullYear();
      var MM = date.getMonth() + 1;
      MM = MM < 10 ? '0' + MM : MM; //月补0
      var d = date.getDate();
      d = d < 10 ? '0' + d : d; //天补0
      var h = date.getHours();
      h = h < 10 ? '0' + h : h; //小时补0
      var m = date.getMinutes();
      m = m < 10 ? '0' + m : m; //分钟补0
      var s = date.getSeconds();
      s = s < 10 ? '0' + s : s; //秒补0
      return y + '-' + MM + '-' + d; //年月日
      // return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s; //年月日时分秒
    }
  },
  onLoad: function onLoad(e) {
    this.order_id = e.order_id;
    this.user_id = uni.getStorageSync('user_id');
    if (e.source) {
      this.source = e.source;
    }
  },
  mounted: function mounted() {
    uni.showLoading({
      title: '加载中'
    });
    /*获取订单详情*/
    this.getData();
  },
  onShow: function onShow() {
    // this.getData();
  },
  methods: {
    close: function close() {
      this.showqx = false;
    },
    fuzhi: function fuzhi(nr) {
      console.log(nr);
      uni.setClipboardData({
        data: nr,
        // e是你要保存的内容
        success: function success() {
          uni.showToast({
            title: '复制成功',
            icon: 'none'
          });
        }
      });
    },
    qrz: function qrz(id) {
      uni.navigateTo({
        url: '/pages/order/smrz?order_id=' + id
      });
    },
    // 去付款
    payyj: function payyj(id) {
      console.log(id);
      var self = this;
      self._post('/order.order/pay', {
        order_id: id
      }, function (res) {
        console.log(res, "res");
        my.tradePay({
          orderStr: res.data,
          //orderStr从第一步：生成资金冻结订单，从服务端获取
          success: function success(res) {
            // 成功
            uni.navigateTo({
              url: '/pages/order/order-detail?order_id=' + id
            });
          },
          fail: function fail(res) {
            uni.showToast({
              title: '支付失败！',
              icon: 'none'
            });
          }
        });
      });
    },
    /*获取数据*/getData: function getData() {
      var self = this;
      var order_id = self.order_id;
      var url = 'user.order/detail';
      if (this.source == 'supplier') {
        url = 'supplier.order/detail';
      }
      self._get(url, {
        order_id: order_id,
        pay_source: self.getPlatform()
      }, function (res) {
        var dsp = 0;
        if (res.data.order.hasrenzheng_id) {
          if (dsp < 10) {
            self.timer = setInterval(function () {
              dsp += 1;
              if (dsp > 3) {
                clearInterval(self.timer);
                self.timer = null;
              }
              self._post('order.authentication/queryAuthentication', {
                hasrenzheng_id: res.data.order.hasrenzheng_id
              }, function (result) {
                if (result.code == 1) {
                  clearInterval(self.timer);
                  self.timer = null;
                  self.qurzshow = false;
                }
              });
            }, 1000);
          } else {
            clearInterval(self.timer);
            self.timer = null;
          }
        }
        // console.log("res返回成功",res.data.order.hasrenzheng_id);

        self.portrait = res.data.order.portrait;
        self.hasrenzheng_id = res.data.order.hasrenzheng_id;
        if (self.portrait == '' && self.hasrenzheng_id != '') {
          self._post('order.authentication/queryAttestation', {
            flowid: self.hasrenzheng_id,
            order_id: order_id
          }, function (res) {
            self.loading = false;
            uni.hideLoading();
          });
        }
        self.expressList = res.data.expressList;
        self.detail = res.data.order;
        console.log("detail", self.detail.product[0].product_attr);
        var str2 = self.detail.product[0].product_attr;
        // console.log(str2.indexOf("不") != -1, str2, "是否存在");
        if (str2.indexOf("不") != -1) {
          console.log("存在");
          self.suiping = false;
        } else {
          self.suiping = true;
        }
        self.detail.buyOutPrice = res.data.buyOutPrice;
        self.start_time = self.detail.create_time;
        var str1 = self.detail.create_time;
        if (str1.indexOf("2023") != -1) {
          // console.log("存在");
          // console.log(str1.replace(/2023/,"2024"));
          self.end_time = str1.replace(/2023/, "2024");
        }
        self.orderBill = res.data.orderBill;
        self.extractStore = res.data.order.extractStore;
        self.service_open = res.data.setting.service_open;
        console.log(res.data.order.deposit, res.data.order.yushou, res.data.order.zhuanzujin, "开始3");
        var yushoudata = res.data.order.yushou;
        var depositdata = res.data.order.deposit;
        var zhuanzujinData = res.data.order.zhuanzujin;
        var buyOutPricedata = res.data.buyOutPrice;
        if (res.data.order.maiduan_no == '') {
          buyOutPricedata = 0;
        }
        if (res.data.order.is_yushou != 2) {
          yushoudata = 0;
        }
        if (res.data.order.auth_no == '') {
          depositdata = 0;
        }
        var ysqyjze = Number(zhuanzujinData) + Number(depositdata);
        var numTitol1 = Number(depositdata) + Number(yushoudata) + Number(zhuanzujinData);
        var orderBill = res.data.orderBill;
        var priceJg = 0;
        var priceWF = 0;
        var payable = 0;
        var xzf = 0;
        for (var i = 0; i < orderBill.length; i++) {
          xzf = Number(xzf) + Number(orderBill[i].price);
          if (orderBill[i].is_pay_status == 1) {
            priceJg = Number(priceJg) + Number(orderBill[i].price);
            if (orderBill[i].transaction_id != null) {
              payable = Number(payable) + Number(orderBill[i].price);
              console.log(orderBill[i].transaction_id, "orderBill[i].transaction_id ");
            }
          }
          if (orderBill[i].is_pay_status == 0) {
            priceWF = Number(priceWF) + Number(orderBill[i].price);
          }
          if (orderBill[i].is_pay_status == 0 || orderBill[i].is_pay_status == 2) {
            // console.log("i",i);
            if (i >= 1) {
              if (orderBill[i - 1].is_pay_status != 1) {
                orderBill[i].xxx = false;
              } else {
                orderBill[i].xxx = true;
              }
            } else {
              orderBill[i].xxx = true;
            }
          }
        }
        self.xzf = Number(xzf - priceJg).toFixed(2);
        self.priceWF = priceWF.toFixed(2);
        // console.log("总价格", numTitol1, priceJg);
        // console.log("计算", Number(numTitol1) + Number(priceJg));
        self.numTitol = (Number(numTitol1) + Number(priceJg) + Number(buyOutPricedata)).toFixed(2);
        // self.payable = (Number(payable) + Number(ysqyjze) + Number(yushoudata)).toFixed(2);
        // self.payable = Number(payable).toFixed(2);
        // console.log(str2.indexOf("不") != -1, str2, "是否存在");
        if (str2.indexOf("不") != -1) {
          self.priceJg = Number(priceJg).toFixed(2);
        } else {
          if (self.detail.is_yushou == 2) {
            self.priceJg = Number(priceJg + 365).toFixed(2);
          } else {
            self.priceJg = Number(priceJg).toFixed(2);
          }
        }
        self.detail.total_price = (Number(self.detail.total_price) - Number(depositdata) - Number(zhuanzujinData)).toFixed(2);
        if (res.data.setting.mp_service == null) {
          self.service_type = 10;
        } else {
          self.service_type = res.data.setting.mp_service.service_type;
        }
        if (res.data.show_alipay) {
          self.showAlipay = true;
        }
        self.loadding = false;
        uni.hideLoading();
      });
    },
    returned: function returned(order_id) {
      uni.navigateTo({
        url: './returned?order_id=' + order_id
      });
    },
    submit: function submit(id) {
      var self = this;
      self.loading = true;
      uni.showLoading({
        title: '加载中'
      });
      self._post('/user.order/billPay', {
        bill_id: id
      }, function (res) {
        self.loading = false;
        uni.hideLoading();
        (0, _pay.pay)(res, self, self.paySuccess, self.payError);
      });
    },
    maiduan: function maiduan(id) {
      var self = this;
      self.loading = true;
      uni.showLoading({
        title: '加载中'
      });
      self._post('/order.order/buyOut', {
        order_id: id
      }, function (res) {
        self.loading = false;
        uni.hideLoading();
        (0, _pay.pay)(res, self, self.paySuccess, self.payError);
      });
    },
    /*显示支付方式*/hidePopupFunc: function hidePopupFunc() {
      this.isPayPopup = false;
    },
    // 提前返还
    earlyTermination: function earlyTermination(order_id) {
      var _this = this;
      uni.showLoading({
        title: '正在加载'
      });
      this._post('/order.order/earlyEnd', {
        order_id: order_id
      }, function (res) {
        uni.hideLoading();
        if (res.code == 124) {
          console.log("成功");
          uni.showToast({
            title: res.msg,
            icon: 'none'
          });
          setTimeout(function () {
            uni.navigateBack({
              delta: 1
            });
          }, 700);
          return;
        } else {
          (0, _pay.pay)(res, _this);
        }
      });
    },
    /*去支付*/payTypeFunc: function payTypeFunc(payType) {
      var self = this;
      var order_id = self.order_id;
      self.isPayPopup = false;
      uni.showLoading({
        title: '加载中'
      });
      self._post('user.order/pay', {
        payType: payType,
        order_id: order_id,
        pay_source: self.getPlatform()
      }, function (res) {
        uni.hideLoading();
        (0, _pay.pay)(res, self);
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 1107:
/*!*************************************************************************************************************************************************************!*\
  !*** D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/pages/order/CXbill.vue?vue&type=style&index=0&id=2d9fee56&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_style_index_0_id_2d9fee56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./CXbill.vue?vue&type=style&index=0&id=2d9fee56&scoped=true&lang=scss& */ 1108);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_style_index_0_id_2d9fee56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_style_index_0_id_2d9fee56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_style_index_0_id_2d9fee56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_style_index_0_id_2d9fee56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CXbill_vue_vue_type_style_index_0_id_2d9fee56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1108:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/pages/order/CXbill.vue?vue&type=style&index=0&id=2d9fee56&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[1101,"common/runtime","common/vendor"]]]);