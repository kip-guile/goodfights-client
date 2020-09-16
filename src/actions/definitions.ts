import { ActionTypes } from '../redux/types'
import { signupSuccessObject } from '../interfaces/signupinterfaces'

export interface userLoadingAction {
  type: ActionTypes.userLoading
}

export interface addUserAction {
  type: ActionTypes.addUser
  payload: signupSuccessObject
}

export interface failedRequest {
  type: ActionTypes.failedRequest
}
