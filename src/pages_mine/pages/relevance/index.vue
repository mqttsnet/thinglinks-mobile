<route lang="json5" type="mine">
{
  style: {
    navigationBarTitleText: '关联账户',
  },
}
</route>
<template>
  <view class="overflow-hidden pt-2 px-4" style="min-height: 100vh; background-color: #f8f8f8">
    <view class="container">
      <view class="wrap flex items-center justify-between m-2.5">
        <view class="account">
          <image src="../../../static/images/mine/relevance/goole.png" mode=""></image>
          <text class="name">谷歌</text>
        </view>
        <text style="color: #757575">已关联</text>
      </view>
      <view class="wrap flex items-center justify-between m-2.5">
        <view class="account">
          <image src="../../../static/images/mine/relevance/iphone.png" mode=""></image>
          <text class="name">Apple ID</text>
        </view>
        <text style="color: #757575">已关联</text>
      </view>
      <view class="wrap flex items-center justify-between m-2.5">
        <view class="account">
          <image src="../../../static/images/mine/relevance/facebook.png" mode=""></image>
          <text class="name">Facebook</text>
        </view>
        <text style="color: #757575">已关联</text>
      </view>
      <view class="wrap flex items-center justify-between m-2.5">
        <view class="account">
          <image src="../../../static/images/mine/relevance/wx.png" mode=""></image>
          <text class="name">微信</text>
        </view>
        <text style="color: #757575">已关联</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style lang="scss" scoped>
.container {
  background-color: #f8f8f8;

  .wrap {
    padding: 40rpx 48rpx;
    margin-bottom: 30rpx;
    background-color: #ffffff;
    border-radius: 20rpx;

    .account {
      display: flex;
      align-items: center;
      font-size: 36rpx;
      font-weight: 600;
      color: #212121;

      image {
        width: 100rpx;
        height: 100rpx;
        margin-right: 30rpx;
      }

      .icon {
        margin-right: 30rpx;
        font-size: 42rpx;
        color: #155bd4;
      }
    }
  }
}
</style>
