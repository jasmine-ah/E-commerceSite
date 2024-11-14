import React, { useState } from "react";
import UserProfile from "../components/UserProfile";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import OrderHistory from "../components/OrderHistory";
import { FaShoppingCart, FaHistory, FaUser, FaHeart, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router";

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
      // 
      default:
        return <UserProfile />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#fce3eb] to-blue-50">
      {/* Sidebar */}
      <div className="w-72 bg-[#c7899e] shadow-xl fixed top-0 bottom-0 flex flex-col items-center py-10 space-y-8 px-6 rounded-r-3xl">
        <h2 className="text-3xl font-bold text-white mb-6">My Profile</h2>
        
        {[
          { name: "Profile", icon: FaUser, tab: "profile" },
          { name: "Cart", icon: FaShoppingCart, tab: "cart" },
          { name: "Order History", icon: FaHistory, tab: "history" },
        ].map(({ name, icon: Icon, tab }) => (
          <button
            key={name}
            className={`flex items-center w-full py-3 text-left rounded-md transition-all duration-300 transform hover:scale-105 ${
              activeTab === tab
                ? "bg-white text-[#c7899e] shadow-md"
                : "text-white hover:bg-blue-50"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            <Icon className="text-2xl mr-3" />
            <span className="text-xl font-semibold">{name}</span>
          </button>
        ))}

        {/* Spacer */}
        <div className="flex-grow"></div>

        {[
          { name: "Shop", icon: FaShoppingCart, tab: "shop" },
          { name: "Home", icon: FaHome, tab: "home" },
        ].map(({ name, icon: Icon, tab }) => (
          <button
            key={name}
            className={`flex items-center w-full py-2 text-left rounded-md transition-all duration-300 transform hover:scale-105 ${
              activeTab === tab
                ? "bg-white text-[#c7899e] shadow-md"
                : "text-gray-600 hover:bg-blue-50"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            <Icon className="text-2xl mr-3" />
            <span className="text-lg font-medium">{name}</span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-72 bg-white p-8 overflow-auto rounded-l-3xl">
        <div className="max-w-7xl mx-auto">{renderActiveTab()}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
