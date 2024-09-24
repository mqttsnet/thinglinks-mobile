import { http } from '@/utils/http'

export const login = async (params: any) => {
  return http.post<any>('/oauth/anyTenant/login', params, {})
}
export const loadCaptcha = async (query: any) => {
  return http.get<any>(
    '/oauth/anyTenant/captcha',
    { key: query.key },
    {
      responseType: 'arraybuffer',
    },
  )
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

// 查询租户列表
export const getTenantList = async (params?: any) => {
  return http.get<any>(
    '/oauth/anyone/findCompanyDept',
    { _t: +new Date() },
    {
      tenantId: params?.tenantId,
    },
  )
}
// 切换租户
export const switchDept = async (params?: any) => {
  return http.put<any>(
    '/oauth/anyone/switchTenantAndOrg',
    { _t: +new Date() },
    {
      tenantId: params?.tenantId,
    },
  )
}
