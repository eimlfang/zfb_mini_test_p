(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/coupon/detail"],{"56cf":function(t,a,i){},7482:function(t,a,i){"use strict";i.r(a);var e=i("a78b"),n=i("b4c2");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("b08f");var c=i("f0c5"),u=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);a["default"]=u.exports},"85bb":function(t,a,i){"use strict";(function(t){var a=i("4ea4");i("a8db"),i("33db"),i("5c17");a(i("66fd"));var e=a(i("7482"));my.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("c11b")["createPage"])},"9a5f":function(t,a,i){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{loading:!0,statusBarHeight:0,titleBarHeight:0,titleHeight:0,opacity:0,coupon_id:0,listData:[],detail:{}}},onPageScroll:function(t){t.scrollTop<100?this.opacity=t.scrollTop/100:this.opacity=1},onLoad:function(t){this.coupon_id=t.coupon_id,this.apply_range=t.apply_range,this.GetStatusBarHeight()},onShow:function(){this.page=1,this.listData=[],this.getData()},methods:{GetStatusBarHeight:function(){var a=t.getSystemInfoSync();this.statusBarHeight=a.statusBarHeight,this.titleHeight=this.statusBarHeight},getData:function(){var a=this;a.loading=!0,t.showLoading({title:"加载中"});a.data_type;a._get("coupon.coupon/detail",{coupon_id:a.coupon_id},(function(i){t.hideLoading(),a.loading=!1,a.detail=i.data.model,20==a.apply_range?a.listData=i.data.model.product:30==a.apply_range&&(a.listData=a.listData.concat(i.data.product_list.data),a.last_page=i.data.product_list.last_page,i.data.product_list.last_page<=1&&(a.no_more=!0))}))},receiveCoupon:function(){var a=this;if(0==a.detail.state.value)return!1;a._post("user.coupon/receive",{coupon_id:a.detail.coupon_id},(function(i){t.showToast({title:"领取成功",icon:"success",mask:!0,duration:2e3}),a.detail.state.value=0,a.detail.state.text="已领取"}))},goback:function(){t.navigateBack()}}};a.default=i}).call(this,i("c11b")["default"])},a78b:function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var e=function(){var t=this.$createElement;this._self._c},n=[]},b08f:function(t,a,i){"use strict";var e=i("56cf"),n=i.n(e);n.a},b4c2:function(t,a,i){"use strict";i.r(a);var e=i("9a5f"),n=i.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a}},[["85bb","common/runtime","common/vendor"]]]);