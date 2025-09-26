// components/LocationSection.jsx
import React from "react";

const locations = [
  {
    city: "Sydney",
    address: "123 Sample St, Sydney NSW 2000 AU",
    image: "/images/Column.png", // Use actual image path
  },
  {
    city: "New York",
    address: "123 Sample St, New York NY 10000 USA",
    image: "/images/Column.png",
  },
];

const LocationSection = () => {
  return (
    <section className="text-center bg-gradient-to-b from-[#e1e7f0] to-[#c5cfe3] py-16 px-4">
      {/* Heading */}
      <p className="text-sm text-indigo-600 uppercase tracking-wider font-medium">
        Our Vision & Mission
      </p>
      <h2 className="text-4xl font-bold mt-2">Location</h2>
      <p className="max-w-xl mx-auto mt-4 text-gray-700 text-base">
        We connect innovation with execution through expert consulting, startup
        growth solutions, and global healthcare education.
      </p>

      {/* Location Cards */}
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={loc.image}
              alt={`Map of ${loc.city}`}
              className="w-[500px] h-[350px] object-cover"
            />
            <div className="py-4">
              <h3 className="text-xl font-semibold">{loc.city}</h3>
              <p className="text-sm text-gray-600 mt-2">{loc.address}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationSection;
