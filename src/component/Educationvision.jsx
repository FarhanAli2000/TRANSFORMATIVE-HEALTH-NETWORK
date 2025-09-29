

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Educationvision() {
    const items = [
        {
            title: "Amet orci quis arcu vestibulum vestibulum.",
            description:
                "Donec velit magna, consectetur at suscipit eu, dapibus vel odio. Mauris ac nulla at ligula interdum ullamcorper. Nunc mattis eros nec eros dictum, nec molestie metus auctor. Nulla placerat nunc velit, a dictum lectus finibus quis. Nunc leo mauris, cursus vel tempor eu, tempus sed turpis.",
        },
        {
            title: "Amet orci quis arcu vestibulum vestibulum.",
            description:
                "Donec velit magna, consectetur at suscipit eu, dapibus vel odio. Mauris ac nulla at ligula interdum ullamcorper. Nunc mattis eros nec eros dictum, nec molestie metus auctor. Nulla placerat nunc velit, a dictum lectus finibus quis. Nunc leo mauris, cursus vel tempor eu, tempus sed turpis.",
        },
        {
            title: "Amet orci quis arcu vestibulum vestibulum.",
            description:
                "Donec velit magna, consectetur at suscipit eu, dapibus vel odio. Mauris ac nulla at ligula interdum ullamcorper. Nunc mattis eros nec eros dictum, nec molestie metus auctor. Nulla placerat nunc velit, a dictum lectus finibus quis. Nunc leo mauris, cursus vel tempor eu, tempus sed turpis.",
        },
        {
            title: "Amet orci quis arcu vestibulum vestibulum.",
            description:
                "Donec velit magna, consectetur at suscipit eu, dapibus vel odio. Mauris ac nulla at ligula interdum ullamcorper. Nunc mattis eros nec eros dictum, nec molestie metus auctor. Nulla placerat nunc velit, a dictum lectus finibus quis. Nunc leo mauris, cursus vel tempor eu, tempus sed turpis.",
        },
    ];

    return (
        <section className="py-16 px-6 md:px-20 text-center">
            <motion.h2
                className="text-blue-600 font-semibold tracking-wide mb-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                OUR VISION & MISSION
            </motion.h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex flex-col items-center text-center">
                            {/* Icon Centered */}
                            <motion.div
                                className="bg-blue-500 p-3 rounded-full mb-4 shadow-md"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Star className="w-6 h-6 text-white" />
                            </motion.div>

                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Button */}
            <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                Contact Us →
            </motion.button>
        </section>
    );
}
