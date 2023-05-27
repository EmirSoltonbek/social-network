// import React from "react";
// import "./ProductCard.css";
// // import FavoriteIcon from "@mui/icons-material/Favorite";
// // import { IconButton } from "@mui/material";
// // import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// // import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { Carousel, Button } from "react-bootstrap";
import { useCart } from "../../../contexts/CartContextProvider";
import { useProduct } from "../../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { useFavorite } from "../../../contexts/FavoriteContextProvider";

const ProductCard = ({ item }) => {
  const { addProductToCart, checkProductInCart } = useCart();
  const { addProductToFavorite, checkProductInFavorite } = useFavorite();
  const navigate = useNavigate();
  const { deleteProduct } = useProduct();
  return (
    <div>
      {/* <div className="instagram-card">
//   <img src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" alt="Изображение"/>
//   <div className="card-content">
//     <h3>Заголовок</h3>
//     <p>Описание карточки</p>
//     <a href="ссылка">Подробнее</a>
//   </div>
// </div> */}
      {/* <div className="instagram-card">
//         <div className="card-header">
//           <img
//             src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863"
//             alt="Аватарка"
//           />
//           <span className="username">{item.title}</span>
//         </div>
//         <img
//           src={item.images[1].image}
//           alt="Изображение"
//           style={{ width: "100%" }}
//         />
//         <div className="card-content">
//           <div className="caption">
//             <span className="username">_soltonbekov_</span>
//             <span className="caption-text">
//               Это я на расслабоне отдыхаю от городской суеты...
//             </span>
//           </div>
//           <div className="funcline">
//             <div className="funcline-left">
//               <div className="likes">
//                 <IconButton className="like-icon">
//                   <FavoriteIcon color="error" />
//                 </IconButton>
//                 <span className="like-count">100</span>
//               </div>
//               <div className="comments">
//                 <IconButton className="comment-icon">
//                   <ChatBubbleOutlineIcon sx={{ color: "black" }} />
//                 </IconButton>
//                 <span className="comment-count">10</span>
//               </div>
//             </div>
//             <div>
//               <IconButton>
//                 <TurnedInNotIcon sx={{ color: "black" }} />
//               </IconButton>
//             </div>
//           </div>
//         </div>
//       </div> */}
      <div className="card" style={{ width: "280px" }}>
        <Carousel
          key={item.id}
          onClick={(e) => {
            e.stopPropagation();
            if (e.target.className === "d-block w-100") {
              navigate(`/details/${item.id}`);
            }
          }}
        >
          <Carousel.Item>
            <img className="d-block w-100" src={item.image1} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={item.image2} />
          </Carousel.Item>
        </Carousel>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text">Price: {item.price}</p>

          {/* cart button start */}
          {checkProductInCart(item.id) ? (
            <Button variant="danger" onClick={() => addProductToCart(item)}>
              In Cart
            </Button>
          ) : (
            <Button variant="primary" onClick={() => addProductToCart(item)}>
              Add to Cart
            </Button>
          )}
          {/* cart button end */}

          <Button variant="light" onClick={() => addProductToFavorite(item)}>
            <i
              className={
                checkProductInFavorite(item.id)
                  ? "bi bi-heart-fill"
                  : "bi bi-heart"
              }
            ></i>
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteProduct(item.id);
            }}
          >
            Delete
          </Button>
          <Button
            variant="primary"
            onClick={() => navigate(`/edit/${item.id}`)}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

// export default ProductCard;
// import Carousel from 'react-bootstrap/Carousel';

// function ProductCard() {
//   return (
//     <Carousel fade>

//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=First slide&bg=373940"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>

//     </Carousel>
//   );
{
  /* } */
}

export default ProductCard;
