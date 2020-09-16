import axios from 'axios'
import { Dispatch } from 'redux'
import { signupObject } from '../interfaces/signupinterfaces'
import { baseUrl } from '../config'
import { ActionTypes } from '../redux/types'
import { userLoadingAction, addUserAction, failedRequest } from './definitions'
import { error, success } from '../helpers'

export const signupUser = (user: signupObject) => {
  return async (dispatch: Dispatch) => {
    dispatch<userLoadingAction>({
      type: ActionTypes.userLoading,
    })
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, user)
      success('Check email inbox to verify your email address')
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
