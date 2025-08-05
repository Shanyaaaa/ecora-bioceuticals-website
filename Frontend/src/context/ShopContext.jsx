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
  const [token, setToken] = useState('');

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : {};
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

  const getCartSubtotal = () =>
    Object.entries(cartItems).reduce((total, [id, qty]) => {
      const product = products.find(p => p._id === id);
      return product ? total + product.price * qty : total;
    }, 0);

  const getProductsData = async () => {
    try {
      if (!backendUrl) {
        console.error('VITE_BACKEND_URL is not defined in env variables.');
        return;
      }

      const token = localStorage.getItem('adminToken'); // Add your token key if required
      const response = await axios.get(`${backendUrl}/api/product/list`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      });

      const allProducts = response.data.products;

      if (!Array.isArray(allProducts)) {
        console.error('Expected products array, got:', allProducts);
        return;
      }

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
    if( !token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);



  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ShopContext.Provider
      value={{
        products,
        bestsellerProducts,
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
        setToken,
        token,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
