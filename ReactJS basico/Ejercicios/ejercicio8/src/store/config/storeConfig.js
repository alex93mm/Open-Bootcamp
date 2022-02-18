import { createStore } from "redux"
import { rootReducer } from "../reducers/rootReducer"
import { composeWithDevTools } from 'redux-devtools-extension';


export const createAppStore = () => {
    let store = createStore(rootReducer, composeWithDevTools());
    return store;
}