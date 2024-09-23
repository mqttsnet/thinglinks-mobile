<route lang="json5" type="mine">
{
  style: {
    navigationBarTitleText: '语音助手',
  },
}
</route>
<template>
  <view class="bg-white overflow-hidden pt-2">
    <view class="container">
      <image src="../../../static/images/mine/voice/goole.png" mode=""></image>
      <view class="name m-2">已连接！</view>
      <view class="desc">
        您的 智慧空间 帐户现已与 Google Assistant无缝链接。准备好体验终极的免提控制。
      </view>
      <view class="join-btn" @click="onSuccess">好的</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const onSuccess = () => {
  uni.navigateTo({
    url: '/pages-mine/pages/voice/index',
  })
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30%;
  text-align: center;

  image {
    display: inline-block;
    width: 400rpx;
    height: 400rpx;
  }

  .name {
    font-size: 50rpx;
    font-weight: 600;
    color: #212121;
  }

  .desc {
    padding: 0 48rpx;
    font-family: 'Urbanist', sans-serif;
    font-size: 34rpx;
    color: #616161;
  }
}

.join-btn {
  position: fixed;
  bottom: 10px;
  left: 10px;
  width: 95%;
  height: 116rpx;
  font-size: 32rpx;
  font-weight: 700;
  line-height: 116rpx;
  color: white;
  text-align: center;
  background-color: #405ff2;
  border-radius: 116rpx; // 圆角的尺寸必须和heigt的值一样
}
</style>
