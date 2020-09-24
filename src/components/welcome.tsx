import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import {
  reviewerReducerProps,
  WelcomeProps,
} from '../interfaces/reviewinterfaces'
import ReviewBlock from './reviewBlock'
import { getReviews } from '../actions/reviews'

const Welcome = ({ getReviews, reviews }: WelcomeProps) => {
  useEffect(() => {
    getReviews()
  }, [getReviews])

  return (
    <div
      style={{
        backgroundColor: '#f4f1ea',
        minHeight: '95vh',
        width: '100vw',
      }}
    >
      <Row gutter={4} style={{ display: 'flex' }}>
        <Col xs={2} sm={4} md={6} lg={8} xl={8} xxl={8}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={8} xxl={8}>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#f4f1ea',
            }}
          >
            <div>
              <span>Updates</span>
            </div>
            {reviews.reviews.map((review: any, index: number) => (
              <ReviewBlock
                key={index}
                reviewer_name={review.reviewer_name}
                fight_title={review.fight_title}
                review_rating={review.rating}
                date={review.posted_at}
                review_description={review.description}
                fight_rating={review.fight_rating}
                fight_description={review.fight_desc}
                fight_img={review.fight_avatar}
              />
            ))}
          </div>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={8} xxl={8}></Col>
      </Row>
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
