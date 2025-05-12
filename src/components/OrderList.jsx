import React from 'react';
import { FaFilter, FaEllipsisV } from 'react-icons/fa';
import avatar from '../assets/Avtar_image.jpg'; // adjust path

const orders = [
  {
    id: 'Arise123',
    customer: 'Aarti',
    date: '12/03/2025',
    payment: '$1250',
    totalItems: 2,
    delivery: 'N/A',
  },
  {
    id: 'Arise124',
    customer: 'Ravi',
    date: '14/03/2025',
    payment: '$980',
    totalItems: 1,
    delivery: 'Pending',
  },
  {
    id: 'Arise125',
    customer: 'Meena',
    date: '15/03/2025',
    payment: '$2200',
    totalItems: 3,
    delivery: 'Shipped',
  },
];

const OrderList = () => {
  return (
    <div className="p-4 sm:p-6">
      <div className="border border-blue-300 rounded-2xl bg-white p-6 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Order List</h2>
          <div className="flex space-x-2">
            <button className="flex items-center px-3 py-1.5 border border-gray-300 text-sm rounded-md hover:bg-gray-100 text-gray-700">
              <FaFilter className="mr-2" />
              Filter
            </button>
            <button className="px-3 py-1.5 border border-gray-300 text-sm rounded-md hover:bg-gray-100 text-gray-700">
              See all
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50">
              <tr>
                <th className="p-3">
                  <input type="checkbox" className="accent-blue-600" />
                </th>
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer Name</th>
                <th className="p-3">Date</th>
                <th className="p-3">Payment</th>
                <th className="p-3">Total Item</th>
                <th className="p-3">Delivery</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-3">
                    <input type="checkbox" className="accent-blue-600" />
                  </td>
                  <td className="p-3 font-medium">{order.id}</td>
                  <td className="p-3 flex items-center gap-2">
                    <img src={avatar} alt="avatar" className="w-7 h-7 rounded-full" />
                    <span>{order.customer}</span>
                  </td>
                  <td className="p-3">{order.date}</td>
                  <td className="p-3">{order.payment}</td>
                  <td className="p-3">{order.totalItems}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        order.delivery === 'Shipped'
                          ? 'bg-green-100 text-green-700'
                          : order.delivery === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {order.delivery}
                    </span>
                  </td>
                  <td className="p-3 text-gray-500 hover:text-gray-700 cursor-pointer">
                    <FaEllipsisV />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button className="text-sm px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            &larr; Previous
          </button>
          <button className="text-sm px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
