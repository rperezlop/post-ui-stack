import {combineReducers, applyMiddleware} from "redux";
import {legacy_createStore as createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from "../reducers/";
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
});

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)),
);

export default store;