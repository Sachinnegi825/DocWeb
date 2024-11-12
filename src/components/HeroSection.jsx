import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/herosection.png";

const HeroSection = () => {
  return (
    <section
      className="bg-[#4abdac] h-screen flex items-center justify-center px-6 md:px-12"
      style={{ fontFamily: "Kanit, sans-serif" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-5 justify-between space-y-8 md:space-y-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col justify-center text-left text-white space-y-4 md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold !mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            Welcome to DocWeb
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            style={{ fontSize: "18px", margin: "5px 0px" }}
          >
            Taken &amp; built upon{" "}
            <strong>
              one of the most trusted &amp; authentic public repository
            </strong>{" "}
            from APA's <strong>DSM-5-TR Online Assessment Measures</strong>
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={HeroImage}
            alt="Hero Section Image"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
