import React from "react";
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
function About() {
  return (
    <section className="bg-[#f4f7fb] py-10 h-full">
      <div className="container mx-auto px-4 flex flex-row ">
        <div className="w-[50%]">
        <h1 className="text-4xl font-bold  mb-8 text-gray-800">About <br /> Our Brand</h1>  
        <p className="mb-4 text-lg text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus<br /> voluptas, tempora, possimus atque, amet 
        <Link to="/product">
        <motion.button className="hidden md:block mt-8 px-8 py-4 bg-[#c7899e] text-white font-semibold text-lg shadow-lg hover:bg-[#b37487] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}> Buy Now</motion.button>
        </Link>
        </p>
        <img src="/cocop.jpg" alt="Perfume Bottles" className="mt-4 w-full" />
        </div>

      <div className="w-[50%] h-[550px] ml-[5rem] bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
        <img src="/herocart.png" alt="Perfume Bottles" className="mx-auto w-full h-auto" />
        <h3 className="text-2xl font-semibold mt-4 text-center text-gray-700">What Our Customers Say</h3>
        <blockquote className="mt-4 text-sm text-center text-gray-600 italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit quam tenetur eius molestiae quod, quas ullam similique. Obcaecati dolore provident voluptates dolorem consequuntur odio enim excepturi, neque quia repellendus.
        </blockquote>
      </div>
      </div>
      </section>

          //  <div className="w-full md:w-1/2 xl:w-1/3 bg-white p-8 h-[450px] rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"> 
          //   <img src="/p2.png" alt="Perfume Bottle" className="mx-auto w-full h-auto" />
          //   <h2 className="text-3xl mt-4 text-center text-gray-700">E-commerce</h2>
          //   <p className="mt-4 text-sm text-center text-gray-600">
          //     Experience the essence of dreams in every spritz.
          //   </p> 
          //  </div> 
       
        //   <div className=" ">
        
        //  <div className="w-full md:w-1/2 xl:w-1/3 bg-white p-8 h-[450px] rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
        //     <img src="/cocop.jpg" alt="Perfume Bottles" className="mx-auto w-full h-full" />
        //     <h3 className="text-2xl font-semibold mt-4 text-center text-gray-700">What Our Customers Say</h3>
        //     <blockquote className="mt-4 text-sm text-center text-gray-600 italic">
        //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit quam tenetur eius molestiae quod, quas ullam similique. Obcaecati dolore provident voluptates dolorem consequuntur odio enim excepturi, neque quia repellendus.
        //       </blockquote>
        //   </div> 
          
        //   <div className="w-full md:w-1/2 xl:w-2/3">
        //     <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Our Story</h2>
        //     <p className="mb-4 text-lg text-gray-600 leading-relaxed">
        //      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptas, tempora, possimus atque, amet molestiae optio maxime dolores cum et adipisci tempore laudantium distinctio sed quia autem cumque voluptatem corporis? 
        //     </p>
        //   </div> 

        
  );
}

export default About;
