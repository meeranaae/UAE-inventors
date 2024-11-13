import React from 'react';

function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/assets/images/logo.png" // Replace with the path to your logo image
            alt="Emirates Inventors Association Logo"
            className="h-[48px]"
          />
        </div>

        {/* Navbar Links */}
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-red-500 font-semibold">Home</a>
          <a href="#" className="text-gray-700 hover:text-red-500">About</a>
          <a href="#" className="text-gray-700 hover:text-red-500">Training</a>
          <a href="#" className="text-gray-700 hover:text-red-500">Competitions</a>
          <a href="#" className="text-gray-700 hover:text-red-500">Membership</a>
          <a href="#" className="text-gray-700 hover:text-red-500">Contact</a>
        </nav>

        {/* Language and Accessibility Options */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="flex items-center space-x-1">
            <img src="path-to-us-flag.png" alt="US Flag" className="h-4" /> {/* Replace with the path to your flag icon */}
            <span className="text-gray-700">ENG</span>
          </div>

          {/* Accessibility Icon */}
          <button className="text-gray-700 hover:text-red-500">
            <i className="fas fa-universal-access"></i>
          </button>

          {/* User Profile */}
          <img
            src="./assets/images/profile.png" // Replace with the path to the user's profile image
            alt="User Profile"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
