import React, { useState, useEffect } from "react";
import axios from "axios";
import Payment from "../pages/Payment";
import { useNavigate } from 'react-router-dom';
import {Modal, Box, TextField, Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import API_URL from "../apiConfig"; 
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const userId = localStorage.getItem("userId");
  const [openPaymentInfo, setOpenPaymentInfo] = useState(false);
  const [payment, setPayment] = useState({ _id: "", name: "", description: "", price: "", imageUrl: [""], category: "" });
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [orderTotal, setOrderTotal] = useState(0);
  const token = localStorage.getItem("token");
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // alert('Payment Successful');
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

useEffect(() => {
  fetchCart();
  }, [userId]);
  
const fetchCart = async () => {
try {
  const response = await fetch(`${API_URL}/api/cart/${userId}`, {
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
  
  const handleOpenPaymentInfo = (cartItems) => {
    setPayment(cartItems);
    setOpenPaymentInfo(true);
};
  const handleClosePayment = () => setOpenPaymentInfo(false);

  const handleRemoveItem = async (productId) => {
    try {
      await axios.delete(`${API_URL}/api/cart/delete/${productId}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`, 
          "Content-Type": "application/json" 
        },
      });
      fetchCart(); 
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.productId.price,
    0
  );

  const handleCheckout = async () => {
    setIsLoading(true);
    const selectedCartItems = cartItems.filter(item => selectedItems.includes(item._id));
    const totalAmount = selectedCartItems.reduce(
      (acc, item) => acc + item.quantity * item.productId.price,
      0
    );

    try {
      const response = await axios.post(`${API_URL}/api/cart/checkout`, {
        cartItems: selectedCartItems,
        totalAmount,
        selectedItems,
        userId: localStorage.getItem("userId")
      }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
        }
      });

      toast.success("Payment Successful!", {
        position: "bottom-right", 
        autoClose: 3000,           
        hideProgressBar: true,     
        closeOnClick: true,        
        pauseOnHover: false,    
        style: {
          backgroundColor: '#c7899e', 
          color: 'white' 
        }
      });
      fetchCart();
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Unable to CheckOut", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        style: {
          backgroundColor: '#c7899e', 
          color: 'white' 
        }
      });
    } finally {
      setIsLoading(false);
      setOpenPaymentInfo(false);
    }
  };
  
  const handleToggleSelect = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md my-[55px] sm:my-auto m p-4 sm:p-8 w-full max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item._id} className="flex flex-wrap sm:flex-nowrap items-center justify-between space-y-4 sm:space-y-0 p-4 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4 flex-1">
                <img src={item.productId.imageUrl[currentImageIndex]} alt={item.productId.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shadow"/>
                <div>
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-800">{item.productId.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">{item.quantity} x ${item.productId.price.toFixed(2)}</p>
                {item.productId.stock < item.quantity ? (
                  <span className="text-red-500 text-xs sm:text-xl font-semibold">Out of Stock</span>
                ) : null}
                </div>
              </div>
              <div className="flex items-center justify-end sm:justify-end space-x-4 w-full sm:w-auto">
                <p className="text-sm sm:text-lg font-semibold text-gray-800">${(item.quantity * item.productId.price).toFixed(2)}</p>
                <button onClick={() => handleRemoveItem(item.productId._id)} className="text-red-500 hover:text-red-700 text-xs sm:text-sm">
                  Remove
                </button>
                <input 
                  type="checkbox" 
                  checked={selectedItems.includes(item._id)} 
                  onChange={() => handleToggleSelect(item._id)} 
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center py-8">Your cart is currently empty.</p>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <p className="text-sm sm:text-lg font-bold text-gray-800 flex justify-between">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </p>
          <button onClick={() => handleOpenPaymentInfo(cartItems)} className="mt-6 bg-[#c7899e] text-white px-6 py-3 rounded-md w-full hover:bg-[#a36b7e] transition duration-300">
            Proceed to Checkout
          </button>
          {/* {openPaymentInfo && <Payment onClose={handleClosePayment} />} */}
          <Modal open={openPaymentInfo} onClose={handleClosePayment}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', maxWidth:600, bgcolor: 'background.paper', p: 4, boxShadow: 24, borderRadius: 1 }}>
        <div className="flex items-center justify-center bg-gray-100 p-4 sm:p-6">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 max-w-xl w-full">
                
                <h2 className="text-2xl sm:text-3xl font-bold text-[#9b5c71] mb-4 sm:mb-6 text-center">Secure Payment</h2>
                <div className="border-b pb-4 sm:pb-6 mb-4 sm:mb-6">
                    <h3 className="text-lg font-semibold text-[#9b5c71] mb-2 sm:mb-4">Order Summary</h3>
                    <div className="text-sm sm:text-base text-gray-600">
                        {cartItems.map((item)=>(
                        <ul key={item._id} className="flex justify-between mb-2" >
                        <li>{item.productId.name}</li>
                        <li>{item.productId.price}$</li>
                        </ul>
                        ))}
                    </div>
                    <div className="flex justify-between font-semibold text-gray-800">
                        <p>Total </p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    

                    <button onClick={() => handleCheckout()} className="w-full py-2 sm:py-3 mt-2 sm:mt-4 bg-[#c7899e] hover:bg-[#9b5c71] text-white font-semibold rounded-lg transition duration-300">Complete Payment</button>
                </form>
                {/* <div className="flex items-center justify-center mt-6 space-x-4">
                    <img src="/TeleBirr.png" className="h-8"/>
                    <img src="/CBEBirr.png" className="h-8"/>
                    <img src="/Chapa.png" className="h-8"/>
                    <img src="/Dashen.png" className="h-8"/>
                </div> */}
            </div>
        </div>
        </Box>
        </Modal>

        </div>
      )}
      <ToastContainer /> 
    </div>
  );
};

export default Cart;
