<template>
	<view :data-theme='theme()' :class="'order-datail pb100 ' + theme()">
		 <!-- v-if="loadding" -->
		<!--详情状态-->
		<block v-if="tokendata1">
		<view class="order-state d-s-c">
			<view class="icon-box">
				<span v-if="detail.state_text == '已付款，待发货'" class="icon iconfont icon-icon"></span>
				<span v-if="detail.state_text == '待付款'" class="icon iconfont icon-icon"></span>
				<span v-if="detail.state_text == '已发货，待收货'" class="icon iconfont icon-daishouhuo"></span>
				<span v-if="detail.state_text == '已完成'" class="icon iconfont icon-xuanze"></span>
				<span v-if="detail.state_text == '已取消'" class="icon iconfont icon-gantanhao"></span>
			</view>
			<view class="state-cont flex-1">
				<view class="state-txt d-b-c">
					<text class="desc f34">{{ detail.state_text }}</text>
				</view>
				<!-- <view class="status-price pt10" v-if="detail.pay_status.value == 10">应付金额：¥ {{ detail.pay_price }}
				</view> -->
				<view class="countdown-datetime" v-if="detail.pay_end_time">
					<text>剩{{detail.pay_end_time}}自动关闭</text>
				</view>
			</view>
			<view class="dot-bg"></view>
		</view>

		<!--物流地址-->
		<view class="order-express p30 d-s-c" v-if="detail.delivery_type.value == 10">
			<view class="icon-box">
				<image style="width: 42rpx;height: 42rpx;" src="../../static/icon/address_icon.png" mode="widthFix">
				</image>
			</view>
			<view class="cont-text flex-1 o-h ml20 f30">
				<view class="express-text f32">{{ detail.address.name }}<text class="f26 gray9">
						{{ detail.address.phone }}</text></view>
				<view class="gray3 f26 pt10">
					{{ detail.address.region.province }}{{ detail.address.region.city }}{{ detail.address.region.region }}{{ detail.address.detail }}
				</view>
			</view>
			<view class="icon iconfont icon-jiantou"></view>
		</view>
		<!-- 上门自提：自提门店 -->
		<view class="order-express p30 d-s-s" v-if="detail.delivery_type.value == 20">
			<view class="flow-delivery__title m-top20"><span class="icon iconfont icon-dizhi1">自提门店</span></view>
			<view class="cont-text flex-1 o-h ml20 f30">
				<view class="express-text">
					{{ extractStore.store_name }} {{ extractStore.phone }}
					<view class="f24 gray9 pt10">
						{{ extractStore.region.province }} {{ extractStore.region.city }}
						{{ extractStore.region.region }} {{ extractStore.address }}
					</view>
				</view>
			</view>
		</view>


		<!-- 物流信息 -->
		<view class="group bg-white"
			v-if="(detail.delivery_type.value == 10 && detail.delivery_status.value == 20) && detail.order_status.value != 30 &&detail.order_status.value != 31 && detail.order_status.value != 32 && detail.order_status.value != 11 && detail.order_status.value != 12"
			@click="gotoExpress(detail.order_id)">
			<view class="d-b-c">
				<view class="f28">
					<view class="p-20-0">
						<text class="gray9">物流公司：</text>
						<text>{{ detail.express.express_name }}</text>
					</view>
					<view class="p-20-0">
						<text class="gray9">物流单号：</text>
						<text>{{ detail.express_no }}</text>
					</view>
				</view>
				<view><text class="icon iconfont icon-jiantou"></text></view>
			</view>
		</view>
		<!--购物列表-->
		<view class="shops group bg-white">
			<!-- <view class="group-hd border-b-e"
				@tap="gotoPage('/pages/shop/shop?shop_supplier_id='+detail.supplier.shop_supplier_id)">
				<view class="left ">
					<i class="icon iconfont icon-dianpu1"></i>
					<text class="min-name">{{detail.supplier.name}}</text>
					<text class="icon iconfont icon-jiantou"></text>
				</view>
			</view> -->
			<view class="list">
				<view class="one-product p-20-0" v-for="(item, index) in detail.product" :key="index">
					<view class="d-f">
						<view class="cover">
							<image :src="item.image.file_path" mode="aspectFit"></image>
						</view>
						<view class="info flex-1 p-0-20">
							<view class="d-b-s">
								<view class="flex-1">
									<view class="title f28 gray3">{{ item.product_name }}</view>
									<view class="describe mt10 f24" style="font-size: 22rpx;color: #B1B1B1;"
										v-if="item.spec_type==20">{{ item.product_attr }}
									</view>
									<view class="f22 tr">数量:{{ item.total_num }}</view>
								</view>
								<view>
									<!-- 	<view class=" count_choose">
										<view class="price">
											¥
											<text class="num">{{ item.line_price }}</text>
										</view>
										<view class="num-wrap">
											<view class="f22 tr">数量:{{ item.total_num }}</view>
										</view>
									</view> -->
								</view>
							</view>
						</view>
					</view>
					<view class="mt10 tr f28" v-if="item.is_user_grade==true">
						<text class="theme-price f26">会员折扣价：</text>
						<text class="theme-price f32">{{item.grade_product_price}}</text>
					</view>
					<view class="pt10 d-e-c" v-if="source=='user'">
						<!-- 申请售后 -->
						<view class="m-top20 dis-flex flex-x-end">
							<text v-if="item.refund">已申请售后</text>
							<view v-else-if="detail.isAllowRefund" @click="onApplyRefund(item.order_product_id)"><button
									type="default">申请售后</button></view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 起始时间 -->
		<view class="total-box">
			<view class="biank">
				<image src="../../static/hha/s.png">
					<view>
						<view class="sp1">
							{{start_time}}
						</view>
					</view>
			</view>
			<view class="biank">
				<image src="../../static/hha/h.jpg">
					<view>
						{{end_time}}
					</view>
			</view>
		</view>
		<!-- 提示 -->
		<view class="tis">
			<view class="tishi">提示：一般货物会在24小时内发出，如有特殊情况，客服会主动联系告知；快递运输期间不算租期，实际起租日为订单日后推3天</view>
		</view>

		<!-- 租金-->
		<view class="group bg-white">
			<view class="ww100">
				<view style="display: flex;justify-content: space-between;">
					<view class="mb20" style="font-size: 28rpx;">首期租金</view>
					<view style="color: #B1B1B1;font-size: 28rpx;">￥{{orderBill[0].price}}</view>
				</view>
				<view style="display: flex;justify-content: space-between;">
					<view class="mb20" style="font-size: 28rpx;">剩余租金</view>
					<view style="color: #B1B1B1;font-size: 28rpx;">￥{{priceWF}}</view>
				</view>
				<view style="display: flex;justify-content: space-between;">
					<view class="mb20" style="font-size: 28rpx;">总租金</view>
					<view style="color: #B1B1B1;font-size: 28rpx;">￥{{detail.TotalPriceGoods}}</view>
				</view>
				<view style="display: flex;justify-content: space-between;">
					<view class="mb20" style="font-size: 28rpx;">买断价</view>
					<view style="color: #B1B1B1;font-size: 28rpx;">￥{{detail.buyOutPrice}}</view>
				</view>
				<view style="display: flex;justify-content: space-between;" v-if="yushou != '0.00'">
					<view class="mb20" style="font-size: 28rpx;">保证金状态</view>
					<view style="color: #B1B1B1;font-size: 28rpx;">{{is_yushou==0?'未交':'已交'}}</view>
				</view>
				<view style="display: flex;justify-content: space-between;">
					<view class="mb20" style="font-size: 28rpx;">配送方式</view>
					<view style="color: #B1B1B1;font-size: 28rpx;">寄出包邮/顺丰包邮 </view>
				</view>
			</view>
		</view>

		<!-- 押金-->
		<view class="group bg-white" v-if="detail.order_status.value != 10">
			<view
				style="display: flex;justify-content: space-between;font-weight: 700;border-bottom: 1rpx solid #B1B1B1;margin: 10rpx 0;">
				<view class="mb20" style="color: black;font-size: 34rpx;">冻结押金</view>
				<view style="color: black;font-size: 34rpx;">￥{{detail.auth_no==''?'0.00':detail.deposit}}</view>
			</view>
			<view class="ww100">
				<view style="display: flex;justify-content: space-between;">
					<view class="mb20" style="font-size: 28rpx;">商品押金</view>
					<view style="color: #B1B1B1;font-size: 28rpx;">￥{{detail.auth_no==''?'0.00':detail.deposit}}</view>
				</view>
				<view style="display: flex;justify-content: space-between;">
					<view class="mb20" style="font-size: 28rpx;">芝麻信用免押金</view>
					<view style="color: #B1B1B1;font-size: 28rpx;">￥0.00</view>
				</view>
				<view style="display: flex;justify-content: space-between;">
					<view class="mb20" style="font-size: 28rpx;">支付宝冻结押金</view>
					<view style="color: #B1B1B1;font-size: 28rpx;">￥{{detail.auth_no==''?'0.00':detail.deposit}}</view>
				</view>
				<view style="display: flex;justify-content: space-between;">
					<view class="mb20" style="font-size: 28rpx;">押金冻结方式</view>
					<view style="color: #B1B1B1;font-size: 28rpx;">支付宝资金授权 </view>
				</view>
			</view>
		</view>

		<!-- 优惠券-->
		<view class="group bg-white">
			<view style="display: flex;justify-content: space-between;font-weight: 700;">
				<view class="mb20" style="color: black;font-size: 34rpx;">优惠券可减免金额</view>
				<view style="color: black;font-size: 34rpx;">￥{{detail.coupon_money}}</view>
			</view>
		</view>


		<!--订单信息-->
		<!-- <view class="group bg-white f26">
			<view class="p-20-0">
				<text class="">订单编号：</text>
				<text>{{ detail.order_no }}</text>
			</view>
			<view class="p-20-0">
				<text class="">下单时间：</text>
				<text>{{ detail.create_time }}</text>
			</view>
			<view class="p-20-0">
				<text class="">支付方式：</text>
				<text>{{ detail.pay_type.text }}</text>
			</view>
			<view class="p-20-0">
				<text class="">配送方式：</text>
				<text>{{ detail.delivery_type.text }}</text>
			</view>
			<view class="p-20-0"
				v-if="detail.delivery_type.value==30 && detail.order_status.value==30 && detail.virtual_content !=''">
				<text class="">发货信息：</text>
				<text>{{ detail.virtual_content }}</text>
			</view>
			<view class="p-20-0">
				<text class="">备注：</text>
				<text>{{ detail.buyer_remark }}</text>
			</view>
			<view class="p-20-0" v-if="detail.order_status.value==20 && detail.cancel_remark !=''">
				<text class="">商家备注：</text>
				<text>{{ detail.cancel_remark }}</text>
			</view>
			<view v-if="service_open&&detail.supplier.user_id!=user_id" class="p-20-0 kefu" @click="tochat">
				<text class="icon iconfont icon-kefu2"></text>
				<text class="">联系卖家</text>
			</view>
		</view> -->
		<!-- 分期付款 -->
		<view class="group bg-white" v-if="is_yushou == 0">
			<view style="display: flex;justify-content: space-between;font-weight: 700;">
				<view class="mb20" style="color: red;font-size: 25rpx;">请先预交押金或租金否则无法支付</view>
			</view>
		</view>
		<view class="group bg-white f26" v-if="detail.order_status.value == 10">
			<view class="items p-20-0" v-for="(item,index) in orderBill" :key="item.bill_id">
				<view>第{{item.current_period}}期</view>
				<view>{{item.repayment_date | formatDate }}</view>
				<view style="display: flex;align-items: center;width: 200rpx;justify-content: space-between;">
					<view class="price">{{item.price}}</view>
					<view v-if="item.is_pay_status == 0">
						<view v-if="item.xxx == true && is_yushou != 0"  class="btns"  @click="submit(item.bill_id)">去付款</view>
						<view v-else class="btns2">去付款</view>
					</view>
					
					<view v-else-if="item.is_pay_status ==  2">
						<view v-if="item.xxx == true"  class="btns4"  @click="submit(item.bill_id)">已逾期</view>
						<view v-else class="btns2">去付款</view>
					</view>
					
					<view v-else class="btns3">已付款</view>
				</view>
			</view>
			<view class="items p-20-0" v-if='detail.lease_type == 2'>
				<view>买断价</view>
				<view> - </view>
				<view style="display: flex;align-items: center;width: 200rpx;justify-content: space-between;">
					<view class="price">{{detail.buyOutPrice}}</view>
					<view v-if="detail.maiduan_no == ''" class="btns" @click="maiduan(detail.order_id)">去付款</view>
					<view v-else class="btns2">已付款</view>
				</view>
			</view>
		</view>

		<view class="group bg-white f26">
			<view class="p-20-0 d-b-c">
				<text class="">商品总价</text>
				<text>¥ {{ detail.total_price }}</text>
			</view>
			<view class="p-20-0 d-b-c">
				<text class="">运费</text>
				<text>¥ {{ detail.express_price }}</text>
			</view>
			<view class="p-20-0 d-b-c">
				<text class="">押金</text>
				<!-- <text>¥ {{ detail.yushou }}</text> -->
				<text>{{detail.deposit}}</text>
			</view>
			<view class="p-20-0 d-b-c" v-if="suiping">
				<text class="">已选碎屏险</text>
				<text>￥365 </text>
			</view>
			<view class="p-20-0 d-b-c" v-if="detail.product_reduce_money > 0">
				<text class="">商品立减</text>
				<text>-¥ {{ detail.product_reduce_money }}</text>
			</view>
			<view class="p-20-0 d-b-c" v-if="detail.points_money>0">
				<text class="">积分抵扣金额：</text>
				<text class="theme-price">- ¥{{ detail.points_money }}</text>
			</view>
			<view class="p-20-0 d-b-c" v-if=" detail.coupon_money>0">
				<text class="">店铺优惠券</text>
				<text class="theme-price">- ¥ {{ detail.coupon_money }}</text>
			</view>
			<view class="p-20-0 d-b-c" v-if=" detail.coupon_money_sys>0">
				<text class="">平台优惠券</text>
				<text class="theme-price">- ¥ {{ detail.coupon_money_sys }}</text>
			</view>
			<view class="p-20-0 d-b-c" v-if="detail.fullreduce_money>0">
				<text class="">店铺满减</text>
				<text class="theme-price">- ¥ {{ detail.fullreduce_money }}</text>
			</view>
			<view class="p-20-0 d-e-c fb f34">
				<text class="">已付金额</text>
				<text class="theme-price">
					¥ {{ priceJg }}
				</text>
			</view>
		</view>

		<!-- 备注-->
		<view class="group bg-white">
			<view class="beizhu1">
				<view>备注</view>
			</view>
		</view>

		<!-- 订单编号-->
		<view class="group bg-white">
			<view class="ww100">
				<view style="display: flex;justify-content: space-between;">
					<view class="mb20" style="font-size: 28rpx;">订单编号</view>
					<view style="color: #B1B1B1;font-size: 28rpx; display: flex;" @click='fuzhi(detail.order_no)'>
						{{detail.order_no}}
						<view style='margin: 0 5rpx;color: #1296DB;'>复制</view>
					</view>
				</view>
				<view style="display: flex;justify-content: space-between;">
					<view class="mb20" style="font-size: 28rpx;">创建时间</view>
					<view style="color: #B1B1B1;font-size: 28rpx;">{{ detail.create_time }}</view>
				</view>
			</view>
		</view>

		<view class="group bg-white"
			v-if="detail.pay_status.value == 20 && detail.delivery_type.value == 10 && detail.order_status.value==10&&detail.delivery_status.value == 10&&source=='supplier'">
			<!-- <view> -->
			<view class="f32 fb p-0-20">去发货</view>
			<!-- 下拉框 -->
			<view class="table-item">
				<view class="d-s-c make-top">
					<view class="fb color-28 f26 mr20">物流公司</view>
				</view>
				<view class="">
					<picker class="" value="" @change="changeSelect($event)" :range="expressList"
						range-key='express_name'>
						<view class="selectpicker">
							<view class="make-item input-box flex-1">{{express_name|| '请选择'}}</view>
							<view class="icon iconfont icon-jiantou"></view>
						</view>
					</picker>
				</view>
			</view>
			<view class="table-item">
				<view class="d-s-c make-top">
					<view class="fb color-28 f26 mr20">物流单号</view>
				</view>
				<view class="pr">
					<input class="make-item selectpicker input-box" v-model="express_no" type="text"
						placeholder="请输入" />
				</view>
			</view>
			<view></view>
			<view><button type="default" class="btn-blue send_btn" @click="sendPro">确认发货</button></view>
		</view>
		<view v-if="detail.pay_status.value == 20 && detail.order_status.value == 21 &&source=='supplier'">
			<view class="f32 fb p-0-20 mb20 mt20">用户取消订单</view>
			<view class="red p-0-20 mb20">当前买家已付款申请取消订单,请审核是否同意，如同意则自动退回付款金额(微信支付原路退款)并关闭订单</view>
			<view class="p-0-20">
				<view class="d-s-c mb20">
					<view class="make-top w120 mr10">
						<view class="fb color-28 f26">审核状态</view>
					</view>
					<radio-group class="d-a-c" @change="changeRadio($event)">
						<label class="d-s-c make-item ">
							<view>
								<radio style="transform:scale(0.7)" color="#ff6633" :checked="status == 1" :value="1" />
							</view>
							<view class="f26 color-57">同意</view>
						</label>
						<label class="d-s-c make-item ">
							<view>
								<radio style="transform:scale(0.7)" color="#ff6633" :checked="status == 0" :value="0" />
							</view>
							<view class="f26 color-57">拒绝</view>
						</label>
					</radio-group>
				</view>
				<view v-if="status == 0" class="d-s-c mb20">
					<view class="w120 mr10">拒绝原因</view>
					<input type="text" class="make-item selectpicker input-box" v-model="cancel_refuse" />
				</view>
			</view>
			<view><button class="theme-btn send_btn" @click="Cancel">确认</button></view>
		</view>
		<!-- 操作栏 -->
		<view v-if="detail.order_status.value != 20 && detail.order_status.value != 30 && source=='user'"
			class="foot-btns">
			<!-- 去付款-->
			<block v-if="qurzshow">
			<button class="theme-borderbtn" v-if="detail.hasrenzheng == 0" @click="qrz(detail.order_id)">去认证</button>
			</block>
			<!-- 去付款-->
			<button class="theme-borderbtn" v-if="detail.auth_no == ''" @click="payyj(detail.order_id)">去付款</button>
			<!-- 取消订单 -->
			<button class="theme-borderbtn" v-if="detail.pay_status.value == 10"
				@click="cancelOrder(detail.order_id,detail.state_text)">取消订单</button>
			<!-- 去归还 -->
			<button class="theme-borderbtn" v-if="detail.order_status.value == 11"
				@click="returned(detail.order_id)">去归还</button>
			<button @click="earlyTermination(detail.order_id)" class="theme-borderbtn"
				v-if="detail.order_status.value == 10 && detail.state_text == '已收货,进行中'">提前结束租赁</button>
			<block v-if="detail.order_status.value != 21 && detail.order_status.value != 50">
				<block v-if="detail.pay_status.value == 20 && detail.delivery_status.value == 10">
					<button @click="cancelOrder(detail.order_id,detail.state_text)" class="theme-borderbtn">申请取消</button>
				</block>
			</block>
			<text v-else class="count f28 gray9">取消申请中</text>
			<button class="theme-borderbtn" v-if="detail.order_status.value == 10 && detail.lease_type == 1"
				@click="maiduan(detail.order_id)">买断</button>
			<block v-if="detail.pay_status.value == 10">
				<!-- 订单付款 -->
				<button @click="onPayOrder(detail.order_id)" v-if="detail.order_status.value == 2"
					class="ml10 theme-btn">去支付</button>
			</block>
			<!-- 确认收货 -->
			<block v-if="detail.delivery_status.value == 20 && detail.receipt_status.value == 10">
				<button class="theme-btn" @click="orderReceipt(detail.order_id)">确认收货</button>
			</block>
		</view>
		<!--支付选择-->
		<!-- <Popup :show="isPayPopup" msg="支付方式" @hidePopup="hidePopupFunc">
			<view class="buy-checkout ww100">
				<view :class="pay_type == 20 ? 'item active border-b-e' : 'item border-b-e'" @click="payTypeFunc(20)">
					<view class="d-s-c">
						<view class="icon-box d-c-c mr10"><span class="icon iconfont icon-weixin"></span></view>
						<text class="key">微信支付</text>
					</view>
					<view class="icon-box d-c-c"></view>
				</view>
				<view v-if="showAlipay" :class="pay_type == 30 ? 'item active border-b-e' : 'item border-b-e'"
					@click="payTypeFunc(30)">
					<view class="d-s-c">
						<view class="icon-box d-c-c mr10"><span class="icon iconfont icon-zhifubao"></span></view>
						<text class="key">支付宝支付</text>
					</view>
					<view class="icon-box d-c-c"></view>
				</view>
				<view :class="pay_type == 10 ? 'item active' : 'item'" @click="payTypeFunc(10)">
					<view class="d-s-c">
						<view class="icon-box d-c-c mr10"><span class="icon iconfont icon-yue"></span></view>
						<text class="key">余额支付</text>
					</view>
					<view class="icon-box d-c-c"></view>
				</view>
			</view>
			<view class="bts"></view>
		</Popup> -->
		<u-popup :show="showqx" mode="bottom" @close="close" closeable=true>
			<view style="height: 600rpx;">
				<view class="yuanyin">请选择取消原因</view>
				<view class="fxuankuang">
					<u-checkbox-group v-model="checkboxValue1" placement="column" @change="checkboxChange">
						<u-checkbox :customStyle="{marginBottom: '8px'}" v-for="(item, index) in checkboxList1"
							:key="index" :label="item.name" :name="item.name">
						</u-checkbox>
					</u-checkbox-group>
				</view>
				<view class="anniuXq">
					<button @click="queding">确认</button>
					<button @click="close">取消</button>
				</view>
			</view>
		</u-popup>
		<Mpservice v-if="isMpservice" :isMpservice="isMpservice" :shopSupplierId="detail.supplier.shop_supplier_id"
			@close="closeMpservice"></Mpservice>
	</block>
	<block v-else>
		<view class="p30" style="text-align: center;">
			<text class="iconfont icon-wushuju"></text>
			<text class="cont">亲，还没有登录哦</text>
			<view style="display: flex;justify-content:center;align-items:center;">
				<button
					style="border: 1rpx solid black; font-size: 26rpx; width: 200rpx; border-radius: 60rpx;height: 60rpx; line-height: 60rpx;color: black; margin: 20rpx 0;"
					@getAuthorize="onGetAuthorize1" open-type="getAuthorize" scope="phoneNumber"
					onError="handleAuthError">
					一键授权登录
				</button>
			</view>
			
		</view>
		
	</block>
	</view>
</template>

<script>
	import Popup from '@/components/uni-popup.vue';
	import {
		pay
	} from '@/common/pay.js';
	import Mpservice from '@/components/mpservice/Mpservice.vue';
	import utils from '@/common/utils.js'
	export default {
		data() {
			return {
				yushou:'',
				is_deposit:'',
				is_yushou:'',
				tokendata1:"",
				state_text:"",
				TotalPriceGoods:"",
				qurzshow:true,
				timer: null, //定时器名称
				suiping: false,
				payable: "",
				priceJg: "",
				checkboxValue1: [],
				// 基本案列数据
				checkboxList1: [{
						name: '押金过高',
						disabled: false
					},
					{
						name: '更改订单信息',
						disabled: false
					},
					{
						name: '预收押金/补押金',
						disabled: false
					},
					{
						name: '审核时间过长',
						disabled: false
					},
					{
						name: '商家没货/服务态度问题',
						disabled: false
					},
					{
						name: '运费问题',
						disabled: false
					}
				],
				showqx: false,
				priceWF: "",
				start_time: '',
				end_time: '',
				buyOutPricedata: "",
				hasrenzheng_id: "",
				portrait: "",
				// 商品总价
				numTitol: "",
				/*是否加载完成*/
				loadding: true,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				/*是否显示支付类别弹窗*/
				isPayPopup: false,
				/*订单id*/
				order_id: 0,
				// 还款期数
				orderBill: [],
				/*订单详情*/
				detail: {
					order_status: [],
					address: {
						region: []
					},
					product: [],
					pay_type: [],
					delivery_type: [],
					pay_status: [],
					buyOutPrice: '',
				},
				extractStore: {},
				source: 'user',
				service_open: 0,
				service_type: 10,
				isMpservice: false,
				/*是否显示支付宝支付，只有在h5，非微信内打开才显示*/
				showAlipay: false,
				user_id: 0,
				expressList: [],
				express_id: '',
				express_name: '',
				express_no: '',
				status: 1,
				cancel_refuse: '',
				pay_type: 10
			};
		},
		components: {
			Popup,
			Mpservice,
		},
		onLoad(e) {
			this.tokendata1 = uni.getStorageSync('token');
			console.log("tokendata",this.tokendata1);
			this.order_id = e.order_id;
			this.user_id = uni.getStorageSync('user_id');
			if (e.source) {
				this.source = e.source;
			}
		},
		mounted() {
			uni.showLoading({
				title: '加载中'
			});
			/*获取订单详情*/
			this.getData();
		},
		onShow() {
			// this.getData();
		},
		
		 filters: {
		    // 过滤器
		    formatDate(value) {
		      let date = new Date(value * 1000);
		      //时间戳为10位需*1000，时间戳为13位的话不需乘1000
		      let y = date.getFullYear();
		      let MM = date.getMonth() + 1;
		      MM = MM < 10 ? ('0' + MM) : MM; //月补0
		      let d = date.getDate();
		      d = d < 10 ? ('0' + d) : d; //天补0
		      let h = date.getHours();
		      h = h < 10 ? ('0' + h) : h; //小时补0
		      let m = date.getMinutes();
		      m = m < 10 ? ('0' + m) : m; //分钟补0
		      let s = date.getSeconds();
		      s = s < 10 ? ('0' + s) : s; //秒补0
		      return y + '-' + MM + '-' + d; //年月日
		      // return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s; //年月日时分秒
		    },
		},
		methods: {
			// 支付宝登录
			async onGetAuthorize1() {
				// 获取授权码
				my.getAuthCode({
					scopes: ['auth_base'],
					success: (res) => {
						my.getPhoneNumber({
							success: (res1) => {
								let encryptedData = res1.response;
								encryptedData = JSON.parse(encryptedData);
								let response = encryptedData.response
								this._post('user.usermp/mnpAlipayAuthLogin', {
									code: res.authCode,
									content: response
								}, res => {
									uni.setStorageSync('token', res.data.data.token);
									uni.setStorageSync('user_id', res.data.data
										.user_id);
									uni.showToast({
										title: '登录成功'
									});
									this.getData();
									this.tokendata1 = uni.getStorageSync('token');
								})
							},
							fail: (res) => {
								console.log("失败")
								reject(res);
							}
						});
					},
				});
			},
			// 拒绝操作
			onAuthError() {
				uni.showModal({
					title: "提示",
					content: "取消授权，可能导致服务无法使用，或者页面显示不完整",
					success: function(res) {
						if (res.confirm) {
							console.log("取消授权")
						} else {
							console.log("重新授权")
						}
					}
				})
			},
			
			close() {
				this.showqx = false;
			},
			fuzhi(nr) {
				// console.log(nr);
				uni.setClipboardData({
					data: nr, // e是你要保存的内容
					success: function() {
						uni.showToast({
							title: '复制成功',
							icon: 'none'
						})
					}
				})
			},
			qrz(id) {
				uni.navigateTo({
					url: '/pages/order/smrz?order_id=' + id
				})
			},
			// 去付款
			payyj(id) {
				// console.log(id);
				let self = this;
				self._post('/order.order/pay', {
						order_id: id
					},
					function(res) {
						// console.log(res, "res");
						my.tradePay({
							orderStr: res
								.data, //orderStr从第一步：生成资金冻结订单，从服务端获取
							success: (res) => {
								// 成功
								uni.reLaunch({
									url: '/pages/order/order-detail?order_id=' + id
								})
							},
							fail: (res) => {
								uni.showToast({
									title: '支付失败！',
									icon: 'none'
								})
							}
						});
					})
			},
			/*获取数据*/
			getData() {
				let self = this;
				let order_id = self.order_id;
				let url = 'user.order/detail';
				if (this.source == 'supplier') {
					url = 'supplier.order/detail';
				}
				self._get(url, {
						order_id: order_id,
						pay_source: self.getPlatform()
					},
					function(res) {
						console.log(res,'==========')
						var dsp = 0;
						if (res.data.order.hasrenzheng_id) {
							if (dsp < 10) {
								self.timer = setInterval(function() {
									dsp +=1
									if(dsp > 3){
										clearInterval(self.timer);
										 self.timer = null;
									}
									self._post(
										'order.authentication/queryAuthentication', {
											hasrenzheng_id: res.data.order.hasrenzheng_id,
										},
										function(result) {
											if(result.code == 1){
												clearInterval(self.timer);
												 self.timer = null;
												 self.qurzshow = false;
											}
											
										}
									);
									
								}, 1000);
							}else{
								clearInterval(self.timer);
								 self.timer = null;
							}
							
						}
						// console.log("res返回成功",res.data.order.hasrenzheng_id);
						self.portrait = res.data.order.portrait;
						self.hasrenzheng_id = res.data.order.hasrenzheng_id;
						if (self.portrait == '' && self.hasrenzheng_id != '') {
							self._post('order.authentication/queryAttestation', {
									flowid: self.hasrenzheng_id,
									order_id: order_id
								},
								function(res) {
									self.loading = false;
									uni.hideLoading();
								})
						}
						self.expressList = res.data.expressList;
						self.detail = res.data.order;
						// console.log("detail", self.detail.product[0].product_attr);
						var str2 = self.detail.product[0].product_attr;
						// console.log(str2.indexOf("不") != -1, str2, "是否存在");
						if (str2.indexOf("不") != -1) {
							// console.log("存在");
							self.suiping = false;
						} else {
							self.suiping = true;
						}
						self.detail.buyOutPrice = res.data.buyOutPrice;
						self.start_time = self.detail.create_time;
						let str1 = self.detail.create_time;
						// if (str1.indexOf("2023") != -1) {
						// 	// console.log("存在");
						// 	// console.log(str1.replace(/2023/,"2024"));
						// 	self.end_time = str1.replace(/2023/, "2024");
						// }
						self.end_time = utils.Times(str1,res.data.order.lease_time)
						self.orderBill = res.data.orderBill;
						self.is_yushou = res.data.order.is_yushou
						self.extractStore = res.data.order.extractStore;
						self.service_open = res.data.setting.service_open;
						self.yushou = res.data.order.yushou
						self.is_deposit = res.data.order.is_deposit
						// console.log(res.data.order.deposit, res.data.order.yushou, res.data.order.zhuanzujin, "开始3");
						let yushoudata = res.data.order.yushou;
						let depositdata = res.data.order.deposit;
						let zhuanzujinData = res.data.order.zhuanzujin;
						let buyOutPricedata = res.data.buyOutPrice;
						if (res.data.order.maiduan_no == '') {
							buyOutPricedata = 0;
						}
						if (res.data.order.is_yushou != 2) {
							yushoudata = 0;
						}
						self.detail.TotalPriceGoods = (Number(self.detail.total_price) - Number(depositdata) - Number(zhuanzujinData)).toFixed(2);
						if (res.data.order.auth_no == '') {
							depositdata = 0;
						}
						let ysqyjze = Number(zhuanzujinData) + Number(depositdata);
						let numTitol1 = Number(depositdata) + Number(yushoudata) + Number(zhuanzujinData);
						let orderBill = res.data.orderBill;
						let priceJg = 0;
						let priceWF = 0;
						let payable = 0;
						for (var i = 0; i < orderBill.length; i++) {
							if (orderBill[i].is_pay_status == 1) {
								priceJg = Number(priceJg) + Number(orderBill[i].price);
								if (orderBill[i].transaction_id != null) {
									payable = Number(payable) + Number(orderBill[i].price);
									// console.log(orderBill[i].transaction_id, "orderBill[i].transaction_id ");
								}
							}
							if (orderBill[i].is_pay_status == 0) {
								priceWF = Number(priceWF) + Number(orderBill[i].price);
							}
							
							
							// console.log("is_pay_status",orderBill[i].is_pay_status);
							if (orderBill[i].is_pay_status == 0 || orderBill[i].is_pay_status == 2) {
								// console.log("i",i);
								if(i >= 1){
									if(orderBill[i-1].is_pay_status != 1){
										orderBill[i].xxx = false;
									}else{
										orderBill[i].xxx = true;
									}
								}else{
									orderBill[i].xxx = true;
								}
							}
							
						}
						self.priceWF = priceWF.toFixed(2);
						// console.log("总价格", numTitol1, priceJg);
						// console.log("计算", Number(numTitol1) + Number(priceJg));
						self.numTitol = (Number(numTitol1) + Number(priceJg) + Number(buyOutPricedata)).toFixed(2);
						// self.payable = (Number(payable) + Number(ysqyjze) + Number(yushoudata)).toFixed(2);
						// self.payable = Number(payable).toFixed(2);
						// console.log(str2.indexOf("不") != -1, str2, "是否存在");
						if (str2.indexOf("不") != -1) {
							self.priceJg = Number(priceJg).toFixed(2);
						} else {
							if (self.detail.is_yushou == 2) {
								self.priceJg = Number(priceJg + 365).toFixed(2);
							} else {
								self.priceJg = Number(priceJg).toFixed(2);
							}
						}
						
						if (res.data.setting.mp_service == null) {
							self.service_type = 10;
						} else {
							self.service_type = res.data.setting.mp_service.service_type;
						}
						if (res.data.show_alipay) {
							self.showAlipay = true;
						}
						self.loadding = false;
						uni.hideLoading();
					}
				);
			},
			returned(order_id) {
				uni.navigateTo({
					url: './returned?order_id=' + order_id
				})
			},
			submit(id) {
				console.log('buts')
				let self = this;
				self.loading = true;
				uni.showLoading({
					title: '加载中'
				});
				self._post('/user.order/billPay', {
						bill_id: id
					},
					function(res) {
						self.loading = false;
						uni.hideLoading();
						pay(res, self, self.paySuccess, self.payError);
					})
			},
			maiduan(id) {
				let self = this;
				self.loading = true;
				uni.showLoading({
					title: '加载中'
				});
				self._post('/order.order/buyOut', {
						order_id: id
					},
					function(res) {
						self.loading = false;
						uni.hideLoading();
						pay(res, self, self.paySuccess, self.payError);
					})
			},
			/*显示支付方式*/
			hidePopupFunc() {
				this.isPayPopup = false;
			},

			/*取消订单*/
			queding() {
				let self = this;
				// console.log(JSON.stringify(self.checkboxValue1), self.order_id);
				let reason = JSON.stringify(self.checkboxValue1);
				// return
				uni.showLoading({
					title: '正在处理'
				});
				let status = ""
				if(self.state_text == "待发货"){
					status = 1
				}else{
					status = 0
				}
				self._get(
					'user.order/cancel', {
						order_id: self.order_id,
						reason: reason,
						status:status
					},
					function(res) {
						uni.hideLoading();
						uni.showToast({
							title: '操作成功',
							duration: 2000,
							icon: 'success'
						});
						self.listData = [];
						self.showqx = false;
						self.getData();
					}
				);
			},
			cancelOrder(e,item) {
				let self = this;
				let order_id = e;
				console.log(item);
				self.state_text = item;
				self.order_id = e;
				this.showqx = true;
			},

			/*确认收货*/
			orderReceipt(order_id) {
				let self = this;
				wx.showModal({
					title: '提示',
					content: '您确定要收货吗?',
					success: function(o) {
						if (o.confirm) {
							uni.showLoading({
								title: '正在处理'
							});
							self._post(
								'user.order/receipt', {
									order_id: order_id
								},
								function(res) {
									uni.hideLoading();
									uni.showToast({
										title: res.msg,
										duration: 2000,
										icon: 'success'
									});
									self.getData();
								}
							);
						}
					}
				});
			},
			// 提前返还
			earlyTermination(order_id) {
				uni.showLoading({
					title: '正在加载'
				})
				this._post('/order.order/earlyEnd', {
					order_id: order_id
				}, res => {
					uni.hideLoading()
					if (res.code == 124) {
						// console.log("成功")
						uni.showToast({
							title: res.msg,
							icon: 'none',
						})
						setTimeout(() => {
							uni.navigateBack({
								delta: 1,
							})
						}, 700)
						return
					} else {
						pay(res, this);
					}
				})


			},
			/*查看物流*/
			gotoExpress(order_id) {
				this.gotoPage('/pages/order/express/express?order_id=' + order_id);
			},
			/*申请售后*/
			onApplyRefund(e) {
				this.gotoPage('/pages/order/refund/apply/apply?order_product_id=' + e);
			},

			/*去支付 */
			payTypeFunc(payType) {
				let self = this;
				let order_id = self.order_id;
				self.isPayPopup = false;
				uni.showLoading({
					title: '加载中'
				});
				self._post(
					'user.order/pay', {
						payType: payType,
						order_id: order_id,
						pay_source: self.getPlatform()
					},
					function(res) {
						uni.hideLoading();
						pay(res, self);
					}
				);
			},

			/*支付方式选择  */
			onPayOrder(orderId) {
				let self = this;
				self.gotoPage('/pages/order/cashier?order_type=1&order_id=' + orderId)
			},
			gotoProduct(item) {
				this.gotoPage('/pages/product/detail/detail?product_id=' + item.product_id);
			},
			tochat() {
				if (this.service_type == 10) {
					this.isMpservice = true;
				}
				if (this.service_type == 20) {
					this.gotoPage('/pages/plus/chat/chat?user_id=' + this.detail.supplier.supplier_user_id +
						'&shop_supplier_id=' + this.detail.supplier
						.shop_supplier_id + "&nickName=" + this.detail.supplier.name + '&order_id=' + this
						.order_id);
				}
			},
			changeRadio(e) {
				this.status = e.detail.value;
			},
			Cancel() {
				let self = this;
				wx.showModal({
					title: '提示',
					content: '您确定审核吗?',
					success: function(o) { 
						if (o.confirm) {
							uni.showLoading({
								title: '正在处理'
							});
							self._post(
								'supplier.order/confirmCancel', {
									order_id: self.detail.order_id,
									is_cancel: self.status,
									cancel_refuse: self.cancel_refuse
								},
								function(res) {
									uni.hideLoading();
									self.showSuccess(res.msg);
									self.getData();
								}
							);
						}
					}
				});
			},
			changeSelect(e) {
				// console.log(e);
				this.express_name = this.expressList[e.detail.value].express_name;
				this.express_id = this.expressList[e.detail.value].express_id;
			},
			sendPro() {
				let self = this;
				wx.showModal({
					title: '提示',
					content: '您确定要发货吗?',
					success: function(o) {
						if (o.confirm) {
							uni.showLoading({
								title: '正在处理'
							});
							self._post(
								'supplier.order/delivery', {
									order_id: self.detail.order_id,
									express_id: self.express_id,
									express_no: self.express_no
								},
								function(res) {
									uni.hideLoading();
									self.showSuccess(res.msg);
									self.getData();
								}
							);
						}
					}
				});
			}
		}
	};
</script>

<style scoped lang="scss">
	.yuanyin {
		text-align: center;
		margin-bottom: 20rpx;
		color: #A5A5A5;
		border-bottom: 1rpx solid #A5A5A5;
		padding: 23rpx;
	}

	.fxuankuang {
		padding: 20rpx 40rpx;
	}

	.anniuXq {
		display: flex;
		justify-content: center;

		button {
			width: 50%;
		}
	}

	.tis {
		padding: 20rpx;
		height: 40rpx;

		.tishi {
			font-size: 20rpx;
			color: DarkOrange;
			background-color: LightYellow;
		}
	}

	.total-box {
		height: 90rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #C3E6FC;
		border-radius: 50rpx;
		margin: 15rpx 30rpx;

		.biank {
			width: 300rpx;
			height: 80rpx;
			border: 1rpx;
			display: flex;
			flex-direction: row;

			image {
				height: 80rpx;
				width: 80rpx;
			}

			view {
				font-size: 20rpx;
				line-height: 80rpx;
				margin-left: 5rpx;
			}
		}
	}

	.order-express {
		background: #ffffff;
		margin: 0 20rpx;
		border-radius: 12rpx;
		margin-top: 20rpx;
	}

	.order-express .icon-box .iconfont {
		font-size: 50rpx;
	}

	.order-datail {
		padding-bottom: 90 rpx;
		background-color: #F2F2F2;
	}

	.order-datail .fight-users {
		margin: 0 auto;
	}

	.order-datail .fight-users .user-box {
		width: 80rpx;
		height: 80rpx;
		margin: 10rpx;
		border-radius: 50%;
		border: 1px dashed #cccccc;
	}

	.order-datail .fight-users {
		padding: 30rpx;
	}

	.order-datail .fight-users .user-box image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}

	.order-datail .fight-users .user-box .leader {
		position: absolute;
		top: -20rpx;
		left: 50%;
		margin-left: -30rpx;
		width: 60rpx;
		height: 30rpx;
		line-height: 30rpx;
		text-align: center;
		color: #ffffff;
		border-radius: 30rpx;
		border: 1px solid #ffffff;
		background: red;
	}

	.order-datail .fight-users .user-box.user-who {
		font-size: 50rpx;
		color: #999999;
	}

	.state-cont .countdown-datetime {
		margin-top: 16rpx;
	}

	.state-cont .countdown-datetime text {
		padding: 4rpx 8rpx;
		border-radius: 4rpx;
		// background: rgba(0, 0, 0, .4);
	}

	.icon-dianpu1 {
		margin-right: 15rpx;
	}

	.kefu {
		border-top: 1rpx solid #cacaca;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.kefu .icon-kefu2 {
		color: #1296db;
		margin-right: 8rpx;
	}

	.group {
		margin: 0 20rpx;
		margin-top: 20rpx;
		border-radius: 12rpx;
		margin-bottom: 10rpx;
	}

	.foot-btns {
		padding-bottom: 50rpx;
	}

	.foot-btns button {
		color: #FFFFFF;
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 30rpx;
		width: 200rpx;
		background-color: #1296db;
	}

	.table-item {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF;
		border-radius: 8rpx;
		padding: 26rpx;
		box-sizing: border-box;
	}

	.selectpicker {
		width: 400rpx;
		height: 65rpx;
		line-height: 65rpx;
		padding: 0 23rpx;
		box-sizing: border-box;
		border: 2rpx solid #BFBFBF;
		border-radius: 5rpx;
		font-size: 26rpx;
		font-weight: 500;
		color: #575757;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.selectpicker .jiantou {
		color: #575757;
		font-size: 22rpx;
	}

	.send_btn {
		width: 200rpx;
		margin: 0 auto;
	}

	.w120 {
		width: 120rpx;
	}

	.order-state {
		background: #8FD4FF;
		color: #FFF;
	}

	.items {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.btns {
			width: 100rpx;
			height: 50rpx;
			text-align: center;
			border-radius: 20rpx;
			background: #1296db;
			line-height: 50rpx;
			color: #FFF;
		}

		.btns2 {
			width: 100rpx;
			height: 50rpx;
			text-align: center;
			border-radius: 20rpx;
			background: #666;
			line-height: 50rpx;
			color: #FFF;
		}
		.btns3 {
			width: 100rpx;
			height: 50rpx;
			text-align: center;
			border-radius: 20rpx;
			background: #53C21D;
			line-height: 50rpx;
			color: #FFF;
		}
		.btns4 {
			width: 100rpx;
			height: 50rpx;
			text-align: center;
			border-radius: 20rpx;
			background: #E45656;
			line-height: 50rpx;
			color: #FFF;
		}
	}
	.beizhu1{
		display: flex;
		justify-content:flex-start;
		align-items: center;
		font-weight:bold;
		color: black;
		font-size: 34rpx;
	}
</style>
