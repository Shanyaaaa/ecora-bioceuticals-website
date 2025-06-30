import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ no BrowserRouter here
import Home from './pages/home';
import Product from './pages/product';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import EcoraVideo from './components/EcoraVideo';
import Founder from './pages/Founder';
import ProductById from './pages/ProductById';
import ShippingPolicies from './pages/footer/ShippingPolicies';
import PrivacyPolicy from './pages/footer/PrivacyPolicy';
import TermsOfUse from './pages/footer/TermsOfUse';
import RefundAndReturn from './pages/footer/RefundAndReturn';
import ShopContextProvider from './context/ShopContext';
import ScrollToTop from './components/ScrollToTop'; 

const App = () => {
  return (
    <ShopContextProvider>
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
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/ShippingPolicies' element={<ShippingPolicies />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/TermsOfUse' element={<TermsOfUse />} />
        <Route path='/RefundAndReturn' element={<RefundAndReturn />} />
        <Route path='/Founder' element={<Founder />} />
        <Route path='/EcoraVideo' element={<EcoraVideo />} />
      </Routes>
    </ShopContextProvider>
  );
};

export default App;
