import React, { useEffect } from "react";
import ProductDetails from "../components/details/ProductDetails";
import { useProduct } from "../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { getOneProduct, oneProduct } = useProduct();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  console.log("oneProduct", oneProduct);
  return (
    <div>
      {oneProduct ? <ProductDetails oneProduct={oneProduct} /> : <h2>Register or Login</h2>}
    </div>
  );
};

export default DetailsPage;
