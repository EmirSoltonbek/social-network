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
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"40px"}}>
      <div style={{display:"flex", gap:"25px", flexWrap:"wrap", justifyContent:"center"}}>
         <Carousel
         style={{width:"270px", height:"350px"}}
          key={oneProduct.id}
        >
          <Carousel.Item style={{ height: "350px", width:"270px"}}>
            <img className="d-block w-100 h-100" src={oneProduct.image1} />
          </Carousel.Item>
          <Carousel.Item style={{ height: "350px", width:"270px" }}>
            <img className="d-block w-100 h-100" src={oneProduct.image2}  />
          </Carousel.Item>
        </Carousel>
      <div>
        <p>Title: {oneProduct.title}</p>
        <p>Description: {oneProduct.description}</p>
        <p>Price: {oneProduct.price}</p>
        <p>Size: {oneProduct.size}</p>
       
        </div>
        </div>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",gap:"5px"}}>
          <form action="">
         <div>
          <textarea
            placeholder="ENTER COMMENT"
            onChange={(e) => {
              setComment(e.target.value);
            }}
            cols="25"
            rows="3"
            style={{padding:"10px"}}
          ></textarea>
          </div>
           <div>{stars.map((elem, index) => (
            <i
              className={`bi bi-star-fill ${
                index < currentValue ? "gold" : "grey"
              }`}
              onClick={() => {
                handleClick(index + 1);
              }}
            ></i>
          ))}
          </div>

        <button
          onClick={() => {
            addRating(currentValue, oneProduct.id);
            addComment(comment, oneProduct.id);
          }}
          className="feedback-button"
        >
          LEAVE FEEDBACK
        </button>
        </form>
        <div style={{marginTop:"30px"}}>
        <button onClick={() => navigate(-1)} className="goback">
        Go Back
      </button>
      </div>
      </div>
</div>

<div>
  <div style={{fontSize:"30px", color:"grey", margin:"8px"}}>Comments ...</div>
   {oneProduct.product_comments.map((elem, index) => (
          <p style={{display:"flex",alignItems:"center"}}>
            <span
              style={{
                // margin: "5px",
                padding: "15px 20px",
                borderRadius: "50%",
                backgroundColor: "grey",
                color:"white",
                fontWeight:"bold",
                margin:"8px",
              }}
            >
              {elem.user[0].toUpperCase()}
            </span>
            {elem.body}
          </p>
        ))}
</div>
     
    </div>
  );
};

export default ProductDetails;
