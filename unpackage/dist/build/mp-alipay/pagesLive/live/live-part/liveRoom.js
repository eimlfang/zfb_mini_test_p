;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pagesLive/live/live-part/liveRoom"],{6142:function(e,o,t){"use strict";t.r(o);var n=t("7d03"),i=t("d22a");for(var s in i)["default"].indexOf(s)<0&&function(e){t.d(o,e,(function(){return i[e]}))}(s);var c=t("f0c5"),r=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"a209b68e",null,!1,n["a"],void 0);o["default"]=r.exports},"7d03":function(e,o,t){"use strict";t.d(o,"b",(function(){return n})),t.d(o,"c",(function(){return i})),t.d(o,"a",(function(){}));var n=function(){var e=this.$createElement;this._self._c},i=[]},d22a:function(e,o,t){"use strict";t.r(o);var n=t("fdce"),i=t.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){t.d(o,e,(function(){return n[e]}))}(s);o["default"]=i.a},fdce:function(e,o,t){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=t("97a7"),i=t("e576"),s={data:function(){return{loading_login:!1,pusherContext:null,playerContext:null,player_url:"",mainPusherInfo_url:"",room_id:"",TextMsg:"",open_gift:!1,commentsList:[],giftList:[],open_products:!1,explain_product_id:"",explain_product:null,open_more:!1,beauty:5,whiteness:5,device_position:"front",open_share:!1,param_share:{},qrcode:null,showNumTimer:null,is_click_digg:!1,roomDetail:{},userInfo:{},channel:"",appId:"",rtm_client:null,reconnectTimer:null,push_status:"loading",picture_mode:["push","pop"],isCaster:!1}},props:["winHeight","winWidth","role","is_replay","replay_url"],methods:{show:function(){null!=this.playerContext&&this.playerContext.play(),this.pusherContext&&this.reconnect()},getRequest:function(){return this},start:function(o,t){if(this.roomDetail=o,this.userInfo=t,this.channel="channel_"+o.shop_supplier_id,this.isCaster="broadcaster"==this.role,this.isCaster){var n=e.getStorageSync("whiteness");n&&(this.whiteness=n);var i=e.getStorageSync("beauty");i&&(this.beauty=i)}else console.log("观众进入");this.loginRoom()},loginRoom:function(){var o=this;e.showLoading({title:"正在进入"}),o.getRequest()._get("plus.live.agora.api/login",{room_id:o.roomDetail.room_id,channel:o.channel,isCaster:o.isCaster},(function(t){o.appId=t.data.appId,o.initAgoraChannel(t.data.userSign).then((function(t){console.log("pushing ".concat(t));(new Date).getTime();o.mainPusherInfo_url=t,o.isCaster&&(o.pusherContext=e.createLivePusherContext("livePusher1",o),setTimeout((function(){console.log("创建 pusherContext app：",o.pusherContext),o.pusherContext.start(),o.loginIM()}),500),o.showNumTimer=setInterval((function(){o.synRoomInfo()}),15e3))})).catch((function(o){console.log("init agora client failed: ".concat(o)),console.log(JSON.stringify(o)),e.showToast({title:"客户端初始化失败",icon:"none",duration:5e3})}))}))},initAgoraChannel:function(e){var o=this;return new Promise((function(t,i){var s=new n.Client;o.subscribeEvents(s),n.LOG.onLog=function(e){console.log(e)},n.LOG.setLogLevel(1),o.client=s,s.setRole(o.role),s.init(o.appId,(function(){console.log("client init success"),s.join(e,o.channel,o.getRequest().getUserId(),(function(){console.log("client join channel success"),o.isCaster?s.publish((function(e){console.log("client publish success"),console.log("url="+e),t(e)}),(function(e){console.log("client publish failed: ".concat(e.code," ").concat(e.reason)),i(e)})):t()}),(function(e){console.log(": ".concat(e.code," ").concat(e.reason)),i(e)}))}),(function(e){console.log("client init failed: ".concat(e," ").concat(e.code," ").concat(e.reason)),i(e)}))}))},loginIM:function(){var e=this;e.getRequest()._get("plus.live.agora.api/rtmToken",{channel:e.channel},(function(o){e.rtm_client=new i(e.appId),e.onChannelEvent(),e.rtm_client.on("ConnectionStateChanged",(function(e,o){console.log("The connection status",e),console.log("The reason for the state change",o)})),e.rtm_client.login(o.data.userSign,""+e.getRequest().getUserId()).then((function(){console.log("AgoraRTM client login success"),e.rtm_client.joinChannel(e.channel).then((function(){console.log("join channel success");var o={type:"enter",nickName:e.userInfo.nickName};e.sendMsg(JSON.stringify(o)),e.isCaster&&e.getRequest()._post("plus.live.room/set_status",{room_id:e.roomDetail.room_id,status:101},(function(o){e.startRecord()}))})).catch((function(e){console.log("join channel failed",e)}))})).catch((function(e){console.log("AgoraRTM client login failure",e)}))}))},synRoomInfo:function(e){var o=this;o.getRequest()._post("plus.live.room/syn_room",{room_id:o.roomDetail.room_id},(function(e){var t={type:"views",views:e.data.model.views,digg_num:e.data.model.digg_num};o.sendMsg(JSON.stringify(t))}))},subscribeEvents:function(e){var o=this;e.on("video-rotation",(function(e){console.log("video rotated: ".concat(e.rotation," ").concat(e.uid))})),e.on("stream-added",(function(t){var n=t.uid;console.log("stream ".concat(n," added")),e.subscribe(n,(function(e,t){console.log("stream ".concat(n," subscribed successful")),console.log(e),o.player_url=e,o.loginIM()}),(function(e){console.log("stream subscribed failed ".concat(e," ").concat(e.code," ").concat(e.reason))}))})),e.on("stream-removed",(function(e){var o=e.uid;console.log("stream ".concat(o," removed"))})),e.on("error",(function(e){var t=e||{},n=t.code||0,i=t.reason||"";console.log("error: ".concat(n,", reason: ").concat(i)),501!==n&&904!==n||o.reconnect()})),e.on("update-url",(function(e){console.log("update-url: ".concat(JSON.stringify(e)))}))},onChannelEvent:function(){var e=this;e.rtm_client.on("ChannelMessage",(function(o,t){o.text;console.log("message -----"),console.log(o),t!=e.getRequest().getUserId()&&e.$emit("showMsg",o.text)})),e.rtm_client.on("MemberJoined",(function(e){console.log("memberId: ",e)})),e.rtm_client.on("MemberLeft",(function(e){console.log("memberId: ",e)}))},sendMsg:function(e){var o=this;o.rtm_client.sendChannel(e).then((function(){o.$emit("showMsg",e)})).catch((function(e){console.log("频道消息发送失败的处理逻辑"),console.log(e)}))},liveSet:function(e){switch(e.type){case"beauty":this.beauty=e.value;break;case"whiteness":this.whiteness=e.value;break;case"device_position":this.device_position=e.value,null!=this.pusherContext&&this.pusherContext.switchCamera({type:e.value,success:function(e){console.log("切换成功")},fail:function(e){console.log(e)}});break}},reconnect:function(){var o=this;e.showToast({title:"尝试恢复链接...",icon:"none",duration:5e3}),o.client&&o.client.destroy(),o.reconnectTimer=setTimeout((function(){o.loginRoom()}),1e3)},recorderStateChange:function(e){console.log("live-pusher code: ",e),-1307===e.detail.code&&(console.log("live-pusher stopped ---- error"),this.push_status="error"),1008===e.detail.code&&(console.log("live-pusher started"),"loading"===this.push_status&&(this.push_status="ok"))},recorderNetChange:function(e){},onMainError:function(e){console.log("onMainError called: ",e)},exit:function(o){var t="/pagesLive/live/index";if("broadcaster"==this.role){o="over";this.sendMsg(JSON.stringify({type:"over"}))}"over"==o&&(t="/pagesLive/live/live-over?room_id="+this.roomDetail.room_id),this.clear(),e.redirectTo({url:t})},startRecord:function(){var e=this;e.isCaster&&e.getRequest()._post("plus.live.agora.api/record_acquire",{room_id:e.roomDetail.room_id},(function(o){e.getRequest()._post("plus.live.agora.api/record_start",{room_id:e.roomDetail.room_id},(function(o){e.getRequest()._post("plus.live.agora.api/record_query",{room_id:e.roomDetail.room_id},(function(e){}))}))}))},clear:function(){try{if(this.showNumTimer&&(clearInterval(this.showNumTimer),this.showNumTimer=null),this.playerContext&&(this.playerContext.stop(),this.playerContext=null),this.pusherContext&&(this.pusherContext.stop(),this.pusherContext=null),clearTimeout(this.reconnectTimer),this.reconnectTimer=null,this.isCaster)try{this.client&&this.client.unpublish()}catch(e){console.log("unpublish failed"),console.log(e)}this.client&&this.client.leave(),this.rtm_client&&this.rtm_client.logout()}catch(e){console.log(e)}}}};o.default=s}).call(this,t("c11b")["default"])}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'pagesLive/live/live-part/liveRoom-create-component',
    {
        'pagesLive/live/live-part/liveRoom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("6142"))
        })
    },
    [['pagesLive/live/live-part/liveRoom-create-component']]
]);