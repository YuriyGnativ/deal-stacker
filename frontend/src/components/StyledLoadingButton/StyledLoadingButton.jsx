import React from "react";
import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";

const StyledLoadingButton = styled(LoadingButton)(() => ({
  border: "1px solid #4f4b6b",
  color: "#4f4b6b",
  "&:hover": {
    backgroundColor: "rgb(116, 24 ,220 , .08)",
    border: "1px solid #8d49c1",
    color: "#65568f",
  },
}));

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ startIcon, loading, type, children, ...rest }) => {
  return (
    <StyledLoadingButton
      loading={loading}
      loadingPosition="start"
      startIcon={startIcon}
      variant="outlined"
      sx={rest.sx}
      type={type}
      onClick={rest.onClick}
    >
      {children}
    </StyledLoadingButton>
  );
};
