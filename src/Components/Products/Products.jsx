import React from 'react';
import Header from "../Header.jsx"
import Footer from "../Footer.jsx"
import ProductForList from './ProductForList.jsx';
//import moda from "../../assets/img/moda.jpg";


const Products = () => {

    let listOfProducts = [
        {
            "id": 1,
            "name": "product1"
        },
        {
            "id": 2,
            "name": "product2"
        },
        {
            "id": 3,
            "name": "product3"
        },
        {
            "id": 4,
            "name": "product4",
        },
        {
            "id": 5,
            "name": "product5"
        },
        {
            "id": 6,
            "name": "product6"
        },
        {
            "id": 7,
            "name": "product7"
        },
        {
            "id": 8,
            "name": "product8"
        }
    ]

    return (
        <div className="container pt-3">
            <Header />
                {listOfProducts.map(
                    (eachProduct) => {
                        return(
                            <ProductForList key={eachProduct.id} eachProduct={eachProduct} />
                        )
                    }
                )}
            <Footer />
        </div>
    )
}

export default Products;