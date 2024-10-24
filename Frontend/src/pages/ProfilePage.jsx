import React from "react";
import UserProfile from "../components/UserProfile";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import OrderHistory from "../components/OrderHistory";
import { FaShoppingCart, FaHistory } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10 tracking-wide">
          My Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white shadow-lg rounded-lg p-3 transition-transform transform hover:scale-105 duration-300">
            <UserProfile />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 duration-300 flex items-center">
            <FaShoppingCart className="text-2xl text-[#c7899e] mr-4" />
            <Cart />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/*  Wishlist 
          <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 duration-300 hidden">
             <Wishlist /> 
          </div> */}

          <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 duration-300 flex items-center">
            <FaHistory className="text-2xl text-[#c7899e] mr-4" />
            <OrderHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
