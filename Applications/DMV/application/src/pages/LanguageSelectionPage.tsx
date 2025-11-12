import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const LanguageSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = React.useState('English');

  const languages = [
    'English',
    'Español (Spanish)',
    '中文 (Chinese)',
    'Tiếng Việt (Vietnamese)',
    '한국어 (Korean)',
    'Tagalog',
    'ไทย (Thai)',
    'Русский (Russian)',
    'العربية (Arabic)',
    'فارسی (Farsi)',
    'हिन्दी (Hindi)',
    'ਪੰਜਾਬੀ (Punjabi)',
    '日本語 (Japanese)',
    'Հայերեն (Armenian)'
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Selected language:', selectedLanguage);
    // Navigate to open applications page
    navigate('/open-applications');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header showNavigation={false} showUserMenu={false} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 overflow-hidden py-16">
          {/* Decorative background pattern - simplified geometric shapes */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
              {/* Abstract geometric shapes */}
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
                Please choose a language for this application.
              </h2>

              {/* Language Selection Form */}
              <form onSubmit={handleNext} className="space-y-8">
                <div>
                  <label htmlFor="language" className="block text-dmv-darkBlue font-bold text-sm uppercase tracking-wide mb-3">
                    LANGUAGE <span className="text-red-600">*</span>
                  </label>
                  <div className="relative max-w-sm">
                    <select
                      id="language"
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:border-dmv-lightBlue appearance-none text-base"
                      required
                    >
                      {languages.map((lang) => (
                        <option key={lang} value={lang}>
                          {lang}
                        </option>
                      ))}
                    </select>
                    {/* Custom dropdown arrow */}
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-dmv-darkBlue flex items-center justify-center pointer-events-none rounded-r">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Next Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-dmv-blue text-white px-12 py-3 rounded-full font-bold text-base hover:bg-opacity-90 transition-colors shadow-md"
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

export default LanguageSelectionPage;
