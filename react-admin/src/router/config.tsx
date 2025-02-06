import { DashboardOutlined, FormOutlined, LinkOutlined } from '@ant-design/icons'
import { lazy } from 'react'

export type RouteConfigItem = {
  path: string;
  label: string;
  element?: React.ReactNode;
  icon?: React.ReactNode;
  children?: RouteConfigItem[];
}

const DashboardLazy = lazy(() => import('@/pages/Dashboard/Dashboard'))
const AboutLazy = lazy(() => import('@/pages/About/About'))

export const RouterConfig = [
  {
    path: '/',
    label: 'Dashboard',
    element: <DashboardLazy />,
    icon: <DashboardOutlined />,
  },
  {
    path: '/form',
    label: 'Form',
    icon: <FormOutlined />,
    children: [
      {
        path: '/form/basic',
        label: 'BasicForm',
        element: <div>BasicForm</div>,
      },
      {
        path: '/form/advance',
        label: 'AdvanceForm',
        element: <div>AdvanceForm</div>,
      },
    ],
  },
  {
    path: '/about',
    label: 'About',
    element: <AboutLazy />,
    icon: <LinkOutlined />,
  },
] satisfies RouteConfigItem[]
