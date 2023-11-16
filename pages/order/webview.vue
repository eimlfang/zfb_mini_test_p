<template>
	<view>
		<view>
		  <web-view
		    :src="srcUrl"
		    id="webview"
		    onMessage="onWebviewMessage"
		  >
		  </web-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				srcUrl:""
			}
		},
		methods: {
			onWebviewMessage(message) {
			  console.log('onWebviewMessage>>>>>', message)
			  const { detail: { type, token, url } } = message
			  if (type === 'IDENTITY_ALI_FACE_AWAKE') {
			    //拉起支付宝刷脸认证
			    my.startAPVerify({
			      url,
			      certifyId: token,
			      success: function (res) {
			        console.log('success', res)
			      },
			      fail: function (res) {
			        console.log('fail', res)
			      },
			      complete: function (res) {
			        console.log('complete', res)
			      }
			    })
			    return
			  }
			   //认证授权暂不支持以下两种type的识别
			  if (type === 'WILL_DONE') {
			    console.log('WILL_DONE>>do something')
			    return
			  }
			  if (type === 'RN_DONE') {
			    console.log('RN_DONE>>do something')
			    return
			  }
			 
			}
		},
		onLoad(ops) {
			this.srcUrl = ops.url;
		}
	}
</script>

<style>

</style>
