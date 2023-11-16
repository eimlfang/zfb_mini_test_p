<template>
	<view class="wrap" :data-theme='theme()' :class="theme() || ''" v-if="!loading">

		<u-notice-bar text="羊毛党清勿下单,恶意欠租法务会起诉,禁止未成年人下单!"></u-notice-bar>
		<Myinfo @changestates=changestates :Address="Address" :exist_address="exist_address"></Myinfo>
		<!--购买的产品-->
		<view class="vender">
			<view class="list">
				<view v-for="(supplier_item, supplier_index) in ProductData" :key="supplier_index">
					<!-- <view class="sup_itemtit" v-if="store_open">
						<i class="icon iconfont icon-dianpu1"></i>
						<view class="f26 gray3">
							{{supplier_item.supplier.name}}
						</view>
					</view> -->
					<view class="item" v-for="(item, index) in supplier_item.productList" :key="index">
						<view class="d-f">
							<view class="cover">
								<image :src="item.product_image" mode="aspectFit"></image>
							</view>
							<view class="info">
								<view class="d-b-s">
									<view class="flex-1">
										<view class="title f32 gray3"
											style="font-size: 24rpx; font-weight: 500;width: 100%;">
											{{ item.product_name }}
										</view>
										<!-- 	<view class="theme-price mt10 f18">
											¥<text class="f26">{{ item.product_price }}</text>
										</view> -->
										<view class="describe mt10 f24" style="font-size: 23rpx;width: 100%;">
											{{ item.product_sku.product_attr }}
										</view>
									</view>
									<view>
										<!-- 	<view class=" count_choose">
											<view class="num-wrap">
												<view class="f22 tr">×{{ item.total_num }}</view>
											</view>
										</view> -->
									</view>
								</view>
							</view>
						</view>
						<!-- <view class="mt10 tr f28" v-if="item.is_user_grade==true">
							<text class="f26">会员折扣价：</text>
							<text class="theme-price f32">￥{{item.grade_product_price}}</text>
						</view>
						<view class="mt10 tr f28" v-if="item.product_reduce_money > 0">
							<text class="f26">立减：</text>
							<text class="theme-price f32">￥{{item.product_reduce_money}}</text>
						</view> -->
					</view>

					<!-- <view class="d-f-c">
						<view v-if="supplier_item.orderData.delivery==10" @tap="DistUp(supplier_item)">
							配送方式 <text class="extp">普通快递</text>
						</view>
						<view v-if="supplier_item.orderData.delivery==20" @tap="DistUp(supplier_item)">
							<view class="info d-s-s" style="padding-left: 0;">
								<text class="zt theme-btn">当前自提点</text>
								<view class="province-c-a d-s-s flex-1">
									<text>{{ store_list[supplier_item.shop_supplier_id]}}</text>
								</view>
							</view>
						</view>
						<view v-if="supplier_item.orderData.delivery==30">
							虚拟商品：无需物流
						</view>
						<view class="dfjac" v-if="supplier_item.orderData.delivery!=30" @tap="DistUp(supplier_item)">
							<view v-if="supplier_item.orderData.delivery==10">
								{{supplier_item.orderData.express_price != 0?"￥ "+supplier_item.orderData.express_price:"快递 免费"}}
							</view>
							<i class='iconfont icon-jiantou'></i>
						</view>
					</view> -->
					<!-- <view class="d-f-c" v-if="!OrderData.force_points">
						<view class="">优惠券</view>
						<block v-if="objKeys(supplier_item.orderData.couponList,1) > 0">
							<text class="vlaue theme-price" v-if="supplier_item.orderData.coupon_money> 0"
								@tap="onTogglePopupCoupon(supplier_item.orderData.couponList,supplier_item)">-￥{{supplier_item.orderData.coupon_money}}</text>
							<text v-else class="vlaue theme-price"
								@tap="onTogglePopupCoupon(supplier_item.orderData.couponList,supplier_item)">有{{ objKeys(supplier_item.orderData.couponList,1)}}张优惠券可用<i
									class='iconfont icon-jiantou'></i></text>
						</block>
						<text v-else class="f24 gray9">无优惠券可用</text>
					</view> -->
					<!-- <view class="d-f-c" v-if="supplier_item.orderData.reduce">
						<view>店铺{{supplier_item.orderData.reduce.active_name}}</view>
						<view class="theme-price f24">
							-￥{{supplier_item.orderData.reduce.reduced_price}}
						</view>
					</view> -->
					<!-- <view v-if="is_use_points==1&&!OrderData.force_points&&supplier_item.orderData.points_money>0">
						<view class="d-f-c">
							<view>积分抵扣金额</view>
							<view class="theme-price f24">-￥{{supplier_item.orderData.points_money}}</view>
						</view>
					</view> -->

					<!--总数-->
					<!-- <view class="total-box vthl"> -->
					<!-- <view>
							<text class="f26 gray3">共{{supplier_item.productList.length}}件商品,总价:</text>
							<text class="f20 gray3">￥</text>
							<text class="f26 gray3">{{ supplier_item.orderData.order_total_price }}</text>
						</view>
						<view class="d-f">
							<view class="f26" v-if="!OrderData.force_points">
								实付款：<text class="theme-price f20">￥</text><text class="price theme-price"
									style="font-size: 32rpx;">{{toDecimal2(supplier_item.orderData.order_pay_price)}}</text>
							</view>
						</view> -->
					<!-- <view class="biank">
							<image src="../../static/hha/s.png">
								<view class="sp">
									<view class="sp1">
										{{start_time}}
									</view>
								</view>
						</view>
						<view class="biank2">
							<image src="../../static/hha/h.jpg">
								<view class="sp3">
									{{end_time}}
								</view>
						</view> -->
					<!-- </view> -->

					<view class="qz">
						<view class="biank3">
							<view class="cont">
								<view class="">
									预计起租日
								</view>
								<view class="sp1">
									{{lease_time.estimated_start_date}}
								</view>
							</view>
						</view>

						<view class="biank3">
							<view class="cont">
								<view class="">
									到期日
								</view>
								{{lease_time.expected_end_date}}
							</view>
						</view>
					</view>




					<view class="tis">
						<view class="tishi">提示：一般货物会在24小时内发出，如有特殊情况，客服会主动联系告知；快递运输期间不算租期，实际起租日为订单日后推3天.</view>
					</view>

					<view class="d-f-c">
						<view class="ww100">
							<view class="meiridata">
								<view class="yjmr">预计每日</view>
								<view class="yjmr">￥{{realVal}}</view>
							</view>

							<view v-if="suiping" class="suiping1">
								<view class="texts">
									<view>首期租金</view>
									<view>￥{{prices}}</view>
								</view>
								<view class="texts">
									<view>剩余租金</view>
									<view>￥{{lease_time.remaining_lease_term}}</view>
									
								</view>
								<view class="texts">
									<view>押金</view>
									<view>{{lease_time.deposit.toFixed(2)}}</view>
								</view>
								<view class="texts">
									<view>总租金</view>
									<view>￥{{lease_time.line_price}}</view>
								</view>
								<!-- <view class="texts">
									<view>配送方式</view>
									<view>寄出包邮/顺丰包邮</view>
								</view> -->
								<!-- <view class="texts">
									<view>碎屏换新</view>
									<view>￥365</view>
								</view> -->
							</view>

							<view v-else class="suiping1">
								<view class="texts">
									<view>首期租金</view>
									<view>￥{{prices}}</view>
								</view>
								<view class="texts">
									<view>押金</view>
									<view>￥{{lease_time.deposit.toFixed(2)}}</view>
								</view>
								<view class="texts">
									<view>剩余租金</view>
									<view>{{lease_time.remaining_lease_term}}</view>
									<!-- <view>￥{{prices}}*{{qishu}}期</view> -->
								</view>
								<view class="texts">
									<view>总租金</view>
									<view>￥{{lease_time.line_price}}</view>
								</view>
								<!-- <view class="texts" @click="isShowT()"> -->
								<!-- <view class="texts">
									<view>配送方式</view>
									<view>寄出包邮/顺丰包邮</view>
								</view> -->

							</view>
							<view class="texts2" v-if="zmshow1 == 1">
								<view class="top">总押金</view>
								<view class="xia">芝麻信用▪有机会免押</view>
							</view>
						</view>
					</view>
					<!-- 修改配送方式弹框 -->
					<!-- <Delivery></Delivery> -->
					<!-- 押金 -->
					<!-- <view class="d-f-c">
						<view class="ww100">
							<view style="display: flex;justify-content: space-between;">
								<view class="mb20" style="font-size: 28rpx;">商品押金</view>

								<view style="color: #E7474C;font-size: 28rpx;">￥{{lease_time.deposit}}</view>
							</view>
						</view>
					</view> -->
					<!--空格-->
					<view class="kongke"></view>

					<!--优惠卷
					<view class="yangshi" @click="youhui()">
						<view class="yhj1" style="font-size: 28rpx;">优惠券</view>
						<view class="yhj2">0张可用</view>
					</view>-->
					<!--空格-->
					<view class="kongke"></view>
					<!--到期完结-->
					<view v-if="lease_type=='2'" class="dao">
						<view class="dao1">到期完结</view>
						<view class="dao2">{{buy_out_price}}</view>
					</view>
					<view class="dao" v-else>
						<view class="dao1">到期完结</view>
						<view class="dao2">0.00</view>
					</view>
					<view class="kongke"></view>
					<!--优惠卷的弹窗
					<view class="youhui1">
						<u-popup :show="show1" @close="close1" @open="open1" closeable=true>
							<view class="tanchuang">
								<view class="shuju">优惠券</view>
							</view>
						</u-popup>
					</view>-->
					<view class="item" v-if="OrderData.is_coupon">
						<text class="key"
							style="font-size: 34rpx;font-weight: bold;font-family: 'Adobe Heiti Std R';">平台优惠券：</text>
						<block v-if="coupon_num > 0">
							<text class="f24  theme-price" v-if="OrderData.coupon_money_sys > 0"
								@tap="onTogglePopupCoupon(coupon_list,0)">-￥{{OrderData.coupon_money_sys}}</text>
							<text v-else class="f24  theme-price"
								@tap="onTogglePopupCoupon(coupon_list,0)">有{{ coupon_num }}张优惠券可用</text>
						</block>
						<text v-else class="f24 gray9">无优惠券可用</text>
					</view>
					<view class="item" v-if="OrderData.product_reduce_money > 0">
						<text class="key">商品立减：</text>
						<view>
							<text class="theme-price f24">-￥{{ OrderData.product_reduce_money }}</text>
						</view>
					</view>
					<view class="item" style="display: flex;justify-content: space-between;align-items: center;"
						v-if="OrderData.is_use_points && OrderData.force_points == false &&OrderData.points_money != 0">
						<text class="key">可用积分抵扣：</text>
						<view class="">
							<text class="theme-price f24">-￥{{toDecimal2(OrderData.points_money)}}</text>
							<switch style="transform: scale(0.7); margin-right: -10rpx;" checked=true
								@change="onShowPoints" />
						</view>
					</view>

					<view class="kongke"></view>
					<!--还款计划-->
					<view class="zkjh" @click="huankuan()">
						<view class="huankuanjihua">租赁计划</view>
						<view class="xkh">
							<u-icon name="arrow-right"></u-icon>
						</view>
					</view>
					<view class="kongke"></view>
					<!--还款计划的弹窗-->

					<view class="huankuanjihua1">
						<u-popup :show="show2" mode="bottom" @close="close2" @open="open2" closeable=true>
							<view class="tanchuang1" v-for="(item,index) in lease_time.number_of_periods" :key="index">
								<template v-if="index==0">
									<view class="shuju1">
										第{{index+1}}期
										<text class="stime">{{start_time}} </text>
										-￥{{lease_time.end_period_price }}
									</view>
								</template>
								<template v-else-if="index==1">
									<view class="shuju1">
										第{{index+1}}期
										<text class="stime">{{time2}} </text>
										-￥{{lease_time.end_period_price }}
									</view>
								</template>
								<template v-else-if="index==2">
									<view class="shuju1">
										第{{index+1}}期
										<text class="stime">{{time3}} </text>
										-￥{{lease_time.end_period_price }}
									</view>
								</template>
								<template v-else-if="index==3">
									<view class="shuju1">
										第{{index+1}}期
										<text class="stime">{{time4}} </text>
										-￥{{lease_time.end_period_price }}
									</view>
								</template>
								<template v-else-if="index==4">
									<view class="shuju1">
										第{{index+1}}期
										<text class="stime">{{time5}} </text>
										-￥{{lease_time.end_period_price }}
									</view>
								</template>
								<template v-else-if="index==5">
									<view class="shuju1">
										第{{index+1}}期
										<text class="stime">{{time6}} </text>
										-￥{{lease_time.end_period_price }}
									</view>
								</template>
								<template v-else-if="index==6">
									<view class="shuju1">
										第{{index+1}}期
										<text class="stime">{{time7}} </text>
										-￥{{lease_time.end_period_price }}
									</view>
								</template>
								<template v-else-if="index==7">
									<view class="shuju1">
										第{{index+1}}期
										<text class="stime">{{time8}} </text>
										-￥{{lease_time.end_period_price }}
									</view>
								</template>
								<template v-else-if="index==8">
									<view class="shuju1">
										第{{index+1}}期
										<text class="stime">{{time9}} </text>
										-￥{{lease_time.end_period_price }}
									</view>
								</template>
								<template v-else-if="index==9">
									<view class="shuju1">
										第{{index+1}}期
										<text class="stime">{{time10}} </text>
										-￥{{lease_time.end_period_price }}
									</view>
								</template>
								<template v-else-if="index==10">
									<view class="shuju1">
										第{{index+1}}期
										<text class="stime">{{time11}} </text>
										-￥{{lease_time.end_period_price }}
									</view>
								</template>
								<template v-else-if="index==11">
									<view class="shuju1">
										第{{index+1}}期
										<text class="stime">{{time12}} </text>
										-￥{{lease_time.end_period_price }}
									</view>
								</template>
								<!-- <template v-else>
									<view class="shuju1" v-show="index==1">
										第{{index+1}}期
										<text class="stime">{{item2}} </text>
										-￥{{lease_time.end_period_price }}
									</view>
									<view class="shuju1" v-show="index==2">
										第{{index+1}}期
										<text class="stime">{{item3}} </text>
										-￥{{lease_time.end_period_price }}
									</view>
									<view class="shuju1" v-show="index==3">
										第{{index+1}}期
										<text class="stime">{{item4}} </text>
										-￥{{lease_time.end_period_price }}
									</view>
								</template> -->
							</view>
							<!-- <view v-if="periods=='3'" class="tanchuang1">
								<view class="shuju1">
									第一期
									<text class="stime">{{start_time}} </text>
									-￥{{lease_time.end_period_price }}
								</view>
								<view class="shuju1">
									第二期
									<text class="stime">{{time2}} </text>
									-￥{{lease_time.end_period_price}}
								</view>
								<view class="shuju1">
									第三期
									<text class="stime">{{time3}} </text>
									-￥{{lease_time.end_period_price}}
								</view>
							</view> -->
						</u-popup>
					</view>

					<view class="ding1">
						<view class="ww100">
							<view class="mb20" style="font-size: 34rpx;font-weight: bold;">订单备注</view>
							<view>
								<u--textarea v-model="store_data[supplier_item.shop_supplier_id].remark"
									placeholder="选填,请先和商家协商一致"></u--textarea>
								<!-- <textarea v-model="store_data[supplier_item.shop_supplier_id].remark" placeholder="选填,请先和商家协商一致" class="text_area" /> -->
							</view>
						</view>
					</view>

				</view>
			</view>
		</view>
		<!--其它费用-->
		<view class="buy-checkout">
			<view class="item">
				<radio-group @change="radioChange">
					<label>
						<radio value="t" checked="true" />
					</label>
				</radio-group>
				<view class="tongyi">
					<text class="tongyi1">我已阅读并同意</text>
					<text class="tongyi2" @click="fuwu()">“租赁服务及相关协议”</text>
					<!-- 与<text style="color:#56D5C8;" @click="ysi()">“隐私协议”</text> -->
				</view>
			</view>

			<block v-if="tokendata == ''">
				<view class="confirmdata">
					<button class="confirm-btn" @getAuthorize="onGetAuthorize1" open-type="getAuthorize"
						scope="phoneNumber" onError="handleAuthError">
						授权登录审核
					</button>
				</view>
			</block>
			<block v-else>
				<view class="tjshkdData">
					<button type="primary" v-if='zfshow>0' class="tjshkd">提交审核</button>
					<button type="primary" v-else @click="tzxs()" class="tjshkd">提交审核</button>
				</view>
			</block>

		</view>
		<!--底部提交-->
		<!--  -->
		<!-- <view class="foot-pay-btns"> -->
		<!-- <view class="price" v-if="!OrderData.force_points">
				¥
				<text class="num">{{ Number(OrderData.order_pay_price) + Number(lease_time.deposit)}}</text>
			</view>
			<view class="price" v-if="OrderData.force_points">
				<text class="gray9">所需积分</text>
				<text class="num theme-price fb">{{ ProductData[0].orderData.points_num }}</text>
			</view> -->
		<!-- <button type="primary" @tap="SubmitOrder">提交订单</button> -->
		<!-- </view> -->

		<!--优惠券-->
		<Coupon :isCoupon="isCoupon" :couponList="couponList" @close="closeCouponFunc"></Coupon>
		<Dist :isDist="isDist" :chooseSotr="chooseSotr" @close="closeDistFunc" :extract_store="extract_store"
			:last_extract="last_extract" :deliverySetting="deliverySetting"></Dist>

		<view class="smrztkdata">
			<u-popup :show="showdd" mode="top" @close="close">
				<view class="item1">
					<view class="content">
						<view>
							<image src="../../static/hha/sfztx.png"></image>
						</view>
						<view class="smrz">
							实名认证
						</view>
						<view class="smrz2">
							根据实名制下单要求，使用信用免押服务 <br> 前你需要通过实名认证，并授权如下信息
						</view>
					</view>
					<view class="bs_xx">
						<view class="sfxx">
							<view class="sfxx2">
								<view>
									姓名与支付宝实名认证信息相关联且不可更改
								</view>
								<view>
									提交既同意爱签采集人脸照片并提供给： xxx用于实名认证
								</view>
							</view>

							<view class="sfxx3">
								<view class="sfxx4">
									<view style="font-size: 30rpx;margin: 10rpx 0;">
										您的姓名：
									</view>
									<u--input placeholder="您的姓名" border="surround" v-model="value1"></u--input>
								</view>

								<view class="sfxx4">
									<view style="font-size: 30rpx;margin: 10rpx 0;">
										您的身份证号：
									</view>
									<u--input placeholder="您的身份证号" border="surround" v-model="value2"></u--input>
								</view>
							</view>
						</view>
						<view class="anniu">
							<u-button type="primary" text="确定" @click="queding()"></u-button>
						</view>
					</view>
				</view>
			</u-popup>
		</view>
		<view class="huankuanjihua1">
			<u-popup :show="show" closeable=true @close="close3" class="pop" style="height: 400rpx;">
				<view class="tanchuang1">
					<view style="height: 400rpx;">

					</view>
				</view>
			</u-popup>
		</view>

	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup.vue';
	import Myinfo from './confirm-order/my-info';
	import Coupon from './confirm-order/coupon';
	import Dist from './confirm-order/distr';
	import {
		pay
	} from '@/common/pay.js';

	export default {
		components: {
			Myinfo,
			Coupon,
			Dist
		},
		data() {
			return {
				show: false,
				periods: '',
				zfshow: 0,
				tokendata: "",
				suiping: false,
				buy_out_price: "",
				lease_type: "",
				order_total_price: "",
				realVal: "",
				order_total_num: "",
				zmshow1: "",
				ddids: "",
				value1: "",
				value2: "",
				showdd: false,
				show1: false,
				show2: false,
				res: '',
				/*是否加载完成*/
				loading: false,
				options: {},
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				/*商品id*/
				product_id: '',
				/*商品数量*/
				product_num: '',
				/*商品数据*/
				ProductData: [],
				/*订单数据数据*/
				OrderData: [],
				// 是否存在收货地址
				exist_address: false,
				/*默认地址*/
				Address: {
					region: []
				},
				extract_store: [],
				last_extract: {},
				product_sku_id: 0,
				/*配送方式*/
				delivery: 10,
				/*自提店id*/
				store_id: 0,
				/*优惠券id*/
				coupon_id: -1,
				/*是否使用积分,默认使用*/
				is_use_points: 1,
				remark: '',
				/*支付方式*/
				pay_type: 20,
				/*是否显示优惠券*/
				isCoupon: false,
				/*优惠券列表*/
				coupon_list: {},
				couponList: [],
				/*优惠券数量*/
				coupon_num: 0,
				/* 是否显示配送方式 */
				isDist: false,
				/*消息模板*/
				temlIds: [],
				/* 选择的地址 */
				// chooseAd:''
				product_couponid: 0,
				chooseSotr: 0,
				/* 支持的配送方式 */
				deliverySetting: [],
				choose_delivery: 10,
				store_data: {},
				// 当前店铺选择的门店
				choose_store_id: 0,
				store_list: {},
				room_id: '',
				/*是否显示支付宝支付，只有在h5，非微信内打开才显示*/
				showAlipay: false,
				balance: '',
				store_open: 1,
				isgreed: false,
				lease_time: {},
				start_time: '',
				end_time: '',
				states2: '',
				//租赁计划的分期
				time2: '',
				time3: '',
				time4: '',
				time5: '',
				time6: '',
				time7: '',
				time8: '',
				time9: '',
				time10: '',
				time11: '',
				time12: '',
				listdata: '',
				//时间控制器
				times: '',
				// 碎屏换新
				replacement: '',
				qishu: '',
				prices: ""
			};
		},
		onLoad(options) {
			console.log("进入页面时的打印options", options);

			let self = this;
			self.qishu = options.qishu
			self.prices = options.prices
			self.periods = options.periods
			self.zmshow1 = options.zmshow;
			self.tokendata = uni.getStorageSync('token');
			let time = parseInt(new Date().getTime() / 1000) + '';
			console.log("获取以秒为单位的时间戳", time)
			time = parseInt(time) + 86400 * 3;
			// time-86400000
			let end_time = time + 31536000
			console.log("第一次获取截至时间", end_time)
			end_time = self.getNowTime(end_time)
			console.log("第二次获取截至时间", end_time)
			//2592000   30天的秒数
			// self.end_time = end_time
			console.log("打印时间管理器", self.times)
			//第二期时间
			let time2 = time + 2592000
			time2 = self.getNowTime(time2)
			self.time2 = time2
			//第三期时间
			let time3 = time + 5184000
			time3 = self.getNowTime(time3)
			self.time3 = time3
			//第四期时间  90天
			let time4 = time + 7776000
			time4 = self.getNowTime(time4)
			self.time4 = time4
			//第五期时间  120天
			let time5 = time + 10368000
			time5 = self.getNowTime(time5)
			self.time5 = time5
			//第六期时间  150天
			let time6 = time + 12960000
			time6 = self.getNowTime(time6)
			self.time6 = time6
			console.log("第六期", self.time6)
			//第七期时间  180天
			let time7 = time + 15552000
			time7 = self.getNowTime(time7)
			self.time7 = time7
			//第八期时间  210天
			let time8 = time + 18144000
			time8 = self.getNowTime(time8)
			self.time8 = time8
			//第九期时间  240天
			let time9 = time + 20736000
			time9 = self.getNowTime(time9)
			self.time9 = time9
			//第十期时间  270天
			let time10 = time + 23328000
			time10 = self.getNowTime(time10)
			self.time10 = time10
			//第十一期时间  300天
			let time11 = time + 25920000
			time11 = self.getNowTime(time11)
			self.time11 = time11
			//第十二期时间  330天
			let time12 = time + 28512000
			time12 = self.getNowTime(time12)
			self.time12 = time12

			time = self.getNowTime(time)
			// time = self.getLocalTime(time)
			self.start_time = time
			// console.log(self.start_time)
			self.options = options;
			// console.log(self.options);
			self.room_id = options.room_id ? options.room_id : 0,
				self.$fire.on('selectStoreId', function(e) {
					self.extract_store = e;
					self.choose_store_id = e.store_id;
				});
			self.$fire.on('checkedfir', function(n) {
				self.choose_delivery = n;
			})

		},
		onShow() {
			let self = this;
			self.getData();
			// self.init()
			// uni.$on('update', function(data) {
			// 	if (data == "rzcg") {
			// 		console.log("走了update", data);
			// 		self.SubmitOrder();
			// 		return
			// 	}
			// })

		},
		mounted() {
			self.getData();
		},
		methods: {
			// 修改配送方式
			isShowT() {
				this.show = true
			},
			close3() {
				this.show = false
			},
			shijan() {
				// 处理时间
				let self = this
				let str1 = self.start_time;
				console.log(str1, 'str1')
				// console.log(str1.indexOf("2023") != -1,str1,"是否存在");
				// if (str1.indexOf("2023") != -1) {
				//   // console.log("存在");
				//   // console.log(str1.replace(/2023/,"2024"));
				//   self.create_timedata = str1.replace(/2023/, "2024");
				// }
				let times = str1.split('-')[1] //截取时间
				let shijia = str1.split('-')
				let returnTime = self.qishu //获取返回时间
				if (returnTime == '十一') {
					console.log(11)
					self.end_time = str1.replace(/2023/, "2024");
				} else if (returnTime == '八') {
					console.log(8)
					let a = Number(times) + 9
					if (a > 12) {
						let c = a - 12
						let b = Number(shijia[0])
						self.end_time = (b + 1) + '-' + c + '-' + shijia[2]
					} else {
						let b = Number(shijia[0])
						self.end_time = (b + 1) + '-' + a + '-' + shijia[2]
					}
					console.log(self.end_time, 33333)
					// console.log(a,999)
					//  .create_timedata = (times[0]+1)+a.slice(5,7)+9+times[2]
					//  console.log(self.create_timedata)
				} else if (returnTime == '五') {
					console.log(5)
					let a = Number(times) + 6
					if (a > 12) {
						let c = a - 12
						let b = Number(shijia[0])
						self.end_time = (b + 1) + '-' + c + '-' + shijia[2]
					} else {
						let b = Number(shijia[0])
						self.end_time = (b + 1) + '-' + a + '-' + shijia[2]
					}
					// console.log(a,999)
					//  .create_timedata = (times[0]+1)+a.slice(5,7)+9+times[2]
					//  console.log(self.create_timedata)
				} else if (returnTime == '二') {
					console.log(2)
					let a = Number(times) + 3
					if (a > 12) {
						let c = a - 12
						let b = Number(shijia[0])
						self.end_time = (b + 1) + '-' + c + '-' + shijia[2]
					} else {
						let b = shijia[0]
						self.end_time = b + '-' + a + '-' + shijia[2]
					}
					// console.log(a,999)
					//  .create_timedata = (times[0]+1)+a.slice(5,7)+9+times[2]
					//  console.log(self.create_timedata)
				}
			},
			// 支付宝登录
			async onGetAuthorize1() {
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
									this.tokendata = 1;
									this.getData();
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

			// 获取支付宝会员信息
			getAlipayUserInfo() {
				return new Promise((resolve, reject) => {
					my.getOpenUserInfo({
						success: (res) => {
							const userInfo = JSON.parse(res.response)
							// .response; // 以下方的报文格式解析两层 response   
							resolve(userInfo);
							console.log("成功");

						},
						fail: (res) => {
							console.log("失败")
							reject(res);
						}
					});
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
			//优惠券的点击事件
			youhui() {
				this.show1 = true
			},
			open1() {
				// console.log('open');
			},
			close1() {
				this.show1 = false
				// console.log('close');
			},
			//租赁计划的点击事件
			huankuan() {
				this.show2 = true
			},
			open2() {
				// console.log('open');
			},
			close2() {
				this.show2 = false
				// console.log('close');
			},
			// 把时间戳转普通时间
			getLocalTime(nS) {
				return new Date(parseInt(nS) * 1000).toLocaleString().substr(0, 10);
			},
			// 获取当前的时间
			getNowTime(date) {
				if (date !== '' && date !== undefined && date != null) {
					date = parseInt(date) * 1000
					date = new Date(date)
					var y = date.getFullYear()
					var m = date.getMonth() + 1
					m = m < 10 ? '0' + m : m
					var d = date.getDate()
					d = d < 10 ? '0' + d : d
					return y + '-' + m + '-' + d
				} else {
					return ''
				}
			},
			fuwu() {
				console.log("服务");
				uni.navigateTo({
					url: "/pages/hetong/index"
				})
			},
			// 隐私协议
			ysi() {
				console.log("隐私");
				uni.navigateTo({
					url: "/pages/hetong/yszc"
				})
			},
			init() {
				let key = '';
				let value = "";
				let self = this;
				self.ProductData.forEach((item, index) => {
					key = item.shop_supplier_id;
					value = {
						coupon_id: item.orderData.coupon_id,
						delivery: item.orderData.delivery,
						store_id: 0,
						remark: ""
					}
					self.store_data = {
						...self.store_data,
						[key]: value
					}
				})
			},
			submit() {
				document.forms['alipaysubmit'].submit();
			},
			/**/
			hasType(e) {
				if (this.deliverySetting.indexOf(e) != -1) {
					return true;
				} else {
					return false;
				}
			},
			/*支付方式选择*/
			payTypeFunc(e) {
				this.pay_type = e;
			},
			/*是否使用积分选择*/
			onShowPoints: function(e) {
				let self = this;
				if (e.target.value == true) {
					self.is_use_points = 1;
				} else {
					self.is_use_points = 0;
				}
				self.getData();
			},
			SubSheneh() {},
			/*选择优惠卷*/
			onTogglePopupCoupon(e, id) {
				let self = this;
				if (id != 0) {
					self.chooseSotr = id.shop_supplier_id;
				} else {
					self.chooseSotr = 0;
				}
				self.isCoupon = true;
				self.couponList = e;
			},
			/*关闭优惠券*/
			closeCouponFunc(e) {
				let self = this;
				if (e && typeof e != 'number') {
					self.isCoupon = false;
					return;
				}
				if (self.chooseSotr != 0) {
					let storid = self.chooseSotr;
					if (e > 0) {
						self.store_data[storid].coupon_id = e;
					} else {
						self.store_data[storid].coupon_id = 0;
					}
					self.chooseSotr = 0;
				} else {
					if (e > 0) {
						self.coupon_id = e;
					} else {
						self.coupon_id = 0;
					}

				}
				self.isCoupon = false;
				self.getData();
			},
			radioChange(e) {
				// console.log(111, e.detail.value);
				this.isgreed = Boolean(e.detail.value)
			},
			//时间判断方法
			timess() {
				let self = this;
				let time = parseInt(new Date().getTime() / 1000) + '';
				console.log("获取以秒为单位的时间戳", time)
				time = parseInt(time) + 86400 * 3;
				let end_time = time + 31536000
				console.log("第一次获取截至时间", end_time)
				end_time = self.getNowTime(end_time)
				if (self.times == 6) {
					let time6 = time + 15811200
					time6 = self.getNowTime(time6)
					self.end_time = time6
				} else if (self.times == 12) {
					self.end_time = end_time
				} else if (self.times == 3) {
					let time3 = time + 7776000
					time3 = self.getNowTime(time3)
					self.end_time = time3
				} else if (self.times == 2) {
					let time2 = time + 2592000
					time2 = self.getNowTime(time2)
					self.end_time = time2
				} else if (self.times == 4) {
					let time4 = time + 7776000
					time4 = self.getNowTime(time4)
					self.end_time = time4
				} else if (self.times == 5) {
					let time5 = time + 10368000
					time5 = self.getNowTime(time5)
					self.end_time = time5
				} else if (self.times == 7) {
					let time7 = time + 15552000
					time7 = self.getNowTime(time7)
					self.end_time = time7
				} else if (self.times == 8) {
					let time8 = time + 18144000
					time8 = self.getNowTime(time8)
					self.end_time = time8
				} else if (self.times == 9) {
					let time9 = time + 20736000
					time9 = self.getNowTime(time9)
					self.end_time = time9
				} else if (self.times == 10) {
					let time10 = time + 23328000
					time10 = self.getNowTime(time10)
					self.end_time = time10
				} else if (self.times == 11) {
					let time11 = time + 25920000
					time11 = self.getNowTime(time11)
					self.end_time = time11
				}
			},
			/*获取数据*/
			getData() {
				let self = this;
				// uni.showLoading({
				// 	title: '加载中'
				// });
				let callback = function(res) {
					console.log(res, 'api')
					var str1 = res.data.orderInfo.supplierList[0].productList[0].product_sku.product_attr;
					// console.log(str1.indexOf("不") != -1,str1,"是否存在");
					if (str1.indexOf("不") != -1) {
						// console.log("存在");
						self.suiping = false;
					} else {
						self.suiping = true;
					}
					self.buy_out_price = res.data.orderInfo.supplierList[0].productList[0].product_sku.buy_out_price;

					console.log(res.data.orderInfo.lease_time, "resresres获取数据的打赢");
					//获取期数并对时间管理器赋值
					self.times = res.data.orderInfo.lease_time.lease_time
					self.lease_type = res.data.orderInfo.lease_time.lease_type
					self.OrderData = res.data.orderInfo.orderData;
					// 这是获取的数据
					self.lease_time = res.data.orderInfo.lease_time;
					self.timess();
					self.shijan();
					self.order_total_num = res.data.orderInfo.orderData.order_total_num;
					self.total_amount = res.data.orderInfo.lease_time.total_amount;
					let meiri = self.order_total_num * self.total_amount
					console.log("这是未保留两位小数的值", meiri)
					let realVal = parseFloat(meiri).toFixed(2)
					self.realVal = realVal
					self.order_total_price = res.data.orderInfo.orderData.order_total_price
					self.temlIds = res.data.template_arr;
					self.exist_address = self.OrderData.exist_address;
					self.Address = self.OrderData.address;
					self.last_extract = self.OrderData.last_extract;
					self.ProductData = res.data.orderInfo.supplierList;
					// console.log(self.ProductData, 'self.ProductData');
					self.coupon_list = self.OrderData.coupon_list;
					self.coupon_id = self.OrderData.coupon_id_sys;
					self.coupon_num = Object.keys(self.coupon_list).length;
					self.balance = res.data.balance;
					//#ifdef MP-WEIXIN
					self.store_open = res.data.store_open;
					//#endif
					if (self.OrderData.order_pay_price == 0) {
						self.pay_type = 10;
					}
					if (JSON.stringify(self.store_data) == "{}") {
						self.init()
					}
					if (res.data.show_alipay) {
						self.showAlipay = true;
					}
					self.loading = false;
				};

				// 请求的参数
				let params = {
					delivery: self.delivery,
					store_id: self.store_id,
					coupon_id: self.coupon_id,
					is_use_points: self.is_use_points,
					pay_source: self.getPlatform(),
					address: {
						name: self.states2.fullname,
						phone: self.states2.mobilePhone,
						province: self.states2.prov,
						city: self.states2.city,
						region: self.states2.area,
						detail: self.states2.address
					},
				};
				if (JSON.stringify(self.store_data) == "{}") {
					params = params;
				} else {
					params = {
						...params,
						supplier: self.store_data
					};
				}
				// console.log(self.options, 'options');
				//直接购买
				if (self.options.order_type === 'buy') {
					console.log(self.options, '9998')
					self._get(
						'order.order/buy', {
							params: JSON.stringify(
								Object.assign({}, params, {
									product_id: self.options.product_id,
									product_num: self.options.product_num,
									product_sku_id: self.options.product_sku_id,
								})
							)
						},
						function(res) {
							callback(res);
						}
					);
				}
				// 购物车结算
				else if (self.options.order_type === 'cart') {
					self._get(
						'order.order/cart', {
							params: JSON.stringify(
								Object.assign({}, params, {
									cart_ids: self.options.cart_ids || 0
								})
							)
						},
						function(res) {
							callback(res);
						}
					);
				}
				// 积分兑换结算
				else if (self.options.order_type == 'points') {
					self._get(
						'plus.points.order/buy', {
							params: JSON.stringify(
								Object.assign({}, params, {
									point_product_id: self.options.point_product_id,
									product_sku_id: self.options.product_sku_id,
									point_product_sku_id: self.options.point_product_sku_id,
									product_num: self.options.product_num
								})
							)
						},
						function(res) {
							callback(res);
						}
					);
				}
				// 限时秒杀
				else if (self.options.order_type === 'seckill') {
					params.num = self.options.num;
					self._get(
						'plus.seckill.order/buy', {
							params: JSON.stringify(
								Object.assign({}, params, {
									seckill_product_id: self.options.seckill_product_id,
									product_sku_id: self.options.product_sku_id,
									seckill_product_sku_id: self.options.seckill_product_sku_id,
									product_num: self.options.product_num
								}))
						}

						,
						function(res) {
							callback(res);
						}
					);
				}
				//砍价
				else if (self.options.order_type === 'bargain') {
					self._get(
						'plus.bargain.order/buy', {
							params: JSON.stringify(
								Object.assign({}, params, {
									bargain_product_id: self.options.bargain_product_id,
									product_sku_id: self.options.product_sku_id,
									bargain_product_sku_id: self.options.bargain_product_sku_id,
									bargain_task_id: self.options.bargain_task_id
								})
							)
						},
						function(res) {
							callback(res);
						}
					);
				}
				//拼团
				else if (self.options.order_type === 'assemble') {
					self._get(
						'plus.assemble.order/buy', {
							params: JSON.stringify(
								Object.assign({}, params, {
									assemble_product_id: self.options.assemble_product_id,
									product_sku_id: self.options.product_sku_id,
									assemble_product_sku_id: self.options.assemble_product_sku_id,
									product_num: self.options.product_num,
									assemble_bill_id: self.options.assemble_bill_id,
								})
							)
						},
						function(res) {
							callback(res);
						}
					);
				}

			},

			toDecimal2(x) {
				var f = parseFloat(x);
				if (isNaN(f)) {
					return "0.00";
				}
				var f = Math.round(x * 100)
				var n = Math.round(x * 1000)
				var r = n.toString().split("");
				r = r[r.length - 1];
				if (r >= 5) {
					f = (f - 1) / 100
				} else {
					f = f / 100
				}
				var s = f.toString();
				var rs = s.indexOf('.');
				if (rs < 0) {
					rs = s.length;
					s += '.';
				}
				while (s.length <= rs + 2) {
					s += '0';
				}
				return s;
			},
			/* 配送选择 */
			DistUp(item) {
				let self = this;
				self.store_id = item.shop_supplier_id;
				self.chooseSotr = item.shop_supplier_id;
				let storid = self.chooseSotr;
				self.getData();
				self.deliverySetting = item.orderData.deliverySetting;
				self.extract_store = item.orderData.extract_store;
				this.isDist = true;

			},
			/* 关闭配送选择 */
			closeDistFunc(e) {
				let self = this;
				self.isDist = false;
				if (!self.extract_store.region) {
					return;
				}
				let storid = self.chooseSotr;
				let choose_store_id = self.choose_store_id;
				let storname = self.extract_store.region.province + self.extract_store.region.city + self.extract_store
					.region.region + self.extract_store.store_name;
				self.delivery = self.choose_delivery;
				self.store_id = storid;
				self.store_data[storid].store_id = choose_store_id;
				self.store_data[storid].delivery = self.choose_delivery;
				self.store_list[storid] = storname;
				self.chooseSotr = 0;
				self.getData();
			},
			objKeys(obj, n) {
				if (obj) {
					if (n == 1) {
						return Object.keys(obj).length
					} else {
						return Object.keys(obj)
					}
				}
			},
			//接收子传过来的states值
			changestates(val) {
				// console.log("=====>", val);
				this.states2 = val;
			},
			close() {
				this.showdd = false;
			},
			getinfo() {
				let self = this;
				self._get('user.index/setting', {},
					function(res) {
						// console.log(res.data.userInfo.username, res.data.userInfo.usernum);
						self.value1 = res.data.userInfo.username;
						self.value2 = res.data.userInfo.usernum;
					})
			},
			queding() {
				let self = this;
				// console.log(self.value1, self.value2);
				if (uni.$u.test.idCard(self.value2) == false) {
					uni.showToast({
						title: '身份证号码有误,请重填！',
						duration: 2000,
						icon: 'none'
					});
					return;
				}

				if (self.value1 == '') {
					uni.showToast({
						title: '姓名不能为空！',
						duration: 2000,
						icon: 'none'
					});
					return;
				}
				self._post(
					'user.user/realNameAuthentication', {
						username: self.value1,
						usernum: self.value2
					},
					function(res) {
						// uni.$emit('update', "rzcg");
						// uni.reLaunch({
						// 	url:"/pages/order/myorder"
						// })
						self.SubmitOrder();
					})
			},
			// 跳转
			tzxs() {
				uni.showLoading({
					title: '加载中'
				});
				// console.log("states2", this.states2);
				// console.log("isgreed", this.isgreed);
				if (!this.states2) {
					// console.log("地址为空");
					uni.showModal({
						title: '提示',
						content: '未选择地址，请选择地址重试 ~ ~',
						showCancel: false,
						confirmText: '确定'
					});
					uni.hideLoading();
					return
				}
				let self = this;
				// self.getinfo();
				// this.val()
				let params = {
					pay_type: self.pay_type,
					room_id: self.room_id,
					coupon_id: self.coupon_id,
					is_use_points: self.is_use_points,
					address: {
						name: self.states2.fullname,
						phone: self.states2.mobilePhone,
						province: self.states2.prov,
						city: self.states2.city,
						region: self.states2.area,
						detail: self.states2.address
					},
				};

				params = Object.assign(params, {
					supplier: self.store_data
				});
				// 创建订单-直接下单
				if (self.options.order_type === 'buy') {
					this.zfshow = 1;
					self._post('/order.order/buy', {
							params: JSON.stringify(
								Object.assign({}, params, {
									product_id: self.options.product_id,
									product_num: self.options.product_num,
									product_sku_id: self.options.product_sku_id,
									room_id: self.options.room_id || 0,
								})
							)
						},
						function(res) {
							self.ddids = encodeURIComponent(res.data.order_id.join(','))
							uni.hideLoading();
							uni.showToast({
								title: "订单提交成功！",
								duration: 1000,
								position: 200,
							})
							setTimeout(() => {
								self.showdd = true;
								// self.SubmitOrder();
							}, 1000);
						},
						function(res) {
							console.log(res, "失败");
							uni.showToast({
								title: "接口请求提交失败！",
								duration: 1000,
								position: 200,
							})
						})
				}
				// uni.navigateTo({
				// 	url: "/pages/order/smrz"
				// })
				console.log(typeof this, this, '34')
			},
			// 清空value值
			val() {
				console.log(this)
			},
			/*提交订单*/
			SubmitOrder() {
				// console.log("走了提交订单SubmitOrder");
				let self = this;
				var url = '';
				var id = '';

				uni.showLoading({
					title: '加载中',
					mask: true
				});

				let params = {
					pay_type: self.pay_type,
					room_id: self.room_id,
					coupon_id: self.coupon_id,
					is_use_points: self.is_use_points,
					address: {
						name: self.states2.fullname,
						phone: self.states2.mobilePhone,
						province: self.states2.prov,
						city: self.states2.city,
						region: self.states2.area,
						detail: self.states2.address
					},
				};
				params = Object.assign(params, {
					supplier: self.store_data
				});

				self._post('/order.order/pay', {
						order_id: self.ddids
					},
					function(res) {
						uni.hideLoading();
						my.tradePay({
							orderStr: res
								.data, //orderStr从第一步：生成资金冻结订单，从服务端获取
							success: (res) => {
								console.log(res.resultCode, "res999");
								if (res.resultCode == "4") {
									uni.showToast({
										title: '无权限调用 (N22104)',
										icon: 'none'
									})
								} else if (res.resultCode == "9000") {
									self._post('order.order/faceAuthentication', {
										order_id: self.ddids,
										name: self.value1,
										idno: self.value2
									}, (res) => {
										my.startAPVerify({
											url: res.data.url,
											success: function (res) {
												self._post('order.order/renzheng', {'order_id':self.ddids,'states':res.resultStatus=='9000'?1:0}, (res) => {})
												self._post('order.order/faceStates', {"states":res.resultStatus=='9000'?1:0}, (res) => {})
												uni.reLaunch({
													url: '/pages/order/order-detail?order_id=' +
														self.ddids
												})
											},
											fail: function (res) {
												console.log('fail', res)
											},
											complete: function (res) {
												console.log('complete', res)
											}
										})
									}, function(err) {
										console.log(88888)
									})

								} else if (res.resultCode == "8000") {
									uni.showToast({
										title: '正在处理中。支付结果未知',
										icon: 'none'
									})
								} else if (res.resultCode == "4000") {
									uni.showToast({
										title: '订单处理失败',
										icon: 'none'
									})
								} else if (res.resultCode == "6001") {
									uni.navigateTo({
										url: "/pages/order/bnmy"
									})
									// uni.navigateTo({
									// 	url: '/pages/order/order-detail?order_id=' +
									// 		self.ddids
									// })
								} else if (res.resultCode == "6002") {
									uni.showToast({
										title: '网络连接出错',
										icon: 'none'
									})
								} else if (res.resultCode == "6004") {
									uni.showToast({
										title: '处理结果未知',
										icon: 'none'
									})
								}
							},
							fail: (res) => {
								uni.showToast({
									title: '支付失败！',
									icon: 'none'
								})
								uni.navigateTo({
									url: '/pages/order/order-detail?order_id=' +
										self.ddids
								})
							}
						});
					})


			},
			/*提交订单结束*/

		},
	}
</script>

<style lang="scss">
	.smrztkdata .u-transition {
		height: 100%;
	}

	.content {
		width: 100%;
		height: 400rpx;
		background-color: #53A9F4;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		image {
			width: 150rpx;
			height: 150rpx;
		}

		.smrz {
			color: #FFFFFF;
			margin-top: 20rpx;
			font-size: 30rpx;
		}

		.smrz2 {
			color: #FFFFFF;
			margin-top: 20rpx;
			line-height: 34rpx;
		}

		.sfxx3 {
			.sfxx4 {
				display: flex;
				margin-top: 20rpx;

			}
		}
	}

	.bs_xx {
		padding: 10rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #F5F5F5;

		.sfxx {
			width: 85%;
			padding: 30rpx 6rpx;
			background-color: #FFFFFF;
			border-radius: 50rpx;

			.sfxx2 {
				padding: 20rpx 20rpx;

				view {
					color: #43A3E8;
					margin-top: 10rpx;
				}
			}
		}

		.anniu {
			margin-top: 20rpx;
			width: 85%;
			border-radius: 50rpx;
		}
	}

	page {
		background-color: #F2F2F2;
	}

	.my_info {
		margin: 16rpx 25rpx;
		border-radius: 20rpx !important;
	}

	.wrap {
		// padding-bottom: 110rpx;
		height: 1700rpx;
	}

	.d-f-c {
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
		padding: 30rpx 0;
		margin: 0 30rpx;
		font-size: 24rpx;
		border-bottom: 1rpx solid #EEEEEE;

	}

	.ding1 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		// overflow: hidden;
		padding: 30rpx 0;
		margin: 0 30rpx;
		font-size: 24rpx;
		border-bottom: 1rpx solid #EEEEEE;
	}

	.yhj {
		width: 200rpx;
		height: 30rpx;

	}

	.dfjac {
		display: flex;
		align-items: center;
	}

	.d-txar {
		white-space: nowrap;
		width: 200px;
		margin-right: 34rpx;
	}

	.extp {
		color: #9e9e9e;
		margin-left: 34rpx;
	}

	.buyer-message {
		margin: 500rpx !important;
	}

	.vender {
		margin: 30rpx 25rpx;
		border-radius: 20rpx;
	}

	.vender .list {
		padding-bottom: 200rpx;
	}

	.vender .list .item {
		border-bottom: none;
	}


	.icon-jiantou {
		margin-left: 15rpx;
	}

	.icon-dianpu1 {
		margin-right: 15rpx;
		font-size: 28rpx;
		color: #333333;
	}

	.sup_itemtit {
		padding: 40rpx 30rpx;
		display: flex;
		align-items: center;
	}

	.meiridata {
		padding: 10rpx 0;
		display: flex;
		justify-content: space-between;

		.yjmr {
			color: #373546;
			font-size: 34rpx;
			font-weight: bold;
			font-family: 'Adobe Heiti Std R';
		}
	}

	.qz {
		padding: 10rpx;
		display: flex;
		flex-direction: column;
		background-color: #ECECEC;
		border-radius: 10rpx;
		margin: 15rpx 30rpx;
		color: #747474;
		font-size: 24rpx;

		// font-weight: bold;
		.biank3 {
			padding: 15rpx;

			.cont {
				display: flex;
				justify-content: space-between;
			}
		}
	}


	.vender .total-box {
		height: 90rpx;
		display: flex;
		flex-direction: column;
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
		}

		.biank2 {
			width: 300rpx;
			height: 80rpx;
			border: 1rpx;
			display: flex;
			flex-direction: row;

			image {
				height: 80rpx;
				width: 80rpx;
			}
		}

	}

	.d-f {
		display: flex;
	}

	.zt {
		padding: 2rpx 10rpx;
		margin-right: 10rpx;
		border-radius: 8rpx;
		font-size: 22rpx;
	}

	.icon-box .icon-zhifubao {
		color: #1296db;
		font-size: 50rpx;
	}

	.icon-dianpu1 {}

	.text_area {
		width: 100%;
		height: 120rpx;
		background: #f2f2f2;
		border-radius: 6rpx;
		padding: 20rpx;
		box-sizing: border-box;
		font-size: 24rpx;
	}

	.icon-xuanze {
		font-size: 38rpx;
	}

	.suiping1 {
		background-color: #F2F2F2;
		// width: 644rpx;
		// height: 159rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		border-radius: 20rpx;
		padding: 15rpx;

		.texts {
			margin: 7rpx 0;
			display: flex;
			justify-content: space-between;
			font-size: 24rpx;
			color: #999999;
			width: 600rpx;

		}
	}

	.texts2 {
		margin: 7rpx 0;
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		color: #999999;
		padding: 15rpx;

		.top {}

		.xia {
			border: 1rpx solid #a0cfff;
			color: #a0cfff;
		}
	}


	.yhj1 {
		padding-left: 35rpx;
	}

	.yhj2 {
		color: red;
	}



	.zkjh {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;

		.huankuanjihua {
			font-size: 34rpx;
			font-weight: bold;
			height: 70rpx;
			display: flex;
			align-items: center;
			font-family: 'Adobe Heiti Std R';
		}

		.xkh {}
	}



	.kongke {
		height: 12rpx;
		background-color: #F0F0F0;
	}

	.kongke2 {
		height: 12rpx;
		background-color: #F0F0F0;
	}


	.yangshi {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 80rpx;
		padding-right: 15rpx;
		border-radius: 50rpx;
		align-items: center;
	}

	.dao {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 70rpx;
		border-radius: 50rpx;
		align-items: center;
		font-size: 34rpx;
		font-weight: bold;
		padding: 0 30rpx;
		font-family: 'Adobe Heiti Std R';

		.dao1 {
			// font-size: 28rpx;
		}
	}

	//优惠券弹窗
	.youhui1 {
		.tanchuang {
			height: 600rpx;
			margin-top: 40rpx;

			.shuju {
				text-align: center;
				font-size: 35rpx;
			}
		}
	}

	//租赁计划弹窗
	.huankuanjihua1 {
		.tanchuang1 {

			// height: 800rpx;
			.shuju1 {
				text-align: center;
				font-size: 25rpx;
				font-weight: bold;
				border-bottom: 1px solid silver;
				margin: 20rpx 0;
				height: 50rpx;
				line-height: 50rpx;

				.daoqi {
					margin-right: 80rpx;
					color: skyblue;
				}
			}

			.stime {
				margin: 0 70rpx;
			}
		}
	}

	.tis {
		margin: 0 30rpx;

		.tishi {
			font-size: 22rpx;
			color: DarkOrange;
			background-color: LightYellow;
			line-height: 35rpx;
		}
	}

	.confirmdata {
		display: flex;
		justify-content: center;

		.confirm-btn {
			width: 90%;
			height: 80rpx;
			line-height: 80rpx;
			// @include background_linearmore('cart_right1', 'cart_right2', 'right_deg', 0%, 100%);
			margin: 0 20rpx;
			color: #FFFFFF;
			font-size: 32rpx;
			background-color: #24A3FF;
			border: none;
			font-size: 34rpx;
			border-radius: 20rpx;
			padding: 0 15rpx;
		}
	}

	.tjshkdData {
		display: flex;
		justify-content: center;

		.tjshkd {
			width: 90%;
			font-size: 34rpx;
			border-radius: 20rpx;
		}
	}

	.buy-checkout {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;

		.item {
			display: flex;
			justify-content: flex-start;
			align-items: center;

			.tongyi {
				margin-left: 15rpx;

				.tongyi1 {
					color: #999999;
				}

				.tongyi2 {
					color: #56D5C8;
				}
			}
		}
	}
</style>