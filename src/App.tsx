import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

//Redux
import { Provider } from 'react-redux'
import store from './redux/store'

// Pages
import Signup from './pages/signup'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
