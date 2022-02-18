import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { tasksReducer } from "./tasksReducer";

export const rootReducer = combineReducers({
    tasksState: tasksReducer,
    filterState: filterReducer
})