import axios from 'axios'
import { Dispatch } from 'redux'
import {
  signupObject,
  loginObject,
  changeObject,
} from '../interfaces/signupinterfaces'
import { baseUrl } from '../config'
import { ActionTypes } from '../redux/types'
import { userLoadingAction, addUserAction, failedRequest } from './definitions'
import { error, success, setToken } from '../helpers'

export const signupUser = (user: signupObject, historys: any) => {
  return async (dispatch: Dispatch) => {
    dispatch<userLoadingAction>({
      type: ActionTypes.userLoading,
    })
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, user)
      setToken(response.data.token)
      success('Check email inbox to verify your email address')
      historys.push('/')
      dispatch<addUserAction>({
        type: ActionTypes.addUser,
        payload: response.data.user,
      })
    } catch (err) {
      error(err.message, 'Signup failed')
      dispatch<failedRequest>({
        type: ActionTypes.failedRequest,
      })
    }
  }
}

export const resetPassword = (email: String, historys: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.put(`${baseUrl}/auth/forgotpassword`, {
        email: email,
      })
      success(`${response.data.message}: Check email inbox to reset password`)
      historys.push('/')
    } catch (err) {
      error(err.message, 'Signup failed')
    }
  }
}

export const changePassword = (data: changeObject, historys: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.put(`${baseUrl}/auth/resetpassword`, data)
      success(response.data.message)
      historys.push('/login')
    } catch (err) {
      error(err.message, 'Signup failed')
    }
  }
}

export const loginUser = (user: loginObject, historys: any) => {
  return async (dispatch: Dispatch) => {
    dispatch<userLoadingAction>({
      type: ActionTypes.userLoading,
    })
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, user)
      dispatch<addUserAction>({
        type: ActionTypes.addUser,
        payload: response.data.user,
      })
      setToken(response.data.token)
      historys.push('/')
    } catch (err) {
      error(err.message, 'login failed')
      dispatch<failedRequest>({
        type: ActionTypes.failedRequest,
      })
    }
  }
}

export const googleAuthorized = (token: String, historys: any) => {
  return async (dispatch: Dispatch) => {
    dispatch<userLoadingAction>({
      type: ActionTypes.userLoading,
    })
    try {
      const response = await axios.post(`${baseUrl}/auth/google/${token}`)
      dispatch<addUserAction>({
        type: ActionTypes.addUser,
        payload: response.data.data.user,
      })
      setToken(token)
      historys.push('/')
    } catch (err) {
      console.log(err)
      dispatch<failedRequest>({
        type: ActionTypes.failedRequest,
      })
    }
  }
}
