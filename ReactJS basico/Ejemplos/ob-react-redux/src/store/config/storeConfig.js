// Redux
import { applyMiddleware, compose, createStore } from "redux"
import createSagaMiddleware from 'redux-saga'
// Only for dev environment
import { composeWithDevTools } from 'redux-devtools-extension';
// Own imports
import { watcherSaga } from "../sagas/sagas";
import { rootReducer } from "../reducers/rootReducer";

export const createAppStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    // Vinculated rootReducer with the app and add devtools from the environment
    let store = createStore(
        rootReducer, 
        compose(
            applyMiddleware(sagaMiddleware), 
            composeWithDevTools()
            )
        );

    // Init the WATCHER SAGA
    sagaMiddleware.run(watcherSaga);

    return store;
}

// export const createAppStore = () => {
//     // Vinculated rootReducer with the app and add devtools from the environment
//     let store = createStore(rootReducer, composeWithDevTools());

//     return store;
// }
