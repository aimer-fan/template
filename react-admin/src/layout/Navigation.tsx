import { Menu, type MenuProps } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import type { RouteConfigItem } from '@/router/config'
import { RouterConfig } from '@/router/config'

type NavigationProps = {
  collapsed: boolean;
}
export default function Navigation (props: NavigationProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])

  function transformNavigation (routes: RouteConfigItem[]): MenuProps['items'] {
    return routes.map((route) => ({
      label: route.label,
      key: route.path,
      icon: route.icon,
      children: route.children && transformNavigation(route.children),
    }))
  }

  function getOpenKey (path: string, collapsed: boolean) {
    return collapsed ? undefined : path.split('/').slice(0, -1).join('/')
  }

  useEffect(() => {
    setSelectedKeys([location.pathname])
    const openKeys = getOpenKey(location.pathname, props.collapsed)
    openKeys && setOpenKeys([openKeys])
  }, [location, props.collapsed])

  return (
    <Menu
      openKeys={ openKeys }
      selectedKeys={ selectedKeys }
      theme='dark'
      items={ transformNavigation(RouterConfig) }
      mode="inline"
      onClick={ ({ key }) => navigate(key) }
      onOpenChange={ (openKeys) => setOpenKeys(openKeys) }
    ></Menu>
  )
}
