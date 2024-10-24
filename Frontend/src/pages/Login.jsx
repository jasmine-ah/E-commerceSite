import React from "react";
import { Link } from "react-router-dom";
function Login() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-[#f4f7fb]">
            <div className="bg-white shadow-lg rounded-lg p-10 w-[90%] max-w-md mt-[10%]">
                <h1 className="text-3xl font-bold text-center text-[#3d1f24] mb-6">Log In</h1>
                <form className="flex flex-col">
                    <div className="relative mb-6">
                        <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a3a3a3]" />
                        <input
                            type="text"
                            placeholder="Email"
                            className="w-full pl-10 pr-4 py-3 bg-[#fce4ec] border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#f4b400] transition duration-200"
                        />
                    </div>
                    <div className="relative mb-6">
                        <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a3a3a3]" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full pl-10 pr-4 py-3 bg-[#fce4ec] border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#f4b400] transition duration-200"
                        />
                    </div>
                    
                    <button className="bg-[#c7899e] text-white py-3 rounded-lg hover:bg-[#b6a1a8] transition duration-200">
                    <Link to="/profile">
                        Log In
                        </Link>
                    </button>
                    <p className="mt-4 text-center text-[#666]">
                        Don't have an account? <Link to="/signup" className="text-[#c7899e] font-semibold">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
