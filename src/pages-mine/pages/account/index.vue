<route lang="json5" type="mine">
{
  style: {
    navigationBarTitleText: '账户与安全',
  },
}
</route>
<template>
  <view
    class="bg-white overflow-hidden pt-2 px-4"
  >
    <view class="container">
      <view class="wrap flex items-center justify-between">
        <view class="wrap-left">
          <text class="wrap-title font-semibold">生物识别 ID</text>
        </view>
        <wd-switch v-model="checked" size="24px" />
      </view>
      <view class="wrap flex items-center justify-between">
        <view class="wrap-left">
          <text class="wrap-title font-semibold">人脸识别</text>
        </view>
        <wd-switch v-model="checked" size="24px" />
      </view>
      <view class="wrap flex items-center justify-between">
        <view class="wrap-left">
          <text class="wrap-title font-semibold">短信验证</text>
        </view>
        <wd-switch v-model="checked" size="24px" />
      </view>
      <view class="wrap flex items-center justify-between">
        <view class="wrap-left">
          <text class="wrap-title font-semibold">身份验证</text>
        </view>
        <wd-switch v-model="checked" size="24px" />
      </view>
      <view class="wrap flex items-center justify-between">
        <view class="wrap-left">
          <text class="wrap-title font-semibold">更改密码</text>
        </view>
        <wd-icon name="chevron-right" size="24px"></wd-icon>
      </view>
      <view class="wrap flex items-center justify-between">
        <view class="wrap-left flex flex-col justify-between">
          <text class="wrap-title font-semibold">设备管理</text>
          <text class="wrap-desc">在您拥有的各种设备上管理您的帐户。</text>
        </view>
        <wd-icon name="chevron-right" size="24px"></wd-icon>
      </view>
      <view class="wrap flex items-center justify-between">
        <view class="wrap-left flex flex-col justify-between">
          <text class="wrap-title font-semibold">关闭账户</text>
          <text class="wrap-desc">暂时停用您的帐户。准备好后即可轻松重新激活。</text>
        </view>
        <wd-icon name="chevron-right" size="24px"></wd-icon>
      </view>
      <view class="wrap flex items-center justify-between" @click="handleDelaccount">
        <view class="wrap-left flex flex-col justify-between">
          <text class="wrap-title font-semibold delete-title">删除账户</text>
          <text class="wrap-desc">永久删除您的帐户和数据。谨慎行事。</text>
        </view>
        <wd-icon name="chevron-right" size="24px"></wd-icon>
      </view>
      <wd-popup
        v-model="show"
        position="bottom"
        custom-style="height: 230px;border-radius:32rpx 32rpx 0 0"
      >
        <view class="popup flex flex-col justify-center items-center">
          <view class="title">删除账户</view>
          <view class="conent">您确定要删除账户吗?</view>
          <view class="line"></view>
          <view class="logout-btn flex items-center justify-between">
            <wd-button plain @click="show = false">取消</wd-button>
            <wd-button @click="show = false">是的，删除</wd-button>
          </view>
        </view>
      </wd-popup>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const checked = ref<boolean>(true)
const show = ref(false)
const handleDelaccount = () => {
  show.value = true
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  .wrap {
    padding: 28rpx 24rpx;
    font-family: 'Urbanist', sans-serif;
    font-size: 38rpx;

    .wrap-title {
      padding: 12rpx 0;

      &.delete-title {
        color: #f75555;
      }
    }

    .wrap-desc {
      font-size: 26rpx;
      color: #616161;
    }
  }
}

.popup {
  .title {
    margin: 60rpx 0;
    font-size: 48rpx;
    font-weight: 600;
    color: #f75555;
  }

  .conent {
    margin: 10rpx 0 40rpx 0;
  }

  .line {
    width: 600rpx;
    height: 0.1px;
    background-color: #eeeeee;
    /* 线条颜色 */
  }

  .logout-btn {
    width: 80%;
    padding: 40rpx 0 0 0;
  }
}
</style>
