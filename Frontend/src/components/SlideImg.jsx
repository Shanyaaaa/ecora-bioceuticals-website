import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const SlideImg = () => {
  const images = [assets.eg_1, assets.eg_2, assets.eg_3];
  const [currentIndex, setCurrentIndex] = useState(0);
   const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-screen overflow-x-hidden relative">
      {/* Full-width rectangle slideshow */}
      <div className="relative w-screen h-[300px] sm:h-[360px] md:h-[400px] lg:h-[450px] overflow-hidden bg-gray-100">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              i === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
            }`}
          >
            <img
              src={src || '/placeholder.svg'}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
              draggable={false}
            />

    ?
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button
                onClick={() => navigate('/products')}
                className="mt-65 px-5 py-2 bg-red-500 text-black font-semibold rounded-full shadow-lg backdrop-blur-md hover:bg-white hover:scale-105 transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          </div>
         
        ))}

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/5 z-20 pointer-events-none" />
      </div>
    </div>
  );
};

export default SlideImg;
