;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/countdown/countdown"],{"25ce":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{status:0,day:"0",hour:"0",minute:"0",second:"0",timer:null,totalSeconds:0,title:"活动剩余："}},props:{config:{type:Object,default:function(){return{type:"all"}}}},created:function(){},watch:{config:{deep:!0,handler:function(t,n){t!=n&&0!=t.endstamp&&(t.title&&"undefined"!=typeof t.title&&(this.title=t.title),this.setTime())},immediate:!0}},methods:{setTime:function(){var t=this;t.timer=setInterval((function(){t.init()}),1e3)},init:function(){var t=Date.now()/1e3;t<this.config.startstamp?this.status=1:t>this.config.endstamp?this.status=2:(this.totalSeconds=parseInt(this.config.endstamp-t),this.status=0,this.countDown()),this.$emit("returnVal",this.status)},countDown:function(){var t=this.totalSeconds,n=Math.floor(t/86400),e=t%86400,i=Math.floor(e/3600);e%=3600;var o=Math.floor(e/60),s=e%60;this.day=this.convertTwo(n),this.hour=this.convertTwo(i),this.minute=this.convertTwo(o),this.second=this.convertTwo(s),this.totalSeconds--},convertTwo:function(t){var n="";return n=t<10?"0"+t:t,n},getLocalTime:function(t){return new Date(1e3*parseInt(t)).toLocaleString().replace(/:\d{1,2}$/," ")},clear:function(){console.log(1),clearInterval(this.timer),this.timer=null}},destroyed:function(){clearInterval(this.timer)}};n.default=i},"28de":function(t,n,e){"use strict";e.r(n);var i=e("fc24"),o=e("ba70");for(var s in o)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(s);e("4167");var a=e("f0c5"),r=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=r.exports},"2a6e":function(t,n,e){},4167:function(t,n,e){"use strict";var i=e("2a6e"),o=e.n(i);o.a},ba70:function(t,n,e){"use strict";e.r(n);var i=e("25ce"),o=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=o.a},fc24:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement,n=(this._self._c,"text"===this.config.type?parseInt(24*this.day):null),e="text"===this.config.type?parseInt(this.hour):null;this.$mp.data=Object.assign({},{$root:{m0:n,m1:e}})},o=[]}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/countdown/countdown-create-component',
    {
        'components/countdown/countdown-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("28de"))
        })
    },
    [['components/countdown/countdown-create-component']]
]);
