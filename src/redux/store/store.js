import { configureStore } from "@reduxjs/toolkit";
import { childrenReducer } from "../slices/childrenListSlice";
import { countReduser } from "../slices/countSlice";

const store = configureStore({
    reducer: {
        childrenReducer,
        countReduser,
    },
});

export default store;