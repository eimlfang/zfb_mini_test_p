<template>
	<view class="diy-seckillProduct" v-if="itemData.data.product_list.length>0">
		<view class="sharpproduct-head d-b-c" :style="'background-image: url('+itemData.style.background_image+');'">
			<view class="left d-s-c">
				<view class="name d-c-c">
				</view>
				<view class="datetime d-s-c ml20">
					<Countdown :back_color="itemData.style.countdown_back_color" :color='itemData.style.color'
						:cut_color="itemData.style.countdown_color" :config="countdownConfig"></Countdown>
				</view>
			</view>
			<view class="right d-e-c" @click="gotoList">
				<text class="gray3 f26">更多</text>
				<text class="iconfont icon-jiantou mr10"></text>
			</view>
		</view>
		<view class="sharpproduct-body column__3">
			<scroll-view scroll-x="true">
				<view class="product-list">
					<view class="product-item" v-for="(item, index) in itemData.data.product_list" :key="index"
						@click="gotoDetail(item.seckill_product_id)">
						<!-- 两列三列 -->
						<template>
							<view class="product-cover">
								<image :src="item.product.file_path" mode="aspectFit"></image>
							</view>
							<view class="product-info p-0-10">
								<view v-if="itemData.style.show.seckillPrice == true" class="theme-price mb10">
									<text class="f18 fb">¥</text>
									<text class="f26 fb">{{ item.seckill_price }}</text>
								</view>
								<view class="gray9 f20 text-d-line" v-if="itemData.style.show.linePrice == true">
									¥{{ item.product_price }}</view>
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
				let url = '/pages/plus/seckill/list/list';
				uni.navigateTo({
					url:url
				});
			},

			/*跳转产品详情*/
			gotoDetail(e) {
				let url = '/pages/plus/seckill/detail/detail?seckill_product_id=' + e;
				uni.navigateTo({
					url:url
				});
			}
		}
	};
</script>

<style lang="scss">
	.diy-seckillProduct {
		margin: 20rpx 20rpx;
		border-radius: 6rpx;
		@include background_linear('bg-bargain', 'text_color1', 180deg, 0%, 100%);
		overflow: hidden;
		box-shadow: 0px 8rpx 3rpx 0px rgba(6, 0, 1, 0.03);
	}

	.diy-seckillProduct .sharpproduct-head {
		height: 90rpx;
		color: #000000;
		background-size: 100% 100%;
	}

	.diy-seckillProduct .name {
		width: 200rpx;
	}

	.diy-seckillProduct .sharpproduct-body {
		padding: 0 20rpx;
	}

	.diy-seckillProduct .sharpproduct-head .name {
		font-size: 32rpx;
		font-weight: bold;
	}

	.diy-seckillProduct .sharpproduct-head .datetime::v-deep text {
		font-size: 24rpx;
		color: #ffffff;
	}

	.diy-seckillProduct .sharpproduct-head .datetime::v-deep .box {
		padding: 4rpx 10rpx;
		font-size: 22rpx;
		background: #FFEBEB;
		color: #EE1413;
	}

	.diy-seckillProduct .sharpproduct-head .icon-jiantou {
		margin-left: 8rpx;
		color: #333333;
		font-size: 22rpx;
	}

	.diy-seckillProduct .product-list .product-item {
		overflow: hidden;
		flex-shrink: 0;
	}

	.diy-seckillProduct .product-list .product-cover image {
		width: 100%;
		height: 100%;
		background-color: #F4F4F4;
		border-radius: 12rpx;
	}

	.diy-seckillProduct .product-list .price {
		font-size: 20rpx;
		color: #F01A1A;
		line-height: 26rpx;
		padding-top: 16rpx;
		padding-bottom: 8rpx;
	}

	.diy-seckillProduct .product-list .product-title {
		margin-top: 26rpx;
		height: 30rpx;
		line-height: 30rpx;
		display: -webkit-box;
		overflow: hidden;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		font-size: 30rpx;
	}

	.diy-seckillProduct .column__3 .product-list .product-title {
		font-size: 28rpx;
	}

	.diy-seckillProduct .column__3 .product-list {
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
	}

	.diy-seckillProduct .column__3 .product-item {
		width: 132rpx;
		margin-right: 46rpx;
		border-radius: 6rpx;
		overflow: hidden;
		margin-top: 20rpx;
		padding-bottom: 16rpx;
	}

	.diy-seckillProduct .column__3 .product-cover {
		width:132rpx;
		height: 132rpx;
		margin: 0 auto;
		margin-bottom: 16rpx;
	}

	.diy-assembleproduct .product-list {
		flex-wrap: nowrap;
	}
</style>
