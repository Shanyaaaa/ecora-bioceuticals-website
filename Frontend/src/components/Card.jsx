import React, { useState, useEffect, useRef } from 'react';
import { assets } from '../assets/assets';

const InfoSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0;
        
        if (isInView && !isScrolling) {
          setIsScrolling(true);
          setInView(true);
          
          // Reset the scaling effect after animation completes
          setTimeout(() => setIsScrolling(false), 1000);
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    window.addEventListener('scroll', handleScroll);
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [isScrolling]);

  const cardData = [
    {
      icon: assets.doctors,
      text: 'Trusted by 50+ Doctors',
      alt: 'Trust Icon',
      bgColor: 'from-amber-50 to-amber-100',
      textColor: 'text-amber-800'
    },
    {
      icon: assets.fastDelivery,
      text: 'Free and Fast Express Delivery',
      alt: 'Fast Delivery',
      bgColor: 'from-blue-50 to-blue-100',
      textColor: 'text-blue-800'
    },
    {
      icon: assets.quality,
      text: '100% Premium Quality',
      alt: 'Quality Icon',
      bgColor: 'from-emerald-50 to-emerald-100',
      textColor: 'text-emerald-800'
    },
    {
      icon: assets.Price,
      text: 'Best Affordable & Competitive Price',
      alt: 'Price Icon',
      bgColor: 'from-purple-50 to-purple-100',
      textColor: 'text-purple-800'
    }
  ];

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ease-in-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } flex flex-col lg:flex-row justify-between items-center gap-8 mt-20 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80`}
    >
      {/* Outer Div - Left Card */}
      <div 
        className={`flex-1 w-full bg-gradient-to-br from-white to-blue-50 shadow-2xl rounded-2xl p-8 max-w-md h-[500px] flex flex-col justify-center items-center transition-all duration-1000 ${
          isScrolling ? 'scale-105' : 'scale-100'
        } hover:ring-4 hover:ring-blue-200 hover:shadow-blue-300/50 relative overflow-hidden group`}
      >
        <img
          src={assets.Dog}
          alt="Dog with Owner"
          className={`rounded-lg shadow-md mb-6 w-full max-w-xs object-contain transition-all duration-700 ${
            inView ? 'scale-100' : 'scale-90'
          } ${isScrolling ? 'scale-110' : ''} group-hover:scale-105`}
        />
        <div className="space-y-3 text-center relative z-10">
          <p className="text-2xl lg:text-3xl font-bold italic font-['Playfair_Display'] tracking-wide text-gray-800">
            Crafted for Health,
          </p>
          <p className="text-2xl lg:text-3xl font-bold italic font-['Playfair_Display'] tracking-wide text-gray-800">
            Backed by Science
          </p>
          <p className="text-2xl lg:text-3xl font-bold italic font-['Playfair_Display'] tracking-wide text-blue-600 mt-4">
            "We Believe in Excellence"
          </p>
        </div>
      </div>

      {/* Inner Cards - Right Grid */}
      <div className="flex-1 max-w-md h-[500px] grid grid-cols-2 grid-rows-2 gap-5">
        {cardData.map((card, i) => (
          <Card 
            key={i} 
            icon={card.icon} 
            text={card.text} 
            alt={card.alt} 
            bgColor={card.bgColor}
            textColor={card.textColor}
            index={i}
            inView={inView}
            isScrolling={isScrolling}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ icon, text, alt, bgColor, textColor, index, inView, isScrolling }) => {
  const delay = index * 100 + 300;
  
  return (
    <div
      className={`transition-all duration-1000 ease-out transform ${
        inView ? 
          `opacity-100 translate-y-0 delay-[${delay}ms]` : 
          'opacity-0 translate-y-10'
      } ${
        isScrolling ? 'scale-105' : 'scale-100'
      } hover:scale-[1.03] hover:-rotate-1 hover:brightness-105 hover:shadow-xl rounded-xl border border-gray-200 p-1 w-full h-full cursor-pointer flex items-center justify-center overflow-hidden`}
      style={{
        transitionDelay: inView ? `${delay}ms` : '0ms'
      }}
    >
      <div className={`flex items-center justify-between gap-x-4 w-full h-full p-4 bg-gradient-to-br ${bgColor} rounded-lg transition-all duration-500 hover:shadow-inner`}>
        <div className="w-3/5 pr-4">
          <p className={`text-lg lg:text-xl font-semibold ${textColor} font-['Poppins'] tracking-wide leading-tight`}>
            {text}
          </p>
        </div>
        <div className="w-2/5 flex justify-end">
          <img
            src={icon}
            alt={alt}
            className={`w-20 h-20 rounded-full object-cover border-2 border-white shadow-md transition-all duration-500 ${
              inView ? 'scale-100' : 'scale-90'
            } ${isScrolling ? 'scale-110' : ''} hover:scale-110 hover:shadow-lg`}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;