import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  notifications: [],
};

const snackbarSlice = createSlice({
  name: "snackbars",
  initialState,
  reducers: {
    enqueueSnackbar(state, { payload }) {
      const key = payload?.options?.key || v4();
      state.notifications.push({ key, ...payload });
    },
    closeSnackbar(state, action) {
      state.notifications = state.notifications.map((i) =>
        i.key === action.payload ? { ...i, dismissed: true } : { ...i }
      );
    },
    removeSnackbar(state, action) {
      state.notifications = state.notifications.filter(
        (i) => i.key !== action.payload
      );
    },
  },
});

export default snackbarSlice.reducer;
export const { enqueueSnackbar, closeSnackbar, removeSnackbar } =
  snackbarSlice.actions;
