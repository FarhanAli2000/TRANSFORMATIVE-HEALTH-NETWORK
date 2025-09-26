"use client";
import React from "react";

export default function ConsultationForm() {
    return (
        <section className="relative bg-gradient-to-b from-[#ABBFF2] to-[#EBF2FF] py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                {/* Left Side - Image */}
                <div className="relative flex justify-center">
                    {/* Doctor Image */}
                    <div className="relative w-[380px] h-[480px] rounded-bl-[200px] overflow-hidden shadow-xl">
                        <img
                            src="/images/consulting/doctors.jpg"
                            alt="Healthcare Experts"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Stethoscope floating image */}
                    <img
                        src="/images/consulting/strato.png"
                        alt="Stethoscope"
                        className="absolute bottom-10 right-[-60px] hidden md:block w-[180px]"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg">
                    <p className="text-blue-600 text-sm font-semibold mb-2">
                        Join the Expert Network
                    </p>
                    <h2 className="text-3xl font-bold mb-4">
                        Are You a Healthcare Expert?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Join our expert network to contribute your knowledge, mentor startups,
                        or speak at events.
                    </p>

                    <form className="space-y-5">
                        {/* Name & Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        {/* Phone Number */}
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        {/* Dropdowns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
                                <option>Business Strategy</option>
                                <option>Medical Research</option>
                                <option>Consultation</option>
                            </select>
                            <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
                                <option>Phone Call</option>
                                <option>Email</option>
                                <option>Zoom Meeting</option>
                            </select>
                        </div>

                        {/* Inquiry */}
                        <textarea
                            rows="4"
                            placeholder="Your Inquiry"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow hover:bg-blue-700 transition"
                        >
                            Request Consultation
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
