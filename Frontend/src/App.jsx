import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/about';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Navbar from './components/navbar'; 

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar /> 

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/place-order' element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
