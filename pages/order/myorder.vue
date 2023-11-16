<template>
	<view :data-theme='theme()' :class="theme() || ''">
		<scroll-view scroll-x="true" class="top-tabbar" :scroll-left="tabNumber">
			<view :class="state_active == 0 ? 'tab-item active' : 'tab-item'" @click="stateFunc(0)">全部订单</view>
			<!-- <view :class="state_active == 11 ? 'tab-item active' : 'tab-item'" @click="stateFunc(11)">待付押金</view> -->
			<view :class="state_active == 1 ? 'tab-item active' : 'tab-item'" @click="stateFunc(1)">待付款</view>
			<view :class="state_active == 5 ? 'tab-item active' : 'tab-item'" @click="stateFunc(5)">待审核</view>
			<view :class="state_active == 2 ? 'tab-item active' : 'tab-item'" @click="stateFunc(2)">待发货</view>
			<view :class="state_active == 3 ? 'tab-item active' : 'tab-item'" @click="stateFunc(3)">待收货</view>
			<!-- <view :class="state_active == 4 ? 'tab-item active' : 'tab-item'" @click="stateFunc(4)">待评价</view> -->
			<view :class="state_active == 6 ? 'tab-item active' : 'tab-item'" @click="stateFunc(6)">租赁中</view>
			<view :class="state_active == 7 ? 'tab-item active' : 'tab-item'" @click="stateFunc(7)">待归还</view>
			<view :class="state_active == 9 ? 'tab-item active' : 'tab-item'" @click="stateFunc(9)">归还中</view>
			<view :class="state_active == 10 ? 'tab-item active' : 'tab-item'" @click="stateFunc(10)">已完成</view>
			<view :class="state_active == 13 ? 'tab-item active' : 'tab-item'" @click="stateFunc(13)">取消中</view>
			<view :class="state_active == 8 ? 'tab-item active' : 'tab-item'" @click="stateFunc(8)">已取消</view>
			<view :class="state_active == 11 ? 'tab-item active' : 'tab-item'" @click="stateFunc(11)">已驳回</view>
			<view :class="state_active == 12 ? 'tab-item active' : 'tab-item'" @click="stateFunc(12)">已逾期</view>

		</scroll-view>
		<!-- <view class="top-tabbar"> 
			<view :class="state_active == 0 ? 'tab-item active' : 'tab-item'" @click="stateFunc(0)">全部订单</view>
			<view :class="state_active == 1 ? 'tab-item active' : 'tab-item'" @click="stateFunc(1)">待付款</view>
			<view :class="state_active == 2 ? 'tab-item active' : 'tab-item'" @click="stateFunc(2)">待发货</view>
			<view :class="state_active == 3 ? 'tab-item active' : 'tab-item'" @click="stateFunc(3)">待收货</view>
			<view :class="state_active == 4 ? 'tab-item active' : 'tab-item'" @click="stateFunc(4)">待评价</view>
		</view> -->
		<!--列表-->
		<!-- <view :class="topRefresh ? 'top-refresh open' : 'top-refresh'">
				<view class="circle" v-for="(circle, n) in 3" :key="n"></view>
			</view> -->
		<view class="order-list">
			<view class="item" v-for="(item, index) in listData" :key="index">
				<!-- <view class="d-b-c pb38">
					<view class="item-dianpu" @click="toShop(item.supplier.shop_supplier_id)">
						<view class="item-d-l mr10">
							<i class="icon iconfont icon-dianpu1"></i>
							<text class="fb gray3 f32" v-if="item.supplier">{{item.supplier.name}}</text>
						</view>
						<view>
							<i class="icon iconfont icon-jiantou"></i>
						</view>
					</view>
					<view class="state">
						<text class="redF6"
							style="color: #2b85e4;">{{ item.order_status.value == 40?'已驳回':item.state_text }}</text>
					</view>
				</view> -->
				<view class="order-head d-b-c">
					<view>
						<!-- <text class="state-text">{{ item.order_source_text }}</text> -->
						<text class="shop-name flex-1 fb">订单号：{{ item.order_no }}</text>
					</view>
				</view>

				<!--多个商品显示-->
				<view class="product-list pr" v-if="item.product.length > 1" @click="gotoOrder(item.order_id)">
					<scroll-view scroll-x="true">
						<view class="list d-s-c pr100">
							<view class="cover mr10" v-for="(img, num) in item.product" :key="num">
								<image :src="img.image.file_path" mode="aspectFit"></image>
							</view>
						</view>
					</scroll-view>
					<view class="total-count">
						<view class="left-shadow"></view>
						<view class="price f24">
							¥
							<text class="f32">{{ item.pay_price}}</text>
						</view>
						<view class="count">共{{ item.product.length }}件</view>
					</view>
				</view>

				<!--一个商品显示-->
				<view class="one-product d-s-c" v-else @click="gotoOrder(item.order_id)">
					<view class="cover" v-for="(img, num) in item.product" :key="num">
						<image :src="img.image.file_path" mode="aspectFit"></image>
					</view>
					<view class="pro-info flex-1">{{ item.product[0].product_name }}</view>
					<view class="total-count">
						<view class="left-shadow"></view>
						<!-- <view class="price f24">
							<text class="count2">总租金: ¥ {{ (item.total_price - item.deposit - item.zhuanzujin).toFixed(2) }}</text>
						</view> -->
						<!-- <view class="count">共{{ item.product[0].total_num }}件</view> -->
						<!-- <view class="count">共12期</view> -->
					</view>
					<!-- <view style="display: flex;flex-direction:column;">
							<view style="color: #46454E;font-size: 30rpx;">{{ item.product[0].product_name }}
							 </view>
							<view style="color: #999999;font-size: 22rpx;">
								{{item.product[0].product_attr}}
							</view>
					 </view> -->


				</view>

				<view style="display: flex;justify-content: flex-end;">
					<view class="count2">总租金: <span style="color: #46454E;font-weight: 700;font-size: 34rpx;margin: 0 15rpx;">¥
							{{ (item.total_price - item.deposit - item.zhuanzujin).toFixed(2) }}</span> 共{{item.lease_time}}期 </view>
				</view>

				<view class="mb30" v-if="item.state_text =='待审核'">
					<u-notice-bar :text="text1"></u-notice-bar>
				</view>

				<view class="order-bts">

					<view style="margin-right:8rpx;">
						<contact-button tnt-inst-id="" size="60" scene="" icon="../../static/hha/ddkefu.png" />
					</view>

					<!-- <block v-if="item.hasrenzheng == 0">
						<button @click="qrz(item.order_id)" class="theme-borderbtn">去认证</button>
					</block> -->
					<block v-if="item.yushou == '0.00' && item.auth_no == '' && item.order_status.value != 20">
						
							<button @click="payyj(item.order_id)" class="theme-borderbtn">去付款</button>
						
					</block>
					<block v-if="item.order_status.value != 20">
						<!-- 未支付取消订单 -->
						<button @click="cancelOrder(item.order_id,item)" class="theme-borderbtn" v-if="item.pay_status.value == 10">
							取消订单
							<!-- <image src="../../static/hha/qu.jpg" style="width: 120rpx; height: 65rpx;"></image> -->
						</button>
						<button @click="bcxx()" class="theme-borderbtn" style="border: none;background-color: #0888FB;color: white;"
							v-if="item.state_text =='待审核'">
							急速审核
						</button>
						<!-- 待归还 -->
						<button @click="returned(item.order_id)" class="theme-borderbtn"
							v-if="item.order_status.value == 11">去归还</button>
						<button @click="earlyTermination(item.order_id)" class="theme-borderbtn"
							v-if="item.order_status.value == 10 && item.state_text == '已收货,租赁中'">提前结束租赁</button>
						<!-- 已支付取消订单 -->
						<block v-if="item.order_status.value != 21">
							<!-- <block v-if="item.pay_status.value == 20 && item.delivery_status.value == 10">
								<button @click="cancelOrder(item.order_id)" class="theme-borderbtn">申请取消</button>
							</block> -->
							<!-- 订单核销码 -->
							<block
								v-if="item.pay_status.value == 20 && item.delivery_type.value == 20 && item.delivery_status.value == 10">
								<button @click="onQRCode(item.order_id)" class="theme-borderbtn">核销码</button>
							</block>
						</block>
						<text v-else class="count">取消申请中</text>
						<!-- 订单付款 -->
						<block v-if="item.order_status.value == 2 && item.auth_no != ''">
							<button class="theme-btn" @click="onPayOrder(item.order_id)">
								去付款
							</button>
						</block>
						<!-- 预交租金 -->
						<block>
							<button class="theme-btn" @click="onPayOrder(item.ysid)"
								v-if="item.ysid > '0' && item.order_status.value != '40'">预交{{item.is_deposit == 0?'租金':'押金'}}：¥{{item.yushou}}</button>
						</block>
						<!-- 确认收货 -->
						<block v-if="item.delivery_status.value == 20 && item.receipt_status.value == 10"><button class="theme-btn"
								@click="orderReceipt(item.order_id)">确认收货</button></block>
						<!-- 查看物流 -->
						<block v-if="item.delivery_status.value == 20 && item.order_status.value == 10"><button class="theme-btn"
								@click="gotoExpress(item.order_id)">查物流</button></block>
						<!-- 查看账单 -->
						<block v-if="item.delivery_status.value == 20 && item.order_status.value == 10"><button class="theme-btn"
								@click="gotoZhangdan(item.order_id)">查账单</button></block>
						<!-- 订单评价 -->
						<button class="theme-btn" v-if="item.order_status.value == 30 && item.is_comment == 0"
							@click="gotoEvaluate(item.order_id)">评价</button>
					</block>
					<template v-if="item.assemble_status == 10 && item.order_source == 30">
						<button class="theme-btn" @click="gotoAssembleShare(item.product[0].bill_source_id)">邀请好友拼单</button>
					</template>
				</view>
			</view>
			<!-- <view class="d-c-c p30" v-if="listData.length == 0 && !loading"> -->
			<view class="p30" style="text-align: center;" v-if="tokendata==''">
				<text class="iconfont icon-wushuju"></text>
				<!-- <text class="cont">亲，暂无相关记录哦</text> -->
				<text class="cont">亲，还没有登录哦</text>
				<view style="display: flex;justify-content:center;align-items:center;">
					<button
						style="border: 1rpx solid black; font-size: 26rpx; width: 200rpx; border-radius: 60rpx;height: 60rpx; line-height: 60rpx;color: black; margin: 20rpx 0;"
						@getAuthorize="onGetAuthorize1" open-type="getAuthorize" scope="phoneNumber" onError="handleAuthError">
						一键授权登录
					</button>
				</view>

			</view>
			<view v-if="listData.length == 0 && !loading" style="text-align: center;">
				<view class="cont"
					style="display: flex;margin-top: 20rpx;justify-content: center;align-items: center;color: #2979ff;"><u-icon
						name="warning" color="#2979ff" size="28"></u-icon> 亲，暂无相关记录哦</view>
			</view>
			<uni-load-more v-else :loadingType="loadingType"></uni-load-more>
		</view>

		<!--支付选择-->
		<!-- <Popup :show="isPayPopup" msg="支付方式" @hidePopup="hidePopupFunc">
			<view class="buy-checkout">
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

		<!--核销二维码-->
		<Popup :show="isCodeImg" type="middle" @hidePopup="hideCodePopupFunc">
			<view class="ww100 p20 box-s-b">
				<image class="ww100" :src="codeImg" mode="widthFix"></image>
			</view>
		</Popup>
		<u-popup :show="showqx" mode="bottom" @close="close" closeable=true>
			<view style="height: 600rpx;">
				<view class="yuanyin">请选择取消原因</view>
				<view class="fxuankuang">
					<u-checkbox-group v-model="checkboxValue1" placement="column" @change="checkboxChange">
						<u-checkbox :customStyle="{marginBottom: '8px'}" v-for="(item, index) in checkboxList1" :key="index"
							:label="item.name" :name="item.name">
						</u-checkbox>
					</u-checkbox-group>
				</view>
				<view class="anniuXq">
					<button @click="queding">确认</button>
					<button @click="close">取消</button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import Popup from '@/components/uni-popup.vue';
	import uniLoadMore from '@/components/uni-load-more.vue';
	import {
		pay
	} from '@/common/pay.js';
	export default {
		components: {
			Popup,
			uniLoadMore
		},
		data() {
			return {
				state_text: "",
				text1: "补充信息可加速审核，大幅提高审核通过率",
				tokendata: "",
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
				/*手机高度*/
				phoneHeight: 0,
				/*可滚动视图区域高度*/
				scrollviewHigh: 0,
				/*状态选中*/
				state_active: 0,
				/*顶部刷新*/
				topRefresh: false,
				/*数据*/
				listData: [],
				tabNumber: 0,
				/*数据类别*/
				dataType: 'all',
				/*是否显示支付类别弹窗*/
				isPayPopup: false,
				/*支付方式*/
				pay_type: 20,
				/*订单id*/
				order_id: 0,
				/*最后一页码数*/
				last_page: 0,
				/*当前页面*/
				page: 1,
				/*每页条数*/
				list_rows: 10,
				/*有没有等多*/
				no_more: false,
				/*是否正在加载*/
				loading: true,
				/*是否显示核销二维码*/
				isCodeImg: false,
				codeImg: '',
				/*是否显示支付宝支付，只有在h5，非微信内打开才显示*/
				showAlipay: false,
				isfirst: false
			};
		},
		onReachBottom() {
			let self = this
			// console.log("//////////////");
			/*获取订单列表*/
			self.page++
			self.getData();
			// console.log("//////////////");
		},
		computed: {
			/*加载中状态*/
			loadingType() {
				if (this.loading) {
					return 1;
				} else {
					if (this.listData.length != 0 && this.no_more) {
						return 2;
					} else {
						return 0;
					}
				}
			}
		},
		onLoad(e) {
			if (typeof e.dataType != 'undefined') {
				this.dataType = e.dataType;
			}

			if (this.dataType == 'payment') {
				this.state_active = 1;
			} else if (this.dataType == 'received') {
				this.state_active = 3;
			} else if (this.dataType == 'comment') {
				this.state_active = 4;
			} else if (this.dataType == 'delivery') {
				this.state_active = 2;
			} else if (this.dataType == 'examine') {
				this.state_active = 5;
			} else if (this.dataType == 'haveInHand') {
				this.state_active = 6;
				this.tabNumber = 170
			} else if (this.dataType == 'returned') {
				this.state_active = 7;
			} else if (this.dataType == 'Returning') {
				this.state_active = 9;
			} else if (this.dataType == 'cancel') {
				this.state_active = 8;
			} else if (this.dataType == 'complete') {
				this.state_active = 10;
				this.tabNumber = 320
			} else if (this.dataType == 'yuqi') {
				this.state_active = 12;
			} else if (this.dataType == 'canceling') {
				this.state_active = 13;
			}
		},
		mounted() {
			this.init();
			this.initData();
			/*获取订单列表*/
			this.getData();
			this.tokendata = uni.getStorageSync('token');
			console.log("tokendata", this.tokendata);
		},
		onShow() {
			if (this.isfirst) {
				this.initData();
				this.getData();
			}
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
									this.tokendata = uni.getStorageSync('token');
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
			/*查账单*/
			gotoZhangdan(id) {
				// console.log("点击了查账单",id);
				uni.navigateTo({
					url: "/pages/order/CXbill?order_id=" + id
				})
			},
			/*查看物流*/
			gotoExpress(order_id) {
				this.gotoPage('/pages/order/express/express?order_id=' + order_id);
			},
			/*取消订单确认*/
			queding() {
				let self = this;
				// console.log(JSON.stringify(self.checkboxValue1), self.order_id);
				let reason = JSON.stringify(self.checkboxValue1);
				// return
				let status = ""
				if (self.state_text == "待发货") {
					status = 1
				} else {
					status = 0
				}
				uni.showLoading({
					title: '正在处理'
				});
				self._get(
					'user.order/cancel', {
						order_id: self.order_id,
						reason: reason,
						status: status
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
			checkboxChange() {
				// console.log(this.checkboxValue1);
			},
			close() {
				this.showqx = false;
			},
			qrz(id) {
				uni.navigateTo({
					url: '/pages/order/smrz?order_id=' + id
				})
			},
			// 去支付
			payyj(id) {
				uni.navigateTo({
					url: '/pages/order/order-detail?order_id=' + id
				})
				/* // console.log(id);
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
								uni.navigateTo({
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
					}) */
			},
			initData() {
				let self = this;
				self.page = 1;
				self.listData = [];
				self.no_more = false;
			},
			/*初始化*/
			init() {
				let self = this;
				uni.getSystemInfo({
					success(res) {
						self.phoneHeight = res.windowHeight;
						// 计算组件的高度
						let view = uni.createSelectorQuery().in(self).select('.top-tabbar');
						view.boundingClientRect(data => {
							let h = self.phoneHeight - data.height;
							self.scrollviewHigh = h;
						}).exec();
					}
				});
			},
			earlyTermination(order_id) {
				this._post('/order.order/earlyEnd', {
					order_id: order_id
				}, res => {
					if (res.code == 124) {
						// console.log("成功")
						uni.showToast({
							title: res.msg,
							icon: 'none',
						})
						this.listData = [];
						this.getData();
						return
					} else {
						pay(res, this);
					}

				})


			},
			/*状态切换*/
			stateFunc(e) {
				let self = this;
				console.log(self.listData, 'order')
				if (self.state_active != e) {
					self.page = 1;
					self.loading = true;
					self.state_active = e;
					switch (e) {
						case 0:
							self.listData = [];
							self.dataType = 'all';
							break;
						case 1:
							self.listData = [];
							self.dataType = 'payment';
							break;
						case 2:
							self.listData = [];
							self.dataType = 'delivery';
							break;
						case 3:
							self.listData = [];
							self.dataType = 'received';
							break;
						case 4:
							self.listData = [];
							self.dataType = 'comment';
							break;
						case 5:
							// 待审核
							self.listData = [];
							self.dataType = 'examine';
							break;
						case 6:
							// 租赁中
							self.listData = [];
							self.dataType = 'haveInHand';
							break;
						case 7:
							// 待归还
							self.listData = [];
							self.dataType = 'returned';
							break;
						case 8:
							// 已取消
							self.listData = [];
							self.dataType = 'cancel';
							break;
						case 9:
							// 归还中
							self.listData = [];
							self.dataType = 'Returning';
							break;
						case 10:
							// 已完成
							self.listData = [];
							self.dataType = 'complete';
							break;
						case 11:
							// 已驳回
							self.listData = [];
							self.dataType = 'reject';
							break;
						case 12:
							// 已逾期
							self.listData = [];
							self.dataType = 'yuqi';
							break;
						case 13:
							// 取消中
							self.listData = [];
							self.dataType = 'canceling';
							break;

					}
					self.getData();
				}
			},

			/*可滚动视图区域到底触发*/
			scrolltolowerFunc() {
				let self = this;
				if (self.no_more) {
					return;
				}
				self.page++;
				if (self.page <= self.last_page) {
					self.getData();
				} else {
					self.no_more = true;
				}
			},

			/*获取数据*/
			getData() {
				// console.log("token",uni.getStorageSync('token'));
				if (!uni.getStorageSync('token')) {
					this.loading = false;
					return
				}
				let self = this;
				self.loading = true;
				let dataType = self.dataType;
				if (dataType == "yuqi") {
					self._get(
						'user.order/yqlists', {
							page: self.page,
							pay_source: self.getPlatform(),
							list_rows: self.list_rows
						},
						function(res) {
							self.loading = false;
							self.listData = self.listData.concat(res.data.list.data);
							console.log(self.listData, 'renz')
							self.last_page = res.data.list.last_page;
							// console.log(self.listData,"self.listDataself.listData");
							// let listData = self.listData;
							// for (var i = 0; i < listData.length; i++) {
							// 	// console.log("listData",listData[i].pay_price,listData[i].zhuanzujin,listData[i].deposit);
							// 	var edeposit = listData[i].deposit;
							// 	var ezhuanzujin = listData[i].zhuanzujin;
							// 	var epay_price = listData[i].pay_price;
							// 	// self.listData[i].pay_price = (Number(epay_price) -  Number(edeposit) - Number(ezhuanzujin)).toFixed(2);
							// 	// console.log(self.listData[i].pay_price,"结果");
							// }
							if (res.data.list.last_page <= 1) {
								self.no_more = true;
							} else {
								self.no_more = false;
							}
							if (res.data.show_alipay) {
								self.showAlipay = true;
							}
							self.isfirst = true;
							uni.stopPullDownRefresh()
						}
					);
				} else {
					self._get(
						'user.order/lists', {
							dataType: dataType,
							page: self.page,
							pay_source: self.getPlatform(),
							list_rows: self.list_rows
						},
						function(res) {
							self.loading = false;
							self.listData = self.listData.concat(res.data.list.data);
							self.last_page = res.data.list.last_page;
							// console.log(self.listData,"self.listDataself.listData");
							// let listData = self.listData;
							// for (var i = 0; i < listData.length; i++) {
							// 	// console.log("listData",listData[i].pay_price,listData[i].zhuanzujin,listData[i].deposit);
							// 	var edeposit = listData[i].deposit;
							// 	var ezhuanzujin = listData[i].zhuanzujin;
							// 	var epay_price = listData[i].pay_price;
							// 	// self.listData[i].pay_price = (Number(epay_price) -  Number(edeposit) - Number(ezhuanzujin)).toFixed(2);
							// 	// console.log(self.listData[i].pay_price,"结果");
							// }
							if (res.data.list.last_page <= 1) {
								self.no_more = true;
							} else {
								self.no_more = false;
							}
							if (res.data.show_alipay) {
								self.showAlipay = true;
							}
							self.isfirst = true;
							uni.stopPullDownRefresh()
						}
					);
				}

			},

			/*跳转页面*/
			gotoOrder(e) {
				this.gotoPage('/pages/order/order-detail?order_id=' + e);
			},
			// 去归还
			returned(order_id) {
				uni.navigateTo({
					url: './returned?order_id=' + order_id
				})
			},
			/*隐藏支付方式*/
			hidePopupFunc() {
				this.isPayPopup = false;
			},
			toShop(id) {
				this.gotoPage('/pages/shop/shop?shop_supplier_id=' + id);
			},
			/*去支付*/
			payTypeFunc(payType) {
				let self = this;
				self.isPayPopup = false;
				uni.showLoading({
					title: '加载中'
				});
				self._post(
					'user.order/pay', {
						payType: payType,
						order_id: self.order_id,
						pay_source: self.getPlatform()
					},
					function(res) {
						pay(res, self);
					}
				);
			},

			/*支付方式选择*/
			onPayOrder(orderId) {
				let self = this;
				let use_balance = self.balanceType == true ? 1 : 0;
				let params = {
					order_id: orderId,
					pay_source: self.getPlatform(),
					payType: 30,
					use_balance: use_balance,
				}
				self._post('user.order/pay', params,
					function(res) {
						self.loading = false;
						uni.hideLoading();
						pay(res, self, self.paySuccess, self.payError);
						return;
						uni.requestPayment({
							provider: 'alipay',
							orderInfo: res.data.alipay_trade_create_response.trade_no,
							success(res) {
								// console.log(res, "成功！")
							},
							fail(error) {
								// console.log(error);
							},
						});
					})
				// self.gotoPage('/pages/order/cashier?order_type=1&order_id=' + orderId);
			},
			paySuccess(result) {
				let self = this;
				// console.log(result, "看看下")
				if (self.order_type == 30 || self.order_type == 40) {
					self.showSuccess("支付成功", function() {
						uni.navigateBack();
					})
				} else if (self.order_type == 20) {
					self.showSuccess("支付成功", function() {
						self.gotoPage('/pages/user/my_shop/my_shop', 'reLaunch');
					})
				} else {
					// 支付成功
					self.gotoPage('/pages/order/pay-success/pay-success?order_id=' + result.data.order_id[0],
						'reLaunch');
				}

			},
			payError(result) {
				let self = this;
				let url = '/pages/order/myorder';
				if (self.order_type == 30 || self.order_type == 40) {
					uni.navigateBack();
				} else if (self.order_type == 20) {
					self.gotoPage('/pages/user/my_shop/my_shop', 'redirect');
				} else if (self.order_type == 1) {
					// 支付失败/取消支付
					uni.showToast({
						title: '您取消了支付',
						icon: 'none',
						success() {
							uni.navigateBack();
						}
					})
				}

			},
			/*确认收货*/
			orderReceipt(order_id) {
				let self = this;
				uni.showModal({
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
									self.listData = [];
									self.getData();
								}
							);
						} else {
							uni.showToast({
								title: '取消收货',
								duration: 1000,
								icon: 'none'
							});
						}
					}
				});
			},
			// 补充信息
			bcxx() {
				uni.navigateTo({
					url: "/pages/user/authentication"
				})
			},

			/*取消订单*/
			cancelOrder(e, item) {
				console.log(item.state_text);
				let self = this;
				let order_id = e;
				self.order_id = e;
				self.state_text = item.state_text;
				this.showqx = true;
				// uni.showModal({
				// 	title: '提示',
				// 	content: '您确定要取消吗?',
				// 	success: function(o) {
				// 		if (o.confirm) {
				// 			uni.showLoading({
				// 				title: '正在处理'
				// 			});
				// 			self._get(
				// 				'user.order/cancel', {
				// 					order_id: order_id
				// 				},
				// 				function(res) {
				// 					uni.hideLoading();
				// 					uni.showToast({
				// 						title: '操作成功',
				// 						duration: 2000,
				// 						icon: 'success'
				// 					});
				// 					self.listData = [];
				// 					self.getData();
				// 				}
				// 			);
				// 		}
				// 	}
				// });
			},

			/*去评论*/
			gotoEvaluate(e) {
				this.gotoPage('/pages/order/evaluate/evaluate?order_id=' + e);
			},

			/*核销码*/
			onQRCode(e) {
				let self = this;
				uni.showLoading({
					title: '加载中'
				});
				let order_id = e;
				let source = self.getPlatform();
				self._get(
					'user.order/qrcode', {
						order_id: order_id,
						source: source
					},
					function(res) {
						uni.hideLoading();
						self.isCodeImg = true;
						self.codeImg = res.data.qrcode;
					}
				);
			},
			/*关闭核销二维码*/
			hideCodePopupFunc() {
				this.isCodeImg = false;
			},

			/*分享拼团*/
			gotoAssembleShare(e) {
				this.gotoPage('/pages/plus/assemble/fight-group-detail/fight-group-detail?assemble_bill_id=' + e);
			}
		}
	};
</script>

<style lang="scss">
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

	.contact_button {
		border: 1px solid #000000;
		border-radius: 10rpx;
		width: 160rpx;
		height: 60rpx;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 22rpx;
		color: #000000;
	}

	.contact_button text {
		margin-right: 10rpx;
	}

	page {
		background-color: #f2f2f2;
	}

	.top-tabbar {
		white-space: nowrap;
	}

	.order-list .order-head .state-text {
		padding: 10rpx 12rpx;
		margin-right: 21rpx;
		border-radius: 4rpx;
		background: #FFE7E4;
		font-size: 22rpx;
		color: #F6220C;
	}

	.shop-name {
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}

	.order-list .item {
		margin-bottom: 30rpx;
		padding: 30rpx;
		background: #ffffff;
	}

	.order-list .product-list,
	.order-list .one-product {
		padding: 30rpx 0 27rpx 0;
		height: 150rpx;
	}

	.one-product .pro-info {
		padding: 0 21rpx 0 37rpx;
		display: -webkit-box;
		width: 361rpx;
		overflow: hidden;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 26rpx;
		color: #333333;
	}

	.order-list .cover,
	.order-list .cover image {
		width: 150rpx;
		height: 150rpx;
		border-radius: 8rpx;
	}

	.order-list .total-count {
		padding-left: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
	}

	.total-count .count {
		padding-top: 16rpx;
		color: #999999;
		font-size: 22rpx;
	}

	.count2 {
		padding-top: 16rpx;
		color: black;
		font-size: 26rpx;
	}

	.product-list .total-count {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		background: rgba(255, 255, 255, 0.9);
	}

	.product-list .total-count .left-shadow {
		position: absolute;
		top: 0;
		bottom: 0;
		left: -24rpx;
		width: 24rpx;
		overflow: hidden;
	}

	.product-list .total-count .left-shadow::after {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 24rpx;
		right: -12rpx;
		display: block;
		content: '';
		background-image: radial-gradient(rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0) 80%);
	}

	.order-list .order-bts {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.order-list .order-bts button {
		margin: 0;
		padding: 0 20rpx;
		height: 50rpx;
		line-height: 50rpx;
		margin: 0 8rpx;
		margin-bottom: 2rpx;
		font-size: 22rpx;
		border: 1px solid #000000;
		border-radius: 5px;
		background: #ffffff;
		white-space: nowrap;
		color: #000000;
		font-family: PingFang SC;
		// border:none;
	}

	.order-list .order-bts button::after {
		display: none;
	}

	.order-list .order-bts button.btn-border-red {
		border: 1px solid $dominant-color;
		font-size: 24rpx;
		color: $dominant-color;
	}

	.order-list .order-bts button.btn-red {
		background: linear-gradient(90deg, #FF6B6B 4%, #F6220C 100%);
		border-radius: 30rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		color: #ffffff;
		border: none;
	}

	.buy-checkout {
		width: 100%;
	}

	.buy-checkout .item {
		min-height: 50rpx;
		line-height: 50rpx;
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
	}

	.buy-checkout .iconfont.icon-weixin {
		color: #04be01;
		font-size: 50rpx;
	}

	.buy-checkout .iconfont.icon-yue {
		color: #f0de7c;
		font-size: 50rpx;
	}

	.buy-checkout .item.active .iconfont.icon-xuanze {
		color: #04be01;
	}

	.item-dianpu {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		line-height: 30rpx;
	}

	.item-dianpu .icon-jiantou {
		font-size: 24rpx;
		color: #333333;
	}

	.item-d-l {
		display: flex;
	}

	.icon-dianpu1 {
		margin-right: 20rpx;
		color: #333333;
		font-size: 32rpx;
	}

	.tab-item {
		flex: 1;
		height: 96rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		color: #999999;
		margin: 0 20rpx;

	}

	.tab-item:nth-last-child(1) {
		padding-right: 50rpx;
	}
</style>