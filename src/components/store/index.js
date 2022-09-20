import {combineReducers,applyMiddleware} from "redux";
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import post from "../reducers/post";
import thunk  from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
});

const mainReducer = combineReducers ({    
    post
});


const store = createStore(
    mainReducer, composeEnhancers(
        applyMiddleware(thunk)),  
    );

export default store;