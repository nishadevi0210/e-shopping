import axios from 'axios'

export const fetchListFromServer = async (endpoint) => {
    try{
        let url = "http://localhost:5000/"+endpoint;
        let response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.log("error: ", err);
    }
}    


