import { message } from 'antd'
import type { MessageInstance } from 'antd/es/message/interface'
import { createContext, useContext } from 'react'

type MessageProviderProps = {
  children: React.ReactNode
}
type IMessageContext = {
  success: (message: string) => void
  error: (message: string) => void
  warning: (message: string) => void
  open: MessageInstance['open']
}
export const messageContext = createContext<IMessageContext>({
  success: () => {},
  error: () => {},
  warning: () => {},
  open: () => {
    const api = () => {}
    api.then = Promise.resolve
    return api
  },
})

export const useMessage = () => useContext(messageContext)

export const MessageProvider = ({ children }: MessageProviderProps) => {
  const [messageApi, contextHolder] = message.useMessage()

  const value: IMessageContext = {
    success: (message: string) => {
      messageApi.open({
        type: 'success',
        content: message,
      })
    },
    error: (message: string) => {
      messageApi.open({
        type: 'error',
        content: message,
      })
    },
    warning: (message: string) => {
      messageApi.open({
        type: 'warning',
        content: message,
      })
    },
    open: messageApi.open,
  }

  return (
    <messageContext.Provider value={ value }>
      {contextHolder}
      {children}
    </messageContext.Provider>
  )
}
