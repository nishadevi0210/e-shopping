import Header from "../Header.jsx"
import Categories from "./Categories.jsx";
import Footer from "../Footer.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

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