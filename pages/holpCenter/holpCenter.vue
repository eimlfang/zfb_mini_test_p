<template>
	<view class="A_display" :class="avv ? 'cidy' : 'A_display'">
		<!-- <view class="A_display-bg" style="z-index: 999;">
		</view> -->
		<scroll-view scroll-into-view="toView" scroll-y="true" scroll-with-animation="true">
			<!-- <view class="zhong_top questionbag" @click="xiding()" :class="acyive ? 'questionbag1' : ''">
				<view class="err" :class=" {'active':add_class==index}" v-for="(item,index) in list" :key="item.id"
					@click="changeIndex(index,id)" @change="changeTab(index)">
					<view class="bg-ccc" :class=" {'active_bg':add_class==index}">
						<image :src="item.img"></image>
					</view>
					<view :class=" {'active_text':add_class==index}">
						<text>{{item.text}}</text>
					</view>
				</view>
			</view> -->
			<!-- <view class="A_display-zhong" v-bind:style="style" id="editor"> -->
			<view class="u-card__body">
				<view class="u-card__body__body" id="md1" @click="toAnchor()">
					<view class="title-big">
						订单问题
					</view>
					<view class="u-page__item">
						<u-collapse accordion>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">租期内可修改租赁时间吗?</text>
								<text class="u-collapse-content">租赁期内暂不支持修改时间，租赁期满后，可选择原机买断、归还、续租。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">如何取消订单?</text>
								<text class="u-collapse-content">可在“我的-我的订单”点击取消。如取消失败请联系客服</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">为什么下单了在我的订单中看不到订单?</text>
								<text class="u-collapse-content">出现这种情况是因为支付了押金后退出，可在“我的-未完成订单”检查订单流程是否走完。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">手机号不用了能修改订单或手机号吗??</text>
								<text class="u-collapse-content">可在支付宝“设置-账号与安全-手机号”中更换手机号。</text>
							</u-collapse-item>
						</u-collapse>
					</view>
				</view>
				<!-- ---------------- -->
				<view class="u-card__body__body topHeader" id="md2" @click="toAnchor()">
					<view class="title-big">
						<!-- {{item.text}} -->
						支付问题
					</view>
					<view class="u-page__item">
						<u-collapse accordion>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">租用多久可以买断?如何买断、归还??</text>
								<text class="u-collapse-content">确认收货后可在订单详情页查看到买断、归还、续租按钮;全部租金还完可操作归还和买断，止租日前30天可操作续租。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">商品的押金是多少?能免押吗? 免押金是什么?</text>
								<text class="u-collapse-content">选择规格后，点击“免押评估”，即可获取您的免押额度，免押额度根据芝麻信用分来确定。
								无法免押的，押金可以使用支付宝余额或银行卡内资金支付。到期归还设备，押金会自动原路退回，到期买断的，押金可抵扣买断款。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">租机时需要支付哪些费用?</text>
								<text class="u-collapse-content">租机费用包括:押金(未免押) +租金+保修服务 (部分可选购)。 押金通过冻结银行卡或支付宝余额相应额度进行信用担保，
								租用到期，用户将手机归还至本租机，押金解冻。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">为何有的订单发货前会扣多期?</text>
								<text class="u-collapse-content">根据个人信用审核结果决定。</text>
							</u-collapse-item>
						</u-collapse>
					</view>
				</view>


				<!-- ---------------- -->

				<view class="u-card__body__body" id="md3" @click="toAnchor()">
					<view class="title-big">
						<!-- {{item.text}} -->
						发货问题
					</view>
					<view class="u-page__item">
						<u-collapse accordion>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">下单后多久发货?</text>
								<text class="u-collapse-content">下单后24小时发货，特殊情况除外。具体发货时间请联系客服。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">不是本人签收可以吗?</text>
								<text class="u-collapse-content">不可以，签收时需本人上传身份证原件以及扫脸，如签收不便，可联系快递小哥更改签收时间。</text>
							</u-collapse-item>
						</u-collapse>
					</view>
				</view>

				<!-- -------------- -->
				<view class="u-card__body__body" id="md4" @click="toAnchor()">
					<view class="title-big">
						<!-- {{item.text}} -->
						售后问题
					</view>
					<view class="u-page__item">
						<u-collapse accordion>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">维修期间商品账单日期怎么算?</text>
								<text class="u-collapse-content">租赁期如存在返修，则返修天数不计入账单 
								(如您的止租日为2022年4月29日，您返修时间为7日，则您的止租日可顺延至2022年5月6日)。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">维修寄出的费用由谁来承担?</text>
								<text class="u-collapse-content">寄出的运费是采用“谁寄送谁承担”的原则，由寄方承担。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">租赁期间的维修费用由谁来承担?</text>
								<text class="u-collapse-content">人为损坏维修费用由客户承担，非人为损坏由品牌售后免费维修 (在保修期内)。购买了意外保障服务的用户，可享受一次免费换屏服务。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">商品可以提前买断吗?</text>
								<text class="u-collapse-content">可以，订单详情页支付剩余租金和买断费即可买断。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">商品可以提前归还吗? 赠品是否需要归还?</text>
								<text class="u-collapse-content">暂不支持提前归还，如需提前归还，需支付剩余租金;赠品无需归还。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">归还商品会产生费用吗?</text>
								<text class="u-collapse-content">机器检测正常，无任何费用;检测不合格的机器，需支付相应的维修费用。</text>
							</u-collapse-item>
						</u-collapse>
					</view>
				</view>
				
				<!-- -------------- -->
				<view class="u-card__body__body" id="md5" @click="toAnchor()">
					<view class="title-big">
						<!-- {{item.text}} -->
						审核问题
					</view>
					<view class="u-page__item">
						<u-collapse accordion>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">审核失败了一次，还能继续下单重新审核吗?</text>
								<text class="u-collapse-content">不建议您立即尝试，可在3个月后再次尝试。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">审核失败后押金如何处理?</text>
								<text class="u-collapse-content">审核失败，订单会在3小时内自动取消，押金自动返还。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">审核时间?</text>
								<text class="u-collapse-content">下单后24小时左右。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">芝麻分多少能过审核?</text>
								<text class="u-collapse-content">能否通过审核主要取决于大数据风控，与芝麻分没有直接关系。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">不选择意外保险，会不会降低通过率?</text>
								<text class="u-collapse-content">没有必然关系，意外保险只是针对于部分机型的增值服务。</text>
							</u-collapse-item>
						</u-collapse>
					</view>
				</view>
				
				<!-- -------------- -->
				<view class="u-card__body__body" id="md6" @click="toAnchor()">
					<view class="title-big">
						<!-- {{item.text}} -->
						其他问题
					</view>
					<view class="u-page__item">
						<u-collapse accordion>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">还机后，我的隐私如何保障?</text>
								<text class="u-collapse-content">本租机与全球知名数据销毁服务商合作，并有专业工程师为您清理数据，保障用户的隐私安全</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">租比买有什么优势?</text>
								<text class="u-collapse-content">租机可以解决机器更换时处理旧机的烦恼，年年用最新款的机器:租金仅需每期还款，大大减少一次性购买手机的资金压力;租机可以满足不同群体对手机的使用需求，环保共享，发挥最大价值。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">手机都是全新的吗?</text>
								<text class="u-collapse-content">本租机提供全新机,满足不同人群对机器的需求,机器都是国行正品。</text>
							</u-collapse-item>
							<u-collapse-item>
								<text slot="title" class="u-page__item__title__slot-title">逾期的后果和影响?</text>
								<text class="u-collapse-content">建议按时还款，以免影响个人信用;逾期严重的会承担法律责任。</text>
							</u-collapse-item>
						</u-collapse>
					</view>
				</view>
				
			</view>
		</scroll-view>
		<!-- </view> -->
		<!-- 底部 -->
		<view class="dibu" style="border: none;">
			<text class="dibu1">没有解决您的问题?联系客服</text>
			<div   style="position: relative; top: 10rpx;left: 12rpx;">
				<contact-button tnt-inst-id="" scene=""  size="19"/>
			</div>
			
			<!-- <text class="my-fans">联系客服</text> -->
		</view>
	</view>
</template>

<script>
	import baseurl from "@/config.js"
	export default {
		data() {
			return {
				baseurl:"",
				avv: false,
				acyive: false,
				toView: '',
				toHeight: 0,
				add_class_que: "",
				style: "",
				// style: 0,
				add_class: 0,
				yuanH: uni.upx2px(300),
				isF: false,
				isFixedTop: false,
				tabCurrentIndex: '0',
				list: [{
					id: 0,
					img: "https://i-s2.328888.xyz/2022/06/30/62bd44b826d9a.png",
					text: '常见问题'
				}, {
					id: 1,
					img: "https://i-s2.328888.xyz/2022/06/30/62bd44b6a7a69.png",
					text: '支付问题'
				}, {
					id: 2,
					img: "https://i-s2.328888.xyz/2022/06/30/62bd44b6676bb.png",
					text: '设备维修'
				}, {
					id: 3,
					img: "https://i-s2.328888.xyz/2022/06/30/62bd4dde29aaf.png",
					text: '租赁保障'
				}, ],
			}
		},
		methods: {
			 open(e) {
			  console.log('open', e)
			},
			close(e) {
			  console.log('close', e)
			},
			change(e) {
			  console.log('change', e)
			},
			toAnchor(){
			},
			xiding() {
				this.acyive = true
				this.avv = true
				// console.log("00000000000000");
			},
			changeIndex(index) {
				this.add_class = index;
				if (this.add_class = index) {
					this.isQuestionbag = true
				}
				// console.log(index);
				this.current = index
				this.toView = 'md' + (index + 1)
				console.log(this.toView);
				if (index == 0) {
					uni.createSelectorQuery().select("#md1").boundingClientRect((res) => {
						uni.pageScrollTo({
							duration: 0,
							scrollTop: -20
						})
					}).exec()
				}
				if (index == 1) {
					uni.createSelectorQuery().select("#md2").boundingClientRect((res) => {
						uni.pageScrollTo({
							duration: 0,
							scrollTop: 280
						})
					}).exec()
				}
				if (index == 2) {
					uni.createSelectorQuery().select("#md3").boundingClientRect((res) => {
						uni.pageScrollTo({
							duration: 0,
							scrollTop: 570
						})
					}).exec()
				}
			},
		},
		mounted() {
			this.baseurl = baseurl.app_url;
			// let that = this;
			// const query = uni.createSelectorQuery();
			// query.select('#md2').boundingClientRect(); //.swiper是swiper类名，获取当前swiper距离顶部的位置
			// query.exec(res => {
			// 	console.log('md1距离页面顶部的距离', res[0].top);
			// 	this.toHeight = res[0].top
			// 	console.log(res);
			// 	console.log(this.toHeight);
			// });


		},
	}
</script>

<style lang="scss">
	.A_display {
		width: 100%;
		height: auto;
	}

	.active::after {
		content: '';
		width: 40%;
		height: 1px;
		display: block;
		margin: 0 auto;
		border-bottom: 1.5px solid #1CCFC9;
		padding: 1px;
		color: #1CCFC9;
	}

	.active_bg {
		background: #1CCFC9 !important;
	}

	.active_text {
		color: #1CCFC9 !important;
	}

	.A_display-bg {
		width: 100%;
		height: 119px;
		/* position: relative; */
		z-index: 999;
		background-image: url('https://img1.imgtp.com/2022/07/02/GGmxgTVf.png');
		background-repeat: no-repeat;
		background-size: 100% 170px;
	}

	.image1 {
		width: 100%;
		height: 170px;
		// z-index: 999;
	}

	.A_display-zhong {
		width: 100%;
		height: auto;
		border-radius: 10px;
		background: #fff;
		overflow: hidden;
		z-index: -999;
	}

	.zhong_top {
		width: 100%;
		height: 120px;
		border-bottom: 0.5px solid #EEEEEE;
		display: flex;
		position: relative;
		top: -44px;
	}

	.err {
		width: 25%;
		height: 119px;
		background-color: #fff;
		text-align: center;
		// color: #000;
		display: flex;
		flex-flow: column;
		align-items: center;

		view {
			width: 100%;
			height: 50px;
			line-height: 50px;
		}

		image {
			width: 25px;
			height: 25px;
			position: relative;
			top: 26rpx;
			left: 25rpx;
			
		}

		text {
			font-size: 14px;
		}

		.bg-ccc {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			background: #F8F8F8;
			margin-top: 15px;
		}
	}

	.u-card__body {
		width: 100%;
		height: 1900rpx;
		padding: 15px 15px;
		z-index: -99;
		.u-card__body__body {
			width: 100%;
			height: auto;
			.title-big {
				width: 100%;
				height: 45px;
				line-height: 67px;
				font-size: 18px;
				font-weight: 900;
				padding-top: 10rpx;
			}
			.u-page__item{
				padding: 0 20rpx;
			}
			.title-small {
				width: 100%;
				height: 55px;
				line-height: 55px;
				font-size: 15px;
				color: #666666;
				border-bottom: 0.5px solid #EEEEEE;
				display: flex;
				justify-content: space-between;
				text-align: center;
				image {
					margin-left: 15rpx;
				}
			}
		}
	}

	.dibu {
		width: 100%;
		height: 50px;
		line-height: 70px;
		background-color: #F5F5F5;
		display: flex;
		align-items: center;
		justify-content: center;
		.dibu1 {
			color: #999999;
		}
		.my-fans {
			color: #00C8BE;
		}
	}

	.ding {
		height: 300rpx;
		background-color: aquamarine;
	}

	.st {
		height: 120px;
		width: 750rpx;
		background-color: #fff;
		z-index: 999;
	}

	.sticky-fixed {
		position: sticky;
		top: 44px;
		position: fixed;
		top: 0;
		z-index: 999;
	}

	.xiala {
		height: 2500px;
		background-color: #eee;
		padding-top: 100rpx;
	}

	.questionbag {
		position: -webkit-sticky;
		position: sticky;
		top: var(--window-top);
		z-index: 99;
		background: #fff;
	}

	.questionbag1 {
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
	}

	.cidy {
		position: relative;
		top: 0;
	}
</style>
