(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/user/my_shop/my_live/my-live/my-live"],{"0027":function(t,e,n){"use strict";n.r(e);var a=n("e3a3"),i=n("a5d2");for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("571f");var o=n("f0c5"),r=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=r.exports},"3a58":function(t,e,n){},"571f":function(t,e,n){"use strict";var a=n("3a58"),i=n.n(a);i.a},"87c9":function(t,e,n){"use strict";(function(t){var e=n("4ea4");n("a8db"),n("33db"),n("5c17");e(n("66fd"));var a=e(n("0027"));my.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("c11b")["createPage"])},a5d2:function(t,e,n){"use strict";n.r(e);var a=n("ae3b"),i=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a},ae3b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{data:{gifPrice:0,orderCount:0,totalPrice:0,shop_supplier_id:""}}},onLoad:function(t){this.shop_supplier_id=t.shop_supplier_id},onShow:function(){this.getData()},methods:{gosupPage:function(t){this.gotoPage(t+"?shop_supplier_id="+this.shop_supplier_id)},getData:function(){var t=this;t._get("plus.live.Room/livedata",{},(function(e){t.data=e.data.data}))}}}},e3a3:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]}},[["87c9","common/runtime","common/vendor"]]]);