(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/order/cashier"],{"24b0":function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t("5804"),c={data:function(){return{balance:"",balanceType:!1,type:0,loading:!0,order_id:0,order_type:0,pay_type:20,checkedPay:[],payPrice:""}},computed:{hasBanlance:function(){if(40==this.order_type||this.balance<=0)return!1;var e=this.checkedPay.indexOf(10);return-1!=e}},onLoad:function(e){this.order_id=decodeURIComponent(e.order_id),e.order_type&&(this.order_type=e.order_type),this.getData()},methods:{getTheme:function(){var e=this.theme(),a="#ff5704";switch(e){case"theme0":a="#ff5704";break;case"theme1":a="#19ad57";break;case"theme2":a="#ffcc00";break;case"theme3":a="#33a7ff";break;case"theme4":a="#e4e4e4";break;case"theme5":a="#c8ba97";break;case"theme6":a="#623ceb";break}return a},getData:function(){var a=this;a.loading=!0,e.showLoading({title:"加载中"});var t="user.order/pay";10==a.order_type&&(t="order.order/pay"),20==a.order_type&&(t="supplier.index/pay"),40==a.order_type&&(t="balance.plan/pay"),30==a.order_type&&(t="plus.live.plan/pay");var r={order_id:a.order_id,pay_source:a.getPlatform()};a._get(t,r,(function(t){a.loading=!1;var r=[];t.data.payTypes.forEach((function(e){r.push(1*e)})),a.checkedPay=r,a.payPrice=t.data.payPrice,a.balance=t.data.balance||"",10!=a.checkedPay[0]?a.pay_type=a.checkedPay[0]||a.checkedPay[1]||20:a.pay_type=a.checkedPay[1]||a.checkedPay[0],e.hideLoading()}))},switch2Change:function(e){this.balanceType=e.detail.value},submit:function(){var a=this;a.loading=!0,e.showLoading({title:"加载中"});var t="user.order/pay";10==a.order_type&&(t="order.order/pay"),20==a.order_type&&(t="supplier.index/pay"),40==a.order_type&&(t="balance.plan/pay"),30==a.order_type&&(t="plus.live.plan/pay");var c=1==a.balanceType?1:0,n={order_id:a.order_id,pay_source:a.getPlatform(),payType:a.pay_type,use_balance:c};a._post(t,n,(function(t){a.loading=!1,e.hideLoading(),(0,r.pay)(t,a,a.paySuccess,a.payError)}))},paySuccess:function(a){var t=this;console.log(a,"看看下"),30==t.order_type||40==t.order_type?t.showSuccess("支付成功",(function(){e.navigateBack()})):20==t.order_type?t.showSuccess("支付成功",(function(){t.gotoPage("/pages/user/my_shop/my_shop","reLaunch")})):t.gotoPage("/pages/order/pay-success/pay-success?order_id="+a.data.order_id[0],"reLaunch")},payError:function(a){30==this.order_type||40==this.order_type?e.navigateBack():20==this.order_type?this.gotoPage("/pages/user/my_shop/my_shop","redirect"):1==this.order_type&&e.showToast({title:"您取消了支付",icon:"none",success:function(){e.navigateBack()}})},payTypeFunc:function(e){this.pay_type=e}}};a.default=c}).call(this,t("c11b")["default"])},"462f":function(e,a,t){"use strict";(function(e){var a=t("4ea4");t("a8db"),t("33db"),t("5c17");a(t("66fd"));var r=a(t("4952"));my.__webpack_require_UNI_MP_PLUGIN__=t,e(r.default)}).call(this,t("c11b")["createPage"])},4952:function(e,a,t){"use strict";t.r(a);var r=t("ca27"),c=t("b35a");for(var n in c)["default"].indexOf(n)<0&&function(e){t.d(a,e,(function(){return c[e]}))}(n);t("71aa");var o=t("f0c5"),i=Object(o["a"])(c["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);a["default"]=i.exports},"71aa":function(e,a,t){"use strict";var r=t("822c"),c=t.n(r);c.a},"822c":function(e,a,t){},b35a:function(e,a,t){"use strict";t.r(a);var r=t("24b0"),c=t.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){t.d(a,e,(function(){return r[e]}))}(n);a["default"]=c.a},ca27:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"c",(function(){return c})),t.d(a,"a",(function(){}));var r=function(){var e=this.$createElement,a=(this._self._c,this.theme()||""),t=this.theme();this.$mp.data=Object.assign({},{$root:{m0:a,m1:t}})},c=[]}},[["462f","common/runtime","common/vendor"]]]);