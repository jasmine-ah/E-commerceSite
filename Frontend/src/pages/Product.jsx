import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import API_URL from "../apiConfig";
const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token")); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 
  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < product.imageUrl.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(`${API_URL}/api/cart/addToCart`,
        {
          productId: product._id,
          quantity: 1,   
        },
        config
      );
      toast.success("Product added to cart!", {
        position: "bottom-center", 
        autoClose: 3000,           
        hideProgressBar: true,     
        closeOnClick: true,        
        pauseOnHover: false,  
        style: {
          backgroundColor: '#c7899e', 
          color: 'white' 
        }   
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Failed to add product to cart. Please login first!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        style: {
          backgroundColor: '#c7899e', 
          color: 'white' 
        }
      });
    }
  };
  if (!product) return <p>Loading...</p>;

  return (
    
    <div className="min-h-screen bg-gray-50 py-8">
      
       <nav className="max-w-6xl mx-auto mb-8">
        <ol className="flex text-gray-600 space-x-2">
          <li><a href="/" className="hover:text-gray-900">Home</a></li>
          <li>/</li>
          <li>Products</li>
          <li>/</li>
          <li className="font-semibold">{product.name}</li>
        </ol>
      </nav>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="flex-1">
            <img src={product.imageUrl[currentImageIndex]} alt={product.name} onClick={handleImageClick}  className="rounded-lg shadow-lg" />
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
            
            <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>
            <p className="text-3xl text-black font-bold mb-4">${product.price}</p>


            <button onClick={handleAddToCart} className="bg-[#c7899e] text-white text-lg px-8 py-3 rounded-md shadow-md hover:bg-[#fce4ec] transition duration-300">
              <i className="fas fa-add"></i> Add To Cart
            </button>

            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Details</h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Top notes of crisp bergamot and succulent orange blossom</li>
                <li>Heart notes of jasmine and rose petals</li>
                <li>Base notes of velvety sandalwood and musk</li> 
              </ul>
            </div>
          </div>
        </div>
      </div>
       <ToastContainer /> 
    </div>
  );
};

export default Product;
