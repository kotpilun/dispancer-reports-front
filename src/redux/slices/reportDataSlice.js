import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reportData: {
        childInfo: [],
        give: '',
        city: '',
        dateOfCompetition: '',
        year: ''
    }
};

export const reportDataSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
        setReportData: (state, action) => {
            state.reportData = action. payload;
        },
        addChildInfoToReport: (state, action) => {
            state.reportData.childInfo = [...state.reportData.childInfo, action.payload]; 
        },
        removeChildInfoFromReport: (state, action) => {
            state.reportData.childInfo = state.reportData.childInfo.filter((item) => item._id != action.payload._id)
        }
    }
});

export const reportDataReducer = reportDataSlice.reducer;
export const {setReportData, addChildInfoToReport, removeChildInfoFromReport } = reportDataSlice.actions;