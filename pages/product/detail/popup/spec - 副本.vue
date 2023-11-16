<template>
	<view :class="Visible?'product-popup open':'product-popup close'" @touchmove.stop.prevent="" @click="closePopup">
		<view class="popup-bg"></view>
		<view class="main" v-on:click.stop >

			<view class="header" closeable=true  >
				<view class="sda">{{product_name}}</view>
				<image :src="form.show_sku.sku_image" mode="aspectFit" class="avt"></image>
					<view class="kongge"></view>
				<view class="price">

					<text class="qian">¥{{form.show_sku.product_price}}</text><text class="tian">/天</text>

					<!-- 	<text class="old-price" v-if="form.show_sku.line_price!=null">¥{{form.show_sku.line_price}}</text> -->
				</view>
				<view class="kongge"></view>
				
				<view class="select_spec">{{ selectSpec }}</view>
				<!-- <view class="stock">
					库存：{{form.show_sku.stock_num}}
				</view> -->

				<!-- <view class="close-btn" @click="closePopup">
					<text class="icon iconfont icon-guanbi"></text>
				</view> -->
				
			</view>
			<view class="xian">
			<view class="hah">
				<view class="xing">
					<view>月租金</view>
					<view>￥{{form.show_sku.produnt_period?form.show_sku.produnt_period:'0'}}元</view>
				</view>
				<view class="xing1">
					<view>总租金</view>
					<!-- <view>￥{{form.show_sku.product_price *10000*365/10000+365}}元</view> -->
					<view>￥{{form.show_sku.line_price}}元</view>
				</view>
				<view class="xing2" >
					<view>买断价</view>
					<view>￥{{ is ? '0' : buy_out_price}}元</view>
				</view>
			
				</view>
			</view>
		
			<view class="body">
			
				<!--规格-->
				<view>
					<scroll-view scroll-y="true" class="specs mt20" 
						v-if="form.specData !=null">
						<!--第一个问号的弹窗-->
						<view class="tan1">
							<u-popup :show="show1" @close="close1" closeable=true>
								<view class="tanchuang">
									<view class="shuju">租用说明</view>
									<view class="zuqi">租期租金</view>
									
									<view>
									<view class="shouqi">首期
										<view class="">￥{{form.show_sku.produnt_period?form.show_sku.produnt_period:'0'}}/月</view>
									</view>
									<view class="shouqi">剩余11期
										<view class="">￥{{form.show_sku.produnt_period?form.show_sku.produnt_period:'0'}}/月</view>
									</view>
									</view>
									<view class="zuqi">到期方案</view>
									<view class="daoqi">租赁到期后，商品将直接赠送给您，无需另外支付费用。</view>
									<view class="daoqi">租完即送的买断价格:总租金-已付租金-未付租金的期数(必须大于2期)*100</view>
									<view class="zuqi">滞纳金说明</view>
									<view class="daoqi">如您未能按期、足额支付本协议约定的款项 (包括但不限于租金、服务费、买断价、赔偿金)，
										自逾期之日起，您应按照10元/天向蜂窝租机支付滞纳金。本协议项下。
										滞纳金收取上限不超过租赁总费用与到期买断价之和的12%。</view>
								</view>
							</u-popup>
						</view>
						<!--第二个问号的弹窗-->
						<view class="tan2">
							<u-popup :show="show2" @close="close1"  closeable=true>
								<view class="tanchuang2">
									<view class="shuju">租用说明</view>
									<view class="zuqi" style="margin-bottom: 30rpx;">租期租金</view>
									<view style="margin-bottom: 30rpx;">
										<view style="border: 1rpx solid;display: flex;margin: 0 30rpx;">
											<view style="width: 20%;text-align: center;border-right: 1rpx solid #333333; background-color: #D9D9D9;">首期</view>
											<view style="text-align: center; width: 80%;">￥{{form.show_sku.produnt_period?form.show_sku.produnt_period:'0'}}/月</view>
										</view>
										<view style="border: 1rpx solid;display: flex;margin: 0 30rpx;">
											<view style="width: 20%;text-align: center;border-right: 1rpx solid #333333; background-color: #D9D9D9;">剩余11期</view>
											<view style="text-align: center; width: 80%;">--/月</view>
										</view>
										</view>
									<view class="zuqi"style="margin-bottom: 30rpx;" >租满可选</view>
									<view style="margin-bottom: 30rpx;">
									<view class="maiduan1">
										<view class="title">
											买断
										</view>
										<view class="hesgi">
											<view class="maiduanjin">买断金￥{{ is ? '0.00' : buy_out_price}}</view>
											<view>一次支付买断款，即可直接拥有此商品</view>
											<view>提前买断价格 = 总租金+ 买断款- 已付租金-未付租金的期数(必须大于2期)* 100</view>
										</view>
									</view>
									<view class="maiduan1">
										<view class="title">
											归还
										</view>
										<view class="hesgi">
											<view class="maiduanjin">归还换新</view>
											<view>需要到期前申请归还，归还后可随时申请新机，归还前请清除个人数据，解除锁屏密码并注销ID登录</view>
										</view>
									</view>
									
									<view class="maiduan1">
										<view class="title">
											续租
										</view>

										<view class="hesgi">
											<view class="maiduanjin">
												月租金￥{{form.show_sku.line_price/10}}</view>
											<view>最长可续租12期，租满即可拥有此商品</view>
										</view>
									</view>
									</view>

									<view class="zuqi" style="margin-bottom: 30rpx;">滞纳金说明</view>
									<view class="daoqi">如您未能按期、足额支付本协议约定的款项 (包括但不限于租金、服务费、买断价、赔偿金)，
										自逾期之日起，您应按照10元/天向蜂窝租机支付滞纳金。本协议项下。
										滞纳金收取上限不超过租赁总费用与到期买断价之和的12%。</view>
								</view>
							</u-popup>
						</view>

						<view class="specs mt20" v-for="(item_attr,attr_index) in form.specData.spec_attr"
							:key="attr_index">
							<view class="specs-hd p-20-0">
								<text class="f26 gray3">{{item_attr.group_name}}</text>
								<!-- 							<text class="ml10 red" v-if="form.productSpecArr[attr_index]==null">
								请选择{{item_attr.group_name}}
							</text> -->
								<text v-if="item_attr.group_name=='保障服务'"
									style="border: 1rpx red solid;font-size: 20rpx;color: red; margin-left: 50rpx;">
									碎屏无需保障，加购更安心
								</text>
							</view>
							<!-- class="specs-list" -->

							<view v-if="item_attr.group_name=='保障服务'">
								<strong>
									<view class='specs-lists'>
										<view v-for="(item,item_index) in item_attr.spec_items" :key="item_index" class="specs-lists2">
											<view v-if="item.spec_value=='碎屏换新￥365'">
											<button :class="item.checked ? 'btn-checked' : 'btn-checke'"
												@click="selectAttr(attr_index, item_index,item)">
												{{item.spec_value}}
											</button>
											<view>
													
											</view>
										</view>
										</view>
									</view>
									
								</strong>
							</view>

							<view v-else-if="item_attr.group_name=='套餐'">
								<strong>
									<view class='specs-lists'>
										<view v-for="(item,item_index) in item_attr.spec_items" :key="item_index"
											class="specs-lists2">
											<view v-if="ddshow==0 || item.spec_value=='租完买断'" style="display: flex;">
												<button :class="item.checked ? 'btn-checked' : 'btn-checke'"
													@click="selectAttr(attr_index, item_index,item)">
													{{item.spec_value}}
												</button>
											
												<image  src="../../../../static/hha/wenhao.png"
													@click="tpdj(item)" class="tupian" >
												</image>
											</view>
										</view>

									</view>
								</strong>
							</view>
							<view v-else>
								<strong>
									<view class="specs-list">
										<button :class="item.checked ? 'btn-checked' : 'btn-checke'"
											v-for="(item,item_index) in item_attr.spec_items" :key="item_index"
											@click="selectAttr(attr_index, item_index,item)" type="default"
											size="mini">{{item.spec_value}}
										</button>
									</view>
								</strong>
							</view>

						</view>

					</scroll-view>
				</view>
				<!--选择数量-->
				<view class="level-box count_choose">
					<text class="key">数量</text>
					<text class="kucun">库存{{form.show_sku.stock_num}}</text>
					<view class="d-s-c">
						<view class="icon-box minus d-c-c" @click="sub()" :class="{'num-wrap':!issub}">
							<text class="icon iconfont icon-jian" style="font-size: 20rpx;color: #333333;"></text>
						</view>
						<view class="text-wrap">
							<input type="text" v-model="form.show_sku.sum" value="" />
						</view>
						<view class="icon-box plus d-c-c" :class="{'num-wrap':!isadd}" @click="add()">
							<text class="icon iconfont icon-jia" style="font-size: 20rpx;color: #333333;"></text>
						</view>
					</view>
				</view>
			</view>
			<view class="btns">
				<button class="confirm-btn" @click="confirmFunc(form)">确认</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tokendata: "",
				/*是否可见*/
				Visible: false,
				/*表单对象*/
				is: false,
				form: {
					detail: {

					},
					show_sku: {
						sku_image: ''
					},
					//form.specData.spec_list.spec_form.buy_out_price

				},
				buy_out_price: 0,
				/*当前商品总库存*/
				stock: 0,
				/*选择提示*/
				selectSpec: '',
				/*是否打开过多规格选择框*/
				isOpenSpec: false,
				type: '',
				show1: false,
				show2: false,
				maiduan: "",
				panduan: "",
				produnt_period: 0,
				zuwanjisong:1,
			}

		},
		props: ['isPopup', 'productModel', 'ddshow', 'product_name', 'zmshow'],
		onLoad() {

		},
		mounted() {
			this.maiduan = this.form.show_sku.buy_out_price;
			console.log("md", this.maiduan);
			console.log('form', this.form);
			this.tokendata = uni.getStorageSync('token');
		},
		computed: {

			/*判断增加数量*/
			isadd: function() {
				return this.form.show_sku.sum >= this.stock || this.form.show_sku.sum >= this.form.detail.limit_num;
			},

			/*判断减少数量*/
			issub: function() {
				return this.form.show_sku.sum <= 1;
			}
		},
		watch: {
			'isPopup': function(n, o) {
				if (n != o) {
					this.Visible = n;
					if (!this.isOpenSpec) {
						this.form = this.productModel;
						this.form.specData.spec_attr = this.form.specData.spec_attr.map((item, itemIndex) => {
								console.log("**********************",item)
							const {spec_items} = item
							return {
								...item,
								spec_items: spec_items.map((specItem, index) => {
							
									if (index == 0) {
										this.form.productSpecArr[itemIndex] = specItem.item_id;
									}
									return {
										...specItem,
										checked: index === 0,
									}
								})
							}
						})
						this.isOpenSpec = true;
						this.initShowSku();
						this.updateSpecProduct()
					}
					this.form.type = this.productModel.type;
				}
			},
			'form.specData': {
				handler(n, o) {
					let str = '',
						select = '';
					this.isAll = true;
					if (n) {
						for (let i = 0; i < n.spec_attr.length; i++) {
							let xing=n.spec_attr[i]
							console.log("////////////////////////////",xing)
							console.log(this.form.productSpecArr[i],'----------------------------------')
							if (this.form.productSpecArr[i] == null) {
								this.isAll = false;
								str += n.spec_attr[i].group_name + ' ';
							} else {
								n.spec_attr[i].spec_items.forEach(item => {
									if (this.form.productSpecArr[i] == item.item_id) {
										select += '\"' + item.spec_value + '\" ';
									}
								});
							}
						}
						if (!this.isAll) {
							str = '请选择: ' + str;
						} else {
							select = '已选: ' + select;
						}
					}
					this.selectSpec = this.isAll ? select : str;
				},
				deep: true,
				immediate: true
			}
		},
		methods: {
			// 支付宝登录
			async onGetAuthorize1() {
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
									uni.setStorageSync('token', res.data.data.token);
									uni.setStorageSync('user_id', res.data.data
										.user_id);
									uni.showToast({
										title: '登录成功'
									});
									this.tokendata = 1;
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

			// 获取支付宝会员信息
			getAlipayUserInfo() {
				return new Promise((resolve, reject) => {
					my.getOpenUserInfo({
						success: (res) => {
							const userInfo = JSON.parse(res.response)
							// .response; // 以下方的报文格式解析两层 response   
							resolve(userInfo);
							console.log("成功");

						},
						fail: (res) => {
							console.log("失败")
							reject(res);
						}
					});
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
			//弹窗
			tpdj(id) {
				console.log(id, '打印看看')

				if (id.spec_value == '租完即送') {
					this.show1 = true
				} else{
					this.show2 = true
				}
			},
			open1() {
				// console.log('open');
			},
			close1() {
				this.show1 = false,
					// console.log('close');
				this.show2 = false
				
			},

			/*初始化*/
			initShowSku() {
				this.form.show_sku.sku_image = this.form.detail.image[0].file_path;
				this.form.show_sku.product_price = this.form.detail.product_price;
				this.form.show_sku.product_sku_id = 0;
				this.form.show_sku.line_price = this.form.detail.line_price;
				this.form.show_sku.stock_num = this.form.detail.product_stock;
				this.form.show_sku.sum = 1;
				this.stock = this.form.detail.product_stock;
			},

			/*选择属性*/
			selectAttr(attr_index, item_index, item) {
				let self = this;
				// 选中了的规格
				let items = self.form.specData.spec_attr[attr_index].spec_items;
				let asd = self.form.specData.spec_attr;
				// console.log("sadasdsadsadadsa",items)
				
				for (let i = 0; i < asd.length; i++) {
					let ite = asd[i];
					// console.log("嗷嗷待食", ite)
					// console.log("看看", ite.spec_items)
					// console.log("第一个", ite.spec_items[0].spec_value)

					let diyige = ite.spec_items[0].spec_value
					console.log("再看看第一个", diyige)
					// for(let j=0;j < ite.spec_items;j++){
					// 	let kan =ite.spec_items[j]
					// 	console.log("再看看",kan)
					// }
				}
				// 
				let curItem = items[item_index];
				console.log("*******", item)
				this.panduan = item;
				console.log("111", this.panduan)

				console.log("打印看看", this.panduan)

				// if(this.panduan.item_id == "1"){
				// 	this.buy_out_price = 0.00;
				// 	console.log(111);
				// }else{
				// 	this.buy_out_price = self.buy_out_price;
				// 	console.log(222)
				// }
					
				if (item.spec_value==='租完即送'){
				this.zuwanjisong = 1
				}
				
				if (item.spec_value==='租完买断'){
				this.zuwanjisong = 2
				}
				
				if (curItem.checked) {
					curItem.checked = false;
					self.form.productSpecArr[attr_index] = null;
				} else {
					for (let i = 0; i < items.length; i++) {
						items[i].checked = false;
					}
					curItem.checked = true;
					
					self.form.productSpecArr[attr_index] = curItem.item_id;
					
				}
							for(let k=0;k < self.form.specData.spec_attr.length;k++){
								let suiping=self.form.specData.spec_attr[k]
								console.log("k",k);
								if(self.form.specData.spec_attr[k].group_name == '保障服务'){
									
									if(self.form.productSpecArr[k] == null){
										self.form.productSpecArr[k] = this.form.specData.spec_attr[k].spec_items[0].item_id
									}
								}
								
							}
				for (let i = 0; i < self.form.productSpecArr.length; i++) {
					
					if (self.form.productSpecArr[i] == null) {
						self.initShowSku();
						return;
					}
					
				}

				// 更新商品规格信息
				self.updateSpecProduct();
			},


			/*更新商品规格信息*/
			updateSpecProduct() {
				let self = this;
				let specSkuId = self.form.productSpecArr.join('_');
				console.log(specSkuId)
				// 查找skuItem
				// console.log(self.form.specData.spec_list, 'self.form.specData.spec_list')
				let spec_list = self.form.specData.spec_list,
					skuItem = spec_list.find((val) => {
						self.form.show_sku.product_sku_id = specSkuId;
						return val.spec_sku_id == specSkuId + '_2';
					});
				console.log(spec_list, 'spec_list')
				// 记录product_sku_id
				// 更新商品价格、划线价、库存
				console.log("查看规格123", skuItem)
				if (typeof skuItem === 'object') {

					self.stock = skuItem.spec_form.stock_num;
					if (self.form.show_sku.sum > self.stock) {
						self.form.show_sku.sum = self.stock > 0 ? self.stock : 1;
					}

					self.form.show_sku.product_price = skuItem.spec_form.product_price;
					this.buy_out_price = skuItem.spec_form.buy_out_price;
					
					if (this.panduan.item_id == "1") {
						this.is = true;
					} else {
						this.is = false;
					}
					self.form.show_sku.produnt_period = skuItem.spec_form.produnt_period;
					self.form.show_sku.line_price = skuItem.spec_form.line_price;
					self.form.show_sku.stock_num = skuItem.spec_form.stock_num;
					// self.form.show_sku.product_name = skuItem.spec_form.product_name;
					// console.log(self.form.show_sku,"?????????");
					if (skuItem.spec_form.image_id > 0) {
						self.form.show_sku.sku_image = skuItem.spec_form.image_path;
					} else {
						self.form.show_sku.sku_image = self.form.detail.image[0].file_path;
					}
				}
			},

			/*关闭弹窗*/
			closePopup() {
				this.$emit('close', this.form.specData, null);
			},

			/*确认提交*/
			confirmFunc() {
				// this.guige
				console.log('55555');
				this.createdOrder();
				// uni.navigateTo({
				// 	url:`../../../pages/order/confirm-order?guige=${JSON.stringify(this.guige)}`
				// })
				// if (this.form.specData != null) {
				// 	for (let i = 0; i < this.form.productSpecArr.length; i++) {
				// 	let asd=self.form.specData.spec_attr;

				// 		if (this.form.productSpecArr[i] == null) {

				// 			uni.showToast({
				// 				title: '请选择规格',
				// 				icon: 'none',
				// 				duration: 2000
				// 			});
				// 			return;
				// 		}
				// 	}
				// }

				// if (this.form.type == 'card') {
				// 	this.addCart();
				// } else {
				// 	this.createdOrder();
				// }
			},

			/*加入购物车*/
			addCart() {
				let self = this;
				let product_id = self.form.detail.product_id;
				let total_num = self.form.show_sku.sum;
				let product_sku_id = self.form.show_sku.product_sku_id;
				if (self.form.detail.spec_type == 20 && product_sku_id == 0) {
					uni.showToast({
						title: '请选择属性',
						icon: 'none',
						duration: 2000
					});
					return false;
				}

				self._post('order.cart/add', {
					product_id: product_id,
					total_num: total_num,
					product_sku_id: product_sku_id,
				}, function(res) {
					uni.showToast({
						title: res.msg,
						duration: 2000
					});
					self.$emit('close', null, res.data.cart_total_num);
				});
			},

			/*创建订单*/
			createdOrder() {
				let product_id = this.form.detail.product_id;
				let product_num = this.form.show_sku.sum;
				let product_sku_id = this.form.show_sku.product_sku_id+"_"+this.zuwanjisong;
				console.log(product_sku_id, '//////////////');
				let room_id = ''
				if (this.form.room_id) {
					room_id = '&room_id=' + this.form.room_id;
				}
				this.gotoPage('/pages/order/confirm-order?product_id=' + product_id + '&product_num=' + product_num +
					'&product_sku_id=' + product_sku_id + '&order_type=buy' + room_id + '&zmshow=' + this.zmshow);
			},

			/*商品增加*/
			add() {
				if (this.stock <= 0) {
					return;
				}
				if (this.form.show_sku.sum >= this.stock) {
					uni.showToast({
						title: '数量超过了库存',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if (this.form.detail.limit_num > 0 && this.form.show_sku.sum >= this.form.detail.limit_num) {
					uni.showToast({
						title: '数量超过了限购数量',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				this.form.show_sku.sum++;
			},

			/*商品减少*/
			sub() {
				if (this.stock <= 0) {
					return;
				}
				if (this.form.show_sku.sum < 2) {
					uni.showToast({
						title: '商品数量至少为1',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				this.form.show_sku.sum--;
			},

		}
	}
</script>

<style lang="scss">
	.product-popup {}

	.product-popup .popup-bg {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, .6);
		z-index: 99;
	}

	.product-popup .main {
		position: fixed;
		width: 100%;
		bottom: 0;
		height: 75%;
		// min-height: 200rpx;
		// max-height: 1050rpx;
		background-color: #fff;
		transform: translate3d(0, 980rpx, 0);
		transition: transform .2s cubic-bezier(0, 0, .25, 1);
		box-sizing: border-box;
		padding-bottom: env(safe-area-inset-bottom);
	
		border-radius: 12rpx;

		.hah {
			display: flex;
			justify-content: space-around;
			align-items: center;

			view {
				text-align: center;
			}
		}
	}

	.product-popup.open .main {
		transform: translate3d(0, 0, 0);
		z-index: 99;
	}

	.product-popup.close .popup-bg {
		display: none;
	}

	.product-popup.close .main {
		display: none;
		z-index: -1;
	}

	.product-popup .header {
		height: 200rpx;
		width: 550rpx;
		padding: 40rpx 0 10rpx 250rpx;
		position: relative;
		
	}
	.xian{
		border-bottom: 1px solid #EEEEEE;
	}

	.product-popup .header .avt {
		position: absolute;
		top: 40rpx;
		left: 30rpx;
		width: 180rpx;
		height: 180rpx;
		border: 2px solid #FFFFFF;
		background: #FFFFFF;
		border-radius: 12rpx;
	}

	.product-popup .header .stock {
		font-size: 26rpx;
		color: #999999;
	}

	.product-popup .close-btn {
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		top: 40rpx;
		right: 30rpx;
	}

	.product-popup .price {
		@include font_color('price_color');
		font-size: 24rpx;
	}

	.product-popup .price .num {
		padding: 0 4rpx;
		font-size: 40rpx;
	}

	.product-popup .old-price {
		margin-left: 10rpx;
		font-size: 26rpx;
		color: #999999;
		text-decoration: line-through;
	}

	.product-popup .body {
		
		padding: 20rpx 30rpx 39rpx 30rpx;
		max-height: 600rpx;
		overflow-y: auto;

	}

	.product-popup .level-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.product-popup .level-box .key {
		font-size: 24rpx;
		color: #999999;
	}

	.product-popup .level-box .kucun {
		font-weight: 300;
		font-size: 18rpx;
	}

	.product-popup .level-box .icon-box {
		width: 48rpx;
		height: 40rpx;
		background: #e0e0e0;
	}

	.product-popup .num-wrap .iconfont {
		color: #666;
	}

	.product-popup .num-wrap.no-stock .iconfont {
		color: #CCCCCC;
	}

	.product-popup .level-box .text-wrap {
		margin: 0 4rpx;
		height: 60rpx;
		border: none;
		background: #ffffff;
	}

	.product-popup .level-box .text-wrap input {
		padding: 0 10rpx;
		height: 60rpx;
		line-height: 60rpx;
		width: 80rpx;
		font-size: 32rpx;
		text-align: center;
	}

	.specs {
		position: relative;
	}

	.specs .specs-list {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		height: 30rpx;
		
	}

	.specs-lists {
		width: 650rpx;

		.specs-lists2 {
			display: flex;
			flex-direction: row;
			image {
				margin-left: 15rpx;
				margin-top: 10rpx;
			}
		}

	}


	.specs .specs-list button {
		margin-right: 10rpx;
		margin-bottom: 10rpx;
		font-size: 24rpx;
	}

	.tupian {
		width: 50rpx;
		height: 35rpx;
	}

	.specs .specs-list button:after,
	.product-popup .btns button,
	.product-popup .btns button:after {
		height: 88rpx;
		line-height: 88rpx;
		border: 0;
		border-radius: 0;
		margin-bottom: 55rpx;

	}

	.product-popup .btns .confirm-btn {
		width: 710rpx;
		height: 80rpx;
		@include background_linearmore('cart_right1', 'cart_right2', 'right_deg', 0%, 100%);
		border-radius: 40rpx;
		margin: 0 20rpx;
		margin-bottom: 55rpx;
		color: #FFFFFF;
		line-height: 80rpx;
		font-size: 32rpx;
		background-color: #24A3FF;
	}

	.btn-checked {
		border: 0rpx solid #24A3FF;
		background-color: #96ccf3;
		border-radius: 6px;
		font-size: 26rpx;
		padding: 0 25rpx;
		height: 60rpx;
		line-height: 60rpx;
	}

	.btn-checke {
		border: 1rpx solid #D9D9D9;
		border-radius: 6rpx;
		font-size: 26rpx;
		color: #333333;
		background-color: #FFFFFF;
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 6px;
		padding: 0 25rpx;
	}

	.tan1 {
		.tanchuang {
			height: 50%;
			// border-style: 1rpx solid;
			.shuju {

				//居中
				text-align: center;
				font-size: 25rpx;
				margin: 20rpx 0;
				height: 50rpx;
				line-height: 50rpx;
				font-weight: 700;
				font-size: 30rpx;
			}

			.shouqi {
				display: flex;
				justify-content: space-around;
			}

			.daoqi {
				margin: 0 30rpx;
			}

			.zuqi {
				margin: 0 30rpx;
				font-weight: 700;
				font-size: 30rpx;
			}
		}
	}


	.tan2 {
		.tanchuang2 {
		
			height: 800rpx;
			
			.shuju {
				//居中
				text-align: center;
				font-size: 25rpx;
				margin: 20rpx 0;
				// height: 100rpx;
				// line-height: 50rpx;
				// font-weight: 700;
				font-size: 30rpx;
			}

			.shouqi {
				border: 1rpx black;
				display: flex;
				justify-content: space-around;

			}

			.daoqi {
				margin: 0 30rpx;
			}

			.zuqi {
				margin: 0 30rpx;
				font-weight: 700;
				font-size: 30rpx;
			}

			.maiduan1 {
				display: flex;
				flex-direction: row;
				margin: 0 30rpx;
				border-style: 1rpx solid;

				.title {
					width: 20%;
					font-size: 25rpx;
					// text-align: center;
					display: flex;
					align-items: center;
					background-color: #D9D9D9;
				}

				.hesgi {
					width: 80%;
					// margin: 0 50rpx;
					border: 1rpx solid black;

					.maiduanjin {
						font-weight: 500;
						font-size: 27rpx
					}
				}
			}
		}
	}


	.dade {
		width: 300rpx;
		height: 45rpx;
		line-height: 50rpx;
		display: flex;
		justify-content: space-around;
		border: 1rpx red solid;
		font-size: 20rpx;
		color: red;
	}


	.sda {
		width: 85%;
		font-size: 30rpx;
		font-weight: bold
	}

	.qian {
		font-size: 40rpx;
		color: red;
	}

	.tian {
		color: red;
	}

	.select_spec {
		width: 85%;
		height: 50rpx;
		word-break: break-all;
	}
	.kongge{
		height: 10rpx;
	}
	.sanshi{
		height: 30rpx;
	}
</style>
