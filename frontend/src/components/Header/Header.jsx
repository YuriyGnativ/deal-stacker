import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#4f4b6b",
      }}
    >
      <Toolbar>
        <Typography>App Header</Typography>
        <Button
          sx={{
            ml: "auto",
            color: "primary.contrastText",
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
