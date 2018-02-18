import "../css/popup.css";
import Greeting from "./popup/index.jsx";
import React from "react";
import { render } from "react-dom";

render(<Greeting />, window.document.getElementById("app-container"));
