import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducers from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducers,
  },
});

export default appStore;
