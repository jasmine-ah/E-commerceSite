import React from "react";
import ProductCard from "./ProductCard"; 
import products from "../assets/products.json";


const ProductList = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
 
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Products
      </h1>

      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
