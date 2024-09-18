<route lang="json5" type="mine">
{
  style: {
    navigationBarTitleText: '其他设置',
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
          <text class="wrap-title font-semibold">温度单位</text>
        </view>
        <view class="wrap-right flex items-center">
          <text>摄氏度</text>
          <wd-icon name="chevron-right" size="24px"></wd-icon>
        </view>
      </view>
      <view class="wrap flex items-center justify-between">
        <view class="wrap-left">
          <text class="wrap-title font-semibold">清除缓存</text>
        </view>
        <view class="wrap-right flex items-center">
          <text>111</text>
          <wd-icon name="chevron-right" size="24px"></wd-icon>
        </view>
      </view>
      <view class="wrap flex items-center justify-between">
        <view class="wrap-left">
          <text class="wrap-title font-semibold">实验特点</text>
        </view>
        <view class="wrap-right flex items-center">
          <wd-icon name="chevron-right" size="24px"></wd-icon>
        </view>
      </view>
      <view class="wrap flex items-center justify-between">
        <view class="wrap-left">
          <text class="wrap-title font-semibold">系统权限</text>
        </view>
        <view class="wrap-right flex items-center">
          <wd-icon name="chevron-right" size="24px"></wd-icon>
        </view>
      </view>
      <view class="wrap flex items-center justify-between">
        <view class="wrap-left">
          <text class="wrap-title font-semibold">法律信息</text>
        </view>
        <view class="wrap-right flex items-center">
          <wd-icon name="chevron-right" size="24px"></wd-icon>
        </view>
      </view>
      <view class="wrap flex items-center justify-between">
        <view class="wrap-left">
          <text class="wrap-title font-semibold">检查更新</text>
        </view>
        <view class="wrap-right flex items-center">
          <wd-icon name="chevron-right" size="24px"></wd-icon>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
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

    .wrap-right {
      text {
        margin-right: 30rpx;
        font-size: 32rpx;
        color: #212121;
      }
    }
  }
}
</style>
