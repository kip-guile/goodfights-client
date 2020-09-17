import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

//Redux
import { Provider } from 'react-redux'
import store from './redux/store'

// Pages
import Signup from './pages/signup'
import Landing from './pages/landing'
import Login from './pages/login'
import ForgotPassword from './pages/forgotPassword'
import ChangePassword from './pages/changePassword'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/auth/:token' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/forgot' component={ForgotPassword} />
          <Route path='/changepassword/:token' component={ChangePassword} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
