import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { assets } from "../assets/assets";

const AboutFounders = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#e7ece8] min-h-screen py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-start gap-12">

          {/* Left Image Section */}
          <div className="relative w-[240px] self-start">
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={assets.Founder}
                alt="Founder Vishal Kumar"
                className="w-full h-[320px] object-cover"
              />
            </div>
          </div>

          {/* Right Text Section in 3D Card Style */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] p-8 transition-transform duration-300 hover:scale-[1.01]">

              <h2 className="text-3xl font-semibold text-purple-800">Our Story</h2>
              <p className="uppercase tracking-widest text-sm text-gray-500 mb-6">
                About Vishal Kumar
              </p>

              <div className="text-gray-700 text-base leading-relaxed space-y-4">
                <p>
                  <strong>Mr. Vishal Kumar</strong> is the Founder and Director of <strong>Ecora Bioceuticals Pvt. Ltd.</strong>, formerly operating as <strong>MPS Animal Healthcare</strong>. A zoologist by education and a passionate advocate for animal wellness, he has dedicated <strong><em>over two decades</em></strong> to improving the healthcare across India.
                </p>

                <p>
                  His journey began in <strong>1997</strong>, when he entered the field of Healthcare with a deep respect for nature, science, and the well-being. From the very beginning, Mr. Kumar recognized the importance of creating products that were not only effective but also <strong><em>affordable and trustworthy</em></strong>.
                </p>

                <p>
                  That belief led to the founding of <strong>Ecora</strong> in <strong>2014</strong>—a company built on the principle that <strong><em>premium quality should not come at a premium price</em></strong>. His vision was to deliver high-quality, science-driven supplements using top-tier ingredients, while ensuring they remain accessible to both pet parents and livestock caregivers.
                </p>

                <p>
                  Under his leadership, Ecora has grown into a trusted name among veterinarians, breeders, and pet owners alike—a reflection of his <strong>unwavering commitment to quality, integrity, and compassion</strong>.
                </p>

                <p>
                  What distinguishes Mr. Kumar is his ability to blend innovation with empathy. Whether consulting with veterinary professionals or overseeing production personally, he brings a <strong><em>deep sense of responsibility and care</em></strong> to every product Ecora creates.
                </p>

                <p>
                  Today, Ecora stands as a symbol of trust and excellence in the animal healthcare industry. For him, this work is far more than a business—it is a <strong><em>lifelong mission rooted in science, sincerity, and the belief that every animal deserves the best</em></strong>.
                </p>
              </div>

              {/* Signature Section */}
              <div className="pt-6 mt-6 border-t border-gray-200">
                <p className="font-cursive text-lg text-gray-800">Mr. Vishal Kumar</p>
                <p className="text-sm text-gray-600">Founder and Director</p>
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
