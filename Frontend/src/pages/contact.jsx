import React from 'react'
import { Facebook, Instagram } from 'lucide-react'
import Navbar from '../components/navbar'
import Footer from '../components/footer' // Ensure Footer component exists

// import Footer from '../components/Footer' // Uncomment if Footer component exists

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-white">
      <Navbar />

      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have any queries? <br />
          <span className="font-semibold text-black">We're here to help.</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-5 gap-4 mb-12">
        {[
          {
            title: 'Sales',
            desc: 'Communication with Sales person',
            email: 'sales@ecorabioceuticals.in',
          },
          {
            title: 'Marketing',
            desc: 'Learn more about products and info',
            email: 'info@ecorabioceuticals.in',
          },
          {
            title: 'HR',
            desc: 'Communication with HR',
            email: 'hr@ecorabioceuticals.in',
          },
          {
            title: 'Accounts',
            desc: 'Communication with Accounts',
            email: 'accounts@ecorabioceuticals.in',
          },
          {
            title: 'Contact',
            desc: `Gaurav Avishkar, Gala No 1-8, Mira Road, Maharashtra 401105`,
            phone: '+91 9820235470',
            email: 'ecorabioceuticals@gmail.com',
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow-md text-center">
            <h3 className="font-bold text-md text-purple-700 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700 mb-1">{item.desc}</p>
            {item.phone && <p className="text-sm text-gray-700">{item.phone}</p>}
            <a href={`mailto:${item.email}`} className="text-blue-600 text-sm break-all hover:underline">
              {item.email}
            </a>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 pb-16">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5173538018423!2d72.86250977514756!3d19.12896248209721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b705c92e59c7%3A0x6b8ff4a29023d65c!2sEcora%20Bioceuticals%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1719305796970!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded shadow-md"
        ></iframe>

        <form className="bg-white p-6 rounded shadow-md space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      <Footer />
    </div>
  )
}
