import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { assets } from '../assets/assets';

const InfoSection = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0;
        if (isVisible) {
          controls.start({ opacity: 1, y: 0 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const cardData = [
    {
      icon: assets.doctors,
      text: 'Trusted by 50+ Doctors',
      alt: 'Trust Icon',
    },
    {
      icon: assets.fastDelivery,
      text: 'Free and Fast Express Delivery',
      alt: 'Fast Delivery',
    },
    {
      icon: assets.quality,
      text: '100% Premium Quality',
      alt: 'Quality Icon',
    },
    {
      icon: assets.Price,
      text: 'Best Affordable & Competitive Price',
      alt: 'Price Icon',
    },
  ];

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="flex flex-col lg:flex-row justify-between items-center gap-10 mt-20 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80"
    >
      {/* LEFT: Hero Card */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: -1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 12 }}
        className="flex-1 w-full bg-[#b6aaa1] shadow-2xl rounded-2xl p-8 max-w-md h-[500px] flex flex-col justify-center items-center relative overflow-hidden"
      >
        <motion.img
          src={assets.Dog}
          alt="Dog with Owner"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="rounded-lg shadow-md mb-6 w-full max-w-xs object-contain"
        />
        <div className="space-y-3 text-center text-white z-10">
          <p className="text-2xl lg:text-3xl font-bold italic font-['Playfair_Display'] tracking-wide">
            Crafted for Health,
          </p>
          <p className="text-2xl lg:text-3xl font-bold italic font-['Playfair_Display'] tracking-wide">
            Backed by Science
          </p>
          <p className="text-2xl lg:text-3xl font-bold italic font-['Playfair_Display'] tracking-wide mt-4 text-white">
            "We Believe in Excellence"
          </p>
        </div>
      </motion.div>

      {/* RIGHT: Info Cards */}
      <div className="flex-1 max-w-md h-[500px] grid grid-cols-2 grid-rows-2 gap-5">
        {cardData.map((card, index) => (
          <Card key={index} icon={card.icon} text={card.text} alt={card.alt} delay={index * 0.2} />
        ))}
      </div>
    </motion.div>
  );
};

const Card = ({ icon, text, alt, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, rotate: -1 }}
      className="rounded-xl border border-gray-300 p-1 w-full h-full flex items-center justify-center overflow-hidden shadow transition-all"
    >
      <div className="flex items-center justify-between gap-x-4 w-full h-full p-4 bg-[#b6aaa1] rounded-lg">
        <div className="w-3/5 pr-2">
          <p className="text-lg lg:text-xl font-semibold text-white font-['Poppins'] leading-tight tracking-wide">
            {text}
          </p>
        </div>
        <div className="w-2/5 flex justify-end">
          <motion.img
            src={icon}
            alt={alt}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InfoSection;
