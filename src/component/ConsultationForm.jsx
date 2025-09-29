"use client";

import React from "react";

const ConsultationForm = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 bg-gradient-to-b from-[#e9f0ff] to-[#dbe9ff] rounded-lg">
      {/* Left Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        {/* Doctor Image - Front */}
        <img
          src="/images/consulting/doctors.jpg"
          alt="About Transformative Health Network"
          className="relative z-10 w-[400px] h-[450px] object-cover rounded-b-full shadow-lg"
        />

        {/* Floating Stethoscope - Peeche se nikalti hui */}
        <img
          src="/images/consulting/strato.png"
          alt="Stethoscope"
          className="absolute top-1/2 -right-10 w-44 drop-shadow-lg z-0"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-16">
        <p className="text-sm font-semibold text-blue-600">
          Join the Expert Network
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
          Are You a Healthcare Expert?
        </h2>
        <p className="text-gray-600 mt-3 leading-relaxed">
          Join our expert network to contribute your knowledge, mentor startups,
          or speak at events.
        </p>

        {/* Form */}
        <form className="mt-8 space-y-6">
          {/* Full Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Placeholder"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Placeholder"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Phone Number */}
          <input
            type="text"
            placeholder="Placeholder"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Business Strategy</option>
              <option>Healthcare Innovation</option>
              <option>Leadership</option>
            </select>
            <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Phone Call</option>
              <option>Email</option>
              <option>Video Call</option>
            </select>
          </div>

          {/* Textarea */}
          <textarea
            placeholder="Placeholder"
            rows="4"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition-all"
          >
            Request Consultation
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;
