import { RouteComponentProps } from 'react-router-dom'

export interface signupObject {
  email: string
  username: string
  password: string
  confirmPassword: string
}

export interface loginObject {
  username: string
  password: string
}

export interface signupProps extends RouteComponentProps<any> {
  signupUser(user: signupObject, history: any): any
  user: signupSuccessObject
}

export interface loginProps extends RouteComponentProps<any> {
  loginUser(user: loginObject, history: any): any
  user: signupSuccessObject
}

export interface signupSuccessObject {
  admin: boolean
  email: string
  id: string
  username: string
  loading?: boolean
}

export interface forgotProps extends RouteComponentProps<any> {
  resetPassword(email: string, history: any): any
}

export interface changeObject {
  resetLink: String
  newPass: String
}
