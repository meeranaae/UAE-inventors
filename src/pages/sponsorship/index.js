import React from "react";

const Sponsorship = () => {
  return (
    <section className="py-12 bg-white">
      {/* Sponsorship Introduction */}
      <div className="text-center mb-12">
        <img
          src="/assets/images/emirates-logo.png" // Replace with the actual logo image path
          alt="Emirates NBD Logo"
          className="mx-auto mb-4 h-16 sm:h-20"
        />
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
          Our efforts as an early adopter of banking digitalisation and
          innovation, and best practice, have ensured that the Group continued
          to receive international recognition.
        </p>
      </div>

      {/* Launch of Digital Asset Lab */}
      <div className="bg-gray-50">
        <div className="flex flex-col md:flex-row items-center mb-12 py-12 px-6">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/images/digital-asset-lab.png"
              alt="Digital Asset Lab"
              className="rounded-lg shadow-lg w-full md:w-auto h-[200px] sm:h-[300px]"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Launch of Digital Asset Lab
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Emirates NBD launched its Digital Asset Lab, in line with the
              overall strategy of driving digital innovation, customer
              centricity, and adapting with evolving market dynamics. Founding
              council members include professional services firm PwC, and
              digital asset transfer and direct custody technology platform,
              Fireblocks.
            </p>
          </div>
        </div>
      </div>

      {/* Empowering UAE Nationals in Banking */}
      <div className="flex flex-col md:flex-row items-center mb-12 py-12 md:pl-48">
        <div className="w-full md:w-1/2 px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            Empowering UAE Nationals in Banking
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Dive deeper and spend the day with key Partners. Our 2023 Cohort
            witnessed the innovation that powers modern payment systems at
            Visa. They also explored cutting-edge solutions at Deloitte
            Digital, during another full-day excursion. These experiences
            help expand horizons and allow you to discover the endless
            possibilities of financial technology.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/images/uae-banking.png"
            alt="Empowering UAE Nationals in Banking"
            className="rounded-lg shadow-lg w-full md:w-auto h-[200px] sm:h-[300px]"
          />
        </div>
      </div>

      {/* Platinum Sponsor Section */}
      <div className="bg-gray-50">
        <div className="flex flex-col md:flex-row-reverse items-center mb-12 py-12 px-6">
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Platinum Sponsor of Leading Fintech Event
            </h3>
            <ul className="list-disc ml-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              <li>
                Partnership between Fintech and Banks to fuel the growth of
                entrepreneurship and SMEs.
              </li>
              <li>
                Embedded finance powering the global digital economy to enable
                diversified economic growth.
              </li>
              <li>
                Opportunities and ethics of syncing generative AI and open
                banking data collaboration, from hyper-personalization to
                financial inclusion.
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/images/platinum-sponsor.png"
              alt="Platinum Sponsor"
              className="rounded-lg shadow-lg w-full md:w-auto h-[200px] sm:h-[300px]"
            />
          </div>
        </div>
      </div>

      {/* Venture Building Program Section */}
      <div className="bg-white px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:pl-48">
          <div className="md:w-2/3 mb-4 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              A Premier Venture Building Program
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Join the ranks of fintech pioneers with Emirates NBD's National
              Digital Talent Incubator program. After the resounding success of
              our inaugural cohort, we're back to empower the next wave of
              Emirati innovators. This 6-week journey is designed for visionary
              Emirati founders and co-founders, ready to redefine finance.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/assets/images/venture-program.png"
              alt="Venture Building Program"
              className="rounded-lg shadow-lg w-full md:w-auto h-[200px] sm:h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
