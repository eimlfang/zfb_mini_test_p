(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/agent/cash/apply/apply"],{"00d4":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={components:{},data:function(){return{loadding:!0,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,withdraw_type:30,isData:!1,agent:{},payType:[],words:{},temlIds:[],money:""}},mounted:function(){this.getData()},onLoad:function(t){this.money=t.balance},methods:{getData:function(){var a=this;t.showLoading({title:"加载中"}),a.loadding=!0,a._get("user.agent/cash",{platform:a.getPlatform()},(function(e){a.agent=e.data,a.words=e.data.words,a.payType=a.agent.settlement.pay_type,a.agent.isData=!0,a.temlIds=e.data.template_arr,a.loadding=!1,t.hideLoading()}))},TabType:function(t){this.withdraw_type=t},hasType:function(t){return-1!=this.payType.indexOf(t)},getAll:function(){this.money=this.agent.agent.money},formSubmit:function(a){var e=a.detail.value;e.pay_type=this.withdraw_type;var n=e;t.showLoading({title:"正在提交",mask:!0}),this._post("/user.user/withdrawalApplication",{price:n.money,cardNumber:n.bank_card,bankOfDeposit:n.bank_account,name:n.name},(function(a){t.hideLoading(),t.showToast({title:"申请成功",duration:2e3,icon:"success"}),t.navigateBack(-1)}))}}};a.default=e}).call(this,e("c11b")["default"])},5225:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this.$createElement,a=(this._self._c,this.loadding?null:this.hasType("30"));this.$mp.data=Object.assign({},{$root:{m0:a}})},i=[]},"5e06":function(t,a,e){"use strict";e.r(a);var n=e("00d4"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},ca1e:function(t,a,e){"use strict";var n=e("de94"),i=e.n(n);i.a},ccee:function(t,a,e){"use strict";(function(t){var a=e("4ea4");e("a8db"),e("33db"),e("5c17");a(e("66fd"));var n=a(e("d7d6"));my.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("c11b")["createPage"])},d7d6:function(t,a,e){"use strict";e.r(a);var n=e("5225"),i=e("5e06");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("ca1e");var c=e("f0c5"),d=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);a["default"]=d.exports},de94:function(t,a,e){}},[["ccee","common/runtime","common/vendor"]]]);