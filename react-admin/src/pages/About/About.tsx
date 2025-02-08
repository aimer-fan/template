import { useAuth } from '@/contexts/AuthContext'
import { useMessage } from '@/contexts/MessageContext'
import { useCounterStore } from '@/store/counter'
import { Button, InputNumber, Space } from 'antd'
import { useState } from 'react'

export default function About () {
  const { token } = useAuth()
  const [currentCount, setCurrentCount] = useState<number | null>(null)
  const { success, error, warning } = useMessage()
  const { count, increment, decrement, reset, incrementBy } = useCounterStore()

  return (
    <div>
      <h2>
        About (Protected) {token}
      </h2>
      <Space>
        <Button onClick={ () => success('This is a success message') }>Success</Button>
        <Button onClick={ () => error('This is an error message') }>Error</Button>
        <Button onClick={ () => warning('This is a warning message') }>Warning</Button>
      </Space>
      <div>
        <div className='my-4'>Count: {count}</div>
        <div>
          <Space>
            <Button onClick={ decrement }>decrement</Button>
            <Button onClick={ reset }>reset</Button>
            <Button onClick={ increment }>increment</Button>

            <InputNumber type='number' value={ currentCount } onChange={ setCurrentCount }></InputNumber>
            <Button onClick={ () => currentCount && incrementBy(currentCount || 0) }>incrementBy</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
