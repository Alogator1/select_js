/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
// libraries
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { enableBatching } from 'redux-batched-actions';
import thunk from 'redux-thunk';
// reducers
import { rootReducer } from '../reducers/root';
import { composeWithDevTools } from 'redux-devtools-extension';



// .......... STORE HELPERS .......... //
const enhancers = [];
const middleware = [
    thunk, // used for asynchronous actions
    routerMiddleware()
];

const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware),
    ...enhancers
);



/* ========== ~~~~~~~~~~ STORE (application state) ~~~~~~~~~~ ========== */
const store = createStore(
    enableBatching(rootReducer),
    composedEnhancers,
);



/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default store;
