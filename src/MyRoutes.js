import React from "react";
import ProductListPage from "./pages/ProductListPage";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";

function MyRoutes() {
  const PUBLIC_ROUTES = [
    { link: "/product-list", element: <ProductListPage />, id: 1 },
    { link: "/home", element: <HomePage />, id: 2 },
    { link: "/add", element: <AddProductPage />, id: 3 },
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
