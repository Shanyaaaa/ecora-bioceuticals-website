import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const { cartItems, products, getCartSubtotal, currency = '₹', setCartItems, backendUrl, token } = useContext(ShopContext);
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

  const subtotal = getCartSubtotal();
  const shipping = subtotal <= 500 ? 50 : 0;
  const total = subtotal + shipping;

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("Submit button clicked");

    try {
      let orderItems = [];

      Object.keys(cartItems).forEach((itemId) => {
        Object.keys(cartItems[itemId]).forEach((size) => {
          if (cartItems[itemId][size] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === itemId));
            if (itemInfo) {
              itemInfo.size = size;
              itemInfo.quantity = cartItems[itemId][size];
              orderItems.push(itemInfo);
            }
          }
        });
      });

      if (orderItems.length === 0) {
        toast.error("Your cart is empty!");
        return;
      }

      const orderData = {
        address: form,
        items: orderItems,
        amount: total,
        paymentMethod,
      };

      console.log("Order data being sent:", orderData);

      const response = await axios.post(
        `${backendUrl}/api/order/place`,
        orderData,
        { headers: { token } } // token sent for auth
      );

      console.log("Response received:", response.data);

      if (response.data.success) {
        toast.success(`Order placed successfully${paymentMethod === 'cod' ? ' (Cash on Delivery)' : ''}`);
        setCartItems({});
        navigate('/orders');
      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.error("Order placement error:", error);
      toast.error(error.message);
    }
  };

  const renderCartSummary = () => {
    return (
      <div>
        {Object.entries(cartItems).map(([id, sizes]) => {
          const product = products.find((p) => p._id === id);
          if (!product) return null;

          return Object.entries(sizes).map(([size, quantity]) => (
            <div key={`${id}-${size}`} className="flex justify-between items-center text-sm">
              <span>{product?.name} ({size}) × {quantity}</span>
              <span>{currency}{(product?.price * quantity).toFixed(2)}</span>
            </div>
          ));
        })}
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 pt-12">
        <h1 className="text-3xl font-semibold text-center mb-8">Checkout</h1>

        <form className="grid lg:grid-cols-3 gap-12" onSubmit={onSubmitHandler}>

          {/* Billing Details */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="firstName" placeholder="Enter your first name*" onChange={handleChange} required className="border p-2 rounded" />
              <input name="lastName" placeholder="Enter your last name*" onChange={handleChange} required className="border p-2 rounded" />
              <input name="address" placeholder="House number and street name*" onChange={handleChange} required className="col-span-full border p-2 rounded" />
              <input name="apartment" placeholder="Apartment, suite, unit (optional)" onChange={handleChange} className="col-span-full border p-2 rounded" />
              <input name="city" placeholder="Enter your town or city*" onChange={handleChange} required className="border p-2 rounded" />
              <input name="state" placeholder="Enter your state*" onChange={handleChange} required className="border p-2 rounded" />
              <input name="zip" placeholder="Enter your ZIP / Postal Code*" onChange={handleChange} required className="border p-2 rounded" />
              <input name="phone" placeholder="Enter your phone number*" onChange={handleChange} required className="border p-2 rounded" />
              <input name="email" type="email" placeholder="Enter your email address*" onChange={handleChange} required className="col-span-full border p-2 rounded" />
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
            {renderCartSummary()}
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
                  required
                />
                <span>Pay with UPI QR Code</span>
                <img src={assets.Payment} alt="UPI" className="w-8 h-5 object-contain" />
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
                <img src={assets.Razorpay} alt="Ecora Pay" className="w-11 h-8 object-contain" />
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                />
                <span>Cash on Delivery</span>
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
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
              >
                PROCEED TO PAYMENT
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrder;
