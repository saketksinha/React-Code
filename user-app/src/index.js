import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import StepContext from "./StepContext";

ReactDOM.render(
  <StepContext>
  <React.StrictMode>

    <App />
  </React.StrictMode></StepContext>,
  document.getElementById("root")
);