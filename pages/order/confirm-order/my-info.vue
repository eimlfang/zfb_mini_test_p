<template>
	<view class="my_info br6">
		<!--地址-->

		<view class="address-defalut-wrap" @click="shdz" >
			<view class="d-b-c">
				<!-- <view class="add-addr flex-1">
					<view class="icon-box mr10 f-s-0">
						<text class="icon iconfont icon-dizhi1"></text>
					</view>
					<view class="flex-1">
						<view class="info mb10"> -->
						<!-- <text class="province-c-a f28 fb text-ellipsis-2">{{Address.region.province}}{{Address.region.city}} {{Address.region.region}}{{Address.detail}}</text> -->
						<!-- <text class="province-c-a f28 fb text-ellipsis-2">{{address}}{{country}} {{prov}}{{city}}{{area}}{{street}}{{fullname}}{{mobilePhone}}</text> -->
					<!-- 	</view>
						
					</view>
				</view> -->
				<view class="gray9">
					<block v-if="addressObj_states == true">
						<view class="top">
							<text>{{addressObj.fullname}}</text>
							<text>{{addressObj.mobilePhone}}</text>
						</view>
						<view class="xia">
							<text>{{addressObj.prov}}</text>
							<text>{{addressObj.city}}</text>
							<text>{{addressObj.area}}</text>
							<text>{{addressObj.address}}</text>
						</view>
						
					</block>
					<block v-else>
						<view style="font-family: 'Adobe Heiti Std R';font-weight: bold;font-size: 34rpx;color: #121116;">选择地址</view>
						<view class="zhuyi">注意：地址请写详情例如 (XX楼XX栋)</view>
					</block>
				</view>
				
				<view class="icon iconfont icon-jiantou ml80 f-s-0">
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressObj:{},
				addressObj_states: false
			}
		},
		props: ['exist_address'],
		methods: {
			// 点击 收货地址
			shdz(){
				my.getAddress({
				  success: (res) => {
				   if (res.resultStatus == 9000) {
					this.addressObj = res.result
					this.addressObj_states = true
					this.$emit('changestates',this.addressObj)
					console.log(this.addressObj)
				   } else {
					 console.log("getAddress cancel", JSON.stringify(res));
				   }
				  },
				  fail: (res) => {
					console.log(res,123)
					// my.alert({
					//   title: "getAddress fail",
					//   content: JSON.stringify(res)
					// });
				  }
				});
				
			},
		}
	}
</script>

<style lang="scss">
	
	.gray9{
		padding: 10rpx;
		.top{
			text{
				margin-right: 15rpx;
			}
		}
		.xia{
			margin: 20rpx 0;
		}
	}
	
	
	.info {
		font-size: 33rpx;
		line-height: 43rpx;
	}

	.add-addr {
		display: flex;
		align-items: center;
	}

	.tel {
		font-size: 27rpx;
		color: #999999;
	}

	.choose-address {
		width: 88rpx;
		height: 88rpx;
		margin-right: 35rpx;
	}

	.icon-dizhi {
		margin-right: 25rpx;
		color: #ff6633;
		font-size: 60rpx;
	}

	.addree_icon {
		width: 42rpx;
		height: 42rpx;
	}

	.my_info {
		background-color: #FFFFFF;
		margin-top: 16rpx;
	}

	.icon-box .icon.icon-dizhi1 {
		@include font_color('font_color');
		font-size: 44rpx;
	}

	.my_info .icon.icon-jiantou {
		color: #333333;
		font-size: 24rpx;
	}
	.zhuyi{
		margin-top: 20rpx;
	}
</style>
