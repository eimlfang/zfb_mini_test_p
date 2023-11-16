<template>
	<view class="page">
		<view class="content" v-for="data in list" @click="Jump(data.id)">
			<view class="left">
				<view >{{data.title}}</view> 
				<view class="fuhao">></view>
			</view>
			<view class="right">
				<image src="../../static/tb/jinru.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		methods: {
			Jump(data){
			uni.navigateTo({
				url:"/pages/hetong/htdetail?id=" + data
			})
			return
			if(data==12){
				uni.navigateTo({
					url:"/pages/xieyi/yonghu"
				})
			}
			if(data==10){
				uni.navigateTo({
					url:"/pages/xieyi/mayi"
				})
			}
			if(data==9){
				uni.navigateTo({
					url:"/pages/xieyi/shouquan"
				})
			}
			if(data==8){
				uni.navigateTo({
					url:"/pages/xieyi/zulin"
				})
			}
			if(data==7){
				uni.navigateTo({
					url:"/pages/xieyi/zhongcai"
				})
			}
			if(data==6){
				uni.navigateTo({
					url:"/pages/xieyi/weituo"
				})
			}
			if(data==5){ 
				uni.navigateTo({
					url:"/pages/xieyi/geren" 
				})
			}
			if(data==4){
				uni.navigateTo({
					url:"/pages/xieyi/mingan" 
				})
			}
			if(data==3){
				uni.navigateTo({
					url:"/pages/xieyi/xinxi"  
				})
			}
			if(data==1){
				uni.navigateTo({
					url:"/pages/xieyi/songda"   
				})
			}
			if(data==15){
				uni.navigateTo({
					url:"/pages/xieyi/yonghushouquan"  
				})
			}
			if(data==14){
				uni.navigateTo({
					url:"/pages/xieyi/gerenxinyong"  
				})
			}
			if(data==13){
				uni.navigateTo({
					url:"/pages/xieyi/danbao"  
				})
			}
			
				
			},
			zlht(){
				let self = this;
				self._post('agreement.agreement/index', {
					page:1,
					list_rows:20
				}, function(res) {
					// console.log("1111",res.data.list.data);
					self.list = res.data.list.data;
					// console.log(self.list);
				});
			}
		},
		onLoad() {
			this.zlht()
		}
	}
</script>

<style lang="less">
	.page{
		background-color: #f1f4f6;
		padding:30rpx;
		// background-color: #FFFFFF;
		
	}
	.content{
		// display: flex;
		// justify-content: space-between;
		margin: 10rpx 0;
		.left{
			font-size: 32rpx;
			display: flex;
			flex-direction:row;
			justify-content: space-between;
			// background-color: white;
			.fuhao{
				font-weight:50;
			}
		}
		.right{
			image{
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
	
</style>
