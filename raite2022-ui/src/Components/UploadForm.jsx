import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import login from '../utils/login'

const UploadForm = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    const setText = {
        "password": setPassword,
        "email": setEmail,
  }

  const onInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setText[name](value);
  }

  const loginUser = (event) => {
    event.preventDefault()

    login(email,password)
  }

  return (
    <Form onSubmit={loginUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={(e) => onInputChange(e)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password"placeholder="Password" value={password} onChange={(e) => onInputChange(e)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default UploadForm