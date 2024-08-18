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
            <wd-img :width="100" :height="44" :src="formState.captchaSrc" />
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
// const { success: showSuccess, error: showError } = useToast()
import { login, loadCaptcha } from '@/service/login'
import { randomNum } from '@/utils'

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
  showCaptcha: true,
})

console.log(formData)

const form = ref()

// 生成验证码
async function buildCaptcha() {
  try {
    formData.code = ''

    const res = await loadCaptcha({ key: formData.key }).catch((e) => {
      if (e.toString().indexOf('429') !== -1) {
        // showError('获取验证码过于频繁，请1分钟后再试')
      } else {
        // showError('加载验证码失败')
      }
      formState.captchaSrc = ''
    })
    if (res.byteLength <= 100) {
      // showError('系统维护中，请稍微再试~')
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

const handleSubmit = async () => {
  form.value
    .validate()
    .then(({ valid, errors }) => {
      if (valid) {
        // showSuccess('验证成功')
        login(formData)
      }
    })
    .catch((error) => {
      console.log(error, 'error')
    })
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
