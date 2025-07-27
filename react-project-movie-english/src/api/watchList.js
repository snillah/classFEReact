import axios from "axios";

const productApi = axios.create({
    baseURL:'https://dummyjson.com/'
});




// GET Product List
export const getProductList =()=> productApi.get("products");
// post
export const addCartList =()=> productApi.get("/");
// update
export const updateCartList =()=> productApi.get("/products");
//delete
export const deleteCartList =()=> productApi.get("/");