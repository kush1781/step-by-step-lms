import React from 'react'
import Login from '../Login'
import LoginNavbar from '../LoginNavbar'

export default function LoginHome(props) {
  return (
    <div>
      <LoginNavbar />
      <Login history={props.history} />
    </div>
  )
}
