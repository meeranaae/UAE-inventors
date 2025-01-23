import React from "react";

function PersonalInfo() {
  return (
    <div className="bg-gray-50 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
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

        <form>
          <div className="mb-6">
            <label
              htmlFor="membershipType"
              className="block text-sm font-medium text-gray-700"
            >
              Membership Type <span className="text-red-500">*</span>
            </label>
            <select
              id="membershipType"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option>Student</option>
              <option>Employee</option>
              <option>Senior Citizen</option>
              <option>Disable</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "Personal photo", id: "personalPhoto" },
              { label: "Passport photo", id: "passportPhoto" },
              { label: "Emirates ID photo (Front)", id: "emiratesIdFront" },
              { label: "Emirates ID photo (Back)", id: "emiratesIdBack" },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 border-dashed border-2 border-gray-300 rounded-md p-4 text-center">
                  <input
                    id={field.id}
                    type="file"
                    className="hidden"
                  />
                  <p className="text-sm text-gray-500">
                    Click to Upload Your Photo or Drag and Drop
                  </p>
                  <p className="text-xs text-gray-400">
                    PNG, JPG or SVG format (max. size 800x400 px)
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div>
              <label
                htmlFor="idNumber"
                className="block text-sm font-medium text-gray-700"
              >
                ID No. <span className="text-red-500">*</span>
              </label>
              <input
                id="idNumber"
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="passportNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Passport No. <span className="text-red-500">*</span>
              </label>
              <input
                id="passportNumber"
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <a
              href="#login"
              className="text-blue-600 underline text-sm font-medium"
            >
              Already have an ID? Login here
            </a>
            <button
              type="button"
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
