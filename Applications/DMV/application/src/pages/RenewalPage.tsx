import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const RenewalPage: React.FC = () => {
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
              <span className="text-gray-400">Driver's Licenses & Identification Cards</span>
              <span className="mx-2">/</span>
              <span className="text-dmv-lightBlue font-medium">Driver's License & ID Card Online Renewal</span>
            </div>
          </div>
        </div>

        {/* Hero Title Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-dmv-darkBlue italic mb-4">
              DRIVER'S LICENSE & ID CARD ONLINE RENEWAL
            </h1>
          </div>
        </section>

        {/* Warning Banner */}
        <section className="bg-yellow-100 border-l-4 border-status-warning py-6">
          <div className="container mx-auto px-6">
            <p className="text-gray-800">
              If you are age 70+ and renewing your driver's license, you might not need to take a test. Check your renewal notice to be sure.
            </p>
          </div>
        </section>

        {/* I need to... Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Side - Illustration */}
              <div className="flex flex-col">
                <h2 className="text-4xl font-bold text-dmv-darkBlue mb-8">I need to...</h2>
                <div className="flex justify-center items-center">
                  {/* License Card Illustration */}
                  <img
                    src="https://www.dmv.ca.gov/portal/uploads/2023/02/DLID.png"
                    alt="California Driver's License and ID Cards"
                    className="w-80 h-auto"
                  />
                </div>
              </div>

              {/* Right Side - Service Cards Grid */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 - Renew */}
                <div className="bg-white border border-gray-300 rounded p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-bold text-dmv-darkBlue mb-3">Renew</h3>
                  <p className="text-gray-700 text-sm mb-2">Select this option if you have <strong>either</strong> a:</p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-dmv-lightBlue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Standard driver's license/ID <strong>or</strong></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-dmv-lightBlue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">REAL ID driver's license/ID</span>
                    </li>
                  </ul>
                  <Link
                    to="/dl-renewal"
                    className="inline-flex items-center text-dmv-lightBlue text-sm font-medium hover:underline"
                  >
                    Renew Driver's License/ID →
                  </Link>
                </div>

                {/* Card 2 - Convert to REAL ID */}
                <div className="bg-white border border-gray-300 rounded p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-bold text-dmv-darkBlue mb-3">Convert to a REAL ID</h3>
                  <p className="text-gray-700 text-sm mb-2">Select this option to convert to a REAL ID while renewing a:</p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-dmv-lightBlue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Standard driver's license/ID</span>
                    </li>
                  </ul>
                  <button className="inline-flex items-center text-dmv-lightBlue text-sm font-medium hover:underline">
                    Convert to REAL ID 🌟 →
                  </button>
                </div>

                {/* Card 3 - Renew at DMV office */}
                <div className="bg-white border border-gray-300 rounded p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-bold text-dmv-darkBlue mb-3">Renew at a DMV office</h3>
                  <p className="text-gray-700 text-sm mb-2">Select this option if you have <strong>either</strong> a:</p>
                  <ul className="mb-2 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-dmv-lightBlue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Standard driver's license/ID <strong>or</strong></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-dmv-lightBlue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">REAL ID driver's license/ID</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 text-sm mb-4"><strong>and</strong> received a notice to renew at a DMV office. You can start the renewal online and save time at your office visit.</p>
                  <button className="inline-flex items-center text-dmv-lightBlue text-sm font-medium hover:underline">
                    Renew at DMV office →
                  </button>
                </div>

                {/* Card 4 - Renew Commercial Driver's License */}
                <div className="bg-white border border-gray-300 rounded p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-bold text-dmv-darkBlue mb-3">Renew Commercial Driver's License</h3>
                  <p className="text-gray-700 text-sm mb-3">Select this option if you have a:</p>
                  <ul className="mb-3 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-dmv-lightBlue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Commercial driver's license</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 text-sm mb-4">Make sure your address and personal information are <a href="#" className="text-dmv-lightBlue underline">up to date</a> <strong>before you start</strong>.</p>
                  <button className="inline-flex items-center bg-dmv-gold text-dmv-darkBlue px-4 py-2 rounded text-sm font-bold hover:bg-dmv-darkGold transition-colors">
                    Ask DMV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Information Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Online Services Section */}
              <div>
                <h2 className="text-3xl font-bold text-dmv-darkBlue mb-6">
                  Online Services
                </h2>
                <p className="text-gray-700 mb-6">
                  The California DMV offers convenient online services to save you time. Renew your driver's license, register your vehicle, and more from the comfort of your home.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-dmv-lightBlue mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Fast and secure online transactions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-dmv-lightBlue mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">No need to visit a DMV office</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-dmv-lightBlue mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">24/7 access to your account</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-dmv-lightBlue mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Instant confirmation and receipts</span>
                  </li>
                </ul>
              </div>

              {/* Need Help Section */}
              <div>
                <h2 className="text-3xl font-bold text-dmv-darkBlue mb-6">
                  Need Help?
                </h2>
                <p className="text-gray-700 mb-6">
                  Our customer service team is here to assist you with any questions about DMV services.
                </p>
                <div className="flex items-start mb-4">
                  <svg className="w-6 h-6 text-dmv-lightBlue mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <button className="flex items-center text-dmv-lightBlue font-medium hover:underline">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                      Phone Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RenewalPage;
