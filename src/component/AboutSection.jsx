"use client"

import { motion } from "framer-motion";

export default function AboutSection() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.8 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="flex flex-col md:flex-row items-center gap-12 px-10 py-20 max-w-7xl mx-auto"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Side - Image */}
      <motion.div
        className="flex-1 flex justify-center"
        variants={item}
      >
        <img
          src="/images/about-pic.png" 
          alt="About Transformative Health Network"
          className="w-[400px] h-[450px] object-cover rounded-b-full shadow-lg"
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div className="flex-1" variants={item}>
        <motion.p
          className="text-[#1EA0E6] text-sm font-semibold uppercase tracking-wide"
          variants={item}
        >
          Our Vision & Mission 
        </motion.p>
        <motion.h2
          className="text-4xl font-bold text-gray-900 mt-2"
          variants={item}
        >
          About Transformative Health Network 
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-4 leading-relaxed"
          variants={item}
        >
          Transformative Health Network is a purpose-driven health consulting
          company focused on making meaningful connections. We bring healthcare
          professionals together with the people, startups, and organizations
          that need their expertise most. From fueling medical innovation to
          supporting new ventures and expanding access to global healthcare
          education, we’re here to move the industry forward one connection at a
          time.
        </motion.p>

        {/* Button */}
        <motion.div className="mt-6" variants={item}>
          <button className="px-6 py-3 bg-[#1EA0E6] text-white rounded-lg shadow hover:bg-blue-700 transition flex items-center gap-2">
            Learn More →
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
