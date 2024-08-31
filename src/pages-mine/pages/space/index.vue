<route lang="json5" type="mine">
{
  style: {
    navigationBarTitleText: '空间管理',
  },
}
</route>
<template>
  <view class="overflow-hidden pt-2 px-4" :style="{ marginTop: safeAreaInsets?.top + 'px' }">
    <view class="container">
      <view
        class="wrap flex justify-between items-center"
        v-for="(item, index) in list"
        :key="index"
      >
        <text>{{ item.name }}</text>
        <wd-icon name="chevron-right" size="22px"></wd-icon>
      </view>
    </view>
    <view class="btn flex flex-col">
      <wd-button size="large">创建居所</wd-button>
      <wd-button size="large" plain>加入居所</wd-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const checked = ref<boolean>(true)
const list = reactive([
  {
    name: '我的家',
  },
  {
    name: '我的公寓',
  },
  {
    name: '我的办公室',
  },
  {
    name: '我父母的房子',
  },
])
</script>

<style lang="scss" scoped>
body {
  height: 100%;
  background-color: #f8f8f8;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
  border-radius: 20rpx;

  .wrap {
    padding: 32rpx 0;
    margin: 0 32rpx;
    font-family: 'Urbanist', sans-serif;
    font-size: 38rpx;
    font-weight: 600;
    border-bottom: 1px #f5f5f5 solid;
  }
}

.btn {
  .wd-button {
    width: 100%;
    margin-top: 40rpx;
  }
}
</style>
