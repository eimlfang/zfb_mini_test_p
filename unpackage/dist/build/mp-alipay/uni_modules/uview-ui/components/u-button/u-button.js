;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-button/u-button"],{"20f9":function(t,i,n){},ba8f:function(t,i,n){"use strict";var o=n("20f9"),e=n.n(o);e.a},bd81:function(t,i,n){"use strict";n.r(i);var o=n("edf7"),e=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(i,t,(function(){return o[t]}))}(r);i["default"]=e.a},e804:function(t,i,n){"use strict";n.r(i);var o=n("fc0c"),e=n("bd81");for(var r in e)["default"].indexOf(r)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(r);n("ba8f");var u=n("f0c5"),c=Object(u["a"])(e["default"],o["b"],o["c"],!1,null,"21c3eb91",null,!1,o["a"],void 0);i["default"]=c.exports},edf7:function(t,i,n){"use strict";(function(t){var o=n("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=o(n("b92d")),r=o(n("4299")),u=o(n("1384")),c={name:"u-button",mixins:[t.$u.mpMixin,t.$u.mixin,e.default,r.default,u.default],data:function(){return{}},computed:{bemClass:function(){return this.color?this.bem("button",["shape","size"],["disabled","plain","hairline"]):this.bem("button",["type","shape","size"],["disabled","plain","hairline"])},loadingColor:function(){return this.plain?this.color?this.color:t.$u.config.color["u-".concat(this.type)]:"info"===this.type?"#c9c9c9":"rgb(200, 200, 200)"},iconColorCom:function(){return this.iconColor?this.iconColor:this.plain?this.color?this.color:this.type:"info"===this.type?"#000000":"#ffffff"},baseColor:function(){var t={};return this.color&&(t.color=this.plain?this.color:"white",this.plain||(t["background-color"]=this.color),-1!==this.color.indexOf("gradient")?(t.borderTopWidth=0,t.borderRightWidth=0,t.borderBottomWidth=0,t.borderLeftWidth=0,this.plain||(t.backgroundImage=this.color)):(t.borderColor=this.color,t.borderWidth="1px",t.borderStyle="solid")),t},nvueTextStyle:function(){var t={};return"info"===this.type&&(t.color="#323233"),this.color&&(t.color=this.plain?this.color:"white"),t.fontSize=this.textSize+"px",t},textSize:function(){var t=14,i=this.size;return"large"===i&&(t=16),"normal"===i&&(t=14),"small"===i&&(t=12),"mini"===i&&(t=10),t}},methods:{clickHandler:function(){var i=this;this.disabled||this.loading||t.$u.throttle((function(){i.$emit("click")}),this.throttleTime)},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};i.default=c}).call(this,n("c11b")["default"])},fc0c:function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return r})),n.d(i,"a",(function(){return o}));var o={uLoadingIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(n.bind(null,"0fa6"))},uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,"1d9f"))}},e=function(){var t=this.$createElement,i=(this._self._c,this.__get_style([this.baseColor,this.$u.addStyle(this.customStyle)])),n=Number(this.hoverStartTime),o=Number(this.hoverStayTime);this.$mp.data=Object.assign({},{$root:{s0:i,m0:n,m1:o}})},r=[]}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-button/u-button-create-component',
    {
        'uni_modules/uview-ui/components/u-button/u-button-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("e804"))
        })
    },
    [['uni_modules/uview-ui/components/u-button/u-button-create-component']]
]);
