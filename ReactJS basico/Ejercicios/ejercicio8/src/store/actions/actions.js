// Declarar las acciones que se van a llevar a cabo

export const ADD_TASK = 'ADD_TASK';
export const TOOGLE_TASK = 'TOOGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

let taskId = 0;

/**
 * 
 * @param {String} taskTitle 
 * @returns action ADD_TASK
 */
export const addTask = (taskTitle) => {
    return {
        type: ADD_TASK,
        payload: {
            id: ++taskId,
            taskTitle
        }
    }
}

/**
 * 
 * @param {Number} id 
 * @returns action TOOGLE_TASK
 */
export const toogleTask = (id) => {
    return {
        type: TOOGLE_TASK,
        payload: {
            id
        }
    }
}

/**
 * 
 * @param {Number} id 
 * @returns 
 */
export const removeTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: {
            id
        }
    }
}

/**
 * 
 * @param {String} filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}