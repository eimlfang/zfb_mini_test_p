;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/plus/points/detail/popup/Spec"],{"81b3":function(t,s,o){"use strict";o.d(s,"b",(function(){return i})),o.d(s,"c",(function(){return r})),o.d(s,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},r=[]},"8e6c":function(t,s,o){"use strict";(function(t){var i=o("4ea4");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var r=i(o("7037")),e=o("0aea"),u={data:function(){return{Visible:!1,form:{detail:{product_sku:{},show_sku:{},show_point_sku:{point_price:0}},show_sku:{sum:1}},stock:0,selectSpec:"",isAll:!1,is_change:!1}},props:["isPopup","productModel"],onLoad:function(){},mounted:function(){},computed:{isadd:function(){return this.form.show_sku.sum>=this.stock||this.form.show_sku.sum>=this.form.detail.limit_num},issub:function(){return this.form.show_sku.sum<=1}},watch:{isPopup:function(t,s){var o=this;t!=s&&(this.Visible=t,this.isOpenSpec||(this.form=this.productModel,this.isOpenSpec=!0,this.initShowSku(),this.form.specData.spec_attr.forEach((function(t,s){o.selectAttr(s,0)}))),this.form.type=this.productModel.type,console.log(this.productModel))},"form.specData":{handler:function(t,s){var o=this,i="",r="";if(this.isAll=!0,t){for(var e=function(s){null==o.form.productSpecArr[s]?(o.isAll=!1,i+=t.spec_attr[s].group_name+" "):t.spec_attr[s].spec_items.forEach((function(t){o.form.productSpecArr[s]==t.item_id&&(r+='"'+t.spec_value+'" ')}))},u=0;u<t.spec_attr.length;u++)e(u);this.isAll?r="已选: "+r:i="请选择: "+i}this.selectSpec=this.isAll?r:i},deep:!0,immediate:!0}},methods:{closePopup:function(){this.$emit("close",this.form.specData,null)},confirmFunc:function(){null==this.form.specData||this.isAll?this.createdOrder():t.showToast({title:"请选择规格",icon:"none",duration:2e3})},initShowSku:function(){this.form.show_sku.sku_image=this.form.detail.product.image[0].file_path,this.form.show_sku.point_price=this.form.detail.point_price,this.form.show_sku.product_sku_id=0,this.form.show_sku.line_price=this.form.detail.line_price,this.form.show_sku.point_stock=this.form.detail.stock,this.form.show_sku.point_product_sku_id=0,this.form.show_sku.point_num=this.form.detail.sku[0].point_num,this.form.show_sku.point_money=this.form.detail.sku[0].point_money,this.form.show_sku.product_sku_id=0,this.stock=this.form.detail.stock},selectAttr:function(t,s){var o=this.form.specData.spec_attr[t].spec_items,i=o[s];if(i.checked)i.checked=!1,this.form.productSpecArr[t]=null;else{for(var r=0;r<o.length;r++)o[r].checked=!1;i.checked=!0,this.form.productSpecArr[t]=i.item_id}(0,e.judgeSelect)(this.form.specData.spec_attr,t,this.form.productSpecArr,this.form.productSku);for(var u=!0,c=0;c<this.form.productSpecArr.length;c++){var n=this.form.productSpecArr[c];if(null==n)return u=!1,void this.initShowSku()}u?this.updateSpecProduct():this.initShowSku()},updateSpecProduct:function(){var t=this.form.productSpecArr.join("_"),s=this.form.specData.spec_list,o=s.find((function(s){return s.spec_sku_id==t}));if("object"===(0,r.default)(o)){var i=this.form.detail.sku,e=i.find((function(t){return t.product_sku_id==o.product_sku_id}));console.log(e),this.stock=e.point_stock,this.form.show_sku.sum>this.stock&&(this.form.show_sku.sum=this.stock>0?this.stock:1),this.form.show_sku.line_price=o.spec_form.product_price,this.form.show_sku.product_sku_id=o.spec_sku_id,this.form.show_sku.point_price=e.point_price,this.form.show_sku.point_product_sku_id=e.point_product_sku_id,this.form.show_sku.point_stock=e.point_stock,o.spec_form.image_id>0?this.form.show_sku.sku_image=o.spec_form.image_path:this.form.show_sku.sku_image=this.form.detail.product.image[0].file_path}},createdOrder:function(){var t=this.form.detail.point_product_id,s=this.form.show_sku.sum,o=this.form.show_sku.product_sku_id,i=this.form.show_sku.point_product_sku_id;this.gotoPage("/pages/order/confirm-order?product_num="+s+"&point_product_id="+t+"&product_sku_id="+o+"&point_product_sku_id="+i+"&order_type=points")},add:function(){if(!(this.stock<=0))return this.form.show_sku.sum>=this.stock?(t.showToast({title:"数量超过了库存",icon:"none",duration:2e3}),!1):this.form.show_sku.sum>=this.form.detail.limit_num?(t.showToast({title:"数量超过了限购数量",icon:"none",duration:2e3}),!1):void this.form.show_sku.sum++},sub:function(){if(!(this.stock<=0))return this.form.show_sku.sum<2?(t.showToast({title:"商品数量至少为1",icon:"none",duration:2e3}),!1):void this.form.show_sku.sum--}}};s.default=u}).call(this,o("c11b")["default"])},"9abf":function(t,s,o){"use strict";o.r(s);var i=o("8e6c"),r=o.n(i);for(var e in i)["default"].indexOf(e)<0&&function(t){o.d(s,t,(function(){return i[t]}))}(e);s["default"]=r.a},cc26:function(t,s,o){},d26b:function(t,s,o){"use strict";o.r(s);var i=o("81b3"),r=o("9abf");for(var e in r)["default"].indexOf(e)<0&&function(t){o.d(s,t,(function(){return r[t]}))}(e);o("df14");var u=o("f0c5"),c=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);s["default"]=c.exports},df14:function(t,s,o){"use strict";var i=o("cc26"),r=o.n(i);r.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'pages/plus/points/detail/popup/Spec-create-component',
    {
        'pages/plus/points/detail/popup/Spec-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("d26b"))
        })
    },
    [['pages/plus/points/detail/popup/Spec-create-component']]
]);
