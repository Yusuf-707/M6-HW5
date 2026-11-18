import React, { useContext } from "react";
import { FavoritesContext } from "../../Context/FavoriteCotext";

export const Header = () => {
  const { favorites, removeFavorite, clearFavorites } =
    useContext(FavoritesContext);

  return (
    <header>
        Header
      <h1>My Blog</h1>
      <div>
        {favorites.map((favorite) => (
          <div key={favorite.id}>
            <h3>{favorite.title}</h3>

            <button onClick={() => removeFavorite(favorite.id)}>Remove</button>
            <hr />
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <button onClick={clearFavorites}>Clear All</button>
    </header>
  );
};
