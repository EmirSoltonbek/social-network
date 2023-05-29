import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import RegisterFormPage from "./pages/RegisterFormPage";
import ProductListPage from "./pages/ProductListPage";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import Login from "./components/auth/Login";
import ProfilePage from "./pages/ProfilePage";
import InstProfile from "./components/profile/InstProfile";
import EditProductPage from "./pages/EditProductPage";
import EditProfile from "./components/profile/EditProfile";
import CartPage from "./pages/CartPage";
import FavoritePage from "./pages/FavoritePage";
import DetailsPage from "./pages/DetailsPage";

function MyRoutes() {
  const PUBLIC_ROUTES = [
    { link: "/product-list", element: <ProductListPage />, id: 1 },
    { link: "/", element: <HomePage />, id: 2 },
    { link: "/add", element: <AddProductPage />, id: 3 },
    { link: "/chat", element: <ChatPage />, id: 4 },
    { link: "/register", element: <RegisterFormPage />, id: 5 },
    { link: "/login", element: <Login />, id: 6 },
    { link: "/profile", element: <ProfilePage />, id: 7 },
    { link: "/inst-profile", element: <InstProfile />, id: 8 },
    { link: "favorite", element: <FavoritePage />, id: 9 },
    { link: "/details/:id", element: <DetailsPage />, id: 10 },
    { link: "/edit/:id", element: <EditProductPage />, id: 11 },
    { link: "/profile/edit/:id", element: <EditProfile />, id: 12 },
    { link: "/cart", element: <CartPage />, id: 13 },
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
