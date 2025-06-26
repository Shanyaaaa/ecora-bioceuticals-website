import React, { createContext } from 'react';
import { productsAssets } from "../products-assets/products-assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '₹';
  const deliveryCharges = 50;

  const products = productsAssets;  

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
