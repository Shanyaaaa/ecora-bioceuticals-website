import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function ShippingPolicy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">Shipping Policy</h1>

          <div className="space-y-8 text-gray-800">
            <section>
              <h2 className="text-lg font-semibold mb-3">
                1. Does Ecora Bioceuticals – Store ship products everywhere in India?
              </h2>
              <p className="leading-relaxed">Yes, Ecora Bioceuticals – Store ships pan India.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                2. How much will I be charged for shipping?
              </h2>
              <p className="leading-relaxed mb-3">
                There are no shipping charges for orders equal to or above INR 499.
              </p>
              <p className="leading-relaxed">
                However, if your order is less than INR 499, there will be a shipping charge of INR 50.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                3. Can I request different items from my cart to be delivered differently?
              </h2>
              <p className="leading-relaxed">
                Unfortunately, at the moment we can't ship different items in the same cart to separate addresses.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                4. When will I receive my item and how can I track my order?
              </h2>
              <p className="leading-relaxed">
                You will be sent all tracking details regarding your order via email as soon as it's dispatched.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                5. What if items are missing from my delivery?
              </h2>
              <p className="leading-relaxed">
                If there's an item missing from your delivery, please email us at{' '}
                <a
                  href="mailto:ecorabioceuticals@gmail.com"
                  className="text-blue-600 underline"
                >
                  ecorabioceuticals@gmail.com
                </a>{' '}
                with a copy of the invoice and images of the items received.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                6. The package I received was damaged?
              </h2>
              <p className="leading-relaxed">
                Please do not accept a package if it is damaged or tampered with. If you already have and it has an
                issue, email us at{' '}
                <a
                  href="mailto:ecorabioceuticals@gmail.com"
                  className="text-blue-600 underline"
                >
                  ecorabioceuticals@gmail.com
                </a>{' '}
                with an image of the package.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
