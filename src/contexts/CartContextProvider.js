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



    const values = {

    }
  return (
    <cartContext.Provider value={values}>{children}</cartContext.Provider>
  )
}

export default CartContextProvider