import React, { useEffect } from "react";
import { useCart } from "../contexts/CartContextProvider";

const CartPage = () => {
  const {
    addProductToCart,
    checkProductInCart,
    deleteCartProduct,
    changeProductCount,
    getCart,
    cart,
  } = useCart();

  useEffect(() => {
    getCart();
  });
  console.log(cart);
  return <div></div>;
};

export default CartPage;
