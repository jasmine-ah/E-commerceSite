import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import API_URL from "../apiConfig"; 
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products/all`);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (category) => {
    if (!category || category.trim() === "") {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const categoryOptions = [...new Set(products.map((product) => product.category))];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 px-4 md:px-12">
        <h1 className="text-2xl md:text-3xl font-semibold md:ml-[4rem] text-gray-800 mb-4 md:mb-0">
          Our Products
        </h1>
        <select onChange={(e) => handleSearch(e.target.value)} className="w-full md:w-1/4 border-black px-3 py-2 rounded-md md:mr-[4rem]">
          <option value="">All Categories</option>
          {categoryOptions.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
