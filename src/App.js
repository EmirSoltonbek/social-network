import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MyRoutes from "./MyRoutes";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/Prouduct/productCard/ProductCard";

const App = () => {
  return (
    <div style={{margin: "0px", padding: "0px", width: "100%"}}>
      <Navbar />
      <div
        style={{
          marginLeft: "46px",
        }}
      >
        <MyRoutes />
      </div>
    </div>
  );
};

export default App;
