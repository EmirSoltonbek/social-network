import React, { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import "./ProductDetails.css";

const ProductDetails = ({ oneProduct }) => {
  const { addRating, addComment } = useProduct();
  // console.log(typeof oneProduct.id);

  const navigate = useNavigate();

  const [currentValue, setCurrentValue] = useState();
  const [comment, setComment] = useState("");

  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  useEffect(() => {
    if (oneProduct) {
      setCurrentValue(oneProduct.user_rating);
    }
  }, [oneProduct]);

  useEffect(() => {}, [oneProduct.user_rating]);
  return (
    <div>
         <Carousel
         style={{width:"300px"}}
          key={oneProduct.id}
        >
          <Carousel.Item style={{ height: "350px"}}>
            <img className="d-block w-100 h-100" src={oneProduct.image1} />
          </Carousel.Item>
          <Carousel.Item style={{ height: "350px" }}>
            <img className="d-block w-100 h-100" src={oneProduct.image2}  />
          </Carousel.Item>
        </Carousel>
      <div className="context_wrap">
        <h2>Title: {oneProduct.title}</h2>
        <p>Description: {oneProduct.description}</p>
        <p>Price: {oneProduct.price}</p>
        <p>Size: {oneProduct.size}</p>
        {oneProduct.product_comments.map((elem, index) => (
          <p>
            <span
              style={{
                margin: "5px",
                padding: "10px 20px",
                borderRadius: "50%",
                backgroundColor: "green",
              }}
            >
              {elem.user[0]}
            </span>
            {elem.body}
          </p>
        ))}
        <div>
          {stars.map((elem, index) => (
            <i
              className={`bi bi-star-fill ${
                index < currentValue ? "gold" : "grey"
              }`}
              onClick={() => {
                handleClick(index + 1);
              }}
            ></i>
          ))}
          <textarea
            placeholder="enter feedback"
            onChange={(e) => {
              setComment(e.target.value);
            }}
            cols="30"
            rows="3"
            style={{ margin: "10px 20px 30px" }}
          ></textarea>
        </div>

        <button
          onClick={() => {
            addRating(currentValue, oneProduct.id);
            addComment(comment, oneProduct.id);
          }}
        >
          Leave Feedback
        </button>
      </div>
      <Button variant="primary" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  );
};

export default ProductDetails;
