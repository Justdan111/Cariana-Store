/* eslint-disable no-unused-vars */


import React, { useContext } from 'react';
import { WishListContext } from '../context/WishListContext';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import {  IoMdClose } from 'react-icons/io';
import { ProductContext } from '../context/ProductContext';

const Wishlist = () => {
  const { wishList,    removeFromWishList } = useContext(WishListContext);
  const { addToCart, isInCart } = useContext(CartContext);
  const { truncateText } = useContext(ProductContext)
  

  return (
    <div className="container mx-auto py-16 ">
  <h1 className="text-2xl font-bold mb-8">Wishlist</h1>

  {wishList.length > 0 ? (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-4 border-b">Product</th>
            <th className="text-left p-4 border-b">Price</th>
            <th className="text-right p-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {wishList.map((item) => {
            const inCart = isInCart(item.id);
            return (
              <tr key={item.id} className="border-b">
                <td className="p-4 flex items-center">
                  <img
                    src={item.image}
                    alt=""
                    className="w-16 h-16 rounded object-fit mr-4"
                  />
                  <Link
                    to={`/product/${item.id}`}
                    className="font-semibold hover:text-pink-500"
                  >
                    {truncateText (item.title, 40)}
                  </Link>
                </td>
                <td className="p-4 font-semibold">
                  ${parseFloat(item.price).toFixed(2)}
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-4">
                    <button
                      onClick={() => addToCart(item, item.id)}
                      className='p-2 rounded ${
                        bg-primary text-white  
                       hover:bg-red-600'
                    >
                     {inCart ? "Added to cart" : "Add to cart"}
                    </button>
                    <button
                      className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => removeFromWishList(item.id)}
                    >
                      <IoMdClose className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Link to="/shop" className="mt-4 text-pink-400 underline ">
        Continue Shopping
      </Link>
    </div>
  ) : (
    <div className="text-center py-20">
      <h2 className="text-xl font-semibold">Your wishlist is currently empty</h2>
      <Link to="/shop" className="mt-4 text-pink-500 underline">
        Continue Shopping
      </Link>
    </div>
  )}
</div>

  );
};

export default Wishlist;
