<route lang="json5">
	{
	layout: 'demo',
	style: {
	navigationStyle: 'custom',
	navigationBarTitleText: '手机号登录',
	},
	}
</route>
<template>
	<view class="bg-white overflow-hidden pt-2 px-4" :style="{ marginTop: safeAreaInsets?.top + 'px' }">
		<view style="margin-left:30rpx;" @click="toLogin"><wd-icon name="arrow-left1" size="22px"></wd-icon></view>
		<view class="wrap">
			<navigator open-type="navigateBack"></navigator>
			<view class="title-wrap">
				<text class="title">欢迎回来!</text>
				<text class="p">Welcome to Thinglinks!</text>
			</view>
			<view class="content">
				<view class="mailbox">
					<view class="input-title">手机号</view>
					<view class="input-wrap">
						<text class="iconfont icon-youxiang" style="margin-right: 26rpx; font-size: 40rpx"></text>
						<input :value="formData.username" focus placeholder="请输入手机号" />
					</view>
				</view>
				<view class="password">
					<view class="input-title">密码</view>
					<view class="input-wrap">
						<text class="iconfont icon-jiesuo" style="margin-right: 26rpx; font-size: 40rpx"></text>
						<input class="uni-input" v-model="formData.password" placeholder="请输入密码"
							:password="!showPassword" />
						<text class="iconfont" :class="[!showPassword ? 'icon-yanjing_yincang' : 'icon-yanjing']"
							@click="changePassword"></text>
					</view>
				</view>
				<view class="remember-wrap">
					<checkbox-group class="checkbox-wrap">
						<label>
							<checkbox class="checkbox" value="checkboxValue" />
							记住账号
						</label>
					</checkbox-group>
					<navigator class="forget" url="">忘记密码？</navigator>
				</view>
				<view class="division">
					<text>或</text>
				</view>
				<view class="btn-wrap">
					<view class="btn-item" v-for="(item, index) in list" :key="index">
						<text class="iconfont" :class="item.url"
							style="position: absolute; left: 36rpx; font-size: 52rpx"
							:style="{ color: item.color }"></text>
						<text>{{ item.text }}</text>
					</view>
				</view>
				<view class="login" @click="handleSubmit">登录</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'
	import { useToast } from 'wot-design-uni'
	import { login, loadCaptcha, getUserInfoById } from '@/service/login'
	import { randomNum } from '@/utils'
	import { useUserStore } from '@/store'
	// 获取屏幕边界到安全区域距离
	const { safeAreaInsets } = uni.getSystemInfoSync()

	const { success: showSuccess, error: showError } = useToast()

	const userStore = useUserStore()

	const formData = reactive({
		username: '',
		code: '',
		grantType: 'CAPTCHA',
		key: randomNum(24, 16),
	})
	const formState = reactive({
		loading: false,
		captchaSrc: '',
	})

	const form = ref()
	const showPassword = ref(false)

	const list = ref([
		{
			url: 'icon-weixin1',
			text: '微信账号登录',
			color: '#09bb07',
		},
		{
			url: 'icon-iconfontapple',
			text: 'Apple账号登录',
			color: '#000000',
		},
		{
			url: 'icon-zhifubaozhifu',
			text: '支付宝账号登录',
			color: '#02a9f1',
		},
	])

	const checkboxValue = ref('')

	const changePassword = () => {
		showPassword.value = !showPassword.value
	}

	const toLogin = () => {
		uni.navigateBack({
			delta: 1
		})
	}

	// 生成验证码
	async function buildCaptcha() {
		try {
			formData.code = ''
			const res = await loadCaptcha({ key: formData.key }).catch((e) => {
				console.log(e)
				if (e.toString().indexOf('429') !== -1) {
					showError('获取验证码过于频繁，请1分钟后再试')
				} else {
					showError('加载验证码失败')
				}
				formState.captchaSrc = ''
			})
			if (res?.byteLength <= 100) {
				showError('系统维护中，请稍微再试~')
				return ''
			}
			formState.captchaSrc =
				'data:image/png;base64,' +
				btoa(new Uint8Array(res).reduce((data, byte) => data + String.fromCharCode(byte), ''))
		} catch (error) {
			console.error(error)
			formState.captchaSrc = ''
			return ''
		}
	}

	const getUserInfoByIdHandle = async (params ?: any) => {
		const userInfo = await getUserInfoById(params)
		userStore.setState({
			userInfo: userInfo.data,
		})
		return userInfo?.data
	}

	const afterLogin = async () => {
		const { sessionTimeout } = userStore.state
		const userInfo = await getUserInfoByIdHandle()
		uni.switchTab({
			url: '/pages/space/index',
		})
		return userInfo
	}

	const handleSubmit = async () => {
		try {
			const { valid, errors } = await form.value.validate()
			if (!valid) return
			formState.loading = true
			const res = await login({ ...formData, grantType: formData.grantType, key: formData.key })

			const { token, tenantId, refreshToken, expiration } = res?.data as any
			userStore.setState({
				token,
				tenantId,
				refreshToken,
				expireTime: expiration,
			})
			return await afterLogin()
		} catch (error) {
			console.log(error)
		}
	}

	onMounted(() => {
		buildCaptcha()
	})
</script>

<style lang="scss">
	.wrap {
		box-sizing: border-box;
		padding: 0 48rpx 72rpx;

		.title-wrap {
			margin-top: 40rpx;
			margin-bottom: 64rpx;

			text {
				display: block;
			}

			.title {
				margin-bottom: 16rpx;
				font-size: 64rpx;
				font-weight: 700;
			}

			.p {
				font-size: 36rpx;
				color: #616161;
			}
		}

		.content {
			width: 100%;

			.input-title {
				margin-bottom: 16rpx;
				font-size: 36rpx;
				font-weight: 700;
			}

			.input-wrap {
				position: relative;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				width: 100%;
				height: 130rpx;
				padding: 0 46rpx;
				margin-bottom: 32rpx;
				background-color: #fafafa;
				border-radius: 20rpx;

				.icon {
					width: 36rpx;
					height: 32rpx;
					margin-right: 26rpx;
				}

				.show-icon {
					position: absolute;
					right: 46rpx;
					width: 28rpx;
					height: 28rpx;
				}

				input {
					width: 380rpx;
					height: 58rpx;
				}

				.icon-yanjing {
					margin-left: 20rpx;
					font-size: 45rpx;
				}

				.icon-yanjing_yincang {
					margin-left: 20rpx;
					font-size: 45rpx;
				}
			}

			.remember-wrap {
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				padding-top: 22rpx;

				.checkbox-wrap {
					font-size: 36rpx;

					.checkbox {
						margin-right: 32rpx;
					}
				}

				.forget {
					font-size: 36rpx;
					font-weight: 700;
					color: #334cc2;
				}
			}

			.division {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				margin-top: 68rpx;
				margin-bottom: 50rpx;

				text {
					position: relative;
				}

				text::after {
					position: absolute;
					top: 20rpx;
					right: 60rpx;
					width: 280rpx;
					height: 2rpx;
					content: '';
					background: #eeeeee;
				}

				text::before {
					position: absolute;
					top: 20rpx;
					left: 60rpx;
					width: 280rpx;
					height: 2rpx;
					content: '';
					background: #eeeeee;
				}
			}

			.btn-wrap {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 100%;
				margin-bottom: 12rpx;

				.btn-item {
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					height: 116rpx;
					margin-bottom: 30rpx;
					font-size: 32rpx;
					font-weight: 700;
					border: 2rpx solid #f3f3f3;
					border-radius: 116rpx; // 圆角的尺寸必须和heigt的值一样

					image {
						position: absolute;
						left: 36rpx;
					}
				}

				.btn-item:first-child {
					image {
						width: 52rpx;
						height: 42rpx;
					}
				}

				.btn-item:nth-child(2) {
					image {
						width: 38rpx;
						height: 48rpx;
					}
				}

				.btn-item:last-child {
					image {
						width: 52rpx;
						height: 52rpx;
					}
				}
			}

			.login {
				width: 100%;
				height: 116rpx;
				font-size: 32rpx;
				font-weight: 700;
				line-height: 116rpx;
				color: white;
				text-align: center;
				background-color: #475ee9;
				border-radius: 116rpx; // 圆角的尺寸必须和heigt的值一样
			}
		}
	}
</style>