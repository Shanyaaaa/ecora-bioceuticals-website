import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = '₹';
  const deliveryCharges = 50;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState([]);
  const [bestsellerProducts, setBestsellerProducts] = useState([]);

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const addToCart = (productId, quantity = 1) => {
    setCartItems(prev => {
      const updated = {
        ...prev,
        [productId]: (prev[productId] || 0) + quantity,
      };
      localStorage.setItem('cartItems', JSON.stringify(updated));
      return updated;
    });
  };

  const updateCartItem = (productId, quantity) => {
    setCartItems(prev => {
      const updated = { ...prev, [productId]: quantity };
      localStorage.setItem('cartItems', JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => {
      const updated = { ...prev };
      delete updated[productId];
      localStorage.setItem('cartItems', JSON.stringify(updated));
      return updated;
    });
  };

  const getCartCount = () =>
    Object.values(cartItems).reduce((total, qty) => total + qty, 0);

  const getCartSubtotal = () => {
    return Object.entries(cartItems).reduce((total, [id, qty]) => {
      const product = products.find(p => p._id === id);
      return product ? total + product.price * qty : total;
    }, 0);
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      const allProducts = response.data;

      setProducts(allProducts);
      setBestsellerProducts(allProducts.filter(p => p.bestseller));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ShopContext.Provider
      value={{
        products,
        bestsellerProducts, // now available in context
        currency,
        deliveryCharges,
        cartItems,
        setCartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
        getCartCount,
        getCartSubtotal,
        backendUrl,
        toast,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
