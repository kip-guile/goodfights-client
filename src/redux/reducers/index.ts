import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { reviewReducer } from './reviewReducer'
import { signupSuccessObject } from '../../interfaces/signupinterfaces'
import { reviewerReducerProps } from '../../interfaces/reviewinterfaces'

export interface StoreState {
  user: signupSuccessObject
  reviews: reviewerReducerProps
}

export const rootReducer = combineReducers({
  user: userReducer,
  reviews: reviewReducer,
})
