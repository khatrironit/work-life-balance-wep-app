import { combineReducers } from "@reduxjs/toolkit";
import sidebar from './sidebar';
import user from './user';

const appReducer = combineReducers({
    sidebar,
    user
});

const rootReducer = (state={}, action) => appReducer(state, action) || state;

export default rootReducer;