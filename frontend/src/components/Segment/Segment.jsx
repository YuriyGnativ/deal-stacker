import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSegment = styled(Box)(({ theme }) => ({
  border: "1px solid #231e4638",
  borderRadius: "0.28571429rem",
  padding: "15px",
  margin: "15px 0 15px",

  ".MuiTypography-root": {
    color: theme.palette.text.secondary,
    fontWeight: "bold",
    marginBottom: "7px",
  },
  ".MuiBox-root": {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "-15px",
    ".MuiTextField-root": {
      margin: "0 15px 15px 0",
      flexGrow: 1,
    },
  },
}));

const Segment = ({ children, title = "" }) => {
  return (
    <StyledSegment>
      <Typography variant="h6">{title}</Typography>
      <Box>{children}</Box>
    </StyledSegment>
  );
};

export default Segment;
