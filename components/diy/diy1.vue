<template>
	<view>
		
		<!--精品手机-->
		<template v-if="diyItems[0].type==='banner'&&diyItems[0].data!=null">
			<banner :itemData="diyItems[0]"></banner>
			<imagesingle :itemData="diyItems[1]"></imagesingle>
			<product :itemData="diyItems[2]"></product>
			<imagesingle :itemData="diyItems[3]"></imagesingle>
			<product :itemData="diyItems[4]"></product>
			<imagesingle :itemData="diyItems[5]"></imagesingle>
			<product :itemData="diyItems[6]"></product>
			<imagesingle :itemData="diyItems[7]"></imagesingle>
			<product :itemData="diyItems[8]"></product>
			<imagesingle :itemData="diyItems[9]"></imagesingle>
			<product :itemData="diyItems[10]"></product>
			<imagesingle :itemData="diyItems[11]"></imagesingle>
			<product :itemData="diyItems[12]"></product>
		</template>
		
		<!--自定义分类-->
		<template v-if="diyItems[0].type==='product'&&diyItems[0].data!=null">
			<product :itemData="diyItems[0]"></product>
		</template>
		
		<!--自定义活动-->
		<template v-if="diyItems[0].type==='imageSingle'&&diyItems[0].data!=null">
			<imagesingle :itemData="diyItems[0]"></imagesingle>
		</template>
		
		<!--轮播图-->
		<template v-if="diyItems[1].type==='banner'&&diyItems[1].data!=null">
			<banner :itemData="diyItems[1]"></banner>
		</template>

		<!--单组图-->
		<template v-if="diyItems[2].type==='imageSingle'&&diyItems[2].data!=null">
			<imagesingle :itemData="diyItems[2]"></imagesingle>
		</template>
		
		<!-- 首页滚动通知 -->
		<view class="roll"  v-show="type != 1">
			<view class="con1">
				<span class="color1">租赁</span> <span class="color2">动态</span>  
			</view>
			<view class="con2">
			</view>
			<view class="con3">
				<u-notice-bar :text="text" icon="" bgColor="#F6F6F6" color="red"></u-notice-bar>
			</view>
		</view>
		
		<!-- 导航组-->
		<template v-if="diyItems[3].type == 'navBar'&&diyItems[3].data!=null">
			<navBar :itemData="diyItems[3]"></navBar>
		</template>

		<!--单组图-->
		<template v-if="diyItems[4].type==='imageSingle'&&diyItems[4].data!=null">
			<imagesingle :itemData="diyItems[4]"></imagesingle>
		</template>

		<!-- 手机分类 -->
		<view v-show="type != 1" class="mobilefl" style="width: 100%;height: 326rpx;margin-top: 20rpx;">
			<view style="height: 26%;display: flex; background-image:url('../../static/hha/cxbd.png');margin: 0 20rpx;border-radius: 20rpx;">
				<!--background:linear-gradient(#F7D8F7 80%,#FCEEFE 20%);  -->
				<view class="" style="width: 35%;text-align: center;line-height: 70rpx;display: flex;justify-content:center;align-items:center;font-size: 36rpx;">
					<!-- 畅销榜单 -->
				</view>
				<view style="width: 65%;display: flex;justify-content:center;align-items:center;">
					<scroll-view scroll-x class="navscroll">
						<view :class="['item',active1==index?'active':'']" v-for="(item,index) in sjlist" :key="index" @click="clickname(item.category_id,index)">
							{{item.name}}
						</view>
					</scroll-view>
				</view>
			</view>
			<view>
				
				<product1 :itemData="spfl"></product1>
			</view>
		</view>
		
		<!-- <lifestyle public-id="2021003173694240" /> -->
		<!-- <lifestyle :publicId='canUse' /> -->
		<!-- <life-follow sceneId="1c25b62d409240468e73d039eda5f040" /> -->
		<!-- <life-follow sceneId="c311cf5ae7dd4683aedf17a5b35afafd" /> -->

		<!-- 橱窗-->
		<template v-if="diyItems[5].type == 'window'&&diyItems[5].data!=null">
			<windows :itemData="diyItems[5]"></windows>
		</template>
		
			<!--单组图-->
			<template v-if="diyItems[6].type==='imageSingle'&&diyItems[6].data!=null">
				<imagesingle :itemData="diyItems[6]"></imagesingle>
			</template>

			<!--商品组-->
			<template v-if="diyItems[7].type==='product'&&diyItems[7].data!=null">
				<product :itemData="diyItems[7]"></product>
			</template>
				
			<!--单组图-->
			<template v-if="diyItems[8].type==='imageSingle'&&diyItems[8].data!=null">
				<imagesingle :itemData="diyItems[8]"></imagesingle>
			</template>

			<!--商品组-->
			<template v-if="diyItems[9].type==='product'&&diyItems[9].data!=null">
				<product :itemData="diyItems[9]"></product>
			</template>

			<!--单组图-->
			<template v-if="diyItems[10].type==='imageSingle'&&diyItems[10].data!=null">
				<imagesingle :itemData="diyItems[10]"></imagesingle>
			</template>

			<!--商品组-->
			<template v-if="diyItems[11].type==='product'&&diyItems[11].data!=null">
				<product :itemData="diyItems[11]"></product>
			</template>

			<!-- <block v-if="diyItems == ''"> -->
			<!--单组图-->
			<template v-if="diyItems[12].type==='imageSingle'&&diyItems[12].data!=null">
				<imagesingle :itemData="diyItems[12]"></imagesingle>
			</template>

			<!--商品组-->
			<template v-if="diyItems[13].type==='product'&&diyItems[13].data!=null">
				<product :itemData="diyItems[13]"></product>
			</template>

			<!--单组图-->
			<template v-if="diyItems[14].type==='imageSingle'&&diyItems[14].data!=null">
				<imagesingle :itemData="diyItems[14]"></imagesingle>
			</template>

			<!--商品组-->
			<template v-if="diyItems[15].type==='product'&&diyItems[15].data!=null">
				<product :itemData="diyItems[15]"></product>
			</template>

			<!--单组图-->
			<template v-if="diyItems[16].type==='imageSingle'&&diyItems[16].data!=null">
				<imagesingle :itemData="diyItems[16]"></imagesingle>
			</template>

			<!--商品组-->
			<template v-if="diyItems[17].type==='product'&&diyItems[17].data!=null">
				<product :itemData="diyItems[17]"></product>
			</template>
			
			<!--商品组-->
			<template v-if="diyItems[18].type==='product'&&diyItems[18].data!=null">
				<product :itemData="diyItems[18]"></product>
			</template>

			<!--单组图-->
			<!-- <template v-if="diyItems[18].type==='imageSingle'&&diyItems[18].data!=null">
				<imagesingle :itemData="diyItems[18]"></imagesingle>
			</template> -->

			<!--商品组-->
			<!-- <template v-if="diyItems[19].type==='product'&&diyItems[19].data!=null">
				<product :itemData="diyItems[19]"></product>
			</template> -->

			
			
		<!-- </block> -->


		<block v-for="(item,index) in diyItems" :key="index">

			<!--搜索框-->
			<!-- <template v-if="item.type==='search'">
				<search :itemData="item"></search>
			</template> -->

			<!--轮播图-->
			<!-- <template v-if="item.type==='banner'&&item.data!=null">
				<banner :itemData="item"></banner>
			</template> -->

			<!--单组图-->
			<!-- <template v-if="item.type==='imageSingle'&&item.data!=null">
				<imagesingle :itemData="item"></imagesingle>
			</template> -->

			<!-- 橱窗-->
			<!-- <template v-if="item.type == 'window'&&item.data!=null">
				<windows :itemData="item"></windows>
			</template> -->

			<!-- 视频组-->
			<!-- <template v-if="item.type == 'video'">
				<videos :itemData="item"></videos>
			</template> -->

			<!--文章-->
			<!-- <template v-if="item.type == 'article'&&item.data!=null">
				<articles :itemData="item"></articles>
			</template> -->

			<!--头条快报-->
			<!-- <template v-if="item.type == 'special'&&item.data!=null">
				<special :itemData="item"></special>
			</template> -->

			<!--公告组-->
			<!-- <template v-if="item.type == 'notice'">
				<notice :itemData="item"></notice>
			</template> -->

			<!--标题组-->
			<!-- <template v-if="item.type == 'title'">
				<titles :itemData="item"></titles>
			</template> -->

			<!--导航组-->
			<!-- <template v-if="item.type==='navBar'&&item.data!=null">
				<navBar :itemData="item"></navBar> -->
			<!-- <specialarea></specialarea> -->
			<!-- </template> -->

			<!--商品组-->
			<!-- <template v-if="item.type==='product'&&item.data!=null">
				<product :itemData="item"></product>
			</template> -->

			<!--优惠券-->
			<!-- <template v-if="item.type==='coupon'&&item.data!=null">
				<coupon :itemData="item"></coupon>
			</template> -->

			<!--门店-->
			<!-- <template v-if="item.type == 'store'&&item.data!=null">
				<store :itemData="item"></store>
			</template> -->

			<!--客服-->
			<!-- <template v-if="item.type == 'service'">
				<service :itemData="item"></service>
			</template> -->

			<!--富文本-->
			<!-- <template v-if="item.type==='richText'">
				<richText :itemData="item"></richText>
			</template> -->

			<!--辅助空白-->
			<!-- <template v-if="item.type == 'blank'">
				<blank :itemData="item"></blank>
			</template> -->

			<!--辅助线-->
			<!-- <template v-if="item.type == 'guide'">
				<guide :itemData="item"></guide>
			</template> -->

			<!--秒杀-->
			<!-- <template v-if="item.type == 'seckillProduct'&&item.data!=null">
				<seckillProduct :itemData="item"></seckillProduct>
			</template> -->

			<!--拼团-->
			<!-- <template v-if="item.type == 'assembleProduct'&&item.data!=null">
				<assembleProduct :itemData="item"></assembleProduct>
			</template> -->

			<!--砍价-->
			<!-- <template v-if="item.type == 'bargainProduct'&&item.data!=null">
				<bargainProduct :itemData="item"></bargainProduct>
			</template> -->

			<!--直播-->
			<!-- <template v-if="item.type == 'live'&&item.data!=null">
				<live :itemData="item"></live>
			</template> -->

		</block>
	</view>
</template>

<script>
	import search from './search/search';
	import banner from './banner/banner';
	import imagesingle from './imagesingle/imagesingle';
	import windows from './window/window';
	import videos from './videos/videos';
	import articles from './article/article';
	import special from './special/special';
	import notice from './notice/notice';
	import titles from './title/title';
	import coupon from './coupon/coupon';
	import richText from './richText/richText';
	import navBar from './navBar/navBar';
	import specialarea from './specialarea/specialarea';
	import store from './store/store';
	import service from './service/service';
	import blank from './blank/blank';
	import guide from './guide/guide';
	import product from './product/product';
	import product1 from './product/product1';
	import seckillProduct from './seckillProduct/seckillProduct';
	import assembleProduct from './assembleProduct/assembleProduct';
	import bargainProduct from './bargainProduct/bargainProduct';
	import live from './live/live';

	export default {
		components: {
			search,
			banner,
			imagesingle,
			windows,
			videos,
			articles,
			special,
			notice,
			titles,
			coupon,
			richText,
			navBar,
			store,
			service,
			blank,
			guide,
			product,
			product1,
			seckillProduct,
			assembleProduct,
			bargainProduct,
			live,
			specialarea
		},
		data() {
			return {
				sjlist: "",
				active1:0,
				select_indexdiy:60,
				page1:1,
				list_rows1:10,
				spfl:"",
				text:""
			}
		},
		methods: {
			/*获取数据*/
			getData() {
				let _this = this;
				_this._get('product.category/index', {}, function(res) {
					// _this.listData = res.data.list;
					// console.log('res.data.list', res.data.list[0].child);
					_this.sjlist = res.data.list[0].child

				});
			},
			getIndexdata(){
				let self = this;
				self._get('index/index', {
				}, function(res) {
					console.log(res,'index')
					// console.log("getIndexdata",res.data.setting.store.trends);
					self.text = res.data.setting.store.trends;
				});
			},
			clickname(item,index){
				console.log(item,index);
				this.active1 = index;
				let self=this;
				self.select_indexdiy = item;
					self._get('/product.product/lists', {
						category_id: item,
						list_rows: self.list_rows,
						page: self.page1,
						search: 0,
						sortPrice: 0,
						sortType: 'all',
					}, function(res) {
						// console.log("-------------------------",res.data.list)
						self.spfl = res.data.list;
						// console.log("-------------------------",self.spfl)
						});
			},
			clickname1(){
				let self=this;
					self._get('/product.product/lists', {
						category_id: 60,
						list_rows: 10,
						page: 1,
						search: 0,
						sortPrice: 0,
						sortType: 'all',
					}, function(res) {
						// console.log("-------------------------",res.data.list)
						self.spfl = res.data.list;
						// console.log("-------------------------",self.spfl)
						});
			}
		},
		props: ['diyItems','type'],
		created() {
			uni.$on('updatebg', function(data) {
				// console.log("走了updatebg111",data);
				// this.updatebgcl = data;
				uni.$emit('updatebg2', data);
			})
			// console.log(diyItems[0].type==='product'&&diyItems[0].data!=null);
			// console.log(this.diyItems[0],"测试");

			/*获取数据*/
			this.getData()
			this.getIndexdata()
			this.clickname1()

		}
	}
</script>

<style lang="scss" scoped>
	
	.roll{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20rpx;
		.con1{
			font-weight: 700;font-size: 30rpx;width: 20%;
			.color1{
				color: #4D505A;
			}
			.color2{
				color: #F3AD4E;
			}
		}
		.con2{
			margin:0 10rpx;
			background-color: #D9D9D9;
			width: 1rpx;
			height: 40rpx;
		}
		.con3{
			width: 70%;
		}
	}
	
	.navscroll {
		white-space: nowrap; // 设置内容不换行
		// height: 70rpx; // 设置滑动栏的高度

		// 通过渗透来消除状态栏下方的下划线
		/deep/ ::-webkit-scrollbar {
			width: 4px !important;
			height: 1px !important;
			overflow: auto !important;
			background: transparent !important;
			-webkit-appearance: auto !important;
			
		}

		.item {
			font-size: 25rpx; // 设置字体大小
			display: inline-block; // 设置为行内块
			line-height:68rpx; // 设置行高
			padding: 0 30rpx; // 设置外边距
			color: #333; // 设置颜色
			font-weight: 700;
			text-align: center;
		}
		.active{
			border-bottom:#FD2F2F 1rpx solid;
		}
	}
</style>
