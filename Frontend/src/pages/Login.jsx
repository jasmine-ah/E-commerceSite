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
            Navigate('/productlist'); 
        } catch (error) {
            console.error('Error logging in:', error);
            if (error.response && error.response.data) {
                setErrors({ ...errors, api: error.response.data.message });
            }
        }
    };


    return (
        <div className="flex flex-col items-center min-h-screen bg-[#f4f7fb]">
            <div className="bg-white shadow-lg rounded-lg p-10 w-[90%] max-w-md mt-[10%]">
                <h1 className="text-3xl font-bold text-center text-[#3d1f24] mb-6">Log In</h1>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="relative mb-6">
                        <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a3a3a3]" />
                        <input
                            type="text"
                            placeholder="Email"
                            className="w-full pl-10 pr-4 py-3 bg-[#fce4ec] border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#f4b400] transition duration-200"
                            value={formData.email} required onChange={(e) => setFormData({ ...formData, email: e.target.value })}  
                        />
                        {errors.email && <p className='text-sm text-red-600'>{errors.email}</p>}
                    </div>
                    <div className="relative mb-6">
                        <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a3a3a3]" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full pl-10 pr-4 py-3 bg-[#fce4ec] border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#f4b400] transition duration-200"
                            value={formData.password} required onChange={(e) => setFormData({ ...formData, password: e.target.value })}  
                        />
                        {errors.password && <p className='text-sm text-red-600'>{errors.password}</p>}
                    </div>
                    
                    {errors.api && <p className='text-sm text-red-600'>{errors.api}</p>}
                    <button type="submit" className="bg-[#c7899e] text-white py-3 rounded-lg hover:bg-[#b6a1a8] transition duration-200">               
                        Log In
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
