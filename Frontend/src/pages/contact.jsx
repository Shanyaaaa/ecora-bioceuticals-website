import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f0f6fc] text-gray-800 transition-all duration-500 ease-in-out">
      <Navbar />

      {/* Header Section */}
      <div className="text-center py-12 bg-red-100 rounded shadow-md mx-4 md:mx-16 my-6 ">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h1>
        <p className="text-gray-600">
          Ecora is ready to provide the right solution according to your needs.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden grid md:grid-cols-2 p-8 mb-12 transition hover:shadow-2xl duration-300 ease-in-out">
        {/* Left: Contact Info */}
        <div className="border-r border-gray-200 pr-6 mb-6 md:mb-0">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-sm mb-6">
            Reach out for inquiries, support, or collaboration. We’ll respond as soon as possible.
          </p>

          <div className="space-y-5 text-sm text-gray-700">
            <div>
              <h4 className="font-medium text-blue-600">Head Office</h4>
              <p>Gaurav Avishkar, Gala No 1-8<br />Mira Road, Maharashtra 401105</p>
            </div>

            <div>
              <h4 className="font-medium text-blue-600">Email Us</h4>
              <p className="hover:text-blue-500 transition">ecorabioceuticals@gmail.com</p>
              <p className="hover:text-blue-500 transition">hr@ecorabioceuticals.in</p>
            </div>

            <div>
              <h4 className="font-medium text-blue-600">Call Us</h4>
              <p className="hover:text-blue-500 transition">+91 9820235470</p>
            </div>

            <div>
              <h4 className="font-medium text-blue-600">Follow Our Social Media</h4>
              <div className="flex gap-4 mt-2 text-gray-600">
                <a
                  href="https://www.facebook.com/profile.php?id=100089639846317"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-blue-600 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/ecora.bioceuticals/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-pink-500 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="pl-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Send Us a Message</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring w-full hover:border-blue-500 transition"
            />
           
            <input
              type="text"
              placeholder="Phone"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring w-full hover:border-blue-500 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring w-full hover:border-blue-500 transition"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring w-full hover:border-blue-500 transition"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring w-full hover:border-blue-500 transition"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
