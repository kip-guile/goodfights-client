import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Strip from '../../components/headerStrip'
import Welcome from '../../components/welcome'

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Strip />
      <div>
        <Switch>
          <Route path='/dashboard/welcome' component={Welcome} />
        </Switch>
      </div>
    </div>
  )
}

export default Layout
