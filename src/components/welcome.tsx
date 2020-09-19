import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  reviewerReducerProps,
  WelcomeProps,
} from '../interfaces/reviewinterfaces'
import { getReviews } from '../actions/reviews'

const Welcome = ({ getReviews }: WelcomeProps) => {
  useEffect(() => {
    getReviews()
  }, [getReviews])
  return (
    <div style={{ backgroundColor: 'pink', minHeight: '95vh', width: '100vw' }}>
      Welcome
    </div>
  )
}

const mapStateToProps = ({ reviews }: reviewerReducerProps) => {
  return { reviews }
}

const mapActionsToProps = {
  getReviews,
}

export default connect(mapStateToProps, mapActionsToProps)(Welcome)
