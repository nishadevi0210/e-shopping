import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import ProductsList from "./Components/Products/ProductsList.jsx";
import ProductDetails from './Components/Products/ProductDetails.jsx';
import Cart from "./Components/Cart/Cart.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { orderContext } from './orderContext.js';
//import {listContext} from './listContext.js';
//import UserAuth from './Components/User/UserAuth.jsx';


const App = () => {

  //const [listOfProducts, setListOfProducts] = useState([]);
  const [order, setOrder] = useState([]);
  
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={ProductsList} />
        <Route path="/product/:id" exact>
          <orderContext.Provider value={{order, setOrder}}>
            <ProductDetails />
          </orderContext.Provider>
        </Route>
        <Route path="/cart" exact>
          <orderContext.Provider value={{order, setOrder}}>
            <Cart />
          </orderContext.Provider>
        </Route>  
      </Switch>
    </Router>
  );
}
export default App;
//<Route path="/" exact component={UserAuth} />
//<Route path="/register" exact component={Register} />
//<Route path="/login" exact component={Login} />