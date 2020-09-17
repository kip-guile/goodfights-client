export interface signupObject {
  email: string
  username: string
  password: string
  confirmPassword: string
}

export interface signupProps {
  signupUser(user: signupObject): any
  // googleSignUp(): any
  user: signupSuccessObject
  history: any
}

export interface signupSuccessObject {
  admin: boolean
  email: string
  id: string
  username: string
  loading?: boolean
}
