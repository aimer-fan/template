import type { LoginFieldType } from '@/contexts/AuthContext'
import { useAuth } from '@/contexts/AuthContext'
import { useMessage } from '@/contexts/MessageContext'
import type { FormProps } from 'antd'
import { Form, Input, Button, Card } from 'antd'
import { useState } from 'react'

export default function Login () {
  const { onLogin } = useAuth()
  const [submitting, setSubmitting] = useState(false)
  const message = useMessage()

  const handleFinish: FormProps<LoginFieldType>['onFinish'] = async (values) => {
    setSubmitting(true)
    onLogin(values)
      .then(() => message.success('Login successfully'))
      .catch((error) => {
        message.error(error.message)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card style={{ width: 400 }}>
        <h1 className='text-center'>Login Form</h1>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={ handleFinish }
          style={{ maxWidth: 300, margin: 'auto' }}
        >
          <Form.Item
            name="username"
            rules={ [{ required: true, message: 'Please input your Username!' }] }
          >
            <Input placeholder="Username" autoComplete="username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={ [{ required: true, message: 'Please input your Password!' }] }
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={ submitting }>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
