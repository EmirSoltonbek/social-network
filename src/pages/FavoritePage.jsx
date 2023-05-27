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
  //   console.log(favorite.products[0].item);
  return (
    <div>
      <div className="container">
        {favorite.products.length ? (
          favorite.products.map((elem) => {
            return (
              <FavoriteComponent
                image1={elem.item.image1}
                image2={elem.item.image2}
                title={elem.item.title}
                description={elem.item.description}
                price={elem.item.price}
                id={elem.item.id}
                deleteFavoriteProduct={deleteFavoriteProduct}
                elem={elem}
                key={elem.item.id}
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
