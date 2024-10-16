import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function MainPage(){
    return(
<>
    {/************************************  hero section ********************************************/}

        <section id="hero" className='flex flex-col md:flex-row h-auto md:h-[750px]'>
        <div className="flex flex-col justify-center items-start py-10 md:py-20 px-6 md:px-20 md:w-1/2">
            <h1 className="text-white text-5xl md:text-7xl font-bold text-left">Shop the 
                <span className="text-[#9b9b9b]"> newest arrivals</span> at unbeatable prices.</h1>
                <button className="hidden sm:hidden md:flex px-6 py-3 my-4 text-lg md:text-xl font-semibold text-[#3a5b64] hover:text-white bg-gradient-to-br from-[#9b9b9b] to-[#ede8f5] rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">Shop Now</button>
            </div>
            <div className="flex justify-center items-center md:w-1/2">
            <img src="cart.png" alt="//" className="w-full" />
            </div>
        </section>

    {/************************************  Services section ********************************************/}

    <section id="services" className=" flex items-center justify-center h-[200px] bg-[#e5e7eb]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-12">
    <div className="service-card flex flex-col p-6 bg-[#f1f1f1] shadow-lg rounded-lg transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl items-center"> <i className="fas fa-award text-[#545b63] text-center"></i>
    <h2>High Quality</h2>
        </div>
        <div className="service-card flex flex-col p-6 bg-[#f1f1f1] shadow-lg rounded-lg transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl items-center"> <i className="fas fa-shipping-fast text-[#545b63] text-center"></i>
    <h2>Free Delivery</h2>
        </div>
    <div className="service-card flex flex-col p-6 bg-[#f1f1f1] shadow-lg rounded-lg transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl items-center"> <i className="fas fa-smile text-[#545b63] text-center"></i>
    <h2>Easy For Shopping</h2>
        </div>
    <div className="service-card flex flex-col p-6 bg-[#f1f1f1] shadow-lg rounded-lg transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl items-center"> <i className="fas fa-clock text-[#545b63] text-center"></i>
    <h2>24/7 Support</h2>
        </div>
        </div>
    </section>

   {/************************************  featured section ********************************************/}
    
    <section id="featured" className="h-[300px]">
    
    </section>

 {/************************************  Footer section ********************************************/}

<section id="footer" >

</section>

    </>
    )
}

export default MainPage;