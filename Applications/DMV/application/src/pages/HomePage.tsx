import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const carouselSlides = [
    {
      title: "IF YOU HAVE A CARD,",
      subtitle: "YOU HAVE AN ACCOUNT",
      description: "Set up your MyDMV today.",
      buttonText: "Learn More",
      image: {
        src: "https://www.dmv.ca.gov/portal/uploads/2025/10/MyDmv_web_banner_lady-2-1536x454-1.png",
        alt: "Woman holding CA driver's license and mobile",
        srcSet: `https://www.dmv.ca.gov/portal/uploads/2025/10/MyDmv_web_banner_lady-2-1536x454-1-300x89.png 300w,
                https://www.dmv.ca.gov/portal/uploads/2025/10/MyDmv_web_banner_lady-2-1536x454-1-768x227.png 768w,
                https://www.dmv.ca.gov/portal/uploads/2025/10/MyDmv_web_banner_lady-2-1536x454-1-1024x303.png 1024w,
                https://www.dmv.ca.gov/portal/uploads/2025/10/MyDmv_web_banner_lady-2-1536x454-1.png 1536w`
      }
    },
    {
      title: "RENEW YOUR VEHICLE",
      subtitle: "REGISTRATION ONLINE",
      description: "Quick, easy, and convenient registration renewal.",
      buttonText: "Renew Now",
      image: {
        src: "https://www.dmv.ca.gov/portal/uploads/2025/08/REG_web_banner.jpg",
        alt: "Blue car driving along a highway",
        mobileSrc: "https://www.dmv.ca.gov/portal/uploads/2025/08/Reg_moble.jpg",
        srcSet: `https://www.dmv.ca.gov/portal/uploads/2025/08/REG_web_banner-300x89.jpg 300w,
                https://www.dmv.ca.gov/portal/uploads/2025/08/REG_web_banner-768x227.jpg 768w,
                https://www.dmv.ca.gov/portal/uploads/2025/08/REG_web_banner-1024x303.jpg 1024w,
                https://www.dmv.ca.gov/portal/uploads/2025/08/REG_web_banner-1536x454.jpg 1536w,
                https://www.dmv.ca.gov/portal/uploads/2025/08/REG_web_banner-2048x605.jpg 2048w,
                https://www.dmv.ca.gov/portal/uploads/2025/08/REG_web_banner.jpg 2200w`
      }
    },
    {
      title: "RENEW YOUR DRIVER'S",
      subtitle: "LICENSE ONLINE",
      description: "Fast and convenient driver's license renewal.",
      buttonText: "Get Started",
      image: {
        src: "https://www.dmv.ca.gov/portal/uploads/2025/09/DL_webbanner_Road_redwood-1.jpg",
        alt: "Road through redwood forest",
        mobileSrc: "https://www.dmv.ca.gov/portal/uploads/2025/09/fca2dc88-3099-4028-9c5c-7c541b383959.jpg",
        srcSet: `https://www.dmv.ca.gov/portal/uploads/2025/09/DL_webbanner_Road_redwood-1-300x89.jpg 300w,
                https://www.dmv.ca.gov/portal/uploads/2025/09/DL_webbanner_Road_redwood-1-768x227.jpg 768w,
                https://www.dmv.ca.gov/portal/uploads/2025/09/DL_webbanner_Road_redwood-1-1024x303.jpg 1024w,
                https://www.dmv.ca.gov/portal/uploads/2025/09/DL_webbanner_Road_redwood-1-1536x454.jpg 1536w,
                https://www.dmv.ca.gov/portal/uploads/2025/09/DL_webbanner_Road_redwood-1-2048x605.jpg 2048w,
                https://www.dmv.ca.gov/portal/uploads/2025/09/DL_webbanner_Road_redwood-1.jpg 2200w`
      }
    }
  ];

  const currentSlideData = carouselSlides[currentSlide];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header showNavigation={true} showUserMenu={false} />

      <main className="flex-grow">
        {/* Announcement Banner */}
        <div className="bg-gray-100 border-b border-gray-300 py-2">
          <div className="container mx-auto px-6">
            <p className="text-sm text-gray-700 text-center">
              <strong>All DMV offices will be closed on Tuesday, November 11, 2025 in observance of Veterans Day.</strong> Regular business hours will resume on Wednesday, November 12th.
            </p>
          </div>
        </div>

        {/* Hero Banner - MyDMV Promotion */}
        <section className="bg-dmv-gold relative overflow-hidden">
          <div className="relative h-[500px] md:h-[550px]">
            {/* Background Image - Full Width */}
            <div className="absolute inset-0 flex items-center justify-end">
              <picture className="h-full">
                {currentSlideData.image.mobileSrc && (
                  <source srcSet={currentSlideData.image.mobileSrc} media="(max-width: 479px)" />
                )}
                <img
                  src={currentSlideData.image.src}
                  alt={currentSlideData.image.alt}
                  className="h-full w-auto object-cover object-right"
                  srcSet={currentSlideData.image.srcSet}
                  sizes="(max-width: 1536px) 100vw, 1536px"
                />
              </picture>
            </div>

            {/* Content Overlay */}
            <div className="container mx-auto px-6 py-20 relative z-10">
              <div className="max-w-xl">
                <h1 className="text-5xl font-bold text-dmv-darkBlue italic mb-6 leading-tight">
                  {currentSlideData.title}<br />{currentSlideData.subtitle}
                </h1>
                <p className="text-xl text-dmv-darkBlue mb-8">
                  {currentSlideData.description}
                </p>
                <button className="bg-dmv-lightBlue text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-dmv-blue transition-colors">
                  {currentSlideData.buttonText}
                </button>
              </div>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="relative z-10 flex justify-center items-center space-x-3 pb-12">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                    currentSlide === index
                      ? 'bg-dmv-lightBlue text-white'
                      : 'bg-white text-dmv-darkBlue border-2 border-dmv-darkBlue'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* How Can We Help? - Search Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-serif text-dmv-darkBlue text-center mb-8">
              How can we help?
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search a topic"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:border-dmv-lightBlue"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* DMV Anytime Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-serif text-dmv-darkBlue text-center mb-4">
              DMV Anytime
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Most DMV business can be started and/or completed online without visiting a DMV office.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* MyDMV Saves You Time */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 h-48 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg className="w-8 h-8 text-dmv-lightBlue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </button>
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded text-xs font-medium text-gray-700">
                    2:49
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-dmv-darkBlue mb-3">MyDMV Saves You Time</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    If you have a card, you have an account. Use MyDMV for faster, personalized online service.
                  </p>
                  <Link to="#" className="text-dmv-lightBlue text-sm font-medium hover:underline">
                    Learn more or sign up →
                  </Link>
                </div>
              </div>

              {/* Registration Renewal */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative bg-gradient-to-br from-amber-400 to-yellow-600 h-48 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg className="w-8 h-8 text-dmv-lightBlue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </button>
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded text-xs font-medium text-gray-700">
                    0:51
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-dmv-darkBlue mb-3">Registration Renewal</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Renew your vehicle registration online from the convenience of wherever you are.
                  </p>
                  <Link to="#" className="text-dmv-lightBlue text-sm font-medium hover:underline">
                    Renew registration →
                  </Link>
                </div>
              </div>

              {/* Occupational Licensing */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative bg-gradient-to-br from-blue-800 to-blue-950 h-48 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg className="w-8 h-8 text-dmv-lightBlue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </button>
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded text-xs font-medium text-gray-700">
                    2:02
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-dmv-darkBlue mb-3">Occupational Licensing</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    OL protects California drivers through licensing and regulating vehicle industry services.
                  </p>
                  <Link to="#" className="text-dmv-lightBlue text-sm font-medium hover:underline">
                    Occupational licensing type →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fraud Warning Banner */}
        <section className="bg-yellow-100 border-l-4 border-status-warning py-6">
          <div className="container mx-auto px-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">
                  <strong>Be Aware of Fraud</strong> - Watch for suspicious emails, messages, or websites impersonating DMV.
                </p>
                <Link to="#" className="text-dmv-lightBlue text-sm font-medium hover:underline inline-block mt-1">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* More Service Options Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-dmv-darkBlue mb-12">
              More Service Options
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* DMV Kiosks */}
              <div className="border-l-4 border-dmv-lightBlue pl-6">
                <h3 className="text-2xl font-bold text-dmv-darkBlue mb-3">DMV Kiosks</h3>
                <p className="text-gray-700 text-sm mb-4">
                  DMV NOW self-service kiosks offer California customers a quick option for simple transactions like vehicle registration renewal and duplicate registration cards. These kiosks are conveniently located throughout California, at select Safeway and Lucky stores.
                </p>
                <Link to="#" className="text-dmv-lightBlue text-sm font-medium hover:underline inline-flex items-center">
                  Find DMV kiosk near me →
                </Link>
              </div>

              {/* Business Partners */}
              <div className="border-l-4 border-dmv-lightBlue pl-6">
                <h3 className="text-2xl font-bold text-dmv-darkBlue mb-3">Business Partners</h3>
                <p className="text-gray-700 text-sm mb-4">
                  The DMV has partnered with businesses that offer some services like registration renewals, fee payments, and duplicate registration cards. These businesses are located throughout California and provide the same services as DMV field offices and some DMV online services.
                </p>
                <Link to="#" className="text-dmv-lightBlue text-sm font-medium hover:underline inline-flex items-center">
                  Find DMV partner near me →
                </Link>
              </div>

              {/* Industry Services */}
              <div className="border-l-4 border-dmv-lightBlue pl-6">
                <h3 className="text-2xl font-bold text-dmv-darkBlue mb-3">Industry Services</h3>
                <p className="text-gray-700 text-sm mb-4">
                  The DMV offers a range of industry services for automobile dealers, traffic violator schools, driving schools, vehicle manufacturers, body shops, dismantlers, distributors, insurance companies, lien sale providers, and more. Get information and support for industry partners.
                </p>
                <Link to="#" className="text-dmv-lightBlue text-sm font-medium hover:underline inline-flex items-center">
                  Search industry services →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Groups of Drivers Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-dmv-darkBlue mb-6 text-center">
              Specialized Groups of Drivers
            </h2>
            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
              The DMV offers help to help unique groups: child actors, seniors, active duty military members, new Californians, commercial drivers, and teens. Learn about the forms, appointments, behind-the-wheel testing, and more.
            </p>
            <div className="text-center">
              <Link
                to="#"
                className="text-dmv-lightBlue text-sm font-medium hover:underline inline-flex items-center"
              >
                Help with your DMV visit →
              </Link>
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

export default HomePage;
