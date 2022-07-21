import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    users: userSlice,
  },
});
