// ShopContext.jsx
import React, { createContext, useEffect, useState } from 'react';
import { products } from '../assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = '₹';
  const deliveryCharges = 50;

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

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ShopContext.Provider
      value={{
        products,
        currency,
        deliveryCharges,
        cartItems,
        setCartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
        getCartCount,
        getCartSubtotal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
