<template>
	<view class="diy-bargainProduct" v-if="itemData.data.product_list.length>0">
		<view class="bargainProduct-head d-b-c" :style="'background-image: url('+itemData.style.background_image+');'">
			<view class="left d-s-c">
				<view class="name color_bargain d-c-c">
				</view>
				<view class="datetime d-s-c ml20">
					<Countdown :back_color="itemData.style.countdown_back_color" :color='itemData.style.color'
						:cut_color="itemData.style.countdown_color" :config="countdownConfig"></Countdown>
				</view>
			</view>
			<view class="right" @click="gotoList">
				<text class="f26 color_bargain ">更多</text>
				<text class="iconfont icon-jiantou mr20"
					style="font-size: 22rpx;margin-left: 4rpx;color: #333333;"></text>
			</view>
		</view>
		<view class="bargainProduct-body">
			<scroll-view scroll-x="true">
				<view class="product-list column__3">
					<view class="product-item" v-for="(item, index) in itemData.data.product_list" :key="index"
						@click="gotoDetail(item.bargain_product_id)">
						<!-- 两列三列 -->
						<template>
							<view class="product-cover">
								<image :src="item.product.file_path" mode="aspectFit"></image>
							</view>
							<view class="product-info p-0-10">
								<view v-if="itemData.style.show.floorPrice == '1'" class="theme-price mb10">
									<text class="f18">¥</text>
									<text class="f26 fb">{{ item.bargain_price }}</text>
								</view>
								<view class="gray9 text-d-line f20" v-if="itemData.style.show.originalPrice == '1'">
									¥{{ item.product_price }}
								</view>
							</view>
						</template>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Countdown from '@/components/countdown/countdown-act.vue';
	export default {
		components: {
			Countdown
		},
		data() {
			return {
				/*倒计时配置*/
				countdownConfig: {
					/*开始时间*/
					startstamp: 0,
					/*结束时间*/
					endstamp: 0,
					/*标题*/
					title: ' '
				}
			};
		},
		props: ['itemData'],
		created() {
			this.countdownConfig.endstamp = this.itemData.data.end_time;
			this.countdownConfig.startstamp = this.itemData.data.start_time;
		},
		methods: {
			scroll(e) {},

			/*跳转列表*/
			gotoList() {
				let url = '/pages/plus/bargain/list/list';
				uni.navigateTo({
					url:url
				});
			},

			/*跳转详情*/
			gotoDetail(e) {
				let url = '/pages/plus/bargain/detail/detail?bargain_product_id=' + e;
				uni.navigateTo({
					url:url
				});
			}
		}
	};
</script>

<style lang="scss">
	.color_bargain {
		color: #333333;
	}

	.diy-bargainProduct {
		margin: 20rpx;
		border-radius: 6rpx;
		@include background_linear('bg-bargain', 'text_color1', 180deg, 0%, 100%);
		overflow: hidden;
		box-shadow: 0px 8rpx 3rpx 0px rgba(6, 0, 1, 0.03);
	}

	.diy-bargainProduct .bargainProduct-body {
		padding: 0 20rpx;
	}

	.bargainProduct-head {
		height: 90rpx;
		background-size: 100% 100%;
	}

	.bargainProduct-head .name {
		font-size: 32rpx;
		font-weight: bold;
		width: 200rpx;
	}

	.bargainProduct-head .datetime::v-deep>span {
		display: inline-block;
	}

	.bargainProduct-head .datetime::v-deep text {
		font-size: 24rpx;
		color: #ffffff;
	}

	.bargainProduct-head .datetime::v-deep .box {
		padding: 4rpx 10rpx;
		font-size: 22rpx;
		background: #FFFFFF;
		color: #FFFFFF;
	}

	.diy-bargainProduct .product-list image {
		width: 100%;
		height: 100%;
	}

	.diy-bargainProduct .product-list .product-title {
		margin-top: 32rpx;
		height: 40rpx;
		line-height: 40rpx;
		display: -webkit-box;
		overflow: hidden;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		font-size: 30rpx;
	}

	.diy-bargainProduct .product-list .price {
		height: 24rpx;
		line-height: 24rpx;
	}

	.diy-bargainProduct .product-list.column__3 {
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
	}

	.diy-bargainProduct .column__3 .product-item {
		width: 132rpx;
		margin-right: 46rpx;
		border-radius: 6rpx;
		overflow: hidden;
		margin-top: 20rpx;
		padding-bottom: 16rpx;
	}

	.diy-bargainProduct .column__3 .product-cover {
		width: 132rpx;
		height: 132rpx;
		margin: 0 auto;
		border-radius: 6rpx;
		overflow: hidden;
		margin-bottom: 16rpx;
	}

	.bargain_btn {
		background: #fe3c30;
		width: 202rpx;
		height: 46rpx;
		line-height: 46rpx;
		font-size: 22rpx;
		text-align: center;
		color: #FFFFFF;
		margin: 0 auto;
		border-radius: 24rpx;
		margin-bottom: 28rpx;
	}
</style>
