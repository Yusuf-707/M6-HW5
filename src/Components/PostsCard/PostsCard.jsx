import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../Context/FavoriteCotext";
export const PostsCard = (props) => {
  const { id, title, userId, users } = props;
  const user = users?.find(user => user.id == userId)
  const { favorites, addFavorite} = useContext(FavoritesContext)

  const isFavorite = favorites.some(post => post.id === id)

  return (
    <div>
      <Link to={`/posts/${id}`}>
        <h1>{title}</h1>
      </Link>
        <Link to={`/users/${userId}`}>
            <h1>Autor: {user?.name}</h1>
        </Link>
        <button disabled={isFavorite} onClick={() => {
          if(!isFavorite) addFavorite(props)
        }}>В избранное</button>
        <hr />
        <hr />
    </div>
  );
};
