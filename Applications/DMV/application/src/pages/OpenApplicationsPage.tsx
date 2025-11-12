import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Application {
  id: string;
  fullName: string;
  lastLoginDate: string;
  applyingFor: string;
  confirmationCode: string;
}

const OpenApplicationsPage: React.FC = () => {
  const navigate = useNavigate();

  // Sample applications data - this would come from API/context in real app
  const applications: Application[] = [
    {
      id: '1',
      fullName: 'Mike Alvarez',
      lastLoginDate: 'Submitted: 11/11/2025',
      applyingFor: "Driver's License",
      confirmationCode: '6DC4-4434'
    },
    {
      id: '2',
      fullName: 'Michael Alvarez',
      lastLoginDate: 'Submitted: 11/27/2022',
      applyingFor: "Driver's License",
      confirmationCode: 'CD46-4557'
    },
    {
      id: '3',
      fullName: 'michael alvarez',
      lastLoginDate: 'Submitted: 6/9/2020',
      applyingFor: "Driver's License",
      confirmationCode: 'C9DD-34DA'
    }
  ];

  const handleContinueApplication = (appId: string) => {
    console.log('Continuing application:', appId);
    // Navigate to the application form or next step
  };

  const handleStartNewApplication = () => {
    console.log('Starting new application');
    // Navigate to start application page
    navigate('/start-application');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header showNavigation={false} showUserMenu={false} />

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

        {/* Application Content Section */}
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
                  className="text-gray-600 hover:text-dmv-lightBlue pb-2 transition-colors"
                  onClick={() => window.history.back()}
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

              {/* Welcome Back Heading */}
              <h2 className="text-4xl font-serif text-dmv-darkBlue mb-6">
                Welcome back
              </h2>

              {/* Instructions */}
              <p className="text-gray-700 text-lg mb-8">
                Please select Continue to complete the rest of your application.
              </p>

              {/* Applications List */}
              <div className="space-y-6 mb-8">
                {applications.map((app) => (
                  <div
                    key={app.id}
                    className="border-2 border-gray-300 rounded-lg p-6 bg-white hover:border-gray-400 transition-colors"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {/* Full Name */}
                      <div>
                        <p className="text-dmv-darkBlue font-bold text-sm mb-1">Full Name</p>
                        <p className="text-gray-700">{app.fullName}</p>
                      </div>

                      {/* Empty column for spacing on first row */}
                      <div></div>

                      {/* Last Login Date */}
                      <div>
                        <p className="text-dmv-darkBlue font-bold text-sm mb-1">Last Login Date</p>
                        <p className="text-gray-700">{app.lastLoginDate}</p>
                      </div>

                      {/* Empty column for spacing */}
                      <div></div>

                      {/* Applying For */}
                      <div>
                        <p className="text-dmv-darkBlue font-bold text-sm mb-1">Applying For</p>
                        <p className="text-gray-700">{app.applyingFor}</p>
                      </div>

                      {/* Empty column for spacing */}
                      <div></div>

                      {/* Confirmation Code */}
                      <div>
                        <p className="text-dmv-darkBlue font-bold text-sm mb-1">Confirmation Code</p>
                        <p className="text-gray-700">{app.confirmationCode}</p>
                      </div>
                    </div>

                    {/* Continue Button */}
                    <button
                      onClick={() => handleContinueApplication(app.id)}
                      className="bg-dmv-blue text-white px-8 py-2.5 rounded-full font-bold text-base hover:bg-opacity-90 transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                ))}
              </div>

              {/* Start New Application Section */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-700 text-lg mb-4">
                  You can also start a new application.
                </p>
                <button
                  onClick={handleStartNewApplication}
                  className="bg-dmv-blue text-white px-8 py-2.5 rounded-full font-bold text-base hover:bg-opacity-90 transition-colors"
                >
                  Start a new application
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OpenApplicationsPage;
