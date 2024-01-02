// USERS
import { LOGIN, LOGOUT, PRODUCT, SIGNUP } from "./ActionType"

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
export const Product=(data)=>{
    return{
        type:PRODUCT,
        payload:data
    }
}