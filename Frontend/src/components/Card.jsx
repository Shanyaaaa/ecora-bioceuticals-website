

import React, { useState } from "react";
import { assets } from "../assets/assets";

const cardData = [
  {
    title: "Trusted by 50+ Doctors",
    description:
      "Our products are recommended and trusted by experienced medical professionals.",
    image: assets.doctors,
  },
  {
    title: "Free and Fast Express Delivery",
    description:
      "We ensure swift and free delivery so you never run out of essential supplies.",
    image: assets.fastDelivery,
  },
  {
    title: "100% Premium Quality",
    description:
      "Crafted using the highest standards to ensure your pet's health and safety.",
    image: assets.quality,
  },
  {
    title: "Best Affordable & Competitive Price",
    description:
      "Get premium products at the most affordable market prices.",
    image: assets.Price,
  },
];

const InfoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-white text-black py-16 px-4 sm:px-8 lg:px-20 border rounded-xl shadow-xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">
          <span className="text-[#FFD700]">Ecora</span> Services
        </h2>
        <p className="mt-3 text-xl font-medium text-gray-700">
          Crafted for Health, Backed by Science
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
        {cardData.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`group cursor-pointer p-5 rounded-lg text-center transition duration-300 transform hover:scale-105 border ${
              index === activeIndex
                ? "border-[#FFD700] bg-[#FFFBEA] shadow-md"
                : "border-gray-200 hover:border-[#FFD700]"
            }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-14 h-14 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#FFD700]">
              {card.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Detail View */}
      <div className="flex flex-col lg:flex-row items-center gap-10 bg-[#FFFBEA] text-black p-8 rounded-xl border border-[#FFD700] shadow-lg transition-all duration-500">
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl font-semibold text-[#FFD700] mb-3">
            {cardData[activeIndex].title}
          </h3>
          <p className="text-gray-800 text-lg leading-relaxed">
            {cardData[activeIndex].description}
          </p>
        </div>
        <img
          src={cardData[activeIndex].image}
          alt="Detail"
          className="flex-1 w-full max-w-sm object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default InfoSection;
