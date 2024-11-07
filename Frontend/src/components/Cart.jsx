import React, { useState, useEffect } from "react";
import axios from "axios";
import Payment from "../pages/Payment";
import { useNavigate } from 'react-router-dom';
import {Modal, Box, TextField, Button } from "@mui/material";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const userId = localStorage.getItem("userId");
  const [openPaymentInfo, setOpenPaymentInfo] = useState(false);
  const [payment, setPayment] = useState({ _id: "", name: "", description: "", price: "", imageUrl: "", category: "" });
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [orderTotal, setOrderTotal] = useState(0);
  const token = localStorage.getItem("token");

//////////  payment 
  const handleSubmit = (e) => {
    e.preventDefault();
  
    alert('Payment Successful');
};
const [formData, setFormData] = useState({
  cardNumber: '',
  cardName: '',
  expiryDate: '',
  cvv: ''
});
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};


//////////////
  useEffect(() => {
    const fetchCart = async () => {
      try {
        
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

  const handleOpenPaymentInfo = (cartItems) => {
    setPayment(cartItems);
    setOpenPaymentInfo(true);
};
  const handleClosePayment = () => setOpenPaymentInfo(false);

  const handleRemoveItem = async (product_id,cartId) => {
    try {
      await axios.delete(`http://localhost:8080/api/cart/${product_id}`);
      // setCartItems(cartItems.filter((item) => item.products._id !== id));
      fetchCart();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };
  // const openPayment = () => setIsPaymentOpen(true);
  // const closePayment = () => setIsPaymentOpen(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.productId.price,
    0
  );
  
  const handleCheckout = async () => {
    setOpenPaymentInfo(true);
    try {
      const products = cartItems.map(item => ({
        productId: item.productId._id,
        quantity: item.quantity
      }));
      const response = await axios.post('http://localhost:8080/api/cart/checkout', { userId, products });
   
      setOpenPaymentInfo(false);
      
      setCartItems([]);
    } catch (error) {
      console.error("Error during checkout:", error);
     
    }
  };

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
            onClick={() => handleOpenPaymentInfo(cartItems)}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md w-full hover:bg-blue-700 transition duration-300"
          >
            Proceed to Checkout
          </button>
          {/* {openPaymentInfo && <Payment onClose={handleClosePayment} />} */}
          <Modal open={openPaymentInfo} onClose={handleClosePayment}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, bgcolor: 'background.paper', p: 4, boxShadow: 24, borderRadius: 1 }}>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
                
                <h2 className="text-3xl font-bold text-[#9b5c71] mb-6 text-center">Secure Payment</h2>
                <div className="border-b pb-6 mb-6">
                    <h3 className="text-lg font-semibold text-[#9b5c71] mb-4">Order Summary</h3>
                    <div className="flex justify-between text-gray-600 mb-2">
                        {cartItems.map((item)=>(
                        <li key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        </li>
                        ))}
                    </div>
                    <div className="flex justify-between font-semibold text-gray-800">
                        <p>Total</p>
                        <p>$</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <h3 className="text-lg font-semibold text-[#9b5c71] mb-4">Payment Details</h3>

                    <div className="mb-4">
                        <label className="block text-[#c7899e] font-medium mb-2">Card Number</label>
                        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="1234 5678 9012 3456" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-[#c7899e] font-medium mb-2">Cardholder's Name</label>
                        <input type="text" name="cardName" value={formData.cardName} onChange={handleChange} placeholder="Abebe Kebede" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1 mb-4">
                            <label className="block text-[#c7899e] font-medium mb-2">Expiry Date</label>
                            <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} placeholder="MM/YY" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <div className="flex-1 mb-4">
                            <label className="block text-gray-600 font-medium mb-2">CVV</label>
                            <input type="password" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="123" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                    </div>

                    <button type="submit" className="w-full py-3 mt-4 bg-[#c7899e] hover:bg-[#9b5c71] text-white font-semibold rounded-lg transition duration-300">Complete Payment</button>
                </form>
                <div className="flex items-center justify-center mt-6 space-x-4">
                    <img src="/TeleBirr.png" className="h-8"/>
                    <img src="/CBEBirr.png" className="h-8"/>
                    <img src="/Chapa.png" className="h-8"/>
                    <img src="/Dashen.png" className="h-8"/>
                </div>
            </div>
        </div>
        </Box>
        </Modal>

        </div>
      )}
       
    </div>
  );
};

export default Cart;
