// Initial State for loginState

import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from "../actions/asyncActions";

let initialState = {
    fetching: false,
    token: null,
    error: null,
    logged: false
};

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                token: null,
                error: null,
                logged: false
            };
        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                token: action.payload.token,
                error: null,
                logged: true
            };
        case API_CALL_FAILURE:
            return {
                ...state,
                fetching: false,
                token: null,
                error: action.payload.error,
                logged: false
            };
        default:
            return state;

    }
}