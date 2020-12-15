<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area" @click="tett">
			<text class="title">{{title}}</text>
		</view>
		
		<view class="b">
			7
		</view>
		
		<view class="test">
			1
		</view>
		
		<view class="a">
				2
		</view>
		
		<view class="b">
			3
		</view>
		<view class="">
			
		</view>
		<view class="test">
			4
		</view>
		
		<view class="suoxie">
			
		</view>
		<cccc></cccc>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			console.log(this.$x.api)
		},
		methods: {
			tett() {
				this.$x.api.getTest().then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	
	.xzj + .test{  //xzj jin 贴的test
		height: 30rpx;
		border: 1rpx solid red;
	}
	.b{
		~ .test{   //.b 后所有的 test
			width: 30rpx;
			height: 40rpx;
			border: 1rpx solid red;
			background-color: blue;
		}
		 + .test{
			 background-color: red;
		 }
		
	}
	
	.suoxie{
		
		border: 1rpx sold red{
			right: 6rpx;
			left: 4rpx;
		}
		
		// 等同
		// suoxie {
		//   border: 1px solid #ccc;
		//   border-left: 0px;
		//   border-right: 0px;
		// }
		
	}
	
	
	
	

</style>
<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 200vh;
		border: 1rpx solid red;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
