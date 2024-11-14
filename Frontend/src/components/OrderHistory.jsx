import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderHistory = () => {
  const [orderItems, setOrderItems] = useState([]);
  
  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/order/all`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      });

      const data = await response.json();
      setOrderItems(data.orders || []);
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-6 w-full max-w-4xl mx-auto">
      <h3 className="text-3xl font-semibold text-gray-800 text-center mb-6">Order History</h3>
      {orderItems.length > 0 ? (
        <ul className="space-y-6">
          {orderItems.map((order) => (
            <li key={order._id} className="bg-gray-50 p-4 rounded-lg shadow-md">
             
              <p className="text-sm text-gray-500 mb-4">Placed on: {new Date(order.createdAt).toLocaleDateString()}</p>
              <ul className="space-y-3">
                {order.products.map((product) => (
                  <li key={product.productId._id} className="flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                      <img
                        src={product.productId.imageUrl}
                        alt={product.productId.name}
                        className="w-24 h-24 object-cover rounded-lg shadow-sm"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{product.productId.name}</h3>
                        <p className="text-sm text-gray-500">
                          {product.quantity} x ${product.productId.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-gray-800">
                      ${(product.quantity * product.productId.price).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="text-right text-lg font-semibold mt-4">Total: ${order.totalAmount.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center py-8">You have not placed any orders yet.</p>
      )}
    </div>
  );
};

export default OrderHistory;
