import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ oneProduct }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="image_wrap">
        <img src={oneProduct.image1} alt="" />
      </div>
      <div className="context_wrap">
        <h2>{oneProduct.title}</h2>
        <p>{oneProduct.description}</p>
        <p>{oneProduct.price}</p>
        <p>{oneProduct.size}</p>
      </div>
      <Button variant="primary" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  );
};

export default ProductDetails;
