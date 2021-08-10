import {useContext} from 'react';
import Header from "../Header.jsx";
import { orderContext } from "../../orderContext.js";
import EmptyCart from './EmptyCart.jsx';
import ProductTableInCart from './ProductTableInCart.jsx';
import Footer from "../Footer.jsx";

const Cart = () => {
    const {order, setOrder} = useContext(orderContext);
    return (
        <div className="container pt-3">
            <Header />
            <h1><center>My Cart</center></h1>
            <div>
                {order.length === 0
                ? <EmptyCart />
                : <ProductTableInCart order={order} setOrder={setOrder} />      
                }
            </div>
            <Footer />
        </div>
    )
}

export default Cart;
