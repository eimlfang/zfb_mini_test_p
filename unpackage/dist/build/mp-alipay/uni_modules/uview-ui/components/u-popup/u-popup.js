;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-popup/u-popup"],{"0b42":function(t,e,o){"use strict";(function(t){var n=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("57f1")),u={name:"u-popup",mixins:[t.$u.mpMixin,t.$u.mixin,i.default],data:function(){return{overlayDuration:this.duration+50}},watch:{show:function(t,e){}},computed:{transitionStyle:function(){var e={zIndex:this.zIndex,position:"fixed",display:"flex"};return e[this.mode]=0,"left"===this.mode||"right"===this.mode?t.$u.deepMerge(e,{bottom:0,top:0}):"top"===this.mode||"bottom"===this.mode?t.$u.deepMerge(e,{left:0,right:0}):"center"===this.mode?t.$u.deepMerge(e,{alignItems:"center","justify-content":"center",top:0,left:0,right:0,bottom:0}):void 0},contentStyle:function(){var e={},o=t.$u.sys();o.safeAreaInsets;if("center"!==this.mode&&(e.flex=1),this.bgColor&&(e.backgroundColor=this.bgColor),this.round){var n=t.$u.addUnit(this.round);"top"===this.mode?(e.borderBottomLeftRadius=n,e.borderBottomRightRadius=n):"bottom"===this.mode?(e.borderTopLeftRadius=n,e.borderTopRightRadius=n):"center"===this.mode&&(e.borderRadius=n)}return t.$u.deepMerge(e,t.$u.addStyle(this.customStyle))},position:function(){return"center"===this.mode?this.zoom?"fade-zoom":"fade":"left"===this.mode?"slide-left":"right"===this.mode?"slide-right":"bottom"===this.mode?"slide-up":"top"===this.mode?"slide-down":void 0}},methods:{overlayClick:function(){this.closeOnClickOverlay&&this.$emit("close")},close:function(t){this.$emit("close")},afterEnter:function(){this.$emit("open")},clickHandler:function(){"center"===this.mode&&this.overlayClick(),this.$emit("click")}}};e.default=u}).call(this,o("c11b")["default"])},"26b0":function(t,e,o){"use strict";var n=o("d3b5"),i=o.n(n);i.a},"7a40":function(t,e,o){"use strict";o.r(e);var n=o("0b42"),i=o.n(n);for(var u in n)["default"].indexOf(u)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(u);e["default"]=i.a},a40d:function(t,e,o){"use strict";o.r(e);var n=o("bb02"),i=o("7a40");for(var u in i)["default"].indexOf(u)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(u);o("26b0");var r=o("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"599ead9e",null,!1,n["a"],void 0);e["default"]=s.exports},bb02:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return u})),o.d(e,"a",(function(){return n}));var n={uOverlay:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-overlay/u-overlay")]).then(o.bind(null,"cb3c"))},uTransition:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-transition/u-transition")]).then(o.bind(null,"791d"))},uStatusBar:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-status-bar/u-status-bar")]).then(o.bind(null,"8a60"))},uIcon:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(o.bind(null,"1d9f"))},uSafeBottom:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-safe-bottom/u-safe-bottom")]).then(o.bind(null,"ec87"))}},i=function(){var t=this.$createElement,e=(this._self._c,this.__get_style([this.contentStyle]));this.$mp.data=Object.assign({},{$root:{s0:e}})},u=[]},d3b5:function(t,e,o){}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-popup/u-popup-create-component',
    {
        'uni_modules/uview-ui/components/u-popup/u-popup-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("a40d"))
        })
    },
    [['uni_modules/uview-ui/components/u-popup/u-popup-create-component']]
]);
