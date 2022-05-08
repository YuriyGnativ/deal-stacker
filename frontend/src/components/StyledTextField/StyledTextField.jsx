import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { TextField, Tooltip } from "@mui/material";

// .MuiStyledInput-root
const StyledInput = styled(TextField)(({ theme }) => ({
  ".MuiFilledInput-root": {
    "label.MuiInputLabel-root": {
      color: "#4f4b6b",
    },
    "&::after": {
      borderBottom: "2px solid #4f4b6b",
    },
  },
  ".MuiInputLabel-root": {
    color: "rgb(79, 75, 107, .33)",
    "&.Mui-focused": {
      ".tooltip-base": {
        fontSize: "21px",
        color: "#c9347b",
        cursor: "help",
      },
    },
  },
  "label.Mui-focused": {
    color: "#4f4b6b",
  },
  ".MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#4f4b6b",
    },
  },
}));

const StyledTextField = React.forwardRef((props, ref) => {
  return (
    <StyledInput
      ref={ref}
      {...props}
      value={props.value}
      variant={props.variant || "filled"}
      label={
        <>
          <span>{props.label}</span>
          {props.tooltip ? (
            <Tooltip title={props.tooltip}>
              <span className="tooltip-base">*</span>
            </Tooltip>
          ) : null}
        </>
      }
    />
  );
});

export default StyledTextField;
