import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ThemeConfig } from "./theme";
import { SnackbarProvider } from "notistack";

const root = createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ThemeConfig>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </ThemeConfig>
    </Provider>
  // </React.StrictMode>
);
