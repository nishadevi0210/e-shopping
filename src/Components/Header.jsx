import React from 'react';
import {Link} from "react-router-dom";
import moda from "../assets/img/moda.jpg";

const Header = () => {
    return (
        
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
                <Link className="navbar-brand" to="/">
                    <img src={moda} alt="logo" height="" width = "70px" />
                </Link>
                <h1 className="navbar-text"> e-shopping </h1>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/Cart">Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">User</Link>
                    </li>
                </ul>
            </nav>
        
    )
}

export default Header;



/*<span class="navbar-toggler-icon"></span>
<div class="navbar-nav">
<a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
<a class="nav-item nav-link" href="#">Features</a>
<a class="nav-item nav-link" href="#">Pricing</a>
<a class="nav-item nav-link disabled" href="#">Disabled</a>
</div>

*/