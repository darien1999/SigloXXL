import React from "react";
import { render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./scss/global.scss";

const root = document.getElementById("root");
render(<App />, root);

reportWebVitals();
