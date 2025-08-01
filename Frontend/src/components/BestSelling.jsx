import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; // adjust if path is different
import { Link } from 'react-router-dom';

const BestSellingSection = () => {
  const { bestsellerProducts } = useContext(ShopContext);

  if (!Array.isArray(bestsellerProducts) || bestsellerProducts.length === 0) {
    return null; // or return <p>Loading...</p>
  }

  return (
    <div className="px-4 py-8 md:px-8">
      <h2 className="text-2xl font-bold mb-4">Best Selling Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestsellerProducts.map((product) => (
          <Link to={`/product/${product._id}`} key={product._id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img
              src={product.image?.[0]} // Use first image
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-700 mt-1">₹{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestSellingSection;
