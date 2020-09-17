import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Form, Input, Button } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import { signupObject, signupProps } from '../interfaces/signupinterfaces'
import { signupUser } from '../actions/users'
import { StoreState } from '../redux/reducers'
import { baseUrl } from '../config'

const Login = ({ signupUser, user }: signupProps) => {
  const [form] = Form.useForm()
  const onFinish = (values: signupObject) => {
    signupUser(values)
  }
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
        backgroundColor: '#ebe8df',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5rem',
        justifyContent: 'center',
      }}
    >
      <Row gutter={4} style={{ display: 'flex' }}>
        <Col xs={2} sm={4} md={6} lg={8} xl={6} xxl={8}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={12} xxl={8}>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#ffffff',
            }}
          >
            <div
              style={{
                margin: '1.3rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h2 style={{ textAlign: 'center' }}>Sign in to Goodfights</h2>
            </div>
            <Form
              {...layout}
              style={{ width: '80%' }}
              layout='vertical'
              form={form}
              name='signup'
              onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item {...tailLayout}>
                <a href={`${baseUrl}/auth/google`}>
                  <Button
                    loading={user.loading}
                    danger
                    type='primary'
                    icon={<GoogleOutlined />}
                    block
                    size='large'
                  >
                    Continue with Google
                  </Button>
                </a>
              </Form.Item>
              <div
                style={{
                  margin: '0.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <p style={{ textAlign: 'center' }}>or</p>
              </div>
              <Form.Item
                name='email'
                label='E-mail'
                rules={[
                  {
                    type: 'email',
                    message: 'Please enter a valid E-mail!',
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
                    message: 'Please enter your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button
                  loading={user.loading}
                  block
                  size='large'
                  type='primary'
                  htmlType='submit'
                >
                  Sign in
                </Button>
              </Form.Item>
              <p style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                Forgot password
              </p>
              <p style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                Not a member? Sign up
              </p>
            </Form>
          </div>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={6} xxl={8}></Col>
      </Row>
    </div>
  )
}

const mapStateToProps = ({ user }: StoreState) => {
  return { user }
}

const mapActionsToProps = {
  signupUser,
}

export default connect(mapStateToProps, mapActionsToProps)(Login)
