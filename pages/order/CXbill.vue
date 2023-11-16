<template>
	<view v-if="!loadding">
		<!-- 分期付款 -->
		<view class="group bg-white f26" v-if="detail.order_status.value == 10">
			<view class="items p-20-0" v-for="(item,index) in orderBill" :key="item.bill_id">
				<view>第{{item.current_period}}期</view>
				<view>{{item.repayment_date | formatDate}}</view>
				<view style="display: flex;align-items: center;width: 200rpx;justify-content: space-between;">
					<view class="price">{{item.price}}</view>
					<view v-if="item.is_pay_status == 0">
						<view v-if="item.xxx == true" class="btns" @click="submit(item.bill_id)">去付款</view>
						<view v-else class="btns2">去付款</view>
					</view>
					
					<view v-else-if="item.is_pay_status ==  2">
						<view v-if="item.xxx == true" class="btns4" @click="submit(item.bill_id)">已逾期</view>
						<view v-else class="btns2">去付款</view>
					</view>
					<view v-else class="btns3">已付款</view>
				</view>
			</view>
			<view class="items p-20-0" v-if='detail.lease_type == 2'>
				<view>买断价</view>
				<view>-</view>
				<view style="display: flex;align-items: center;width: 200rpx;justify-content: space-between;">
					<view class="price">{{detail.buyOutPrice}}</view>
					<view v-if="detail.maiduan_no == ''" class="btns" @click="maiduan(detail.order_id)">去付款</view>
					<view v-else class="btns3">已付款</view>
				</view>
			</view>
			<view class="shujudata">
				<view>
					已支付：￥{{priceJg}}
				</view>
				<view>
					需支付：￥{{xzf}}
				</view>
				<view>
					买断价：￥{{detail.buyOutPrice}}
				</view>
				<view>
					总租金：￥{{(detail.pay_price - detail.deposit - detail.zhuanzujin).toFixed(2)}}
				</view>
			</view>

		</view>

		<Mpservice v-if="isMpservice" :isMpservice="isMpservice" :shopSupplierId="detail.supplier.shop_supplier_id"
			@close="closeMpservice"></Mpservice>
	</view>
</template>

<script>
	import Popup from '@/components/uni-popup.vue';
	import {
		pay
	} from '@/common/pay.js';
	import Mpservice from '@/components/mpservice/Mpservice.vue';
	export default {
		data() {
			return {
				xzf: '',
				qurzshow: true,
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
		onLoad(e) {
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
		methods: {
			close() {
				this.showqx = false;
			},
			fuzhi(nr) {
				console.log(nr);
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
				console.log(id);
				let self = this;
				self._post('/order.order/pay', {
						order_id: id
					},
					function(res) {
						console.log(res, "res");
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
						var dsp = 0;
						if (res.data.order.hasrenzheng_id) {
							if (dsp < 10) {
								self.timer = setInterval(function() {
									dsp += 1
									if (dsp > 3) {
										clearInterval(self.timer);
										self.timer = null;
									}
									self._post(
										'order.authentication/queryAuthentication', {
											hasrenzheng_id: res.data.order.hasrenzheng_id,
										},
										function(result) {
											if (result.code == 1) {
												clearInterval(self.timer);
												self.timer = null;
												self.qurzshow = false;
											}

										}
									);

								}, 1000);
							} else {
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
						console.log("detail", self.detail.product[0].product_attr);
						var str2 = self.detail.product[0].product_attr;
						// console.log(str2.indexOf("不") != -1, str2, "是否存在");
						if (str2.indexOf("不") != -1) {
							console.log("存在");
							self.suiping = false;
						} else {
							self.suiping = true;
						}
						self.detail.buyOutPrice = res.data.buyOutPrice;
						self.start_time = self.detail.create_time;
						let str1 = self.detail.create_time;
						if (str1.indexOf("2023") != -1) {
							// console.log("存在");
							// console.log(str1.replace(/2023/,"2024"));
							self.end_time = str1.replace(/2023/, "2024");
						}
						self.orderBill = res.data.orderBill
						self.extractStore = res.data.order.extractStore;
						self.service_open = res.data.setting.service_open;
						console.log(res.data.order.deposit, res.data.order.yushou, res.data.order.zhuanzujin, "开始3");
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
						if (res.data.order.auth_no == '') {
							depositdata = 0;
						}
						let ysqyjze = Number(zhuanzujinData) + Number(depositdata);
						let numTitol1 = Number(depositdata) + Number(yushoudata) + Number(zhuanzujinData);
						let orderBill = res.data.orderBill;
						let priceJg = 0;
						let priceWF = 0;
						let payable = 0;
						let xzf = 0;
						for (var i = 0; i < orderBill.length; i++) {
							xzf = Number(xzf) + Number(orderBill[i].price);
							if (orderBill[i].is_pay_status == 1) {
								priceJg = Number(priceJg) + Number(orderBill[i].price);
								if (orderBill[i].transaction_id != null) {
									payable = Number(payable) + Number(orderBill[i].price);
									console.log(orderBill[i].transaction_id, "orderBill[i].transaction_id ");
								}
							}
							if (orderBill[i].is_pay_status == 0) {
								priceWF = Number(priceWF) + Number(orderBill[i].price);
							}

							if (orderBill[i].is_pay_status == 0 || orderBill[i].is_pay_status == 2) {
								// console.log("i",i);
								if (i >= 1) {
									if (orderBill[i - 1].is_pay_status != 1) {
										orderBill[i].xxx = false;
									} else {
										orderBill[i].xxx = true;
									}
								} else {
									orderBill[i].xxx = true;
								}
							}


						}
						self.xzf = Number(xzf - priceJg).toFixed(2);
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
						self.detail.total_price = (Number(self.detail.total_price) - Number(depositdata) - Number(
							zhuanzujinData)).toFixed(2);
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
						console.log("成功")
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

			/*去支付*/
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



		}
	};
</script>

<style scoped lang="scss">
	.shujudata {
		view{
			font-family: 'Adobe Heiti Std R';
			font-weight: bold;
			font-size: 30rpx;
			color: #121116;
		}
		
	}

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
</style>
