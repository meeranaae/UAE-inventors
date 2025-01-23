import React, { useState } from "react";
import NewsCard from "./news-card";

const NewsEventsPage = () => {
  const [activeTab, setActiveTab] = useState("News");

  const newsData = [
    {
      title: "Meet the UAE’s youngest inventor",
      date: "05 Jul, 2024",
      image: "/assets/images/news1.png", // Replace with actual image path
    },
    {
      title: "UAE inventors turn dreams into reality",
      date: "05 Jul, 2024",
      image: "/assets/images/news2.png",
    },
    {
      title: "Meet the UAE’s youngest inventor",
      date: "05 Jul, 2024",
      image: "/assets/images/news1.png", // Replace with actual image path
    },
    {
      title: "UAE inventors turn dreams into reality",
      date: "05 Jul, 2024",
      image: "/assets/images/news2.png",
    },
    {
      title: "Meet the UAE’s youngest inventor",
      date: "05 Jul, 2024",
      image: "/assets/images/news1.png", // Replace with actual image path
    },
    {
      title: "UAE inventors turn dreams into reality",
      date: "05 Jul, 2024",
      image: "/assets/images/news2.png",
    },
  ];

  return (
    <section
      className="min-h-screen py-8"
      style={{ backgroundColor: "rgb(229, 231, 235)" }}
    >
      <div
        className="container mx-auto p-6 md:p-12 rounded-lg shadow-lg"
        style={{ backgroundColor: "hsla(0, 0%, 100%, 1)" }}
      >
        {/* Tabs */}
        <div className="flex space-x-8 mb-6 border-b border-gray-200">
          {["News", "Events"].map((tab) => (
            <button
              key={tab}
              className={`pb-2 ${
                activeTab === tab
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-600 hover:text-red-500"
              } font-semibold`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full md:w-auto">
            {/* Search Input */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 15.75L19.5 19.5m-4.875-9a6.375 6.375 0 11-12.75 0 6.375 6.375 0 0112.75 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search by Author name"
                className="border-none outline-none text-gray-500 ml-2 w-full"
              />
            </div>

            {/* Select Category */}
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-gray-500">
              <option value="">Select category</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
            </select>

            {/* Select Topic */}
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-gray-500">
              <option value="">Select Topic</option>
              <option value="1">Topic 1</option>
              <option value="2">Topic 2</option>
            </select>

            {/* Uploaded Date */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5v1.125m7.5-1.125v1.125m-10.5 3.75h13.5m-13.5 2.625h13.5m-13.5 2.625h13.5m-2.25 6H6.75a2.25 2.25 0 01-2.25-2.25V6.75a2.25 2.25 0 012.25-2.25h10.5a2.25 2.25 0 012.25 2.25v13.5a2.25 2.25 0 01-2.25 2.25z"
                />
              </svg>
              <input
                type="text"
                placeholder="Uploaded Date"
                className="border-none outline-none text-gray-500 ml-2 w-full"
              />
            </div>
          </div>

          {/* Filter Button */}
          <button className="flex items-center border border-red-500 text-red-500 py-2 px-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h3m-7.875 4.5h12.75M4.5 15h15"
              />
            </svg>
            Filter
          </button>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.map((news, index) => (
            <NewsCard
              title={news.title}
              date={news.date}
              image={news.image} // Replace with your image path
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg">
            &lt;
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`py-2 px-4 rounded-lg ${
                page === 1
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsPage;
