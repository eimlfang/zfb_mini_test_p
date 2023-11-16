<template>
	<view :data-theme='theme()' class="yanse">
		<!-- 搜索框 -->
		<view class="top_head pr">
			<view class="ssdisplay" :class="{'ssdisplay':'ssdisplay'}" :style="'background:'+updatebgcl+';'">
				<view class="sousk">
					<!-- <view class="quanguo">全国</view> -->
					<view class="top_search special" @click="showSearch=true"
						style="display: flex;justify-content:space-between;">
						<view>
							<text class="icon iconfont icon-sousuo"></text>
							<text>iPhone 14 Pro Max</text>
						</view>
						<view style="color:black;">
							<text> | 搜索</text>
						</view>
					</view>
				</view>
				<!-- <view @click="dingyue()"
					style="font-weight: bold;font-size: 32rpx;display: flex;justify-content: center;align-items: center;color: white;">
					订阅</view> -->
			</view>
			<view class="nuter" v-if="openCategory.open">
				<navBar style="width: 100%;" :color='openCategory.color' @currentIndex="setIndex" :currentI="thisindex"
					:navList="category_list">
				</navBar>
			</view>
		</view>

		<!-- 间隔背景颜色 -->
		<!-- <view class="top_bg" :style="'background-color: '+bgcolor+';'">
		</view> -->
		<!-- 生活号 -->
		<!-- <view class="shh">
			<lifestyle :publicId='canUse' />
		</view> -->
		<view>
			<view v-if='thisindex == 0'>
				<diy style="position: relative;" :diyItems="items"></diy>
			</view>
			<view v-if='thisindex!=0'>
				<view class="product-list">
					<view v-for="(pitem,pindex) in product_list" :key='pindex' class="product_item o-h"
						:class="pindex%2==1?'product_item_right':''"
						@click="gotoPage('/pages/product/detail/detail?product_id='+pitem.product_id)">
						<view>
							<image :src="pitem.product_image" style="width:345rpx;height:345rpx;"></image>
						</view>
						<view class="text-ellipsis-2 f26 pro_name  p-0-20 mt20">{{pitem.product_name}}</view>
						<view class="mt36 mb20 p-0-20">
							<text class="f20 fb redF6">￥</text>
							<text class="f32 fb redF6">{{pitem.product_sku.product_price}}</text>
							<text class="text-d-line f20 gray9 ml10">￥</text>
							<text class="text-d-line f24 gray9">{{pitem.product_sku.line_price}}</text>
						</view>
					</view>
				</view>
				<!-- 没有记录 -->
				<view class="d-c-c p30 ww100" v-if="product_list.length == 0 && !loading">
					<text class="iconfont icon-wushuju"></text>
					<text class="cont">亲，暂无相关记录哦</text>
				</view>
				<uni-load-more v-else :loadingType="loadingType"></uni-load-more>
			</view>
		</view>
		<!-- </scroll-view> -->

		<!--点击收藏-->
		<view class="collection-box" v-if="is_collection" :style="'top:'+(topBarTop()  + topBarHeight() + 10)+'px;'">
			<view class="inner">
				<text>
					点击“</text>
				<text class="point">.</text>
				<text class="point point-big">.</text>
				<text class="point">.</text>
				<text>”添加到我的小程序，\n微信首页下拉即可快速访问店铺
				</text>
			</view>
			<button type="primary" class="close-btn" @click="is_collection=false">x</button>
		</view>

		<!--关注公众号-->
		<!-- #ifdef MP-WEIXIN -->
		<view class="follow-gzh" v-if="is_follow=='1'">
			<text class="icon iconfont icon-guanbi" @click="is_follow=0"></text>
			<official-account></official-account>
		</view>
		<!-- #endif -->

		<!--首页推送-->
		<Homepush v-if="is_homepush" :homepush_data="homepush_data"></Homepush>
		<searchProduct :isShow='showSearch' @close="closeSearch"></searchProduct>
		<tabBar></tabBar>
	</view>
</template>

<script>
	import diy from '@/components/diy/diy.vue';
	import Homepush from './home-push/home-push.vue';
	import navBar from '@/components/navBar/navBar.vue'
	import uniLoadMore from '@/components/uni-load-more.vue';
	import searchProduct from '@/components/searchProduct.vue';

	import config from '@/config.js';
	export default {
		components: {
			diy,
			Homepush,
			navBar,
			uniLoadMore,
			searchProduct
		},
		data() {
			return {
				updatebgcl: '',
				/*是否正在加载*/
				loading: false,
				background: '',
				listData: [],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				items: [],
				/*收藏引导*/
				is_collection: false,
				/*关注*/
				is_follow: '0',
				/*是否首页推送*/
				is_homepush: false,
				/*首页推送数据*/
				homepush_data: {},
				triggered: true,
				target: 0,
				thisindex: 0,
				category_list: [],
				product_list: [],
				page: 1,
				last_page: 0,
				no_more: false,
				indexStop: 0,
				title_name: '',
				bgcolor: '',
				msgNum: 0,
				title_image: false,
				toplogo: '',
				url: '',
				jweixin: null,
				showSearch: false,
				openCategory: {
					color: "#000000",
					open: 0
				}
			};
		},
		watch: {
			'thisindex': function(n, o) {
				if (n != o) {
					this.category_id = this.category_list[n].category_id;
					this.toggleInit();
					if (n != 0) {
						this.getProduct()
					}
				}
			}
		},
		computed: {
			/*加载中状态*/
			loadingType() {
				if (this.loading) {
					return 1;
				} else {
					if (this.product_list.length != 0 && this.no_more) {
						return 2;
					} else {
						return 0;
					}
				}
			}
		},
		onTabItemTap() {
			//#ifdef H5
			if (process.env.NODE_ENV === 'production') {
				window.location.href = config.app_url + config.h5_addr + '/pages/index/index';
			}
			//#endif
		},
		// onShow(options) {
		// 	console.log("onShow",options);
		// 	uni.setStorageSync('tuiguangid',options.tuiguangid);
		// },
		onLoad(options) {
			uni.setStorageSync('supplier',options.supplierid)
			uni.setStorageSync('tuiguangid', options.tuiguangid);
			let self = this;
			self.getData();
			// console.log("检查更新开始");
			const updateManager = my.getUpdateManager();
			updateManager.onCheckForUpdate(function(res) {
				// 检查更新结果
				console.log("检查更新结果", res.hasUpdate);
			});
			updateManager.onUpdateReady(function() {
				updateManager.applyUpdate();
				my.confirm({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success: function(res) {
						console.log("success", res);
						if (res.confirm) { // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate();
						} else {
							console.log("失败");
							updateManager.applyUpdate();
						}
					},
					fail: function(res) {
						console.log("fail", res);
						updateManager.applyUpdate();
					},
				});
			});
			updateManager.onUpdateFailed(function() {
				console.log("失败");
				updateManager.applyUpdate();
				// 新版本下载失败
			});
			// console.log("检查更新结束");
			//#ifdef H5
			if (self.isWeixin()) {
				self.url = window.location.href;
			}
			//#endif
			self._freshing = false;
			/*获取订单列表*/
			self.getList();
			self.getfk();
			uni.$on('updatebg2', function(data) {
				// console.log("走了updatebg2",data);
				self.updatebgcl = data;
				my.setNavigationBar({
					backgroundColor: data,
				})
			})
		},
		onPullDownRefresh() {
			if (this.thisindex == 0) {
				this.getData();
			} else {
				this.toggleInit();
				this.getProduct();
			}
		},
		onReachBottom() {
			this.scrolltolowerFunc();
			console.log('到底了')
		},
		methods: {
			dingyue() {
				my.requestSubscribeMessage({
					//需要用户订阅的消息模板的id的集合
					entityIds: ['f558d5ee8d4c47889d9dae89887bc0ad', '0e59fbc3303845b29a4f2c4542705ee0'],
					success: (res) => {
						// res.behavior=='subscribe'
						// console.log("******************", res.stat)
						console.log("接口调用成功的回调", res);
						if (res.behavior == 'subscribe') {
							uni.showToast({
								title: "你已经订阅过了！",
								duration: 1000,
								position: 200,
							})
						}
						// my.requestSubscribeMessage({
						// 	//需要用户订阅的消息模板的id的集合
						// 	entityIds: ['accc722d8516459fbb9df01fa358ab58'],
						// 	success: (res) => {
						// 		console.log("接口调用成功的回调", res);
						// 		if (res.behavior == 'subscribe') {
						// 			uni.showToast({
						// 				title: "你已经订阅过了！",
						// 				duration: 1000,
						// 				position: 200,
						// 			})
						// 		}
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
						console.log("接口调用失败的回调", res);
					},
					complete: (res) => {
						console.log("接口调用结束的回调", res)
					}
				});


			},
			getfk() {
				// console.log("===========");
				let visitcode = uni.getStorageSync('visitcode');
				// console.log("===========", visitcode);
				let self = this;
				self._post('index/addVisitor', {
					visitcode: visitcode
				}, function(res) {
					// console.log(1111, res);
				});
			},
			/*获取首页分类*/
			getData() {
				let self = this;
				uni.showLoading({
					title: '加载中'
				});
				self._get('index/index', {
					url: self.url
				}, function(res) {
					console.log("res.data.item111111111111111111s",res);
					self.listData = res.data.list;
					self.background = res.data.background;
					self.items = res.data.items;
					self.title_name = res.data.page.params.title;
					self.bgcolor = res.data.page.style.titleBackgroundColor;
					self.msgNum = res.data.msgNum;
					self.toplogo = res.data.page.style.toplogo;
					self.setPage(res.data.page);
					self.title_type = res.data.page.params.title_type;
					self.titleTextColor = res.data.page.style.titleTextColor;
					self.openCategory = res.data.page.category;
					//弹出收藏
					// #ifdef  MP-WEIXIN
					let isFirst = uni.getStorageSync('isFirst');
					if (isFirst == '' && res.data.setting.collection.status == '1') {
						self.is_collection = true;
						uni.setStorageSync('isFirst', 1);
					}
					self.is_follow = res.data.setting.officia.status;
					// #endif
					// 首页推送
					let homepush_name = uni.getStorageSync('homepush_name');
					if (res.data.setting.homepush.is_open && homepush_name != res.data.setting.homepush.name) {
						self.homepush_data = res.data.setting.homepush;
						self.is_homepush = true;
						self.is_homepush = true;
					}
					// 配置微信扫一扫参数
					//#ifdef H5
					if (self.url != '') {
						self.jweixin = self.configWxScan(res.data.signPackage);
					}
					//#endif
					uni.hideLoading();
					self.loadding = false;
					uni.stopPullDownRefresh();
				});


			},
			/*获取数据*/
			getList() {
				let self = this;
				self._get('product.category/index', {}, function(res) {
					self.category_list = res.data.list;
					let fistIndex = {
						name: '推荐',
						category_id: '0'
					}
					self.category_list.unshift(fistIndex)
				});
			},
			/*获取数据*/
			getProduct() {
				let self = this;
				let page = self.page;
				self.loading = true;
				self._get('product.product/lists', {
					page: page || 1,
					category_id: self.category_id,
					search: '',
					sortType: 'all',
					sortPrice: 0,
					list_rows: 10,
				}, function(res) {
					self.loading = false;
					uni.stopPullDownRefresh();
					self.product_list = self.product_list.concat(res.data.list.data);
					self.last_page = res.data.list.last_page;
					if (res.data.list.last_page <= 1) {
						self.no_more = true;
					}
				});
			},
			/*可滚动视图区域到底触发*/
			scrolltolowerFunc() {
				let self = this;
				if (self.page < self.last_page) {
					self.page++;
					self.getProduct();
				}
				self.no_more = true;
			},
			/*设置页面*/
			setPage(page) {
				uni.setNavigationBarTitle({
					title: page.params.name
				});

				let colors = '#000000';
				if (page.style.titleTextColor == 'white') {
					//字母要小写
					colors = '#F79463'
				}
				uni.setNavigationBarColor({
					frontColor: colors,
					backgroundColor: page.style.titleBackgroundColor,
				})
				this.updatebgcl = page.style.titleBackgroundColor;

			},

			/*分享当前页面*/
			onShareAppMessage() {
				let self = this;
				console.log("打印分享日志")
				// self.page.params.share_title
				return {
					title: "分享页面",
					path: '/pages/index/index?' + self.getShareUrlParams(),
				};
			},
			setTabBarItem(n) {
				if (n == 2) {
					console.log('订单')
					uni.setTabBarItem({
						index: 2,
						pagePath: '/pages/order/myorder',
						text: '订单',
						iconPath: 'static/order.png',
						selectedIconPath: 'static/order_active.png',
					})
				}

			},
			toggleInit() {
				this.page = 1;
				this.last_page = 0;
				this.no_more = false;
				this.product_list = [];
			},
			//点击nav控制下面的展示
			setIndex(e) {
				this.thisindex = e
			},
			/* 禁止手动滑动 */
			stopTouchMove() {
				return true
			},
			/*扫一扫核销*/
			scanQrcode: function() {
				let self = this;
				//#ifdef H5
				// 只允许通过相机扫码
				self.jweixin.scanQRCode({
					needResult: 1,
					scanType: ["qrCode", "barCode"],
					success: function(res) {
						self.gotoPage('/pages/store/clerkorder?order_no=' + res.resultStr);
					},
					error: function(res) {
						uni.showToast({
							title: '扫码失败，请重试'
						})
					}
				});
				//#endif
				//#ifndef H5
				// 只允许通过相机扫码
				uni.scanCode({
					onlyFromCamera: true,
					success: function(res) {
						if (res.errMsg == 'scanCode:ok') {
							self.gotoPage('/pages/store/clerkorder?order_no=' + res.result);
						} else {
							uni.showToast({
								title: '扫码失败，请重试'
							})
						}
					}
				});
				//#endif
			},
			/* 关闭搜索 */
			closeSearch() {
				this.showSearch = false;
			}
		}
	};
</script>

<style>
	.quanguo {
		width: 80rpx;
		font-size: 35rpx;
		margin-bottom: 10rpx;
		color: #FFF;
		margin-left: 50rpx;
	}

	.ssdisplay {
		display: flex;
	}

	.sousk {
		display: flex;
		align-items: center;
		background-color: #ffffff;
		border: 1rpx solid #588BC8;
		border-radius: 40rpx;
		margin: 30rpx 20rpx;
		width: 800rpx;
	}

	.shh {
		width: 100%;
		height: 200rpx;
	}

	,
	.bg-f2 {
		background-color: #F2F2F2;
	}

	.top_head {
		z-index: 1;
		position: sticky;
		z-index: 100;
		/* background: linear-gradient(180deg, #FF4646 0%, rgba(86, 213, 200, 0) 30%); */
	}

	.yanse {
		/* background: linear-gradient(180deg, #FF4646 0%, rgba(86, 213, 200, 0) 30%); */
	}

	.head_top {
		width: 100%;
		height: var(--status-bar-height);
	}

	.index_log {
		/* width: 154rpx; */
		min-height: 46rpx;
		line-height: 46rpx;
		font-size: 26rpx;
		font-weight: 800;
		color: #FFFFFF;
	}

	.index_log image {
		width: 60rpx;
		height: 60rpx;
	}

	.top_search {
		/* width: 380rpx; */
		height: 60rpx;
		line-height: 60rpx;
		background: #FFFFFF;
		border-radius: 30rpx;
		margin-left: 10rpx;
		font-size: 24rpx;
		color: #D9D9D9;
		margin-bottom: 10rpx;
	}

	.top_search.search-wx {
		width: 385rpx;
	}

	.top_search.special {
		width: 670rpx;
		margin: 0 auto;
		padding-right: 10rpx;
	}

	.top_search_right {
	
		background: #FFFFFF;
		border-radius: 30rpx;
		height: 60rpx;
		position: relative;
		/* padding: 0 20rpx; */
		/* border-left: 1rpx solid #D9D9D9; */
	}

	.top_search_right::before {
		content: ' ';
		width: 1rpx;
		height: 20rpx;
		background-color: #D9D9D9;
		left: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		position: absolute;
	}

	.top_search_right .icon-saoyisao1 {
		padding: 0 20rpx;
		/* border-left: 1rpx solid #D9D9D9; */
	}

	.top_search .icon-sousuo {
		font-size: 30rpx;
		color: #EE1413;
		margin-left: 20rpx;
		margin-right: 10rpx;
		margin-top: 50rpx;
	}



	.nuter {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		display: flex;
		justify-content: space-around;
		font-size: 35rpx;
		padding-bottom: 10rpx;
	}

	.nuter view {
		flex: 1;
		font-size: 30rpx;
		text-align: center;
		transition: all 0.5s ease .1s;
	}

	swiper {
		height: 80vh;
		width: 100%;
		overflow: hidden;
	}

	.swiper-item {
		overflow-y: scroll;
		width: 100%;
		height: 99%;
		box-sizing: border-box;
	}

	.banner {
		height: 240upx;
		width: 710upx;
	}

	.banner image {
		width: 710rpx;
		height: 240rpx;
	}

	.new-people .group-bd {
		display: flex;
		justify-content: space-between;
	}

	.new-people .list {
		padding-right: 30rpx;
	}

	.new-people .list .item {
		width: 180rpx;
		text-align: center;
	}

	.new-people .list .price {
		font-size: 24rpx;
	}

	.new-people .list .price .num {
		font-size: 34rpx;
		font-weight: bold;
	}

	.new-people .list button {
		font-size: 24rpx;
		background: #6170ff;
	}

	.new-people .list image {
		width: 180rpx;
		height: 180rpx;
		border: 1px dashed #cccccc;
	}

	.new-people .other {
		width: 230rpx;
	}

	.new-people .other image {
		width: 100%;
	}

	.group-seckill .left .iconfont {
		margin-right: 8rpx;
		color: rgb(226, 35, 26);
		font-size: 40rpx;
	}

	.group-seckill .list .item {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 150rpx;
		height: 230rpx;
		border: 1px dashed #cccccc;
	}

	.group-seckill .list text {
		line-height: 60rpx;
		color: #e2231a;
	}

	.group-seckill .list image {
		width: 150rpx;
		height: 150rpx;
	}

	.group-hd .datetime .time {
		padding: 4rpx;
		background: #e2231a;
		color: #ffffff;
		border-radius: 4rpx;
	}

	.group-hd .datetime .point {
		padding: 0 10rpx;
		color: #e2231a;
	}

	.collection-box {
		position: fixed;
		width: 380rpx;
		padding: 20rpx;
		top: 20rpx;
		right: 20rpx;
		line-height: 40rpx;
		font-size: 24rpx;
		border-radius: 16rpx;
		background: #ffffff;
		border: 1px solid #eeeeee;
		box-shadow: 0 0 6rpx 0 rgba(0, 0, 0, .08);
		z-index: 100;
	}

	.collection-box::after {
		position: absolute;
		content: '';
		display: block;
		right: 140rpx;
		top: -15rpx;
		transform: rotate(45deg);
		width: 30rpx;
		height: 30rpx;
		transform: rotate;
		background: #FFFFFF;
		border-left: 1px solid #eeeeee;
		border-top: 1px solid #eeeeee;
	}

	.collection-box .point {
		width: 20rpx;
		height: 20rpx;
		font-size: 60rpx;
		line-height: 0;
		color: #666666;
	}

	.collection-box .point-big {
		font-size: 80rpx;
	}

	.collection-box .close-btn {
		position: absolute;
		padding: 0;
		right: 10rpx;
		top: 10rpx;
		width: 40rpx;
		height: 40rpx;
		line-height: 30rpx;
		background: #FFFFFF;
		color: #999999;
		border-radius: 50%;
	}

	.iconfont {
		color: #CCCCCC;
	}

	.follow-gzh {
		position: fixed;
		left: 0;
		right: 0;
		bottom: calc(var(--window-bottom));
		border-radius: 16rpx;
		box-shadow: 0 0 20rpx 0 rgba(0, 0, 0, .1);
		background: #FFFFFF;
		z-index: 10;
	}

	.follow-gzh .iconfont {
		display: block;
		position: absolute;
		right: 10rpx;
		top: 10rpx;
		z-index: 99;
	}

	.product-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		position: relative;
		z-index: 1;
	}

	.product_item {
		width: 345rpx;
		margin: 20rpx;
		border-radius: 12rpx;
		background-color: #ffffff;
	}

	.product_item.product_item_right {
		margin-left: 0;
	}

	.product_item .pro_name {
		height: 68rpx;
		line-height: 34rpx;
	}

	.chat {
		width: 40rpx;
		height: 40rpx;
	}

	.newsnum {
		position: absolute;
		top: -8rpx;
		right: -16rpx;
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

	.top_search {}
</style>
