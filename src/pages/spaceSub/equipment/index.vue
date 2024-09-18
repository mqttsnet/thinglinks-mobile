<route lang="json5">
	{
	style: {
	navigationStyle: 'custom',
	navigationBarTitleText: '控制设备',
	},
	}
</route>
<template>
	<!-- <view class="bg-white overflow-hidden pt-2 px-4" :style="{ marginTop: safeAreaInsets?.top + 'px' }"> -->
	<view class="">
		<wd-navbar title="控制装置" left-arrow @click-left="handleClickLeft" :bordered="false" :safeAreaInsetTop="true">
			<template #right>
				<wd-icon name="more" size="18" />
			</template>
		</wd-navbar>
	</view>
	<view class="equipment_top">
		<view class="top_message">
			<view class="">
				<image src="@/static/space/deng.png" mode=""></image>
			</view>
			<view class="">
				<view class="">
					智能灯
				</view>
				<view class="">
					客厅
				</view>
			</view>
		</view>
		<view class="">
			<wd-switch v-model="checked" size="24px" active-color="#405ff2" />
		</view>
	</view>
	<!-- </view> -->
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	// 获取屏幕边界到安全区域距离
	const { safeAreaInsets } = uni.getSystemInfoSync()

	const checked = ref<boolean>(true)

	function handleClickLeft() {
		uni.navigateBack()
	}
</script>

<style lang="scss" scoped>
	// #ifdef MP-WEIXIN
	:deep(.wd-navbar__right) {
		margin-right: 180rpx;
	}

	// #endif
	.equipment_top {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.top_message {
			display: flex;
			align-items: center;
		}
	}
</style>