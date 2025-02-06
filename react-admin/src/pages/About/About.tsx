import { useMessage } from '@/contexts/MessageContext'
import { Button, Space } from 'antd'

export default function About () {
  const { success, error, warning } = useMessage()
  return (
    <div>
      <h2>
        About (Protected)
      </h2>
      <Space>
        <Button onClick={ () => success('This is a success message') }>Success</Button>
        <Button onClick={ () => error('This is an error message') }>Error</Button>
        <Button onClick={ () => warning('This is a warning message') }>Warning</Button>
      </Space>
    </div>
  )
}
