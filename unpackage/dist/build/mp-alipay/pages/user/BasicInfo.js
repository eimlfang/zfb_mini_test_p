(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/user/BasicInfo"],{2133:function(e,n,a){"use strict";a.d(n,"b",(function(){return t})),a.d(n,"c",(function(){return l})),a.d(n,"a",(function(){return o}));var o={uNoticeBar:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uview-ui/components/u-notice-bar/u-notice-bar")]).then(a.bind(null,"12b3"))},"u-Form":function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uview-ui/components/u--form/u--form")]).then(a.bind(null,"48db"))},uFormItem:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uview-ui/components/u-form-item/u-form-item")]).then(a.bind(null,"e5d1"))},"u-Input":function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uview-ui/components/u--input/u--input")]).then(a.bind(null,"cb20"))},uIcon:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(a.bind(null,"1d9f"))},uRadioGroup:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uview-ui/components/u-radio-group/u-radio-group")]).then(a.bind(null,"2a77"))},uRadio:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uview-ui/components/u-radio/u-radio")]).then(a.bind(null,"224d"))},uButton:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uview-ui/components/u-button/u-button")]).then(a.bind(null,"e804"))},uActionSheet:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uview-ui/components/u-action-sheet/u-action-sheet")]).then(a.bind(null,"633f"))}},t=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.showset=!0},e.e1=function(n){e.showtime=!0},e.e2=function(n){e.showzmxyf=!0},e.e3=function(n){e.showgjj=!0},e.e4=function(n){e.showhb=!0},e.e5=function(n){e.showxyk=!0},e.e6=function(n){e.showyhkd=!0},e.e7=function(n){e.showsrzk=!0},e.e8=function(n){e.showset=!1},e.e9=function(n){e.showtime=!1},e.e10=function(n){e.showzmxyf=!1},e.e11=function(n){e.showgjj=!1},e.e12=function(n){e.showhb=!1},e.e13=function(n){e.showxyk=!1},e.e14=function(n){e.showyhkd=!1},e.e15=function(n){e.showsrzk=!1})},l=[]},"4d20":function(e,n,a){"use strict";(function(e){function a(e,n){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,n){if(!e)return;if("string"===typeof e)return o(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o(e,n)}(e))||n&&e&&"number"===typeof e.length){a&&(e=a);var t=0,l=function(){};return{s:l,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,r=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return s=e.done,e},e:function(e){r=!0,i=e},f:function(){try{s||null==a.return||a.return()}finally{if(r)throw i}}}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,o=new Array(n);a<n;a++)o[a]=e[a];return o}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{isshiming:"",text1:"请如实填写,资料填写越完整,通过率越高",model1:{userInfo:{setnum:"",settime:"",zhengx:"",zmxyf:"",gjjye:"",hbed:"",xyked:"",yhdked:"",gzdw:"",zyzk:"",srfs:"",srzk:"",hyzk:"",cdzk:"",zsxz:"",sbzk:""},val:{setnumval:"",settimeval:"",zhengxval:"",zmxyfval:"",gjjyeval:"",hbedval:"",xykedval:"",yhdkedval:"",srfsval:"",srzkval:"",hyzkval:"",cdzkval:"",zsxzval:"",sbzkval:""}},setlist:[{name:"0-10台",val:0},{name:"10-20台",val:1},{name:"20-30台",val:2},{name:"30台以上",val:3}],timelist:[{name:"一个月以内",val:0},{name:"1-3个月",val:1},{name:"3-6个月",val:2},{name:"6-12个月",val:3},{name:"12个月以上",val:4}],radiolist1:[{name:"良好",val:1,disabled:!1},{name:"违约",val:2,disabled:!1},{name:"黑户",val:3,disabled:!1}],radiovalue1:"",zmlist:[{name:"350-550分",val:1},{name:"550-600分",val:2},{name:"600-650分",val:3},{name:"650-700分",val:4},{name:"700-950分",val:5}],gjjlist:[{name:"无公积金",val:1},{name:"1万元以下",val:2},{name:"1-2万元",val:3},{name:"2-3万元",val:4},{name:"3-5万元",val:5},{name:"5万元以上",val:6}],hblist:[{name:"无花呗额度",val:1},{name:"1000元以下",val:2},{name:"1000-3000元",val:3},{name:"3000-5000元",val:4},{name:"5000-10000元",val:5},{name:"1万元以上",val:6}],xyklist:[{name:"无信用卡额度",val:1},{name:"5000元以下",val:2},{name:"5000-10000元",val:3},{name:"1-2万元",val:4},{name:"2-5万元",val:5},{name:"5万元以上",val:6}],yhlist:[{name:"无银行贷款额度",val:1},{name:"5000元以下",val:2},{name:"5000-10000元",val:3},{name:"1-2万元",val:4},{name:"2-5万元",val:5},{name:"5万元以上",val:6}],radiolist2:[{name:"银行转账",val:1,disabled:!1},{name:"支付宝/微信",val:2,disabled:!1},{name:"现金收账",val:3,disabled:!1}],radiovalue2:"",srlist:[{name:"1000元以下",val:1},{name:"1000-3000元",val:2},{name:"3000-5000元",val:3},{name:"5000-7000元",val:4},{name:"7000-9000元",val:5},{name:"9000-10000元",val:6},{name:"1-2万元",val:7},{name:"2-3万元",val:8},{name:"3万元以上",val:9}],radiovalue3:"",radiovalue4:"",radiovalue5:"",radiovalue6:"",radiolist3:[{name:"未婚",val:10,disabled:!1},{name:"已婚",val:20,disabled:!1},{name:"丧偶",val:30,disabled:!1},{name:"离异",val:40,disabled:!1},{name:"未知",val:99,disabled:!1}],radiolist4:[{name:"无车贷",val:1,disabled:!1},{name:"有车贷",val:2,disabled:!1}],radiolist5:[{name:"自置",val:1,disabled:!1},{name:"按揭",val:2,disabled:!1},{name:"亲属楼宇",val:3,disabled:!1},{name:"宿舍",val:4,disabled:!1},{name:"租房",val:5,disabled:!1},{name:"共有住宅",val:6,disabled:!1},{name:"借住",val:12,disabled:!1},{name:"未知",val:9,disabled:!1}],radiolist6:[{name:"无社保",val:1,disabled:!1},{name:"有社保",val:2,disabled:!1}],rules:{"userInfo.setnum":{type:"string",required:!0,message:"请选择设备台数",trigger:["blur","change"]},"userInfo.settime":{type:"string",required:!0,message:"请选择租赁时间",trigger:["blur","change"]},"userInfo.zhengx":{type:"string",required:!0,min:1,message:"请选择征信状态",trigger:["blur","change"]}},showset:!1,showtime:!1,show:!1,showzmxyf:!1,showgjj:!1,showhb:!1,showxyk:!1,showyhkd:!1,showsrzk:!1}},onLoad:function(){this.getData(),"无"!=this.model1.val.setnumval&&(this.show=!0)},methods:{submitForm:function(){console.log(this.model1.userInfo),e.showLoading({title:"提交中,请勿离开页面"}),this._post("user.user/realNameAuthentication",{zaizu:this.model1.userInfo.setnum,zaizutime:this.model1.userInfo.settime,zhengxin:this.model1.userInfo.zhengx,zmxinyongfen:this.model1.userInfo.zmxyf,gjjmoney:this.model1.userInfo.gjjye,huabei:this.model1.userInfo.hbed,creditCardLimit:this.model1.userInfo.xyked,bankLoanLimit:this.model1.userInfo.yhdked,cpnName:this.model1.userInfo.gzdw,zhiye:this.model1.userInfo.zyzk,incometype:this.model1.userInfo.srfs,income:this.model1.userInfo.srzk,marriStatus:this.model1.userInfo.hyzk,carLoan:this.model1.userInfo.cdzk,resiStatus:this.model1.userInfo.zsxz,shebao:this.model1.userInfo.sbzk,isshiming:1},(function(n){e.hideLoading(),1==n.code?(e.showToast({title:n.msg,duration:2e3}),e.navigateTo({url:"/pages/user/authentication"})):e.showToast({title:"提交失败,请重新提交或联系客服!!",duration:2e3})}))},getData:function(){var e=this;e._get("user.index/detail",{},(function(n){e.isshiming=n.data.userInfo.isshiming;var o,t=a(e.setlist);try{for(t.s();!(o=t.n()).done;){var l=o.value;l.val==n.data.userInfo.zaizu&&(e.model1.userInfo.setnum=l.val,e.model1.val.setnumval=l.name)}}catch(S){t.e(S)}finally{t.f()}var i,s=a(e.timelist);try{for(s.s();!(i=s.n()).done;){var r=i.value;r.val==n.data.userInfo.zaizutime&&(e.model1.userInfo.settime=r.val,e.model1.val.settimeval=r.name)}}catch(S){s.e(S)}finally{s.f()}n.data.userInfo.zhengxin&&(e.model1.userInfo.zhengx=n.data.userInfo.zhengxin,e.radiovalue1=n.data.userInfo.zhengxin);var u,d=a(e.zmlist);try{for(d.s();!(u=d.n()).done;){var m=u.value;m.val==n.data.userInfo.zmxinyongfen&&(e.model1.userInfo.zmxyf=m.val,e.model1.val.zmxyfval=m.name)}}catch(S){d.e(S)}finally{d.f()}var f,v=a(e.gjjlist);try{for(v.s();!(f=v.n()).done;){var c=f.value;c.val==n.data.userInfo.gjjmoney&&(e.model1.userInfo.gjjye=c.val,e.model1.val.gjjyeval=c.name)}}catch(S){v.e(S)}finally{v.f()}var h,y=a(e.hblist);try{for(y.s();!(h=y.n()).done;){var I=h.value;I.val==n.data.userInfo.huabei&&(e.model1.userInfo.hbed=I.val,e.model1.val.hbedval=I.name)}}catch(S){y.e(S)}finally{y.f()}var b,g=a(e.xyklist);try{for(g.s();!(b=g.n()).done;){var z=b.value;z.val==n.data.userInfo.creditCardLimit&&(e.model1.userInfo.xyked=z.val,e.model1.val.xykedval=z.name)}}catch(S){g.e(S)}finally{g.f()}var k,w=a(e.yhlist);try{for(w.s();!(k=w.n()).done;){var x=k.value;x.val==n.data.userInfo.bankLoanLimit&&(e.model1.userInfo.yhdked=x.val,e.model1.val.yhdkedval=x.name)}}catch(S){w.e(S)}finally{w.f()}n.data.userInfo.cpnName&&(e.model1.userInfo.gzdw=n.data.userInfo.cpnName),n.data.userInfo.zhiye&&(e.model1.userInfo.zyzk=n.data.userInfo.zhiye),n.data.userInfo.incometype&&(e.model1.userInfo.srfs=n.data.userInfo.incometype,e.radiovalue2=n.data.userInfo.incometype);var p,j=a(e.srlist);try{for(j.s();!(p=j.n()).done;){var _=p.value;_.val==n.data.userInfo.income&&(e.model1.userInfo.srzk=_.val,e.model1.val.srzkval=_.name)}}catch(S){j.e(S)}finally{j.f()}n.data.userInfo.marriStatus&&(e.model1.userInfo.hyzk=n.data.userInfo.marriStatus,e.radiovalue3=n.data.userInfo.marriStatus),n.data.userInfo.carLoan&&(e.model1.userInfo.cdzk=n.data.userInfo.carLoan,e.radiovalue4=n.data.userInfo.carLoan),n.data.userInfo.resiStatus&&(e.model1.userInfo.zsxz=n.data.userInfo.resiStatus,e.radiovalue5=n.data.userInfo.resiStatus),n.data.userInfo.shebao&&(e.model1.userInfo.sbzk=n.data.userInfo.shebao,e.radiovalue6=n.data.userInfo.shebao)}))},setSelect:function(e){console.log(e),this.model1.userInfo.setnum=e.val,this.model1.val.setnumval=e.name,this.$refs.form1.validateField("userInfo.setnum"),"无"!=this.model1.val.setnumval&&(this.show=!0)},timeSelect:function(e){this.model1.userInfo.settime=e.val,this.model1.val.settimeval=e.name,this.$refs.form1.validateField("userInfo.settime")},zmSelect:function(e){this.model1.userInfo.zmxyf=e.val,this.model1.val.zmxyfval=e.name,this.$refs.form1.validateField("userInfo.zmxyf")},gjjSelect:function(e){this.model1.userInfo.gjjye=e.val,this.model1.val.gjjyeval=e.name,this.$refs.form1.validateField("userInfo.gjjye")},hbSelect:function(e){this.model1.userInfo.hbed=e.val,this.model1.val.hbedval=e.name,this.$refs.form1.validateField("userInfo.hbed")},xykSelect:function(e){this.model1.userInfo.xyked=e.val,this.model1.val.xykedval=e.name,this.$refs.form1.validateField("userInfo.xyked")},yhkdSelect:function(e){this.model1.userInfo.yhdked=e.val,this.model1.val.yhdkedval=e.name,this.$refs.form1.validateField("userInfo.yhdked")},srzkSelect:function(e){this.model1.userInfo.srzk=e.val,this.model1.val.srzkval=e.name,this.$refs.form1.validateField("userInfo.srzk")},radioChange:function(e){console.log("radioChange",e),this.model1.userInfo.zhengx=e},radioChange2:function(e){console.log("radioChange",e),this.model1.userInfo.srfs=e},radioChange3:function(e){console.log("radioChange",e),this.model1.userInfo.hyzk=e},radioChange4:function(e){console.log("radioChange",e),this.model1.userInfo.cdzk=e},radioChange5:function(e){console.log("radioChange",e),this.model1.userInfo.zsxz=e},radioChange6:function(e){console.log("radioChange",e),this.model1.userInfo.sbzk=e}}};n.default=t}).call(this,a("c11b")["default"])},52907:function(e,n,a){"use strict";a.r(n);var o=a("4d20"),t=a.n(o);for(var l in o)["default"].indexOf(l)<0&&function(e){a.d(n,e,(function(){return o[e]}))}(l);n["default"]=t.a},7015:function(e,n,a){"use strict";var o=a("8010"),t=a.n(o);t.a},8010:function(e,n,a){},a48c:function(e,n,a){"use strict";a.r(n);var o=a("2133"),t=a("52907");for(var l in t)["default"].indexOf(l)<0&&function(e){a.d(n,e,(function(){return t[e]}))}(l);a("7015");var i=a("f0c5"),s=Object(i["a"])(t["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=s.exports},ba08:function(e,n,a){"use strict";(function(e){var n=a("4ea4");a("a8db"),a("33db"),a("5c17");n(a("66fd"));var o=n(a("a48c"));my.__webpack_require_UNI_MP_PLUGIN__=a,e(o.default)}).call(this,a("c11b")["createPage"])}},[["ba08","common/runtime","common/vendor"]]]);