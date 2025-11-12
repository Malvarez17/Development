import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const DLRenewalPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header showNavigation={true} showUserMenu={false} />

      <main className="flex-grow">
        {/* Breadcrumbs */}
        <div className="bg-white py-3 border-b">
          <div className="container mx-auto px-6">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-dmv-lightBlue">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/renewal" className="hover:text-dmv-lightBlue">Driver's Licenses & Identification Cards</Link>
              <span className="mx-2">/</span>
              <span className="text-dmv-lightBlue font-medium">Driver's License & ID Online Renewal</span>
            </div>
          </div>
        </div>

        {/* Hero Title Section with Illustration */}
        <section className="bg-white py-12 border-b">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <h1 className="text-5xl font-bold text-dmv-darkBlue italic">
                DRIVER'S LICENSE & ID<br />ONLINE RENEWAL
              </h1>
              {/* Hand holding ID card illustration */}
              <div className="flex-shrink-0">
                <img
                  src="https://www.dmv.ca.gov/portal/uploads/2022/12/real_id_2.svg"
                  alt="Hand holding California ID card"
                  className="w-[275px] h-[275px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Left Column - Renew Buttons */}
              <div className="lg:col-span-2">
                <p className="text-gray-700 text-base mb-6 leading-relaxed">
                  Skip the line and renew your driver's license (DL) or identification (ID) card online.
                </p>

                <div className="space-y-3 mb-6">
                  <button className="w-40 bg-dmv-blue text-white px-6 py-2.5 rounded-full font-bold text-base hover:bg-opacity-90 transition-colors">
                    Renew DL
                  </button>
                  <button className="w-40 bg-dmv-blue text-white px-6 py-2.5 rounded-full font-bold text-base hover:bg-opacity-90 transition-colors block">
                    Renew ID
                  </button>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm text-gray-800">
                    <span className="inline-block bg-yellow-400 text-dmv-darkBlue font-bold px-2 py-0.5 rounded text-xs mr-2">IMPORTANT</span>
                    Before you start, make sure you are <strong>within 90 days</strong> of expiration and your address is up to date. If you need to <a href="#" className="text-dmv-lightBlue underline">change your address</a>, do so <strong>at least 3 days before</strong> you begin your renewal application.
                  </p>
                </div>
              </div>

              {/* Right Column - Before You Begin */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-serif text-dmv-darkBlue mb-8">
                  Before you begin, be prepared to:
                </h2>

                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-dmv-blue text-white rounded-full flex items-center justify-center font-bold text-xl mr-5">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-base mb-3 leading-relaxed">
                        Log in to your DMV online account. If you do not already have a DMV online account, you will be asked to create one.
                      </p>
                      <p className="text-gray-700 text-base leading-relaxed">
                        <strong>Are you over age 70?</strong> Visit the <a href="#" className="text-dmv-blue underline">Driver's License Renewal Guide for 70+</a> and follow along to get started.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-dmv-blue text-white rounded-full flex items-center justify-center font-bold text-xl mr-5">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-base mb-3 leading-relaxed">
                        Pay a renewal fee in the amount shown on your renewal notice.
                      </p>
                      <p className="text-gray-700 text-base mb-3 leading-relaxed">
                        All credit/debit card transactions include an additional payment processing fee.
                      </p>
                      <p className="text-gray-700 text-base leading-relaxed">
                        If paying directly from your bank account, there are no additional fees.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-dmv-blue text-white rounded-full flex items-center justify-center font-bold text-xl mr-5">
                      3
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-base leading-relaxed">
                        Update your voter registration information if needed. If no changes, please proceed through to complete your transaction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-gray-700 text-base">
                    Have questions? Visit <a href="#" className="text-dmv-blue underline">license renewal FAQs</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <div className="bg-blue-50 p-8 rounded">
                <h2 className="text-2xl font-bold text-dmv-darkBlue mb-4">
                  What to expect:
                </h2>
                <p className="text-gray-700 text-base mb-6 leading-relaxed">
                  You should receive your new DL/ID card in the mail within two to four weeks. If you have not received your DL/ID card after 60 days, check your status online.
                </p>
                <button className="bg-dmv-blue text-white px-6 py-2.5 rounded-full font-bold text-base hover:bg-opacity-90 transition-colors">
                  Check DL/ID Status
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Ask DMV Floating Button */}
      <button className="fixed bottom-8 right-8 bg-dmv-gold hover:bg-dmv-darkGold text-dmv-darkBlue font-bold px-6 py-3 rounded-lg shadow-lg transition-colors z-50">
        Ask DMV
      </button>
    </div>
  );
};

export default DLRenewalPage;
