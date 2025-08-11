// src/Context/ShopContext.jsx
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
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [cartItems, setCartItems] = useState({});

  // Function to load cart data from the backend
  const loadCartData = async () => {
    try {
      if (token) {
        const response = await axios.get(`${backendUrl}/api/cart/get`, {
          headers: {
            token: token,
          },
        });
        if (response.data.success) {
          setCartItems(response.data.cartData);
        }
      }
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  // Function to update cart data on the backend
  const setCartOnBackend = async (itemId, size, quantity) => {
    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/set`,
          { itemId, size, quantity },
          {
            headers: {
              'Content-Type': 'application/json',
              token: token,
            },
          }
        );
      } catch (error) {
        console.error('Error updating cart on backend:', error);
        toast.error('Failed to update cart. Please try again.');
      }
    }
  };

  const addToCart = (productId, size, quantity = 1) => {
    const updated = { ...cartItems };
    if (!updated[productId]) {
        updated[productId] = {};
    }
    updated[productId][size] = (updated[productId][size] || 0) + quantity;
    setCartItems(updated);
    setCartOnBackend(productId, size, updated[productId][size]);
    toast.success('Product added to cart!');
  };

  const updateCartItem = (productId, size, quantity) => {
    const updated = { ...cartItems };
    if (!updated[productId]) {
        updated[productId] = {};
    }
    updated[productId][size] = quantity;
    setCartItems(updated);
    setCartOnBackend(productId, size, quantity);
  };

  const removeFromCart = (productId, size) => {
    const updated = { ...cartItems };
    if (updated[productId] && updated[productId][size]) {
        delete updated[productId][size];
        if (Object.keys(updated[productId]).length === 0) {
            delete updated[productId];
        }
    }
    setCartItems(updated);
    setCartOnBackend(productId, size, 0);
  };

  const getCartCount = () =>
    Object.values(cartItems).reduce((total, sizes) => {
      return total + Object.values(sizes).reduce((itemTotal, qty) => itemTotal + qty, 0);
    }, 0);

  const getCartSubtotal = () =>
    Object.entries(cartItems).reduce((total, [id, sizes]) => {
      const product = products.find(p => p._id === id);
      return product ? total + Object.values(sizes).reduce((itemTotal, qty) => itemTotal + product.price * qty, 0) : total;
    }, 0);

  const getProductsData = async () => {
    try {
      if (!backendUrl) {
        console.error('VITE_BACKEND_URL is not defined in env variables.');
        return;
      }
      const response = await axios.get(`${backendUrl}/api/product/list`);
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
    if (token) {
      loadCartData();
    } else {
      setCartItems({});
    }
  }, [token]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, []);

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