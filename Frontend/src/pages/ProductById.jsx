import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products } from '../assets/assets';
import { Maximize2, X } from 'lucide-react';
import Suggestions from '../components/Suggestion';
import ReviewSection from '../components/ReviewSection'; // ✅ Import ReviewSection

const Tab = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`py-2 px-4 border-b-2 transition ${
      isActive ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-600 hover:text-blue-600'
    }`}
  >
    {label}
  </button>
);

const DropdownSection = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded mb-3 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200"
      >
        <h3 className="text-sm font-medium">{title}</h3>
        <span>{open ? '-' : '+'}</span>
      </button>
      {open && (
        <div className="px-4 py-2 text-sm text-gray-700 space-y-1">
          {content.map((item, idx) => (
            <p key={idx}>• {item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const ProductById = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  const [mainImage, setMainImage] = useState(product?.image?.[0] || '');
  const [isZoomed, setIsZoomed] = useState(false);
  const [tab, setTab] = useState('Description');

  if (!product) {
    return <div className="min-h-screen flex justify-center items-center">Product not found.</div>;
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

      {/* Product Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        {/* Left Image Gallery */}
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

        {/* Right Info */}
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
            Categories:{' '}
            {product.category.split(',').map((c, i) => (
              <span key={i} className="text-blue-600">
                {c}
                {i !== product.category.split(',').length - 1 && ', '}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="flex border-b mb-6">
          {['Description', 'Additional Info', 'Reviews'].map((label, i) => (
            <Tab
              key={i}
              label={label}
              isActive={tab === label.split(' ')[0]}
              onClick={() => setTab(label.split(' ')[0])}
            />
          ))}
        </div>

        {tab === 'Description' && (
          <div>
            {product.details?.map((section, index) => (
              <DropdownSection key={index} title={section.title} content={section.content} />
            ))}
          </div>
        )}

        {tab === 'Additional' && (
          <div className="text-gray-700 space-y-2">
            <p>Shipping: Free across India</p>
            <p>Stock Status: Available</p>
          </div>
        )}

        {tab === 'Reviews' && (
          <ReviewSection productId={product._id} />
        )}
      </div>

      <Suggestions currentProduct={product} />
      <Footer />
    </div>
  );
};

export default ProductById;
