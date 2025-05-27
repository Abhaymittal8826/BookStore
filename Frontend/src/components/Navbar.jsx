import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Course", path: "/course" },
    { label: "Contact", path: "#contact" },
    { label: "About", path: "#about" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        sticky
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              bookStore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-48 px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 transition-all duration-300"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 top-2.5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-slate-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {authUser ? (
              <Logout />
            ) : (
              <button
                onClick={() => document.getElementById("my_modal_3").showModal()}
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium transform transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } py-4 space-y-2`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-300"
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
          <div className="p-4 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 top-2.5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {!authUser && <Login />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
