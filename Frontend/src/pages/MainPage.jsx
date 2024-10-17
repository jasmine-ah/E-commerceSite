import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import FAQ from "../components/Faq";
function MainPage(){
    return(
<>
    {/************************************  hero section ********************************************/}

    <section id="hero" className="flex flex-col md:flex-row h-auto md:h-[690px]">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-start py-10 md:py-20 px-6 md:px-20 md:w-1/2"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white text-5xl md:text-7xl font-bold text-left"
          >
            Shop the <span className="text-[#F4B400]">newest arrivals</span> at unbeatable prices.
          </motion.h1>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:hidden md:flex px-6 py-3 my-4 text-lg md:text-xl font-semibold text-white hover:text-[#3a5b64] bg-[#F4B400] border-[2px] border-white rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Shop Now
          </motion.button>
        </motion.div>
        <div className="relative w-full md:w-[50%]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-[#eacc79] mt-[75px] opacity-30 rounded-full w-[40%] h-[40%]"
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 my-[80px] mx-[90px] bg-[#F4B400] rounded-full z-10"
          >
            <img src="cart.png" alt="//" className="w-[100%] h-[100%] m-auto object-cover" />
          </motion.div>
        </div>
      </section>

 {/************************************  Wavy Divider ********************************************/}
<div className="w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-[150px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2880 320">
        <path fill="#e5e7eb" fillOpacity="1" d="M0,96L96,112C192,128,384,160,576,165.3C768,171,960,149,1152,144C1344,139,1536,149,1728,160C1920,171,2112,181,2304,176C2496,171,2688,149,2784,138.7L2880,128L2880,320L2784,320C2688,320,2496,320,2304,320C2112,320,1920,320,1728,320C1536,320,1344,320,1152,320C960,320,768,320,576,320C384,320,192,320,96,320L0,320Z"></path>
    </svg>
</div>


    {/************************************  Services section ********************************************/}

    <section id="services" className=" flex items-center justify-center h-[150px] bg-[#e5e7eb]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-12">
    <div className="service-card flex flex-col p-6 bg-[#f1f1f1] shadow-lg rounded-lg transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl items-center"> <i className="fas fa-award text-[#F4B400] text-center"></i>
    <h2>High Quality</h2>
        </div>
        <div className="service-card flex flex-col p-6 bg-[#f1f1f1] shadow-lg rounded-lg transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl items-center"> <i className="fas fa-shipping-fast text-[#F4B400] text-center"></i>
    <h2>Delivery</h2>
        </div>
    <div className="service-card flex flex-col p-6 bg-[#f1f1f1] shadow-lg rounded-lg transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl items-center"> <i className="fas fa-smile text-[#F4B400] text-center"></i>
    <h2>Easy For Shopping</h2>
        </div>
    <div className="service-card flex flex-col p-6 bg-[#f1f1f1] shadow-lg rounded-lg transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl items-center"> <i className="fas fa-clock text-[#F4B400] text-center"></i>
    <h2>24/7 Support</h2>
        </div>
        </div>
    </section>

   {/************************************  Our Favorites section ********************************************/}
    
    <section id="favorite" className="h-[300px]">
    
    </section>
{/************************************  feedback section ********************************************/}
<section id='feedback' className='h-[80vh] bg-gradient-to-br from-white to-gray-100 flex flex-col items-center justify-center px-8 py-10'>
  <div className='max-w-5xl w-full text-center'>
    <h2 className='text-4xl font-extrabold mb-8 text-[#f4b400]'>Get in Touch</h2>
    <p className='text-muted max-w-3xl mx-auto mb-10 text-[#8e8670]'>
      Whether you want to share feedback, or just want to say hello, we're here to listen.
    </p>
    <form className='space-y-8'>
      <div className='flex flex-col md:flex-row gap-8 mb-12'>
        <input type='text' placeholder='Your Name' className='w-full px-4 py-3 text-muted border border-muted rounded-lg focus:outline-none focus:border-[#f4b400]' />
        <input type='email' placeholder='Your Email' className='w-full px-4 py-3 text-muted border border-muted rounded-lg focus:outline-none focus:border-[#f4b400]' />
      </div>
      <textarea placeholder='Your Message' rows='6' className='w-full px-4 py-3 text-muted border border-muted rounded-lg focus:outline-none focus:border-[#f4b400]'></textarea>
      <button type='submit' className='px-8 py-3 bg-[#f4b400] text-black font-semibold rounded-full hover:bg-[#eacc79] transition duration-300'>
        Send Message
      </button>
    </form>
  </div>
</section>

{/************************************  FAQ section ********************************************/}

<section id="faq">
<FAQ/>
</section>
 {/************************************  Footer section ********************************************/}

 <footer id="footer" className="bg-gray-900 text-white pt-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <div className="col-span-1">
        <h3 className="text-xl font-semibold text-[#f4b400] mb-4">E-commerce Site</h3>
        <p className="text-sm mb-4">
          Explore the latest fashion trends and find inspiration for your next style statement.
        </p>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">About Us</a></li>
          {/* <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Careers</a></li> */}
          <li><Link to="/terms" className="hover:text-gray-300 transition-colors duration-200">Terms & Conditions</Link></li>
        </ul>
      </div>
      <div className="col-span-1">
        <h3 className="text-xl font-semibold text-[#f4b400] mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Shop</a></li>
          <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Services</a></li>
          <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Contact</a></li>
          <li><a href="#faq" className="hover:text-gray-300 transition-colors duration-200">FAQs</a></li>
        </ul>
      </div>
      <div className="col-span-1">
        <h3 className="text-xl font-semibold text-[#f4b400] mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-[#f4b400] hover:text-gray-300 transition-colors duration-200 p-2 rounded-full">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-[#f4b400] hover:text-gray-300 transition-colors duration-200 p-2 rounded-full">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-[#f4b400] hover:text-gray-300 transition-colors duration-200 p-2 rounded-full">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-[#f4b400] hover:text-gray-300 transition-colors duration-200 p-2 rounded-full">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="col-span-1">
        <h3 className="text-xl font-semibold text-[#f4b400] mb-4">Contact</h3>
        <ul className="space-y-2">
          <li><span className="hover:text-gray-300 transition-colors duration-200">Email:</span> info@ecommercesite.com</li>
          <li><span className="hover:text-gray-300 transition-colors duration-200">Phone:</span> +123 456 7890</li>
          <li><span className="hover:text-gray-300 transition-colors duration-200">Address:</span> 123 Fashion Street, AA, Ethiopia</li>
        </ul>
      </div>
    </div>
    <div className="bg-gray-800 py-4 mt-auto">
      <p className="text-center text-sm">&copy; 2024 E-commerce Site. All rights reserved.</p>
    </div>
  </div>
</footer>

    </>
    )
}

export default MainPage;