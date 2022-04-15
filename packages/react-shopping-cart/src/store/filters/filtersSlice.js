import {createSlice} from "@reduxjs/toolkit";

export const filtersSlice=createSlice({
    name:'filters',
    initialState: {items:[]},
    reducers:{
        UPDATE_FILTER:(state,action) => {

        }
    }
})
export default filtersSlice.reducer
