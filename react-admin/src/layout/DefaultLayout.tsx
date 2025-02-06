import { Layout, theme } from 'antd'
import { Outlet } from 'react-router'
import Navigation from './Navigation'
import DefaultHeader from './DefaultHeader'
import Logo from './Logo'
import { useLocalStorage } from '@uidotdev/usehooks'

const siderStyle: React.CSSProperties = {
  height: '100vh',
  overflow: 'hidden',
  position: 'sticky',
  top: 0,
}

export default function DefaultLayout () {
  const { Header, Content, Sider, Footer } = Layout
  const { token } = theme.useToken()

  const [collapsed, setCollapsed] = useLocalStorage('collapsed', false)

  const headerStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '100%',
    padding: 0,
    backgroundColor: token.colorBgContainer,
  }

  return (
    <Layout className='h-full'>
      <Sider collapsible collapsed={ collapsed } onCollapse={ setCollapsed } style={ siderStyle }>
        <Logo collapsed={ collapsed } />
        <div className='h-[calc(100%-64px)] overflow-y-auto overscroll-y-contain'>
          <Navigation collapsed={ collapsed } />
        </div>
      </Sider>

      <Layout>
        <Header style={ headerStyle }><DefaultHeader /></Header>
        <Content className='p2'><Outlet /></Content>
        <Footer>
          <div className='flex justify-center'>2024-present &copy; React Admin, powered by Ant Design</div>
        </Footer>
      </Layout>
    </Layout>
  )
}
