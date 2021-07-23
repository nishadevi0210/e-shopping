import React from 'react';
import Header from "../Header.jsx"
import Footer from "../Footer.jsx"
import {useParams} from "react-router-dom";


const ProductDetails = () => {
    let {id} = useParams();

    let listOfDetails = [
        {
            "id": 1,
            "name": "product1",
            "price": 44,
            "details": "lorem ipsum lorem ipsum lorem ipsum",
            "img": "a"
        },
        {
            "id": 2,
            "name": "product2",
            "price": 40,
            "details": "lorem ipsum lorem ipsum lorem ipsum",
            "img": "a"
        },
        {
            "id": 3,
            "name": "product3",
            "price": 94,
            "details": "lorem ipsum lorem ipsum lorem ipsum",
            "img": "a"
        },
        {
            "id": 4,
            "name": "product4",
            "price": 30,
            "details": "lorem ipsum lorem ipsum lorem ipsum",
            "img": "a"
        },
        {
            "id": 5,
            "name": "product5",
            "price": 400,
            "details": "lorem ipsum lorem ipsum lorem ipsum",
            "img": "a"
        },
        {
            "id": 6,
            "name": "product6",
            "price": 340,
            "details": "lorem ipsum lorem ipsum lorem ipsum",
            "img": "a"
        },
        {
            "id": 7,
            "name": "product7",
            "price": 10,
            "details": "lorem ipsum lorem ipsum lorem ipsum",
            "img": "a"
        },
        {
            "id": 8,
            "name": "product8",
            "price": 15,
            "details": "lorem ipsum lorem ipsum lorem ipsum",
            "img": "a"
        }
    ];

    let result = listOfDetails.filter(
        (listItem) => {
            return listItem.id == id;
        }
    );
    let thisProduct = result[0]; 

    return (
        <div className="container pt-3">
            <Header />
            <div className="details">
                <h1>{thisProduct.name}</h1>
                <h2>Price: £{thisProduct.price}</h2>
                <h3>Details: {thisProduct.details}</h3>
                <button className="btn btn-primary">Add to cart</button>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetails;

