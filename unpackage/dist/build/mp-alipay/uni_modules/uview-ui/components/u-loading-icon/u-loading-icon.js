;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-loading-icon/u-loading-icon"],{"032a":function(n,t,e){"use strict";var i=e("abc5"),u=e.n(i);u.a},"0fa6":function(n,t,e){"use strict";e.r(t);var i=e("f7f9"),u=e("ba9f");for(var a in u)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(a);e("032a");var o=e("f0c5"),r=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"10a89718",null,!1,i["a"],void 0);t["default"]=r.exports},"202d":function(n,t,e){"use strict";(function(n){var i=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(e("aaca")),a={name:"u-loading-icon",mixins:[n.$u.mpMixin,n.$u.mixin,u.default],data:function(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor:function(){var t=n.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:t:"transparent"}},watch:{show:function(n){}},mounted:function(){this.init()},methods:{init:function(){setTimeout((function(){}),20)},addEventListenerToWebview:function(){var n=this,t=getCurrentPages(),e=t[t.length-1],i=e.$getAppWebview();i.addEventListener("hide",(function(){n.webviewHide=!0})),i.addEventListener("show",(function(){n.webviewHide=!1}))}}};t.default=a}).call(this,e("c11b")["default"])},abc5:function(n,t,e){},ba9f:function(n,t,e){"use strict";e.r(t);var i=e("202d"),u=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=u.a},f7f9:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){}));var i=function(){var n=this,t=n.$createElement,e=(n._self._c,n.show?n.__get_style([n.$u.addStyle(n.customStyle)]):null),i=n.show&&!n.webviewHide?n.$u.addUnit(n.size):null,u=n.show&&!n.webviewHide?n.$u.addUnit(n.size):null,a=n.show&&n.text?n.$u.addUnit(n.textSize):null;n.$mp.data=Object.assign({},{$root:{s0:e,g0:i,g1:u,g2:a}})},u=[]}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-loading-icon/u-loading-icon-create-component',
    {
        'uni_modules/uview-ui/components/u-loading-icon/u-loading-icon-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("0fa6"))
        })
    },
    [['uni_modules/uview-ui/components/u-loading-icon/u-loading-icon-create-component']]
]);