import { combineReducers, legacy_createStore } from "redux";
import UserReducer from "./reducers/UserReducer";
import { ProductReducer } from "./reducers/ProductReducer";

const Combine = combineReducers({
    UserReducer: UserReducer,
    ProductReducer:ProductReducer
})

export const Store = legacy_createStore(Combine, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())