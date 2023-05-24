import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <ProductContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <ProSidebarProvider>
              <App />
            </ProSidebarProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </ProductContextProvider>
    </BrowserRouter>
);
