import React from 'react';
import Select from 'react-select';
import CountryFlag from 'react-country-flag';
import { IoIosArrowDown } from 'react-icons/io'; // Dropdown arrow icon
import { FaWheelchair } from 'react-icons/fa'; // Wheelchair accessibility icon

function Navbar() {
  // Define language options
  const languageOptions = [
    { value: 'en', label: 'ENG', code: 'US' },
    { value: 'de', label: 'DE', code: 'DE' },
    { value: 'ar', label: 'AR', code: 'AE' },
  ];

  // Custom option format for the Select component to display flags
  const formatOptionLabel = ({ label, code }) => (
    <div className="flex items-center space-x-2">
      <CountryFlag countryCode={code} svg style={{ width: '1.2em', height: '1.2em' }} />
      <span className="text-gray-800 font-semibold">{label}</span>
    </div>
  );

  // Custom styles for Select component to match the layout
  const customStyles = {
    control: (provided) => ({
      ...provided,
      minWidth: '80px',
      border: 'none',
      boxShadow: 'none',
      display: 'flex',
      alignItems: 'center',
    }),
    indicatorSeparator: () => ({ display: 'none' }), // Remove the separator line
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: 0,
      color: '#4A4A4A', // Icon color
    }),
    option: (provided, state) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      color: state.isSelected ? '#d32f2f' : '#4A4A4A',
      backgroundColor: state.isSelected ? '#f5f5f5' : 'white',
      padding: '8px 12px',
    }),
    singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      fontWeight: 'bold',
      color: '#4A4A4A',
    }),
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 flex-wrap">
        {/* Logo */}
        <div className="flex items-center space-x-2 flex-grow">
          <img
            src="/assets/images/logo.png" // Replace with the path to your logo image
            alt="Emirates Inventors Association Logo"
            className="h-[48px]"
          />
        </div>

        {/* Navbar Links and Options */}
        <div className="flex items-center space-x-6">
          {/* Navbar Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-red-500 font-semibold">Home</a>
            <a href="#" className="text-gray-700 hover:text-red-500">About</a>
            <a href="#" className="text-gray-700 hover:text-red-500">Training</a>
            <a href="#" className="text-gray-700 hover:text-red-500">Competitions</a>
            <a href="#" className="text-gray-700 hover:text-red-500">Membership</a>
            <a href="#" className="text-gray-700 hover:text-red-500">Contact</a>
          </nav>

          {/* Language Selector and Icons */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <Select
              options={languageOptions}
              formatOptionLabel={formatOptionLabel}
              defaultValue={languageOptions[0]}
              styles={customStyles}
              components={{ DropdownIndicator: IoIosArrowDown }} // Use arrow icon as the dropdown indicator
              isSearchable={false}
              className="w-24"
            />

            {/* Accessibility Icon */}
            <div className="flex items-center justify-center bg-gray-200 rounded-full h-8 w-8">
              <FaWheelchair className="text-gray-700" />
            </div>

            {/* User Profile */}
            <img
              src="./assets/images/profile.png" // Replace with the path to the user's profile image
              alt="User Profile"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
