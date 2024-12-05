import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

function HomePage() {
  const partners = [
    "/assets/images/partner1.png",
    "/assets/images/partner2.png",
    "/assets/images/partner3.png",
    "/assets/images/partner4.png",
    "/assets/images/partner5.png",
    "/assets/images/partner6.png",
  ];

  const sponsors = [
    "/assets/images/sponsor1.png",
    "/assets/images/sponsor2.png",
    "/assets/images/sponsor3.png",
    "/assets/images/sponsor4.png",
    "/assets/images/sponsor5.png",
    "/assets/images/sponsor6.png",
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const partnersPerPage = 4;
  const totalPages = Math.ceil(partners.length / partnersPerPage);
  const currentPartners = partners.slice(
    currentPage * partnersPerPage,
    currentPage * partnersPerPage + partnersPerPage
  );

  // Intersection Observer hooks for animations
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [partnersRef, partnersInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [testimonialRef, testimonialInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`bg-gray-50 px-4 sm:px-6 md:px-12 lg:px-24 py-8 md:py-12 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 transition-transform duration-700 ${
          heroInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-600">
            The association premier higher inventor network
          </h1>
          <p className="text-gray-700 text-base sm:text-lg">
            UAE Inventors Association is an innovative student-recruitment
            platform that helps students study abroad at leading universities,
            and provides universities with access to a global student market.
          </p>
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white font-semibold py-2 px-4 sm:px-6 rounded-md hover:bg-red-700">
              READ MORE
            </button>
            <button className="bg-black text-white font-semibold py-2 px-4 sm:px-6 rounded-md hover:bg-gray-800">
              GET STARTED
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center space-x-4">
          {[
            {
              src: "/assets/images/hero-image1.jpg",
              alt: "Innovation Image 1",
            },
            {
              src: "/assets/images/hero-image2.png",
              alt: "Innovation Image 2",
            },
            {
              src: "/assets/images/hero-image3.jpg",
              alt: "Innovation Image 3",
            },
          ].map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="h-48 sm:h-64 w-32 sm:w-48 rounded-lg object-cover shadow-lg"
            />
          ))}
        </div>
      </section>

      {/* Online Services Section */}
      <section
        ref={servicesRef}
        className={`bg-gray-100 px-4 sm:px-6 md:px-12 lg:px-24 py-8 md:py-12 transition-transform duration-700 ${
          servicesInView
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6 sm:mb-8">
          Online Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-center">
          {[
            {
              title: "Membership Request",
              icon: "/assets/icons/membership-request.png",
            },
            {
              title: "Membership Renewal",
              icon: "/assets/icons/membership-renewal.png",
            },
            {
              title: "Replacement Card",
              icon: "/assets/icons/replacement-card.png",
            },
            {
              title: "Training Request",
              icon: "/assets/icons/training-request.png",
            },
            {
              title: "Reserve a Hall",
              icon: "/assets/icons/reserve-hall.png",
            },
            {
              title: "Invention Study",
              icon: "/assets/icons/invention-study.png",
            },
            {
              title: "Workshop Activities",
              icon: "/assets/icons/workshop-activities.png",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={service.icon}
                alt={`${service.title} Icon`}
                className="h-12 w-12 mx-auto mb-4"
              />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Engaging discussions and exclusive webinars.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Paginated Partners Section */}
      <section
        ref={partnersRef}
        className={`py-12 px-6 md:px-12 lg:px-24 transition-transform duration-700 ${
          partnersInView
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
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
                currentPage === index ? "bg-red-600" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Video and Testimonial Section */}
      <section
        ref={testimonialRef}
        className={`bg-gray-100 py-12 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 transition-transform duration-700 ${
          testimonialInView
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
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
            "Emirates Inventors Association is committed to building an
            inclusive community of inventors dedicated to innovation."
          </p>
          <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
            Read More
          </button>
        </div>
      </section>

      <section
        className="relative text-center"
        style={{
          backgroundImage: "url('/assets/images/statistics-bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw", // Full width for background image
          marginLeft: "calc(-50vw + 50%)", // Centers the background image
          height: "380px", // Adjust height to your preference
        }}
      >
        {/* Black Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          style={{
            width: "100vw", // Full width for overlay
            marginLeft: "calc(-50vw + 50%)", // Centers the overlay
            height: "100%", // Matches the height of the section
          }}
        ></div>

        {/* Content */}
        <div className="relative py-12 px-6 md:px-12 lg:px-24 text-white h-full flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-8">Our Achievements</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {[
              { number: "700+", label: "Inventors" },
              { number: "200+", label: "Sponsors" },
              { number: "1000+", label: "Students" },
              { number: "400+", label: "Professors" },
              { number: "40+", label: "Training" },
              { number: "32+", label: "Competitions" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-4xl font-bold">{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section
        ref={partnersRef}
        className={`py-12 px-6 md:px-12 lg:px-24 transition-transform duration-700 ${
          partnersInView
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Sponsors
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {sponsors
            .slice(
              currentPage * partnersPerPage,
              (currentPage + 1) * partnersPerPage
            )
            .map((sponsor, index) => (
              <img
                key={index}
                src={sponsor}
                alt={`Sponsor ${index + 1}`}
                className="h-12 object-contain"
                style={{ width: "150px", margin: "10px" }}
              />
            ))}
        </div>
        <div className="flex justify-center items-center mt-8 space-x-2">
          {Array.from({
            length: Math.ceil(sponsors.length / partnersPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-4 h-1 rounded-full ${
                currentPage === index ? "bg-red-600" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Savings Account Section */}
      <section
        className="relative bg-cover h-[400px] bg-center py-12 px-6 text-white"
        style={{
          backgroundImage: "url('/assets/images/savings-bg.png')", // Replace with your uploaded image path
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Text Content */}
          {/* <div className="bg-white text-purple-900 rounded-lg p-6 lg:p-8 shadow-lg max-w-lg">
            <h3 className="text-2xl font-bold mb-4">Kunooz Savings Account</h3>
            <p className="text-sm sm:text-base mb-6">
              Will you be the next Kunooz Monthly Millionaire?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-purple-900 border border-purple-900 font-semibold px-6 py-2 rounded-md hover:bg-gray-200">
                Learn More
              </button>
              <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-orange-600">
                Apply Now
              </button>
            </div>
          </div> */}
        </div>
      </section>

      {/* Training Section */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
          Training
        </h2>
        <div className="relative max-w-[85%] mx-auto">
          {/* Scrollable Training Cards */}
          <div
            className="flex gap-6 overflow-x-scroll scrollbar-hide pb-4"
            style={{ scrollBehavior: "smooth" }}
            id="trainingScroll"
          >
            {[
              {
                title: "Marketing Stack",
                date: "03 Jun, 2023",
                stars: 3,
                image: "/assets/images/training1.png",
              },
              {
                title: "Cross-Sell With Promotions",
                date: "03 Jun, 2023",
                stars: 4,
                image: "/assets/images/training2.png",
              },
              {
                title: "Social Media Marketing",
                date: "03 Jun, 2023",
                stars: 5,
                image: "/assets/images/training3.png",
              },
              {
                title: "Interactive Video Learning",
                date: "03 Jun, 2023",
                stars: 4,
                image: "/assets/images/training4.png",
              },
            ].map((training, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 min-w-[250px] sm:min-w-[280px]"
              >
                <img
                  src={training.image}
                  alt={training.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {training.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Date: {training.date}
                  </p>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span
                        key={starIndex}
                        className={`text-lg ${
                          starIndex < training.stars
                            ? "text-orange-500"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Arrow */}
          <button
            onClick={() =>
              document.getElementById("trainingScroll").scrollBy({
                left: 300,
                behavior: "smooth",
              })
            }
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full h-12 w-12 flex items-center justify-center shadow-lg hover:bg-gray-800"
          >
            <span className="text-lg">{">"}</span>
          </button>
        </div>
        <div className="text-center mt-8">
          <button className="bg-black text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-800">
            Explore Media Center
          </button>
        </div>
      </section>

      {/* Event App Section */}
      <section className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Create personalized event experiences
              <span className="text-red-500">
                {" "}
                with the Inventors Event App
              </span>
            </h2>
            <p className="text-sm sm:text-base">
              The fastest, most accessible way for teams to begin leveraging the
              power of AI
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-400">
              <li>
                To be the best globally, in terms of adopting scientific and
                practical ideas that serve our society in all fields.
              </li>
              <li>
                We are building a national system for inventors, innovators, and
                a national record to secure them and encourage them to convert
                their creative ideas into an investment to serve the community.
              </li>
              <li>
                To focus on the inventor's role in society by making it an
                example and finding young leaders and inventors in all fields.
              </li>
            </ul>
            {/* App Store Buttons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11M9 21V3m4 4l5-5m0 0l5 5m-5-5v18"
                  />
                </svg>
                <span>Get it on Google Play</span>
              </a>
              <a
                href="#"
                className="bg-gray-800 text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11M9 21V3m4 4l5-5m0 0l5 5m-5-5v18"
                  />
                </svg>
                <span>Download on the App Store</span>
              </a>
            </div>
          </div>

          {/* Right Mobile Screens */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center">
            {/* Phone 1 */}
            <div className="w-48 h-96 bg-black rounded-[2rem] shadow-xl border border-gray-700 overflow-hidden transform translate-x-8 translate-y-4 z-10">
              <img
                src="/assets/images/screen1.png" // Replace with your screen image
                alt="Screen 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Phone 2 */}
            <div className="w-48 h-96 bg-black rounded-[2rem] shadow-xl border border-gray-700 overflow-hidden transform -translate-x-8 -translate-y-4">
              <img
                src="/assets/images/screen2.png" // Replace with your screen image
                alt="Screen 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Media Center Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Media Center
          </h2>

          {/* News Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title:
                  "The Emirates Inventors Association held a meeting with the RTA team",
                date: "05 Jul, 2024",
                image: "/assets/images/media1.png",
              },
              {
                title:
                  "Dubai Electricity and Water Authority's R&D Centre has registered its sixth patent",
                date: "05 Jul, 2024",
                image: "/assets/images/media2.png",
              },
              {
                title:
                  "The visit of Entrepreneur- Salem Al-Mousa at Association Headquarters.",
                date: "05 Jul, 2024",
                image: "/assets/images/media3.png",
              },
              {
                title: "The Future of Inventors Event",
                date: "05 Jul, 2024",
                image: "/assets/images/media4.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m0 0H5a2 2 0 00-2 2v3m0 0h16M3 7h16"
                      />
                    </svg>
                    {item.date}
                  </div>
                  <a
                    href="#"
                    className="text-red-500 text-sm font-semibold hover:underline"
                  >
                    MORE
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* See All News Button */}
          <div className="text-center mt-8">
            <button className="bg-black text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-800">
              SEE ALL NEWS
            </button>
          </div>
        </div>
      </section>

      {/* Innovation Center Section */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-600">
              AI Yabghouny Innovation Center
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                Access to a vibrant community of inventors, entrepreneurs,
                startups, and service providers.
              </li>
              <li>
                Engaging discussions and knowledge sharing within the community.
              </li>
              <li>
                Valuable library resources and insights to support your
                invention journey.
              </li>
              <li>
                Networking opportunities to connect and collaborate with
                like-minded individuals.
              </li>
              <li>
                Exclusive webinars and live events with industry experts to
                expand your knowledge.
              </li>
              <li>
                Opportunities to showcase your ideas and gain visibility within
                the innovation community.
              </li>
              <li>
                Upgrading to a premium membership unlocks exclusive privileges
                and enhanced features.
              </li>
              <li>
                Join social networking, participate in group chats, events,
                visit the library to find the support you need!
              </li>
            </ul>
            <button className="bg-green-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-700">
              Join Our Community
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img
              src="/assets/images/innovation-center.jpeg" // Replace with your image path
              alt="AI Yabghouny Innovation Center"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
