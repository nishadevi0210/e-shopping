import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Products from "./Components/Products/Products.jsx";
import ProductDetails from './Components/Products/ProductDetails.jsx';
import Cart from "./Components/Cart/Cart.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/product/:id" exact component={ProductDetails} />
        <Route path="/cart" exact component={Cart} />
      </Switch> 
    </Router>  
  );
}
export default App;