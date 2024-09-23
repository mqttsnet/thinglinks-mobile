<route lang="json5" type="mine">
{
  style: {
    navigationBarTitleText: '通知',
  },
}
</route>
<template>
  <view class="bg-white overflow-hidden pt-2 px-4">
    <view class="container">
      <view class="wrap" v-for="(item, index) in list" :key="index">
        <text>{{ item }}</text>
        <wd-switch v-model="checked" size="24px" />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const checked = ref<boolean>(true)
const list = ref([
  '设备状态警报',
  '能源消耗警报',
  '账单提醒',
  '自动化更新',
  '设备维护提醒',
  '安全警报',
  '基于天气的建议',
  '社区更新',
  '空间邀请函',
  '用户访问警报',
  '客户支持更新',
  '反馈与更新',
])
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
