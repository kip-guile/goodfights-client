import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Form, Input, Button } from 'antd'
import { forgotProps } from '../interfaces/signupinterfaces'
import { resetPassword } from '../actions/users'

const ForgotPassword = ({ resetPassword }: forgotProps) => {
  const [form] = Form.useForm()
  const onFinish = (values: any) => {
    resetPassword(values.email)
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
              <h2 style={{ textAlign: 'center' }}>Reset your password</h2>
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
              <Form.Item
                name='email'
                label='Email address'
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

              <Form.Item {...tailLayout}>
                <Button
                  style={{ backgroundColor: 'grey' }}
                  block
                  size='large'
                  type='primary'
                  htmlType='submit'
                >
                  Reset Password
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={6} xxl={8}></Col>
      </Row>
    </div>
  )
}

const mapStateToProps = () => {}

const mapActionsToProps = {
  resetPassword,
}

export default connect(mapStateToProps, mapActionsToProps)(ForgotPassword)
