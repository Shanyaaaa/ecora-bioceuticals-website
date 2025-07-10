import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { assets } from "../assets/assets";

const AboutFounders = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-br from-[#e7ece8] via-[#f2f7f3] to-[#eef3ef] min-h-screen py-24 px-6 lg:px-24 text-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-start gap-20">

          {/* Left Image Section */}
          <div className="relative w-[320px] self-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-3xl transform rotate-6"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-4 transform hover:scale-105 transition-transform duration-300">
                <img
                  src={assets.Founder}
                  alt="Founder Vishal Kumar"
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Text Section */}
          <div className="flex-1">
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-14 transition-all duration-300 hover:shadow-3xl border border-white/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/5 to-orange-500/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-400/5 to-orange-500/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-amber-600 mb-3">Our Story</h2>
                <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-8 font-medium">
                  About Vishal Kumar
                </p>

                <div className="text-lg leading-relaxed space-y-6">
                  <p>
                    <strong>Mr Vishal Kumar</strong> is the Founder and Director of Ecora Bioceuticals Pvt. Ltd., formerly operating as MPS Animal Healthcare. A zoologist by education and a passionate advocate for animal wellness, he has dedicated over two decades to improving healthcare across India.
                  </p>

                  <p>
                    His journey began in 1997, when he entered the field of Healthcare with a deep respect for nature, science, and well-being. From the very beginning, Mr. Kumar recognized the importance of creating products that were not only effective but also affordable and trustworthy.
                  </p>

                  <p>
                   That belief led to the founding of Ecora in 2014—a company built on the principle that premium quality should not come at a premium price. His vision was to deliver high-quality, science-driven supplements using top-tier ingredients, while ensuring they remain accessible to both pet parents and livestock caregivers.
                  </p>

                  <p>
                    Under his leadership, Ecora has grown into a trusted name among veterinarians, breeders, and pet owners alike—a reflection of his unwavering commitment to quality, integrity, and compassion.
                  </p>

                  <p>
                    What distinguishes Mr. Kumar is his ability to blend innovation with empathy. Whether consulting with veterinary professionals or overseeing production personally, he brings a deep sense of responsibility and care to every product Ecora creates.
                  </p>

                  <p>
                    Today, Ecora stands as a symbol of trust and excellence in the animal healthcare industry. For him, this work is far more than a business—it is a lifelong mission rooted in science, sincerity, and the belief that every animal deserves the best.
                  </p>
                </div>

                {/* Signature Section */}
                <div className="pt-8 mt-8 border-t border-gray-200">
                  <p className="font-cursive text-2xl text-amber-600 font-semibold">Mr. Vishal Kumar</p>
                  <p className="text-base text-gray-600 font-medium">Founder and Director</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutFounders;
