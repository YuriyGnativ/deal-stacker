import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export function ThemeConfig({ children }) {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
    // palette: {
    //   // mode: "light",
    //   primary: {
    //     main: "#231e46",
    //     light: "#4f4b6b",
    //     dark: "#181531",
    //     contrastText: "#fefefe",
    //   },
    //   text: {
    //     primary: "#ffffff",
    //     secondary: "#000000",
    //   },
    //   // secondary: {},
    // },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
