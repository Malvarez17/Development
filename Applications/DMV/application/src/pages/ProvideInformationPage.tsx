import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ProvideInformationPage: React.FC = () => {
  const navigate = useNavigate();
  const [licenseNumber, setLicenseNumber] = React.useState('');
  const [showLicenseNumber, setShowLicenseNumber] = React.useState(false);
  const [isRealId, setIsRealId] = React.useState(false);
  const [unknownLicenseNumber, setUnknownLicenseNumber] = React.useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('License number:', licenseNumber);
    console.log('Is REAL ID:', isRealId);
    console.log('Unknown license number:', unknownLicenseNumber);
    // Navigate to the next step
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header showNavigation={false} showUserMenu={true} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 overflow-hidden py-16">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
              <path d="M0,150 Q200,100 400,150 T800,150 T1200,150 L1200,300 L0,300 Z" fill="#003A70" opacity="0.6"/>
              <circle cx="150" cy="80" r="60" fill="#6B9AC4" opacity="0.3"/>
              <circle cx="500" cy="60" r="80" fill="#6B9AC4" opacity="0.25"/>
              <circle cx="900" cy="70" r="70" fill="#6B9AC4" opacity="0.3"/>
              <circle cx="1100" cy="50" r="65" fill="#6B9AC4" opacity="0.25"/>
            </svg>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-5xl font-black text-white italic tracking-wide">
              DRIVER'S LICENSE AND ID APPLICATION
            </h1>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-8">
              {/* Breadcrumb Navigation */}
              <div className="flex space-x-6 mb-8 border-b border-gray-200 pb-4">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-dmv-lightBlue pb-2 transition-colors"
                >
                  Home
                </Link>
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-gray-600 hover:text-dmv-lightBlue pb-2 transition-colors"
                >
                  Previous
                </button>
                <span className="text-dmv-darkBlue font-medium pb-2 border-b-4 border-dmv-blue">
                  Current
                </span>
              </div>

              {/* Required Fields Notice */}
              <div className="flex justify-end mb-8">
                <p className="text-gray-600 text-sm uppercase tracking-wide">
                  <span className="text-red-600">*</span> REQUIRED FIELDS
                </p>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl font-serif text-dmv-darkBlue mb-8">
                Provide your information.
              </h2>

              {/* Subheading */}
              <h3 className="text-lg font-semibold text-dmv-darkBlue mb-6">
                Enter your driver's license or ID card number:
              </h3>

              {/* Form */}
              <form onSubmit={handleNext} className="space-y-6">
                {/* License Number Box */}
                <div className="border-2 border-gray-300 rounded-lg p-6 bg-white">
                  <label htmlFor="licenseNumber" className="block text-dmv-darkBlue font-bold text-sm uppercase tracking-wide mb-3">
                    DRIVER'S LICENSE OR ID CARD NUMBER <span className="text-red-600">*</span>
                  </label>

                  <div className="relative max-w-md mb-3">
                    <input
                      type={showLicenseNumber ? 'text' : 'password'}
                      id="licenseNumber"
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                      disabled={unknownLicenseNumber}
                      className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:border-dmv-lightBlue disabled:bg-gray-100 disabled:text-gray-500"
                      placeholder=""
                      required={!unknownLicenseNumber}
                    />
                    <button
                      type="button"
                      onClick={() => setShowLicenseNumber(!showLicenseNumber)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                      disabled={unknownLicenseNumber}
                    >
                      {showLicenseNumber ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    First character is a letter, followed by 7 numbers
                  </p>

                  {/* REAL ID Checkbox */}
                  <div className="flex items-start mb-4">
                    <input
                      type="checkbox"
                      id="realId"
                      checked={isRealId}
                      onChange={(e) => setIsRealId(e.target.checked)}
                      disabled={unknownLicenseNumber}
                      className="w-5 h-5 text-dmv-lightBlue focus:ring-dmv-lightBlue border-gray-300 rounded mt-0.5 disabled:bg-gray-100"
                    />
                    <label htmlFor="realId" className="ml-3 text-gray-700">
                      This is a REAL ID{' '}
                      <a href="#" className="text-dmv-lightBlue underline hover:text-dmv-blue">
                        How do I tell?
                      </a>
                    </label>
                  </div>
                </div>

                {/* Unknown License Number Checkbox */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="unknownLicense"
                    checked={unknownLicenseNumber}
                    onChange={(e) => {
                      setUnknownLicenseNumber(e.target.checked);
                      if (e.target.checked) {
                        setLicenseNumber('');
                        setIsRealId(false);
                      }
                    }}
                    className="w-5 h-5 text-dmv-lightBlue focus:ring-dmv-lightBlue border-gray-300 rounded mt-0.5"
                  />
                  <label htmlFor="unknownLicense" className="ml-3 text-gray-700">
                    I do not know my previous California driver's license or ID card number.
                  </label>
                </div>

                {/* Buttons */}
                <div className="flex items-center space-x-6 pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-dmv-lightBlue font-bold hover:underline"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-dmv-blue text-white px-12 py-3 rounded-full font-bold text-base hover:bg-opacity-90 transition-colors"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProvideInformationPage;
