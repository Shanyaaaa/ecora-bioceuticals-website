// src/components/Navbar.jsx
import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { assets } from '../assets/assets';
import { FiUser } from 'react-icons/fi';
// Import the ShopContext
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  // Access the getCartCount function from the ShopContext
  const { getCartCount } = useContext(ShopContext);

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setDropdownOpen(false);
    navigate('/login');
  };

  const handleNavigation = (path) => {
    navigate(path);
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Products', to: '/products' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact Us', to: '/contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-[#b6aaa1] shadow-md sticky top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={assets.ecora}
            alt="Ecora Logo"
            className="w-36 md:w-44 ml-2 cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-6 lg:gap-10 text-base text-gray-800 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-gray-900 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left font-serif ${isActive ? 'text-gray-900 after:scale-x-100' : 'text-gray-700'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Cart + Profile */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Cart */}
          <Link to="/cart" className="relative">
            <img
              src={assets.cartIcon}
              alt="cart"
              className="w-6 cursor-pointer hover:opacity-80 transition-opacity"
            />
            {getCartCount() > 0 && (
              <span className="absolute top-[-8px] right-[-8px] w-5 h-5 text-xs text-white bg-gray-900 rounded-full flex items-center justify-center font-semibold">
                {getCartCount()}
              </span>
            )}
          </Link>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <FiUser size={24} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2 z-50">
                <button
                  onClick={() => handleNavigation('/profile')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  My Profile
                </button>
                <button
                  onClick={() => handleNavigation('/orders')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Orders
                </button>
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavigation('/login')}
                    className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50"
                  >
                    Login
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="sm:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`sm:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
          }`}
      >
        <ul className="flex flex-col gap-2 p-4">
          {navItems.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 text-gray-800 font-medium hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            {isLoggedIn ? (
              <span
                onClick={handleLogout}
                className="block py-3 px-4 text-red-600 font-medium hover:bg-red-50 rounded-md cursor-pointer transition-colors duration-200"
              >
                Logout
              </span>
            ) : (
              <span
                onClick={() => handleNavigation('/login')}
                className="block py-3 px-4 text-blue-600 font-medium hover:bg-blue-50 rounded-md cursor-pointer transition-colors duration-200"
              >
                Login
              </span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;