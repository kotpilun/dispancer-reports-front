import { configureStore } from "@reduxjs/toolkit";
import { childrenReducer } from "../slices/childrenListSlice";
import { countReduser } from "../slices/countSlice";
import { dispancerReduser } from "../slices/dispansersSlice";

const store = configureStore({
    reducer: {
        childrenReducer,
        countReduser,
        dispancerReduser,
    },
});

export default store;