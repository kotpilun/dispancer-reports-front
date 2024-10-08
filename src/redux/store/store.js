import { configureStore } from "@reduxjs/toolkit";
import { childrenReducer } from "../slices/childrenListSlice";
import { countReduser } from "../slices/countSlice";
import { dispancerReduser } from "../slices/dispansersSlice";
import { buttonIsEnabledReducer } from "../slices/buttonIsEnabledSlice";
import { reportDataReducer } from "../slices/reportDataSlice";

const store = configureStore({
    reducer: {
        childrenReducer,
        countReduser,
        dispancerReduser,
        buttonIsEnabledReducer,
        reportDataReducer,
    },
});

export default store;