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
import SlideImg from './components/slideImg';
import Card from './components/card';
import BestSellingSection from './components/BestSelling';
import ProductSection from './components/ProductSection';
import ReviewSection from './components/Reviews';
import Faq from './components/Faq';
import Footer from './components/footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <SlideImg />
      <Card />
      <BestSellingSection />
      <ProductSection />
      <ReviewSection />
      <Faq />
      <Footer />











      
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
