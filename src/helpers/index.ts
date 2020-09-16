import { message } from 'antd'

export const success = (msg: string) => {
  message.success(msg, 3)
}

export const error = (err: string, msg: string) => {
  message.error(`${err}: ${msg}`, 5)
}
