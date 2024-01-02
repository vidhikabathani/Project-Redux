import { PRODUCT } from '../ActionType';

const initial={
    product:[]
}

export const ProductReducer=(state=initial,{type,payload})=> {
    switch (type) {
        case PRODUCT:
            return{
                ...state,
                product:[...state.product,payload]
            }
    
        default:
            return state
    }
}