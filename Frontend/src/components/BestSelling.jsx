import React, { useState } from "react";
import { assets } from "../assets/assets"; // Assuming assets are imported correctly

const BestSellingSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const products = [
    {
      id: 1,
      name: "MPS Nanocurcumin",
      price: "₹1,250.00",
      rating: 5,
      images: ["/nano_front_home?height=300&width=300", "/placeholder.svg?height=300&width=300"],
      description: "100% Water Soluble & Bio-Available Nano Curcumin",
    },
    {
      id: 2,
      name: "Thrombo-Fe Syrup",
      price: "₹380.00",
      rating: 5,
      images: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
      description: "Iron supplement for pets",
    },
    {
      id: 3,
      name: "SAMe-Liv Syrup",
      price: "₹400.00",
      rating: 5,
      images: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
      description: "World's No.1 Liver Support Formula",
    },
    {
      id: 4,
      name: "SAMe-Liv Elite",
      price: "₹750.00",
      rating: 5,
      images: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
      description: "Premium liver support supplement",
    },
  ];

  const handleImageChange = (productId, imageIndex) => {
    setActiveImageIndex((prev) => ({
      ...prev,
      [productId]: imageIndex,
    }));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Best Selling Products</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const currentImageIndex = activeImageIndex[product.id] || 0;

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group relative"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.images[currentImageIndex] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleImageChange(product.id, index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">{renderStars(product.rating)}</div>
                    <span className="ml-2 text-sm text-gray-600">({product.rating}.0)</span>
                  </div>
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  </div>

                  {/* Shop Now */}
                  <a href="/products">
                    <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                      SHOP NOW
                    </button>
                  </a>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  BESTSELLER
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="/products">
            <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-xl border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Products →
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BestSellingSection;
