import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import RegisterFormPage from "./pages/RegisterFormPage";
import ProductListPage from "./pages/ProductListPage";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";

function MyRoutes() {
  const PUBLIC_ROUTES = [
    { link: "/product-list", element: <ProductListPage />, id: 1 },
    { link: "/", element: <HomePage />, id: 2 },
    { link: "/add", element: <AddProductPage />, id: 3 },
    { link: "/chat", element: <ChatPage />, id: 4 },
    { link: "/register", element: <RegisterFormPage />, id: 5 },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </div>
  );

}

export default MyRoutes;
