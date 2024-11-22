import React from "react";
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
function About() {
  return (
    <section className="bg-[#f4f7fb] py-10 h-[90rem]">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row">
        <div className="w-[50%]">
        <h1 className="text-4xl font-serif  mb-8 text-[#374151]">About Us</h1>  
        <p className="mb-4 text-gray-600 leading-relaxed font-extralight">
        Discover the essence of elegance with our exclusive range of premium perfumes. At our store, every scent tells a story, crafted to elevate your style and leave a lasting impression.
        <Link to="/productlist">
        <motion.button className="hidden md:block mt-8 px-8 py-4 bg-[#c7899e] text-white font-semibold text-lg shadow-lg hover:bg-[#b37487] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}> Buy Now</motion.button>
        </Link>
        </p>
        <img src="/about2.jpg" alt="Perfume Bottles" className="mt-4 w-full h-[540px]" />
        </div>

      <div className="w-[50%] h-[500px] mt-8 ml-[5rem] bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
        <img src="/about1.jpg" alt="Perfume Bottles" className="mx-auto w-full h-[500px]" />
        <h2 className="text-3xl font-serif mt-5 text-center text-gray-700"> Our Story</h2>
        <blockquote className="mt-3 mx-3 text-center text-gray-600 font-extralight">
        Our story began with a simple dream: to capture the essence of emotions in every drop. 
        Inspired by nature's beauty and the art of perfumery, we sell fragrances that evoke memories
        and ignite passion. Each bottle represents a journey of discovery, blending tradition with innovation. 
        At the heart of our brand is a commitment to quality, elegance, and sustainability. Join us in celebrating
        the power of scent to transform everyday moments into extraordinary experiences.
        </blockquote>
      </div>
      </div>
      <div className="container mx-auto px-6 mt-[90px] h-[200px]">
  <div className="bg-gradient-to-r from-[#dddedd] to-[#fefaf6] rounded-xl shadow-lg p-10 h-[30rem]">
    <h2 className="text-3xl font-serif text-center text-[#374151] mb-6 mt-[1rem]">What Our Customers Say</h2>
    <div className="flex flex-col md:flex-row gap-8 items-center mt-[4rem]">
      {/* Customer 1 */}
      <div className="flex-1 bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
        <img src="/person2.jpg" alt="Customer 1" className="w-16 h-16 rounded-full mx-auto mb-4 "/>
        <p className="italic text-gray-600 text-center">
          "Fast delivery and authentic brands—this is my go-to site for all things perfume."
        </p>
        <p className="text-center mt-4 font-semibold text-gray-700">- Lina A.</p>
      </div>

      {/* Customer 2 */}
      <div className="flex-1 bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
        <img src="/person2.jpg" alt="Customer 2" className="w-16 h-16 mx-auto mb-4 "/>
        <p className="italic text-gray-600 text-center">
          "Amazing variety! Every fragrance tells a unique story, and I love exploring them all."
        </p>
        <p className="text-center mt-4 font-semibold text-gray-700">- Abebe L.</p>
      </div>

      {/* Customer 3 */}
      <div className="flex-1 bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
        <img src="/person2.jpg" alt="Customer 3" className="w-16 h-16 rounded-full mx-auto mb-4"/>
        <p className="italic text-gray-600 text-center">
          "Unboxing my order felt like a luxurious experience. Highly recommended!"
        </p>
        <p className="text-center mt-4 font-semibold text-gray-700">- Selam R.</p>
      </div>
    </div>
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
