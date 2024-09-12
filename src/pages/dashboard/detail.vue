<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '仪表盘',
  },
}
</route>
<template>
  <view
    class="overflow-hidden pt-2 "
    :style="{ paddingTop: safeAreaInsets?.top + 'px' }"
	style="background-color: #f5f5f5;min-height: 100vh;"
  >
			  <wd-navbar title="标题"  custom-style="background-color: #f5f5f5;">
				  <template #left>
				   <wd-icon name="arrow-left" size="22px" @click="handleBack"></wd-icon>
				  </template>
				<template #right>
				 <wd-icon name="more" size="22px"></wd-icon>
				</template>
			  </wd-navbar>
				<view class="device_conent flex flex-wrap items-center justify-between px-4">
					<view class="device_item" v-for="(item,index) in deviceList">
						<view class="device-power flex items-center">
							<image src="@/static/common/lamp.png" mode=""></image>
							<view class="flex flex-col justify-between">
								<view class="power">
									<text style="font-size:36rpx ;font-weight: 600;color:  #212121;">{{item.power}}</text>kW·h
								</view>
								<view class="price">{{item.price}}</view>
							</view>
						</view>
						<view class="device-wrap flex items-center justify-between">
							<view class="">
								<view class="name" style="font-size:32rpx ;font-weight: 600;color: #212121;margin-bottom: 4rpx;">
									{{item.name}}
								</view>
								<view class="num">
									{{item.num}}台设备
								</view>
							</view>
							<wd-icon name="chevron-right" size="22px"></wd-icon>
						</view>
					</view>
				</view>
  </view>
</template>

<script lang="ts" setup>
	import {ref} from "vue"
	// 获取屏幕边界到安全区域距离
	const { safeAreaInsets } = uni.getSystemInfoSync()
	// 设备数据
	const list = ref(['所有空间', '客厅', '卧室', '厨房', '浴室']);
	const selectedIndex = ref(0);
	const selectItem = (index : any) => {
		console.log(index);
		selectedIndex.value = index;
		// 在此处添加点击后跳转到页面或显示内容
		console.log('Selected value:', list.value[index]);
	};
	const handleBack=()=>{
		uni.navigateBack()
	}
	const deviceList=reactive([
		{
			// img:new URL('@/static/common/lamp.png', import.meta.url).href,
			power:"11",
			price:"22",
			name:"智能灯",
			num:12
		},
		{
			// img:new URL('@/static/common/lamp.png', import.meta.url).href,
			power:"11",
			price:"22",
			name:"智能灯",
			num:12
		},
		{
			// img:new URL('@/static/common/lamp.png', import.meta.url).href,
			power:"11",
			price:"22",
			name:"智能灯",
			num:12
		},
		{
			// img:new URL('@/static/common/lamp.png', import.meta.url).href,
			power:"11",
			price:"22",
			name:"智能灯",
			num:12
		}
	])
</script>

<style lang="scss" scoped>
		:deep(.wd-navbar__right){
			/*#ifdef MP*/
			right: 180rpx;
			/*#endif*/
		}
		.device_conent{
			.device_item{
				width: 280rpx;
				padding: 24rpx;
				margin-top: 32rpx;
				background-color: white;
				border-radius: 16rpx;
				font-size: 24rpx;
				color: #616161;
				.device-power{
					border-bottom: 1rpx solid #eeeeee;
					padding-bottom: 14rpx;
					image{
						width: 96rpx;
						height: 96rpx;
					}
	
				}
				.device-wrap{
					padding-top: 14rpx;
				}
			}
		}
</style>
