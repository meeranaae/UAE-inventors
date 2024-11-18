import React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white pt-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-6 md:px-12 lg:px-24 gap-8">
        {/* Logo and Social Media Links */}
        <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <img
            src="/assets/images/logo.png" // Replace with the path to your logo image
            alt="Emirates Inventors Association Logo"
            className="h-16"
          />
          <div className="flex space-x-4 text-red-500">
            <a href="#" aria-label="Facebook" className="hover:text-red-400">
              <FaFacebookF size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-red-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="Google Plus" className="hover:text-red-400">
              <FaGooglePlusG size={24} />
            </a>
          </div>
        </div>

        {/* Get to Know Us */}
        <div className="space-y-2 text-center md:text-left">
          <h4 className="font-semibold">Get to Know Us</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-gray-400">About us</a></li>
            <li><a href="#" className="hover:text-gray-400">News & Events</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Media Center</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact us</a></li>
          </ul>
        </div>

        {/* Laws and Regulations */}
        <div className="space-y-2 text-center md:text-left">
          <h4 className="font-semibold">Laws and regulations</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-gray-400">Primary Law</a></li>
            <li><a href="#" className="hover:text-gray-400">Administrative Regulations</a></li>
            <li><a href="#" className="hover:text-gray-400">Invention Committee</a></li>
            <li><a href="#" className="hover:text-gray-400">Committee terms of reference</a></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="space-y-4 text-center md:text-left">
          <h4 className="font-semibold">Subscribe</h4>
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
            <input
              type="text"
              placeholder="Subscribe"
              className="p-2 rounded-md sm:rounded-l-md sm:rounded-r-none w-full sm:w-auto text-black focus:outline-none mb-2 sm:mb-0"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-red-700 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400">
            We provide online instant platform with quick approval
          </p>
          <button className="bg-white text-red-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200 w-full sm:w-auto">
            Complains & Suggestions
          </button>
        </div>
      </div>

      {/* Footer Bottom Text - Full Width */}
      <div className="w-full bg-gray-800 text-center py-4 mt-8">
        <p className="text-gray-400 text-sm">
          Copyright ©2024-ALUMNI UAE University. ALL Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
