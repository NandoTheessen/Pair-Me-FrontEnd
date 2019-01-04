import React, { Component } from 'react'
import './App.css'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { testAPI } from './actions/index'
import axios from 'axios'
import Navigation from './components/Navigation'
import Welcome from './components/Welcome'
import Dashboard from './components/Dashboard'
// Temporary dummy image files
import certificate_solid from './assets/certificate_solid.svg'
import ribbon_solid from './assets/ribbon_solid.svg'

class App extends Component {
  componentDidMount() {
    const { search } = this.props.location
    if (search) {
      const token = search.slice(6, -7)
      axios
        .post(`https://evening-refuge-39471.herokuapp.com/api/users/login`, {
          token
        })
        .then(res => {
          // do redux stuff here
          console.log(res)
        })
        .catch(e => console.log(e))
    }
  }

  render() {
    const badges = [
      {
        id: 0,
        imageUrl: certificate_solid,
        name: 'consecutive_5',
        description:
          'Great job logging in 5 days in a row! You are super duper!'
      },
      {
        id: 1,
        imageUrl: ribbon_solid,
        name: 'good_sherpa_5',
        description:
          'Wow, you helped 5 people! You have a heart of gold. Thanks for being you.'
      }
    ]
    /*
      `good_sherpa_5`,
      `consecutive_5`,
      `helper_react_2`,
      `helper_js_2`
    */
    return (
      <div className="App">
        <div className="nav-container">
          <Navigation />
        </div>
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route
              exact
              path="/dashboard"
              render={props => <Dashboard badges={badges} {...props} />}
            />
            {/* Routes go here */}
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // state goes here
    isLoggedIn: state.isLoggedIn
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      testAPI
    }
  )(App)
)
