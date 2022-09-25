import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = "https://mejor-postor.herokuapp.com/api/";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
