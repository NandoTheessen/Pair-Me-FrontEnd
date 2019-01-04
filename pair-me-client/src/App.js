import React, { Component } from 'react'
import './App.css'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import Navigation from './components/Navigation'
import Welcome from './components/Welcome'
import Dashboard from './components/Dashboard'

class App extends Component {
  componentDidMount() {
    const { search } = this.props.location
    if (search) {
      const code = search.slice(6, -7)
      axios
        .post(`https://evening-refuge-39471.herokuapp.com/api/users/login`, {
          code
        })
        .then(res => {
          // do redux stuff here
          console.log(res)
        })
        .catch(e => console.log(e))
    }
  }
  render() {
    return (
      <div className="App">
        <div className="nav-container">
          <Navigation />
        </div>
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/dashboard" component={Dashboard} />
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

export default withRouter(connect(mapStateToProps)(App))
