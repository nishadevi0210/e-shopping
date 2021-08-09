import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
    
    return (
        <div>
            this is a form
            after form filled
            alert: "u r registered" (in db)
            <Link to="/home"> start shopping </Link>  
        </div>    
    )
}

export default RegistrationForm;