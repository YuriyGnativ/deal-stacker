import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainSlice from "../redux/mainSlice";

const rootReducer = combineReducers({
  main: mainSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
