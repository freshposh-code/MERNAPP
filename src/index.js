import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UsercontextProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UsercontextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UsercontextProvider>
);
