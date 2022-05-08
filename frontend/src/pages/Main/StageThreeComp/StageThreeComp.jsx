import React, { useEffect } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CalculateIcon from "@mui/icons-material/Calculate";

import StyledTable from "../../../components/StyledTable";
import StyledLoadingButton from "../../../components/StyledLoadingButton";
import Segment from "../../../components/Segment";
import StyledTextField from "../../../components/StyledTextField";
import { useForm } from "react-hook-form";
import * as API from "../../../utils/httpService";
import { getToken } from "../../../utils/tokenApi";
import {
  setCalcData,
  switchIsFetching,
  dataFetchError,
  setRaw,
  selectStep,
} from "../../../redux/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar, closeSnackbar } from "../../../redux/snackbarSlice";
import { v4 } from "uuid";
import validator from "validator";

const StageThreeComp = () => {
  const dispatch = useDispatch();
  // const { data, dataRdy, isDataFetching, raw, rawRdy } = useSelector(
  //   ({ main: { steps } }) => {
  //     const { calcData, dataRdy, isDataFetching, raw, rawRdy } = steps.find(
  //       (i) => i.id === 2
  //     );
  //     return {
  //       data: calcData,
  //       raw,
  //       rawRdy,
  //       dataRdy,
  //       isDataFetching,
  //     };
  //   }
  // );

  const { calcData: data, dataRdy, isDataFetching, raw, rawRdy } = useSelector(
    selectStep(2)
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
      API.get("/api/calc/stage-three/get-data")
        .then(({ data, status, raw, stage }) => {
          dispatch(setCalcData({ id: 2, data, stage }));
          for (let key in raw) {
            setValue(key, String(raw[key]), { shouldTouch: true });
          }
          dispatch(setRaw({ id: 0, raw }));
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
    dispatch(switchIsFetching({ id: 2, isFetching: true }));
    dispatch(setRaw({ id: 2, raw: data }));
    let res;
    try {
      if (getToken()) {
        res = await API.put("/api/calc/stage-three/update", {
          data: JSON.stringify(data),
        });
      } else {
        enqueueSnackbar({
          message:
            "Idk how you reach this stage without token, it'll not work...",
          options: {
            key: v4(),
            variant: "warning",
            action: (key) => (
              <IconButton onClick={() => closeSnackbar(key)}>
                <CloseIcon />
              </IconButton>
            ),
          },
        });
      }
      console.log(res);
      dispatch(switchIsFetching({ id: 2, isFetching: false }));
      dispatch(setCalcData({ id: 2, data: res.data }));
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Segment title="Rental costs pcm (per unit)">
          <StyledTextField
            label="Lettings Fee (10%)"
            error={errors?.["Lettings Fee (10%)"] ? true : false}
            {...register("Lettings Fee (10%)", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Lettings Fee (10%)"]?.message || false}
          />
          <StyledTextField
            label="Insurance"
            error={errors?.["Insurance"] ? true : false}
            {...register("Insurance", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Insurance"]?.message || false}
          />
          <StyledTextField
            label="Lending @ 4% or Rent"
            error={errors?.["Lending @ 4% or Rent"] ? true : false}
            {...register("Lending @ 4% or Rent", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Lending @ 4% or Rent"]?.message || false}
          />
          <StyledTextField
            label="Gas and Electric"
            error={errors?.["Gas and Electric"] ? true : false}
            {...register("Gas and Electric", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Gas and Electric"]?.message || false}
          />
          <StyledTextField
            label="Water"
            error={errors?.["Water"] ? true : false}
            {...register("Water", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Water"]?.message || false}
          />
          <StyledTextField
            label="Council Tax"
            error={errors?.["Council Tax"] ? true : false}
            {...register("Council Tax", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Council Tax"]?.message || false}
          />
          <StyledTextField
            label="Cleaner"
            error={errors?.["Cleaner"] ? true : false}
            {...register("Cleaner", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Cleaner"]?.message || false}
          />
          <StyledTextField
            label="Gardener"
            error={errors?.["Gardener"] ? true : false}
            {...register("Gardener", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Gardener"]?.message || false}
          />
          <StyledTextField
            label="Broadband"
            error={errors?.["Broadband"] ? true : false}
            {...register("Broadband", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Broadband"]?.message || false}
          />
          <StyledTextField
            label="Service Charge"
            error={errors?.["Service Charge"] ? true : false}
            {...register("Service Charge", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Service Charge"]?.message || false}
          />
        </Segment>
        <Segment title="Rental Income pcm">
          <StyledTextField
            label="Unit/Room 1"
            error={errors?.["Unit/Room 1"] ? true : false}
            {...register("Unit/Room 1", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Unit/Room 1"]?.message || false}
          />
          <StyledTextField
            label="Unit/Room 2"
            error={errors?.["Unit/Room 2"] ? true : false}
            {...register("Unit/Room 2", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Unit/Room 2"]?.message || false}
          />
          <StyledTextField
            label="Unit/Room 3"
            error={errors?.["Unit/Room 3"] ? true : false}
            {...register("Unit/Room 3", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Unit/Room 3"]?.message || false}
          />
          <StyledTextField
            label="Unit/Room 4"
            error={errors?.["Unit/Room 4"] ? true : false}
            {...register("Unit/Room 4", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Unit/Room 4"]?.message || false}
          />
          <StyledTextField
            label="Unit/Room 5"
            error={errors?.["Unit/Room 5"] ? true : false}
            {...register("Unit/Room 5", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Unit/Room 5"]?.message || false}
          />
          <StyledTextField
            label="Unit/Room 6"
            error={errors?.["Unit/Room 6"] ? true : false}
            {...register("Unit/Room 6", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Unit/Room 6"]?.message || false}
          />
          <StyledTextField
            label="Unit/Room 7"
            error={errors?.["Unit/Room 7"] ? true : false}
            {...register("Unit/Room 7", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Unit/Room 7"]?.message || false}
          />
          <StyledTextField
            label="Unit/Room 8"
            error={errors?.["Unit/Room 8"] ? true : false}
            {...register("Unit/Room 8", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Unit/Room 8"]?.message || false}
          />
          <StyledTextField
            label="Unit/Room 9"
            error={errors?.["Unit/Room 9"] ? true : false}
            {...register("Unit/Room 9", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Unit/Room 9"]?.message || false}
          />
          <StyledTextField
            label="Unit/Room 10"
            error={errors?.["Unit/Room 10"] ? true : false}
            {...register("Unit/Room 10", {
              validate: {
                isNum: (value) => {
                  return validator.isNumeric(value) || "Value must be a number";
                },
              },
              require: "Field is required",
            })}
            helperText={errors?.["Unit/Room 10"]?.message || false}
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
          {"Calculate"}
        </StyledLoadingButton>
      </form>
      {dataRdy ? data.map((i) => <StyledTable data={i} />) : null}
    </>
  );
};

export default StageThreeComp;
