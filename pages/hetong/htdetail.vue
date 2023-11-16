<template>
	<view class="content">
		<!-- <rich-text  :nodes="{{data}}"></rich-text> -->
		<!-- <rich-text :nodes="data"></rich-text> -->
		<view v-html="data"></view>
	</view>
</template>

<script>
	import parseHtml from "../../common/ht.js"
	export default {
		data() {
			return {
				id:"",
				data:""
			}
		},
		methods: {
			zlht(){
				let self = this;
				self._post('agreement.agreement/detail', {
					id:self.id
				}, function(res) {
					console.log("res",res);
					self.data = parseHtml(res.data.data.text);
				});
			}
			
			
		},
		onLoad(data) {
			this.id = data.id
			this.zlht()
		}
	}
</script>

<style>
	.content{
		padding: 20rpx;
	}
</style>


