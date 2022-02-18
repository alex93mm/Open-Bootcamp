// Incremental ID for TODOs

let nextTodoId = 1;

// Make the actions as a constants values
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// Function to addTodos
/**
 * 
 * @param {string} text 
 * @returns actions ADD_TODO
 */

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoId ++,
            text // text: text
        }
    }
}

// Function to change TODO state
/**
 * 
 * @param {number} id 
 * @returns actions TOGGLE_TODO
 */

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

// Functions to add a filter options
/**
 * 
 * @param {string} filter 
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