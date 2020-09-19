import { Dispatch } from 'redux'
import { axiosWithAuth } from '../utils/withAuth'
import { ActionTypes } from '../redux/types'
import {
  failedReviewsRequest,
  fetchReviews,
  reviewsLoadingAction,
} from './definitions'

export const getReviews = () => {
  return async (dispatch: Dispatch) => {
    dispatch<reviewsLoadingAction>({
      type: ActionTypes.reviewsLoading,
    })
    try {
      const response = await axiosWithAuth().get(`/reviews/`)
      dispatch<fetchReviews>({
        type: ActionTypes.fetchReviews,
        payload: response.data,
      })
    } catch (err) {
      dispatch<failedReviewsRequest>({
        type: ActionTypes.reviewsFailed,
      })
    }
  }
}
