import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function Login() {
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    
    });

    const [errors, setErrors] = useState({});
    
    const validateForm = () => {
        const errors = {};
        
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Invalid email address';
        }
        if (formData.password.length < 6) {
            errors.password = 'Password should be at least 6 characters long';
        }
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) {
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', { 
                email: formData.email,
                password: formData.password,
            });
            const { token, userId } = response.data;
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
            // console.log(response.data);            
            Navigate('/profile'); 
        } catch (error) {
            console.error('Error logging in:', error);
            if (error.response && error.response.data) {
                setErrors({ ...errors, api: error.response.data.message });
            }
        }
    };


    return (
<div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-[#fce3eb] to-[#f4f7fb]">
<div className="bg-white shadow-xl rounded-3xl p-12 w-[90%] max-w-lg mt-16">
    <h1 className="text-4xl font-semibold text-center text-[#3d1f24] mb-8">Log In Here</h1>
    
    <form onSubmit={handleSubmit} className="flex flex-col">
    <div className="relative mb-8">
        <input type="email" placeholder="Email Address" className="w-full pl-10 pr-4 py-4 bg-[#fce4ec] border-2 border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4b400] transition duration-300 ease-in-out shadow-md" value={formData.email} required onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
        <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a3a3a3]" />
        {errors.email && <p className="text-sm text-red-600 mt-2">{errors.email}</p>}
    </div>
    <div className="relative mb-8">
        <input type="password" placeholder="Password" className="w-full pl-10 pr-4 py-4 bg-[#fce4ec] border-2 border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4b400] transition duration-300 ease-in-out shadow-md" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required/>
        <i className="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a3a3a3]" />
        {errors.password && <p className="text-sm text-red-600 mt-2">{errors.password}</p>}
    </div>
    {errors.api && <p className="text-sm text-red-600 text-center mt-4">{errors.api}</p>}

    <button
        type="submit"
        className="bg-[#c7899e] text-white py-4 rounded-lg shadow-md hover:bg-[#b6a1a8] transition duration-300 transform hover:scale-105"
    >
        Log In
    </button>

    <p className="mt-6 text-center text-[#666] text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="text-[#c7899e] font-semibold hover:text-[#f4b400] transition duration-300">
        Sign Up
        </Link>
    </p>
    </form>
</div>
</div>

    );
}

export default Login;
