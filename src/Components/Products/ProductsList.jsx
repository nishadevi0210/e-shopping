//import {useState} from 'react';
import Header from "../Header.jsx"
import ProductForList from './ProductForList.jsx';
import Footer from "../Footer.jsx";
//import axios from "axios";


const ProductsList = () => {

    //const [listOfProducts, setListOfProducts] = useState([]);
    //useContext to get list state here
    
    /*const fetchListOfProducts = async () => {
        try {
            let endpoint = "http://localhost:5000/listOfProducts";
            const response = await axios.get(endpoint);
            return response.data;
        } catch (error) {
            console.log("error: ", error);
        }
    }

    const getListOfProducts = async () => {
        const listFromServer = await fetchListOfProducts();
        setListOfProducts(listFromServer);
    }

    getListOfProducts();*/

    const listOfProducts = [
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
        },
        {
            "id": 9,
            "name": "product9",
            "price": 50,
            "details": "lorem ipsum lorem ipsum lorem ipsum",
            "img": "a"
        },
        {
            "id": 10,
            "name": "product10",
            "price": 500,
            "details": "lorem ipsum lorem ipsum lorem ipsum",
            "img": "a"
        }
    ];

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

export default ProductsList;