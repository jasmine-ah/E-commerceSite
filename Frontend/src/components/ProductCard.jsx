import React,{useState} from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 
  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < product.imageUrl.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      
      <img
        src={product.imageUrl[currentImageIndex]}
        alt={product.name}
        className="h-48 w-full object-center cursor-pointer"
        onClick={handleImageClick} 
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-500 mt-1">{product.category}</p>
        <p className="text-[#c7899e] text-xl font-bold mt-2">${product.price}</p>
      </div>

      <div className="p-4 border-t">
      {product.stock <= 0 ? (
        <span className="text-red-500 text-xl font-semibold">Out of Stock</span>
      ):(
        <Link to={`/product/${product._id}`}>
        <button className="bg-[#c7899e] text-white text-sm px-4 py-2 rounded-md shadow hover:bg-[#fce4ec] transition duration-300 w-full">
          View
        </button>
        </Link>)}
      </div>

    </div>
  );
};

export default ProductCard;
