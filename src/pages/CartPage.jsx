import React, { useEffect } from "react";
import { useCart } from "../contexts/CartContextProvider";
import CartComponent from "../components/cart/CartComponent";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const {
    addProductToCart,
    checkProductInCart,
    deleteCartProduct,
    changeProductCount,
    getCart,
    cart,
  } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);
  console.log("cart", cart);
  return (
    <div>
      <h2>cart page</h2>
      <div className="container">
        <div className="products_wrap" style={{ display: "grid", gap: "40px" }}>
          {cart?.products.map((elem) => {
            return (
              <CartComponent
                title={elem.item.title}
                description={elem.item.description}
                image1={elem.item.image1}
                image2={elem.item.image2}
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
      <button
        onClick={() => {
          // cartCleaner();
          navigate("/product-list");
        }}
        style={{
          width: "60%",
          margin: "2em 0",
          padding: "1em 0",
          backgroundColor: "white",
          border: "1px solid black",
          justifySelf: "center",
          fontWeight: "700",
        }}
      >
        BUY NOW FOR
        <span style={{ color: "green", fontWeight: "700" }}>
          {cart?.totalPrice}
        </span>
      </button>
    </div>
  );
};

export default CartPage;
