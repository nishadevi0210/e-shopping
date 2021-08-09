import React from 'react';
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";

const Login = () => {
    
    return (
        <div className="container pt-3">
            <Header />
            <LoginController />
            <Footer />
        </div>    
    )
}

export default Login;