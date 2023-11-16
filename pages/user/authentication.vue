<template>
	<view>
		<view class="mb30">
			<u-notice-bar :text="text1"></u-notice-bar>
		</view>
		<view class="renzheng">
			<!-- 实名认证 -->
			<view class="content" @click="goUrl(1)">
				<view class="left">
					<view class="top">
						实名认证
					</view>
					<view class="buttom">
						认证身份证信息
					</view>
				</view>
				<view class="right">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<!-- 紧急联系人 -->
			<view class="content" @click="goUrl(2)">
				<view class="left">
					<view class="top">
						紧急联系人
					</view>
					<view class="buttom">
						非紧急情况下不会打扰
					</view>
				</view>
				<view class="right">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<!-- 个人基本信息 -->
			<view class="content" @click="goUrl(3)">
				<view class="left">
					<view class="top">
						个人基本信息
					</view>
					<view class="buttom">
						提交资料加速审核
					</view>
				</view>
				<view class="right">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text1: "请尽快完成以下信息认证，如实填写会大幅提高审核通过率"
			}
		},
		methods: {
			goUrl(val) {
				if (val == 1) {
					console.log(val, "1");
					uni.navigateTo({
						url: "/pages/user/modify-phone/userAuther"
					})
				} else if (val == 2) {
					console.log(val, "2");
					uni.navigateTo({
						url: "/pages/user/emergency"
					})
				} else if (val == 3) {
					console.log(val, "3");
					uni.navigateTo({
						url: "/pages/user/BasicInfo"
					})
				}
			}
		},
		onLoad() {

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F7F6FB;
	}
	.renzheng{
		border-radius: 20rpx;
		background-color: #FFFFFF;
		margin: 20rpx;
	}
	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 25rpx;
		border-radius: 25rpx;
		.left {
			view {
				margin: 10rpx;
			}

			.top {
				color: #2F3131;
				font-size: 34rpx;
				font-weight: 700;
				// font-family: 'Microsoft Yahei';
			}

			.buttom {
				color: #B1B1B1;
				font-size: 24rpx;
			}
		}
	}
</style>
