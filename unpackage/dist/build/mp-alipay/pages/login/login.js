(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/login/login"],{"3e22":function(e,n,t){"use strict";t.r(n);var o=t("7ec9"),c=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=c.a},"64c5":function(e,n,t){"use strict";var o=t("d455"),c=t.n(o);c.a},"6ce3":function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}));var o={uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,"1d9f"))}},c=function(){var e=this.$createElement;this._self._c},i=[]},"7ec9":function(e,n,t){"use strict";(function(e,o){var c=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=c(t("2eee")),a=c(t("c973")),s={data:function(){return{background:"",listData:[]}},onShow:function(){},onLoad:function(){},methods:{getAlipayUserInfo:function(){return new Promise((function(e,n){my.getOpenUserInfo({success:function(n){var t=JSON.parse(n.response);e(t),console.log("成功")},fail:function(e){console.log("失败"),n(e)}})}))},onAuthError:function(){e.showModal({title:"提示",content:"取消授权，可能导致服务无法使用，或者页面显示不完整",success:function(n){n.confirm?(console.log("我知道了"),e.switchTab({url:"/pages/index/index"})):console.log("重新授权")}})},onGetAuthorize:function(){var n=this;return(0,a.default)(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:my.getAuthCode({scopes:["auth_base"],success:function(t){console.log(t.authCode+"看看"),n.getAlipayUserInfo().then((function(o){console.log(o,"用户信息"),n._post("user.usermp/mnpAlipayAuthLogin",{code:t.authCode,avatar:o.response.avatar,nickname:o.response.nickName},(function(n){e.setStorageSync("token",n.data.data.token),e.setStorageSync("user_id",n.data.data.user_id),e.navigateBack({delta:1})}))})).catch((function(n){e.showToast({title:"获取不到用户信息"}),console.log(n+"失败了")}))}});case 1:case"end":return t.stop()}}),t)})))()},changeMsg:function(){this.second>0?(this.send_btn_txt=this.second+"秒",this.second--,setTimeout(this.changeMsg,1e3)):(this.send_btn_txt="获取验证码",this.second=60,this.is_send=!1)},onNotLogin:function(){this.gotoPage("/pages/index/index")},getUserInfo:function(){var n=this;o.getUserProfile({lang:"zh_CN",desc:"用于完善会员资料",success:function(t){if(console.log(t),"getUserProfile:ok"!==t.errMsg)return!1;e.showLoading({title:"正在登录",mask:!0}),o.login({success:function(o){n._post("user.user/login",{code:o.code,user_info:t.rawData,encrypted_data:encodeURIComponent(t.encryptedData),iv:encodeURIComponent(t.iv),signature:t.signature,referee_id:e.getStorageSync("referee_id"),source:"wx"},(function(n){e.setStorageSync("token",n.data.token),e.setStorageSync("user_id",n.data.user_id),e.navigateBack()}),!1,(function(){e.hideLoading()}))}})}})}}};n.default=s}).call(this,t("c11b")["default"],t("c11b")["default"])},a82e:function(e,n,t){"use strict";t.r(n);var o=t("6ce3"),c=t("3e22");for(var i in c)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return c[e]}))}(i);t("64c5");var a=t("f0c5"),s=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=s.exports},b1b5:function(e,n,t){"use strict";(function(e){var n=t("4ea4");t("a8db"),t("33db"),t("5c17");n(t("66fd"));var o=n(t("a82e"));my.__webpack_require_UNI_MP_PLUGIN__=t,e(o.default)}).call(this,t("c11b")["createPage"])},d455:function(e,n,t){}},[["b1b5","common/runtime","common/vendor"]]]);