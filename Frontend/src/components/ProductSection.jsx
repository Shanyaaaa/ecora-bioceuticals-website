import React, { useState } from "react";
import { assets } from "../assets/assets"; // Make sure asset paths are valid

const BestSellingSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const products = [
    {
      id: 1,
      name: "Aminopet Syr. 200ml",
      price: "₹260.00",
      rating: 5,
      images: [assets.aminopetFront],
    },
    {
      id: 2,
      name: "Artimarin Susp. 200ml",
      price: "₹260.00",
      rating: 5,
      images: [assets.artimarinHome],
    },
    {
      id: 3,
      name: "Calcinex Susp. 200ml",
      price: "₹210.00",
      rating: 5,
      images: [assets.calcinexHome],
    },
    {
      id: 4,
      name: "Pet Neuron 200ml",
      price: "₹480.00",
      rating: 5,
      images: [assets.petNeuronHome],
    },
  ];

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Best Selling Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const currentImageIndex = activeImageIndex[product.id] || 0;

            return (
              <div key={product.id} className="text-center">
                {/* Product Image */}
                <div className="mb-4">
                  <img
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    className="mx-auto h-64 object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>

                {/* Price */}
                <p className="text-xl font-bold text-gray-800 mb-2">{product.price}</p>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-3">{renderStars(product.rating)}</div>

                {/* Shop Now Button */}
                <a href="/products">
                  <button className="bg-pink-700 text-white font-bold px-5 py-2 rounded-md hover:bg-pink-800 transition">
                    SHOP NOW
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSellingSection;
