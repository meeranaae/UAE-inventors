import React, { useState } from "react";

const NewsCard = ({ title, date, image }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* News Image */}
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      {/* News Content */}
      <div className="p-4">
        {/* Title and Heart */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button onClick={toggleFavorite} className="focus:outline-none">
            {isFavorited ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-red-500"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400 hover:text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Date */}
        <p className="text-gray-500 text-sm flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5v1.125m7.5-1.125v1.125M4.5 9h15M5.25 9V6.75A2.25 2.25 0 017.5 4.5h9a2.25 2.25 0 012.25 2.25V9m-13.5 0h13.5M5.25 9v11.25a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25V9"
            />
          </svg>
          {date}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
