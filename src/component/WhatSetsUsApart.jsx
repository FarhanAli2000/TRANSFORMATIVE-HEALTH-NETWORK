"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Comprehensive Service Offering",
    description:
      "To assist with compliance, product development, and operations, we link our clients with reputable medical consultants and healthcare IT specialists. Perfect for clinics, startups, or anyone looking for strategic advice on healthcare.",
    icon: "✨",
  },
  {
    title: "Experienced Leadership",
    description:
      "We support the expansion of early-stage healthcare businesses by giving them access to R&D resources, staffing solutions, real estate assistance, and health tech funding, all of which are intended to help them scale operations steadily and confidently.",
    icon: "🏢",
  },
  {
    title: "Local and Global Network",
    description:
      "We offer free CEUs and CME programs, grand rounds, and mentorship opportunities to support ongoing education, professional growth, and global healthcare access for students, providers, and underserved communities.",
    icon: "🌐",
  },
  {
    title: "Flexible & Scalable Model",
    description:
      "To assist with compliance, product development, and operations, we link our clients with reputable medical consultants and healthcare IT specialists. Perfect for clinics, startups, or anyone looking for strategic advice on healthcare.",
    icon: "⚖️",
  },
  {
    title: "Diverse Revenue Streams",
    description:
      "We support the expansion of early-stage healthcare businesses by giving them access to R&D resources, staffing solutions, real estate assistance, and health tech funding, all of which are intended to help them scale operations steadily and confidently.",
    icon: "🔀",
  },
  {
    title: "Technology-Integrated Operations",
    description:
      "We offer free CEUs and CME programs, grand rounds, and mentorship opportunities to support ongoing education, professional growth, and global healthcare access for students, providers, and underserved communities.",
    icon: "⚛️",
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhatSetsUsApart() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-indigo-50">
      {/* Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
          Our Vision & Mission
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
          What Sets Us Apart
        </h2>
        <p className="text-gray-600">
          Our strength lies in a strategic, flexible model that bridges healthcare
          professionals, startups, and global education exactly where it’s needed most.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition bg-white flex flex-col h-full">
              {/* Icon with animation */}
              <motion.div
                className="text-3xl mb-4"
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium text-sm mt-auto"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
