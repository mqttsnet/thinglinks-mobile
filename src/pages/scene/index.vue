<route lang="json5">
	{
	style: {
	navigationStyle: 'custom',
	navigationBarTitleText: '仪表盘',
	},
	}
</route>
<template>
	<view class="overflow-hidden pt-2 px-4" :style="{ paddingTop: safeAreaInsets?.top + 'px' }"
		style="background-color: #f5f5f5;min-height: 100vh;">
		<view class="space_top">
			<view class="space_top_item" @click="toSelect">
				<view class="" style="font-size: 48rpx;color: #212121;font-weight: 650;">
					我的空间
				</view>
				<view class="">
					<wd-icon name="arrow-down" size="45rpx" color="#212121"></wd-icon>
				</view>
			</view>
			<view class="space_top_right">
				<view class="" style="margin-right: 60rpx;" @click="toLog">
					<text class="iconfont icon-wenjianjia" style="font-size: 45rpx;"></text>
				</view>
				<view class="">
					<wd-icon name="app" size="24px"></wd-icon>
				</view>
			</view>
		</view>
		<view class="device_seg">
			<wd-segmented :options="list" v-model:value="current" size="large" active-color="#ffffff"
				class="custom-segmented" @change="changeSegmented"></wd-segmented>
		</view>
		<view class="automatic" v-if="current == '自动化'">
			<view class="automatic_list" @click="toInstant">
				<view class="list_top">
					<view class="top_open">
						<view class="" style="font-weight: 600;color: #212121;font-size: 36rpx;">
							打开所有灯
						</view>
						<view class="" style="color: #616161;font-size: 28rpx;">
							1项任务
						</view>
					</view>
					<view class="top_arrow">
						<wd-icon name="arrow-right" size="22px"></wd-icon>
					</view>
				</view>
				<view class="list_down">
					<view class="down_left">
						<view class="">
							<wd-icon name="time" size="22px" color="#4aaf57"></wd-icon>
						</view>
						<view class="" style="margin-left: 32rpx;">
							<wd-icon name="arrow-right1" size="22px"></wd-icon>
						</view>
						<view class="" style="margin-left: 32rpx;">
							<text class="iconfont icon-taiyang" style="font-size: 56rpx;color: #ff981f;"></text>
						</view>
					</view>
					<view class="list_switch">
						<wd-switch v-model="checked" size="22px" active-color="#405ff2" />
					</view>
				</view>
			</view>
		</view>
		<view class="instant" v-if="current == '即点即用'">
			<view class="instant_list" @click="toInstant">
				<view class="list_top">
					<view class="top_icon">

					</view>
					<view class="top_arrow">
						<wd-icon name="arrow-right" size="22px" color="#FFFFFF"></wd-icon>
					</view>
				</view>
				<view style="font-weight: 600;color: #ffffff;font-size: 32rpx;margin-top: 32rpx;">
					睡前准备
				</view>
				<view style="color: #ffffff;font-size: 28rpx;margin-top: 8rpx;">
					2项任务
				</view>
			</view>
			<view class="instant_list">
				<view class="list_top">
					<view class="top_icon">

					</view>
					<view class="top_arrow">
						<wd-icon name="arrow-right" size="22px" color="#FFFFFF"></wd-icon>
					</view>
				</view>
				<view style="font-weight: 600;color: #ffffff;font-size: 32rpx;margin-top: 32rpx;">
					睡前准备
				</view>
				<view style="color: #ffffff;font-size: 28rpx;margin-top: 8rpx;">
					2项任务
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	// 获取屏幕边界到安全区域距离
	const { safeAreaInsets } = uni.getSystemInfoSync();

	const list = ref<string[]>(['自动化', '即点即用'])
	const current = ref('自动化');
	const checked = ref<boolean>(true)

	const toSelect = () => {
		uni.navigateTo({
			url: '/pages_space/pages/select/index'
		});
	}

	const changeSegmented = (event : any) => {
		console.log('分段器的切换', event);
		current.value = event.value;
	};

	const toLog = () => {
		uni.navigateTo({
			url: '/pages_scene/pages/log/index'
		});
	}

	const toInstant = () => {
		uni.navigateTo({
			url: '/pages_scene/pages/createScene/index'
		});
	}
</script>

<style lang="scss" scoped>
	.space_top {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.space_top_item {
			display: flex;
			align-items: center;
		}

		.space_top_right {
			display: flex;
			align-items: center;
			/*#ifdef MP*/
			margin-right: 180rpx;
			/*#endif*/
		}
	}

	.device_seg {
		margin-top: 60rpx;

		:deep(.wd-segmented__item--active) {
			background: #405ff2;
		}

		:deep(.wd-segmented__item.is-active) {
			color: #fff !important;
		}
	}

	.automatic {
		margin-top: 48rpx;

		.automatic_list {
			width: 100%;
			padding: 32rpx;
			background: #FFFFFF;
			border-radius: 16rpx;
			box-sizing: border-box;
			margin-bottom: 48rpx;

			.list_top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				line-height: 2;
			}

			.list_down {
				margin-top: 44rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.down_left {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
			}
		}
	}

	.instant {
		margin-top: 48rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;

		.instant_list {
			width: 275rpx;
			padding: 32rpx;
			background: #1a96f0;
			border-radius: 16rpx;

			.list_top {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.top_icon {
					width: 80rpx;
					height: 80rpx;
					background: #FFFFFF;
					border-radius: 50%;
				}
			}
		}
	}
</style>