import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import './App.css'

//Redux
import { fetchUser } from './actions/users'

// Pages
import Signup from './pages/signup'
import Landing from './pages/landing'
import Login from './pages/login'
import ForgotPassword from './pages/forgotPassword'
import ChangePassword from './pages/changePassword'
import Layout from './pages/welcome/Layout'

//Utils
import PrivateRoute from './utils/PrivateRoute'
import { getToken } from './helpers/index'

function App(props: any) {
  const { fetchUser } = props
  useEffect(() => {
    const token = getToken()
    if (token) {
      fetchUser()
    }
  }, [fetchUser])
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/auth/:token' component={Landing} />
      <PrivateRoute path='/dashboard' component={Layout} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/forgot' component={ForgotPassword} />
      <Route path='/changepassword/:token' component={ChangePassword} />
    </Switch>
  )
}

export default connect(null, { fetchUser })(App)
