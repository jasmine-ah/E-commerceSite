import React,{useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link,useNavigate} from 'react-router-dom';

function Signup() {
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        
       
        const isValid = validateForm();
        if (!isValid) {
            return;
        }

    };

    return (
        <>
            <div className="wrapper flex flex-col sm:flex-row h-auto sm:h-[760px] bg-[#f4f7fb]">

                <div className="flex flex-col text-[#3d1f24] w-full sm:w-[45%] h-full p-6 bg-[#fce4ec] justify-center items-center text-center sm:text-left">
                    <h1 className="text-3xl sm:text-5xl font-bold">Welcome Friend</h1>
                    <p className="mt-4">To keep connected with us please login with your personal info.</p>
                    <button className="mt-6 px-8 sm:px-12 py-3 border-2 border-white bg-[#3d1f24] text-white font-semibold rounded-full hover:bg-[#c7899e] transition duration-300">
                        <Link to="/login">SIGN IN</Link>
                    </button>
                </div>

                <div className="flex flex-col w-full sm:w-[55%] px-6 py-12 sm:py-0 sm:px-0">
                    <h1 className="mt-8 sm:mt-[180px] text-center font-bold text-3xl sm:text-4xl text-[#c7899e]">Create Account</h1>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col items-center sm:items-start mt-8 sm:ml-[180px]">
                
                        <div className="relative mt-6 w-full sm:w-[80%]">
                            <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-muted"></i>
                            <input type="text" placeholder="Name" value={formData.name} required onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full pl-10 pr-4 py-3 bg-[#fce4ec] border border-muted rounded-lg focus:outline-none focus:border-[#f4b400] ${errors.name ? 'border-red-500' : ''}`} />
                            {errors.name && <p className='text-sm text-red-600'>{errors.name}</p>}
                        </div>
                        <div className="relative mt-6 w-full sm:w-[80%]">
                            <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-muted"></i>
                            <input type="email" name="email" placeholder="Email" value={formData.email} required onChange={(e) => setFormData({ ...formData, email: e.target.value })}  className={`w-full pl-10 pr-4 py-3 bg-[#fce4ec] border border-muted rounded-lg focus:outline-none focus:border-[#56373c] ${errors.email ? 'border-red-500' : ''}`} />
                            {errors.email && <p className='text-sm text-red-600'>{errors.email}</p>}
                        </div>
                    
                        <div className="relative mt-6 w-full sm:w-[80%]">
                            <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-muted"></i>
                            <input type="password" placeholder="Password" value={formData.password} required onChange={(e) => setFormData({ ...formData, password: e.target.value })}  className="w-full pl-10 pr-4 py-3 bg-[#fce4ec] border border-muted rounded-lg focus:outline-none focus:border-[#3d1f24]" />
                            {errors.password && <p className='text-sm text-red-600'>{errors.password}</p>}
                        </div>

                        <button type='submit' className="mt-8 w-full sm:w-[200px] px-6 py-3 border-2 border-white bg-[#c7899e] text-white font-semibold rounded-full hover:bg-[#eacc79] transition duration-300 text-center">
                            SIGN UP
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
