<route lang="json5" type="mine">
{
  style: {
    navigationBarTitleText: '语音助手',
  },
}
</route>
<template>
  <view class="bg-white overflow-hidden pt-2" :style="{ marginTop: safeAreaInsets?.top + 'px' }">
    <view class="container">
      <image src="../../../static/images/mine/voice/goole.png" mode=""></image>
      <view class="name m-2">谷歌助手</view>
      <view class="desc">
        嘿 Google，认识一下
        智慧空间!将这两者联系起来，您很快就会过上语音控制的生活。只需说话，您的设备就会聆听。
      </view>
      <wd-button class="join-btn" block @click="onJoin">连接到 Google 助手</wd-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const onJoin = () => {
  uni.showLoading({
    title: '正在将您的 智慧空间 帐户关联到 Google Assistant...',
  })
  setTimeout(function () {
    uni.hideLoading()
    uni.navigateTo({
      url: '/pages-mine/pages/voice/result',
    })
  }, 2000)
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
  bottom: 48rpx;
  left: 33rpx;
  width: 680rpx;
}
</style>
