/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by vite-plugin-uni-pages

interface NavigateToOptions {
  url: "/pages/login/index" |
       "/pages/dashboard/detail" |
       "/pages/dashboard/index" |
       "/pages/guide/index" |
       "/pages/mine/index" |
       "/pages/scene/index" |
       "/pages/space/index" |
       "/pages_mine/pages/account/index" |
       "/pages_mine/pages/appearance/index" |
       "/pages_mine/pages/appearance/language" |
       "/pages_mine/pages/data/index" |
       "/pages_mine/pages/help/index" |
       "/pages_mine/pages/notification/index" |
       "/pages_mine/pages/profile/index" |
       "/pages_mine/pages/relevance/index" |
       "/pages_mine/pages/setting/index" |
       "/pages_mine/pages/space/index" |
       "/pages_mine/pages/voice/index" |
       "/pages_mine/pages/voice/join" |
       "/pages_mine/pages/voice/result" |
       "/pages_login/pages/password/index" |
       "/pages_login/pages/phone/index" |
       "/pages_login/pages/register/index" |
       "/pages_scene/pages/createScene/index" |
       "/pages_scene/pages/log/index" |
       "/pages_space/pages/addDevice/index" |
       "/pages_space/pages/connection/index" |
       "/pages_space/pages/equipment/index" |
       "/pages_space/pages/select/index";
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
