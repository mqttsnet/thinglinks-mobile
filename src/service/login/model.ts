interface UserState {
  userInfo: any
  token?: string
  roleList: any[]
  sessionTimeout?: boolean
  lastUpdateTime: number
  refreshToken?: string
  expireTime?: string
  tenantId?: string
  applicationId: string
  applicationName: string
  pageCache: any
}
