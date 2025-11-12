import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
    // Navigate to account verification page
    navigate('/account-verification');
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
        {/* Hero Section with "LOG IN" heading */}
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
              LOG IN
            </h1>
          </div>
        </section>

        {/* Login Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
              {/* Welcome Back */}
              <h2 className="text-4xl font-serif text-dmv-darkBlue mb-6">
                Welcome Back
              </h2>

              {/* CA DMV Wallet App Option */}
              <div className="mb-8 p-4 border-2 border-gray-200 rounded-lg hover:border-dmv-lightBlue transition-colors cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-dmv-lightBlue rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-dmv-lightBlue font-bold text-lg">Log in with CA DMV Wallet App</p>
                    <p className="text-sm text-gray-600">No password needed</p>
                  </div>
                </div>
              </div>

              {/* MyDMV Section */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-dmv-darkBlue mb-2">MyDMV</h3>
                <p className="text-gray-700">
                  <span className="font-semibold">Not Registered?</span> In order to log in, you will first need to{' '}
                  <Link to="/create-account" className="text-dmv-lightBlue underline hover:text-dmv-blue">
                    create an account
                  </Link>
                  .
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:outline-none focus:border-dmv-lightBlue"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-gray-700"
                    >
                      Unlock 1Password
                    </button>
                  </div>
                  <Link to="/email-recovery" className="text-dmv-lightBlue text-sm hover:underline inline-block mt-2">
                    No longer have access to your email address?
                  </Link>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:outline-none focus:border-dmv-lightBlue pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
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
                  <Link to="/forgot-password" className="text-dmv-lightBlue text-sm hover:underline inline-block mt-2">
                    Forgot your password?
                  </Link>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-dmv-lightBlue text-white px-12 py-3 rounded-full font-bold text-lg hover:bg-dmv-blue transition-colors"
                  >
                    Log in
                  </button>
                </div>
              </form>

              {/* Additional Information */}
              <div className="mt-12 pt-8 border-t border-gray-300">
                <h3 className="text-2xl font-bold text-dmv-darkBlue mb-4">
                  Additional Information
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/privacy-security" className="text-dmv-lightBlue hover:underline inline-flex items-center">
                      Privacy and Security
                    </Link>
                  </li>
                  <li>
                    <Link to="/technical-support" className="text-dmv-lightBlue hover:underline inline-flex items-center">
                      Technical Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
