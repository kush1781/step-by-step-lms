import React from 'react'
import api from '../api'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function LoginNavbar(props) {
  function handleLoginClick(e) {
    api.login()
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">STEP BY STEP</Navbar.Brand>
      <Nav className="mr-auto">
      </Nav>
    </Navbar>
  )
}

export default LoginNavbar
