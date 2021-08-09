import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div>
            <span>Your cart is empty. </span>
            <Link to="/"> Click to add products in cart. </Link>
        </div>
    )
}

export default EmptyCart;
