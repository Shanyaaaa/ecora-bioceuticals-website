import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Product from './pages/Product';
import About from './pages/About'; // Note: Capitalized to match likely file name
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Symptoms from './pages/Symptoms'; // Capitalized for consistency

// Footer components - verify these paths exist
import ShippingPolicy from './pages/footer/ShippingPolicies'; 
import PrivacyPolicy from './pages/footer/PrivacyPolicy';
import TermsOfUse from './pages/footer/Terms'; 
import ReturnPolicy from './pages/footer/RefundAndReturn'; 
import Contactfooter from './pages/footer/Contactfooter'; 

const App = () => {
  return (
    <div>
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
        <Route path='/ShippingPolicy' element={<ShippingPolicy />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/TermsOfUse' element={<TermsOfUse />} />
        <Route path='/ReturnPolicy ' element={<ReturnPolicy />} />
        <Route path='/ContactFooter' element={<Contactfooter />} />
      </Routes>
    </div>
  );
};

export default App;