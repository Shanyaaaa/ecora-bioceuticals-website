import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const BestSellingSection = () => {
  const { bestsellerProducts } = useContext(ShopContext);

  if (!Array.isArray(bestsellerProducts) || bestsellerProducts.length === 0) {
    return null;
  }

  const latestBestsellers = bestsellerProducts.slice(-3).reverse();

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 bg-gray-50 rounded-3xl ">
      <div className="flex justify-center items-center mb-8 ">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Best Sellers</h2>
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestBestsellers.map((product) => (
          <Link
            to={`/product/${product._id}`}
            key={product._id}
            className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image?.[0]}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                BEST SELLER
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-red-600">
                {product.name}
              </h3>
              <p className="text-lg font-extrabold text-red-600">
                ₹{product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestSellingSection;