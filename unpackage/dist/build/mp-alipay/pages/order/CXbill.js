(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/order/CXbill"],{1589:function(e,t,r){"use strict";r.r(t);var i=r("5290"),a=r.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},5290:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r("5804"),a={data:function(){return{xzf:"",qurzshow:!0,timer:null,suiping:!1,payable:"",priceJg:"",checkboxValue1:[],checkboxList1:[{name:"押金过高",disabled:!1},{name:"更改订单信息",disabled:!1},{name:"预收押金/补押金",disabled:!1},{name:"审核时间过长",disabled:!1},{name:"商家没货/服务态度问题",disabled:!1},{name:"运费问题",disabled:!1}],showqx:!1,priceWF:"",start_time:"",end_time:"",buyOutPricedata:"",hasrenzheng_id:"",portrait:"",numTitol:"",loadding:!0,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,isPayPopup:!1,order_id:0,orderBill:[],detail:{order_status:[],address:{region:[]},product:[],pay_type:[],delivery_type:[],pay_status:[],buyOutPrice:""},extractStore:{},source:"user",service_open:0,service_type:10,isMpservice:!1,showAlipay:!1,user_id:0,expressList:[],express_id:"",express_name:"",express_no:"",status:1,cancel_refuse:"",pay_type:10}},components:{Popup:function(){r.e("components/uni-popup").then(function(){return resolve(r("743f"))}.bind(null,r)).catch(r.oe)},Mpservice:function(){r.e("components/mpservice/Mpservice").then(function(){return resolve(r("6d76"))}.bind(null,r)).catch(r.oe)}},filters:{formatDate:function(e){var t=new Date(1e3*e),r=t.getFullYear(),i=t.getMonth()+1;i=i<10?"0"+i:i;var a=t.getDate();a=a<10?"0"+a:a;var o=t.getHours();o=o<10?"0"+o:o;var n=t.getMinutes();n=n<10?"0"+n:n;var d=t.getSeconds();return d=d<10?"0"+d:d,r+"-"+i+"-"+a}},onLoad:function(t){this.order_id=t.order_id,this.user_id=e.getStorageSync("user_id"),t.source&&(this.source=t.source)},mounted:function(){e.showLoading({title:"加载中"}),this.getData()},onShow:function(){},methods:{close:function(){this.showqx=!1},fuzhi:function(t){console.log(t),e.setClipboardData({data:t,success:function(){e.showToast({title:"复制成功",icon:"none"})}})},qrz:function(t){e.navigateTo({url:"/pages/order/smrz?order_id="+t})},payyj:function(t){console.log(t);this._post("/order.order/pay",{order_id:t},(function(r){console.log(r,"res"),my.tradePay({orderStr:r.data,success:function(r){e.navigateTo({url:"/pages/order/order-detail?order_id="+t})},fail:function(t){e.showToast({title:"支付失败！",icon:"none"})}})}))},getData:function(){var t=this,r=t.order_id,i="user.order/detail";"supplier"==this.source&&(i="supplier.order/detail"),t._get(i,{order_id:r,pay_source:t.getPlatform()},(function(i){var a=0;i.data.order.hasrenzheng_id&&(a<10?t.timer=setInterval((function(){a+=1,a>3&&(clearInterval(t.timer),t.timer=null),t._post("order.authentication/queryAuthentication",{hasrenzheng_id:i.data.order.hasrenzheng_id},(function(e){1==e.code&&(clearInterval(t.timer),t.timer=null,t.qurzshow=!1)}))}),1e3):(clearInterval(t.timer),t.timer=null)),t.portrait=i.data.order.portrait,t.hasrenzheng_id=i.data.order.hasrenzheng_id,""==t.portrait&&""!=t.hasrenzheng_id&&t._post("order.authentication/queryAttestation",{flowid:t.hasrenzheng_id,order_id:r},(function(r){t.loading=!1,e.hideLoading()})),t.expressList=i.data.expressList,t.detail=i.data.order,console.log("detail",t.detail.product[0].product_attr);var o=t.detail.product[0].product_attr;-1!=o.indexOf("不")?(console.log("存在"),t.suiping=!1):t.suiping=!0,t.detail.buyOutPrice=i.data.buyOutPrice,t.start_time=t.detail.create_time;var n=t.detail.create_time;-1!=n.indexOf("2023")&&(t.end_time=n.replace(/2023/,"2024")),t.orderBill=i.data.orderBill,t.extractStore=i.data.order.extractStore,t.service_open=i.data.setting.service_open,console.log(i.data.order.deposit,i.data.order.yushou,i.data.order.zhuanzujin,"开始3");var d=i.data.order.yushou,u=i.data.order.deposit,s=i.data.order.zhuanzujin,c=i.data.buyOutPrice;""==i.data.order.maiduan_no&&(c=0),2!=i.data.order.is_yushou&&(d=0),""==i.data.order.auth_no&&(u=0);Number(s),Number(u);for(var l=Number(u)+Number(d)+Number(s),p=i.data.orderBill,_=0,f=0,m=0,h=0,g=0;g<p.length;g++)h=Number(h)+Number(p[g].price),1==p[g].is_pay_status&&(_=Number(_)+Number(p[g].price),null!=p[g].transaction_id&&(m=Number(m)+Number(p[g].price),console.log(p[g].transaction_id,"orderBill[i].transaction_id "))),0==p[g].is_pay_status&&(f=Number(f)+Number(p[g].price)),0!=p[g].is_pay_status&&2!=p[g].is_pay_status||(g>=1&&1!=p[g-1].is_pay_status?p[g].xxx=!1:p[g].xxx=!0);t.xzf=Number(h-_).toFixed(2),t.priceWF=f.toFixed(2),t.numTitol=(Number(l)+Number(_)+Number(c)).toFixed(2),-1!=o.indexOf("不")?t.priceJg=Number(_).toFixed(2):2==t.detail.is_yushou?t.priceJg=Number(_+365).toFixed(2):t.priceJg=Number(_).toFixed(2),t.detail.total_price=(Number(t.detail.total_price)-Number(u)-Number(s)).toFixed(2),null==i.data.setting.mp_service?t.service_type=10:t.service_type=i.data.setting.mp_service.service_type,i.data.show_alipay&&(t.showAlipay=!0),t.loadding=!1,e.hideLoading()}))},returned:function(t){e.navigateTo({url:"./returned?order_id="+t})},submit:function(t){var r=this;r.loading=!0,e.showLoading({title:"加载中"}),r._post("/user.order/billPay",{bill_id:t},(function(t){r.loading=!1,e.hideLoading(),(0,i.pay)(t,r,r.paySuccess,r.payError)}))},maiduan:function(t){var r=this;r.loading=!0,e.showLoading({title:"加载中"}),r._post("/order.order/buyOut",{order_id:t},(function(t){r.loading=!1,e.hideLoading(),(0,i.pay)(t,r,r.paySuccess,r.payError)}))},hidePopupFunc:function(){this.isPayPopup=!1},earlyTermination:function(t){var r=this;e.showLoading({title:"正在加载"}),this._post("/order.order/earlyEnd",{order_id:t},(function(t){if(e.hideLoading(),124==t.code)return console.log("成功"),e.showToast({title:t.msg,icon:"none"}),void setTimeout((function(){e.navigateBack({delta:1})}),700);(0,i.pay)(t,r)}))},payTypeFunc:function(t){var r=this,a=r.order_id;r.isPayPopup=!1,e.showLoading({title:"加载中"}),r._post("user.order/pay",{payType:t,order_id:a,pay_source:r.getPlatform()},(function(t){e.hideLoading(),(0,i.pay)(t,r)}))}}};t.default=a}).call(this,r("c11b")["default"])},"88c6":function(e,t,r){},"98c4":function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,r=(e._self._c,e.loadding?null:e.theme()),i=e.loadding?null:e.theme(),a=e.loadding||10!=e.detail.order_status.value?null:e.__map(e.orderBill,(function(t,r){var i=e.__get_orig(t),a=e._f("formatDate")(t.repayment_date);return{$orig:i,f0:a}})),o=e.loadding||10!=e.detail.order_status.value?null:(e.detail.pay_price-e.detail.deposit-e.detail.zhuanzujin).toFixed(2);e.$mp.data=Object.assign({},{$root:{m0:r,m1:i,l0:a,g0:o}})},a=[]},d599:function(e,t,r){"use strict";(function(e){var t=r("4ea4");r("a8db"),r("33db"),r("5c17");t(r("66fd"));var i=t(r("eeea"));my.__webpack_require_UNI_MP_PLUGIN__=r,e(i.default)}).call(this,r("c11b")["createPage"])},ed10:function(e,t,r){"use strict";var i=r("88c6"),a=r.n(i);a.a},eeea:function(e,t,r){"use strict";r.r(t);var i=r("98c4"),a=r("1589");for(var o in a)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(o);r("ed10");var n=r("f0c5"),d=Object(n["a"])(a["default"],i["b"],i["c"],!1,null,"0770b195",null,!1,i["a"],void 0);t["default"]=d.exports}},[["d599","common/runtime","common/vendor"]]]);