import axios from 'axios'
import { Dispatch } from 'redux'
import { signupObject } from '../interfaces/signupinterfaces'
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

// export const googleSignUp = () => {
//   return async (dispatch: Dispatch) => {
//     try {
//       debugger
//       await axios.get(`${baseUrl}/auth/google`)
//       dispatch<userLoadingAction>({
//         type: ActionTypes.userLoading,
//       })
//     } catch (err) {
//       debugger
//       console.log(err)
//       dispatch<failedRequest>({
//         type: ActionTypes.failedRequest,
//       })
//     }
//   }
// }

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
