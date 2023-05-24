import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import RegisterFormPage from "./pages/RegisterFormPage";
import ProductListPage from "./pages/ProductListPage";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import Login from "./components/auth/Login";
<<<<<<< HEAD
import ProfilePage from "./pages/ProfilePage";
import InstProfile from "./components/profile/InstProfile";
=======
import EditProductPage from "./pages/EditProductPage";
>>>>>>> 75bae3a9b549d914d03e422b3b06a4ed75fbe900

function MyRoutes() {
  const PUBLIC_ROUTES = [
    { link: "/product-list", element: <ProductListPage />, id: 1 },
    { link: "/", element: <HomePage />, id: 2 },
    { link: "/add", element: <AddProductPage />, id: 3 },
    { link: "/chat", element: <ChatPage />, id: 4 },
    { link: "/register", element: <RegisterFormPage />, id: 5 },
    { link: "/login", element: <Login />, id: 6 },
<<<<<<< HEAD
    { link: "/profile", element: <ProfilePage />, id: 7 },
    { link: "/inst-profile", element: <InstProfile />, id: 8 },
=======
    { link: "/edit/:id", element: <EditProductPage />, id: 7 },
>>>>>>> 75bae3a9b549d914d03e422b3b06a4ed75fbe900
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
