import React, { useReducer, useContext } from 'react';

// Actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const myContext = React.createContext(null);

const Points = () => {

    const state = useContext(myContext);

    return (
        <div>
            Points: { state.count }
        </div>
    )
}

const Counter = () => {

    // Initial state for Reducer
    const initialState = {
        count: 0
    }

    // Reducer to change State
    const reducer = (state, action) => {
        switch(action.type){
            case INCREMENT:
                return {
                    count: state.count + action.payload.quantity
                }
            case DECREMENT:
                return {
                    count: state.count - action.payload.quantity
                }
            case RESET:
                return {
                    count: 0
                }
            default: 
                return state;
        }
    }

    // Asign useReducer to state, reducer and dispatch
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <myContext.Provider value={ state }>
            <div>
                <Points></Points>
                <button onClick = { 
                    () => dispatch({ 
                        type: INCREMENT,
                        payload: {
                            quantity: 1
                        } 
                    })
                }>
                    + 1
                </button>
                <button onClick = { 
                    () => dispatch({ 
                        type: INCREMENT,
                        payload:{
                            quantity: 5
                        } 
                    })
                }>
                    + 5
                </button>
                <button onClick = { 
                    () => dispatch({ 
                        type: DECREMENT,
                        payload:{
                            quantity: 1
                        } 
                    }) // , payload{ counter: X }
                }>
                    - 1
                </button>
                <button onClick = { 
                    () => dispatch({ type: RESET }) // , payload{ counter: X }
                }>
                    0
                </button>
            </div>
        </myContext.Provider>
    );
}

export default Counter;
