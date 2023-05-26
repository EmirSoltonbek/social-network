import React, { useEffect } from "react";
import { useCart } from "../contexts/CartContextProvider";
import CartComponent from "../components/cart/CartComponent";

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
  }, []);
  console.log("cart", cart);
  return (
    <div>
      <h2>cart page</h2>
      <div className="container">
        <div className="products_wrap">
          {cart?.products.map((elem) => {
            return (
              <CartComponent
                title={elem.item.title}
                description={elem.item.description}
                image={elem.item.image1}
                price={elem.item.price}
                subPrice={elem.subPrice}
                deleteCartProduct={deleteCartProduct}
                id={elem.item.id}
                key={elem.item.id}
                changeProductCount={changeProductCount}
                count={elem.count}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
