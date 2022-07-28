import {useState, useEffect, useContext} from 'react';
import Header from "../Header.jsx";
import { fetchListFromServer }  from "../../fetchDataFromServer.jsx";
import {useParams} from "react-router-dom";
import {orderContext} from "../../orderContext.js";
import Footer from "../Footer.jsx"

const ProductDetails = () => {
    let {id} = useParams();
    id = parseInt(id);

    let listOfProducts = [];
    const [thisProduct, setThisProduct] = useState({name: "", price: "", details: ""});
    const {order, setOrder} = useContext(orderContext);

    useEffect(
        () => {
            const getData = async () => {
                let listFromServer = await fetchListFromServer("listOfProducts");
                listOfProducts = listFromServer;
                setProduct();
            }
            getData();
        }, []
    );

    const setProduct = () => {
        let result = listOfProducts.filter(
            (listItem) => {
                return listItem.id === id;
            }
        );
        setThisProduct(result[0]);
    }
   
    const addToCart = (thisProduct) => {
        let id = thisProduct.id;
        let newOrder = [...order, id];
        setOrder(newOrder);
        alert(thisProduct.name + " is added to cart.");
    }

    return (
        <div className="container pt-3">
            <Header />
            <div className="details">
                <h1>{thisProduct.name}</h1>
                <h2>Price: £{thisProduct.price}</h2>
                <h3>Details: {thisProduct.details}</h3>
                <button className="btn btn-primary" 
                    onClick={() => {addToCart(thisProduct)}}>
                    Add to cart
                </button>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetails;
// <button className="btn btn-info" onClick={history.goBack()}>Back to list</button>
