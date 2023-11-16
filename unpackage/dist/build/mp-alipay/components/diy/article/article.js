;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/diy/article/article"],{"2ce9":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]},"50b8":function(t,e,n){"use strict";var a=n("ffae"),i=n.n(a);i.a},"65c4":function(t,e,n){"use strict";n.r(e);var a=n("a516"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},a516:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{listData:[]}},props:["itemData"],created:function(){this.listData=this.itemData.data},methods:{gotoPageFunc:function(t){var e="pages/article/detail/detail?article_id="+t.article_id;this.gotoPage(e)},add0:function(t){return t<10?"0"+t:t},format:function(t){var e=new Date(t),n=e.getFullYear(),a=e.getMonth()+1,i=e.getDate();return n+"-"+this.add0(a)+"-"+this.add0(i)}}};e.default=a},ad07:function(t,e,n){"use strict";n.r(e);var a=n("2ce9"),i=n("65c4");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("50b8");var u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=c.exports},ffae:function(t,e,n){}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/diy/article/article-create-component',
    {
        'components/diy/article/article-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("ad07"))
        })
    },
    [['components/diy/article/article-create-component']]
]);
