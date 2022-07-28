import { useState, useEffect } from 'react'
import Header from "../Header.jsx";
import { fetchListFromServer }  from "../../fetchDataFromServer.jsx";
import ProductForList from './ProductForList.jsx';
import Footer from "../Footer.jsx";

const ProductsList = () => {

    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(
        () => {
            const getData = async () => {
                let listFromServer = await fetchListFromServer("listOfProducts");
                setListOfProducts(listFromServer);
            }
            getData();
        }, []
    )
    console.log(listOfProducts);

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