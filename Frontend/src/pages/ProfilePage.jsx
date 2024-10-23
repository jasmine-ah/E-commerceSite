import React from "react";
import UserProfile from "../components/UserProfile";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import OrderHistory from "../components/OrderHistory";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          User Profile
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <UserProfile />
          <Cart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
         
          {/* <Wishlist /> */}
          <OrderHistory />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
