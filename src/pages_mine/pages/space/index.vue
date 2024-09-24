<route lang="json5" type="mine">
{
  style: {
    navigationBarTitleText: '空间管理',
  },
}
</route>
<template>
  <view class="pt-2 px-4" style="min-height: 100vh; background-color: #f8f8f8">
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
      <view class="addBtn" size="large">创建居所</view>
      <view class="joinBtn" size="large" plain>加入居所</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
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
.container {
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
  .addBtn {
    width: 100%;
    height: 116rpx;
    margin: 10px 0;
    font-size: 32rpx;
    font-weight: 700;
    line-height: 116rpx;
    color: white;
    text-align: center;
    background-color: #405ff2;
    border-radius: 116rpx; // 圆角的尺寸必须和heigt的值一样
  }
  .joinBtn {
    width: 100%;
    height: 116rpx;
    font-size: 32rpx;
    font-weight: 700;
    line-height: 116rpx;
    // background-color: #405ff2;
    color: #405ff2;
    text-align: center;
    border: 1px #405ff2 solid;
    border-radius: 116rpx; // 圆角的尺寸必须和heigt的值一样
  }
}
</style>
