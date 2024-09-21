/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { FaArrowRight } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { WishListContext } from "../context/WishListContext";
import { Link } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import Tooltip from '@mui/material/Tooltip';

const Shop = () => {
    const { products, isLoading, error, truncateText } = useContext(ProductContext);
    const { addToCart, isInCart } = useContext(CartContext);
    const {addToWishList, isInWishList} = useContext(WishListContext)
    

    
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        if (selectedCategory === "All") {
          setFilteredProducts(products);
        } else {
          setFilteredProducts(products.filter((product) => product.category === selectedCategory));
        }
      }, [products, selectedCategory]);
    
      //  Loading and Error message when fetching data

      if (isLoading) {
        return (
          <div className="flex items-center justify-center min-h-screen">
        <button
          type="button"
          className="bg-black text-white font-semibold py-2 px-4 rounded flex items-center"
          disabled
        >
          <ImSpinner9  className="animate-spin h-5 w-5 mr-3" />
          Loading...
        </button>
      </div>
    
        );
        
      }
    
      if (error) {
        return <div className="flex flex-col items-center justify-center min-h-screen bg-black text-red-600">
          Error: {error.message} <br />
          <h2> Check internet connection and Refresh</h2>
          </div>
      }



      return (
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 p-6">
          <aside className="bg-white shadow-lg lg:block hidden">
            <nav className="p-4">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul>
                {["All", "electronics", "jewelery", "men's clothing", "women's clothing"].map(
                  (category) => (
                    <li key={category}>
                      <button
                        className={`block w-full text-left rounded-md py-2 px-3 transition-colors ${
                          selectedCategory === category
                            ? "bg-primary text-white"
                            : "hover:bg-gray-400"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category.replace(/^\w/, (c) => c.toUpperCase())}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </aside>
    
          <main className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
              {filteredProducts.map((product) => {
                const inCart = isInCart(product.id);
                const inWishList = isInWishList(product.id);
                return (
                  <div key={product.id}>
                    <div className="border border-gray-300 h-[300px] mb-4 relative overflow-hidden group transition">
                      <div className="w-full h-full flex justify-center items-center">

                        {/* image */}
                        <div className="w-[200px] mx-auto flex justify-center items-center">

                          <img
                            className="max-h-[160px] group-hover:scale-110 transition duration-300 object-cover"
                            src={product.image}
                            alt={product.title}
                          />
                        </div>
                      </div>

                      {/* buttons */}
                      <div className="absolute bottom-[-50px] right-0 group-hover:bottom-0 p-2 flex flex-col items-end justify-end gap-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button onClick={() => addToCart(product, product.id)}>
                        <div 
                        className='flex justify-center items-center text-white w-12 h-12 bg-primary'>
                       {inCart ?  
                       <Link to={'/cart'}>
                        <Tooltip title="view cart"> <TiTick className="text-xl" />  </Tooltip>
                       </Link>
                       :
                       <Tooltip title="add to cart"> <GiShoppingCart className="text-xl" /> </Tooltip>
                       }
                     </div>

                        </button>
    
                        <Link
                          to={`/product/${product.id}`}
                          className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
                        >
                       <FaArrowRight title="view product" /> 
                        </Link>
    
                        <button
                          onClick={() => addToWishList(product, product.id)}
                          className={`w-12 h-12 bg-white flex justify-center items-center ${
                            inWishList ? "text-primary" : "text-green-400"
                          } drop-shadow-xl`}
                        >
                         <Tooltip title="add to wishlist"> <FaHeart  />  </Tooltip>
                        </button>
                      </div>
                    </div>
    
                    {/* category & title & price */}
                    <div>
                      <div className="text-sm capitalize text-gray-500 mb-1">
                        {product.category}
                      </div>
                      <Link to={`/product/${product.id}`}>
                        <h2 className="font-semibold mb-1">{truncateText(product.title, 20)}</h2>
                      </Link>
                      <div className="font-semibold">$ {product.price}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      );
    };
    
    export default Shop;
    