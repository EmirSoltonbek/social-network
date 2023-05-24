import React, { createContext, useContext, useReducer } from 'react'
import { getCountProductsInCart } from '../helpers/functions';


export const cartContext = createContext();
export const useCart = () => useContext(cartContext);

// начальное состояние для корзины
const INIT_STATE = {
    cart: JSON.parse(localStorage.getItem("cart")),
    cartLength: getCountProductsInCart(),
  };

  function reducer (state=INIT_STATE, action) {
    switch (action.type) {
        case "GET_CART":
            return {...state, cart: action.payload};
        case "GET_CART_LENGTH":
            return { ...state, cartLength: action.payload };
        default:
            return state;
    }
  }


const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getCart() {
    const userEmail = localStorage.getItem("email");
    let cart = JSON.parse(localStorage.getItem(userEmail));
    if (!cart) {
        localStorage.setItem(userEmail,
            JSON.stringify({
                products: [],
                totalPrice: 0,
              }) 
            )
    }
    cart = {
        products: [],
        totalPrice: 0,
    }

    dispatch({
        type: "GET_CART",
        payload: cart,
    })
  }

  function addProductToCart(product) {
    const userEmail = localStorage.getItem("email");
    let cart = JSON.parse(localStorage.getItem(userEmail));
    if (!cart) {
        cart = {
            products: [],
            totalPrice: 0,
        }
    }
    // формирование продукта, который будет хранится в корзине
    let newProduct = {
        item: product, // сам продукт
        count: 1, // кол-во данного продукта
        subPrice: +product.price, // стоимость за 1 шт.
      };

    let productToFind = cart.products.filter(elem => {
        return elem.item.id === product.id;
    });
    if (productToFind.length === 0) {
        cart.products.push(newProduct);
    } else {
        cart.products = cart.products.filter(elem => {
            return elem.item.id != product.id;
        })
    }

    localStorage.setItem(userEmail, JSON.stringify(cart));
    dispatch({type: "GET_CART", payload: cart});
  }

  function deleteCartProduct (id) {
    const userEmail = localStorage.getItem("email");
    let cart = JSON.parse(localStorage.getItem(userEmail));

    cart.products = cart.products.filter(elem => {
        return elem.item.id != id;
    });

    localStorage.setItem(userEmail, JSON.stringify(cart));
    dispatch({type: "GET_CART", payload: cart});
  }


//   getCart();


  
  // функция для получения данных корзины из localStorage
  





    const values = {

    }
  return (
    <cartContext.Provider value={values}>{children}</cartContext.Provider>
  )
}

export default CartContextProvider