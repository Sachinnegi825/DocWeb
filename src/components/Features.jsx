import { motion } from "framer-motion";

const Features = () => {
  const featureData = [
    {
      title: "Comprehensive Assessments",
      description:
        "Our platform offers a wide range of psychological assessments that cover various domains like cognitive abilities, mental health, personality traits, and emotional intelligence.",
      icon: "🧠",
    },
    {
      title: "Confidential & Secure",
      description:
        "We prioritize your privacy. All your data is securely stored and protected with encryption to ensure confidentiality at all times.",
      icon: "🔒",
    },
    {
      title: "Expert Support",
      description:
        "Access 24/7 support from trained professionals for any questions related to assessments or platform use.",
      icon: "💬",
    },
  ];

  return (
    <section className="py-16 bg-[#e0f7f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2a4f47] mb-12">
          Key Features of DocWeb
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#d1f1eb] shadow-lg rounded-lg p-6 w-full lg:w-1/3 max-w-xs text-center cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, delay: 0.2 * index },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                y: -5,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="text-4xl mb-4 text-[#4abdac]">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#2a4f47] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#555]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
