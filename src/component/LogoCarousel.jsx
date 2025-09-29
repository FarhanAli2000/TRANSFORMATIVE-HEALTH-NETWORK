

import { motion } from "framer-motion";

const logos = [
  { src: "/images/logo-motion/data1.png", alt: "David Smith" },
  { src: "/images/logo-motion/data2.png", alt: "Designlovers" },
  { src: "/images/logo-motion/data1.png", alt: "GoldenGrid" },
  { src: "/images/logo-motion/data2.png", alt: "Climb The Mountain" },
  { src: "/images/logo-motion/data1.png", alt: "Golden" },
  { src: "/images/logo-motion/data2.png", alt: "Avantgarde" },
];

export default function LogoCarousel() {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background gradient + subtle grid effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-white to-indigo-100"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      {/* Content */}
      <div className="relative overflow-hidden">
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
              className="h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
