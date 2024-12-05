import React, { useState } from "react";
import axios from "axios";
import API_URL from "../apiConfig"; 
const OrderConfirm = ({ cartItems, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    
    try {
      const response = await axios.post(`${API_URL}/api/checkout`, {
        cartItems
      }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });

      await new Promise(resolve => setTimeout(resolve, 3000));

      const order = response.data;
      alert(`Order placed successfully! Order ID: ${order._id}`);
      onClose();
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 mt-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h2>
      
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="paymentMethod">Payment Method:</label>
        <select
          id="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="">Select payment method</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>

        <button type="submit" onClick={handleCheckout} className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md w-full hover:bg-blue-700 transition duration-300">
          {isProcessing ? "Processing..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default OrderConfirm;
