// import React, { useState, useContext } from 'react';
// import { assets } from '../assets/assets';
// import { NavLink, Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import { ShopContext } from '../Context/ShopContext';

// const Navbar = () => {
//   const { getCartCount, setShowSearch, navigate, token, setToken, setCartItems } = useContext(ShopContext);
//   const cartCount = getCartCount();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const logout = () => {
//     setToken('');
//     localStorage.removeItem('token');
//     setCartItems({});
//     navigate('/login');
//   };

//   const navItems = [
//     { name: 'Home', to: '/' },
//     { name: 'Products', to: '/products' },
//     { name: 'Orders', to: '/orders' },
//     { name: 'About Us', to: '/about' },
//     { name: 'Contact Us', to: '/contact' },
//     { name: token ? 'Logout' : 'Login', to: token ? '/logout' : '/login' },
//   ];

//   const dropdownItems = [
//     { name: 'My Profile', onClick: () => navigate('/profile') },
//     { name: 'Orders', onClick: () => navigate('/orders') },
//     {
//       name: token ? 'Logout' : 'Login',
//       onClick: token ? logout : () => navigate('/login'),
//     },
//   ];

//   return (
//     <div className='relative z-50 font-roboto'>
//       <div className='bg-[#b6aaa1] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>

//         <div className='max-w-screen-xl mx-auto w-full flex items-center justify-between py-5 px-4'>

//           {/* Logo */}
//           <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='flex items-center ml-4'>
//             <img
//               src={assets.ecora}
//               alt='Ecora Logo'
//               className='w-36 md:w-44 ml-2 cursor-pointer transition-transform duration-300 hover:scale-105'
//             />
//           </Link>

//           {/* Desktop nav */}
//           <ul className='hidden sm:flex gap-6 lg:gap-10 text-base text-gray-800 font-medium flex-1 justify-center items-center'>
//             {navItems.map((item) =>
//               item.name === 'Logout' ? (
//                 <li key={item.name}>
//                   <span
//                     onClick={logout}
//                     className='cursor-pointer text-red-600 hover:text-red-700 transition-colors duration-200'
//                   >
//                     Logout
//                   </span>
//                 </li>
//               ) : (
//                 <li key={item.name}>
//                   <NavLink
//                     to={item.to}
//                     className={({ isActive }) =>
//                       `relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-gray-900 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left font-serif ${
//                         isActive ? 'text-gray-900 after:scale-x-100' : 'text-gray-700'
//                       }`
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 </li>
//               )
//             )}
//           </ul>

//           {/* Cart and Profile */}
//           <div className='flex items-center gap-6 md:gap-8 mr-4'>
//             {/* Cart */}
//             <Link to='/cart' className='relative'>
//               <img src={assets.cartIcon} alt='cart' className='w-6 cursor-pointer hover:opacity-80 transition-opacity' />
//               {cartCount > 0 && (
//                 <span className='absolute top-[-8px] right-[-8px] w-5 h-5 text-xs text-white bg-gray-900 rounded-full flex items-center justify-center font-semibold'>
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* Profile Dropdown */}
//             <div className='relative group'>
//               <img
//                 src={assets.profileIcon}
//                 alt='profile'
//                 className='w-6 cursor-pointer hover:opacity-80 transition-opacity'
//               />
//               <div className='absolute right-0 top-full mt-2 w-48 bg-white shadow-xl border border-gray-100 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform translate-y-1 group-hover:translate-y-0 z-10 overflow-hidden'>
//                 <div className='absolute -top-1 right-4 w-2 h-2 bg-white border-l border-t border-gray-100 transform rotate-45'></div>
//                 <div className='py-2'>
//                   {dropdownItems.map((item) => (
//                     <p
//                       key={item.name}
//                       className={`py-3 px-4 hover:bg-gray-50 cursor-pointer transition-all duration-200 text-gray-700 hover:text-gray-900 font-medium border-b border-gray-50 last:border-b-0 ${
//                         item.name === 'Logout' || item.name === 'Login' ? 'text-red-600 hover:text-red-700 hover:bg-red-50' : ''
//                       }`}
//                       onClick={() => {
//                         item.onClick();
//                         setMenuOpen(false);
//                       }}
//                     >
//                       {item.name}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Mobile menu toggle */}
//             <button className='text-gray-900 block sm:hidden transition-transform duration-300' onClick={() => setMenuOpen(!menuOpen)}>
//               {menuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`sm:hidden bg-white shadow-lg absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
//             menuOpen ? 'max-h-screen' : 'max-h-0'
//           }`}
//         >
//           <ul className='flex flex-col gap-2 p-4'>
//             {navItems.map((item, i) =>
//               item.name === 'Logout' ? (
//                 <li key={i} onClick={() => { logout(); setMenuOpen(false); }}>
//                   <span className='block py-3 px-4 text-red-600 font-medium hover:bg-red-50 rounded-md cursor-pointer transition-colors duration-200'>
//                     Logout
//                   </span>
//                 </li>
//               ) : (
//                 <NavLink
//                   key={i}
//                   to={item.to}
//                   onClick={() => setMenuOpen(false)}
//                   className='block py-3 px-4 text-gray-800 font-medium hover:bg-gray-100 rounded-md transition-colors duration-200'
//                 >
//                   {item.name}
//                 </NavLink>
//               )
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDropdownOpen(false);
    // Perform logout logic here (e.g., clear localStorage, update auth state, etc.)
  };

  const handleNavigation = (path) => {
    navigate(path);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Ecora
        </Link>

        <div className="relative" ref={dropdownRef}>
          <button
            className="text-gray-800 hover:text-gray-600 focus:outline-none"
            onClick={toggleDropdown}
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
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => handleNavigation('/login')}
                  className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-gray-100"
                >
                  Login
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
