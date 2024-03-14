import type { AxiosInterceptorManager, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

type RequestInterceptor = Parameters<AxiosInterceptorManager<InternalAxiosRequestConfig>['use']>

function createTokenInterceptor (): RequestInterceptor {
  const userStore = useUserStore()
  function onFulfilled (config: InternalAxiosRequestConfig) {
    if (userStore.token) {
      config.headers['Authorization'] = `Bearer ${userStore.token}`
    }
    return config
  }
  return [onFulfilled]
}

const ins = axios.create({
  timeout: 3000,
  baseURL: import.meta.env.VITE_API_URL,
})

ins.interceptors.request.use(...createTokenInterceptor())

ins.interceptors.response.use()

export const post = ins.post
export const get = ins.get
export default ins
