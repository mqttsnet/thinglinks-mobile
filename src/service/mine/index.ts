import { http } from '@/utils/http'
// 获取用户头像
export const getUserAvatar = async (params: any) => {
  return http.post<any>('/base/file/anyTenant/findUrlById', params, {})
}
// 修改用户头像
export const updateUserAvatar = async (params: any) => {
  return http.put<any>('/api/oauth/anyone/avatar', params)
}
// 退出登录
export const logout = async (params: any) => {
  return http.post<any>('/oauth/anyUser/logout', params)
}
// 获取用户信息
export const getUserInfoById = async (params?: any) => {
  return http.get<any>(
    '/oauth/anyone/getUserInfoById',
    { _t: +new Date() },
    {
      userId: params?.userId,
    },
  )
}
// 修改用户信息
export const updateBaseInfo = async (params: any) => {
  return http.put<any>('/api/oauth/anyone/baseInfo', params)
}

