;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pagesLive/live/live-part/app-nvue-share"],{"46f9":function(e,t,a){"use strict";a.r(t);var i=a("9b56"),n=a("ab4a");for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("d433");var r=a("f0c5"),o=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"7aba0556",null,!1,i["a"],void 0);t["default"]=o.exports},"6e14":function(e,t,a){},"9b56":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this.$createElement;this._self._c},n=[]},"9f4a":function(e,t,a){"use strict";(function(e){var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("067d")),s={data:function(){return{popupVisible:!1,shareConfig:{},logo:""}},created:function(){this.getData()},props:["appParams"],methods:{show:function(){this.popupVisible=!0,this.getData()},getRequest:function(){return this},getData:function(){var e=this;e.getRequest()._get("settings/appShare",{},(function(t){e.shareConfig=t.data.appshare,e.logo=t.data.logo,console.log(e.shareConfig)}))},closePopup:function(e){this.popupVisible=!1},share:function(t,a){var i={provider:"weixin",scene:a,type:t,success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){console.log("fail:"+JSON.stringify(e))}};2!=this.shareConfig.type?(i.summary=this.appParams.summary,i.imageUrl=this.logo,i.title=this.appParams.title,1==this.shareConfig.type?i.href=this.shareConfig.open_site+this.appParams.path:3==this.shareConfig.type&&(1==this.shareConfig.bind_type?i.href=this.shareConfig.down_url:i.href=n.default.app_url+"/index.php/api/user.useropen/invite?app_id="+n.default.app_id+"&referee_id="+e.getStorageSync("user_id"))):(i.scene="WXSceneSession",i.type=5,i.imageUrl=this.appParams.image?this.appParams.image:this.logo,i.title=this.appParams.title,i.miniProgram={id:this.shareConfig.gh_id,path:this.appParams.path,webUrl:this.shareConfig.web_url,type:0}),e.share(i)}}};t.default=s}).call(this,a("c11b")["default"])},ab4a:function(e,t,a){"use strict";a.r(t);var i=a("9f4a"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},d433:function(e,t,a){"use strict";var i=a("6e14"),n=a.n(i);n.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'pagesLive/live/live-part/app-nvue-share-create-component',
    {
        'pagesLive/live/live-part/app-nvue-share-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("46f9"))
        })
    },
    [['pagesLive/live/live-part/app-nvue-share-create-component']]
]);