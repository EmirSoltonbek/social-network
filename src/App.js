import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MyRoutes from "./MyRoutes";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <MyRoutes/>
      <Footer />
    </div>
  );
};

export default App;
