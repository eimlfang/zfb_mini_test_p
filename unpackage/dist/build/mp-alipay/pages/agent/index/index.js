(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/agent/index/index"],{"2da7":function(t,n,a){"use strict";a.r(n);var e=a("4c6c"),i=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},"4c6c":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{loadding:!0,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,is_agent:!1,isData:!1,agent:{},top_background:"",info_words:{},words:{},user:{},titel:""}},onLoad:function(t){t.is_agent&&(this.is_agent=t.is_agent)},onShow:function(){t.showLoading({title:"加载中"}),this.getData()},methods:{getData:function(){var n=this;n._get("user.agent/center",{},(function(a){n.info_words=a.data.words,t.setNavigationBarTitle({title:""!=n.info_words.index.title.value?n.info_words.index.title.value:n.info_words.index.title.default}),n.titel=a.data.words.index.title.value,n.is_agent=a.data.is_agent,n.top_background=a.data.background,n.agent=a.data.agent,n.user=a.data.user,n.isData=!0,n.loadding=!1,t.hideLoading()}))},applyagent:function(){this.gotoPage("/pages/agent/apply/apply")},gotoShop:function(){this.gotoPage("/pages/index/index")},gotoCash:function(){this.gotoPage("/pages/agent/cash/apply/apply")},goback:function(){t.navigateBack()}}};n.default=a}).call(this,a("c11b")["default"])},"960d":function(t,n,a){"use strict";a.r(n);var e=a("b9db"),i=a("2da7");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("bd96");var d=a("f0c5"),u=Object(d["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);n["default"]=u.exports},b9db:function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){}));var e=function(){var t=this.$createElement;this._self._c},i=[]},bd96:function(t,n,a){"use strict";var e=a("c10d"),i=a.n(e);i.a},c10d:function(t,n,a){},ee67:function(t,n,a){"use strict";(function(t){var n=a("4ea4");a("a8db"),a("33db"),a("5c17");n(a("66fd"));var e=n(a("960d"));my.__webpack_require_UNI_MP_PLUGIN__=a,t(e.default)}).call(this,a("c11b")["createPage"])}},[["ee67","common/runtime","common/vendor"]]]);