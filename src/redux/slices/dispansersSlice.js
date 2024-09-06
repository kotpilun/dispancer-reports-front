import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllDispancers } from "../../controllers/getDispancers";

const initialState = {
    dispancersInfo:  [],
}

export const getDispancers = createAsyncThunk(
    'dispancers/getDispancers',
    async () => {
        const data = await getAllDispancers();
        return data;
    }
);


export const dispancerSlice = createSlice({
    name: 'dispancers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDispancers.fulfilled, (state, action) => {
            state.dispancersInfo = action.payload;
        });
    }
});

export const  dispancerReduser = dispancerSlice.reducer; 