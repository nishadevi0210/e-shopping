import {Link} from "react-router-dom";

const ProductForList = (props) => {
    let eachProduct = props.eachProduct;
    return(
        <div className="row"> 
            <div className="col-sm">
                <div className="foto">
                    <Link to={"/product/"+eachProduct.id}>{eachProduct.name}</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductForList;