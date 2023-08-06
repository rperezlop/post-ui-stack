import {combineReducers, applyMiddleware} from "redux";
import post from "./post";
import message from "./message";
const mainReducer = combineReducers({
  post,
  message
});

const rootReducer = (state, action) => {
  return mainReducer(state, action);
}
/*  if (action.type === AUTH_LOGOUT_SUCCESS || action.type === 'RESET_REDUCERS') {
    // clearing up all the reducers but the config one
    const config = state.config;
    state = undefined;
    state = {...state, config}
  }
  return mainReducer(state, action);
};*/
export default rootReducer
