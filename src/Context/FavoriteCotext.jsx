import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const addFavorite = (post) => {
    setFavorites((prev) => {
      if (prev.some((item) => item.id === post.id)) return prev;
      return [...prev, post];
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((post) => post.id !== id));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
