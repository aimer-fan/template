import { ConfigProvider, theme } from 'antd'
import dayjs from 'dayjs'

import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'

import 'antd/dist/reset.css'
import Router from './router/router'
import { MessageProvider } from './contexts/MessageContext'
import { useThemeStore } from './store/theme'
import type { Theme } from './store/theme'
import { useMemo } from 'react'

dayjs.locale('zh-cn')

function getAlgorithmByTheme (_theme: Theme) {
  return _theme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
}

export default function App () {
  const { theme: _theme } = useThemeStore()
  const algorithm = useMemo(() => getAlgorithmByTheme(_theme), [_theme])
  return (
    <ConfigProvider locale={ zhCN } theme={{ algorithm }}>
      <MessageProvider>
        <Router />
      </MessageProvider>
    </ConfigProvider>
  )
}
