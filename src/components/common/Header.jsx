import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path); 
    closeMenu(); 
  };

  return (
    <nav className="bg-white md:container relative mx-auto  px-16">
    {/* Mobile menu button */}
    <div className="fixed top-0 right-0 flex items-center sm:hidden p-4 z-50">
      <button
        type="button"
        className="rounded-md p-2 text-gray hover:bg-gray hover:text-white focus:outline-none"
        aria-controls="mobile-menu"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <svg
          className="block h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  
    <div className="hidden sm:block">
      <div className="flex items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex shrink-0 items-center  md:block lg:block">
          <img
            className="h-14 w-auto"
            src="src/assets/img/Web_Logo_Web Logo.png"
            alt="logo"
          />
        </div>
  
        {/* Desktop Links */}
        <div className="ml-auto">
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className={`rounded-md px-3 py-2 text-sm font-medium text-black ${
              activeLink === "/" ? "bg-gray text-white" : ""
            }`}
            aria-current="page"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => handleLinkClick("/about")}
            className={`rounded-md px-3 py-2 text-sm font-medium text-black ${
              activeLink === "/about" ? "bg-gray text-white" : ""
            }`}
            aria-current="page"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => handleLinkClick("/contact")}
            className={`rounded-md px-3 py-2 text-sm font-medium text-black ${
              activeLink === "/contact" ? "bg-gray text-white" : ""
            }`}
            aria-current="page"
          >
            Contact
          </Link>
          <Link
            to="/service"
            onClick={() => handleLinkClick("/service")}
            className={`rounded-md px-3 py-2 text-sm font-medium text-black ${
              activeLink === "/service" ? "bg-gray text-white" : ""
            }`}
            aria-current="page"
          >
            Service
          </Link>
        </div>
      </div>
    </div>
  
    {/* Mobile Logo */}
    <div className="mobile-logo lg:hidden md:hidden">
      <img
        className="h-12"
        src="src/assets/img/Logo_01.png"
        alt="logo"
      />
    </div>
  
    {/* Mobile Menu */}
    <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`} id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <Link
          to="/"
          className="block rounded-md bg-white px-3 py-2 text-base font-medium text-black hover:text-blue"
          aria-current="page"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block rounded-md px-3 py-2 text-base font-medium text-black hover:text-blue"
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block rounded-md px-3 py-2 text-base font-medium text-black hover:text-blue"
          onClick={closeMenu}
        >
          Contact
        </Link>
        <Link
          to="/service"
          className="block rounded-md px-3 py-2 text-base font-medium text-black hover:text-blue"
          onClick={closeMenu}
        >
          Service
        </Link>
      </div>
    </div>
  </nav>
  
  
  );
}
