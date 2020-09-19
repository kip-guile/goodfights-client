import { reviewerReducerProps } from '../../interfaces/reviewinterfaces'
import {
  failedReviewsRequest,
  fetchReviews,
  reviewsLoadingAction,
} from '../../actions/definitions'
import { ActionTypes } from '../types'

const initialState = {
  reviews: [],
  loading: false,
}

export const reviewReducer = (
  state: reviewerReducerProps = initialState,
  action: fetchReviews | reviewsLoadingAction | failedReviewsRequest
) => {
  switch (action.type) {
    case ActionTypes.reviewsLoading:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.fetchReviews:
      return {
        fights: action.payload,
        loading: false,
      }
    case ActionTypes.reviewsFailed:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
