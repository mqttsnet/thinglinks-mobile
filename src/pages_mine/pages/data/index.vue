<route lang="json5" type="mine">
{
  style: {
    navigationBarTitleText: '数据与分析',
  },
}
</route>
<template>
  <view class="bg-white overflow-hidden px-2">
    <view class="container">
      <view class="wrap flex items-center justify-between">
        <view class="wrap-left flex flex-col justify-between">
          <text class="wrap-title font-semibold">数据使用</text>
          <text class="wrap-desc">控制如何使用您的数据进行分析。定制您的偏好。</text>
        </view>
        <view class="center text-sm">
          <wd-icon name="chevron-right" size="24px"></wd-icon>
        </view>
      </view>
      <view class="wrap flex items-center justify-between">
        <view class="wrap-left flex flex-col justify-between">
          <text class="wrap-title font-semibold">广告偏好</text>
          <text class="wrap-desc">管理广告个性化设置。走制您的广告体验。</text>
        </view>
        <view class="center text-sm">
          <wd-icon name="chevron-right" size="24px"></wd-icon>
        </view>
      </view>
      <view class="wrap flex items-center justify-between">
        <view class="wrap-left flex flex-col justify-between">
          <text class="wrap-title font-semibold">下载我的数据</text>
          <text class="wrap-desc">索取您的数据副本。</text>
        </view>
        <view class="center text-sm">
          <wd-icon name="chevron-right" size="24px"></wd-icon>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
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

    .wrap-title {
      padding: 12rpx 0;
    }

    .wrap-desc {
      font-size: 28rpx;
      color: #616161;
    }
  }
}
</style>
