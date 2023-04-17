import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isAuthenticated:  false,
    username: "",
    userConfig: {},
}

const syncReducers = {
    loginUser: (state, { payload }) => {
        return {...state, username: payload.username, isAuthenticated: true}
    },
    logoutUser: () => {
        return INITIAL_STATE;
    },
    updateUserConfig: (state, {payload}) => {
        return {...state, userConfig: payload}
    }
}

const user = createSlice({
    name:'user',
    initialState: INITIAL_STATE,
    reducers: syncReducers
});

export const { loginUser, logoutUser, updateUserConfig } = user.actions;

export default user.reducer;