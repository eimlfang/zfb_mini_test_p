;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/diy/coupon/coupon"],{"295e":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{indicatorDots:!1,autoplay:!0,interval:5e3,duration:1e3,listData:[]}},props:["itemData"],created:function(){this.listData=this.itemData.data},methods:{scroll:function(t){},receiveCoupon:function(n){var e=this.listData[n];if(0==e.state.value)return!1;this._post("user.coupon/receive",{coupon_id:e.coupon_id},(function(n){t.showToast({title:"领取成功",icon:"success",mask:!0,duration:2e3}),e.state.value=0,e.state.text="已领取"}))}}};n.default=e}).call(this,e("c11b")["default"])},"5f7c":function(t,n,e){"use strict";var a=e("a671"),u=e.n(a);u.a},a671:function(t,n,e){},d53e:function(t,n,e){"use strict";e.r(n);var a=e("295e"),u=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=u.a},f637:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},u=[]},f94c:function(t,n,e){"use strict";e.r(n);var a=e("f637"),u=e("d53e");for(var i in u)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("5f7c");var o=e("f0c5"),c=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=c.exports}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/diy/coupon/coupon-create-component',
    {
        'components/diy/coupon/coupon-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("f94c"))
        })
    },
    [['components/diy/coupon/coupon-create-component']]
]);
