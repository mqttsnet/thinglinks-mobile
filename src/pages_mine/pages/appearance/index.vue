<route lang="json5" type="mine">
{
  style: {
    navigationBarTitleText: '应用程序外观',
  },
}
</route>
<template>
  <view class="bg-white overflow-hidden pt-2 px-4">
    <view class="container">
      <view class="wrap flex items-center justify-between">
        <text>主题</text>
        <view class="center text-sm pr-6">浅色</view>
      </view>
      <view class="wrap flex items-center justify-between" @click="handleSelect">
        <text>应用程序语言</text>
        <view class="center text-sm">
          <text>简体中文</text>
          <wd-icon name="chevron-right" size="24px"></wd-icon>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const handleSelect = () => {
  uni.navigateTo({
    url: '/pages-mine/pages/appearance/language',
  })
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;

  .wrap {
    padding: 28rpx 24rpx;
    font-family: 'Urbanist', sans-serif;
    font-size: 38rpx;
    font-weight: 600;
  }
}
</style>
