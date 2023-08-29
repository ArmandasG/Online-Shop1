import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import "./styles/index.css";
import ItemsContextProvider from "./context/ItemsContextProvider";
import ResponsiveContextProvider from "./context/ResponsiveContextProvider";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResponsiveContextProvider>
        <AuthProvider>
          <ItemsContextProvider>
            <App />
          </ItemsContextProvider>
        </AuthProvider>
      </ResponsiveContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
