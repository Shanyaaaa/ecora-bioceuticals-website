import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const { getCartCount } = useContext(ShopContext);
  const cartCount = getCartCount();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='relative z-50 font-roboto'>
      <div className=' bg-white text-gray-900 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>
        <div className='max-w-screen-xl mx-auto w-full flex items-center justify-between py-5 px-4'>

          {/* Logo */}
          <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='flex items-center ml-4'>
            <img
              src={assets.ecora}
              alt='Ecora Logo'
              className='w-40 ml-6 cursor-pointer transition-transform duration-300 hover:scale-105'
            />
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

            {/* Cart Icon */}
            <Link to='/cart' className='relative'>
              <img
                src={assets.cartIcon}
                alt='cart'
                className='w-5 cursor-pointer hover:opacity-70'
              />
              {cartCount > 0 && (
                <span className='absolute right-[-5px] bottom-[-5px] w-4 h-4 text-[8px] text-white bg-black rounded-full flex items-center justify-center'>
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Profile Icon Dropdown */}
            <div className='relative group'>
              <Link to="/login">
                <img
                  src={assets.profileIcon}
                  alt='profile'
                  className='w-5 cursor-pointer hover:opacity-70'
                />
                <div className='hidden group-hover:block absolute bg-white shadow-lg right-0 mt-2 p-3 rounded text-sm z-10'>
                  <p className='hover:text-gray-700 cursor-pointer'>My Profile</p>
                  <p className='hover:text-gray-700 cursor-pointer'>Orders</p>
                  <p className='hover:text-gray-700 cursor-pointer'>Logout</p>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button className='text-gray-900 block sm:hidden' onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className='sm:hidden bg-gray-200 shadow-md px-4 py-4'>
            <ul className='flex flex-col gap-4 text-base font-medium text-gray-900'>
              {['Home', 'Products', 'About Us', 'Contact Us'].map((text, i) => (
                <NavLink
                  key={i}
                  to={text === 'Home' ? '/' : `/${text.toLowerCase().replace(/\s/g, '')}`}
                  onClick={() => setMenuOpen(false)}
                  className='hover:text-gray-700 transition-colors duration-200 border-b border-transparent hover:border-gray-700 pb-1'
                >
                  {text}
                </NavLink>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
