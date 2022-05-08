import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyledButton = styled(Button)((styles) => {
  return {
    backgroundColor: "#8981c18c",
    marginTop: "10px",
    marginRight: "10px",
    color: "#fefefe",
    "&:hover": {
      backgroundColor: "#686292c2",
    },
  };
});

export default StyledButton;
