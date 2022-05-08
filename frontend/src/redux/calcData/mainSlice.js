import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 0,
  stepOne: {
    label: "Step 1",
    isDataFetching: false,
    dataRdy: false,
    raw: [],
    rawRdy: false,
    data: [],
    allowed: true,
  },
  stepTwo: {
    label: "Step 2",
    allowed: false,
    isDataFetching: false,
    dataRdy: false,
    data: [],
  },
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    switchIsFetching(state, { payload }) {
      const step = state.steps.find((i) => i.id === payload.id);
      step.isDataFetching = payload.isFetching;
    },
    setAllowed(state, { payload }) {
      const step = state.steps.find((i) => i.id === payload.id);
      step.allowed = payload.isAllowed;
    },
    setRaw(state, { payload }) {
      const step = state.steps.find((i) => i.id === payload.id);
      step.raw = payload.raw;
      step.rawRdy = true;
    },
    setCalcData(state, { payload }) {
      const step = state.steps.find((i) => i.id === payload.id);
      step.calcData = payload.data;
      step.dataRdy = true;
      state.stage = payload.stage;
    },
    dataFetchError(state, action) {
      const step = state.steps.find((i) => i.id === action.payload);
      step.dataRdy = false;
      step.isDataFetching = false;
    },
    handleNext(state) {
      state.activeStep = state.activeStep + 1;
    },
    handleBack(state) {
      state.activeStep = state.activeStep - 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPropertyTypes.fulfilled, (state, action) => {
        state.status = "idle";
        state.propertyTypes = action.payload;
      })
      .addCase(getProperties.pending, (state) => {
        state.propLoading = true;
      })
      .addCase(getProperties.fulfilled, (state, action) => {
        state.status = "idle";
        state.propLoading = false;
        state.propertiesMeta = action.payload.meta;
        state.properties = action.payload.data;
      })
      .addCase(getProperties.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getKeywordsRulesList.fulfilled, (state, action) => {
        state.status = "idle";
        state.keywordsRulesList = action.payload;
      })
      .addCase(getLandBounds.fulfilled, (state, action) => {
        state.status = "idle";
        state.landBounds = action.payload;
      })
      .addMatcher(isPending(...thunks), (state) => {
        state.status = "loading";
      })
      .addMatcher(isRejected(...thunks), (state) => {
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
