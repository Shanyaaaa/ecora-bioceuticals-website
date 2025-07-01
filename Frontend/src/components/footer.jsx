import { Facebook, Instagram } from "lucide-react";
import { assets } from "../assets/assets"; 

export default function Footer() {
  return (
   
    <footer className="bg-[#b6aaa1] text-black">

      {/* Help Section with Logo */}
      <div className="text-center py-8 border-b border--500 relative">
        {/* Logo in top-left corner */}
        <img
          src={assets.ecora}
          alt="Ecora Logo"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 h-10 w-auto object-contain"
        />

        <h2 className="text-2xl font-semibold mb-2">How Can We Help?</h2>
        <p className="text-black-100">Monday – Saturday 10am – 6pm IST</p>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Office Information */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Registered Office:</h3>
              <p className="text-black leading-relaxed">
                # 7 & 8, Gaurav Avishkar, Kanakia Road, Beverly Park,
                <br />
                Mira Road (E), Thane – 401107, Maharashtra
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Corporate Office:</h3>
              <p className="text-black leading-relaxed">
                # 11 & 12, 1st Floor, Wing-A, Surya Orchid, Near Hotel
                <br />
                Woodland Inn, Ramdev Park, Mira Road (E), Thane-
                <br />
                401107, Maharashtra.
              </p>
            </div>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Information</h3>
            <ul className="space-y-3">
              <li>
                <a href="/ShippingPolicies" className="text-black hover:text-white transition-colors duration-200">
                  Shipping Policies
                </a>
              </li>
              <li>
                <a href="/TermsOfUse" className="text-black hover:text-white transition-colors duration-200">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="/RefundAndReturn" className="text-black hover:text-white transition-colors duration-200">
                  Refund and Returns Policy
                </a>
              </li>
              <li>
                <a href="/PrivacyPolicy" className="text-black hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="text-black hover:text-white transition-colors duration-200">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Accounts Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Accounts</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-black hover:text-white transition-colors duration-200">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors duration-200">
                  Order History
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-black py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm mb-4 md:mb-0">
            Copyright © 2024 ecorabioceuticals. Powered by ecorabioceuticals.
          </p>

          <div className="flex space-x-4">
            <a href="https://www.facebook.com/people/Ecora-Bioceuticals-Pvt-Ltd/100089639846317/" className= "text-black hover:text-white transition-colors duration-200" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/ecora.bioceuticals/?hl=en" className="text-black hover:text-white transition-colors duration-200" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
