import { useLocalStorage } from '@uidotdev/usehooks'
import { createContext, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router'

export type IAuthContext = {
  token: string;
  onLogin: (field: LoginFieldType) => Promise<void>;
  onLogout: () => Promise<void>;
}

type AuthProviderProps = {
  children: React.ReactNode;
}

export type LoginFieldType = {
  username?: string;
  password?: string;
}

const fakeAuth = (field: LoginFieldType) => new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    if (field.username !== 'admin' || field.password !== 'admin123456') {
      return reject(new Error('Invalid username or password'))
    }
    resolve('fake_token')
  }, 250)
})

export const AuthContext = createContext<IAuthContext>({
  token: '',
  onLogin: async () => {},
  onLogout: async () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useLocalStorage('token', '')
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = async (field: LoginFieldType) => {
    const token = await fakeAuth(field)
    setToken(token)
    const origin: string = location.state?.from?.pathname || '/dashboard'
    navigate(origin)
  }
  const handleLogout = async () => {
    setToken('')
  }
  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  }

  return (
    <AuthContext.Provider value={ value }>
      {children}
    </AuthContext.Provider>
  )
}
