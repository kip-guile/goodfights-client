import React from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'

const Signup = () => {
  const layout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
  }
  const tailLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 4,
      },
    },
  }
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5rem',
        justifyContent: 'center',
      }}
    >
      <Row gutter={4} style={{ display: 'flex' }}>
        <Col xs={2} sm={4} md={6} lg={8} xl={6} xxl={10}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={12} xxl={4}>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                margin: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h2>Sign Up for Goodfights</h2>
              <p>
                Sign up to see what fights your friends are watching, and join
                the world's largest community of UFC fans
              </p>
            </div>
            <Form
              {...layout}
              style={{ width: '80%' }}
              layout='vertical'
              // form={form}
              name='register'
              // onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                name='email'
                label='E-mail'
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name='password'
                label='Password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name='confirm'
                label='Confirm Password'
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject(
                        'The two passwords that you entered do not match!'
                      )
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name='username'
                label='Username'
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button block size='large' type='primary' htmlType='submit'>
                  Register
                </Button>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button
                  danger
                  type='primary'
                  icon={<GoogleOutlined />}
                  block
                  size='large'
                >
                  Sign Up with Google
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={6} xxl={10}></Col>
      </Row>
    </div>
  )
}

export default Signup
