import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

//Redux
import { Provider } from 'react-redux'
import store from './redux/store'

// Pages
import Signup from './pages/signup'
import Landing from './pages/landing'
import login from './pages/login'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/auth/:token' component={Landing} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={login} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
