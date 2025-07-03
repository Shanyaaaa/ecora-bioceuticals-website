import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between w-full py-7 px-[6%]">
      <img
        className="w-[max(10%,80px)] max-w-[150px] h-auto"
        src={assets.ecora}
        alt="Ecora"
      />
      <button
        onClick={() => setToken('')}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
