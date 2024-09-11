<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5">
	{
	style: {
	navigationStyle: 'custom',
	navigationBarTitleText: '空间',
	},
	}
</route>
<template>

	<view class="bg-white overflow-hidden pt-2 px-4" :style="{ marginTop: safeAreaInsets?.top + 'px' }">
		<view class="space_top">
			<view class="space_top_item" @click="toSelect">
				<view class="" style="font-size: 48rpx;color: #212121;font-weight: 650;">
					我的空间
				</view>
				<view class="">
					<wd-icon name="arrow-down" size="45rpx" color="#212121"></wd-icon>
				</view>
			</view>
			<view class="space_top_items">
				<view class="" style="margin-right: 45rpx;">
					<text class="iconfont icon-zhinengjiqiren" style="font-size: 80rpx;color: #405ff2;"></text>
				</view>
				<view class="">
					<text class="iconfont icon-tongzhi" style="font-size: 50rpx;"></text>
				</view>
			</view>
		</view>
		<!-- 天气部分 -->
		<view class="space_day">
			<view class="day_left">
				<view class="" style="font-size: 80rpx;">
					30˚C
				</view>
				<view class="" style="font-size: 24rpx;margin-top: 24rpx;">
					江苏省苏州市
				</view>
				<view class="" style="font-size: 24rpx;margin-top: 10rpx;">
					今天多云
				</view>
				<view class="" style="display: flex;justify-content: center; align-items: center;margin-top: 22rpx;">
					<view class="" style="display: flex;justify-content: center; align-items: center;">
						<view class="" style="display: flex;justify-content: center;">
							<text class="iconfont icon-kongqizhiliangicon"
								style="font-size: 25rpx;color: #FFFFFF;"></text>
						</view>
						<view class="detail_text">
							空气质量92
						</view>
					</view>
					<view class="" style="display: flex;justify-content: center; align-items: center;">
						<view class="" style="display: flex;justify-content: center;">
							<text class="iconfont icon-shidu" style="font-size: 25rpx;color: #FFFFFF;"></text>
						</view>
						<view class="detail_text">
							78.2%
						</view>
					</view>
					<view class="" style="display: flex;justify-content: center; align-items: center;">
						<view class="" style="display: flex;justify-content: center;">
							<text class="iconfont icon-fengsu" style="font-size: 25rpx;color: #FFFFFF;"></text>
						</view>
						<view class="detail_text">
							2.0米/秒
						</view>
					</view>
				</view>
			</view>
			<view class="" style="display: flex;justify-content: center;">
				<text class="iconfont icon-tianqiyubao" style="font-size: 200rpx;color: #FFD700;"></text>
			</view>
		</view>
		<!-- 设备部分 -->
		<view class="device_title">
			<view class="title">
				所有设备
			</view>
			<view class="">
				<wd-icon name="more1" size="45rpx" color="#212121"></wd-icon>
			</view>
		</view>
		<!-- <view class="device_list">
			<view class="device_item" v-for="(item, index) in deviceList" :key="index"
				:style="{ backgroundColor: selectedIndex === index ? '#405ff2' : '#FFFFFF', color: selectedIndex === index ? '#FFFFFF' : '#000000' }"
				@click="selectItem(index)">
				{{ item }}
			</view>
		</view> -->
		<scroll-view class="device_list" scroll-x="true" :style="{ overflow: 'hidden' }">
			<view class="device_item" v-for="(item, index) in deviceList" :key="index" :style="{
		                backgroundColor: selectedIndex === index ? '#405ff2' : '#FFFFFF',
		                color: selectedIndex === index ? '#FFFFFF' : '#000000'
		            }" @click="selectItem(index)">
				{{ item }}
			</view>
		</scroll-view>
		<view class="space_list" v-if="showList">

		</view>
		<view class="space_default" v-if="!showList">
			<view class="default_image">
				<image src="../../static/space/default.svg" mode=""></image>
			</view>
			<view class="default_title">
				没有设备
			</view>
			<view class="default_text">
				您还没有添加设备呢～
			</view>
			<view class="default_btn" @click="showDevice = true;">
				<wd-button icon="add">添加设备</wd-button>
			</view>
		</view>
		<view class="space_down">
			<view class="space_voice">
				<text class="iconfont icon-24gl-mic" style="font-size: 56rpx;color: #405ff2;"></text>
			</view>
			<view class="space_add" style="margin-left: 40rpx;">
				<text class="iconfont icon-tianjia-yin" style="font-size: 112rpx;color: #405ff2;"
					@click="showDevice = true;"></text>
			</view>
		</view>

		<view class="space_popup">
			<wd-popup v-model="showDevice" custom-style="padding: 30px 40px;" @close="showDevice = false">
				<view class="popup_text" @click="toAddDevice">
					<text class="iconfont icon-shebei" style="font-size: 36rpx;margin-right: 24rpx;"></text>添加设备
				</view>
				<wd-gap bg-color="#eeeeee" height="1"></wd-gap>
				<view class="popup_text" @click="startScan">
					<text class="iconfont icon-saoyisao1" style="font-size: 36rpx;margin-right: 24rpx;"></text>扫描添加
					<!-- 输入设备码的部分 -->
					<view v-if="showInput">
						<input v-model="deviceCode" placeholder="请输入设备码" />
						<button @click="submitDeviceCode">提交设备码</button>
					</view>

					<!-- 显示扫码结果或错误信息 -->
					<view v-if="scanResult">
						<text>扫码结果: {{ scanResult }}</text>
					</view>
				</view>
			</wd-popup>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	// 获取屏幕边界到安全区域距离
	const { safeAreaInsets } = uni.getSystemInfoSync()

	const deviceList = ref(['所有空间', '客厅', '卧室', '厨房', '浴室']);
	const selectedIndex = ref(0);
	const showList = ref(false);
	const showDevice = ref(false);
	const showInput = ref(false);  // 控制是否显示输入框
	const deviceCode = ref('');    // 设备码的值
	const scanResult = ref('');    // 扫码结果


	const toSelect = () => {
		uni.navigateTo({
			url: '/pages/spaceSub/select/index'
		});
	}
	const selectItem = (index : any) => {
		console.log(index);
		selectedIndex.value = index;
		// 在此处添加点击后跳转到页面或显示内容
		console.log('Selected value:', deviceList.value[index]);
	};
	const toAddDevice = () => {
		uni.navigateTo({
			url: '/pages/spaceSub/addDevice/index'
		});
		showDevice.value = false;
	}

	const startScan = () => {
		uni.scanCode({
			success: (res) => {
				console.log(res);
				// 成功扫描二维码
				scanResult.value = res.result;
				showInput.value = false; // 隐藏输入框
			},
			fail: (err) => {
				console.log(err);
				// 扫码失败，显示输入框
				showInput.value = true;
			}
		});
	};

	const submitDeviceCode = () => {
		if (deviceCode.value.trim()) {
			scanResult.value = deviceCode.value;
			deviceCode.value = ''; // 清空输入框
			showInput.value = false; // 隐藏输入框
		} else {
			uni.showToast({
				title: '设备码不能为空',
				icon: 'none'
			});
		}
	};
</script>

<style lang="scss" scoped>
	.space_top {
		display: flex;
		align-items: center;

		.space_top_item {
			display: flex;
			align-items: center;
		}

		// #ifndef MP-WEIXIN
		.space_top_items {
			display: flex;
			align-items: center;
			margin-left: 260rpx;
		}

		// #endif
		// #ifdef MP-WEIXIN
		.space_top_items {
			display: flex;
			align-items: center;
			margin-left: 130rpx;
		}

		// #endif
	}

	.space_day {
		width: 100%;
		height: 320rpx;
		background: linear-gradient(to right, #405ff2, #6A8DFF, #A3C1FF);

		display: flex;
		align-items: center;
		margin: 48rpx 0 40rpx 0;
		color: #FFFFFF;
		border-radius: 40rpx;

		.day_left {
			padding: 30rpx 0 30rpx 40rpx;
		}

		.detail_text {
			font-size: 20rpx;
			margin: 0 15rpx 0 10rpx;
		}
	}

	.device_title {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.title {
			color: #212121;
			font-size: 40rpx;
			font-weight: 700;
		}

	}

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

	.space_default {
		.default_image {
			display: flex;
			justify-content: center;

			image {
				width: 340rpx;
				height: 334rpx;
			}
		}


		.default_title {
			text-align: center;
			color: #212121;
			font-size: 40rpx;
			margin-top: 25rpx;
		}

		.default_text {
			color: #616161;
			text-align: center;
			font-size: 32rpx;
			margin-top: 16rpx;
		}

		.default_btn {
			display: flex;
			justify-content: center;
			margin-top: 48rpx;

			:deep(.wd-button) {
				width: 274rpx !important;
				height: 100rpx !important;
				background: #405ff2 !important;
			}
		}
	}

	// #ifndef MP-WEIXIN
	.space_down {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: fixed;
		right: 48rpx;
		bottom: 110rpx;
	}

	// #endif
	// #ifdef MP-WEIXIN
	.space_down {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: fixed;
		right: 40rpx;
		bottom: 10rpx;
	}

	// #endif



	.space_popup {
		:deep(.wd-popup) {
			width: 450rpx !important;
			padding: 0 !important;
			border-radius: 30rpx !important;
		}

		:deep(.wd-gap) {
			margin: 0 48rpx !important;
		}

		.popup_text {
			padding: 48rpx 40rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>