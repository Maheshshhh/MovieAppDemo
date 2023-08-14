import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
 const [favorites, setFavorites] = useState([]);

 const addToFavorites = (movie) => {
    if (!favorites.some((favMovie)=>favMovie.id === movie.id)) {
   setFavorites((prevFavorites) => [...prevFavorites, movie]);
    }
 };

 return (
<FavoriteContext.Provider value={{ favorites, addToFavorites }}>
     {children}
</FavoriteContext.Provider>
 );
};
