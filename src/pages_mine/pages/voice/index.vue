<route lang="json5" type="mine">
{
  style: {
    navigationBarTitleText: '语音助手',
  },
}
</route>
<template>
  <view class="" style="min-height: 100vh; background-color: #f8f8f8">
    <view class="container">
      <view class="wrap" @click="onJoin">
        <image src="../../../static/images/mine/voice/goole.png" mode=""></image>
        <text class="name">在线客服</text>
        <text class="status">未连接</text>
      </view>
      <view class="wrap">
        <image src="../../../static/images/mine/voice/amazon.png" mode=""></image>
        <text class="name">在线客服</text>
        <text class="status">未连接</text>
      </view>
      <view class="wrap">
        <image src="../../../static/images/mine/voice/microsoft.png" mode=""></image>
        <text class="name">在线客服</text>
        <text class="status">未连接</text>
      </view>
      <view class="wrap">
        <image src="../../../static/images/mine/voice/bixby.png" mode=""></image>
        <text class="name">在线客服</text>
        <text class="status">未连接</text>
      </view>
      <view class="wrap">
        <image src="../../../static/images/mine/voice/naver.png" mode=""></image>
        <text class="name">在线客服</text>
        <text class="status">未连接</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const onJoin = () => {
  uni.navigateTo({
    url: '/pages-mine/pages/voice/join',
  })
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;

  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32rpx 80rpx;
    margin: 24rpx;
    font-size: 28rpx;
    background-color: #ffffff;
    border-radius: 20rpx;

    image {
      width: 160rpx;
      height: 160rpx;
    }

    .name {
      margin: 32rpx 0 16rpx 0;
      color: #212121;
    }

    .status {
      color: #757575;
    }
  }
}
</style>
