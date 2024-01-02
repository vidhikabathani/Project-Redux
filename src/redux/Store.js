import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import UserReducer from "./reducers/UserReducer";
import { ProductReducer } from "./reducers/ProductReducer";
import { thunk } from "redux-thunk";

const Combine = combineReducers({
    UserReducer: UserReducer,
    ProductReducer:ProductReducer
})

export const Store = legacy_createStore(Combine, applyMiddleware(thunk))