import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { SidebarContextProvider } from "./context/SidebarContext.jsx";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
