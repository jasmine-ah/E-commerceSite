import React from "react";

function About() {
  return (
    <section className="bg-gradient-to-b from-purple-100 to-pink-50 py-20">
      <div className="container mx-auto px-4 flex flex-col">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Our Story
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-16">
 
          <div className="w-full md:w-1/2 xl:w-1/3 bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <img src="/p1.png" alt="Perfume Bottle" className="mx-auto w-full h-auto" />
            <h2 className="text-3xl font-semibold mt-4 text-center text-gray-700">Eau de Rêve</h2>
            <p className="mt-4 text-sm text-center text-gray-600">
              Experience the essence of dreams in every spritz.
            </p>
          </div>

  
          <div className="w-full md:w-1/2 xl:w-2/3">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Our Story</h2>
            <p className="mb-4 text-lg text-gray-600 leading-relaxed">
              Founded in 1850, Maison Eau de Rêve has been crafting exquisite perfumes for generations. Our journey began with a simple dream: to capture the essence of nature in every bottle. Today, we continue to push the boundaries of fragrance innovation while staying true to our heritage.
            </p>
          </div>

        
          <div className="w-full md:w-1/2 xl:w-1/3 bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <img src="/testimonials.jpg" alt="Perfume Bottles" className="mx-auto w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-4 text-center text-gray-700">What Our Customers Say</h3>
            <blockquote className="mt-4 text-sm text-center text-gray-600 italic">
              "Eau de Rêve's scents transport me to a world of wonder and enchantment." - Sarah K.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
