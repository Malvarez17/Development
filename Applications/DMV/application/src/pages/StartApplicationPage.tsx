import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const StartApplicationPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = React.useState<string>('');
  const [renewalType, setRenewalType] = React.useState<string>('');

  const options = [
    { id: 'renew', label: "Renew my driver's license or ID card" },
    { id: 'first-time', label: "Get a driver's license or ID card for the first time" },
    { id: 'replace', label: "Replace my driver's license or ID card" },
    { id: 'correct', label: "Correct or update my driver's license or ID card" }
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOption) return;

    // If renew is selected, we need to check if renewal type is selected
    if (selectedOption === 'renew' && !renewalType) return;

    console.log('Selected option:', selectedOption);
    console.log('Renewal type:', renewalType);
    // Navigate to provide information page
    navigate('/provide-information');
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

        {/* Application Form Section */}
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
                Start an Application
              </h2>

              {/* Question */}
              <h3 className="text-lg font-semibold text-dmv-darkBlue mb-3">
                What would you like to do today? <span className="text-red-600">*</span>
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-6">
                During the application process, you may choose to make your driver's license or identification card (ID) a REAL ID. A REAL ID is not a separate type of identification.
              </p>

              {/* Radio Options Form */}
              <form onSubmit={handleNext} className="space-y-4 mb-8">
                {options.map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-center p-4 border-2 rounded-lg hover:border-dmv-lightBlue cursor-pointer transition-colors ${
                      selectedOption === option.id
                        ? 'border-dmv-lightBlue bg-blue-50'
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="applicationOption"
                      value={option.id}
                      checked={selectedOption === option.id}
                      onChange={(e) => {
                        setSelectedOption(e.target.value);
                        // Reset renewal type if switching away from renew
                        if (e.target.value !== 'renew') {
                          setRenewalType('');
                        }
                      }}
                      className="w-5 h-5 text-dmv-lightBlue focus:ring-dmv-lightBlue mr-4 flex-shrink-0"
                      required
                    />
                    <span className="text-gray-700 text-base">{option.label}</span>
                  </label>
                ))}

                {/* Renewal Type Question - Shown when "renew" is selected */}
                {selectedOption === 'renew' && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-dmv-darkBlue mb-6">
                      What would you like to renew? <span className="text-red-600">*</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Driver's License Option */}
                      <label
                        className={`flex flex-col items-center p-6 border-2 rounded-lg cursor-pointer transition-colors ${
                          renewalType === 'dl'
                            ? 'border-dmv-lightBlue bg-blue-50'
                            : 'border-gray-300 bg-white hover:border-dmv-lightBlue'
                        }`}
                      >
                        <input
                          type="radio"
                          name="renewalType"
                          value="dl"
                          checked={renewalType === 'dl'}
                          onChange={(e) => setRenewalType(e.target.value)}
                          className="w-5 h-5 text-dmv-lightBlue focus:ring-dmv-lightBlue mb-4"
                          required
                        />
                        <img
                          src="https://www.dmv.ca.gov/portal/uploads/2020/06/DL-Renew.svg"
                          alt="California Driver's License"
                          className="w-64 h-auto mb-4"
                        />
                        <span className="text-dmv-darkBlue font-bold text-base">
                          Driver's License
                        </span>
                      </label>

                      {/* ID Card Option */}
                      <label
                        className={`flex flex-col items-center p-6 border-2 rounded-lg cursor-pointer transition-colors ${
                          renewalType === 'id'
                            ? 'border-dmv-lightBlue bg-blue-50'
                            : 'border-gray-300 bg-white hover:border-dmv-lightBlue'
                        }`}
                      >
                        <input
                          type="radio"
                          name="renewalType"
                          value="id"
                          checked={renewalType === 'id'}
                          onChange={(e) => setRenewalType(e.target.value)}
                          className="w-5 h-5 text-dmv-lightBlue focus:ring-dmv-lightBlue mb-4"
                          required
                        />
                        <img
                          src="https://www.dmv.ca.gov/portal/uploads/2020/06/ID-Renew.svg"
                          alt="California Identification Card"
                          className="w-64 h-auto mb-4"
                        />
                        <span className="text-dmv-darkBlue font-bold text-base">
                          ID Card
                        </span>
                      </label>
                    </div>

                    {/* CDL Eligibility Message - Shown when Driver's License is selected */}
                    {renewalType === 'dl' && (
                      <div className="mt-8 p-6 bg-blue-50 border-l-4 border-dmv-lightBlue rounded">
                        <p className="text-gray-700 mb-3">
                          You may be eligible to Renew your Commercial Driver's License (CDL) without a visit to a field office. Click here to{' '}
                          <a href="#" className="text-dmv-lightBlue underline hover:text-dmv-blue font-medium">
                            Check Eligibility
                          </a>
                          .
                        </p>
                        <p className="text-gray-700">
                          If you have a hazardous materials endorsement or do not wish to check your eligibility, click NEXT to continue with this application.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Next Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={!selectedOption || (selectedOption === 'renew' && !renewalType)}
                    className={`px-12 py-3 rounded-full font-bold text-base transition-colors ${
                      selectedOption && (selectedOption !== 'renew' || renewalType)
                        ? 'bg-dmv-blue text-white hover:bg-opacity-90 cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
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

export default StartApplicationPage;
