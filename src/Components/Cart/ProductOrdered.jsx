import {useEffect} from 'react';

const ProductOrdered = (props) => {

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

    const selectedProductId = props.productId;
    const selectedProductIndex = props.index;
    const total = props.total;
    const setTotal = props.setTotal;

    const filteredArr = listOfProducts.filter(
        (eachProduct) => {
            return eachProduct.id === selectedProductId;
        }
    );
    const selectedProduct = filteredArr[0];

    useEffect(
        () => {
            setTotal(total + selectedProduct.price);
        }, []
    );
    
    return (
        <tr>
            <td>{selectedProductIndex + 1}</td>
            <td>{selectedProduct.name}</td>
            <td>£{selectedProduct.price}</td>
            <td><button className="btn btn-sm btn-danger">Remove</button></td>
        </tr>
    )
}

export default ProductOrdered;