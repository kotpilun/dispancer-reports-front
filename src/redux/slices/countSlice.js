import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

export const countSlice = createSlice({
    name: 'acount',
    initialState,
    reducers: {
        setCount: (state, action) => {
            state.count = action.payload;
        },
    },
});

export const { setCount } = countSlice.actions;
export const  countReduser = countSlice.reducer; 