

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Revolutionizing = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16">
      {/* Left Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        {/* Main About Image - Front */}
        <img
          src="/images/about-pic.png"
          alt="About Transformative Health Network"
          className="relative z-10 w-64 h-72 md:w-96 md:h-[450px] object-cover rounded-b-full shadow-lg"
        />

        {/* Floating Hand (Scissor) Image - Animated Behind */}
        <motion.img
          src="/images/scissor.png"
          alt="Floating Hand"
          className="absolute top-1/3 right-0 md:right-10 w-28 drop-shadow-xl z-0"
          initial={{ y: 0, rotate: 0, scale: 1, scaleX: -1 }}
          animate={{
            y: [0, -20, 0, 10, 0], // up-down motion
            rotate: [0, -5, 0, 5, 0], // rotation
            scale: [1, 1.05, 1, 0.95, 1], // zoom in-out
            scaleX: -1, // keep flipped
            filter: [
              "drop-shadow(0px 0px 0px rgba(0,0,0,0.3))",
              "drop-shadow(0px 0px 10px rgba(59,130,246,0.7))",
              "drop-shadow(0px 0px 0px rgba(0,0,0,0.3))",
            ], // glowing shadow pulse
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            y: [-10, 10, -10], // fast bounce
            rotate: [0, 10, -10, 0], // wiggle
            scale: 1.1, // bigger
            transition: { duration: 1, repeat: Infinity },
          }}
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-16">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
          Our Vision & Mission
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
          Revolutionizing healthcare with our consulting services and connecting
          resources.
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          <span className="font-semibold">“MAKE IT WORK”</span> by connecting
          professionals, fostering startups, supporting innovation, and
          enriching.
        </p>

        <ul className="mt-6 space-y-3 text-gray-800">
          <li className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-600 rounded-sm"></span>
            The Global Education
          </li>
          <li className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-600 rounded-sm"></span>
            Leadership
          </li>
          <li className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-600 rounded-sm"></span>
            Professional Development Ecosystems
          </li>
        </ul>

        <button className="mt-8 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-all">
          Learn More <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Revolutionizing;
