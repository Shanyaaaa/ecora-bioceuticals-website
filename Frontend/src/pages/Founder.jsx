import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const founders = [
  {
    name: "Dr. Arjun Mehta",
    title: "Veterinary Scientist & Co-Founder",
    image: assets.TeamMember1,
    bio: "With a Ph.D. in veterinary sciences, Dr. Mehta brings over 15 years of experience in pet wellness, R&D, and ethical care.",
  },
];

const AboutFounders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-100 py-12 px-4 sm:px-6 lg:px-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-4">
          Meet Our Founders
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          The driving force behind our mission to redefine pet wellness.
        </p>
      </motion.div>

    <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-x-10">
  {founders.map((founder, index) => (
    <motion.div
      key={index}
      className="relative flex flex-col lg:flex-row items-center lg:items-stretch w-full max-w-5xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3, duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Text Card */}
      <motion.div
        className="lg:w-1/2 bg-white rounded-2xl shadow-xl z-20 p-8 relative"
        whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(128, 90, 213, 0.3)" }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-purple-700 mb-2">{founder.name}</h2>
        <h3 className="text-sm text-gray-500 mb-4">{founder.title}</h3>
        <p className="text-gray-600 text-base leading-relaxed">{founder.bio}</p>
      </motion.div>

      {/* Image Card */}
      <motion.div
        className="lg:w-1/2 h-[400px] w-full bg-pink-200 rounded-2xl shadow-lg overflow-hidden flex items-center justify-center mt-6 lg:mt-0 lg:ml-6"
        whileHover={{ scale: 1.05, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={founder.image}
          alt={founder.name}
          className="h-full object-cover"
        />
      </motion.div>
    </motion.div>
  ))}
</div>

    </div>
  );
};

export default AboutFounders;
