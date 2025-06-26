import React, { createContext } from 'react';
import { products } from '../assets/assets'; 



export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '₹';
  const deliveryCharges = 50;

  // No need to reassign using assets
  const value = {
    products,
    currency,
    deliveryCharges,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
