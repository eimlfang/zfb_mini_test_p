(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pagesLive/live/live-over"],{"0b31":function(t,n,e){"use strict";var a=e("b698"),i=e.n(a);i.a},"6c3a":function(t,n,e){"use strict";e.r(n);var a=e("e77a"),i=e("8aa2");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("0b31");var c=e("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"c88f1208",null,!1,a["a"],void 0);n["default"]=u.exports},"8aa2":function(t,n,e){"use strict";e.r(n);var a=e("a9c2"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},a9c2:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={components:{},data:function(){return{room_id:null,detailData:{}}},onLoad:function(t){this.room_id=t.room_id,this.getData()},methods:{getData:function(){var t=this;t._get("plus.live.room/detail",{room_id:t.room_id},(function(n){t.detailData=n.data.model}))},gotoHome:function(n){t.reLaunch({url:"/pages/index/index"})}}};n.default=e}).call(this,e("c11b")["default"])},b698:function(t,n,e){},d9d7:function(t,n,e){"use strict";(function(t){var n=e("4ea4");e("a8db"),e("33db"),e("5c17");n(e("66fd"));var a=n(e("6c3a"));my.__webpack_require_UNI_MP_PLUGIN__=e,t(a.default)}).call(this,e("c11b")["createPage"])},e77a:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]}},[["d9d7","common/runtime","common/vendor"]]]);