import React from "react";
import "./CartComponent.css";
import "../../assets/bootstrap-icons/font/bootstrap-icons.css";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CartComponent = ({
  title,
  description,
  image1,
  image2,
  price,
  subPrice,
  deleteCartProduct,
  id,
  changeProductCount,
  count,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="product">
        <div className="image_wrap">
          <Carousel
            onClick={(e) => {
              e.stopPropagation();
              if (e.target.className == "d-block w-100") {
                navigate(`/details/${id}`);
              }
            }}
          >
            <Carousel.Item>
              <img className="d-block w-100" src={image1} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image2} />
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <div className="text_wrap">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <div className="product_counter">
              <input
                type="number"
                onChange={(e) => changeProductCount(e.target.value, id)}
                value={count}
              />
            </div>
          </div>
          <div className="sub_price">
            <p>{subPrice}</p>
            <button onClick={() => deleteCartProduct(id)}>
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
