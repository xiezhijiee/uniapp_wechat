<script>
	export default {
		
		globalData:{
			Custom: null,
			displayArea: null,
			StatusBar: null,
			CustomBar: null,
		},
		onLaunch: function() {
			wx.getSystemInfo({
			    success: (e) => {
					console.log(e)
			        this.globalData.StatusBar = e.statusBarHeight;
			        let capsule = wx.getMenuButtonBoundingClientRect();
					console.log(capsule,"《《《《《《《《《《《《《《《《《《《《《：capsule")
			        if (capsule) {
			            this.globalData.displayArea = {
			                windowHeight: e.windowHeight,
			                windowWidth: e.windowWidth,
			                screenHeight: e.screenHeight,
			            };
			            this.globalData.Custom = capsule;
			            this.globalData.CustomBar =
						//胶囊顶边
			                capsule.bottom + capsule.top - e.statusBarHeight;
			        } else {
			            this.globalData.CustomBar = e.statusBarHeight + 50;
			        }
			    },
			});
			console.log('App Launch')
		},
		onShow: function() {//切入后台
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
