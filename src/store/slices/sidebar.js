import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    show: false,
    collapse: false,
}

const syncReducers = {
    changeSidebarVisiblity: (state) => {
        return {...state, collapse: !state.collapse}
    },
    changeMobileSidebarVisiblity: (state) => {
        return {...state, show: !state.show}
    }
}

const sidebar = createSlice({
    name:' sidebar',
    initialState: INITIAL_STATE,
    reducers: syncReducers
});

export const { changeMobileSidebarVisiblity, changeSidebarVisiblity } = sidebar.actions;

export default sidebar.reducer;