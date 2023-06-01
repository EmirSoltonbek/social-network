// import React, { useEffect, useState } from "react";
// import { useCart } from "../../context/CartContextProvider";
// import { useNavigate } from "react-router-dom";
// import "./Cart.css";

// function NewCart() {
//   const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();
//   const navigate = useNavigate();
//   console.log(cart);
//   useEffect(() => {
//     getCart();
//   }, []);
//   const cartCleaner = () => {
//     localStorage.removeItem("cart");
//     getCart();
//   };
//   const [counter, setCounter] = useState(1);
//   return (
//     <div style={{ display: "grid" }}>
//       <h1 style={{ textAlign: "center", marginBottom: "1em" }}>
//         YOUR CART[{cart.products.length}]
//       </h1>
//       {cart?.products.map((elem) => (
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             borderBottom: "1px solid black",
//             gap: "3em",
//             justifyContent: "center",
//           }}
//         >
//           <div>
//             <img src={elem.item.image} alt="" width={150} />
//           </div>
//           <div style={{ display: "flex" }}>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 gap: "1em",
//                 minWidth: "300px",
//               }}
//             >
//               <h1>{elem.item.title}</h1>
//               <p>{elem.item.price}</p>

//               <div
//                 style={{
//                   border: "1px solid black",
//                   display: "flex",
//                   width: "20%",
//                   justifyContent: "space-evenly",
//                   margin: "0.5em 0",
//                 }}
//               >
//                 <button
//                   style={{
//                     backgroundColor: "white",
//                     border: "none",
//                   }}
//                   onClick={() => {
//                     setCounter(counter - 1);
//                     changeProductCount(counter, elem.item.id);
//                   }}
//                 >
//                   -
//                 </button>
//                 <p>{counter}</p>
//                 <button
//                   style={{ backgroundColor: "white", border: "none" }}
//                   onClick={() => {
//                     setCounter(counter + 1);
//                     changeProductCount(counter, elem.item.id);
//                   }}
//                 >
//                   +
//                 </button>
//               </div>
//               {/*!counter */}
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 alignSelf: "flex-end",
//                 paddingBottom: "25%",
//               }}
//             >
//               <button
//                 style={{
//                   border: "none",
//                   backgroundColor: "transparent",
//                   color: "red",
//                 }}
//                 onClick={() => deleteCartProduct(elem.item.id)}
//               >
//                 REMOVE
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//       <button
//         onClick={() => {
//           cartCleaner();
//           navigate("/checkout");
//         }}
//         style={{
//           width: "60%",
//           margin: "2em 0",
//           padding: "1em 0",
//           backgroundColor: "white",
//           border: "1px solid black",
//           justifySelf: "center",
//           fontWeight: "700",
//         }}
//       >
//         BUY NOW FOR
//         <span style={{ color: "green", fontWeight: "700" }}>
//           {cart?.totalPrice}
//         </span>
//       </button>
//     </div>
//   );
// }

// export default NewCart;
