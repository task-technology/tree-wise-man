import React from "react";

const HeroLoading: React.FC = () => {
  return (
    <div className="relative h-60 md:h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      <div className="relative z-10 h-full container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          {/* Left Section (Image Placeholder) */}
          <div className="w-full md:w-2/5 flex justify-center items-center mb-8 md:mb-0">
            <div
              className="h-32 w-28 md:h-96 md:w-60 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-md overflow-hidden animate-pulse"
              aria-label="Loading image placeholder"
            ></div>
          </div>

          {/* Right Section (Title and Description) */}
          <section className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-4 md:space-y-6">
            <div className="h-8 md:h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg w-4/5 shadow-md animate-pulse"></div>
            <div className="h-6 md:h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg w-full shadow-md animate-pulse"></div>
            <div className="h-6 md:h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg w-5/6 shadow-md animate-pulse"></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroLoading;
