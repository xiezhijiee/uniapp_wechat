<template>
	<view class="content">
		<view :style="{ height: CustomBar + 'px', backgroundColor: '#00C15D' }" v-if="!inSidePage">
			<view class="bar_cur" :style="{ height: CustomBar + 'px', paddingTop: StatusBar + 'px' }">
				<view class="returnTeam" style="z-index: 10" >
					<!-- <image class="backTeamClass" :src="imgUrl + 'backCho.png'" mode="" style="width: 24rpx; height: 24rpx; margin-right: 12rpx"></image> -->
					<!-- <u-icon color="#fff" label="返回团队" top="2" label-size="28" label-color="#fff"></u-icon> -->
				</view>
			</view>
		</view>
		<!-- 123123123213
		<cccc></cccc> -->
	</view>
</template>

<script>
const app = getApp();
export default {
	data() {
		return {
			StatusBar: app.globalData.StatusBar,
			CustomBar: app.globalData.CustomBar,
			salaryArray: app.globalData.salaryArray,
			title: 'Hello'
		};
	},
	onLoad() {
		console.log(this.$x.api);
	},
	methods: {
		tett() {
			this.$x.api.getTest().then(res => {
				console.log(res);
			});
		}
	}
};
</script>

<style scoped lang="scss">
.content {
	height: 100vh;
}
.bar_cur {
	padding-left: 32rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
}
.lasTitle,
.barCurPs,
.returnTeam {
	// display: flex;
	flex:1;
	align-items: center;
	height: 100%;
	background-color: red;
}

.backTeamClass {
	vertical-align: -13rpx;
	width: 64rpx;
	height: 64rpx;
}
.navbarContent{
	background-color: red;
	width: 100%;
	height: 100%;
}
</style>
