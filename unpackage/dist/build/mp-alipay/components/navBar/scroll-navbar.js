;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/navBar/scroll-navbar"],{"0af5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"ss-scroll-navbar",props:{navArr:{type:Array,default:function(){return[{name:"推荐",category_id:"recent"}]}},tabCurrentIndex:{type:Number,default:0},scrollChangeIndex:{type:Number,default:0}},data:function(){return{scrollLeft:0,widthList:[],screenWidth:0}},methods:{tabChange:function(t){this.$emit("navbarTap",t);for(var e=this.widthList,n=0,a=0;a<t+1;a++)n+=e[a];var i=e[t];n-=this.screenWidth/2,n-=i/2,this.scrollLeft=n},calculateItemWidth:function(){var e=this,n=[];this.navArr.forEach((function(a,i){var r=t.createSelectorQuery().in(e).select("#item-"+i);r.fields({size:!0},(function(t){n.push(t.width)})).exec()})),this.widthList=n},calculateWindowWidth:function(){var e=t.getSystemInfoSync();this.screenWidth=e.screenWidth}},created:function(){var t=this;this.calculateWindowWidth(),setTimeout((function(){t.calculateItemWidth()}),1e3)},watch:{scrollChangeIndex:function(t){this.tabChange(t)}}};e.default=n}).call(this,n("c11b")["default"])},"201b":function(t,e,n){"use strict";n.r(e);var a=n("d9ea"),i=n("7bc1");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("edaf");var c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=u.exports},"5dd5":function(t,e,n){},"7bc1":function(t,e,n){"use strict";n.r(e);var a=n("0af5"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},d9ea:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]},edaf:function(t,e,n){"use strict";var a=n("5dd5"),i=n.n(a);i.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/navBar/scroll-navbar-create-component',
    {
        'components/navBar/scroll-navbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("201b"))
        })
    },
    [['components/navBar/scroll-navbar-create-component']]
]);
