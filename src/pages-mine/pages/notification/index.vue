<route lang="json5" type="mine">
{
  style: {
    navigationBarTitleText: '通知',
  },
}
</route>
<template>
  <view
    class="bg-white overflow-hidden pt-2 px-4"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >
    <view class="container">
      <view class="wrap">
        <text>设备状态警报</text>
        <wd-switch v-model="checked" size="24px" />
      </view>
      <view class="wrap">
        <text>能源消耗警报</text>
        <wd-switch v-model="checked" size="24px" />
      </view>
      <view class="wrap">
        <text>账单提醒</text>
        <wd-switch v-model="checked" size="24px" />
      </view>
      <view class="wrap">
        <text>自动化更新</text>
        <wd-switch v-model="checked" size="24px" />
      </view>
      <view class="wrap">
        <text>设备维护提醒</text>
        <wd-switch v-model="checked" size="24px" />
      </view>
      <view class="wrap">
        <text>安全警报</text>
        <wd-switch v-model="checked" size="24px" />
      </view>
      <view class="wrap">
        <text>基于天气的建议</text>
        <wd-switch v-model="checked" size="24px" />
      </view>
      <view class="wrap">
        <text>社区更新</text>
        <wd-switch v-model="checked" size="24px" />
      </view>
      <view class="wrap">
        <text>空间邀请函</text>
        <wd-switch v-model="checked" size="24px" />
      </view>
      <view class="wrap">
        <text>用户访问警报</text>
        <wd-switch v-model="checked" size="24px" />
      </view>
      <view class="wrap">
        <text>客户支持更新</text>
        <wd-switch v-model="checked" size="24px" />
      </view>
      <view class="wrap">
        <text>反馈与更新</text>
        <wd-switch v-model="checked" size="24px" />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const checked = ref<boolean>(true)
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;

  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 28rpx 24rpx;
    font-family: 'Urbanist', sans-serif;
    font-size: 38rpx;
    font-weight: 600;
  }
}
</style>
