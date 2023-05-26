import React from "react";

const FavoriteComponent = ({ description, title, price, images }) => {
  return (
    <div className="product_wrap">
      <div className="image_wrap">
        <img src={images[0].image} alt="" />
      </div>
      <div className="context_wrap">
        <h3>{title}</h3>
        <h3>{price}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FavoriteComponent;
