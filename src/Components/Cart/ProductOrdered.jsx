import {useState, useEffect} from 'react';
import { fetchListFromServer }  from "../../fetchDataFromServer.jsx";
//import { orderContext } from '../../orderContext';

const ProductOrdered = (props) => {

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

    //const {order} = useContext(orderContext);

    const selectedProductId = props.productId;
    const selectedProductIndex = props.index; //index in [order]   
    const order = props.order;
    const setOrder = props.setOrder;

    let filteredArr = listOfProducts.filter(
        (eachProduct) => {
            return eachProduct.id === selectedProductId;
        }
    );
    const selectedProduct = filteredArr[0];

    useEffect(
        () => {
            const total = props.total;
            const setTotal = props.setTotal;
            setTotal(total + selectedProduct.price);
        }, [props]
    );

    const removeItem = (index) => {
        let newOrder = order.filter(
            (element, position) => {
                return position !== index;
            }
        );
        setOrder(newOrder);
    }
    
    return (
        <tr>
            <td>{selectedProductIndex + 1}</td>
            <td>{selectedProduct.name}</td>
            <td>£{selectedProduct.price}</td>
            <td><button className="btn btn-sm btn-danger" onClick={() => removeItem(selectedProductIndex)}>Remove</button></td>
        </tr>
    )
}

export default ProductOrdered;