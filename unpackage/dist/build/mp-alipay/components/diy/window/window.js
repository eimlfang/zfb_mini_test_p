;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/diy/window/window"],{4955:function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){}));var e=function(){var t=this.$createElement;this._self._c},i=[]},"5f2d":function(t,n,a){"use strict";a.r(n);var e=a("4955"),i=a("bf80");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(r);a("e021");var u=a("f0c5"),c=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);n["default"]=c.exports},"7a06":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={data:function(){return{UrlData:"",indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,indicatorActiveColor:"#ffffff",background:"#ffffff",current:0,jldb:"155rpx"}},props:["itemData"],methods:{gotoPages:function(t){this.gotoPage(t.linkUrl)},changeSwiper:function(t){this.current=t.detail.current;var n=t.detail.current,a=this.itemData.data[n].background;this.background=a}},created:function(){this.UrlData=this.itemData.data.slice(0,2)}}},"7c18":function(t,n,a){},bf80:function(t,n,a){"use strict";a.r(n);var e=a("7a06"),i=a.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(r);n["default"]=i.a},e021:function(t,n,a){"use strict";var e=a("7c18"),i=a.n(e);i.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/diy/window/window-create-component',
    {
        'components/diy/window/window-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("5f2d"))
        })
    },
    [['components/diy/window/window-create-component']]
]);
