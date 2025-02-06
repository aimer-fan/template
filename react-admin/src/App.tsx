import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'

import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'

import 'antd/dist/reset.css'
import Router from './router/router'
import { MessageProvider } from './contexts/MessageContext'

dayjs.locale('zh-cn')

export default function App () {
  return (
    <ConfigProvider locale={ zhCN }>
      <MessageProvider>
        <Router />
      </MessageProvider>
    </ConfigProvider>
  )
}
