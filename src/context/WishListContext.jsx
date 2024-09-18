/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  const addToWishList = (product) => {
    setWishList((prevWishList) => {
     
      const productExists = prevWishList.some(item => item.id === product.id);
      
     
      if (!productExists) {
        return [...prevWishList, product];
      }
    
      return prevWishList;
    });
  };
 
   // Remove from cart
   const removeFromWishList = (id) => {
    const newWishList = wishList.filter(item => item.id !== id);
    setWishList(newWishList);
  };

  // Clear cart
  const clearWishList = () => {
    setWishList([]);
  };

  const isInWishList = (id) => {
    return wishList.some(item => item.id === id);
  };


  return (
    <WishListContext.Provider
      value={{ wishList, setWishList, addToWishList, removeFromWishList, clearWishList, isInWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};
