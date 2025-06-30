import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Orders = () => {
  const { cartItems, products, currency } = useContext(ShopContext);

  const orderedProducts = Object.entries(cartItems)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const product = products.find((p) => p._id === id);
      return product ? { ...product, quantity: qty } : null;
    })
    .filter(Boolean);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold text-center mb-8">Your Orders</h1>
        {orderedProducts.length === 0 ? (
          <p className="text-center text-gray-500">You have no orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orderedProducts.map((product) => (
              <div
                key={product._id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-gray-200 bg-white rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image?.[0]}
                    alt={product.name}
                    className="w-24 h-24 object-contain rounded border"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                    <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
                    <p className="text-sm text-gray-600">Amount: {currency}{(product.price * product.quantity).toFixed(2)}</p>
                    <p className="mt-1 inline-block text-green-600 bg-green-100 text-xs px-2 py-1 rounded">Ready to ship</p>
                    <p className="text-xs text-gray-500 mt-2">📅 Ordered on: June 30, 2025</p>
                  </div>
                </div>
                <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Track Order
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
