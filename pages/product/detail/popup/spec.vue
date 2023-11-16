<template>
	<view :class="Visible?'product-popup open':'product-popup close'" @touchmove.stop.prevent="" @click="closePopup">
		<view class="popup-bg"></view>
		<view class="main" v-on:click.stop>
			<view class="header" @closeable=true>
				<!-- <view class="sda">{{product_name}}</view> -->
				<image :src="form.show_sku.sku_image" mode="aspectFit" class="avt"></image>
				<view class="kongge"></view>
				<view class="price">

					<text class="qian">¥{{form.show_sku.product_price}}</text><text class="tian">/天</text>

					<!-- 	<text class="old-price" v-if="form.show_sku.line_price!=null">¥{{form.show_sku.line_price}}</text> -->
				</view>
				<!-- <view class="kongge"></view> -->
				<view class="select_spec">{{ selectSpec }}</view>
				<!-- <view class="stock">
					库存：{{form.show_sku.stock_num}}
				</view> -->

				<!-- <view class="close-btn" @click="closePopup">
					<text class="icon iconfont icon-guanbi"></text>
				</view> -->

			</view>
			<view class="xian" style="margin-bottom: 10rpx;">
				<view class="hah">
					<view class="xing">
						<view class="yuandata">￥{{form.show_sku.produnt_period?form.show_sku.produnt_period:'0'}}元
						</view>
						<view class="wenzidata">月租金</view>
					</view>
					<view class="xing1">
						<!-- <view>￥{{form.show_sku.product_price *10000*365/10000+365}}元</view> -->
						<view class="yuandata">￥{{form.show_sku.line_price}}元</view>
						<view class="wenzidata">总租金</view>
					</view>
					<view class="xing2">
						<view class="yuandata">￥{{ is ? '0' : buy_out_price}}元</view>
						<view class="wenzidata">买断价</view>
					</view>

				</view>
			</view>

			<view class="body">
				<!--规格-->
				<view>
					<!-- style="height: 400rpx;margin-bottom: 50rpx;"  -->
					<!-- mt20 -->
					<!-- scroll-y="true" -->
					<scroll-view class="specs" v-if="form.specData !=null">
						<view class="specs" v-for="(item_attr,attr_index) in form.specData.spec_attr" v-show="attr_index<6"
							style="display: flex;justify-content: flex-start;align-items: center;" :key="attr_index">
							<!-- p-20-0 -->
							<view class="specs-hd">
								<view class="title" >
									{{item_attr.group_name}}
								</view>
								<!-- <text class="ml10 red" v-if="form.productSpecArr[attr_index]==null">
								请选择{{item_attr.group_name}}
							</text> -->
								<!-- <text v-if="item_attr.group_name=='保障服务'"style="border: 1rpx red solid;font-size: 20rpx;color: red; margin-left: 50rpx;">
								碎屏无需保障，加购更安心
							</text> -->
							</view>
							<!-- class="specs-list" -->

							<view v-if="item_attr.group_name=='保障服务'">
								<view class="_strong">
									<view class='specs-lists'>
										<view v-for="(item,item_index) in item_attr.spec_items" :key="item_index"
											class="specs-lists2">
											<!-- <view v-if="item.spec_value=='碎屏换新￥365'" -->
											<view v-if="item.spec_value=='碎屏换新￥365'"
												style="display: flex;">
												<button :class="item.checked ? 'btn-checked' : 'btn-checke'" @click="selectAttr(attr_index, item_index,item)">
													{{item.spec_value}}
												</button>

												<image src="../../../../static/hha/wenhao.png" @click="tpdj2()"
													class="tupian">
												</image>
												<view>
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>

							<view v-else-if="item_attr.group_name=='套餐'">
								<view class="_strong">
									<view class='specs-lists'>
										<view v-for="(item,item_index) in item_attr.spec_items" :key="item_index"
											class="specs-lists2">
											<view v-if="ddshow==0 || item.spec_value=='租完买断'"
												style="display: flex;">
												<button :class="item.checked ? 'btn-checked' : 'btn-checke'" @click="selectAttr(attr_index, item_index,item)">
													{{item.spec_value}}
												</button>

												<image src="../../../../static/hha/wenhao.png" @click="tpdj(item)"
													class="tupian">
												</image>
											</view>
										</view>
									</view>
								</view>
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

						<!--选择数量-->
						<!-- style="margin-top: 35rpx;" -->
						<view class="level-box count_choose">
							<text class="key">数量</text>
							<!-- <text class="kucun">库存{{form.show_sku.stock_num}}</text> -->
							<view class="d-s-c">
								<view class="icon-box minus d-c-c" @click="sub()" :class="{'num-wrap':!issub}">
									<text class="icon iconfont icon-jian"
										style="font-size: 20rpx;color: #333333;"></text>
								</view>
								<view class="text-wrap">
									<input type="text" v-model="form.show_sku.sum" value="" />
								</view>
								<view class="icon-box plus d-c-c" :class="{'num-wrap':!isadd}" @click="add()">
									<text class="icon iconfont icon-jia"
										style="font-size: 20rpx;color: #333333;"></text>
								</view>
							</view>
						</view>
						<!-- <text class="inventory">库存 : {{form.show_sku.stock_num}}</text> -->


						<!--租完即送弹窗-->
						<view class="tan1">
							<u-popup :show="show1" @close="close1" closeable=true>
								<view class="tanchuang">
									<view class="shuju">租用说明</view>
									<view class="zuqi">租期租金</view>
									<view>
										<view class="shouqi">首期
											<view class="">
												￥{{form.show_sku.produnt_period?form.show_sku.produnt_period:'0'}}/月
											</view>
										</view>
										<view class="shouqi">剩余{{qishu}}期
											<view class="">
												￥{{form.show_sku.produnt_period?form.show_sku.produnt_period:'0'}}/月
											</view>
										</view>
									</view>
									<view class="zuqi">到期方案</view>
									<view class="daoqi">租赁到期后，商品将直接赠送给您，无需另外支付费用。</view>
									<view class="daoqi">租完即送的买断价格:总租金-已付租金-未付租金的期数(必须大于2期)*100</view>
									<view class="zuqi">滞纳金说明</view>
									<view class="daoqi">如您未能按期、足额支付本协议约定的款项 (包括但不限于租金、服务费、买断价、赔偿金)，
										自逾期之日起，您应按照10元/天向xxx支付滞纳金。本协议项下。
										滞纳金收取上限不超过租赁总费用与到期买断价之和的12%。</view>
								</view>
							</u-popup>
						</view>

						<!--租完买断弹窗-->
						<view class="tan2">
							<u-popup :show="show2" @close="close2" closeable=true>
								<scroll-view scroll-y=true style="height: 600rpx;" >
								<view class="tanchuang2">
									<view class="shuju">租用说明</view>
									<view class="zuqi" style="margin-bottom: 30rpx;">租期租金</view>
									<view style="margin-bottom: 30rpx;">
										<view style="border: 1rpx solid;display: flex;margin: 0 30rpx;">
											<view
												style="width: 20%;text-align: center;border-right: 1rpx solid #333333; background-color: #D9D9D9;">
												首期</view>
											<view style="text-align: center; width: 80%;">
												￥{{form.show_sku.produnt_period?form.show_sku.produnt_period:'0'}}/月
											</view>
										</view>
										<view style="border: 1rpx solid;display: flex;margin: 0 30rpx;">
											<view
												style="width: 20%;text-align: center;border-right: 1rpx solid #333333; background-color: #D9D9D9;">
												剩余{{qishu}}期</view>
											<view style="text-align: center; width: 80%;">{{prices}}/月</view>
										</view>
									</view>
									<view class="zuqi" style="margin-bottom: 30rpx;">租满可选</view>
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
										自逾期之日起，您应按照10元/天向xxx支付滞纳金。本协议项下。
										滞纳金收取上限不超过租赁总费用与到期买断价之和的12%。</view>
								</view>
								</scroll-view>
							</u-popup>
						</view>

						<!--碎屏弹窗-->
							<u-popup :show="show3" @close="close3" closeable=true>
								<view class="tan3">
									<view class="title">
										碎屏换新简介
									</view>
								<scroll-view scroll-y=true style="height: 500rpx;" >
									<view class="content">
										<view class="contitle">
											(因意外产品的碎屏，可免费更换碎屏一次)
										</view>
										<view class="contitle">
											一、碎屏服务指:协议期间设备发生非人为原因(经甲方鉴定)造成的意外损坏，符合碎屏服务理赔范围，由甲方提供一次更换屏幕的保障服务。
										</view>

										<view class="contitle">
											二、本条款仅适用于乙方通过本协议租赁的在租期内的租赁设备，有效期12个月，若租赁合同提前结束，则保险服务立即终止。
										</view>

										<view class="contitle">
											三、支付方式与碎屏服务约定
										</view>
										1、根据设备型号及配置，乙方需向甲方支付相应碎屏服务费，在乙方签署租赁协议的同时一次性支付。产品维修时产生的快递费谁寄谁付运费原则。 <br />
										2、退租时或者碎屏服务到期时，无论碎屏服务是否启动，该碎屏服务费均不予退还。 <br />
										3、维修使用备件为原件或等同原装质量。 <br />

										<view class="contitle">
											四、碎屏维修范围及实施:
										</view>
										1、协议内，设备经甲方工程师检测确认后属于非人为原因造成的产品碎屏，可申请启动碎屏保障服务(平台服务专线:xxx)由甲方负责维修，维修完成后将设备寄送还给乙方。
										<br />
										2、甲乙双方约定该碎屏服务在协议期间仅享受一次免费修理，修理完成后，视为本次碎屏服务结束乙方若需要续保，则须重新向甲方购买该服务。 <br />
										3、保障服务范围:因意外产生的碎屏，可免费维修。 <br />

										<view class="contitle">
											五、免责条款:
										</view>
										1、主板损坏变形导致不开机的碎屏，进液导致的爆屏，边框变形的碎屏，设备除屏慕外其他部位出现故障(如:进水，边框，后盖，排线，主板，指纹识别键等)。不属于本协议保修范围。
										<br />
										2、我公司对维修产品因维修而导致的任何信息或数据丢失不负责。 <br />
										3、我们对任何间接损失附带损失，包括但不限于产品造成投保人、被保险人或其他任何个人、法人或其他组织的人身伤害、精神损害:无法使用导致业务损失，利润损失，数据遗失，信息丢失，误工费等，不承担任何形式的间接损失与责任。
										<br />
										4 、然灾害形成不可抗力导致产品损坏。 <br />

										<view class="contitle">
											六、友情提示
										</view>
										1、维修之前请做好产品数据备份。 <br />
										2、如有不明白之处请拨打平台服务专线xxx咨询。 <br />
									</view>
								</scroll-view>
								</view>
							</u-popup>

						<view class="btns">
							<button class="confirm-btn" @click="confirmFunc(form)">确认</button>
						</view>

					</scroll-view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 选择期数
				periods:'',
				ContinueClicking: false,
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
				show3: false,
				maiduan: "",
				panduan: "",
				produnt_period: 0,
				zuwanjisong: 1,
				prices:'',
				qishu:''
			}

		},
		props: ['isPopup', 'productModel', 'ddshow', 'product_name', 'zmshow'],
		onLoad() {
			
		},
		mounted() {
			this.maiduan = this.form.show_sku.buy_out_price;
			// console.log("md",this.maiduan);
			// console.log('form',this.form);
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
						// console.log(this.form.specData.spec_attr[5],'thi.form')
						this.form.specData.spec_attr = this.form.specData.spec_attr.map((item, itemIndex) => {
							const {
								spec_items
							} = item
							return {
								...item,
								spec_items: spec_items.map((specItem, index) => {
									// 不隐藏
										if (index == 0) {
											this.form.productSpecArr[itemIndex] = specItem.item_id;
										}
									// 隐藏时
									// if (item.group_name == '套餐') {
									// 	if (index == 1) {
									// 		this.form.productSpecArr[itemIndex] = specItem.item_id;
									// 		return {
									// 			...specItem,
									// 			checked: index === 1,
									// 		}
									// 	}
									// } else {
									// 	if (index == 0) {
									// 		this.form.productSpecArr[itemIndex] = specItem.item_id;
									// 	}
									// }
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
			// 'isPopup': function(n, o) {
			// 	if (n != o) {
			// 		this.Visible = n;
			// 		if (!this.isOpenSpec) {
			// 			this.form = this.productModel;
			// 			this.isOpenSpec = true;
			// 			this.initShowSku();
			// 		}
			// 		this.form.type = this.productModel.type;
			// 	}
			// },
			'form.specData': {
				handler(n, o) {
					let str = '',
						select = '';
					this.isAll = true;
					if (n) {
						for (let i = 0; i < n.spec_attr.length; i++) {
							let xing = n.spec_attr[i]
							// console.log("///", xing)
							// console.log(this.form.productSpecArr[i], '--')
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
			
			// gaib(){
			// 	this.$nextTick(()=>{
			// 	 console.log( this.form.specData.spec_attr,741)
			// 	 this.form.specData.spec_attr.forEach(item=>{
					 
			// 	 })
			// 	})
			// },
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
								// console.log("失败")
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
							// console.log("成功");

						},
						fail: (res) => {
							// console.log("失败")
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
							// console.log("取消授权")
						} else {
							// console.log("重新授权")
						}
					}
				})
			},
			//弹窗
			tpdj(id) {
				// console.log(id, '打印看看')
				if (id.spec_value == '租完即送') {
					this.show1 = true;
				} else {
					this.show2 = true;
				}
			},
			tpdj2() {
				this.show3 = true;
			},
			close1() {
				this.show1 = false;
			},
			close2() {
				this.show2 = false;
			},
			close3() {
				this.show3 = false;
			},

			/*初始化*/
			initShowSku() {
				// console.log(this.form.detail,"this.form.detail",this.form.show_sku);
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
				if(attr_index===5){
					self.periods = item_index
				}
				// 选中了的规格
				let items = self.form.specData.spec_attr[attr_index].spec_items;
				// console.log(items[item_index].spec_value,'times')
				let asd = self.form.specData.spec_attr;
				// console.log("items",attr_index,item_index,items);
				for (let i = 0; i < asd.length; i++) {
					let ite = asd[i];
					// console.log("看看ite.spec_items", ite.spec_items)
					// console.log("第一个", ite.spec_items[0].spec_value)
					let diyige = ite.spec_items[0].spec_value
					// console.log("再看看第一个", diyige)
					// for(let j=0;j < ite.spec_items;j++){
					// 	let kan =ite.spec_items[j]
					// 	console.log("再看看",kan)
					// }
				}
				let curItem = items[item_index];
				this.panduan = item;
				// console.log("panduan", this.panduan);
				// console.log("打印看看", this.panduan);
				// if(this.panduan.item_id == "1"){
				// 	this.buy_out_price = 0.00;
				// 	console.log(111);
				// }else{
				// 	this.buy_out_price = self.buy_out_price;
				// 	console.log(222)
				// }
				
				if (item.spec_value === '租完即送') {
					this.zuwanjisong = 1
				}

				if (item.spec_value === '租完买断') {
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
					console.log(curItem.item_id,89899)
					self.form.productSpecArr[attr_index] = curItem.item_id;//选中的sku
				}
				for (let k = 0; k < self.form.specData.spec_attr.length; k++) {
					let suiping = self.form.specData.spec_attr[k];
					if (self.form.specData.spec_attr[k].group_name == '保障服务') {
						if (self.form.productSpecArr[k] == null) {
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
				self.updateSpecProduct(attr_index,item_index,item);
			},


			/*更新商品规格信息*/
			updateSpecProduct(value,index,item) {
				let self = this;
				let specSkuId = self.form.productSpecArr.join('_');
				self.ContinueClicking = true;
				// 查找skuItem
				// console.log(self.form.specData.spec_list, 'self.form.specData.spec_list')
				let spec_list = self.form.specData.spec_list,
					skuItem = spec_list.find((val) => {
						self.form.show_sku.product_sku_id = specSkuId;
						return val.spec_sku_id == specSkuId + '_2';
					});
				// console.log(spec_list, 'spec_list')
				// 记录product_sku_id
				// 更新商品价格、划线价、库存
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
				self.prices = self.form.show_sku.produnt_period
				self.qishu = item.spec_value-1
				// if(num=='447'){
				// 	self.qishu = '十一'
				// }else if(num=='448'){
				// 	self.qishu = '八'
				// }else if(num=='449'){
				// 	self.qishu = '五'
				// }else if(num=='450'){
				// 	self.qishu = '二'
				// }
			},

			/*关闭弹窗*/
			closePopup() {
				this.$emit('close', this.form.specData, null);
			},

			/*确认提交*/
			confirmFunc() {
				// this.guige
				uni.$on('qiShu1',function(){
					uni.$emit('qiShu',{val:12})
				});
				if (this.ContinueClicking == false) {
					uni.showToast({
						title: "请选择完整的规格",
						duration: 2000
					});
					return
				}
				this.createdOrder();
				
				// 获取下单地址
				
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
				console.log(this.form.specData,'form')
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
				if (product_id == '') {
					uni.showToast({
						title: '产品ID不存在',
						icon: 'none',
						duration: 2000
					});
				}
				let product_num = this.form.show_sku.sum;
				if (product_num == '') {
					uni.showToast({
						title: '产品数量不存在',
						icon: 'none',
						duration: 2000
					});
				}
				let product_sku_id = this.form.show_sku.product_sku_id + "_" + this.zuwanjisong;
				if (product_sku_id == '') {
					uni.showToast({
						title: '规格不存在',
						icon: 'none',
						duration: 2000
					});
				}
				let room_id = '';
				if (this.form.room_id) {
					room_id = '&room_id=' + this.form.room_id;
				}
				if (this.zmshow == '') {
					uni.showToast({
						title: '显示不存在',
						icon: 'none',
						duration: 2000
					});
				}
				// console.log("确认",product_id,product_num,product_sku_id,room_id);
				// uni.showToast({
				// 	title: "product_id" + product_id + "product_num" +  product_num  + "product_sku_id" + product_sku_id + room_id,
				// 	icon: 'none',
				// 	duration: 3000
				// });

				// this.gotoPage('/pages/order/confirm-order?product_id=' + product_id + '&product_num=' + product_num +
				// 	'&product_sku_id=' + product_sku_id + '&order_type=buy' + room_id + '&zmshow=' + this.zmshow);

				uni.navigateTo({
					url: "/pages/order/confirm-order?product_id=" + product_id + '&product_num=' + product_num +
						'&product_sku_id=' + product_sku_id + '&order_type=buy' + room_id + '&zmshow=' + this
						.zmshow + '&periods=' + this.periods + '&prices='+this.prices + '&qishu='+this.qishu
				})
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
	
	.wenzidata {
		font-weight: 700;
		font-size: 22rpx
	}

	.xing .xing1 .xing2 {
		font-size: 22rpx;
	}
	.yuandata{
		color: #f85959;
		font-weight: bold;
	}

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
		// height: 1000rpx;
		width: 100%;
		bottom: 0;
		background-color: #fff;
		transform: translate3d(0, 980rpx, 0);
		transition: transform .2s cubic-bezier(0, 0, .25, 1);
		box-sizing: border-box;
		border-radius: 12rpx;
		z-index: 9999;
		background-color: #FFF;

		.hah {
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 10rpx 0;

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
		height: 150rpx;
		width: 550rpx;
		padding: 40rpx 0 10rpx 250rpx;
		position: relative;
	}

	.xian {
		border-bottom: 1px solid #EEEEEE;
	}

	.product-popup .header .avt {
		position: absolute;
		top: 40rpx;
		left: 30rpx;
		width: 125rpx;
		height: 125rpx;
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
		padding: 20rpx 20rpx;
		max-height: 900rpx;
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

	.inventory {
		font-size: 24rpx;
		color: #999999;
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
		padding: 5rpx 0;
	}
	
	.specs .specs-hd{
		// width: 15%;
		.title{
			width: 125rpx;
			font-weight: 700;
			font-size: 28rpx;
			// height: 70rpx;
			// line-height: 70rpx;
		}
	}

	.specs .specs-list {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 5rpx;

	}

	.specs-lists {
		width: 650rpx;
		display: flex;
		.specs-lists2 {
			display: flex;
			
			view {
				justify-content: flex-start;
				align-items: center;
				image{
					margin: 0 10rpx;
				}
			}
		}
	}


	.specs .specs-list button {
		margin-right: 10rpx;
		margin-bottom: 10rpx;
		font-size: 28rpx;
	}

	.tupian {
		width: 40rpx;
		height: 35rpx;
	}

	.specs .specs-list button:after,
	.product-popup .btns button,
	.product-popup .btns button:after {
		height: 88rpx;
		line-height: 88rpx;
		border: 0;

	}

	.confirm-btn {
		// position: absolute;
		// bottom: 0rpx;
		// width: 710rpx;
		// @include background_linearmore('cart_right1', 'cart_right2', 'right_deg', 0%, 100%);
		width: 100%;
		height: 50rpx;
		line-height: 50rpx;
		border-radius: 40rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		background-color: #24A3FF;
	}

	.btn-checked {
		border: 1rpx solid #47A7FD;
		background-color: #D0E2FA;
		color: #0d6cd7;
		border-radius: 6px;
		font-size: 26rpx;
		padding: 0 15rpx;
		height: 50rpx;
		line-height: 50rpx;
	}

	.btn-checke {
		border: 1rpx solid #D9D9D9;
		border-radius: 6rpx;
		font-size: 26rpx;
		color: #333333;
		background-color: #FFFFFF;
		height: 50rpx;
		line-height: 50rpx;
		border-radius: 6px;
		padding: 0 15rpx;
	}

	// .tan1 {
		.tanchuang {
			// height: 50%;
			height: 600rpx;
			.shuju {
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
	// }


	.tan2 {
		.tanchuang2 {
			// height: 600rpx;

			.shuju {
				text-align: center;
				font-size: 25rpx;
				margin: 20rpx 0;
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
					display: flex;
					align-items: center;
					background-color: #D9D9D9;
				}

				.hesgi {
					width: 80%;
					border: 1rpx solid black;

					.maiduanjin {
						font-weight: 500;
						font-size: 27rpx
					}
				}
			}
		}
	}


	.tan3 {
		padding:20rpx;

		.title {
			text-align: center;
			margin: 15rpx 0;
			font-size: 36rpx;
			font-weight: 700;
		}

		.content {
			margin: 7rpx 0;

			.contitle {
				margin: 5rpx 0;
				font-size: 28rpx;
				font-weight: 700;

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
		font-size: 25rpx;
		font-weight: bold;
		line-height: 35rpx;
	}

	.qian {
		font-size: 40rpx;
		color: #f85959;
		font-weight: bold;
	}

	.tian {
		color: red;
	}

	.select_spec {
		width: 85%;
		height: 50rpx;
		word-break: break-all;
		font-size: 22rpx;
	}

	.kongge {
		height: 10rpx;
	}

	.sanshi {
		height: 30rpx;
	}
</style>
