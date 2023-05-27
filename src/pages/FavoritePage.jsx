import React from "react";
import { useFavorite } from "../contexts/FavoriteContextProvider";
import FavoriteComponent from "../components/favorite/FavoriteComponent";
import { useEffect } from "react";

const FavoritePage = () => {
  const {
    getFavorite,
    checkProductInFavorite,
    deleteFavoriteProduct,
    addProductToFavorite,
    favorite,
  } = useFavorite();
  useEffect(() => {
    getFavorite();
  }, []);
  console.log(favorite);
  return (
    <div>
      <div className="container">
        {favorite.products.length ? (
          favorite.products.map((elem) => {
            return (
              <FavoriteComponent
                image={favorite.products.item.images}
                title={favorite.products.item.title}
                description={favorite.products.item.description}
                price={favorite.products.item.price}
              />
            );
          })
        ) : (
          <div>
            <h2>нихуя нет, иди в каталог и выбери что-нибудь</h2>
            <h2>сука</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
