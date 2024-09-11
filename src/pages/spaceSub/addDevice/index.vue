<route lang="json5">
	{
	style: {
	navigationStyle: 'custom',
	navigationBarTitleText: '添加设备',
	},
	}
</route>
<template>
	<!-- <view class="bg-white overflow-hidden pt-2 px-4" :style="{ marginTop: safeAreaInsets?.top + 'px' }"> -->
	<!-- 导航栏 -->
	<view class="">
		<wd-navbar title="添加设备" :bordered="false" left-arrow @click-left="handleClickLeft" :placeholder="true"
			:safeAreaInsetTop="true">
			<template #right v-if="showNavbar">
				<wd-icon name="scan" size="18" />
			</template>
			<template #right v-if="!showNavbar">
				<wd-icon name="more" size="18" />
			</template>
		</wd-navbar>
	</view>
	<view class="device_wrap">
		<view class="device_seg" v-if="showNavbar">
			<wd-segmented :options="list" v-model:value="current" size="large" active-color="#ffffff"
				class="custom-segmented" @change="changeSegmented"></wd-segmented>
		</view>
		<view class="" v-if="current == '附近的设备'">
			<view class="device_title" v-if="showDevice">
				正在寻找附近的设备...
			</view>
			<view class="device_title" v-if="!showDevice">
				连接到设备
			</view>
			<view class="device_text">
				<text class="iconfont icon-wifi1" style="font-size: 36rpx;margin-right: 24rpx;color: #405ff2;"></text>
				<text class="iconfont icon-lanya-F" style="font-size: 36rpx;margin-right: 24rpx;color: #405ff2;"></text>
				打开 Wifi 和蓝牙进行连接
			</view>
			<view class="radar-container" v-if="showDevice">
				<!-- 扩散的圆圈 -->
				<view class="radar-circle" v-for="n in 4" :key="n"></view>

				<!-- 中心头像 -->
				<view class="center-avatar">
					<image class="avatar" src="../../../static/avatar.jpg" mode="aspectFill"></image>
				</view>
			</view>
			<view style="color: #616161;font-size: 36rpx;text-align: center;" v-if="!showNavbar">
				请开灯并确认灯是否快速闪烁
			</view>
			<view class="findDevice" v-if="!showDevice">
				<view class="" style="margin: 50rpx 0;">
					<wd-checkbox v-model="boxValue" @change="checkboxChange"
						checked-color="#405ff2">智能V1监控摄像头</wd-checkbox>
				</view>
				<image src="../../../static/avatar.jpg" mode="aspectFill"></image>
			</view>
			<view class="device_down" :style="{ marginTop: showDevice ? '200rpx' : '56rpx' }">
				<wd-button v-if="showDevice" @click="toConnected">连接到所有设备</wd-button>
				<wd-button v-if="!showDevice" @click="toConnection">连接</wd-button>
				<view class="text">
					找不到您的设备？
				</view>
				<view class="message">
					了解更多
				</view>
			</view>
		</view>
		<view class="" v-if="current == '手动添加'">
			<scroll-view class="device_list" scroll-x="true" :style="{ overflow: 'hidden' }">
				<view class="device_item" v-for="(item, index) in deviceList" :key="index" :style="{
				                backgroundColor: selectedIndex === index ? '#405ff2' : '#FFFFFF',
				                color: selectedIndex === index ? '#FFFFFF' : '#000000'
				            }" @click="selectItem(index)">
					{{ item }}
				</view>
			</scroll-view>
			<view class="device_data">
				<view class="data_item" v-for="(itme,index) in deviceData" :key="index">
					<image :src="itme.src" mode="" @click="toAddManually"></image>
					<view class="item_text">
						{{itme.name}}
					</view>
				</view>
			</view>
		</view>
	</view>
	<!-- </view> -->
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	// 获取屏幕边界到安全区域距离
	const { safeAreaInsets } = uni.getSystemInfoSync()

	const list = ref<string[]>(['附近的设备', '手动添加'])
	const showDevice = ref(true);
	const current = ref('附近的设备');
	const boxValue = ref<boolean>(true);
	const deviceList = ref(['热门设备', '灯具', '相机', '电气', '传感器']);
	const selectedIndex = ref(0);
	const showNavbar = ref(true);

	function handleClickLeft() {
		uni.navigateBack()
	}
	const changeSegmented = (event : any) => {
		console.log('分段器的切换', event);
		current.value = event.value;
	};
	function checkboxChange({ value }) {
		console.log(value);
	}
	const toConnected = () => {
		showDevice.value = false;
	}
	const toConnection = () => {
		uni.navigateTo({
			url: '/pages/spaceSub/connection/index'
		});
	}
	const selectItem = (index : any) => {
		console.log(index);
		selectedIndex.value = index;
		// 在此处添加点击后跳转到页面或显示内容
		console.log('Selected item:', deviceList.value[index]);
	};
	const deviceData = ref([
		{
			name: '智能V1摄像头',
			src: '../../../static/avatar.jpg'
		},
		{
			name: '智能网络摄像头',
			src: '../../../static/avatar.jpg'
		}
	])
	const toAddManually = () => {
		current.value = '附近的设备';
		showDevice.value = false;
		showNavbar.value = false;
	}
</script>

<style lang="scss" scoped>
	// #ifdef MP-WEIXIN
	:deep(.wd-navbar__right) {
		margin-right: 180rpx !important;
	}

	// #endif


	.device_wrap {
		width: 93%;
		margin: 0 auto;
	}

	.device_seg {
		:deep(.wd-segmented__item--active) {
			background: #405ff2;
		}

		:deep(.wd-segmented__item.is-active) {
			color: #fff !important;
		}
	}

	// 附近的设备
	.device_title {
		font-weight: 700;
		color: #212121;
		text-align: center;
		font-size: 48rpx;
		margin: 72rpx 0 12rpx 0;
	}

	.device_text {
		width: 444rpx;
		height: 72rpx;
		border-radius: 40rpx;
		background-color: #fafafa;
		box-sizing: border-box;
		font-size: 24rpx;
		color: #616161;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 24rpx auto;
	}

	.radar-container {
		position: relative;
		width: 560rpx;
		height: 560rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		margin-top: 70px;

		.radar-circle {
			position: absolute;
			width: 100%;
			height: 100%;
			border: 1rpx solid #405ff2;
			border-radius: 50%;
			animation: radarAnimation 2s infinite;
			opacity: 0;
		}

		.radar-circle:nth-child(2) {
			animation-delay: 0.5s;
		}

		.radar-circle:nth-child(3) {
			animation-delay: 1s;
		}

		.radar-circle:nth-child(4) {
			animation-delay: 1.5s;
		}

		@keyframes radarAnimation {
			0% {
				transform: scale(0.2);
				opacity: 1;
			}

			100% {
				transform: scale(1.5);
				opacity: 0;
			}
		}

		.center-avatar {
			position: absolute;
			width: 200rpx;
			height: 200rpx;
			border-radius: 50%;
			overflow: hidden;
			// background-color: #f5a623;
			display: flex;
			justify-content: center;
			align-items: center;

			.avatar {
				width: 100%;
				height: 100%;
			}
		}


	}

	.findDevice {
		text-align: center;

		image {
			width: 600rpx;
			height: 600rpx;
		}

		:deep(.wd-checkbox__txt) {
			font-size: 32rpx;
			color: #424242;
		}
	}

	.device_down {
		text-align: center;

		:deep(.wd-button) {
			width: 500rpx !important;
			height: 116rpx !important;
			background: #405ff2;
		}

		:deep(.wd-button__text) {
			font-size: 32rpx;
			color: #fff;
		}

		.text {
			font-size: 32rpx;
			color: #616161;
			margin: 72rpx 0 24rpx 0;
		}

		.message {
			font-size: 28rpx;
			font-weight: 500;
			color: #405ff2;
		}
	}

	// 手动添加
	.device_list {
		// display: flex;
		// justify-content: space-between;
		// align-items: center;
		// overflow-x: scroll;
		// /* 确保可左右滚动 */
		// white-space: nowrap;
		// -ms-overflow-style: none;
		// scrollbar-width: none;
		// margin: 32rpx 0;
		white-space: nowrap;
		margin-top: 30rpx;

		/* Chrome, Safari, and WebKit-based browsers */
		// .device_list::-webkit-scrollbar {
		// 	display: none;
		// }

		.device_item {
			display: inline-block;
			font-size: 32rpx;
			color: #212121;
			border: 1px solid #e3e3e3;
			border-radius: 40rpx;
			padding: 16rpx 40rpx;
			flex-shrink: 0;
			margin-right: 24rpx;
		}
	}

	.device_data {
		display: flex;
		justify-content: space-between;
		margin: 32rpx 0;
		flex-wrap: wrap;

		.data_item {
			margin-top: 32rpx;
		}

		.item_text {
			margin-top: 24rpx;
			text-align: center;
			color: #212121;
			font-size: 32rpx;
			font-weight: 500;
		}

		image {
			width: 310rpx;
			height: 310rpx;
		}
	}
</style>