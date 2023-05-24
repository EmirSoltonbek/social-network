import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <ProSidebarProvider>
        <AuthContextProvider>
          <CartContextProvider>
              <App />
          </CartContextProvider>
        </AuthContextProvider>
      </ProSidebarProvider>
    </BrowserRouter>
);
