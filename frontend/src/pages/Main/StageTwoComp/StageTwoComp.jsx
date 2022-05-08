import React, { useEffect } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import StyledTable from "../../../components/StyledTable";
import { get } from "../../../utils/httpService";
import {
  setCalcData,
  switchIsFetching,
  dataFetchError,
} from "../../../redux/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar, closeSnackbar } from "../../../redux/snackbarSlice";
import { v4 } from "uuid";

const StageTwoComp = () => {
  const dispatch = useDispatch();
  const { data, dataRdy, isDataFetching } = useSelector(
    ({ main: { steps } }) => {
      const { calcData, dataRdy, isDataFetching, raw, rawRdy } = steps.find(
        (i) => i.id === 1
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

  useEffect(() => {
    if (!dataRdy) {
      console.log("effect");

      get("/api/calc/stage-two")
        .then(({ data, status, stage }) => {
          dispatch(setCalcData({ id: 1, data, stage }));
          dispatch(switchIsFetching({ id: 1, isFetching: false }));
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
  return dataRdy ? data.map((i) => <StyledTable data={i} />) : null;
};

export default StageTwoComp;
