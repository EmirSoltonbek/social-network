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
import ProfileContextProvider from "./contexts/ProfileContextProvider";
import FavoriteContextProvider from "./contexts/FavoriteContextProvider";
import CreditCardProvider from "./contexts/CreditCardProvider";
import NightContextProvider from "./contexts/NightContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NightContextProvider>
      <CreditCardProvider>
        <ProfileContextProvider>
          <ProductContextProvider>
            <AuthContextProvider>
              <CartContextProvider>
                <FavoriteContextProvider>
                  <ProSidebarProvider>
                    <App />
                  </ProSidebarProvider>
                </FavoriteContextProvider>
              </CartContextProvider>
            </AuthContextProvider>
          </ProductContextProvider>
        </ProfileContextProvider>
      </CreditCardProvider>
    </NightContextProvider>
  </BrowserRouter>
);
