(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/plus/points/list/list"],{"19c8":function(t,n,a){"use strict";a.r(n);var e=a("71b6"),i=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},"71b6":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={components:{uniLoadMore:function(){a.e("components/uni-load-more").then(function(){return resolve(a("78e2"))}.bind(null,a)).catch(a.oe)}},data:function(){return{loading:!0,listData:[],last_page:0,page:1,list_rows:10,no_more:!1,my_points:0}},onLoad:function(){this.getData()},computed:{loadingType:function(){return this.loading?1:0!=this.listData.length&&this.no_more?2:0}},onReachBottom:function(){this.page<this.last_page&&(this.page++,this.getData()),this.no_more=!0},methods:{getData:function(){var t=this;t.loading=!0,t._get("plus.points.product/index",{page:t.page||1,list_rows:t.list_rows},(function(n){t.loading=!1,t.listData=t.listData.concat(n.data.list.data),t.my_points=n.data.user.points,t.last_page=n.data.list.last_page,n.data.list.last_page<=1&&(t.no_more=!0)}))},gotoList:function(t){this.gotoPage("/pages/plus/points/detail/detail?point_product_id="+t)}}};n.default=e},"752a":function(t,n,a){},"7c7b":function(t,n,a){"use strict";(function(t){var n=a("4ea4");a("a8db"),a("33db"),a("5c17");n(a("66fd"));var e=n(a("a6e0"));my.__webpack_require_UNI_MP_PLUGIN__=a,t(e.default)}).call(this,a("c11b")["createPage"])},a6e0:function(t,n,a){"use strict";a.r(n);var e=a("f382"),i=a("19c8");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("cf8e");var s=a("f0c5"),u=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);n["default"]=u.exports},cf8e:function(t,n,a){"use strict";var e=a("752a"),i=a.n(e);i.a},f382:function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){}));var e=function(){var t=this.$createElement;this._self._c},i=[]}},[["7c7b","common/runtime","common/vendor"]]]);