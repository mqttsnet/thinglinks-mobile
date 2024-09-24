<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '我的',
  },
}
</route>
<template>
  <view
    class="bg-white overflow-hidden pt-2 px-4"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >
    <view class="container">
      <view class="weep">
        <!-- <text class="iconfont icon-saoyisao"></text> -->
        <!-- <text class="iconfont icon-gengduo"></text> -->
      </view>
      <view class="header">
        <view class="user-info" @click="toProfile">
          <image class="avatar" :src="avatar || noAvatar" mode="aspectFill" />
          <view class="user-details">
            <text class="name">{{ UserInfo?.nickName || '未登录' }}</text>
            <!-- <text class="email">{{ UserInfo?.tenantName }}</text> -->
            <!-- <text class="email">{{ UserInfo?.tenantId }}</text>x -->
            <wd-tag type="primary" round>{{ UserInfo?.tenantName }}</wd-tag>
          </view>
        </view>
        <view class="nav-btn">
          <wd-icon name="arrow-right" size="22px"></wd-icon>
        </view>
      </view>
      <view class="text-line-container">
        <text class="text">功能</text>
        <view class="vertical-line"></view>
      </view>
      <view class="menu">
        <view class="menu-item flex items-center justify-between" @click="toSpace">
          <view class="menu-left">
            <wd-icon name="home1" size="22px"></wd-icon>
            <text class="menu-name">居所管理</text>
          </view>
          <view><wd-icon name="chevron-right" size="22px"></wd-icon></view>
        </view>
        <view class="menu-item flex items-center justify-between" @click="toVoice">
          <view class="menu-left">
            <text class="iconfont icon-maikefeng icon"></text>
            <text class="menu-name">语音助手</text>
          </view>
          <view><wd-icon name="chevron-right" size="22px"></wd-icon></view>
        </view>
        <view class="menu-item flex items-center justify-between" @click="toNotification">
          <view class="menu-left">
            <wd-icon name="notification" size="22px"></wd-icon>
            <text class="menu-name">通知管理</text>
          </view>
          <view><wd-icon name="chevron-right" size="22px"></wd-icon></view>
        </view>
        <view class="menu-item flex items-center justify-between" @click="toAccount">
          <view class="menu-left">
            <wd-icon name="secured" size="22px"></wd-icon>
            <text class="menu-name">账户与安全</text>
          </view>
          <view><wd-icon name="chevron-right" size="22px"></wd-icon></view>
        </view>
        <view class="menu-item flex items-center justify-between" @click="toRselevance">
          <view class="menu-left">
            <wd-icon name="link" size="22px"></wd-icon>
            <text class="menu-name">关联账户</text>
          </view>
          <view><wd-icon name="chevron-right" size="22px"></wd-icon></view>
        </view>
        <view class="menu-item flex items-center justify-between" @click="toAppearance">
          <view class="menu-left">
            <wd-icon name="browse" size="22px"></wd-icon>
            <text class="menu-name">应用程序外观</text>
          </view>
          <view><wd-icon name="chevron-right" size="22px"></wd-icon></view>
        </view>
        <view class="menu-item flex items-center justify-between" @click="toSetting">
          <view class="menu-left">
            <text class="iconfont icon-shezhi icon"></text>
            <text class="menu-name">其他设置</text>
          </view>
          <view><wd-icon name="chevron-right" size="22px"></wd-icon></view>
        </view>
      </view>
      <view class="text-line-container">
        <text class="text">支持</text>
        <view class="vertical-line"></view>
      </view>
      <view class="menu">
        <view class="menu-item flex items-center justify-between" @click="toData">
          <view class="menu-left">
            <text class="iconfont icon-dashujufenxi icon"></text>
            <text class="menu-name">数据与分析</text>
          </view>
          <view><wd-icon name="chevron-right" size="22px"></wd-icon></view>
        </view>
        <view class="menu-item flex items-center justify-between" @click="toHelp">
          <view class="menu-left">
            <text class="iconfont icon-bangzhuzhichi_chanpinwendang icon"></text>
            <text class="menu-name">帮助支持</text>
          </view>
          <view><wd-icon name="chevron-right" size="22px"></wd-icon></view>
        </view>
        <view class="menu-item flex items-center justify-between" @click="switchDepartments">
          <view class="menu-left">
            <wd-icon class="icon" name="swap" size="22px"></wd-icon>
            <text class="menu-name">切换企业</text>
          </view>
          <view><wd-icon name="chevron-right" size="22px"></wd-icon></view>
        </view>
        <view class="menu-item" @click="logOutBtn">
          <view class="menu-left menu-login">
            <text class="iconfont icon-tuichudenglu loginiIcon icon"></text>
            <text class="menu-name">退出登录</text>
          </view>
        </view>
      </view>
    </view>
    <wd-popup
      v-model="show"
      position="bottom"
      custom-style="height: 270px;border-radius:32rpx 32rpx 0 0"
    >
      <view class="popup flex flex-col justify-center items-center">
        <view class="title">退出登录</view>
        <view class="conent">您确定要退出吗?</view>
        <view class="line"></view>
        <view class="logout-btn flex items-center justify-between">
          <wd-button plain @click="show = false">取消</wd-button>
          <wd-button @click="logOut">是的，退出</wd-button>
        </view>
      </view>
    </wd-popup>
    <!-- 切换企业 -->
    <wd-popup
      v-model="showSwitchDept"
      custom-style="padding: 30px 40px;"
      @close="showSwitchDept = false"
    >
      <div>
        <div class="title">切换企业</div>
        <wd-swiper
          :list="deptList"
          :autoplay="false"
          v-model:current="currentDept"
          :indicator="{ showControls: true }"
          :loop="false"
          @change="changeDept"
        ></wd-swiper>
        <div class="switch-dept-footer">
          <wd-button type="info" @click="showSwitchDept = false">取消</wd-button>
          <wd-button>确认</wd-button>
        </div>
      </div>
    </wd-popup>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useToast } from 'wot-design-uni'
import noAvatar from '@/static/images/header.jpg'
import { getUserAvatar, logout, getUserInfoById } from '@/service/mine'
import { useUserStore } from '@/store'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const userStore = useUserStore()
const { userInfo } = userStore.state
const UserInfo = ref<any>({})
const show = ref(false)
const avatar = ref<string>('')
// 获取用户信息
const getUserInfo = async () => {
  UserInfo.value = userInfo
  const res = await getUserAvatar([userInfo.avatarId])
  avatar.value = res.data[userInfo.avatarId] ? res.data[userInfo.avatarId] : noAvatar
}
if (userInfo) {
  getUserInfo()
}
// 退出登录
const logOutBtn = () => {
  show.value = true
}
const logOut = async () => {
  await logout({ Token: userStore.state.token })
  uni.clearStorage()
  show.value = false
}
// 个人中心
const toast = useToast()
const toProfile = () => {
  if (userInfo) {
    uni.navigateTo({
      url: '/pages_mine/pages/profile/index',
    })
  } else {
    toast.warning('未登录，不可查看个人信息哦!')
  }
}
// 居所管理
const toSpace = () => {
  uni.navigateTo({
    url: '/pages_mine/pages/space/index',
  })
}
// 语音助手
const toVoice = () => {
  uni.navigateTo({
    url: '/pages_mine/pages/voice/index',
  })
}
// 通知设置
const toNotification = () => {
  uni.navigateTo({
    url: '/pages_mine/pages/notification/index',
  })
}
// 账户安全
const toAccount = () => {
  uni.navigateTo({
    url: '/pages_mine/pages/account/index',
  })
}
// 关联账户
const toRselevance = () => {
  uni.navigateTo({
    url: '/pages_mine/pages/relevance/index',
  })
}
// 应用程序外观
const toAppearance = () => {
  uni.navigateTo({
    url: '/pages_mine/pages/appearance/index',
  })
}
// 其他设置
const toSetting = () => {
  uni.navigateTo({
    url: '/pages_mine/pages/setting/index',
  })
}
// 数据与分析
const toData = () => {
  uni.navigateTo({
    url: '/pages_mine/pages/data/index',
  })
}
// 帮助支持
const toHelp = () => {
  uni.navigateTo({
    url: '/pages_mine/pages/help/index',
  })
}

// 切换企业和组织
const showSwitchDept = ref(false)
const deptList = ref([])
const currentDept = ref(0)
const switchDepartments = () => {
  showSwitchDept.value = true
}
const changeDept = () => {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;

  .weep {
    display: flex;
    justify-content: flex-end;
    margin-top: 10rpx;
    /*#ifdef MP*/
    margin-right: 180rpx;
    /*#endif*/
    text {
      margin-left: 32rpx;
      font-size: 36rpx;
      font-weight: 700;
    }
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30rpx;
  margin-top: 44rpx;

  .user-info {
    display: flex;
    align-items: center;

    .avatar {
      box-sizing: border-box;
      width: 120rpx;
      height: 120rpx;
      border-radius: 60rpx;
    }

    .user-details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 20rpx;

      .name {
        box-sizing: border-box;
        font-family: 'Urbanist', sans-serif;
        font-weight: 700;
        color: #212121;
        text-align: left;
        background-color: rgba(255, 255, 255, 0);
      }

      .email {
        box-sizing: border-box;
        width: 138rpx;
        font-family: 'Urbanist', sans-serif;
        font-weight: 500;
        color: #616161;
        text-align: left;
        background-color: rgba(255, 255, 255, 0);
      }
    }
  }

  .nav-btn {
    // padding-right: 10rpx;
  }
}

.text-line-container {
  display: flex;
  align-items: center;
  padding: 30rpx 30rpx 10rpx 30rpx;

  .text {
    margin-right: 20rpx;
    font-weight: 600;
    color: #9e9e9e;
  }

  .vertical-line {
    flex: 1;
    height: 0.1px;
    background-color: #eeeeee;
    /* 线条颜色 */
  }
}

.menu {
  .menu-item {
    padding: 30rpx;

    .menu-left {
      .icon {
        font-size: 44rpx;
      }

      .menu-name {
        margin-left: 44rpx;
        font-size: 36rpx;
        font-weight: 700;
        color: #212121;
      }
    }

    .menu-login {
      color: #f75555;

      .menu-name {
        color: #f75555;
      }
    }
  }
}

.popup {
  margin-bottom: 0;
  .title {
    margin: 60rpx 0;
    font-size: 48rpx;
    font-weight: 600;
    color: #f75555;
  }

  .conent {
    margin: 10rpx 0 40rpx 0;
  }

  .line {
    width: 600rpx;
    height: 0.1px;
    background-color: #eeeeee;
    /* 线条颜色 */
  }

  .logout-btn {
    width: 80%;
    padding: 40rpx 0 0 0;
  }
}
</style>
