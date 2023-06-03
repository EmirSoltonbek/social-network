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
import ProfileListPage from "./pages/ProfileListPage";
import OneProfilePage from "./pages/OneProfilePage";
import AddPostPage from "./pages/AddPostPage";
import EditPostPage from "./pages/EditPostPage";
import AllPostsPage from "./pages/AllPostsPage";
import NewCart from "./components/cart/NewCart";
import CartComponent from "./components/cart/CartComponent";
import Chat from "./components/chat2/Chat";

function MyRoutes() {
  const PUBLIC_ROUTES = [
    { link: "/product-list", element: <ProductListPage />, id: 1 },
    // { link: "/", element: <HomePage />, id: 2 },
    { link: "/add", element: <AddProductPage />, id: 3 },
    { link: "/chat", element: <Chat />, id: 4 },
    { link: "/register", element: <RegisterFormPage />, id: 5 },
    { link: "/login", element: <Login />, id: 6 },
    { link: "/profile", element: <ProfilePage />, id: 7 },
    { link: "/", element: <InstProfile />, id: 8 },
    { link: "/edit/:id", element: <EditProductPage />, id: 9 },
    { link: "/profile/edit/:id", element: <EditProfile />, id: 10 },
    { link: "/cart", element: <CartPage />, id: 11 },
    { link: "/favorite", element: <FavoritePage />, id: 12 },
    { link: "/profile-list", element: <ProfileListPage />, id: 13 },
    {
      link: "/profile-list/one-profile/:id",
      element: <OneProfilePage />,
      id: 14,
    },
    { link: "/add-post", element: <AddPostPage />, id: 15 },
    { link: "/edit-post/:id", element: <EditPostPage />, id: 16 },
    { link: "/details/:id", element: <DetailsPage />, id: 17 },
    { link: "/edit/:id", element: <EditProductPage />, id: 18 },
    { link: "/post-list", element: <AllPostsPage />, id: 19 },
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
