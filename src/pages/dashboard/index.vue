<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '仪表盘',
  },
}
</route>
<template>
	<view class="overflow-hidden pt-2 px-4" :style="{ paddingTop: safeAreaInsets?.top + 'px' }"
		style="background-color: #f5f5f5;min-height: 100vh;">
		<view class="space_top">
			<view class="space_top_item" @click="toSelect">
				<view class="" style="font-size: 48rpx;color: #212121;font-weight: 650;">
					我的空间
				</view>
				<view class="">
					<wd-icon name="arrow-down" size="45rpx" color="#212121"></wd-icon>
				</view>
			</view>
			<view class="space_top_right">
				<view class="" style="margin-right: 60rpx;">
					<wd-calendar use-default-slot v-model="value" @confirm="handleConfirm4">
						<text class="iconfont icon-rili" style="font-size: 45rpx;"></text>
					</wd-calendar>
				</view>
				<view class="">
					<wd-icon name="more" size="22px"></wd-icon>
				</view>
			</view>
		</view>
		<view class="power-layout">
			<view class="power-month flex justify-around my-8">
				<view class="month flex">
					<image src="@/static/images/dashboard/total_power.png" mode=""></image>
					<view class="flex flex-col items-between" style="color: #616161; font-size: 20rpx;">
						<view class="mb-1">
							这个月
						</view>
						<view class="">
							<view class="">
								<text style="color: #212121;font-size: 40rpx;">877</text>kW·h
							</view>
							<view class="">
								11 元
							</view>
						</view>
					</view>
				</view>
				<view class="month flex">
					<image src="@/static/images/dashboard/last_power.png" mode=""></image>
					<view class="flex flex-col items-between" style="color: #616161; font-size: 20rpx;">
						<view class="mb-1">
							这个月
						</view>
						<view class="">
							<view class="">
								<text style="color: #212121;font-size: 40rpx;">877</text>kW·h
							</view>
							<view class="">
								11 元
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="prwer-data">
				<view class="date flex items-center justify-between pb-4"
					style="font-weight: 700;border-bottom: 1rpx solid #eeeeee;">
					<view class="title">
						统计数据
					</view>
					<!-- <view class=""> -->
						<wd-picker :columns="columns" v-model="clomnValue" use-default-slot>
						  <wd-button plain type="info">{{clomnValue}}<wd-icon name="chevron-down" size="20px"></wd-icon></wd-button>
						</wd-picker>
						<!-- 过去六个月 -->
					<!-- </view> -->
				</view>
				<view class="charts-box">
					<qiun-data-charts type="column" :chartData="chartData" />
				</view>
			</view>
		</view>
		<view class="device-list">
			<view class="device-title">
				<view class="" style="font-size: 48rpx;color: #212121;font-weight: 650;">
					设备
				</view>
				<wd-icon name="more" size="22px"></wd-icon>
			</view>
			<view class="device_conent flex flex-wrap items-center justify-between">
				<view class="device_item" v-for="(item,index) in deviceList" @click="toDetail">
					<view class="device-power flex items-center">
						<image src="@/static/common/lamp.png" mode=""></image>
						<view class="flex flex-col justify-between">
							<view class="power">
								<text
									style="font-size:36rpx ;font-weight: 600;color:  #212121;">{{item.power}}</text>kW·h
							</view>
							<view class="price">{{item.price}}</view>
						</view>
					</view>
					<view class="device-wrap flex items-center justify-between">
						<view class="">
							<view class="name"
								style="font-size:32rpx ;font-weight: 600;color: #212121;margin-bottom: 4rpx;">
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
	</view>
</template>

<script lang="ts" setup>
	import { ref, reactive } from "vue"
	// 获取屏幕边界到安全区域距离
	const { safeAreaInsets } = uni.getSystemInfoSync()
	// 跳转至选择页
	const toSelect = () => {
		uni.navigateTo({
			url: '/pages/spaceSub/select/index'
		});
	}
	const toDetail = () => {
		uni.navigateTo({
			url: "/pages/dashboard/detail"
		})
	}
	// 选择日期
	const value = ref<number>(Date.now())
	function handleConfirm({ value }) {
		console.log(value)
	}
const columns = ref(['今天', '本周', '上个月', '过去三个月', '过去六个月', '今年', '去年'])
const clomnValue=ref("过去六个月")
	// 设备数据
	const list = ref(['所有空间', '客厅', '卧室', '厨房', '浴室']);
	const selectedIndex = ref(0);
	const selectItem = (index : any) => {
		console.log(index);
		selectedIndex.value = index;
		// 在此处添加点击后跳转到页面或显示内容
		console.log('Selected value:', list.value[index]);
	};
	const chartData = ref({})
	const getServerData = () => {
		//模拟从服务器获取数据时的延时
		setTimeout(() => {
			let res = {
				categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
				series: [
					{
						name: "目标值",
						data: [35, 36, 31, 33, 13, 34]
					},
					{
						name: "完成量",
						data: [18, 27, 21, 24, 6, 28]
					}
				]
			};
			chartData.value = JSON.parse(JSON.stringify(res));
		}, 1000);
	}
	onMounted(() => {
		getServerData()
	})
	const deviceList = reactive([
		{
			power: "11",
			price: "22",
			name: "智能灯",
			num: 12
		},
		{
			power: "11",
			price: "22",
			name: "智能灯",
			num: 12
		},
		{
			power: "11",
			price: "22",
			name: "智能灯",
			num: 12
		},
		{
			power: "11",
			price: "22",
			name: "智能灯",
			num: 12
		}
	])
</script>

<style lang="scss" scoped>
	.space_top {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.space_top_item {
			display: flex;
			align-items: center;
		}
		.space_top_right {
			display: flex;
			align-items: center;
			/*#ifdef MP*/
			margin-right: 180rpx;
			/*#endif*/
		}
	}

	.power-layout {
		.power-month {
			image {
				width: 80rpx;
				height: 80rpx;
				margin-right: 24rpx;
			}
		}

		.prwer-data {
			background-color: white;
			padding: 32rpx;
			border-radius: 16rpx;
			margin-bottom: 48rpx;

			.charts-box {
				width: 100%;
				height: 300px;
			}
		}
	}

	.device-list {
		.device-title {
			display: flex;
			justify-content: space-between;
			align-items: center
		}

		.device_conent {
			.device_item {
				width: 280rpx;
				padding: 24rpx;
				margin-top: 32rpx;
				background-color: white;
				border-radius: 16rpx;
				font-size: 24rpx;
				color: #616161;

				.device-power {
					border-bottom: 1rpx solid #eeeeee;
					padding-bottom: 14rpx;

					image {
						width: 96rpx;
						height: 96rpx;
					}

				}

				.device-wrap {
					padding-top: 14rpx;
				}
			}
		}
	}
</style>