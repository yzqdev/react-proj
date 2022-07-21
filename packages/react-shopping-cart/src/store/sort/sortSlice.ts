import { createSlice } from "@reduxjs/toolkit";
import { UPDATE_SORT } from "@/store/sort/actionTypes";

export const sortSlice = createSlice({
  name: "sort",
  initialState: "",
  reducers: {
    UPDATE_SORT: (state, action) => {},
  },
});
export default sortSlice.reducer
