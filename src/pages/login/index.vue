<route lang="json5" type="home">
	{
	style: {
	navigationStyle: 'custom',
	navigationBarTitleText: '登录',
	},
	}
</route>
<template>
	<view class="bg-white overflow-hidden pt-2 px-4" :style="{ marginTop: safeAreaInsets?.top + 'px' }">
		<view class="wrap">
			<image class="logo" src="@/static/images/logo.png"></image>
			<view class="title-wrap">
				<text class="title">探索无限可能!</text>
				<text class="p">让智慧生活变得更加舒适、便捷和安全</text>
			</view>
			<view class="middle">
				<view class="middle-item" v-for="(item, index) in list" :key="index" @click="handleClick(index)">
					<text class="iconfont" :class="item.url" style="font-size: 52rpx;position: absolute;left: 36rpx;"
						:style="{ color: item.color }"></text>
					<text>{{ item.text }}</text>
				</view>
			</view>
			<view class="btn-wrap">
				<navigator class="register" url="/pages_login/pages/register/index">注册</navigator>
				<navigator class="login" url="/pages_login/pages/password/index">登录</navigator>
			</view>
			<view class="footer">
				<text class="privacy">隐私政策</text>
				<view class="dot"></view>
				<text class="serve">服务条款</text>
			</view>
		</view>
	</view>

</template>

<script setup lang="ts">
	// 获取屏幕边界到安全区域距离
	const { safeAreaInsets } = uni.getSystemInfoSync()
	import {
		ref
	} from 'vue';

	// 登陆方式
	const list = ref([{
		url: 'icon-weixin1',
		text: '微信账号登录',
		color: '#09bb07'
	},
	{
		url: 'icon-iconfontapple',
		text: 'Apple账号登录',
		color: '#000000'
	},
	{
		url: 'icon-zhifubaozhifu',
		text: '支付宝账号登录',
		color: '#02a9f1'
	},
	{
		url: 'icon-shouji',
		text: '手机号登录',
		color: '#405ff2'
	}
	])

	const handleClick = (index : any) => {
		switch (index) {
			case 0:
				loginWithWeChat();
				break;
			case 1:
				loginWithApple();
				break;
			case 2:
				loginWithAlipay();
				break;
			case 3:
				loginWithPhone();
				break;
			default:
				console.log('Unknown option');
		}
	};

	const loginWithWeChat = () => {
		console.log('微信账号登录');
	};

	const loginWithApple = () => {
		console.log('Apple账号登录');
	};

	const loginWithAlipay = () => {
		console.log('支付宝账号登录');
	};

	const loginWithPhone = () => {
		console.log('手机号登录');
		uni.navigateTo({
			url: '/pages_login/pages/phone/index'
		})
	};
</script>

<style lang="scss">
	.wrap {
		padding: 0 48rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.logo {
			width: 180rpx;
			height: 184rpx;
			margin-top: 45rpx;
		}

		.title-wrap {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-top: 30rpx;

			.title {
				font-size: 55rpx;
				font-family: "Urbanist", sans-serif;
				font-weight: 700;
				letter-spacing: 4rpx;
				margin-bottom: 20rpx;
			}

			.p {
				font-size: 28rpx;
				color: #616161;
			}
		}

		.middle {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 40rpx 0;

			.middle-item {
				width: 100%;
				height: 116rpx;
				margin-bottom: 30rpx;
				border: 2rpx solid #f3f3f3;
				border-radius: 116rpx; // 圆角的尺寸必须和heigt的值一样
				font-size: 32rpx;
				font-weight: 700;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;

				image {
					position: absolute;
					left: 36rpx;
				}
			}

			.middle-item:first-child {
				image {
					width: 52rpx;
					height: 42rpx;
				}
			}

			.middle-item:nth-child(2) {
				image {
					width: 38rpx;
					height: 48rpx;
				}
			}

			.middle-item:nth-child(3) {
				image {
					width: 52rpx;
					height: 52rpx;
				}
			}

			.middle-item:last-child {
				image {
					width: 40rpx;
					height: 52rpx;
				}
			}
		}

		.btn-wrap {
			width: 100%;
			margin-bottom: 96rpx;

			.register {
				width: 100%;
				height: 116rpx;
				line-height: 116rpx;
				text-align: center;
				border-radius: 116rpx; // 圆角的尺寸必须和heigt的值一样
				background-color: #475ee9;
				color: white;
				font-size: 32rpx;
				font-weight: 700;
				margin-bottom: 42rpx;
			}

			.login {
				width: 100%;
				height: 116rpx;
				line-height: 116rpx;
				text-align: center;
				border-radius: 116rpx; // 圆角的尺寸必须和heigt的值一样
				background-color: #eff4ff;
				color: #3474ff;
				font-size: 32rpx;
				font-weight: 700;
			}
		}

		.footer {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28rpx;
			color: #616161;
			margin-bottom: 40rpx;

			.privacy {
				margin-right: 46rpx;
			}

			.dot {
				width: 6rpx;
				height: 6rpx;
				background-color: #616161;
				border-radius: 50%;
				margin-right: 72rpx;
			}
		}
	}
</style>