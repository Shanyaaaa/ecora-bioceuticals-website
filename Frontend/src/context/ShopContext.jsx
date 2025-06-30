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

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (productId, quantity = 1) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + quantity,
    }));
  };

  const getCartCount = () =>
    Object.values(cartItems).reduce((total, qty) => total + qty, 0);

  return (
    <ShopContext.Provider
      value={{
        products,
        currency,
        deliveryCharges,
        cartItems,
        setCartItems,
        addToCart,
        getCartCount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
