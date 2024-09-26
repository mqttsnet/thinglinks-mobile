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
			<view class="message_image">
				<image src="@/static/space/deng.png" mode=""></image>
			</view>
			<view class="message_center">
				<view class="name">
					智能灯
				</view>
				<view class="text">
					客厅
				</view>
			</view>
		</view>
		<view class="message_switch">
			<wd-switch v-model="checked" size="20px" active-color="#405ff2" />
		</view>
	</view>
	<view class="equipment_seg">
		<wd-segmented :options="list" v-model:value="current" size='large' @change="changeSegmented"></wd-segmented>
	</view>
	<view class="" v-if="current == '白光'">
		<view class="seg_white">
			<view class="external_image">
				<image src="../../../static/space/ellipse.svg" mode=""></image>
			</view>
			<view class="internal_image">
				<image src="../../../static/space/deng.png" mode=""></image>
			</view>
		</view>
		<view class="equipment_silder">
			<text class="iconfont icon-taiyang1"
				style="font-size: 56rpx;margin-right: 24rpx;margin-bottom: 5rpx;"></text>
			<view class="slider">
				<wd-slider v-model="value" :min="0" :max="100" hide-min-max />
			</view>
		</view>
	</view>
	<view class="" v-if="current == '彩色'">
		<view class="seg_white">
			<view class="external_images">
				<image src="../../../static/space/ellipseCai.svg" mode=""></image>
			</view>
			<view class="internal_image" style="background: #FFFFFF;">
				<image src="../../../static/space/deng.png" mode=""></image>
			</view>
		</view>
		<view class="equipment_silder">
			<text class="iconfont icon-taiyang1"
				style="font-size: 56rpx;margin-right: 24rpx;margin-bottom: 5rpx;"></text>
			<view class="slider">
				<wd-slider v-model="valueSun" :min="0" :max="100" hide-min-max />
			</view>

		</view>
		<view class="equipment_silder" style="margin-top:30rpx;">
			<text class="iconfont icon-banyuan"
				style="font-size: 36rpx;margin-right: 24rpx;margin-left: 10rpx;margin-bottom: 10rpx;"></text>
			<view class="slider">
				<wd-slider v-model="valueRound" :min="0" :max="100" hide-min-max />
			</view>
		</view>
	</view>
	<view class="equipment_btn" @click="toSetSwitch">
		<wd-button>设置自动开/关</wd-button>
	</view>
	<!-- </view> -->
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	// 获取屏幕边界到安全区域距离
	const { safeAreaInsets } = uni.getSystemInfoSync()

	const checked = ref<boolean>(true)
	const list = ref<string[]>(['白光', '彩色', '场景'])
	const current = ref('白光')
	const valueSun = ref<number>(30)
	const valueRound = ref<number>(70)

	function handleClickLeft() {
		uni.navigateBack()
	}
	const changeSegmented = (event : any) => {
		console.log('分段器的切换', event);
		current.value = event.value;
	};
	const toSetSwitch = () => {
		console.log('点击开关');
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
		padding: 48rpx;

		.top_message {
			display: flex;
			align-items: center;

			image {
				width: 96rpx;
				height: 96rpx;
			}

			.message_center {
				margin-left: 24rpx;

				.name {
					font-weight: 600;
					color: #212121;
					font-size: 36rpx;
				}

				.text {
					color: #616161;
					font-size: 24rpx;
				}
			}
		}
	}

	.equipment_seg {
		padding: 0 48rpx;

		:deep(.wd-segmented__item--active) {
			background: #405ff2;
		}

		:deep(.wd-segmented__item.is-active) {
			color: #fff !important;
		}

		:deep(.wd-segmented__item.is-large) {
			min-height: 74rpx !important;
			line-height: 74rpx !important;
		}
	}

	.seg_white {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 140rpx;

		.external_image {
			position: relative;

			image {
				width: 660rpx;
				height: 598rpx;
			}
		}

		.external_images {
			position: relative;


			image {
				width: 632rpx;
				height: 632rpx;
			}
		}

		.internal_image {
			position: absolute;
			width: 360rpx;
			height: 360rpx;
			border-radius: 50%;
			border: 1rpx solid #eeeeee;
			display: flex;
			justify-content: center;
			align-items: center;
			top: 45%;

			image {
				width: 280rpx;
				height: 280rpx;
			}
		}

	}

	.equipment_silder {
		margin-top: 200rpx;
		padding: 0 48rpx;
		display: flex;
		align-items: flex-end;

		.slider {
			width: 100%;
		}

		:deep(.wd-slider__button-wrapper) {
			top: 20rpx;
		}

		:deep(.wd-slider__bar-wrapper) {
			border-radius: 40rpx;
		}

		:deep(.wd-slider__bar) {
			height: 40rpx;
			border-radius: 40rpx;
		}
	}



	.equipment_btn {
		padding: 182rpx 48rpx 48rpx;

		:deep(.wd-button) {
			width: 100%;
			height: 116rpx !important;
			background-color: #f0f2fe !important;
		}

		:deep(.wd-button__text) {
			font-weight: 700;
			color: #405ff2;
			font-size: 32rpx;
		}
	}
</style>