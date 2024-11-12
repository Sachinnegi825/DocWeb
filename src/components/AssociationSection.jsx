import { motion } from "framer-motion";
import AssociationImage from "../assets/logo.svg";

const AssociationSection = () => {
  return (
    <section className="py-16 bg-[#4abdac]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            In Association With
          </h2>
          <p className="text-lg text-white">
            We are proud to collaborate with leading institutions and experts in
            the field of psychological assessments to provide you with the best
            tools and services.
          </p>
        </motion.div>

        {/* Association Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={AssociationImage}
            alt="Association Logo"
            className="max-w-full h-auto rounded-lg shadow-lg bg-white p-4"
            style={{ maxWidth: "350px" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AssociationSection;
