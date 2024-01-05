// USERS
import axios from "axios"
import { ADD_PRODUCT, GET_PRODUCTS, LOGIN, LOGOUT, SIGNUP, SINGLE_PRODUCT, SINGLE_PRODUCTS } from "./ActionType"

export const Signup=(data)=>{
    return{
        type: SIGNUP,
        payload:data
    }
}

export const Login=(data)=>{
    return{
        type: LOGIN,
        payload:data
    }
}

export const Logout=()=>{
    return{
        type:LOGOUT
    }
}


// PRODUCT
export const Product=(data)=>async(dispatch)=>{
    let products = await axios.post("http://localhost:3100/products", data)

    dispatch({
        type:ADD_PRODUCT,
        payload:products
    })
}

export const Getproduct=()=>async(dispatch)=>{
    let get=await axios.get("http://localhost:3100/products")

    dispatch({
        type:GET_PRODUCTS,
        payload:get
    })
}

export const Singleproduct=(id)=>async(dispatch)=>{
    let get=await axios.get(`http://localhost:3100/products/${id}`)

    dispatch({
        type:SINGLE_PRODUCT,
        payload:get
    })
}