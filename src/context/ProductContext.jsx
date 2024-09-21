/* eslint-disable no-unused-vars */
import React, { createContext } from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";


export const ProductContext = createContext();

const fetchProducts = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};

 const ProductProvider = ({ children }) => {
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };
  

 

  return (
    <ProductContext.Provider value={{ products, isLoading, error, truncateText }}>
      {children}
    </ProductContext.Provider>
  );
};


export default ProductProvider;



