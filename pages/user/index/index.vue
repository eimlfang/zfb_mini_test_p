<template>
	<view class="user-index" :data-theme='theme()' :class="theme() || ''">
		<!--个人信息-->
		<!-- v-if="!loadding" -->
		<view style="position: relative;">
			
			<view class="userlogin">
				<view class="content" v-if="detail.mobile">
					<view style="">
						<image v-if='detail.avatarUrl' style="border-radius: 100rpx;box-shadow: 10rpx 10rpx 10rpx #183678;" 
						:src="baseurl + detail.avatarUrl" mode="aspectFill"></image>
						<image v-else src="../../../static/hha/picture.png"></image>
					</view>
					<view class="text" v-if='detail.avatarUrl'>
						<view class="text1">
								{{ detail.nickName }}
								
						</view>
						<view class="text2" style="margin:10rpx 0;">
								{{ detail.mobile }}
						</view>
						<view class="text2">
								欢迎来到 好时机
						</view>
					</view>
					
					<view class="text" v-else>
						<view class="text1">
								<button
									style="border: none; font-size: 36rpx; border-radius: 60rpx; height: 78rpx; line-height: 54rpx; background-color: #f6821f;color: white;padding:14rpx;"
									open-type="getAuthorize" scope="userInfo" @getAuthorize="onGetAuthorize"
									onError="handleAuthError">
									点击授权用户信息
								</button>
						</view>
						<view class="text2">
								欢迎来到 好时机
						</view>
					</view>
					
				</view>
				
				<view class="content" v-else>
					<view>
						<image src="../../../static/hha/picture.png"></image>
					</view>
					<view class="text">
						<view class="text1">
								<button
								style="border: none; font-size: 36rpx; border-radius: 60rpx;height: 80rpx; line-height: 80rpx;background-color: #f6821f;color: white;"
									@getAuthorize="onGetAuthorize1" open-type="getAuthorize" scope="phoneNumber"
									onError="handleAuthError">
									点击登录
								</button>
						</view>
						<view class="text2">
								欢迎来到好时机
						</view>
						
					</view>
				</view>
			</view>
			
			<!-- <view class="user-header">
				<view class="news" @click="gotoPage('/pages/user/set/set')">
					<image class="chat" src="../../../static/icon/icon_my_setting.png" mode="widthFix"></image>
				</view> -->
				<!-- <view v-if="msgcount!=0" class="news_num">
					{{msgcount}}
				</view> -->
				<!-- <view class="user-header-inner">
					<view class="user-info" v-if="detail.mobile">
						<view v-if='detail.avatarUrl' style="display: flex;">
							<view class="photo">
								<image :src="'baseurl + detail.avatarUrl" mode="aspectFill"></image>
							</view>
							<view class="info">
								<view class="name" v-if="detail.nickName">{{ detail.nickName }}</view>
								<view class="name" v-if="detail.mobile">{{ detail.mobile }}</view>
							</view>
						</view>
						<view v-else>
							<button
								style="border: none; font-size: 26rpx; border-radius: 60rpx; height: 80rpx; line-height: 80rpx; background-color: #588BC8;color: white;"
								open-type="getAuthorize" scope="userInfo" @getAuthorize="onGetAuthorize"
								onError="handleAuthError">
								点击授权用户信息
							</button>
						</view>
					</view>
					<view class="user-info" v-else>
						<view class="info">
							<view class="name">
								<button
									style="border: none; font-size: 26rpx; border-radius: 60rpx;height: 80rpx; line-height: 80rpx;background-color: #588BC8;color: white;"
									@getAuthorize="onGetAuthorize1" open-type="getAuthorize" scope="phoneNumber"
									onError="handleAuthError">
									一键授权登录
								</button>
							</view>
						</view>
					</view>
				</view> -->
				
				
				<!-- <view class="main">
					
				</view> -->
				
				<!--我的订单-->
			<!-- 	<view class="my-order">
					<view class="list d-a-c flex-1">
						<view class="item d-c-c d-c" @click="jumpPage('/pages/user/my_attention/my_attention')">
							<view class=" red_mini">{{detail.favorite}}</view>
							<text class="pt16 f24 gray3">收藏</text>
						</view>
						<view class="item d-c-c d-c" @click="jumpPage('/pages/user/my-coupon/my-coupon')">
							<view class="red_mini">{{coupon}}</view>
							<text class="pt16 f24 gray3">优惠券</text>
						</view> -->
						
						<!-- <view class="item d-c-c d-c" @click="jumpPage('/pages/user/my-wallet/my-wallet')">
							<view class=" red_mini">15</view>
							<text class="pt16 f24 gray3">租币</text>
						</view> -->
						<!-- <view class="item d-c-c d-c">
						@click="jumpPage('/pages/agent/cash/apply/apply?balance=' + detail.balance)"
							<view class=" red_mini">{{detail.balance}}</view>
							<text class="pt16 f24 gray3">余额</text>
						</view> -->
						<!-- <view class="item order_center d-c-c d-c" @click="jumpPage('/pages/user/points/points')">
							<view class=" red_mini">{{ detail.points }}</view>
							<text class="pt16 f24 gray3">{{setting.points_name}}</text>
						</view>
						
						<view v-if="setting.balance_open==1">
							<view class="item d-c-c d-c" @click="jumpPage('/pages/user/my-wallet/my-wallet')">
								<view class="icon-box">{{10}}</view>
								<text>我的钱包</text>
							</view>
						</view> -->
						
			<!-- 		</view>
				</view>
			</view> -->
				
			<view style="position: absolute;top: 300rpx;left: 0;">
			
			<!--我的资产-->
			<view class="my-assets">
				<view class="my-assets-all">
					<view class="f30 fb">全部订单</view>
					<view class="gray9 f26" @click="jumpPage('/pages/order/myorder?dataType=all')">查看全部<text
							class="icon iconfont icon-jiantou"></text></view>
				</view>
				<view class="d-b-c w100">
					<view class="item" @click="jumpPage('/pages/order/myorder?dataType=payment')">
						<view class="icon-box pr">
							<image src="../../../static/hha/order/dfk.png" mode="widthFix"></image>
							<!-- <text class="dot d-c-c" v-if="orderCount.payment != null && orderCount.payment > 0">{{ orderCount.payment }}</text> -->
						</view>
						<text>待付款</text>
					</view>
					<view class="item" @click="jumpPage('/pages/order/myorder?dataType=examine')">
						<view class="icon-box pr">
							<image src="../../../static/hha/order/shenhe.png" mode="widthFix"></image>
							<!-- <text class="dot d-c-c" v-if="orderCount.payment != null && orderCount.payment > 0">{{ orderCount.payment }}</text> -->
						</view>
						<text>待审核</text>
					</view>
					<view class="item" @click="jumpPage('/pages/order/myorder?dataType=delivery')">
						<view class="icon-box pr">
							<image src="../../../static/hha/order/dfh.png" mode="widthFix"></image>
							<!-- <text class="dot d-c-c" v-if="orderCount.delivery != null && orderCount.delivery > 0">{{ orderCount.delivery }}</text> -->
						</view>
						<text class="">待发货</text>
					</view>
					<view class="item" @click="jumpPage('/pages/order/myorder?dataType=received')">
						<view class="icon-box pr">
							<image src="../../../static/hha/order/dsh.png" mode="widthFix"></image>
							<!-- <text class="dot d-c-c" v-if="orderCount.received != null && orderCount.received > 0">{{ orderCount.received }}</text> -->
						</view>
						<text>待收货</text>
					</view>
					<view class="item" @click="jumpPage('/pages/order/myorder?dataType=haveInHand')">
						<view class="icon-box pr">
							<image src="../../../static/hha/order/jxz.png" mode="widthFix"></image>
							<!-- <text class="dot d-c-c" v-if="orderCount.comment != null && orderCount.comment > 0">{{ orderCount.comment }}</text> -->
						</view>
						<text>租赁中</text>
					</view>
				</view>
					
				<view class="d-b-c w100" v-if="baseurl != 'https://kuaizujie.rchz.top/'">
					<view class="item" @click="jumpPage('/pages/order/myorder?dataType=returned')">
						<view class="icon-box pr">
							<image src="../../../static/hha/order/dgh.png" mode="widthFix"></image>
							<!-- <text class="dot d-c-c" v-if="orderCount.payment != null && orderCount.payment > 0">{{ orderCount.payment }}</text> -->
						</view>
						<text>待归还</text>
					</view>
					<view class="item" @click="jumpPage('/pages/order/myorder?dataType=Returning')">
						<view class="icon-box pr">
							<image src="../../../static/hha/order/ghz.png" mode="widthFix"></image>
							<!-- <text class="dot d-c-c" v-if="orderCount.payment != null && orderCount.payment > 0">{{ orderCount.payment }}</text> -->
						</view>
						<text>归还中</text>
					</view>
					<view class="item" @click="jumpPage('/pages/order/myorder?dataType=complete')">
						<view class="icon-box pr">
							<image src="../../../static/hha/order/ywc.png" mode="widthFix"></image>
							<text class="dot d-c-c"
								v-if="orderCount.refund != null && orderCount.refund > 0">{{ orderCount.refund }}</text>
						</view>
						<text>已完成</text>
					</view>
					<view class="item" @click="jumpPage('/pages/order/myorder?dataType=cancel')">
						<view class="icon-box pr">
							<image src="../../../static/hha/order/yqx.png" mode="widthFix"></image>
							<!-- <text class="dot d-c-c" v-if="orderCount.received != null && orderCount.received > 0">{{ orderCount.received }}</text> -->
						</view>
						<text>已取消</text>
					</view>
					<view class="item" @click="jumpPage('/pages/order/myorder?dataType=yuqi')">
						<view class="icon-box pr">
							<image src="../../../static/hha/order/yyq.png" mode="widthFix"></image>
							<!-- <text class="dot d-c-c" v-if="orderCount.comment != null && orderCount.comment > 0">{{ orderCount.comment }}</text> -->
						</view>
						<text>已逾期</text>
					</view>
					
				</view>
				
			</view>
			
			
			
			<!--身份认证-->
			<!-- <view class="my-assets2" @click="sfzrz" v-if="tonken != ''" v-show="baseurl!='https://kuaizujie.rchz.top/'">
				<view class="my-assets-all2">
					<view class="f30 fb">身份认证</view>
					<view class="gray9 f26">立即认证<text
							class="icon iconfont icon-jiantou"></text></view>
				</view>
				<view class="sfz">
					<image src="../../../static/hha/sfrz.png"></image>
				</view>
			</view> -->
			
			
			
			
			
			<!-- <view class="banner">
				<image src="https://i-s2.328888.xyz/2022/06/30/62bd48d1e9d91.gif" mode="widthFix"></image>
			</view> -->
			<!--菜单-->
			<view class="menu-wrap" v-if="menus.length>0">
				<view class="title">我的服务</view>
				<view class="group-bd f-w">
					<view :class="'item ' + item.icon + '-box'" v-for="(item, index) in menus" :key="index"
						@click="jumpPage(item.link_url)">
						<view class="icon-round d-c-c">
							<image class="icon-round" :src="item.image_url" mode="widthFix"></image>
						</view>
						<text class="name">{{ item.title }}</text>
					</view>
				</view>
			</view>
			
			<!--推荐-->
			<recommendProduct :location="10"></recommendProduct>
			</view>
			
		</view>
		
	</view>

	<!-- 	<request-loading :loadding='isloadding'></request-loading>
=======
		<!-- <request-loading :loadding='isloadding'></request-loading>
>>>>>>> d2a0550ab155e0966f24f8bf39be7b8e713da1a8
		<tabBar></tabBar> -->
	</view>
</template>

<script>
	import recommendProduct from '@/components/recommendProduct/recommendProduct.vue';
	import baseurl from "@/config.js";
	export default {
		components: {
			recommendProduct
		},
		data() {
			return {
				baseurl:"",
				shopinfo:"",
				isloadding: true,
				/*签到数据*/
				sign: {},
				/*是否加载完成*/
				loadding: true,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				/*菜单*/
				menus: [],
				detail: {
					balance: 0,
					points: 0,
					grade: {
						name: ''
					},
				},
				is_recycle: 0,
				orderCount: {},
				coupon: 0,
				setting: {},
				user_type: '', //用户状态
				msgcount: 0, //用户未读消息
				sessionKey: '',
				// 登录开关
				tonken:""
				
				
			};
		},
		onPullDownRefresh() {
			let self = this;
			self.getData();
			self.getDatapage();
		},
		onShow() {
			/*获取个人中心数据*/
			this.getData();
			this.getData1();
		
			my.navigateTo({
				url: `plugin://esign/home?flowId=${12125122}`,
			})
			
		},
		onLoad() {
			this.baseurl = baseurl.app_url;
			console.log(this.baseurl,'url')
			let self = this;
			//#ifdef MP-WEIXIN
			wx.login({
				success(res) {
					// 发送用户信息
					self._post('user.user/getSession', {
						code: res.code
					}, result => {
						self.sessionKey = result.data.session_key;
					});
				}
			});
			//#endif
		},
		methods: {
			// 订阅
			dingyue() {
				my.requestSubscribeMessage({
					//需要用户订阅的消息模板的id的集合
					entityIds: ['f558d5ee8d4c47889d9dae89887bc0ad', '0e59fbc3303845b29a4f2c4542705ee0'],
					success: (res) => {
						// console.log("接口调用成功的回调", res);
						// my.requestSubscribeMessage({
						// 	//需要用户订阅的消息模板的id的集合
						// 	entityIds: ['accc722d8516459fbb9df01fa358ab58'],
						// 	success: (res) => {
						// 		console.log("接口调用成功的回调", res);
						// 	},
						// 	fail: (res) => {
						// 		console.log("接口调用失败的回调", res);
						// 	},
						// 	complete: (res) => {
						// 		console.log("接口调用结束的回调", res)
						// 	}
						// });
					},
					fail: (res) => {
						// console.log("接口调用失败的回调", res);
					},
					complete: (res) => {
						// console.log("接口调用结束的回调", res)
					}
				});
			},
			// 跳转认证
			sfzrz(){
				uni.navigateTo({
					url:"/pages/user/authentication"
				})
			},
			// 支付宝登录
			async onGetAuthorize1() {
				// 获取授权码
				my.getAuthCode({
					scopes: ['auth_base'],
					success: (res) => {
						my.getPhoneNumber({
							success: (res1) => {
								let encryptedData = res1.response;
								encryptedData = JSON.parse(encryptedData);
								let response = encryptedData.response
								this._post('user.usermp/mnpAlipayAuthLogin', {
									code: res.authCode,
									content: response
								}, res => {
									this.tonken = res.data.data.token
									// console.log(res.data.data.token)
									uni.setStorageSync('token', res.data.data.token);
									uni.setStorageSync('user_id', res.data.data.user_id);
									uni.showToast({
										title: '登录成功'
									});
									this.getData();
									this.dingyue();
								})
							},
							fail: (res) => {
								console.log("失败")
								reject(res);
							}
						});
					},
				});
			},
			// 拒绝操作
			onAuthError() {
				uni.showModal({
					title: "提示",
					content: "取消授权，可能导致服务无法使用，或者页面显示不完整",
					success: function(res) {
						if (res.confirm) {
							console.log("取消授权")
						} else {
							console.log("重新授权")
						}
					}
				})
			},

			// 获取手机号
			async onGetAuthorize() {
				let self = this;
				my.getOpenUserInfo({
					success: (res) => {
						const userInfo = JSON.parse(res.response)
						if (userInfo.response.code != "10000") {
							uni.showToast({
								title: '绑定失败'
							});
							return;
						}
						this._post('user.usermp/changeuserinfo', {
							avatar: userInfo.response.avatar,
							nickName: userInfo.response.nickName
						}, res => {
							uni.showToast({
								title: '绑定成功'
							});
							this.getData();
						})
					},
					fail: (res) => {
						console.log(res);
					},
				});
			},
			
			
			/*获取数据*/
			getData1() {
				let self = this;
				uni.showLoading({
					title: '加载中'
				});
				self._get(
					'index/index', {
					},
					function(res) {
						self.shopinfo = res.data.page.params;
						// console.log("self.shopinfo",self.shopinfo);
						if (baseurl.app_url == "https://huichu.haidiao888.com/") {
							// console.log("huichu");
							let a =  res.data.page.params.name;
							self.shopinfo.tiname = a.substr(0,3);
						} else if (baseurl.app_url == "https://mxy.haidiao888.com/") {
							// console.log("mxy");
							let a =  res.data.page.params.name;
							self.shopinfo.tiname = a.substr(0,4);
						}else if (baseurl.app_url == "https://system.yunbeitong.cn/") {
							// console.log("ybt");
							let a =  res.data.page.params.name;
							self.shopinfo.tiname = a.substr(0,3);
						}else if (baseurl.app_url == "https://zidizulin.rchz.top/") {
							// console.log("dzzl");
							let a =  res.data.page.params.name;
							self.shopinfo.tiname = a.substr(0,4);
						}else if (baseurl.app_url == "https://qiaopinzu.rchz.top/") {
							// console.log("dzzl");
							let a =  res.data.page.params.name;
							self.shopinfo.tiname = a.substr(0,4);
						}else if (baseurl.app_url == "https://jiuaizuji.rchz.top/") {
							// console.log("dzzl");
							let a =  res.data.page.params.name;
							self.shopinfo.tiname = a.substr(0,3);
						}else if (baseurl.app_url == "https://kuaizujie.rchz.top/") {
							// console.log("dzzl");
							let a =  res.data.page.params.name;
							self.shopinfo.tiname = a.substr(0,3);
						}else if (baseurl.app_url == "https://feichangxiangzu.rchz.top/") {
							// console.log("dzzl");
							let a =  res.data.page.params.name;
							self.shopinfo.tiname = a.substr(0,4);
						}
						
						
						
						uni.setNavigationBarTitle({
							title: res.data.page.params.name,
							success: () => {
								// console.log('修改标题成功')
							},
							fail: () => {
								// console.log('修改标题失败')
							},
							complete: () => {
								// console.log('修改标题结束')
							},
						})
						self.loadding = false;
						uni.hideLoading();
					}
				);
			},

			/*获取数据*/
			getData() {
				let self = this;
				self.isloadding = true;
				self._get('user.index/detail', {
					url: self.url
				}, function(res) {
					let username = res.data.userInfo.username
					let usernum = res.data.userInfo.usernum
					uni.setStorageSync('username', username);
					uni.setStorageSync('usernum', usernum);
					if (res.data.getPhone) {

						//#ifdef MP-WEIXIN
						// self.gotoPage('/pages/login/bindmobile');
						self.gotoPage('/pages/user/index/index');
						//#endif
						//#ifndef MP-WEIXIN
						self.bindMobile();
						//#endif
						return;
					}
					self.detail = res.data.userInfo;
					self.detail.favorite = res.data.favorite
					self.sign = res.data.sign;
					self.coupon = res.data.coupon;
					self.orderCount = res.data.orderCount;
					self.menus = res.data.menus;
					self.setting = res.data.setting;
					self.is_recycle = res.data.userInfo.is_recycle;
					self.msgcount = res.data.msgcount;
					self.loadding = false;
					uni.stopPullDownRefresh();
					self.isloadding = false;
				});
			},
			bindMobile() {
				// this.gotoPage('/pages/user/modify-phone/modify-phone');
			},
			/*跳转页面*/
			jumpPage(path) {
				let self = this;
				if (path.startsWith('/')) {
					self.gotoPage(path);
				} else {
					self[path]();
				}
			},
			/*扫一扫核销*/
			scanQrcode: function() {
				this.gotoPage('/pages/user/scan/scan');
			},
			getPhoneNumber(e) {
				var self = this;
				if (e.detail.errMsg !== 'getPhoneNumber:ok') {
					return false;
				}
				uni.showLoading({
					title: '加载中'
				})
				uni.login({
					success(res) {
						// 发送用户信息
						self._post('user.user/bindMobile', {
							session_key: self.sessionKey,
							encrypted_data: e.detail.encryptedData,
							iv: e.detail.iv,
						}, result => {
							uni.showToast({
								title: '绑定成功'
							});
							// 执行回调函数
							self.detail.mobile = result.data.mobile;
						}, false, () => {
							uni.hideLoading()
						});
					}
				});
			},
		}
	};
</script>

<style lang="scss">
	
	.my-assets2 {
		margin: 20rpx 20rpx;
		padding: 40rpx 20rpx;
		padding-top: 0;
		background: #ffffff;
		border-radius: 12rpx;
	}
	
	.my-assets-all2 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
		line-height: 80rpx;
		border-bottom: 2rpx solid #CCC;
	}
	
	.sfz{
		image{
			width: 100%;
			height: 200rpx;
		}
	}
	
	.userlogin{
		width: 100%;
		height: 500rpx;
		background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#FBA402), to(rgba(251,164,2,0.2))); 
		border-bottom-left-radius: 50rpx;
		border-bottom-right-radius: 50rpx;
		.content{
			display: flex;padding-left: 50rpx;padding-top: 50rpx;
			view{
				margin-right: 30rpx;
				image{
					width:150rpx;height: 150rpx;
				}
			}
		}
		.text{
			color: #FFFEFE;
			// margin-top: 25rpx;
			.text1{
				font-size: 36rpx;
				font-family: "Microsoft Yahei";
			}
			.text2{
				font-size: 30rpx;
				font-family: "Microsoft Yahei";
			}
		}
	}
	.wenzi{
		color: #4E5561;
		font-weight: 700;
		font-size: 38rpx
	}
	.gang{
		width: 20%;
		height: 2rpx;
		background: #DFDEE3;
		margin: 0 15rpx;
	}
	page {
		background-color: #EBEBEB;
	}

	.banner {
		width: 750rpx;
	}

	.banner image {
		margin: 0 auto;
		width: 700rpx;
		height: 160rpx !important;
		margin-top: 20rpx;
	}

	.d-c {
		border-right: 1rpx solid #CCCCCC;
	}

	.d-c:last-child {
		border: none;
	}

	.user-index {
		// background: linear-gradient(180deg, #FF4646 0%, rgba(86, 213, 200, 0) 30%);
		// background-image: linear-gradient(to bottom, #56D5C8, #fff);
		background-color: #ECE8E9;
	}

	.w100 {
		width: 100%;
		margin-top: 30rpx;
	}

	.foot_ {
		height: 98rpx;
		width: 100%;
	}

	.user-header {
		position: relative;
		// @include background_color('background_color');
	}

	.gray3 {
		font-size: 30rpx;
		color: #303133;
	}

	.user-header .user-header-inner {
		position: relative;
		padding: 30rpx 30rpx 120rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
		margin-bottom: 100rpx;
	}

	// .user-header .user-header-inner::after,
	// .user-header .user-header-inner::before {
	// 	display: block;
	// 	content: '';
	// 	position: absolute;
	// 	border-radius: 50%;
	// 	z-index: 0;
	// }

	// .user-header .user-header-inner::after {
	// 	width: 400rpx;
	// 	height: 400rpx;
	// 	right: -100rpx;
	// 	bottom: -200rpx;
	// 	background-image: radial-gradient(90deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0));
	// }

	// .user-header .user-header-inner::before {
	// 	width: 200rpx;
	// 	height: 200rpx;
	// 	left: -60rpx;
	// 	top: -20rpx;
	// 	background-image: radial-gradient(-90deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0));
	// }

	.user-header .user-info {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.user-header .photo,
	.user-header .photo image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.user-header .photo {
		border: 4rpx solid #ffffff;
	}

	.user-header .info {
		padding-left: 20rpx;
		box-sizing: border-box;
		overflow: hidden;
		color: #ffffff;
	}

	.user-header .info .name {
		color: black;
		// font-weight: bold;
		font-size: 32rpx;
		margin-top: 10rpx;
	}

	.user-header .info .tel {
		font-size: 26rpx;
		color: black;
	}

	.user-header .info .grade {
		display: block;
		padding: 4px 16rpx;
		font-size: 22rpx;
		/* height: 36rpx; */
		line-height: 36rpx;
		border-radius: 40rpx;
		background-color: rgba($color: #000000, $alpha: 0.1);
		color: #ffffff;
		font-family: PingFang SC;
	}

	.user-header .sign-box {
		position: absolute;
		right: 20rpx;
		padding: 0 10rpx;
		height: 50rpx;
		border: 1px solid #ffe300;
		border-radius: 25rpx;
		font-size: 24rpx;
		color: #ffe300;
		z-index: 10;
	}

	.user-header .sign-box .iconfont {
		color: #ffe300;
	}

	.user-header .my-order {
		position: absolute;
		padding: 20rpx 10rpx;
		/* height: 240rpx; */
		right: 20rpx;
		bottom: -75rpx;
		left: 20rpx;
		box-sizing: border-box;
		border-radius: 20rpx;
		/* box-shadow: 0 0 6rpx 0 rgba(0, 0, 0, 0.1); */
		background: #ffffff;
		z-index: 10;
	}

	.order_center {
		border-left: 1rpx solid #D9D9D9;
		border-right: 1rpx solid #D9D9D9;
	}

	.my-order .item {
		display: flex;
		margin: 20rpx 0;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 26rpx;
		flex: 1;
	}

	.my-assets .icon-box image {
		width: 50rpx;
		height: 50rpx;
		margin-bottom: 16rpx;
	}

	.my-order .icon-box,
	.my-assets .icon-box {
		width: 60rpx;
		height: 60rpx;
	}

	.my-order .icon-box .iconfont,
	.my-assets .icon-box .iconfont {
		font-size: 50rpx;
		color: #333333;
	}

	.f30 {
		color: #303133;
		font-size: 30rpx;
	}

	.my-assets .icon-box .dot {
		position: absolute;
		top: -13rpx;
		right: -8rpx;
		height: 25rpx;
		min-width: 25rpx;
		padding: 4rpx;
		border-radius: 20rpx;
		font-size: 20rpx;
		background: #f00808;
		color: #ffffff;
	}

	.my-assets {
		margin: 0 20rpx;
		padding: 40rpx 20rpx;
		padding-top: 0;
		background: #ffffff;
		border-radius: 12rpx;
	}

	.my-assets .item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.my-wallet {
		position: relative;
		width: 200rpx;
		border-left: 1px solid #dddddd;
	}

	.my-wallet::after {
		position: absolute;
		display: block;
		content: '';
		left: 0;
		border: 8rpx solid transparent;
		border-left-color: #dddddd;
	}

	.menu-wrap {
		margin: 0 20rpx;
		margin-top: 30rpx;
		background: #ffffff;
		/* box-shadow: 0 0 6rpx 0 rgba(0, 0, 0, 0.1); */
		border-radius: 12rpx;
	}

	.menu-wrap .title {
		font-size: 30rpx;
		font-weight: bold;
		padding: 20rpx 0rpx 10rpx 20rpx;
		margin-bottom: 30rpx;
		width: 678rpx;
		border-bottom: 1rpx solid #CCC;
	}

	.menu-wrap .group-bd {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.menu-wrap .item {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 177rpx;
		height: 150rpx;
		font-size: 24rpx;
	}

	.menu-wrap .item.icon-dizhi1-box .icon-round {
		background-image: linear-gradient(135deg, #67b4e2 10%, #356dce 70%, #5c8fe8 90%);
	}

	.menu-wrap .item.icon-youhuiquan1-box .icon-round {
		background-image: linear-gradient(135deg, #e87ea4 10%, #ff268a 70%, #fe0d76 90%);
	}

	.menu-wrap .item.icon-youhuiquan--box .icon-round {
		background-image: linear-gradient(135deg, #ff5a30 10%, #ff2b3c 70%, #ff1740 90%);
	}

	.menu-wrap .item.icon-fenxiao1-box .icon-round {
		background-image: linear-gradient(135deg, #7ceeba 10%, #1ed2b7 70%, #17c0ad 90%);
	}

	.menu-wrap .item.icon-kanjia-box .icon-round {
		background-image: linear-gradient(135deg, #f2a904 10%, #f27d04 70%, #eaa031 90%);
	}

	.menu-wrap .item.icon-shezhi1-box .icon-round {
		background-image: linear-gradient(135deg, #615f6c 10%, #4c4a58 70%, #615f6c 90%);
	}

	.menu-wrap .icon-round {
		width: 48rpx;
		height: 48rpx;
		color: #ffffff;
	}

	.menu-wrap .item .iconfont {
		font-size: 40rpx;
		color: #ffffff;
	}

	.menu-wrap .item .name {
		margin-top: 19rpx;
	}

	.bind_phone {
		width: 100%;
		height: 80rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		margin-bottom: 30rpx;
	}

	.bind_content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #ffffff;
		/* box-shadow: 0 0 6rpx 0 rgba(0, 0, 0, 0.1); */
		border-radius: 16rpx;
		height: 100%;
		padding: 0 20rpx;
	}

	.bind_txt {}

	.bind_btn {
		width: 134rpx;
		height: 50rpx;
		line-height: 50rpx;
		font-size: 22rpx;
		border-radius: 25rpx;
		text-align: center;
		color: #FFFFFF;
		background-color: #e2231a;
	}

	.vertical {
		position: absolute;
		top: 10px;
		right: 53px;
		z-index: 100000;
	}

	.vertical_img {
		width: 100rpx;
		height: 100rpx;
	}

	.f20 {
		margin-left: 5rpx;
		font-size: 19rpx;
	}

	.red_mini {
		color: #303133;
		font-size: 32rpx;
	}

	.icon-zhuanshutequan {
		color: #f5dca6;
		margin-right: 3px;
	}

	.news {
		position: absolute;
		top: 40rpx;
		right: 20rpx;
		z-index: 100;

	}

	.news .chat {
		width: 60rpx;
		height: 60rpx;
		position: absolute;
		top: 0rpx;
		right: 10rpx;

	}

	.news .icon-xiaoxi {
		font-size: 50rpx;
		color: #FFFFFF;
	}

	.news_num {
		position: absolute;
		top: 24rpx;
		right: 44rpx;
		z-index: 100;
		border-radius: 50%;
		width: 25rpx;
		height: 25rpx;
		text-align: center;
		line-height: 25rpx;
		color: #FFFFFF;
		background-color: #ff6633;
		padding: 5rpx;
		font-size: 20rpx;
	}

	.my-assets-all {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
		line-height: 80rpx;
		border-bottom: 2rpx solid #CCC;
	}

	.my-assets-all .icon.icon-jiantou {
		font-size: 16px;
		color: #999999;
	}

	.shoujihao {
		border: none;
		background-color: #FFFFFF;
	}

	.shouquan {
		padding: 10rpx;
		font-size: 25rpx;
		font-weight: 300;
		border-radius: 40rpx;
		background-color: #5FA0FF;
		color: white;
	}
</style>
