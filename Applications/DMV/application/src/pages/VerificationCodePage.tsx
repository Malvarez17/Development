import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const VerificationCodePage: React.FC = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = React.useState('');
  const [resendMethod, setResendMethod] = React.useState<'sms' | 'call'>('sms');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle verification code validation here
    console.log('Verification code entered:', verificationCode);
    // Navigate to language selection page after successful verification
    navigate('/language-selection');
  };

  const handleCancel = () => {
    navigate('/login');
  };

  const handleRequestNewCode = () => {
    console.log('Requesting new code via:', resendMethod);
    // Logic to resend code
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

        {/* Verification Code Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
              {/* Heading */}
              <h2 className="text-3xl font-serif text-dmv-darkBlue mb-4">
                Phone Verification Code
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-8">
                Your verification code was sent to <strong>(***) ***-*332</strong>. The code expires in 10 minutes.
              </p>

              {/* Phone Illustration */}
              <div className="flex justify-start mb-8">
                <img
                  src="https://cdn.dmv.ca.gov/dmv-cdn/prod/isam/images/mobile_blue.svg"
                  alt="Hand holding phone with verification code"
                  className="w-64 h-auto"
                />
              </div>

              {/* Verification Code Form */}
              <form onSubmit={handleVerify} className="space-y-6">
                <div>
                  <label htmlFor="verificationCode" className="block text-gray-700 mb-2">
                    Enter the 6-digit verification code below:
                  </label>
                  <input
                    type="text"
                    id="verificationCode"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder="113900"
                    maxLength={6}
                    className="w-64 px-4 py-3 border-2 border-gray-300 rounded focus:outline-none focus:border-dmv-lightBlue text-lg tracking-wider"
                    required
                  />
                </div>

                {/* Buttons */}
                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    className={`px-12 py-3 rounded-full font-bold text-base transition-colors ${
                      verificationCode.length === 6
                        ? 'bg-dmv-blue text-white hover:bg-opacity-90 cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={verificationCode.length !== 6}
                  >
                    Verify
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
                <div className="pt-4">
                  <Link to="/phone-recovery" className="text-dmv-lightBlue hover:underline text-sm">
                    I no longer have access to my account phone number.
                  </Link>
                </div>
              </form>

              {/* Request New Code Section */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="mb-4">
                  <span className="text-gray-700 mr-3">Didn't receive a verification code?</span>
                  <button
                    onClick={handleRequestNewCode}
                    className="text-dmv-lightBlue font-medium hover:underline"
                  >
                    Request a new code
                  </button>
                </div>

                {/* Resend Method Options */}
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="resendMethod"
                      value="sms"
                      checked={resendMethod === 'sms'}
                      onChange={() => setResendMethod('sms')}
                      className="w-4 h-4 text-dmv-lightBlue focus:ring-dmv-lightBlue"
                    />
                    <span className="text-gray-700">Receive Code via Text (SMS)</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="resendMethod"
                      value="call"
                      checked={resendMethod === 'call'}
                      onChange={() => setResendMethod('call')}
                      className="w-4 h-4 text-dmv-lightBlue focus:ring-dmv-lightBlue"
                    />
                    <span className="text-gray-700">Receive Code via Phone Call</span>
                  </label>
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

export default VerificationCodePage;
