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
    }, 3000);
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

           
          </div>
         
        ))}

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/5 z-20 pointer-events-none" />
      </div>
    </div>
  );
};

export default SlideImg;
