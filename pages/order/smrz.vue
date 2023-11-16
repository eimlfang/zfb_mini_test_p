<template>
	<view class="item">
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
						提交既同意爱签采集人脸照片并提供给：xxx用于实名认证
					</view>
				</view>

				<view class="sfxx3">
					<view class="sfxx4">
						<view style="font-size: 30rpx;">
							您的姓名：
						</view>
						<u--input placeholder="您的姓名" border="surround" v-model="value1"></u--input>
					</view>

					<view class="sfxx4">
						<view style="font-size: 30rpx;">
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
</template>

<script>
	export default {
		data() {
			return {
				value1: "",
				value2: "",
				id:"",
				dataurl:""
			}
		},
		onLoad(e) {
			this.id = e.order_id;
			this.getinfo();
		},
		methods: {
			getinfo(){
				let self = this;
				self._get('user.index/setting', {},
					function(res) {
						console.log(res.data.userInfo.username, res.data.userInfo.usernum);
						self.value1 = res.data.userInfo.username;
						self.value2 = res.data.userInfo.usernum;
					})
			},
			queding() {
				let self = this;
				console.log(self.value1, self.value2);
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
						if(res.code == 1){
							// order.authentication/authentication
							self._post('order.order/faceAuthentication', {
								order_id :self.id,
								name : self.value1,
								idno : self.value2
							}, (res) => {
								my.ap.openURL({ url: res.data.url,
								success: (res) => {
									self._post('order.order/renzheng', {'order_id':self.id,'states':res.success?1:0}, (res) => {})
									self._post('order.order/faceStates', {"states":res.success?1:0}, (res) => {})
									// uni.navigateTo({
									// 	url:"/pages/order/webview?url=" + res.data.authUrl
									// })
									uni.navigateTo({
										url: '/pages/order/order-detail?order_id=' +
											self.id
									})
								}, 
								fail: (err) => my.alert({ 
									title: 'openURL fail: ' + JSON.stringify(err) }), 
								});
								// my.ap.openURL({
								//   url: res.data.authUrl,
								//   success: (res) => console.log('openURL success'),
								//   fail: (err) => my.alert({ title: 'openURL fail: ' + JSON.stringify(err) })
								// });
								// window.my.postMessage({
								//  type: 'IDENTITY_ALI_FACE_AWAKE',
								//  url: res.data.authUrl,
								//  token,
								// })
								// uni.navigateTo({
								// 	url:"/pages/order/webview?url=" + res.data.authUrl
								// })
								
								// var dataurl = res.data.url;
								// let cid = res.data.certify_id;
								// my.startAPVerify({
								// 	url: dataurl,
								// 	certifyId: cid,
								// 	success: function(res) {
								// 		console.log('success', res)
								
								
								// uni.navigateTo({
								// 	url: '/pages/order/order-detail?order_id=' + self.id
								// })
								// 		if (res.resultStatus == '9000') {
								// 			uni.showLoading({
								// 				title: '加载中',
								// 				mask: true
								// 			});
											
								// 			self._post('order.order/renzheng', {"states":"1", 'order_id':self.id}, (res) => {})
								// 		}
								// 	},
								// 	fail: function(res) {
								// 		console.log(11111);
								// 		self._post('order.order/renzheng', {'order_id':self.id}, (res) => {})
								// 		console.log('fail', res)
								// 	},
								// 	complete: function(res) {
								// 		console.log(22222);
								// 		console.log('complete', res)
								// 	}
								// })
							}, function(err) {
								// self._post('order.order/renzheng', {'order_id':self.id}, (res) => {})
								// self._post('order.order/faceStates', {"states":"0"}, (res) => {})
							})
						}else{
							uni.showToast({
								title: "提交失败",
								duration: 2000
							});
						}
						
					})
			},
			// onWebviewMessage(message) {
			//   console.log('onWebviewMessage>>>>>', message)
			//   const { detail: { type, token, url } } = message
			//   if (type === 'IDENTITY_ALI_FACE_AWAKE') {
			//     //拉起支付宝刷脸认证
			//     my.startAPVerify({
			//       url,
			//       certifyId: token,
			//       success: function (res) {
			//         console.log('success', res)
			//       },
			//       fail: function (res) {
			//         console.log('fail', res)
			//       },
			//       complete: function (res) {
			//         console.log('complete', res)
			//       }
			//     })
			//     return
			//   }
			//    //认证授权暂不支持以下两种type的识别
			//   if (type === 'WILL_DONE') {
			//     console.log('WILL_DONE>>do something')
			//     return
			//   }
			//   if (type === 'RN_DONE') {
			//     console.log('RN_DONE>>do something')
			//     return
			//   }
			 
			// }
		},
		
	}
</script>

<style lang="scss">
	.item {}

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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #F5F5F5;

		.sfxx {
			width: 85%;
			padding: 15rpx 0;
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
</style>
