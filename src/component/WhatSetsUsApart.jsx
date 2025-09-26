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

export default function WhatSetsUsApart() {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-indigo-50">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                    Our Vision & Mission
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    What Sets Us Apart
                </h2>
                <p className="text-gray-600">
                    Our strength lies in a strategic, flexible model that bridges
                    healthcare professionals, startups, and global education exactly
                    where it’s needed most.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white flex flex-col h-full">
                            <div className="text-3xl mb-4">{feature.icon}</div>
                            <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {feature.description}
                            </p>
                            <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium text-sm mt-auto">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
