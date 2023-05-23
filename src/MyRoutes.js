import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import RegisterFormPage from "./pages/RegisterFormPage";

function MyRoutes() {
  return (
  <Routes>
    <Route path="/chat" element={<ChatPage/>}/>
    <Route path="/register" element={<RegisterFormPage/>}/>
  </Routes>
  )
  ;
}

export default MyRoutes;
