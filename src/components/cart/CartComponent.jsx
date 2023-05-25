import React from "react";
import "./CartComponent.css";

const CartComponent = ({ title, description, images, price, subPrice }) => {
  return (
    <div>
      <div className="product">
        <div className="image_wrap">
          <img src={images[0].image} alt="" />
        </div>
        <div className="text_wrap">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{price}</p>
        </div>
        <div className="product_counter">
          <input type="number" />
        </div>
        <div className="sub_price">
          <p>{subPrice}</p>
          <i class="bi bi-trash3">l</i>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
