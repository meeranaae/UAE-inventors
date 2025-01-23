import React from "react";

const trainingData = [
  {
    id: 1,
    title: "Autodesk Inventor",
    uploadDate: "12/08/2015",
    fees: "AED 799.99",
    rate: 4.3,
    reviews: 36,
    image: "/assets/images/training1.png",
  },
  {
    id: 2,
    title: "AUTOCAD 2D & 3D Training Course",
    uploadDate: "12/08/2015",
    fees: "AED 799.99",
    rate: 4.3,
    reviews: 36,
    image: "/assets/images/training2.png",
  },
  {
    id: 3,
    title: "Design & Document more effectively",
    uploadDate: "12/08/2015",
    fees: "AED 799.99",
    rate: 4.3,
    reviews: 36,
    image: "/assets/images/training3.png",
  },
  {
    id: 4,
    title: "AUTOCAD 2D Training Program",
    uploadDate: "12/08/2015",
    fees: "AED 799.99",
    rate: 4.3,
    reviews: 36,
    image: "/assets/images/training4.png",
  },
  {
    id: 5,
    title: "Digital Learning Design",
    uploadDate: "12/08/2015",
    fees: "AED 799.99",
    rate: 4.3,
    reviews: 36,
    image: "/assets/images/training5.png",
  },
];

const Training = () => {
  return (
    <section
      className="py-12 min-h-screen"
      style={{ backgroundColor: "rgb(229, 231, 235)" }}
    >
      <div
        className="container mx-auto bg-white rounded-lg shadow-lg p-6 md:p-12"
        style={{ backgroundColor: "hsla(0, 0%, 100%, 1)" }}
      >
        {/* Tabs and View Switcher */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-6">
          <div className="flex space-x-8">
            <button
              className="text-black font-semibold border-b-2 border-black pb-1"
              aria-current="page"
            >
              Training
            </button>
            <button className="text-gray-500 hover:text-black pb-1">
              Competitions
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-100">
              Giving a lecture
            </button>
            <div className="flex space-x-2">
              <button className="border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15"
                  />
                </svg>
              </button>
              <button className="border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6.75h3.75v3.75H6V6.75zm8.25 0h3.75v3.75h-3.75V6.75zM6 15h3.75v3.75H6V15zm8.25 0h3.75v3.75h-3.75V15z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Training Items */}
        <div className="px-0 sm:px-6">
          {trainingData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow mb-4"
            >
              <div className="flex items-start sm:items-center space-x-4 w-full sm:w-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-md object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Uploaded on: {item.uploadDate}
                  </p>
                  <p className="text-gray-600 text-sm mt-1">Fees: {item.fees}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full sm:w-auto mt-4 sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600 text-sm">Rate: {item.rate}</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <span
                        key={starIndex}
                        className={`${
                          starIndex < Math.floor(item.rate)
                            ? "text-green-500"
                            : "text-gray-300"
                        }`}
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <p className="text-green-500 text-sm underline cursor-pointer">
                    {item.reviews} reviews
                  </p>
                </div>

                <button className="text-green-500 hover:text-green-600 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>

                <button className="flex items-center text-green-500 font-semibold hover:text-green-600">
                  VIEW
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 px-4">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
              &lt;
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-md ${
                  page === 1
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-green-500 hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
            <span className="px-4 py-2 text-gray-500">...</span>
            <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
              50
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
              &gt;
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Training;
