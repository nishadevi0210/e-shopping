import React from 'react';
import { Link } from 'react-router-dom';


const LoginController = () => {
    
    return (
        <div>
            username and password
            submit: (if not found in db, alert)
            if found: <Link to="/home"> start shopping </Link>  
 
        </div>    
    )
}

export default LoginController;