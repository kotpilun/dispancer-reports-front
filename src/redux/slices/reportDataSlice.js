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
            console.log('Before update:', [...state.reportData.childInfo]);
            state.reportData.childInfo = [...state.reportData.childInfo, action.payload];
            console.log('After update:', [...state.reportData.childInfo]); 
        },
        removeChildInfoFromReport: (state, action) => {
            state.reportData.childInfo = state.reportData.childInfo.filter((item) => item._id != action.payload._id)
        },
        editChildInfoOnReport: (state, action) => {
            console.log('state.reportData.childInfo', state.reportData.childInfo)
            console.log('action.payload', action.payload)
            const { _id } = action.payload; 
            state.reportData.childInfo = state.reportData.childInfo.map(item => 
                item._id != _id ? item : action.payload
            );
            console.log('state.reportData.childInfo', state.reportData.childInfo)
        }
    }
});

export const reportDataReducer = reportDataSlice.reducer;
export const {setReportData, addChildInfoToReport, removeChildInfoFromReport, editChildInfoOnReport } = reportDataSlice.actions;