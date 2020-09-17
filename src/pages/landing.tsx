import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { googleAuthorized } from '../actions/users'

const Landing = (props: any) => {
  const { match, googleAuthorized } = props
  useEffect(() => {
    if (match.params.hasOwnProperty('token')) {
      googleAuthorized(match.params.token)
    }
  }, [googleAuthorized, match.params])
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5rem',
        justifyContent: 'center',
      }}
    >
      Landing page
    </div>
  )
}

const mapStateToProps = () => {}

const mapActionsToProps = {
  googleAuthorized,
}

export default connect(mapStateToProps, mapActionsToProps)(Landing)
