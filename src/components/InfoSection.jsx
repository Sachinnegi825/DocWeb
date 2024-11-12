import React from "react";
import { motion } from "framer-motion";
import DrImage from "../assets/small-hero.jpg";
import Infosection from "../assets/infoSection.png";

const InfoSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#4abdac] to-[#3a8f88]">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col gap-10 md:gap-1 md:flex-row items-center justify-between">
          <motion.div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h1 className="text-3xl text-left font-bold text-black mb-4 font-kanit">
              #TalkToMissMp's <br />
              Digital tool for,
              <br />
              Psychological Assessments
            </h1>
            <p className="text-lg text-white mb-6 max-w-xl text-left">
              For further clinical evaluation and research, the APA is offering
              a number of “emerging measures” in Section III of DSM-5-TR. These
              patient assessment measures were developed to be administered at
              the initial patient interview and to monitor treatment progress...
            </p>

            <img
              src={DrImage}
              alt="Dr Image"
              className="w-32 h-32 rounded-full object-cover shadow-lg mb-3 mx-auto"
            />
            <p className="text-lg text-white font-semibold italic mb-6 max-w-xl mx-auto flex items-center gap-2">
              <span className="inline-block w-8 h-[2px] bg-white rounded-lg"></span>
              Dr. Manpreet, Psychologist
              <span className="inline-block w-8 h-[2px] bg-white rounded-lg"></span>
            </p>

            <div className="flex justify-center w-full">
              <button className="bg-[#4abdac] text-white px-2 py-2 md:px-6 md:py-3 rounded-lg shadow-md text-lg hover:bg-[#388f87] transition duration-300 text-center outline outline-1 outline-white outline-offset-1">
                Book a Psychological Appointment
              </button>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <img
              src={Infosection}
              alt="Small Hero Visual"
              className="rounded-md object-cover shadow-lg outline outline-1 outline-white outline-offset-4"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
