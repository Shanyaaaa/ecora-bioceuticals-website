import React from "react";
import { Sparkles } from "lucide-react";
import { assets } from "../assets/assets"; // Ensure paths are correct

const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-lg transition duration-300"
  >
    {children}
  </button>
);

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Section with Curved Background */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="w-full h-full bg-gradient-to-br from-pink-300 to-pink-400"
            style={{
              clipPath: "ellipse(120% 100% at 50% 0%)",
              height: "85vh",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-16 pb-32">
          <div className="max-w-6xl mx-auto px-6">
            {/* Title */}
            <div className="text-center relative mb-8">
              <Sparkles className="absolute -top-4 -left-8 w-6 h-6 text-black" />
              <div className="absolute -top-2 right-12 w-3 h-3 bg-black rounded-full" />
              <div className="absolute top-4 right-8 w-4 h-4 border-2 border-black rounded-full" />
              <div className="absolute -bottom-2 right-16 w-2 h-2 bg-black rounded-full" />
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">About us</h1>
            </div>

            {/* Paragraph */}
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed text-center">
              At Ecora Bioceuticals Pvt. Ltd, we are dedicated to enhancing the lives of pets and their pet parents.
              As a team of passionate pet lovers and experts in nutrition, we understand that our furry companions
              deserve the best possible care. That’s why we specialize in developing premium pet supplements that
              promote health, vitality, and happiness.
            </p>

            {/* Image Layout: 1 big square + 3 rectangles */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 max-w-6xl mx-auto">
              <div className="w-[260px] aspect-square rounded-2xl overflow-hidden">
                <img
                  src={assets.TeamMember1}
                  alt="Team Member 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {[assets.TeamMember2, assets.TeamMember4, assets.TeamMember3].map((img, i) => (
                <div
                  key={i}
                  className="w-[200px] aspect-[3/2] rounded-2xl overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`Team Member ${i + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="pt-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            From boosting immunity to all health needs, we are here to help your pets thrive.
          </h2>
        </div>
      </div>
    </div>
  );
}
