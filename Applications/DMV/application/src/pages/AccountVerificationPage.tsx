import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const AccountVerificationPage: React.FC = () => {
  const navigate = useNavigate();
  const [verificationMethod, setVerificationMethod] = React.useState<'sms' | 'call'>('sms');

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle verification logic here
    console.log('Verification method selected:', verificationMethod);
    // Navigate to the code entry page
    navigate('/verification-code');
  };

  const handleCancel = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header showNavigation={false} showUserMenu={false} />

      {/* Navigation Breadcrumb */}
      <nav className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-6">
          <Link to="/" className="text-dmv-lightBlue hover:underline font-medium">
            Home
          </Link>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section with "ACCOUNT VERIFICATION" heading */}
        <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 overflow-hidden">
          {/* Decorative mountain/landscape background pattern */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
              {/* Mountain layers */}
              <path d="M0,200 Q100,120 200,140 T400,160 T600,140 T800,160 T1000,140 T1200,160 L1200,300 L0,300 Z" fill="#002855" opacity="0.7"/>
              <path d="M0,220 Q150,160 300,180 T600,180 T900,160 T1200,180 L1200,300 L0,300 Z" fill="#003A70" opacity="0.6"/>
              <path d="M0,240 Q200,200 400,220 T800,200 T1200,220 L1200,300 L0,300 Z" fill="#0066B3" opacity="0.5"/>
              {/* Decorative circles */}
              <circle cx="150" cy="80" r="60" fill="#6B9AC4" opacity="0.3"/>
              <circle cx="300" cy="50" r="80" fill="#6B9AC4" opacity="0.2"/>
              <circle cx="500" cy="40" r="100" fill="#6B9AC4" opacity="0.25"/>
              <circle cx="700" cy="60" r="70" fill="#6B9AC4" opacity="0.3"/>
              <circle cx="900" cy="30" r="90" fill="#6B9AC4" opacity="0.2"/>
              <circle cx="1100" cy="50" r="75" fill="#6B9AC4" opacity="0.25"/>
            </svg>
          </div>

          <div className="container mx-auto px-6 py-20 relative z-10">
            <h1 className="text-6xl font-black text-white italic tracking-wide">
              ACCOUNT VERIFICATION
            </h1>
          </div>
        </section>

        {/* Verification Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
              {/* Heading */}
              <h2 className="text-3xl font-serif text-dmv-darkBlue mb-6">
                Receive verification code via phone
              </h2>

              {/* Description */}
              <p className="text-gray-700 mb-6">
                To complete your login, we need to verify your phone number.
              </p>

              {/* Phone Number Display */}
              <p className="text-gray-700 mb-6">
                We will send a verification code to: <strong>(***) ***-*332</strong>
              </p>

              {/* Question */}
              <p className="text-gray-700 font-medium mb-4">
                How would you like to receive your code?
              </p>

              {/* Verification Method Options */}
              <form onSubmit={handleContinue} className="space-y-6">
                <div className="space-y-3">
                  {/* Text Me (SMS) Option */}
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="verificationMethod"
                      value="sms"
                      checked={verificationMethod === 'sms'}
                      onChange={() => setVerificationMethod('sms')}
                      className="w-5 h-5 text-dmv-lightBlue focus:ring-dmv-lightBlue"
                    />
                    <span className="text-gray-700">Text Me (SMS)</span>
                  </label>

                  {/* Call Me Option */}
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="verificationMethod"
                      value="call"
                      checked={verificationMethod === 'call'}
                      onChange={() => setVerificationMethod('call')}
                      className="w-5 h-5 text-dmv-lightBlue focus:ring-dmv-lightBlue"
                    />
                    <span className="text-gray-700">Call Me</span>
                  </label>
                </div>

                {/* Buttons */}
                <div className="flex items-center space-x-4 mt-8">
                  <button
                    type="submit"
                    className="bg-dmv-blue text-white px-12 py-3 rounded-full font-bold text-base hover:bg-opacity-90 transition-colors"
                  >
                    Continue
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="text-dmv-lightBlue font-medium hover:underline"
                  >
                    Cancel
                  </button>
                </div>

                {/* Help Link */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link to="/phone-recovery" className="text-dmv-lightBlue hover:underline">
                    I no longer have access to my account phone number.
                  </Link>
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

export default AccountVerificationPage;
