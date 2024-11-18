import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

function HomePage() {
  const partners = [
    "/assets/images/partner1.png",
    "/assets/images/partner2.png",
    "/assets/images/partner3.png",
    "/assets/images/partner4.png",
    "/assets/images/partner5.png",
    "/assets/images/partner6.png",
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const partnersPerPage = 4;
  const totalPages = Math.ceil(partners.length / partnersPerPage);
  const currentPartners = partners.slice(
    currentPage * partnersPerPage,
    currentPage * partnersPerPage + partnersPerPage
  );

  // Intersection Observer hooks for animations
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [partnersRef, partnersInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [testimonialRef, testimonialInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`bg-gray-50 px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 transition-transform duration-700 ${
          heroInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-red-600">
            The association premier higher inventor network
          </h1>
          <p className="text-gray-700 text-lg">
            UAE Inventors Association is an innovative student-recruitment platform that helps students study abroad at leading universities, and provides universities with access to a global student market.
          </p>
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-red-700">
              READ MORE
            </button>
            <button className="bg-black text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-800">
              GET STARTED
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center space-x-4">
          <img
            src="/assets/images/hero-image1.jpg"
            alt="Innovation Image 1"
            className="h-64 w-48 rounded-lg object-cover shadow-lg"
          />
          <img
            src="/assets/images/hero-image2.png"
            alt="Innovation Image 2"
            className="h-64 w-48 rounded-lg object-cover shadow-lg"
          />
          <img
            src="/assets/images/hero-image3.jpg"
            alt="Innovation Image 3"
            className="h-64 w-48 rounded-lg object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Online Services Section */}
      <section
        ref={servicesRef}
        className={`bg-gray-100 px-6 md:px-12 lg:px-24 py-12 transition-transform duration-700 ${
          servicesInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Online Services</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            {[{ title: 'Membership Request', icon: '/assets/icons/membership-request.png' },
              { title: 'Membership Renewal', icon: '/assets/icons/membership-renewal.png' },
              { title: 'Replacement Card', icon: '/assets/icons/replacement-card.png' },
              { title: 'Training Request', icon: '/assets/icons/training-request.png' },
              { title: 'Reserve a Hall', icon: '/assets/icons/reserve-hall.png' },
              { title: 'Invention Study', icon: '/assets/icons/invention-study.png' },
              { title: 'Workshop Activities', icon: '/assets/icons/workshop-activities.png' },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-12 w-12 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  In the presence of His Excellency Lieutenant, Public Security in Dubai.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paginated Partners Section */}
      <section
        ref={partnersRef}
        className={`py-12 px-6 md:px-12 lg:px-24 transition-transform duration-700 ${
          partnersInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-semibold text-center mb-8">Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {currentPartners.map((partner, index) => (
            <img
              key={index}
              src={partner}
              alt={`Partner ${index + 1}`}
              className="h-12"
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-4 h-1 rounded-full ${
                currentPage === index ? 'bg-red-600' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Video and Testimonial Section */}
      <section
        ref={testimonialRef}
        className={`bg-gray-100 py-12 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 transition-transform duration-700 ${
          testimonialInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full h-64 lg:h-96 bg-black">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h3 className="text-xl font-semibold text-red-600">Testimonials</h3>
          <p className="text-gray-700">
            "Emirates Inventors Association is committed to building an inclusive community
            of inventors dedicated to innovation."
          </p>
          <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
            Read More
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
