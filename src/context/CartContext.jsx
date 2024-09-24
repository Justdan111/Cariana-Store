/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(()=>{
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

 


  // Calculate total price
  useEffect(() => {
    const total = cart.reduce((previousItem, currentItem) => {
      return previousItem + (currentItem.price * currentItem.amount);
    }, 0);
    setTotal(total);
  }, [cart]); 

  // Update item amount
  useEffect(() => {
    const amount = cart.reduce((previousItem, currentItem) => {
      return previousItem + currentItem.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  // Check if item is already in the cart
  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  };



  useEffect(() => {
    // Update cartCount whenever cart changes
    setCartCount(cart.length);
    // save to cart whenever the cart changes
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);


  // Add to cart
  const addToCart = (product, id) => {
    const cartItem = cart.find(item => item.id === id);
  
    // If the item is already in the cart, do nothing
    if (!cartItem) {
      const newItem = { ...product, amount: 1 };
      setCart([...cart, newItem]);
    }
  };
  



  // const increaseAmount = (item) => {
  //   setItemAmount((prev) => 
  //   prev.map((x) => {
  //     return x.id === item.id ? { ...item, qty: item.qty + 1} : item;
  //   })
  // )
  // }

  // Remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Increase amount
 
  // Decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
      if (cartItem.amount > 1) {
        const newCart = cart.map(item => {
          if (item.id === id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        });
        setCart(newCart);
      } else {
        removeFromCart(id);
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, decreaseAmount, itemAmount, total, isInCart, itemAmount, setItemAmount, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
