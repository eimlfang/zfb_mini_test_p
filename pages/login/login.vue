<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="wechatapp">
				<view class="header">
					<open-data class="" type="userAvatarUrl"></open-data>
				</view>
			</view>
			<view class="auth-title">申请获取以下权限</view>
			<view class="auth-subtitle">获得你的公开信息（昵称、头像等）</view>
			<view class="login-btn">
				<button class="btn-normal" @click="getUserInfo">授权登录</button>
			</view>
			<view class="no-login-btn">
				<button class="btn-normal" @click="onNotLogin">暂不登录</button>
			</view>
		<!-- #endif -->
		
		<!-- #ifndef MP-WEIXIN -->
		<view class="login-container">
			<u-icon name="zhifubao-circle-fill" size="60" color="#1677ff" />
			<view class="title xxl mt20 bold">支付宝授权登录</view>
			<button size="lg" class="white br60 row-center btn"
				style="background-color: #1677ff;width: 670rpx;border-radius: 40rpx;" open-type="getAuthorize"
				@getAuthorize="onGetAuthorize" @error="onAuthError" scope='userInfo'>
				<text>支付宝一键授权</text>
			</button>
			<view class="muted mt20">支付宝授权登录后才可进行更多操作哦</view>
		</view>
		<!-- #endif -->
	</view>
	
	
</template>

<script>
	export default {
		data() {
			return {
				background: '',
				listData: []
			}
		},
		onShow() {
			//wx.login(); //重新登录
		},
		onLoad() {
			// #ifdef MP-WEIXIN
					// #endif
		},
		methods: {
			// 获取支付宝会员信息
			getAlipayUserInfo() {
				return new Promise((resolve, reject) => {
					my.getOpenUserInfo({
						success: (res) => {
							const userInfo = JSON.parse(res.response)
							// .response; // 以下方的报文格式解析两层 response   
							resolve(userInfo);
							console.log("成功")
						},
						fail: (res) => {
							console.log("失败")
							reject(res);
						}
					});
				});
			},
			onAuthError(){
				uni.showModal({
						title:"提示",
						content:"取消授权，可能导致服务无法使用，或者页面显示不完整",
						success:function(res){
						if(res.confirm){
						console.log("我知道了")
						uni.switchTab({
							url:"/pages/index/index"
						})
						}else{			
						console.log("重新授权")
					}}
				})
			},
			// 支付宝登录
			async onGetAuthorize() {
				// 获取授权码
				my.getAuthCode({
					scopes: ['auth_base'],
					success: (res) => {
						console.log(res.authCode + '看看')
						this.getAlipayUserInfo().then(info => {
							console.log(info, "用户信息")
							this._post('user.usermp/mnpAlipayAuthLogin', {
								code: res.authCode,
								avatar: info.response.avatar,
								nickname: info.response.nickName,
								// avatar: 123,
								// nickname: 123,
							}, res => {
								uni.setStorageSync('token', res.data.data.token);
								uni.setStorageSync('user_id', res.data.data.user_id);
								// 执行回调函数
								uni.navigateBack({
									delta: 1
								});
							})
							// authAlipayLogin({
							// 	code: res.authCode,
							// 	avatar: info.response.avatar,
							// 	nickname: info.response.nickName,
							// }).then(res => {
							// 	uni.hideLoading();
							// 	if (res.code == 1) {
							// 		this.loginHandle(res.data);
							// 	} else {
							// 		uni.showToast({
							// 			title: res.msg
							// 		});
							// 	}
							// }).catch(err => {
							// 	uni.hideLoading();
							// 	uni.showToast({
							// 		title: '登录失败'
							// 	});
							// });
						}).catch(err => {
							uni.showToast({
								title: '获取不到用户信息'
							});
							console.log(err + "失败了");
						})


					},
				});
				// 获取用户信息
			},
			changeMsg() {
				if (this.second > 0) {
					this.send_btn_txt = this.second + '秒';
					this.second--;
					setTimeout(this.changeMsg, 1000);
				} else {
					this.send_btn_txt = '获取验证码';
					this.second = 60;
					this.is_send = false;
				}
			},
			onNotLogin: function() {
				this.gotoPage('/pages/index/index')
			},
			getUserInfo: function() {
				let self = this;
				wx.getUserProfile({
					lang: 'zh_CN',
					desc: '用于完善会员资料',
					success: (res) => {
						console.log(res);
						if (res.errMsg !== 'getUserProfile:ok') {
							return false;
						}
						uni.showLoading({
							title: "正在登录",
							mask: true
						});
						// 执行微信登录
						wx.login({
							success(res_login) {
								// 发送用户信息
								self._post('user.user/login', {
									code: res_login.code,
									user_info: res.rawData,
									encrypted_data: encodeURIComponent(res.encryptedData),
									iv: encodeURIComponent(res.iv),
									signature: res.signature,
									referee_id: uni.getStorageSync('referee_id'),
									source: 'wx'
								}, result => {
									// 记录token user_id
									uni.setStorageSync('token', result.data.token);
									uni.setStorageSync('user_id', result.data.user_id);
									// 执行回调函数
									uni.navigateBack();
								}, false, () => {
									uni.hideLoading();
								});
							}
						});
					}
				});
			},
		},
	}
</script>

<style lang="scss">
	.login-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 500rpx;
	}

	.title {
		font-size: 40rpx;
		color: #585858;
		margin-bottom: 10rpx;
	}

	.wechatapp {
		padding: 80rpx 0 48rpx;
		border-bottom: 1rpx solid #e3e3e3;
		margin-bottom: 72rpx;
		text-align: center;
	}

	.wechatapp .header {
		width: 190rpx;
		height: 190rpx;
		border: 2px solid #fff;
		margin: 0rpx auto 0;
		border-radius: 50%;
		overflow: hidden;
		box-shadow: 1px 0px 5px rgba(50, 50, 50, 0.3);
	}

	.auth-title {
		color: #585858;
		font-size: 34rpx;
		margin-bottom: 40rpx;
	}

	.auth-subtitle {
		color: #888;
		margin-bottom: 88rpx;
		font-size: 28rpx;
	}

	.login-btn {
		padding: 0 20rpx;
	}

	.login-btn button {
		height: 88rpx;
		line-height: 88rpx;
		background: #04be01;
		color: #fff;
		font-size: 30rpx;
		border-radius: 999rpx;
		text-align: center;
	}

	.no-login-btn {
		margin-top: 20rpx;
		padding: 0 20rpx;
	}

	.no-login-btn button {
		height: 88rpx;
		line-height: 88rpx;
		background: #dfdfdf;
		color: #fff;
		font-size: 30rpx;
		border-radius: 999rpx;
		text-align: center;
	}

	.mpwx-login {
		margin-top: 400rpx;

		.user-name {
			height: 40rpx;
		}

		.image {
			width: 50rpx;
			height: 50rpx;
		}

		.btn {
			background-color: #09BB07;
			width: 580rpx;
			margin: 80rpx auto 0;
		}
	}


	.h5-login {
		padding-top: 100rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		box-sizing: border-box;

		.logo {
			width: 280rpx;
			height: 80rpx;
			margin-bottom: 50rpx;
		}

		.input {
			width: 670rpx;
			margin-top: 30rpx;
		}

		.sms-btn {
			border: 1px solid red;
			width: 176rpx;
			height: 60rpx;
			box-sizing: border-box;
		}

		.wx-login {
			margin-top: 60rpx;

			.image {
				margin-top: 40rpx;
				width: 80rpx;
				height: 80rpx;
			}
		}
	}
</style>
