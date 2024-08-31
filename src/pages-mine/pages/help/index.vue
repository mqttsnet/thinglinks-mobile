<route lang="json5" type="mine">
{
  style: {
    navigationBarTitleText: '联系我们',
  },
}
</route>
<template>
  <view class="overflow-hidden pt-2 px-4" :style="{ marginTop: safeAreaInsets?.top + 'px' }">
    <view class="container">
      <view class="wrap flex items-center justify-between m-2.5">
        <view class="help-name">
          <text class="iconfont icon-zaixiankefu icon"></text>
          <text class="name">在线客服</text>
        </view>
        <wd-icon name="chevron-right" size="24px"></wd-icon>
      </view>
      <view class="wrap flex items-center justify-between m-2.5">
        <view class="help-name">
          <text class="iconfont icon-dianhuazixun icon"></text>
          <text class="name">电话咨询</text>
        </view>
        <wd-icon name="chevron-right" size="24px"></wd-icon>
      </view>
      <view class="wrap flex items-center justify-between m-2.5">
        <view class="help-name">
          <text class="iconfont icon-weixin icon"></text>
          <text class="name">微信咨询</text>
        </view>
        <wd-icon name="chevron-right" size="24px"></wd-icon>
      </view>
      <view class="wrap flex items-center justify-between m-2.5">
        <view class="help-name">
          <text class="iconfont icon-qq icon"></text>
          <text class="name">QQ咨询</text>
        </view>
        <wd-icon name="chevron-right" size="24px"></wd-icon>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style lang="scss" scoped>
body {
  height: 100%;
  background-color: #f8f8f8;
}

.container {
  background-color: #f8f8f8;

  .wrap {
    padding: 50rpx 48rpx;
    background-color: #ffffff;
    border-radius: 20rpx;

    .help-name {
      display: flex;
      align-items: center;
      font-size: 36rpx;
      font-weight: 600;
      color: #212121;

      .icon {
        margin-right: 30rpx;
        font-size: 42rpx;
        color: #155bd4;
      }
    }
  }
}
</style>
