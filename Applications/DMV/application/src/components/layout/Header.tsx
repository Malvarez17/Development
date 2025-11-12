import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface HeaderProps {
  showNavigation?: boolean;
  showUserMenu?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  showNavigation = true,
  showUserMenu = false
}) => {
  const { user, logout } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);
  const [dlMenuOpen, setDlMenuOpen] = React.useState(false);

  return (
    <header className="bg-white">
      {/* Top Blue Bar */}
      <div className="bg-dmv-lightBlue py-3">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Left: CA Logo + DMV Logo */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-4">
              <img
                src="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/images/logo-ca-gov.svg"
                alt="CA.gov"
                className="h-12 w-auto"
              />
              <div className="border-l-2 border-white pl-4">
                <img
                  src="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/images/logo-ca-dmv-white.svg"
                  alt="California DMV"
                  className="h-10 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Right: Icons and Search */}
          <div className="flex items-center space-x-4">
            {/* Quick Links - Circular Icon Buttons */}
            <button className="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-dmv-lightBlue" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="3"/>
                </svg>
              </div>
              <span className="text-sm font-medium">REAL ID</span>
            </button>

            <button className="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-dmv-lightBlue" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9V9h2v4zm0-6H9V5h2v2z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">Online Services</span>
            </button>

            <button className="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-dmv-lightBlue" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h2v2h-2zm0 3h2v4h-2z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">Translate</span>
            </button>

            {showUserMenu && user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-dmv-lightBlue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 10a3 3 0 100-6 3 3 0 000 6zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">MyDMV</span>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setUserMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-dmv-lightBlue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 10a3 3 0 100-6 3 3 0 000 6zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <Link to="/login" className="text-sm font-medium">MyDMV</Link>
              </button>
            )}

            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Search here..."
                className="bg-transparent text-gray-700 outline-none w-64"
              />
              <button className="ml-2">
                <svg className="w-5 h-5 text-dmv-lightBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      {showNavigation && (
        <nav className="bg-white border-b-2 border-gray-200">
          <div className="container mx-auto px-6">
            <ul className="flex space-x-8 py-4">
              <li className="relative group">
                <button className="font-bold text-gray-700 hover:text-dmv-lightBlue transition-colors flex items-center">
                  Vehicle Registration
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </li>
              <li
                className="relative group"
                onMouseEnter={() => setDlMenuOpen(true)}
                onMouseLeave={() => setDlMenuOpen(false)}
              >
                <button
                  className="font-bold text-gray-700 hover:text-dmv-lightBlue transition-colors flex items-center border-b-4 border-dmv-lightBlue pb-4"
                  onClick={() => setDlMenuOpen(!dlMenuOpen)}
                >
                  Driver's Licenses & IDs
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {dlMenuOpen && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg border border-gray-200 z-50">
                    <Link
                      to="/dl-renewal"
                      className="block px-6 py-3 text-dmv-lightBlue hover:bg-gray-50 border-b border-gray-200 font-medium"
                      onClick={() => setDlMenuOpen(false)}
                    >
                      Renew DL/ID
                    </Link>
                    <Link
                      to="/"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-dmv-lightBlue border-b border-gray-200"
                      onClick={() => setDlMenuOpen(false)}
                    >
                      New DL/ID Card Application
                    </Link>
                    <Link
                      to="/"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-dmv-lightBlue border-b border-gray-200"
                      onClick={() => setDlMenuOpen(false)}
                    >
                      Replace DL
                    </Link>
                    <Link
                      to="/"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-dmv-lightBlue border-b border-gray-200"
                      onClick={() => setDlMenuOpen(false)}
                    >
                      Join the mDL Pilot
                    </Link>
                    <Link
                      to="/"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-dmv-lightBlue"
                      onClick={() => setDlMenuOpen(false)}
                    >
                      Request Driver Record
                    </Link>
                  </div>
                )}
              </li>
              <li className="relative group">
                <button className="font-bold text-gray-700 hover:text-dmv-lightBlue transition-colors flex items-center">
                  Make a Payment
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </li>
              <li className="relative group">
                <button className="font-bold text-gray-700 hover:text-dmv-lightBlue transition-colors flex items-center">
                  Appointments
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </li>
              <li className="relative group">
                <button className="font-bold text-gray-700 hover:text-dmv-lightBlue transition-colors flex items-center">
                  Testing
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </li>
              <li className="relative group">
                <button className="font-bold text-gray-700 hover:text-dmv-lightBlue transition-colors flex items-center">
                  Check Status
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
