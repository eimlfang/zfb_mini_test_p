(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/order/confirm-order","components/uni-popup"],{"0397":function(t,e,o){"use strict";o.r(e);var i=o("df42"),n=o.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"0597":function(t,e,o){"use strict";o.r(e);var i=o("4276"),n=o.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},3364:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},n=[]},4276:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{show:{type:Boolean,default:!1},type:{type:String,default:"middle"},width:{type:Number,default:600},heigth:{type:Number,default:800},padding:{type:Number,default:30},backgroundColor:{type:String,default:"#ffffff"},boxShadow:{type:String,default:"0 0 30upx rgba(0, 0, 0, .1)"},msg:{type:String,default:""}},data:function(){return{offsetTop:0}},methods:{hide:function(){this.$emit("hidePopup")}}};e.default=i},5522:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return i}));var i={uIcon:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(o.bind(null,"1d9f"))},uPopup:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(o.bind(null,"a40d"))},"u-Textarea":function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u--textarea/u--textarea")]).then(o.bind(null,"e846"))},"u-Input":function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u--input/u--input")]).then(o.bind(null,"cb20"))},uButton:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-button/u-button")]).then(o.bind(null,"e804"))}},n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.loading?null:t.theme()||""),i=t.loading?null:t.theme(),n=t.loading?null:t.__map(t.ProductData,(function(e,o){var i=t.__get_orig(e),n=t.OrderData.is_use_points&&0==t.OrderData.force_points&&0!=t.OrderData.points_money?t.toDecimal2(t.OrderData.points_money):null;return{$orig:i,m2:n}}));t.$mp.data=Object.assign({},{$root:{m0:o,m1:i,l0:n}})},r=[]},"743f":function(t,e,o){"use strict";o.r(e);var i=o("3364"),n=o("0597");for(var r in n)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(r);o("8f36");var s=o("f0c5"),a=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=a.exports},"80eb":function(t,e,o){},8888:function(t,e,o){"use strict";(function(t){var e=o("4ea4");o("a8db"),o("33db"),o("5c17");e(o("66fd"));var i=e(o("c117"));my.__webpack_require_UNI_MP_PLUGIN__=o,t(i.default)}).call(this,o("c11b")["createPage"])},"8b7c":function(t,e,o){},"8f36":function(t,e,o){"use strict";var i=o("8b7c"),n=o.n(i);n.a},b0a9:function(t,e,o){"use strict";var i=o("80eb"),n=o.n(i);n.a},c117:function(t,e,o){"use strict";o.r(e);var i=o("5522"),n=o("0397");for(var r in n)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(r);o("b0a9");var s=o("f0c5"),a=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=a.exports},df42:function(t,e,o){"use strict";(function(t){var i=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(o("2eee")),r=i(o("9523")),s=i(o("c973"));i(o("743f")),o("5804");function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){(0,r.default)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var d={components:{Myinfo:function(){o.e("pages/order/confirm-order/my-info").then(function(){return resolve(o("4f4a"))}.bind(null,o)).catch(o.oe)},Coupon:function(){o.e("pages/order/confirm-order/coupon").then(function(){return resolve(o("588c"))}.bind(null,o)).catch(o.oe)},Dist:function(){o.e("pages/order/confirm-order/distr").then(function(){return resolve(o("a301"))}.bind(null,o)).catch(o.oe)}},data:function(){return{zfshow:0,tokendata:"",suiping:!1,buy_out_price:"",lease_type:"",order_total_price:"",realVal:"",order_total_num:"",zmshow1:"",ddids:"",value1:"",value2:"",showdd:!1,show1:!1,show2:!1,res:"",loading:!1,options:{},indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,product_id:"",product_num:"",ProductData:[],OrderData:[],exist_address:!1,Address:{region:[]},extract_store:[],last_extract:{},product_sku_id:0,delivery:10,store_id:0,coupon_id:-1,is_use_points:1,remark:"",pay_type:20,isCoupon:!1,coupon_list:{},couponList:[],coupon_num:0,isDist:!1,temlIds:[],product_couponid:0,chooseSotr:0,deliverySetting:[],choose_delivery:10,store_data:{},choose_store_id:0,store_list:{},room_id:"",showAlipay:!1,balance:"",store_open:1,isgreed:!1,lease_time:{},start_time:"",end_time:"",states2:"",time2:"",time3:"",time4:"",time5:"",time6:"",time7:"",time8:"",time9:"",time10:"",time11:"",time12:"",listdata:""}},onLoad:function(e){console.log("options",e);var o=this;o.zmshow1=e.zmshow,o.tokendata=t.getStorageSync("token");var i=parseInt((new Date).getTime()/1e3)+"";i=parseInt(i)+259200;var n=i+31536e3;n=o.getNowTime(n),o.end_time=n;var r=i+2592e3;r=o.getNowTime(r),o.time2=r;var s=i+5184e3;s=o.getNowTime(s),o.time3=s;var a=i+7776e3;a=o.getNowTime(a),o.time4=a;var u=i+10368e3;u=o.getNowTime(u),o.time5=u;var d=i+1296e4;d=o.getNowTime(d),o.time6=d;var c=i+15552e3;c=o.getNowTime(c),o.time7=c;var p=i+18144e3;p=o.getNowTime(p),o.time8=p;var l=i+20736e3;l=o.getNowTime(l),o.time9=l;var _=i+23328e3;_=o.getNowTime(_),o.time10=_;var f=i+2592e4;f=o.getNowTime(f),o.time11=f;var m=i+28512e3;m=o.getNowTime(m),o.time12=m,i=o.getNowTime(i),o.start_time=i,o.options=e,o.room_id=e.room_id?e.room_id:0,o.$fire.on("selectStoreId",(function(t){o.extract_store=t,o.choose_store_id=t.store_id})),o.$fire.on("checkedfir",(function(t){o.choose_delivery=t}))},onShow:function(){this.getData()},mounted:function(){},methods:{onGetAuthorize1:function(){var e=this;return(0,s.default)(n.default.mark((function o(){return n.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:my.getAuthCode({scopes:["auth_base"],success:function(o){my.getPhoneNumber({success:function(i){var n=i.response;n=JSON.parse(n);var r=n.response;e._post("user.usermp/mnpAlipayAuthLogin",{code:o.authCode,content:r},(function(o){t.setStorageSync("token",o.data.data.token),t.setStorageSync("user_id",o.data.data.user_id),t.showToast({title:"登录成功"}),e.tokendata=1,e.getData()}))},fail:function(t){console.log("失败"),reject(t)}})}});case 1:case"end":return o.stop()}}),o)})))()},getAlipayUserInfo:function(){return new Promise((function(t,e){my.getOpenUserInfo({success:function(e){var o=JSON.parse(e.response);t(o),console.log("成功")},fail:function(t){console.log("失败"),e(t)}})}))},onAuthError:function(){t.showModal({title:"提示",content:"取消授权，可能导致服务无法使用，或者页面显示不完整",success:function(t){t.confirm?console.log("取消授权"):console.log("重新授权")}})},youhui:function(){this.show1=!0},open1:function(){},close1:function(){this.show1=!1},huankuan:function(){this.show2=!0},open2:function(){},close2:function(){this.show2=!1},getLocalTime:function(t){return new Date(1e3*parseInt(t)).toLocaleString().substr(0,10)},getNowTime:function(t){if(""!==t&&void 0!==t&&null!=t){t=1e3*parseInt(t),t=new Date(t);var e=t.getFullYear(),o=t.getMonth()+1;o=o<10?"0"+o:o;var i=t.getDate();return i=i<10?"0"+i:i,e+"-"+o+"-"+i}return""},fuwu:function(){console.log("服务"),t.navigateTo({url:"/pages/hetong/index"})},ysi:function(){console.log("隐私"),t.navigateTo({url:"/pages/hetong/yszc"})},init:function(){var t="",e="",o=this;o.ProductData.forEach((function(i,n){t=i.shop_supplier_id,e={coupon_id:i.orderData.coupon_id,delivery:i.orderData.delivery,store_id:0,remark:""},o.store_data=u(u({},o.store_data),{},(0,r.default)({},t,e))})),console.log(o.ProductData,":ProductDataProductData")},submit:function(){document.forms["alipaysubmit"].submit()},hasType:function(t){return-1!=this.deliverySetting.indexOf(t)},payTypeFunc:function(t){this.pay_type=t},onShowPoints:function(t){1==t.target.value?this.is_use_points=1:this.is_use_points=0,this.getData()},SubSheneh:function(){},onTogglePopupCoupon:function(t,e){this.chooseSotr=0!=e?e.shop_supplier_id:0,this.isCoupon=!0,this.couponList=t},closeCouponFunc:function(t){if(t&&"number"!=typeof t)this.isCoupon=!1;else{if(0!=this.chooseSotr){var e=this.chooseSotr;this.store_data[e].coupon_id=t>0?t:0,this.chooseSotr=0}else this.coupon_id=t>0?t:0;this.isCoupon=!1,this.getData()}},radioChange:function(t){this.isgreed=Boolean(t.detail.value)},getData:function(){var t=this,e=function(e){var o=e.data.orderInfo.supplierList[0].productList[0].product_sku.product_attr;-1!=o.indexOf("不")?t.suiping=!1:t.suiping=!0,t.buy_out_price=e.data.orderInfo.supplierList[0].productList[0].product_sku.buy_out_price,t.lease_type=e.data.orderInfo.lease_time.lease_type,t.OrderData=e.data.orderInfo.orderData,t.lease_time=e.data.orderInfo.lease_time,t.order_total_num=e.data.orderInfo.orderData.order_total_num,t.total_amount=e.data.orderInfo.lease_time.total_amount;var i=t.order_total_num*t.total_amount,n=parseFloat(i).toFixed(2);t.realVal=n,t.order_total_price=e.data.orderInfo.orderData.order_total_price,t.temlIds=e.data.template_arr,t.exist_address=t.OrderData.exist_address,t.Address=t.OrderData.address,t.last_extract=t.OrderData.last_extract,t.ProductData=e.data.orderInfo.supplierList,t.coupon_list=t.OrderData.coupon_list,t.coupon_id=t.OrderData.coupon_id_sys,t.coupon_num=Object.keys(t.coupon_list).length,t.balance=e.data.balance,0==t.OrderData.order_pay_price&&(t.pay_type=10),"{}"==JSON.stringify(t.store_data)&&t.init(),e.data.show_alipay&&(t.showAlipay=!0),t.loading=!1},o={delivery:t.delivery,store_id:t.store_id,coupon_id:t.coupon_id,is_use_points:t.is_use_points,pay_source:t.getPlatform(),address:{name:t.states2.fullname,phone:t.states2.mobilePhone,province:t.states2.prov,city:t.states2.city,region:t.states2.area,detail:t.states2.address}};o="{}"==JSON.stringify(t.store_data)?o:u(u({},o),{},{supplier:t.store_data}),"buy"===t.options.order_type?t._get("order.order/buy",{params:JSON.stringify(Object.assign({},o,{product_id:t.options.product_id,product_num:t.options.product_num,product_sku_id:t.options.product_sku_id}))},(function(t){e(t)})):"cart"===t.options.order_type?t._get("order.order/cart",{params:JSON.stringify(Object.assign({},o,{cart_ids:t.options.cart_ids||0}))},(function(t){e(t)})):"points"==t.options.order_type?t._get("plus.points.order/buy",{params:JSON.stringify(Object.assign({},o,{point_product_id:t.options.point_product_id,product_sku_id:t.options.product_sku_id,point_product_sku_id:t.options.point_product_sku_id,product_num:t.options.product_num}))},(function(t){e(t)})):"seckill"===t.options.order_type?(o.num=t.options.num,t._get("plus.seckill.order/buy",{params:JSON.stringify(Object.assign({},o,{seckill_product_id:t.options.seckill_product_id,product_sku_id:t.options.product_sku_id,seckill_product_sku_id:t.options.seckill_product_sku_id,product_num:t.options.product_num}))},(function(t){e(t)}))):"bargain"===t.options.order_type?t._get("plus.bargain.order/buy",{params:JSON.stringify(Object.assign({},o,{bargain_product_id:t.options.bargain_product_id,product_sku_id:t.options.product_sku_id,bargain_product_sku_id:t.options.bargain_product_sku_id,bargain_task_id:t.options.bargain_task_id}))},(function(t){e(t)})):"assemble"===t.options.order_type&&t._get("plus.assemble.order/buy",{params:JSON.stringify(Object.assign({},o,{assemble_product_id:t.options.assemble_product_id,product_sku_id:t.options.product_sku_id,assemble_product_sku_id:t.options.assemble_product_sku_id,product_num:t.options.product_num,assemble_bill_id:t.options.assemble_bill_id}))},(function(t){e(t)}))},toDecimal2:function(t){var e=parseFloat(t);if(isNaN(e))return"0.00";e=Math.round(100*t);var o=Math.round(1e3*t),i=o.toString().split("");i=i[i.length-1],i>=5?e=(e-1)/100:e/=100;var n=e.toString(),r=n.indexOf(".");r<0&&(r=n.length,n+=".");while(n.length<=r+2)n+="0";return n},DistUp:function(t){this.store_id=t.shop_supplier_id,this.chooseSotr=t.shop_supplier_id;this.chooseSotr;this.getData(),this.deliverySetting=t.orderData.deliverySetting,this.extract_store=t.orderData.extract_store,this.isDist=!0},closeDistFunc:function(t){if(this.isDist=!1,this.extract_store.region){var e=this.chooseSotr,o=this.choose_store_id,i=this.extract_store.region.province+this.extract_store.region.city+this.extract_store.region.region+this.extract_store.store_name;this.delivery=this.choose_delivery,this.store_id=e,this.store_data[e].store_id=o,this.store_data[e].delivery=this.choose_delivery,this.store_list[e]=i,this.chooseSotr=0,this.getData()}},objKeys:function(t,e){if(t)return 1==e?Object.keys(t).length:Object.keys(t)},changestates:function(t){this.states2=t},close:function(){this.showdd=!1},getinfo:function(){var t=this;t._get("user.index/setting",{},(function(e){t.value1=e.data.userInfo.username,t.value2=e.data.userInfo.usernum}))},queding:function(){var e=this;0!=t.$u.test.idCard(e.value2)?""!=e.value1?e._post("user.user/realNameAuthentication",{username:e.value1,usernum:e.value2},(function(t){e.SubmitOrder()})):t.showToast({title:"姓名不能为空！",duration:2e3,icon:"none"}):t.showToast({title:"身份证号码有误,请重填！",duration:2e3,icon:"none"})},tzxs:function(){if(t.showLoading({title:"加载中"}),!this.states2)return t.showModal({title:"提示",content:"未选择地址，请选择地址重试 ~ ~",showCancel:!1,confirmText:"确定"}),void t.hideLoading();var e=this;e.getinfo();var o={pay_type:e.pay_type,room_id:e.room_id,coupon_id:e.coupon_id,is_use_points:e.is_use_points,address:{name:e.states2.fullname,phone:e.states2.mobilePhone,province:e.states2.prov,city:e.states2.city,region:e.states2.area,detail:e.states2.address}};o=Object.assign(o,{supplier:e.store_data}),"buy"===e.options.order_type&&(this.zfshow=1,e._post("/order.order/buy",{params:JSON.stringify(Object.assign({},o,{product_id:e.options.product_id,product_num:e.options.product_num,product_sku_id:e.options.product_sku_id,room_id:e.options.room_id||0}))},(function(o){e.ddids=encodeURIComponent(o.data.order_id.join(",")),t.hideLoading(),t.showToast({title:"订单提交成功！",duration:1e3,position:200}),setTimeout((function(){e.showdd=!0}),1e3)})))},SubmitOrder:function(){var e=this;t.showLoading({title:"加载中",mask:!0});var o={pay_type:e.pay_type,room_id:e.room_id,coupon_id:e.coupon_id,is_use_points:e.is_use_points,address:{name:e.states2.fullname,phone:e.states2.mobilePhone,province:e.states2.prov,city:e.states2.city,region:e.states2.area,detail:e.states2.address}};o=Object.assign(o,{supplier:e.store_data}),e._post("/order.order/pay",{order_id:e.ddids},(function(o){t.hideLoading(),my.tradePay({orderStr:o.data,success:function(o){"4"==o.resultCode?t.showToast({title:"无权限调用 (N22104)",icon:"none"}):"9000"==o.resultCode?e._post("order.authentication/authentication",{order_id:e.ddids,name:e.value1,idno:e.value2},(function(t){console.log(t,"人脸"),my.ap.openURL({url:t.data.authUrl,success:function(t){console.log("openURL success")},fail:function(t){return my.alert({title:"openURL fail: "+JSON.stringify(t)})}})}),(function(t){})):"8000"==o.resultCode?t.showToast({title:"正在处理中。支付结果未知",icon:"none"}):"4000"==o.resultCode?t.showToast({title:"订单处理失败",icon:"none"}):"6001"==o.resultCode?t.navigateTo({url:"/pages/order/bnmy"}):"6002"==o.resultCode?t.showToast({title:"网络连接出错",icon:"none"}):"6004"==o.resultCode&&t.showToast({title:"处理结果未知",icon:"none"})},fail:function(o){t.showToast({title:"支付失败！",icon:"none"}),t.navigateTo({url:"/pages/order/order-detail?order_id="+e.ddids})}})}))}}};e.default=d}).call(this,o("c11b")["default"])}},[["8888","common/runtime","common/vendor"]]]);