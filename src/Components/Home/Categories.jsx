import React from 'react';
import Category from './Category';

const Categories = () => {
    const listOfCategories = [
        {
            "id": 1,
            "name": "moda"
        },
        {
            "id": 2,
            "name": "casa"
        },
        {
            "id": 3,
            "name": "dispositivi"
        },
        {
            "id": 4,
            "name": "altro"
        }
    ];
    
    return (
        listOfCategories.map(
            (eachCategory) => {
                return (
                    <Category eachCategory={eachCategory} />
                )
            }
        )
    )
}

export default Categories;
