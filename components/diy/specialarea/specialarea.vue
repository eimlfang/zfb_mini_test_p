<template>
	<view>
		<scroll-view class="parent" scroll-x="true">
			<view class="item" v-for="item in 6">
				<image src="https://renrenzuphp.rchz.top/uploads/images/2021102816492184e7c6254.jpg" mode=""></image>
				<view class="info">
					<view>小米专区</view>
					<view>抢惊喜福利</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.parent{
		white-space: nowrap;
		padding: 0 20rpx;
		display: flex;
	}
	.item:last-child{
		 padding-right: 30rpx;
	}
	.item{
		display: flex;
		margin: 0 20rpx;
		flex-direction: column;
		width: 300rpx;
		height: 420rpx;
		image{
			width: 300rpx;
			height: 300rpx;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
		}
		.info{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: #FFF;
			height: 120rpx;
			border-bottom-left-radius: 20rpx;
			border-bottom-right-radius: 20rpx;
			view:nth-child(1){
				font-size: 35rpx;
				margin-bottom: 10rpx;
			}
			view:nth-child(2){
				width: 150rpx;
				background-color: #E0EEF7;
				color:#24A3FF;
				text-align: center;
				border-radius: 10rpx;
			}
		}
	}
	.item:last-child{
		margin-right: 50rpx;
	}
</style>
