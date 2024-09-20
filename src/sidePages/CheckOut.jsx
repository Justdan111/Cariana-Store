/* eslint-disable no-unused-vars */

import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCircleArrowLeft } from "react-icons/fa6";
import { CartContext } from '../context/CartContext';
import { PaystackButton } from "react-paystack"
import { Tooltip } from '@mui/material';
const CheckOut = () => {
    
  const publicKey = "pk_test_d51c282e46a5af58553e5b45a94a14c9c1352e68"
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("")

  const {cart, total, } = useContext(CartContext) 
  

  const componentProps = {
    email,
    metadata: {
      name,
      phone,
      country,
      
    },
    publicKey,
    text: "PLACE ORDER",
    onSuccess: () =>
      alert("Payment successful!!"),
    onClose: () => alert("Make payment to place order!!!!"),
  }

  return (
    <div className='p-10'>
      <Link to="/shop" >
     <Tooltip title="back to shop"> <FaCircleArrowLeft  className='m-5'/> </Tooltip> 
      </Link>

      <div className='m-6'>
      <h1 className="text-2xl font-bold mb-6"> BILLING DETAILS</h1>
        <form action="">
        
      <div className='flex gap-10'>
        <div className="mb-4 w-full">
          <label  className="block text-sm font-medium text-black">
            First name*
          </label>
          <input
            type="text" value={name}
            
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
           onChange={(e) => setName(e.target.value)}  />
           </div>

           <div className="mb-4 w-full ">
          <label  className="block text-sm font-medium text-black">
            Last name*
          </label>
          <input
            type="text" value={name}
            
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            onChange={(e) => setName(e.target.value)}  />
           </div>

           </div>

           <div className="mb-4">
          <label className="block text-sm font-medium text-black">
          Company name (optional)
          </label>
          <input
            type="text" 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
           </div>

           <div className="mb-4">
          <label  className="block text-sm font-medium text-black">
          Country / Region *

          </label>
          <input
            type="text" value={country}
            
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            onChange={(e) => setCountry(e.target.value)}  />
           </div>

           <div className="mb-4">
          <label  className="block text-sm font-medium text-black">
          Street address *

          </label>
          <input
            type="address"
            
            placeholder='House number and street name'
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
           </div>

           <div className="mb-4">
          <label  className="block text-sm font-medium text-black">
          Town / City *

          </label>
          <input
            type="text"
            
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"/>
           </div>


           <div className="mb-4">
          <label  className="block text-sm font-medium text-black">
          State *


          </label>
          <input
            type="text"
            
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
           </div>

           <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-black">
          Phone *


          </label>
          <input
            type="text" value={phone}
            
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            onChange={(e) => setPhone(e.target.value)}  />
           </div>

           <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-black">
          Email address *


          </label>
          <input
            type="email" value={email}
            
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            onChange={(e) => setEmail(e.target.value)}  />
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
              {item.title} x  {item.amount}
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
      <PaystackButton className='bg-primary text-white py-3 px-6 m-5 hover:bg-gray-500'   {...componentProps} />
     
      </div>
    </div>
  )
}

export default CheckOut