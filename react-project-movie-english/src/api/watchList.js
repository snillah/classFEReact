import productDB from './db.js'
import axios from "axios";

const productDB = axios.create({
    baseURL:'https://dummyjson.com/'
});




// GET Product List
export const getProductList =()=> productDB.get("products");
// post
export const addCartList =()=> productDB.get("/");
// update
export const updateCartList =()=> productDB.get("/products");
//delete
export const deleteCartList =()=> productDB.get("/");