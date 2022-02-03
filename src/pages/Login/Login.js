import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth/useAuth';
import useFirebase from '../../hooks/useFirebase/useFirebse';

const Login = () => {
  const {handleEmail,handlePassword,handleSubmit,googleSignIn} = useFirebase();
  return (
    <div>
        
        <div style={{margin:'40px',padding:'20px'}}>
<Form onSubmit={handleSubmit} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>     
      </div>
      <div>-----Or------</div><br /><br />
      <div  className=" gap-2">
      <Button onClick={googleSignIn} variant="warning" size="lg">
            Google Sign In
      </Button>
      </div>

    </div>
    

    );
};

export default Login;