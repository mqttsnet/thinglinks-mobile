<route lang="json5">
	{
	style: {
	navigationStyle: 'custom',
	navigationBarTitleText: '日志',
	},
	}
</route>
<template>
	<!-- <view class="bg-white overflow-hidden pt-2 px-4" :style="{ marginTop: safeAreaInsets?.top + 'px' }"> -->
	<!-- 导航栏 -->
	<view class="log_navbar">
		<wd-navbar title="日志" :bordered="false" left-arrow @click-left="handleClickLeft" :placeholder="true"
			:safeAreaInsetTop="true">
			<template #right>
				<wd-calendar use-default-slot v-model="value" @confirm="handleConfirm4">
					<text class="iconfont icon-rili" style="font-size: 45rpx;"></text>
				</wd-calendar>
			</template>
		</wd-navbar>
	</view>
	<view class="device_wrap">
		<view class="log_title">
			<view class="day">
				24
			</view>
			<view class="title_top">
				<view class="title_left">
					<view class="year">
						十二月，2024年
					</view>
					<view class="title_right">
						今天，周二
					</view>
				</view>
				<view class="title_down">
					<wd-gap height="1rpx" bg-color="#eeeeee"></wd-gap>
				</view>
			</view>
		</view>
		<view class="status_list">
			<view class="status_icon">
				<wd-icon name="check-circle-filled" size="24px" color="#405ff2"></wd-icon>
			</view>
			<view class="status_info">
				<view class="name">
					打开空调
				</view>
				<view class="text">
					10:09·处理成功
				</view>
			</view>
		</view>
		<view class="status_list">
			<view class="status_icon">
				<wd-icon name="error-circle-filled" size="22px" color="#f75555"></wd-icon>
			</view>
			<view class="status_info">
				<view class="name">
					欢迎回家自动化
				</view>
				<view class="text">
					10:09·处理失败
				</view>
			</view>
		</view>
	</view>
	<!-- </view> -->
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	// 获取屏幕边界到安全区域距离
	// const { safeAreaInsets } = uni.getSystemInfoSync()
	const value = ref<number>(Date.now())
	function handleConfirm({ value }) {
		console.log(value)
	}

	function handleClickLeft() {
		uni.navigateBack()
	}
</script>

<style lang="scss" scoped>
	// #ifdef MP-WEIXIN
	:deep(.wd-navbar__right) {
		margin-right: 180rpx !important;
	}

	// #endif
	.log_navbar {
		:deep(.wd-button) {
			z-index: 10;
		}
	}


	.device_wrap {
		width: 93%;
		margin: 0 auto;

		.log_title {
			display: flex;
			align-items: center;
			margin: 48rpx 0;

			.day {
				width: 88rpx;
				height: 88rpx;
				background-color: #405ff2;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				color: #ffffff;
				font-weight: 700;
				font-size: 40rpx;
			}

			.title_top {
				line-height: 2;
				width: 88%;
				margin-left: 32rpx;

				.title_left {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.year {
						font-weight: 600;
						color: #212121;
						font-size: 36rpx;
					}
				}

				.title_right {
					color: #616161;
					font-size: 28rpx;
				}
			}

			.title_down {
				margin-top: 28rpx;
			}
		}

		.status_list {
			display: flex;
			align-items: center;
			margin-bottom: 48rpx;
			margin-left: 24rpx;

			.status_info {
				margin-left: 48rpx;

				.name {
					font-weight: 600;
					color: #212121;
					font-size: 36rpx;
				}

				.text {
					color: #616161;
					font-size: 28rpx;
					margin-top: 8rpx;
				}
			}
		}
	}
</style>