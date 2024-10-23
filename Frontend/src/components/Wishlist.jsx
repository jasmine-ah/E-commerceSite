import React, { useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Red Temptation",
      price: "$100.99",
      image: "temp.jpg",
    },
    {
      id: 2,
      name: "Red Temptation",
      price: "$100.99",
      image: "temp.jpg",
    },
  ]);

  return (
    <div className="bg-white rounded-lg shadow-md p-8 mt-8">
      <h3 className="text-2xl font-bold text-gray-800">Your Wishlist</h3>
      <ul className="mt-4 space-y-4">
        {wishlist.map((item) => (
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
              <p className="text-gray-500">{item.price}</p>
            </div>
            <button
              className="bg-[#F4B400] text-white text-sm px-4 py-2 rounded-md shadow hover:bg-blue-500 transition duration-300"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
