/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React,{ useContext } from "react";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { WishListContext } from "../context/WishListContext";
import { TiTick } from "react-icons/ti";


const Product = ({ product }) => {
    const { addToCart, isInCart } = useContext(CartContext)
    const inCart = isInCart(product.id);
    const {addToWishList, isInWishList} = useContext(WishListContext)
    const inWishList = isInWishList(product.id);

    const { id, image, category, title, price } = product;
    return (  
    <div>
        <div className="border border-[#ded7d7f5] h-[300px] mb-4 relative overflow-hidden group transition">
             <div className="w-full h-full flex justify-center items-center">
                {/* {image} */}
                <div className="w-[200px] mx-auto flex justify-center items-center">
                    <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={image} alt="" />
                </div>
             </div>
             {/* buttons */}
             <div className="absolute bottom-[-50px] right-0 group-hover:bottom-0 p-2 flex flex-col items-end justify-end gap-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">

                <button onClick={() => addToCart(product, id)}>
                <div 
                        className='flex justify-center items-center text-white w-12 h-12 bg-primary'>
                       {inCart ? <TiTick className="text-xl" /> : <GiShoppingCart className="text-xl" />}
                     </div>
                    </button>

                    <Link to={`/product/${product.id}`}
                     className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl">
                    <FaArrowRight />
                    </Link>

                    <button onClick={() => addToWishList(product, id)}
                    className={`w-12 h-12 bg-white flex justify-center items-center ${inWishList ?  "text-primary" : "text-green-400" } drop-shadow-xl`}>
                     <FaHeart />
                    </button>
                </div>
             </div>
             {/* category & title & price */}
        <div>
            <div className="text-sm capitalize text-gray-500 mb-1"> {category}</div>
            <Link to={`/product/${id}`}>
            <h2 className="font-semibold mb-1">{title}</h2>
            </Link>
            
            <div className="font-semibold">$ {price}</div>
             </div>
        
         </div>
);
}
 
export default Product;