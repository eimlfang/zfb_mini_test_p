(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/user/points/points"],{"0380":function(t,n,e){"use strict";(function(t){var n=e("4ea4");e("a8db"),e("33db"),e("5c17");n(e("66fd"));var a=n(e("87df"));my.__webpack_require_UNI_MP_PLUGIN__=e,t(a.default)}).call(this,e("c11b")["createPage"])},"5f5c":function(t,n,e){},"65ee":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.theme()||""),a=t.theme();t._isMounted||(t.e0=function(n){t.isPop=!0}),t.$mp.data=Object.assign({},{$root:{m0:e,m1:a}})},o=[]},"87df":function(t,n,e){"use strict";e.r(n);var a=e("65ee"),o=e("e30c");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("b074");var s=e("f0c5"),r=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=r.exports},a79d:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={components:{uniLoadMore:function(){e.e("components/uni-load-more").then(function(){return resolve(e("78e2"))}.bind(null,e)).catch(e.oe)},recharge:function(){e.e("pages/user/points/part/recharge").then(function(){return resolve(e("1d96"))}.bind(null,e)).catch(e.oe)}},data:function(){return{isPop:!1,loadding:!0,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,topRefresh:!1,phoneHeight:0,scrollviewHigh:0,tableData:[],last_page:0,page:1,list_rows:20,no_more:!1,loading:!0,points:0,is_open:!1,discount_ratio:"0",is_trans_balance:!1}},computed:{loadingType:function(){return this.loading?1:0!=this.tableData.length&&this.no_more?2:0}},mounted:function(){this.getData()},onReachBottom:function(){this.page<this.last_page&&(this.page++,this.getData()),this.no_more=!0},methods:{closePop:function(t){null!=t&&(this.page=1,this.tableData=[],this.getData()),this.isPop=!1},getData:function(){var t=this,n=t.page,e=t.list_rows;t._get("points.log/index",{page:n||1,list_rows:e},(function(n){if(t.loading=!1,t.points=n.data.points,t.discount_ratio=n.data.discount_ratio,t.is_open=n.data.is_open,t.is_trans_balance=n.data.is_trans_balance,t.tableData=t.tableData.concat(n.data.list.data),t.last_page=n.data.list.last_page,n.data.list.last_page<=1)return t.no_more=!0,!1}))},gotoShop:function(){this.gotoPage("/pages/plus/points/list/list")}}};n.default=a},b074:function(t,n,e){"use strict";var a=e("5f5c"),o=e.n(a);o.a},e30c:function(t,n,e){"use strict";e.r(n);var a=e("a79d"),o=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a}},[["0380","common/runtime","common/vendor"]]]);