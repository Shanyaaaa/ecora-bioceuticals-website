import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const cartCount = 2;
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='bg-[#c1aba6] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] z-50'>
      <div className='max-w-screen-xl mx-auto w-full flex items-center justify-between py-5 px-4 font-playfair'>

        {/* Logo */}
        <div className='flex items-center ml-4'>
          <img src={assets.ecora} alt="Ecora Logo" className='w-40 ml-6' />
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden sm:flex gap-8 text-base text-gray-700 font-medium flex-1 justify-center items-center'>

          <li>
            <NavLink to='/' className='hover:text-gray-900 font-serif'>Home</NavLink>
          </li>

          {/* Products Dropdown (clickable) */}
          <li className='relative font-serif cursor-pointer'>
            <button
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              className='flex items-center gap-1 hover:text-gray-900 focus:outline-none'
            >
              Products
              <span
                className={`transition-transform duration-200 ${
                  productsDropdownOpen ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </button>

            {productsDropdownOpen && (
              <ul className='absolute top-full left-0 flex flex-col bg-white shadow-md mt-2 rounded text-sm z-10 min-w-[160px] text-gray-700'>
                <NavLink
                  to='/products/symptoms'
                  className='px-4 py-2 hover:bg-gray-100'
                  onClick={() => setProductsDropdownOpen(false)}
                >
                  Shop by Symptoms
                </NavLink>
                <NavLink
                  to='/products'
                  className='px-4 py-2 hover:bg-gray-100'
                  onClick={() => setProductsDropdownOpen(false)}
                >
                  All Products
                </NavLink>
              </ul>
            )}
          </li>

          <li>
            <NavLink to='/about' className='hover:text-gray-900 font-serif'>About Us</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='hover:text-gray-900 font-serif'>Contact Us</NavLink>
          </li>
        </ul>

        {/* Icons and Hamburger */}
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

          {/* Hamburger (Mobile Only) */}
          <button className='text-black block sm:hidden' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='sm:hidden bg-[#f5ebe0] shadow-md px-4 py-4'>
          <ul className='flex flex-col gap-4 text-base font-serif text-gray-800'>

            <NavLink to='/' onClick={() => setMenuOpen(false)} className='hover:text-gray-900'>Home</NavLink>

            {/* Mobile Products Dropdown */}
            <div>
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className='hover:text-gray-900 w-full flex justify-between items-center'
              >
                Products
                <span className={`transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {productsDropdownOpen && (
                <div className='ml-4 mt-2 flex flex-col gap-2 text-sm'>
                  <NavLink to='/products/symptoms' onClick={() => setMenuOpen(false)} className='hover:text-gray-900'>
                    Shop by Symptoms
                  </NavLink>
                  <NavLink to='/products/all' onClick={() => setMenuOpen(false)} className='hover:text-gray-900'>
                    All Products
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to='/about' onClick={() => setMenuOpen(false)} className='hover:text-gray-900'>About Us</NavLink>
            <NavLink to='/contact' onClick={() => setMenuOpen(false)} className='hover:text-gray-900'>Contact Us</NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
