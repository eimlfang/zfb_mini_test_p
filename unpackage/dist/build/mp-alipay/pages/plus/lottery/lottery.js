(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/plus/lottery/lottery"],{1952:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={almostLottery:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/almost-lottery/components/almost-lottery/almost-lottery")]).then(n.bind(null,"237a"))}},o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.prizeIndex=-1})},a=[]},"28db":function(t,e,n){"use strict";n.r(e);var i=n("85a0"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"40b4":function(t,e,n){"use strict";(function(t){var e=n("4ea4");n("a8db"),n("33db"),n("5c17");e(n("66fd"));var i=e(n("bade"));my.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("c11b")["createPage"])},"85a0":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("2eee")),a=i(n("448a")),s=i(n("c973")),r={components:{AlmostLottery:function(){Promise.all([n.e("common/vendor"),n.e("uni_modules/almost-lottery/components/almost-lottery/almost-lottery")]).then(function(){return resolve(n("237a"))}.bind(null,n)).catch(n.oe)},popup:function(){n.e("components/uni-popup").then(function(){return resolve(n("743f"))}.bind(null,n)).catch(n.oe)},uniLoadMore:function(){n.e("components/uni-load-more").then(function(){return resolve(n("78e2"))}.bind(null,n)).catch(n.oe)}},data:function(){return{loading:!0,finish:!1,times:0,points:"",user_points:"",bg_image:"",content:"",prizeList:[],onStock:!0,prizeIndex:-1,result:{},listData:[],styleValue:"",index_num:0,lineHeight:0,maxSize:0,timer:null,isPopup:!1,isRecord:!1,recordList:[],list_rows:10,last_page:0,page:1,no_more:!1}},computed:{loadingType:function(){return this.loading?1:0!=this.recordList.length&&this.no_more?2:0}},onShow:function(){this.isRecord=!1,this.restoreData(),this.handleInitCanvas()},methods:{init:function(){var e=this;this.listData.length>1&&t.getSystemInfo({success:function(t){e.lineHeight=t.windowWidth/750*60,e.maxSize=e.listData.length,e.timer=setInterval((function(){e.animation()}),3e3)}})},animation:function(){this.index_num++,this.index_num>=this.maxSize&&(this.index_num=0),this.styleValue=-this.lineHeight*this.index_num},getPrizeList:function(){var e=this;return(0,s.default)(o.default.mark((function n(){var i,a;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.showLoading({title:"奖品准备中..."}),e.loading=!0,n.next=4,e.requestApiGetPrizeList();case 4:i=n.sent,i.ok?(a=i.data,a.length&&(e.prizeList=a)):(t.hideLoading(),t.showToast({title:"获取奖品失败"}));case 6:case"end":return n.stop()}}),n)})))()},requestApiGetPrizeList:function(){var t=this;return new Promise((function(e,n){t._post("plus.lottery.Lottery/getLottery",{},(function(n){t.loading=!1,t.bg_image=n.data.data.file_path,t.content=n.data.data.content,t.prizeList=n.data.data.prize,t.listData=n.data.recordList,t.listData.forEach((function(t,e){var n=Math.floor(30*Math.random())+1;t.showText=n+"分钟前"+t.user.nickName+"抽中了"+t.record_name})),t.times=n.data.nums,t.points=n.data.data.points,t.user_points=n.data.data.user_points,t.init(),e({ok:!0,data:t.prizeList})}))}))},handleInitCanvas:function(){this.prizeList=[],this.getPrizeList()},handleDrawStart:function(){console.log("start");var t=this;!t.loading&&t.finish&&(t.times<=0?t.showError("次数不足"):(t.loading=!0,t._post("plus.lottery.Lottery/draw",{},(function(e){t.times--,t.loading=!1,t.result=e.data.result;for(var n=(0,a.default)(t.prizeList),i=e.data.result.prize_id,o=0;o<n.length;o++){var s=n[o];if(s.prize_id===i){t.prizeIndex=o;break}}console.log("本次抽中奖品 =>",t.prizeList[t.prizeIndex].name)}),(function(e){t.loading=!1}))))},hidePopup:function(){this.isPopup=!1},hideRecordPopup:function(){this.isRecord=!1},handleDrawEnd:function(){this.isPopup=!0,this.handleInitCanvas()},handleDrawFinish:function(t){this.finish=!0},restoreData:function(){this.recordList=[],this.page=1,this.no_more=!1,this.last_page=1},getList:function(){var t=this;t.loading=!0,t._post("plus.lottery.Lottery/record",{list_rows:t.list_rows,page:t.page||1},(function(e){t.loading=!1,t.recordList=t.recordList.concat(e.data.list.data),t.last_page=e.data.list.last_page,e.data.list.last_page<=1&&(t.no_more=!0)}))},getRecord:function(){this.restoreData(),this.getList(),this.isRecord=!0},scrolltolowerFunc:function(){if(this.page++,this.loading=!0,this.page>this.last_page)return this.loading=!1,void(this.no_more=!0);this.getList()}}};e.default=r}).call(this,n("c11b")["default"])},bade:function(t,e,n){"use strict";n.r(e);var i=n("1952"),o=n("28db");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("d076");var s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=r.exports},ceed:function(t,e,n){},d076:function(t,e,n){"use strict";var i=n("ceed"),o=n.n(i);o.a}},[["40b4","common/runtime","common/vendor"]]]);