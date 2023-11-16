<template>
	<view class="login-container">
		<view class="p30">
			<view class="group-bd">
				<view class="beijing">
					<image src="../../../static/hha/jbkj.png" class="jbkj"></image>
				</view>
				<view class="kongge"></view>
				<view>
					<view class="shimingrenzhng">
						实名认证 (如暂无照片，可先传任意照片，审核通过后补传既可)
						
						<view style="margin-top: 20rpx;">
							如遇上传无效或失败，重新进入该页面上传即可
						</view>
					</view>
				</view>
				<view class="shenfen">点击下面方框上传身份证正面照:</view>
				<view class="diyige" @click="changeAvatarUrl">
					<image src="../../../static/hha/add.png" v-if="formData.sfzpositive == ''" class="jiahao"></image>
					<image style="width: 320rpx;height: 180rpx;" :src="formData.sfzpositive"
						v-model="formData.sfzpositive" class="dingwei"></image>
				</view>
				<view class="shenfen">点击下面方框上传身份证反面照:</view>
				<view class="diyige" @click="changeAvatarUrl1">
					<image src="../../../static/hha/add.png" v-if="formData.sfzback == ''" class="jiahao"></image>
					<image style="width: 320rpx;height: 180rpx;" :src="formData.sfzback"
						v-model="formData.sfzback" class="dingwei"></image>
				</view>

				<!-- 上传图片 -->
				<Upload v-if="isUpload" @getImgs="getImgsFunc"></Upload>
				<!-- 上传图片 -->
				<Uploads v-if="isUpload1" @getImgs="getImgsFunc1"></Uploads>


			</view>
		</view>

		<view><button type="default" @click="formSubmit" class="tijiao">提交</button></view>
	</view>
</template>

<script>
	import Upload from '@/components/upload/uploadOne.vue';
	import Uploads from '@/components/upload/uploadOne.vue';
	export default {
		components: {
			Upload,
			Uploads,
		},
		data() {
			return {
				loading: true,
				username: "",
				usernum: "",
				image: '',
				userInfo: {},
				isUpload: false,
				ad: true,
				as: true,
				isUpload1: false,
				/*表单数据对象*/
				formData: {
					/*手机号*/
					mobile: '',
					/*验证码*/
					code: '',
					sfzpositive: '',
					sfzback: ''
				},
				/*是否已发验证码*/
				is_send: false,
				/*发送按钮文本*/
				send_btn_txt: '获取验证码',
				/*当前秒数*/
				second: 60,
				ip: ''

			};
		},
		onLoad() {
			let self = this;
			self._get(
				'user.index/detail', {},
				function(res) {
					if (res.data.userInfo.sfzpositive) {
						self.formData.sfzpositive = res.data.userInfo.sfzpositive;
					}
					if (res.data.userInfo.sfzback) {
						self.formData.sfzback = res.data.userInfo.sfzback;
					}
				}
			);
		},
		mounted() {
			let self = this
			uni.getStorageSync('username');
			uni.getStorageSync('usernum');
			// console.log(uni.getStorageSync('username'))	
			// console.log(uni.getStorageSync('usernum'))	
			self.username = uni.getStorageSync('username')
			self.usernum = uni.getStorageSync('usernum')

		},
		methods: {
			/*获取上传的图片正面*/
			getImgsFunc(e) {
				console.log(e,'image')
				let self = this;
				if (e && typeof(e) != 'undefined') {
					self.userInfo.avatarUrl = e[0].file_path;
					self.formData.sfzpositive = self.userInfo.avatarUrl;
					self.isUpload = false;
				}
			},

			/* 修改头像 */
			changeAvatarUrl() {
				let self = this;
				self.isUpload = true;
			},
			/*获取上传的图片反面*/
			getImgsFunc1(e) {
				let self = this;
				if (e && typeof(e) != 'undefined') {
					self.userInfo.sfzback = e[0].file_path;
					self.formData.sfzback = self.userInfo.sfzback;
					self.isUpload1 = false;
					// self.as=false;
				}
			},

			/* 修改头像 */
			changeAvatarUrl1() {
				let self = this;
				self.isUpload1 = true;
			},

			/*提交*/
			formSubmit() {
				let self = this;
				self.loading = true;
				// console.log(self.formData)
				// if (uni.$u.test.idCard(self.formData.mobile) == false) {
				// 	uni.showToast({
				// 		title: '身份证号码有误,请重填！',
				// 		duration: 2000,
				// 		icon: 'none'
				// 	});
				// 	return;
				// }

				// if (self.formData.code == '') {
				// 	uni.showToast({
				// 		title: '姓名不能为空！',
				// 		duration: 2000,
				// 		icon: 'none'
				// 	});
				// 	return;
				// }

				uni.showLoading({
					title: '正在提交'
				});
				self._post(
					'user.user/realNameAuthentication', {
						username: this.username,
						usernum: this.usernum,
						//sfz正面
						sfzpositive: self.formData.sfzpositive,
						//sfz反面
						sfzback: self.formData.sfzback
					},
					function(res) {
						console.log(res, "请求成功返回");
						if (res.code == 1) {
							uni.showToast({
								title: '绑定成功',
								duration: 2000
							});
							self.loading = false;
							setTimeout(function() {
								// 执行回调函数
								uni.navigateBack();
							}, 2000);
						} else {
							uni.showToast({
								title: '绑定失败',
								duration: 2000
							});
						}
					}
				);
			},

			/*发送短信*/
			sendCode() {
				let self = this;

				if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(self.formData.mobile)) {
					uni.showToast({
						title: '手机有误,请重填！',
						duration: 2000,
						icon: 'none'
					});
					return;
				}

				self._post(
					'user.userweb/sendCode', {
						mobile: self.formData.mobile
					},
					result => {
						if (result.code == 1) {
							uni.showToast({
								title: '发送成功'
							});
							self.is_send = true;
							self.changeMsg();
						}
					}
				);
			},



			/*改变发送验证码按钮文本*/
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

		}
	};
</script>


<style lang="scss" scoped>
	.login-container {
		background: #f1f4f6;
	}

	.login-container input {
		height: 88rpx;
		line-height: 88rpx;
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

	.get-code-btn {
		width: 200rpx;
		height: 80rpx;
		line-height: 76rpx;
		padding: 0rpx 30rpx;
		border-radius: 40rpx;
		white-space: nowrap;
		border: 1rpx solid $dominant-color;
		color: $dominant-color;
		font-size: 30rpx;
	}

	.get-code-btn[disabled='true'] {
		border: 1rpx solid #cccccc;
	}

	.btns button {
		height: 90rpx;
		line-height: 90rpx;
		font-size: 34rpx;
		border-radius: 45rpx;
		background: $dominant-color;
		color: #ffffff;
	}

	.beijing {
		width: 100%;
		height: 300rpx;
		background-color: #43A3E8;
	}

	.jbkj {
		width: 100%;
		height: 300rpx;
	}

	.shimingrenzhng {
		color: #43A3E8;
		text-align: center;
	}

	.diyige {
		background-color: white;
		width: 100%;
		height: 300rpx;
		border-radius: 50rpx;
		display: flex;
		flex-direction:column;
		justify-content: center;
		align-items: center;
	}

	.jiahao {
		border-radius: 50rpx;
		width: 100rpx;
		height: 100rpx;
	}

	.kongge {
		height: 30rpx;
	}

	.dingwei {
	}

	.shenfen {
		margin-top: 70rpx;
		text-align: center;
		color: red;
		padding: 10rpx 0;
	}

	.tijiao {
		background-color: #43A3E8;
		border-radius: 50rpx;
		color: white;
	}
</style>
