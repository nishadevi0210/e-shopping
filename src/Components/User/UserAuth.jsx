import React from 'react';
import Header from "../Header.jsx";
import { Link } from 'react-router-dom';
import Footer from "../Footer.jsx";

const UserAuth = () => {
    
    return (
        <div className="container pt-3">
            <Header />
            <p>If you are new, first register yourself ...</p>
            <button className="btn btn-primary">
               <Link to="/register">Register</Link>
            </button>
            <br />
            <p>If you are already registered, login here ...</p>
            <button className="btn btn-primary">
                <Link to="/login">Login</Link>
            </button>
            <Footer />
        </div>    
    )
}

export default UserAuth;