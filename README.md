<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">ThingLinks v1.0.0</h1>
<h4 align="center">基于UniApp开发的轻量级移动端 ThingLinks</h4>
<p align="center">
	<a href="https://www.oscs1024.com/platform/badge/mqttsnet/thinglinks.svg?size=small"><img src="https://www.oscs1024.com/platform/badge/mqttsnet/thinglinks.svg?size=small"></a>
</p>

## 平台简介

ThingLinks APP ，采用uniapp框架，一份代码多终端适配，同时支持APP、小程序、H5！实现了与[ThingLinks平台](https://github.com/mqttsnet/thinglinks)完美对接的移动解决方案！目前已经实现登录、我的、工作台、编辑资料、头像修改、密码修改、常见问题、关于我们等基础功能。

最好的 uniapp 开发框架，由 uniapp + Vue3 + Ts + Vite4 + UnoCss + VSCode(可选 webstorm) + uni插件+ wot-ui（可选其他 UI 库）构建，集成了多种工具和技术，使用了最新的前端技术栈，无需依靠 HBuilderX，通过命令行方式即可运行 web、小程序 和 App。（注：App 还是需要 HBuilderX）

unibest 内置了 约定式路由、layout布局、请求封装、请求拦截、登录拦截、UnoCSS、i18n多语言 等基础功能，提供了 代码提示、自动格式化、统一配置、代码片段 等辅助功能，让你编写 uniapp 拥有 best 体验

* [ThingLinks 官方文档](https://www.mqttsnet.com)
* 配套后端代码仓库地址[ThingLinks](https://github.com/mqttsnet/thinglinks)。
* 应用框架基于[uniapp](https://uniapp.dcloud.net.cn/)，支持小程序、H5、Android和IOS。
* 前端组件采用[wot-ui](https://wot-design-uni.netlify.app/)，全端兼容的高性能UI框架。



## 演示图

![login.png](doc%2Fimages%2Flogin.png)

![space.png](doc%2Fimages%2Fspace.png)

![scene.png](doc%2Fimages%2Fscene.png)

![dashboard.png](doc%2Fimages%2Fdashboard.png)

![mine.png](doc%2Fimages%2Fmine.png)

## 开发须知
1. **文件路径**：代码放在 `pages` 中，分模块放在不同的文件夹中。目前已经创建了 `tabbar` 文件夹，可以先写这四个的样式。

2. **图片路径**：图片放在 `static` 文件夹中，根据模块放在不同的文件夹中（文件夹自行创建）。例如：空间页面的文件放在 `static/images/space` 文件夹中。如果有子页面，则按层级创建文件夹（`static/images/space/xxx`）。

3. **组件路径**：组件放在 `components` 文件夹中，根据模块放在不同的文件夹中（文件夹自行创建）。例如：空间页面的文件放在 `components/space` 文件夹中。

**目前修改的是初步框架，中间发现问题或功能缺失可以自行添加修改，写好注释或者提交时备注即可。** 
其他框架相关文档参考 [uni-best](https://codercup.github.io/unibest-docs/)，语法类问题参考 uni-app 文档。

