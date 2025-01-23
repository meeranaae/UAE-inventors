import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Want to talk to Us?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Select the right subject and get in touch. You may ask us anything you
          like. Let us know how we can help!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="emirate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Emirate
                  </label>
                  <select
                    id="emirate"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option>Dubai</option>
                    <option>Abu Dhabi</option>
                    <option>Sharjah</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="flex items-center">
                    <span className="bg-gray-100 border border-gray-300 rounded-md px-2 py-2">
                      +971
                    </span>
                    <input
                      id="phone"
                      type="tel"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="200 chars left"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              <span className="inline-block bg-gray-100 rounded-md p-2">
                <img
                  src="./assets/images/Flag_of_the_United_Arab_Emirates.svg.png"
                  alt="UAE Flag"
                  className="h-6 w-10 rounded"
                />
              </span>
              <br></br>
              <span>United Arab Emirates</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Dubai-Silicon Oasis,<br /> Industrial area, LIU-4, A6 office
            </p>

            <hr className="my-4" />

            <p className="flex items-center space-x-2 text-gray-800 mb-4">
              <FaWhatsapp className="text-green-500" size={20} />
              <a href="tel:+97145467667" className="text-blue-600">
                +971 45467667
              </a>
            </p>

            <p className="flex items-center space-x-2 text-gray-800 mb-4">
              <HiMail className="text-gray-500" size={20} />
              <a href="mailto:info@uaeia.ae" className="text-blue-600">
                info@uaeia.ae
              </a>
            </p>

            <hr className="my-4" />

            <div>
              <p className="text-gray-600 font-semibold mb-2">Follow us</p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-500 hover:text-green-700">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="text-green-500 hover:text-green-700">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-green-500 hover:text-green-700">
                  <FaGoogle size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Get directions to reach our office
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.9267409882896!2d55.378013615010225!3d25.1156189839236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d85e89002b1%3A0xb1185f2b5bcd4cf9!2sDubai%20Silicon%20Oasis!5e0!3m2!1sen!2sae!4v1614253854893!5m2!1sen!2sae"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
