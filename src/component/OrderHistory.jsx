import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const OrderHistory = () => {
  const { orderHistory } = useContext(CartContext);

  return (
    <div className='p-10'>
      <h1 className="text-2xl font-bold mb-6">Order History</h1>
      {orderHistory.length > 0 ? (
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-600">Order ID</th>
                <th className="text-left p-4 font-semibold text-gray-600">Date</th>
                <th className="text-left p-4 font-semibold text-gray-600">Total</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-4 text-gray-700">{order.id}</td>
                  <td className="p-4 text-gray-700">{order.date}</td>
                  <td className="p-4 text-gray-700">${order.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No orders yet.</p>
      )}
    </div>
  );
};


