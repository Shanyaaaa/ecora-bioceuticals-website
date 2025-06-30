import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { products } from '../assets/assets';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, updateCartItem, removeFromCart } = useContext(ShopContext);
  const [removingItems, setRemovingItems] = useState(new Set());

  const getSubtotal = () => {
    return Object.entries(cartItems).reduce((total, [id, qty]) => {
      const product = products.find(p => p._id === id);
      return product ? total + product.price * qty : total;
    }, 0);
  };

  const subtotal = getSubtotal();
  const shippingFee = subtotal <= 500 ? 50 : 0;
  const total = subtotal + shippingFee;

  const handleRemove = (id) => {
    setRemovingItems(prev => new Set(prev).add(id));
    setTimeout(() => {
      removeFromCart(id);
      setRemovingItems(prev => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 300);
  };

  const changeQty = (id, qty) => {
    const parsedQty = Math.max(1, parseInt(qty) || 1);
    updateCartItem(id, parsedQty);
  };

  return (
    <div className="min-h-screen bg-[#faf5ff] px-4 py-10 sm:px-10 font-sans">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-10">Your Shopping Cart</h1>

      {Object.keys(cartItems).length === 0 ? (
        <div className="text-center bg-white p-10 rounded-xl shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-2">Your cart is empty!</h2>
          <p className="text-gray-500 mb-4">Start exploring our products and fill it up 🎁</p>
          <Link to="/products">
            <button className="px-6 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
              Browse Products
            </button>
          </Link>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {Object.entries(cartItems).map(([id, qty]) => {
              const product = products.find(p => p._id === id);
              if (!product) return null;
              const isRemoving = removingItems.has(id);

              return (
                <div
                  key={id}
                  className={`bg-white rounded-xl p-5 shadow-md flex items-center justify-between transition-all duration-300 ${
                    isRemoving ? 'opacity-50 scale-95' : ''
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg shadow"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                      <p className="text-purple-700 font-medium">₹{product.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => changeQty(id, qty - 1)}
                      disabled={qty <= 1}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        qty <= 1
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                      }`}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-10 text-center font-medium">{qty}</span>
                    <button
                      onClick={() => changeQty(id, qty + 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-md font-semibold text-gray-700">
                      ₹{(product.price * qty).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemove(id)}
                      className="text-sm text-red-500 hover:underline mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Totals Section */}
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <h2 className="text-xl font-bold text-purple-800">Order Summary</h2>
            <div className="flex justify-between border-b pb-2">
              <span>Subtotal</span>
              <span className="font-medium text-gray-700">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Shipping</span>
              <span className={shippingFee > 0 ? '' : 'text-green-600 font-medium'}>
                {shippingFee > 0 ? `₹${shippingFee.toFixed(2)}` : 'Free'}
              </span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2">
              <span>Total</span>
              <span className="text-purple-700">₹{total.toFixed(2)}</span>
            </div>
            <Link to="/placeorder">
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
               Proceed to Checkout
             </button>
            </Link>

              
            <Link to="/products">
              <button className="w-full text-purple-600 border border-purple-300 py-2 rounded-lg font-medium hover:bg-purple-50 transition">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
