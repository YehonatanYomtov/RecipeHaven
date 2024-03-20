import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";

//* global-store
import store from "./data/store.js";

//* global-styles
import "./assets/variables.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

//! change all inputs to use the useRef hook to minimize the code.
