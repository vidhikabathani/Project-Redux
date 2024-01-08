import { ADD_CART, ADD_PRODUCT, GET_CART, GET_PRODUCTS, REMOVE_CART, SINGLE_PRODUCT } from '../ActionType';

const initial = {
    product: [],
    single_product: {},
    cart: []
}

export const ProductReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT:
            return {
                ...state,
                product: [...state.product, payload]
            }

        case GET_PRODUCTS:
            return {
                ...state,
                product: payload
            }

        case SINGLE_PRODUCT:
            return {
                ...state,
                single_product: payload
            }

        case ADD_CART:
            return {
                ...state,
                cart: [...state.cart, payload],
            };

        case GET_CART:
            return {
                ...state,
                cart: payload,
            };

        case REMOVE_CART:
            return {
                ...state,
                cart: state.cart.filter((e) => e.id !== payload),
            };


        default:
            return state
    }
}