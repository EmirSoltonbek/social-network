import React, { createContext, useContext } from 'react'
import { useReducer } from 'react';

export const favoriteContext = createContext();
export const useFavorite = () => useContext(favoriteContext);

const INIT_STATE = {
    favorite: {products: []},
    favoriteLength: 0
}

function reducer (state, action) {
    switch (action.type) {
        case "GET_FAVORITE":
            return {...state, favorite: action.payload}
    
        default:
            return state;
    }
}

const FavoriteContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    // ! getFavorite

    function getFavorite() {
    const userEmail = localStorage.getItem("email");
        const userEmailFavorite = userEmail + "_favorite";

        let favorite = JSON.parse(localStorage.getItem(userEmailFavorite));
        if (!favorite) {
            localStorage.setItem(userEmailFavorite,
                JSON.stringify({
                    products: [],
                  }) 
                );
                favorite = {
                    products: [],
                }
        }
    
        dispatch({
            type: "GET_FAVORITE",
            payload: favorite,
        })
      }


    // ! getFavorite finish


    // ! addProductToFavorite

      function addProductToFavorite(product) {
        const userEmail = localStorage.getItem("email");
        const userEmailFavorite = userEmail + "_favorite";

        if (!userEmail) {
            alert("ты виновен по причине, незарегестрированный долбаеб, иди регайся");
            return null;
        }
        let favorite = JSON.parse(localStorage.getItem(userEmailFavorite));
        if (!favorite) {
            favorite = {
                products: [],
                totalPrice: 0,
            }
        }
        // формирование продукта, который будет хранится в корзине
        let newProduct = {
            item: product, // сам продукт
          };
    
        let productToFind = favorite.products.filter(elem => {
            return elem.item.id === product.id;
        });
        if (productToFind.length === 0) {
            favorite.products.push(newProduct);
        } else {
            favorite.products = favorite.products.filter(elem => {
                return elem.item.id != product.id;
            })
        }
    
    
        localStorage.setItem(userEmailFavorite, JSON.stringify(favorite));
        dispatch({
            type: "GET_FAVORITE",
            payload: favorite,
        })
      }

    // ! addProductToFavorite finish

    // ! deleteFavoriteProduct 

    function deleteFavoriteProduct (id) {
        const userEmail = localStorage.getItem("email");
        const userEmailFavorite = userEmail + "_favorite";
        let favorite = JSON.parse(localStorage.getItem(userEmailFavorite));
    
        favorite.products = favorite.products.filter(elem => {
            return elem.item.id != id;
        });
    
    
        localStorage.setItem(userEmailFavorite, JSON.stringify(favorite));
        dispatch({
            type: "GET_FAVORITE",
            payload: favorite,
        })
      }

    // ! deleteFavoriteProduct finish
    
    // ! checkProductInFavorite
    function checkProductInFavorite(id) {
        const userEmail = localStorage.getItem("email");
        const userEmailFavorite = userEmail + "_favorite";

        let favorite = JSON.parse(localStorage.getItem(userEmailFavorite));
        if (favorite) {
            let newFavorite = favorite.products.filter(elem => elem.item.id === id);
            return newFavorite.length > 0;
        }
      }

    // ! checkProductInFavorite finish





    const values = {
        getFavorite, checkProductInFavorite, deleteFavoriteProduct, addProductToFavorite, favorite: state.favorite
    };
  return (
    <favoriteContext.Provider value={values}>{children}</favoriteContext.Provider>
  )
}

export default FavoriteContextProvider