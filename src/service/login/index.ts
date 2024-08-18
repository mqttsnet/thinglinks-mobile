import { http } from '@/utils/http'

export const login = (params: any) => {
  return http.post<any>('/oauth/anyTenant/login', params, {})
}
export const loadCaptcha = (query) => {
  return http.get<any>(
    '/oauth/anyTenant/captcha',
    { key: query.key },
    {
      responseType: 'arraybuffer',
    },
  )
}
