<template>
	<view>
		<view class="content" :style="{height: windowHeight + 'rpx' }" @click="gourl()">
			<!-- <img v-if="baseurl=='https://jiuaizuji.rchz.top/'" :src=" baseurl + '/image/kefu/bnmy.jpg'" alt=""> -->
			<img :src=" baseurl + '/image/kefu/bnmy.jpg'" alt="">
		</view>
	</view>
</template>

<script>
	import baseurl from "@/config.js"
	export default {
		data() {
			return {
				windowHeight:"",
				baseurl:""
			}
		},
		methods: {
			gourl(){
				uni.navigateTo({
					url:"/pages/product/detail/detail?product_id=280"
				})
			}
		},
		onLoad() {
			let self = this;
			uni.getSystemInfo({
				success(res) {
					console.log(res.windowHeight);
					self.windowHeight = (res.windowHeight * 2) + 60;
				}
			})
			console.log(baseurl.app_url,"baseurl");
			this.baseurl = baseurl.app_url;
		}
	}
</script>

<style lang="scss">
	.content{
		img{
			width: 100%;
			height: 100%;
		}
	}
</style>
