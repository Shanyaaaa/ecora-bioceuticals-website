import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export default function RefundAndReturn() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">Refund policy</h1>

          <div className="space-y-8 text-gray-800">
            {/* Returns & Exchange */}
            <section>
              <h2 className="text-lg font-bold mb-4 text-purple-600">Returns & Exchange Policy</h2>
              <p className="leading-relaxed mb-4">
                We have a 7-day return policy, which means you have 7 days after receiving your item to request a return.
              </p>
              <p className="leading-relaxed mb-4">
                To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You'll also need the receipt or proof of purchase.
              </p>
              <p className="leading-relaxed mb-4">
                To start a return, you can contact us at{" "}
                <a href="mailto:ecorabioceuticals@gmail.com" className="text-blue-600 hover:underline">
                  ecorabioceuticals@gmail.com
                </a>
                . If your return is accepted, we'll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
              </p>
              <p className="leading-relaxed">
                You can always contact us for any return question at{" "}
                <a href="mailto:ecorabioceuticals@gmail.com" className="text-blue-600 hover:underline">
                  ecorabioceuticals@gmail.com
                </a>
                .
              </p>
            </section>

            {/* Damages and Issues */}
            <section>
              <h2 className="text-lg font-bold mb-4 text-purple-600">Damages and issues</h2>
              <p className="leading-relaxed">
                Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.
              </p>
            </section>

            {/* Exchanges */}
            <section>
              <h2 className="text-lg font-bold mb-4 text-purple-600">Exchanges</h2>
              <p className="leading-relaxed">
                The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.
              </p>
            </section>

            {/* Refunds */}
            <section>
              <h2 className="text-lg font-bold mb-4 text-purple-600">Refunds</h2>
              <p className="leading-relaxed mb-4">
                We will notify you once we've received and inspected your return, and let you know if the refund was approved or not. If approved, you'll be automatically refunded on your original payment method within 5-7 working days. Please remember it can take some time for your bank or credit card company to process and post the refund too.
              </p>
              <p className="leading-relaxed">
                If more than 15 business days have passed since we approved your return, please contact us at{" "}
                <a href="mailto:ecorabioceuticals@gmail.com" className="text-blue-600 hover:underline">
                  ecorabioceuticals@gmail.com
                </a>
                .
              </p>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-lg font-bold mb-6 text-purple-600">FAQs</h2>

              <div className="mb-6">
                <h3 className="text-base font-semibold mb-3 text-purple-600">Can I have a refund for my product?</h3>
                <p className="leading-relaxed mb-3">
                  We offer replacements in case the product is damaged defective, expired or a wrong product is received by the user. Please contact us at{" "}
                  <a href="mailto:ecorabioceuticals@gmail.com" className="text-blue-600 hover:underline">
                    ecorabioceuticals@gmail.com
                  </a>{" "}
                  to discuss any refunds and we will revert in case by case.
                </p>
                <p className="leading-relaxed">
                  Once the product returned is accepted by Ecora Bioceuticals - Store, the refund amount will be initiated into the source account. Refunds if approved, are processed within 7 business days.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-base font-semibold mb-3 text-purple-600">Why is my return put on hold?</h3>
                <p className="leading-relaxed">
                  A return request can be put on hold or pending clarification because we need some additional information. Don't worry - in such cases our team will get in touch with you within 48 hours to share and assist accordingly.
                </p>
              </div>
            </section>

            {/* Cancellations */}
            <section>
              <h2 className="text-lg font-bold mb-6 text-purple-600">Cancellations</h2>

              <div className="mb-6">
                <h3 className="text-base font-semibold mb-3 text-purple-600">Can I cancel my order?</h3>
                <p className="leading-relaxed mb-3">
                  Yes, you can cancel an order for any reason by emailing us at{" "}
                  <a href="mailto:ecorabioceuticals@gmail.com" className="text-blue-600 hover:underline">
                    ecorabioceuticals@gmail.com
                  </a>{" "}
                  although cancellation requests must be done before the product has been dispatched. No cancellation is permitted subsequently.
                </p>
                <p className="leading-relaxed">
                  In such cases, for prepaid orders the money will be refunded to you within 7 business days after the order is cancelled.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-base font-semibold mb-3 text-purple-600">
                  Can Ecora Bioceuticals - Store Cancel my order?
                </h3>
                <p className="leading-relaxed mb-4">
                  Ecora Bioceuticals - Store reserves the right to cancel or refuse requests for order cancellations for any reason whatsoever. We agree not to hold Ecora Bioceuticals - Store liable for any rejection of order cancellations. Some of the reasons for cancellations are as under:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Product is unavailable with the seller</li>
                  <li>Technical errors or issues</li>
                  <li>Product is out of stock</li>
                  <li>Invalid product information</li>
                  <li>Malpractice is used to place the order</li>
                  <li>Multiple orders are placed for the same product at the same address</li>
                  <li>Order is undelivered after 2 attempts</li>
                </ul>
                <p className="leading-relaxed">
                  In such cases, the order will be cancelled and the money will be refunded to you within 48-72 business hours after the order is cancelled.
                </p>
              </div>
            </section>

            {/* Footer Note */}
            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-sm text-gray-600 mb-2">Updated on 25th September 2024</p>
              <p className="text-sm text-gray-600">
                Ecora Bioceuticals - Store reserves the right to update or change these policies at their discretion with prior notice.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
