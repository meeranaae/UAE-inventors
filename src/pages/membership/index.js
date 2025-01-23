import React from "react";

const Membership = () => {
  return (
    <section className="py-12 bg-white">
      {/* Membership Introduction */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Membership Types and Conditions
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
          The founding members and any member who joins the Association and fulfills the following requirements:
        </p>
      </div>

      {/* Membership Types */}
      <div className="bg-gray-50">
        <div className="flex flex-col md:flex-row items-center mb-12 py-12 px-6">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/images/membership.png"
              alt="Membership Types"
              className="rounded-lg shadow-lg w-full md:w-auto h-[200px] sm:h-[300px]"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              A. Active Membership
            </h3>
            <ul className="list-disc ml-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              <li>To be UAE national;</li>
              <li>To be at least 18 years old;</li>
              <li>To be of full legal competency;</li>
              <li>Has not been previously dismissed or suspended in any club or other association;</li>
              <li>
                Has not been sentenced to prison in any crime of breach of honor or trust, and was not rehabilitated;
              </li>
              <li>
                Holder of Educational Degree, like High School Diploma or higher degree, or who has five years' experience.
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              <b>B. Associate Membership:</b> They are the same as the Active Members, excluding that they are not UAE
              nationals and that their expertise is not less than one year, and if they are members in other countries
              their membership should not be less than two continuous years.
            </p>
            <p className="text-gray-600 leading-relaxed mt-6">
              <b>C. Honorary Membership:</b> They are those who the Board gave them this membership for their position and
              for the services they have made to the country and the association.
            </p>
          </div>
        </div>
      </div>

      {/* Membership Rights */}
      <div className="flex flex-col md:flex-row items-center mb-12 py-12 md:pl-48">
        <div className="w-full md:w-1/2 px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            Member's Rights
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            <b>a. Active Members:</b>
          </p>
          <ul className="list-disc ml-6 text-gray-600 leading-relaxed text-sm sm:text-base">
            <li>Nomination and election to be board member;</li>
            <li>Poll and vote in the General Assembly meetings;</li>
            <li>
              Practice all available activities and benefit of the Association assets according to the rules and regulations.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-4">
            <b>b. Associate Members:</b>
          </p>
          <ul className="list-disc ml-6 text-gray-600 leading-relaxed text-sm sm:text-base">
            <li>Attend the general assembly meetings;</li>
            <li>
              Practice all available activities and benefit of the Association assets according to the rules and regulations.
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/images/member-rights.jpeg"
            alt="Member's Rights"
            className="rounded-lg shadow-lg w-full md:w-auto h-[200px] sm:h-[300px]"
          />
        </div>
      </div>

      {/* Member's Fees */}
      <div className="bg-gray-50">
        <div className="flex flex-col md:flex-row-reverse items-center mb-12 py-12 px-6">
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Member's Fees
            </h3>
            <ul className="list-disc ml-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              <li>
                Fees and subscription according to the type of membership and article 58.
              </li>
              <li>Revenues of parties and activities.</li>
              <li>Donations and aids approved by the Ministry.</li>
              <li>Government aids.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-4">
              Any other revenues approved by the board of directors and do not conflict with the provisions of the Federal
              Law No. (2) of 2008 regarding Public Associations and Institutions of Public Welfare.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-4">
              Membership subscription fees are set as follows:
            </p>
            <ul className="list-disc ml-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              <li>Active Member Subscription Fee (AED 500 yearly);</li>
              <li>Associate Member Subscription Fee (AED 500 yearly);</li>
              <li>People of Determination Subscription Fee (AED 100 yearly).</li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-4">
              The yearly subscription fee covers the period from 1st of January of each year and ends on 31st of December
              of the same year, excluding the first year, which starts on member joining date and ends on 31st of December
              of the same year.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/images/member-fees.jpeg"
              alt="Member's Fees"
              className="rounded-lg shadow-lg w-full md:w-auto h-[200px] sm:h-[300px]"
            />
          </div>
        </div>
      </div>

      {/* Member's Responsibilities */}
      <div className="bg-white px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:pl-48">
          <div className="md:w-2/3 mb-4 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Member's Responsibilities
            </h3>
            <ul className="list-disc ml-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              <li>
                Work to achieve the objectives of the association and avoid anything that harms others or the association.
              </li>
              <li>
                Comply with the statutes of the Assembly, internal regulations and board decisions.
              </li>
              <li>
                Payment of the prescribed subscriptions for membership of the Association.
              </li>
              <li>
                Cooperation with the Board of Directors and implementation of its tasks.
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/assets/images/member-responsibilities.jpeg"
              alt="Member's Responsibilities"
              className="rounded-lg shadow-lg w-full md:w-auto h-[200px] sm:h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;