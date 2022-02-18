import { ADD_TASK, DELETE_TASK, SET_VISIBILITY_FILTER, TOOGLE_TASK } from "./TaskActions";

export function taskReducer(state, action) {
    switch(action.type){
        case ADD_TASK:
            return {
                filter: state.filter,
                tasks: [
                    ...state.tasks,
                    {
                        id: action.payload.id,
                        taskTitle: action.payload.taskTitle,
                        completed: false
                    }
                ]
            };
        case TOOGLE_TASK:
            return {
                filter: state.filter,
                tasks: state.tasks.map((task) => 
                    (task.id === action.payload.id) 
                    ?
                        {
                            ...task,
                            completed: !task.completed
                        }
                    :
                        task
                    )
            }; 
        case DELETE_TASK:
            return {
                filter: state.filter,
                tasks: state.tasks.filter((task) => task.id !== action.payload.id)
            }; 
        case SET_VISIBILITY_FILTER:
            return {
                filter: action.payload.filter,
                tasks: state.tasks
            };
        default: 
            return state;
    }
}