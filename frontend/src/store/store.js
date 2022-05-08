import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { snackbarSlice, calcDataSlice, stepSlice } from "../redux";

const rootReducer = combineReducers({
  calcData: calcDataSlice,
  snackbars: snackbarSlice,
  steps: stepSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
