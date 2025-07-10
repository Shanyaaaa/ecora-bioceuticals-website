import React, { useEffect } from "react";
import { Sparkles } from "lucide-react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-lg transition duration-300"
  >
    {children}
  </button>
);

export default function AboutUs() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="absolute inset-0 w-full bg-[#b6aaa1]"
          style={{
            clipPath: "ellipse(120% 100% at 50% 0%)",
            height: "85vh",
          }}
        />

        <div className="relative z-10 pt-16 pb-32">
          <div className="max-w-6xl mx-auto px-6">
            {/* Title */}
            <div className="text-center relative mb-8" data-aos="fade-down">
              <Sparkles className="absolute -top-4 -left-8 w-6 h-6 text-black" />
              <div className="absolute -top-2 right-12 w-3 h-3 bg-black rounded-full" />
              <div className="absolute top-4 right-8 w-4 h-4 border-2 border-black rounded-full" />
              <div className="absolute -bottom-2 right-16 w-2 h-2 bg-black rounded-full" />
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">About us</h1>
            </div>

            <p
              className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed text-center"
              data-aos="fade-up"
            >
              At Ecora Bioceuticals Pvt. Ltd, we are dedicated to enhancing the lives of pets and their pet parents.
              As a team of passionate pet lovers and experts in nutrition, we understand that our furry companions
              deserve the best possible care. That’s why we specialize in developing premium pet supplements that
              promote health, vitality, and happiness.
            </p>

            {/* Team Images */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 max-w-6xl mx-auto">
              <div
                className="w-[260px] aspect-square rounded-2xl overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="100"
              >
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
                  data-aos="fade-up"
                  data-aos-delay={200 + i * 100}
                >
                  <img src={img} alt={`Team Member ${i + 2}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center mt-10">
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold text-yellow-700 mb-4 underline underline-offset-4 decoration-yellow-400">
            Our Vision
          </h2>
          <p className="text-gray-600 mb-3">
            Our vision is to lead the pet supplement industry by setting the standard for excellence and innovation.
            We aspire to be the most trusted name in pet health, known for our commitment to quality, compassion,
            and continuous improvement.
          </p>
          <p className="text-gray-600">
            We envision a world where every pet has access to the nutrition they need to live a long, healthy, and
            happy life, and where pet owners are empowered with the knowledge to make informed choices for their
            furry family members.
          </p>
        </div>

        <div className="flex justify-center" data-aos="fade-left">
          <div className="w-[300px] rounded-xl overflow-hidden shadow-lg group">
            <img
              src={assets.Vision}
              alt="Our Vision"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto mt-20 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center" data-aos="fade-right">
          <div className="w-[300px] rounded-xl overflow-hidden shadow-lg group">
            <img
              src={assets.AboutEcora}
              alt="Our Mission"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>

        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold text-yellow-700 mb-4 underline underline-offset-4 decoration-yellow-800">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-3">
            Our mission is to revolutionize pet wellness by delivering effective, science-backed, and nature-powered supplements.
            We are dedicated to educating pet owners and supporting them with products that are safe, innovative, and tailored
            to real-life health challenges their pets face.
          </p>
          <p className="text-gray-600">
            Through transparency, care, and continuous research, we aim to bridge the gap between love and longevity—ensuring
            every pet leads a vibrant life filled with energy and joy.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto mt-20 px-6 text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold text-black mb-4">Why Choose Us</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Choosing Ecora Bioceuticals Pvt. Ltd means choosing a partner who cares deeply about your pet’s well-being.
          We are committed to quality, transparency, and innovation. Our supplements are made from the highest quality
          ingredients, sourced responsibly, and rigorously tested to ensure safety and efficacy.
        </p>
        <blockquote className="text-gray-800 italic border-l-4 border-gray-400 pl-4 max-w-xl mx-auto">
          “With us, you can trust that every product is made with love and expertise, putting your pet’s health first.”
        </blockquote>
      </div>

      {/* Who We Are */}
      <div className="max-w-6xl mx-auto mt-16 px-6" data-aos="fade-up">
        <div className="bg-[#ecdcc1] rounded-2xl shadow-md p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-700 mb-4">Who We Are</h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            At Ecora Bioceuticals Pvt. Ltd, our story is built on passion, science, and a deep love for animals.
            We've grown from a small idea into a leading force in pet wellness, committed to redefining how pet care is delivered—one supplement at a time.
          </p>
          <Button onClick={() => navigate("/Founder")}>Meet Our Founder</Button>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="pt-20 px-6" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center border-t border-gray-300 pt-10">
          <p className="text-lg md:text-xl text-gray-700 italic font-medium leading-relaxed">
            “From boosting immunity to meeting all health needs, <br />
            we’re here to help your pets thrive every step of the way.”
          </p>
          <div className="w-16 h-1 bg-yellow-400 mt-4 mx-auto rounded-full" />
        </div>
      </div>

    </div>

  );
}
