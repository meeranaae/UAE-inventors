import React from "react";
import { HiExclamationCircle } from "react-icons/hi"; // Importing error icon from react-icons

function Failure() {
  return (
    <div className="bg-gray-50 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8">
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
            <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold">
              2
            </div>
            <p className="text-sm mt-2 text-gray-500">Contact Info</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold">
              3
            </div>
            <p className="text-sm mt-2 text-gray-500">Payment Info</p>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-8">
            <HiExclamationCircle className="mx-auto text-red-500 h-24 w-24" />
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Emirates Documents Verification
          </h3>
          <p className="text-gray-600 mb-6">
            Your documents don't match with official Emirates national documents,
            you aren’t able to continue your membership registration.
          </p>

          <button
            type="button"
            className="bg-gray-800 text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-900"
          >
            Back to Home Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Failure;
