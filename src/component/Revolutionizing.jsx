"use client";
import { motion } from "framer-motion";

export default function Revolutionizing() {
    return (
        <section className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left Side - Image with animations */}
            <div className="relative flex justify-center">
                {/* Main Image */}
                <motion.div
                    className="relative w-[380px] h-[460px] rounded-bl-[200px] overflow-hidden shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="/images/scissor.png" // public folder ka direct path
                        alt="Healthcare Consulting"
                        className="object-cover w-full h-full"
                    />
                </motion.div>

                {/* Floating hand animation */}
                <motion.img
                    src="/images/scissor.png" // agar alag hand wali image hai
                    alt="Surgical Tools"
                    className="absolute top-1/3 right-[-60px] hidden md:block w-[160px]"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Right Side - Content */}
            <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                    Our Vision & Mission
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                    Revolutionizing healthcare with our consulting services and connecting
                    resources.
                </h2>
                <p className="text-gray-600">
                    <span className="font-semibold">“MAKE IT WORK”</span> by connecting
                    professionals, fostering startups, supporting innovation, and enriching
                </p>

                {/* List Items */}
                <ul className="space-y-3">
                    {["The Global Education", "Leadership", "Professional Development Ecosystems"].map(
                        (item, idx) => (
                            <motion.li
                                key={idx}
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                            >
                                <div className="w-5 h-5 flex items-center justify-center bg-blue-100 rounded">
                                    <span className="text-blue-600">■</span>
                                </div>
                                <span>{item}</span>
                            </motion.li>
                        )
                    )}
                </ul>

                {/* Button with hover animation */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Learn More →
                </motion.button>
            </motion.div>
        </section>
    );
}
