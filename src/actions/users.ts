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
import history from '../helpers/history'

export const signupUser = (user: signupObject) => {
  return async (dispatch: Dispatch) => {
    dispatch<userLoadingAction>({
      type: ActionTypes.userLoading,
    })
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, user)
      setToken(response.data.token)
      success('Check email inbox to verify your email address')
      history.push('/')
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

export const resetPassword = (email: String) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.put(`${baseUrl}/auth/forgotpassword`, {
        email: email,
      })
      success(`${response.data.message}: Check email inbox to reset password`)
      history.push('/')
    } catch (err) {
      error(err.message, 'Signup failed')
    }
  }
}

export const changePassword = (data: changeObject) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.put(`${baseUrl}/auth/resetpassword`, data)
      success(response.data.message)
      history.push('/login')
    } catch (err) {
      error(err.message, 'Signup failed')
    }
  }
}

export const loginUser = (user: loginObject) => {
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
      history.push('/')
    } catch (err) {
      error(err.message, 'login failed')
      dispatch<failedRequest>({
        type: ActionTypes.failedRequest,
      })
    }
  }
}

export const googleAuthorized = (token: String) => {
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
      history.push('/')
    } catch (err) {
      console.log(err)
      dispatch<failedRequest>({
        type: ActionTypes.failedRequest,
      })
    }
  }
}
