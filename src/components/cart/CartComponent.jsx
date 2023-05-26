import React from "react";
import "./CartComponent.css";
import "../../assets/bootstrap-icons/font/bootstrap-icons.css";

const CartComponent = ({
  title,
  description,
  images,
  price,
  subPrice,
  deleteCartProduct,
  id,
  changeProductCount,
  count,
}) => {
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
          <input
            type="number"
            onChange={(e) => changeProductCount(e.target.value, id)}
            value={count}
          />
        </div>
        <div className="sub_price">
          <p>{subPrice}</p>
          <button onClick={() => deleteCartProduct(id)}>
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
