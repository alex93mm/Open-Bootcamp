import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { loginReducer } from "./loginReducer";
import { todosReducer } from "./todosReducer";

// Function for link states with reducers
export const rootReducer = combineReducers(
    {
        // state name : reducer that will control it
        todosState : todosReducer,
        filterState: filterReducer,
        // Async example from loginReducer
        loginState: loginReducer
        // ... Add more states and reducers to include them in the store
    }
)