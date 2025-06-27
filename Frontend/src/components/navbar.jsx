import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const cartCount = 2;
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFullSearch, setShowFullSearch] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className='relative z-50'>
      {/* Fullscreen Search Overlay */}
      {showFullSearch && (
        <div className='fixed top-0 left-0 w-full h-[120px] bg-[#321a6d] z-50 flex flex-col items-center justify-center'>
          <div className='w-[90%] max-w-2xl relative flex items-center'>
            <input
              type='text'
              placeholder='Search'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className='w-full h-12 pl-4 pr-10 text-white bg-transparent border border-white rounded-md text-lg placeholder:text-white focus:outline-none'
            />
            <img
              src={assets.searchIcon}
              alt='search'
              className='absolute right-10 w-5 h-5 opacity-80'
            />
            <X
              size={24}
              className='absolute right-2 cursor-pointer text-white'
              onClick={() => setShowFullSearch(false)}
            />
          </div>
        </div>
      )}

      {/* Navbar Content */}
      <div className='bg-[#e3b6e8] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>
        <div className='max-w-screen-xl mx-auto w-full flex items-center justify-between py-5 px-4 font-playfair'>

          {/* Logo */}
          <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='flex items-center ml-4'>
            <img src={assets.ecora} alt='Ecora Logo' className='w-40 ml-6 cursor-pointer transition-transform duration-300 hover:scale-105'/>
          </Link>

          {/* Desktop Navigation */}
          <ul className='hidden sm:flex gap-8 text-base text-gray-700 font-medium flex-1 justify-center items-center'>
            <li><NavLink to='/' className='hover:text-gray-900 font-serif'>Home</NavLink></li>
            <li><NavLink to='/products' className='hover:text-gray-900 font-serif'>Products</NavLink></li>
            <li><NavLink to='/about' className='hover:text-gray-900 font-serif'>About Us</NavLink></li>
            <li><NavLink to='/contact' className='hover:text-gray-900 font-serif'>Contact Us</NavLink></li>
          </ul>

          {/* Right Icons */}
          <div className='flex items-center gap-4 mr-4'>
            <img
              src={assets.searchIcon}
              alt='search'
              className='w-5 cursor-pointer hover:opacity-70'
              onClick={() => setShowFullSearch(true)}
            />
            <Link to='/cart' className='relative'>
              <img src={assets.cartIcon} alt='cart' className='w-5 cursor-pointer hover:opacity-70' />
              {cartCount > 0 && (
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                  {cartCount}
                </p>
              )}
            </Link>
            <div className='relative group'>
              <img src={assets.profileIcon} alt='profile' className='w-5 cursor-pointer hover:opacity-70' />
              <div className='hidden group-hover:block absolute bg-white shadow-lg right-0 mt-2 p-3 rounded text-sm z-10'>
                <p className='hover:text-blue-500 cursor-pointer'>My Profile</p>
                <p className='hover:text-blue-500 cursor-pointer'>Orders</p>
                <p className='hover:text-blue-500 cursor-pointer'>Logout</p>
              </div>
            </div>
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
              <NavLink to='/products' onClick={() => setMenuOpen(false)} className='hover:text-gray-900'>Products</NavLink>
              <NavLink to='/about' onClick={() => setMenuOpen(false)} className='hover:text-gray-900'>About Us</NavLink>
              <NavLink to='/contact' onClick={() => setMenuOpen(false)} className='hover:text-gray-900'>Contact Us</NavLink>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
