import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  useEffect(() => {
    // Update active link based on current location
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    closeMenu();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-white sticky top-0 py-1 sm:py-0 z-50 shadow-md">
      <div className="xl:container mx-auto sm:px-6 lg:px-16">
        {/* Mobile menu button */}
        <div className="fixed top-0 sm:top-4 right-0 flex items-center md:hidden p-4 z-50">
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
            <Link to="/" onClick={scrollToTop}>
              <div className="flex shrink-0 items-center md:block lg:block">
                <img
                  className="h-16"
                  src="src/assets/img/Web_Logo_Web Logo.png"
                  alt="logo"
                />
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="ml-auto hidden md:block">
              <Link
                to="/"
                onClick={() => {
                  handleLinkClick("/");
                  scrollToTop();
                }}
                className={`rounded-md px-3 py-1 text-sm font-medium hover:text-secondary ${activeLink === "/" ? "border-b-2 border-primary" : ""
                  }`}
                aria-current="page"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                onClick={() => {
                  handleLinkClick("/about");
                  scrollToTop();
                }}
                className={`rounded-md px-3 py-1 text-sm font-medium hover:text-secondary ${activeLink === "/about" ? "border-b-2 border-primary" : ""
                  }`}
                aria-current="page"
              >
                About Us
              </Link>

              {/* Dropdown for Services */}
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold hover:text-secondary"
                  id="menu-button"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg
                    className="-mr-1 size-5 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                  >
                    <div className="py-1" role="none">
                      <Link
                        to="/merchant-cash"
                        className="block px-4 py-2 text-sm hover:text-secondary"
                        onClick={() => {
                          handleLinkClick("/merchant-cash");
                          scrollToTop();
                        }}
                      >
                        Merchant Cash Advances
                      </Link>
                      <Link
                        to="/line-of-credit"
                        className="block px-4 py-2 text-sm hover:text-secondary"
                        onClick={() => {
                          handleLinkClick("/line-of-credit");
                          scrollToTop();
                        }}
                      >
                        Lines of Credit
                      </Link>
                      <Link
                        to="/equipment-financing"
                        className="block px-4 py-2 text-sm hover:text-secondary"
                        onClick={() => {
                          handleLinkClick("/equipment-financing");
                          scrollToTop();
                        }}
                      >
                       Equipment Financing
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact-us"
                onClick={() => {
                  handleLinkClick("/contact");
                  scrollToTop();
                }}
                className={`rounded-md px-3 py-1 text-sm font-medium hover:text-secondary ${activeLink === "/contact" ? "border-b-2 border-primary" : ""
                  }`}
                aria-current="page"
              >
                Contact Us
              </Link>
              <Link
                to="/blogs"
                onClick={() => {
                  handleLinkClick("/blog");
                  scrollToTop();
                }}
                className={`rounded-md px-3 py-1 text-sm font-medium hover:text-secondary ${activeLink === "/blog" ? "border-b-2 border-primary" : ""
                  }`}
                aria-current="page"
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Logo */}
        <div className="mobile-logo lg:hidden sm:hidden">
          <img className="h-16" src="src/assets/img/Logo_01.jpg" alt="logo" />
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/"
              className="block rounded-md bg-white px-3 py-2 text-base font-medium text-black hover:text-secondary"
              aria-current="page"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-black hover:text-secondary"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-black hover:text-secondary"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={toggleDropdown}
                className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold hover:text-secondary"
                id="menu-button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Services
                <svg
                  className="-mr-1 size-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white "
                  role="menu"
                  aria-orientation=""
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    <Link
                      to="/merchant-cash"
                      className="block px-4 py-2 text-sm  hover:text-secondary"
                      onClick={() => {
                        handleLinkClick("/merchant-cash");
                        scrollToTop();
                      }}
                    >
                      Merchant Cash Advances
                    </Link>
                    <Link
                      to="/line-of-credit"
                      className="block px-4 py-2 text-sm hover:text-secondary"
                      onClick={() => {
                        handleLinkClick("/line-of-credit");
                        scrollToTop();
                      }}
                    >
                     Lines of Credit
                    </Link>
                    <Link
                      to="/equipment-financing"
                      className="block px-4 py-2 text-sm hover:text-secondary"
                      onClick={() => {
                        handleLinkClick("/equipment-financing");
                        scrollToTop();
                      }}
                    >
                     Equipment Financing
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
