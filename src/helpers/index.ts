import { message } from 'antd'

const KEY = 'cfa8ebf4'

export const success = (msg: string) => {
  message.success(msg, 3)
}

export const error = (err: string, msg: string) => {
  message.error(`${err}: ${msg}`, 5)
}

export const setToken = (payload: String) => {
  try {
    const item = JSON.stringify(payload)
    localStorage.setItem(KEY, item)
    return true
  } catch (error) {
    return undefined
  }
}
