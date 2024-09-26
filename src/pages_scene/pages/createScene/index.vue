<route lang="json5">
	{
	style: {
	navigationStyle: 'custom',
	navigationBarTitleText: '创建场景',
	"navigationBarBackgroundColor": "#f5f5f5",
	},
	}
</route>
<template>
	<view style="background: #f5f5f5;min-height: 100vh;">
		<!-- 导航栏 -->
		<view class="log_navbar">
			<wd-navbar title="创建场景" :bordered="false" left-arrow @click-left="handleClickLeft" :placeholder="true"
				:safeAreaInsetTop="true">
				<template #right>
					<wd-icon name="more" size="22px"></wd-icon>
				</template>
			</wd-navbar>
		</view>
		<view class="device_wrap">
			<view class="list">
				<view class="status_list">
					<view class="status_left">
						<view class="status_icon">
							<text class="iconfont icon-dianjichufa" style="font-size: 56rpx;color: #405ff2;"></text>
						</view>
						<view class="status_info">
							<view class="name">
								即点即用
							</view>
							<view class="text">
								示例：一键打开客厅的所有灯
							</view>
						</view>
					</view>
					<view class="status_right">
						<wd-icon name="arrow-right" size="24px"></wd-icon>
					</view>
				</view>
				<view class="line" style="margin: 30rpx;">
					<wd-gap height="1rpx" bg-color="#eeeeee"></wd-gap>
				</view>
				<view class="status_list">
					<view class="status_left">
						<view class="status_icon">
							<text class="iconfont icon-taiyang" style="font-size: 56rpx;color: #ff981f;"></text>
						</view>
						<view class="status_info">
							<view class="name">
								当天气变化时
							</view>
							<view class="text">
								示例：当周围温度超过 25°C 时。
							</view>
						</view>
					</view>
					<view class="status_right">
						<wd-icon name="arrow-right" size="24px"></wd-icon>
					</view>
				</view>
				<view class="line" style="margin: 30rpx;">
					<wd-gap height="1rpx" bg-color="#eeeeee"></wd-gap>
				</view>
				<view class="status_list">
					<view class="status_left">
						<view class="status_icon">
							<text class="iconfont icon-dingwei" style="font-size: 56rpx;color: #ff5726;"></text>
						</view>
						<view class="status_info">
							<view class="name">
								当位置改变时
							</view>
							<view class="text">
								示例：当您回家或离开家时。
							</view>
						</view>
					</view>
					<view class="status_right">
						<wd-icon name="arrow-right" size="24px"></wd-icon>
					</view>
				</view>
				<view class="line" style="margin: 30rpx;">
					<wd-gap height="1rpx" bg-color="#eeeeee"></wd-gap>
				</view>
				<view class="status_list">
					<view class="status_left">
						<view class="status_icon">
							<text class="iconfont icon-shizhong" style="font-size: 56rpx;color: #4aaf57;"></text>
						</view>
						<view class="status_info">
							<view class="name">
								指定时间
							</view>
							<view class="text">
								示例：上午 08:00 时、早上时、晚上时。
							</view>
						</view>
					</view>
					<view class="status_right">
						<wd-icon name="arrow-right" size="24px"></wd-icon>
					</view>
				</view>
				<view class="line" style="margin: 30rpx;">
					<wd-gap height="1rpx" bg-color="#eeeeee"></wd-gap>
				</view>
				<view class="status_list">
					<view class="status_left">
						<view class="status_icon">
							<text class="iconfont icon-gongjuxiang" style="font-size: 56rpx;color: #1a96f0;"></text>
						</view>
						<view class="status_info">
							<view class="name">
								当设备状态发生变化时
							</view>
							<view class="text">
								示例：当检测到异常活动时。
							</view>
						</view>
					</view>
					<view class="status_right">
						<wd-icon name="arrow-right" size="24px"></wd-icon>
					</view>
				</view>
				<view class="line" style="margin: 30rpx;">
					<wd-gap height="1rpx" bg-color="#eeeeee"></wd-gap>
				</view>
				<view class="status_list">
					<view class="status_left">
						<view class="status_icon">
							<text class="iconfont icon-anquanmoshi" style="font-size: 56rpx;color: #9d28ac;"></text>
						</view>
						<view class="status_info">
							<view class="name">
								安全模式
							</view>
							<view class="text">
								示例：通过网关撤防、停留或撤防。
							</view>
						</view>
					</view>
					<view class="status_right">
						<wd-icon name="arrow-right" size="24px"></wd-icon>
					</view>
				</view>
				<view class="line" style="margin: 30rpx;">
					<wd-gap height="1rpx" bg-color="#eeeeee"></wd-gap>
				</view>
				<view class="status_list">
					<view class="status_left">
						<view class="status_icon">
							<text class="iconfont icon--" style="font-size: 56rpx;color: #f54336;"></text>
						</view>
						<view class="status_info">
							<view class="name">
								当警报触发时
							</view>
							<view class="text">
								示例：触发火灾警报或紧急警报时。
							</view>
						</view>
					</view>
					<view class="status_right">
						<wd-icon name="arrow-right" size="24px"></wd-icon>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	// 获取屏幕边界到安全区域距离
	// const { safeAreaInsets } = uni.getSystemInfoSync()

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
		margin: 50rpx auto;
		background: #FFFFFF;
		border-radius: 16rpx;

		.list {
			padding: 32rpx;
		}

		.status_list {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-left: 24rpx;

			.status_left {
				display: flex;
				align-items: center;

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
	}
</style>