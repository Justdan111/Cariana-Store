/* eslint-disable no-unused-vars */

import React from 'react';
import  {Link }  from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="px-4 bg-stone-100 flex flex-col md:flex-row flex-wrap justify-between py-12 w-full ">
      <div className="mb-8 md:mb-0 px-5 w-full md:w-auto">
        <h1 className="font-bold text-4xl">Cariana</h1>
        <p>Copyright © 2024. <br /> All rights reserved.</p>
      </div>

      <div className="mb-8 md:mb-0 w-full md:w-auto">
        <ul className="flex flex-col items-start">
          <li><Link to="/create" className="hover:text-pink-500">Order History</Link></li>
          <li><Link to="/account" className="hover:text-pink-500">My Account</Link></li>
          <li><Link to="/about" className="hover:text-pink-500">About</Link></li>
          <li><Link to="/contact" className="hover:text-pink-500">Contact Us</Link></li>
        </ul>
      </div>

      <div className="mb-8 md:mb-0 w-full md:w-auto">
        <ul className="flex flex-col items-start">
          <li><Link to="/checkout" className="hover:text-pink-500">Checkout</Link></li>
          <li><Link to="/shop" className="hover:text-pink-500">Shop</Link></li>
          <li><Link to="/wishlist" className="hover:text-pink-500">Wishlist</Link></li>
          <li><Link to="/cart" className="hover:text-pink-500">Shopping Cart</Link></li>
        </ul>
      </div>

      <div className="mb-8 md:mb-0 w-full md:w-auto">
        <ul className="flex flex-col items-start">
          <li><Link to="/facebook" className="hover:text-pink-500">Facebook</Link></li>
          <li><Link to="/instagram" className="hover:text-pink-500">Instagram</Link></li>
          <li><Link to="/youtube" className="hover:text-pink-500">YouTube</Link></li>
          <li><Link to="/pinterest" className="hover:text-pink-500">Pinterest</Link></li>
        </ul>
      </div>

      <div className="mb-8 md:mb-0 w-full md:w-auto">
        <p className="mb-4">Sign up for our newsletter to get the latest news,<br /> announcements, and special offers:</p>
        <div className="flex items-center">
          <input 
            type="text" 
            className="px-2 py-1 border border-gray-300 rounded-l-md focus:outline-none w-full md:w-auto"
            placeholder="Your Email" 
          />
          <button className="px-4 py-1 bg-white text-black rounded-r-md hover:text-pink-500">SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
