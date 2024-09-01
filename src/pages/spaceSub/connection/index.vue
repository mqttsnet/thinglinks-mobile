<route lang="json5">
	{
	style: {
	navigationStyle: 'custom',
	navigationBarTitleText: '连接成功',
	},
	}
</route>
<template>
	<view class="connection_success">
		<view class="connection_icon" v-if="showSuccess">
			<wd-icon name="check" size="36px" color="#FFFFFF" class="icon"></wd-icon>
		</view>
		<view class="connection_icon" v-if="!showSuccess">
			<wd-icon name="close" size="36px" color="#FFFFFF" class="icon"></wd-icon>
		</view>
	</view>
	<view class="connection_tips">
		<view class="title">
			连接成功
		</view>
		<view class="text">
			您已连接到 {{deviceName}}
		</view>
	</view>
	<view class="connection_image">
		<image src="../../../static/avatar.jpg" mode=""></image>
	</view>
	<view class="connection_btn">
		<wd-button class="btn_index" @click="toSpace">去首页</wd-button>
		<wd-button class="btn_device">控制装置</wd-button>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	const showSuccess = ref<boolean>(true);
	const deviceName = ref('智能V1监控摄像头');

	const toSpace = () => {
		uni.switchTab({
			url: '/pages/space/index'
		});
	}
</script>

<style lang="scss" scoped>
	.connection_success {
		display: flex;
		justify-content: center;
		margin-top: 194rpx;

		.connection_icon {
			width: 160rpx;
			height: 160rpx;
			background: #405ff2;
			border-radius: 50%;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.connection_tips {
		text-align: center;
		margin-top: 64rpx;

		.title {
			font-weight: 700;
			color: #212121;
			font-size: 50rpx;
		}

		.text {
			color: #616161;
			margin-top: 24rpx;
			font-size: 32rpx;
		}
	}

	.connection_image {
		text-align: center;
		margin: 64rpx 0 242rpx 0;

		image {
			width: 600rpx;
			height: 600rpx;
		}
	}

	.connection_btn {
		display: flex;
		justify-content: space-around;
		align-items: center;


		.btn_index {
			width: 336rpx;
			height: 96rpx;
			background-color: #f0f2fe;
			color: #405ff2;
		}

		.btn_device {
			width: 336rpx;
			height: 96rpx;
			background-color: #405ff2;
			color: #FFFFFF;
		}

		:deep(.wd-button__text) {
			font-size: 30rpx;
		}
	}
</style>