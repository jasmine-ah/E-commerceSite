import React, { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../assets/products.json";

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

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
      <div className="flex flex-row justify-between mb-12">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Our Products
        </h1>
        <select onChange={(e) => handleSearch(e.target.value)} className="w-[20%] border-black">
          <option value="">All Categories</option>
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
