import React from "react";
import ReactDOM from "react-dom/client";
import moduleA from "./module.mjs";
import App from "./App";
import "./index.css";

console.log(moduleA);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
