import React,{useState,useEffect} from 'react'
import {Link,useLocation} from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';
import '@fortawesome/fontawesome-free/css/all.min.css';


function NavBar(){
const [nav, setNav] = useState(false);
const location = useLocation();

const handleNav = () => {
setNav(!nav);
};

    return(
<header className='md:sticky top-0 z-40'>
    <div className='flex items-center h-15 max-w-[100%] mx-auto px-8 text-black bg-[#f4f7fb]'>
    <h1 className='text-2xl font-semibold text-[#F4B400]'>E-Commerce. <span className='p-[30px]'></span></h1>
    
    <ul className='hidden sm:hidden md:flex'>
    <li className='p-4 hover:text-[#d8d8d8]'><Link to="/">Home</Link></li>
    <li className='p-4 hover:text-[#d8d8d8]'><Link to="/">Shop</Link></li>
    <li className='p-4 hover:text-[#d8d8d8]'><HashLink to="/#services">Services</HashLink></li>
    <li className='p-4 hover:text-[#d8d8d8]'><HashLink to="/#footer">Contact</HashLink></li>
    <li className='p-4'> <span className='p-[300px]'></span></li>
    
    <li className='p-4 text-[#F4B400] hover:text-[#d8d8d8]'><Link to="/">
    <i className='fas fa-cart-arrow-down'></i>           
    </Link></li> 
    <li className='p-4'> <span className=''></span>|</li>
    <li className='p-4 text-[#F4B400] hover:text-[#d8d8d8]'><Link to="/signup">       
    <i className='fas fa-user-plus'></i>                     
    </Link></li> 

    </ul>
    </div>

    <div onClick={handleNav} className=' fixed right-10 top-10 block sm:block md:hidden text-[#c79dd1]'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </div>
    <div className={!nav ? 'fixed left-0 top-0 w-[80%] sm:flex md:hidden h-full border-r border-r-[#f1f1f1] text-[#c79dd1] bg-[#f1f1f1] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-2xl m-6 font-semibold text-[#c79dd1]'>E-commerce.</h1>
        <ul className='uppercase'>
        <li className='p-4 border-b border-[#835c8d] hover:text-white '><Link to="/" onClick={handleNav}>Home</Link></li>
        {/* <li className='p-4 border-b border-[#00c7ab] hover:text-white hover:bg-[#00c7ab]'><Link to="/" onClick={handleNav}>Blog</Link></li> */}
        <li className='p-4 border-b border-[#c79dd1] hover:text-white hover:bg-[##c79dd1'><a href="#About" onClick={handleNav}>About</a></li>
        <li className='p-4 border-b border-[#c79dd1] hover:text-white hover:bg-[#c79dd1'><a href="#services" onClick={handleNav}>Services</a></li>
        <li className='p-4 border-b border-[#c79dd1] hover:text-white hover:bg-[##c79dd1'><a href="#footer" onClick={handleNav}>Contact</a></li>
        <li className='p-4 border-b border-[#c79dd1] hover:text-white hover:bg-[##c79dd1'><Link to="/signup" onClick={handleNav}><i className='fas fa-user-plus'></i>  Signup </Link></li>
        </ul>
    </div>
</header>)
}

export default NavBar;