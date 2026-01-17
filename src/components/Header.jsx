import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100/50">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 via-purple-50/20 to-pink-50/30 opacity-50"></div>

      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            PayDay Loans
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</Link>
            <Link to="/blog" className="text-gray-700 hover:text-indigo-600 transition-colors">Blog</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors">Testimonials</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/apply-now" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Get your loan now!
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 pt-4">
              <Link to="/" className="px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/services" className="px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link to="/about" className="px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/blog" className="px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/testimonials" className="px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                Testimonials
              </Link>
              <Link to="/contact" className="px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div className="pt-4">
                <Link to="/apply-now" className="block w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 text-center font-semibold shadow-lg" onClick={() => setIsMenuOpen(false)}>
                  Get your loan now!
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
