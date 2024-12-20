import React ,{useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import FAQ from "../components/FAQ";
import Terms from "./Terms";
import product from "../assets/products.json";
function MainPage(){
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const openTerms = () => setIsTermsOpen(true);
  const closeTerms = () => setIsTermsOpen(false);
  const [products]=useState(product);
    return(
<>
    {/************************************  hero section ********************************************/}
    <section id="hero" className="flex flex-col md:flex-row h-screen md:h-screen bg-gradient-to-r from-[#fce4ec] to-[#fad3d3] relative">
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center px-5 md:px-10 z-10">
          <motion.h1 className="text-[#3d1f24] mt-[65px] text-4xl sm:text-5xl sm:mt-10 md:text-7xl font-extrabold" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Sparkle Your Day
          </motion.h1>
          <motion.p className="text-[20px] sm:text-lg md:text-2xl mt-6 md:mt-5 text-[#9d5361] tracking-wide text-center md:text-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
            Shop the newest arrivals at unbeatable prices.
          </motion.p>
          <Link to="/productlist">
            <motion.button className="mt-6 md:mt-8 px:10 sm:px-8 py-3 sm:py-4 bg-[#c7899e] text-white font-semibold text-base sm:text-lg rounded-full shadow-lg hover:bg-[#b37487] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}> Shop Now</motion.button>
          </Link>
          {/* <div className="mt-12 w-full border-t-[1px] border-t-[#4a292e] opacity-50"></div> */}
        </div>

        <div className="flex w-full md:w-1/2 items-center justify-center relative">
          <motion.img src="p.png" alt="/" className="w-full h-auto md:h-[90%] object-cover shadow-lg transform hover:scale-105 transition duration-300" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}/>
        </div>
        <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-gradient-to-br from-[white] to-[white] rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-[150px] h-[150px] bg-gradient-to-br from-[white] to-[white] rounded-full opacity-50 blur-2xl"></div>
      </section>


    {/* <section id="hero" className="flex flex-col md:flex-row h-auto md:h-[690px]">
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
          <Link to="/product">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:hidden md:flex px-6 py-3 my-4 text-lg md:text-xl font-semibold text-white hover:text-[#3a5b64] bg-[#F4B400] border-[2px] border-white rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            
          >
            
            Shop Now
          </motion.button>
          </Link>
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
      </section> */}

 {/* ***********************************  Wavy Divider *******************************************
<div className="w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-[150px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2880 320">
        <path fill="#e5e7eb" fillOpacity="1" d="M0,96L96,112C192,128,384,160,576,165.3C768,171,960,149,1152,144C1344,139,1536,149,1728,160C1920,171,2112,181,2304,176C2496,171,2688,149,2784,138.7L2880,128L2880,320L2784,320C2688,320,2496,320,2304,320C2112,320,1920,320,1728,320C1536,320,1344,320,1152,320C960,320,768,320,576,320C384,320,192,320,96,320L0,320Z"></path>
    </svg>
</div> */}


  {/************************************  Services section ********************************************/}

    <section id="services" className=" flex items-center bg-slate-50 justify-center py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 sm:px-12">
    <i className="fas fa-award text-sm md:text-xl text-[#c7899e] text-center"><h2 className="text-center mt-2 text-[#3d1f24] font-extralight">High Quality</h2></i>
    <i className="fas fa-shipping-fast text-sm md:text-xl text-[#c7899e] text-center"><h2 className="text-center mt-2 text-[#3d1f24] font-extralight">Delivery</h2></i>
    <i className="fas fa-smile text-sm md:text-xl text-[#c7899e] text-center"><h2 className="text-center mt-2 text-[#3d1f24] font-extralight">Easy For Shopping</h2></i>
    <i className="fas fa-clock text-sm md:text-xl text-[#c7899e] text-center"><h2 className="text-center mt-2 text-[#3d1f24] font-extralight">24/7 Support</h2></i>
        </div>
    </section>

  {/************************************  Our Featured section ********************************************/}
    
   
   <section id="featured" className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-12 text-[#c7899e]">
      Featured Products
    </h2>
    <div className="overflow-x-auto scroll-smooth scrollbar-hide">
      <div className="flex space-x-8 snap-x snap-mandatory">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 w-72 shrink-0 snap-center">
            <img src={product.image} alt={product.name} className="w-full h-48 object-center rounded-t-lg"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-[#6b7b8c]">{product.name}</h3>
              <p className="text-lg font-bold text-[#c7899e]">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    
{/************************************  feedback section ********************************************/}
<section id='feedback' className='h-auto bg-gradient-to-br from-white to-gray-100 flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-10'>
  {/* <div className='absolute max-w-5xl w-full text-center'> */}
    <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-[#3d1f24] text-center'>Get in Touch</h2>
    <p className='text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-10 text-[#c7899e] text-center'>
      Whether you want to share feedback, or just want to say hello, we're here to listen.
    </p>
    <form className=' space-y-4 sm:space-y-8 w-full max-w-3xl'>
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
        <input type='text' placeholder='Your Name' className='w-full px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:border-[#c7899e]' />
        <input type='email' placeholder='Your Email' className='w-full px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:border-[#c7899e]' />
      </div>
      <textarea placeholder='Your Message' rows='4' className='w-full px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:border-[#c7899e]'></textarea>
      <button type='submit' className='px-6 py-2 sm:py-3 bg-[#c7899e] sm:ml-[18rem] text-white rounded-full hover:bg-[#fbdee3] transition duration-300'>
        Send Message
      </button>
    </form>
  {/* </div> */}
</section>

{/************************************  FAQ section ********************************************/}

<section id="faq">
<FAQ/>
</section>
 {/************************************  Footer section ********************************************/}

 <footer id="footer" className="bg-[#1f2937] text-white py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="col-span-1">
        <h3 className="text-xl font-semibold text-[#c7899e] mb-4">E-commerce Site</h3>
        <p className="text-sm mb-4">
          Explore the latest trends and find inspiration for your next statement scent.
        </p>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">About Us</a></li>
          {/* <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Careers</a></li> */}
          <li><button onClick={openTerms} className="hover:text-gray-300 transition-colors duration-200">Terms & Conditions</button>
          {isTermsOpen && (
                <Terms onClose={closeTerms} />
            )}
      </li>
        </ul>
      </div>
      <div className="col-span-1">
        <h3 className="text-xl font-semibold text-[#c7899e] mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="/productlist" className="hover:text-gray-300 transition-colors duration-200">Shop</a></li>
          <li><a href="#services" className="hover:text-gray-300 transition-colors duration-200">Services</a></li>
          <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Contact</a></li>
          <li><a href="#faq" className="hover:text-gray-300 transition-colors duration-200">FAQs</a></li>
        </ul>
      </div>
      <div className="col-span-1">
        <h3 className="text-xl font-semibold text-[#c7899e] mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-[#fbdce0] hover:text-gray-300 transition-colors duration-200 p-2 rounded-full">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-[#fbdce0] hover:text-gray-300 transition-colors duration-200 p-2 rounded-full">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-[#fbdce0] hover:text-gray-300 transition-colors duration-200 p-2 rounded-full">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-[#fbdce0] hover:text-gray-300 transition-colors duration-200 p-2 rounded-full">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="col-span-1">
        <h3 className="text-xl font-semibold text-[#c7899e] mb-4">Contact</h3>
        <ul className="space-y-2">
          <li><span className="hover:text-gray-300 transition-colors duration-200">Email:</span> info@ecommercesite.com</li>
          <li><span className="hover:text-gray-300 transition-colors duration-200">Phone:</span> +123 456 7890</li>
          <li><span className="hover:text-gray-300 transition-colors duration-200">Address:</span> 123 Street, AA, Ethiopia</li>
        </ul>
      </div>
    </div>
    
      <p className="text-center text-sm mt-8">&copy; 2024 E-commerce Site. All rights reserved.</p>
   
  </div>
</footer>

    </>
    )
}

export default MainPage;