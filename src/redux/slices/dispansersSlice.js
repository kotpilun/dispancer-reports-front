import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dispancersInfo:  [],
}

export const dispancerSlice = createSlice({
    name: 'dispancers',
    initialState,
    reducers: {
        setDispancers: (state, action) => {
            state.dispancersInfo = action.payload;
        },
    },
});

export const { setDispancers } = dispancerSlice.actions;
export const  dispancerReduser = dispancerSlice.reducer; 