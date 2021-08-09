import {useState} from 'react';
import ProductOrdered from './ProductOrdered.jsx';
import { Link } from 'react-router-dom';

const ProductTableInCart = (props) => {

    const order = props.order;

    const [total, setTotal] = useState(0);
    
    return (
        <div className="container pt-3">
        <table className="table table-hover">
            <thead>
                <tr className="table-info">
                    <th scope="col"></th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {order.map(
                    (id, index) => {
                        return( 
                            <ProductOrdered key={index} 
                                index={index} 
                                productId={id} 
                                total={total} 
                                setTotal={setTotal}
                            />
                        )    
                    }
                )}
                <tr className="table-primary">
                    <th scope="row"></th>
                    <th>Total Price</th>
                    <th scope="row">£{total}</th>
                    <th scope="row"></th>
                </tr>
            </tbody>
        </table>
        <Link to="/"> Add more products... </Link>
    </div>
    )
}

export default ProductTableInCart;
