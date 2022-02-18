import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../actions/asyncActions';

// WATCHER SAGA
// Listens the API_CALL_REQUEST actions

export function* watcherSaga(){
    //Listen the action and starts a worker saga
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

// WORKER SAGA
// Is called from watcher saga, does the Login and dispatches an action
export function* workerSaga(action){
    try{
        const response = yield call(fetchHttp(action.payload.request));
        // Obtains the token from response
        const token = response.data.token;
        yield put({
            type: action.payload.okAction, //API_CALL_SUCCESS
            payload: {
                token
            }
        });

    }
    catch(error){
        yield put({
            type: action.payload.failAction, //API_CALL_FAILURE
            payload: {
                error
            }
        });
    }
}

function fetchHttp(request){
    return function(){
        return(axios(request));
    }
}