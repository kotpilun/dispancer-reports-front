import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getChildrenFromDB } from "../../controllers/getChildren";

const initialState = {
    searchValue: '',
    children: {
        childrenList: [],
        status: true,
    },
    childInfo: {},
};

export const getChildren = createAsyncThunk(
    'children/getChildren',
    async () => {
        const data = await getChildrenFromDB();
        return data;
    }
);

export const childrenSlice = createSlice({
    name: 'children',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },

        setChildrenList: (state, action) => {
            state.children.childrenList = action.payload;
        },
        
        setChildInfo: (state, action) => {
            state.childInfo = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getChildren.pending, (state) => {
            state.children.status = true;
        });
        builder.addCase(getChildren.fulfilled, (state, action) => {
            state.children.status = false;
            state.children.childrenList = action.payload;
        });
    }
});

export const childrenReducer = childrenSlice.reducer;
export const { setChildrenList, setSearchValue, setChildInfo } = childrenSlice.actions;