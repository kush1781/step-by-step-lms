import React, { useState } from 'react'
import api from '../api'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useSelector } from 'react-redux'

function LoginNavbar(props) {
  const [user] = useState(useSelector(state => state.user))
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className='clickable' onClick={() => props.history.push(`/${user.userType}/home`)}>
        <img
          src={require('../public/logo.png')}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        STEP BY STEP
      </Navbar.Brand>
    </Navbar>
  )
}

export default LoginNavbar
