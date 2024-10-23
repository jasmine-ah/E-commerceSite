import React from "react";

const Product = () => {
  const product = {
    name: "Red Zara Temptation",
    price: "$100.99",
    description:
      "Indulge in the intoxicating allure of Sensual Bloom, a luxurious eau de parfum that captures the essence of a midnight garden.",
    image: "tempt.jpg",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
     
      <nav className="max-w-6xl mx-auto mb-8">
        <ol className="flex text-gray-600 space-x-2">
          <li><a href="/" className="hover:text-gray-900">Home</a></li>
          <li>/</li>
          <li>Products</li>
          <li>/</li>
          <li className="font-semibold">Red Zara Temptation</li>
        </ol>
      </nav>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Product Image */}
          <div className="flex-1">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>

            <p className="text-2xl text-gray-600 font-semibold mb-4">
              {product.price}
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* add to cart */}
            <button className="bg-[#f4b400] text-white text-lg px-8 py-3 rounded-md shadow-md hover:bg-[#f8c842] transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Product Details
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Top notes of crisp bergamot and succulent orange blossom</li>
            <li>Heart notes of jasmine and rose petals</li>
            <li>Base notes of velvety sandalwood and musk</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
