;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/diy/notice/notice"],{"157e":function(t,e,n){"use strict";var a=n("6b20"),i=n.n(a);i.a},"30bd":function(t,e,n){"use strict";n.r(e);var a=n("e3a2"),i=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a},"50a1":function(t,e,n){"use strict";n.r(e);var a=n("51d2"),i=n("30bd");for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("157e");var c=n("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=o.exports},"51d2":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]},"6b20":function(t,e,n){},e3a2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{textData:""}},props:["itemData"],created:function(){this.textData=this.itemData.params.text,this.horseRaceLamp()},methods:{horseRaceLamp:function(){var t=this;setTimeout((function(){var e=t.textData.slice(0,1),n=t.textData.slice(1,t.textData.length);t.textData=n+e,t.horseRaceLamp()}),200)},gotoPages:function(t){this.gotoPage(t.linkUrl)}}};e.default=a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/diy/notice/notice-create-component',
    {
        'components/diy/notice/notice-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("50a1"))
        })
    },
    [['components/diy/notice/notice-create-component']]
]);
