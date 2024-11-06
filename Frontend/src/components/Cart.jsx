import React, { useState, useEffect } from "react";
import axios from "axios";
import Payment from "../pages/Payment";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const userId = localStorage.getItem("userId");
  
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:8080/api/cart/${userId}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`, 
            "Content-Type": "application/json" 
          },
        });
  
        const data = await response.json();
        setCartItems(data.cart || []);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
  
    fetchCart();
  }, [userId]);

  const handleRemoveItem = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`http://localhost:8080/api/cart/${id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`, 
            "Content-Type": "application/json" 
        },
      });

      if (response.status === 200) {
        setCartItems(response.data.products);  
      } else {
        console.error("Failed to remove item:", response.data.message);
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const openPayment = () => setIsPaymentOpen(true);
  const closePayment = () => setIsPaymentOpen(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.productId.price,
    0
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-8 mt-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item._id} className="flex items-center justify-between space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <img
                  src={item.productId.imageUrl}
                  alt={item.productId.name}
                  className="w-20 h-20 object-cover rounded-lg shadow"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.productId.name}</h3>
                  <p className="text-sm text-gray-500">{item.quantity} x ${item.productId.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-lg font-semibold text-gray-800">${(item.quantity * item.productId.price).toFixed(2)}</p>
                <button
                  onClick={() => handleRemoveItem(item._id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center py-8">Your cart is currently empty.</p>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <p className="text-lg font-bold text-gray-800 flex justify-between">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </p>
          <button
            onClick={openPayment}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md w-full hover:bg-blue-700 transition duration-300"
          >
            Proceed to Checkout
          </button>
          {isPaymentOpen && <Payment onClose={closePayment} />}
        </div>
      )}
    </div>
  );
};

export default Cart;
