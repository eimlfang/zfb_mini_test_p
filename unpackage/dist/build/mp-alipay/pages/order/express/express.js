(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/order/express/express"],{"041c":function(t,e,n){"use strict";(function(t){var e=n("4ea4");n("a8db"),n("33db"),n("5c17");e(n("66fd"));var r=e(n("498f"));my.__webpack_require_UNI_MP_PLUGIN__=n,t(r.default)}).call(this,n("c11b")["createPage"])},"12b2":function(t,e,n){},2639:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var r=function(){var t=this.$createElement;this._self._c},i=[]},"369f":function(t,e,n){"use strict";var r=n("12b2"),i=n.n(r);i.a},"498f":function(t,e,n){"use strict";n.r(e);var r=n("2639"),i=n("8558");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("369f");var o=n("f0c5"),u=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=u.exports},"551c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{loadding:!0,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,order_id:0,express:{list:{}}}},onLoad:function(e){t.showLoading({title:"加载中"}),this.order_id=e.order_id},mounted:function(){this.getData()},methods:{getData:function(){var e=this,n=e.order_id;e._get("user.order/express",{order_id:n},(function(n){e.express=n.data.express,e.loadding=!1,t.hideLoading()}))}}};e.default=n}).call(this,n("c11b")["default"])},8558:function(t,e,n){"use strict";n.r(e);var r=n("551c"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a}},[["041c","common/runtime","common/vendor"]]]);