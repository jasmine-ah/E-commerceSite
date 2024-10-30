import React, { useState } from "react";
import cart from '../assets/cart.json';
function Payment({ onClose }) {
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
    });
    const [cartItems, setCartItems] = useState(cart);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        alert('Payment Successful');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6" onClick={onClose}>
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
                    {/* <div className="flex justify-between text-gray-600 mb-2">
                        <p>Item 2</p>
                        <p>$35.00</p>
                    </div> */}
                    <div className="flex justify-between font-semibold text-gray-800">
                        <p>Total</p>
                        <p>$</p>
                    
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <h3 className="text-lg font-semibold text-[#9b5c71] mb-4">Payment Details</h3>

                    <div className="mb-4">
                        <label className="block text-[#c7899e] font-medium mb-2">Card Number</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-[#c7899e] font-medium mb-2">Cardholder's Name</label>
                        <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            placeholder="Abebe Kebede"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1 mb-4">
                            <label className="block text-[#c7899e] font-medium mb-2">Expiry Date</label>
                            <input
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex-1 mb-4">
                            <label className="block text-gray-600 font-medium mb-2">CVV</label>
                            <input
                                type="password"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                placeholder="123"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-[#c7899e] hover:bg-[#9b5c71] text-white font-semibold rounded-lg transition duration-300"
                    >
                        Complete Payment
                    </button>
                </form>

               
                <div className="flex items-center justify-center mt-6 space-x-4">
                    <img src="/TeleBirr.png" className="h-8"/>
                    <img src="/CBEBirr.png" className="h-8"/>
                    <img src="/Chapa.png" className="h-8"/>
                    <img src="/Dashen.png" className="h-8"/>
                </div>
            </div>
        </div>
    );
}

export default Payment;
