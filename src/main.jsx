import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitializeApp from "../InitializeApp";
import { CompaingStateProvider } from "./context/NewCompaingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CompaingStateProvider>
        <InitializeApp />
      </CompaingStateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
