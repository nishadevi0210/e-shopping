import React from 'react';
import { Link } from 'react-router-dom';


const LoginController = () => {
    
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="loginEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Enter your email address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="loginPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="loginCheckbox">
                    <Form.Check type="checkbox" label="Save Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            submit: (if not found in db, alert)
            if found: <Link to="/home"> start shopping </Link>  
 
        </div>    
    )
}

export default LoginController;