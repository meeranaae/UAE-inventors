import React from "react";

const AboutAssociation = () => {
  return (
    <section className="py-12 bg-white">
      {/* About Introduction */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          About the Association
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
          The Dubai-based UAE Inventors & Innovators Association was established
          in 2019. The UAE Inventors Association is one of the organizations of
          inventors, innovators, artificial intelligence, and scientific
          research in the UAE. The Association supports knowledge, development,
          and protection of inventor's rights and represents them globally. The
          association's main activities include supporting volunteering in
          invention and spreading awareness to support the nation.
        </p>
      </div>

      {/* Capabilities */}
      <div className="bg-gray-50">
        <div className="flex flex-col md:flex-row items-center mb-12 py-12 px-6">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/images/capabilities.png"
              alt="Capabilities"
              className="rounded-lg shadow-lg w-auto h-[300px]"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Capabilities
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The association also works to develop inventors' technical skills
              by offering specialized courses, conferences, and exhibitions. It
              provides inventors with the technical and legal support needed to
              promote their innovations through media and expert guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col md:flex-row items-center mb-12 py-12 md:pl-48">
        <div className="w-full md:w-1/2 px-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To be the best globally in adopting scientific and practical ideas
            that serve society in all fields, achieving the ambitions of
            inventors and innovators to reach global distinction.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/images/vision.png"
            alt="Vision"
            className="rounded-lg shadow-lg w-auto h-[300px]"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50">
        <div className="flex flex-col md:flex-row-reverse items-center mb-12 py-12 px-6">
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We aim to create a national system for inventors and innovators,
              motivating them to transform creative ideas into impactful
              investments that serve the community.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/images/mission.png"
              alt="Mission"
              className="rounded-lg shadow-lg w-auto h-[300px]"
            />
          </div>
        </div>
      </div>

      {/* Values and Objectives */}
      <div className="bg-white px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:pl-48">
          <div className="md:w-2/3 mb-4 md:mb-0">
            <ul className="list-decimal list-inside text-gray-600 leading-relaxed">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Our Values and Objectives
              </h3>
              <li>
                Focus on inventors' roles in society and develop young leaders.
              </li>
              <li>
                Create a national registry to motivate innovations in the UAE.
              </li>
              <li>
                Support preparation, development, and training programs for
                inventors.
              </li>
              <li>
                Provide consultations to governmental and non-governmental
                bodies.
              </li>
              <li>
                Spread awareness in the invention and innovation fields through
                media.
              </li>
              <li>
                Adopt specialized scientific programs to qualify youth and
                represent the association globally.
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/assets/images/target.png"
              alt="Target"
              className="rounded-lg shadow-lg w-auto h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAssociation;
