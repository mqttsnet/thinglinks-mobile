<route lang="json5">
	{
	style: {
	navigationStyle: 'custom',
	navigationBarTitleText: '场景',
	},
	}
</route>
<script lang="ts" setup>
	// 获取屏幕边界到安全区域距离
	const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
	<view class="bg-white overflow-hidden pt-2 px-4" :style="{ marginTop: safeAreaInsets?.top + 'px' }">
		<view class="guide_container">
			<image src="../../static/guide/start.png" mode=""></image>
			<view class="guide_down">

			</view>
		</view>
	</view>
</template>

<style scoped lang="scss">
	.guide_container {
		background: #405ff2;
		width: 100%;
		height: 100vh;


		image {
			width: 750rpx;
			height: 100vh;
			box-sizing: border-box;
		}

		.guide_down {
			background-image: url('https://files.axshare.com/gsc/QYC4FI/3c/aa/87/3caa87d5a7d543dba1a368caf8097dcd/images/2-%E5%BC%95%E5%AF%BC%E9%A1%B5_2/subtract_u16.svg?pageId=67a3d5f8-53d4-4d83-bcc9-e183ec343ebd');
			background-size: 750rpx 100%;
			width: 100%;
			height: 920rpx;
			position: fixed;
			bottom: 0;
		}
	}
</style>