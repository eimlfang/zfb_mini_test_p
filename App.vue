<script>
	import utils from './common/utils.js'
	import config from './config.js'
	export default {
		onLaunch: function(e) {
			uni.removeStorageSync('token');
			uni.removeStorageSync('user_id');
			uni.removeStorageSync('tuiguangid');
			uni.removeStorageSync('getLocation');
			my.getLocation({
				type: 1, // 获取经纬度和省市区县数据
				success: (res) => {
					let getLocationdata = {}
					getLocationdata.country = res.country;
					getLocationdata.province = res.province;
					getLocationdata.city = res.city;
					getLocationdata.district = res.district;
					uni.setStorageSync('getLocation', getLocationdata);
					// console.log("getLocation",uni.getStorageSync('getLocation').district);
					// return
				},
				fail: (res) => {
					console.log(res);
				},
				complete: () => {},
			});
			// console.log("检查更新开始");
			// const updateManager = my.getUpdateManager()
			// updateManager.onCheckForUpdate(function(res) { // 请求完新版本信息的回调
			// 	console.log("检查更新结果", res.hasUpdate);
			// })
			// updateManager.onUpdateReady(function() {
			// 	my.confirm({
			// 		title: '更新提示',
			// 		content: '新版本已经准备好，是否重启应用？',
			// 		success: function(res) {
			// 		console.log("success",res);
			// 			// if (res.confirm) { // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
			// 				updateManager.applyUpdate();
			// 			// }
			// 		},
			// 		fail: function(res) {
			// 		console.log("fail",res);
			// 			updateManager.applyUpdate();
			// 		},
			// 	})
			// })
			// updateManager.onUpdateFailed(function() {
			// 	// 新版本下载失败
			// 	console.log("失败");
			// })
			// console.log("检查更新结束");
			// 隐私政策
			// #ifdef APP-PLUS
			this.isFirstEnter();
			// #endif
			
			//应用启动参数
			this.onStartupScene(e.query);
			this.getTabBarLinks();

		},
		onShow: function() {
			//console.log('App Show')
			//#ifdef APP-PLUS
			getApp().globalData.vueObj = this;
			//#endif
		},
		onHide: function() {
			//console.log('App Hide')
		},
		methods: {
			isFirstEnter() {
				var firstEnter = uni.getStorageSync('firstEnter'); //同步获取缓存中是否有首次进入字段
				let self = this;
				uni.getSystemInfo({
					success(data) {
						console.log('firstEnter=' + firstEnter);
						// 如果是ios并且没有firstEnter缓存则弹出模态框
						if (data.platform == 'ios' && !firstEnter) {
							console.log('---------------');
							uni.navigateTo({
								url: '/pages/privacy/privacy'
							})
						}
					}
				})
			},
			updateManager: function() {
				const updateManager = uni.getUpdateManager();
				updateManager.onCheckForUpdate(function(res) {
					// 请求完新版本信息的回调
					if (res.hasUpdate) {
						updateManager.onUpdateReady(function(res2) {
							uni.showModal({
								title: '更新提示',
								content: '新版本已经准备好，即将重启应用',
								showCancel: false,
								success(res2) {
									if (res2.confirm) {
										// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
										updateManager.applyUpdate();
									}
								}
							});
						});
					}
				});

				updateManager.onUpdateFailed(function(res) {
					// 新的版本下载失败
					uni.showModal({
						title: '更新提示',
						content: '检查到有新版本，但下载失败，请检查网络设置',
						showCancel: false
					});
				});
			},
			/**
			 * 小程序启动场景
			 */
			onStartupScene(query) {
				// 获取场景值
				let scene = utils.getSceneData(query);
				// 记录推荐人id
				let refereeId = query.referee_id;
				if (refereeId > 0) {
					if (!uni.getStorageSync('referee_id')) {
						uni.setStorageSync('referee_id', refereeId);
					}
				}
				// 记录分销人id
				let uid = scene.uid;
				if (uid > 0) {
					if (!uni.getStorageSync('referee_id')) {
						uni.setStorageSync('referee_id', uid);
					}
				}
				// 如果是h5，设置app_id
				// #ifdef  H5
				let appId = query.app_id;
				if (appId > 0) {
					this.config.app_id = appId;
				}
				// #endif
			},
			getTabBarLinks() {
			
				// 如果是android不处理图标,不起作用
				// #ifdef  APP-PLUS
				// let is_android = false;
				// if(uni.getSystemInfoSync().platform == 'android'){
				// 	is_android = true;
				// }
				// console.log('is_android='+is_android);
				// if(is_android){
				// 	return;
				// }
				// #endif
				uni.request({
					url: this.config.app_url + '/index.php/api/index/nav',
					data: {
						app_id: this.config.app_id
					},
					success: (result) => {
						let vars = result.data.data.vars.data;
						let theme = result.data.data.theme.theme;
						this.$store.commit('changeTheme', theme);
						uni.setStorageSync('TabBar', vars);
						if (vars.is_auto == '0') {
							vars.list = [];
							let color = ['#ff5704', '#19ad57', '#ffcc00', '#1774ff', '#e4e4e4', '#c8ba97',
								'#623ceb'
							]
							uni.setTabBarStyle({
								color: '#333333',
								selectedColor: color[theme],
							})
							uni.setTabBarItem({
								index: 0,
								text: '首页',
								iconPath: 'static/tabbar/home.png',
								selectedIconPath: 'static/tabbar/home_' + theme + '.png'
							})
							uni.setTabBarItem({
								index: 1,
								text: '分类',
								iconPath: 'static/tabbar/category.png',
								selectedIconPath: 'static/tabbar/category_' + theme + '.png'
							})
							uni.setTabBarItem({
								index: 2,
								text: '店铺',
								iconPath: 'static/tabbar/shop.png',
								selectedIconPath: 'static/tabbar/shop_' + theme + '.png'
							})
							uni.setTabBarItem({
								index: 3,
								text: '购物车',
								iconPath: 'static/tabbar/cart.png',
								selectedIconPath: 'static/tabbar/cart_' + theme + '.png'
							})
							uni.setTabBarItem({
								index: 4,
								text: '我的',
								iconPath: 'static/tabbar/user.png',
								selectedIconPath: 'static/tabbar/user_' + theme + '.png'
							})
							console.log('-----show--------')
							console.log('static/tabbar/user_' + theme + '.png')
							uni.setStorageSync('theme', theme);
							uni.showTabBar();
						} else {
							console.log('-----hide--------')
							uni.hideTabBar();
						}
					}
				});
			},
			updateWgt(wgtUrl) {
				uni.showModal({
					title: '版本更新',
					content: '检查到有新版本，请点击更新',
					confirmText: "更新",
					showCancel: false,
					success: function(e) {
						if (e.confirm) {
							var dtask = plus.downloader.createDownload(
								wgtUrl, {},
								function(d, status) {
									uni.showToast({
										title: '下载完成',
										mask: false,
										duration: 1000
									});
									// 下载完成
									if (status == 200) {
										plus.runtime.install(d.filename, {
												force: true
											},
											function() {
												plus.nativeUI.alert(
													"已更新至最新版本，确定后将重启应用",
													function() {
														plus.runtime.restart();
													}, "更新提示", "确定");
											},
											function(e) {
												uni.showToast({
													title: '安装失败-01',
													mask: false,
													duration: 1500
												});
											});
									} else {
										uni.showToast({
											title: '更新失败-02',
											mask: false,
											duration: 1500
										});
									}
								});
							try {
								dtask.start(); // 开启下载的任务
								var prg = 0;
								var showLoading = plus.nativeUI.showWaiting("正在下载"); //创建一个showWaiting对象 
								dtask.addEventListener('statechanged', function(
									task,
									status
								) {
									// 给下载任务设置一个监听 并根据状态  做操作
									switch (task.state) {
										case 1:
											showLoading.setTitle("正在下载");
											break;
										case 2:
											showLoading.setTitle("已连接到服务器");
											break;
										case 3:
											prg = parseInt(
												(parseFloat(task.downloadedSize) /
										  	parseFloat(task.totalSize)) *
												100
											);
											showLoading.setTitle("  正在下载" + prg + "%  ");
											break;
										case 4:
											plus.nativeUI.closeWaiting();
											//下载完成
											break;
									}
								});
							} catch (err) {
								plus.nativeUI.closeWaiting();
								uni.showToast({
									title: '更新失败-03',
									mask: false,
									duration: 1500
								});
							}
						} else {
							//取消
						}
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
	@import './common/iconfont.css';
	@import './common/myIcon.css';
	/*每个页面公共css */
	@import './common/style.scss';
</style>
