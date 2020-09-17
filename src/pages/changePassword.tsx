import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Form, Input, Button } from 'antd'
import { loginObject } from '../interfaces/signupinterfaces'
import { changePassword } from '../actions/users'

const ChangePassword = (props: any) => {
  const { changePassword, match, history } = props

  const [form] = Form.useForm()
  const onFinish = (values: loginObject) => {
    changePassword(
      {
        resetLink: match.params.token,
        newPass: values.password,
      },
      history
    )
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
              <h2 style={{ textAlign: 'center' }}>Select new password</h2>
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
                name='password'
                label='New password'
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

              <Form.Item
                name='confirmPassword'
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
                      return Promise.reject('Enter matching passwords')
                    },
                  }),
                ]}
              >
                <Input.Password />
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
  changePassword,
}

export default connect(mapStateToProps, mapActionsToProps)(ChangePassword)
