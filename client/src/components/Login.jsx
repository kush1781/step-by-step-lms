import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { setUser } from '../store/actions/user';
import login from '../apiCalls/login';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('Select Type');
  const [saveLogin, setSaveLogin] = useState(false);
  const dispatch = useDispatch();
  function handleSubmit() {
    const body = JSON.stringify({
      email: username,
      password
    })
    login(body, userType)
      .then(result => {
        console.log('SUCCESS!');
        console.log(result);
        dispatch(setUser(result));
        props.history.push(`/${userType.toLowerCase()}/home`);
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
      </Form>
      <Button variant="dark" onClick={handleSubmit}>
        Login
      </Button>
      <p>Not an existing User?</p>
      <Button variant="dark" onClick={() => { props.history.push('/signup') }}>
        Signup
      </Button>
      {message && <div className="info info-danger">{message}</div>}
    </div>
  )
}
