import { ADD_TASK, DELETE_TASK, SET_VISIBILITY_FILTER, TOOGLE_TASK } from "../actions/actions";

let initialState = [];

export const tasksReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TASK:
            return [
                ...state,
                {
                    id: action.payload.id,
                    taskTitle: action.payload.taskTitle,
                    completed: false
                }
            ];
        case TOOGLE_TASK:
            return state.map((task) => 
                (task.id === action.payload.id) 
                ?
                {
                    ...task,
                    completed: !task.completed
                }
                :
                task
            );
        case DELETE_TASK:
            return state.filter((task) => task.id !== action.payload.id);
        case SET_VISIBILITY_FILTER:
            return state;
        default: 
            return state;
    }
}