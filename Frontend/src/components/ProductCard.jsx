import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-center"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-500 mt-1">{product.category}</p>
        <p className="text-[#c7899e] text-xl font-bold mt-2">{product.price}</p>
      </div>
      <div className="p-4 border-t">
        <Link to="/product">
        <button className="bg-[#c7899e] text-white text-sm px-4 py-2 rounded-md shadow hover:bg-[#fce4ec] transition duration-300 w-full">
          View
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
