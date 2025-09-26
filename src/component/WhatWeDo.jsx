// src/component/WhatWeDo.jsx
import { FaProjectDiagram, FaChartBar, FaHandsHelping } from "react-icons/fa";

const services = [
    {
        icon: <FaProjectDiagram size={32} className="text-blue-500 animate-bounce" />,
        title: "Consulting & Networking",
        description:
            "To assist with compliance, product development, and operations, we link our clients with reputable medical consultants and healthcare IT specialists. Perfect for clinics, startups, or anyone looking for strategic advice on healthcare.",
        link: "#",
    },
    {
        icon: <FaChartBar size={32} className="text-blue-500 animate-pulse" />,
        title: "Investment and Growth",
        description:
            "We support the expansion of early-stage healthcare businesses by giving them access to R&D resources, staffing solutions, real estate assistance, and health tech funding, all of which are intended to help them scale operations steadily and confidently.",
        link: "#",
    },
    {
        icon: (
            <FaHandsHelping
                size={32}
                className="text-blue-500 transition-transform duration-300 hover:rotate-12 hover:scale-110"
            />
        ),
        title: "Non-Profit and Awareness",
        description:
            "We offer free CEUs and CME programs, grand rounds, and mentorship opportunities to support ongoing education, professional growth, and global healthcare access for students, providers, and underserved communities.",
        link: "#",
    },
];

export default function WhatWeDo() {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                <p className="text-sm text-blue-600 font-medium tracking-wide uppercase">
                    Our Vision & Mission
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">What We Do</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    We connect innovation with execution through expert consulting, startup
                    growth solutions, and global healthcare education.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 mx-auto mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {service.title}
                            </h3>
                            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                            <a
                                href={service.link}
                                className="mt-4 inline-flex items-center text-blue-600 font-medium text-sm hover:underline"
                            >
                                Learn More →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
