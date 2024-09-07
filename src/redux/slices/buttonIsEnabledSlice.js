import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEnable: false
};

export const buttonIsEnabledSlice = createSlice({
    name: 'buttonIsEnabled',
    initialState,
    reducers: {
        setIsEnabled: (state, action) => {
            state.isEnable = action.payload;
        }
    }
});

export const { setIsEnabled } = buttonIsEnabledSlice.actions;
export const buttonIsEnabledReducer = buttonIsEnabledSlice.reducer;