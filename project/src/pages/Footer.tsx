import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 shadow-inner border-t border-gray-200 mt-20 rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        {/* Left - Logo/Brand */}
        <div className="text-gray-800 font-extrabold text-2xl tracking-wide">
          Rapid Revise Express
        </div>

        {/* Center - Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-center gap-6 text-base font-medium text-gray-600">
          <Link
            to="/"
            className="hover:text-indigo-600 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-indigo-600 transition-colors duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/sessions"
            className="hover:text-indigo-600 transition-colors duration-300"
          >
            Sessions
          </Link>
          <Link
            to="/contact"
            className="hover:text-indigo-600 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Right - Copyright */}
        <div className="text-gray-500 text-sm mt-4 md:mt-0">
          © {currentYear} <span className="font-semibold">Rapid Revise Express</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
