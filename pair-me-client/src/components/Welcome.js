import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/index'
import Login from './Login'

const Welcome = props => {
  return (
    <div className="welcome-container">
      <div className="welcome-header">Welcome to PairMe!</div>
      To get started, login here: Need an account?{' '}
      <NavLink to="/register">Sign up here!</NavLink>
    </div>
  )
}

export default withRouter(Welcome)
