<template>
	<view>
		<view class="kefu-bg">
			<image class="image-bg" :src="baseurl + '/image/kefu/xiaomi.jpg'"></image>
			<!-- <view class="image-bg"></view> -->
			<view class="gao">
			</view>
		</view>
		<view class="shop_live">
			<view class="shop_list">
				<view class="bangzhu">
					<!-- 帮助中心上部分 -->
					<view class="bangzhu-top" @click="changjian(e)">
						<view class="bangzhu-cu size">帮助中心</view>
						<!-- <view class="bangzhu-cu jiantou">
							<image src="https://i-s2.328888.xyz/2022/06/30/62bd6933051f7.png" mode=""></image>
						</view> -->
					</view>
					<!-- 帮助中心下部分 -->
					<view class="bangzhu-buttom" @click="changjian(e)">
						<view class="bangzhu-cu bangzhu-buttom-left">
							<view>
								<span>订单问题</span>
							</view>
						</view>
						<!-- <view class="bangzhu-cu bangzhu-buttom-right">
							<view class="bangzhu-buttom-right-bg">
							</view>
						</view> -->
					</view>
					
					<view class="bangzhu-buttom" @click="changjian(e)">
						<view class="bangzhu-cu bangzhu-buttom-left">
							<view>
								<span>支付问题</span>
							</view>
						</view>
					<!-- 	<view class="bangzhu-cu bangzhu-buttom-right">
							<view class="bangzhu-buttom-right-bg">
							</view>
						</view> -->
					</view>
					
					
					<view class="bangzhu-buttom" @click="changjian(e)">
						<view class="bangzhu-cu bangzhu-buttom-left">
							<view>
								<span>发货问题</span>
							</view>
						</view>
						<!-- <view class="bangzhu-cu bangzhu-buttom-right">
							<view class="bangzhu-buttom-right-bg">
							</view>
						</view> -->
					</view>
					
					<view class="bangzhu-buttom" @click="changjian(e)">
						<view class="bangzhu-cu bangzhu-buttom-left">
							<view>
								<span>售后问题</span>
							</view>
						</view>
						<!-- <view class="bangzhu-cu bangzhu-buttom-right">
							<view class="bangzhu-buttom-right-bg">
							</view>
						</view> -->
					</view>
					
					<view class="bangzhu-buttom" @click="changjian(e)">
						<view class="bangzhu-cu bangzhu-buttom-left">
							<view>
								<span>审核问题</span>
							</view>
						</view>
						<!-- <view class="bangzhu-cu bangzhu-buttom-right">
							<view class="bangzhu-buttom-right-bg">
							</view>
						</view> -->
					</view>
					
					<view class="bangzhu-buttom" @click="changjian(e)">
						<view class="bangzhu-cu bangzhu-buttom-left">
							<view>
								<span>其他问题</span>
							</view>
						</view>
						<!-- <view class="bangzhu-cu bangzhu-buttom-right">
							<view class="bangzhu-buttom-right-bg">
							</view>
						</view> -->
					</view>
				</view>
				
				<!-- 客服 -->
				<view class="kefu_bottom">
					<view class="left" @click="call">
						<view class="ifg_1">
							<image src="/static/tb/dianhua.png">
							</image>
						</view>
						<view class="text">平台热线客服</view>
					</view>
					<!-- <button class="left" open-type="contact" :plain='true' :type='true'>
						<view class="ifg_1">
							<image src="/static/tb/kefu.png">
							</image>
						</view>
						<view class="text">平台在线客服</view>
					</button> -->
					
					<!--  -->
					
					<button class="left">
						<view class="ifg_2">
							<contact-button tnt-inst-id="" scene="" size="115" :icon="baseurl + 'image/kefu/ke.png'" />
						</view> 
						<!-- <view class="text">平台在线客服</view> -->
					</button>
				</view>
				
				
				<!-- 底部 -->
				<view class="bottom">
					服务时间: 周一至周日 9:00~21:30
				</view>
				
				<!-- <view class="contact-btn">
				  <contact-button tnt-inst-id="RRy_Ul17" scene="SCE01233722" />
				</view> -->
				
			</view>
		</view>
	</view>
</template>

<script>
	import baseurl from "@/config.js"
	export default {
		data() {
			return {
			baseurl:""
			};
		},
		mounted() {
			this.baseurl = baseurl.app_url;
		},
		methods: {
			call() {
				uni.makePhoneCall({
					phoneNumber: ''
				});
			},
			changjian(e) {
				uni.navigateTo({
					url: '../holpCenter/holpCenter',
				})
			}
		},
		
	};
</script>

<style lang="scss" scoped>
	.contact-btn {
	  width: 686rpx;
	  height: 96rpx;
	  background: #00cc88;
	  color: #FFF;
	  border-radius: 16rpx;
	  font-size: 32rpx;
	  font-weight: bold;
	  display: flex;
	  justify-content: center;
	  align-item: center;
	  position: relative;
	  overflow: hidden;
	}
	
	.contact-btn contact-button {
	  width: 100%;
	  height: 100%;
	  position: absolute;
	  top: 0;
	  left: 0;
	  opacity: 0;
	}
	.shop_live {
		height: 612rpx;
	}
	.shop_list {
		height: auto;
		padding: 30rpx 40rpx 0;
		position: relative;
		background: #F5F5F5;
		.shop_list_all {
			width: 670rpx;
			height: 308rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 0rpx 20rpx 2rpx rgba(0, 0, 0, 0.1);
			border-radius: 20rpx;
			opacity: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 40rpx;
			box-sizing: border-box;
			.shop_list_all_time_one {
				display: flex;
				justify-content: flex-end;
				flex-direction: column;
				.text_one {
					font-size: 44rpx;
					font-weight: 400;
					color: #000000;
				}
				.text_two {
					margin-top: 40rpx;
					font-size: 28rpx;
					font-weight: 400;
					color: #666666;
				}
			}
			.shop_list_all_time_img {
				image {
					width: 180rpx;
					height: 188rpx;
				}
			}
		}
		.shop_list_all_line {
			margin-top: -126px;
			width: 670rpx;
			height: 116rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 0rpx 20rpx 2rpx rgba(0, 0, 0, 0.1);
			border-radius: 20rpx;
			opacity: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 40rpx;
			box-sizing: border-box;
			.shop_list_all_line_one {
				display: flex;
				justify-content: flex-end;
				flex-direction: column;

				.text_three {
					font-size: 36rpx;
					font-weight: 400;
					color: #0050B4;
				}

				.text_fore {
					font-size: 28rpx;
					font-weight: 400;
					color: #666666;
					margin-top: 10rpx;

				}
			}

			.shop_list_all_line_img {
				botton {
					border: none;
					position: relative;
					top: 20rpx;
				}

				image {
					width: 96rpx;
					height: 96rpx;
					position: relative;
					top: 10rpx;                                                                                                                                                          
				}
			}
		}

		.shop_list_all_hotline {
			margin-top: 26rpx;
			width: 670rpx;
			height: 116rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 0rpx 20rpx 2rpx rgba(0, 0, 0, 0.1);
			border-radius: 20rpx;
			opacity: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 40rpx;
			box-sizing: border-box;
			margin-bottom: 600rpx;
			.shop_list_all_hotline_img {
				display: flex;
				justify-content: center;
				align-items: center;

				.shop_list_all_hotline_img_r {
					margin-left: 4rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;

					.text_five {
						font-size: 36rpx;
						font-weight: 400;
						color: #0050B4;

					}

					.text_six {
						font-size: 28rpx;
						font-weight: 400;
						color: #666666;
						margin-top: 10rpx;
					}
				}

				image {
					width: 96rpx;
					height: 96rpx;
				}
			}

			.shop_list_all_hotline_one {
				display: flex;
				align-items: center;
				justify-content: center;

				width: 148rpx;
				height: 56rpx;
				background: #E6212A;
				box-shadow: 0rpx 8rpx 8rpx 2rpx rgba(230, 33, 42, 0.25);
				border-radius: 240rpx;
				opacity: 1;

				text {
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 24rpx;
					font-weight: 400;
					color: #FFFFFF;
				}
			}
		}

	}

	.kefu-bg {
		width: 100%;
		height: 300rpx;
		z-index: -10;

		.image-bg {
			width: 100%;
			height: 300rpx;
			z-index: 0;
			background: #284A94;
		}
		.gao{
		   width: 100%;
		   height: 300rpx;
		   background-color: #2b85e4;
		  }
	}

	.bangzhu {
		width: 650rpx;
		// height: 490rpx;
		background: #fff;
		border-radius: 20rpx;
		position: relative;
		top: -154rpx;
		z-index: 9;
		padding: 0 20rpx;
		
	}

	.bangzhu-top {
		width: 650rpx;
		height: 90rpx;
		line-height: 90rpx;
		// background: greenyellow;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;

		.bangzhu-cu {
			width: 50%;
			height: 80rpx;
			line-height: 80rpx;
			// background: firebrick;
		}

		.size {
			font-size: 36rpx;
			font-weight: 900;
		}

		.jiantou {
			text-align: right;
			color: #ccc;

			image {
				width: 30rpx;
				height: 30rpx;
				margin-left: 6rpx;
				position: relative;
				top: 4rpx;
			}
		}
	}

	.bangzhu-buttom {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		// background: greenyellow;
		background: #fff;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		position: relative;
		border-bottom: 0.5px solid #ccc;
		&:before {
			content: '';
			width: 100%;
			position: absolute;
			// border-top: 0.5px solid #ccc;
		}


		.bangzhu-cu {
			width: 50%;
			height: 100rpx;
			line-height: 100rpx;
			display: flex;
			// background: firebrick;
			.bangzhu-bg {
				width: 40rpx;
				height: 40rpx;
				// background-image: url('https://i-s2.328888.xyz/2022/06/30/62bd44b826d9a.png');
				// background-size: contain;
				// background-repeat: no-repeat;
			}

			.bangzhu-bg1 {
				width: 160rpx;
				height: 40rpx;
			}
		}

		.bangzhu-buttom-left {
			text-align: left;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: start;
			// margin-left: 8px;
			// font-size: 20px
			// image {
			// 	width: 20px;
			// 	height: 20px;
			// 	// margin-left: 3px;
			// 	margin-right: 12px;
			// 	position: relative;
			// 	top: 5px;

			// }
			.bangzhu-buttom-left-image {
				width: 40rpx;
				height: 40rpx;
				margin-right: 24rpx;
				// position: relative;
				// top: 5px;
				background-image: url('https://i-s2.328888.xyz/2022/06/30/62bd44b826d9a.png');
				background-repeat: no-repeat;
				background-size: 100% 100%;
			}

			// https://i-s2.328888.xyz/2022/06/30/62bd44b6a7a69.png
			.bangzhu-buttom-left-image1 {
				width: 40rpx;
				height: 40rpx;
				margin-right: 24rpx;
				// position: relative;
				// top: 5px;
				background-image: url('https://i-s2.328888.xyz/2022/06/30/62bd44b6a7a69.png');
				background-repeat: no-repeat;
				background-size: 100% 100%;
			}

			.bangzhu-buttom-left-image2 {
				width: 40rpx;
				height: 40rpx;
				margin-right: 24rpx;
				// position: relative;
				// top: 5px;
				background-image: url('https://i-s2.328888.xyz/2022/06/30/62bd44b6676bb.png');
				background-repeat: no-repeat;
				background-size: 100% 100%;
			}

			.bangzhu-buttom-left-image3 {
				width: 40rpx;
				height: 40rpx;
				margin-right: 24rpx;
				// position: relative;
				// top: 5px;
				background-image: url('https://i-s2.328888.xyz/2022/06/30/62bd44b766929.png');
				background-repeat: no-repeat;
				background-size: 100% 100%;
			}

			span {
				font-size: 30rpx
			}
		}

		.bangzhu-buttom-right {
			width: 300rpx;
			height: auto;
			display: flex;
			align-items: center;
			justify-content: flex-end;

			.bangzhu-buttom-right-bg {
				width: 30rpx;
				height: 30rpx;
				background-image: url('https://i-s2.328888.xyz/2022/06/30/62bd6933051f7.png');
				background-repeat: no-repeat;
				background-size: 100% 100%;
				margin-right: 0;
			}
		}
	}
	
	.oooo {
		width: 100%;
		height: 1800rpx;
		background: #ccc;
		position: relative;
	}

	.kefu_bottom {
		width: 100%;
		height: 140rpx;
		border-radius: 20rpx;
		display: flex;
		justify-content: space-between;
		// border: 1px solid #ccc;
		// background-color: green;
		// margin-top: 60rpx;
		// line-height:70px;
		position: relative;
		top: -110rpx;
		

		.left {
			width: 49%;
			height: 140rpx;
			background-color: #fff;
			border-radius: 20rpx;
			border: 0;
			color: #000;
			display: flex;
			flex-flow: row;
			align-items: center;
			justify-content: space-evenly;

			.ifg_1 {
				width: 60rpx;
				height: 60rpx;

				image {
					width: 60rpx;
					height: 60rpx;
				}
			}
			
			.ifg_2 {
				height: 80rpx;
				image {
					width: 60rpx;
					height: 60rpx;
				}
			}

			image {
				width: 30rpx;
				height: 30rpx;
				position: relative;
				top: 4rpx;
			}

			.text {
				font-size: 30rpx;
				font-weight: 900;
			}
		}
	}

	.bottom {
		width: 100%;
		height: 140rpx;
		line-height: 140rpx;
		text-align: center;
		color: #666666;
		font-size: 24rpx;
		position: relative;
		top: -110rpx;
	}
</style>
