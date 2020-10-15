import React from 'react'
import api from '../api'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function LoginNavbar(props) {
  function handleLoginClick(e) {
    api.login()
  }
  const id = 1;
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          src={require('../public/logo.png')}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        STEP BY STEP
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/student/home">Home</Nav.Link>
        <Nav.Link href={`/student/course/${id}`}>My Courses</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default LoginNavbar
