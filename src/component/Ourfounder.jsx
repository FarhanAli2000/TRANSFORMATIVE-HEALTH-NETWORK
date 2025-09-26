"use client";

import { Linkedin, Globe, X } from "lucide-react";

const teamMembers = [
    {
        name: "Full name",
        title: "Job title",
        image: "/images/About/member1.png", // replace with actual image path
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
        name: "Full name",
        title: "Job title",
        image: "/images/About/member2.png", // replace with actual image path
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
        name: "Full name",
        title: "Job title",
        image: "/images/About/member3.png", // replace with actual image path
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
];

export default function Ourfounder() {
    return (
        <section className="bg-gradient-to-b from-[#E8F0FB] to-white py-16">
            <div className="max-w-6xl mx-auto text-center px-6">
                <p className="text-sm text-blue-600 font-semibold tracking-wide">
                    OUR FOUNDER
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mt-2">What We Do</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    We connect innovation with execution through expert consulting,
                    startup growth solutions, and global healthcare education.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
                        >
                            <div className="w-full h-72 relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full "
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="font-bold text-lg">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.title}</p>
                                <p className="text-gray-600 text-sm mt-3 flex-grow">
                                    {member.description}
                                </p>
                                {/* Social Icons */}
                                <div className="flex space-x-7 mt-4 justify-center">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-blue-600 transition"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-black transition"
                                    >
                                        <X size={20} />
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-purple-600 transition"
                                    >
                                        <Globe size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
