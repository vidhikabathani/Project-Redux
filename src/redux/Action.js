import axios from "axios"
import { ADD_CART, ADD_PRODUCT, GET_CART, GET_PRODUCTS, LOGIN, LOGOUT, REMOVE_CART, SIGNUP, SINGLE_PRODUCT } from "./ActionType"




// USERS
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
        payload:products.data
    })
}

export const Getproduct=()=>async(dispatch)=>{
    let get=await axios.get("http://localhost:3100/products")

    dispatch({
        type:GET_PRODUCTS,
        payload:get.data
    })
}

export const Singleproduct=(id)=>async(dispatch)=>{
    let singlep=await axios.get(`http://localhost:3100/products/${id}`)

    dispatch({
        type:SINGLE_PRODUCT,
        payload:singlep.data
    })
}



// CART 
export const AddCart=(data)=>async(dispatch)=>{
    let res=await axios.post("http://localhost:3100/cart",data)

    dispatch({
        type:ADD_CART,
        payload:res.data
    })
}

export const GetCart=()=>async(dispatch)=>{
    let res=await axios.get("http://localhost:3100/cart")

    dispatch({
        type:GET_CART,
        payload:res.data
    })
}

export const removeCart=(id)=>async(dispatch)=>{
    let res=await axios.get(`http://localhost:3100/cart/${id}`)

    dispatch({
        type:REMOVE_CART,
        payload:id
    })
}