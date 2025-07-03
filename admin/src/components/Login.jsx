import axios from 'axios';
import React, { useState } from 'react';
import { backendUrl } from '../App';
 

const Login = ({setToken}) => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {

    try {
          e.preventDefault(); 
          const response = await axios.post(backendUrl + '/api/user/admin', {email,password})
         if(response.data.success){
            setToken(response.data.token)

         }
         else{
            toast.error(response.data.message)

         }
      
    } catch (error) {
        console.error(error);
        toast.error(error.message)

      

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/95 backdrop-blur-lg border border-blue-100 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-black">
          Admin Panel
        </h1>

        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-black">
              Email Address
            </label>
            <input   onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="your@gmail.com"
              required
              className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-black">
              Password
            </label>
            <input onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transform hover:scale-105 transition-all duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
