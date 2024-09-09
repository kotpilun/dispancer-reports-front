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
        },

        setChecked: (state, action) => {
            const { _id } = action.payload; 
            state.children.childrenList = state.children.childrenList.map((child) => 
                child._id === _id ? { ...child, checked: true } : child);
        },

        setUnchecked: (state, action) => {
            const { _id } = action.payload; 
            state.children.childrenList = state.children.childrenList.map((child) => 
                child._id === _id ? { ...child, checked: false } : child);
        },
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
export const { setChildrenList, setSearchValue, setChildInfo, setChecked, setUnchecked} = childrenSlice.actions;