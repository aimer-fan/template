import { Navigate, useLocation } from 'react-router'
import { useAuth } from '@/contexts/AuthContext'

type ProtectedRouteProps = {
  children: React.ReactNode
}

export default function ProtectedRoute ({ children }: ProtectedRouteProps) {
  const { token } = useAuth()
  const location = useLocation()

  if (!token) {
    return <Navigate to='/login' replace state={{ from: location }} />
  }

  return children
}
