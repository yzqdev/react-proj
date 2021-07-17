import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export const getUserAsync = createAsyncThunk(
  "users/getUsersAsync",
  async () => {
    const resp = await fetch("http://localhost:7000/users");
    if (resp.ok) {
      const users = await resp.json();
      return { users };
    }
  }
);
export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const user = {
        id: nanoid(),
        name: action.payload.name,
      };
      state.push(user);
    },
  },
  extraReducers: {
    [getUserAsync.fulfilled]: (state, action) => {
      return action.payload.users;
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
