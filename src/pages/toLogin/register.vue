<route lang="json5">
	{
	style: {
	navigationStyle: 'custom',
	navigationBarTitleText: '注册',
	},
	}
</route>
<template>
	<view class="wrap">
		<navigator open-type="navigateBack"></navigator>
		<view class="title-wrap">
			<text class="title">欢迎回来!</text>
			<text class="p">登录后享受智能生活。</text>
		</view>
		<view class="content">
			<view class="mailbox">
				<view class="input-title">手机号</view>
				<view class="input-wrap">
					<image class="icon"
						src="https://files.axshare.com/gsc/QYC4FI/3c/aa/87/3caa87d5a7d543dba1a368caf8097dcd/images/17-%E7%99%BB%E5%BD%95_%E7%8A%B6%E6%80%81/exclude_u10.svg?pageId=502db071-ab16-4861-84a1-a3a49acdbb8f"
						mode=""></image>
					<input :value="formData.username" focus placeholder="请输入手机号" />
				</view>
			</view>
			<view class="password">
				<view class="input-title">密码</view>
				<view class="input-wrap">
					<image class="icon"
						src="https://files.axshare.com/gsc/QYC4FI/3c/aa/87/3caa87d5a7d543dba1a368caf8097dcd/images/17-%E7%99%BB%E5%BD%95_%E7%8A%B6%E6%80%81/exclude_u10.svg?pageId=502db071-ab16-4861-84a1-a3a49acdbb8f"
						mode=""></image>
					<input :value="formData.code" focus maxlength="6" placeholder="请输入密码" />
				</view>
			</view>
			<view class="remember-wrap">
				<checkbox-group class="checkbox-wrap">
					<label>
						<checkbox class="checkbox" value="checkboxValue" />记住账号
					</label>
				</checkbox-group>
				<navigator class="forget" url="">忘记密码？</navigator>
			</view>
			<view class="division">
				<text>或</text>
			</view>
			<view class="btn-wrap">
				<view class="btn-item" v-for="item in list">
					<image :src="item.url" alt="" />
					<text>{{item.text}}</text>
				</view>
			</view>
			<view class="login" @click="handleSubmit">登录</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from 'vue';
	import { useToast } from 'wot-design-uni'
	import { login, loadCaptcha, getUserInfoById } from '@/service/login'
	import { randomNum } from '@/utils'
	import { useUserStore } from '@/store'
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

	const list = ref([{
		url: 'https://files.axshare.com/gsc/QYC4FI/3c/aa/87/3caa87d5a7d543dba1a368caf8097dcd/images/16-%E7%99%BB%E5%BD%95/%E5%BD%A2%E7%8A%B6_u38.svg?pageId=832860fb-a8da-465c-9f69-43d7a5288514',
		text: '微信账号登录'
	},
	{
		url: 'https://files.axshare.com/gsc/QYC4FI/3c/aa/87/3caa87d5a7d543dba1a368caf8097dcd/images/16-%E7%99%BB%E5%BD%95/vect__u41.svg?pageId=832860fb-a8da-465c-9f69-43d7a5288514',
		text: 'Apple账号登录'
	},
	{
		url: 'https://files.axshare.com/gsc/QYC4FI/3c/aa/87/3caa87d5a7d543dba1a368caf8097dcd/images/16-%E7%99%BB%E5%BD%95/%E5%BD%A2%E7%8A%B6_u48.svg?pageId=832860fb-a8da-465c-9f69-43d7a5288514',
		text: '支付宝账号登录'
	}
	])

	const checkboxValue = ref('');
</script>

<style lang="scss">
	.wrap {
		padding: 0 48rpx 72rpx;
		box-sizing: border-box;

		.title-wrap {
			margin-top: 40rpx;
			margin-bottom: 64rpx;

			text {
				display: block;
			}

			.title {
				font-size: 64rpx;
				font-weight: 700;
				margin-bottom: 16rpx;
			}

			.p {
				font-size: 36rpx;
				color: #616161;
			}
		}

		.content {
			width: 100%;

			.input-title {
				font-size: 36rpx;
				font-weight: 700;
				margin-bottom: 16rpx;
			}

			.input-wrap {
				width: 100%;
				height: 130rpx;
				border-radius: 20rpx;
				background-color: #fafafa;
				display: flex;
				align-items: center;
				padding: 0 46rpx;
				box-sizing: border-box;
				margin-bottom: 32rpx;
				position: relative;

				.icon {
					width: 36rpx;
					height: 32rpx;
					margin-right: 26rpx;
				}

				.show-icon {
					width: 28rpx;
					height: 28rpx;
					position: absolute;
					right: 46rpx;
				}

				input {
					width: 280rpx;
					height: 58rpx;
				}
			}

			.remember-wrap {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 22rpx;
				box-sizing: border-box;

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
				width: 100%;
				margin-top: 68rpx;
				margin-bottom: 50rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				text {
					position: relative;
				}

				text::after {
					content: "";
					width: 280rpx;
					height: 2rpx;
					background: #eeeeee;
					position: absolute;
					right: 60rpx;
					top: 20rpx;
				}

				text::before {
					content: "";
					width: 280rpx;
					height: 2rpx;
					background: #eeeeee;
					position: absolute;
					left: 60rpx;
					top: 20rpx;
				}

			}

			.btn-wrap {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin-bottom: 12rpx;

				.btn-item {
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
				line-height: 116rpx;
				text-align: center;
				border-radius: 116rpx; // 圆角的尺寸必须和heigt的值一样
				background-color: #475ee9;
				color: white;
				font-size: 32rpx;
				font-weight: 700;
			}
		}
	}
</style>