import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import Logo from "../assets/logo.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#45a395] text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          {/* Left Side Logo and Description */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={Logo}
              alt="Logo"
              className="w-36 h-auto mb-4 bg-white p-2 rounded-lg"
            />
            <p className="text-lg text-center md:text-left max-w-xs">
              DocWeb provides top-notch psychological assessments designed to
              give you deeper insights into your cognitive abilities, mental
              health, and emotional well-being.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex flex-col gap-4 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#4abdac] transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#4abdac] transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#4abdac] transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#4abdac] transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#privacy-policy"
                  className="hover:text-[#4abdac] transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
            <div className="flex gap-6 text-2xl justify-center md:justify-start">
              <a
                href="https://www.facebook.com"
                className="hover:text-[#4abdac] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                className="hover:text-[#4abdac] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com"
                className="hover:text-[#4abdac] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com"
                className="hover:text-[#4abdac] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-[#3a3939]">
            <strong>
              &copy; {new Date().getFullYear()} DocWeb. All Rights Reserved.
            </strong>
          </p>
        </div>

        {/* Scroll to Top Arrow */}
        <motion.div
          className="fixed bottom-8 right-8 bg-[#4abdac] p-3 rounded-full shadow-lg cursor-pointer hover:bg-[#388f87] transition duration-300"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
        >
          <FaArrowUp className="text-white" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
