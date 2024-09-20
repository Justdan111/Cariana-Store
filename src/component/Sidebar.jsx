/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { IoMdArrowForward } from 'react-icons/io';
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { FiTrash2 } from 'react-icons/fi'
import { GiShoppingBag } from 'react-icons/gi';
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => handleClose(false)}
        />
      )}

      <div
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 px-4 lg:px-[35px] overflow-auto z-50`}
      >
        <div className="flex items-center justify-between py-6 border-b pt-6">
          <div className=" flex uppercase font-semibold">
          <GiShoppingBag className=" mr-3  scale-125 " /> cart</div>
          <div
            onClick={() => handleClose(false)}
            className="cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>

        {cart.length > 0 ? (
          <div className="flex flex-col gap-y-2 h-[500px] lg:h-[300px] overflow-y-auto overflow-x-hidden border-b ">
            {cart.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </div>
        ) : (
          <div className="uppercase items-center flex  ">no products in the cart</div>
        )}

        {cart.length > 0 && (
          <div className="flex flex-col gap-y-3 py-4 mt-4 sticky">
            <div onClick={clearCart} className="flex w-full justify-between items-center">
              {/* total */}
              <div className="uppercase font-semibold">
                <span className="mr-2">Total:</span>${parseFloat(total).toFixed(2)}
              </div>
              {/* clear cart icon */}
              <div className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
                <FiTrash2 />
              </div>
            </div>

            <div onClick={() => handleClose(false)} className="flex">
              <Link
                to="/cart"
                className="bg-primary rounded-[30px] text-sm py-2 px-6 flex justify-center items-center text-white hover:bg-white hover:text-black hover:border-black border uppercase mr-10"
              >
                view cart
              </Link>

              <Link
                to="/checkout"
                className="bg-gray-300 flex rounded-[30px] text-sm py-2 px-5 justify-center items-center text-white hover:bg-white hover:text-black hover:border-black border uppercase font-medium"
              >
                check out
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default Sidebar;
