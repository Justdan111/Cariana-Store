/* eslint-disable no-unused-vars */

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { CartContext } from '../context/CartContext';
import { PaystackButton } from "react-paystack";
import { Tooltip } from '@mui/material';

const CheckOut = () => {
  const publicKey = "pk_test_d51c282e46a5af58553e5b45a94a14c9c1352e68"; 
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const { cart, total, emptyCart, addOrder } = useContext(CartContext);

  const componentProps = {
    email,
    metadata: {
      firstname,
      lastname,
      phone,
      country,
    },
    publicKey,
    text: "PLACE ORDER",
    amount: total * 100, // Paystack expects amount in kobo (for Naira), multiply by 100
    onSuccess: () => {
      // Add the current cart to order history
      const order = {
        id: Date.now(),
        items: cart,
        total,
        customer: { name, email, phone, country },
        date: new Date().toLocaleString(),
      };
      addOrder(order); // Add order to history
      emptyCart(); // Empty the cart
      alert("Payment successful! Order placed.");
    },
    onClose: () => alert("Make payment to place order!"),
  };

  return (
    <div className='p-10'>
      <Link to="/shop">
        <Tooltip title="back to shop">
          <FaCircleArrowLeft className='m-5'/>
        </Tooltip> 
      </Link>

      <div className='m-6'>
        <h1 className="text-2xl font-bold mb-6">BILLING DETAILS</h1>
        <form>
          <div className='flex gap-10'>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-black">First name*</label>
              <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-black">Last name*</label>
              <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Country / Region *</label>
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Phone *</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Email address *</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
          </div>
        </form>
      </div>

      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Your Order</h1>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-600">Product </th>
                <th className="text-left p-4 font-semibold text-gray-600 border-l">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4 flex items-center text-gray-700">
                    {item.title} x {item.amount}
                  </td>
                  <td className="p-4 text-right font-semibold text-gray-700 border-l">
                    ${parseFloat(item.price * item.amount).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-gray-50 p-4 flex justify-between items-center border-t">
            <span className="text-lg font-semibold text-gray-700">Total</span>
            <span className="text-lg font-bold text-gray-900">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className='flex justify-end'>
        <PaystackButton className='bg-primary text-white py-3 px-6 m-5 hover:bg-gray-500' {...componentProps} />
      </div>
    </div>
  );
};

export default CheckOut;
