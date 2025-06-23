import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const cartCount = 2; // Static cart count
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  

  return (
    <div className='bg-[#c1aba6] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] z-50'>
      <div className='max-w-screen-xl w-full mx-auto flex items-center justify-between py-5 px-4 font-playfair'>

        {/* Logo */}
        <div className='flex items-center ml-4'>
          <img src={assets.ecora} alt="Ecora Logo" className='w-40 ml-6' />
        </div>

        {/* Desktop Nav */}
        <ul className='hidden sm:flex gap-8 text-base text-gray-700 font-medium flex-1 justify-center'>
          <NavLink to='/' className='hover:text-gray-900 font-serif'>Home</NavLink>
          <NavLink to='/products' className='hover:text-gray-900 font-serif'>Products</NavLink>
          <NavLink to='/about' className='hover:text-gray-900 font-serif'>About Us</NavLink>
          <NavLink to='/contact' className='hover:text-gray-900 font-serif'>Contact Us</NavLink>
        </ul>

        {/* Icons + Hamburger */}
        <div className='flex items-center gap-4 mr-4'>

          {/* Search */}
          <img src={assets.searchIcon} alt='search' className='w-5 cursor-pointer hover:opacity-70' />

          {/* Cart */}
          <Link to='/cart' className='relative'>
            <img src={assets.cartIcon} alt='cart' className='w-5 cursor-pointer hover:opacity-70' />
            {cartCount > 0 && (
              <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                {cartCount}
              </p>
            )}
          </Link>

          {/* Profile Dropdown */}
          <div className='relative group'>
            <img src={assets.profileIcon} alt='profile' className='w-5 cursor-pointer hover:opacity-70' />
            <div className='hidden group-hover:block absolute bg-white shadow-lg right-0 mt-2 p-3 rounded text-sm z-10'>
              <p className='hover:text-blue-500 cursor-pointer'>My Profile</p>
              <p className='hover:text-blue-500 cursor-pointer'>Orders</p>
              <p className='hover:text-blue-500 cursor-pointer'>Logout</p>
            </div>
          </div>

          {/* Hamburger Icon */}
          <button className='text-black block' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className='sm:hidden bg-[#f5ebe0] shadow-md px-4 py-4'>
          <ul className='flex flex-col gap-4 text-base font-serif text-gray-800'>
            <NavLink to='/' onClick={() => setMenuOpen(false)} className='hover:text-gray-900'>Home</NavLink>
            <NavLink to='/products' onClick={() => setMenuOpen(false)} className='hover:text-gray-900'>Products</NavLink>
            <NavLink to='/about' onClick={() => setMenuOpen(false)} className='hover:text-gray-900'>About Us</NavLink>
            <NavLink to='/contact' onClick={() => setMenuOpen(false)} className='hover:text-gray-900'>Contact Us</NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
