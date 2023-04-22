import { TokenService } from '@/modules'
import { ApiService } from '@/modules'
import type { TAuthCredential } from './types'

export const AuthService = {
   Login: async (payload: TAuthCredential) => {
      const { username, password } = payload
      const requestData = {
         method: 'post',
         headers: {
            'Content-Type': 'application/json; charset=utf-8',
         },
         data: {
            username,
            password,
         },
         url: '/auth/login',
      }
      try {
         const res = await ApiService.customRequest(requestData)
         TokenService.saveToken(res.data.access_token)
         TokenService.saveRefreshToken(res.data.refresh_token)
         ApiService.setHeader()
      } catch (error) {
         console.log(error)
      }
   },

   Logout: () => {
      ApiService.removeHeader()
      TokenService.removeToken()
      TokenService.removeRefreshToken()
   },

   Register: async (payload: TAuthCredential) => {
      const requestData = {
         method: 'post',
         headers: {
            'Content-Type': 'application/json; charset=utf-8',
         },
         data: payload,
         url: '/auth/local/register',
      }
      try {
         await ApiService.customRequest(requestData)
      } catch (error) {
         console.log(error)
      }
   },
}
