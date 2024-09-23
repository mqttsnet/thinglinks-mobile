<route lang="json5">
{
  layout: 'demo',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '登录',
  },
}
</route>
<template>
  <view
    class="bg-white overflow-hidden pt-2 px-4"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >
    <view class="wrap">
      <navigator open-type="navigateBack"></navigator>
      <view class="title-wrap">
        <text class="title">欢迎回来!</text>
        <text class="p">登录后享受智能生活。</text>
      </view>
      <view class="content">
        <view class="mailbox">
          <view class="input-title">用户名</view>
          <view class="input-wrap">
            <text
              class="iconfont icon-youxiang"
              style="margin-right: 26rpx; font-size: 40rpx"
            ></text>
            <input v-model="formData.username" focus placeholder="请输入用户名" />
          </view>
        </view>
        <view class="password">
          <view class="input-title">密码</view>
          <view class="input-wrap">
            <text class="iconfont icon-jiesuo" style="margin-right: 26rpx; font-size: 40rpx"></text>
            <input
              class="uni-input"
              v-model="formData.password"
              placeholder="请输入密码"
              :type="showPassword ? 'text' : 'password'"
            />
            <text
              class="iconfont"
              :class="showPassword ? 'icon-yanjing' : 'icon-yanjing_yincang'"
              @click="changePassword"
            ></text>
          </view>
        </view>
        <view class="password">
          <view class="input-title">验证码</view>
          <view class="input-wrap">
            <text
              class="iconfont icon-yanzhengma"
              style="margin-right: 26rpx; font-size: 40rpx"
            ></text>
            <input v-model="formData.code" focus maxlength="6" placeholder="请输入验证码" />
            <image
              v-if="formState.captchaSrc"
              :src="formState.captchaSrc"
              @click="buildCaptcha"
              mode=""
              style="width: 200rpx; height: 88rpx"
            ></image>
            <image
              v-else
              :src="noCaptcha"
              @click="buildCaptcha"
              mode=""
              style="width: 200rpx; height: 88rpx"
            ></image>
          </view>
        </view>
        <view class="remember-wrap">
          <checkbox-group class="checkbox-wrap">
            <label>
              <checkbox class="checkbox" value="checkboxValue" />
              记住账号
            </label>
          </checkbox-group>
          <navigator class="forget">忘记密码？</navigator>
        </view>
        <view class="division">
          <text>或</text>
        </view>
        <view class="btn-wrap">
          <view
            class="btn-item"
            v-for="(item, index) in list"
            :key="index"
            @click="handleClick(index)"
          >
            <text
              class="iconfont"
              :class="item.url"
              style="position: absolute; left: 36rpx; font-size: 52rpx"
              :style="{ color: item.color }"
            ></text>
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
  password: '',
  code: '',
  grantType: 'CAPTCHA',
  key: randomNum(24, 16),
})
const formState = reactive({
  loading: false,
  captchaSrc: '',
})
const showPassword = ref(false)

const changePassword = () => {
  showPassword.value = !showPassword.value
}
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
  {
    url: 'icon-shouji',
    text: '手机号登录',
    color: '#405ff2',
  },
])

const checkboxValue = ref('')

// 自定义 Base64 编码函数
function base64Encode(input: Uint8Array): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  const str = input.reduce((data, byte) => data + String.fromCharCode(byte), '')
  let output = ''

  for (
    let block = 0, charCode, i = 0, map = chars;
    str.charAt(i | 0) || ((map = '='), i % 1);
    output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))
  ) {
    charCode = str.charCodeAt((i += 3 / 4))
    block = (block << 8) | charCode
  }

  return output
}
// 生成验证码
async function buildCaptcha() {
  formData.key = randomNum(24, 16)
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
    // formState.captchaSrc =
    // 	'data:image/png;base64,' +
    // 	btoa(new Uint8Array(res).reduce((data, byte) => data + String.fromCharCode(byte), ''))
    formState.captchaSrc = 'data:image/png;base64,' + base64Encode(new Uint8Array(res))
  } catch (error) {
    console.error(error)
    formState.captchaSrc = ''
    return ''
  }
}

// 验证码生成函数
// async function buildCaptcha() {
// 	try {
// 		formData.code = '';
// 		const res = await loadCaptcha({ key: formData.key }).catch((e) => {
// 			console.log(e);
// 			if (e?.message && e.message.indexOf('429') !== -1) { // 修改错误类型的检查
// 				showError('获取验证码过于频繁，请1分钟后再试');
// 			} else {
// 				showError('加载验证码失败');
// 			}
// 			formState.captchaSrc = '';
// 			return null; // 确保返回空值，不会影响后续代码
// 		});

// 		if (!res || res.byteLength <= 100) { // 检查 res 是否为 null 或 undefined
// 			showError('系统维护中，请稍后再试~');
// 			return '';
// 		}

// 		// 使用自定义的 Base64 编码函数替代 btoa
// 		formState.captchaSrc = 'data:image/png;base64,' + base64Encode(new Uint8Array(res));
// 	} catch (error) {
// 		console.error("Error in buildCaptcha:", error);
// 		showError('加载验证码失败');
// 		formState.captchaSrc = '';
// 	}
// }

const getUserInfoByIdHandle = async (params?: any) => {
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
    // 检查用户名、密码和验证码是否为空
    if (!formData.username) {
      uni.showToast({
        title: '请输入用户名',
        icon: 'none',
      })
      return
    }

    if (!formData.password) {
      uni.showToast({
        title: '请输入密码',
        icon: 'none',
      })
      return
    }

    if (!formData.code) {
      uni.showToast({
        title: '请输入验证码',
        icon: 'none',
      })
      return
    }
    console.log('Submitting form with data:', formData)
    const res = await login({ ...formData, grantType: formData.grantType, key: formData.key })
    console.log(res)
    if (res?.data) {
      const { token, tenantId, refreshToken, expiration } = res.data
      userStore.setState({
        token,
        tenantId,
        refreshToken,
        expireTime: expiration,
      })
      return await afterLogin()
    } else {
      console.error('Login failed: no data in response')
      uni.showToast({
        title: '登录失败，未返回数据',
        icon: 'none',
      })
    }
  } catch (error) {
    console.error('Error in handleSubmit:', error)
    uni.showToast({
      title: error.message || '登录失败，出现错误',
      icon: 'none',
    })
  }
}

const handleClick = (index: any) => {
  switch (index) {
    case 0:
      loginWithWeChat()
      break
    case 1:
      loginWithApple()
      break
    case 2:
      loginWithAlipay()
      break
    case 3:
      loginWithPhone()
      break
    default:
      console.log('Unknown option')
  }
}
const loginWithWeChat = () => {
  console.log('手机号登录')
  uni.switchTab({
    url: '/pages/space/index',
  })
}
const loginWithApple = () => {
  console.log('手机号登录')
  uni.switchTab({
    url: '/pages/space/index',
  })
}
const loginWithAlipay = () => {
  console.log('手机号登录')
  uni.switchTab({
    url: '/pages/space/index',
  })
}

const loginWithPhone = () => {
  console.log('手机号登录')
  uni.switchTab({
    url: '/pages/space/index',
  })
}

onMounted(() => {
  buildCaptcha()
})
</script>

<style lang="scss" scoped>
@font-face {
  font-family: CustomFont;
  src: url('./iconfont.ttf');
}

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
      }

      input {
        width: 280rpx;
        height: 58rpx;
      }

      .icon-yanjing {
        margin-left: 200rpx;
        font-size: 45rpx;
      }

      .icon-yanjing_yincang {
        margin-left: 200rpx;
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

      .btn-item:nth-child(3) {
        image {
          width: 52rpx;
          height: 52rpx;
        }
      }

      .btn-item:last-child {
        image {
          width: 40rpx;
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
