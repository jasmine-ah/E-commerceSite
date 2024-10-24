import React from "react";
import orders from "../assets/orders.json"
const OrderHistory = () => {

  return (
    <div className="bg-white rounded-lg shadow-md p-8 mt-2 w-full">
      <h3 className="text-2xl font-bold text-gray-800">Order History</h3>
      <ul className="mt-4 space-y-4">
        {orders.map((order) => (
          
          <li key={order.id} className="flex justify-between">
            
            <div>
              {/* <p className="text-lg font-semibold text-gray-800">Order #{order.id}</p> */}
              
            
              <p className="text-gray-500">{order.date}</p>
             
            </div>
            <p className="text-gray-500">{order.items} items</p>
            <p className="text-lg font-semibold text-gray-800">{order.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
