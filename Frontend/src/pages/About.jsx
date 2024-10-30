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
            <img src="/p2.png" alt="Perfume Bottle" className="mx-auto w-full h-auto" />
            <h2 className="text-3xl mt-4 text-center text-gray-700">E-commerce</h2>
            <p className="mt-4 text-sm text-center text-gray-600">
              Experience the essence of dreams in every spritz.
            </p>
          </div>

  
          <div className="w-full md:w-1/2 xl:w-2/3">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Our Story</h2>
            <p className="mb-4 text-lg text-gray-600 leading-relaxed">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptas, tempora, possimus atque, amet molestiae optio maxime dolores cum et adipisci tempore laudantium distinctio sed quia autem cumque voluptatem corporis? 
            </p>
          </div>

        
          <div className="w-full md:w-1/2 xl:w-1/3 bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <img src="/herocart.png" alt="Perfume Bottles" className="mx-auto w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-4 text-center text-gray-700">What Our Customers Say</h3>
            <blockquote className="mt-4 text-sm text-center text-gray-600 italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit quam tenetur eius molestiae quod, quas ullam similique. Obcaecati dolore provident voluptates dolorem consequuntur odio enim excepturi, neque quia repellendus.
              </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
