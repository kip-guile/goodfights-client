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

export interface signupProps {
  signupUser(user: signupObject): any
  user: signupSuccessObject
}

export interface loginProps {
  loginUser(user: loginObject): any
  user: signupSuccessObject
}

export interface signupSuccessObject {
  admin: boolean
  email: string
  id: string
  username: string
  loading?: boolean
}

export interface forgotProps {
  resetPassword(email: string): any
}

export interface changeObject {
  resetLink: String
  newPass: String
}
