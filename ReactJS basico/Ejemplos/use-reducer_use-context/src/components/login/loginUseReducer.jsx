import React, { useReducer } from 'react';

// Actions
const FIELD = 'FIELD';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

// Initial State
const initialState = {
    userName: '',
    password: '',
    error: '',
    isLoading: false,
    isLoggedIn: false
}

// Reducer
const loginReducer = (state, action) => {
    switch(action.type){
        case FIELD:
            return {
                ...state,
                [action.fieldName]: action.payload
            };
        case LOGIN:
            return {
                ...state,
                error: '',
                isLoading: true,
                isLoggedIn: false
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };
        case SUCCESS:
            return {
                ...state,
                error: '',
                isLoading: false,
                isLoggedIn: true,
            };
        case ERROR:
            return {
                ...state,
                error: 'Invalid Username or Password',
                isLoading: false,
                isLoggedIn: false,
                userName: '',
                password: ''
            };
        default:
            return state;
    }
}

const Loginusereducer = () => {

    const [state, dispatch] = useReducer(loginReducer, initialState);

    // Obtains all variables from state
    const { userName, password, error, isLoading, isLoggedIn } = state;

    const submit = async (e) => {
        e.preventDefault();
        dispatch({
            type: LOGIN
        });
        try{
            await function login({userName, password}) {
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if(userName === 'admin' && password === 'admin'){
                            resolve();
                        } else {
                            reject();
                        }
                    }, 6000);
                })
            }
            dispatch({
                type: SUCCESS
            });
        } catch (error) {
            dispatch({
                type: ERROR
            });
        }
    }

    const logOut = (e) => {
        e.preventDefault();
        dispatch({
            type: LOGOUT 
        })
    }

    return (
        <div className='App'>
            <div>
                {
                    isLoggedIn ? (
                        <div>
                            <h1>Welcome { userName }</h1>
                            <button onClick={ logOut }>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={ submit }>
                            {
                                error && <p style={{color: 'tomato'}}>{ error }</p>
                            }
                            <input 
                                type='text' 
                                placeholder='Username' 
                                value={userName}
                                onChange = {(e) => {
                                    dispatch({
                                        type: FIELD,
                                        fieldName: 'userName',
                                        payload: e.currentTarget.value
                                    })
                                }}
                                />
                            <input 
                                type='password' 
                                placeholder='Password' 
                                value={password}
                                onChange = {(e) => {
                                    dispatch({
                                        type: FIELD,
                                        fieldName: 'password',
                                        payload: e.currentTarget.value
                                    })
                                }}
                                />
                            <button
                                type='submit'>
                            { isLoading ? 'Loading...' : 'Login' }
                            </button>
                        </form>
                    )
                }
            </div>
        </div>
    );
}

export default Loginusereducer;
