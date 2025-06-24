import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { assets } from "../assets/assets";

export default function AboutUs() {
  const [isAboutExpanded, setIsAboutExpanded] = useState(true);
  const [isWhyChooseExpanded, setIsWhyChooseExpanded] = useState(true);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isWhyChooseVisible, setIsWhyChooseVisible] = useState(false);

  const aboutRef = useRef(null);
  const whyChooseRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutRef.current && entry.isIntersecting) {
            setIsAboutVisible(true);
          }
          if (entry.target === whyChooseRef.current && entry.isIntersecting) {
            setIsWhyChooseVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (whyChooseRef.current) observer.observe(whyChooseRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-white">
      {/* About Us Section */}
      <section ref={aboutRef} className="text-black py-16 px-4 mt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div
              className={`transform transition-all duration-1000 ease-out delay-300 ${
                isAboutVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
            >
              <div className="relative group perspective-[1200px]">
                <div className="transform rotate-y-0 group-hover:rotate-y-6 group-hover:scale-105 transition-transform duration-700 ease-in-out rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={assets.AboutEcora}
                    alt="About Us"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isAboutVisible ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-4xl font-bold drop-shadow-md">About Us</h2>
                <button
                  onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  aria-label="Toggle about section"
                >
                  {isAboutExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>
              </div>
              <div className="h-1 w-20 bg-pink-600 mb-8"></div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isAboutExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    At Ecora Bioceuticals Pvt. Ltd, we are dedicated to enhancing the lives of pets and their pet parents
                    by offering premium supplements backed by science and made with love.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our products are meticulously crafted with natural ingredients to support pets through every stage of life.
                  </p>
                  <p className="text-lg leading-relaxed font-medium">
                    From boosting immunity to supporting joint and skin health, we help your pets thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section ref={whyChooseRef} className="bg-white py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isWhyChooseVisible ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
              }`}
            >
              <div className="flex items-center gap-4 ml-10 mb-6">
                <h2 className="text-4xl font-bold text-black-600 drop-shadow-md">Our Mission and Vision</h2>
                <button
                  onClick={() => setIsWhyChooseExpanded(!isWhyChooseExpanded)}
                  className="p-2 rounded-full hover:bg-pink-100 transition-colors duration-200"
                  aria-label="Toggle why choose us section"
                >
                  {isWhyChooseExpanded ? (
                    <ChevronUp className="w-6 h-6  text-pink-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6  text-pink-600" />
                  )}
                </button>
              </div>
              <div className="h-1 w-20 ml-10 bg-pink-600 mb-8"></div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isWhyChooseExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-10 space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    At Ecora Bioceuticals, we strive to lead the pet supplement industry with unwavering commitment to quality, innovation, and compassion.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our mission is to provide science-backed, high-quality supplements that empower pet parents and enrich the lives of pets everywhere.
                  </p>
                  <p className="text-lg leading-relaxed font-medium">
                    Every product is made with care, love, and a commitment to your pet’s health.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div
              className={`transform transition-all duration-1000 ease-out delay-300 ${
                isWhyChooseVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              <div className="relative group perspective-[1200px]">
                <div className="transform rotate-y-0 group-hover:rotate-y-6 group-hover:scale-105 transition-transform duration-700 ease-in-out rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={assets.Vision}
                    alt="Vision"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-pink-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
