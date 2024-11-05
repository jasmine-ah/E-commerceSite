import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token")); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/products/${productId}`);
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
      if (window.confirm("You need to log in to add items to your cart. Would you like to log in now?")) {
        navigate("/login");
        return;
      }
    }
    const token = localStorage.getItem('token');
    console.log("Sending token:", token); 

    try {
      const response = await fetch('http://localhost:8080/api/cart/addToCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ productId })
      });
  
      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }
  
      const data = await response.json();
      alert(`Added ${data.product.name} to cart successfully! Total: $${data.totalAmount.toFixed(2)}`);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert('Failed to add product to cart. Please try again.');
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
            <img src={product.imageUrl} alt={product.name} className="rounded-lg shadow-lg" />
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-2xl text-gray-600 font-semibold mb-4">${product.price}</p>
            <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>
            <button
              onClick={handleAddToCart}
              className="bg-[#c7899e] text-white text-lg px-8 py-3 rounded-md shadow-md hover:bg-[#fce4ec] transition duration-300"
            >
              Add to Cart
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
    </div>
  );
};

export default Product;
