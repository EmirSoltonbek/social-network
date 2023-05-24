import React, { createContext, useContext } from "react";
export const productContext = createContext();
export const useProduct = useContext(productContext);

const INIT_STATE = {};

const ProductContextProvider = () => {
  return <div>ProductContextProvider</div>;
};

export default ProductContextProvider;
