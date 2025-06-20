import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const token = ref('default_token')


  return { token }
})
