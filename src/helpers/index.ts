import { message } from 'antd'
import decode from 'jwt-decode'

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

export const isTokenExpired = (token: any) => {
  try {
    const decoded: any = decode(token)
    if (decoded.exp < Date.now() / 1000) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}

export const clearLocalStorage = () => {
  localStorage.removeItem(KEY)
}

export const getToken = () => {
  try {
    const token = localStorage.getItem(KEY)
    if (token === null || !token) {
      return undefined
    }
    const isExpired = isTokenExpired(token)
    if (isExpired) {
      clearLocalStorage()
      return undefined
    }
    return JSON.parse(token)
  } catch (error) {
    // if error decoding, clear what is in local storage with key
    clearLocalStorage()
    return undefined
  }
}
