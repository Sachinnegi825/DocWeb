import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "../assets/herosection.png";

const AssessmentsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const assessmentsData = [
    {
      name: "Cognitive Abilities Test",
      image: Image,
      description:
        "This test evaluates various cognitive abilities such as memory, attention, and problem-solving.",
    },
    {
      name: "Personality Traits Assessment",
      image: Image,
      description:
        "An in-depth evaluation of an individual's personality traits and emotional intelligence.",
    },
    {
      name: "Emotional Intelligence Test",
      image: Image,
      description:
        "A test designed to assess the emotional intelligence and social skills of individuals.",
    },
  ];

  const filteredAssessments = assessmentsData.filter((assessment) =>
    assessment.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 bg-[#f4f8f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-12 text-center">
          <input
            type="text"
            placeholder="Search an assessment..."
            className="px-4 py-2 rounded-md w-full sm:w-1/2 md:w-1/3 text-lg border border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#4abdac] focus:border-[#4abdac]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <h2 className="text-3xl font-bold text-center text-[#2a4f47] mb-12">
          Available Assessments
        </h2>

        {/* Assessments Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {filteredAssessments.map((assessment, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              transition={{
                delay: 0.2 * index,
                type: "spring",
                stiffness: 100,
              }}
            >
              <h3 className="text-xl font-semibold text-[#2a4f47] mb-4">
                {assessment.name}
              </h3>
              <div className="mb-4">
                <img
                  src={assessment.image}
                  alt={assessment.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto"
                />
              </div>
              <p className="text-center text-[#555] mb-4 text-sm">
                {assessment.description}
              </p>
              <div className="flex justify-between w-full">
                <motion.button
                  className="px-4 py-2 bg-[#4abdac] text-white rounded-md hover:bg-[#388f87] transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Take Test
                </motion.button>
                <motion.button
                  className="px-4 py-2 bg-transparent border-2 border-[#4abdac] text-[#4abdac] rounded-md hover:bg-[#4abdac] hover:text-white transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssessmentsSection;
