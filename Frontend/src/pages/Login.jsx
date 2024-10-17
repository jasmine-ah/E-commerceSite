import React from "react";

function Login() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-[#f4f7fb]">
            <div className="bg-white shadow-lg rounded-lg p-10 w-[90%] max-w-md mt-[10%]">
                <h1 className="text-3xl font-bold text-center text-[#333] mb-6">Log In</h1>
                <form className="flex flex-col">
                    <div className="relative mb-6">
                        <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a3a3a3]" />
                        <input
                            type="text"
                            placeholder="Email"
                            className="w-full pl-10 pr-4 py-3 bg-[#f8e9be] border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#f4b400] transition duration-200"
                        />
                    </div>
                    <div className="relative mb-6">
                        <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a3a3a3]" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full pl-10 pr-4 py-3 bg-[#f8e9be] border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#f4b400] transition duration-200"
                        />
                    </div>
                    <button className="bg-[#f4b400] text-white py-3 rounded-lg hover:bg-[#0056b3] transition duration-200">
                        Log In
                    </button>
                    <p className="mt-4 text-center text-[#666]">
                        Don't have an account? <a href="#" className="text-[#f4b400] font-semibold">Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
