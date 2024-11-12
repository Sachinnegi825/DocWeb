import React, { useState, useEffect } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled
          ? "bg-gradient-to-r from-[#3a8f88] to-[#4abdac]"
          : "bg-transparent"
      } text-white fixed w-full z-20 rounded-b-xl transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-extrabold tracking-wide">DocWeb</h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                href="#"
                className="hover:text-gray-100 hover:bg-[#388f87] px-4 py-2 rounded-md transition duration-300 ease-in-out"
                key={item}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3BottomRightIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-[#4abdac] text-white px-4 pb-4 pt-2 text-center transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {["Home", "About", "Services", "Contact"].map((item) => (
          <a
            href="#"
            className="block py-2 hover:bg-[#388f87] rounded-md transition duration-300 ease-in-out"
            key={item}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Header;
