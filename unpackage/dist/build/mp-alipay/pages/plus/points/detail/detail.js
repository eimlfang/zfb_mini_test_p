(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/plus/points/detail/detail"],{"03b2":function(t,e,i){"use strict";var a=i("bdb8"),c=i.n(a);c.a},"2dca":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},c=[]},b32c:function(t,e,i){"use strict";i.r(e);var a=i("2dca"),c=i("d093");for(var n in c)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return c[t]}))}(n);i("03b2");var o=i("f0c5"),s=Object(o["a"])(c["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=s.exports},bdb8:function(t,e,i){},d093:function(t,e,i){"use strict";i.r(e);var a=i("faa4"),c=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=c.a},f602:function(t,e,i){"use strict";(function(t){var e=i("4ea4");i("a8db"),i("33db"),i("5c17");e(i("66fd"));var a=e(i("b32c"));my.__webpack_require_UNI_MP_PLUGIN__=i,t(a.default)}).call(this,i("c11b")["createPage"])},faa4:function(t,e,i){"use strict";(function(t){var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=a(i("7610")),n={components:{Spec:function(){Promise.all([i.e("common/vendor"),i.e("pages/plus/points/detail/popup/Spec")]).then(function(){return resolve(i("d26b"))}.bind(null,i)).catch(i.oe)},Mpservice:function(){i.e("components/mpservice/Mpservice").then(function(){return resolve(i("6d76"))}.bind(null,i)).catch(i.oe)},guarantee:function(){i.e("components/guarantee").then(function(){return resolve(i("a464"))}.bind(null,i)).catch(i.oe)}},data:function(){return{phoneHeight:0,scrollviewHigh:0,loadding:!0,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,point_product_id:null,imagList:[],alreadyChioce:"",detail:{product_sku:{},show_sku:{product_price:"",product_sku_id:0,line_price:"",stock_num:0,sku_image:""},show_point_sku:{}},isPopup:!1,specData:null,productModel:{},productSku:[],isMpservice:!1,serverList:"",isguarantee:!1,shop_info:{},store_open:1}},onLoad:function(t){this.point_product_id=t.point_product_id},mounted:function(){this.getData()},methods:{getData:function(){var e=this,i=e.point_product_id;t.showLoading({title:"加载中"}),e._get("plus.points.product/detail",{point_product_id:i},(function(i){i.data.detail.product.content=c.default.format_content(i.data.detail.product.content),20==i.data.detail.product.spec_type&&e.initSpecData(i.data.detail.sku,i.data.specData),e.detail=i.data.detail,e.shop_info=i.data.detail.supplier,e.getServer(),e.loadding=!1,t.hideLoading()}))},getServer:function(){var t=[];this.detail.server&&(this.detail.server.forEach((function(e,i){t.push(e.name)})),this.serverList=t.join("·"))},closeGuarantee:function(){this.isguarantee=!1},showGuarantee:function(){this.isguarantee=!0},initSpecData:function(t,e){for(var i=this,a=0;a<t.length;a++){var c=t[a];if(c.productSku){var n=c.productSku.spec_sku_id.split("_").map(Number);this.productSku.push(n)}}for(var o in e.spec_attr)for(var s=0;s<e.spec_attr[o].spec_items.length;s++){var r=e.spec_attr[o].spec_items[s];this.hasSpec(r.item_id,o)?(r.checked=!1,r.disabled=!1):(e.spec_attr[o].spec_items.splice(s,1),s--)}this.specData=e,this.specData.spec_attr&&(this.specData.spec_attr.forEach((function(t){i.alreadyChioce+=t.group_name,i.alreadyChioce+=" / "})),this.alreadyChioce=this.alreadyChioce.replace(/(\s\/\s)$/gi,""))},hasSpec:function(t,e){for(var i=!1,a=0;a<this.productSku.length;a++){var c=this.productSku[a];if(c[e]==t){i=!0;break}}return i},openPopup:function(t){var e={specData:this.specData,detail:this.detail,productSpecArr:null!=this.specData?new Array(this.specData.spec_attr.length):[],show_sku:{sku_image:"",seckill_price:0,product_sku_id:0,line_price:0,seckill_stock:0,seckill_product_sku_id:0,sum:1},productSku:this.productSku,type:t};this.productModel=e,this.isPopup=!0},closePopup:function(t,e){if(this.isPopup=!1,console.log(t),t&&t.spec_attr){this.alreadyChioce="";var i="已选：",a="";t.spec_attr.forEach((function(t){if(t.spec_items){for(var e="",c=0;c<t.spec_items.length;c++){var n=t.spec_items[c];if(n.checked){e=n.spec_value+" / ";break}}""!=e?i+=e:a+=t.group_name}})),""!=a?this.alreadyChioce=a:(i=i.replace(/(\s\/\s)$/gi,""),this.alreadyChioce=i)}e&&(this.cart_total_num=e)},openMaservice:function(){this.isMpservice=!0},closeMpservice:function(){this.isMpservice=!1},goto_shop:function(){this.gotoPage("/pages/shop/shop?shop_supplier_id="+this.detail.supplier.shop_supplier_id)}}};e.default=n}).call(this,i("c11b")["default"])}},[["f602","common/runtime","common/vendor"]]]);