import React, { useState } from "react";
import UserProfile from "../components/UserProfile";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import OrderHistory from "../components/OrderHistory";
import { FaShoppingCart, FaHistory, FaUser, FaHeart, FaHome, FaCartArrowDown, FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  const renderActiveTab = () => {
    switch (activeTab) {
      case "cart":
        return <Cart />;
      case "history":
        return <OrderHistory />;
      case "shop":
        return navigate('/productlist');
      case "home":
        return navigate('/');
      default:
        return <UserProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 flex flex-col">
      {/* Top Nav Bar */}
      <div className="fixed top-0 w-full bg-white shadow-md z-10 flex justify-between items-center px-4 sm:px-8 py-4">
        <h2 className="text-lg sm:text-2xl font-semibold text-[#c7899e]">My Profile</h2>
        <div className="flex space-x-2 sm:space-x-4">
          {[
            { name: "Profile", icon: FaUser, tab: "profile" },
            { name: "Cart", icon: FaShoppingCart, tab: "cart" },
            { name: "Order History", icon: FaHistory, tab: "history" },
          ].map(({ name, icon: Icon, tab }) => (
            <button key={name} className={`flex items-center py-2 px-2 sm:px-4 rounded-md text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 ${ activeTab === tab
                  ? "bg-[#c7899e] text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-200"
              }`} onClick={() => setActiveTab(tab)}>
              <Icon className="text:md sm:text-xl mr-1 sm:mr-2" />{name}</button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-15 sm:mt-10 flex justify-center items-center flex-1 bg-gray-50 p-4 sm:p-8 overflow-y-auto">
      
        {renderActiveTab()}
      </div>

      {/* Bottom Nav Bar */}
      <div className="fixed bottom-0 w-full bg-white shadow-md z-10 py-2">
        <div className="flex justify-around">
          {[
            { name: "Home", icon: FaHome, tab: "home" },
            { name: "Shop", icon: FaCartPlus, tab: "shop" },
          ].map(({ name, icon: Icon, tab }) => (
            <button key={name} className={`flex items-center py-2 px-4 rounded-md text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 ${ activeTab === tab
                  ? "bg-[#c7899e] text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-200"
              }`} onClick={() => setActiveTab(tab)}>
              <Icon className="text:md sm:text-xl mr-1 sm:mr-2" />{name}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
