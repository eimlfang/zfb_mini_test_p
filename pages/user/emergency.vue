<template>
	<view>
		<view class="mb30">
			<u-notice-bar :text="text1"></u-notice-bar>
		</view>

		<view class="renzheng">
			<!-- 实名认证 -->
			<view class="content" v-if="lxr1.name==''&&lxr1.tel==''">
				<view class="left">
					<view class="top">
						紧急联系人1
					</view>
					<view class="buttom">
						非紧急情况下,我们不会打扰，请您放心
						<br> {{lxr1.name}} <br> {{lxr1.tel}}
					</view>
				</view>
				<view class="right">
					<view class="add" @click="addlxr1">
						+ 立即添加
					</view>
				</view>
			</view>

			<view class="content2" v-else>
				<view class="top1">
					紧急联系人1
				</view>
				<!-- 真实姓名 -->
				<view class="top2">
					<view class="zsname"> 真实姓名 </view>
					<input type="text" v-model="lxr1.jjname" />
				</view>
				<!-- 姓名 -->
				<view class="top3">
					<view class="name"> 姓名 </view>
					<view class="huis">
						{{lxr1.name}}
					</view>
				</view>
				<!-- 电话号码 -->
				<view class="top4" @click="addlxr1">
					<view class="dianhua"> 电话 </view>
					<view class="tel">
						<view>
							{{lxr1.tel}}
						</view>
						<view>
							<u-icon name="arrow-right" color="#B0B0B0" size="20"></u-icon>
						</view>
					</view>
				</view>
				<!-- 关系 -->
				<view class="top5">
					<view class="relation"> 关系 </view>
					<u-form-item borderBottom>
						<u-radio-group v-model="radiovalue1" placement="row">
							<u-radio :customStyle="{marginRight:'6rpx'}" v-for="(item, index) in radiolist1"
								:key="index" :label="item.name" :name="item.val" @change="radioChange1">
							</u-radio>
						</u-radio-group>
					</u-form-item>
				</view>
			</view>


			<!-- 紧急联系人 -->
			<view class="content" v-if="lxr2.name==''&&lxr2.tel==''">
				<view class="left">
					<view class="top">
						紧急联系人2
					</view>
					<view class="buttom">
						非紧急情况下,我们不会打扰，请您放心
						<br> {{lxr2.name}} <br> {{lxr2.tel}}
					</view>
				</view>
				<view class="right">
					<view class="add" @click="addlxr2">
						+ 立即添加
					</view>
				</view>
			</view>

			<view class="content2" v-else>
				<view class="top1">
					紧急联系人2
				</view>
				<!-- 真实姓名 -->
				<view class="top2">
					<view class="zsname"> 真实姓名 </view>
					<input type="text" v-model="lxr2.jjname" />
				</view>
				<!-- 姓名 -->
				<view class="top3">
					<view class="name"> 姓名 </view>
					<view class="huis">
						{{lxr2.name}}
					</view>
				</view>
				<!-- 电话号码 -->
				<view class="top4" @click="addlxr2">
					<view class="dianhua"> 电话 </view>
					<view class="tel">
						<view>
							{{lxr2.tel}}
						</view>
						<view>
							<u-icon name="arrow-right" color="#B0B0B0" size="20"></u-icon>
						</view>
					</view>
				</view>
				<!-- 关系 -->
				<view class="top5">
					<view class="relation"> 关系 </view>
					<u-form-item borderBottom>
						<u-radio-group v-model="radiovalue2" placement="row">
							<u-radio :customStyle="{marginRight:'6rpx'}" v-for="(item, index) in radiolist2"
								:key="index" :label="item.name" :name="item.val" @change="radioChange2">
							</u-radio>
						</u-radio-group>
					</u-form-item>
				</view>
			</view>



			<!-- 个人基本信息 -->
			<view class="content" v-if="lxr3.name==''&&lxr3.tel==''">
				<view class="left">
					<view class="top">
						紧急联系人3
					</view>
					<view class="buttom">
						非紧急情况下,我们不会打扰，请您放心
						<br> {{lxr3.name}} <br> {{lxr3.tel}}
					</view>
				</view>
				<view class="right">
					<view class="add" @click="addlxr3">
						+ 立即添加
					</view>
				</view>
			</view>

			<view class="content2" v-else>
				<view class="top1">
					紧急联系人3
				</view>
				<!-- 真实姓名 -->
				<view class="top2">
					<view class="zsname"> 真实姓名 </view>
					<input type="text" v-model="lxr3.jjname" />
				</view>
				<!-- 姓名 -->
				<view class="top3">
					<view class="name"> 姓名 </view>
					<view class="huis">
						{{lxr3.name}}
					</view>
				</view>
				<!-- 电话号码 -->
				<view class="top4" @click="addlxr3">
					<view class="dianhua"> 电话 </view>
					<view class="tel">
						<view>
							{{lxr3.tel}}
						</view>
						<view>
							<u-icon name="arrow-right" color="#B0B0B0" size="20"></u-icon>
						</view>
					</view>
				</view>
				<!-- 关系 -->
				<view class="top5">
					<view class="relation"> 关系 </view>
					<u-form-item borderBottom>
						<u-radio-group v-model="radiovalue3" placement="row">
							<u-radio :customStyle="{marginRight:'6rpx'}" v-for="(item, index) in radiolist3"
								:key="index" :label="item.name" :name="item.val" @change="radioChange3">
							</u-radio>
						</u-radio-group>
					</u-form-item>
				</view>
			</view>

		</view>
		<button class="bclxr" @click="submitlxr()">保存联系人</button>
		<!-- <button class="bclxr" @click="submitlxr()" v-if="islianxi!=1">保存联系人</button>
		<button class="bclxr2" v-else>保存联系人</button> -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				islianxi: "",
				text1: "填写直系亲属会大幅提高审核通过率,请填写真实姓名，我们一般不可能会联系您的紧急联系人",
				lxr1: {
					name: "",
					jjname: '',
					tel: "",
					relation: 1
				},
				lxr2: {
					name: "",
					jjname: '',
					tel: "",
					relation: 1
				},
				lxr3: {
					name: "",
					jjname: '',
					tel: "",
					relation: 1
				},
				radiolist1: [{
						name: '父母',
						val: 1,
						disabled: false
					},
					{
						name: '配偶',
						val: 5,
						disabled: false
					},
					{
						name: '其他亲属',
						val: 9,
						disabled: false
					}
				],
				radiolist2: [{
						name: '父母',
						val: 1,
						disabled: false
					},
					{
						name: '配偶',
						val: 5,
						disabled: false
					},
					{
						name: '其他亲属',
						val: 9,
						disabled: false
					}
				],
				radiolist3: [{
						name: '父母',
						val: 1,
						disabled: false
					},
					{
						name: '配偶',
						val: 5,
						disabled: false
					},
					{
						name: '其他亲属',
						val: 9,
						disabled: false
					}
				],
				radiovalue1: 1,
				radiovalue2: 1,
				radiovalue3: 1
			}
		},
		methods: {
			// 提交联系人
			submitlxr() {
				uni.showLoading({
					title: '提交中,请勿离开页面'
				});
				this.loading = true;
				console.log("提交联系人", this.lxr1, this.lxr2, this.lxr3);
				this._post('user.user/realNameAuthentication', {
					jjrealname: this.lxr1.jjname,
					contactName: this.lxr1.name,
					contactPhone: this.lxr1.tel,
					contactRelation: this.lxr1.relation,
					jjrealname1: this.lxr2.jjname,
					contactName1: this.lxr2.name,
					contactPhone1: this.lxr2.tel,
					contactRelation1: this.lxr2.relation,
					jjrealname2: this.lxr3.jjname,
					contactName2: this.lxr3.name,
					contactPhone2: this.lxr3.tel,
					contactRelation2: this.lxr3.relation,
					islianxi: 1
				}, function(res) {
					// console.log(res);
					uni.hideLoading();
					if (res.code == 1) {
						uni.showToast({
							title: res.msg,
							duration: 2000
						});
						uni.navigateTo({
							url:"/pages/user/authentication"
						})
					} else {
						uni.showToast({
							title: "提交失败,请重新提交或联系客服!!",
							duration: 2000
						});
					}

				});
				
			},
			// 查询联系人
			getData() {
				let self = this;
				self._get(
					'user.index/detail', {},
					function(res) {
						console.log(res.data.userInfo, "成功返回");
						self.lxr1.name = res.data.userInfo.contactName;
						self.lxr1.jjname = res.data.userInfo.jjrealname;
						self.lxr1.tel = res.data.userInfo.contactPhone;
						self.lxr1.relation = res.data.userInfo.contactRelation;

						self.lxr2.name = res.data.userInfo.contactName1;
						self.lxr2.jjname = res.data.userInfo.jjrealname1;
						self.lxr2.tel = res.data.userInfo.contactPhone1;
						self.lxr2.relation = res.data.userInfo.contactRelation1;

						self.lxr3.name = res.data.userInfo.contactName2;
						self.lxr3.jjname = res.data.userInfo.jjrealname2;
						self.lxr3.tel = res.data.userInfo.contactPhone2;
						self.lxr3.relation = res.data.userInfo.contactRelation2;
						// 选项默认值
						self.radiovalue1 = res.data.userInfo.contactRelation;
						self.radiovalue2 = res.data.userInfo.contactRelation1;
						self.radiovalue3 = res.data.userInfo.contactRelation2;
						// console.log("联系人", self.lxr1, self.lxr2, self.lxr3);

						self.islianxi = res.data.userInfo.islianxi;

					}
				);
			},
			addlxr1() {
				my.choosePhoneContact({
					success: (res) => {
						console.log("chooseContact", res);
						this.lxr1.name = res.name;
						this.lxr1.tel = res.mobile;
						this.lxr1.jjname = res.name;
						console.log(this.lxr1.name, this.lxr1.tel);
					},
					fail: (err) => {
						console.log("chooseContact error", err)
						uni.showToast({
							icon: 'none',
							title: '用户取消操作(或设备未授权使用通讯录)'
						});
					},
				});
			},
			addlxr2() {
				my.choosePhoneContact({
					success: (res) => {
						console.log("chooseContact", res);
						this.lxr2.name = res.name;
						this.lxr2.tel = res.mobile;
						this.lxr2.jjname = res.name;
						console.log(this.lxr1.name, this.lxr1.tel);
					},
					fail: (err) => {
						console.log("chooseContact error", err)
						uni.showToast({
							icon: 'none',
							title: '用户取消操作(或设备未授权使用通讯录)'
						});
					},
				});
			},
			addlxr3() {
				my.choosePhoneContact({
					success: (res) => {
						console.log("chooseContact", res);
						this.lxr3.name = res.name;
						this.lxr3.tel = res.mobile;
						this.lxr3.jjname = res.name;
						console.log(this.lxr1.name, this.lxr1.tel);
					},
					fail: (err) => {
						console.log("chooseContact error", err)
						uni.showToast({
							icon: 'none',
							title: '用户取消操作(或设备未授权使用通讯录)'
						});
					},
				});
			},
			// 关系点击
			radioChange1(n) {
				console.log('radioChange1', n);
				this.lxr1.relation = n;
			},
			radioChange2(n) {
				console.log('radioChange2', n);
				this.lxr2.relation = n;
			},
			radioChange3(n) {
				console.log('radioChange3', n);
				this.lxr3.relation = n;
			}


		},
		onLoad() {
			this.getData();
		}
	}
</script>

<style lang="scss">
	.add {
		border-radius: 50rpx;
		padding: 10rpx 20rpx;
		text-align: center;
		height: 30rpx;
		line-height: 30rpx;
		color: #F2AE3F;
		border: 1rpx solid #F2AE3F;
	}

	.bclxr {
		color: white;
		background-color: #F2AE3F;
		border-radius: 20rpx;
		margin: 15rpx;
	}

	.bclxr2 {
		color: white;
		background-color: #DCDFE6;
		border-radius: 20rpx;
		margin: 15rpx;
	}

	page {
		background-color: #F7F6FB;
	}

	.renzheng {
		// border-radius: 20rpx;
		// background-color: #FFFFFF;
		// margin: 20rpx;
	}

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 25rpx;
		border-radius: 25rpx;
		margin: 20rpx;
		background-color: #FFFFFF;

		.left {
			view {
				margin: 10rpx;
			}

			.top {
				color: #2F3131;
				font-size: 34rpx;
				font-weight: 700;
			}

			.buttom {
				color: #B1B1B1;
				font-size: 24rpx;
			}
		}
	}

	.content2 {
		padding: 20rpx 25rpx;
		border-radius: 25rpx;
		margin: 20rpx;
		background-color: #FFFFFF;

		.top1 {
			color: #2F3131;
			font-size: 34rpx;
			font-weight: 700;
		}

		.top2 {
			display: flex;
			height: 50rpx;
			align-items: center;
			border-bottom: 1rpx solid #B0B0B0;
			padding: 25rpx 0;

			.zsname {
				font-size: 34rpx;
				margin-right: 20rpx;
			}
		}

		.top3 {
			display: flex;
			height: 50rpx;
			align-items: center;
			border-bottom: 1rpx solid #B0B0B0;
			padding: 25rpx 0;
			font-size: 34rpx;

			.name {
				margin-right: 20rpx;
			}

			.huis {
				color: #B0B0B0;
			}
		}

		.top4 {
			display: flex;
			height: 50rpx;
			align-items: center;
			border-bottom: 1rpx solid #B0B0B0;
			padding: 25rpx 0;
			font-size: 34rpx;

			.dianhua {
				margin-right: 20rpx;
			}

			.tel {
				color: #B0B0B0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 85%;
			}
		}

		.top5 {
			display: flex;
			font-size: 34rpx;
			align-items: center;
			border-bottom: 1rpx solid #B0B0B0;

			.relation {
				margin-right: 20rpx;
			}
		}
	}
</style>
