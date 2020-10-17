import React from 'react'
import Login from '../Login'
import LoginNavbar from '../LoginNavbar'

export default function LoginHome(props) {
  return (
    <div>
      <LoginNavbar />
      <div style={{ textAlign: 'center' }}>
        <h1>Take the first step towards learning</h1>
      </div>
      <Login history={props.history} />
    </div>
  )
}
