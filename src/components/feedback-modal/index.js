import React, { useState } from "react";

const FeedbackModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("Suggestions");

  if (!isOpen) return null;

  const renderForm = () => {
    switch (activeTab) {
      case "Suggestions":
        return (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <select className="border border-gray-300 rounded-lg p-2 w-full">
                <option value="">Suggestion for</option>
                <option value="service">Service</option>
                <option value="product">Product</option>
              </select>
            </div>
            <textarea
              placeholder="Description"
              className="border border-gray-300 rounded-lg p-2 w-full mt-4"
              rows="4"
            ></textarea>
            <div className="flex justify-end">
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4">
                Submit Suggestion
              </button>
            </div>
          </div>
        );
      case "Complain":
        return (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <select className="border border-gray-300 rounded-lg p-2 w-full">
                <option value="">Reason for complain</option>
                <option value="service">Service</option>
                <option value="product">Product</option>
              </select>
            </div>
            <textarea
              placeholder="Provide any complain details"
              className="border border-gray-300 rounded-lg p-2 w-full mt-4"
              rows="4"
            ></textarea>
            <div className="flex justify-end">
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4">
                Submit Complain
              </button>
            </div>
          </div>
        );
      case "Survey":
        return (
          <div>
            {["Organization", "Relevance", "Course notes", "Supporting material", "Style", "Backup"].map(
              (item, index) => (
                <div className="flex items-center justify-between my-2" key={index}>
                  <span>{item}</span>
                  <div className="flex space-x-2">
                    {["Poor", "Good", "V.Good", "Excellent"].map((option, idx) => (
                      <label key={idx} className="flex items-center space-x-1">
                        <input type="radio" name={item} value={option} />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )
            )}
            <div className="text-center mt-4">
              <span className="block mb-2">Overall rating with the service</span>
              <div className="flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} className="text-yellow-500 text-2xl">
                    ★
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4">
                Submit Feedback
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 md:p-10 w-full max-w-2xl relative">
        <button
          className="absolute top-4 right-4 text-gray-500"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="flex justify-between border-b border-gray-200 mb-4 space-x-2 md:space-x-6">
          {["Suggestions", "Complain", "Survey"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-2 md:px-4 ${
                activeTab === tab
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {renderForm()}
      </div>
    </div>
  );
};

export default FeedbackModal;
