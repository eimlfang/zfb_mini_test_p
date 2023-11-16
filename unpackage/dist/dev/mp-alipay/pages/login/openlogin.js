(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/login/openlogin"],{

/***/ 826:
/*!*************************************************************************************************************************!*\
  !*** D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/main.js?{"page":"pages%2Flogin%2Fopenlogin"} ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
__webpack_require__(/*! uni-pages */ 22);
__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-stat.es.js */ 23);
__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-push/dist/uni-push.es.js */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 21));
var _openlogin = _interopRequireDefault(__webpack_require__(/*! ./pages/login/openlogin.vue */ 827));
// @ts-ignore
my.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
;
createPage(_openlogin.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 827:
/*!******************************************************************************************************!*\
  !*** D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/pages/login/openlogin.vue ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _openlogin_vue_vue_type_template_id_37fa5f60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openlogin.vue?vue&type=template&id=37fa5f60&scoped=true& */ 828);
/* harmony import */ var _openlogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openlogin.vue?vue&type=script&lang=js& */ 830);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _openlogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _openlogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _openlogin_vue_vue_type_style_index_0_id_37fa5f60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openlogin.vue?vue&type=style&index=0&id=37fa5f60&lang=scss&scoped=true& */ 832);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 40);

var renderjs





/* normalize component */

var component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _openlogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _openlogin_vue_vue_type_template_id_37fa5f60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _openlogin_vue_vue_type_template_id_37fa5f60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "37fa5f60",
  null,
  false,
  _openlogin_vue_vue_type_template_id_37fa5f60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/login/openlogin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 828:
/*!*************************************************************************************************************************************************!*\
  !*** D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/pages/login/openlogin.vue?vue&type=template&id=37fa5f60&scoped=true& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_template_id_37fa5f60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./openlogin.vue?vue&type=template&id=37fa5f60&scoped=true& */ 829);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_template_id_37fa5f60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_template_id_37fa5f60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_template_id_37fa5f60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_template_id_37fa5f60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 829:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/pages/login/openlogin.vue?vue&type=template&id=37fa5f60&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var m0 = _vm.theme() || ""
  var m1 = _vm.theme()
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.is_login = 1
    }
    _vm.e1 = function ($event) {
      _vm.is_login = 2
    }
    _vm.e2 = function ($event) {
      _vm.is_login = 1
    }
    _vm.e3 = function ($event) {
      _vm.is_login = 0
    }
    _vm.e4 = function ($event) {
      _vm.isRead = !_vm.isRead
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 830:
/*!*******************************************************************************************************************************!*\
  !*** D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/pages/login/openlogin.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./openlogin.vue?vue&type=script&lang=js& */ 831);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 831:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/pages/login/openlogin.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      /*表单数据对象*/
      formData: {
        /*手机号*/
        mobile: '',
        /*验证码*/
        code: ''
      },
      loging_password: '',
      register: {
        mobile: '',
        password: '',
        repassword: '',
        code: ''
      },
      resetpassword: {
        mobile: '',
        password: '',
        repassword: '',
        code: ''
      },
      /*是否已发验证码*/
      is_send: false,
      /*发送按钮文本*/
      send_btn_txt: '获取验证码',
      /*当前秒数*/
      second: 60,
      ip: '',
      isShow: true,
      is_login: 1,
      is_code: false,
      phoneHeight: 0,
      isRead: true,
      showWeixin: false,
      showApple: false
    };
  },
  onShow: function onShow() {
    this.init();
  },
  onLoad: function onLoad() {
    this.getData();
  },
  methods: {
    /*初始化*/init: function init() {
      var self = this;
      uni.getSystemInfo({
        success: function success(res) {
          self.phoneHeight = res.windowHeight;
        }
      });
      // 是否安装了微信
      if (plus.runtime.isApplicationExist({
        pname: 'com.tencent.mm',
        action: 'weixin://'
      })) {
        self.showWeixin = true;
      }
      // 是否ios13以上
      uni.getSystemInfo({
        success: function success(res) {
          var version = res.system.replace(/iOS /, "");
          if (res.platform == "ios" && version >= 13) {
            self.showApple = true;
          }
        }
      });
    },
    getData: function getData() {
      var self = this;
      self._get('user.userapple/policy', {}, function (res) {
        console.log(res);
        self.service = res.data.service;
        self.privacy = res.data.privacy;
      });
    },
    /*提交*/formSubmit: function formSubmit() {
      var self = this;
      var formdata = {
        mobile: self.formData.mobile
      };
      var url = '';
      if (!self.isRead) {
        uni.showToast({
          title: '请同意并勾选协议内容',
          duration: 2000,
          icon: 'none'
        });
        return;
      }
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(self.formData.mobile)) {
        console.log(self.formData.mobile);
        uni.showToast({
          title: '手机有误,请重填！',
          duration: 2000,
          icon: 'none'
        });
        return;
      }
      if (self.is_code) {
        console.log(self.is_code);
        if (self.formData.code == '') {
          uni.showToast({
            title: '验证码不能为空！',
            duration: 2000,
            icon: 'none'
          });
          return;
        }
        formdata.code = self.formData.code;
        url = 'user.useropen/smslogin';
      } else {
        if (self.loging_password == '') {
          uni.showToast({
            title: '密码不能为空！',
            duration: 2000,
            icon: 'none'
          });
          return;
        }
        formdata.password = self.loging_password;
        url = 'user.useropen/phonelogin';
      }
      uni.showLoading({
        title: '正在提交'
      });
      self._post(url, formdata, function (result) {
        // 记录token user_id
        uni.setStorageSync('token', result.data.token);
        uni.setStorageSync('user_id', result.data.user_id);
        // 获取登录前页面
        var url = uni.getStorageSync('currentPage');
        var pageOptions = uni.getStorageSync('currentPageOptions');
        if (Object.keys(pageOptions).length > 0) {
          url += '?';
          for (var i in pageOptions) {
            url += i + '=' + pageOptions[i] + '&';
          }
          url = url.substring(0, url.length - 1);
        }
        self.gotoPage(url);
      }, false, function () {
        uni.hideLoading();
      });
    },
    /*注册*/registerSub: function registerSub() {
      var self = this;
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(self.register.mobile)) {
        console.log(self.register.mobile);
        uni.showToast({
          title: '手机有误,请重填！',
          duration: 2000,
          icon: 'none'
        });
        return;
      }
      if (self.register.code == '') {
        uni.showToast({
          title: '验证码不能为空！',
          duration: 2000,
          icon: 'none'
        });
        return;
      }
      if (self.register.password.length < 6) {
        uni.showToast({
          title: '密码至少6位数！',
          duration: 2000,
          icon: 'none'
        });
        return;
      }
      if (self.register.password !== self.register.repassword) {
        uni.showToast({
          title: '两次密码输入不一致！',
          duration: 2000,
          icon: 'none'
        });
        return;
      }
      if (!self.isRead) {
        uni.showToast({
          title: '请同意并勾选协议内容',
          duration: 2000,
          icon: 'none'
        });
        return;
      }
      self.register.invitation_id = uni.getStorageSync('invitation_id') ? uni.getStorageSync('invitation_id') : 0;
      self.register.reg_source = 'app';
      self.register.referee_id = uni.getStorageSync('referee_id');
      uni.showLoading({
        title: '正在提交'
      });
      self._post('user.useropen/register', self.register, function (result) {
        uni.showToast({
          title: '注册成功',
          duration: 3000
        });
        self.formData.mobile = self.register.mobile;
        self.register = {
          mobile: '',
          password: '',
          repassword: '',
          code: ''
        };
        self.second = 0;
        self.changeMsg();
        self.is_login = 1;
      }, false, function () {
        uni.hideLoading();
      });
    },
    resetpasswordSub: function resetpasswordSub() {
      var self = this;
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(self.resetpassword.mobile)) {
        uni.showToast({
          title: '手机有误,请重填！',
          duration: 2000,
          icon: 'none'
        });
        return;
      }
      if (self.resetpassword.code == '') {
        uni.showToast({
          title: '验证码不能为空！',
          duration: 2000,
          icon: 'none'
        });
        return;
      }
      if (self.resetpassword.password.length < 6) {
        uni.showToast({
          title: '密码至少6位数！',
          duration: 2000,
          icon: 'none'
        });
        return;
      }
      if (self.resetpassword.password !== self.resetpassword.repassword) {
        uni.showToast({
          title: '两次密码输入不一致！',
          duration: 2000,
          icon: 'none'
        });
        return;
      }
      uni.showLoading({
        title: '正在提交'
      });
      self._post('user.useropen/resetpassword', self.resetpassword, function (result) {
        uni.showToast({
          title: '重置成功',
          duration: 3000
        });
        self.formData.mobile = self.resetpassword.mobile;
        self.resetpassword = {
          mobile: '',
          password: '',
          repassword: '',
          code: ''
        };
        self.second = 0;
        self.changeMsg();
        self.is_login = 1;
      }, false, function () {
        uni.hideLoading();
      });
    },
    isCode: function isCode() {
      if (this.is_code) {
        this.$set(this, 'is_code', false);
      } else {
        this.$set(this, 'is_code', true);
      }
      console.log(this.is_code);
    },
    /*发送短信*/sendCode: function sendCode() {
      var self = this;
      if (self.is_login == 1) {
        if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(self.formData.mobile)) {
          uni.showToast({
            title: '手机有误,请重填！',
            duration: 2000,
            icon: 'none'
          });
          return;
        }
      } else if (self.is_login == 2) {
        if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(self.register.mobile)) {
          uni.showToast({
            title: '手机有误,请重填！',
            duration: 2000,
            icon: 'none'
          });
          return;
        }
      } else if (self.is_login == 0) {
        if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(self.resetpassword.mobile)) {
          uni.showToast({
            title: '手机有误,请重填！',
            duration: 2000,
            icon: 'none'
          });
          return;
        }
      }
      var type = 'register';
      var mobile = self.register.mobile;
      if (self.is_login == 1) {
        type = 'login';
        mobile = self.formData.mobile;
      } else if (self.is_login == 0) {
        type = 'login';
        mobile = self.resetpassword.mobile;
      }
      self._post('user.useropen/sendCode', {
        mobile: mobile,
        type: type
      }, function (result) {
        if (result.code == 1) {
          uni.showToast({
            title: '发送成功'
          });
          self.is_send = true;
          self.changeMsg();
        }
      });
    },
    login: function login() {
      var self = this;
      plus.oauth.getServices(function (servies) {
        var s = servies[0];
        if (!s.authResult) {
          s.authorize(function (e) {
            uni.showLoading({
              title: '登录中',
              mask: true
            });
            self._post('user.useropen/login', {
              code: e.code,
              source: 'app'
            }, function (result) {
              // 记录token user_id
              uni.setStorageSync('token', result.data.token);
              uni.setStorageSync('user_id', result.data.user_id);
              // 获取登录前页面
              var url = uni.getStorageSync('currentPage');
              var pageOptions = uni.getStorageSync('currentPageOptions');
              if (Object.keys(pageOptions).length > 0) {
                url += '?';
                for (var i in pageOptions) {
                  url += i + '=' + pageOptions[i] + '&';
                }
                url = url.substring(0, url.length - 1);
              }
              self.gotoPage(url);
            }, false, function () {
              uni.hideLoading();
            });
          }, function (e) {
            console.log('登陆认证失败!');
            uni.showModal({
              title: '认证失败1',
              content: JSON.stringify(e)
            });
          });
        } else {
          console.log('已经登陆认证');
        }
      }, function (e) {
        console.log("获取服务列表失败：" + JSON.stringify(e));
      });
    },
    /*改变发送验证码按钮文本*/changeMsg: function changeMsg() {
      if (this.second > 0) {
        this.send_btn_txt = this.second + '秒';
        this.second--;
        setTimeout(this.changeMsg, 1000);
      } else {
        this.send_btn_txt = '获取验证码';
        this.second = 60;
        this.is_send = false;
      }
    },
    xieyi: function xieyi(type) {
      var url = '';
      if (type == 'service') {
        url = this.service;
      } else {
        url = this.privacy;
      }
      uni.navigateTo({
        url: '/pages/webview/webview?url=' + url
      });
    },
    appleLogin: function appleLogin() {
      var self = this;
      uni.login({
        provider: 'apple',
        success: function success(loginRes) {
          // 登录成功  
          uni.getUserInfo({
            provider: 'apple',
            success: function success(res) {
              if (res.errMsg !== 'getUserInfo:ok') {
                return false;
              }
              uni.showLoading({
                title: "正在登录",
                mask: true
              });
              self._post('user.userapple/login', {
                invitation_id: self.invitation_id,
                openId: res.userInfo.openId,
                nickName: res.userInfo.fullName.giveName ? res.userInfo.fullName.giveName : '',
                referee_id: uni.getStorageSync('referee_id'),
                source: 'apple'
              }, function (result) {
                // 记录token user_id
                uni.setStorageSync('token', result.data.token);
                uni.setStorageSync('user_id', result.data.user_id);
                // 执行回调函数
                uni.navigateBack();
              }, false, function () {
                uni.hideLoading();
              });
            }
          });
        },
        fail: function fail(err) {
          // 登录失败  
          console.log('登录失败');
          console.log(err);
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 832:
/*!****************************************************************************************************************************************************************!*\
  !*** D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/pages/login/openlogin.vue?vue&type=style&index=0&id=37fa5f60&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_style_index_0_id_37fa5f60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./openlogin.vue?vue&type=style&index=0&id=37fa5f60&lang=scss&scoped=true& */ 833);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_style_index_0_id_37fa5f60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_style_index_0_id_37fa5f60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_style_index_0_id_37fa5f60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_style_index_0_id_37fa5f60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_openlogin_vue_vue_type_style_index_0_id_37fa5f60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 833:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work3/shumazulin_client/haoshiji_project/haoshiji_uniapp/haoshiji/pages/login/openlogin.vue?vue&type=style&index=0&id=37fa5f60&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[826,"common/runtime","common/vendor"]]]);