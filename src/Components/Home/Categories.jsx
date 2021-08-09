//import axios from 'axios';
//import {useState, useEffect} from 'react';
import Category from './Category';

const Categories = () => {

    /*const [listOfCategories, setListOfCategories] = useState([]);

    useEffect(
        () => {
            const getList = async () => {
                let listFromServer = await fetchListOfCatagories();
                setListOfCategories(listFromServer);
            }

        getList();
        }, []
    );
    
    const fetchListOfCatagories = async () => {
        try {
            let endpoint = "http://localhost:5000/listOfCatagories";
            let response = await axios.get(endpoint);
            return response.data;
        } catch (error) {
            console.log("error: ", error);
        }
    }
*/

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
  ] 
        
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



