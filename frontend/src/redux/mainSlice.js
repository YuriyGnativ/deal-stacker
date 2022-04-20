import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    steps: [
      {
        label: "Stage 1",
      },
      {
        label: "Stage 2",
      },
      {
        label: "Stage 3",
      },
    ],
    activeStep: 0,
  },
  reducers: {
    handleNext(state) {
      state.activeStep = state.activeStep + 1;
    },
    handleBack(state) {
      state.activeStep = state.activeStep - 1;
    },
  },
});

export default mainSlice.reducer;
export const { handleNext, handleBack } = mainSlice.actions;
