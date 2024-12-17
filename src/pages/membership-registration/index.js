import React, { useState } from "react";

function MembershipRegistration() {
  const [paymentMethod, setPaymentMethod] = useState("online");

  return (
    <div className="max-w-4xl mx-auto py-12 my-12 px-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Membership Registration
      </h2>

      {/* Step Indicators */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-white mr-2">
            1
          </span>
          <span className="text-gray-500 mr-4">Personal Info</span>
        </div>
        <div className="flex items-center">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-white mr-2">
            2
          </span>
          <span className="text-gray-500 mr-4">Contact Info</span>
        </div>
        <div className="flex items-center">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white mr-2">
            3
          </span>
          <span className="text-red-600">Payment Info</span>
        </div>
      </div>

      {/* Bank Account Info */}
      <div className="bg-gray-100 p-4 rounded-md mb-6 text-sm">
        <p className="font-semibold mb-1">
          Emirates Inventors Association Account number:
          <span className="text-blue-600 underline ml-1">
            3708404028501
          </span>
        </p>
        <p>
          IBAN:{" "}
          <span className="text-blue-600 underline">
            AE5803100073708404028501
          </span>
        </p>
        <p>
          Send a copy of the payment receipt to:{" "}
          <a
            href="mailto:info@eia.ae"
            className="text-blue-600 underline"
          >
            info@eia.ae
          </a>
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Note: All members registering should have valid emirates id or UAE
          and their respective national passport.
        </p>
      </div>

      {/* Payment Amount */}
      <div className="mb-4">
        <p className="font-semibold text-lg">
          Payment annual fees: <span className="text-red-600">200 AED</span>
        </p>
      </div>

      {/* Payment Options */}
      <div className="mb-6">
        <label className="flex items-center mb-2">
          <input
            type="radio"
            name="paymentMethod"
            value="apple"
            onChange={() => setPaymentMethod("apple")}
            checked={paymentMethod === "apple"}
            className="mr-2"
          />
          Apple Pay
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="online"
            onChange={() => setPaymentMethod("online")}
            checked={paymentMethod === "online"}
            className="mr-2"
          />
          Online Payment
        </label>
      </div>

      {/* Payment Form */}
      {paymentMethod === "online" && (
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Cardholder Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="Card Number"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Expiry Date"
              className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="CVC"
              className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
            >
              &larr; Back
            </button>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default MembershipRegistration;
