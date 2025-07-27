import axios from "axios";

const productDB = axios.create({
    baseURL:'https://dummyjson.com/'
});

export default productDB;


productDB.interceptors.response.use(
    reponse=>response,
    error=>{
        console.error("productDb",error)
        return Promise.reject(error)
    }
);