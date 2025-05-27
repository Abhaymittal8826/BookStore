import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24">
        <div className="w-full md:w-1/2 space-y-8 order-2 md:order-1">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Discover New Knowledge
              <span className="block mt-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Every Single Day
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore our curated collection of books and courses. Learn from
              industry experts and take your skills to the next level.
            </p>

            <div className="relative">
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full px-6 py-4 rounded-full bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 focus:border-pink-500 dark:focus:border-pink-500 transition-all duration-300 outline-none"
                />
                <button className="absolute right-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium transform transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                  Start Learning
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-pink-100 dark:bg-pink-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-pink-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">100+ Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Expert Instructors</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 mb-12 md:mb-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <img
              src={banner}
              className="relative z-10 w-full max-w-[600px] mx-auto transform transition-transform duration-500 hover:scale-105"
              alt="Learn with us"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
