<route lang="json5" type="mine">
{
  style: {
    navigationBarTitleText: '应用程序语言',
  },
}
</route>
<template>
  <view class="overflow-hidden pt-2 px-4" style="min-height: 100vh; background-color: #f8f8f8">
    <view class="container">
      <view
        class="wrap flex items-center justify-between m-2.5"
        v-for="(item, index) in list"
        :key="index"
        :class="index == handleIndex ? 'active' : ''"
        @click="handleToggle(index)"
      >
        <view class="account">
          <image src="@/static/images/mine/apperance/ch.png" mode=""></image>
          <text class="name">{{ item.name }}</text>
        </view>
        <wd-icon name="check1" size="22px" :class="index == handleIndex ? 'dis' : ''"></wd-icon>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const list = reactive([
  {
    // img: new URL('@/static/images/mine/apperance/ch.png', import.meta.url).href,
    name: '简体中文',
  },
  {
    // img: new URL('@/static/images/mine/apperance/en.png', import.meta.url).href,
    name: '英语（UK）',
  },
])
const handleIndex = ref(0)
const handleToggle = (index) => {
  handleIndex.value = index
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #f8f8f8;

  .wrap {
    padding: 32rpx 48rpx;
    margin-bottom: 30rpx;
    background-color: #ffffff;
    border-radius: 20rpx;

    &.active {
      border: 1rpx solid #405ff2;
    }

    .account {
      display: flex;
      align-items: center;
      font-size: 36rpx;
      font-weight: 600;

      image {
        width: 120rpx;
        height: 90rpx;
        margin-right: 32rpx;
      }
    }

    .wd-icon {
      display: none;
      color: #405ff2;

      &.dis {
        display: block;
      }
    }
  }
}
</style>
