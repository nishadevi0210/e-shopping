import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const RegistrationForm = () => {
    
    return (
        <div>

            
            after form filled
            alert: "u r registered" (in db)
            <Link to="/home"> start shopping </Link>  
        </div>    
    )
}

export default RegistrationForm;