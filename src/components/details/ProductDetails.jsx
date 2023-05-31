import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useState } from "react";
import './ProductDetails.css'


const ProductDetails = ({ oneProduct }) => {
  const {addRating, addComment} = useProduct();
  // console.log(typeof oneProduct.id);

  const navigate = useNavigate();

  const [currentValue, setCurrentValue] = useState();
  const [comment, setComment] = useState('');

  const stars = Array(5).fill(0);
 
  const handleClick = (value) =>{
    setCurrentValue(value)
  }


  useEffect(() => {
    if(oneProduct){
      setCurrentValue(oneProduct.user_rating)
    }
  }, [oneProduct])

  useEffect(()=>{},[oneProduct.user_rating])
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
        <p>{oneProduct.id}</p>
        {oneProduct.product_comments.map((elem, index)=>(
          <p><span style={{margin:"5px", padding:"10px 20px", borderRadius:"50%", backgroundColor:"green"}}>{elem.user[0]}</span>{elem.body}</p>
        ))}
        <div>
          {stars.map((elem,index)=>(
        <i className={`bi bi-star-fill ${index < currentValue ? "gold" : "grey"}`} 
        onClick={()=>{handleClick(index+1)}}
        ></i>
          ))}
            <textarea placeholder="enter feedback" onChange={(e)=>{setComment(e.target.value)}} cols="30" rows="3" style={{margin:"10px 20px 30px"}}></textarea>
        </div>

        <button onClick={()=>{addRating(currentValue, oneProduct.id); addComment(comment, oneProduct.id)}}>Leave Feedback</button>
      </div>
      <Button variant="primary" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  );
};

export default ProductDetails;
