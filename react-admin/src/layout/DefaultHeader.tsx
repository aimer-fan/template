import { useAuth } from '@/contexts/AuthContext'
import { Button } from 'antd'

export default function DefaultHeader () {
  const { onLogout } = useAuth()
  return (
    <div className="px-2 w-full flex justify-between items-center">
      <div>Header</div>
      <div>
        <Button type="text" onClick={ onLogout }>Logout</Button>
      </div>
    </div>
  )
}
