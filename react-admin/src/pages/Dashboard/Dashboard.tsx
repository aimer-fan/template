import { useAuth } from '../../contexts/AuthContext'

const Dashboard: React.FC = () => {
  const { token } = useAuth()

  return (
    <div>
      <h2>Dashboard (Producted)</h2>

      <div>Authenticated as {token}</div>
    </div>
  )
}

export default Dashboard
