import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf6fd] to-[#f5e8fc] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full sm:max-w-md flex flex-col items-center gap-6">

        {/* Clickable Ecora Logo */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src={assets.ecora}
            alt="Ecora Logo"
            className="w-36 mb-1 cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>

        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">{currentState}</h2>
          <p className="text-sm text-gray-500">
            {currentState === 'Sign Up'
              ? 'Create your Ecora account'
              : 'Welcome back to Ecora'}
          </p>
        </div>

        {/* Auth Form */}
        <form onSubmit={onSubmmitHandler} className="w-full space-y-4">
          {currentState === 'Sign Up' && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            required
          />

          {/* Footer Options */}
          <div className="flex justify-between text-xs text-gray-600">
            <span className="hover:underline cursor-pointer">Forgot Password?</span>
            <span
              onClick={() =>
                setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')
              }
              className="hover:underline cursor-pointer text-purple-600"
            >
              {currentState === 'Login' ? 'Create Account' : 'Login Instead'}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-2 rounded-md shadow-md"
          >
            {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
