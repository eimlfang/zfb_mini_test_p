<template>
	<view class="category-wrap"  :data-theme='theme()' :class="theme() || ''">
		<!-- #ifdef APP-PLUS -->
		<header-bar></header-bar>
		<!-- #endif -->
		<!-- 搜索框 -->
		<view class="" id="searchBox"
			:style="topBarHeight() == 0 ? '': 'height:'+topBarHeight()+'px;padding-top:'+topBarTop()+'px'">
			<view class="index-search-cate flex-1 t-c" @click="gotoSearch">
				<span class="icon iconfont icon-sousuo"></span>
				<text class="ml10">{{ searchName }}</text>
			</view>
		</view>
		<!-- <view class="kongge"></view> -->
		
		<scroll-view scroll-x=true class="dingju">
			<view :class="index==select_index?'item active2':'item'"  v-for="(item,index) in listData" :key="index"
				 @click="selectCategory(index, item)" class="lei">
				<view v-if="item.name == '电动车'"><image src="../../static/hha/fenglei/diandongce.png" :class="['fleiImage',index==select_index?'fleiImage2':'' ]"></image></view>
				<view v-if="item.name == '手机'"><image src="../../static/hha/fenglei/shouji.png" :class="['fleiImage',index==select_index?'fleiImage2':'' ]"></image></view>
				<view v-if="item.name == '耳机'"><image src="../../static/hha/fenglei/erji.png" :class="['fleiImage',index==select_index?'fleiImage2':'' ]"></image></view>
				<view v-if="item.name == '手表'"><image src="../../static/hha/fenglei/shoubiao.png":class="['fleiImage',index==select_index?'fleiImage2':'' ]"></image></view>
				<view v-if="item.name == '游戏机'"><image src="../../static/hha/fenglei/youxiji.png" :class="['fleiImage',index==select_index?'fleiImage2':'' ]"></image></view>
				<view v-if="item.name == '笔记本'"><image src="../../static/hha/fenglei/bijiben.png" :class="['fleiImage',index==select_index?'fleiImage2':'' ]"></image></view>
				<view v-if="item.name == '平板ipad'"><image src="../../static/hha/fenglei/ipad.png":class="['fleiImage',index==select_index?'fleiImage2':'' ]"></image></view>
				<view v-if="item.name == '户外摄影'"><image src="../../static/hha/fenglei/hwsy.png" :class="['fleiImage',index==select_index?'fleiImage2':'' ]"></image></view>
				
				<view class="heshi">{{item.name}}</view>
				
			</view>
		<!-- <view class="kongge"></view> -->
		</scroll-view>
		<view style="height: 30rpx;"></view>
		<!--类别列表-->
		<view class="category-content">
			<!--一级分类 大图-->
			<view class="cotegory-type cotegory-type-1" v-if="show_type==10">
				<scroll-view scroll-y="true" class="scroll-Y" :style="'height:'+scrollviewHigh+'px;'">
					<view class="list">
						<view class="item" v-for="(item,index) in listData" :key="index"
							@click="gotoList(item.category_id)">
							<view class="pic">
								<image :src="hasImages(item)" mode="widthFix"></image>
							</view>
							<view class="p-20-0 fb tc f34">
								{{item.name}}
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<!--一级分类 小图-->
			<view class="cotegory-type cotegory-type-2" v-if="show_type==20">
				<scroll-view scroll-y="true" class="scroll-Y" :style="'height:'+scrollviewHigh+'px;'">
					<view class="list">
						<view class="item" v-for="(item,index) in listData" :key="index"
							@click="gotoList(item.category_id)">
							<image :src="hasImages(item)" mode="aspectFit"></image>
							<text>{{item.name}}</text>
						</view>
					</view>
					
				</scroll-view>
			</view>
			<!--二级分类-->
		<!-- 	<view class="cotegory-type cotegory-type-3" v-if="show_type==30">
				<view class="category-tab">
					<scroll-view scroll-y="true" class="scroll-Y" :style="'height:'+scrollviewHigh+'px;'">
						<view :class="index==select_index?'item active':'item'" v-for="(item,index) in listData"
							:key="index" @click="selectCategory(index)">
							<text>{{item.name}}</text>
						</view>
					</scroll-view>
				</view>
				<view class="category-content pr">
					<scroll-view scroll-y="true" class="scroll-Y scroll-3" :style="'height:'+scrollviewHigh+'px;'">
						
						<view class="list">
							<view class="item" v-for="(item,index) in childlist" :key="index"
								@click="gotoList(item.category_id)">
								<image :src="hasImages(item)" mode="aspectFit"></image>
								<text class="type-name">{{item.name}}</text>
							</view>
						</view>
				
						
					</scroll-view>
				</view>
			</view> -->
			
			<!--二级分类（文字）-->
			<view class="cotegory-type cotegory-type-3" v-if="show_type==30">
				<view class="category-tab">
					<scroll-view scroll-y="true" class="scroll-Y"   >
						<view :class="item.category_id==select_index2?'item active':'item'" v-for="(item,index) in childlist"  
							:key="index" @click="gotoList1(item.category_id)" >
							<text>{{item.name}}</text>
						</view>
					</scroll-view>
				</view>
				<view >
					<scroll-view scroll-y="true" class="scroll-Y scroll-3" :style="'height:'+scrollviewHigh+'px;'"@scrolltolower="xiala" >
						<view class="zhende1">
						<view v-for="(xing,index) in shujulist" :key="index" @click="gotoList2(xing.product_id)" >
							<view class="zhen" v-if="xing.hide != 1">
								<image :src="xing.product_image" mode="aspectFit" class="zhaopian" ></image>
								<view class="yincang">{{xing.product_name}}</view>
								<view style="color: red; text-align: center;">￥{{xing.product_price}}/天起</view>
							</view>	
						</view>
						</view>
						
					</scroll-view>
				</view>
			</view>
			
		</view>
		<tabBar></tabBar>
		<request-loading :loadding='isloadding'></request-loading>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				image:[],
				product_image:'',
				isloadding: true,
				searchName: '搜索商品',
				/*展示方式*/
				show_type: 3,
				/*手机高度*/
				phoneHeight: 0,
				/*可滚动视图区域高度*/
				scrollviewHigh: 0,
				/*数据*/
				listData: [],
				/*子类数据*/
				childlist: [],
				shujulist:[],
				/*当前选中的分类*/
				select_index: 0,
				select_index2: 0,
				catename:'',
				product_price:'',
				product_name:'',
				page:1,
				list_rows:20,
				paixun:'all',
				select_index2:'',
				
			};
		},
		mounted() {
			this.init();
			this.getData();
			this.gotoList1();
		},
		
		methods: {
			xiala(){
			let self = this
			self.page++
			/*获取订单列表*/
			self.gotoList3();
			},
			/*初始化*/
			init() {
				let _this = this;
				uni.getSystemInfo({
					success(res) {
						_this.phoneHeight = res.windowHeight;
						// 计算组件的高度
						let view = uni.createSelectorQuery().select('#searchBox');
						view.boundingClientRect(data => {
							let h = _this.phoneHeight - data.height;
							_this.scrollviewHigh = h;
						}).exec();
					}
				});
			},

			/*判断是否有图片*/
			hasImages(e) {
				if (e.images != null && e.images.file_path != null) {
					return e.images.file_path;
				} else {
					return '';
				}
			},

			/*获取数据*/
			getData() {
				let _this = this;
				_this.isloadding = true;
				_this._get('product.category/index', {}, function(res) {
					_this.listData = res.data.list;
					_this.show_type = res.data.template.category_style;
					console.log(_this.show_type);
					if (_this.listData[0].child) {
						_this.childlist = _this.listData[0].child;
					}
					_this.catename = _this.listData[0].name;
					_this.background = res.data.background;
					_this.isloadding = false;
				});
			},
			/*选择分类*/
			selectCategory(e, item) {
				// console.log(item,'e')
				// this.gotoList1(item.category_id);
				this.page=1;
				if (this.listData[e].child) {
					this.childlist = this.listData[e].child;
					this.select_index = e;
						this.gotoList1(item.category_id);
				}
			},

			/*跳转产品列表*/
			gotoList(e) {
				let category_id = e;
				let sortType = 'all';
				let search = '';
				let sortPrice = 0;
				this.gotoPage('/pages/product/list/list?category_id=' + category_id + '&sortType=' + sortType +
					'&search=' + search +
					'&sortPrice=' + sortPrice);
			},
			gotoList1(e) {
				let self=this;
				self.shujulist=[]
				self.select_index2 = e
				self.page=1;
				console.log(self.select_index2, '----')
					self._get('/product.product/lists', {
						category_id: e,
						list_rows: self.list_rows,
						page: self.page,
						search: 0,
						sortPrice: 0,
						sortType: self.paixun,
					}, function(res) {
						// console.log("res",res)
						for(let i=0;i<res.data.list.data.length;i++){
							
							// self.shujulist.push(res.data.list.data[i])
						}
						self.shujulist = self.shujulist.concat(res.data.list.data);
						self.list_rows = res.length;
						// console.log("res",self.shujulist)
						});
				
			},
			gotoList3(e) {
					let self=this;
					// console.log("select_index2",self.select_index2)
					self._get('/product.product/lists', {
						category_id: self.select_index2,
						list_rows: self.list_rows,
						page: self.page,
						search: 0,
						sortPrice: 0,
						sortType: self.paixun,
					}, function(res) {
						// console.log("res",res)
						for(let j=0;j<res.data.list.data.length;j++){
						}
						self.shujulist = self.shujulist.concat(res.data.list.data);
						self.list_rows = res.length;
						
						});
				
			},
			
			/*2跳转产品列表*/
			gotoList2(e) {
				let url = '/pages/product/detail/detail?product_id=' + e
				uni.navigateTo({
					url:url
				});
			},

			wxGetUserInfo: function(res) {
				if (!res.detail.iv) {
					uni.showToast({
						title: "您取消了授权,登录失败",
						icon: "none"
					});
					return false;
				}
			},

			/*跳转搜索页面*/
			gotoSearch() {
				this.gotoPage('/pages/product/search/search');
			},
			/**
			 * 设置分享内容
			 */
			onShareAppMessage() {
				let self = this;
				// self.templet.share_title
				return {
					title: "吾要租机",
					path: '/pages/product/category?' + self.getShareUrlParams()
				};
			},
		}
	};
</script>

<style lang="scss">
	@import '@/common/mixin.scss';
		
	.lei{
		display: flex;
		flex-direction:column;
		justify-content:center;
		text-align: center;
		padding: 0 15rpx;
		// padding-left: 22rpx;
		// margin-left: 10rpx;
	}
	.heshi{
		font-size: 25rpx;
		margin-top: 10rpx;
		// text-align: center;
		// width: 100%;
		// padding-left: 7rpx;
	}
	.foot_ {
		height: 98rpx;
		width: 100%;
	}

	.cotegory-type {
		line-height: 40rpx;
		background: #ffffff;
	}

	.cotegory-type image {
		width: 100%;
	}

	.cotegory-type-1 .list {
		padding: 20rpx;
	}

	.cotegory-type-1 .list .item {
		margin-top: 30rpx;
	}

	.cotegory-type-1 .list .item .pic {
		border: 1px solid #e3e3e3;
		width: 710rpx;
		height: auto;
		overflow: hidden;
		border-radius: 8px;
	}

	.cotegory-type-1 .list .item image {
		width: 100%;
		height: 100%;
	}

	.cotegory-type-2 .list,
	.cotegory-type-3 .list {
		padding: 0 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	.cotegory-type-2 .list .item,
	.cotegory-type-3 .list .item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.cotegory-type-2 .list .item {
		padding: 0 16rpx;
		width: 200rpx;
		height: 300rpx;
		font-size: 28rpx;
	}

	.cotegory-type-2 .list .item image {
		width: 180rpx;
		height: 180rpx;
		margin-bottom: 20rpx;
	}

	.cotegory-type-3 {
		display: flex;
	}

	.cotegory-type-3 .category-tab {
		width: 200rpx;
		background: #FFFFFF;
		border-right: 1px solid #e3e3e3;
	}

	.cotegory-type-3 .category-tab .item {
		padding: 40rpx 0;
		font-size: 26rpx;
		text-align: center;
		color: #666666;
		font-weight: bold;
	}

	.cotegory-type-3 .category-tab .item.active {
		position: relative;
		background: #ffffff;
		color: #2f65d8;
		background-color: #F8F8F8;
	}
	.active2 {
		color: #1B4CB3;
		font-weight: bold;
	}

	.cotegory-type-3 .category-tab .item.active::after {
		position: absolute;
		content: '';
		top: 40rpx;
		bottom: 40rpx;
		left: 0;
		background-color: #2f65d8;
		width: 10rpx;
		height: 22rpx;
		margin: auto;
		@include background_linear('titleft1', 'titleft2', 180deg, 0%, 100%);
	}

	.cotegory-type-3 .category-content {
		flex: 1;
		margin: 0 20rpx;
		background: linear-gradient(180deg,  0%, rgba(86, 213, 200, 0) 30%);
	} 

	.cotegory-type-3 .list .item {
		width: 140rpx;
		height: 200rpx;
		margin-top: 40rpx;
		margin-right: 20rpx;
		font-size: 24rpx;
	}

	.cotegory-type-3 .list .item:nth-child(3n) {
		margin-right: 0;
	}

	.cotegory-type-3 .list .item image {
		width: 140rpx;
		height: 140rpx;
	}

	.cotegory-type-3 .list .item .type-name {
		display: block;
		margin-top: 20rpx;
		height: 80rpx;
		line-height: 60rpx;
		text-overflow: ellipsis;
		width: 100%;
		color: #818181;
		font-size: 26rpx;
		white-space: nowrap;
		overflow: hidden;
		text-align: center;
	}

	.scroll-3 {
		position: absolute;
		background: #ffffff;
		border-radius: 12px;
	}
	.catename{
		padding-top: 10rpx;
		line-height: 60rpx;
		border-bottom: 1rpx solid #D9D9D9;
	}
	.yang{
		width: 280rpx;
		height: 280rpx;
	}
	.category-wrap{
	}
	.dingju{
		display: flex;
		justify-content:space-between;
		align-items:center;
		margin-top: 20rpx;
		background: #ffffff;
		background-color: #F8F8F8;
		white-space: nowrap;
		width: 100%;
	}
	
	.zhen{
		width: 250rpx;
		height: 350rpx;
		background-color:  #fff;
		margin-bottom: 50rpx;
		margin-left: 20rpx;
	}
	.zhaopian{
		width: 200rpx;
		height: 250rpx;
		
	}
	.zhende1{
		display: flex;
		flex-direction:row;
		flex-wrap:wrap;
		position: relative;
		margin-top: 50rpx;
		
	}
	.yincang{
		overflow:hidden; 
		white-space:nowrap;
		text-overflow:ellipsis;
	}
	.kongge{
		height: 30rpx;
	}
	.shouji{
		width: 90rpx;
		height: 100rpx;
	}
	.erji{
		width: 100rpx;
		height: 100rpx;
	}
	.fleiImage{
		width: 80rpx;
		height: 80rpx;
	}
	
	.fleiImage2{
		border-radius: 50rpx;
		border: 1rpx solid #2B67FD;
	}
	
	
	
	
</style>
