import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12 text-gray-900 underline">Privacy Policy</h1>

          <div className="space-y-10 text-gray-800">
            <section>
              <p className="leading-relaxed">
                This Privacy Policy describes how venttura.in (the “Site” or “we”) collects, uses, and discloses your
                Personal Information when you visit or make a purchase from the Site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-purple-600 mb-2">Contact</h2>
              <p className="leading-relaxed mb-4">
                For any queries, contact us at{" "}
                <a href="mailto:ecorabioceuticals@gmail.com" className="text-blue-600 underline">
                  ecorabioceuticals@gmail.com
                </a>{" "}
                or by mail:
              </p>
              <div>
                <p className="font-semibold">Registered Office:</p>
                <p>
                  # 7 & 8, Gaurav Avishkar, Kanakia Road, Beverly Park, Mira Road (E), Thane – 401107, Maharashtra
                </p>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Corporate Office:</p>
                <p>
                  # 11 & 12, 1st Floor, Wing-A, Surya Orchid, Near Hotel Woodland Inn, Ramdev Park, Mira Road (E),
                  Thane-401107, Maharashtra
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-purple-600 mb-2">Collecting Personal Information</h2>
              <p className="mb-2">
                We collect device, interaction, and order information when you visit or contact the Site.
              </p>
              <p className="mb-4">
                “Personal Information” includes any data that identifies an individual. See categories below:
              </p>

              <h3 className="font-semibold">Device Information</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Purpose: to load and optimize the Site.</li>
                <li>Source: cookies, log files, web beacons, etc.</li>
                <li>
                  Data: browser version, IP, time zone, cookies, product views, search terms, interactions.
                </li>
              </ul>

              <h3 className="font-semibold">Order Information</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>
                  Purpose: to fulfill purchases, confirm orders, screen for fraud, and deliver updates.
                </li>
                <li>Source: collected directly from you.</li>
                <li>Data: name, billing/shipping address, email, phone.</li>
              </ul>

              <h3 className="font-semibold">Customer Support</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Purpose: to provide support.</li>
                <li>Source: collected directly from you.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-purple-600 mb-2">Sharing Personal Information</h2>
              <p className="mb-4">
                We may share your Personal Information with service providers to deliver services and fulfill contracts.
              </p>
              <p>
                Example: Shopify powers our online store. Read Shopify’s privacy policy here:{" "}
                <a
                  href="https://www.shopify.com/legal/privacy"
                  className="text-blue-600 underline"
                >
                  https://www.shopify.com/legal/privacy
                </a>
              </p>
              <p className="mt-2">
                We may also share information to comply with legal requests or protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-purple-600 mb-2">Behavioural Advertising</h2>
              <p className="mb-4">
                We use your data for relevant ads. For example:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  Google Analytics usage:{" "}
                  <a
                    href="https://www.google.com/intl/en/policies/privacy/"
                    className="text-blue-600 underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-blue-600 underline"
                  >
                    Opt-Out
                  </a>
                </li>
                <li>Ad sharing via cookies or direct integration with ad partners.</li>
                <li>
                  Shopify Audiences helps us market to similar customers on other platforms.
                </li>
              </ul>

              <p className="mt-4">
                Learn more at:{" "}
                <a
                  href="https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
                  className="text-blue-600 underline"
                >
                  NAI Website
                </a>
              </p>

              <p className="mt-4 font-medium">Opt out options:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  Facebook:{" "}
                  <a
                    href="https://www.facebook.com/settings/?tab=ads"
                    className="text-blue-600 underline"
                  >
                    https://www.facebook.com/settings/?tab=ads
                  </a>
                </li>
                <li>
                  Google:{" "}
                  <a
                    href="https://www.google.com/settings/ads/anonymous"
                    className="text-blue-600 underline"
                  >
                    https://www.google.com/settings/ads/anonymous
                  </a>
                </li>
                <li>
                  Bing:{" "}
                  <a
                    href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
                    className="text-blue-600 underline"
                  >
                    https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                  </a>
                </li>
                <li>
                  DAA Portal:{" "}
                  <a
                    href="https://optout.aboutads.info/"
                    className="text-blue-600 underline"
                  >
                    https://optout.aboutads.info/
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-purple-600 mb-2">Using Personal Information</h2>
              <p>
                We use your data to deliver services, manage orders, process payments, and notify you of products or offers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-purple-600 mb-2">Retention</h2>
              <p>
                We retain your Personal Information unless you request its deletion after an order.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-purple-600 mb-2">Cookies</h2>
              <p className="mb-4">
                Cookies store user preferences and improve experience. We use functional, performance, ad, and social media cookies.
              </p>
              <p className="mb-4">
                Cookie lifespan: Session (temporary) or Persistent (30 minutes to 2 years).
              </p>
              <p className="mb-4">
                Manage your cookie settings via browser tools. More info:{" "}
                <a
                  href="https://www.allaboutcookies.org"
                  className="text-blue-600 underline"
                >
                  www.allaboutcookies.org
                </a>
              </p>
              <p>
                Blocking cookies may limit site functionality and may not stop all third-party data sharing.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-purple-600 mb-2">Do Not Track</h2>
              <p>
                We do not alter our data practices when a Do Not Track signal is received.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-purple-600 mb-2">Changes</h2>
              <p>
                We may update this Privacy Policy to reflect operational, legal, or regulatory changes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-purple-600 mb-2">Complaints</h2>
              <p className="mb-2">
                Contact us via email or post for any complaints (see Contact section).
              </p>
              <p>
                If unsatisfied, you can file a complaint with your local data protection authority.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
