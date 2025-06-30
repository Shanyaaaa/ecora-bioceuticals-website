import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const PlaceOrder = () => {
  const { cartItems, products, currency = '₹' } = useContext(ShopContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    country: 'India',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('upi');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getSubtotal = () =>
    Object.entries(cartItems).reduce((total, [id, qty]) => {
      const product = products.find((p) => p._id === id);
      return total + (product ? product.price * qty : 0);
    }, 0);

  const subtotal = getSubtotal();
  const shipping = subtotal <= 500 ? 50 : 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    navigate('/orders');
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6 pt-12">
        <h1 className="text-3xl font-semibold text-center mb-8">Checkout</h1>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Billing Details */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="firstName" placeholder="Enter your first name*" onChange={handleChange} className="border p-2 rounded" />
              <input name="lastName" placeholder="Enter your last name*" onChange={handleChange} className="border p-2 rounded" />
              <input name="company" placeholder="Company name (optional)" onChange={handleChange} className="col-span-full border p-2 rounded" />
              <select name="country" onChange={handleChange} className="col-span-full border p-2 rounded">
                <option value="India">India</option>
              </select>
              <input name="address" placeholder="House number and street name*" onChange={handleChange} className="col-span-full border p-2 rounded" />
              <input name="apartment" placeholder="Apartment, suite, unit (optional)" onChange={handleChange} className="col-span-full border p-2 rounded" />
              <input name="city" placeholder="Enter your town or city*" onChange={handleChange} className="border p-2 rounded" />
              <input name="state" placeholder="Enter your state*" onChange={handleChange} className="border p-2 rounded" />
              <input name="zip" placeholder="Enter your ZIP / Postal Code*" onChange={handleChange} className="border p-2 rounded" />
              <input name="phone" placeholder="Enter your phone number*" onChange={handleChange} className="border p-2 rounded" />
              <input name="email" placeholder="Enter your email address*" onChange={handleChange} className="col-span-full border p-2 rounded" />
            </div>
            <textarea
              name="notes"
              placeholder="Any notes related to your order (optional)"
              onChange={handleChange}
              className="w-full border p-2 rounded mt-4"
              rows="4"
            />
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow rounded p-6 border space-y-4">
            <h2 className="text-lg font-semibold border-b pb-2">Your Order</h2>
            {Object.entries(cartItems).map(([id, qty]) => {
              const product = products.find((p) => p._id === id);
              return (
                <div key={id} className="flex justify-between items-center text-sm">
                  <span>{product?.name} × {qty}</span>
                  <span>{currency}{(product?.price * qty).toFixed(2)}</span>
                </div>
              );
            })}
            <div className="flex justify-between font-semibold pt-2 border-t">
              <span>Subtotal</span>
              <span>{currency}{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm border-b pb-2">
              <span>Shipping</span>
              <span>{shipping > 0 ? `${currency}${shipping}` : 'Free'}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>{currency}{total.toFixed(2)}</span>
            </div>

            {/* Payment Options */}
            <div className="text-sm border-t pt-4 space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                />
                <span>Pay with UPI QR Code</span>
                <img
                  src={assets.Payment}
                  alt="UPI"
                  className="w-8 h-5 object-contain"
                />
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="ecora"
                  checked={paymentMethod === 'ecora'}
                  onChange={() => setPaymentMethod('ecora')}
                />
                <span>Pay with EcoraBiocueuticals Razorpay</span>
                <img
                  src={assets.Razorpay}
                  alt="Ecora Pay"
                  className="w-11 h-8 object-contain"
                />
              </label>

              <p className="text-xs text-gray-500">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
              </p>
              <label className="flex items-start gap-2 text-xs">
                <input type="checkbox" required />
                <span>
                  I have read and agree to the website&nbsp;
                  <Link to="/termsofuse" className="text-blue-600 underline hover:text-blue-800">
                    terms and conditions
                  </Link>.
                </span>
              </label>
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
              >
                PROCEED TO PAYMENT
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlaceOrder;
