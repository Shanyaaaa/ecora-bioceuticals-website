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
import Footer from './components/footer';
import home from './pages/Home';
import Symptoms from './pages/symptoms';


const App = () => {
  return (
    <div>
      {/* <Home /> */}

      











      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/products/symptoms' element={<Symptoms />} />
      </Routes>
    </div>
  );
};

export default App;
