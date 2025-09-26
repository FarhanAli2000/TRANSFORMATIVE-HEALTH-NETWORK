"use client";

import { motion } from "framer-motion";

const logos = [
    { src: "/images/logo-motion/data1.png", alt: "David Smith" },
    { src: "/images/logo-motion/data1.png", alt: "Designlovers" },
    { src: "/images/logo-motion/data1.png", alt: "GoldenGrid" },
    { src: "/images/logo-motion/data1.png", alt: "Climb The Mountain" },
    { src: "/images/logo-motion/data1.png", alt: "Golden" },
    { src: "/images/logo-motion/data1.png", alt: "Avantgarde" },
];

export default function LogoCarousel() {
    return (
        <section className="py-10 bg-gradient-to-b from-white to-indigo-50">
            <div className="overflow-hidden relative">
                <motion.div
                    className="flex gap-16 items-center"
                    initial={{ x: 0 }}
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {logos.concat(logos).map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-12 object-contain"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
