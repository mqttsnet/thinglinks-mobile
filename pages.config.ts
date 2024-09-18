import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
	globalStyle: {
		navigationStyle: 'default',
		navigationBarTitleText: 'thinglinks',
		navigationBarBackgroundColor: '#f8f8f8',
		navigationBarTextStyle: 'black',
		backgroundColor: '#FFFFFF',
	},
	easycom: {
		autoscan: true,
		custom: {
			'^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
			'^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
				'z-paging/components/z-paging$1/z-paging$1.vue',
		},
	},
	tabBar: {
		color: '#212121',
		selectedColor: '#405ff2',
		backgroundColor: '#F8F8F8',
		borderStyle: 'black',
		height: '50px',
		fontSize: '10px',
		iconWidth: '24px',
		spacing: '3px',
		list: [
			{
				iconPath: 'static/tabbar/home.png',
				selectedIconPath: 'static/tabbar/homeHL.png',
				pagePath: 'pages/space/index',
				text: '空间',
			},
			{
				iconPath: 'static/tabbar/example.png',
				selectedIconPath: 'static/tabbar/exampleHL.png',
				pagePath: 'pages/scene/index',
				text: '场景',
			},
			{
				iconPath: 'static/tabbar/example.png',
				selectedIconPath: 'static/tabbar/exampleHL.png',
				pagePath: 'pages/dashboard/index',
				text: '仪表盘',
			},
			{
				iconPath: 'static/tabbar/personal.png',
				selectedIconPath: 'static/tabbar/personalHL.png',
				pagePath: 'pages/mine/index',
				text: '我的',
			},
		],
	},
})