import React from "react";
import { FaLinkedin } from "react-icons/fa";

const AboutAssociationStaff = () => {
  return (
    <section className="py-12 bg-white">
      {/* General Director Speech */}
      <div className="mb-12 px-6 md:px-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 px-4 text-gray-600">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              General Director Speech
            </h2>
            <p className="leading-relaxed">
              Our objective is to promote young and smart minds in the United
              Arab Emirates in a time of critical needs. The association works
              to guide people into a life that begins with thinking and is
              inspired by the world around them. The key thing is innovation as
              society needs smart people with bright ideas and strives for the
              advancement of the human race.
            </p>
            <p className="leading-relaxed mt-4">
              The inventors of the future should think for the future and the
              society of the future to grow technology. Our goal is to spark
              their investigative spirit, promote creativity, to help them
              think through problems, and express their ideas through building
              things and presenting it to the society.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src="/assets/images/director.png" // Replace with actual image path
              alt="General Director"
              className="rounded-lg shadow-lg w-auto h-[300px]"
            />
          </div>
        </div>
      </div>

      {/* Board of Directors */}
      <div className="text-center mb-12 px-6 md:px-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Board of Directors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Director Cards */}
          {[
            {
              name: "Eng. Ahmed Abdallah Majjan",
              title: "President of the Inventors Association",
              image: "/assets/images/director1.png", // Replace with actual paths
              linkedin: "#",
            },
            {
              name: "Eng. Matar Al Mehairi",
              title: "Vice President",
              image: "/assets/images/director2.png",
              linkedin: "#",
            },
            {
              name: "Eng. Fatima Al Shehhi",
              title: "Treasurer",
              image: "/assets/images/director3.png",
              linkedin: "#",
            },
            {
              name: "Ms. Hind Al Ameri",
              title: "Secretary",
              image: "/assets/images/director4.png",
              linkedin: "#",
            },
            {
              name: "Ms. Nabila Bin Huraiz",
              title: "Media & Public Relations",
              image: "/assets/images/director5.png",
              linkedin: "#",
            },
            {
              name: "Dr. Badreya Al-Hinani",
              title: "Schools & University Coordinator & Initiatives",
              image: "/assets/images/director6.png",
              linkedin: "#",
            },
            {
              name: "Ms. Aisha Al Zarooni",
              title: "Events & Projects",
              image: "/assets/images/director7.png",
              linkedin: "#",
            },
            {
              name: "Ms. Huda Al-Harouri",
              title: "General Coordinator",
              image: "/assets/images/director8.png",
              linkedin: "#",
            },
            {
              name: "Eng. Ahmed Al-Hussaini",
              title: "Executive Director",
              image: "/assets/images/director9.png",
              linkedin: "#",
            },
          ].map((director, index) => (
            <div
              key={index}
              className="text-center bg-white shadow-lg rounded-lg p-4"
            >
              <img
                src={director.image}
                alt={director.name}
                className="rounded-full mx-auto w-24 h-24 mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{director.name}</h3>
              <p className="text-gray-600 text-sm">{director.title}</p>
              <div className="mt-2 flex justify-center">
                <a
                  href={director.linkedin}
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Organizational Chart */}
      <div className="text-center px-6 md:px-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Organizational Chart
        </h2>
        <div className="flex justify-center">
          <img
            src="/assets/images/organizational-chart.svg" // Replace with actual SVG path
            alt="Organizational Chart"
            className="w-full max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutAssociationStaff;
