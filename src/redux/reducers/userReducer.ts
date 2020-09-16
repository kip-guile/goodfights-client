import { ActionTypes } from '../types'
import { signupSuccessObject } from '../../interfaces/signupinterfaces'
import {
  addUserAction,
  userLoadingAction,
  failedRequest,
} from '../../actions/definitions'

const initialState = {
  admin: false,
  email: '',
  id: '',
  username: '',
  loading: false,
}

export const userReducer = (
  state: signupSuccessObject = initialState,
  action: addUserAction | userLoadingAction | failedRequest
) => {
  switch (action.type) {
    case ActionTypes.userLoading:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.addUser:
      return {
        ...action.payload,
        loading: false,
      }
    case ActionTypes.failedRequest:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
