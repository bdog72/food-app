import React, { Component } from 'react'
import { browserHistory, Router, Route } from 'react-router'
import Layout from './Layout'
import Home from './Home'
import Pizza from './Pizza.js'
// import Restaurant from './Restaurant'

export default class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='/Pizza' component={Pizza} />
        {/* <Route path='/restaurant/:slug' component={Restaurant} /> */}

      </Route>
    </Router>
  }
}
