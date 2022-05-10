import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 0,
  status: "idle",
  data: [],
  // dataRdy: 
};
// "idle", "loading", "failed";


const getData = () => {};

const calcDataSlice = createSlice({
  name: "calcData",
  initialState,
  // reducers: {
  //   switchIsFetching(state, { payload }) {
  //     const step = state.steps.find((i) => i.id === payload.id);
  //     step.isDataFetching = payload.isFetching;
  //   },
  //   setAllowed(state, { payload }) {
  //     const step = state.steps.find((i) => i.id === payload.id);
  //     step.allowed = payload.isAllowed;
  //   },
  //   setRaw(state, { payload }) {
  //     const step = state.steps.find((i) => i.id === payload.id);
  //     step.raw = payload.raw;
  //     step.rawRdy = true;
  //   },
  //   setCalcData(state, { payload }) {
  //     const step = state.steps.find((i) => i.id === payload.id);
  //     step.calcData = payload.data;
  //     step.dataRdy = true;
  //     state.stage = payload.stage;
  //   },
  //   dataFetchError(state, action) {
  //     const step = state.steps.find((i) => i.id === action.payload);
  //     step.dataRdy = false;
  //     step.isDataFetching = false;
  //   },
  //   handleNext(state) {
  //     state.activeStep = state.activeStep + 1;
  //   },
  //   handleBack(state) {
  //     state.activeStep = state.activeStep - 1;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        
      })
      
      .addCase(getData.fulfilled, (state, action) => {
        state.status = "idle";
        
      })
      .addCase(getData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectData =
  (...args) =>
  ({ main }) =>
    main.steps.find((i) => i.id === args.id)?.calcData;

export const selectStep =
  (id) =>
  ({ main }) =>
    main.steps.find((i) => i.id === id);

export const selectStepProp =
  (...args) =>
  ({ main }) =>
    main.steps.find((i) => i.id === args.id)[args.prop];

export default mainSlice.reducer;
export const {
  handleNext,
  handleBack,
  switchIsFetching,
  setCalcData,
  dataFetchError,
  setAllowed,
  setRaw,
} = mainSlice.actions;
