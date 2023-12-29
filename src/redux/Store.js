import { legacy_createStore } from "redux";
import UserReducer from "./reducers/UserReducer";

const Combine = {
    UserReducer: UserReducer
}

export const Store = legacy_createStore(Combine, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())