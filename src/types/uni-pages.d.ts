/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by vite-plugin-uni-pages

interface NavigateToOptions {
  url: "/pages/login/index" |
       "/pages/dashboard/index" |
       "/pages/guide/index" |
       "/pages/mine/index" |
       "/pages/scene/index" |
       "/pages/space/index" |
       "/pages/toLogin/index" |
       "/pages/toLogin/phone" |
       "/pages/toLogin/register" |
       "/pages/spaceSub/addDevice/index" |
       "/pages/spaceSub/connection/index" |
       "/pages/spaceSub/equipment/index" |
       "/pages/spaceSub/select/index" |
       "/pages-mine/pages/account/index" |
       "/pages-mine/pages/appearance/index" |
       "/pages-mine/pages/appearance/language" |
       "/pages-mine/pages/data/index" |
       "/pages-mine/pages/help/index" |
       "/pages-mine/pages/notification/index" |
       "/pages-mine/pages/profile/index" |
       "/pages-mine/pages/relevance/index" |
       "/pages-mine/pages/setting/index" |
       "/pages-mine/pages/space/index" |
       "/pages-mine/pages/voice/index" |
       "/pages-mine/pages/voice/join" |
       "/pages-mine/pages/voice/result";
}
interface RedirectToOptions extends NavigateToOptions {}

interface SwitchTabOptions {
  url: "/pages/space/index" | "/pages/scene/index" | "/pages/dashboard/index" | "/pages/mine/index"
}

type ReLaunchOptions = NavigateToOptions | SwitchTabOptions;

declare interface Uni {
  navigateTo(options: UniNamespace.NavigateToOptions & NavigateToOptions): void;
  redirectTo(options: UniNamespace.RedirectToOptions & RedirectToOptions): void;
  switchTab(options: UniNamespace.SwitchTabOptions & SwitchTabOptions): void;
  reLaunch(options: UniNamespace.ReLaunchOptions & ReLaunchOptions): void;
}
