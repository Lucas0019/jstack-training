import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App.tsx";
import { ThemeContext } from "./context/themeContext";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
ReactDOM.render(
  <React.StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>,
  document.getElementById("root")
);
