import React from 'react';

function HomePage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gray-50 px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
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
      <section className="bg-gray-100 px-6 md:px-12 lg:px-24 py-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Online Services</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            {/* Service Card */}
            {[
              { title: 'Membership Request', icon: '/assets/icons/membership-request.png' },
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

      {/* Partners Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-semibold text-center mb-8">Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src="/assets/images/partner1.png" alt="Partner 1" className="h-12" />
          <img src="/assets/images/partner2.png" alt="Partner 2" className="h-12" />
          <img src="/assets/images/partner3.png" alt="Partner 3" className="h-12" />
          <img src="/assets/images/partner4.png" alt="Partner 4" className="h-12" />
          <img src="/assets/images/partner5.png" alt="Partner 5" className="h-12" />
        </div>
      </section>

       {/* Video and Testimonial Section */}
       <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
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
