import React from "react";
import { useCart } from "../../contexts/CartContextProvider";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FavoriteComponent = ({
  description,
  title,
  price,
  image1,
  image2,
  deleteFavoriteProduct,
  id,
  elem,
}) => {
  const { addProductToCart } = useCart();
  const { checkProductInCart } = useCart();
  const navigate = useNavigate();
  console.log(elem.item);
  return (
    // <div className="product_wrap">
    //   <div className="image_wrap">
    //     <Carousel
    //       onClick={(e) => {
    //         e.stopPropagation();
    //         if (e.target.className === "d-block w-100") {
    //           navigate(`/details/${id}`);
    //         }
    //       }}
    //     >
    //       <Carousel.Item>
    //         <img className="d-block w-100" src={image1} />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img className="d-block w-100" src={image2} />
    //       </Carousel.Item>
    //     </Carousel>
    //   </div>
    //   <div className="context_wrap">
    //     <h3>{title}</h3>
    //     <h3>{price}</h3>
    //     <p>{description}</p>
    //     <button onClick={() => deleteFavoriteProduct(id)}>
    //       <i className="bi bi-trash3"></i>
    //     </button>
    //   </div>
    //   <div className="buttons_wrap">
    //     {/* cart button start */}
    //     {checkProductInCart(elem.item.id) ? (
    //       <Button variant="danger" onClick={() => addProductToCart(elem.item)}>
    //         In Cart
    //       </Button>
    //     ) : (
    //       <Button variant="primary" onClick={() => addProductToCart(elem.item)}>
    //         Add to Cart
    //       </Button>
    //     )}
    //     {/* cart button end */}
    //   </div>
    // </div>
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
            <button onClick={() => deleteFavoriteProduct(id)}>
              <i className="bi bi-trash3"></i>
            </button>
          </div>
          <div className="sub_price">
            {/* <button onClick={() => deleteCartProduct(id)}>
              <i className="bi bi-trash3" style={{ color: "red" }}></i>
            </button> */}
            {checkProductInCart(elem.item.id) ? (
              <Button
                variant="danger"
                onClick={() => addProductToCart(elem.item)}
              >
                In Cart
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() => addProductToCart(elem.item)}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteComponent;
