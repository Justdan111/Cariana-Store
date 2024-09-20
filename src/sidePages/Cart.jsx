/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";




const Cart = () => {
  const {
    cart,
    removeFromCart,
    
    decreaseAmount,
    total,
    setCart
   
  } = useContext(CartContext);

  const handleIncrease = (item) => {
    setCart((prev) =>
      prev.map((x) => {
        return x.id === item.id ? { ...x, amount: x.amount + 1 } : x;
      })
    );
  };
  
  
  
 
  


  return (
    <div className="container mx-auto py-7 ">
      {cart.length > 0 ? (
        <div className="w-full mx-auto">
          <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4 border-b">Product</th>
                  <th className="text-left p-4 border-b">Quantity</th>
                  <th className="text-right p-4 border-b">Price</th>
                  <th className="text-right p-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
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
                        {item.title}
                      </Link>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <button
                          className={`p-2 rounded ${
                            item.amount <= 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                          onClick={() => decreaseAmount(item.id)}
                          disabled={item.amount <= 1}
                        >
                          <IoMdRemove className="w-4 h-4" />
                        </button>
                        <span className="px-2">{item.amount}</span>
                        <button
                          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                          onClick={() => handleIncrease(item)}
                        >
                          <IoMdAdd className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                    <td className="p-4 text-right font-semibold">
                      ${parseFloat(item.price * item.amount).toFixed(2)}
                    </td>
                    <td className="p-4 text-right">
                      <button
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <IoMdClose className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          {/* Order Summary */}
          <div className="mt-8 bg-muted/40 rounded-lg p-6 max-w-sm mx-auto">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="border-t border-gray-300 my-2" />
            <div className="flex items-center justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              className="block w-auto mt-6 text-center bg-black text-white py-2 rounded hover:bg-pink-500"
            >
              Proceed to Checkout
            </Link>
          </div>

           
          <Link to="/shop" className="mt-4 text-pink-500 underline">
            Continue Shopping
          </Link>
        </div>
        
      ) : (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold">Your Cart is currently empty</h2>
          <Link to="/shop" className="mt-4 text-pink-500 underline">
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
  
  
};
export default Cart;
