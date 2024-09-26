<route lang="json5">
	{
	style: {
	navigationStyle: 'custom',
	navigationBarTitleText: '我的空间',
	navigationBarBackgroundColor: '#6C6F77'
	},
	}
</route>
<template>
	<view class="overflow-hidden pt-2 px-4" :style="{ paddingTop: safeAreaInsets?.top + 'px' }"
		style="background-color: #6C6F77;min-height: 100vh;">
		<view class="select_container" @click="handleContainerClick">
			<view class="select_wrap" @click.stop>
				<view class="select_list" v-for="(item,index) in spaceList" :key="index">
					<view class="" style="display: flex;align-items: center;justify-content: center;">
						<wd-icon v-if="selectedIndex === index" name="check" size="22px" color="#405ff2"
							style="margin-right: 20rpx;"></wd-icon>
						<view class="text">
							{{ item }}
						</view>
					</view>
					<view class="" style="padding: 0 30rpx;">
						<wd-gap bg-color="#04060f14" height="1rpx"></wd-gap>
					</view>
				</view>
				<view class="management">
					<wd-icon name="setting1" size="24px" style="margin-right: 20rpx;"></wd-icon>
					<view class="text">
						空间管理
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref, onMounted } from 'vue';
	const { safeAreaInsets } = uni.getSystemInfoSync();
	const selectedParam = 1; // 传入的参数
	const spaceList = ref(['我的家', '公寓', '办公室', '父母的房子', '花园']);
	const selectedIndex = ref(null);


	const handleContainerClick = () => {
		// uni.switchTab({
		// 	url: '/pages/space/index'
		// });
		uni.navigateBack()
	};

	onMounted(() => {
		selectedIndex.value = selectedParam - 1;
	});
</script>

<style lang="scss" scoped>
	.select_container {
		background: #6C6F77;
		width: 100%;
		height: 100vh;

		.select_wrap {
			width: 386rpx;
			border-radius: 20rpx;
			background-color: #ffffff;
			box-sizing: border-box;
			box-shadow: 0 40rpx 200rpx rgba(4, 6, 15, 0.08);
			margin-left: 48rpx;

			.select_list {
				line-height: 3;
			}

			.text {
				font-weight: 600;
				color: #212121;
				font-size: 36rpx;
				text-align: center;
			}

			.management {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 112rpx;
			}
		}
	}
</style>