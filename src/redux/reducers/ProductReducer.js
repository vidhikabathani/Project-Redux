import { ADD_PRODUCT, GET_PRODUCTS } from '../ActionType';

const initial={
    product:[]
}

export const ProductReducer=(state=initial,{type,payload})=> {
    switch (type) {
        case ADD_PRODUCT:
            return{
                ...state,
                product:[...state.product,payload]
            }

        case GET_PRODUCTS:
            return{
                ...state,
                product:payload
            }
    
        default:
            return state
    }
}