(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/login/weblogin"],{"0c0d":function(e,o,t){},3512:function(e,o,t){"use strict";t.r(o);var i=t("77dd"),s=t.n(i);for(var n in i)["default"].indexOf(n)<0&&function(e){t.d(o,e,(function(){return i[e]}))}(n);o["default"]=s.a},7506:function(e,o,t){"use strict";t.d(o,"b",(function(){return i})),t.d(o,"c",(function(){return s})),t.d(o,"a",(function(){}));var i=function(){var e=this,o=e.$createElement,t=(e._self._c,e.theme()||""),i=e.theme();e._isMounted||(e.e0=function(o){e.is_login=1},e.e1=function(o){e.is_login=2},e.e2=function(o){e.is_login=1},e.e3=function(o){e.is_login=0},e.e4=function(o){e.isRead=!e.isRead}),e.$mp.data=Object.assign({},{$root:{m0:t,m1:i}})},s=[]},"77dd":function(e,o,t){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={data:function(){return{formData:{mobile:"",code:""},loging_password:"",register:{mobile:"",password:"",repassword:"",code:""},resetpassword:{mobile:"",password:"",repassword:"",code:""},is_send:!1,send_btn_txt:"获取验证码",second:60,ip:"",isShow:!0,is_login:1,is_code:!0,phoneHeight:0,isRead:!0}},onLoad:function(){this.getData()},onShow:function(){this.init()},methods:{init:function(){var o=this;e.getSystemInfo({success:function(e){o.phoneHeight=e.windowHeight}})},getData:function(){var o=this;o._get("user.userapple/policy",{platform:o.getPlatform(),referee_id:e.getStorageSync("referee_id")},(function(e){console.log(e),o.service=e.data.service,o.privacy=e.data.privacy}))},formSubmit:function(){var o=this,t={mobile:o.formData.mobile},i="";if(o.isRead){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(o.formData.mobile))return console.log(o.formData.mobile),void e.showToast({title:"手机有误,请重填！",duration:2e3,icon:"none"});if(o.is_code){if(console.log(o.is_code),""==o.formData.code)return void e.showToast({title:"验证码不能为空！",duration:2e3,icon:"none"});t.code=o.formData.code,i="user.useropen/smslogin"}else{if(""==o.loging_password)return void e.showToast({title:"密码不能为空！",duration:2e3,icon:"none"});t.password=o.loging_password,i="user.useropen/phonelogin"}e.showLoading({title:"正在提交"}),o._post(i,t,(function(t){e.setStorageSync("token",t.data.token),e.setStorageSync("user_id",t.data.user_id);var i="/"+e.getStorageSync("currentPage"),s=e.getStorageSync("currentPageOptions");if(Object.keys(s).length>0){for(var n in i+="?",s)i+=n+"="+s[n]+"&";i=i.substring(0,i.length-1)}o.gotoPage(i)}),!1,(function(){e.hideLoading()}))}else e.showToast({title:"请同意并勾选协议内容",duration:2e3,icon:"none"})},registerSub:function(){var o=this;if(o.isRead)return/^1(3|4|5|6|7|8|9)\d{9}$/.test(o.register.mobile)?void(""!=o.register.code?o.register.password.length<6?e.showToast({title:"密码至少6位数！",duration:2e3,icon:"none"}):o.register.password===o.register.repassword?(o.register.invitation_id=e.getStorageSync("invitation_id")?e.getStorageSync("invitation_id"):0,o.register.reg_source="h5",o.register.referee_id=e.getStorageSync("referee_id"),e.showLoading({title:"正在提交"}),o._post("user.useropen/register",o.register,(function(t){e.showToast({title:"注册成功",duration:3e3}),o.formData.mobile=o.register.mobile,o.register={mobile:"",password:"",repassword:"",code:""},o.second=0,o.changeMsg(),o.is_login=1}),!1,(function(){e.hideLoading()}))):e.showToast({title:"两次密码输入不一致！",duration:2e3,icon:"none"}):e.showToast({title:"验证码不能为空！",duration:2e3,icon:"none"})):(console.log(o.register.mobile),void e.showToast({title:"手机有误,请重填！",duration:2e3,icon:"none"}));e.showToast({title:"请同意并勾选协议内容",duration:2e3,icon:"none"})},resetpasswordSub:function(){var o=this;/^1(3|4|5|6|7|8|9)\d{9}$/.test(o.resetpassword.mobile)?""!=o.resetpassword.code?o.resetpassword.password.length<6?e.showToast({title:"密码至少6位数！",duration:2e3,icon:"none"}):o.resetpassword.password===o.resetpassword.repassword?(e.showLoading({title:"正在提交"}),o._post("user.useropen/resetpassword",o.resetpassword,(function(t){e.showToast({title:"重置成功",duration:3e3}),o.formData.mobile=o.resetpassword.mobile,o.resetpassword={mobile:"",password:"",repassword:"",code:""},o.second=0,o.changeMsg(),o.is_login=1}),!1,(function(){e.hideLoading()}))):e.showToast({title:"两次密码输入不一致！",duration:2e3,icon:"none"}):e.showToast({title:"验证码不能为空！",duration:2e3,icon:"none"}):e.showToast({title:"手机有误,请重填！",duration:2e3,icon:"none"})},isCode:function(){this.is_code?this.$set(this,"is_code",!1):this.$set(this,"is_code",!0),console.log(this.is_code)},sendCode:function(){var o=this;if(1==o.is_login){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(o.formData.mobile))return void e.showToast({title:"手机有误,请重填！",duration:2e3,icon:"none"})}else if(2==o.is_login){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(o.register.mobile))return void e.showToast({title:"手机有误,请重填！",duration:2e3,icon:"none"})}else if(0==o.is_login&&!/^1(3|4|5|6|7|8|9)\d{9}$/.test(o.resetpassword.mobile))return void e.showToast({title:"手机有误,请重填！",duration:2e3,icon:"none"});var t="register",i=o.register.mobile;1==o.is_login?(t="login",i=o.formData.mobile):0==o.is_login&&(t="login",i=o.resetpassword.mobile),o._post("user.useropen/sendCode",{mobile:i,type:t},(function(t){1==t.code&&(e.showToast({title:"发送成功"}),o.is_send=!0,o.changeMsg())}))},changeMsg:function(){this.second>0?(this.send_btn_txt=this.second+"秒",this.second--,setTimeout(this.changeMsg,1e3)):(this.send_btn_txt="获取验证码",this.second=60,this.is_send=!1)},xieyi:function(o){var t="";t="service"==o?this.service:this.privacy,e.navigateTo({url:"/pages/webview/webview?url="+t})}}};o.default=t}).call(this,t("c11b")["default"])},c0c7:function(e,o,t){"use strict";t.r(o);var i=t("7506"),s=t("3512");for(var n in s)["default"].indexOf(n)<0&&function(e){t.d(o,e,(function(){return s[e]}))}(n);t("d5dc");var r=t("f0c5"),a=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"5ac395db",null,!1,i["a"],void 0);o["default"]=a.exports},d5dc:function(e,o,t){"use strict";var i=t("0c0d"),s=t.n(i);s.a},fee8:function(e,o,t){"use strict";(function(e){var o=t("4ea4");t("a8db"),t("33db"),t("5c17");o(t("66fd"));var i=o(t("c0c7"));my.__webpack_require_UNI_MP_PLUGIN__=t,e(i.default)}).call(this,t("c11b")["createPage"])}},[["fee8","common/runtime","common/vendor"]]]);