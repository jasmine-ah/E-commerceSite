import React, { useState } from "react";
import cart from "../assets/cart.json";
const Cart = () => {
  const [cartItems, setCartItems] = useState(cart);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );



  return (
    <div className="bg-white rounded-lg shadow-md p-8 mt-8">
      <h3 className="text-2xl font-bold text-gray-800">Your Cart</h3>
      <ul className="mt-4 space-y-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center space-x-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg shadow"
            />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h4>
              <p className="text-gray-500">
                {item.quantity} x {item.price}
              </p>
            </div>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
            <p className="text-lg font-semibold text-gray-800">
              ${item.quantity * parseFloat(item.price.slice(1))}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t pt-4">
        <p className="text-lg font-bold text-gray-800">
          Total: <span>${total.toFixed(2)}</span>
        </p>
        <button className="mt-4 bg-[#c7899e] text-white text-sm px-6 py-3 rounded-md shadow hover:bg-[#eacc79] transition duration-300 w-full">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
