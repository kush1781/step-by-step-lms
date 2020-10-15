import React, { useState } from 'react'
import api from '../api'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('Select Type');
  const [saveLogin, setSaveLogin] = useState(false);
  function handleSubmit(e) {
    e.preventDefault()
    console.log(username, password, userType, saveLogin)
    api.login(username, password, userType)
      .then(result => {
        //save to redux
        console.log('SUCCESS!')
        if (userType == 'Student')
          props.history.push('/student')
        else if (userType == 'Teacher')
          props.history.push('/teacher')
        else
          props.history.push('/parent')
      })
      .catch(err => setMessage(err.toString()))
  }

  const [message, setMessage] = useState(null)

  return (
    <div className="login-form">
      <Form onSubmit={handleSubmit} >
        <h2>Login</h2>
        <Form.Group controlId="usertype">
          <Form.Label>User Type</Form.Label>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {userType}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onSelect={() => { setUserType('Student') }} >Student</Dropdown.Item>
              <Dropdown.Item onSelect={() => { setUserType('Teacher') }} >Teacher</Dropdown.Item>
              <Dropdown.Item onSelect={() => { setUserType('Parent') }} >Parent</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setUsername(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Keep me logged in" onChange={(e) => { setSaveLogin(!saveLogin) }} />
        </Form.Group>
        <Button variant="dark" type="submit">
          Login
        </Button>
      </Form >
      {message && <div className="info info-danger">{message}</div>}
    </div>
  )
}
