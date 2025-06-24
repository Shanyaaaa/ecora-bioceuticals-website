import React from 'react'
import { createContext } from 'react';
import {products} from '../assets/assets';



 export const ShopContext = createContext();

 const ShopContextProvider = (props) => {
    const currency = '₹';
    const deliveryCharges = 50;

    const value = {
        products,currency,
        deliveryCharges,

    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );

  
};

export default ShopContextProvider
