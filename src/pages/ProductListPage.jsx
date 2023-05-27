import React from "react";
import ProductList from "../components/Prouduct/ProductList/ProductList";
import ProductCard from "../components/Prouduct/productCard/ProductCard";
import CategoriesComponent from "../components/categories/CategoriesComponent";

function ProductListPage() {
  return (
    <div>
      <CategoriesComponent />
      <ProductList />
    </div>
  );
}

export default ProductListPage;
