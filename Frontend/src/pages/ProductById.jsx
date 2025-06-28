import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products } from '../assets/assets';
import { Maximize2, X } from 'lucide-react';

const ProductById = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  const [mainImage, setMainImage] = useState(product?.image?.[0] || '');
  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-red-500">Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Zoom Modal */}
      {isZoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <img src={mainImage} alt="zoomed" className="max-w-[90%] max-h-[90%] object-contain" />
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full hover:bg-red-600 transition"
          >
            <X size={20} />
          </button>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        {/* LEFT: Image Gallery */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex lg:flex-col gap-2">
            {product.image.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setMainImage(img)}
                className="w-20 h-20 object-cover rounded cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>

          <div className="relative">
            <img
              src={mainImage}
              alt="main"
              className="w-full h-[400px] object-contain rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <button
              onClick={() => setIsZoomed(true)}
              className="absolute top-2 right-2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200"
              title="Zoom In"
            >
              <Maximize2 className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="flex-1">
          <p className="text-sm text-gray-500">Home / Dog / {product.name}</p>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-1">{product.name}</h1>
          <p className="text-gray-600 text-sm mb-1">{product.category}</p>

          <div className="flex items-center mb-3">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
            <span className="ml-2 text-sm text-gray-600">(1 customer review)</span>
          </div>

          <p className="text-2xl font-semibold text-gray-800 mb-2">
            ₹{product.price.toFixed(2)} <span className="text-base font-normal">+ Free Shipping</span>
          </p>

          <ul className="list-disc ml-6 text-gray-700 text-sm mb-6 space-y-1">
            <li>{product.description}</li>
          </ul>

          <div className="flex items-center gap-4">
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-16 text-center border border-gray-300 rounded-md px-2 py-1"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              ADD TO CART
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Categories: {product.category.split(',').map((c, i) => (
              <span key={i} className="text-blue-600">{c}{i !== product.category.split(',').length - 1 && ', '}</span>
            ))}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductById;
