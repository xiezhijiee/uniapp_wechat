<template>
	<view class="">
			<view v-if="item.level==1" class="leveSearchb_jobName" v-html="keyRegExp(item.sort_name,keySearch)"></view>
	</view>
</template>

<script>
	
	methods(){
		keyRegExp(str, key) { // 搜索关键字高亮显示
			// 正则匹配中文、英文关键字高亮，高亮后的关键字和之前的大小写保持一致
			var key = key; //这里定义关键词
			key = '(' + key.replace(/([\+\.\*\|\?\-\(\[\^\$])/g, '\\$1').replace(/\s+/g, '|') + ')'; //把匹配关键字中的正则符转义
			var patt = new RegExp(key, 'igm'); //传  igm  可避免关键词后面的空格造成文字不匹配问题
			var str2;
			if (this.isUseKeyWorld) {
				str2 = str.replace(patt, "<span style='color:#00C15D;'>$1</span>");
			} else {
				str2 = str.replace(patt, "<span>$1</span>");
			}
			return str2;
		},
	},
</script>

<style scoped lang="scss">
	.leveSearchb {
		display: flex;
		align-items: center;
		justify-content: space-between;
	
		&_jobName {
			margin-right: 24rpx;
		}
	}
</style>
