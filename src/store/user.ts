import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

interface UserState {
  userInfo?: any
  token?: string
  roleList?: any[]
  sessionTimeout?: boolean
  lastUpdateTime: number
  refreshToken?: string
  expireTime?: string
  tenantId?: string
  applicationId?: string
  applicationName?: string
  pageCache?: any
}

const initState = {
  // user info
  userInfo: null,
  // token
  token: undefined,
  // roleList
  roleList: [],
  // Whether the login expired
  sessionTimeout: false,
  // Last fetch time
  lastUpdateTime: 0,
  refreshToken: '',
  expireTime: '',
  // 租户ID
  tenantId: '',
  // 应用id
  applicationId: '',
  applicationName: '',
  applicationKey: '',
  pageCache: {},
}

export const useUserStore = defineStore(
  'user',
  () => {
    const state = reactive<UserState>({ ...initState })

    const setState = (record: any) => {
      Object.assign(state, record)
    }

    return {
      state,
      setState,
    }
  },
  {
    persist: true,
  },
)
