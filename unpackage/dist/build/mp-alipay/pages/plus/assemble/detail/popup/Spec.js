;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/plus/assemble/detail/popup/Spec"],{"3cd2":function(s,t,i){"use strict";i.r(t);var o=i("3dde"),e=i("8a78");for(var r in e)["default"].indexOf(r)<0&&function(s){i.d(t,s,(function(){return e[s]}))}(r);i("a536");var u=i("f0c5"),c=Object(u["a"])(e["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=c.exports},"3dde":function(s,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return e})),i.d(t,"a",(function(){}));var o=function(){var s=this.$createElement;this._self._c},e=[]},"8a78":function(s,t,i){"use strict";i.r(t);var o=i("cfbf"),e=i.n(o);for(var r in o)["default"].indexOf(r)<0&&function(s){i.d(t,s,(function(){return o[s]}))}(r);t["default"]=e.a},a536:function(s,t,i){"use strict";var o=i("e4d1"),e=i.n(o);e.a},cfbf:function(s,t,i){"use strict";(function(s){var o=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o(i("7037")),r=i("0aea"),u={data:function(){return{Visible:!1,form:{detail:{product_sku:{},show_sku:{},show_point_sku:{assemble_price:0}},show_sku:{sum:1}},stock:0,selectSpec:"",isAll:!1}},props:["isPopup","productModel"],onLoad:function(){},mounted:function(){},computed:{isadd:function(){return this.form.show_sku.sum>=this.stock||this.form.show_sku.sum>=this.form.detail.limit_num},issub:function(){return this.form.show_sku.sum<=1}},watch:{isPopup:function(s,t){var i=this;s!=t&&(this.Visible=s,this.isOpenSpec||(this.form=this.productModel,this.isOpenSpec=!0,this.initShowSku(),this.form.specData.spec_attr.forEach((function(s,t){i.selectAttr(t,0)}))),this.form.type=this.productModel.type)},"form.specData":{handler:function(s,t){var i=this,o="",e="";if(this.isAll=!0,s){for(var r=function(t){null==i.form.productSpecArr[t]?(i.isAll=!1,o+=s.spec_attr[t].group_name+" "):s.spec_attr[t].spec_items.forEach((function(s){i.form.productSpecArr[t]==s.item_id&&(e+='"'+s.spec_value+'" ')}))},u=0;u<s.spec_attr.length;u++)r(u);this.isAll?e="已选: "+e:o="请选择: "+o}this.selectSpec=this.isAll?e:o},deep:!0,immediate:!0}},methods:{closePopup:function(){this.$emit("close",this.form.specData,null)},confirmFunc:function(){null==this.form.specData||this.isAll?(this.$emit("confirm"),this.createdOrder()):s.showToast({title:"请选择规格",icon:"none",duration:2e3})},initShowSku:function(){this.form.show_sku.sku_image=this.form.detail.product.image[0].file_path,this.form.show_sku.assemble_price=this.form.detail.assemble_price,this.form.show_sku.product_sku_id=0,this.form.show_sku.line_price=this.form.detail.line_price,this.form.show_sku.assemble_stock=this.form.detail.stock,this.form.show_sku.assemble_product_sku_id=0,this.form.show_sku.sum=1,this.stock=this.form.detail.stock,console.log(this.form.specData.spec_attr)},selectAttr:function(s,t){var i=this.form.specData.spec_attr[s].spec_items,o=i[t];if(o.checked)o.checked=!1,this.form.productSpecArr[s]=null;else{for(var e=0;e<i.length;e++)i[e].checked=!1;o.checked=!0,this.form.productSpecArr[s]=o.item_id}(0,r.judgeSelect)(this.form.specData.spec_attr,s,this.form.productSpecArr,this.form.productSku);for(var u=!0,c=0;c<this.form.productSpecArr.length;c++){var n=this.form.productSpecArr[c];if(null==n)return u=!1,void this.initShowSku()}u?this.updateSpecProduct():this.initShowSku()},updateSpecProduct:function(){var s=this.form.productSpecArr.join("_"),t=this.form.specData.spec_list,i=t.find((function(t){return t.spec_sku_id==s}));if("object"===(0,e.default)(i)){var o=this.form.detail.assembleSku,r=o.find((function(s){return s.product_sku_id==i.product_sku_id}));this.stock=r.assemble_stock,this.form.show_sku.sum>this.stock&&(this.form.show_sku.sum=this.stock>0?this.stock:1),this.form.show_sku.product_sku_id=i.spec_sku_id,this.form.show_sku.assemble_price=r.assemble_price,this.form.show_sku.line_price=i.spec_form.product_price,this.form.show_sku.assemble_stock=r.assemble_stock,this.form.show_sku.assemble_product_sku_id=r.assemble_product_sku_id,i.spec_form.image_id>0?this.form.show_sku.sku_image=i.spec_form.image_path:this.form.show_sku.sku_image=this.form.detail.product.image[0].file_path}},createdOrder:function(){var s=this.form.detail.assemble_product_id,t=this.form.show_sku.sum,i=this.form.show_sku.product_sku_id,o=this.form.show_sku.assemble_product_sku_id;this.gotoPage("/pages/order/confirm-order?product_num="+t+"&assemble_product_id="+s+"&product_sku_id="+i+"&assemble_product_sku_id="+o+"&assemble_bill_id="+this.form.show_sku.assemble_bill_id+"&order_type=assemble")},add:function(){if(!(this.stock<=0))return this.form.show_sku.sum>=this.stock?(s.showToast({title:"数量超过了库存",icon:"none",duration:2e3}),!1):this.form.show_sku.sum>=this.form.detail.limit_num?(s.showToast({title:"数量超过了限购数量",icon:"none",duration:2e3}),!1):void this.form.show_sku.sum++},sub:function(){if(!(this.stock<=0))return this.form.show_sku.sum<2?(s.showToast({title:"商品数量至少为1",icon:"none",duration:2e3}),!1):void this.form.show_sku.sum--}}};t.default=u}).call(this,i("c11b")["default"])},e4d1:function(s,t,i){}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'pages/plus/assemble/detail/popup/Spec-create-component',
    {
        'pages/plus/assemble/detail/popup/Spec-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("3cd2"))
        })
    },
    [['pages/plus/assemble/detail/popup/Spec-create-component']]
]);