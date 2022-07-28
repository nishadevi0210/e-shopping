import {useState, useEffect} from 'react';
import { fetchListFromServer } from '../../fetchDataFromServer';
import Category from './Category';

const Categories = () => {

    const [listOfCategories, setListOfCategories] = useState([]);

    useEffect(
        () => {
            const getList = async () => {
                let listFromServer = await fetchListFromServer("listOfCategories");
                setListOfCategories(listFromServer);
            }
        getList();
        }, []
    );
        
    return (
        listOfCategories.map(
            (eachCategory, index) => {
                return (
                    <Category key={index} eachCategory={eachCategory} />
                )
            }
        )
    )
}

export default Categories;



