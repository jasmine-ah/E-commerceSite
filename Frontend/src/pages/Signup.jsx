import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link} from 'react-router-dom'
function Signup(){
    return(
        <>
        <div className="wrapper flex flex-row row-span-2 h-[760px] bg-[#f4f7fb]">

            <div className="flex flex-col text-white w-[45%] h-full p-6 bg-[#F4B400] justify-center items-center">
                <h1 className="justify-center text-5xl font-bold ">Welcome Friend</h1>
                <p className="mt-4">To keep connected with us please login with your personal info.</p>
                <button className='mt-6 px-12 py-3 border-[2px] border-white bg-[#f4b400] text-white font-semibold rounded-full hover:bg-[#eacc79] transition duration-300'><Link to="/login">SIGN IN</Link></button>
            </div>


    <div className="flex flex-col w-[55%] h-[750px]">
        <h1 className="mt-[180px] ml-[280px] font-bold text-4xl text-[#F4B400]">Create Account</h1>
        <form action="submit">
    <div className="flex flex-col md:flex-col ml-[180px]">

    <div className="mt-10 relative">
    <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-muted"></i>
    <input type="text" placeholder="Name" className="w-[80%] pl-10 pr-4 py-3 bg-[#f8e9be] border border-muted rounded-lg focus:outline-none focus:border-[#f4b400]"/></div>

    <div className="mt-6 relative">
    <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-muted"></i>
    <input type="text" placeholder="Email" className="w-[80%] bg-[#f8e9be] pl-10 pr-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-[#f4b400]"/></div>
    <div className="mt-6 relative">
    <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-muted"></i>
    <input type="password" placeholder="Password" className="w-[80%] bg-[#f8e9be] pl-10 pr-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-[#f4b400]"/></div>
                    
                    </div>
                    
                    <button className='mt-8 ml-[310px] px-6 py-3 w-[200px] border-[2px] border-white bg-[#f4b400] text-white font-semibold rounded-full hover:bg-[#eacc79] transition duration-300'><Link to="/">SIGN UP</Link></button>
                    
                </form>
            </div>
        </div>
        </>
    )
}

export default Signup;