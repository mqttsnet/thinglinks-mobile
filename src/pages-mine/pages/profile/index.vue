<route lang="json5" type="mine">
{
  style: {
    navigationBarTitleText: '个人信息',
  },
}
</route>
<template>
  <view
    class="bg-white overflow-hidden pt-2 px-4"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >
    <view class="container">
      <view class="avatar">
        <view class="avatar-img">
          <image :src="avatar || noAvatar" mode=""></image>
          <view class="edit">
            <wd-icon name="edit-1" size="20px"></wd-icon>
          </view>
        </view>
      </view>
      <view class="content">
        <view class="mailbox">
          <view class="input-title">账号</view>
          <view class="input-wrap">
            <input
              class="input"
              :value="UserInfo.username"
              focus
              placeholder="请输入账号"
              disabled
            />
          </view>
        </view>
        <view class="mailbox">
          <view class="input-title">邮箱</view>
          <view class="input-wrap">
            <text
              class="iconfont icon-youxiang"
              style="margin-right: 26rpx; font-size: 40rpx"
            ></text>
            <input class="input" :value="UserInfo.email" focus placeholder="请输入邮箱" disabled />
          </view>
        </view>
        <view class="mailbox">
          <view class="input-title">手机</view>
          <view class="input-wrap">
            <text class="iconfont icon-shouji" style="margin-right: 26rpx; font-size: 40rpx"></text>
            <input class="input" :value="UserInfo.mobile" focus placeholder="请输入手机号" />
          </view>
        </view>
        <view class="mailbox">
          <view class="input-title">昵称</view>
          <view class="input-wrap">
            <input class="input" :value="UserInfo.nickName" focus placeholder="请输入昵称" />
          </view>
        </view>
        <view class="mailbox">
          <view class="input-title">性别</view>
          <view class="input-wrap">
            <wd-select-picker
              style="width: 100%; background-color: #fafafa"
              v-model="userInfo.sex"
              :columns="columns"
              type="radio"
            ></wd-select-picker>
          </view>
        </view>
        <view class="mailbox">
          <view class="input-title">个人简介</view>
          <view class="input-textarea">
            <wd-textarea
              class="input"
              v-model="UserInfo.workDescribe"
              :maxlength="120"
              clearable
              show-word-limit
            />
          </view>
        </view>
        <view class="login" @click="handleSubmit">保存</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import noAvatar from '@/static/images/header.jpg'
import { getUserAvatar } from '@/service/mine'
import { useUserStore } from '@/store'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const userStore = useUserStore()
const formData = reactive({
  username: '',
  email: '',
  mobile: '',
  nickName: '',
  sex: '',
  workDescribe: '',
})
const columns = ref<Record<string, any>>([
  {
    value: '1',
    label: '男',
  },
  {
    value: '0',
    label: '女',
  },
])
const { userInfo } = userStore.state
// 获取用户信息
const UserInfo = ref<any>({})
const avatar = ref<string>('')
const getUserInfo = async () => {
  UserInfo.value = userInfo
  const res = await getUserAvatar([userInfo.avatarId])
  avatar.value = res.data[userInfo.avatarId] ? res.data[userInfo.avatarId] : noAvatar
}
if (userInfo) {
  getUserInfo()
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;

  .avatar {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 48rpx 0;
    text-align: center;

    .avatar-img {
      position: relative;
      width: 240rpx;
      height: 240rpx;

      image {
        width: 240rpx;
        height: 240rpx;
        border-radius: 50%;
      }

      .edit {
        position: absolute;
        right: 10rpx;
        bottom: 10rpx;
        padding: 5rpx;
        color: #ffffff;
        background-color: #405ff2;
        border-radius: 10rpx;
      }
    }
  }

  .content {
    width: 100%;

    .input-title {
      margin-bottom: 16rpx;
      font-size: 36rpx;
      font-weight: 700;
    }

    .uni-textarea-textarea {
      background-color: #fafafa;
    }

    .input-textarea {
      background-color: #fafafa;
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

      :deep(.wd-select-picker__cell) {
        background-color: #fafafa;
      }

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

      .input {
        width: 380rpx;
        height: 58rpx;
      }

      .wd-select-picker__cell[data-v-a87c2d37] {
        width: 380rpx;
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
