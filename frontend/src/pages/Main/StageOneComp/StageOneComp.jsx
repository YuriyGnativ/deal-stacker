import React, { useState, useMemo, useEffect } from "react";
import {
  Grid,
  Divider,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

//
import axios from "axios";
import * as validator from "validator";
import { useDispatch, useSelector } from "react-redux";

//
import StyledTextField from "../../../components/StyledTextField";
import Segment from "../../../components/Segment";
import StyledLoadingButton from "../../../components/StyledLoadingButton";
import {
  switchIsFetching,
  setCalcData,
  dataFetchError,
  setAllowed,
  setRaw,
} from "../../../redux/mainSlice";
import StyledTable from "../../../components/StyledTable";
import * as API from "../../../utils/httpService";
import {
  enqueueSnackbar as enqueueSnackbarAction,
  closeSnackbar as closeSnackbarAction,
} from "../../../redux/snackbarSlice";
import { v4 } from "uuid";
import { getToken, removeToken } from "../../../utils/tokenApi";

const StageOneComp = () => {
  const dispatch = useDispatch();

  const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
  const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));

  const { data, dataRdy, isDataFetching, raw, rawRdy } = useSelector(
    ({ main: { steps } }) => {
      const { calcData, dataRdy, isDataFetching, raw, rawRdy } = steps.find(
        (i) => i.id === 0
      );
      return {
        data: calcData,
        raw,
        rawRdy,
        dataRdy,
        isDataFetching,
      };
    }
  );
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  useEffect(() => {
    if (getToken() && !dataRdy) {
      API.get("/api/calc/stage-one/get-data")
        .then(({ data, status, raw, stage }) => {
          dispatch(setCalcData({ id: 0, data, stage }));
          for (let key in raw) {
            setValue(key, String(raw[key]), { shouldTouch: true });
          }
          dispatch(setRaw({ id: 0, raw }));
          dispatch(setAllowed({ id: 1, isAllowed: true }));
          enqueueSnackbar({
            message: "Successfully synced!",
            options: {
              key: v4(),
              variant: status,
              action: (key) => (
                <IconButton onClick={() => closeSnackbar(key)}>
                  <CloseIcon />
                </IconButton>
              ),
            },
          });
        })
        .catch((res) => {
          const {
            response: {
              data: { message, status },
            },
          } = res;
          dataFetchError(1);
          enqueueSnackbar({
            message,
            options: {
              key: v4(),
              variant: status,
              action: (key) => (
                <IconButton onClick={() => closeSnackbar(key)}>
                  <CloseIcon />
                </IconButton>
              ),
            },
          });
        });
    }
  }, []);

  useEffect(() => {
    if (raw && rawRdy) {
      for (let key in raw) {
        setValue(key, String(raw[key]), { shouldTouch: true });
      }
    }
  }, []);

  const onSubmit = async (data) => {
    console.log("onSubmit");
    dispatch(switchIsFetching({ id: 0, isFetching: true }));
    dispatch(setRaw({ id: 0, raw: data }));
    let res;
    try {
      if (!getToken()) {
        res = await API.post("/api/calc/stage-one/insert", {
          data: JSON.stringify(data),
        });
      } else {
        res = await API.put("/api/calc/stage-one/update", {
          data: JSON.stringify(data),
        });
      }
      console.log(res);
      dispatch(switchIsFetching({ id: 0, isFetching: false }));
      dispatch(setCalcData({ id: 0, data: res.data, stage: res.stage }));
      dispatch(setAllowed({ id: 1, isAllowed: true }));
    } catch ({
      response: {
        data: { message, status },
      },
    }) {
      dataFetchError(1);
      enqueueSnackbar({
        message,
        options: {
          key: v4(),
          variant: status,
          action: (key) => (
            <IconButton onClick={() => closeSnackbar(key)}>
              <CloseIcon />
            </IconButton>
          ),
        },
      });
    }
  };

  return (
    <>
      <StyledLoadingButton>Test</StyledLoadingButton>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Segment title="Purchase which can be borrowed">
          <StyledTextField
            label="Surveyor's Valuation"
            // defaultValue={!rawRdy ? raw["Surveyors Valuation"] : 0}
            // rawRdy={rawRdy}
            error={errors?.["Surveyors Valuation"] ? true : false}
            {...register("Surveyors Valuation", {
              validate: {
                isNum: (value) => {
                  // console.log("val", value);
                  // console.log(
                  //   validator.isNumeric(value) || "Value must be a number"
                  // );
                  return validator.isNumeric(value) || "Value must be a number";
                },

                // fixedDigits: (value) =>
                //   value.split(".")[1].length <= 2 ||
                //   "Only two digits after the decimal point",
              },
              setValueAs: (value) =>
                value ? parseFloat(value).toFixed(2) : value,
              required: "Field is required",
            })}
            helperText={errors?.["Surveyors Valuation"]?.message || false}
          />
          <StyledTextField
            label="Purchase Price"
            error={errors["Purchase Price"] ? true : false}
            tooltip="You can borrow up to 100% of the current value of the property."
            {...register("Purchase Price", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },

              required: "Field is required",
            })}
            helperText={errors?.["Purchase Price"]?.message || false}
          />
        </Segment>
        <Segment title="Up front costs which can't be borrowed">
          <StyledTextField
            label="Buying Survey"
            error={errors["Buying Survey"]}
            {...register("Buying Survey", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Buying Survey"]?.message || false}
          />
          <StyledTextField
            label="Sourcing Fee"
            error={errors["Sourcing Fee"]}
            {...register("Sourcing Fee", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Sourcing Fee"]?.message || false}
          />
          <StyledTextField
            label="Insurance"
            error={errors["Insurance"]}
            {...register("Insurance", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Insurance"]?.message || false}
          />
          <StyledTextField
            label="SDLT"
            error={errors["SDLT"]}
            {...register("SDLT", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["SDLT"]?.message || false}
          />
          <StyledTextField
            label="Buyer's Solicitor"
            error={errors["Buyers Solicitor"]}
            {...register("Buyers Solicitor", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Buyers Solicitor"]?.message || false}
          />
          <StyledTextField
            label="Planning/Architect"
            error={errors["Planning/Architect (Borrowed)"]}
            {...register("Planning/Architect (Borrowed)", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={
              errors?.["Planning/Architect (Borrowed)"]?.message || false
            }
          />
          <StyledTextField
            label="Additional Legals"
            error={errors["Additional Legals"]}
            {...register("Additional Legals", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Additional Legals"]?.message || false}
          />
          <StyledTextField
            label="Money at Exchange"
            error={errors["Money at Exchange"]}
            {...register("Money at Exchange", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Money at Exchange"]?.message || false}
          />
          <StyledTextField
            label="Sourced Solicitor Fee"
            error={errors["Sourced Solicitor Fee"]}
            {...register("Sourced Solicitor Fee", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Sourced Solicitor Fee"]?.message || false}
          />
        </Segment>
        <Segment title="Costs during the project">
          <StyledTextField
            label="Build"
            error={errors["Build"]}
            {...register("Build", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Build"]?.message || false}
          />
          <StyledTextField
            label="Project Manager (usually 10%)"
            error={errors["Project Manager (usually 10%)"]}
            {...register("Project Manager (usually 10%)", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={
              errors?.["Project Manager (usually 10%)"]?.message || false
            }
          />
          <StyledTextField
            label="CIL/S106"
            error={errors["CIL/S106"]}
            {...register("CIL/S106", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["CIL/S106"]?.message || false}
          />
          <StyledTextField
            label="Planning/Architect"
            error={errors["Planning/Architect (Costs during the project)"]}
            {...register("Planning/Architect (Costs during the project)", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={
              errors?.["Planning/Architect (Costs during the project)"]
                ?.message || false
            }
          />
          <StyledTextField
            label="Legals during project"
            error={errors["Legals during project"]}
            {...register("Legals during project", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Legals during project"]?.message || false}
          />
          <StyledTextField
            label="Drawdown Surveys"
            error={errors["Drawdown Surveys"]}
            {...register("Drawdown Surveys", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Drawdown Surveys"]?.message || false}
          />
          <StyledTextField
            label="Warranty"
            error={errors["Warranty"]}
            {...register("Warranty", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Warranty"]?.message || false}
          />
          <StyledTextField
            label="Landscaping"
            error={errors["Landscaping"]}
            {...register("Landscaping", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Landscaping"]?.message || false}
          />
          <StyledTextField
            label="Site road/1st stage"
            error={errors["Site road/1st stage"]}
            {...register("Site road/1st stage", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Site road/1st stage"]?.message || false}
          />
        </Segment>
        <Segment title="Costs due after sale">
          <StyledTextField
            label="P2P interest rate"
            error={errors["P2P interest rate"]}
            {...register("P2P interest rate", {
              // min: 0,
              // max: 100,
              validate: {
                inMin: (value) =>
                  value <= 100 || "Value must be less or equals 100",
                inMax: (value) =>
                  value >= 0 || "Value must be bigger or equals 0",
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["P2P interest rate"]?.message || false}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  sx={{
                    "& .MuiTypography-root": {
                      mb: 0,
                      fontSize: "12px",
                    },
                  }}
                  position="start"
                >
                  %
                </InputAdornment>
              ),
            }}
          />
          <StyledTextField
            label="Sale cost"
            error={errors["Sale cost"]}
            {...register("Sale cost", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Sale cost"]?.message || false}
          />
          <StyledTextField
            label="legals-sale"
            error={errors["legals-sale"]}
            {...register("legals-sale", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["legals-sale"]?.message || false}
          />
          <StyledTextField
            label="Rate on investor's money"
            error={errors["Rate on investors money"]}
            {...register("Rate on investors money", {
              validate: {
                inMin: (value) =>
                  value <= 100 || "Value must be less or equals 100",
                inMax: (value) =>
                  value >= 0 || "Value must be bigger or equals 0",
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Rate on investors money"]?.message || false}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  sx={{
                    "& .MuiTypography-root": {
                      mb: 0,
                      fontSize: "12px",
                    },
                  }}
                  position="start"
                >
                  %
                </InputAdornment>
              ),
            }}
          />
          <StyledTextField
            label="Term (months)"
            error={errors["Term (months)"]}
            {...register("Term (months)", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",

                isInt: (value) =>
                  Number.isInteger(Number(value)) || "Value must be an integer",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Term (months)"]?.message || false}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon sx={{ fontSize: "19px" }} />
                </InputAdornment>
              ),
            }}
          />
        </Segment>
        <Segment title="Sales">
          <StyledTextField
            label="Unit 1"
            error={errors["Unit 1"]}
            {...register("Unit 1", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Unit 1"]?.message || false}
          />
          <StyledTextField
            label="Unit 2"
            error={errors["Unit 2"]}
            {...register("Unit 2", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Unit 2"]?.message || false}
          />
          <StyledTextField
            label="Unit 3"
            error={errors["Unit 3"]}
            {...register("Unit 3", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Unit 3"]?.message || false}
          />
          <StyledTextField
            label="Unit 4"
            error={errors["Unit 4"]}
            {...register("Unit 4", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Unit 4"]?.message || false}
          />
          <StyledTextField
            label="Unit 5"
            error={errors["Unit 5"]}
            {...register("Unit 5", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Unit 5"]?.message || false}
          />
          <StyledTextField
            label="Unit 6"
            error={errors["Unit 6"]}
            {...register("Unit 6", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Unit 6"]?.message || false}
          />
          <StyledTextField
            label="Unit 7"
            error={errors["Unit 7"]}
            {...register("Unit 7", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Unit 7"]?.message || false}
          />
          <StyledTextField
            label="Unit 8"
            error={errors["Unit 8"]}
            {...register("Unit 8", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Unit 8"]?.message || false}
          />
          <StyledTextField
            label="Unit 9"
            error={errors["Unit 9"]}
            {...register("Unit 9", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Unit 9"]?.message || false}
          />
          <StyledTextField
            label="Unit 10"
            error={errors["Unit 10"]}
            {...register("Unit 10", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Unit 10"]?.message || false}
          />
          <StyledTextField
            label="Unit 11"
            error={errors["Unit 11"]}
            {...register("Unit 11", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Unit 11"]?.message || false}
          />
        </Segment>
        <Segment title="Cash you put in">
          <StyledTextField
            label="Borrower equity"
            error={errors["Borrower equity"]}
            {...register("Borrower equity", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={errors?.["Borrower equity"]?.message || false}
          />
        </Segment>
        <Segment title="Money from an investor">
          <StyledTextField
            label="Money"
            error={errors["Money (Money from an investor)"]}
            {...register("Money (Money from an investor)", {
              validate: {
                isNum: (value) =>
                  validator.isNumeric(value) || "Value must be a number",
              },
              required: "Field is required",
            })}
            helperText={
              errors?.["Money (Money from an investor)"]?.message || false
            }
          />
        </Segment>
        <StyledLoadingButton
          sx={{
            mb: 5,
          }}
          type="submit"
          loading={isDataFetching}
          startIcon={<CalculateIcon />}
        >
          {getToken() ? "Update" : "Calculate"}
        </StyledLoadingButton>
      </form>
      {dataRdy
        ? data.map((i) => {
            return (
              <>
                <Typography>{i.title}</Typography>
                {i.data.map((j) => {
                  return <StyledTable data={j} />;
                })}
              </>
            );
          })
        : null}
    </>
  );
};

export default StageOneComp;
