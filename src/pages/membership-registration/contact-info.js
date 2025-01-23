import React from "react";

function ContactInfo() {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Membership Registration
        </h2>
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              1
            </div>
            <p className="text-sm mt-2 text-gray-700">Personal Info</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              2
            </div>
            <p className="text-sm mt-2 text-gray-700">Contact Info</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold">
              3
            </div>
            <p className="text-sm mt-2 text-gray-500">Payment Info</p>
          </div>
        </div>

        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="arabicName"
                className="block text-sm font-medium text-gray-700"
              >
                Arabic Name <span className="text-red-500">*</span>
              </label>
              <input
                id="arabicName"
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="englishName"
                className="block text-sm font-medium text-gray-700"
              >
                English Name <span className="text-red-500">*</span>
              </label>
              <input
                id="englishName"
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-4 mt-1">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span>Female</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Account <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-4 mt-1">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="account"
                    value="personal"
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span>Personal</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="account"
                    value="company"
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span>Company</span>
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="nationality"
                className="block text-sm font-medium text-gray-700"
              >
                Nationality <span className="text-red-500">*</span>
              </label>
              <select
                id="nationality"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option>United Arab Emirates</option>
                <option>Saudi Arabia</option>
                <option>Qatar</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                id="dateOfBirth"
                type="date"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-2">
                <span className="bg-gray-100 border border-gray-300 rounded-md p-2">
                  +971
                </span>
                <input
                  id="mobile"
                  type="tel"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address <span className="text-red-500">*</span>
              </label>
              <input
                id="address"
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                id="city"
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="relativePhone"
                className="block text-sm font-medium text-gray-700"
              >
                Relative Phone No. <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-2">
                <span className="bg-gray-100 border border-gray-300 rounded-md p-2">
                  +971
                </span>
                <input
                  id="relativePhone"
                  type="tel"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="qualification"
                className="block text-sm font-medium text-gray-700"
              >
                Qualification <span className="text-red-500">*</span>
              </label>
              <input
                id="qualification"
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="currentJob"
                className="block text-sm font-medium text-gray-700"
              >
                Current Job <span className="text-red-500">*</span>
              </label>
              <input
                id="currentJob"
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="text-gray-700">
                I agree to UAE Inventors Association’s
                <a href="#" className="text-blue-600 underline">
                  terms & conditions
                </a>
                and
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>

          <div className="mt-6 flex justify-between">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-400"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactInfo;
