import React from "react";
import { useLocation } from "react-router-dom"; // Assuming you are using React Router
import Select from "react-select";
import CountryFlag from "react-country-flag";
import { IoIosArrowDown } from "react-icons/io"; // Dropdown arrow icon
import { FaBars } from "react-icons/fa"; // Hamburger menu icon

function Navbar() {
  const location = useLocation(); // Get the current route path

  // Define language options
  const languageOptions = [
    { value: "en", label: "ENG", code: "US" },
    { value: "de", label: "DE", code: "DE" },
    { value: "ar", label: "AR", code: "AE" },
  ];

  // Custom option format for the Select component to display flags
  const formatOptionLabel = ({ label, code }) => (
    <div className="flex items-center space-x-2">
      <CountryFlag
        countryCode={code}
        svg
        style={{ width: "1.2em", height: "1.2em" }}
      />
      <span className="text-gray-800 font-semibold">{label}</span>
    </div>
  );

  // Custom styles for Select component to match the layout
  const customStyles = {
    control: (provided) => ({
      ...provided,
      minWidth: "80px",
      border: "none",
      boxShadow: "none",
      display: "flex",
      alignItems: "center",
    }),
    indicatorSeparator: () => ({ display: "none" }), // Remove the separator line
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: 0,
      color: "#4A4A4A", // Icon color
    }),
    option: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      color: state.isSelected ? "#d32f2f" : "#4A4A4A",
      backgroundColor: state.isSelected ? "#f5f5f5" : "white",
      padding: "8px 12px",
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      color: "#4A4A4A",
    }),
  };

  // Helper function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 flex-wrap">
        {/* Logo */}
        <div className="flex items-center space-x-2 flex-grow">
          <img
            src="/assets/images/logo.png"
            alt="Emirates Inventors Association Logo"
            className="h-[48px]"
          />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <FaBars className="text-gray-800 text-2xl" />
        </div>

        {/* Navbar Links and Options (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Navbar Links */}
          <nav className="flex items-center space-x-6 relative">
            <a
              href="/"
              className={`${
                isActive("/") ? "text-red-500 font-semibold" : "text-gray-700"
              } hover:text-red-500`}
            >
              Home
            </a>

            {/* About Dropdown */}
            <div className="group relative">
              <button
                className={`${
                  isActive("/about") || isActive("/about/staff")
                    ? "text-red-500 font-semibold"
                    : "text-gray-700"
                } hover:text-red-500 flex items-center`}
              >
                About <IoIosArrowDown className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 hidden group-hover:block">
                <a
                  href="/about"
                  className={`block px-4 py-2 ${
                    isActive("/about")
                      ? "text-red-500 font-semibold"
                      : "text-gray-700"
                  } hover:text-red-500 hover:bg-gray-100`}
                >
                  About Association
                </a>
                <a
                  href="/about/staff"
                  className={`block px-4 py-2 ${
                    isActive("/about/staff")
                      ? "text-red-500 font-semibold"
                      : "text-gray-700"
                  } hover:text-red-500 hover:bg-gray-100`}
                >
                  Association Staff
                </a>
              </div>
            </div>

            <a
              href="/training"
              className={`${
                isActive("/training")
                  ? "text-red-500 font-semibold"
                  : "text-gray-700"
              } hover:text-red-500`}
            >
              Training
            </a>
            <a
              href="/sponsorship"
              className={`${
                isActive("/sponsorship")
                  ? "text-red-500 font-semibold"
                  : "text-gray-700"
              } hover:text-red-500`}
            >
              Competitions
            </a>
            <a
              href="/membership"
              className={`${
                isActive("/membership")
                  ? "text-red-500 font-semibold"
                  : "text-gray-700"
              } hover:text-red-500`}
            >
              Membership
            </a>
            <a
              href="/contact"
              className={`${
                isActive("/contact")
                  ? "text-red-500 font-semibold"
                  : "text-gray-700"
              } hover:text-red-500`}
            >
              Contact
            </a>
          </nav>
          {/* Language Selector and Icons */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <Select
              options={languageOptions}
              formatOptionLabel={formatOptionLabel}
              defaultValue={languageOptions[0]}
              styles={customStyles}
              components={{ DropdownIndicator: IoIosArrowDown }}
              isSearchable={false}
              className="w-24"
            />

            {/* Accessibility Icon */}
            <div className="flex items-center justify-center bg-gray-200 rounded-full h-8 w-8">
              <FaBars className="text-gray-700" />
            </div>

            {/* User Profile */}
            <img
              src="./assets/images/profile.png"
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
