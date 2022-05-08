import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 0,
};

const stepSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    nextStep: (state, action) => {
      state.activeStep = state.activeStep === 2 ? 2 : state.activeStep + 1;
    },
    previousStep: (state, action) => {
      state.activeStep = state.activeStep === 0 ? 0 : state.activeStep - 1;
    },
  },
});

export const selectStep =
  (...args) =>
  ({ steps }) =>
    steps.activeStep;

export const { nextStep, previousStep } = stepSlice.actions;
export default stepSlice.reducer;
