(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/store/detail/detail"],{"16f8":function(t,e,n){"use strict";(function(t){var e=n("4ea4");n("a8db"),n("33db"),n("5c17");e(n("66fd"));var a=e(n("2d8e"));my.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("c11b")["createPage"])},"2d8e":function(t,e,n){"use strict";n.r(e);var a=n("9d45"),i=n("9dc6");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("4d54");var d=n("f0c5"),u=Object(d["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=u.exports},"358e":function(t,e,n){},"4d54":function(t,e,n){"use strict";var a=n("358e"),i=n.n(a);i.a},"9d45":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]},"9dc6":function(t,e,n){"use strict";n.r(e);var a=n("f973"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},f973:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{loading:!0,store_id:null,storeDetail:{},covers:[]}},onLoad:function(t){this.store_id=t.store_id},mounted:function(){this.getData()},methods:{getData:function(){var e=this;t.showLoading({title:"加载中"}),e._get("store.store/detail",{store_id:e.store_id},(function(n){e.storeDetail=n.data.detail;var a={latitude:n.data.detail.latitude,longitude:n.data.detail.longitude};e.covers.push(a),e.loading=!1,t.hideLoading()}))},callPhone:function(e){t.makePhoneCall({phoneNumber:e})}}};e.default=n}).call(this,n("c11b")["default"])}},[["16f8","common/runtime","common/vendor"]]]);