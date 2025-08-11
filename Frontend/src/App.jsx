import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/cart';
import Login from './pages/login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import EcoraVideo from './components/EcoraVideo';
import Founder from './pages/Founder';
import ProductById from './pages/ProductById';
import ShippingPolicies from './pages/footer/ShippingPolicies';
import PrivacyPolicy from './pages/footer/PrivacyPolicy';
import TermsOfUse from './pages/footer/TermsOfUse';
import RefundAndReturn from './pages/footer/RefundAndReturn';
import ShopProvider from './Context/ShopContext'; 
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <ShopProvider>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductById />} />
        <Route path='/products' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/ShippingPolicies' element={<ShippingPolicies />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/TermsOfUse' element={<TermsOfUse />} />
        <Route path='/RefundAndReturn' element={<RefundAndReturn />} />
        <Route path='/Founder' element={<Founder />} />
        <Route path='/EcoraVideo' element={<EcoraVideo />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Routes>
    </ShopProvider>
  );
};

export default App;
