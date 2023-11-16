<template>
	<view class="diy-window" :style="{ background: itemData.style.background, padding: itemData.style.paddingTop + 'px ' + itemData.style.paddingLeft + 'px', 'margin-top':jldb }">
		<view class="data-list" v-if="itemData.style.layout > -1" :class="'column__' + itemData.style.layout">
			<view class="item" :key="index" v-for="(item, index) in itemData.data"  @click="gotoPages(item)">
				<view class="item-image" :style="{ padding: itemData.style.paddingTop + 'px ' + itemData.style.paddingLeft + 'px' }">
					<image :src="item.imgUrl" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<view class="display" v-else :style="{ padding: itemData.style.paddingTop + 'px ' + itemData.style.paddingLeft + 'px' }">
			<view class="img-box-wrap-1">
			<!-- 	<view class="img-box" @click="gotoPages(itemData.data[0])">
					<image :src="itemData.data[0].imgUrl" mode="aspectFill"></image>
				</view> -->
				<view class="img-box">
				<swiper class="swiper1" :autoplay="autoplay" :interval="interval" :duration="duration" @change="changeSwiper">
					<swiper-item v-for="(item,index) in UrlData" :key="index" >
						<image @click="gotoPages(item)" :src="item.imgUrl"></image>
					</swiper-item>
				</swiper>
				<view class="swiper-dots ww100 d-c-c">
					<view :class="current==index?'swiper-dot active':'swiper-dot'" v-for="(item,index) in UrlData">
					</view>
				</view>
				</view>
			</view>
			
			<view style="width: 50%;height: 360rpx;border-radius: 18rpx;margin-left: 12rpx;">
				<view class="" style="display: flex;flex-direction: column;height: 100%;">
					
						<view @click="gotoPages(itemData.data[2])" style="height: 49%;width: 100%;">
							<image style="border-radius: 18rpx;" :src="itemData.data[2].imgUrl"></image>
						</view>
						<view @click="gotoPages(itemData.data[3])" style="height: 50%;width: 100%;margin-top: 2%;">
							<image style="border-radius: 18rpx;" :src="itemData.data[3].imgUrl"></image>
						</view>
				</view>
			</view>
		<!-- 	<view class="percent-w50 d-s-c d-c" >
					<view class="img-box-wrap-2" v-if="itemData.data.length >= 2">
						<view class="img-box" @click="gotoPages(itemData.data[2])">
							<image :src="itemData.data[2].imgUrl" mode="aspectFill"></image>
						</view>
					</view>
					<view class="img-box-wrap-2" v-if="itemData.data.length >= 2">
						<view class="img-box" @click="gotoPages(itemData.data[3])">
							<image :src="itemData.data[3].imgUrl" mode="aspectFill" class="righttp"></image>
						</view>
					</view>
					
					<view class="d-s-c img-box-wrap-3">		
						<view class="img-box-wrap-4" v-if="itemData.data.length >= 3">
							<view class="img-box" @click="gotoPages(itemData.data[3])">
								<image :src="itemData.data[3].imgUrl" mode="aspectFill"></image>
							</view>
						</view>
						
						<view class="img-box-wrap-4" v-if="itemData.data.length >= 4">
							<view class="img-box" @click="gotoPages(itemData.data[3])">
								<image :src="itemData.data[3].imgUrl" mode="aspectFill"></image>
							</view>
						</view>
					</view>
			</view> -->
		</view>
	</view>
</template>

<script>
import config from '@/config.js'
export default {
	data() {
		return {
			UrlData:"",
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			indicatorActiveColor: '#ffffff',
			background:'#ffffff',
			current: 0,
			jldb:'80',
			bottom:'0'
		};
	},
	props: ['itemData'],
	methods: {
		/*跳转页面*/
		gotoPages(e){
			this.gotoPage(e.linkUrl);
		},
		changeSwiper(e) {
			this.current = e.detail.current;
			var i = e.detail.current;
			var background = this.itemData.data[i].background;
			this.background = background;
		},
	},
	created() {
		console.log(this.itemData,888)
		// if(config.app_url == 'https://kuaizujie.rchz.top/'){
		if(true){
			this.jldb = 10
			this.bottom = 80
		}
		this.UrlData = this.itemData.data.slice(0,2);
		// console.log("this.UrlData",this.UrlData);
	}
};
</script>

<style>
	.righttp{
		height: 190rpx;
	}
	.swiper1 {
		width: 97%;
	}
	.swiper1 swiper-item image{
		height: 360rpx;
	}
	.swiper-dots {
		position: absolute;
		bottom: 40rpx;
		left: 0;
		right: 0;
		margin: auto;
	}
	
	.swiper-dots {
		position: absolute;
		bottom: 20rpx;
		left: 0;
		right: 0;
		margin: auto;
	}
	
	.swiper-dot {
		width: 14rpx;
		height: 14rpx;
		margin: 0 4rpx;
		background: #ebedf0;
		opacity: 0.3;
	}
	
	.swiper-dot {
		width: 22rpx;
		height: 22rpx;
		margin: 0 4rpx;
		background: #ebedf0;
		opacity: 0.3;
		border-radius: 50%;
	}
	
	.swiper-dot {
		width: 40rpx;
		height: 6rpx;
		margin: 0 4rpx;
		background: #ebedf0;
		opacity: 0.3;
		border-radius: 4rpx;
	}
	
	.swiper-dot.active,
	.swiper-dots.square .swiper-dot.active,
	.swiper-dots.rectangle .swiper-dot.active {
		opacity: 1;
	}
	
.diy-window{
	margin: 20rpx;
	border-radius: 20rpx;
	overflow: hidden;
	box-shadow: 0 0 8rpx rgba(0, 0, 0, 0.1);
}

.diy-window .data-list {
	display: flex;
	flex-wrap: wrap;
}

.diy-window image{
	width: 100%;
	height: 100%;
}
.diy-window .data-list.column__2 .item {
	width: 50%;
}
.diy-window .data-list.column__3 .item {
	width: 33.333333333333%;
}
.diy-window .data-list.column__4 .item {
	width: 25%;
}
.diy-window .data-list.column__2 .item {
	position: relative;
	padding-top: 50%;
}
.diy-window .data-list.column__3 .item {
	position: relative;
	padding-top: 33.3333333%;
}
.diy-window .data-list.column__4 .item {
	position: relative;
	padding-top: 25%;
}
.diy-window .data-list .item .item-image,
.diy-window .display .img-box {
	position: absolute;
	box-sizing: border-box;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	
}

.diy-window .display {
	display: flex;
}
.diy-window .display .img-box-wrap-1 {
	position: relative;
	width: 50%;
	padding-top: 50%;
}
.diy-window .display .img-box-wrap-2 {
	position: relative;
	/* width: 100%; */
	width: 100%;
	height: 50%;
}

.diy-window .display .percent-w50 {
	box-sizing: border-box;
	width: 50%;
}
.diy-window .display .percent-w50 {
	box-sizing: border-box;
	width: 50%;
}
.diy-window .display .img-box-wrap-3 {
	/* width: 100%; */
	width: 100%;
	height: 50%;
}
.diy-window .display .img-box-wrap-4 {
	position: relative;
	width: 100%;
	height: 100%;
}
</style>
