import { http } from '@/utils/http'

export const getUserAvatar = async (params: any) => {
  return http.post<any>('/base/file/anyTenant/findUrlById', params, {})
}
export const logout = async (params: any) => {
  return http.post<any>('/oauth/anyUser/logout', params)
}
export const getUserInfoById = async (params?: any) => {
  return http.get<any>(
    '/oauth/anyone/getUserInfoById',
    { _t: +new Date() },
    {
      userId: params?.userId,
    },
  )
}
