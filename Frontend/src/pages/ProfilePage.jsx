import React, { useState } from "react";
import UserProfile from "../components/UserProfile";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import OrderHistory from "../components/OrderHistory";
import { FaShoppingCart, FaHistory, FaUser, FaHeart } from "react-icons/fa";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "cart":
        return (
          <div className="max-h-[100%] overflow-y-auto bg-white shadow-lg rounded-lg p-8 w-full md:w-3/4 lg:w-2/3">
            <Cart />
          </div>
        );
      // case "wishlist":
      //   return (
      //     <div className="bg-white shadow-lg rounded-lg p-8">
      //       <Wishlist />
      //     </div>
      //   );
      case "history":
        return (
          <div className="max-h-96 overflow-y-auto bg-white shadow-lg rounded-lg p-8 w-full md:w-3/4 lg:w-2/3">
            <OrderHistory />
          </div>
        );
      default:
        return (
          <div className=" overflow-y-auto bg-[#fce3eb] shadow-lg rounded-lg p-8 w-full md:w-3/4 lg:w-2/3">
            <UserProfile />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fce3eb] to-blue-50 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10 tracking-wide">
          My Profile
        </h1>

        <div className="flex justify-center space-x-2 mb-10">
          <button
            className={`flex items-center p-3 rounded-lg transition-transform transform hover:scale-105 duration-300 ${activeTab === "profile" ? "bg-blue-100" : "bg-white"}`}
            onClick={() => setActiveTab("profile")}
          >
            <FaUser className="text-2xl text-[#c7899e] mr-2" />
            Profile
          </button>
          <button
            className={`flex items-center p-3 rounded-lg transition-transform transform hover:scale-105 duration-300 ${activeTab === "cart" ? "bg-blue-100" : "bg-white"}`}
            onClick={() => setActiveTab("cart")}
          >
            <FaShoppingCart className="text-2xl text-[#c7899e] mr-2" />
            Cart
          </button>
          {/* <button
            className={`flex items-center p-3 rounded-lg transition-transform transform hover:scale-105 duration-300 ${activeTab === "wishlist" ? "bg-blue-100" : "bg-white"}`}
            onClick={() => setActiveTab("wishlist")}
          >
            <FaHeart className="text-2xl text-[#c7899e] mr-2" />
            Wishlist
          </button> */}
          <button
            className={`flex items-center p-3 rounded-lg transition-transform transform hover:scale-105 duration-300 ${activeTab === "history" ? "bg-blue-100" : "bg-white"}`}
            onClick={() => setActiveTab("history")}
          >
            <FaHistory className="text-2xl text-[#c7899e] mr-2" />
            Order History
          </button>
        </div>

        <div className="flex justify-center">
          {renderActiveTab()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
