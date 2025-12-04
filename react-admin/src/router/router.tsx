import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router'
import { AuthProvider } from '../contexts/AuthContext'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import DefaultLayout from '../layout/DefaultLayout'
import Login from '../pages/Login/Login'
import { RouterConfig } from './config'
import type { RouteConfigItem } from './config'

const Router: React.FC = () => {
  function transformDynamicRoutes (routes: RouteConfigItem[]) {
    return routes.map((route) => <Route
      key={ route.path }
      path={ route.path }
      element={ route.children ? <Outlet /> : route.element }
    >
      { route.children && transformDynamicRoutes(route.children) }
    </Route>)
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={ <ProtectedRoute><DefaultLayout /></ProtectedRoute> }>
            { ...transformDynamicRoutes(RouterConfig) }
          </Route>

          <Route path='/login' element={ <Login /> } key='login'></Route>
          <Route path='/404' element={ <div>404</div> } key='404'></Route>
          <Route path='*' element={ <Navigate to='/404' replace /> } key='404'></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Router
