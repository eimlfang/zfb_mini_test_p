<template>
	<view class="min-name">
		<view class="uni-list">
			<view class="uni-list-cell" style="display: flex;">
				<view class="uni-list-cell-left">
					请选择快递公司：
				</view>
				<view class="uni-list-cell-db" style="font-size: 30rpx;">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
			</view>
			<view style="display: flex;align-items: center;margin: 30rpx 0rpx;">
				<text class="uni-list-cell-left">寄出快递单号：</text><u-input placeholder="请填写寄出快递单号" v-model="express_on" border="bottom"></u-input>
			</view>
			<u-button type="primary" size="small" text="提交" @click="seveExpress()"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'picker',
				array: [],
				index: 0,
				express_id:'10001',
				expressList: [],
				// 快递单号
				express_on:'',
				order_id:''
			}
		},
		onLoad(options) {
			this.order_id = options.order_id
			this.getExpress();
		},
		methods: {
			change() {
				this.show = true;
			},
			bindPickerChange(e) {
				this.index = e.detail.value
				this.express_id = this.expressList[e.detail.value].express_id
				console.log( this.express_id)
			},
			getExpress() {
				this._post('user.order/getExpress', {}, (res) => {
					this.expressList = res.data;
					res.data.forEach((item, index) => {
						this.array.push(item.express_name)
					})
				})

			},
			seveExpress(){
				this._post('user.order/returned', {
					order_id:this.order_id,
					express_id:this.express_id,
					express_no:this.express_on
				}, (res) => {
					console.log(res,"看看")
					uni.showToast({
						title:res.msg,
						icon:"none",
						success() {
							uni.navigateBack({
								delta:1,
							})
						}
					})
					
				})
			}
		}
	}
</script>

<style>
	.min-name{
		width: 670rpx;
		margin: 0 auto;
	}
	.uni-list-cell-left {
		font-size: 30rpx;

	}
</style>
