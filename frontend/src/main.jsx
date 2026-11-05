
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Feed from "./Feed";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Login/>
    <Feed/>
    
  </React.StrictMode>
);