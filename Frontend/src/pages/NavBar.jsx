import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';
import '@fortawesome/fontawesome-free/css/all.min.css';

function NavBar() {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className='sticky top-0 z-50'>
      <div className='flex bg-white items-center justify-between h-16 max-w-[1200px] mx-auto px-4 md:px-8 rounded-full shadow-md'>
      
        <h1 className='text-2xl font-semibold text-[#c7899e]'>E-Commerce</h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 items-center text-[#3d1f24] bg-white p-2'>
    <li className='group relative'>
        <Link to="/" className='transition duration-300 ease-in-out hover:text-[#c7899e]'>Home<span className='absolute bottom-0 left-0 w-full h-1 bg-[#c7899e] scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span></Link>
    </li>
    <li className='group relative'>
        <Link to="/productlist" className='transition duration-300 ease-in-out hover:text-[#c7899e]'>Shop<span className='absolute bottom-0 left-0 w-full h-1 bg-[#c7899e] scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span></Link>
    </li>
    <li className='group relative'>
        <Link to="/about" className='transition duration-300 ease-in-out hover:text-[#c7899e]'>About<span className='absolute bottom-0 left-0 w-full h-1 bg-[#c7899e] scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span></Link>
    </li>
    <li className='group relative'>
        <HashLink to="/#services" className='transition duration-300 ease-in-out hover:text-[#c7899e]'>Services<span className='absolute bottom-0 left-0 w-full h-1 bg-[#c7899e] scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span></HashLink>
    </li>
    <li className='group relative'>
        <HashLink to="/#footer" className='transition duration-300 ease-in-out hover:text-[#c7899e]'>Contact<span className='absolute bottom-0 left-0 w-full h-1 bg-[#c7899e] scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span></HashLink>
    </li>
    <li className='flex items-center space-x-4'>
        <Link to="/" className='flex items-center transition duration-300 ease-in-out hover:text-[#c7899e]'><i className='fas fa-cart-arrow-down text-xl'></i></Link>
        <span>|</span>
        <Link to="/signup" className='flex items-center transition duration-300 ease-in-out hover:text-[#c7899e]'><i className='fas fa-user-plus text-xl'></i></Link>
    </li>
</ul>


        {/* Mobile Menu  */}
        <div onClick={handleNav} className='md:hidden text-[#c7899e]'>
          {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
        </div>
      </div>

      <div className={`${nav ? 'translate-x-0' : '-translate-x-full'} fixed left-0 top-0 w-[70%] h-full bg-[#fce4ec] transition-transform duration-300 z-40`}>
        <h1 className='text-3xl font-bold text-[#c7899e] m-6'>E-Commerce</h1>
        <ul className='space-y-6 text-xl ml-6'>
          <li className='hover:text-[#c7899e]'>
            <Link to="/" onClick={handleNav}>Home</Link>
          </li>
          <li className='hover:text-[#c7899e]'>
            <Link to="/productlist" onClick={handleNav}>Shop</Link>
          </li>
          <li className='hover:text-[#c7899e]'>
            <HashLink to="/#services" onClick={handleNav}>Services</HashLink>
          </li>
          <li className='hover:text-[#c7899e]'>
            <HashLink to="/#footer" onClick={handleNav}>Contact</HashLink>
          </li>
          <li className='hover:text-[#c7899e]'>
            <Link to="/signup" onClick={handleNav}>
              <i className='fas fa-user-plus'></i> Signup
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
