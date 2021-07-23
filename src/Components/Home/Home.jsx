import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header.jsx"
import Footer from "../Footer.jsx"
import Categories from "./Categories.jsx";
//import moda from "../../assets/img/moda.jpg";

const Home = () => {
    return (
        <div className="container pt-3">
            <Header />
            <Categories />
            <Footer />
        </div>    
    )   
}

export default Home;