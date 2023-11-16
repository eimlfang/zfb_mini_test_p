<template>
	<view class="diy-assembleproduct" v-if="itemData.data.product_list.length>0">
		<view class="diy-head d-b-c" :style="'background-image: url('+itemData.style.background_image+');'">
			<view class="right" @click="gotoList">
				<text class="f26 gray3">更多</text>
				<text class="iconfont icon-jiantou"></text>
			</view>
		</view>
		<view class="diy-body">
			<scroll-view scroll-x="true">
				<view class="product-list column__3">
					<view class="product-item" v-for="(item, index) in itemData.data.product_list" :key="index"
						@click="gotoDetail(item)">
						<!-- 两列三列 -->
						<template>
							<view class="product-title text-ellipsis-2" v-if="itemData.style.show.productName === true">
								{{ item.product.product_name }}
							</view>
							<view class="d-b-c">
								<view class="product-cover pr">
									<image :src="item.product.file_path" mode="aspectFit"></image>
									<view class="assemble-num"><text>{{ item.assemble_num }}人团</text></view>
								</view>
								<view class="flex-1">
									<view class="product-info p-0-10">
										<view class="product-price" v-if="itemData.style.show.assemblePrice == true">
											<view class="mb10">
												<text class="theme-price fb f18">¥</text>
												<text class="theme-price fb f26">{{ item.assemble_price }}</text>
											</view>
											<view class="gray9 text-d-line f20"
												v-if="itemData.style.show.linePrice == true">¥{{ item.product_price }}
											</view>
										</view>
									</view>
									<view class="assemble_btn theme-btn">去开团</view>
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
	export default {
		components: {},
		data() {
			return {};
		},
		props: ['itemData'],
		created() {
			console.log(this.$props.itemData)
		},
		methods: {
			scroll(e) {},

			/*跳转列表*/
			gotoList() {
				let url = '/pages/plus/assemble/list/list';
				uni.navigateTo({
					url:url
				});
			},

			/*跳转产品详情*/
			gotoDetail(e) {
				let url = '/pages/plus/assemble/detail/detail?assemble_product_id=' + e.assemble_product_id;
				uni.navigateTo({
					url:url
				});
			}
		}
	};
</script>

<style lang="scss">
	.diy-assembleproduct {
		margin: 20rpx;
		border-radius: 6rpx;
		padding: 0 20rpx 20rpx;
		@include background_color('bg-assemb');
		box-shadow: 0px 8rpx 3rpx 0px rgba(6, 0, 1, 0.03);
	}

	.diy-assembleproduct .diy-head {
		height: 90rpx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		background-size: 100% 100%;

	}

	.diy-assembleproduct .diy-head .name {
		font-size: 32rpx;
		font-weight: bold;
	}

	.diy-assembleproduct .diy-head .datetime {
		margin-left: 40rpx;
	}

	.diy-assembleproduct .diy-head .datetime::v-deep>span {
		display: inline-block;
	}

	.diy-assembleproduct .diy-head .datetime::v-deep text {
		font-size: 24rpx;
		color: #F6220C;
	}

	.diy-assembleproduct .diy-head .datetime::v-deep .box {
		padding: 4rpx;
		font-size: 22rpx;
		background: #F6220C;
		color: #F6220C;
	}

	.diy-assembleproduct .diy-head .icon-jiantou {
		margin-left: 8rpx;
		color: #333333;
		font-size: 22rpx;
	}

	.diy-assembleproduct .product-list {
		flex-wrap: nowrap;
	}

	.diy-assembleproduct .product-list .product-item {
		flex-shrink: 0;
		border-radius: 12rpx;
		width: 442rpx;
		overflow: hidden;
	}

	.diy-assembleproduct .product-list image {
		width: 100%;
		height: 100%;
		background-color: #f6f6f6;
	}

	.diy-assembleproduct .product-list .product-title {
		font-size: 24rpx;
		line-height: 36rpx;
		color: #333333;
		height: 72rpx;
	}

	.diy-assembleproduct .product-list .product-price {
		margin-bottom: 16rpx;
		text-align: left;
	}

	.diy-assembleproduct .product-list.column__3 .product-title {
		font-size: 24rpx;
		line-height: 36rpx;
		color: #333333;
		height: 72rpx;
		margin-bottom: 14rpx;
	}

	.diy-assembleproduct .product-list.column__2,
	.diy-assembleproduct .product-list.column__3 {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.diy-assembleproduct .product-list .assemble-num {
		padding: 4rpx 16rpx;
		font-size: 24rpx;
		color: #ffffff;
		position: absolute;
		bottom: 2rpx;
		left: 2rpx;
		background: linear-gradient(60deg, #FC4528 0%, #FC573C 43%, #FC7639 100%);
		border-top-left-radius: 12rpx;
		border-bottom-right-radius: 12rpx;
		height: 33rpx;
		line-height: 33rpx;
	}

	.diy-assembleproduct .column__3 .product-item {
		width: 442rpx;
		margin-right: 20rpx;
		padding: 21rpx 28rpx;
		box-sizing: border-box;
		@include background_linear('bg-assemb2', 'text_color1', 180deg, 0%, 100%);
		box-shadow: 0px 8rpx 3rpx 0px rgba(6, 0, 1, 0.03);
	}

	.diy-assembleproduct .column__3 .product-cover {
		width: 126rpx;
		height: 126rpx;
		margin: 0 auto;
		border-radius: 5rpx;
		overflow: hidden;
		flex-shrink: 0;
		margin-right: 22rpx;
	}

	.diy-assembleproduct .column__3 .assemble_btn {
		width: 126rpx;
		height: 40rpx;
		font-size: 20rpx;
		text-align: center;
		border-radius: 24rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
