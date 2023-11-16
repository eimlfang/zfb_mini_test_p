<template>
	<view>
		<!--图标入口-->
		<view class="diy-navbar" :style="{background:itemData.style.background}">
			<view :class="['item',bor ?'bors':'']" v-for="(item, index) in itemData.data" :key="index" :style="'width:'+item_width+';'" @click="gotoDetail(item)">
				<image :src="item.imgUrl" mode="widthFix"></image>
				<text class="gray3" :style="{color:item.color}">{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import config from '@/config.js'
	export default {
		data() {
			return {
				//单个宽度
				item_width: '25%',
				bor:false
			}
		},
		props: ['itemData'],
		created() {
			if(config.app_url == 'https://kuaizujie.rchz.top/'){
				this.bor = true
			}
			this.item_width = 100 / Math.abs(this.itemData.style.rowsNum) + '%';
			// console.log("itemData------------------>",this.itemData);
		},
		methods: {
			/*跳转页面*/
			gotoDetail(e) {
				console.log(e.linkUrl,"console.log(e.linkUrl);");
				 this.gotoPage(e.linkUrl);
			}
		}
	}
</script>

<style>
	
	.diy-navbar {
		margin: 20rpx;
		padding: 20rpx 0;
		border-radius: 6rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.diy-navbar .item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 20rpx;
		width: 120rpx;
		height: 140rpx;
	}

	.diy-navbar .item image {
		width: 100rpx;
		height: 80rpx;
	}

	.diy-navbar .item text {
		display: block;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
		overflow: hidden;
		line-height: 66rpx;
		font-size: 26rpx;
		text-align: center;
	}
	.bors{
		border-radius: 50% !important;
	}
</style>
