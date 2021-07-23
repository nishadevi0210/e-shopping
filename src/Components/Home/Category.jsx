import React from 'react';
import {Link} from "react-router-dom";


const Category = ({eachCategory}) => {

    return(
        <div className="col-sm">
            <div className="foto">
                <Link to="/products"> {eachCategory.name} </Link>
            </div>
        </div>
    )
}

export default Category;
