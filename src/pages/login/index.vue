<template>
  <view class="">
    <wd-form ref="form" :model="formData">
      <wd-cell-group border>
        <wd-input
          label="用户名"
          label-width="100px"
          prop="username"
          clearable
          v-model="formData.username"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <wd-input
          label="密码"
          label-width="100px"
          prop="password"
          show-password
          clearable
          v-model="formData.password"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <wd-row>
          <wd-col :span="16">
            <wd-input
              label="验证码"
              label-width="100px"
              prop="code"
              v-model="formData.code"
              placeholder="请输入验证码"
              :rules="[{ required: true, message: '请填写验证码' }]"
            />
          </wd-col>
          <wd-col :span="8">
            <wd-img
              v-if="formState.captchaSrc"
              :width="100"
              :height="44"
              :src="formState.captchaSrc"
              @click="buildCaptcha"
            />
            <wd-img v-else :width="100" :height="44" :src="noCaptcha" @click="buildCaptcha" />
          </wd-col>
        </wd-row>
      </wd-cell-group>
      <view class="footer">
        <wd-button type="primary" size="large" @click="handleSubmit" block>提交</wd-button>
      </view>
    </wd-form>
  </view>
</template>

<script lang="ts" setup>
import noCaptcha from '../../static/images/login/captcha_404.png'
import { useToast } from 'wot-design-uni'
import { login, loadCaptcha, getUserInfoById } from '@/service/login'
import { randomNum } from '@/utils'
import { useUserStore } from '@/store'
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
    url: '/pages/index/index',
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

<style lang="scss" scoped>
.footer {
  padding: 12px;
}
</style>
